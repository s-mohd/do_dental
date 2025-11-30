import frappe
import json
from collections import defaultdict
from dateutil.relativedelta import relativedelta
from frappe.utils import getdate, nowdate, nowtime, flt

@frappe.whitelist()
def get_patient_dental_chart(patient_id):
    """Return latest dental chart with conditions, restorations, pathology and periodontal values."""
    chart = ensure_patient_chart_exists(patient_id)

    if not chart:
        return None

    conditions = frappe.get_all(
        "Dental Tooth Condition",
        filters={"parent": chart.name},
        fields=["tooth_number", "state", "eruption_status", "mobility", "furcation", "condition_notes"]
    )

    restorations = frappe.get_all(
        "Tooth Restoration",
        filters={"dental_chart": chart.name},
        fields=[
            "name",
            "tooth",
            "restoration_type",
            "type",
            "material",
            "quality",
            "detail",
            "crown_material",
            "crown_type",
            "crown_base",
            "crown_implant_type",
            "clinical_procedure",
            "patient_encounter",
            "date",
            "time",
        ],
    )
    for r in restorations:
        r["surfaces"] = frappe.get_all(
            "Tooth Surfaces",
            filters={"parent": r["name"]},
            fields=["surface"]
        )

    pathology = frappe.get_all(
        "Tooth Pathology",
        filters={"dental_chart": chart.name},
        fields=[
            "name",
            "tooth",
            "pathology_type",
            "decay_stage",
            "cavitation",
            "pulp",
            "decay_level",
            "fracture_type",
            "fracture_position",
            "discoloration_type",
            "wear_type",
            "notes",
            "clinical_procedure",
            "patient_encounter",
            "date",
            "time",
        ],
    )

    # Fetch child table data for each pathology record
    for p in pathology:
        # Fetch decay_surfaces child table
        p["decay_surfaces"] = frappe.get_all(
            "Tooth Surfaces",
            filters={"parent": p["name"], 'parentfield': 'decay_surfaces'},
            fields=["surface"]
        )

        # Fetch wear_surfaces child table
        p["wear_surfaces"] = frappe.get_all(
            "Tooth Surfaces",
            filters={"parent": p["name"], 'parentfield': 'wear_surfaces'},
            fields=["surface"]
        )

    periodontal = build_periodontal_map(chart.name)
    visits = build_visit_history(chart.patient, restorations, pathology)

    return {
        "chart": chart,
        "conditions": conditions,
        "restorations": restorations,
        "pathology": pathology,
        "periodontal": periodontal,
        "visits": visits,
    }

@frappe.whitelist()
def save_tooth_update(chart_id, tooth, pathology=None, restoration=None, condition=None):
    def ensure_dict(value):
        if isinstance(value, str):
            try:
                return json.loads(value)
            except json.JSONDecodeError:
                return {}  # not valid JSON → return empty dict
        return value or {}

    pathology = ensure_dict(pathology)
    restoration = ensure_dict(restoration)
    condition = ensure_dict(condition)
    patient = frappe.get_value("Patient Dental Chart", chart_id, "patient")

    # --- Pathology ---
    if pathology:
        name = pathology.pop("name", None)
        if name:
            doc = frappe.get_doc("Tooth Pathology", name)
            for key, value in pathology.items():
                doc.set(key, value)
            doc.save(ignore_permissions=True)
        else:
            doc = frappe.get_doc({
                "doctype": "Tooth Pathology",
                "dental_chart": chart_id,
                "patient": patient,
                "tooth": tooth,
                **pathology
            })
            doc.insert(ignore_permissions=True)

    # --- Restoration ---
    if restoration:
        name = restoration.pop("name", None)
        surfaces = restoration.pop("surfaces", None)
        if name:
            doc = frappe.get_doc("Tooth Restoration", name)
            for key, value in restoration.items():
                doc.set(key, value)

            for surface in surfaces or []:
                doc.append("surfaces", surface)
            doc.save(ignore_permissions=True)
        else:
            doc = frappe.get_doc({
                "doctype": "Tooth Restoration",
                "dental_chart": chart_id,
                "patient": patient,
                "tooth": tooth,
                **restoration
            })

            for surface in surfaces or []:
                doc.append("surfaces", surface)
            doc.insert(ignore_permissions=True)

    # --- Condition ---
    if condition:
        chart_doc = frappe.get_doc("Patient Dental Chart", chart_id)
        tooth_val = str(tooth)
        condition_row = next(
            (row for row in chart_doc.tooth_condition
             if str(getattr(row, "tooth_number", "")).strip() == tooth_val
             or str(getattr(row, "tooth", "")).strip() == tooth_val),
            None,
        )

        for key in ("name", "parent", "parentfield", "parenttype"):
            condition.pop(key, None)

        if condition_row:
            for field, value in condition.items():
                if hasattr(condition_row, field):
                    condition_row.set(field, value)
        else:
            chart_doc.append("tooth_condition", {
                "tooth_number": tooth,
                **condition,
            })

        chart_doc.save(ignore_permissions=True)

    frappe.db.commit()
    return True

