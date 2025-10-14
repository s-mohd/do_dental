frappe.pages['dental-chart'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Dental Chart',
		single_column: true
	});
	frappe.require([
		"/assets/do_dental/js/dental_chart.js",
		"/assets/do_dental/css/dental_chart.css"
	], () => {
		new dental.DentalChart({
			parent: $(page.main),
			frm: null // Pass null for standalone testing
		});
	});

	console.log($(page.main))
}
