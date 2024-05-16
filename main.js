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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Munro-2LYe.ttf */ \"./src/Munro-2LYe.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'Munroe';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    font-family: 'munroe';\r\n}\r\n\r\n:root {\r\n    --cyan-1: #1dd3b0;\r\n    --blue-light: #cdf7f6;\r\n    --blue-reg: #086375;\r\n    --purple: #3c1642;\r\n    --white: white;\r\n    --background-darkgray: #212832;\r\n    --background-lightgray: #2d333b;\r\n}\r\n\r\nheader {\r\n    border-bottom: 2px dashed var(--background-darkgray);\r\n    height: 5vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 2%;\r\n    margin-top: 2%;\r\n}\r\n\r\nnav {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--background-lightgray);\r\n}\r\n\r\n#content{\r\n    margin: 0 auto;\r\n    width: 90%;\r\n    border: 2px dashed var(--background-darkgray);\r\n    padding: 5%;\r\n    max-width: 965px;\r\n}\r\n\r\n#heading {\r\n    color: var(--white);\r\n    letter-spacing: 5px;\r\n    margin-bottom: 4%;\r\n}\r\n\r\n#description{\r\n    padding: 2%;\r\n}\r\n\r\n.section-text,\r\n.item-text {\r\n    color: var(--blue-light);\r\n    text-align: center;\r\n}\r\n\r\n.section-content {\r\n    border: 2px dashed var(--blue-light);\r\n    text-align: center;\r\n    margin-bottom: 1%;\r\n    font-size: 24px;\r\n}\r\n\r\np {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\nli {\r\n    color: var(--blue-light);\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    height: 35px;\r\n    width: 135px;\r\n    background: none;\r\n    border: 1px dashed var(--blue-light);\r\n    color: white;\r\n    border-radius: 10%;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n    background: var(--blue-reg);\r\n}\r\n\r\nimg {\r\n    width: 15%;\r\n    height: 15%;\r\n    max-height: 90px;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.item-text {\r\n    width: 60%;\r\n}\r\n\r\n.heading {\r\n    width: 100%;\r\n    height: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 3%;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setAboutPanel: () => (/* binding */ setAboutPanel),\n/* harmony export */   setTitleAbout: () => (/* binding */ setTitleAbout)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _pixel_character_chef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixel_character_chef.png */ \"./src/pixel_character_chef.png\");\n/* harmony import */ var _pixel_character_king_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pixel_character_king.png */ \"./src/pixel_character_king.png\");\n/* harmony import */ var _pixel_character_knight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pixel_character_knight.png */ \"./src/pixel_character_knight.png\");\n/* harmony import */ var _pixel_character_medic_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pixel_character_medic.png */ \"./src/pixel_character_medic.png\");\n/* harmony import */ var _pixel_character_thief_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pixel_character_thief.png */ \"./src/pixel_character_thief.png\");\n/* harmony import */ var _pixel_character_wizard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pixel_character_wizard.png */ \"./src/pixel_character_wizard.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst setTitleAbout = () => {\r\n    const titleContainer = document.createElement(\"div\");\r\n    const titleText = document.createElement('h1');\r\n    const htmlString = ___WEBPACK_IMPORTED_MODULE_0__.buttonNamesArray[2];\r\n\r\n    titleContainer.classList.add(\"section-content\");\r\n    titleContainer.setAttribute(\"id\", \"heading\");\r\n    titleText.innerHTML = htmlString;\r\n\r\n    titleContainer.appendChild(titleText);\r\n    ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(titleContainer);\r\n}\r\n\r\nconst setAboutPanel = () => {\r\n    const iconArray = [];\r\n    const textArray = [\r\n        \"CEO, KING, DAD, i own this place\",\r\n        \"graceless tarnished\",\r\n        \"i make sure ur food isn't poisoned\",\r\n        \"sometimes i rob u sometimes ur not worth robbing\",\r\n        \"don't know who this is, but he's always here\"\r\n    ]\r\n\r\n    const king = new Image();\r\n    king.src = _pixel_character_king_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    iconArray.push(king);\r\n\r\n    const knight = new Image();\r\n    knight.src = _pixel_character_knight_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    iconArray.push(knight);\r\n\r\n    const medic = new Image();\r\n    medic.src = _pixel_character_medic_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    iconArray.push(medic);\r\n\r\n    const theif = new Image();\r\n    theif.src = _pixel_character_thief_png__WEBPACK_IMPORTED_MODULE_5__;\r\n    iconArray.push(theif);\r\n\r\n    const wizard = new Image();\r\n    wizard.src = _pixel_character_wizard_png__WEBPACK_IMPORTED_MODULE_6__;\r\n    iconArray.push(wizard);\r\n\r\n    const heading = document.createElement('h2');\r\n    heading.classList.add('section-content');\r\n    heading.classList.add('section-text');\r\n    heading.classList.add('heading');\r\n    heading.innerHTML = \"meet the crew\";\r\n    ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(heading);\r\n\r\n    for (let i = 0; i < iconArray.length; i++) {\r\n        const menuItem = document.createElement(\"div\");\r\n        const menuText = document.createElement(\"p\");\r\n\r\n        menuItem.classList.add('section-content');\r\n        menuItem.classList.add('item');\r\n        menuText.classList.add('item-text');\r\n\r\n        menuItem.appendChild(iconArray[i]);\r\n        menuItem.appendChild(menuText);\r\n        menuText.innerHTML = textArray[i];\r\n        ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(menuItem);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonNamesArray: () => (/* binding */ buttonNamesArray),\n/* harmony export */   mainContainer: () => (/* binding */ mainContainer)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\nconst mainContainer = document.getElementById(\"content\");\r\nconst homeBtn = document.getElementById(\"homeBtn\");\r\nconst menuBtn = document.getElementById(\"menuBtn\");\r\nconst aboutBtn = document.getElementById(\"aboutBtn\");\r\nconst buttonNamesArray = [];\r\nlet homeBtnCount = 1;\r\nlet menuBtnCount = 0;\r\nlet aboutBtnCount = 0;\r\n\r\nfunction getButtonNames() {\r\n    const buttonIds = [\"homeBtn\", \"menuBtn\", \"aboutBtn\"];\r\n\r\n    buttonIds.forEach(function(buttonId) {\r\n        let button = document.getElementById(buttonId);\r\n        buttonNamesArray.push(button.textContent);\r\n    });\r\n}\r\n\r\nconst setTitleHome = () => {\r\n    const titleContainer = document.createElement(\"div\");\r\n    const titleText = document.createElement('h1');\r\n    const htmlString = \"Pixel Bites Diner\";\r\n\r\n    titleContainer.classList.add(\"section-content\");\r\n    titleContainer.setAttribute(\"id\", \"heading\");\r\n    titleText.innerHTML = htmlString;\r\n\r\n    titleContainer.appendChild(titleText);\r\n    mainContainer.appendChild(titleContainer);\r\n}\r\n\r\nconst setDescription = () => {\r\n    const descriptionContainer = document.createElement('div');\r\n    const descriptionText = document.createElement('p');\r\n    const htmlString = `Welcome to \"Pixel Bites Diner\" - where every byte is a delight! Step into our retro wonderland, where the graphics are blocky, but the flavor is high-def. Our restaurant is designed to take you back to the golden age of gaming, with a twist of culinary creativity.\r\n\r\n    Upon entering, you'll be greeted by our pixelated staff, ready to guide you through a menu that's straight out of your favorite vintage video game. Our décor is a nostalgic tribute to the 8-bit era, with walls adorned with pixel art and tables designed like giant game controllers.`;\r\n\r\n    descriptionContainer.classList.add(\"section-content\");\r\n    descriptionContainer.setAttribute(\"id\", \"description\");\r\n    descriptionText.classList.add(\"section-text\");\r\n    \r\n    descriptionText.innerHTML = htmlString;\r\n    descriptionContainer.appendChild(descriptionText);\r\n    mainContainer.appendChild(descriptionContainer);\r\n}\r\n\r\nconst setHours = () => {\r\n    const hoursContainer = document.createElement('div');\r\n    const hoursHeading = document.createElement('h2');\r\n    const hoursText = \"Hours\";\r\n    const hoursWeekendString = \"8am - 10pm\";\r\n    const hoursWeekdayString = \"8am - 12am\";\r\n    const weekdayArray = [\r\n        \"Sunday: \",\r\n        \"Monday: \",\r\n        \"Tuesday: \",\r\n        \"Wednesday: \",\r\n        \"Thursday: \",\r\n        \"Friday: \",\r\n        \"Saturday: \"\r\n    ]\r\n\r\n    hoursHeading.classList.add('section-text');\r\n    hoursContainer.classList.add('section-content');\r\n    hoursContainer.setAttribute(\"id\", \"hours\");\r\n\r\n    hoursHeading.innerHTML = hoursText;\r\n\r\n    hoursContainer.appendChild(hoursHeading);\r\n    mainContainer.appendChild(hoursContainer);\r\n\r\n    //create 7 'p'\r\n    for (let i = 0; i < weekdayArray.length; i++){\r\n        let hoursTextContainer = document.createElement('p');\r\n        if (i === 0 || i === 6) {\r\n            hoursTextContainer.textContent = `\r\n            ${weekdayArray[i]}`+ `${hoursWeekendString}`;\r\n            hoursTextContainer.classList.add(\"section-text\");\r\n            hoursContainer.appendChild(hoursTextContainer);\r\n        } else {\r\n            hoursTextContainer.textContent = `\r\n            ${weekdayArray[i]}`+ `${hoursWeekdayString}`;\r\n            hoursTextContainer.classList.add(\"section-text\");\r\n            hoursContainer.appendChild(hoursTextContainer);\r\n        }\r\n    }   \r\n}\r\n\r\nconst setLocation = () => {\r\n    const locationContainer = document.createElement('div');\r\n    const locationHeading = document.createElement('h2');\r\n    const locationTextContainer = document.createElement('p');\r\n    const locationText = \"4141 Magicians Way, Cobblestone Village, Panem\";\r\n\r\n    locationContainer.classList.add('section-content');\r\n    locationContainer.setAttribute('id', 'location');\r\n    locationHeading.classList.add('section-text');\r\n    locationTextContainer.classList.add('section-text');\r\n\r\n    locationHeading.textContent = \"Location\";\r\n    locationTextContainer.textContent = locationText;\r\n\r\n    mainContainer.appendChild(locationContainer);\r\n    locationContainer.appendChild(locationHeading);\r\n    locationContainer.appendChild(locationTextContainer);\r\n}\r\n\r\nconst resetHTML = (container) => {\r\n    while (container.firstChild) {\r\n        container.removeChild(container.firstChild);\r\n    }\r\n}\r\n\r\nconst setHome = () => {\r\n    if (homeBtnCount === 1) {\r\n        setTitleHome();\r\n        setDescription();\r\n        setHours();\r\n        setLocation();\r\n        homeBtnCount = 0;\r\n    }\r\n}\r\n\r\nconst setMenu = () => {\r\n    if (menuBtnCount === 1) {\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.setTitleMenu)();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.setMenuItems)();\r\n        menuBtnCount = 0;\r\n    }\r\n}\r\n\r\nconst setAbout = () => {\r\n    if (aboutBtnCount === 1) {\r\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__.setTitleAbout)();\r\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__.setAboutPanel)();\r\n        aboutBtnCount = 0;\r\n    }\r\n}\r\n\r\nhomeBtn.addEventListener('click', function () {\r\n    resetHTML(mainContainer);\r\n    homeBtnCount = 1;\r\n    setHome();\r\n});\r\nmenuBtn.addEventListener('click', function() {\r\n    resetHTML(mainContainer);\r\n    menuBtnCount = 1;\r\n    setMenu();\r\n})\r\n\r\naboutBtn.addEventListener('click', function () {\r\n    resetHTML(mainContainer);\r\n    aboutBtnCount = 1;\r\n    setAbout();\r\n})\r\n\r\nsetHome();\r\ngetButtonNames();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setMenuItems: () => (/* binding */ setMenuItems),\n/* harmony export */   setTitleMenu: () => (/* binding */ setTitleMenu)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _pixel_food_hamburger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pixel_food_hamburger.png */ \"./src/pixel_food_hamburger.png\");\n/* harmony import */ var _pixel_food_pizza_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pixel_food_pizza.png */ \"./src/pixel_food_pizza.png\");\n/* harmony import */ var _pixel_food_cake_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pixel_food_cake.png */ \"./src/pixel_food_cake.png\");\n/* harmony import */ var _pixel_food_chicken_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pixel_food_chicken.png */ \"./src/pixel_food_chicken.png\");\n/* harmony import */ var _pixel_food_donut_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pixel_food_donut.png */ \"./src/pixel_food_donut.png\");\n/* harmony import */ var _pixel_food_fries_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pixel_food_fries.png */ \"./src/pixel_food_fries.png\");\n/* harmony import */ var _pixel_food_hotdog_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pixel_food_hotdog.png */ \"./src/pixel_food_hotdog.png\");\n/* harmony import */ var _pixel_food_icecream_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pixel_food_icecream.png */ \"./src/pixel_food_icecream.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst setTitleMenu = () => {\r\n    const titleContainer = document.createElement(\"div\");\r\n    const titleText = document.createElement('h1');\r\n    const htmlString = ___WEBPACK_IMPORTED_MODULE_0__.buttonNamesArray[1];\r\n\r\n    titleContainer.classList.add(\"section-content\");\r\n    titleContainer.setAttribute(\"id\", \"heading\");\r\n    titleText.innerHTML = htmlString;\r\n\r\n    titleContainer.appendChild(titleText);\r\n    ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(titleContainer);\r\n}\r\n\r\nconst setMenuItems = () => {\r\n    const iconArray = [];\r\n    const textArray = [\r\n        \"hamburg hamburg HAMBURG!\",\r\n        \"HOT DIGGITY DAWWWG\",\r\n        \"AYYYY ITS DA ZAZA\",\r\n        \"CRIPY CHIMKEN STIK\",\r\n        \"p o t a t o s t i c k s\",\r\n        \"i wonder where this goes\",\r\n        \"GYAAAAAAAAAAAAAAAAAT\",\r\n        \"i scream u scream we all scream 4 ice cream\"\r\n    ]\r\n\r\n    const hamburger = new Image();\r\n    hamburger.src = _pixel_food_hamburger_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    iconArray.push(hamburger);\r\n\r\n    const hotdog = new Image();\r\n    hotdog.src = _pixel_food_hotdog_png__WEBPACK_IMPORTED_MODULE_7__;\r\n    iconArray.push(hotdog);\r\n\r\n    const pizza = new Image();\r\n    pizza.src = _pixel_food_pizza_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    iconArray.push(pizza);\r\n\r\n    const chicken = new Image();\r\n    chicken.src = _pixel_food_chicken_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    iconArray.push(chicken);\r\n    \r\n    const fries = new Image();\r\n    fries.src = _pixel_food_fries_png__WEBPACK_IMPORTED_MODULE_6__;\r\n    iconArray.push(fries);\r\n\r\n    const donut = new Image();\r\n    donut.src = _pixel_food_donut_png__WEBPACK_IMPORTED_MODULE_5__;\r\n    iconArray.push(donut);\r\n\r\n    const cake = new Image();\r\n    cake.src = _pixel_food_cake_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    iconArray.push(cake);\r\n\r\n    const icecream = new Image();\r\n    icecream.src = _pixel_food_icecream_png__WEBPACK_IMPORTED_MODULE_8__;\r\n    iconArray.push(icecream);\r\n\r\n    for (let i = 0; i < iconArray.length; i++) {\r\n        const menuItem = document.createElement(\"div\");\r\n        const menuText = document.createElement(\"p\");\r\n\r\n        menuItem.classList.add('section-content');\r\n        menuItem.classList.add('item');\r\n        menuText.classList.add('item-text');\r\n\r\n        menuItem.appendChild(iconArray[i]);\r\n        menuItem.appendChild(menuText);\r\n        menuText.innerHTML = textArray[i];\r\n        ___WEBPACK_IMPORTED_MODULE_0__.mainContainer.appendChild(menuItem);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/Munro-2LYe.ttf":
/*!****************************!*\
  !*** ./src/Munro-2LYe.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f78662ff4aad4d038806.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Munro-2LYe.ttf?");

/***/ }),

