// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-meta-data-props@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-dispatch@esm/index.mjs";import n,{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-unary@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-dtype-resolve-enum@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-inv@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-invf@esm/index.mjs";var a={nargs:7,nin:1,nout:1},o=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15],p=[i,i,m,i,i,i,i,i,m,i,i,m,i,i,i,i,m,i,i,m,i,i,m,i,i],j=e(n,o,p,a.nargs,a.nin,a.nout);function l(s,t,e,n,r,i,m){return j(s,d(t),e,n,d(r),i,m)}var h=e(r,o,p,a.nargs+a.nin+a.nout,a.nin,a.nout);function b(s,t,e,n,r,i,m,a,o){return h(s,d(t),e,n,r,d(i),m,a,o)}s(l,"ndarray",b),t(a,o,l,!1),t(a,o,l.ndarray,!0);export{l as default,b as ndarray};
//# sourceMappingURL=index.mjs.map
