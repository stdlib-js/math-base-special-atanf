// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,e="function"==typeof a?a.toStringTag:"";var f=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,a,f,l,u;if(null==t)return o.call(t);a=t[e],u=e,r=null!=(l=t)&&n.call(l,u);try{t[e]=void 0}catch(r){return o.call(t)}return f=o.call(t),r?t[e]=a:delete t[e],f}:function(t){return o.call(t)},l="function"==typeof Float32Array;var u=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null;var y="function"==typeof Float32Array?Float32Array:void 0;var i=new(function(){var t,r,o;if("function"!=typeof c)return!1;try{r=new c([1,3.14,-3.14,5e40]),o=r,t=(l&&o instanceof Float32Array||"[object Float32Array]"===f(o))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===u}catch(r){t=!1}return t}()?y:function(){throw new Error("not implemented")})(1);var p="function"==typeof t?t:function(t){return i[0]=t,i[0]},v=p(1.5707963267948966),b=p(.7853981633974483);function m(t){var r,o,n;return function(t){return t!=t}(t)?NaN:((t=p(t))<0?(r=-1,t=-t):r=1,t>2.414213562373095?(o=v,t=-p(1/t)):t>.414213562373095?(o=b,t=p(p(t-1)/p(t+1))):o=0,n=p(t*t),o=p(o+p(p(function(t){return 0===t?-.3333294987678528:p(-.3333294987678528+p(t*p(.19977711141109467+p(t*p(-.13877685368061066+p(.08053744584321976*t))))))}(n))*p(n*t)+t)),r<0&&(o=-o),o)}export{m as default};
//# sourceMappingURL=mod.js.map
