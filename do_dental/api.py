import frappe
import json
from frappe.utils import nowdate, nowtime

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

    return {
        "chart": chart,
        "conditions": conditions,
        "restorations": restorations,
        "pathology": pathology,
        "periodontal": periodontal,
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

TEETH_NUMBERS = [
    "18", "17", "16", "15", "14", "13", "12", "11",
    "21", "22", "23", "24", "25", "26", "27", "28",
    "48", "47", "46", "45", "44", "43", "42", "41",
    "31", "32", "33", "34", "35", "36", "37", "38",
]

def ensure_patient_chart_exists(patient_id):
    chart_list = frappe.get_all(
        "Patient Dental Chart",
        filters={"patient": patient_id},
        fields=["name", "patient", "date", "notes"],
        order_by="creation desc",
        limit_page_length=1,
    )
    if chart_list:
        chart_info = frappe._dict(chart_list[0])
        ensure_default_conditions(chart_info.name)
        return chart_info

    chart_doc = frappe.get_doc({
        "doctype": "Patient Dental Chart",
        "patient": patient_id,
        "date": nowdate(),
        "notes": "",
    }).insert(ignore_permissions=True)
    frappe.db.commit()
    ensure_default_conditions(chart_doc.name)
    return chart_doc

def ensure_default_conditions(chart_name):
    existing = frappe.get_all(
        "Dental Tooth Condition",
        filters={"parent": chart_name},
        fields=["tooth_number"],
        limit_page_length=100,
    )
    existing_teeth = {entry.get("tooth_number") for entry in existing}
    missing = [tooth for tooth in TEETH_NUMBERS if tooth not in existing_teeth]
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
