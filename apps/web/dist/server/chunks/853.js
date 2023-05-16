exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 2425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fG": () => (/* reexport */ AdaptParentContext)
});

// UNUSED EXPORTS: Adapt, AdaptContents, useAdaptParent

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/adapt/dist/esm/Adapt.js



const AdaptParentContext = (0,external_react_.createContext)(null);
const AdaptContents = (props) => {
  const context = (0,external_react_.useContext)(AdaptParentContext);
  if (!(context == null ? void 0 : context.Contents)) {
    throw new Error("Adapt not supported by this component");
  }
  return (0,external_react_.createElement)(context.Contents, props);
};
AdaptContents.shouldForwardSpace = true;
const useAdaptParent = ({
  Contents
}) => {
  const [when, setWhen] = useState(null);
  const AdaptProvider = useMemo(() => {
    const context = {
      Contents,
      setWhen
    };
    function AdaptProviderView(props) {
      return /* @__PURE__ */ jsx(AdaptParentContext.Provider, { value: context, children: props.children });
    }
    return AdaptProviderView;
  }, [Contents]);
  return {
    AdaptProvider,
    when
  };
};
const Adapt = (0,cjs.withStaticProperties)(
  function Adapt2({ platform, when, children }) {
    const context = (0,external_react_.useContext)(AdaptParentContext);
    const media = (0,cjs.useMedia)();
    let enabled = !platform;
    if (platform === "touch")
      enabled = cjs.isTouchable;
    if (platform === "native")
      enabled = !cjs.isWeb;
    if (platform === "web")
      enabled = cjs.isWeb;
    if (when && !media[when]) {
      enabled = false;
    }
    (0,cjs.useIsomorphicLayoutEffect)(() => {
      if (!enabled)
        return;
      context == null ? void 0 : context.setWhen(when || enabled);
    }, [when, context, enabled]);
    if (!enabled) {
      return null;
    }
    return children;
  },
  {
    Contents: AdaptContents
  }
);

//# sourceMappingURL=Adapt.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/adapt/dist/esm/index.js

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* binding */ Button2)
});

// UNUSED EXPORTS: ButtonFrame, ButtonText, buttonStaticConfig, createButtonScope, useButton

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../node_modules/@tamagui/create-context/dist/esm/create-context.js
var create_context = __webpack_require__(7846);
// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/font-size/dist/jsx/getFontSize.js

const getFontSize = (inSize, opts)=>{
    const res = getFontSizeVariable(inSize, opts);
    if ((0,cjs.isVariable)(res)) {
        return +res.val;
    }
    return res ? +res : 16;
};
const getFontSizeVariable = (inSize, opts)=>{
    const token = getFontSizeToken(inSize, opts);
    if (!token) {
        return inSize;
    }
    const conf = (0,cjs.getConfig)();
    return conf.fontsParsed[opts?.font || "$body"].size[token];
};
const getFontSizeToken = (inSize, opts)=>{
    if (typeof inSize === "number") {
        return null;
    }
    const relativeSize = opts?.relativeSize || 0;
    const conf = (0,cjs.getConfig)();
    const fontSize = conf.fontsParsed[opts?.font || "$body"].size;
    const size = inSize || ("$true" in fontSize ? "$true" : "$4");
    const sizeTokens = Object.keys(fontSize);
    let foundIndex = sizeTokens.indexOf(size);
    if (foundIndex === -1) {
        if (size.endsWith(".5")) {
            foundIndex = sizeTokens.indexOf(size.replace(".5", ""));
        }
    }
    if (false) {}
    const tokenIndex = Math.min(Math.max(0, foundIndex + relativeSize), sizeTokens.length - 1);
    return sizeTokens[tokenIndex] ?? size;
};
 //# sourceMappingURL=getFontSize.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var dist_cjs = __webpack_require__(820);
// EXTERNAL MODULE: ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var helpers_tamagui_dist_cjs = __webpack_require__(247);
// EXTERNAL MODULE: ../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js + 1 modules
var ThemeableStack = __webpack_require__(733);
// EXTERNAL MODULE: ../../node_modules/@tamagui/text/dist/esm/SizableText.js
var SizableText = __webpack_require__(6003);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js


function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size,
    noTextWrap,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    fontStyle
  } = propsIn;
  if (noTextWrap || !children) {
    return [children];
  }
  const allChildren = external_react_default().Children.toArray(children);
  const nextChildren = [];
  let lastIsString = false;
  const props = {
    ...extraProps
  };
  if (color)
    props.color = color;
  if (fontFamily)
    props.fontFamily = fontFamily;
  if (fontSize)
    props.fontSize = fontSize;
  if (fontWeight)
    props.fontWeight = fontWeight;
  if (letterSpacing)
    props.letterSpacing = letterSpacing;
  if (textAlign)
    props.textAlign = textAlign;
  if (size)
    props.size = size;
  if (fontStyle)
    props.fontStyle = fontStyle;
  function concatStringChildren() {
    if (!lastIsString)
      return;
    const index = nextChildren.length - 1;
    const childrenStrings = nextChildren[index];
    nextChildren[index] = /* @__PURE__ */ (0,jsx_runtime.jsx)(TextComponent, { ...props, ...textProps, children: childrenStrings }, index);
  }
  for (const child of allChildren) {
    const last = nextChildren[nextChildren.length - 1];
    const isString = typeof child === "string";
    if (isString) {
      if (lastIsString) {
        last.push(child);
      } else {
        nextChildren.push([child]);
      }
    } else {
      concatStringChildren();
      nextChildren.push(child);
    }
    lastIsString = isString;
  }
  concatStringChildren();
  return nextChildren;
}

//# sourceMappingURL=wrapChildrenInText.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/web/dist/cjs/index.js
var web_dist_cjs = __webpack_require__(1444);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/button/dist/esm/Button.js









const BUTTON_NAME = "Button";
const ButtonFrame = (0,web_dist_cjs.styled)(ThemeableStack/* ThemeableStack */.K, {
  name: BUTTON_NAME,
  tag: "button",
  focusable: true,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        hoverTheme: true,
        pressTheme: true,
        backgrounded: true,
        borderWidth: 1,
        borderColor: "$borderColor",
        pressStyle: {
          borderColor: "$borderColorPress"
        },
        focusStyle: {
          outlineColor: "$borderColorFocus",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },
    size: {
      "...size": dist_cjs.getButtonSized
    },
    active: {
      true: {
        hoverStyle: {
          backgroundColor: "$background"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
const BUTTON_TEXT_NAME = "ButtonText";
const ButtonTextFrame = (0,web_dist_cjs.styled)(SizableText/* SizableText */.J, {
  name: BUTTON_TEXT_NAME,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipse: true,
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
const [createButtonContext, createButtonScope] = (0,create_context/* createContextScope */.b)("Button");
const [ButtonProvider, useButtonContext] = createButtonContext("Button");
const ButtonTextComponent = ButtonTextFrame.extractable(
  (0,external_react_.forwardRef)(
    (props, ref) => {
      const context = useButtonContext(BUTTON_TEXT_NAME, props.__scopeButton);
      (0,external_react_.useEffect)(() => {
        const unregister = context.registerButtonText();
        return () => unregister();
      }, [context.registerButtonText]);
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonTextFrame, { size: props.size ?? context.size, ...props, ref });
    }
  )
);
const BUTTON_ICON_NAME = "ButtonIcon";
const ButtonIcon = (props) => {
  const { children, scaleIcon = 1 } = props;
  const context = useButtonContext(BUTTON_ICON_NAME, props.__scopeButton);
  const size = context.size;
  const color = context.color;
  const iconSize = (typeof size === "number" ? size * 0.5 : getFontSize(size)) * scaleIcon;
  const getThemedIcon = (0,helpers_tamagui_dist_cjs.useGetThemedIcon)({ size: iconSize, color });
  return getThemedIcon(children);
};
const ButtonComponent = ButtonFrame.styleable(function Button(props, ref) {
  const { props: buttonProps } = useButton(props);
  const [buttonTextCount, setButtonTextCount] = (0,external_react_.useState)(0);
  const registerButtonText = (0,external_react_.useCallback)(() => {
    setButtonTextCount((prev) => prev + 1);
    return () => setButtonTextCount((prev) => prev - 1);
  }, [setButtonTextCount]);
  const hasTextComponent = buttonTextCount > 0;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ButtonProvider,
    {
      scope: props.__scopeButton,
      color: props.color,
      hasTextComponent,
      size: props.size ?? "$true",
      registerButtonText,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonFrame, { ...hasTextComponent ? props : buttonProps, ref })
    }
  );
});
const buttonStaticConfig = {
  inlineProps: /* @__PURE__ */ new Set([
    // text props go here (can't really optimize them, but we never fully extract button anyway)
    // may be able to remove this entirely, as the compiler / runtime have gotten better
    "color",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "fontStyle",
    "letterSpacing",
    "textAlign",
    "unstyled"
  ])
};
const Button2 = (0,web_dist_cjs.withStaticProperties)(ButtonComponent, {
  Text: ButtonTextComponent,
  Icon: ButtonIcon
});
function useButton(propsIn, { Text = ButtonTextFrame } = { Text: ButtonTextFrame }) {
  const {
    children,
    icon,
    iconAfter,
    noTextWrap,
    theme: themeName,
    space,
    spaceFlex,
    scaleIcon = 1,
    scaleSpace = 0.66,
    separator,
    // text props
    color,
    fontWeight,
    letterSpacing,
    fontSize,
    fontFamily,
    fontStyle,
    textAlign,
    textProps,
    ...rest
  } = propsIn;
  const hasUnstyled = typeof propsIn.unstyled !== "undefined";
  const isNested = web_dist_cjs.isRSC ? false : (0,external_react_.useContext)(web_dist_cjs.ButtonNestingContext);
  const propsActive = (0,web_dist_cjs.useProps)(propsIn);
  const size = propsActive.size || "$true";
  const iconSize = (typeof size === "number" ? size * 0.5 : getFontSize(size)) * scaleIcon;
  const getThemedIcon = (0,helpers_tamagui_dist_cjs.useGetThemedIcon)({ size: iconSize, color });
  const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
  const spaceSize = propsActive.space ?? (0,web_dist_cjs.getVariableValue)(iconSize) * scaleSpace;
  const contents = wrapChildrenInText(
    Text,
    propsActive,
    Text === ButtonTextFrame && hasUnstyled ? {
      unstyled: propsIn.unstyled
    } : void 0
  );
  const inner = (0,web_dist_cjs.spacedChildren)({
    // a bit arbitrary but scaling to font size is necessary so long as button does
    space: spaceSize,
    spaceFlex,
    separator,
    direction: propsActive.flexDirection === "column" || propsActive.flexDirection === "column-reverse" ? "vertical" : "horizontal",
    children: [themedIcon, ...contents, themedIconAfter]
  });
  const tag = isNested ? "span" : (
    // defaults to <a /> when accessibilityRole = link
    // see https://github.com/tamagui/tamagui/issues/505
    propsIn.accessibilityRole === "link" ? "a" : void 0
  );
  const props = {
    ...propsActive.disabled && {
      // in rnw - false still has keyboard tabIndex, undefined = not actually focusable
      focusable: void 0,
      // even with tabIndex unset, it will keep focusStyle on web so disable it here
      focusStyle: {
        borderColor: "$background"
      }
    },
    tag,
    ...rest,
    children: web_dist_cjs.isRSC ? inner : /* @__PURE__ */ (0,jsx_runtime.jsx)(web_dist_cjs.ButtonNestingContext.Provider, { value: true, children: inner })
  };
  return {
    spaceSize,
    isNested,
    props
  };
}

//# sourceMappingURL=Button.js.map


/***/ }),

/***/ 3571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zx": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.zx)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5174);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ composeRefs),
/* harmony export */   "e": () => (/* binding */ useComposedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=compose-refs.js.map


/***/ }),

/***/ 7846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ createContextScope)
/* harmony export */ });
/* unused harmony export createContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2322);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function createContext(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ jsx(Context.Provider, { value, children });
  }
  function useContext(consumerName) {
    const context = React.useContext(Context);
    if (context)
      return context;
    if (defaultContext !== void 0)
      return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = `${rootComponentName}Provider`;
  return [Provider, useContext];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext2(rootComponentName, defaultContext) {
    const BaseContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
      const value = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
        () => context,
        Object.values(context)
      );
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, { value, children });
    }
    function useContext(consumerName, scope, options) {
      const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
      const context = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Context);
      if (context)
        return context;
      if (defaultContext !== void 0)
        return defaultContext;
      const missingContextMessage = `\`${consumerName}\` must be used within \`${rootComponentName}\``;
      if (options == null ? void 0 : options.fallback) {
        if ((options == null ? void 0 : options.warn) !== false) {
          console.warn(missingContextMessage);
        }
        return options.fallback;
      } else {
        throw new Error(missingContextMessage);
      }
    }
    Provider.displayName = `${rootComponentName}Provider`;
    return [Provider, useContext];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return react__WEBPACK_IMPORTED_MODULE_1__.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [
    createContext2,
    composeContextScopes(createScope, ...createContextScopeDeps)
  ];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1)
    return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
        () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
        [nextScopes]
      );
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

//# sourceMappingURL=create-context.js.map


/***/ }),

