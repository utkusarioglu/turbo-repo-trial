exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 5451:
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
var createAnimations_exports = {};
__export(createAnimations_exports, {
  AnimatedText: () => AnimatedText,
  AnimatedView: () => AnimatedView,
  createAnimations: () => createAnimations,
  useAnimatedNumber: () => useAnimatedNumber,
  useAnimatedNumberReaction: () => useAnimatedNumberReaction,
  useAnimatedNumberStyle: () => useAnimatedNumberStyle
});
module.exports = __toCommonJS(createAnimations_exports);
var import_use_presence = __webpack_require__(6185);
var import_web = __webpack_require__(1444);
var import_react = __webpack_require__(6689);
var import_react_native = __webpack_require__(7456);
const animatedStyleKey = {
  transform: true,
  opacity: true
};
const colorStyleKey = {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderTopColor: true,
  borderBottomColor: true
};
const costlyToAnimateStyleKey = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderBottomWidth: true,
  ...colorStyleKey
  // TODO for other keys like height or width, it's better to not add them here till layout animations are ready
};
const AnimatedView = import_react_native.Animated.View;
const AnimatedText = import_react_native.Animated.Text;
function useAnimatedNumber(initial) {
  const state = (0, import_web.useSafeRef)(
    null
  );
  if (!state.current) {
    state.current = {
      composite: null,
      val: new import_react_native.Animated.Value(initial),
      strategy: { type: "spring" }
    };
  }
  return {
    getInstance() {
      return state.current.val;
    },
    getValue() {
      return state.current.val["_value"];
    },
    stop() {
      var _a;
      (_a = state.current.composite) == null ? void 0 : _a.stop();
      state.current.composite = null;
    },
    setValue(next, { type, ...config } = { type: "spring" }) {
      var _a, _b;
      const val = state.current.val;
      if (type === "direct") {
        val.setValue(next);
      } else if (type === "spring") {
        (_a = state.current.composite) == null ? void 0 : _a.stop();
        const composite = import_react_native.Animated.spring(val, {
          ...config,
          toValue: next,
          useNativeDriver: !import_web.isWeb
        });
        composite.start();
        state.current.composite = composite;
      } else {
        (_b = state.current.composite) == null ? void 0 : _b.stop();
        const composite = import_react_native.Animated.timing(val, {
          ...config,
          toValue: next,
          useNativeDriver: !import_web.isWeb
        });
        composite.start();
        state.current.composite = composite;
      }
    }
  };
}
function useAnimatedNumberReaction({
  value
}, onValue) {
  const onChange = (0, import_web.useEvent)((current) => {
    onValue(current.value);
  });
  (0, import_react.useEffect)(() => {
    const id = value.getInstance().addListener(onChange);
    return () => {
      value.getInstance().removeListener(id);
    };
  }, [value, onChange]);
}
function useAnimatedNumberStyle(value, getStyle) {
  return getStyle(value.getInstance());
}
function createAnimations(animations) {
  AnimatedView["displayName"] = "AnimatedView";
  AnimatedText["displayName"] = "AnimatedText";
  return {
    isReactNative: true,
    animations,
    View: AnimatedView,
    Text: AnimatedText,
    useAnimatedNumber,
    useAnimatedNumberReaction,
    useAnimatedNumberStyle,
    usePresence: import_use_presence.usePresence,
    useAnimations: ({ props, onDidAnimate, style, state, presence }) => {
      const isExiting = (presence == null ? void 0 : presence[0]) === false;
      const sendExitComplete = presence == null ? void 0 : presence[1];
      const animateStyles = (0, import_web.useSafeRef)({});
      const animatedTranforms = (0, import_web.useSafeRef)([]);
      const animationsState = (0, import_web.useSafeRef)(
        /* @__PURE__ */ new WeakMap()
      );
      const animateOnly = props.animateOnly || [];
      const args = [style, state, isExiting, !!onDidAnimate];
      const isThereNoNativeStyleKeys = (0, import_react.useMemo)(() => {
        if (import_web.isWeb)
          return true;
        return Object.keys(style).some((key) => {
          if (animateOnly.length) {
            return !animatedStyleKey[key] && animateOnly.indexOf(key) === -1;
          } else {
            return !animatedStyleKey[key];
          }
        });
      }, args);
      const res = (0, import_react.useMemo)(() => {
        var _a;
        const runners = [];
        const completions = [];
        const nonAnimatedStyle = {};
        for (const key in style) {
          const val = style[key];
          if (!animatedStyleKey[key] && !costlyToAnimateStyleKey[key]) {
            nonAnimatedStyle[key] = val;
            continue;
          }
          if (animateOnly.length && animateOnly.indexOf(key) === -1) {
            nonAnimatedStyle[key] = val;
            continue;
          }
          if (key !== "transform") {
            animateStyles.current[key] = update(key, animateStyles.current[key], val);
            continue;
          }
          if (!val)
            continue;
          for (const [index, transform] of val.entries()) {
            if (!transform)
              continue;
            const tkey = Object.keys(transform)[0];
            const currentTransform = (_a = animatedTranforms.current[index]) == null ? void 0 : _a[tkey];
            animatedTranforms.current[index] = {
              [tkey]: update(tkey, currentTransform, transform[tkey])
            };
            animatedTranforms.current = [...animatedTranforms.current];
          }
        }
        const animatedStyle = {
          ...Object.fromEntries(
            Object.entries(animateStyles.current).map(([k, v]) => {
              var _a2;
              return [
                k,
                ((_a2 = animationsState.current.get(v)) == null ? void 0 : _a2.interpolation) || v
              ];
            })
          ),
          transform: animatedTranforms.current.map((r) => {
            var _a2;
            const key = Object.keys(r)[0];
            const val = ((_a2 = animationsState.current.get(r[key])) == null ? void 0 : _a2.interpolation) || r[key];
            return { [key]: val };
          })
        };
        return {
          runners,
          completions,
          style: [nonAnimatedStyle, animatedStyle]
        };
        function update(key, animated, valIn) {
          const isColorStyleKey = colorStyleKey[key];
          const [val, type] = isColorStyleKey ? [0, void 0] : getValue(valIn);
          let animateToValue = val;
          const value = animated || new import_react_native.Animated.Value(val);
          const curInterpolation = animationsState.current.get(value);
          let interpolateArgs;
          if (type) {
            interpolateArgs = getInterpolated(
              (curInterpolation == null ? void 0 : curInterpolation.current) ?? value["_value"],
              val,
              type
            );
            animationsState.current.set(value, {
              interpolation: value.interpolate(interpolateArgs),
              current: val
            });
          }
          if (isColorStyleKey) {
            animateToValue = (curInterpolation == null ? void 0 : curInterpolation.animateToValue) ? 0 : 1;
            interpolateArgs = getColorInterpolated(
              curInterpolation == null ? void 0 : curInterpolation.current,
              // valIn is the next color
              valIn,
              animateToValue
            );
            animationsState.current.set(value, {
              current: valIn,
              interpolation: value.interpolate(interpolateArgs),
              animateToValue: (curInterpolation == null ? void 0 : curInterpolation.animateToValue) ? 0 : 1
            });
          }
          if (value) {
            const animationConfig = getAnimationConfig(key, animations, props.animation);
            let resolve;
            const promise = new Promise((res2) => {
              resolve = res2;
            });
            completions.push(promise);
            runners.push(() => {
              value.stopAnimation();
              function getAnimation() {
                return import_react_native.Animated[animationConfig.type || "spring"](value, {
                  toValue: animateToValue,
                  useNativeDriver: !import_web.isWeb && !isThereNoNativeStyleKeys,
                  ...animationConfig
                });
              }
              const animation = animationConfig.delay ? import_react_native.Animated.sequence([
                import_react_native.Animated.delay(animationConfig.delay),
                getAnimation()
              ]) : getAnimation();
              animation.start(({ finished }) => {
                if (finished) {
                  resolve();
                }
              });
            });
          }
          if (false) {}
          return value;
        }
      }, args);
      (0, import_web.useIsomorphicLayoutEffect)(() => {
        res.runners.forEach((r) => r());
        let cancel = false;
        Promise.all(res.completions).then(() => {
          if (cancel)
            return;
          onDidAnimate == null ? void 0 : onDidAnimate();
          if (isExiting) {
            sendExitComplete == null ? void 0 : sendExitComplete();
          }
        });
        return () => {
          cancel = true;
        };
      }, args);
      if (false) {}
      return res;
    }
  };
}
function getColorInterpolated(currentColor, nextColor, animateToValue) {
  const inputRange = [0, 1];
  const outputRange = [currentColor ? currentColor : nextColor, nextColor];
  if (animateToValue === 0) {
    outputRange.reverse();
  }
  return {
    inputRange,
    outputRange
  };
}
function getInterpolated(current, next, postfix = "deg") {
  if (next === current) {
    current = next - 1e-9;
  }
  const inputRange = [current, next];
  const outputRange = [`${current}${postfix}`, `${next}${postfix}`];
  if (next < current) {
    inputRange.reverse();
    outputRange.reverse();
  }
  return {
    inputRange,
    outputRange
  };
}
function getAnimationConfig(key, animations, animation) {
  var _a, _b;
  if (typeof animation === "string") {
    return animations[animation];
  }
  let type = "";
  let extraConf;
  const shortKey = transformShorthands[key];
  if (Array.isArray(animation)) {
    type = animation[0];
    const conf = ((_a = animation[1]) == null ? void 0 : _a[key]) ?? ((_b = animation[1]) == null ? void 0 : _b[shortKey]);
    if (conf) {
      if (typeof conf === "string") {
        type = conf;
      } else {
        type = conf.type || type;
        extraConf = conf;
      }
    }
  } else {
    const val = (animation == null ? void 0 : animation[key]) ?? (animation == null ? void 0 : animation[shortKey]);
    type = val == null ? void 0 : val.type;
    extraConf = val;
  }
  const found = animations[type];
  if (!found) {
    throw new Error(`No animation of type "${type}" for key "${key}"`);
  }
  return {
    ...found,
    ...extraConf
  };
}
const transformShorthands = {
  x: "translateX",
  y: "translateY",
  translateX: "x",
  translateY: "y"
};
function getValue(input, isColor = false) {
  if (typeof input !== "string") {
    return [input];
  }
  const [_, number, after] = input.match(/([-0-9]+)(deg|%|px)/) ?? [];
  return [+number, after];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createAnimations.js.map


/***/ }),

/***/ 7853:
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
var import_polyfill = __webpack_require__(3351);
__reExport(src_exports, __webpack_require__(5451), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3351:
/***/ (() => {

"use strict";

if (typeof requestAnimationFrame === "undefined") {
  globalThis["requestAnimationFrame"] = setImmediate;
}
//# sourceMappingURL=polyfill.js.map


/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ config)
});

// UNUSED EXPORTS: animations

// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/font-inter/dist/jsx/index.js

const createInterFont = (font = {}, { sizeLineHeight =(size)=>size + 10 , sizeSize =(size)=>size * 1  } = {})=>{
    const size = Object.fromEntries(Object.entries({
        ...defaultSizes,
        ...font.size
    }).map(([k, v])=>[
            k,
            sizeSize(+v)
        ]));
    return (0,cjs.createFont)({
        family: cjs.isWeb ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
        lineHeight: Object.fromEntries(Object.entries(size).map(([k, v])=>[
                k,
                sizeLineHeight((0,cjs.getVariableValue)(v))
            ])),
        weight: {
            4: "300"
        },
        letterSpacing: {
            4: 0
        },
        ...font,
        size
    });
};
const defaultSizes = {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134
};
 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/font-silkscreen/dist/jsx/index.js

const createSilkscreenFont = (font = {})=>{
    return (0,cjs.createFont)({
        family: cjs.isWeb ? "Silkscreen, Fira Code, Monaco, Consolas, Ubuntu Mono, monospace" : "Silkscreen",
        size,
        lineHeight: Object.fromEntries(Object.entries(font.size || size).map(([k, v])=>[
                k,
                typeof v === "number" ? v * 1.2 + 6 : v
            ])),
        weight: {
            4: "300"
        },
        letterSpacing: {
            4: 1,
            5: 3,
            6: 3,
            9: -2,
            10: -3,
            12: -4
        },
        ...font
    });
};
const size = {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 15,
    6: 16,
    7: 18,
    8: 21,
    9: 28,
    10: 42,
    11: 52,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 124
};
 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/shorthands/dist/esm/index.js
const shorthands = {
  // web-only
  ussel: "userSelect",
  cur: "cursor",
  // tamagui
  pe: "pointerEvents",
  // text
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  // view
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bc: "backgroundColor",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  boc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
shorthands["bls"] = "borderLeftStyle";
shorthands["brs"] = "borderRightStyle";
shorthands["bts"] = "borderTopStyle";
shorthands["bbs"] = "borderBottomStyle";
shorthands["bxs"] = "boxSizing";
shorthands["bxsh"] = "boxShadow";
shorthands["ox"] = "overflowX";
shorthands["oy"] = "overflowY";

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/create-theme/dist/esm/index.js
const THEME_INFO = /* @__PURE__ */ new WeakMap();
function createTheme(palette, definition, options) {
  const theme = {
    ...Object.fromEntries(
      Object.entries(definition).map(([key, offset]) => {
        return [key, getValue(palette, offset)];
      })
    ),
    ...options == null ? void 0 : options.nonInheritedValues
  };
  THEME_INFO.set(theme, { palette, definition, cache: /* @__PURE__ */ new Map() });
  return theme;
}
const getValue = (palette, value) => {
  if (typeof value === "string")
    return value;
  const max = palette.length - 1;
  const isPositive = value === 0 ? !isMinusZero(value) : value >= 0;
  const next = isPositive ? value : max + value;
  const index = Math.min(Math.max(0, next), max);
  return palette[index];
};
function addChildren(themes, getChildren) {
  const out = { ...themes };
  for (const key in themes) {
    const subThemes = getChildren(key, themes[key]);
    for (const sKey in subThemes) {
      out[`${key}_${sKey}`] = subThemes[sKey];
    }
  }
  return out;
}
const skipMask = (template, { skip }) => {
  if (!skip)
    return template;
  return Object.fromEntries(
    Object.entries(template).filter(([k]) => !(k in skip))
  );
};
const createShiftMask = ({ inverse } = {}) => {
  return (template, opts) => {
    const { override, max: maxIn, palette, min = 0, strength = 1 } = opts;
    const values = Object.entries(template);
    const max = maxIn ?? (palette ? Object.values(palette).length - 1 : Infinity);
    const out = {};
    for (const [key, value] of values) {
      if (typeof value === "string")
        continue;
      if (typeof (override == null ? void 0 : override[key]) === "number") {
        const overrideShift = override[key];
        out[key] = value + overrideShift;
        continue;
      }
      const isPositive = value === 0 ? !isMinusZero(value) : value >= 0;
      const direction = isPositive ? 1 : -1;
      const invert = inverse ? -1 : 1;
      const next = value + strength * direction * invert;
      const clamped = isPositive ? Math.max(min, Math.min(max, next)) : Math.min(-min, Math.max(-max, next));
      out[key] = clamped;
    }
    return skipMask(out, opts);
  };
};
const createWeakenMask = () => createShiftMask();
const createStrengthenMask = () => createShiftMask({ inverse: true });
function isMinusZero(value) {
  return 1 / value === -Infinity;
}
function applyMask(theme, mask, options = {}) {
  const info = THEME_INFO.get(theme);
  if (!info) {
    throw new Error(
       false ? 0 : `\u274C Err2`
    );
  }
  const template = mask(info.definition, {
    palette: info.palette,
    ...options
  });
  const next = createTheme(info.palette, template);
  return next;
}
if (false) {}

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/blue.js
const blue = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};

//# sourceMappingURL=blue.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/gray.js
const gray = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};

//# sourceMappingURL=gray.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/green.js
const green = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

//# sourceMappingURL=green.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/orange.js
const orange = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};

//# sourceMappingURL=orange.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/pink.js
const pink = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};

//# sourceMappingURL=pink.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/purple.js
const purple = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};

//# sourceMappingURL=purple.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/red.js
const red = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

//# sourceMappingURL=red.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/light/yellow.js
const yellow = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

//# sourceMappingURL=yellow.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/blue.js
const blue_blue = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};

//# sourceMappingURL=blue.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/gray.js
const gray_gray = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};

//# sourceMappingURL=gray.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/green.js
const green_green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

//# sourceMappingURL=green.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/orange.js
const orange_orange = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};

//# sourceMappingURL=orange.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/pink.js
const pink_pink = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};

//# sourceMappingURL=pink.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/purple.js
const purple_purple = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};

//# sourceMappingURL=purple.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/red.js
const red_red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

//# sourceMappingURL=red.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/colors/dist/esm/dark/yellow.js
const yellow_yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

//# sourceMappingURL=yellow.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/web/dist/cjs/index.js
var dist_cjs = __webpack_require__(1444);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/themes/dist/esm/tokens.js


const tokens_size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
const spaces = Object.entries(tokens_size).map(([k, v]) => {
  return [k, sizeToSpace(v)];
});
function sizeToSpace(v) {
  if (v === 0)
    return 0;
  if (v === 2)
    return 0.5;
  if (v === 4)
    return 1;
  if (v === 8)
    return 1.5;
  if (v <= 16)
    return Math.round(v * 0.333);
  return Math.floor(v * 0.7 - 12);
}
const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
const space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
const colorTokens = {
  light: {
    blue: blue,
    gray: gray,
    green: green,
    orange: orange,
    pink: pink,
    purple: purple,
    red: red,
    yellow: yellow
  },
  dark: {
    blue: blue_blue,
    gray: gray_gray,
    green: green_green,
    orange: orange_orange,
    pink: pink_pink,
    purple: purple_purple,
    red: red_red,
    yellow: yellow_yellow
  }
};
const darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
const lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
const color = {
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v])
  );
}
const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
const tokens = (0,dist_cjs.createTokens)({
  color,
  radius,
  zIndex,
  space,
  size: tokens_size
});

//# sourceMappingURL=tokens.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/themes/dist/esm/themes.js


const lightTransparent = "rgba(255,255,255,0)";
const darkTransparent = "rgba(10,10,10,0)";
const palettes = {
  dark: [
    darkTransparent,
    "#050505",
    "#151515",
    "#191919",
    "#232323",
    "#282828",
    "#323232",
    "#424242",
    "#494949",
    "#545454",
    "#626262",
    "#a5a5a5",
    "#fff",
    lightTransparent
  ],
  light: [
    lightTransparent,
    "#fff",
    "#f9f9f9",
    "hsl(0, 0%, 97.3%)",
    "hsl(0, 0%, 95.1%)",
    "hsl(0, 0%, 94.0%)",
    "hsl(0, 0%, 92.0%)",
    "hsl(0, 0%, 89.5%)",
    "hsl(0, 0%, 81.0%)",
    "hsl(0, 0%, 56.1%)",
    "hsl(0, 0%, 50.3%)",
    "hsl(0, 0%, 42.5%)",
    "hsl(0, 0%, 9.0%)",
    darkTransparent
  ]
};
const templateColors = {
  color1: 1,
  color2: 2,
  color3: 3,
  color4: 4,
  color5: 5,
  color6: 6,
  color7: 7,
  color8: 8,
  color9: 9,
  color10: 10,
  color11: 11,
  color12: 12
};
const templateShadows = {
  shadowColor: 1,
  shadowColorHover: 1,
  shadowColorPress: 2,
  shadowColorFocus: 2
};
const toSkip = {
  ...templateShadows
};
const override = Object.fromEntries(Object.entries(toSkip).map(([k]) => [k, 0]));
const overrideShadows = Object.fromEntries(
  Object.entries(templateShadows).map(([k]) => [k, 0])
);
const overrideWithColors = {
  ...override,
  color: 0,
  colorHover: 0,
  colorFocus: 0,
  colorPress: 0
};
const template = {
  ...templateColors,
  ...toSkip,
  // the background, color, etc keys here work like generics - they make it so you
  // can publish components for others to use without mandating a specific color scale
  // the @tamagui/button Button component looks for `$background`, so you set the
  // dark_red_Button theme to have a stronger background than the dark_red theme.
  background: 2,
  backgroundHover: 3,
  backgroundPress: 4,
  backgroundFocus: 2,
  backgroundStrong: 1,
  backgroundTransparent: 0,
  color: -1,
  colorHover: -2,
  colorPress: -1,
  colorFocus: -2,
  colorTransparent: -0,
  borderColor: 4,
  borderColorHover: 5,
  borderColorPress: 3,
  borderColorFocus: 4,
  placeholderColor: -4
};
const lightShadowColor = "rgba(0,0,0,0.02)";
const lightShadowColorStrong = "rgba(0,0,0,0.066)";
const darkShadowColor = "rgba(0,0,0,0.2)";
const darkShadowColorStrong = "rgba(0,0,0,0.3)";
const lightShadows = {
  shadowColor: lightShadowColorStrong,
  shadowColorHover: lightShadowColorStrong,
  shadowColorPress: lightShadowColor,
  shadowColorFocus: lightShadowColor
};
const darkShadows = {
  shadowColor: darkShadowColorStrong,
  shadowColorHover: darkShadowColorStrong,
  shadowColorPress: darkShadowColor,
  shadowColorFocus: darkShadowColor
};
const lightTemplate = {
  ...template,
  background: 2,
  backgroundHover: 3,
  backgroundPress: 4,
  // our light color palette is... a bit unique
  borderColor: 6,
  borderColorHover: 7,
  borderColorFocus: 5,
  borderColorPress: 6,
  ...lightShadows
};
const darkTemplate = { ...template, ...darkShadows };
const light = createTheme(palettes.light, lightTemplate);
const dark = createTheme(palettes.dark, darkTemplate);
const baseThemes = {
  light,
  dark
};
const masks = {
  skip: skipMask,
  weaker: createWeakenMask(),
  stronger: createStrengthenMask()
};
const maskOptions = {
  override,
  skip: toSkip,
  // avoids the transparent ends
  max: palettes.light.length - 2,
  min: 1
};
const transparent = (hsl, opacity = 0) => hsl.replace(`%)`, `%, ${opacity})`).replace(`hsl(`, `hsla(`);
const [lightColorThemes, darkColorThemes] = [colorTokens.light, colorTokens.dark].map(
  (colorSet, i) => {
    const isLight = i === 0;
    const theme = baseThemes[isLight ? "light" : "dark"];
    return Object.fromEntries(
      Object.keys(colorSet).map((color) => {
        const colorPalette = Object.values(colorSet[color]);
        const [head, tail] = [
          colorPalette.slice(0, 6),
          colorPalette.slice(colorPalette.length - 5)
        ];
        const palette = [
          transparent(colorPalette[0]),
          ...head,
          ...tail,
          theme.color,
          transparent(colorPalette[colorPalette.length - 1])
        ];
        const colorTheme = createTheme(
          palette,
          isLight ? {
            ...lightTemplate,
            // light color themes are a bit less sensitive
            borderColor: 4,
            borderColorHover: 5,
            borderColorFocus: 4,
            borderColorPress: 4
          } : darkTemplate
        );
        return [color, colorTheme];
      })
    );
  }
);
const allThemes = addChildren(baseThemes, (name, theme) => {
  const isLight = name === "light";
  const inverseName = isLight ? "dark" : "light";
  const inverseTheme = baseThemes[inverseName];
  const colorThemes = isLight ? lightColorThemes : darkColorThemes;
  const inverseColorThemes = isLight ? darkColorThemes : lightColorThemes;
  const allColorThemes = addChildren(colorThemes, (colorName, colorTheme) => {
    const inverse = inverseColorThemes[colorName];
    return {
      ...getAltThemes({
        theme: colorTheme,
        inverse,
        isLight
      }),
      ...getComponentThemes(colorTheme, inverse, isLight)
    };
  });
  const baseSubThemes = {
    ...getAltThemes({ theme, inverse: inverseTheme, isLight }),
    ...getComponentThemes(theme, inverseTheme, isLight)
  };
  return {
    ...baseSubThemes,
    ...allColorThemes
  };
});
function getAltThemes({
  theme,
  inverse,
  isLight,
  activeTheme
}) {
  const maskOptionsAlt = {
    ...maskOptions,
    override: overrideShadows
  };
  const alt1 = applyMask(theme, masks.weaker, maskOptionsAlt);
  const alt2 = applyMask(alt1, masks.weaker, maskOptionsAlt);
  const active = activeTheme ?? (process.env.ACTIVE_THEME_INVERSE ? inverse : (() => {
    return applyMask(theme, masks.weaker, {
      ...maskOptions,
      strength: 3,
      skip: {
        ...maskOptions.skip,
        color: 1
      }
    });
  })());
  return addChildren({ alt1, alt2, active }, (_, subTheme) => {
    return getComponentThemes(subTheme, subTheme === inverse ? theme : inverse, isLight);
  });
}
function getComponentThemes(theme, inverse, isLight) {
  const componentMaskOptions = {
    ...maskOptions,
    override: overrideWithColors,
    skip: {
      ...maskOptions.skip,
      // skip colors too just for component sub themes
      ...templateColors
    }
  };
  const weaker1 = applyMask(theme, masks.weaker, componentMaskOptions);
  const base = applyMask(weaker1, masks.stronger, componentMaskOptions);
  const weaker2 = applyMask(weaker1, masks.weaker, {
    ...componentMaskOptions,
    override: overrideWithColors
  });
  const stronger1 = applyMask(theme, masks.stronger, componentMaskOptions);
  const inverse1 = applyMask(inverse, masks.weaker, componentMaskOptions);
  const inverse2 = applyMask(inverse1, masks.weaker, componentMaskOptions);
  const strongerBorderLighterBackground = isLight ? {
    ...stronger1,
    borderColor: weaker1.borderColor,
    borderColorHover: weaker1.borderColorHover,
    borderColorPress: weaker1.borderColorPress,
    borderColorFocus: weaker1.borderColorFocus
  } : {
    ...applyMask(theme, masks.skip, componentMaskOptions),
    borderColor: weaker1.borderColor,
    borderColorHover: weaker1.borderColorHover,
    borderColorPress: weaker1.borderColorPress,
    borderColorFocus: weaker1.borderColorFocus
  };
  const overlayTheme = {
    background: isLight ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.9)"
  };
  const weaker2WithoutBorder = {
    ...weaker2,
    borderColor: "transparent",
    borderColorHover: "transparent"
  };
  return {
    ListItem: isLight ? stronger1 : base,
    Card: weaker1,
    Button: weaker2WithoutBorder,
    Checkbox: weaker2,
    DrawerFrame: weaker1,
    SliderTrack: stronger1,
    SliderTrackActive: weaker2,
    SliderThumb: inverse1,
    Progress: weaker1,
    ProgressIndicator: inverse,
    Switch: weaker2,
    SwitchThumb: inverse2,
    TooltipArrow: weaker1,
    TooltipContent: weaker2,
    Input: strongerBorderLighterBackground,
    TextArea: strongerBorderLighterBackground,
    Tooltip: inverse1,
    // make overlays always dark
    SheetOverlay: overlayTheme,
    DialogOverlay: overlayTheme,
    ModalOverlay: overlayTheme
  };
}
const themes = {
  ...allThemes,
  // bring back the full type, the rest use a subset to avoid clogging up ts,
  // tamagui will be smart and use the top level themes as the type for useTheme() etc
  light: createTheme(palettes.light, lightTemplate, { nonInheritedValues: lightColors }),
  dark: createTheme(palettes.dark, darkTemplate, { nonInheritedValues: darkColors })
};

//# sourceMappingURL=themes.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/animations-react-native/dist/cjs/index.js
var animations_react_native_dist_cjs = __webpack_require__(7853);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/config/dist/esm/animations.js

const animations = (0,animations_react_native_dist_cjs.createAnimations)({
  "100ms": {
    type: "timing",
    duration: 100
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150
  },
  lazy: {
    damping: 18,
    stiffness: 50
  },
  slow: {
    damping: 15,
    stiffness: 40
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100
  }
});

//# sourceMappingURL=animations.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/config/dist/esm/createGenericFont.js

const genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};
function createGenericFont(family, font = {}, {
  sizeLineHeight = (val) => val * 1.35
} = {}) {
  const size = font.size || genericFontSizes;
  return (0,dist_cjs.createFont)({
    family,
    size,
    lineHeight: Object.fromEntries(
      Object.entries(size).map(([k, v]) => [k, sizeLineHeight(+v)])
    ),
    weight: { 0: "300" },
    letterSpacing: { 4: 0 },
    ...font
  });
}

//# sourceMappingURL=createGenericFont.js.map

// EXTERNAL MODULE: ../../node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js
var react_native_media_driver_dist_cjs = __webpack_require__(3219);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/config/dist/esm/media.js

const demoMedia = (/* unused pure expression or super */ null && ([500, 620, 780, 900]));
const widths = (/* unused pure expression or super */ null && ([660, 800, 1020, 1280]));
const media = (0,react_native_media_driver_dist_cjs.createMedia)({
  // for site
  xl: { maxWidth: 1650 },
  lg: { maxWidth: 1280 },
  md: { maxWidth: 1020 },
  sm: { maxWidth: 800 },
  xs: { maxWidth: 660 },
  xxs: { maxWidth: 390 },
  gtXs: { minWidth: 660 + 1 },
  gtSm: { minWidth: 800 + 1 },
  gtMd: { minWidth: 1020 + 1 },
  gtLg: { minWidth: 1280 + 1 },
  gtXl: { minWidth: 1650 + 1 }
});
const mediaQueryDefaultActive = {
  xl: true,
  lg: true,
  md: true,
  sm: true,
  xs: true,
  // false
  xxs: false
};

//# sourceMappingURL=media.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/config/dist/esm/tamagui.config.js








const silkscreenFont = createSilkscreenFont();
const headingFont = createInterFont(
  {
    size: {
      5: 13,
      6: 15,
      9: 32,
      10: 44
    },
    transform: {
      6: "uppercase",
      7: "none"
    },
    weight: {
      6: "400",
      7: "700"
    },
    color: {
      6: "$colorFocus",
      7: "$color"
    },
    letterSpacing: {
      5: 2,
      6: 1,
      7: 0,
      8: 0,
      9: -1,
      10: -1.5,
      12: -2,
      14: -3,
      15: -4
    },
    // for native
    face: {
      700: { normal: "InterBold" },
      800: { normal: "InterBold" },
      900: { normal: "InterBold" }
    }
  },
  { sizeLineHeight: (size) => Math.round(size * 1.1 + (size < 30 ? 10 : 5)) }
);
const bodyFont = createInterFont(
  {
    weight: {
      1: "400",
      7: "600"
    }
  },
  {
    sizeSize: (size) => Math.round(size),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size >= 12 ? 8 : 4))
  }
);
const monoFont = createGenericFont(
  `"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`,
  {
    weight: {
      1: "500"
    },
    size: {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 22,
      9: 30,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124
    }
  },
  {
    sizeLineHeight: (x) => x * 1.5
  }
);
const config = {
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  animations: animations,
  themes: themes,
  media: media,
  shorthands: shorthands,
  tokens: tokens,
  fonts: {
    // noto: notoFont as any,
    heading: headingFont,
    body: bodyFont,
    mono: monoFont,
    silkscreen: silkscreenFont
  }
};
config.selectionStyles = (theme) => ({
  backgroundColor: theme.color5,
  color: theme.color11
});
config.mediaQueryDefaultActive = mediaQueryDefaultActive;

//# sourceMappingURL=tamagui.config.js.map


/***/ }),

/***/ 2539:
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
var createMedia_exports = {};
__export(createMedia_exports, {
  createMedia: () => createMedia
});
module.exports = __toCommonJS(createMedia_exports);
var import_web = __webpack_require__(1444);
var import_matchMedia = __webpack_require__(3089);
function createMedia(media) {
  (0, import_web.setupMatchMedia)(import_matchMedia.matchMedia);
  return media;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createMedia.js.map


/***/ }),

/***/ 3219:
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
__reExport(src_exports, __webpack_require__(2539), module.exports);
__reExport(src_exports, __webpack_require__(3089), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3089:
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
var matchMedia_exports = {};
__export(matchMedia_exports, {
  matchMedia: () => matchMedia
});
module.exports = __toCommonJS(matchMedia_exports);
const matchMedia = globalThis["matchMedia"];
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=matchMedia.js.map


/***/ }),

/***/ 727:
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
var PressResponder_exports = {};
__export(PressResponder_exports, {
  default: () => PressResponder
});
module.exports = __toCommonJS(PressResponder_exports);
const DELAY = "DELAY";
const ERROR = "ERROR";
const LONG_PRESS_DETECTED = "LONG_PRESS_DETECTED";
const NOT_RESPONDER = "NOT_RESPONDER";
const RESPONDER_ACTIVE_LONG_PRESS_START = "RESPONDER_ACTIVE_LONG_PRESS_START";
const RESPONDER_ACTIVE_PRESS_START = "RESPONDER_ACTIVE_PRESS_START";
const RESPONDER_INACTIVE_PRESS_START = "RESPONDER_INACTIVE_PRESS_START";
const RESPONDER_GRANT = "RESPONDER_GRANT";
const RESPONDER_RELEASE = "RESPONDER_RELEASE";
const RESPONDER_TERMINATED = "RESPONDER_TERMINATED";
const Transitions = Object.freeze({
  NOT_RESPONDER: {
    DELAY: ERROR,
    RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
    RESPONDER_RELEASE: ERROR,
    RESPONDER_TERMINATED: ERROR,
    LONG_PRESS_DETECTED: ERROR
  },
  RESPONDER_INACTIVE_PRESS_START: {
    DELAY: RESPONDER_ACTIVE_PRESS_START,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: ERROR
  },
  RESPONDER_ACTIVE_PRESS_START: {
    DELAY: ERROR,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
  },
  RESPONDER_ACTIVE_LONG_PRESS_START: {
    DELAY: ERROR,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
  },
  ERROR: {
    DELAY: NOT_RESPONDER,
    RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: NOT_RESPONDER
  }
});
const isActiveSignal = (signal) => signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
const isButtonRole = (element) => element.getAttribute("role") === "button";
const isPressStartSignal = (signal) => signal === RESPONDER_INACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
const isTerminalSignal = (signal) => signal === RESPONDER_TERMINATED || signal === RESPONDER_RELEASE;
const isValidKeyPress = (event) => {
  const key = event.key;
  const target = event.target;
  const role = target.getAttribute("role");
  const isSpacebar = key === " " || key === "Spacebar";
  return key === "Enter" || isSpacebar && role === "button";
};
const DEFAULT_LONG_PRESS_DELAY_MS = 450;
const DEFAULT_PRESS_DELAY_MS = 50;
class PressResponder {
  constructor(config) {
    this._touchActivatePosition = null;
    this._pressDelayTimeout = 0;
    this._selectionTerminated = false;
    this._isPointerTouch = false;
    this._longPressDelayTimeout = 0;
    this._longPressDispatched = false;
    this._pressOutDelayTimeout = 0;
    this._touchState = NOT_RESPONDER;
    this._config = null;
    this._eventHandlers = null;
    this.configure(config);
  }
  configure(config) {
    this._config = config;
  }
  /**
   * Resets any pending timers. This should be called on unmount.
   */
  reset() {
    this._cancelLongPressDelayTimeout();
    this._cancelPressDelayTimeout();
    this._cancelPressOutDelayTimeout();
  }
  /**
   * Returns a set of props to spread into the interactive element.
   */
  getEventHandlers() {
    if (this._eventHandlers == null) {
      this._eventHandlers = this._createEventHandlers();
    }
    return this._eventHandlers;
  }
  _createEventHandlers() {
    const start = (event, shouldDelay) => {
      event.persist();
      this._cancelPressOutDelayTimeout();
      this._longPressDispatched = false;
      this._selectionTerminated = false;
      this._touchState = NOT_RESPONDER;
      this._isPointerTouch = event.nativeEvent.type === "touchstart";
      this._receiveSignal(RESPONDER_GRANT, event);
      const delayPressStart = normalizeDelay(
        this._config.delayPressStart,
        0,
        DEFAULT_PRESS_DELAY_MS
      );
      if (shouldDelay !== false && delayPressStart > 0) {
        this._pressDelayTimeout = setTimeout(() => {
          this._receiveSignal(DELAY, event);
        }, delayPressStart);
      } else {
        this._receiveSignal(DELAY, event);
      }
      const delayLongPress = normalizeDelay(
        this._config.delayLongPress,
        10,
        DEFAULT_LONG_PRESS_DELAY_MS
      );
      this._longPressDelayTimeout = setTimeout(() => {
        this._handleLongPress(event);
      }, delayLongPress + delayPressStart);
    };
    const end = (event) => {
      this._receiveSignal(RESPONDER_RELEASE, event);
    };
    const keyupHandler = (event) => {
      const onPress = this._config.onPress;
      const target = event.target;
      if (this._touchState !== NOT_RESPONDER && isValidKeyPress(event)) {
        end(event);
        document.removeEventListener("keyup", keyupHandler);
        const role = target.getAttribute("role");
        const elementType = target.tagName.toLowerCase();
        const isNativeInteractiveElement = role === "link" || elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea";
        if (onPress != null && !isNativeInteractiveElement) {
          onPress(event);
        }
      }
    };
    return {
      onStartShouldSetResponder: (event) => {
        const disabled = this._config.disabled;
        if (disabled && isButtonRole(event.currentTarget)) {
          event.stopPropagation();
        }
        if (disabled == null) {
          return true;
        }
        return !disabled;
      },
      onKeyDown: (event) => {
        const disabled = this._config.disabled;
        const key = event.key;
        const target = event.target;
        if (!disabled && isValidKeyPress(event)) {
          if (this._touchState === NOT_RESPONDER) {
            start(event, false);
            document.addEventListener("keyup", keyupHandler);
          }
          const role = target.getAttribute("role");
          const isSpacebarKey = key === " " || key === "Spacebar";
          const _isButtonRole = role === "button" || role === "menuitem";
          if (isSpacebarKey && _isButtonRole) {
            event.preventDefault();
          }
          event.stopPropagation();
        }
      },
      onResponderGrant: (event) => start(event),
      onResponderMove: (event) => {
        if (this._config.onPressMove != null) {
          this._config.onPressMove(event);
        }
        const touch = getTouchFromResponderEvent(event);
        if (this._touchActivatePosition != null) {
          const deltaX = this._touchActivatePosition.pageX - touch.pageX;
          const deltaY = this._touchActivatePosition.pageY - touch.pageY;
          if (Math.hypot(deltaX, deltaY) > 10) {
            this._cancelLongPressDelayTimeout();
          }
        }
      },
      onResponderRelease: (event) => end(event),
      onResponderTerminate: (event) => {
        if (event.nativeEvent.type === "selectionchange") {
          this._selectionTerminated = true;
        }
        this._receiveSignal(RESPONDER_TERMINATED, event);
      },
      onResponderTerminationRequest: (event) => {
        const _this$_config = this._config;
        const cancelable = _this$_config.cancelable;
        const disabled = _this$_config.disabled;
        const onLongPress = _this$_config.onLongPress;
        if (!disabled && onLongPress != null && this._isPointerTouch && event.nativeEvent.type === "contextmenu") {
          return false;
        }
        if (cancelable == null) {
          return true;
        }
        return cancelable;
      },
      // NOTE: this diverges from react-native in 3 significant ways:
      // * The `onPress` callback is not connected to the responder system (the native
      //  `click` event must be used but is dispatched in many scenarios where no pointers
      //   are on the screen.) Therefore, it's possible for `onPress` to be called without
      //   `onPress{Start,End}` being called first.
      // * The `onPress` callback is only be called on the first ancestor of the native
      //   `click` target that is using the PressResponder.
      // * The event's `nativeEvent` is a `MouseEvent` not a `TouchEvent`.
      onClick: (event) => {
        const _this$_config2 = this._config;
        const disabled = _this$_config2.disabled;
        const onPress = _this$_config2.onPress;
        if (!disabled) {
          event.stopPropagation();
          if (this._longPressDispatched || this._selectionTerminated) {
            event.preventDefault();
          } else if (onPress != null && event.altKey === false) {
            onPress(event);
          }
        } else {
          if (isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
        }
      },
      // If `onLongPress` is provided and a touch pointer is being used, prevent the
      // default context menu from opening.
      onContextMenu: (event) => {
        const _this$_config3 = this._config;
        const disabled = _this$_config3.disabled;
        const onLongPress = _this$_config3.onLongPress;
        if (!disabled) {
          if (onLongPress != null && this._isPointerTouch && !event.defaultPrevented) {
            event.preventDefault();
            event.stopPropagation();
          }
        } else {
          if (isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
        }
      }
    };
  }
  /**
   * Receives a state machine signal, performs side effects of the transition
   * and stores the new state. Validates the transition as well.
   */
  _receiveSignal(signal, event) {
    const prevState = this._touchState;
    let nextState = null;
    if (Transitions[prevState] != null) {
      nextState = Transitions[prevState][signal];
    }
    if (this._touchState === NOT_RESPONDER && signal === RESPONDER_RELEASE) {
      return;
    }
    if (nextState == null || nextState === ERROR) {
      console.error(
        `PressResponder: Invalid signal ${signal} for state ${prevState} on responder`
      );
    } else if (prevState !== nextState) {
      this._performTransitionSideEffects(prevState, nextState, signal, event);
      this._touchState = nextState;
    }
  }
  /**
   * Performs a transition between touchable states and identify any activations
   * or deactivations (and callback invocations).
   */
  _performTransitionSideEffects(prevState, nextState, signal, event) {
    if (isTerminalSignal(signal)) {
      setTimeout(() => {
        this._isPointerTouch = false;
      }, 0);
      this._touchActivatePosition = null;
      this._cancelLongPressDelayTimeout();
    }
    if (isPressStartSignal(prevState) && signal === LONG_PRESS_DETECTED) {
      const onLongPress = this._config.onLongPress;
      if (onLongPress != null && event.nativeEvent.key == null) {
        onLongPress(event);
        this._longPressDispatched = true;
      }
    }
    const isPrevActive = isActiveSignal(prevState);
    const isNextActive = isActiveSignal(nextState);
    if (!isPrevActive && isNextActive) {
      this._activate(event);
    } else if (isPrevActive && !isNextActive) {
      this._deactivate(event);
    }
    if (isPressStartSignal(prevState) && signal === RESPONDER_RELEASE) {
      const _this$_config4 = this._config;
      const _onLongPress = _this$_config4.onLongPress;
      const onPress = _this$_config4.onPress;
      if (onPress != null) {
        const isPressCanceledByLongPress = _onLongPress != null && prevState === RESPONDER_ACTIVE_LONG_PRESS_START;
        if (!isPressCanceledByLongPress) {
          if (!(isNextActive || isPrevActive)) {
            this._activate(event);
            this._deactivate(event);
          }
        }
      }
    }
    this._cancelPressDelayTimeout();
  }
  _activate(event) {
    const _this$_config5 = this._config;
    const onPressChange = _this$_config5.onPressChange;
    const onPressStart = _this$_config5.onPressStart;
    const touch = getTouchFromResponderEvent(event);
    this._touchActivatePosition = {
      pageX: touch.pageX,
      pageY: touch.pageY
    };
    if (onPressStart != null) {
      onPressStart(event);
    }
    if (onPressChange != null) {
      onPressChange(true);
    }
  }
  _deactivate(event) {
    const _this$_config6 = this._config;
    const onPressChange = _this$_config6.onPressChange;
    const onPressEnd = _this$_config6.onPressEnd;
    function end() {
      if (onPressEnd != null) {
        onPressEnd(event);
      }
      if (onPressChange != null) {
        onPressChange(false);
      }
    }
    const delayPressEnd = normalizeDelay(this._config.delayPressEnd);
    if (delayPressEnd > 0) {
      this._pressOutDelayTimeout = setTimeout(() => {
        end();
      }, delayPressEnd);
    } else {
      end();
    }
  }
  _handleLongPress(event) {
    if (this._touchState === RESPONDER_ACTIVE_PRESS_START || this._touchState === RESPONDER_ACTIVE_LONG_PRESS_START) {
      this._receiveSignal(LONG_PRESS_DETECTED, event);
    }
  }
  _cancelLongPressDelayTimeout() {
    if (this._longPressDelayTimeout != null) {
      clearTimeout(this._longPressDelayTimeout);
      this._longPressDelayTimeout = null;
    }
  }
  _cancelPressDelayTimeout() {
    if (this._pressDelayTimeout != null) {
      clearTimeout(this._pressDelayTimeout);
      this._pressDelayTimeout = null;
    }
  }
  _cancelPressOutDelayTimeout() {
    if (this._pressOutDelayTimeout != null) {
      clearTimeout(this._pressOutDelayTimeout);
      this._pressOutDelayTimeout = null;
    }
  }
}
function normalizeDelay(delay, min, fallback) {
  if (min === void 0) {
    min = 0;
  }
  if (fallback === void 0) {
    fallback = 0;
  }
  return Math.max(min, delay !== null && delay !== void 0 ? delay : fallback);
}
function getTouchFromResponderEvent(event) {
  const _event$nativeEvent = event.nativeEvent;
  const changedTouches = _event$nativeEvent.changedTouches;
  const touches = _event$nativeEvent.touches;
  if (touches != null && touches.length > 0) {
    return touches[0];
  }
  if (changedTouches != null && changedTouches.length > 0) {
    return changedTouches[0];
  }
  return event.nativeEvent;
}
//# sourceMappingURL=PressResponder.js.map


/***/ }),

/***/ 7938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var src_exports = {};
__export(src_exports, {
  usePressEvents: () => usePressEvents
});
module.exports = __toCommonJS(src_exports);
var import_react = __webpack_require__(6689);
var import_PressResponder = __toESM(__webpack_require__(727));
function usePressEvents(config) {
  const pressResponderRef = (0, import_react.useRef)(null);
  if (pressResponderRef.current == null) {
    pressResponderRef.current = new import_PressResponder.default(config);
  }
  const pressResponder = pressResponderRef.current;
  (0, import_react.useEffect)(() => {
    pressResponder.configure(config);
  }, [config, pressResponder]);
  (0, import_react.useEffect)(() => {
    return () => {
      pressResponder.reset();
    };
  }, [pressResponder]);
  (0, import_react.useDebugValue)(config);
  return pressResponder.getEventHandlers();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7409:
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
var PresenceContext_exports = {};
__export(PresenceContext_exports, {
  PresenceContext: () => PresenceContext
});
module.exports = __toCommonJS(PresenceContext_exports);
var import_react = __webpack_require__(6689);
const PresenceContext = (0, import_react.createContext)(null);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=PresenceContext.js.map


/***/ }),

/***/ 6185:
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
__reExport(src_exports, __webpack_require__(7409), module.exports);
__reExport(src_exports, __webpack_require__(498), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 498:
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
var usePresence_exports = {};
__export(usePresence_exports, {
  isPresent: () => isPresent,
  useIsPresent: () => useIsPresent,
  usePresence: () => usePresence
});
module.exports = __toCommonJS(usePresence_exports);
var import_react = __webpack_require__(6689);
var import_PresenceContext = __webpack_require__(7409);
function usePresence() {
  const context = (0, import_react.useContext)(import_PresenceContext.PresenceContext);
  if (!context) {
    return [true, null, context];
  }
  const { isPresent: isPresent2, onExitComplete, register } = context;
  const id = (0, import_react.useId)() || "";
  (0, import_react.useEffect)(() => register(id), [id, register]);
  const safeToRemove = () => onExitComplete == null ? void 0 : onExitComplete(id);
  return !isPresent2 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
}
function useIsPresent() {
  return isPresent((0, import_react.useContext)(import_PresenceContext.PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=usePresence.js.map


/***/ }),

/***/ 7353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ createTamagui)
/* harmony export */ });
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2026);
/* harmony import */ var _tamagui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tamagui_core__WEBPACK_IMPORTED_MODULE_0__);

const createTamagui =  true ? _tamagui_core__WEBPACK_IMPORTED_MODULE_0__.createTamagui : 0;
 //# sourceMappingURL=createTamagui.js.map


/***/ }),

/***/ 7559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var createReactDOMStyle_exports = {};
__export(createReactDOMStyle_exports, {
  createTransformValue: () => createTransformValue,
  default: () => createReactDOMStyle_default
});
module.exports = __toCommonJS(createReactDOMStyle_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
var import_normalizeValueWithProperty = __toESM(__webpack_require__(139));
const emptyObject = {};
const supportsCSS3TextDecoration = !import_canUseDOM.default || window.CSS != null && window.CSS.supports != null && (window.CSS.supports("text-decoration-line", "none") || window.CSS.supports("-webkit-text-decoration-line", "none"));
const ignoredProps = {
  elevation: true,
  overlayColor: true,
  resizeMode: true,
  tintColor: true
};
const MONOSPACE_FONT_STACK = "monospace,monospace";
const SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';
const STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: [
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
  ],
  borderRadius: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius"
  ],
  borderStyle: [
    "borderTopStyle",
    "borderRightStyle",
    "borderBottomStyle",
    "borderLeftStyle"
  ],
  borderWidth: [
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth"
  ],
  marginHorizontal: ["marginRight", "marginLeft"],
  marginVertical: ["marginTop", "marginBottom"],
  overflow: ["overflowX", "overflowY"],
  overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
  paddingHorizontal: ["paddingRight", "paddingLeft"],
  paddingVertical: ["paddingTop", "paddingBottom"]
};
const mapTransform = (transform) => {
  const type = Object.keys(transform)[0];
  const value = transform[type];
  if (type === "matrix" || type === "matrix3d") {
    return `${type}(${value.join(",")})`;
  } else {
    const normalizedValue = (0, import_normalizeValueWithProperty.default)(value, type);
    return `${type}(${normalizedValue})`;
  }
};
const createTransformValue = (style) => {
  let transform = style.transform;
  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(" ");
  }
  return transform;
};
const createReactDOMStyle = (style, isInline) => {
  if (!style) {
    return emptyObject;
  }
  const resolvedStyle = {};
  for (const prop in style) {
    const value = style[prop];
    if (
      // Ignore everything with a null value
      value == null || // Ignore some React Native styles
      ignoredProps[prop]
    ) {
      continue;
    }
    if (prop === "aspectRatio") {
      resolvedStyle[prop] = value.toString();
    } else if (prop === "backgroundClip") {
      if (value === "text") {
        resolvedStyle.backgroundClip = value;
        resolvedStyle.WebkitBackgroundClip = value;
      }
    } else if (prop === "flex") {
      if (value === -1) {
        resolvedStyle.flexGrow = 0;
        resolvedStyle.flexShrink = 1;
        resolvedStyle.flexBasis = "auto";
      } else {
        resolvedStyle.flex = value;
      }
    } else if (prop === "font") {
      resolvedStyle[prop] = value.replace("System", SYSTEM_FONT_STACK);
    } else if (prop === "fontFamily") {
      if (value.indexOf("System") > -1) {
        const stack = value.split(/,\s*/);
        stack[stack.indexOf("System")] = SYSTEM_FONT_STACK;
        resolvedStyle[prop] = stack.join(",");
      } else if (value === "monospace") {
        resolvedStyle[prop] = MONOSPACE_FONT_STACK;
      } else {
        resolvedStyle[prop] = value;
      }
    } else if (prop === "fontVariant") {
      if (Array.isArray(value) && value.length > 0) {
        resolvedStyle.fontVariant = value.join(" ");
      }
    } else if (prop === "textAlignVertical") {
      resolvedStyle.verticalAlign = value === "center" ? "middle" : value;
    } else if (prop === "textDecorationLine") {
      if (!supportsCSS3TextDecoration) {
        resolvedStyle.textDecoration = value;
      } else {
        resolvedStyle.textDecorationLine = value;
      }
    } else if (prop === "transform" || prop === "transformMatrix") {
      resolvedStyle.transform = createTransformValue(style);
    } else if (prop === "writingDirection") {
      resolvedStyle.direction = value;
    } else {
      const value2 = (0, import_normalizeValueWithProperty.default)(style[prop], prop);
      const longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];
      if (isInline && prop === "margin") {
        if (style.marginHorizontal == null) {
          resolvedStyle.marginLeft = value2;
          resolvedStyle.marginRight = value2;
        }
        if (style.marginVertical == null) {
          resolvedStyle.marginTop = value2;
          resolvedStyle.marginBottom = value2;
        }
      } else if (isInline && prop === "padding") {
        if (style.paddingHorizontal == null) {
          resolvedStyle.paddingLeft = value2;
          resolvedStyle.paddingRight = value2;
        }
        if (style.paddingVertical == null) {
          resolvedStyle.paddingTop = value2;
          resolvedStyle.paddingBottom = value2;
        }
      } else if (longFormProperties) {
        longFormProperties.forEach((longForm, i) => {
          if (style[longForm] == null) {
            resolvedStyle[longForm] = value2;
          }
        });
      } else {
        resolvedStyle[prop] = Array.isArray(value2) ? value2.join(",") : value2;
      }
    }
  }
  return resolvedStyle;
};
var createReactDOMStyle_default = createReactDOMStyle;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=createReactDOMStyle.js.map


/***/ }),

/***/ 126:
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
var hyphenateStyleName_exports = {};
__export(hyphenateStyleName_exports, {
  default: () => hyphenateStyleName_default
});
module.exports = __toCommonJS(hyphenateStyleName_exports);
const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (name in cache) {
    return cache[name];
  }
  const hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenateStyleName_default = hyphenateStyleName;
//# sourceMappingURL=hyphenateStyleName.js.map


/***/ }),

/***/ 1814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var compiler_exports = {};
__export(compiler_exports, {
  atomic: () => atomic,
  classic: () => classic,
  inline: () => inline,
  stringifyValueWithProperty: () => stringifyValueWithProperty
});
module.exports = __toCommonJS(compiler_exports);
var import_simple_hash = __webpack_require__(9949);
var import_createReactDOMStyle = __toESM(__webpack_require__(7559));
var import_hyphenateStyleName = __toESM(__webpack_require__(126));
var import_normalizeValueWithProperty = __toESM(__webpack_require__(139));
const cache = /* @__PURE__ */ new Map();
const emptyObject = {};
const classicGroup = 1;
const atomicGroup = 2.2;
const customGroup = {
  borderColor: 2,
  borderRadius: 2,
  borderStyle: 2,
  borderWidth: 2,
  display: 2,
  flex: 2,
  margin: 2,
  overflow: 2,
  overscrollBehavior: 2,
  padding: 2,
  marginHorizontal: 2.1,
  marginVertical: 2.1,
  paddingHorizontal: 2.1,
  paddingVertical: 2.1
};
const borderTopLeftRadius = "borderTopLeftRadius";
const borderTopRightRadius = "borderTopRightRadius";
const borderBottomLeftRadius = "borderBottomLeftRadius";
const borderBottomRightRadius = "borderBottomRightRadius";
const borderLeftColor = "borderLeftColor";
const borderLeftStyle = "borderLeftStyle";
const borderLeftWidth = "borderLeftWidth";
const borderRightColor = "borderRightColor";
const borderRightStyle = "borderRightStyle";
const borderRightWidth = "borderRightWidth";
const right = "right";
const marginLeft = "marginLeft";
const marginRight = "marginRight";
const paddingLeft = "paddingLeft";
const paddingRight = "paddingRight";
const left = "left";
const PROPERTIES_FLIP = {
  [borderTopLeftRadius]: borderTopRightRadius,
  [borderTopRightRadius]: borderTopLeftRadius,
  [borderBottomLeftRadius]: borderBottomRightRadius,
  [borderBottomRightRadius]: borderBottomLeftRadius,
  [borderLeftColor]: borderRightColor,
  [borderLeftStyle]: borderRightStyle,
  [borderLeftWidth]: borderRightWidth,
  [borderRightColor]: borderLeftColor,
  [borderRightStyle]: borderLeftStyle,
  [borderRightWidth]: borderLeftWidth,
  [left]: right,
  [marginLeft]: marginRight,
  [marginRight]: marginLeft,
  [paddingLeft]: paddingRight,
  [paddingRight]: paddingLeft,
  [right]: left
};
const PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
const PROPERTIES_VALUE = ["clear", "float", "textAlign"];
function atomic(style) {
  const compiledStyle = { $$css: true };
  const compiledRules = [];
  function atomicCompile(prop, value) {
    const valueString = stringifyValueWithProperty(value, prop);
    const cacheKey = prop + valueString;
    const cachedResult = cache.get(cacheKey);
    let identifier;
    if (cachedResult != null) {
      identifier = cachedResult[0];
      compiledRules.push(cachedResult[1]);
    } else {
      identifier = createIdentifier("r", prop, value);
      const order = customGroup[prop] || atomicGroup;
      const rules = createAtomicRules(identifier, prop, value);
      const orderedRules = [rules, order];
      compiledRules.push(orderedRules);
      cache.set(cacheKey, [identifier, orderedRules]);
    }
    return identifier;
  }
  Object.keys(style).sort().forEach((prop) => {
    const value = style[prop];
    if (value != null) {
      let localizeableValue;
      if (PROPERTIES_VALUE.indexOf(prop) > -1) {
        const left2 = atomicCompile(prop, "left");
        const right2 = atomicCompile(prop, "right");
        if (value === "start") {
          localizeableValue = [left2, right2];
        } else if (value === "end") {
          localizeableValue = [right2, left2];
        }
      }
      const propPolyfill = PROPERTIES_I18N[prop];
      if (propPolyfill != null) {
        const ltr = atomicCompile(propPolyfill, value);
        const rtl = atomicCompile(PROPERTIES_FLIP[propPolyfill], value);
        localizeableValue = [ltr, rtl];
      }
      if (prop === "transitionProperty") {
        const values = Array.isArray(value) ? value : [value];
        const polyfillIndices = [];
        for (let i = 0; i < values.length; i++) {
          const val = values[i];
          if (typeof val === "string" && PROPERTIES_I18N[val] != null) {
            polyfillIndices.push(i);
          }
        }
        if (polyfillIndices.length > 0) {
          const ltrPolyfillValues = [...values];
          const rtlPolyfillValues = [...values];
          polyfillIndices.forEach((i) => {
            const ltrVal = ltrPolyfillValues[i];
            if (typeof ltrVal === "string") {
              const ltrPolyfill = PROPERTIES_I18N[ltrVal];
              const rtlPolyfill = PROPERTIES_FLIP[ltrPolyfill];
              ltrPolyfillValues[i] = ltrPolyfill;
              rtlPolyfillValues[i] = rtlPolyfill;
              const ltr = atomicCompile(prop, ltrPolyfillValues);
              const rtl = atomicCompile(prop, rtlPolyfillValues);
              localizeableValue = [ltr, rtl];
            }
          });
        }
      }
      if (localizeableValue == null) {
        localizeableValue = atomicCompile(prop, value);
      } else {
        compiledStyle["$$css$localize"] = true;
      }
      compiledStyle[prop] = localizeableValue;
    }
  });
  return [compiledStyle, compiledRules];
}
function classic(style, name) {
  const compiledStyle = { $$css: true };
  const compiledRules = [];
  const { animationKeyframes, ...rest } = style;
  const identifier = createIdentifier("css", name, style);
  const selector = `.${identifier}`;
  let animationName;
  if (animationKeyframes != null) {
    const [animationNames, keyframesRules] = processKeyframesValue(animationKeyframes);
    animationName = animationNames.join(",");
    compiledRules.push(...keyframesRules);
  }
  const block = createDeclarationBlock({ ...rest, animationName });
  compiledRules.push(`${selector}${block}`);
  compiledStyle[identifier] = identifier;
  return [compiledStyle, [[compiledRules, classicGroup]]];
}
function inline(originalStyle, isRTL) {
  const style = originalStyle || emptyObject;
  const frozenProps = {};
  const nextStyle = {};
  for (const originalProp in style) {
    const originalValue = style[originalProp];
    let prop = originalProp;
    let value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      continue;
    }
    if (PROPERTIES_VALUE.indexOf(originalProp) > -1) {
      if (originalValue === "start") {
        value = isRTL ? "right" : "left";
      } else if (originalValue === "end") {
        value = isRTL ? "left" : "right";
      }
    }
    const propPolyfill = PROPERTIES_I18N[originalProp];
    if (propPolyfill != null) {
      prop = isRTL ? PROPERTIES_FLIP[propPolyfill] : propPolyfill;
    }
    if (originalProp === "transitionProperty") {
      const originalValues = Array.isArray(originalValue) ? originalValue : [originalValue];
      originalValues.forEach((val, i) => {
        if (typeof val === "string") {
          const valuePolyfill = PROPERTIES_I18N[val];
          if (valuePolyfill != null) {
            originalValues[i] = isRTL ? PROPERTIES_FLIP[valuePolyfill] : valuePolyfill;
          }
        }
      });
    }
    if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }
    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      frozenProps[prop] = true;
    }
  }
  return (0, import_createReactDOMStyle.default)(nextStyle, true);
}
function stringifyValueWithProperty(value, property) {
  const normalizedValue = (0, import_normalizeValueWithProperty.default)(value, property);
  return typeof normalizedValue !== "string" ? JSON.stringify(normalizedValue || "") : normalizedValue;
}
function createAtomicRules(identifier, property, value) {
  const rules = [];
  const selector = `.${identifier}`;
  switch (property) {
    case "animationKeyframes": {
      const [animationNames, keyframesRules] = processKeyframesValue(value);
      const block = createDeclarationBlock({
        animationName: animationNames.join(",")
      });
      rules.push(`${selector}${block}`, ...keyframesRules);
      break;
    }
    case "placeholderTextColor": {
      const block = createDeclarationBlock({ color: value, opacity: 1 });
      rules.push(
        `${selector}::-webkit-input-placeholder${block}`,
        `${selector}::-moz-placeholder${block}`,
        `${selector}:-ms-input-placeholder${block}`,
        `${selector}::placeholder${block}`
      );
      break;
    }
    case "pointerEvents": {
      let finalValue = value;
      if (value === "auto" || value === "box-only") {
        finalValue = "auto!important";
        if (value === "box-only") {
          const block2 = createDeclarationBlock({ pointerEvents: "none" });
          rules.push(`${selector}>*${block2}`);
        }
      } else if (value === "none" || value === "box-none") {
        finalValue = "none!important";
        if (value === "box-none") {
          const block2 = createDeclarationBlock({ pointerEvents: "auto" });
          rules.push(`${selector}>*${block2}`);
        }
      }
      const block = createDeclarationBlock({ pointerEvents: finalValue });
      rules.push(`${selector}${block}`);
      break;
    }
    case "scrollbarWidth": {
      if (value === "none") {
        rules.push(`${selector}::-webkit-scrollbar{display:none}`);
      }
      const block = createDeclarationBlock({ scrollbarWidth: value });
      rules.push(`${selector}${block}`);
      break;
    }
    default: {
      const block = createDeclarationBlock({ [property]: value });
      rules.push(`${selector}${block}`);
      break;
    }
  }
  return rules;
}
function createDeclarationBlock(style) {
  const domStyle = (0, import_createReactDOMStyle.default)(style);
  const declarationsString = Object.keys(domStyle).map((property) => {
    const value = domStyle[property];
    const prop = (0, import_hyphenateStyleName.default)(property);
    if (Array.isArray(value)) {
      return value.map((v) => `${prop}:${v}`).join(";");
    } else {
      return `${prop}:${value}`;
    }
  }).sort().join(";");
  return `{${declarationsString};}`;
}
function createIdentifier(prefix, name, value) {
  const hashedString = (0, import_simple_hash.simpleHash)(name + stringifyValueWithProperty(value, name));
  return  false ? 0 : `${prefix}-${hashedString}`;
}
function createKeyframes(keyframes) {
  const prefixes = ["-webkit-", ""];
  const identifier = createIdentifier("r", "animation", keyframes);
  const steps = "{" + Object.keys(keyframes).map((stepName) => {
    const rule = keyframes[stepName];
    const block = createDeclarationBlock(rule);
    return `${stepName}${block}`;
  }).join("") + "}";
  const rules = prefixes.map((prefix) => {
    return `@${prefix}keyframes ${identifier}${steps}`;
  });
  return [identifier, rules];
}
function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === "number") {
    throw new Error(`Invalid CSS keyframes type: ${typeof keyframesValue}`);
  }
  const animationNames = [];
  const rules = [];
  const value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach((keyframes) => {
    if (typeof keyframes === "string") {
      animationNames.push(keyframes);
    } else {
      const [identifier, keyframesRules] = createKeyframes(keyframes);
      animationNames.push(identifier);
      rules.push(...keyframesRules);
    }
  });
  return [animationNames, rules];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
  default: () => normalizeColor_default
});
module.exports = __toCommonJS(normalizeColor_exports);
var import_isWebColor = __toESM(__webpack_require__(9614));
var import_processColor = __webpack_require__(2642);
const normalizeColor = (color, opacity = 1) => {
  if (color == null)
    return;
  if (typeof color === "string" && (0, import_isWebColor.default)(color)) {
    return color;
  }
  const colorInt = (0, import_processColor.processColor)(color);
  if (colorInt != null) {
    const r = colorInt >> 16 & 255;
    const g = colorInt >> 8 & 255;
    const b = colorInt & 255;
    const a = (colorInt >> 24 & 255) / 255;
    const alpha = (a * opacity).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if (true) {
    if (typeof color === "string") {
      return color;
    }
  }
};
var normalizeColor_default = normalizeColor;
//# sourceMappingURL=normalizeColor.js.map


/***/ }),

/***/ 139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var normalizeValueWithProperty_exports = {};
__export(normalizeValueWithProperty_exports, {
  default: () => normalizeValueWithProperty
});
module.exports = __toCommonJS(normalizeValueWithProperty_exports);
var import_unitlessNumbers = __webpack_require__(950);
var import_normalizeColor = __toESM(__webpack_require__(9036));
const colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  let returnValue = value;
  if ((property == null || !import_unitlessNumbers.unitlessNumbers[property]) && typeof value === "number") {
    returnValue = `${value}px`;
  } else if (property != null && colorProps[property]) {
    returnValue = (0, import_normalizeColor.default)(value);
  }
  return returnValue;
}
//# sourceMappingURL=normalizeValueWithProperty.js.map


/***/ }),

/***/ 7512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var createCSSStyleSheet_exports = {};
__export(createCSSStyleSheet_exports, {
  default: () => createCSSStyleSheet
});
module.exports = __toCommonJS(createCSSStyleSheet_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
function createCSSStyleSheet(id, rootNode, textContent) {
  if (import_canUseDOM.default) {
    const root = rootNode != null ? rootNode : document;
    let element = root.getElementById(id);
    if (element == null) {
      element = document.createElement("style");
      element.setAttribute("id", id);
      if (typeof textContent === "string") {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        const head = root.head;
        if (head) {
          head.insertBefore(element, head.firstChild);
        }
      }
    }
    return element.sheet;
  } else {
    return null;
  }
}
//# sourceMappingURL=createCSSStyleSheet.js.map


/***/ }),

/***/ 993:
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
var createOrderedCSSStyleSheet_exports = {};
__export(createOrderedCSSStyleSheet_exports, {
  default: () => createOrderedCSSStyleSheet
});
module.exports = __toCommonJS(createOrderedCSSStyleSheet_exports);
const slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet) {
  const groups = {};
  const selectors = {};
  if (sheet != null) {
    let group;
    slice.call(sheet.cssRules).forEach((cssRule, i) => {
      const cssText = cssRule.cssText;
      if (cssText.indexOf("stylesheet-group") > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = { start: i, rules: [cssText] };
      } else {
        const selectorText = getSelectorText(cssText);
        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }
  function sheetInsert(sheet2, group, text) {
    const orderedGroups = getOrderedGroups(groups);
    const groupIndex = orderedGroups.indexOf(group);
    const nextGroupIndex = groupIndex + 1;
    const nextGroup = orderedGroups[nextGroupIndex];
    const position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet2.cssRules.length;
    const isInserted = insertRuleAt(sheet2, text, position);
    if (isInserted) {
      if (groups[group].start == null) {
        groups[group].start = position;
      }
      for (let i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        const groupNumber = orderedGroups[i];
        const previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }
    return isInserted;
  }
  const OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent() {
      return getOrderedGroups(groups).map((group) => {
        const rules = groups[group].rules;
        const marker = rules.shift();
        rules.sort();
        rules.unshift(marker);
        return rules.join("\n");
      }).join("\n");
    },
    /**
     * Insert a rule into the style sheet
     */
    insert(cssText, groupValue) {
      const group = Number(groupValue);
      if (groups[group] == null) {
        const markerRule = encodeGroupRule(group);
        groups[group] = { start: null, rules: [markerRule] };
        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }
      const selectorText = getSelectorText(cssText);
      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);
        if (sheet != null) {
          const isInserted = sheetInsert(sheet, group, cssText);
          if (!isInserted) {
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
function encodeGroupRule(group) {
  return `[stylesheet-group="${group}"]{}`;
}
const groupPattern = /["']/g;
function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(groupPattern)[1]);
}
function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort((a, b) => a > b ? 1 : -1);
}
const selectorPattern = /\s*([,])\s*/g;
function getSelectorText(cssText) {
  const selector = cssText.split("{")[0].trim();
  return selector !== "" ? selector.replace(selectorPattern, "$1") : null;
}
function insertRuleAt(root, cssText, position) {
  try {
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=createOrderedCSSStyleSheet.js.map


/***/ }),

/***/ 3197:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var dom_exports = {};
__export(dom_exports, {
  createSheet: () => createSheet
});
module.exports = __toCommonJS(dom_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
var import_createCSSStyleSheet = __toESM(__webpack_require__(7512));
var import_createOrderedCSSStyleSheet2 = __toESM(__webpack_require__(993));
const defaultId = "react-native-stylesheet";
const roots = /* @__PURE__ */ new WeakMap();
const sheets = [];
const initialRules = [
  // minimal top-level reset
  "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}",
  "body{margin:0;}",
  // minimal form pseudo-element reset
  "button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}",
  "input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"
];
function createSheet(root, id = defaultId) {
  let sheet;
  if (import_canUseDOM.default) {
    const rootNode = root != null ? root.getRootNode() : document;
    if (sheets.length === 0) {
      sheet = (0, import_createOrderedCSSStyleSheet2.default)((0, import_createCSSStyleSheet.default)(id));
      initialRules.forEach((rule) => {
        sheet.insert(rule, 0);
      });
      roots.set(rootNode, sheets.length);
      sheets.push(sheet);
    } else {
      const index = roots.get(rootNode);
      if (index == null) {
        const initialSheet = sheets[0];
        const textContent = initialSheet != null ? initialSheet.getTextContent() : "";
        sheet = (0, import_createOrderedCSSStyleSheet2.default)(
          (0, import_createCSSStyleSheet.default)(id, rootNode, textContent)
        );
        roots.set(rootNode, sheets.length);
        sheets.push(sheet);
      } else {
        sheet = sheets[index];
      }
    }
  } else {
    if (sheets.length === 0) {
      sheet = (0, import_createOrderedCSSStyleSheet2.default)((0, import_createCSSStyleSheet.default)(id));
      initialRules.forEach((rule) => {
        sheet.insert(rule, 0);
      });
      sheets.push(sheet);
    } else {
      sheet = sheets[0];
    }
  }
  return {
    getTextContent() {
      return sheet.getTextContent();
    },
    id,
    insert(cssText, groupValue) {
      sheets.forEach((s) => {
        s.insert(cssText, groupValue);
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5391:
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
var StyleSheet_exports = {};
__export(StyleSheet_exports, {
  default: () => StyleSheet,
  flatten: () => flatten
});
module.exports = __toCommonJS(StyleSheet_exports);
var import_styleq = __webpack_require__(8616);
var import_transform_localize_style = __webpack_require__(8688);
var import__ = __webpack_require__(2161);
var import_compiler = __webpack_require__(1814);
var import_dom = __webpack_require__(3197);
var import_preprocess = __webpack_require__(2791);
var import_validate = __webpack_require__(1518);
const staticStyleMap = /* @__PURE__ */ new WeakMap();
const sheet = (0, import_dom.createSheet)();
function customStyleq(styles, isRTL) {
  return import_styleq.styleq.factory({
    transform(style) {
      const compiledStyle = staticStyleMap.get(style);
      if (compiledStyle != null) {
        return (0, import_transform_localize_style.localizeStyle)(compiledStyle, isRTL);
      }
      return style;
    }
  })(styles);
}
function insertRules(compiledOrderedRules) {
  compiledOrderedRules.forEach(([rules, order]) => {
    if (sheet != null) {
      rules.forEach((rule) => {
        sheet.insert(rule, order);
      });
    }
  });
}
function compileAndInsertAtomic(style) {
  const [compiledStyle, compiledOrderedRules] = (0, import_compiler.atomic)((0, import_preprocess.preprocess)(style));
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
function compileAndInsertReset(style, key) {
  const [compiledStyle, compiledOrderedRules] = (0, import_compiler.classic)(style, key);
  insertRules(compiledOrderedRules);
  return compiledStyle;
}
const absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
const absoluteFill = create({ x: { ...absoluteFillObject } }).x;
function create(styles) {
  Object.keys(styles).forEach((key) => {
    const styleObj = styles[key];
    if (styleObj != null && styleObj.$$css !== true) {
      let compiledStyles;
      if (key.indexOf("$raw") > -1) {
        compiledStyles = compileAndInsertReset(styleObj, key.split("$raw")[0]);
      } else {
        if (false) {}
        compiledStyles = compileAndInsertAtomic(styleObj);
      }
      staticStyleMap.set(styleObj, compiledStyles);
    }
  });
  return styles;
}
function compose(style1, style2) {
  if (false) {}
  if (style1 && style2) {
    return [style1, style2];
  } else {
    return style1 || style2;
  }
}
function flatten(...styles) {
  const flatArray = styles.flat(Infinity);
  const result = {};
  for (let i = 0; i < flatArray.length; i++) {
    const style = flatArray[i];
    if (style != null && typeof style === "object") {
      Object.assign(result, style);
    }
  }
  return result;
}
function getSheet() {
  return {
    id: sheet.id,
    textContent: sheet.getTextContent()
  };
}
function StyleSheet(styles, options) {
  const isRTL = options != null && options.writingDirection === "rtl";
  const styleProps = customStyleq(styles, isRTL);
  if (Array.isArray(styleProps) && styleProps[1] != null) {
    styleProps[1] = (0, import_compiler.inline)((0, import_preprocess.preprocess)(styleProps[1]), isRTL);
  }
  return styleProps;
}
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
StyleSheet.hairlineWidth = 1;
setTimeout(() => {
  if (import__.canUseDOM && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet.flatten;
  }
}, 100);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var preprocess_exports = {};
__export(preprocess_exports, {
  createBoxShadowValue: () => createBoxShadowValue,
  createTextShadowValue: () => createTextShadowValue,
  preprocess: () => preprocess,
  processStyle: () => processStyle
});
module.exports = __toCommonJS(preprocess_exports);
var import_normalizeColor = __toESM(__webpack_require__(9036));
var import_normalizeValueWithProperty = __toESM(__webpack_require__(139));
const emptyObject = {};
const defaultOffset = { height: 0, width: 0 };
const createBoxShadowValue = (style) => {
  const { shadowColor, shadowOffset, shadowOpacity, shadowRadius } = style;
  const { height, width } = shadowOffset || defaultOffset;
  const offsetX = (0, import_normalizeValueWithProperty.default)(width);
  const offsetY = (0, import_normalizeValueWithProperty.default)(height);
  const blurRadius = (0, import_normalizeValueWithProperty.default)(shadowRadius || 0);
  const color = (0, import_normalizeColor.default)(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};
const createTextShadowValue = (style) => {
  const { textShadowColor, textShadowOffset, textShadowRadius } = style;
  const { height, width } = textShadowOffset || defaultOffset;
  const radius = textShadowRadius || 0;
  const offsetX = (0, import_normalizeValueWithProperty.default)(width);
  const offsetY = (0, import_normalizeValueWithProperty.default)(height);
  const blurRadius = (0, import_normalizeValueWithProperty.default)(radius);
  const color = (0, import_normalizeValueWithProperty.default)(textShadowColor, "textShadowColor");
  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};
const preprocess = (originalStyle) => {
  const style = originalStyle || emptyObject;
  const nextStyle = {};
  for (const originalProp in style) {
    const originalValue = style[originalProp];
    let prop = originalProp;
    let value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      continue;
    }
    if (prop === "shadowColor" || prop === "shadowOffset" || prop === "shadowOpacity" || prop === "shadowRadius") {
      const boxShadowValue = createBoxShadowValue(style);
      if (boxShadowValue != null && nextStyle.boxShadow == null) {
        const { boxShadow } = style;
        prop = "boxShadow";
        value = boxShadow ? `${boxShadow}, ${boxShadowValue}` : boxShadowValue;
      } else {
        continue;
      }
    }
    if (prop === "textShadowColor" || prop === "textShadowOffset" || prop === "textShadowRadius") {
      const textShadowValue = createTextShadowValue(style);
      if (textShadowValue != null && nextStyle.textShadow == null) {
        const { textShadow } = style;
        prop = "textShadow";
        value = textShadow ? `${textShadow}, ${textShadowValue}` : textShadowValue;
      } else {
        continue;
      }
    }
    nextStyle[prop] = value;
  }
  return nextStyle;
};
const processStyle = preprocess;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=preprocess.js.map


/***/ }),

/***/ 1518:
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
var validate_exports = {};
__export(validate_exports, {
  validate: () => validate
});
module.exports = __toCommonJS(validate_exports);
const invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};
const invalidMultiValueShortforms = {
  flex: true,
  margin: true,
  padding: true,
  borderColor: true,
  borderRadius: true,
  borderStyle: true,
  borderWidth: true,
  marginHorizontal: true,
  marginVertical: true,
  paddingHorizontal: true,
  paddingVertical: true,
  overflow: true,
  overscrollBehavior: true,
  backgroundPosition: true
};
function error(message) {
  console.error(message);
}
function validate(obj) {
  for (const k in obj) {
    const prop = k.trim();
    const value = obj[prop];
    let isInvalid = false;
    if (value === null) {
      continue;
    }
    if (typeof value === "string" && value.indexOf("!important") > -1) {
      error(
        `Invalid style declaration "${prop}:${value}". Values cannot include "!important"`
      );
      isInvalid = true;
    } else {
      let suggestion = "";
      if (prop === "animation" || prop === "animationName") {
        suggestion = 'Did you mean "animationKeyframes"?';
        isInvalid = true;
      } else if (prop === "direction") {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (prop === "verticalAlign") {
        suggestion = 'Did you mean "textAlignVertical"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = "Please use long-form properties.";
        isInvalid = true;
      } else if (invalidMultiValueShortforms[prop]) {
      }
      if (suggestion !== "") {
        error(`Invalid style property of "${prop}". ${suggestion}`);
      }
    }
    if (isInvalid) {
      delete obj[k];
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=validate.js.map


/***/ }),

/***/ 9122:
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
var TextAncestorContext_exports = {};
__export(TextAncestorContext_exports, {
  TextAncestorContext: () => TextAncestorContext,
  default: () => TextAncestorContext_default
});
module.exports = __toCommonJS(TextAncestorContext_exports);
var import_react2 = __webpack_require__(6689);
const TextAncestorContext = (0, import_react2.createContext)(false);
var TextAncestorContext_default = TextAncestorContext;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=TextAncestorContext.js.map


/***/ }),

/***/ 1826:
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
var colorProps_exports = {};
__export(colorProps_exports, {
  colorProps: () => colorProps
});
module.exports = __toCommonJS(colorProps_exports);
const colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=colorProps.js.map


/***/ }),

/***/ 2161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var src_exports = {};
__export(src_exports, {
  AccessibilityUtil: () => import_AccessibilityUtil.default,
  ImageLoader: () => import_ImageLoader.default,
  InteractionManager: () => import_InteractionManager.InteractionManager,
  Platform: () => import_Platform.default,
  StyleSheet: () => import_StyleSheet2.default,
  TextAncestorContext: () => import_TextAncestorContext.TextAncestorContext,
  TextInputState: () => import_TextInputState.default,
  UIManager: () => import_UIManager.default,
  canUseDOM: () => import_canUseDOM.default,
  colorProps: () => import_colorProps.colorProps,
  createDOMProps: () => import_createDOMProps.default,
  createEventHandle: () => import_createEventHandle.default,
  createSheet: () => import_dom.createSheet,
  dismissKeyboard: () => import_dismissKeyboard.default,
  flattenStyle: () => import_StyleSheet.flatten,
  getBoundingClientRect: () => import_getBoundingClientRect.default,
  isSelectionValid: () => import_isSelectionValid.default,
  isWebColor: () => import_isWebColor.default,
  multiplyStyleLengthValue: () => import_multiplyStyleLengthValue.default,
  normalizeColor: () => import_normalizeColor.default,
  pick: () => import_pick.default,
  processColor: () => import_processColor.processColor,
  requestIdleCallback: () => import_requestIdleCallback.default,
  setValueForStyles: () => import_setValueForStyles.default,
  unitlessNumbers: () => import_unitlessNumbers.default,
  useElementLayout: () => import_useElementLayout.default,
  useEvent: () => import_useEvent.default,
  useHover: () => import_useHover.default,
  useLayoutEffect: () => import_useLayoutEffect.default,
  useMergeRefs: () => import_useMergeRefs.useMergeRefs,
  usePlatformMethods: () => import_usePlatformMethods.usePlatformMethods,
  useStable: () => import_useStable.default
});
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, __webpack_require__(9667), module.exports);
__reExport(src_exports, __webpack_require__(9157), module.exports);
__reExport(src_exports, __webpack_require__(5974), module.exports);
__reExport(src_exports, __webpack_require__(3113), module.exports);
__reExport(src_exports, __webpack_require__(938), module.exports);
var import_usePlatformMethods = __webpack_require__(3626);
var import_TextAncestorContext = __webpack_require__(9122);
__reExport(src_exports, __webpack_require__(7938), module.exports);
__reExport(src_exports, __webpack_require__(724), module.exports);
var import_colorProps = __webpack_require__(1826);
var import_AccessibilityUtil = __toESM(__webpack_require__(802));
var import_canUseDOM = __toESM(__webpack_require__(1898));
var import_createDOMProps = __toESM(__webpack_require__(1631));
var import_createEventHandle = __toESM(__webpack_require__(1999));
var import_dismissKeyboard = __toESM(__webpack_require__(817));
var import_getBoundingClientRect = __toESM(__webpack_require__(9867));
var import_ImageLoader = __toESM(__webpack_require__(433));
var import_isSelectionValid = __toESM(__webpack_require__(6584));
var import_isWebColor = __toESM(__webpack_require__(9614));
var import_multiplyStyleLengthValue = __toESM(__webpack_require__(9541));
var import_normalizeColor = __toESM(__webpack_require__(3106));
var import_pick = __toESM(__webpack_require__(1546));
var import_Platform = __toESM(__webpack_require__(6720));
__reExport(src_exports, __webpack_require__(2791), module.exports);
var import_StyleSheet = __webpack_require__(5391);
var import_dom = __webpack_require__(3197);
var import_requestIdleCallback = __toESM(__webpack_require__(9403));
var import_setValueForStyles = __toESM(__webpack_require__(5778));
var import_TextInputState = __toESM(__webpack_require__(2426));
var import_UIManager = __toESM(__webpack_require__(5660));
var import_unitlessNumbers = __toESM(__webpack_require__(950));
var import_useElementLayout = __toESM(__webpack_require__(3611));
var import_useEvent = __toESM(__webpack_require__(135));
var import_useHover = __toESM(__webpack_require__(7635));
var import_useLayoutEffect = __toESM(__webpack_require__(4522));
var import_useStable = __toESM(__webpack_require__(7297));
var import_InteractionManager = __webpack_require__(4304);
__reExport(src_exports, __webpack_require__(9348), module.exports);
var import_processColor = __webpack_require__(2642);
var import_StyleSheet2 = __toESM(__webpack_require__(5391));
var import_useMergeRefs = __webpack_require__(7304);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AccessibilityUtil_exports = {};
__export(AccessibilityUtil_exports, {
  default: () => AccessibilityUtil_default
});
module.exports = __toCommonJS(AccessibilityUtil_exports);
var import_isDisabled = __toESM(__webpack_require__(7135));
var import_propsToAccessibilityComponent = __toESM(__webpack_require__(1391));
var import_propsToAriaRole = __toESM(__webpack_require__(940));
const AccessibilityUtil = {
  isDisabled: import_isDisabled.default,
  propsToAccessibilityComponent: import_propsToAccessibilityComponent.default,
  propsToAriaRole: import_propsToAriaRole.default
};
var AccessibilityUtil_default = AccessibilityUtil;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7135:
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
var isDisabled_exports = {};
__export(isDisabled_exports, {
  default: () => isDisabled_default
});
module.exports = __toCommonJS(isDisabled_exports);
const isDisabled = (props) => props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf("disabled") > -1;
var isDisabled_default = isDisabled;
//# sourceMappingURL=isDisabled.js.map


/***/ }),

/***/ 1391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var propsToAccessibilityComponent_exports = {};
__export(propsToAccessibilityComponent_exports, {
  default: () => propsToAccessibilityComponent_default
});
module.exports = __toCommonJS(propsToAccessibilityComponent_exports);
var import_propsToAriaRole = __toESM(__webpack_require__(940));
const roleComponents = {
  article: "article",
  banner: "header",
  blockquote: "blockquote",
  code: "code",
  complementary: "aside",
  contentinfo: "footer",
  deletion: "del",
  emphasis: "em",
  figure: "figure",
  insertion: "ins",
  form: "form",
  list: "ul",
  listitem: "li",
  main: "main",
  navigation: "nav",
  region: "section",
  strong: "strong"
};
const emptyObject = {};
const propsToAccessibilityComponent = (props = emptyObject) => {
  if (props.accessibilityRole === "label") {
    return "label";
  }
  const role = (0, import_propsToAriaRole.default)(props);
  if (role) {
    if (role === "heading") {
      const level = props.accessibilityLevel || props["aria-level"];
      if (level != null) {
        return `h${level}`;
      }
      return "h1";
    }
    return roleComponents[role];
  }
};
var propsToAccessibilityComponent_default = propsToAccessibilityComponent;
//# sourceMappingURL=propsToAccessibilityComponent.js.map


/***/ }),

/***/ 940:
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
var propsToAriaRole_exports = {};
__export(propsToAriaRole_exports, {
  default: () => propsToAriaRole_default
});
module.exports = __toCommonJS(propsToAriaRole_exports);
const accessibilityRoleToWebRole = {
  adjustable: "slider",
  button: "button",
  header: "heading",
  image: "img",
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: "link",
  none: "presentation",
  search: "search",
  summary: "region",
  text: null
};
const propsToAriaRole = ({ accessibilityRole }) => {
  if (accessibilityRole) {
    const inferredRole = accessibilityRoleToWebRole[accessibilityRole];
    if (inferredRole !== null) {
      return inferredRole || accessibilityRole;
    }
  }
};
var propsToAriaRole_default = propsToAriaRole;
//# sourceMappingURL=propsToAriaRole.js.map


/***/ }),

/***/ 9667:
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
var AssetRegistry_exports = {};
__export(AssetRegistry_exports, {
  getAssetByID: () => getAssetByID,
  registerAsset: () => registerAsset
});
module.exports = __toCommonJS(AssetRegistry_exports);
const assets = [];
function registerAsset(asset) {
  return assets.push(asset);
}
function getAssetByID(assetId) {
  return assets[assetId - 1];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 433:
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
var ImageLoader_exports = {};
__export(ImageLoader_exports, {
  ImageUriCache: () => ImageUriCache,
  default: () => ImageLoader_default
});
module.exports = __toCommonJS(ImageLoader_exports);
const dataUriPattern = /^data:/;
const _ImageUriCache = class {
  static has(uri) {
    const entries = _ImageUriCache._entries;
    const isDataUri = dataUriPattern.test(uri);
    return isDataUri || Boolean(entries[uri]);
  }
  static add(uri) {
    const entries = _ImageUriCache._entries;
    const lastUsedTimestamp = Date.now();
    if (entries[uri]) {
      entries[uri].lastUsedTimestamp = lastUsedTimestamp;
      entries[uri].refCount += 1;
    } else {
      entries[uri] = {
        lastUsedTimestamp,
        refCount: 1
      };
    }
  }
  static remove(uri) {
    const entries = _ImageUriCache._entries;
    if (entries[uri]) {
      entries[uri].refCount -= 1;
    }
    _ImageUriCache._cleanUpIfNeeded();
  }
  static _cleanUpIfNeeded() {
    const entries = _ImageUriCache._entries;
    const imageUris = Object.keys(entries);
    if (imageUris.length + 1 > _ImageUriCache._maximumEntries) {
      let leastRecentlyUsedKey;
      let leastRecentlyUsedEntry;
      imageUris.forEach((uri) => {
        const entry = entries[uri];
        if ((!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0) {
          leastRecentlyUsedKey = uri;
          leastRecentlyUsedEntry = entry;
        }
      });
      if (leastRecentlyUsedKey) {
        delete entries[leastRecentlyUsedKey];
      }
    }
  }
};
let ImageUriCache = _ImageUriCache;
ImageUriCache._maximumEntries = 256;
ImageUriCache._entries = {};
let id = 0;
const requests = {};
const ImageLoader = {
  abort(requestId) {
    let image = requests[`${requestId}`];
    if (image) {
      image.onerror = null;
      image.onload = null;
      image = null;
      delete requests[`${requestId}`];
    }
  },
  getSize(uri, success, failure) {
    let complete = false;
    const interval = setInterval(callback, 16);
    const requestId = ImageLoader.load(uri, callback, errorCallback);
    function callback() {
      const image = requests[`${requestId}`];
      if (image) {
        const { naturalHeight, naturalWidth } = image;
        if (naturalHeight && naturalWidth) {
          success(naturalWidth, naturalHeight);
          complete = true;
        }
      }
      if (complete) {
        ImageLoader.abort(requestId);
        clearInterval(interval);
      }
    }
    function errorCallback() {
      if (typeof failure === "function") {
        failure();
      }
      ImageLoader.abort(requestId);
      clearInterval(interval);
    }
  },
  has(uri) {
    return ImageUriCache.has(uri);
  },
  load(uri, onLoad, onError) {
    id += 1;
    const image = new window.Image();
    image.onerror = onError;
    image.onload = (e) => {
      const onDecode = () => onLoad({ nativeEvent: e });
      if (typeof image.decode === "function") {
        image.decode().then(onDecode, onDecode);
      } else {
        setTimeout(onDecode, 0);
      }
    };
    image.src = uri;
    requests[`${id}`] = image;
    return id;
  },
  prefetch(uri) {
    return new Promise((resolve, reject) => {
      ImageLoader.load(
        uri,
        () => {
          ImageUriCache.add(uri);
          ImageUriCache.remove(uri);
          resolve();
        },
        reject
      );
    });
  },
  queryCache(uris) {
    const result = {};
    uris.forEach((u) => {
      if (ImageUriCache.has(u)) {
        result[u] = "disk/memory";
      }
    });
    return Promise.resolve(result);
  }
};
var ImageLoader_default = ImageLoader;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var InteractionManager_exports = {};
__export(InteractionManager_exports, {
  InteractionManager: () => InteractionManager,
  default: () => InteractionManager_default
});
module.exports = __toCommonJS(InteractionManager_exports);
var import_requestIdleCallback = __toESM(__webpack_require__(9403));
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
      handle = (0, import_requestIdleCallback.default)(() => {
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
        (0, import_requestIdleCallback.cancelIdleCallback)(handle);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=InteractionManager.js.map


/***/ }),

/***/ 6720:
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
var Platform_exports = {};
__export(Platform_exports, {
  default: () => Platform_default
});
module.exports = __toCommonJS(Platform_exports);
const Platform = {
  OS: "web",
  select: (obj) => "web" in obj ? obj.web : obj.default,
  isTesting: "production" === "test"
};
var Platform_default = Platform;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var TextInputState_exports = {};
__export(TextInputState_exports, {
  default: () => TextInputState_default
});
module.exports = __toCommonJS(TextInputState_exports);
var import_UIManager = __toESM(__webpack_require__(5660));
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
        import_UIManager.default.focus(textFieldNode);
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
        import_UIManager.default.blur(textFieldNode);
      }
    }
  }
};
var TextInputState_default = TextInputState;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var UIManager_exports = {};
__export(UIManager_exports, {
  default: () => UIManager_default
});
module.exports = __toCommonJS(UIManager_exports);
var import_getBoundingClientRect = __toESM(__webpack_require__(9867));
var import_setValueForStyles = __toESM(__webpack_require__(5778));
const getRect = (node) => {
  const { x, y, top, left } = (0, import_getBoundingClientRect.default)(node);
  const width = node.offsetWidth;
  const height = node.offsetHeight;
  return { x, y, width, height, top, left };
};
const measureLayout = (node, relativeToNativeNode, callback) => {
  const relativeNode = relativeToNativeNode || node && node.parentNode;
  if (node && relativeNode) {
    setTimeout(() => {
      const relativeRect = (0, import_getBoundingClientRect.default)(relativeNode);
      const { height, left, top, width } = getRect(node);
      const x = left - relativeRect.left;
      const y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};
const focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
const UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {
    }
  },
  focus(node) {
    try {
      const name = node.nodeName;
      if (node.getAttribute("tabIndex") == null && focusableElements[name] == null) {
        node.setAttribute("tabIndex", "-1");
      }
      node.focus();
    } catch (err) {
    }
  },
  measure(node, callback) {
    measureLayout(node, null, callback);
  },
  measureInWindow(node, callback) {
    if (node) {
      setTimeout(() => {
        const { height, left, top, width } = getRect(node);
        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView(node, props) {
    for (const prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }
      const value = props[prop];
      switch (prop) {
        case "style": {
          (0, import_setValueForStyles.default)(node, value);
          break;
        }
        case "class":
        case "className": {
          node.setAttribute("class", value);
          break;
        }
        case "text":
        case "value":
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {
  }
};
var UIManager_default = UIManager;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1898:
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
var canUseDOM_exports = {};
__export(canUseDOM_exports, {
  canUseDOM: () => canUseDOM,
  default: () => canUseDOM_default
});
module.exports = __toCommonJS(canUseDOM_exports);
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDOM_default = canUseDOM;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=canUseDOM.js.map


/***/ }),

/***/ 1631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var createDOMProps_exports = {};
__export(createDOMProps_exports, {
  default: () => createDOMProps_default
});
module.exports = __toCommonJS(createDOMProps_exports);
var import_StyleSheet = __toESM(__webpack_require__(5391));
var import_AccessibilityUtil = __toESM(__webpack_require__(802));
const emptyObject = {};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const isArray = Array.isArray;
const uppercasePattern = /[A-Z]/g;
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateString(str) {
  return str.replace(uppercasePattern, toHyphenLower);
}
function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(" ") : idRefList;
}
const pointerEventsStyles = import_StyleSheet.default.create({
  auto: {
    pointerEvents: "auto"
  },
  "box-none": {
    pointerEvents: "box-none"
  },
  "box-only": {
    pointerEvents: "box-only"
  },
  none: {
    pointerEvents: "none"
  }
});
const createDOMProps = (elementType, props, options) => {
  if (!props) {
    props = emptyObject;
  }
  const {
    accessibilityActiveDescendant,
    accessibilityAtomic,
    accessibilityAutoComplete,
    accessibilityBusy,
    accessibilityChecked,
    accessibilityColumnCount,
    accessibilityColumnIndex,
    accessibilityColumnSpan,
    accessibilityControls,
    accessibilityCurrent,
    accessibilityDescribedBy,
    accessibilityDetails,
    accessibilityDisabled,
    accessibilityErrorMessage,
    accessibilityExpanded,
    accessibilityFlowTo,
    accessibilityHasPopup,
    accessibilityHidden,
    accessibilityInvalid,
    accessibilityKeyShortcuts,
    accessibilityLabel,
    accessibilityLabelledBy,
    accessibilityLevel,
    accessibilityLiveRegion,
    accessibilityModal,
    accessibilityMultiline,
    accessibilityMultiSelectable,
    accessibilityOrientation,
    accessibilityOwns,
    accessibilityPlaceholder,
    accessibilityPosInSet,
    accessibilityPressed,
    accessibilityReadOnly,
    accessibilityRequired,
    /* eslint-disable */
    accessibilityRole,
    /* eslint-enable */
    accessibilityRoleDescription,
    accessibilityRowCount,
    accessibilityRowIndex,
    accessibilityRowSpan,
    accessibilitySelected,
    accessibilitySetSize,
    accessibilitySort,
    accessibilityValueMax,
    accessibilityValueMin,
    accessibilityValueNow,
    accessibilityValueText,
    dataSet,
    focusable,
    nativeID,
    pointerEvents,
    style,
    testID,
    id,
    // Rest
    ...domProps
  } = props;
  const disabled = accessibilityDisabled;
  const role = import_AccessibilityUtil.default.propsToAriaRole(props);
  if (accessibilityActiveDescendant != null) {
    domProps["aria-activedescendant"] = accessibilityActiveDescendant;
  }
  if (accessibilityAtomic != null) {
    domProps["aria-atomic"] = accessibilityAtomic;
  }
  if (accessibilityAutoComplete != null) {
    domProps["aria-autocomplete"] = accessibilityAutoComplete;
  }
  if (accessibilityBusy != null) {
    domProps["aria-busy"] = accessibilityBusy;
  }
  if (accessibilityChecked != null) {
    domProps["aria-checked"] = accessibilityChecked;
  }
  if (accessibilityColumnCount != null) {
    domProps["aria-colcount"] = accessibilityColumnCount;
  }
  if (accessibilityColumnIndex != null) {
    domProps["aria-colindex"] = accessibilityColumnIndex;
  }
  if (accessibilityColumnSpan != null) {
    domProps["aria-colspan"] = accessibilityColumnSpan;
  }
  if (accessibilityControls != null) {
    domProps["aria-controls"] = processIDRefList(accessibilityControls);
  }
  if (accessibilityCurrent != null) {
    domProps["aria-current"] = accessibilityCurrent;
  }
  if (accessibilityDescribedBy != null) {
    domProps["aria-describedby"] = processIDRefList(accessibilityDescribedBy);
  }
  if (accessibilityDetails != null) {
    domProps["aria-details"] = accessibilityDetails;
  }
  if (disabled === true) {
    domProps["aria-disabled"] = true;
    if (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.disabled = true;
    }
  }
  if (accessibilityErrorMessage != null) {
    domProps["aria-errormessage"] = accessibilityErrorMessage;
  }
  if (accessibilityExpanded != null) {
    domProps["aria-expanded"] = accessibilityExpanded;
  }
  if (accessibilityFlowTo != null) {
    domProps["aria-flowto"] = processIDRefList(accessibilityFlowTo);
  }
  if (accessibilityHasPopup != null) {
    domProps["aria-haspopup"] = accessibilityHasPopup;
  }
  if (accessibilityHidden === true) {
    domProps["aria-hidden"] = accessibilityHidden;
  }
  if (accessibilityInvalid != null) {
    domProps["aria-invalid"] = accessibilityInvalid;
  }
  if (accessibilityKeyShortcuts != null && Array.isArray(accessibilityKeyShortcuts)) {
    domProps["aria-keyshortcuts"] = accessibilityKeyShortcuts.join(" ");
  }
  if (accessibilityLabel != null) {
    domProps["aria-label"] = accessibilityLabel;
  }
  if (accessibilityLabelledBy != null) {
    domProps["aria-labelledby"] = processIDRefList(accessibilityLabelledBy);
  }
  if (accessibilityLevel != null) {
    domProps["aria-level"] = accessibilityLevel;
  }
  if (accessibilityLiveRegion != null) {
    domProps["aria-live"] = accessibilityLiveRegion === "none" ? "off" : accessibilityLiveRegion;
  }
  if (accessibilityModal != null) {
    domProps["aria-modal"] = accessibilityModal;
  }
  if (accessibilityMultiline != null) {
    domProps["aria-multiline"] = accessibilityMultiline;
  }
  if (accessibilityMultiSelectable != null) {
    domProps["aria-multiselectable"] = accessibilityMultiSelectable;
  }
  if (accessibilityOrientation != null) {
    domProps["aria-orientation"] = accessibilityOrientation;
  }
  if (accessibilityOwns != null) {
    domProps["aria-owns"] = processIDRefList(accessibilityOwns);
  }
  if (accessibilityPlaceholder != null) {
    domProps["aria-placeholder"] = accessibilityPlaceholder;
  }
  if (accessibilityPosInSet != null) {
    domProps["aria-posinset"] = accessibilityPosInSet;
  }
  if (accessibilityPressed != null) {
    domProps["aria-pressed"] = accessibilityPressed;
  }
  if (accessibilityReadOnly != null) {
    domProps["aria-readonly"] = accessibilityReadOnly;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.readOnly = true;
    }
  }
  if (accessibilityRequired != null) {
    domProps["aria-required"] = accessibilityRequired;
    if (elementType === "input" || elementType === "select" || elementType === "textarea") {
      domProps.required = true;
    }
  }
  if (role != null) {
    domProps["role"] = role === "none" ? "presentation" : role;
  }
  if (accessibilityRoleDescription != null) {
    domProps["aria-roledescription"] = accessibilityRoleDescription;
  }
  if (accessibilityRowCount != null) {
    domProps["aria-rowcount"] = accessibilityRowCount;
  }
  if (accessibilityRowIndex != null) {
    domProps["aria-rowindex"] = accessibilityRowIndex;
  }
  if (accessibilityRowSpan != null) {
    domProps["aria-rowspan"] = accessibilityRowSpan;
  }
  if (accessibilitySelected != null) {
    domProps["aria-selected"] = accessibilitySelected;
  }
  if (accessibilitySetSize != null) {
    domProps["aria-setsize"] = accessibilitySetSize;
  }
  if (accessibilitySort != null) {
    domProps["aria-sort"] = accessibilitySort;
  }
  if (accessibilityValueMax != null) {
    domProps["aria-valuemax"] = accessibilityValueMax;
  }
  if (accessibilityValueMin != null) {
    domProps["aria-valuemin"] = accessibilityValueMin;
  }
  if (accessibilityValueNow != null) {
    domProps["aria-valuenow"] = accessibilityValueNow;
  }
  if (accessibilityValueText != null) {
    domProps["aria-valuetext"] = accessibilityValueText;
  }
  const tmgCN = dataSet ? dataSet.className : void 0;
  const tmgID = dataSet ? dataSet.id : void 0;
  if (dataSet != null) {
    for (const dataProp in dataSet) {
      if (dataProp === "className" || dataProp === "id")
        continue;
      if (hasOwnProperty.call(dataSet, dataProp)) {
        const dataName = hyphenateString(dataProp);
        const dataValue = dataSet[dataProp];
        if (dataValue != null) {
          domProps[`data-${dataName}`] = dataValue;
        }
      }
    }
  }
  if (focusable === false) {
    domProps.tabIndex = "-1";
  }
  if (
    // These native elements are keyboard focusable by default
    elementType === "a" || elementType === "button" || elementType === "input" || elementType === "select" || elementType === "textarea"
  ) {
    if (focusable === false || accessibilityDisabled === true) {
      domProps.tabIndex = "-1";
    }
  } else if (
    // These roles are made keyboard focusable by default
    role === "button" || role === "checkbox" || role === "link" || role === "radio" || role === "textbox" || role === "switch"
  ) {
    if (focusable !== false) {
      domProps.tabIndex = "0";
    }
  } else {
    if (focusable === true) {
      domProps.tabIndex = "0";
    }
  }
  const [className, inlineStyle] = (0, import_StyleSheet.default)(
    [style, pointerEvents && pointerEventsStyles[pointerEvents]],
    { writingDirection: options ? options.writingDirection : "ltr" }
  );
  if (className) {
    domProps.className = className;
  }
  if (tmgCN) {
    domProps.className = tmgCN;
  }
  if (inlineStyle) {
    domProps.style = inlineStyle;
  }
  const _id = tmgID || id || nativeID;
  if (_id) {
    domProps.id = _id;
  }
  if (testID != null) {
    domProps["data-testid"] = testID;
  }
  return domProps;
};
var createDOMProps_default = createDOMProps;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var createEventHandle_exports = {};
__export(createEventHandle_exports, {
  default: () => createEventHandle
});
module.exports = __toCommonJS(createEventHandle_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
const emptyFunction = () => {
};
function supportsPassiveEvents() {
  let supported = false;
  if (import_canUseDOM.default) {
    try {
      const options = {};
      Object.defineProperty(options, "passive", {
        get() {
          supported = true;
          return false;
        }
      });
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (e) {
    }
  }
  return supported;
}
const canUsePassiveEvents = supportsPassiveEvents();
function getOptions(options) {
  if (options == null) {
    return false;
  }
  return canUsePassiveEvents ? options : Boolean(options.capture);
}
function isPropagationStopped() {
  return this.cancelBubble;
}
function isDefaultPrevented() {
  return this.defaultPrevented;
}
function normalizeEvent(event) {
  event.nativeEvent = event;
  event.persist = emptyFunction;
  event.isDefaultPrevented = isDefaultPrevented;
  event.isPropagationStopped = isPropagationStopped;
  return event;
}
function createEventHandle(type, options) {
  const opts = getOptions(options);
  return function(target, listener) {
    if (target == null || typeof target.addEventListener !== "function") {
      throw new Error("createEventHandle: called on an invalid target.");
    }
    const element = target;
    if (listener != null) {
      const compatListener = (e) => listener(normalizeEvent(e));
      element.addEventListener(type, compatListener, opts);
      return function removeListener() {
        if (element != null) {
          element.removeEventListener(type, compatListener, opts);
        }
      };
    } else {
      return emptyFunction;
    }
  };
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var dismissKeyboard_exports = {};
__export(dismissKeyboard_exports, {
  default: () => dismissKeyboard_default
});
module.exports = __toCommonJS(dismissKeyboard_exports);
var import_TextInputState = __toESM(__webpack_require__(2426));
const dismissKeyboard = () => {
  import_TextInputState.default.blurTextInput(import_TextInputState.default.currentlyFocusedField());
};
var dismissKeyboard_default = dismissKeyboard;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9157:
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
var forwardedProps_exports = {};
__export(forwardedProps_exports, {
  accessibilityProps: () => accessibilityProps,
  clickProps: () => clickProps,
  defaultProps: () => defaultProps,
  focusProps: () => focusProps,
  forwardPropsListText: () => forwardPropsListText,
  forwardPropsListView: () => forwardPropsListView,
  forwardedProps: () => forwardedProps,
  keyboardProps: () => keyboardProps,
  mouseProps: () => mouseProps,
  styleProps: () => styleProps,
  touchProps: () => touchProps
});
module.exports = __toCommonJS(forwardedProps_exports);
const defaultProps = {
  children: true,
  dataSet: true,
  nativeID: true,
  ref: true,
  suppressHydrationWarning: true,
  testID: true,
  id: true
};
const accessibilityProps = {
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true,
  dir: true,
  focusable: true
};
const clickProps = {
  onClick: true,
  onClickCapture: true,
  onContextMenu: true
};
const focusProps = {
  onBlur: true,
  onFocus: true
};
const keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
const mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
const touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
const styleProps = {
  classList: true,
  style: true
};
const forwardedProps = {
  defaultProps,
  accessibilityProps,
  clickProps,
  focusProps,
  keyboardProps,
  mouseProps,
  touchProps,
  styleProps
};
const forwardPropsListText = {
  ...defaultProps,
  ...accessibilityProps,
  ...clickProps,
  ...focusProps,
  ...keyboardProps,
  ...mouseProps,
  ...touchProps,
  ...styleProps,
  href: true,
  lang: true,
  pointerEvents: true
};
const forwardPropsListView = {
  ...forwardPropsListText,
  onScroll: true,
  onWheel: true
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9867:
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
var getBoundingClientRect_exports = {};
__export(getBoundingClientRect_exports, {
  default: () => getBoundingClientRect_default
});
module.exports = __toCommonJS(getBoundingClientRect_exports);
const getBoundingClientRect = (node) => {
  if (node != null) {
    const isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
};
var getBoundingClientRect_default = getBoundingClientRect;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9348:
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
var invariant_exports = {};
__export(invariant_exports, {
  invariant: () => invariant,
  warning: () => warning
});
module.exports = __toCommonJS(invariant_exports);
function invariant(condition, log, ...logVars) {
  if (!condition) {
    throw new Error(
       false ? 0 : log
    );
  }
}
function warning(condition, log, ...logVars) {
  if (false) {}
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=invariant.js.map


/***/ }),

/***/ 6584:
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
var isSelectionValid_exports = {};
__export(isSelectionValid_exports, {
  default: () => isSelectionValid
});
module.exports = __toCommonJS(isSelectionValid_exports);
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
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9614:
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
var isWebColor_exports = {};
__export(isWebColor_exports, {
  default: () => isWebColor_default
});
module.exports = __toCommonJS(isWebColor_exports);
const isWebColor = (color) => color === "currentcolor" || color === "currentColor" || color === "inherit" || color.startsWith("var(");
var isWebColor_default = isWebColor;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5974:
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
var mergeRefs_exports = {};
__export(mergeRefs_exports, {
  mergeRefs: () => mergeRefs
});
module.exports = __toCommonJS(mergeRefs_exports);
function mergeRefs(...args) {
  return function forwardRef(node) {
    args.forEach((ref) => {
      if (ref == null) {
        return;
      }
      if (typeof ref === "function") {
        ref(node);
        return;
      }
      if (typeof ref === "object") {
        ref.current = node;
        return;
      }
      console.error(
        `mergeRefs cannot handle Refs of type boolean, number or string, received ref ${String(
          ref
        )}`
      );
    });
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var modality_exports = {};
__export(modality_exports, {
  addModalityListener: () => addModalityListener,
  getActiveModality: () => getActiveModality,
  getModality: () => getModality,
  testOnly_resetActiveModality: () => testOnly_resetActiveModality
});
module.exports = __toCommonJS(modality_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
var import_createEventHandle = __toESM(__webpack_require__(1999));
const supportsPointerEvent = () => !!(typeof window !== "undefined" && window.PointerEvent != null);
let activeModality = "keyboard";
let modality = "keyboard";
let previousModality;
let previousActiveModality;
let isEmulatingMouseEvents = false;
const listeners = /* @__PURE__ */ new Set();
const KEYBOARD = "keyboard";
const MOUSE = "mouse";
const TOUCH = "touch";
const BLUR = "blur";
const CONTEXTMENU = "contextmenu";
const FOCUS = "focus";
const KEYDOWN = "keydown";
const MOUSEDOWN = "mousedown";
const MOUSEMOVE = "mousemove";
const MOUSEUP = "mouseup";
const POINTERDOWN = "pointerdown";
const POINTERMOVE = "pointermove";
const SCROLL = "scroll";
const SELECTIONCHANGE = "selectionchange";
const TOUCHCANCEL = "touchcancel";
const TOUCHMOVE = "touchmove";
const TOUCHSTART = "touchstart";
const VISIBILITYCHANGE = "visibilitychange";
const bubbleOptions = { passive: true };
const captureOptions = { capture: true, passive: true };
const addBlurListener = (0, import_createEventHandle.default)(BLUR, bubbleOptions);
const addFocusListener = (0, import_createEventHandle.default)(FOCUS, bubbleOptions);
const addVisibilityChangeListener = (0, import_createEventHandle.default)(
  VISIBILITYCHANGE,
  captureOptions
);
const addKeyDownListener = (0, import_createEventHandle.default)(KEYDOWN, captureOptions);
const addPointerDownListener = (0, import_createEventHandle.default)(POINTERDOWN, captureOptions);
const addPointerMoveListener = (0, import_createEventHandle.default)(POINTERMOVE, captureOptions);
const addContextMenuListener = (0, import_createEventHandle.default)(CONTEXTMENU, captureOptions);
const addMouseDownListener = (0, import_createEventHandle.default)(MOUSEDOWN, captureOptions);
const addMouseMoveListener = (0, import_createEventHandle.default)(MOUSEMOVE, captureOptions);
const addMouseUpListener = (0, import_createEventHandle.default)(MOUSEUP, captureOptions);
const addScrollListener = (0, import_createEventHandle.default)(SCROLL, captureOptions);
const addSelectiomChangeListener = (0, import_createEventHandle.default)(SELECTIONCHANGE, captureOptions);
const addTouchCancelListener = (0, import_createEventHandle.default)(TOUCHCANCEL, captureOptions);
const addTouchMoveListener = (0, import_createEventHandle.default)(TOUCHMOVE, captureOptions);
const addTouchStartListener = (0, import_createEventHandle.default)(TOUCHSTART, captureOptions);
function restoreModality() {
  if (previousModality != null || previousActiveModality != null) {
    if (previousModality != null) {
      modality = previousModality;
      previousModality = null;
    }
    if (previousActiveModality != null) {
      activeModality = previousActiveModality;
      previousActiveModality = null;
    }
    callListeners();
  }
}
function onBlurWindow() {
  previousModality = modality;
  previousActiveModality = activeModality;
  activeModality = KEYBOARD;
  modality = KEYBOARD;
  callListeners();
  isEmulatingMouseEvents = false;
}
function onFocusWindow() {
  restoreModality();
}
function onKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  if (modality !== KEYBOARD) {
    modality = KEYBOARD;
    activeModality = KEYBOARD;
    callListeners();
  }
}
function onVisibilityChange() {
  if (document.visibilityState !== "hidden") {
    restoreModality();
  }
}
function onPointerish(event) {
  const eventType = event.type;
  if (supportsPointerEvent()) {
    if (eventType === POINTERDOWN) {
      if (activeModality !== event.pointerType) {
        modality = event.pointerType;
        activeModality = event.pointerType;
        callListeners();
      }
      return;
    }
    if (eventType === POINTERMOVE) {
      if (modality !== event.pointerType) {
        modality = event.pointerType;
        callListeners();
      }
      return;
    }
  } else {
    if (!isEmulatingMouseEvents) {
      if (eventType === MOUSEDOWN) {
        if (activeModality !== MOUSE) {
          modality = MOUSE;
          activeModality = MOUSE;
          callListeners();
        }
      }
      if (eventType === MOUSEMOVE) {
        if (modality !== MOUSE) {
          modality = MOUSE;
          callListeners();
        }
      }
    }
    if (eventType === TOUCHSTART) {
      isEmulatingMouseEvents = true;
      if (event.touches && event.touches.length > 1) {
        isEmulatingMouseEvents = false;
      }
      if (activeModality !== TOUCH) {
        modality = TOUCH;
        activeModality = TOUCH;
        callListeners();
      }
      return;
    }
    if (eventType === CONTEXTMENU || eventType === MOUSEUP || eventType === SELECTIONCHANGE || eventType === SCROLL || eventType === TOUCHCANCEL || eventType === TOUCHMOVE) {
      isEmulatingMouseEvents = false;
    }
  }
}
if (import_canUseDOM.default) {
  addBlurListener(window, onBlurWindow);
  addFocusListener(window, onFocusWindow);
  addKeyDownListener(document, onKeyDown);
  addPointerDownListener(document, onPointerish);
  addPointerMoveListener(document, onPointerish);
  addVisibilityChangeListener(document, onVisibilityChange);
  addContextMenuListener(document, onPointerish);
  addMouseDownListener(document, onPointerish);
  addMouseMoveListener(document, onPointerish);
  addMouseUpListener(document, onPointerish);
  addTouchCancelListener(document, onPointerish);
  addTouchMoveListener(document, onPointerish);
  addTouchStartListener(document, onPointerish);
  addSelectiomChangeListener(document, onPointerish);
  addScrollListener(document, onPointerish);
}
function callListeners() {
  const value = { activeModality, modality };
  listeners.forEach((listener) => {
    listener(value);
  });
}
function getActiveModality() {
  return activeModality;
}
function getModality() {
  return modality;
}
function addModalityListener(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function testOnly_resetActiveModality() {
  isEmulatingMouseEvents = false;
  activeModality = KEYBOARD;
  modality = KEYBOARD;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9541:
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
var multiplyStyleLengthValue_exports = {};
__export(multiplyStyleLengthValue_exports, {
  default: () => multiplyStyleLengthValue_default
});
module.exports = __toCommonJS(multiplyStyleLengthValue_exports);
const CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
const getUnit = (str) => str.match(CSS_UNIT_RE)[1];
const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
const multiplyStyleLengthValue = (value, multiple) => {
  if (typeof value === "string") {
    const number = parseFloat(value) * multiple;
    const unit = getUnit(value);
    return `${number}${unit}`;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};
var multiplyStyleLengthValue_default = multiplyStyleLengthValue;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
  default: () => normalizeColor_default
});
module.exports = __toCommonJS(normalizeColor_exports);
var import_isWebColor = __toESM(__webpack_require__(9614));
var import_processColor = __webpack_require__(2642);
const normalizeColor = (color, opacity = 1) => {
  if (color == null)
    return;
  if (typeof color === "string" && (0, import_isWebColor.default)(color)) {
    return color;
  }
  const colorInt = (0, import_processColor.processColor)(color);
  if (colorInt != null) {
    const r = colorInt >> 16 & 255;
    const g = colorInt >> 8 & 255;
    const b = colorInt & 255;
    const a = (colorInt >> 24 & 255) / 255;
    const alpha = (a * opacity).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`;
  }
};
var normalizeColor_default = normalizeColor;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1546:
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
var pick_exports = {};
__export(pick_exports, {
  default: () => pick
});
module.exports = __toCommonJS(pick_exports);
function pick(obj, list) {
  const nextObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var processColor_exports = {};
__export(processColor_exports, {
  processColor: () => processColor
});
module.exports = __toCommonJS(processColor_exports);
var import_normalize_css_color = __toESM(__webpack_require__(4306));
const processColor = (color) => {
  if (color === void 0 || color === null) {
    return color;
  }
  let int32Color = (0, import_normalize_css_color.default)(color);
  if (int32Color === void 0 || int32Color === null) {
    return void 0;
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var requestIdleCallback_exports = {};
__export(requestIdleCallback_exports, {
  cancelIdleCallback: () => cancelIdleCallback,
  default: () => requestIdleCallback_default
});
module.exports = __toCommonJS(requestIdleCallback_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
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
const isSupported = import_canUseDOM.default && typeof window.requestIdleCallback !== "undefined";
const requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
const cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
var requestIdleCallback_default = requestIdleCallback;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var dangerousStyleValue_exports = {};
__export(dangerousStyleValue_exports, {
  default: () => dangerousStyleValue_default
});
module.exports = __toCommonJS(dangerousStyleValue_exports);
var import_unitlessNumbers = __toESM(__webpack_require__(950));
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(import_unitlessNumbers.default.hasOwnProperty(name) && import_unitlessNumbers.default[name])) {
    return value + "px";
  }
  return ("" + value).trim();
}
var dangerousStyleValue_default = dangerousStyleValue;
//# sourceMappingURL=dangerousStyleValue.js.map


/***/ }),

/***/ 5778:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var setValueForStyles_exports = {};
__export(setValueForStyles_exports, {
  default: () => setValueForStyles_default
});
module.exports = __toCommonJS(setValueForStyles_exports);
var import_dangerousStyleValue = __toESM(__webpack_require__(457));
function setValueForStyles(node, styles) {
  const style = node.style;
  for (let styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    const isCustomProperty = styleName.indexOf("--") === 0;
    const styleValue = (0, import_dangerousStyleValue.default)(
      styleName,
      styles[styleName],
      isCustomProperty
    );
    if (styleName === "float") {
      styleName = "cssFloat";
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}
var setValueForStyles_default = setValueForStyles;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 950:
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
var unitlessNumbers_exports = {};
__export(unitlessNumbers_exports, {
  default: () => unitlessNumbers_default,
  unitlessNumbers: () => unitlessNumbers
});
module.exports = __toCommonJS(unitlessNumbers_exports);
const unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gap: true,
  columnGap: true,
  rowGap: true,
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
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
const prefixes = ["ms", "Moz", "O", "Webkit"];
const prefixKey = (prefix, key) => {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers).forEach((prop) => {
  prefixes.forEach((prefix) => {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
var unitlessNumbers_default = unitlessNumbers;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useElementLayout_exports = {};
__export(useElementLayout_exports, {
  default: () => useElementLayout
});
module.exports = __toCommonJS(useElementLayout_exports);
var import_canUseDOM = __toESM(__webpack_require__(1898));
var import_UIManager = __toESM(__webpack_require__(5660));
var import_useLayoutEffect = __toESM(__webpack_require__(4522));
const DOM_LAYOUT_HANDLER_NAME = "__reactLayoutHandler";
let didWarn = !import_canUseDOM.default;
let resizeObserver = null;
function getResizeObserver() {
  if (import_canUseDOM.default && typeof window.ResizeObserver !== "undefined") {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function(entries) {
        entries.forEach((entry) => {
          const node = entry.target;
          const onLayout = node[DOM_LAYOUT_HANDLER_NAME];
          if (typeof onLayout === "function") {
            import_UIManager.default.measure(node, (x, y, width, height, left, top) => {
              const event = {
                // @ts-ignore
                nativeEvent: {
                  layout: { x, y, width, height, left, top }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, "target", {
                enumerable: true,
                get: () => entry.target
              });
              onLayout(event);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (false) {}
  }
  return resizeObserver;
}
function useElementLayout(ref, onLayout) {
  const observer = getResizeObserver();
  (0, import_useLayoutEffect.default)(() => {
    const node = ref.current;
    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  (0, import_useLayoutEffect.default)(() => {
    const node = ref.current;
    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === "function") {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }
    return () => {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useEvent_exports = {};
__export(useEvent_exports, {
  default: () => useEvent
});
module.exports = __toCommonJS(useEvent_exports);
var import_createEventHandle = __toESM(__webpack_require__(1999));
var import_useLayoutEffect = __toESM(__webpack_require__(4522));
var import_useStable = __toESM(__webpack_require__(7297));
function useEvent(event, options) {
  const targetListeners = (0, import_useStable.default)(() => /* @__PURE__ */ new Map());
  const addListener = (0, import_useStable.default)(() => {
    const addEventListener = (0, import_createEventHandle.default)(event, options);
    return (target, callback) => {
      const removeTargetListener = targetListeners.get(target);
      if (removeTargetListener != null) {
        removeTargetListener();
      }
      if (callback == null) {
        targetListeners.delete(target);
      }
      const removeEventListener = addEventListener(target, callback);
      targetListeners.set(target, removeEventListener);
      return removeEventListener;
    };
  });
  (0, import_useLayoutEffect.default)(() => {
    return () => {
      targetListeners.forEach((removeListener) => {
        removeListener();
      });
      targetListeners.clear();
    };
  }, [targetListeners]);
  return addListener;
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useHover_exports = {};
__export(useHover_exports, {
  default: () => useHover
});
module.exports = __toCommonJS(useHover_exports);
var import_modality = __webpack_require__(3113);
var import_useEvent = __toESM(__webpack_require__(135));
var import_useLayoutEffect = __toESM(__webpack_require__(4522));
const emptyObject = {};
const opts = { passive: true };
const lockEventType = "react-gui:hover:lock";
const unlockEventType = "react-gui:hover:unlock";
const supportsPointerEvent = () => !!(typeof window !== "undefined" && window.PointerEvent != null);
function dispatchCustomEvent(target, type, payload) {
  const event = document.createEvent("CustomEvent");
  const { bubbles = true, cancelable = true, detail } = payload || emptyObject;
  event.initCustomEvent(type, bubbles, cancelable, detail);
  target.dispatchEvent(event);
}
function getPointerType(event) {
  const { pointerType } = event;
  return pointerType != null ? pointerType : (0, import_modality.getModality)();
}
function useHover(targetRef, config) {
  const {
    contain,
    disabled,
    onHoverStart,
    onHoverChange,
    onHoverUpdate,
    onHoverEnd
  } = config;
  const canUsePE = supportsPointerEvent();
  const addMoveListener = (0, import_useEvent.default)(canUsePE ? "pointermove" : "mousemove", opts);
  const addEnterListener = (0, import_useEvent.default)(canUsePE ? "pointerenter" : "mouseenter", opts);
  const addLeaveListener = (0, import_useEvent.default)(canUsePE ? "pointerleave" : "mouseleave", opts);
  const addLockListener = (0, import_useEvent.default)(lockEventType, opts);
  const addUnlockListener = (0, import_useEvent.default)(unlockEventType, opts);
  (0, import_useLayoutEffect.default)(() => {
    const target = targetRef.current;
    if (target !== null) {
      const hoverEnd = function(e) {
        if (onHoverEnd != null) {
          onHoverEnd(e);
        }
        if (onHoverChange != null) {
          onHoverChange(false);
        }
        addMoveListener(target, null);
        addLeaveListener(target, null);
      };
      const leaveListener = function(e) {
        const target2 = targetRef.current;
        if (target2 != null && getPointerType(e) !== "touch") {
          if (contain) {
            dispatchCustomEvent(target2, unlockEventType);
          }
          hoverEnd(e);
        }
      };
      const moveListener = function(e) {
        if (getPointerType(e) !== "touch") {
          if (onHoverUpdate != null) {
            if (e.x == null) {
              e.x = e.clientX;
            }
            if (e.y == null) {
              e.y = e.clientY;
            }
            onHoverUpdate(e);
          }
        }
      };
      const hoverStart = function(e) {
        if (onHoverStart != null) {
          onHoverStart(e);
        }
        if (onHoverChange != null) {
          onHoverChange(true);
        }
        if (onHoverUpdate != null) {
          addMoveListener(target, !disabled ? moveListener : null);
        }
        addLeaveListener(target, !disabled ? leaveListener : null);
      };
      const enterListener = function(e) {
        const target2 = targetRef.current;
        if (target2 != null && getPointerType(e) !== "touch") {
          if (contain) {
            dispatchCustomEvent(target2, lockEventType);
          }
          hoverStart(e);
          const lockListener = function(lockEvent) {
            if (lockEvent.target !== target2) {
              hoverEnd(e);
            }
          };
          const unlockListener = function(lockEvent) {
            if (lockEvent.target !== target2) {
              hoverStart(e);
            }
          };
          addLockListener(target2, !disabled ? lockListener : null);
          addUnlockListener(target2, !disabled ? unlockListener : null);
        }
      };
      addEnterListener(target, !disabled ? enterListener : null);
    }
  }, [
    addEnterListener,
    addMoveListener,
    addLeaveListener,
    addLockListener,
    addUnlockListener,
    contain,
    disabled,
    onHoverStart,
    onHoverChange,
    onHoverUpdate,
    onHoverEnd,
    targetRef
  ]);
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useLayoutEffect_exports = {};
__export(useLayoutEffect_exports, {
  default: () => useLayoutEffect_default
});
module.exports = __toCommonJS(useLayoutEffect_exports);
var import_react = __webpack_require__(6689);
var import_canUseDOM = __toESM(__webpack_require__(1898));
const useLayoutEffectImpl = import_canUseDOM.default ? import_react.useLayoutEffect : import_react.useEffect;
var useLayoutEffect_default = useLayoutEffectImpl;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 938:
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
var useLocale_exports = {};
__export(useLocale_exports, {
  LocaleProvider: () => LocaleProvider,
  getLocaleDirection: () => getLocaleDirection,
  useLocaleContext: () => useLocaleContext
});
module.exports = __toCommonJS(useLocale_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react2 = __webpack_require__(6689);
var import_isLocaleRTL = __webpack_require__(2128);
const defaultLocale = {
  direction: "ltr",
  locale: "en-US"
};
const LocaleContext = (0, import_react2.createContext)(defaultLocale);
function getLocaleDirection(locale) {
  return (0, import_isLocaleRTL.isLocaleRTL)(locale) ? "rtl" : "ltr";
}
function LocaleProvider(props) {
  const { direction, locale, children } = props;
  const needsContext = direction || locale;
  return needsContext ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    LocaleContext.Provider,
    {
      value: {
        direction: locale ? getLocaleDirection(locale) : direction,
        locale
      },
      children
    }
  ) : children;
}
function useLocaleContext() {
  return (0, import_react2.useContext)(LocaleContext);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2128:
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
var isLocaleRTL_exports = {};
__export(isLocaleRTL_exports, {
  isLocaleRTL: () => isLocaleRTL
});
module.exports = __toCommonJS(isLocaleRTL_exports);
const rtlScripts = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
const rtlLangs = /* @__PURE__ */ new Set([
  "ae",
  // Avestan
  "ar",
  // Arabic
  "arc",
  // Aramaic
  "bcc",
  // Southern Balochi
  "bqi",
  // Bakthiari
  "ckb",
  // Sorani
  "dv",
  // Dhivehi
  "fa",
  "far",
  // Persian
  "glk",
  // Gilaki
  "he",
  "iw",
  // Hebrew
  "khw",
  // Khowar
  "ks",
  // Kashmiri
  "ku",
  // Kurdish
  "mzn",
  // Mazanderani
  "nqo",
  // N'Ko
  "pnb",
  // Western Punjabi
  "ps",
  // Pashto
  "sd",
  // Sindhi
  "ug",
  // Uyghur
  "ur",
  // Urdu
  "yi"
  // Yiddish
]);
const cache = /* @__PURE__ */ new Map();
function isLocaleRTL(locale) {
  const cachedRTL = cache.get(locale);
  if (cachedRTL) {
    return cachedRTL;
  }
  let isRTL = false;
  if (Intl.Locale) {
    const script = new Intl.Locale(locale).maximize().script;
    isRTL = rtlScripts.has(script);
  } else {
    const lang = locale.split("-")[0];
    isRTL = rtlLangs.has(lang);
  }
  cache.set(locale, isRTL);
  return isRTL;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=isLocaleRTL.js.map


/***/ }),

/***/ 7304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useMergeRefs_exports = {};
__export(useMergeRefs_exports, {
  useMergeRefs: () => useMergeRefs
});
module.exports = __toCommonJS(useMergeRefs_exports);
var React = __toESM(__webpack_require__(6689));
var import_mergeRefs = __webpack_require__(5974);
function useMergeRefs(...args) {
  return React.useMemo(
    () => (0, import_mergeRefs.mergeRefs)(...args),
    // eslint-disable-next-line
    [...args]
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3626:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var usePlatformMethods_exports = {};
__export(usePlatformMethods_exports, {
  default: () => usePlatformMethods_default,
  usePlatformMethods: () => usePlatformMethods
});
module.exports = __toCommonJS(usePlatformMethods_exports);
var import_UIManager = __toESM(__webpack_require__(5660));
var import_useStable = __toESM(__webpack_require__(7297));
function usePlatformMethods({
  pointerEvents,
  style
}) {
  const ref = (0, import_useStable.default)(() => (hostNode) => {
    if (hostNode != null) {
      hostNode.measure = (callback) => import_UIManager.default.measure(hostNode, callback);
      hostNode.measureLayout = (relativeToNode, success, failure) => import_UIManager.default.measureLayout(hostNode, relativeToNode, failure, success);
      hostNode.measureInWindow = (callback) => import_UIManager.default.measureInWindow(hostNode, callback);
    }
  });
  return ref;
}
var usePlatformMethods_default = usePlatformMethods;
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useStable_exports = {};
__export(useStable_exports, {
  default: () => useStable
});
module.exports = __toCommonJS(useStable_exports);
var React = __toESM(__webpack_require__(6689));
const UNINITIALIZED = typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  const ref = React.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }
  return ref.current;
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 717:
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
var AccessibilityInfo_exports = {};
__export(AccessibilityInfo_exports, {
  default: () => AccessibilityInfo_default
});
module.exports = __toCommonJS(AccessibilityInfo_exports);
var import_react_native_web_internals = __webpack_require__(2161);
function isScreenReaderEnabled() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}
const prefersReducedMotionMedia = import_react_native_web_internals.canUseDOM && typeof window.matchMedia === "function" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
function isReduceMotionEnabled() {
  return new Promise((resolve, reject) => {
    resolve(prefersReducedMotionMedia ? prefersReducedMotionMedia.matches : true);
  });
}
function addChangeListener(fn) {
  if (prefersReducedMotionMedia != null) {
    prefersReducedMotionMedia.addEventListener != null ? prefersReducedMotionMedia.addEventListener("change", fn) : prefersReducedMotionMedia.addListener(fn);
  }
}
function removeChangeListener(fn) {
  if (prefersReducedMotionMedia != null) {
    prefersReducedMotionMedia.removeEventListener != null ? prefersReducedMotionMedia.removeEventListener("change", fn) : prefersReducedMotionMedia.removeListener(fn);
  }
}
const handlers = {};
const AccessibilityInfo = {
  /**
   * Query whether a screen reader is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a screen reader is enabled and `false` otherwise.
   */
  isScreenReaderEnabled,
  /**
   * Query whether the user prefers reduced motion.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a screen reader is enabled and `false` otherwise.
   */
  isReduceMotionEnabled,
  /**
   * Deprecated
   */
  fetch: isScreenReaderEnabled,
  /**
   * Add an event handler. Supported events: reduceMotionChanged
   */
  addEventListener: function(eventName, handler) {
    if (eventName === "reduceMotionChanged") {
      if (!prefersReducedMotionMedia) {
        return;
      }
      const listener = (event) => {
        handler(event.matches);
      };
      addChangeListener(listener);
      handlers[handler] = listener;
    }
    return {
      remove: () => AccessibilityInfo.removeEventListener(eventName, handler)
    };
  },
  /**
   * Set accessibility focus to a react component.
   */
  setAccessibilityFocus: function(reactTag) {
  },
  /**
   * Post a string to be announced by the screen reader.
   */
  announceForAccessibility: function(announcement) {
  },
  /**
   * Remove an event handler.
   */
  removeEventListener: function(eventName, handler) {
    if (eventName === "reduceMotionChanged") {
      const listener = handlers[handler];
      if (!listener || !prefersReducedMotionMedia) {
        return;
      }
      removeChangeListener(listener);
    }
    return;
  }
};
var AccessibilityInfo_default = AccessibilityInfo;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6122:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ActivityIndicator_exports = {};
__export(ActivityIndicator_exports, {
  default: () => ActivityIndicator_default
});
module.exports = __toCommonJS(ActivityIndicator_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
const createSvgCircle = (style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4", style });
const ActivityIndicator = React.forwardRef(
  (props, forwardedRef) => {
    const {
      animating = true,
      color = "#1976D2",
      hidesWhenStopped = true,
      size = "small",
      style,
      ...other
    } = props;
    const svg = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [
      createSvgCircle({
        stroke: color,
        opacity: 0.2
      }),
      createSvgCircle({
        stroke: color,
        strokeDasharray: 80,
        strokeDashoffset: 60
      })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_View.default,
      {
        ...other,
        accessibilityRole: "progressbar",
        accessibilityValueMax: 1,
        accessibilityValueMin: 0,
        ref: forwardedRef,
        style: [styles.container, style],
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_View.default,
          {
            children: svg,
            style: [
              typeof size === "number" ? { height: size, width: size } : indicatorSizes[size],
              styles.animation,
              !animating && styles.animationPause,
              !animating && hidesWhenStopped && styles.hidesWhenStopped
            ]
          }
        )
      }
    );
  }
);
ActivityIndicator.displayName = "ActivityIndicator";
const styles = import_react_native_web_internals.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  hidesWhenStopped: {
    visibility: "hidden"
  },
  animation: {
    animationDuration: "0.75s",
    animationKeyframes: [
      {
        "0%": { transform: [{ rotate: "0deg" }] },
        "100%": { transform: [{ rotate: "360deg" }] }
      }
    ],
    animationTimingFunction: "linear",
    animationIterationCount: "infinite"
  },
  animationPause: {
    animationPlayState: "paused"
  }
});
const indicatorSizes = import_react_native_web_internals.StyleSheet.create({
  small: {
    width: 20,
    height: 20
  },
  large: {
    width: 36,
    height: 36
  }
});
var ActivityIndicator_default = ActivityIndicator;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6193:
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
var Alert_exports = {};
__export(Alert_exports, {
  default: () => Alert_default
});
module.exports = __toCommonJS(Alert_exports);
class Alert {
  static alert() {
  }
}
var Alert_default = Alert;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AppContainer_exports = {};
__export(AppContainer_exports, {
  default: () => AppContainer_default
});
module.exports = __toCommonJS(AppContainer_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
const RootTagContext = React.createContext(null);
const AppContainer = React.forwardRef(
  (props, forwardedRef) => {
    const { children, WrapperComponent } = props;
    let innerView = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_View.default, { pointerEvents: "box-none", style: styles.appContainer, children }, 1);
    if (WrapperComponent) {
      innerView = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapperComponent, { children: innerView });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootTagContext.Provider, { value: props.rootTag, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_View.default,
      {
        pointerEvents: "box-none",
        ref: forwardedRef,
        style: styles.appContainer,
        children: innerView
      }
    ) });
  }
);
AppContainer.displayName = "AppContainer";
var AppContainer_default = AppContainer;
const styles = import_react_native_web_internals.StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
//# sourceMappingURL=AppContainer.js.map


/***/ }),

/***/ 1774:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AppRegistry_exports = {};
__export(AppRegistry_exports, {
  default: () => AppRegistry
});
module.exports = __toCommonJS(AppRegistry_exports);
var import_react_dom = __webpack_require__(6405);
var import_react_native_web_internals = __webpack_require__(2161);
var import_renderApplication = __toESM(__webpack_require__(1798));
const emptyObject = {};
const runnables = {};
let componentProviderInstrumentationHook = (component) => component();
let wrapperComponentProvider;
class AppRegistry {
  static getAppKeys() {
    return Object.keys(runnables);
  }
  static getApplication(appKey, appParameters) {
    var _a, _b;
    (0, import_react_native_web_internals.invariant)(
      runnables[appKey] && runnables[appKey].getApplication,
      `Application ${appKey} has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.`
    );
    return (_b = (_a = runnables[appKey]) == null ? void 0 : _a.getApplication) == null ? void 0 : _b.call(_a, appParameters);
  }
  static registerComponent(appKey, componentProvider) {
    runnables[appKey] = {
      getApplication: (appParameters) => (0, import_renderApplication.getApplication)(
        componentProviderInstrumentationHook(componentProvider),
        appParameters ? appParameters.initialProps : emptyObject,
        wrapperComponentProvider && wrapperComponentProvider(appParameters)
      ),
      run: (appParameters) => (0, import_renderApplication.default)(
        componentProviderInstrumentationHook(componentProvider),
        wrapperComponentProvider && wrapperComponentProvider(appParameters),
        appParameters.callback,
        {
          hydrate: appParameters.hydrate || false,
          initialProps: appParameters.initialProps || emptyObject,
          mode: appParameters.mode || "legacy",
          rootTag: appParameters.rootTag
        }
      )
    };
    return appKey;
  }
  static registerConfig(config) {
    config.forEach(({ appKey, component, run }) => {
      if (run) {
        AppRegistry.registerRunnable(appKey, run);
      } else {
        (0, import_react_native_web_internals.invariant)(component, "No component provider passed in");
        AppRegistry.registerComponent(appKey, component);
      }
    });
  }
  // TODO: fix style sheet creation when using this method
  static registerRunnable(appKey, run) {
    runnables[appKey] = { run };
    return appKey;
  }
  static runApplication(appKey, appParameters) {
    const isDevelopment =  false && 0;
    if (isDevelopment) {
      const params = { ...appParameters };
      params.rootTag = `#${params.rootTag.id}`;
      console.log(
        `Running application "${appKey}" with appParams:
`,
        params,
        `
Development-level warnings: ${isDevelopment ? "ON" : "OFF"}.
Performance optimizations: ${isDevelopment ? "OFF" : "ON"}.`
      );
    }
    (0, import_react_native_web_internals.invariant)(
      runnables[appKey] && runnables[appKey].run,
      `Application "${appKey}" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.`
    );
    return runnables[appKey].run(appParameters);
  }
  static setComponentProviderInstrumentationHook(hook) {
    componentProviderInstrumentationHook = hook;
  }
  static setWrapperComponentProvider(provider) {
    wrapperComponentProvider = provider;
  }
  static unmountApplicationComponentAtRootTag(rootTag) {
    (0, import_react_dom.unmountComponentAtNode)(rootTag);
  }
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var renderApplication_exports = {};
__export(renderApplication_exports, {
  default: () => renderApplication,
  getApplication: () => getApplication
});
module.exports = __toCommonJS(renderApplication_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_render = __toESM(__webpack_require__(4910));
var import_AppContainer = __toESM(__webpack_require__(9584));
function renderApplication(RootComponent, WrapperComponent = null, callback = () => {
}, options) {
  const { hydrate: shouldHydrate, initialProps, mode, rootTag } = options;
  const renderFn = shouldHydrate ? mode === "concurrent" ? import_render.hydrate : import_render.hydrateLegacy : mode === "concurrent" ? import_render.render : import_render.default;
  (0, import_react_native_web_internals2.invariant)(rootTag, "Expect to have a valid rootTag, instead got ", rootTag);
  return renderFn(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_AppContainer.default,
      {
        WrapperComponent,
        ref: callback,
        rootTag,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootComponent, { ...initialProps })
      }
    ),
    rootTag
  );
}
function getApplication(RootComponent, initialProps, WrapperComponent) {
  const element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_AppContainer.default, { WrapperComponent, rootTag: {}, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootComponent, { ...initialProps }) });
  const getStyleElement = (props) => {
    const sheet = import_react_native_web_internals.StyleSheet.getSheet();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "style",
      {
        ...props,
        dangerouslySetInnerHTML: { __html: sheet.textContent },
        id: sheet.id
      }
    );
  };
  return { element, getStyleElement };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=renderApplication.js.map


/***/ }),

/***/ 9146:
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
var AppState_exports = {};
__export(AppState_exports, {
  default: () => AppState
});
module.exports = __toCommonJS(AppState_exports);
var import_react_native_web_internals = __webpack_require__(2161);
const isPrefixed = (
  // eslint-disable-next-line no-prototype-builtins
  import_react_native_web_internals.canUseDOM && !document.hasOwnProperty("hidden") && document.hasOwnProperty("webkitHidden")
);
const EVENT_TYPES = ["change", "memoryWarning"];
const VISIBILITY_CHANGE_EVENT = isPrefixed ? "webkitvisibilitychange" : "visibilitychange";
const VISIBILITY_STATE_PROPERTY = isPrefixed ? "webkitVisibilityState" : "visibilityState";
const AppStates = {
  BACKGROUND: "background",
  ACTIVE: "active"
};
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  addListener(type, handler) {
    var _a;
    (_a = this.listeners)[type] ?? (_a[type] = /* @__PURE__ */ new Set());
    this.listeners[type].add(handler);
  }
  emit(type, state) {
    var _a;
    (_a = this.listeners[type]) == null ? void 0 : _a.forEach((cb) => cb(state));
  }
  removeListener(type, handler) {
    var _a;
    (_a = this.listeners[type]) == null ? void 0 : _a.delete(handler);
  }
}
let hasBoundVisibilityChangeEvent = false;
const changeEmitter = new EventEmitter();
const _AppState = class {
  static get currentState() {
    if (!_AppState.isAvailable) {
      return AppStates.ACTIVE;
    }
    switch (document[VISIBILITY_STATE_PROPERTY]) {
      case "hidden":
      case "prerender":
      case "unloaded":
        return AppStates.BACKGROUND;
      default:
        return AppStates.ACTIVE;
    }
  }
  static addEventListener(type, handler) {
    if (_AppState.isAvailable) {
      (0, import_react_native_web_internals.invariant)(
        EVENT_TYPES.indexOf(type) !== -1,
        'Trying to subscribe to unknown event: "%s"',
        type
      );
      if (type === "change") {
        if (!hasBoundVisibilityChangeEvent) {
          hasBoundVisibilityChangeEvent = true;
          document.addEventListener(
            VISIBILITY_CHANGE_EVENT,
            () => {
              if (changeEmitter) {
                changeEmitter.emit("change", _AppState.currentState);
              }
            },
            false
          );
        }
        return changeEmitter.addListener(type, handler);
      }
    }
  }
};
let AppState = _AppState;
AppState.isAvailable = import_react_native_web_internals.canUseDOM && document[VISIBILITY_STATE_PROPERTY];
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3991:
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
var Appearance_exports = {};
__export(Appearance_exports, {
  default: () => Appearance_default
});
module.exports = __toCommonJS(Appearance_exports);
var import_react_native_web_internals = __webpack_require__(2161);
function getQuery() {
  return import_react_native_web_internals.canUseDOM && window.matchMedia != null ? window.matchMedia("(prefers-color-scheme: dark)") : null;
}
const query = getQuery();
const listenerMapping = /* @__PURE__ */ new WeakMap();
const Appearance = {
  getColorScheme() {
    return query && query.matches ? "dark" : "light";
  },
  addChangeListener(listener) {
    let mappedListener = listenerMapping.get(listener);
    if (!mappedListener) {
      mappedListener = ({ matches }) => {
        listener({ colorScheme: matches ? "dark" : "light" });
      };
      listenerMapping.set(listener, mappedListener);
    }
    if (query) {
      query.addListener(mappedListener);
    }
    function remove() {
      const mappedListener2 = listenerMapping.get(listener);
      if (query && mappedListener2) {
        query.removeListener(mappedListener2);
      }
      listenerMapping.delete(listener);
    }
    return { remove };
  }
};
var Appearance_default = Appearance;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6566:
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
var BackHandler_exports = {};
__export(BackHandler_exports, {
  default: () => BackHandler_default
});
module.exports = __toCommonJS(BackHandler_exports);
function emptyFunction() {
}
const BackHandler = {
  exitApp: emptyFunction,
  addEventListener() {
    return {
      remove: emptyFunction
    };
  },
  removeEventListener: emptyFunction
};
var BackHandler_default = BackHandler;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 615:
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
var Clipboard_exports = {};
__export(Clipboard_exports, {
  default: () => Clipboard
});
module.exports = __toCommonJS(Clipboard_exports);
let clipboardAvailable;
class Clipboard {
  static isAvailable() {
    if (clipboardAvailable === void 0) {
      clipboardAvailable = typeof document.queryCommandSupported === "function" && document.queryCommandSupported("copy");
    }
    return clipboardAvailable;
  }
  static getString() {
    return Promise.resolve("");
  }
  static setString(text) {
    let success = false;
    const body = document.body;
    if (body) {
      const node = document.createElement("span");
      node.textContent = text;
      node.style.opacity = "0";
      node.style.position = "absolute";
      node.style.whiteSpace = "pre-wrap";
      node.style.userSelect = "auto";
      body.appendChild(node);
      const selection = window.getSelection();
      selection.removeAllRanges();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.addRange(range);
      try {
        document.execCommand("copy");
        success = true;
      } catch (e) {
      }
      selection.removeAllRanges();
      body.removeChild(node);
    }
    return success;
  }
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3360:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var DeviceEmitter_exports = {};
__export(DeviceEmitter_exports, {
  default: () => DeviceEmitter_default
});
module.exports = __toCommonJS(DeviceEmitter_exports);
var import_EventEmitter = __toESM(__webpack_require__(2245));
var DeviceEmitter_default = new import_EventEmitter.default();
//# sourceMappingURL=DeviceEmitter.js.map


/***/ }),

/***/ 4128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var DeviceInfo_exports = {};
__export(DeviceInfo_exports, {
  default: () => DeviceInfo_default
});
module.exports = __toCommonJS(DeviceInfo_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_Dimensions = __toESM(__webpack_require__(4103));
const DeviceInfo = {
  Dimensions: {
    get windowPhysicalPixels() {
      const { width, height, fontScale, scale } = import_Dimensions.default.get("window");
      return {
        width: width * scale,
        height: height * scale,
        scale,
        fontScale
      };
    },
    get screenPhysicalPixels() {
      const { width, height, fontScale, scale } = import_Dimensions.default.get("screen");
      return {
        width: width * scale,
        height: height * scale,
        scale,
        fontScale
      };
    }
  },
  get locale() {
    if (import_react_native_web_internals.canUseDOM) {
      if (navigator.languages) {
        return navigator.languages[0];
      } else {
        return navigator.language;
      }
    }
  },
  get totalMemory() {
    return import_react_native_web_internals.canUseDOM ? navigator.deviceMemory : void 0;
  },
  get userAgent() {
    return import_react_native_web_internals.canUseDOM ? navigator.userAgent : "";
  }
};
var DeviceInfo_default = DeviceInfo;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4103:
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
var Dimensions_exports = {};
__export(Dimensions_exports, {
  default: () => Dimensions
});
module.exports = __toCommonJS(Dimensions_exports);
var import_react_native_web_internals = __webpack_require__(2161);
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
let shouldInit = import_react_native_web_internals.canUseDOM;
function update() {
  if (!import_react_native_web_internals.canUseDOM) {
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
    (0, import_react_native_web_internals.invariant)(dimensions[dimension], `No dimension set for key ${dimension}`);
    return dimensions[dimension];
  }
  static set(initialDimensions) {
    if (initialDimensions) {
      if (import_react_native_web_internals.canUseDOM) {
        (0, import_react_native_web_internals.invariant)(false, "Dimensions cannot be set in the browser");
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
if (import_react_native_web_internals.canUseDOM) {
  window.addEventListener("resize", handleResize, false);
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2237:
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
var I18nManager_exports = {};
__export(I18nManager_exports, {
  default: () => I18nManager_default
});
module.exports = __toCommonJS(I18nManager_exports);
const I18nManager = {
  allowRTL() {
    return;
  },
  forceRTL() {
    return;
  },
  getConstants() {
    return { isRTL: false };
  }
};
var I18nManager_default = I18nManager;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Image_exports = {};
__export(Image_exports, {
  default: () => Image_default
});
module.exports = __toCommonJS(Image_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_createElement = __toESM(__webpack_require__(3637));
var import_PixelRatio = __toESM(__webpack_require__(5571));
var import_View = __toESM(__webpack_require__(6691));
const ERRORED = "ERRORED";
const LOADED = "LOADED";
const LOADING = "LOADING";
const IDLE = "IDLE";
let _filterId = 0;
const svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;
function createTintColorSVG(tintColor, id) {
  return tintColor && id != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      style: {
        position: "absolute",
        height: 0,
        visibility: "hidden",
        width: 0
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", { id: `tint-${id}`, suppressHydrationWarning: true, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { floodColor: `${tintColor}` }, tintColor),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in2: "SourceAlpha", operator: "atop" })
      ] }) })
    }
  ) : null;
}
function getFlatStyle(style, blurRadius, filterId) {
  const flatStyle = import_react_native_web_internals.StyleSheet.flatten(style);
  const { filter, resizeMode, shadowOffset, tintColor } = flatStyle;
  const filters = [];
  let _filter = null;
  if (filter) {
    filters.push(filter);
  }
  if (blurRadius) {
    filters.push(`blur(${blurRadius}px)`);
  }
  if (shadowOffset) {
    const shadowString = (0, import_react_native_web_internals.createBoxShadowValue)(flatStyle);
    if (shadowString) {
      filters.push(`drop-shadow(${shadowString})`);
    }
  }
  if (tintColor && filterId != null) {
    filters.push(`url(#tint-${filterId})`);
  }
  if (filters.length > 0) {
    _filter = filters.join(" ");
  }
  delete flatStyle.blurRadius;
  delete flatStyle.shadowColor;
  delete flatStyle.shadowOpacity;
  delete flatStyle.shadowOffset;
  delete flatStyle.shadowRadius;
  delete flatStyle.tintColor;
  delete flatStyle.overlayColor;
  delete flatStyle.resizeMode;
  return [flatStyle, resizeMode, _filter, tintColor];
}
function resolveAssetDimensions(source) {
  if (typeof source === "number") {
    const { height, width } = (0, import_react_native_web_internals2.getAssetByID)(source);
    return { height, width };
  } else if (source != null && !Array.isArray(source) && typeof source === "object") {
    const { height, width } = source;
    return { height, width };
  }
}
function resolveAssetUri(source) {
  let uri = null;
  if (typeof source === "number") {
    const asset = (0, import_react_native_web_internals2.getAssetByID)(source);
    let scale = asset.scales[0];
    if (asset.scales.length > 1) {
      const preferredScale = import_PixelRatio.default.get();
      scale = asset.scales.reduce(
        (prev, curr) => Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev
      );
    }
    const scaleSuffix = scale !== 1 ? `@${scale}x` : "";
    uri = asset ? `${asset.httpServerLocation}/${asset.name}${scaleSuffix}.${asset.type}` : "";
  } else if (typeof source === "string") {
    uri = source;
  } else if (source && typeof source.uri === "string") {
    uri = source.uri;
  }
  if (uri) {
    const match = uri.match(svgDataUriPattern);
    if (match) {
      const [, prefix, svg] = match;
      const encodedSvg = encodeURIComponent(svg);
      return `${prefix}${encodedSvg}`;
    }
  }
  return uri;
}
const Image = React.forwardRef((props, ref) => {
  const {
    accessibilityLabel,
    blurRadius,
    defaultSource,
    draggable,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    pointerEvents,
    source,
    style,
    ...rest
  } = props;
  if (false) {}
  const [state, updateState] = React.useState(() => {
    const uri2 = resolveAssetUri(source);
    if (uri2 != null) {
      const isLoaded = import_react_native_web_internals2.ImageLoader.has(uri2);
      if (isLoaded) {
        return LOADED;
      }
    }
    return IDLE;
  });
  const [layout, updateLayout] = React.useState({});
  const hasTextAncestor = React.useContext(import_react_native_web_internals.TextAncestorContext);
  const hiddenImageRef = React.useRef(null);
  const filterRef = React.useRef(_filterId++);
  const requestRef = React.useRef(null);
  const shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;
  const [flatStyle, _resizeMode, filter, tintColor] = getFlatStyle(
    style,
    blurRadius,
    filterRef.current
  );
  const resizeMode = props.resizeMode || _resizeMode || "cover";
  const selectedSource = shouldDisplaySource ? source : defaultSource;
  const displayImageUri = resolveAssetUri(selectedSource);
  const imageSizeStyle = resolveAssetDimensions(selectedSource);
  const backgroundImage = displayImageUri ? `url("${displayImageUri}")` : null;
  const backgroundSize = getBackgroundSize();
  const hiddenImage = displayImageUri ? (0, import_createElement.default)("img", {
    alt: accessibilityLabel || "",
    style: styles.accessibilityImage$raw,
    draggable: draggable || false,
    ref: hiddenImageRef,
    src: displayImageUri
  }) : null;
  function getBackgroundSize() {
    if (hiddenImageRef.current != null && (resizeMode === "center" || resizeMode === "repeat")) {
      const { naturalHeight, naturalWidth } = hiddenImageRef.current;
      const { height, width } = layout;
      if (naturalHeight && naturalWidth && height && width) {
        const scaleFactor = Math.min(1, width / naturalWidth, height / naturalHeight);
        const x = Math.ceil(scaleFactor * naturalWidth);
        const y = Math.ceil(scaleFactor * naturalHeight);
        return `${x}px ${y}px`;
      }
    }
  }
  function handleLayout(e) {
    if (resizeMode === "center" || resizeMode === "repeat" || onLayout) {
      const { layout: layout2 } = e.nativeEvent;
      onLayout && onLayout(e);
      updateLayout(layout2);
    }
  }
  const uri = resolveAssetUri(source);
  React.useEffect(() => {
    abortPendingRequest();
    if (uri != null) {
      updateState(LOADING);
      if (onLoadStart) {
        onLoadStart();
      }
      requestRef.current = import_react_native_web_internals2.ImageLoader.load(
        uri,
        function load(e) {
          updateState(LOADED);
          if (onLoad) {
            onLoad(e);
          }
          if (onLoadEnd) {
            onLoadEnd();
          }
        },
        function error() {
          updateState(ERRORED);
          if (onError) {
            onError({
              nativeEvent: {
                error: `Failed to load resource ${uri} (404)`
              }
            });
          }
          if (onLoadEnd) {
            onLoadEnd();
          }
        }
      );
    }
    function abortPendingRequest() {
      if (requestRef.current != null) {
        import_react_native_web_internals2.ImageLoader.abort(requestRef.current);
        requestRef.current = null;
      }
    }
    return abortPendingRequest;
  }, [uri, requestRef, updateState, onError, onLoad, onLoadEnd, onLoadStart]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_View.default,
    {
      ...rest,
      accessibilityLabel,
      onLayout: handleLayout,
      pointerEvents,
      ref,
      style: [
        styles.root,
        hasTextAncestor && styles.inline,
        imageSizeStyle,
        flatStyle
      ],
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_View.default,
          {
            style: [
              styles.image,
              resizeModeStyles[resizeMode],
              { backgroundImage, filter },
              backgroundSize != null && { backgroundSize }
            ],
            suppressHydrationWarning: true
          }
        ),
        hiddenImage,
        createTintColorSVG(tintColor, filterRef.current)
      ]
    }
  );
});
Image.displayName = "Image";
const ImageWithStatics = Image;
ImageWithStatics.getSize = function(uri, success, failure) {
  import_react_native_web_internals2.ImageLoader.getSize(uri, success, failure);
};
ImageWithStatics.prefetch = function(uri) {
  return import_react_native_web_internals2.ImageLoader.prefetch(uri);
};
ImageWithStatics.queryCache = function(uris) {
  return import_react_native_web_internals2.ImageLoader.queryCache(uris);
};
const styles = import_react_native_web_internals.StyleSheet.create({
  root: {
    flexBasis: "auto",
    overflow: "hidden",
    zIndex: 0
  },
  inline: {
    display: "inline-flex"
  },
  image: {
    ...import_react_native_web_internals.StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    zIndex: -1
  },
  accessibilityImage$raw: {
    ...import_react_native_web_internals.StyleSheet.absoluteFillObject,
    height: "100%",
    opacity: 0,
    width: "100%",
    zIndex: -1
  }
});
const resizeModeStyles = import_react_native_web_internals.StyleSheet.create({
  center: {
    backgroundSize: "auto"
  },
  contain: {
    backgroundSize: "contain"
  },
  cover: {
    backgroundSize: "cover"
  },
  none: {
    backgroundPosition: "0",
    backgroundSize: "auto"
  },
  repeat: {
    backgroundPosition: "0",
    backgroundRepeat: "repeat",
    backgroundSize: "auto"
  },
  stretch: {
    backgroundSize: "100% 100%"
  }
});
var Image_default = ImageWithStatics;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ImageBackground_exports = {};
__export(ImageBackground_exports, {
  default: () => ImageBackground_default
});
module.exports = __toCommonJS(ImageBackground_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react = __webpack_require__(6689);
var import_react_native_web_internals = __webpack_require__(2161);
var import_Image = __toESM(__webpack_require__(6496));
var import_View = __toESM(__webpack_require__(6691));
const emptyObject = {};
const ImageBackground = (0, import_react.forwardRef)((props, forwardedRef) => {
  const { children, style = emptyObject, imageStyle, imageRef, ...rest } = props;
  const { height, width } = import_react_native_web_internals.StyleSheet.flatten(style);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_View.default, { ref: forwardedRef, style, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_Image.default,
      {
        ...rest,
        ref: imageRef,
        style: [
          {
            // Temporary Workaround:
            // Current (imperfect yet) implementation of <Image> overwrites width and height styles
            // (which is not quite correct), and these styles conflict with explicitly set styles
            // of <ImageBackground> and with our internal layout model here.
            // So, we have to proxy/reapply these styles explicitly for actual <Image> component.
            // This workaround should be removed after implementing proper support of
            // intrinsic content size of the <Image>.
            width,
            height,
            zIndex: -1
          },
          import_react_native_web_internals.StyleSheet.absoluteFill,
          imageStyle
        ]
      }
    ),
    children
  ] });
});
ImageBackground.displayName = "ImageBackground";
var ImageBackground_default = ImageBackground;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3350:
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
var Keyboard_exports = {};
__export(Keyboard_exports, {
  default: () => Keyboard_default
});
module.exports = __toCommonJS(Keyboard_exports);
var import_react_native_web_internals = __webpack_require__(2161);
const Keyboard = {
  addListener() {
    return { remove: () => {
    } };
  },
  dismiss() {
    (0, import_react_native_web_internals.dismissKeyboard)();
  },
  removeAllListeners() {
  },
  removeListener() {
  }
};
var Keyboard_default = Keyboard;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var KeyboardAvoidingView_exports = {};
__export(KeyboardAvoidingView_exports, {
  default: () => KeyboardAvoidingView_default
});
module.exports = __toCommonJS(KeyboardAvoidingView_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_View = __toESM(__webpack_require__(6691));
class KeyboardAvoidingView extends React.Component {
  constructor() {
    super(...arguments);
    this.frame = null;
    this.onLayout = (event) => {
      this.frame = event.nativeEvent.layout;
    };
  }
  relativeKeyboardHeight(keyboardFrame) {
    const frame = this.frame;
    if (!frame || !keyboardFrame) {
      return 0;
    }
    const keyboardY = keyboardFrame.screenY - (this.props.keyboardVerticalOffset || 0);
    return Math.max(frame.y + frame.height - keyboardY, 0);
  }
  onKeyboardChange(event) {
  }
  render() {
    const {
      /* eslint-disable */
      behavior,
      contentContainerStyle,
      keyboardVerticalOffset,
      /* eslint-enable */
      ...rest
    } = this.props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_View.default, { onLayout: this.onLayout, ...rest });
  }
}
var KeyboardAvoidingView_default = KeyboardAvoidingView;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1248:
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
var Linking_exports = {};
__export(Linking_exports, {
  default: () => Linking_default
});
module.exports = __toCommonJS(Linking_exports);
var import_react_native_web_internals = __webpack_require__(2161);
const initialURL = import_react_native_web_internals.canUseDOM ? window.location.href : "";
class Linking {
  constructor() {
    /**
     * An object mapping of event name
     * and all the callbacks subscribing to it
     */
    this._eventCallbacks = {};
    /**
     * Adds a event listener for the specified event. The callback will be called when the
     * said event is dispatched.
     */
    this.addEventListener = (event, callback) => {
      if (!this._eventCallbacks[event]) {
        this._eventCallbacks[event] = [callback];
        return;
      }
      this._eventCallbacks[event].push(callback);
    };
    /**
     * Removes a previously added event listener for the specified event. The callback must
     * be the same object as the one passed to `addEventListener`.
     */
    this.removeEventListener = (event, callback) => {
      const callbacks = this._eventCallbacks[event];
      const filteredCallbacks = callbacks.filter(
        (c) => c.toString() !== callback.toString()
      );
      this._eventCallbacks[event] = filteredCallbacks;
    };
  }
  _dispatchEvent(event, ...data) {
    const listeners = this._eventCallbacks[event];
    if (listeners != null && Array.isArray(listeners)) {
      listeners.map((listener) => {
        listener(...data);
      });
    }
  }
  canOpenURL() {
    return Promise.resolve(true);
  }
  getInitialURL() {
    return Promise.resolve(initialURL);
  }
  /**
   * Try to open the given url in a secure fashion. The method returns a Promise object.
   * If a target is passed (including undefined) that target will be used, otherwise '_blank'.
   * If the url opens, the promise is resolved. If not, the promise is rejected.
   * Dispatches the `onOpen` event if `url` is opened successfully.
   */
  openURL(url, target) {
    if (arguments.length === 1) {
      target = "_blank";
    }
    try {
      open(url, target);
      this._dispatchEvent("onOpen", url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  _validateURL(url) {
    (0, import_react_native_web_internals.invariant)(
      typeof url === "string",
      "Invalid URL: should be a string. Was: " + url
    );
    (0, import_react_native_web_internals.invariant)(url, "Invalid URL: cannot be empty");
  }
}
const open = (url, target) => {
  if (import_react_native_web_internals.canUseDOM) {
    const urlToOpen = new URL(url, window.location).toString();
    if (urlToOpen.indexOf("tel:") === 0) {
      window.location = urlToOpen;
    } else {
      window.open(urlToOpen, target, "noopener");
    }
  }
};
var Linking_default = new Linking();
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6478:
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
var LogBox_exports = {};
__export(LogBox_exports, {
  default: () => LogBox_default
});
module.exports = __toCommonJS(LogBox_exports);
const LogBox = {
  ignoreLogs() {
  },
  ignoreAllLogs() {
  },
  uninstall() {
  },
  install() {
  }
};
var LogBox_default = LogBox;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ModalAnimation_exports = {};
__export(ModalAnimation_exports, {
  default: () => ModalAnimation_default
});
module.exports = __toCommonJS(ModalAnimation_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_createElement = __toESM(__webpack_require__(3637));
var ANIMATION_DURATION = 300;
function getAnimationStyle(animationType, visible) {
  if (animationType === "slide") {
    return visible ? animatedSlideInStyles : animatedSlideOutStyles;
  }
  if (animationType === "fade") {
    return visible ? animatedFadeInStyles : animatedFadeOutStyles;
  }
  return visible ? styles.container : styles.hidden;
}
function ModalAnimation(props) {
  var animationType = props.animationType, children = props.children, onDismiss = props.onDismiss, onShow = props.onShow, visible = props.visible;
  var _React$useState = React.useState(false), isRendering = _React$useState[0], setIsRendering = _React$useState[1];
  var wasVisible = React.useRef(false);
  var isAnimated = animationType && animationType !== "none";
  var animationEndCallback = React.useCallback(
    (e) => {
      if (e && e.currentTarget !== e.target) {
        return;
      }
      if (visible) {
        if (onShow) {
          onShow();
        }
      } else {
        setIsRendering(false);
        if (onDismiss) {
          onDismiss();
        }
      }
    },
    [onDismiss, onShow, visible]
  );
  React.useEffect(() => {
    if (visible) {
      setIsRendering(true);
    }
    if (visible !== wasVisible.current && !isAnimated) {
      animationEndCallback();
    }
    wasVisible.current = visible;
  }, [isAnimated, visible, animationEndCallback]);
  return isRendering || visible ? (0, import_createElement.default)("div", {
    style: isRendering ? getAnimationStyle(animationType, visible) : styles.hidden,
    onAnimationEnd: animationEndCallback,
    children
  }) : null;
}
var styles = import_react_native_web_internals.StyleSheet.create({
  container: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9999
  },
  animatedIn: {
    animationDuration: ANIMATION_DURATION + "ms",
    animationTimingFunction: "ease-in"
  },
  animatedOut: {
    pointerEvents: "none",
    animationDuration: ANIMATION_DURATION + "ms",
    animationTimingFunction: "ease-out"
  },
  fadeIn: {
    opacity: 1,
    animationKeyframes: {
      "0%": {
        opacity: 0
      },
      "100%": {
        opacity: 1
      }
    }
  },
  fadeOut: {
    opacity: 0,
    animationKeyframes: {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    }
  },
  slideIn: {
    transform: [
      {
        translateY: "0%"
      }
    ],
    animationKeyframes: {
      "0%": {
        transform: [
          {
            translateY: "100%"
          }
        ]
      },
      "100%": {
        transform: [
          {
            translateY: "0%"
          }
        ]
      }
    }
  },
  slideOut: {
    transform: [
      {
        translateY: "100%"
      }
    ],
    animationKeyframes: {
      "0%": {
        transform: [
          {
            translateY: "0%"
          }
        ]
      },
      "100%": {
        transform: [
          {
            translateY: "100%"
          }
        ]
      }
    }
  },
  hidden: {
    opacity: 0
  }
});
var animatedSlideInStyles = [styles.container, styles.animatedIn, styles.slideIn];
var animatedSlideOutStyles = [styles.container, styles.animatedOut, styles.slideOut];
var animatedFadeInStyles = [styles.container, styles.animatedIn, styles.fadeIn];
var animatedFadeOutStyles = [styles.container, styles.animatedOut, styles.fadeOut];
var ModalAnimation_default = ModalAnimation;
//# sourceMappingURL=ModalAnimation.js.map


/***/ }),

/***/ 2185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ModalContent_exports = {};
__export(ModalContent_exports, {
  default: () => ModalContent_default
});
module.exports = __toCommonJS(ModalContent_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
var ModalContent = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
  const { active, children, onRequestClose, transparent, ...rest } = props;
  React.useEffect(() => {
    if (import_react_native_web_internals.canUseDOM) {
      var closeOnEscape = (e) => {
        if (active && e.key === "Escape") {
          e.stopPropagation();
          if (onRequestClose) {
            onRequestClose();
          }
        }
      };
      document.addEventListener("keyup", closeOnEscape, false);
      return () => document.removeEventListener("keyup", closeOnEscape, false);
    }
  }, [active, onRequestClose]);
  var style = React.useMemo(() => {
    return [styles.modal, transparent ? styles.modalTransparent : styles.modalOpaque];
  }, [transparent]);
  return /* @__PURE__ */ React.createElement(
    import_View.default,
    {
      ...rest,
      accessibilityModal: true,
      accessibilityRole: active ? "dialog" : null,
      ref: forwardedRef,
      style
    },
    /* @__PURE__ */ React.createElement(
      import_View.default,
      {
        style: styles.container
      },
      children
    )
  );
});
var styles = import_react_native_web_internals.StyleSheet.create({
  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  modalTransparent: {
    backgroundColor: "transparent"
  },
  modalOpaque: {
    backgroundColor: "white"
  },
  container: {
    top: 0,
    flex: 1
  }
});
var ModalContent_default = ModalContent;
//# sourceMappingURL=ModalContent.js.map


/***/ }),

/***/ 6307:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ModalFocusTrap_exports = {};
__export(ModalFocusTrap_exports, {
  default: () => ModalFocusTrap_default
});
module.exports = __toCommonJS(ModalFocusTrap_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_createElement = __toESM(__webpack_require__(3637));
var import_View = __toESM(__webpack_require__(6691));
var FocusBracket = () => {
  return (0, import_createElement.default)("div", {
    accessibilityRole: "none",
    tabIndex: 0,
    style: styles.focusBracket
  });
};
function attemptFocus(element) {
  if (!import_react_native_web_internals.canUseDOM) {
    return false;
  }
  try {
    element.focus();
  } catch (e) {
  }
  return document.activeElement === element;
}
function focusFirstDescendant(element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];
    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
}
function focusLastDescendant(element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];
    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
}
var ModalFocusTrap = (_ref) => {
  var active = _ref.active, children = _ref.children;
  var trapElementRef = React.useRef();
  var focusRef = React.useRef({
    trapFocusInProgress: false,
    lastFocusedElement: null
  });
  React.useEffect(() => {
    if (import_react_native_web_internals.canUseDOM) {
      var trapFocus = () => {
        if (trapElementRef.current == null || focusRef.current.trapFocusInProgress || !active) {
          return;
        }
        try {
          focusRef.current.trapFocusInProgress = true;
          if (document.activeElement instanceof Node && !trapElementRef.current.contains(document.activeElement)) {
            var hasFocused = focusFirstDescendant(trapElementRef.current);
            if (focusRef.current.lastFocusedElement === document.activeElement) {
              hasFocused = focusLastDescendant(trapElementRef.current);
            }
            if (!hasFocused && trapElementRef.current != null && document.activeElement) {
              import_react_native_web_internals.UIManager.focus(trapElementRef.current);
            }
          }
        } finally {
          focusRef.current.trapFocusInProgress = false;
        }
        focusRef.current.lastFocusedElement = document.activeElement;
      };
      trapFocus();
      document.addEventListener("focus", trapFocus, true);
      return () => document.removeEventListener("focus", trapFocus, true);
    }
  }, [active]);
  React.useEffect(function() {
    if (import_react_native_web_internals.canUseDOM) {
      var lastFocusedElementOutsideTrap = document.activeElement;
      return function() {
        if (lastFocusedElementOutsideTrap && document.contains(lastFocusedElementOutsideTrap)) {
          import_react_native_web_internals.UIManager.focus(lastFocusedElementOutsideTrap);
        }
      };
    }
  }, []);
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(FocusBracket, null),
    /* @__PURE__ */ React.createElement(
      import_View.default,
      {
        ref: trapElementRef
      },
      children
    ),
    /* @__PURE__ */ React.createElement(FocusBracket, null)
  );
};
var ModalFocusTrap_default = ModalFocusTrap;
var styles = import_react_native_web_internals.StyleSheet.create({
  focusBracket: {
    outlineStyle: "none"
  }
});
//# sourceMappingURL=ModalFocusTrap.js.map


/***/ }),

/***/ 8681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ModalPortal_exports = {};
__export(ModalPortal_exports, {
  default: () => ModalPortal_default
});
module.exports = __toCommonJS(ModalPortal_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_dom = __toESM(__webpack_require__(6405));
var import_react_native_web_internals = __webpack_require__(2161);
function ModalPortal(props) {
  var children = props.children;
  var elementRef = React.useRef(null);
  if (import_react_native_web_internals.canUseDOM && !elementRef.current) {
    var element = document.createElement("div");
    if (element && document.body) {
      document.body.appendChild(element);
      elementRef.current = element;
    }
  }
  React.useEffect(() => {
    if (import_react_native_web_internals.canUseDOM) {
      return () => {
        if (document.body && elementRef.current) {
          document.body.removeChild(elementRef.current);
          elementRef.current = null;
        }
      };
    }
  }, []);
  return elementRef.current && import_react_native_web_internals.canUseDOM ? /* @__PURE__ */ import_react_dom.default.createPortal(children, elementRef.current) : null;
}
var ModalPortal_default = ModalPortal;
//# sourceMappingURL=ModalPortal.js.map


/***/ }),

/***/ 2667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Modal_exports = {};
__export(Modal_exports, {
  default: () => Modal_default
});
module.exports = __toCommonJS(Modal_exports);
var React = __toESM(__webpack_require__(6689));
var import_ModalAnimation = __toESM(__webpack_require__(451));
var import_ModalContent = __toESM(__webpack_require__(2185));
var import_ModalFocusTrap = __toESM(__webpack_require__(6307));
var import_ModalPortal = __toESM(__webpack_require__(8681));
var uniqueModalIdentifier = 0;
var activeModalStack = [];
var activeModalListeners = {};
function notifyActiveModalListeners() {
  if (activeModalStack.length === 0) {
    return;
  }
  var activeModalId = activeModalStack[activeModalStack.length - 1];
  activeModalStack.forEach((modalId) => {
    if (modalId in activeModalListeners) {
      activeModalListeners[modalId](modalId === activeModalId);
    }
  });
}
function removeActiveModal(modalId) {
  if (modalId in activeModalListeners) {
    activeModalListeners[modalId](false);
    delete activeModalListeners[modalId];
  }
  var index = activeModalStack.indexOf(modalId);
  if (index !== -1) {
    activeModalStack.splice(index, 1);
    notifyActiveModalListeners();
  }
}
function addActiveModal(modalId, listener) {
  removeActiveModal(modalId);
  activeModalStack.push(modalId);
  activeModalListeners[modalId] = listener;
  notifyActiveModalListeners();
}
var Modal = /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
  const {
    animationType,
    children,
    onDismiss,
    onRequestClose,
    onShow,
    transparent,
    visible = true,
    ...rest
  } = props;
  var modalId = React.useMemo(() => uniqueModalIdentifier++, []);
  var _React$useState = React.useState(false), isActive = _React$useState[0], setIsActive = _React$useState[1];
  var onDismissCallback = React.useCallback(() => {
    removeActiveModal(modalId);
    if (onDismiss) {
      onDismiss();
    }
  }, [modalId, onDismiss]);
  var onShowCallback = React.useCallback(() => {
    addActiveModal(modalId, setIsActive);
    if (onShow) {
      onShow();
    }
  }, [modalId, onShow]);
  React.useEffect(() => {
    return () => removeActiveModal(modalId);
  }, [modalId]);
  return /* @__PURE__ */ React.createElement(
    import_ModalPortal.default,
    null,
    /* @__PURE__ */ React.createElement(
      import_ModalAnimation.default,
      {
        animationType,
        onDismiss: onDismissCallback,
        onShow: onShowCallback,
        visible
      },
      /* @__PURE__ */ React.createElement(
        import_ModalFocusTrap.default,
        {
          active: isActive
        },
        /* @__PURE__ */ React.createElement(
          import_ModalContent.default,
          {
            ...rest,
            active: isActive,
            onRequestClose,
            ref: forwardedRef,
            transparent
          },
          children
        )
      )
    )
  );
});
var Modal_default = Modal;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5292:
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
var NativeModules_exports = {};
__export(NativeModules_exports, {
  default: () => NativeModules_default
});
module.exports = __toCommonJS(NativeModules_exports);
var import_react_native_web_internals = __webpack_require__(2161);
const NativeModules = {
  UIManager: import_react_native_web_internals.UIManager
};
var NativeModules_default = NativeModules;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7228:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var PanResponder_exports = {};
__export(PanResponder_exports, {
  default: () => PanResponder_default
});
module.exports = __toCommonJS(PanResponder_exports);
var import_PanResponder = __toESM(__webpack_require__(1702));
var PanResponder_default = import_PanResponder.default;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5571:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var PixelRatio_exports = {};
__export(PixelRatio_exports, {
  default: () => PixelRatio
});
module.exports = __toCommonJS(PixelRatio_exports);
var import_Dimensions = __toESM(__webpack_require__(4103));
class PixelRatio {
  /**
   * Returns the device pixel density.
   */
  static get() {
    return import_Dimensions.default.get("window").scale;
  }
  /**
   * No equivalent for Web
   */
  static getFontScale() {
    return import_Dimensions.default.get("window").fontScale || PixelRatio.get();
  }
  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  static getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * PixelRatio.get());
  }
  /**
   * Rounds a layout size (dp) to the nearest layout size that corresponds to
   * an integer number of pixels. For example, on a device with a PixelRatio
   * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
   * exactly (8.33 * 3) = 25 pixels.
   */
  static roundToNearestPixel(layoutSize) {
    const ratio = PixelRatio.get();
    return Math.round(layoutSize * ratio) / ratio;
  }
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7229:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Pressable_exports = {};
__export(Pressable_exports, {
  default: () => Pressable_default
});
module.exports = __toCommonJS(Pressable_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react_native_use_pressable = __webpack_require__(7938);
var React = __toESM(__webpack_require__(6689));
var import_react = __webpack_require__(6689);
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
function Pressable(props, forwardedRef) {
  const {
    children,
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    focusable,
    onBlur,
    onContextMenu,
    onFocus,
    onHoverIn,
    onHoverOut,
    onKeyDown,
    onLongPress,
    onPress,
    onPressMove,
    onPressIn,
    onPressOut,
    style,
    testOnly_hovered,
    testOnly_pressed,
    ...rest
  } = props;
  const [hovered, setHovered] = useForceableState(testOnly_hovered === true);
  const [focused, setFocused] = useForceableState(false);
  const [pressed, setPressed] = useForceableState(testOnly_pressed === true);
  const hostRef = (0, import_react.useRef)(null);
  const setRef = (0, import_react_native_web_internals2.useMergeRefs)(forwardedRef, hostRef);
  const pressConfig = (0, import_react.useMemo)(
    () => ({
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      disabled,
      onLongPress,
      onPress,
      onPressChange: setPressed,
      onPressStart: onPressIn,
      onPressMove,
      onPressEnd: onPressOut
    }),
    [
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      onLongPress,
      onPress,
      onPressIn,
      onPressMove,
      onPressOut,
      setPressed
    ]
  );
  const pressEventHandlers = (0, import_react_native_use_pressable.usePressEvents)(hostRef, pressConfig);
  const { onContextMenu: onContextMenuPress, onKeyDown: onKeyDownPress } = pressEventHandlers;
  (0, import_react_native_web_internals2.useHover)(hostRef, {
    contain: true,
    disabled,
    onHoverChange: setHovered,
    onHoverStart: onHoverIn,
    onHoverEnd: onHoverOut
  });
  const interactionState = { hovered, focused, pressed };
  const blurHandler = React.useCallback(
    (e) => {
      if (disabled) {
        return;
      }
      if (e.nativeEvent.target === hostRef.current) {
        setFocused(false);
        if (onBlur != null) {
          onBlur(e);
        }
      }
    },
    [disabled, hostRef, setFocused, onBlur]
  );
  const focusHandler = React.useCallback(
    (e) => {
      if (disabled) {
        return;
      }
      if (e.nativeEvent.target === hostRef.current) {
        setFocused(true);
        if (onFocus != null) {
          onFocus(e);
        }
      }
    },
    [disabled, hostRef, setFocused, onFocus]
  );
  const contextMenuHandler = React.useCallback(
    (e) => {
      if (onContextMenuPress != null) {
        onContextMenuPress(e);
      }
      if (onContextMenu != null) {
        onContextMenu(e);
      }
    },
    [onContextMenu, onContextMenuPress]
  );
  const keyDownHandler = React.useCallback(
    (e) => {
      if (onKeyDownPress != null) {
        onKeyDownPress(e);
      }
      if (onKeyDown != null) {
        onKeyDown(e);
      }
    },
    [onKeyDown, onKeyDownPress]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_View.default,
    {
      ...rest,
      ...pressEventHandlers,
      accessibilityDisabled: disabled,
      focusable: !disabled && focusable !== false,
      onBlur: blurHandler,
      onContextMenu: contextMenuHandler,
      onFocus: focusHandler,
      onKeyDown: keyDownHandler,
      pointerEvents: disabled ? "none" : rest.pointerEvents,
      ref: setRef,
      style: [
        !disabled && styles.root,
        typeof style === "function" ? style(interactionState) : style
      ],
      children: typeof children === "function" ? children(interactionState) : children
    }
  );
}
function useForceableState(forced) {
  const [bool, setBool] = (0, import_react.useState)(false);
  return [bool || forced, setBool];
}
const styles = import_react_native_web_internals.StyleSheet.create({
  root: {
    cursor: "pointer",
    touchAction: "manipulation"
  }
});
const MemoedPressable = (0, import_react.memo)((0, import_react.forwardRef)(Pressable));
MemoedPressable.displayName = "Pressable";
var Pressable_default = MemoedPressable;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var RefreshControl_exports = {};
__export(RefreshControl_exports, {
  default: () => RefreshControl_default
});
module.exports = __toCommonJS(RefreshControl_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_View = __toESM(__webpack_require__(6691));
function RefreshControl(props) {
  const {
    /* eslint-disable */
    colors,
    enabled,
    onRefresh,
    progressBackgroundColor,
    progressViewOffset,
    refreshing,
    size,
    tintColor,
    title,
    titleColor,
    /* eslint-enable */
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_View.default, { ...rest });
}
var RefreshControl_default = RefreshControl;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var SafeAreaView_exports = {};
__export(SafeAreaView_exports, {
  default: () => SafeAreaView_default
});
module.exports = __toCommonJS(SafeAreaView_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
const cssFunction = (() => {
  if (import_react_native_web_internals.canUseDOM && window.CSS && window.CSS.supports && window.CSS.supports("top: constant(safe-area-inset-top)")) {
    return "constant";
  }
  return "env";
})();
const SafeAreaView = React.forwardRef((props, ref) => {
  const { style, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_View.default,
    {
      ...rest,
      ref,
      style: import_react_native_web_internals.StyleSheet.compose(styles.root, style)
    }
  );
});
SafeAreaView.displayName = "SafeAreaView";
const styles = import_react_native_web_internals.StyleSheet.create({
  root: {
    paddingTop: `${cssFunction}(safe-area-inset-top)`,
    paddingRight: `${cssFunction}(safe-area-inset-right)`,
    paddingBottom: `${cssFunction}(safe-area-inset-bottom)`,
    paddingLeft: `${cssFunction}(safe-area-inset-left)`
  }
});
var SafeAreaView_default = SafeAreaView;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4049:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ScrollViewBase_exports = {};
__export(ScrollViewBase_exports, {
  default: () => ScrollViewBase_default
});
module.exports = __toCommonJS(ScrollViewBase_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
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
const ScrollViewBase = React.forwardRef((props, forwardedRef) => {
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
  const scrollState = React.useRef({ isScrolling: false, scrollLastTick: 0 });
  const scrollTimeout = React.useRef(null);
  const scrollRef = React.useRef(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_View.default,
    {
      ...rest,
      onScroll: handleScroll,
      onTouchMove: createPreventableScrollHandler(onTouchMove),
      onWheel: createPreventableScrollHandler(onWheel),
      ref: (0, import_react_native_web_internals.useMergeRefs)(scrollRef, forwardedRef),
      style: [
        style,
        !scrollEnabled && styles.scrollDisabled,
        hideScrollbar && styles.hideScrollbar
      ]
    }
  );
});
const styles = import_react_native_web_internals.StyleSheet.create({
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


/***/ }),

/***/ 7606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var ScrollView_exports = {};
__export(ScrollView_exports, {
  default: () => ScrollView_default
});
module.exports = __toCommonJS(ScrollView_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_Dimensions = __toESM(__webpack_require__(4103));
var import_View = __toESM(__webpack_require__(6691));
var import_ScrollViewBase = __toESM(__webpack_require__(4049));
const emptyObject = {};
const IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
class ScrollView extends import_react.default.Component {
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
      import_react_native_web_internals.UIManager.measureLayout(
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
      let keyboardScreenY = import_Dimensions.default.get("window").height;
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
    const children = hasStickyHeaderIndices || pagingEnabled ? import_react.default.Children.map(this.props.children, (child, i) => {
      const isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;
      if (child != null && (isSticky || pagingEnabled)) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_View.default,
          {
            style: import_react_native_web_internals.StyleSheet.compose(
              isSticky && styles.stickyHeader,
              pagingEnabled && styles.pagingEnabledChild
            ),
            children: child
          }
        );
      } else {
        return child;
      }
    }) : this.props.children;
    const contentContainer = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_View.default,
      {
        ...contentSizeChangeProps,
        collapsable: false,
        ref: this._setInnerViewRef.bind(this),
        style: [
          horizontal && styles.contentContainerHorizontal,
          centerContent && styles.contentContainerCenterContent,
          contentContainerStyle
        ],
        children
      }
    );
    const baseStyle = horizontal ? styles.baseHorizontal : styles.baseVertical;
    const pagingEnabledStyle = horizontal ? styles.pagingEnabledHorizontal : styles.pagingEnabledVertical;
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
    const ScrollViewClass = import_ScrollViewBase.default;
    (0, import_react_native_web_internals.invariant)(ScrollViewClass !== void 0, "ScrollViewClass must not be undefined");
    const scrollView = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollViewClass, { ...props, ref: this._setScrollNodeRef.bind(this), children: contentContainer });
    if (refreshControl) {
      return import_react.default.cloneElement(refreshControl, { style: props.style }, scrollView);
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
      (0, import_react_native_web_internals.dismissKeyboard)();
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
    const ref = (0, import_react_native_web_internals.mergeRefs)(this.props.forwardedRef);
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
    (0, import_react_native_web_internals.warning)(false, "ScrollView doesn't take rejection well - scrolls anyway");
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
    const currentlyFocusedTextInput = import_react_native_web_internals.TextInputState.currentlyFocusedField();
    if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.observedScrollSinceBecomingResponder && !this.becameResponderWhileAnimating) {
      this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
      import_react_native_web_internals.TextInputState.blurTextInput(currentlyFocusedTextInput);
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
    if (import_react_native_web_internals.Platform.OS !== "ios") {
      (0, import_react_native_web_internals.invariant)("zoomToRect is not implemented");
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
const styles = import_react_native_web_internals.StyleSheet.create({
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
const ForwardedScrollView = import_react.default.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollView, { ...props, forwardedRef });
});
ForwardedScrollView.displayName = "ScrollView";
var ScrollView_default = ForwardedScrollView;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 209:
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
var Share_exports = {};
__export(Share_exports, {
  default: () => Share_default
});
module.exports = __toCommonJS(Share_exports);
var import_react_native_web_internals = __webpack_require__(2161);
class Share {
  static share(content, options = {}) {
    (0, import_react_native_web_internals.invariant)(
      typeof content === "object" && content !== null,
      "Content to share must be a valid object"
    );
    (0, import_react_native_web_internals.invariant)(
      typeof content.url === "string" || typeof content.message === "string",
      "At least one of URL and message is required"
    );
    (0, import_react_native_web_internals.invariant)(
      typeof options === "object" && options !== null,
      "Options must be a valid object"
    );
    (0, import_react_native_web_internals.invariant)(
      !content.title || typeof content.title === "string",
      "Invalid title: title should be a string."
    );
    if (window.navigator.share !== void 0) {
      return window.navigator.share({
        title: content.title,
        text: content.message,
        url: content.url
      });
    } else {
      return Promise.reject(new Error("Share is not supported in this browser"));
    }
  }
  /**
   * The content was successfully shared.
   */
  static get sharedAction() {
    return "sharedAction";
  }
  /**
   * The dialog has been dismissed.
   * @platform ios
   */
  static get dismissedAction() {
    return "dismissedAction";
  }
}
var Share_default = Share;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4724:
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
var StatusBar_exports = {};
__export(StatusBar_exports, {
  default: () => StatusBar_default
});
module.exports = __toCommonJS(StatusBar_exports);
const emptyFunction = () => {
};
function StatusBar() {
  return null;
}
StatusBar.setBackgroundColor = emptyFunction;
StatusBar.setBarStyle = emptyFunction;
StatusBar.setHidden = emptyFunction;
StatusBar.setNetworkActivityIndicatorVisible = emptyFunction;
StatusBar.setTranslucent = emptyFunction;
var StatusBar_default = StatusBar;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5501:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Text_exports = {};
__export(Text_exports, {
  default: () => Text_default
});
module.exports = __toCommonJS(Text_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_createElement = __toESM(__webpack_require__(3637));
const pickProps = (props) => (0, import_react_native_web_internals2.pick)(props, import_react_native_web_internals2.forwardPropsListText);
const Text = React.forwardRef(
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
    const hasTextAncestor = React.useContext(import_react_native_web_internals.TextAncestorContext);
    const hostRef = React.useRef(null);
    const { direction: contextDirection } = (0, import_react_native_web_internals2.useLocaleContext)();
    (0, import_react_native_web_internals2.useElementLayout)(hostRef, onLayout);
    (0, import_react_native_web_internals2.useResponderEvents)(hostRef, {
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
    const handleClick = React.useCallback(
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
    const langDirection = props.lang != null ? (0, import_react_native_web_internals.getLocaleDirection)(props.lang) : null;
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
    const platformMethodsRef = (0, import_react_native_web_internals2.usePlatformMethods)(supportedProps);
    const setRef = (0, import_react_native_web_internals2.useMergeRefs)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    const element = (0, import_createElement.default)(component, supportedProps, {
      writingDirection
    });
    return hasTextAncestor ? element : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native_web_internals.TextAncestorContext.Provider, { value: true, children: element });
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
const styles = import_react_native_web_internals.StyleSheet.create({
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


/***/ }),

/***/ 9690:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var TextInput_exports = {};
__export(TextInput_exports, {
  default: () => TextInput_default
});
module.exports = __toCommonJS(TextInput_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_createElement = __toESM(__webpack_require__(3637));
const isSelectionStale = (node, selection) => {
  const { selectionEnd, selectionStart } = node;
  const { start, end } = selection;
  return start !== selectionStart || end !== selectionEnd;
};
const setSelection = (node, selection) => {
  if (isSelectionStale(node, selection)) {
    const { start, end } = selection;
    try {
      node.setSelectionRange(start, end || start);
    } catch (e) {
    }
  }
};
const forwardPropsList = Object.assign(
  {},
  import_react_native_web_internals2.forwardedProps.defaultProps,
  import_react_native_web_internals2.forwardedProps.accessibilityProps,
  import_react_native_web_internals2.forwardedProps.clickProps,
  import_react_native_web_internals2.forwardedProps.focusProps,
  import_react_native_web_internals2.forwardedProps.keyboardProps,
  import_react_native_web_internals2.forwardedProps.mouseProps,
  import_react_native_web_internals2.forwardedProps.touchProps,
  import_react_native_web_internals2.forwardedProps.styleProps,
  {
    autoCapitalize: true,
    autoComplete: true,
    autoCorrect: true,
    autoFocus: true,
    defaultValue: true,
    disabled: true,
    lang: true,
    maxLength: true,
    onChange: true,
    onScroll: true,
    placeholder: true,
    pointerEvents: true,
    readOnly: true,
    rows: true,
    spellCheck: true,
    value: true,
    type: true
  }
);
const pickProps = (props) => (0, import_react_native_web_internals2.pick)(props, forwardPropsList);
const useIsomorphicLayoutEffect = typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;
function isEventComposing(nativeEvent) {
  return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}
let focusTimeout = null;
const TextInput = React.forwardRef(
  (props, forwardedRef) => {
    const {
      autoCapitalize = "sentences",
      autoComplete,
      autoCompleteType,
      autoCorrect = true,
      blurOnSubmit,
      clearTextOnFocus,
      dir,
      editable,
      enterKeyHint,
      inputMode = "text",
      keyboardType,
      multiline = false,
      numberOfLines,
      onBlur,
      onChange,
      onChangeText,
      onContentSizeChange,
      onFocus,
      onKeyPress,
      onLayout,
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
      onSelectionChange,
      onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture,
      onSubmitEditing,
      placeholderTextColor,
      readOnly = false,
      returnKeyType,
      rows = 1,
      secureTextEntry = false,
      selection,
      selectTextOnFocus,
      spellCheck
    } = props;
    let type;
    let _inputMode;
    if (inputMode != null) {
      _inputMode = inputMode;
      if (inputMode === "email") {
        type = "email";
      } else if (inputMode === "tel") {
        type = "tel";
      } else if (inputMode === "search") {
        type = "search";
      } else if (inputMode === "url") {
        type = "url";
      } else {
        type = "text";
      }
    } else if (keyboardType != null) {
      warn("keyboardType", "keyboardType is deprecated. Use inputMode.");
      switch (keyboardType) {
        case "email-address":
          type = "email";
          break;
        case "number-pad":
        case "numeric":
          _inputMode = "numeric";
          break;
        case "decimal-pad":
          _inputMode = "decimal";
          break;
        case "phone-pad":
          type = "tel";
          break;
        case "search":
        case "web-search":
          type = "search";
          break;
        case "url":
          type = "url";
          break;
        default:
          type = "text";
      }
    }
    if (secureTextEntry) {
      type = "password";
    }
    const dimensions = React.useRef({ height: null, width: null });
    const hostRef = React.useRef(null);
    const handleContentSizeChange = React.useCallback(
      (hostNode) => {
        if (multiline && onContentSizeChange && hostNode != null) {
          const newHeight = hostNode.scrollHeight;
          const newWidth = hostNode.scrollWidth;
          if (newHeight !== dimensions.current.height || newWidth !== dimensions.current.width) {
            dimensions.current.height = newHeight;
            dimensions.current.width = newWidth;
            onContentSizeChange({
              nativeEvent: {
                contentSize: {
                  height: dimensions.current.height,
                  width: dimensions.current.width
                }
              }
            });
          }
        }
      },
      [multiline, onContentSizeChange]
    );
    const imperativeRef = React.useMemo(
      () => (hostNode) => {
        if (hostNode != null) {
          hostNode.clear = function() {
            if (hostNode != null) {
              hostNode.value = "";
            }
          };
          hostNode.isFocused = function() {
            return hostNode != null && import_react_native_web_internals2.TextInputState.currentlyFocusedField() === hostNode;
          };
          handleContentSizeChange(hostNode);
        }
      },
      [handleContentSizeChange]
    );
    function handleBlur(e) {
      import_react_native_web_internals2.TextInputState._currentlyFocusedNode = null;
      if (onBlur) {
        e.nativeEvent.text = e.target.value;
        onBlur(e);
      }
    }
    function handleChange(e) {
      const hostNode = e.target;
      const text = hostNode.value;
      e.nativeEvent.text = text;
      handleContentSizeChange(hostNode);
      if (onChange) {
        onChange(e);
      }
      if (onChangeText) {
        onChangeText(text);
      }
    }
    function handleFocus(e) {
      const hostNode = e.target;
      if (onFocus) {
        e.nativeEvent.text = hostNode.value;
        onFocus(e);
      }
      if (hostNode != null) {
        import_react_native_web_internals2.TextInputState._currentlyFocusedNode = hostNode;
        if (clearTextOnFocus) {
          hostNode.value = "";
        }
        if (selectTextOnFocus) {
          if (focusTimeout != null) {
            clearTimeout(focusTimeout);
          }
          focusTimeout = setTimeout(() => {
            if (hostNode != null) {
              hostNode.select();
            }
          }, 0);
        }
      }
    }
    function handleKeyDown(e) {
      const hostNode = e.target;
      e.stopPropagation();
      const blurOnSubmitDefault = !multiline;
      const shouldBlurOnSubmit = blurOnSubmit == null ? blurOnSubmitDefault : blurOnSubmit;
      const nativeEvent = e.nativeEvent;
      const isComposing = isEventComposing(nativeEvent);
      if (onKeyPress) {
        onKeyPress(e);
      }
      if (e.key === "Enter" && !e.shiftKey && // Do not call submit if composition is occuring.
      !isComposing && !e.isDefaultPrevented()) {
        if ((blurOnSubmit || !multiline) && onSubmitEditing) {
          e.preventDefault();
          nativeEvent.text = e.target.value;
          onSubmitEditing(e);
        }
        if (shouldBlurOnSubmit && hostNode != null) {
          setTimeout(() => hostNode.blur(), 0);
        }
      }
    }
    function handleSelectionChange(e) {
      if (onSelectionChange) {
        try {
          const node = e.target;
          const { selectionStart, selectionEnd } = node;
          e.nativeEvent.selection = {
            start: selectionStart,
            end: selectionEnd
          };
          e.nativeEvent.text = e.target.value;
          onSelectionChange(e);
        } catch (e2) {
        }
      }
    }
    useIsomorphicLayoutEffect(() => {
      const node = hostRef.current;
      if (node != null && selection != null) {
        setSelection(node, selection);
      }
      if (document.activeElement === node) {
        import_react_native_web_internals2.TextInputState._currentlyFocusedNode = node;
      }
    }, [hostRef, selection]);
    const component = multiline ? "textarea" : "input";
    (0, import_react_native_web_internals2.useElementLayout)(hostRef, onLayout);
    (0, import_react_native_web_internals2.useResponderEvents)(hostRef, {
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
    const { direction: contextDirection } = (0, import_react_native_web_internals2.useLocaleContext)();
    const supportedProps = pickProps(props);
    supportedProps.autoCapitalize = autoCapitalize;
    supportedProps.autoComplete = autoComplete || autoCompleteType || "on";
    supportedProps.autoCorrect = autoCorrect ? "on" : "off";
    supportedProps.dir = dir !== void 0 ? dir : "auto";
    if (returnKeyType != null) {
      warn("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint.");
    }
    supportedProps.enterKeyHint = enterKeyHint || returnKeyType;
    supportedProps.inputMode = _inputMode;
    supportedProps.onBlur = handleBlur;
    supportedProps.onChange = handleChange;
    supportedProps.onFocus = handleFocus;
    supportedProps.onKeyDown = handleKeyDown;
    supportedProps.onSelect = handleSelectionChange;
    if (editable != null) {
      warn("editable", "editable is deprecated. Use readOnly.");
    }
    supportedProps.readOnly = readOnly === true || editable === false;
    if (numberOfLines != null) {
      warn("numberOfLines", "TextInput numberOfLines is deprecated. Use rows.");
    }
    supportedProps.rows = multiline ? rows != null ? rows : numberOfLines : 1;
    supportedProps.spellCheck = spellCheck != null ? spellCheck : autoCorrect;
    supportedProps.style = [
      { "--placeholderTextColor": placeholderTextColor },
      styles.textinput$raw,
      styles.placeholder,
      props.style
    ];
    supportedProps.type = multiline ? void 0 : type;
    const platformMethodsRef = (0, import_react_native_web_internals2.usePlatformMethods)(supportedProps);
    const setRef = (0, import_react_native_web_internals2.useMergeRefs)(hostRef, platformMethodsRef, imperativeRef, forwardedRef);
    supportedProps.ref = setRef;
    const langDirection = props.lang != null ? (0, import_react_native_web_internals2.getLocaleDirection)(props.lang) : null;
    const componentDirection = props.dir || langDirection;
    const writingDirection = componentDirection || contextDirection;
    const element = (0, import_createElement.default)(component, supportedProps, {
      writingDirection
    });
    return element;
  }
);
function warn(...args) {
  if (false) {}
}
TextInput.displayName = "TextInput";
TextInput.State = import_react_native_web_internals2.TextInputState;
const styles = import_react_native_web_internals.StyleSheet.create({
  textinput$raw: {
    MozAppearance: "textfield",
    WebkitAppearance: "none",
    backgroundColor: "transparent",
    border: "0 solid black",
    borderRadius: 0,
    boxSizing: "border-box",
    font: "14px System",
    margin: 0,
    padding: 0,
    resize: "none"
  },
  placeholder: {
    placeholderTextColor: "var(--placeholderTextColor)"
  }
});
var TextInput_default = TextInput;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var TouchableOpacity_exports = {};
__export(TouchableOpacity_exports, {
  default: () => TouchableOpacity_default
});
module.exports = __toCommonJS(TouchableOpacity_exports);
var import_jsx_runtime = __webpack_require__(2322);
var React = __toESM(__webpack_require__(6689));
var import_react = __webpack_require__(6689);
var import_react_native_web_internals = __webpack_require__(2161);
var import_View = __toESM(__webpack_require__(6691));
function TouchableOpacity(props, forwardedRef) {
  const {
    activeOpacity,
    delayPressIn,
    delayPressOut,
    delayLongPress,
    disabled,
    focusable,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    rejectResponderTermination,
    style,
    ...rest
  } = props;
  const hostRef = (0, import_react.useRef)(null);
  const setRef = (0, import_react_native_web_internals.useMergeRefs)(forwardedRef, hostRef);
  const [duration, setDuration] = (0, import_react.useState)("0s");
  const [opacityOverride, setOpacityOverride] = (0, import_react.useState)(null);
  const setOpacityTo = (0, import_react.useCallback)(
    (value, duration2) => {
      setOpacityOverride(value);
      setDuration(duration2 ? `${duration2 / 1e3}s` : "0s");
    },
    [setOpacityOverride, setDuration]
  );
  const setOpacityActive = (0, import_react.useCallback)(
    (duration2) => {
      setOpacityTo(activeOpacity ?? 0.2, duration2);
    },
    [activeOpacity, setOpacityTo]
  );
  const setOpacityInactive = (0, import_react.useCallback)(
    (duration2) => {
      setOpacityTo(null, duration2);
    },
    [setOpacityTo]
  );
  const pressConfig = (0, import_react.useMemo)(
    () => ({
      cancelable: !rejectResponderTermination,
      disabled,
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress,
      onPress,
      onPressStart(event) {
        const isGrant = event.dispatchConfig != null ? event.dispatchConfig.registrationName === "onResponderGrant" : event.type === "keydown";
        setOpacityActive(isGrant ? 0 : 150);
        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressEnd(event) {
        setOpacityInactive(250);
        if (onPressOut != null) {
          onPressOut(event);
        }
      }
    }),
    [
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      rejectResponderTermination,
      setOpacityActive,
      setOpacityInactive
    ]
  );
  const pressEventHandlers = (0, import_react_native_web_internals.usePressEvents)(hostRef, pressConfig);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_View.default,
    {
      ...rest,
      ...pressEventHandlers,
      accessibilityDisabled: disabled,
      focusable: !disabled && focusable !== false,
      ref: setRef,
      style: [
        styles.root,
        !disabled && styles.actionable,
        style,
        opacityOverride != null && { opacity: opacityOverride },
        { transitionDuration: duration }
      ]
    }
  );
}
const styles = import_react_native_web_internals.StyleSheet.create({
  root: {
    transitionProperty: "opacity",
    transitionDuration: "0.15s",
    userSelect: "none"
  },
  actionable: {
    cursor: "pointer",
    touchAction: "manipulation"
  }
});
const MemoedTouchableOpacity = React.memo(React.forwardRef(TouchableOpacity));
MemoedTouchableOpacity.displayName = "TouchableOpacity";
var TouchableOpacity_default = MemoedTouchableOpacity;
//# sourceMappingURL=TouchableOpacity.js.map


/***/ }),

/***/ 6558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var TouchableWithoutFeedback_exports = {};
__export(TouchableWithoutFeedback_exports, {
  default: () => TouchableWithoutFeedback_default
});
module.exports = __toCommonJS(TouchableWithoutFeedback_exports);
var React = __toESM(__webpack_require__(6689));
var import_react = __webpack_require__(6689);
var import_react_native_web_internals = __webpack_require__(2161);
const forwardPropsList = {
  accessibilityDisabled: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  children: true,
  disabled: true,
  focusable: true,
  nativeID: true,
  onBlur: true,
  onFocus: true,
  onLayout: true,
  testID: true
};
const pickProps = (props) => (0, import_react_native_web_internals.pick)(props, forwardPropsList);
function TouchableWithoutFeedback(props, forwardedRef) {
  const {
    delayPressIn,
    delayPressOut,
    delayLongPress,
    disabled,
    focusable,
    onLongPress,
    onPress,
    onPressIn,
    onPressOut,
    rejectResponderTermination
  } = props;
  const hostRef = (0, import_react.useRef)(null);
  const pressConfig = (0, import_react.useMemo)(
    () => ({
      cancelable: !rejectResponderTermination,
      disabled,
      delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress,
      onPress,
      onPressStart: onPressIn,
      onPressEnd: onPressOut
    }),
    [
      disabled,
      delayPressIn,
      delayPressOut,
      delayLongPress,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      rejectResponderTermination
    ]
  );
  const pressEventHandlers = (0, import_react_native_web_internals.usePressEvents)(hostRef, pressConfig);
  const element = React.Children.only(props.children);
  const children = [element.props.children];
  const supportedProps = pickProps(props);
  supportedProps.accessibilityDisabled = disabled;
  supportedProps.focusable = !disabled && focusable !== false;
  supportedProps.ref = (0, import_react_native_web_internals.useMergeRefs)(forwardedRef, hostRef, element.ref);
  const elementProps = Object.assign(supportedProps, pressEventHandlers);
  return React.cloneElement(element, elementProps, ...children);
}
const MemoedTouchableWithoutFeedback = React.memo(
  React.forwardRef(TouchableWithoutFeedback)
);
MemoedTouchableWithoutFeedback.displayName = "TouchableWithoutFeedback";
var TouchableWithoutFeedback_default = MemoedTouchableWithoutFeedback;
//# sourceMappingURL=TouchableWithoutFeedback.js.map


/***/ }),

/***/ 7735:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var UnimplementedView_exports = {};
__export(UnimplementedView_exports, {
  default: () => UnimplementedView
});
module.exports = __toCommonJS(UnimplementedView_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react = __toESM(__webpack_require__(6689));
var import_View = __toESM(__webpack_require__(6691));
class UnimplementedView extends import_react.default.Component {
  constructor() {
    super(...arguments);
    this.setNativeProps = () => {
    };
  }
  render() {
    if (false) {}
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_View.default, { ...this.props });
  }
}
//# sourceMappingURL=UnimplementedView.js.map


/***/ }),

/***/ 2364:
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
var Vibration_exports = {};
__export(Vibration_exports, {
  default: () => Vibration_default
});
module.exports = __toCommonJS(Vibration_exports);
const vibrate = (pattern) => {
  if ("vibrate" in window.navigator) {
    window.navigator.vibrate(pattern);
  }
};
const Vibration = {
  cancel() {
    vibrate(0);
  },
  vibrate(pattern = 400) {
    vibrate(pattern);
  }
};
var Vibration_default = Vibration;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 6691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var View_exports = {};
__export(View_exports, {
  default: () => View_default
});
module.exports = __toCommonJS(View_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_createElement = __toESM(__webpack_require__(3637));
const pickProps = (props) => (0, import_react_native_web_internals2.pick)(props, import_react_native_web_internals2.forwardPropsListView);
const View = React.forwardRef(
  (props, forwardedRef) => {
    const {
      hrefAttrs,
      onLayout,
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
      ...rest
    } = props;
    if (false) {}
    const hasTextAncestor = React.useContext(import_react_native_web_internals.TextAncestorContext);
    const hostRef = React.useRef(null);
    const { direction: contextDirection } = (0, import_react_native_web_internals2.useLocaleContext)();
    (0, import_react_native_web_internals2.useElementLayout)(hostRef, onLayout);
    (0, import_react_native_web_internals2.useResponderEvents)(hostRef, {
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
    let component = "div";
    const langDirection = props.lang != null ? (0, import_react_native_web_internals2.getLocaleDirection)(props.lang) : null;
    const componentDirection = props.dir || langDirection;
    const writingDirection = componentDirection || contextDirection;
    const supportedProps = pickProps(rest);
    supportedProps.dir = componentDirection;
    supportedProps.style = [
      styles.view$raw,
      hasTextAncestor && styles.inline,
      props.style
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
    const platformMethodsRef = (0, import_react_native_web_internals2.usePlatformMethods)(supportedProps);
    const setRef = (0, import_react_native_web_internals2.useMergeRefs)(hostRef, platformMethodsRef, forwardedRef);
    supportedProps.ref = setRef;
    return (0, import_createElement.default)(component, supportedProps, { writingDirection });
  }
);
View.displayName = "View";
const styles = import_react_native_web_internals.StyleSheet.create({
  view$raw: {
    alignItems: "stretch",
    boxSizing: "border-box",
    display: "flex",
    flexBasis: "auto",
    flexDirection: "column",
    flexShrink: 0
  },
  inline: {
    display: "inline-flex"
  }
});
var View_default = View;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var createElement_exports = {};
__export(createElement_exports, {
  default: () => createElement_default
});
module.exports = __toCommonJS(createElement_exports);
var import_jsx_runtime = __webpack_require__(2322);
var import_react = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
const createElement = (component, props, options) => {
  let accessibilityComponent;
  if (component && component.constructor === String) {
    accessibilityComponent = import_react_native_web_internals.AccessibilityUtil.propsToAccessibilityComponent(props);
  }
  const Component = accessibilityComponent || component;
  const domProps = (0, import_react_native_web_internals.createDOMProps)(Component, props, options);
  const element = import_react.default.createElement(Component, domProps);
  const elementWithLocaleProvider = domProps.dir ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native_web_internals.LocaleProvider, { direction: domProps.dir, locale: domProps.lang, children: element }) : element;
  return elementWithLocaleProvider;
};
var createElement_default = createElement;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 181:
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
var findNodeHandle_exports = {};
__export(findNodeHandle_exports, {
  findNodeHandle: () => findNodeHandle
});
module.exports = __toCommonJS(findNodeHandle_exports);
var import_react_dom = __webpack_require__(6405);
const findNodeHandle = (host) => {
  let node;
  try {
    node = (0, import_react_dom.findDOMNode)(host);
  } catch {
  }
  return node;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=findNodeHandle.js.map


/***/ }),

/***/ 7456:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var src_exports = {};
__export(src_exports, {
  AccessibilityInfo: () => import_AccessibilityInfo.default,
  ActivityIndicator: () => import_ActivityIndicator.default,
  Alert: () => import_Alert.default,
  Animated: () => import_Animated.default,
  AppRegistry: () => import_AppRegistry.default,
  AppState: () => import_AppState.default,
  Appearance: () => import_Appearance.default,
  BackHandler: () => import_BackHandler.default,
  Clipboard: () => import_Clipboard.default,
  DeviceEmitter: () => import_DeviceEmitter.default,
  DeviceEventEmitter: () => import_DeviceEmitter2.default,
  DeviceInfo: () => import_DeviceInfo.default,
  Dimensions: () => import_Dimensions.default,
  DrawerLayoutAndroid: () => import_UnimplementedView.default,
  Easing: () => import_Easing.default,
  FlatList: () => import_UnimplementedView4.default,
  I18nManager: () => import_I18nManager.default,
  Image: () => import_Image.default,
  ImageBackground: () => import_ImageBackground.default,
  ImageLoader: () => import_react_native_web_internals.ImageLoader,
  Keyboard: () => import_Keyboard.default,
  KeyboardAvoidingView: () => import_KeyboardAvoidingView.default,
  Linking: () => import_Linking.default,
  LogBox: () => import_LogBox.default,
  Modal: () => import_Modal.default,
  NativeEventEmitter: () => import_NativeEventEmitter.default,
  NativeModules: () => import_NativeModules.default,
  PanResponder: () => import_PanResponder.default,
  PixelRatio: () => import_PixelRatio.default,
  Platform: () => import_react_native_web_internals.Platform,
  Pressable: () => import_Pressable.default,
  RefreshControl: () => import_RefreshControl.default,
  SafeAreaView: () => import_SafeAreaView.default,
  ScrollView: () => import_ScrollView.default,
  SectionList: () => import_UnimplementedView7.default,
  Share: () => import_Share.default,
  StatusBar: () => import_StatusBar.default,
  Switch: () => import_UnimplementedView2.default,
  Text: () => import_Text.default,
  TextInput: () => import_TextInput.default,
  TouchableHighlight: () => import_UnimplementedView5.default,
  TouchableNativeFeedback: () => import_UnimplementedView6.default,
  TouchableOpacity: () => import_TouchableOpacity.default,
  TouchableWithoutFeedback: () => import_TouchableWithoutFeedback.default,
  UIManager: () => import_react_native_web_internals.UIManager,
  Vibration: () => import_Vibration.default,
  View: () => import_View.default,
  VirtualizedList: () => import_UnimplementedView3.default,
  canUseDOM: () => import_react_native_web_internals.canUseDOM,
  dismissKeyboard: () => import_react_native_web_internals.dismissKeyboard,
  findNodeHandle: () => import_findNodeHandle.findNodeHandle,
  isWebColor: () => import_react_native_web_internals.isWebColor,
  mergeRefs: () => import_react_native_web_internals.mergeRefs,
  processColor: () => import_react_native_web_internals.processColor,
  render: () => import_render.default,
  requireNativeComponent: () => requireNativeComponent,
  unmountComponentAtNode: () => import_react_dom.unmountComponentAtNode,
  unstable_createElement: () => import_createElement.default,
  useColorScheme: () => import_useColorScheme.default,
  useEvent: () => import_react_native_web_internals.useEvent,
  useHover: () => import_react_native_web_internals.useHover,
  useLocaleContext: () => import_useLocaleContext.useLocaleContext,
  useMergeRefs: () => import_react_native_web_internals.useMergeRefs,
  useWindowDimensions: () => import_useWindowDimensions.default
});
module.exports = __toCommonJS(src_exports);
var import_createElement = __toESM(__webpack_require__(3637));
var import_react_native_web_internals = __webpack_require__(2161);
var import_render = __toESM(__webpack_require__(4910));
var import_react_dom = __webpack_require__(6405);
var import_NativeModules = __toESM(__webpack_require__(5292));
var import_findNodeHandle = __webpack_require__(181);
var import_Easing = __toESM(__webpack_require__(5383));
var import_Animated = __toESM(__webpack_require__(8254));
var import_NativeEventEmitter = __toESM(__webpack_require__(5986));
var import_AccessibilityInfo = __toESM(__webpack_require__(717));
var import_Alert = __toESM(__webpack_require__(6193));
var import_Appearance = __toESM(__webpack_require__(3991));
var import_AppRegistry = __toESM(__webpack_require__(1774));
var import_AppState = __toESM(__webpack_require__(9146));
var import_BackHandler = __toESM(__webpack_require__(6566));
var import_Clipboard = __toESM(__webpack_require__(615));
var import_DeviceInfo = __toESM(__webpack_require__(4128));
var import_DeviceEmitter = __toESM(__webpack_require__(3360));
var import_DeviceEmitter2 = __toESM(__webpack_require__(3360));
var import_Dimensions = __toESM(__webpack_require__(4103));
var import_I18nManager = __toESM(__webpack_require__(2237));
var import_Keyboard = __toESM(__webpack_require__(3350));
var import_Linking = __toESM(__webpack_require__(1248));
var import_PanResponder = __toESM(__webpack_require__(7228));
var import_PixelRatio = __toESM(__webpack_require__(5571));
var import_Share = __toESM(__webpack_require__(209));
var import_Vibration = __toESM(__webpack_require__(2364));
var import_UnimplementedView = __toESM(__webpack_require__(7735));
var import_UnimplementedView2 = __toESM(__webpack_require__(7735));
var import_UnimplementedView3 = __toESM(__webpack_require__(7735));
var import_UnimplementedView4 = __toESM(__webpack_require__(7735));
var import_UnimplementedView5 = __toESM(__webpack_require__(7735));
var import_UnimplementedView6 = __toESM(__webpack_require__(7735));
var import_UnimplementedView7 = __toESM(__webpack_require__(7735));
var import_TouchableOpacity = __toESM(__webpack_require__(8582));
var import_TouchableWithoutFeedback = __toESM(__webpack_require__(6558));
var import_ActivityIndicator = __toESM(__webpack_require__(6122));
var import_Image = __toESM(__webpack_require__(6496));
var import_ImageBackground = __toESM(__webpack_require__(2278));
var import_KeyboardAvoidingView = __toESM(__webpack_require__(712));
var import_Modal = __toESM(__webpack_require__(2667));
var import_Pressable = __toESM(__webpack_require__(7229));
var import_RefreshControl = __toESM(__webpack_require__(3096));
var import_SafeAreaView = __toESM(__webpack_require__(1350));
var import_ScrollView = __toESM(__webpack_require__(7606));
var import_StatusBar = __toESM(__webpack_require__(4724));
var import_Text = __toESM(__webpack_require__(5501));
var import_TextInput = __toESM(__webpack_require__(9690));
var import_View = __toESM(__webpack_require__(6691));
var import_LogBox = __toESM(__webpack_require__(6478));
var import_useColorScheme = __toESM(__webpack_require__(5085));
var import_useLocaleContext = __webpack_require__(3278);
var import_useWindowDimensions = __toESM(__webpack_require__(1597));
__reExport(src_exports, __webpack_require__(2161), module.exports);
function requireNativeComponent(name) {
  return function FakeComponent() {
    return null;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4910:
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
var render_exports = {};
__export(render_exports, {
  default: () => renderLegacy,
  hydrate: () => hydrate,
  hydrateLegacy: () => hydrateLegacy,
  render: () => render
});
module.exports = __toCommonJS(render_exports);
var import_react_dom = __webpack_require__(6405);
var import_client = __webpack_require__(7849);
var import_react_native_web_internals = __webpack_require__(2161);
function hydrate(element, root) {
  (0, import_react_native_web_internals.createSheet)(root);
  return (0, import_client.hydrateRoot)(root, element);
}
function render(element, root) {
  (0, import_react_native_web_internals.createSheet)(root);
  const reactRoot = (0, import_client.createRoot)(root);
  reactRoot.render(element);
  return reactRoot;
}
function hydrateLegacy(element, root, callback) {
  (0, import_react_native_web_internals.createSheet)(root);
  (0, import_react_dom.hydrate)(element, root, callback);
  return {
    unmount: function() {
      return (0, import_react_dom.unmountComponentAtNode)(root);
    }
  };
}
function renderLegacy(element, root, callback) {
  (0, import_react_native_web_internals.createSheet)(root);
  (0, import_react_dom.render)(element, root, callback);
  return {
    unmount: function() {
      return (0, import_react_dom.unmountComponentAtNode)(root);
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useColorScheme_exports = {};
__export(useColorScheme_exports, {
  default: () => useColorScheme
});
module.exports = __toCommonJS(useColorScheme_exports);
var React = __toESM(__webpack_require__(6689));
var import_Appearance2 = __toESM(__webpack_require__(3991));
function useColorScheme() {
  const [colorScheme, setColorScheme] = React.useState(import_Appearance2.default.getColorScheme());
  React.useEffect(() => {
    function listener(appearance) {
      setColorScheme(appearance.colorScheme);
    }
    const { remove } = import_Appearance2.default.addChangeListener(listener);
    return remove;
  });
  return colorScheme;
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3278:
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
var useLocaleContext_exports = {};
__export(useLocaleContext_exports, {
  useLocaleContext: () => import_react_native_web_internals.useLocaleContext
});
module.exports = __toCommonJS(useLocaleContext_exports);
var import_react_native_web_internals = __webpack_require__(2161);
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useWindowDimensions_exports = {};
__export(useWindowDimensions_exports, {
  default: () => useWindowDimensions
});
module.exports = __toCommonJS(useWindowDimensions_exports);
var import_react = __webpack_require__(6689);
var import_Dimensions2 = __toESM(__webpack_require__(4103));
function useWindowDimensions() {
  const [dims, setDims] = (0, import_react.useState)(() => import_Dimensions2.default.get("window"));
  (0, import_react.useEffect)(() => {
    function handleChange({ window }) {
      if (window != null) {
        setDims(window);
      }
    }
    import_Dimensions2.default.addEventListener("change", handleChange);
    setDims(import_Dimensions2.default.get("window"));
    return () => {
      import_Dimensions2.default.removeEventListener("change", handleChange);
    };
  }, []);
  return dims;
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8254:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Animated_exports = {};
__export(Animated_exports, {
  default: () => Animated_default
});
module.exports = __toCommonJS(Animated_exports);
var import_objectSpread2 = __toESM(__webpack_require__(814));
var import_react_native_web_internals = __webpack_require__(2161);
var AnimatedImplementation = __toESM(__webpack_require__(3888));
var AnimatedMock = __toESM(__webpack_require__(5177));
var import_AnimatedImage = __toESM(__webpack_require__(5408));
var import_AnimatedScrollView = __toESM(__webpack_require__(9895));
var import_AnimatedText = __toESM(__webpack_require__(52));
var import_AnimatedView = __toESM(__webpack_require__(7715));
var Animated = import_react_native_web_internals.Platform.isTesting ? AnimatedMock : AnimatedImplementation;
var Animated_default = {
  Image: import_AnimatedImage.default,
  ScrollView: import_AnimatedScrollView.default,
  Text: import_AnimatedText.default,
  View: import_AnimatedView.default,
  ...Animated.default
};
//# sourceMappingURL=Animated.js.map


/***/ }),

/***/ 216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedEvent_exports = {};
__export(AnimatedEvent_exports, {
  AnimatedEvent: () => AnimatedEvent,
  attachNativeEvent: () => attachNativeEvent
});
module.exports = __toCommonJS(AnimatedEvent_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_NativeAnimatedHelper2 = __webpack_require__(2011);
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var __DEV__ = "production" !== "production";
function attachNativeEvent(viewRef, eventName, argMapping) {
  var eventMappings = [];
  var traverse = (value, path) => {
    if (value instanceof import_AnimatedValue.default) {
      value.__makeNative();
      eventMappings.push({
        nativeEventPath: path,
        animatedValueTag: value.__getNativeTag()
      });
    } else if (typeof value === "object") {
      for (var _key in value) {
        traverse(value[_key], path.concat(_key));
      }
    }
  };
  (0, import_react_native_web_internals.invariant)(
    argMapping[0] && argMapping[0].nativeEvent,
    "Native driven events only support animated values contained inside `nativeEvent`."
  );
  traverse(argMapping[0].nativeEvent, []);
  if (viewRef != null) {
    eventMappings.forEach((mapping) => {
      import_NativeAnimatedHelper.default.API.addAnimatedEventToView(viewRef, eventName, mapping);
    });
  }
  return {
    detach() {
      if (viewRef != null) {
        eventMappings.forEach((mapping) => {
          import_NativeAnimatedHelper.default.API.removeAnimatedEventFromView(
            viewRef,
            eventName,
            // $FlowFixMe[incompatible-call]
            mapping.animatedValueTag
          );
        });
      }
    }
  };
}
function validateMapping(argMapping, args) {
  var validate = (recMapping, recEvt, key) => {
    if (recMapping instanceof import_AnimatedValue.default) {
      (0, import_react_native_web_internals.invariant)(
        typeof recEvt === "number",
        "Bad mapping of event key " + key + ", should be number but got " + typeof recEvt
      );
      return;
    }
    if (typeof recEvt === "number") {
      (0, import_react_native_web_internals.invariant)(
        recMapping instanceof import_AnimatedValue.default,
        "Bad mapping of type " + typeof recMapping + " for key " + key + ", event value must map to AnimatedValue"
      );
      return;
    }
    (0, import_react_native_web_internals.invariant)(
      typeof recMapping === "object",
      "Bad mapping of type " + typeof recMapping + " for key " + key
    );
    (0, import_react_native_web_internals.invariant)(
      typeof recEvt === "object",
      "Bad event of type " + typeof recEvt + " for key " + key
    );
    for (var mappingKey in recMapping) {
      validate(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
    }
  };
  (0, import_react_native_web_internals.invariant)(args.length >= argMapping.length, "Event has less arguments than mapping");
  argMapping.forEach((mapping, idx) => {
    validate(mapping, args[idx], "arg" + idx);
  });
}
class AnimatedEvent {
  constructor(argMapping, config) {
    this._listeners = [];
    this._argMapping = argMapping;
    if (config == null) {
      console.warn("Animated.event now requires a second argument for options");
      config = {
        useNativeDriver: false
      };
    }
    if (config.listener) {
      this.__addListener(config.listener);
    }
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = (0, import_NativeAnimatedHelper2.shouldUseNativeDriver)(config);
  }
  __addListener(callback) {
    this._listeners.push(callback);
  }
  __removeListener(callback) {
    this._listeners = this._listeners.filter((listener) => listener !== callback);
  }
  __attach(viewRef, eventName) {
    (0, import_react_native_web_internals.invariant)(this.__isNative, "Only native driven events need to be attached.");
    this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
  }
  __detach(viewTag, eventName) {
    (0, import_react_native_web_internals.invariant)(this.__isNative, "Only native driven events need to be detached.");
    this._attachedEvent && this._attachedEvent.detach();
  }
  __getHandler() {
    var _this = this;
    if (this.__isNative) {
      if (__DEV__) {
        var _validatedMapping = false;
        return function() {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (!_validatedMapping) {
            validateMapping(_this._argMapping, args);
            _validatedMapping = true;
          }
          _this._callListeners(...args);
        };
      } else {
        return this._callListeners;
      }
    }
    var validatedMapping = false;
    return function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (__DEV__ && !validatedMapping) {
        validateMapping(_this._argMapping, args);
        validatedMapping = true;
      }
      var traverse = (recMapping, recEvt, key) => {
        if (recMapping instanceof import_AnimatedValue.default) {
          if (typeof recEvt === "number") {
            recMapping.setValue(recEvt);
          }
        } else if (typeof recMapping === "object") {
          for (var mappingKey in recMapping) {
            traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
          }
        }
      };
      _this._argMapping.forEach((mapping, idx) => {
        traverse(mapping, args[idx], "arg" + idx);
      });
      _this._callListeners(...args);
    };
  }
  _callListeners() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      args[_key4] = arguments[_key4];
    }
    this._listeners.forEach((listener) => listener(...args));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=AnimatedEvent.js.map


/***/ }),

/***/ 3888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedImplementation_exports = {};
__export(AnimatedImplementation_exports, {
  default: () => AnimatedImplementation_default
});
module.exports = __toCommonJS(AnimatedImplementation_exports);
var import_AnimatedEvent = __webpack_require__(216);
var import_DecayAnimation = __toESM(__webpack_require__(3968));
var import_SpringAnimation = __toESM(__webpack_require__(6605));
var import_TimingAnimation = __toESM(__webpack_require__(3682));
var import_createAnimatedComponent = __toESM(__webpack_require__(8068));
var import_AnimatedAddition = __toESM(__webpack_require__(6698));
var import_AnimatedColor = __toESM(__webpack_require__(8882));
var import_AnimatedDiffClamp = __toESM(__webpack_require__(8696));
var import_AnimatedDivision = __toESM(__webpack_require__(2490));
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedModulo = __toESM(__webpack_require__(1415));
var import_AnimatedMultiplication = __toESM(__webpack_require__(7958));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_AnimatedSubtraction = __toESM(__webpack_require__(1923));
var import_AnimatedTracking = __toESM(__webpack_require__(7656));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedValueXY = __toESM(__webpack_require__(8277));
var add = function add2(a, b) {
  return new import_AnimatedAddition.default(a, b);
};
var subtract = function subtract2(a, b) {
  return new import_AnimatedSubtraction.default(a, b);
};
var divide = function divide2(a, b) {
  return new import_AnimatedDivision.default(a, b);
};
var multiply = function multiply2(a, b) {
  return new import_AnimatedMultiplication.default(a, b);
};
var modulo = function modulo2(a, modulus) {
  return new import_AnimatedModulo.default(a, modulus);
};
var diffClamp = function diffClamp2(a, min, max) {
  return new import_AnimatedDiffClamp.default(a, min, max);
};
var _combineCallbacks = function _combineCallbacks2(callback, config) {
  if (callback && config.onComplete) {
    return function() {
      config.onComplete && config.onComplete(...arguments);
      callback && callback(...arguments);
    };
  } else {
    return callback || config.onComplete;
  }
};
var maybeVectorAnim = function maybeVectorAnim2(value, config, anim) {
  if (value instanceof import_AnimatedValueXY.default) {
    var configX = { ...config };
    var configY = { ...config };
    for (var key in config) {
      var _config$key = config[key], x = _config$key.x, y = _config$key.y;
      if (x !== void 0 && y !== void 0) {
        configX[key] = x;
        configY[key] = y;
      }
    }
    var aX = anim(value.x, configX);
    var aY = anim(value.y, configY);
    return parallel([aX, aY], {
      stopTogether: false
    });
  } else if (value instanceof import_AnimatedColor.default) {
    var configR = { ...config };
    var configG = { ...config };
    var configB = { ...config };
    var configA = { ...config };
    for (var _key in config) {
      var _config$_key = config[_key], r = _config$_key.r, g = _config$_key.g, b = _config$_key.b, a = _config$_key.a;
      if (r !== void 0 && g !== void 0 && b !== void 0 && a !== void 0) {
        configR[_key] = r;
        configG[_key] = g;
        configB[_key] = b;
        configA[_key] = a;
      }
    }
    var aR = anim(value.r, configR);
    var aG = anim(value.g, configG);
    var aB = anim(value.b, configB);
    var aA = anim(value.a, configA);
    return parallel([aR, aG, aB, aA], {
      stopTogether: false
    });
  }
  return null;
};
var spring = function spring2(value, config) {
  var _start = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof import_AnimatedNode.default) {
      singleValue.track(
        new import_AnimatedTracking.default(
          singleValue,
          configuration.toValue,
          import_SpringAnimation.default,
          singleConfig,
          callback
        )
      );
    } else {
      singleValue.animate(new import_SpringAnimation.default(singleConfig), callback);
    }
  };
  return maybeVectorAnim(value, config, spring2) || {
    start: function start(callback) {
      _start(value, config, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = {
        ...config,
        iterations
      };
      _start(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};
var timing = function timing2(value, config) {
  var _start2 = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof import_AnimatedNode.default) {
      singleValue.track(
        new import_AnimatedTracking.default(
          singleValue,
          configuration.toValue,
          import_TimingAnimation.default,
          singleConfig,
          callback
        )
      );
    } else {
      singleValue.animate(new import_TimingAnimation.default(singleConfig), callback);
    }
  };
  return maybeVectorAnim(value, config, timing2) || {
    start: function start(callback) {
      _start2(value, config, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = {
        ...config,
        iterations
      };
      _start2(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};
var decay = function decay2(value, config) {
  var _start3 = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    singleValue.animate(new import_DecayAnimation.default(singleConfig), callback);
  };
  return maybeVectorAnim(value, config, decay2) || {
    start: function start(callback) {
      _start3(value, config, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = {
        ...config,
        iterations
      };
      _start3(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};
var sequence = function sequence2(animations) {
  var current = 0;
  return {
    start: function start(callback) {
      var onComplete = function onComplete2(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }
        current++;
        if (current === animations.length) {
          callback && callback(result);
          return;
        }
        animations[current].start(onComplete2);
      };
      if (animations.length === 0) {
        callback && callback({
          finished: true
        });
      } else {
        animations[current].start(onComplete);
      }
    },
    stop: function stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    },
    reset: function reset() {
      animations.forEach((animation, idx) => {
        if (idx <= current) {
          animation.reset();
        }
      });
      current = 0;
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error(
        "Loops run using the native driver cannot contain Animated.sequence animations"
      );
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
};
var parallel = function parallel2(animations, config) {
  var doneCount = 0;
  var hasEnded = {};
  var stopTogether = !(config && config.stopTogether === false);
  var result = {
    start: function start(callback) {
      if (doneCount === animations.length) {
        callback && callback({
          finished: true
        });
        return;
      }
      animations.forEach((animation, idx) => {
        var cb = function cb2(endResult) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }
          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };
        if (!animation) {
          cb({
            finished: true
          });
        } else {
          animation.start(cb);
        }
      });
    },
    stop: function stop() {
      animations.forEach((animation, idx) => {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    },
    reset: function reset() {
      animations.forEach((animation, idx) => {
        animation.reset();
        hasEnded[idx] = false;
        doneCount = 0;
      });
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error(
        "Loops run using the native driver cannot contain Animated.parallel animations"
      );
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
  return result;
};
var delay = function delay2(time) {
  return timing(new import_AnimatedValue.default(0), {
    toValue: 0,
    delay: time,
    duration: 0,
    useNativeDriver: false
  });
};
var stagger = function stagger2(time, animations) {
  return parallel(
    animations.map((animation, i) => {
      return sequence([delay(time * i), animation]);
    })
  );
};
var loop = function loop2(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations, _ref$resetBeforeItera = _ref.resetBeforeIteration, resetBeforeIteration = _ref$resetBeforeItera === void 0 ? true : _ref$resetBeforeItera;
  var isFinished = false;
  var iterationsSoFar = 0;
  return {
    start: function start(callback) {
      var restart = function restart2(result) {
        if (result === void 0) {
          result = {
            finished: true
          };
        }
        if (isFinished || iterationsSoFar === iterations || result.finished === false) {
          callback && callback(result);
        } else {
          iterationsSoFar++;
          resetBeforeIteration && animation.reset();
          animation.start(restart2);
        }
      };
      if (!animation || iterations === 0) {
        callback && callback({
          finished: true
        });
      } else {
        if (animation._isUsingNativeDriver()) {
          animation._startNativeLoop(iterations);
        } else {
          restart();
        }
      }
    },
    stop: function stop() {
      isFinished = true;
      animation.stop();
    },
    reset: function reset() {
      iterationsSoFar = 0;
      isFinished = false;
      animation.reset();
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error(
        "Loops run using the native driver cannot contain Animated.loop animations"
      );
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return animation._isUsingNativeDriver();
    }
  };
};
function forkEvent(event3, listener) {
  if (!event3) {
    return listener;
  } else if (event3 instanceof import_AnimatedEvent.AnimatedEvent) {
    event3.__addListener(listener);
    return event3;
  } else {
    return function() {
      typeof event3 === "function" && event3(...arguments);
      listener(...arguments);
    };
  }
}
function unforkEvent(event3, listener) {
  if (event3 && event3 instanceof import_AnimatedEvent.AnimatedEvent) {
    event3.__removeListener(listener);
  }
}
var event = function event2(argMapping, config) {
  var animatedEvent = new import_AnimatedEvent.AnimatedEvent(argMapping, config);
  if (animatedEvent.__isNative) {
    return animatedEvent;
  } else {
    return animatedEvent.__getHandler();
  }
};
var AnimatedImplementation_default = {
  /**
   * Standard value class for driving animations.  Typically initialized with
   * `new Animated.Value(0);`
   *
   * See https://reactnative.dev/docs/animated#value
   */
  Value: import_AnimatedValue.default,
  /**
   * 2D value class for driving 2D animations, such as pan gestures.
   *
   * See https://reactnative.dev/docs/animatedvaluexy
   */
  ValueXY: import_AnimatedValueXY.default,
  /**
   * Value class for driving color animations.
   */
  Color: import_AnimatedColor.default,
  /**
   * Exported to use the Interpolation type in flow.
   *
   * See https://reactnative.dev/docs/animated#interpolation
   */
  Interpolation: import_AnimatedInterpolation.default,
  /**
   * Exported for ease of type checking. All animated values derive from this
   * class.
   *
   * See https://reactnative.dev/docs/animated#node
   */
  Node: import_AnimatedNode.default,
  /**
   * Animates a value from an initial velocity to zero based on a decay
   * coefficient.
   *
   * See https://reactnative.dev/docs/animated#decay
   */
  decay,
  /**
   * Animates a value along a timed easing curve. The Easing module has tons of
   * predefined curves, or you can use your own function.
   *
   * See https://reactnative.dev/docs/animated#timing
   */
  timing,
  /**
   * Animates a value according to an analytical spring model based on
   * damped harmonic oscillation.
   *
   * See https://reactnative.dev/docs/animated#spring
   */
  spring,
  /**
   * Creates a new Animated value composed from two Animated values added
   * together.
   *
   * See https://reactnative.dev/docs/animated#add
   */
  add,
  /**
   * Creates a new Animated value composed by subtracting the second Animated
   * value from the first Animated value.
   *
   * See https://reactnative.dev/docs/animated#subtract
   */
  subtract,
  /**
   * Creates a new Animated value composed by dividing the first Animated value
   * by the second Animated value.
   *
   * See https://reactnative.dev/docs/animated#divide
   */
  divide,
  /**
   * Creates a new Animated value composed from two Animated values multiplied
   * together.
   *
   * See https://reactnative.dev/docs/animated#multiply
   */
  multiply,
  /**
   * Creates a new Animated value that is the (non-negative) modulo of the
   * provided Animated value.
   *
   * See https://reactnative.dev/docs/animated#modulo
   */
  modulo,
  /**
   * Create a new Animated value that is limited between 2 values. It uses the
   * difference between the last value so even if the value is far from the
   * bounds it will start changing when the value starts getting closer again.
   *
   * See https://reactnative.dev/docs/animated#diffclamp
   */
  diffClamp,
  /**
   * Starts an animation after the given delay.
   *
   * See https://reactnative.dev/docs/animated#delay
   */
  delay,
  /**
   * Starts an array of animations in order, waiting for each to complete
   * before starting the next. If the current running animation is stopped, no
   * following animations will be started.
   *
   * See https://reactnative.dev/docs/animated#sequence
   */
  sequence,
  /**
   * Starts an array of animations all at the same time. By default, if one
   * of the animations is stopped, they will all be stopped. You can override
   * this with the `stopTogether` flag.
   *
   * See https://reactnative.dev/docs/animated#parallel
   */
  parallel,
  /**
   * Array of animations may run in parallel (overlap), but are started in
   * sequence with successive delays.  Nice for doing trailing effects.
   *
   * See https://reactnative.dev/docs/animated#stagger
   */
  stagger,
  /**
   * Loops a given animation continuously, so that each time it reaches the
   * end, it resets and begins again from the start.
   *
   * See https://reactnative.dev/docs/animated#loop
   */
  loop,
  /**
   * Takes an array of mappings and extracts values from each arg accordingly,
   * then calls `setValue` on the mapped outputs.
   *
   * See https://reactnative.dev/docs/animated#event
   */
  event,
  /**
   * Make any React component Animatable.  Used to create `Animated.View`, etc.
   *
   * See https://reactnative.dev/docs/animated#createanimatedcomponent
   */
  createAnimatedComponent: import_createAnimatedComponent.default,
  /**
   * Imperative API to attach an animated value to an event on a view. Prefer
   * using `Animated.event` with `useNativeDrive: true` if possible.
   *
   * See https://reactnative.dev/docs/animated#attachnativeevent
   */
  attachNativeEvent: import_AnimatedEvent.attachNativeEvent,
  /**
   * Advanced imperative API for snooping on animated events that are passed in
   * through props. Use values directly where possible.
   *
   * See https://reactnative.dev/docs/animated#forkevent
   */
  forkEvent,
  unforkEvent,
  /**
   * Expose Event class, so it can be used as a type for type checkers.
   */
  Event: import_AnimatedEvent.AnimatedEvent
};
//# sourceMappingURL=AnimatedImplementation.js.map


/***/ }),

/***/ 5177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedMock_exports = {};
__export(AnimatedMock_exports, {
  default: () => AnimatedMock_default
});
module.exports = __toCommonJS(AnimatedMock_exports);
var import_AnimatedEvent = __webpack_require__(216);
var import_AnimatedImplementation = __toESM(__webpack_require__(3888));
var import_createAnimatedComponent = __toESM(__webpack_require__(8068));
var import_AnimatedColor = __toESM(__webpack_require__(8882));
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedValueXY = __toESM(__webpack_require__(8277));
var inAnimationCallback = false;
function mockAnimationStart(start) {
  return (callback) => {
    var guardedCallback = callback == null ? callback : function() {
      if (inAnimationCallback) {
        console.warn(
          "Ignoring recursive animation callback when running mock animations"
        );
        return;
      }
      inAnimationCallback = true;
      try {
        callback(...arguments);
      } finally {
        inAnimationCallback = false;
      }
    };
    start(guardedCallback);
  };
}
var emptyAnimation = {
  start: () => {
  },
  stop: () => {
  },
  reset: () => {
  },
  _startNativeLoop: () => {
  },
  _isUsingNativeDriver: () => {
    return false;
  }
};
var mockCompositeAnimation = (animations) => ({
  ...emptyAnimation,
  start: mockAnimationStart((callback) => {
    animations.forEach((animation) => animation.start());
    callback == null ? void 0 : callback({
      finished: true
    });
  })
});
var spring = function spring2(value, config) {
  var anyValue = value;
  return {
    ...emptyAnimation,
    start: mockAnimationStart((callback) => {
      anyValue.setValue(config.toValue);
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  };
};
var timing = function timing2(value, config) {
  var anyValue = value;
  return {
    ...emptyAnimation,
    start: mockAnimationStart((callback) => {
      anyValue.setValue(config.toValue);
      callback == null ? void 0 : callback({
        finished: true
      });
    })
  };
};
var decay = function decay2(value, config) {
  return emptyAnimation;
};
var sequence = function sequence2(animations) {
  return mockCompositeAnimation(animations);
};
var parallel = function parallel2(animations, config) {
  return mockCompositeAnimation(animations);
};
var delay = function delay2(time) {
  return emptyAnimation;
};
var stagger = function stagger2(time, animations) {
  return mockCompositeAnimation(animations);
};
var loop = function loop2(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$iterations = _ref.iterations, iterations = _ref$iterations === void 0 ? -1 : _ref$iterations;
  return emptyAnimation;
};
var AnimatedMock_default = {
  Value: import_AnimatedValue.default,
  ValueXY: import_AnimatedValueXY.default,
  Color: import_AnimatedColor.default,
  Interpolation: import_AnimatedInterpolation.default,
  Node: import_AnimatedNode.default,
  decay,
  timing,
  spring,
  add: import_AnimatedImplementation.default.add,
  subtract: import_AnimatedImplementation.default.subtract,
  divide: import_AnimatedImplementation.default.divide,
  multiply: import_AnimatedImplementation.default.multiply,
  modulo: import_AnimatedImplementation.default.modulo,
  diffClamp: import_AnimatedImplementation.default.diffClamp,
  delay,
  sequence,
  parallel,
  stagger,
  loop,
  event: import_AnimatedImplementation.default.event,
  createAnimatedComponent: import_createAnimatedComponent.default,
  attachNativeEvent: import_AnimatedEvent.attachNativeEvent,
  forkEvent: import_AnimatedImplementation.default.forkEvent,
  unforkEvent: import_AnimatedImplementation.default.unforkEvent,
  Event: import_AnimatedEvent.AnimatedEvent
};
//# sourceMappingURL=AnimatedMock.js.map


/***/ }),

/***/ 5383:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Easing_exports = {};
__export(Easing_exports, {
  default: () => Easing_default
});
module.exports = __toCommonJS(Easing_exports);
var import_bezier = __toESM(__webpack_require__(5310));
var ease;
class Easing {
  /**
   * A stepping function, returns 1 for any positive value of `n`.
   */
  static step0(n) {
    return n > 0 ? 1 : 0;
  }
  /**
   * A stepping function, returns 1 if `n` is greater than or equal to 1.
   */
  static step1(n) {
    return n >= 1 ? 1 : 0;
  }
  /**
   * A linear function, `f(t) = t`. Position correlates to elapsed time one to
   * one.
   *
   * http://cubic-bezier.com/#0,0,1,1
   */
  static linear(t) {
    return t;
  }
  /**
   * A simple inertial interaction, similar to an object slowly accelerating to
   * speed.
   *
   * http://cubic-bezier.com/#.42,0,1,1
   */
  static ease(t) {
    if (!ease) {
      ease = Easing.bezier(0.42, 0, 1, 1);
    }
    return ease(t);
  }
  /**
   * A quadratic function, `f(t) = t * t`. Position equals the square of elapsed
   * time.
   *
   * http://easings.net/#easeInQuad
   */
  static quad(t) {
    return t * t;
  }
  /**
   * A cubic function, `f(t) = t * t * t`. Position equals the cube of elapsed
   * time.
   *
   * http://easings.net/#easeInCubic
   */
  static cubic(t) {
    return t * t * t;
  }
  /**
   * A power function. Position is equal to the Nth power of elapsed time.
   *
   * n = 4: http://easings.net/#easeInQuart
   * n = 5: http://easings.net/#easeInQuint
   */
  static poly(n) {
    return (t) => Math.pow(t, n);
  }
  /**
   * A sinusoidal function.
   *
   * http://easings.net/#easeInSine
   */
  static sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  }
  /**
   * A circular function.
   *
   * http://easings.net/#easeInCirc
   */
  static circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  /**
   * An exponential function.
   *
   * http://easings.net/#easeInExpo
   */
  static exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }
  /**
   * A simple elastic interaction, similar to a spring oscillating back and
   * forth.
   *
   * Default bounciness is 1, which overshoots a little bit once. 0 bounciness
   * doesn't overshoot at all, and bounciness of N > 1 will overshoot about N
   * times.
   *
   * http://easings.net/#easeInElastic
   */
  static elastic(bounciness) {
    if (bounciness === void 0) {
      bounciness = 1;
    }
    var p = bounciness * Math.PI;
    return (t) => 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
  }
  /**
   * Use with `Animated.parallel()` to create a simple effect where the object
   * animates back slightly as the animation starts.
   *
   * Wolfram Plot:
   *
   * - http://tiny.cc/back_default (s = 1.70158, default)
   */
  static back(s) {
    if (s === void 0) {
      s = 1.70158;
    }
    return (t) => t * t * ((s + 1) * t - s);
  }
  /**
   * Provides a simple bouncing effect.
   *
   * http://easings.net/#easeInBounce
   */
  static bounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }
    if (t < 2 / 2.75) {
      var _t = t - 1.5 / 2.75;
      return 7.5625 * _t * _t + 0.75;
    }
    if (t < 2.5 / 2.75) {
      var _t2 = t - 2.25 / 2.75;
      return 7.5625 * _t2 * _t2 + 0.9375;
    }
    var t2 = t - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  }
  /**
   * Provides a cubic bezier curve, equivalent to CSS Transitions'
   * `transition-timing-function`.
   *
   * A useful tool to visualize cubic bezier curves can be found at
   * http://cubic-bezier.com/
   */
  static bezier(x1, y1, x2, y2) {
    return (0, import_bezier.default)(x1, y1, x2, y2);
  }
  /**
   * Runs an easing function forwards.
   */
  static in(easing) {
    return easing;
  }
  /**
   * Runs an easing function backwards.
   */
  static out(easing) {
    return (t) => 1 - easing(1 - t);
  }
  /**
   * Makes any easing function symmetrical. The easing function will run
   * forwards for half of the duration, then backwards for the rest of the
   * duration.
   */
  static inOut(easing) {
    return (t) => {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }
      return 1 - easing((1 - t) * 2) / 2;
    };
  }
}
var Easing_default = Easing;
//# sourceMappingURL=Easing.js.map


/***/ }),

/***/ 2011:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var NativeAnimatedHelper_exports = {};
__export(NativeAnimatedHelper_exports, {
  API: () => API,
  addWhitelistedInterpolationParam: () => addWhitelistedInterpolationParam,
  addWhitelistedStyleProp: () => addWhitelistedStyleProp,
  addWhitelistedTransformProp: () => addWhitelistedTransformProp,
  assertNativeAnimatedModule: () => assertNativeAnimatedModule,
  default: () => NativeAnimatedHelper_default,
  generateNewAnimationId: () => generateNewAnimationId,
  generateNewNodeTag: () => generateNewNodeTag,
  isSupportedColorStyleProp: () => isSupportedColorStyleProp,
  isSupportedInterpolationParam: () => isSupportedInterpolationParam,
  isSupportedStyleProp: () => isSupportedStyleProp,
  isSupportedTransformProp: () => isSupportedTransformProp,
  shouldUseNativeDriver: () => shouldUseNativeDriver,
  transformDataType: () => transformDataType,
  validateInterpolation: () => validateInterpolation,
  validateStyles: () => validateStyles,
  validateTransform: () => validateTransform
});
module.exports = __toCommonJS(NativeAnimatedHelper_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_FeatureFlags = __webpack_require__(701);
var import_NativeEventEmitter = __toESM(__webpack_require__(5986));
var import_RCTDeviceEventEmitter = __toESM(__webpack_require__(6664));
var import_NativeAnimatedModule = __toESM(__webpack_require__(2132));
var import_NativeAnimatedTurboModule = __toESM(__webpack_require__(4174));
var NativeAnimatedModule = import_react_native_web_internals.Platform.OS === "ios" && global.RN$Bridgeless === true ? import_NativeAnimatedTurboModule.default : import_NativeAnimatedModule.default;
var __nativeAnimatedNodeTagCount = 1;
var __nativeAnimationIdCount = 1;
var nativeEventEmitter;
var waitingForQueuedOperations = /* @__PURE__ */ new Set();
var queueOperations = false;
var queue = [];
var singleOpQueue = [];
var useSingleOpBatching = false;
import_react_native_web_internals.Platform.OS === "android" && !!(NativeAnimatedModule != null && NativeAnimatedModule.queueAndExecuteBatchedOperations) && import_FeatureFlags.ReactNativeFeatureFlags.animatedShouldUseSingleOp();
var flushQueueTimeout = null;
var eventListenerGetValueCallbacks = {};
var eventListenerAnimationFinishedCallbacks = {};
var globalEventEmitterGetValueListener = null;
var globalEventEmitterAnimationFinishedListener = null;
var nativeOps = useSingleOpBatching ? function() {
  var apis = [
    "createAnimatedNode",
    // 1
    "updateAnimatedNodeConfig",
    // 2
    "getValue",
    // 3
    "startListeningToAnimatedNodeValue",
    // 4
    "stopListeningToAnimatedNodeValue",
    // 5
    "connectAnimatedNodes",
    // 6
    "disconnectAnimatedNodes",
    // 7
    "startAnimatingNode",
    // 8
    "stopAnimation",
    // 9
    "setAnimatedNodeValue",
    // 10
    "setAnimatedNodeOffset",
    // 11
    "flattenAnimatedNodeOffset",
    // 12
    "extractAnimatedNodeOffset",
    // 13
    "connectAnimatedNodeToView",
    // 14
    "disconnectAnimatedNodeFromView",
    // 15
    "restoreDefaultValues",
    // 16
    "dropAnimatedNode",
    // 17
    "addAnimatedEventToView",
    // 18
    "removeAnimatedEventFromView",
    // 19
    "addListener",
    // 20
    "removeListener"
    // 21
  ];
  return apis.reduce((acc, functionName, i) => {
    acc[functionName] = i + 1;
    return acc;
  }, {});
}() : NativeAnimatedModule;
var API = {
  getValue: function getValue(tag, saveValueCallback) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    if (useSingleOpBatching) {
      if (saveValueCallback) {
        eventListenerGetValueCallbacks[tag] = saveValueCallback;
      }
      API.queueOperation(nativeOps.getValue, tag);
    } else {
      API.queueOperation(nativeOps.getValue, tag, saveValueCallback);
    }
  },
  setWaitingForIdentifier: function setWaitingForIdentifier(id) {
    waitingForQueuedOperations.add(id);
    queueOperations = true;
    if (import_FeatureFlags.ReactNativeFeatureFlags.animatedShouldDebounceQueueFlush() && flushQueueTimeout) {
      clearTimeout(flushQueueTimeout);
    }
  },
  unsetWaitingForIdentifier: function unsetWaitingForIdentifier(id) {
    waitingForQueuedOperations.delete(id);
    if (waitingForQueuedOperations.size === 0) {
      queueOperations = false;
      API.disableQueue();
    }
  },
  disableQueue: function disableQueue() {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    if (import_FeatureFlags.ReactNativeFeatureFlags.animatedShouldDebounceQueueFlush()) {
      var prevTimeout = flushQueueTimeout;
      clearImmediate(prevTimeout);
      flushQueueTimeout = setImmediate(API.flushQueue);
    } else {
      API.flushQueue();
    }
  },
  flushQueue: function flushQueue() {
  },
  queueOperation: function queueOperation(fn) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (useSingleOpBatching) {
      singleOpQueue.push(fn, ...args);
      return;
    }
    if (queueOperations || queue.length !== 0) {
      queue.push(() => fn(...args));
    } else {
      fn(...args);
    }
  },
  createAnimatedNode: function createAnimatedNode(tag, config) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.createAnimatedNode, tag, config);
  },
  updateAnimatedNodeConfig: function updateAnimatedNodeConfig(tag, config) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
  },
  startListeningToAnimatedNodeValue: function startListeningToAnimatedNodeValue(tag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.startListeningToAnimatedNodeValue, tag);
  },
  stopListeningToAnimatedNodeValue: function stopListeningToAnimatedNodeValue(tag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.stopListeningToAnimatedNodeValue, tag);
  },
  connectAnimatedNodes: function connectAnimatedNodes(parentTag, childTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.connectAnimatedNodes, parentTag, childTag);
  },
  disconnectAnimatedNodes: function disconnectAnimatedNodes(parentTag, childTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.disconnectAnimatedNodes, parentTag, childTag);
  },
  startAnimatingNode: function startAnimatingNode(animationId, nodeTag, config, endCallback) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    if (useSingleOpBatching) {
      if (endCallback) {
        eventListenerAnimationFinishedCallbacks[animationId] = endCallback;
      }
      API.queueOperation(nativeOps.startAnimatingNode, animationId, nodeTag, config);
    } else {
      API.queueOperation(
        nativeOps.startAnimatingNode,
        animationId,
        nodeTag,
        config,
        endCallback
      );
    }
  },
  stopAnimation: function stopAnimation(animationId) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.stopAnimation, animationId);
  },
  setAnimatedNodeValue: function setAnimatedNodeValue(nodeTag, value) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.setAnimatedNodeValue, nodeTag, value);
  },
  setAnimatedNodeOffset: function setAnimatedNodeOffset(nodeTag, offset) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.setAnimatedNodeOffset, nodeTag, offset);
  },
  flattenAnimatedNodeOffset: function flattenAnimatedNodeOffset(nodeTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.flattenAnimatedNodeOffset, nodeTag);
  },
  extractAnimatedNodeOffset: function extractAnimatedNodeOffset(nodeTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.extractAnimatedNodeOffset, nodeTag);
  },
  connectAnimatedNodeToView: function connectAnimatedNodeToView(nodeTag, viewTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.connectAnimatedNodeToView, nodeTag, viewTag);
  },
  disconnectAnimatedNodeFromView: function disconnectAnimatedNodeFromView(nodeTag, viewTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.disconnectAnimatedNodeFromView, nodeTag, viewTag);
  },
  restoreDefaultValues: function restoreDefaultValues(nodeTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    if (nativeOps.restoreDefaultValues != null) {
      API.queueOperation(nativeOps.restoreDefaultValues, nodeTag);
    }
  },
  dropAnimatedNode: function dropAnimatedNode(tag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.dropAnimatedNode, tag);
  },
  addAnimatedEventToView: function addAnimatedEventToView(viewTag, eventName, eventMapping) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(nativeOps.addAnimatedEventToView, viewTag, eventName, eventMapping);
  },
  removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag) {
    (0, import_react_native_web_internals.invariant)(nativeOps, "Native animated module is not available");
    API.queueOperation(
      nativeOps.removeAnimatedEventFromView,
      viewTag,
      eventName,
      animatedNodeTag
    );
  }
};
function setupGlobalEventEmitterListeners() {
  globalEventEmitterGetValueListener = import_RCTDeviceEventEmitter.default.addListener(
    "onNativeAnimatedModuleGetValue",
    function(params) {
      var tag = params.tag;
      var callback = eventListenerGetValueCallbacks[tag];
      if (!callback) {
        return;
      }
      callback(params.value);
      delete eventListenerGetValueCallbacks[tag];
    }
  );
  globalEventEmitterAnimationFinishedListener = import_RCTDeviceEventEmitter.default.addListener(
    "onNativeAnimatedModuleAnimationFinished",
    function(params) {
      var animationId = params.animationId;
      var callback = eventListenerAnimationFinishedCallbacks[animationId];
      if (!callback) {
        return;
      }
      callback(params);
      delete eventListenerAnimationFinishedCallbacks[animationId];
    }
  );
}
var SUPPORTED_COLOR_STYLES = {
  backgroundColor: true,
  borderBottomColor: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderStartColor: true,
  borderTopColor: true,
  color: true,
  tintColor: true
};
var SUPPORTED_STYLES = {
  ...SUPPORTED_COLOR_STYLES,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  elevation: true,
  opacity: true,
  transform: true,
  zIndex: true,
  /* ios styles */
  shadowOpacity: true,
  shadowRadius: true,
  /* legacy android transform properties */
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true
};
var SUPPORTED_TRANSFORMS = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
  perspective: true
};
var SUPPORTED_INTERPOLATION_PARAMS = {
  inputRange: true,
  outputRange: true,
  extrapolate: true,
  extrapolateRight: true,
  extrapolateLeft: true
};
function addWhitelistedStyleProp(prop) {
  SUPPORTED_STYLES[prop] = true;
}
function addWhitelistedTransformProp(prop) {
  SUPPORTED_TRANSFORMS[prop] = true;
}
function addWhitelistedInterpolationParam(param) {
  SUPPORTED_INTERPOLATION_PARAMS[param] = true;
}
function isSupportedColorStyleProp(prop) {
  return SUPPORTED_COLOR_STYLES.hasOwnProperty(prop);
}
function isSupportedStyleProp(prop) {
  return SUPPORTED_STYLES.hasOwnProperty(prop);
}
function isSupportedTransformProp(prop) {
  return SUPPORTED_TRANSFORMS.hasOwnProperty(prop);
}
function isSupportedInterpolationParam(param) {
  return SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(param);
}
function validateTransform(configs) {
  configs.forEach((config) => {
    if (!isSupportedTransformProp(config.property)) {
      throw new Error(
        "Property '" + config.property + "' is not supported by native animated module"
      );
    }
  });
}
function validateStyles(styles) {
  for (var _key2 in styles) {
    if (!isSupportedStyleProp(_key2)) {
      throw new Error(
        "Style property '" + _key2 + "' is not supported by native animated module"
      );
    }
  }
}
function validateInterpolation(config) {
  for (var _key3 in config) {
    if (!isSupportedInterpolationParam(_key3)) {
      throw new Error(
        "Interpolation property '" + _key3 + "' is not supported by native animated module"
      );
    }
  }
}
function generateNewNodeTag() {
  return __nativeAnimatedNodeTagCount++;
}
function generateNewAnimationId() {
  return __nativeAnimationIdCount++;
}
function assertNativeAnimatedModule() {
  (0, import_react_native_web_internals.invariant)(NativeAnimatedModule, "Native animated module is not available");
}
var _warnedMissingNativeAnimated = false;
function shouldUseNativeDriver(config) {
  if (config.useNativeDriver == null) {
    console.warn(
      "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"
    );
  }
  if (config.useNativeDriver === true && !NativeAnimatedModule) {
    if (!_warnedMissingNativeAnimated) {
      console.warn(
        "Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"
      );
      _warnedMissingNativeAnimated = true;
    }
    return false;
  }
  return config.useNativeDriver || false;
}
function transformDataType(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (/deg$/.test(value)) {
    var degrees = parseFloat(value) || 0;
    var radians = degrees * Math.PI / 180;
    return radians;
  } else {
    return value;
  }
}
var NativeAnimatedHelper_default = {
  API,
  isSupportedColorStyleProp,
  isSupportedStyleProp,
  isSupportedTransformProp,
  isSupportedInterpolationParam,
  addWhitelistedStyleProp,
  addWhitelistedTransformProp,
  addWhitelistedInterpolationParam,
  validateStyles,
  validateTransform,
  validateInterpolation,
  generateNewNodeTag,
  generateNewAnimationId,
  assertNativeAnimatedModule,
  shouldUseNativeDriver,
  transformDataType,
  // $FlowExpectedError[unsafe-getters-setters] - unsafe getter lint suppresion
  // $FlowExpectedError[missing-type-arg] - unsafe getter lint suppresion
  get nativeEventEmitter() {
    if (!nativeEventEmitter) {
      nativeEventEmitter = new import_NativeEventEmitter.default(
        // T88715063: NativeEventEmitter only used this parameter on iOS. Now it uses it on all platforms, so this code was modified automatically to preserve its behavior
        // If you want to use the native module on other platforms, please remove this condition and test its behavior
        import_react_native_web_internals.Platform.OS !== "ios" ? null : NativeAnimatedModule
      );
    }
    return nativeEventEmitter;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=NativeAnimatedHelper.js.map


/***/ }),

/***/ 2132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var NativeAnimatedModule_exports = {};
__export(NativeAnimatedModule_exports, {
  default: () => NativeAnimatedModule_default
});
module.exports = __toCommonJS(NativeAnimatedModule_exports);
var TurboModuleRegistry = __toESM(__webpack_require__(9277));
var NativeAnimatedModule_default = TurboModuleRegistry.get("NativeAnimatedModule");
//# sourceMappingURL=NativeAnimatedModule.js.map


/***/ }),

/***/ 4174:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var NativeAnimatedTurboModule_exports = {};
__export(NativeAnimatedTurboModule_exports, {
  default: () => NativeAnimatedTurboModule_default
});
module.exports = __toCommonJS(NativeAnimatedTurboModule_exports);
var TurboModuleRegistry = __toESM(__webpack_require__(9277));
var NativeAnimatedTurboModule_default = TurboModuleRegistry.get("NativeAnimatedTurboModule");
//# sourceMappingURL=NativeAnimatedTurboModule.js.map


/***/ }),

/***/ 1987:
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
var SpringConfig_exports = {};
__export(SpringConfig_exports, {
  default: () => SpringConfig_default
});
module.exports = __toCommonJS(SpringConfig_exports);
function stiffnessFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194;
}
function dampingFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25;
}
function fromOrigamiTensionAndFriction(tension, friction) {
  return {
    stiffness: stiffnessFromOrigamiValue(tension),
    damping: dampingFromOrigamiValue(friction)
  };
}
function fromBouncinessAndSpeed(bounciness, speed) {
  function normalize(value, startValue, endValue) {
    return (value - startValue) / (endValue - startValue);
  }
  function projectNormal(n, start, end) {
    return start + n * (end - start);
  }
  function linearInterpolation(t, start, end) {
    return t * end + (1 - t) * start;
  }
  function quadraticOutInterpolation(t, start, end) {
    return linearInterpolation(2 * t - t * t, start, end);
  }
  function b3Friction1(x) {
    return 7e-4 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
  }
  function b3Friction2(x) {
    return 44e-6 * Math.pow(x, 3) - 6e-3 * Math.pow(x, 2) + 0.36 * x + 2;
  }
  function b3Friction3(x) {
    return 45e-8 * Math.pow(x, 3) - 332e-6 * Math.pow(x, 2) + 0.1078 * x + 5.84;
  }
  function b3Nobounce(tension) {
    if (tension <= 18) {
      return b3Friction1(tension);
    } else if (tension > 18 && tension <= 44) {
      return b3Friction2(tension);
    } else {
      return b3Friction3(tension);
    }
  }
  var b = normalize(bounciness / 1.7, 0, 20);
  b = projectNormal(b, 0, 0.8);
  var s = normalize(speed / 1.7, 0, 20);
  var bouncyTension = projectNormal(s, 0.5, 200);
  var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);
  return {
    stiffness: stiffnessFromOrigamiValue(bouncyTension),
    damping: dampingFromOrigamiValue(bouncyFriction)
  };
}
var SpringConfig_default = {
  fromOrigamiTensionAndFriction,
  fromBouncinessAndSpeed
};
//# sourceMappingURL=SpringConfig.js.map


/***/ }),

/***/ 1689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var Animation_exports = {};
__export(Animation_exports, {
  default: () => Animation_default
});
module.exports = __toCommonJS(Animation_exports);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var startNativeAnimationNextId = 1;
class Animation {
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
  }
  stop() {
    if (this.__nativeId) {
      import_NativeAnimatedHelper.default.API.stopAnimation(this.__nativeId);
    }
  }
  __getNativeAnimationConfig() {
    throw new Error("This animation type cannot be offloaded to native");
  }
  // Helper function for subclasses to make sure onEnd is only called once.
  __debouncedOnEnd(result) {
    var onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  }
  __startNativeAnimation(animatedValue) {
    var startNativeAnimationWaitId = startNativeAnimationNextId + ":startAnimation";
    startNativeAnimationNextId += 1;
    import_NativeAnimatedHelper.default.API.setWaitingForIdentifier(startNativeAnimationWaitId);
    try {
      var config = this.__getNativeAnimationConfig();
      animatedValue.__makeNative(config.platformConfig);
      this.__nativeId = import_NativeAnimatedHelper.default.generateNewAnimationId();
      import_NativeAnimatedHelper.default.API.startAnimatingNode(
        this.__nativeId,
        animatedValue.__getNativeTag(),
        config,
        // $FlowFixMe[method-unbinding] added when improving typing for this parameters
        this.__debouncedOnEnd.bind(this)
      );
    } catch (e) {
      throw e;
    } finally {
      import_NativeAnimatedHelper.default.API.unsetWaitingForIdentifier(startNativeAnimationWaitId);
    }
  }
}
var Animation_default = Animation;
//# sourceMappingURL=Animation.js.map


/***/ }),

/***/ 3968:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var DecayAnimation_exports = {};
__export(DecayAnimation_exports, {
  default: () => DecayAnimation_default
});
module.exports = __toCommonJS(DecayAnimation_exports);
var import_NativeAnimatedHelper = __webpack_require__(2011);
var import_Animation = __toESM(__webpack_require__(1689));
class DecayAnimation extends import_Animation.default {
  constructor(config) {
    var _config$deceleration, _config$isInteraction, _config$iterations;
    super();
    this._deceleration = (_config$deceleration = config.deceleration) !== null && _config$deceleration !== void 0 ? _config$deceleration : 0.998;
    this._velocity = config.velocity;
    this._useNativeDriver = (0, import_NativeAnimatedHelper.shouldUseNativeDriver)(config);
    this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
  }
  __getNativeAnimationConfig() {
    return {
      type: "decay",
      deceleration: this._deceleration,
      velocity: this._velocity,
      iterations: this.__iterations
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._lastValue = fromValue;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._startTime = Date.now();
    if (this._useNativeDriver) {
      this.__startNativeAnimation(animatedValue);
    } else {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  onUpdate() {
    var now = Date.now();
    var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));
    this._onUpdate(value);
    if (Math.abs(this._lastValue - value) < 0.1) {
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._lastValue = value;
    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  stop() {
    super.stop();
    this.__active = false;
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
}
var DecayAnimation_default = DecayAnimation;
//# sourceMappingURL=DecayAnimation.js.map


/***/ }),

/***/ 6605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var SpringAnimation_exports = {};
__export(SpringAnimation_exports, {
  default: () => SpringAnimation_default
});
module.exports = __toCommonJS(SpringAnimation_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_NativeAnimatedHelper = __webpack_require__(2011);
var import_SpringConfig = __toESM(__webpack_require__(1987));
var import_Animation = __toESM(__webpack_require__(1689));
class SpringAnimation extends import_Animation.default {
  constructor(config) {
    var _config$overshootClam, _config$restDisplacem, _config$restSpeedThre, _config$velocity, _config$velocity2, _config$delay, _config$isInteraction, _config$iterations;
    super();
    this._overshootClamping = (_config$overshootClam = config.overshootClamping) !== null && _config$overshootClam !== void 0 ? _config$overshootClam : false;
    this._restDisplacementThreshold = (_config$restDisplacem = config.restDisplacementThreshold) !== null && _config$restDisplacem !== void 0 ? _config$restDisplacem : 1e-3;
    this._restSpeedThreshold = (_config$restSpeedThre = config.restSpeedThreshold) !== null && _config$restSpeedThre !== void 0 ? _config$restSpeedThre : 1e-3;
    this._initialVelocity = (_config$velocity = config.velocity) !== null && _config$velocity !== void 0 ? _config$velocity : 0;
    this._lastVelocity = (_config$velocity2 = config.velocity) !== null && _config$velocity2 !== void 0 ? _config$velocity2 : 0;
    this._toValue = config.toValue;
    this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    this._useNativeDriver = (0, import_NativeAnimatedHelper.shouldUseNativeDriver)(config);
    this._platformConfig = config.platformConfig;
    this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
    this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    if (config.stiffness !== void 0 || config.damping !== void 0 || config.mass !== void 0) {
      var _config$stiffness, _config$damping, _config$mass;
      (0, import_react_native_web_internals.invariant)(
        config.bounciness === void 0 && config.speed === void 0 && config.tension === void 0 && config.friction === void 0,
        "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one"
      );
      this._stiffness = (_config$stiffness = config.stiffness) !== null && _config$stiffness !== void 0 ? _config$stiffness : 100;
      this._damping = (_config$damping = config.damping) !== null && _config$damping !== void 0 ? _config$damping : 10;
      this._mass = (_config$mass = config.mass) !== null && _config$mass !== void 0 ? _config$mass : 1;
    } else if (config.bounciness !== void 0 || config.speed !== void 0) {
      var _config$bounciness, _config$speed;
      (0, import_react_native_web_internals.invariant)(
        config.tension === void 0 && config.friction === void 0 && config.stiffness === void 0 && config.damping === void 0 && config.mass === void 0,
        "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one"
      );
      var springConfig = import_SpringConfig.default.fromBouncinessAndSpeed(
        (_config$bounciness = config.bounciness) !== null && _config$bounciness !== void 0 ? _config$bounciness : 8,
        (_config$speed = config.speed) !== null && _config$speed !== void 0 ? _config$speed : 12
      );
      this._stiffness = springConfig.stiffness;
      this._damping = springConfig.damping;
      this._mass = 1;
    } else {
      var _config$tension, _config$friction;
      var _springConfig = import_SpringConfig.default.fromOrigamiTensionAndFriction(
        (_config$tension = config.tension) !== null && _config$tension !== void 0 ? _config$tension : 40,
        (_config$friction = config.friction) !== null && _config$friction !== void 0 ? _config$friction : 7
      );
      this._stiffness = _springConfig.stiffness;
      this._damping = _springConfig.damping;
      this._mass = 1;
    }
    (0, import_react_native_web_internals.invariant)(this._stiffness > 0, "Stiffness value must be greater than 0");
    (0, import_react_native_web_internals.invariant)(this._damping > 0, "Damping value must be greater than 0");
    (0, import_react_native_web_internals.invariant)(this._mass > 0, "Mass value must be greater than 0");
  }
  __getNativeAnimationConfig() {
    var _this$_initialVelocit;
    return {
      type: "spring",
      overshootClamping: this._overshootClamping,
      restDisplacementThreshold: this._restDisplacementThreshold,
      restSpeedThreshold: this._restSpeedThreshold,
      stiffness: this._stiffness,
      damping: this._damping,
      mass: this._mass,
      initialVelocity: (_this$_initialVelocit = this._initialVelocity) !== null && _this$_initialVelocit !== void 0 ? _this$_initialVelocit : this._lastVelocity,
      toValue: this._toValue,
      iterations: this.__iterations,
      platformConfig: this._platformConfig
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._startPosition = fromValue;
    this._lastPosition = this._startPosition;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._lastTime = Date.now();
    this._frameTime = 0;
    if (previousAnimation instanceof SpringAnimation) {
      var internalState = previousAnimation.getInternalState();
      this._lastPosition = internalState.lastPosition;
      this._lastVelocity = internalState.lastVelocity;
      this._initialVelocity = this._lastVelocity;
      this._lastTime = internalState.lastTime;
    }
    var start = () => {
      if (this._useNativeDriver) {
        this.__startNativeAnimation(animatedValue);
      } else {
        this.onUpdate();
      }
    };
    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  }
  getInternalState() {
    return {
      lastPosition: this._lastPosition,
      lastVelocity: this._lastVelocity,
      lastTime: this._lastTime
    };
  }
  /**
   * This spring model is based off of a damped harmonic oscillator
   * (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
   *
   * We use the closed form of the second order differential equation:
   *
   * x'' + (2ζ⍵_0)x' + ⍵^2x = 0
   *
   * where
   *    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
   *    ζ = c / 2√mk (damping ratio),
   *    c = damping constant
   *    k = stiffness
   *    m = mass
   *
   * The derivation of the closed form is described in detail here:
   * http://planetmath.org/sites/default/files/texpdf/39745.pdf
   *
   * This algorithm happens to match the algorithm used by CASpringAnimation,
   * a QuartzCore (iOS) API that creates spring animations.
   */
  onUpdate() {
    var MAX_STEPS = 64;
    var now = Date.now();
    if (now > this._lastTime + MAX_STEPS) {
      now = this._lastTime + MAX_STEPS;
    }
    var deltaTime = (now - this._lastTime) / 1e3;
    this._frameTime += deltaTime;
    var c = this._damping;
    var m = this._mass;
    var k = this._stiffness;
    var v0 = -this._initialVelocity;
    var zeta = c / (2 * Math.sqrt(k * m));
    var omega0 = Math.sqrt(k / m);
    var omega1 = omega0 * Math.sqrt(1 - zeta * zeta);
    var x0 = this._toValue - this._startPosition;
    var position = 0;
    var velocity = 0;
    var t = this._frameTime;
    if (zeta < 1) {
      var envelope = Math.exp(-zeta * omega0 * t);
      position = this._toValue - envelope * ((v0 + zeta * omega0 * x0) / omega1 * Math.sin(omega1 * t) + x0 * Math.cos(omega1 * t));
      velocity = zeta * omega0 * envelope * (Math.sin(omega1 * t) * (v0 + zeta * omega0 * x0) / omega1 + x0 * Math.cos(omega1 * t)) - envelope * (Math.cos(omega1 * t) * (v0 + zeta * omega0 * x0) - omega1 * x0 * Math.sin(omega1 * t));
    } else {
      var _envelope = Math.exp(-omega0 * t);
      position = this._toValue - _envelope * (x0 + (v0 + omega0 * x0) * t);
      velocity = _envelope * (v0 * (t * omega0 - 1) + t * x0 * (omega0 * omega0));
    }
    this._lastTime = now;
    this._lastPosition = position;
    this._lastVelocity = velocity;
    this._onUpdate(position);
    if (!this.__active) {
      return;
    }
    var isOvershooting = false;
    if (this._overshootClamping && this._stiffness !== 0) {
      if (this._startPosition < this._toValue) {
        isOvershooting = position > this._toValue;
      } else {
        isOvershooting = position < this._toValue;
      }
    }
    var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
    var isDisplacement = true;
    if (this._stiffness !== 0) {
      isDisplacement = Math.abs(this._toValue - position) <= this._restDisplacementThreshold;
    }
    if (isOvershooting || isVelocity && isDisplacement) {
      if (this._stiffness !== 0) {
        this._lastPosition = this._toValue;
        this._lastVelocity = 0;
        this._onUpdate(this._toValue);
      }
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  }
  stop() {
    super.stop();
    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
}
var SpringAnimation_default = SpringAnimation;
//# sourceMappingURL=SpringAnimation.js.map


/***/ }),

/***/ 3682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var TimingAnimation_exports = {};
__export(TimingAnimation_exports, {
  default: () => TimingAnimation_default
});
module.exports = __toCommonJS(TimingAnimation_exports);
var import_Easing = __toESM(__webpack_require__(5383));
var import_NativeAnimatedHelper = __webpack_require__(2011);
var import_Animation = __toESM(__webpack_require__(1689));
var _easeInOut;
function easeInOut() {
  if (!_easeInOut) {
    _easeInOut = import_Easing.default.inOut(import_Easing.default.ease);
  }
  return _easeInOut;
}
class TimingAnimation extends import_Animation.default {
  constructor(config) {
    var _config$easing, _config$duration, _config$delay, _config$iterations, _config$isInteraction;
    super();
    this._toValue = config.toValue;
    this._easing = (_config$easing = config.easing) !== null && _config$easing !== void 0 ? _config$easing : easeInOut();
    this._duration = (_config$duration = config.duration) !== null && _config$duration !== void 0 ? _config$duration : 500;
    this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    this._useNativeDriver = (0, import_NativeAnimatedHelper.shouldUseNativeDriver)(config);
    this._platformConfig = config.platformConfig;
    this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !this._useNativeDriver;
  }
  __getNativeAnimationConfig() {
    var frameDuration = 1e3 / 60;
    var frames = [];
    var numFrames = Math.round(this._duration / frameDuration);
    for (var frame = 0; frame < numFrames; frame++) {
      frames.push(this._easing(frame / numFrames));
    }
    frames.push(this._easing(1));
    return {
      type: "frames",
      frames,
      toValue: this._toValue,
      iterations: this.__iterations,
      platformConfig: this._platformConfig
    };
  }
  start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    var start = () => {
      if (this._duration === 0 && !this._useNativeDriver) {
        this._onUpdate(this._toValue);
        this.__debouncedOnEnd({
          finished: true
        });
      } else {
        this._startTime = Date.now();
        if (this._useNativeDriver) {
          this.__startNativeAnimation(animatedValue);
        } else {
          this._animationFrame = requestAnimationFrame(
            // $FlowFixMe[method-unbinding] added when improving typing for this parameters
            this.onUpdate.bind(this)
          );
        }
      }
    };
    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  }
  onUpdate() {
    var now = Date.now();
    if (now >= this._startTime + this._duration) {
      if (this._duration === 0) {
        this._onUpdate(this._toValue);
      } else {
        this._onUpdate(
          this._fromValue + this._easing(1) * (this._toValue - this._fromValue)
        );
      }
      this.__debouncedOnEnd({
        finished: true
      });
      return;
    }
    this._onUpdate(
      this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue)
    );
    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }
  stop() {
    super.stop();
    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);
    this.__debouncedOnEnd({
      finished: false
    });
  }
}
var TimingAnimation_default = TimingAnimation;
//# sourceMappingURL=TimingAnimation.js.map


/***/ }),

/***/ 5310:
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
var bezier_exports = {};
__export(bezier_exports, {
  default: () => bezier
});
module.exports = __toCommonJS(bezier_exports);
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function A(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, _aA, _aB, mX1, mX2) {
  var currentX, currentT, i = 0, aA = _aA, aB = _aB;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
  var aGuessT = _aGuessT;
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }
  function getTForX(aX) {
    var intervalStart = 0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x;
    }
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
}
//# sourceMappingURL=bezier.js.map


/***/ }),

/***/ 5408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedImage_exports = {};
__export(AnimatedImage_exports, {
  default: () => AnimatedImage_default
});
module.exports = __toCommonJS(AnimatedImage_exports);
var React = __toESM(__webpack_require__(6689));
var import_Image = __toESM(__webpack_require__(6496));
var import_createAnimatedComponent = __toESM(__webpack_require__(8068));
var AnimatedImage_default = (0, import_createAnimatedComponent.default)(import_Image.default);
//# sourceMappingURL=AnimatedImage.js.map


/***/ }),

/***/ 9895:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedScrollView_exports = {};
__export(AnimatedScrollView_exports, {
  default: () => AnimatedScrollView_default
});
module.exports = __toCommonJS(AnimatedScrollView_exports);
var React = __toESM(__webpack_require__(6689));
var import_ScrollView = __toESM(__webpack_require__(7606));
var import_createAnimatedComponent = __toESM(__webpack_require__(8068));
var ScrollViewWithEventThrottle = /* @__PURE__ */ React.forwardRef(
  (props, ref) => /* @__PURE__ */ React.createElement(
    import_ScrollView.default,
    {
      scrollEventThrottle: 1e-4,
      ...props,
      ref
    }
  )
);
var AnimatedScrollView_default = (0, import_createAnimatedComponent.default)(ScrollViewWithEventThrottle);
//# sourceMappingURL=AnimatedScrollView.js.map


/***/ }),

/***/ 52:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedText_exports = {};
__export(AnimatedText_exports, {
  default: () => AnimatedText_default
});
module.exports = __toCommonJS(AnimatedText_exports);
var React = __toESM(__webpack_require__(6689));
var import_Text = __toESM(__webpack_require__(5501));
var import_createAnimatedComponent = __toESM(__webpack_require__(8068));
var AnimatedText_default = (0, import_createAnimatedComponent.default)(import_Text.default);
//# sourceMappingURL=AnimatedText.js.map


/***/ }),

/***/ 7715:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedView_exports = {};
__export(AnimatedView_exports, {
  default: () => AnimatedView_default
});
module.exports = __toCommonJS(AnimatedView_exports);
var React = __toESM(__webpack_require__(6689));
var import_View = __toESM(__webpack_require__(6691));
var import_createAnimatedComponent = __toESM(__webpack_require__(8068));
var AnimatedView_default = (0, import_createAnimatedComponent.default)(import_View.default);
//# sourceMappingURL=AnimatedView.js.map


/***/ }),

/***/ 8068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var createAnimatedComponent_exports = {};
__export(createAnimatedComponent_exports, {
  default: () => createAnimatedComponent
});
module.exports = __toCommonJS(createAnimatedComponent_exports);
var React = __toESM(__webpack_require__(6689));
var import_react_native_web_internals = __webpack_require__(2161);
var import_useAnimatedProps = __toESM(__webpack_require__(2408));
function createAnimatedComponent(Component) {
  return /* @__PURE__ */ React.forwardRef((props, forwardedRef) => {
    var _useAnimatedProps = (0, import_useAnimatedProps.default)(props), reducedProps = _useAnimatedProps[0], callbackRef = _useAnimatedProps[1];
    var ref = (0, import_react_native_web_internals.useMergeRefs)(callbackRef, forwardedRef);
    var passthroughAnimatedPropExplicitValues = reducedProps.passthroughAnimatedPropExplicitValues, style = reducedProps.style;
    var _ref = passthroughAnimatedPropExplicitValues !== null && passthroughAnimatedPropExplicitValues !== void 0 ? passthroughAnimatedPropExplicitValues : {};
    const { passthroughStyle, ...passthroughProps } = _ref;
    var mergedStyle = [style, passthroughStyle];
    return /* @__PURE__ */ React.createElement(Component, {
      ...reducedProps,
      ...passthroughProps,
      style: mergedStyle,
      ref
    });
  });
}
//# sourceMappingURL=createAnimatedComponent.js.map


/***/ }),

/***/ 6698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedAddition_exports = {};
__export(AnimatedAddition_exports, {
  default: () => AnimatedAddition_default
});
module.exports = __toCommonJS(AnimatedAddition_exports);
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedAddition extends import_AnimatedWithChildren.default {
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new import_AnimatedValue.default(a) : a;
    this._b = typeof b === "number" ? new import_AnimatedValue.default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() + this._b.__getValue();
  }
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "addition",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
}
var AnimatedAddition_default = AnimatedAddition;
//# sourceMappingURL=AnimatedAddition.js.map


/***/ }),

/***/ 8882:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedColor_exports = {};
__export(AnimatedColor_exports, {
  default: () => AnimatedColor
});
module.exports = __toCommonJS(AnimatedColor_exports);
var import_normalize_css_color = __toESM(__webpack_require__(4306));
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
var NativeAnimatedAPI = import_NativeAnimatedHelper.default.API;
var defaultColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
var _uniqueId = 1;
var processColorObject = (color) => {
  return color;
};
function processColor(color) {
  if (color === void 0 || color === null) {
    return null;
  }
  if (isRgbaValue(color)) {
    return color;
  }
  var normalizedColor = (0, import_normalize_css_color.default)(
    // $FlowIgnore[incompatible-cast] - Type is verified above
    color
  );
  if (normalizedColor === void 0 || normalizedColor === null) {
    return null;
  }
  if (typeof normalizedColor === "object") {
    var processedColorObj = processColorObject(normalizedColor);
    if (processedColorObj != null) {
      return processedColorObj;
    }
  } else if (typeof normalizedColor === "number") {
    var r = (normalizedColor & 4278190080) >>> 24;
    var g = (normalizedColor & 16711680) >>> 16;
    var b = (normalizedColor & 65280) >>> 8;
    var a = (normalizedColor & 255) / 255;
    return {
      r,
      g,
      b,
      a
    };
  }
  return null;
}
function isRgbaValue(value) {
  return value && typeof value.r === "number" && typeof value.g === "number" && typeof value.b === "number" && typeof value.a === "number";
}
function isRgbaAnimatedValue(value) {
  return value && value.r instanceof import_AnimatedValue.default && value.g instanceof import_AnimatedValue.default && value.b instanceof import_AnimatedValue.default && value.a instanceof import_AnimatedValue.default;
}
class AnimatedColor extends import_AnimatedWithChildren.default {
  constructor(valueIn, config) {
    super();
    this._listeners = {};
    var value = valueIn !== null && valueIn !== void 0 ? valueIn : defaultColor;
    if (isRgbaAnimatedValue(value)) {
      var rgbaAnimatedValue = value;
      this.r = rgbaAnimatedValue.r;
      this.g = rgbaAnimatedValue.g;
      this.b = rgbaAnimatedValue.b;
      this.a = rgbaAnimatedValue.a;
    } else {
      var _processColor;
      var processedColor = (
        // $FlowIgnore[incompatible-cast] - Type is verified above
        (_processColor = processColor(value)) !== null && _processColor !== void 0 ? _processColor : defaultColor
      );
      var initColor = defaultColor;
      if (isRgbaValue(processedColor)) {
        initColor = processedColor;
      } else {
        this.nativeColor = processedColor;
      }
      this.r = new import_AnimatedValue.default(initColor.r);
      this.g = new import_AnimatedValue.default(initColor.g);
      this.b = new import_AnimatedValue.default(initColor.b);
      this.a = new import_AnimatedValue.default(initColor.a);
    }
    if (this.nativeColor || config && config.useNativeDriver) {
      this.__makeNative();
    }
  }
  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   */
  setValue(value) {
    var _processColor2;
    var shouldUpdateNodeConfig = false;
    if (this.__isNative) {
      var nativeTag = this.__getNativeTag();
      NativeAnimatedAPI.setWaitingForIdentifier(nativeTag.toString());
    }
    var processedColor = (_processColor2 = processColor(value)) !== null && _processColor2 !== void 0 ? _processColor2 : defaultColor;
    if (isRgbaValue(processedColor)) {
      var rgbaValue = processedColor;
      this.r.setValue(rgbaValue.r);
      this.g.setValue(rgbaValue.g);
      this.b.setValue(rgbaValue.b);
      this.a.setValue(rgbaValue.a);
      if (this.nativeColor != null) {
        this.nativeColor = null;
        shouldUpdateNodeConfig = true;
      }
    } else {
      var nativeColor = processedColor;
      if (this.nativeColor !== nativeColor) {
        this.nativeColor = nativeColor;
        shouldUpdateNodeConfig = true;
      }
    }
    if (this.__isNative) {
      var _nativeTag = this.__getNativeTag();
      if (shouldUpdateNodeConfig) {
        NativeAnimatedAPI.updateAnimatedNodeConfig(_nativeTag, this.__getNativeConfig());
      }
      NativeAnimatedAPI.unsetWaitingForIdentifier(_nativeTag.toString());
    }
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   */
  setOffset(offset) {
    this.r.setOffset(offset.r);
    this.g.setOffset(offset.g);
    this.b.setOffset(offset.b);
    this.a.setOffset(offset.a);
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   */
  flattenOffset() {
    this.r.flattenOffset();
    this.g.flattenOffset();
    this.b.flattenOffset();
    this.a.flattenOffset();
  }
  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   */
  extractOffset() {
    this.r.extractOffset();
    this.g.extractOffset();
    this.b.extractOffset();
    this.a.extractOffset();
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   */
  addListener(callback) {
    var id = String(_uniqueId++);
    var jointCallback = (_ref) => {
      var number = _ref.value;
      callback(this.__getValue());
    };
    this._listeners[id] = {
      r: this.r.addListener(jointCallback),
      g: this.g.addListener(jointCallback),
      b: this.b.addListener(jointCallback),
      a: this.a.addListener(jointCallback)
    };
    return id;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   */
  removeListener(id) {
    this.r.removeListener(this._listeners[id].r);
    this.g.removeListener(this._listeners[id].g);
    this.b.removeListener(this._listeners[id].b);
    this.a.removeListener(this._listeners[id].a);
    delete this._listeners[id];
  }
  /**
   * Remove all registered listeners.
   */
  removeAllListeners() {
    this.r.removeAllListeners();
    this.g.removeAllListeners();
    this.b.removeAllListeners();
    this.a.removeAllListeners();
    this._listeners = {};
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   */
  stopAnimation(callback) {
    this.r.stopAnimation();
    this.g.stopAnimation();
    this.b.stopAnimation();
    this.a.stopAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Stops any animation and resets the value to its original.
   */
  resetAnimation(callback) {
    this.r.resetAnimation();
    this.g.resetAnimation();
    this.b.resetAnimation();
    this.a.resetAnimation();
    callback && callback(this.__getValue());
  }
  __getValue() {
    if (this.nativeColor != null) {
      return this.nativeColor;
    } else {
      return "rgba(" + this.r.__getValue() + ", " + this.g.__getValue() + ", " + this.b.__getValue() + ", " + this.a.__getValue() + ")";
    }
  }
  __attach() {
    this.r.__addChild(this);
    this.g.__addChild(this);
    this.b.__addChild(this);
    this.a.__addChild(this);
    super.__attach();
  }
  __detach() {
    this.r.__removeChild(this);
    this.g.__removeChild(this);
    this.b.__removeChild(this);
    this.a.__removeChild(this);
    super.__detach();
  }
  __makeNative(platformConfig) {
    this.r.__makeNative(platformConfig);
    this.g.__makeNative(platformConfig);
    this.b.__makeNative(platformConfig);
    this.a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getNativeConfig() {
    return {
      type: "color",
      r: this.r.__getNativeTag(),
      g: this.g.__getNativeTag(),
      b: this.b.__getNativeTag(),
      a: this.a.__getNativeTag(),
      nativeColor: this.nativeColor
    };
  }
}
//# sourceMappingURL=AnimatedColor.js.map


/***/ }),

/***/ 8696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedDiffClamp_exports = {};
__export(AnimatedDiffClamp_exports, {
  default: () => AnimatedDiffClamp_default
});
module.exports = __toCommonJS(AnimatedDiffClamp_exports);
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedDiffClamp extends import_AnimatedWithChildren.default {
  constructor(a, min, max) {
    super();
    this._a = a;
    this._min = min;
    this._max = max;
    this._value = this._lastValue = this._a.__getValue();
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  __getValue() {
    var value = this._a.__getValue();
    var diff = value - this._lastValue;
    this._lastValue = value;
    this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
    return this._value;
  }
  __attach() {
    this._a.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "diffclamp",
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max
    };
  }
}
var AnimatedDiffClamp_default = AnimatedDiffClamp;
//# sourceMappingURL=AnimatedDiffClamp.js.map


/***/ }),

/***/ 2490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedDivision_exports = {};
__export(AnimatedDivision_exports, {
  default: () => AnimatedDivision_default
});
module.exports = __toCommonJS(AnimatedDivision_exports);
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedDivision extends import_AnimatedWithChildren.default {
  constructor(a, b) {
    super();
    this._warnedAboutDivideByZero = false;
    if (b === 0 || b instanceof import_AnimatedNode.default && b.__getValue() === 0) {
      console.error("Detected potential division by zero in AnimatedDivision");
    }
    this._a = typeof a === "number" ? new import_AnimatedValue.default(a) : a;
    this._b = typeof b === "number" ? new import_AnimatedValue.default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    var a = this._a.__getValue();
    var b = this._b.__getValue();
    if (b === 0) {
      if (!this._warnedAboutDivideByZero) {
        console.error("Detected division by zero in AnimatedDivision");
        this._warnedAboutDivideByZero = true;
      }
      return 0;
    }
    this._warnedAboutDivideByZero = false;
    return a / b;
  }
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "division",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
}
var AnimatedDivision_default = AnimatedDivision;
//# sourceMappingURL=AnimatedDivision.js.map


/***/ }),

/***/ 5718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedInterpolation_exports = {};
__export(AnimatedInterpolation_exports, {
  default: () => AnimatedInterpolation_default
});
module.exports = __toCommonJS(AnimatedInterpolation_exports);
var import_normalize_css_color = __toESM(__webpack_require__(4306));
var import_react_native_web_internals = __webpack_require__(2161);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
var __DEV__ = "production" !== "production";
var linear = (t) => t;
function createInterpolation(config) {
  if (config.outputRange && typeof config.outputRange[0] === "string") {
    return createInterpolationFromStringOutputRange(config);
  }
  var outputRange = config.outputRange;
  var inputRange = config.inputRange;
  if (__DEV__) {
    checkInfiniteRange("outputRange", outputRange);
    checkInfiniteRange("inputRange", inputRange);
    checkValidInputRange(inputRange);
    (0, import_react_native_web_internals.invariant)(
      inputRange.length === outputRange.length,
      "inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length"
    );
  }
  var easing = config.easing || linear;
  var extrapolateLeft = "extend";
  if (config.extrapolateLeft !== void 0) {
    extrapolateLeft = config.extrapolateLeft;
  } else if (config.extrapolate !== void 0) {
    extrapolateLeft = config.extrapolate;
  }
  var extrapolateRight = "extend";
  if (config.extrapolateRight !== void 0) {
    extrapolateRight = config.extrapolateRight;
  } else if (config.extrapolate !== void 0) {
    extrapolateRight = config.extrapolate;
  }
  return (input) => {
    (0, import_react_native_web_internals.invariant)(
      typeof input === "number",
      "Cannot interpolation an input which is not a number"
    );
    var range = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range],
      inputRange[range + 1],
      outputRange[range],
      outputRange[range + 1],
      easing,
      extrapolateLeft,
      extrapolateRight
    );
  };
}
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
  var result = input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    } else if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "extend") {
    }
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    } else if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "extend") {
    }
  }
  if (outputMin === outputMax) {
    return outputMin;
  }
  if (inputMin === inputMax) {
    if (input <= inputMin) {
      return outputMin;
    }
    return outputMax;
  }
  if (inputMin === -Infinity) {
    result = -result;
  } else if (inputMax === Infinity) {
    result = result - inputMin;
  } else {
    result = (result - inputMin) / (inputMax - inputMin);
  }
  result = easing(result);
  if (outputMin === -Infinity) {
    result = -result;
  } else if (outputMax === Infinity) {
    result = result + outputMin;
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }
  return result;
}
function colorToRgba(input) {
  var normalizedColor = (0, import_normalize_css_color.default)(input);
  if (normalizedColor === null || typeof normalizedColor !== "number") {
    return input;
  }
  normalizedColor = normalizedColor || 0;
  var r = (normalizedColor & 4278190080) >>> 24;
  var g = (normalizedColor & 16711680) >>> 16;
  var b = (normalizedColor & 65280) >>> 8;
  var a = (normalizedColor & 255) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
var stringShapeRegex = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
function createInterpolationFromStringOutputRange(config) {
  var outputRange = config.outputRange;
  (0, import_react_native_web_internals.invariant)(outputRange.length >= 2, "Bad output range");
  outputRange = outputRange.map(colorToRgba);
  checkPattern(outputRange);
  var outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach((value) => {
    value.match(stringShapeRegex).forEach((number, i) => {
      outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return createInterpolation({
      ...config,
      outputRange: outputRanges[i]
    });
  });
  var shouldRound = isRgbOrRgba(outputRange[0]);
  return (input) => {
    var i = 0;
    return outputRange[0].replace(stringShapeRegex, () => {
      var val = +interpolations[i++](input);
      if (shouldRound) {
        val = i < 4 ? Math.round(val) : Math.round(val * 1e3) / 1e3;
      }
      return String(val);
    });
  };
}
function isRgbOrRgba(range) {
  return typeof range === "string" && range.startsWith("rgb");
}
function checkPattern(arr) {
  var pattern = arr[0].replace(stringShapeRegex, "");
  for (var i = 1; i < arr.length; ++i) {
    (0, import_react_native_web_internals.invariant)(
      pattern === arr[i].replace(stringShapeRegex, ""),
      "invalid pattern " + arr[0] + " and " + arr[i]
    );
  }
}
function findRange(input, inputRange) {
  var i;
  for (i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }
  return i - 1;
}
function checkValidInputRange(arr) {
  (0, import_react_native_web_internals.invariant)(arr.length >= 2, "inputRange must have at least 2 elements");
  var message = "inputRange must be monotonically non-decreasing " + String(arr);
  for (var i = 1; i < arr.length; ++i) {
    (0, import_react_native_web_internals.invariant)(arr[i] >= arr[i - 1], message);
  }
}
function checkInfiniteRange(name, arr) {
  (0, import_react_native_web_internals.invariant)(arr.length >= 2, name + " must have at least 2 elements");
  (0, import_react_native_web_internals.invariant)(
    arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity,
    /* $FlowFixMe[incompatible-type] (>=0.13.0) - In the addition expression
     * below this comment, one or both of the operands may be something that
     * doesn't cleanly convert to a string, like undefined, null, and object,
     * etc. If you really mean this implicit string conversion, you can do
     * something like String(myThing) */
    name + "cannot be ]-infinity;+infinity[ " + arr
  );
}
class AnimatedInterpolation extends import_AnimatedWithChildren.default {
  // Export for testing.
  constructor(parent, config) {
    super();
    this._parent = parent;
    this._config = config;
    this._interpolation = createInterpolation(config);
  }
  __makeNative(platformConfig) {
    this._parent.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    var parentValue = this._parent.__getValue();
    (0, import_react_native_web_internals.invariant)(
      typeof parentValue === "number",
      "Cannot interpolate an input which is not a number."
    );
    return this._interpolation(parentValue);
  }
  interpolate(config) {
    return new AnimatedInterpolation(this, config);
  }
  __attach() {
    this._parent.__addChild(this);
  }
  __detach() {
    this._parent.__removeChild(this);
    super.__detach();
  }
  __transformDataType(range) {
    return range.map(import_NativeAnimatedHelper.default.transformDataType);
  }
  __getNativeConfig() {
    if (__DEV__) {
      import_NativeAnimatedHelper.default.validateInterpolation(this._config);
    }
    return {
      inputRange: this._config.inputRange,
      // Only the `outputRange` can contain strings so we don't need to transform `inputRange` here
      outputRange: this.__transformDataType(this._config.outputRange),
      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend",
      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend",
      type: "interpolation"
    };
  }
}
AnimatedInterpolation.__createInterpolation = createInterpolation;
var AnimatedInterpolation_default = AnimatedInterpolation;
//# sourceMappingURL=AnimatedInterpolation.js.map


/***/ }),

/***/ 1415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedModulo_exports = {};
__export(AnimatedModulo_exports, {
  default: () => AnimatedModulo_default
});
module.exports = __toCommonJS(AnimatedModulo_exports);
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedModulo extends import_AnimatedWithChildren.default {
  constructor(a, modulus) {
    super();
    this._a = a;
    this._modulus = modulus;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
  }
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  __attach() {
    this._a.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "modulus",
      input: this._a.__getNativeTag(),
      modulus: this._modulus
    };
  }
}
var AnimatedModulo_default = AnimatedModulo;
//# sourceMappingURL=AnimatedModulo.js.map


/***/ }),

/***/ 7958:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedMultiplication_exports = {};
__export(AnimatedMultiplication_exports, {
  default: () => AnimatedMultiplication_default
});
module.exports = __toCommonJS(AnimatedMultiplication_exports);
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedMultiplication extends import_AnimatedWithChildren.default {
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new import_AnimatedValue.default(a) : a;
    this._b = typeof b === "number" ? new import_AnimatedValue.default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() * this._b.__getValue();
  }
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "multiplication",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
}
var AnimatedMultiplication_default = AnimatedMultiplication;
//# sourceMappingURL=AnimatedMultiplication.js.map


/***/ }),

/***/ 5155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedNode_exports = {};
__export(AnimatedNode_exports, {
  default: () => AnimatedNode_default
});
module.exports = __toCommonJS(AnimatedNode_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var NativeAnimatedAPI = import_NativeAnimatedHelper.default.API;
var _uniqueId = 1;
class AnimatedNode {
  __attach() {
  }
  __detach() {
    if (this.__isNative && this.__nativeTag != null) {
      import_NativeAnimatedHelper.default.API.dropAnimatedNode(this.__nativeTag);
      this.__nativeTag = void 0;
    }
  }
  __getValue() {
  }
  __getAnimatedValue() {
    return this.__getValue();
  }
  __addChild(child) {
  }
  __removeChild(child) {
  }
  __getChildren() {
    return [];
  }
  /* Methods and props used by native Animated impl */
  constructor() {
    this._listeners = {};
  }
  __makeNative(platformConfig) {
    if (!this.__isNative) {
      throw new Error('This node cannot be made a "native" animated node');
    }
    this._platformConfig = platformConfig;
    if (this.hasListeners()) {
      this._startListeningToNativeValueUpdates();
    }
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to
   * synchronously read the value because it might be driven natively.
   *
   * See https://reactnative.dev/docs/animatedvalue#addlistener
   */
  addListener(callback) {
    var id = String(_uniqueId++);
    this._listeners[id] = callback;
    if (this.__isNative) {
      this._startListeningToNativeValueUpdates();
    }
    return id;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvalue#removelistener
   */
  removeListener(id) {
    delete this._listeners[id];
    if (this.__isNative && !this.hasListeners()) {
      this._stopListeningForNativeValueUpdates();
    }
  }
  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvalue#removealllisteners
   */
  removeAllListeners() {
    this._listeners = {};
    if (this.__isNative) {
      this._stopListeningForNativeValueUpdates();
    }
  }
  hasListeners() {
    return !!Object.keys(this._listeners).length;
  }
  _startListeningToNativeValueUpdates() {
    if (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) {
      return;
    }
    if (this.__shouldUpdateListenersForNewNativeTag) {
      this.__shouldUpdateListenersForNewNativeTag = false;
      this._stopListeningForNativeValueUpdates();
    }
    NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
    this.__nativeAnimatedValueListener = import_NativeAnimatedHelper.default.nativeEventEmitter.addListener(
      "onAnimatedValueUpdate",
      (data) => {
        if (data.tag !== this.__getNativeTag()) {
          return;
        }
        this.__onAnimatedValueUpdateReceived(data.value);
      }
    );
  }
  __onAnimatedValueUpdateReceived(value) {
    this.__callListeners(value);
  }
  __callListeners(value) {
    for (var _key in this._listeners) {
      this._listeners[_key]({
        value
      });
    }
  }
  _stopListeningForNativeValueUpdates() {
    if (!this.__nativeAnimatedValueListener) {
      return;
    }
    this.__nativeAnimatedValueListener.remove();
    this.__nativeAnimatedValueListener = null;
    NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
  }
  __getNativeTag() {
    var _this$__nativeTag;
    import_NativeAnimatedHelper.default.assertNativeAnimatedModule();
    (0, import_react_native_web_internals.invariant)(
      this.__isNative,
      'Attempt to get native tag from node not marked as "native"'
    );
    var nativeTag = (_this$__nativeTag = this.__nativeTag) !== null && _this$__nativeTag !== void 0 ? _this$__nativeTag : import_NativeAnimatedHelper.default.generateNewNodeTag();
    if (this.__nativeTag == null) {
      this.__nativeTag = nativeTag;
      var config = this.__getNativeConfig();
      if (this._platformConfig) {
        config.platformConfig = this._platformConfig;
      }
      import_NativeAnimatedHelper.default.API.createAnimatedNode(nativeTag, config);
      this.__shouldUpdateListenersForNewNativeTag = true;
    }
    return nativeTag;
  }
  __getNativeConfig() {
    throw new Error("This JS animated node type cannot be used as native animated node");
  }
  toJSON() {
    return this.__getValue();
  }
  __getPlatformConfig() {
    return this._platformConfig;
  }
  __setPlatformConfig(platformConfig) {
    this._platformConfig = platformConfig;
  }
}
var AnimatedNode_default = AnimatedNode;
//# sourceMappingURL=AnimatedNode.js.map


/***/ }),

/***/ 3491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedProps_exports = {};
__export(AnimatedProps_exports, {
  default: () => AnimatedProps_default
});
module.exports = __toCommonJS(AnimatedProps_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_AnimatedEvent = __webpack_require__(216);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_AnimatedStyle = __toESM(__webpack_require__(6996));
class AnimatedProps extends import_AnimatedNode.default {
  constructor(props, callback) {
    super();
    if (props.style) {
      props = { ...props, style: new import_AnimatedStyle.default(props.style) };
    }
    this._props = props;
    this._callback = callback;
    this.__attach();
  }
  __getValue() {
    var props = {};
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof import_AnimatedNode.default) {
        if (!value.__isNative || value instanceof import_AnimatedStyle.default) {
          props[key] = value.__getValue();
        }
      } else if (value instanceof import_AnimatedEvent.AnimatedEvent) {
        props[key] = value.__getHandler();
      } else {
        props[key] = value;
      }
    }
    return props;
  }
  __getAnimatedValue() {
    var props = {};
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof import_AnimatedNode.default) {
        props[key] = value.__getAnimatedValue();
      }
    }
    return props;
  }
  __attach() {
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof import_AnimatedNode.default) {
        value.__addChild(this);
      }
    }
  }
  __detach() {
    if (this.__isNative && this._animatedView) {
      this.__disconnectAnimatedView();
    }
    for (var key in this._props) {
      var value = this._props[key];
      if (value instanceof import_AnimatedNode.default) {
        value.__removeChild(this);
      }
    }
    super.__detach();
  }
  update() {
    this._callback();
  }
  __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof import_AnimatedNode.default) {
          value.__makeNative();
        }
      }
      if (this._animatedView) {
        this.__connectAnimatedView();
      }
    }
  }
  setNativeView(animatedView) {
    if (this._animatedView === animatedView) {
      return;
    }
    this._animatedView = animatedView;
    if (this.__isNative) {
      this.__connectAnimatedView();
    }
  }
  __connectAnimatedView() {
    (0, import_react_native_web_internals.invariant)(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = this._animatedView;
    (0, import_react_native_web_internals.invariant)(nativeViewTag != null, "Unable to locate attached view in the native tree");
    import_NativeAnimatedHelper.default.API.connectAnimatedNodeToView(
      this.__getNativeTag(),
      nativeViewTag
    );
  }
  __disconnectAnimatedView() {
    (0, import_react_native_web_internals.invariant)(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = this._animatedView;
    (0, import_react_native_web_internals.invariant)(nativeViewTag != null, "Unable to locate attached view in the native tree");
    import_NativeAnimatedHelper.default.API.disconnectAnimatedNodeFromView(
      this.__getNativeTag(),
      nativeViewTag
    );
  }
  __restoreDefaultValues() {
    if (this.__isNative) {
      import_NativeAnimatedHelper.default.API.restoreDefaultValues(this.__getNativeTag());
    }
  }
  __getNativeConfig() {
    var propsConfig = {};
    for (var propKey in this._props) {
      var value = this._props[propKey];
      if (value instanceof import_AnimatedNode.default) {
        value.__makeNative();
        propsConfig[propKey] = value.__getNativeTag();
      }
    }
    return {
      type: "props",
      props: propsConfig
    };
  }
}
var AnimatedProps_default = AnimatedProps;
//# sourceMappingURL=AnimatedProps.js.map


/***/ }),

/***/ 6996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedStyle_exports = {};
__export(AnimatedStyle_exports, {
  default: () => AnimatedStyle_default
});
module.exports = __toCommonJS(AnimatedStyle_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_AnimatedTransform = __toESM(__webpack_require__(9395));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
var flattenStyle = import_react_native_web_internals.StyleSheet.flatten;
function createAnimatedStyle(inputStyle) {
  var style = flattenStyle(inputStyle);
  var animatedStyles = {};
  for (var key in style) {
    var value = style[key];
    if (key === "transform") {
      animatedStyles[key] = new import_AnimatedTransform.default(value);
    } else if (value instanceof import_AnimatedNode.default) {
      animatedStyles[key] = value;
    } else if (value && !Array.isArray(value) && typeof value === "object") {
      animatedStyles[key] = createAnimatedStyle(value);
    }
  }
  return animatedStyles;
}
class AnimatedStyle extends import_AnimatedWithChildren.default {
  constructor(style) {
    super();
    this._inputStyle = style;
    this._style = createAnimatedStyle(style);
  }
  // Recursively get values for nested styles (like iOS's shadowOffset)
  _walkStyleAndGetValues(style) {
    var updatedStyle = {};
    for (var key in style) {
      var value = style[key];
      if (value instanceof import_AnimatedNode.default) {
        if (!value.__isNative) {
          updatedStyle[key] = value.__getValue();
        }
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        updatedStyle[key] = this._walkStyleAndGetValues(value);
      } else {
        updatedStyle[key] = value;
      }
    }
    return updatedStyle;
  }
  __getValue() {
    return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
  }
  // Recursively get animated values for nested styles (like iOS's shadowOffset)
  _walkStyleAndGetAnimatedValues(style) {
    var updatedStyle = {};
    for (var key in style) {
      var value = style[key];
      if (value instanceof import_AnimatedNode.default) {
        updatedStyle[key] = value.__getAnimatedValue();
      } else if (value && !Array.isArray(value) && typeof value === "object") {
        updatedStyle[key] = this._walkStyleAndGetAnimatedValues(value);
      }
    }
    return updatedStyle;
  }
  __getAnimatedValue() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  }
  __attach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof import_AnimatedNode.default) {
        value.__addChild(this);
      }
    }
  }
  __detach() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof import_AnimatedNode.default) {
        value.__removeChild(this);
      }
    }
    super.__detach();
  }
  __makeNative() {
    for (var key in this._style) {
      var value = this._style[key];
      if (value instanceof import_AnimatedNode.default) {
        value.__makeNative();
      }
    }
    super.__makeNative();
  }
  __getNativeConfig() {
    var styleConfig = {};
    for (var styleKey in this._style) {
      if (this._style[styleKey] instanceof import_AnimatedNode.default) {
        var style = this._style[styleKey];
        style.__makeNative();
        styleConfig[styleKey] = style.__getNativeTag();
      }
    }
    import_NativeAnimatedHelper.default.validateStyles(styleConfig);
    return {
      type: "style",
      style: styleConfig
    };
  }
}
var AnimatedStyle_default = AnimatedStyle;
//# sourceMappingURL=AnimatedStyle.js.map


/***/ }),

/***/ 1923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedSubtraction_exports = {};
__export(AnimatedSubtraction_exports, {
  default: () => AnimatedSubtraction_default
});
module.exports = __toCommonJS(AnimatedSubtraction_exports);
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedSubtraction extends import_AnimatedWithChildren.default {
  constructor(a, b) {
    super();
    this._a = typeof a === "number" ? new import_AnimatedValue.default(a) : a;
    this._b = typeof b === "number" ? new import_AnimatedValue.default(b) : b;
  }
  __makeNative(platformConfig) {
    this._a.__makeNative(platformConfig);
    this._b.__makeNative(platformConfig);
    super.__makeNative(platformConfig);
  }
  __getValue() {
    return this._a.__getValue() - this._b.__getValue();
  }
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  __attach() {
    this._a.__addChild(this);
    this._b.__addChild(this);
  }
  __detach() {
    this._a.__removeChild(this);
    this._b.__removeChild(this);
    super.__detach();
  }
  __getNativeConfig() {
    return {
      type: "subtraction",
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  }
}
var AnimatedSubtraction_default = AnimatedSubtraction;
//# sourceMappingURL=AnimatedSubtraction.js.map


/***/ }),

/***/ 7656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedTracking_exports = {};
__export(AnimatedTracking_exports, {
  default: () => AnimatedTracking_default
});
module.exports = __toCommonJS(AnimatedTracking_exports);
var import_NativeAnimatedHelper = __webpack_require__(2011);
var import_AnimatedNode = __toESM(__webpack_require__(5155));
class AnimatedTracking extends import_AnimatedNode.default {
  constructor(value, parent, animationClass, animationConfig, callback) {
    super();
    this._value = value;
    this._parent = parent;
    this._animationClass = animationClass;
    this._animationConfig = animationConfig;
    this._useNativeDriver = (0, import_NativeAnimatedHelper.shouldUseNativeDriver)(animationConfig);
    this._callback = callback;
    this.__attach();
  }
  __makeNative() {
    this.__isNative = true;
    this._parent.__makeNative();
    super.__makeNative();
    this._value.__makeNative();
  }
  __getValue() {
    return this._parent.__getValue();
  }
  __attach() {
    this._parent.__addChild(this);
    if (this._useNativeDriver) {
      this.__makeNative();
    }
  }
  __detach() {
    this._parent.__removeChild(this);
    super.__detach();
  }
  update() {
    this._value.animate(
      new this._animationClass({
        ...this._animationConfig,
        toValue: this._animationConfig.toValue.__getValue()
      }),
      this._callback
    );
  }
  __getNativeConfig() {
    var animation = new this._animationClass(
      _objectSpread(
        _objectSpread({}, this._animationConfig),
        {},
        {
          // remove toValue from the config as it's a ref to Animated.Value
          toValue: void 0
        }
      )
    );
    var animationConfig = animation.__getNativeAnimationConfig();
    return {
      type: "tracking",
      animationId: (0, import_NativeAnimatedHelper.generateNewAnimationId)(),
      animationConfig,
      toValue: this._parent.__getNativeTag(),
      value: this._value.__getNativeTag()
    };
  }
}
var AnimatedTracking_default = AnimatedTracking;
//# sourceMappingURL=AnimatedTracking.js.map


/***/ }),

/***/ 9395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedTransform_exports = {};
__export(AnimatedTransform_exports, {
  default: () => AnimatedTransform_default
});
module.exports = __toCommonJS(AnimatedTransform_exports);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
class AnimatedTransform extends import_AnimatedWithChildren.default {
  constructor(transforms) {
    super();
    this._transforms = transforms;
  }
  __makeNative() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof import_AnimatedNode.default) {
          value.__makeNative();
        }
      }
    });
    super.__makeNative();
  }
  __getValue() {
    return this._transforms.map((transform) => {
      var result = {};
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof import_AnimatedNode.default) {
          result[key] = value.__getValue();
        } else {
          result[key] = value;
        }
      }
      return result;
    });
  }
  __getAnimatedValue() {
    return this._transforms.map((transform) => {
      var result = {};
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof import_AnimatedNode.default) {
          result[key] = value.__getAnimatedValue();
        } else {
          result[key] = value;
        }
      }
      return result;
    });
  }
  __attach() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof import_AnimatedNode.default) {
          value.__addChild(this);
        }
      }
    });
  }
  __detach() {
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof import_AnimatedNode.default) {
          value.__removeChild(this);
        }
      }
    });
    super.__detach();
  }
  __getNativeConfig() {
    var transConfigs = [];
    this._transforms.forEach((transform) => {
      for (var key in transform) {
        var value = transform[key];
        if (value instanceof import_AnimatedNode.default) {
          transConfigs.push({
            type: "animated",
            property: key,
            nodeTag: value.__getNativeTag()
          });
        } else {
          transConfigs.push({
            type: "static",
            property: key,
            value: import_NativeAnimatedHelper.default.transformDataType(value)
          });
        }
      }
    });
    import_NativeAnimatedHelper.default.validateTransform(transConfigs);
    return {
      type: "transform",
      transforms: transConfigs
    };
  }
}
var AnimatedTransform_default = AnimatedTransform;
//# sourceMappingURL=AnimatedTransform.js.map


/***/ }),

/***/ 8504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedValue_exports = {};
__export(AnimatedValue_exports, {
  default: () => AnimatedValue_default
});
module.exports = __toCommonJS(AnimatedValue_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedInterpolation = __toESM(__webpack_require__(5718));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
var NativeAnimatedAPI = import_NativeAnimatedHelper.default.API;
function _flush(rootNode) {
  var animatedStyles = /* @__PURE__ */ new Set();
  function findAnimatedStyles(node) {
    if (typeof node.update === "function") {
      animatedStyles.add(node);
    } else {
      node.__getChildren().forEach(findAnimatedStyles);
    }
  }
  findAnimatedStyles(rootNode);
  animatedStyles.forEach((animatedStyle) => animatedStyle.update());
}
function _executeAsAnimatedBatch(id, operation) {
  NativeAnimatedAPI.setWaitingForIdentifier(id);
  operation();
  NativeAnimatedAPI.unsetWaitingForIdentifier(id);
}
class AnimatedValue extends import_AnimatedWithChildren.default {
  constructor(value, config) {
    super();
    if (typeof value !== "number") {
      throw new Error("AnimatedValue: Attempting to set value to undefined");
    }
    this._startingValue = this._value = value;
    this._offset = 0;
    this._animation = null;
    if (config && config.useNativeDriver) {
      this.__makeNative();
    }
  }
  __detach() {
    if (this.__isNative) {
      NativeAnimatedAPI.getValue(this.__getNativeTag(), (value) => {
        this._value = value - this._offset;
      });
    }
    this.stopAnimation();
    super.__detach();
  }
  __getValue() {
    return this._value + this._offset;
  }
  /**
   * Directly set the value.  This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvalue#setvalue
   */
  setValue(value) {
    if (this._animation) {
      this._animation.stop();
      this._animation = null;
    }
    this._updateValue(
      value,
      !this.__isNative
      /* don't perform a flush for natively driven values */
    );
    if (this.__isNative) {
      _executeAsAnimatedBatch(
        this.__getNativeTag().toString(),
        () => NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), value)
      );
    }
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether via
   * `setValue`, an animation, or `Animated.event`.  Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvalue#setoffset
   */
  setOffset(offset) {
    this._offset = offset;
    if (this.__isNative) {
      NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(), offset);
    }
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue#flattenoffset
   */
  flattenOffset() {
    this._value += this._offset;
    this._offset = 0;
    if (this.__isNative) {
      NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());
    }
  }
  /**
   * Sets the offset value to the base value, and resets the base value to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvalue#extractoffset
   */
  extractOffset() {
    this._offset += this._value;
    this._value = 0;
    if (this.__isNative) {
      NativeAnimatedAPI.extractAnimatedNodeOffset(this.__getNativeTag());
    }
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvalue#stopanimation
   */
  stopAnimation(callback) {
    this.stopTracking();
    this._animation && this._animation.stop();
    this._animation = null;
    if (callback) {
      if (this.__isNative) {
        NativeAnimatedAPI.getValue(this.__getNativeTag(), callback);
      } else {
        callback(this.__getValue());
      }
    }
  }
  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvalue#resetanimation
   */
  resetAnimation(callback) {
    this.stopAnimation(callback);
    this._value = this._startingValue;
    if (this.__isNative) {
      NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
    }
  }
  __onAnimatedValueUpdateReceived(value) {
    this._updateValue(
      value,
      false
      /*flush*/
    );
  }
  /**
   * Interpolates the value before updating the property, e.g. mapping 0-1 to
   * 0-10.
   */
  interpolate(config) {
    return new import_AnimatedInterpolation.default(this, config);
  }
  /**
   * Typically only used internally, but could be used by a custom Animation
   * class.
   *
   * See https://reactnative.dev/docs/animatedvalue#animate
   */
  animate(animation, callback) {
    var handle = null;
    if (animation.__isInteraction) {
      handle = import_react_native_web_internals.InteractionManager.createInteractionHandle();
    }
    var previousAnimation = this._animation;
    this._animation && this._animation.stop();
    this._animation = animation;
    animation.start(
      this._value,
      (value) => {
        this._updateValue(
          value,
          true
          /* flush */
        );
      },
      (result) => {
        this._animation = null;
        if (handle !== null) {
          import_react_native_web_internals.InteractionManager.clearInteractionHandle(handle);
        }
        callback && callback(result);
      },
      previousAnimation,
      this
    );
  }
  /**
   * Typically only used internally.
   */
  stopTracking() {
    this._tracking && this._tracking.__detach();
    this._tracking = null;
  }
  /**
   * Typically only used internally.
   */
  track(tracking) {
    this.stopTracking();
    this._tracking = tracking;
    this._tracking && this._tracking.update();
  }
  _updateValue(value, flush) {
    if (value === void 0) {
      throw new Error("AnimatedValue: Attempting to set value to undefined");
    }
    this._value = value;
    if (flush) {
      _flush(this);
    }
    super.__callListeners(this.__getValue());
  }
  __getNativeConfig() {
    return {
      type: "value",
      value: this._value,
      offset: this._offset
    };
  }
}
var AnimatedValue_default = AnimatedValue;
//# sourceMappingURL=AnimatedValue.js.map


/***/ }),

/***/ 8277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedValueXY_exports = {};
__export(AnimatedValueXY_exports, {
  default: () => AnimatedValueXY_default
});
module.exports = __toCommonJS(AnimatedValueXY_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_AnimatedValue = __toESM(__webpack_require__(8504));
var import_AnimatedWithChildren = __toESM(__webpack_require__(20));
var _uniqueId = 1;
class AnimatedValueXY extends import_AnimatedWithChildren.default {
  constructor(valueIn) {
    super();
    var value = valueIn || {
      x: 0,
      y: 0
    };
    if (typeof value.x === "number" && typeof value.y === "number") {
      this.x = new import_AnimatedValue.default(value.x);
      this.y = new import_AnimatedValue.default(value.y);
    } else {
      (0, import_react_native_web_internals.invariant)(
        value.x instanceof import_AnimatedValue.default && value.y instanceof import_AnimatedValue.default,
        "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues."
      );
      this.x = value.x;
      this.y = value.y;
    }
    this._listeners = {};
  }
  /**
   * Directly set the value. This will stop any animations running on the value
   * and update all the bound properties.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setvalue
   */
  setValue(value) {
    this.x.setValue(value.x);
    this.y.setValue(value.y);
  }
  /**
   * Sets an offset that is applied on top of whatever value is set, whether
   * via `setValue`, an animation, or `Animated.event`. Useful for compensating
   * things like the start of a pan gesture.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#setoffset
   */
  setOffset(offset) {
    this.x.setOffset(offset.x);
    this.y.setOffset(offset.y);
  }
  /**
   * Merges the offset value into the base value and resets the offset to zero.
   * The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#flattenoffset
   */
  flattenOffset() {
    this.x.flattenOffset();
    this.y.flattenOffset();
  }
  /**
   * Sets the offset value to the base value, and resets the base value to
   * zero. The final output of the value is unchanged.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#extractoffset
   */
  extractOffset() {
    this.x.extractOffset();
    this.y.extractOffset();
  }
  __getValue() {
    return {
      x: this.x.__getValue(),
      y: this.y.__getValue()
    };
  }
  /**
   * Stops any animation and resets the value to its original.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#resetanimation
   */
  resetAnimation(callback) {
    this.x.resetAnimation();
    this.y.resetAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Stops any running animation or tracking. `callback` is invoked with the
   * final value after stopping the animation, which is useful for updating
   * state to match the animation position with layout.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#stopanimation
   */
  stopAnimation(callback) {
    this.x.stopAnimation();
    this.y.stopAnimation();
    callback && callback(this.__getValue());
  }
  /**
   * Adds an asynchronous listener to the value so you can observe updates from
   * animations.  This is useful because there is no way to synchronously read
   * the value because it might be driven natively.
   *
   * Returns a string that serves as an identifier for the listener.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#addlistener
   */
  addListener(callback) {
    var id = String(_uniqueId++);
    var jointCallback = (_ref) => {
      var number = _ref.value;
      callback(this.__getValue());
    };
    this._listeners[id] = {
      x: this.x.addListener(jointCallback),
      y: this.y.addListener(jointCallback)
    };
    return id;
  }
  /**
   * Unregister a listener. The `id` param shall match the identifier
   * previously returned by `addListener()`.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removelistener
   */
  removeListener(id) {
    this.x.removeListener(this._listeners[id].x);
    this.y.removeListener(this._listeners[id].y);
    delete this._listeners[id];
  }
  /**
   * Remove all registered listeners.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#removealllisteners
   */
  removeAllListeners() {
    this.x.removeAllListeners();
    this.y.removeAllListeners();
    this._listeners = {};
  }
  /**
   * Converts `{x, y}` into `{left, top}` for use in style.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#getlayout
   */
  getLayout() {
    return {
      left: this.x,
      top: this.y
    };
  }
  /**
   * Converts `{x, y}` into a useable translation transform.
   *
   * See https://reactnative.dev/docs/animatedvaluexy.html#gettranslatetransform
   */
  getTranslateTransform() {
    return [
      {
        translateX: this.x
      },
      {
        translateY: this.y
      }
    ];
  }
}
var AnimatedValueXY_default = AnimatedValueXY;
//# sourceMappingURL=AnimatedValueXY.js.map


/***/ }),

/***/ 20:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var AnimatedWithChildren_exports = {};
__export(AnimatedWithChildren_exports, {
  default: () => AnimatedWithChildren_default
});
module.exports = __toCommonJS(AnimatedWithChildren_exports);
var import_createForOfIteratorHelperLoose = __toESM(__webpack_require__(3173));
var import_AnimatedNode = __toESM(__webpack_require__(5155));
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
class AnimatedWithChildren extends import_AnimatedNode.default {
  constructor() {
    super();
    this._children = [];
  }
  __makeNative(platformConfig) {
    if (!this.__isNative) {
      this.__isNative = true;
      for (var _iterator = (0, import_createForOfIteratorHelperLoose.default)(this._children), _step; !(_step = _iterator()).done; ) {
        var child = _step.value;
        child.__makeNative(platformConfig);
        import_NativeAnimatedHelper.default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
    }
    super.__makeNative(platformConfig);
  }
  __addChild(child) {
    if (this._children.length === 0) {
      this.__attach();
    }
    this._children.push(child);
    if (this.__isNative) {
      child.__makeNative(this.__getPlatformConfig());
      import_NativeAnimatedHelper.default.API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
  }
  __removeChild(child) {
    var index = this._children.indexOf(child);
    if (index === -1) {
      console.warn("Trying to remove a child that doesn't exist");
      return;
    }
    if (this.__isNative && child.__isNative) {
      import_NativeAnimatedHelper.default.API.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
    this._children.splice(index, 1);
    if (this._children.length === 0) {
      this.__detach();
    }
  }
  __getChildren() {
    return this._children;
  }
  __callListeners(value) {
    super.__callListeners(value);
    if (!this.__isNative) {
      for (var _iterator2 = (0, import_createForOfIteratorHelperLoose.default)(this._children), _step2; !(_step2 = _iterator2()).done; ) {
        var child = _step2.value;
        if (child.__getValue) {
          child.__callListeners(child.__getValue());
        }
      }
    }
  }
}
var AnimatedWithChildren_default = AnimatedWithChildren;
//# sourceMappingURL=AnimatedWithChildren.js.map


/***/ }),

/***/ 2408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var useAnimatedProps_exports = {};
__export(useAnimatedProps_exports, {
  default: () => useAnimatedProps
});
module.exports = __toCommonJS(useAnimatedProps_exports);
var import_createForOfIteratorHelperLoose = __toESM(__webpack_require__(3173));
var import_react = __webpack_require__(6689);
var import_useRefEffect = __toESM(__webpack_require__(9428));
var import_AnimatedEvent = __webpack_require__(216);
var import_NativeAnimatedHelper = __toESM(__webpack_require__(2011));
var import_AnimatedProps = __toESM(__webpack_require__(3491));
const useLayoutEffect = typeof window === "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
function useAnimatedProps(props) {
  var _useReducer = (0, import_react.useReducer)((count) => count + 1, 0), scheduleUpdate = _useReducer[1];
  var onUpdateRef = (0, import_react.useRef)(null);
  var node = (0, import_react.useMemo)(
    () => new import_AnimatedProps.default(
      props,
      () => onUpdateRef.current == null ? void 0 : onUpdateRef.current()
    ),
    [props]
  );
  useAnimatedPropsLifecycle(node);
  var refEffect = (0, import_react.useCallback)(
    (instance) => {
      node.setNativeView(instance);
      onUpdateRef.current = () => {
        (0, import_react.startTransition)(() => {
          scheduleUpdate();
        });
      };
      var target = getEventTarget(instance);
      var events = [];
      for (var propName in props) {
        var propValue = props[propName];
        if (propValue instanceof import_AnimatedEvent.AnimatedEvent && propValue.__isNative) {
          propValue.__attach(target, propName);
          events.push([propName, propValue]);
        }
      }
      return () => {
        onUpdateRef.current = null;
        for (var _iterator = (0, import_createForOfIteratorHelperLoose.default)(events), _step; !(_step = _iterator()).done; ) {
          var _step$value = _step.value, _propName = _step$value[0], _propValue = _step$value[1];
          _propValue.__detach(target, _propName);
        }
      };
    },
    [props, node]
  );
  var callbackRef = (0, import_useRefEffect.default)(refEffect);
  return [reduceAnimatedProps(node), callbackRef];
}
function reduceAnimatedProps(node) {
  return {
    ...node.__getValue(),
    collapsable: false
  };
}
function useAnimatedPropsLifecycle(node) {
  var prevNodeRef = (0, import_react.useRef)(null);
  var isUnmountingRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    import_NativeAnimatedHelper.default.API.flushQueue();
  });
  useLayoutEffect(() => {
    isUnmountingRef.current = false;
    return () => {
      isUnmountingRef.current = true;
    };
  }, []);
  useLayoutEffect(() => {
    node.__attach();
    if (prevNodeRef.current != null) {
      var prevNode = prevNodeRef.current;
      prevNode.__restoreDefaultValues();
      prevNode.__detach();
      prevNodeRef.current = null;
    }
    return () => {
      if (isUnmountingRef.current) {
        node.__detach();
      } else {
        prevNodeRef.current = node;
      }
    };
  }, [node]);
}
function getEventTarget(instance) {
  return typeof instance === "object" && typeof (instance == null ? void 0 : instance.getScrollableNode) === "function" ? instance.getScrollableNode() : instance;
}
function isFabricInstance(instance) {
  var _instance$getScrollRe;
  return hasFabricHandle(instance) || // Some components have a setNativeProps function but aren't a host component
  // such as lists like FlatList and SectionList. These should also use
  // forceUpdate in Fabric since setNativeProps doesn't exist on the underlying
  // host component. This crazy hack is essentially special casing those lists and
  // ScrollView itself to use forceUpdate in Fabric.
  // If these components end up using forwardRef then these hacks can go away
  // as instance would actually be the underlying host component and the above check
  // would be sufficient.
  hasFabricHandle(
    instance == null ? void 0 : instance.getNativeScrollRef == null ? void 0 : instance.getNativeScrollRef()
  ) || hasFabricHandle(
    instance == null ? void 0 : instance.getScrollResponder == null ? void 0 : (_instance$getScrollRe = instance.getScrollResponder()) == null ? void 0 : _instance$getScrollRe.getNativeScrollRef == null ? void 0 : _instance$getScrollRe.getNativeScrollRef()
  );
}
function hasFabricHandle(instance) {
  var _instance$_internalIn, _instance$_internalIn2;
  return (instance == null ? void 0 : (_instance$_internalIn = instance["_internalInstanceHandle"]) == null ? void 0 : (_instance$_internalIn2 = _instance$_internalIn.stateNode) == null ? void 0 : _instance$_internalIn2.canonical) != null;
}
//# sourceMappingURL=useAnimatedProps.js.map


/***/ }),

/***/ 701:
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
var FeatureFlags_exports = {};
__export(FeatureFlags_exports, {
  ReactNativeFeatureFlags: () => ReactNativeFeatureFlags
});
module.exports = __toCommonJS(FeatureFlags_exports);
const ReactNativeFeatureFlags = {
  isLayoutAnimationEnabled: () => true,
  shouldEmitW3CPointerEvents: () => false,
  shouldPressibilityUseW3CPointerEventsForHover: () => false,
  animatedShouldDebounceQueueFlush: () => false,
  animatedShouldUseSingleOp: () => false,
  enableCppComponents: () => false
};
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=FeatureFlags.js.map


/***/ }),

/***/ 6664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var RCTDeviceEventEmitter_exports = {};
__export(RCTDeviceEventEmitter_exports, {
  default: () => RCTDeviceEventEmitter_default
});
module.exports = __toCommonJS(RCTDeviceEventEmitter_exports);
var import_EventEmitter = __toESM(__webpack_require__(7662));
var RCTDeviceEventEmitter_default = new import_EventEmitter.default();
//# sourceMappingURL=RCTDeviceEventEmitter.js.map


/***/ }),

/***/ 5986:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var NativeEventEmitter_exports = {};
__export(NativeEventEmitter_exports, {
  default: () => NativeEventEmitter
});
module.exports = __toCommonJS(NativeEventEmitter_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_react_native_web_internals2 = __webpack_require__(2161);
var import_RCTDeviceEventEmitter = __toESM(__webpack_require__(6664));
class NativeEventEmitter {
  constructor(nativeModule) {
    if (import_react_native_web_internals2.Platform.OS === "ios") {
      (0, import_react_native_web_internals.invariant)(
        nativeModule != null,
        "`new NativeEventEmitter()` requires a non-null argument."
      );
      this._nativeModule = nativeModule;
    }
  }
  addListener(eventType, listener, context) {
    var _this$_nativeModule;
    (_this$_nativeModule = this._nativeModule) == null ? void 0 : _this$_nativeModule.addListener(eventType);
    var subscription = import_RCTDeviceEventEmitter.default.addListener(
      eventType,
      listener,
      context
    );
    return {
      remove: () => {
        if (subscription != null) {
          var _this$_nativeModule2;
          (_this$_nativeModule2 = this._nativeModule) == null ? void 0 : _this$_nativeModule2.removeListeners(1);
          subscription.remove();
          subscription = null;
        }
      }
    };
  }
  /**
   * @deprecated Use `remove` on the EventSubscription from `addListener`.
   */
  removeListener(eventType, listener) {
    var _this$_nativeModule3;
    (_this$_nativeModule3 = this._nativeModule) == null ? void 0 : _this$_nativeModule3.removeListeners(1);
    import_RCTDeviceEventEmitter.default.removeListener(eventType, listener);
  }
  emit(eventType) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    import_RCTDeviceEventEmitter.default.emit(eventType, ...args);
  }
  removeAllListeners(eventType) {
    var _this$_nativeModule4;
    (0, import_react_native_web_internals.invariant)(
      eventType != null,
      "`NativeEventEmitter.removeAllListener()` requires a non-null argument."
    );
    (_this$_nativeModule4 = this._nativeModule) == null ? void 0 : _this$_nativeModule4.removeListeners(this.listenerCount(eventType));
    import_RCTDeviceEventEmitter.default.removeAllListeners(eventType);
  }
  listenerCount(eventType) {
    return import_RCTDeviceEventEmitter.default.listenerCount(eventType);
  }
}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 1702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var PanResponder_exports = {};
__export(PanResponder_exports, {
  default: () => PanResponder_default
});
module.exports = __toCommonJS(PanResponder_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_TouchHistoryMath = __toESM(__webpack_require__(1173));
const currentCentroidXOfTouchesChangedAfter = import_TouchHistoryMath.default.currentCentroidXOfTouchesChangedAfter;
const currentCentroidYOfTouchesChangedAfter = import_TouchHistoryMath.default.currentCentroidYOfTouchesChangedAfter;
const previousCentroidXOfTouchesChangedAfter = import_TouchHistoryMath.default.previousCentroidXOfTouchesChangedAfter;
const previousCentroidYOfTouchesChangedAfter = import_TouchHistoryMath.default.previousCentroidYOfTouchesChangedAfter;
const currentCentroidX = import_TouchHistoryMath.default.currentCentroidX;
const currentCentroidY = import_TouchHistoryMath.default.currentCentroidY;
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
          interactionState.handle = import_react_native_web_internals.InteractionManager.createInteractionHandle();
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
    import_react_native_web_internals.InteractionManager.clearInteractionHandle(interactionState.handle);
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


/***/ }),

/***/ 1173:
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
var TouchHistoryMath_exports = {};
__export(TouchHistoryMath_exports, {
  default: () => TouchHistoryMath_default
});
module.exports = __toCommonJS(TouchHistoryMath_exports);
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


/***/ }),

/***/ 9277:
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
var TurboModuleRegistry_exports = {};
__export(TurboModuleRegistry_exports, {
  get: () => get,
  getEnforcing: () => getEnforcing
});
module.exports = __toCommonJS(TurboModuleRegistry_exports);
function get(name) {
  return null;
}
function getEnforcing(name) {
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);
//# sourceMappingURL=TurboModuleRegistry.js.map


/***/ }),

/***/ 7662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var EventEmitter_exports = {};
__export(EventEmitter_exports, {
  default: () => EventEmitter_default
});
module.exports = __toCommonJS(EventEmitter_exports);
var import_EventEmitter = __toESM(__webpack_require__(2245));
var EventEmitter_default = import_EventEmitter.default;
//# sourceMappingURL=EventEmitter.js.map


/***/ }),

/***/ 2066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var EmitterSubscription_exports = {};
__export(EmitterSubscription_exports, {
  default: () => EmitterSubscription_default
});
module.exports = __toCommonJS(EmitterSubscription_exports);
var import_EventSubscription = __toESM(__webpack_require__(9776));
class EmitterSubscription extends import_EventSubscription.default {
  /**
   * @param {EventEmitter} emitter - The event emitter that registered this
   *   subscription
   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
   *   this subscription
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
  constructor(emitter, subscriber, listener, context) {
    super(subscriber);
    this.emitter = emitter;
    this.listener = listener;
    this.context = context;
  }
  /**
   * Removes this subscription from the emitter that registered it.
   * Note: we're overriding the `remove()` method of _EventSubscription here
   * but deliberately not calling `super.remove()` as the responsibility
   * for removing the subscription lies with the EventEmitter.
   */
  remove() {
    this.emitter.removeSubscription(this);
  }
}
var EmitterSubscription_default = EmitterSubscription;
//# sourceMappingURL=_EmitterSubscription.js.map


/***/ }),

/***/ 2245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

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
var EventEmitter_exports = {};
__export(EventEmitter_exports, {
  default: () => EventEmitter_default
});
module.exports = __toCommonJS(EventEmitter_exports);
var import_react_native_web_internals = __webpack_require__(2161);
var import_EmitterSubscription = __toESM(__webpack_require__(2066));
var import_EventSubscriptionVendor = __toESM(__webpack_require__(9937));
var sparseFilterPredicate = () => true;
class EventEmitter {
  /**
   * @constructor
   *
   * @param {EventSubscriptionVendor} subscriber - Optional subscriber instance
   *   to use. If omitted, a new subscriber will be created for the emitter.
   */
  constructor(subscriber = new import_EventSubscriptionVendor.default()) {
    this._subscriber = subscriber;
  }
  /**
   * Adds a listener to be invoked when events of the specified type are
   * emitted. An optional calling context may be provided. The data arguments
   * emitted will be passed to the listener function.
   *
   * TODO: Annotate the listener arg's type. This is tricky because listeners
   *       can be invoked with varargs.
   *
   * @param {string} eventType - Name of the event to listen to
   * @param {function} listener - Function to invoke when the specified event is
   *   emitted
   * @param {*} context - Optional context object to use when invoking the
   *   listener
   */
  addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(
      eventType,
      new import_EmitterSubscription.default(this, this._subscriber, listener, context)
    );
  }
  /**
   * Removes all of the registered listeners, including those registered as
   * listener maps.
   *
   * @param {?string} eventType - Optional name of the event whose registered
   *   listeners to remove
   */
  removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  }
  /**
   * @deprecated Use `remove` on the EventSubscription from `addListener`.
   */
  removeSubscription(subscription) {
    (0, import_react_native_web_internals.invariant)(
      subscription.emitter === this,
      "Subscription does not belong to this emitter."
    );
    this._subscriber.removeSubscription(subscription);
  }
  /**
   * Returns the number of listeners that are currently registered for the given
   * event.
   *
   * @param {string} eventType - Name of the event to query
   * @returns {number}
   */
  listenerCount(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    return subscriptions ? (
      // "callbackfn is called only for elements of the array which actually
      // exist; it is not called for missing elements of the array."
      // https://www.ecma-international.org/ecma-262/9.0/index.html#sec-array.prototype.filter
      subscriptions.filter(sparseFilterPredicate).length
    ) : 0;
  }
  /**
   * Emits an event of the given type with the given data. All handlers of that
   * particular type will be notified.
   *
   * @param {string} eventType - Name of the event to emit
   * @param {...*} Arbitrary arguments to be passed to each registered listener
   *
   * @example
   *   emitter.addListener('someEvent', function(message) {
   *     console.log(message);
   *   });
   *
   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
   */
  emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    if (subscriptions) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (var i = 0, l = subscriptions.length; i < l; i++) {
        var subscription = subscriptions[i];
        if (subscription && subscription.listener) {
          subscription.listener.apply(subscription.context, args);
        }
      }
    }
  }
  /**
   * @deprecated Use `remove` on the EventSubscription from `addListener`.
   */
  removeListener(eventType, listener) {
    console.error(
      "EventEmitter.removeListener('" + eventType + "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."
    );
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
    if (subscriptions) {
      for (var i = 0, l = subscriptions.length; i < l; i++) {
        var subscription = subscriptions[i];
        if (subscription && subscription.listener === listener) {
          subscription.remove();
        }
      }
    }
  }
}
var EventEmitter_default = EventEmitter;
//# sourceMappingURL=_EventEmitter.js.map


/***/ }),

/***/ 9776:
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
var EventSubscription_exports = {};
__export(EventSubscription_exports, {
  default: () => EventSubscription_default
});
module.exports = __toCommonJS(EventSubscription_exports);
class _EventSubscription {
  /**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */
  constructor(subscriber) {
    this.subscriber = subscriber;
  }
  /**
   * Removes this subscription from the subscriber that controls it.
   */
  remove() {
    this.subscriber.removeSubscription(this);
  }
}
var EventSubscription_default = _EventSubscription;
//# sourceMappingURL=_EventSubscription.js.map


/***/ }),

/***/ 9937:
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
var EventSubscriptionVendor_exports = {};
__export(EventSubscriptionVendor_exports, {
  default: () => EventSubscriptionVendor_default
});
module.exports = __toCommonJS(EventSubscriptionVendor_exports);
var import_react_native_web_internals = __webpack_require__(2161);
class EventSubscriptionVendor {
  constructor() {
    this._subscriptionsForType = {};
  }
  /**
   * Adds a subscription keyed by an event type.
   *
   * @param {string} eventType
   * @param {EventSubscription} subscription
   */
  addSubscription(eventType, subscription) {
    (0, import_react_native_web_internals.invariant)(
      subscription.subscriber === this,
      "The subscriber of the subscription is incorrectly set."
    );
    if (!this._subscriptionsForType[eventType]) {
      this._subscriptionsForType[eventType] = [];
    }
    var key = this._subscriptionsForType[eventType].length;
    this._subscriptionsForType[eventType].push(subscription);
    subscription.eventType = eventType;
    subscription.key = key;
    return subscription;
  }
  /**
   * Removes a bulk set of the subscriptions.
   *
   * @param {?string} eventType - Optional name of the event type whose
   *   registered supscriptions to remove, if null remove all subscriptions.
   */
  removeAllSubscriptions(eventType) {
    if (eventType == null) {
      this._subscriptionsForType = {};
    } else {
      delete this._subscriptionsForType[eventType];
    }
  }
  /**
   * Removes a specific subscription. Instead of calling this function, call
   * `subscription.remove()` directly.
   *
   * @param {object} subscription
   */
  removeSubscription(subscription) {
    var eventType = subscription.eventType;
    var key = subscription.key;
    var subscriptionsForType = this._subscriptionsForType[eventType];
    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  }
  /**
   * Returns the array of subscriptions that are currently registered for the
   * given event type.
   *
   * Note: This array can be potentially sparse as subscriptions are deleted
   * from it when they are removed.
   *
   * TODO: This returns a nullable array. wat?
   *
   * @param {string} eventType
   * @returns {?array}
   */
  getSubscriptionsForType(eventType) {
    return this._subscriptionsForType[eventType];
  }
}
var EventSubscriptionVendor_default = EventSubscriptionVendor;
//# sourceMappingURL=_EventSubscriptionVendor.js.map


/***/ }),

/***/ 9428:
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
var useRefEffect_exports = {};
__export(useRefEffect_exports, {
  default: () => useRefEffect
});
module.exports = __toCommonJS(useRefEffect_exports);
var import_react = __webpack_require__(6689);
function useRefEffect(effect) {
  const cleanupRef = (0, import_react.useRef)(void 0);
  return (0, import_react.useCallback)(
    (instance) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (instance != null) {
        cleanupRef.current = effect(instance);
      }
    },
    [effect]
  );
}
//# sourceMappingURL=useRefEffect.js.map


/***/ }),

/***/ 5748:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3173:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var unsupportedIterableToArray = __webpack_require__(121);
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _createForOfIteratorHelperLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(7739);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(6290);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8064:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(7425)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(7425)["default"]);
var toPrimitive = __webpack_require__(8064);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7425:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(5748);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;