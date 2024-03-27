"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var o=s(function(P,n){
var t=require('@stdlib/number-float64-base-to-float32/dist');function l(r){return r===0?-.3333294987678528:t(-.3333294987678528+t(r*t(.19977711141109467+t(r*t(-.13877685368061066+t(r*.08053744584321976))))))}n.exports=l
});var v=s(function(T,f){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/constants-float32-half-pi/dist'),c=require('@stdlib/constants-float32-fourth-pi/dist'),F=o();function y(r){var a,i,u;return q(r)?NaN:(r=e(r),r<0?(a=-1,r=-r):a=1,r>2.414213562373095?(i=p,r=-e(1/r)):r>.414213562373095?(i=c,r=e(e(r-1)/e(r+1))):i=0,u=e(r*r),i=e(i+e(e(F(u))*e(u*r)+r)),a<0&&(i=-i),i)}f.exports=y
});var I=v();module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
