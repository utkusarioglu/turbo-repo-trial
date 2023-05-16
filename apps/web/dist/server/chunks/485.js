"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 4485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "II": () => (/* binding */ Input)
});

// UNUSED EXPORTS: InputFrame, defaultStyles

// EXTERNAL MODULE: ../../node_modules/@tamagui/core/dist/cjs/index.js
var cjs = __webpack_require__(2026);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
// EXTERNAL MODULE: ../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var compose_refs = __webpack_require__(4598);
// EXTERNAL MODULE: ../../node_modules/@tamagui/web/dist/cjs/index.js
var dist_cjs = __webpack_require__(1444);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../node_modules/@tamagui/focusable/dist/jsx/registerFocusable.js
const registerFocusable = (id, input)=>()=>{};
const unregisterFocusable = (id)=>{};
const focusFocusable = (id)=>{};
 //# sourceMappingURL=registerFocusable.js.map

;// CONCATENATED MODULE: ../../node_modules/@tamagui/focusable/dist/jsx/focusableInputHOC.js





function focusableInputHOC(Component) {
    const component = Component.styleable((props, ref)=>{
        const isInput = (0,dist_cjs.isTamaguiComponent)(Component) && Component.staticConfig.isInput;
        const inputValue = (0,external_react_.useRef)(props.value || props.defaultValue || "");
        const unregisterFocusable = (0,external_react_.useRef)();
        const inputRef = (0,external_react_.useCallback)((input)=>{
            if (!props.id) return;
            if (!input) return;
            unregisterFocusable.current?.();
            unregisterFocusable.current = registerFocusable(props.id, {
                focus: input.focus,
                ...isInput && {
                    // react-native doesn't support programmatic .select()
                    focusAndSelect () {
                        input.focus();
                        if (input.setSelection && typeof inputValue.current === "string") {
                            input.setSelection(0, inputValue.current.length);
                        }
                    }
                }
            });
        }, [
            isInput,
            props.id
        ]);
        const combinedRefs = (0,compose_refs/* composeRefs */.F)(ref, inputRef);
        (0,external_react_.useEffect)(()=>{
            return ()=>{
                unregisterFocusable.current?.();
            };
        }, []);
        const onChangeText = (0,dist_cjs.useEvent)((value)=>{
            inputValue.current = value;
            props.onChangeText?.(value);
        });
        const finalProps = isInput ? {
            ...props,
            onChangeText
        } : props;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
            ref: combinedRefs,
            ...finalProps
        });
    });
    return component;
}
 //# sourceMappingURL=focusableInputHOC.js.map

// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/StyleSheet/index.js + 11 modules
var StyleSheet = __webpack_require__(2653);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/forwardedProps/index.js
var forwardedProps = __webpack_require__(6376);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/pick/index.js
var pick = __webpack_require__(3868);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/TextInputState/index.js
var TextInputState = __webpack_require__(5079);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useElementLayout/index.js + 1 modules
var useElementLayout = __webpack_require__(2505);
// EXTERNAL MODULE: ../../node_modules/@tamagui/react-native-use-responder-events/dist/esm/index.js + 6 modules
var esm = __webpack_require__(2363);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useLocale/index.js + 1 modules
var useLocale = __webpack_require__(6789);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/usePlatformMethods/index.js + 1 modules
var usePlatformMethods = __webpack_require__(2382);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/useMergeRefs/index.js
var useMergeRefs = __webpack_require__(6395);
// EXTERNAL MODULE: ../../node_modules/react-native-web-lite/dist/esm/createElement/index.js + 5 modules
var createElement = __webpack_require__(277);
;// CONCATENATED MODULE: ../../node_modules/react-native-web-lite/dist/esm/TextInput/index.js




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
  forwardedProps/* forwardedProps.defaultProps */.Tf.defaultProps,
  forwardedProps/* forwardedProps.accessibilityProps */.Tf.accessibilityProps,
  forwardedProps/* forwardedProps.clickProps */.Tf.clickProps,
  forwardedProps/* forwardedProps.focusProps */.Tf.focusProps,
  forwardedProps/* forwardedProps.keyboardProps */.Tf.keyboardProps,
  forwardedProps/* forwardedProps.mouseProps */.Tf.mouseProps,
  forwardedProps/* forwardedProps.touchProps */.Tf.touchProps,
  forwardedProps/* forwardedProps.styleProps */.Tf.styleProps,
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
const pickProps = (props) => (0,pick/* default */.Z)(props, forwardPropsList);
const useIsomorphicLayoutEffect = typeof window === "undefined" ? external_react_.useEffect : external_react_.useLayoutEffect;
function isEventComposing(nativeEvent) {
  return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}