@frappe.whitelist()
def delete_tooth_record(doctype, name):
    allowed = {"Tooth Pathology", "Tooth Restoration"}
    if doctype not in allowed:
        frappe.throw("Not allowed", frappe.PermissionError)
    frappe.delete_doc(doctype, name, ignore_permissions=True)
    frappe.db.commit()
    return True

@frappe.whitelist()
def create_chart_procedure(payload):
    if isinstance(payload, str):
        try:
            payload = json.loads(payload)
        except Exception:
            payload = {}
    payload = payload or {}
    patient_id = payload.get("patient_id")
    teeth = payload.get("teeth") or []
    if not patient_id:
        frappe.throw("Patient is required.")
    if not teeth:
        frappe.throw("Select at least one tooth.")
    chart = ensure_patient_chart_exists(patient_id)
    if not chart:
        frappe.throw("Unable to locate dental chart.")

    template_name = payload.get("template")
    procedure_meta = payload.get("procedure") or {}
    procedure_doc = None
    if template_name:
        company = (
            procedure_meta.get("company")
            or frappe.defaults.get_user_default("Company")
            or frappe.defaults.get_global_default("company")
        )
        procedure_doc = frappe.get_doc(
            {
                "doctype": "Clinical Procedure",
                "patient": patient_id,
                "procedure_template": template_name,
                "title": procedure_meta.get("title") or f"{template_name} - {patient_id}",
                "company": company,
                "practitioner": procedure_meta.get("provider"),
                "appointment": procedure_meta.get("appointment"),
                "notes": procedure_meta.get("notes"),
                "start_date": nowdate(),
                "start_time": nowtime(),
                "status": procedure_meta.get("status") or "Draft",
            }
        ).insert()

    restoration_payload = normalise_restoration_payload(payload.get("restoration"))
    if procedure_doc and restoration_payload is not None:
        restoration_payload["clinical_procedure"] = procedure_doc.name
    if restoration_payload:
        for tooth in teeth:
            save_tooth_update(chart.name, stringify_tooth(tooth), restoration=restoration_payload)
    frappe.db.commit()
    return {"procedure": procedure_doc.name if procedure_doc else None}

@frappe.whitelist()
def save_periodontal_test(chart_id, patient_id, periodontal):
    if isinstance(periodontal, str):
        try:
            periodontal = json.loads(periodontal)
        except Exception:
            periodontal = {}
    if not periodontal:
        frappe.throw("No periodontal data provided")

    doc = frappe.get_doc({
        "doctype": "Periodontal Test",
        "dental_chart": chart_id,
        "patient": patient_id,
        "date": nowdate(),
        "time": nowtime(),
    })

    for tooth, entry in periodontal.items():
        record = build_periodontal_record(tooth, entry)
        doc.append("periodontal_test_records", record)

    doc.insert(ignore_permissions=True)
    frappe.db.commit()
    return doc.name

PEDIATRIC_AGE_CUTOFF_YEARS = 12

PERMANENT_TEETH_NUMBERS = [
    "18", "17", "16", "15", "14", "13", "12", "11",
    "21", "22", "23", "24", "25", "26", "27", "28",
    "48", "47", "46", "45", "44", "43", "42", "41",
    "31", "32", "33", "34", "35", "36", "37", "38",
]

