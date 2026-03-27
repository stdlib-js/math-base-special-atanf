"use strict";var s=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var o=s(function(T,n){
var a=require('@stdlib/number-float64-base-to-float32/dist');function l(r){return r===0?-.3333294987678528:a(-.3333294987678528+a(r*a(.19977711141109467+a(r*a(-.13877685368061066+a(r*.08053744584321976))))))}n.exports=l
});var v=s(function(g,f){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),p=require('@stdlib/constants-float32-half-pi/dist'),c=require('@stdlib/constants-float32-fourth-pi/dist'),F=o();function y(r){var i,t,u;return q(r)||r===0?r:(r=e(r),r<0?(i=-1,r=-r):i=1,r>2.414213562373095?(t=p,r=-e(1/r)):r>.414213562373095?(t=c,r=e(e(r-1)/e(r+1))):t=0,u=e(r*r),t=e(t+e(e(F(u))*e(u*r)+r)),i<0&&(t=-t),t)}f.exports=y
});var I=v();module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
