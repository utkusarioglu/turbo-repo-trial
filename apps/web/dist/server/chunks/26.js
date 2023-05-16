"use strict";
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var compose_refs_exports = {};
__export(compose_refs_exports, {
  composeRefs: () => composeRefs,
  useComposedRefs: () => useComposedRefs
});
module.exports = __toCommonJS(compose_refs_exports);
var React = __toESM(__webpack_require__(6689));
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ;
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=compose-refs.js.map


/***/ }),

/***/ 7199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(276), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  isAndroid: () => isAndroid,
  isChrome: () => isChrome,
  isClient: () => isClient,
  isIos: () => isIos,
  isRSC: () => isRSC,
  isServer: () => isServer,
  isTouchable: () => isTouchable,
  isWeb: () => isWeb,
  isWebTouchable: () => isWebTouchable,
  isWindowDefined: () => isWindowDefined,
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect
});
module.exports = __toCommonJS(src_exports);
var import_react = __webpack_require__(6689);
const isWeb = "web" === "web";
const isWindowDefined = typeof window !== "undefined";
const isServer = isWeb && !isWindowDefined;
const isClient = isWeb && isWindowDefined;
const isRSC = process.env.ENABLE_RSC;
const idFn = () => {
};
const useIsomorphicLayoutEffect = isRSC ? idFn : isServer ? import_react.useEffect : import_react.useLayoutEffect;
const isChrome = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
const isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const isTouchable = !isWeb || isWebTouchable;
if (false) {}
if (false) {}
const isAndroid = false;
const isIos = false;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9600:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getBaseViews_exports = {};
__export(getBaseViews_exports, {
  getBaseViews: () => getBaseViews
});
module.exports = __toCommonJS(getBaseViews_exports);
function getBaseViews() {
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getBaseViews.js.map


/***/ }),

/***/ 4092:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getBoundingClientRect_exports = {};
__export(getBoundingClientRect_exports, {
  getBoundingClientRect: () => getBoundingClientRect
});
module.exports = __toCommonJS(getBoundingClientRect_exports);
const getBoundingClientRect = (node) => {
  var _a;
  if (!node || node.nodeType !== 1)
    return;
  return (_a = node.getBoundingClientRect) == null ? void 0 : _a.call(node);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getBoundingClientRect.js.map


/***/ }),

/***/ 4228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getRect_exports = {};
__export(getRect_exports, {
  getRect: () => getRect
});
module.exports = __toCommonJS(getRect_exports);
var import_getBoundingClientRect = __webpack_require__(4092);
const getRect = (node) => {
  const rect = (0, import_getBoundingClientRect.getBoundingClientRect)(node);
  if (!rect)
    return;
  const { x, y, top, left } = rect;
  return { x, y, width: node.offsetWidth, height: node.offsetHeight, top, left };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getRect.js.map


/***/ }),

/***/ 8808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useElementLayout_exports = {};
__export(useElementLayout_exports, {
  measureLayout: () => measureLayout,
  useElementLayout: () => useElementLayout
});
module.exports = __toCommonJS(useElementLayout_exports);
var import_constants = __webpack_require__(5213);
var import_use_event = __webpack_require__(6552);
var import_getBoundingClientRect = __webpack_require__(4092);
var import_getRect = __webpack_require__(4228);
const LayoutHandlers = /* @__PURE__ */ new WeakMap();
let resizeObserver = null;
if (typeof window !== "undefined" && "ResizeObserver" in window) {
  resizeObserver = new ResizeObserver((entries) => {
    for (const { target } of entries) {
      const onLayout = LayoutHandlers.get(target);
      if (typeof onLayout !== "function")
        return;
      measureLayout(target, null, (x, y, width, height, left, top) => {
        onLayout({
          nativeEvent: {
            layout: { x, y, width, height, left, top },
            target
          },
          timeStamp: Date.now()
        });
      });
    }
  });
}
const measureLayout = (node, relativeTo, callback) => {
  const relativeNode = relativeTo || (node == null ? void 0 : node.parentNode);
  if (relativeNode instanceof HTMLElement) {
    setTimeout(() => {
      const relativeRect = (0, import_getBoundingClientRect.getBoundingClientRect)(relativeNode);
      const { height, left, top, width } = (0, import_getRect.getRect)(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};
const idFn = () => {
};
function useElementLayout(ref, onLayout) {
  const hasLayoutEvent = !!onLayout;
  const onLayoutEvent = (0, import_use_event.useEvent)(onLayout || idFn);
  (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (!resizeObserver || !hasLayoutEvent)
      return;
    const node = ref.current;
    if (!node)
      return;
    LayoutHandlers.set(node, onLayoutEvent);
    resizeObserver.observe(node);
    return () => {
      resizeObserver == null ? void 0 : resizeObserver.unobserve(node);
    };
  }, [ref, hasLayoutEvent]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useElementLayout.js.map


/***/ }),

/***/ 9947:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var usePlatformMethods_exports = {};
__export(usePlatformMethods_exports, {
  usePlatformMethods: () => usePlatformMethods
});
module.exports = __toCommonJS(usePlatformMethods_exports);
var import_web = __webpack_require__(1444);
var import_getRect = __webpack_require__(4228);
var import_useElementLayout = __webpack_require__(8808);
function usePlatformMethods(hostRef) {
  (0, import_web.useIsomorphicLayoutEffect)(() => {
    const node = hostRef.current;
    if (!node)
      return;
    node.measure = (callback) => (0, import_useElementLayout.measureLayout)(node, null, callback);
    node.measureLayout = (relativeToNode, success) => (0, import_useElementLayout.measureLayout)(node, relativeToNode, success);
    node.measureInWindow = (callback) => {
      if (!node)
        return;
      setTimeout(() => {
        const { height, left, top, width } = (0, import_getRect.getRect)(node);
        callback(left, top, width, height);
      }, 0);
    };
  }, [hostRef]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=usePlatformMethods.js.map


/***/ }),

/***/ 2026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  Stack: () => Stack,
  Text: () => Text
});
module.exports = __toCommonJS(src_exports);
var import_react_native_use_responder_events = __webpack_require__(724);
var import_web = __webpack_require__(1444);
var import_getBaseViews = __webpack_require__(9600);
var import_useElementLayout = __webpack_require__(8808);
var import_usePlatformMethods = __webpack_require__(9947);
var import_Pressability = __webpack_require__(8585);
__reExport(src_exports, __webpack_require__(1444), module.exports);
const Stack = import_web.Stack;
const Text = import_web.Text;
(0, import_web.setupHooks)({
  getBaseViews: import_getBaseViews.getBaseViews,
  usePropsTransform(elementType, propsIn, hostRef) {
    const {
      // event props
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderEnd,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderStart,
      onResponderTerminate,
      onResponderTerminationRequest,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture,
      // android
      collapsable,
      focusable,
      // deprecated,
      accessible,
      accessibilityDisabled,
      onLayout,
      hrefAttrs,
      ...viewProps
    } = propsIn;
    if (!import_web.isRSC) {
      (0, import_usePlatformMethods.usePlatformMethods)(hostRef);
      (0, import_useElementLayout.useElementLayout)(hostRef, onLayout);
      (0, import_react_native_use_responder_events.useResponderEvents)(hostRef, {
        onMoveShouldSetResponder,
        onMoveShouldSetResponderCapture,
        onResponderEnd,
        onResponderGrant,
        onResponderMove,
        onResponderReject,
        onResponderRelease,
        onResponderStart,
        onResponderTerminate,
        onResponderTerminationRequest,
        onScrollShouldSetResponder,
        onScrollShouldSetResponderCapture,
        onSelectionChangeShouldSetResponder,
        onSelectionChangeShouldSetResponderCapture,
        onStartShouldSetResponder,
        onStartShouldSetResponderCapture
      });
    }
    if (viewProps.href !== void 0 && hrefAttrs !== void 0) {
      const { download, rel, target } = hrefAttrs;
      if (download != null) {
        viewProps.download = download;
      }
      if (rel != null) {
        viewProps.rel = rel;
      }
      if (typeof target === "string") {
        viewProps.target = target.charAt(0) !== "_" ? `_${target}` : target;
      }
    }
    if (!viewProps.tabIndex) {
      const _focusable = focusable !== void 0 ? focusable : accessible;
      const role = viewProps.role;
      if (_focusable === false) {
        viewProps.tabIndex = "-1";
      }
      if (
        // These native elements are focusable by default
        elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
      ) {
        if (_focusable === false || accessibilityDisabled === true) {
          viewProps.tabIndex = "-1";
        }
      } else if (
        // These roles are made focusable by default
        role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
      ) {
        if (_focusable !== false) {
          viewProps.tabIndex = "0";
        }
      }
      if (_focusable === true) {
        viewProps.tabIndex = "0";
      }
    }
    return viewProps;
  },
  useEvents(viewProps, events, { pseudos }, setStateShallow) {
    if (false) {}
  }
});
const dontComposePressabilityKeys = {
  onClick: true
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8585:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Pressability_exports = {};
__export(Pressability_exports, {
  Pressability: () => Pressability,
  usePressability: () => usePressability
});
module.exports = __toCommonJS(Pressability_exports);
const Pressability = {};
const usePressability = {};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Pressability.js.map


/***/ }),

/***/ 941:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var clamp_exports = {};
__export(clamp_exports, {
  clamp: () => clamp
});
module.exports = __toCommonJS(clamp_exports);
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=clamp.js.map


/***/ }),

/***/ 9422:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var composeEventHandlers_exports = {};
__export(composeEventHandlers_exports, {
  composeEventHandlers: () => composeEventHandlers
});
module.exports = __toCommonJS(composeEventHandlers_exports);
function composeEventHandlers(og, next, { checkDefaultPrevented = true } = {}) {
  if (!og || !next) {
    return next || og;
  }
  return function composedEventHandler(event) {
    og == null ? void 0 : og(event);
    if (!event || !(checkDefaultPrevented && "defaultPrevented" in event) || // @ts-ignore
    "defaultPrevented" in event && !event.defaultPrevented) {
      return next == null ? void 0 : next(event);
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=composeEventHandlers.js.map


/***/ }),

/***/ 3016:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var concatClassName_exports = {};
__export(concatClassName_exports, {
  concatClassName: () => concatClassName
});
module.exports = __toCommonJS(concatClassName_exports);
function concatClassName(_cn) {
  const args = arguments;
  const usedPrefixes = [];
  let final = "";
  const len = args.length;
  let propObjects = null;
  for (let x = len; x >= 0; x--) {
    const cns = args[x];
    if (!cns)
      continue;
    if (!Array.isArray(cns) && typeof cns !== "string") {
      propObjects = propObjects || [];
      propObjects.push(cns);
      continue;
    }
    const names = Array.isArray(cns) ? cns : cns.split(" ");
    const numNames = names.length;
    for (let i = numNames - 1; i >= 0; i--) {
      const name = names[i];
      if (!name || name === " ")
        continue;
      if (name[0] !== "_") {
        final = name + " " + final;
        continue;
      }
      const splitIndex = name.indexOf("-");
      if (splitIndex < 1) {
        final = name + " " + final;
        continue;
      }
      const nextChar = name[splitIndex + 1];
      const isMediaQuery = nextChar === "_";
      const styleKey = name.slice(1, name.lastIndexOf("-"));
      const mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null;
      const uid = mediaKey ? styleKey + mediaKey : styleKey;
      if (usedPrefixes.indexOf(uid) > -1) {
        continue;
      }
      usedPrefixes.push(uid);
      const propName = styleKey;
      if (propName && propObjects) {
        if (propObjects.some((po) => {
          if (mediaKey) {
            const propKey = pseudoInvert[mediaKey];
            return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
          }
          const res = po && propName in po && po[propName] !== null;
          return res;
        })) {
          continue;
        }
      }
      final = name + " " + final;
    }
  }
  return final;
}
const pseudoInvert = {
  hover: "hoverStyle",
  focus: "focusStyle",
  press: "pressStyle"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=concatClassName.js.map


/***/ }),

/***/ 9047:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(941), module.exports);
__reExport(src_exports, __webpack_require__(9422), module.exports);
__reExport(src_exports, __webpack_require__(3016), module.exports);
__reExport(src_exports, __webpack_require__(7972), module.exports);
__reExport(src_exports, __webpack_require__(7591), module.exports);
__reExport(src_exports, __webpack_require__(9949), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7591:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var types_exports = {};
module.exports = __toCommonJS(types_exports);
//# sourceMappingURL=types.js.map


/***/ }),

/***/ 7972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var validStyleProps_exports = {};
__export(validStyleProps_exports, {
  stylePropsAll: () => stylePropsAll,
  stylePropsFont: () => stylePropsFont,
  stylePropsText: () => stylePropsText,
  stylePropsTextOnly: () => stylePropsTextOnly,
  stylePropsTransform: () => stylePropsTransform,
  stylePropsView: () => stylePropsView,
  validPseudoKeys: () => validPseudoKeys,
  validStyles: () => validStyles,
  validStylesOnBaseProps: () => validStylesOnBaseProps
});
module.exports = __toCommonJS(validStyleProps_exports);
var import_constants = __webpack_require__(5213);
const stylePropsTransform = Object.freeze({
  x: true,
  y: true,
  scale: true,
  perspective: true,
  scaleX: true,
  scaleY: true,
  skewX: true,
  skewY: true,
  matrix: true,
  rotate: true,
  rotateY: true,
  rotateX: true,
  rotateZ: true
});
const validStylesOnBaseProps = Object.freeze({
  placeholderTextColor: true
});
const stylePropsView = Object.freeze({
  backfaceVisibility: true,
  backgroundColor: true,
  borderBottomColor: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRightColor: true,
  borderRightWidth: true,
  borderStartColor: true,
  borderStyle: true,
  borderTopColor: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  opacity: true,
  transform: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  aspectRatio: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  display: true,
  end: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  height: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  overflow: true,
  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  start: true,
  top: true,
  width: true,
  zIndex: true,
  direction: true,
  shadowColor: true,
  shadowOffset: true,
  shadowOpacity: true,
  shadowRadius: true,
  ...validStylesOnBaseProps,
  ...stylePropsTransform,
  // allow a few web only ones
  ... true && {
    // RN doesn't support specific border styles per-edge
    borderBottomStyle: true,
    borderTopStyle: true,
    borderLeftStyle: true,
    borderRightStyle: true,
    overflowX: true,
    overflowY: true,
    userSelect: true,
    cursor: true,
    contain: true,
    pointerEvents: true,
    boxSizing: true,
    boxShadow: true,
    outlineColor: true,
    outlineStyle: true,
    outlineOffset: true,
    outlineWidth: true
  },
  ...import_constants.isAndroid ? { elevationAndroid: true } : {}
});
const stylePropsFont = Object.freeze({
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  letterSpacing: true,
  lineHeight: true,
  textTransform: true
});
const stylePropsTextOnly = Object.freeze({
  color: true,
  ...stylePropsFont,
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationColor: true,
  textShadowColor: true,
  textShadowOffset: true,
  textShadowRadius: true,
  // allow some web only ones
  ... true && {
    whiteSpace: true,
    wordWrap: true,
    textOverflow: true,
    textDecorationDistance: true,
    userSelect: true,
    selectable: true,
    cursor: true,
    WebkitLineClamp: true,
    WebkitBoxOrient: true
  }
});
const stylePropsText = Object.freeze({
  ...stylePropsView,
  ...stylePropsTextOnly
});
const stylePropsAll = stylePropsText;
const validPseudoKeys = Object.freeze({
  enterStyle: true,
  exitStyle: true,
  hoverStyle: true,
  pressStyle: true,
  focusStyle: true
});
const validStyles = Object.freeze({
  ...validPseudoKeys,
  ...stylePropsView
});
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=validStyleProps.js.map


/***/ }),

/***/ 4306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  names: () => import_names2.names,
  normalizeCSSColor: () => normalizeCSSColor,
  rgba: () => rgba
});
module.exports = __toCommonJS(src_exports);
var import_names = __webpack_require__(6964);
var import_names2 = __webpack_require__(6964);
function normalizeCSSColor(color) {
  let match = null;
  if (color in import_names.names) {
    return import_names.names[color];
  }
  if (typeof color === "number") {
    if (color >>> 0 === color && color >= 0 && color <= 4294967295) {
      return color;
    }
    return null;
  }
  if (match = matchers.hex6.exec(color)) {
    return parseInt(match[1] + "ff", 16) >>> 0;
  }
  if (match = matchers.rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = matchers.rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = matchers.hex3.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = matchers.hex8.exec(color)) {
    return parseInt(match[1], 16) >>> 0;
  }
  if (match = matchers.hex4.exec(color)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = matchers.hsl.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = matchers.hsla.exec(color)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...args) {
  return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var matchers = {
  rgb: new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/
};
function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}
function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}
function rgba(colorInt) {
  var r = Math.round((colorInt & 4278190080) >>> 24);
  var g = Math.round((colorInt & 16711680) >>> 16);
  var b = Math.round((colorInt & 65280) >>> 8);
  var a = ((colorInt & 255) >>> 0) / 255;
  return {
    r,
    g,
    b,
    a
  };
}
var src_default = normalizeCSSColor;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6964:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var names_exports = {};
__export(names_exports, {
  names: () => names
});
module.exports = __toCommonJS(names_exports);
const names = {
  transparent: 0,
  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=names.js.map


/***/ }),

/***/ 1988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ResponderSystem_exports = {};
__export(ResponderSystem_exports, {
  addNode: () => addNode,
  attachListeners: () => attachListeners,
  getResponderNode: () => getResponderNode,
  removeNode: () => removeNode,
  terminateResponder: () => terminateResponder
});
module.exports = __toCommonJS(ResponderSystem_exports);
var import_createResponderEvent = __toESM(__webpack_require__(3629));
var import_ResponderTouchHistoryStore = __webpack_require__(5861);
var import_types = __webpack_require__(4983);
var import_utils = __webpack_require__(2633);
var import_utils2 = __webpack_require__(2633);
const emptyObject = {};
const startRegistration = [
  "onStartShouldSetResponderCapture",
  "onStartShouldSetResponder",
  { bubbles: true }
];
const moveRegistration = [
  "onMoveShouldSetResponderCapture",
  "onMoveShouldSetResponder",
  { bubbles: true }
];
const scrollRegistration = [
  "onScrollShouldSetResponderCapture",
  "onScrollShouldSetResponder",
  { bubbles: false }
];
const shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
const emptyResponder = { id: null, idPath: null, node: null };
const responderListenersMap = /* @__PURE__ */ new Map();
let isEmulatingMouseEvents = false;
let trackedTouchCount = 0;
let currentResponder = {
  id: null,
  node: null,
  idPath: null
};
const responderTouchHistoryStore = new import_ResponderTouchHistoryStore.ResponderTouchHistoryStore();
function changeCurrentResponder(responder) {
  currentResponder = responder;
}
function getResponderConfig(id) {
  const config = responderListenersMap.get(id);
  return config != null ? config : emptyObject;
}
function eventListener(domEvent) {
  const eventType = domEvent.type;
  const eventTarget = domEvent.target;
  if (eventType === "touchstart") {
    isEmulatingMouseEvents = true;
  }
  if (eventType === "touchmove" || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }
  if (
    // Ignore browser emulated mouse events
    eventType === "mousedown" && isEmulatingMouseEvents || eventType === "mousemove" && isEmulatingMouseEvents || // Ignore mousemove if a mousedown didn't occur first
    eventType === "mousemove" && trackedTouchCount < 1
  ) {
    return;
  }
  if (isEmulatingMouseEvents && eventType === "mouseup") {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }
    return;
  }
  const isStartEvent = (0, import_types.isStartish)(eventType) && (0, import_utils2.isPrimaryPointerDown)(domEvent);
  const isMoveEvent = (0, import_types.isMoveish)(eventType);
  const isEndEvent = (0, import_types.isEndish)(eventType);
  const isScrollEvent = (0, import_types.isScroll)(eventType);
  const isSelectionChangeEvent = (0, import_types.isSelectionChange)(eventType);
  const responderEvent = (0, import_createResponderEvent.default)(domEvent, responderTouchHistoryStore);
  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }
    responderTouchHistoryStore.recordTouchTrack(
      eventType,
      responderEvent.nativeEvent
    );
  }
  let eventPaths = (0, import_utils2.getResponderPaths)(domEvent);
  let wasNegotiated = false;
  let wantsResponder;
  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    const currentResponderIdPath = currentResponder.idPath;
    const eventIdPath = eventPaths.idPath;
    if (currentResponderIdPath != null && eventIdPath != null) {
      const lowestCommonAncestor = (0, import_utils2.getLowestCommonAncestor)(
        currentResponderIdPath,
        eventIdPath
      );
      if (lowestCommonAncestor != null) {
        const indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        const index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }
    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);
      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }
  if (currentResponder.id != null && currentResponder.node != null) {
    const { id, node } = currentResponder;
    const {
      onResponderStart,
      onResponderMove,
      onResponderEnd,
      onResponderRelease,
      onResponderTerminate,
      onResponderTerminationRequest
    } = getResponderConfig(id);
    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;
    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderStart";
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = "onResponderMove";
        onResponderMove(responderEvent);
      }
    } else {
      const isTerminateEvent = (0, import_types.isCancelish)(eventType) || // native context menu
      eventType === "contextmenu" || // window blur
      eventType === "blur" && eventTarget === window || // responder (or ancestors) blur
      eventType === "blur" && eventTarget.contains(node) && domEvent.relatedTarget !== node || // native scroll without using a pointer
      isScrollEvent && trackedTouchCount === 0 || // native scroll on node that is parent of the responder (allow siblings to scroll)
      isScrollEvent && eventTarget.contains(node) && eventTarget !== node || // native select/selectionchange on node
      isSelectionChangeEvent && (0, import_utils2.hasValidSelection)(domEvent);
      const isReleaseEvent = isEndEvent && !isTerminateEvent && !(0, import_utils2.hasTargetTouches)(node, domEvent.touches);
      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderEnd";
          onResponderEnd(responderEvent);
        }
      }
      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = "onResponderRelease";
          onResponderRelease(responderEvent);
        }
        changeCurrentResponder(emptyResponder);
      }
      if (isTerminateEvent) {
        let shouldTerminate = true;
        if (eventType === "contextmenu" || eventType === "scroll" || eventType === "selectionchange") {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }
        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
            onResponderTerminate(responderEvent);
          }
          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}
function findWantsResponder(eventPaths, domEvent, responderEvent) {
  const shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];
  if (shouldSetCallbacks != null) {
    const { idPath, nodePath } = eventPaths;
    const shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    const shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    const { bubbles } = shouldSetCallbacks[2];
    const check = function(id, node, callbackName) {
      const config = getResponderConfig(id);
      const shouldSetCallback = config[callbackName];
      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node;
        if (shouldSetCallback(responderEvent) === true) {
          const prunedIdPath = idPath.slice(idPath.indexOf(id));
          return { id, node, idPath: prunedIdPath };
        }
      }
    };
    for (let i = idPath.length - 1; i >= 0; i--) {
      const id = idPath[i];
      const node = nodePath[i];
      const result = check(id, node, shouldSetCallbackCaptureName);
      if (result != null) {
        return result;
      }
      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }
    if (bubbles) {
      for (let i = 0; i < idPath.length; i++) {
        const id = idPath[i];
        const node = nodePath[i];
        const result = check(id, node, shouldSetCallbackBubbleName);
        if (result != null) {
          return result;
        }
        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      const id = idPath[0];
      const node = nodePath[0];
      const target = domEvent.target;
      if (target === node) {
        return check(id, node, shouldSetCallbackBubbleName);
      }
    }
  }
}
function attemptTransfer(responderEvent, wantsResponder) {
  const { id: currentId, node: currentNode } = currentResponder;
  const { id, node } = wantsResponder;
  const { onResponderGrant, onResponderReject } = getResponderConfig(id);
  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;
  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = "onResponderGrant";
      onResponderGrant(responderEvent);
    }
    changeCurrentResponder(wantsResponder);
  } else {
    const { onResponderTerminate, onResponderTerminationRequest } = getResponderConfig(currentId);
    let allowTransfer = true;
    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = "onResponderTerminationRequest";
      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }
    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = "onResponderTerminate";
        onResponderTerminate(responderEvent);
      }
      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderGrant";
        onResponderGrant(responderEvent);
      }
      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = "onResponderReject";
        onResponderReject(responderEvent);
      }
    }
  }
}
const documentEventsCapturePhase = ["blur", "scroll"];
const documentEventsBubblePhase = [
  // mouse
  "mousedown",
  "mousemove",
  "mouseup",
  "dragstart",
  // touch
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  // other
  "contextmenu",
  "select",
  "selectionchange"
];
const isTamaguiResponderActive = Symbol();
function attachListeners() {
  if (import_utils.canUseDOM && !window[isTamaguiResponderActive]) {
    window.addEventListener("blur", eventListener);
    documentEventsBubblePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach((eventType) => {
      document.addEventListener(eventType, eventListener, true);
    });
    window[isTamaguiResponderActive] = true;
  }
}
function addNode(id, node, config) {
  (0, import_utils2.setResponderId)(node, id);
  responderListenersMap.set(id, config);
}
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }
  if (responderListenersMap.has(id)) {
    responderListenersMap.delete(id);
  }
}
function terminateResponder() {
  const { id, node } = currentResponder;
  if (id != null && node != null) {
    const { onResponderTerminate } = getResponderConfig(id);
    if (onResponderTerminate != null) {
      const event = (0, import_createResponderEvent.default)({}, responderTouchHistoryStore);
      event.currentTarget = node;
      onResponderTerminate(event);
    }
    changeCurrentResponder(emptyResponder);
  }
  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
function getResponderNode() {
  return currentResponder.node;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ResponderSystem.js.map


/***/ }),

/***/ 5861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ResponderTouchHistoryStore_exports = {};
__export(ResponderTouchHistoryStore_exports, {
  ResponderTouchHistoryStore: () => ResponderTouchHistoryStore
});
module.exports = __toCommonJS(ResponderTouchHistoryStore_exports);
var import_types = __webpack_require__(4983);
const MAX_TOUCH_BANK = 20;
function timestampForTouch(touch) {
  return touch["timeStamp"] || touch.timestamp;
}
function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}
function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}
function getTouchIdentifier({ identifier }) {
  if (identifier == null) {
    console.error("Touch object is missing identifier.");
  }
  if (false) {}
  return identifier;
}
function recordTouchStart(touch, touchHistory) {
  const identifier = getTouchIdentifier(touch);
  const touchRecord = touchHistory.touchBank[identifier];
  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchHistory.touchBank[identifier] = createTouchRecord(touch);
  }
  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}
