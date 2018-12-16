(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_currency_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_currency_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_currency_js__);

/*
* install function
* @param  {Vue} Vue
* @param  {object} options  currency.js options
*/
const VCurr = {
    install(Vue, options = {}) {
        Vue.directive('curr', function (el, binding) {
            el.innerHTML = __WEBPACK_IMPORTED_MODULE_0_currency_js___default()(binding.value, options).format();
        });
    }
};

/* harmony default export */ __webpack_exports__["default"] = (VCurr);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
 currency.js - v1.2.1
 http://scurker.github.io/currency.js

 Copyright (c) 2018 Jason Wilson
 Released under MIT license
*/
(function(e,c){ true?module.exports=c():"function"===typeof define&&define.amd?define(c):e.currency=c()})(this,function(){function e(b,a){if(!(this instanceof e))return new e(b,a);a=Object.assign({},m,a);var f=Math.pow(10,a.precision);this.intValue=b=c(b,a);this.value=b/f;a.increment=a.increment||1/f;a.groups=a.useVedic?n:p;this.s=a;this.p=f}function c(b,a){var f=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0,c=a.decimal,g=a.errorOnInvalid;
var d=Math.pow(10,a.precision);var h="number"===typeof b;if(h||b instanceof e)d*=h?b:b.value;else if("string"===typeof b)g=new RegExp("[^-\\d"+c+"]","g"),c=new RegExp("\\"+c,"g"),d=(d*=b.replace(/\((.*)\)/,"-$1").replace(g,"").replace(c,"."))||0;else{if(g)throw Error("Invalid Input");d=0}d=d.toFixed(4);return f?Math.round(d):d}var m={symbol:"$",separator:",",decimal:".",formatWithSymbol:!1,errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#"},p=/(\d)(?=(\d{3})+\b)/g,n=/(\d)(?=(\d\d)+\d\b)/g;
e.prototype={add:function(b){var a=this.s,f=this.p;return e((this.intValue+c(b,a))/f,a)},subtract:function(b){var a=this.s,f=this.p;return e((this.intValue-c(b,a))/f,a)},multiply:function(b){var a=this.s;return e(this.intValue*b/Math.pow(10,a.precision),a)},divide:function(b){var a=this.s;return e(this.intValue/c(b,a,!1),a)},distribute:function(b){for(var a=this.intValue,f=this.p,c=this.s,g=[],d=Math[0<=a?"floor":"ceil"](a/b),h=Math.abs(a-d*b);0!==b;b--){var k=e(d/f,c);0<h--&&(k=0<=a?k.add(1/f):k.subtract(1/
f));g.push(k)}return g},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(b){var a=this.s,c=a.pattern,e=a.negativePattern,g=a.formatWithSymbol,d=a.symbol,h=a.separator,k=a.decimal;a=a.groups;var l=(this+"").replace(/^-/,"").split("."),m=l[0];l=l[1];"undefined"===typeof b&&(b=g);return(0<=this.value?c:e).replace("!",b?d:"").replace("#","".concat(m.replace(a,"$1"+h)).concat(l?k+l:""))},toString:function(){var b=this.s,a=b.increment;return(Math.round(this.intValue/
this.p/a)*a).toFixed(b.precision)},toJSON:function(){return this.value}};return e});


/***/ })
/******/ ]);
});