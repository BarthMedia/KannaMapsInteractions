(function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r=function(t){return t&&t.Math==Math&&t};e=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")();var n,o;n=!(o=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var i,a,c,u={};c=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var s=Function.prototype,l=s.call,f=c&&s.bind.bind(l,l);u=c?f:function(t){return function(){return l.apply(t,arguments)}};var p,d={},h="object"==typeof document&&document.all,v=(p={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;d=p.IS_HTMLDDA?function(t){return"function"==typeof t||t===v}:function(t){return"function"==typeof t};var m,y,g,b={};g=function(t){return null==t};var w=TypeError;y=function(t){if(g(t))throw w("Can't call method on "+t);return t};var S=Object;m=function(t){return S(y(t))};var E=u({}.hasOwnProperty);b=Object.hasOwn||function(t,e){return E(m(t),e)};var T,O=Function.prototype,L=n&&Object.getOwnPropertyDescriptor,k=b(O,"name"),j={EXISTS:k,PROPER:k&&"something"===function(){}.name,CONFIGURABLE:k&&(!n||n&&L(O,"name").configurable)}.CONFIGURABLE,P={},I={},q=Object.defineProperty;T=function(t,r){try{q(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r};var x="__core-js_shared__",F=e[x]||T(x,{});I=F;var _=u(Function.toString);d(I.inspectSource)||(I.inspectSource=function(t){return _(t)}),P=I.inspectSource;var M,C,A=e.WeakMap;C=d(A)&&/native code/.test(String(A));var D={},R=p.all;D=p.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:d(t)||t===R}:function(t){return"object"==typeof t?null!==t:d(t)};var N,G,B,K={},U=e.document,z=D(U)&&D(U.createElement);B=function(t){return z?U.createElement(t):{}},G=!n&&!o((function(){return 7!=Object.defineProperty(B("div"),"a",{get:function(){return 7}}).a}));var H;H=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var W,Y=String,V=TypeError;W=function(t){if(D(t))return t;throw V(Y(t)+" is not an object")};var X,$,J={},Q=Function.prototype.call;J=c?Q.bind(Q):function(){return Q.apply(Q,arguments)};var Z,tt={},et=function(t){return d(t)?t:void 0};Z=function(t,r){return arguments.length<2?et(e[t]):e[t]&&e[t][r]};var rt={};rt=u({}.isPrototypeOf);var nt,ot,it,at={};at="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ct,ut,st=e.process,lt=e.Deno,ft=st&&st.versions||lt&&lt.version,pt=ft&&ft.v8;pt&&(ut=(ct=pt.split("."))[0]>0&&ct[0]<4?1:+(ct[0]+ct[1])),!ut&&at&&(!(ct=at.match(/Edge\/(\d+)/))||ct[1]>=74)&&(ct=at.match(/Chrome\/(\d+)/))&&(ut=+ct[1]),it=ut,nt=(ot=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&it&&it<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var dt=Object;tt=nt?function(t){return"symbol"==typeof t}:function(t){var e=Z("Symbol");return d(e)&&rt(e.prototype,dt(t))};var ht,vt,mt,yt=String;mt=function(t){try{return yt(t)}catch(t){return"Object"}};var gt=TypeError;vt=function(t){if(d(t))return t;throw gt(mt(t)+" is not a function")},ht=function(t,e){var r=t[e];return g(r)?void 0:vt(r)};var bt,wt=TypeError;bt=function(t,e){var r,n;if("string"===e&&d(r=t.toString)&&!D(n=J(r,t)))return n;if(d(r=t.valueOf)&&!D(n=J(r,t)))return n;if("string"!==e&&d(r=t.toString)&&!D(n=J(r,t)))return n;throw wt("Can't convert object to primitive value")};var St;(St=function(t,e){return I[t]||(I[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Et,Tt=0,Ot=Math.random(),Lt=u(1..toString);Et=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Lt(++Tt+Ot,36)};var kt=e.Symbol,jt=St("wks"),Pt=nt?kt.for||kt:kt&&kt.withoutSetter||Et,It=TypeError,qt=function(t){return b(jt,t)||(jt[t]=ot&&b(kt,t)?kt[t]:Pt("Symbol."+t)),jt[t]}("toPrimitive");$=function(t,e){if(!D(t)||tt(t))return t;var r,n=ht(t,qt);if(n){if(void 0===e&&(e="default"),r=J(n,t,e),!D(r)||tt(r))return r;throw It("Can't convert object to primitive value")}return void 0===e&&(e="number"),bt(t,e)},X=function(t){var e=$(t,"string");return tt(e)?e:e+""};var xt=TypeError,Ft=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Mt="enumerable",Ct="configurable",At="writable";N=n?H?function(t,e,r){if(W(t),e=X(e),W(r),"function"==typeof t&&"prototype"===e&&"value"in r&&At in r&&!r[At]){var n=_t(t,e);n&&n[At]&&(t[e]=r.value,r={configurable:Ct in r?r[Ct]:n[Ct],enumerable:Mt in r?r[Mt]:n[Mt],writable:!1})}return Ft(t,e,r)}:Ft:function(t,e,r){if(W(t),e=X(e),W(r),G)try{return Ft(t,e,r)}catch(t){}if("get"in r||"set"in r)throw xt("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Dt;Dt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},K=n?function(t,e,r){return N(t,e,Dt(1,r))}:function(t,e,r){return t[e]=r,t};var Rt,Nt=St("keys");Rt=function(t){return Nt[t]||(Nt[t]=Et(t))};var Gt={};Gt={};var Bt,Kt,Ut,zt="Object already initialized",Ht=e.TypeError,Wt=e.WeakMap;if(C||I.state){var Yt=I.state||(I.state=new Wt);Yt.get=Yt.get,Yt.has=Yt.has,Yt.set=Yt.set,Bt=function(t,e){if(Yt.has(t))throw Ht(zt);return e.facade=t,Yt.set(t,e),e},Kt=function(t){return Yt.get(t)||{}},Ut=function(t){return Yt.has(t)}}else{var Vt=Rt("state");Gt[Vt]=!0,Bt=function(t,e){if(b(t,Vt))throw Ht(zt);return e.facade=t,K(t,Vt,e),e},Kt=function(t){return b(t,Vt)?t[Vt]:{}},Ut=function(t){return b(t,Vt)}}var Xt=(M={set:Bt,get:Kt,has:Ut,enforce:function(t){return Ut(t)?Kt(t):Bt(t,{})},getterFor:function(t){return function(e){var r;if(!D(e)||(r=Kt(e)).type!==t)throw Ht("Incompatible receiver, "+t+" required");return r}}}).enforce,$t=M.get,Jt=String,Qt=Object.defineProperty,Zt=u("".slice),te=u("".replace),ee=u([].join),re=n&&!o((function(){return 8!==Qt((function(){}),"length",{value:8}).length})),ne=String(String).split("String"),oe=a=function(t,e,r){"Symbol("===Zt(Jt(e),0,7)&&(e="["+te(Jt(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!b(t,"name")||j&&t.name!==e)&&(n?Qt(t,"name",{value:e,configurable:!0}):t.name=e),re&&r&&b(r,"arity")&&t.length!==r.arity&&Qt(t,"length",{value:r.arity});try{r&&b(r,"constructor")&&r.constructor?n&&Qt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=Xt(t);return b(o,"source")||(o.source=ee(ne,"string"==typeof e?e:"")),t};Function.prototype.toString=oe((function(){return d(this)&&$t(this).source||P(this)}),"toString"),i=function(t,e,r){return r.get&&a(r.get,e,{getter:!0}),r.set&&a(r.set,e,{setter:!0}),N(t,e,r)};var ie;ie=function(){var t=W(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var ae=e.RegExp,ce=ae.prototype;n&&o((function(){var t=!0;try{ae(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(ce,"flags").get.call(e)!==n||r!==n}))&&i(ce,"flags",{configurable:!0,get:ie});var ue,se,le,fe={}.propertyIsEnumerable,pe=Object.getOwnPropertyDescriptor,de=pe&&!fe.call({1:2},1);le=de?function(t){var e=pe(this,t);return!!e&&e.enumerable}:fe;var he,ve,me={},ye=u({}.toString),ge=u("".slice);ve=function(t){return ge(ye(t),8,-1)};var be=Object,we=u("".split);me=o((function(){return!be("z").propertyIsEnumerable(0)}))?function(t){return"String"==ve(t)?we(t,""):be(t)}:be,he=function(t){return me(y(t))};var Se,Ee=Object.getOwnPropertyDescriptor,Te=se=n?Ee:function(t,e){if(t=he(t),e=X(e),G)try{return Ee(t,e)}catch(t){}if(b(t,e))return Dt(!J(le,t,e),t[e])};Se=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(d(r)&&a(r,i,n),n.global)o?t[e]=r:T(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:N(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var Oe,Le,ke,je,Pe,Ie={},qe={},xe=Math.ceil,Fe=Math.floor;qe=Math.trunc||function(t){var e=+t;return(e>0?Fe:xe)(e)},Pe=function(t){var e=+t;return e!=e||0===e?0:qe(e)};var _e=Math.max,Me=Math.min;je=function(t,e){var r=Pe(t);return r<0?_e(r+e,0):Me(r,e)};var Ce,Ae,De=Math.min;Ae=function(t){return t>0?De(Pe(t),9007199254740991):0},Ce=function(t){return Ae(t.length)};var Re=function(t){return function(e,r,n){var o,i=he(e),a=Ce(i),c=je(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},Ne={includes:Re(!0),indexOf:Re(!1)}.indexOf,Ge=u([].push);ke=function(t,e){var r,n=he(t),o=0,i=[];for(r in n)!b(Gt,r)&&b(n,r)&&Ge(i,r);for(;e.length>o;)b(n,r=e[o++])&&(~Ne(i,r)||Ge(i,r));return i};var Be,Ke=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Le=Object.getOwnPropertyNames||function(t){return ke(t,Ke)},Be=Object.getOwnPropertySymbols;var Ue=u([].concat);Ie=Z("Reflect","ownKeys")||function(t){var e=Le(W(t));return Be?Ue(e,Be(t)):e},Oe=function(t,e,r){for(var n=Ie(e),o=N,i=se,a=0;a<n.length;a++){var c=n[a];b(t,c)||r&&b(r,c)||o(t,c,i(e,c))}};var ze={},He=/#|\.prototype\./,We=function(t,e){var r=Ve[Ye(t)];return r==$e||r!=Xe&&(d(e)?o(e):!!e)},Ye=We.normalize=function(t){return String(t).replace(He,".").toLowerCase()},Ve=We.data={},Xe=We.NATIVE="N",$e=We.POLYFILL="P";ze=We,ue=function(t,r){var n,o,i,a,c,u=t.target,s=t.global,l=t.stat;if(n=s?e:l?e[u]||T(u,{}):(e[u]||{}).prototype)for(o in r){if(a=r[o],i=t.dontCallGetSet?(c=Te(n,o))&&c.value:n[o],!ze(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Oe(a,i)}(t.sham||i&&i.sham)&&K(a,"sham",!0),Se(n,o,a,t)}};var Je,Qe={},Ze=Function.prototype,tr=Ze.apply,er=Ze.call;Qe="object"==typeof Reflect&&Reflect.apply||(c?er.bind(tr):function(){return er.apply(tr,arguments)});var rr,nr,or=(nr=function(t){if("Function"===ve(t))return u(t)})(nr.bind);rr=function(t,e){return vt(t),void 0===e?t:c?or(t,e):function(){return t.apply(e,arguments)}};var ir={};ir=Z("document","documentElement");var ar={};ar=u([].slice);var cr={},ur=TypeError;cr=function(t,e){if(t<e)throw ur("Not enough arguments");return t};var sr;sr=/(?:ipad|iphone|ipod).*applewebkit/i.test(at);var lr,fr,pr,dr,hr=fr={};function vr(){throw new Error("setTimeout has not been defined")}function mr(){throw new Error("clearTimeout has not been defined")}function yr(t){if(pr===setTimeout)return setTimeout(t,0);if((pr===vr||!pr)&&setTimeout)return pr=setTimeout,setTimeout(t,0);try{return pr(t,0)}catch(e){try{return pr.call(null,t,0)}catch(e){return pr.call(this,t,0)}}}!function(){try{pr="function"==typeof setTimeout?setTimeout:vr}catch(t){pr=vr}try{dr="function"==typeof clearTimeout?clearTimeout:mr}catch(t){dr=mr}}();var gr,br=[],wr=!1,Sr=-1;function Er(){wr&&gr&&(wr=!1,gr.length?br=gr.concat(br):Sr=-1,br.length&&Tr())}function Tr(){if(!wr){var t=yr(Er);wr=!0;for(var e=br.length;e;){for(gr=br,br=[];++Sr<e;)gr&&gr[Sr].run();Sr=-1,e=br.length}gr=null,wr=!1,function(t){if(dr===clearTimeout)return clearTimeout(t);if((dr===mr||!dr)&&clearTimeout)return dr=clearTimeout,clearTimeout(t);try{return dr(t)}catch(e){try{return dr.call(null,t)}catch(e){return dr.call(this,t)}}}(t)}}function Or(t,e){this.fun=t,this.array=e}function Lr(){}hr.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];br.push(new Or(t,e)),1!==br.length||wr||yr(Tr)},Or.prototype.run=function(){this.fun.apply(null,this.array)},hr.title="browser",hr.browser=!0,hr.env={},hr.argv=[],hr.version="",hr.versions={},hr.on=Lr,hr.addListener=Lr,hr.once=Lr,hr.off=Lr,hr.removeListener=Lr,hr.removeAllListeners=Lr,hr.emit=Lr,hr.prependListener=Lr,hr.prependOnceListener=Lr,hr.listeners=function(t){return[]},hr.binding=function(t){throw new Error("process.binding is not supported")},hr.cwd=function(){return"/"},hr.chdir=function(t){throw new Error("process.chdir is not supported")},hr.umask=function(){return 0},lr=void 0!==fr&&"process"==ve(fr);var kr,jr,Pr,Ir,qr=e.setImmediate,xr=e.clearImmediate,Fr=e.process,_r=e.Dispatch,Mr=e.Function,Cr=e.MessageChannel,Ar=e.String,Dr=0,Rr={},Nr="onreadystatechange";o((function(){kr=e.location}));var Gr=function(t){if(b(Rr,t)){var e=Rr[t];delete Rr[t],e()}},Br=function(t){return function(){Gr(t)}},Kr=function(t){Gr(t.data)},Ur=function(t){e.postMessage(Ar(t),kr.protocol+"//"+kr.host)};qr&&xr||(qr=function(t){cr(arguments.length,1);var e=d(t)?t:Mr(t),r=ar(arguments,1);return Rr[++Dr]=function(){Qe(e,void 0,r)},jr(Dr),Dr},xr=function(t){delete Rr[t]},lr?jr=function(t){Fr.nextTick(Br(t))}:_r&&_r.now?jr=function(t){_r.now(Br(t))}:Cr&&!sr?(Ir=(Pr=new Cr).port2,Pr.port1.onmessage=Kr,jr=rr(Ir.postMessage,Ir)):e.addEventListener&&d(e.postMessage)&&!e.importScripts&&kr&&"file:"!==kr.protocol&&!o(Ur)?(jr=Ur,e.addEventListener("message",Kr,!1)):jr=Nr in B("script")?function(t){ir.appendChild(B("script"))[Nr]=function(){ir.removeChild(this),Gr(t)}}:function(t){setTimeout(Br(t),0)});var zr=(Je={set:qr,clear:xr}).clear;ue({global:!0,bind:!0,enumerable:!0,forced:e.clearImmediate!==zr},{clearImmediate:zr});var Hr,Wr,Yr=Je.set;Wr="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Vr,Xr=e.Function,$r=/MSIE .\./.test(at)||Wr&&((Vr=e.Bun.version.split(".")).length<3||0==Vr[0]&&(Vr[1]<3||3==Vr[1]&&0==Vr[2]));Hr=function(t,e){var r=e?2:1;return $r?function(n,o){var i=cr(arguments.length,1)>r,a=d(n)?n:Xr(n),c=i?ar(arguments,r):[],u=i?function(){Qe(a,this,c)}:a;return e?t(u,o):t(u)}:t};var Jr=e.setImmediate?Hr(Yr,!1):Yr;ue({global:!0,bind:!0,enumerable:!0,forced:e.setImmediate!==Jr},{setImmediate:Jr});var Qr=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new q(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",m={};function y(){}function g(){}function b(){}var w={};s(w,a,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(x([])));E&&E!==r&&n.call(E,a)&&(w=E);var T=b.prototype=y.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(t,e,r){var n=p;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function x(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return g.prototype=b,o(T,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},O(L.prototype),s(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(T),s(T,u,"Generator"),s(T,a,(function(){return this})),s(T,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}({});try{regeneratorRuntime=Qr}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Qr:Function("r","regeneratorRuntime = r")(Qr)}const Zr=(t,e=(()=>{}))=>{new Promise(((e,r)=>{const n=document.createElement("script");document.head.appendChild(n),n.onload=e,n.onerror=r,n.async=!0,n.src=t})).then(e)},tn={};function en(t){const e=document.querySelector('[c-el="sign-up-modul"]'),r=e?.querySelector("form"),n=e?.querySelector(".google-sign-up-btn"),o=e?.querySelector(".pop--up_x"),i=document?.querySelector('[c-el="review-opener"]'),a=StudioForm[parseFloat(r?.parentElement?.getAttribute("data-sf-id")||"-1")];if(!(o&&e&&r&&a&&n))throw new Error("KannaMapsInteractions -> register.ts: Coulnd't find required elements!");a.events.afterSubmit((()=>{const r=a.data?.response?.authToken;if(!r)throw new Error("KannaMapsInteractions -> register.ts: Coulnd't find token!");e.style.pointerEvents="none",ls.set("userToken",r,{ttl:2592e3}),ls.set("user",{email:a.data.payload.email,name:a.data.payload.name}),t.buttonState(),setTimeout((()=>{o.click(),i?.click()}),1e3*a.animationData.timeBoth+300)})),n.addEventListener("click",(()=>{t.googleAuth()}))}function rn(t){const e=document.querySelector('[c-el="sign-in-modul"]'),r=e?.querySelector("form"),n=e?.querySelector(".google-sign-up-btn"),o=e?.querySelector(".pop--up_x"),i=document?.querySelector('[c-el="review-opener"]'),a=StudioForm[parseFloat(r?.parentElement?.getAttribute("data-sf-id")||"-1")];if(!(o&&e&&r&&a&&n))throw new Error("KannaMapsInteractions -> login.ts: Coulnd't find required elements!");a.events.afterSubmit((()=>{const r=a.data?.response?.authToken,n=a.data?.response?.confirmed;if(!r)throw new Error("KannaMapsInteractions -> login.ts: Coulnd't find token!");e.style.pointerEvents="none",ls.set("userToken",r,{ttl:2592e3}),ls.set("user",{...ls.get("user"),confirmed:n}),t.buttonState(),setTimeout((()=>{o.click(),i?.click()}),1e3*a.animationData.timeBoth+300)})),n.addEventListener("click",(()=>{t.googleAuth()}))}function nn(t){const e=document.querySelectorAll('[c-el="logout"]');if(!e.length)throw new Error("KannaMapsInteractions -> logout.ts: Coulnd't find required elements!");e.forEach((e=>e.addEventListener("click",(()=>{ls.remove("userToken"),t.buttonState(),window.location.reload()}))))}function on(t){const e=document.querySelector('[c-el="review-modul"]'),r=e?.querySelector("form"),n=e?.querySelector(".pop--up_x"),o=(document?.querySelector('[c-el="review-opener"]'),StudioForm[parseFloat(r?.parentElement?.getAttribute("data-sf-id")||"-1")]);n&&e&&r&&o?o.events.onSubmit((()=>{r.setAttribute("data-auth-token",ls.get("userToken"))})):console.warn("KannaMapsInteractions -> review.ts: Coulnd't find required elements!")}location.pathname;var an="https://"+location.host+"/anmeldung",cn="https://app.kannamaps.de/api:U0aE1wpF/oauth/google/init",un="https://app.kannamaps.de/api:U0aE1wpF/oauth/google/continue",sn=[],ln=[];function fn(){var t=new URL(cn);t.searchParams.set("redirect_uri",an),t=t.toString(),fetch(t,{headers:sn,method:"GET"}).then((t=>t.json())).then((t=>ln=t)).then((()=>{return t=ln,void(window.location.href=t.authUrl);var t})).catch((t=>{console.error("Error:",t)}))}function pn(t){var e=new URL(un);e.searchParams.set("redirect_uri",an),e.searchParams.set("code",t),e=e.toString(),localStorage.removeItem("googleOAuthCode"),fetch(e,{headers:sn,method:"GET"}).then((t=>t.json())).then((t=>ln=t)).then((()=>{return t=ln,ls.set("userToken",t.token,{ttl:2592e3}),ls.set("user",{email:t.email,name:t.name,confirmed:t.confirmed}),void tn.buttonState();var t})).catch((t=>{console.error("Error:",t)}))}const dn=function(){fn()},hn=function(){var t=localStorage.getItem("googleOAuthCode");t&&pn(t)};function vn(t){const e=document.querySelector('[c-el="forgot-password-modul"]'),r=e?.querySelector("form"),n=e?.querySelector(".pop--up_x"),o=document.querySelector('[c-el="new-password-modul"]'),i=document.getElementById("security_email"),a=StudioForm[parseFloat(r?.parentElement?.getAttribute("data-sf-id")||"-1")];if(!(n&&e&&r&&a&&i&&o))throw new Error("KannaMapsInteractions -> initPwReset.ts: Coulnd't find required elements!");a.events.afterSubmit((()=>{i.value=a.data.payload[0].value,setTimeout((()=>{n.click(),o.classList.add("cc-active")}),1e3*a.animationData.timeBoth+300)}))}function mn(t){const e=document.querySelector('[c-el="new-password-modul"]'),r=e?.querySelector("form"),n=e?.querySelector(".pop--up_x"),o=document?.querySelector('[c-el="review-opener"]'),i=StudioForm[parseFloat(r?.parentElement?.getAttribute("data-sf-id")||"-1")];if(!(n&&e&&r&&i))throw new Error("KannaMapsInteractions -> submitPwReset.ts: Coulnd't find required elements!");i.events.afterSubmit((()=>{const r=i.data?.response?.authToken,a=i.data?.response?.user;if(!r)throw new Error("KannaMapsInteractions -> submitPwReset.ts: Coulnd't find token!");e.style.pointerEvents="none",ls.set("userToken",r,{ttl:2592e3}),ls.set("user",a),t.buttonState(),setTimeout((()=>{n.click(),o?.click()}),1e3*i.animationData.timeBoth+300)}))}function yn(t){const e=document.querySelector('[c-el="register"]'),r=document.querySelector('[c-el="login"]'),n=document.querySelector('[c-el="logout"]'),o=document.querySelector('[c-el="review-closer"]'),i=document.querySelector('[c-el="review-modul"]');if(!e||!r||!n)throw new Error("KannaMapsInteractions -> view.ts: Coulnd't find required elements!");const a=[e,r,n];t.buttonState=()=>{a.forEach((t=>t.classList.add("cc-inactive"))),ls.get("userToken")?n.classList.remove("cc-inactive"):ls.get("user")?r.classList.remove("cc-inactive"):e.classList.remove("cc-inactive");const t=document.querySelector('[c-el="complete-setup"]');ls.get("userToken")&&!ls.get("user").confirmed?t&&t.classList.remove("cc-inactive"):t&&t.classList.add("cc-inactive")},t.googleAuth=dn,hn(),t.buttonState(),en(t),rn(t),nn(t),on(),vn(),mn(t);const c=document?.querySelectorAll('[c-el="review-opener"]');c.forEach((t=>t.addEventListener("click",(()=>{ls.get("userToken")||(ls.get("user")?(r.click(),i&&(i.style.opacity="0"),setTimeout((()=>{o?.click(),i&&(i.style.opacity="")}),100)):(e.click(),i&&(i.style.opacity="0"),setTimeout((()=>{o?.click(),i&&(i.style.opacity="")}),100)))}))))}((t,...e)=>{!function r(n){n!==e.length?"undefined"===e[n].type?Zr(e[n].src,(()=>r(n+1))):r(n+1):"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}(0)})((()=>{!function t(){"undefined"==typeof StudioForm?setTimeout(t,4):async function(){ls.config.encrypt=!0,ls.config.secret=420,localStorage.setItem("lastVisitedPath",location.pathname),await async function(){}(),yn(tn)}()}()}),{type:typeof ls,src:"https://cdn.jsdelivr.net/npm/localstorage-slim"});})()