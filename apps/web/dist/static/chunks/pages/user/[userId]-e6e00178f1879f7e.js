(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{67:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[userId]",function(){return t(2228)}])},2228:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(2322),u=t(2099),l=t(7207),a=t(2784),s=t(8182),o=t(2938),i=t(5632),c=t.n(i);let d=()=>void 0,f=()=>(0,i.useRouter)();function v(e){let r=(0,a.useRef)(e);return(0,a.useEffect)(()=>{r.current=e},[e]),r}var h=t(5887);let{useParam:w}={useParam:function(){for(var e,r,t=arguments.length,n=Array(t),u=0;u<t;u++)n[u]=arguments[u];let[l,i]=n,{parse:h=e=>e,initial:w,stringify:p,paramsToClearOnSetState:b}=i||{},m=f(),k=d(),P=(0,o.H)(),_=null==k?void 0:null===(e=k.params)||void 0===e?void 0:e[l],[x,S]=(0,a.useState)(()=>null!=_?_:w),y=(0,a.useCallback)(e=>{null==P||P.setParams({[l]:e})},[]),C=v(p),R=function(e){let r=(0,a.useRef)(e);return(0,a.useEffect)(()=>{r.current=e}),(0,a.useMemo)(()=>function(){for(var e,t=arguments.length,n=Array(t),u=0;u<t;u++)n[u]=arguments[u];return null===(e=r.current)||void 0===e?void 0:e.call(r,...n)},[])}(h),j=v(b),B=(0,a.useRef)(w),E=(0,a.useRef)(!1),N=(0,a.useCallback)((e,r)=>{E.current=!0;let{pathname:t,query:n}=c(),u={...n};if(null!=e&&""!==e?C.current?u[l]=C.current(e):u[l]=e:delete u[l],j.current)for(let e of j.current)delete u[e];let a=n[l]&&u[l],s=a?c().replace:c().push;(null==r?void 0:r.webBehavior)&&(s=c()[r.webBehavior]),s({pathname:t,query:u},void 0,{shallow:!0})},[l,C,j]),g=null==m?void 0:null===(r=m.query)||void 0===r?void 0:r[l],q=(0,a.useMemo)(()=>void 0!==g||E.current?R(g):B.current,[R,g]);return"web"!==s.Z.OS?(k||console.error("[solito] useParam('".concat(l,"') called when there is no React Navigation route available. In a future version, this will throw an error. Please fix this by only calling useParam() inside of a React Navigation route. For now, Solito will fallback to using React state.")),[k?_:x,k?y:S]):[q,N]},useUpdateParams:function(){let e=(0,o.H)(),r=(0,a.useCallback)(r=>{null==e||e.setParams(r)},[]),t=(0,a.useCallback)((e,r)=>{var t;let{pathname:n,query:u}=c(),l={...u,...e};for(let r in e)(null==e[r]||""===e[r])&&delete l[r];let a=(null==r?void 0:null===(t=r.web)||void 0===t?void 0:t.replace)?c().replace:c().push;a({pathname:n,query:l},void 0,{shallow:!0})},[]);return s.Z.select({web:t,default:r})},useParams:function(){if("web"!==s.Z.OS){let e=d(),r=(0,o.H)();return{params:null==e?void 0:e.params,setParams:(0,a.useCallback)(e=>null==r?void 0:r.setParams(e),[r])}}let e=f();return{params:null==e?void 0:e.query,setParams:(0,a.useCallback)((e,r)=>{var t;let{pathname:n,query:u}=c(),l={...u,...e};for(let r in e)(null==e[r]||""===e[r])&&delete l[r];let a=c()[null!==(t=null==r?void 0:r.webBehavior)&&void 0!==t?t:"push"];a({pathname:n,query:l},void 0,{shallow:!0})},[])}}},p=()=>{let{push:e}=(0,h.t)(),[r]=w("userId",{initial:0,parse:e=>e?+e:-1});return(0,n.jsxs)(l.YStack,{children:[(0,n.jsx)(u.Z,{children:"Users"}),(0,n.jsxs)(l.Text,{children:["User id is: ",r]}),(0,n.jsx)(l.Button,{onPress:()=>e("/"),children:"Home"}),(0,n.jsx)(l.Spacer,{}),(0,n.jsx)(l.Button,{onPress:()=>e("/user/4"),children:"4"})]})};var b=p},9323:function(e,r,t){"use strict";var n=t(2322),u=t(5894),l=t(5887);let a=e=>{let{children:r,userId:t,...a}=e,{push:s}=(0,l.t)();return(0,n.jsx)(u.zx,{onPress:()=>s({pathname:"/user/[userId]",query:{userId:t}}),...a,children:r})};r.Z=a},2099:function(e,r,t){"use strict";var n=t(1748),u=t(5424);let l=(0,n.z)(u.H1,{color:"_col-d0t527436987"});r.Z=l,t(8390)},7207:function(e,r,t){"use strict";t.d(r,{Button:function(){return n.Button},Spacer:function(){return n.Spacer},Text:function(){return n.Text},XStack:function(){return n.XStack},YStack:function(){return n.YStack}});var n=t(5424);t(9323),t(2099),t(5103)},8390:function(){}},function(e){e.O(0,[853,774,888,179],function(){return e(e.s=67)}),_N_E=e.O()}]);