/***/ 820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
  getButtonSized: () => getButtonSized
});
module.exports = __toCommonJS(src_exports);
var import_get_size = __webpack_require__(4356);
const getButtonSized = (val, { tokens }) => {
  if (typeof val === "number") {
    return {
      paddingHorizontal: val * 0.25,
      height: val,
      borderRadius: val * 0.2
    };
  }
  const ySize = (0, import_get_size.getSize)(val, 0);
  const xSize = (0, import_get_size.stepTokenUpOrDown)("space", val);
  const radiusToken = tokens.radius[val] ?? tokens.radius["$true"];
  return {
    paddingHorizontal: xSize,
    height: ySize,
    borderRadius: radiusToken
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3862:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
  getFontSized: () => getFontSized
});
module.exports = __toCommonJS(src_exports);
var import_core = __webpack_require__(2026);
const getFontSized = (sizeTokenIn = "$true", { fonts, props }) => {
  var _a, _b, _c, _d, _e, _f;
  const family = (0, import_core.getVariableValue)(props.fontFamily) || "$body";
  const font = fonts[family] || fonts["$body"];
  if (!font) {
    if (false) {}
    return {};
  }
  const fontFamily = font.family;
  const sizeToken = sizeTokenIn === "$true" ? getDefaultSizeToken(font) : sizeTokenIn;
  const fontSize = props.fontSize || font.size[sizeToken];
  const lineHeight = props.lineHeight || ((_a = font.lineHeight) == null ? void 0 : _a[sizeToken]);
  const fontWeight = props.fontWeight || ((_b = font.weight) == null ? void 0 : _b[sizeToken]);
  const letterSpacing = props.letterSpacing || ((_c = font.letterSpacing) == null ? void 0 : _c[sizeToken]);
  const fontStyle = props.fontStyle || ((_d = font.style) == null ? void 0 : _d[sizeToken]);
  const textTransform = props.textTransform || ((_e = font.transform) == null ? void 0 : _e[sizeToken]);
  const color = props.color || ((_f = font.color) == null ? void 0 : _f[sizeToken]);
  const style = {
    color,
    fontStyle,
    textTransform,
    fontFamily,
    fontWeight,
    letterSpacing,
    fontSize,
    lineHeight
  };
  if (false) {}
  return style;
};
const cache = /* @__PURE__ */ new WeakMap();
function getDefaultSizeToken(font) {
  if (typeof font === "object" && cache.has(font)) {
    return cache.get(font);
  }
  const sizeTokens = "$true" in font.size ? font.size : (0, import_core.getTokens)().size;
  const sizeDefault = sizeTokens["$true"];
  const sizeDefaultSpecific = sizeDefault ? Object.keys(sizeTokens).find(
    (x) => x !== "$true" && sizeTokens[x]["val"] === sizeDefault["val"]
  ) : null;
  if (!sizeDefault || !sizeDefaultSpecific) {
    if (false) {}
    return Object.keys(font.size)[3];
  }
  cache.set(font, sizeDefaultSpecific);
  return sizeDefaultSpecific;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
  getSize: () => getSize,
  stepTokenUpOrDown: () => stepTokenUpOrDown
});
module.exports = __toCommonJS(src_exports);
var import_core = __webpack_require__(2026);
const getSize = (size, shift = 0, bounds = [0]) => {
  return stepTokenUpOrDown("size", size, shift, bounds);
};
const stepTokenUpOrDown = (type, name = "$true", shift = 0, bounds = [0]) => {
  const tokens = (0, import_core.getTokens)({ prefixed: true })[type];
  const maybeTokenizedKeysOrdered = import_core.tokensKeysOrdered.get(tokens) || Object.keys(tokens);
  const keysOrdered = maybeTokenizedKeysOrdered.map((maybeTokenizedKey) => maybeTokenizedKey.charAt(0) === "$" ? maybeTokenizedKey : `$${maybeTokenizedKey}`);
  const min = bounds[0] ?? 0;
  const max = bounds[1] ?? keysOrdered.length - 1;
  const currentIndex = keysOrdered.indexOf(name);
  if (name === "$true") {
    shift += shift === 0 ? 0 : shift > 0 ? 1 : -1;
  }
  const index = Math.min(max, Math.max(min, currentIndex + shift));
  const key = keysOrdered[index];
  return tokens[key] || tokens["$true"];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var getSpace_exports = {};
__export(getSpace_exports, {
  getSpace: () => getSpace
});
module.exports = __toCommonJS(getSpace_exports);
var import_core = __webpack_require__(2026);
const getSpace = (token, sizeUpOrDownBy = 0) => {
  const spaces = (0, import_core.getTokens)().space;
  const spaceNames = Object.keys(spaces);
  const key = spaceNames[Math.max(0, spaceNames.indexOf(String(token || "$true")) + sizeUpOrDownBy)];
  return spaces[key] || spaces["$true"];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=getSpace.js.map


/***/ }),

/***/ 247:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
__reExport(src_exports, __webpack_require__(9047), module.exports);
__reExport(src_exports, __webpack_require__(8494), module.exports);
__reExport(src_exports, __webpack_require__(324), module.exports);
__reExport(src_exports, __webpack_require__(4908), module.exports);
__reExport(src_exports, __webpack_require__(3375), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8494:
/***/ ((module) => {

"use strict";

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
var prevent_exports = {};
__export(prevent_exports, {
  prevent: () => prevent
});
module.exports = __toCommonJS(prevent_exports);
const prevent = (e) => [e.preventDefault(), e.stopPropagation()];
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=prevent.js.map


/***/ }),

/***/ 4908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useCurrentColor_exports = {};
__export(useCurrentColor_exports, {
  useCurrentColor: () => useCurrentColor
});
module.exports = __toCommonJS(useCurrentColor_exports);
var import_core = __webpack_require__(2026);
const useCurrentColor = (colorProp) => {
  const theme = (0, import_core.useTheme)();
  return (0, import_core.variableToString)(colorProp || theme[colorProp] || theme.color);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useCurrentColor.js.map


/***/ }),

/***/ 3375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useGetThemedIcon_exports = {};
__export(useGetThemedIcon_exports, {
  useGetThemedIcon: () => useGetThemedIcon
});
module.exports = __toCommonJS(useGetThemedIcon_exports);
var import_react = __webpack_require__(6689);
var import_useCurrentColor = __webpack_require__(4908);
const useGetThemedIcon = (props) => {
  const color = (0, import_useCurrentColor.useCurrentColor)(props.color);
  return (el) => {
    if (!el)
      return el;
    if ((0, import_react.isValidElement)(el)) {
      return (0, import_react.cloneElement)(el, {
        ...props,
        color,
        // @ts-expect-error
        ...el.props
      });
    }
    return (0, import_react.createElement)(el, props);
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useGetThemedIcon.js.map


/***/ }),

/***/ 4949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports Frame, Handle, Overlay, Sheet, SheetHandleFrame, SheetOverlayFrame */
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8939);
/* harmony import */ var _tamagui_stacks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(733);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4035);
/* harmony import */ var _createSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6729);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9970);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__, "H1")) __webpack_require__.d(__webpack_exports__, { "H1": function() { return _types__WEBPACK_IMPORTED_MODULE_0__.H1; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__, "XStack")) __webpack_require__.d(__webpack_exports__, { "XStack": function() { return _types__WEBPACK_IMPORTED_MODULE_0__.XStack; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__, "YStack")) __webpack_require__.d(__webpack_exports__, { "YStack": function() { return _types__WEBPACK_IMPORTED_MODULE_0__.YStack; } });






const Handle = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__/* .XStack */ .sL, {
  name: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SHEET_HANDLE_NAME */ .r_,
  variants: {
    open: {
      true: {
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        height: 10,
        borderRadius: 100,
        backgroundColor: "$background",
        zIndex: 10,
        marginHorizontal: "35%",
        marginBottom: "$2",
        opacity: 0.5,
        hoverStyle: {
          opacity: 0.7
        }
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
const Overlay = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_4__/* .ThemeableStack */ .K, {
  name: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SHEET_OVERLAY_NAME */ ._y,
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: "auto"
      },
      false: {
        opacity: 0,
        pointerEvents: "none"
      }
    },
    unstyled: {
      false: {
        fullscreen: true,
        position: "absolute",
        backgrounded: true,
        zIndex: 1e5
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
const Frame = (0,_tamagui_core__WEBPACK_IMPORTED_MODULE_1__.styled)(_tamagui_stacks__WEBPACK_IMPORTED_MODULE_2__/* .YStack */ .FA, {
  name: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SHEET_NAME */ .BG,
  variants: {
    unstyled: {
      false: {
        flex: 1,
        backgroundColor: "$background",
        borderTopLeftRadius: "$true",
        borderTopRightRadius: "$true",
        width: "100%",
        maxHeight: "100%",
        overflow: "hidden"
      }
    }
  },
  defaultVariants: {
    unstyled: false
  }
});
const Sheet = (0,_createSheet__WEBPACK_IMPORTED_MODULE_5__/* .createSheet */ .S)({
  Frame,
  Handle,
  Overlay
});
const SheetOverlayFrame = (/* unused pure expression or super */ null && (Overlay));
const SheetHandleFrame = (/* unused pure expression or super */ null && (Handle));

//# sourceMappingURL=Sheet.js.map


/***/ }),

/***/ 4035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BG": () => (/* binding */ SHEET_NAME),
/* harmony export */   "Ey": () => (/* binding */ SHEET_HIDDEN_STYLESHEET),
/* harmony export */   "_y": () => (/* binding */ SHEET_OVERLAY_NAME),
/* harmony export */   "dh": () => (/* binding */ HIDDEN_SIZE),
/* harmony export */   "r_": () => (/* binding */ SHEET_HANDLE_NAME)
/* harmony export */ });
/* unused harmony export constants */
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_0__);

const constants = {};
const SHEET_NAME = "Sheet";
const SHEET_HANDLE_NAME = "SheetHandle";
const SHEET_OVERLAY_NAME = "SheetOverlay";
const HIDDEN_SIZE = 1e4;
const SHEET_HIDDEN_STYLESHEET = _tamagui_core__WEBPACK_IMPORTED_MODULE_0__.isClient ? document.createElement("style") : null;
if (SHEET_HIDDEN_STYLESHEET) {
  document.head.appendChild(SHEET_HIDDEN_STYLESHEET);
}

//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 6729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createSheet)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var compose_refs = __webpack_require__(4598);
// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
// EXTERNAL MODULE: external "react-remove-scroll"
var external_react_remove_scroll_ = __webpack_require__(1520);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/remove-scroll/dist/esm/RemoveScroll.js


const RemoveScroll = (props) => {
  if (!props.children)
    return null;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(external_react_remove_scroll_.RemoveScroll, { ...props });
};
RemoveScroll.classNames = external_react_remove_scroll_.RemoveScroll.classNames;

//# sourceMappingURL=RemoveScroll.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/remove-scroll/dist/esm/index.js

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/Platform/index.js
var Platform = __webpack_require__(8182);
// EXTERNAL MODULE: ../../node_modules/@tamagui/sheet/dist/esm/constants.js
var constants = __webpack_require__(4035);
// EXTERNAL MODULE: ../../node_modules/@tamagui/create-context/dist/esm/create-context.js
var create_context = __webpack_require__(7846);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/SheetContext.js


const [createSheetContext, createSheetScope] = (0,create_context/* createContextScope */.b)(constants/* SHEET_NAME */.BG);
const [SheetProvider, useSheetContext] = createSheetContext(
  constants/* SHEET_NAME */.BG,
  {}
);

//# sourceMappingURL=SheetContext.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/adapt/dist/esm/index.js + 1 modules
var esm = __webpack_require__(2425);
// EXTERNAL MODULE: ../../node_modules/@tamagui/portal/dist/esm/index.js
var dist_esm = __webpack_require__(8765);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/TextInputState/index.js
var TextInputState = __webpack_require__(5079);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/dismissKeyboard/index.js

const dismissKeyboard = () => {
  TextInputState/* default.blurTextInput */.Z.blurTextInput(TextInputState/* default.currentlyFocusedField */.Z.currentlyFocusedField());
};
var dismissKeyboard_default = dismissKeyboard;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/Keyboard/index.js

const Keyboard = {
  addListener() {
    return { remove: () => {
    } };
  },
  dismiss() {
    dismissKeyboard_default();
  },
  removeAllListeners() {
  },
  removeListener() {
  }
};
var Keyboard_default = Keyboard;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-keyboard-visible/dist/esm/useKeyboardVisible.js


const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const keyboardDidShowListener = Keyboard_default.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard_default.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return isKeyboardVisible;
};

//# sourceMappingURL=useKeyboardVisible.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-keyboard-visible/dist/esm/index.js


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/canUseDOM.js
var canUseDOM = __webpack_require__(7268);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/requestIdleCallback/index.js

const _requestIdleCallback = function(cb, options) {
  return setTimeout(() => {
    const start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
const _cancelIdleCallback = function(id) {
  clearTimeout(id);
};
const isSupported = canUseDOM/* default */.Z && typeof window.requestIdleCallback !== "undefined";
const requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
const cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
var requestIdleCallback_default = requestIdleCallback;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/InteractionManager.js

const InteractionManager = {
  Events: {
    interactionStart: "interactionStart",
    interactionComplete: "interactionComplete"
  },
  /**
   * Schedule a function to run after all interactions have completed.
   */
  runAfterInteractions(task) {
    let handle;
    const promise = new Promise((resolve) => {
      handle = requestIdleCallback_default(() => {
        if (task) {
          resolve(task());
        } else {
          resolve();
        }
      });
    });
    return {
      then: promise.then.bind(promise),
      done: promise.then.bind(promise),
      cancel: () => {
        cancelIdleCallback(handle);
      }
    };
  },
  /**
   * Notify manager that an interaction has started.
   */
  createInteractionHandle() {
    return 1;
  },
  /**
   * Notify manager that an interaction has completed.
   */
  clearInteractionHandle(handle) {
  },
  addListener: () => {
  }
};
var InteractionManager_default = InteractionManager;

//# sourceMappingURL=InteractionManager.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/vendor/react-native/TouchHistoryMath/index.js
const TouchHistoryMath = {
  /**
   * This code is optimized and not intended to look beautiful. This allows
   * computing of touch centroids that have moved after `touchesChangedAfter`
   * timeStamp. You can compute the current centroid involving all touches
   * moves after `touchesChangedAfter`, or you can compute the previous
   * centroid of all touches that were moved after `touchesChangedAfter`.
   *
   * @param {TouchHistoryMath} touchHistory Standard Responder touch track
   * data.
   * @param {number} touchesChangedAfter timeStamp after which moved touches
   * are considered "actively moving" - not just "active".
   * @param {boolean} isXAxis Consider `x` dimension vs. `y` dimension.
   * @param {boolean} ofCurrent Compute current centroid for actively moving
   * touches vs. previous centroid of now actively moving touches.
   * @return {number} value of centroid in specified dimension.
   */
  centroidDimension: function(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
    const touchBank = touchHistory.touchBank;
    let total = 0;
    let count = 0;
    const oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;
    if (oneTouchData !== null) {
      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
        count = 1;
      }
    } else {
      for (let i = 0; i < touchBank.length; i++) {
        const touchTrack = touchBank[i];
        if (touchTrack !== null && touchTrack !== void 0 && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
          let toAdd;
          if (ofCurrent && isXAxis) {
            toAdd = touchTrack.currentPageX;
          } else if (ofCurrent && !isXAxis) {
            toAdd = touchTrack.currentPageY;
          } else if (!ofCurrent && isXAxis) {
            toAdd = touchTrack.previousPageX;
          } else {
            toAdd = touchTrack.previousPageY;
          }
          total += toAdd;
          count++;
        }
      }
    }
    return count > 0 ? total / count : TouchHistoryMath.noCentroid;
  },
  currentCentroidXOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      true,
      // isXAxis
      true
      // ofCurrent
    );
  },
  currentCentroidYOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      false,
      // isXAxis
      true
      // ofCurrent
    );
  },
  previousCentroidXOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      true,
      // isXAxis
      false
      // ofCurrent
    );
  },
  previousCentroidYOfTouchesChangedAfter: function(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      touchesChangedAfter,
      false,
      // isXAxis
      false
      // ofCurrent
    );
  },
  currentCentroidX: function(touchHistory) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      0,
      // touchesChangedAfter
      true,
      // isXAxis
      true
      // ofCurrent
    );
  },
  currentCentroidY: function(touchHistory) {
    return TouchHistoryMath.centroidDimension(
      touchHistory,
      0,
      // touchesChangedAfter
      false,
      // isXAxis
      true
      // ofCurrent
    );
  },
  noCentroid: -1
};
var TouchHistoryMath_default = TouchHistoryMath;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/vendor/react-native/PanResponder/index.js


