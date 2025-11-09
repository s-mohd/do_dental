frappe.dom.set_style("/* sfc-style:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/ToothCanvas.vue?type=style&index=0 */\ncanvas[data-v-b57cba2b] {\n  vertical-align: middle;\n  outline: none;\n}\n.number[data-v-b57cba2b] {\n  font-size: 12px;\n  line-height: 16px;\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  border-radius: 50%;\n  margin: 8px auto;\n}\n.tooth-canvas[data-v-b57cba2b] {\n  cursor: pointer;\n  transition: transform 0.15s ease, filter 0.15s ease;\n}\n.tooth-canvas.active[data-v-b57cba2b] {\n  transform: scale(1.05);\n  filter: drop-shadow(0 0 8px rgba(15, 98, 254, 0.45));\n}\n\n/* sfc-style:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/DentalChart.vue?type=style&index=0 */\n.dental-chart-container[data-v-0fb526e5] {\n  position: relative;\n  padding-right: 84px;\n}\n.chart-header[data-v-0fb526e5] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.layer-controls[data-v-0fb526e5] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.layer-controls label[data-v-0fb526e5] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #4d5565;\n}\n.layer-controls input[data-v-0fb526e5] {\n  accent-color: #33a5de;\n}\n.chart-meta[data-v-0fb526e5] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.chart-status[data-v-0fb526e5] {\n  font-size: 12px;\n  color: #7a8599;\n}\n.chart-status.warning[data-v-0fb526e5] {\n  color: #cc7a00;\n}\n.legend-button[data-v-0fb526e5] {\n  border: 1px solid #4d5565;\n  background: #fff;\n  color: #4d5565;\n  border-radius: 4px;\n  padding: 4px 12px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.legend-button[data-v-0fb526e5]:hover {\n  background: #f2f4f7;\n}\n.chart-body[data-v-0fb526e5] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.teeth-row[data-v-0fb526e5] {\n  display: flex;\n  justify-content: center;\n  margin: 0.5rem 0;\n}\n.teeth-row li[data-v-0fb526e5] {\n  list-style: none;\n  margin: 0.2px;\n  padding: 0;\n}\nnav.mouth[data-v-0fb526e5] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  right: 24px;\n  overflow: hidden;\n  border: 1px solid #4d5565;\n  border-radius: 4px;\n}\nnav.mouth ul[data-v-0fb526e5] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\nnav.mouth li[data-v-0fb526e5] {\n  width: 48px;\n  height: 48px;\n  border-bottom: 1px solid #4d5565;\n  color: #7a8599;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    border;\n  cursor: pointer;\n}\nnav.mouth li[data-v-0fb526e5]:hover {\n  background-color: #ececec;\n}\nnav.mouth svg[data-v-0fb526e5] {\n  fill: currentcolor;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  width: auto;\n  padding: 10px;\n}\nnav.mouth .active-jaw[data-v-0fb526e5] {\n  color: #33a5de;\n}\n.legend-overlay[data-v-0fb526e5] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 25;\n}\n.legend-panel[data-v-0fb526e5] {\n  background: #fff;\n  border-radius: 8px;\n  padding: 24px;\n  width: min(420px, 90%);\n  max-height: 80vh;\n  overflow: auto;\n  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);\n}\n.legend-panel header[data-v-0fb526e5] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.legend-panel header h3[data-v-0fb526e5] {\n  margin: 0;\n  font-size: 18px;\n  color: #202633;\n}\n.legend-panel header button[data-v-0fb526e5] {\n  border: none;\n  background: none;\n  font-size: 22px;\n  line-height: 1;\n  cursor: pointer;\n  color: #4d5565;\n}\n.legend-panel section h4[data-v-0fb526e5] {\n  margin: 16px 0 8px;\n  font-size: 14px;\n  color: #4d5565;\n}\n.legend-panel ul[data-v-0fb526e5] {\n  margin: 0;\n  padding-left: 18px;\n  font-size: 13px;\n  color: #4d5565;\n}\n.legend-fade-enter-active[data-v-0fb526e5],\n.legend-fade-leave-active[data-v-0fb526e5] {\n  transition: opacity 0.2s ease;\n}\n.legend-fade-enter-from[data-v-0fb526e5],\n.legend-fade-leave-to[data-v-0fb526e5] {\n  opacity: 0;\n}\n.action-panel[data-v-0fb526e5] {\n  position: sticky;\n  top: 72px;\n  flex: 0 0 320px;\n  width: 320px;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  z-index: 10;\n}\n.action-panel .panel-header[data-v-0fb526e5] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.action-panel .panel-title[data-v-0fb526e5] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.action-panel .panel-subtitle[data-v-0fb526e5] {\n  margin: 0;\n  font-size: 13px;\n  color: #4d5565;\n}\n.action-panel .panel-close[data-v-0fb526e5] {\n  border: none;\n  background: transparent;\n  color: #475467;\n  font-size: 20px;\n  line-height: 1;\n  padding: 0 8px;\n  cursor: pointer;\n}\n.action-panel .panel-close[data-v-0fb526e5]:hover {\n  color: #0f62fe;\n}\n.action-panel .panel-body[data-v-0fb526e5] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: calc(100vh - 220px);\n  overflow-y: auto;\n  padding-right: 4px;\n}\n.action-panel .panel-body[data-v-0fb526e5]::-webkit-scrollbar {\n  width: 6px;\n}\n.action-panel .panel-body[data-v-0fb526e5]::-webkit-scrollbar-thumb {\n  background: rgba(148, 163, 184, 0.6);\n  border-radius: 3px;\n}\n.action-panel .existing-list h4[data-v-0fb526e5] {\n  margin: 0 0 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #475467;\n}\n.action-panel .existing-list ul[data-v-0fb526e5] {\n  margin: 0;\n  padding-left: 18px;\n  font-size: 12px;\n  color: #4d5565;\n}\n.action-panel .existing-item[data-v-0fb526e5] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.action-panel .existing-item .item-actions[data-v-0fb526e5] {\n  display: flex;\n  gap: 6px;\n}\n.action-panel .existing-item .text-button[data-v-0fb526e5] {\n  background: none;\n  border: none;\n  color: #0f62fe;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 0;\n}\n.action-panel .existing-item .text-button.danger[data-v-0fb526e5] {\n  color: #b42318;\n}\n.action-panel .form-field[data-v-0fb526e5] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.action-panel .form-field label[data-v-0fb526e5] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.action-panel select[data-v-0fb526e5],\n.action-panel textarea[data-v-0fb526e5],\n.action-panel input[data-v-0fb526e5]:not([type=\"checkbox\"]) {\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  padding: 8px 10px;\n  font-size: 13px;\n  color: #111827;\n  background: #fff;\n}\n.action-panel textarea[data-v-0fb526e5] {\n  resize: vertical;\n  min-height: 80px;\n}\n.action-panel .surface-grid[data-v-0fb526e5] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 6px;\n}\n.action-panel .surface-grid label[data-v-0fb526e5] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #475467;\n  padding: 6px 8px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n}\n.action-panel .surface-grid input[type=checkbox][data-v-0fb526e5] {\n  margin: 0;\n  width: 16px;\n  height: 16px;\n  accent-color: #0f62fe;\n  flex-shrink: 0;\n}\n.action-panel .surface-grid label.selected[data-v-0fb526e5] {\n  border-color: #0f62fe;\n  background: #e6f0ff;\n  color: #0f62fe;\n}\n.action-panel .panel-footer[data-v-0fb526e5] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.action-panel button.primary[data-v-0fb526e5] {\n  background: #0f62fe;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.action-panel button.primary[data-v-0fb526e5]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.action-panel button.secondary[data-v-0fb526e5] {\n  background: transparent;\n  color: #475467;\n  border: 1px solid #d0d5dd;\n  border-radius: 8px;\n  padding: 8px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.action-panel .panel-error[data-v-0fb526e5] {\n  color: #b42318;\n  font-size: 12px;\n  margin: 0;\n}\n.action-panel .field-hint[data-v-0fb526e5] {\n  margin: 0;\n  font-size: 12px;\n  color: #6b7280;\n}\n.action-panel .form-section[data-v-0fb526e5] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n/* ../do_dental/do_dental/public/js/chart/chart.css */\n.app > [data-view=terms-and-conditions] {\n  position: fixed;\n  z-index: 200;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n}\n.app > [data-view=terms-and-conditions] .dialog {\n  position: relative;\n  width: auto;\n  min-height: calc(100vh - 64px);\n  padding: 0;\n  margin: 32px;\n  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 4px;\n}\n.app > [data-view=terms-and-conditions] .dialog header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  text-align: center;\n  flex: 0 0 64px;\n  margin: 0;\n  background: #f2f4f7;\n  border-bottom: 1px solid #e6e7eb;\n}\n.app > [data-view=terms-and-conditions] .dialog header:last-child {\n  margin-bottom: 0;\n}\n.app > [data-view=terms-and-conditions] .dialog .content {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 16px;\n}\n.app > [data-view=terms-and-conditions] .dialog .content h1,\n.app > [data-view=terms-and-conditions] .dialog .content h2 {\n  margin-bottom: 32px;\n}\n.app > [data-view=terms-and-conditions] .dialog .content h3,\n.app > [data-view=terms-and-conditions] .dialog .content p {\n  margin-bottom: 16px;\n}\n.app > [data-view=terms-and-conditions] .dialog .content,\n.app > [data-view=terms-and-conditions] .dialog .content p {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n}\n.app > [data-view=terms-and-conditions] .dialog .actions {\n  display: block;\n  margin: 0;\n  text-align: center;\n  flex: 0 0 48px;\n  padding: 16px;\n  text-align: right;\n  padding: 0 16px 16px;\n}\n.app > [data-view=terms-and-conditions] .dialog .actions .toggle-switch {\n  margin-right: 24px;\n}\n.app > [data-view=terms-and-conditions] .dialog .actions .button {\n  vertical-align: top;\n}\nhtml {\n  box-sizing: border-box;\n}\n*,\n:after,\n:before {\n  box-sizing: inherit;\n}\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n}\nhtml {\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\nhr {\n  height: 0;\n}\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family:\n    SFMono-Regular,\n    Consolas,\n    Liberation Mono,\n    Menlo,\n    Courier,\n    monospace;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\n[type=button],\n[type=reset],\n[type=submit],\nbutton {\n  -webkit-appearance: button;\n}\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n.dental-chart-container .chart-header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.dental-chart-container .action-tabs {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.dental-chart-container .action-tabs button {\n  border: 1px solid #d0d5dd;\n  background: #ffffff;\n  color: #344054;\n  padding: 6px 14px;\n  border-radius: 999px;\n  font-size: 14px;\n  line-height: 20px;\n  cursor: pointer;\n  transition:\n    background-color 0.15s ease,\n    color 0.15s ease,\n    border-color 0.15s ease,\n    box-shadow 0.15s ease;\n}\n.dental-chart-container .action-tabs button:hover {\n  border-color: #98a2b3;\n  color: #1d2939;\n}\n.dental-chart-container .action-tabs button.active {\n  background: #0f62fe;\n  border-color: #0f62fe;\n  color: #ffffff;\n  box-shadow: 0 1px 2px rgba(15, 98, 254, 0.24);\n}\n.dental-chart-container .layer-controls {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.dental-chart-container .chart-meta {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dental-chart-container {\n  position: relative;\n  min-height: 100%;\n}\n.dental-chart-container .chart-main {\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: flex-start;\n  gap: 24px;\n}\n.dental-chart-container .chart-main .mouth {\n  flex: 0 0 auto;\n}\n.chart-loading {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.85);\n  z-index: 40;\n  font-size: 14px;\n  color: #475467;\n}\n.chart-loading__spinner {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid rgba(15, 98, 254, 0.2);\n  border-top-color: #0f62fe;\n  animation: chart-spin 0.8s linear infinite;\n}\n@keyframes chart-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.periodontal-panel .panel-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.periodontal-panel .panel-close {\n  border: none;\n  background: transparent;\n  color: #475467;\n  font-size: 20px;\n  line-height: 1;\n  padding: 0 8px;\n  cursor: pointer;\n}\n.periodontal-panel .panel-close:hover {\n  color: #0f62fe;\n}\n.panel-slide-enter-active,\n.panel-slide-leave-active {\n  transition: opacity 0.2s ease, transform 0.2s ease;\n}\n.panel-slide-enter-from,\n.panel-slide-leave-to {\n  opacity: 0;\n  transform: translateX(16px);\n}\n.periodontal-panel {\n  position: sticky;\n  top: 72px;\n  flex: 0 0 320px;\n  width: 320px;\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  z-index: 10;\n}\n.periodontal-panel .panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.periodontal-panel .panel-header .panel-title {\n  text-align: center;\n  flex: 1;\n}\n.periodontal-panel .panel-header .panel-title .label {\n  font-size: 12px;\n  color: #667085;\n  display: block;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.periodontal-panel .panel-header .panel-title strong {\n  font-size: 24px;\n  color: #101828;\n}\n.periodontal-panel .nav-button {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid #d0d5dd;\n  background: #f9fafb;\n  color: #344054;\n  cursor: pointer;\n  transition: background-color 0.15s ease, border-color 0.15s ease;\n}\n.periodontal-panel .nav-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n.periodontal-panel .site-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.periodontal-panel .site-grid button {\n  border-radius: 12px;\n  border: 1px solid #e4e7ec;\n  padding: 10px 12px;\n  text-align: left;\n  background: #f9fafb;\n  cursor: pointer;\n  transition:\n    border-color 0.15s ease,\n    background-color 0.15s ease,\n    color 0.15s ease;\n}\n.periodontal-panel .site-grid button.active {\n  border-color: #0f62fe;\n  background: rgba(15, 98, 254, 0.1);\n  color: #0f62fe;\n}\n.periodontal-panel .site-grid .site-label {\n  font-size: 13px;\n  font-weight: 600;\n  display: block;\n}\n.periodontal-panel .site-grid .site-summary {\n  font-size: 11px;\n  color: #667085;\n}\n.periodontal-panel .measurement-section {\n  display: grid;\n  gap: 12px;\n}\n.periodontal-panel .measurement-section label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 13px;\n  color: #344054;\n}\n.periodontal-panel .measurement-section input {\n  border: 1px solid #d0d5dd;\n  border-radius: 10px;\n  padding: 10px 12px;\n  font-size: 16px;\n  color: #101828;\n}\n.periodontal-panel .flags-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.periodontal-panel .flag-toggle {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: #344054;\n}\n.periodontal-panel .panel-footer {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.periodontal-panel .auto-toggle {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #344054;\n}\n.periodontal-panel .footer-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.periodontal-panel .footer-actions button {\n  border-radius: 10px;\n  padding: 10px 14px;\n  font-size: 14px;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n.periodontal-panel .footer-actions .secondary {\n  background: #f4f4f5;\n  border-color: #e4e7ec;\n  color: #344054;\n}\n.periodontal-panel .footer-actions .primary {\n  background: #0f62fe;\n  color: #ffffff;\n  border-color: #0f62fe;\n}\n.periodontal-panel .panel-hint {\n  margin: 0;\n  font-size: 12px;\n  color: #0f7b3b;\n}\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring,\nbutton:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\nlegend {\n  padding: 0;\n}\nprogress {\n  vertical-align: baseline;\n}\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nbody,\nhtml {\n  position: relative;\n}\nbody {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    Segoe UI,\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol;\n}\nbody[data-restrict-viewport=true],\nhtml {\n  height: 100%;\n}\nbody[data-viewport-status=ok] {\n  min-width: 1024px;\n  min-height: 656px;\n}\n@media print {\n  @page {\n    size: a4;\n    margin: 2.125cm 0;\n  }\n  body {\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  body[data-restrict-viewport=false] {\n    min-width: 0;\n  }\n}\n:focus:not(.focus-visible) {\n  outline: 0;\n}\n.app {\n  display: flex;\n  overflow: hidden;\n  height: 100%;\n}\n.app > * {\n  flex: none;\n  overflow: auto;\n  width: 100%;\n}\nhtml[data-env=test] * {\n  transition-property: none !important;\n}\nh1.logo {\n  margin: 0 0 32px;\n  color: #008fd6;\n}\nh1.logo a {\n  display: block;\n  padding-left: 20px;\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  margin: 0;\n}\nbody {\n  color: #7a8599;\n  background: #fff;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  text-size-adjust: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\np,\nul {\n  margin: 0;\n}\np {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\np:last-child {\n  margin-bottom: 0;\n}\nol,\nul {\n  position: relative;\n  list-style: none;\n}\nol,\nol > li,\nul,\nul > li {\n  display: block;\n  margin: 0;\n  padding: 0;\n}\na {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    border;\n  color: inherit;\n  text-decoration: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  a {\n    transition: none;\n  }\n}\ncanvas,\nimg,\nsvg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n}\nsvg {\n  fill: currentcolor;\n}\n.visualization {\n  display: block;\n}\ncanvas {\n  outline: none;\n}\nbutton {\n  padding: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n}\nbutton[disabled] {\n  cursor: default;\n}\n.button {\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.08px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    border;\n  display: inline-block;\n  padding: 12px 24px;\n  border-radius: 6px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  font-weight: 700;\n  color: #fff;\n  background: #008fd6;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n@media (prefers-reduced-motion: reduce) {\n  .button {\n    transition: none;\n  }\n}\n.button:active {\n  background-color: #0075b0;\n}\n.button.disabled,\n.button:disabled {\n  pointer-events: none;\n  cursor: default;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.button[data-icon] {\n  position: relative;\n  padding-left: 56px;\n  text-align: left;\n}\n.button[data-icon]:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 18px;\n  width: 24px;\n  height: 24px;\n}\n.button[data-icon=add]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 21.818c-5.422 0-9.818-4.396-9.818-9.818S6.578 2.182 12 2.182 21.818 6.578 21.818 12 17.422 21.818 12 21.818zm4.364-10.909H13.09V7.636a1.091 1.091 0 0 0-2.182 0v3.273H7.636a1.091 1.091 0 0 0 0 2.182h3.273v3.273a1.091 1.091 0 0 0 2.182 0V13.09h3.273a1.091 1.091 0 0 0 0-2.182z'/%3E%3C/svg%3E\");\n}\n.button[data-icon=to-be-extracted]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0m0 21.818c-5.422 0-9.818-4.396-9.818-9.818S6.578 2.182 12 2.182 21.818 6.578 21.818 12 17.422 21.818 12 21.818M15.5 9.39V7.74c0-.409-.348-.74-.778-.74H9.278c-.43 0-.778.331-.778.74v1.666c0 .233.116.452.312.593l2.54 1.813-2.54 1.814a.73.73 0 0 0-.312.593v1.666c0 .409.348.74.778.74h5.444c.43 0 .778-.331.778-.74v-1.65a.73.73 0 0 0-.31-.59l-2.545-1.832L15.19 9.98a.73.73 0 0 0 .309-.591'/%3E%3C/svg%3E\");\n}\n.button[data-icon=missing]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23FFF' d='M-620-27H404v748H-620z'/%3E%3Cg fill='%23008fd6' fill-rule='nonzero'%3E%3Cpath d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0m0 21.818c-5.422 0-9.818-4.396-9.818-9.818S6.578 2.182 12 2.182 21.818 6.578 21.818 12 17.422 21.818 12 21.818'/%3E%3Cpath d='m8.2 8.5 7.586 7.586m0-7.586L8.2 16.086' stroke='%23008fd6' stroke-linecap='round' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n.button[data-icon=reset]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.53 9.03c-1.62-3.23-5.02-5.32-8.68-5.32-.31 0-.62.02-.93.04l.5 1.21-6.4-.1L8.44-.02l.66 1.56c.62-.1 1.25-.15 1.88-.15 3.05 0 6.03 1.22 8.16 3.36.98.88 1.78 1.98 2.37 3.26l.12.26-1.97 1.05-.13-.29zM8.12 23.09l-3.05-5.67-.84 1.04a9.517 9.517 0 0 1-.27-10.98l.17-.25-1.88-1.24-.16.27C1.25 7.72.76 8.87.5 10c-.84 3.63.04 7.45 2.36 10.27L1.83 21.6l6.29 1.49zm2.36.93c1.51 0 2.83-.17 3.93-.51 3.57-1.05 6.38-3.65 7.75-7.15l1.65.2-1.84-6.21-3.47 5.64 1.37.14c-1.59 3.48-5.01 5.71-8.81 5.71-.19 0-.39-.01-.58-.02l-.3-.02-.11 2.22h.41z'/%3E%3C/svg%3E\");\n}\n.button[data-icon=jaws]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 14.9c-.3 2.5-1.5 4.5-3 4.5s-2.7-1.9-3-4.5c-.3 2.5-1.5 4.5-3 4.5s-2.7-2-3-4.5c-.2 1.9-1.1 3.3-2.3 3.3-1.3 0-2.3-1.8-2.3-4 .1-.6 1.1-1 2.3-1 1.1 0 2.1.4 2.2.9.3-.7 1.5-1.2 3-1.2s2.7.5 2.9 1.2c.3-.7 1.5-1.2 3-1.2s2.7.5 2.9 1.2c.2-.5 1.2-.9 2.3-.9 1.2 0 2.2.4 2.3 1v.1c0 2.2-1 3.9-2.3 3.9-.9-.1-1.8-1.5-2-3.3zM5.3 9.8c.3-2.9 1.6-5.1 3.3-5.1s3.2 2.2 3.3 5.1c.3-2.8 1.6-5.1 3.3-5.1s3.2 2.2 3.4 5.1C19 7.6 20.1 6 21.3 6c1.5 0 2.7 2.1 2.7 4.6-.1.7-1.3 1.2-2.7 1.2-1.3 0-2.4-.4-2.6-1-.3.8-1.7 1.4-3.4 1.4s-3.1-.6-3.3-1.4c-.3.8-1.7 1.4-3.4 1.4-1.6 0-3.1-.6-3.3-1.4-.3.6-1.4 1-2.7 1-1.4 0-2.6-.5-2.6-1.2v-.1C0 8.1 1.2 6 2.7 6c1.3.1 2.4 1.6 2.6 3.8z'/%3E%3C/svg%3E\");\n}\n.button.secondary {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  box-shadow: inset 0 0 0 2px #008fd6;\n  color: #008fd6;\n  background: transparent;\n}\n.button.secondary:active {\n  color: #fff;\n  background-color: #008fd6;\n}\n.button.danger,\n.button.danger:active {\n  background: #e13830;\n}\n.button.link {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  color: #008fd6;\n  background: none;\n}\n.button.link:active {\n  color: #0075b0;\n}\n.button.link[data-icon] {\n  padding: 0 0 0 32px;\n}\n.button.link[data-icon]:before {\n  left: 0;\n}\n.button.link[data-icon=add]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 21.818c-5.422 0-9.818-4.396-9.818-9.818S6.578 2.182 12 2.182 21.818 6.578 21.818 12 17.422 21.818 12 21.818zm4.364-10.909H13.09V7.636a1.091 1.091 0 0 0-2.182 0v3.273H7.636a1.091 1.091 0 0 0 0 2.182h3.273v3.273a1.091 1.091 0 0 0 2.182 0V13.09h3.273a1.091 1.091 0 0 0 0-2.182z'/%3E%3C/svg%3E\");\n}\n.button.link[data-icon=to-be-extracted]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0m0 21.818c-5.422 0-9.818-4.396-9.818-9.818S6.578 2.182 12 2.182 21.818 6.578 21.818 12 17.422 21.818 12 21.818M15.5 9.39V7.74c0-.409-.348-.74-.778-.74H9.278c-.43 0-.778.331-.778.74v1.666c0 .233.116.452.312.593l2.54 1.813-2.54 1.814a.73.73 0 0 0-.312.593v1.666c0 .409.348.74.778.74h5.444c.43 0 .778-.331.778-.74v-1.65a.73.73 0 0 0-.31-.59l-2.545-1.832L15.19 9.98a.73.73 0 0 0 .309-.591'/%3E%3C/svg%3E\");\n}\n.button.link[data-icon=missing]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23FFF' d='M-620-27H404v748H-620z'/%3E%3Cg fill='%23008fd6' fill-rule='nonzero'%3E%3Cpath d='M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0m0 21.818c-5.422 0-9.818-4.396-9.818-9.818S6.578 2.182 12 2.182 21.818 6.578 21.818 12 17.422 21.818 12 21.818'/%3E%3Cpath d='m8.2 8.5 7.586 7.586m0-7.586L8.2 16.086' stroke='%23008fd6' stroke-linecap='round' stroke-width='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n.button.link[data-icon=reset]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.53 9.03c-1.62-3.23-5.02-5.32-8.68-5.32-.31 0-.62.02-.93.04l.5 1.21-6.4-.1L8.44-.02l.66 1.56c.62-.1 1.25-.15 1.88-.15 3.05 0 6.03 1.22 8.16 3.36.98.88 1.78 1.98 2.37 3.26l.12.26-1.97 1.05-.13-.29zM8.12 23.09l-3.05-5.67-.84 1.04a9.517 9.517 0 0 1-.27-10.98l.17-.25-1.88-1.24-.16.27C1.25 7.72.76 8.87.5 10c-.84 3.63.04 7.45 2.36 10.27L1.83 21.6l6.29 1.49zm2.36.93c1.51 0 2.83-.17 3.93-.51 3.57-1.05 6.38-3.65 7.75-7.15l1.65.2-1.84-6.21-3.47 5.64 1.37.14c-1.59 3.48-5.01 5.71-8.81 5.71-.19 0-.39-.01-.58-.02l-.3-.02-.11 2.22h.41z'/%3E%3C/svg%3E\");\n}\n.button.link[data-icon=jaws]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 14.9c-.3 2.5-1.5 4.5-3 4.5s-2.7-1.9-3-4.5c-.3 2.5-1.5 4.5-3 4.5s-2.7-2-3-4.5c-.2 1.9-1.1 3.3-2.3 3.3-1.3 0-2.3-1.8-2.3-4 .1-.6 1.1-1 2.3-1 1.1 0 2.1.4 2.2.9.3-.7 1.5-1.2 3-1.2s2.7.5 2.9 1.2c.3-.7 1.5-1.2 3-1.2s2.7.5 2.9 1.2c.2-.5 1.2-.9 2.3-.9 1.2 0 2.2.4 2.3 1v.1c0 2.2-1 3.9-2.3 3.9-.9-.1-1.8-1.5-2-3.3zM5.3 9.8c.3-2.9 1.6-5.1 3.3-5.1s3.2 2.2 3.3 5.1c.3-2.8 1.6-5.1 3.3-5.1s3.2 2.2 3.4 5.1C19 7.6 20.1 6 21.3 6c1.5 0 2.7 2.1 2.7 4.6-.1.7-1.3 1.2-2.7 1.2-1.3 0-2.4-.4-2.6-1-.3.8-1.7 1.4-3.4 1.4s-3.1-.6-3.3-1.4c-.3.8-1.7 1.4-3.4 1.4-1.6 0-3.1-.6-3.3-1.4-.3.6-1.4 1-2.7 1-1.4 0-2.6-.5-2.6-1.2v-.1C0 8.1 1.2 6 2.7 6c1.3.1 2.4 1.6 2.6 3.8z'/%3E%3C/svg%3E\");\n}\ninput,\nselect,\ntextarea {\n  -webkit-appearance: none;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\ninput::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\ninput::-moz-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\ninput::-webkit-inner-spin-button {\n  display: none;\n}\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n.field {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  position: relative;\n  margin-bottom: 8px;\n}\n.field:last-child {\n  margin-bottom: 0;\n}\n.field > .label {\n  color: #7a8599;\n}\n.field .control {\n  display: block;\n  height: 56px;\n}\n.field .control input,\n.field .control select,\n.field .control textarea {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    padding,\n    border-color,\n    box-shadow;\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  border: 1px solid #e6e7eb;\n  outline: 0;\n  border-radius: 4px;\n  color: #202633;\n  background: #f2f4f7;\n  line-height: 24px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field .control input,\n  .field .control select,\n  .field .control textarea {\n    transition: none;\n  }\n}\n.field .control input:focus:not([readonly]),\n.field .control input:hover:not([readonly]),\n.field .control select:focus:not([readonly]),\n.field .control select:hover:not([readonly]),\n.field .control textarea:focus:not([readonly]),\n.field .control textarea:hover:not([readonly]) {\n  border-color: #98a1b3;\n  box-shadow: 0 2px 4px 0 rgba(77, 85, 101, 0.2);\n}\n.field .control.checkbox,\n.field .control.radio,\n.field .control.textarea {\n  height: auto;\n}\n.field .control.radio {\n  display: inline-block;\n}\n.field .control.radio input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\n.field .control.radio input + label {\n  display: inline-block;\n  padding-left: 29px;\n}\n.field .control.radio input + label:before {\n  content: \"\";\n  display: inline-block;\n  overflow: hidden;\n  width: 18px;\n  height: 18px;\n  padding: 3px;\n  border: 2px solid #e6e7eb;\n  border-radius: 50%;\n  margin-right: 11px;\n  margin-left: -29px;\n  margin-bottom: 1px;\n  vertical-align: middle;\n}\n.field .control.radio input:checked + label {\n  color: #202633;\n}\n.field .control.radio input:checked + label:before {\n  border-color: #008fd6;\n  background: #008fd6;\n  background-clip: content-box;\n}\n.field .control.radio input:focus.focus-visible + label:before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.field .control.radio .option {\n  margin-right: 20px;\n}\n.field .control.radio .option:last-child {\n  margin-right: 0;\n}\n.field .control.checkbox input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\n.field .control.checkbox input + label {\n  display: inline-block;\n  padding: 16px 0 16px 38px;\n}\n.field .control.checkbox input + label:before {\n  content: \"\";\n  display: inline-block;\n  overflow: hidden;\n  width: 20px;\n  height: 20px;\n  padding: 3px;\n  border: 2px solid #008fd6;\n  border-radius: 50%;\n  margin-right: 18px;\n  margin-left: -38px;\n  font-size: 10px;\n  line-height: 10px;\n  text-align: center;\n  vertical-align: middle;\n}\n.field .control.checkbox input:checked + label:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.6 9.5c-.8-.7-.8-1.9-.1-2.7l.1-.1c.8-.7 2.1-.7 2.9 0l2.4 2.4 6.7-6.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L7 13.6c-.6.6-1.6.6-2.2 0L.6 9.5z'/%3E%3C/svg%3E\");\n  background-color: #008fd6;\n}\n.field .control.checkbox input:focus.focus-visible + label:before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.field .control.select option:disabled,\n.field .control.select select:invalid {\n  color: rgba(32, 38, 51, 0.54);\n}\n.field .control.select option {\n  color: #202633;\n}\n.field[data-type=textarea] .control textarea {\n  display: block;\n}\n.field[data-type=textarea][data-sizing=fixed] .control textarea {\n  height: 130px;\n  resize: none;\n}\n.field[data-type=textarea][data-sizing=auto] .control textarea {\n  height: auto;\n}\n.field[data-label-type=normal] > .label {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  color: #7a8599;\n  display: block;\n  margin-bottom: 4px;\n}\n.field[data-label-type=compact] > .label {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    top,\n    transform,\n    font-size;\n  position: absolute;\n  top: 16px;\n  left: 17px;\n  pointer-events: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field[data-label-type=compact] > .label {\n    transition: none;\n  }\n}\n.field[data-label-type=compact].dirty > .label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  top: 7px;\n  transform: none;\n}\n.field[data-label-type=compact].dirty .control input,\n.field[data-label-type=compact].dirty .control select,\n.field[data-label-type=compact].dirty .control textarea {\n  padding-top: 22px;\n  padding-bottom: 10px;\n}\n.field.has-errors > .control input,\n.field.has-errors > .control select,\n.field.has-errors > .control textarea {\n  border-color: #e13830;\n}\n.field.has-errors .error {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  display: block;\n  margin-top: 8px;\n  margin-bottom: 12px;\n  color: #e13830;\n}\n.field[data-type=radio] {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.field[data-type=radio] > .label {\n  position: static;\n  float: left;\n  margin-right: 20px;\n  color: #202633;\n}\n.field[data-type=birth-date] .controls {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: border-color, box-shadow;\n  display: flex;\n  border: 1px solid #e6e7eb;\n  border-radius: 4px;\n  background: #f2f4f7;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field[data-type=birth-date] .controls {\n    transition: none;\n  }\n}\n.field[data-type=birth-date] .controls:focus-within,\n.field[data-type=birth-date] .controls:hover {\n  border-color: #98a1b3;\n  box-shadow: 0 2px 4px 0 rgba(77, 85, 101, 0.2);\n}\n.field[data-type=birth-date] .controls input,\n.field[data-type=birth-date] .controls select {\n  border: 0;\n  border-radius: 0;\n  background: none;\n  box-shadow: none;\n}\n.field[data-type=birth-date] .control {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: opacity;\n  position: relative;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field[data-type=birth-date] .control {\n    transition: none;\n  }\n}\n.field[data-type=birth-date] .control:before {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: top;\n  content: \"/\";\n  position: absolute;\n  top: 22px;\n  left: -3px;\n  pointer-events: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field[data-type=birth-date] .control:before {\n    transition: none;\n  }\n}\n.field[data-type=birth-date] .control.text {\n  width: 88px;\n}\n.field[data-type=birth-date] .control.text:first-child {\n  width: 56px;\n}\n.field[data-type=birth-date] .control.text:first-child:before {\n  content: none;\n}\n.field[data-type=birth-date] .control.select {\n  width: 144px;\n}\n.field[data-type=birth-date] .control.select:after {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: top;\n  position: absolute;\n  top: 28px;\n  right: 16px;\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%237a8599' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.9 11.5c-.4-.4-.5-1.1 0-1.6L6.7 6 2.9 2c-.5-.5-.4-1.2 0-1.6.5-.4 1.2-.4 1.7.1.4.4 4.5 4.7 4.5 4.7.4.4.4 1.1 0 1.6 0 0-4.1 4.3-4.5 4.7-.5.5-1.2.5-1.7 0z'/%3E%3C/svg%3E\");\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  transform: rotate(90deg);\n  pointer-events: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field[data-type=birth-date] .control.select:after {\n    transition: none;\n  }\n}\n.field[data-type=birth-date] .control.select select {\n  padding-right: 32px;\n}\n.field[data-type=birth-date]:not(.dirty) .control {\n  opacity: 0;\n}\n.field[data-type=birth-date]:not(.dirty) .control:before {\n  top: 16px;\n}\n.field[data-type=birth-date]:not(.dirty) .control.select:after {\n  top: 22px;\n}\n.field[data-type=birth-date].has-errors .controls {\n  border-color: #e13830;\n}\n.field[data-type=birth-date].has-errors .error {\n  margin-bottom: 4px;\n}\n.field.toggle-switch {\n  padding: 20px 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.field.toggle-switch label {\n  display: inline-block;\n  margin-right: 64px;\n  color: #4d5565;\n  vertical-align: top;\n  cursor: pointer;\n}\n.field.toggle-switch label:before {\n  transition: 0.25s linear;\n  transition-property: box-shadow, border-color;\n  content: \"\";\n  position: absolute;\n  top: 17px;\n  right: 0;\n  overflow: hidden;\n  width: 50px;\n  height: 30px;\n  border-radius: 18px;\n  background: #7a8599;\n  box-shadow: inset 0 0 #e6e7eb;\n}\n@media (prefers-reduced-motion: reduce) {\n  .field.toggle-switch label:before {\n    transition: none;\n  }\n}\n.field.toggle-switch label:after {\n  transition: 0.2s ease-in-out;\n  transition-property: transform;\n  content: \"\";\n  position: absolute;\n  top: 19px;\n  right: 22px;\n  overflow: hidden;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n@media (prefers-reduced-motion: reduce) {\n  .field.toggle-switch label:after {\n    transition: none;\n  }\n}\n.field.toggle-switch input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\n.field.toggle-switch input:checked + label:before {\n  border-color: #4cd964;\n  box-shadow: inset 0 0 0 15px #4cd964;\n}\n.field.toggle-switch input:checked + label:after {\n  transform: translateX(20px);\n}\n.field.toggle-switch input:focus.focus-visible + label:before {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n.field.toggle-switch input:disabled + label {\n  pointer-events: none;\n  cursor: default;\n  opacity: 0.5;\n}\n.overlay {\n  position: fixed;\n  z-index: 200;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.dialog {\n  position: relative;\n  width: 480px;\n  padding: 64px 80px;\n  border-radius: 4px;\n  margin: 48px auto;\n  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);\n  background: #fff;\n}\n.dialog > .title {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 21px;\n  line-height: 24px;\n  letter-spacing: 0.13px;\n  border-bottom: 1px solid #e6e7eb;\n  padding: 20px 80px;\n  margin: -64px -80px 56px;\n  text-align: center;\n  max-width: none;\n}\n.dialog .actions {\n  display: flex;\n  margin: 16px -8px 0;\n}\n.dialog .actions .button {\n  flex-grow: 1;\n  margin: 0 8px;\n}\n.dialog .button.cancel {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: auto;\n  padding: 20px 28px;\n  margin: 0;\n  font-weight: 600;\n}\n.dialog.confirmation,\n.dialog.unsaved-changes {\n  padding-top: 48px;\n  padding-bottom: 48px;\n  text-align: center;\n}\n.dialog.confirmation > .title,\n.dialog.unsaved-changes > .title {\n  margin-top: -48px;\n  margin-bottom: 40px;\n}\n.dialog.confirmation .actions,\n.dialog.unsaved-changes .actions {\n  margin-top: 32px;\n}\n.dialog.confirmation .actions .button.link,\n.dialog.unsaved-changes .actions .button.link {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 32px;\n  margin-right: 32px;\n}\n.dialog.unsaved-changes {\n  width: 560px;\n}\n.dialog.history-record {\n  padding: 32px;\n}\n.dialog.history-record > .title {\n  padding-left: 32px;\n  padding-right: 32px;\n  margin: -32px -32px 32px;\n}\n.dialog.error {\n  width: 800px;\n  padding: 16px;\n  text-align: center;\n}\n.dialog.error .message {\n  margin-bottom: 8px;\n}\n.dialog.error button.details {\n  color: #98a1b3;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n}\n.dialog.error .field.details textarea {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  padding: 0 8px;\n  height: 320px;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  user-select: text;\n  pointer-events: all;\n}\n.dialog.error .actions {\n  max-width: 320px;\n  margin: 32px auto 0;\n}\n.half-circle-spinner {\n  margin: auto;\n}\n.half-circle-spinner .circle {\n  border-top-color: currentcolor !important;\n  border-bottom-color: currentcolor !important;\n}\n.waiting.overlay > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: opacity;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade-enter-active,\n  .fade-leave-active {\n    transition: none;\n  }\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.slide-top-enter-active,\n.slide-top-leave-active {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: transform, opacity;\n}\n@media (prefers-reduced-motion: reduce) {\n  .slide-top-enter-active,\n  .slide-top-leave-active {\n    transition: none;\n  }\n}\n.slide-top-enter,\n.slide-top-leave-to {\n  transform: translateY(100%);\n  opacity: 0;\n}\n.horizontal-page-slide-backward-enter-active,\n.horizontal-page-slide-backward-leave-active,\n.horizontal-page-slide-forward-enter-active,\n.horizontal-page-slide-forward-leave-active {\n  transition: 0.3s linear;\n  transition-property: margin, transform;\n}\n@media (prefers-reduced-motion: reduce) {\n  .horizontal-page-slide-backward-enter-active,\n  .horizontal-page-slide-backward-leave-active,\n  .horizontal-page-slide-forward-enter-active,\n  .horizontal-page-slide-forward-leave-active {\n    transition: none;\n  }\n}\n.horizontal-page-slide-forward-enter-to {\n  margin-left: -100%;\n}\n.horizontal-page-slide-forward-leave-to {\n  transform: translateX(-100%);\n}\n.horizontal-page-slide-backward-enter {\n  margin-left: -200%;\n}\n.horizontal-page-slide-backward-enter-to {\n  margin-left: -100%;\n}\n.horizontal-page-slide-backward-leave-to {\n  transform: translateX(100%);\n}\n.browser-warning {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 8px 48px;\n  background: #f2f4f7;\n  border: 1px solid #e6e7eb;\n  text-align: center;\n  z-index: 2000;\n}\n.browser-warning p {\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n}\n.browser-warning a {\n  text-decoration: underline;\n}\n.browser-warning button {\n  position: absolute;\n  right: 16px;\n  top: 5px;\n}\n.buorg {\n  display: none;\n}\n.signin-button > div > div > svg {\n  height: 48px;\n  width: 100%;\n  color: #fff;\n}\nmain[data-view=account] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 24px;\n  background: #202633;\n}\nmain[data-view=account] h1.logo {\n  color: #fff;\n}\nmain[data-view=account] a.back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  margin: 20px;\n  color: #fff;\n}\nmain[data-view=account] .actions {\n  margin: 16px 0;\n}\nmain[data-view=account] .actions:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=account] .actions .button {\n  width: 100%;\n}\nmain[data-view=account] .links {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  margin-top: 32px;\n  text-align: center;\n}\nmain[data-view=account] .links .text {\n  display: block;\n  margin-bottom: 16px;\n  color: #bcc1cc;\n}\nmain[data-view=account] .links a {\n  color: #008fd6;\n}\nmain[data-view=account] .links a:active {\n  color: #0075b0;\n}\nmain[data-view=account] .errors {\n  margin: 16px 0;\n  color: #bcc1cc;\n}\nmain[data-view=account] .errors:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=account] .errors p {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  margin-bottom: 0;\n}\nmain[data-view=account] .panel {\n  width: 480px;\n  padding: 48px 80px;\n  border-radius: 4px;\n  margin-bottom: 72px;\n  background: #fff;\n}\nmain[data-view=account] .panel:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=account] .panel > .heading {\n  font-size: 15px;\n  line-height: 18px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  font-weight: 600;\n  color: #4d5565;\n}\nmain[data-view=account] .panel > .text {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n}\nmain[data-view=account] .panel .errors {\n  color: #7a8599;\n}\nmain[data-view=account] .panel .actions .errors .error {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  display: block;\n  margin-top: 8px;\n  margin-bottom: 12px;\n  color: #e13830;\n}\ndiv[data-view=get-started] .panel {\n  margin-bottom: 0;\n}\ndiv[data-view=get-started] form h1 {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  text-align: center;\n}\ndiv[data-view=get-started] form .footer .conditions {\n  margin: 32px 0;\n  color: #98a1b3;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n}\ndiv[data-view=get-started] form .footer .actions {\n  text-align: right;\n}\ndiv[data-view=sign-in] {\n  width: 320px;\n}\ndiv[data-view=sign-in] .field {\n  margin-bottom: 0;\n}\ndiv[data-view=sign-in] .field > .control input:focus,\ndiv[data-view=sign-in] .field > .control input:hover {\n  border-color: #e6e7eb;\n  box-shadow: none;\n}\ndiv[data-view=sign-in] .field > .control.email input {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\ndiv[data-view=sign-in] .field > .control.password input {\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n[data-view=viewport-warning] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n[data-view=viewport-warning] > .decoration {\n  margin-bottom: 16px;\n}\n[data-view=viewport-warning] > .decoration > svg {\n  max-height: 50vh;\n}\ndiv[data-view=user] {\n  display: flex;\n  flex-direction: column;\n}\ndiv[data-view=user] > header {\n  flex: none;\n  display: flex;\n  width: 100%;\n  padding: 0 24px;\n  border-bottom: 1px solid #e6e7eb;\n}\ndiv[data-view=user] > header > .profile {\n  display: flex;\n  order: 1;\n  align-items: center;\n  padding: 16px 0;\n  margin-left: auto;\n}\ndiv[data-view=user] > header > .profile p {\n  margin: 0;\n}\ndiv[data-view=user] > header > .profile .name {\n  font-size: 16px;\n  line-height: 18px;\n  letter-spacing: normal;\n}\ndiv[data-view=user] > header > .profile .actions {\n  margin-left: 16px;\n}\ndiv[data-view=user] > header > .profile .actions button {\n  color: #008fd6;\n  vertical-align: top;\n}\ndiv[data-view=user] > header > .tools .panel {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #202633;\n  display: flex;\n  flex-direction: column;\n  width: 264px;\n  min-height: 100%;\n  margin-left: auto;\n}\ndiv[data-view=user] > header > .tools .panel > .actions,\ndiv[data-view=user] > header > .tools .panel > .heading,\ndiv[data-view=user] > header > .tools .panel > .menu {\n  padding: 24px;\n}\ndiv[data-view=user] > header > .tools .panel > .heading {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  border-bottom: 1px solid #4d5565;\n  margin-bottom: 0;\n  font-weight: 400;\n  text-align: center;\n}\ndiv[data-view=user] > header > .tools .panel > .heading:last-child {\n  margin-bottom: 0;\n}\ndiv[data-view=user] > header > .tools .panel > .menu {\n  padding: 24px;\n}\ndiv[data-view=user] > header > .tools .panel > .menu .heading {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\ndiv[data-view=user] > header > .tools .panel > .menu > li {\n  padding-bottom: 16px;\n  border-bottom: 1px solid #4d5565;\n  margin-bottom: 16px;\n}\ndiv[data-view=user] > header > .tools .panel > .menu > li:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n  margin-bottom: 0;\n}\ndiv[data-view=user] > header > .tools .panel > .menu > li li {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  margin: 0;\n}\ndiv[data-view=user] > header > .tools .panel > .menu > li li:last-child {\n  margin-bottom: 0;\n}\ndiv[data-view=user] > header > .tools .panel > .menu > li a {\n  display: block;\n  padding: 8px 0;\n}\ndiv[data-view=user] > header > .tools .panel > .actions {\n  margin-top: auto;\n}\ndiv[data-view=user] > header > .tools .panel > .actions button {\n  color: #fff;\n}\ndiv[data-view=user] > header > .tools.sidebar-slide-enter-active,\ndiv[data-view=user] > header > .tools.sidebar-slide-enter-active > .panel,\ndiv[data-view=user] > header > .tools.sidebar-slide-leave-active,\ndiv[data-view=user] > header > .tools.sidebar-slide-leave-active > .panel {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: transform;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=user] > header > .tools.sidebar-slide-enter-active,\n  div[data-view=user] > header > .tools.sidebar-slide-enter-active > .panel,\n  div[data-view=user] > header > .tools.sidebar-slide-leave-active,\n  div[data-view=user] > header > .tools.sidebar-slide-leave-active > .panel {\n    transition: none;\n  }\n}\ndiv[data-view=user] > header > .tools.sidebar-slide-enter > .panel,\ndiv[data-view=user] > header > .tools.sidebar-slide-leave-to > .panel {\n  transform: translateX(264px);\n}\ndiv[data-view=user] > header nav.main ul {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -16px;\n  margin-right: -16px;\n}\ndiv[data-view=user] > header nav.main ul li {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  position: relative;\n  padding: 0 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\ndiv[data-view=user] > header nav.main ul li:after {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: left, right;\n  content: \"\";\n  position: absolute;\n  left: calc(100% + 16px);\n  right: -16px;\n  bottom: 0;\n  height: 3px;\n  background: #008fd6;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=user] > header nav.main ul li:after {\n    transition: none;\n  }\n}\ndiv[data-view=user] > header nav.main ul a {\n  color: #008fd6;\n  display: block;\n  padding: 24px 0;\n}\ndiv[data-view=user] > header nav.main ul a:active {\n  color: #0075b0;\n}\ndiv[data-view=user] > header nav.main ul .router-link-exact-active:after {\n  left: 16px;\n  right: 16px;\n}\ndiv[data-view=user] > header nav.main ul .router-link-exact-active ~ li:after {\n  left: -16px;\n  right: calc(100% + 16px);\n}\ndiv[data-view=user] > main {\n  flex-grow: 1;\n  display: flex;\n  overflow: hidden;\n  background: #f2f4f7;\n}\ndiv[data-view=user] > main > div[data-view] {\n  flex: none;\n  overflow: auto;\n  width: 100%;\n  padding: 24px;\n}\n.banner {\n  z-index: 10;\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n  width: 288px;\n  padding: 32px 32px 32px;\n  text-align: center;\n  background-color: #fff;\n  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);\n}\n.banner img {\n  height: 128px;\n}\n.banner .message span {\n  display: block;\n}\n.banner .subscribe.button {\n  width: 100%;\n}\n.banner .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n  margin: 0;\n}\ndiv[data-view=patients] {\n  display: flex;\n  flex-direction: column;\n}\ndiv[data-view=patients] > .actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\ndiv[data-view=patients] > .actions .search {\n  position: relative;\n  padding-left: 36px;\n}\ndiv[data-view=patients] > .actions .search:not(.waiting):before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.787 14.759 11.66 10.63a6.545 6.545 0 1 0-1.029 1.028l4.128 4.128a.725.725 0 0 0 1.028 0 .727.727 0 0 0 0-1.028zm-9.242-3.123a5.09 5.09 0 1 1 0-10.181 5.09 5.09 0 0 1 0 10.181z'/%3E%3C/svg%3E\");\n  left: 0;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n}\ndiv[data-view=patients] > .actions .search.waiting .half-circle-spinner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #008fd6;\n}\ndiv[data-view=patients] > .actions .search input {\n  font-size: 21px;\n  line-height: 24px;\n  letter-spacing: 0.13px;\n  width: 448px;\n  padding: 0;\n  border: 0;\n  font-weight: 300;\n  background: none;\n}\ndiv[data-view=patients] > .content {\n  flex-grow: 1;\n  overflow: auto;\n}\ndiv[data-view=patients] > .content .more {\n  margin-bottom: 16px;\n}\ndiv[data-view=patients] table.patients {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 8px;\n  margin: -8px 0 16px;\n  text-align: left;\n}\ndiv[data-view=patients] table.patients tr {\n  background: #fff;\n}\ndiv[data-view=patients] table.patients td,\ndiv[data-view=patients] table.patients th {\n  padding: 24px;\n}\ndiv[data-view=patients] table.patients thead th {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  position: sticky;\n  z-index: 2;\n  top: 0;\n  padding-top: 8px;\n  padding-bottom: 12px;\n  font-weight: 600;\n  background: #f2f4f7;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\ndiv[data-view=patients] table.patients tbody th,\ndiv[data-view=patients] table.patients td {\n  font-size: 16px;\n  line-height: 16px;\n  letter-spacing: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 256px;\n  border: 1px solid #e6e7eb;\n}\ndiv[data-view=patients] table.patients tbody th {\n  border-right: 0;\n  font-weight: 400;\n  color: #008fd6;\n}\ndiv[data-view=patients] table.patients td {\n  border-left: 0;\n}\ndiv[data-view=patients] table.patients td:not(:last-child) {\n  border-right: 0;\n}\ndiv[data-view=patients] table.patients th.name {\n  width: 25%;\n}\ndiv[data-view=patients] table.patients th.id {\n  width: 14%;\n}\ndiv[data-view=patients] table.patients th.date {\n  width: 10%;\n}\ndiv[data-view=patients] table.patients th.actions {\n  width: 80px;\n}\ndiv[data-view=patients] table.patients td.actions {\n  position: relative;\n  overflow: visible;\n  text-align: right;\n}\ndiv[data-view=patients] table.patients .tools-toggle {\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  position: relative;\n  width: 48px;\n  height: 48px;\n  margin: -16px -16px -16px 0;\n}\ndiv[data-view=patients] table.patients .tools-toggle:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #7a8599;\n  box-shadow: 6px 0 0 #7a8599, -6px 0 0 #7a8599;\n}\ndiv[data-view=patients] table.patients .tools {\n  border: 1px solid #e6e7eb;\n  border-radius: 8px;\n  background: #fff;\n  text-align: left;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1;\n  top: 10px;\n  right: 12px;\n  min-width: 144px;\n}\ndiv[data-view=patients] table.patients .tools li {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  border-bottom: 1px solid #e6e7eb;\n  margin-bottom: 0;\n  color: #008fd6;\n  white-space: nowrap;\n}\ndiv[data-view=patients] table.patients .tools li:last-child {\n  margin-bottom: 0;\n  border-bottom: 0;\n}\ndiv[data-view=patients] table.patients .tools button {\n  width: 100%;\n  height: 64px;\n  padding: 0 24px;\n  line-height: inherit;\n  color: inherit;\n  text-align: inherit;\n}\ndiv[data-view=patients] table.patients tr:last-child:not(:only-child) .tools {\n  top: auto;\n  bottom: 10px;\n}\ndiv[data-view=patients] .dialog .last-free-patient {\n  text-align: center;\n  margin-top: -40px;\n}\ndiv[data-view=patient] {\n  display: flex;\n}\ndiv[data-view=patient] .error {\n  padding: 32px;\n}\ndiv[data-view=patient] > aside {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  width: 64px;\n  color: #fff;\n  background: #008fd6;\n}\ndiv[data-view=patient] > aside nav li {\n  text-align: center;\n}\ndiv[data-view=patient] > aside nav li.primary {\n  opacity: 0.5;\n}\ndiv[data-view=patient] > aside nav li.primary.router-link-active {\n  opacity: 1;\n}\ndiv[data-view=patient] > aside nav a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n}\ndiv[data-view=patient] > aside nav a.back {\n  background: #33a5de;\n}\ndiv[data-view=patient] > aside .chart-layers {\n  margin-top: auto;\n  margin-bottom: 8px;\n}\ndiv[data-view=patient] > aside .chart-layers input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\ndiv[data-view=patient] > aside .chart-layers input + label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex-direction: column;\n  height: 64px;\n  font-weight: 600;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.5;\n}\ndiv[data-view=patient] > aside .chart-layers input + label:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 2.4C4.1 2.4 1.2 4.5 0 7.5c1.2 3 4.1 5.1 7.5 5.1s6.3-2.1 7.5-5.1c-1.2-3-4.1-5.1-7.5-5.1zm0 8.5c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zm2-3.4c0 1.2-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .8 2 2z'/%3E%3C/svg%3E\");\n  width: 18px;\n  height: 18px;\n}\ndiv[data-view=patient] > aside .chart-layers input:checked + label {\n  opacity: 1;\n}\ndiv[data-view=patient] > aside .chart-layers input:focus.focus-visible + label {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ndiv[data-view=patient] > main {\n  flex-grow: 1;\n}\ndiv[data-view=periodontal-probing] .zones,\nsection.panel.periodontal .zones {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -4px;\n}\ndiv[data-view=periodontal-probing] .zone,\nsection.panel.periodontal .zone {\n  flex-basis: 33.33%;\n  min-height: 96px;\n  padding: 4px;\n  color: #7a8599;\n  text-align: center;\n}\ndiv[data-view=periodontal-probing] .zone a,\nsection.panel.periodontal .zone a {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: color, box-shadow;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 8px;\n  border-radius: 6px;\n  box-shadow: inset 0 0 0 1px #e6e7eb;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=periodontal-probing] .zone a,\n  section.panel.periodontal .zone a {\n    transition: none;\n  }\n}\ndiv[data-view=periodontal-probing] .zone .label,\nsection.panel.periodontal .zone .label {\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: normal;\n  order: 1;\n  margin-bottom: 0;\n  font-weight: 600;\n}\ndiv[data-view=periodontal-probing] .zone .depth,\nsection.panel.periodontal .zone .depth {\n  font-size: 32px;\n  line-height: 38px;\n  letter-spacing: 0.19px;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: color, border-color;\n  border-bottom: 1px solid #d0d3d9;\n  padding-bottom: 12px;\n  margin-bottom: 2px;\n  font-weight: 300;\n  color: #4d5565;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=periodontal-probing] .zone .depth,\n  section.panel.periodontal .zone .depth {\n    transition: none;\n  }\n}\ndiv[data-view=periodontal-probing] .zone .margin,\nsection.panel.periodontal .zone .margin {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: color;\n  width: 28px;\n  height: 18px;\n  border: 1px solid;\n  border-radius: 9px;\n  margin: -12px auto 5px;\n  color: #d0d3d9;\n  background: #fff;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=periodontal-probing] .zone .margin,\n  section.panel.periodontal .zone .margin {\n    transition: none;\n  }\n}\ndiv[data-view=periodontal-probing] .zone .issues,\nsection.panel.periodontal .zone .issues {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator,\nsection.panel.periodontal .zone .issues .indicator {\n  width: 8px;\n  height: 8px;\n  border: 1px solid #4d5565;\n  border-radius: 50%;\n  position: absolute;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator.active,\nsection.panel.periodontal .zone .issues .indicator.active {\n  border-color: currentcolor;\n  background-color: currentcolor;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator.active[data-type=bleeding],\nsection.panel.periodontal .zone .issues .indicator.active[data-type=bleeding] {\n  color: #d0021b;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator.active[data-type=plaque],\nsection.panel.periodontal .zone .issues .indicator.active[data-type=plaque] {\n  color: #4a90e2;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator.active[data-type=pus],\nsection.panel.periodontal .zone .issues .indicator.active[data-type=pus] {\n  color: #f8e71c;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator.active[data-type=tartar],\nsection.panel.periodontal .zone .issues .indicator.active[data-type=tartar] {\n  color: transparent;\n  border-color: #bcc1cc;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator[data-type=bleeding],\nsection.panel.periodontal .zone .issues .indicator[data-type=bleeding] {\n  top: 0;\n  right: 0;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator[data-type=plaque],\nsection.panel.periodontal .zone .issues .indicator[data-type=plaque] {\n  top: 12px;\n  right: 0;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator[data-type=pus],\nsection.panel.periodontal .zone .issues .indicator[data-type=pus] {\n  top: 0;\n  right: 12px;\n}\ndiv[data-view=periodontal-probing] .zone .issues .indicator[data-type=tartar],\nsection.panel.periodontal .zone .issues .indicator[data-type=tartar] {\n  top: 12px;\n  right: 0;\n  z-index: 1;\n  background-color: #fff;\n}\ndiv[data-view=periodontal-probing] .zone a.router-link-exact-active,\nsection.panel.periodontal .zone a.router-link-exact-active {\n  box-shadow: inset 0 0 0 2px #98a1b3;\n}\ndiv[data-view=periodontal-probing] .zone.warning,\ndiv[data-view=periodontal-probing] .zone.warning .depth,\ndiv[data-view=periodontal-probing] .zone.warning .margin,\nsection.panel.periodontal .zone.warning,\nsection.panel.periodontal .zone.warning .depth,\nsection.panel.periodontal .zone.warning .margin {\n  color: #e13830;\n}\ndiv[data-view=periodontal-probing] .zone.warning .depth,\nsection.panel.periodontal .zone.warning .depth {\n  border-bottom-color: #e13830;\n}\ndiv[data-view=periodontal-probing] {\n  display: flex;\n  flex-direction: column;\n}\ndiv[data-view=periodontal-probing] button.audio {\n  position: absolute;\n  top: 0;\n  right: 45px;\n  padding: 10px;\n  margin: 28px;\n  color: #7a8599;\n}\ndiv[data-view=periodontal-probing] button.audio.active {\n  color: #008fd6;\n}\ndiv[data-view=periodontal-probing] form {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\ndiv[data-view=periodontal-probing] form .actions .button {\n  min-width: 120px;\n}\ndiv[data-view=periodontal-probing] .measurements {\n  display: flex;\n  margin: 0 -24px 24px;\n}\ndiv[data-view=periodontal-probing] .measurements .selector {\n  flex: 0 0 50%;\n  padding: 0 24px;\n}\ndiv[data-view=periodontal-probing] .measurements .selector legend {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\ndiv[data-view=periodontal-probing] .measurements .options {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(3, 60px);\n  border: solid #e6e7eb;\n  border-width: 1px 0 0 1px;\n  background:\n    linear-gradient(0deg, #e6e7eb 1px, rgba(230, 231, 235, 0) 0),\n    linear-gradient(270deg, #e6e7eb 1px, rgba(230, 231, 235, 0) 0),\n    #f2f4f7;\n  background-size: 20% 33.33%;\n}\ndiv[data-view=periodontal-probing] .measurements .option label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #f2f4f7;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=periodontal-probing] .measurements .option label {\n    transition: none;\n  }\n}\ndiv[data-view=periodontal-probing] .measurements .option input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\ndiv[data-view=periodontal-probing] .measurements .option input:checked + label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\ndiv[data-view=periodontal-probing] .measurements .option input:focus.focus-visible + label {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ndiv[data-view=periodontal-probing] .measurements .option label {\n  height: 100%;\n  border-radius: 0;\n  background: none;\n  box-shadow: none;\n}\ndiv[data-view=periodontal-probing] .measurements .option + button:last-child {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  grid-column-end: -1;\n  grid-row-end: -1;\n}\ndiv[data-view=periodontal-probing] .measurements .option.disabled label {\n  pointer-events: none;\n  cursor: default;\n  color: #e6e7eb;\n}\ndiv[data-view=periodontal-probing] .selector.furcation legend,\ndiv[data-view=periodontal-probing] .selector.issue legend,\ndiv[data-view=periodontal-probing] .selector.mobility legend {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\ndiv[data-view=periodontal-probing] .selector.furcation .options,\ndiv[data-view=periodontal-probing] .selector.issue .options,\ndiv[data-view=periodontal-probing] .selector.mobility .options {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(4, 1fr);\n}\ndiv[data-view=periodontal-probing] .selector.furcation .options label,\ndiv[data-view=periodontal-probing] .selector.issue .options label,\ndiv[data-view=periodontal-probing] .selector.mobility .options label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #f2f4f7;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=periodontal-probing] .selector.furcation .options label,\n  div[data-view=periodontal-probing] .selector.issue .options label,\n  div[data-view=periodontal-probing] .selector.mobility .options label {\n    transition: none;\n  }\n}\ndiv[data-view=periodontal-probing] .selector.furcation .options input,\ndiv[data-view=periodontal-probing] .selector.issue .options input,\ndiv[data-view=periodontal-probing] .selector.mobility .options input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\ndiv[data-view=periodontal-probing] .selector.furcation .options input:checked + label,\ndiv[data-view=periodontal-probing] .selector.issue .options input:checked + label,\ndiv[data-view=periodontal-probing] .selector.mobility .options input:checked + label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\ndiv[data-view=periodontal-probing] .selector.furcation .options input:focus.focus-visible + label,\ndiv[data-view=periodontal-probing] .selector.issue .options input:focus.focus-visible + label,\ndiv[data-view=periodontal-probing] .selector.mobility .options input:focus.focus-visible + label {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ndiv[data-view=periodontal-probing] .selector.furcation .option label,\ndiv[data-view=periodontal-probing] .selector.issue .option label,\ndiv[data-view=periodontal-probing] .selector.mobility .option label {\n  position: relative;\n}\ndiv[data-view=periodontal-probing] .selector.furcation .option label:after,\ndiv[data-view=periodontal-probing] .selector.issue .option label:after,\ndiv[data-view=periodontal-probing] .selector.mobility .option label:after {\n  font-size: 8px;\n  line-height: 8px;\n  letter-spacing: normal;\n  content: \"\";\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 8px;\n  height: 8px;\n}\ndiv[data-view=periodontal-probing] .selector.issue {\n  margin-bottom: 24px;\n}\ndiv[data-view=periodontal-probing] .selector.issue .option label:after {\n  border-radius: 50%;\n}\ndiv[data-view=periodontal-probing] .selector.issue .option[data-name=bleeding] label:after {\n  background: #d0021b;\n}\ndiv[data-view=periodontal-probing] .selector.issue .option[data-name=plaque] label:after {\n  background: #4a90e2;\n}\ndiv[data-view=periodontal-probing] .selector.issue .option[data-name=pus] label:after {\n  background: #f8e71c;\n}\ndiv[data-view=periodontal-probing] .selector.issue .option[data-name=tartar] label:after {\n  background: transparent;\n  border: 1px solid #bcc1cc;\n}\ndiv[data-view=periodontal-probing] .selector.furcation {\n  margin-bottom: 24px;\n}\ndiv[data-view=periodontal-probing] .selector.furcation .option input[value=\"1\"] + label:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23202633' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m3.989 2.954-2.51 5.02h-1.49L3.982-.044l.007.013.006-.013L7.99 7.974H6.5l-2.51-5.02z'/%3E%3C/svg%3E\");\n}\ndiv[data-view=periodontal-probing] .selector.furcation .option input[value=\"2\"] + label:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23202633' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8H0l4-8 4 8zM2.3 6.6h3.5L4 3.1 2.3 6.6z'/%3E%3C/svg%3E\");\n}\ndiv[data-view=periodontal-probing] .selector.furcation .option input[value=\"3\"] + label:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23202633' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4 0 4 8H0z'/%3E%3C/svg%3E\");\n}\ndiv[data-view=periodontal-probing] .selector.mobility {\n  margin-bottom: 24px;\n}\ndiv[data-view=periodontal-probing] .selector.mobility .option input[value=\"1\"] + label:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23202633' viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071zM19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n  width: 23px;\n  height: 9px;\n}\ndiv[data-view=periodontal-probing] .selector.mobility .option input[value=\"2\"] + label:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23202633' viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071z'/%3E%3Cpath d='M6.874.498a.571.571 0 0 1 .863.743l-.06.07-3.063 3.021 3.063 3.023c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.07-.06L3.398 4.74a.57.57 0 0 1-.061-.742l.061-.071zm9.208 7.671a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.022-3.064-3.022a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.071.06 3.475 3.429a.57.57 0 0 1 .061.742l-.06.071z'/%3E%3Cpath d='M19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n  width: 23px;\n  height: 9px;\n}\ndiv[data-view=periodontal-probing] .selector.mobility .option input[value=\"3\"] + label:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23202633' viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071z'/%3E%3Cpath d='M6.874.498a.571.571 0 0 1 .863.743l-.06.07-3.063 3.021 3.063 3.023c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.07-.06L3.398 4.74a.57.57 0 0 1-.061-.742l.061-.071z'/%3E%3Cpath d='M9.77.498a.571.571 0 0 1 .863.743l-.06.07-3.064 3.022 3.064 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.071-.06L6.295 4.74a.57.57 0 0 1-.061-.742l.06-.071zm3.416 7.671a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .736-.065l.071.06 3.475 3.429a.57.57 0 0 1 .062.742l-.062.071z'/%3E%3Cpath d='M16.082 8.169a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.022-3.064-3.022a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.071.06 3.475 3.429a.57.57 0 0 1 .061.742l-.06.071z'/%3E%3Cpath d='M19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n  width: 23px;\n  height: 9px;\n}\ndiv[data-view=periodontal-probing] .toggle-switch[data-name=periodontal-probing-sequential-mode-switch] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-top: auto;\n  padding-bottom: 8px;\n}\ndiv[data-view=periodontal-probing] .toggle-switch[data-name=periodontal-probing-sequential-mode-switch] label {\n  color: #7a8599;\n}\ndiv[data-view=periodontal-probing] .toggle-switch[data-name=periodontal-probing-sequential-mode-switch] + .actions {\n  margin-top: 0;\n  padding-top: 0;\n}\nmain[data-view=chart] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  padding: 24px;\n  color: #4d5565;\n  text-align: center;\n}\n.app[data-theme=dark] main[data-view=chart] {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #202633;\n}\n@media (prefers-color-scheme: dark) {\n  .app[data-theme=auto] main[data-view=chart] {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    color: #fff;\n    background-color: #202633;\n  }\n}\nmain[data-view=chart] > .header {\n  position: absolute;\n  z-index: 5;\n  left: 24px;\n  right: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: space-between;\n}\nmain[data-view=chart] h1 {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  max-width: 50%;\n  padding-right: 80px;\n  font-weight: 400;\n  color: #7a8599;\n  text-align: left;\n}\nmain[data-view=chart] h1:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=chart] .mode-selector {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -8px;\n}\nmain[data-view=chart] .mode-selector .menu {\n  position: relative;\n  display: flex;\n  border-radius: 4px;\n  border: 1px solid #98a1b3;\n  color: #98a1b3;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\nmain[data-view=chart] .mode-selector .menu:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=chart] .mode-selector .menu li {\n  margin: 0;\n  border: 0;\n}\nmain[data-view=chart] .mode-selector .menu li:not(:first-child) {\n  border-left: 1px solid #4d5565;\n}\nmain[data-view=chart] .mode-selector .menu li a {\n  display: block;\n  padding: 8px 16px;\n}\nmain[data-view=chart] .mode-selector .menu .router-link-active {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #008fd6;\n}\nmain[data-view=chart] .basic-periodontal-examination .trigger {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: normal;\n  text-transform: uppercase;\n  font-weight: 700;\n  color: #33a5de;\n}\nmain[data-view=chart] nav.mouth {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 1;\n  right: 24px;\n  overflow: hidden;\n  border: 1px solid #4d5565;\n  border-radius: 4px;\n}\nmain[data-view=chart] nav.mouth li {\n  width: 48px;\n  height: 48px;\n  border-bottom: 1px solid #4d5565;\n  color: #7a8599;\n}\nmain[data-view=chart] nav.mouth li:last-child {\n  border-bottom: 0;\n}\nmain[data-view=chart] nav.mouth svg {\n  display: block;\n  width: auto;\n  padding: 10px;\n}\nmain[data-view=chart] nav.mouth .router-link-exact-active {\n  color: #33a5de;\n}\n.app[data-theme=dark] main[data-view=chart] nav.mouth .router-link-exact-active {\n  color: #fff;\n}\n@media (prefers-color-scheme: dark) {\n  .app[data-theme=auto] main[data-view=chart] nav.mouth .router-link-exact-active {\n    color: #fff;\n  }\n}\nmain[data-view=chart] .jaw-heading {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  position: absolute;\n  width: 100%;\n  margin: -32px 0 0;\n}\n.app[data-theme=dark] main[data-view=chart] .jaw-heading {\n  color: #fff;\n}\n@media (prefers-color-scheme: dark) {\n  .app[data-theme=auto] main[data-view=chart] .jaw-heading {\n    color: #fff;\n  }\n}\nmain[data-view=chart] > div[data-view] {\n  position: relative;\n  margin: auto 0;\n}\nmain[data-view=chart] > div[data-view=full-mouth] {\n  padding: 45px 0;\n}\nmain[data-view=chart] > div[data-view=lower-jaw],\nmain[data-view=chart] > div[data-view=upper-jaw] {\n  padding: 66px 0;\n}\nmain[data-view=chart] .jaw-box {\n  position: relative;\n  width: 118vh;\n  min-width: 774.08px;\n  max-width: 100%;\n  padding: 0 72px;\n  margin: auto;\n}\nmain[data-view=chart] .jaw-box .jaw {\n  display: flex;\n  justify-content: center;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth {\n  position: relative;\n  text-align: center;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .trigger:not([role=\"none\"]) {\n  cursor: pointer;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .trigger[aria-checked=true]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.6 9.5c-.8-.7-.8-1.9-.1-2.7l.1-.1c.8-.7 2.1-.7 2.9 0l2.4 2.4 6.7-6.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L7 13.6c-.6.6-1.6.6-2.2 0L.6 9.5z'/%3E%3C/svg%3E\");\n  overflow: hidden;\n  width: 20px;\n  height: 20px;\n  padding: 3px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  font-size: 10px;\n  line-height: 10px;\n  background: #008fd6;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .visualization {\n  position: relative;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted] {\n  outline: 3px dotted #e13830;\n  border-radius: 20px;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:after,\nmain[data-view=chart] .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='9' cy='9' r='9' fill='%23E13830'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M12.5 6.39V4.74c0-.409-.348-.74-.778-.74H6.278c-.43 0-.778.331-.778.74v1.666c0 .233.116.452.312.593l2.54 1.814-2.54 1.813a.73.73 0 0 0-.312.593v1.666c0 .409.348.74.778.74h5.444c.43 0 .778-.331.778-.74v-1.65a.73.73 0 0 0-.31-.59L9.646 8.812 12.19 6.98a.73.73 0 0 0 .309-.591'/%3E%3C/g%3E%3C/svg%3E\");\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  height: 18px;\n  width: 18px;\n  overflow: hidden;\n  margin-left: -9px;\n  margin-top: -9px;\n  z-index: 3;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:before {\n  top: 0;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:after {\n  top: 100%;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .number {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  color: inherit;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .number[data-treatment-plan-level=urgent] {\n  color: #fff;\n  background: #e13830;\n}\nmain[data-view=chart] .jaw-box .jaw .tooth .number[data-treatment-plan-level=monitor] {\n  color: #202633;\n  background: #ffd00a;\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 41px;\n}\n@media (max-height: 759px) {\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues {\n    width: 31px;\n    border-spacing: 1px 4px;\n  }\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator {\n  width: 11px;\n  height: 11px;\n  border: 1px solid #4d5565;\n  border-radius: 50%;\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active {\n  border-color: currentcolor;\n  background-color: currentcolor;\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=bleeding] {\n  color: #d0021b;\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=plaque] {\n  color: #4a90e2;\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=pus] {\n  color: #f8e71c;\n}\nmain[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=tartar] {\n  color: transparent;\n  border-color: #bcc1cc;\n}\n@media (max-height: 759px) {\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator {\n    width: 9px;\n    height: 9px;\n    border: 1px solid #4d5565;\n    border-radius: 50%;\n  }\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active {\n    border-color: currentcolor;\n    background-color: currentcolor;\n  }\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=bleeding] {\n    color: #d0021b;\n  }\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=plaque] {\n    color: #4a90e2;\n  }\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=pus] {\n    color: #f8e71c;\n  }\n  main[data-view=chart] .jaw-box .jaw .periodontal-issues .indicator.active[data-type=tartar] {\n    color: transparent;\n    border-color: #bcc1cc;\n  }\n}\nmain[data-view=chart] .jaw-box .jaw[data-type=lower] .periodontal-issues[data-projection=lingual],\nmain[data-view=chart] .jaw-box .jaw[data-type=upper] .periodontal-issues[data-projection=buccal] {\n  top: 0;\n  margin-top: 32px;\n  margin-bottom: 24px;\n}\nmain[data-view=chart] .jaw-box .jaw[data-type=lower] .periodontal-issues[data-projection=buccal],\nmain[data-view=chart] .jaw-box .jaw[data-type=upper] .periodontal-issues[data-projection=palatal] {\n  bottom: 0;\n  margin-top: 24px;\n  margin-bottom: 32px;\n}\nmain[data-view=chart] .jaw-box .jaw .endodontic-issues {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 64px;\n}\nmain[data-view=chart] .jaw-box .jaw .endodontic-issues:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 16px;\n  border-left: 1px solid #98a1b3;\n}\nmain[data-view=chart] .jaw-box .jaw .endodontic-issues .issue {\n  width: 24px;\n  height: 24px;\n  margin: auto;\n  overflow: hidden;\n}\nmain[data-view=chart] .jaw-box .jaw .endodontic-issues .issue .text {\n  position: absolute;\n  left: -99999px;\n  top: -99999px;\n}\nmain[data-view=chart] .jaw-box .jaw[data-type=upper] .endodontic-issues {\n  top: 0;\n}\nmain[data-view=chart] .jaw-box .jaw[data-type=upper] .endodontic-issues:before {\n  top: 34px;\n}\nmain[data-view=chart] .jaw-box .jaw[data-type=lower] .endodontic-issues {\n  bottom: 0;\n  padding-top: 40px;\n}\nmain[data-view=chart] .jaw-box .jaw[data-type=lower] .endodontic-issues:before {\n  bottom: 34px;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=upper] .tooth {\n  padding-top: 64px;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=upper] .tooth .trigger[data-erupted=true][aria-checked=true]:after {\n  margin-top: 38%;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=upper] .tooth .trigger[data-erupted=false][aria-checked=true]:after {\n  margin-top: 10px;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=upper] .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:after {\n  display: none;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=lower] .tooth {\n  padding-bottom: 64px;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=lower] .tooth .trigger[data-erupted=true][aria-checked=true]:after {\n  margin-top: -38%;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=lower] .tooth .trigger[data-erupted=false][aria-checked=true]:after {\n  margin-top: -10px;\n}\nmain[data-view=chart] .jaw-box.full-mouth .jaw[data-type=lower] .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:before {\n  display: none;\n}\nmain[data-view=chart] .jaw-box.full-mouth .tooth .number {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\nmain[data-view=chart] .jaw-box.single-jaw .tooth {\n  padding-top: 96px;\n  padding-bottom: 96px;\n}\nmain[data-view=chart] .jaw-box.single-jaw .tooth .number {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend {\n  position: absolute;\n  left: 0;\n  text-align: left;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend[data-row=top] {\n  top: 32px;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend[data-row=bottom] {\n  bottom: 31px;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend p {\n  font-size: 8px;\n  line-height: 14px;\n  letter-spacing: 0.5px;\n  margin: 0;\n  text-transform: uppercase;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend p[data-type=bleeding] {\n  color: #d0021b;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend p[data-type=plaque] {\n  color: #4a90e2;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend p[data-type=pus] {\n  color: #f8e71c;\n}\nmain[data-view=chart] .jaw-box .periodontal-issue-legend p[data-type=tartar] {\n  color: transparent;\n}\nmain[data-view=chart] .legend {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\nmain[data-view=chart] .legend .toggle {\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  border: 2px solid;\n  border-radius: 50%;\n  color: #202633;\n}\nmain[data-view=chart] .legend .toggle svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.app[data-theme=dark] main[data-view=chart] .legend:not(.open) .toggle {\n  color: #7a8599;\n  border-color: #30394c;\n  background: #30394c;\n}\n@media (prefers-color-scheme: dark) {\n  .app[data-theme=auto] main[data-view=chart] .legend:not(.open) .toggle {\n    color: #7a8599;\n    border-color: #30394c;\n    background: #30394c;\n  }\n}\nmain[data-view=chart] .legend .toggle {\n  right: 24px;\n  bottom: 12px;\n}\nmain[data-view=chart] .legend .panel {\n  overflow: auto;\n  width: 272px;\n  height: 100%;\n  padding: 24px;\n  border-left: 1px solid #98a1b3;\n  background: #fff;\n  text-align: left;\n  box-shadow: -3px 0 6px 0 rgba(0, 0, 0, 0.08);\n}\nmain[data-view=chart] .legend .panel .legend-list {\n  margin-bottom: 40px;\n}\nmain[data-view=chart] .legend .panel .legend-list .group {\n  margin-bottom: 32px;\n}\nmain[data-view=chart] .legend .panel .legend-list .group:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=chart] .legend .panel .legend-list .group .heading,\nmain[data-view=chart] .legend .panel .legend-list .group li {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  line-height: 24px;\n}\nmain[data-view=chart] .legend .panel .legend-list .group .heading {\n  color: #202633;\n}\nmain[data-view=chart] .legend .panel .legend-list .group li {\n  display: flex;\n  padding-left: 40px;\n  margin: 16px 0;\n  font-weight: 600;\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name]:before {\n  content: \"\";\n  flex: none;\n  width: 24px;\n  height: 24px;\n  margin-left: -40px;\n  margin-right: 16px;\n  vertical-align: middle;\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=depth]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.51 6.49c-2.09 0-3.29 2.82-4.57 5.81-1.28 3-2.72 6.36-5.52 7.13h18.57v-4.32c-2.24-.81-3.37-2.97-4.32-4.78-1.25-2.38-2.12-3.84-4.16-3.84' fill='%239ad4f2'/%3E%3Cpath d='M15.51 4.49c-3.41 0-4.93 3.57-6.41 7.02-1.34 3.13-2.6 6.08-4.93 6.08-2.45 0-3.31.82-3.62 1.84h4.87c2.8-.77 4.24-4.13 5.52-7.13 1.28-2.99 2.48-5.81 4.57-5.81 2.04 0 2.91 1.46 4.16 3.84.95 1.81 2.09 3.97 4.32 4.78v-2.22c-.99-.65-1.7-1.87-2.55-3.49-1.21-2.3-2.58-4.91-5.93-4.91' fill='%2337a5dd'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=margin]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.6 2.4c-3.1 0-4.6 1.6-5.9 3-1.4 1.5-2.6 2.9-6 2.9-4.2-.1-5.5 3.7-6.7 7-.3 1-.7 1.8-1 2.6v3.8c1.4-1.6 2.2-3.8 2.9-5.7 1.3-3.6 2.2-5.7 4.8-5.7 4.3 0 6.1-1.9 7.5-3.5 1.2-1.3 2.1-2.3 4.4-2.3 2.1 0 3.2 1 4.4 2.2V3.8c-1.1-.8-2.5-1.4-4.4-1.4' fill='%23e13b30'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=furcation1]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m3.989 2.954-2.51 5.02h-1.49L3.982-.044l.007.013.006-.013L7.99 7.974H6.5l-2.51-5.02z'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=furcation2]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8H0l4-8 4 8zM2.3 6.6h3.5L4 3.1 2.3 6.6z'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=furcation3]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4 0 4 8H0z'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=mobility1]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071zM19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=mobility2]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071z'/%3E%3Cpath d='M6.874.498a.571.571 0 0 1 .863.743l-.06.07-3.063 3.021 3.063 3.023c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.07-.06L3.398 4.74a.57.57 0 0 1-.061-.742l.061-.071zm9.208 7.671a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.022-3.064-3.022a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.071.06 3.475 3.429a.57.57 0 0 1 .061.742l-.06.071z'/%3E%3Cpath d='M19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=mobility3]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071z'/%3E%3Cpath d='M6.874.498a.571.571 0 0 1 .863.743l-.06.07-3.063 3.021 3.063 3.023c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.07-.06L3.398 4.74a.57.57 0 0 1-.061-.742l.061-.071z'/%3E%3Cpath d='M9.77.498a.571.571 0 0 1 .863.743l-.06.07-3.064 3.022 3.064 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.071-.06L6.295 4.74a.57.57 0 0 1-.061-.742l.06-.071zm3.416 7.671a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .736-.065l.071.06 3.475 3.429a.57.57 0 0 1 .062.742l-.062.071z'/%3E%3Cpath d='M16.082 8.169a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.022-3.064-3.022a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.071.06 3.475 3.429a.57.57 0 0 1 .061.742l-.06.071z'/%3E%3Cpath d='M19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=monitor]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z' fill='%23ffd00a'/%3E%3Cpath d='m12.6 16.3.5-2.4h-1.9l-.5 2.4h-.9l.5-2.4H8.9l.2-.8h1.4l.4-2.1H9.5l.2-.8h1.4l.5-2.3h.8l-.5 2.3h1.9l.5-2.3h.8l-.5 2.3h1.5l-.1.8h-1.5l-.4 2.1h1.5l-.2.8h-1.5l-.5 2.4h-.8zm-1.3-3.2h1.9l.4-2.2h-1.9l-.4 2.2z' fill='%23202633'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=treatment]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z' fill='%23e13830'/%3E%3Cpath d='m12.6 16.3.5-2.4h-1.9l-.5 2.4h-.9l.5-2.4H8.9l.2-.8h1.4l.4-2.1H9.5l.2-.8h1.4l.5-2.3h.8l-.5 2.3h1.9l.5-2.3h.8l-.5 2.3h1.5l-.1.8h-1.5l-.4 2.1h1.5l-.2.8h-1.5l-.5 2.4h-.8zm-1.3-3.2h1.9l.4-2.2h-1.9l-.4 2.2z' fill='%23fff'/%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name=extract]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23E13830'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M16.667 8.52v-2.2c0-.545-.465-.987-1.037-.987H8.37c-.572 0-1.037.442-1.037.988v2.22a.976.976 0 0 0 .416.79l3.387 2.419-3.388 2.419a.98.98 0 0 0-.415.79v2.22c0 .546.465.988 1.037.988h7.26c.572 0 1.037-.442 1.037-.988v-2.198a.97.97 0 0 0-.413-.788L12.86 11.75l3.395-2.443a.98.98 0 0 0 .413-.788'/%3E%3C/g%3E%3C/svg%3E\");\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name^=furcation]:before {\n  padding: 1px 5px 9px;\n}\nmain[data-view=chart] .legend .panel .legend-list .group li[data-name^=mobility]:before {\n  width: 32px;\n  margin-left: -44px;\n  margin-right: 12px;\n}\nmain[data-view=chart] .legend.open {\n  z-index: 5;\n}\nmain[data-view=chart] .rollback {\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\nmain[data-view=chart] .rollback .toggle {\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  border: 2px solid;\n  border-radius: 50%;\n  color: #202633;\n}\nmain[data-view=chart] .rollback .toggle svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.app[data-theme=dark] main[data-view=chart] .rollback:not(.open) .toggle {\n  color: #7a8599;\n  border-color: #30394c;\n  background: #30394c;\n}\n@media (prefers-color-scheme: dark) {\n  .app[data-theme=auto] main[data-view=chart] .rollback:not(.open) .toggle {\n    color: #7a8599;\n    border-color: #30394c;\n    background: #30394c;\n  }\n}\nmain[data-view=chart] .rollback .toggle {\n  left: 24px;\n  bottom: 12px;\n}\nmain[data-view=chart] .rollback.open {\n  z-index: 3;\n}\nmain[data-view=chart] .rollback .panel {\n  border-top: 1px solid #e6e7eb;\n  background: #fff;\n  height: 72px;\n  padding: 8px;\n}\nmain[data-view=chart] .rollback .panel .button {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol;\n}\nmain[data-view=chart] .rollback .panel .button,\nmain[data-view=chart] .rollback .panel .field {\n  vertical-align: middle;\n}\nmain[data-view=chart] .rollback .panel .field {\n  display: inline-block;\n  margin: 0 16px;\n}\nmain[data-view=chart][data-mode=pathology].has-selected-tooth .tooth:not(.selected),\nmain[data-view=chart][data-mode=periodontal-probing].has-selected-tooth .tooth:not(.selected),\nmain[data-view=chart][data-mode=restoration].has-selected-tooth .tooth:not(.selected) {\n  opacity: 0.3;\n}\nmain[data-view=chart] > div[data-view=pathology],\nmain[data-view=chart] > div[data-view=periodontal-probing],\nmain[data-view=chart] > div[data-view=restoration] {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: left, transform;\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 24px 16px 0;\n  width: 35%;\n  min-width: 336px;\n  max-width: 400px;\n  background: #fff;\n}\n@media (prefers-reduced-motion: reduce) {\n  main[data-view=chart] > div[data-view=pathology],\n  main[data-view=chart] > div[data-view=periodontal-probing],\n  main[data-view=chart] > div[data-view=restoration] {\n    transition: none;\n  }\n}\nmain[data-view=chart] > div[data-view=pathology][data-quadrant=\"1\"],\nmain[data-view=chart] > div[data-view=pathology][data-quadrant=\"4\"],\nmain[data-view=chart] > div[data-view=periodontal-probing][data-quadrant=\"1\"],\nmain[data-view=chart] > div[data-view=periodontal-probing][data-quadrant=\"4\"],\nmain[data-view=chart] > div[data-view=restoration][data-quadrant=\"1\"],\nmain[data-view=chart] > div[data-view=restoration][data-quadrant=\"4\"] {\n  left: 100%;\n  transform: translateX(-100%);\n  box-shadow: -3px 0 6px 0 rgba(0, 0, 0, 0.08);\n}\nmain[data-view=chart] > div[data-view=pathology][data-quadrant=\"2\"],\nmain[data-view=chart] > div[data-view=pathology][data-quadrant=\"3\"],\nmain[data-view=chart] > div[data-view=periodontal-probing][data-quadrant=\"2\"],\nmain[data-view=chart] > div[data-view=periodontal-probing][data-quadrant=\"3\"],\nmain[data-view=chart] > div[data-view=restoration][data-quadrant=\"2\"],\nmain[data-view=chart] > div[data-view=restoration][data-quadrant=\"3\"] {\n  box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.08);\n}\nmain[data-view=chart] > div[data-view=pathology] > .heading,\nmain[data-view=chart] > div[data-view=periodontal-probing] > .heading,\nmain[data-view=chart] > div[data-view=restoration] > .heading {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  padding: 0 88px;\n  margin-bottom: 24px;\n  font-weight: 600;\n}\nmain[data-view=chart] > div[data-view=pathology] nav.teeth,\nmain[data-view=chart] > div[data-view=periodontal-probing] nav.teeth,\nmain[data-view=chart] > div[data-view=restoration] nav.teeth {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  margin: 12px;\n}\nmain[data-view=chart] > div[data-view=pathology] nav.teeth a,\nmain[data-view=chart] > div[data-view=periodontal-probing] nav.teeth a,\nmain[data-view=chart] > div[data-view=restoration] nav.teeth a {\n  display: block;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n}\nmain[data-view=chart] > div[data-view=pathology] nav.teeth a:before,\nmain[data-view=chart] > div[data-view=periodontal-probing] nav.teeth a:before,\nmain[data-view=chart] > div[data-view=restoration] nav.teeth a:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.9 11.5c-.4-.4-.5-1.1 0-1.6L6.7 6 2.9 2c-.5-.5-.4-1.2 0-1.6.5-.4 1.2-.4 1.7.1.4.4 4.5 4.7 4.5 4.7.4.4.4 1.1 0 1.6 0 0-4.1 4.3-4.5 4.7-.5.5-1.2.5-1.7 0z'/%3E%3C/svg%3E\");\n  display: block;\n  height: 100%;\n  padding: 14px;\n  line-height: 12px;\n}\nmain[data-view=chart] > div[data-view=pathology] nav.teeth a.previous:before,\nmain[data-view=chart] > div[data-view=periodontal-probing] nav.teeth a.previous:before,\nmain[data-view=chart] > div[data-view=restoration] nav.teeth a.previous:before {\n  transform: scaleX(-1);\n}\nmain[data-view=chart] > div[data-view=pathology] a.close,\nmain[data-view=chart] > div[data-view=periodontal-probing] a.close,\nmain[data-view=chart] > div[data-view=restoration] a.close {\n  margin: 11px;\n}\n@media (max-height: 742px) {\n  main[data-view=chart] > div[data-view=pathology],\n  main[data-view=chart] > div[data-view=periodontal-probing],\n  main[data-view=chart] > div[data-view=restoration] {\n    padding-top: 16px;\n  }\n  main[data-view=chart] > div[data-view=pathology] > .heading,\n  main[data-view=chart] > div[data-view=periodontal-probing] > .heading,\n  main[data-view=chart] > div[data-view=restoration] > .heading {\n    margin-bottom: 16px;\n  }\n  main[data-view=chart] > div[data-view=pathology] nav.teeth,\n  main[data-view=chart] > div[data-view=periodontal-probing] nav.teeth,\n  main[data-view=chart] > div[data-view=restoration] nav.teeth {\n    margin-top: 4px;\n  }\n  main[data-view=chart] > div[data-view=pathology] a.close,\n  main[data-view=chart] > div[data-view=periodontal-probing] a.close,\n  main[data-view=chart] > div[data-view=restoration] a.close {\n    margin-top: 3px;\n  }\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] button.audio {\n  margin: 11px;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .zones {\n  margin-bottom: 20px;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurement-selector {\n  z-index: 1;\n  display: flex;\n  border: solid #e6e7eb;\n  border-width: 1px 0 0 1px;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurement-selector .measurement {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  flex: 0 0 50%;\n  border-right: 1px solid #e6e7eb;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurement-selector .measurement label {\n  display: block;\n  height: 100%;\n  padding: 16px;\n  cursor: pointer;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurement-selector .measurement input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurement-selector .measurement input:checked + label {\n  color: #008fd6;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurement-selector .measurement input:focus.focus-visible + label {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurements {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .measurements .selector {\n  padding: 0;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .selector.issue {\n  margin-bottom: 0;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .selector.issue .options {\n  grid-template-columns: repeat(3, 1fr);\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .selector.issue .option[data-name=bleeding] {\n  grid-column: 1/-1;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .actions {\n  padding-bottom: 16px;\n}\nmain[data-view=chart] > div[data-view=periodontal-probing] .actions .button {\n  width: 100%;\n}\n@media (max-height: 742px) {\n  main[data-view=chart] > div[data-view=periodontal-probing] button.audio {\n    margin-top: 3px;\n  }\n  main[data-view=chart] > div[data-view=periodontal-probing] .zones {\n    margin-bottom: 12px;\n  }\n  main[data-view=chart] > div[data-view=periodontal-probing] .measurements {\n    margin-bottom: 16px;\n  }\n  main[data-view=chart] > div[data-view=periodontal-probing] .actions {\n    padding-top: 16px;\n  }\n}\nmain[data-view=chart] > div[data-view=pathology],\nmain[data-view=chart] > div[data-view=restoration] {\n  display: flex;\n  flex-direction: column;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard,\nmain[data-view=chart] > div[data-view=restoration] .wizard {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step {\n  display: block;\n  margin: 0;\n  padding: 0;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step > .header,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step > .header {\n  display: block;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step > .header button,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step > .header button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: block;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100%;\n  text-overflow: ellipsis;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step > .header .label,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step > .header .label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-right: 8px;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step > .header .value,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step > .header .value {\n  color: #008fd6;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=detail] .options .option label,\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=type] a,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=detail] .options .option label,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=type] a {\n  margin-bottom: 16px;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #f2f4f7;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  main[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=detail] .options .option label,\n  main[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=type] a,\n  main[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=detail] .options .option label,\n  main[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=type] a {\n    transition: none;\n  }\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=detail] .options .option label:focus.focus-visible,\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=type] a:focus.focus-visible,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=detail] .options .option label:focus.focus-visible,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=type] a:focus.focus-visible {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=detail] .options .option input:checked + label,\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=type] a.router-link-exact-active,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=detail] .options .option input:checked + label,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=type] a.router-link-exact-active {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=detail] .option,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=detail] .option {\n  display: block;\n  position: relative;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=detail] .option input,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=detail] .option input {\n  position: absolute;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=zones] .zones,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=zones] .zones {\n  width: 100%;\n  max-width: none;\n  height: 464px;\n  padding: 0;\n  box-shadow: none;\n  grid-template-rows: repeat(1, 1fr) repeat(3, 1.3fr) repeat(1, 1fr) repeat(2, 1.3fr);\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=zones] .close,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=zones] .close {\n  margin: 16px 0;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .step[data-type=zones] .close .button,\nmain[data-view=chart] > div[data-view=restoration] .wizard .step[data-type=zones] .close .button {\n  width: 100%;\n}\nmain[data-view=chart] > div[data-view=pathology] .wizard .actions,\nmain[data-view=chart] > div[data-view=restoration] .wizard .actions {\n  margin-top: auto;\n}\nmain[data-view=chart] .quickselect.panel {\n  position: absolute;\n  z-index: 5;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 48px;\n  border-top: 1px solid #e6e7eb;\n  background: #fff;\n}\nmain[data-view=chart] .quickselect.panel > .actions {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nmain[data-view=chart] .quickselect.panel > .actions .action {\n  margin: 0 16px;\n}\nmain[data-view=chart] .quickselect.panel > .actions .action button {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  color: #008fd6;\n  padding: 8px 0;\n}\nmain[data-view=chart] .quickselect.panel > .actions .action button:active {\n  color: #0075b0;\n}\nmain[data-view=chart] .quickselect.panel > .actions .action button:disabled {\n  pointer-events: none;\n  cursor: default;\n  color: #7a8599;\n}\nmain[data-view=chart] .quickselect.panel .details {\n  position: fixed;\n  z-index: 200;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 24px 16px 0;\n  width: 35%;\n  min-width: 336px;\n  max-width: 400px;\n  background: #fff;\n  box-shadow: -3px 0 6px 0 rgba(0, 0, 0, 0.08);\n}\nmain[data-view=chart] .quickselect.panel .details button.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n  margin: 11px;\n}\nmain[data-view=chart] .quickselect.panel .details button.clear {\n  width: 100%;\n  margin-top: 16px;\n}\nmain[data-view=chart] .quickselect.panel .details .options {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(1, 1fr);\n  margin-top: 32px;\n}\nmain[data-view=chart] .quickselect.panel .details .options label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #f2f4f7;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  main[data-view=chart] .quickselect.panel .details .options label {\n    transition: none;\n  }\n}\nmain[data-view=chart] .quickselect.panel .details .options input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\nmain[data-view=chart] .quickselect.panel .details .options input:checked + label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\nmain[data-view=chart] .quickselect.panel .details .options input:focus.focus-visible + label {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nmain[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(5, 1fr);\n}\nmain[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #f2f4f7;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  main[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] label {\n    transition: none;\n  }\n}\nmain[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\nmain[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] input:checked + label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\nmain[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] input:focus.focus-visible + label {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nmain[data-view=chart] .quickselect.panel .details .options[data-endo-test=electricity] .clear {\n  grid-column: 1 / span 5;\n}\nmain[data-view=chart] .quickselect.panel .details .actions {\n  padding-top: 32px;\n  padding-bottom: 16px;\n  margin-top: auto;\n}\nmain[data-view=chart] .quickselect.panel .details .actions .button {\n  width: 100%;\n}\n@media (max-height: 742px) {\n  main[data-view=chart] .quickselect.panel .details {\n    padding-top: 16px;\n  }\n  main[data-view=chart] .quickselect.panel .details button.close {\n    margin-top: 3px;\n  }\n  main[data-view=chart] .quickselect.panel .details .actions {\n    padding-top: 16px;\n  }\n}\n.basic-periodontal-examination .sextants {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -4px;\n}\n.basic-periodontal-examination .dialog {\n  text-align: left;\n  color: #7a8599;\n}\n.basic-periodontal-examination .dialog .sextants {\n  margin-bottom: 16px;\n}\n.basic-periodontal-examination .sextant {\n  flex: 0 0 33.33%;\n  min-height: 96px;\n  padding: 4px;\n  color: #7a8599;\n  text-align: center;\n}\n.basic-periodontal-examination .sextant button {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: color, box-shadow;\n  color: inherit;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  padding: 8px;\n  border-radius: 6px;\n  box-shadow: inset 0 0 0 1px #e6e7eb;\n}\n@media (prefers-reduced-motion: reduce) {\n  .basic-periodontal-examination .sextant button {\n    transition: none;\n  }\n}\n.basic-periodontal-examination .sextant .label {\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: normal;\n  order: 1;\n  margin-bottom: 0;\n  font-weight: 600;\n  width: 100%;\n}\n.basic-periodontal-examination .sextant .level {\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: normal;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: color, border-color;\n  border-bottom: 1px solid #d0d3d9;\n  padding-bottom: 12px;\n  margin-bottom: 2px;\n  font-weight: 300;\n  color: #4d5565;\n  width: 100%;\n}\n@media (prefers-reduced-motion: reduce) {\n  .basic-periodontal-examination .sextant .level {\n    transition: none;\n  }\n}\n.basic-periodontal-examination .sextant .furcation {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: color;\n  width: 28px;\n  height: 18px;\n  border: 1px solid;\n  border-radius: 9px;\n  margin: -12px auto 5px;\n  color: #7a8599;\n  background: #fff;\n  font-weight: 700;\n}\n@media (prefers-reduced-motion: reduce) {\n  .basic-periodontal-examination .sextant .furcation {\n    transition: none;\n  }\n}\n.basic-periodontal-examination .sextant[data-level=\"0\"] .furcation,\n.basic-periodontal-examination .sextant[data-level=\"0\"] .level,\n.basic-periodontal-examination .sextant[data-level=\"1\"] .furcation,\n.basic-periodontal-examination .sextant[data-level=\"1\"] .level {\n  color: #a3d554;\n}\n.basic-periodontal-examination .sextant[data-level=\"2\"] .furcation,\n.basic-periodontal-examination .sextant[data-level=\"2\"] .level,\n.basic-periodontal-examination .sextant[data-level=\"3\"] .furcation,\n.basic-periodontal-examination .sextant[data-level=\"3\"] .level {\n  color: #ffd00a;\n}\n.basic-periodontal-examination .sextant[data-level=\"4\"] .furcation,\n.basic-periodontal-examination .sextant[data-level=\"4\"] .level {\n  color: #e13830;\n}\n.basic-periodontal-examination .sextant .furcation.blank,\n.basic-periodontal-examination .sextant .level.blank {\n  color: #d0d3d9;\n  font-weight: 400;\n}\n.basic-periodontal-examination .sextant button.selected {\n  box-shadow: inset 0 0 0 2px #98a1b3;\n}\n.basic-periodontal-examination .rollback-date-note,\n.basic-periodontal-examination .rollback-editing-note {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  text-align: center;\n  margin-top: 8px;\n}\n.basic-periodontal-examination fieldset[data-name=score] legend {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector {\n  display: flex;\n  height: 56px;\n  margin: 0 -3px 16px;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector label {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 21px;\n  line-height: 24px;\n  letter-spacing: 0.13px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1 1;\n  border-radius: 4px;\n  margin: 0 3px;\n  background: #f2f4f7;\n  cursor: pointer;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector[data-level=\"0\"] label.level:nth-child(-n + 1),\n.basic-periodontal-examination fieldset[data-name=score] .score-selector[data-level=\"1\"] label.level:nth-child(-n + 2) {\n  color: #fff;\n  background: #a3d554;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector[data-level=\"2\"] label.level:nth-child(-n + 3),\n.basic-periodontal-examination fieldset[data-name=score] .score-selector[data-level=\"3\"] label.level:nth-child(-n + 4) {\n  color: #fff;\n  background: #ffd00a;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector[data-level=\"4\"] label.level:nth-child(-n + 5) {\n  color: #fff;\n  background: #e13830;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector[data-furcation=true] label.furcation {\n  color: #fff;\n  background: #7a8599;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector input + span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.basic-periodontal-examination fieldset[data-name=score] .score-selector input:focus.focus-visible + span {\n  outline: thin dotted #4d5565;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nmain[data-view=dashboard] {\n  display: flex;\n  min-width: 0;\n}\nmain[data-view=dashboard] .content.primary {\n  flex-grow: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 32px 40px;\n}\nmain[data-view=dashboard] .content.secondary {\n  display: grid;\n  grid-template-rows: minmax(auto, max-content) max-content minmax(auto, max-content);\n  flex: none;\n  width: 328px;\n  border-left: 1px solid #e6e7eb;\n}\nmain[data-view=dashboard] .content.secondary aside {\n  padding: 16px 24px;\n  border-bottom: 1px solid #e6e7eb;\n}\nmain[data-view=dashboard] .content.secondary aside:last-child {\n  border-bottom: 0;\n}\nmain[data-view=dashboard] .content.secondary aside > header {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\nmain[data-view=dashboard] .content.secondary aside > header .heading {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 21px;\n  line-height: 24px;\n  letter-spacing: 0.13px;\n  flex-grow: 1;\n}\nmain[data-view=dashboard] .content.secondary aside > header .button.edit {\n  flex: none;\n  padding: 0;\n  margin-left: 24px;\n  text-align: right;\n}\nmain[data-view=dashboard] .header {\n  display: flex;\n  margin-bottom: 16px;\n}\nmain[data-view=dashboard] .header .text {\n  margin-right: 32px;\n}\nmain[data-view=dashboard] .header .name {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] .header .actions {\n  margin-left: auto;\n}\nmain[data-view=dashboard] nav.dashboard {\n  border-bottom: 1px solid #e6e7eb;\n  margin-bottom: 24px;\n}\nmain[data-view=dashboard] nav.dashboard ul {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -16px;\n  margin-right: -16px;\n}\nmain[data-view=dashboard] nav.dashboard ul li {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  position: relative;\n  padding: 0 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\nmain[data-view=dashboard] nav.dashboard ul li:after {\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property: left, right;\n  content: \"\";\n  position: absolute;\n  left: calc(100% + 16px);\n  right: -16px;\n  bottom: 0;\n  height: 3px;\n  background: #008fd6;\n}\n@media (prefers-reduced-motion: reduce) {\n  main[data-view=dashboard] nav.dashboard ul li:after {\n    transition: none;\n  }\n}\nmain[data-view=dashboard] nav.dashboard ul a {\n  color: #008fd6;\n  display: block;\n  padding: 24px 0;\n}\nmain[data-view=dashboard] nav.dashboard ul a:active {\n  color: #0075b0;\n}\nmain[data-view=dashboard] nav.dashboard ul .router-link-exact-active:after {\n  left: 16px;\n  right: 16px;\n}\nmain[data-view=dashboard] nav.dashboard ul .router-link-exact-active ~ li:after {\n  left: -16px;\n  right: calc(100% + 16px);\n}\nmain[data-view=dashboard] ul.records {\n  position: relative;\n  overflow: auto;\n}\nmain[data-view=dashboard] ul.records li {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  display: flex;\n  padding: 11px 18px;\n  border: 1px solid #e6e7eb;\n  margin-bottom: 8px;\n  color: #4d5565;\n  background: #f2f4f7;\n}\nmain[data-view=dashboard] ul.records li:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] ul.records li[data-type]:before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  width: 4px;\n}\nmain[data-view=dashboard] ul.records li > a {\n  position: relative;\n  flex: 1;\n  margin: -12px -19px;\n  padding: 12px 19px;\n}\nmain[data-view=dashboard] ul.records li[data-type=urgent]:before {\n  background-color: #e13830;\n}\nmain[data-view=dashboard] ul.records li[data-type=monitor]:before {\n  background-color: #ffd00a;\n}\nmain[data-view=dashboard] ul.records p {\n  margin: 0;\n}\nmain[data-view=dashboard] ul.records .text {\n  margin-right: auto;\n  color: #7a8599;\n}\nmain[data-view=dashboard] ul.records .date {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-left: 32px;\n  line-height: 24px;\n  white-space: nowrap;\n}\nmain[data-view=dashboard] ul.records .actions {\n  margin-left: 16px;\n}\nmain[data-view=dashboard] ul.records .delete {\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 50%;\n  background: linear-gradient(#fff 2px, hsla(0, 0%, 100%, 0) 0) 50%/10px 2px no-repeat, #e13830 content-box;\n  text-indent: 40px;\n}\nmain[data-view=dashboard] ul.records .done {\n  height: 24px;\n  padding: 0 12px;\n  border: 1px solid #e6e7eb;\n  border-radius: 6px;\n  margin-right: 16px;\n  color: inherit;\n  background: #fff;\n}\nmain[data-view=dashboard] .basic-periodontal-examination,\nmain[data-view=dashboard] .medical-issues,\nmain[data-view=dashboard] .oral-health {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\nmain[data-view=dashboard] .oral-health dl.issues {\n  overflow: auto;\n  margin: 0;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue[data-value] dd {\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  flex: none;\n  width: 100%;\n  height: 8px;\n  border-radius: 4px;\n  margin-top: 4px;\n  background: #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue[data-value=\"1\"] dd {\n  background:\n    linear-gradient(90deg, #fff 1px, hsla(0, 0%, 100%, 0) 0) -1px/20.1%,\n    linear-gradient(90deg, #a3d554, #a3d554) 0/20% 100% no-repeat,\n    #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue[data-value=\"2\"] dd {\n  background:\n    linear-gradient(90deg, #fff 1px, hsla(0, 0%, 100%, 0) 0) -1px/20.1%,\n    linear-gradient(90deg, #a3d554, #a3d554) 0/40% 100% no-repeat,\n    #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue[data-value=\"3\"] dd {\n  background:\n    linear-gradient(90deg, #fff 1px, hsla(0, 0%, 100%, 0) 0) -1px/20.1%,\n    linear-gradient(90deg, #12cbcb, #12cbcb) 0/60% 100% no-repeat,\n    #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue[data-value=\"4\"] dd {\n  background:\n    linear-gradient(90deg, #fff 1px, hsla(0, 0%, 100%, 0) 0) -1px/20.1%,\n    linear-gradient(90deg, #ffd00a, #ffd00a) 0/80% 100% no-repeat,\n    #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues .issue[data-value=\"5\"] dd {\n  background:\n    linear-gradient(90deg, #fff 1px, hsla(0, 0%, 100%, 0) 0) -1px/20.1%,\n    linear-gradient(90deg, #e13830, #e13830) 0/100% 100% no-repeat,\n    #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues dd,\nmain[data-view=dashboard] .oral-health dl.issues dt {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin: 0;\n}\nmain[data-view=dashboard] .oral-health dl.issues dd.visual {\n  flex: none;\n  width: 100%;\n  margin-top: 4px;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 8px;\n  border-radius: 4px;\n  background: #e6e7eb;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter::-webkit-meter-bar {\n  background: none;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter::-webkit-meter-optimum-value {\n  background: #a3d554;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter::-webkit-meter-suboptimum-value {\n  background: #ffd00a;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter::-webkit-meter-even-less-good-value {\n  background: #e13830;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter:-moz-meter-optimum::-moz-meter-bar {\n  background: #a3d554;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter:-moz-meter-sub-optimum::-moz-meter-bar {\n  background: #ffd00a;\n}\nmain[data-view=dashboard] .oral-health dl.issues meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {\n  background: #e13830;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue {\n  position: relative;\n  margin-bottom: 20px;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue legend {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue .level-selector {\n  display: flex;\n  height: 56px;\n  margin: 0 -3px;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue .level-selector[data-value=\"1\"] label:nth-child(-n + 1),\nmain[data-view=dashboard] .oral-health fieldset.issue .level-selector[data-value=\"2\"] label:nth-child(-n + 2) {\n  color: #fff;\n  background: #a3d554;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue .level-selector[data-value=\"3\"] label:nth-child(-n + 3) {\n  color: #fff;\n  background: #12cbcb;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue .level-selector[data-value=\"4\"] label:nth-child(-n + 4) {\n  color: #fff;\n  background: #ffd00a;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue .level-selector[data-value=\"5\"] label:nth-child(-n + 5) {\n  color: #fff;\n  background: #e13830;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue label {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 21px;\n  line-height: 24px;\n  letter-spacing: 0.13px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  flex: 1 1;\n  border-radius: 4px;\n  margin: 0 3px;\n  background: #f2f4f7;\n  cursor: pointer;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue input + span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue input:focus.focus-visible + span {\n  outline: thin dotted #4d5565;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nmain[data-view=dashboard] .oral-health fieldset.issue .delete {\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 50%;\n  background: linear-gradient(#fff 2px, hsla(0, 0%, 100%, 0) 0) 50%/10px 2px no-repeat, #e13830 content-box;\n  text-indent: 40px;\n  position: absolute;\n  bottom: 16px;\n  right: -36px;\n}\nmain[data-view=dashboard] .oral-health .dialog .actions,\nmain[data-view=dashboard] .oral-health .dialog .tools {\n  margin-top: 32px;\n}\nmain[data-view=dashboard] .medical-issues > .issues {\n  margin-top: -8px;\n  overflow: auto;\n}\nmain[data-view=dashboard] .medical-issues > .issues .issue {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  position: relative;\n  padding-left: 40px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  margin-bottom: 0;\n  background: 0 0/24px 24px no-repeat;\n}\nmain[data-view=dashboard] .medical-issues > .issues .issue:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] .medical-issues .dialog {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\nmain[data-view=dashboard] .medical-issues .dialog > .title {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] .medical-issues .dialog fieldset {\n  overflow: auto;\n  height: 50vh;\n}\nmain[data-view=dashboard] .medical-issues .dialog .issue {\n  position: relative;\n  background: right 24px top 16px/24px 24px no-repeat;\n}\nmain[data-view=dashboard] .medical-issues .dialog .issue:after {\n  content: \"\";\n  position: absolute;\n  left: 62px;\n  right: 0;\n  bottom: 0;\n  border-bottom: 1px solid #e6e7eb;\n}\nmain[data-view=dashboard] .medical-issues .dialog .issue:last-child:after {\n  content: none;\n}\nmain[data-view=dashboard] .medical-issues .dialog .field .control.checkbox label {\n  display: block;\n  padding-left: 62px;\n  padding-right: 64px;\n}\nmain[data-view=dashboard] .medical-issues .dialog .actions {\n  padding: 32px 80px 64px;\n  border-top: 1px solid #e6e7eb;\n  margin-top: 0;\n}\nmain[data-view=dashboard] div[data-view] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1;\n}\nmain[data-view=dashboard] div[data-view=history] > .actions {\n  margin-bottom: 24px;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] {\n  margin-bottom: -16px;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] .rollback-notes {\n  margin-bottom: 32px;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] .rollback-notes .rollback-date-note,\nmain[data-view=dashboard] div[data-view=soft-tissue] .rollback-notes .rollback-editing-note {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n  margin-top: 8px;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] form {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] form .content {\n  flex: 1;\n  overflow: auto;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] form .content .zone {\n  margin-bottom: 24px;\n  margin-right: 32px;\n  max-width: 720px;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] form .actions {\n  height: 64px;\n  border-top: 1px solid #e6e7eb;\n  display: flex;\n  align-items: flex-end;\n}\nmain[data-view=dashboard] div[data-view=soft-tissue] form .actions .save.button {\n  min-width: 160px;\n  margin-right: 48px;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] {\n  flex: none;\n  position: fixed;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .warning {\n  position: fixed;\n  bottom: 24px;\n  left: 88px;\n  right: 24px;\n  min-height: 72px;\n  background: #fff;\n  border: 1px solid #e13830;\n  border-radius: 4px;\n  border-left-width: 4px;\n  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);\n  color: #e13830;\n  display: flex;\n  justify-content: space-between;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .warning p {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 32px;\n  padding-left: 32px;\n  position: relative;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .warning p:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .warning p:before {\n  display: block;\n  width: 22px;\n  height: 19px;\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23e13830' viewBox='0 0 22 19' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 19h22L11 0 0 19zm12-3h-2v-2h2v2zm0-4h-2V8h2v4z'/%3E%3C/svg%3E\");\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-9.5px);\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .warning .button {\n  border-radius: 0;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay {\n  position: fixed;\n  z-index: 200;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog {\n  position: relative;\n  width: auto;\n  min-height: calc(100vh - 64px);\n  padding: 0;\n  margin: 32px;\n  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 4px;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  text-align: center;\n  flex: 0 0 64px;\n  margin: 0;\n  background: #f2f4f7;\n  border-bottom: 1px solid #e6e7eb;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog header:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content {\n  flex: 1 1 auto;\n  overflow-y: auto;\n  padding: 16px;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content h1,\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content h2 {\n  margin-bottom: 32px;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content h3,\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content p {\n  margin-bottom: 16px;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content,\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .content p {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: normal;\n}\nmain[data-view=dashboard] [data-view=data-processing-agreement] .overlay .dialog .actions {\n  display: block;\n  margin: 0;\n  text-align: center;\n  flex: 0 0 48px;\n  padding: 16px;\n}\nmain[data-view=tooth] {\n  display: flex;\n}\nmain[data-view=tooth] .tooth-wheel {\n  position: relative;\n  z-index: 100;\n  flex: none;\n  display: flex;\n  overflow: hidden;\n  min-width: 176.66448px;\n  max-width: 20.833%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\nmain[data-view=tooth] .tooth-wheel .navigation {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #2e333c;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: none;\n  width: 40px;\n  padding: 16px 0;\n  color: #7a8599;\n  text-align: center;\n}\nmain[data-view=tooth] .tooth-wheel .navigation li {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  flex: 1 1;\n  max-height: 32px;\n}\nmain[data-view=tooth] .tooth-wheel .navigation a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nmain[data-view=tooth] .tooth-wheel .navigation .router-link-active {\n  color: #fff;\n  position: relative;\n}\nmain[data-view=tooth] .tooth-wheel .navigation .router-link-active:before {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  content: \"\";\n  left: 0;\n  border: 6px solid;\n  border-color: transparent transparent transparent #008fd6;\n  pointer-events: none;\n}\nmain[data-view=tooth] .tooth-wheel .viewport {\n  overflow: hidden;\n  width: 20.833vh;\n  min-width: 136.66448px;\n  max-width: 320px;\n  border-right: 1px solid #e6e7eb;\n  background: #f2f4f7;\n  touch-action: none;\n}\n.app[data-theme=dark] main[data-view=tooth] .tooth-wheel .viewport {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #202633;\n  border-right: 0;\n}\n@media (prefers-color-scheme: dark) {\n  .app[data-theme=auto] main[data-view=tooth] .tooth-wheel .viewport {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    color: #fff;\n    background-color: #202633;\n    border-right: 0;\n  }\n}\nmain[data-view=tooth] .tooth-wheel .viewport .track {\n  cursor: grab;\n}\nmain[data-view=tooth] .tooth-wheel .viewport .track .teeth .tooth {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\nmain[data-view=tooth] .tooth-wheel .viewport .track .teeth .tooth .visualization {\n  position: relative;\n}\nmain[data-view=tooth] .tooth-wheel .viewport .track .teeth .tooth .visualization[data-state=to-be-extracted][data-projection=incisal]:after,\nmain[data-view=tooth] .tooth-wheel .viewport .track .teeth .tooth .visualization[data-state=to-be-extracted][data-projection=incisal]:before {\n  content: attr(data-label);\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  height: 16px;\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  color: #e13830;\n  z-index: 10;\n}\nmain[data-view=tooth] .tooth-wheel .viewport .track .teeth .tooth .visualization[data-state=to-be-extracted][data-projection=incisal]:before {\n  top: -8px;\n}\nmain[data-view=tooth] .tooth-wheel .viewport .track .teeth .tooth .visualization[data-state=to-be-extracted][data-projection=incisal]:after {\n  top: calc(100% - 8px);\n}\nmain[data-view=tooth] > div[data-view] {\n  flex-grow: 1;\n}\nmain[data-view=tooth] > div[data-view=periodontal-probing] .zones {\n  flex-wrap: nowrap;\n  margin: 0 -8px 32px;\n}\nmain[data-view=tooth] > div[data-view=periodontal-probing] .zone {\n  flex: 1 1;\n  padding: 0 8px;\n}\ndiv[data-view=pathology],\ndiv[data-view=periodontal-probing],\ndiv[data-view=restoration] {\n  position: relative;\n  overflow: auto;\n  padding: 32px 40px;\n  padding-bottom: 0;\n}\ndiv[data-view=pathology] > .heading,\ndiv[data-view=periodontal-probing] > .heading,\ndiv[data-view=restoration] > .heading {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n}\ndiv[data-view=pathology] a.close,\ndiv[data-view=periodontal-probing] a.close,\ndiv[data-view=restoration] a.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n}\ndiv[data-view=pathology] .actions,\ndiv[data-view=periodontal-probing] .actions,\ndiv[data-view=restoration] .actions {\n  padding-top: 32px;\n  padding-bottom: 32px;\n  margin-top: auto;\n}\nmain[data-view=tooth] > div[data-view=overview] {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr minmax(408px, auto);\n}\nmain[data-view=tooth] > div[data-view=overview] .tools {\n  position: absolute;\n  top: 32px;\n  right: 40px;\n  display: flex;\n  margin-top: 5px;\n}\nmain[data-view=tooth] > div[data-view=overview] .tools li {\n  margin-left: 16px;\n}\nmain[data-view=tooth] > div[data-view=overview] .tools li.reset {\n  margin-right: 32px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel {\n  padding: 32px 40px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel header {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 24px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel header .heading {\n  flex-grow: 1;\n  margin-bottom: 0;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel header .button {\n  flex: none;\n  margin-top: 5px;\n  margin-left: 24px;\n  text-align: right;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel .heading {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.dental {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.dental:last-child {\n  grid-row: 1/-1;\n}\n@media (max-width: 1200px) {\n  main[data-view=tooth] > div[data-view=overview] section.panel.dental > .heading {\n    visibility: hidden;\n  }\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.dental > .text {\n  padding: 24px 0;\n  border-top: 1px solid #e6e7eb;\n  text-align: center;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list,\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test,\nmain[data-view=tooth] > div[data-view=overview] section.panel.periodontal {\n  border-top: 1px solid #e6e7eb;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test,\nmain[data-view=tooth] > div[data-view=overview] section.panel.periodontal {\n  grid-area: 2 / auto/auto/-1;\n  border-left: 1px solid #e6e7eb;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .tests {\n  border-top: 1px solid #e6e7eb;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test {\n  border-bottom: 1px solid #e6e7eb;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 12px 2px 12px 28px;\n  color: inherit;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test button:before {\n  margin-left: -28px;\n  filter: contrast(0) sepia(100%) hue-rotate(176deg) brightness(1.25) saturate(0.4);\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test .name {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 700;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test .value {\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: normal;\n  position: relative;\n  padding-right: 18px;\n  margin-left: auto;\n  text-align: right;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test .value:after {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%237a8599' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.9 11.5c-.4-.4-.5-1.1 0-1.6L6.7 6 2.9 2c-.5-.5-.4-1.2 0-1.6.5-.4 1.2-.4 1.7.1.4.4 4.5 4.7 4.5 4.7.4.4.4 1.1 0 1.6 0 0-4.1 4.3-4.5 4.7-.5.5-1.2.5-1.7 0z'/%3E%3C/svg%3E\");\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test.active {\n  color: #008fd6;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test.active button:before {\n  filter: contrast(0) sepia(100%) hue-rotate(159deg) brightness(0.86) saturate(3.35);\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-list .test.active .value:after {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23008fd6' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.9 11.5c-.4-.4-.5-1.1 0-1.6L6.7 6 2.9 2c-.5-.5-.4-1.2 0-1.6.5-.4 1.2-.4 1.7.1.4.4 4.5 4.7 4.5 4.7.4.4.4 1.1 0 1.6 0 0-4.1 4.3-4.5 4.7-.5.5-1.2.5-1.7 0z'/%3E%3C/svg%3E\");\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test {\n  position: relative;\n  background: #f2f4f7;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .heading {\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-top: 8px;\n  font-weight: 700;\n  color: #4d5565;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n  margin: 10px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .options li {\n  margin-bottom: 10px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .options li:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .options button {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: normal;\n  width: 100%;\n  padding: 12px 24px;\n  border-radius: 6px;\n  font-weight: 600;\n  color: #33a5de;\n  background: #fff;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .actions {\n  margin-top: 16px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test .actions .button {\n  width: 100%;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test[data-name=electricity] .options {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -4px;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test[data-name=electricity] .options li {\n  flex: 0 0 20%;\n  padding: 4px;\n  margin: 0;\n}\nmain[data-view=tooth] > div[data-view=overview] section.panel.endodontic-test[data-name=electricity] .options button {\n  padding-left: 8px;\n  padding-right: 8px;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records {\n  position: relative;\n  overflow: auto;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records li {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  display: flex;\n  padding: 11px 18px;\n  border: 1px solid #e6e7eb;\n  margin-bottom: 8px;\n  color: #4d5565;\n  background: #f2f4f7;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records li:last-child {\n  margin-bottom: 0;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records li[data-type]:before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  width: 4px;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records li > a {\n  position: relative;\n  flex: 1;\n  margin: -12px -19px;\n  padding: 12px 19px;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records li[data-type=urgent]:before {\n  background-color: #e13830;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records li[data-type=monitor]:before {\n  background-color: #ffd00a;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records p {\n  margin: 0;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records .text {\n  margin-right: auto;\n  color: #7a8599;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records .date {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-left: 32px;\n  line-height: 24px;\n  white-space: nowrap;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records .actions {\n  margin-left: 16px;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records .delete {\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 50%;\n  background: linear-gradient(#fff 2px, hsla(0, 0%, 100%, 0) 0) 50%/10px 2px no-repeat, #e13830 content-box;\n  text-indent: 40px;\n}\nmain[data-view=tooth] > div[data-view=overview] ul.records .done {\n  height: 24px;\n  padding: 0 12px;\n  border: 1px solid #e6e7eb;\n  border-radius: 6px;\n  margin-right: 16px;\n  color: inherit;\n  background: #fff;\n}\ndiv[data-view=pathology],\ndiv[data-view=restoration] {\n  display: flex;\n  padding: 0;\n}\ndiv[data-view=pathology] .main,\ndiv[data-view=restoration] .main {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  padding: 32px 40px;\n  padding-bottom: 0;\n  background: #f2f4f7;\n}\ndiv[data-view=pathology] .main > .heading,\ndiv[data-view=restoration] .main > .heading {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n}\ndiv[data-view=pathology] .types[data-context=tooth],\ndiv[data-view=restoration] .types[data-context=tooth] {\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(3, 1fr);\n  margin-bottom: 24px;\n}\ndiv[data-view=pathology] .types[data-context=tooth] a,\ndiv[data-view=restoration] .types[data-context=tooth] a {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=pathology] .types[data-context=tooth] a,\n  div[data-view=restoration] .types[data-context=tooth] a {\n    transition: none;\n  }\n}\ndiv[data-view=pathology] .types[data-context=tooth] a:focus.focus-visible,\ndiv[data-view=restoration] .types[data-context=tooth] a:focus.focus-visible {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ndiv[data-view=pathology] .types[data-context=tooth] .router-link-exact-active,\ndiv[data-view=restoration] .types[data-context=tooth] .router-link-exact-active {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\ndiv[data-view=pathology] .zones,\ndiv[data-view=restoration] .zones {\n  order: -1;\n  width: 40vh;\n  min-width: 304px;\n  max-width: 40%;\n  padding: 16px;\n  display: grid;\n  gap: 8px;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(5, 1fr) repeat(2, 1.5fr);\n  grid-template-areas: \"cervical1 cervical1 cervical1 cervical1 cervical1 cervical1\" \". . direction1 direction1 . .\" \"direction2 direction2 direction3 direction3 direction4 direction4\" \". . direction5 direction5 . .\" \"cervical2 cervical2 cervical2 cervical2 cervical2 cervical2\" \"cusp1 cusp1 cusp1 cusp2 cusp2 cusp2\" \"cusp3 cusp3 cusp3 cusp4 cusp4 cusp4\";\n  box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.08);\n}\ndiv[data-view=pathology] .zones .pad,\ndiv[data-view=restoration] .zones .pad {\n  color: #7a8599;\n}\ndiv[data-view=pathology] .zones .pad label,\ndiv[data-view=restoration] .zones .pad label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #f2f4f7;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=pathology] .zones .pad label,\n  div[data-view=restoration] .zones .pad label {\n    transition: none;\n  }\n}\ndiv[data-view=pathology] .zones .pad input,\ndiv[data-view=restoration] .zones .pad input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\ndiv[data-view=pathology] .zones .pad input:checked + label,\ndiv[data-view=restoration] .zones .pad input:checked + label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\ndiv[data-view=pathology] .zones .pad input:focus.focus-visible + label,\ndiv[data-view=restoration] .zones .pad input:focus.focus-visible + label {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ndiv[data-view=pathology] .zones .pad:first-child,\ndiv[data-view=restoration] .zones .pad:first-child {\n  grid-area: cervical1;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(2),\ndiv[data-view=restoration] .zones .pad:nth-child(2) {\n  grid-area: direction1;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(3),\ndiv[data-view=restoration] .zones .pad:nth-child(3) {\n  grid-area: direction2;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(4),\ndiv[data-view=restoration] .zones .pad:nth-child(4) {\n  grid-area: direction3;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(5),\ndiv[data-view=restoration] .zones .pad:nth-child(5) {\n  grid-area: direction4;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(6),\ndiv[data-view=restoration] .zones .pad:nth-child(6) {\n  grid-area: direction5;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(7),\ndiv[data-view=restoration] .zones .pad:nth-child(7) {\n  grid-area: cervical2;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(8),\ndiv[data-view=restoration] .zones .pad:nth-child(8) {\n  grid-area: cusp1;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(9),\ndiv[data-view=restoration] .zones .pad:nth-child(9) {\n  grid-area: cusp2;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(10),\ndiv[data-view=restoration] .zones .pad:nth-child(10) {\n  grid-area: cusp3;\n}\ndiv[data-view=pathology] .zones .pad:nth-child(11),\ndiv[data-view=restoration] .zones .pad:nth-child(11) {\n  grid-area: cusp4;\n}\ndiv[data-view=pathology] .zones .pad label,\ndiv[data-view=restoration] .zones .pad label {\n  height: 100%;\n  color: inherit;\n  white-space: pre-wrap;\n}\ndiv[data-view=pathology] .zones .pad input:checked + label,\ndiv[data-view=restoration] .zones .pad input:checked + label {\n  color: inherit;\n  background-color: #fff;\n  box-shadow: inset 0 0 0 2px #98a1b3;\n}\ndiv[data-view=pathology] .zones .pad.disabled label,\ndiv[data-view=restoration] .zones .pad.disabled label {\n  pointer-events: none;\n  cursor: default;\n  color: #fff;\n  background-color: #fff;\n  box-shadow: 0 0 0 1px #e6e7eb;\n}\ndiv[data-view=pathology] .detail,\ndiv[data-view=restoration] .detail {\n  margin-bottom: 24px;\n}\ndiv[data-view=pathology] .detail:last-child,\ndiv[data-view=restoration] .detail:last-child {\n  margin-bottom: 0;\n}\ndiv[data-view=pathology] .detail legend,\ndiv[data-view=restoration] .detail legend {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n}\ndiv[data-view=pathology] .detail .options,\ndiv[data-view=restoration] .detail .options {\n  display: grid;\n  gap: 8px;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n}\ndiv[data-view=pathology] .detail .options label,\ndiv[data-view=restoration] .detail .options label {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  font-weight: 600;\n  color: #33a5de;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-property:\n    color,\n    background-color,\n    box-shadow;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0 2px 0 0 #e6e7eb;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n@media (prefers-reduced-motion: reduce) {\n  div[data-view=pathology] .detail .options label,\n  div[data-view=restoration] .detail .options label {\n    transition: none;\n  }\n}\ndiv[data-view=pathology] .detail .options input,\ndiv[data-view=restoration] .detail .options input {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  margin: -1px;\n}\ndiv[data-view=pathology] .detail .options input:checked + label,\ndiv[data-view=restoration] .detail .options input:checked + label {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #7a8599;\n}\ndiv[data-view=pathology] .detail .options input:focus.focus-visible + label,\ndiv[data-view=restoration] .detail .options input:focus.focus-visible + label {\n  outline: thin dotted #202633;\n  outline: 5px auto -webkit-focus-ring-color;\n}\ndiv[data-view=pathology] .detail[data-name=level] .options,\ndiv[data-view=pathology] .detail[data-name=material] .options,\ndiv[data-view=restoration] .detail[data-name=level] .options,\ndiv[data-view=restoration] .detail[data-name=material] .options {\n  grid-auto-flow: row;\n  grid-template-columns: repeat(2, 1fr);\n}\ndiv[data-view=pathology] .actions,\ndiv[data-view=restoration] .actions {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  gap: 8px;\n}\ndiv[data-view=pathology] .actions .button.monitor,\ndiv[data-view=restoration] .actions .button.monitor {\n  color: #202633;\n  background-color: #ffd00a;\n}\ndiv[data-view=pathology] .actions .button.monitor[disabled],\ndiv[data-view=restoration] .actions .button.monitor[disabled] {\n  color: hsla(0, 0%, 100%, 0.5);\n}\ndiv[data-view=pathology] .actions .button.treat,\ndiv[data-view=restoration] .actions .button.treat {\n  background-color: #e13830;\n}\n.report {\n  width: 793px;\n}\n.report > * {\n  position: relative;\n  width: 632px;\n  margin: 0 auto 24px;\n}\n.report .logo {\n  width: 59pt;\n  height: 45pt;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.report .general-info > h1 {\n  padding: 12px 0 48px;\n  color: #4d5565;\n  font-weight: 400;\n  font-size: 28px;\n}\n.report .medical-issues > h2,\n.report .mouth-charts .chart > h2,\n.report .treatment-plan > h2 {\n  position: relative;\n  padding: 14px 0 26px;\n  color: #4d5565;\n  font-size: 18px;\n  font-weight: 700;\n}\n.report .general-info table {\n  border-collapse: collapse;\n  border-top: 2px solid #e6e7eb;\n  width: 100%;\n}\n.report .general-info table tr {\n  margin: 0;\n  padding: 0;\n}\n.report .general-info table tr td,\n.report .general-info table tr th {\n  text-align: left;\n  padding: 11px 5px 12.5px;\n  border-bottom: 2px solid #e6e7eb;\n}\n.report .general-info table tr th {\n  font-weight: 400;\n  width: 30%;\n}\n.report .general-info table tr td {\n  font-weight: 700;\n  color: #202633;\n}\n.report .medical-issues .issues {\n  display: flex;\n}\n.report .medical-issues .issues .column {\n  flex: 1 1 50%;\n}\n.report .medical-issues .issues .column:not(.blank) {\n  border-top: 2px solid #e6e7eb;\n}\n.report .medical-issues .issues .column:first-child {\n  margin-right: 40px;\n}\n.report .medical-issues .issues .column:last-child {\n  margin-left: 40px;\n}\n.report .medical-issues .issues .issue {\n  text-align: left;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  position: relative;\n  padding-left: 40px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  margin-bottom: 0;\n  background: 0 0/24px 24px no-repeat;\n  border-bottom: 2px solid #e6e7eb;\n}\n.report .medical-issues .issues .issue:last-child {\n  margin-bottom: 0;\n}\n.report .medical-issues .issues .issue[data-name=nursing-infant]:before,\n.report .medical-issues .issues .issue[data-name=tobacco-use]:before {\n  display: block;\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin-right: -48px;\n  margin-bottom: -48px;\n  left: 0;\n  top: 0;\n  transform: scale(0.3333333333);\n  transform-origin: top left;\n  top: 8px;\n  position: absolute;\n}\n.report .medical-issues .issues .issue[data-name=alcohol-use]:before,\n.report .medical-issues .issues .issue[data-name=street-or-recreational-drug-use]:before {\n  display: block;\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin-right: -48px;\n  margin-bottom: -48px;\n  left: 0;\n  top: 0;\n  transform: scale(0.3333333333);\n  transform-origin: top left;\n  top: 8px;\n  position: absolute;\n}\n.report .treatment-plan .records {\n  position: relative;\n  overflow: auto;\n}\n.report .treatment-plan .records li {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  display: flex;\n  padding: 11px 18px;\n  border: 1px solid #e6e7eb;\n  margin-bottom: 8px;\n  color: #4d5565;\n  background: #f2f4f7;\n}\n.report .treatment-plan .records li:last-child {\n  margin-bottom: 0;\n}\n.report .treatment-plan .records li[data-type]:before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  width: 4px;\n}\n.report .treatment-plan .records li > a {\n  position: relative;\n  flex: 1;\n  margin: -12px -19px;\n  padding: 12px 19px;\n}\n.report .treatment-plan .records li[data-type=urgent]:before {\n  background-color: #e13830;\n}\n.report .treatment-plan .records li[data-type=monitor]:before {\n  background-color: #ffd00a;\n}\n.report .treatment-plan .records p {\n  margin: 0;\n}\n.report .treatment-plan .records .text {\n  margin-right: auto;\n  color: #7a8599;\n}\n.report .treatment-plan .records .date {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  margin-left: 32px;\n  line-height: 24px;\n  white-space: nowrap;\n}\n.report .treatment-plan .records .actions {\n  margin-left: 16px;\n}\n.report .treatment-plan .records .delete {\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n  border-radius: 50%;\n  background: linear-gradient(#fff 2px, hsla(0, 0%, 100%, 0) 0) 50%/10px 2px no-repeat, #e13830 content-box;\n  text-indent: 40px;\n}\n.report .treatment-plan .records .done {\n  height: 24px;\n  padding: 0 12px;\n  border: 1px solid #e6e7eb;\n  border-radius: 6px;\n  margin-right: 16px;\n  color: inherit;\n  background: #fff;\n}\n.report .treatment-plan .records li {\n  page-break-inside: avoid;\n  padding-top: 18px;\n  padding-bottom: 20px;\n  margin-bottom: 14px;\n}\n.report .treatment-plan .records li[data-type]:before {\n  width: 8px;\n}\n.report .treatment-plan .records li .text {\n  color: #4d5565;\n}\n.report .mouth-charts .chart {\n  position: relative;\n}\n.report .mouth-charts .full-mouth.chart,\n.report .mouth-charts .upper-jaw.chart {\n  -moz-column-break-before: page;\n  break-before: page;\n}\n.report .mouth-charts .upper-jaw.chart {\n  margin-bottom: 10px;\n}\n.report .mouth-charts .jaw-box {\n  clear: both;\n  position: relative;\n  width: 118vh;\n  min-width: 774.08px;\n  max-width: 100%;\n  padding: 0 72px;\n  margin: auto;\n}\n.report .mouth-charts .jaw-box .jaw {\n  display: flex;\n  justify-content: center;\n}\n.report .mouth-charts .jaw-box .jaw .tooth {\n  position: relative;\n  text-align: center;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .trigger:not([role=\"none\"]) {\n  cursor: pointer;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .trigger[aria-checked=true]:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.6 9.5c-.8-.7-.8-1.9-.1-2.7l.1-.1c.8-.7 2.1-.7 2.9 0l2.4 2.4 6.7-6.5c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8L7 13.6c-.6.6-1.6.6-2.2 0L.6 9.5z'/%3E%3C/svg%3E\");\n  overflow: hidden;\n  width: 20px;\n  height: 20px;\n  padding: 3px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  font-size: 10px;\n  line-height: 10px;\n  background: #008fd6;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .visualization {\n  position: relative;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted] {\n  outline: 3px dotted #e13830;\n  border-radius: 20px;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:after,\n.report .mouth-charts .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='9' cy='9' r='9' fill='%23E13830'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M12.5 6.39V4.74c0-.409-.348-.74-.778-.74H6.278c-.43 0-.778.331-.778.74v1.666c0 .233.116.452.312.593l2.54 1.814-2.54 1.813a.73.73 0 0 0-.312.593v1.666c0 .409.348.74.778.74h5.444c.43 0 .778-.331.778-.74v-1.65a.73.73 0 0 0-.31-.59L9.646 8.812 12.19 6.98a.73.73 0 0 0 .309-.591'/%3E%3C/g%3E%3C/svg%3E\");\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  height: 18px;\n  width: 18px;\n  overflow: hidden;\n  margin-left: -9px;\n  margin-top: -9px;\n  z-index: 3;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:before {\n  top: 0;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:after {\n  top: 100%;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .number {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  color: inherit;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .number[data-treatment-plan-level=urgent] {\n  color: #fff;\n  background: #e13830;\n}\n.report .mouth-charts .jaw-box .jaw .tooth .number[data-treatment-plan-level=monitor] {\n  color: #202633;\n  background: #ffd00a;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 41px;\n}\n@media (max-height: 759px) {\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues {\n    width: 31px;\n    border-spacing: 1px 4px;\n  }\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator {\n  width: 11px;\n  height: 11px;\n}\n@media (max-height: 759px) {\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator {\n    width: 9px;\n    height: 9px;\n    border: 1px solid #4d5565;\n    border-radius: 50%;\n  }\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active {\n    border-color: currentcolor;\n    background-color: currentcolor;\n  }\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=bleeding] {\n    color: #d0021b;\n  }\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=plaque] {\n    color: #4a90e2;\n  }\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=pus] {\n    color: #f8e71c;\n  }\n  .report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=tartar] {\n    color: transparent;\n    border-color: #bcc1cc;\n  }\n}\n.report .mouth-charts .jaw-box .jaw[data-type=lower] .periodontal-issues[data-projection=lingual],\n.report .mouth-charts .jaw-box .jaw[data-type=upper] .periodontal-issues[data-projection=buccal] {\n  top: 0;\n  margin-top: 32px;\n  margin-bottom: 24px;\n}\n.report .mouth-charts .jaw-box .jaw[data-type=lower] .periodontal-issues[data-projection=buccal],\n.report .mouth-charts .jaw-box .jaw[data-type=upper] .periodontal-issues[data-projection=palatal] {\n  bottom: 0;\n  margin-top: 24px;\n  margin-bottom: 32px;\n}\n.report .mouth-charts .jaw-box .jaw .endodontic-issues {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 64px;\n}\n.report .mouth-charts .jaw-box .jaw .endodontic-issues:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 16px;\n  border-left: 1px solid #98a1b3;\n}\n.report .mouth-charts .jaw-box .jaw .endodontic-issues .issue {\n  width: 24px;\n  height: 24px;\n  margin: auto;\n  overflow: hidden;\n}\n.report .mouth-charts .jaw-box .jaw .endodontic-issues .issue .text {\n  position: absolute;\n  left: -99999px;\n  top: -99999px;\n}\n.report .mouth-charts .jaw-box .jaw[data-type=upper] .endodontic-issues {\n  top: 0;\n}\n.report .mouth-charts .jaw-box .jaw[data-type=upper] .endodontic-issues:before {\n  top: 34px;\n}\n.report .mouth-charts .jaw-box .jaw[data-type=lower] .endodontic-issues {\n  bottom: 0;\n  padding-top: 40px;\n}\n.report .mouth-charts .jaw-box .jaw[data-type=lower] .endodontic-issues:before {\n  bottom: 34px;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=upper] .tooth {\n  padding-top: 64px;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=upper] .tooth .trigger[data-erupted=true][aria-checked=true]:after {\n  margin-top: 38%;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=upper] .tooth .trigger[data-erupted=false][aria-checked=true]:after {\n  margin-top: 10px;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=upper] .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:after {\n  display: none;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=lower] .tooth {\n  padding-bottom: 64px;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=lower] .tooth .trigger[data-erupted=true][aria-checked=true]:after {\n  margin-top: -38%;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=lower] .tooth .trigger[data-erupted=false][aria-checked=true]:after {\n  margin-top: -10px;\n}\n.report .mouth-charts .jaw-box.full-mouth .jaw[data-type=lower] .tooth .visualization[data-eruption=erupted][data-state=to-be-extracted][data-projection=incisal]:before {\n  display: none;\n}\n.report .mouth-charts .jaw-box.full-mouth .tooth .number {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.report .mouth-charts .jaw-box.single-jaw .tooth {\n  padding-top: 72px;\n  padding-bottom: 72px;\n}\n.report .mouth-charts .jaw-box.single-jaw .tooth .number {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend {\n  position: absolute;\n  left: 0;\n  text-align: left;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend[data-row=top] {\n  top: 32px;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend[data-row=bottom] {\n  bottom: 31px;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend p {\n  font-size: 8px;\n  line-height: 14px;\n  letter-spacing: 0.5px;\n  margin: 0;\n  text-transform: uppercase;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend p[data-type=bleeding] {\n  color: #d0021b;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend p[data-type=plaque] {\n  color: #4a90e2;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend p[data-type=pus] {\n  color: #f8e71c;\n}\n.report .mouth-charts .jaw-box .periodontal-issue-legend p[data-type=tartar] {\n  color: transparent;\n}\n.report .mouth-charts .jaw-box.full-mouth {\n  margin-left: -80.5px;\n  margin-bottom: 24px;\n}\n.report .mouth-charts .jaw-box.single-jaw {\n  padding-right: 0;\n  min-width: 632px;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues {\n  width: 31px;\n  border-spacing: 2px 4px;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator {\n  width: 7px;\n  height: 7px;\n  border: 1px solid #4d5565;\n  border-radius: 50%;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active {\n  border-color: currentcolor;\n  background-color: currentcolor;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=bleeding] {\n  color: #d0021b;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=plaque] {\n  color: #4a90e2;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=pus] {\n  color: #f8e71c;\n}\n.report .mouth-charts .jaw-box .jaw .periodontal-issues .indicator.active[data-type=tartar] {\n  color: transparent;\n  border-color: #bcc1cc;\n}\n.report .mouth-charts .upper-jaw .jaw-box {\n  margin-top: -36px;\n}\n.report .mouth-charts .lower-jaw .jaw-box {\n  margin-top: -46px;\n}\n.report .mouth-charts .legend .legend-list {\n  margin-bottom: 40px;\n  display: grid;\n  grid-template-columns: 37% 37% 26%;\n  grid-template-rows: auto 1fr;\n}\n.report .mouth-charts .legend .legend-list .group {\n  margin-bottom: 32px;\n}\n.report .mouth-charts .legend .legend-list .group:last-child {\n  margin-bottom: 0;\n}\n.report .mouth-charts .legend .legend-list .group .heading,\n.report .mouth-charts .legend .legend-list .group li {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: normal;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 700;\n  color: #7a8599;\n  text-transform: uppercase;\n  line-height: 24px;\n}\n.report .mouth-charts .legend .legend-list .group .heading {\n  color: #202633;\n}\n.report .mouth-charts .legend .legend-list .group li {\n  display: flex;\n  padding-left: 40px;\n  margin: 16px 0;\n  font-weight: 600;\n}\n.report .mouth-charts .legend .legend-list .group li[data-name]:before {\n  content: \"\";\n  flex: none;\n  width: 24px;\n  height: 24px;\n  margin-left: -40px;\n  margin-right: 16px;\n  vertical-align: middle;\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=depth]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.51 6.49c-2.09 0-3.29 2.82-4.57 5.81-1.28 3-2.72 6.36-5.52 7.13h18.57v-4.32c-2.24-.81-3.37-2.97-4.32-4.78-1.25-2.38-2.12-3.84-4.16-3.84' fill='%239ad4f2'/%3E%3Cpath d='M15.51 4.49c-3.41 0-4.93 3.57-6.41 7.02-1.34 3.13-2.6 6.08-4.93 6.08-2.45 0-3.31.82-3.62 1.84h4.87c2.8-.77 4.24-4.13 5.52-7.13 1.28-2.99 2.48-5.81 4.57-5.81 2.04 0 2.91 1.46 4.16 3.84.95 1.81 2.09 3.97 4.32 4.78v-2.22c-.99-.65-1.7-1.87-2.55-3.49-1.21-2.3-2.58-4.91-5.93-4.91' fill='%2337a5dd'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=margin]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.6 2.4c-3.1 0-4.6 1.6-5.9 3-1.4 1.5-2.6 2.9-6 2.9-4.2-.1-5.5 3.7-6.7 7-.3 1-.7 1.8-1 2.6v3.8c1.4-1.6 2.2-3.8 2.9-5.7 1.3-3.6 2.2-5.7 4.8-5.7 4.3 0 6.1-1.9 7.5-3.5 1.2-1.3 2.1-2.3 4.4-2.3 2.1 0 3.2 1 4.4 2.2V3.8c-1.1-.8-2.5-1.4-4.4-1.4' fill='%23e13b30'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=furcation1]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m3.989 2.954-2.51 5.02h-1.49L3.982-.044l.007.013.006-.013L7.99 7.974H6.5l-2.51-5.02z'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=furcation2]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 8H0l4-8 4 8zM2.3 6.6h3.5L4 3.1 2.3 6.6z'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=furcation3]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4 0 4 8H0z'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=mobility1]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071zM19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=mobility2]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071z'/%3E%3Cpath d='M6.874.498a.571.571 0 0 1 .863.743l-.06.07-3.063 3.021 3.063 3.023c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.07-.06L3.398 4.74a.57.57 0 0 1-.061-.742l.061-.071zm9.208 7.671a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.022-3.064-3.022a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.071.06 3.475 3.429a.57.57 0 0 1 .061.742l-.06.071z'/%3E%3Cpath d='M19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=mobility3]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 23 9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.978.498a.571.571 0 0 1 .864.743l-.061.07-3.063 3.022 3.063 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.736.065l-.072-.06L.503 4.74a.57.57 0 0 1-.06-.742l.06-.071z'/%3E%3Cpath d='M6.874.498a.571.571 0 0 1 .863.743l-.06.07-3.063 3.021 3.063 3.023c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.07-.06L3.398 4.74a.57.57 0 0 1-.061-.742l.061-.071z'/%3E%3Cpath d='M9.77.498a.571.571 0 0 1 .863.743l-.06.07-3.064 3.022 3.064 3.022c.202.2.224.513.065.737l-.06.071a.57.57 0 0 1-.737.065l-.071-.06L6.295 4.74a.57.57 0 0 1-.061-.742l.06-.071zm3.416 7.671a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .736-.065l.071.06 3.475 3.429a.57.57 0 0 1 .062.742l-.062.071z'/%3E%3Cpath d='M16.082 8.169a.571.571 0 0 1-.863-.743l.06-.07 3.064-3.022-3.064-3.022a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.071.06 3.475 3.429a.57.57 0 0 1 .061.742l-.06.071z'/%3E%3Cpath d='M19.26 8.169a.571.571 0 0 1-.864-.743l.061-.07 3.063-3.023-3.063-3.021a.57.57 0 0 1-.065-.737l.06-.072a.57.57 0 0 1 .737-.065l.07.06 3.476 3.429a.57.57 0 0 1 .06.742l-.06.071z'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=monitor]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z' fill='%23ffd00a'/%3E%3Cpath d='m12.6 16.3.5-2.4h-1.9l-.5 2.4h-.9l.5-2.4H8.9l.2-.8h1.4l.4-2.1H9.5l.2-.8h1.4l.5-2.3h.8l-.5 2.3h1.9l.5-2.3h.8l-.5 2.3h1.5l-.1.8h-1.5l-.4 2.1h1.5l-.2.8h-1.5l-.5 2.4h-.8zm-1.3-3.2h1.9l.4-2.2h-1.9l-.4 2.2z' fill='%23202633'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=treatment]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z' fill='%23e13830'/%3E%3Cpath d='m12.6 16.3.5-2.4h-1.9l-.5 2.4h-.9l.5-2.4H8.9l.2-.8h1.4l.4-2.1H9.5l.2-.8h1.4l.5-2.3h.8l-.5 2.3h1.9l.5-2.3h.8l-.5 2.3h1.5l-.1.8h-1.5l-.4 2.1h1.5l-.2.8h-1.5l-.5 2.4h-.8zm-1.3-3.2h1.9l.4-2.2h-1.9l-.4 2.2z' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name=extract]:before {\n  content: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23E13830'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M16.667 8.52v-2.2c0-.545-.465-.987-1.037-.987H8.37c-.572 0-1.037.442-1.037.988v2.22a.976.976 0 0 0 .416.79l3.387 2.419-3.388 2.419a.98.98 0 0 0-.415.79v2.22c0 .546.465.988 1.037.988h7.26c.572 0 1.037-.442 1.037-.988v-2.198a.97.97 0 0 0-.413-.788L12.86 11.75l3.395-2.443a.98.98 0 0 0 .413-.788'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.report .mouth-charts .legend .legend-list .group li[data-name^=furcation]:before {\n  padding: 1px 5px 9px;\n}\n.report .mouth-charts .legend .legend-list .group li[data-name^=mobility]:before {\n  width: 32px;\n  margin-left: -44px;\n  margin-right: 12px;\n}\n.report .mouth-charts .legend .legend-list .group {\n  margin-bottom: 0;\n}\n.report .mouth-charts .legend .legend-list .group:first-child,\n.report .mouth-charts .legend .legend-list .group:nth-child(2) {\n  grid-row: 1 / span 2;\n}\n.report .mouth-charts .legend .legend-list .group:nth-child(3) {\n  margin-bottom: 32px;\n}\n.report .mouth-charts .legend .legend-list .group li {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n[data-view=report] {\n  display: flex;\n  flex-direction: column;\n}\n[data-view=report] .actions {\n  display: flex;\n  flex: 0 0 64px;\n  background: #fff;\n  padding: 8px 16px;\n  border-bottom: 1px solid #e6e7eb;\n  align-items: center;\n}\n[data-view=report] .actions .message {\n  margin-left: 16px;\n}\n[data-view=report] .actions .message.error {\n  color: #e13830;\n}\n[data-view=report] .actions .message a {\n  text-decoration: underline;\n}\n[data-view=report] .preview {\n  overflow: auto;\n}\n[data-view=report] .report {\n  margin: 0 auto;\n  padding-top: 32px;\n}\n[data-view=print] .banner {\n  left: 16px;\n  right: auto;\n}\n[data-view=print] .banner .button,\n[data-view=print] .banner .close {\n  display: none;\n}\nmain[data-view=profile] {\n  padding: 24px;\n}\nmain[data-view=profile] .content {\n  width: 320px;\n  margin: 32px auto 0;\n}\nmain[data-view=profile] h1 {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  text-align: center;\n}\nmain[data-view=profile] a.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n}\nmain[data-view=profile] .actions {\n  margin-top: 32px;\n}\nmain[data-view=profile] .actions .button {\n  width: 100%;\n}\nmain[data-view=settings] {\n  padding: 24px;\n}\nmain[data-view=settings] .content {\n  width: 320px;\n  margin: 32px auto 0;\n}\nmain[data-view=settings] h1 {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  text-align: center;\n}\nmain[data-view=settings] a.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n}\nmain[data-view=settings] .field.toggle-switch {\n  border: 1px solid #e6e7eb;\n  border-radius: 4px;\n  margin-bottom: 16px;\n}\nmain[data-view=loading] {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  color: #fff;\n  background-color: #202633;\n}\nmain[data-view=not-found] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\nmain[data-view=not-found] .content {\n  width: 648px;\n  text-align: center;\n}\nmain[data-view=not-found] .text {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n}\nmain[data-view=billing] {\n  padding: 24px;\n}\nmain[data-view=billing] .content {\n  width: 320px;\n  margin: 32px auto 0;\n}\nmain[data-view=billing] h1 {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  text-align: center;\n}\nmain[data-view=billing] a.close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px;\n  margin: 28px;\n  color: #bcc1cc;\n}\nmain[data-view=billing] > .content ul.prices {\n  display: flex;\n  justify-content: center;\n}\nmain[data-view=billing] > .content ul.prices > li {\n  text-align: center;\n  background-color: #202633;\n  border-radius: 10px;\n  min-width: 352px;\n  min-height: 240px;\n  margin: 16px 0;\n  margin-left: 32px;\n  padding: 48px 0;\n}\nmain[data-view=billing] > .content ul.prices > li h3 {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 21px;\n  line-height: 24px;\n  letter-spacing: 0.13px;\n  color: #fff;\n}\nmain[data-view=billing] > .content ul.prices > li h4 {\n  font-weight: 300;\n  color: #4d5565;\n  font-size: 28px;\n  line-height: 32px;\n  letter-spacing: 0.17px;\n  margin-bottom: 24px;\n  margin: 32px 0;\n  color: #fff;\n}\nmain[data-view=billing] > .content ul.prices > li .pending-loader {\n  color: #ffd00a;\n}\nmain[data-view=billing] > .content ul.prices > li .message {\n  margin: 32px 0;\n  min-height: 48px;\n  color: #ffd00a;\n}\n.dental-chart-container .chart-main .chart-body {\n  flex: 1 1 auto;\n}\n\n/* sfc-style:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/App.vue?type=style&index=0 */\n/*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*# sourceMappingURL=chart.bundle.5XLTGMBV.css.map */\n");
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // ../do_dental/node_modules/@vue/shared/dist/shared.esm-bundler.js
  function makeMap(str) {
    const map2 = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(","))
      map2[key] = 1;
    return (val) => val in map2;
  }
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var NOOP = () => {
  };
  var NO = () => false;
  var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => toTypeString(val) === "[object Date]";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  var isBuiltInDirective = /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  );
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-\w/g;
  var camelize = cacheStringFunction(
    (str) => {
      return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
    }
  );
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction(
    (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
  );
  var capitalize = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  var toHandlerKey = cacheStringFunction(
    (str) => {
      const s = str ? `on${capitalize(str)}` : ``;
      return s;
    }
  );
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  var invokeArrayFns = (fns, ...arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](...arg);
    }
  };
  var def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  var looseToNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var toNumber = (val) => {
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:([^]+)/;
  var styleCommentRE = /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var isRef = (val) => {
    return !!(val && val["__v_isRef"] === true);
  };
  var toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isRef(val)) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce(
          (entries, [key, val2], i) => {
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
          },
          {}
        )
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
      };
    } else if (isSymbol(val)) {
      return stringifySymbol(val);
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var stringifySymbol = (v, i = "") => {
    var _a;
    return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
  };

  // ../do_dental/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }
  var activeEffectScope;
  var EffectScope = class {
    constructor(detached = false) {
      this.detached = detached;
      this._active = true;
      this._on = 0;
      this.effects = [];
      this.cleanups = [];
      this._isPaused = false;
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
          this
        ) - 1;
      }
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].pause();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].pause();
        }
      }
    }
    resume() {
      if (this._active) {
        if (this._isPaused) {
          this._isPaused = false;
          let i, l;
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].resume();
            }
          }
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].resume();
          }
        }
      }
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (true) {
        warn(`cannot run an inactive effect scope.`);
      }
    }
    on() {
      if (++this._on === 1) {
        this.prevScope = activeEffectScope;
        activeEffectScope = this;
      }
    }
    off() {
      if (this._on > 0 && --this._on === 0) {
        activeEffectScope = this.prevScope;
        this.prevScope = void 0;
      }
    }
    stop(fromParent) {
      if (this._active) {
        this._active = false;
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        this.effects.length = 0;
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        this.cleanups.length = 0;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
      }
    }
  };
  function getCurrentScope() {
    return activeEffectScope;
  }
  var activeSub;
  var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
  var ReactiveEffect = class {
    constructor(fn) {
      this.fn = fn;
      this.deps = void 0;
      this.depsTail = void 0;
      this.flags = 1 | 4;
      this.next = void 0;
      this.cleanup = void 0;
      this.scheduler = void 0;
      if (activeEffectScope && activeEffectScope.active) {
        activeEffectScope.effects.push(this);
      }
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      if (this.flags & 64) {
        this.flags &= -65;
        if (pausedQueueEffects.has(this)) {
          pausedQueueEffects.delete(this);
          this.trigger();
        }
      }
    }
    notify() {
      if (this.flags & 2 && !(this.flags & 32)) {
        return;
      }
      if (!(this.flags & 8)) {
        batch(this);
      }
    }
    run() {
      if (!(this.flags & 1)) {
        return this.fn();
      }
      this.flags |= 2;
      cleanupEffect(this);
      prepareDeps(this);
      const prevEffect = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = this;
      shouldTrack = true;
      try {
        return this.fn();
      } finally {
        if (activeSub !== this) {
          warn(
            "Active effect was not restored correctly - this is likely a Vue internal bug."
          );
        }
        cleanupDeps(this);
        activeSub = prevEffect;
        shouldTrack = prevShouldTrack;
        this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let link = this.deps; link; link = link.nextDep) {
          removeSub(link);
        }
        this.deps = this.depsTail = void 0;
        cleanupEffect(this);
        this.onStop && this.onStop();
        this.flags &= -2;
      }
    }
    trigger() {
      if (this.flags & 64) {
        pausedQueueEffects.add(this);
      } else if (this.scheduler) {
        this.scheduler();
      } else {
        this.runIfDirty();
      }
    }
    runIfDirty() {
      if (isDirty(this)) {
        this.run();
      }
    }
    get dirty() {
      return isDirty(this);
    }
  };
  var batchDepth = 0;
  var batchedSub;
  var batchedComputed;
  function batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
      sub.next = batchedComputed;
      batchedComputed = sub;
      return;
    }
    sub.next = batchedSub;
    batchedSub = sub;
  }
  function startBatch() {
    batchDepth++;
  }
  function endBatch() {
    if (--batchDepth > 0) {
      return;
    }
    if (batchedComputed) {
      let e = batchedComputed;
      batchedComputed = void 0;
      while (e) {
        const next = e.next;
        e.next = void 0;
        e.flags &= -9;
        e = next;
      }
    }
    let error;
    while (batchedSub) {
      let e = batchedSub;
      batchedSub = void 0;
      while (e) {
        const next = e.next;
        e.next = void 0;
        e.flags &= -9;
        if (e.flags & 1) {
          try {
            ;
            e.trigger();
          } catch (err) {
            if (!error)
              error = err;
          }
        }
        e = next;
      }
    }
    if (error)
      throw error;
  }
  function prepareDeps(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      link.version = -1;
      link.prevActiveLink = link.dep.activeLink;
      link.dep.activeLink = link;
    }
  }
  function cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while (link) {
      const prev = link.prevDep;
      if (link.version === -1) {
        if (link === tail)
          tail = prev;
        removeSub(link);
        removeDep(link);
      } else {
        head = link;
      }
      link.dep.activeLink = link.prevActiveLink;
      link.prevActiveLink = void 0;
      link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
  }
  function isDirty(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
        return true;
      }
    }
    if (sub._dirty) {
      return true;
    }
    return false;
  }
  function refreshComputed(computed3) {
    if (computed3.flags & 4 && !(computed3.flags & 16)) {
      return;
    }
    computed3.flags &= -17;
    if (computed3.globalVersion === globalVersion) {
      return;
    }
    computed3.globalVersion = globalVersion;
    if (!computed3.isSSR && computed3.flags & 128 && (!computed3.deps && !computed3._dirty || !isDirty(computed3))) {
      return;
    }
    computed3.flags |= 2;
    const dep = computed3.dep;
    const prevSub = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = computed3;
    shouldTrack = true;
    try {
      prepareDeps(computed3);
      const value = computed3.fn(computed3._value);
      if (dep.version === 0 || hasChanged(value, computed3._value)) {
        computed3.flags |= 128;
        computed3._value = value;
        dep.version++;
      }
    } catch (err) {
      dep.version++;
      throw err;
    } finally {
      activeSub = prevSub;
      shouldTrack = prevShouldTrack;
      cleanupDeps(computed3);
      computed3.flags &= -3;
    }
  }
  function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link;
    if (prevSub) {
      prevSub.nextSub = nextSub;
      link.prevSub = void 0;
    }
    if (nextSub) {
      nextSub.prevSub = prevSub;
      link.nextSub = void 0;
    }
    if (dep.subsHead === link) {
      dep.subsHead = nextSub;
    }
    if (dep.subs === link) {
      dep.subs = prevSub;
      if (!prevSub && dep.computed) {
        dep.computed.flags &= -5;
        for (let l = dep.computed.deps; l; l = l.nextDep) {
          removeSub(l, true);
        }
      }
    }
    if (!soft && !--dep.sc && dep.map) {
      dep.map.delete(dep.key);
    }
  }
  function removeDep(link) {
    const { prevDep, nextDep } = link;
    if (prevDep) {
      prevDep.nextDep = nextDep;
      link.prevDep = void 0;
    }
    if (nextDep) {
      nextDep.prevDep = prevDep;
      link.nextDep = void 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function cleanupEffect(e) {
    const { cleanup } = e;
    e.cleanup = void 0;
    if (cleanup) {
      const prevSub = activeSub;
      activeSub = void 0;
      try {
        cleanup();
      } finally {
        activeSub = prevSub;
      }
    }
  }
  var globalVersion = 0;
  var Link = class {
    constructor(sub, dep) {
      this.sub = sub;
      this.dep = dep;
      this.version = dep.version;
      this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var Dep = class {
    constructor(computed3) {
      this.computed = computed3;
      this.version = 0;
      this.activeLink = void 0;
      this.subs = void 0;
      this.map = void 0;
      this.key = void 0;
      this.sc = 0;
      this.__v_skip = true;
      if (true) {
        this.subsHead = void 0;
      }
    }
    track(debugInfo) {
      if (!activeSub || !shouldTrack || activeSub === this.computed) {
        return;
      }
      let link = this.activeLink;
      if (link === void 0 || link.sub !== activeSub) {
        link = this.activeLink = new Link(activeSub, this);
        if (!activeSub.deps) {
          activeSub.deps = activeSub.depsTail = link;
        } else {
          link.prevDep = activeSub.depsTail;
          activeSub.depsTail.nextDep = link;
          activeSub.depsTail = link;
        }
        addSub(link);
      } else if (link.version === -1) {
        link.version = this.version;
        if (link.nextDep) {
          const next = link.nextDep;
          next.prevDep = link.prevDep;
          if (link.prevDep) {
            link.prevDep.nextDep = next;
          }
          link.prevDep = activeSub.depsTail;
          link.nextDep = void 0;
          activeSub.depsTail.nextDep = link;
          activeSub.depsTail = link;
          if (activeSub.deps === link) {
            activeSub.deps = next;
          }
        }
      }
      if (activeSub.onTrack) {
        activeSub.onTrack(
          extend(
            {
              effect: activeSub
            },
            debugInfo
          )
        );
      }
      return link;
    }
    trigger(debugInfo) {
      this.version++;
      globalVersion++;
      this.notify(debugInfo);
    }
    notify(debugInfo) {
      startBatch();
      try {
        if (true) {
          for (let head = this.subsHead; head; head = head.nextSub) {
            if (head.sub.onTrigger && !(head.sub.flags & 8)) {
              head.sub.onTrigger(
                extend(
                  {
                    effect: head.sub
                  },
                  debugInfo
                )
              );
            }
          }
        }
        for (let link = this.subs; link; link = link.prevSub) {
          if (link.sub.notify()) {
            ;
            link.sub.dep.notify();
          }
        }
      } finally {
        endBatch();
      }
    }
  };
  function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
      const computed3 = link.dep.computed;
      if (computed3 && !link.dep.subs) {
        computed3.flags |= 4 | 16;
        for (let l = computed3.deps; l; l = l.nextDep) {
          addSub(l);
        }
      }
      const currentTail = link.dep.subs;
      if (currentTail !== link) {
        link.prevSub = currentTail;
        if (currentTail)
          currentTail.nextSub = link;
      }
      if (link.dep.subsHead === void 0) {
        link.dep.subsHead = link;
      }
      link.dep.subs = link;
    }
  }
  var targetMap = /* @__PURE__ */ new WeakMap();
  var ITERATE_KEY = Symbol(
    true ? "Object iterate" : ""
  );
  var MAP_KEY_ITERATE_KEY = Symbol(
    true ? "Map keys iterate" : ""
  );
  var ARRAY_ITERATE_KEY = Symbol(
    true ? "Array iterate" : ""
  );
  function track(target, type, key) {
    if (shouldTrack && activeSub) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = new Dep());
        dep.map = depsMap;
        dep.key = key;
      }
      if (true) {
        dep.track({
          target,
          type,
          key
        });
      } else {
        dep.track();
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      globalVersion++;
      return;
    }
    const run = (dep) => {
      if (dep) {
        if (true) {
          dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
          });
        } else {
          dep.trigger();
        }
      }
    };
    startBatch();
    if (type === "clear") {
      depsMap.forEach(run);
    } else {
      const targetIsArray = isArray(target);
      const isArrayIndex = targetIsArray && isIntegerKey(key);
      if (targetIsArray && key === "length") {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
            run(dep);
          }
        });
      } else {
        if (key !== void 0 || depsMap.has(void 0)) {
          run(depsMap.get(key));
        }
        if (isArrayIndex) {
          run(depsMap.get(ARRAY_ITERATE_KEY));
        }
        switch (type) {
          case "add":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isArrayIndex) {
              run(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              run(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
    }
    endBatch();
  }
  function reactiveReadArray(array) {
    const raw = toRaw(array);
    if (raw === array)
      return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    return isShallow(array) ? raw : raw.map(toReactive);
  }
  function shallowReadArray(arr) {
    track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
  }
  var arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, toReactive);
    },
    concat(...args) {
      return reactiveReadArray(this).concat(
        ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
      );
    },
    entries() {
      return iterator(this, "entries", (value) => {
        value[1] = toReactive(value[1]);
        return value;
      });
    },
    every(fn, thisArg) {
      return apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter(fn, thisArg) {
      return apply(this, "filter", fn, thisArg, (v) => v.map(toReactive), arguments);
    },
    find(fn, thisArg) {
      return apply(this, "find", fn, thisArg, toReactive, arguments);
    },
    findIndex(fn, thisArg) {
      return apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast(fn, thisArg) {
      return apply(this, "findLast", fn, thisArg, toReactive, arguments);
    },
    findLastIndex(fn, thisArg) {
      return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    forEach(fn, thisArg) {
      return apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes(...args) {
      return searchProxy(this, "includes", args);
    },
    indexOf(...args) {
      return searchProxy(this, "indexOf", args);
    },
    join(separator) {
      return reactiveReadArray(this).join(separator);
    },
    lastIndexOf(...args) {
      return searchProxy(this, "lastIndexOf", args);
    },
    map(fn, thisArg) {
      return apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop() {
      return noTracking(this, "pop");
    },
    push(...args) {
      return noTracking(this, "push", args);
    },
    reduce(fn, ...args) {
      return reduce(this, "reduce", fn, args);
    },
    reduceRight(fn, ...args) {
      return reduce(this, "reduceRight", fn, args);
    },
    shift() {
      return noTracking(this, "shift");
    },
    some(fn, thisArg) {
      return apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice(...args) {
      return noTracking(this, "splice", args);
    },
    toReversed() {
      return reactiveReadArray(this).toReversed();
    },
    toSorted(comparer) {
      return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced(...args) {
      return reactiveReadArray(this).toSpliced(...args);
    },
    unshift(...args) {
      return noTracking(this, "unshift", args);
    },
    values() {
      return iterator(this, "values", toReactive);
    }
  };
  function iterator(self2, method, wrapValue) {
    const arr = shallowReadArray(self2);
    const iter = arr[method]();
    if (arr !== self2 && !isShallow(self2)) {
      iter._next = iter.next;
      iter.next = () => {
        const result = iter._next();
        if (!result.done) {
          result.value = wrapValue(result.value);
        }
        return result;
      };
    }
    return iter;
  }
  var arrayProto = Array.prototype;
  function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self2);
    const needsWrap = arr !== self2 && !isShallow(self2);
    const methodFn = arr[method];
    if (methodFn !== arrayProto[method]) {
      const result2 = methodFn.apply(self2, args);
      return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn = fn;
    if (arr !== self2) {
      if (needsWrap) {
        wrappedFn = function(item, index) {
          return fn.call(this, toReactive(item), index, self2);
        };
      } else if (fn.length > 2) {
        wrappedFn = function(item, index) {
          return fn.call(this, item, index, self2);
        };
      }
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
  }
  function reduce(self2, method, fn, args) {
    const arr = shallowReadArray(self2);
    let wrappedFn = fn;
    if (arr !== self2) {
      if (!isShallow(self2)) {
        wrappedFn = function(acc, item, index) {
          return fn.call(this, acc, toReactive(item), index, self2);
        };
      } else if (fn.length > 3) {
        wrappedFn = function(acc, item, index) {
          return fn.call(this, acc, item, index, self2);
        };
      }
    }
    return arr[method](wrappedFn, ...args);
  }
  function searchProxy(self2, method, args) {
    const arr = toRaw(self2);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && isProxy(args[0])) {
      args[0] = toRaw(args[0]);
      return arr[method](...args);
    }
    return res;
  }
  function noTracking(self2, method, args = []) {
    pauseTracking();
    startBatch();
    const res = toRaw(self2)[method].apply(self2, args);
    endBatch();
    resetTracking();
    return res;
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  function hasOwnProperty2(key) {
    if (!isSymbol(key))
      key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  var BaseReactiveHandler = class {
    constructor(_isReadonly = false, _isShallow = false) {
      this._isReadonly = _isReadonly;
      this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
      if (key === "__v_skip")
        return target["__v_skip"];
      const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return isShallow2;
      } else if (key === "__v_raw") {
        if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
          return target;
        }
        return;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2) {
        let fn;
        if (targetIsArray && (fn = arrayInstrumentations[key])) {
          return fn;
        }
        if (key === "hasOwnProperty") {
          return hasOwnProperty2;
        }
      }
      const res = Reflect.get(
        target,
        key,
        isRef2(target) ? target : receiver
      );
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (isShallow2) {
        return res;
      }
      if (isRef2(res)) {
        const value = targetIsArray && isIntegerKey(key) ? res : res.value;
        return isReadonly2 && isObject(value) ? readonly(value) : value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    }
  };
  var MutableReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(false, isShallow2);
    }
    set(target, key, value, receiver) {
      let oldValue = target[key];
      if (!this._isShallow) {
        const isOldValueReadonly = isReadonly(oldValue);
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray(target) && isRef2(oldValue) && !isRef2(value)) {
          if (isOldValueReadonly) {
            if (true) {
              warn(
                `Set operation on key "${String(key)}" failed: target is readonly.`,
                target[key]
              );
            }
            return true;
          } else {
            oldValue.value = value;
            return true;
          }
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(
        target,
        key,
        value,
        isRef2(target) ? target : receiver
      );
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    }
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    has(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    ownKeys(target) {
      track(
        target,
        "iterate",
        isArray(target) ? "length" : ITERATE_KEY
      );
      return Reflect.ownKeys(target);
    }
  };
  var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(true, isShallow2);
    }
    set(target, key) {
      if (true) {
        warn(
          `Set operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
    deleteProperty(target, key) {
      if (true) {
        warn(
          `Delete operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
  };
  var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
  var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
  var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
  var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        warn(
          `${capitalize(type)} operation ${key}failed: target is readonly.`,
          toRaw(this)
        );
      }
      return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
  }
  function createInstrumentations(readonly2, shallow) {
    const instrumentations = {
      get(key) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has } = getProto(rawTarget);
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
        if (has.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      },
      get size() {
        const target = this["__v_raw"];
        !readonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
        return target.size;
      },
      has(key) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const rawKey = toRaw(key);
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      },
      forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
        !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      }
    };
    extend(
      instrumentations,
      readonly2 ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
      } : {
        add(value) {
          if (!shallow && !isShallow(value) && !isReadonly(value)) {
            value = toRaw(value);
          }
          const target = toRaw(this);
          const proto = getProto(target);
          const hadKey = proto.has.call(target, value);
          if (!hadKey) {
            target.add(value);
            trigger(target, "add", value, value);
          }
          return this;
        },
        set(key, value) {
          if (!shallow && !isShallow(value) && !isReadonly(value)) {
            value = toRaw(value);
          }
          const target = toRaw(this);
          const { has, get } = getProto(target);
          let hadKey = has.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has.call(target, key);
          } else if (true) {
            checkIdentityKeys(target, has, key);
          }
          const oldValue = get.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
          return this;
        },
        delete(key) {
          const target = toRaw(this);
          const { has, get } = getProto(target);
          let hadKey = has.call(target, key);
          if (!hadKey) {
            key = toRaw(key);
            hadKey = has.call(target, key);
          } else if (true) {
            checkIdentityKeys(target, has, key);
          }
          const oldValue = get ? get.call(target, key) : void 0;
          const result = target.delete(key);
          if (hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        },
        clear() {
          const target = toRaw(this);
          const hadItems = target.size !== 0;
          const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
          const result = target.clear();
          if (hadItems) {
            trigger(
              target,
              "clear",
              void 0,
              void 0,
              oldTarget
            );
          }
          return result;
        }
      }
    );
    const iteratorMethods = [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ];
    iteratorMethods.forEach((method) => {
      instrumentations[method] = createIterableMethod(method, readonly2, shallow);
    });
    return instrumentations;
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(
        hasOwn(instrumentations, key) && key in target ? instrumentations : target,
        key,
        receiver
      );
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
      const type = toRawType(target);
      warn(
        `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap
    );
  }
  function shallowReactive(target) {
    return createReactiveObject(
      target,
      false,
      shallowReactiveHandlers,
      shallowCollectionHandlers,
      shallowReactiveMap
    );
  }
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap
    );
  }
  function shallowReadonly(target) {
    return createReactiveObject(
      target,
      true,
      shallowReadonlyHandlers,
      shallowReadonlyCollectionHandlers,
      shallowReadonlyMap
    );
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        warn(
          `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
            target
          )}`
        );
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const proxy = new Proxy(
      target,
      targetType === 2 ? collectionHandlers : baseHandlers
    );
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
      def(value, "__v_skip", true);
    }
    return value;
  }
  var toReactive = (value) => isObject(value) ? reactive(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  function isRef2(r) {
    return r ? r["__v_isRef"] === true : false;
  }
  function ref(value) {
    return createRef(value, false);
  }
  function createRef(rawValue, shallow) {
    if (isRef2(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  var RefImpl = class {
    constructor(value, isShallow2) {
      this.dep = new Dep();
      this["__v_isRef"] = true;
      this["__v_isShallow"] = false;
      this._rawValue = isShallow2 ? value : toRaw(value);
      this._value = isShallow2 ? value : toReactive(value);
      this["__v_isShallow"] = isShallow2;
    }
    get value() {
      if (true) {
        this.dep.track({
          target: this,
          type: "get",
          key: "value"
        });
      } else {
        this.dep.track();
      }
      return this._value;
    }
    set value(newValue) {
      const oldValue = this._rawValue;
      const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
      newValue = useDirectValue ? newValue : toRaw(newValue);
      if (hasChanged(newValue, oldValue)) {
        this._rawValue = newValue;
        this._value = useDirectValue ? newValue : toReactive(newValue);
        if (true) {
          this.dep.trigger({
            target: this,
            type: "set",
            key: "value",
            newValue,
            oldValue
          });
        } else {
          this.dep.trigger();
        }
      }
    }
  };
  function unref(ref2) {
    return isRef2(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef2(oldValue) && !isRef2(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var ComputedRefImpl = class {
    constructor(fn, setter, isSSR) {
      this.fn = fn;
      this.setter = setter;
      this._value = void 0;
      this.dep = new Dep(this);
      this.__v_isRef = true;
      this.deps = void 0;
      this.depsTail = void 0;
      this.flags = 16;
      this.globalVersion = globalVersion - 1;
      this.next = void 0;
      this.effect = this;
      this["__v_isReadonly"] = !setter;
      this.isSSR = isSSR;
    }
    notify() {
      this.flags |= 16;
      if (!(this.flags & 8) && activeSub !== this) {
        batch(this, true);
        return true;
      } else if (true)
        ;
    }
    get value() {
      const link = true ? this.dep.track({
        target: this,
        type: "get",
        key: "value"
      }) : this.dep.track();
      refreshComputed(this);
      if (link) {
        link.version = this.dep.version;
      }
      return this._value;
    }
    set value(newValue) {
      if (this.setter) {
        this.setter(newValue);
      } else if (true) {
        warn("Write operation failed: computed value is readonly");
      }
    }
  };
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if (isFunction(getterOrOptions)) {
      getter = getterOrOptions;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR);
    if (debugOptions && !isSSR) {
      cRef.onTrack = debugOptions.onTrack;
      cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  var INITIAL_WATCHER_VALUE = {};
  var cleanupMap = /* @__PURE__ */ new WeakMap();
  var activeWatcher = void 0;
  function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
    if (owner) {
      let cleanups = cleanupMap.get(owner);
      if (!cleanups)
        cleanupMap.set(owner, cleanups = []);
      cleanups.push(cleanupFn);
    } else if (!failSilently) {
      warn(
        `onWatcherCleanup() was called when there was no active watcher to associate with.`
      );
    }
  }
  function watch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options;
    const warnInvalidSource = (s) => {
      (options.onWarn || warn)(
        `Invalid watch source: `,
        s,
        `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
      );
    };
    const reactiveGetter = (source2) => {
      if (deep)
        return source2;
      if (isShallow(source2) || deep === false || deep === 0)
        return traverse(source2, 1);
      return traverse(source2);
    };
    let effect2;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef2(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => reactiveGetter(source);
      forceTrigger = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
      getter = () => source.map((s) => {
        if (isRef2(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return reactiveGetter(s);
        } else if (isFunction(s)) {
          return call ? call(s, 2) : s();
        } else {
          warnInvalidSource(s);
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = call ? () => call(source, 2) : source;
      } else {
        getter = () => {
          if (cleanup) {
            pauseTracking();
            try {
              cleanup();
            } finally {
              resetTracking();
            }
          }
          const currentEffect = activeWatcher;
          activeWatcher = effect2;
          try {
            return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
          } finally {
            activeWatcher = currentEffect;
          }
        };
      }
    } else {
      getter = NOOP;
      warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      const depth = deep === true ? Infinity : deep;
      getter = () => traverse(baseGetter(), depth);
    }
    const scope = getCurrentScope();
    const watchHandle = () => {
      effect2.stop();
      if (scope && scope.active) {
        remove(scope.effects, effect2);
      }
    };
    if (once && cb) {
      const _cb = cb;
      cb = (...args) => {
        _cb(...args);
        watchHandle();
      };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun) => {
      if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
          if (cleanup) {
            cleanup();
          }
          const currentWatcher = activeWatcher;
          activeWatcher = effect2;
          try {
            const args = [
              newValue,
              oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
              boundCleanup
            ];
            oldValue = newValue;
            call ? call(cb, 3, args) : cb(...args);
          } finally {
            activeWatcher = currentWatcher;
          }
        }
      } else {
        effect2.run();
      }
    };
    if (augmentJob) {
      augmentJob(job);
    }
    effect2 = new ReactiveEffect(getter);
    effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
    boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
    cleanup = effect2.onStop = () => {
      const cleanups = cleanupMap.get(effect2);
      if (cleanups) {
        if (call) {
          call(cleanups, 4);
        } else {
          for (const cleanup2 of cleanups)
            cleanup2();
        }
        cleanupMap.delete(effect2);
      }
    };
    if (true) {
      effect2.onTrack = options.onTrack;
      effect2.onTrigger = options.onTrigger;
    }
    if (cb) {
      if (immediate) {
        job(true);
      } else {
        oldValue = effect2.run();
      }
    } else if (scheduler) {
      scheduler(job.bind(null, true), true);
    } else {
      effect2.run();
    }
    watchHandle.pause = effect2.pause.bind(effect2);
    watchHandle.resume = effect2.resume.bind(effect2);
    watchHandle.stop = watchHandle;
    return watchHandle;
  }
  function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen = seen || /* @__PURE__ */ new Map();
    if ((seen.get(value) || 0) >= depth) {
      return value;
    }
    seen.set(value, depth);
    depth--;
    if (isRef2(value)) {
      traverse(value.value, depth, seen);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], depth, seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, depth, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen);
      }
      for (const key of Object.getOwnPropertySymbols(value)) {
        if (Object.prototype.propertyIsEnumerable.call(value, key)) {
          traverse(value[key], depth, seen);
        }
      }
    }
    return value;
  }

  // ../do_dental/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  var stack = [];
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  var isWarning = false;
  function warn$1(msg, ...args) {
    if (isWarning)
      return;
    isWarning = true;
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(
        appWarnHandler,
        instance,
        11,
        [
          msg + args.map((a) => {
            var _a, _b;
            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
          }).join(""),
          instance && instance.proxy,
          trace.map(
            ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
          ).join("\n"),
          trace
        ]
      );
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
    isWarning = false;
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(
      vnode.component,
      vnode.type,
      isRoot
    )}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef2(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  function assertNumber(val, type) {
    if (false)
      return;
    if (val === void 0) {
      return;
    } else if (typeof val !== "number") {
      warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn$1(`${type} is NaN - the duration expression might be incorrect.`);
    }
  }
  var ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush",
    [15]: "component update",
    [16]: "app unmount cleanup function"
  };
  function callWithErrorHandling(fn, instance, type, args) {
    try {
      return args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    if (isArray(fn)) {
      const values = [];
      for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
    } else if (true) {
      warn$1(
        `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
      );
    }
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = true ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      if (errorHandler) {
        pauseTracking();
        callWithErrorHandling(errorHandler, null, 10, [
          err,
          exposedInstance,
          errorInfo
        ]);
        resetTracking();
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
  }
  function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
    if (true) {
      const info = ErrorTypeStrings$1[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    } else if (throwInProd) {
      throw err;
    } else {
      console.error(err);
    }
  }
  var queue = [];
  var flushIndex = -1;
  var pendingPostFlushCbs = [];
  var activePostFlushCbs = null;
  var postFlushIndex = 0;
  var resolvedPromise = /* @__PURE__ */ Promise.resolve();
  var currentFlushPromise = null;
  var RECURSION_LIMIT = 100;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJob = queue[middle];
      const middleJobId = getId(middleJob);
      if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }
    return start;
  }
  function queueJob(job) {
    if (!(job.flags & 1)) {
      const jobId = getId(job);
      const lastJob = queue[queue.length - 1];
      if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(jobId), 0, job);
      }
      job.flags |= 1;
      queueFlush();
    }
  }
  function queueFlush() {
    if (!currentFlushPromise) {
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (activePostFlushCbs && cb.id === -1) {
        activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
      } else if (!(cb.flags & 1)) {
        pendingPostFlushCbs.push(cb);
        cb.flags |= 1;
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (; i < queue.length; i++) {
      const cb = queue[i];
      if (cb && cb.flags & 2) {
        if (instance && cb.id !== instance.uid) {
          continue;
        }
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        queue.splice(i, 1);
        i--;
        if (cb.flags & 4) {
          cb.flags &= -2;
        }
        cb();
        if (!(cb.flags & 4)) {
          cb.flags &= -2;
        }
      }
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)].sort(
        (a, b) => getId(a) - getId(b)
      );
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      if (true) {
        seen = seen || /* @__PURE__ */ new Map();
      }
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        const cb = activePostFlushCbs[postFlushIndex];
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        if (cb.flags & 4) {
          cb.flags &= -2;
        }
        if (!(cb.flags & 8))
          cb();
        cb.flags &= -2;
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
  function flushJobs(seen) {
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    const check = true ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && !(job.flags & 8)) {
          if (check(job)) {
            continue;
          }
          if (job.flags & 4) {
            job.flags &= ~1;
          }
          callWithErrorHandling(
            job,
            job.i,
            job.i ? 15 : 14
          );
          if (!(job.flags & 4)) {
            job.flags &= ~1;
          }
        }
      }
    } finally {
      for (; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job) {
          job.flags &= -2;
        }
      }
      flushIndex = -1;
      queue.length = 0;
      flushPostFlushCbs(seen);
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  function checkRecursiveUpdates(seen, fn) {
    const count = seen.get(fn) || 0;
    if (count > RECURSION_LIMIT) {
      const instance = fn.i;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    }
    seen.set(fn, count + 1);
    return false;
  }
  var isHmrUpdating = false;
  var hmrDirtyComponents = /* @__PURE__ */ new Map();
  if (true) {
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  var map = /* @__PURE__ */ new Map();
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render = newRender;
    [...record.instances].forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
        normalizeClassComponent(instance.type).render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      if (!(instance.job.flags & 8)) {
        instance.update();
      }
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
      return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [...record.instances];
    for (let i = 0; i < instances.length; i++) {
      const instance = instances[i];
      const oldComp = normalizeClassComponent(instance.type);
      let dirtyInstances = hmrDirtyComponents.get(oldComp);
      if (!dirtyInstances) {
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
      }
      dirtyInstances.add(instance);
      instance.appContext.propsCache.delete(instance.type);
      instance.appContext.emitsCache.delete(instance.type);
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        dirtyInstances.add(instance);
        instance.ceReload(newComp.styles);
        dirtyInstances.delete(instance);
      } else if (instance.parent) {
        queueJob(() => {
          if (!(instance.job.flags & 8)) {
            isHmrUpdating = true;
            instance.parent.update();
            isHmrUpdating = false;
            dirtyInstances.delete(instance);
          }
        });
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        console.warn(
          "[HMR] Root or manually mounted instance modified. Full reload required."
        );
      }
      if (instance.root.ce && instance !== instance.root) {
        instance.root.ce._removeChildStyle(oldComp);
      }
    }
    queuePostFlushCb(() => {
      hmrDirtyComponents.clear();
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !== "__file" && !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn) {
    return (id, arg) => {
      try {
        return fn(id, arg);
      } catch (e) {
        console.error(e);
        console.warn(
          `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
        );
      }
    };
  }
  var devtools$1;
  var buffer = [];
  var devtoolsNotInstalled = false;
  function emit$1(event, ...args) {
    if (devtools$1) {
      devtools$1.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
      devtools$1.enabled = true;
      buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
      buffer = [];
    } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
      const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) => {
        setDevtoolsHook$1(newHook, target);
      });
      setTimeout(() => {
        if (!devtools$1) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled = true;
      buffer = [];
    }
  }
  function devtoolsInitApp(app, version2) {
    emit$1("app:init", app, version2, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    emit$1("app:unmount", app);
  }
  var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
  var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
  var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:removed"
  );
  var devtoolsComponentRemoved = (component) => {
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && !devtools$1.cleanupBuffer(component)) {
      _devtoolsComponentRemoved(component);
    }
  };
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      emit$1(
        hook,
        component.appContext.app,
        component.uid,
        component.parent ? component.parent.uid : void 0,
        component
      );
    };
  }
  var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
  var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit$1(
      "component:emit",
      component.appContext.app,
      component,
      event,
      params
    );
  }
  var currentRenderingInstance = null;
  var currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      let res;
      try {
        res = fn(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      if (true) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn$1("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
      warn$1(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance = getComponentPublicInstance(currentRenderingInstance);
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (dir) {
        if (isFunction(dir)) {
          dir = {
            mounted: dir,
            updated: dir
          };
        }
        if (dir.deep) {
          traverse(value);
        }
        bindings.push({
          dir,
          instance,
          value,
          oldValue: void 0,
          arg,
          modifiers
        });
      }
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  var TeleportEndKey = Symbol("_vte");
  var isTeleport = (type) => type.__isTeleport;
  var leaveCbKey = Symbol("_leaveCb");
  var enterCbKey = Symbol("_enterCb");
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  var TransitionHookValidator = [Function, Array];
  var BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  };
  var recursiveGetSubtree = (instance) => {
    const subTree = instance.subTree;
    return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
  };
  var BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      return () => {
        const children = slots.default && getTransitionRawChildren(slots.default(), true);
        if (!children || !children.length) {
          return;
        }
        const child = findNonCommentChild(children);
        const rawProps = toRaw(props);
        const { mode } = rawProps;
        if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
          warn$1(`invalid <transition> mode: ${mode}`);
        }
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        const innerChild = getInnerChild$1(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        let enterHooks = resolveTransitionHooks(
          innerChild,
          rawProps,
          state,
          instance,
          (hooks) => enterHooks = hooks
        );
        if (innerChild.type !== Comment) {
          setTransitionHooks(innerChild, enterHooks);
        }
        let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
        if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
          let leavingHooks = resolveTransitionHooks(
            oldInnerChild,
            rawProps,
            state,
            instance
          );
          setTransitionHooks(oldInnerChild, leavingHooks);
          if (mode === "out-in" && innerChild.type !== Comment) {
            state.isLeaving = true;
            leavingHooks.afterLeave = () => {
              state.isLeaving = false;
              if (!(instance.job.flags & 8)) {
                instance.update();
              }
              delete leavingHooks.afterLeave;
              oldInnerChild = void 0;
            };
            return emptyPlaceholder(child);
          } else if (mode === "in-out" && innerChild.type !== Comment) {
            leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
              const leavingVNodesCache = getLeavingNodesForType(
                state,
                oldInnerChild
              );
              leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
              el[leaveCbKey] = () => {
                earlyRemove();
                el[leaveCbKey] = void 0;
                delete enterHooks.delayedLeave;
                oldInnerChild = void 0;
              };
              enterHooks.delayedLeave = () => {
                delayedLeave();
                delete enterHooks.delayedLeave;
                oldInnerChild = void 0;
              };
            };
          } else {
            oldInnerChild = void 0;
          }
        } else if (oldInnerChild) {
          oldInnerChild = void 0;
        }
        return child;
      };
    }
  };
  function findNonCommentChild(children) {
    let child = children[0];
    if (children.length > 1) {
      let hasFound = false;
      for (const c of children) {
        if (c.type !== Comment) {
          if (hasFound) {
            warn$1(
              "<transition> can only be used on a single element or component. Use <transition-group> for lists."
            );
            break;
          }
          child = c;
          hasFound = true;
          if (false)
            break;
        }
      }
    }
    return child;
  }
  var BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance, postClone) {
    const {
      appear,
      mode,
      persisted = false,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onEnterCancelled,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      onLeaveCancelled,
      onBeforeAppear,
      onAppear,
      onAfterAppear,
      onAppearCancelled
    } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook3 = (hook, args) => {
      hook && callWithAsyncErrorHandling(
        hook,
        instance,
        9,
        args
      );
    };
    const callAsyncHook = (hook, args) => {
      const done = args[1];
      callHook3(hook, args);
      if (isArray(hook)) {
        if (hook.every((hook2) => hook2.length <= 1))
          done();
      } else if (hook.length <= 1) {
        done();
      }
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el[leaveCbKey]) {
          el[leaveCbKey](
            true
          );
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
          leavingVNode.el[leaveCbKey]();
        }
        callHook3(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el[enterCbKey] = (cancelled) => {
          if (called)
            return;
          called = true;
          if (cancelled) {
            callHook3(cancelHook, [el]);
          } else {
            callHook3(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el[enterCbKey] = void 0;
        };
        if (hook) {
          callAsyncHook(hook, [el, done]);
        } else {
          done();
        }
      },
      leave(el, remove2) {
        const key2 = String(vnode.key);
        if (el[enterCbKey]) {
          el[enterCbKey](
            true
          );
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook3(onBeforeLeave, [el]);
        let called = false;
        const done = el[leaveCbKey] = (cancelled) => {
          if (called)
            return;
          called = true;
          remove2();
          if (cancelled) {
            callHook3(onLeaveCancelled, [el]);
          } else {
            callHook3(onAfterLeave, [el]);
          }
          el[leaveCbKey] = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          callAsyncHook(onLeave, [el, done]);
        } else {
          done();
        }
      },
      clone(vnode2) {
        const hooks2 = resolveTransitionHooks(
          vnode2,
          props,
          state,
          instance,
          postClone
        );
        if (postClone)
          postClone(hooks2);
        return hooks2;
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getInnerChild$1(vnode) {
    if (!isKeepAlive(vnode)) {
      if (isTeleport(vnode.type) && vnode.children) {
        return findNonCommentChild(vnode.children);
      }
      return vnode;
    }
    if (vnode.component) {
      return vnode.component.subTree;
    }
    const { shapeFlag, children } = vnode;
    if (children) {
      if (shapeFlag & 16) {
        return children[0];
      }
      if (shapeFlag & 32 && isFunction(children.default)) {
        return children.default();
      }
    }
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      vnode.transition = hooks;
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
      if (child.type === Fragment) {
        if (child.patchFlag & 128)
          keyedFragmentCount++;
        ret = ret.concat(
          getTransitionRawChildren(child.children, keepComment, key)
        );
      } else if (keepComment || child.type !== Comment) {
        ret.push(key != null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2;
      }
    }
    return ret;
  }
  function markAsyncBoundary(instance) {
    instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
  }
  var knownTemplateRefs = /* @__PURE__ */ new WeakSet();
  var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach(
        (r, i) => setRef(
          r,
          oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
          parentSuspense,
          vnode,
          isUnmount
        )
      );
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
        setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
      }
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (!owner) {
      warn$1(
        `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
      );
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    const rawSetupState = toRaw(setupState);
    const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
      if (true) {
        if (hasOwn(rawSetupState, key) && !isRef2(rawSetupState[key])) {
          warn$1(
            `Template ref "${key}" used on a non-ref value. It will not work in the production build.`
          );
        }
        if (knownTemplateRefs.has(rawSetupState[key])) {
          return false;
        }
      }
      return hasOwn(rawSetupState, key);
    };
    const canSetRef = (ref22) => {
      return !knownTemplateRefs.has(ref22);
    };
    if (oldRef != null && oldRef !== ref2) {
      invalidatePendingSetRef(oldRawRef);
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (canSetSetupRef(oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef2(oldRef)) {
        if (canSetRef(oldRef)) {
          oldRef.value = null;
        }
        const oldRawRefAtom = oldRawRef;
        if (oldRawRefAtom.k)
          refs[oldRawRefAtom.k] = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef2(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : canSetRef(ref2) || !rawRef.k ? ref2.value : refs[rawRef.k];
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (canSetSetupRef(ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  const newVal = [refValue];
                  if (canSetRef(ref2)) {
                    ref2.value = newVal;
                  }
                  if (rawRef.k)
                    refs[rawRef.k] = newVal;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (canSetSetupRef(ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            if (canSetRef(ref2)) {
              ref2.value = value;
            }
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else if (true) {
            warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
          }
        };
        if (value) {
          const job = () => {
            doSet();
            pendingSetRefMap.delete(rawRef);
          };
          job.id = -1;
          pendingSetRefMap.set(rawRef, job);
          queuePostRenderEffect(job, parentSuspense);
        } else {
          invalidatePendingSetRef(rawRef);
          doSet();
        }
      } else if (true) {
        warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
      }
    }
  }
  function invalidatePendingSetRef(rawRef) {
    const pendingSetRef = pendingSetRefMap.get(rawRef);
    if (pendingSetRef) {
      pendingSetRef.flags |= 8;
      pendingSetRefMap.delete(rawRef);
    }
  }
  var requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
  var cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
  var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        pauseTracking();
        const reset = setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        reset();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (true) {
      const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
      warn$1(
        `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
      );
    }
  }
  var createHook = (lifecycle) => (hook, target = currentInstance) => {
    if (!isInSSRComponentSetup || lifecycle === "sp") {
      injectHook(lifecycle, (...args) => hook(...args), target);
    }
  };
  var onBeforeMount = createHook("bm");
  var onMounted = createHook("m");
  var onBeforeUpdate = createHook(
    "bu"
  );
  var onUpdated = createHook("u");
  var onBeforeUnmount = createHook(
    "bum"
  );
  var onUnmounted = createHook("um");
  var onServerPrefetch = createHook(
    "sp"
  );
  var onRenderTriggered = createHook("rtg");
  var onRenderTracked = createHook("rtc");
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    const sourceIsArray = isArray(source);
    if (sourceIsArray || isString(source)) {
      const sourceIsReactiveArray = sourceIsArray && isReactive(source);
      let needsWrap = false;
      let isReadonlySource = false;
      if (sourceIsReactiveArray) {
        needsWrap = !isShallow(source);
        isReadonlySource = isReadonly(source);
        source = shallowReadArray(source);
      }
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(
          needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
          i,
          void 0,
          cached && cached[i]
        );
      }
    } else if (typeof source === "number") {
      if (!Number.isInteger(source)) {
        warn$1(`The v-for range expect an integer value but got ${source}.`);
      }
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(
          source,
          (item, i) => renderItem(item, i, void 0, cached && cached[i])
        );
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i, cached && cached[i]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  var getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getComponentPublicInstance(i);
    return getPublicInstance(i.parent);
  };
  var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => true ? shallowReadonly(i.props) : i.props,
    $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
    $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => true ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => true ? instanceWatch.bind(i) : NOOP
  });
  var isReservedPrefix = (key) => key === "_" || key === "$";
  var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
  var PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      if (key === "__v_skip") {
        return true;
      }
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      if (key === "__isVue") {
        return true;
      }
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 1:
              return setupState[key];
            case 2:
              return data[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 2;
          return data[key];
        } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance.attrs, "get", "");
          markAttrsAccessed();
        } else if (key === "$slots") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
        {
          return globalProperties[key];
        }
      } else if (currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) {
        if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
          warn$1(
            `Property ${JSON.stringify(
              key
            )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
          );
        } else if (instance === currentRenderingInstance) {
          warn$1(
            `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
          );
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
        warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
        return false;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        warn$1(
          `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
        );
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({
      _: { data, setupState, accessCache, ctx, appContext, propsOptions, type }
    }, key) {
      let normalizedProps, cssModules;
      return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn$1(
        `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
      );
      return Reflect.ownKeys(target);
    };
  }
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const {
      ctx,
      propsOptions: [propsOptions]
    } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn$1(
            `setup() return property ${JSON.stringify(
              key
            )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
          );
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => setupState[key],
          set: NOOP
        });
      }
    });
  }
  function normalizePropsOrEmits(props) {
    return isArray(props) ? props.reduce(
      (normalized, p2) => (normalized[p2] = null, normalized),
      {}
    ) : props;
  }
  function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  var shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance, "bc");
    }
    const {
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render: render4,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      expose,
      inheritAttrs,
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = true ? createDuplicateChecker() : null;
    if (true) {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          if (true) {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            ctx[key] = methodHandler.bind(publicThis);
          }
          if (true) {
            checkDuplicateProperties("Methods", key);
          }
        } else if (true) {
          warn$1(
            `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
          );
        }
      }
    }
    if (dataOptions) {
      if (!isFunction(dataOptions)) {
        warn$1(
          `The data option must be a function. Plain object usage is no longer supported.`
        );
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1(
          `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
        );
      }
      if (!isObject(data)) {
        warn$1(`data() should return an object.`);
      } else {
        instance.data = reactive(data);
        if (true) {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get === NOOP) {
          warn$1(`Computed property "${key}" has no getter.`);
        }
        const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : true ? () => {
          warn$1(
            `Write operation failed: computed property "${key}" is readonly.`
          );
        } : NOOP;
        const c = computed2({
          get,
          set
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
        if (true) {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val,
            enumerable: true
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render4 && instance.render === NOOP) {
      instance.render = render4;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
    if (serverPrefetch) {
      markAsyncBoundary(instance);
    }
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef2(injected)) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
      if (true) {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(
      isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
      instance,
      type
    );
  }
  function createWatcher(raw, ctx, publicThis, key) {
    let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        {
          watch2(getter, handler);
        }
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      {
        watch2(getter, raw.bind(publicThis));
      }
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch2(getter, handler, raw);
        } else if (true) {
          warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else if (true) {
      warn$1(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const {
      mixins: globalMixins,
      optionsCache: cache,
      config: { optionMergeStrategies }
    } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach(
          (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
        );
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach(
        (m) => mergeOptions(to, m, strats, true)
      );
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
        warn$1(
          `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
        );
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    watch: mergeWatchOptions,
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(
        isFunction(to) ? to.call(this, this) : to,
        isFunction(from) ? from.call(this, this) : from
      );
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
  }
  function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
      if (isArray(to) && isArray(from)) {
        return [.../* @__PURE__ */ new Set([...to, ...from])];
      }
      return extend(
        /* @__PURE__ */ Object.create(null),
        normalizePropsOrEmits(to),
        normalizePropsOrEmits(from != null ? from : {})
      );
    } else {
      return from;
    }
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  var uid$1 = 0;
  function createAppAPI(render4, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = extend({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        warn$1(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new WeakSet();
      const pluginCleanupFns = [];
      let isMounted = false;
      const app = context.app = {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          if (true) {
            warn$1(
              `app.config cannot be replaced. Modify individual options instead.`
            );
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn$1(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else if (true) {
            warn$1(
              `A plugin must either be a function or an object with an "install" function.`
            );
          }
          return app;
        },
        mixin(mixin) {
          if (true) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (true) {
              warn$1(
                "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
              );
            }
          } else if (true) {
            warn$1("Mixins are only available in builds supporting Options API");
          }
          return app;
        },
        component(name, component) {
          if (true) {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn$1(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (true) {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn$1(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, namespace) {
          if (!isMounted) {
            if (rootContainer.__vue_app__) {
              warn$1(
                `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
              );
            }
            const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (namespace === true) {
              namespace = "svg";
            } else if (namespace === false) {
              namespace = void 0;
            }
            if (true) {
              context.reload = () => {
                const cloned = cloneVNode(vnode);
                cloned.el = null;
                render4(cloned, rootContainer, namespace);
              };
            }
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render4(vnode, rootContainer, namespace);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            if (true) {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return getComponentPublicInstance(vnode.component);
          } else if (true) {
            warn$1(
              `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
            );
          }
        },
        onUnmount(cleanupFn) {
          if (typeof cleanupFn !== "function") {
            warn$1(
              `Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`
            );
          }
          pluginCleanupFns.push(cleanupFn);
        },
        unmount() {
          if (isMounted) {
            callWithAsyncErrorHandling(
              pluginCleanupFns,
              app._instance,
              16
            );
            render4(null, app._container);
            if (true) {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else if (true) {
            warn$1(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            if (hasOwn(context.provides, key)) {
              warn$1(
                `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
              );
            } else {
              warn$1(
                `App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`
              );
            }
          }
          context.provides[key] = value;
          return app;
        },
        runWithContext(fn) {
          const lastApp = currentApp;
          currentApp = app;
          try {
            return fn();
          } finally {
            currentApp = lastApp;
          }
        }
      };
      return app;
    };
  }
  var currentApp = null;
  function provide(key, value) {
    if (!currentInstance) {
      if (true) {
        warn$1(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = getCurrentInstance();
    if (instance || currentApp) {
      let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
      } else if (true) {
        warn$1(`injection "${String(key)}" not found.`);
      }
    } else if (true) {
      warn$1(`inject() can only be used inside setup() or functional components.`);
    }
  }
  var internalObjectProto = {};
  var createInternalObject = () => Object.create(internalObjectProto);
  var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function isInHmrContext(instance) {
    while (instance) {
      if (instance.type.__hmrId)
        return true;
      instance = instance.parent;
    }
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const {
      props,
      attrs,
      vnode: { patchFlag }
    } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance.attrs, "set", "");
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(
          options,
          rawCurrentProps,
          key,
          castValues[key],
          instance,
          !hasOwn(castValues, key)
        );
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            const reset = setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(
              null,
              props
            );
            reset();
          }
        } else {
          value = defaultValue;
        }
        if (instance.ce) {
          instance.ce._setProp(key, value);
        }
      }
      if (opt[0]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[1] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  var mixinPropsCache = /* @__PURE__ */ new WeakMap();
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = asMixin ? mixinPropsCache : appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (!isString(raw[i])) {
          warn$1(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn$1(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
          const propType = prop.type;
          let shouldCast = false;
          let shouldCastTrue = true;
          if (isArray(propType)) {
            for (let index = 0; index < propType.length; ++index) {
              const type = propType[index];
              const typeName = isFunction(type) && type.name;
              if (typeName === "Boolean") {
                shouldCast = true;
                break;
              } else if (typeName === "String") {
                shouldCastTrue = false;
              }
            }
          } else {
            shouldCast = isFunction(propType) && propType.name === "Boolean";
          }
          prop[0] = shouldCast;
          prop[1] = shouldCastTrue;
          if (shouldCast || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$" && !isReservedProp(key)) {
      return true;
    } else if (true) {
      warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    if (ctor === null) {
      return "null";
    }
    if (typeof ctor === "function") {
      return ctor.name || "";
    } else if (typeof ctor === "object") {
      const name = ctor.constructor && ctor.constructor.name;
      return name || "";
    }
    return "";
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    const camelizePropsKey = Object.keys(rawProps).map((key) => camelize(key));
    for (const key in options) {
      let opt = options[key];
      if (opt == null)
        continue;
      validateProp(
        key,
        resolvedValues[key],
        opt,
        true ? shallowReadonly(resolvedValues) : resolvedValues,
        !camelizePropsKey.includes(key)
      );
    }
  }
  function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
      warn$1('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !required) {
      return;
    }
    if (type != null && type !== true && !skipCheck) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i = 0; i < types.length && !isValid; i++) {
        const { valid, expectedType } = assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn$1(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value, props)) {
      warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  var isSimpleType = /* @__PURE__ */ makeMap(
    "String,Number,Boolean,Function,Symbol,BigInt"
  );
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (expectedType === "null") {
      valid = value === null;
    } else if (isSimpleType(expectedType)) {
      const t = typeof value;
      valid = t === expectedType.toLowerCase();
      if (!valid && t === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) {
      return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    }
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }
  var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
  var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  var normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized = withCtx((...args) => {
      if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
        warn$1(
          `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
        );
      }
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  var normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        if (true) {
          warn$1(
            `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
          );
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  var normalizeVNodeSlots = (instance, children) => {
    if (!isKeepAlive(instance.vnode) && true) {
      warn$1(
        `Non-function value encountered for default slot. Prefer function slots for better performance.`
      );
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  var assignSlots = (slots, children, optimized) => {
    for (const key in children) {
      if (optimized || !isInternalKey(key)) {
        slots[key] = children[key];
      }
    }
  };
  var initSlots = (instance, children, optimized) => {
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        assignSlots(slots, children, optimized);
        if (optimized) {
          def(slots, "_", type, true);
        }
      } else {
        normalizeObjectSlots(children, slots);
      }
    } else if (children) {
      normalizeVNodeSlots(instance, children);
    }
  };
  var updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (isHmrUpdating) {
          assignSlots(slots, children, optimized);
          trigger(instance, "set", "$slots");
        } else if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          assignSlots(slots, children, optimized);
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
          delete slots[key];
        }
      }
    }
  };
  var supported;
  var perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (true) {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      const measureName = `<${formatComponentName(instance, instance.type)}> ${type}`;
      perf.mark(endTag);
      perf.measure(measureName, startTag, endTag);
      perf.clearMeasures(measureName);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    if (true) {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function initFeatureFlags() {
    const needWarn = [];
    if (false) {
      needWarn.push(`__VUE_OPTIONS_API__`);
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (false) {
      needWarn.push(`__VUE_PROD_DEVTOOLS__`);
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
      needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
      getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (needWarn.length) {
      const multi = needWarn.length > 1;
      console.warn(
        `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
      );
    }
  }
  var queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (true) {
      setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const {
      insert: hostInsert,
      remove: hostRemove,
      patchProp: hostPatchProp,
      createElement: hostCreateElement,
      createText: hostCreateText,
      createComment: hostCreateComment,
      setText: hostSetText,
      setElementText: hostSetElementText,
      parentNode: hostParentNode,
      nextSibling: hostNextSibling,
      setScopeId: hostSetScopeId = NOOP,
      insertStaticContent: hostInsertStaticContent
    } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, namespace);
          } else if (true) {
            patchStaticNode(n1, n2, container, namespace);
          }
          break;
        case Fragment:
          processFragment(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          break;
        default:
          if (shapeFlag & 1) {
            processElement(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 6) {
            processComponent(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 64) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (shapeFlag & 128) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (true) {
            warn$1("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      } else if (ref2 == null && n1 && n1.ref != null) {
        setRef(n1.ref, null, parentSuspense, n1, true);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateText(n2.children),
          container,
          anchor
        );
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateComment(n2.children || ""),
          container,
          anchor
        );
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, namespace) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace,
        n2.el,
        n2.anchor
      );
    };
    const patchStaticNode = (n1, n2, container, namespace) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          namespace
        );
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      if (n2.type === "svg") {
        namespace = "svg";
      } else if (n2.type === "math") {
        namespace = "mathml";
      }
      if (n1 == null) {
        mountElement(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { props, shapeFlag, transition, dirs } = vnode;
      el = vnode.el = hostCreateElement(
        vnode.type,
        namespace,
        props && props.is,
        props
      );
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(
          vnode.children,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(vnode, namespace),
          slotScopeIds,
          optimized
        );
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], namespace, parentComponent);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value, namespace);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      if (true) {
        def(el, "__vnode", vnode, true);
        def(el, "__vueParentComponent", parentComponent, true);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = needTransition(parentSuspense, transition);
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
          const parentVNode = parentComponent.vnode;
          setScopeId(
            el,
            parentVNode,
            parentVNode.scopeId,
            parentVNode.slotScopeIds,
            parentComponent.parent
          );
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(
          null,
          child,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      if (true) {
        el.__vnode = n2;
      }
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
        hostSetElementText(el, "");
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          el,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds,
          false
        );
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, oldProps, newProps, parentComponent, namespace);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, namespace);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, namespace, parentComponent);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : fallbackContainer;
        patch(
          oldVNode,
          newVNode,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          true
        );
      }
    };
    const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(
                el,
                key,
                oldProps[key],
                null,
                namespace,
                parentComponent
              );
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, namespace, parentComponent);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (isHmrUpdating || patchFlag & 2048) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(
          n2.children || [],
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            container,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          if (true) {
            traverseStaticChildren(n1, n2);
          } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
            traverseStaticChildren(
              n1,
              n2,
              true
            );
          }
        } else {
          patchChildren(
            n1,
            n2,
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(
            n2,
            container,
            anchor,
            namespace,
            optimized
          );
        } else {
          mountComponent(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            optimized
          );
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
      const instance = initialVNode.component = createComponentInstance(
        initialVNode,
        parentComponent,
        parentSuspense
      );
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      if (true) {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        if (true) {
          startMeasure(instance, `init`);
        }
        setupComponent(instance, false, optimized);
        if (true) {
          endMeasure(instance, `init`);
        }
      }
      if (isHmrUpdating)
        initialVNode.el = null;
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
          initialVNode.placeholder = placeholder.el;
        }
      } else {
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          namespace,
          optimized
        );
      }
      if (true) {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          if (true) {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          if (true) {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent, root, type } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              if (true) {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              if (true) {
                endMeasure(instance, `render`);
              }
              if (true) {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(
                el,
                instance.subTree,
                instance,
                parentSuspense,
                null
              );
              if (true) {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode && type.__asyncHydrate) {
              type.__asyncHydrate(
                el,
                instance,
                hydrateSubTree
              );
            } else {
              hydrateSubTree();
            }
          } else {
            if (root.ce && root.ce._def.shadowRoot !== false) {
              root.ce._injectChildStyle(type);
            }
            if (true) {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `patch`);
            }
            patch(
              null,
              subTree,
              container,
              anchor,
              instance,
              parentSuspense,
              namespace
            );
            if (true) {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
              parentSuspense
            );
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          if (true) {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          {
            const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
            if (nonHydratedAsyncRoot) {
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              }
              nonHydratedAsyncRoot.asyncDep.then(() => {
                if (!instance.isUnmounted) {
                  componentUpdateFn();
                }
              });
              return;
            }
          }
          let originNext = next;
          let vnodeHook;
          if (true) {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          if (true) {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            hostParentNode(prevTree.el),
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, next, vnode),
              parentSuspense
            );
          }
          if (true) {
            devtoolsComponentUpdated(instance);
          }
          if (true) {
            popWarningContext();
          }
        }
      };
      instance.scope.on();
      const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
      instance.scope.off();
      const update = instance.update = effect2.run.bind(effect2);
      const job = instance.job = effect2.runIfDirty.bind(effect2);
      job.i = instance;
      job.id = instance.uid;
      effect2.scheduler = () => queueJob(job);
      toggleRecurse(instance, true);
      if (true) {
        effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
        effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
      }
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(instance);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(
          c1[i],
          nextChild,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
      if (oldLength > newLength) {
        unmountChildren(
          c1,
          parentComponent,
          parentSuspense,
          true,
          false,
          commonLength
        );
      } else {
        mountChildren(
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          commonLength
        );
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(
              null,
              c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn$1(
                `Duplicate keys found during update:`,
                JSON.stringify(nextChild.key),
                `Make sure keys are unique.`
              );
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(
              prevChild,
              c2[newIndex],
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchorVNode = c2[nextIndex + 1];
          const anchor = nextIndex + 1 < l2 ? anchorVNode.el || anchorVNode.placeholder : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(
              null,
              nextChild,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition2) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove22 = () => {
            if (vnode.ctx.isUnmounted) {
              hostRemove(el);
            } else {
              hostInsert(el, container, anchor);
            }
          };
          const performLeave = () => {
            if (el._isLeaving) {
              el[leaveCbKey](
                true
              );
            }
            leave(el, () => {
              remove22();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove22, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const {
        type,
        props,
        ref: ref2,
        children,
        dynamicChildren,
        shapeFlag,
        patchFlag,
        dirs,
        cacheIndex
      } = vnode;
      if (patchFlag === -2) {
        optimized = false;
      }
      if (ref2 != null) {
        pauseTracking();
        setRef(ref2, null, parentSuspense, vnode, true);
        resetTracking();
      }
      if (cacheIndex != null) {
        parentComponent.renderCache[cacheIndex] = void 0;
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(
            vnode,
            parentComponent,
            parentSuspense,
            internals,
            doRemove
          );
        } else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(
            dynamicChildren,
            parentComponent,
            parentSuspense,
            false,
            true
          );
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, scope, job, subTree, um, m, a } = instance;
      invalidateMount(m);
      invalidateMount(a);
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (job) {
        job.flags |= 8;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (true) {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      const el = hostNextSibling(vnode.anchor || vnode.el);
      const teleportEnd = el && el[TeleportEndKey];
      return teleportEnd ? hostNextSibling(teleportEnd) : el;
    };
    let isFlushing = false;
    const render4 = (vnode, container, namespace) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(
          container._vnode || null,
          vnode,
          container,
          null,
          null,
          null,
          namespace
        );
      }
      container._vnode = vnode;
      if (!isFlushing) {
        isFlushing = true;
        flushPreFlushCbs();
        flushPostFlushCbs();
        isFlushing = false;
      }
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(
        internals
      );
    }
    return {
      render: render4,
      hydrate,
      createApp: createAppAPI(render4, hydrate)
    };
  }
  function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
  }
  function toggleRecurse({ effect: effect2, job }, allowed) {
    if (allowed) {
      effect2.flags |= 32;
      job.flags |= 4;
    } else {
      effect2.flags &= -33;
      job.flags &= -5;
    }
  }
  function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow && c2.patchFlag !== -2)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text && c2.patchFlag !== -1) {
          c2.el = c1.el;
        }
        if (c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
        if (true) {
          c2.el && (c2.el.__vnode = c2);
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
      if (subComponent.asyncDep && !subComponent.asyncResolved) {
        return subComponent;
      } else {
        return locateNonHydratedAsyncRoot(subComponent);
      }
    }
  }
  function invalidateMount(hooks) {
    if (hooks) {
      for (let i = 0; i < hooks.length; i++)
        hooks[i].flags |= 8;
    }
  }
  var ssrContextKey = Symbol.for("v-scx");
  var useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      if (!ctx) {
        warn$1(
          `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
        );
      }
      return ctx;
    }
  };
  function watch2(source, cb, options) {
    if (!isFunction(cb)) {
      warn$1(
        `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
      );
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, flush, once } = options;
    if (!cb) {
      if (immediate !== void 0) {
        warn$1(
          `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (deep !== void 0) {
        warn$1(
          `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (once !== void 0) {
        warn$1(
          `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
    }
    const baseWatchOptions = extend({}, options);
    if (true)
      baseWatchOptions.onWarn = warn$1;
    const runsImmediately = cb && immediate || !cb && flush !== "post";
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else if (!runsImmediately) {
        const watchStopHandle = () => {
        };
        watchStopHandle.stop = NOOP;
        watchStopHandle.resume = NOOP;
        watchStopHandle.pause = NOOP;
        return watchStopHandle;
      }
    }
    const instance = currentInstance;
    baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
    let isPre = false;
    if (flush === "post") {
      baseWatchOptions.scheduler = (job) => {
        queuePostRenderEffect(job, instance && instance.suspense);
      };
    } else if (flush !== "sync") {
      isPre = true;
      baseWatchOptions.scheduler = (job, isFirstRun) => {
        if (isFirstRun) {
          job();
        } else {
          queueJob(job);
        }
      };
    }
    baseWatchOptions.augmentJob = (job) => {
      if (cb) {
        job.flags |= 4;
      }
      if (isPre) {
        job.flags |= 2;
        if (instance) {
          job.id = instance.uid;
          job.i = instance;
        }
      }
    };
    const watchHandle = watch(source, cb, baseWatchOptions);
    if (isInSSRComponentSetup) {
      if (ssrCleanup) {
        ssrCleanup.push(watchHandle);
      } else if (runsImmediately) {
        watchHandle();
      }
    }
    return watchHandle;
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  var getModelModifiers = (props, modelName) => {
    return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
  };
  function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
      return;
    const props = instance.vnode.props || EMPTY_OBJ;
    if (true) {
      const {
        emitsOptions,
        propsOptions: [propsOptions]
      } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
            warn$1(
              `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`
            );
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn$1(
                `Invalid event arguments: event validation failed for event "${event}".`
              );
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
    if (modifiers) {
      if (modifiers.trim) {
        args = rawArgs.map((a) => isString(a) ? a.trim() : a);
      }
      if (modifiers.number) {
        args = rawArgs.map(looseToNumber);
      }
    }
    if (true) {
      devtoolsComponentEmit(instance, event, args);
    }
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn$1(
          `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
            instance,
            instance.type
          )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
            event
          )}" instead of "${event}".`
        );
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(
        handler,
        instance,
        6,
        args
      );
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(
        onceHandler,
        instance,
        6,
        args
      );
    }
  }
  var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  var accessedAttrs = false;
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const {
      type: Component,
      vnode,
      proxy,
      withProxy,
      propsOptions: [propsOptions],
      slots,
      attrs,
      emit: emit2,
      render: render4,
      renderCache,
      props,
      data,
      setupState,
      ctx,
      inheritAttrs
    } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    if (true) {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
          get(target, key, receiver) {
            warn$1(
              `Property '${String(
                key
              )}' was accessed via 'this'. Avoid using 'this' in templates.`
            );
            return Reflect.get(target, key, receiver);
          }
        }) : proxyToUse;
        result = normalizeVNode(
          render4.call(
            thisProxy,
            proxyToUse,
            renderCache,
            true ? shallowReadonly(props) : props,
            setupState,
            data,
            ctx
          )
        );
        fallthroughAttrs = attrs;
      } else {
        const render22 = Component;
        if (attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(
          render22.length > 1 ? render22(
            true ? shallowReadonly(props) : props,
            true ? {
              get attrs() {
                markAttrsAccessed();
                return shallowReadonly(attrs);
              },
              slots,
              emit: emit2
            } : { attrs, slots, emit: emit2 }
          ) : render22(
            true ? shallowReadonly(props) : props,
            null
          )
        );
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1);
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(
              fallthroughAttrs,
              propsOptions
            );
          }
          root = cloneVNode(root, fallthroughAttrs, false, true);
        } else if (!accessedAttrs && root.type !== Comment) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i = 0, l = allAttrs.length; i < l; i++) {
            const key = allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn$1(
              `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
            );
          }
          if (eventAttrs.length) {
            warn$1(
              `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
          }
        }
      }
    }
    if (vnode.dirs) {
      if (!isElementRoot(root)) {
        warn$1(
          `Runtime directive used on component with non-element root node. The directives will not function as intended.`
        );
      }
      root = cloneVNode(root, null, false, true);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (!isElementRoot(root)) {
        warn$1(
          `Component inside <Transition> renders non-element root node that cannot be animated.`
        );
      }
      setTransitionHooks(root, vnode.transition);
    }
    if (setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  var getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) {
      return [vnode, void 0];
    } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
      return getChildRoot(childRoot);
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
      rawChildren[index] = updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex > -1) {
          dynamicChildren[dynamicIndex] = updatedRoot;
        } else if (updatedRoot.patchFlag > 0) {
          vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isVNode(child)) {
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
            if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
              return filterSingleRoot(singleRoot.children);
            }
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  var getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  var filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  var isElementRoot = (vnode) => {
    return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent) {
      const root = parent.subTree;
      if (root.suspense && root.suspense.activeBranch === vnode) {
        root.el = vnode.el;
      }
      if (root === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
      } else {
        break;
      }
    }
  }
  var isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  var Fragment = Symbol.for("v-fgt");
  var Text = Symbol.for("v-txt");
  var Comment = Symbol.for("v-cmt");
  var Static = Symbol.for("v-stc");
  var blockStack = [];
  var currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  var isBlockTreeEnabled = 1;
  function setBlockTracking(value, inVOnce = false) {
    isBlockTreeEnabled += value;
    if (value < 0 && currentBlock && inVOnce) {
      currentBlock.hasOnce = true;
    }
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(
      createBaseVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        true
      )
    );
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(
      createVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        true
      )
    );
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && n1.component) {
      const dirtyInstances = hmrDirtyComponents.get(n2.type);
      if (dirtyInstances && dirtyInstances.has(n1.component)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
      }
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  var vnodeArgsTransformer;
  var createVNodeWithArgsTransform = (...args) => {
    return _createVNode(
      ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
    );
  };
  var normalizeKey = ({ key }) => key != null ? key : null;
  var normalizeRef = ({
    ref: ref2,
    ref_key,
    ref_for
  }) => {
    if (typeof ref2 === "number") {
      ref2 = "" + ref2;
    }
    return ref2 != null ? isString(ref2) || isRef2(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (vnode.key !== vnode.key) {
      warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  var createVNode = true ? createVNodeWithArgsTransform : _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn$1(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag = -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn$1(
        `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
        `
Component that was made reactive: `,
        type
      );
    }
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    );
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref: ref2, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetStart: vnode.targetStart,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition,
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      placeholder: vnode.placeholder,
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce
    };
    if (transition && cloneTransition) {
      setTransitionHooks(
        cloned,
        transition.clone(cloned)
      );
    }
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        child.slice()
      );
    } else if (isVNode(child)) {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !isInternalObject(children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  var emptyAppContext = createAppContext();
  var uid = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new EffectScope(
        true
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      ids: parent ? parent.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      emit: null,
      emitted: null,
      propsDefaults: EMPTY_OBJ,
      inheritAttrs: type.inheritAttrs,
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (true) {
      instance.ctx = createDevRenderContext(instance);
    } else {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  var currentInstance = null;
  var getCurrentInstance = () => currentInstance || currentRenderingInstance;
  var internalSetCurrentInstance;
  var setInSSRSetupState;
  {
    const g = getGlobalThis();
    const registerGlobalSetter = (key, setter) => {
      let setters;
      if (!(setters = g[key]))
        setters = g[key] = [];
      setters.push(setter);
      return (v) => {
        if (setters.length > 1)
          setters.forEach((set) => set(v));
        else
          setters[0](v);
      };
    };
    internalSetCurrentInstance = registerGlobalSetter(
      `__VUE_INSTANCE_SETTERS__`,
      (v) => currentInstance = v
    );
    setInSSRSetupState = registerGlobalSetter(
      `__VUE_SSR_SETTERS__`,
      (v) => isInSSRComponentSetup = v
    );
  }
  var setCurrentInstance = (instance) => {
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return () => {
      instance.scope.off();
      internalSetCurrentInstance(prev);
    };
  };
  var unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
  };
  var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
  function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) {
      warn$1(
        "Do not use built-in or reserved HTML elements as component id: " + name
      );
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  var isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false, optimized = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children, optimized || isSSR);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (true) {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn$1(
          `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
        );
      }
    }
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if (true) {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      pauseTracking();
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      const reset = setCurrentInstance(instance);
      const setupResult = callWithErrorHandling(
        setup,
        instance,
        0,
        [
          true ? shallowReadonly(instance.props) : instance.props,
          setupContext
        ]
      );
      const isAsyncSetup = isPromise(setupResult);
      resetTracking();
      reset();
      if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
        markAsyncBoundary(instance);
      }
      if (isAsyncSetup) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
          if (!instance.suspense) {
            const name = (_a = Component.name) != null ? _a : "Anonymous";
            warn$1(
              `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
            );
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn$1(
          `setup() should not return VNodes directly - return a render function instead.`
        );
      }
      if (true) {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      if (true) {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== void 0) {
      warn$1(
        `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
      );
    }
    finishComponentSetup(instance, isSSR);
  }
  var compile;
  var installWithProxy;
  var isRuntimeOnly = () => !compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template || resolveMergedOptions(instance).template;
        if (template) {
          if (true) {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(
            extend(
              {
                isCustomElement,
                delimiters
              },
              compilerOptions
            ),
            componentCompilerOptions
          );
          Component.render = compile(template, finalCompilerOptions);
          if (true) {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    if (true) {
      const reset = setCurrentInstance(instance);
      pauseTracking();
      try {
        applyOptions(instance);
      } finally {
        resetTracking();
        reset();
      }
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
      if (!compile && Component.template) {
        warn$1(
          `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
        );
      } else {
        warn$1(`Component is missing template or render function: `, Component);
      }
    }
  }
  var attrsProxyHandlers = true ? {
    get(target, key) {
      markAttrsAccessed();
      track(target, "get", "");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  } : {
    get(target, key) {
      track(target, "get", "");
      return target[key];
    }
  };
  function getSlotsProxy(instance) {
    return new Proxy(instance.slots, {
      get(target, key) {
        track(instance, "get", "$slots");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (true) {
        if (instance.exposed) {
          warn$1(`expose() should be called only once per setup().`);
        }
        if (exposed != null) {
          let exposedType = typeof exposed;
          if (exposedType === "object") {
            if (isArray(exposed)) {
              exposedType = "array";
            } else if (isRef2(exposed)) {
              exposedType = "ref";
            }
          }
          if (exposedType !== "object") {
            warn$1(
              `expose() should be passed a plain object, received ${exposedType}.`
            );
          }
        }
      }
      instance.exposed = exposed || {};
    };
    if (true) {
      let attrsProxy;
      let slotsProxy;
      return Object.freeze({
        get attrs() {
          return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
        },
        get slots() {
          return slotsProxy || (slotsProxy = getSlotsProxy(instance));
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        attrs: new Proxy(instance.attrs, attrsProxyHandlers),
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getComponentPublicInstance(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    } else {
      return instance.proxy;
    }
  }
  var classifyRE = /(?:^|[-_])\w/g;
  var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(
        instance.components || instance.parent.type.components
      ) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  var computed2 = (getterOrOptions, debugOptions) => {
    const c = computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
    if (true) {
      const i = getCurrentInstance();
      if (i && i.appContext.config.warnRecursiveComputed) {
        c._warnRecursive = true;
      }
    }
    return c;
  };
  function h(type, propsOrChildren, children) {
    try {
      setBlockTracking(-1);
      const l = arguments.length;
      if (l === 2) {
        if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
          if (isVNode(propsOrChildren)) {
            return createVNode(type, null, [propsOrChildren]);
          }
          return createVNode(type, propsOrChildren);
        } else {
          return createVNode(type, null, propsOrChildren);
        }
      } else {
        if (l > 3) {
          children = Array.prototype.slice.call(arguments, 2);
        } else if (l === 3 && isVNode(children)) {
          children = [children];
        }
        return createVNode(type, propsOrChildren, children);
      }
    } finally {
      setBlockTracking(1);
    }
  }
  function initCustomFormatter() {
    if (typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#1677ff" };
    const stringStyle = { style: "color:#f5222d" };
    const keywordStyle = { style: "color:#eb2f96" };
    const formatter = {
      __vue_custom_formatter: true,
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef2(obj)) {
          pauseTracking();
          const value = obj.value;
          resetTracking();
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed3 = extractKeys(instance, "computed");
      if (computed3) {
        blocks.push(createInstanceBlock("computed", computed3));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v, asRaw = true) {
      if (typeof v === "number") {
        return ["span", numberStyle, v];
      } else if (typeof v === "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v === "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (isShallow(v)) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  var version = "3.5.22";
  var warn2 = true ? warn$1 : NOOP;

  // ../do_dental/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var policy = void 0;
  var tt = typeof window !== "undefined" && window.trustedTypes;
  if (tt) {
    try {
      policy = /* @__PURE__ */ tt.createPolicy("vue", {
        createHTML: (val) => val
      });
    } catch (e) {
      warn2(`Error creating trusted types policy: ${e}`);
    }
  }
  var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
  var svgNS = "http://www.w3.org/2000/svg";
  var mathmlNS = "http://www.w3.org/1998/Math/MathML";
  var doc = typeof document !== "undefined" ? document : null;
  var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  var nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, namespace, is, props) => {
      const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    insertStaticContent(content, parent, anchor, namespace, start, end) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start && (start === end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start === end || !(start = start.nextSibling))
            break;
        }
      } else {
        templateContainer.innerHTML = unsafeToTrustedHTML(
          namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
        );
        const template = templateContainer.content;
        if (namespace === "svg" || namespace === "mathml") {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        before ? before.nextSibling : parent.firstChild,
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  var TRANSITION = "transition";
  var ANIMATION = "animation";
  var vtcKey = Symbol("_vtc");
  var DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  var TransitionPropsValidators = /* @__PURE__ */ extend(
    {},
    BaseTransitionPropsValidators,
    DOMTransitionPropsValidators
  );
  var decorate$1 = (t) => {
    t.displayName = "Transition";
    t.props = TransitionPropsValidators;
    return t;
  };
  var Transition = /* @__PURE__ */ decorate$1(
    (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots)
  );
  var callHook2 = (hook, args = []) => {
    if (isArray(hook)) {
      hook.forEach((h2) => h2(...args));
    } else if (hook) {
      hook(...args);
    }
  };
  var hasExplicitCallback = (hook) => {
    return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
  };
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const {
      name = "v",
      type,
      duration,
      enterFromClass = `${name}-enter-from`,
      enterActiveClass = `${name}-enter-active`,
      enterToClass = `${name}-enter-to`,
      appearFromClass = enterFromClass,
      appearActiveClass = enterActiveClass,
      appearToClass = enterToClass,
      leaveFromClass = `${name}-leave-from`,
      leaveActiveClass = `${name}-leave-active`,
      leaveToClass = `${name}-leave-to`
    } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const {
      onBeforeEnter,
      onEnter,
      onEnterCancelled,
      onLeave,
      onLeaveCancelled,
      onBeforeAppear = onBeforeEnter,
      onAppear = onEnter,
      onAppearCancelled = onEnterCancelled
    } = baseProps;
    const finishEnter = (el, isAppear, done, isCancelled) => {
      el._enterCancelled = isCancelled;
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      el._isLeaving = false;
      removeTransitionClass(el, leaveFromClass);
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve = () => finishEnter(el, isAppear, done);
        callHook2(hook, [el, resolve]);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook2(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook2(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        el._isLeaving = true;
        const resolve = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        if (!el._enterCancelled) {
          forceReflow(el);
          addTransitionClass(el, leaveActiveClass);
        } else {
          addTransitionClass(el, leaveActiveClass);
          forceReflow(el);
        }
        nextFrame(() => {
          if (!el._isLeaving) {
            return;
          }
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve);
          }
        });
        callHook2(onLeave, [el, resolve]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false, void 0, true);
        callHook2(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true, void 0, true);
        callHook2(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook2(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    if (true) {
      assertNumber(res, "<transition> explicit duration");
    }
    return res;
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el[vtcKey] = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  var endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve();
      }
    };
    if (explicitTimeout != null) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(
      getStyleProperties(`${TRANSITION}Property`).toString()
    );
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  function toMs(s) {
    if (s === "auto")
      return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow(el) {
    const targetDocument = el ? el.ownerDocument : document;
    return targetDocument.body.offsetHeight;
  }
  function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  var vShowOriginalDisplay = Symbol("_vod");
  var vShowHidden = Symbol("_vsh");
  var CSS_VAR_TEXT = Symbol(true ? "CSS_VAR_TEXT" : "");
  var displayRE = /(?:^|;)\s*display\s*:/;
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
      if (prev) {
        if (!isString(prev)) {
          for (const key in prev) {
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        } else {
          for (const prevStyle of prev.split(";")) {
            const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        }
      }
      for (const key in next) {
        if (key === "display") {
          hasControlledDisplay = true;
        }
        setStyle(style, key, next[key]);
      }
    } else {
      if (isCssString) {
        if (prev !== next) {
          const cssVarText = style[CSS_VAR_TEXT];
          if (cssVarText) {
            next += ";" + cssVarText;
          }
          style.cssText = next;
          hasControlledDisplay = displayRE.test(next);
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
    }
    if (vShowOriginalDisplay in el) {
      el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
      if (el[vShowHidden]) {
        style.display = "none";
      }
    }
  }
  var semicolonRE = /[^\\];\s*$/;
  var importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null)
        val = "";
      if (true) {
        if (semicolonRE.test(val)) {
          warn2(
            `Unexpected semicolon at the end of '${name}' style value: '${val}'`
          );
        }
      }
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(
            hyphenate(prefixed),
            val.replace(importantRE, ""),
            "important"
          );
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  var prefixes = ["Webkit", "Moz", "ms"];
  var prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  var xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(
          key,
          isBoolean2 ? "" : isSymbol(value) ? String(value) : value
        );
      }
    }
  }
  function patchDOMProp(el, key, value, parentComponent, attrName) {
    if (key === "innerHTML" || key === "textContent") {
      if (value != null) {
        el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
      }
      return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
      const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
      const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
      if (oldValue !== newValue || !("_value" in el)) {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      el._value = value;
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
      if (!needRemove) {
        warn2(
          `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
          e
        );
      }
    }
    needRemove && el.removeAttribute(attrName || key);
  }
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  var veiKey = Symbol("_vei");
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = true ? sanitizeEventValue(nextValue, rawName) : nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(
          true ? sanitizeEventValue(nextValue, rawName) : nextValue,
          instance
        );
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  var optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  var cachedNow = 0;
  var p = /* @__PURE__ */ Promise.resolve();
  var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      if (!e._vts) {
        e._vts = Date.now();
      } else if (e._vts <= invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(
        patchStopImmediatePropagation(e, invoker.value),
        instance,
        5,
        [e]
      );
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function sanitizeEventValue(value, propName) {
    if (isFunction(value) || isArray(value)) {
      return value;
    }
    warn2(
      `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
    );
    return NOOP;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map(
        (fn) => (e2) => !e2._stopped && fn && fn(e2)
      );
    } else {
      return value;
    }
  }
  var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
  var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
    const isSVG = namespace === "svg";
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(el, key, nextValue);
      if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
        patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
      }
    } else if (el._isVueCE && (/[A-Z]/.test(key) || !isString(nextValue))) {
      patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && isNativeOn(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (key === "width" || key === "height") {
      const tag = el.tagName;
      if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
        return false;
      }
    }
    if (isNativeOn(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  var moveCbKey = Symbol("_moveCb");
  var enterCbKey2 = Symbol("_enterCb");
  var getModelAssigner = (vnode) => {
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
  };
  function onCompositionStart(e) {
    e.target.composing = true;
  }
  function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
      target.composing = false;
      target.dispatchEvent(new Event("input"));
    }
  }
  var assignKey = Symbol("_assign");
  var vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      const castToNumber = number || vnode.props && vnode.props.type === "number";
      addEventListener(el, lazy ? "change" : "input", (e) => {
        if (e.target.composing)
          return;
        let domValue = el.value;
        if (trim) {
          domValue = domValue.trim();
        }
        if (castToNumber) {
          domValue = looseToNumber(domValue);
        }
        el[assignKey](domValue);
      });
      if (trim) {
        addEventListener(el, "change", () => {
          el.value = el.value.trim();
        });
      }
      if (!lazy) {
        addEventListener(el, "compositionstart", onCompositionStart);
        addEventListener(el, "compositionend", onCompositionEnd);
        addEventListener(el, "change", onCompositionEnd);
      }
    },
    mounted(el, { value }) {
      el.value = value == null ? "" : value;
    },
    beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      if (el.composing)
        return;
      const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
      const newValue = value == null ? "" : value;
      if (elValue === newValue) {
        return;
      }
      if (document.activeElement === el && el.type !== "range") {
        if (lazy && value === oldValue) {
          return;
        }
        if (trim && el.value.trim() === newValue) {
          return;
        }
      }
      el.value = newValue;
    }
  };
  var vModelCheckbox = {
    deep: true,
    created(el, _, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      addEventListener(el, "change", () => {
        const modelValue = el._modelValue;
        const elementValue = getValue(el);
        const checked = el.checked;
        const assign = el[assignKey];
        if (isArray(modelValue)) {
          const index = looseIndexOf(modelValue, elementValue);
          const found = index !== -1;
          if (checked && !found) {
            assign(modelValue.concat(elementValue));
          } else if (!checked && found) {
            const filtered = [...modelValue];
            filtered.splice(index, 1);
            assign(filtered);
          }
        } else if (isSet(modelValue)) {
          const cloned = new Set(modelValue);
          if (checked) {
            cloned.add(elementValue);
          } else {
            cloned.delete(elementValue);
          }
          assign(cloned);
        } else {
          assign(getCheckboxValue(el, checked));
        }
      });
    },
    mounted: setChecked,
    beforeUpdate(el, binding, vnode) {
      el[assignKey] = getModelAssigner(vnode);
      setChecked(el, binding, vnode);
    }
  };
  function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    let checked;
    if (isArray(value)) {
      checked = looseIndexOf(value, vnode.props.value) > -1;
    } else if (isSet(value)) {
      checked = value.has(vnode.props.value);
    } else {
      if (value === oldValue)
        return;
      checked = looseEqual(value, getCheckboxValue(el, true));
    }
    if (el.checked !== checked) {
      el.checked = checked;
    }
  }
  var vModelSelect = {
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
      const isSetModel = isSet(value);
      addEventListener(el, "change", () => {
        const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
          (o) => number ? looseToNumber(getValue(o)) : getValue(o)
        );
        el[assignKey](
          el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
        );
        el._assigning = true;
        nextTick(() => {
          el._assigning = false;
        });
      });
      el[assignKey] = getModelAssigner(vnode);
    },
    mounted(el, { value }) {
      setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
      el[assignKey] = getModelAssigner(vnode);
    },
    updated(el, { value }) {
      if (!el._assigning) {
        setSelected(el, value);
      }
    }
  };
  function setSelected(el, value) {
    const isMultiple = el.multiple;
    const isArrayValue = isArray(value);
    if (isMultiple && !isArrayValue && !isSet(value)) {
      warn2(
        `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
      );
      return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
      const option = el.options[i];
      const optionValue = getValue(option);
      if (isMultiple) {
        if (isArrayValue) {
          const optionType = typeof optionValue;
          if (optionType === "string" || optionType === "number") {
            option.selected = value.some((v) => String(v) === String(optionValue));
          } else {
            option.selected = looseIndexOf(value, optionValue) > -1;
          }
        } else {
          option.selected = value.has(optionValue);
        }
      } else if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i)
          el.selectedIndex = i;
        return;
      }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
      el.selectedIndex = -1;
    }
  }
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
  }
  var systemModifiers = ["ctrl", "shift", "alt", "meta"];
  var modifierGuards = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
  };
  var withModifiers = (fn, modifiers) => {
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
      for (let i = 0; i < modifiers.length; i++) {
        const guard = modifierGuards[modifiers[i]];
        if (guard && guard(event, modifiers))
          return;
      }
      return fn(event, ...args);
    });
  };
  var keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  var withKeys = (fn, modifiers) => {
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event) => {
      if (!("key" in event)) {
        return;
      }
      const eventKey = hyphenate(event.key);
      if (modifiers.some(
        (k) => k === eventKey || keyNames[k] === eventKey
      )) {
        return fn(event);
      }
    });
  };
  var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  var renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  var createApp = (...args) => {
    const app = ensureRenderer().createApp(...args);
    if (true) {
      injectNativeTagCheck(app);
      injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container)
        return;
      const component = app._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      if (container.nodeType === 1) {
        container.textContent = "";
      }
      const proxy = mount(container, false, resolveRootNamespace(container));
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app;
  };
  function resolveRootNamespace(container) {
    if (container instanceof SVGElement) {
      return "svg";
    }
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
      return "mathml";
    }
  }
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn2(
            `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
          );
        }
      });
      const compilerOptions = app.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn2(msg);
          return compilerOptions;
        },
        set() {
          warn2(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn2(
          `Failed to mount app: mount target selector "${container}" returned null.`
        );
      }
      return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn2(
        `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
      );
    }
    return container;
  }

  // ../do_dental/node_modules/vue/dist/vue.runtime.esm-bundler.js
  function initDev() {
    {
      initCustomFormatter();
    }
  }
  if (true) {
    initDev();
  }

  // ../do_dental/do_dental/public/js/chart/utils/overlays-map.js
  var overlayMap = {
    permanent: {
      incisor: {
        buccal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 28],
        incisal: [10, 11, 12, 13, 14, 15, 16, 17, 29],
        palatal: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
      },
      premolar: {
        buccal: [1, 2, 3, 4, 5, 6, 7],
        incisal: [8, 9, 10, 11, 12, 13, 14],
        palatal: [15, 16, 17, 18, 19, 20, 21]
      },
      molar: {
        buccal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        incisal: [11, 12, 13, 14, 15, 16, 17],
        palatal: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
      }
    },
    deciduous: {}
  };

  // ../do_dental/do_dental/public/js/chart/utils/surfaces-map.js
  var surfaceMap = {
    incisor: {
      buccal: [28, 29],
      mesial: [2, 21],
      distal: [6, 25],
      incisal: [7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20],
      palatal: [23],
      lingual: [23],
      cervical_buccal: [1],
      cervical_palatal: [27],
      cervical_lingual: [27],
      buccal_surface: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      palatal_surface: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      lingual_surface: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      class_4_mesial: [2, 3, 7, 11, 14, 18, 21, 22],
      class_4_distal: [5, 6, 9, 13, 16, 20, 25, 26]
    },
    premolar: {
      buccal: [3],
      mesial: [2, 5, 8, 15, 18],
      distal: [4, 7, 10, 17, 20],
      occlusal: [9],
      palatal: [19],
      lingual: [19],
      cervical_buccal: [1],
      cervical_palatal: [21],
      cervical_lingual: [21],
      buccal_cusp: [5, 6, 7, 11, 12],
      palatal_cusp: [13, 14, 15, 16, 17],
      lingual_cusp: [13, 14, 15, 16, 17],
      buccal_surface: [2, 3, 4, 5, 6, 7, 11],
      palatal_surface: [14, 15, 16, 17, 18, 19, 20],
      lingual_surface: [14, 15, 16, 17, 18, 19, 20]
    },
    molar: {
      buccal: [4],
      mesial: [2, 7, 11, 18, 22],
      distal: [6, 10, 13, 21, 26],
      occlusal: [12],
      palatal: [24],
      lingual: [24],
      cervical_buccal: [1],
      cervical_palatal: [27],
      cervical_lingual: [27],
      mesio_buccal_cusp: [2, 3, 7, 8, 14],
      disto_buccal_cusp: [5, 6, 9, 10, 15],
      mesio_palatal_cusp: [16, 18, 19, 22, 23],
      disto_palatal_cusp: [17, 20, 21, 25, 26],
      mesio_lingual_cusp: [16, 18, 19, 22, 23],
      disto_lingual_cusp: [17, 20, 21, 25, 26],
      buccal_surface: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      palatal_surface: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
      lingual_surface: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    }
  };

  // ../do_dental/do_dental/public/js/chart/utils/overlay-colors.js
  var overlayColors = {
    restoration: {
      Composite: "rgba(51, 165, 222, 0.6)",
      Ceramic: "rgba(127, 51, 222, 0.6)",
      Amalgam: "rgba(130, 136, 143, 0.6)",
      Gold: "rgba(255, 208, 10, 0.6)",
      "Non-Precious Metal": "rgba(176, 185, 195, 0.6)",
      Temporary: "rgba(96, 232, 234, 0.6)",
      Unknown: "rgba(130, 165, 222, 0.6)"
    },
    pathology: {
      Decay: "rgba(255, 122, 122, 0.5)",
      Fracture: "#ff0000",
      Discoloration: {
        Gray: "rgba(210, 210, 210, 0.6)",
        Red: "rgba(250, 225, 224, 0.6)",
        Yellow: "rgba(255, 248, 218, 0.6)"
      },
      Wear: {
        even: "rgba(255, 255, 255, 0.8)",
        odd: "rgba(230, 230, 230, 0.8)"
      }
    },
    root_canal: {
      Monitor: "rgba(255, 208, 12, 0.6)",
      Urgent: "rgba(225, 56, 48, 0.6)",
      Necrotic: "rgba(78, 85, 101, 0.6)",
      "Root Canal Treatment": "rgba(74, 144, 226, 0.6)"
    },
    periodontal: {
      probingArea: "rgba(51, 166, 222, 0.5)",
      probingLine: "#33a5de",
      gingivalMargin: "#e13830"
    }
  };

  // ../do_dental/do_dental/public/js/chart/utils/tooth-utils.js
  var BASE_CANVAS_WIDTH = {
    1: 180,
    2: 150,
    3: 180,
    4: 148,
    5: 142,
    6: 212,
    7: 196,
    8: 184
  };
  var PROJECTION_BASE_HEIGHT = {
    buccal: 576,
    lingual: 576,
    palatal: 576,
    incisal: 260
  };
  var PRIMARY_OFFSET = 4;
  var UPPER_QUADRANTS = /* @__PURE__ */ new Set([1, 2]);
  var UPPER_PRIMARY = /* @__PURE__ */ new Set([5, 6]);
  function parseToothNumber(toothNumber) {
    const parsed = parseInt(toothNumber, 10);
    if (!Number.isFinite(parsed)) {
      return {
        set: "permanent",
        rawQuadrant: 1,
        quadrant: 1,
        position: 1,
        jaw: "upper",
        mirrorImage: false,
        shouldInvertSide: false
      };
    }
    const rawQuadrant = Math.floor(parsed / 10);
    const position = parsed % 10 || 1;
    const isPrimary = rawQuadrant > PRIMARY_OFFSET;
    const quadrant = isPrimary ? rawQuadrant - PRIMARY_OFFSET : rawQuadrant;
    const isUpper = UPPER_QUADRANTS.has(quadrant) || isPrimary && UPPER_PRIMARY.has(rawQuadrant);
    return {
      set: isPrimary ? "deciduous" : "permanent",
      rawQuadrant,
      quadrant,
      position,
      jaw: isUpper ? "upper" : "lower",
      mirrorImage: quadrant === 2 || quadrant === 3,
      shouldInvertSide: quadrant === 2 || quadrant === 3
    };
  }
  function normaliseProjection(projection, jaw) {
    if (jaw === "upper" && projection === "lingual")
      return "palatal";
    return projection;
  }
  function baseCanvasWidth(toothPosition) {
    return BASE_CANVAS_WIDTH[toothPosition] || 180;
  }
  function baseCanvasHeight(projection) {
    return PROJECTION_BASE_HEIGHT[projection] || PROJECTION_BASE_HEIGHT.buccal;
  }

  // ../do_dental/do_dental/public/js/chart/utils/periodontal.js
  var BASE_MARGIN_LEVELS = {
    incisor: {
      buccal: { mesial: -5.2, central: -6.5, distal: -5.2 },
      palatal: { mesial: -5, central: -6.3, distal: -5 },
      lingual: { mesial: -4.9, central: -6.1, distal: -4.9 }
    },
    premolar: {
      buccal: { mesial: -5.7, central: -6.4, distal: -5.7 },
      palatal: { mesial: -5.4, central: -6.1, distal: -5.4 },
      lingual: { mesial: -5.3, central: -6, distal: -5.3 }
    },
    molar: {
      buccal: { mesial: -6, central: -6.6, distal: -6 },
      palatal: { mesial: -5.7, central: -6.3, distal: -5.7 },
      lingual: { mesial: -5.6, central: -6.2, distal: -5.6 }
    }
  };
  var POSITION_MARGIN_ADJUST = {
    1: 0.75,
    2: 0.55,
    3: 0.4,
    4: 0.2,
    5: 0.12,
    6: 0.28,
    7: 0.42,
    8: 0.58
  };
  var DEFAULT_DEPTH_MM = 3.2;
  var MARGIN_MM_TO_LEVEL = 0.95;
  var DEPTH_MM_TO_LEVEL = 0.85;
  var TYPE_BASELINE_SHIFT = {
    incisor: -5,
    premolar: -5.3,
    molar: -5.7
  };
  function toNumber2(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  function baseLevelsForProjection(projection, options) {
    var _a, _b, _c;
    const typeGroup = BASE_MARGIN_LEVELS[options.toothType] || BASE_MARGIN_LEVELS.molar;
    const base = typeGroup[projection] || typeGroup.buccal;
    const adjustSign = (_a = options.sideSign) != null ? _a : 1;
    const adjust = adjustSign * ((_b = POSITION_MARGIN_ADJUST[options.position]) != null ? _b : 0);
    const baselineShift = (_c = TYPE_BASELINE_SHIFT[options.toothType]) != null ? _c : TYPE_BASELINE_SHIFT.molar;
    return {
      mesial: base.mesial + adjust - baselineShift,
      central: base.central + adjust * 0.6 - baselineShift,
      distal: base.distal + adjust - baselineShift
    };
  }
  function convertMargin(site, baseLevel) {
    const marginMm = toNumber2(site == null ? void 0 : site.margin);
    return baseLevel + marginMm * MARGIN_MM_TO_LEVEL;
  }
  function convertDepth(site) {
    const depthMm = Math.max(toNumber2(site == null ? void 0 : site.depth, DEFAULT_DEPTH_MM), 0);
    return depthMm * DEPTH_MM_TO_LEVEL;
  }
  function normaliseSite(site, baseLevel) {
    return {
      margin: convertMargin(site, baseLevel),
      depth: convertDepth(site),
      bleeding: Boolean(site == null ? void 0 : site.bleeding),
      plaque: Boolean(site == null ? void 0 : site.plaque),
      suppuration: Boolean((site == null ? void 0 : site.suppuration) || (site == null ? void 0 : site.pus))
    };
  }
  function buildPeriodontalValues(raw, options) {
    const projection = normaliseProjection(options.projection, options.jaw);
    const levels = {
      buccal: baseLevelsForProjection("buccal", options),
      palatal: baseLevelsForProjection("palatal", options),
      lingual: baseLevelsForProjection("lingual", options)
    };
    const buccal = (raw == null ? void 0 : raw.buccal) || {};
    const lingual = (raw == null ? void 0 : raw.lingual) || {};
    return {
      "mesio-buccal": normaliseSite(buccal.mb, levels.buccal.mesial),
      buccal: normaliseSite(buccal.b, levels.buccal.central),
      "disto-buccal": normaliseSite(buccal.db, levels.buccal.distal),
      "mesio-lingual": normaliseSite(lingual.ml, levels.lingual.mesial),
      lingual: normaliseSite(lingual.l, levels.lingual.central),
      "disto-lingual": normaliseSite(lingual.dl, levels.lingual.distal),
      "mesio-palatal": normaliseSite(lingual.ml, levels.palatal.mesial),
      palatal: normaliseSite(lingual.l, levels.palatal.central),
      "disto-palatal": normaliseSite(lingual.dl, levels.palatal.distal)
    };
  }

  // ../do_dental/do_dental/public/js/chart/utils/geometry-map.js
  var PERIODONTAL_GRID = { lines: 15, height: 26 };
  var DATA = {
    permanent: {
      upper: {
        1: {
          points: {
            buccal: { left: 72, right: 66, center_offset: 0 },
            palatal: { left: 68, right: 66, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        2: {
          points: {
            buccal: { left: 54, right: 56, center_offset: -12 },
            palatal: { left: 50, right: 56, center_offset: -12 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        3: {
          points: {
            buccal: { left: 62, right: 56, center_offset: 0 },
            palatal: { left: 58, right: 60, center_offset: -4 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        4: {
          points: {
            buccal: { left: 56, right: 52, center_offset: 0 },
            palatal: { left: 52, right: 56, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        5: {
          points: {
            buccal: { left: 50, right: 54, center_offset: 0 },
            palatal: { left: 50, right: 54, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        6: {
          points: {
            buccal: { left: 76, right: 82, center_offset: 0 },
            palatal: { left: 78, right: 84, center_offset: 0 }
          },
          depthOffset: { default: -1 }
        },
        7: {
          points: {
            buccal: { left: 76, right: 72, center_offset: 0 },
            palatal: { left: 72, right: 70, center_offset: 0 }
          },
          depthOffset: { default: -1 }
        },
        8: {
          points: {
            buccal: { left: 88, right: 84, center_offset: 0 },
            palatal: { left: 88, right: 86, center_offset: 0 }
          },
          depthOffset: { default: -1 }
        }
      },
      lower: {
        1: {
          points: {
            buccal: { left: 44, right: 44, center_offset: 0 },
            palatal: { left: 42, right: 50, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        2: {
          points: {
            buccal: { left: 44, right: 46, center_offset: 0 },
            palatal: { left: 44, right: 50, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        3: {
          points: {
            buccal: { left: 62, right: 60, center_offset: 0 },
            palatal: { left: 64, right: 62, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        4: {
          points: {
            buccal: { left: 62, right: 54, center_offset: 0 },
            palatal: { left: 66, right: 54, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        5: {
          points: {
            buccal: { left: 60, right: 54, center_offset: 0 },
            palatal: { left: 62, right: 58, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -2 }
        },
        6: {
          points: {
            buccal: { left: 92, right: 96, center_offset: 0 },
            palatal: { left: 94, right: 92, center_offset: 0 }
          },
          depthOffset: { default: -1 }
        },
        7: {
          points: {
            buccal: { left: 84, right: 80, center_offset: 0 },
            palatal: { left: 84, right: 80, center_offset: 0 }
          },
          depthOffset: { default: -1 }
        },
        8: {
          points: {
            buccal: { left: 80, right: 80, center_offset: 0 },
            palatal: { left: 80, right: 82, center_offset: 0 }
          },
          depthOffset: { default: -1 }
        }
      }
    },
    deciduous: {
      upper: {
        1: {
          points: {
            buccal: { left: 56, right: 50, center_offset: 6 },
            palatal: { left: 55, right: 50, center_offset: 6 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        2: {
          points: {
            buccal: { left: 45, right: 42, center_offset: 0 },
            palatal: { left: 50, right: 41, center_offset: 2 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        3: {
          points: {
            buccal: { left: 62, right: 56, center_offset: 9 },
            palatal: { left: 59, right: 60, center_offset: -1 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        4: {
          points: {
            buccal: { left: 53, right: 46, center_offset: 8 },
            palatal: { left: 56, right: 46, center_offset: 4 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        5: {
          points: {
            buccal: { left: 40, right: 45, center_offset: 0 },
            palatal: { left: 43, right: 43, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -1 }
        }
      },
      lower: {
        1: {
          points: {
            buccal: { left: 41, right: 45, center_offset: 0 },
            palatal: { left: 42, right: 45, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        2: {
          points: {
            buccal: { left: 38, right: 42, center_offset: 0 },
            palatal: { left: 38, right: 42, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        3: {
          points: {
            buccal: { left: 55, right: 50, center_offset: -7 },
            palatal: { left: 49, right: 52, center_offset: -5 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        4: {
          points: {
            buccal: { left: 60, right: 56, center_offset: 5 },
            palatal: { left: 54, right: 62, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -1 }
        },
        5: {
          points: {
            buccal: { left: 59, right: 60, center_offset: 0 },
            palatal: { left: 65, right: 60, center_offset: 0 }
          },
          depthOffset: { default: -1, buccal: -1 }
        }
      }
    }
  };
  function mirror(points) {
    return {
      buccal: {
        left: points.buccal.right,
        right: points.buccal.left,
        center_offset: -points.buccal.center_offset
      },
      palatal: {
        left: points.palatal.right,
        right: points.palatal.left,
        center_offset: -points.palatal.center_offset
      }
    };
  }
  function cloneGeometry(base) {
    return {
      points: {
        buccal: __spreadValues({}, base.points.buccal),
        palatal: __spreadValues({}, base.points.palatal)
      },
      depthOffset: __spreadValues({}, base.depthOffset)
    };
  }
  function getToothGeometry(meta) {
    const isPermanent = meta.set === "permanent";
    const archKey = meta.jaw === "upper" ? "upper" : "lower";
    const bank = (isPermanent ? DATA.permanent : DATA.deciduous)[archKey];
    const base = bank == null ? void 0 : bank[meta.position];
    if (!base)
      return null;
    const needsMirror = meta.quadrant === 2 || meta.quadrant === 3 || meta.quadrant === 6 || meta.quadrant === 7;
    const geometry = cloneGeometry(base);
    if (needsMirror) {
      geometry.points = mirror(base.points);
    }
    return geometry;
  }

  // sfc-script:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/ToothCanvas.vue?type=script
  var ToothCanvas_default = {
    __name: "ToothCanvas",
    props: {
      toothNumber: String,
      arch: String,
      projection: { type: String, default: "buccal" },
      view: String,
      scale: { type: Number, default: 0.3 },
      invertY: { type: Boolean, default: false },
      showNum: { type: String, default: "" },
      isSelected: { type: Boolean, default: false },
      condition: { type: Object, default: null },
      pathology: { type: Array, default: () => [] },
      restorations: { type: Array, default: () => [] },
      periodontal: {
        type: Object,
        default: () => ({
          buccal: { mb: { depth: 0, margin: 0 }, b: { depth: 0, margin: 0 }, db: { depth: 0, margin: 0 } },
          lingual: { ml: { depth: 0, margin: 0 }, l: { depth: 0, margin: 0 }, dl: { depth: 0, margin: 0 } }
        })
      },
      previousNumber: { type: String, default: null },
      nextNumber: { type: String, default: null },
      previousPeriodontal: { type: Object, default: null },
      nextPeriodontal: { type: Object, default: null },
      showPathology: { type: Boolean, default: true },
      showRestorations: { type: Boolean, default: true },
      showPeriodontal: { type: Boolean, default: true }
    },
    emits: ["select"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit2 = __emit;
      const props = __props;
      const canvas = ref(null);
      function getToothType(num) {
        const parsed = parseInt(num, 10);
        const position = Number.isFinite(parsed) ? parsed % 10 || 1 : 1;
        if ([1, 2, 3].includes(position))
          return "incisor";
        if ([4, 5].includes(position))
          return "premolar";
        return "molar";
      }
      function resolveToothImage(meta) {
        var _a, _b, _c;
        let imageType = "base";
        if (((_a = props.condition) == null ? void 0 : _a.state) === "Implant")
          imageType = "implant";
        else if (["Missing", "Unerupted"].includes((_b = props.condition) == null ? void 0 : _b.state))
          imageType = "outline";
        else if (["Crown", "Bridge"].includes((_c = props.condition) == null ? void 0 : _c.state))
          imageType = "crown";
        const ageSuffix = meta.set === "deciduous" ? "deciduous" : "permanent";
        const parsed = parseInt(props.toothNumber, 10);
        const numberToReturn = Number.isFinite(parsed) ? Math.abs(parsed) % 10 : 0;
        return `${imageType}-${ageSuffix}-${props.arch}-${numberToReturn}-${props.projection}.png`;
      }
      function getOverlaySVG(meta, toothType, surface) {
        var _a;
        const ageSuffix = meta.set === "deciduous" ? "deciduous" : "permanent";
        const group = ((_a = overlayMap[ageSuffix]) == null ? void 0 : _a[toothType]) || {};
        const projectionKey = normaliseProjection(props.projection, meta.jaw);
        const ids = group[projectionKey];
        if (!ids || !ids.length)
          return [];
        const projectionSurfaces = surfaceMap[toothType] || {};
        const surfaceKey = String(surface || "").toLowerCase().replace(/\s+/g, "_");
        const overlayIds = ids.filter((id) => {
          var _a2;
          return (_a2 = projectionSurfaces[surfaceKey]) == null ? void 0 : _a2.includes(id);
        });
        if (!overlayIds.length)
          return [];
        const parsed = parseInt(props.toothNumber, 10);
        const imgNum = Number.isFinite(parsed) ? Math.abs(parsed) % 10 : 0;
        return overlayIds.map((id) => `/assets/do_dental/img/surfaces/${ageSuffix}-${props.arch}-${imgNum}-${id}.svg`);
      }
      async function loadSVGWithColor(url, color) {
        const res = await fetch(url);
        let svgText = await res.text();
        svgText = svgText.replace(/fill="[^"]*"/g, "").replace(/stroke="[^"]*"/g, "").replace(/<path/g, `<path fill="${color}" stroke="${color}"`);
        const blob = new Blob([svgText], { type: "image/svg+xml" });
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.src = URL.createObjectURL(blob);
        });
      }
      function shouldInvertCanvas(meta, projection) {
        return meta.jaw === "upper" && projection === "lingual";
      }
      function shouldInvertImage(meta, projection) {
        return meta.jaw === "upper" && projection === "lingual";
      }
      function computeHorizontal(geometry, projectionKey, baseWidth, newWidth) {
        var _a, _b, _c;
        if (!geometry) {
          const center = newWidth / 2;
          const span = newWidth * 0.35;
          return {
            horizontal: {
              leftSide: center - span,
              left: center - span * 0.7,
              center,
              right: center + span * 0.7,
              rightSide: center + span
            },
            depthOffset: 0
          };
        }
        const projectionData = geometry.points[projectionKey] || geometry.points.buccal;
        const baseCenter = baseWidth / 2 + (projectionData.center_offset || 0);
        const baseLeft = baseCenter - projectionData.left;
        const baseRight = baseCenter + projectionData.right;
        const baseLeftSide = baseLeft - (baseCenter - baseLeft);
        const baseRightSide = baseRight + (baseRight - baseCenter);
        const scale = baseWidth ? newWidth / baseWidth : 1;
        return {
          horizontal: {
            leftSide: baseLeftSide * scale,
            left: baseLeft * scale,
            center: baseCenter * scale,
            right: baseRight * scale,
            rightSide: baseRightSide * scale
          },
          depthOffset: (_c = (_b = geometry.depthOffset && geometry.depthOffset[projectionKey]) != null ? _b : (_a = geometry.depthOffset) == null ? void 0 : _a.default) != null ? _c : 0
        };
      }
      function computeLinePoints({
        projection,
        meta,
        horizontal,
        periodontalValues,
        levelToY,
        previousValues,
        nextValues
      }) {
        const baseLeftKey = `${meta.shouldInvertSide ? "mesio" : "disto"}-${projection}`;
        const baseRightKey = `${meta.shouldInvertSide ? "disto" : "mesio"}-${projection}`;
        let nextKey = baseLeftKey;
        let prevKey = baseRightKey;
        if (meta.position === 1) {
          if (!(meta.quadrant === 1 || meta.quadrant === 4)) {
            nextKey = `mesio-${projection}`;
          }
          if (!(meta.quadrant === 2 || meta.quadrant === 3)) {
            prevKey = `mesio-${projection}`;
          }
        }
        const leftSite = periodontalValues[nextKey];
        const rightSite = periodontalValues[prevKey];
        const centralSite = periodontalValues[projection];
        if (!leftSite || !rightSite || !centralSite)
          return null;
        let o = leftSite.margin;
        let s = leftSite.margin;
        let i = centralSite.margin;
        let V = rightSite.margin;
        let l = rightSite.margin;
        let r = -leftSite.depth + s;
        let dVal = -centralSite.depth + i;
        let q = -rightSite.depth + V;
        let p2 = -rightSite.depth + l;
        if (previousValues) {
          const prevSite = previousValues[prevKey];
          if (prevSite) {
            o = prevSite.margin;
            r = -prevSite.depth + o;
          }
        }
        if (nextValues) {
          const nextSite = nextValues[nextKey];
          if (nextSite) {
            l = nextSite.margin;
            p2 = -nextSite.depth + l;
          }
        }
        const gingivalMargin = {
          1: { x: horizontal.leftSide, y: levelToY(o) },
          2: { x: horizontal.left, y: levelToY(s) },
          3: { x: horizontal.center, y: levelToY(i) },
          4: { x: horizontal.right, y: levelToY(V) },
          5: { x: horizontal.rightSide, y: levelToY(l) }
        };
        const probingDepth = {
          1: { x: gingivalMargin[1].x, y: levelToY(r) },
          2: { x: gingivalMargin[2].x, y: levelToY(-leftSite.depth + s) },
          3: { x: gingivalMargin[3].x, y: levelToY(dVal) },
          4: { x: gingivalMargin[4].x, y: levelToY(-rightSite.depth + V) },
          5: { x: gingivalMargin[5].x, y: levelToY(p2) }
        };
        return { gingivalMargin, probingDepth };
      }
      function drawPointsCurve(ctx, linePoints, curveName, fromIndex, toIndex, invertControls) {
        const start = linePoints[curveName][fromIndex];
        const end = linePoints[curveName][toIndex];
        if (!start || !end)
          return;
        const ctrlStartX = invertControls ? end.x : start.x;
        const ctrlEndX = invertControls ? start.x : end.x;
        const controlX = ctrlStartX + (ctrlEndX - ctrlStartX) / 2;
        ctx.bezierCurveTo(controlX, start.y, controlX, end.y, end.x, end.y);
      }
      function drawGingivalMargin(ctx, linePoints, width, strokeWidth) {
        ctx.setLineDash([]);
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = overlayColors.periodontal.gingivalMargin;
        ctx.beginPath();
        ctx.moveTo(0, linePoints.gingivalMargin[1].y);
        ctx.lineTo(linePoints.gingivalMargin[1].x, linePoints.gingivalMargin[1].y);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 1, 2, false);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 2, 3, false);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 3, 4, true);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 4, 5, true);
        ctx.lineTo(width, linePoints.gingivalMargin[5].y);
        ctx.stroke();
      }
      function drawProbingDepth(ctx, linePoints, width, strokeWidth) {
        ctx.setLineDash([]);
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = overlayColors.periodontal.probingLine;
        ctx.beginPath();
        ctx.moveTo(0, linePoints.probingDepth[1].y);
        ctx.lineTo(linePoints.probingDepth[1].x, linePoints.probingDepth[1].y);
        drawPointsCurve(ctx, linePoints, "probingDepth", 1, 2, false);
        drawPointsCurve(ctx, linePoints, "probingDepth", 2, 3, false);
        drawPointsCurve(ctx, linePoints, "probingDepth", 3, 4, true);
        drawPointsCurve(ctx, linePoints, "probingDepth", 4, 5, true);
        ctx.lineTo(width, linePoints.probingDepth[5].y);
        ctx.stroke();
      }
      function drawProbingDepthArea(ctx, linePoints, strokeWidth) {
        ctx.setLineDash([]);
        ctx.lineWidth = Math.max(1, strokeWidth * 0.4);
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.fillStyle = overlayColors.periodontal.probingArea;
        ctx.beginPath();
        ctx.moveTo(linePoints.probingDepth[1].x, linePoints.probingDepth[1].y);
        drawPointsCurve(ctx, linePoints, "probingDepth", 1, 2, false);
        drawPointsCurve(ctx, linePoints, "probingDepth", 2, 3, false);
        drawPointsCurve(ctx, linePoints, "probingDepth", 3, 4, true);
        drawPointsCurve(ctx, linePoints, "probingDepth", 4, 5, true);
        ctx.lineTo(linePoints.gingivalMargin[5].x, linePoints.gingivalMargin[5].y);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 5, 4, false);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 4, 3, false);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 3, 2, true);
        drawPointsCurve(ctx, linePoints, "gingivalMargin", 2, 1, true);
        ctx.closePath();
        ctx.fill();
      }
      async function drawTooth() {
        if (!canvas.value)
          return;
        const ctx = canvas.value.getContext("2d");
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
        const meta = parseToothNumber(props.toothNumber);
        const img = new Image();
        img.src = `/assets/do_dental/img/${resolveToothImage(meta)}`;
        img.onload = async () => {
          const projectionKey = normaliseProjection(props.projection, meta.jaw);
          const baseWidth = baseCanvasWidth(meta.position);
          const baseHeight = baseCanvasHeight(projectionKey);
          const newWidth = baseWidth;
          const newHeight = baseHeight;
          canvas.value.width = baseWidth;
          canvas.value.height = baseHeight;
          canvas.value.style.width = `${Math.max(baseWidth * props.scale, 1)}px`;
          canvas.value.style.height = `${Math.max(baseHeight * props.scale, 1)}px`;
          canvas.value.style.transform = props.invertY ? "scaleY(-1)" : "";
          const flipX = meta.mirrorImage ? -1 : 1;
          const drawOffsetX = (baseWidth - newWidth) / 2;
          const drawOffsetY = (baseHeight - newHeight) / 2;
          const applyToothTransform = (drawFn) => {
            ctx.save();
            ctx.translate(drawOffsetX, drawOffsetY);
            if (flipX === -1) {
              ctx.translate(newWidth, 0);
              ctx.scale(-1, 1);
            }
            drawFn();
            ctx.restore();
          };
          const baseGeometry = getToothGeometry(meta);
          const geometry = computeHorizontal(baseGeometry, projectionKey, baseWidth, newWidth);
          const lineHeight = PERIODONTAL_GRID.height;
          const levelToY = (level) => (level + PERIODONTAL_GRID.lines) * lineHeight;
          const periodontalValues = props.showPeriodontal ? buildPeriodontalValues(props.periodontal, {
            projection: props.projection,
            jaw: meta.jaw,
            position: meta.position,
            toothType: getToothType(props.toothNumber),
            sideSign: meta.mirrorImage ? -1 : 1
          }) : null;
          const previousValues = (() => {
            if (!props.previousNumber || !props.previousPeriodontal)
              return null;
            const prevMeta = parseToothNumber(props.previousNumber);
            return buildPeriodontalValues(props.previousPeriodontal, {
              projection: props.projection,
              jaw: prevMeta.jaw,
              position: prevMeta.position,
              toothType: getToothType(props.previousNumber),
              sideSign: prevMeta.mirrorImage ? -1 : 1
            });
          })();
          const nextValues = (() => {
            if (!props.nextNumber || !props.nextPeriodontal)
              return null;
            const nextMeta = parseToothNumber(props.nextNumber);
            return buildPeriodontalValues(props.nextPeriodontal, {
              projection: props.projection,
              jaw: nextMeta.jaw,
              position: nextMeta.position,
              toothType: getToothType(props.nextNumber),
              sideSign: nextMeta.mirrorImage ? -1 : 1
            });
          })();
          if (periodontalValues && geometry.depthOffset) {
            const offsets = /* @__PURE__ */ new Map();
            if (geometry.depthOffset.default != null)
              offsets.set("default", geometry.depthOffset.default);
            for (const [key, value] of Object.entries(geometry.depthOffset)) {
              if (key !== "default")
                offsets.set(key, value);
            }
            const collectKeys = (base) => {
              if (!base)
                return [];
              return [base, `mesio-${base}`, `disto-${base}`];
            };
            const candidates = /* @__PURE__ */ new Set([
              ...collectKeys(props.projection),
              ...collectKeys(projectionKey)
            ]);
            const getProjectionLabel = (key) => {
              if (!key)
                return null;
              const parts = key.split("-");
              return parts.length > 1 ? parts[1] : parts[0];
            };
            candidates.forEach((key) => {
              var _a, _b, _c, _d;
              if (!periodontalValues[key])
                return;
              const projectionLabel = getProjectionLabel(key);
              const offset = (_d = (_c = (_b = (_a = offsets.get(projectionLabel)) != null ? _a : offsets.get(projectionKey)) != null ? _b : offsets.get(props.projection)) != null ? _c : offsets.get("default")) != null ? _d : 0;
              periodontalValues[key] = __spreadProps(__spreadValues({}, periodontalValues[key]), {
                margin: periodontalValues[key].margin + offset
              });
            });
          }
          let linePoints = props.showPeriodontal && periodontalValues ? computeLinePoints({
            projection: props.projection,
            meta,
            horizontal: geometry.horizontal,
            periodontalValues,
            levelToY,
            previousValues,
            nextValues
          }) : null;
          if (linePoints && meta.jaw === "lower" && ["buccal", "lingual", "palatal"].includes(projectionKey)) {
            const mirrorSet = (set) => {
              const mirrored = {};
              Object.keys(set).forEach((key) => {
                mirrored[key] = __spreadProps(__spreadValues({}, set[key]), { y: baseHeight - set[key].y });
              });
              return mirrored;
            };
            linePoints = {
              gingivalMargin: mirrorSet(linePoints.gingivalMargin),
              probingDepth: mirrorSet(linePoints.probingDepth)
            };
          }
          applyToothTransform(() => {
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
          });
          const toothType = getToothType(props.toothNumber);
          if (props.showPathology) {
            for (const p2 of props.pathology) {
              if (p2.tooth !== props.toothNumber)
                continue;
              const surfaces = p2.decay_surfaces || p2.wear_surfaces || [];
              const color = p2.pathology_type === "Discoloration" ? overlayColors.pathology.Discoloration[p2.discoloration_type] || overlayColors.pathology.Discoloration.Gray : overlayColors.pathology[p2.pathology_type] || overlayColors.pathology.Decay;
              for (const s of surfaces) {
                const svgs = getOverlaySVG(meta, toothType, s.surface || s);
                for (const url of svgs) {
                  const overlayImg = await loadSVGWithColor(url, color);
                  applyToothTransform(() => {
                    ctx.drawImage(overlayImg, 0, 0, newWidth, newHeight);
                  });
                }
              }
            }
          }
          if (props.showRestorations) {
            for (const r of props.restorations) {
              if (r.tooth !== props.toothNumber)
                continue;
              const color = overlayColors.restoration[r.material] || overlayColors.restoration.Unknown;
              for (const s of r.surfaces || []) {
                const svgs = getOverlaySVG(meta, toothType, s.surface || s);
                for (const url of svgs) {
                  const overlayImg = await loadSVGWithColor(url, color);
                  applyToothTransform(() => {
                    ctx.drawImage(overlayImg, 0, 0, newWidth, newHeight);
                  });
                }
              }
            }
          }
          if (props.showPeriodontal && linePoints) {
            const periodontalStrokeWidth = 8;
            applyToothTransform(() => {
              drawProbingDepthArea(ctx, linePoints, periodontalStrokeWidth);
              drawProbingDepth(ctx, linePoints, newWidth, periodontalStrokeWidth);
              drawGingivalMargin(ctx, linePoints, newWidth, periodontalStrokeWidth);
            });
          }
        };
      }
      onMounted(drawTooth);
      watch2(
        () => [
          props.toothNumber,
          props.arch,
          props.projection,
          props.scale,
          props.condition,
          props.pathology,
          props.restorations,
          props.periodontal,
          props.showPathology,
          props.showRestorations,
          props.showPeriodontal,
          props.previousNumber,
          props.nextNumber,
          props.previousPeriodontal,
          props.nextPeriodontal
        ],
        drawTooth,
        { deep: true }
      );
      const __returned__ = { emit: emit2, props, canvas, getToothType, resolveToothImage, getOverlaySVG, loadSVGWithColor, shouldInvertCanvas, shouldInvertImage, computeHorizontal, computeLinePoints, drawPointsCurve, drawGingivalMargin, drawProbingDepth, drawProbingDepthArea, drawTooth, onMounted, ref, watch: watch2, get overlayMap() {
        return overlayMap;
      }, get surfaceMap() {
        return surfaceMap;
      }, get overlayColors() {
        return overlayColors;
      }, get parseToothNumber() {
        return parseToothNumber;
      }, get normaliseProjection() {
        return normaliseProjection;
      }, get baseCanvasWidth() {
        return baseCanvasWidth;
      }, get baseCanvasHeight() {
        return baseCanvasHeight;
      }, get buildPeriodontalValues() {
        return buildPeriodontalValues;
      }, get PERIODONTAL_GRID() {
        return PERIODONTAL_GRID;
      }, get getToothGeometry() {
        return getToothGeometry;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/ToothCanvas.vue?type=template
  var _hoisted_1 = {
    key: 0,
    class: "number"
  };
  var _hoisted_2 = { ref: "canvas" };
  var _hoisted_3 = {
    key: 1,
    class: "number"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["tooth-canvas d-flex flex-column align-items-center", { active: $props.isSelected }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("select", $props.toothNumber))
    }, [
      $props.showNum == "up" ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString($props.toothNumber), 1)) : createCommentVNode("v-if", true),
      createBaseVNode("canvas", _hoisted_2, null, 512),
      $props.showNum == "down" ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString($props.toothNumber), 1)) : createCommentVNode("v-if", true)
    ], 2);
  }

  // ../do_dental/do_dental/public/js/chart/ToothCanvas.vue
  ToothCanvas_default.render = render;
  ToothCanvas_default.__file = "../do_dental/do_dental/public/js/chart/ToothCanvas.vue";
  ToothCanvas_default.__scopeId = "data-v-b57cba2b";
  var ToothCanvas_default2 = ToothCanvas_default;

  // sfc-script:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/DentalChart.vue?type=script
  var DEFAULT_PATIENT_ID = "";
  var CUSTOM_ACTION = "custom";
  var DentalChart_default = {
    __name: "DentalChart",
    props: {
      projection: { type: String, default: "buccal" },
      patientId: { type: String, default: "" }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const EMPTY_ARRAY = Object.freeze([]);
      const PATHOLOGY_TYPE_OPTIONS = ["Decay", "Fracture", "Tooth Wear", "Discoloration", "Apical", "Development Disorder"];
      const DECAY_STAGE_OPTIONS = ["Dentin", "Enamel"];
      const CAVITATION_OPTIONS = ["Cavitation", "No"];
      const PULP_OPTIONS = ["Plup Involved", "Plup Not Involved"];
      const DECAY_LEVEL_OPTIONS = ["C1", "C2", "C3", "C4"];
      const FRACTURE_TYPE_OPTIONS = ["Crown Fracture", "Root Fracture"];
      const FRACTURE_POSITION_OPTIONS = ["Vertical", "Horizontal"];
      const WEAR_TYPE_OPTIONS = ["Abrasion", "Erosion"];
      const DISCOLORATION_TYPE_OPTIONS = ["Gray", "Red", "Yellow"];
      const RESTORATION_TYPE_OPTIONS = ["Filling", "Inlay", "Onlay", "Veneer", "Partial Crown", "Crown"];
      const RESTORATION_MATERIAL_OPTIONS = ["Composite", "Ceramic", "Amalgam", "Gold", "Non-Precious Metal", "Temporary"];
      const RESTORATION_QUALITY_OPTIONS = ["Sufficient", "Uncertain", "Insufficient"];
      const RESTORATION_DETAIL_OPTIONS = ["Overhang", "Flush", "Shortfall"];
      const CROWN_MATERIAL_OPTIONS = ["Composite", "Ceramic", "Gold", "Non-Precious Metal"];
      const CROWN_TYPE_OPTIONS = ["Single Crown", "Abutment", "Pontic"];
      const CROWN_BASE_OPTIONS = ["Natural", "Implant"];
      const CROWN_IMPLANT_TYPE_OPTIONS = ["Bone Level", "Tissue Level"];
      const CONDITION_STATE_OPTIONS = ["Normal", "Missing", "Implant", "Crown", "Bridge", "Prosthesis"];
      const ERUPTION_STATUS_OPTIONS = ["Erupted", "Partially Erupted", "Impacted"];
      const DEFAULT_SURFACE_OPTIONS = buildSurfaceOptionList();
      function buildSurfaceOptionList() {
        const labels = /* @__PURE__ */ new Set();
        Object.values(surfaceMap || {}).forEach((group) => {
          Object.keys(group || {}).forEach((key) => {
            const label = formatSurfaceLabel(key);
            if (label)
              labels.add(label);
          });
        });
        return Array.from(labels).sort((a, b) => a.localeCompare(b));
      }
      function formatSurfaceLabel(key) {
        if (!key)
          return "";
        return key.replace(/_/g, " ").replace(/\s+/g, " ").toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()).trim();
      }
      const actionOptions = [
        {
          name: "overview",
          label: "Overview",
          view: "all",
          layers: ["periodontal", "pathology", "restorations"]
        },
        {
          name: "periodontal-probing",
          label: "Periodontal Probing",
          view: "all",
          layers: ["periodontal"]
        },
        { name: "pathology", label: "Pathology", view: "all", layers: ["pathology"] },
        { name: "restoration", label: "Restoration", view: "all", layers: ["restorations"] },
        {
          name: "condition",
          label: "Tooth Condition",
          view: "all",
          layers: ["pathology", "restorations"]
        }
      ];
      const selectedAction = ref(actionOptions[0].name);
      const view = ref(actionOptions[0].view || "all");
      const showLegend = ref(false);
      const loading = ref(false);
      const loadError = ref(null);
      const currentPatientId = ref(props.patientId || DEFAULT_PATIENT_ID);
      const loadErrorMessage = computed2(() => {
        if (!loadError.value)
          return "";
        return loadError.value.message || "Unable to load chart";
      });
      const surfaceOptions = ref(DEFAULT_SURFACE_OPTIONS.map((label) => ({ label, value: label })));
      const surfaceOptionsLoaded = ref(false);
      const surfacesLoading = ref(false);
      const pathologyTooth = ref(null);
      const pathologyPanelVisible = ref(false);
      const pathologyEditId = ref(null);
      const pathologyForm = reactive({
        pathology_type: "",
        decay_stage: "",
        cavitation: "",
        pulp: "",
        decay_level: "",
        fracture_type: "",
        fracture_position: "",
        wear_type: "",
        discoloration_type: "",
        decay_surfaces: [],
        wear_surfaces: [],
        notes: ""
      });
      const pathologyError = ref(null);
      const savingPathology = ref(false);
      const restorationTooth = ref(null);
      const restorationPanelVisible = ref(false);
      const restorationEditId = ref(null);
      const restorationForm = reactive({
        restoration_type: "",
        surfaces: [],
        material: "",
        quality: "",
        detail: "",
        crown_material: "",
        crown_type: "",
        crown_base: "",
        crown_implant_type: ""
      });
      const restorationError = ref(null);
      const savingRestoration = ref(false);
      const conditionTooth = ref(null);
      const conditionPanelVisible = ref(false);
      const conditionForm = reactive({
        state: "",
        eruption_status: "",
        mobility: "",
        furcation: "",
        condition_notes: ""
      });
      const conditionError = ref(null);
      const savingCondition = ref(false);
      const savingPeriodontal = ref(false);
      const periodontalSaveMessage = ref("");
      const layerOptions = [
        { name: "periodontal", label: "Periodontal" },
        { name: "pathology", label: "Pathology" },
        { name: "restorations", label: "Restorations" }
      ];
      const activeLayers = ref(["pathology", "restorations"]);
      const teethData = ref({
        chart: null,
        conditions: [],
        pathology: [],
        restorations: [],
        periodontal: {}
      });
      const upperLeft = ["18", "17", "16", "15", "14", "13", "12", "11"];
      const upperRight = ["21", "22", "23", "24", "25", "26", "27", "28"];
      const lowerLeft = ["48", "47", "46", "45", "44", "43", "42", "41"];
      const lowerRight = ["31", "32", "33", "34", "35", "36", "37", "38"];
      const upperArchOrder = [...upperLeft, ...upperRight];
      const lowerArchOrder = [...lowerLeft, ...lowerRight];
      const SITE_INFO = {
        db: { id: "db", group: "buccal", labels: { buccal: "Disto Buccal" } },
        b: { id: "b", group: "buccal", labels: { buccal: "Buccal" } },
        mb: { id: "mb", group: "buccal", labels: { buccal: "Mesio Buccal" } },
        dl: {
          id: "dl",
          group: "lingual",
          labels: { palatal: "Disto Palatal", lingual: "Disto Lingual" }
        },
        l: {
          id: "l",
          group: "lingual",
          labels: { palatal: "Palatal", lingual: "Lingual" }
        },
        ml: {
          id: "ml",
          group: "lingual",
          labels: { palatal: "Mesio Palatal", lingual: "Mesio Lingual" }
        }
      };
      const PANEL_SITE_LAYOUT = [
        { id: "db", variant: "buccal" },
        { id: "b", variant: "buccal" },
        { id: "mb", variant: "buccal" },
        { id: "ml", variant: "inner" },
        { id: "l", variant: "inner" },
        { id: "dl", variant: "inner" }
      ];
      const PERIODONTAL_FLAGS = [
        { key: "bleeding", label: "Bleeding" },
        { key: "plaque", label: "Plaque" },
        { key: "suppuration", label: "Pus" }
      ];
      const periodontalAutoAdvance = ref(true);
      const periodontalCursor = ref(0);
      const periodontalQueue = computed2(() => buildPeriodontalQueue());
      const currentQueueEntry = computed2(() => periodontalQueue.value[periodontalCursor.value] || null);
      const selectedTooth = computed2(() => {
        var _a;
        return ((_a = currentQueueEntry.value) == null ? void 0 : _a.tooth) || null;
      });
      const currentPeriodontalSite = computed2(() => {
        var _a;
        return ((_a = currentQueueEntry.value) == null ? void 0 : _a.site) || null;
      });
      const periodontalPanelVisible = ref(false);
      function layerIsActive(name) {
        return activeLayers.value.includes(name);
      }
      const isPeriodontalMode = computed2(() => selectedAction.value === "periodontal-probing");
      const isPathologyMode = computed2(() => selectedAction.value === "pathology");
      const isRestorationMode = computed2(() => selectedAction.value === "restoration");
      const isConditionMode = computed2(() => selectedAction.value === "condition");
      const canSubmitPathology = computed2(() => {
        if (!pathologyPanelVisible.value || !pathologyTooth.value)
          return false;
        return Boolean(pathologyForm.pathology_type);
      });
      const canSubmitRestoration = computed2(() => {
        if (!restorationPanelVisible.value || !restorationTooth.value)
          return false;
        return Boolean(restorationForm.restoration_type);
      });
      const canSubmitCondition = computed2(() => {
        if (!conditionPanelVisible.value || !conditionTooth.value)
          return false;
        return Boolean(conditionForm.state);
      });
      const showRestorationDetailFields = computed2(
        () => restorationForm.restoration_type && restorationForm.restoration_type !== "Crown"
      );
      const showCrownFields = computed2(() => restorationForm.restoration_type === "Crown");
      const showImplantFields = computed2(
        () => showCrownFields.value && restorationForm.crown_base === "Implant"
      );
      const activePathologyEntries = computed2(
        () => pathologyTooth.value ? getToothPathology(pathologyTooth.value) : []
      );
      const activeRestorationEntries = computed2(
        () => restorationTooth.value ? getToothRestorations(restorationTooth.value) : []
      );
      const activeConditionEntry = computed2(
        () => conditionTooth.value ? getToothCondition(conditionTooth.value) : null
      );
      watch2(
        () => selectedAction.value,
        (action, previous) => {
          if (action === "periodontal-probing") {
            periodontalCursor.value = 0;
            periodontalPanelVisible.value = true;
          } else if (previous === "periodontal-probing") {
            periodontalCursor.value = 0;
            periodontalPanelVisible.value = false;
          }
          if (action !== "pathology") {
            pathologyPanelVisible.value = false;
            pathologyTooth.value = null;
            pathologyError.value = null;
            pathologyEditId.value = null;
            resetPathologyForm();
          }
          if (action !== "restoration") {
            restorationPanelVisible.value = false;
            restorationTooth.value = null;
            restorationError.value = null;
            restorationEditId.value = null;
            resetRestorationForm();
          }
          if (action !== "condition") {
            conditionPanelVisible.value = false;
            conditionTooth.value = null;
            conditionError.value = null;
            resetConditionForm();
          }
        },
        { immediate: true }
      );
      const periodontalPanelRef = ref(null);
      watch2(
        () => isPeriodontalMode.value,
        async (active) => {
          var _a;
          if (active && periodontalPanelVisible.value) {
            await nextTick();
            (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
          }
        }
      );
      watch2(
        () => periodontalPanelVisible.value,
        async (visible) => {
          var _a;
          if (visible && isPeriodontalMode.value) {
            await nextTick();
            (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
          }
        }
      );
      watch2(
        () => pathologyForm.pathology_type,
        (type) => {
          if (type !== "Decay") {
            pathologyForm.decay_stage = "";
            pathologyForm.cavitation = "";
            pathologyForm.pulp = "";
            pathologyForm.decay_level = "";
            pathologyForm.decay_surfaces = [];
          }
          if (type !== "Fracture") {
            pathologyForm.fracture_type = "";
            pathologyForm.fracture_position = "";
          }
          if (type !== "Tooth Wear") {
            pathologyForm.wear_type = "";
            pathologyForm.wear_surfaces = [];
          }
          if (type !== "Discoloration") {
            pathologyForm.discoloration_type = "";
          }
        }
      );
      watch2(
        () => pathologyForm.cavitation,
        (value) => {
          if (value !== "Cavitation") {
            pathologyForm.pulp = "";
          }
        }
      );
      watch2(
        () => restorationForm.restoration_type,
        (type) => {
          if (type === "Crown") {
            restorationForm.material = "";
            restorationForm.quality = "";
            restorationForm.detail = "";
            restorationForm.surfaces = [];
          } else {
            restorationForm.crown_material = "";
            restorationForm.crown_type = "";
            restorationForm.crown_base = "";
            restorationForm.crown_implant_type = "";
          }
        }
      );
      watch2(
        () => restorationForm.crown_base,
        (value) => {
          if (value !== "Implant") {
            restorationForm.crown_implant_type = "";
          }
        }
      );
      watch2(
        () => isPathologyMode.value,
        (active) => {
          if (active)
            ensureSurfaceOptions();
        }
      );
      watch2(
        () => isRestorationMode.value,
        (active) => {
          if (active)
            ensureSurfaceOptions();
        }
      );
      function handlePatientChange(patientId) {
        if (!patientId) {
          currentPatientId.value = "";
          clearChartData();
          loadError.value = new Error("Select a patient to view the chart.");
          return;
        }
        const samePatient = patientId === currentPatientId.value;
        if (samePatient && teethData.value.chart) {
          return;
        }
        currentPatientId.value = patientId;
        clearChartData();
        loadChart(patientId);
      }
      watch2(
        () => props.patientId,
        (newPatientId, previousPatientId) => {
          if (newPatientId === previousPatientId)
            return;
          handlePatientChange(newPatientId || "");
        }
      );
      function isSelectedTooth(num) {
        const value = String(num);
        if (isPeriodontalMode.value) {
          return String(selectedTooth.value || "") === value;
        }
        if (isPathologyMode.value) {
          return pathologyPanelVisible.value && String(pathologyTooth.value || "") === value;
        }
        if (isRestorationMode.value) {
          return restorationPanelVisible.value && String(restorationTooth.value || "") === value;
        }
        if (isConditionMode.value) {
          return conditionPanelVisible.value && String(conditionTooth.value || "") === value;
        }
        return false;
      }
      function handleToothSelect(num) {
        const tooth = String(num);
        if (isPeriodontalMode.value) {
          const queue2 = periodontalQueue.value;
          const index = queue2.findIndex((entry) => entry.tooth === tooth);
          if (index !== -1) {
            periodontalCursor.value = index;
            periodontalPanelVisible.value = true;
            nextTick(() => {
              var _a;
              return (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
            });
          }
          return;
        }
        if (isPathologyMode.value) {
          startPathologyFlow(tooth);
          return;
        }
        if (isRestorationMode.value) {
          startRestorationFlow(tooth);
          return;
        }
        if (isConditionMode.value) {
          startConditionFlow(tooth);
        }
      }
      const periodontalToothSequence = computed2(() => {
        const sequence = [];
        periodontalQueue.value.forEach((entry) => {
          if (sequence[sequence.length - 1] !== entry.tooth) {
            sequence.push(entry.tooth);
          }
        });
        return sequence;
      });
      function buildPeriodontalQueue() {
        const queue2 = [];
        const addStage = (teeth, sites, variant) => {
          teeth.forEach((tooth) => {
            sites.forEach((siteId) => {
              const info = SITE_INFO[siteId];
              if (!info)
                return;
              queue2.push({
                tooth: String(tooth),
                site: { id: siteId, group: info.group, variant }
              });
            });
          });
        };
        addStage(upperArchOrder, ["db", "b", "mb"], "buccal");
        addStage([...upperArchOrder].reverse(), ["ml", "l", "dl"], "palatal");
        addStage(lowerArchOrder, ["db", "b", "mb"], "buccal");
        addStage([...lowerArchOrder].reverse(), ["ml", "l", "dl"], "lingual");
        return queue2;
      }
      const panelSites = computed2(() => {
        const tooth = selectedTooth.value;
        const innerVariant = isUpperToothNumber(tooth) ? "palatal" : "lingual";
        return PANEL_SITE_LAYOUT.map((entry) => {
          const variant = entry.variant === "inner" ? innerVariant : "buccal";
          const info = SITE_INFO[entry.id];
          return {
            id: entry.id,
            group: (info == null ? void 0 : info.group) || "buccal",
            variant
          };
        });
      });
      function isUpperToothNumber(toothNumber) {
        if (!toothNumber)
          return true;
        const firstDigit = String(toothNumber)[0];
        return firstDigit === "1" || firstDigit === "2" || firstDigit === "5" || firstDigit === "6";
      }
      function siteDisplayLabel(site) {
        const info = SITE_INFO[site.id];
        if (!info)
          return site.id.toUpperCase();
        if (site.variant === "palatal") {
          return info.labels.palatal || info.labels.lingual || info.labels.buccal || site.id;
        }
        if (site.variant === "lingual") {
          return info.labels.lingual || info.labels.palatal || info.labels.buccal || site.id;
        }
        return info.labels.buccal || info.labels.lingual || site.id;
      }
      function isActiveSite(site) {
        const entry = currentQueueEntry.value;
        if (!entry)
          return false;
        return entry.site.id === site.id && entry.site.variant === site.variant;
      }
      function hidePeriodontalPanel() {
        periodontalPanelVisible.value = false;
      }
      function handlePeriodontalKeyDown(event) {
        var _a, _b;
        if (!isPeriodontalMode.value || !periodontalPanelVisible.value)
          return;
        const activeField = (_b = (_a = document.activeElement) == null ? void 0 : _a.dataset) == null ? void 0 : _b.field;
        if (activeField === "margin")
          return;
        if (/^[0-9]$/.test(event.key)) {
          setCurrentSiteMeasurement("depth", Number(event.key));
          confirmPeriodontalEntry();
          event.preventDefault();
          event.stopPropagation();
        } else if (event.key === "Backspace") {
          setCurrentSiteMeasurement("depth", 0);
          event.preventDefault();
          event.stopPropagation();
        } else if (event.key === "ArrowRight") {
          goToNextSite();
          event.preventDefault();
          event.stopPropagation();
        } else if (event.key === "ArrowLeft") {
          goToPreviousSite();
          event.preventDefault();
          event.stopPropagation();
        }
      }
      async function ensureSurfaceOptions() {
        if (surfaceOptionsLoaded.value || surfacesLoading.value)
          return;
        surfacesLoading.value = true;
        try {
          const response = await frappe.call("frappe.client.get_list", {
            doctype: "Tooth Surface",
            fields: ["surface"],
            order_by: "surface asc",
            limit_page_length: 500
          });
          const records = response == null ? void 0 : response.message;
          if (Array.isArray(records) && records.length) {
            const labels = /* @__PURE__ */ new Set();
            records.forEach((record) => {
              const raw = (record.surface || record.name || "").toString().trim();
              if (raw)
                labels.add(raw);
            });
            if (labels.size) {
              surfaceOptions.value = Array.from(labels).sort((a, b) => a.localeCompare(b)).map((label) => ({ label, value: label }));
            }
          }
        } catch (err) {
          console.warn("Failed to load tooth surfaces", err);
        } finally {
          surfacesLoading.value = false;
          surfaceOptionsLoaded.value = true;
        }
      }
      async function startPathologyFlow(tooth) {
        if (!tooth)
          return;
        const target = String(tooth);
        resetPathologyForm();
        pathologyEditId.value = null;
        pathologyTooth.value = target;
        pathologyPanelVisible.value = true;
        pathologyError.value = null;
        await ensureSurfaceOptions();
      }
      function resetPathologyForm() {
        pathologyForm.pathology_type = "";
        pathologyForm.decay_stage = "";
        pathologyForm.cavitation = "";
        pathologyForm.pulp = "";
        pathologyForm.decay_level = "";
        pathologyForm.fracture_type = "";
        pathologyForm.fracture_position = "";
        pathologyForm.wear_type = "";
        pathologyForm.discoloration_type = "";
        pathologyForm.decay_surfaces = [];
        pathologyForm.wear_surfaces = [];
        pathologyForm.notes = "";
      }
      function populatePathologyForm(entry) {
        if (!entry)
          return;
        resetPathologyForm();
        pathologyForm.pathology_type = entry.pathology_type || "";
        pathologyForm.decay_stage = entry.decay_stage || "";
        pathologyForm.cavitation = entry.cavitation || "";
        pathologyForm.pulp = entry.pulp || "";
        pathologyForm.decay_level = entry.decay_level || "";
        pathologyForm.fracture_type = entry.fracture_type || "";
        pathologyForm.fracture_position = entry.fracture_position || "";
        pathologyForm.wear_type = entry.wear_type || "";
        pathologyForm.discoloration_type = entry.discoloration_type || "";
        pathologyForm.decay_surfaces = surfaceListFromEntry(entry.decay_surfaces);
        pathologyForm.wear_surfaces = surfaceListFromEntry(entry.wear_surfaces);
        pathologyForm.notes = entry.notes || "";
      }
      async function editPathology(entry) {
        if (!entry)
          return;
        await ensureSurfaceOptions();
        pathologyEditId.value = entry.name || null;
        pathologyTooth.value = String(entry.tooth);
        pathologyPanelVisible.value = true;
        pathologyError.value = null;
        populatePathologyForm(entry);
      }
      function closePathologyPanel() {
        pathologyPanelVisible.value = false;
        pathologyError.value = null;
        pathologyTooth.value = null;
        pathologyEditId.value = null;
        resetPathologyForm();
      }
      async function startRestorationFlow(tooth) {
        if (!tooth)
          return;
        const target = String(tooth);
        resetRestorationForm();
        restorationEditId.value = null;
        restorationTooth.value = target;
        restorationPanelVisible.value = true;
        restorationError.value = null;
        await ensureSurfaceOptions();
      }
      function resetRestorationForm() {
        restorationForm.restoration_type = "";
        restorationForm.surfaces = [];
        restorationForm.material = "";
        restorationForm.quality = "";
        restorationForm.detail = "";
        restorationForm.crown_material = "";
        restorationForm.crown_type = "";
        restorationForm.crown_base = "";
        restorationForm.crown_implant_type = "";
      }
      function populateRestorationForm(entry) {
        if (!entry)
          return;
        resetRestorationForm();
        restorationForm.restoration_type = entry.restoration_type || "";
        restorationForm.surfaces = surfaceListFromEntry(entry.surfaces);
        restorationForm.material = entry.material || "";
        restorationForm.quality = entry.quality || "";
        restorationForm.detail = entry.detail || "";
        restorationForm.crown_material = entry.crown_material || "";
        restorationForm.crown_type = entry.crown_type || "";
        restorationForm.crown_base = entry.crown_base || "";
        restorationForm.crown_implant_type = entry.crown_implant_type || "";
      }
      async function editRestoration(entry) {
        if (!entry)
          return;
        await ensureSurfaceOptions();
        restorationEditId.value = entry.name || null;
        restorationTooth.value = String(entry.tooth);
        restorationPanelVisible.value = true;
        restorationError.value = null;
        populateRestorationForm(entry);
      }
      function closeRestorationPanel() {
        restorationPanelVisible.value = false;
        restorationError.value = null;
        restorationTooth.value = null;
        restorationEditId.value = null;
        resetRestorationForm();
      }
      function startConditionFlow(tooth) {
        if (!tooth)
          return;
        const target = String(tooth);
        const existing = getToothCondition(target);
        resetConditionForm(existing);
        conditionTooth.value = target;
        conditionPanelVisible.value = true;
        conditionError.value = null;
      }
      function resetConditionForm(entry = null) {
        conditionForm.state = (entry == null ? void 0 : entry.state) || "";
        conditionForm.eruption_status = (entry == null ? void 0 : entry.eruption_status) || "";
        const mobilityValue = entry == null ? void 0 : entry.mobility;
        const furcationValue = entry == null ? void 0 : entry.furcation;
        conditionForm.mobility = mobilityValue === void 0 || mobilityValue === null ? "" : String(mobilityValue);
        conditionForm.furcation = furcationValue === void 0 || furcationValue === null ? "" : String(furcationValue);
        conditionForm.condition_notes = (entry == null ? void 0 : entry.condition_notes) || "";
      }
      function closeConditionPanel() {
        conditionPanelVisible.value = false;
        conditionError.value = null;
        conditionTooth.value = null;
        resetConditionForm();
      }
      function convertSurfaceSelection(selection) {
        if (!Array.isArray(selection) || !selection.length)
          return [];
        return selection.map((surface) => {
          const value = typeof surface === "string" ? surface.trim() : surface == null ? void 0 : surface.surface;
          if (!value)
            return null;
          return { surface: value };
        }).filter(Boolean);
      }
      function surfaceListFromEntry(list) {
        if (!Array.isArray(list))
          return [];
        return list.map((item) => {
          if (typeof item === "string")
            return item;
          if (item && typeof item === "object")
            return item.surface || "";
          return "";
        }).filter(Boolean);
      }
      function buildPathologyPayload() {
        const payload = {
          pathology_type: pathologyForm.pathology_type
        };
        if (pathologyForm.notes)
          payload.notes = pathologyForm.notes;
        if (pathologyForm.pathology_type === "Decay") {
          payload.decay_stage = pathologyForm.decay_stage || null;
          payload.cavitation = pathologyForm.cavitation || null;
          payload.pulp = pathologyForm.cavitation === "Cavitation" ? pathologyForm.pulp || null : null;
          payload.decay_level = pathologyForm.decay_level || null;
          payload.decay_surfaces = convertSurfaceSelection(pathologyForm.decay_surfaces);
        } else if (pathologyForm.pathology_type === "Fracture") {
          payload.fracture_type = pathologyForm.fracture_type || null;
          payload.fracture_position = pathologyForm.fracture_position || null;
        } else if (pathologyForm.pathology_type === "Tooth Wear") {
          payload.wear_type = pathologyForm.wear_type || null;
          payload.wear_surfaces = convertSurfaceSelection(pathologyForm.wear_surfaces);
        } else if (pathologyForm.pathology_type === "Discoloration") {
          payload.discoloration_type = pathologyForm.discoloration_type || null;
        }
        return payload;
      }
      function buildRestorationPayload() {
        const payload = {
          restoration_type: restorationForm.restoration_type
        };
        if (restorationForm.restoration_type === "Crown") {
          payload.crown_material = restorationForm.crown_material || null;
          payload.crown_type = restorationForm.crown_type || null;
          payload.crown_base = restorationForm.crown_base || null;
          payload.crown_implant_type = restorationForm.crown_base === "Implant" ? restorationForm.crown_implant_type || null : null;
        } else {
          payload.material = restorationForm.material || null;
          payload.quality = restorationForm.quality || null;
          payload.detail = restorationForm.detail || null;
          payload.surfaces = convertSurfaceSelection(restorationForm.surfaces);
        }
        return payload;
      }
      function buildConditionPayload() {
        return {
          state: conditionForm.state,
          eruption_status: conditionForm.eruption_status || null,
          mobility: toNullableInt(conditionForm.mobility),
          furcation: toNullableInt(conditionForm.furcation),
          condition_notes: conditionForm.condition_notes || null
        };
      }
      function appendLocalPathology(tooth, payload, id = null) {
        const list = [...teethData.value.pathology || []];
        const recordId = id || createLocalId("pathology");
        const entry = normalisePathologyEntry(__spreadValues({
          tooth,
          name: recordId
        }, payload));
        const idx = list.findIndex((item) => item.name === recordId);
        if (idx !== -1)
          list[idx] = entry;
        else
          list.push(entry);
        teethData.value.pathology = list;
      }
      function appendLocalRestoration(tooth, payload, id = null) {
        const list = [...teethData.value.restorations || []];
        const recordId = id || createLocalId("restoration");
        const entry = normaliseRestorationEntry(__spreadValues({
          tooth,
          name: recordId
        }, payload));
        const idx = list.findIndex((item) => item.name === recordId);
        if (idx !== -1)
          list[idx] = entry;
        else
          list.push(entry);
        teethData.value.restorations = list;
      }
      function removeLocalPathology(id) {
        if (!id)
          return;
        const next = (teethData.value.pathology || []).filter((entry) => entry.name !== id);
        teethData.value.pathology = next;
      }
      function removeLocalRestoration(id) {
        if (!id)
          return;
        const next = (teethData.value.restorations || []).filter((entry) => entry.name !== id);
        teethData.value.restorations = next;
      }
      function updateLocalCondition(tooth, payload) {
        const toothKey = String(tooth);
        const entries = Array.isArray(teethData.value.conditions) ? [...teethData.value.conditions] : [];
        const idx = entries.findIndex((entry) => String(entry.tooth_number) === toothKey);
        const updated = __spreadValues(__spreadProps(__spreadValues({}, idx !== -1 ? entries[idx] : {}), {
          tooth_number: toothKey
        }), payload);
        if (idx !== -1)
          entries[idx] = updated;
        else
          entries.push(updated);
        teethData.value.conditions = entries;
      }
      function joinSurfaceLabels(list) {
        if (!Array.isArray(list) || !list.length)
          return "";
        return list.map((item) => {
          if (typeof item === "string")
            return item;
          if (item && typeof item === "object")
            return item.surface || "";
          return "";
        }).filter(Boolean).join(", ");
      }
      function summarisePathology(entry) {
        if (!entry)
          return "";
        const parts = [entry.pathology_type];
        if (entry.pathology_type === "Decay") {
          const surfaces = joinSurfaceLabels(entry.decay_surfaces);
          if (surfaces)
            parts.push(surfaces);
          if (entry.decay_stage)
            parts.push(entry.decay_stage);
          if (entry.cavitation)
            parts.push(entry.cavitation);
          if (entry.decay_level)
            parts.push(`Level ${entry.decay_level}`);
        } else if (entry.pathology_type === "Fracture") {
          if (entry.fracture_type)
            parts.push(entry.fracture_type);
          if (entry.fracture_position)
            parts.push(entry.fracture_position);
        } else if (entry.pathology_type === "Tooth Wear") {
          if (entry.wear_type)
            parts.push(entry.wear_type);
          const surfaces = joinSurfaceLabels(entry.wear_surfaces);
          if (surfaces)
            parts.push(surfaces);
        } else if (entry.pathology_type === "Discoloration") {
          if (entry.discoloration_type)
            parts.push(entry.discoloration_type);
        }
        return parts.filter(Boolean).join(" \xB7 ");
      }
      function summariseRestoration(entry) {
        if (!entry)
          return "";
        const parts = [entry.restoration_type || entry.type];
        if (entry.material)
          parts.push(entry.material);
        const surfaces = joinSurfaceLabels(entry.surfaces);
        if (surfaces)
          parts.push(surfaces);
        if (entry.quality)
          parts.push(entry.quality);
        if (entry.detail)
          parts.push(entry.detail);
        if (entry.crown_material)
          parts.push(entry.crown_material);
        if (entry.crown_type)
          parts.push(entry.crown_type);
        if (entry.crown_base) {
          parts.push(entry.crown_base);
          if (entry.crown_implant_type)
            parts.push(entry.crown_implant_type);
        }
        return parts.filter(Boolean).join(" \xB7 ");
      }
      function summariseCondition(entry) {
        if (!entry)
          return "";
        const parts = [entry.state];
        if (entry.eruption_status)
          parts.push(entry.eruption_status);
        if (entry.mobility !== void 0 && entry.mobility !== null && entry.mobility !== "") {
          parts.push(`Mobility ${entry.mobility}`);
        }
        if (entry.furcation !== void 0 && entry.furcation !== null && entry.furcation !== "") {
          parts.push(`Furcation ${entry.furcation}`);
        }
        if (entry.condition_notes)
          parts.push(entry.condition_notes);
        return parts.filter(Boolean).join(" \xB7 ");
      }
      async function deleteChartRecord(doctype, name) {
        if (!name)
          return false;
        const response = await frappe.call("do_dental.api.delete_tooth_record", { doctype, name });
        return response !== null;
      }
      async function deletePathology(entry) {
        var _a;
        if (!entry || !entry.name)
          return;
        if (!window.confirm("Delete this pathology?"))
          return;
        const isLocalRecord = typeof entry.name === "string" && entry.name.startsWith("pathology-");
        if (!((_a = teethData.value.chart) == null ? void 0 : _a.name) || isLocalRecord) {
          removeLocalPathology(entry.name);
          return;
        }
        const success = await deleteChartRecord("Tooth Pathology", entry.name);
        if (success) {
          removeLocalPathology(entry.name);
        } else {
          pathologyError.value = "Could not delete pathology. Please try again.";
        }
      }
      async function deleteRestoration(entry) {
        var _a;
        if (!entry || !entry.name)
          return;
        if (!window.confirm("Delete this restoration?"))
          return;
        const isLocalRecord = typeof entry.name === "string" && entry.name.startsWith("restoration-");
        if (!((_a = teethData.value.chart) == null ? void 0 : _a.name) || isLocalRecord) {
          removeLocalRestoration(entry.name);
          return;
        }
        const success = await deleteChartRecord("Tooth Restoration", entry.name);
        if (success) {
          removeLocalRestoration(entry.name);
        } else {
          restorationError.value = "Could not delete restoration. Please try again.";
        }
      }
      async function submitPathology() {
        var _a;
        if (!canSubmitPathology.value || savingPathology.value)
          return;
        const tooth = pathologyTooth.value;
        if (!tooth)
          return;
        pathologyError.value = null;
        const payload = buildPathologyPayload();
        const docId = pathologyEditId.value;
        savingPathology.value = true;
        try {
          if (!((_a = teethData.value.chart) == null ? void 0 : _a.name)) {
            appendLocalPathology(tooth, payload, docId);
          } else {
            const response = await frappe.call("do_dental.api.save_tooth_update", {
              chart_id: teethData.value.chart.name,
              tooth,
              pathology: __spreadProps(__spreadValues({}, payload), { name: docId || void 0 })
            });
            if (response === null) {
              appendLocalPathology(tooth, payload, docId);
            } else if (currentPatientId.value) {
              await loadChart(currentPatientId.value);
            }
          }
          closePathologyPanel();
        } catch (err) {
          pathologyError.value = "Could not save pathology. Please try again.";
          console.warn("Failed to save pathology", err);
        } finally {
          savingPathology.value = false;
        }
      }
      async function submitRestoration() {
        var _a;
        if (!canSubmitRestoration.value || savingRestoration.value)
          return;
        const tooth = restorationTooth.value;
        if (!tooth)
          return;
        restorationError.value = null;
        const payload = buildRestorationPayload();
        const docId = restorationEditId.value;
        savingRestoration.value = true;
        try {
          if (!((_a = teethData.value.chart) == null ? void 0 : _a.name)) {
            appendLocalRestoration(tooth, payload, docId);
          } else {
            const response = await frappe.call("do_dental.api.save_tooth_update", {
              chart_id: teethData.value.chart.name,
              tooth,
              restoration: __spreadProps(__spreadValues({}, payload), { name: docId || void 0 })
            });
            if (response === null) {
              appendLocalRestoration(tooth, payload, docId);
            } else if (currentPatientId.value) {
              await loadChart(currentPatientId.value);
            }
          }
          closeRestorationPanel();
        } catch (err) {
          restorationError.value = "Could not save restoration. Please try again.";
          console.warn("Failed to save restoration", err);
        } finally {
          savingRestoration.value = false;
        }
      }
      async function submitCondition() {
        var _a;
        if (!canSubmitCondition.value || savingCondition.value)
          return;
        const tooth = conditionTooth.value;
        if (!tooth)
          return;
        conditionError.value = null;
        const payload = buildConditionPayload();
        savingCondition.value = true;
        try {
          if (!((_a = teethData.value.chart) == null ? void 0 : _a.name)) {
            updateLocalCondition(tooth, payload);
          } else {
            const response = await frappe.call("do_dental.api.save_tooth_update", {
              chart_id: teethData.value.chart.name,
              tooth,
              condition: payload
            });
            if (response === null) {
              updateLocalCondition(tooth, payload);
            } else if (currentPatientId.value) {
              await loadChart(currentPatientId.value);
            }
          }
          closeConditionPanel();
        } catch (err) {
          conditionError.value = "Could not save condition. Please try again.";
          console.warn("Failed to save condition", err);
        } finally {
          savingCondition.value = false;
        }
      }
      function selectAction(name) {
        const action = actionOptions.find((option) => option.name === name);
        if (!action)
          return;
        selectedAction.value = action.name;
        const nextLayers = normaliseLayerList(action.layers);
        if (!layersMatch(nextLayers, activeLayers.value)) {
          activeLayers.value = nextLayers;
        }
        if (action.view) {
          view.value = action.view;
        }
        if (action.name === "periodontal-probing") {
          periodontalPanelVisible.value = true;
        }
      }
      function toggleLayer(name) {
        const next = new Set(activeLayers.value);
        if (next.has(name))
          next.delete(name);
        else
          next.add(name);
        const nextLayers = normaliseLayerList(Array.from(next));
        if (!layersMatch(nextLayers, activeLayers.value)) {
          activeLayers.value = nextLayers;
        }
        const matched = actionOptions.find((action) => layersMatch(action.layers, nextLayers));
        selectedAction.value = matched ? matched.name : CUSTOM_ACTION;
      }
      function layersMatch(sourceLayers, candidateLayers) {
        const a = normaliseLayerList(sourceLayers);
        const b = normaliseLayerList(candidateLayers);
        if (a.length !== b.length)
          return false;
        return a.every((name, index) => name === b[index]);
      }
      function normaliseLayerList(layers) {
        const allowed = new Set(layerOptions.map((layer) => layer.name));
        const unique = Array.from(new Set(layers.filter((layer) => allowed.has(layer))));
        const order = layerOptions.map((layer) => layer.name);
        return order.filter((name) => unique.includes(name));
      }
      function normaliseSurfaceList(value) {
        if (!Array.isArray(value))
          return [];
        return value.map((item) => {
          if (typeof item === "string")
            return { surface: item };
          if (item && typeof item === "object" && item.surface)
            return { surface: item.surface };
          return null;
        }).filter(Boolean);
      }
      function normalisePathologyEntry(entry) {
        const tooth = String(entry.tooth);
        return __spreadProps(__spreadValues({}, entry), {
          name: entry.name || entry.id || null,
          tooth,
          pathology_type: entry.pathology_type,
          decay_surfaces: normaliseSurfaceList(entry.decay_surfaces),
          wear_surfaces: normaliseSurfaceList(entry.wear_surfaces),
          fracture_surfaces: normaliseSurfaceList(entry.fracture_surfaces)
        });
      }
      function normaliseRestorationEntry(entry) {
        return __spreadProps(__spreadValues({}, entry), {
          name: entry.name || entry.id || null,
          tooth: String(entry.tooth),
          surfaces: normaliseSurfaceList(entry.surfaces)
        });
      }
      function toNumber3(value, fallback = 0) {
        const parsed = parseFloat(value);
        return Number.isFinite(parsed) ? parsed : fallback;
      }
      function toNullableInt(value) {
        if (value === "" || value === null || value === void 0)
          return null;
        const parsed = parseInt(value, 10);
        return Number.isFinite(parsed) ? parsed : null;
      }
      function createLocalId(prefix) {
        return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
      }
      function createEmptySite() {
        return { depth: 0, margin: 0, bleeding: false, plaque: false, suppuration: false };
      }
      function mergeSite(site) {
        var _a;
        if (!site)
          return createEmptySite();
        return {
          depth: toNumber3(site.depth),
          margin: toNumber3(site.margin),
          bleeding: Boolean(site.bleeding),
          plaque: Boolean(site.plaque),
          suppuration: Boolean((_a = site.suppuration) != null ? _a : site.pus)
        };
      }
      function createDefaultPeriodontal() {
        return {
          buccal: { mb: createEmptySite(), b: createEmptySite(), db: createEmptySite() },
          lingual: { ml: createEmptySite(), l: createEmptySite(), dl: createEmptySite() }
        };
      }
      function deepFreeze(object) {
        Object.getOwnPropertyNames(object).forEach((prop) => {
          const value = object[prop];
          if (value && typeof value === "object") {
            deepFreeze(value);
          }
        });
        return Object.freeze(object);
      }
      const DEFAULT_PERIODONTAL_ENTRY = deepFreeze(createDefaultPeriodontal());
      function ensurePeriodontalEntry(entry) {
        const base = createDefaultPeriodontal();
        if (!entry)
          return base;
        for (const groupKey of ["buccal", "lingual"]) {
          const sourceGroup = entry[groupKey] || {};
          for (const siteKey of Object.keys(base[groupKey])) {
            base[groupKey][siteKey] = mergeSite(sourceGroup[siteKey]);
          }
        }
        return base;
      }
      const conditionsByTooth = computed2(() => {
        const map2 = {};
        for (const entry of teethData.value.conditions || []) {
          map2[String(entry.tooth_number)] = entry;
        }
        return map2;
      });
      const pathologyByTooth = computed2(() => {
        const map2 = {};
        for (const raw of teethData.value.pathology || []) {
          const entry = normalisePathologyEntry(raw);
          if (!map2[entry.tooth])
            map2[entry.tooth] = [];
          map2[entry.tooth].push(entry);
        }
        return map2;
      });
      const restorationsByTooth = computed2(() => {
        const map2 = {};
        for (const raw of teethData.value.restorations || []) {
          const entry = normaliseRestorationEntry(raw);
          if (!map2[entry.tooth])
            map2[entry.tooth] = [];
          map2[entry.tooth].push(entry);
        }
        return map2;
      });
      const periodontalByTooth = computed2(() => {
        const map2 = {};
        const source = teethData.value.periodontal || {};
        Object.keys(source).forEach((tooth) => {
          map2[String(tooth)] = ensurePeriodontalEntry(source[tooth]);
        });
        return map2;
      });
      const currentPeriodontalMeasurement = computed2(() => {
        var _a;
        const entry = currentQueueEntry.value;
        if (!entry)
          return createEmptySite();
        const record = periodontalByTooth.value[String(entry.tooth)];
        return ((_a = record == null ? void 0 : record[entry.site.group]) == null ? void 0 : _a[entry.site.id]) || createEmptySite();
      });
      const hasPreviousTooth = computed2(() => {
        const tooth = selectedTooth.value;
        if (!tooth)
          return false;
        const sequence = periodontalToothSequence.value;
        return sequence.indexOf(tooth) > 0;
      });
      const hasNextTooth = computed2(() => {
        const tooth = selectedTooth.value;
        if (!tooth)
          return false;
        const sequence = periodontalToothSequence.value;
        const idx = sequence.indexOf(tooth);
        return idx >= 0 && idx < sequence.length - 1;
      });
      function getToothCondition(num) {
        return conditionsByTooth.value[String(num)] || null;
      }
      function getToothPathology(num) {
        return pathologyByTooth.value[String(num)] || EMPTY_ARRAY;
      }
      function getToothRestorations(num) {
        return restorationsByTooth.value[String(num)] || EMPTY_ARRAY;
      }
      function getPeriodontal(num) {
        return periodontalByTooth.value[String(num)] || DEFAULT_PERIODONTAL_ENTRY;
      }
      function getNeighborNumber(num, delta) {
        const order = upperArchOrder.includes(String(num)) ? upperArchOrder : lowerArchOrder;
        const index = order.indexOf(String(num));
        if (index === -1)
          return null;
        return order[index + delta] || null;
      }
      function getNeighborPeriodontal(num, delta) {
        const neighbor = getNeighborNumber(num, delta);
        if (!neighbor)
          return null;
        return periodontalByTooth.value[String(neighbor)] || null;
      }
      function selectPeriodontalSite(targetSite) {
        if (!selectedTooth.value || !targetSite)
          return;
        const queue2 = periodontalQueue.value;
        const index = queue2.findIndex(
          (entry) => entry.tooth === String(selectedTooth.value) && entry.site.id === targetSite.id && entry.site.variant === targetSite.variant
        );
        if (index !== -1) {
          periodontalCursor.value = index;
          nextTick(() => {
            var _a;
            return (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      function goToPreviousTooth() {
        const tooth = selectedTooth.value;
        if (!tooth)
          return;
        const sequence = periodontalToothSequence.value;
        const idx = sequence.indexOf(tooth);
        if (idx > 0) {
          const prevTooth = sequence[idx - 1];
          const prevIndex = periodontalQueue.value.findIndex((entry) => entry.tooth === prevTooth);
          if (prevIndex !== -1) {
            periodontalCursor.value = prevIndex;
            nextTick(() => {
              var _a;
              return (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
            });
          }
        }
      }
      function goToNextTooth() {
        const tooth = selectedTooth.value;
        if (!tooth)
          return;
        const sequence = periodontalToothSequence.value;
        const idx = sequence.indexOf(tooth);
        if (idx !== -1 && idx < sequence.length - 1) {
          const nextTooth = sequence[idx + 1];
          const nextIndex = periodontalQueue.value.findIndex((entry) => entry.tooth === nextTooth);
          if (nextIndex !== -1) {
            periodontalCursor.value = nextIndex;
            nextTick(() => {
              var _a;
              return (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
            });
          }
        }
      }
      function goToNextSite() {
        const queue2 = periodontalQueue.value;
        if (!queue2.length)
          return;
        if (periodontalCursor.value < queue2.length - 1) {
          periodontalCursor.value += 1;
          nextTick(() => {
            var _a;
            return (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      function goToPreviousSite() {
        if (periodontalCursor.value > 0) {
          periodontalCursor.value -= 1;
          nextTick(() => {
            var _a;
            return (_a = periodontalPanelRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      function updatePeriodontalSiteValue(tooth, site, patch) {
        var _a;
        if (!tooth || !site)
          return;
        const periodontal = __spreadValues({}, teethData.value.periodontal);
        const base = ensurePeriodontalEntry(periodontal[tooth]);
        const groupKey = site.group || ((_a = SITE_INFO[site.id]) == null ? void 0 : _a.group) || "buccal";
        const group = __spreadValues({}, base[groupKey]);
        const currentSite = __spreadValues({}, group[site.id]);
        const updated = __spreadValues(__spreadValues({}, currentSite), patch);
        group[site.id] = updated;
        periodontal[tooth] = __spreadProps(__spreadValues({}, base), {
          [groupKey]: group
        });
        teethData.value.periodontal = periodontal;
        periodontalSaveMessage.value = "";
      }
      function setCurrentSiteMeasurement(field, value) {
        if (!isPeriodontalMode.value)
          return;
        const entry = currentQueueEntry.value;
        if (!entry)
          return;
        const site = entry.site;
        const tooth = entry.tooth;
        if (["bleeding", "plaque", "suppuration"].includes(field)) {
          updatePeriodontalSiteValue(tooth, site, { [field]: Boolean(value) });
        } else if (field === "depth") {
          const numericValue = Math.max(0, Math.min(9, toNumber3(value)));
          updatePeriodontalSiteValue(tooth, site, { [field]: numericValue });
        } else if (field === "margin") {
          const raw = typeof value === "string" ? value.trim() : String(value != null ? value : "");
          if (raw === "" || raw === "-" || raw === "+")
            return;
          let numericValue = Number(raw);
          if (!Number.isFinite(numericValue))
            return;
          numericValue = Math.max(-12, Math.min(12, numericValue));
          updatePeriodontalSiteValue(tooth, site, { [field]: numericValue });
        }
      }
      function toggleCurrentSiteFlag(flagKey) {
        const nextValue = !Boolean(currentPeriodontalMeasurement.value[flagKey]);
        setCurrentSiteMeasurement(flagKey, nextValue);
      }
      function confirmPeriodontalEntry() {
        if (periodontalAutoAdvance.value) {
          goToNextSite();
        }
      }
      function buildPeriodontalTestPayload() {
        const payload = {};
        const source = teethData.value.periodontal || {};
        Object.keys(source).forEach((tooth) => {
          payload[tooth] = ensurePeriodontalEntry(source[tooth]);
        });
        return payload;
      }
      async function submitPeriodontalTest() {
        var _a, _b;
        if (savingPeriodontal.value)
          return;
        const chartId = (_a = teethData.value.chart) == null ? void 0 : _a.name;
        const patientId = currentPatientId.value || ((_b = teethData.value.chart) == null ? void 0 : _b.patient);
        if (!chartId || !patientId) {
          periodontalSaveMessage.value = "Select a patient to save periodontal data.";
          return;
        }
        const payload = buildPeriodontalTestPayload();
        if (!Object.keys(payload).length) {
          periodontalSaveMessage.value = "No periodontal measurements to save.";
          return;
        }
        savingPeriodontal.value = true;
        periodontalSaveMessage.value = "";
        try {
          const response = await frappe.call("do_dental.api.save_periodontal_test", {
            chart_id: chartId,
            patient_id: patientId,
            periodontal: payload
          });
          if (!(response == null ? void 0 : response.message)) {
            throw new Error("Unable to save periodontal test");
          }
          periodontalSaveMessage.value = "Periodontal test saved.";
          if (currentPatientId.value) {
            await loadChart(currentPatientId.value);
          }
        } catch (err) {
          periodontalSaveMessage.value = "Could not save periodontal test.";
          console.warn("Failed to save periodontal test", err);
        } finally {
          savingPeriodontal.value = false;
        }
      }
      function periodontalSiteSummary(tooth, site) {
        var _a;
        if (!tooth)
          return "\u2014";
        const record = periodontalByTooth.value[String(tooth)];
        if (!record)
          return "\u2014";
        const info = SITE_INFO[site.id];
        const groupKey = site.group || (info == null ? void 0 : info.group);
        if (!groupKey)
          return "\u2014";
        const siteData = (_a = record[groupKey]) == null ? void 0 : _a[site.id];
        if (!siteData)
          return "\u2014";
        const depth = toNumber3(siteData.depth, 0);
        const margin = toNumber3(siteData.margin, 0);
        const depthText = Number(depth).toString();
        const marginText = margin ? ` / ${margin}` : "";
        return `${depthText}${marginText}`;
      }
      function assignTeethData(payload) {
        teethData.value = {
          chart: (payload == null ? void 0 : payload.chart) || null,
          conditions: (payload == null ? void 0 : payload.conditions) || [],
          pathology: (payload == null ? void 0 : payload.pathology) || [],
          restorations: (payload == null ? void 0 : payload.restorations) || [],
          periodontal: (payload == null ? void 0 : payload.periodontal) || {}
        };
      }
      function clearChartData() {
        assignTeethData({
          chart: null,
          conditions: [],
          pathology: [],
          restorations: [],
          periodontal: {}
        });
      }
      async function loadChart(patientId) {
        const targetId = patientId || currentPatientId.value || DEFAULT_PATIENT_ID;
        if (!targetId) {
          loadError.value = new Error("Select a patient to view the chart.");
          clearChartData();
          return;
        }
        currentPatientId.value = targetId;
        loading.value = true;
        loadError.value = null;
        try {
          const response = await frappe.call("do_dental.api.get_patient_dental_chart", { patient_id: targetId });
          console.log(response == null ? void 0 : response.message);
          if (response == null ? void 0 : response.message) {
            assignTeethData(response.message);
            return;
          }
          throw new Error("No chart data returned");
        } catch (err) {
          loadError.value = err instanceof Error ? err : new Error("Unable to load chart data");
          clearChartData();
        } finally {
          loading.value = false;
        }
      }
      onMounted(() => {
        ensureSurfaceOptions();
        handlePatientChange(currentPatientId.value || props.patientId || "");
      });
      const __returned__ = { props, DEFAULT_PATIENT_ID, EMPTY_ARRAY, PATHOLOGY_TYPE_OPTIONS, DECAY_STAGE_OPTIONS, CAVITATION_OPTIONS, PULP_OPTIONS, DECAY_LEVEL_OPTIONS, FRACTURE_TYPE_OPTIONS, FRACTURE_POSITION_OPTIONS, WEAR_TYPE_OPTIONS, DISCOLORATION_TYPE_OPTIONS, RESTORATION_TYPE_OPTIONS, RESTORATION_MATERIAL_OPTIONS, RESTORATION_QUALITY_OPTIONS, RESTORATION_DETAIL_OPTIONS, CROWN_MATERIAL_OPTIONS, CROWN_TYPE_OPTIONS, CROWN_BASE_OPTIONS, CROWN_IMPLANT_TYPE_OPTIONS, CONDITION_STATE_OPTIONS, ERUPTION_STATUS_OPTIONS, DEFAULT_SURFACE_OPTIONS, buildSurfaceOptionList, formatSurfaceLabel, actionOptions, CUSTOM_ACTION, selectedAction, view, showLegend, loading, loadError, currentPatientId, loadErrorMessage, surfaceOptions, surfaceOptionsLoaded, surfacesLoading, pathologyTooth, pathologyPanelVisible, pathologyEditId, pathologyForm, pathologyError, savingPathology, restorationTooth, restorationPanelVisible, restorationEditId, restorationForm, restorationError, savingRestoration, conditionTooth, conditionPanelVisible, conditionForm, conditionError, savingCondition, savingPeriodontal, periodontalSaveMessage, layerOptions, activeLayers, teethData, upperLeft, upperRight, lowerLeft, lowerRight, upperArchOrder, lowerArchOrder, SITE_INFO, PANEL_SITE_LAYOUT, PERIODONTAL_FLAGS, periodontalAutoAdvance, periodontalCursor, periodontalQueue, currentQueueEntry, selectedTooth, currentPeriodontalSite, periodontalPanelVisible, layerIsActive, isPeriodontalMode, isPathologyMode, isRestorationMode, isConditionMode, canSubmitPathology, canSubmitRestoration, canSubmitCondition, showRestorationDetailFields, showCrownFields, showImplantFields, activePathologyEntries, activeRestorationEntries, activeConditionEntry, periodontalPanelRef, handlePatientChange, isSelectedTooth, handleToothSelect, periodontalToothSequence, buildPeriodontalQueue, panelSites, isUpperToothNumber, siteDisplayLabel, isActiveSite, hidePeriodontalPanel, handlePeriodontalKeyDown, ensureSurfaceOptions, startPathologyFlow, resetPathologyForm, populatePathologyForm, editPathology, closePathologyPanel, startRestorationFlow, resetRestorationForm, populateRestorationForm, editRestoration, closeRestorationPanel, startConditionFlow, resetConditionForm, closeConditionPanel, convertSurfaceSelection, surfaceListFromEntry, buildPathologyPayload, buildRestorationPayload, buildConditionPayload, appendLocalPathology, appendLocalRestoration, removeLocalPathology, removeLocalRestoration, updateLocalCondition, joinSurfaceLabels, summarisePathology, summariseRestoration, summariseCondition, deleteChartRecord, deletePathology, deleteRestoration, submitPathology, submitRestoration, submitCondition, selectAction, toggleLayer, layersMatch, normaliseLayerList, normaliseSurfaceList, normalisePathologyEntry, normaliseRestorationEntry, toNumber: toNumber3, toNullableInt, createLocalId, createEmptySite, mergeSite, createDefaultPeriodontal, deepFreeze, DEFAULT_PERIODONTAL_ENTRY, ensurePeriodontalEntry, conditionsByTooth, pathologyByTooth, restorationsByTooth, periodontalByTooth, currentPeriodontalMeasurement, hasPreviousTooth, hasNextTooth, getToothCondition, getToothPathology, getToothRestorations, getPeriodontal, getNeighborNumber, getNeighborPeriodontal, selectPeriodontalSite, goToPreviousTooth, goToNextTooth, goToNextSite, goToPreviousSite, updatePeriodontalSiteValue, setCurrentSiteMeasurement, toggleCurrentSiteFlag, confirmPeriodontalEntry, buildPeriodontalTestPayload, submitPeriodontalTest, periodontalSiteSummary, assignTeethData, clearChartData, loadChart, computed: computed2, nextTick, onMounted, reactive, ref, watch: watch2, ToothCanvas: ToothCanvas_default2, get surfaceMap() {
        return surfaceMap;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/DentalChart.vue?type=template
  var _withScopeId = (n) => (pushScopeId("data-v-0fb526e5"), n = n(), popScopeId(), n);
  var _hoisted_12 = { class: "chart-header m-3" };
  var _hoisted_22 = { class: "action-tabs" };
  var _hoisted_32 = ["onClick"];
  var _hoisted_4 = { class: "chart-meta" };
  var _hoisted_5 = {
    key: 0,
    class: "chart-status"
  };
  var _hoisted_6 = {
    key: 1,
    class: "chart-status warning"
  };
  var _hoisted_7 = { class: "chart-main" };
  var _hoisted_8 = { class: "chart-body" };
  var _hoisted_9 = {
    key: 0,
    class: "all-jaws"
  };
  var _hoisted_10 = { class: "teeth-row" };
  var _hoisted_11 = { class: "teeth-row" };
  var _hoisted_122 = { class: "teeth-row" };
  var _hoisted_13 = { class: "teeth-row" };
  var _hoisted_14 = { class: "upper-jaw" };
  var _hoisted_15 = { class: "teeth-row" };
  var _hoisted_16 = { class: "teeth-row" };
  var _hoisted_17 = { class: "teeth-row" };
  var _hoisted_18 = { class: "lower-jaw" };
  var _hoisted_19 = { class: "teeth-row" };
  var _hoisted_20 = { class: "teeth-row" };
  var _hoisted_21 = { class: "teeth-row" };
  var _hoisted_222 = { class: "panel-header" };
  var _hoisted_23 = ["disabled"];
  var _hoisted_24 = { class: "panel-title" };
  var _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "label" }, "Tooth", -1));
  var _hoisted_26 = { class: "panel-actions" };
  var _hoisted_27 = ["disabled"];
  var _hoisted_28 = { class: "site-grid" };
  var _hoisted_29 = ["onClick"];
  var _hoisted_30 = { class: "site-label" };
  var _hoisted_31 = { class: "site-summary" };
  var _hoisted_322 = { class: "measurement-section" };
  var _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Probing depth (0-9 mm)", -1));
  var _hoisted_34 = ["value", "onKeyup"];
  var _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Gingival margin (mm)", -1));
  var _hoisted_36 = ["value", "onKeyup"];
  var _hoisted_37 = { class: "flags-section" };
  var _hoisted_38 = ["checked", "onChange"];
  var _hoisted_39 = { class: "panel-footer" };
  var _hoisted_40 = { class: "auto-toggle" };
  var _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Automatic sequential probing", -1));
  var _hoisted_42 = { class: "footer-actions" };
  var _hoisted_43 = ["disabled"];
  var _hoisted_44 = {
    key: 0,
    class: "panel-hint"
  };
  var _hoisted_45 = {
    key: 0,
    class: "action-panel condition-panel"
  };
  var _hoisted_46 = { class: "panel-header" };
  var _hoisted_47 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "panel-title" }, "Tooth Condition", -1));
  var _hoisted_48 = { class: "panel-subtitle" };
  var _hoisted_49 = { class: "panel-body" };
  var _hoisted_50 = {
    key: 0,
    class: "existing-list"
  };
  var _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", null, "Existing", -1));
  var _hoisted_52 = { class: "form-field" };
  var _hoisted_53 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "condition-state" }, "State", -1));
  var _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_55 = ["value"];
  var _hoisted_56 = { class: "form-field" };
  var _hoisted_57 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "eruption-status" }, "Eruption Status", -1));
  var _hoisted_58 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_59 = ["value"];
  var _hoisted_60 = { class: "form-field" };
  var _hoisted_61 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "condition-mobility" }, "Mobility", -1));
  var _hoisted_62 = { class: "form-field" };
  var _hoisted_63 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "condition-furcation" }, "Furcation", -1));
  var _hoisted_64 = { class: "form-field" };
  var _hoisted_65 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "condition-notes" }, "Notes", -1));
  var _hoisted_66 = {
    key: 1,
    class: "panel-error"
  };
  var _hoisted_67 = { class: "panel-footer" };
  var _hoisted_68 = ["disabled"];
  var _hoisted_69 = {
    key: 0,
    class: "action-panel pathology-panel"
  };
  var _hoisted_70 = { class: "panel-header" };
  var _hoisted_71 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "panel-title" }, "Pathology", -1));
  var _hoisted_72 = { class: "panel-subtitle" };
  var _hoisted_73 = { class: "panel-body" };
  var _hoisted_74 = {
    key: 0,
    class: "existing-list"
  };
  var _hoisted_75 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", null, "Existing", -1));
  var _hoisted_76 = { class: "item-actions" };
  var _hoisted_77 = ["onClick"];
  var _hoisted_78 = ["onClick"];
  var _hoisted_79 = { class: "form-field" };
  var _hoisted_80 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "pathology-type" }, "Pathology Type", -1));
  var _hoisted_81 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_82 = ["value"];
  var _hoisted_83 = {
    key: 1,
    class: "form-section"
  };
  var _hoisted_84 = { class: "form-field" };
  var _hoisted_85 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "decay-stage" }, "Decay Stage", -1));
  var _hoisted_86 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_87 = ["value"];
  var _hoisted_88 = { class: "form-field" };
  var _hoisted_89 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "decay-cavitation" }, "Cavitation", -1));
  var _hoisted_90 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_91 = ["value"];
  var _hoisted_92 = {
    key: 0,
    class: "form-field"
  };
  var _hoisted_93 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "decay-pulp" }, "Pulp", -1));
  var _hoisted_94 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_95 = ["value"];
  var _hoisted_96 = { class: "form-field" };
  var _hoisted_97 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "decay-level" }, "Decay Level", -1));
  var _hoisted_98 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_99 = ["value"];
  var _hoisted_100 = { class: "form-field" };
  var _hoisted_101 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", null, "Decay Surfaces", -1));
  var _hoisted_102 = {
    key: 0,
    class: "surface-grid"
  };
  var _hoisted_103 = ["value"];
  var _hoisted_104 = {
    key: 1,
    class: "field-hint"
  };
  var _hoisted_105 = {
    key: 2,
    class: "field-hint"
  };
  var _hoisted_106 = {
    key: 2,
    class: "form-section"
  };
  var _hoisted_107 = { class: "form-field" };
  var _hoisted_108 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "fracture-type" }, "Fracture Type", -1));
  var _hoisted_109 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_110 = ["value"];
  var _hoisted_111 = { class: "form-field" };
  var _hoisted_112 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "fracture-position" }, "Fracture Position", -1));
  var _hoisted_113 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_114 = ["value"];
  var _hoisted_115 = {
    key: 3,
    class: "form-section"
  };
  var _hoisted_116 = { class: "form-field" };
  var _hoisted_117 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "wear-type" }, "Wear Type", -1));
  var _hoisted_118 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_119 = ["value"];
  var _hoisted_120 = { class: "form-field" };
  var _hoisted_121 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", null, "Wear Surfaces", -1));
  var _hoisted_1222 = {
    key: 0,
    class: "surface-grid"
  };
  var _hoisted_123 = ["value"];
  var _hoisted_124 = {
    key: 1,
    class: "field-hint"
  };
  var _hoisted_125 = {
    key: 2,
    class: "field-hint"
  };
  var _hoisted_126 = {
    key: 4,
    class: "form-section"
  };
  var _hoisted_127 = { class: "form-field" };
  var _hoisted_128 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "discoloration-type" }, "Discoloration Type", -1));
  var _hoisted_129 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_130 = ["value"];
  var _hoisted_131 = { class: "form-field" };
  var _hoisted_132 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "pathology-notes" }, "Notes", -1));
  var _hoisted_133 = {
    key: 5,
    class: "panel-error"
  };
  var _hoisted_134 = { class: "panel-footer" };
  var _hoisted_135 = ["disabled"];
  var _hoisted_136 = {
    key: 0,
    class: "action-panel restoration-panel"
  };
  var _hoisted_137 = { class: "panel-header" };
  var _hoisted_138 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "panel-title" }, "Restoration", -1));
  var _hoisted_139 = { class: "panel-subtitle" };
  var _hoisted_140 = { class: "panel-body" };
  var _hoisted_141 = {
    key: 0,
    class: "existing-list"
  };
  var _hoisted_142 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", null, "Existing", -1));
  var _hoisted_143 = { class: "item-actions" };
  var _hoisted_144 = ["onClick"];
  var _hoisted_145 = ["onClick"];
  var _hoisted_146 = { class: "form-field" };
  var _hoisted_147 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "restoration-type" }, "Restoration Type", -1));
  var _hoisted_148 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_149 = ["value"];
  var _hoisted_150 = { class: "form-field" };
  var _hoisted_151 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "restoration-material" }, "Material", -1));
  var _hoisted_152 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_153 = ["value"];
  var _hoisted_154 = { class: "form-field" };
  var _hoisted_155 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", null, "Surfaces", -1));
  var _hoisted_156 = {
    key: 0,
    class: "surface-grid"
  };
  var _hoisted_157 = ["value"];
  var _hoisted_158 = {
    key: 1,
    class: "field-hint"
  };
  var _hoisted_159 = {
    key: 2,
    class: "field-hint"
  };
  var _hoisted_160 = { class: "form-field" };
  var _hoisted_161 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "restoration-quality" }, "Quality", -1));
  var _hoisted_162 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_163 = ["value"];
  var _hoisted_164 = { class: "form-field" };
  var _hoisted_165 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "restoration-detail" }, "Detail", -1));
  var _hoisted_166 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_167 = ["value"];
  var _hoisted_168 = { class: "form-field" };
  var _hoisted_169 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "crown-material" }, "Crown Material", -1));
  var _hoisted_170 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_171 = ["value"];
  var _hoisted_172 = { class: "form-field" };
  var _hoisted_173 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "crown-type" }, "Crown Type", -1));
  var _hoisted_174 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_175 = ["value"];
  var _hoisted_176 = { class: "form-field" };
  var _hoisted_177 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "crown-base" }, "Crown Base", -1));
  var _hoisted_178 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_179 = ["value"];
  var _hoisted_180 = {
    key: 0,
    class: "form-field"
  };
  var _hoisted_181 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "crown-implant-type" }, "Crown Implant Type", -1));
  var _hoisted_182 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select", -1));
  var _hoisted_183 = ["value"];
  var _hoisted_184 = {
    key: 3,
    class: "panel-error"
  };
  var _hoisted_185 = { class: "panel-footer" };
  var _hoisted_186 = ["disabled"];
  var _hoisted_187 = { class: "mouth" };
  var _hoisted_188 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    "aria-labelledby": "upper-jaw-image-title",
    role: "img"
  }, [
    /* @__PURE__ */ createBaseVNode("title", { id: "upper-jaw-image-title" }, "Upper Jaw"),
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": "#upper-jaw" }, [
      /* @__PURE__ */ createBaseVNode("symbol", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "upper-jaw",
        width: "28",
        height: "28"
      }, [
        /* @__PURE__ */ createBaseVNode("path", { d: "M6.1 15.5C6.4 12.2 8 9.6 10 9.6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6s-3.6-.7-3.9-1.6c-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.1.7-1.5 1.2-3 1.2-1.6 0-3-.6-3-1.4v-.1c0-2.9 1.4-5.3 3.1-5.3 1.5.1 2.7 1.9 3 4.3z" })
      ])
    ])
  ], -1));
  var _hoisted_189 = [
    _hoisted_188
  ];
  var _hoisted_190 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    "aria-labelledby": "jaws-image-title",
    role: "img"
  }, [
    /* @__PURE__ */ createBaseVNode("title", { id: "jaws-image-title" }, "Full mouth"),
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": "#jaws" }, [
      /* @__PURE__ */ createBaseVNode("symbol", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "jaws",
        width: "28",
        height: "28"
      }, [
        /* @__PURE__ */ createBaseVNode("path", { d: "M20.9 17.4c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.1-.7 1.3-1.2 2.7-1.2 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.1-.1-2.2-1.7-2.4-3.8zm-14.8-6c.3-3.4 1.9-6 3.9-6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.3.7-1.6 1.2-3.1 1.2-1.6 0-3-.6-3-1.4v-.1C-.1 9.4 1.3 7 3 7c1.6.1 2.8 1.9 3.1 4.4z" })
      ])
    ])
  ], -1));
  var _hoisted_191 = [
    _hoisted_190
  ];
  var _hoisted_192 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    "aria-labelledby": "lower-jaw-image-title",
    role: "img"
  }, [
    /* @__PURE__ */ createBaseVNode("title", { id: "lower-jaw-image-title" }, "Lower Jaw"),
    /* @__PURE__ */ createBaseVNode("use", { "xlink:href": "#lower-jaw" }, [
      /* @__PURE__ */ createBaseVNode("symbol", {
        xmlns: "http://www.w3.org/2000/svg",
        id: "lower-jaw",
        width: "28",
        height: "28"
      }, [
        /* @__PURE__ */ createBaseVNode("path", { d: "M20.9 12.6c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.3-.6 1.5-1.1 2.9-1.1 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.2-.1-2.3-1.7-2.6-3.9z" })
      ])
    ])
  ], -1));
  var _hoisted_193 = [
    _hoisted_192
  ];
  var _hoisted_194 = { class: "legend-panel" };
  var _hoisted_195 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", null, "Legend", -1));
  var _hoisted_196 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("section", null, [
    /* @__PURE__ */ createBaseVNode("h4", null, "Layers"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "Periodontal"),
        /* @__PURE__ */ createTextVNode(": blue fill (probing depth) and red line (gingival margin).")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "Pathology"),
        /* @__PURE__ */ createTextVNode(": coloured overlays for decay, fractures and discolorations.")
      ]),
      /* @__PURE__ */ createBaseVNode("li", null, [
        /* @__PURE__ */ createBaseVNode("strong", null, "Restorations"),
        /* @__PURE__ */ createTextVNode(": material-tinted surfaces for existing work.")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("h4", null, "Tips"),
    /* @__PURE__ */ createBaseVNode("ul", null, [
      /* @__PURE__ */ createBaseVNode("li", null, "Switch jaws with the right-hand toolbar to focus upper, lower or full views."),
      /* @__PURE__ */ createBaseVNode("li", null, "Toggle layer visibility to compare periodontal values against other findings.")
    ])
  ], -1));
  var _hoisted_197 = { class: "layer-controls" };
  var _hoisted_198 = ["checked", "onChange"];
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["dental-chart-container", { "periodontal-mode": $setup.isPeriodontalMode }])
    }, [
      createBaseVNode("div", _hoisted_12, [
        createBaseVNode("div", _hoisted_22, [
          (openBlock(), createElementBlock(Fragment, null, renderList($setup.actionOptions, (action) => {
            return createBaseVNode("button", {
              key: action.name,
              type: "button",
              class: normalizeClass({ active: $setup.selectedAction === action.name }),
              onClick: ($event) => $setup.selectAction(action.name)
            }, toDisplayString(action.label), 11, _hoisted_32);
          }), 64))
        ]),
        createBaseVNode("div", _hoisted_4, [
          $setup.loading ? (openBlock(), createElementBlock("span", _hoisted_5, "Loading\u2026")) : $setup.loadError ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString($setup.loadErrorMessage), 1)) : createCommentVNode("v-if", true),
          createBaseVNode("button", {
            type: "button",
            class: "legend-button",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.showLegend = true)
          }, "Legend")
        ])
      ]),
      createBaseVNode("div", _hoisted_7, [
        createBaseVNode("div", _hoisted_8, [
          createCommentVNode(" All Jaws "),
          $setup.view === "all" ? (openBlock(), createElementBlock("div", _hoisted_9, [
            createBaseVNode("ul", _hoisted_10, [
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperLeft, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    arch: "upper",
                    invertY: false,
                    projection: "buccal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64)),
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperRight, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    arch: "upper",
                    invertY: false,
                    projection: "buccal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64))
            ]),
            createBaseVNode("ul", _hoisted_11, [
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperLeft, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    "show-num": "down",
                    arch: "upper",
                    invertY: false,
                    projection: "incisal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64)),
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperRight, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    "show-num": "down",
                    arch: "upper",
                    invertY: false,
                    projection: "incisal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64))
            ]),
            createBaseVNode("ul", _hoisted_122, [
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerLeft, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    "show-num": "up",
                    arch: "lower",
                    invertY: false,
                    projection: "incisal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64)),
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerRight, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    "show-num": "up",
                    arch: "lower",
                    invertY: false,
                    projection: "incisal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64))
            ]),
            createBaseVNode("ul", _hoisted_13, [
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerLeft, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    arch: "lower",
                    invertY: false,
                    projection: "buccal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64)),
              (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerRight, (num) => {
                return createBaseVNode("li", { key: num }, [
                  createVNode($setup["ToothCanvas"], {
                    view: $setup.view,
                    "tooth-number": num,
                    arch: "lower",
                    invertY: false,
                    projection: "buccal",
                    condition: $setup.getToothCondition(num),
                    pathology: $setup.getToothPathology(num),
                    restorations: $setup.getToothRestorations(num),
                    periodontal: $setup.getPeriodontal(num),
                    "previous-number": $setup.getNeighborNumber(num, -1),
                    "next-number": $setup.getNeighborNumber(num, 1),
                    "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                    "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                    "show-pathology": $setup.layerIsActive("pathology"),
                    "show-restorations": $setup.layerIsActive("restorations"),
                    "show-periodontal": $setup.layerIsActive("periodontal"),
                    "is-selected": $setup.isSelectedTooth(num),
                    onSelect: $setup.handleToothSelect
                  }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                ]);
              }), 64))
            ])
          ])) : $setup.view === "upper" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Upper Jaw "),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("ul", _hoisted_15, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperLeft, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "upper",
                      invertY: false,
                      projection: "buccal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64)),
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperRight, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "upper",
                      invertY: false,
                      projection: "buccal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64))
              ]),
              createBaseVNode("ul", _hoisted_16, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperLeft, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "upper",
                      invertY: false,
                      projection: "incisal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64)),
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperRight, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "upper",
                      invertY: false,
                      projection: "incisal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64))
              ]),
              createBaseVNode("ul", _hoisted_17, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperLeft, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      "show-num": "down",
                      arch: "upper",
                      invertY: true,
                      projection: "lingual",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64)),
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.upperRight, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      "show-num": "down",
                      arch: "upper",
                      invertY: true,
                      projection: "lingual",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64))
              ])
            ])
          ], 2112)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createCommentVNode(" Lower Jaw "),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("ul", _hoisted_19, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerLeft, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "lower",
                      invertY: true,
                      projection: "buccal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64)),
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerRight, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "lower",
                      invertY: true,
                      projection: "buccal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64))
              ]),
              createBaseVNode("ul", _hoisted_20, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerLeft, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "lower",
                      invertY: false,
                      projection: "incisal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64)),
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerRight, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      arch: "lower",
                      invertY: false,
                      projection: "incisal",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64))
              ]),
              createBaseVNode("ul", _hoisted_21, [
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerLeft, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      "show-num": "down",
                      invertY: false,
                      arch: "lower",
                      projection: "lingual",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64)),
                (openBlock(), createElementBlock(Fragment, null, renderList($setup.lowerRight, (num) => {
                  return createBaseVNode("li", { key: num }, [
                    createVNode($setup["ToothCanvas"], {
                      view: $setup.view,
                      "tooth-number": num,
                      "show-num": "down",
                      invertY: false,
                      arch: "lower",
                      projection: "lingual",
                      condition: $setup.getToothCondition(num),
                      pathology: $setup.getToothPathology(num),
                      restorations: $setup.getToothRestorations(num),
                      periodontal: $setup.getPeriodontal(num),
                      "previous-number": $setup.getNeighborNumber(num, -1),
                      "next-number": $setup.getNeighborNumber(num, 1),
                      "previous-periodontal": $setup.getNeighborPeriodontal(num, -1),
                      "next-periodontal": $setup.getNeighborPeriodontal(num, 1),
                      "show-pathology": $setup.layerIsActive("pathology"),
                      "show-restorations": $setup.layerIsActive("restorations"),
                      "show-periodontal": $setup.layerIsActive("periodontal"),
                      "is-selected": $setup.isSelectedTooth(num),
                      onSelect: $setup.handleToothSelect
                    }, null, 8, ["view", "tooth-number", "condition", "pathology", "restorations", "periodontal", "previous-number", "next-number", "previous-periodontal", "next-periodontal", "show-pathology", "show-restorations", "show-periodontal", "is-selected"])
                  ]);
                }), 64))
              ])
            ])
          ], 2112))
        ]),
        createVNode(Transition, { name: "panel-slide" }, {
          default: withCtx(() => {
            var _a;
            return [
              $setup.isPeriodontalMode && $setup.selectedTooth && $setup.periodontalPanelVisible ? (openBlock(), createElementBlock("aside", {
                key: 0,
                class: "periodontal-panel",
                ref: "periodontalPanelRef",
                tabindex: "0",
                onKeydown: $setup.handlePeriodontalKeyDown
              }, [
                createBaseVNode("header", _hoisted_222, [
                  createBaseVNode("button", {
                    type: "button",
                    class: "nav-button",
                    disabled: !$setup.hasPreviousTooth,
                    onClick: $setup.goToPreviousTooth
                  }, "\u2039", 8, _hoisted_23),
                  createBaseVNode("div", _hoisted_24, [
                    _hoisted_25,
                    createBaseVNode("strong", null, toDisplayString($setup.selectedTooth), 1)
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("button", {
                      type: "button",
                      class: "nav-button",
                      disabled: !$setup.hasNextTooth,
                      onClick: $setup.goToNextTooth
                    }, "\u203A", 8, _hoisted_27),
                    createBaseVNode("button", {
                      type: "button",
                      class: "panel-close",
                      onClick: $setup.hidePeriodontalPanel
                    }, "\xD7")
                  ])
                ]),
                createBaseVNode("section", _hoisted_28, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.panelSites, (site) => {
                    return openBlock(), createElementBlock("button", {
                      key: `${site.variant}-${site.id}`,
                      type: "button",
                      class: normalizeClass({ active: $setup.isActiveSite(site) }),
                      onClick: ($event) => $setup.selectPeriodontalSite(site)
                    }, [
                      createBaseVNode("span", _hoisted_30, toDisplayString($setup.siteDisplayLabel(site)), 1),
                      createBaseVNode("small", _hoisted_31, toDisplayString($setup.periodontalSiteSummary($setup.selectedTooth, site)), 1)
                    ], 10, _hoisted_29);
                  }), 128))
                ]),
                createBaseVNode("section", _hoisted_322, [
                  createBaseVNode("label", null, [
                    _hoisted_33,
                    createBaseVNode("input", {
                      type: "number",
                      min: "0",
                      max: "9",
                      step: "1",
                      inputmode: "numeric",
                      "data-field": "depth",
                      value: $setup.currentPeriodontalMeasurement.depth,
                      onInput: _cache[1] || (_cache[1] = ($event) => $setup.setCurrentSiteMeasurement("depth", $event.target.value)),
                      onKeyup: withKeys($setup.confirmPeriodontalEntry, ["enter"])
                    }, null, 40, _hoisted_34)
                  ]),
                  createBaseVNode("label", null, [
                    _hoisted_35,
                    createBaseVNode("input", {
                      type: "number",
                      min: "-12",
                      max: "12",
                      step: "0.5",
                      inputmode: "decimal",
                      "data-field": "margin",
                      value: $setup.currentPeriodontalMeasurement.margin,
                      onInput: _cache[2] || (_cache[2] = ($event) => $setup.setCurrentSiteMeasurement("margin", $event.target.value)),
                      onKeyup: withKeys($setup.confirmPeriodontalEntry, ["enter"])
                    }, null, 40, _hoisted_36)
                  ])
                ]),
                createBaseVNode("section", _hoisted_37, [
                  (openBlock(), createElementBlock(Fragment, null, renderList($setup.PERIODONTAL_FLAGS, (flag) => {
                    return createBaseVNode("label", {
                      key: flag.key,
                      class: "flag-toggle"
                    }, [
                      createBaseVNode("input", {
                        type: "checkbox",
                        checked: Boolean($setup.currentPeriodontalMeasurement[flag.key]),
                        onChange: ($event) => $setup.toggleCurrentSiteFlag(flag.key)
                      }, null, 40, _hoisted_38),
                      createBaseVNode("span", null, toDisplayString(flag.label), 1)
                    ]);
                  }), 64))
                ]),
                createBaseVNode("section", _hoisted_39, [
                  createBaseVNode("label", _hoisted_40, [
                    withDirectives(createBaseVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.periodontalAutoAdvance = $event)
                    }, null, 512), [
                      [vModelCheckbox, $setup.periodontalAutoAdvance]
                    ]),
                    _hoisted_41
                  ]),
                  createBaseVNode("div", _hoisted_42, [
                    createBaseVNode("button", {
                      type: "button",
                      class: "secondary",
                      onClick: $setup.goToNextSite
                    }, "Next Site"),
                    createBaseVNode("button", {
                      type: "button",
                      class: "primary",
                      onClick: $setup.goToNextTooth
                    }, "Next Tooth"),
                    createBaseVNode("button", {
                      type: "button",
                      class: "primary",
                      disabled: $setup.savingPeriodontal || !$setup.currentPatientId || !((_a = $setup.teethData.chart) == null ? void 0 : _a.name),
                      onClick: $setup.submitPeriodontalTest
                    }, toDisplayString($setup.savingPeriodontal ? "Saving\u2026" : "Save Test"), 9, _hoisted_43)
                  ]),
                  $setup.periodontalSaveMessage ? (openBlock(), createElementBlock("p", _hoisted_44, toDisplayString($setup.periodontalSaveMessage), 1)) : createCommentVNode("v-if", true)
                ])
              ], 544)) : createCommentVNode("v-if", true)
            ];
          }),
          _: 1
        }),
        createVNode(Transition, { name: "panel-slide" }, {
          default: withCtx(() => [
            $setup.isConditionMode && $setup.conditionPanelVisible && $setup.conditionTooth ? (openBlock(), createElementBlock("aside", _hoisted_45, [
              createBaseVNode("header", _hoisted_46, [
                createBaseVNode("div", null, [
                  _hoisted_47,
                  createBaseVNode("p", _hoisted_48, "Tooth " + toDisplayString($setup.conditionTooth), 1)
                ]),
                createBaseVNode("button", {
                  type: "button",
                  class: "panel-close",
                  onClick: $setup.closeConditionPanel,
                  "aria-label": "Close condition panel"
                }, " \xD7 ")
              ]),
              createBaseVNode("section", _hoisted_49, [
                $setup.activeConditionEntry ? (openBlock(), createElementBlock("div", _hoisted_50, [
                  _hoisted_51,
                  createBaseVNode("p", null, toDisplayString($setup.summariseCondition($setup.activeConditionEntry)), 1)
                ])) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_52, [
                  _hoisted_53,
                  withDirectives(createBaseVNode("select", {
                    id: "condition-state",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.conditionForm.state = $event)
                  }, [
                    _hoisted_54,
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.CONDITION_STATE_OPTIONS, (option) => {
                      return createBaseVNode("option", {
                        key: `condition-state-${option}`,
                        value: option
                      }, toDisplayString(option), 9, _hoisted_55);
                    }), 64))
                  ], 512), [
                    [vModelSelect, $setup.conditionForm.state]
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  _hoisted_57,
                  withDirectives(createBaseVNode("select", {
                    id: "eruption-status",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.conditionForm.eruption_status = $event)
                  }, [
                    _hoisted_58,
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.ERUPTION_STATUS_OPTIONS, (option) => {
                      return createBaseVNode("option", {
                        key: `eruption-status-${option}`,
                        value: option
                      }, toDisplayString(option), 9, _hoisted_59);
                    }), 64))
                  ], 512), [
                    [vModelSelect, $setup.conditionForm.eruption_status]
                  ])
                ]),
                createBaseVNode("div", _hoisted_60, [
                  _hoisted_61,
                  withDirectives(createBaseVNode("input", {
                    id: "condition-mobility",
                    type: "number",
                    min: "0",
                    max: "9",
                    step: "1",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.conditionForm.mobility = $event),
                    placeholder: "Enter a number"
                  }, null, 512), [
                    [vModelText, $setup.conditionForm.mobility]
                  ])
                ]),
                createBaseVNode("div", _hoisted_62, [
                  _hoisted_63,
                  withDirectives(createBaseVNode("input", {
                    id: "condition-furcation",
                    type: "number",
                    min: "0",
                    max: "9",
                    step: "1",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.conditionForm.furcation = $event),
                    placeholder: "Enter a number"
                  }, null, 512), [
                    [vModelText, $setup.conditionForm.furcation]
                  ])
                ]),
                createBaseVNode("div", _hoisted_64, [
                  _hoisted_65,
                  withDirectives(createBaseVNode("textarea", {
                    id: "condition-notes",
                    rows: "3",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $setup.conditionForm.condition_notes = $event),
                    placeholder: "Add notes (optional)"
                  }, null, 512), [
                    [vModelText, $setup.conditionForm.condition_notes]
                  ])
                ]),
                $setup.conditionError ? (openBlock(), createElementBlock("p", _hoisted_66, toDisplayString($setup.conditionError), 1)) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("footer", _hoisted_67, [
                createBaseVNode("button", {
                  type: "button",
                  class: "secondary",
                  onClick: $setup.closeConditionPanel
                }, "Cancel"),
                createBaseVNode("button", {
                  type: "button",
                  class: "primary",
                  disabled: !$setup.canSubmitCondition || $setup.savingCondition,
                  onClick: $setup.submitCondition
                }, toDisplayString($setup.savingCondition ? "Saving\u2026" : "Save Condition"), 9, _hoisted_68)
              ])
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "panel-slide" }, {
          default: withCtx(() => [
            $setup.isPathologyMode && $setup.pathologyPanelVisible && $setup.pathologyTooth ? (openBlock(), createElementBlock("aside", _hoisted_69, [
              createBaseVNode("header", _hoisted_70, [
                createBaseVNode("div", null, [
                  _hoisted_71,
                  createBaseVNode("p", _hoisted_72, "Tooth " + toDisplayString($setup.pathologyTooth), 1)
                ]),
                createBaseVNode("button", {
                  type: "button",
                  class: "panel-close",
                  onClick: $setup.closePathologyPanel,
                  "aria-label": "Close pathology panel"
                }, " \xD7 ")
              ]),
              createBaseVNode("section", _hoisted_73, [
                $setup.activePathologyEntries.length ? (openBlock(), createElementBlock("div", _hoisted_74, [
                  _hoisted_75,
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.activePathologyEntries, (entry, idx) => {
                      return openBlock(), createElementBlock("li", {
                        key: `pathology-${idx}`,
                        class: "existing-item"
                      }, [
                        createBaseVNode("span", null, toDisplayString($setup.summarisePathology(entry)), 1),
                        createBaseVNode("span", _hoisted_76, [
                          createBaseVNode("button", {
                            type: "button",
                            class: "text-button",
                            onClick: ($event) => $setup.editPathology(entry)
                          }, "Edit", 8, _hoisted_77),
                          createBaseVNode("button", {
                            type: "button",
                            class: "text-button danger",
                            onClick: ($event) => $setup.deletePathology(entry)
                          }, "Delete", 8, _hoisted_78)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_79, [
                  _hoisted_80,
                  withDirectives(createBaseVNode("select", {
                    id: "pathology-type",
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $setup.pathologyForm.pathology_type = $event)
                  }, [
                    _hoisted_81,
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.PATHOLOGY_TYPE_OPTIONS, (option) => {
                      return createBaseVNode("option", {
                        key: option,
                        value: option
                      }, toDisplayString(option), 9, _hoisted_82);
                    }), 64))
                  ], 512), [
                    [vModelSelect, $setup.pathologyForm.pathology_type]
                  ])
                ]),
                $setup.pathologyForm.pathology_type === "Decay" ? (openBlock(), createElementBlock("div", _hoisted_83, [
                  createBaseVNode("div", _hoisted_84, [
                    _hoisted_85,
                    withDirectives(createBaseVNode("select", {
                      id: "decay-stage",
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $setup.pathologyForm.decay_stage = $event)
                    }, [
                      _hoisted_86,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.DECAY_STAGE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `decay-stage-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_87);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.decay_stage]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_88, [
                    _hoisted_89,
                    withDirectives(createBaseVNode("select", {
                      id: "decay-cavitation",
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $setup.pathologyForm.cavitation = $event)
                    }, [
                      _hoisted_90,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.CAVITATION_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `cavitation-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_91);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.cavitation]
                    ])
                  ]),
                  $setup.pathologyForm.cavitation === "Cavitation" ? (openBlock(), createElementBlock("div", _hoisted_92, [
                    _hoisted_93,
                    withDirectives(createBaseVNode("select", {
                      id: "decay-pulp",
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $setup.pathologyForm.pulp = $event)
                    }, [
                      _hoisted_94,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.PULP_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `pulp-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_95);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.pulp]
                    ])
                  ])) : createCommentVNode("v-if", true),
                  createBaseVNode("div", _hoisted_96, [
                    _hoisted_97,
                    withDirectives(createBaseVNode("select", {
                      id: "decay-level",
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $setup.pathologyForm.decay_level = $event)
                    }, [
                      _hoisted_98,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.DECAY_LEVEL_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `decay-level-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_99);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.decay_level]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_100, [
                    _hoisted_101,
                    $setup.surfaceOptions.length ? (openBlock(), createElementBlock("div", _hoisted_102, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.surfaceOptions, (surface) => {
                        return openBlock(), createElementBlock("label", {
                          key: `decay-surface-${surface.value}`,
                          class: normalizeClass({ selected: $setup.pathologyForm.decay_surfaces.includes(surface.value) })
                        }, [
                          withDirectives(createBaseVNode("input", {
                            type: "checkbox",
                            value: surface.value,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $setup.pathologyForm.decay_surfaces = $event)
                          }, null, 8, _hoisted_103), [
                            [vModelCheckbox, $setup.pathologyForm.decay_surfaces]
                          ]),
                          createBaseVNode("span", null, toDisplayString(surface.label), 1)
                        ], 2);
                      }), 128))
                    ])) : $setup.surfacesLoading ? (openBlock(), createElementBlock("p", _hoisted_104, "Loading surfaces\u2026")) : (openBlock(), createElementBlock("p", _hoisted_105, "Define tooth surfaces to pick specific zones."))
                  ])
                ])) : createCommentVNode("v-if", true),
                $setup.pathologyForm.pathology_type === "Fracture" ? (openBlock(), createElementBlock("div", _hoisted_106, [
                  createBaseVNode("div", _hoisted_107, [
                    _hoisted_108,
                    withDirectives(createBaseVNode("select", {
                      id: "fracture-type",
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $setup.pathologyForm.fracture_type = $event)
                    }, [
                      _hoisted_109,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.FRACTURE_TYPE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `fracture-type-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_110);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.fracture_type]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_111, [
                    _hoisted_112,
                    withDirectives(createBaseVNode("select", {
                      id: "fracture-position",
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $setup.pathologyForm.fracture_position = $event)
                    }, [
                      _hoisted_113,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.FRACTURE_POSITION_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `fracture-position-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_114);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.fracture_position]
                    ])
                  ])
                ])) : createCommentVNode("v-if", true),
                $setup.pathologyForm.pathology_type === "Tooth Wear" ? (openBlock(), createElementBlock("div", _hoisted_115, [
                  createBaseVNode("div", _hoisted_116, [
                    _hoisted_117,
                    withDirectives(createBaseVNode("select", {
                      id: "wear-type",
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $setup.pathologyForm.wear_type = $event)
                    }, [
                      _hoisted_118,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.WEAR_TYPE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `wear-type-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_119);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.wear_type]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_120, [
                    _hoisted_121,
                    $setup.surfaceOptions.length ? (openBlock(), createElementBlock("div", _hoisted_1222, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.surfaceOptions, (surface) => {
                        return openBlock(), createElementBlock("label", {
                          key: `wear-surface-${surface.value}`,
                          class: normalizeClass({ selected: $setup.pathologyForm.wear_surfaces.includes(surface.value) })
                        }, [
                          withDirectives(createBaseVNode("input", {
                            type: "checkbox",
                            value: surface.value,
                            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $setup.pathologyForm.wear_surfaces = $event)
                          }, null, 8, _hoisted_123), [
                            [vModelCheckbox, $setup.pathologyForm.wear_surfaces]
                          ]),
                          createBaseVNode("span", null, toDisplayString(surface.label), 1)
                        ], 2);
                      }), 128))
                    ])) : $setup.surfacesLoading ? (openBlock(), createElementBlock("p", _hoisted_124, "Loading surfaces\u2026")) : (openBlock(), createElementBlock("p", _hoisted_125, "Define tooth surfaces to pick specific zones."))
                  ])
                ])) : createCommentVNode("v-if", true),
                $setup.pathologyForm.pathology_type === "Discoloration" ? (openBlock(), createElementBlock("div", _hoisted_126, [
                  createBaseVNode("div", _hoisted_127, [
                    _hoisted_128,
                    withDirectives(createBaseVNode("select", {
                      id: "discoloration-type",
                      "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $setup.pathologyForm.discoloration_type = $event)
                    }, [
                      _hoisted_129,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.DISCOLORATION_TYPE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `discoloration-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_130);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.pathologyForm.discoloration_type]
                    ])
                  ])
                ])) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_131, [
                  _hoisted_132,
                  withDirectives(createBaseVNode("textarea", {
                    id: "pathology-notes",
                    rows: "3",
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $setup.pathologyForm.notes = $event),
                    placeholder: "Add notes (optional)"
                  }, null, 512), [
                    [vModelText, $setup.pathologyForm.notes]
                  ])
                ]),
                $setup.pathologyError ? (openBlock(), createElementBlock("p", _hoisted_133, toDisplayString($setup.pathologyError), 1)) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("footer", _hoisted_134, [
                createBaseVNode("button", {
                  type: "button",
                  class: "secondary",
                  onClick: $setup.closePathologyPanel
                }, "Cancel"),
                createBaseVNode("button", {
                  type: "button",
                  class: "primary",
                  disabled: !$setup.canSubmitPathology || $setup.savingPathology,
                  onClick: $setup.submitPathology
                }, toDisplayString($setup.savingPathology ? "Saving\u2026" : "Save Pathology"), 9, _hoisted_135)
              ])
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "panel-slide" }, {
          default: withCtx(() => [
            $setup.isRestorationMode && $setup.restorationPanelVisible && $setup.restorationTooth ? (openBlock(), createElementBlock("aside", _hoisted_136, [
              createBaseVNode("header", _hoisted_137, [
                createBaseVNode("div", null, [
                  _hoisted_138,
                  createBaseVNode("p", _hoisted_139, "Tooth " + toDisplayString($setup.restorationTooth), 1)
                ]),
                createBaseVNode("button", {
                  type: "button",
                  class: "panel-close",
                  onClick: $setup.closeRestorationPanel,
                  "aria-label": "Close restoration panel"
                }, " \xD7 ")
              ]),
              createBaseVNode("section", _hoisted_140, [
                $setup.activeRestorationEntries.length ? (openBlock(), createElementBlock("div", _hoisted_141, [
                  _hoisted_142,
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.activeRestorationEntries, (entry, idx) => {
                      return openBlock(), createElementBlock("li", {
                        key: `restoration-${idx}`,
                        class: "existing-item"
                      }, [
                        createBaseVNode("span", null, toDisplayString($setup.summariseRestoration(entry)), 1),
                        createBaseVNode("span", _hoisted_143, [
                          createBaseVNode("button", {
                            type: "button",
                            class: "text-button",
                            onClick: ($event) => $setup.editRestoration(entry)
                          }, "Edit", 8, _hoisted_144),
                          createBaseVNode("button", {
                            type: "button",
                            class: "text-button danger",
                            onClick: ($event) => $setup.deleteRestoration(entry)
                          }, "Delete", 8, _hoisted_145)
                        ])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("v-if", true),
                createBaseVNode("div", _hoisted_146, [
                  _hoisted_147,
                  withDirectives(createBaseVNode("select", {
                    id: "restoration-type",
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $setup.restorationForm.restoration_type = $event)
                  }, [
                    _hoisted_148,
                    (openBlock(), createElementBlock(Fragment, null, renderList($setup.RESTORATION_TYPE_OPTIONS, (option) => {
                      return createBaseVNode("option", {
                        key: `rest-type-${option}`,
                        value: option
                      }, toDisplayString(option), 9, _hoisted_149);
                    }), 64))
                  ], 512), [
                    [vModelSelect, $setup.restorationForm.restoration_type]
                  ])
                ]),
                $setup.showRestorationDetailFields ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createBaseVNode("div", _hoisted_150, [
                    _hoisted_151,
                    withDirectives(createBaseVNode("select", {
                      id: "restoration-material",
                      "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $setup.restorationForm.material = $event)
                    }, [
                      _hoisted_152,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.RESTORATION_MATERIAL_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `rest-material-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_153);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.material]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_154, [
                    _hoisted_155,
                    $setup.surfaceOptions.length ? (openBlock(), createElementBlock("div", _hoisted_156, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.surfaceOptions, (surface) => {
                        return openBlock(), createElementBlock("label", {
                          key: `rest-surface-${surface.value}`,
                          class: normalizeClass({ selected: $setup.restorationForm.surfaces.includes(surface.value) })
                        }, [
                          withDirectives(createBaseVNode("input", {
                            type: "checkbox",
                            value: surface.value,
                            "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $setup.restorationForm.surfaces = $event)
                          }, null, 8, _hoisted_157), [
                            [vModelCheckbox, $setup.restorationForm.surfaces]
                          ]),
                          createBaseVNode("span", null, toDisplayString(surface.label), 1)
                        ], 2);
                      }), 128))
                    ])) : $setup.surfacesLoading ? (openBlock(), createElementBlock("p", _hoisted_158, "Loading surfaces\u2026")) : (openBlock(), createElementBlock("p", _hoisted_159, "Define tooth surfaces to pick specific zones."))
                  ]),
                  createBaseVNode("div", _hoisted_160, [
                    _hoisted_161,
                    withDirectives(createBaseVNode("select", {
                      id: "restoration-quality",
                      "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $setup.restorationForm.quality = $event)
                    }, [
                      _hoisted_162,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.RESTORATION_QUALITY_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `rest-quality-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_163);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.quality]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_164, [
                    _hoisted_165,
                    withDirectives(createBaseVNode("select", {
                      id: "restoration-detail",
                      "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => $setup.restorationForm.detail = $event)
                    }, [
                      _hoisted_166,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.RESTORATION_DETAIL_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `rest-detail-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_167);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.detail]
                    ])
                  ])
                ], 64)) : $setup.showCrownFields ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                  createBaseVNode("div", _hoisted_168, [
                    _hoisted_169,
                    withDirectives(createBaseVNode("select", {
                      id: "crown-material",
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $setup.restorationForm.crown_material = $event)
                    }, [
                      _hoisted_170,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.CROWN_MATERIAL_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `crown-material-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_171);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.crown_material]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_172, [
                    _hoisted_173,
                    withDirectives(createBaseVNode("select", {
                      id: "crown-type",
                      "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $setup.restorationForm.crown_type = $event)
                    }, [
                      _hoisted_174,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.CROWN_TYPE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `crown-type-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_175);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.crown_type]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_176, [
                    _hoisted_177,
                    withDirectives(createBaseVNode("select", {
                      id: "crown-base",
                      "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $setup.restorationForm.crown_base = $event)
                    }, [
                      _hoisted_178,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.CROWN_BASE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `crown-base-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_179);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.crown_base]
                    ])
                  ]),
                  $setup.showImplantFields ? (openBlock(), createElementBlock("div", _hoisted_180, [
                    _hoisted_181,
                    withDirectives(createBaseVNode("select", {
                      id: "crown-implant-type",
                      "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => $setup.restorationForm.crown_implant_type = $event)
                    }, [
                      _hoisted_182,
                      (openBlock(), createElementBlock(Fragment, null, renderList($setup.CROWN_IMPLANT_TYPE_OPTIONS, (option) => {
                        return createBaseVNode("option", {
                          key: `crown-implant-${option}`,
                          value: option
                        }, toDisplayString(option), 9, _hoisted_183);
                      }), 64))
                    ], 512), [
                      [vModelSelect, $setup.restorationForm.crown_implant_type]
                    ])
                  ])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                $setup.restorationError ? (openBlock(), createElementBlock("p", _hoisted_184, toDisplayString($setup.restorationError), 1)) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("footer", _hoisted_185, [
                createBaseVNode("button", {
                  type: "button",
                  class: "secondary",
                  onClick: $setup.closeRestorationPanel
                }, "Cancel"),
                createBaseVNode("button", {
                  type: "button",
                  class: "primary",
                  disabled: !$setup.canSubmitRestoration || $setup.savingRestoration,
                  onClick: $setup.submitRestoration
                }, toDisplayString($setup.savingRestoration ? "Saving\u2026" : "Save Restoration"), 9, _hoisted_186)
              ])
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }),
        createBaseVNode("nav", _hoisted_187, [
          createBaseVNode("ul", null, [
            createBaseVNode("li", {
              id: "upper-jaw-button",
              class: normalizeClass(["jaw-button", { "active-jaw": $setup.view === "upper" }]),
              onClick: _cache[30] || (_cache[30] = ($event) => $setup.view = "upper")
            }, [..._hoisted_189], 2),
            createBaseVNode("li", {
              id: "jaws-button",
              class: normalizeClass(["jaw-button", { "active-jaw": $setup.view === "all" }]),
              onClick: _cache[31] || (_cache[31] = ($event) => $setup.view = "all")
            }, [..._hoisted_191], 2),
            createBaseVNode("li", {
              id: "lower-jaw-button",
              class: normalizeClass(["jaw-button", { "active-jaw": $setup.view === "lower" }]),
              onClick: _cache[32] || (_cache[32] = ($event) => $setup.view = "lower")
            }, [..._hoisted_193], 2)
          ])
        ])
      ]),
      createVNode(Transition, { name: "legend-fade" }, {
        default: withCtx(() => [
          $setup.showLegend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "legend-overlay",
            onClick: _cache[34] || (_cache[34] = withModifiers(($event) => $setup.showLegend = false, ["self"]))
          }, [
            createBaseVNode("div", _hoisted_194, [
              createBaseVNode("header", null, [
                _hoisted_195,
                createBaseVNode("button", {
                  type: "button",
                  "aria-label": "Close legend",
                  onClick: _cache[33] || (_cache[33] = ($event) => $setup.showLegend = false)
                }, "\xD7")
              ]),
              _hoisted_196
            ])
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_197, [
        (openBlock(), createElementBlock(Fragment, null, renderList($setup.layerOptions, (layer) => {
          return createBaseVNode("label", {
            key: layer.name
          }, [
            createBaseVNode("input", {
              type: "checkbox",
              checked: $setup.layerIsActive(layer.name),
              onChange: ($event) => $setup.toggleLayer(layer.name)
            }, null, 40, _hoisted_198),
            createBaseVNode("span", null, toDisplayString(layer.label), 1)
          ]);
        }), 64))
      ])
    ], 2);
  }

  // ../do_dental/do_dental/public/js/chart/DentalChart.vue
  DentalChart_default.render = render2;
  DentalChart_default.__file = "../do_dental/do_dental/public/js/chart/DentalChart.vue";
  DentalChart_default.__scopeId = "data-v-0fb526e5";
  var DentalChart_default2 = DentalChart_default;

  // sfc-script:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/App.vue?type=script
  var App_default = {
    __name: "App",
    setup(__props, { expose: __expose }) {
      __expose();
      const projection = ref("buccal");
      const patientId = ref("");
      function updatePatient(newPatient) {
        if (!newPatient) {
          patientId.value = "";
          $('[title="Chart"]').text("Chart");
          return;
        }
        patientId.value = newPatient.patient;
        $('[title="Chart"]').text(`Chart - ${newPatient.patient_name || ""}`);
      }
      let unsubscribe = null;
      onMounted(() => {
        var _a, _b, _c;
        if ((_a = window.do_health) == null ? void 0 : _a.patientWatcher) {
          unsubscribe = window.do_health.patientWatcher.subscribe(updatePatient);
        }
        const current = (_c = (_b = window.do_health) == null ? void 0 : _b.patientWatcher) == null ? void 0 : _c.read();
        updatePatient(current);
      });
      onBeforeUnmount(() => {
        if (unsubscribe)
          unsubscribe();
      });
      const __returned__ = { projection, patientId, updatePatient, get unsubscribe() {
        return unsubscribe;
      }, set unsubscribe(v) {
        unsubscribe = v;
      }, DentalChart: DentalChart_default2, onMounted, onBeforeUnmount, ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/ubuntu/my-frappe/apps/do_dental/do_dental/public/js/chart/App.vue?type=template
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", null, [
      createVNode($setup["DentalChart"], {
        projection: $setup.projection,
        "patient-id": $setup.patientId
      }, null, 8, ["projection", "patient-id"])
    ]);
  }

  // ../do_dental/do_dental/public/js/chart/App.vue
  App_default.render = render3;
  App_default.__file = "../do_dental/do_dental/public/js/chart/App.vue";
  App_default.__scopeId = "data-v-2ae2d9de";
  var App_default2 = App_default;

  // ../do_dental/do_dental/public/js/chart/chart.bundle.js
  var Chart = class {
    constructor({ page, wrapper }) {
      this.$wrapper = $(wrapper);
      this.page = page;
      this.init();
    }
    init() {
      this.setup_app();
    }
    setup_page_actions() {
      this.primary_btn = this.page.set_primary_action(
        __("Print Message"),
        () => frappe.msgprint("Hello My Page!")
      );
    }
    setup_app() {
      let app = createApp(App_default2);
      this.$chart = app.mount(this.$wrapper.get(0));
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.Chart = Chart;
  var chart_bundle_default = Chart;
})();
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
//# sourceMappingURL=chart.bundle.NPR6RTST.js.map