PEDIATRIC_TEETH_NUMBERS = [
    "55", "54", "53", "52", "51",
    "61", "62", "63", "64", "65",
    "85", "84", "83", "82", "81",
    "71", "72", "73", "74", "75",
]


def get_teeth_numbers(is_pediatric=False):
    return PEDIATRIC_TEETH_NUMBERS if is_pediatric else PERMANENT_TEETH_NUMBERS


def ensure_patient_chart_exists(patient_id):
    chart_list = frappe.get_all(
        "Patient Dental Chart",
        filters={"patient": patient_id},
        fields=["name", "patient", "date", "notes", "is_pediatric"],
        order_by="creation desc",
        limit_page_length=1,
    )
    if chart_list:
        chart_info = frappe._dict(chart_list[0])
        if chart_info.get("is_pediatric") is None:
            chart_info.is_pediatric = determine_is_pediatric(patient_id)
            frappe.db.set_value(
                "Patient Dental Chart",
                chart_info.name,
                "is_pediatric",
                chart_info.is_pediatric,
            )
        ensure_default_conditions(chart_info.name, bool(chart_info.is_pediatric))
        return chart_info

    is_pediatric = determine_is_pediatric(patient_id)
    chart_doc = frappe.get_doc({
        "doctype": "Patient Dental Chart",
        "patient": patient_id,
        "date": nowdate(),
        "notes": "",
        "is_pediatric": is_pediatric,
    }).insert(ignore_permissions=True)
    frappe.db.commit()
    ensure_default_conditions(chart_doc.name, bool(is_pediatric))
    return chart_doc

def determine_is_pediatric(patient_id):
    dob = frappe.db.get_value("Patient", patient_id, "dob")
    if not dob:
        return 0
    try:
        delta = relativedelta(getdate(), getdate(dob))
        return 1 if delta.years < PEDIATRIC_AGE_CUTOFF_YEARS else 0
    except Exception:
        return 0

def ensure_default_conditions(chart_name, is_pediatric=False):
    existing = frappe.get_all(
        "Dental Tooth Condition",
        filters={"parent": chart_name},
        fields=["tooth_number"],
        limit_page_length=100,
    )
    tooth_numbers = get_teeth_numbers(is_pediatric)
    existing_teeth = {str(entry.get("tooth_number")) for entry in existing}
    missing = [tooth for tooth in tooth_numbers if str(tooth) not in existing_teeth]
    for tooth in missing:
        frappe.get_doc({
            "doctype": "Dental Tooth Condition",
            "parenttype": "Patient Dental Chart",
            "parentfield": "tooth_condition",
            "parent": chart_name,
            "tooth_number": tooth,
            "state": "Normal",
        }).insert(ignore_permissions=True)
    if missing:
        frappe.db.commit()


PERIODONTAL_SITE_GROUPS = [
    ("db", "buccal"),
    ("b", "buccal"),
    ("mb", "buccal"),
    ("dl", "lingual"),
    ("l", "lingual"),
    ("ml", "lingual"),
]


def build_periodontal_record(tooth, entry):
    record = {"tooth": stringify_tooth(tooth)}
    entry = entry or {}
    for prefix, group_key in PERIODONTAL_SITE_GROUPS:
        group = entry.get(group_key) or {}
        site = group.get(prefix) or {}
        record[f"{prefix}_probing_depths"] = to_int_value(site.get("depth"))
        record[f"{prefix}_gingival_margin"] = to_int_value(site.get("margin"))
        record[f"{prefix}_bleeding"] = bool_to_int(site.get("bleeding"))
        record[f"{prefix}_pus"] = bool_to_int(site.get("suppuration") or site.get("pus"))
        record[f"{prefix}_plaque"] = bool_to_int(site.get("plaque"))
    return record


def stringify_tooth(value):
    return str(value or "").strip()


def to_int_value(value):
    try:
        if value in (None, ""):
            return 0
        return int(round(float(value)))
    except (TypeError, ValueError):
        return 0


def bool_to_int(value):
    return 1 if bool(value) else 0

def safe_json(value):
    try:
        return json.loads(value) if value else []
    except Exception:
        return []