const currentCentroidXOfTouchesChangedAfter = TouchHistoryMath_default.currentCentroidXOfTouchesChangedAfter;
const currentCentroidYOfTouchesChangedAfter = TouchHistoryMath_default.currentCentroidYOfTouchesChangedAfter;
const previousCentroidXOfTouchesChangedAfter = TouchHistoryMath_default.previousCentroidXOfTouchesChangedAfter;
const previousCentroidYOfTouchesChangedAfter = TouchHistoryMath_default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = TouchHistoryMath_default.currentCentroidX;
const currentCentroidY = TouchHistoryMath_default.currentCentroidY;
const PanResponder = {
  /**
   *
   * A graphical explanation of the touch data flow:
   *
   * +----------------------------+             +--------------------------------+
   * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
   * +----------------------------+             +----------+---------------------+
   * |Global store of touchHistory|             |Allocation-less math util       |
   * |including activeness, start |             |on touch history (centroids     |
   * |position, prev/cur position.|             |and multitouch movement etc)    |
   * |                            |             |                                |
   * +----^-----------------------+             +----^---------------------------+
   *      |                                          |
   *      | (records relevant history                |
   *      |  of touches relevant for                 |
   *      |  implementing higher level               |
   *      |  gestures)                               |
   *      |                                          |
   * +----+-----------------------+             +----|---------------------------+
   * | ResponderEventPlugin       |             |    |   Your App/Component      |
   * +----------------------------+             +----|---------------------------+
   * |Negotiates which view gets  | Low level   |    |             High level    |
   * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
   * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
   * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
   * +----------------------------+ attached to |  |         |     distance and  |
   *                                 each event |  +---------+     velocity.     |
   *                                            |                                |
   *                                            |                                |
   *                                            +--------------------------------+
   *
   *
   *
   * Gesture that calculates cumulative movement over time in a way that just
   * "does the right thing" for multiple touches. The "right thing" is very
   * nuanced. When moving two touches in opposite directions, the cumulative
   * distance is zero in each dimension. When two touches move in parallel five
   * pixels in the same direction, the cumulative distance is five, not ten. If
   * two touches start, one moves five in a direction, then stops and the other
   * touch moves fives in the same direction, the cumulative distance is ten.
   *
   * This logic requires a kind of processing of time "clusters" of touch events
   * so that two touch moves that essentially occur in parallel but move every
   * other frame respectively, are considered part of the same movement.
   *
   * Explanation of some of the non-obvious fields:
   *
   * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
   *   invalid. If a move event has been observed, `(moveX, moveY)` is the
   *   centroid of the most recently moved "cluster" of active touches.
   *   (Currently all move have the same timeStamp, but later we should add some
   *   threshold for what is considered to be "moving"). If a palm is
   *   accidentally counted as a touch, but a finger is moving greatly, the palm
   *   will move slightly, but we only want to count the single moving touch.
   * - x0/y0: Centroid location (non-cumulative) at the time of becoming
   *   responder.
   * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
   *   distance. Accounts for touch moves that are clustered together in time,
   *   moving the same direction. Only valid when currently responder (otherwise,
   *   it only represents the drag distance below the threshold).
   * - vx/vy: Velocity.
   */
  _initializeGestureState(gestureState) {
    gestureState.moveX = 0;
    gestureState.moveY = 0;
    gestureState.x0 = 0;
    gestureState.y0 = 0;
    gestureState.dx = 0;
    gestureState.dy = 0;
    gestureState.vx = 0;
    gestureState.vy = 0;
    gestureState.numberActiveTouches = 0;
    gestureState._accountsForMovesUpTo = 0;
  },
  /**
   * This is nuanced and is necessary. It is incorrect to continuously take all
   * active *and* recently moved touches, find the centroid, and track how that
   * result changes over time. Instead, we must take all recently moved
   * touches, and calculate how the centroid has changed just for those
   * recently moved touches, and append that change to an accumulator. This is
   * to (at least) handle the case where the user is moving three fingers, and
   * then one of the fingers stops but the other two continue.
   *
   * This is very different than taking all of the recently moved touches and
   * storing their centroid as `dx/dy`. For correctness, we must *accumulate
   * changes* in the centroid of recently moved touches.
   *
   * There is also some nuance with how we handle multiple moved touches in a
   * single event. With the way `ReactNativeEventEmitter` dispatches touches as
   * individual events, multiple touches generate two 'move' events, each of
   * them triggering `onResponderMove`. But with the way `PanResponder` works,
   * all of the gesture inference is performed on the first dispatch, since it
   * looks at all of the touches (even the ones for which there hasn't been a
   * native dispatch yet). Therefore, `PanResponder` does not call
   * `onResponderMove` passed the first dispatch. This diverges from the
   * typical responder callback pattern (without using `PanResponder`), but
   * avoids more dispatches than necessary.
   */
  _updateGestureStateOnMove(gestureState, touchHistory) {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
    gestureState.moveX = currentCentroidXOfTouchesChangedAfter(
      touchHistory,
      gestureState._accountsForMovesUpTo
    );
    gestureState.moveY = currentCentroidYOfTouchesChangedAfter(
      touchHistory,
      gestureState._accountsForMovesUpTo
    );
    const movedAfter = gestureState._accountsForMovesUpTo;
    const prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    const x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    const prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    const y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    const nextDX = gestureState.dx + (x - prevX);
    const nextDY = gestureState.dy + (y - prevY);
    const dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
    gestureState.vx = (nextDX - gestureState.dx) / dt;
    gestureState.vy = (nextDY - gestureState.dy) / dt;
    if (isNaN(gestureState.vy)) {
      debugger;
    }
    gestureState.dx = nextDX;
    gestureState.dy = nextDY;
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  /**
   * @param {object} config Enhanced versions of all of the responder callbacks
   * that provide not only the typical `ResponderSyntheticEvent`, but also the
   * `PanResponder` gesture state.  Simply replace the word `Responder` with
   * `PanResponder` in each of the typical `onResponder*` callbacks. For
   * example, the `config` object would look like:
   *
   *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onPanResponderReject: (e, gestureState) => {...}`
   *  - `onPanResponderGrant: (e, gestureState) => {...}`
   *  - `onPanResponderStart: (e, gestureState) => {...}`
   *  - `onPanResponderEnd: (e, gestureState) => {...}`
   *  - `onPanResponderRelease: (e, gestureState) => {...}`
   *  - `onPanResponderMove: (e, gestureState) => {...}`
   *  - `onPanResponderTerminate: (e, gestureState) => {...}`
   *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
   *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
   *
   *  In general, for events that have capture equivalents, we update the
   *  gestureState once in the capture phase and can use it in the bubble phase
   *  as well.
   *
   *  Be careful with onStartShould* callbacks. They only reflect updated
   *  `gestureState` for start/end events that bubble/capture to the Node.
   *  Once the node is the responder, you can rely on every start/end event
   *  being processed by the gesture and `gestureState` being updated
   *  accordingly. (numberActiveTouches) may not be totally accurate unless you
   *  are the responder.
   */
  create(config) {
    const interactionState = {
      handle: null,
      shouldCancelClick: false,
      timeout: null
    };
    const gestureState = {
      // Useful for debugging
      stateID: Math.random(),
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0,
      numberActiveTouches: 0,
      _accountsForMovesUpTo: 0
    };
    const panHandlers = {
      onStartShouldSetResponder(event) {
        return config.onStartShouldSetPanResponder == null ? false : config.onStartShouldSetPanResponder(event, gestureState);
      },
      onMoveShouldSetResponder(event) {
        return config.onMoveShouldSetPanResponder == null ? false : config.onMoveShouldSetPanResponder(event, gestureState);
      },
      onStartShouldSetResponderCapture(event) {
        if (event.nativeEvent.touches.length === 1) {
          PanResponder._initializeGestureState(gestureState);
        }
        gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches;
        return config.onStartShouldSetPanResponderCapture != null ? config.onStartShouldSetPanResponderCapture(event, gestureState) : false;
      },
      onMoveShouldSetResponderCapture(event) {
        const touchHistory = event.touchHistory;
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return false;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(event, gestureState) : false;
      },
      onResponderGrant(event) {
        if (!interactionState.handle) {
          interactionState.handle = InteractionManager.createInteractionHandle();
        }
        if (interactionState.timeout) {
          clearInteractionTimeout(interactionState);
        }
        interactionState.shouldCancelClick = true;
        gestureState.x0 = currentCentroidX(event.touchHistory);
        gestureState.y0 = currentCentroidY(event.touchHistory);
        gestureState.dx = 0;
        gestureState.dy = 0;
        if (config.onPanResponderGrant) {
          config.onPanResponderGrant(event, gestureState);
        }
        return config.onShouldBlockNativeResponder == null ? true : config.onShouldBlockNativeResponder(event, gestureState);
      },
      onResponderReject(event) {
        clearInteractionHandle(
          interactionState,
          // @ts-ignore
          config.onPanResponderReject,
          event,
          gestureState
        );
      },
      onResponderRelease(event) {
        clearInteractionHandle(
          interactionState,
          config.onPanResponderRelease,
          event,
          gestureState
        );
        setInteractionTimeout(interactionState);
        PanResponder._initializeGestureState(gestureState);
      },
      onResponderStart(event) {
        const touchHistory = event.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        if (config.onPanResponderStart) {
          config.onPanResponderStart(event, gestureState);
        }
      },
      onResponderMove(event) {
        const touchHistory = event.touchHistory;
        if (gestureState._accountsForMovesUpTo === touchHistory.mostRecentTimeStamp) {
          return;
        }
        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);
        if (config.onPanResponderMove) {
          config.onPanResponderMove(event, gestureState);
        }
      },
      onResponderEnd(event) {
        const touchHistory = event.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        clearInteractionHandle(
          interactionState,
          config.onPanResponderEnd,
          event,
          gestureState
        );
      },
      onResponderTerminate(event) {
        clearInteractionHandle(
          interactionState,
          // @ts-ignore
          config.onPanResponderTerminate,
          event,
          gestureState
        );
        setInteractionTimeout(interactionState);
        PanResponder._initializeGestureState(gestureState);
      },
      onResponderTerminationRequest(event) {
        return config.onPanResponderTerminationRequest == null ? true : config.onPanResponderTerminationRequest(event, gestureState);
      },
      // We do not want to trigger 'click' activated gestures or native behaviors
      // on any pan target that is under a mouse cursor when it is released.
      // Browsers will natively cancel 'click' events on a target if a non-mouse
      // active pointer moves.
      onClickCapture: (event) => {
        if (interactionState.shouldCancelClick === true) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    };
    return {
      panHandlers,
      getInteractionHandle() {
        return interactionState.handle;
      }
    };
  }
};
function clearInteractionHandle(interactionState, callback, event, gestureState) {
  if (interactionState.handle) {
    InteractionManager.clearInteractionHandle(interactionState.handle);
    interactionState.handle = null;
  }
  if (callback) {
    callback(event, gestureState);
  }
}
function clearInteractionTimeout(interactionState) {
  clearTimeout(interactionState.timeout);
}
function setInteractionTimeout(interactionState) {
  interactionState.timeout = setTimeout(() => {
    interactionState.shouldCancelClick = false;
  }, 250);
}
var PanResponder_default = PanResponder;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/PanResponder/index.js

var PanResponder_PanResponder_default = PanResponder_default;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/contexts.js

const ParentSheetContext = (0,external_react_.createContext)({
  zIndex: 1e5
});
const SheetInsideSheetContext = (0,external_react_.createContext)(null);

//# sourceMappingURL=contexts.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/helpers.js
function resisted(y, minY, maxOverflow = 25) {
  if (y < minY) {
    const past = minY - y;
    const pctPast = Math.min(maxOverflow, past) / maxOverflow;
    const diminishBy = 1.1 - Math.pow(0.1, pctPast);
    const extra = -diminishBy * maxOverflow;
    return minY + extra;
  }
  return y;
}

//# sourceMappingURL=helpers.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-event/dist/esm/useGet.js

const isWeb = "web" === "web";
const isClient = typeof window !== "undefined";
const useIsomorphicLayoutEffect = !isWeb || isClient ? external_react_.useLayoutEffect : external_react_.useEffect;
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = (0,external_react_.useRef)(initialValue ?? currentValue);
  useIsomorphicLayoutEffect(() => {
    curRef.current = currentValue;
  });
  return (0,external_react_.useCallback)(
    forwardToFunction ? (...args) => {
      var _a;
      return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
    } : () => curRef.current,
    []
  );
}

