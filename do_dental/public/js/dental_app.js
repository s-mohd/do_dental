// apps/dental_charting/dental_charting/public/js/dental_app.js

class DentalChartingApplication {
    constructor() {
        this.chart = null;
        this.currentPatient = null;
        this.currentChart = null;
        this.selectedTooth = null;
        this.selectedTool = null;

        this.init();
    }

    init() {
        this.createUI();
        this.initializeChart();
        this.setupEventListeners();
        this.loadInitialData();
    }

    createUI() {
        const container = document.getElementById('dental-chart-container');
        if (!container) return;

        container.innerHTML = `
            <div class="dental-app-container">
                <div class="app-header">
                    <h3><i class="fa fa-tooth"></i> Dental Charting</h3>
                    <div class="header-controls">
                        <select id="numbering-system" class="form-control">
                            <option value="iso">ISO Numbering</option>
                            <option value="usa">US Numbering</option>
                        </select>
                        <button id="save-chart" class="btn btn-primary btn-sm">
                            <i class="fa fa-save"></i> Save
                        </button>
                        <button id="print-chart" class="btn btn-default btn-sm">
                            <i class="fa fa-print"></i> Print
                        </button>
                    </div>
                </div>

                <div class="app-main">
                    <div class="tools-panel">
                        <div class="tool-section">
                            <h5>Conditions</h5>
                            <div class="tool-buttons" id="condition-tools">
                                ${this.generateConditionTools()}
                            </div>
                        </div>

                        <div class="tool-section">
                            <h5>Surfaces</h5>
                            <div class="tool-buttons" id="surface-tools">
                                ${this.generateSurfaceTools()}
                            </div>
                        </div>

                        <div class="tool-section">
                            <h5>Restorations</h5>
                            <div class="tool-buttons" id="restoration-tools">
                                ${this.generateRestorationTools()}
                            </div>
                        </div>

                        <div class="tool-section">
                            <h5>Root Canal</h5>
                            <div class="tool-buttons" id="endo-tools">
                                ${this.generateEndoTools()}
                            </div>
                        </div>
                    </div>

                    <div class="chart-area">
                        <canvas id="dental-chart-canvas" width="1200" height="800"></canvas>
                    </div>

                    <div class="properties-panel">
                        <div id="tooth-properties">
                            <div class="no-selection">
                                <i class="fa fa-tooth"></i>
                                <p>Select a tooth to view properties</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-footer">
                    <div class="patient-info">
                        <strong id="patient-name">No patient selected</strong>
                        <div id="chart-info"></div>
                    </div>
                    <div class="chart-notes">
                        <textarea id="clinical-notes" placeholder="Enter clinical notes..." class="form-control"></textarea>
                    </div>
                </div>
            </div>
        `;
    }

    generateConditionTools() {
        return Object.keys(DENTAL_CONSTANTS.PATHOLOGY_TYPES).map(type => {
            const pathology = DENTAL_CONSTANTS.PATHOLOGY_TYPES[type];
            return `
                <button class="tool-btn condition-tool" data-tool="condition" data-value="${pathology}">
                    <span class="tool-icon condition-${pathology}"></span>
                    ${this.formatLabel(pathology)}
                </button>
            `;
        }).join('');
    }

    generateSurfaceTools() {
        return Object.keys(DENTAL_CONSTANTS.SURFACES).map(surfaceKey => {
            const surface = DENTAL_CONSTANTS.SURFACES[surfaceKey];
            return `
                <button class="tool-btn surface-tool" data-tool="surface" data-value="${surface}">
                    ${this.formatLabel(surface)}
                </button>
            `;
        }).join('');
    }

    generateRestorationTools() {
        return Object.keys(DENTAL_CONSTANTS.RESTORATION_TYPES).map(type => {
            const restoration = DENTAL_CONSTANTS.RESTORATION_TYPES[type];
            return `
                <button class="tool-btn restoration-tool" data-tool="restoration" data-value="${restoration}">
                    <span class="tool-icon restoration-${restoration}"></span>
                    ${this.formatLabel(restoration)}
                </button>
            `;
        }).join('');
    }

    generateEndoTools() {
        return `
            <button class="tool-btn endo-tool" data-tool="endo" data-value="test">
                <i class="fa fa-stethoscope"></i> Tests
            </button>
            <button class="tool-btn endo-tool" data-tool="endo" data-value="diagnosis">
                <i class="fa fa-diagnoses"></i> Diagnosis
            </button>
        `;
    }

    initializeChart() {
        const canvas = document.getElementById('dental-chart-canvas');
        if (canvas) {
            this.chart = new CanvasDentalChart('dental-chart-canvas');

            // Listen for tooth selection events from the chart
            canvas.addEventListener('toothSelected', (e) => {
                this.handleToothSelection(e.detail);
            });
        }
    }

