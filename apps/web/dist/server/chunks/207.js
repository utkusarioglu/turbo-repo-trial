exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 9323:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5174);
/* harmony import */ var solito_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5887);



const CustomButton = ({ children , userId , ...rest })=>{
    const { push  } = (0,solito_router__WEBPACK_IMPORTED_MODULE_1__/* .useRouter */ .t)();
    // const link = useLink({ href: `/user/${userId}` });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(tamagui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
        onPress: ()=>push({
                pathname: "/user/[userId]",
                query: {
                    userId
                }
            }),
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2026);
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tamagui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5424);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_1__]);
tamagui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// const CustomHeader = ({ text }: { text: string }) => {
//   return <H1>{text}</H1>;
// };
const CustomHeader = (0,tamagui__WEBPACK_IMPORTED_MODULE_0__.styled)(tamagui__WEBPACK_IMPORTED_MODULE_1__.H1, {
    "color": "_col-d0t527436987"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomHeader);
__webpack_require__(1848);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ tamagui__WEBPACK_IMPORTED_MODULE_0__.Button),
/* harmony export */   "Spacer": () => (/* reexport safe */ tamagui__WEBPACK_IMPORTED_MODULE_0__.Spacer),
/* harmony export */   "Text": () => (/* reexport safe */ tamagui__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "XStack": () => (/* reexport safe */ tamagui__WEBPACK_IMPORTED_MODULE_0__.XStack),
/* harmony export */   "YStack": () => (/* reexport safe */ tamagui__WEBPACK_IMPORTED_MODULE_0__.YStack)
/* harmony export */ });
/* harmony import */ var tamagui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5424);
/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9323);
/* harmony import */ var _CustomHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2099);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8683);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([tamagui__WEBPACK_IMPORTED_MODULE_0__, _CustomButton__WEBPACK_IMPORTED_MODULE_1__, _CustomHeader__WEBPACK_IMPORTED_MODULE_2__, _Provider__WEBPACK_IMPORTED_MODULE_3__]);
([tamagui__WEBPACK_IMPORTED_MODULE_0__, _CustomButton__WEBPACK_IMPORTED_MODULE_1__, _CustomHeader__WEBPACK_IMPORTED_MODULE_2__, _Provider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1848:
/***/ (() => {



/***/ })

};
;