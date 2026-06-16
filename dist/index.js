"use strict";var s=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw (t=0, e)}};};var o=s(function(T,n){
var a=require('@stdlib/number-float64-base-to-float32/dist');function l(r){return r===0?-.3333294987678528:a(-.3333294987678528+a(r*a(.19977711141109467+a(r*a(-.13877685368061066+a(r*.08053744584321976))))))}n.exports=l
});var v=s(function(g,f){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/constants-float32-half-pi/dist'),c=require('@stdlib/constants-float32-fourth-pi/dist'),F=o();function y(r){var t,e,u;return q(r)||r===0?r:(r=i(r),r<0?(t=-1,r=-r):t=1,r>2.414213562373095?(e=p,r=-i(1/r)):r>.414213562373095?(e=c,r=i(i(r-1)/i(r+1))):e=0,u=i(r*r),e=i(e+i(i(F(u))*i(u*r)+r)),t<0&&(e=-e),e)}f.exports=y
});var I=v();module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
