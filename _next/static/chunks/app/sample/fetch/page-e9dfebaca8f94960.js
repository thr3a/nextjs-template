(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[712],{95658:function(t,e,r){Promise.resolve().then(r.bind(r,37171))},37171:function(t,e,r){"use strict";let s;r.r(e),r.d(e,{default:function(){return F}});var i=r(57437),n=r(56298),u=r(69948),a=r(34939),h=r(49010),c=r(2459),o=class extends h.l{constructor(t,e){super(),this.options=e,this.#t=t,this.#e=null,this.bindMethods(),this.setOptions(e)}#t;#r=void 0;#s=void 0;#i=void 0;#n;#u;#e;#a;#h;#c;#o;#l;#d;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#r.addObserver(this),l(this.#r,this.options)?this.#f():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return d(this.#r,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.#r,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#R(),this.#v(),this.#r.removeObserver(this)}setOptions(t,e){let r=this.options,s=this.#r;if(this.options=this.#t.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,n.Nc)(this.options.enabled,this.#r))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#b(),this.#r.setOptions(this.options),r._defaulted&&!(0,n.VS)(this.options,r)&&this.#t.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#r,observer:this});let i=this.hasListeners();i&&p(this.#r,s,this.options,r)&&this.#f(),this.updateResult(e),i&&(this.#r!==s||(0,n.Nc)(this.options.enabled,this.#r)!==(0,n.Nc)(r.enabled,this.#r)||(0,n.KC)(this.options.staleTime,this.#r)!==(0,n.KC)(r.staleTime,this.#r))&&this.#Q();let u=this.#m();i&&(this.#r!==s||(0,n.Nc)(this.options.enabled,this.#r)!==(0,n.Nc)(r.enabled,this.#r)||u!==this.#d)&&this.#O(u)}getOptimisticResult(t){let e=this.#t.getQueryCache().build(this.#t,t),r=this.createResult(e,t);return(0,n.VS)(this.getCurrentResult(),r)||(this.#i=r,this.#u=this.options,this.#n=this.#r.state),r}getCurrentResult(){return this.#i}trackResult(t,e){let r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(s),e?.(s),t[s])})}),r}trackProp(t){this.#p.add(t)}getCurrentQuery(){return this.#r}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#t.defaultQueryOptions(t),r=this.#t.getQueryCache().build(this.#t,e);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,e))}fetch(t){return this.#f({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#i))}#f(t){this.#b();let e=this.#r.fetch(this.options,t);return t?.throwOnError||(e=e.catch(n.ZT)),e}#Q(){this.#R();let t=(0,n.KC)(this.options.staleTime,this.#r);if(n.sk||this.#i.isStale||!(0,n.PN)(t))return;let e=(0,n.Kp)(this.#i.dataUpdatedAt,t);this.#o=setTimeout(()=>{this.#i.isStale||this.updateResult()},e+1)}#m(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#r):this.options.refetchInterval)??!1}#O(t){this.#v(),this.#d=t,!n.sk&&!1!==(0,n.Nc)(this.options.enabled,this.#r)&&(0,n.PN)(this.#d)&&0!==this.#d&&(this.#l=setInterval(()=>{(this.options.refetchIntervalInBackground||a.j.isFocused())&&this.#f()},this.#d))}#y(){this.#Q(),this.#O(this.#m())}#R(){this.#o&&(clearTimeout(this.#o),this.#o=void 0)}#v(){this.#l&&(clearInterval(this.#l),this.#l=void 0)}createResult(t,e){let r;let s=this.#r,i=this.options,u=this.#i,a=this.#n,h=this.#u,o=t!==s?t.state:this.#s,{state:d}=t,y={...d},R=!1;if(e._optimisticResults){let r=this.hasListeners(),n=!r&&l(t,e),u=r&&p(t,s,e,i);(n||u)&&(y={...y,...(0,c.z)(d.data,t.options)}),"isRestoring"===e._optimisticResults&&(y.fetchStatus="idle")}let{error:v,errorUpdatedAt:b,status:Q}=y;if(e.select&&void 0!==y.data){if(u&&y.data===a?.data&&e.select===this.#a)r=this.#h;else try{this.#a=e.select,r=e.select(y.data),r=(0,n.oE)(u?.data,r,e),this.#h=r,this.#e=null}catch(t){this.#e=t}}else r=y.data;if(void 0!==e.placeholderData&&void 0===r&&"pending"===Q){let t;if(u?.isPlaceholderData&&e.placeholderData===h?.placeholderData)t=u.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#c?.state.data,this.#c):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#e=null}catch(t){this.#e=t}void 0!==t&&(Q="success",r=(0,n.oE)(u?.data,t,e),R=!0)}this.#e&&(v=this.#e,r=this.#h,b=Date.now(),Q="error");let m="fetching"===y.fetchStatus,O="pending"===Q,g="error"===Q,C=O&&m,I=void 0!==r;return{status:Q,fetchStatus:y.fetchStatus,isPending:O,isSuccess:"success"===Q,isError:g,isInitialLoading:C,isLoading:C,data:r,dataUpdatedAt:y.dataUpdatedAt,error:v,errorUpdatedAt:b,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>o.dataUpdateCount||y.errorUpdateCount>o.errorUpdateCount,isFetching:m,isRefetching:m&&!O,isLoadingError:g&&!I,isPaused:"paused"===y.fetchStatus,isPlaceholderData:R,isRefetchError:g&&I,isStale:f(t,e),refetch:this.refetch}}updateResult(t){let e=this.#i,r=this.createResult(this.#r,this.options);if(this.#n=this.#r.state,this.#u=this.options,void 0!==this.#n.data&&(this.#c=this.#r),(0,n.VS)(r,e))return;this.#i=r;let s={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,r="function"==typeof t?t():t;if("all"===r||!r&&!this.#p.size)return!0;let s=new Set(r??this.#p);return this.options.throwOnError&&s.add("error"),Object.keys(this.#i).some(t=>this.#i[t]!==e[t]&&s.has(t))})()&&(s.listeners=!0),this.#g({...s,...t})}#b(){let t=this.#t.getQueryCache().build(this.#t,this.options);if(t===this.#r)return;let e=this.#r;this.#r=t,this.#s=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#g(t){u.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#i)}),this.#t.getQueryCache().notify({query:this.#r,type:"observerResultsUpdated"})})}};function l(t,e){return!1!==(0,n.Nc)(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&d(t,e,e.refetchOnMount)}function d(t,e,r){if(!1!==(0,n.Nc)(e.enabled,t)){let s="function"==typeof r?r(t):r;return"always"===s||!1!==s&&f(t,e)}return!1}function p(t,e,r,s){return(t!==e||!1===(0,n.Nc)(s.enabled,t))&&(!r.suspense||"error"!==t.state.status)&&f(t,r)}function f(t,e){return!1!==(0,n.Nc)(e.enabled,t)&&t.isStaleByTime((0,n.KC)(e.staleTime,t))}var y=r(2265),R=y.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),v=()=>y.useContext(R),b=r(93191),Q=y.createContext(!1),m=()=>y.useContext(Q);Q.Provider;var O=(t,e)=>{(t.suspense||t.throwOnError)&&!e.isReset()&&(t.retryOnMount=!1)},g=t=>{y.useEffect(()=>{t.clearReset()},[t])},C=t=>{var e;let{result:r,errorResetBoundary:s,throwOnError:i,query:n}=t;return r.isError&&!s.isReset()&&!r.isFetching&&n&&(e=[r.error,n],"function"==typeof i?i(...e):!!i)},I=(t,e)=>void 0===e.state.data,S=t=>{t.suspense&&("number"!=typeof t.staleTime&&(t.staleTime=1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},E=(t,e)=>t?.suspense&&e.isPending,T=(t,e,r)=>e.fetchOptimistic(t).catch(()=>{r.clearReset()});let w=async()=>{let t=await fetch("https://mocki.io/v1/ad841940-cc6f-4ed2-83ff-cab434183a58");return await t.json()},k=()=>{let{data:t}=function(t,e,r){var s,i,n,a;let h=(0,b.NL)(r),c=m(),o=v(),l=h.defaultQueryOptions(t);null===(i=h.getDefaultOptions().queries)||void 0===i||null===(s=i._experimental_beforeQuery)||void 0===s||s.call(i,l),l._optimisticResults=c?"isRestoring":"optimistic",S(l),O(l,o),g(o);let[d]=y.useState(()=>new e(h,l)),p=d.getOptimisticResult(l);if(y.useSyncExternalStore(y.useCallback(t=>{let e=c?()=>void 0:d.subscribe(u.V.batchCalls(t));return d.updateResult(),e},[d,c]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),y.useEffect(()=>{d.setOptions(l,{listeners:!1})},[l,d]),E(l,p))throw T(l,d,o);if(C({result:p,errorResetBoundary:o,throwOnError:l.throwOnError,query:h.getQueryCache().get(l.queryHash)}))throw p.error;return null===(a=h.getDefaultOptions().queries)||void 0===a||null===(n=a._experimental_afterQuery)||void 0===n||n.call(a,l,p),l.notifyOnChangeProps?p:d.trackResult(p)}({queryKey:["repo","facebook"],queryFn:async()=>await w(),enabled:!0,suspense:!0,throwOnError:I,placeholderData:void 0},o,void 0);return t},x=()=>{let t=k();return(0,i.jsx)(i.Fragment,{children:t.map((t,e)=>(0,i.jsxs)("p",{children:[t.name," / ",t.description]},e))})};function F(){return(0,i.jsx)(y.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(x,{})})}}},function(t){t.O(0,[336,971,23,744],function(){return t(t.s=95658)}),_N_E=t.O()}]);