function recordTouchMove(touch, touchHistory) {
  const touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn(
      "Cannot record touch move without a touch start.\n",
      `Touch Move: ${printTouch(touch)}
`,
      `Touch Bank: ${printTouchBank(touchHistory)}`
    );
  }
}
function recordTouchEnd(touch, touchHistory) {
  const touchRecord = touchHistory.touchBank[getTouchIdentifier(touch)];
  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn(
      "Cannot record touch end without a touch start.\n",
      `Touch End: ${printTouch(touch)}
`,
      `Touch Bank: ${printTouchBank(touchHistory)}`
    );
  }
}
function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}
function printTouchBank(touchHistory) {
  const { touchBank } = touchHistory;
  let printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));
  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ` (original size: ${touchBank.length})`;
  }
  return printed;
}
class ResponderTouchHistoryStore {
  constructor() {
    this._touchHistory = {
      touchBank: [],
      //Array<TouchRecord>
      numberActiveTouches: 0,
      // If there is only one active touch, we remember its location. This prevents
      // us having to loop through all of the touches all the time in the most
      // common case.
      indexOfSingleActiveTouch: -1,
      mostRecentTimeStamp: 0
    };
  }
  recordTouchTrack(topLevelType, nativeEvent) {
    const touchHistory = this._touchHistory;
    if ((0, import_types.isMoveish)(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchMove(touch, touchHistory));
    } else if ((0, import_types.isStartish)(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchStart(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if ((0, import_types.isEndish)(topLevelType)) {
      nativeEvent.changedTouches.forEach((touch) => recordTouchEnd(touch, touchHistory));
      touchHistory.numberActiveTouches = nativeEvent.touches.length;
      if (touchHistory.numberActiveTouches === 1) {
        const { touchBank } = touchHistory;
        for (let i = 0; i < touchBank.length; i++) {
          const touchTrackToCheck = touchBank[i];
          if (touchTrackToCheck == null ? void 0 : touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }
        if (false) {}
      }
    }
  }
  get touchHistory() {
    return this._touchHistory;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ResponderTouchHistoryStore.js.map


/***/ }),

/***/ 3629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createResponderEvent_exports = {};
__export(createResponderEvent_exports, {
  default: () => createResponderEvent
});
module.exports = __toCommonJS(createResponderEvent_exports);
var import_utils = __webpack_require__(2633);
const emptyFunction = () => {
};
const emptyObject = {};
const emptyArray = [];
function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}
function createResponderEvent(domEvent, responderTouchHistoryStore) {
  let rect;
  let propagationWasStopped = false;
  let changedTouches;
  let touches;
  const domEventChangedTouches = domEvent.changedTouches;
  const domEventType = domEvent.type;
  const metaKey = domEvent.metaKey === true;
  const shiftKey = domEvent.shiftKey === true;
  const force = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].force) || 0;
  const identifier = normalizeIdentifier((domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].identifier) || 0);
  const clientX = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].clientX) || domEvent.clientX;
  const clientY = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].clientY) || domEvent.clientY;
  const pageX = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].pageX) || domEvent.pageX;
  const pageY = (domEventChangedTouches == null ? void 0 : domEventChangedTouches[0].pageY) || domEvent.pageY;
  const preventDefault = typeof domEvent.preventDefault === "function" ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  const timestamp = domEvent.timeStamp;
  function normalizeTouches(touches2) {
    return Array.prototype.slice.call(touches2).map((touch) => {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),
        get locationX() {
          return locationX(touch.clientX);
        },
        get locationY() {
          return locationY(touch.clientY);
        },
        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp
      };
    });
  }
  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    const emulatedTouches = [
      {
        force,
        identifier,
        get locationX() {
          return locationX(clientX);
        },
        get locationY() {
          return locationY(clientY);
        },
        pageX,
        pageY,
        target: domEvent.target,
        timestamp
      }
    ];
    changedTouches = emulatedTouches;
    touches = domEventType === "mouseup" || domEventType === "dragstart" ? emptyArray : emulatedTouches;
  }
  const responderEvent = {
    bubbles: true,
    cancelable: true,
    // `currentTarget` is set before dispatch
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey,
      shiftKey,
      changedTouches,
      force,
      identifier,
      get locationX() {
        return locationX(clientX);
      },
      get locationY() {
        return locationY(clientY);
      },
      pageX,
      pageY,
      target: domEvent.target,
      timestamp,
      touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault,
    stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: responderTouchHistoryStore.touchHistory
  };
  function locationX(x) {
    rect = rect || (0, import_utils.getBoundingClientRect)(responderEvent.currentTarget);
    if (rect) {
      return x - rect.left;
    }
  }
  function locationY(y) {
    rect = rect || (0, import_utils.getBoundingClientRect)(responderEvent.currentTarget);
    if (rect) {
      return y - rect.top;
    }
  }
  return responderEvent;
}
//# sourceMappingURL=createResponderEvent.js.map


/***/ }),

/***/ 724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(7097), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4983:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var types_exports = {};
__export(types_exports, {
  BLUR: () => BLUR,
  CONTEXT_MENU: () => CONTEXT_MENU,
  FOCUS_OUT: () => FOCUS_OUT,
  MOUSE_CANCEL: () => MOUSE_CANCEL,
  MOUSE_DOWN: () => MOUSE_DOWN,
  MOUSE_MOVE: () => MOUSE_MOVE,
  MOUSE_UP: () => MOUSE_UP,
  SCROLL: () => SCROLL,
  SELECT: () => SELECT,
  SELECTION_CHANGE: () => SELECTION_CHANGE,
  TOUCH_CANCEL: () => TOUCH_CANCEL,
  TOUCH_END: () => TOUCH_END,
  TOUCH_MOVE: () => TOUCH_MOVE,
  TOUCH_START: () => TOUCH_START,
  isCancelish: () => isCancelish,
  isEndish: () => isEndish,
  isMoveish: () => isMoveish,
  isScroll: () => isScroll,
  isSelectionChange: () => isSelectionChange,
  isStartish: () => isStartish
});
module.exports = __toCommonJS(types_exports);
const BLUR = "blur";
const CONTEXT_MENU = "contextmenu";
const FOCUS_OUT = "focusout";
const MOUSE_DOWN = "mousedown";
const MOUSE_MOVE = "mousemove";
const MOUSE_UP = "mouseup";
const MOUSE_CANCEL = "dragstart";
const TOUCH_START = "touchstart";
const TOUCH_MOVE = "touchmove";
const TOUCH_END = "touchend";
const TOUCH_CANCEL = "touchcancel";
const SCROLL = "scroll";
const SELECT = "select";
const SELECTION_CHANGE = "selectionchange";
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=types.js.map


/***/ }),

/***/ 7097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useResponderEvents_exports = {};
__export(useResponderEvents_exports, {
  useResponderEvents: () => useResponderEvents
});
module.exports = __toCommonJS(useResponderEvents_exports);
var React = __toESM(__webpack_require__(6689));
var ResponderSystem = __toESM(__webpack_require__(1988));
__reExport(useResponderEvents_exports, __webpack_require__(2633), module.exports);
const emptyObject = {};
function useResponderEvents(hostRef, config = emptyObject) {
  const id = React.useId();
  const isAttachedRef = React.useRef(false);
  React.useEffect(() => {
    ResponderSystem.attachListeners();
    return () => {
      ResponderSystem.removeNode(id);
    };
  }, [id]);
  React.useEffect(() => {
    const {
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture
    } = config;
    const requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    const node = hostRef.current;
    if (requiresResponderSystem) {
      ResponderSystem.addNode(id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      ResponderSystem.removeNode(id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  if (false) {}
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useResponderEvents.js.map


/***/ }),

/***/ 2633:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export(utils_exports, {
  canUseDOM: () => canUseDOM,
  getBoundingClientRect: () => getBoundingClientRect,
  getLowestCommonAncestor: () => getLowestCommonAncestor,
  getResponderPaths: () => getResponderPaths,
  hasTargetTouches: () => hasTargetTouches,
  hasValidSelection: () => hasValidSelection,
  isPrimaryPointerDown: () => isPrimaryPointerDown,
  isSelectionValid: () => isSelectionValid,
  setResponderId: () => setResponderId
});
module.exports = __toCommonJS(utils_exports);
const keyName = "__reactResponderId";
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
const getBoundingClientRect = (node) => {
  if (!node)
    return;
  if (node.nodeType !== 1)
    return;
  if (node.getBoundingClientRect) {
    return node.getBoundingClientRect();
  }
};
function getEventPath(domEvent) {
  var _a;
  if (domEvent.type === "selectionchange") {
    const target = (_a = window.getSelection()) == null ? void 0 : _a.anchorNode;
    return composedPathFallback(target);
  } else {
    const path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}
function composedPathFallback(target) {
  const path = [];
  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }
  return path;
}
function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }
  return null;
}
function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}
function getResponderPaths(domEvent) {
  const idPath = [];
  const nodePath = [];
  const eventPath = getEventPath(domEvent);
  for (let i = 0; i < eventPath.length; i++) {
    const node = eventPath[i];
    const id = getResponderId(node);
    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }
  return { idPath, nodePath };
}
function getLowestCommonAncestor(pathA, pathB) {
  let pathALength = pathA.length;
  let pathBLength = pathB.length;
  if (
    // If either path is empty
    pathALength === 0 || pathBLength === 0 || // If the last elements aren't the same there can't be a common ancestor
    // that is connected to the responder system
    pathA[pathALength - 1] !== pathB[pathBLength - 1]
  ) {
    return null;
  }
  let itemA = pathA[0];
  let indexA = 0;
  let itemB = pathB[0];
  let indexB = 0;
  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }
  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }
  let depth = pathALength;
  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }
    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }
  return null;
}
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }
  for (let i = 0; i < touches.length; i++) {
    const node = touches[i].target;
    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }
  return false;
}
function hasValidSelection(domEvent) {
  if (domEvent.type === "selectionchange") {
    return isSelectionValid();
  }
  return domEvent.type === "select";
}
function isPrimaryPointerDown(domEvent) {
  const { altKey, button, buttons, ctrlKey, type } = domEvent;
  const isTouch = type === "touchstart" || type === "touchmove";
  const isPrimaryMouseDown = type === "mousedown" && (button === 0 || buttons === 1);
  const isPrimaryMouseMove = type === "mousemove" && buttons === 1;
  const noModifiers = altKey === false && ctrlKey === false;
  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }
  return false;
}
function isSelectionValid() {
  const selection = window.getSelection();
  if (!selection)
    return false;
  const string = selection.toString();
  const anchorNode = selection.anchorNode;
  const focusNode = selection.focusNode;
  const isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== "\n" && !!isTextNode;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=utils.js.map


/***/ }),

/***/ 9949:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  simpleHash: () => simpleHash
});
module.exports = __toCommonJS(src_exports);
const cache = /* @__PURE__ */ new Map();
const simpleHash = (str, hashMin = 10) => {
  if (cache.has(str)) {
    return cache.get(str);
  }
  let hash = 0;
  let valids = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const char = str.charCodeAt(i);
    if (char === 46)
      valids += "d0t";
    if (isValidCSSCharCode(char) && len <= hashMin) {
      valids += str[i];
    } else {
      hash = hashChar(hash, str[i]);
    }
  }
  const res = valids + (hash ? Math.abs(hash) : "");
  if (cache.size > 1e4) {
    cache.clear();
  }
  cache.set(str, res);
  return res;
};
const hashChar = (hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0;
function isValidCSSCharCode(code) {
  return (
    // A-Z
    code >= 65 && code <= 90 || // a-z
    code >= 97 && code <= 122 || // _
    code === 95 || // -
    code === 45 || // 0-9
    code >= 48 && code <= 57
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4179:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  useDidFinishSSR: () => useDidFinishSSR
});
module.exports = __toCommonJS(src_exports);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
function useDidFinishSSR() {
  if (import_constants.isServer || import_constants.isRSC) {
    return false;
  }
  const [did, setDid] = (0, import_react.useState)(false);
  (0, import_constants.useIsomorphicLayoutEffect)(() => {
    (0, import_react.startTransition)(() => {
      setDid(true);
    });
  }, []);
  return did;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(8981), module.exports);
__reExport(src_exports, __webpack_require__(7975), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useEvent_exports = {};
__export(useEvent_exports, {
  useEvent: () => useEvent
});
module.exports = __toCommonJS(useEvent_exports);
var import_useGet = __webpack_require__(7975);
function useEvent(callback) {
  return (0, import_useGet.useGet)(callback, defaultValue, true);
}
const defaultValue = () => {
  throw new Error("Cannot call an event handler while rendering.");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useEvent.js.map


/***/ }),

/***/ 7975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useGet_exports = {};
__export(useGet_exports, {
  useGet: () => useGet
});
module.exports = __toCommonJS(useGet_exports);
var import_react = __webpack_require__(6689);
const isWeb = "web" === "web";
const isClient = typeof window !== "undefined";
const useIsomorphicLayoutEffect = !isWeb || isClient ? import_react.useLayoutEffect : import_react.useEffect;
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = (0, import_react.useRef)(initialValue ?? currentValue);
  useIsomorphicLayoutEffect(() => {
    curRef.current = currentValue;
  });
  return (0, import_react.useCallback)(
    forwardToFunction ? (...args) => {
      var _a;
      return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
    } : () => curRef.current,
    []
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useGet.js.map


/***/ }),

/***/ 2391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  isServerSide: () => isServerSide,
  useForceUpdate: () => useForceUpdate
});
module.exports = __toCommonJS(src_exports);
var import_react = __webpack_require__(6689);
const isServerSide =  true && typeof window === "undefined";
const idFn = () => {
};
function useForceUpdate() {
  return isServerSide ? idFn : (0, import_react.useReducer)((x) => x + 1, 0)[1];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Tamagui_exports = {};
__export(Tamagui_exports, {
  Tamagui: () => Tamagui,
  getValueFromIdentifier: () => getValueFromIdentifier,
  setIdentifierValue: () => setIdentifierValue
});
module.exports = __toCommonJS(Tamagui_exports);
var Helpers = __toESM(__webpack_require__(9047));
var import_config = __webpack_require__(5769);
var import_insertStyleRule = __webpack_require__(8546);
var import_useMedia = __webpack_require__(9683);
class TamaguiManager {
  constructor() {
    this.Helpers = Helpers;
  }
  get mediaState() {
    return { ...import_useMedia.mediaState };
  }
  get config() {
    return (0, import_config.getConfig)();
  }
  get insertedRules() {
    return (0, import_insertStyleRule.getAllRules)();
  }
  get allSelectors() {
    return (0, import_insertStyleRule.getAllSelectors)();
  }
  get allTransforms() {
    return (0, import_insertStyleRule.getAllTransforms)();
  }
  get identifierToValue() {
    return identifierToValue;
  }
}
const Tamagui = new TamaguiManager();
const identifierToValue = /* @__PURE__ */ new Map();
const getValueFromIdentifier = (identifier) => {
  return identifierToValue.get(identifier);
};
const setIdentifierValue = (identifier, value) => {
  identifierToValue.set(identifier, value);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Tamagui.js.map


/***/ }),

/***/ 5769:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var config_exports = {};
__export(config_exports, {
  configListeners: () => configListeners,
  getConfig: () => getConfig,
  getFont: () => getFont,
  getThemes: () => getThemes,
  getTokens: () => getTokens,
  onConfiguredOnce: () => onConfiguredOnce,
  setConfig: () => setConfig,
  setConfigFont: () => setConfigFont,
  updateConfig: () => updateConfig,
  useTokens: () => useTokens
});
module.exports = __toCommonJS(config_exports);
let conf;
const setConfig = (next) => {
  conf = next;
  configListeners.forEach((cb) => cb(next));
};
const setConfigFont = (name, font, fontParsed) => {
  if (false) {}
  conf.fonts[name] = font;
  conf.fontsParsed[`$${name}`] = fontParsed;
};
const getConfig = () => {
  if (!conf) {
    throw new Error(
       false ? 0 : "Err0"
    );
  }
  return conf;
};
let cached;
const getTokens = ({
  prefixed
} = {}) => {
  if (!conf)
    throw new Error(`never called createTamagui`);
  if (prefixed === false)
    return conf.tokens;
  if (prefixed === true)
    return conf.tokensParsed;
  return cached ?? (cached = Object.freeze({
    size: {
      ...conf.tokens["size"],
      ...conf.tokensParsed["size"]
    },
    space: {
      ...conf.tokens["space"],
      ...conf.tokensParsed["space"]
    },
    radius: {
      ...conf.tokens["radius"],
      ...conf.tokensParsed["radius"]
    },
    zIndex: {
      ...conf.tokens["zIndex"],
      ...conf.tokensParsed["zIndex"]
    },
    color: {
      ...conf.tokens["color"],
      ...conf.tokensParsed["color"]
    }
  }));
};
const useTokens = () => getTokens();
const getThemes = () => conf.themes;
const configListeners = /* @__PURE__ */ new Set();
const onConfiguredOnce = (cb) => {
  if (conf) {
    cb(conf);
  } else {
    configListeners.add(cb);
  }
};
const updateConfig = (key, value) => {
  Object.assign(conf[key], value);
};
const getFont = (name) => {
  var _a;
  const conf2 = getConfig();
  return conf2.fontsParsed[name] ?? ((_a = Object.entries(conf2.fontsParsed).find(
    ([k]) => {
      var _a2, _b;
      return ((_b = (_a2 = conf2.fontsParsed[k]) == null ? void 0 : _a2.family) == null ? void 0 : _b["val"]) === name;
    }
  )) == null ? void 0 : _a[1]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=config.js.map


/***/ }),

/***/ 2149:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var accessibilityDirectMap_exports = {};
__export(accessibilityDirectMap_exports, {
  accessibilityDirectMap: () => accessibilityDirectMap
});
module.exports = __toCommonJS(accessibilityDirectMap_exports);
const accessibilityDirectMap = {};
if (true) {
  const items = {
    Hidden: true,
    ActiveDescendant: true,
    Atomic: true,
    AutoComplete: true,
    Busy: true,
    Checked: true,
    ColumnCount: "colcount",
    ColumnIndex: "colindex",
    ColumnSpan: "colspan",
    Current: true,
    Details: true,
    ErrorMessage: true,
    Expanded: true,
    HasPopup: true,
    Invalid: true,
    Label: true,
    Level: true,
    Modal: true,
    Multiline: true,
    MultiSelectable: true,
    Orientation: true,
    Owns: true,
    Placeholder: true,
    PosInSet: true,
    Pressed: true,
    RoleDescription: true,
    RowCount: true,
    RowIndex: true,
    RowSpan: true,
    Selected: true,
    SetSize: true,
    Sort: true,
    ValueMax: true,
    ValueMin: true,
    ValueNow: true,
    ValueText: true
  };
  for (const key in items) {
    let val = items[key];
    if (val === true) {
      val = key.toLowerCase();
    }
    accessibilityDirectMap[`accessibility${key}`] = `aria-${val}`;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=accessibilityDirectMap.js.map


/***/ }),

/***/ 7239:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var constants_exports = {};
__export(constants_exports, {
  THEME_CLASSNAME_PREFIX: () => THEME_CLASSNAME_PREFIX,
  THEME_NAME_SEPARATOR: () => THEME_NAME_SEPARATOR,
  stackDefaultStyles: () => stackDefaultStyles,
  webOnlyDefaultStyles: () => webOnlyDefaultStyles
});
module.exports = __toCommonJS(constants_exports);
const THEME_NAME_SEPARATOR = "_";
const THEME_CLASSNAME_PREFIX = "t_";
const webOnlyDefaultStyles = {
  display: "flex",
  flexBasis: "auto",
  boxSizing: "border-box",
  position: "relative",
  minHeight: 0,
  minWidth: 0
};
const stackDefaultStyles = {
  alignItems: "stretch",
  flexShrink: 0,
  ...webOnlyDefaultStyles
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 6394:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var isDevTools_exports = {};
__export(isDevTools_exports, {
  isDevTools: () => isDevTools
});
module.exports = __toCommonJS(isDevTools_exports);
const isDevTools = (() => {
  if (false) {}
  return false;
})();
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=isDevTools.js.map


/***/ }),

/***/ 1016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var AnimationDriverContext_exports = {};
__export(AnimationDriverContext_exports, {
  AnimationDriverContext: () => AnimationDriverContext
});
module.exports = __toCommonJS(AnimationDriverContext_exports);
var import_react = __webpack_require__(6689);
const AnimationDriverContext = (0, import_react.createContext)(null);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=AnimationDriverContext.js.map


/***/ }),

/***/ 4631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ButtonNestingContext_exports = {};
__export(ButtonNestingContext_exports, {
  ButtonNestingContext: () => ButtonNestingContext
});
module.exports = __toCommonJS(ButtonNestingContext_exports);
var import_react = __webpack_require__(6689);
const ButtonNestingContext = (0, import_react.createContext)(false);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ButtonNestingContext.js.map


/***/ }),

/***/ 5472:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var FontLanguageContext_exports = {};
__export(FontLanguageContext_exports, {
  FontLanguageContext: () => FontLanguageContext
});
module.exports = __toCommonJS(FontLanguageContext_exports);
var import_react = __webpack_require__(6689);
const FontLanguageContext = (0, import_react.createContext)(null);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=FontLanguageContext.js.map


/***/ }),

/***/ 5744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TextAncestorContext_exports = {};
__export(TextAncestorContext_exports, {
  TextAncestorContext: () => TextAncestorContext
});
module.exports = __toCommonJS(TextAncestorContext_exports);
var import_react = __webpack_require__(6689);
const TextAncestorContext = (0, import_react.createContext)(false);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=TextAncestorContext.js.map


/***/ }),