//# sourceMappingURL=useGet.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-event/dist/esm/useEvent.js

function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
const defaultValue = () => {
  throw new Error("Cannot call an event handler while rendering.");
};

//# sourceMappingURL=useEvent.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-event/dist/esm/index.js


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js


const emptyCallbackFn = (_) => _();
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition
}) {
  const [state, setState] = (0,external_react_.useState)(prop ?? defaultProp);
  const previous = (0,external_react_.useRef)(state);
  const propWins = strategy === "prop-wins" && prop !== void 0;
  const value = propWins ? prop : state;
  const onChangeCb = useEvent(onChange || idFn);
  const transitionFn = transition ? external_react_.startTransition : emptyCallbackFn;
  (0,external_react_.useEffect)(() => {
    if (prop === void 0)
      return;
    previous.current = prop;
    transitionFn(() => {
      setState(prop);
    });
  }, [prop]);
  (0,external_react_.useEffect)(() => {
    if (propWins)
      return;
    if (state !== previous.current) {
      previous.current = state;
      onChangeCb(state);
    }
  }, [onChangeCb, state, propWins]);
  const setter = useEvent((next) => {
    if (preventUpdate)
      return;
    if (propWins) {
      const nextValue = typeof next === "function" ? next(previous.current) : next;
      onChangeCb(nextValue);
    } else {
      transitionFn(() => {
        setState(next);
      });
    }
  });
  return [value, setter];
}
const idFn = () => {
};

//# sourceMappingURL=useControllableState.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/useSheetController.js

const useSheetController = () => {
  const controller = (0,external_react_.useContext)(SheetControllerContext);
  const isHidden = controller == null ? void 0 : controller.hidden;
  const isShowingNonSheet = isHidden && (controller == null ? void 0 : controller.open);
  return {
    controller,
    isHidden,
    isShowingNonSheet,
    disableDrag: controller == null ? void 0 : controller.disableDrag
  };
};
const SheetControllerContext = (0,external_react_.createContext)(
  null
);

//# sourceMappingURL=useSheetController.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/useSheetOpenState.js


const useSheetOpenState = (props) => {
  const { isHidden, controller } = useSheetController();
  const onOpenChangeInternal = (val) => {
    var _a, _b;
    (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val);
    (_b = props.onOpenChange) == null ? void 0 : _b.call(props, val);
  };
  const [open, setOpen] = useControllableState({
    prop: (controller == null ? void 0 : controller.open) ?? props.open,
    defaultProp: props.defaultOpen ?? false,
    onChange: onOpenChangeInternal,
    strategy: "most-recent-wins",
    transition: true
  });
  return {
    open,
    setOpen,
    isHidden,
    controller
  };
};

//# sourceMappingURL=useSheetOpenState.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-constant/dist/esm/index.js

function useConstant(fn) {
  if (typeof document === "undefined") {
    return (0,external_react_.useMemo)(() => fn(), []);
  }
  const ref = (0,external_react_.useRef)();
  if (!ref.current) {
    ref.current = { v: fn() };
  }
  return ref.current.v;
}

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/useSheetProviderProps.js




function useSheetProviderProps(props, state, options = {}) {
  const contentRef = external_react_default().useRef(null);
  const [frameSize, setFrameSize] = (0,external_react_.useState)(0);
  const snapPointsProp = props.snapPoints || [80];
  const snapPoints = (0,external_react_.useMemo)(
    () => props.dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(snapPointsProp), props.dismissOnSnapToBottom]
  );
  const [position_, setPositionImmediate] = useControllableState({
    prop: props.position,
    defaultProp: props.defaultPosition || (state.open ? 0 : -1),
    onChange: props.onPositionChange,
    strategy: "most-recent-wins",
    transition: true
  });
  const position = state.open === false ? -1 : position_;
  const { open } = state;
  const setPosition = (0,external_react_.useCallback)(
    (next) => {
      if (props.dismissOnSnapToBottom && next === snapPoints.length - 1) {
        state.setOpen(false);
      } else {
        setPositionImmediate(next);
      }
    },
    [props.dismissOnSnapToBottom, snapPoints.length, setPositionImmediate, state.setOpen]
  );
  if (false) {}
  if (open && props.dismissOnSnapToBottom && position === snapPoints.length - 1) {
    setPositionImmediate(0);
  }
  const shouldSetPositionOpen = open && position < 0;
  (0,external_react_.useEffect)(() => {
    if (shouldSetPositionOpen) {
      setPosition(0);
    }
  }, [setPosition, shouldSetPositionOpen]);
  const driver = (0,cjs.useAnimationDriver)();
  if (!driver) {
    throw new Error("Must set animations in tamagui.config.ts");
  }
  const scrollBridge = useConstant(() => ({
    enabled: false,
    y: 0,
    paneY: 0,
    paneMinY: 0,
    scrollStartY: -1,
    drag: () => {
    },
    release: () => {
    },
    scrollLock: false
  }));
  const removeScrollEnabled = props.forceRemoveScrollEnabled ?? (open && props.modal);
  const providerProps = {
    removeScrollEnabled,
    scrollBridge,
    modal: !!props.modal,
    open: state.open,
    setOpen: state.setOpen,
    hidden: !!state.isHidden,
    contentRef,
    frameSize,
    setFrameSize,
    dismissOnOverlayPress: props.dismissOnOverlayPress ?? true,
    dismissOnSnapToBottom: props.dismissOnSnapToBottom ?? false,
    onOverlayComponent: options.onOverlayComponent,
    scope: props.__scopeSheet,
    position,
    snapPoints,
    setPosition,
    setPositionImmediate,
    onlyShowFrame: false
  };
  return providerProps;
}

//# sourceMappingURL=useSheetProviderProps.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/SheetImplementationCustom.js














const SheetImplementationCustom = (0,cjs.themeable)(
  (0,external_react_.forwardRef)(function SheetImplementationCustom2(props, forwardedRef) {
    const parentSheet = (0,external_react_.useContext)(ParentSheetContext);
    const {
      animationConfig,
      modal = false,
      zIndex = parentSheet.zIndex + 1,
      moveOnKeyboardChange = false,
      portalProps
    } = props;
    const keyboardIsVisible = useKeyboardVisible();
    const state = useSheetOpenState(props);
    const [overlayComponent, setOverlayComponent] = (0,external_react_.useState)(null);
    const providerProps = useSheetProviderProps(props, state, {
      onOverlayComponent: setOverlayComponent
    });
    const { frameSize, setFrameSize, snapPoints, position, setPosition, scrollBridge } = providerProps;
    const { open, controller, isHidden } = state;
    const sheetRef = (0,external_react_.useRef)(null);
    const ref = (0,compose_refs/* useComposedRefs */.e)(forwardedRef, sheetRef);
    const [isShowingInnerSheet, setIsShowingInnerSheet] = (0,external_react_.useState)(false);
    const shouldHideParentSheet = !cjs.isWeb && modal && isShowingInnerSheet;
    const parentSheetContext = (0,external_react_.useContext)(SheetInsideSheetContext);
    const onInnerSheet = (0,external_react_.useCallback)((hasChild) => {
      setIsShowingInnerSheet(hasChild);
    }, []);
    const maxSnapPoint = snapPoints.reduce((prev, cur) => Math.max(prev, cur));
    const screenSize = frameSize / (maxSnapPoint / 100);
    const positions = (0,external_react_.useMemo)(
      () => snapPoints.map((point) => getPercentSize(point, screenSize)),
      [frameSize, snapPoints]
    );
    const driver = (0,cjs.useAnimationDriver)();
    const { useAnimatedNumber, useAnimatedNumberStyle, useAnimatedNumberReaction } = driver;
    const AnimatedView = driver["NumberView"] ?? driver.View;
    (0,cjs.useIsomorphicLayoutEffect)(() => {
      if (!(parentSheetContext && open))
        return;
      parentSheetContext(true);
      return () => {
        parentSheetContext(false);
      };
    }, [parentSheetContext, open]);
    const nextParentContext = (0,external_react_.useMemo)(
      () => ({
        zIndex
      }),
      [zIndex]
    );
    const animatedNumber = useAnimatedNumber(constants/* HIDDEN_SIZE */.dh);
    const at = (0,external_react_.useRef)(0);
    useAnimatedNumberReaction(
      {
        value: animatedNumber,
        hostRef: sheetRef
      },
      (value) => {
        if (!driver.isReactNative)
          return;
        at.current = value;
        scrollBridge.paneY = value;
      }
    );
    function stopSpring() {
      animatedNumber.stop();
      if (scrollBridge.onFinishAnimate) {
        scrollBridge.onFinishAnimate();
        scrollBridge.onFinishAnimate = void 0;
      }
    }
    const animateTo = (0,cjs.useEvent)((position2) => {
      const current = animatedNumber.getValue();
      if (isHidden && open)
        return;
      if (!current)
        return;
      if (frameSize === 0)
        return;
      const hiddenValue = frameSize === 0 ? constants/* HIDDEN_SIZE */.dh : screenSize;
      const toValue = isHidden || position2 === -1 ? hiddenValue : positions[position2];
      if (at.current === toValue)
        return;
      stopSpring();
      if (isHidden) {
        animatedNumber.setValue(toValue, {
          type: "timing",
          duration: 0
        });
        at.current = toValue;
        return;
      }
      const overshootClamping = at.current === constants/* HIDDEN_SIZE */.dh;
      animatedNumber.setValue(toValue, {
        ...animationConfig,
        type: "spring",
        overshootClamping
      });
    });
    (0,cjs.useIsomorphicLayoutEffect)(() => {
      animateTo(position);
    }, [isHidden, frameSize, position, animateTo]);
    const disableDrag = props.disableDrag ?? (controller == null ? void 0 : controller.disableDrag);
    const themeName = (0,cjs.useThemeName)();
    const panResponder = (0,external_react_.useMemo)(
      () => {
        if (disableDrag)
          return;
        if (!frameSize)
          return;
        if (isShowingInnerSheet)
          return;
        const minY = positions[0];
        scrollBridge.paneMinY = minY;
        let startY = at.current;
        function makeUnselectable(val) {
          if (!constants/* SHEET_HIDDEN_STYLESHEET */.Ey)
            return;
          if (!val) {
            constants/* SHEET_HIDDEN_STYLESHEET.innerText */.Ey.innerText = "";
          } else {
            constants/* SHEET_HIDDEN_STYLESHEET.innerText */.Ey.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }";
          }
        }
        const release = ({ vy, dragAt }) => {
          isExternalDrag = false;
          previouslyScrolling = false;
          makeUnselectable(false);
          const at2 = dragAt + startY;
          const end = at2 + frameSize * vy * 0.2;
          let closestPoint = 0;
          let dist = Infinity;
          for (let i = 0; i < positions.length; i++) {
            const position2 = positions[i];
            const curDist = end > position2 ? end - position2 : position2 - end;
            if (curDist < dist) {
              dist = curDist;
              closestPoint = i;
            }
          }
          setPosition(closestPoint);
          animateTo(closestPoint);
        };
        const finish = (_e, state2) => {
          release({
            vy: state2.vy,
            dragAt: state2.dy
          });
        };
        let previouslyScrolling = false;
        const onMoveShouldSet = (_e, { dy }) => {
          const isScrolled = scrollBridge.y !== 0;
          const isDraggingUp = dy < 0;
          const isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
          if (isScrolled) {
            previouslyScrolling = true;
            return false;
          }
          if (isNearTop) {
            if (!isScrolled && isDraggingUp) {
              return false;
            }
          }
          return Math.abs(dy) > 5;
        };
        const grant = () => {
          makeUnselectable(true);
          stopSpring();
          startY = at.current;
        };
        let isExternalDrag = false;
        scrollBridge.drag = (dy) => {
          if (!isExternalDrag) {
            isExternalDrag = true;
            grant();
          }
          const to = dy + startY;
          animatedNumber.setValue(resisted(to, minY), { type: "direct" });
        };
        scrollBridge.release = release;
        return PanResponder_PanResponder_default.create({
          onMoveShouldSetPanResponder: onMoveShouldSet,
          onPanResponderGrant: grant,
          onPanResponderMove: (_e, { dy }) => {
            const toFull = dy + startY;
            const to = resisted(toFull, minY);
            animatedNumber.setValue(to, { type: "direct" });
          },
          onPanResponderEnd: finish,
          onPanResponderTerminate: finish,
          onPanResponderRelease: finish
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]
    );
    const handleAnimationViewLayout = (0,external_react_.useCallback)(
      (e) => {
        var _a;
        let next = (_a = e.nativeEvent) == null ? void 0 : _a.layout.height;
        if (cjs.isWeb && cjs.isTouchable && !open) {
          next += 100;
        }
        if (!next)
          return;
        setFrameSize(next);
      },
      [keyboardIsVisible]
    );
    const animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
      "worklet";
      const translateY = frameSize === 0 ? constants/* HIDDEN_SIZE */.dh : val;
      return {
        transform: [{ translateY }]
      };
    });
    const sizeBeforeKeyboard = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(() => {
      if (cjs.isWeb || !moveOnKeyboardChange)
        return;
      const keyboardDidShowListener = Keyboard_default.addListener("keyboardDidShow", (e) => {
        if (sizeBeforeKeyboard.current !== null)
          return;
        sizeBeforeKeyboard.current = animatedNumber.getValue();
        animatedNumber.setValue(
          Math.max(animatedNumber.getValue() - e.endCoordinates.height, 0)
        );
      });
      const keyboardDidHideListener = Keyboard_default.addListener("keyboardDidHide", () => {
        if (sizeBeforeKeyboard.current === null)
          return;
        animatedNumber.setValue(sizeBeforeKeyboard.current);
        sizeBeforeKeyboard.current = null;
      });
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [moveOnKeyboardChange]);
    const [opacity, setOpacity] = (0,external_react_.useState)(open ? 1 : 0);
    if (open && opacity === 0) {
      setOpacity(1);
    }
    (0,external_react_.useEffect)(() => {
      if (!open) {
        const tm = setTimeout(() => {
          setOpacity(0);
        }, 400);
        return () => {
          clearTimeout(tm);
        };
      }
    }, [open]);
    const contents = /* @__PURE__ */ (0,jsx_runtime.jsx)(ParentSheetContext.Provider, { value: nextParentContext, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(SheetProvider, { ...providerProps, children: [
      shouldHideParentSheet ? null : overlayComponent,
      /* @__PURE__ */ (0,jsx_runtime.jsx)(
        AnimatedView,
        {
          ref,
          ...panResponder == null ? void 0 : panResponder.panHandlers,
          onLayout: handleAnimationViewLayout,
          pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
          animation: props.animation,
          style: [
            {
              position: "absolute",
              zIndex,
              width: "100%",
              height: `${maxSnapPoint}%`,
              opacity
            },
            animatedStyle
          ],
          children: props.children
        }
      )
    ] }) });
    const adaptContext = (0,external_react_.useContext)(esm/* AdaptParentContext */.fG);
    if (modal) {
      const modalContents = /* @__PURE__ */ (0,jsx_runtime.jsx)(dist_esm.Portal, { zIndex, ...portalProps, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(cjs.Theme, { forceClassName: true, name: themeName, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(esm/* AdaptParentContext.Provider */.fG.Provider, { value: adaptContext, children: contents }) }) });
      if (cjs.isWeb) {
        return modalContents;
      }
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(SheetInsideSheetContext.Provider, { value: onInnerSheet, children: modalContents });
    }
    return contents;
  })
);
function getPercentSize(point, screenSize) {
  if (!screenSize)
    return 0;
  if (point === void 0) {
    console.warn("No snapPoint");
    return 0;
  }
  const pct = point / 100;
  const next = Math.round(screenSize - pct * screenSize);
  return next;
}