def normalise_restoration_payload(payload):
    if not payload:
        return {}
    if isinstance(payload, str):
        try:
            payload = json.loads(payload) or {}
        except Exception:
            payload = {}
    payload = dict(payload)
    surfaces = payload.get("surfaces") or []
    formatted = []
    for surface in surfaces:
        if isinstance(surface, dict):
            label = surface.get("surface")
        else:
            label = surface
        label = str(label or "").strip()
        if label:
            formatted.append({"surface": label})
    payload["surfaces"] = formatted
    if payload.get("restoration_type") and not payload.get("type"):
        payload["type"] = payload["restoration_type"]
    return payload

def build_visit_history(patient_id, restorations, pathology, limit=40):
    if not patient_id:
        return []
    rest_proc_map = defaultdict(list)
    rest_enc_map = defaultdict(list)
    path_proc_map = defaultdict(list)
    path_enc_map = defaultdict(list)
    for entry in restorations or []:
        proc = entry.get("clinical_procedure")
        encounter = entry.get("patient_encounter")
        if proc:
            rest_proc_map[proc].append(entry)
        if encounter:
            rest_enc_map[encounter].append(entry)
    for entry in pathology or []:
        proc = entry.get("clinical_procedure")
        encounter = entry.get("patient_encounter")
        if proc:
            path_proc_map[proc].append(entry)
        if encounter:
            path_enc_map[encounter].append(entry)

    visits = []
    visits.extend(format_procedure_visits(patient_id, rest_proc_map, path_proc_map))
    visits.extend(format_encounter_visits(patient_id, rest_enc_map, path_enc_map))
    visits.sort(key=lambda row: ((row.get("date") or ""), (row.get("time") or "")), reverse=True)
    if limit:
        visits = visits[:limit]
    return visits

def format_procedure_visits(patient_id, rest_proc_map, path_proc_map):
    fields = [
        "name",
        "procedure_template",
        "title",
        "practitioner",
        "practitioner_name",
        "start_date",
        "start_time",
        "appointment",
        "status",
        "invoiced",
        "consumable_total_amount",
        "company",
    ]
    procedures = frappe.get_all(
        "Clinical Procedure",
        filters={"patient": patient_id},
        fields=fields,
        order_by="start_date desc, start_time desc",
        limit_page_length=50,
    )
    appointment_map = get_appointment_billing_map({row.appointment for row in procedures if row.appointment})
    template_map = {}
    template_names = [row.procedure_template for row in procedures if row.get("procedure_template")]
    if template_names:
        for template in frappe.get_all(
            "Clinical Procedure Template",
            filters={"name": ["in", template_names]},
            fields=["name", "template", "description", "rate"],
        ):
            template_map[template.name] = template

    visits = []
    for row in procedures:
        appointment_billing = appointment_map.get(row.appointment) if row.appointment else default_billing_summary()
        template = template_map.get(row.get("procedure_template"))
        estimated_rate = flt(template.rate) if template and template.get("rate") else 0
        billed_amount = appointment_billing["billed_amount"] or estimated_rate or flt(
            row.get("consumable_total_amount")
        )
        visits.append(
            {
                "id": f"Clinical Procedure|{row.name}",
                "reference_doctype": "Clinical Procedure",
                "reference_name": row.name,
                "type": "procedure",
                "type_label": "Clinical Procedure",
                "title": row.title,
                "purpose": (template.template if template else row.get("procedure_template")) or row.title,
                "description": template.description if template else "",
                "date": row.start_date,
                "time": row.start_time,
                "appointment": row.get("appointment"),
                "status": row.status,
                "appointment_status": appointment_billing.get("status"),
                "appointment_custom_status": appointment_billing.get("custom_status"),
                "appointment_date": appointment_billing.get("date"),
                "appointment_time": appointment_billing.get("time"),
                "appointment_practitioner": appointment_billing.get("practitioner"),
                "appointment_practitioner_name": appointment_billing.get("practitioner_name"),
                "appointment_ref_sales_invoice": appointment_billing.get("ref_sales_invoice"),
                "practitioner": row.practitioner,
                "practitioner_name": row.practitioner_name,
                "billing_amount": billed_amount,
                "paid_amount": appointment_billing["paid_amount"],
                "outstanding_amount": appointment_billing["outstanding_amount"],
                "currency": appointment_billing["currency"],
                "invoices": appointment_billing["invoices"],
                "changes": {
                    "restorations": rest_proc_map.get(row.name, []),
                    "pathology": path_proc_map.get(row.name, []),
                },
            }
        )
    return visits