let focusTimeout = null;
const TextInput = external_react_.forwardRef(
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
    const dimensions = external_react_.useRef({ height: null, width: null });
    const hostRef = external_react_.useRef(null);
    const handleContentSizeChange = external_react_.useCallback(
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
    const imperativeRef = external_react_.useMemo(
      () => (hostNode) => {
        if (hostNode != null) {
          hostNode.clear = function() {
            if (hostNode != null) {
              hostNode.value = "";
            }
          };
          hostNode.isFocused = function() {
            return hostNode != null && TextInputState/* default.currentlyFocusedField */.Z.currentlyFocusedField() === hostNode;
          };
          handleContentSizeChange(hostNode);
        }
      },
      [handleContentSizeChange]
    );
    function handleBlur(e) {
      TextInputState/* default._currentlyFocusedNode */.Z._currentlyFocusedNode = null;
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
        TextInputState/* default._currentlyFocusedNode */.Z._currentlyFocusedNode = hostNode;
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
        TextInputState/* default._currentlyFocusedNode */.Z._currentlyFocusedNode = node;
      }
    }, [hostRef, selection]);
    const component = multiline ? "textarea" : "input";
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
    const { direction: contextDirection } = (0,useLocale/* useLocaleContext */.PE)();
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
    const platformMethodsRef = (0,usePlatformMethods/* usePlatformMethods */.V)(supportedProps);
    const setRef = (0,useMergeRefs/* useMergeRefs */.q)(hostRef, platformMethodsRef, imperativeRef, forwardedRef);
    supportedProps.ref = setRef;
    const langDirection = props.lang != null ? (0,useLocale/* getLocaleDirection */.w1)(props.lang) : null;
    const componentDirection = props.dir || langDirection;
    const writingDirection = componentDirection || contextDirection;
    const element = (0,createElement/* default */.Z)(component, supportedProps, {
      writingDirection
    });
    return element;
  }
);
function warn(...args) {
  if (false) {}
}
TextInput.displayName = "TextInput";
TextInput.State = TextInputState/* default */.Z;
const styles = StyleSheet/* default.create */.Z.create({
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

// EXTERNAL MODULE: ../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var get_button_sized_dist_cjs = __webpack_require__(820);
// EXTERNAL MODULE: ../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var get_font_sized_dist_cjs = __webpack_require__(3862);
// EXTERNAL MODULE: ../../node_modules/@tamagui/get-size/dist/cjs/index.js
var get_size_dist_cjs = __webpack_require__(4356);
;// CONCATENATED MODULE: ../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js




const inputSizeVariant = (val = "$true", extras)=>{
    if (extras.props.multiline || extras.props.numberOfLines > 1) {
        return textAreaSizeVariant(val, extras);
    }
    const buttonStyles = (0,get_button_sized_dist_cjs.getButtonSized)(val, extras);
    const paddingHorizontal = (0,get_size_dist_cjs.stepTokenUpOrDown)("space", val, -1, [
        2
    ]);
    const fontStyle = (0,get_font_sized_dist_cjs.getFontSized)(val, extras);
    if (!cjs.isWeb && fontStyle) {
        delete fontStyle["lineHeight"];
    }
    return {
        ...fontStyle,
        ...buttonStyles,
        paddingHorizontal
    };
};
const textAreaSizeVariant = (val = "$true", extras)=>{
    const { props  } = extras;
    const buttonStyles = (0,get_button_sized_dist_cjs.getButtonSized)(val, extras);
    const fontStyle = (0,get_font_sized_dist_cjs.getFontSized)(val, extras);
    const height = props.numberOfLines ? (props.numberOfLines || 1) * (0,cjs.getVariableValue)(fontStyle.lineHeight) : "auto";
    const paddingVertical = (0,get_size_dist_cjs.stepTokenUpOrDown)("space", val, -2, [
        2
    ]);
    const paddingHorizontal = (0,get_size_dist_cjs.stepTokenUpOrDown)("space", val, -1, [
        2
    ]);
    return {
        ...buttonStyles,
        ...fontStyle,
        paddingVertical,
        paddingHorizontal,
        height
    };
};
 //# sourceMappingURL=inputHelpers.js.map

;// CONCATENATED MODULE: ../../node_modules/tamagui/dist/esm/views/Input.js




(0,cjs.setupReactNative)({
    TextInput: TextInput_default
});
const defaultStyles = {
    size: "$true",
    fontFamily: "$body",
    borderWidth: 1,
    outlineWidth: 0,
    color: "$color",
    focusable: true,
    borderColor: "$borderColor",
    backgroundColor: "$background",
    placeholderTextColor: "$placeholderColor",
    // this fixes a flex bug where it overflows container
    minWidth: 0,
    hoverStyle: {
        borderColor: "$borderColorHover"
    },
    focusStyle: {
        outlineColor: "$borderColorFocus",
        outlineWidth: 2,
        outlineStyle: "solid",
        borderColor: "$borderColorFocus"
    }
};
const InputFramePreTyped = (0,cjs.styled)(TextInput_default, {
    name: "Input",
    variants: {
        unstyled: {
            false: defaultStyles
        },
        size: {
            "...size": inputSizeVariant
        }
    },
    defaultVariants: {
        unstyled: false
    }
}, {
    isInput: true
});
const InputFrame = InputFramePreTyped;
const Input = focusableInputHOC(InputFrame);
 //# sourceMappingURL=Input.js.map


/***/ })

};
;