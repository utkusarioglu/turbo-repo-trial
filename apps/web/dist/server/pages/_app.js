"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var _tamagui_next_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9138);
/* harmony import */ var _tamagui_next_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tamagui_next_theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_src_Provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8683);
/* harmony import */ var _tamagui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ui_src_Provider__WEBPACK_IMPORTED_MODULE_2__, _tamagui_config__WEBPACK_IMPORTED_MODULE_3__]);
([ui_src_Provider__WEBPACK_IMPORTED_MODULE_2__, _tamagui_config__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import Head from "next/head";



function App({ Component , pageProps  }) {
    const [theme, setTheme] = (0,_tamagui_next_theme__WEBPACK_IMPORTED_MODULE_4__.useRootTheme)();
    // memo to avoid re-render on dark/light change
    const contents = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        });
    }, [
        pageProps,
        Component
    ]);
    // because we do our custom getCSS() above, we disableInjectCSS here
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tamagui_next_theme__WEBPACK_IMPORTED_MODULE_4__.NextThemeProvider, {
            onChangeTheme: setTheme,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ui_src_Provider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                config: _tamagui_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                // @ts-ignore
                disableInjectCSS: true,
                disableRootThemeClass: true,
                defaultTheme: theme,
                children: contents
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5225);


const UiProvider = ({ children , config , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(tamagui__WEBPACK_IMPORTED_MODULE_1__/* .TamaguiProvider */ .r, {
        config: config,
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UiProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [26,225,544,138], () => (__webpack_exec__(2347)));
module.exports = __webpack_exports__;

})();