/***/ 5884:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createComponent_exports = {};
__export(createComponent_exports, {
  Spacer: () => Spacer,
  Unspaced: () => Unspaced,
  createComponent: () => createComponent,
  defaultComponentState: () => defaultComponentState,
  mouseUps: () => mouseUps,
  spacedChildren: () => spacedChildren
});
module.exports = __toCommonJS(createComponent_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_compose_refs = __webpack_require__(7199);
var import_constants = __webpack_require__(5213);
var import_helpers = __webpack_require__(9047);
var import_react = __toESM(__webpack_require__(6689));
var import_config = __webpack_require__(5769);
var import_constants2 = __webpack_require__(7239);
var import_FontLanguageContext = __webpack_require__(5472);
var import_TextAncestorContext = __webpack_require__(5744);
var import_createVariable = __webpack_require__(2754);
var import_extendStaticConfig = __webpack_require__(7941);
var import_getSplitStyles = __webpack_require__(8359);
var import_mergeProps = __webpack_require__(5051);
var import_proxyThemeVariables = __webpack_require__(7481);
var import_themeable = __webpack_require__(4577);
var import_useShallowSetState = __webpack_require__(2397);
var import_useAnimationDriver = __webpack_require__(9914);
var import_useMedia = __webpack_require__(9683);
var import_useServerHooks = __webpack_require__(9000);
var import_useTheme = __webpack_require__(157);
var import_setupHooks = __webpack_require__(2962);
var import_Slot = __webpack_require__(4576);
var import_Theme = __webpack_require__(8349);
var import_ThemeDebug = __webpack_require__(5600);
"web";
const defaultComponentState = {
  hover: false,
  press: false,
  pressIn: false,
  focus: false,
  unmounted: true
};
const defaultComponentStateMounted = {
  ...defaultComponentState,
  unmounted: false
};
const HYDRATION_CUTOFF = process.env.TAMAGUI_ANIMATED_PRESENCE_HYDRATION_CUTOFF ? +process.env.TAMAGUI_ANIMATED_PRESENCE_HYDRATION_CUTOFF : 5;
let tamaguiConfig;
let AnimatedText;
let AnimatedView;
let initialTheme;
const mouseUps = /* @__PURE__ */ new Set();
if (typeof document !== "undefined") {
  const cancelTouches = () => {
    mouseUps.forEach((x) => x());
    mouseUps.clear();
  };
  addEventListener("mouseup", cancelTouches);
  addEventListener("touchend", cancelTouches);
  addEventListener("touchcancel", cancelTouches);
}
let BaseText;
let BaseView;
let hasSetupBaseViews = false;
const numRenderedOfType = {};
function createComponent(configIn, ParentComponent) {
  const staticConfig = (() => {
    const next = (0, import_extendStaticConfig.extendStaticConfig)(configIn, ParentComponent);
    if ("parsed" in next) {
      return next;
    } else {
      return (0, import_extendStaticConfig.parseStaticConfig)(next);
    }
  })();
  const { isHOC } = staticConfig;
  const defaultComponentClassName = `is_${staticConfig.componentName}`;
  let defaultProps;
  let defaultTag;
  const component = (0, import_react.forwardRef)((propsIn, forwardedRef) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    if (false) {}
    if (false) {}
    let props;
    if (defaultProps && !propsIn.asChild) {
      props = (0, import_mergeProps.mergeProps)(defaultProps, propsIn)[0];
    } else {
      props = propsIn;
    }
    const debugProp = props["debug"];
    const { Component, isText, isZStack } = staticConfig;
    const componentName = props.componentName || staticConfig.componentName;
    const stateRef = (0, import_react.useRef)(
      void 0
    );
    stateRef.current || (stateRef.current = {});
    const hostRef = (0, import_useServerHooks.useServerRef)(null);
    const animationsConfig = (0, import_useAnimationDriver.useAnimationDriver)();
    const useAnimations = animationsConfig == null ? void 0 : animationsConfig.useAnimations;
    const hasAnimationProp = props.animation || props.style && hasAnimatedStyleValue(props.style);
    const willBeAnimated = (() => {
      if (import_constants.isServer)
        return false;
      const next = !!(hasAnimationProp && !isHOC && useAnimations);
      if (next && !stateRef.current.hasAnimated) {
        stateRef.current.hasAnimated = true;
      }
      return next || stateRef.current.hasAnimated;
    })();
    const usePresence = animationsConfig == null ? void 0 : animationsConfig.usePresence;
    const presence = !import_constants.isRSC && willBeAnimated && usePresence ? usePresence() : null;
    const hasEnterStyle = !!props.enterStyle;
    const needsMount = Boolean((import_constants.isWeb ? import_constants.isClient : true) && willBeAnimated);
    const states = (0, import_useServerHooks.useServerState)(
      needsMount ? defaultComponentState : defaultComponentStateMounted
    );
    const state = propsIn.forceStyle ? { ...states[0], [propsIn.forceStyle]: true } : states[0];
    const setState = states[1];
    const setStateShallow = (0, import_useShallowSetState.useShallowSetState)(setState, debugProp, componentName);
    let hasHydrated = false;
    numRenderedOfType[componentName] ?? (numRenderedOfType[componentName] = 0);
    if (willBeAnimated) {
      if (++numRenderedOfType[componentName] > HYDRATION_CUTOFF) {
        hasHydrated = true;
      }
    }
    let isAnimated = willBeAnimated;
    if (presence && hasHydrated) {
    } else {
      if (isAnimated && (import_constants.isServer || state.unmounted === true)) {
        isAnimated = false;
      }
    }
    const componentClassName = props.asChild ? "" : props.componentName ? `is_${props.componentName}` : defaultComponentClassName;
    const hasTextAncestor = !!(import_constants.isWeb && isText ? (0, import_react.useContext)(import_TextAncestorContext.TextAncestorContext) : false);
    const languageContext = import_constants.isRSC ? null : (0, import_react.useContext)(import_FontLanguageContext.FontLanguageContext);
    const isDisabled = props.disabled ?? ((_d = props.accessibilityState) == null ? void 0 : _d.disabled);
    const isTaggable = !Component || typeof Component === "string";
    const element = import_constants.isWeb ? isTaggable ? props.tag || defaultTag || Component : Component : Component;
    const BaseTextComponent = BaseText || element || "span";
    const BaseViewComponent = BaseView || element || (hasTextAncestor ? "span" : "div");
    AnimatedText = animationsConfig ? animationsConfig.Text : BaseTextComponent;
    AnimatedView = animationsConfig ? animationsConfig.View : BaseViewComponent;
    let elementType = isText ? (isAnimated ? AnimatedText : null) || BaseTextComponent : (isAnimated ? AnimatedView : null) || BaseViewComponent;
    const avoidClassesWhileAnimating = animationsConfig == null ? void 0 : animationsConfig.isReactNative;
    if (isAnimated && presence) {
      const presenceState = presence[2];
      if (presenceState) {
        if (state.unmounted && presenceState.enterVariant) {
          props[presenceState.enterVariant] = true;
        }
        if (!presenceState.isPresent && presenceState.exitVariant) {
          props[presenceState.exitVariant] = true;
        }
      }
    }
    const isAnimatedReactNative = isAnimated && (animationsConfig == null ? void 0 : animationsConfig.isReactNative);
    const isReactNative = Boolean(staticConfig.isReactNative || isAnimatedReactNative);
    const shouldAvoidClasses = !import_constants.isWeb || !!(isAnimated && avoidClassesWhileAnimating) || !staticConfig.acceptsClassName;
    const shouldForcePseudo = !!propsIn.forceStyle;
    const noClassNames = shouldAvoidClasses || shouldForcePseudo;
    const disableThemeProp = props["data-disable-theme"];
    const disableTheme = disableThemeProp && !willBeAnimated || isHOC;
    const themeStateProps = {
      name: props.theme,
      componentName,
      reset: props.reset,
      inverse: props.themeInverse,
      // @ts-ignore this is internal use only
      disable: disableTheme,
      shouldUpdate: () => !!stateRef.current.didAccessThemeVariableValue
    };
    if (false) {}
    const themeState = (0, import_useTheme.useThemeWithState)(themeStateProps);
    elementType = Component || elementType;
    const isStringElement = typeof elementType === "string";
    const isExiting = (presence == null ? void 0 : presence[0]) === false;
    const mediaState = (0, import_useMedia.useMedia)(
      // @ts-ignore, we just pass a stable object so we can get it later with
      // should match to the one used in `setMediaShouldUpdate` below
      stateRef,
      debugProp ? { props, staticConfig } : null
    );
    (0, import_createVariable.setDidGetVariableValue)(false);
    if (false) {}
    const resolveVariablesAs = (
      // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
      isAnimated || isHOC && state.unmounted == false && hasAnimationProp ? "value" : "auto"
    );
    const splitStyles = (0, import_getSplitStyles.useSplitStyles)(
      props,
      staticConfig,
      themeState.theme,
      {
        ...state,
        mediaState,
        noClassNames,
        hasTextAncestor,
        resolveVariablesAs,
        isExiting
      },
      null,
      languageContext || void 0,
      elementType,
      debugProp
    );
    const isMediaSpaced = Array.isArray(splitStyles.hasMedia);
    const shouldListenForMedia = (0, import_createVariable.didGetVariableValue)() || isMediaSpaced || noClassNames && splitStyles.hasMedia === true;
    (0, import_useMedia.setMediaShouldUpdate)(stateRef, {
      enabled: shouldListenForMedia,
      keys: noClassNames && isMediaSpaced ? splitStyles.hasMedia : null
    });
    const isAnimatedReactNativeWeb = isAnimated && avoidClassesWhileAnimating;
    if (false) {}
    const {
      viewProps: viewPropsIn,
      pseudos,
      style: splitStylesStyle,
      classNames,
      space
    } = splitStyles;
    const propsWithAnimation = props;
    let animationStyles;
    if (!import_constants.isRSC && willBeAnimated && useAnimations && !isHOC) {
      const animations = useAnimations({
        props: propsWithAnimation,
        style: splitStylesStyle,
        presence,
        state,
        theme: themeState.theme,
        pseudos: pseudos || null,
        onDidAnimate: props.onDidAnimate,
        hostRef,
        staticConfig
      });
      if (isAnimated) {
        if (animations) {
          animationStyles = animations.style;
        }
      }
    }
    const {
      asChild,
      children,
      onPress,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      themeShallow,
      spaceDirection: _spaceDirection,
      disabled: disabledProp,
      onMouseUp,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      separator,
      // ignore from here on out
      forceStyle: _forceStyle,
      // @ts-ignore  for next/link compat etc
      onClick,
      theme: _themeProp,
      // @ts-ignore
      defaultVariants,
      ...nonTamaguiProps
    } = viewPropsIn;
    const disabled = ((_e = props.accessibilityState) == null ? void 0 : _e.disabled) || props.accessibilityDisabled;
    let viewProps = nonTamaguiProps;
    if (isHOC && _themeProp) {
      viewProps.theme = _themeProp;
    }
    if ( true && !isReactNative && !willBeAnimated && !asChild) {
      viewProps = (_g = (_f = import_setupHooks.hooks).usePropsTransform) == null ? void 0 : _g.call(_f, elementType, nonTamaguiProps, hostRef);
    } else {
      viewProps = nonTamaguiProps;
    }
    viewProps.ref = (0, import_compose_refs.useComposedRefs)(hostRef, forwardedRef);
    if (false) {}
    const unPress = (0, import_react.useCallback)(() => {
      setStateShallow({
        press: false,
        pressIn: false
      });
    }, [setStateShallow]);
    const shouldSetMounted = needsMount && state.unmounted;
    (0, import_constants.useIsomorphicLayoutEffect)(() => {
      if (!shouldSetMounted) {
        return () => {
          mouseUps.delete(unPress);
        };
      }
      const unmounted = state.unmounted === true && hasEnterStyle ? "should-enter" : false;
      setStateShallow({
        unmounted
      });
    }, [shouldSetMounted, state.unmounted]);
    let styles;
    if (isStringElement && shouldAvoidClasses && !shouldForcePseudo) {
      styles = {
        ...animationStyles ?? splitStylesStyle
      };
    } else {
      styles = [animationStyles ?? splitStylesStyle];
      if (shouldForcePseudo) {
        const next = {};
        styles.forEach((style) => Object.assign(next, style));
        Object.assign(splitStyles.style, next);
      }
    }
    let fontFamily = isText ? splitStyles.fontFamily || staticConfig.defaultProps.fontFamily : null;
    if (fontFamily && fontFamily[0] === "$") {
      fontFamily = fontFamily.slice(1);
    }
    const fontFamilyClassName = fontFamily ? `font_${fontFamily}` : "";
    const classList = [
      hasEnterStyle && (state.unmounted && needsMount || !import_constants.isClient) ? "t_will-mount" : "",
      componentName ? componentClassName : "",
      fontFamilyClassName,
      classNames ? Object.values(classNames).join(" ") : ""
    ];
    const className = classList.join(" ");
    if (true) {
      const style = animationStyles ?? splitStyles.style;
      if (isAnimatedReactNativeWeb) {
        viewProps.style = style;
      } else if (isReactNative) {
        const cnStyles = { $$css: true };
        for (const name of className.split(" ")) {
          cnStyles[name] = name;
        }
        viewProps.style = [...Array.isArray(style) ? style : [style], cnStyles];
        if (false) {}
      } else {
        viewProps.className = className;
        viewProps.style = style;
      }
    }
    if (false) {}
    const runtimePressStyle = !disabled && noClassNames && (pseudos == null ? void 0 : pseudos.pressStyle);
    const attachPress = Boolean(
      runtimePressStyle || onPress || onPressOut || onPressIn || onClick
    );
    const runtimeHoverStyle = !disabled && noClassNames && (pseudos == null ? void 0 : pseudos.hoverStyle);
    const isHoverable = import_constants.isWeb && !!(runtimeHoverStyle || onHoverIn || onHoverOut || onMouseEnter || onMouseLeave);
    const handlesPressEvents = !(import_constants.isWeb || asChild);
    const shouldAttach = Boolean(
      attachPress || isHoverable || noClassNames && "pressStyle" in props || import_constants.isWeb && noClassNames && "hoverStyle" in props
    );
    const events = shouldAttach && !import_constants.isRSC && !isDisabled && !asChild ? {
      onPressOut: attachPress ? (e) => {
        unPress();
        onPressOut == null ? void 0 : onPressOut(e);
        onMouseUp == null ? void 0 : onMouseUp(e);
      } : void 0,
      ...isHoverable && {
        onMouseEnter: isHoverable ? (e) => {
          const next = {};
          if (isHoverable) {
            next.hover = true;
          }
          if (state.pressIn) {
            next.press = true;
          }
          setStateShallow(next);
          onHoverIn == null ? void 0 : onHoverIn(e);
          onMouseEnter == null ? void 0 : onMouseEnter(e);
        } : void 0,
        onMouseLeave: isHoverable ? (e) => {
          const next = {};
          mouseUps.add(unPress);
          if (isHoverable) {
            next.hover = false;
          }
          if (state.pressIn) {
            next.press = false;
            next.pressIn = false;
          }
          setStateShallow(next);
          onHoverOut == null ? void 0 : onHoverOut(e);
          onMouseLeave == null ? void 0 : onMouseLeave(e);
        } : void 0
      },
      onPressIn: attachPress ? (e) => {
        setStateShallow({
          press: true,
          pressIn: true,
          hover: false
        });
        onPressIn == null ? void 0 : onPressIn(e);
        onMouseDown == null ? void 0 : onMouseDown(e);
        if (import_constants.isWeb) {
          mouseUps.add(unPress);
        }
      } : void 0,
      onPress: attachPress ? (e) => {
        unPress();
        import_constants.isWeb && (onClick == null ? void 0 : onClick(e));
        onPress == null ? void 0 : onPress(e);
      } : void 0
    } : null;
    if (false) {}
    (_l = (_k = import_setupHooks.hooks).useEvents) == null ? void 0 : _l.call(_k, viewProps, events, splitStyles, setStateShallow);
    const shouldReset = !!(themeShallow && themeState.isNewTheme);
    if (shouldReset) {
      stateRef.current.themeShallow = true;
    }
    let content = !children || asChild ? children : spacedChildren({
      separator,
      children,
      space,
      direction: props.spaceDirection || "both",
      isZStack,
      debug: debugProp
    });
    if (asChild) {
      elementType = import_Slot.Slot;
      viewProps = {
        ...viewProps,
        onPress,
        onPressIn,
        onPressOut
      };
    }
    content = (0, import_react.createElement)(elementType, viewProps, content);
    content = disableThemeProp ? content : (0, import_Theme.useThemedChildren)(themeState, content, {
      shallow: stateRef.current.themeShallow
      // passPropsToChildren: true,
    });
    if (false) {}
    if (true) {
      if (events || isAnimatedReactNativeWeb) {
        content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            className: `${isAnimatedReactNativeWeb ? className : ""}  _dsp_contents`,
            ...events && {
              onMouseEnter: events.onMouseEnter,
              onMouseLeave: events.onMouseLeave,
              onClick: events.onPress,
              onMouseDown: events.onPressIn,
              onMouseUp: events.onPressOut,
              onTouchStart: events.onPressIn,
              onTouchEnd: events.onPressOut
            },
            children: content
          }
        );
      }
    }
    if (false) {}
    return content;
  });
  if (staticConfig.componentName) {
    component.displayName = staticConfig.componentName;
  }
  (0, import_config.onConfiguredOnce)((conf) => {
    if (!tamaguiConfig) {
      tamaguiConfig = conf;
      if (!initialTheme) {
        const next = conf.themes[Object.keys(conf.themes)[0]];
        initialTheme = (0, import_proxyThemeVariables.proxyThemeVariables)(next);
        if (false) {}
      }
    }
    let defaultPropsIn = staticConfig.defaultProps || {};
    const parentNames = [...staticConfig.parentNames || [], staticConfig.componentName];
    if (tamaguiConfig.defaultProps && parentNames && staticConfig.componentName) {
      defaultPropsIn = mergeConfigDefaultProps(
        staticConfig.componentName,
        defaultPropsIn,
        tamaguiConfig.defaultProps,
        parentNames,
        tamaguiConfig
      );
    }
    const debug = defaultPropsIn["debug"];
    if (defaultPropsIn.tag) {
      defaultTag = defaultPropsIn.tag;
    }
    const noClassNames = !staticConfig.acceptsClassName;
    const { name, variants, defaultVariants, ...restProps } = defaultPropsIn;
    defaultProps = restProps;
    if (false) {}
  });
  let res = component;
  if (configIn.memo) {
    res = (0, import_react.memo)(res);
  }
  res.staticConfig = {
    validStyles: staticConfig.validStyles || import_helpers.stylePropsView,
    ...staticConfig
  };
  function extendStyledConfig() {
    return (0, import_extendStaticConfig.extendStaticConfig)(
      {
        ...staticConfig,
        neverFlatten: true,
        isHOC: true
      },
      res
    );
  }
  function extractable(Component) {
    Component.staticConfig = extendStyledConfig();
    Component.styleable = styleable;
    return Component;
  }
  function styleable(Component) {
    var _a;
    const isForwardedRefAlready = ((_a = Component.render) == null ? void 0 : _a.length) === 2;
    const ComponentForwardedRef = isForwardedRefAlready ? Component : (0, import_react.forwardRef)(Component);
    const extendedConfig = extendStyledConfig();
    const out = (0, import_themeable.themeable)(ComponentForwardedRef, extendedConfig);
    out.staticConfig = extendedConfig;
    out.styleable = styleable;
    return out;
  }
  res.extractable = extractable;
  res.styleable = styleable;
  return res;
}
const Unspaced = (props) => props.children;
Unspaced["isUnspaced"] = true;
const Spacer = createComponent({
  acceptsClassName: true,
  memo: true,
  componentName: "Spacer",
  validStyles: import_helpers.validStyles,
  defaultProps: {
    ...import_constants2.stackDefaultStyles,
    // avoid nesting issues
    tag: "span",
    size: true,
    pointerEvents: "none"
  },
  variants: {
    size: {
      "...size": (size, { tokens }) => {
        size = size === true ? "$true" : size;
        const sizePx = tokens.space[size] ?? size;
        return {
          width: sizePx,
          height: sizePx,
          minWidth: sizePx,
          minHeight: sizePx
        };
      }
    },
    flex: {
      true: {
        flexGrow: 1
      }
    },
    direction: {
      horizontal: {
        height: 0,
        minHeight: 0
      },
      vertical: {
        width: 0,
        minWidth: 0
      },
      both: {}
    }
  }
});
function spacedChildren(props) {
  var _a, _b, _c;
  const { isZStack, children, space, direction, spaceFlex, separator } = props;
  const hasSpace = !!(space || spaceFlex);
  const hasSeparator = !(separator === void 0 || separator === null);
  if (!(hasSpace || hasSeparator || isZStack)) {
    return children;
  }
  const childrenList = import_react.Children.toArray(children);
  const len = childrenList.length;
  if (len <= 1 && !isZStack && !((_b = (_a = childrenList[0]) == null ? void 0 : _a["type"]) == null ? void 0 : _b["shouldForwardSpace"])) {
    return childrenList;
  }
  const final = [];
  for (let [index, child] of childrenList.entries()) {
    const isEmpty = child === null || child === void 0 || Array.isArray(child) && child.length === 0;
    if (!isEmpty && import_react.default.isValidElement(child) && ((_c = child.type) == null ? void 0 : _c["shouldForwardSpace"])) {
      child = import_react.default.cloneElement(child, {
        space,
        spaceFlex,
        separator,
        key: child.key
      });
    }
    if (isEmpty || !child || child["key"] && !isZStack) {
      final.push(child);
    } else {
      final.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: isZStack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AbsoluteFill, { children: child }) : child }, index)
      );
    }
    if (isUnspaced(child) && index === 0)
      continue;
    if (isZStack)
      continue;
    const next = childrenList[index + 1];
    if (next && !isUnspaced(next)) {
      if (separator) {
        if (hasSpace) {
          final.push(
            createSpacer({
              key: `_${index}_00tmgui`,
              direction,
              space,
              spaceFlex
            })
          );
        }
        final.push(
          import_react.default.isValidElement(separator) ? import_react.default.cloneElement(separator, { key: `sep_${index}` }) : separator
        );
        if (hasSpace) {
          final.push(
            createSpacer({
              key: `_${index}01tmgui`,
              direction,
              space,
              spaceFlex
            })
          );
        }
      } else {
        final.push(
          createSpacer({
            key: `_${index}02tmgui`,
            direction,
            space,
            spaceFlex
          })
        );
      }
    }
  }
  if (false) {}
  return final;
}
function createSpacer({ key, direction, space, spaceFlex }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Spacer,
    {
      size: space,
      direction,
      ...typeof spaceFlex !== "undefined" && {
        flex: spaceFlex === true ? 1 : spaceFlex === false ? 0 : spaceFlex
      }
    },
    key
  );
}
function isUnspaced(child) {
  const t = child == null ? void 0 : child["type"];
  return (t == null ? void 0 : t["isVisuallyHidden"]) || (t == null ? void 0 : t["isUnspaced"]);
}
const DefaultProps = /* @__PURE__ */ new Map();
function mergeConfigDefaultProps(name, props, configDefaults, parentNames, conf) {
  const len = parentNames.length;
  let prev;
  for (let i = 0; i < len; i++) {
    const n = parentNames[i];
    if (!n)
      continue;
    if (DefaultProps.has(n)) {
      prev = DefaultProps.get(n);
      continue;
    }
    const props2 = configDefaults[n];
    if (!props2) {
      if (prev) {
        DefaultProps.set(n, prev);
      }
      continue;
    }
    prev = (0, import_mergeProps.mergeProps)(prev || {}, props2, false, conf.inverseShorthands)[0];
    DefaultProps.set(n, prev);
  }
  const ourDefaultsMerged = DefaultProps.get(name);
  if (ourDefaultsMerged) {
    return (0, import_mergeProps.mergeProps)(props, ourDefaultsMerged, false, conf.inverseShorthands)[0];
  }
  return props;
}
const AbsoluteFill = createComponent({
  defaultProps: {
    ...import_constants2.stackDefaultStyles,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "box-none"
  }
});
function hasAnimatedStyleValue(style) {
  return Object.keys(style).some((k) => {
    const val = style[k];
    return val && typeof val === "object" && "_animation" in val;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createComponent.js.map


/***/ }),

/***/ 9473:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createFont_exports = {};
__export(createFont_exports, {
  createFont: () => createFont
});
module.exports = __toCommonJS(createFont_exports);
const fontWeights = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900"
];
const processSection = (section, keys, defaultValue) => {
  if (typeof section === "string")
    return section;
  const sectionKeys = Object.keys(section);
  let fillValue = section[sectionKeys[0]];
  return Object.fromEntries(
    [.../* @__PURE__ */ new Set([...keys, ...sectionKeys])].map((key) => {
      const value = section[key] ?? defaultValue ?? fillValue;
      fillValue = value;
      defaultValue = value;
      return [key, value];
    })
  );
};
const createFont = (font) => {
  const sizeKeys = Object.keys(font.size);
  const processedFont = Object.fromEntries(
    Object.entries(font).map(([key, section]) => {
      return [
        key,
        processSection(
          section,
          key === "face" ? fontWeights : sizeKeys,
          key === "face" ? { normal: font.family } : void 0
        )
      ];
    })
  );
  return Object.freeze(processedFont);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createFont.js.map


/***/ }),

/***/ 4830:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createShorthands_exports = {};
__export(createShorthands_exports, {
  createShorthands: () => createShorthands
});
module.exports = __toCommonJS(createShorthands_exports);
function createShorthands(shorthands) {
  return Object.freeze(shorthands);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createShorthands.js.map


/***/ }),

/***/ 9008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createTamagui_exports = {};
__export(createTamagui_exports, {
  createTamagui: () => createTamagui
});
module.exports = __toCommonJS(createTamagui_exports);
var import_constants = __webpack_require__(5213);
var import_config = __webpack_require__(5769);
var import_createVariables = __webpack_require__(4847);
var import_getThemeCSSRules = __webpack_require__(6807);
var import_insertStyleRule = __webpack_require__(8546);
var import_registerCSSVariable = __webpack_require__(3956);
var import_themes = __webpack_require__(3426);
var import_useMedia = __webpack_require__(9683);
var import_insertFont = __webpack_require__(4166);
var import_Tamagui = __webpack_require__(8517);
const createdConfigs = /* @__PURE__ */ new WeakMap();
function createTamagui(configIn) {
  var _a;
  if (createdConfigs.has(configIn)) {
    return configIn;
  }
  if (false) {}
  (0, import_insertStyleRule.scanAllSheets)();
  (0, import_insertStyleRule.listenForSheetChanges)();
  const fontTokens = Object.fromEntries(
    Object.entries(configIn.fonts).map(([k, v]) => {
      return [k, (0, import_createVariables.createVariables)(v, "f", true)];
    })
  );
  const fontsParsed = (() => {
    const res = {};
    for (const familyName in fontTokens) {
      res[`$${familyName}`] = (0, import_insertFont.parseFont)(fontTokens[familyName]);
    }
    return res;
  })();
  const themeConfig = (() => {
    const themes = { ...configIn.themes };
    const cssRuleSets = [];
    if (import_constants.isWeb) {
      let declarationsToRuleSet2 = function(decs, selector = "") {
        return `:root${selector} {${sep}${[...decs].join(`;${sep}`)}${sep}}`;
      };
      var declarationsToRuleSet = declarationsToRuleSet2;
      const declarations = [];
      const fontDeclarations = {};
      for (const key in configIn.tokens) {
        for (const skey in configIn.tokens[key]) {
          const val = configIn.tokens[key][skey];
          (0, import_registerCSSVariable.registerCSSVariable)(val);
          declarations.push((0, import_registerCSSVariable.variableToCSS)(val, key === "zIndex"));
        }
      }
      for (const key in fontsParsed) {
        const fontParsed = fontsParsed[key];
        const [name, language] = key.includes("_") ? key.split("_") : [key];
        const fontVars = (0, import_insertFont.registerFontVariables)(fontParsed);
        fontDeclarations[key] = {
          name: name.slice(1),
          declarations: fontVars,
          language
        };
      }
      const sep =  false ? 0 : "";
      cssRuleSets.push(declarationsToRuleSet2(declarations));
      if (fontDeclarations) {
        for (const key in fontDeclarations) {
          const { name, declarations: declarations2, language = "default" } = fontDeclarations[key];
          const fontSelector = `.font_${name}`;
          const langSelector = `:root .t_lang-${name}-${language} ${fontSelector}`;
          const selectors = language === "default" ? ` ${fontSelector}, ${langSelector}` : langSelector;
          const specificRuleSet = declarationsToRuleSet2(declarations2, selectors);
          cssRuleSets.push(specificRuleSet);
        }
      }
    }
    const dedupedThemes = {};
    const existing = /* @__PURE__ */ new Map();
    for (const themeName in themes) {
      const rawTheme = themes[themeName];
      const key = JSON.stringify(rawTheme);
      if (existing.has(key)) {
        const e = existing.get(key);
        themes[themeName] = e.theme;
        e.names.push(themeName);
        continue;
      }
      const theme = { ...rawTheme };
      for (const key2 in theme) {
        (0, import_themes.ensureThemeVariable)(theme, key2);
      }
      themes[themeName] = theme;
      dedupedThemes[themeName] = {
        names: [themeName],
        theme
      };
      existing.set(key, dedupedThemes[themeName]);
    }
    for (const themeName in themes) {
      themes[themeName] = (0, import_themes.proxyThemeToParents)(themeName, themes[themeName], themes);
    }
    import_registerCSSVariable.tokensValueToVariable.clear();
    return {
      themes,
      cssRuleSets,
      getThemeRulesSets() {
        let themeRuleSets = [];
        if (import_constants.isWeb || import_constants.isRSC) {
          for (const themeName in dedupedThemes) {
            themeRuleSets = [
              ...themeRuleSets,
              ...(0, import_getThemeCSSRules.getThemeCSSRules)({
                config: configIn,
                themeName,
                ...dedupedThemes[themeName]
              })
            ];
          }
        }
        return themeRuleSets;
      }
    };
  })();
  const tokensParsed = Object.fromEntries(
    Object.entries(configIn.tokens).map(([k, v]) => {
      const val = Object.fromEntries(Object.entries(v).map(([k2, v2]) => [`$${k2}`, v2]));
      import_createVariables.tokensKeysOrdered.set(val, import_createVariables.tokensKeysOrdered.get(v));
      return [k, val];
    })
  );
  const shorthands = configIn.shorthands || {};
  let lastCSSInsertedRulesIndex = -1;
  const getCSS = ({ separator = "\n", sinceLastCall, excludeThemes } = {}) => {
    if (sinceLastCall && lastCSSInsertedRulesIndex >= 0) {
      const rules = (0, import_insertStyleRule.getAllRules)();
      lastCSSInsertedRulesIndex = rules.length;
      return rules.slice(lastCSSInsertedRulesIndex).join(separator);
    }
    lastCSSInsertedRulesIndex = 0;
    return `._ovs-contain {overscroll-behavior:contain;}
.t_unmounted .t_will-mount {opacity:0;visibility:hidden;}
.is_Text .is_Text {display:inline-flex;}
._dsp_contents {display:contents;}
${themeConfig.cssRuleSets.join(separator)}
${excludeThemes ? "" : themeConfig.getThemeRulesSets().join(separator)}
${(0, import_insertStyleRule.getAllRules)().join(separator)}`;
  };
  const getNewCSS = (opts) => getCSS({ ...opts, sinceLastCall: true });
  const config = {
    onlyAllowShorthands: false,
    fontLanguages: [],
    animations: {},
    media: {},
    ...configIn,
    // already processed by createTokens()
    tokens: configIn.tokens,
    // vite made this into a function if it wasn't set
    shorthands,
    inverseShorthands: shorthands ? Object.fromEntries(Object.entries(shorthands).map(([k, v]) => [v, k])) : {},
    themes: themeConfig.themes,
    fontsParsed,
    themeConfig,
    tokensParsed,
    parsed: true,
    getNewCSS,
    getCSS
    // const tokens = [...getToken(tokens.size[0])]
    // .spacer-sm + ._dsp_contents._dsp-sm-hidden { margin-left: -var(--${}) }
  };
  (0, import_useMedia.configureMedia)(config);
  (0, import_config.setConfig)(config);
  if (import_config.configListeners.size) {
    import_config.configListeners.forEach((cb) => cb(config));
    import_config.configListeners.clear();
  }
  createdConfigs.set(config, true);
  if (false) {}
  return config;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createTamagui.js.map


/***/ }),

/***/ 4022:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createTheme_exports = {};
__export(createTheme_exports, {
  createTheme: () => createTheme
});
module.exports = __toCommonJS(createTheme_exports);
const createTheme = (theme) => {
  return theme;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createTheme.js.map


/***/ }),