def format_encounter_visits(patient_id, rest_enc_map, path_enc_map):
    fields = [
        "name",
        "title",
        "patient",
        "encounter_date",
        "encounter_time",
        "appointment_type",
        "appointment",
        "status",
        "practitioner",
        "practitioner_name",
        "invoiced",
    ]
    encounters = frappe.get_all(
        "Patient Encounter",
        filters={"patient": patient_id},
        fields=fields,
        order_by="encounter_date desc, encounter_time desc",
        limit_page_length=50,
    )
    appointment_map = get_appointment_billing_map({row.appointment for row in encounters if row.appointment})
    visits = []
    for row in encounters:
        appointment_billing = appointment_map.get(row.appointment) if row.appointment else default_billing_summary()
        visits.append(
            {
                "id": f"Patient Encounter|{row.name}",
                "reference_doctype": "Patient Encounter",
                "reference_name": row.name,
                "type": "encounter",
                "type_label": "Patient Encounter",
                "title": row.title,
                "purpose": row.appointment_type or row.title,
                "description": "",
                "date": row.encounter_date,
                "time": row.encounter_time,
                "appointment": row.appointment,
                "status": row.status,
                "appointment_status": appointment_billing.get("status"),
                "appointment_custom_status": appointment_billing.get("custom_status"),
                "appointment_date": appointment_billing.get("date"),
                "appointment_time": appointment_billing.get("time"),
                "appointment_practitioner": appointment_billing.get("practitioner"),
                "appointment_practitioner_name": appointment_billing.get("practitioner_name"),
                "appointment_ref_sales_invoice": appointment_billing.get("ref_sales_invoice"),
                "practitioner": row.practitioner,
                "practitioner_name": row.practitioner_name,
                "billing_amount": appointment_billing["billed_amount"],
                "paid_amount": appointment_billing["paid_amount"],
                "outstanding_amount": appointment_billing["outstanding_amount"],
                "currency": appointment_billing["currency"],
                "invoices": appointment_billing["invoices"],
                "changes": {
                    "restorations": rest_enc_map.get(row.name, []),
                    "pathology": path_enc_map.get(row.name, []),
                },
            }
        )
    return visits

def default_billing_summary():
    default_currency = frappe.db.get_default("currency") or "USD"
    return {
        "billed_amount": 0.0,
        "paid_amount": 0.0,
        "outstanding_amount": 0.0,
        "currency": default_currency,
        "invoices": [],
        "status": None,
        "custom_status": None,
        "date": None,
        "time": None,
        "practitioner": None,
        "practitioner_name": None,
        "ref_sales_invoice": None,
    }

