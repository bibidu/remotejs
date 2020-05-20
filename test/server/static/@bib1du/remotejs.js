/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/eventbus/index.js":
/*!*******************************!*\
  !*** ./src/eventbus/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.emit = (name, value) => {\n  console.log(name)\n  document.dispatchEvent(\n    new CustomEvent(name, { detail: value })\n  )\n}\nexports.on = (name, fn, flag) => {\n  console.log(name)\n  document.addEventListener(name, fn, flag)\n}\n\n//# sourceURL=webpack:///./src/eventbus/index.js?");

/***/ }),

/***/ "./src/fetch/index.js":
/*!****************************!*\
  !*** ./src/fetch/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fetch = window.fetch\n\nexports.default = function(url, config = {}) {\n  const { ssr = true, targetSelector } = config\n  return fetch(url)\n    .then(res => res.text())\n    .then(res => {\n      const { default: getResource } = eval(res)\n      const urlMapResource = getResource()\n\n      if (ssr) {\n        const { html, script } = urlMapResource\n        if (targetSelector) {\n          const targetEl = document.querySelector(targetSelector)\n          if (!targetEl) throw 'not exist targetEl map' + targetSelector\n\n          // 插入html\n          targetEl.innerHTML = html\n\n          // 注入script\n          injectScript(script)\n        }\n        return html\n      }\n    })\n}\n\nfunction injectScript(content) {\n  const script = document.createElement('script')\n  script.innerHTML = content\n  document.body.appendChild(script)\n}\n\n//# sourceURL=webpack:///./src/fetch/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.remoteFetch = exports.fetch = __webpack_require__(/*! ./fetch */ \"./src/fetch/index.js\").default\nwindow.remoteEventbus = exports.eventbus = __webpack_require__(/*! ./eventbus */ \"./src/eventbus/index.js\")\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });