!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=""},function(t,e){},function(t,e,n){"use strict";n.r(e),n(0),n(1);var o=function(t){var e=parseInt(t.substring(0,2),10),n=11<e?"PM":"AM";return(e+11)%12+1+":"+t.substring(2)+n},r=["init","widget"];function i(t,e){if(!t)throw Error("API method required");if(t=t.toLowerCase(),-1===r.indexOf(t))throw Error("Method ".concat(t," is not supported"));switch(t){case"widget":!function(t){if(void 0===window.jQuery||parseFloat(window.jQuery.fn.jquery)<3.3){var e=document.createElement("script");e.src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",e.readyState?e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||n()}:e.onload=n,(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(e)}else t(window.jQuery);function n(){t(window.jQuery.noConflict(!0))}}(function(t){t.ajax({url:"https://kdoc-api.herokuapp.com/api/lineup",dataType:"jsonp",type:"GET"}).done(function(e){var n={},r=new Date,i=r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,a=r.getHours()<=9?"0".concat(r.getHours()):r.getHours,c="".concat(r.getFullYear()).concat(i).concat(r.getDate()).concat(a).concat(r.getMinutes()).concat(r.getSeconds()),d=Number(c.substring(0,12)),s=e.tv.programme;s.forEach(function(t,e,o){var r=Number(t.$.start.substring(0,12)),i=Number(t.$.stop.substring(0,12));r<=d&&d<i&&(n={index:e})});var u=s[n.index],l=s[n.index+1],f=s[n.index+2],p=o(u.$.start.substring(8,12)),g=o(l.$.start.substring(8,12)),y=o(f.$.start.substring(8,12)),h="".concat(p," ").concat(u.title[0]._),b="".concat(g," ").concat(l.title[0]._),w="".concat(y," ").concat(f.title[0]._);t(".kdoc-widget").append('<div class="kdoc-list" style="display:flex; flex-direction: row;">'),t(".kdoc-list").append(t('<div class="kdoc-on-air" style="box-sizing: border-box; width: 33%;"><h2 style="font-weight: 900;">ON-AIR</p></h2><p style="padding-right:2em;">'+h+"</p></div>")).append(t('<div class="kdoc-on-air" style="box-sizing: border-box; width: 33%;"><h2 style="font-weight: 900;">UP NEXT</h2><p style="padding-right:2em;">'+b+"</p></div>")).append(t('<div class="kdoc-on-air" style="box-sizing: border-box; width: 33%;"><h2 style="font-weight: 900;">SOON</h2><p style="padding-right:2em;">'+w+"</p></div>"))}).fail(function(t){})});break;default:console.warn("No handler defined for ".concat(t))}}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}!function(t){var e={someDefaultConfiguration:!1},n=t[t["kdoc-widget"]],o=n.q;if(o)for(var r=0;r<o.length;r++)"init"==o[r][0].toLowerCase()?e=a(e,o[r][1]):i(o[r][0],o[r][1]);(n=i).configurations=e}(window)}]);