/***/ 5624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createTokens_exports = {};
__export(createTokens_exports, {
  createTokens: () => createTokens
});
module.exports = __toCommonJS(createTokens_exports);
var import_createVariables = __webpack_require__(4847);
function createTokens(tokens2) {
  return (0, import_createVariables.createVariables)(tokens2);
}
const tokens = createTokens({
  size: { 0: 1 },
  space: { 0: 1 },
  radius: { 0: 1 },
  zIndex: { 0: 1 },
  color: { 0: "hi" }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createTokens.js.map


/***/ }),

/***/ 2754:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createVariable_exports = {};
__export(createVariable_exports, {
  createCSSVariable: () => createCSSVariable,
  createVariable: () => createVariable,
  didGetVariableValue: () => didGetVariableValue,
  getVariable: () => getVariable,
  getVariableName: () => getVariableName,
  getVariableValue: () => getVariableValue,
  getVariableVariable: () => getVariableVariable,
  isVariable: () => isVariable,
  setDidGetVariableValue: () => setDidGetVariableValue,
  variableToString: () => variableToString
});
module.exports = __toCommonJS(createVariable_exports);
var import_constants = __webpack_require__(5213);
var import_helpers = __webpack_require__(9047);
var import_config = __webpack_require__(5769);
const IS_VAR = "isVar";
const createVariable = (props) => {
  if (isVariable(props))
    return props;
  const { key, name, val } = props;
  return {
    [IS_VAR]: true,
    key,
    name: (0, import_helpers.simpleHash)(name, 40),
    val,
    variable: import_constants.isWeb ? createCSSVariable(name) : ""
  };
};
function variableToString(vrble, getValue = false) {
  if (isVariable(vrble)) {
    if (!getValue && import_constants.isWeb && vrble.variable) {
      return vrble.variable;
    }
    return `${vrble.val}`;
  }
  return `${vrble || ""}`;
}
function isVariable(v) {
  return v && typeof v === "object" && IS_VAR in v;
}
function getVariable(nameOrVariable) {
  setDidGetVariableValue(true);
  if (isVariable(nameOrVariable)) {
    return variableToString(nameOrVariable);
  }
  const tokens = (0, import_config.getConfig)().tokensParsed;
  return variableToString(tokens[nameOrVariable] ?? nameOrVariable);
}
let accessed = false;
const setDidGetVariableValue = (val) => accessed = val;
const didGetVariableValue = () => accessed;
function getVariableValue(v) {
  if (isVariable(v)) {
    setDidGetVariableValue(true);
    return v.val;
  }
  return v;
}
function getVariableName(v) {
  if (isVariable(v))
    return v.name;
  return v;
}
function getVariableVariable(v) {
  if (isVariable(v))
    return v.variable;
  return v;
}
const createCSSVariable = (nameProp, includeVar = true) => {
  if (false) {}
  const name = (0, import_helpers.simpleHash)(nameProp, 60);
  return includeVar ? `var(--${name})` : name;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createVariable.js.map


/***/ }),

/***/ 4847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createVariables_exports = {};
__export(createVariables_exports, {
  createVariables: () => createVariables,
  tokensKeysOrdered: () => tokensKeysOrdered
});
module.exports = __toCommonJS(createVariables_exports);
var import_helpers = __webpack_require__(9047);
var import_createVariable = __webpack_require__(2754);
const tokensKeysOrdered = /* @__PURE__ */ new WeakMap();
const createVariables = (tokens, parentPath = "", isFont = false) => {
  const res = {};
  let i = 0;
  for (let key in tokens) {
    i++;
    const val = tokens[key];
    if (key[0] === "$") {
      key = key.slice(1);
    }
    if ((0, import_createVariable.isVariable)(val)) {
      res[key] = val;
      continue;
    }
    const niceKey = (0, import_helpers.simpleHash)(key);
    let name = isFont ? niceKey.slice(0, 2) : i;
    name = parentPath ? `${parentPath}-${name}` : niceKey;
    if (val && typeof val === "object") {
      res[key] = createVariables(tokens[key], name);
      continue;
    }
    res[key] = (0, import_createVariable.isVariable)(val) ? val : (0, import_createVariable.createVariable)({ val, name, key: niceKey });
  }
  if (parentPath === "size" || parentPath === "space") {
    tokensKeysOrdered.set(res, Object.keys(tokens));
  }
  return res;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createVariables.js.map


/***/ }),

/***/ 7326:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ThemeManager_exports = {};
__export(ThemeManager_exports, {
  ThemeManager: () => ThemeManager,
  getNonComponentParentManager: () => getNonComponentParentManager,
  hasNoThemeUpdatingProps: () => hasNoThemeUpdatingProps
});
module.exports = __toCommonJS(ThemeManager_exports);
var import_config = __webpack_require__(5769);
var import_constants = __webpack_require__(7239);
var import_getThemeUnwrapped = __webpack_require__(5569);
const emptyState = { name: "" };
function hasNoThemeUpdatingProps(props) {
  return !(props.name || props.componentName || props.inverse || props.reset);
}
let uid = 0;
class ThemeManager {
  constructor(props = {}, parentManagerIn) {
    this.props = props;
    this.id = uid++;
    this.isComponent = false;
    this.themeListeners = /* @__PURE__ */ new Set();
    this.parentManager = null;
    this.state = emptyState;
    this._allKeys = null;
    if (parentManagerIn === "root") {
      this.updateState(props, false);
      return;
    }
    const parentManager = getNonComponentParentManager(parentManagerIn);
    if (!parentManager) {
      if (false) {}
      throw `\u274C`;
    }
    if (hasNoThemeUpdatingProps(props)) {
      return parentManager;
    }
    if (parentManager) {
      this.parentManager = parentManager;
    }
    if (this.updateState(props, false)) {
      return;
    }
    return parentManager || this;
  }
  updateState(props = this.props || {}, shouldNotify = true) {
    const isChanging = (() => {
      if (props.forceTheme) {
        this.state.theme = props.forceTheme;
        this.state.name = props.name || "";
        return true;
      }
      const nextState = this.getStateIfChanged(props);
      if (nextState) {
        this.props = props;
        this.state = nextState;
        return true;
      }
    })();
    if (isChanging) {
      const names = this.state.name.split("_");
      const lastName = names[names.length - 1][0];
      this.isComponent = lastName[0] === lastName[0].toUpperCase();
      this._allKeys = null;
      if (false) {}
      if (shouldNotify) {
        this.notify(!!props.forceTheme);
      }
      return this.state;
    }
  }
  getStateIfChanged(props = this.props, state = this.state, parentManager = this.parentManager) {
    const _ = this.getState(props, parentManager);
    if (state && state !== emptyState && !_) {
      return parentManager == null ? void 0 : parentManager.state;
    }
    if (this.getStateShouldChange(_, state)) {
      return _;
    }
  }
  getStateShouldChange(nextState, state = this.state) {
    if (!(nextState == null ? void 0 : nextState.theme) || nextState.theme === (state == null ? void 0 : state.theme)) {
      return false;
    }
    return true;
  }
  getState(props = this.props, parentManager = this.parentManager) {
    return getState(props, parentManager) || ( false ? 0 : null);
  }
  get allKeys() {
    var _a;
    this._allKeys || (this._allKeys = /* @__PURE__ */ new Set([
      ...((_a = this.parentManager) == null ? void 0 : _a.allKeys) || [],
      ...Object.keys(this.state.theme || {})
    ]));
    return this._allKeys;
  }
  // gets value going up to parents
  getValue(key, state) {
    if (!key)
      return;
    let theme = (state || this.state).theme;
    let manager = this;
    while (theme && manager) {
      if (key in theme) {
        return theme[key];
      }
      manager = manager.parentManager;
      theme = manager == null ? void 0 : manager.state.theme;
    }
    const tokens = (0, import_config.getTokens)();
    if (key in tokens.color) {
      return tokens.color[key];
    }
  }
  notify(forced = false) {
    this.themeListeners.forEach((cb) => cb(this.state.name, this, forced));
  }
  onChangeTheme(cb, debugId) {
    if (false) {}
    this.themeListeners.add(cb);
    return () => {
      this.themeListeners.delete(cb);
    };
  }
}
function getNextThemeClassName(name, props) {
  const next = `t_sub_theme ${import_constants.THEME_CLASSNAME_PREFIX}${name}`;
  if (props.inverse || props.forceClassName || // light and dark inverse each other so force classname
  name === "light" || name === "dark") {
    const lessSpecificCN = props.componentName ? "" : next.includes("dark_") ? ` t_dark` : next.includes("light_") ? ` t_light` : "";
    return next + lessSpecificCN;
  }
  return next.replace("light_", "").replace("dark_", "");
}
function getState(props, parentManager) {
  var _a, _b, _c;
  const themes = (0, import_config.getThemes)();
  if (props.name && props.reset) {
    throw new Error("Cannot reset + set new name");
  }
  if (!props.name && !props.inverse && !props.reset && !props.componentName) {
    return null;
  }
  if (props.reset && !(parentManager == null ? void 0 : parentManager.parentManager)) {
    if (false) {}
    return null;
  }
  let result = null;
  const nextName = props.reset ? ((_b = (_a = parentManager == null ? void 0 : parentManager.parentManager) == null ? void 0 : _a.state) == null ? void 0 : _b.name) || "" : props.name || "";
  const { componentName } = props;
  const parentName = ((_c = parentManager == null ? void 0 : parentManager.state) == null ? void 0 : _c.name) || "";
  const base = parentName.split(import_constants.THEME_NAME_SEPARATOR);
  const lastSegment = base[base.length - 1];
  const isParentComponentTheme = parentName && lastSegment[0].toUpperCase() === lastSegment[0];
  if (isParentComponentTheme) {
    base.pop();
  }
  const parentBaseTheme = isParentComponentTheme ? base.slice(0, base.length).join(import_constants.THEME_NAME_SEPARATOR) : parentName;
  const max = base.length;
  const min = componentName && !nextName ? max : 0;
  if (false) {}
  for (let i = max; i >= min; i--) {
    let prefix = base.slice(0, i).join(import_constants.THEME_NAME_SEPARATOR);
    if (props.inverse) {
      prefix = inverseThemeName(prefix);
    }
    let potentials = [];
    if (prefix && prefix !== parentBaseTheme) {
      potentials.push(prefix);
    }
    if (nextName) {
      potentials.unshift(prefix ? `${prefix}_${nextName}` : nextName);
    }
    if (i === 1) {
      const lastSegment2 = potentials.findIndex((x) => !x.includes("_"));
      if (lastSegment2 > 0) {
        potentials.splice(lastSegment2, 0, nextName);
      }
    }
    if (componentName) {
      let componentPotentials = [];
      if (nextName) {
        const beforeSeparator = prefix.slice(0, prefix.indexOf(import_constants.THEME_NAME_SEPARATOR));
        componentPotentials.push(`${beforeSeparator}_${nextName}_${componentName}`);
      }
      componentPotentials.push(`${prefix}_${componentName}`);
      if (nextName) {
        const prefixLessOne = base.slice(0, i - 1).join(import_constants.THEME_NAME_SEPARATOR);
        if (prefixLessOne) {
          const lessSpecific = `${prefixLessOne}_${nextName}_${componentName}`;
          componentPotentials.unshift(lessSpecific);
        }
        const moreSpecific = `${prefix}_${nextName}_${componentName}`;
        componentPotentials.unshift(moreSpecific);
      }
      potentials = [...componentPotentials, ...potentials];
    }
    const found = potentials.find((t) => t in themes);
    if (false) {}
    if (found) {
      result = {
        name: found,
        theme: (0, import_getThemeUnwrapped.getThemeUnwrapped)(themes[found]),
        className: getNextThemeClassName(found, props),
        parentName
      };
      break;
    }
  }
  if (false) {}
  return result;
}
const inverseThemeName = (themeName) => {
  return themeName.startsWith("light") ? themeName.replace(/^light/, "dark") : themeName.replace(/^dark/, "light");
};
function getNonComponentParentManager(themeManager) {
  let res = themeManager;
  while (res) {
    if (res == null ? void 0 : res.isComponent) {
      res = res.parentManager;
    } else {
      break;
    }
  }
  return res || null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ThemeManager.js.map


/***/ }),

/***/ 8116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ThemeManagerContext_exports = {};
__export(ThemeManagerContext_exports, {
  ThemeManagerContext: () => ThemeManagerContext
});
module.exports = __toCommonJS(ThemeManagerContext_exports);
var import_react = __webpack_require__(6689);
const ThemeManagerContext = (0, import_react.createContext)(null);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ThemeManagerContext.js.map


/***/ }),

/***/ 449:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createMediaStyle_exports = {};
__export(createMediaStyle_exports, {
  MEDIA_SEP: () => MEDIA_SEP,
  createMediaStyle: () => createMediaStyle
});
module.exports = __toCommonJS(createMediaStyle_exports);
var import_useMedia = __webpack_require__(9683);
const MEDIA_SEP = "_";
let prefixes = null;
let selectors = null;
const createMediaStyle = ({ property, identifier, rules }, mediaKey, mediaQueries, negate) => {
  if (!(prefixes && selectors)) {
    const mediaKeys = Object.keys(mediaQueries);
    prefixes = Object.fromEntries(
      mediaKeys.map((key, index) => [key, new Array(index + 1).fill(":root").join("")])
    );
    selectors = Object.fromEntries(
      mediaKeys.map((key) => [key, (0, import_useMedia.mediaObjectToString)(mediaQueries[key])])
    );
  }
  const precendencePrefix = prefixes[mediaKey];
  const mediaSelector = selectors[mediaKey];
  const negKey = negate ? "0" : "";
  const ogPrefix = identifier.slice(0, identifier.indexOf("-") + 1);
  const nextIdentifier = `${identifier.replace(
    ogPrefix,
    `${ogPrefix}${MEDIA_SEP}${mediaKey}${negKey}${MEDIA_SEP}`
  )}`;
  const screenStr = negate ? "not all and" : "";
  const mediaQuery = `${screenStr} ${mediaSelector}`;
  const styleInner = rules.map((rule) => rule.replace(identifier, nextIdentifier)).join(";");
  let styleRule = "";
  if (styleInner.includes("@media")) {
    styleRule = styleInner.replace("{", ` and ${mediaQuery} {`);
  } else {
    styleRule = `@media ${mediaQuery} { ${precendencePrefix} ${styleInner} }`;
  }
  return {
    property,
    rules: [styleRule],
    identifier: nextIdentifier
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createMediaStyle.js.map


/***/ }),

/***/ 2086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createPropMapper_exports = {};
__export(createPropMapper_exports, {
  createPropMapper: () => createPropMapper,
  getFontFamilyFromNameOrVariable: () => getFontFamilyFromNameOrVariable,
  getPropMappedFontFamily: () => getPropMappedFontFamily
});
module.exports = __toCommonJS(createPropMapper_exports);
var import_constants = __webpack_require__(5213);
var import_config = __webpack_require__(5769);
var import_isDevTools = __webpack_require__(6394);
var import_createVariable = __webpack_require__(2754);
var import_expandStyle = __webpack_require__(9152);
var import_expandStyles = __webpack_require__(9494);
var import_getVariantExtras = __webpack_require__(7231);
var import_isObj = __webpack_require__(2533);
var import_mergeProps = __webpack_require__(5051);
const createPropMapper = (staticConfig) => {
  const variants = staticConfig.variants || {};
  const defaultProps = (0, import_mergeProps.mergeProps)(staticConfig.defaultProps || {}, {}, false)[0];
  let conf;
  const mapper = (key, value, theme, propsIn, state, languageContext, avoidDefaultProps = false, debug) => {
    conf || (conf = (0, import_config.getConfig)());
    if (true) {
      if (key === "elevationAndroid") {
        return;
      }
    }
    const props = state.fallbackProps || propsIn;
    const returnVariablesAs = state.resolveVariablesAs === "value" ? "value" : "auto";
    const fontFamily = props[conf.inverseShorthands.fontFamily] || props.fontFamily || defaultProps.fontFamily || propsIn.fontFamily || "$body";
    if (false) {}
    const variantValue = resolveVariants(
      key,
      value,
      props,
      defaultProps,
      theme,
      variants,
      fontFamily,
      conf,
      returnVariablesAs,
      staticConfig,
      "",
      languageContext,
      avoidDefaultProps,
      debug
    );
    if (variantValue) {
      return variantValue;
    }
    let shouldReturn = value !== void 0 && value !== null;
    if (key in conf.shorthands) {
      shouldReturn = true;
      key = conf.shorthands[key];
    }
    if (value) {
      if (value[0] === "$") {
        value = getToken(
          key,
          value,
          conf,
          theme,
          fontFamily,
          languageContext,
          returnVariablesAs,
          debug
        );
      } else if ((0, import_createVariable.isVariable)(value)) {
        value = resolveVariableValue(key, value, returnVariablesAs);
      }
    }
    if (shouldReturn) {
      return (0, import_expandStyle.expandStyle)(key, value) || [[key, value]];
    }
  };
  return mapper;
};
const resolveVariants = (key, value, props, defaultProps, theme, variants, fontFamily, conf, returnVariablesAs, staticConfig, parentVariantKey, languageContext, avoidDefaultProps = false, debug) => {
  var _a;
  const variant = variants == null ? void 0 : variants[key];
  if (!variant || value === void 0) {
    return;
  }
  let variantValue = getVariantDefinition(variant, key, value, conf);
  if (!variantValue) {
    if (false) {}
    return;
  }
  if (typeof variantValue === "function") {
    const fn = variantValue;
    variantValue = fn(
      value,
      (0, import_getVariantExtras.getVariantExtras)(props, languageContext, theme, defaultProps, avoidDefaultProps)
    );
  }
  let fontFamilyResult;
  if ((0, import_isObj.isObj)(variantValue)) {
    const fontFamilyUpdate = variantValue.fontFamily || variantValue[conf.inverseShorthands.fontFamily];
    if (fontFamilyUpdate) {
      fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf);
    }
    variantValue = resolveTokensAndVariants(
      key,
      variantValue,
      props,
      defaultProps,
      theme,
      variants,
      fontFamilyResult || fontFamily,
      conf,
      returnVariablesAs,
      staticConfig,
      parentVariantKey,
      languageContext,
      avoidDefaultProps,
      debug
    );
  }
  if (variantValue) {
    const next = Object.entries((0, import_expandStyles.expandStyles)(variantValue));
    if (fontFamilyResult && fontFamilyResult[0] === "$") {
      fontFamilyCache.set(next, (0, import_createVariable.getVariableValue)(fontFamilyResult));
    }
    return next;
  }
};
function getFontFamilyFromNameOrVariable(input, conf) {
  if ((0, import_createVariable.isVariable)(input)) {
    const val = variableToFontNameCache.get(input);
    if (val) {
      return val;
    } else {
      for (const key in conf.fontsParsed) {
        const familyVariable = conf.fontsParsed[key].family;
        if ((0, import_createVariable.isVariable)(familyVariable)) {
          variableToFontNameCache.set(familyVariable, key);
          if (familyVariable === input) {
            return key;
          }
        }
      }
    }
  } else if (typeof input === "string") {
    if ((input == null ? void 0 : input[0]) === "$") {
      return input;
    } else {
      if (false) {}
    }
  }
}
const variableToFontNameCache = /* @__PURE__ */ new WeakMap();
const fontFamilyCache = /* @__PURE__ */ new WeakMap();
const getPropMappedFontFamily = (expanded) => {
  return expanded && fontFamilyCache.get(expanded);
};
const resolveTokensAndVariants = (key, value, props, defaultProps, theme, variants, fontFamily, conf, returnVariablesAs, staticConfig, parentVariantKey, languageContext, avoidDefaultProps, debug) => {
  var _a;
  const res = {};
  for (const rKey in value) {
    const fKey = conf.shorthands[rKey] || rKey;
    const val = value[rKey];
    if (fKey in variants) {
      if (parentVariantKey && parentVariantKey === key) {
        res[fKey] = val;
      } else {
        const variantOut = resolveVariants(
          fKey,
          val,
          props,
          defaultProps,
          theme,
          variants,
          fontFamily,
          conf,
          returnVariablesAs,
          staticConfig,
          key,
          languageContext,
          avoidDefaultProps,
          debug
        );
        const { pressStyle, hoverStyle, focusStyle, enterStyle, exitStyle, ...rest } = Object.fromEntries(variantOut);
        const subs = { pressStyle, hoverStyle, focusStyle, enterStyle, exitStyle };
        Object.assign(res, rest);
        for (const key2 in subs) {
          if (subs[key2]) {
            res[key2] ?? (res[key2] = {});
            Object.assign(res[key2], subs[key2]);
          }
        }
      }
      continue;
    }
    if ((0, import_createVariable.isVariable)(val)) {
      res[fKey] = !import_constants.isWeb || returnVariablesAs === "value" ? val.val : val.variable;
      continue;
    }
    if (typeof val === "string") {
      const fVal = val[0] === "$" ? getToken(
        fKey,
        val,
        conf,
        theme,
        fontFamily,
        languageContext,
        returnVariablesAs,
        debug
      ) : val;
      res[fKey] = fVal;
      continue;
    }
    if ((0, import_isObj.isObj)(val)) {
      res[fKey] ?? (res[fKey] = {});
      Object.assign(
        res[fKey],
        resolveTokensAndVariants(
          fKey,
          val,
          props,
          defaultProps,
          theme,
          variants,
          fontFamily,
          conf,
          returnVariablesAs,
          staticConfig,
          key,
          languageContext,
          avoidDefaultProps,
          debug
        )
      );
    } else {
      res[fKey] = val;
    }
    if (false) {}
  }
  return res;
};
const tokenCats = ["size", "color", "radius", "space", "zIndex"].map((name) => ({
  name,
  spreadName: `...${name}`
}));
function getVariantDefinition(variant, key, value, conf) {
  if (typeof variant === "function") {
    return variant;
  }
  if (variant[value]) {
    return variant[value];
  }
  const { tokensParsed } = conf;
  for (const { name, spreadName } of tokenCats) {
    if (variant[spreadName] && value in tokensParsed[name]) {
      return variant[spreadName];
    }
  }
  let fn;
  const type = typeof value;
  if (type === "number") {
    fn = variant[":number"];
  } else if (type === "string") {
    fn = variant[":string"];
  } else if (value === true || value === false) {
    fn = variant[":boolean"];
  }
  return fn || variant["..."] || variant["...size"];
}
const fontShorthand = {
  fontSize: "size",
  fontWeight: "weight"
};
const getToken = (key, value, conf, theme, fontFamily = "$body", languageContext, resolveAs, debug) => {
  var _a, _b, _c;
  const tokensParsed = conf.tokensParsed;
  let valOrVar;
  let hasSet = false;
  if (value in theme) {
    if (false) {}
    valOrVar = theme[value];
    hasSet = true;
  } else {
    switch (key) {
      case "fontFamily": {
        const fontsParsed = languageContext ? (0, import_getVariantExtras.getFontsForLanguage)(conf.fontsParsed, languageContext) : conf.fontsParsed;
        valOrVar = ((_a = fontsParsed[value]) == null ? void 0 : _a.family) || value;
        hasSet = true;
        break;
      }
      case "fontSize":
      case "lineHeight":
      case "letterSpacing":
      case "fontWeight": {
        const fontsParsed = languageContext ? (0, import_getVariantExtras.getFontsForLanguage)(conf.fontsParsed, languageContext) : conf.fontsParsed;
        valOrVar = ((_c = (_b = fontsParsed[fontFamily]) == null ? void 0 : _b[fontShorthand[key] || key]) == null ? void 0 : _c[value]) || value;
        hasSet = true;
        break;
      }
    }
    for (const cat in tokenCategories) {
      if (key in tokenCategories[cat]) {
        const res = tokensParsed[cat][value];
        if (res) {
          valOrVar = res;
          hasSet = true;
        }
      }
    }
    if (!hasSet) {
      const spaceVar = tokensParsed.space[value];
      if (spaceVar) {
        valOrVar = spaceVar;
        hasSet = true;
      }
    }
  }
  if (hasSet) {
    const out = resolveVariableValue(key, valOrVar, resolveAs);
    if (false) {}
    return out;
  }
  if (false) {}
  return value;
};
function resolveVariableValue(key, valOrVar, resolveAs = "auto") {
  if ((0, import_createVariable.isVariable)(valOrVar)) {
    if (resolveAs === "variable") {
      return valOrVar;
    }
    if (resolveAs === "non-color-value") {
      if (import_constants.isWeb) {
        if (key in tokenCategories.color) {
          return valOrVar.variable;
        }
      }
      return valOrVar.val;
    }
    if (!import_constants.isWeb || resolveAs === "value") {
      return valOrVar.val;
    }
    return valOrVar.variable;
  }
  return valOrVar;
}
const tokenCategories = {
  radius: {
    borderRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true
  },
  zIndex: {
    zIndex: true
  },
  color: {
    color: true,
    backgroundColor: true,
    borderColor: true,
    borderBottomColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createPropMapper.js.map


/***/ }),

/***/ 8588:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var createProxy_exports = {};
__export(createProxy_exports, {
  createProxy: () => createProxy
});
module.exports = __toCommonJS(createProxy_exports);
function createProxy(target, handler) {
  if (false) {}
  return new Proxy(target || {}, handler);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createProxy.js.map


/***/ }),

/***/ 2235:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var defaultOffset_exports = {};
__export(defaultOffset_exports, {
  defaultOffset: () => defaultOffset
});
module.exports = __toCommonJS(defaultOffset_exports);
const defaultOffset = { height: 0, width: 0 };
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=defaultOffset.js.map


/***/ }),

/***/ 9152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var expandStyle_exports = {};
__export(expandStyle_exports, {
  expandStyle: () => expandStyle
});
module.exports = __toCommonJS(expandStyle_exports);
var import_constants = __webpack_require__(5213);
var _a;
function expandStyle(key, value) {
  if (true) {
    if (key === "flex") {
      return [
        ["flexGrow", value],
        ["flexShrink", 1],
        ["flexBasis", "auto"]
      ];
    }
    switch (key) {
      case "textAlignVertical": {
        return [["verticalAlign", value === "center" ? "middle" : value]];
      }
      case "writingDirection": {
        return [["direction", value]];
      }
    }
  }
  if (false) {}
  const longKey = EXPANSIONS[key];
  if (longKey) {
    return longKey.map((key2) => {
      return [key2, value];
    });
  }
}
const all = ["Top", "Right", "Bottom", "Left"];
const horiz = ["Right", "Left"];
const vert = ["Top", "Bottom"];
const xy = ["X", "Y"];
const EXPANSIONS = {
  borderColor: ["TopColor", "RightColor", "BottomColor", "LeftColor"],
  borderRadius: [
    "TopLeftRadius",
    "TopRightRadius",
    "BottomRightRadius",
    "BottomLeftRadius"
  ],
  borderWidth: ["TopWidth", "RightWidth", "BottomWidth", "LeftWidth"],
  margin: all,
  marginHorizontal: horiz,
  marginVertical: vert,
  overscrollBehavior: xy,
  padding: all,
  paddingHorizontal: horiz,
  paddingVertical: vert,
  ...import_constants.isWeb && {
    // react-native only supports borderStyle
    borderStyle: ["TopStyle", "RightStyle", "BottomStyle", "LeftStyle"],
    // react-native doesn't support X / Y
    overflow: xy
  }
};
for (const parent in EXPANSIONS) {
  const prefix = parent.slice(0, ((_a = /[A-Z]/.exec(parent)) == null ? void 0 : _a.index) ?? parent.length);
  EXPANSIONS[parent] = EXPANSIONS[parent].map((k) => `${prefix}${k}`);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=expandStyle.js.map


/***/ }),

