(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2EK0":function(e,n,t){"use strict";function o(e,n,t){var o=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(o.getUTCFullYear())&&o.setUTCFullYear(e),o}function r(e,n,t,o,r,u,i){void 0===n&&(n=0),void 0===t&&(t=1),void 0===o&&(o=0),void 0===r&&(r=0),void 0===u&&(u=0),void 0===i&&(i=0);var a=new Date(e,n,t,o,r,u,i);return e<100&&e>=0&&isFinite(a.getFullYear())&&a.setFullYear(e),a}t.d(n,"b",function(){return o}),t.d(n,"a",function(){return r})},AgnY:function(e,n,t){"use strict";function o(e,n){return void 0===n&&(n=!1),n?e.getUTCHours():e.getHours()}function r(e,n){return void 0===n&&(n=!1),n?e.getUTCMinutes():e.getMinutes()}function u(e,n){return void 0===n&&(n=!1),n?e.getUTCSeconds():e.getSeconds()}function i(e,n){return void 0===n&&(n=!1),n?e.getUTCMilliseconds():e.getMilliseconds()}function a(e){return e.getTime()}function s(e,n){return void 0===n&&(n=!1),n?e.getUTCDay():e.getDay()}function d(e,n){return void 0===n&&(n=!1),n?e.getUTCDate():e.getDate()}function c(e,n){return void 0===n&&(n=!1),n?e.getUTCMonth():e.getMonth()}function m(e,n){return void 0===n&&(n=!1),n?e.getUTCFullYear():e.getFullYear()}function _(e){return Math.floor(e.valueOf()/1e3)}t.d(n,"d",function(){return o}),t.d(n,"f",function(){return r}),t.d(n,"h",function(){return u}),t.d(n,"e",function(){return i}),t.d(n,"i",function(){return a}),t.d(n,"b",function(){return s}),t.d(n,"a",function(){return d}),t.d(n,"g",function(){return c}),t.d(n,"c",function(){return m}),t.d(n,"j",function(){return _}),t("2EK0")},UBaK:function(e,n,t){"use strict";t.r(n),t.d(n,"glLocale",function(){return s});var o=t("AgnY"),r="xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),u="xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec".split("_"),i=[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xuñ/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i],a=/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,s={abbr:"gl",months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:function(e,n,t){return e?/-MMM-/.test(n)?u[Object(o.g)(e,t)]:r[Object(o.g)(e,t)]:r},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,monthsShortStrictRegex:/^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(e){return"[hoxe á"+(1!==Object(o.d)(e)?"s":"")+"] LT"},nextDay:function(e){return"[mañan á"+(1!==Object(o.d)(e)?"s":"")+"] LT"},nextWeek:function(e){return"dddd [á"+(1!==Object(o.d)(e)?"s":"")+"] LT"},lastDay:function(e){return"[onte á"+(1!==Object(o.d)(e)?"s":"")+"] LT"},lastWeek:function(e){return"[o] dddd [pasado á"+(1!==Object(o.d)(e)?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}}}]);