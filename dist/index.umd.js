(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Calender = {}));
}(this, (function (exports) { 'use strict';

    var DATE_CONVERSION_FORMULA = [
        [0, 1, 1, 22, 1, 3, 1, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 22, 1, 3, 1, 19, 1, 3, 1, 1, 3, 1, 2, 2, 1, 3, 1],
        [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            1,
            2
        ],
        [
            0,
            1,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            1,
            2
        ],
        [
            1,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            1,
            2
        ],
        [59, 1, 26, 1, 28, 1, 2, 1, 12],
        [
            0,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5,
            1,
            1,
            2,
            2,
            1,
            3,
            1,
            2,
            1,
            2
        ],
        [0, 12, 1, 3, 1, 3, 1, 5, 1, 11, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 27, 1, 2],
        [
            1,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            1,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            15,
            2,
            4
        ],
        [
            0,
            1,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            15,
            2,
            4
        ],
        [
            1,
            1,
            3,
            1,
            3,
            1,
            14,
            1,
            3,
            1,
            1,
            1,
            3,
            1,
            14,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            18,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            14,
            1,
            3,
            15,
            1,
            2,
            1,
            1
        ],
        [
            0,
            1,
            1,
            3,
            1,
            3,
            1,
            10,
            1,
            3,
            1,
            3,
            1,
            1,
            1,
            3,
            1,
            3,
            1,
            10,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            14,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            10,
            1,
            20,
            1,
            1,
            1
        ],
        [
            1,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            20,
            3
        ]
    ];

    var DATE_RANGE = {
        minDate : 1970,
        maxDate: 2100
    };

    var FLUCTUATION_MONTHS = [
      [30, 31],
      [31, 32],
      [31, 32],
      [31, 32],
      [31, 32],
      [30, 31],
      [29, 30],
      [29, 30],
      [29, 30],
      [29, 30],
      [29, 30],
      [30, 31]
    ];

    var NEPALI_NUMBERS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

    var MONTHS = ['बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज', 'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फागुन', 'चैत'];

    var DateConversion = function DateConversion() {
        this.minAdDateEqBsDate = {
            ad: {
                year: 1913,
                month: 3,
                date: 13
            },
            bs: {
                year: 1970,
                month: 1,
                date: 1
            }
        };
    };

    /**
     * convert bs date to ad date
     * algorithm
     * 1.fist add 57 to the given ad year
     * 2.calculate month by adding 9 and then find out the module 12 (4+9)%12 =  april = baisakh and bsMonth = 0 then 12 else bsmonth
     * 3. if ad month is less than 4 then substract 1 from bs year ( eg march (chaitra substract 1))
     * 4. else if ad month = 4 then
     * @param adYear
     * @param adMonth
     * @param adDate
     */
    DateConversion.prototype.getBsDateByAdDate = function getBsDateByAdDate (adYear, adMonth, adDate) {
        var bsYear = adYear + 57;
        var bsMonth = (adMonth + 9) % 12;
        bsMonth = bsMonth === 0 ? 12 : bsMonth;
        var bsDate = 1;
        if (adMonth < 4) {
            bsYear -= 1;
        } else if (adMonth === 4) {
            var bsYearFirstAdDate = this.getAdDateByBsDate(bsYear, 1, 1);
            if (adDate < bsYearFirstAdDate.getDate()) {
                bsYear -= 1;
            }
        }
        var bsMonthFirstAdDate = this.getAdDateByBsDate(bsYear, bsMonth, 1);
        if (adDate >= 1 && adDate < bsMonthFirstAdDate.getDate()) {
            bsMonth = bsMonth !== 1 ? bsMonth - 1 : 12;
            var bsMonthDays = this.getBsMonthDays(bsYear, bsMonth);
            bsDate = bsMonthDays - (bsMonthFirstAdDate.getDate() - adDate) + 1;
        } else {
            bsDate = adDate - bsMonthFirstAdDate.getDate() + 1;
        }
        return {
            bsYear: bsYear,
            bsMonth: bsMonth,
            bsDate: bsDate
        };
    };

    DateConversion.prototype.getAdDateByBsDate = function getAdDateByBsDate (bsYear, bsMonth, bsDate) {
        var daysNumFromMinBsYear = this.getTotalDaysNumFromMinBsYear(bsYear, bsMonth, bsDate);
        var adDate = new Date(this.minAdDateEqBsDate.ad.year, this.minAdDateEqBsDate.ad.month, this.minAdDateEqBsDate.ad.date - 1);
        adDate.setDate(adDate.getDate() + daysNumFromMinBsYear);
        return adDate;
    };

    // get total days from base bs current bs date
    DateConversion.prototype.getTotalDaysNumFromMinBsYear = function getTotalDaysNumFromMinBsYear (bsYear, bsMonth, bsDate) {
        if (bsYear < DATE_RANGE.minDate || bsYear > DATE_RANGE.maxDate) {
            return 0;
        }
        var daysNumFromMinBsYear = 0;
        var diffYears = bsYear - DATE_RANGE.minDate;
        for (var month = 1; month <= 12; month++) {
            // month < bsmonth = 1<2 then add one more year on diff years (baisakh is less than jestha)
            // then add one more year (i.e jestha is of next year)
            if (month < bsMonth) {
                daysNumFromMinBsYear += this.getMonthDaysNumFormMinBsYear(month, diffYears + 1);
            } else {
                daysNumFromMinBsYear += this.getMonthDaysNumFormMinBsYear(month, diffYears);
            }
        }
        if (bsYear > 2085 && bsYear < 2088) {
            daysNumFromMinBsYear += bsDate - 2;
        } else if (bsYear === 2085 && bsMonth > 5) {
            daysNumFromMinBsYear += bsDate - 2;
        } else if (bsYear > 2088) {
            daysNumFromMinBsYear += bsDate - 4;
        } else if (bsYear === 2088 && bsMonth > 5) {
            daysNumFromMinBsYear += bsDate - 4;
        } else {
            daysNumFromMinBsYear += bsDate;
        }
        return daysNumFromMinBsYear;
    };

    DateConversion.prototype.getMonthDaysNumFormMinBsYear = function getMonthDaysNumFormMinBsYear (bsMonth, yearDiff) {
        var yearCount = 0;
        var monthDaysFromMinBsYear = 0;
        if (yearDiff === 0) {
            return 0;
        }
        var bsMonthData = DATE_CONVERSION_FORMULA[bsMonth - 1];
        for (var i = 0; i < bsMonthData.length; i++) {
            if (bsMonthData[i] === 0) {
                continue;
            }
            var bsMonthUpperDaysIndex = i % 2;
            if (yearDiff > yearCount + bsMonthData[i]) {
                yearCount += bsMonthData[i];
                monthDaysFromMinBsYear += FLUCTUATION_MONTHS[bsMonth - 1][bsMonthUpperDaysIndex] * bsMonthData[i];
            } else {
                monthDaysFromMinBsYear +=
                    FLUCTUATION_MONTHS[bsMonth - 1][bsMonthUpperDaysIndex] * (yearDiff - yearCount);
                yearCount = yearDiff - yearCount;
                break;
            }
        }
        return monthDaysFromMinBsYear;
    };

    DateConversion.prototype.getBsMonthDays = function getBsMonthDays (bsYear, bsMonth) {
        var yearCount = 0;
        var totalYears = bsYear + 1 - DATE_RANGE.minDate;
        var bsMonthData = DATE_CONVERSION_FORMULA[bsMonth - 1];
        for (var i = 0; i < bsMonthData.length; i++) {
            if (bsMonthData[i] === 0) {
                continue;
            }
            var bsMonthUpperDaysIndex = i % 2;
            yearCount += bsMonthData[i];
            if (totalYears <= yearCount) {
                if ((bsYear === 2085 && bsMonth === 5) || (bsYear === 2088 && bsMonth === 5)) {
                    return FLUCTUATION_MONTHS[bsMonth - 1][bsMonthUpperDaysIndex] - 2;
                } else {
                    return FLUCTUATION_MONTHS[bsMonth - 1][bsMonthUpperDaysIndex];
                }
            }
        }
        return 0;
    };

    DateConversion.prototype.getNepaliNumber = function getNepaliNumber (n) {
        var nStringArray = n.toString().split('');
        return nStringArray.map(function (e) { return NEPALI_NUMBERS[+e]; }).join('');
    };

    DateConversion.prototype.getNepaliMonthName = function getNepaliMonthName (n) {
        return MONTHS[n];
    };

    var DAYS = ['आइत', 'सोम', 'मंगल', 'बुध', 'बिही', 'शुक्र', 'शनि'];

    //

    var script = {
      props:['adDate'],
      watch: {
        adDate: function(date) {
          this.currentADDate = date;
          this.currentBSDate = this.dateConversion.getBsDateByAdDate(this.currentADDate.getFullYear(), this.currentADDate.getMonth() + 1, this.currentADDate.getDate());
          this.createCalender();
        }
      },
      mounted: function mounted() {
        this.currentBSDate = this.dateConversion.getBsDateByAdDate(this.currentADDate.getFullYear(), this.currentADDate.getMonth() + 1, this.currentADDate.getDate());
        this.bsYears = Array.from(Array(DATE_RANGE.maxDate - DATE_RANGE.minDate).keys()).map(function (e) { return e + 1 + DATE_RANGE.minDate; });
        this.createCalender();
      },

      methods: {
        changeMonth: function (factor){
          var month = this.currentBSDate.bsMonth+factor;
          if(month>12){
            this.currentBSDate.bsMonth = 1;
            this.currentBSDate.bsYear+= 1;

          }else if(month<1){
            this.currentBSDate.bsMonth = 12;
            this.currentBSDate.bsYear-= 1;
          }else {
            this.currentBSDate.bsMonth = month;
          }
          this.createCalender();
        },
        changeDate: function (){
          this.createCalender();
        },
        selectDate: function (day){
          this.currentBSDate.bsDate = day;
          this.currentADDate = this.dateConversion.getAdDateByBsDate(this.currentBSDate.bsYear,this.currentBSDate.bsMonth+1,this.currentBSDate.bsDate);
          this.$emit('dateSelected', this.currentADDate);
        },
        createCalender: function createCalender(){
          this.monthDaysArray =[];
          var maxMonthDays = this.dateConversion.getBsMonthDays(this.currentBSDate.bsYear, this.currentBSDate.bsMonth);
          var adDate = this.dateConversion.getAdDateByBsDate(this.currentBSDate.bsYear, this.currentBSDate.bsMonth, 1);
          var skipDays = adDate.getDay();
          var monthStartIndex = -skipDays + 1;
          var maxMonthDaysIndex = 42;

          var weekDaysArray = [];
          var count = 1;
          for (var i = monthStartIndex; i <= maxMonthDaysIndex; i++) {
            if (i < 1 || i > maxMonthDays) {
              weekDaysArray.push('');
            } else {
              weekDaysArray.push(i);
            }
            if (count % 7 == 0) {
              this.monthDaysArray.push(weekDaysArray);
              weekDaysArray = [];
            }
            count++;
          }
        }
      },
      data: function data() {
        return {
          dateConversion: new DateConversion(),
          currentADDate:  new Date(),
          currentBSDate: {
            bsYear: 0,
            bsMonth: 0,
            bsDate: 0
          },
          dateRange: DATE_RANGE,
          bsYears: [],
          bsMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          nepaliDays: DAYS,
          monthDaysArray: []
        }
      }
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        var options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        var hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                var originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    var isOldIE = typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
        return function (id, style) { return addStyle(id, style); };
    }
    var HEAD;
    var styles = {};
    function addStyle(id, css) {
        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
        if (!style.ids.has(id)) {
            style.ids.add(id);
            var code = css.source;
            if (css.map) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                code +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                        ' */';
            }
            if (!style.element) {
                style.element = document.createElement('style');
                style.element.type = 'text/css';
                if (css.media)
                    { style.element.setAttribute('media', css.media); }
                if (HEAD === undefined) {
                    HEAD = document.head || document.getElementsByTagName('head')[0];
                }
                HEAD.appendChild(style.element);
            }
            if ('styleSheet' in style.element) {
                style.styles.push(code);
                style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join('\n');
            }
            else {
                var index = style.ids.size - 1;
                var textNode = document.createTextNode(code);
                var nodes = style.element.childNodes;
                if (nodes[index])
                    { style.element.removeChild(nodes[index]); }
                if (nodes.length)
                    { style.element.insertBefore(textNode, nodes[index]); }
                else
                    { style.element.appendChild(textNode); }
            }
        }
    }

    /* script */
    var __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "calender-interface" }, [
        _c("div", { staticClass: "info-container" }, [
          _c("ul", [
            _c("li", { staticClass: "text-left nextprev" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.changeMonth(-1)
                    }
                  }
                },
                [_vm._v("<")]
              )
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "text-center" }, [
              _c("div", { staticClass: "date-info" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentBSDate.bsYear,
                        expression: "currentBSDate.bsYear"
                      }
                    ],
                    attrs: { id: "bsYear", name: "bsYear" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value;
                              return val
                            });
                          _vm.$set(
                            _vm.currentBSDate,
                            "bsYear",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          );
                        },
                        _vm.changeDate
                      ]
                    }
                  },
                  _vm._l(_vm.bsYears, function(i) {
                    return _c("option", { key: i, domProps: { value: i } }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.dateConversion.getNepaliNumber(i)) +
                          "\n            "
                      )
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentBSDate.bsMonth,
                        expression: "currentBSDate.bsMonth"
                      }
                    ],
                    attrs: { name: "bsMonth", id: "bsMonth" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value;
                              return val
                            });
                          _vm.$set(
                            _vm.currentBSDate,
                            "bsMonth",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          );
                        },
                        _vm.changeDate
                      ]
                    }
                  },
                  _vm._l(_vm.bsMonths, function(i) {
                    return _c("option", { key: i, domProps: { value: i + 1 } }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.dateConversion.getNepaliMonthName(i)) +
                          "\n            "
                      )
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "text-right nextprev" }, [
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.changeMonth(1)
                    }
                  }
                },
                [_vm._v(">")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "caleder-dates" }, [
          _c("table", { staticClass: "calender-table" }, [
            _c("thead", [
              _c(
                "tr",
                _vm._l(_vm.nepaliDays, function(day, index) {
                  return _c("th", { key: index }, [_vm._v(_vm._s(day))])
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.monthDaysArray, function(week, index) {
                return _c(
                  "tr",
                  { key: index },
                  _vm._l(week, function(day, j) {
                    return _c(
                      "td",
                      {
                        key: j,
                        class: { active: day == _vm.currentBSDate.bsDate }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "date-link",
                            on: {
                              click: function($event) {
                                return _vm.selectDate(day)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm.dateConversion.getNepaliNumber(day)) +
                                "\n          "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              }),
              0
            )
          ])
        ])
      ])
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-13f97454_0", { source: "\n.calender-table thead th[data-v-13f97454] {\n  padding: 10px;\n  background: #000;\n  color: #fff;\n}\n.calender-table tbody td[data-v-13f97454] {\n  padding: 10px;\n  background: #000;\n  text-align: center;\n}\n.calender-table tbody td a[data-v-13f97454] {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n.calender-table tbody td.active[data-v-13f97454] {\n  background: red;\n}\n.calender-interface[data-v-13f97454] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  background: #000;\n}\n.info-container[data-v-13f97454] {\n  color: #fff;\n  padding: 10px;\n}\n.info-container ul[data-v-13f97454] {\n  list-style: none;\n  width: 100%;\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.info-container ul li[data-v-13f97454] {\n  display: block;\n  float: left;\n  width: 70%;\n}\n.info-container ul li.nextprev[data-v-13f97454] {\n  width: 15%;\n}\n.text-right[data-v-13f97454] {\n  text-align: right;\n}\n.text-left[data-v-13f97454] {\n  text-align: left;\n}\n.text-center[data-v-13f97454] {\n  text-align: center;\n}\n.date-info select[data-v-13f97454] {\n  display: inline-block;\n  margin-right: 10px;\n  padding: 4px 8px;\n  border-radius: 3px;\n  outline: none !important;\n}\n", map: {"version":3,"sources":["/var/www/html/vue-nepali-calender/src/Calender.vue"],"names":[],"mappings":";AAoIA;EACA,aAAA;EACA,gBAAA;EACA,WAAA;AACA;AAEA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;AAEA;AAEA;EACA,cAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;AACA;AAEA;EACA,eAAA;AACA;AAEA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,gBAAA;AACA;AAEA;EACA,WAAA;EACA,aAAA;AACA;AAEA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,WAAA;EACA,SAAA;EACA,UAAA;AACA;AAEA;EACA,cAAA;EACA,WAAA;EACA,UAAA;AACA;AAEA;EACA,UAAA;AACA;AAEA;EACA,iBAAA;AACA;AAEA;EACA,gBAAA;AACA;AAEA;EACA,kBAAA;AACA;AAEA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;AACA","file":"Calender.vue","sourcesContent":["<template>\n  <div class=\"calender-interface\">\n    <div class=\"info-container\">\n      <ul>\n        <li class=\"text-left nextprev\">\n          <button @click=\"changeMonth(-1)\">&lt;</button>\n        </li>\n        <li class=\"text-center\">\n          <div class=\"date-info\">\n            <select id=\"bsYear\" name=\"bsYear\" v-model=\"currentBSDate.bsYear\" @change=\"changeDate\">\n              <option v-for=\"i in bsYears\" :key=\"i\" :value=\"i\">\n                {{ dateConversion.getNepaliNumber(i) }}\n              </option>\n            </select>\n            <select name=\"bsMonth\" id=\"bsMonth\" v-model=\"currentBSDate.bsMonth\" @change=\"changeDate\">\n              <option v-for=\"i in bsMonths\" :key=\"i\" :value=\"i+1\">\n                {{ dateConversion.getNepaliMonthName(i) }}\n              </option>\n            </select>\n          </div>\n        </li>\n        <li class=\"text-right nextprev\">\n          <button @click=\"changeMonth(1)\">&gt;</button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"caleder-dates\">\n      <table class=\"calender-table\">\n        <thead>\n        <tr>\n          <th v-for=\"(day,index) in nepaliDays\" :key=\"index\">{{ day }}</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr v-for=\"(week,index) in monthDaysArray\" :key=\"index\">\n          <td v-for=\"(day,j) in week\" :key=\"j\" v-bind:class=\"{active: day==currentBSDate.bsDate}\">\n            <a class=\"date-link\" @click=\"selectDate(day)\">\n              {{ dateConversion.getNepaliNumber(day) }}\n            </a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</template>\n<script>\nimport {DateConversion} from \"./DateConversion\";\nimport {DATE_RANGE} from './constants/date-range';\nimport {DAYS} from './constants/days';\n\nexport default {\n  props:['adDate'],\n  watch: {\n    adDate: function(date) {\n      this.currentADDate = date;\n      this.currentBSDate = this.dateConversion.getBsDateByAdDate(this.currentADDate.getFullYear(), this.currentADDate.getMonth() + 1, this.currentADDate.getDate());\n      this.createCalender();\n    }\n  },\n  mounted() {\n    this.currentBSDate = this.dateConversion.getBsDateByAdDate(this.currentADDate.getFullYear(), this.currentADDate.getMonth() + 1, this.currentADDate.getDate());\n    this.bsYears = Array.from(Array(DATE_RANGE.maxDate - DATE_RANGE.minDate).keys()).map(e => e + 1 + DATE_RANGE.minDate);\n    this.createCalender();\n  },\n\n  methods: {\n    changeMonth: function (factor){\n      const month = this.currentBSDate.bsMonth+factor;\n      if(month>12){\n        this.currentBSDate.bsMonth = 1;\n        this.currentBSDate.bsYear+= 1;\n\n      }else if(month<1){\n        this.currentBSDate.bsMonth = 12;\n        this.currentBSDate.bsYear-= 1;\n      }else{\n        this.currentBSDate.bsMonth = month;\n      }\n      this.createCalender();\n    },\n    changeDate: function (){\n      this.createCalender();\n    },\n    selectDate: function (day){\n      this.currentBSDate.bsDate = day;\n      this.currentADDate = this.dateConversion.getAdDateByBsDate(this.currentBSDate.bsYear,this.currentBSDate.bsMonth+1,this.currentBSDate.bsDate);\n      this.$emit('dateSelected', this.currentADDate);\n    },\n    createCalender(){\n      this.monthDaysArray =[];\n      const maxMonthDays = this.dateConversion.getBsMonthDays(this.currentBSDate.bsYear, this.currentBSDate.bsMonth);\n      const adDate = this.dateConversion.getAdDateByBsDate(this.currentBSDate.bsYear, this.currentBSDate.bsMonth, 1);\n      const skipDays = adDate.getDay();\n      const monthStartIndex = -skipDays + 1;\n      const maxMonthDaysIndex = 42;\n\n      let weekDaysArray = [];\n      let count = 1;\n      for (let i = monthStartIndex; i <= maxMonthDaysIndex; i++) {\n        if (i < 1 || i > maxMonthDays) {\n          weekDaysArray.push('');\n        } else {\n          weekDaysArray.push(i);\n        }\n        if (count % 7 == 0) {\n          this.monthDaysArray.push(weekDaysArray);\n          weekDaysArray = [];\n        }\n        count++;\n      }\n    }\n  },\n  data() {\n    return {\n      dateConversion: new DateConversion(),\n      currentADDate:  new Date(),\n      currentBSDate: {\n        bsYear: 0,\n        bsMonth: 0,\n        bsDate: 0\n      },\n      dateRange: DATE_RANGE,\n      bsYears: [],\n      bsMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],\n      nepaliDays: DAYS,\n      monthDaysArray: []\n    }\n  }\n}\n</script>\n<style scoped>\n.calender-table thead th {\n  padding: 10px;\n  background: #000;\n  color: #fff;\n}\n\n.calender-table tbody td {\n  padding: 10px;\n  background: #000;\n  text-align: center;\n\n}\n\n.calender-table tbody td a {\n  display: block;\n  color: #fff;\n  text-decoration: none;\n  text-align: center;\n}\n\n.calender-table tbody td.active {\n  background: red;\n}\n\n.calender-interface {\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: inline-block;\n  background: #000;\n}\n\n.info-container {\n  color: #fff;\n  padding: 10px;\n}\n\n.info-container ul {\n  list-style: none;\n  width: 100%;\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.info-container ul li {\n  display: block;\n  float: left;\n  width: 70%;\n}\n\n.info-container ul li.nextprev {\n  width: 15%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.date-info select {\n  display: inline-block;\n  margin-right: 10px;\n  padding: 4px 8px;\n  border-radius: 3px;\n  outline: none !important;\n}\n</style>"]}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = "data-v-13f97454";
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      var __vue_component__ = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        createInjector,
        undefined,
        undefined
      );

    exports.default = __vue_component__;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
