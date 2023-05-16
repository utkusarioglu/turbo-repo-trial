"use strict";
exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 962:
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
var NextTheme_exports = {};
module.exports = __toCommonJS(NextTheme_exports);
__reExport(NextTheme_exports, __webpack_require__(232), module.exports);
__reExport(NextTheme_exports, __webpack_require__(4929), module.exports);
__reExport(NextTheme_exports, __webpack_require__(4112), module.exports);
__reExport(NextTheme_exports, __webpack_require__(1102), module.exports);
__reExport(NextTheme_exports, __webpack_require__(2682), module.exports);
__reExport(NextTheme_exports, __webpack_require__(4542), module.exports);
__reExport(NextTheme_exports, __webpack_require__(6898), module.exports);
__reExport(NextTheme_exports, __webpack_require__(6644), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=NextTheme.js.map


/***/ }),

/***/ 232:
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
var NextThemeProvider_exports = {};
__export(NextThemeProvider_exports, {
  NextThemeProvider: () => NextThemeProvider
});
module.exports = __toCommonJS(NextThemeProvider_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_use_event = __webpack_require__(6552);
var import_head = __toESM(__webpack_require__(968));
var React = __toESM(__webpack_require__(6689));
var import_react = __webpack_require__(6689);
var import_constants = __webpack_require__(2682);
var import_helpers = __webpack_require__(1102);
var import_ThemeSettingContext = __webpack_require__(4929);
var import_useIsomorphicLayoutEffect = __webpack_require__(4486);
const NextThemeProvider = ({
  forcedTheme,
  disableTransitionOnChange = true,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = "theme",
  themes = import_constants.colorSchemes,
  defaultTheme = enableSystem ? "system" : "light",
  attribute = "class",
  skipNextHead,
  onChangeTheme,
  value = {
    dark: "t_dark",
    light: "t_light"
  },
  children
}) => {
  const [theme, setThemeState] = (0, import_react.useState)(() => (0, import_helpers.getTheme)(storageKey, defaultTheme));
  const [resolvedTheme, setResolvedTheme] = (0, import_react.useState)(() => (0, import_helpers.getTheme)(storageKey));
  const attrs = !value ? themes : Object.values(value);
  const handleMediaQuery = (0, import_use_event.useEvent)((e) => {
    const systemTheme2 = (0, import_helpers.getSystemTheme)(e);
    React.startTransition(() => {
      setResolvedTheme(systemTheme2);
    });
    if (theme === "system" && !forcedTheme) {
      handleChangeTheme(systemTheme2, false);
    }
  });
  const mediaListener = (0, import_react.useRef)(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  const handleChangeTheme = (0, import_use_event.useEvent)((theme2, updateStorage = true, updateDOM = true) => {
    let name = (value == null ? void 0 : value[theme2]) || theme2;
    if (updateStorage) {
      try {
        localStorage.setItem(storageKey, theme2);
      } catch (e) {
      }
    }
    if (theme2 === "system" && enableSystem) {
      const resolved = (0, import_helpers.getSystemTheme)();
      name = (value == null ? void 0 : value[resolved]) || resolved;
    }
    onChangeTheme == null ? void 0 : onChangeTheme(name.replace("t_", ""));
    if (updateDOM) {
      const d = document.documentElement;
      if (attribute === "class") {
        d.classList.remove(...attrs);
        d.classList.add(name);
      } else {
        d.setAttribute(attribute, name);
      }
    }
  });
  (0, import_useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    const handler = (...args) => mediaListener.current(...args);
    const media = window.matchMedia(import_constants.MEDIA);
    media.addListener(handler);
    handler(media);
    return () => {
      media.removeListener(handler);
    };
  }, []);
  const set = (0, import_use_event.useEvent)((newTheme) => {
    if (forcedTheme) {
      handleChangeTheme(newTheme, true, false);
    } else {
      handleChangeTheme(newTheme);
    }
    setThemeState(newTheme);
  });
  (0, import_react.useEffect)(() => {
    const handleStorage = (e) => {
      if (e.key !== storageKey) {
        return;
      }
      const theme2 = e.newValue || defaultTheme;
      set(theme2);
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [defaultTheme, set, storageKey]);
  (0, import_useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    if (!enableColorScheme)
      return;
    const colorScheme = (
      // If theme is forced to light or dark, use that
      forcedTheme && import_constants.colorSchemes.includes(forcedTheme) ? forcedTheme : (
        // If regular theme is light or dark
        theme && import_constants.colorSchemes.includes(theme) ? theme : (
          // If theme is system, use the resolved version
          theme === "system" ? resolvedTheme || null : null
        )
      )
    );
    const userPrefers = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const wePrefer = colorScheme || "light";
    if (userPrefers !== wePrefer || wePrefer === "dark") {
      document.documentElement.style.setProperty("color-scheme", colorScheme);
    }
  }, [enableColorScheme, theme, resolvedTheme, forcedTheme]);
  const toggle = (0, import_use_event.useEvent)(() => {
    const order = resolvedTheme === "dark" ? ["system", "light", "dark"] : ["system", "dark", "light"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    set(next);
  });
  const contextResolvedTheme = theme === "system" ? resolvedTheme : theme;
  const systemTheme = enableSystem ? resolvedTheme : void 0;
  const contextValue = (0, import_react.useMemo)(() => {
    const value2 = {
      theme,
      current: theme,
      set,
      toggle,
      forcedTheme,
      resolvedTheme: contextResolvedTheme,
      themes: enableSystem ? [...themes, "system"] : themes,
      systemTheme
    };
    return value2;
  }, [
    theme,
    set,
    toggle,
    forcedTheme,
    contextResolvedTheme,
    enableSystem,
    themes,
    systemTheme
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ThemeSettingContext.ThemeSettingContext.Provider, { value: contextValue, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      ThemeScript,
      {
        ...{
          forcedTheme,
          storageKey,
          systemTheme: resolvedTheme,
          attribute,
          value,
          enableSystem,
          defaultTheme,
          attrs,
          skipNextHead
        }
      }
    ),
    (0, import_react.useMemo)(() => children, [children])
  ] });
};
const ThemeScript = (0, import_react.memo)(
  ({
    forcedTheme,
    storageKey,
    attribute,
    enableSystem,
    defaultTheme,
    value,
    attrs,
    skipNextHead
  }) => {
    const optimization = (() => {
      if (attribute === "class") {
        const removeClasses = attrs.map((t) => `d.remove('${t}')`).join(";");
        return `var d=document.documentElement.classList;${removeClasses};`;
      } else {
        return `var d=document.documentElement;`;
      }
    })();
    const updateDOM = (name, literal) => {
      name = (value == null ? void 0 : value[name]) || name;
      const val = literal ? name : `'${name}'`;
      if (attribute === "class") {
        return `d.add(${val})`;
      }
      return `d.setAttribute('${attribute}', ${val})`;
    };
    const defaultSystem = defaultTheme === "system";
    const contents = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: forcedTheme ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "script",
      {
        dangerouslySetInnerHTML: {
          // These are minified via Terser and then updated by hand, don't recommend
          __html: `!function(){${optimization}${updateDOM(forcedTheme)}}()`
        }
      },
      "next-themes-script"
    ) : enableSystem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `!function(){try {${optimization}var e=localStorage.getItem('${storageKey}');${!defaultSystem ? updateDOM(defaultTheme) + ";" : ""}if("system"===e||(!e&&${defaultSystem})){var t="${import_constants.MEDIA}",m=window.matchMedia(t);m.media!==t||m.matches?${updateDOM(
            "dark"
          )}:${updateDOM("light")}}else if(e) ${value ? `var x=${JSON.stringify(value)};` : ""}${updateDOM(value ? "x[e]" : "e", true)}}catch(e){}}()`
        }
      },
      "next-themes-script"
    ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `!function(){try{${optimization}var e=localStorage.getItem("${storageKey}");if(e){${value ? `var x=${JSON.stringify(value)};` : ""}${updateDOM(value ? "x[e]" : "e", true)}}else{${updateDOM(
            defaultTheme
          )};}}catch(t){}}();`
        }
      },
      "next-themes-script"
    ) });
    if (skipNextHead)
      return contents;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_head.default, { children: contents });
  },
  (prevProps, nextProps) => {
    if (prevProps.forcedTheme !== nextProps.forcedTheme)
      return false;
    return true;
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=NextThemeProvider.js.map


/***/ }),