//# sourceMappingURL=SheetImplementationCustom.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var Stacks = __webpack_require__(8939);
// EXTERNAL MODULE: ../../node_modules/@tamagui/web/dist/cjs/index.js
var dist_cjs = __webpack_require__(1444);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/UIManager/index.js + 3 modules
var UIManager = __webpack_require__(9680);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/index.js + 11 modules
var StyleSheet = __webpack_require__(2653);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/invariant.js
var invariant = __webpack_require__(5891);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/mergeRefs/index.js
var mergeRefs = __webpack_require__(5309);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/Dimensions/index.js

const dimensions = {
  window: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  },
  screen: {
    fontScale: 1,
    height: 0,
    scale: 1,
    width: 0
  }
};
const listeners = {};
let shouldInit = canUseDOM/* default */.Z;
function update() {
  if (!canUseDOM/* default */.Z) {
    return;
  }
  const win = window;
  const docEl = win.document.documentElement;
  dimensions.window = {
    fontScale: 1,
    height: docEl.clientHeight,
    scale: win.devicePixelRatio || 1,
    width: docEl.clientWidth
  };
  dimensions.screen = {
    fontScale: 1,
    height: win.screen.height,
    scale: win.devicePixelRatio || 1,
    width: win.screen.width
  };
}
function handleResize() {
  update();
  if (Array.isArray(listeners["change"])) {
    listeners["change"].forEach((handler) => handler(dimensions));
  }
}
class Dimensions {
  static get(dimension) {
    if (shouldInit) {
      shouldInit = false;
      update();
    }
    (0,invariant/* invariant */.k)(dimensions[dimension], `No dimension set for key ${dimension}`);
    return dimensions[dimension];
  }
  static set(initialDimensions) {
    if (initialDimensions) {
      if (canUseDOM/* default */.Z) {
        (0,invariant/* invariant */.k)(false, "Dimensions cannot be set in the browser");
      } else {
        if (initialDimensions.screen != null) {
          dimensions.screen = initialDimensions.screen;
        }
        if (initialDimensions.window != null) {
          dimensions.window = initialDimensions.window;
        }
      }
    }
  }
  static addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
    return {
      remove: () => {
        this.removeEventListener(type, handler);
      }
    };
  }
  static removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter((_handler) => _handler !== handler);
    }
  }
}
if (canUseDOM/* default */.Z) {
  window.addEventListener("resize", handleResize, false);
}

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-lite/dist/esm/View/index.js
var View = __webpack_require__(4718);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useMergeRefs/index.js
var useMergeRefs = __webpack_require__(6395);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/ScrollView/ScrollViewBase.js




function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },
        get y() {
          return e.target.scrollTop;
        }
      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },
        get width() {
          return e.target.scrollWidth;
        }
      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },
        get width() {
          return e.target.offsetWidth;
        }
      }
    },
    timeStamp: Date.now()
  };
}
function shouldEmitScrollEvent(lastTick, eventThrottle) {
  const timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}
const ScrollViewBase = external_react_.forwardRef((props, forwardedRef) => {
  const {
    onScroll,
    onTouchMove,
    onWheel,
    scrollEnabled = true,
    scrollEventThrottle = 0,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
    style,
    ...rest
  } = props;
  const scrollState = external_react_.useRef({ isScrolling: false, scrollLastTick: 0 });
  const scrollTimeout = external_react_.useRef(null);
  const scrollRef = external_react_.useRef(null);
  function createPreventableScrollHandler(handler) {
    return (e) => {
      if (scrollEnabled) {
        if (handler) {
          handler(e);
        }
      }
    };
  }
  function handleScroll(e) {
    e.stopPropagation();
    if (e.target === scrollRef.current) {
      e.persist();
      if (scrollTimeout.current != null) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        handleScrollEnd(e);
      }, 100);
      if (scrollState.current.isScrolling) {
        if (shouldEmitScrollEvent(
          scrollState.current.scrollLastTick,
          scrollEventThrottle
        )) {
          handleScrollTick(e);
        }
      } else {
        handleScrollStart(e);
      }
    }
  }
  function handleScrollStart(e) {
    scrollState.current.isScrolling = true;
    handleScrollTick(e);
  }
  function handleScrollTick(e) {
    scrollState.current.scrollLastTick = Date.now();
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  function handleScrollEnd(e) {
    scrollState.current.isScrolling = false;
    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }
  const hideScrollbar = showsHorizontalScrollIndicator === false || showsVerticalScrollIndicator === false;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    View/* default */.Z,
    {
      ...rest,
      onScroll: handleScroll,
      onTouchMove: createPreventableScrollHandler(onTouchMove),
      onWheel: createPreventableScrollHandler(onWheel),
      ref: (0,useMergeRefs/* useMergeRefs */.q)(scrollRef, forwardedRef),
      style: [
        style,
        !scrollEnabled && styles.scrollDisabled,
        hideScrollbar && styles.hideScrollbar
      ]
    }
  );
});
const styles = StyleSheet/* default.create */.Z.create({
  scrollDisabled: {
    overflowX: "hidden",
    overflowY: "hidden",
    touchAction: "none"
  },
  hideScrollbar: {
    scrollbarWidth: "none"
  }
});
var ScrollViewBase_default = ScrollViewBase;

//# sourceMappingURL=ScrollViewBase.js.map

;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/ScrollView/index.js






