frappe.provide("dental");

dental.DentalChart = class DentalChart {
    selectedTooth = null; // 13
    selectedJaw = 'jaws'; // 'upper-jaw', 'lower-jaw', 'jaws'

    constructor(opts) {
        Object.assign(this, opts);
        this.make();
    }

    make() {
        this.wrapper = $(`
            <div class="dental-chart-container">
                <div class="dental-chart-view">
                    <div class="teeth-chart"></div>
                </div>
                <nav class="mouth">
                    <ul>
                        <li id="upper-jaw-button" class="jaw-button">
                            <svg width="28" height="28" viewBox="0 0 28 28" aria-labelledby="upper-jaw-image-title" role="img">
                                <title id="upper-jaw-image-title">Upper Jaw</title>
                                <use xlink:href="#upper-jaw"><symbol xmlns="http://www.w3.org/2000/svg" id="upper-jaw" width="28" height="28"><path d="M6.1 15.5C6.4 12.2 8 9.6 10 9.6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6s-3.6-.7-3.9-1.6c-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.1.7-1.5 1.2-3 1.2-1.6 0-3-.6-3-1.4v-.1c0-2.9 1.4-5.3 3.1-5.3 1.5.1 2.7 1.9 3 4.3z"/></symbol></use>
                            </svg>
                        </li>
                        <li id="jaws-button" class="jaw-button active-jaw">
                            <svg width="28" height="28" viewBox="0 0 28 28" aria-labelledby="jaws-image-title" role="img">
                                <title id="jaws-image-title">Full mouth</title>
                                <use xlink:href="#jaws"><symbol xmlns="http://www.w3.org/2000/svg" id="jaws" width="28" height="28"><path d="M20.9 17.4c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.1-.7 1.3-1.2 2.7-1.2 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.1-.1-2.2-1.7-2.4-3.8zm-14.8-6c.3-3.4 1.9-6 3.9-6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6s-3.6-.7-3.9-1.6c-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.3.7-1.6 1.2-3.1 1.2-1.6 0-3-.6-3-1.4v-.1C-.1 9.4 1.3 7 3 7c1.6.1 2.8 1.9 3.1 4.4z"/></symbol></use>
                            </svg>
                        </li>
                        <li id="lower-jaw-button" class="jaw-button">
                            <svg width="28" height="28" viewBox="0 0 28 28" aria-labelledby="lower-jaw-image-title" role="img">
                                <title id="lower-jaw-image-title">Lower Jaw</title>
                                <use xlink:href="#lower-jaw"><symbol xmlns="http://www.w3.org/2000/svg" id="lower-jaw" width="28" height="28"><path d="M20.9 12.6c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.3-.6 1.5-1.1 2.9-1.1 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.2-.1-2.3-1.7-2.6-3.9z"/></symbol></use>
                            </svg>
                        </li>
                    </ul>
                </nav>
                <div class="legend"><button type="button" title="Show legend" class="toggle">?</button></div>
            </div>
        `)

        this.parent.append(this.wrapper);
        this.renderChart();
        this.bindEvents();
    }

    renderChart() {
        const $chart = this.wrapper.find('.teeth-chart');
        $chart.empty();

        // Define tooth order for adult dentition
        let upperOrder = ['18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28'];
        let lowerOrder = ['48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'];
        if (this.is_pediatric) {
            upperOrder = ['55', '54', '53', '52', '51', '61', '62', '63', '64', '65'];
            lowerOrder = ['85', '84', '83', '82', '81', '71', '72', '73', '74', '75'];
        }


        if (!this.selectedJaw || this.selectedJaw === 'jaws' || this.selectedJaw === 'upper-jaw') {
            const $upperJaw = $('<div class="jaw upper-jaw"></div>');
            upperOrder.forEach(toothNum => {
                $upperJaw.append(this.createToothElement(toothNum, 'upper'));
            });
            $chart.append($upperJaw);
        }

        if (!this.selectedJaw || this.selectedJaw === 'jaws' || this.selectedJaw === 'lower-jaw') {
            const $lowerJaw = $('<div class="jaw lower-jaw"></div>');
            lowerOrder.forEach(toothNum => {
                $lowerJaw.append(this.createToothElement(toothNum, 'lower'));
            });
            $chart.append($lowerJaw);
        }
    }

    createToothElement(number, jaw) {
        const status = (this.doc.dental_conditions || []).find(t => t.tooth == number);
        const toothImages = this.getToothImages(status, jaw, number);
        const firstDigit = Math.floor(number / 10);
        const side = (firstDigit === 1 || firstDigit === 4 || firstDigit === 5 || firstDigit === 8) ? 'right' : 'left';

        if (jaw === 'upper') {
            return $(`
            <div class="tooth ${jaw} ${side} ${this.selectedJaw === 'lower-jaw' ? 'd-none' : ''}" data-tooth="${number}">
                <div class="tooth-wrapper w1">
                    <img class="tooth-img first-img" src="/assets/do_dental/img/${toothImages[0]}" />
                    <div class="tooth-badge condition-${status?.condition || 'Health'}"></div>
                </div>
                <div class="tooth-wrapper w2 ${this.selectedJaw === 'jaws' ? 'd-none' : ''}">
                    <img class="tooth-img second-img" src="/assets/do_dental/img/${toothImages[1]}" />
                    <div class="tooth-badge condition-${status?.condition || 'Health'}"></div>
                </div>
                <div class="tooth-wrapper w3 ${this.selectedJaw === 'jaws' ? 'd-none' : ''}">
                    <img class="tooth-img third-img" src="/assets/do_dental/img/${toothImages[2]}" />
                    <div class="tooth-badge condition-${status?.condition || 'Health'}"></div>
                </div>
                <div class="tooth-number mt-4 mb-3">${number}</div>
            </div>
        `);
        }
        else {
            return $(`
            <div class="tooth ${jaw} ${side} ${this.selectedJaw === 'upper-jaw' ? 'd-none' : ''}" data-tooth="${number}">
                <div class="tooth-number top-number mb-2 mt-3">${number}</div>
                <div class="tooth-wrapper w1 ${this.selectedJaw === 'jaws' ? 'd-none' : ''}">
                    <img class="tooth-img first-img" src="/assets/do_dental/img/${toothImages[0]}" />
                    <div class="tooth-badge condition-${status?.condition || 'Health'}"></div>
                </div>
                <div class="tooth-wrapper w2 ${this.selectedJaw === 'jaws' ? 'd-none' : ''}">
                    <img class="tooth-img second-img" src="/assets/do_dental/img/${toothImages[1]}" />
                    <div class="tooth-badge condition-${status?.condition || 'Health'}"></div>
                </div>
                <div class="tooth-wrapper w3">
                    <img class="tooth-img third-img" src="/assets/do_dental/img/${toothImages[2]}" />
                    <div class="tooth-badge condition-${status?.condition || 'Health'}"></div>
                </div>
                <div class="tooth-number bottom-number mb-2 mt-3 d-none">${number}</div>
            </div>
        `);
        }
    }

    getToothStatus(toothNumber) {
        if (!this.doc) return '';
        const toothRecord = (this.doc.dental_conditions || []).find(t => t.tooth == toothNumber);
        if (!toothRecord) return '';

        return `status-${toothRecord.status.toLowerCase()} condition-${toothRecord.condition?.toLowerCase() || 'healthy'}`;
    }

    getToothImages(status, jaw, toothNumber) {
        let imageName = '';
        let numberToReturn = toothNumber % 10

        if (!status) {
            if (this.doc.is_pediatric)
                return [
                    `base-deciduous-${jaw}-${numberToReturn}-${jaw === 'upper' ? 'buccal' : 'lingual'}.png`,
                    `implant-deciduous-${jaw}-${numberToReturn}-incisal.png`,
                    `base-deciduous-${jaw}-${numberToReturn}-${jaw === 'upper' ? 'lingual' : 'buccal'}.png`,
                ];
            else
                return [
                    `base-permanent-${jaw}-${numberToReturn}-${jaw === 'upper' ? 'buccal' : 'lingual'}.png`,
                    `implant-permanent-${jaw}-${numberToReturn}-incisal.png`,
                    `base-permanent-${jaw}-${numberToReturn}-${jaw === 'upper' ? 'lingual' : 'buccal'}.png`,
                ];
        }

        if (status.status === 'Present')
            imageName += 'base';
        else if (status.status === 'Implant')
            imageName += 'implant';
        else if (status.status === 'Missing' || status.status === 'Unerupted')
            imageName += 'outline';
        else if (status.status === 'Crown' || status.status === 'Bridge')
            imageName += 'crown';

        if (this.doc.is_pediatric)
            imageName += '-deciduous'
        else
            imageName += '-permanent'

        imageName += `-${jaw}-${numberToReturn}`
        return [
            `${imageName}-${jaw === 'upper' ? 'buccal' : 'lingual'}.png`,
            `implant-${this.doc.is_pediatric ? 'deciduous' : 'permanent'}-${jaw}-${numberToReturn}-incisal.png`,
            `${imageName}-${jaw === 'upper' ? 'lingual' : 'buccal'}.png`,
        ];
    }

    bindEvents() {
        // Tooth selection
        this.wrapper.on('click', '.tooth', (e) => {
            const $tooth = $(e.currentTarget);
            const toothNumber = $tooth.data('tooth');
            this.selectedTooth = toothNumber;

            // this.wrapper.find('.tooth').removeClass('selected');
            // $tooth.addClass('selected');

            this.showToothPeriodontalDialog();
        });

        // Toggle jaws
        this.wrapper.on('click', '.jaw-button', (e) => {
            const target = e.currentTarget
            this.wrapper.find('.active-jaw').removeClass("active-jaw");
            $(e.currentTarget).addClass("active-jaw");
            this.selectedJaw = target.id.replace('-button', '');

            if (this.selectedJaw === 'jaws') {
                this.wrapper.find('.tooth,.tooth .tooth-wrapper').removeClass('d-none')
                this.wrapper.find('.tooth.upper .w2,.tooth.upper .w3').addClass('d-none')
                this.wrapper.find('.tooth.lower .w1,.tooth.lower .w2').addClass('d-none')

                this.wrapper.find('.tooth.lower .top-number').removeClass('d-none')
                this.wrapper.find('.tooth.lower .bottom-number').addClass('d-none')
            }
            else if (this.selectedJaw === 'upper-jaw') {
                this.wrapper.find('.tooth,.tooth .tooth-wrapper').removeClass('d-none')
                this.wrapper.find('.tooth.lower').addClass('d-none')
            }
            else if (this.selectedJaw === 'lower-jaw') {
                this.wrapper.find('.tooth,.tooth .tooth-wrapper').removeClass('d-none')
                this.wrapper.find('.tooth.upper').addClass('d-none')

                this.wrapper.find('.tooth.lower .bottom-number').removeClass('d-none')
                this.wrapper.find('.tooth.lower .top-number').addClass('d-none')
            }
        });

        // Toggle legend
        const legendDialog = new frappe.ui.Dialog({
            title: 'Legend',
            fields: [
                {
                    fieldname: 'legend',
                    fieldtype: 'HTML',
                    options: `
                    <ul class="legend-list">
                        <li data-name="perio" class="group">
                            <h3 class="heading">PERIODONTAL</h3>
                            <ul>
                                <li data-name="depth"> PROBING DEPTH </li>
                                <li data-name="margin"> GINGIVAL MARGIN </li>
                                <li data-name="furcation1"> FURCATION STAGE 1 </li>
                                <li data-name="furcation2"> FURCATION STAGE 2 </li>
                                <li data-name="furcation3"> FURCATION STAGE 3 </li>
                                <li data-name="mobility1"> Tooth mobility class 1 </li>
                                <li data-name="mobility2"> Tooth mobility class 2 </li>
                                <li data-name="mobility3"> Tooth mobility class 3 </li>
                            </ul>
                        </li>
                        <li data-name="endo" class="group">
                            <h3 class="heading">ENDO TESTS</h3>
                            <ul>
                                <li data-name="cold"> COLD TEST </li>
                                <li data-name="heat"> HEAT TEST </li>
                                <li data-name="palpation"> PALPATION TEST </li>
                                <li data-name="percussion"> PERCUSSION TEST </li>
                                <li data-name="electricity"> ELECTRICITY TEST </li>
                            </ul>
                        </li>
                        <li data-name="colour" class="group">
                            <h3 class="heading">COLOUR CODING</h3>
                            <ul>
                                <li data-name="monitor"> MONITOR </li>
                                <li data-name="treatment"> TREATMENT </li>
                            </ul>
                        </li>
                        <li data-name="other" class="group">
                            <h3 class="heading">Other</h3>
                            <ul>
                                <li data-name="extract"> To be extracted </li>
                            </ul>
                        </li>
                    </ul>`
                }
            ]
        })

        this.wrapper.on('click', '.legend .toggle', (e) => {
            legendDialog.show();
        });
        // this.wrapper.on('mouseleave', '.legend .toggle', (e) => {
        //     legendDialog.hide();
        // });

    }

    showPeriodontalSites(toothNumber) {
        const sites = ['MB', 'B', 'DB', 'ML', 'L', 'DL', 'MP', 'P', 'DP'];
        let html = '';
        const firstDigit = Math.floor(parseInt(toothNumber) / 10);
        const jaw = (firstDigit === 1 || firstDigit === 2 || firstDigit === 5 || firstDigit === 6) ? 'upper' : 'lower';


        sites.forEach(site => {
            if (jaw === 'upper' && (site === 'ML' || site === 'L' || site === 'DL')) return;
            if (jaw === 'lower' && (site === 'MP' || site === 'P' || site === 'DP')) return;
            const record = (this.doc.periodontal_records || []).find(p =>
                p.tooth == toothNumber && p.site == site
            ) || {};

            html += `
        <tr>
          <td>${site}</td>
          <td><input type="number" value="${record.probing_depth || ''}" 
                class="probing-depth" data-site="${site}" step="0.5" min="0" max="15"></td>
          <td><input type="number" value="${record.gingival_margin || ''}" 
                class="gingival-margin" data-site="${site}" step="0.5" min="-5" max="5"></td>
          <td><input type="checkbox" class="bleeding" data-site="${site}" 
                ${record.bleeding ? 'checked' : ''}></td>
          <td><input type="checkbox" class="suppuration" data-site="${site}" 
                ${record.suppuration ? 'checked' : ''}></td>
          <td><input type="checkbox" class="plaque" data-site="${site}" 
                ${record.plaque ? 'checked' : ''}></td>
          <td>
            <select class="furcation" data-site="${site}">
              <option value="None" ${record.furcation == 'None' ? 'selected' : ''}>None</option>
              <option value="Grade 1" ${record.furcation == 'Grade 1' ? 'selected' : ''}>G1</option>
              <option value="Grade 2" ${record.furcation == 'Grade 2' ? 'selected' : ''}>G2</option>
              <option value="Grade 3" ${record.furcation == 'Grade 3' ? 'selected' : ''}>G3</option>
            </select>
          </td>
        </tr>
      `;
        });

        this.bindPeriodontalEvents(toothNumber);
        return html;
    }

    bindPeriodontalEvents(toothNumber) {
        const saveSiteData = (field, site, value) => {
            let me = this;
            if (!this.doc) return;

            frappe.call({
                method: "do_dental.do_dental.doctype.dental_charting.dental_charting.update_tooth_periodontal",
                args: {
                    chart_name: this.doc.name,
                    tooth_number: toothNumber,
                    site,
                    field,
                    value,
                },
                callback: function (response) {
                    if (response.message) {
                        this.doc = response.message
                    }
                    else {
                        frappe.msgprint('Failed to update the chart');
                    }
                }
            });

        };

        // Bind input events
        $('body').on('change', '.probing-depth', (e) => {
            const $input = $(e.target);
            saveSiteData('probing_depth', $input.data('site'), parseFloat($input.val()));
        });

        $('body').on('change', '.gingival-margin', (e) => {
            const $input = $(e.target);
            saveSiteData('gingival_margin', $input.data('site'), parseFloat($input.val()));
        });

        $('body').on('change', '.bleeding, .suppuration, .plaque', (e) => {
            const $input = $(e.target);
            saveSiteData($input.attr('class'), $input.data('site'), $input.prop('checked'));
        });

        $('body').on('change', '.furcation', (e) => {
            const $select = $(e.target);
            saveSiteData('furcation', $select.data('site'), $select.val());
        });
    }

    showToothPeriodontalDialog() {
        const toothRecord = (this.doc.dental_conditions || []).find(t => t.tooth == String(this.selectedTooth)) || {};
        const affectedSurfaces = [
            ...(toothRecord.mesial ? ['mesial'] : []),
            ...(toothRecord.distal ? ['distal'] : []),
            ...(toothRecord.occlusal ? ['occlusal'] : []),
            ...(toothRecord.buccal ? ['buccal'] : []),
            ...(toothRecord.lingual ? ['lingual'] : []),
            ...(toothRecord.facial ? ['facial'] : []),
            ...(toothRecord.palatal ? ['palatal'] : []),
        ]
        const periodontalHtml = this.showPeriodontalSites(String(this.selectedTooth));

        const dialog = new frappe.ui.Dialog({
            title: `TOOTH ${this.selectedTooth}`,
            fields: [
                {
                    label: "Status",
                    fieldname: "status",
                    fieldtype: "Select",
                    options: "Present\nMissing\nImplant\nBridge\nCrown\nUnerupted",
                    default: toothRecord.status || 'Present',
                    change: () => {
                        this.saveToothRecord(String(this.selectedTooth), dialog.get_values())

                        // Update visual
                        this.updateToothVisual(String(this.selectedTooth));
                    },
                },
                {
                    label: "Condition",
                    fieldname: "condition",
                    fieldtype: "Select",
                    options: "Healthy\nCaries\nFilled\nFractured\nDiscolored\nRoot Canal\nImpacted",
                    default: toothRecord.condition || 'Healthy',
                    depends_on: "eval:doc.status != 'Missing'",
                    change: () => {
                        this.saveToothRecord(String(this.selectedTooth), dialog.get_values())
                    },
                },
                {
                    label: "Affected Surfaces",
                    fieldtype: 'MultiSelectList',
                    fieldname: 'affected_surfaces',
                    depends_on: "eval:doc.condition && ['Caries','Filled','Fractured'].includes(doc.condition)",
                    change: () => {
                        this.saveToothRecord(String(this.selectedTooth), dialog.get_values())
                    },
                    options: [
                        { value: 'mesial', label: 'Mesial', description: '' },
                        { value: 'distal', label: 'Distal', description: '' },
                        { value: 'occlusal', label: 'Occlusal', description: '' },
                        { value: 'buccal', label: 'Buccal', description: '' },
                        { value: 'lingual', label: 'Lingual', description: '' },
                        { value: 'facial', label: 'Facial', description: '' },
                        { value: 'palatal', label: 'Palatal', description: '' },
                    ]
                },
                {
                    label: "Notes",
                    fieldname: "notes",
                    fieldtype: "Small Text",
                    max_height: '75px',
                    default: toothRecord.notes || '',
                    change: () => {
                        this.saveToothRecord(String(this.selectedTooth), dialog.get_values())
                    },
                },
                {
                    fieldname: 'periodontal_table',
                    fieldtype: 'HTML',
                    options: `
                    <div class="tooth-details-panel">
                        <div class="periodontal-grid">
                            <h5>Periodontal Measurements</h5>
                            <table class="perio-table">
                            <thead>
                                <tr>
                                <th>Site</th>
                                <th>Probing Depth</th>
                                <th>Gingival Margin</th>
                                <th>Bleeding</th>
                                <th>Supp</th>
                                <th>Plaque</th>
                                <th>Furcation</th>
                                </tr>
                            </thead>
                            <tbody id="perio-sites">${periodontalHtml}</tbody>
                            </table>
                        </div>
                    </div>`
                }
            ]
        })
        dialog.show();
        dialog.set_value('affected_surfaces', affectedSurfaces)
        this.bindPeriodontalEvents(String(this.selectedTooth));
        this.bindKeyboardShortcuts()

        const firstDigit = Math.floor(this.selectedTooth / 10);
        const side = (firstDigit === 1 || firstDigit === 4 || firstDigit === 5 || firstDigit === 8) ? 'right' : 'left';
        dialog.wrapper.closest('.modal-dialog').css("float", side)
    }

    saveToothRecord(toothNumber, values) {
        let me = this;
        if (!this.doc) return;

        if (values.affected_surfaces?.length > 0)
            values.affected_surfaces.forEach(value => {
                values['mesial'] = 0;
                values['distal'] = 0;
                values['occlusal'] = 0;
                values['buccal'] = 0;
                values['ligual'] = 0;
                values['facial'] = 0;
                values['palatal'] = 0;
                values[value] = 1;
            })

        frappe.call({
            method: "do_dental.do_dental.doctype.dental_charting.dental_charting.update_tooth_condition",
            args: {
                chart_name: this.doc.name,
                tooth_number: toothNumber,
                values: values
            },
            callback: function (response) {
                if (response.message) {
                    this.doc = response.message
                }
                else {
                    frappe.msgprint('Failed to update the chart');
                }
            }
        });
    }

    updateToothVisual(toothNumber) {
        const $tooth = this.wrapper.find(`.tooth[data-tooth="${toothNumber}"]`);
        $tooth.removeClass(function (index, className) {
            return (className.match(/(^|\s)(status|condition)-\S+/g) || []).join(' ');
        });

        const status = this.getToothStatus(toothNumber);
        $tooth.addClass(status);

        const jaw = $tooth.hasClass('upper') ? 'upper' : 'lower';
        const toothNewElement = this.createToothElement(toothNumber, jaw);

        $tooth.replaceWith(toothNewElement);
    }

    renderLegend() {
        const legendHtml = `
      <div class="legend-item"><div class="color-box status-missing"></div> Missing</div>
      <div class="legend-item"><div class="color-box status-implant"></div> Implant</div>
      <div class="legend-item"><div class="color-box condition-caries"></div> Caries</div>
      <div class="legend-item"><div class="color-box condition-filled"></div> Filled</div>
      <div class="legend-item"><div class="color-box condition-root-canal"></div> Root Canal</div>
    `;

        this.wrapper.find('.chart-legend').html(legendHtml);
    }

    bindKeyboardShortcuts() {
        const dialogWrapper = $('.modal:visible'); // current open dialog

        // Make sure we only bind once per dialog
        dialogWrapper.off('keydown.dentalNav').on('keydown.dentalNav', (e) => {
            if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
                e.preventDefault();
                this.navigateTooth(1);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
                e.preventDefault();
                this.navigateTooth(-1);
            }
        });
    }

    navigateTooth(step) {
        const order = this.is_pediatric
            ? ['55', '54', '53', '52', '51', '61', '62', '63', '64', '65',
                '85', '84', '83', '82', '81', '71', '72', '73', '74', '75']
            : ['18', '17', '16', '15', '14', '13', '12', '11',
                '21', '22', '23', '24', '25', '26', '27', '28',
                '48', '47', '46', '45', '44', '43', '42', '41',
                '31', '32', '33', '34', '35', '36', '37', '38'];

        const currentIndex = order.indexOf(String(this.selectedTooth));
        if (currentIndex === -1) return;

        const newIndex = currentIndex + step;
        if (newIndex < 0 || newIndex >= order.length) return;

        this.selectedTooth = order[newIndex];

        // Close old dialog
        frappe.ui.dialog.hide();

        // Open new dialog
        this.showToothPeriodontalDialog();
    }

    togglePeriodontalCheckbox(tooth, field) {
        if (!tooth) return;

        const $currentRow = this.wrapper.find(`.perio-table input.${field}:focus`).closest('tr');
        if (!$currentRow.length) return;

        const site = $currentRow.find('td:first-child').text().trim();
        const $checkbox = this.wrapper.find(`.perio-table input.${field}[data-site="${site}"]`);
        $checkbox.prop('checked', !$checkbox.prop('checked')).trigger('change');
    }

    setToothStatus(tooth, status) {
        this.saveToothRecord(tooth, { status: status });
    }

    setToothCondition(tooth, condition) {
        this.saveToothRecord(tooth, { condition: condition });
    }

};