/***/ "./src/pixel_character_chef.png":
/*!**************************************!*\
  !*** ./src/pixel_character_chef.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2e64675c532a7b303c5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_character_chef.png?");

/***/ }),

/***/ "./src/pixel_character_king.png":
/*!**************************************!*\
  !*** ./src/pixel_character_king.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3b487f5bd33706331ae.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_character_king.png?");

/***/ }),

/***/ "./src/pixel_character_knight.png":
/*!****************************************!*\
  !*** ./src/pixel_character_knight.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"374d2e5285d3d5821454.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_character_knight.png?");

/***/ }),

/***/ "./src/pixel_character_medic.png":
/*!***************************************!*\
  !*** ./src/pixel_character_medic.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa9caae91e8cec5004de.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_character_medic.png?");

/***/ }),

/***/ "./src/pixel_character_thief.png":
/*!***************************************!*\
  !*** ./src/pixel_character_thief.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d797887dd18a5160c54b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_character_thief.png?");

/***/ }),

/***/ "./src/pixel_character_wizard.png":
/*!****************************************!*\
  !*** ./src/pixel_character_wizard.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b06123aafa64b38d8fc0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_character_wizard.png?");

/***/ }),

/***/ "./src/pixel_food_cake.png":
/*!*********************************!*\
  !*** ./src/pixel_food_cake.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3111c85560a597d9cb14.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_cake.png?");

/***/ }),

