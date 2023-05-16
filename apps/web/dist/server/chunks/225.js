exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 5360:
/***/ (() => {

if (typeof globalThis['__DEV__'] === 'undefined') {
  globalThis['__DEV__'] = "production" === 'development'
}


/***/ }),

/***/ 6919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xp": () => (/* binding */ PortalProvider)
/* harmony export */ });
/* unused harmony exports ACTIONS, INITIAL_STATE, PortalHost, PortalItem, usePortal */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
  ACTIONS2[ACTIONS2["REGISTER_HOST"] = 0] = "REGISTER_HOST";
  ACTIONS2[ACTIONS2["DEREGISTER_HOST"] = 1] = "DEREGISTER_HOST";
  ACTIONS2[ACTIONS2["ADD_UPDATE_PORTAL"] = 2] = "ADD_UPDATE_PORTAL";
  ACTIONS2[ACTIONS2["REMOVE_PORTAL"] = 3] = "REMOVE_PORTAL";
  return ACTIONS2;
})(ACTIONS || {});
const INITIAL_STATE = {};
const registerHost = (state, hostName) => {
  if (!(hostName in state)) {
    state[hostName] = [];
  }
  return state;
};
const deregisterHost = (state, hostName) => {
  delete state[hostName];
  return state;
};
const addUpdatePortal = (state, hostName, portalName, node) => {
  if (!(hostName in state)) {
    state = registerHost(state, hostName);
  }
  const index = state[hostName].findIndex((item) => item.name === portalName);
  if (index !== -1) {
    state[hostName][index].node = node;
  } else {
    state[hostName].push({
      name: portalName,
      node
    });
  }
  return state;
};
const removePortal = (state, hostName, portalName) => {
  if (!(hostName in state)) {
    console.log(
      `Failed to remove portal '${portalName}', '${hostName}' was not registered!`
    );
    return state;
  }
  const index = state[hostName].findIndex((item) => item.name === portalName);
  if (index !== -1)
    state[hostName].splice(index, 1);
  return state;
};
const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case 0 /* REGISTER_HOST */:
      return registerHost({ ...state }, action.hostName);
    case 1 /* DEREGISTER_HOST */:
      return deregisterHost({ ...state }, action.hostName);
    case 2 /* ADD_UPDATE_PORTAL */:
      return addUpdatePortal(
        { ...state },
        action.hostName,
        action.portalName,
        action.node
      );
    case 3 /* REMOVE_PORTAL */:
      return removePortal(
        { ...state },
        action.hostName,
        action.portalName
      );
    default:
      return state;
  }
};
const PortalStateContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const PortalDispatchContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const usePortalState = (hostName) => {
  const state = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PortalStateContext);
  if (state === null) {
    throw new Error(
      "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }
  return state[hostName] || [];
};
const usePortal = (hostName = "root") => {
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PortalDispatchContext);
  if (dispatch === null) {
    throw new Error(
      "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }
  const registerHost2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch({
      type: 0 /* REGISTER_HOST */,
      hostName
    });
  }, []);
  const deregisterHost2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch({
      type: 1 /* DEREGISTER_HOST */,
      hostName
    });
  }, []);
  const addUpdatePortal2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name, node) => {
    dispatch({
      type: 2 /* ADD_UPDATE_PORTAL */,
      hostName,
      portalName: name,
      node
    });
  }, []);
  const removePortal2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name) => {
    dispatch({
      type: 3 /* REMOVE_PORTAL */,
      hostName,
      portalName: name
    });
  }, []);
  return {
    registerHost: registerHost2,
    deregisterHost: deregisterHost2,
    addPortal: addUpdatePortal2,
    updatePortal: addUpdatePortal2,
    removePortal: removePortal2
  };
};
const PortalProviderComponent = ({
  rootHostName = "root",
  shouldAddRootHost = true,
  children
}) => {
  const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, INITIAL_STATE);
  const transitionDispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const next = (value) => {
      (0,react__WEBPACK_IMPORTED_MODULE_1__.startTransition)(() => {
        dispatch(value);
      });
    };
    return next;
  }, [dispatch]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PortalDispatchContext.Provider, { value: transitionDispatch, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PortalStateContext.Provider, { value: state, children: [
    children,
    shouldAddRootHost && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PortalHost, { name: rootHostName })
  ] }) });
};
const PortalProvider = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
const defaultRenderer = (children) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children });
const PortalHostComponent = (props) => {
  const { name, forwardProps, render = defaultRenderer } = props;
  const isServer = !(0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.useDidFinishSSR)();
  const state = usePortalState(name);
  const { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(props.name);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isServer)
      return;
    registerHost2();
    return () => {
      deregisterHost2();
    };
  }, [isServer]);
  if (forwardProps) {
    return render(
      state.map((item) => {
        let next = item.node;
        if (forwardProps) {
          return react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(next, (child) => {
            return react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(child) ? react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(child, { key: child.key, ...forwardProps }) : child;
          });
        }
        return next;
      })
    );
  }
  return render(state.map((item) => item.node));
};
const PortalHost = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PortalHostComponent);
PortalHost.displayName = "PortalHost";
const PortalComponent = (props) => {
  const {
    name: _providedName,
    hostName,
    handleOnMount: _providedHandleOnMount,
    handleOnUnmount: _providedHandleOnUnmount,
    handleOnUpdate: _providedHandleOnUpdate,
    children
  } = props;
  const { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName);
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const name = _providedName || id;
  const handleOnMount = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.useEvent)(() => {
    if (_providedHandleOnMount) {
      _providedHandleOnMount(() => addUpdatePortal2(name, children));
    } else {
      addUpdatePortal2(name, children);
    }
  });
  const handleOnUnmount = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.useEvent)(() => {
    if (_providedHandleOnUnmount) {
      _providedHandleOnUnmount(() => removePortal2(name));
    } else {
      removePortal2(name);
    }
  });
  const handleOnUpdate = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.useEvent)(() => {
    if (_providedHandleOnUpdate) {
      _providedHandleOnUpdate(() => addUpdatePortal2(name, children));
    } else {
      addUpdatePortal2(name, children);
    }
  });
  (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    handleOnMount();
    return () => {
      handleOnUnmount();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleOnUpdate();
  }, [children]);
  return null;
};
const PortalItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PortalComponent);
PortalItem.displayName = "Portal";