const emptyObject = {};
const IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
class ScrollView extends (external_react_default()).Component {
  constructor() {
    super(...arguments);
    this.keyboardWillOpenTo = null;
    this.additionalScrollOffset = 0;
    this.isTouching = false;
    this.lastMomentumScrollBeginTime = 0;
    this.lastMomentumScrollEndTime = 0;
    // Reset to false every time becomes responder. This is used to:
    // - Determine if the scroll view has been scrolled and therefore should
    // refuse to give up its responder lock.
    // - Determine if releasing should dismiss the keyboard when we are in
    // tap-to-dismiss mode (!this.props.keyboardShouldPersistTaps).
    this.observedScrollSinceBecomingResponder = false;
    this.becameResponderWhileAnimating = false;
    /**
     * This method should be used as the callback to onFocus in a TextInputs'
     * parent view. Note that any module using this mixin needs to return
     * the parent view's ref in getScrollViewRef() in order to use this method.
     * @param {any} nodeHandle The TextInput node handle
     * @param {number} additionalOffset The scroll view's top "contentInset".
     *        Default is 0.
     * @param {bool} preventNegativeScrolling Whether to allow pulling the content
     *        down to make it meet the keyboard's top. Default is false.
     */
    this.scrollResponderScrollNativeHandleToKeyboard = (nodeHandle, additionalOffset, preventNegativeScrollOffset) => {
      this.additionalScrollOffset = additionalOffset || 0;
      this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
      UIManager/* default.measureLayout */.Z.measureLayout(
        nodeHandle,
        this.options.getInnerViewNode(),
        this.scrollResponderTextInputFocusError,
        this.scrollResponderInputMeasureAndScrollToKeyboard
      );
    };
    /**
     * The calculations performed here assume the scroll view takes up the entire
     * screen - even if has some content inset. We then measure the offsets of the
     * keyboard, and compensate both for the scroll view's "contentInset".
     *
     * @param {number} left Position of input w.r.t. table view.
     * @param {number} top Position of input w.r.t. table view.
     * @param {number} width Width of the text input.
     * @param {number} height Height of the text input.
     */
    this.scrollResponderInputMeasureAndScrollToKeyboard = (left, top, width, height) => {
      let keyboardScreenY = Dimensions.get("window").height;
      if (this.keyboardWillOpenTo) {
        keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
      }
      let scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;
      if (this.preventNegativeScrollOffset) {
        scrollOffsetY = Math.max(0, scrollOffsetY);
      }
      this.scrollResponderScrollTo({ x: 0, y: scrollOffsetY, animated: true });
      this.additionalOffset = 0;
      this.preventNegativeScrollOffset = false;
    };
  }
  flashScrollIndicators() {
    this.scrollResponderFlashScrollIndicators();
  }
  /**
   * Returns a reference to the underlying scroll responder, which supports
   * operations like `scrollTo`. All ScrollView-like components should
   * implement this method so that they can be composed while providing access
   * to the underlying scroll responder's methods.
   */
  getScrollResponder() {
    return this.mixin;
  }
  getScrollableNode() {
    return this._scrollNodeRef;
  }
  getInnerViewRef() {
    return this._innerViewRef;
  }
  getInnerViewNode() {
    return this._innerViewRef;
  }
  getNativeScrollRef() {
    return this._scrollNodeRef;
  }
  /**
   * Scrolls to a given x, y offset, either immediately or with a smooth animation.
   * Syntax:
   *
   * scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  scrollTo(y, x, animated) {
    if (typeof y === "number") {
      console.warn(
        "`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead."
      );
    } else {
      ;
      ({ x, y, animated } = y || emptyObject);
    }
    this.getScrollResponder().scrollResponderScrollTo({
      x: x || 0,
      y: y || 0,
      animated: animated !== false
    });
  }
  /**
   * If this is a vertical ScrollView scrolls to the bottom.
   * If this is a horizontal ScrollView scrolls to the right.
   *
   * Use `scrollToEnd({ animated: true })` for smooth animated scrolling,
   * `scrollToEnd({ animated: false })` for immediate scrolling.
   * If no options are passed, `animated` defaults to true.
   */
  scrollToEnd(options) {
    const animated = (options && options.animated) !== false;
    const { horizontal } = this.props;
    const scrollResponder = this.getScrollResponder();
    const scrollResponderNode = this._scrollNodeRef;
    const x = horizontal ? scrollResponderNode.scrollWidth : 0;
    const y = horizontal ? 0 : scrollResponderNode.scrollHeight;
    scrollResponder.scrollResponderScrollTo({ x, y, animated });
  }
  render() {
    const {
      contentContainerStyle,
      horizontal,
      onContentSizeChange,
      refreshControl,
      stickyHeaderIndices,
      pagingEnabled,
      /* eslint-disable */
      forwardedRef,
      keyboardDismissMode,
      onScroll,
      centerContent,
      /* eslint-enable */
      ...other
    } = this.props;
    if (false) {}
    let contentSizeChangeProps = {};
    if (onContentSizeChange) {
      contentSizeChangeProps = {
        onLayout: this._handleContentOnLayout.bind(this)
      };
    }
    const hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices);
    const children = hasStickyHeaderIndices || pagingEnabled ? external_react_default().Children.map(this.props.children, (child, i) => {
      const isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
      if (child != null && (isSticky || pagingEnabled)) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(
          View/* default */.Z,
          {
            style: StyleSheet/* default.compose */.Z.compose(
              isSticky && ScrollView_styles.stickyHeader,
              pagingEnabled && ScrollView_styles.pagingEnabledChild
            ),
            children: child
          }
        );
      } else {
        return child;
      }
    }) : this.props.children;
    const contentContainer = /* @__PURE__ */ (0,jsx_runtime.jsx)(
      View/* default */.Z,
      {
        ...contentSizeChangeProps,
        collapsable: false,
        ref: this._setInnerViewRef.bind(this),
        style: [
          horizontal && ScrollView_styles.contentContainerHorizontal,
          centerContent && ScrollView_styles.contentContainerCenterContent,
          contentContainerStyle
        ],
        children
      }
    );
    const baseStyle = horizontal ? ScrollView_styles.baseHorizontal : ScrollView_styles.baseVertical;
    const pagingEnabledStyle = horizontal ? ScrollView_styles.pagingEnabledHorizontal : ScrollView_styles.pagingEnabledVertical;
    const props = {
      ...other,
      style: [baseStyle, pagingEnabled && pagingEnabledStyle, this.props.style],
      onTouchStart: this.scrollResponderHandleTouchStart.bind(this),
      onTouchMove: this.scrollResponderHandleTouchMove.bind(this),
      onTouchEnd: this.scrollResponderHandleTouchEnd.bind(this),
      onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag.bind(this),
      onScrollEndDrag: this.scrollResponderHandleScrollEndDrag.bind(this),
      onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin.bind(this),
      onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd.bind(this),
      onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder.bind(this),
      onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture.bind(this),
      onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder.bind(this),
      onScroll: this._handleScroll.bind(this),
      onResponderGrant: this.scrollResponderHandleResponderGrant.bind(this),
      onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest.bind(this),
      onResponderRelease: this.scrollResponderHandleResponderRelease.bind(this),
      onResponderReject: this.scrollResponderHandleResponderReject.bind(this)
    };
    const ScrollViewClass = ScrollViewBase_default;
    (0,invariant/* invariant */.k)(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
    const scrollView = /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollViewClass, { ...props, ref: this._setScrollNodeRef.bind(this), children: contentContainer });
    if (refreshControl) {
      return external_react_default().cloneElement(refreshControl, { style: props.style }, scrollView);
    }
    return scrollView;
  }
  _handleContentOnLayout(e) {
    const { width, height } = e.nativeEvent.layout;
    this.props.onContentSizeChange(width, height);
  }
  _handleScroll(e) {
    if (false) {}
    if (this.props.keyboardDismissMode === "on-drag") {
      dismissKeyboard_default();
    }
    this.scrollResponderHandleScroll(e);
  }
  _setInnerViewRef(node) {
    this._innerViewRef = node;
  }
  _setScrollNodeRef(node) {
    this._scrollNodeRef = node;
    if (node != null) {
      node.getScrollResponder = this.getScrollResponder;
      node.getInnerViewNode = this.getInnerViewNode;
      node.getInnerViewRef = this.getInnerViewRef;
      node.getNativeScrollRef = this.getNativeScrollRef;
      node.getScrollableNode = this.getScrollableNode;
      node.scrollTo = this.scrollTo;
      node.scrollToEnd = this.scrollToEnd;
      node.flashScrollIndicators = this.flashScrollIndicators;
      node.scrollResponderZoomTo = this.scrollResponderZoomTo;
      node.scrollResponderScrollNativeHandleToKeyboard = this.scrollResponderScrollNativeHandleToKeyboard;
    }
    const ref = (0,mergeRefs/* mergeRefs */.l)(this.props.forwardedRef);
    ref(node);
  }
  /**
   * Invoke this from an `onScroll` event.
   */
  scrollResponderHandleScrollShouldSetResponder() {
    return this.isTouching;
  }
  /**
   * Merely touch starting is not sufficient for a scroll view to become the
   * responder. Being the "responder" means that the very next touch move/end
   * event will result in an action/movement.
   *
   * Invoke this from an `onStartShouldSetResponder` event.
   *
   * `onStartShouldSetResponder` is used when the next move/end will trigger
   * some UI movement/action, but when you want to yield priority to views
   * nested inside of the view.
   *
   * There may be some cases where scroll views actually should return `true`
   * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
   * that gives priority to nested views.
   *
   * - If a single tap on the scroll view triggers an action such as
   *   recentering a map style view yet wants to give priority to interaction
   *   views inside (such as dropped pins or labels), then we would return true
   *   from this method when there is a single touch.
   *
   * - Similar to the previous case, if a two finger "tap" should trigger a
   *   zoom, we would check the `touches` count, and if `>= 2`, we would return
   *   true.
   *
   */
  scrollResponderHandleStartShouldSetResponder() {
    return false;
  }
  /**
   * There are times when the scroll view wants to become the responder
   * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
   * that *doesn't* give priority to nested views (hence the capture phase):
   *
   * - Currently animating.
   * - Tapping anywhere that is not the focused input, while the keyboard is
   *   up (which should dismiss the keyboard).
   *
   * Invoke this from an `onStartShouldSetResponderCapture` event.
   */
  scrollResponderHandleStartShouldSetResponderCapture(e) {
    return this.scrollResponderIsAnimating();
  }
  /**
   * Invoke this from an `onResponderReject` event.
   *
   * Some other element is not yielding its role as responder. Normally, we'd
   * just disable the `UIScrollView`, but a touch has already began on it, the
   * `UIScrollView` will not accept being disabled after that. The easiest
   * solution for now is to accept the limitation of disallowing this
   * altogether. To improve this, find a way to disable the `UIScrollView` after
   * a touch has already started.
   */
  scrollResponderHandleResponderReject() {
    (0,invariant/* warning */.K)(false, "ScrollView doesn't take rejection well - scrolls anyway");
  }
  /**
   * We will allow the scroll view to give up its lock iff it acquired the lock
   * during an animation. This is a very useful default that happens to satisfy
   * many common user experiences.
   *
   * - Stop a scroll on the left edge, then turn that into an outer view's
   *   backswipe.
   * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
   *   view dismiss.
   * - However, without catching the scroll view mid-bounce (while it is
   *   motionless), if you drag far enough for the scroll view to become
   *   responder (and therefore drag the scroll view a bit), any backswipe
   *   navigation of a swipe gesture higher in the view hierarchy, should be
   *   rejected.
   */
  scrollResponderHandleTerminationRequest() {
    return !this.observedScrollSinceBecomingResponder;
  }
  /**
   * Invoke this from an `onTouchEnd` event.
   *
   * @param {SyntheticEvent} e Event.
   */
  scrollResponderHandleTouchEnd(e) {
    const nativeEvent = e.nativeEvent;
    this.isTouching = nativeEvent.touches.length !== 0;
    this.props.onTouchEnd && this.props.onTouchEnd(e);
  }
  /**
   * Invoke this from an `onResponderRelease` event.
   */
  scrollResponderHandleResponderRelease(e) {
    this.props.onResponderRelease && this.props.onResponderRelease(e);
    const currentlyFocusedTextInput = TextInputState/* default.currentlyFocusedField */.Z.currentlyFocusedField();
    if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating) {
      this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
      TextInputState/* default.blurTextInput */.Z.blurTextInput(currentlyFocusedTextInput);
    }
  }
  scrollResponderHandleScroll(e) {
    this.observedScrollSinceBecomingResponder = true;
    this.props.onScroll && this.props.onScroll(e);
  }
  /**
   * Invoke this from an `onResponderGrant` event.
   */
  scrollResponderHandleResponderGrant(e) {
    this.observedScrollSinceBecomingResponder = false;
    this.props.onResponderGrant && this.props.onResponderGrant(e);
    this.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
  }
  /**
   * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
   * animation, and there's not an easy way to distinguish a drag vs. stopping
   * momentum.
   *
   * Invoke this from an `onScrollBeginDrag` event.
   */
  scrollResponderHandleScrollBeginDrag(e) {
    this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
  }
  /**
   * Invoke this from an `onScrollEndDrag` event.
   */
  scrollResponderHandleScrollEndDrag(e) {
    this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
  }
  /**
   * Invoke this from an `onMomentumScrollBegin` event.
   */
  scrollResponderHandleMomentumScrollBegin(e) {
    this.lastMomentumScrollBeginTime = Date.now();
    this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
  }
  /**
   * Invoke this from an `onMomentumScrollEnd` event.
   */
  scrollResponderHandleMomentumScrollEnd(e) {
    this.lastMomentumScrollEndTime = Date.now();
    this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
  }
  /**
   * Invoke this from an `onTouchStart` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  scrollResponderHandleTouchStart(e) {
    this.isTouching = true;
    this.props.onTouchStart && this.props.onTouchStart(e);
  }
  /**
   * Invoke this from an `onTouchMove` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {SyntheticEvent} e Touch Start event.
   */
  scrollResponderHandleTouchMove(e) {
    this.props.onTouchMove && this.props.onTouchMove(e);
  }
  /**
   * A helper function for this class that lets us quickly determine if the
   * view is currently animating. This is particularly useful to know when
   * a touch has just started or ended.
   */
  scrollResponderIsAnimating() {
    const now = Date.now();
    const timeSinceLastMomentumScrollEnd = now - this.lastMomentumScrollEndTime;
    const isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.lastMomentumScrollEndTime < this.lastMomentumScrollBeginTime;
    return isAnimating;
  }
  /**
   * A helper function to scroll to a specific point in the scrollview.
   * This is currently used to help focus on child textviews, but can also
   * be used to quickly scroll to any element we want to focus. Syntax:
   *
   * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  scrollResponderScrollTo(x, y, animated) {
    if (typeof x === "number") {
      console.warn(
        "`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead."
      );
    } else {
      ;
      ({ x, y, animated } = x || emptyObject);
    }
    const node = this.options.getScrollableNode();
    const left = x || 0;
    const top = y || 0;
    if (typeof node.scroll === "function") {
      node.scroll({ top, left, behavior: !animated ? "auto" : "smooth" });
    } else {
      node.scrollLeft = left;
      node.scrollTop = top;
    }
  }
  /**
   * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
   * {x: number; y: number; width: number; height: number; animated: boolean = true}
   *
   * @platform ios
   */
  scrollResponderZoomTo(rect, animated) {
    if (Platform/* default.OS */.Z.OS !== "ios") {
      (0,invariant/* invariant */.k)("zoomToRect is not implemented");
    }
  }
  /**
   * Displays the scroll indicators momentarily.
   */
  scrollResponderFlashScrollIndicators() {
  }
  scrollResponderTextInputFocusError(e) {
    console.error("Error measuring text field: ", e);
  }
  /**
   * Warning, this may be called several times for a single keyboard opening.
   * It's best to store the information in this method and then take any action
   * at a later point (either in `keyboardDidShow` or other).
   *
   * Here's the order that events occur in:
   * - focus
   * - willShow {startCoordinates, endCoordinates} several times
   * - didShow several times
   * - blur
   * - willHide {startCoordinates, endCoordinates} several times
   * - didHide several times
   *
   * The `ScrollResponder` providesModule callbacks for each of these events.
   * Even though any user could have easily listened to keyboard events
   * themselves, using these `props` callbacks ensures that ordering of events
   * is consistent - and not dependent on the order that the keyboard events are
   * subscribed to. This matters when telling the scroll view to scroll to where
   * the keyboard is headed - the scroll responder better have been notified of
   * the keyboard destination before being instructed to scroll to where the
   * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
   * will work.
   *
   * WARNING: These callbacks will fire even if a keyboard is displayed in a
   * different navigation pane. Filter out the events to determine if they are
   * relevant to you. (For example, only if you receive these callbacks after
   * you had explicitly focused a node etc).
   */
  scrollResponderKeyboardWillShow(e) {
    this.keyboardWillOpenTo = e;
    this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
  }
  scrollResponderKeyboardWillHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
  }
  scrollResponderKeyboardDidShow(e) {
    if (e) {
      this.keyboardWillOpenTo = e;
    }
    this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
  }
  scrollResponderKeyboardDidHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
  }
}
const commonStyle = {
  flexGrow: 1,
  flexShrink: 1,
  // Enable hardware compositing in modern browsers.
  // Creates a new layer with its own backing surface that can significantly
  // improve scroll performance.
  transform: [{ translateZ: 0 }],
  // iOS native scrolling
  WebkitOverflowScrolling: "touch"
};
const ScrollView_styles = StyleSheet/* default.create */.Z.create({
  baseVertical: {
    ...commonStyle,
    flexDirection: "column",
    overflowX: "hidden",
    overflowY: "auto"
  },
  baseHorizontal: {
    ...commonStyle,
    flexDirection: "row",
    overflowX: "auto",
    overflowY: "hidden"
  },
  contentContainerHorizontal: {
    flexDirection: "row"
  },
  contentContainerCenterContent: {
    justifyContent: "center",
    flexGrow: 1
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  pagingEnabledHorizontal: {
    scrollSnapType: "x mandatory"
  },
  pagingEnabledVertical: {
    scrollSnapType: "y mandatory"
  },
  pagingEnabledChild: {
    scrollSnapAlign: "start"
  }
});
const ForwardedScrollView = external_react_default().forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollView, { ...props, forwardedRef });
});
ForwardedScrollView.displayName = "ScrollView";
var ScrollView_default = ForwardedScrollView;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/scroll-view/dist/esm/ScrollView.js



(0,dist_cjs.setupReactNative)({
  ScrollView: ScrollView_default
});
const ScrollView_ScrollView = (0,dist_cjs.styled)(ScrollView_default, {
  name: "ScrollView",
  scrollEnabled: true,
  variants: {
    fullscreen: {
      true: Stacks/* fullscreenStyle */.Xu
    }
  }
});

//# sourceMappingURL=ScrollView.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js





const SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
const SheetScrollView = (0,external_react_.forwardRef)(
  ({ __scopeSheet, children, ...props }, ref) => {
    const { scrollBridge, position, snapPoints, frameSize, open } = useSheetContext(
      SHEET_SCROLL_VIEW_NAME,
      __scopeSheet
    );
    const scrollRef = (0,external_react_.useRef)(null);
    const percentOpened = snapPoints[position] ?? 0;
    const [percentToPadBottom, setPercentToPadBottom] = (0,external_react_.useState)(0);
    const next = 100 - percentOpened;
    if (open && next !== percentToPadBottom) {
      setPercentToPadBottom(next);
    }
    const state = (0,external_react_.useRef)({
      lastPageY: 0,
      dragAt: 0,
      dys: [],
      // store a few recent dys to get velocity on release
      isScrolling: false,
      isDragging: false
    });
    const release = () => {
      if (!state.current.isDragging) {
        return;
      }
      state.current.isDragging = false;
      scrollBridge.scrollStartY = -1;
      state.current.isScrolling = false;
      let vy = 0;
      if (state.current.dys.length) {
        const recentDys = state.current.dys.slice(-10);
        const dist = recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0;
        const avgDy = dist / recentDys.length;
        vy = avgDy * 0.04;
      }
      state.current.dys = [];
      scrollBridge.release({
        dragAt: state.current.dragAt,
        vy
      });
    };
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      ScrollView_ScrollView,
      {
        ref: (0,cjs.composeRefs)(scrollRef, ref),
        flex: 1,
        scrollEventThrottle: 8,
        onScroll: (e) => {
          const { y } = e.nativeEvent.contentOffset;
          scrollBridge.y = y;
          if (y > 0) {
            scrollBridge.scrollStartY = -1;
          }
        },
        onStartShouldSetResponder: () => {
          scrollBridge.scrollStartY = -1;
          state.current.isDragging = true;
          return true;
        },
        onMoveShouldSetResponder: () => false,
        onResponderRelease: release,
        className: "_ovs-contain",
        ...props,
        children: [
          (0,external_react_.useMemo)(() => children, [children]),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(cjs.Stack, { height: percentToPadBottom / 100 * frameSize, width: 0 })
        ]
      }
    );
  }
);