/***/ 9494:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var expandStyles_exports = {};
__export(expandStyles_exports, {
  expandStyles: () => expandStyles,
  fixStyles: () => fixStyles
});
module.exports = __toCommonJS(expandStyles_exports);
var import_constants = __webpack_require__(5213);
var import_config = __webpack_require__(5769);
var import_expandStyle = __webpack_require__(9152);
var import_normalizeShadow = __webpack_require__(1030);
var import_normalizeValueWithProperty = __webpack_require__(9631);
var import_pseudoDescriptors = __webpack_require__(9097);
let shorthands = null;
function expandStyles(style, config = (0, import_config.getConfig)()) {
  const res = {};
  for (let key in style) {
    shorthands = shorthands || (config ? config.shorthands : null);
    if (shorthands) {
      key = shorthands[key] || key;
    }
    if (key in import_pseudoDescriptors.pseudoDescriptors) {
      res[key] = expandStyles(style[key]);
      continue;
    }
    const val = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(style[key], key);
    const out = (0, import_expandStyle.expandStyle)(key, val);
    if (out) {
      Object.assign(res, Object.fromEntries(out));
    } else {
      res[key] = val;
    }
  }
  fixStyles(res);
  return res;
}
function fixStyles(style) {
  if (style.shadowRadius || style.shadowColor || style.shadowOpacity || style.shadowOffset) {
    Object.assign(style, (0, import_normalizeShadow.normalizeShadow)(style));
  }
  for (const key in borderDefaults) {
    if (key in style && !style[borderDefaults[key]]) {
      style[borderDefaults[key]] = "solid";
    }
  }
}
const nativeStyle = import_constants.isWeb ? null : "borderStyle";
const borderDefaults = {
  borderWidth: "borderStyle",
  borderBottomWidth: nativeStyle || "borderBottomStyle",
  borderTopWidth: nativeStyle || "borderTopStyle",
  borderLeftWidth: nativeStyle || "borderLeftStyle",
  borderRightWidth: nativeStyle || "borderRightStyle"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=expandStyles.js.map


/***/ }),

/***/ 7941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var extendStaticConfig_exports = {};
__export(extendStaticConfig_exports, {
  extendStaticConfig: () => extendStaticConfig,
  mergeVariants: () => mergeVariants,
  parseStaticConfig: () => parseStaticConfig
});
module.exports = __toCommonJS(extendStaticConfig_exports);
var import_helpers = __webpack_require__(9047);
var import_createPropMapper = __webpack_require__(2086);
var import_mergeProps = __webpack_require__(5051);
function extendStaticConfig(config, parent) {
  if (!(parent && "staticConfig" in parent)) {
    return parseStaticConfig(config);
  }
  const parentStaticConfig = parent.staticConfig;
  const variants = mergeVariants(parentStaticConfig.variants, config.variants);
  const parentNames = [...parentStaticConfig.parentNames || []];
  if (parentStaticConfig.componentName) {
    parentNames.push(parentStaticConfig.componentName);
  }
  const deoptProps = config.deoptProps || /* @__PURE__ */ new Set();
  const defaultProps = (0, import_mergeProps.mergeProps)(parentStaticConfig.defaultProps, {
    ...config.defaultProps,
    ...config.defaultVariants
  })[0];
  return parseStaticConfig({
    ...parentStaticConfig,
    ...config,
    parentStaticConfig,
    deoptProps,
    variants,
    parentNames,
    validStyles: config.validStyles ? {
      ...parentStaticConfig.validStyles,
      ...config.validStyles
    } : parentStaticConfig.validStyles || import_helpers.stylePropsView,
    defaultProps
  });
}
const mergeVariants = (parentVariants, ourVariants) => {
  const variants = {
    ...parentVariants
  };
  if (ourVariants) {
    for (const key in ourVariants) {
      if (key in variants) {
        variants[key] = {
          ...variants[key],
          ...ourVariants[key]
        };
      } else {
        variants[key] = ourVariants[key];
      }
    }
  }
  return variants;
};
const parseStaticConfig = (config) => {
  const parsed = {
    defaultProps: {},
    ...config,
    parsed: true
  };
  return {
    ...parsed,
    propMapper: (0, import_createPropMapper.createPropMapper)(parsed)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=extendStaticConfig.js.map


/***/ }),

/***/ 5016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getAnimationDriver_exports = {};
__export(getAnimationDriver_exports, {
  getAnimationDriver: () => getAnimationDriver
});
module.exports = __toCommonJS(getAnimationDriver_exports);
var import_config = __webpack_require__(5769);
function getAnimationDriver() {
  return (0, import_config.getConfig)().animations;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getAnimationDriver.js.map


/***/ }),

/***/ 8885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getExpandedShorthands_exports = {};
__export(getExpandedShorthands_exports, {
  getExpandedShorthands: () => getExpandedShorthands
});
module.exports = __toCommonJS(getExpandedShorthands_exports);
var import_config = __webpack_require__(5769);
function getExpandedShorthands(props) {
  const shorthands = (0, import_config.getConfig)().shorthands;
  if (!shorthands)
    return props;
  const res = {};
  for (const key in props) {
    res[shorthands[key] || key] = props[key];
  }
  return res;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getExpandedShorthands.js.map


/***/ }),

/***/ 8359:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getSplitStyles_exports = {};
__export(getSplitStyles_exports, {
  PROP_SPLIT: () => PROP_SPLIT,
  getSplitStyles: () => getSplitStyles,
  getSubStyle: () => getSubStyle,
  useSplitStyles: () => useSplitStyles
});
module.exports = __toCommonJS(getSplitStyles_exports);
var import_constants = __webpack_require__(5213);
var import_helpers = __webpack_require__(9047);
var import_react = __webpack_require__(6689);
var import_config = __webpack_require__(5769);
var import_accessibilityDirectMap = __webpack_require__(2149);
var import_isDevTools = __webpack_require__(6394);
var import_useMedia = __webpack_require__(9683);
var import_createMediaStyle = __webpack_require__(449);
var import_createPropMapper = __webpack_require__(2086);
var import_expandStyles = __webpack_require__(9494);
var import_getStylesAtomic = __webpack_require__(2805);
var import_insertStyleRule = __webpack_require__(8546);
var import_normalizeValueWithProperty = __webpack_require__(9631);
var import_pseudoDescriptors = __webpack_require__(9097);
let conf;
const PROP_SPLIT = "-";
const isMediaKey = (key) => Boolean(key[0] === "$" && import_useMedia.mediaKeysWithAndWithout$.has(key));
const getSplitStyles = (props, staticConfig, theme, state, parentSplitStyles, languageContext, elementType, debug) => {
  var _a, _b, _c;
  conf = conf || (0, import_config.getConfig)();
  const { shorthands } = conf;
  const { variants, propMapper, isReactNative, inlineProps, inlineWhenUnflattened } = staticConfig;
  const validStyleProps = staticConfig.isText ? import_helpers.stylePropsText : import_helpers.validStyles;
  const viewProps = {};
  let pseudos = null;
  let psuedosUsed = null;
  const mediaState = state.mediaState || import_useMedia.mediaState;
  const usedKeys = {};
  const propKeys = Object.keys(props);
  let space = props.space;
  let hasMedia = false;
  const shouldDoClasses = staticConfig.acceptsClassName && (import_constants.isWeb || IS_STATIC) && !state.noClassNames;
  let style = {};
  const flatTransforms = {};
  const len = propKeys.length;
  const rulesToInsert = [];
  const classNames = {};
  let className = "";
  const transforms = {};
  let fontFamily;
  const styleState = {
    classNames,
    conf,
    props,
    state,
    staticConfig,
    style,
    theme,
    usedKeys,
    viewProps,
    languageContext
  };
  if (false) {}
  if (props.className) {
    for (const cn of props.className.split(" ")) {
      if (cn[0] === "_") {
        const [shorthand, mediaOrPseudo] = cn.slice(1).split("-");
        const isMedia = mediaOrPseudo[0] === "_";
        const isPseudo = mediaOrPseudo[0] === "0";
        const isMediaOrPseudo = isMedia || isPseudo;
        let fullKey = shorthands[shorthand];
        if (isMedia) {
          let mediaShortKey = mediaOrPseudo.slice(1);
          mediaShortKey = mediaShortKey.slice(0, mediaShortKey.indexOf("_"));
          fullKey += `${PROP_SPLIT}${mediaShortKey}`;
        } else if (isPseudo) {
          const pseudoShortKey = mediaOrPseudo.slice(1);
          fullKey += `${PROP_SPLIT}${pseudoShortKey}`;
        }
        usedKeys[fullKey] = 1;
        mergeClassName(transforms, classNames, fullKey, cn, isMediaOrPseudo);
      } else if (cn) {
        className += ` ${cn}`;
      }
    }
  }
  function passDownProp(key, val, shouldMergeObject = false) {
    if (shouldMergeObject) {
      viewProps[key] || (viewProps[key] = {});
      viewProps[key] = {
        ...val,
        ...viewProps[key]
      };
    } else {
      usedKeys[key] = 1;
      viewProps[key] = val;
    }
  }
  const specialProps = [];
  function processProp(keyInit, valInit, special = false, fontFamilyOverride = null) {
    var _a2, _b2, _c2, _d;
    if (keyInit === "className")
      return;
    if (keyInit in shorthands) {
      keyInit = shorthands[keyInit];
    }
    if (false) {}
    if (true) {
      if (keyInit === "elevationAndroid")
        return;
    }
    if (!staticConfig.isHOC) {
      if (keyInit in skipProps) {
        if (false) {} else {
          return;
        }
      }
    }
    if (keyInit in usedKeys) {
      return;
    }
    if (typeof valInit === "string" && valInit[0] === "_") {
      if (keyInit in validStyleProps || keyInit.includes("-")) {
        if (shouldDoClasses) {
          classNames[keyInit] = valInit;
        } else {
          style[keyInit] = (0, import_normalizeValueWithProperty.reverseMapClassNameToValue)(keyInit, valInit);
        }
        usedKeys[keyInit] = 1;
        return;
      }
    }
    if (keyInit === "dataSet") {
      for (const key in valInit) {
        viewProps[`data-${hyphenate(key)}`] = valInit[key];
      }
      return;
    }
    const isMainStyle = keyInit === "style";
    if (isMainStyle || keyInit.startsWith("_style")) {
      if (!valInit)
        return;
      const styles = Array.isArray(valInit) ? valInit : [valInit];
      const styleLen = styles.length;
      for (let j = styleLen; j >= 0; j--) {
        const cur = styles[j];
        if (!cur)
          continue;
        for (const key in cur) {
          if (!isMainStyle && usedKeys[key]) {
            continue;
          }
          usedKeys[key] = 1;
          style[key] = cur[key];
        }
      }
      return;
    }
    if (true) {
      if (keyInit === "disabled" && valInit === true) {
        usedKeys[keyInit] = 1;
        viewProps["aria-disabled"] = true;
        if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
          viewProps.disabled = true;
        }
        if (!(variants == null ? void 0 : variants.disabled)) {
          return;
        }
      }
      if (keyInit === "testID") {
        usedKeys[keyInit] = 1;
        viewProps[isReactNative ? "testId" : "data-testid"] = valInit;
        return;
      }
      if (keyInit === "id" || keyInit === "nativeID") {
        usedKeys[keyInit] = 1;
        if (isReactNative) {
          viewProps.nativeID = valInit;
        } else {
          viewProps.id = valInit;
        }
        return;
      }
      let didUseKeyInit = false;
      if (isReactNative) {
        if (import_accessibilityDirectMap.accessibilityDirectMap[keyInit] || keyInit.startsWith("accessibility")) {
          viewProps[keyInit] = valInit;
          usedKeys[keyInit] = 1;
          return;
        }
      } else {
        didUseKeyInit = true;
        if (import_accessibilityDirectMap.accessibilityDirectMap[keyInit]) {
          viewProps[import_accessibilityDirectMap.accessibilityDirectMap[keyInit]] = valInit;
        } else {
          switch (keyInit) {
            case "accessibilityRole": {
              if (valInit === "none") {
                viewProps.role = "presentation";
              } else {
                viewProps.role = accessibilityRoleToWebRole[valInit] || valInit;
              }
              return;
            }
            case "accessibilityLabelledBy":
            case "accessibilityFlowTo":
            case "accessibilityControls":
            case "accessibilityDescribedBy": {
              viewProps[`aria-${keyInit.replace("accessibility", "").toLowerCase()}`] = processIDRefList(valInit);
              return;
            }
            case "accessibilityKeyShortcuts": {
              if (Array.isArray(valInit)) {
                viewProps["aria-keyshortcuts"] = valInit.join(" ");
              }
              return;
            }
            case "accessibilityLiveRegion": {
              viewProps["aria-live"] = valInit === "none" ? "off" : valInit;
              return;
            }
            case "accessibilityReadOnly": {
              viewProps["aria-readonly"] = valInit;
              if (elementType === "input" || elementType === "select" || elementType === "textarea") {
                viewProps.readOnly = true;
              }
              return;
            }
            case "accessibilityRequired": {
              viewProps["aria-required"] = valInit;
              if (elementType === "input" || elementType === "select" || elementType === "textarea") {
                viewProps.required = valInit;
              }
              return;
            }
            default: {
              didUseKeyInit = false;
            }
          }
        }
      }
      if (didUseKeyInit) {
        usedKeys[keyInit] = 1;
        return;
      }
      if (valInit && valInit[0] === "_") {
        const isValidClassName = keyInit in import_helpers.validStyles;
        const isMediaOrPseudo2 = !isValidClassName && keyInit.includes(PROP_SPLIT) && import_helpers.validStyles[keyInit.split(PROP_SPLIT)[0]];
        if (isValidClassName || isMediaOrPseudo2) {
          usedKeys[keyInit] = 1;
          if (false) {}
          mergeClassName(transforms, classNames, keyInit, valInit, isMediaOrPseudo2);
          return;
        }
      }
    }
    let isMedia = isMediaKey(keyInit);
    let isPseudo = keyInit in import_helpers.validPseudoKeys;
    let isMediaOrPseudo = isMedia || isPseudo;
    const isVariant = variants && keyInit in variants;
    const shouldPassProp = !(isMediaOrPseudo || isVariant || keyInit in validStyleProps || keyInit in shorthands);
    const isHOCShouldPassThrough = staticConfig.isHOC && (isMediaOrPseudo || ((_b2 = (_a2 = staticConfig.parentStaticConfig) == null ? void 0 : _a2.variants) == null ? void 0 : _b2[keyInit]));
    const shouldPassThrough = shouldPassProp || isHOCShouldPassThrough;
    if (shouldPassThrough) {
      if (false) {}
      if (isPseudo) {
        const pseudoStyleObject = getSubStyle(
          styleState,
          keyInit,
          valInit,
          true,
          state.noClassNames
        );
        const descriptor = import_pseudoDescriptors.pseudoDescriptors[keyInit];
        for (const key in pseudoStyleObject) {
          const fullKey = `${key}${PROP_SPLIT}${descriptor.name}`;
          usedKeys[fullKey] = 1;
        }
      }
      passDownProp(keyInit, valInit, isMediaOrPseudo);
      if (!isVariant) {
        return;
      }
    }
    const expanded = isMediaOrPseudo ? [[keyInit, valInit]] : propMapper(
      keyInit,
      valInit,
      theme,
      special ? { ...props, fontFamily: fontFamilyOverride } : props,
      state,
      languageContext,
      void 0,
      debug
    );
    if (!fontFamily) {
      fontFamily = (0, import_createPropMapper.getPropMappedFontFamily)(expanded);
    }
    if (false) {}
    if (!expanded)
      return;
    for (const [key, val] of expanded) {
      if (val === void 0)
        continue;
      if (key in import_helpers.stylePropsFont && !special && key !== "fontFamily") {
        specialProps.push([key, val]);
        continue;
      }
      isMedia = isMediaKey(key);
      isPseudo = key in import_helpers.validPseudoKeys;
      isMediaOrPseudo = isMedia || isPseudo;
      if (!isMediaOrPseudo && key in usedKeys) {
        if (false) {}
        continue;
      }
      if ((inlineProps == null ? void 0 : inlineProps.has(key)) || (inlineWhenUnflattened == null ? void 0 : inlineWhenUnflattened.has(key))) {
        usedKeys[key] = 1;
        viewProps[key] = props[key] ?? val;
      }
      const isHOCShouldPassThrough2 = staticConfig.isHOC && (isMediaOrPseudo || ((_d = (_c2 = staticConfig.parentStaticConfig) == null ? void 0 : _c2.variants) == null ? void 0 : _d[keyInit]));
      if (isHOCShouldPassThrough2) {
        passDownProp(key, val, true);
        if (!isVariant) {
          continue;
        }
      }
      if (isPseudo) {
        if (!val)
          continue;
        const pseudoStyleObject = getSubStyle(
          styleState,
          key,
          val,
          true,
          state.noClassNames
        );
        const descriptor = import_pseudoDescriptors.pseudoDescriptors[key];
        const isEnter = descriptor.name === "enter";
        const isExit = descriptor.name === "exit";
        if (!descriptor || isExit && !state.isExiting) {
          continue;
        }
        if (!shouldDoClasses || IS_STATIC) {
          pseudos || (pseudos = {});
          pseudos[key] || (pseudos[key] = {});
          Object.assign(pseudos[key], pseudoStyleObject);
        }
        if (shouldDoClasses && !isEnter && !isExit) {
          const pseudoStyles = (0, import_getStylesAtomic.generateAtomicStyles)(pseudoStyleObject, descriptor);
          for (const psuedoStyle of pseudoStyles) {
            const fullKey = `${psuedoStyle.property}${PROP_SPLIT}${descriptor.name}`;
            if (!(fullKey in usedKeys)) {
              usedKeys[fullKey] = 1;
              addStyleToInsertRules(rulesToInsert, psuedoStyle);
              mergeClassName(
                transforms,
                classNames,
                fullKey,
                psuedoStyle.identifier,
                isMediaOrPseudo
              );
            }
          }
        } else {
          if (key in usedKeys) {
            continue;
          }
          let isDisabled = !state[descriptor.stateKey || descriptor.name];
          if (import_constants.isWeb && !import_constants.isClient && isEnter) {
            isDisabled = false;
          }
          if (!isDisabled) {
            if (valInit === staticConfig.defaultProps[keyInit]) {
            } else {
              usedKeys[key] || (usedKeys[key] = 1);
              if (false) {}
            }
          }
          psuedosUsed || (psuedosUsed = {});
          const importance = descriptor.priority;
          for (const pkey in pseudoStyleObject) {
            const val2 = pseudoStyleObject[pkey];
            if (isDisabled) {
              if (!(pkey in usedKeys) && pkey in animatableDefaults) {
                const defaultVal = animatableDefaults[pkey];
                mergeStyle(styleState, flatTransforms, pkey, defaultVal, true);
              }
              continue;
            }
            const curImportance = psuedosUsed[importance] || 0;
            const shouldMerge = importance >= curImportance;
            if (shouldMerge) {
              psuedosUsed[pkey] = importance;
              pseudos || (pseudos = {});
              pseudos[key] || (pseudos[key] = {});
              pseudos[key][pkey] = val2;
              mergeStyle(styleState, flatTransforms, pkey, val2);
            }
            if (false) {}
          }
        }
        continue;
      }
      if (isMedia) {
        if (!val)
          continue;
        hasMedia || (hasMedia = true);
        const mediaStyle = getSubStyle(
          styleState,
          key,
          val,
          // TODO try true like pseudo
          false
        );
        const mediaKeyShort = key.slice(1);
        if (false) {}
        if ("space" in mediaStyle) {
          if (!Array.isArray(hasMedia)) {
            hasMedia = [];
          }
          hasMedia.push(mediaKeyShort);
        }
        if (shouldDoClasses) {
          if ("space" in mediaStyle) {
            delete mediaStyle["space"];
            if (mediaState[mediaKeyShort]) {
              const val2 = valInit.space;
              const importance = (0, import_useMedia.getMediaImportanceIfMoreImportant)(
                mediaKeyShort,
                "space",
                usedKeys
              );
              if (importance) {
                space = val2;
                usedKeys["space"] = importance;
                if (false) {}
              }
            }
          }
          const mediaStyles = (0, import_getStylesAtomic.getStylesAtomic)(mediaStyle);
          for (const style2 of mediaStyles) {
            const out = (0, import_createMediaStyle.createMediaStyle)(style2, mediaKeyShort, import_useMedia.mediaQueryConfig);
            const fullKey = `${style2.property}${PROP_SPLIT}${mediaKeyShort}`;
            if (!usedKeys[fullKey]) {
              usedKeys[fullKey] = 1;
              addStyleToInsertRules(rulesToInsert, out);
              mergeClassName(transforms, classNames, fullKey, out.identifier, true);
            }
          }
        } else if (mediaState[mediaKeyShort]) {
          for (const subKey in mediaStyle) {
            const importance = (0, import_useMedia.getMediaImportanceIfMoreImportant)(
              mediaKeyShort,
              subKey,
              usedKeys
            );
            if (importance === null)
              continue;
            if (subKey === "space") {
              space = valInit.space;
              continue;
            }
            (0, import_useMedia.mergeMediaByImportance)(
              style,
              mediaKeyShort,
              subKey,
              mediaStyle[subKey],
              usedKeys
            );
            if (key === "fontFamily") {
              fontFamily = mediaStyle.fontFamily;
            }
          }
        }
        continue;
      }
      if (false) {}
      if (key === "fontFamily" && !fontFamily && valInit && val) {
        fontFamily = valInit[0] === "$" ? valInit : val;
      }
      if (key in validStyleProps) {
        mergeStyle(styleState, flatTransforms, key, val);
        continue;
      } else if (false) {}
      if (!isVariant && !(key in skipProps)) {
        viewProps[key] = val;
        usedKeys[key] = 1;
      }
    }
  }
  for (let i = len - 1; i >= 0; i--) {
    const keyInit = propKeys[i];
    const valInit = props[keyInit];
    processProp(keyInit, valInit);
  }
  for (let i = 0; i < specialProps.length; i++) {
    const [key, value] = specialProps[i];
    processProp(key, value, true, fontFamily);
  }
  (0, import_expandStyles.fixStyles)(style);
  if (import_constants.isWeb) {
    (0, import_getStylesAtomic.styleToCSS)(style);
  }
  if (false) {}
  if (flatTransforms) {
    mergeTransforms(style, flatTransforms, true);
  }
  if (parentSplitStyles) {
    if (true) {
      if (shouldDoClasses) {
        for (const key in parentSplitStyles.classNames) {
          const val = parentSplitStyles.classNames[key];
          if (key in style || key in classNames)
            continue;
          classNames[key] = val;
        }
      }
    }
    if (!shouldDoClasses) {
      for (const key in parentSplitStyles.style) {
        if (key in classNames || key in style)
          continue;
        style[key] = parentSplitStyles.style[key];
      }
    }
  }
  if (true) {
    if (shouldDoClasses) {
      const retainedStyles = {};
      if (style["$$css"]) {
      } else {
        const atomic = (0, import_getStylesAtomic.getStylesAtomic)(style);
        for (const atomicStyle of atomic) {
          const key = atomicStyle.property;
          if (props.animateOnly && props.animateOnly.includes(key)) {
            retainedStyles[key] = style[key];
          } else {
            addStyleToInsertRules(rulesToInsert, atomicStyle);
            mergeClassName(transforms, classNames, key, atomicStyle.identifier);
          }
        }
        if (!IS_STATIC) {
          style = retainedStyles;
        }
      }
    }
    if (transforms) {
      for (const namespace in transforms) {
        if (!transforms[namespace]) {
          if (false) {}
          continue;
        }
        const [hash, val] = transforms[namespace];
        const identifier = `_transform${hash}`;
        if (import_constants.isClient && !import_insertStyleRule.insertedTransforms[identifier]) {
          const rule = `.${identifier} { transform: ${val}; }`;
          addStyleToInsertRules(rulesToInsert, {
            identifier,
            rules: [rule],
            property: namespace
          });
        }
        classNames[namespace] = identifier;
      }
    }
  }
  const nextViewProps = {};
  const ks = Object.keys(viewProps);
  const l = ks.length;
  for (let i = l - 1; i >= 0; i--) {
    nextViewProps[ks[i]] = viewProps[ks[i]];
  }
  const result = {
    space,
    hasMedia,
    fontFamily,
    viewProps: nextViewProps,
    // @ts-expect-error
    style,
    pseudos,
    classNames,
    rulesToInsert
  };
  if (className) {
    classNames.className = className;
  }
  if (false) {}
  return result;
};
function mergeClassName(transforms, classNames, key, val, isMediaOrPseudo = false) {
  if (true) {
    if (!val)
      return;
    if (val[0] === "_" && val.startsWith("_transform-")) {
      const ns = isMediaOrPseudo ? key : "transform";
      let transform = import_insertStyleRule.insertedTransforms[val];
      if (import_constants.isClient && !transform) {
        (0, import_insertStyleRule.scanAllSheets)();
        transform = import_insertStyleRule.insertedTransforms[val];
        if (!transform && import_constants.isWeb && val[0] !== "_") {
          transform = val;
        }
      }
      transforms[ns] || (transforms[ns] = ["", ""]);
      transforms[ns][0] += val.replace("_transform", "");
      if (transform) {
        transforms[ns][1] += transform;
      }
    } else {
      classNames[key] = val;
    }
  }
}
function getSubStyleProps(defaultProps, baseProps, specificProps) {
  return {
    ...defaultProps,
    ...baseProps,
    ...specificProps
  };
}
function mergeStyle({ usedKeys, classNames, viewProps, style }, flatTransforms, key, val, dontSetUsed = false) {
  if (!dontSetUsed) {
    usedKeys[key] || (usedKeys[key] = 1);
  }
  if (val && val[0] === "_") {
    classNames[key] = val;
  } else if (key in import_helpers.stylePropsTransform) {
    flatTransforms || (flatTransforms = {});
    flatTransforms[key] = val;
  } else {
    const out = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(val, key);
    if (key in import_helpers.validStylesOnBaseProps) {
      viewProps[key] = out;
    } else {
      style[key] = out;
    }
  }
}
const getSubStyle = (styleState, subKey, styleIn, avoidDefaultProps, avoidMergeTransform) => {
  const { staticConfig, theme, props, state, conf: conf2, languageContext } = styleState;
  const styleOut = {};
  for (let key in styleIn) {
    const val = styleIn[key];
    key = conf2.shorthands[key] || key;
    const expanded = staticConfig.propMapper(
      key,
      val,
      theme,
      getSubStyleProps(staticConfig.defaultProps, props, props[subKey]),
      state,
      languageContext,
      avoidDefaultProps
    );
    if (!staticConfig.isHOC) {
      if (key in skipProps) {
        continue;
      }
    }
    if (!expanded)
      continue;
    for (const [skey, sval] of expanded) {
      if (!avoidMergeTransform && skey in import_helpers.stylePropsTransform) {
        mergeTransform(styleOut, skey, sval);
      } else {
        styleOut[skey] = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(sval, key);
      }
    }
  }
  (0, import_expandStyles.fixStyles)(styleOut);
  return styleOut;
};
const useInsertEffectCompat = import_constants.isWeb ? import_react.useInsertionEffect || import_constants.useIsomorphicLayoutEffect : () => {
};
const useSplitStyles = (...args) => {
  const res = getSplitStyles(...args);
  if (!import_constants.isRSC) {
    useInsertEffectCompat(() => {
      (0, import_insertStyleRule.insertStyleRules)(res.rulesToInsert);
    }, [res.rulesToInsert]);
  }
  return res;
};
function addStyleToInsertRules(rulesToInsert, styleObject) {
  if (true) {
    if (!(0, import_insertStyleRule.shouldInsertStyleRules)(styleObject.identifier)) {
      return;
    }
    (0, import_insertStyleRule.updateRules)(styleObject.identifier, styleObject.rules);
    rulesToInsert.push(styleObject);
  }
}
function processIDRefList(idRefList) {
  return Array.isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
const animatableDefaults = {
  opacity: 1,
  scale: 1,
  rotate: "0deg",
  rotateY: "0deg",
  rotateX: "0deg"
};
const lowercaseHyphenate = (match) => `-${match.toLowerCase()}`;
const hyphenate = (str) => str.replace(/[A-Z]/g, lowercaseHyphenate);
const mergeTransform = (obj, key, val, backwards = false) => {
  obj.transform || (obj.transform = []);
  obj.transform[backwards ? "unshift" : "push"]({
    [mapTransformKeys[key] || key]: val
  });
};
const mergeTransforms = (obj, flatTransforms, backwards = false) => {
  Object.entries(flatTransforms).forEach(([key, val]) => {
    mergeTransform(obj, key, val, backwards);
  });
};
const mapTransformKeys = {
  x: "translateX",
  y: "translateY"
};
const skipProps = {
  animation: true,
  space: true,
  animateOnly: true,
  debug: true,
  componentName: true,
  tag: true
};
if (false) {}
const IS_STATIC = "" === "is_static";
if (false) {}
const accessibilityRoleToWebRole = {
  adjustable: "slider",
  header: "heading",
  image: "img",
  link: "link",
  none: "presentation",
  summary: "region"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getSplitStyles.js.map


/***/ }),