    setupEventListeners() {
        // Tool selection
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTool(e.currentTarget);
            });
        });

        // Save chart
        document.getElementById('save-chart').addEventListener('click', () => {
            this.saveChart();
        });

        // Print chart
        document.getElementById('print-chart').addEventListener('click', () => {
            this.printChart();
        });

        // Numbering system change
        document.getElementById('numbering-system').addEventListener('change', (e) => {
            this.changeNumberingSystem(e.target.value);
        });

        // Clinical notes
        document.getElementById('clinical-notes').addEventListener('change', (e) => {
            this.saveClinicalNotes(e.target.value);
        });
    }

    selectTool(toolElement) {
        // Clear previous selection
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        toolElement.classList.add('active');

        const toolType = toolElement.dataset.tool;
        const toolValue = toolElement.dataset.value;

        this.selectedTool = { type: toolType, value: toolValue };

        // If a tooth is selected, apply the tool
        if (this.selectedTooth) {
            this.applyToolToSelectedTooth();
        }
    }

    handleToothSelection(detail) {
        this.selectedTooth = detail.toothNumber;
        this.updatePropertiesPanel(detail);
    }

    applyToolToSelectedTooth() {
        if (!this.selectedTooth || !this.selectedTool) return;

        const toothData = {};
        const tool = this.selectedTool;

        switch (tool.type) {
            case 'condition':
                toothData.conditions = { [tool.value]: { date: new Date().toISOString() } };
                break;

            case 'surface':
                if (!this.chart.chartData[this.selectedTooth]?.surfaces) {
                    toothData.surfaces = {};
                }
                toothData.surfaces = {
                    ...this.chart.chartData[this.selectedTooth]?.surfaces,
                    [tool.value]: { type: 'marked', date: new Date().toISOString() }
                };
                break;

            case 'restoration':
                toothData.restorations = {
                    [tool.value]: {
                        date: new Date().toISOString(),
                        material: DENTAL_CONSTANTS.RESTORATION_MATERIALS.COMPOSIT
                    }
                };
                break;
        }

        this.chart.updateToothData(this.selectedTooth, toothData);
        this.updatePropertiesPanel({
            toothNumber: this.selectedTooth,
            toothData: this.chart.chartData[this.selectedTooth]
        });
    }

    updatePropertiesPanel(detail) {
        const panel = document.getElementById('tooth-properties');
        if (!detail) {
            panel.innerHTML = `
                <div class="no-selection">
                    <i class="fa fa-tooth"></i>
                    <p>Select a tooth to view properties</p>
                </div>
            `;
            return;
        }

        const { toothNumber, toothData } = detail;

        panel.innerHTML = `
            <div class="tooth-properties">
                <h4>Tooth ${toothNumber}</h4>
                
                <div class="property-section">
                    <h5>Conditions</h5>
                    ${toothData?.conditions ?
                Object.keys(toothData.conditions).map(cond => `
                            <div class="property-item">
                                <span class="property-label">${this.formatLabel(cond)}</span>
                                <span class="property-value">${new Date(toothData.conditions[cond].date).toLocaleDateString()}</span>
                                <button class="btn btn-xs btn-danger" onclick="dentalApp.removeCondition('${toothNumber}', '${cond}')">
                                    <i class="fa fa-times"></i>
                                </button>
                            </div>
                        `).join('') :
                '<p class="no-data">No conditions</p>'
            }
                </div>

                <div class="property-section">
                    <h5>Surfaces</h5>
                    ${toothData?.surfaces ?
                Object.keys(toothData.surfaces).map(surface => `
                            <div class="property-item">
                                <span class="property-label">${this.formatLabel(surface)}</span>
                                <span class="property-value">${toothData.surfaces[surface].type}</span>
                                <button class="btn btn-xs btn-danger" onclick="dentalApp.removeSurface('${toothNumber}', '${surface}')">
                                    <i class="fa fa-times"></i>
                                </button>
                            </div>
                        `).join('') :
                '<p class="no-data">No surfaces marked</p>'
            }
                </div>

                <div class="property-section">
                    <h5>Restorations</h5>
                    ${toothData?.restorations ?
                Object.keys(toothData.restorations).map(restoration => `
                            <div class="property-item">
                                <span class="property-label">${this.formatLabel(restoration)}</span>
                                <span class="property-value">${new Date(toothData.restorations[restoration].date).toLocaleDateString()}</span>
                                <button class="btn btn-xs btn-danger" onclick="dentalApp.removeRestoration('${toothNumber}', '${restoration}')">
                                    <i class="fa fa-times"></i>
                                </button>
                            </div>
                        `).join('') :
                '<p class="no-data">No restorations</p>'
            }
                </div>

                <div class="property-actions">
                    <button class="btn btn-default btn-block" onclick="dentalApp.clearTooth('${toothNumber}')">
                        Clear Tooth
                    </button>
                </div>
            </div>
        `;
    }

    // Public methods for property panel
    removeCondition(toothNumber, condition) {
        if (this.chart.chartData[toothNumber]?.conditions) {
            delete this.chart.chartData[toothNumber].conditions[condition];
            this.chart.render();
            this.updatePropertiesPanel({
                toothNumber,
                toothData: this.chart.chartData[toothNumber]
            });
        }
    }

    removeSurface(toothNumber, surface) {
        if (this.chart.chartData[toothNumber]?.surfaces) {
            delete this.chart.chartData[toothNumber].surfaces[surface];
            this.chart.render();
            this.updatePropertiesPanel({
                toothNumber,
                toothData: this.chart.chartData[toothNumber]
            });
        }
    }

    removeRestoration(toothNumber, restoration) {
        if (this.chart.chartData[toothNumber]?.restorations) {
            delete this.chart.chartData[toothNumber].restorations[restoration];
            this.chart.render();
            this.updatePropertiesPanel({
                toothNumber,
                toothData: this.chart.chartData[toothNumber]
            });
        }
    }

    clearTooth(toothNumber) {
        this.chart.clearTooth(toothNumber);
        this.updatePropertiesPanel(null);
    }

    saveChart() {
        if (!window.cur_frm) {
            frappe.msgprint(__('No form found to save data'));
            return;
        }

        const chartData = {
            teeth: this.chart.getChartData(),
            clinical_notes: document.getElementById('clinical-notes').value,
            metadata: {
                saved_at: new Date().toISOString(),
                numbering_system: document.getElementById('numbering-system').value
            }
        };

        frappe.call({
            method: 'dental_charting.dental_charting.doctype.patient_dental_chart.patient_dental_chart.update_comprehensive_chart',
            args: {
                chart_name: window.cur_frm.doc.name,
                chart_data: chartData
            },
            callback: (r) => {
                if (r.message) {
                    frappe.show_alert({
                        message: __('Dental chart saved successfully'),
                        indicator: 'green'
                    });
                }
            }
        });
    }

    printChart() {
        const imageData = this.chart.exportAsImage();
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Dental Chart - Print</title>
                    <style>
                        body { margin: 20px; text-align: center; }
                        img { max-width: 100%; height: auto; }
                    </style>
                </head>
                <body>
                    <h2>Dental Chart</h2>
                    <img src="${imageData}" alt="Dental Chart">
                    <p>Printed on ${new Date().toLocaleDateString()}</p>
                    <script>
                        window.onload = function() { window.print(); }
                    </script>
                </body>
            </html>
        `);
        printWindow.document.close();
    }

    changeNumberingSystem(system) {
        // Implement numbering system conversion
        frappe.show_alert({
            message: __('Numbering system changed to ' + system.toUpperCase()),
            indicator: 'blue'
        });
    }

    saveClinicalNotes(notes) {
        // Auto-save clinical notes
        if (window.cur_frm) {
            // Could implement auto-save or debounced save
        }
    }

    loadInitialData() {
        if (window.cur_frm && window.cur_frm.doc.chart_data) {
            try {
                const data = JSON.parse(window.cur_frm.doc.chart_data);
                this.chart.loadChartData(data.teeth || {});

                if (data.clinical_notes) {
                    document.getElementById('clinical-notes').value = data.clinical_notes;
                }

                if (data.metadata?.numbering_system) {
                    document.getElementById('numbering-system').value = data.metadata.numbering_system;
                }

                // Update patient info
                if (window.cur_frm.doc.patient) {
                    this.updatePatientInfo(window.cur_frm.doc.patient);
                }
            } catch (e) {
                console.error('Error loading chart data:', e);
            }
        }
    }

    updatePatientInfo(patientId) {
        frappe.call({
            method: 'frappe.client.get',
            args: {
                doctype: 'Patient',
                name: patientId
            },
            callback: (r) => {
                if (r.message) {
                    const patient = r.message;
                    document.getElementById('patient-name').textContent =
                        patient.patient_name || patient.name;

                    document.getElementById('chart-info').innerHTML = `
                        <div>Chart: ${window.cur_frm.doc.name}</div>
                        <div>Date: ${window.cur_frm.doc.chart_date || 'Not set'}</div>
                    `;
                }
            }
        });
    }

    formatLabel(str) {
        return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
}

// Initialize the application
$(document).ready(function () {
    if (document.getElementById('dental-chart-container')) {
        window.dentalApp = new DentalChartingApplication();
    }
});

// Frappe form integration
frappe.ui.form.on('Dental Charting', {
    refresh: function (frm) {
        // Ensure the chart container exists
        if (!document.getElementById('dental-chart-container')) {
            frm.fields_dict.chart_html.$wrapper.html('<div id="dental-chart-container"></div>');
        }

        // Initialize or refresh the application
        if (!window.dentalApp) {
            window.dentalApp = new DentalChartingApplication();
        }
    },

    patient: function (frm) {
        if (window.dentalApp && frm.doc.patient) {
            window.dentalApp.updatePatientInfo(frm.doc.patient);
        }
    }
});