def get_appointment_billing_map(appointment_ids):
    """Return billing summary keyed by appointment using invoices if present, otherwise estimate from billing table."""
    if not appointment_ids:
        return {}

    appointment_ids = [appt for appt in appointment_ids if appt]
    if not appointment_ids:
        return {}

    placeholders = ", ".join(["%s"] * len(appointment_ids))
    appointment_rows = frappe.get_all(
        "Patient Appointment",
        filters={"name": ["in", appointment_ids]},
        fields=[
            "name",
            "status",
            "custom_visit_status",
            "appointment_date",
            "appointment_time",
            "practitioner",
            "practitioner_name",
            "ref_sales_invoice",
            "paid_amount",
        ],
    )

    billing_map = {}
    for appt in appointment_rows:
        summary = default_billing_summary()
        summary.update(
            {
                "status": appt.status,
                "custom_status": appt.custom_visit_status,
                "date": appt.appointment_date,
                "time": appt.appointment_time,
                "practitioner": appt.practitioner,
                "practitioner_name": appt.practitioner_name,
                "ref_sales_invoice": appt.ref_sales_invoice,
                "currency": appt.currency or summary.get("currency"),
                "paid_amount": flt(appt.paid_amount or 0),
            }
        )
        billing_map[appt.name] = summary

    invoice_rows = frappe.db.sql(
        f"""
        select
            sii.reference_dn as appointment,
            si.name,
            si.posting_date,
            si.status,
            coalesce(si.rounded_total, si.grand_total, si.base_grand_total) as total,
            si.outstanding_amount,
            si.currency
        from `tabSales Invoice Item` sii
        inner join `tabSales Invoice` si on si.name = sii.parent
        where sii.reference_dt = 'Patient Appointment'
          and sii.reference_dn in ({placeholders})
          and si.docstatus = 1
        """,
        tuple(appointment_ids),
        as_dict=True,
    )

    for row in invoice_rows:
        appt = row.get("appointment")
        if not appt:
            continue
        summary = billing_map.setdefault(appt, default_billing_summary())
        billed = flt(row.get("total"))
        outstanding = flt(row.get("outstanding_amount"))
        summary["billed_amount"] += billed
        summary["outstanding_amount"] += outstanding
        summary["paid_amount"] = flt(summary["billed_amount"] - summary["outstanding_amount"])
        summary["currency"] = summary["currency"] or row.get("currency") or summary["currency"]
        summary.setdefault("invoices", [])
        summary["invoices"].append(
            {
                "name": row.get("name"),
                "date": row.get("posting_date"),
                "status": row.get("status"),
                "amount": billed,
                "outstanding": outstanding,
            }
        )

    # Fill missing billing with ref invoice or appointment billing table
    for appt in appointment_ids:
        if not appt:
            continue
        summary = billing_map.get(appt) or default_billing_summary()
        if not summary.get("ref_sales_invoice") and appt in billing_map:
            # summary already exists; no ref invoice and no billing rows; keep as is
            pass
        if summary.get("ref_sales_invoice") and not summary.get("invoices"):
            invoice_summary = get_invoice_summary(summary["ref_sales_invoice"])
            if invoice_summary:
                merged = default_billing_summary()
                merged.update(summary)
                merged.update(invoice_summary)
                billing_map[appt] = merged
                continue
        if not summary.get("billed_amount"):
            try:
                doc = frappe.get_doc("Patient Appointment", appt)
                estimated_total = 0.0
                for row in doc.get("custom_billing_items") or []:
                    rate = flt(row.override_rate or 0)
                    qty = flt(row.qty or 1)
                    estimated_total += rate * qty
                summary["billed_amount"] = flt(estimated_total)
                # Prefer stored paid_amount if present
                paid_amount = flt(getattr(doc, "paid_amount", 0) or summary.get("paid_amount") or 0)
                summary["paid_amount"] = paid_amount
                summary["outstanding_amount"] = flt(estimated_total - paid_amount)
                summary["currency"] = doc.get("currency") or summary["currency"]
            except Exception:
                pass
        billing_map[appt] = summary

    return billing_map

def get_visit_invoice_summary(reference_dt, reference_dn):
    rows = frappe.db.sql(
        """
        select
            si.name,
            si.posting_date,
            si.status,
            si.rounded_total,
            si.grand_total,
            si.base_grand_total,
            si.outstanding_amount,
            si.currency
        from `tabSales Invoice Item` sii
        inner join `tabSales Invoice` si on si.name = sii.parent
        where sii.reference_dt = %s and sii.reference_dn = %s and si.docstatus = 1
        """,
        (reference_dt, reference_dn),
        as_dict=True,
    )
    invoices = []
    total_billed = 0
    total_outstanding = 0
    currency = None
    seen = set()
    for row in rows:
        name = row.get("name")
        if not name or name in seen:
            continue
        seen.add(name)
        billed = row.get("rounded_total") or row.get("grand_total") or row.get("base_grand_total") or 0
        outstanding = row.get("outstanding_amount") or 0
        total_billed += billed
        total_outstanding += outstanding
        currency = currency or row.get("currency")
        invoices.append(
            {
                "name": name,
                "date": row.get("posting_date"),
                "status": row.get("status"),
                "amount": billed,
                "outstanding": outstanding,
            }
        )
    default_currency = frappe.db.get_default("currency") or "USD"
    return {
        "billed_amount": flt(total_billed),
        "paid_amount": flt(total_billed - total_outstanding),
        "outstanding_amount": flt(total_outstanding),
        "currency": currency or default_currency,
        "invoices": invoices,
    }