/***/ 4929:
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
var ThemeSettingContext_exports = {};
__export(ThemeSettingContext_exports, {
  ThemeSettingContext: () => ThemeSettingContext
});
module.exports = __toCommonJS(ThemeSettingContext_exports);
var import_react = __webpack_require__(6689);
const ThemeSettingContext = (0, import_react.createContext)({
  toggle: () => {
  },
  set: (_) => {
  },
  themes: []
});
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=ThemeSettingContext.js.map


/***/ }),

/***/ 4112:
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
var UseThemeProps_exports = {};
module.exports = __toCommonJS(UseThemeProps_exports);
//# sourceMappingURL=UseThemeProps.js.map


/***/ }),

/***/ 2682:
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
  MEDIA: () => MEDIA,
  colorSchemes: () => colorSchemes,
  constants: () => constants
});
module.exports = __toCommonJS(constants_exports);
const constants = {};
const colorSchemes = ["light", "dark"];
const MEDIA = "(prefers-color-scheme: dark)";
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 1102:
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
var helpers_exports = {};
__export(helpers_exports, {
  getSystemTheme: () => getSystemTheme,
  getTheme: () => getTheme,
  helpers: () => helpers
});
module.exports = __toCommonJS(helpers_exports);
var import_constants = __webpack_require__(2682);
const helpers = {};
const getTheme = (key, fallback) => {
  if (typeof window === "undefined")
    return void 0;
  let theme;
  try {
    theme = localStorage.getItem(key) || void 0;
  } catch (e) {
  }
  return theme || fallback;
};
const getSystemTheme = (e) => {
  if (!e) {
    e = window.matchMedia(import_constants.MEDIA);
  }
  const isDark = e.matches;
  const systemTheme = isDark ? "dark" : "light";
  return systemTheme;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=helpers.js.map


/***/ }),