//# sourceMappingURL=SheetScrollView.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/sheet/dist/esm/createSheet.js












function createSheet({ Handle, Frame, Overlay }) {
  const SheetHandle = Handle.extractable(
    ({ __scopeSheet, ...props }) => {
      const context = useSheetContext(constants/* SHEET_HANDLE_NAME */.r_, __scopeSheet);
      if (context.onlyShowFrame) {
        return null;
      }
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Handle,
        {
          onPress: () => {
            const max = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
            const nextPos = (context.position + 1) % max;
            context.setPosition(nextPos);
          },
          open: context.open,
          ...props
        }
      );
    }
  );
  const SheetOverlay = Overlay.extractable(
    (propsIn) => {
      const { __scopeSheet, ...props } = propsIn;
      const context = useSheetContext(constants/* SHEET_OVERLAY_NAME */._y, __scopeSheet);
      const element = (0,external_react_.useMemo)(
        () => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Overlay,
          {
            open: context.open && !context.hidden,
            ...props,
            onPress: (0,cjs.mergeEvent)(
              props.onPress,
              context.dismissOnOverlayPress ? () => {
                context.setOpen(false);
              } : void 0
            )
          }
        ),
        [
          context.open,
          props,
          context.hidden,
          props.onPress,
          context.dismissOnOverlayPress
        ]
      );
      (0,external_react_.useLayoutEffect)(() => {
        var _a;
        (_a = context.onOverlayComponent) == null ? void 0 : _a.call(context, element);
      }, [element]);
      if (context.onlyShowFrame) {
        return null;
      }
      return null;
    }
  );
  const SheetFrame = Frame.extractable(
    (0,external_react_.forwardRef)(
      ({
        __scopeSheet,
        children,
        ...props
      }, forwardedRef) => {
        const context = useSheetContext(constants/* SHEET_NAME */.BG, __scopeSheet);
        const composedContentRef = (0,compose_refs/* useComposedRefs */.e)(forwardedRef, context.contentRef);
        return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            RemoveScroll,
            {
              forwardProps: true,
              enabled: context.removeScrollEnabled,
              allowPinchZoom: true,
              shards: [context.contentRef],
              removeScrollBar: false,
              children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Frame, { ref: composedContentRef, ...props, children })
            }
          ),
          !props.disableHideBottomOverflow && /* @__PURE__ */ (0,jsx_runtime.jsx)(
            Frame,
            {
              ...props,
              children: null,
              position: "absolute",
              bottom: 0,
              maxHeight: 300,
              left: 0,
              right: 0,
              borderRadius: 0,
              shadowOpacity: 0
            }
          )
        ] });
      }
    )
  );
  const Sheet = (0,external_react_.forwardRef)(function Sheet2(props, ref) {
    const hydrated = (0,cjs.useDidFinishSSR)();
    const { isShowingNonSheet } = useSheetController();
    let SheetImplementation = SheetImplementationCustom;
    if (props.native && Platform/* default.OS */.Z.OS === "ios") {
      if (false) {}
    }
    if (isShowingNonSheet || !hydrated) {
      return null;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(SheetImplementation, { ref, ...props });
  });
  const components = {
    Frame: SheetFrame,
    Overlay: SheetOverlay,
    Handle: SheetHandle,
    ScrollView: SheetScrollView
  };
  const Controlled = (0,cjs.withStaticProperties)(Sheet, components);
  return (0,cjs.withStaticProperties)(Sheet, {
    ...components,
    Controlled
  });
}

//# sourceMappingURL=createSheet.js.map


/***/ }),

/***/ 8198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _Sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4949);
/* harmony reexport (checked) */ if(__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__, "H1")) __webpack_require__.d(__webpack_exports__, { "H1": function() { return _Sheet__WEBPACK_IMPORTED_MODULE_0__.H1; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__, "XStack")) __webpack_require__.d(__webpack_exports__, { "XStack": function() { return _Sheet__WEBPACK_IMPORTED_MODULE_0__.XStack; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_Sheet__WEBPACK_IMPORTED_MODULE_0__, "YStack")) __webpack_require__.d(__webpack_exports__, { "YStack": function() { return _Sheet__WEBPACK_IMPORTED_MODULE_0__.YStack; } });







//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9970:
/***/ (() => {

//# sourceMappingURL=types.js.map


/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ ThemeableStack)
});

// UNUSED EXPORTS: themeableVariants

// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
// EXTERNAL MODULE: ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var Stacks = __webpack_require__(8939);
// EXTERNAL MODULE: ../../node_modules/@tamagui/stacks/dist/esm/getElevation.js
var getElevation = __webpack_require__(5371);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/stacks/dist/esm/variants.js

const elevate = {
  true: (_, extras) => {
    return (0,getElevation/* getElevation */.y)(extras.props["size"], extras);
  }
};
const bordered = (val, { props }) => {
  return {
    // TODO size it with size in '...size'
    borderWidth: typeof val === "number" ? val : 1,
    borderColor: "$borderColor",
    ...props.hoverTheme && {
      hoverStyle: {
        borderColor: "$borderColorHover"
      }
    },
    ...props.pressTheme && {
      pressStyle: {
        borderColor: "$borderColorPress"
      }
    },
    ...props.focusTheme && {
      focusStyle: {
        borderColor: "$borderColorFocus"
      }
    }
  };
};
const padded = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      padding: tokens.space[props.size] || tokens.space["$true"]
    };
  }
};
const radiused = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      borderRadius: tokens.radius[props.size] || tokens.radius["$true"]
    };
  }
};
const circular = {
  true: (_, { props, tokens }) => {
    const size = tokens.size[props.size || "$true"];
    return {
      width: size,
      height: size,
      maxWidth: size,
      maxHeight: size,
      minWidth: size,
      minHeight: size,
      borderRadius: 1e5,
      padding: 0
    };
  }
};
const hoverTheme = {
  true: {
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      borderColor: "$borderColorHover"
    }
  },
  false: {}
};
const pressTheme = {
  true: {
    cursor: "pointer",
    pressStyle: {
      backgroundColor: "$backgroundPress",
      borderColor: "$borderColorPress"
    }
  },
  false: {}
};
const focusTheme = {
  true: {
    focusStyle: {
      backgroundColor: "$backgroundFocus",
      borderColor: "$borderColorFocus"
    }
  },
  false: {}
};

//# sourceMappingURL=variants.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js



const chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent"
};
const themeableVariants = {
  backgrounded: {
    true: {
      backgroundColor: "$background"
    }
  },
  radiused: radiused,
  hoverTheme: hoverTheme,
  pressTheme: pressTheme,
  focusTheme: focusTheme,
  circular: circular,
  padded: padded,
  elevate: elevate,
  bordered: bordered,
  transparent: {
    true: {
      backgroundColor: "transparent"
    }
  },
  chromeless: {
    true: chromelessStyle,
    all: {
      ...chromelessStyle,
      hoverStyle: chromelessStyle,
      pressStyle: chromelessStyle,
      focusStyle: chromelessStyle
    }
  }
};
const ThemeableStack = (0,cjs.styled)(Stacks/* YStack */.FA, {
  variants: themeableVariants
});

//# sourceMappingURL=ThemeableStack.js.map


/***/ }),

/***/ 9932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* reexport safe */ _Stacks__WEBPACK_IMPORTED_MODULE_0__.FA),
/* harmony export */   "sL": () => (/* reexport safe */ _Stacks__WEBPACK_IMPORTED_MODULE_0__.sL)
/* harmony export */ });
/* harmony import */ var _Stacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8939);



//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SizableText)
/* harmony export */ });
/* harmony import */ var _tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3862);
/* harmony import */ var _tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tamagui_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1444);
/* harmony import */ var _tamagui_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tamagui_web__WEBPACK_IMPORTED_MODULE_1__);


const SizableText = (0,_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.styled)(_tamagui_web__WEBPACK_IMPORTED_MODULE_1__.Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    size: _tamagui_get_font_sized__WEBPACK_IMPORTED_MODULE_0__.getFontSized
  },
  defaultVariants: {
    size: "$true"
  }
});

//# sourceMappingURL=SizableText.js.map


/***/ }),

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H1": () => (/* reexport */ H1)
});

// UNUSED EXPORTS: H2, H3, H4, H5, H6, Heading, Paragraph, SizableText, wrapChildrenInText

// EXTERNAL MODULE: ../../node_modules/@tamagui/web/dist/cjs/index.js
var cjs = __webpack_require__(1444);
// EXTERNAL MODULE: ../../node_modules/@tamagui/text/dist/esm/SizableText.js
var SizableText = __webpack_require__(6003);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/text/dist/esm/Paragraph.js


const Paragraph = (0,cjs.styled)(SizableText/* SizableText */.J, {
  name: "Paragraph",
  tag: "p",
  userSelect: "auto",
  color: "$color",
  size: "$true"
});

//# sourceMappingURL=Paragraph.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/text/dist/esm/Headings.js


const Heading = (0,cjs.styled)(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0
});
const H1 = (0,cjs.styled)(Heading, {
  name: "H1",
  tag: "h1",
  size: "$10"
});
const H2 = (0,cjs.styled)(Heading, {
  name: "H2",
  tag: "h2",
  size: "$9"
});
const H3 = (0,cjs.styled)(Heading, {
  name: "H3",
  tag: "h3",
  size: "$8"
});
const H4 = (0,cjs.styled)(Heading, {
  name: "H4",
  tag: "h4",
  size: "$7"
});
const H5 = (0,cjs.styled)(Heading, {
  name: "H5",
  tag: "h5",
  size: "$6"
});
const H6 = (0,cjs.styled)(Heading, {
  name: "H6",
  tag: "h6",
  size: "$5"
});

//# sourceMappingURL=Headings.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/text/dist/esm/index.js





//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports debounce, useDebounce, useDebounceValue */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function debounce(func, wait, leading) {
  let timeout;
  let isCancelled = false;
  function debounced() {
    isCancelled = false;
    const context = this;
    const args = arguments;
    if (leading && !timeout) {
      func.apply(context, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!(leading || isCancelled)) {
        func.apply(context, args);
      }
      isCancelled = false;
    }, wait);
  }
  debounced.cancel = () => {
    isCancelled = true;
  };
  return debounced;
}
const defaultOpts = { leading: false };
function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
  const dbEffect = useRef(null);
  useEffect(() => {
    return () => {
      var _a;
      (_a = dbEffect.current) == null ? void 0 : _a.cancel();
    };
  }, []);
  return useMemo(() => {
    dbEffect.current = debounce(fn, wait, options.leading);
    return dbEffect.current;
  }, [options.leading, ...mountArgs]);
}
function useDebounceValue(val, amt = 0) {
  const [state, setState] = useState(val);
  useEffect(() => {
    const tm = setTimeout(() => {
      setState((prev) => {
        if (prev === val)
          return prev;
        return val;
      });
    }, amt);
    return () => {
      clearTimeout(tm);
    };
  }, [val]);
  return state;
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports isServerSide, useForceUpdate */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const isServerSide =  true && typeof window === "undefined";
const idFn = () => {
};
function useForceUpdate() {
  return isServerSide ? idFn : useReducer((x) => x + 1, 0)[1];
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7629:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: configureInitialWindowDimensions, useWindowDimensions

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/constants/dist/esm/index.js

const isWeb = "web" === "web";
const isWindowDefined = typeof window !== "undefined";
const isServer = isWeb && !isWindowDefined;
const isClient = isWeb && isWindowDefined;
const isRSC = process.env.ENABLE_RSC;
const idFn = () => {
};
const esm_useIsomorphicLayoutEffect = (/* unused pure expression or super */ null && (isRSC ? idFn : isServer ? useEffect : useLayoutEffect));
const isChrome = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
const isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const isTouchable = !isWeb || isWebTouchable;
if (false) {}
if (false) {}
const isAndroid = false;
const isIos = false;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/use-window-dimensions/dist/esm/index.js



const initialValue = {
  fontScale: 1,
  height: 800,
  width: 600,
  scale: 1
};
function configureInitialWindowDimensions(next) {
  Object.assign(initialValue, next);
}
function useWindowDimensions({ initial } = {}) {
  const current = useWindowDimensionsRN();
  if (false) {}
  const [state, setState] = useState(
    initial ? { ...initialValue, ...initial } : initialValue
  );
  useIsomorphicLayoutEffect(() => {
    setState(current);
  }, Object.values(current));
  return state;
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _tamagui_button__WEBPACK_IMPORTED_MODULE_2__.zx),
/* harmony export */   "H1": () => (/* reexport safe */ _tamagui_text__WEBPACK_IMPORTED_MODULE_7__.H1),
/* harmony export */   "Spacer": () => (/* reexport safe */ _tamagui_core__WEBPACK_IMPORTED_MODULE_11__.Spacer),
/* harmony export */   "Text": () => (/* reexport safe */ _tamagui_core__WEBPACK_IMPORTED_MODULE_11__.Text),
/* harmony export */   "XStack": () => (/* reexport safe */ _tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__.sL),
/* harmony export */   "YStack": () => (/* reexport safe */ _tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__.FA)
/* harmony export */ });
/* unused harmony export LinearGradient */
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6297);
/* harmony import */ var _tamagui_adapt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2425);
/* harmony import */ var _tamagui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3571);
/* harmony import */ var _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);
/* harmony import */ var _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__, "H1")) __webpack_require__.d(__webpack_exports__, { "H1": function() { return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.H1; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__, "XStack")) __webpack_require__.d(__webpack_exports__, { "XStack": function() { return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.XStack; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__, "YStack")) __webpack_require__.d(__webpack_exports__, { "YStack": function() { return _tamagui_helpers_tamagui__WEBPACK_IMPORTED_MODULE_3__.YStack; } });
/* harmony import */ var _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8765);
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__, "H1")) __webpack_require__.d(__webpack_exports__, { "H1": function() { return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.H1; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__, "XStack")) __webpack_require__.d(__webpack_exports__, { "XStack": function() { return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.XStack; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_portal__WEBPACK_IMPORTED_MODULE_4__, "YStack")) __webpack_require__.d(__webpack_exports__, { "YStack": function() { return _tamagui_portal__WEBPACK_IMPORTED_MODULE_4__.YStack; } });
/* harmony import */ var _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8198);
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__, "H1")) __webpack_require__.d(__webpack_exports__, { "H1": function() { return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.H1; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__, "XStack")) __webpack_require__.d(__webpack_exports__, { "XStack": function() { return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.XStack; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__, "YStack")) __webpack_require__.d(__webpack_exports__, { "YStack": function() { return _tamagui_sheet__WEBPACK_IMPORTED_MODULE_5__.YStack; } });
/* harmony import */ var _tamagui_stacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9932);
/* harmony import */ var _tamagui_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59);
/* harmony import */ var _tamagui_use_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9004);
/* harmony import */ var _tamagui_use_force_update__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7400);
/* harmony import */ var _tamagui_use_window_dimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7629);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_11__);





















