def get_invoice_summary(invoice_name):
    if not invoice_name or not frappe.db.exists("Sales Invoice", invoice_name):
        return None
    inv = frappe.get_doc("Sales Invoice", invoice_name)
    if inv.docstatus != 1:
        return None

    billed = flt(inv.rounded_total or inv.grand_total or inv.base_grand_total or 0)
    outstanding = flt(inv.outstanding_amount or 0)
    default_currency = frappe.db.get_default("currency") or "USD"
    return {
        "billed_amount": billed,
        "paid_amount": flt(billed - outstanding),
        "outstanding_amount": outstanding,
        "currency": inv.currency or default_currency,
        "invoices": [
            {
                "name": inv.name,
                "date": inv.posting_date,
                "status": inv.status,
                "amount": billed,
                "outstanding": outstanding,
            }
        ],
    }


@frappe.whitelist()
def delete_visit_reference(doctype, name):
    allowed = {"Clinical Procedure", "Patient Encounter"}
    if doctype not in allowed:
        frappe.throw("Not allowed", frappe.PermissionError)
    if not frappe.db.exists(doctype, name):
        frappe.throw("Document does not exist")
    cleanup_chart_entries_for_visit(doctype, name)
    frappe.delete_doc(doctype, name, ignore_permissions=False)
    frappe.db.commit()
    return True


def cleanup_chart_entries_for_visit(reference_dt, reference_dn):
    field = "clinical_procedure" if reference_dt == "Clinical Procedure" else "patient_encounter"
    if reference_dt not in {"Clinical Procedure", "Patient Encounter"}:
        return
    for table in ("Tooth Restoration", "Tooth Pathology"):
        names = frappe.get_all(table, filters={field: reference_dn}, pluck="name")
        for docname in names:
            frappe.delete_doc(table, docname, ignore_permissions=True)


def safe_number(value):
    try:
        if value in (None, ""):
            return 0
        return float(value)
    except (TypeError, ValueError):
        return 0


def build_periodontal_map(chart_name):
    """Return the most recent periodontal probing values for the given chart."""
    tests = frappe.get_all(
        "Periodontal Test",
        filters={"dental_chart": chart_name},
        fields=["name"],
        order_by="creation desc",
        limit_page_length=1,
    )
    if not tests:
        return {}

    fields = [
        "tooth",
        "db_probing_depths",
        "db_gingival_margin",
        "db_bleeding",
        "db_pus",
        "db_plaque",
        "b_probing_depths",
        "b_gingival_margin",
        "b_bleeding",
        "b_pus",
        "b_plaque",
        "mb_probing_depths",
        "mb_gingival_margin",
        "mb_bleeding",
        "mb_pus",
        "mb_plaque",
        "dl_probing_depths",
        "dl_gingival_margin",
        "dl_bleeding",
        "dl_pus",
        "dl_plaque",
        "l_probing_depths",
        "l_gingival_margin",
        "l_bleeding",
        "l_pus",
        "l_plaque",
        "ml_probing_depths",
        "ml_gingival_margin",
        "ml_bleeding",
        "ml_pus",
        "ml_plaque",
    ]

    records = frappe.get_all(
        "Periodontal Test Records",
        filters={"parent": tests[0].name},
        fields=fields,
        order_by="idx asc",
    )

    periodontal = {}
    for record in records:
        tooth = str(record.get("tooth") or "").strip()
        if not tooth:
            continue
        periodontal[tooth] = {
            "buccal": {
                "mb": make_periodontal_site(record, "mb"),
                "b": make_periodontal_site(record, "b"),
                "db": make_periodontal_site(record, "db"),
            },
            "lingual": {
                "ml": make_periodontal_site(record, "ml"),
                "l": make_periodontal_site(record, "l"),
                "dl": make_periodontal_site(record, "dl"),
            },
        }
    return periodontal


def make_periodontal_site(record, prefix):
    return {
        "depth": safe_number(record.get(f"{prefix}_probing_depths")),
        "margin": safe_number(record.get(f"{prefix}_gingival_margin")),
        "bleeding": bool(record.get(f"{prefix}_bleeding")),
        "plaque": bool(record.get(f"{prefix}_plaque")),
        "suppuration": bool(record.get(f"{prefix}_pus")),
    }
