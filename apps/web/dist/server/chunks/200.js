"use strict";
exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ createParam)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../node_modules/react-native-web-internals/dist/esm/modules/Platform/index.js
var Platform = __webpack_require__(8182);
// EXTERNAL MODULE: ../../node_modules/solito/build/router/use-navigation.web.js
var use_navigation_web = __webpack_require__(2938);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ../../node_modules/solito/build/params/use-route.web.js
const useRoute = ()=>undefined; //# sourceMappingURL=use-route.web.js.map

;// CONCATENATED MODULE: ../../node_modules/solito/build/params/use-router.web.js

const useRouter = ()=>(0,router_.useRouter)(); //# sourceMappingURL=use-router.web.js.map

;// CONCATENATED MODULE: ../../node_modules/solito/build/params/index.js
/* eslint-disable react-hooks/rules-of-hooks */ // From https://gist.github.com/nandorojo/052887f99bb61b54845474f324aa41cc






function useStable(value) {
    const ref = (0,external_react_.useRef)(value);
    (0,external_react_.useEffect)(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref;
}
function useStableCallback(callback) {
    const callbackRef = (0,external_react_.useRef)(callback);
    (0,external_react_.useEffect)(()=>{
        callbackRef.current = callback;
    });
    // https://github.com/facebook/react/issues/19240
    return (0,external_react_.useMemo)(()=>(...args)=>callbackRef.current?.(...args), []);
}
function createParam() {
    function useParam(...[name, maybeConfig]) {
        const { parse =(value)=>value , initial , stringify , paramsToClearOnSetState  } = maybeConfig || {};
        const nextRouter = useRouter();
        const nativeRoute = useRoute();
        const nativeNavigation = (0,use_navigation_web/* useNavigation */.H)();
        const nativeStateFromParams = nativeRoute?.params?.[name];
        const [nativeStateFromReact, setNativeStateFromReact] = (0,external_react_.useState)(()=>nativeStateFromParams ?? initial);
        const setNativeStateFromParams = (0,external_react_.useCallback)((value)=>{
            nativeNavigation?.setParams({
                [name]: value
            });
        }, []);
        const nativeState = nativeRoute ? nativeStateFromParams : nativeStateFromReact;
        const setNativeState = nativeRoute ? setNativeStateFromParams : setNativeStateFromReact;
        const stableStringify = useStable(stringify);
        const stableParse = useStableCallback(parse);
        const stableParamsToClear = useStable(paramsToClearOnSetState);
        const initialValue = (0,external_react_.useRef)(initial);
        const hasSetState = (0,external_react_.useRef)(false);
        const setState = (0,external_react_.useCallback)((value, options)=>{
            hasSetState.current = true;
            const { pathname , query  } = (router_default());
            const newQuery = {
                ...query
            };
            if (value != null && value !== "") {
                if (stableStringify.current) {
                    newQuery[name] = stableStringify.current(value);
                } else {
                    newQuery[name] = value;
                }
            } else {
                delete newQuery[name];
            }
            if (stableParamsToClear.current) {
                for (const paramKey of stableParamsToClear.current){
                    delete newQuery[paramKey];
                }
            }
            const willChangeExistingParam = query[name] && newQuery[name];
            let action = willChangeExistingParam ? (router_default()).replace : (router_default()).push;
            if (options?.webBehavior) {
                action = (router_default())[options.webBehavior];
            }
            action({
                pathname,
                query: newQuery
            }, undefined, {
                shallow: true
            });
        }, [
            name,
            stableStringify,
            stableParamsToClear
        ]);
        const webParam = nextRouter?.query?.[name];
        const state = (0,external_react_.useMemo)(()=>{
            let state;
            if (webParam === undefined && !hasSetState.current) {
                state = initialValue.current;
            } else {
                state = stableParse(webParam);
            }
            return state;
        }, [
            stableParse,
            webParam
        ]);
        if (Platform/* default.OS */.Z.OS !== "web") {
            if (!nativeRoute) {
                console.error(`[solito] useParam('${name}') called when there is no React Navigation route available. In a future version, this will throw an error. Please fix this by only calling useParam() inside of a React Navigation route. For now, Solito will fallback to using React state.`);
            }
            return [
                nativeState,
                setNativeState
            ];
        }
        return [
            state,
            setState
        ];
    }
    function useUpdateParams() {
        const nativeNavigation = (0,use_navigation_web/* useNavigation */.H)();
        const setNativeStateFromParams = (0,external_react_.useCallback)((value)=>{
            nativeNavigation?.setParams(value);
        }, []);
        const setWebState = (0,external_react_.useCallback)((value, options)=>{
            const { pathname , query  } = (router_default());
            const newQuery = {
                ...query,
                ...value
            };
            for(const key in value){
                if (value[key] == null || value[key] === "") {
                    delete newQuery[key];
                }
            }
            const action = options?.web?.replace ? (router_default()).replace : (router_default()).push;
            action({
                pathname,
                query: newQuery
            }, undefined, {
                shallow: true
            });
        }, []);
        return Platform/* default.select */.Z.select({
            web: setWebState,
            default: setNativeStateFromParams
        });
    }
    function useParams() {
        if (Platform/* default.OS */.Z.OS !== "web") {
            const nativeRoute = useRoute();
            const nativeNavigation = (0,use_navigation_web/* useNavigation */.H)();
            return {
                params: nativeRoute?.params,
                setParams: (0,external_react_.useCallback)((params)=>nativeNavigation?.setParams(params), [
                    nativeNavigation
                ])
            };
        }
        const nextRouter = useRouter();
        return {
            params: nextRouter?.query,
            setParams: (0,external_react_.useCallback)((params, options)=>{
                const { pathname , query  } = (router_default());
                const newQuery = {
                    ...query,
                    ...params
                };
                for(const key in params){
                    if (params[key] == null || params[key] === "") {
                        delete newQuery[key];
                    }
                }
                const action = (router_default())[options?.webBehavior ?? "push"];
                action({
                    pathname,
                    query: newQuery
                }, undefined, {
                    shallow: true
                });
            }, [])
        };
    }
    return {
        useParam,
        useUpdateParams,
        useParams
    };
} //# sourceMappingURL=index.js.map


/***/ })

};
;