/***/ 2805:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getStylesAtomic_exports = {};
__export(getStylesAtomic_exports, {
  generateAtomicStyles: () => generateAtomicStyles,
  getStylesAtomic: () => getStylesAtomic,
  styleToCSS: () => styleToCSS
});
module.exports = __toCommonJS(getStylesAtomic_exports);
var import_helpers = __webpack_require__(9047);
var import_config = __webpack_require__(5769);
var import_defaultOffset = __webpack_require__(2235);
var import_normalizeValueWithProperty = __webpack_require__(9631);
var import_pseudoDescriptors = __webpack_require__(9097);
const pseudosOrdered = [
  import_pseudoDescriptors.pseudoDescriptors.hoverStyle,
  import_pseudoDescriptors.pseudoDescriptors.pressStyle,
  import_pseudoDescriptors.pseudoDescriptors.focusStyle
];
function getStylesAtomic(stylesIn) {
  if (!(stylesIn.hoverStyle || stylesIn.pressStyle || stylesIn.focusStyle)) {
    return generateAtomicStyles(stylesIn);
  }
  const { hoverStyle, pressStyle, focusStyle, ...base } = stylesIn;
  let res = [];
  for (const [index, style] of [hoverStyle, pressStyle, focusStyle, base].entries()) {
    if (!style)
      continue;
    const pseudo = pseudosOrdered[index];
    res = [...res, ...generateAtomicStyles(style, pseudo)];
  }
  return res;
}
let conf;
const generateAtomicStyles = (styleIn, pseudo) => {
  if (!styleIn)
    return [];
  conf = conf || (0, import_config.getConfig)();
  const style = styleIn;
  if ("transform" in style && Array.isArray(style.transform)) {
    style.transform = style.transform.map(
      // { scale: 2 } => 'scale(2)'
      // { translateX: 20 } => 'translateX(20px)'
      // { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
      (transform) => {
        const type = Object.keys(transform)[0];
        const value = transform[type];
        if (type === "matrix" || type === "matrix3d") {
          return `${type}(${value.join(",")})`;
        }
        return `${type}(${(0, import_normalizeValueWithProperty.normalizeValueWithProperty)(value, type)})`;
      }
    ).join(" ");
  }
  styleToCSS(style);
  const out = [];
  for (const key in style) {
    const value = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(style[key], key);
    if (value == null || value == void 0)
      continue;
    const hash = (0, import_helpers.simpleHash)(`${value}`);
    const pseudoPrefix = pseudo ? `0${pseudo.name}-` : "";
    const shortProp = conf.inverseShorthands[key] || key;
    const identifier = `_${shortProp}-${pseudoPrefix}${hash}`;
    const rules = createAtomicRules(identifier, key, value, pseudo);
    const styleObject = {
      property: key,
      pseudo: pseudo == null ? void 0 : pseudo.name,
      identifier,
      rules
    };
    if (false) {}
    out.push(styleObject);
  }
  return out;
};
const presetHashes = {
  none: true
};
function styleToCSS(style) {
  const { shadowOffset, shadowRadius, shadowColor } = style;
  if (style.shadowRadius) {
    const offset = shadowOffset || import_defaultOffset.defaultOffset;
    const shadow = `${(0, import_normalizeValueWithProperty.normalizeValueWithProperty)(
      offset.width
    )} ${(0, import_normalizeValueWithProperty.normalizeValueWithProperty)(offset.height)} ${(0, import_normalizeValueWithProperty.normalizeValueWithProperty)(
      shadowRadius
    )} ${shadowColor}`;
    style.boxShadow = style.boxShadow ? `${style.boxShadow}, ${shadow}` : shadow;
    style.shadowOffset = void 0;
    style.shadowRadius = void 0;
    style.shadowColor = void 0;
  }
  const { textShadowColor, textShadowOffset, textShadowRadius } = style;
  if (textShadowColor || textShadowOffset || textShadowRadius) {
    const { height, width } = textShadowOffset || import_defaultOffset.defaultOffset;
    const radius = textShadowRadius || 0;
    const color = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(textShadowColor, "textShadowColor");
    if (color && (height !== 0 || width !== 0 || radius !== 0)) {
      const blurRadius = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(radius);
      const offsetX = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(width);
      const offsetY = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(height);
      style.textShadow = `${offsetX} ${offsetY} ${blurRadius} ${color}`;
    }
    style.textShadowColor = void 0;
    style.textShadowOffset = void 0;
    style.textShadowRadius = void 0;
  }
}
function createDeclarationBlock(style, important = false) {
  let next = "";
  for (const [key, value] of style) {
    const prop = hyphenateStyleName(key);
    next += `${prop}:${value}${important ? " !important" : ""};`;
  }
  return `{${next}}`;
}
const hcache = {};
const toHyphenLower = (match) => `-${match.toLowerCase()}`;
const hyphenateStyleName = (key) => {
  if (key in hcache)
    return hcache[key];
  const val = key.replace(/[A-Z]/g, toHyphenLower);
  hcache[key] = val;
  return val;
};
const pseudoSelectorPrefixes = (() => {
  const res = {};
  for (const key in import_pseudoDescriptors.pseudoDescriptors) {
    const pseudo = import_pseudoDescriptors.pseudoDescriptors[key];
    res[pseudo.name] = `${[...Array(pseudo.priority)].map(() => ":root").join("")} `;
  }
  return res;
})();
function createAtomicRules(identifier, property, value, pseudo) {
  const selector = pseudo ? `${pseudoSelectorPrefixes[pseudo.name]} .${identifier}:${pseudo.name}` : `.${identifier}`;
  const important = !!pseudo;
  let rules = [];
  switch (property) {
    case "placeholderTextColor": {
      const block = createDeclarationBlock(
        [
          ["color", value],
          ["opacity", 1]
        ],
        important
      );
      rules.push(`${selector}::placeholder${block}`);
      break;
    }
    case "backgroundClip":
    case "userSelect": {
      const propertyCapitalized = `${property[0].toUpperCase()}${property.slice(1)}`;
      const webkitProperty = `Webkit${propertyCapitalized}`;
      const block = createDeclarationBlock(
        [
          [property, value],
          [webkitProperty, value]
        ],
        important
      );
      rules.push(`${selector}${block}`);
      break;
    }
    case "pointerEvents": {
      let finalValue = value;
      if (value === "auto" || value === "box-only") {
        finalValue = "auto";
        if (value === "box-only") {
          rules.push(`${selector}>*${boxOnly}`);
        }
      } else if (value === "none" || value === "box-none") {
        finalValue = "none";
        if (value === "box-none") {
          rules.push(`${selector}>*${boxNone}`);
        }
      }
      const block = createDeclarationBlock([["pointerEvents", finalValue]], true);
      rules.push(`${selector}${block}`);
      break;
    }
    default: {
      const block = createDeclarationBlock([[property, value]], important);
      rules.push(`${selector}${block}`);
      break;
    }
  }
  if (pseudo && pseudo.name === "hover") {
    rules = rules.map((r) => `@media not all and (hover: none) { ${r} }`);
  }
  return rules;
}
const boxNone = createDeclarationBlock([["pointerEvents", "auto"]], true);
const boxOnly = createDeclarationBlock([["pointerEvents", "none"]], true);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getStylesAtomic.js.map


/***/ }),

/***/ 6807:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getThemeCSSRules_exports = {};
__export(getThemeCSSRules_exports, {
  getThemeCSSRules: () => getThemeCSSRules
});
module.exports = __toCommonJS(getThemeCSSRules_exports);
var import_helpers = __webpack_require__(9047);
var import_constants = __webpack_require__(7239);
var import_createVariable = __webpack_require__(2754);
var import_registerCSSVariable = __webpack_require__(3956);
function getThemeCSSRules({
  config,
  themeName,
  theme,
  names
}) {
  const cssRuleSets = [];
  const hasDarkLight = "light" in config.themes && "dark" in config.themes;
  const CNP = `.${import_constants.THEME_CLASSNAME_PREFIX}`;
  let vars = "";
  for (const themeKey in theme) {
    const variable = theme[themeKey];
    let value = null;
    if (!import_registerCSSVariable.tokensValueToVariable.has(variable.val)) {
      value = variable.val;
    } else {
      value = import_registerCSSVariable.tokensValueToVariable.get(variable.val).variable;
    }
    vars += `--${(0, import_helpers.simpleHash)(themeKey, 40)}:${value};`;
  }
  const isDarkOrLightBase = themeName === "dark" || themeName === "light";
  const baseSelectors = names.map((name) => `${CNP}${name}`);
  const selectorsSet = new Set(baseSelectors);
  if (hasDarkLight) {
    for (const subName of names) {
      const isDark = themeName === "dark" || subName.startsWith("dark_");
      const isLight = themeName === "light" || themeName.startsWith("light_");
      const maxDepth = config.maxDarkLightNesting ?? 3;
      if (!(isDark || isLight)) {
        selectorsSet.add(`:root:root ${CNP}${subName}`);
        continue;
      }
      const childSelector = `${CNP}${subName.replace(isDark ? "dark_" : "light_", "")}`;
      const [altLightDark, altSubTheme] = [
        isDark ? ["dark", "light"] : ["light", "dark"],
        isDark ? ["dark", "sub_theme"] : ["light", "sub_theme"]
      ];
      for (const order of [altLightDark, altSubTheme]) {
        if (isDarkOrLightBase) {
          order.reverse();
        }
        const [stronger, weaker] = order;
        const numSelectors = Math.round(maxDepth * 1.5);
        for (let depth = 0; depth < numSelectors; depth++) {
          const isOdd = depth % 2 === 1;
          if (isOdd && depth < 3) {
            continue;
          }
          const parents = new Array(depth + 1).fill(0).map((_, psi) => {
            return `${CNP}${psi % 2 === 0 ? stronger : weaker}`;
          });
          let parentSelectors = parents.length > 1 ? parents.slice(1) : parents;
          if (isOdd) {
            const [_first, second, ...rest] = parentSelectors;
            parentSelectors = [second, ...rest, second];
          }
          const lastParentSelector = parentSelectors[parentSelectors.length - 1];
          const nextChildSelector = childSelector === lastParentSelector ? "" : childSelector;
          selectorsSet.add(`${parentSelectors.join(" ")} ${nextChildSelector}`.trim());
        }
      }
    }
  }
  const selectors = [...selectorsSet];
  const selectorsString = selectors.map((x) => {
    const rootSep = isBaseTheme(x) && config.themeClassNameOnRoot ? "" : " ";
    return `:root${rootSep}${x}`;
  }).join(", ");
  const css = `${selectorsString} {${vars}}`;
  cssRuleSets.push(css);
  if (config.shouldAddPrefersColorThemes) {
    const bgString = theme.background ? `background:${(0, import_createVariable.variableToString)(theme.background)};` : "";
    const fgString = theme.color ? `color:${(0, import_createVariable.variableToString)(theme.color)}` : "";
    const bodyRules = `body{${bgString}${fgString}}`;
    const isDark = themeName.startsWith("dark");
    const baseName = isDark ? "dark" : "light";
    const lessSpecificSelectors = selectors.map((x) => {
      if (x == darkSelector || x === lightSelector)
        return `:root`;
      if (isDark && x.startsWith(lightSelector) || !isDark && x.startsWith(darkSelector)) {
        return;
      }
      return x.replace(/^\.t_(dark|light) /, "").trim();
    }).filter(Boolean).join(", ");
    const themeRules = `${lessSpecificSelectors} {${vars}}`;
    const prefersMediaSelectors = `@media(prefers-color-scheme:${baseName}){
  ${bodyRules}
  ${themeRules}
}`;
    cssRuleSets.push(prefersMediaSelectors);
  }
  if (config.selectionStyles) {
    const selectionSelectors = baseSelectors.map((s) => `${s} ::selection`).join(", ");
    const rules = config.selectionStyles(theme);
    const styles = Object.entries(rules).map(
      ([k, v]) => `${k === "backgroundColor" ? "background" : k}:${(0, import_createVariable.variableToString)(v)}`
    ).join(";");
    const css2 = `${selectionSelectors} {${styles}}`;
    cssRuleSets.push(css2);
  }
  return cssRuleSets;
}
const darkSelector = ".t_dark";
const lightSelector = ".t_light";
const isBaseTheme = (x) => x === darkSelector || x === lightSelector || x.startsWith(".t_dark ") || x.startsWith(".t_light ");
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getThemeCSSRules.js.map


/***/ }),

/***/ 7231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getVariantExtras_exports = {};
__export(getVariantExtras_exports, {
  getFontsForLanguage: () => getFontsForLanguage,
  getVariantExtras: () => getVariantExtras
});
module.exports = __toCommonJS(getVariantExtras_exports);
var import_config = __webpack_require__(5769);
var import_createProxy = __webpack_require__(8588);
const extrasCache = /* @__PURE__ */ new WeakMap();
function getVariantExtras(props, languageContext, theme, defaultProps, avoidDefaultProps = false) {
  const conf = (0, import_config.getConfig)();
  if (extrasCache.has(props)) {
    return extrasCache.get(props);
  }
  let fonts = conf.fontsParsed;
  if (languageContext) {
    fonts = getFontsForLanguage(conf.fontsParsed, languageContext);
  }
  const next = {
    fonts,
    tokens: conf.tokensParsed,
    theme,
    // TODO do this in splitstlye
    // we avoid passing in default props for media queries because that would confuse things like SizableText.size:
    props: avoidDefaultProps ? props : (0, import_createProxy.createProxy)(props, {
      // handles shorthands
      get(target, key) {
        const shorthand = conf.inverseShorthands[key];
        if (shorthand && Reflect.has(target, shorthand)) {
          return Reflect.get(target, shorthand);
        }
        if (Reflect.has(target, key)) {
          return Reflect.get(target, key);
        }
        if (defaultProps) {
          if (shorthand && Reflect.has(defaultProps, shorthand)) {
            return Reflect.get(defaultProps, shorthand);
          }
          if (Reflect.has(defaultProps, key)) {
            return Reflect.get(defaultProps, key);
          }
        }
      }
    })
  };
  extrasCache.set(props, next);
  return next;
}
const fontLanguageCache = /* @__PURE__ */ new WeakMap();
function getFontsForLanguage(fonts, language) {
  if (fontLanguageCache.has(language)) {
    return fontLanguageCache.get(language);
  }
  const next = {
    ...fonts,
    ...Object.fromEntries(
      Object.entries(language).map(([name, lang]) => {
        if (lang === "default") {
          return [];
        }
        const langKey = `$${name}_${lang}`;
        return [`$${name}`, fonts[langKey]];
      })
    )
  };
  fontLanguageCache.set(language, next);
  return next;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getVariantExtras.js.map


/***/ }),

/***/ 8546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var insertStyleRule_exports = {};
__export(insertStyleRule_exports, {
  getAllRules: () => getAllRules,
  getAllSelectors: () => getAllSelectors,
  getAllTransforms: () => getAllTransforms,
  insertStyleRules: () => insertStyleRules,
  insertedTransforms: () => insertedTransforms,
  listenForSheetChanges: () => listenForSheetChanges,
  scanAllSheets: () => scanAllSheets,
  shouldInsertStyleRules: () => shouldInsertStyleRules,
  updateRules: () => updateRules
});
module.exports = __toCommonJS(insertStyleRule_exports);
var import_constants = __webpack_require__(5213);
const allSelectors = {};
const allRules = {};
const insertedTransforms = {};
const getAllSelectors = () => allSelectors;
const getAllRules = () => Object.values(allRules);
const getAllTransforms = () => insertedTransforms;
function addTransform(identifier, css, rule) {
  const s = css.indexOf("transform:");
  if (s === -1) {
    if (false) {}
    return;
  }
  const startI = s + "transform:".length;
  const endI = css.indexOf(";");
  const value = css.slice(startI, endI);
  if (!insertedTransforms[identifier]) {
    insertedTransforms[identifier] = value;
    return true;
  }
}
const scannedCache = /* @__PURE__ */ new WeakMap();
const totalSelectorsInserted = /* @__PURE__ */ new Map();
function listenForSheetChanges() {
  if (!import_constants.isClient)
    return;
  const mo = new MutationObserver((entries) => {
    for (const entry of entries) {
      if (entry instanceof HTMLStyleElement && entry.sheet || entry instanceof HTMLLinkElement && entry.href.endsWith(".css")) {
        scanAllSheets();
        break;
      }
    }
  });
  mo.observe(document.head, {
    childList: true
  });
}
let lastScannedSheets = null;
function scanAllSheets() {
  if (false)
    {}
  if (!import_constants.isClient)
    return;
  const sheets = document.styleSheets || [];
  const prev = lastScannedSheets;
  const current = new Set(sheets);
  if (document.styleSheets) {
    for (const sheet2 of current) {
      sheet2 && updateSheetStyles(sheet2);
    }
    lastScannedSheets = current;
  }
  if (prev) {
    for (const sheet2 of prev) {
      if (sheet2 && !current.has(sheet2)) {
        updateSheetStyles(sheet2, true);
      }
    }
  }
}
function track(id, remove = false) {
  const next = (totalSelectorsInserted.get(id) || 0) + (remove ? -1 : 1);
  totalSelectorsInserted.set(id, next);
  return next;
}
function updateSheetStyles(sheet2, remove = false) {
  var _a, _b;
  let rules;
  try {
    rules = sheet2.cssRules;
  } catch {
    return;
  }
  const firstSelector = (_a = getTamaguiSelector(rules[0])) == null ? void 0 : _a[0];
  const lastSelector = (_b = getTamaguiSelector(rules[rules.length - 1])) == null ? void 0 : _b[0];
  const cacheKey = `${rules.length}${firstSelector}${lastSelector}`;
  const lastScanned = scannedCache.get(sheet2);
  if (!remove) {
    if (lastScanned === cacheKey) {
      return;
    }
  }
  const len = rules.length;
  let fails = 0;
  for (let i = 0; i < len; i++) {
    const rule = rules[i];
    if (!(rule instanceof CSSStyleRule))
      continue;
    const response = getTamaguiSelector(rule);
    if (!response) {
      fails++;
      if (fails > 20) {
        return;
      }
      continue;
    }
    const [identifier, cssRule] = response;
    const total = track(identifier, remove);
    if (remove) {
      if (total === 0) {
        delete allSelectors[identifier];
      }
    } else if (!(identifier in allSelectors)) {
      const isTransform = identifier.startsWith("_transform");
      const shouldInsert = isTransform ? addTransform(identifier, cssRule.cssText, cssRule) : true;
      if (shouldInsert) {
        allSelectors[identifier] = cssRule.cssText;
      }
    }
  }
  scannedCache.set(sheet2, cacheKey);
}
function getTamaguiSelector(rule) {
  if (rule instanceof CSSStyleRule) {
    const text = rule.selectorText;
    if (text[0] === "." && text[1] === "_") {
      return [text.slice(1), rule];
    }
    if (text.startsWith(":root") && text.includes("._")) {
      return [getIdentifierFromTamaguiSelector(text), rule];
    }
  } else if (rule instanceof CSSMediaRule) {
    if (rule.cssRules.length > 1)
      return null;
    return getTamaguiSelector(rule.cssRules[0]);
  }
  return null;
}
const getIdentifierFromTamaguiSelector = (selector) => selector.replace(/(:root)+\s+/, "").replace(/:[a-z]+$/, "").slice(1);
const sheet = import_constants.isClient ? document.head.appendChild(document.createElement("style")).sheet : null;
function updateRules(identifier, rules) {
  if (identifier in allRules) {
    return false;
  }
  allRules[identifier] = rules.join(" ");
  if (identifier.startsWith("_transform")) {
    return addTransform(identifier, rules[0]);
  }
  return true;
}
function insertStyleRules(rulesToInsert) {
  if (!rulesToInsert.length || !sheet) {
    return;
  }
  for (const { identifier, rules } of rulesToInsert) {
    if (!shouldInsertStyleRules(identifier)) {
      continue;
    }
    allSelectors[identifier] = rules.join("\n");
    track(identifier);
    updateRules(identifier, rules);
    for (const rule of rules) {
      if (true) {
        sheet.insertRule(rule, sheet.cssRules.length);
      } else {}
    }
  }
}
function shouldInsertStyleRules(identifier) {
  if (false) {}
  const total = totalSelectorsInserted.get(identifier);
  return total === void 0 || total < 2;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=insertStyleRule.js.map


/***/ }),

/***/ 2533:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var isObj_exports = {};
__export(isObj_exports, {
  isObj: () => isObj
});
module.exports = __toCommonJS(isObj_exports);
const isObj = (x) => x && !Array.isArray(x) && typeof x === "object";
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=isObj.js.map


/***/ }),

/***/ 4618:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var isTamaguiComponent_exports = {};
__export(isTamaguiComponent_exports, {
  isTamaguiComponent: () => isTamaguiComponent
});
module.exports = __toCommonJS(isTamaguiComponent_exports);
function isTamaguiComponent(comp, name) {
  const config = comp == null ? void 0 : comp["staticConfig"];
  return (config == null ? void 0 : config.parsed) && (name ? name === config.componentName : true) || false;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=isTamaguiComponent.js.map


/***/ }),

/***/ 3431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var isTamaguiElement_exports = {};
__export(isTamaguiElement_exports, {
  isTamaguiElement: () => isTamaguiElement
});
module.exports = __toCommonJS(isTamaguiElement_exports);
var import_react = __webpack_require__(6689);
var import_isTamaguiComponent = __webpack_require__(4618);
const isTamaguiElement = (child, name) => {
  return (0, import_react.isValidElement)(child) && (0, import_isTamaguiComponent.isTamaguiComponent)(child.type, name);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=isTamaguiElement.js.map


/***/ }),

/***/ 9622:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var matchMedia_exports = {};
__export(matchMedia_exports, {
  matchMedia: () => matchMedia,
  setupMatchMedia: () => setupMatchMedia
});
module.exports = __toCommonJS(matchMedia_exports);
const matchMedia = typeof window !== "undefined" && window.matchMedia || matchMediaFallback;
function matchMediaFallback(_) {
  return {
    addListener() {
    },
    removeListener() {
    },
    matches: false
  };
}
function setupMatchMedia(_) {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=matchMedia.js.map


/***/ }),

/***/ 5051:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var mergeProps_exports = {};
__export(mergeProps_exports, {
  mergeProps: () => mergeProps
});
module.exports = __toCommonJS(mergeProps_exports);
var import_pseudoDescriptors = __webpack_require__(9097);
const mergeProps = (a, b, leaveOutClassNames = false, inverseShorthands) => {
  const out = {};
  const outCns = leaveOutClassNames ? {} : null;
  for (const key in a) {
    mergeProp(out, outCns, a, b, key, leaveOutClassNames, inverseShorthands);
  }
  if (b) {
    for (const key in b) {
      mergeProp(out, outCns, b, void 0, key, leaveOutClassNames, inverseShorthands);
    }
  }
  return [out, outCns];
};
function mergeProp(out, outCns, a, b, key, leaveOutClassNames, inverseShorthands) {
  const val = a[key];
  const shorthand = (inverseShorthands == null ? void 0 : inverseShorthands[key]) || null;
  if (key in import_pseudoDescriptors.pseudoDescriptors) {
    out[key] = {
      ...out[key],
      ...val
    };
    return;
  }
  if (b && (key in b || shorthand && shorthand in b)) {
    return;
  }
  if (shorthand) {
    key = shorthand;
  }
  if (leaveOutClassNames && (val == null ? void 0 : val[0]) === "_") {
    outCns[key] = val;
  } else {
    out[key] = val;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=mergeProps.js.map


/***/ }),

/***/ 5481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var normalizeColor_exports = {};
__export(normalizeColor_exports, {
  names: () => names,
  normalizeColor: () => normalizeColor,
  rgba: () => rgba
});
module.exports = __toCommonJS(normalizeColor_exports);
var import_constants = __webpack_require__(5213);
var NCC = __toESM(__webpack_require__(4306));
const rgba = NCC.rgba;
const names = NCC.names;
const normalizeColor = (color, opacity) => {
  if (!color)
    return;
  if (color[0] === "$")
    return color;
  if (import_constants.isWeb && opacity === 1)
    return color;
  const colorProcessed = NCC.normalizeCSSColor(color);
  if (typeof colorProcessed === "number") {
    const { r, g, b, a } = rgba(colorProcessed);
    const alpha = (opacity ?? a ?? 1).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if (false) {}
  return color;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=normalizeColor.js.map


/***/ }),

