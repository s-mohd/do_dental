// Copyright (c) 2025, Sayed Mohamed and contributors
// For license information, please see license.txt

frappe.ui.form.on('Dental Charting', {
    refresh(frm) {
        // Load assets
        frappe.require([
            '/assets/do_dental/css/dental_chart.css',
            '/assets/do_dental/js/dental_chart.js'
        ]);

        // Add custom button to open dental chart
        if (!frm.is_new()) {
            frm.add_custom_button(__('Open Dental Chart'), () => {
                show_dental_chart(frm);
            }).addClass('btn-primary');
        }
    },

    is_pediatric(frm) {
        if (frm.doc.is_pediatric) {
            frappe.msgprint(__("Pediatric dentition enabled. Tooth numbers will use letters A-T"));
        }
    },

    periodontal_add(frm, cdt, cdn) {
        calculatePeriodontalSummary(frm);
    },
    periodontal_remove(frm, cdt, cdn) {
        calculatePeriodontalSummary(frm);
    }
});

frappe.ui.form.on('Periodontal Site Record', {
    tooth(frm, cdt, cdn) {
        calculatePeriodontalSummary(frm);
    },
});

function show_dental_chart(frm) {
    const dialog = new frappe.ui.Dialog({
        title: __('Dental Charting'),
        size: 'extra-large',
        fields: [
            {
                fieldtype: 'HTML',
                fieldname: 'dental_chart'
            }
        ],
        min_width: 1200
    });

    dialog.show();

    // Initialize dental chart
    frappe.require([
        '/assets/do_dental/js/dental_chart.js',
        '/assets/do_dental/css/dental_chart.css'
    ], () => {
        // Verify container exists
        const $container = dialog.fields_dict.dental_chart.$wrapper;
        if (!$container || !$container.length) {
            frappe.msgprint(__('Failed to find chart container'));
            return;
        }

        // Initialize chart
        try {
            new dental.DentalChart({
                parent: $container,
                frm: frm
            });
        } catch (e) {
            console.error(e);
            $container.html(`<div class="alert alert-danger">
                Failed to load dental chart: ${e.message}
            </div>`);
        }
    });
}

function calculatePeriodontalSummary(frm) {
    if (!frm.doc.periodontal || !frm.doc.periodontal.length) return;

    let summary = {
        totalSites: 0,
        bleedingSites: 0,
        suppurationSites: 0,
        plaqueSites: 0,
        deepPockets: 0
    };

    frm.doc.periodontal.forEach(site => {
        summary.totalSites++;
        if (site.bleeding) summary.bleedingSites++;
        if (site.suppuration) summary.suppurationSites++;
        if (site.plaque) summary.plaqueSites++;
        if (site.probing_depth > 5) summary.deepPockets++;
    });

    const bleedingPercentage = ((summary.bleedingSites / summary.totalSites) * 100).toFixed(1);
    const plaquePercentage = ((summary.plaqueSites / summary.totalSites) * 100).toFixed(1);

    frm.set_value('periodontal_summary', `Bleeding: ${bleedingPercentage}%, Plaque: ${plaquePercentage}%, Deep Pockets: ${summary.deepPockets}`);
}