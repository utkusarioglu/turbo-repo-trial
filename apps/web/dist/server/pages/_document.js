"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var ui_src_css_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(331);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7551);
/* harmony import */ var _tamagui_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tamagui_config__WEBPACK_IMPORTED_MODULE_4__]);
_tamagui_config__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






class Document extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {
    static async getInitialProps({ renderPage  }) {
        react_native__WEBPACK_IMPORTED_MODULE_5__/* ["default"].registerComponent */ .Z.registerComponent("Main", ()=>next_document__WEBPACK_IMPORTED_MODULE_2__.Main);
        const page = await renderPage();
        // @ts-ignore
        const { getStyleElement  } = react_native__WEBPACK_IMPORTED_MODULE_5__/* ["default"].getApplication */ .Z.getApplication("Main");
        const styles = [
            getStyleElement(),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: _tamagui_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getCSS */ .Z.getCSS()
                }
            }, "tamagui")
        ];
        return {
            ...page,
            styles: react__WEBPACK_IMPORTED_MODULE_3__.Children.toArray(styles)
        };
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {})
                    ]
                })
            ]
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _tamagui_core_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1123);
/* harmony import */ var _tamagui_core_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core_reset_css__WEBPACK_IMPORTED_MODULE_0__);
// this provides some helpful reset styles to ensure a more consistent look
// only import this from your web app, not native



/***/ }),

/***/ 9782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tamagui_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7353);

// import * as ReactNative from "react-native";
 // or '@tamagui/core'
// if using only @tamagui/core with `react-native` components
// if using `tamagui` this isn't necessary
// setupReactNative(ReactNative);
const appConfig = (0,tamagui__WEBPACK_IMPORTED_MODULE_0__/* .createTamagui */ ._)(_tamagui_config__WEBPACK_IMPORTED_MODULE_1__/* .config */ .v);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appConfig);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ui_src_tamagui_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ui_src_tamagui_config__WEBPACK_IMPORTED_MODULE_0__]);
ui_src_tamagui_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui_src_tamagui_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 7849:
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ 8616:
/***/ ((module) => {

module.exports = require("styleq");

/***/ }),

/***/ 8688:
/***/ ((module) => {

module.exports = require("styleq/transform-localize-style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [26,462,544,20], () => (__webpack_exec__(4123)));
module.exports = __webpack_exports__;

})();