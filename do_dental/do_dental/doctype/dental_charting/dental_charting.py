# Copyright (c) 2025, Sayed Mohamed and contributors
# For license information, please see license.txt

import frappe
import json
from frappe.model.document import Document


class DentalCharting(Document):
	pass

@frappe.whitelist()
def update_tooth_condition(chart_name, tooth_number, values):
	chart = frappe.get_doc("Dental Charting", chart_name)
	values = json.loads(values)
	tooth_record = None
	for tooth in chart.dental_conditions:
		if tooth.tooth == tooth_number:
			tooth_record = tooth
			break

	if tooth_record:
		tooth_record.update(values)

	else:
		tooth_record = {"tooth": tooth_number}
		tooth_record.update(values)
		chart.append("dental_conditions", tooth_record)

	chart.save()
	return chart

@frappe.whitelist()
def update_tooth_periodontal(chart_name, tooth_number, site, field, value):
	chart = frappe.get_doc("Dental Charting", chart_name)
	tooth_record = None
	for tooth in chart.periodontal_records:
		if tooth.tooth == tooth_number and tooth.site == site:
			tooth_record = tooth
			break

	if tooth_record:
		tooth_record.set(field, value)
	else:
		tooth_record = {"tooth_number": tooth_number, 'site': site, field: value}
		chart.append("periodontal_records", tooth_record)

	chart.save()
	return chart