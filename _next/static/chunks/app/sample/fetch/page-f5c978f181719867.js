(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712],{56696:function(e,t,r){Promise.resolve().then(r.bind(r,95119))},95119:function(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:function(){return Page}});var s=r(57437),i=r(40300),u=r(17987),o=r(79198),a=r(42996),c=r(11640),l=class extends a.l{constructor(e,t){super(),this.#e=void 0,this.#t=void 0,this.#r=void 0,this.#n=new Set,this.#s=e,this.options=t,this.#i=null,this.bindMethods(),this.setOptions(t)}#s;#e;#t;#r;#u;#o;#i;#a;#c;#l;#h;#d;#f;#n;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#e.addObserver(this),shouldFetchOnMount(this.#e,this.options)&&this.#p(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.#e,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.#e,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#v(),this.#e.removeObserver(this)}setOptions(e,t){let r=this.options,n=this.#e;if(this.options=this.#s.defaultQueryOptions(e),(0,i.VS)(r,this.options)||this.#s.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#e,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.#R();let s=this.hasListeners();s&&shouldFetchOptionally(this.#e,n,this.options,r)&&this.#p(),this.updateResult(t),s&&(this.#e!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.#O();let u=this.#m();s&&(this.#e!==n||this.options.enabled!==r.enabled||u!==this.#f)&&this.#E(u)}getOptimisticResult(e){let t=this.#s.getQueryCache().build(this.#s,e),r=this.createResult(t,e);return(0,i.VS)(this.getCurrentResult(),r)||(this.#r=r,this.#o=this.options,this.#u=this.#e.state),r}getCurrentResult(){return this.#r}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.#n.add(r),e[r])})}),t}getCurrentQuery(){return this.#e}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#s.defaultQueryOptions(e),r=this.#s.getQueryCache().build(this.#s,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){return this.#p({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#p(e){this.#R();let t=this.#e.fetch(this.options,e);return e?.throwOnError||(t=t.catch(i.ZT)),t}#O(){if(this.#b(),i.sk||this.#r.isStale||!(0,i.PN)(this.options.staleTime))return;let e=(0,i.Kp)(this.#r.dataUpdatedAt,this.options.staleTime);this.#h=setTimeout(()=>{this.#r.isStale||this.updateResult()},e+1)}#m(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#r.data,this.#e):this.options.refetchInterval)??!1}#E(e){this.#v(),this.#f=e,!i.sk&&!1!==this.options.enabled&&(0,i.PN)(this.#f)&&0!==this.#f&&(this.#d=setInterval(()=>{(this.options.refetchIntervalInBackground||o.j.isFocused())&&this.#p()},this.#f))}#y(){this.#O(),this.#E(this.#m())}#b(){this.#h&&(clearTimeout(this.#h),this.#h=void 0)}#v(){this.#d&&(clearInterval(this.#d),this.#d=void 0)}createResult(e,t){let r;let n=this.#e,s=this.options,u=this.#r,o=this.#u,a=this.#o,l=e!==n,h=l?e.state:this.#t,{state:d}=e,{error:f,errorUpdatedAt:p,fetchStatus:y,status:b}=d,v=!1;if(t._optimisticResults){let r=this.hasListeners(),i=!r&&shouldFetchOnMount(e,t),u=r&&shouldFetchOptionally(e,n,t,s);(i||u)&&(y=(0,c.Kw)(e.options.networkMode)?"fetching":"paused",d.dataUpdatedAt||(b="pending")),"isRestoring"===t._optimisticResults&&(y="idle")}if(t.select&&void 0!==d.data){if(u&&d.data===o?.data&&t.select===this.#a)r=this.#c;else try{this.#a=t.select,r=t.select(d.data),r=(0,i.oE)(u?.data,r,t),this.#c=r,this.#i=null}catch(e){this.#i=e}}else r=d.data;if(void 0!==t.placeholderData&&void 0===r&&"pending"===b){let e;if(u?.isPlaceholderData&&t.placeholderData===a?.placeholderData)e=u.data;else if(e="function"==typeof t.placeholderData?t.placeholderData(this.#l?.state.data,this.#l):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#i=null}catch(e){this.#i=e}void 0!==e&&(b="success",r=(0,i.oE)(u?.data,e,t),v=!0)}this.#i&&(f=this.#i,r=this.#c,p=Date.now(),b="error");let R="fetching"===y,O="pending"===b,m="error"===b,E=O&&R,w={status:b,fetchStatus:y,isPending:O,isSuccess:"success"===b,isError:m,isInitialLoading:E,isLoading:E,data:r,dataUpdatedAt:d.dataUpdatedAt,error:f,errorUpdatedAt:p,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>h.dataUpdateCount||d.errorUpdateCount>h.errorUpdateCount,isFetching:R,isRefetching:R&&!O,isLoadingError:m&&0===d.dataUpdatedAt,isPaused:"paused"===y,isPlaceholderData:v,isRefetchError:m&&0!==d.dataUpdatedAt,isStale:isStale(e,t),refetch:this.refetch};return w}updateResult(e){let t=this.#r,r=this.createResult(this.#e,this.options);if(this.#u=this.#e.state,this.#o=this.options,(0,i.VS)(r,t))return;void 0!==this.#u.data&&(this.#l=this.#e),this.#r=r;let n={};e?.listeners!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.#n.size)return!0;let n=new Set(r??this.#n);return this.options.throwOnError&&n.add("error"),Object.keys(this.#r).some(e=>{let r=this.#r[e]!==t[e];return r&&n.has(e)})})()&&(n.listeners=!0),this.#w({...n,...e})}#R(){let e=this.#s.getQueryCache().build(this.#s,this.options);if(e===this.#e)return;let t=this.#e;this.#e=e,this.#t=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#w(e){u.V.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#r)}),this.#s.getQueryCache().notify({query:this.#e,type:"observerResultsUpdated"})})}};function shouldFetchOnMount(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&shouldFetchOn(e,t,t.refetchOnMount)}function shouldFetchOn(e,t,r){if(!1!==t.enabled){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&isStale(e,t)}return!1}function shouldFetchOptionally(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&isStale(e,r)}function isStale(e,t){return e.isStaleByTime(t.staleTime)}var h=r(2265),d=h.createContext((n=!1,{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n})),useQueryErrorResetBoundary=()=>h.useContext(d),f=r(38038),p=h.createContext(!1),useIsRestoring=()=>h.useContext(p);p.Provider;var ensurePreventErrorBoundaryRetry=(e,t)=>{(e.suspense||e.throwOnError)&&!t.isReset()&&(e.retryOnMount=!1)},useClearResetErrorBoundary=e=>{h.useEffect(()=>{e.clearReset()},[e])},getHasError=({result:e,errorResetBoundary:t,throwOnError:r,query:n})=>{var s;return e.isError&&!t.isReset()&&!e.isFetching&&(s=[e.error,n],"function"==typeof r?r(...s):!!r)},defaultThrowOnError=(e,t)=>void 0===t.state.data,ensureStaleTime=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},willFetch=(e,t)=>e.isLoading&&e.isFetching&&!t,shouldSuspend=(e,t,r)=>e?.suspense&&willFetch(t,r),fetchOptimistic=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});let fetchRepositories=async()=>{let e=await fetch("https://mocki.io/v1/178a3315-be2e-416b-ad47-ee28b99cdd7d");return await e.json()},myQuery=()=>{let{data:e}=function(e,t,r){let n=(0,f.NL)(r),s=useIsRestoring(),i=useQueryErrorResetBoundary(),o=n.defaultQueryOptions(e);o._optimisticResults=s?"isRestoring":"optimistic",ensureStaleTime(o),ensurePreventErrorBoundaryRetry(o,i),useClearResetErrorBoundary(i);let[a]=h.useState(()=>new t(n,o)),c=a.getOptimisticResult(o);if(h.useSyncExternalStore(h.useCallback(e=>{let t=s?()=>void 0:a.subscribe(u.V.batchCalls(e));return a.updateResult(),t},[a,s]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),h.useEffect(()=>{a.setOptions(o,{listeners:!1})},[o,a]),shouldSuspend(o,c,s))throw fetchOptimistic(o,a,i);if(getHasError({result:c,errorResetBoundary:i,throwOnError:o.throwOnError,query:a.getCurrentQuery()}))throw c.error;return o.notifyOnChangeProps?c:a.trackResult(c)}({queryKey:["repo","facebook"],queryFn:async()=>await fetchRepositories(),enabled:!0,suspense:!0,throwOnError:defaultThrowOnError},l,void 0);return e},Repos=()=>{let e=myQuery();return(0,s.jsx)(s.Fragment,{children:e.map((e,t)=>(0,s.jsxs)("p",{children:[e.name," / ",e.description]},t))})};function Page(){return(0,s.jsx)(h.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(Repos,{})})}},30622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:o.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},57437:function(e,t,r){"use strict";e.exports=r(30622)},79198:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(42996),s=r(40300),i=new class extends n.l{#S;#g;#Q;constructor(){super(),this.#Q=e=>{if(!s.sk&&window.addEventListener){let listener=()=>e();return window.addEventListener("visibilitychange",listener,!1),()=>{window.removeEventListener("visibilitychange",listener)}}}}onSubscribe(){this.#g||this.setEventListener(this.#Q)}onUnsubscribe(){this.hasListeners()||(this.#g?.(),this.#g=void 0)}setEventListener(e){this.#Q=e,this.#g?.(),this.#g=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.#S!==e;t&&(this.#S=e,this.onFocus())}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.#S?this.#S:globalThis.document?.visibilityState!=="hidden"}}},17987:function(e,t,r){"use strict";r.d(t,{V:function(){return s}});var n=r(40300),s=function(){let e=[],t=0,notifyFn=e=>{e()},batchNotifyFn=e=>{e()},schedule=r=>{t?e.push(r):(0,n.A4)(()=>{notifyFn(r)})},flush=()=>{let t=e;e=[],t.length&&(0,n.A4)(()=>{batchNotifyFn(()=>{t.forEach(e=>{notifyFn(e)})})})};return{batch:e=>{let r;t++;try{r=e()}finally{--t||flush()}return r},batchCalls:e=>(...t)=>{schedule(()=>{e(...t)})},schedule,setNotifyFunction:e=>{notifyFn=e},setBatchNotifyFunction:e=>{batchNotifyFn=e}}}()},20436:function(e,t,r){"use strict";r.d(t,{N:function(){return i}});var n=r(42996),s=r(40300),i=new class extends n.l{#F=!0;#g;#Q;constructor(){super(),this.#Q=e=>{if(!s.sk&&window.addEventListener){let onlineListener=()=>e(!0),offlineListener=()=>e(!1);return window.addEventListener("online",onlineListener,!1),window.addEventListener("offline",offlineListener,!1),()=>{window.removeEventListener("online",onlineListener),window.removeEventListener("offline",offlineListener)}}}}onSubscribe(){this.#g||this.setEventListener(this.#Q)}onUnsubscribe(){this.hasListeners()||(this.#g?.(),this.#g=void 0)}setEventListener(e){this.#Q=e,this.#g?.(),this.#g=e(this.setOnline.bind(this))}setOnline(e){let t=this.#F!==e;t&&(this.#F=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#F}}},11640:function(e,t,r){"use strict";r.d(t,{DV:function(){return isCancelledError},Kw:function(){return canFetch},Mz:function(){return createRetryer}});var n=r(79198),s=r(20436),i=r(40300);function defaultRetryDelay(e){return Math.min(1e3*2**e,3e4)}function canFetch(e){return(e??"online")!=="online"||s.N.isOnline()}var u=class{constructor(e){this.revert=e?.revert,this.silent=e?.silent}};function isCancelledError(e){return e instanceof u}function createRetryer(e){let t,r,o,a=!1,c=0,l=!1,h=new Promise((e,t)=>{r=e,o=t}),shouldPause=()=>!n.j.isFocused()||"always"!==e.networkMode&&!s.N.isOnline(),resolve=n=>{l||(l=!0,e.onSuccess?.(n),t?.(),r(n))},reject=r=>{l||(l=!0,e.onError?.(r),t?.(),o(r))},pause=()=>new Promise(r=>{t=e=>{let t=l||!shouldPause();return t&&r(e),t},e.onPause?.()}).then(()=>{t=void 0,l||e.onContinue?.()}),run=()=>{let t;if(!l){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(resolve).catch(t=>{if(l)return;let r=e.retry??(i.sk?0:3),n=e.retryDelay??defaultRetryDelay,s="function"==typeof n?n(c,t):n,u=!0===r||"number"==typeof r&&c<r||"function"==typeof r&&r(c,t);if(a||!u){reject(t);return}c++,e.onFail?.(c,t),(0,i._v)(s).then(()=>{if(shouldPause())return pause()}).then(()=>{a?reject(t):run()})})}};return canFetch(e.networkMode)?run():pause().then(run),{promise:h,cancel:t=>{l||(reject(new u(t)),e.abort?.())},continue:()=>{let e=t?.();return e?h:Promise.resolve()},cancelRetry:()=>{a=!0},continueRetry:()=>{a=!1}}}},42996:function(e,t,r){"use strict";r.d(t,{l:function(){return n}});var n=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},40300:function(e,t,r){"use strict";r.d(t,{A4:function(){return scheduleMicrotask},Ht:function(){return addToStart},Kp:function(){return timeUntilStale},PN:function(){return isValidTimeout},Rm:function(){return hashQueryKeyByOptions},SE:function(){return functionalUpdate},VS:function(){return shallowEqualObjects},VX:function(){return addToEnd},X7:function(){return matchMutation},Ym:function(){return hashKey},ZT:function(){return noop},_v:function(){return sleep},_x:function(){return matchQuery},oE:function(){return replaceData},sk:function(){return n},to:function(){return partialMatchKey}});var n="undefined"==typeof window||"Deno"in window;function noop(){}function functionalUpdate(e,t){return"function"==typeof e?e(t):e}function isValidTimeout(e){return"number"==typeof e&&e>=0&&e!==1/0}function timeUntilStale(e,t){return Math.max(e+(t||0)-Date.now(),0)}function matchQuery(e,t){let{type:r="all",exact:n,fetchStatus:s,predicate:i,queryKey:u,stale:o}=e;if(u){if(n){if(t.queryHash!==hashQueryKeyByOptions(u,t.options))return!1}else if(!partialMatchKey(t.queryKey,u))return!1}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof o||t.isStale()===o)&&(void 0===s||s===t.state.fetchStatus)&&(!i||!!i(t))}function matchMutation(e,t){let{exact:r,status:n,predicate:s,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(r){if(hashKey(t.options.mutationKey)!==hashKey(i))return!1}else if(!partialMatchKey(t.options.mutationKey,i))return!1}return(!n||t.state.status===n)&&(!s||!!s(t))}function hashQueryKeyByOptions(e,t){let r=t?.queryKeyHashFn||hashKey;return r(e)}function hashKey(e){return JSON.stringify(e,(e,t)=>isPlainObject(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function partialMatchKey(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!partialMatchKey(e[r],t[r]))}function shallowEqualObjects(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function isPlainArray(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function isPlainObject(e){if(!hasObjectPrototype(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(hasObjectPrototype(r)&&r.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(e){return"[object Object]"===Object.prototype.toString.call(e)}function sleep(e){return new Promise(t=>{setTimeout(t,e)})}function scheduleMicrotask(e){sleep(0).then(e)}function replaceData(e,t,r){return"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?function replaceEqualDeep(e,t){if(e===t)return e;let r=isPlainArray(e)&&isPlainArray(t);if(r||isPlainObject(e)&&isPlainObject(t)){let n=r?e.length:Object.keys(e).length,s=r?t:Object.keys(t),i=s.length,u=r?[]:{},o=0;for(let n=0;n<i;n++){let i=r?n:s[n];u[i]=replaceEqualDeep(e[i],t[i]),u[i]===e[i]&&o++}return n===i&&o===n?e:u}return t}(e,t):t}function addToEnd(e,t,r=0){let n=[...e,t];return r&&n.length>r?n.slice(1):n}function addToStart(e,t,r=0){let n=[t,...e];return r&&n.length>r?n.slice(0,-1):n}},38038:function(e,t,r){"use strict";r.d(t,{NL:function(){return useQueryClient},aH:function(){return QueryClientProvider}});var n=r(2265),s=n.createContext(void 0),useQueryClient=e=>{let t=n.useContext(s);if(e)return e;if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},QueryClientProvider=({client:e,children:t})=>(n.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),n.createElement(s.Provider,{value:e},t))}},function(e){e.O(0,[971,864,744],function(){return e(e.s=56696)}),_N_E=e.O()}]);