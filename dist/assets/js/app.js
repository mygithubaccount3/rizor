!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=7)}([function(t,e,n){(function(n){var r,o;o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},r=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),r=n.length,o=-1,i="",a=n.charCodeAt(0);++o<r;){if(0===(e=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=e&&e<=31||127==e||0===o&&48<=e&&e<=57||1===o&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e,n,r,o){if(n.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(i)}};return function(a,u){var s,c,l,d,f={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||i("scrollCancel",s)},animateScroll:function(r,a,u){f.cancelScroll();var c=n(s||e,u||{}),p="[object Number]"===Object.prototype.toString.call(r),m=p||!r.tagName?null:r;if(p||m){var h=t.pageYOffset;c.header&&!l&&(l=document.querySelector(c.header));var y,v,A,g,b,C,I,S,E=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(l),w=p?r:function(e,n,r,i){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-n-r,0),i&&(a=Math.min(a,o()-t.innerHeight)),a}(m,E,parseInt("function"==typeof c.offset?c.offset(r,a):c.offset,10),c.clip),B=w-h,O=o(),x=0,k=(y=B,A=(v=c).speedAsDuration?v.speed:Math.abs(y/1e3*v.speed),v.durationMax&&A>v.durationMax?v.durationMax:v.durationMin&&A<v.durationMin?v.durationMin:parseInt(A,10));0===t.pageYOffset&&t.scrollTo(0,0),I=r,S=c,p||history.pushState&&S.updateURL&&history.pushState({smoothScroll:JSON.stringify(S),anchor:I.id},document.title,I===document.documentElement?"#top":"#"+I.id),i("scrollStart",c,r,a),f.cancelScroll(!0),t.requestAnimationFrame((function e(n){var o,u,s;g||(g=n),x+=n-g,C=h+B*(u=b=1<(b=0===k?0:x/k)?1:b,"easeInQuad"===(o=c).easing&&(s=u*u),"easeOutQuad"===o.easing&&(s=u*(2-u)),"easeInOutQuad"===o.easing&&(s=u<.5?2*u*u:(4-2*u)*u-1),"easeInCubic"===o.easing&&(s=u*u*u),"easeOutCubic"===o.easing&&(s=--u*u*u+1),"easeInOutCubic"===o.easing&&(s=u<.5?4*u*u*u:(u-1)*(2*u-2)*(2*u-2)+1),"easeInQuart"===o.easing&&(s=u*u*u*u),"easeOutQuart"===o.easing&&(s=1- --u*u*u*u),"easeInOutQuart"===o.easing&&(s=u<.5?8*u*u*u*u:1-8*--u*u*u*u),"easeInQuint"===o.easing&&(s=u*u*u*u*u),"easeOutQuint"===o.easing&&(s=1+--u*u*u*u*u),"easeInOutQuint"===o.easing&&(s=u<.5?16*u*u*u*u*u:1+16*--u*u*u*u*u),o.customEasing&&(s=o.customEasing(u)),s||u),t.scrollTo(0,Math.floor(C)),function(e,n){var o,u,s,l=t.pageYOffset;if(e==n||l==n||(h<n&&t.innerHeight+l)>=O)return f.cancelScroll(!0),u=n,s=p,0===(o=r)&&document.body.focus(),s||(o.focus(),document.activeElement!==o&&(o.setAttribute("tabindex","-1"),o.focus(),o.style.outline="none"),t.scrollTo(0,u)),i("scrollStop",c,r,a),!(d=g=null)}(C,w)||(d=t.requestAnimationFrame(e),g=n)}))}}},p=function(e){if(!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(c=e.target.closest(a))&&"a"===c.tagName.toLowerCase()&&!e.target.closest(s.ignore)&&c.hostname===t.location.hostname&&c.pathname===t.location.pathname&&/#/.test(c.href)){var n=r(c.hash),o=s.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(s),f.animateScroll(o,c))}},m=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(r(history.state.anchor)))||f.animateScroll(e,null,{updateURL:!1})}};return f.destroy=function(){s&&(document.removeEventListener("click",p,!1),t.removeEventListener("popstate",m,!1),f.cancelScroll(),d=l=c=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=n(e,u||{}),l=s.header?document.querySelector(s.header):null,document.addEventListener("click",p,!1),s.updateURL&&s.popstate&&t.addEventListener("popstate",m,!1)}(),f}}(o)}.apply(e,[]))||(t.exports=r)}).call(this,n(6))},function(t,e,n){},function(t,e,n){(e=n(3)(!0)).push([t.i,'.hvr-underline-from-left {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.hvr-underline-from-left:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 0;\r\n    right: 100%;\r\n    bottom: 0;\r\n    background: #00b5d2;\r\n    height: 5px;\r\n    -webkit-transition-property: right;\r\n    transition-property: right;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\r\n    right: 0;\r\n}\r\n',"",{version:3,sources:["underline-from-left.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,WAAW;IACX,SAAS;IACT,mBAAmB;IACnB,WAAW;IACX,kCAAkC;IAClC,0BAA0B;IAC1B,iCAAiC;IACjC,yBAAyB;IACzB,4CAA4C;IAC5C,oCAAoC;AACxC;AACA;IACI,QAAQ;AACZ",file:"underline-from-left.css",sourcesContent:['.hvr-underline-from-left {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.hvr-underline-from-left:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 0;\r\n    right: 100%;\r\n    bottom: 0;\r\n    background: #00b5d2;\r\n    height: 5px;\r\n    -webkit-transition-property: right;\r\n    transition-property: right;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\r\n    right: 0;\r\n}\r\n']}]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e){$(document).ready((function(){var t=$("#resp-menu"),e=$(".menu");$(t).on("click",(function(t){t.preventDefault(),e.slideToggle()})),$(window).resize((function(){$(window).width()>767&&e.is(":hidden")&&e.removeAttr("style")}))}))},function(t,e){!function(){if(!!document.createElement("video").canPlayType){var t=document.getElementById("video"),e=document.getElementById("video1"),n=document.getElementById("video2"),r=document.getElementById("video-controls"),o=document.getElementById("video-controls1"),i=document.getElementById("video-controls2");t.muted=!0,t.controls=!1,e.muted=!0,e.controls=!1,n.muted=!0,n.controls=!1,r.setAttribute("data-state","visible"),o.setAttribute("data-state","visible"),i.setAttribute("data-state","visible");var a=document.getElementById("playpause"),u=document.getElementById("playpause1"),s=document.getElementById("playpause2");if(document.addEventListener){var c=function(r){switch(r){case"playpause":t.paused||t.ended?a.setAttribute("data-state","play"):a.setAttribute("data-state","pause");break;case"playpause1":e.paused||e.ended?u.setAttribute("data-state","play"):u.setAttribute("data-state","pause");break;case"playpause2":n.paused||n.ended?s.setAttribute("data-state","play"):s.setAttribute("data-state","pause")}};t.addEventListener("play",(function(){c("playpause")}),!1),t.addEventListener("pause",(function(){c("playpause")}),!1),e.addEventListener("play",(function(){c("playpause1")}),!1),e.addEventListener("pause",(function(){c("playpause1")}),!1),n.addEventListener("play",(function(){c("playpause2")}),!1),n.addEventListener("pause",(function(){c("playpause2")}),!1),a.addEventListener("click",(function(){t.paused||t.ended?t.play():t.pause()})),u.addEventListener("click",(function(){e.paused||e.ended?e.play():e.pause()})),s.addEventListener("click",(function(){n.paused||n.ended?n.play():n.pause()}))}}}()},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";n.r(e);n(1),n(2),n(4),n(5);var r=n(0);new(n.n(r).a)("a")}]);