/***/ 1030:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var normalizeShadow_exports = {};
__export(normalizeShadow_exports, {
  normalizeShadow: () => normalizeShadow
});
module.exports = __toCommonJS(normalizeShadow_exports);
var import_defaultOffset = __webpack_require__(2235);
var import_normalizeValueWithProperty = __webpack_require__(9631);
function normalizeShadow({
  shadowColor,
  shadowOffset,
  shadowOpacity = 1,
  shadowRadius
}) {
  const { height, width } = shadowOffset || import_defaultOffset.defaultOffset;
  return {
    shadowOffset: {
      width: (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(width || 0),
      height: (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(height || 0)
    },
    shadowRadius: (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(shadowRadius || 0),
    shadowColor,
    shadowOpacity
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=normalizeShadow.js.map


/***/ }),

/***/ 1744:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var normalizeStylePropKeys_exports = {};
__export(normalizeStylePropKeys_exports, {
  normalizeStylePropKeys: () => normalizeStylePropKeys
});
module.exports = __toCommonJS(normalizeStylePropKeys_exports);
const normalizeStylePropKeys = {};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=normalizeStylePropKeys.js.map


/***/ }),

/***/ 9631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var normalizeValueWithProperty_exports = {};
__export(normalizeValueWithProperty_exports, {
  normalizeValueWithProperty: () => normalizeValueWithProperty,
  reverseMapClassNameToValue: () => reverseMapClassNameToValue
});
module.exports = __toCommonJS(normalizeValueWithProperty_exports);
var import_constants = __webpack_require__(5213);
var import_insertStyleRule = __webpack_require__(8546);
var import_normalizeColor = __webpack_require__(5481);
var import_normalizeStylePropKeys = __webpack_require__(1744);
const colorCache = /* @__PURE__ */ new Map();
function normalizeValueWithProperty(value, property) {
  if (property && property in unitlessNumbers) {
    return value;
  }
  let res = value;
  if (property && (property in import_normalizeStylePropKeys.normalizeStylePropKeys || value in import_normalizeColor.names)) {
    if (colorCache.has(value)) {
      return colorCache.get(value);
    }
    res = (0, import_normalizeColor.normalizeColor)(value);
    if (colorCache.size > 1e3) {
      colorCache.clear();
    }
    colorCache.set(value, res);
  } else if (import_constants.isWeb && typeof value === "number" && (property === void 0 || !(property in unitlessNumbers || property in stringNumbers))) {
    res = `${value}px`;
  } else if (import_constants.isWeb && property !== void 0 && property in stringNumbers) {
    res = `${res}`;
  }
  return res;
}
const stringNumbers = {
  zIndex: true
};
const unitlessNumbers = {
  WebkitLineClamp: true,
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zoom: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
const rcache = {};
function reverseMapClassNameToValue(key, className) {
  const selectors = (0, import_insertStyleRule.getAllSelectors)();
  const cssRule = selectors[className];
  if (rcache[cssRule]) {
    return rcache[cssRule];
  }
  if (!cssRule) {
    if (false) {}
    return;
  }
  const cssVal = cssRule.replace(/.*:/, "").replace(/;.*/, "").trim();
  let res;
  if (cssVal.startsWith("var(")) {
    res = cssVal;
  } else if (unitlessNumbers[key]) {
    res = +cssVal;
  } else if (cssVal.endsWith("px")) {
    res = +cssVal.replace("px", "");
  } else {
    res = cssVal;
  }
  rcache[cssRule] = res;
  if (false) {}
  return res;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=normalizeValueWithProperty.js.map


/***/ }),

/***/ 7481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var proxyThemeVariables_exports = {};
__export(proxyThemeVariables_exports, {
  proxyThemeVariables: () => proxyThemeVariables
});
module.exports = __toCommonJS(proxyThemeVariables_exports);
var import_createProxy = __webpack_require__(8588);
function proxyThemeVariables(obj) {
  return (0, import_createProxy.createProxy)(obj || {}, {
    has(target, key) {
      return Reflect.has(target, removeStarting$(key));
    },
    get(target, key) {
      return Reflect.get(target, removeStarting$(key));
    }
  });
}
const removeStarting$ = (str) => typeof str === "string" && str[0] === "$" ? str.slice(1) : str;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=proxyThemeVariables.js.map


/***/ }),

/***/ 9097:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var pseudoDescriptors_exports = {};
__export(pseudoDescriptors_exports, {
  pseudoDescriptors: () => pseudoDescriptors
});
module.exports = __toCommonJS(pseudoDescriptors_exports);
const pseudoDescriptors = {
  hoverStyle: {
    name: "hover",
    priority: 1
  },
  pressStyle: {
    name: "active",
    stateKey: "press",
    priority: 2
  },
  focusStyle: {
    name: "focus",
    priority: 3
  },
  enterStyle: {
    name: "enter",
    stateKey: "unmounted",
    priority: 4
  },
  exitStyle: {
    name: "exit",
    stateKey: "isExiting",
    priority: 5
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=pseudoDescriptors.js.map


/***/ }),

/***/ 3956:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var registerCSSVariable_exports = {};
__export(registerCSSVariable_exports, {
  registerCSSVariable: () => registerCSSVariable,
  tokensValueToVariable: () => tokensValueToVariable,
  variableToCSS: () => variableToCSS
});
module.exports = __toCommonJS(registerCSSVariable_exports);
var import_createVariable = __webpack_require__(2754);
const registerCSSVariable = (v) => {
  tokensValueToVariable.set(v.val, v);
};
const variableToCSS = (v, unitless = false) => {
  return `--${(0, import_createVariable.createCSSVariable)(v.name, false)}:${!unitless && typeof v.val === "number" ? `${v.val}px` : v.val}`;
};
const tokensValueToVariable = /* @__PURE__ */ new Map();
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=registerCSSVariable.js.map


/***/ }),

/***/ 4577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var themeable_exports = {};
__export(themeable_exports, {
  themeable: () => themeable
});
module.exports = __toCommonJS(themeable_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react = __toESM(__webpack_require__(6689));
var import_Theme = __webpack_require__(8349);
function themeable(component, staticConfig) {
  const withThemeComponent = (0, import_react.forwardRef)(function WithTheme(props, ref) {
    const { themeInverse, theme, componentName, themeReset, ...rest } = props;
    const element = import_react.default.createElement(component, { ...rest, ref });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Theme.Theme,
      {
        inverse: themeInverse,
        componentName: componentName || (staticConfig == null ? void 0 : staticConfig.componentName),
        name: theme || null,
        "disable-child-theme": true,
        debug: props.debug,
        reset: themeReset,
        children: element
      }
    );
  });
  const withTheme = withThemeComponent;
  withTheme.displayName = `Themed(${(component == null ? void 0 : component.displayName) || (component == null ? void 0 : component.name) || "Anonymous"})`;
  return withTheme;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=themeable.js.map


/***/ }),

/***/ 3426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var themes_exports = {};
__export(themes_exports, {
  ensureThemeVariable: () => ensureThemeVariable,
  proxyThemeToParents: () => proxyThemeToParents
});
module.exports = __toCommonJS(themes_exports);
var import_createVariable = __webpack_require__(2754);
var import_getThemeUnwrapped = __webpack_require__(5569);
function ensureThemeVariable(theme, key) {
  const val = theme[key];
  const themeKey = key;
  if (!(0, import_createVariable.isVariable)(val)) {
    theme[key] = (0, import_createVariable.createVariable)({
      key: themeKey,
      name: themeKey,
      val
    });
  } else {
    if (val.name !== themeKey) {
      theme[key] = (0, import_createVariable.createVariable)({
        key: val.name,
        name: themeKey,
        val: val.val
      });
    }
  }
}
function proxyThemeToParents(themeName, theme, themes) {
  const cur = [];
  const parents = themeName.split("_").slice(0, -1).map((part) => {
    cur.push(part);
    return cur.join("_");
  });
  const numParents = parents.length;
  return new Proxy(theme, {
    get(target, key) {
      if (key === import_getThemeUnwrapped.GetThemeUnwrapped)
        return theme;
      if (numParents && !Reflect.has(target, key)) {
        for (let i = numParents - 1; i >= 0; i--) {
          const parent = themes[parents[i]];
          if (!parent)
            continue;
          if (Reflect.has(parent, key)) {
            return Reflect.get(parent, key);
          }
        }
      }
      return Reflect.get(target, key);
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=themes.js.map


/***/ }),

/***/ 2397:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useShallowSetState_exports = {};
__export(useShallowSetState_exports, {
  useShallowSetState: () => useShallowSetState
});
module.exports = __toCommonJS(useShallowSetState_exports);
var import_react = __webpack_require__(6689);
function useShallowSetState(setter, debug, debugName) {
  return (0, import_react.useCallback)(
    (next) => {
      setter((prev) => {
        for (const key in next) {
          if (prev[key] !== next[key]) {
            if (false) {}
            return { ...prev, ...next };
          }
        }
        return prev;
      });
    },
    [setter]
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useShallowSetState.js.map


/***/ }),

/***/ 5394:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var withStaticProperties_exports = {};
__export(withStaticProperties_exports, {
  withStaticProperties: () => withStaticProperties
});
module.exports = __toCommonJS(withStaticProperties_exports);
const withStaticProperties = function(component, staticProps) {
  const next = typeof component === "function" ? component : { ...component };
  Object.assign(next, staticProps);
  return next;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=withStaticProperties.js.map


/***/ }),

/***/ 5569:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var getThemeUnwrapped_exports = {};
__export(getThemeUnwrapped_exports, {
  GetThemeUnwrapped: () => GetThemeUnwrapped,
  getThemeUnwrapped: () => getThemeUnwrapped
});
module.exports = __toCommonJS(getThemeUnwrapped_exports);
const getThemeUnwrapped = (theme) => {
  return (theme == null ? void 0 : theme[GetThemeUnwrapped]) || theme;
};
const GetThemeUnwrapped = Symbol();
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getThemeUnwrapped.js.map


/***/ }),

/***/ 9914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useAnimationDriver_exports = {};
__export(useAnimationDriver_exports, {
  useAnimationDriver: () => useAnimationDriver
});
module.exports = __toCommonJS(useAnimationDriver_exports);
var import_react = __webpack_require__(6689);
var import_AnimationDriverContext = __webpack_require__(1016);
var import_getAnimationDriver = __webpack_require__(5016);
var import_constants = __webpack_require__(5213);
const useAnimationDriver = () => {
  if (import_constants.isRSC)
    return (0, import_getAnimationDriver.getAnimationDriver)();
  return (0, import_react.useContext)(import_AnimationDriverContext.AnimationDriverContext) ?? (0, import_getAnimationDriver.getAnimationDriver)();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useAnimationDriver.js.map


/***/ }),

/***/ 7450:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useIsTouchDevice_exports = {};
__export(useIsTouchDevice_exports, {
  useIsTouchDevice: () => useIsTouchDevice
});
module.exports = __toCommonJS(useIsTouchDevice_exports);
var import_constants = __webpack_require__(5213);
var import_use_did_finish_ssr = __webpack_require__(4179);
const useIsTouchDevice = () => {
  return !import_constants.isWeb ? true : (0, import_use_did_finish_ssr.useDidFinishSSR)() ? import_constants.isTouchable : false;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useIsTouchDevice.js.map


/***/ }),

/***/ 9683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useMedia_exports = {};
__export(useMedia_exports, {
  configureMedia: () => configureMedia,
  getInitialMediaState: () => getInitialMediaState,
  getMedia: () => getMedia,
  getMediaImportanceIfMoreImportant: () => getMediaImportanceIfMoreImportant,
  getMediaKeyImportance: () => getMediaKeyImportance,
  mediaKeysWithAndWithout$: () => mediaKeysWithAndWithout$,
  mediaObjectToString: () => mediaObjectToString,
  mediaQueryConfig: () => mediaQueryConfig,
  mediaState: () => mediaState,
  mergeMediaByImportance: () => mergeMediaByImportance,
  setMediaShouldUpdate: () => setMediaShouldUpdate,
  setupMediaListeners: () => setupMediaListeners,
  useMedia: () => useMedia,
  useMediaListeners: () => useMediaListeners,
  useMediaPropsActive: () => useMediaPropsActive
});
module.exports = __toCommonJS(useMedia_exports);
var import_react = __webpack_require__(6689);
var import_config = __webpack_require__(5769);
var import_createProxy = __webpack_require__(8588);
var import_matchMedia = __webpack_require__(9622);
var import_useSafeRef = __webpack_require__(2081);
let mediaState = (
  // development only safeguard
   false ? 0 : {}
);
const mediaQueryConfig = {};
const getMedia = () => mediaState;
const mediaKeysWithAndWithout$ = /* @__PURE__ */ new Set();
let initState;
const getInitialMediaState = () => {
  return ((0, import_config.getConfig)().disableSSR ? mediaState : initState) || {};
};
let mediaKeysOrdered;
const getMediaKeyImportance = (key) => {
  if (false) {}
  return mediaKeysOrdered.indexOf(key) + 2;
};
const dispose = /* @__PURE__ */ new Set();
const configureMedia = (config) => {
  const { media, mediaQueryDefaultActive } = config;
  if (!media)
    return;
  for (const key in media) {
    mediaState[key] = (mediaQueryDefaultActive == null ? void 0 : mediaQueryDefaultActive[key]) || false;
    mediaKeysWithAndWithout$.add(key);
    mediaKeysWithAndWithout$.add(`$${key}`);
  }
  Object.assign(mediaQueryConfig, media);
  initState = { ...mediaState };
  updateCurrentState();
  mediaKeysOrdered = Object.keys(media);
  if (config.disableSSR) {
    setupMediaListeners();
  }
};
function unlisten() {
  dispose.forEach((cb) => cb());
  dispose.clear();
}
let configuredKey = "";
function setupMediaListeners() {
  const nextKey = JSON.stringify(mediaQueryConfig);
  if (nextKey === configuredKey)
    return;
  configuredKey = nextKey;
  unlisten();
  for (const key in mediaQueryConfig) {
    let update2 = function() {
      const next = !!getMatch().matches;
      if (next === mediaState[key])
        return;
      mediaState = { ...mediaState, [key]: next };
      updateCurrentState();
    };
    var update = update2;
    const str = mediaObjectToString(mediaQueryConfig[key]);
    const getMatch = () => (0, import_matchMedia.matchMedia)(str);
    const match = getMatch();
    if (!match) {
      throw new Error("\u26A0\uFE0F No match");
    }
    match.addListener(update2);
    dispose.add(() => {
      match.removeListener(update2);
    });
    update2();
  }
}
function useMediaListeners(config) {
  if (config.disableSSR)
    return;
  (0, import_react.useEffect)(() => {
    setupMediaListeners();
  }, []);
}
const listeners = /* @__PURE__ */ new Set();
let flushing = false;
function updateCurrentState() {
  if (flushing)
    return;
  flushing = true;
  Promise.resolve().then(() => {
    flushing = false;
    listeners.forEach((cb) => cb(mediaState));
  });
}
const shouldUpdate = /* @__PURE__ */ new WeakMap();
function setMediaShouldUpdate(ref, props) {
  return shouldUpdate.set(ref, props);
}
function subscribe(subscriber) {
  listeners.add(subscriber);
  return () => listeners.delete(subscriber);
}
function useMedia(uid, debug) {
  const internal = (0, import_useSafeRef.useSafeRef)(void 0);
  if (!internal.current) {
    internal.current = {
      prev: initState
    };
  }
  const state = (0, import_react.useSyncExternalStore)(
    subscribe,
    () => {
      const { touched, prev } = internal.current;
      const componentState = uid ? shouldUpdate.get(uid) : void 0;
      if ((componentState == null ? void 0 : componentState.enabled) === false) {
        return prev;
      }
      const testKeys = (componentState == null ? void 0 : componentState.keys) ?? ((!componentState || componentState.enabled) && touched ? [...touched] : null);
      const hasntUpdated = !testKeys || (testKeys == null ? void 0 : testKeys.every((key) => mediaState[key] === prev[key]));
      if (hasntUpdated) {
        return prev;
      }
      internal.current.prev = mediaState;
      return mediaState;
    },
    () => initState
  );
  return (0, import_react.useMemo)(() => {
    return new Proxy(state, {
      get(_, key) {
        var _a;
        if (typeof key === "string") {
          (_a = internal.current).touched || (_a.touched = /* @__PURE__ */ new Set());
          internal.current.touched.add(key);
        }
        return Reflect.get(state, key);
      }
    });
  }, [state]);
}
function useMediaPropsActive(props, opts) {
  const media = useMedia();
  const shouldExpandShorthands = opts == null ? void 0 : opts.expandShorthands;
  return (0, import_react.useMemo)(() => {
    const config = (0, import_config.getConfig)();
    const next = {};
    const importancesUsed = {};
    const propNames = Object.keys(props);
    for (let i = propNames.length - 1; i >= 0; i--) {
      let key = propNames[i];
      const val = props[key];
      if (key[0] === "$") {
        const mediaKey = key.slice(1);
        if (!media[mediaKey])
          continue;
        if (val && typeof val === "object") {
          const subKeys = Object.keys(val);
          for (let j = subKeys.length; j--; j >= 0) {
            let subKey = subKeys[j];
            const value = val[subKey];
            if (shouldExpandShorthands) {
              subKey = config.shorthands[subKey] || subKey;
            }
            mergeMediaByImportance(next, mediaKey, subKey, value, importancesUsed);
          }
        }
      } else {
        if (shouldExpandShorthands) {
          key = config.shorthands[key] || key;
        }
        mergeMediaByImportance(next, "", key, val, importancesUsed);
      }
    }
    return next;
  }, [media, props]);
}
const getMediaImportanceIfMoreImportant = (mediaKey, key, importancesUsed) => {
  const importance = getMediaKeyImportance(mediaKey);
  return !importancesUsed[key] || importance > importancesUsed[key] ? importance : null;
};
function mergeMediaByImportance(onto, mediaKey, key, value, importancesUsed) {
  const importance = getMediaImportanceIfMoreImportant(mediaKey, key, importancesUsed);
  if (importance === null) {
    return false;
  }
  importancesUsed[key] = importance;
  onto[key] = value;
  return true;
}
function camelToHyphen(str) {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).toLowerCase();
}
function mediaObjectToString(query) {
  if (typeof query === "string") {
    return query;
  }
  return Object.entries(query).map(([feature, value]) => {
    feature = camelToHyphen(feature);
    if (typeof value === "string") {
      return `(${feature}: ${value})`;
    }
    if (typeof value === "number" && /[height|width]$/.test(feature)) {
      value = `${value}px`;
    }
    return `(${feature}: ${value})`;
  }).join(" and ");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useMedia.js.map


/***/ }),

/***/ 8469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useProps_exports = {};
__export(useProps_exports, {
  useProps: () => useProps
});
module.exports = __toCommonJS(useProps_exports);
var import_useMedia = __webpack_require__(9683);
function useProps(props, opts) {
  return (0, import_useMedia.useMediaPropsActive)(props, {
    expandShorthands: !(opts == null ? void 0 : opts.disableExpandShorthands)
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useProps.js.map


/***/ }),

/***/ 2081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useSafeRef_exports = {};
__export(useSafeRef_exports, {
  useSafeRef: () => useSafeRef
});
module.exports = __toCommonJS(useSafeRef_exports);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
const useSafeRef = (initialValue) => {
  const rawRef = (0, import_react.useRef)();
  if (!rawRef.current) {
    rawRef.current = {
      hold: true,
      next: initialValue,
      cur: initialValue,
      ref: {
        get current() {
          return raw.hold ? raw.cur : raw.next;
        },
        set current(v) {
          if (!raw.hold) {
            raw.next = v;
          }
          raw.cur = v;
        }
      }
    };
  }
  const raw = rawRef.current;
  raw.hold = true;
  raw.cur = raw.next;
  (0, import_constants.useIsomorphicLayoutEffect)(() => {
    raw.hold = false;
    raw.next = raw.cur;
  });
  return raw.ref;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useSafeRef.js.map


/***/ }),

/***/ 9000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useServerHooks_exports = {};
__export(useServerHooks_exports, {
  useServerRef: () => useServerRef,
  useServerState: () => useServerState
});
module.exports = __toCommonJS(useServerHooks_exports);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
const useServerState = import_constants.isRSC ? (val) => [val, idFn] : import_react.useState;
const useServerRef = import_constants.isRSC ? (val) => ({ current: val }) : import_react.useRef;
const idFn = () => {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useServerHooks.js.map


/***/ }),

/***/ 5083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useStyle_exports = {};
__export(useStyle_exports, {
  useStyle: () => useStyle
});
module.exports = __toCommonJS(useStyle_exports);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
var import_FontLanguageContext = __webpack_require__(5472);
var import_TextAncestorContext = __webpack_require__(5744);
var import_getSplitStyles = __webpack_require__(8359);
var import_useMedia = __webpack_require__(9683);
var import_useTheme = __webpack_require__(157);
function useStyle(base, style, options) {
  const isText = base.staticConfig.isText;
  const hasTextAncestor = !!(import_constants.isWeb && isText ? (0, import_react.useContext)(import_TextAncestorContext.TextAncestorContext) : false);
  const languageContext = import_constants.isRSC ? null : (0, import_react.useContext)(import_FontLanguageContext.FontLanguageContext);
  const theme = (0, import_useTheme.useTheme)();
  const media = (0, import_useMedia.useMedia)();
  const out = (0, import_getSplitStyles.useSplitStyles)(
    style,
    base.staticConfig,
    theme,
    {
      ...options,
      mediaState: media,
      hasTextAncestor,
      resolveVariablesAs: "auto"
    },
    null,
    languageContext || void 0,
    isText ? "span" : "div",
    options == null ? void 0 : options.debug
  );
  return {
    style: Object.keys(out.style).length ? out.style : null,
    classNames: out.classNames
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useStyle.js.map


/***/ }),

/***/ 157:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useTheme_exports = {};
__export(useTheme_exports, {
  activeThemeManagers: () => activeThemeManagers,
  getThemeProxied: () => getThemeProxied,
  useChangeThemeEffect: () => useChangeThemeEffect,
  useTheme: () => useTheme,
  useThemeWithState: () => useThemeWithState
});
module.exports = __toCommonJS(useTheme_exports);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
var import_config = __webpack_require__(5769);
var import_isDevTools = __webpack_require__(6394);
var import_createProxy = __webpack_require__(8588);
var import_ThemeManager = __webpack_require__(7326);
var import_ThemeManagerContext = __webpack_require__(8116);
var import_getThemeUnwrapped = __webpack_require__(5569);
var import_useServerHooks = __webpack_require__(9000);
const emptyProps = { name: null };
function getDefaultThemeProxied() {
  const config = (0, import_config.getConfig)();
  const name = Object.keys(config.themes)[0];
  return getThemeProxied({
    theme: config.themes[name],
    name
  });
}
const useTheme = (props = emptyProps) => {
  var _a;
  return (import_constants.isRSC ? null : (_a = useThemeWithState(props)) == null ? void 0 : _a.theme) || getDefaultThemeProxied();
};
const useThemeWithState = (props) => {
  const keys = (0, import_useServerHooks.useServerRef)([]);
  const changedTheme = useChangeThemeEffect(
    props,
    false,
    keys.current,
    import_constants.isClient ? () => {
      var _a;
      return ((_a = props.shouldUpdate) == null ? void 0 : _a.call(props)) ?? keys.current.length === 0;
    } : void 0
  );
  const { themeManager, theme, name, className } = changedTheme;
  if (false) {}
  if (!changedTheme.theme) {
    if (false) {}
    return null;
  }
  const proxiedTheme = (0, import_react.useMemo)(() => {
    return getThemeProxied(changedTheme, keys.current);
  }, [theme, name, className, themeManager]);
  return {
    ...changedTheme,
    theme: proxiedTheme
  };
};
function getThemeProxied({
  theme,
  themeManager
}, keys) {
  return (0, import_createProxy.createProxy)(theme, {
    has(_, key) {
      if (typeof key === "string") {
        if (key[0] === "$")
          key = key.slice(1);
        return themeManager == null ? void 0 : themeManager.allKeys.has(key);
      }
      return Reflect.has(theme, key);
    },
    get(_, key) {
      if (key === import_getThemeUnwrapped.GetThemeUnwrapped) {
        return theme;
      }
      if (key === "__proto__" || key === "$typeof" || typeof key !== "string" || !themeManager) {
        return Reflect.get(_, key);
      }
      const keyString = key[0] === "$" ? key.slice(1) : key;
      const val = themeManager.getValue(keyString);
      if (val && keys) {
        return new Proxy(val, {
          // when they touch the actual value we only track it
          // if its a variable (web), its ignored!
          get(_2, subkey) {
            if (subkey === "val" && !keys.includes(keyString)) {
              keys.push(keyString);
            }
            return Reflect.get(val, subkey);
          }
        });
      }
      return val;
    }
  });
}
const activeThemeManagers = /* @__PURE__ */ new Set();
const useChangeThemeEffect = (props, root = false, keys, disableUpdate) => {
  if (import_constants.isRSC) {
    return {
      isNewTheme: false,
      ...createState().state,
      themeManager: null
    };
  }
  const {
    // @ts-expect-error internal use only
    disable
  } = props;
  let parentManager = (0, import_react.useContext)(import_ThemeManagerContext.ThemeManagerContext);
  if (!disable) {
    parentManager = (0, import_ThemeManager.getNonComponentParentManager)(parentManager);
  }
  if (disable) {
    if (!parentManager)
      throw `\u274C`;
    return {
      isNewTheme: false,
      ...parentManager.state,
      themeManager: parentManager
    };
  }
  const [themeState, setThemeState] = (0, import_react.useState)(createState);
  const { state, mounted, isNewTheme, themeManager } = themeState;
  const isInversingOnMount = Boolean(!themeState.mounted && props.inverse);
  function getShouldUpdateTheme(manager = themeManager, nextState, prevState = state, forceShouldChange = false) {
    const next = nextState || manager.getState(props, parentManager);
    if (!next)
      return;
    if ((disableUpdate == null ? void 0 : disableUpdate()) === true)
      return;
    if (!forceShouldChange && !manager.getStateShouldChange(next, prevState))
      return;
    return next;
  }
  if (!import_constants.isServer) {
    (0, import_react.useLayoutEffect)(() => {
      if (props.inverse && !mounted) {
        setThemeState({ ...themeState, mounted: true });
        return;
      }
      if (isNewTheme && themeManager) {
        activeThemeManagers.add(themeManager);
      }
      const nextState = getShouldUpdateTheme(themeManager);
      if (nextState) {
        if (isNewTheme) {
          themeManager.updateState(nextState, true);
        }
        setThemeState(createState);
      } else {
        if (isNewTheme) {
          setThemeState(createState);
        }
      }
      const selfListenerDispose = themeManager.onChangeTheme((_a, _b, forced) => {
        if (forced) {
          setThemeState((prev) => createState(prev, true));
        }
      });
      const disposeChangeListener = parentManager == null ? void 0 : parentManager.onChangeTheme((name, manager) => {
        const shouldUpdate = Boolean((keys == null ? void 0 : keys.length) || isNewTheme);
        if (false) {}
        if (shouldUpdate) {
          setThemeState(createState);
        }
      }, themeManager.id);
      return () => {
        selfListenerDispose();
        disposeChangeListener == null ? void 0 : disposeChangeListener();
        activeThemeManagers.delete(themeManager);
      };
    }, [
      parentManager,
      isNewTheme,
      props.componentName,
      props.inverse,
      props.name,
      props.reset,
      themeState.mounted
    ]);
    if (false) {}
  }
  if (isInversingOnMount) {
    if (!parentManager)
      throw "\u274C";
    return {
      isNewTheme: false,
      ...parentManager.state,
      className: "",
      themeManager: parentManager
    };
  }
  return {
    ...state,
    isNewTheme,
    themeManager
  };
  function createState(prev, force = false) {
    if (prev && (disableUpdate == null ? void 0 : disableUpdate())) {
      return prev;
    }
    let themeManager2;
    let state2;
    const getNewThemeManager = () => {
      return new import_ThemeManager.ThemeManager(props, root ? "root" : parentManager);
    };
    if (prev == null ? void 0 : prev.themeManager) {
      themeManager2 = prev.themeManager;
      const forceChange = Boolean(keys == null ? void 0 : keys.length);
      const next = themeManager2.getState(props, parentManager);
      const nextState = getShouldUpdateTheme(themeManager2, next, prev.state, forceChange);
      if (nextState) {
        state2 = nextState;
        if (!prev.isNewTheme || !import_constants.isWeb) {
          themeManager2 = getNewThemeManager();
        } else {
          themeManager2.updateState(nextState, true);
        }
      } else {
        if (prev.isNewTheme) {
          if (parentManager && !next) {
            themeManager2 = parentManager;
          }
        }
      }
    } else {
      themeManager2 = getNewThemeManager();
    }
    const isNewTheme2 = Boolean(themeManager2 !== parentManager);
    const mounted2 = !props.inverse ? true : root || (prev == null ? void 0 : prev.mounted);
    if (!state2) {
      state2 = isNewTheme2 ? { ...themeManager2.state } : { ...parentManager.state };
    }
    if (!force && state2.name === (prev == null ? void 0 : prev.state.name)) {
      return prev;
    }
    const response = {
      state: state2,
      themeManager: themeManager2,
      isNewTheme: isNewTheme2,
      mounted: mounted2
    };
    if (false) {}
    return response;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useTheme.js.map


/***/ }),