/***/ 9138:
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
__reExport(src_exports, __webpack_require__(962), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6898:
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

/***/ 4486:
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
var useIsomorphicLayoutEffect_exports = {};
__export(useIsomorphicLayoutEffect_exports, {
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect
});
module.exports = __toCommonJS(useIsomorphicLayoutEffect_exports);
var import_react = __webpack_require__(6689);
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map


/***/ }),

/***/ 6644:
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
var useRootTheme_exports = {};
__export(useRootTheme_exports, {
  useRootTheme: () => useRootTheme
});
module.exports = __toCommonJS(useRootTheme_exports);
var import_react = __webpack_require__(6689);
const useRootTheme = ({ fallback = "light" } = {}) => {
  const [val, setVal] = (0, import_react.useState)(fallback);
  if (typeof document !== "undefined") {
    (0, import_react.useLayoutEffect)(() => {
      const classes = [...document.documentElement.classList];
      const val2 = classes.includes(`t_dark`) ? "dark" : classes.includes(`t_light`) ? "light" : fallback;
      (0, import_react.startTransition)(() => {
        setVal(val2);
      });
    }, []);
  }
  return [val, setVal];
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useRootTheme.js.map


/***/ }),

/***/ 4542:
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
  useTheme: () => useTheme,
  useThemeSetting: () => useThemeSetting
});
module.exports = __toCommonJS(useTheme_exports);
var import_react = __webpack_require__(6689);
var import_ThemeSettingContext = __webpack_require__(4929);
const useTheme = () => (0, import_react.useContext)(import_ThemeSettingContext.ThemeSettingContext);
const useThemeSetting = () => (0, import_react.useContext)(import_ThemeSettingContext.ThemeSettingContext);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=useTheme.js.map


/***/ })

};
;