//# sourceMappingURL=GorhomPortal.js.map


/***/ }),

/***/ 2048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var _tamagui_polyfill_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5360);
/* harmony import */ var _tamagui_polyfill_dev__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tamagui_polyfill_dev__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tamagui_stacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);






const Portal = ({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
  const contents = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _tamagui_stacks__WEBPACK_IMPORTED_MODULE_4__/* .YStack */ .FA,
    {
      contain: "strict",
      fullscreen: true,
      position: _tamagui_core__WEBPACK_IMPORTED_MODULE_5__.isWeb ? "fixed" : "absolute",
      maxWidth: _tamagui_core__WEBPACK_IMPORTED_MODULE_5__.isWeb ? "100vw" : "100%",
      maxHeight: _tamagui_core__WEBPACK_IMPORTED_MODULE_5__.isWeb ? "100vh" : "100%",
      pointerEvents: "none",
      ...props
    }
  );
  const [hostElement, setHostElement] = react__WEBPACK_IMPORTED_MODULE_2__.useState(null);
  (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(() => {
    setHostElement(host);
  }, [host]);
  if (hostElement) {
    return (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(contents, hostElement);
  }
  return null;
};

//# sourceMappingURL=Portal.js.map


/***/ }),

/***/ 7360:
/***/ (() => {

//# sourceMappingURL=PortalProps.js.map


/***/ }),

/***/ 8765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portal": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "PortalProvider": () => (/* reexport safe */ _GorhomPortal__WEBPACK_IMPORTED_MODULE_2__.Xp)
/* harmony export */ });
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2048);
/* harmony import */ var _PortalProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7360);
/* harmony import */ var _PortalProps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PortalProps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_PortalProps__WEBPACK_IMPORTED_MODULE_1__, "H1")) __webpack_require__.d(__webpack_exports__, { "H1": function() { return _PortalProps__WEBPACK_IMPORTED_MODULE_1__.H1; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_PortalProps__WEBPACK_IMPORTED_MODULE_1__, "PortalProvider")) __webpack_require__.d(__webpack_exports__, { "PortalProvider": function() { return _PortalProps__WEBPACK_IMPORTED_MODULE_1__.PortalProvider; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_PortalProps__WEBPACK_IMPORTED_MODULE_1__, "XStack")) __webpack_require__.d(__webpack_exports__, { "XStack": function() { return _PortalProps__WEBPACK_IMPORTED_MODULE_1__.XStack; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_PortalProps__WEBPACK_IMPORTED_MODULE_1__, "YStack")) __webpack_require__.d(__webpack_exports__, { "YStack": function() { return _PortalProps__WEBPACK_IMPORTED_MODULE_1__.YStack; } });
/* harmony import */ var _GorhomPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6919);



//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ YStack),
/* harmony export */   "Xu": () => (/* binding */ fullscreenStyle),
/* harmony export */   "sL": () => (/* binding */ XStack)
/* harmony export */ });
/* unused harmony export ZStack */
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getElevation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5371);


const fullscreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
const variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": _getElevation__WEBPACK_IMPORTED_MODULE_0__/* .getElevation */ .y
  }
};
const YStack = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
  flexDirection: "column",
  variants
});
const XStack = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {
  flexDirection: "row",
  variants
});
const ZStack = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(
  YStack,
  {
    position: "relative"
  },
  {
    neverFlatten: true,
    isZStack: true
  }
);

//# sourceMappingURL=Stacks.js.map


/***/ }),

/***/ 5371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getElevation)
/* harmony export */ });
/* unused harmony export getSizedElevation */
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_0__);

const getElevation = (size, extras) => {
  if (!size)
    return;
  const { tokens } = extras;
  const token = tokens.size[size];
  const sizeNum = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_0__.isVariable)(token) ? +token.val : size;
  return getSizedElevation(sizeNum, extras);
};
const getSizedElevation = (val, { theme, tokens }) => {
  let num = 0;
  if (val === true) {
    const val2 = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_0__.getVariableValue)(tokens.size["true"]);
    if (typeof val2 === "number") {
      num = val2;
    } else {
      num = 10;
    }
  } else {
    num = +val;
  }
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  const shadow = {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: { height, width: 0 },
    ..._tamagui_core__WEBPACK_IMPORTED_MODULE_0__.isAndroid ? {
      elevationAndroid: 2 * height
    } : {}
  };
  return shadow;
};

//# sourceMappingURL=getElevation.js.map


/***/ }),

/***/ 5225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ TamaguiProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tamagui_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8765);



const TamaguiProvider = _tamagui_core__WEBPACK_IMPORTED_MODULE_2__.isRSC ? _tamagui_core__WEBPACK_IMPORTED_MODULE_2__.TamaguiProvider : ({ children , ...props })=>{
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tamagui_core__WEBPACK_IMPORTED_MODULE_2__.TamaguiProvider, {
        ...props,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tamagui_portal__WEBPACK_IMPORTED_MODULE_1__.PortalProvider, {
            shouldAddRootHost: true,
            children
        })
    });
};
 //# sourceMappingURL=TamaguiProvider.js.map


/***/ })

};
;