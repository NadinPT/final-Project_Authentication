/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/screens/map/style.scss":
/*!************************************!*\
  !*** ./src/screens/map/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://empty-project/./src/screens/map/style.scss?");

/***/ }),

/***/ "./src/screens/map/index.js":
/*!**********************************!*\
  !*** ./src/screens/map/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/screens/map/style.scss\");\n\n\nlet map;\n\nwindow.initMap = () => {\n  navigator.geolocation.getCurrentPosition((pos) => {\n    //получаем наши координаты (нужно разрешить)\n    var crd = pos.coords;\n    map = new google.maps.Map(document.getElementById(\"map\"), {\n      center: { lat: crd.latitude, lng: crd.longitude },\n      zoom: 8,\n    });\n    const labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    const infoWindow = new google.maps.InfoWindow();\n\n    for (var i = 0; i < 15; i++) {\n      const marker = new google.maps.Marker({\n        position: {\n          lat: crd.latitude + Math.random(),\n          lng: crd.longitude + Math.random(),\n        },\n        map,\n        label: labels[i],\n        animation: google.maps.Animation.DROP,\n\n        title: \"Hello World!\",\n      });\n      marker.addListener(\"click\", () => {\n        infoWindow.close();\n        infoWindow.setContent(marker.getTitle());\n        infoWindow.open(marker.getMap(), marker);\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack://empty-project/./src/screens/map/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/screens/map/index.js");
/******/ 	
/******/ })()
;