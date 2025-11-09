frappe.pages["chart"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Chart"),
		single_column: true,
	});
};

frappe.pages["chart"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("chart.bundle.js").then(() => {
		frappe.chart = new frappe.ui.Chart({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}