function LinearGradient(props) {
    if (false) {}
    return null;
}
 //# sourceMappingURL=index.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6297:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: idFn

// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../node_modules/react-native-web-lite/dist/esm/View/index.js
var View = __webpack_require__(4718);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/TextAncestorContext.js
var TextAncestorContext = __webpack_require__(4189);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useLocale/index.js + 1 modules
var useLocale = __webpack_require__(6789);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/index.js + 11 modules
var StyleSheet = __webpack_require__(2653);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/pick/index.js
var pick = __webpack_require__(3868);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/forwardedProps/index.js
var forwardedProps = __webpack_require__(6376);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useElementLayout/index.js + 1 modules
var useElementLayout = __webpack_require__(2505);
// EXTERNAL MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/index.js + 6 modules
var esm = __webpack_require__(2363);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/usePlatformMethods/index.js + 1 modules
var usePlatformMethods = __webpack_require__(2382);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useMergeRefs/index.js
var useMergeRefs = __webpack_require__(6395);
// EXTERNAL MODULE: ../../node_modules/react-native-web-lite/dist/esm/createElement/index.js + 5 modules
var createElement = __webpack_require__(277);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/Text/index.js





const pickProps = (props) => (0,pick/* default */.Z)(props, forwardedProps/* forwardPropsListText */._N);
const Text = external_react_.forwardRef(
  (props, forwardedRef) => {
    const {
      hrefAttrs,
      numberOfLines,
      onClick,
      onLayout,
      onPress,
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
      selectable,
      ...rest
    } = props;
    const hasTextAncestor = external_react_.useContext(TextAncestorContext/* TextAncestorContext */.M);
    const hostRef = external_react_.useRef(null);
    const { direction: contextDirection } = (0,useLocale/* useLocaleContext */.PE)();
    (0,useElementLayout/* default */.Z)(hostRef, onLayout);
    (0,esm/* useResponderEvents */.Gy)(hostRef, {
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
    const handleClick = external_react_.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        } else if (onPress != null) {
          e.stopPropagation();
          onPress(e);
        }
      },
      [onClick, onPress]
    );
    let component = hasTextAncestor ? "span" : "div";
    const langDirection = props.lang != null ? (0,useLocale/* getLocaleDirection */.w1)(props.lang) : null;
    const componentDirection = props.dir || langDirection;
    const writingDirection = componentDirection || contextDirection;
    const supportedProps = pickProps(rest);
    supportedProps.dir = componentDirection;
    if (!hasTextAncestor) {
      supportedProps.dir = componentDirection != null ? componentDirection : "auto";
    }
    if (onClick || onPress) {
      supportedProps.onClick = handleClick;
    }
    supportedProps.style = [
      numberOfLines != null && numberOfLines > 1 && { WebkitLineClamp: numberOfLines },
      hasTextAncestor === true ? styles.textHasAncestor$raw : styles.text$raw,
      numberOfLines === 1 && styles.textOneLine,
      numberOfLines != null && numberOfLines > 1 && styles.textMultiLine,
      props.style,
      selectable === true && styles.selectable,
      selectable === false && styles.notSelectable,
      onPress && styles.pressable
    ];
    if (props.href != null) {
      component = "a";
      if (hrefAttrs != null) {
        const { download, rel, target } = hrefAttrs;
        if (download != null) {
          supportedProps.download = download;
        }
        if (rel != null) {
          supportedProps.rel = rel;
        }
        if (typeof target === "string") {
          supportedProps.target = target.charAt(0) !== "_" ? "_" + target : target;
        }
      }
    }
    const platformMethodsRef = (0,usePlatformMethods/* usePlatformMethods */.V)(supportedProps);
    const setRef = (0,useMergeRefs/* useMergeRefs */.q)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    const element = (0,createElement/* default */.Z)(component, supportedProps, {
      writingDirection
    });
    return hasTextAncestor ? element : /* @__PURE__ */ (0,jsx_runtime.jsx)(TextAncestorContext/* TextAncestorContext.Provider */.M.Provider, { value: true, children: element });
  }
);
Text.displayName = "Text";
const textStyle = {
  backgroundColor: "transparent",
  border: "0 solid black",
  boxSizing: "border-box",
  color: "black",
  display: "inline",
  font: "14px System",
  listStyle: "none",
  margin: 0,
  padding: 0,
  textAlign: "inherit",
  textDecoration: "none",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word"
};
const styles = StyleSheet/* default.create */.Z.create({
  text$raw: textStyle,
  textHasAncestor$raw: {
    ...textStyle,
    color: "inherit",
    font: "inherit",
    whiteSpace: "inherit"
  },
  textOneLine: {
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  },
  // See #13
  textMultiLine: {
    display: "-webkit-box",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical"
  },
  notSelectable: {
    userSelect: "none"
  },
  selectable: {
    userSelect: "text"
  },
  pressable: {
    cursor: "pointer"
  }
});
var Text_default = Text;

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/tamagui/dist/esm/setup.js



globalThis.React = external_react_;
(0,cjs.setupReactNative)({
    View: View/* default */.Z,
    Text: Text_default
});
if (typeof requestAnimationFrame === "undefined") {
    globalThis["requestAnimationFrame"] = setImmediate;
}
const cancelAnimationFrame = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (x)=>{
    try {
        cancelAnimationFrame(x);
    } catch  {}
};
const idFn = ()=>{};
 //# sourceMappingURL=setup.js.map


/***/ }),

/***/ 2938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useNavigation)
/* harmony export */ });
const useNavigation = ()=>undefined; //# sourceMappingURL=use-navigation.web.js.map


/***/ }),

/***/ 5887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ useRouter)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/Platform/index.js
var Platform = __webpack_require__(8182);
;// CONCATENATED MODULE: ../../node_modules/solito/build/router/parse-next-path.js
const parseNextPath = (from)=>{
    let path = (typeof from == "string" ? from : from.pathname) || "";
    // replace each instance of [key] with the corresponding value from query[key]
    // this ensures we're navigating to the correct URL
    // it currently ignores [[...param]]
    // but I can't see why you would use this with RN + Next.js
    if (typeof from == "object" && from.query && typeof from.query == "object") {
        const query = {
            ...from.query
        };
        // replace dynamic routes
        // and [...param] syntax
        for(const key in query){
            if (path.includes(`[${key}]`)) {
                path = path.replace(`[${key}]`, `${query[key] ?? ""}`);
                delete query[key];
            } else if (path.includes(`[...${key}]`)) {
                const values = query[key];
                if (Array.isArray(values)) {
                    path = path.replace(`[...${key}]`, values.join("/"));
                    delete query[key];
                }
            }
        }
        if (Object.keys(query).length) {
            // add query param separator
            path += "?";
            for(const key in query){
                const value = query[key];
                if (Array.isArray(value)) {
                    value.forEach((item)=>{
                        path += `${key}=${item}&`;
                    });
                } else if (value != null) {
                    path += `${key}=${value}&`;
                }
            }
            if (path.endsWith("&") || path.endsWith("?")) {
                path = path.slice(0, -1);
            }
        }
    }
    return path;
};
 //# sourceMappingURL=parse-next-path.js.map

;// CONCATENATED MODULE: ../../node_modules/solito/build/router/replace-helpers.web.js

const LinkingContext = /*#__PURE__*/ (0,external_react_.createContext)({
    options: undefined
});
let StackActions, getStateFromPath, getActionFromState;
 //# sourceMappingURL=replace-helpers.web.js.map

;// CONCATENATED MODULE: ../../node_modules/solito/build/router/use-link-to.web.js
const noOp = ()=>{
    throw new Error("[use-link-to] is not supported on the web. Something went wrong if you called this.");
};
/**
 * @deprecated imported from the wrong file. Use `use-link-to` instead.
 */ const useLinkTo = ()=>noOp; //# sourceMappingURL=use-link-to.web.js.map

// EXTERNAL MODULE: ../../node_modules/solito/build/router/use-navigation.web.js
var use_navigation_web = __webpack_require__(2938);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ../../node_modules/solito/build/router/use-router.js







function useRouter() {
    const linkTo = useLinkTo();
    const navigation = (0,use_navigation_web/* useNavigation */.H)();
    const nextRouter = (0,router_.useRouter)();
    const linking = (0,external_react_.useContext)(LinkingContext);
    return (0,external_react_.useMemo)(()=>({
            push: (url, as, transitionOptions)=>{
                if (Platform/* default.OS */.Z.OS === "web") {
                    nextRouter?.push(url, as, transitionOptions);
                } else {
                    const to = parseNextPath(as || url);
                    if (to) {
                        linkTo(to);
                    }
                }
            },
            replace: (url, as, transitionOptions)=>{
                if (Platform/* default.OS */.Z.OS === "web") {
                    nextRouter?.replace(url, as, transitionOptions);
                } else {
                    const to = parseNextPath(as || url);
                    if (to) {
                        if (transitionOptions?.experimental?.nativeBehavior === "stack-replace") {
                            if (linking?.options) {
                                // custom logic to create a replace() from a URL on native
                                // https://github.com/react-navigation/react-navigation/discussions/10517
                                const { options  } = linking;
                                const state = options?.getStateFromPath ? options.getStateFromPath(to, options.config) : getStateFromPath(to, options?.config);
                                if (state) {
                                    const action = getActionFromState(state, options?.config);
                                    if (action !== undefined) {
                                        if ("payload" in action && action.payload && "name" in action.payload && action.payload.name) {
                                            const { name , params  } = action.payload;
                                            if (transitionOptions?.experimental?.isNestedNavigator && params && "screen" in params && params.screen) {
                                                navigation?.dispatch(StackActions.replace(params.screen, params.params));
                                            } else {
                                                navigation?.dispatch(StackActions.replace(name, params));
                                            }
                                        } else {
                                            navigation?.dispatch(action);
                                        }
                                    } else {
                                        navigation?.reset(state);
                                    }
                                }
                            } else {
                                // fallback in case the linking context didn't work
                                console.warn(`[solito] replace("${to}") faced an issue. You should still see your new screen, but it probably didn't replace the previous one. This may be due to a breaking change in React Navigation. 
  Please open an issue at https://github.com/nandorojo/solito and report how this happened. Thanks!`);
                                linkTo(to);
                            }
                        } else {
                            linkTo(to);
                        }
                    }
                }
            },
            back: ()=>{
                if (Platform/* default.OS */.Z.OS === "web") {
                    nextRouter?.back();
                } else {
                    navigation?.goBack();
                }
            },
            parseNextPath: parseNextPath
        }), [
        linkTo,
        navigation
    ]);
} //# sourceMappingURL=use-router.js.map


/***/ }),

/***/ 8182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Platform_default)
/* harmony export */ });
const Platform = {
  OS: "web",
  select: (obj) => "web" in obj ? obj.web : obj.default,
  isTesting: "production" === "test"
};
var Platform_default = Platform;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextInputState_default)
/* harmony export */ });
/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9680);

const TextInputState = {
  /**
   * Internal state
   */
  _currentlyFocusedNode: null,
  /**
   * Returns the ID of the currently focused text field, if one exists
   * If no text field is focused it returns null
   */
  currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }
    return this._currentlyFocusedNode;
  },
  /**
   * @param {Object} TextInputID id of the text field to focus
   * Focuses the specified text field
   * noop if the text field was already focused
   */
  focusTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;
      if (document.activeElement !== textFieldNode) {
        _UIManager__WEBPACK_IMPORTED_MODULE_0__/* ["default"].focus */ .Z.focus(textFieldNode);
      }
    }
  },
  /**
   * @param {Object} textFieldNode id of the text field to focus
   * Unfocuses the specified text field
   * noop if it wasn't focused
   */
  blurTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = null;
      if (document.activeElement === textFieldNode) {
        _UIManager__WEBPACK_IMPORTED_MODULE_0__/* ["default"].blur */ .Z.blur(textFieldNode);
      }
    }
  }
};
var TextInputState_default = TextInputState;

//# sourceMappingURL=index.js.map


/***/ })

};
;