/***/ 6775:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var useThemeName_exports = {};
__export(useThemeName_exports, {
  useThemeName: () => useThemeName
});
module.exports = __toCommonJS(useThemeName_exports);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
var import_config = __webpack_require__(5769);
var import_ThemeManagerContext = __webpack_require__(8116);
function useThemeName(opts) {
  if (import_constants.isRSC) {
    const config = (0, import_config.getConfig)();
    return config.themes[Object.keys(config.themes)[0]];
  }
  const manager = (0, import_react.useContext)(import_ThemeManagerContext.ThemeManagerContext);
  const [name, setName] = (0, import_react.useState)((manager == null ? void 0 : manager.state.name) || "");
  (0, import_constants.useIsomorphicLayoutEffect)(() => {
    if (!manager)
      return;
    setName(manager.state.name);
    return manager.onChangeTheme((next, manager2) => {
      const name2 = (opts == null ? void 0 : opts.parent) ? manager2.state.parentName || next : next;
      if (!name2)
        return;
      setName(name2);
    });
  }, [manager == null ? void 0 : manager.state.name]);
  return name;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useThemeName.js.map


/***/ }),

/***/ 1444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  configureMedia: () => import_useMedia.configureMedia,
  getConfig: () => import_config.getConfig,
  getMedia: () => import_useMedia.getMedia,
  getThemes: () => import_config.getThemes,
  getTokens: () => import_config.getTokens,
  mediaObjectToString: () => import_useMedia.mediaObjectToString,
  mediaQueryConfig: () => import_useMedia.mediaQueryConfig,
  mediaState: () => import_useMedia.mediaState,
  onConfiguredOnce: () => import_config.onConfiguredOnce,
  updateConfig: () => import_config.updateConfig,
  useMedia: () => import_useMedia.useMedia,
  useMediaPropsActive: () => import_useMedia.useMediaPropsActive
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(8517), module.exports);
__reExport(src_exports, __webpack_require__(5884), module.exports);
__reExport(src_exports, __webpack_require__(4830), module.exports);
__reExport(src_exports, __webpack_require__(4022), module.exports);
__reExport(src_exports, __webpack_require__(9008), module.exports);
__reExport(src_exports, __webpack_require__(9473), module.exports);
__reExport(src_exports, __webpack_require__(5624), module.exports);
__reExport(src_exports, __webpack_require__(2754), module.exports);
__reExport(src_exports, __webpack_require__(4847), module.exports);
__reExport(src_exports, __webpack_require__(4166), module.exports);
__reExport(src_exports, __webpack_require__(1241), module.exports);
__reExport(src_exports, __webpack_require__(1681), module.exports);
__reExport(src_exports, __webpack_require__(469), module.exports);
var import_config = __webpack_require__(5769);
__reExport(src_exports, __webpack_require__(7239), module.exports);
__reExport(src_exports, __webpack_require__(2397), module.exports);
__reExport(src_exports, __webpack_require__(7231), module.exports);
__reExport(src_exports, __webpack_require__(5016), module.exports);
__reExport(src_exports, __webpack_require__(8885), module.exports);
__reExport(src_exports, __webpack_require__(8359), module.exports);
__reExport(src_exports, __webpack_require__(2805), module.exports);
__reExport(src_exports, __webpack_require__(9097), module.exports);
__reExport(src_exports, __webpack_require__(5051), module.exports);
__reExport(src_exports, __webpack_require__(9494), module.exports);
__reExport(src_exports, __webpack_require__(3431), module.exports);
__reExport(src_exports, __webpack_require__(4618), module.exports);
__reExport(src_exports, __webpack_require__(9622), module.exports);
__reExport(src_exports, __webpack_require__(3426), module.exports);
__reExport(src_exports, __webpack_require__(6807), module.exports);
__reExport(src_exports, __webpack_require__(7481), module.exports);
__reExport(src_exports, __webpack_require__(4577), module.exports);
__reExport(src_exports, __webpack_require__(5394), module.exports);
__reExport(src_exports, __webpack_require__(5481), module.exports);
__reExport(src_exports, __webpack_require__(4631), module.exports);
var import_useMedia = __webpack_require__(9683);
__reExport(src_exports, __webpack_require__(157), module.exports);
__reExport(src_exports, __webpack_require__(6775), module.exports);
__reExport(src_exports, __webpack_require__(2081), module.exports);
__reExport(src_exports, __webpack_require__(5083), module.exports);
__reExport(src_exports, __webpack_require__(9914), module.exports);
__reExport(src_exports, __webpack_require__(7450), module.exports);
__reExport(src_exports, __webpack_require__(8469), module.exports);
__reExport(src_exports, __webpack_require__(4576), module.exports);
__reExport(src_exports, __webpack_require__(5476), module.exports);
__reExport(src_exports, __webpack_require__(9557), module.exports);
__reExport(src_exports, __webpack_require__(5744), module.exports);
__reExport(src_exports, __webpack_require__(8349), module.exports);
__reExport(src_exports, __webpack_require__(4227), module.exports);
__reExport(src_exports, __webpack_require__(4680), module.exports);
__reExport(src_exports, __webpack_require__(2984), module.exports);
__reExport(src_exports, __webpack_require__(9046), module.exports);
__reExport(src_exports, __webpack_require__(2391), module.exports);
__reExport(src_exports, __webpack_require__(4179), module.exports);
__reExport(src_exports, __webpack_require__(6552), module.exports);
__reExport(src_exports, __webpack_require__(7199), module.exports);
__reExport(src_exports, __webpack_require__(9047), module.exports);
__reExport(src_exports, __webpack_require__(5213), module.exports);
__reExport(src_exports, __webpack_require__(2962), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4166:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var insertFont_exports = {};
__export(insertFont_exports, {
  insertFont: () => insertFont,
  parseFont: () => parseFont,
  registerFontVariables: () => registerFontVariables
});
module.exports = __toCommonJS(insertFont_exports);
var import_config = __webpack_require__(5769);
var import_createFont = __webpack_require__(9473);
var import_createVariables = __webpack_require__(4847);
var import_registerCSSVariable = __webpack_require__(3956);
function insertFont(name, fontIn) {
  const font = (0, import_createFont.createFont)(fontIn);
  const tokened = (0, import_createVariables.createVariables)(font, name);
  const parsed = parseFont(tokened);
  if ( true && typeof document !== "undefined") {
    const fontVars = registerFontVariables(parsed);
    const style = document.createElement("style");
    style.innerText = `:root .font_${name} {${fontVars.join(";")}}`;
    style.setAttribute("data-tamagui-font", name);
    document.head.appendChild(style);
  }
  (0, import_config.setConfigFont)(name, tokened, parsed);
  return parsed;
}
function parseFont(definition) {
  var _a;
  const parsed = {};
  for (const attrKey in definition) {
    const attr = definition[attrKey];
    if (attrKey === "family" || attrKey === "face") {
      parsed[attrKey] = attr;
      continue;
    }
    parsed[attrKey] = {};
    for (const key in attr) {
      let val = attr[key];
      if (((_a = val.val) == null ? void 0 : _a[0]) === "$") {
        val = val.val;
      }
      parsed[attrKey][`$${key}`] = val;
    }
  }
  return parsed;
}
function registerFontVariables(parsedFont) {
  const response = [];
  for (const fkey in parsedFont) {
    if (fkey === "face")
      continue;
    if (fkey === "family") {
      const val = parsedFont[fkey];
      (0, import_registerCSSVariable.registerCSSVariable)(val);
      response.push((0, import_registerCSSVariable.variableToCSS)(val));
    } else {
      for (const fskey in parsedFont[fkey]) {
        const fval = parsedFont[fkey][fskey];
        if (typeof fval === "string") {
        } else {
          const val = parsedFont[fkey][fskey];
          (0, import_registerCSSVariable.registerCSSVariable)(val);
          response.push((0, import_registerCSSVariable.variableToCSS)(val));
        }
      }
    }
  }
  return response;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=insertFont.js.map


/***/ }),

/***/ 2962:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var setupHooks_exports = {};
__export(setupHooks_exports, {
  hooks: () => hooks,
  setupHooks: () => setupHooks
});
module.exports = __toCommonJS(setupHooks_exports);
const hooks = {};
function setupHooks(next) {
  Object.assign(hooks, next);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=setupHooks.js.map


/***/ }),

/***/ 469:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var setupReactNative_exports = {};
__export(setupReactNative_exports, {
  ReactNativeStaticConfigs: () => ReactNativeStaticConfigs,
  getReactNativeConfig: () => getReactNativeConfig,
  setupReactNative: () => setupReactNative
});
module.exports = __toCommonJS(setupReactNative_exports);
const ReactNativeStaticConfigs = /* @__PURE__ */ new WeakMap();
function getReactNativeConfig(Component) {
  return ReactNativeStaticConfigs.get(Component);
}
function setupReactNative(rnExports) {
  for (const key in rnExports) {
    if (key[0].toLowerCase() === key[0])
      continue;
    const val = rnExports[key];
    if (val && typeof val === "object") {
      ReactNativeStaticConfigs.set(val, {
        isReactNative: true,
        isText: key === "Text" || key === "TextInput",
        isInput: key === "TextInput" || key === "TextArea",
        inlineProps: key === "Image" ? /* @__PURE__ */ new Set(["src", "width", "height"]) : void 0
      });
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=setupReactNative.js.map


/***/ }),

/***/ 1241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var styled_exports = {};
__export(styled_exports, {
  styled: () => styled
});
module.exports = __toCommonJS(styled_exports);
var import_helpers = __webpack_require__(9047);
var import_createComponent = __webpack_require__(5884);
var import_extendStaticConfig = __webpack_require__(7941);
var import_setupReactNative = __webpack_require__(469);
function styled(ComponentIn, options, staticExtractionOptions) {
  if (false) {}
  const parentStaticConfig = "staticConfig" in ComponentIn ? ComponentIn.staticConfig : null;
  const isPlainStyledComponent = !!parentStaticConfig && !(parentStaticConfig.isReactNative || parentStaticConfig.isHOC);
  let Component = isPlainStyledComponent ? ComponentIn : (parentStaticConfig == null ? void 0 : parentStaticConfig.Component) || ComponentIn;
  const isReactNative = Boolean(
    import_setupReactNative.ReactNativeStaticConfigs.has(Component) || (staticExtractionOptions == null ? void 0 : staticExtractionOptions.isReactNative) || import_setupReactNative.ReactNativeStaticConfigs.has(parentStaticConfig == null ? void 0 : parentStaticConfig.Component) || (parentStaticConfig == null ? void 0 : parentStaticConfig.isReactNative)
  );
  const staticConfigProps = (() => {
    if (options) {
      let {
        variants,
        name,
        defaultVariants,
        acceptsClassName: acceptsClassNameProp,
        ...defaultProps
      } = options;
      if (parentStaticConfig) {
        defaultProps = {
          ...parentStaticConfig.defaultProps,
          ...defaultProps,
          ...defaultVariants
        };
      }
      if (defaultVariants) {
        defaultProps = {
          ...defaultProps,
          ...defaultVariants
        };
      }
      if (parentStaticConfig == null ? void 0 : parentStaticConfig.isHOC) {
        variants = (0, import_extendStaticConfig.mergeVariants)(parentStaticConfig.variants, variants);
      }
      const nativeConf = isReactNative && import_setupReactNative.ReactNativeStaticConfigs.get(Component) || null;
      const isText = Boolean(
        (staticExtractionOptions == null ? void 0 : staticExtractionOptions.isText) || (parentStaticConfig == null ? void 0 : parentStaticConfig.isText)
      );
      const acceptsClassName = acceptsClassNameProp ?? (isPlainStyledComponent || isReactNative || (parentStaticConfig == null ? void 0 : parentStaticConfig.isHOC) && (parentStaticConfig == null ? void 0 : parentStaticConfig.acceptsClassName));
      const conf = {
        ...staticExtractionOptions,
        ...!isPlainStyledComponent && {
          Component
        },
        // this type gets messed up by options?: Partial<GetProps<ParentComponent>> above
        // take away the Partial<> and it's fine
        variants,
        defaultProps,
        defaultVariants,
        componentName: name || (parentStaticConfig == null ? void 0 : parentStaticConfig.componentName),
        isReactNative,
        isText,
        acceptsClassName,
        ...nativeConf
      };
      if (defaultProps.children || !acceptsClassName) {
        conf.neverFlatten = true;
      }
      return conf;
    }
  })();
  const component = (0, import_createComponent.createComponent)(staticConfigProps || {}, Component);
  for (const key in ComponentIn) {
    if (key in component)
      continue;
    component[key] = ComponentIn[key];
  }
  return component;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=styled.js.map


/***/ }),

/***/ 1681:
/***/ ((module) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var types_exports = {};
module.exports = __toCommonJS(types_exports);
//# sourceMappingURL=types.js.map


/***/ }),

/***/ 9046:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var AnimationDriverProvider_exports = {};
__export(AnimationDriverProvider_exports, {
  AnimationDriverProvider: () => AnimationDriverProvider
});
module.exports = __toCommonJS(AnimationDriverProvider_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_AnimationDriverContext = __webpack_require__(1016);
const AnimationDriverProvider = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_AnimationDriverContext.AnimationDriverContext.Provider, { value: props.driver, children: props.children });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=AnimationDriverProvider.js.map


/***/ }),

/***/ 4680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var FontLanguage_exports = {};
__export(FontLanguage_exports, {
  FontLanguage: () => FontLanguage
});
module.exports = __toCommonJS(FontLanguage_exports);
var import_jsx_runtime = __webpack_require__(2322);
const FontLanguage = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        display: "contents"
      },
      className: Object.entries(props).map(([name, language]) => `t_lang-${name}-${language}`).join(" "),
      children
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=FontLanguage.js.map


/***/ }),

/***/ 4576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Slot_exports = {};
__export(Slot_exports, {
  Slot: () => Slot,
  Slottable: () => Slottable,
  mergeEvent: () => mergeEvent
});
module.exports = __toCommonJS(Slot_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_compose_refs = __webpack_require__(7199);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
const Slot = (0, import_react.forwardRef)(function Slot2(props, forwardedRef) {
  const { children, ...slotProps } = props;
  if ((0, import_react.isValidElement)(children)) {
    const childProps = {
      ...mergeSlotProps(children, slotProps),
      ref: (0, import_compose_refs.composeRefs)(forwardedRef, children.ref)
    };
    return (0, import_react.cloneElement)(children, childProps);
  }
  return import_react.Children.count(children) > 1 ? import_react.Children.only(null) : null;
});
const Slottable = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
};
const pressMap = import_constants.isWeb ? {
  onPress: "onClick",
  onPressOut: "onMouseUp",
  onPressIn: "onMouseDown"
} : {};
function mergeSlotProps(child, slotProps) {
  const childProps = child.props;
  const overrideProps = { ...childProps };
  const isHTMLChild = typeof child.type === "string";
  if (isHTMLChild) {
    for (const key in pressMap) {
      if (key in slotProps) {
        slotProps[pressMap[key]] = slotProps[key];
        delete slotProps[key];
      }
    }
  }
  for (let propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    if (isHTMLChild && pressMap[propName]) {
      propName = pressMap[propName];
      delete overrideProps[propName];
    }
    const isHandler = handleRegex.test(propName);
    if (isHandler) {
      overrideProps[propName] = mergeEvent(childPropValue, slotPropValue);
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
const handleRegex = /^on[A-Z]/;
function mergeEvent(a, b) {
  return (...args) => {
    a == null ? void 0 : a(...args);
    b == null ? void 0 : b(...args);
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Slot.js.map


/***/ }),

/***/ 5476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Stack_exports = {};
__export(Stack_exports, {
  Stack: () => Stack
});
module.exports = __toCommonJS(Stack_exports);
var import_constants = __webpack_require__(7239);
var import_createComponent = __webpack_require__(5884);
const Stack = (0, import_createComponent.createComponent)({
  acceptsClassName: true,
  defaultProps: {
    ...import_constants.stackDefaultStyles,
    flexDirection: "column"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Stack.js.map


/***/ }),

/***/ 2984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TamaguiProvider_exports = {};
__export(TamaguiProvider_exports, {
  TamaguiProvider: () => TamaguiProvider
});
module.exports = __toCommonJS(TamaguiProvider_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_constants = __webpack_require__(5213);
var React = __toESM(__webpack_require__(6689));
var import_ButtonNestingContext = __webpack_require__(4631);
var import_TextAncestorContext = __webpack_require__(5744);
var import_useMedia = __webpack_require__(9683);
var import_ThemeProvider = __webpack_require__(4227);
var import_AnimationDriverContext = __webpack_require__(1016);
function TamaguiProvider({
  children,
  disableInjectCSS,
  config,
  ...themePropsProvider
}) {
  if (import_constants.isRSC) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        style: { display: "contents" },
        className: `t_${Object.keys(config.themes)[0] || "light"}`,
        children
      }
    );
  }
  if (!(import_constants.isWeb && import_constants.isServer)) {
    (0, import_useMedia.useMediaListeners)(config);
  }
  if (import_constants.isClient) {
    React.useLayoutEffect(() => {
      if (document.documentElement.classList.contains("t_unmounted")) {
        document.documentElement.classList.remove("t_unmounted");
      }
      if (disableInjectCSS)
        return;
      const style = document.createElement("style");
      style.appendChild(document.createTextNode(config.getCSS()));
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, [config, disableInjectCSS]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ButtonNestingContext.ButtonNestingContext.Provider, { value: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_TextAncestorContext.TextAncestorContext.Provider, { value: false, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_AnimationDriverContext.AnimationDriverContext.Provider, { value: config.animations, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_ThemeProvider.ThemeProvider,
    {
      themeClassNameOnRoot: config.themeClassNameOnRoot,
      disableRootThemeClass: config.disableRootThemeClass,
      ...themePropsProvider,
      defaultTheme: themePropsProvider.defaultTheme ?? Object.keys(config.themes)[0],
      children
    }
  ) }) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=TamaguiProvider.js.map


/***/ }),

/***/ 9557:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Text_exports = {};
__export(Text_exports, {
  Text: () => Text
});
module.exports = __toCommonJS(Text_exports);
var import_constants = __webpack_require__(5213);
var import_helpers = __webpack_require__(9047);
var import_createComponent = __webpack_require__(5884);
const ellipseStyle = {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const Text = (0, import_createComponent.createComponent)(
  {
    acceptsClassName: true,
    isText: true,
    defaultProps: {
      // @ts-ignore
      display: "flex",
      fontFamily: "System",
      ...import_constants.isWeb ? {
        display: "inline",
        boxSizing: "border-box",
        wordWrap: "break-word",
        margin: 0
      } : {
        suppressHighlighting: true
      }
    },
    inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"]),
    variants: {
      ...import_constants.isWeb && {
        numberOfLines: {
          1: ellipseStyle,
          ":number": (numberOfLines) => numberOfLines >= 1 ? {
            WebkitLineClamp: numberOfLines,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
            overflow: "hidden"
          } : null
        }
      },
      // ??
      ellipsizeMode: {
        "...": () => null
      },
      selectable: {
        true: {
          userSelect: "text",
          cursor: "text"
        },
        false: {
          userSelect: "none",
          cursor: "default"
        }
      },
      ellipse: {
        true: import_constants.isWeb ? ellipseStyle : {
          numberOfLines: 1,
          lineBreakMode: "clip"
        }
      }
    },
    deoptProps: new Set(import_constants.isWeb ? [] : ["ellipse"]),
    validStyles: {
      ...import_helpers.validStyles,
      ...import_helpers.stylePropsTextOnly
    }
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Text.js.map


/***/ }),

/***/ 8349:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Theme_exports = {};
__export(Theme_exports, {
  Theme: () => Theme,
  useThemedChildren: () => useThemedChildren
});
module.exports = __toCommonJS(Theme_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
var import_createVariable = __webpack_require__(2754);
var import_ThemeManagerContext = __webpack_require__(8116);
var import_useServerHooks = __webpack_require__(9000);
var import_useTheme = __webpack_require__(157);
var import_ThemeDebug = __webpack_require__(5600);
function Theme(props) {
  if (props.disable) {
    return props.children;
  }
  const isRoot = !!props["_isRoot"];
  const themeState = (0, import_useTheme.useChangeThemeEffect)(props, isRoot);
  let children = props["disable-child-theme"] ? import_react.Children.map(
    props.children,
    (child) => (0, import_react.cloneElement)(child, { ["data-disable-theme"]: true })
  ) : props.children;
  if (false) {}
  return useThemedChildren(themeState, children, props, isRoot);
}
function useThemedChildren(themeState, children, props, isRoot = false) {
  const { themeManager, className, theme, isNewTheme } = themeState;
  const { shallow, forceClassName } = props;
  const hasEverThemed = (0, import_useServerHooks.useServerRef)(false);
  if (isNewTheme) {
    hasEverThemed.current = true;
  }
  const shouldRenderChildrenWithTheme = isNewTheme || hasEverThemed.current || forceClassName || isRoot;
  return (0, import_react.useMemo)(() => {
    if (!shouldRenderChildrenWithTheme) {
      return children;
    }
    let next = import_react.Children.toArray(children);
    if (shallow && themeManager) {
      next = next.map((child) => {
        return (0, import_react.isValidElement)(child) ? (0, import_react.cloneElement)(
          child,
          void 0,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Theme, { name: themeManager.state.parentName, children: child.props.children })
        ) : child;
      });
    }
    const wrapped = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ThemeManagerContext.ThemeManagerContext.Provider, { value: themeManager, children: next });
    if (forceClassName === false) {
      return wrapped;
    }
    if (import_constants.isWeb && !props.passPropsToChildren) {
      const themeColor = theme && isNewTheme ? (0, import_createVariable.variableToString)(theme.color) : "";
      const colorStyle = themeColor ? {
        color: themeColor
      } : void 0;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${className || ""} _dsp_contents is_Theme`, style: colorStyle, children: wrapped });
    }
    return wrapped;
  }, [
    forceClassName,
    props.passPropsToChildren,
    shouldRenderChildrenWithTheme,
    themeManager,
    children,
    theme,
    isNewTheme,
    className
  ]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=Theme.js.map


/***/ }),

/***/ 5600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ThemeDebug_exports = {};
__export(ThemeDebug_exports, {
  ThemeDebug: () => ThemeDebug
});
module.exports = __toCommonJS(ThemeDebug_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_use_force_update = __webpack_require__(2391);
var import_react = __webpack_require__(6689);
var import_react_dom = __webpack_require__(6405);
let node;
function ThemeDebug({
  themeState,
  themeProps,
  children
}) {
  var _a, _b, _c, _d, _e, _f;
  if (themeProps["disable-child-theme"]) {
    return children;
  }
  if (false) {}
  return children;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ThemeDebug.js.map


/***/ }),

/***/ 4227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ThemeProvider_exports = {};
__export(ThemeProvider_exports, {
  ThemeProvider: () => ThemeProvider,
  ThemeProviderRootContext: () => ThemeProviderRootContext
});
module.exports = __toCommonJS(ThemeProvider_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_constants = __webpack_require__(5213);
var import_react = __webpack_require__(6689);
var import_constants2 = __webpack_require__(7239);
var import_Theme = __webpack_require__(8349);
const ThemeProviderRootContext = (0, import_react.createContext)(null);
const ThemeProvider = (props) => {
  if (import_constants.isClient) {
    (0, import_react.useLayoutEffect)(() => {
      if (props.disableRootThemeClass)
        return;
      const cn = `${import_constants2.THEME_CLASSNAME_PREFIX}${props.defaultTheme}`;
      const target = props.themeClassNameOnRoot ? document.documentElement : document.body;
      target.classList.add(cn);
      return () => {
        target.classList.remove(cn);
      };
    }, [props.defaultTheme, props.disableRootThemeClass, props.themeClassNameOnRoot]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ThemeProviderRootContext.Provider,
    {
      value: (0, import_react.useMemo)(() => {
        return {
          defaultTheme: props.defaultTheme
        };
      }, []),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_Theme.Theme,
        {
          className: props.className,
          name: props.defaultTheme,
          forceClassName: props.disableRootThemeClass ? false : void 0,
          _isRoot: true,
          children: props.children
        }
      )
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ThemeProvider.js.map


/***/ }),

/***/ 1837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(6689),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 2322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1837);
} else {}


/***/ })

};
;