/***/ "./src/pixel_food_chicken.png":
/*!************************************!*\
  !*** ./src/pixel_food_chicken.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab264cebbe6cf695df5b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_chicken.png?");

/***/ }),

/***/ "./src/pixel_food_donut.png":
/*!**********************************!*\
  !*** ./src/pixel_food_donut.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"616597110663526d13ea.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_donut.png?");

/***/ }),

/***/ "./src/pixel_food_fries.png":
/*!**********************************!*\
  !*** ./src/pixel_food_fries.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"539430e1c44eb9bdbf49.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_fries.png?");

/***/ }),

/***/ "./src/pixel_food_hamburger.png":
/*!**************************************!*\
  !*** ./src/pixel_food_hamburger.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b1e2e969b64d866beaf1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_hamburger.png?");

/***/ }),

/***/ "./src/pixel_food_hotdog.png":
/*!***********************************!*\
  !*** ./src/pixel_food_hotdog.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3fe0e8bdf0e8ce3c17e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_hotdog.png?");

/***/ }),

/***/ "./src/pixel_food_icecream.png":
/*!*************************************!*\
  !*** ./src/pixel_food_icecream.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b1669ee4c0735f8a44c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_icecream.png?");

/***/ }),

/***/ "./src/pixel_food_pizza.png":
/*!**********************************!*\
  !*** ./src/pixel_food_pizza.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"50437b3104e7e696b9f4.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/pixel_food_pizza.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;