(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function p9(e,c){const a=Object.create(null),s=e.split(",");for(let t=0;t<s.length;t++)a[s[t]]=!0;return c?t=>!!a[t.toLowerCase()]:t=>!!a[t]}function L5(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++){const s=e[a],t=D1(s)?gz(s):L5(s);if(t)for(const r in t)c[r]=t[r]}return c}else{if(D1(e))return e;if(x1(e))return e}}const Hz=/;(?![^(]*\))/g,Mz=/:([^]+)/,Vz=/\/\*.*?\*\//gs;function gz(e){const c={};return e.replace(Vz,"").split(Hz).forEach(a=>{if(a){const s=a.split(Mz);s.length>1&&(c[s[0].trim()]=s[1].trim())}}),c}function b5(e){let c="";if(D1(e))c=e;else if(Q(e))for(let a=0;a<e.length;a++){const s=b5(e[a]);s&&(c+=s+" ")}else if(x1(e))for(const a in e)e[a]&&(c+=a+" ");return c.trim()}const Lz="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bz=p9(Lz);function St(e){return!!e||e===""}const W1=e=>D1(e)?e:e==null?"":Q(e)||x1(e)&&(e.toString===At||!X(e.toString))?JSON.stringify(e,Nt,2):String(e),Nt=(e,c)=>c&&c.__v_isRef?Nt(e,c.value):z4(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((a,[s,t])=>(a[`${s} =>`]=t,a),{})}:wt(c)?{[`Set(${c.size})`]:[...c.values()]}:x1(c)&&!Q(c)&&!Tt(c)?String(c):c,H1={},d4=[],k2=()=>{},xz=()=>!1,yz=/^on[^a-z]/,x5=e=>yz.test(e),d9=e=>e.startsWith("onUpdate:"),i2=Object.assign,z9=(e,c)=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)},Sz=Object.prototype.hasOwnProperty,i1=(e,c)=>Sz.call(e,c),Q=Array.isArray,z4=e=>y5(e)==="[object Map]",wt=e=>y5(e)==="[object Set]",X=e=>typeof e=="function",D1=e=>typeof e=="string",H9=e=>typeof e=="symbol",x1=e=>e!==null&&typeof e=="object",kt=e=>x1(e)&&X(e.then)&&X(e.catch),At=Object.prototype.toString,y5=e=>At.call(e),Nz=e=>y5(e).slice(8,-1),Tt=e=>y5(e)==="[object Object]",M9=e=>D1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,D8=p9(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),S5=e=>{const c=Object.create(null);return a=>c[a]||(c[a]=e(a))},wz=/-(\w)/g,U2=S5(e=>e.replace(wz,(c,a)=>a?a.toUpperCase():"")),kz=/\B([A-Z])/g,F4=S5(e=>e.replace(kz,"-$1").toLowerCase()),N5=S5(e=>e.charAt(0).toUpperCase()+e.slice(1)),P0=S5(e=>e?`on${N5(e)}`:""),M6=(e,c)=>!Object.is(e,c),R8=(e,c)=>{for(let a=0;a<e.length;a++)e[a](c)},K8=(e,c,a)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:a})},Z8=e=>{const c=parseFloat(e);return isNaN(c)?e:c};let Qe;const Az=()=>Qe||(Qe=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _2;class Et{constructor(c=!1){this.detached=c,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_2,!c&&_2&&(this.index=(_2.scopes||(_2.scopes=[])).push(this)-1)}run(c){if(this.active){const a=_2;try{return _2=this,c()}finally{_2=a}}}on(){_2=this}off(){_2=this.parent}stop(c){if(this.active){let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.scopes)for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!c){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this.active=!1}}}function Pt(e){return new Et(e)}function Tz(e,c=_2){c&&c.active&&c.effects.push(e)}const V9=e=>{const c=new Set(e);return c.w=0,c.n=0,c},_t=e=>(e.w&H3)>0,It=e=>(e.n&H3)>0,Ez=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=H3},Pz=e=>{const{deps:c}=e;if(c.length){let a=0;for(let s=0;s<c.length;s++){const t=c[s];_t(t)&&!It(t)?t.delete(e):c[a++]=t,t.w&=~H3,t.n&=~H3}c.length=a}},h7=new WeakMap;let c6=0,H3=1;const u7=30;let y2;const G3=Symbol(""),m7=Symbol("");class g9{constructor(c,a=null,s){this.fn=c,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,Tz(this,s)}run(){if(!this.active)return this.fn();let c=y2,a=v3;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=y2,y2=this,v3=!0,H3=1<<++c6,c6<=u7?Ez(this):Xe(this),this.fn()}finally{c6<=u7&&Pz(this),H3=1<<--c6,y2=this.parent,v3=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y2===this?this.deferStop=!0:this.active&&(Xe(this),this.onStop&&this.onStop(),this.active=!1)}}function Xe(e){const{deps:c}=e;if(c.length){for(let a=0;a<c.length;a++)c[a].delete(e);c.length=0}}let v3=!0;const Dt=[];function B4(){Dt.push(v3),v3=!1}function O4(){const e=Dt.pop();v3=e===void 0?!0:e}function z2(e,c,a){if(v3&&y2){let s=h7.get(e);s||h7.set(e,s=new Map);let t=s.get(a);t||s.set(a,t=V9()),Rt(t)}}function Rt(e,c){let a=!1;c6<=u7?It(e)||(e.n|=H3,a=!_t(e)):a=!e.has(y2),a&&(e.add(y2),y2.deps.push(e))}function Q2(e,c,a,s,t,r){const n=h7.get(e);if(!n)return;let i=[];if(c==="clear")i=[...n.values()];else if(a==="length"&&Q(e)){const o=Z8(s);n.forEach((l,f)=>{(f==="length"||f>=o)&&i.push(l)})}else switch(a!==void 0&&i.push(n.get(a)),c){case"add":Q(e)?M9(a)&&i.push(n.get("length")):(i.push(n.get(G3)),z4(e)&&i.push(n.get(m7)));break;case"delete":Q(e)||(i.push(n.get(G3)),z4(e)&&i.push(n.get(m7)));break;case"set":z4(e)&&i.push(n.get(G3));break}if(i.length===1)i[0]&&v7(i[0]);else{const o=[];for(const l of i)l&&o.push(...l);v7(V9(o))}}function v7(e,c){const a=Q(e)?e:[...e];for(const s of a)s.computed&&Je(s);for(const s of a)s.computed||Je(s)}function Je(e,c){(e!==y2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _z=p9("__proto__,__v_isRef,__isVue"),Ft=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(H9)),Iz=L9(),Dz=L9(!1,!0),Rz=L9(!0),ca=Fz();function Fz(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...a){const s=h1(this);for(let r=0,n=this.length;r<n;r++)z2(s,"get",r+"");const t=s[c](...a);return t===-1||t===!1?s[c](...a.map(h1)):t}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...a){B4();const s=h1(this)[c].apply(this,a);return O4(),s}}),e}function L9(e=!1,c=!1){return function(s,t,r){if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return c;if(t==="__v_raw"&&r===(e?c?eH:Ut:c?$t:qt).get(s))return s;const n=Q(s);if(!e&&n&&i1(ca,t))return Reflect.get(ca,t,r);const i=Reflect.get(s,t,r);return(H9(t)?Ft.has(t):_z(t))||(e||z2(s,"get",t),c)?i:A1(i)?n&&M9(t)?i:i.value:x1(i)?e?Gt(i):q4(i):i}}const Bz=Bt(),Oz=Bt(!0);function Bt(e=!1){return function(a,s,t,r){let n=a[s];if(y4(n)&&A1(n)&&!A1(t))return!1;if(!e&&(!Y8(t)&&!y4(t)&&(n=h1(n),t=h1(t)),!Q(a)&&A1(n)&&!A1(t)))return n.value=t,!0;const i=Q(a)&&M9(s)?Number(s)<a.length:i1(a,s),o=Reflect.set(a,s,t,r);return a===h1(r)&&(i?M6(t,n)&&Q2(a,"set",s,t):Q2(a,"add",s,t)),o}}function qz(e,c){const a=i1(e,c);e[c];const s=Reflect.deleteProperty(e,c);return s&&a&&Q2(e,"delete",c,void 0),s}function $z(e,c){const a=Reflect.has(e,c);return(!H9(c)||!Ft.has(c))&&z2(e,"has",c),a}function Uz(e){return z2(e,"iterate",Q(e)?"length":G3),Reflect.ownKeys(e)}const Ot={get:Iz,set:Bz,deleteProperty:qz,has:$z,ownKeys:Uz},Gz={get:Rz,set(e,c){return!0},deleteProperty(e,c){return!0}},jz=i2({},Ot,{get:Dz,set:Oz}),b9=e=>e,w5=e=>Reflect.getPrototypeOf(e);function C8(e,c,a=!1,s=!1){e=e.__v_raw;const t=h1(e),r=h1(c);a||(c!==r&&z2(t,"get",c),z2(t,"get",r));const{has:n}=w5(t),i=s?b9:a?S9:V6;if(n.call(t,c))return i(e.get(c));if(n.call(t,r))return i(e.get(r));e!==t&&e.get(c)}function p8(e,c=!1){const a=this.__v_raw,s=h1(a),t=h1(e);return c||(e!==t&&z2(s,"has",e),z2(s,"has",t)),e===t?a.has(e):a.has(e)||a.has(t)}function d8(e,c=!1){return e=e.__v_raw,!c&&z2(h1(e),"iterate",G3),Reflect.get(e,"size",e)}function ea(e){e=h1(e);const c=h1(this);return w5(c).has.call(c,e)||(c.add(e),Q2(c,"add",e,e)),this}function aa(e,c){c=h1(c);const a=h1(this),{has:s,get:t}=w5(a);let r=s.call(a,e);r||(e=h1(e),r=s.call(a,e));const n=t.call(a,e);return a.set(e,c),r?M6(c,n)&&Q2(a,"set",e,c):Q2(a,"add",e,c),this}function sa(e){const c=h1(this),{has:a,get:s}=w5(c);let t=a.call(c,e);t||(e=h1(e),t=a.call(c,e)),s&&s.call(c,e);const r=c.delete(e);return t&&Q2(c,"delete",e,void 0),r}function ta(){const e=h1(this),c=e.size!==0,a=e.clear();return c&&Q2(e,"clear",void 0,void 0),a}function z8(e,c){return function(s,t){const r=this,n=r.__v_raw,i=h1(n),o=c?b9:e?S9:V6;return!e&&z2(i,"iterate",G3),n.forEach((l,f)=>s.call(t,o(l),o(f),r))}}function H8(e,c,a){return function(...s){const t=this.__v_raw,r=h1(t),n=z4(r),i=e==="entries"||e===Symbol.iterator&&n,o=e==="keys"&&n,l=t[e](...s),f=a?b9:c?S9:V6;return!c&&z2(r,"iterate",o?m7:G3),{next(){const{value:h,done:u}=l.next();return u?{value:h,done:u}:{value:i?[f(h[0]),f(h[1])]:f(h),done:u}},[Symbol.iterator](){return this}}}}function o3(e){return function(...c){return e==="delete"?!1:this}}function Wz(){const e={get(r){return C8(this,r)},get size(){return d8(this)},has:p8,add:ea,set:aa,delete:sa,clear:ta,forEach:z8(!1,!1)},c={get(r){return C8(this,r,!1,!0)},get size(){return d8(this)},has:p8,add:ea,set:aa,delete:sa,clear:ta,forEach:z8(!1,!0)},a={get(r){return C8(this,r,!0)},get size(){return d8(this,!0)},has(r){return p8.call(this,r,!0)},add:o3("add"),set:o3("set"),delete:o3("delete"),clear:o3("clear"),forEach:z8(!0,!1)},s={get(r){return C8(this,r,!0,!0)},get size(){return d8(this,!0)},has(r){return p8.call(this,r,!0)},add:o3("add"),set:o3("set"),delete:o3("delete"),clear:o3("clear"),forEach:z8(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=H8(r,!1,!1),a[r]=H8(r,!0,!1),c[r]=H8(r,!1,!0),s[r]=H8(r,!0,!0)}),[e,a,c,s]}const[Kz,Zz,Yz,Qz]=Wz();function x9(e,c){const a=c?e?Qz:Yz:e?Zz:Kz;return(s,t,r)=>t==="__v_isReactive"?!e:t==="__v_isReadonly"?e:t==="__v_raw"?s:Reflect.get(i1(a,t)&&t in s?a:s,t,r)}const Xz={get:x9(!1,!1)},Jz={get:x9(!1,!0)},cH={get:x9(!0,!1)},qt=new WeakMap,$t=new WeakMap,Ut=new WeakMap,eH=new WeakMap;function aH(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sH(e){return e.__v_skip||!Object.isExtensible(e)?0:aH(Nz(e))}function q4(e){return y4(e)?e:y9(e,!1,Ot,Xz,qt)}function tH(e){return y9(e,!1,jz,Jz,$t)}function Gt(e){return y9(e,!0,Gz,cH,Ut)}function y9(e,c,a,s,t){if(!x1(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const r=t.get(e);if(r)return r;const n=sH(e);if(n===0)return e;const i=new Proxy(e,n===2?s:a);return t.set(e,i),i}function C3(e){return y4(e)?C3(e.__v_raw):!!(e&&e.__v_isReactive)}function y4(e){return!!(e&&e.__v_isReadonly)}function Y8(e){return!!(e&&e.__v_isShallow)}function jt(e){return C3(e)||y4(e)}function h1(e){const c=e&&e.__v_raw;return c?h1(c):e}function S4(e){return K8(e,"__v_skip",!0),e}const V6=e=>x1(e)?q4(e):e,S9=e=>x1(e)?Gt(e):e;function Wt(e){v3&&y2&&(e=h1(e),Rt(e.dep||(e.dep=V9())))}function Kt(e,c){e=h1(e),e.dep&&v7(e.dep)}function A1(e){return!!(e&&e.__v_isRef===!0)}function N9(e){return Zt(e,!1)}function rH(e){return Zt(e,!0)}function Zt(e,c){return A1(e)?e:new nH(e,c)}class nH{constructor(c,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?c:h1(c),this._value=a?c:V6(c)}get value(){return Wt(this),this._value}set value(c){const a=this.__v_isShallow||Y8(c)||y4(c);c=a?c:h1(c),M6(c,this._rawValue)&&(this._rawValue=c,this._value=a?c:V6(c),Kt(this))}}function H4(e){return A1(e)?e.value:e}const iH={get:(e,c,a)=>H4(Reflect.get(e,c,a)),set:(e,c,a,s)=>{const t=e[c];return A1(t)&&!A1(a)?(t.value=a,!0):Reflect.set(e,c,a,s)}};function Yt(e){return C3(e)?e:new Proxy(e,iH)}function oH(e){const c=Q(e)?new Array(e.length):{};for(const a in e)c[a]=fH(e,a);return c}class lH{constructor(c,a,s){this._object=c,this._key=a,this._defaultValue=s,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}}function fH(e,c,a){const s=e[c];return A1(s)?s:new lH(e,c,a)}var Qt;class hH{constructor(c,a,s,t){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[Qt]=!1,this._dirty=!0,this.effect=new g9(c,()=>{this._dirty||(this._dirty=!0,Kt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!t,this.__v_isReadonly=s}get value(){const c=h1(this);return Wt(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}Qt="__v_isReadonly";function uH(e,c,a=!1){let s,t;const r=X(e);return r?(s=e,t=k2):(s=e.get,t=e.set),new hH(s,t,r||!t,a)}function p3(e,c,a,s){let t;try{t=s?e(...s):e()}catch(r){k5(r,c,a)}return t}function A2(e,c,a,s){if(X(e)){const r=p3(e,c,a,s);return r&&kt(r)&&r.catch(n=>{k5(n,c,a)}),r}const t=[];for(let r=0;r<e.length;r++)t.push(A2(e[r],c,a,s));return t}function k5(e,c,a,s=!0){const t=c?c.vnode:null;if(c){let r=c.parent;const n=c.proxy,i=a;for(;r;){const l=r.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,n,i)===!1)return}r=r.parent}const o=c.appContext.config.errorHandler;if(o){p3(o,null,10,[e,n,i]);return}}mH(e,a,t,s)}function mH(e,c,a,s=!0){console.error(e)}let g6=!1,C7=!1;const e2=[];let D2=0;const M4=[];let Z2=null,I3=0;const Xt=Promise.resolve();let w9=null;function k9(e){const c=w9||Xt;return e?c.then(this?e.bind(this):e):c}function vH(e){let c=D2+1,a=e2.length;for(;c<a;){const s=c+a>>>1;L6(e2[s])<e?c=s+1:a=s}return c}function A9(e){(!e2.length||!e2.includes(e,g6&&e.allowRecurse?D2+1:D2))&&(e.id==null?e2.push(e):e2.splice(vH(e.id),0,e),Jt())}function Jt(){!g6&&!C7&&(C7=!0,w9=Xt.then(er))}function CH(e){const c=e2.indexOf(e);c>D2&&e2.splice(c,1)}function pH(e){Q(e)?M4.push(...e):(!Z2||!Z2.includes(e,e.allowRecurse?I3+1:I3))&&M4.push(e),Jt()}function ra(e,c=g6?D2+1:0){for(;c<e2.length;c++){const a=e2[c];a&&a.pre&&(e2.splice(c,1),c--,a())}}function cr(e){if(M4.length){const c=[...new Set(M4)];if(M4.length=0,Z2){Z2.push(...c);return}for(Z2=c,Z2.sort((a,s)=>L6(a)-L6(s)),I3=0;I3<Z2.length;I3++)Z2[I3]();Z2=null,I3=0}}const L6=e=>e.id==null?1/0:e.id,dH=(e,c)=>{const a=L6(e)-L6(c);if(a===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return a};function er(e){C7=!1,g6=!0,e2.sort(dH);const c=k2;try{for(D2=0;D2<e2.length;D2++){const a=e2[D2];a&&a.active!==!1&&p3(a,null,14)}}finally{D2=0,e2.length=0,cr(),g6=!1,w9=null,(e2.length||M4.length)&&er()}}function zH(e,c,...a){if(e.isUnmounted)return;const s=e.vnode.props||H1;let t=a;const r=c.startsWith("update:"),n=r&&c.slice(7);if(n&&n in s){const f=`${n==="modelValue"?"model":n}Modifiers`,{number:h,trim:u}=s[f]||H1;u&&(t=a.map(C=>D1(C)?C.trim():C)),h&&(t=a.map(Z8))}let i,o=s[i=P0(c)]||s[i=P0(U2(c))];!o&&r&&(o=s[i=P0(F4(c))]),o&&A2(o,e,6,t);const l=s[i+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,A2(l,e,6,t)}}function ar(e,c,a=!1){const s=c.emitsCache,t=s.get(e);if(t!==void 0)return t;const r=e.emits;let n={},i=!1;if(!X(e)){const o=l=>{const f=ar(l,c,!0);f&&(i=!0,i2(n,f))};!a&&c.mixins.length&&c.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!r&&!i?(x1(e)&&s.set(e,null),null):(Q(r)?r.forEach(o=>n[o]=null):i2(n,r),x1(e)&&s.set(e,n),n)}function A5(e,c){return!e||!x5(c)?!1:(c=c.slice(2).replace(/Once$/,""),i1(e,c[0].toLowerCase()+c.slice(1))||i1(e,F4(c))||i1(e,c))}let Y1=null,sr=null;function Q8(e){const c=Y1;return Y1=e,sr=e&&e.type.__scopeId||null,c}function B2(e,c=Y1,a){if(!c||e._n)return e;const s=(...t)=>{s._d&&va(-1);const r=Q8(c);let n;try{n=e(...t)}finally{Q8(r),s._d&&va(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function _0(e){const{type:c,vnode:a,proxy:s,withProxy:t,props:r,propsOptions:[n],slots:i,attrs:o,emit:l,render:f,renderCache:h,data:u,setupState:C,ctx:z,inheritAttrs:L}=e;let k,d;const M=Q8(e);try{if(a.shapeFlag&4){const B=t||s;k=I2(f.call(B,B,h,r,C,u,z)),d=o}else{const B=c;k=I2(B.length>1?B(r,{attrs:o,slots:i,emit:l}):B(r,null)),d=c.props?o:HH(o)}}catch(B){i6.length=0,k5(B,e,1),k=r1(M3)}let y=k;if(d&&L!==!1){const B=Object.keys(d),{shapeFlag:G}=y;B.length&&G&7&&(n&&B.some(d9)&&(d=MH(d,n)),y=N4(y,d))}return a.dirs&&(y=N4(y),y.dirs=y.dirs?y.dirs.concat(a.dirs):a.dirs),a.transition&&(y.transition=a.transition),k=y,Q8(M),k}const HH=e=>{let c;for(const a in e)(a==="class"||a==="style"||x5(a))&&((c||(c={}))[a]=e[a]);return c},MH=(e,c)=>{const a={};for(const s in e)(!d9(s)||!(s.slice(9)in c))&&(a[s]=e[s]);return a};function VH(e,c,a){const{props:s,children:t,component:r}=e,{props:n,children:i,patchFlag:o}=c,l=r.emitsOptions;if(c.dirs||c.transition)return!0;if(a&&o>=0){if(o&1024)return!0;if(o&16)return s?na(s,n,l):!!n;if(o&8){const f=c.dynamicProps;for(let h=0;h<f.length;h++){const u=f[h];if(n[u]!==s[u]&&!A5(l,u))return!0}}}else return(t||i)&&(!i||!i.$stable)?!0:s===n?!1:s?n?na(s,n,l):!0:!!n;return!1}function na(e,c,a){const s=Object.keys(c);if(s.length!==Object.keys(e).length)return!0;for(let t=0;t<s.length;t++){const r=s[t];if(c[r]!==e[r]&&!A5(a,r))return!0}return!1}function gH({vnode:e,parent:c},a){for(;c&&c.subTree===e;)(e=c.vnode).el=a,c=c.parent}const LH=e=>e.__isSuspense;function bH(e,c){c&&c.pendingBranch?Q(e)?c.effects.push(...e):c.effects.push(e):pH(e)}function F8(e,c){if(U1){let a=U1.provides;const s=U1.parent&&U1.parent.provides;s===a&&(a=U1.provides=Object.create(s)),a[e]=c}}function q2(e,c,a=!1){const s=U1||Y1;if(s){const t=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(t&&e in t)return t[e];if(arguments.length>1)return a&&X(c)?c.call(s.proxy):c}}const M8={};function V4(e,c,a){return tr(e,c,a)}function tr(e,c,{immediate:a,deep:s,flush:t,onTrack:r,onTrigger:n}=H1){const i=U1;let o,l=!1,f=!1;if(A1(e)?(o=()=>e.value,l=Y8(e)):C3(e)?(o=()=>e,s=!0):Q(e)?(f=!0,l=e.some(y=>C3(y)||Y8(y)),o=()=>e.map(y=>{if(A1(y))return y.value;if(C3(y))return R3(y);if(X(y))return p3(y,i,2)})):X(e)?c?o=()=>p3(e,i,2):o=()=>{if(!(i&&i.isUnmounted))return h&&h(),A2(e,i,3,[u])}:o=k2,c&&s){const y=o;o=()=>R3(y())}let h,u=y=>{h=d.onStop=()=>{p3(y,i,4)}},C;if(x6)if(u=k2,c?a&&A2(c,i,3,[o(),f?[]:void 0,u]):o(),t==="sync"){const y=dM();C=y.__watcherHandles||(y.__watcherHandles=[])}else return k2;let z=f?new Array(e.length).fill(M8):M8;const L=()=>{if(!!d.active)if(c){const y=d.run();(s||l||(f?y.some((B,G)=>M6(B,z[G])):M6(y,z)))&&(h&&h(),A2(c,i,3,[y,z===M8?void 0:f&&z[0]===M8?[]:z,u]),z=y)}else d.run()};L.allowRecurse=!!c;let k;t==="sync"?k=L:t==="post"?k=()=>h2(L,i&&i.suspense):(L.pre=!0,i&&(L.id=i.uid),k=()=>A9(L));const d=new g9(o,k);c?a?L():z=d.run():t==="post"?h2(d.run.bind(d),i&&i.suspense):d.run();const M=()=>{d.stop(),i&&i.scope&&z9(i.scope.effects,d)};return C&&C.push(M),M}function xH(e,c,a){const s=this.proxy,t=D1(e)?e.includes(".")?rr(s,e):()=>s[e]:e.bind(s,s);let r;X(c)?r=c:(r=c.handler,a=c);const n=U1;w4(this);const i=tr(t,r.bind(s),a);return n?w4(n):j3(),i}function rr(e,c){const a=c.split(".");return()=>{let s=e;for(let t=0;t<a.length&&s;t++)s=s[a[t]];return s}}function R3(e,c){if(!x1(e)||e.__v_skip||(c=c||new Set,c.has(e)))return e;if(c.add(e),A1(e))R3(e.value,c);else if(Q(e))for(let a=0;a<e.length;a++)R3(e[a],c);else if(wt(e)||z4(e))e.forEach(a=>{R3(a,c)});else if(Tt(e))for(const a in e)R3(e[a],c);return e}function U6(e){return X(e)?{setup:e,name:e.name}:e}const r6=e=>!!e.type.__asyncLoader,nr=e=>e.type.__isKeepAlive;function yH(e,c){ir(e,"a",c)}function SH(e,c){ir(e,"da",c)}function ir(e,c,a=U1){const s=e.__wdc||(e.__wdc=()=>{let t=a;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(T5(c,s,a),a){let t=a.parent;for(;t&&t.parent;)nr(t.parent.vnode)&&NH(s,c,a,t),t=t.parent}}function NH(e,c,a,s){const t=T5(c,e,s,!0);T9(()=>{z9(s[c],t)},a)}function T5(e,c,a=U1,s=!1){if(a){const t=a[e]||(a[e]=[]),r=c.__weh||(c.__weh=(...n)=>{if(a.isUnmounted)return;B4(),w4(a);const i=A2(c,a,e,n);return j3(),O4(),i});return s?t.unshift(r):t.push(r),r}}const r3=e=>(c,a=U1)=>(!x6||e==="sp")&&T5(e,(...s)=>c(...s),a),wH=r3("bm"),kH=r3("m"),AH=r3("bu"),TH=r3("u"),EH=r3("bum"),T9=r3("um"),PH=r3("sp"),_H=r3("rtg"),IH=r3("rtc");function DH(e,c=U1){T5("ec",e,c)}function RH(e,c){const a=Y1;if(a===null)return e;const s=_5(a)||a.proxy,t=e.dirs||(e.dirs=[]);for(let r=0;r<c.length;r++){let[n,i,o,l=H1]=c[r];n&&(X(n)&&(n={mounted:n,updated:n}),n.deep&&R3(i),t.push({dir:n,instance:s,value:i,oldValue:void 0,arg:o,modifiers:l}))}return e}function T3(e,c,a,s){const t=e.dirs,r=c&&c.dirs;for(let n=0;n<t.length;n++){const i=t[n];r&&(i.oldValue=r[n].value);let o=i.dir[s];o&&(B4(),A2(o,a,8,[e.el,i,e,c]),O4())}}const E9="components";function G2(e,c){return lr(E9,e,!0,c)||e}const or=Symbol();function FH(e){return D1(e)?lr(E9,e,!1)||e:e||or}function lr(e,c,a=!0,s=!1){const t=Y1||U1;if(t){const r=t.type;if(e===E9){const i=vM(r,!1);if(i&&(i===c||i===U2(c)||i===N5(U2(c))))return r}const n=ia(t[e]||r[e],c)||ia(t.appContext[e],c);return!n&&s?r:n}}function ia(e,c){return e&&(e[c]||e[U2(c)]||e[N5(U2(c))])}function I0(e,c,a,s){let t;const r=a&&a[s];if(Q(e)||D1(e)){t=new Array(e.length);for(let n=0,i=e.length;n<i;n++)t[n]=c(e[n],n,void 0,r&&r[n])}else if(typeof e=="number"){t=new Array(e);for(let n=0;n<e;n++)t[n]=c(n+1,n,void 0,r&&r[n])}else if(x1(e))if(e[Symbol.iterator])t=Array.from(e,(n,i)=>c(n,i,void 0,r&&r[i]));else{const n=Object.keys(e);t=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const l=n[i];t[i]=c(e[l],l,i,r&&r[i])}}else t=[];return a&&(a[s]=t),t}function fr(e,c,a={},s,t){if(Y1.isCE||Y1.parent&&r6(Y1.parent)&&Y1.parent.isCE)return c!=="default"&&(a.name=c),r1("slot",a,s&&s());let r=e[c];r&&r._c&&(r._d=!1),S1();const n=r&&hr(r(a)),i=I9(c2,{key:a.key||n&&n.key||`_${c}`},n||(s?s():[]),n&&e._===1?64:-2);return!t&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function hr(e){return e.some(c=>J8(c)?!(c.type===M3||c.type===c2&&!hr(c.children)):!0)?e:null}const p7=e=>e?br(e)?_5(e)||e.proxy:p7(e.parent):null,n6=i2(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>p7(e.parent),$root:e=>p7(e.root),$emit:e=>e.emit,$options:e=>P9(e),$forceUpdate:e=>e.f||(e.f=()=>A9(e.update)),$nextTick:e=>e.n||(e.n=k9.bind(e.proxy)),$watch:e=>xH.bind(e)}),D0=(e,c)=>e!==H1&&!e.__isScriptSetup&&i1(e,c),BH={get({_:e},c){const{ctx:a,setupState:s,data:t,props:r,accessCache:n,type:i,appContext:o}=e;let l;if(c[0]!=="$"){const C=n[c];if(C!==void 0)switch(C){case 1:return s[c];case 2:return t[c];case 4:return a[c];case 3:return r[c]}else{if(D0(s,c))return n[c]=1,s[c];if(t!==H1&&i1(t,c))return n[c]=2,t[c];if((l=e.propsOptions[0])&&i1(l,c))return n[c]=3,r[c];if(a!==H1&&i1(a,c))return n[c]=4,a[c];d7&&(n[c]=0)}}const f=n6[c];let h,u;if(f)return c==="$attrs"&&z2(e,"get",c),f(e);if((h=i.__cssModules)&&(h=h[c]))return h;if(a!==H1&&i1(a,c))return n[c]=4,a[c];if(u=o.config.globalProperties,i1(u,c))return u[c]},set({_:e},c,a){const{data:s,setupState:t,ctx:r}=e;return D0(t,c)?(t[c]=a,!0):s!==H1&&i1(s,c)?(s[c]=a,!0):i1(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(r[c]=a,!0)},has({_:{data:e,setupState:c,accessCache:a,ctx:s,appContext:t,propsOptions:r}},n){let i;return!!a[n]||e!==H1&&i1(e,n)||D0(c,n)||(i=r[0])&&i1(i,n)||i1(s,n)||i1(n6,n)||i1(t.config.globalProperties,n)},defineProperty(e,c,a){return a.get!=null?e._.accessCache[c]=0:i1(a,"value")&&this.set(e,c,a.value,null),Reflect.defineProperty(e,c,a)}};let d7=!0;function OH(e){const c=P9(e),a=e.proxy,s=e.ctx;d7=!1,c.beforeCreate&&oa(c.beforeCreate,e,"bc");const{data:t,computed:r,methods:n,watch:i,provide:o,inject:l,created:f,beforeMount:h,mounted:u,beforeUpdate:C,updated:z,activated:L,deactivated:k,beforeDestroy:d,beforeUnmount:M,destroyed:y,unmounted:B,render:G,renderTracked:l1,renderTriggered:W,errorCaptured:e1,serverPrefetch:g1,expose:O1,inheritAttrs:o2,components:V2,directives:i3,filters:C2}=c;if(l&&qH(l,s,null,e.appContext.config.unwrapInjectedRef),n)for(const d1 in n){const C1=n[d1];X(C1)&&(s[d1]=C1.bind(a))}if(t){const d1=t.call(a,a);x1(d1)&&(e.data=q4(d1))}if(d7=!0,r)for(const d1 in r){const C1=r[d1],L2=X(C1)?C1.bind(a,a):X(C1.get)?C1.get.bind(a,a):k2,A3=!X(C1)&&X(C1.set)?C1.set.bind(a):k2,b2=L1({get:L2,set:A3});Object.defineProperty(s,d1,{enumerable:!0,configurable:!0,get:()=>b2.value,set:l2=>b2.value=l2})}if(i)for(const d1 in i)ur(i[d1],s,a,d1);if(o){const d1=X(o)?o.call(a):o;Reflect.ownKeys(d1).forEach(C1=>{F8(C1,d1[C1])})}f&&oa(f,e,"c");function T1(d1,C1){Q(C1)?C1.forEach(L2=>d1(L2.bind(a))):C1&&d1(C1.bind(a))}if(T1(wH,h),T1(kH,u),T1(AH,C),T1(TH,z),T1(yH,L),T1(SH,k),T1(DH,e1),T1(IH,l1),T1(_H,W),T1(EH,M),T1(T9,B),T1(PH,g1),Q(O1))if(O1.length){const d1=e.exposed||(e.exposed={});O1.forEach(C1=>{Object.defineProperty(d1,C1,{get:()=>a[C1],set:L2=>a[C1]=L2})})}else e.exposed||(e.exposed={});G&&e.render===k2&&(e.render=G),o2!=null&&(e.inheritAttrs=o2),V2&&(e.components=V2),i3&&(e.directives=i3)}function qH(e,c,a=k2,s=!1){Q(e)&&(e=z7(e));for(const t in e){const r=e[t];let n;x1(r)?"default"in r?n=q2(r.from||t,r.default,!0):n=q2(r.from||t):n=q2(r),A1(n)&&s?Object.defineProperty(c,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):c[t]=n}}function oa(e,c,a){A2(Q(e)?e.map(s=>s.bind(c.proxy)):e.bind(c.proxy),c,a)}function ur(e,c,a,s){const t=s.includes(".")?rr(a,s):()=>a[s];if(D1(e)){const r=c[e];X(r)&&V4(t,r)}else if(X(e))V4(t,e.bind(a));else if(x1(e))if(Q(e))e.forEach(r=>ur(r,c,a,s));else{const r=X(e.handler)?e.handler.bind(a):c[e.handler];X(r)&&V4(t,r,e)}}function P9(e){const c=e.type,{mixins:a,extends:s}=c,{mixins:t,optionsCache:r,config:{optionMergeStrategies:n}}=e.appContext,i=r.get(c);let o;return i?o=i:!t.length&&!a&&!s?o=c:(o={},t.length&&t.forEach(l=>X8(o,l,n,!0)),X8(o,c,n)),x1(c)&&r.set(c,o),o}function X8(e,c,a,s=!1){const{mixins:t,extends:r}=c;r&&X8(e,r,a,!0),t&&t.forEach(n=>X8(e,n,a,!0));for(const n in c)if(!(s&&n==="expose")){const i=$H[n]||a&&a[n];e[n]=i?i(e[n],c[n]):c[n]}return e}const $H={data:la,props:P3,emits:P3,methods:P3,computed:P3,beforeCreate:r2,created:r2,beforeMount:r2,mounted:r2,beforeUpdate:r2,updated:r2,beforeDestroy:r2,beforeUnmount:r2,destroyed:r2,unmounted:r2,activated:r2,deactivated:r2,errorCaptured:r2,serverPrefetch:r2,components:P3,directives:P3,watch:GH,provide:la,inject:UH};function la(e,c){return c?e?function(){return i2(X(e)?e.call(this,this):e,X(c)?c.call(this,this):c)}:c:e}function UH(e,c){return P3(z7(e),z7(c))}function z7(e){if(Q(e)){const c={};for(let a=0;a<e.length;a++)c[e[a]]=e[a];return c}return e}function r2(e,c){return e?[...new Set([].concat(e,c))]:c}function P3(e,c){return e?i2(i2(Object.create(null),e),c):c}function GH(e,c){if(!e)return c;if(!c)return e;const a=i2(Object.create(null),e);for(const s in c)a[s]=r2(e[s],c[s]);return a}function jH(e,c,a,s=!1){const t={},r={};K8(r,P5,1),e.propsDefaults=Object.create(null),mr(e,c,t,r);for(const n in e.propsOptions[0])n in t||(t[n]=void 0);a?e.props=s?t:tH(t):e.type.props?e.props=t:e.props=r,e.attrs=r}function WH(e,c,a,s){const{props:t,attrs:r,vnode:{patchFlag:n}}=e,i=h1(t),[o]=e.propsOptions;let l=!1;if((s||n>0)&&!(n&16)){if(n&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let u=f[h];if(A5(e.emitsOptions,u))continue;const C=c[u];if(o)if(i1(r,u))C!==r[u]&&(r[u]=C,l=!0);else{const z=U2(u);t[z]=H7(o,i,z,C,e,!1)}else C!==r[u]&&(r[u]=C,l=!0)}}}else{mr(e,c,t,r)&&(l=!0);let f;for(const h in i)(!c||!i1(c,h)&&((f=F4(h))===h||!i1(c,f)))&&(o?a&&(a[h]!==void 0||a[f]!==void 0)&&(t[h]=H7(o,i,h,void 0,e,!0)):delete t[h]);if(r!==i)for(const h in r)(!c||!i1(c,h)&&!0)&&(delete r[h],l=!0)}l&&Q2(e,"set","$attrs")}function mr(e,c,a,s){const[t,r]=e.propsOptions;let n=!1,i;if(c)for(let o in c){if(D8(o))continue;const l=c[o];let f;t&&i1(t,f=U2(o))?!r||!r.includes(f)?a[f]=l:(i||(i={}))[f]=l:A5(e.emitsOptions,o)||(!(o in s)||l!==s[o])&&(s[o]=l,n=!0)}if(r){const o=h1(a),l=i||H1;for(let f=0;f<r.length;f++){const h=r[f];a[h]=H7(t,o,h,l[h],e,!i1(l,h))}}return n}function H7(e,c,a,s,t,r){const n=e[a];if(n!=null){const i=i1(n,"default");if(i&&s===void 0){const o=n.default;if(n.type!==Function&&X(o)){const{propsDefaults:l}=t;a in l?s=l[a]:(w4(t),s=l[a]=o.call(null,c),j3())}else s=o}n[0]&&(r&&!i?s=!1:n[1]&&(s===""||s===F4(a))&&(s=!0))}return s}function vr(e,c,a=!1){const s=c.propsCache,t=s.get(e);if(t)return t;const r=e.props,n={},i=[];let o=!1;if(!X(e)){const f=h=>{o=!0;const[u,C]=vr(h,c,!0);i2(n,u),C&&i.push(...C)};!a&&c.mixins.length&&c.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!o)return x1(e)&&s.set(e,d4),d4;if(Q(r))for(let f=0;f<r.length;f++){const h=U2(r[f]);fa(h)&&(n[h]=H1)}else if(r)for(const f in r){const h=U2(f);if(fa(h)){const u=r[f],C=n[h]=Q(u)||X(u)?{type:u}:Object.assign({},u);if(C){const z=ma(Boolean,C.type),L=ma(String,C.type);C[0]=z>-1,C[1]=L<0||z<L,(z>-1||i1(C,"default"))&&i.push(h)}}}const l=[n,i];return x1(e)&&s.set(e,l),l}function fa(e){return e[0]!=="$"}function ha(e){const c=e&&e.toString().match(/^\s*function (\w+)/);return c?c[1]:e===null?"null":""}function ua(e,c){return ha(e)===ha(c)}function ma(e,c){return Q(c)?c.findIndex(a=>ua(a,e)):X(c)&&ua(c,e)?0:-1}const Cr=e=>e[0]==="_"||e==="$stable",_9=e=>Q(e)?e.map(I2):[I2(e)],KH=(e,c,a)=>{if(c._n)return c;const s=B2((...t)=>_9(c(...t)),a);return s._c=!1,s},pr=(e,c,a)=>{const s=e._ctx;for(const t in e){if(Cr(t))continue;const r=e[t];if(X(r))c[t]=KH(t,r,s);else if(r!=null){const n=_9(r);c[t]=()=>n}}},dr=(e,c)=>{const a=_9(c);e.slots.default=()=>a},ZH=(e,c)=>{if(e.vnode.shapeFlag&32){const a=c._;a?(e.slots=h1(c),K8(c,"_",a)):pr(c,e.slots={})}else e.slots={},c&&dr(e,c);K8(e.slots,P5,1)},YH=(e,c,a)=>{const{vnode:s,slots:t}=e;let r=!0,n=H1;if(s.shapeFlag&32){const i=c._;i?a&&i===1?r=!1:(i2(t,c),!a&&i===1&&delete t._):(r=!c.$stable,pr(c,t)),n=c}else c&&(dr(e,c),n={default:1});if(r)for(const i in t)!Cr(i)&&!(i in n)&&delete t[i]};function zr(){return{app:null,config:{isNativeTag:xz,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let QH=0;function XH(e,c){return function(s,t=null){X(s)||(s=Object.assign({},s)),t!=null&&!x1(t)&&(t=null);const r=zr(),n=new Set;let i=!1;const o=r.app={_uid:QH++,_component:s,_props:t,_container:null,_context:r,_instance:null,version:zM,get config(){return r.config},set config(l){},use(l,...f){return n.has(l)||(l&&X(l.install)?(n.add(l),l.install(o,...f)):X(l)&&(n.add(l),l(o,...f))),o},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),o},component(l,f){return f?(r.components[l]=f,o):r.components[l]},directive(l,f){return f?(r.directives[l]=f,o):r.directives[l]},mount(l,f,h){if(!i){const u=r1(s,t);return u.appContext=r,f&&c?c(u,l):e(u,l,h),i=!0,o._container=l,l.__vue_app__=o,_5(u.component)||u.component.proxy}},unmount(){i&&(e(null,o._container),delete o._container.__vue_app__)},provide(l,f){return r.provides[l]=f,o}};return o}}function M7(e,c,a,s,t=!1){if(Q(e)){e.forEach((u,C)=>M7(u,c&&(Q(c)?c[C]:c),a,s,t));return}if(r6(s)&&!t)return;const r=s.shapeFlag&4?_5(s.component)||s.component.proxy:s.el,n=t?null:r,{i,r:o}=e,l=c&&c.r,f=i.refs===H1?i.refs={}:i.refs,h=i.setupState;if(l!=null&&l!==o&&(D1(l)?(f[l]=null,i1(h,l)&&(h[l]=null)):A1(l)&&(l.value=null)),X(o))p3(o,i,12,[n,f]);else{const u=D1(o),C=A1(o);if(u||C){const z=()=>{if(e.f){const L=u?i1(h,o)?h[o]:f[o]:o.value;t?Q(L)&&z9(L,r):Q(L)?L.includes(r)||L.push(r):u?(f[o]=[r],i1(h,o)&&(h[o]=f[o])):(o.value=[r],e.k&&(f[e.k]=o.value))}else u?(f[o]=n,i1(h,o)&&(h[o]=n)):C&&(o.value=n,e.k&&(f[e.k]=n))};n?(z.id=-1,h2(z,a)):z()}}}const h2=bH;function JH(e){return cM(e)}function cM(e,c){const a=Az();a.__VUE__=!0;const{insert:s,remove:t,patchProp:r,createElement:n,createText:i,createComment:o,setText:l,setElementText:f,parentNode:h,nextSibling:u,setScopeId:C=k2,insertStaticContent:z}=e,L=(m,v,p,H=null,g=null,w=null,P=!1,N=null,A=!!v.dynamicChildren)=>{if(m===v)return;m&&!Q4(m,v)&&(H=T(m),l2(m,g,w,!0),m=null),v.patchFlag===-2&&(A=!1,v.dynamicChildren=null);const{type:b,ref:$,shapeFlag:D}=v;switch(b){case E5:k(m,v,p,H);break;case M3:d(m,v,p,H);break;case B8:m==null&&M(v,p,H,P);break;case c2:V2(m,v,p,H,g,w,P,N,A);break;default:D&1?G(m,v,p,H,g,w,P,N,A):D&6?i3(m,v,p,H,g,w,P,N,A):(D&64||D&128)&&b.process(m,v,p,H,g,w,P,N,A,n1)}$!=null&&g&&M7($,m&&m.ref,w,v||m,!v)},k=(m,v,p,H)=>{if(m==null)s(v.el=i(v.children),p,H);else{const g=v.el=m.el;v.children!==m.children&&l(g,v.children)}},d=(m,v,p,H)=>{m==null?s(v.el=o(v.children||""),p,H):v.el=m.el},M=(m,v,p,H)=>{[m.el,m.anchor]=z(m.children,v,p,H,m.el,m.anchor)},y=({el:m,anchor:v},p,H)=>{let g;for(;m&&m!==v;)g=u(m),s(m,p,H),m=g;s(v,p,H)},B=({el:m,anchor:v})=>{let p;for(;m&&m!==v;)p=u(m),t(m),m=p;t(v)},G=(m,v,p,H,g,w,P,N,A)=>{P=P||v.type==="svg",m==null?l1(v,p,H,g,w,P,N,A):g1(m,v,g,w,P,N,A)},l1=(m,v,p,H,g,w,P,N)=>{let A,b;const{type:$,props:D,shapeFlag:U,transition:Y,dirs:s1}=m;if(A=m.el=n(m.type,w,D&&D.is,D),U&8?f(A,m.children):U&16&&e1(m.children,A,null,H,g,w&&$!=="foreignObject",P,N),s1&&T3(m,null,H,"created"),D){for(const p1 in D)p1!=="value"&&!D8(p1)&&r(A,p1,null,D[p1],w,m.children,H,g,_);"value"in D&&r(A,"value",null,D.value),(b=D.onVnodeBeforeMount)&&P2(b,H,m)}W(A,m,m.scopeId,P,H),s1&&T3(m,null,H,"beforeMount");const z1=(!g||g&&!g.pendingBranch)&&Y&&!Y.persisted;z1&&Y.beforeEnter(A),s(A,v,p),((b=D&&D.onVnodeMounted)||z1||s1)&&h2(()=>{b&&P2(b,H,m),z1&&Y.enter(A),s1&&T3(m,null,H,"mounted")},g)},W=(m,v,p,H,g)=>{if(p&&C(m,p),H)for(let w=0;w<H.length;w++)C(m,H[w]);if(g){let w=g.subTree;if(v===w){const P=g.vnode;W(m,P,P.scopeId,P.slotScopeIds,g.parent)}}},e1=(m,v,p,H,g,w,P,N,A=0)=>{for(let b=A;b<m.length;b++){const $=m[b]=N?h3(m[b]):I2(m[b]);L(null,$,v,p,H,g,w,P,N)}},g1=(m,v,p,H,g,w,P)=>{const N=v.el=m.el;let{patchFlag:A,dynamicChildren:b,dirs:$}=v;A|=m.patchFlag&16;const D=m.props||H1,U=v.props||H1;let Y;p&&E3(p,!1),(Y=U.onVnodeBeforeUpdate)&&P2(Y,p,v,m),$&&T3(v,m,p,"beforeUpdate"),p&&E3(p,!0);const s1=g&&v.type!=="foreignObject";if(b?O1(m.dynamicChildren,b,N,p,H,s1,w):P||C1(m,v,N,null,p,H,s1,w,!1),A>0){if(A&16)o2(N,v,D,U,p,H,g);else if(A&2&&D.class!==U.class&&r(N,"class",null,U.class,g),A&4&&r(N,"style",D.style,U.style,g),A&8){const z1=v.dynamicProps;for(let p1=0;p1<z1.length;p1++){const E1=z1[p1],x2=D[E1],i4=U[E1];(i4!==x2||E1==="value")&&r(N,E1,x2,i4,g,m.children,p,H,_)}}A&1&&m.children!==v.children&&f(N,v.children)}else!P&&b==null&&o2(N,v,D,U,p,H,g);((Y=U.onVnodeUpdated)||$)&&h2(()=>{Y&&P2(Y,p,v,m),$&&T3(v,m,p,"updated")},H)},O1=(m,v,p,H,g,w,P)=>{for(let N=0;N<v.length;N++){const A=m[N],b=v[N],$=A.el&&(A.type===c2||!Q4(A,b)||A.shapeFlag&70)?h(A.el):p;L(A,b,$,null,H,g,w,P,!0)}},o2=(m,v,p,H,g,w,P)=>{if(p!==H){if(p!==H1)for(const N in p)!D8(N)&&!(N in H)&&r(m,N,p[N],null,P,v.children,g,w,_);for(const N in H){if(D8(N))continue;const A=H[N],b=p[N];A!==b&&N!=="value"&&r(m,N,b,A,P,v.children,g,w,_)}"value"in H&&r(m,"value",p.value,H.value)}},V2=(m,v,p,H,g,w,P,N,A)=>{const b=v.el=m?m.el:i(""),$=v.anchor=m?m.anchor:i("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:Y}=v;Y&&(N=N?N.concat(Y):Y),m==null?(s(b,p,H),s($,p,H),e1(v.children,p,$,g,w,P,N,A)):D>0&&D&64&&U&&m.dynamicChildren?(O1(m.dynamicChildren,U,p,g,w,P,N),(v.key!=null||g&&v===g.subTree)&&Hr(m,v,!0)):C1(m,v,p,$,g,w,P,N,A)},i3=(m,v,p,H,g,w,P,N,A)=>{v.slotScopeIds=N,m==null?v.shapeFlag&512?g.ctx.activate(v,p,H,P,A):C2(v,p,H,g,w,P,A):q1(m,v,A)},C2=(m,v,p,H,g,w,P)=>{const N=m.component=lM(m,H,g);if(nr(m)&&(N.ctx.renderer=n1),fM(N),N.asyncDep){if(g&&g.registerDep(N,T1),!m.el){const A=N.subTree=r1(M3);d(null,A,v,p)}return}T1(N,m,v,p,g,w,P)},q1=(m,v,p)=>{const H=v.component=m.component;if(VH(m,v,p))if(H.asyncDep&&!H.asyncResolved){d1(H,v,p);return}else H.next=v,CH(H.update),H.update();else v.el=m.el,H.vnode=v},T1=(m,v,p,H,g,w,P)=>{const N=()=>{if(m.isMounted){let{next:$,bu:D,u:U,parent:Y,vnode:s1}=m,z1=$,p1;E3(m,!1),$?($.el=s1.el,d1(m,$,P)):$=s1,D&&R8(D),(p1=$.props&&$.props.onVnodeBeforeUpdate)&&P2(p1,Y,$,s1),E3(m,!0);const E1=_0(m),x2=m.subTree;m.subTree=E1,L(x2,E1,h(x2.el),T(x2),m,g,w),$.el=E1.el,z1===null&&gH(m,E1.el),U&&h2(U,g),(p1=$.props&&$.props.onVnodeUpdated)&&h2(()=>P2(p1,Y,$,s1),g)}else{let $;const{el:D,props:U}=v,{bm:Y,m:s1,parent:z1}=m,p1=r6(v);if(E3(m,!1),Y&&R8(Y),!p1&&($=U&&U.onVnodeBeforeMount)&&P2($,z1,v),E3(m,!0),D&&J){const E1=()=>{m.subTree=_0(m),J(D,m.subTree,m,g,null)};p1?v.type.__asyncLoader().then(()=>!m.isUnmounted&&E1()):E1()}else{const E1=m.subTree=_0(m);L(null,E1,p,H,m,g,w),v.el=E1.el}if(s1&&h2(s1,g),!p1&&($=U&&U.onVnodeMounted)){const E1=v;h2(()=>P2($,z1,E1),g)}(v.shapeFlag&256||z1&&r6(z1.vnode)&&z1.vnode.shapeFlag&256)&&m.a&&h2(m.a,g),m.isMounted=!0,v=p=H=null}},A=m.effect=new g9(N,()=>A9(b),m.scope),b=m.update=()=>A.run();b.id=m.uid,E3(m,!0),b()},d1=(m,v,p)=>{v.component=m;const H=m.vnode.props;m.vnode=v,m.next=null,WH(m,v.props,H,p),YH(m,v.children,p),B4(),ra(),O4()},C1=(m,v,p,H,g,w,P,N,A=!1)=>{const b=m&&m.children,$=m?m.shapeFlag:0,D=v.children,{patchFlag:U,shapeFlag:Y}=v;if(U>0){if(U&128){A3(b,D,p,H,g,w,P,N,A);return}else if(U&256){L2(b,D,p,H,g,w,P,N,A);return}}Y&8?($&16&&_(b,g,w),D!==b&&f(p,D)):$&16?Y&16?A3(b,D,p,H,g,w,P,N,A):_(b,g,w,!0):($&8&&f(p,""),Y&16&&e1(D,p,H,g,w,P,N,A))},L2=(m,v,p,H,g,w,P,N,A)=>{m=m||d4,v=v||d4;const b=m.length,$=v.length,D=Math.min(b,$);let U;for(U=0;U<D;U++){const Y=v[U]=A?h3(v[U]):I2(v[U]);L(m[U],Y,p,null,g,w,P,N,A)}b>$?_(m,g,w,!0,!1,D):e1(v,p,H,g,w,P,N,A,D)},A3=(m,v,p,H,g,w,P,N,A)=>{let b=0;const $=v.length;let D=m.length-1,U=$-1;for(;b<=D&&b<=U;){const Y=m[b],s1=v[b]=A?h3(v[b]):I2(v[b]);if(Q4(Y,s1))L(Y,s1,p,null,g,w,P,N,A);else break;b++}for(;b<=D&&b<=U;){const Y=m[D],s1=v[U]=A?h3(v[U]):I2(v[U]);if(Q4(Y,s1))L(Y,s1,p,null,g,w,P,N,A);else break;D--,U--}if(b>D){if(b<=U){const Y=U+1,s1=Y<$?v[Y].el:H;for(;b<=U;)L(null,v[b]=A?h3(v[b]):I2(v[b]),p,s1,g,w,P,N,A),b++}}else if(b>U)for(;b<=D;)l2(m[b],g,w,!0),b++;else{const Y=b,s1=b,z1=new Map;for(b=s1;b<=U;b++){const p2=v[b]=A?h3(v[b]):I2(v[b]);p2.key!=null&&z1.set(p2.key,b)}let p1,E1=0;const x2=U-s1+1;let i4=!1,Ke=0;const Y4=new Array(x2);for(b=0;b<x2;b++)Y4[b]=0;for(b=Y;b<=D;b++){const p2=m[b];if(E1>=x2){l2(p2,g,w,!0);continue}let E2;if(p2.key!=null)E2=z1.get(p2.key);else for(p1=s1;p1<=U;p1++)if(Y4[p1-s1]===0&&Q4(p2,v[p1])){E2=p1;break}E2===void 0?l2(p2,g,w,!0):(Y4[E2-s1]=b+1,E2>=Ke?Ke=E2:i4=!0,L(p2,v[E2],p,null,g,w,P,N,A),E1++)}const Ze=i4?eM(Y4):d4;for(p1=Ze.length-1,b=x2-1;b>=0;b--){const p2=s1+b,E2=v[p2],Ye=p2+1<$?v[p2+1].el:H;Y4[b]===0?L(null,E2,p,Ye,g,w,P,N,A):i4&&(p1<0||b!==Ze[p1]?b2(E2,p,Ye,2):p1--)}}},b2=(m,v,p,H,g=null)=>{const{el:w,type:P,transition:N,children:A,shapeFlag:b}=m;if(b&6){b2(m.component.subTree,v,p,H);return}if(b&128){m.suspense.move(v,p,H);return}if(b&64){P.move(m,v,p,n1);return}if(P===c2){s(w,v,p);for(let D=0;D<A.length;D++)b2(A[D],v,p,H);s(m.anchor,v,p);return}if(P===B8){y(m,v,p);return}if(H!==2&&b&1&&N)if(H===0)N.beforeEnter(w),s(w,v,p),h2(()=>N.enter(w),g);else{const{leave:D,delayLeave:U,afterLeave:Y}=N,s1=()=>s(w,v,p),z1=()=>{D(w,()=>{s1(),Y&&Y()})};U?U(w,s1,z1):z1()}else s(w,v,p)},l2=(m,v,p,H=!1,g=!1)=>{const{type:w,props:P,ref:N,children:A,dynamicChildren:b,shapeFlag:$,patchFlag:D,dirs:U}=m;if(N!=null&&M7(N,null,p,m,!0),$&256){v.ctx.deactivate(m);return}const Y=$&1&&U,s1=!r6(m);let z1;if(s1&&(z1=P&&P.onVnodeBeforeUnmount)&&P2(z1,v,m),$&6)V(m.component,p,H);else{if($&128){m.suspense.unmount(p,H);return}Y&&T3(m,null,v,"beforeUnmount"),$&64?m.type.remove(m,v,p,g,n1,H):b&&(w!==c2||D>0&&D&64)?_(b,v,p,!1,!0):(w===c2&&D&384||!g&&$&16)&&_(A,v,p),H&&n4(m)}(s1&&(z1=P&&P.onVnodeUnmounted)||Y)&&h2(()=>{z1&&P2(z1,v,m),Y&&T3(m,null,v,"unmounted")},p)},n4=m=>{const{type:v,el:p,anchor:H,transition:g}=m;if(v===c2){v8(p,H);return}if(v===B8){B(m);return}const w=()=>{t(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(m.shapeFlag&1&&g&&!g.persisted){const{leave:P,delayLeave:N}=g,A=()=>P(p,w);N?N(m.el,w,A):A()}else w()},v8=(m,v)=>{let p;for(;m!==v;)p=u(m),t(m),m=p;t(v)},V=(m,v,p)=>{const{bum:H,scope:g,update:w,subTree:P,um:N}=m;H&&R8(H),g.stop(),w&&(w.active=!1,l2(P,m,v,p)),N&&h2(N,v),h2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},_=(m,v,p,H=!1,g=!1,w=0)=>{for(let P=w;P<m.length;P++)l2(m[P],v,p,H,g)},T=m=>m.shapeFlag&6?T(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el),q=(m,v,p)=>{m==null?v._vnode&&l2(v._vnode,null,null,!0):L(v._vnode||null,m,v,null,null,null,p),ra(),cr(),v._vnode=m},n1={p:L,um:l2,m:b2,r:n4,mt:C2,mc:e1,pc:C1,pbc:O1,n:T,o:e};let y1,J;return c&&([y1,J]=c(n1)),{render:q,hydrate:y1,createApp:XH(q,y1)}}function E3({effect:e,update:c},a){e.allowRecurse=c.allowRecurse=a}function Hr(e,c,a=!1){const s=e.children,t=c.children;if(Q(s)&&Q(t))for(let r=0;r<s.length;r++){const n=s[r];let i=t[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=t[r]=h3(t[r]),i.el=n.el),a||Hr(n,i)),i.type===E5&&(i.el=n.el)}}function eM(e){const c=e.slice(),a=[0];let s,t,r,n,i;const o=e.length;for(s=0;s<o;s++){const l=e[s];if(l!==0){if(t=a[a.length-1],e[t]<l){c[s]=t,a.push(s);continue}for(r=0,n=a.length-1;r<n;)i=r+n>>1,e[a[i]]<l?r=i+1:n=i;l<e[a[r]]&&(r>0&&(c[s]=a[r-1]),a[r]=s)}}for(r=a.length,n=a[r-1];r-- >0;)a[r]=n,n=c[n];return a}const aM=e=>e.__isTeleport,c2=Symbol(void 0),E5=Symbol(void 0),M3=Symbol(void 0),B8=Symbol(void 0),i6=[];let N2=null;function S1(e=!1){i6.push(N2=e?null:[])}function sM(){i6.pop(),N2=i6[i6.length-1]||null}let b6=1;function va(e){b6+=e}function Mr(e){return e.dynamicChildren=b6>0?N2||d4:null,sM(),b6>0&&N2&&N2.push(e),e}function R1(e,c,a,s,t,r){return Mr(S(e,c,a,s,t,r,!0))}function I9(e,c,a,s,t){return Mr(r1(e,c,a,s,t,!0))}function J8(e){return e?e.__v_isVNode===!0:!1}function Q4(e,c){return e.type===c.type&&e.key===c.key}const P5="__vInternal",Vr=({key:e})=>e!=null?e:null,O8=({ref:e,ref_key:c,ref_for:a})=>e!=null?D1(e)||A1(e)||X(e)?{i:Y1,r:e,k:c,f:!!a}:e:null;function S(e,c=null,a=null,s=0,t=null,r=e===c2?0:1,n=!1,i=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&Vr(c),ref:c&&O8(c),scopeId:sr,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:t,dynamicChildren:null,appContext:null,ctx:Y1};return i?(D9(o,a),r&128&&e.normalize(o)):a&&(o.shapeFlag|=D1(a)?8:16),b6>0&&!n&&N2&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&N2.push(o),o}const r1=tM;function tM(e,c=null,a=null,s=0,t=null,r=!1){if((!e||e===or)&&(e=M3),J8(e)){const i=N4(e,c,!0);return a&&D9(i,a),b6>0&&!r&&N2&&(i.shapeFlag&6?N2[N2.indexOf(e)]=i:N2.push(i)),i.patchFlag|=-2,i}if(CM(e)&&(e=e.__vccOpts),c){c=rM(c);let{class:i,style:o}=c;i&&!D1(i)&&(c.class=b5(i)),x1(o)&&(jt(o)&&!Q(o)&&(o=i2({},o)),c.style=L5(o))}const n=D1(e)?1:LH(e)?128:aM(e)?64:x1(e)?4:X(e)?2:0;return S(e,c,a,s,t,n,r,!0)}function rM(e){return e?jt(e)||P5 in e?i2({},e):e:null}function N4(e,c,a=!1){const{props:s,ref:t,patchFlag:r,children:n}=e,i=c?nM(s||{},c):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Vr(i),ref:c&&c.ref?a&&t?Q(t)?t.concat(O8(c)):[t,O8(c)]:O8(c):t,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:n,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==c2?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&N4(e.ssContent),ssFallback:e.ssFallback&&N4(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function gr(e=" ",c=0){return r1(E5,null,e,c)}function G6(e,c){const a=r1(B8,null,e);return a.staticCount=c,a}function q8(e="",c=!1){return c?(S1(),I9(M3,null,e)):r1(M3,null,e)}function I2(e){return e==null||typeof e=="boolean"?r1(M3):Q(e)?r1(c2,null,e.slice()):typeof e=="object"?h3(e):r1(E5,null,String(e))}function h3(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:N4(e)}function D9(e,c){let a=0;const{shapeFlag:s}=e;if(c==null)c=null;else if(Q(c))a=16;else if(typeof c=="object")if(s&65){const t=c.default;t&&(t._c&&(t._d=!1),D9(e,t()),t._c&&(t._d=!0));return}else{a=32;const t=c._;!t&&!(P5 in c)?c._ctx=Y1:t===3&&Y1&&(Y1.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else X(c)?(c={default:c,_ctx:Y1},a=32):(c=String(c),s&64?(a=16,c=[gr(c)]):a=8);e.children=c,e.shapeFlag|=a}function nM(...e){const c={};for(let a=0;a<e.length;a++){const s=e[a];for(const t in s)if(t==="class")c.class!==s.class&&(c.class=b5([c.class,s.class]));else if(t==="style")c.style=L5([c.style,s.style]);else if(x5(t)){const r=c[t],n=s[t];n&&r!==n&&!(Q(r)&&r.includes(n))&&(c[t]=r?[].concat(r,n):n)}else t!==""&&(c[t]=s[t])}return c}function P2(e,c,a,s=null){A2(e,c,7,[a,s])}const iM=zr();let oM=0;function lM(e,c,a){const s=e.type,t=(c?c.appContext:e.appContext)||iM,r={uid:oM++,vnode:e,type:s,parent:c,appContext:t,root:null,next:null,subTree:null,effect:null,update:null,scope:new Et(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(t.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vr(s,t),emitsOptions:ar(s,t),emit:null,emitted:null,propsDefaults:H1,inheritAttrs:s.inheritAttrs,ctx:H1,data:H1,props:H1,attrs:H1,slots:H1,refs:H1,setupState:H1,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=c?c.root:r,r.emit=zH.bind(null,r),e.ce&&e.ce(r),r}let U1=null;const Lr=()=>U1||Y1,w4=e=>{U1=e,e.scope.on()},j3=()=>{U1&&U1.scope.off(),U1=null};function br(e){return e.vnode.shapeFlag&4}let x6=!1;function fM(e,c=!1){x6=c;const{props:a,children:s}=e.vnode,t=br(e);jH(e,a,t,c),ZH(e,s);const r=t?hM(e,c):void 0;return x6=!1,r}function hM(e,c){const a=e.type;e.accessCache=Object.create(null),e.proxy=S4(new Proxy(e.ctx,BH));const{setup:s}=a;if(s){const t=e.setupContext=s.length>1?mM(e):null;w4(e),B4();const r=p3(s,e,0,[e.props,t]);if(O4(),j3(),kt(r)){if(r.then(j3,j3),c)return r.then(n=>{Ca(e,n,c)}).catch(n=>{k5(n,e,0)});e.asyncDep=r}else Ca(e,r,c)}else xr(e,c)}function Ca(e,c,a){X(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:x1(c)&&(e.setupState=Yt(c)),xr(e,a)}let pa;function xr(e,c,a){const s=e.type;if(!e.render){if(!c&&pa&&!s.render){const t=s.template||P9(e).template;if(t){const{isCustomElement:r,compilerOptions:n}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,l=i2(i2({isCustomElement:r,delimiters:i},n),o);s.render=pa(t,l)}}e.render=s.render||k2}w4(e),B4(),OH(e),O4(),j3()}function uM(e){return new Proxy(e.attrs,{get(c,a){return z2(e,"get","$attrs"),c[a]}})}function mM(e){const c=s=>{e.exposed=s||{}};let a;return{get attrs(){return a||(a=uM(e))},slots:e.slots,emit:e.emit,expose:c}}function _5(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yt(S4(e.exposed)),{get(c,a){if(a in c)return c[a];if(a in n6)return n6[a](e)},has(c,a){return a in c||a in n6}}))}function vM(e,c=!0){return X(e)?e.displayName||e.name:e.name||c&&e.__name}function CM(e){return X(e)&&"__vccOpts"in e}const L1=(e,c)=>uH(e,c,x6);function I5(e,c,a){const s=arguments.length;return s===2?x1(c)&&!Q(c)?J8(c)?r1(e,null,[c]):r1(e,c):r1(e,null,c):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&J8(a)&&(a=[a]),r1(e,c,a))}const pM=Symbol(""),dM=()=>q2(pM),zM="3.2.45",HM="http://www.w3.org/2000/svg",D3=typeof document<"u"?document:null,da=D3&&D3.createElement("template"),MM={insert:(e,c,a)=>{c.insertBefore(e,a||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,a,s)=>{const t=c?D3.createElementNS(HM,e):D3.createElement(e,a?{is:a}:void 0);return e==="select"&&s&&s.multiple!=null&&t.setAttribute("multiple",s.multiple),t},createText:e=>D3.createTextNode(e),createComment:e=>D3.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>D3.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,a,s,t,r){const n=a?a.previousSibling:c.lastChild;if(t&&(t===r||t.nextSibling))for(;c.insertBefore(t.cloneNode(!0),a),!(t===r||!(t=t.nextSibling)););else{da.innerHTML=s?`<svg>${e}</svg>`:e;const i=da.content;if(s){const o=i.firstChild;for(;o.firstChild;)i.appendChild(o.firstChild);i.removeChild(o)}c.insertBefore(i,a)}return[n?n.nextSibling:c.firstChild,a?a.previousSibling:c.lastChild]}};function VM(e,c,a){const s=e._vtc;s&&(c=(c?[c,...s]:[...s]).join(" ")),c==null?e.removeAttribute("class"):a?e.setAttribute("class",c):e.className=c}function gM(e,c,a){const s=e.style,t=D1(a);if(a&&!t){for(const r in a)V7(s,r,a[r]);if(c&&!D1(c))for(const r in c)a[r]==null&&V7(s,r,"")}else{const r=s.display;t?c!==a&&(s.cssText=a):c&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const za=/\s*!important$/;function V7(e,c,a){if(Q(a))a.forEach(s=>V7(e,c,s));else if(a==null&&(a=""),c.startsWith("--"))e.setProperty(c,a);else{const s=LM(e,c);za.test(a)?e.setProperty(F4(s),a.replace(za,""),"important"):e[s]=a}}const Ha=["Webkit","Moz","ms"],R0={};function LM(e,c){const a=R0[c];if(a)return a;let s=U2(c);if(s!=="filter"&&s in e)return R0[c]=s;s=N5(s);for(let t=0;t<Ha.length;t++){const r=Ha[t]+s;if(r in e)return R0[c]=r}return c}const Ma="http://www.w3.org/1999/xlink";function bM(e,c,a,s,t){if(s&&c.startsWith("xlink:"))a==null?e.removeAttributeNS(Ma,c.slice(6,c.length)):e.setAttributeNS(Ma,c,a);else{const r=bz(c);a==null||r&&!St(a)?e.removeAttribute(c):e.setAttribute(c,r?"":a)}}function xM(e,c,a,s,t,r,n){if(c==="innerHTML"||c==="textContent"){s&&n(s,t,r),e[c]=a==null?"":a;return}if(c==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=a;const o=a==null?"":a;(e.value!==o||e.tagName==="OPTION")&&(e.value=o),a==null&&e.removeAttribute(c);return}let i=!1;if(a===""||a==null){const o=typeof e[c];o==="boolean"?a=St(a):a==null&&o==="string"?(a="",i=!0):o==="number"&&(a=0,i=!0)}try{e[c]=a}catch{}i&&e.removeAttribute(c)}function h4(e,c,a,s){e.addEventListener(c,a,s)}function yM(e,c,a,s){e.removeEventListener(c,a,s)}function SM(e,c,a,s,t=null){const r=e._vei||(e._vei={}),n=r[c];if(s&&n)n.value=s;else{const[i,o]=NM(c);if(s){const l=r[c]=AM(s,t);h4(e,i,l,o)}else n&&(yM(e,i,n,o),r[c]=void 0)}}const Va=/(?:Once|Passive|Capture)$/;function NM(e){let c;if(Va.test(e)){c={};let s;for(;s=e.match(Va);)e=e.slice(0,e.length-s[0].length),c[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):F4(e.slice(2)),c]}let F0=0;const wM=Promise.resolve(),kM=()=>F0||(wM.then(()=>F0=0),F0=Date.now());function AM(e,c){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;A2(TM(s,a.value),c,5,[s])};return a.value=e,a.attached=kM(),a}function TM(e,c){if(Q(c)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},c.map(s=>t=>!t._stopped&&s&&s(t))}else return c}const ga=/^on[a-z]/,EM=(e,c,a,s,t=!1,r,n,i,o)=>{c==="class"?VM(e,s,t):c==="style"?gM(e,a,s):x5(c)?d9(c)||SM(e,c,a,s,n):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):PM(e,c,s,t))?xM(e,c,s,r,n,i,o):(c==="true-value"?e._trueValue=s:c==="false-value"&&(e._falseValue=s),bM(e,c,s,t))};function PM(e,c,a,s){return s?!!(c==="innerHTML"||c==="textContent"||c in e&&ga.test(c)&&X(a)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA"||ga.test(c)&&D1(a)?!1:c in e}const La=e=>{const c=e.props["onUpdate:modelValue"]||!1;return Q(c)?a=>R8(c,a):c};function _M(e){e.target.composing=!0}function ba(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const IM={created(e,{modifiers:{lazy:c,trim:a,number:s}},t){e._assign=La(t);const r=s||t.props&&t.props.type==="number";h4(e,c?"change":"input",n=>{if(n.target.composing)return;let i=e.value;a&&(i=i.trim()),r&&(i=Z8(i)),e._assign(i)}),a&&h4(e,"change",()=>{e.value=e.value.trim()}),c||(h4(e,"compositionstart",_M),h4(e,"compositionend",ba),h4(e,"change",ba))},mounted(e,{value:c}){e.value=c==null?"":c},beforeUpdate(e,{value:c,modifiers:{lazy:a,trim:s,number:t}},r){if(e._assign=La(r),e.composing||document.activeElement===e&&e.type!=="range"&&(a||s&&e.value.trim()===c||(t||e.type==="number")&&Z8(e.value)===c))return;const n=c==null?"":c;e.value!==n&&(e.value=n)}},DM=i2({patchProp:EM},MM);let xa;function RM(){return xa||(xa=JH(DM))}const FM=(...e)=>{const c=RM().createApp(...e),{mount:a}=c;return c.mount=s=>{const t=BM(s);if(!t)return;const r=c._component;!X(r)&&!r.render&&!r.template&&(r.template=t.innerHTML),t.innerHTML="";const n=a(t,!1,t instanceof SVGElement);return t instanceof Element&&(t.removeAttribute("v-cloak"),t.setAttribute("data-v-app","")),n},c};function BM(e){return D1(e)?document.querySelector(e):e}var OM=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let yr;const D5=e=>yr=e,Sr=Symbol();function g7(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var o6;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(o6||(o6={}));function qM(){const e=Pt(!0),c=e.run(()=>N9({}));let a=[],s=[];const t=S4({install(r){D5(t),t._a=r,r.provide(Sr,t),r.config.globalProperties.$pinia=t,s.forEach(n=>a.push(n)),s=[]},use(r){return!this._a&&!OM?s.push(r):a.push(r),this},_p:a,_a:null,_e:e,_s:new Map,state:c});return t}const Nr=()=>{};function ya(e,c,a,s=Nr){e.push(c);const t=()=>{const r=e.indexOf(c);r>-1&&(e.splice(r,1),s())};return!a&&Lr()&&T9(t),t}function o4(e,...c){e.slice().forEach(a=>{a(...c)})}function L7(e,c){e instanceof Map&&c instanceof Map&&c.forEach((a,s)=>e.set(s,a)),e instanceof Set&&c instanceof Set&&c.forEach(e.add,e);for(const a in c){if(!c.hasOwnProperty(a))continue;const s=c[a],t=e[a];g7(t)&&g7(s)&&e.hasOwnProperty(a)&&!A1(s)&&!C3(s)?e[a]=L7(t,s):e[a]=s}return e}const $M=Symbol();function UM(e){return!g7(e)||!e.hasOwnProperty($M)}const{assign:u3}=Object;function GM(e){return!!(A1(e)&&e.effect)}function jM(e,c,a,s){const{state:t,actions:r,getters:n}=c,i=a.state.value[e];let o;function l(){i||(a.state.value[e]=t?t():{});const f=oH(a.state.value[e]);return u3(f,r,Object.keys(n||{}).reduce((h,u)=>(h[u]=S4(L1(()=>{D5(a);const C=a._s.get(e);return n[u].call(C,C)})),h),{}))}return o=wr(e,l,c,a,s,!0),o.$reset=function(){const h=t?t():{};this.$patch(u=>{u3(u,h)})},o}function wr(e,c,a={},s,t,r){let n;const i=u3({actions:{}},a),o={deep:!0};let l,f,h=S4([]),u=S4([]),C;const z=s.state.value[e];!r&&!z&&(s.state.value[e]={}),N9({});let L;function k(W){let e1;l=f=!1,typeof W=="function"?(W(s.state.value[e]),e1={type:o6.patchFunction,storeId:e,events:C}):(L7(s.state.value[e],W),e1={type:o6.patchObject,payload:W,storeId:e,events:C});const g1=L=Symbol();k9().then(()=>{L===g1&&(l=!0)}),f=!0,o4(h,e1,s.state.value[e])}const d=Nr;function M(){n.stop(),h=[],u=[],s._s.delete(e)}function y(W,e1){return function(){D5(s);const g1=Array.from(arguments),O1=[],o2=[];function V2(q1){O1.push(q1)}function i3(q1){o2.push(q1)}o4(u,{args:g1,name:W,store:G,after:V2,onError:i3});let C2;try{C2=e1.apply(this&&this.$id===e?this:G,g1)}catch(q1){throw o4(o2,q1),q1}return C2 instanceof Promise?C2.then(q1=>(o4(O1,q1),q1)).catch(q1=>(o4(o2,q1),Promise.reject(q1))):(o4(O1,C2),C2)}}const B={_p:s,$id:e,$onAction:ya.bind(null,u),$patch:k,$reset:d,$subscribe(W,e1={}){const g1=ya(h,W,e1.detached,()=>O1()),O1=n.run(()=>V4(()=>s.state.value[e],o2=>{(e1.flush==="sync"?f:l)&&W({storeId:e,type:o6.direct,events:C},o2)},u3({},o,e1)));return g1},$dispose:M},G=q4(B);s._s.set(e,G);const l1=s._e.run(()=>(n=Pt(),n.run(()=>c())));for(const W in l1){const e1=l1[W];if(A1(e1)&&!GM(e1)||C3(e1))r||(z&&UM(e1)&&(A1(e1)?e1.value=z[W]:L7(e1,z[W])),s.state.value[e][W]=e1);else if(typeof e1=="function"){const g1=y(W,e1);l1[W]=g1,i.actions[W]=e1}}return u3(G,l1),u3(h1(G),l1),Object.defineProperty(G,"$state",{get:()=>s.state.value[e],set:W=>{k(e1=>{u3(e1,W)})}}),s._p.forEach(W=>{u3(G,n.run(()=>W({store:G,app:s._a,pinia:s,options:i})))}),z&&r&&a.hydrate&&a.hydrate(G.$state,z),l=!0,f=!0,G}function WM(e,c,a){let s,t;const r=typeof c=="function";typeof e=="string"?(s=e,t=r?a:c):(t=e,s=e.id);function n(i,o){const l=Lr();return i=i||l&&q2(Sr),i&&D5(i),i=yr,i._s.has(s)||(r?wr(s,c,t,i):jM(s,t,i)),i._s.get(s)}return n.$id=s,n}const W2=(e,c)=>{const a=e.__vccOpts||e;for(const[s,t]of c)a[s]=t;return a},KM={},ZM={class:"fixed flex justify-items-stretch drop-shadow-lg top-0 left-0 right-0 flex bg-gradient-to-r from-sky-200 via-rose-200 to-emerald-300 font-bold h-[110px]",style:{"z-index":"100"}},YM=S("div",{class:"w-1/6 justify-self-start pt-2 pl-3"},[S("img",{class:"",src:"https://i.postimg.cc/15tvsdYQ/pcg-1.png",alt:"",width:"150"})],-1),QM=S("div",{class:"grow w-70 items-center flex justify-center"},[S("img",{src:"https://i.postimg.cc/4ds1M2hj/font-PCG-1.png",class:""})],-1),XM={class:"w-1/6 text-2xl text-right pt-7 pr-7"},JM=S("div",{class:"bg-gray-700"},null,-1);function cV(e,c,a,s,t,r){const n=G2("font-awesome-icon"),i=G2("router-link");return S1(),R1(c2,null,[S("div",ZM,[YM,QM,S("div",XM,[r1(i,{to:"/"},{default:B2(()=>[r1(n,{icon:"fa-solid fa-house-chimney-user",class:"h-12 w-12 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})]),_:1})])]),JM,S("div",null,[fr(e.$slots,"default")])],64)}const eV=W2(KM,[["render",cV]]),aV={};function sV(e,c,a,s,t,r){return S1(),R1("div")}const Sa=W2(aV,[["render",sV]]),tV={components:{Main:eV,Default:Sa},computed:{layout(){return console.log(this.$route),this.$route.meta.layout||Sa}}};function rV(e,c,a,s,t,r){const n=G2("RouterView");return S1(),I9(FH(r.layout),null,{default:B2(()=>[r1(n)]),_:1})}const nV=W2(tV,[["render",rV]]),iV="modulepreload",oV=function(e){return"/Project/"+e},Na={},lV=function(c,a,s){if(!a||a.length===0)return c();const t=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=oV(r),r in Na)return;Na[r]=!0;const n=r.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(!!s)for(let f=t.length-1;f>=0;f--){const h=t[f];if(h.href===r&&(!n||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":iV,n||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),n)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>c())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const u4=typeof window<"u";function fV(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const m1=Object.assign;function B0(e,c){const a={};for(const s in c){const t=c[s];a[s]=T2(t)?t.map(e):e(t)}return a}const l6=()=>{},T2=Array.isArray,hV=/\/$/,uV=e=>e.replace(hV,"");function O0(e,c,a="/"){let s,t={},r="",n="";const i=c.indexOf("#");let o=c.indexOf("?");return i<o&&i>=0&&(o=-1),o>-1&&(s=c.slice(0,o),r=c.slice(o+1,i>-1?i:c.length),t=e(r)),i>-1&&(s=s||c.slice(0,i),n=c.slice(i,c.length)),s=pV(s!=null?s:c,a),{fullPath:s+(r&&"?")+r+n,path:s,query:t,hash:n}}function mV(e,c){const a=c.query?e(c.query):"";return c.path+(a&&"?")+a+(c.hash||"")}function wa(e,c){return!c||!e.toLowerCase().startsWith(c.toLowerCase())?e:e.slice(c.length)||"/"}function vV(e,c,a){const s=c.matched.length-1,t=a.matched.length-1;return s>-1&&s===t&&k4(c.matched[s],a.matched[t])&&kr(c.params,a.params)&&e(c.query)===e(a.query)&&c.hash===a.hash}function k4(e,c){return(e.aliasOf||e)===(c.aliasOf||c)}function kr(e,c){if(Object.keys(e).length!==Object.keys(c).length)return!1;for(const a in e)if(!CV(e[a],c[a]))return!1;return!0}function CV(e,c){return T2(e)?ka(e,c):T2(c)?ka(c,e):e===c}function ka(e,c){return T2(c)?e.length===c.length&&e.every((a,s)=>a===c[s]):e.length===1&&e[0]===c}function pV(e,c){if(e.startsWith("/"))return e;if(!e)return c;const a=c.split("/"),s=e.split("/");let t=a.length-1,r,n;for(r=0;r<s.length;r++)if(n=s[r],n!==".")if(n==="..")t>1&&t--;else break;return a.slice(0,t).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var y6;(function(e){e.pop="pop",e.push="push"})(y6||(y6={}));var f6;(function(e){e.back="back",e.forward="forward",e.unknown=""})(f6||(f6={}));function dV(e){if(!e)if(u4){const c=document.querySelector("base");e=c&&c.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),uV(e)}const zV=/^[^#]+#/;function HV(e,c){return e.replace(zV,"#")+c}function MV(e,c){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:c.behavior,left:s.left-a.left-(c.left||0),top:s.top-a.top-(c.top||0)}}const R5=()=>({left:window.pageXOffset,top:window.pageYOffset});function VV(e){let c;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),t=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!t)return;c=MV(t,e)}else c=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function Aa(e,c){return(history.state?history.state.position-c:-1)+e}const b7=new Map;function gV(e,c){b7.set(e,c)}function LV(e){const c=b7.get(e);return b7.delete(e),c}let bV=()=>location.protocol+"//"+location.host;function Ar(e,c){const{pathname:a,search:s,hash:t}=c,r=e.indexOf("#");if(r>-1){let i=t.includes(e.slice(r))?e.slice(r).length:1,o=t.slice(i);return o[0]!=="/"&&(o="/"+o),wa(o,"")}return wa(a,e)+s+t}function xV(e,c,a,s){let t=[],r=[],n=null;const i=({state:u})=>{const C=Ar(e,location),z=a.value,L=c.value;let k=0;if(u){if(a.value=C,c.value=u,n&&n===z){n=null;return}k=L?u.position-L.position:0}else s(C);t.forEach(d=>{d(a.value,z,{delta:k,type:y6.pop,direction:k?k>0?f6.forward:f6.back:f6.unknown})})};function o(){n=a.value}function l(u){t.push(u);const C=()=>{const z=t.indexOf(u);z>-1&&t.splice(z,1)};return r.push(C),C}function f(){const{history:u}=window;!u.state||u.replaceState(m1({},u.state,{scroll:R5()}),"")}function h(){for(const u of r)u();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:o,listen:l,destroy:h}}function Ta(e,c,a,s=!1,t=!1){return{back:e,current:c,forward:a,replaced:s,position:window.history.length,scroll:t?R5():null}}function yV(e){const{history:c,location:a}=window,s={value:Ar(e,a)},t={value:c.state};t.value||r(s.value,{back:null,current:s.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function r(o,l,f){const h=e.indexOf("#"),u=h>-1?(a.host&&document.querySelector("base")?e:e.slice(h))+o:bV()+e+o;try{c[f?"replaceState":"pushState"](l,"",u),t.value=l}catch(C){console.error(C),a[f?"replace":"assign"](u)}}function n(o,l){const f=m1({},c.state,Ta(t.value.back,o,t.value.forward,!0),l,{position:t.value.position});r(o,f,!0),s.value=o}function i(o,l){const f=m1({},t.value,c.state,{forward:o,scroll:R5()});r(f.current,f,!0);const h=m1({},Ta(s.value,o,null),{position:f.position+1},l);r(o,h,!1),s.value=o}return{location:s,state:t,push:i,replace:n}}function SV(e){e=dV(e);const c=yV(e),a=xV(e,c.state,c.location,c.replace);function s(r,n=!0){n||a.pauseListeners(),history.go(r)}const t=m1({location:"",base:e,go:s,createHref:HV.bind(null,e)},c,a);return Object.defineProperty(t,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(t,"state",{enumerable:!0,get:()=>c.state.value}),t}function NV(e){return typeof e=="string"||e&&typeof e=="object"}function Tr(e){return typeof e=="string"||typeof e=="symbol"}const l3={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Er=Symbol("");var Ea;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ea||(Ea={}));function A4(e,c){return m1(new Error,{type:e,[Er]:!0},c)}function K2(e,c){return e instanceof Error&&Er in e&&(c==null||!!(e.type&c))}const Pa="[^/]+?",wV={sensitive:!1,strict:!1,start:!0,end:!0},kV=/[.+*?^${}()[\]/\\]/g;function AV(e,c){const a=m1({},wV,c),s=[];let t=a.start?"^":"";const r=[];for(const l of e){const f=l.length?[]:[90];a.strict&&!l.length&&(t+="/");for(let h=0;h<l.length;h++){const u=l[h];let C=40+(a.sensitive?.25:0);if(u.type===0)h||(t+="/"),t+=u.value.replace(kV,"\\$&"),C+=40;else if(u.type===1){const{value:z,repeatable:L,optional:k,regexp:d}=u;r.push({name:z,repeatable:L,optional:k});const M=d||Pa;if(M!==Pa){C+=10;try{new RegExp(`(${M})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${z}" (${M}): `+B.message)}}let y=L?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(y=k&&l.length<2?`(?:/${y})`:"/"+y),k&&(y+="?"),t+=y,C+=20,k&&(C+=-8),L&&(C+=-20),M===".*"&&(C+=-50)}f.push(C)}s.push(f)}if(a.strict&&a.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}a.strict||(t+="/?"),a.end?t+="$":a.strict&&(t+="(?:/|$)");const n=new RegExp(t,a.sensitive?"":"i");function i(l){const f=l.match(n),h={};if(!f)return null;for(let u=1;u<f.length;u++){const C=f[u]||"",z=r[u-1];h[z.name]=C&&z.repeatable?C.split("/"):C}return h}function o(l){let f="",h=!1;for(const u of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const C of u)if(C.type===0)f+=C.value;else if(C.type===1){const{value:z,repeatable:L,optional:k}=C,d=z in l?l[z]:"";if(T2(d)&&!L)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const M=T2(d)?d.join("/"):d;if(!M)if(k)u.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${z}"`);f+=M}}return f||"/"}return{re:n,score:s,keys:r,parse:i,stringify:o}}function TV(e,c){let a=0;for(;a<e.length&&a<c.length;){const s=c[a]-e[a];if(s)return s;a++}return e.length<c.length?e.length===1&&e[0]===40+40?-1:1:e.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function EV(e,c){let a=0;const s=e.score,t=c.score;for(;a<s.length&&a<t.length;){const r=TV(s[a],t[a]);if(r)return r;a++}if(Math.abs(t.length-s.length)===1){if(_a(s))return 1;if(_a(t))return-1}return t.length-s.length}function _a(e){const c=e[e.length-1];return e.length>0&&c[c.length-1]<0}const PV={type:0,value:""},_V=/[a-zA-Z0-9_]/;function IV(e){if(!e)return[[]];if(e==="/")return[[PV]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function c(C){throw new Error(`ERR (${a})/"${l}": ${C}`)}let a=0,s=a;const t=[];let r;function n(){r&&t.push(r),r=[]}let i=0,o,l="",f="";function h(){!l||(a===0?r.push({type:0,value:l}):a===1||a===2||a===3?(r.length>1&&(o==="*"||o==="+")&&c(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):c("Invalid state to consume buffer"),l="")}function u(){l+=o}for(;i<e.length;){if(o=e[i++],o==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:o==="/"?(l&&h(),n()):o===":"?(h(),a=1):u();break;case 4:u(),a=s;break;case 1:o==="("?a=2:_V.test(o)?u():(h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:a=3:f+=o;break;case 3:h(),a=0,o!=="*"&&o!=="?"&&o!=="+"&&i--,f="";break;default:c("Unknown state");break}}return a===2&&c(`Unfinished custom RegExp for param "${l}"`),h(),n(),t}function DV(e,c,a){const s=AV(IV(e.path),a),t=m1(s,{record:e,parent:c,children:[],alias:[]});return c&&!t.record.aliasOf==!c.record.aliasOf&&c.children.push(t),t}function RV(e,c){const a=[],s=new Map;c=Ra({strict:!1,end:!0,sensitive:!1},c);function t(f){return s.get(f)}function r(f,h,u){const C=!u,z=FV(f);z.aliasOf=u&&u.record;const L=Ra(c,f),k=[z];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of y)k.push(m1({},z,{components:u?u.record.components:z.components,path:B,aliasOf:u?u.record:z}))}let d,M;for(const y of k){const{path:B}=y;if(h&&B[0]!=="/"){const G=h.record.path,l1=G[G.length-1]==="/"?"":"/";y.path=h.record.path+(B&&l1+B)}if(d=DV(y,h,L),u?u.alias.push(d):(M=M||d,M!==d&&M.alias.push(d),C&&f.name&&!Da(d)&&n(f.name)),z.children){const G=z.children;for(let l1=0;l1<G.length;l1++)r(G[l1],d,u&&u.children[l1])}u=u||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&o(d)}return M?()=>{n(M)}:l6}function n(f){if(Tr(f)){const h=s.get(f);h&&(s.delete(f),a.splice(a.indexOf(h),1),h.children.forEach(n),h.alias.forEach(n))}else{const h=a.indexOf(f);h>-1&&(a.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(n),f.alias.forEach(n))}}function i(){return a}function o(f){let h=0;for(;h<a.length&&EV(f,a[h])>=0&&(f.record.path!==a[h].record.path||!Pr(f,a[h]));)h++;a.splice(h,0,f),f.record.name&&!Da(f)&&s.set(f.record.name,f)}function l(f,h){let u,C={},z,L;if("name"in f&&f.name){if(u=s.get(f.name),!u)throw A4(1,{location:f});L=u.record.name,C=m1(Ia(h.params,u.keys.filter(M=>!M.optional).map(M=>M.name)),f.params&&Ia(f.params,u.keys.map(M=>M.name))),z=u.stringify(C)}else if("path"in f)z=f.path,u=a.find(M=>M.re.test(z)),u&&(C=u.parse(z),L=u.record.name);else{if(u=h.name?s.get(h.name):a.find(M=>M.re.test(h.path)),!u)throw A4(1,{location:f,currentLocation:h});L=u.record.name,C=m1({},h.params,f.params),z=u.stringify(C)}const k=[];let d=u;for(;d;)k.unshift(d.record),d=d.parent;return{name:L,path:z,params:C,matched:k,meta:OV(k)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:l,removeRoute:n,getRoutes:i,getRecordMatcher:t}}function Ia(e,c){const a={};for(const s of c)s in e&&(a[s]=e[s]);return a}function FV(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:BV(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function BV(e){const c={},a=e.props||!1;if("component"in e)c.default=a;else for(const s in e.components)c[s]=typeof a=="boolean"?a:a[s];return c}function Da(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function OV(e){return e.reduce((c,a)=>m1(c,a.meta),{})}function Ra(e,c){const a={};for(const s in e)a[s]=s in c?c[s]:e[s];return a}function Pr(e,c){return c.children.some(a=>a===e||Pr(e,a))}const _r=/#/g,qV=/&/g,$V=/\//g,UV=/=/g,GV=/\?/g,Ir=/\+/g,jV=/%5B/g,WV=/%5D/g,Dr=/%5E/g,KV=/%60/g,Rr=/%7B/g,ZV=/%7C/g,Fr=/%7D/g,YV=/%20/g;function R9(e){return encodeURI(""+e).replace(ZV,"|").replace(jV,"[").replace(WV,"]")}function QV(e){return R9(e).replace(Rr,"{").replace(Fr,"}").replace(Dr,"^")}function x7(e){return R9(e).replace(Ir,"%2B").replace(YV,"+").replace(_r,"%23").replace(qV,"%26").replace(KV,"`").replace(Rr,"{").replace(Fr,"}").replace(Dr,"^")}function XV(e){return x7(e).replace(UV,"%3D")}function JV(e){return R9(e).replace(_r,"%23").replace(GV,"%3F")}function cg(e){return e==null?"":JV(e).replace($V,"%2F")}function c5(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function eg(e){const c={};if(e===""||e==="?")return c;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let t=0;t<s.length;++t){const r=s[t].replace(Ir," "),n=r.indexOf("="),i=c5(n<0?r:r.slice(0,n)),o=n<0?null:c5(r.slice(n+1));if(i in c){let l=c[i];T2(l)||(l=c[i]=[l]),l.push(o)}else c[i]=o}return c}function Fa(e){let c="";for(let a in e){const s=e[a];if(a=XV(a),s==null){s!==void 0&&(c+=(c.length?"&":"")+a);continue}(T2(s)?s.map(r=>r&&x7(r)):[s&&x7(s)]).forEach(r=>{r!==void 0&&(c+=(c.length?"&":"")+a,r!=null&&(c+="="+r))})}return c}function ag(e){const c={};for(const a in e){const s=e[a];s!==void 0&&(c[a]=T2(s)?s.map(t=>t==null?null:""+t):s==null?s:""+s)}return c}const sg=Symbol(""),Ba=Symbol(""),F9=Symbol(""),Br=Symbol(""),y7=Symbol("");function X4(){let e=[];function c(s){return e.push(s),()=>{const t=e.indexOf(s);t>-1&&e.splice(t,1)}}function a(){e=[]}return{add:c,list:()=>e,reset:a}}function m3(e,c,a,s,t){const r=s&&(s.enterCallbacks[t]=s.enterCallbacks[t]||[]);return()=>new Promise((n,i)=>{const o=h=>{h===!1?i(A4(4,{from:a,to:c})):h instanceof Error?i(h):NV(h)?i(A4(2,{from:c,to:h})):(r&&s.enterCallbacks[t]===r&&typeof h=="function"&&r.push(h),n())},l=e.call(s&&s.instances[t],c,a,o);let f=Promise.resolve(l);e.length<3&&(f=f.then(o)),f.catch(h=>i(h))})}function q0(e,c,a,s){const t=[];for(const r of e)for(const n in r.components){let i=r.components[n];if(!(c!=="beforeRouteEnter"&&!r.instances[n]))if(tg(i)){const l=(i.__vccOpts||i)[c];l&&t.push(m3(l,a,s,r,n))}else{let o=i();t.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${r.path}"`));const f=fV(l)?l.default:l;r.components[n]=f;const u=(f.__vccOpts||f)[c];return u&&m3(u,a,s,r,n)()}))}}return t}function tg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Oa(e){const c=q2(F9),a=q2(Br),s=L1(()=>c.resolve(H4(e.to))),t=L1(()=>{const{matched:o}=s.value,{length:l}=o,f=o[l-1],h=a.matched;if(!f||!h.length)return-1;const u=h.findIndex(k4.bind(null,f));if(u>-1)return u;const C=qa(o[l-2]);return l>1&&qa(f)===C&&h[h.length-1].path!==C?h.findIndex(k4.bind(null,o[l-2])):u}),r=L1(()=>t.value>-1&&og(a.params,s.value.params)),n=L1(()=>t.value>-1&&t.value===a.matched.length-1&&kr(a.params,s.value.params));function i(o={}){return ig(o)?c[H4(e.replace)?"replace":"push"](H4(e.to)).catch(l6):Promise.resolve()}return{route:s,href:L1(()=>s.value.href),isActive:r,isExactActive:n,navigate:i}}const rg=U6({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oa,setup(e,{slots:c}){const a=q4(Oa(e)),{options:s}=q2(F9),t=L1(()=>({[$a(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[$a(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=c.default&&c.default(a);return e.custom?r:I5("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:t.value},r)}}}),ng=rg;function ig(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const c=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return e.preventDefault&&e.preventDefault(),!0}}function og(e,c){for(const a in c){const s=c[a],t=e[a];if(typeof s=="string"){if(s!==t)return!1}else if(!T2(t)||t.length!==s.length||s.some((r,n)=>r!==t[n]))return!1}return!0}function qa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $a=(e,c,a)=>e!=null?e:c!=null?c:a,lg=U6({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:c,slots:a}){const s=q2(y7),t=L1(()=>e.route||s.value),r=q2(Ba,0),n=L1(()=>{let l=H4(r);const{matched:f}=t.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),i=L1(()=>t.value.matched[n.value]);F8(Ba,L1(()=>n.value+1)),F8(sg,i),F8(y7,t);const o=N9();return V4(()=>[o.value,i.value,e.name],([l,f,h],[u,C,z])=>{f&&(f.instances[h]=l,C&&C!==f&&l&&l===u&&(f.leaveGuards.size||(f.leaveGuards=C.leaveGuards),f.updateGuards.size||(f.updateGuards=C.updateGuards))),l&&f&&(!C||!k4(f,C)||!u)&&(f.enterCallbacks[h]||[]).forEach(L=>L(l))},{flush:"post"}),()=>{const l=t.value,f=e.name,h=i.value,u=h&&h.components[f];if(!u)return Ua(a.default,{Component:u,route:l});const C=h.props[f],z=C?C===!0?l.params:typeof C=="function"?C(l):C:null,k=I5(u,m1({},z,c,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(h.instances[f]=null)},ref:o}));return Ua(a.default,{Component:k,route:l})||k}}});function Ua(e,c){if(!e)return null;const a=e(c);return a.length===1?a[0]:a}const fg=lg;function hg(e){const c=RV(e.routes,e),a=e.parseQuery||eg,s=e.stringifyQuery||Fa,t=e.history,r=X4(),n=X4(),i=X4(),o=rH(l3);let l=l3;u4&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=B0.bind(null,V=>""+V),h=B0.bind(null,cg),u=B0.bind(null,c5);function C(V,_){let T,q;return Tr(V)?(T=c.getRecordMatcher(V),q=_):q=V,c.addRoute(q,T)}function z(V){const _=c.getRecordMatcher(V);_&&c.removeRoute(_)}function L(){return c.getRoutes().map(V=>V.record)}function k(V){return!!c.getRecordMatcher(V)}function d(V,_){if(_=m1({},_||o.value),typeof V=="string"){const m=O0(a,V,_.path),v=c.resolve({path:m.path},_),p=t.createHref(m.fullPath);return m1(m,v,{params:u(v.params),hash:c5(m.hash),redirectedFrom:void 0,href:p})}let T;if("path"in V)T=m1({},V,{path:O0(a,V.path,_.path).path});else{const m=m1({},V.params);for(const v in m)m[v]==null&&delete m[v];T=m1({},V,{params:h(V.params)}),_.params=h(_.params)}const q=c.resolve(T,_),n1=V.hash||"";q.params=f(u(q.params));const y1=mV(s,m1({},V,{hash:QV(n1),path:q.path})),J=t.createHref(y1);return m1({fullPath:y1,hash:n1,query:s===Fa?ag(V.query):V.query||{}},q,{redirectedFrom:void 0,href:J})}function M(V){return typeof V=="string"?O0(a,V,o.value.path):m1({},V)}function y(V,_){if(l!==V)return A4(8,{from:_,to:V})}function B(V){return W(V)}function G(V){return B(m1(M(V),{replace:!0}))}function l1(V){const _=V.matched[V.matched.length-1];if(_&&_.redirect){const{redirect:T}=_;let q=typeof T=="function"?T(V):T;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=M(q):{path:q},q.params={}),m1({query:V.query,hash:V.hash,params:"path"in q?{}:V.params},q)}}function W(V,_){const T=l=d(V),q=o.value,n1=V.state,y1=V.force,J=V.replace===!0,m=l1(T);if(m)return W(m1(M(m),{state:typeof m=="object"?m1({},n1,m.state):n1,force:y1,replace:J}),_||T);const v=T;v.redirectedFrom=_;let p;return!y1&&vV(s,q,T)&&(p=A4(16,{to:v,from:q}),A3(q,q,!0,!1)),(p?Promise.resolve(p):g1(v,q)).catch(H=>K2(H)?K2(H,2)?H:L2(H):d1(H,v,q)).then(H=>{if(H){if(K2(H,2))return W(m1({replace:J},M(H.to),{state:typeof H.to=="object"?m1({},n1,H.to.state):n1,force:y1}),_||v)}else H=o2(v,q,!0,J,n1);return O1(v,q,H),H})}function e1(V,_){const T=y(V,_);return T?Promise.reject(T):Promise.resolve()}function g1(V,_){let T;const[q,n1,y1]=ug(V,_);T=q0(q.reverse(),"beforeRouteLeave",V,_);for(const m of q)m.leaveGuards.forEach(v=>{T.push(m3(v,V,_))});const J=e1.bind(null,V,_);return T.push(J),l4(T).then(()=>{T=[];for(const m of r.list())T.push(m3(m,V,_));return T.push(J),l4(T)}).then(()=>{T=q0(n1,"beforeRouteUpdate",V,_);for(const m of n1)m.updateGuards.forEach(v=>{T.push(m3(v,V,_))});return T.push(J),l4(T)}).then(()=>{T=[];for(const m of V.matched)if(m.beforeEnter&&!_.matched.includes(m))if(T2(m.beforeEnter))for(const v of m.beforeEnter)T.push(m3(v,V,_));else T.push(m3(m.beforeEnter,V,_));return T.push(J),l4(T)}).then(()=>(V.matched.forEach(m=>m.enterCallbacks={}),T=q0(y1,"beforeRouteEnter",V,_),T.push(J),l4(T))).then(()=>{T=[];for(const m of n.list())T.push(m3(m,V,_));return T.push(J),l4(T)}).catch(m=>K2(m,8)?m:Promise.reject(m))}function O1(V,_,T){for(const q of i.list())q(V,_,T)}function o2(V,_,T,q,n1){const y1=y(V,_);if(y1)return y1;const J=_===l3,m=u4?history.state:{};T&&(q||J?t.replace(V.fullPath,m1({scroll:J&&m&&m.scroll},n1)):t.push(V.fullPath,n1)),o.value=V,A3(V,_,T,J),L2()}let V2;function i3(){V2||(V2=t.listen((V,_,T)=>{if(!v8.listening)return;const q=d(V),n1=l1(q);if(n1){W(m1(n1,{replace:!0}),q).catch(l6);return}l=q;const y1=o.value;u4&&gV(Aa(y1.fullPath,T.delta),R5()),g1(q,y1).catch(J=>K2(J,12)?J:K2(J,2)?(W(J.to,q).then(m=>{K2(m,20)&&!T.delta&&T.type===y6.pop&&t.go(-1,!1)}).catch(l6),Promise.reject()):(T.delta&&t.go(-T.delta,!1),d1(J,q,y1))).then(J=>{J=J||o2(q,y1,!1),J&&(T.delta&&!K2(J,8)?t.go(-T.delta,!1):T.type===y6.pop&&K2(J,20)&&t.go(-1,!1)),O1(q,y1,J)}).catch(l6)}))}let C2=X4(),q1=X4(),T1;function d1(V,_,T){L2(V);const q=q1.list();return q.length?q.forEach(n1=>n1(V,_,T)):console.error(V),Promise.reject(V)}function C1(){return T1&&o.value!==l3?Promise.resolve():new Promise((V,_)=>{C2.add([V,_])})}function L2(V){return T1||(T1=!V,i3(),C2.list().forEach(([_,T])=>V?T(V):_()),C2.reset()),V}function A3(V,_,T,q){const{scrollBehavior:n1}=e;if(!u4||!n1)return Promise.resolve();const y1=!T&&LV(Aa(V.fullPath,0))||(q||!T)&&history.state&&history.state.scroll||null;return k9().then(()=>n1(V,_,y1)).then(J=>J&&VV(J)).catch(J=>d1(J,V,_))}const b2=V=>t.go(V);let l2;const n4=new Set,v8={currentRoute:o,listening:!0,addRoute:C,removeRoute:z,hasRoute:k,getRoutes:L,resolve:d,options:e,push:B,replace:G,go:b2,back:()=>b2(-1),forward:()=>b2(1),beforeEach:r.add,beforeResolve:n.add,afterEach:i.add,onError:q1.add,isReady:C1,install(V){const _=this;V.component("RouterLink",ng),V.component("RouterView",fg),V.config.globalProperties.$router=_,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>H4(o)}),u4&&!l2&&o.value===l3&&(l2=!0,B(t.location).catch(n1=>{}));const T={};for(const n1 in l3)T[n1]=L1(()=>o.value[n1]);V.provide(F9,_),V.provide(Br,q4(T)),V.provide(y7,o);const q=V.unmount;n4.add(V),V.unmount=function(){n4.delete(V),n4.size<1&&(l=l3,V2&&V2(),V2=null,o.value=l3,l2=!1,T1=!1),q()}}};return v8}function l4(e){return e.reduce((c,a)=>c.then(()=>a()),Promise.resolve())}function ug(e,c){const a=[],s=[],t=[],r=Math.max(c.matched.length,e.matched.length);for(let n=0;n<r;n++){const i=c.matched[n];i&&(e.matched.find(l=>k4(l,i))?s.push(i):a.push(i));const o=e.matched[n];o&&(c.matched.find(l=>k4(l,o))||t.push(o))}return[a,s,t]}const mg={},vg={style:{"font-family":"'Sono', sans-serif"}},Cg=G6('<div class="bg-amber-100 p-20 mt-[90px]"><div class="flow-root text-center animate-fade"><p class="text-4xl font-bold">Leading , Learning and fighter</p><div class="flow-root text-xl pt-8 pb-13"><p>Our team&#39;s concept is as strong as the Powerpuff Girls.</p><p class="pt-2">We have member with leading like Blossom,</p><p class="pt-2">member who never stop learning like Bubble and a fighter like a Buttercup</p></div></div></div>',1),pg={class:"flex"},dg={class:"flex-1 text-center z-0 bg-sky-200 drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-sky-400 duration-300 hover:z-50"},zg={class:"flex-col inline-block py-10"},Hg=G6('<div class="flex justify-center"><img class="rounded-full" src="https://i.postimg.cc/L2xVkSkP/Fresh.jpg" alt="" width="200"></div><div class="p-5"><p class="text-4xl font-bold">Fresh</p><p class="p-2 text-xl">Nuttanicha Kaeopholsri</p></div>',2),Mg={class:"flex justify-center"},Vg=S("div",{class:"m-3 p-2 w-[200px] bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300"},"Profile",-1),gg={class:"flex-1 text-center z-0 bg-rose-300 drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-rose-400 duration-300 hover:z-50"},Lg={class:"flex-col inline-block py-10"},bg=G6('<div class="flex justify-center"><img class="rounded-full" src="https://i.postimg.cc/3KYpzbZh/Yuuka.jpg" alt="" width="200"></div><div class="p-5"><p class="text-4xl font-bold">Yuuka</p><p class="p-2 text-xl">Yuuka Kawai</p></div>',2),xg={class:"flex justify-center"},yg=S("div",{class:"m-3 p-2 w-[200px] bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300"},"Profile",-1),Sg={class:"flex-1 text-center z-0 bg-emerald-300 drop-shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-400 duration-300 hover:z-50"},Ng={class:"flex-col inline-block py-10"},wg=G6('<div class="flex justify-center"><img class="rounded-full justify-self-center" src="https://i.postimg.cc/bzyDmSzN/Yeepoon.jpg" alt="" width="200"></div><div class="p-5"><p class="text-4xl font-bold">Yeepoon</p><p class="p-2 text-xl">Panisara Poosee</p></div>',2),kg={class:"flex justify-center"},Ag=S("div",{class:"m-3 p-2 w-[200px] bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300"},"Profile",-1),Tg={class:"text-center font-bold text-xl bg-amber-100 pt-24 pb-10"},Eg={class:"items-center flex justify-center"},Pg=S("div",{class:"w-[350px] h-[60px] text-3xl items-center flex justify-center bg-slate-200 rounded-full drop-shadow-2xl transition ease-in-out delay-150 hover:bg-slate-400 duration-300"},"Our LifeStyle",-1),_g=S("div",{class:"pt-[75px]"},[S("p",null,"Female Future Foundation"),S("p",null,"@2022")],-1);function Ig(e,c,a,s,t,r){const n=G2("router-link");return S1(),R1("div",vg,[Cg,S("div",pg,[S("div",dg,[S("div",zg,[Hg,S("div",Mg,[r1(n,{to:"/fresh"},{default:B2(()=>[Vg]),_:1})])])]),S("div",gg,[S("div",Lg,[bg,S("div",xg,[r1(n,{to:"/yuuka"},{default:B2(()=>[yg]),_:1})])])]),S("div",Sg,[S("div",Ng,[wg,S("div",kg,[r1(n,{to:"/yeepoon"},{default:B2(()=>[Ag]),_:1})])])])]),S("div",Tg,[S("div",Eg,[r1(n,{to:"/flex"},{default:B2(()=>[Pg]),_:1})]),_g])])}const Dg=W2(mg,[["render",Ig]]);const Rg={props:{name:{type:String,default:"A B"},ID:{type:String,default:"0000"},Image:{type:String,default:"/assets/images/Yuuka.jpg"},nickname:{type:String,default:"Yuuka"},IG:{type:String,default:"https://www.instagram.com/yuuka__uk/"},git:{type:String,default:"https://github.com/yuuka2803"},color:{type:String,default:"bg-sky-200"},back:{type:String,default:"/yuuka"},next:{type:String,default:"/fresh"}},methods:{getUrlImage(e){return{"background-image":'url("'+e+'")'}},getColor(e){return e},getBack(e){return e},getNext(e){return e}}},Fg={class:"h-96 w-full bg-cover bg-center mt-[110px]",style:{"background-image":"url(https://i.postimg.cc/WNbNkxM5/pcg-extend-sunscreen.png)","font-family":"'Sono', sans-serif"}},Bg={class:"grid justify-items-center pt-10"},Og={class:"flex-1 pb-10 items-center flex justify-center text-white text-2xl text-right pt-8 mr-11"},qg={class:"w-2/5 h-[310px] grid justify-items-center bg-white rounded-xl m-5 drop-shadow-2xl px-10 animate-fadeimage"},$g=S("p",{class:"pt-6 text-4xl font-bold"},"Information",-1),Ug={class:"text-xl"},Gg={class:"text-xl"},jg={class:"text-xl"},Wg=S("p",{class:"text-xl"},"CS37 KU82",-1),Kg=["href"],Zg=["href"],Yg={class:"flex-1 pb-10 items-center flex justify-center text-center text-white text-2xl text-right pt-8 mr-11"};function Qg(e,c,a,s,t,r){const n=G2("font-awesome-icon"),i=G2("router-link");return S1(),R1("div",null,[S("div",Fg,[S("div",Bg,[S("div",{style:L5(r.getUrlImage(a.Image)),class:"blur-none rounded-full border-4 drop-shadow-2xl shadow-black bg-cover w-[300px] h-[300px] animate-fadeimage",alt:""},null,4)]),S("div",{class:b5([r.getColor(a.color),"flex h-[400px] w-full pt-5 mt-[44px]"])},[S("div",Og,[r1(i,{to:r.getBack(a.back)},{default:B2(()=>[r1(n,{icon:"fa-solid fa-circle-left shadow-2xl",class:"h-12 w-12 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})]),_:1},8,["to"])]),S("div",qg,[$g,S("p",Ug,"Name : "+W1(a.name),1),S("p",Gg,"Nickname : "+W1(a.nickname),1),S("p",jg,"ID : "+W1(a.ID),1),Wg,S("div",null,[S("a",{href:a.IG,class:"text-black text-4xl mr-3"},[r1(n,{icon:"fa-brands fa-instagram",class:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})],8,Kg),S("a",{href:a.git,class:"text-black text-4xl"},[r1(n,{icon:"fa-brands fa-square-github",class:"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})],8,Zg)])]),S("div",Yg,[r1(i,{to:r.getNext(a.next)},{default:B2(()=>[r1(n,{icon:"fa-solid fa-circle-right",class:"h-12 w-12 text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})]),_:1},8,["to"])])],2)]),S("div",null,[fr(e.$slots,"default")])])}const B9=W2(Rg,[["render",Qg]]),Xg={data(){return{name:"Yuuka Kawai",ID:6510405768}},components:{profileCard:B9}},Jg={class:"min-h-screen bg-rose-200"};function cL(e,c,a,s,t,r){const n=G2("profileCard");return S1(),R1("div",Jg,[r1(n,{name:"Yuuka Kawai",nickname:"Yuuka",ID:"6510405768",IG:"https://www.instagram.com/yuuka__uk/",git:"https://github.com/yuuka2803",Image:"https://i.postimg.cc/3KYpzbZh/Yuuka.jpg",color:"bg-rose-200",back:"/fresh",next:"/yeepoon"})])}const eL=W2(Xg,[["render",cL]]),aL={data(){return{name:"Yuuka Kawai",ID:6510405768}},components:{profileCard:B9}},sL={class:"min-h-screen bg-sky-200"};function tL(e,c,a,s,t,r){const n=G2("profileCard");return S1(),R1("div",sL,[r1(n,{name:"Nuttanicha Keaopholsri",nickname:"Fresh",ID:"6510405474",IG:"https://www.instagram.com/nt._.fresh/",git:"https://github.com/NuttaNut2327",Image:"https://i.postimg.cc/L2xVkSkP/Fresh.jpg",color:"bg-sky-200",back:"/yeepoon",next:"/yuuka"},{default:B2(()=>[gr("> ")]),_:1})])}const rL=W2(aL,[["render",tL]]),nL={data(){return{name:"Yuuka Kawai",ID:6510405768}},components:{profileCard:B9}},iL={class:"min-h-screen bg-emerald-200"};function oL(e,c,a,s,t,r){const n=G2("profileCard");return S1(),R1("div",iL,[r1(n,{name:"Panisara Poosee",nickname:"Yeepoon",ID:"6510405661",IG:"https://www.instagram.com/miss_jxpxn/",git:"https://github.com/imyourjxpxn",Image:"https://i.postimg.cc/bzyDmSzN/Yeepoon.jpg",color:"bg-emerald-200",back:"/yuuka",next:"/fresh"})])}const Ga=W2(nL,[["render",oL]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=function(e){const c=[];let a=0;for(let s=0;s<e.length;s++){let t=e.charCodeAt(s);t<128?c[a++]=t:t<2048?(c[a++]=t>>6|192,c[a++]=t&63|128):(t&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(t=65536+((t&1023)<<10)+(e.charCodeAt(++s)&1023),c[a++]=t>>18|240,c[a++]=t>>12&63|128,c[a++]=t>>6&63|128,c[a++]=t&63|128):(c[a++]=t>>12|224,c[a++]=t>>6&63|128,c[a++]=t&63|128)}return c},lL=function(e){const c=[];let a=0,s=0;for(;a<e.length;){const t=e[a++];if(t<128)c[s++]=String.fromCharCode(t);else if(t>191&&t<224){const r=e[a++];c[s++]=String.fromCharCode((t&31)<<6|r&63)}else if(t>239&&t<365){const r=e[a++],n=e[a++],i=e[a++],o=((t&7)<<18|(r&63)<<12|(n&63)<<6|i&63)-65536;c[s++]=String.fromCharCode(55296+(o>>10)),c[s++]=String.fromCharCode(56320+(o&1023))}else{const r=e[a++],n=e[a++];c[s++]=String.fromCharCode((t&15)<<12|(r&63)<<6|n&63)}}return c.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],n=t+1<e.length,i=n?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,f=r>>2,h=(r&3)<<4|i>>4;let u=(i&15)<<2|l>>6,C=l&63;o||(C=64,n||(u=64)),s.push(a[f],a[h],a[u],a[C])}return s.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(Or(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):lL(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=a[e.charAt(t++)],i=t<e.length?a[e.charAt(t)]:0;++t;const l=t<e.length?a[e.charAt(t)]:64;++t;const h=t<e.length?a[e.charAt(t)]:64;if(++t,r==null||i==null||l==null||h==null)throw Error();const u=r<<2|i>>4;if(s.push(u),l!==64){const C=i<<4&240|l>>2;if(s.push(C),h!==64){const z=l<<6&192|h;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},fL=function(e){const c=Or(e);return qr.encodeByteArray(c,!0)},e5=function(e){return fL(e).replace(/\./g,"")},hL=function(e){try{return qr.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};function uL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $r(){return typeof indexedDB=="object"}function Ur(){return new Promise((e,c)=>{try{let a=!0;const s="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(s);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(s),e(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var r;c(((r=t.error)===null||r===void 0?void 0:r.message)||"")}}catch(a){c(a)}})}function mL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function vL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=()=>vL().__FIREBASE_DEFAULTS__,pL=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&hL(e[1]);return c&&JSON.parse(c)},Gr=()=>{try{return CL()||pL()||dL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zL=e=>{var c,a;return(a=(c=Gr())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},HL=e=>{const c=zL(e);if(!c)return;const a=c.lastIndexOf(":");if(a<=0||a+1===c.length)throw new Error(`Invalid host ${c} with no separate hostname and port!`);const s=parseInt(c.substring(a+1),10);return c[0]==="["?[c.substring(1,a-1),s]:[c.substring(0,a),s]},ML=()=>{var e;return(e=Gr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,s)=>{a?this.reject(a):this.resolve(s),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(e,c){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},s=c||"demo-project",t=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const n=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:t,exp:t+3600,auth_time:t,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),i="";return[e5(JSON.stringify(a)),e5(JSON.stringify(n)),i].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL="FirebaseError";class N3 extends Error{constructor(c,a,s){super(a),this.code=c,this.customData=s,this.name=LL,Object.setPrototypeOf(this,N3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F5.prototype.create)}}class F5{constructor(c,a,s){this.service=c,this.serviceName=a,this.errors=s}create(c,...a){const s=a[0]||{},t=`${this.service}/${c}`,r=this.errors[c],n=r?bL(r,s):"Error",i=`${this.serviceName}: ${n} (${t}).`;return new N3(t,i,s)}}function bL(e,c){return e.replace(xL,(a,s)=>{const t=c[s];return t!=null?String(t):`<${s}?>`})}const xL=/\{\$([^}]+)}/g;function a5(e,c){if(e===c)return!0;const a=Object.keys(e),s=Object.keys(c);for(const t of a){if(!s.includes(t))return!1;const r=e[t],n=c[t];if(ja(r)&&ja(n)){if(!a5(r,n))return!1}else if(r!==n)return!1}for(const t of s)if(!a.includes(t))return!1;return!0}function ja(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=1e3,SL=2,NL=4*60*60*1e3,wL=.5;function Wa(e,c=yL,a=SL){const s=c*Math.pow(a,e),t=Math.round(wL*s*(Math.random()-.5)*2);return Math.min(NL,s+t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O9(e){return e&&e._delegate?e._delegate:e}class X2{constructor(c,a,s){this.name=c,this.instanceFactory=a,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const s=new VL;if(this.instancesDeferred.set(a,s),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&s.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const s=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),t=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(t)return null;throw r}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(TL(c))try{this.getOrInitializeService({instanceIdentifier:_3})}catch{}for(const[a,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const r=this.getOrInitializeService({instanceIdentifier:t});s.resolve(r)}catch{}}}}clearInstance(c=_3){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=_3){return this.instances.has(c)}getOptions(c=_3){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,s=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:s,options:a});for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);s===i&&n.resolve(t)}return t}onInit(c,a){var s;const t=this.normalizeInstanceIdentifier(a),r=(s=this.onInitCallbacks.get(t))!==null&&s!==void 0?s:new Set;r.add(c),this.onInitCallbacks.set(t,r);const n=this.instances.get(t);return n&&c(n,t),()=>{r.delete(c)}}invokeOnInitCallbacks(c,a){const s=this.onInitCallbacks.get(a);if(!!s)for(const t of s)try{t(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let s=this.instances.get(c);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AL(c),options:a}),this.instances.set(c,s),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(s,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,s)}catch{}return s||null}normalizeInstanceIdentifier(c=_3){return this.component?this.component.multipleInstances?c:_3:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AL(e){return e===_3?void 0:e}function TL(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new kL(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u1;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u1||(u1={}));const PL={debug:u1.DEBUG,verbose:u1.VERBOSE,info:u1.INFO,warn:u1.WARN,error:u1.ERROR,silent:u1.SILENT},_L=u1.INFO,IL={[u1.DEBUG]:"log",[u1.VERBOSE]:"log",[u1.INFO]:"info",[u1.WARN]:"warn",[u1.ERROR]:"error"},DL=(e,c,...a)=>{if(c<e.logLevel)return;const s=new Date().toISOString(),t=IL[c];if(t)console[t](`[${s}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class q9{constructor(c){this.name=c,this._logLevel=_L,this._logHandler=DL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in u1))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?PL[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,u1.DEBUG,...c),this._logHandler(this,u1.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,u1.VERBOSE,...c),this._logHandler(this,u1.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,u1.INFO,...c),this._logHandler(this,u1.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,u1.WARN,...c),this._logHandler(this,u1.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,u1.ERROR,...c),this._logHandler(this,u1.ERROR,...c)}}const RL=(e,c)=>c.some(a=>e instanceof a);let Ka,Za;function FL(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BL(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jr=new WeakMap,S7=new WeakMap,Wr=new WeakMap,$0=new WeakMap,$9=new WeakMap;function OL(e){const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("success",r),e.removeEventListener("error",n)},r=()=>{a(d3(e.result)),t()},n=()=>{s(e.error),t()};e.addEventListener("success",r),e.addEventListener("error",n)});return c.then(a=>{a instanceof IDBCursor&&jr.set(a,e)}).catch(()=>{}),$9.set(c,e),c}function qL(e){if(S7.has(e))return;const c=new Promise((a,s)=>{const t=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",n),e.removeEventListener("abort",n)},r=()=>{a(),t()},n=()=>{s(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",r),e.addEventListener("error",n),e.addEventListener("abort",n)});S7.set(e,c)}let N7={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return S7.get(e);if(c==="objectStoreNames")return e.objectStoreNames||Wr.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return d3(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function $L(e){N7=e(N7)}function UL(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const s=e.call(U0(this),c,...a);return Wr.set(s,c.sort?c.sort():[c]),d3(s)}:BL().includes(e)?function(...c){return e.apply(U0(this),c),d3(jr.get(this))}:function(...c){return d3(e.apply(U0(this),c))}}function GL(e){return typeof e=="function"?UL(e):(e instanceof IDBTransaction&&qL(e),RL(e,FL())?new Proxy(e,N7):e)}function d3(e){if(e instanceof IDBRequest)return OL(e);if($0.has(e))return $0.get(e);const c=GL(e);return c!==e&&($0.set(e,c),$9.set(c,e)),c}const U0=e=>$9.get(e);function Kr(e,c,{blocked:a,upgrade:s,blocking:t,terminated:r}={}){const n=indexedDB.open(e,c),i=d3(n);return s&&n.addEventListener("upgradeneeded",o=>{s(d3(n.result),o.oldVersion,o.newVersion,d3(n.transaction))}),a&&n.addEventListener("blocked",()=>a()),i.then(o=>{r&&o.addEventListener("close",()=>r()),t&&o.addEventListener("versionchange",()=>t())}).catch(()=>{}),i}const jL=["get","getKey","getAll","getAllKeys","count"],WL=["put","add","delete","clear"],G0=new Map;function Ya(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(G0.get(c))return G0.get(c);const a=c.replace(/FromIndex$/,""),s=c!==a,t=WL.includes(a);if(!(a in(s?IDBIndex:IDBObjectStore).prototype)||!(t||jL.includes(a)))return;const r=async function(n,...i){const o=this.transaction(n,t?"readwrite":"readonly");let l=o.store;return s&&(l=l.index(i.shift())),(await Promise.all([l[a](...i),t&&o.done]))[0]};return G0.set(c,r),r}$L(e=>({...e,get:(c,a,s)=>Ya(c,a)||e.get(c,a,s),has:(c,a)=>!!Ya(c,a)||e.has(c,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(ZL(a)){const s=a.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(a=>a).join(" ")}}function ZL(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const w7="@firebase/app",Qa="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=new q9("@firebase/app"),YL="@firebase/app-compat",QL="@firebase/analytics-compat",XL="@firebase/analytics",JL="@firebase/app-check-compat",cb="@firebase/app-check",eb="@firebase/auth",ab="@firebase/auth-compat",sb="@firebase/database",tb="@firebase/database-compat",rb="@firebase/functions",nb="@firebase/functions-compat",ib="@firebase/installations",ob="@firebase/installations-compat",lb="@firebase/messaging",fb="@firebase/messaging-compat",hb="@firebase/performance",ub="@firebase/performance-compat",mb="@firebase/remote-config",vb="@firebase/remote-config-compat",Cb="@firebase/storage",pb="@firebase/storage-compat",db="@firebase/firestore",zb="@firebase/firestore-compat",Hb="firebase",Mb="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k7="[DEFAULT]",Vb={[w7]:"fire-core",[YL]:"fire-core-compat",[XL]:"fire-analytics",[QL]:"fire-analytics-compat",[cb]:"fire-app-check",[JL]:"fire-app-check-compat",[eb]:"fire-auth",[ab]:"fire-auth-compat",[sb]:"fire-rtdb",[tb]:"fire-rtdb-compat",[rb]:"fire-fn",[nb]:"fire-fn-compat",[ib]:"fire-iid",[ob]:"fire-iid-compat",[lb]:"fire-fcm",[fb]:"fire-fcm-compat",[hb]:"fire-perf",[ub]:"fire-perf-compat",[mb]:"fire-rc",[vb]:"fire-rc-compat",[Cb]:"fire-gcs",[pb]:"fire-gcs-compat",[db]:"fire-fst",[zb]:"fire-fst-compat","fire-js":"fire-js",[Hb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5=new Map,A7=new Map;function gb(e,c){try{e.container.addComponent(c)}catch(a){X3.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function V3(e){const c=e.name;if(A7.has(c))return X3.debug(`There were multiple attempts to register component ${c}.`),!1;A7.set(c,e);for(const a of s5.values())gb(a,e);return!0}function j6(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},z3=new F5("app","Firebase",Lb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(c,a,s){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new X2("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw z3.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=Mb;function Zr(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const s=Object.assign({name:k7,automaticDataCollectionEnabled:!1},c),t=s.name;if(typeof t!="string"||!t)throw z3.create("bad-app-name",{appName:String(t)});if(a||(a=ML()),!a)throw z3.create("no-options");const r=s5.get(t);if(r){if(a5(a,r.options)&&a5(s,r.config))return r;throw z3.create("duplicate-app",{appName:t})}const n=new EL(t);for(const o of A7.values())n.addComponent(o);const i=new bb(a,s,n);return s5.set(t,i),i}function Yr(e=k7){const c=s5.get(e);if(!c&&e===k7)return Zr();if(!c)throw z3.create("no-app",{appName:e});return c}function $2(e,c,a){var s;let t=(s=Vb[e])!==null&&s!==void 0?s:e;a&&(t+=`-${a}`);const r=t.match(/\s|\//),n=c.match(/\s|\//);if(r||n){const i=[`Unable to register library "${t}" with version "${c}":`];r&&i.push(`library name "${t}" contains illegal characters (whitespace or "/")`),r&&n&&i.push("and"),n&&i.push(`version name "${c}" contains illegal characters (whitespace or "/")`),X3.warn(i.join(" "));return}V3(new X2(`${t}-version`,()=>({library:t,version:c}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="firebase-heartbeat-database",Sb=1,S6="firebase-heartbeat-store";let j0=null;function Qr(){return j0||(j0=Kr(yb,Sb,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(S6)}}}).catch(e=>{throw z3.create("idb-open",{originalErrorMessage:e.message})})),j0}async function Nb(e){var c;try{return(await Qr()).transaction(S6).objectStore(S6).get(Xr(e))}catch(a){if(a instanceof N3)X3.warn(a.message);else{const s=z3.create("idb-get",{originalErrorMessage:(c=a)===null||c===void 0?void 0:c.message});X3.warn(s.message)}}}async function Xa(e,c){var a;try{const t=(await Qr()).transaction(S6,"readwrite");return await t.objectStore(S6).put(c,Xr(e)),t.done}catch(s){if(s instanceof N3)X3.warn(s.message);else{const t=z3.create("idb-set",{originalErrorMessage:(a=s)===null||a===void 0?void 0:a.message});X3.warn(t.message)}}}function Xr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=1024,kb=30*24*60*60*1e3;class Ab{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new Eb(a),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ja();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(t=>t.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const r=new Date(t.date).valueOf();return Date.now()-r<=kb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const c=Ja(),{heartbeatsToSend:a,unsentEntries:s}=Tb(this._heartbeatsCache.heartbeats),t=e5(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function Ja(){return new Date().toISOString().substring(0,10)}function Tb(e,c=wb){const a=[];let s=e.slice();for(const t of e){const r=a.find(n=>n.agent===t.agent);if(r){if(r.dates.push(t.date),cs(a)>c){r.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),cs(a)>c){a.pop();break}s=s.slice(1)}return{heartbeatsToSend:a,unsentEntries:s}}class Eb{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $r()?Ur().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...c.heartbeats]})}else return}}function cs(e){return e5(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(e){V3(new X2("platform-logger",c=>new KL(c),"PRIVATE")),V3(new X2("heartbeat",c=>new Ab(c),"PRIVATE")),$2(w7,Qa,e),$2(w7,Qa,"esm2017"),$2("fire-js","")}Pb("");var _b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,U9=U9||{},Z=_b||self;function t5(){}function B5(e){var c=typeof e;return c=c!="object"?c:e?Array.isArray(e)?"array":c:"null",c=="array"||c=="object"&&typeof e.length=="number"}function W6(e){var c=typeof e;return c=="object"&&e!=null||c=="function"}function Ib(e){return Object.prototype.hasOwnProperty.call(e,W0)&&e[W0]||(e[W0]=++Db)}var W0="closure_uid_"+(1e9*Math.random()>>>0),Db=0;function Rb(e,c,a){return e.call.apply(e.bind,arguments)}function Fb(e,c,a){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,s),e.apply(c,t)}}return function(){return e.apply(c,arguments)}}function a2(e,c,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?a2=Rb:a2=Fb,a2.apply(null,arguments)}function V8(e,c){var a=Array.prototype.slice.call(arguments,1);return function(){var s=a.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function X1(e,c){function a(){}a.prototype=c.prototype,e.X=c.prototype,e.prototype=new a,e.prototype.constructor=e,e.Wb=function(s,t,r){for(var n=Array(arguments.length-2),i=2;i<arguments.length;i++)n[i-2]=arguments[i];return c.prototype[t].apply(s,n)}}function w3(){this.s=this.s,this.o=this.o}var Bb=0;w3.prototype.s=!1;w3.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Bb!=0)&&Ib(this)};w3.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jr=Array.prototype.indexOf?function(e,c){return Array.prototype.indexOf.call(e,c,void 0)}:function(e,c){if(typeof e=="string")return typeof c!="string"||c.length!=1?-1:e.indexOf(c,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===c)return a;return-1};function G9(e){const c=e.length;if(0<c){const a=Array(c);for(let s=0;s<c;s++)a[s]=e[s];return a}return[]}function es(e,c){for(let a=1;a<arguments.length;a++){const s=arguments[a];if(B5(s)){const t=e.length||0,r=s.length||0;e.length=t+r;for(let n=0;n<r;n++)e[t+n]=s[n]}else e.push(s)}}function s2(e,c){this.type=e,this.g=this.target=c,this.defaultPrevented=!1}s2.prototype.h=function(){this.defaultPrevented=!0};var Ob=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var e=!1,c=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Z.addEventListener("test",t5,c),Z.removeEventListener("test",t5,c)}catch{}return e}();function r5(e){return/^[\s\xa0]*$/.test(e)}var as=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function K0(e,c){return e<c?-1:e>c?1:0}function O5(){var e=Z.navigator;return e&&(e=e.userAgent)?e:""}function R2(e){return O5().indexOf(e)!=-1}function j9(e){return j9[" "](e),e}j9[" "]=t5;function qb(e){var c=Gb;return Object.prototype.hasOwnProperty.call(c,9)?c[9]:c[9]=e(9)}var $b=R2("Opera"),T4=R2("Trident")||R2("MSIE"),cn=R2("Edge"),T7=cn||T4,en=R2("Gecko")&&!(O5().toLowerCase().indexOf("webkit")!=-1&&!R2("Edge"))&&!(R2("Trident")||R2("MSIE"))&&!R2("Edge"),Ub=O5().toLowerCase().indexOf("webkit")!=-1&&!R2("Edge");function an(){var e=Z.document;return e?e.documentMode:void 0}var n5;c:{var Z0="",Y0=function(){var e=O5();if(en)return/rv:([^\);]+)(\)|;)/.exec(e);if(cn)return/Edge\/([\d\.]+)/.exec(e);if(T4)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ub)return/WebKit\/(\S+)/.exec(e);if($b)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Y0&&(Z0=Y0?Y0[1]:""),T4){var Q0=an();if(Q0!=null&&Q0>parseFloat(Z0)){n5=String(Q0);break c}}n5=Z0}var Gb={};function jb(){return qb(function(){let e=0;const c=as(String(n5)).split("."),a=as("9").split("."),s=Math.max(c.length,a.length);for(let n=0;e==0&&n<s;n++){var t=c[n]||"",r=a[n]||"";do{if(t=/(\d*)(\D*)(.*)/.exec(t)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],t[0].length==0&&r[0].length==0)break;e=K0(t[1].length==0?0:parseInt(t[1],10),r[1].length==0?0:parseInt(r[1],10))||K0(t[2].length==0,r[2].length==0)||K0(t[2],r[2]),t=t[3],r=r[3]}while(e==0)}return 0<=e})}var E7;if(Z.document&&T4){var ss=an();E7=ss||parseInt(n5,10)||void 0}else E7=void 0;var Wb=E7;function N6(e,c){if(s2.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=c,c=e.relatedTarget){if(en){c:{try{j9(c.nodeName);var t=!0;break c}catch{}t=!1}t||(c=null)}}else a=="mouseover"?c=e.fromElement:a=="mouseout"&&(c=e.toElement);this.relatedTarget=c,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Kb[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&N6.X.h.call(this)}}X1(N6,s2);var Kb={2:"touch",3:"pen",4:"mouse"};N6.prototype.h=function(){N6.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var K6="closure_listenable_"+(1e6*Math.random()|0),Zb=0;function Yb(e,c,a,s,t){this.listener=e,this.proxy=null,this.src=c,this.type=a,this.capture=!!s,this.ha=t,this.key=++Zb,this.ba=this.ea=!1}function q5(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function W9(e,c,a){for(const s in e)c.call(a,e[s],s,e)}function sn(e){const c={};for(const a in e)c[a]=e[a];return c}const ts="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tn(e,c){let a,s;for(let t=1;t<arguments.length;t++){s=arguments[t];for(a in s)e[a]=s[a];for(let r=0;r<ts.length;r++)a=ts[r],Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}}function $5(e){this.src=e,this.g={},this.h=0}$5.prototype.add=function(e,c,a,s,t){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var n=_7(e,c,s,t);return-1<n?(c=e[n],a||(c.ea=!1)):(c=new Yb(c,this.src,r,!!s,t),c.ea=a,e.push(c)),c};function P7(e,c){var a=c.type;if(a in e.g){var s=e.g[a],t=Jr(s,c),r;(r=0<=t)&&Array.prototype.splice.call(s,t,1),r&&(q5(c),e.g[a].length==0&&(delete e.g[a],e.h--))}}function _7(e,c,a,s){for(var t=0;t<e.length;++t){var r=e[t];if(!r.ba&&r.listener==c&&r.capture==!!a&&r.ha==s)return t}return-1}var K9="closure_lm_"+(1e6*Math.random()|0),X0={};function rn(e,c,a,s,t){if(s&&s.once)return on(e,c,a,s,t);if(Array.isArray(c)){for(var r=0;r<c.length;r++)rn(e,c[r],a,s,t);return null}return a=Q9(a),e&&e[K6]?e.N(c,a,W6(s)?!!s.capture:!!s,t):nn(e,c,a,!1,s,t)}function nn(e,c,a,s,t,r){if(!c)throw Error("Invalid event type");var n=W6(t)?!!t.capture:!!t,i=Y9(e);if(i||(e[K9]=i=new $5(e)),a=i.add(c,a,s,n,r),a.proxy)return a;if(s=Qb(),a.proxy=s,s.src=e,s.listener=a,e.addEventListener)Ob||(t=n),t===void 0&&(t=!1),e.addEventListener(c.toString(),s,t);else if(e.attachEvent)e.attachEvent(fn(c.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Qb(){function e(a){return c.call(e.src,e.listener,a)}const c=Xb;return e}function on(e,c,a,s,t){if(Array.isArray(c)){for(var r=0;r<c.length;r++)on(e,c[r],a,s,t);return null}return a=Q9(a),e&&e[K6]?e.O(c,a,W6(s)?!!s.capture:!!s,t):nn(e,c,a,!0,s,t)}function ln(e,c,a,s,t){if(Array.isArray(c))for(var r=0;r<c.length;r++)ln(e,c[r],a,s,t);else s=W6(s)?!!s.capture:!!s,a=Q9(a),e&&e[K6]?(e=e.i,c=String(c).toString(),c in e.g&&(r=e.g[c],a=_7(r,a,s,t),-1<a&&(q5(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete e.g[c],e.h--)))):e&&(e=Y9(e))&&(c=e.g[c.toString()],e=-1,c&&(e=_7(c,a,s,t)),(a=-1<e?c[e]:null)&&Z9(a))}function Z9(e){if(typeof e!="number"&&e&&!e.ba){var c=e.src;if(c&&c[K6])P7(c.i,e);else{var a=e.type,s=e.proxy;c.removeEventListener?c.removeEventListener(a,s,e.capture):c.detachEvent?c.detachEvent(fn(a),s):c.addListener&&c.removeListener&&c.removeListener(s),(a=Y9(c))?(P7(a,e),a.h==0&&(a.src=null,c[K9]=null)):q5(e)}}}function fn(e){return e in X0?X0[e]:X0[e]="on"+e}function Xb(e,c){if(e.ba)e=!0;else{c=new N6(c,this);var a=e.listener,s=e.ha||e.src;e.ea&&Z9(e),e=a.call(s,c)}return e}function Y9(e){return e=e[K9],e instanceof $5?e:null}var J0="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q9(e){return typeof e=="function"?e:(e[J0]||(e[J0]=function(c){return e.handleEvent(c)}),e[J0])}function G1(){w3.call(this),this.i=new $5(this),this.P=this,this.I=null}X1(G1,w3);G1.prototype[K6]=!0;G1.prototype.removeEventListener=function(e,c,a,s){ln(this,e,c,a,s)};function Q1(e,c){var a,s=e.I;if(s)for(a=[];s;s=s.I)a.push(s);if(e=e.P,s=c.type||c,typeof c=="string")c=new s2(c,e);else if(c instanceof s2)c.target=c.target||e;else{var t=c;c=new s2(s,e),tn(c,t)}if(t=!0,a)for(var r=a.length-1;0<=r;r--){var n=c.g=a[r];t=g8(n,s,!0,c)&&t}if(n=c.g=e,t=g8(n,s,!0,c)&&t,t=g8(n,s,!1,c)&&t,a)for(r=0;r<a.length;r++)n=c.g=a[r],t=g8(n,s,!1,c)&&t}G1.prototype.M=function(){if(G1.X.M.call(this),this.i){var e=this.i,c;for(c in e.g){for(var a=e.g[c],s=0;s<a.length;s++)q5(a[s]);delete e.g[c],e.h--}}this.I=null};G1.prototype.N=function(e,c,a,s){return this.i.add(String(e),c,!1,a,s)};G1.prototype.O=function(e,c,a,s){return this.i.add(String(e),c,!0,a,s)};function g8(e,c,a,s){if(c=e.i.g[String(c)],!c)return!0;c=c.concat();for(var t=!0,r=0;r<c.length;++r){var n=c[r];if(n&&!n.ba&&n.capture==a){var i=n.listener,o=n.ha||n.src;n.ea&&P7(e.i,n),t=i.call(o,s)!==!1&&t}}return t&&!s.defaultPrevented}var X9=Z.JSON.stringify;function Jb(){var e=mn;let c=null;return e.g&&(c=e.g,e.g=e.g.next,e.g||(e.h=null),c.next=null),c}class cx{constructor(){this.h=this.g=null}add(c,a){const s=hn.get();s.set(c,a),this.h?this.h.next=s:this.g=s,this.h=s}}var hn=new class{constructor(e,c){this.i=e,this.j=c,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ex,e=>e.reset());class ex{constructor(){this.next=this.g=this.h=null}set(c,a){this.h=c,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function ax(e){Z.setTimeout(()=>{throw e},0)}function un(e,c){I7||sx(),D7||(I7(),D7=!0),mn.add(e,c)}var I7;function sx(){var e=Z.Promise.resolve(void 0);I7=function(){e.then(tx)}}var D7=!1,mn=new cx;function tx(){for(var e;e=Jb();){try{e.h.call(e.g)}catch(a){ax(a)}var c=hn;c.j(e),100>c.h&&(c.h++,e.next=c.g,c.g=e)}D7=!1}function U5(e,c){G1.call(this),this.h=e||1,this.g=c||Z,this.j=a2(this.lb,this),this.l=Date.now()}X1(U5,G1);F=U5.prototype;F.ca=!1;F.R=null;F.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Q1(this,"tick"),this.ca&&(J9(this),this.start()))}};F.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function J9(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}F.M=function(){U5.X.M.call(this),J9(this),delete this.g};function cc(e,c,a){if(typeof e=="function")a&&(e=a2(e,a));else if(e&&typeof e.handleEvent=="function")e=a2(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:Z.setTimeout(e,c||0)}function vn(e){e.g=cc(()=>{e.g=null,e.i&&(e.i=!1,vn(e))},e.j);const c=e.h;e.h=null,e.m.apply(null,c)}class rx extends w3{constructor(c,a){super(),this.m=c,this.j=a,this.h=null,this.i=!1,this.g=null}l(c){this.h=arguments,this.g?this.i=!0:vn(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function w6(e){w3.call(this),this.h=e,this.g={}}X1(w6,w3);var rs=[];function Cn(e,c,a,s){Array.isArray(a)||(a&&(rs[0]=a.toString()),a=rs);for(var t=0;t<a.length;t++){var r=rn(c,a[t],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function pn(e){W9(e.g,function(c,a){this.g.hasOwnProperty(a)&&Z9(c)},e),e.g={}}w6.prototype.M=function(){w6.X.M.call(this),pn(this)};w6.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function G5(){this.g=!0}G5.prototype.Aa=function(){this.g=!1};function nx(e,c,a,s,t,r){e.info(function(){if(e.g)if(r)for(var n="",i=r.split("&"),o=0;o<i.length;o++){var l=i[o].split("=");if(1<l.length){var f=l[0];l=l[1];var h=f.split("_");n=2<=h.length&&h[1]=="type"?n+(f+"="+l+"&"):n+(f+"=redacted&")}}else n=null;else n=r;return"XMLHTTP REQ ("+s+") [attempt "+t+"]: "+c+`
`+a+`
`+n})}function ix(e,c,a,s,t,r,n){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+t+"]: "+c+`
`+a+`
`+r+" "+n})}function m4(e,c,a,s){e.info(function(){return"XMLHTTP TEXT ("+c+"): "+lx(e,a)+(s?" "+s:"")})}function ox(e,c){e.info(function(){return"TIMEOUT: "+c})}G5.prototype.info=function(){};function lx(e,c){if(!e.g)return c;if(!c)return null;try{var a=JSON.parse(c);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var s=a[e];if(!(2>s.length)){var t=s[1];if(Array.isArray(t)&&!(1>t.length)){var r=t[0];if(r!="noop"&&r!="stop"&&r!="close")for(var n=1;n<t.length;n++)t[n]=""}}}}return X9(a)}catch{return c}}var r4={},ns=null;function j5(){return ns=ns||new G1}r4.Pa="serverreachability";function dn(e){s2.call(this,r4.Pa,e)}X1(dn,s2);function k6(e){const c=j5();Q1(c,new dn(c))}r4.STAT_EVENT="statevent";function zn(e,c){s2.call(this,r4.STAT_EVENT,e),this.stat=c}X1(zn,s2);function n2(e){const c=j5();Q1(c,new zn(c,e))}r4.Qa="timingevent";function Hn(e,c){s2.call(this,r4.Qa,e),this.size=c}X1(Hn,s2);function Z6(e,c){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){e()},c)}var W5={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Mn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ec(){}ec.prototype.h=null;function is(e){return e.h||(e.h=e.i())}function Vn(){}var Y6={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ac(){s2.call(this,"d")}X1(ac,s2);function sc(){s2.call(this,"c")}X1(sc,s2);var R7;function K5(){}X1(K5,ec);K5.prototype.g=function(){return new XMLHttpRequest};K5.prototype.i=function(){return{}};R7=new K5;function Q6(e,c,a,s){this.l=e,this.j=c,this.m=a,this.U=s||1,this.S=new w6(this),this.O=fx,e=T7?125:void 0,this.T=new U5(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new gn}function gn(){this.i=null,this.g="",this.h=!1}var fx=45e3,F7={},i5={};F=Q6.prototype;F.setTimeout=function(e){this.O=e};function B7(e,c,a){e.K=1,e.v=Y5(J2(c)),e.s=a,e.P=!0,Ln(e,null)}function Ln(e,c){e.F=Date.now(),X6(e),e.A=J2(e.v);var a=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),An(a.i,"t",s),e.C=0,a=e.l.H,e.h=new gn,e.g=Xn(e.l,a?c:null,!e.s),0<e.N&&(e.L=new rx(a2(e.La,e,e.g),e.N)),Cn(e.S,e.g,"readystatechange",e.ib),c=e.H?sn(e.H):{},e.s?(e.u||(e.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,c)):(e.u="GET",e.g.da(e.A,e.u,null,c)),k6(),nx(e.j,e.u,e.A,e.m,e.U,e.s)}F.ib=function(e){e=e.target;const c=this.L;c&&Y2(e)==3?c.l():this.La(e)};F.La=function(e){try{if(e==this.g)c:{const f=Y2(this.g);var c=this.g.Ea();const h=this.g.aa();if(!(3>f)&&(f!=3||T7||this.g&&(this.h.h||this.g.fa()||hs(this.g)))){this.I||f!=4||c==7||(c==8||0>=h?k6(3):k6(2)),Z5(this);var a=this.g.aa();this.Y=a;e:if(bn(this)){var s=hs(this.g);e="";var t=s.length,r=Y2(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){F3(this),h6(this);var n="";break e}this.h.i=new Z.TextDecoder}for(c=0;c<t;c++)this.h.h=!0,e+=this.h.i.decode(s[c],{stream:r&&c==t-1});s.splice(0,t),this.h.g+=e,this.C=0,n=this.h.g}else n=this.g.fa();if(this.i=a==200,ix(this.j,this.u,this.A,this.m,this.U,f,a),this.i){if(this.Z&&!this.J){e:{if(this.g){var i,o=this.g;if((i=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!r5(i)){var l=i;break e}}l=null}if(a=l)m4(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,O7(this,a);else{this.i=!1,this.o=3,n2(12),F3(this),h6(this);break c}}this.P?(xn(this,f,n),T7&&this.i&&f==3&&(Cn(this.S,this.T,"tick",this.hb),this.T.start())):(m4(this.j,this.m,n,null),O7(this,n)),f==4&&F3(this),this.i&&!this.I&&(f==4?Kn(this.l,this):(this.i=!1,X6(this)))}else a==400&&0<n.indexOf("Unknown SID")?(this.o=3,n2(12)):(this.o=0,n2(13)),F3(this),h6(this)}}}catch{}finally{}};function bn(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function xn(e,c,a){let s=!0,t;for(;!e.I&&e.C<a.length;)if(t=hx(e,a),t==i5){c==4&&(e.o=4,n2(14),s=!1),m4(e.j,e.m,null,"[Incomplete Response]");break}else if(t==F7){e.o=4,n2(15),m4(e.j,e.m,a,"[Invalid Chunk]"),s=!1;break}else m4(e.j,e.m,t,null),O7(e,t);bn(e)&&t!=i5&&t!=F7&&(e.h.g="",e.C=0),c!=4||a.length!=0||e.h.h||(e.o=1,n2(16),s=!1),e.i=e.i&&s,s?0<a.length&&!e.$&&(e.$=!0,c=e.l,c.g==e&&c.$&&!c.K&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),fc(c),c.K=!0,n2(11))):(m4(e.j,e.m,a,"[Invalid Chunked Response]"),F3(e),h6(e))}F.hb=function(){if(this.g){var e=Y2(this.g),c=this.g.fa();this.C<c.length&&(Z5(this),xn(this,e,c),this.i&&e!=4&&X6(this))}};function hx(e,c){var a=e.C,s=c.indexOf(`
`,a);return s==-1?i5:(a=Number(c.substring(a,s)),isNaN(a)?F7:(s+=1,s+a>c.length?i5:(c=c.substr(s,a),e.C=s+a,c)))}F.cancel=function(){this.I=!0,F3(this)};function X6(e){e.V=Date.now()+e.O,yn(e,e.O)}function yn(e,c){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Z6(a2(e.gb,e),c)}function Z5(e){e.B&&(Z.clearTimeout(e.B),e.B=null)}F.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(ox(this.j,this.A),this.K!=2&&(k6(),n2(17)),F3(this),this.o=2,h6(this)):yn(this,this.V-e)};function h6(e){e.l.G==0||e.I||Kn(e.l,e)}function F3(e){Z5(e);var c=e.L;c&&typeof c.na=="function"&&c.na(),e.L=null,J9(e.T),pn(e.S),e.g&&(c=e.g,e.g=null,c.abort(),c.na())}function O7(e,c){try{var a=e.l;if(a.G!=0&&(a.g==e||q7(a.h,e))){if(!e.J&&q7(a.h,e)&&a.G==3){try{var s=a.Fa.g.parse(c)}catch{s=null}if(Array.isArray(s)&&s.length==3){var t=s;if(t[0]==0){c:if(!a.u){if(a.g)if(a.g.F+3e3<e.F)f5(a),J5(a);else break c;lc(a),n2(18)}}else a.Ba=t[1],0<a.Ba-a.T&&37500>t[2]&&a.L&&a.A==0&&!a.v&&(a.v=Z6(a2(a.cb,a),6e3));if(1>=Pn(a.h)&&a.ja){try{a.ja()}catch{}a.ja=void 0}}else B3(a,11)}else if((e.J||a.g==e)&&f5(a),!r5(c))for(t=a.Fa.g.parse(c),c=0;c<t.length;c++){let l=t[c];if(a.T=l[0],l=l[1],a.G==2)if(l[0]=="c"){a.I=l[1],a.ka=l[2];const f=l[3];f!=null&&(a.ma=f,a.j.info("VER="+a.ma));const h=l[4];h!=null&&(a.Ca=h,a.j.info("SVER="+a.Ca));const u=l[5];u!=null&&typeof u=="number"&&0<u&&(s=1.5*u,a.J=s,a.j.info("backChannelRequestTimeoutMs_="+s)),s=a;const C=e.g;if(C){const z=C.g?C.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(z){var r=s.h;r.g||z.indexOf("spdy")==-1&&z.indexOf("quic")==-1&&z.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(tc(r,r.h),r.h=null))}if(s.D){const L=C.g?C.g.getResponseHeader("X-HTTP-Session-Id"):null;L&&(s.za=L,b1(s.F,s.D,L))}}a.G=3,a.l&&a.l.xa(),a.$&&(a.P=Date.now()-e.F,a.j.info("Handshake RTT: "+a.P+"ms")),s=a;var n=e;if(s.sa=Qn(s,s.H?s.ka:null,s.V),n.J){_n(s.h,n);var i=n,o=s.J;o&&i.setTimeout(o),i.B&&(Z5(i),X6(i)),s.g=n}else jn(s);0<a.i.length&&c0(a)}else l[0]!="stop"&&l[0]!="close"||B3(a,7);else a.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?B3(a,7):oc(a):l[0]!="noop"&&a.l&&a.l.wa(l),a.A=0)}}k6(4)}catch{}}function ux(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(B5(e)){for(var c=[],a=e.length,s=0;s<a;s++)c.push(e[s]);return c}c=[],a=0;for(s in e)c[a++]=e[s];return c}function mx(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(B5(e)||typeof e=="string"){var c=[];e=e.length;for(var a=0;a<e;a++)c.push(a);return c}c=[],a=0;for(const s in e)c[a++]=s;return c}}}function Sn(e,c){if(e.forEach&&typeof e.forEach=="function")e.forEach(c,void 0);else if(B5(e)||typeof e=="string")Array.prototype.forEach.call(e,c,void 0);else for(var a=mx(e),s=ux(e),t=s.length,r=0;r<t;r++)c.call(void 0,s[r],a&&a[r],e)}var Nn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vx(e,c){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var s=e[a].indexOf("="),t=null;if(0<=s){var r=e[a].substring(0,s);t=e[a].substring(s+1)}else r=e[a];c(r,t?decodeURIComponent(t.replace(/\+/g," ")):"")}}}function W3(e,c){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof W3){this.h=c!==void 0?c:e.h,o5(this,e.j),this.s=e.s,this.g=e.g,l5(this,e.m),this.l=e.l,c=e.i;var a=new A6;a.i=c.i,c.g&&(a.g=new Map(c.g),a.h=c.h),os(this,a),this.o=e.o}else e&&(a=String(e).match(Nn))?(this.h=!!c,o5(this,a[1]||"",!0),this.s=e6(a[2]||""),this.g=e6(a[3]||"",!0),l5(this,a[4]),this.l=e6(a[5]||"",!0),os(this,a[6]||"",!0),this.o=e6(a[7]||"")):(this.h=!!c,this.i=new A6(null,this.h))}W3.prototype.toString=function(){var e=[],c=this.j;c&&e.push(a6(c,ls,!0),":");var a=this.g;return(a||c=="file")&&(e.push("//"),(c=this.s)&&e.push(a6(c,ls,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(a6(a,a.charAt(0)=="/"?dx:px,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",a6(a,Hx)),e.join("")};function J2(e){return new W3(e)}function o5(e,c,a){e.j=a?e6(c,!0):c,e.j&&(e.j=e.j.replace(/:$/,""))}function l5(e,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);e.m=c}else e.m=null}function os(e,c,a){c instanceof A6?(e.i=c,Mx(e.i,e.h)):(a||(c=a6(c,zx)),e.i=new A6(c,e.h))}function b1(e,c,a){e.i.set(c,a)}function Y5(e){return b1(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function e6(e,c){return e?c?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function a6(e,c,a){return typeof e=="string"?(e=encodeURI(e).replace(c,Cx),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cx(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ls=/[#\/\?@]/g,px=/[#\?:]/g,dx=/[#\?]/g,zx=/[#\?@]/g,Hx=/#/g;function A6(e,c){this.h=this.g=null,this.i=e||null,this.j=!!c}function k3(e){e.g||(e.g=new Map,e.h=0,e.i&&vx(e.i,function(c,a){e.add(decodeURIComponent(c.replace(/\+/g," ")),a)}))}F=A6.prototype;F.add=function(e,c){k3(this),this.i=null,e=$4(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(c),this.h+=1,this};function wn(e,c){k3(e),c=$4(e,c),e.g.has(c)&&(e.i=null,e.h-=e.g.get(c).length,e.g.delete(c))}function kn(e,c){return k3(e),c=$4(e,c),e.g.has(c)}F.forEach=function(e,c){k3(this),this.g.forEach(function(a,s){a.forEach(function(t){e.call(c,t,s,this)},this)},this)};F.oa=function(){k3(this);const e=Array.from(this.g.values()),c=Array.from(this.g.keys()),a=[];for(let s=0;s<c.length;s++){const t=e[s];for(let r=0;r<t.length;r++)a.push(c[s])}return a};F.W=function(e){k3(this);let c=[];if(typeof e=="string")kn(this,e)&&(c=c.concat(this.g.get($4(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)c=c.concat(e[a])}return c};F.set=function(e,c){return k3(this),this.i=null,e=$4(this,e),kn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[c]),this.h+=1,this};F.get=function(e,c){return e?(e=this.W(e),0<e.length?String(e[0]):c):c};function An(e,c,a){wn(e,c),0<a.length&&(e.i=null,e.g.set($4(e,c),G9(a)),e.h+=a.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],c=Array.from(this.g.keys());for(var a=0;a<c.length;a++){var s=c[a];const r=encodeURIComponent(String(s)),n=this.W(s);for(s=0;s<n.length;s++){var t=r;n[s]!==""&&(t+="="+encodeURIComponent(String(n[s]))),e.push(t)}}return this.i=e.join("&")};function $4(e,c){return c=String(c),e.j&&(c=c.toLowerCase()),c}function Mx(e,c){c&&!e.j&&(k3(e),e.i=null,e.g.forEach(function(a,s){var t=s.toLowerCase();s!=t&&(wn(this,s),An(this,t,a))},e)),e.j=c}var Vx=class{constructor(e,c){this.h=e,this.g=c}};function Tn(e){this.l=e||gx,Z.PerformanceNavigationTiming?(e=Z.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gx=10;function En(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Pn(e){return e.h?1:e.g?e.g.size:0}function q7(e,c){return e.h?e.h==c:e.g?e.g.has(c):!1}function tc(e,c){e.g?e.g.add(c):e.h=c}function _n(e,c){e.h&&e.h==c?e.h=null:e.g&&e.g.has(c)&&e.g.delete(c)}Tn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function In(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let c=e.i;for(const a of e.g.values())c=c.concat(a.D);return c}return G9(e.i)}function rc(){}rc.prototype.stringify=function(e){return Z.JSON.stringify(e,void 0)};rc.prototype.parse=function(e){return Z.JSON.parse(e,void 0)};function Lx(){this.g=new rc}function bx(e,c,a){const s=a||"";try{Sn(e,function(t,r){let n=t;W6(t)&&(n=X9(t)),c.push(s+r+"="+encodeURIComponent(n))})}catch(t){throw c.push(s+"type="+encodeURIComponent("_badmap")),t}}function xx(e,c){const a=new G5;if(Z.Image){const s=new Image;s.onload=V8(L8,a,s,"TestLoadImage: loaded",!0,c),s.onerror=V8(L8,a,s,"TestLoadImage: error",!1,c),s.onabort=V8(L8,a,s,"TestLoadImage: abort",!1,c),s.ontimeout=V8(L8,a,s,"TestLoadImage: timeout",!1,c),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else c(!1)}function L8(e,c,a,s,t){try{c.onload=null,c.onerror=null,c.onabort=null,c.ontimeout=null,t(s)}catch{}}function J6(e){this.l=e.ac||null,this.j=e.jb||!1}X1(J6,ec);J6.prototype.g=function(){return new Q5(this.l,this.j)};J6.prototype.i=function(e){return function(){return e}}({});function Q5(e,c){G1.call(this),this.D=e,this.u=c,this.m=void 0,this.readyState=nc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X1(Q5,G1);var nc=0;F=Q5.prototype;F.open=function(e,c){if(this.readyState!=nc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=c,this.readyState=1,T6(this)};F.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(c.body=e),(this.D||Z).fetch(new Request(this.B,c)).then(this.Wa.bind(this),this.ga.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,c8(this)),this.readyState=nc};F.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,T6(this)),this.g&&(this.readyState=3,T6(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Dn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}F.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var c=e.value?e.value:new Uint8Array(0);(c=this.A.decode(c,{stream:!e.done}))&&(this.response=this.responseText+=c)}e.done?c8(this):T6(this),this.readyState==3&&Dn(this)}};F.Va=function(e){this.g&&(this.response=this.responseText=e,c8(this))};F.Ua=function(e){this.g&&(this.response=e,c8(this))};F.ga=function(){this.g&&c8(this)};function c8(e){e.readyState=4,e.l=null,e.j=null,e.A=null,T6(e)}F.setRequestHeader=function(e,c){this.v.append(e,c)};F.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],c=this.h.entries();for(var a=c.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=c.next();return e.join(`\r
`)};function T6(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Q5.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yx=Z.JSON.parse;function k1(e){G1.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rn,this.K=this.L=!1}X1(k1,G1);var Rn="",Sx=/^https?$/i,Nx=["POST","PUT"];F=k1.prototype;F.Ka=function(e){this.L=e};F.da=function(e,c,a,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);c=c?c.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():R7.g(),this.C=this.u?is(this.u):is(R7),this.g.onreadystatechange=a2(this.Ha,this);try{this.F=!0,this.g.open(c,String(e),!0),this.F=!1}catch(r){fs(this,r);return}if(e=a||"",a=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var t in s)a.set(t,s[t]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())a.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(a.keys()).find(r=>r.toLowerCase()=="content-type"),t=Z.FormData&&e instanceof Z.FormData,!(0<=Jr(Nx,c))||s||t||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,n]of a)this.g.setRequestHeader(r,n);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{On(this),0<this.B&&((this.K=wx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=a2(this.qa,this)):this.A=cc(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){fs(this,r)}};function wx(e){return T4&&jb()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}F.qa=function(){typeof U9<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q1(this,"timeout"),this.abort(8))};function fs(e,c){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=c,e.m=5,Fn(e),X5(e)}function Fn(e){e.D||(e.D=!0,Q1(e,"complete"),Q1(e,"error"))}F.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q1(this,"complete"),Q1(this,"abort"),X5(this))};F.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),X5(this,!0)),k1.X.M.call(this)};F.Ha=function(){this.s||(this.F||this.v||this.l?Bn(this):this.fb())};F.fb=function(){Bn(this)};function Bn(e){if(e.h&&typeof U9<"u"&&(!e.C[1]||Y2(e)!=4||e.aa()!=2)){if(e.v&&Y2(e)==4)cc(e.Ha,0,e);else if(Q1(e,"readystatechange"),Y2(e)==4){e.h=!1;try{const i=e.aa();c:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break c;default:c=!1}var a;if(!(a=c)){var s;if(s=i===0){var t=String(e.H).match(Nn)[1]||null;if(!t&&Z.self&&Z.self.location){var r=Z.self.location.protocol;t=r.substr(0,r.length-1)}s=!Sx.test(t?t.toLowerCase():"")}a=s}if(a)Q1(e,"complete"),Q1(e,"success");else{e.m=6;try{var n=2<Y2(e)?e.g.statusText:""}catch{n=""}e.j=n+" ["+e.aa()+"]",Fn(e)}}finally{X5(e)}}}}function X5(e,c){if(e.g){On(e);const a=e.g,s=e.C[0]?t5:null;e.g=null,e.C=null,c||Q1(e,"ready");try{a.onreadystatechange=s}catch{}}}function On(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Z.clearTimeout(e.A),e.A=null)}function Y2(e){return e.g?e.g.readyState:0}F.aa=function(){try{return 2<Y2(this)?this.g.status:-1}catch{return-1}};F.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Sa=function(e){if(this.g){var c=this.g.responseText;return e&&c.indexOf(e)==0&&(c=c.substring(e.length)),yx(c)}};function hs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}F.Ea=function(){return this.m};F.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qn(e){let c="";return W9(e,function(a,s){c+=s,c+=":",c+=a,c+=`\r
`}),c}function ic(e,c,a){c:{for(s in a){var s=!1;break c}s=!0}s||(a=qn(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):b1(e,c,a))}function J4(e,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||c}function $n(e){this.Ca=0,this.i=[],this.j=new G5,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=J4("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=J4("baseRetryDelayMs",5e3,e),this.bb=J4("retryDelaySeedMs",1e4,e),this.$a=J4("forwardChannelMaxRetries",2,e),this.ta=J4("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Tn(e&&e.concurrentRequestLimit),this.Fa=new Lx,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}F=$n.prototype;F.ma=8;F.G=1;function oc(e){if(Un(e),e.G==3){var c=e.U++,a=J2(e.F);b1(a,"SID",e.I),b1(a,"RID",c),b1(a,"TYPE","terminate"),e8(e,a),c=new Q6(e,e.j,c,void 0),c.K=2,c.v=Y5(J2(a)),a=!1,Z.navigator&&Z.navigator.sendBeacon&&(a=Z.navigator.sendBeacon(c.v.toString(),"")),!a&&Z.Image&&(new Image().src=c.v,a=!0),a||(c.g=Xn(c.l,null),c.g.da(c.v)),c.F=Date.now(),X6(c)}Yn(e)}function J5(e){e.g&&(fc(e),e.g.cancel(),e.g=null)}function Un(e){J5(e),e.u&&(Z.clearTimeout(e.u),e.u=null),f5(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&Z.clearTimeout(e.m),e.m=null)}function c0(e){En(e.h)||e.m||(e.m=!0,un(e.Ja,e),e.C=0)}function kx(e,c){return Pn(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=c.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Z6(a2(e.Ja,e,c),Zn(e,e.C)),e.C++,!0)}F.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const t=new Q6(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=sn(r),tn(r,this.S)):r=this.S),this.o!==null||this.N||(t.H=r,r=null),this.O)c:{for(var c=0,a=0;a<this.i.length;a++){e:{var s=this.i[a];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(c+=s,4096<c){c=a;break c}if(c===4096||a===this.i.length-1){c=a+1;break c}}c=1e3}else c=1e3;c=Gn(this,t,c),a=J2(this.F),b1(a,"RID",e),b1(a,"CVER",22),this.D&&b1(a,"X-HTTP-Session-Id",this.D),e8(this,a),r&&(this.N?c="headers="+encodeURIComponent(String(qn(r)))+"&"+c:this.o&&ic(a,this.o,r)),tc(this.h,t),this.Ya&&b1(a,"TYPE","init"),this.O?(b1(a,"$req",c),b1(a,"SID","null"),t.Z=!0,B7(t,a,null)):B7(t,a,c),this.G=2}}else this.G==3&&(e?us(this,e):this.i.length==0||En(this.h)||us(this))};function us(e,c){var a;c?a=c.m:a=e.U++;const s=J2(e.F);b1(s,"SID",e.I),b1(s,"RID",a),b1(s,"AID",e.T),e8(e,s),e.o&&e.s&&ic(s,e.o,e.s),a=new Q6(e,e.j,a,e.C+1),e.o===null&&(a.H=e.s),c&&(e.i=c.D.concat(e.i)),c=Gn(e,a,1e3),a.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),tc(e.h,a),B7(a,s,c)}function e8(e,c){e.ia&&W9(e.ia,function(a,s){b1(c,s,a)}),e.l&&Sn({},function(a,s){b1(c,s,a)})}function Gn(e,c,a){a=Math.min(e.i.length,a);var s=e.l?a2(e.l.Ra,e.l,e):null;c:{var t=e.i;let r=-1;for(;;){const n=["count="+a];r==-1?0<a?(r=t[0].h,n.push("ofs="+r)):r=0:n.push("ofs="+r);let i=!0;for(let o=0;o<a;o++){let l=t[o].h;const f=t[o].g;if(l-=r,0>l)r=Math.max(0,t[o].h-100),i=!1;else try{bx(f,n,"req"+l+"_")}catch{s&&s(f)}}if(i){s=n.join("&");break c}}}return e=e.i.splice(0,a),c.D=e,s}function jn(e){e.g||e.u||(e.Z=1,un(e.Ia,e),e.A=0)}function lc(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Z6(a2(e.Ia,e),Zn(e,e.A)),e.A++,!0)}F.Ia=function(){if(this.u=null,Wn(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Z6(a2(this.eb,this),e)}};F.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,n2(10),J5(this),Wn(this))};function fc(e){e.B!=null&&(Z.clearTimeout(e.B),e.B=null)}function Wn(e){e.g=new Q6(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var c=J2(e.sa);b1(c,"RID","rpc"),b1(c,"SID",e.I),b1(c,"CI",e.L?"0":"1"),b1(c,"AID",e.T),b1(c,"TYPE","xmlhttp"),e8(e,c),e.o&&e.s&&ic(c,e.o,e.s),e.J&&e.g.setTimeout(e.J);var a=e.g;e=e.ka,a.K=1,a.v=Y5(J2(c)),a.s=null,a.P=!0,Ln(a,e)}F.cb=function(){this.v!=null&&(this.v=null,J5(this),lc(this),n2(19))};function f5(e){e.v!=null&&(Z.clearTimeout(e.v),e.v=null)}function Kn(e,c){var a=null;if(e.g==c){f5(e),fc(e),e.g=null;var s=2}else if(q7(e.h,c))a=c.D,_n(e.h,c),s=1;else return;if(e.G!=0){if(e.pa=c.Y,c.i)if(s==1){a=c.s?c.s.length:0,c=Date.now()-c.F;var t=e.C;s=j5(),Q1(s,new Hn(s,a)),c0(e)}else jn(e);else if(t=c.o,t==3||t==0&&0<e.pa||!(s==1&&kx(e,c)||s==2&&lc(e)))switch(a&&0<a.length&&(c=e.h,c.i=c.i.concat(a)),t){case 1:B3(e,5);break;case 4:B3(e,10);break;case 3:B3(e,6);break;default:B3(e,2)}}}function Zn(e,c){let a=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(a*=2),a*c}function B3(e,c){if(e.j.info("Error code "+c),c==2){var a=null;e.l&&(a=null);var s=a2(e.kb,e);a||(a=new W3("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||o5(a,"https"),Y5(a)),xx(a.toString(),s)}else n2(2);e.G=0,e.l&&e.l.va(c),Yn(e),Un(e)}F.kb=function(e){e?(this.j.info("Successfully pinged google.com"),n2(2)):(this.j.info("Failed to ping google.com"),n2(1))};function Yn(e){if(e.G=0,e.la=[],e.l){const c=In(e.h);(c.length!=0||e.i.length!=0)&&(es(e.la,c),es(e.la,e.i),e.h.i.length=0,G9(e.i),e.i.length=0),e.l.ua()}}function Qn(e,c,a){var s=a instanceof W3?J2(a):new W3(a,void 0);if(s.g!="")c&&(s.g=c+"."+s.g),l5(s,s.m);else{var t=Z.location;s=t.protocol,c=c?c+"."+t.hostname:t.hostname,t=+t.port;var r=new W3(null,void 0);s&&o5(r,s),c&&(r.g=c),t&&l5(r,t),a&&(r.l=a),s=r}return a=e.D,c=e.za,a&&c&&b1(s,a,c),b1(s,"VER",e.ma),e8(e,s),s}function Xn(e,c,a){if(c&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return c=a&&e.Da&&!e.ra?new k1(new J6({jb:!0})):new k1(e.ra),c.Ka(e.H),c}function Jn(){}F=Jn.prototype;F.xa=function(){};F.wa=function(){};F.va=function(){};F.ua=function(){};F.Ra=function(){};function h5(){if(T4&&!(10<=Number(Wb)))throw Error("Environmental error: no available transport.")}h5.prototype.g=function(e,c){return new H2(e,c)};function H2(e,c){G1.call(this),this.g=new $n(c),this.l=e,this.h=c&&c.messageUrlParams||null,e=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(e?e["X-WebChannel-Content-Type"]=c.messageContentType:e={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.ya&&(e?e["X-WebChannel-Client-Profile"]=c.ya:e={"X-WebChannel-Client-Profile":c.ya}),this.g.S=e,(e=c&&c.Yb)&&!r5(e)&&(this.g.o=e),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!r5(c)&&(this.g.D=c,e=this.h,e!==null&&c in e&&(e=this.h,c in e&&delete e[c])),this.j=new U4(this)}X1(H2,G1);H2.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,c=this.l,a=this.h||void 0;n2(0),e.V=c,e.ia=a||{},e.L=e.Y,e.F=Qn(e,null,e.V),c0(e)};H2.prototype.close=function(){oc(this.g)};H2.prototype.u=function(e){var c=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=X9(e),e=a);c.i.push(new Vx(c.ab++,e)),c.G==3&&c0(c)};H2.prototype.M=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,H2.X.M.call(this)};function ci(e){ac.call(this);var c=e.__sm__;if(c){c:{for(const a in c){e=a;break c}e=void 0}(this.i=e)&&(e=this.i,c=c!==null&&e in c?c[e]:void 0),this.data=c}else this.data=e}X1(ci,ac);function ei(){sc.call(this),this.status=1}X1(ei,sc);function U4(e){this.g=e}X1(U4,Jn);U4.prototype.xa=function(){Q1(this.g,"a")};U4.prototype.wa=function(e){Q1(this.g,new ci(e))};U4.prototype.va=function(e){Q1(this.g,new ei)};U4.prototype.ua=function(){Q1(this.g,"b")};h5.prototype.createWebChannel=h5.prototype.g;H2.prototype.send=H2.prototype.u;H2.prototype.open=H2.prototype.m;H2.prototype.close=H2.prototype.close;W5.NO_ERROR=0;W5.TIMEOUT=8;W5.HTTP_ERROR=6;Mn.COMPLETE="complete";Vn.EventType=Y6;Y6.OPEN="a";Y6.CLOSE="b";Y6.ERROR="c";Y6.MESSAGE="d";G1.prototype.listen=G1.prototype.N;k1.prototype.listenOnce=k1.prototype.O;k1.prototype.getLastError=k1.prototype.Oa;k1.prototype.getLastErrorCode=k1.prototype.Ea;k1.prototype.getStatus=k1.prototype.aa;k1.prototype.getResponseJson=k1.prototype.Sa;k1.prototype.getResponseText=k1.prototype.fa;k1.prototype.send=k1.prototype.da;k1.prototype.setWithCredentials=k1.prototype.Ka;var Ax=function(){return new h5},Tx=function(){return j5()},c7=W5,Ex=Mn,Px=r4,ms={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},_x=J6,b8=Vn,Ix=k1;const vs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(c){this.uid=c}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(c){return c.uid===this.uid}}J1.UNAUTHENTICATED=new J1(null),J1.GOOGLE_CREDENTIALS=new J1("google-credentials-uid"),J1.FIRST_PARTY=new J1("first-party-uid"),J1.MOCK_USER=new J1("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G4="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=new q9("@firebase/firestore");function Cs(){return J3.logLevel}function O(e,...c){if(J3.logLevel<=u1.DEBUG){const a=c.map(hc);J3.debug(`Firestore (${G4}): ${e}`,...a)}}function c3(e,...c){if(J3.logLevel<=u1.ERROR){const a=c.map(hc);J3.error(`Firestore (${G4}): ${e}`,...a)}}function $7(e,...c){if(J3.logLevel<=u1.WARN){const a=c.map(hc);J3.warn(`Firestore (${G4}): ${e}`,...a)}}function hc(e){if(typeof e=="string")return e;try{return c=e,JSON.stringify(c)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(e="Unexpected state"){const c=`FIRESTORE (${G4}) INTERNAL ASSERTION FAILED: `+e;throw c3(c),new Error(c)}function I1(e,c){e||c1()}function f1(e,c){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends N3{constructor(c,a){super(c,a),this.code=c,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(){this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(c,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${c}`)}}class Dx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(c,a){c.enqueueRetryable(()=>a(J1.UNAUTHENTICATED))}shutdown(){}}class Rx{constructor(c){this.token=c,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(c,a){this.changeListener=a,c.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class Fx{constructor(c){this.t=c,this.currentUser=J1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(c,a){let s=this.i;const t=o=>this.i!==s?(s=this.i,a(o)):Promise.resolve();let r=new K3;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new K3,c.enqueueRetryable(()=>t(this.currentUser))};const n=()=>{const o=r;c.enqueueRetryable(async()=>{await o.promise,await t(this.currentUser)})},i=o=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),n()};this.t.onInit(o=>i(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?i(o):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new K3)}},0),n()}getToken(){const c=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(s=>this.i!==c?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(I1(typeof s.accessToken=="string"),new ai(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const c=this.auth&&this.auth.getUid();return I1(c===null||typeof c=="string"),new J1(c)}}class Bx{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t,this.type="FirstParty",this.user=J1.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(I1(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const c=this.I();return c&&this.p.set("Authorization",c),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ox{constructor(c,a,s,t){this.h=c,this.l=a,this.m=s,this.g=t}getToken(){return Promise.resolve(new Bx(this.h,this.l,this.m,this.g))}start(c,a){c.enqueueRetryable(()=>a(J1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qx{constructor(c){this.value=c,this.type="AppCheck",this.headers=new Map,c&&c.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $x{constructor(c){this.T=c,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(c,a){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const n=r.token!==this.A;return this.A=r.token,O("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?a(r.token):Promise.resolve()};this.o=r=>{c.enqueueRetryable(()=>s(r))};const t=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>t(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?t(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const c=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(c).then(a=>a?(I1(typeof a.token=="string"),this.A=a.token,new qx(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(e){const c=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(c&&typeof c.getRandomValues=="function")c.getRandomValues(a);else for(let s=0;s<e;s++)a[s]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{static R(){const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/c.length)*c.length;let s="";for(;s.length<20;){const t=Ux(40);for(let r=0;r<t.length;++r)s.length<20&&t[r]<a&&(s+=c.charAt(t[r]%c.length))}return s}}function v1(e,c){return e<c?-1:e>c?1:0}function E4(e,c,a){return e.length===c.length&&e.every((s,t)=>a(s,c[t]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(c,a){if(this.seconds=c,this.nanoseconds=a,a<0)throw new K(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new K(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(c<-62135596800)throw new K(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c);if(c>=253402300800)throw new K(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+c)}static now(){return v2.fromMillis(Date.now())}static fromDate(c){return v2.fromMillis(c.getTime())}static fromMillis(c){const a=Math.floor(c/1e3),s=Math.floor(1e6*(c-1e3*a));return new v2(a,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(c){return this.seconds===c.seconds?v1(this.nanoseconds,c.nanoseconds):v1(this.seconds,c.seconds)}isEqual(c){return c.seconds===this.seconds&&c.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const c=this.seconds- -62135596800;return String(c).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(c){this.timestamp=c}static fromTimestamp(c){return new a1(c)}static min(){return new a1(new v2(0,0))}static max(){return new a1(new v2(253402300799,999999999))}compareTo(c){return this.timestamp._compareTo(c.timestamp)}isEqual(c){return this.timestamp.isEqual(c.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(c,a,s){a===void 0?a=0:a>c.length&&c1(),s===void 0?s=c.length-a:s>c.length-a&&c1(),this.segments=c,this.offset=a,this.len=s}get length(){return this.len}isEqual(c){return E6.comparator(this,c)===0}child(c){const a=this.segments.slice(this.offset,this.limit());return c instanceof E6?c.forEach(s=>{a.push(s)}):a.push(c),this.construct(a)}limit(){return this.offset+this.length}popFirst(c){return c=c===void 0?1:c,this.construct(this.segments,this.offset+c,this.length-c)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(c){return this.segments[this.offset+c]}isEmpty(){return this.length===0}isPrefixOf(c){if(c.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}isImmediateParentOf(c){if(this.length+1!==c.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==c.get(a))return!1;return!0}forEach(c){for(let a=this.offset,s=this.limit();a<s;a++)c(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(c,a){const s=Math.min(c.length,a.length);for(let t=0;t<s;t++){const r=c.get(t),n=a.get(t);if(r<n)return-1;if(r>n)return 1}return c.length<a.length?-1:c.length>a.length?1:0}}class w1 extends E6{construct(c,a,s){return new w1(c,a,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...c){const a=[];for(const s of c){if(s.indexOf("//")>=0)throw new K(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);a.push(...s.split("/").filter(t=>t.length>0))}return new w1(a)}static emptyPath(){return new w1([])}}const jx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class u2 extends E6{construct(c,a,s){return new u2(c,a,s)}static isValidIdentifier(c){return jx.test(c)}canonicalString(){return this.toArray().map(c=>(c=c.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),u2.isValidIdentifier(c)||(c="`"+c+"`"),c)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new u2(["__name__"])}static fromServerFormat(c){const a=[];let s="",t=0;const r=()=>{if(s.length===0)throw new K(E.INVALID_ARGUMENT,`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(s),s=""};let n=!1;for(;t<c.length;){const i=c[t];if(i==="\\"){if(t+1===c.length)throw new K(E.INVALID_ARGUMENT,"Path has trailing escape character: "+c);const o=c[t+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new K(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+c);s+=o,t+=2}else i==="`"?(n=!n,t++):i!=="."||n?(s+=i,t++):(r(),t++)}if(r(),n)throw new K(E.INVALID_ARGUMENT,"Unterminated ` in path: "+c);return new u2(a)}static emptyPath(){return new u2([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(c){this.path=c}static fromPath(c){return new j(w1.fromString(c))}static fromName(c){return new j(w1.fromString(c).popFirst(5))}static empty(){return new j(w1.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(c){return this.path.length>=2&&this.path.get(this.path.length-2)===c}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(c){return c!==null&&w1.comparator(this.path,c.path)===0}toString(){return this.path.toString()}static comparator(c,a){return w1.comparator(c.path,a.path)}static isDocumentKey(c){return c.length%2==0}static fromSegments(c){return new j(new w1(c.slice()))}}function Wx(e,c){const a=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,t=a1.fromTimestamp(s===1e9?new v2(a+1,0):new v2(a,s));return new g3(t,j.empty(),c)}function Kx(e){return new g3(e.readTime,e.key,-1)}class g3{constructor(c,a,s){this.readTime=c,this.documentKey=a,this.largestBatchId=s}static min(){return new g3(a1.min(),j.empty(),-1)}static max(){return new g3(a1.max(),j.empty(),-1)}}function Zx(e,c){let a=e.readTime.compareTo(c.readTime);return a!==0?a:(a=j.comparator(e.documentKey,c.documentKey),a!==0?a:v1(e.largestBatchId,c.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(c){this.onCommittedListeners.push(c)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(c=>c())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Yx)throw e;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(c){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,c(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(c){return this.next(void 0,c)}next(c,a){return this.callbackAttached&&c1(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(c,this.result):new x((s,t)=>{this.nextCallback=r=>{this.wrapSuccess(c,r).next(s,t)},this.catchCallback=r=>{this.wrapFailure(a,r).next(s,t)}})}toPromise(){return new Promise((c,a)=>{this.next(c,a)})}wrapUserFunction(c){try{const a=c();return a instanceof x?a:x.resolve(a)}catch(a){return x.reject(a)}}wrapSuccess(c,a){return c?this.wrapUserFunction(()=>c(a)):x.resolve(a)}wrapFailure(c,a){return c?this.wrapUserFunction(()=>c(a)):x.reject(a)}static resolve(c){return new x((a,s)=>{a(c)})}static reject(c){return new x((a,s)=>{s(c)})}static waitFor(c){return new x((a,s)=>{let t=0,r=0,n=!1;c.forEach(i=>{++t,i.next(()=>{++r,n&&r===t&&a()},o=>s(o))}),n=!0,r===t&&a()})}static or(c){let a=x.resolve(!1);for(const s of c)a=a.next(t=>t?x.resolve(t):s());return a}static forEach(c,a){const s=[];return c.forEach((t,r)=>{s.push(a.call(this,t,r))}),this.waitFor(s)}static mapArray(c,a){return new x((s,t)=>{const r=c.length,n=new Array(r);let i=0;for(let o=0;o<r;o++){const l=o;a(c[l]).next(f=>{n[l]=f,++i,i===r&&s(n)},f=>t(f))}})}static doWhile(c,a){return new x((s,t)=>{const r=()=>{c()===!0?a().next(()=>{r()},t):s()};r()})}}function a8(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(c,a){this.previousValue=c,a&&(a.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>a.writeSequenceNumber(s))}ut(c){return this.previousValue=Math.max(c,this.previousValue),this.previousValue}next(){const c=++this.previousValue;return this.ct&&this.ct(c),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){let c=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c++;return c}function e0(e,c){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&c(a,e[a])}function Xx(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mc.at=-1;class j1{constructor(c,a){this.comparator=c,this.root=a||K1.EMPTY}insert(c,a){return new j1(this.comparator,this.root.insert(c,a,this.comparator).copy(null,null,K1.BLACK,null,null))}remove(c){return new j1(this.comparator,this.root.remove(c,this.comparator).copy(null,null,K1.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){const s=this.comparator(c,a.key);if(s===0)return a.value;s<0?a=a.left:s>0&&(a=a.right)}return null}indexOf(c){let a=0,s=this.root;for(;!s.isEmpty();){const t=this.comparator(c,s.key);if(t===0)return a+s.left.size;t<0?s=s.left:(a+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(c){return this.root.inorderTraversal(c)}forEach(c){this.inorderTraversal((a,s)=>(c(a,s),!1))}toString(){const c=[];return this.inorderTraversal((a,s)=>(c.push(`${a}:${s}`),!1)),`{${c.join(", ")}}`}reverseTraversal(c){return this.root.reverseTraversal(c)}getIterator(){return new x8(this.root,null,this.comparator,!1)}getIteratorFrom(c){return new x8(this.root,c,this.comparator,!1)}getReverseIterator(){return new x8(this.root,null,this.comparator,!0)}getReverseIteratorFrom(c){return new x8(this.root,c,this.comparator,!0)}}class x8{constructor(c,a,s,t){this.isReverse=t,this.nodeStack=[];let r=1;for(;!c.isEmpty();)if(r=a?s(c.key,a):1,a&&t&&(r*=-1),r<0)c=this.isReverse?c.left:c.right;else{if(r===0){this.nodeStack.push(c);break}this.nodeStack.push(c),c=this.isReverse?c.right:c.left}}getNext(){let c=this.nodeStack.pop();const a={key:c.key,value:c.value};if(this.isReverse)for(c=c.left;!c.isEmpty();)this.nodeStack.push(c),c=c.right;else for(c=c.right;!c.isEmpty();)this.nodeStack.push(c),c=c.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const c=this.nodeStack[this.nodeStack.length-1];return{key:c.key,value:c.value}}}class K1{constructor(c,a,s,t,r){this.key=c,this.value=a,this.color=s!=null?s:K1.RED,this.left=t!=null?t:K1.EMPTY,this.right=r!=null?r:K1.EMPTY,this.size=this.left.size+1+this.right.size}copy(c,a,s,t,r){return new K1(c!=null?c:this.key,a!=null?a:this.value,s!=null?s:this.color,t!=null?t:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(c){return this.left.inorderTraversal(c)||c(this.key,this.value)||this.right.inorderTraversal(c)}reverseTraversal(c){return this.right.reverseTraversal(c)||c(this.key,this.value)||this.left.reverseTraversal(c)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(c,a,s){let t=this;const r=s(c,t.key);return t=r<0?t.copy(null,null,null,t.left.insert(c,a,s),null):r===0?t.copy(null,a,null,null,null):t.copy(null,null,null,null,t.right.insert(c,a,s)),t.fixUp()}removeMin(){if(this.left.isEmpty())return K1.EMPTY;let c=this;return c.left.isRed()||c.left.left.isRed()||(c=c.moveRedLeft()),c=c.copy(null,null,null,c.left.removeMin(),null),c.fixUp()}remove(c,a){let s,t=this;if(a(c,t.key)<0)t.left.isEmpty()||t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.remove(c,a),null);else{if(t.left.isRed()&&(t=t.rotateRight()),t.right.isEmpty()||t.right.isRed()||t.right.left.isRed()||(t=t.moveRedRight()),a(c,t.key)===0){if(t.right.isEmpty())return K1.EMPTY;s=t.right.min(),t=t.copy(s.key,s.value,null,null,t.right.removeMin())}t=t.copy(null,null,null,null,t.right.remove(c,a))}return t.fixUp()}isRed(){return this.color}fixUp(){let c=this;return c.right.isRed()&&!c.left.isRed()&&(c=c.rotateLeft()),c.left.isRed()&&c.left.left.isRed()&&(c=c.rotateRight()),c.left.isRed()&&c.right.isRed()&&(c=c.colorFlip()),c}moveRedLeft(){let c=this.colorFlip();return c.right.left.isRed()&&(c=c.copy(null,null,null,null,c.right.rotateRight()),c=c.rotateLeft(),c=c.colorFlip()),c}moveRedRight(){let c=this.colorFlip();return c.left.left.isRed()&&(c=c.rotateRight(),c=c.colorFlip()),c}rotateLeft(){const c=this.copy(null,null,K1.RED,null,this.right.left);return this.right.copy(null,null,this.color,c,null)}rotateRight(){const c=this.copy(null,null,K1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,c)}colorFlip(){const c=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,c,a)}checkMaxDepth(){const c=this.check();return Math.pow(2,c)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw c1();const c=this.left.check();if(c!==this.right.check())throw c1();return c+(this.isRed()?0:1)}}K1.EMPTY=null,K1.RED=!0,K1.BLACK=!1;K1.EMPTY=new class{constructor(){this.size=0}get key(){throw c1()}get value(){throw c1()}get color(){throw c1()}get left(){throw c1()}get right(){throw c1()}copy(e,c,a,s,t){return this}insert(e,c,a){return new K1(e,c)}remove(e,c){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(c){this.comparator=c,this.data=new j1(this.comparator)}has(c){return this.data.get(c)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(c){return this.data.indexOf(c)}forEach(c){this.data.inorderTraversal((a,s)=>(c(a),!1))}forEachInRange(c,a){const s=this.data.getIteratorFrom(c[0]);for(;s.hasNext();){const t=s.getNext();if(this.comparator(t.key,c[1])>=0)return;a(t.key)}}forEachWhile(c,a){let s;for(s=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();s.hasNext();)if(!c(s.getNext().key))return}firstAfterOrEqual(c){const a=this.data.getIteratorFrom(c);return a.hasNext()?a.getNext().key:null}getIterator(){return new ds(this.data.getIterator())}getIteratorFrom(c){return new ds(this.data.getIteratorFrom(c))}add(c){return this.copy(this.data.remove(c).insert(c,!0))}delete(c){return this.has(c)?this.copy(this.data.remove(c)):this}isEmpty(){return this.data.isEmpty()}unionWith(c){let a=this;return a.size<c.size&&(a=c,c=this),c.forEach(s=>{a=a.add(s)}),a}isEqual(c){if(!(c instanceof F1)||this.size!==c.size)return!1;const a=this.data.getIterator(),s=c.data.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(this.comparator(t,r)!==0)return!1}return!0}toArray(){const c=[];return this.forEach(a=>{c.push(a)}),c}toString(){const c=[];return this.forEach(a=>c.push(a)),"SortedSet("+c.toString()+")"}copy(c){const a=new F1(this.comparator);return a.data=c,a}}class ds{constructor(c){this.iter=c}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(c){this.fields=c,c.sort(u2.comparator)}static empty(){return new Z3([])}unionWith(c){let a=new F1(u2.comparator);for(const s of this.fields)a=a.add(s);for(const s of c)a=a.add(s);return new Z3(a.toArray())}covers(c){for(const a of this.fields)if(a.isPrefixOf(c))return!0;return!1}isEqual(c){return E4(this.fields,c.fields,(a,s)=>a.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(c){this.binaryString=c}static fromBase64String(c){const a=atob(c);return new t2(a)}static fromUint8Array(c){const a=function(s){let t="";for(let r=0;r<s.length;++r)t+=String.fromCharCode(s[r]);return t}(c);return new t2(a)}[Symbol.iterator](){let c=0;return{next:()=>c<this.binaryString.length?{value:this.binaryString.charCodeAt(c++),done:!1}:{value:void 0,done:!0}}}toBase64(){return c=this.binaryString,btoa(c);var c}toUint8Array(){return function(c){const a=new Uint8Array(c.length);for(let s=0;s<c.length;s++)a[s]=c.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(c){return v1(this.binaryString,c.binaryString)}isEqual(c){return this.binaryString===c.binaryString}}t2.EMPTY_BYTE_STRING=new t2("");const Jx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function L3(e){if(I1(!!e),typeof e=="string"){let c=0;const a=Jx.exec(e);if(I1(!!a),a[1]){let t=a[1];t=(t+"000000000").substr(0,9),c=Number(t)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:c}}return{seconds:_1(e.seconds),nanos:_1(e.nanos)}}function _1(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function P4(e){return typeof e=="string"?t2.fromBase64String(e):t2.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){var c,a;return((a=(((c=e==null?void 0:e.mapValue)===null||c===void 0?void 0:c.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function ti(e){const c=e.mapValue.fields.__previous_value__;return si(c)?ti(c):c}function P6(e){const c=L3(e.mapValue.fields.__local_write_time__.timestampValue);return new v2(c.seconds,c.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(c,a,s,t,r,n,i,o){this.databaseId=c,this.appId=a,this.persistenceKey=s,this.host=t,this.ssl=r,this.forceLongPolling=n,this.autoDetectLongPolling=i,this.useFetchStreams=o}}class _6{constructor(c,a){this.projectId=c,this.database=a||"(default)"}static empty(){return new _6("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(c){return c instanceof _6&&c.projectId===this.projectId&&c.database===this.database}}function a0(e){return e==null}function U7(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function c4(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?si(e)?4:ey(e)?9007199254740991:10:c1()}function j2(e,c){if(e===c)return!0;const a=c4(e);if(a!==c4(c))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===c.booleanValue;case 4:return P6(e).isEqual(P6(c));case 3:return function(s,t){if(typeof s.timestampValue=="string"&&typeof t.timestampValue=="string"&&s.timestampValue.length===t.timestampValue.length)return s.timestampValue===t.timestampValue;const r=L3(s.timestampValue),n=L3(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,c);case 5:return e.stringValue===c.stringValue;case 6:return function(s,t){return P4(s.bytesValue).isEqual(P4(t.bytesValue))}(e,c);case 7:return e.referenceValue===c.referenceValue;case 8:return function(s,t){return _1(s.geoPointValue.latitude)===_1(t.geoPointValue.latitude)&&_1(s.geoPointValue.longitude)===_1(t.geoPointValue.longitude)}(e,c);case 2:return function(s,t){if("integerValue"in s&&"integerValue"in t)return _1(s.integerValue)===_1(t.integerValue);if("doubleValue"in s&&"doubleValue"in t){const r=_1(s.doubleValue),n=_1(t.doubleValue);return r===n?U7(r)===U7(n):isNaN(r)&&isNaN(n)}return!1}(e,c);case 9:return E4(e.arrayValue.values||[],c.arrayValue.values||[],j2);case 10:return function(s,t){const r=s.mapValue.fields||{},n=t.mapValue.fields||{};if(ps(r)!==ps(n))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(n[i]===void 0||!j2(r[i],n[i])))return!1;return!0}(e,c);default:return c1()}}function I6(e,c){return(e.values||[]).find(a=>j2(a,c))!==void 0}function _4(e,c){if(e===c)return 0;const a=c4(e),s=c4(c);if(a!==s)return v1(a,s);switch(a){case 0:case 9007199254740991:return 0;case 1:return v1(e.booleanValue,c.booleanValue);case 2:return function(t,r){const n=_1(t.integerValue||t.doubleValue),i=_1(r.integerValue||r.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,c);case 3:return zs(e.timestampValue,c.timestampValue);case 4:return zs(P6(e),P6(c));case 5:return v1(e.stringValue,c.stringValue);case 6:return function(t,r){const n=P4(t),i=P4(r);return n.compareTo(i)}(e.bytesValue,c.bytesValue);case 7:return function(t,r){const n=t.split("/"),i=r.split("/");for(let o=0;o<n.length&&o<i.length;o++){const l=v1(n[o],i[o]);if(l!==0)return l}return v1(n.length,i.length)}(e.referenceValue,c.referenceValue);case 8:return function(t,r){const n=v1(_1(t.latitude),_1(r.latitude));return n!==0?n:v1(_1(t.longitude),_1(r.longitude))}(e.geoPointValue,c.geoPointValue);case 9:return function(t,r){const n=t.values||[],i=r.values||[];for(let o=0;o<n.length&&o<i.length;++o){const l=_4(n[o],i[o]);if(l)return l}return v1(n.length,i.length)}(e.arrayValue,c.arrayValue);case 10:return function(t,r){if(t===y8.mapValue&&r===y8.mapValue)return 0;if(t===y8.mapValue)return 1;if(r===y8.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),o=r.fields||{},l=Object.keys(o);i.sort(),l.sort();for(let f=0;f<i.length&&f<l.length;++f){const h=v1(i[f],l[f]);if(h!==0)return h;const u=_4(n[i[f]],o[l[f]]);if(u!==0)return u}return v1(i.length,l.length)}(e.mapValue,c.mapValue);default:throw c1()}}function zs(e,c){if(typeof e=="string"&&typeof c=="string"&&e.length===c.length)return v1(e,c);const a=L3(e),s=L3(c),t=v1(a.seconds,s.seconds);return t!==0?t:v1(a.nanos,s.nanos)}function g4(e){return G7(e)}function G7(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const t=L3(s);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?P4(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,j.fromName(a).toString()):"geoPointValue"in e?`geo(${(c=e.geoPointValue).latitude},${c.longitude})`:"arrayValue"in e?function(s){let t="[",r=!0;for(const n of s.values||[])r?r=!1:t+=",",t+=G7(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(s){const t=Object.keys(s.fields||{}).sort();let r="{",n=!0;for(const i of t)n?n=!1:r+=",",r+=`${i}:${G7(s.fields[i])}`;return r+"}"}(e.mapValue):c1();var c,a}function j7(e){return!!e&&"integerValue"in e}function vc(e){return!!e&&"arrayValue"in e}function Hs(e){return!!e&&"nullValue"in e}function Ms(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function e7(e){return!!e&&"mapValue"in e}function u6(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const c={mapValue:{fields:{}}};return e0(e.mapValue.fields,(a,s)=>c.mapValue.fields[a]=u6(s)),c}if(e.arrayValue){const c={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)c.arrayValue.values[a]=u6(e.arrayValue.values[a]);return c}return Object.assign({},e)}function ey(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(c){this.value=c}static empty(){return new F2({mapValue:{}})}field(c){if(c.isEmpty())return this.value;{let a=this.value;for(let s=0;s<c.length-1;++s)if(a=(a.mapValue.fields||{})[c.get(s)],!e7(a))return null;return a=(a.mapValue.fields||{})[c.lastSegment()],a||null}}set(c,a){this.getFieldsMap(c.popLast())[c.lastSegment()]=u6(a)}setAll(c){let a=u2.emptyPath(),s={},t=[];c.forEach((n,i)=>{if(!a.isImmediateParentOf(i)){const o=this.getFieldsMap(a);this.applyChanges(o,s,t),s={},t=[],a=i.popLast()}n?s[i.lastSegment()]=u6(n):t.push(i.lastSegment())});const r=this.getFieldsMap(a);this.applyChanges(r,s,t)}delete(c){const a=this.field(c.popLast());e7(a)&&a.mapValue.fields&&delete a.mapValue.fields[c.lastSegment()]}isEqual(c){return j2(this.value,c.value)}getFieldsMap(c){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let s=0;s<c.length;++s){let t=a.mapValue.fields[c.get(s)];e7(t)&&t.mapValue.fields||(t={mapValue:{fields:{}}},a.mapValue.fields[c.get(s)]=t),a=t}return a.mapValue.fields}applyChanges(c,a,s){e0(a,(t,r)=>c[t]=r);for(const t of s)delete c[t]}clone(){return new F2(u6(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(c,a,s,t,r,n){this.key=c,this.documentType=a,this.version=s,this.readTime=t,this.data=r,this.documentState=n}static newInvalidDocument(c){return new Z1(c,0,a1.min(),a1.min(),F2.empty(),0)}static newFoundDocument(c,a,s){return new Z1(c,1,a,a1.min(),s,0)}static newNoDocument(c,a){return new Z1(c,2,a,a1.min(),F2.empty(),0)}static newUnknownDocument(c,a){return new Z1(c,3,a,a1.min(),F2.empty(),2)}convertToFoundDocument(c,a){return this.version=c,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(c){return this.version=c,this.documentType=2,this.data=F2.empty(),this.documentState=0,this}convertToUnknownDocument(c){return this.version=c,this.documentType=3,this.data=F2.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=a1.min(),this}setReadTime(c){return this.readTime=c,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(c){return c instanceof Z1&&this.key.isEqual(c.key)&&this.version.isEqual(c.version)&&this.documentType===c.documentType&&this.documentState===c.documentState&&this.data.isEqual(c.data)}mutableCopy(){return new Z1(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(c,a=null,s=[],t=[],r=null,n=null,i=null){this.path=c,this.collectionGroup=a,this.orderBy=s,this.filters=t,this.limit=r,this.startAt=n,this.endAt=i,this.ht=null}}function Vs(e,c=null,a=[],s=[],t=null,r=null,n=null){return new ay(e,c,a,s,t,r,n)}function Cc(e){const c=f1(e);if(c.ht===null){let a=c.path.canonicalString();c.collectionGroup!==null&&(a+="|cg:"+c.collectionGroup),a+="|f:",a+=c.filters.map(s=>{return(t=s).field.canonicalString()+t.op.toString()+g4(t.value);var t}).join(","),a+="|ob:",a+=c.orderBy.map(s=>function(t){return t.field.canonicalString()+t.dir}(s)).join(","),a0(c.limit)||(a+="|l:",a+=c.limit),c.startAt&&(a+="|lb:",a+=c.startAt.inclusive?"b:":"a:",a+=c.startAt.position.map(s=>g4(s)).join(",")),c.endAt&&(a+="|ub:",a+=c.endAt.inclusive?"a:":"b:",a+=c.endAt.position.map(s=>g4(s)).join(",")),c.ht=a}return c.ht}function sy(e){let c=e.path.canonicalString();return e.collectionGroup!==null&&(c+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(c+=`, filters: [${e.filters.map(a=>{return`${(s=a).field.canonicalString()} ${s.op} ${g4(s.value)}`;var s}).join(", ")}]`),a0(e.limit)||(c+=", limit: "+e.limit),e.orderBy.length>0&&(c+=`, orderBy: [${e.orderBy.map(a=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(a)).join(", ")}]`),e.startAt&&(c+=", startAt: ",c+=e.startAt.inclusive?"b:":"a:",c+=e.startAt.position.map(a=>g4(a)).join(",")),e.endAt&&(c+=", endAt: ",c+=e.endAt.inclusive?"a:":"b:",c+=e.endAt.position.map(a=>g4(a)).join(",")),`Target(${c})`}function pc(e,c){if(e.limit!==c.limit||e.orderBy.length!==c.orderBy.length)return!1;for(let t=0;t<e.orderBy.length;t++)if(!hy(e.orderBy[t],c.orderBy[t]))return!1;if(e.filters.length!==c.filters.length)return!1;for(let t=0;t<e.filters.length;t++)if(a=e.filters[t],s=c.filters[t],a.op!==s.op||!a.field.isEqual(s.field)||!j2(a.value,s.value))return!1;var a,s;return e.collectionGroup===c.collectionGroup&&!!e.path.isEqual(c.path)&&!!Ls(e.startAt,c.startAt)&&Ls(e.endAt,c.endAt)}function W7(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class m2 extends class{}{constructor(c,a,s){super(),this.field=c,this.op=a,this.value=s}static create(c,a,s){return c.isKeyField()?a==="in"||a==="not-in"?this.lt(c,a,s):new ty(c,a,s):a==="array-contains"?new iy(c,s):a==="in"?new oy(c,s):a==="not-in"?new ly(c,s):a==="array-contains-any"?new fy(c,s):new m2(c,a,s)}static lt(c,a,s){return a==="in"?new ry(c,s):new ny(c,s)}matches(c){const a=c.data.field(this.field);return this.op==="!="?a!==null&&this.ft(_4(a,this.value)):a!==null&&c4(this.value)===c4(a)&&this.ft(_4(a,this.value))}ft(c){switch(this.op){case"<":return c<0;case"<=":return c<=0;case"==":return c===0;case"!=":return c!==0;case">":return c>0;case">=":return c>=0;default:return c1()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ty extends m2{constructor(c,a,s){super(c,a,s),this.key=j.fromName(s.referenceValue)}matches(c){const a=j.comparator(c.key,this.key);return this.ft(a)}}class ry extends m2{constructor(c,a){super(c,"in",a),this.keys=ri("in",a)}matches(c){return this.keys.some(a=>a.isEqual(c.key))}}class ny extends m2{constructor(c,a){super(c,"not-in",a),this.keys=ri("not-in",a)}matches(c){return!this.keys.some(a=>a.isEqual(c.key))}}function ri(e,c){var a;return(((a=c.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(s=>j.fromName(s.referenceValue))}class iy extends m2{constructor(c,a){super(c,"array-contains",a)}matches(c){const a=c.data.field(this.field);return vc(a)&&I6(a.arrayValue,this.value)}}class oy extends m2{constructor(c,a){super(c,"in",a)}matches(c){const a=c.data.field(this.field);return a!==null&&I6(this.value.arrayValue,a)}}class ly extends m2{constructor(c,a){super(c,"not-in",a)}matches(c){if(I6(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=c.data.field(this.field);return a!==null&&!I6(this.value.arrayValue,a)}}class fy extends m2{constructor(c,a){super(c,"array-contains-any",a)}matches(c){const a=c.data.field(this.field);return!(!vc(a)||!a.arrayValue.values)&&a.arrayValue.values.some(s=>I6(this.value.arrayValue,s))}}class u5{constructor(c,a){this.position=c,this.inclusive=a}}class m6{constructor(c,a="asc"){this.field=c,this.dir=a}}function hy(e,c){return e.dir===c.dir&&e.field.isEqual(c.field)}function gs(e,c,a){let s=0;for(let t=0;t<e.position.length;t++){const r=c[t],n=e.position[t];if(r.field.isKeyField()?s=j.comparator(j.fromName(n.referenceValue),a.key):s=_4(n,a.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ls(e,c){if(e===null)return c===null;if(c===null||e.inclusive!==c.inclusive||e.position.length!==c.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!j2(e.position[a],c.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(c,a=null,s=[],t=[],r=null,n="F",i=null,o=null){this.path=c,this.collectionGroup=a,this.explicitOrderBy=s,this.filters=t,this.limit=r,this.limitType=n,this.startAt=i,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function uy(e,c,a,s,t,r,n,i){return new s0(e,c,a,s,t,r,n,i)}function ni(e){return new s0(e)}function bs(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function my(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function vy(e){for(const c of e.filters)if(c.dt())return c.field;return null}function Cy(e){return e.collectionGroup!==null}function D6(e){const c=f1(e);if(c._t===null){c._t=[];const a=vy(c),s=my(c);if(a!==null&&s===null)a.isKeyField()||c._t.push(new m6(a)),c._t.push(new m6(u2.keyField(),"asc"));else{let t=!1;for(const r of c.explicitOrderBy)c._t.push(r),r.field.isKeyField()&&(t=!0);if(!t){const r=c.explicitOrderBy.length>0?c.explicitOrderBy[c.explicitOrderBy.length-1].dir:"asc";c._t.push(new m6(u2.keyField(),r))}}}return c._t}function e3(e){const c=f1(e);if(!c.wt)if(c.limitType==="F")c.wt=Vs(c.path,c.collectionGroup,D6(c),c.filters,c.limit,c.startAt,c.endAt);else{const a=[];for(const r of D6(c)){const n=r.dir==="desc"?"asc":"desc";a.push(new m6(r.field,n))}const s=c.endAt?new u5(c.endAt.position,c.endAt.inclusive):null,t=c.startAt?new u5(c.startAt.position,c.startAt.inclusive):null;c.wt=Vs(c.path,c.collectionGroup,a,c.filters,c.limit,s,t)}return c.wt}function K7(e,c,a){return new s0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),c,a,e.startAt,e.endAt)}function t0(e,c){return pc(e3(e),e3(c))&&e.limitType===c.limitType}function ii(e){return`${Cc(e3(e))}|lt:${e.limitType}`}function Z7(e){return`Query(target=${sy(e3(e))}; limitType=${e.limitType})`}function dc(e,c){return c.isFoundDocument()&&function(a,s){const t=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(t):j.isDocumentKey(a.path)?a.path.isEqual(t):a.path.isImmediateParentOf(t)}(e,c)&&function(a,s){for(const t of a.explicitOrderBy)if(!t.field.isKeyField()&&s.data.field(t.field)===null)return!1;return!0}(e,c)&&function(a,s){for(const t of a.filters)if(!t.matches(s))return!1;return!0}(e,c)&&function(a,s){return!(a.startAt&&!function(t,r,n){const i=gs(t,r,n);return t.inclusive?i<=0:i<0}(a.startAt,D6(a),s)||a.endAt&&!function(t,r,n){const i=gs(t,r,n);return t.inclusive?i>=0:i>0}(a.endAt,D6(a),s))}(e,c)}function py(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function oi(e){return(c,a)=>{let s=!1;for(const t of D6(e)){const r=dy(t,c,a);if(r!==0)return r;s=s||t.field.isKeyField()}return 0}}function dy(e,c,a){const s=e.field.isKeyField()?j.comparator(c.key,a.key):function(t,r,n){const i=r.data.field(t),o=n.data.field(t);return i!==null&&o!==null?_4(i,o):c1()}(e.field,c,a);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return c1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(e,c){if(e.gt){if(isNaN(c))return{doubleValue:"NaN"};if(c===1/0)return{doubleValue:"Infinity"};if(c===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:U7(c)?"-0":c}}function Hy(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this._=void 0}}function My(e,c,a){return e instanceof Y7?function(s,t){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(a,c):e instanceof m5?li(e,c):e instanceof v5?fi(e,c):function(s,t){const r=gy(s,t),n=xs(r)+xs(s.yt);return j7(r)&&j7(s.yt)?Hy(n):zy(s.It,n)}(e,c)}function Vy(e,c,a){return e instanceof m5?li(e,c):e instanceof v5?fi(e,c):a}function gy(e,c){return e instanceof Q7?j7(a=c)||function(s){return!!s&&"doubleValue"in s}(a)?c:{integerValue:0}:null;var a}class Y7 extends r0{}class m5 extends r0{constructor(c){super(),this.elements=c}}function li(e,c){const a=hi(c);for(const s of e.elements)a.some(t=>j2(t,s))||a.push(s);return{arrayValue:{values:a}}}class v5 extends r0{constructor(c){super(),this.elements=c}}function fi(e,c){let a=hi(c);for(const s of e.elements)a=a.filter(t=>!j2(t,s));return{arrayValue:{values:a}}}class Q7 extends r0{constructor(c,a){super(),this.It=c,this.yt=a}}function xs(e){return _1(e.integerValue||e.doubleValue)}function hi(e){return vc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ly(e,c){return e.field.isEqual(c.field)&&function(a,s){return a instanceof m5&&s instanceof m5||a instanceof v5&&s instanceof v5?E4(a.elements,s.elements,j2):a instanceof Q7&&s instanceof Q7?j2(a.yt,s.yt):a instanceof Y7&&s instanceof Y7}(e.transform,c.transform)}class Y3{constructor(c,a){this.updateTime=c,this.exists=a}static none(){return new Y3}static exists(c){return new Y3(void 0,c)}static updateTime(c){return new Y3(c)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(c){return this.exists===c.exists&&(this.updateTime?!!c.updateTime&&this.updateTime.isEqual(c.updateTime):!c.updateTime)}}function $8(e,c){return e.updateTime!==void 0?c.isFoundDocument()&&c.version.isEqual(e.updateTime):e.exists===void 0||e.exists===c.isFoundDocument()}class zc{}function ui(e,c){if(!e.hasLocalMutations||c&&c.fields.length===0)return null;if(c===null)return e.isNoDocument()?new xy(e.key,Y3.none()):new Hc(e.key,e.data,Y3.none());{const a=e.data,s=F2.empty();let t=new F1(u2.comparator);for(let r of c.fields)if(!t.has(r)){let n=a.field(r);n===null&&r.length>1&&(r=r.popLast(),n=a.field(r)),n===null?s.delete(r):s.set(r,n),t=t.add(r)}return new n0(e.key,s,new Z3(t.toArray()),Y3.none())}}function by(e,c,a){e instanceof Hc?function(s,t,r){const n=s.value.clone(),i=Ss(s.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,c,a):e instanceof n0?function(s,t,r){if(!$8(s.precondition,t))return void t.convertToUnknownDocument(r.version);const n=Ss(s.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(mi(s)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(e,c,a):function(s,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,c,a)}function v6(e,c,a,s){return e instanceof Hc?function(t,r,n,i){if(!$8(t.precondition,r))return n;const o=t.value.clone(),l=Ns(t.fieldTransforms,i,r);return o.setAll(l),r.convertToFoundDocument(r.version,o).setHasLocalMutations(),null}(e,c,a,s):e instanceof n0?function(t,r,n,i){if(!$8(t.precondition,r))return n;const o=Ns(t.fieldTransforms,i,r),l=r.data;return l.setAll(mi(t)),l.setAll(o),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),n===null?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(f=>f.field))}(e,c,a,s):function(t,r,n){return $8(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):n}(e,c,a)}function ys(e,c){return e.type===c.type&&!!e.key.isEqual(c.key)&&!!e.precondition.isEqual(c.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&E4(a,s,(t,r)=>Ly(t,r))}(e.fieldTransforms,c.fieldTransforms)&&(e.type===0?e.value.isEqual(c.value):e.type!==1||e.data.isEqual(c.data)&&e.fieldMask.isEqual(c.fieldMask))}class Hc extends zc{constructor(c,a,s,t=[]){super(),this.key=c,this.value=a,this.precondition=s,this.fieldTransforms=t,this.type=0}getFieldMask(){return null}}class n0 extends zc{constructor(c,a,s,t,r=[]){super(),this.key=c,this.data=a,this.fieldMask=s,this.precondition=t,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function mi(e){const c=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const s=e.data.field(a);c.set(a,s)}}),c}function Ss(e,c,a){const s=new Map;I1(e.length===a.length);for(let t=0;t<a.length;t++){const r=e[t],n=r.transform,i=c.data.field(r.field);s.set(r.field,Vy(n,i,a[t]))}return s}function Ns(e,c,a){const s=new Map;for(const t of e){const r=t.transform,n=a.data.field(t.field);s.set(t.field,My(r,n,c))}return s}class xy extends zc{constructor(c,a){super(),this.key=c,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(c){this.count=c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P1,t1;function vi(e){if(e===void 0)return c3("GRPC error has no .code"),E.UNKNOWN;switch(e){case P1.OK:return E.OK;case P1.CANCELLED:return E.CANCELLED;case P1.UNKNOWN:return E.UNKNOWN;case P1.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case P1.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case P1.INTERNAL:return E.INTERNAL;case P1.UNAVAILABLE:return E.UNAVAILABLE;case P1.UNAUTHENTICATED:return E.UNAUTHENTICATED;case P1.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case P1.NOT_FOUND:return E.NOT_FOUND;case P1.ALREADY_EXISTS:return E.ALREADY_EXISTS;case P1.PERMISSION_DENIED:return E.PERMISSION_DENIED;case P1.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case P1.ABORTED:return E.ABORTED;case P1.OUT_OF_RANGE:return E.OUT_OF_RANGE;case P1.UNIMPLEMENTED:return E.UNIMPLEMENTED;case P1.DATA_LOSS:return E.DATA_LOSS;default:return c1()}}(t1=P1||(P1={}))[t1.OK=0]="OK",t1[t1.CANCELLED=1]="CANCELLED",t1[t1.UNKNOWN=2]="UNKNOWN",t1[t1.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",t1[t1.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",t1[t1.NOT_FOUND=5]="NOT_FOUND",t1[t1.ALREADY_EXISTS=6]="ALREADY_EXISTS",t1[t1.PERMISSION_DENIED=7]="PERMISSION_DENIED",t1[t1.UNAUTHENTICATED=16]="UNAUTHENTICATED",t1[t1.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",t1[t1.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",t1[t1.ABORTED=10]="ABORTED",t1[t1.OUT_OF_RANGE=11]="OUT_OF_RANGE",t1[t1.UNIMPLEMENTED=12]="UNIMPLEMENTED",t1[t1.INTERNAL=13]="INTERNAL",t1[t1.UNAVAILABLE=14]="UNAVAILABLE",t1[t1.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(c,a){this.mapKeyFn=c,this.equalsFn=a,this.inner={},this.innerSize=0}get(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s!==void 0){for(const[t,r]of s)if(this.equalsFn(t,c))return r}}has(c){return this.get(c)!==void 0}set(c,a){const s=this.mapKeyFn(c),t=this.inner[s];if(t===void 0)return this.inner[s]=[[c,a]],void this.innerSize++;for(let r=0;r<t.length;r++)if(this.equalsFn(t[r][0],c))return void(t[r]=[c,a]);t.push([c,a]),this.innerSize++}delete(c){const a=this.mapKeyFn(c),s=this.inner[a];if(s===void 0)return!1;for(let t=0;t<s.length;t++)if(this.equalsFn(s[t][0],c))return s.length===1?delete this.inner[a]:s.splice(t,1),this.innerSize--,!0;return!1}forEach(c){e0(this.inner,(a,s)=>{for(const[t,r]of s)c(t,r)})}isEmpty(){return Xx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new j1(j.comparator);function b3(){return Sy}const Ci=new j1(j.comparator);function s6(...e){let c=Ci;for(const a of e)c=c.insert(a.key,a);return c}function Ny(e){let c=Ci;return e.forEach((a,s)=>c=c.insert(a,s.overlayedDocument)),c}function O3(){return C6()}function pi(){return C6()}function C6(){return new j4(e=>e.toString(),(e,c)=>e.isEqual(c))}new j1(j.comparator);const wy=new F1(j.comparator);function o1(...e){let c=wy;for(const a of e)c=c.add(a);return c}const ky=new F1(v1);function di(){return ky}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(c,a,s,t,r){this.snapshotVersion=c,this.targetChanges=a,this.targetMismatches=s,this.documentUpdates=t,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(c,a,s){const t=new Map;return t.set(c,s8.createSynthesizedTargetChangeForCurrentChange(c,a,s)),new i0(a1.min(),t,di(),b3(),o1())}}class s8{constructor(c,a,s,t,r){this.resumeToken=c,this.current=a,this.addedDocuments=s,this.modifiedDocuments=t,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(c,a,s){return new s8(s,a,o1(),o1(),o1())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U8{constructor(c,a,s,t){this.Tt=c,this.removedTargetIds=a,this.key=s,this.Et=t}}class zi{constructor(c,a){this.targetId=c,this.At=a}}class Hi{constructor(c,a,s=t2.EMPTY_BYTE_STRING,t=null){this.state=c,this.targetIds=a,this.resumeToken=s,this.cause=t}}class ws{constructor(){this.Rt=0,this.bt=As(),this.Pt=t2.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(c){c.approximateByteSize()>0&&(this.Vt=!0,this.Pt=c)}xt(){let c=o1(),a=o1(),s=o1();return this.bt.forEach((t,r)=>{switch(r){case 0:c=c.add(t);break;case 2:a=a.add(t);break;case 1:s=s.add(t);break;default:c1()}}),new s8(this.Pt,this.vt,c,a,s)}Nt(){this.Vt=!1,this.bt=As()}kt(c,a){this.Vt=!0,this.bt=this.bt.insert(c,a)}Ot(c){this.Vt=!0,this.bt=this.bt.remove(c)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ay{constructor(c){this.Bt=c,this.Lt=new Map,this.Ut=b3(),this.qt=ks(),this.Kt=new F1(v1)}Gt(c){for(const a of c.Tt)c.Et&&c.Et.isFoundDocument()?this.Qt(a,c.Et):this.jt(a,c.key,c.Et);for(const a of c.removedTargetIds)this.jt(a,c.key,c.Et)}Wt(c){this.forEachTarget(c,a=>{const s=this.zt(a);switch(c.state){case 0:this.Ht(a)&&s.Ct(c.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(c.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(a);break;case 3:this.Ht(a)&&(s.$t(),s.Ct(c.resumeToken));break;case 4:this.Ht(a)&&(this.Jt(a),s.Ct(c.resumeToken));break;default:c1()}})}forEachTarget(c,a){c.targetIds.length>0?c.targetIds.forEach(a):this.Lt.forEach((s,t)=>{this.Ht(t)&&a(t)})}Yt(c){const a=c.targetId,s=c.At.count,t=this.Xt(a);if(t){const r=t.target;if(W7(r))if(s===0){const n=new j(r.path);this.jt(a,n,Z1.newNoDocument(n,a1.min()))}else I1(s===1);else this.Zt(a)!==s&&(this.Jt(a),this.Kt=this.Kt.add(a))}}te(c){const a=new Map;this.Lt.forEach((r,n)=>{const i=this.Xt(n);if(i){if(r.current&&W7(i.target)){const o=new j(i.target.path);this.Ut.get(o)!==null||this.ee(n,o)||this.jt(n,o,Z1.newNoDocument(o,c))}r.Dt&&(a.set(n,r.xt()),r.Nt())}});let s=o1();this.qt.forEach((r,n)=>{let i=!0;n.forEachWhile(o=>{const l=this.Xt(o);return!l||l.purpose===2||(i=!1,!1)}),i&&(s=s.add(r))}),this.Ut.forEach((r,n)=>n.setReadTime(c));const t=new i0(c,a,this.Kt,this.Ut,s);return this.Ut=b3(),this.qt=ks(),this.Kt=new F1(v1),t}Qt(c,a){if(!this.Ht(c))return;const s=this.ee(c,a.key)?2:0;this.zt(c).kt(a.key,s),this.Ut=this.Ut.insert(a.key,a),this.qt=this.qt.insert(a.key,this.ne(a.key).add(c))}jt(c,a,s){if(!this.Ht(c))return;const t=this.zt(c);this.ee(c,a)?t.kt(a,1):t.Ot(a),this.qt=this.qt.insert(a,this.ne(a).delete(c)),s&&(this.Ut=this.Ut.insert(a,s))}removeTarget(c){this.Lt.delete(c)}Zt(c){const a=this.zt(c).xt();return this.Bt.getRemoteKeysForTarget(c).size+a.addedDocuments.size-a.removedDocuments.size}Mt(c){this.zt(c).Mt()}zt(c){let a=this.Lt.get(c);return a||(a=new ws,this.Lt.set(c,a)),a}ne(c){let a=this.qt.get(c);return a||(a=new F1(v1),this.qt=this.qt.insert(c,a)),a}Ht(c){const a=this.Xt(c)!==null;return a||O("WatchChangeAggregator","Detected inactive target",c),a}Xt(c){const a=this.Lt.get(c);return a&&a.St?null:this.Bt.se(c)}Jt(c){this.Lt.set(c,new ws),this.Bt.getRemoteKeysForTarget(c).forEach(a=>{this.jt(c,a,null)})}ee(c,a){return this.Bt.getRemoteKeysForTarget(c).has(a)}}function ks(){return new j1(j.comparator)}function As(){return new j1(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ey=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Py{constructor(c,a){this.databaseId=c,this.gt=a}}function _y(e,c){return e.gt?`${new Date(1e3*c.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+c.nanoseconds).slice(-9)}Z`:{seconds:""+c.seconds,nanos:c.nanoseconds}}function Iy(e,c){return e.gt?c.toBase64():c.toUint8Array()}function R6(e){return I1(!!e),a1.fromTimestamp(function(c){const a=L3(c);return new v2(a.seconds,a.nanos)}(e))}function Dy(e,c){return function(a){return new w1(["projects",a.projectId,"databases",a.database])}(e).child("documents").child(c).canonicalString()}function Mi(e){const c=w1.fromString(e);return I1(Li(c)),c}function a7(e,c){const a=Mi(c);if(a.get(1)!==e.databaseId.projectId)throw new K(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new K(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new j(Vi(a))}function X7(e,c){return Dy(e.databaseId,c)}function Ry(e){const c=Mi(e);return c.length===4?w1.emptyPath():Vi(c)}function Ts(e){return new w1(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vi(e){return I1(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Fy(e,c){let a;if("targetChange"in c){c.targetChange;const s=function(o){return o==="NO_CHANGE"?0:o==="ADD"?1:o==="REMOVE"?2:o==="CURRENT"?3:o==="RESET"?4:c1()}(c.targetChange.targetChangeType||"NO_CHANGE"),t=c.targetChange.targetIds||[],r=function(o,l){return o.gt?(I1(l===void 0||typeof l=="string"),t2.fromBase64String(l||"")):(I1(l===void 0||l instanceof Uint8Array),t2.fromUint8Array(l||new Uint8Array))}(e,c.targetChange.resumeToken),n=c.targetChange.cause,i=n&&function(o){const l=o.code===void 0?E.UNKNOWN:vi(o.code);return new K(l,o.message||"")}(n);a=new Hi(s,t,r,i||null)}else if("documentChange"in c){c.documentChange;const s=c.documentChange;s.document,s.document.name,s.document.updateTime;const t=a7(e,s.document.name),r=R6(s.document.updateTime),n=new F2({mapValue:{fields:s.document.fields}}),i=Z1.newFoundDocument(t,r,n),o=s.targetIds||[],l=s.removedTargetIds||[];a=new U8(o,l,i.key,i)}else if("documentDelete"in c){c.documentDelete;const s=c.documentDelete;s.document;const t=a7(e,s.document),r=s.readTime?R6(s.readTime):a1.min(),n=Z1.newNoDocument(t,r),i=s.removedTargetIds||[];a=new U8([],i,n.key,n)}else if("documentRemove"in c){c.documentRemove;const s=c.documentRemove;s.document;const t=a7(e,s.document),r=s.removedTargetIds||[];a=new U8([],r,t,null)}else{if(!("filter"in c))return c1();{c.filter;const s=c.filter;s.targetId;const t=s.count||0,r=new yy(t),n=s.targetId;a=new zi(n,r)}}return a}function By(e,c){return{documents:[X7(e,c.path)]}}function Oy(e,c){const a={structuredQuery:{}},s=c.path;c.collectionGroup!==null?(a.parent=X7(e,s),a.structuredQuery.from=[{collectionId:c.collectionGroup,allDescendants:!0}]):(a.parent=X7(e,s.popLast()),a.structuredQuery.from=[{collectionId:s.lastSegment()}]);const t=function(o){if(o.length===0)return;const l=o.map(f=>function(h){if(h.op==="=="){if(Ms(h.value))return{unaryFilter:{field:f4(h.field),op:"IS_NAN"}};if(Hs(h.value))return{unaryFilter:{field:f4(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ms(h.value))return{unaryFilter:{field:f4(h.field),op:"IS_NOT_NAN"}};if(Hs(h.value))return{unaryFilter:{field:f4(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:f4(h.field),op:Gy(h.op),value:h.value}}}(f));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(c.filters);t&&(a.structuredQuery.where=t);const r=function(o){if(o.length!==0)return o.map(l=>function(f){return{field:f4(f.field),direction:Uy(f.dir)}}(l))}(c.orderBy);r&&(a.structuredQuery.orderBy=r);const n=function(o,l){return o.gt||a0(l)?l:{value:l}}(e,c.limit);var i;return n!==null&&(a.structuredQuery.limit=n),c.startAt&&(a.structuredQuery.startAt={before:(i=c.startAt).inclusive,values:i.position}),c.endAt&&(a.structuredQuery.endAt=function(o){return{before:!o.inclusive,values:o.position}}(c.endAt)),a}function qy(e){let c=Ry(e.parent);const a=e.structuredQuery,s=a.from?a.from.length:0;let t=null;if(s>0){I1(s===1);const f=a.from[0];f.allDescendants?t=f.collectionId:c=c.child(f.collectionId)}let r=[];a.where&&(r=gi(a.where));let n=[];a.orderBy&&(n=a.orderBy.map(f=>function(h){return new m6(v4(h.field),function(u){switch(u){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(f)));let i=null;a.limit&&(i=function(f){let h;return h=typeof f=="object"?f.value:f,a0(h)?null:h}(a.limit));let o=null;a.startAt&&(o=function(f){const h=!!f.before,u=f.values||[];return new u5(u,h)}(a.startAt));let l=null;return a.endAt&&(l=function(f){const h=!f.before,u=f.values||[];return new u5(u,h)}(a.endAt)),uy(c,t,n,r,i,"F",o,l)}function $y(e,c){const a=function(s,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return c1()}}(0,c.purpose);return a==null?null:{"goog-listen-tags":a}}function gi(e){return e?e.unaryFilter!==void 0?[Wy(e)]:e.fieldFilter!==void 0?[jy(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(c=>gi(c)).reduce((c,a)=>c.concat(a)):c1():[]}function Uy(e){return Ty[e]}function Gy(e){return Ey[e]}function f4(e){return{fieldPath:e.canonicalString()}}function v4(e){return u2.fromServerFormat(e.fieldPath)}function jy(e){return m2.create(v4(e.fieldFilter.field),function(c){switch(c){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return c1()}}(e.fieldFilter.op),e.fieldFilter.value)}function Wy(e){switch(e.unaryFilter.op){case"IS_NAN":const c=v4(e.unaryFilter.field);return m2.create(c,"==",{doubleValue:NaN});case"IS_NULL":const a=v4(e.unaryFilter.field);return m2.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=v4(e.unaryFilter.field);return m2.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const t=v4(e.unaryFilter.field);return m2.create(t,"!=",{nullValue:"NULL_VALUE"});default:return c1()}}function Li(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(c,a,s,t){this.batchId=c,this.localWriteTime=a,this.baseMutations=s,this.mutations=t}applyToRemoteDocument(c,a){const s=a.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(c.key)&&by(r,c,s[t])}}applyToLocalView(c,a){for(const s of this.baseMutations)s.key.isEqual(c.key)&&(a=v6(s,c,a,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(c.key)&&(a=v6(s,c,a,this.localWriteTime));return a}applyToLocalDocumentSet(c,a){const s=pi();return this.mutations.forEach(t=>{const r=c.get(t.key),n=r.overlayedDocument;let i=this.applyToLocalView(n,r.mutatedFields);i=a.has(t.key)?null:i;const o=ui(n,i);o!==null&&s.set(t.key,o),n.isValidDocument()||n.convertToNoDocument(a1.min())}),s}keys(){return this.mutations.reduce((c,a)=>c.add(a.key),o1())}isEqual(c){return this.batchId===c.batchId&&E4(this.mutations,c.mutations,(a,s)=>ys(a,s))&&E4(this.baseMutations,c.baseMutations,(a,s)=>ys(a,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(c,a){this.largestBatchId=c,this.mutation=a}getKey(){return this.mutation.key}isEqual(c){return c!==null&&this.mutation===c.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(c,a,s,t,r=a1.min(),n=a1.min(),i=t2.EMPTY_BYTE_STRING){this.target=c,this.targetId=a,this.purpose=s,this.sequenceNumber=t,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=n,this.resumeToken=i}withSequenceNumber(c){return new Q3(this.target,this.targetId,this.purpose,c,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(c,a){return new Q3(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,c)}withLastLimboFreeSnapshotVersion(c){return new Q3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,c,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(c){this.re=c}}function Qy(e){const c=qy({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?K7(c,c.limit,"L"):c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.Ye=new Jy}addToCollectionParentIndex(c,a){return this.Ye.add(a),x.resolve()}getCollectionParents(c,a){return x.resolve(this.Ye.getEntries(a))}addFieldIndex(c,a){return x.resolve()}deleteFieldIndex(c,a){return x.resolve()}getDocumentsMatchingTarget(c,a){return x.resolve(null)}getIndexType(c,a){return x.resolve(0)}getFieldIndexes(c,a){return x.resolve([])}getNextCollectionGroupToUpdate(c){return x.resolve(null)}getMinOffset(c,a){return x.resolve(g3.min())}getMinOffsetFromCollectionGroup(c,a){return x.resolve(g3.min())}updateCollectionGroup(c,a,s){return x.resolve()}updateIndexEntries(c,a){return x.resolve()}}class Jy{constructor(){this.index={}}add(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a]||new F1(w1.comparator),r=!t.has(s);return this.index[a]=t.add(s),r}has(c){const a=c.lastSegment(),s=c.popLast(),t=this.index[a];return t&&t.has(s)}getEntries(c){return(this.index[c]||new F1(w1.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(c){this.bn=c}next(){return this.bn+=2,this.bn}static Pn(){return new I4(0)}static vn(){return new I4(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.changes=new j4(c=>c.toString(),(c,a)=>c.isEqual(a)),this.changesApplied=!1}addEntry(c){this.assertNotApplied(),this.changes.set(c.key,c)}removeEntry(c,a){this.assertNotApplied(),this.changes.set(c,Z1.newInvalidDocument(c).setReadTime(a))}getEntry(c,a){this.assertNotApplied();const s=this.changes.get(a);return s!==void 0?x.resolve(s):this.getFromCache(c,a)}getEntries(c,a){return this.getAllFromCache(c,a)}apply(c){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(c)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(c,a){this.overlayedDocument=c,this.mutatedFields=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(c,a,s,t){this.remoteDocumentCache=c,this.mutationQueue=a,this.documentOverlayCache=s,this.indexManager=t}getDocument(c,a){let s=null;return this.documentOverlayCache.getOverlay(c,a).next(t=>(s=t,this.getBaseDocument(c,a,s))).next(t=>(s!==null&&v6(s.mutation,t,Z3.empty(),v2.now()),t))}getDocuments(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.getLocalViewOfDocuments(c,s,o1()).next(()=>s))}getLocalViewOfDocuments(c,a,s=o1()){const t=O3();return this.populateOverlays(c,t,a).next(()=>this.computeViews(c,a,t,s).next(r=>{let n=s6();return r.forEach((i,o)=>{n=n.insert(i,o.overlayedDocument)}),n}))}getOverlayedDocuments(c,a){const s=O3();return this.populateOverlays(c,s,a).next(()=>this.computeViews(c,a,s,o1()))}populateOverlays(c,a,s){const t=[];return s.forEach(r=>{a.has(r)||t.push(r)}),this.documentOverlayCache.getOverlays(c,t).next(r=>{r.forEach((n,i)=>{a.set(n,i)})})}computeViews(c,a,s,t){let r=b3();const n=C6(),i=C6();return a.forEach((o,l)=>{const f=s.get(l.key);t.has(l.key)&&(f===void 0||f.mutation instanceof n0)?r=r.insert(l.key,l):f!==void 0&&(n.set(l.key,f.mutation.getFieldMask()),v6(f.mutation,l,f.mutation.getFieldMask(),v2.now()))}),this.recalculateAndSaveOverlays(c,r).next(o=>(o.forEach((l,f)=>n.set(l,f)),a.forEach((l,f)=>{var h;return i.set(l,new eS(f,(h=n.get(l))!==null&&h!==void 0?h:null))}),i))}recalculateAndSaveOverlays(c,a){const s=C6();let t=new j1((n,i)=>n-i),r=o1();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(c,a).next(n=>{for(const i of n)i.keys().forEach(o=>{const l=a.get(o);if(l===null)return;let f=s.get(o)||Z3.empty();f=i.applyToLocalView(l,f),s.set(o,f);const h=(t.get(i.batchId)||o1()).add(o);t=t.insert(i.batchId,h)})}).next(()=>{const n=[],i=t.getReverseIterator();for(;i.hasNext();){const o=i.getNext(),l=o.key,f=o.value,h=pi();f.forEach(u=>{if(!r.has(u)){const C=ui(a.get(u),s.get(u));C!==null&&h.set(u,C),r=r.add(u)}}),n.push(this.documentOverlayCache.saveOverlays(c,l,h))}return x.waitFor(n)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(c,a){return this.remoteDocumentCache.getEntries(c,a).next(s=>this.recalculateAndSaveOverlays(c,s))}getDocumentsMatchingQuery(c,a,s){return function(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(c,a.path):Cy(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,s):this.getDocumentsMatchingCollectionQuery(c,a,s)}getNextDocuments(c,a,s,t){return this.remoteDocumentCache.getAllFromCollectionGroup(c,a,s,t).next(r=>{const n=t-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(c,a,s.largestBatchId,t-r.size):x.resolve(O3());let i=-1,o=r;return n.next(l=>x.forEach(l,(f,h)=>(i<h.largestBatchId&&(i=h.largestBatchId),r.get(f)?x.resolve():this.getBaseDocument(c,f,h).next(u=>{o=o.insert(f,u)}))).next(()=>this.populateOverlays(c,l,r)).next(()=>this.computeViews(c,o,l,o1())).next(f=>({batchId:i,changes:Ny(f)})))})}getDocumentsMatchingDocumentQuery(c,a){return this.getDocument(c,new j(a)).next(s=>{let t=s6();return s.isFoundDocument()&&(t=t.insert(s.key,s)),t})}getDocumentsMatchingCollectionGroupQuery(c,a,s){const t=a.collectionGroup;let r=s6();return this.indexManager.getCollectionParents(c,t).next(n=>x.forEach(n,i=>{const o=function(l,f){return new s0(f,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(a,i.child(t));return this.getDocumentsMatchingCollectionQuery(c,o,s).next(l=>{l.forEach((f,h)=>{r=r.insert(f,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(c,a,s){let t;return this.remoteDocumentCache.getAllFromCollection(c,a.path,s).next(r=>(t=r,this.documentOverlayCache.getOverlaysForCollection(c,a.path,s.largestBatchId))).next(r=>{r.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,Z1.newInvalidDocument(l)))});let n=s6();return t.forEach((i,o)=>{const l=r.get(i);l!==void 0&&v6(l.mutation,o,Z3.empty(),v2.now()),dc(a,o)&&(n=n.insert(i,o))}),n})}getBaseDocument(c,a,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(c,a):x.resolve(Z1.newInvalidDocument(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(c){this.It=c,this.Zn=new Map,this.ts=new Map}getBundleMetadata(c,a){return x.resolve(this.Zn.get(a))}saveBundleMetadata(c,a){var s;return this.Zn.set(a.id,{id:(s=a).id,version:s.version,createTime:R6(s.createTime)}),x.resolve()}getNamedQuery(c,a){return x.resolve(this.ts.get(a))}saveNamedQuery(c,a){return this.ts.set(a.name,function(s){return{name:s.name,query:Qy(s.bundledQuery),readTime:R6(s.readTime)}}(a)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.overlays=new j1(j.comparator),this.es=new Map}getOverlay(c,a){return x.resolve(this.overlays.get(a))}getOverlays(c,a){const s=O3();return x.forEach(a,t=>this.getOverlay(c,t).next(r=>{r!==null&&s.set(t,r)})).next(()=>s)}saveOverlays(c,a,s){return s.forEach((t,r)=>{this.ue(c,a,r)}),x.resolve()}removeOverlaysForBatchId(c,a,s){const t=this.es.get(s);return t!==void 0&&(t.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),x.resolve()}getOverlaysForCollection(c,a,s){const t=O3(),r=a.length+1,n=new j(a.child("")),i=this.overlays.getIteratorFrom(n);for(;i.hasNext();){const o=i.getNext().value,l=o.getKey();if(!a.isPrefixOf(l.path))break;l.path.length===r&&o.largestBatchId>s&&t.set(o.getKey(),o)}return x.resolve(t)}getOverlaysForCollectionGroup(c,a,s,t){let r=new j1((l,f)=>l-f);const n=this.overlays.getIterator();for(;n.hasNext();){const l=n.getNext().value;if(l.getKey().getCollectionGroup()===a&&l.largestBatchId>s){let f=r.get(l.largestBatchId);f===null&&(f=O3(),r=r.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const i=O3(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>i.set(l,f)),!(i.size()>=t)););return x.resolve(i)}ue(c,a,s){const t=this.overlays.get(s.key);if(t!==null){const n=this.es.get(t.largestBatchId).delete(s.key);this.es.set(t.largestBatchId,n)}this.overlays=this.overlays.insert(s.key,new Zy(a,s));let r=this.es.get(a);r===void 0&&(r=o1(),this.es.set(a,r)),this.es.set(a,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.ns=new F1($1.ss),this.rs=new F1($1.os)}isEmpty(){return this.ns.isEmpty()}addReference(c,a){const s=new $1(c,a);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(c,a){c.forEach(s=>this.addReference(s,a))}removeReference(c,a){this.cs(new $1(c,a))}hs(c,a){c.forEach(s=>this.removeReference(s,a))}ls(c){const a=new j(new w1([])),s=new $1(a,c),t=new $1(a,c+1),r=[];return this.rs.forEachInRange([s,t],n=>{this.cs(n),r.push(n.key)}),r}fs(){this.ns.forEach(c=>this.cs(c))}cs(c){this.ns=this.ns.delete(c),this.rs=this.rs.delete(c)}ds(c){const a=new j(new w1([])),s=new $1(a,c),t=new $1(a,c+1);let r=o1();return this.rs.forEachInRange([s,t],n=>{r=r.add(n.key)}),r}containsKey(c){const a=new $1(c,0),s=this.ns.firstAfterOrEqual(a);return s!==null&&c.isEqual(s.key)}}class $1{constructor(c,a){this.key=c,this._s=a}static ss(c,a){return j.comparator(c.key,a.key)||v1(c._s,a._s)}static os(c,a){return v1(c._s,a._s)||j.comparator(c.key,a.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(c,a){this.indexManager=c,this.referenceDelegate=a,this.mutationQueue=[],this.ws=1,this.gs=new F1($1.ss)}checkEmpty(c){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(c,a,s,t){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const n=new Ky(r,a,s,t);this.mutationQueue.push(n);for(const i of t)this.gs=this.gs.add(new $1(i.key,r)),this.indexManager.addToCollectionParentIndex(c,i.key.path.popLast());return x.resolve(n)}lookupMutationBatch(c,a){return x.resolve(this.ys(a))}getNextMutationBatchAfterBatchId(c,a){const s=a+1,t=this.ps(s),r=t<0?0:t;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(c){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(c,a){const s=new $1(a,0),t=new $1(a,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,t],n=>{const i=this.ys(n._s);r.push(i)}),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(c,a){let s=new F1(v1);return a.forEach(t=>{const r=new $1(t,0),n=new $1(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,n],i=>{s=s.add(i._s)})}),x.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(c,a){const s=a.path,t=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const n=new $1(new j(r),0);let i=new F1(v1);return this.gs.forEachWhile(o=>{const l=o.key.path;return!!s.isPrefixOf(l)&&(l.length===t&&(i=i.add(o._s)),!0)},n),x.resolve(this.Is(i))}Is(c){const a=[];return c.forEach(s=>{const t=this.ys(s);t!==null&&a.push(t)}),a}removeMutationBatch(c,a){I1(this.Ts(a.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return x.forEach(a.mutations,t=>{const r=new $1(t.key,a.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(c,t.key)}).next(()=>{this.gs=s})}An(c){}containsKey(c,a){const s=new $1(a,0),t=this.gs.firstAfterOrEqual(s);return x.resolve(a.isEqual(t&&t.key))}performConsistencyCheck(c){return this.mutationQueue.length,x.resolve()}Ts(c,a){return this.ps(c)}ps(c){return this.mutationQueue.length===0?0:c-this.mutationQueue[0].batchId}ys(c){const a=this.ps(c);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(c){this.Es=c,this.docs=new j1(j.comparator),this.size=0}setIndexManager(c){this.indexManager=c}addEntry(c,a){const s=a.key,t=this.docs.get(s),r=t?t.size:0,n=this.Es(a);return this.docs=this.docs.insert(s,{document:a.mutableCopy(),size:n}),this.size+=n-r,this.indexManager.addToCollectionParentIndex(c,s.path.popLast())}removeEntry(c){const a=this.docs.get(c);a&&(this.docs=this.docs.remove(c),this.size-=a.size)}getEntry(c,a){const s=this.docs.get(a);return x.resolve(s?s.document.mutableCopy():Z1.newInvalidDocument(a))}getEntries(c,a){let s=b3();return a.forEach(t=>{const r=this.docs.get(t);s=s.insert(t,r?r.document.mutableCopy():Z1.newInvalidDocument(t))}),x.resolve(s)}getAllFromCollection(c,a,s){let t=b3();const r=new j(a.child("")),n=this.docs.getIteratorFrom(r);for(;n.hasNext();){const{key:i,value:{document:o}}=n.getNext();if(!a.isPrefixOf(i.path))break;i.path.length>a.length+1||Zx(Kx(o),s)<=0||(t=t.insert(o.key,o.mutableCopy()))}return x.resolve(t)}getAllFromCollectionGroup(c,a,s,t){c1()}As(c,a){return x.forEach(this.docs,s=>a(s))}newChangeBuffer(c){return new iS(this)}getSize(c){return x.resolve(this.size)}}class iS extends cS{constructor(c){super(),this.Yn=c}applyChanges(c){const a=[];return this.changes.forEach((s,t)=>{t.isValidDocument()?a.push(this.Yn.addEntry(c,t)):this.Yn.removeEntry(s)}),x.waitFor(a)}getFromCache(c,a){return this.Yn.getEntry(c,a)}getAllFromCache(c,a){return this.Yn.getEntries(c,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(c){this.persistence=c,this.Rs=new j4(a=>Cc(a),pc),this.lastRemoteSnapshotVersion=a1.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Mc,this.targetCount=0,this.vs=I4.Pn()}forEachTarget(c,a){return this.Rs.forEach((s,t)=>a(t)),x.resolve()}getLastRemoteSnapshotVersion(c){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(c){return x.resolve(this.bs)}allocateTargetId(c){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(c,a,s){return s&&(this.lastRemoteSnapshotVersion=s),a>this.bs&&(this.bs=a),x.resolve()}Dn(c){this.Rs.set(c.target,c);const a=c.targetId;a>this.highestTargetId&&(this.vs=new I4(a),this.highestTargetId=a),c.sequenceNumber>this.bs&&(this.bs=c.sequenceNumber)}addTargetData(c,a){return this.Dn(a),this.targetCount+=1,x.resolve()}updateTargetData(c,a){return this.Dn(a),x.resolve()}removeTargetData(c,a){return this.Rs.delete(a.target),this.Ps.ls(a.targetId),this.targetCount-=1,x.resolve()}removeTargets(c,a,s){let t=0;const r=[];return this.Rs.forEach((n,i)=>{i.sequenceNumber<=a&&s.get(i.targetId)===null&&(this.Rs.delete(n),r.push(this.removeMatchingKeysForTargetId(c,i.targetId)),t++)}),x.waitFor(r).next(()=>t)}getTargetCount(c){return x.resolve(this.targetCount)}getTargetData(c,a){const s=this.Rs.get(a)||null;return x.resolve(s)}addMatchingKeys(c,a,s){return this.Ps.us(a,s),x.resolve()}removeMatchingKeys(c,a,s){this.Ps.hs(a,s);const t=this.persistence.referenceDelegate,r=[];return t&&a.forEach(n=>{r.push(t.markPotentiallyOrphaned(c,n))}),x.waitFor(r)}removeMatchingKeysForTargetId(c,a){return this.Ps.ls(a),x.resolve()}getMatchingKeysForTargetId(c,a){const s=this.Ps.ds(a);return x.resolve(s)}containsKey(c,a){return x.resolve(this.Ps.containsKey(a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(c,a){this.Vs={},this.overlays={},this.Ss=new mc(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=c(this),this.Cs=new oS(this),this.indexManager=new Xy,this.remoteDocumentCache=function(s){return new nS(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Yy(a),this.Ns=new sS(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(c){return this.indexManager}getDocumentOverlayCache(c){let a=this.overlays[c.toKey()];return a||(a=new tS,this.overlays[c.toKey()]=a),a}getMutationQueue(c,a){let s=this.Vs[c.toKey()];return s||(s=new rS(a,this.referenceDelegate),this.Vs[c.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(c,a,s){O("MemoryPersistence","Starting transaction:",c);const t=new fS(this.Ss.next());return this.referenceDelegate.ks(),s(t).next(r=>this.referenceDelegate.Os(t).next(()=>r)).toPromise().then(r=>(t.raiseOnCommittedEvent(),r))}Ms(c,a){return x.or(Object.values(this.Vs).map(s=>()=>s.containsKey(c,a)))}}class fS extends Qx{constructor(c){super(),this.currentSequenceNumber=c}}class Vc{constructor(c){this.persistence=c,this.Fs=new Mc,this.$s=null}static Bs(c){return new Vc(c)}get Ls(){if(this.$s)return this.$s;throw c1()}addReference(c,a,s){return this.Fs.addReference(s,a),this.Ls.delete(s.toString()),x.resolve()}removeReference(c,a,s){return this.Fs.removeReference(s,a),this.Ls.add(s.toString()),x.resolve()}markPotentiallyOrphaned(c,a){return this.Ls.add(a.toString()),x.resolve()}removeTarget(c,a){this.Fs.ls(a.targetId).forEach(t=>this.Ls.add(t.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(c,a.targetId).next(t=>{t.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(c,a))}ks(){this.$s=new Set}Os(c){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,s=>{const t=j.fromPath(s);return this.Us(c,t).next(r=>{r||a.removeEntry(t,a1.min())})}).next(()=>(this.$s=null,a.apply(c)))}updateLimboDocument(c,a){return this.Us(c,a).next(s=>{s?this.Ls.delete(a.toString()):this.Ls.add(a.toString())})}xs(c){return 0}Us(c,a){return x.or([()=>x.resolve(this.Fs.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(c,a),()=>this.persistence.Ms(c,a)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(c,a,s,t){this.targetId=c,this.fromCache=a,this.Si=s,this.Di=t}static Ci(c,a){let s=o1(),t=o1();for(const r of a.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:t=t.add(r.doc.key)}return new gc(c,a.fromCache,s,t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.xi=!1}initialize(c,a){this.Ni=c,this.indexManager=a,this.xi=!0}getDocumentsMatchingQuery(c,a,s,t){return this.ki(c,a).next(r=>r||this.Oi(c,a,t,s)).next(r=>r||this.Mi(c,a))}ki(c,a){if(bs(a))return x.resolve(null);let s=e3(a);return this.indexManager.getIndexType(c,s).next(t=>t===0?null:(a.limit!==null&&t===1&&(a=K7(a,null,"F"),s=e3(a)),this.indexManager.getDocumentsMatchingTarget(c,s).next(r=>{const n=o1(...r);return this.Ni.getDocuments(c,n).next(i=>this.indexManager.getMinOffset(c,s).next(o=>{const l=this.Fi(a,i);return this.$i(a,l,n,o.readTime)?this.ki(c,K7(a,null,"F")):this.Bi(c,l,a,o)}))})))}Oi(c,a,s,t){return bs(a)||t.isEqual(a1.min())?this.Mi(c,a):this.Ni.getDocuments(c,s).next(r=>{const n=this.Fi(a,r);return this.$i(a,n,s,t)?this.Mi(c,a):(Cs()<=u1.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",t.toString(),Z7(a)),this.Bi(c,n,a,Wx(t,-1)))})}Fi(c,a){let s=new F1(oi(c));return a.forEach((t,r)=>{dc(c,r)&&(s=s.add(r))}),s}$i(c,a,s,t){if(c.limit===null)return!1;if(s.size!==a.size)return!0;const r=c.limitType==="F"?a.last():a.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(t)>0)}Mi(c,a){return Cs()<=u1.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Z7(a)),this.Ni.getDocumentsMatchingQuery(c,a,g3.min())}Bi(c,a,s,t){return this.Ni.getDocumentsMatchingQuery(c,s,t).next(r=>(a.forEach(n=>{r=r.insert(n.key,n)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(c,a,s,t){this.persistence=c,this.Li=a,this.It=t,this.Ui=new j1(v1),this.qi=new j4(r=>Cc(r),pc),this.Ki=new Map,this.Gi=c.getRemoteDocumentCache(),this.Cs=c.getTargetCache(),this.Ns=c.getBundleCache(),this.Qi(s)}Qi(c){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(c),this.indexManager=this.persistence.getIndexManager(c),this.mutationQueue=this.persistence.getMutationQueue(c,this.indexManager),this.localDocuments=new aS(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(c){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>c.collect(a,this.Ui))}}function mS(e,c,a,s){return new uS(e,c,a,s)}async function bi(e,c){const a=f1(e);return await a.persistence.runTransaction("Handle user change","readonly",s=>{let t;return a.mutationQueue.getAllMutationBatches(s).next(r=>(t=r,a.Qi(c),a.mutationQueue.getAllMutationBatches(s))).next(r=>{const n=[],i=[];let o=o1();for(const l of t){n.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return a.localDocuments.getDocuments(s,o).next(l=>({ji:l,removedBatchIds:n,addedBatchIds:i}))})})}function xi(e){const c=f1(e);return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Cs.getLastRemoteSnapshotVersion(a))}function vS(e,c){const a=f1(e),s=c.snapshotVersion;let t=a.Ui;return a.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const n=a.Gi.newChangeBuffer({trackRemovals:!0});t=a.Ui;const i=[];c.targetChanges.forEach((f,h)=>{const u=t.get(h);if(!u)return;i.push(a.Cs.removeMatchingKeys(r,f.removedDocuments,h).next(()=>a.Cs.addMatchingKeys(r,f.addedDocuments,h)));let C=u.withSequenceNumber(r.currentSequenceNumber);c.targetMismatches.has(h)?C=C.withResumeToken(t2.EMPTY_BYTE_STRING,a1.min()).withLastLimboFreeSnapshotVersion(a1.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,s)),t=t.insert(h,C),function(z,L,k){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(u,C,f)&&i.push(a.Cs.updateTargetData(r,C))});let o=b3(),l=o1();if(c.documentUpdates.forEach(f=>{c.resolvedLimboDocuments.has(f)&&i.push(a.persistence.referenceDelegate.updateLimboDocument(r,f))}),i.push(CS(r,n,c.documentUpdates).next(f=>{o=f.Wi,l=f.zi})),!s.isEqual(a1.min())){const f=a.Cs.getLastRemoteSnapshotVersion(r).next(h=>a.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));i.push(f)}return x.waitFor(i).next(()=>n.apply(r)).next(()=>a.localDocuments.getLocalViewOfDocuments(r,o,l)).next(()=>o)}).then(r=>(a.Ui=t,r))}function CS(e,c,a){let s=o1(),t=o1();return a.forEach(r=>s=s.add(r)),c.getEntries(e,s).next(r=>{let n=b3();return a.forEach((i,o)=>{const l=r.get(i);o.isFoundDocument()!==l.isFoundDocument()&&(t=t.add(i)),o.isNoDocument()&&o.version.isEqual(a1.min())?(c.removeEntry(i,o.readTime),n=n.insert(i,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(c.addEntry(o),n=n.insert(i,o)):O("LocalStore","Ignoring outdated watch update for ",i,". Current version:",l.version," Watch version:",o.version)}),{Wi:n,zi:t}})}function pS(e,c){const a=f1(e);return a.persistence.runTransaction("Allocate target","readwrite",s=>{let t;return a.Cs.getTargetData(s,c).next(r=>r?(t=r,x.resolve(t)):a.Cs.allocateTargetId(s).next(n=>(t=new Q3(c,n,0,s.currentSequenceNumber),a.Cs.addTargetData(s,t).next(()=>t))))}).then(s=>{const t=a.Ui.get(s.targetId);return(t===null||s.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(a.Ui=a.Ui.insert(s.targetId,s),a.qi.set(c,s.targetId)),s})}async function J7(e,c,a){const s=f1(e),t=s.Ui.get(c),r=a?"readwrite":"readwrite-primary";try{a||await s.persistence.runTransaction("Release target",r,n=>s.persistence.referenceDelegate.removeTarget(n,t))}catch(n){if(!a8(n))throw n;O("LocalStore",`Failed to update sequence numbers for target ${c}: ${n}`)}s.Ui=s.Ui.remove(c),s.qi.delete(t.target)}function Es(e,c,a){const s=f1(e);let t=a1.min(),r=o1();return s.persistence.runTransaction("Execute query","readonly",n=>function(i,o,l){const f=f1(i),h=f.qi.get(l);return h!==void 0?x.resolve(f.Ui.get(h)):f.Cs.getTargetData(o,l)}(s,n,e3(c)).next(i=>{if(i)return t=i.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(n,i.targetId).next(o=>{r=o})}).next(()=>s.Li.getDocumentsMatchingQuery(n,c,a?t:a1.min(),a?r:o1())).next(i=>(dS(s,py(c),i),{documents:i,Hi:r})))}function dS(e,c,a){let s=e.Ki.get(c)||a1.min();a.forEach((t,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Ki.set(c,s)}class Ps{constructor(){this.activeTargetIds=di()}er(c){this.activeTargetIds=this.activeTargetIds.add(c)}nr(c){this.activeTargetIds=this.activeTargetIds.delete(c)}tr(){const c={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(c)}}class zS{constructor(){this.Lr=new Ps,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(c){}updateMutationState(c,a,s){}addLocalQueryTarget(c){return this.Lr.er(c),this.Ur[c]||"not-current"}updateQueryState(c,a,s){this.Ur[c]=a}removeLocalQueryTarget(c){this.Lr.nr(c)}isLocalQueryTarget(c){return this.Lr.activeTargetIds.has(c)}clearQueryState(c){delete this.Ur[c]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(c){return this.Lr.activeTargetIds.has(c)}start(){return this.Lr=new Ps,Promise.resolve()}handleUserChange(c,a,s){}setOnlineState(c){}shutdown(){}writeSequenceNumber(c){}notifyBundleLoaded(c){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{qr(c){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(c){this.Wr.push(c)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const c of this.Wr)c(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const c of this.Wr)c(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(c){this.Hr=c.Hr,this.Jr=c.Jr}Yr(c){this.Xr=c}Zr(c){this.eo=c}onMessage(c){this.no=c}close(){this.Jr()}send(c){this.Hr(c)}so(){this.Xr()}io(c){this.eo(c)}ro(c){this.no(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends class{constructor(c){this.databaseInfo=c,this.databaseId=c.databaseId;const a=c.ssl?"https":"http";this.oo=a+"://"+c.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(c,a,s,t,r){const n=this.ho(c,a);O("RestConnection","Sending: ",n,s);const i={};return this.lo(i,t,r),this.fo(c,n,i,s).then(o=>(O("RestConnection","Received: ",o),o),o=>{throw $7("RestConnection",`${c} failed with error: `,o,"url: ",n,"request:",s),o})}_o(c,a,s,t,r,n){return this.ao(c,a,s,t,r)}lo(c,a,s){c["X-Goog-Api-Client"]="gl-js/ fire/"+G4,c["Content-Type"]="text/plain",this.databaseInfo.appId&&(c["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((t,r)=>c[r]=t),s&&s.headers.forEach((t,r)=>c[r]=t)}ho(c,a){const s=MS[c];return`${this.oo}/v1/${a}:${s}`}}{constructor(c){super(c),this.forceLongPolling=c.forceLongPolling,this.autoDetectLongPolling=c.autoDetectLongPolling,this.useFetchStreams=c.useFetchStreams}fo(c,a,s,t){return new Promise((r,n)=>{const i=new Ix;i.setWithCredentials(!0),i.listenOnce(Ex.COMPLETE,()=>{var l;try{switch(i.getLastErrorCode()){case c7.NO_ERROR:const f=i.getResponseJson();O("Connection","XHR received:",JSON.stringify(f)),r(f);break;case c7.TIMEOUT:O("Connection",'RPC "'+c+'" timed out'),n(new K(E.DEADLINE_EXCEEDED,"Request time out"));break;case c7.HTTP_ERROR:const h=i.getStatus();if(O("Connection",'RPC "'+c+'" failed with status:',h,"response text:",i.getResponseText()),h>0){let u=i.getResponseJson();Array.isArray(u)&&(u=u[0]);const C=(l=u)===null||l===void 0?void 0:l.error;if(C&&C.status&&C.message){const z=function(L){const k=L.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(k)>=0?k:E.UNKNOWN}(C.status);n(new K(z,C.message))}else n(new K(E.UNKNOWN,"Server responded with status "+i.getStatus()))}else n(new K(E.UNAVAILABLE,"Connection failed."));break;default:c1()}}finally{O("Connection",'RPC "'+c+'" completed.')}});const o=JSON.stringify(t);i.send(a,"POST",o,s,15)})}wo(c,a,s){const t=[this.oo,"/","google.firestore.v1.Firestore","/",c,"/channel"],r=Ax(),n=Tx(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(i.xmlHttpFactory=new _x({})),this.lo(i.initMessageHeaders,a,s),i.encodeInitMessageHeaders=!0;const o=t.join("");O("Connection","Creating WebChannel: "+o,i);const l=r.createWebChannel(o,i);let f=!1,h=!1;const u=new VS({Hr:z=>{h?O("Connection","Not sending because WebChannel is closed:",z):(f||(O("Connection","Opening WebChannel transport."),l.open(),f=!0),O("Connection","WebChannel sending:",z),l.send(z))},Jr:()=>l.close()}),C=(z,L,k)=>{z.listen(L,d=>{try{k(d)}catch(M){setTimeout(()=>{throw M},0)}})};return C(l,b8.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),C(l,b8.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),u.io())}),C(l,b8.EventType.ERROR,z=>{h||(h=!0,$7("Connection","WebChannel transport errored:",z),u.io(new K(E.UNAVAILABLE,"The operation could not be completed")))}),C(l,b8.EventType.MESSAGE,z=>{var L;if(!h){const k=z.data[0];I1(!!k);const d=k,M=d.error||((L=d[0])===null||L===void 0?void 0:L.error);if(M){O("Connection","WebChannel received error:",M);const y=M.status;let B=function(l1){const W=P1[l1];if(W!==void 0)return vi(W)}(y),G=M.message;B===void 0&&(B=E.INTERNAL,G="Unknown error status: "+y+" with message "+M.message),h=!0,u.io(new K(B,G)),l.close()}else O("Connection","WebChannel received:",k),u.ro(k)}}),C(n,Px.STAT_EVENT,z=>{z.stat===ms.PROXY?O("Connection","Detected buffering proxy"):z.stat===ms.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{u.so()},0),u}}function s7(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e){return new Py(e,!0)}class Si{constructor(c,a,s=1e3,t=1.5,r=6e4){this.Hs=c,this.timerId=a,this.mo=s,this.yo=t,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(c){this.cancel();const a=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),t=Math.max(0,a-s);t>0&&O("ExponentialBackoff",`Backing off for ${t} ms (base delay: ${this.Io} ms, delay with jitter: ${a} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,t,()=>(this.Eo=Date.now(),c())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(c,a,s,t,r,n,i,o){this.Hs=c,this.vo=s,this.Vo=t,this.connection=r,this.authCredentialsProvider=n,this.appCheckCredentialsProvider=i,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Si(c,a)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(c){this.Lo(),this.stream.send(c)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(c,a){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,c!==4?this.xo.reset():a&&a.code===E.RESOURCE_EXHAUSTED?(c3(a.toString()),c3("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):a&&a.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=c,await this.listener.Zr(a)}qo(){}auth(){this.state=1;const c=this.Ko(this.So),a=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,t])=>{this.So===a&&this.Go(s,t)},s=>{c(()=>{const t=new K(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(t)})})}Go(c,a){const s=this.Ko(this.So);this.stream=this.jo(c,a),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(t=>{s(()=>this.Qo(t))}),this.stream.onMessage(t=>{s(()=>this.onMessage(t))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(c){return O("PersistentStream",`close with error: ${c}`),this.stream=null,this.close(4,c)}Ko(c){return a=>{this.Hs.enqueueAndForget(()=>this.So===c?a():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bS extends LS{constructor(c,a,s,t,r,n){super(c,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,s,t,n),this.It=r}jo(c,a){return this.connection.wo("Listen",c,a)}onMessage(c){this.xo.reset();const a=Fy(this.It,c),s=function(t){if(!("targetChange"in t))return a1.min();const r=t.targetChange;return r.targetIds&&r.targetIds.length?a1.min():r.readTime?R6(r.readTime):a1.min()}(c);return this.listener.Wo(a,s)}zo(c){const a={};a.database=Ts(this.It),a.addTarget=function(t,r){let n;const i=r.target;return n=W7(i)?{documents:By(t,i)}:{query:Oy(t,i)},n.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?n.resumeToken=Iy(t,r.resumeToken):r.snapshotVersion.compareTo(a1.min())>0&&(n.readTime=_y(t,r.snapshotVersion.toTimestamp())),n}(this.It,c);const s=$y(this.It,c);s&&(a.labels=s),this.Bo(a)}Ho(c){const a={};a.database=Ts(this.It),a.removeTarget=c,this.Bo(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS extends class{}{constructor(c,a,s,t){super(),this.authCredentials=c,this.appCheckCredentials=a,this.connection=s,this.It=t,this.nu=!1}su(){if(this.nu)throw new K(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(c,a,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([t,r])=>this.connection.ao(c,a,s,t,r)).catch(t=>{throw t.name==="FirebaseError"?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new K(E.UNKNOWN,t.toString())})}_o(c,a,s,t){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,n])=>this.connection._o(c,a,s,r,n,t)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(E.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class yS{constructor(c,a){this.asyncQueue=c,this.onlineStateHandler=a,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(c){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${c.toString()}`),this.cu("Offline")))}set(c){this.lu(),this.iu=0,c==="Online"&&(this.ou=!1),this.cu(c)}cu(c){c!==this.state&&(this.state=c,this.onlineStateHandler(c))}au(c){const a=`Could not reach Cloud Firestore backend. ${c}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(c3(a),this.ou=!1):O("OnlineStateTracker",a)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(c,a,s,t,r){this.localStore=c,this.datastore=a,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(n=>{s.enqueueAndForget(async()=>{r8(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(i){const o=f1(i);o._u.add(4),await t8(o),o.gu.set("Unknown"),o._u.delete(4),await o0(o)}(this))})}),this.gu=new yS(s,t)}}async function o0(e){if(r8(e))for(const c of e.wu)await c(!0)}async function t8(e){for(const c of e.wu)await c(!1)}function Ni(e,c){const a=f1(e);a.du.has(c.targetId)||(a.du.set(c.targetId,c),xc(a)?bc(a):W4(a).ko()&&Lc(a,c))}function wi(e,c){const a=f1(e),s=W4(a);a.du.delete(c),s.ko()&&ki(a,c),a.du.size===0&&(s.ko()?s.Fo():r8(a)&&a.gu.set("Unknown"))}function Lc(e,c){e.yu.Mt(c.targetId),W4(e).zo(c)}function ki(e,c){e.yu.Mt(c),W4(e).Ho(c)}function bc(e){e.yu=new Ay({getRemoteKeysForTarget:c=>e.remoteSyncer.getRemoteKeysForTarget(c),se:c=>e.du.get(c)||null}),W4(e).start(),e.gu.uu()}function xc(e){return r8(e)&&!W4(e).No()&&e.du.size>0}function r8(e){return f1(e)._u.size===0}function Ai(e){e.yu=void 0}async function NS(e){e.du.forEach((c,a)=>{Lc(e,c)})}async function wS(e,c){Ai(e),xc(e)?(e.gu.hu(c),bc(e)):e.gu.set("Unknown")}async function kS(e,c,a){if(e.gu.set("Online"),c instanceof Hi&&c.state===2&&c.cause)try{await async function(s,t){const r=t.cause;for(const n of t.targetIds)s.du.has(n)&&(await s.remoteSyncer.rejectListen(n,r),s.du.delete(n),s.yu.removeTarget(n))}(e,c)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",c.targetIds.join(","),s),await Is(e,s)}else if(c instanceof U8?e.yu.Gt(c):c instanceof zi?e.yu.Yt(c):e.yu.Wt(c),!a.isEqual(a1.min()))try{const s=await xi(e.localStore);a.compareTo(s)>=0&&await function(t,r){const n=t.yu.te(r);return n.targetChanges.forEach((i,o)=>{if(i.resumeToken.approximateByteSize()>0){const l=t.du.get(o);l&&t.du.set(o,l.withResumeToken(i.resumeToken,r))}}),n.targetMismatches.forEach(i=>{const o=t.du.get(i);if(!o)return;t.du.set(i,o.withResumeToken(t2.EMPTY_BYTE_STRING,o.snapshotVersion)),ki(t,i);const l=new Q3(o.target,i,1,o.sequenceNumber);Lc(t,l)}),t.remoteSyncer.applyRemoteEvent(n)}(e,a)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Is(e,s)}}async function Is(e,c,a){if(!a8(c))throw c;e._u.add(1),await t8(e),e.gu.set("Offline"),a||(a=()=>xi(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await a(),e._u.delete(1),await o0(e)})}async function Ds(e,c){const a=f1(e);a.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=r8(a);a._u.add(3),await t8(a),s&&a.gu.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a._u.delete(3),await o0(a)}async function AS(e,c){const a=f1(e);c?(a._u.delete(2),await o0(a)):c||(a._u.add(2),await t8(a),a.gu.set("Unknown"))}function W4(e){return e.pu||(e.pu=function(c,a,s){const t=f1(c);return t.su(),new bS(a,t.connection,t.authCredentials,t.appCheckCredentials,t.It,s)}(e.datastore,e.asyncQueue,{Yr:NS.bind(null,e),Zr:wS.bind(null,e),Wo:kS.bind(null,e)}),e.wu.push(async c=>{c?(e.pu.Mo(),xc(e)?bc(e):e.gu.set("Unknown")):(await e.pu.stop(),Ai(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(c,a,s,t,r){this.asyncQueue=c,this.timerId=a,this.targetTimeMs=s,this.op=t,this.removalCallback=r,this.deferred=new K3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(n=>{})}static createAndSchedule(c,a,s,t,r){const n=Date.now()+s,i=new yc(c,a,n,t,r);return i.start(s),i}start(c){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),c)}skipDelay(){return this.handleDelayElapsed()}cancel(c){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(E.CANCELLED,"Operation cancelled"+(c?": "+c:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(c=>this.deferred.resolve(c))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ti(e,c){if(c3("AsyncQueue",`${c}: ${e}`),a8(e))return new K(E.UNAVAILABLE,`${c}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(c){this.comparator=c?(a,s)=>c(a,s)||j.comparator(a.key,s.key):(a,s)=>j.comparator(a.key,s.key),this.keyedMap=s6(),this.sortedSet=new j1(this.comparator)}static emptySet(c){return new L4(c.comparator)}has(c){return this.keyedMap.get(c)!=null}get(c){return this.keyedMap.get(c)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(c){const a=this.keyedMap.get(c);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(c){this.sortedSet.inorderTraversal((a,s)=>(c(a),!1))}add(c){const a=this.delete(c.key);return a.copy(a.keyedMap.insert(c.key,c),a.sortedSet.insert(c,null))}delete(c){const a=this.get(c);return a?this.copy(this.keyedMap.remove(c),this.sortedSet.remove(a)):this}isEqual(c){if(!(c instanceof L4)||this.size!==c.size)return!1;const a=this.sortedSet.getIterator(),s=c.sortedSet.getIterator();for(;a.hasNext();){const t=a.getNext().key,r=s.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const c=[];return this.forEach(a=>{c.push(a.toString())}),c.length===0?"DocumentSet ()":`DocumentSet (
  `+c.join(`  
`)+`
)`}copy(c,a){const s=new L4;return s.comparator=this.comparator,s.keyedMap=c,s.sortedSet=a,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.Tu=new j1(j.comparator)}track(c){const a=c.doc.key,s=this.Tu.get(a);s?c.type!==0&&s.type===3?this.Tu=this.Tu.insert(a,c):c.type===3&&s.type!==1?this.Tu=this.Tu.insert(a,{type:s.type,doc:c.doc}):c.type===2&&s.type===2?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):c.type===2&&s.type===0?this.Tu=this.Tu.insert(a,{type:0,doc:c.doc}):c.type===1&&s.type===0?this.Tu=this.Tu.remove(a):c.type===1&&s.type===2?this.Tu=this.Tu.insert(a,{type:1,doc:s.doc}):c.type===0&&s.type===1?this.Tu=this.Tu.insert(a,{type:2,doc:c.doc}):c1():this.Tu=this.Tu.insert(a,c)}Eu(){const c=[];return this.Tu.inorderTraversal((a,s)=>{c.push(s)}),c}}class D4{constructor(c,a,s,t,r,n,i,o,l){this.query=c,this.docs=a,this.oldDocs=s,this.docChanges=t,this.mutatedKeys=r,this.fromCache=n,this.syncStateChanged=i,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(c,a,s,t,r){const n=[];return a.forEach(i=>{n.push({type:0,doc:i})}),new D4(c,a,L4.emptySet(a),n,s,t,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(c){if(!(this.fromCache===c.fromCache&&this.hasCachedResults===c.hasCachedResults&&this.syncStateChanged===c.syncStateChanged&&this.mutatedKeys.isEqual(c.mutatedKeys)&&t0(this.query,c.query)&&this.docs.isEqual(c.docs)&&this.oldDocs.isEqual(c.oldDocs)))return!1;const a=this.docChanges,s=c.docChanges;if(a.length!==s.length)return!1;for(let t=0;t<a.length;t++)if(a[t].type!==s[t].type||!a[t].doc.isEqual(s[t].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.Au=void 0,this.listeners=[]}}class ES{constructor(){this.queries=new j4(c=>ii(c),t0),this.onlineState="Unknown",this.Ru=new Set}}async function PS(e,c){const a=f1(e),s=c.query;let t=!1,r=a.queries.get(s);if(r||(t=!0,r=new TS),t)try{r.Au=await a.onListen(s)}catch(n){const i=Ti(n,`Initialization of query '${Z7(c.query)}' failed`);return void c.onError(i)}a.queries.set(s,r),r.listeners.push(c),c.bu(a.onlineState),r.Au&&c.Pu(r.Au)&&Sc(a)}async function _S(e,c){const a=f1(e),s=c.query;let t=!1;const r=a.queries.get(s);if(r){const n=r.listeners.indexOf(c);n>=0&&(r.listeners.splice(n,1),t=r.listeners.length===0)}if(t)return a.queries.delete(s),a.onUnlisten(s)}function IS(e,c){const a=f1(e);let s=!1;for(const t of c){const r=t.query,n=a.queries.get(r);if(n){for(const i of n.listeners)i.Pu(t)&&(s=!0);n.Au=t}}s&&Sc(a)}function DS(e,c,a){const s=f1(e),t=s.queries.get(c);if(t)for(const r of t.listeners)r.onError(a);s.queries.delete(c)}function Sc(e){e.Ru.forEach(c=>{c.next()})}class RS{constructor(c,a,s){this.query=c,this.vu=a,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(c){if(!this.options.includeMetadataChanges){const s=[];for(const t of c.docChanges)t.type!==3&&s.push(t);c=new D4(c.query,c.docs,c.oldDocs,s,c.mutatedKeys,c.fromCache,c.syncStateChanged,!0,c.hasCachedResults)}let a=!1;return this.Vu?this.Du(c)&&(this.vu.next(c),a=!0):this.Cu(c,this.onlineState)&&(this.xu(c),a=!0),this.Su=c,a}onError(c){this.vu.error(c)}bu(c){this.onlineState=c;let a=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,c)&&(this.xu(this.Su),a=!0),a}Cu(c,a){if(!c.fromCache)return!0;const s=a!=="Offline";return(!this.options.Nu||!s)&&(!c.docs.isEmpty()||c.hasCachedResults||a==="Offline")}Du(c){if(c.docChanges.length>0)return!0;const a=this.Su&&this.Su.hasPendingWrites!==c.hasPendingWrites;return!(!c.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}xu(c){c=D4.fromInitialDocuments(c.query,c.docs,c.mutatedKeys,c.fromCache,c.hasCachedResults),this.Vu=!0,this.vu.next(c)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(c){this.key=c}}class Pi{constructor(c){this.key=c}}class FS{constructor(c,a){this.query=c,this.Uu=a,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=o1(),this.mutatedKeys=o1(),this.Gu=oi(c),this.Qu=new L4(this.Gu)}get ju(){return this.Uu}Wu(c,a){const s=a?a.zu:new Rs,t=a?a.Qu:this.Qu;let r=a?a.mutatedKeys:this.mutatedKeys,n=t,i=!1;const o=this.query.limitType==="F"&&t.size===this.query.limit?t.last():null,l=this.query.limitType==="L"&&t.size===this.query.limit?t.first():null;if(c.inorderTraversal((f,h)=>{const u=t.get(f),C=dc(this.query,h)?h:null,z=!!u&&this.mutatedKeys.has(u.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let k=!1;u&&C?u.data.isEqual(C.data)?z!==L&&(s.track({type:3,doc:C}),k=!0):this.Hu(u,C)||(s.track({type:2,doc:C}),k=!0,(o&&this.Gu(C,o)>0||l&&this.Gu(C,l)<0)&&(i=!0)):!u&&C?(s.track({type:0,doc:C}),k=!0):u&&!C&&(s.track({type:1,doc:u}),k=!0,(o||l)&&(i=!0)),k&&(C?(n=n.add(C),r=L?r.add(f):r.delete(f)):(n=n.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;n.size>this.query.limit;){const f=this.query.limitType==="F"?n.last():n.first();n=n.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Qu:n,zu:s,$i:i,mutatedKeys:r}}Hu(c,a){return c.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(c,a,s){const t=this.Qu;this.Qu=c.Qu,this.mutatedKeys=c.mutatedKeys;const r=c.zu.Eu();r.sort((l,f)=>function(h,u){const C=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return c1()}};return C(h)-C(u)}(l.type,f.type)||this.Gu(l.doc,f.doc)),this.Ju(s);const n=a?this.Yu():[],i=this.Ku.size===0&&this.current?1:0,o=i!==this.qu;return this.qu=i,r.length!==0||o?{snapshot:new D4(this.query,c.Qu,t,r,c.mutatedKeys,i===0,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:n}:{Xu:n}}bu(c){return this.current&&c==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Rs,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(c){return!this.Uu.has(c)&&!!this.Qu.has(c)&&!this.Qu.get(c).hasLocalMutations}Ju(c){c&&(c.addedDocuments.forEach(a=>this.Uu=this.Uu.add(a)),c.modifiedDocuments.forEach(a=>{}),c.removedDocuments.forEach(a=>this.Uu=this.Uu.delete(a)),this.current=c.current)}Yu(){if(!this.current)return[];const c=this.Ku;this.Ku=o1(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const a=[];return c.forEach(s=>{this.Ku.has(s)||a.push(new Pi(s))}),this.Ku.forEach(s=>{c.has(s)||a.push(new Ei(s))}),a}tc(c){this.Uu=c.Hi,this.Ku=o1();const a=this.Wu(c.documents);return this.applyChanges(a,!0)}ec(){return D4.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class BS{constructor(c,a,s){this.query=c,this.targetId=a,this.view=s}}class OS{constructor(c){this.key=c,this.nc=!1}}class qS{constructor(c,a,s,t,r,n){this.localStore=c,this.remoteStore=a,this.eventManager=s,this.sharedClientState=t,this.currentUser=r,this.maxConcurrentLimboResolutions=n,this.sc={},this.ic=new j4(i=>ii(i),t0),this.rc=new Map,this.oc=new Set,this.uc=new j1(j.comparator),this.cc=new Map,this.ac=new Mc,this.hc={},this.lc=new Map,this.fc=I4.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function $S(e,c){const a=YS(e);let s,t;const r=a.ic.get(c);if(r)s=r.targetId,a.sharedClientState.addLocalQueryTarget(s),t=r.view.ec();else{const n=await pS(a.localStore,e3(c));a.isPrimaryClient&&Ni(a.remoteStore,n);const i=a.sharedClientState.addLocalQueryTarget(n.targetId);s=n.targetId,t=await US(a,c,s,i==="current",n.resumeToken)}return t}async function US(e,c,a,s,t){e._c=(h,u,C)=>async function(z,L,k,d){let M=L.view.Wu(k);M.$i&&(M=await Es(z.localStore,L.query,!1).then(({documents:G})=>L.view.Wu(G,M)));const y=d&&d.targetChanges.get(L.targetId),B=L.view.applyChanges(M,z.isPrimaryClient,y);return Bs(z,L.targetId,B.Xu),B.snapshot}(e,h,u,C);const r=await Es(e.localStore,c,!0),n=new FS(c,r.Hi),i=n.Wu(r.documents),o=s8.createSynthesizedTargetChangeForCurrentChange(a,s&&e.onlineState!=="Offline",t),l=n.applyChanges(i,e.isPrimaryClient,o);Bs(e,a,l.Xu);const f=new BS(c,a,n);return e.ic.set(c,f),e.rc.has(a)?e.rc.get(a).push(c):e.rc.set(a,[c]),l.snapshot}async function GS(e,c){const a=f1(e),s=a.ic.get(c),t=a.rc.get(s.targetId);if(t.length>1)return a.rc.set(s.targetId,t.filter(r=>!t0(r,c))),void a.ic.delete(c);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await J7(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),wi(a.remoteStore,s.targetId),c9(a,s.targetId)}).catch(uc)):(c9(a,s.targetId),await J7(a.localStore,s.targetId,!0))}async function _i(e,c){const a=f1(e);try{const s=await vS(a.localStore,c);c.targetChanges.forEach((t,r)=>{const n=a.cc.get(r);n&&(I1(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?n.nc=!0:t.modifiedDocuments.size>0?I1(n.nc):t.removedDocuments.size>0&&(I1(n.nc),n.nc=!1))}),await Di(a,s,c)}catch(s){await uc(s)}}function Fs(e,c,a){const s=f1(e);if(s.isPrimaryClient&&a===0||!s.isPrimaryClient&&a===1){const t=[];s.ic.forEach((r,n)=>{const i=n.view.bu(c);i.snapshot&&t.push(i.snapshot)}),function(r,n){const i=f1(r);i.onlineState=n;let o=!1;i.queries.forEach((l,f)=>{for(const h of f.listeners)h.bu(n)&&(o=!0)}),o&&Sc(i)}(s.eventManager,c),t.length&&s.sc.Wo(t),s.onlineState=c,s.isPrimaryClient&&s.sharedClientState.setOnlineState(c)}}async function jS(e,c,a){const s=f1(e);s.sharedClientState.updateQueryState(c,"rejected",a);const t=s.cc.get(c),r=t&&t.key;if(r){let n=new j1(j.comparator);n=n.insert(r,Z1.newNoDocument(r,a1.min()));const i=o1().add(r),o=new i0(a1.min(),new Map,new F1(v1),n,i);await _i(s,o),s.uc=s.uc.remove(r),s.cc.delete(c),Nc(s)}else await J7(s.localStore,c,!1).then(()=>c9(s,c,a)).catch(uc)}function c9(e,c,a=null){e.sharedClientState.removeLocalQueryTarget(c);for(const s of e.rc.get(c))e.ic.delete(s),a&&e.sc.wc(s,a);e.rc.delete(c),e.isPrimaryClient&&e.ac.ls(c).forEach(s=>{e.ac.containsKey(s)||Ii(e,s)})}function Ii(e,c){e.oc.delete(c.path.canonicalString());const a=e.uc.get(c);a!==null&&(wi(e.remoteStore,a),e.uc=e.uc.remove(c),e.cc.delete(a),Nc(e))}function Bs(e,c,a){for(const s of a)s instanceof Ei?(e.ac.addReference(s.key,c),WS(e,s)):s instanceof Pi?(O("SyncEngine","Document no longer in limbo: "+s.key),e.ac.removeReference(s.key,c),e.ac.containsKey(s.key)||Ii(e,s.key)):c1()}function WS(e,c){const a=c.key,s=a.path.canonicalString();e.uc.get(a)||e.oc.has(s)||(O("SyncEngine","New document in limbo: "+a),e.oc.add(s),Nc(e))}function Nc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const c=e.oc.values().next().value;e.oc.delete(c);const a=new j(w1.fromString(c)),s=e.fc.next();e.cc.set(s,new OS(a)),e.uc=e.uc.insert(a,s),Ni(e.remoteStore,new Q3(e3(ni(a.path)),s,2,mc.at))}}async function Di(e,c,a){const s=f1(e),t=[],r=[],n=[];s.ic.isEmpty()||(s.ic.forEach((i,o)=>{n.push(s._c(o,c,a).then(l=>{if((l||a)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){t.push(l);const f=gc.Ci(o.targetId,l);r.push(f)}}))}),await Promise.all(n),s.sc.Wo(t),await async function(i,o){const l=f1(i);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(o,h=>x.forEach(h.Si,u=>l.persistence.referenceDelegate.addReference(f,h.targetId,u)).next(()=>x.forEach(h.Di,u=>l.persistence.referenceDelegate.removeReference(f,h.targetId,u)))))}catch(f){if(!a8(f))throw f;O("LocalStore","Failed to update sequence numbers: "+f)}for(const f of o){const h=f.targetId;if(!f.fromCache){const u=l.Ui.get(h),C=u.snapshotVersion,z=u.withLastLimboFreeSnapshotVersion(C);l.Ui=l.Ui.insert(h,z)}}}(s.localStore,r))}async function KS(e,c){const a=f1(e);if(!a.currentUser.isEqual(c)){O("SyncEngine","User change. New user:",c.toKey());const s=await bi(a.localStore,c);a.currentUser=c,function(t,r){t.lc.forEach(n=>{n.forEach(i=>{i.reject(new K(E.CANCELLED,r))})}),t.lc.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(c,s.removedBatchIds,s.addedBatchIds),await Di(a,s.ji)}}function ZS(e,c){const a=f1(e),s=a.cc.get(c);if(s&&s.nc)return o1().add(s.key);{let t=o1();const r=a.rc.get(c);if(!r)return t;for(const n of r){const i=a.ic.get(n);t=t.unionWith(i.view.ju)}return t}}function YS(e){const c=f1(e);return c.remoteStore.remoteSyncer.applyRemoteEvent=_i.bind(null,c),c.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZS.bind(null,c),c.remoteStore.remoteSyncer.rejectListen=jS.bind(null,c),c.sc.Wo=IS.bind(null,c.eventManager),c.sc.wc=DS.bind(null,c.eventManager),c}class QS{constructor(){this.synchronizeTabs=!1}async initialize(c){this.It=yi(c.databaseInfo.databaseId),this.sharedClientState=this.gc(c),this.persistence=this.yc(c),await this.persistence.start(),this.localStore=this.Ic(c),this.gcScheduler=this.Tc(c,this.localStore),this.indexBackfillerScheduler=this.Ec(c,this.localStore)}Tc(c,a){return null}Ec(c,a){return null}Ic(c){return mS(this.persistence,new hS,c.initialUser,this.It)}yc(c){return new lS(Vc.Bs,this.It)}gc(c){return new zS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XS{async initialize(c,a){this.localStore||(this.localStore=c.localStore,this.sharedClientState=c.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!c.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fs(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=KS.bind(null,this.syncEngine),await AS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(c){return new ES}createDatastore(c){const a=yi(c.databaseInfo.databaseId),s=(t=c.databaseInfo,new gS(t));var t;return function(r,n,i,o){return new xS(r,n,i,o)}(c.authCredentials,c.appCheckCredentials,s,a)}createRemoteStore(c){return a=this.localStore,s=this.datastore,t=c.asyncQueue,r=i=>Fs(this.syncEngine,i,0),n=_s.C()?new _s:new HS,new SS(a,s,t,r,n);var a,s,t,r,n}createSyncEngine(c,a){return function(s,t,r,n,i,o,l){const f=new qS(s,t,r,n,i,o);return l&&(f.dc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,c.initialUser,c.maxConcurrentLimboResolutions,a)}terminate(){return async function(c){const a=f1(c);O("RemoteStore","RemoteStore shutting down."),a._u.add(5),await t8(a),a.mu.shutdown(),a.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(e,c,a){if(!a)throw new K(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${c}.`)}function cN(e,c,a,s){if(c===!0&&s===!0)throw new K(E.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function Os(e){if(j.isDocumentKey(e))throw new K(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function eN(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const c=function(a){return a.constructor?a.constructor.name:null}(e);return c?`a custom ${c} object`:"an object"}}return typeof e=="function"?"a function":c1()}function e9(e,c){if("_delegate"in e&&(e=e._delegate),!(e instanceof c)){if(c.name===e.constructor.name)throw new K(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=eN(e);throw new K(E.INVALID_ARGUMENT,`Expected type '${c.name}', but it was: ${a}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;class $s{constructor(c){var a;if(c.host===void 0){if(c.ssl!==void 0)throw new K(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=c.host,this.ssl=(a=c.ssl)===null||a===void 0||a;if(this.credentials=c.credentials,this.ignoreUndefinedProperties=!!c.ignoreUndefinedProperties,c.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(c.cacheSizeBytes!==-1&&c.cacheSizeBytes<1048576)throw new K(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=c.cacheSizeBytes}this.experimentalForceLongPolling=!!c.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!c.experimentalAutoDetectLongPolling,this.useFetchStreams=!!c.useFetchStreams,cN("experimentalForceLongPolling",c.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",c.experimentalAutoDetectLongPolling)}isEqual(c){return this.host===c.host&&this.ssl===c.ssl&&this.credentials===c.credentials&&this.cacheSizeBytes===c.cacheSizeBytes&&this.experimentalForceLongPolling===c.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===c.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===c.ignoreUndefinedProperties&&this.useFetchStreams===c.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(c,a,s,t){this._authCredentials=c,this._appCheckCredentials=a,this._databaseId=s,this._app=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $s({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(c){if(this._settingsFrozen)throw new K(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $s(c),c.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Dx;switch(a.type){case"gapi":const s=a.client;return new Ox(s,a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new K(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(c.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(c){const a=qs.get(c);a&&(O("ComponentProvider","Removing Datastore"),qs.delete(c),a.terminate())}(this),Promise.resolve()}}function aN(e,c,a,s={}){var t;const r=(e=e9(e,wc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==c&&$7("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${c}:${a}`,ssl:!1})),s.mockUserToken){let n,i;if(typeof s.mockUserToken=="string")n=s.mockUserToken,i=J1.MOCK_USER;else{n=gL(s.mockUserToken,(t=e._app)===null||t===void 0?void 0:t.options.projectId);const o=s.mockUserToken.sub||s.mockUserToken.user_id;if(!o)throw new K(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new J1(o)}e._authCredentials=new Rx(new ai(n,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(c,a,s){this.converter=a,this._key=s,this.type="document",this.firestore=c}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new b4(this.firestore,this.converter,this._key.path.popLast())}withConverter(c){return new K4(this.firestore,c,this._key)}}class l0{constructor(c,a,s){this.converter=a,this._query=s,this.type="query",this.firestore=c}withConverter(c){return new l0(this.firestore,c,this._query)}}class b4 extends l0{constructor(c,a,s){super(c,a,ni(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const c=this._path.popLast();return c.isEmpty()?null:new K4(this.firestore,null,new j(c))}withConverter(c){return new b4(this.firestore,c,this._path)}}function sN(e,c,...a){if(e=O9(e),JS("collection","path",c),e instanceof wc){const s=w1.fromString(c,...a);return Os(s),new b4(e,null,s)}{if(!(e instanceof K4||e instanceof b4))throw new K(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(w1.fromString(c,...a));return Os(s),new b4(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(c){this.observer=c,this.muted=!1}next(c){this.observer.next&&this.Rc(this.observer.next,c)}error(c){this.observer.error?this.Rc(this.observer.error,c):c3("Uncaught Error in snapshot listener:",c.toString())}bc(){this.muted=!0}Rc(c,a){this.muted||setTimeout(()=>{this.muted||c(a)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(c,a,s,t){this.authCredentials=c,this.appCheckCredentials=a,this.asyncQueue=s,this.databaseInfo=t,this.user=J1.UNAUTHENTICATED,this.clientId=Gx.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(c){this.authCredentialListener=c}setAppCheckTokenChangeListener(c){this.appCheckCredentialListener=c}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const c=new K3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),c.resolve()}catch(a){const s=Ti(a,"Failed to shutdown persistence");c.reject(s)}}),c.promise}}async function nN(e,c){e.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const a=await e.getConfiguration();await c.initialize(a);let s=a.initialUser;e.setCredentialChangeListener(async t=>{s.isEqual(t)||(await bi(c.localStore,t),s=t)}),c.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=c}async function iN(e,c){e.asyncQueue.verifyOperationInProgress();const a=await oN(e);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await c.initialize(a,s),e.setCredentialChangeListener(t=>Ds(c.remoteStore,t)),e.setAppCheckTokenChangeListener((t,r)=>Ds(c.remoteStore,r)),e.onlineComponents=c}async function oN(e){return e.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await nN(e,new QS)),e.offlineComponents}async function lN(e){return e.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await iN(e,new XS)),e.onlineComponents}async function fN(e){const c=await lN(e),a=c.eventManager;return a.onListen=$S.bind(null,c.syncEngine),a.onUnlisten=GS.bind(null,c.syncEngine),a}function hN(e,c,a={}){const s=new K3;return e.asyncQueue.enqueueAndForget(async()=>function(t,r,n,i,o){const l=new tN({next:h=>{r.enqueueAndForget(()=>_S(t,f)),h.fromCache&&i.source==="server"?o.reject(new K(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(h)},error:h=>o.reject(h)}),f=new RS(n,l,{includeMetadataChanges:!0,Nu:!0});return PS(t,f)}(await fN(e),e.asyncQueue,c,a,s)),s.promise}class uN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Si(this,"async_queue_retry"),this.Wc=()=>{const a=s7();a&&O("AsyncQueue","Visibility state changed to "+a.visibilityState),this.xo.Po()};const c=s7();c&&typeof c.addEventListener=="function"&&c.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(c){this.enqueue(c)}enqueueAndForgetEvenWhileRestricted(c){this.zc(),this.Hc(c)}enterRestrictedMode(c){if(!this.Uc){this.Uc=!0,this.Qc=c||!1;const a=s7();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Wc)}}enqueue(c){if(this.zc(),this.Uc)return new Promise(()=>{});const a=new K3;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(c().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(c){this.enqueueAndForget(()=>(this.Lc.push(c),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(c){if(!a8(c))throw c;O("AsyncQueue","Operation failed with retryable error: "+c)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(c){const a=this.Bc.then(()=>(this.Gc=!0,c().catch(s=>{this.Kc=s,this.Gc=!1;const t=function(r){let n=r.message||"";return r.stack&&(n=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),n}(s);throw c3("INTERNAL UNHANDLED ERROR: ",t),s}).then(s=>(this.Gc=!1,s))));return this.Bc=a,a}enqueueAfterDelay(c,a,s){this.zc(),this.jc.indexOf(c)>-1&&(a=0);const t=yc.createAndSchedule(this,c,a,s,r=>this.Yc(r));return this.qc.push(t),t}zc(){this.Kc&&c1()}verifyOperationInProgress(){}async Xc(){let c;do c=this.Bc,await c;while(c!==this.Bc)}Zc(c){for(const a of this.qc)if(a.timerId===c)return!0;return!1}ta(c){return this.Xc().then(()=>{this.qc.sort((a,s)=>a.targetTimeMs-s.targetTimeMs);for(const a of this.qc)if(a.skipDelay(),c!=="all"&&a.timerId===c)break;return this.Xc()})}ea(c){this.jc.push(c)}Yc(c){const a=this.qc.indexOf(c);this.qc.splice(a,1)}}class Ri extends wc{constructor(c,a,s,t){super(c,a,s,t),this.type="firestore",this._queue=new uN,this._persistenceKey=(t==null?void 0:t.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fi(this),this._firestoreClient.terminate()}}function mN(e,c){const a=typeof e=="object"?e:Yr(),s=typeof e=="string"?e:c||"(default)",t=j6(a,"firestore").getImmediate({identifier:s});if(!t._initialized){const r=HL("firestore");r&&aN(t,...r)}return t}function vN(e){return e._firestoreClient||Fi(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fi(e){var c;const a=e._freezeSettings(),s=function(t,r,n,i){return new cy(t,r,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,((c=e._app)===null||c===void 0?void 0:c.options.appId)||"",e._persistenceKey,a);e._firestoreClient=new rN(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(c){this._byteString=c}static fromBase64String(c){try{return new C5(t2.fromBase64String(c))}catch(a){throw new K(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(c){return new C5(t2.fromUint8Array(c))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(c){return this._byteString.isEqual(c._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(...c){for(let a=0;a<c.length;++a)if(c[a].length===0)throw new K(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new u2(c)}isEqual(c){return this._internalPath.isEqual(c._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(c,a){if(!isFinite(c)||c<-90||c>90)throw new K(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+c);if(!isFinite(a)||a<-180||a>180)throw new K(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=c,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(c){return this._lat===c._lat&&this._long===c._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(c){return v1(this._lat,c._lat)||v1(this._long,c._long)}}const pN=new RegExp("[~\\*/\\[\\]]");function dN(e,c,a){if(c.search(pN)>=0)throw Us(`Invalid field path (${c}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new Bi(...c.split("."))._internalPath}catch{throw Us(`Invalid field path (${c}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function Us(e,c,a,s,t){const r=s&&!s.isEmpty(),n=t!==void 0;let i=`Function ${c}() called with invalid data`;a&&(i+=" (via `toFirestore()`)"),i+=". ";let o="";return(r||n)&&(o+=" (found",r&&(o+=` in field ${s}`),n&&(o+=` in document ${t}`),o+=")"),new K(E.INVALID_ARGUMENT,i+e+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(c,a,s,t,r){this._firestore=c,this._userDataWriter=a,this._key=s,this._document=t,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new K4(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const c=new zN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(c)}return this._userDataWriter.convertValue(this._document.data.value)}}get(c){if(this._document){const a=this._document.data.field(qi("DocumentSnapshot.get",c));if(a!==null)return this._userDataWriter.convertValue(a)}}}class zN extends Oi{data(){return super.data()}}function qi(e,c){return typeof c=="string"?dN(e,c):c instanceof Bi?c._internalPath:c._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new K(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{convertValue(c,a="none"){switch(c4(c)){case 0:return null;case 1:return c.booleanValue;case 2:return _1(c.integerValue||c.doubleValue);case 3:return this.convertTimestamp(c.timestampValue);case 4:return this.convertServerTimestamp(c,a);case 5:return c.stringValue;case 6:return this.convertBytes(P4(c.bytesValue));case 7:return this.convertReference(c.referenceValue);case 8:return this.convertGeoPoint(c.geoPointValue);case 9:return this.convertArray(c.arrayValue,a);case 10:return this.convertObject(c.mapValue,a);default:throw c1()}}convertObject(c,a){const s={};return e0(c.fields,(t,r)=>{s[t]=this.convertValue(r,a)}),s}convertGeoPoint(c){return new CN(_1(c.latitude),_1(c.longitude))}convertArray(c,a){return(c.values||[]).map(s=>this.convertValue(s,a))}convertServerTimestamp(c,a){switch(a){case"previous":const s=ti(c);return s==null?null:this.convertValue(s,a);case"estimate":return this.convertTimestamp(P6(c));default:return null}}convertTimestamp(c){const a=L3(c);return new v2(a.seconds,a.nanos)}convertDocumentKey(c,a){const s=w1.fromString(c);I1(Li(s));const t=new _6(s.get(1),s.get(3)),r=new j(s.popFirst(5));return t.isEqual(a)||c3(`Document ${r} contains a document reference within a different database (${t.projectId}/${t.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S8{constructor(c,a){this.hasPendingWrites=c,this.fromCache=a}isEqual(c){return this.hasPendingWrites===c.hasPendingWrites&&this.fromCache===c.fromCache}}class VN extends Oi{constructor(c,a,s,t,r,n){super(c,a,s,t,n),this._firestore=c,this._firestoreImpl=c,this.metadata=r}exists(){return super.exists()}data(c={}){if(this._document){if(this._converter){const a=new G8(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,c)}return this._userDataWriter.convertValue(this._document.data.value,c.serverTimestamps)}}get(c,a={}){if(this._document){const s=this._document.data.field(qi("DocumentSnapshot.get",c));if(s!==null)return this._userDataWriter.convertValue(s,a.serverTimestamps)}}}class G8 extends VN{data(c={}){return super.data(c)}}class gN{constructor(c,a,s,t){this._firestore=c,this._userDataWriter=a,this._snapshot=t,this.metadata=new S8(t.hasPendingWrites,t.fromCache),this.query=s}get docs(){const c=[];return this.forEach(a=>c.push(a)),c}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(c,a){this._snapshot.docs.forEach(s=>{c.call(a,new G8(this._firestore,this._userDataWriter,s.key,s,new S8(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(c={}){const a=!!c.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new K(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(s,t){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(n=>{const i=new G8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new S8(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(n=>t||n.type!==3).map(n=>{const i=new G8(s._firestore,s._userDataWriter,n.doc.key,n.doc,new S8(s._snapshot.mutatedKeys.has(n.doc.key),s._snapshot.fromCache),s.query.converter);let o=-1,l=-1;return n.type!==0&&(o=r.indexOf(n.doc.key),r=r.delete(n.doc.key)),n.type!==1&&(r=r.add(n.doc),l=r.indexOf(n.doc.key)),{type:LN(n.type),doc:i,oldIndex:o,newIndex:l}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function LN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return c1()}}class bN extends MN{constructor(c){super(),this.firestore=c}convertBytes(c){return new C5(c)}convertReference(c){const a=this.convertDocumentKey(c,this.firestore._databaseId);return new K4(this.firestore,null,a)}}function xN(e){e=e9(e,l0);const c=e9(e.firestore,Ri),a=vN(c),s=new bN(c);return HN(e._query),hN(a,e._query).then(t=>new gN(c,s,e,t))}(function(e,c=!0){(function(a){G4=a})(xb),V3(new X2("firestore",(a,{instanceIdentifier:s,options:t})=>{const r=a.getProvider("app").getImmediate(),n=new Ri(new Fx(a.getProvider("auth-internal")),new $x(a.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new K(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _6(i.options.projectId,o)}(r,s),r);return t=Object.assign({useFetchStreams:c},t),n._setSettings(t),n},"PUBLIC").setMultipleInstances(!0)),$2(vs,"3.7.3",e),$2(vs,"3.7.3","esm2017")})();var yN="firebase",SN="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$2(yN,SN,"app");const $i="@firebase/installations",kc="0.5.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=1e4,Gi=`w:${kc}`,ji="FIS_v2",NN="https://firebaseinstallations.googleapis.com/v1",wN=60*60*1e3,kN="installations",AN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},e4=new F5(kN,AN,TN);function Wi(e){return e instanceof N3&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki({projectId:e}){return`${NN}/projects/${e}/installations`}function Zi(e){return{token:e.token,requestStatus:2,expiresIn:PN(e.expiresIn),creationTime:Date.now()}}async function Yi(e,c){const s=(await c.json()).error;return e4.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Qi({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function EN(e,{refreshToken:c}){const a=Qi(e);return a.append("Authorization",_N(c)),a}async function Xi(e){const c=await e();return c.status>=500&&c.status<600?e():c}function PN(e){return Number(e.replace("s","000"))}function _N(e){return`${ji} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN({appConfig:e,heartbeatServiceProvider:c},{fid:a}){const s=Ki(e),t=Qi(e),r=c.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&t.append("x-firebase-client",l)}const n={fid:a,authVersion:ji,appId:e.appId,sdkVersion:Gi},i={method:"POST",headers:t,body:JSON.stringify(n)},o=await Xi(()=>fetch(s,i));if(o.ok){const l=await o.json();return{fid:l.fid||a,registrationStatus:2,refreshToken:l.refreshToken,authToken:Zi(l.authToken)}}else throw await Yi("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){return new Promise(c=>{setTimeout(c,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^[cdef][\w-]{21}$/,a9="";function FN(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=BN(e);return RN.test(a)?a:a9}catch{return a9}}function BN(e){return DN(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map;function eo(e,c){const a=f0(e);ao(a,c),ON(a,c)}function ao(e,c){const a=co.get(e);if(!!a)for(const s of a)s(c)}function ON(e,c){const a=qN();a&&a.postMessage({key:e,fid:c}),$N()}let q3=null;function qN(){return!q3&&"BroadcastChannel"in self&&(q3=new BroadcastChannel("[Firebase] FID Change"),q3.onmessage=e=>{ao(e.data.key,e.data.fid)}),q3}function $N(){co.size===0&&q3&&(q3.close(),q3=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="firebase-installations-database",GN=1,a4="firebase-installations-store";let t7=null;function Ac(){return t7||(t7=Kr(UN,GN,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(a4)}}})),t7}async function p5(e,c){const a=f0(e),t=(await Ac()).transaction(a4,"readwrite"),r=t.objectStore(a4),n=await r.get(a);return await r.put(c,a),await t.done,(!n||n.fid!==c.fid)&&eo(e,c.fid),c}async function so(e){const c=f0(e),s=(await Ac()).transaction(a4,"readwrite");await s.objectStore(a4).delete(c),await s.done}async function h0(e,c){const a=f0(e),t=(await Ac()).transaction(a4,"readwrite"),r=t.objectStore(a4),n=await r.get(a),i=c(n);return i===void 0?await r.delete(a):await r.put(i,a),await t.done,i&&(!n||n.fid!==i.fid)&&eo(e,i.fid),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tc(e){let c;const a=await h0(e.appConfig,s=>{const t=jN(s),r=WN(e,t);return c=r.registrationPromise,r.installationEntry});return a.fid===a9?{installationEntry:await c}:{installationEntry:a,registrationPromise:c}}function jN(e){const c=e||{fid:FN(),registrationStatus:0};return to(c)}function WN(e,c){if(c.registrationStatus===0){if(!navigator.onLine){const t=Promise.reject(e4.create("app-offline"));return{installationEntry:c,registrationPromise:t}}const a={fid:c.fid,registrationStatus:1,registrationTime:Date.now()},s=KN(e,a);return{installationEntry:a,registrationPromise:s}}else return c.registrationStatus===1?{installationEntry:c,registrationPromise:ZN(e)}:{installationEntry:c}}async function KN(e,c){try{const a=await IN(e,c);return p5(e.appConfig,a)}catch(a){throw Wi(a)&&a.customData.serverCode===409?await so(e.appConfig):await p5(e.appConfig,{fid:c.fid,registrationStatus:0}),a}}async function ZN(e){let c=await Gs(e.appConfig);for(;c.registrationStatus===1;)await Ji(100),c=await Gs(e.appConfig);if(c.registrationStatus===0){const{installationEntry:a,registrationPromise:s}=await Tc(e);return s||a}return c}function Gs(e){return h0(e,c=>{if(!c)throw e4.create("installation-not-found");return to(c)})}function to(e){return YN(e)?{fid:e.fid,registrationStatus:0}:e}function YN(e){return e.registrationStatus===1&&e.registrationTime+Ui<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN({appConfig:e,heartbeatServiceProvider:c},a){const s=XN(e,a),t=EN(e,a),r=c.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&t.append("x-firebase-client",l)}const n={installation:{sdkVersion:Gi,appId:e.appId}},i={method:"POST",headers:t,body:JSON.stringify(n)},o=await Xi(()=>fetch(s,i));if(o.ok){const l=await o.json();return Zi(l)}else throw await Yi("Generate Auth Token",o)}function XN(e,{fid:c}){return`${Ki(e)}/${c}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(e,c=!1){let a;const s=await h0(e.appConfig,r=>{if(!ro(r))throw e4.create("not-registered");const n=r.authToken;if(!c&&ew(n))return r;if(n.requestStatus===1)return a=JN(e,c),r;{if(!navigator.onLine)throw e4.create("app-offline");const i=sw(r);return a=cw(e,i),i}});return a?await a:s.authToken}async function JN(e,c){let a=await js(e.appConfig);for(;a.authToken.requestStatus===1;)await Ji(100),a=await js(e.appConfig);const s=a.authToken;return s.requestStatus===0?Ec(e,c):s}function js(e){return h0(e,c=>{if(!ro(c))throw e4.create("not-registered");const a=c.authToken;return tw(a)?Object.assign(Object.assign({},c),{authToken:{requestStatus:0}}):c})}async function cw(e,c){try{const a=await QN(e,c),s=Object.assign(Object.assign({},c),{authToken:a});return await p5(e.appConfig,s),a}catch(a){if(Wi(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await so(e.appConfig);else{const s=Object.assign(Object.assign({},c),{authToken:{requestStatus:0}});await p5(e.appConfig,s)}throw a}}function ro(e){return e!==void 0&&e.registrationStatus===2}function ew(e){return e.requestStatus===2&&!aw(e)}function aw(e){const c=Date.now();return c<e.creationTime||e.creationTime+e.expiresIn<c+wN}function sw(e){const c={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:c})}function tw(e){return e.requestStatus===1&&e.requestTime+Ui<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(e){const c=e,{installationEntry:a,registrationPromise:s}=await Tc(c);return s?s.catch(console.error):Ec(c).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(e,c=!1){const a=e;return await iw(a),(await Ec(a,c)).token}async function iw(e){const{registrationPromise:c}=await Tc(e);c&&await c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(e){if(!e||!e.options)throw r7("App Configuration");if(!e.name)throw r7("App Name");const c=["projectId","apiKey","appId"];for(const a of c)if(!e.options[a])throw r7(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function r7(e){return e4.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="installations",lw="installations-internal",fw=e=>{const c=e.getProvider("app").getImmediate(),a=ow(c),s=j6(c,"heartbeat");return{app:c,appConfig:a,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},hw=e=>{const c=e.getProvider("app").getImmediate(),a=j6(c,no).getImmediate();return{getId:()=>rw(a),getToken:t=>nw(a,t)}};function uw(){V3(new X2(no,fw,"PUBLIC")),V3(new X2(lw,hw,"PRIVATE"))}uw();$2($i,kc);$2($i,kc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d5="analytics",mw="firebase_id",vw="origin",Cw=60*1e3,pw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",io="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=new q9("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(e){return Promise.all(e.map(c=>c.catch(a=>a)))}function dw(e,c){const a=document.createElement("script");a.src=`${io}?l=${e}&id=${c}`,a.async=!0,document.head.appendChild(a)}function zw(e){let c=[];return Array.isArray(window[e])?c=window[e]:window[e]=c,c}async function Hw(e,c,a,s,t,r){const n=s[t];try{if(n)await c[n];else{const o=(await oo(a)).find(l=>l.measurementId===t);o&&await c[o.appId]}}catch(i){d2.error(i)}e("config",t,r)}async function Mw(e,c,a,s,t){try{let r=[];if(t&&t.send_to){let n=t.send_to;Array.isArray(n)||(n=[n]);const i=await oo(a);for(const o of n){const l=i.find(h=>h.measurementId===o),f=l&&c[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(c)),await Promise.all(r),e("event",s,t||{})}catch(r){d2.error(r)}}function Vw(e,c,a,s){async function t(r,n,i){try{r==="event"?await Mw(e,c,a,n,i):r==="config"?await Hw(e,c,a,s,n,i):r==="consent"?e("consent","update",i):e("set",n)}catch(o){d2.error(o)}}return t}function gw(e,c,a,s,t){let r=function(...n){window[s].push(arguments)};return window[t]&&typeof window[t]=="function"&&(r=window[t]),window[t]=Vw(r,e,c,a),{gtagCore:r,wrappedGtag:window[t]}}function Lw(e){const c=window.document.getElementsByTagName("script");for(const a of Object.values(c))if(a.src&&a.src.includes(io)&&a.src.includes(e))return a;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},g2=new F5("analytics","Analytics",bw);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=30,yw=1e3;class Sw{constructor(c={},a=yw){this.throttleMetadata=c,this.intervalMillis=a}getThrottleMetadata(c){return this.throttleMetadata[c]}setThrottleMetadata(c,a){this.throttleMetadata[c]=a}deleteThrottleMetadata(c){delete this.throttleMetadata[c]}}const lo=new Sw;function Nw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ww(e){var c;const{appId:a,apiKey:s}=e,t={method:"GET",headers:Nw(s)},r=pw.replace("{app-id}",a),n=await fetch(r,t);if(n.status!==200&&n.status!==304){let i="";try{const o=await n.json();!((c=o.error)===null||c===void 0)&&c.message&&(i=o.error.message)}catch{}throw g2.create("config-fetch-failed",{httpStatus:n.status,responseMessage:i})}return n.json()}async function kw(e,c=lo,a){const{appId:s,apiKey:t,measurementId:r}=e.options;if(!s)throw g2.create("no-app-id");if(!t){if(r)return{measurementId:r,appId:s};throw g2.create("no-api-key")}const n=c.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},i=new Ew;return setTimeout(async()=>{i.abort()},a!==void 0?a:Cw),fo({appId:s,apiKey:t,measurementId:r},n,i,c)}async function fo(e,{throttleEndTimeMillis:c,backoffCount:a},s,t=lo){var r,n;const{appId:i,measurementId:o}=e;try{await Aw(s,c)}catch(l){if(o)return d2.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${(r=l)===null||r===void 0?void 0:r.message}]`),{appId:i,measurementId:o};throw l}try{const l=await ww(e);return t.deleteThrottleMetadata(i),l}catch(l){const f=l;if(!Tw(f)){if(t.deleteThrottleMetadata(i),o)return d2.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:i,measurementId:o};throw l}const h=Number((n=f==null?void 0:f.customData)===null||n===void 0?void 0:n.httpStatus)===503?Wa(a,t.intervalMillis,xw):Wa(a,t.intervalMillis),u={throttleEndTimeMillis:Date.now()+h,backoffCount:a+1};return t.setThrottleMetadata(i,u),d2.debug(`Calling attemptFetch again in ${h} millis`),fo(e,u,s,t)}}function Aw(e,c){return new Promise((a,s)=>{const t=Math.max(c-Date.now(),0),r=setTimeout(a,t);e.addEventListener(()=>{clearTimeout(r),s(g2.create("fetch-throttle",{throttleEndTimeMillis:c}))})})}function Tw(e){if(!(e instanceof N3)||!e.customData)return!1;const c=Number(e.customData.httpStatus);return c===429||c===500||c===503||c===504}class Ew{constructor(){this.listeners=[]}addEventListener(c){this.listeners.push(c)}abort(){this.listeners.forEach(c=>c())}}async function Pw(e,c,a,s,t){if(t&&t.global){e("event",a,s);return}else{const r=await c,n=Object.assign(Object.assign({},s),{send_to:r});e("event",a,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(){var e;if($r())try{await Ur()}catch(c){return d2.warn(g2.create("indexeddb-unavailable",{errorInfo:(e=c)===null||e===void 0?void 0:e.toString()}).message),!1}else return d2.warn(g2.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Iw(e,c,a,s,t,r,n){var i;const o=kw(e);o.then(C=>{a[C.measurementId]=C.appId,e.options.measurementId&&C.measurementId!==e.options.measurementId&&d2.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>d2.error(C)),c.push(o);const l=_w().then(C=>{if(C)return s.getId()}),[f,h]=await Promise.all([o,l]);Lw(r)||dw(r,f.measurementId),t("js",new Date);const u=(i=n==null?void 0:n.config)!==null&&i!==void 0?i:{};return u[vw]="firebase",u.update=!0,h!=null&&(u[mw]=h),t("config",f.measurementId,u),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(c){this.app=c}_delete(){return delete p6[this.app.options.appId],Promise.resolve()}}let p6={},Ws=[];const Ks={};let n7="dataLayer",Rw="gtag",Zs,ho,Ys=!1;function Fw(){const e=[];if(uL()&&e.push("This is a browser extension environment."),mL()||e.push("Cookies are not available."),e.length>0){const c=e.map((s,t)=>`(${t+1}) ${s}`).join(" "),a=g2.create("invalid-analytics-context",{errorInfo:c});d2.warn(a.message)}}function Bw(e,c,a){Fw();const s=e.options.appId;if(!s)throw g2.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)d2.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw g2.create("no-api-key");if(p6[s]!=null)throw g2.create("already-exists",{id:s});if(!Ys){zw(n7);const{wrappedGtag:r,gtagCore:n}=gw(p6,Ws,Ks,n7,Rw);ho=r,Zs=n,Ys=!0}return p6[s]=Iw(e,Ws,Ks,c,Zs,n7,a),new Dw(e)}function Ow(e=Yr()){e=O9(e);const c=j6(e,d5);return c.isInitialized()?c.getImmediate():qw(e)}function qw(e,c={}){const a=j6(e,d5);if(a.isInitialized()){const t=a.getImmediate();if(a5(c,a.getOptions()))return t;throw g2.create("already-initialized")}return a.initialize({options:c})}function $w(e,c,a,s){e=O9(e),Pw(ho,p6[e.app.options.appId],c,a,s).catch(t=>d2.error(t))}const Qs="@firebase/analytics",Xs="0.8.4";function Uw(){V3(new X2(d5,(c,{options:a})=>{const s=c.getProvider("app").getImmediate(),t=c.getProvider("installations-internal").getImmediate();return Bw(s,t,a)},"PUBLIC")),V3(new X2("analytics-internal",e,"PRIVATE")),$2(Qs,Xs),$2(Qs,Xs,"esm2017");function e(c){try{const a=c.getProvider(d5).getImmediate();return{logEvent:(s,t,r)=>$w(a,s,t,r)}}catch(a){throw g2.create("interop-component-reg-failed",{reason:a})}}}Uw();const Gw={apiKey:"AIzaSyAEvQmZWCPgXSn8PY-SbSGordeCLH9sTHs",authDomain:"plzzz-7c447.firebaseapp.com",projectId:"plzzz-7c447",storageBucket:"plzzz-7c447.appspot.com",messagingSenderId:"898009392543",appId:"1:898009392543:web:029f8ebfd4b5adea6749aa",measurementId:"G-115HZ3LH7P"},uo=Zr(Gw);Ow(uo);const jw=mN(uo),Js=WM("lifestyle",{state:()=>({lifestyle:[]}),getters:{getLifestyle:e=>e.lifestyle},actions:{async fetchLifestyle(){const e=await xN(sN(jw,"lifestyle"));this.lifestyle=e.docs.map(c=>c.data()),e.forEach(c=>{console.log(c.data())})}}});const Ww={data(){return{lifestyle:[]}},async mounted(){await Js().fetchLifestyle(),this.lifestyle=Js().getLifestyle}},Kw={style:{"font-family":"'Sono', sans-serif"}},Zw={class:"flex-col pt-[110px]"},Yw=G6('<div class="flex bg-amber-100 h-[400px]"><div class="flex-1 text-center pt-[35px] animate-fade"><p class="text-8xl">Our</p><p class="text-8xl">lifestyle</p><p class="pt-[30px] text-xl">Do you know that our lifestyles are not ordinary?</p><p class="text-xl">Because this lifestyle,only beautiful and cute people</p><p class="text-xl">can like something like this...</p></div><div class="flex-1 items-center flex justify-center"><img class="rounded-full justify-self-center pt-9 animate-fade" src="https://i.postimg.cc/RZ2sPTdz/Capture.png" alt="" width="600"></div></div>',1),Qw={class:"flex-col z-0"},Xw={class:"flex bg-sky-200 z-0 p-4"},Jw=S("div",{class:"flex-1 z-10"},[S("img",{class:"animate-movebubble ml-[300px]",src:"https://i.postimg.cc/52G5F6Ht/bubble.png",width:"250"})],-1),ck={class:"flex-1 z-10 justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade"},ek={key:0,class:"bg-white w-[450px] m-10 p-5 text-center rounded-3xl"},ak={class:"text-4xl font-bold"},sk={class:"text-xl pt-3"},tk=["href"],rk={class:"flex bg-rose-200"},nk={class:"flex-1 z-10 items-center flex justify-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade"},ik={key:0,class:"bg-white w-[450px] m-10 p-5 text-center rounded-3xl"},ok={class:"text-4xl font-bold"},lk={class:"text-xl pt-3"},fk=["href"],hk=S("div",{class:"flex-1 z-10"},[S("img",{class:"animate-movebloss ml-[300px]",src:"https://i.postimg.cc/zGBZGPWr/blossom-removebg-preview.png",width:"250"})],-1),uk={class:"flex bg-emerald-200 p-4"},mk=S("div",{class:"flex-1 z-10"},[S("img",{class:"ml-[300px] animate-movebutter",src:"https://i.postimg.cc/853g2dsS/buttercup.png",width:"250"})],-1),vk={class:"flex-1 z-10 justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-fade"},Ck={key:0,class:"bg-white w-[450px] m-10 p-5 text-center rounded-3xl"},pk={class:"text-4xl font-bold"},dk={class:"text-xl pt-3"},zk=["href"];function Hk(e,c,a,s,t,r){const n=G2("font-awesome-icon");return S1(),R1("div",Kw,[S("div",Zw,[Yw,S("div",Qw,[S("div",Xw,[Jw,S("div",ck,[(S1(!0),R1(c2,null,I0(t.lifestyle,i=>(S1(),R1("div",{key:t.lifestyle.id,class:""},[i.Name==="Fresh"?(S1(),R1("div",ek,[S("p",ak,W1(i.Name),1),S("div",sk,[S("p",null,"Color : "+W1(i.Color),1),S("p",null,"Food : "+W1(i.Food),1),S("p",null,"Hobbie : "+W1(i.Hobbie),1),S("a",{href:i.Song,class:"text-black text-4xl mr-3"},[r1(n,{icon:"fa-brands fa-spotify",class:"pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})],8,tk)])])):q8("",!0)]))),128))])]),S("div",rk,[S("div",nk,[(S1(!0),R1(c2,null,I0(t.lifestyle,i=>(S1(),R1("div",{key:t.lifestyle.id,class:""},[i.Name==="Yuuka"?(S1(),R1("div",ik,[S("p",ok,W1(i.Name),1),S("div",lk,[S("p",null,"Color : "+W1(i.Color),1),S("p",null,"Food : "+W1(i.Food),1),S("p",null,"Hobbie : "+W1(i.Hobbie),1),S("a",{href:i.Song,class:"text-black text-4xl mr-3"},[r1(n,{icon:"fa-brands fa-spotify",class:"pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})],8,fk)])])):q8("",!0)]))),128))]),hk]),S("div",uk,[mk,S("div",vk,[(S1(!0),R1(c2,null,I0(t.lifestyle,i=>(S1(),R1("div",{key:t.lifestyle.id,class:""},[i.Name==="Yeepoon"?(S1(),R1("div",Ck,[S("p",pk,W1(i.Name),1),S("div",dk,[S("p",null,"Color : "+W1(i.Color),1),S("p",null,"Food : "+W1(i.Food),1),S("p",null,"Hobbie : "+W1(i.Hobbie),1),S("a",{href:i.Song,class:"text-black text-4xl mr-3"},[r1(n,{icon:"fa-brands fa-spotify",class:"pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"})],8,zk)])])):q8("",!0)]))),128))])])])])])}const Mk=W2(Ww,[["render",Hk]]),Vk={data(){return{dropdown:!1,count:0,name:"ford"}}},gk={class:"pt-40"},Lk={key:0},bk=S("div",null,"This is onchange",-1),xk=S("div",null,"This is v-model",-1);function yk(e,c,a,s,t,r){return S1(),R1(c2,null,[S("div",gk,[S("button",{onClick:c[0]||(c[0]=n=>t.dropdown=!t.dropdown)},"switch"),t.dropdown?(S1(),R1("div",Lk,"open")):q8("",!0)]),bk,S("input",{class:"p-2 border-2",type:"text",onChange:c[1]||(c[1]=n=>t.count++)},null,32),S("div",null," count :: "+W1(t.count),1),xk,RH(S("input",{"onUpdate:modelValue":c[2]||(c[2]=n=>t.name=n)},null,512),[[IM,t.name]]),S("div",null,W1(t.name),1)],64)}const Sk=W2(Vk,[["render",yk]]),Nk=hg({history:SV("/Project/"),routes:[{path:"/",name:"home",component:Dg,meta:{layout:"Main"}},{path:"/yuuka",name:"yuuka",component:eL,meta:{layout:"Main"}},{path:"/fresh",name:"fresh",component:rL,meta:{layout:"Main"}},{path:"/yeepoon",name:"yeepoon",component:Ga,meta:{layout:"Main"}},{path:"/yeepoon",name:"yeepoon",component:Ga,meta:{layout:"Main"}},{path:"/flex",name:"flex",component:Mk,meta:{layout:"Main"}},{path:"/form",name:"form",component:Sk,meta:{layout:"Main"}},{path:"/about",name:"about",component:()=>lV(()=>import("./AboutView.fc9c8142.js"),["assets/AboutView.fc9c8142.js","assets/AboutView.4d995ba2.css"])}]});function ct(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function I(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?ct(Object(a),!0).forEach(function(s){B1(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ct(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function z5(e){return z5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},z5(e)}function wk(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function et(e,c){for(var a=0;a<c.length;a++){var s=c[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function kk(e,c,a){return c&&et(e.prototype,c),a&&et(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function B1(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function Pc(e,c){return Tk(e)||Pk(e,c)||mo(e,c)||Ik()}function n8(e){return Ak(e)||Ek(e)||mo(e)||_k()}function Ak(e){if(Array.isArray(e))return s9(e)}function Tk(e){if(Array.isArray(e))return e}function Ek(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pk(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var s=[],t=!0,r=!1,n,i;try{for(a=a.call(e);!(t=(n=a.next()).done)&&(s.push(n.value),!(c&&s.length===c));t=!0);}catch(o){r=!0,i=o}finally{try{!t&&a.return!=null&&a.return()}finally{if(r)throw i}}return s}}function mo(e,c){if(!!e){if(typeof e=="string")return s9(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return s9(e,c)}}function s9(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function _k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ik(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var at=function(){},_c={},vo={},Co=null,po={mark:at,measure:at};try{typeof window<"u"&&(_c=window),typeof document<"u"&&(vo=document),typeof MutationObserver<"u"&&(Co=MutationObserver),typeof performance<"u"&&(po=performance)}catch{}var Dk=_c.navigator||{},st=Dk.userAgent,tt=st===void 0?"":st,x3=_c,V1=vo,rt=Co,N8=po;x3.document;var n3=!!V1.documentElement&&!!V1.head&&typeof V1.addEventListener=="function"&&typeof V1.createElement=="function",zo=~tt.indexOf("MSIE")||~tt.indexOf("Trident/"),w8,k8,A8,T8,E8,a3="___FONT_AWESOME___",t9=16,Ho="fa",Mo="svg-inline--fa",s4="data-fa-i2svg",r9="data-fa-pseudo-element",Rk="data-fa-pseudo-element-pending",Ic="data-prefix",Dc="data-icon",nt="fontawesome-i2svg",Fk="async",Bk=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),M1="classic",N1="sharp",Rc=[M1,N1];function i8(e){return new Proxy(e,{get:function(a,s){return s in a?a[s]:a[M1]}})}var F6=i8((w8={},B1(w8,M1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),B1(w8,N1,{fa:"solid",fass:"solid","fa-solid":"solid"}),w8)),B6=i8((k8={},B1(k8,M1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),B1(k8,N1,{solid:"fass"}),k8)),O6=i8((A8={},B1(A8,M1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),B1(A8,N1,{fass:"fa-solid"}),A8)),Ok=i8((T8={},B1(T8,M1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),B1(T8,N1,{"fa-solid":"fass"}),T8)),qk=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,go="fa-layers-text",$k=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Uk=i8((E8={},B1(E8,M1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),B1(E8,N1,{900:"fass"}),E8)),Lo=[1,2,3,4,5,6,7,8,9,10],Gk=Lo.concat([11,12,13,14,15,16,17,18,19,20]),jk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q6=new Set;Object.keys(B6[M1]).map(q6.add.bind(q6));Object.keys(B6[N1]).map(q6.add.bind(q6));var Wk=[].concat(Rc,n8(q6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$3.GROUP,$3.SWAP_OPACITY,$3.PRIMARY,$3.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(Gk.map(function(e){return"w-".concat(e)})),d6=x3.FontAwesomeConfig||{};function Kk(e){var c=V1.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function Zk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V1&&typeof V1.querySelector=="function"){var Yk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yk.forEach(function(e){var c=Pc(e,2),a=c[0],s=c[1],t=Zk(Kk(a));t!=null&&(d6[s]=t)})}var bo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ho,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d6.familyPrefix&&(d6.cssPrefix=d6.familyPrefix);var R4=I(I({},bo),d6);R4.autoReplaceSvg||(R4.observeMutations=!1);var R={};Object.keys(bo).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(a){R4[e]=a,z6.forEach(function(s){return s(R)})},get:function(){return R4[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(c){R4.cssPrefix=c,z6.forEach(function(a){return a(R)})},get:function(){return R4.cssPrefix}});x3.FontAwesomeConfig=R;var z6=[];function Qk(e){return z6.push(e),function(){z6.splice(z6.indexOf(e),1)}}var f3=t9,O2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xk(e){if(!(!e||!n3)){var c=V1.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=V1.head.childNodes,s=null,t=a.length-1;t>-1;t--){var r=a[t],n=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=r)}return V1.head.insertBefore(c,s),e}}var Jk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $6(){for(var e=12,c="";e-- >0;)c+=Jk[Math.random()*62|0];return c}function Z4(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function Fc(e){return e.classList?Z4(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function xo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cA(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat(xo(e[a]),'" ')},"").trim()}function u0(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function Bc(e){return e.size!==O2.size||e.x!==O2.x||e.y!==O2.y||e.rotate!==O2.rotate||e.flipX||e.flipY}function eA(e){var c=e.transform,a=e.containerWidth,s=e.iconWidth,t={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),i="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(r," ").concat(n," ").concat(i)},l={transform:"translate(".concat(s/2*-1," -256)")};return{outer:t,inner:o,path:l}}function aA(e){var c=e.transform,a=e.width,s=a===void 0?t9:a,t=e.height,r=t===void 0?t9:t,n=e.startCentered,i=n===void 0?!1:n,o="";return i&&zo?o+="translate(".concat(c.x/f3-s/2,"em, ").concat(c.y/f3-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(c.x/f3,"em), calc(-50% + ").concat(c.y/f3,"em)) "):o+="translate(".concat(c.x/f3,"em, ").concat(c.y/f3,"em) "),o+="scale(".concat(c.size/f3*(c.flipX?-1:1),", ").concat(c.size/f3*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var sA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function yo(){var e=Ho,c=Mo,a=R.cssPrefix,s=R.replacementClass,t=sA;if(a!==e||s!==c){var r=new RegExp("\\.".concat(e,"\\-"),"g"),n=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(c),"g");t=t.replace(r,".".concat(a,"-")).replace(n,"--".concat(a,"-")).replace(i,".".concat(s))}return t}var it=!1;function i7(){R.autoAddCss&&!it&&(Xk(yo()),it=!0)}var tA={mixout:function(){return{dom:{css:yo,insertCss:i7}}},hooks:function(){return{beforeDOMElementCreation:function(){i7()},beforeI2svg:function(){i7()}}}},s3=x3||{};s3[a3]||(s3[a3]={});s3[a3].styles||(s3[a3].styles={});s3[a3].hooks||(s3[a3].hooks={});s3[a3].shims||(s3[a3].shims=[]);var w2=s3[a3],So=[],rA=function e(){V1.removeEventListener("DOMContentLoaded",e),H5=1,So.map(function(c){return c()})},H5=!1;n3&&(H5=(V1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V1.readyState),H5||V1.addEventListener("DOMContentLoaded",rA));function nA(e){!n3||(H5?setTimeout(e,0):So.push(e))}function o8(e){var c=e.tag,a=e.attributes,s=a===void 0?{}:a,t=e.children,r=t===void 0?[]:t;return typeof e=="string"?xo(e):"<".concat(c," ").concat(cA(s),">").concat(r.map(o8).join(""),"</").concat(c,">")}function ot(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var iA=function(c,a){return function(s,t,r,n){return c.call(a,s,t,r,n)}},o7=function(c,a,s,t){var r=Object.keys(c),n=r.length,i=t!==void 0?iA(a,t):a,o,l,f;for(s===void 0?(o=1,f=c[r[0]]):(o=0,f=s);o<n;o++)l=r[o],f=i(f,c[l],l,c);return f};function oA(e){for(var c=[],a=0,s=e.length;a<s;){var t=e.charCodeAt(a++);if(t>=55296&&t<=56319&&a<s){var r=e.charCodeAt(a++);(r&64512)==56320?c.push(((t&1023)<<10)+(r&1023)+65536):(c.push(t),a--)}else c.push(t)}return c}function n9(e){var c=oA(e);return c.length===1?c[0].toString(16):null}function lA(e,c){var a=e.length,s=e.charCodeAt(c),t;return s>=55296&&s<=56319&&a>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(s-55296)*1024+t-56320+65536:s}function lt(e){return Object.keys(e).reduce(function(c,a){var s=e[a],t=!!s.icon;return t?c[s.iconName]=s.icon:c[a]=s,c},{})}function i9(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=a.skipHooks,t=s===void 0?!1:s,r=lt(c);typeof w2.hooks.addPack=="function"&&!t?w2.hooks.addPack(e,lt(c)):w2.styles[e]=I(I({},w2.styles[e]||{}),r),e==="fas"&&i9("fa",c)}var P8,_8,I8,C4=w2.styles,fA=w2.shims,hA=(P8={},B1(P8,M1,Object.values(O6[M1])),B1(P8,N1,Object.values(O6[N1])),P8),Oc=null,No={},wo={},ko={},Ao={},To={},uA=(_8={},B1(_8,M1,Object.keys(F6[M1])),B1(_8,N1,Object.keys(F6[N1])),_8);function mA(e){return~Wk.indexOf(e)}function vA(e,c){var a=c.split("-"),s=a[0],t=a.slice(1).join("-");return s===e&&t!==""&&!mA(t)?t:null}var Eo=function(){var c=function(r){return o7(C4,function(n,i,o){return n[o]=o7(i,r,{}),n},{})};No=c(function(t,r,n){if(r[3]&&(t[r[3]]=n),r[2]){var i=r[2].filter(function(o){return typeof o=="number"});i.forEach(function(o){t[o.toString(16)]=n})}return t}),wo=c(function(t,r,n){if(t[n]=n,r[2]){var i=r[2].filter(function(o){return typeof o=="string"});i.forEach(function(o){t[o]=n})}return t}),To=c(function(t,r,n){var i=r[2];return t[n]=n,i.forEach(function(o){t[o]=n}),t});var a="far"in C4||R.autoFetchSvg,s=o7(fA,function(t,r){var n=r[0],i=r[1],o=r[2];return i==="far"&&!a&&(i="fas"),typeof n=="string"&&(t.names[n]={prefix:i,iconName:o}),typeof n=="number"&&(t.unicodes[n.toString(16)]={prefix:i,iconName:o}),t},{names:{},unicodes:{}});ko=s.names,Ao=s.unicodes,Oc=m0(R.styleDefault,{family:R.familyDefault})};Qk(function(e){Oc=m0(e.styleDefault,{family:R.familyDefault})});Eo();function qc(e,c){return(No[e]||{})[c]}function CA(e,c){return(wo[e]||{})[c]}function U3(e,c){return(To[e]||{})[c]}function Po(e){return ko[e]||{prefix:null,iconName:null}}function pA(e){var c=Ao[e],a=qc("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function y3(){return Oc}var $c=function(){return{prefix:null,iconName:null,rest:[]}};function m0(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,s=a===void 0?M1:a,t=F6[s][e],r=B6[s][e]||B6[s][t],n=e in w2.styles?e:null;return r||n||null}var ft=(I8={},B1(I8,M1,Object.keys(O6[M1])),B1(I8,N1,Object.keys(O6[N1])),I8);function v0(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.skipLookups,t=s===void 0?!1:s,r=(c={},B1(c,M1,"".concat(R.cssPrefix,"-").concat(M1)),B1(c,N1,"".concat(R.cssPrefix,"-").concat(N1)),c),n=null,i=M1;(e.includes(r[M1])||e.some(function(l){return ft[M1].includes(l)}))&&(i=M1),(e.includes(r[N1])||e.some(function(l){return ft[N1].includes(l)}))&&(i=N1);var o=e.reduce(function(l,f){var h=vA(R.cssPrefix,f);if(C4[f]?(f=hA[i].includes(f)?Ok[i][f]:f,n=f,l.prefix=f):uA[i].indexOf(f)>-1?(n=f,l.prefix=m0(f,{family:i})):h?l.iconName=h:f!==R.replacementClass&&f!==r[M1]&&f!==r[N1]&&l.rest.push(f),!t&&l.prefix&&l.iconName){var u=n==="fa"?Po(l.iconName):{},C=U3(l.prefix,l.iconName);u.prefix&&(n=null),l.iconName=u.iconName||C||l.iconName,l.prefix=u.prefix||l.prefix,l.prefix==="far"&&!C4.far&&C4.fas&&!R.autoFetchSvg&&(l.prefix="fas")}return l},$c());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&i===N1&&(C4.fass||R.autoFetchSvg)&&(o.prefix="fass",o.iconName=U3(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=y3()||"fas"),o}var dA=function(){function e(){wk(this,e),this.definitions={}}return kk(e,[{key:"add",value:function(){for(var a=this,s=arguments.length,t=new Array(s),r=0;r<s;r++)t[r]=arguments[r];var n=t.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(i){a.definitions[i]=I(I({},a.definitions[i]||{}),n[i]),i9(i,n[i]);var o=O6[M1][i];o&&i9(o,n[i]),Eo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,s){var t=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(t).map(function(r){var n=t[r],i=n.prefix,o=n.iconName,l=n.icon,f=l[2];a[i]||(a[i]={}),f.length>0&&f.forEach(function(h){typeof h=="string"&&(a[i][h]=l)}),a[i][o]=l}),a}}]),e}(),ht=[],p4={},x4={},zA=Object.keys(x4);function HA(e,c){var a=c.mixoutsTo;return ht=e,p4={},Object.keys(x4).forEach(function(s){zA.indexOf(s)===-1&&delete x4[s]}),ht.forEach(function(s){var t=s.mixout?s.mixout():{};if(Object.keys(t).forEach(function(n){typeof t[n]=="function"&&(a[n]=t[n]),z5(t[n])==="object"&&Object.keys(t[n]).forEach(function(i){a[n]||(a[n]={}),a[n][i]=t[n][i]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(n){p4[n]||(p4[n]=[]),p4[n].push(r[n])})}s.provides&&s.provides(x4)}),a}function o9(e,c){for(var a=arguments.length,s=new Array(a>2?a-2:0),t=2;t<a;t++)s[t-2]=arguments[t];var r=p4[e]||[];return r.forEach(function(n){c=n.apply(null,[c].concat(s))}),c}function t4(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),s=1;s<c;s++)a[s-1]=arguments[s];var t=p4[e]||[];t.forEach(function(r){r.apply(null,a)})}function t3(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return x4[e]?x4[e].apply(null,c):void 0}function l9(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||y3();if(!!c)return c=U3(a,c)||c,ot(_o.definitions,a,c)||ot(w2.styles,a,c)}var _o=new dA,MA=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,t4("noAuto")},VA={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n3?(t4("beforeI2svg",c),t3("pseudoElements2svg",c),t3("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,nA(function(){LA({autoReplaceSvgRoot:a}),t4("watch",c)})}},gA={icon:function(c){if(c===null)return null;if(z5(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:U3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=m0(c[0]);return{prefix:s,iconName:U3(s,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(R.cssPrefix,"-"))>-1||c.match(qk))){var t=v0(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||y3(),iconName:U3(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){var r=y3();return{prefix:r,iconName:U3(r,c)||c}}}},M2={noAuto:MA,config:R,dom:VA,parse:gA,library:_o,findIconDefinition:l9,toHtml:o8},LA=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,s=a===void 0?V1:a;(Object.keys(w2.styles).length>0||R.autoFetchSvg)&&n3&&R.autoReplaceSvg&&M2.dom.i2svg({node:s})};function C0(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(s){return o8(s)})}}),Object.defineProperty(e,"node",{get:function(){if(!!n3){var s=V1.createElement("div");return s.innerHTML=e.html,s.children}}}),e}function bA(e){var c=e.children,a=e.main,s=e.mask,t=e.attributes,r=e.styles,n=e.transform;if(Bc(n)&&a.found&&!s.found){var i=a.width,o=a.height,l={x:i/o/2,y:.5};t.style=u0(I(I({},r),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function xA(e){var c=e.prefix,a=e.iconName,s=e.children,t=e.attributes,r=e.symbol,n=r===!0?"".concat(c,"-").concat(R.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},t),{},{id:n}),children:s}]}]}function Uc(e){var c=e.icons,a=c.main,s=c.mask,t=e.prefix,r=e.iconName,n=e.transform,i=e.symbol,o=e.title,l=e.maskId,f=e.titleId,h=e.extra,u=e.watchable,C=u===void 0?!1:u,z=s.found?s:a,L=z.width,k=z.height,d=t==="fak",M=[R.replacementClass,r?"".concat(R.cssPrefix,"-").concat(r):""].filter(function(g1){return h.classes.indexOf(g1)===-1}).filter(function(g1){return g1!==""||!!g1}).concat(h.classes).join(" "),y={children:[],attributes:I(I({},h.attributes),{},{"data-prefix":t,"data-icon":r,class:M,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(k)})},B=d&&!~h.classes.indexOf("fa-fw")?{width:"".concat(L/k*16*.0625,"em")}:{};C&&(y.attributes[s4]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||$6())},children:[o]}),delete y.attributes.title);var G=I(I({},y),{},{prefix:t,iconName:r,main:a,mask:s,maskId:l,transform:n,symbol:i,styles:I(I({},B),h.styles)}),l1=s.found&&a.found?t3("generateAbstractMask",G)||{children:[],attributes:{}}:t3("generateAbstractIcon",G)||{children:[],attributes:{}},W=l1.children,e1=l1.attributes;return G.children=W,G.attributes=e1,i?xA(G):bA(G)}function ut(e){var c=e.content,a=e.width,s=e.height,t=e.transform,r=e.title,n=e.extra,i=e.watchable,o=i===void 0?!1:i,l=I(I(I({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")});o&&(l[s4]="");var f=I({},n.styles);Bc(t)&&(f.transform=aA({transform:t,startCentered:!0,width:a,height:s}),f["-webkit-transform"]=f.transform);var h=u0(f);h.length>0&&(l.style=h);var u=[];return u.push({tag:"span",attributes:l,children:[c]}),r&&u.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),u}function yA(e){var c=e.content,a=e.title,s=e.extra,t=I(I(I({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")}),r=u0(s.styles);r.length>0&&(t.style=r);var n=[];return n.push({tag:"span",attributes:t,children:[c]}),a&&n.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),n}var l7=w2.styles;function f9(e){var c=e[0],a=e[1],s=e.slice(4),t=Pc(s,1),r=t[0],n=null;return Array.isArray(r)?n={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat($3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat($3.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat($3.PRIMARY),fill:"currentColor",d:r[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:c,height:a,icon:n}}var SA={found:!1,width:512,height:512};function NA(e,c){!Vo&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function h9(e,c){var a=c;return c==="fa"&&R.styleDefault!==null&&(c=y3()),new Promise(function(s,t){if(t3("missingIconAbstract"),a==="fa"){var r=Po(e)||{};e=r.iconName||e,c=r.prefix||c}if(e&&c&&l7[c]&&l7[c][e]){var n=l7[c][e];return s(f9(n))}NA(e,c),s(I(I({},SA),{},{icon:R.showMissingIcons&&e?t3("missingIconAbstract")||{}:{}}))})}var mt=function(){},u9=R.measurePerformance&&N8&&N8.mark&&N8.measure?N8:{mark:mt,measure:mt},t6='FA "6.2.0"',wA=function(c){return u9.mark("".concat(t6," ").concat(c," begins")),function(){return Io(c)}},Io=function(c){u9.mark("".concat(t6," ").concat(c," ends")),u9.measure("".concat(t6," ").concat(c),"".concat(t6," ").concat(c," begins"),"".concat(t6," ").concat(c," ends"))},Gc={begin:wA,end:Io},j8=function(){};function vt(e){var c=e.getAttribute?e.getAttribute(s4):null;return typeof c=="string"}function kA(e){var c=e.getAttribute?e.getAttribute(Ic):null,a=e.getAttribute?e.getAttribute(Dc):null;return c&&a}function AA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function TA(){if(R.autoReplaceSvg===!0)return W8.replace;var e=W8[R.autoReplaceSvg];return e||W8.replace}function EA(e){return V1.createElementNS("http://www.w3.org/2000/svg",e)}function PA(e){return V1.createElement(e)}function Do(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,s=a===void 0?e.tag==="svg"?EA:PA:a;if(typeof e=="string")return V1.createTextNode(e);var t=s(e.tag);Object.keys(e.attributes||[]).forEach(function(n){t.setAttribute(n,e.attributes[n])});var r=e.children||[];return r.forEach(function(n){t.appendChild(Do(n,{ceFn:s}))}),t}function _A(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var W8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(t){a.parentNode.insertBefore(Do(t),a)}),a.getAttribute(s4)===null&&R.keepOriginalSource){var s=V1.createComment(_A(a));a.parentNode.replaceChild(s,a)}else a.remove()},nest:function(c){var a=c[0],s=c[1];if(~Fc(a).indexOf(R.replacementClass))return W8.replace(c);var t=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(i,o){return o===R.replacementClass||o.match(t)?i.toSvg.push(o):i.toNode.push(o),i},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var n=s.map(function(i){return o8(i)}).join(`
`);a.setAttribute(s4,""),a.innerHTML=n}};function Ct(e){e()}function Ro(e,c){var a=typeof c=="function"?c:j8;if(e.length===0)a();else{var s=Ct;R.mutateApproach===Fk&&(s=x3.requestAnimationFrame||Ct),s(function(){var t=TA(),r=Gc.begin("mutate");e.map(t),r(),a()})}}var jc=!1;function Fo(){jc=!0}function m9(){jc=!1}var M5=null;function pt(e){if(!!rt&&!!R.observeMutations){var c=e.treeCallback,a=c===void 0?j8:c,s=e.nodeCallback,t=s===void 0?j8:s,r=e.pseudoElementsCallback,n=r===void 0?j8:r,i=e.observeMutationsRoot,o=i===void 0?V1:i;M5=new rt(function(l){if(!jc){var f=y3();Z4(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!vt(h.addedNodes[0])&&(R.searchPseudoElements&&n(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&R.searchPseudoElements&&n(h.target.parentNode),h.type==="attributes"&&vt(h.target)&&~jk.indexOf(h.attributeName))if(h.attributeName==="class"&&kA(h.target)){var u=v0(Fc(h.target)),C=u.prefix,z=u.iconName;h.target.setAttribute(Ic,C||f),z&&h.target.setAttribute(Dc,z)}else AA(h.target)&&t(h.target)})}}),n3&&M5.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function IA(){!M5||M5.disconnect()}function DA(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(s,t){var r=t.split(":"),n=r[0],i=r.slice(1);return n&&i.length>0&&(s[n]=i.join(":").trim()),s},{})),a}function RA(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),s=e.innerText!==void 0?e.innerText.trim():"",t=v0(Fc(e));return t.prefix||(t.prefix=y3()),c&&a&&(t.prefix=c,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&s.length>0&&(t.iconName=CA(t.prefix,e.innerText)||qc(t.prefix,n9(e.innerText))),!t.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function FA(e){var c=Z4(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{}),a=e.getAttribute("title"),s=e.getAttribute("data-fa-title-id");return R.autoA11y&&(a?c["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(s||$6()):(c["aria-hidden"]="true",c.focusable="false")),c}function BA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=RA(e),s=a.iconName,t=a.prefix,r=a.rest,n=FA(e),i=o9("parseNodeAttributes",{},e),o=c.styleParser?DA(e):[];return I({iconName:s,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:t,transform:O2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:n}},i)}var OA=w2.styles;function Bo(e){var c=R.autoReplaceSvg==="nest"?dt(e,{styleParser:!1}):dt(e);return~c.extra.classes.indexOf(go)?t3("generateLayersText",e,c):t3("generateSvgReplacementMutation",e,c)}var S3=new Set;Rc.map(function(e){S3.add("fa-".concat(e))});Object.keys(F6[M1]).map(S3.add.bind(S3));Object.keys(F6[N1]).map(S3.add.bind(S3));S3=n8(S3);function zt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n3)return Promise.resolve();var a=V1.documentElement.classList,s=function(h){return a.add("".concat(nt,"-").concat(h))},t=function(h){return a.remove("".concat(nt,"-").concat(h))},r=R.autoFetchSvg?S3:Rc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(OA));r.includes("fa")||r.push("fa");var n=[".".concat(go,":not([").concat(s4,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(s4,"])")})).join(", ");if(n.length===0)return Promise.resolve();var i=[];try{i=Z4(e.querySelectorAll(n))}catch{}if(i.length>0)s("pending"),t("complete");else return Promise.resolve();var o=Gc.begin("onTree"),l=i.reduce(function(f,h){try{var u=Bo(h);u&&f.push(u)}catch(C){Vo||C.name==="MissingIcon"&&console.error(C)}return f},[]);return new Promise(function(f,h){Promise.all(l).then(function(u){Ro(u,function(){s("active"),s("complete"),t("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(u){o(),h(u)})})}function qA(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bo(e).then(function(a){a&&Ro([a],c)})}function $A(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(c||{}).icon?c:l9(c||{}),t=a.mask;return t&&(t=(t||{}).icon?t:l9(t||{})),e(s,I(I({},a),{},{mask:t}))}}var UA=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,t=s===void 0?O2:s,r=a.symbol,n=r===void 0?!1:r,i=a.mask,o=i===void 0?null:i,l=a.maskId,f=l===void 0?null:l,h=a.title,u=h===void 0?null:h,C=a.titleId,z=C===void 0?null:C,L=a.classes,k=L===void 0?[]:L,d=a.attributes,M=d===void 0?{}:d,y=a.styles,B=y===void 0?{}:y;if(!!c){var G=c.prefix,l1=c.iconName,W=c.icon;return C0(I({type:"icon"},c),function(){return t4("beforeDOMElementCreation",{iconDefinition:c,params:a}),R.autoA11y&&(u?M["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(z||$6()):(M["aria-hidden"]="true",M.focusable="false")),Uc({icons:{main:f9(W),mask:o?f9(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:l1,transform:I(I({},O2),t),symbol:n,title:u,maskId:f,titleId:z,extra:{attributes:M,styles:B,classes:k}})})}},GA={mixout:function(){return{icon:$A(UA)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=zt,a.nodeCallback=qA,a}}},provides:function(c){c.i2svg=function(a){var s=a.node,t=s===void 0?V1:s,r=a.callback,n=r===void 0?function(){}:r;return zt(t,n)},c.generateSvgReplacementMutation=function(a,s){var t=s.iconName,r=s.title,n=s.titleId,i=s.prefix,o=s.transform,l=s.symbol,f=s.mask,h=s.maskId,u=s.extra;return new Promise(function(C,z){Promise.all([h9(t,i),f.iconName?h9(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var k=Pc(L,2),d=k[0],M=k[1];C([a,Uc({icons:{main:d,mask:M},prefix:i,iconName:t,transform:o,symbol:l,maskId:h,title:r,titleId:n,extra:u,watchable:!0})])}).catch(z)})},c.generateAbstractIcon=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.transform,i=a.styles,o=u0(i);o.length>0&&(t.style=o);var l;return Bc(n)&&(l=t3("generateAbstractTransformGrouping",{main:r,transform:n,containerWidth:r.width,iconWidth:r.width})),s.push(l||r.icon),{children:s,attributes:t}}}},jA={mixout:function(){return{layer:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.classes,r=t===void 0?[]:t;return C0({type:"layer"},function(){t4("beforeDOMElementCreation",{assembler:a,params:s});var n=[];return a(function(i){Array.isArray(i)?i.map(function(o){n=n.concat(o.abstract)}):n=n.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(n8(r)).join(" ")},children:n}]})}}}},WA={mixout:function(){return{counter:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.title,r=t===void 0?null:t,n=s.classes,i=n===void 0?[]:n,o=s.attributes,l=o===void 0?{}:o,f=s.styles,h=f===void 0?{}:f;return C0({type:"counter",content:a},function(){return t4("beforeDOMElementCreation",{content:a,params:s}),yA({content:a.toString(),title:r,extra:{attributes:l,styles:h,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(n8(i))}})})}}}},KA={mixout:function(){return{text:function(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=s.transform,r=t===void 0?O2:t,n=s.title,i=n===void 0?null:n,o=s.classes,l=o===void 0?[]:o,f=s.attributes,h=f===void 0?{}:f,u=s.styles,C=u===void 0?{}:u;return C0({type:"text",content:a},function(){return t4("beforeDOMElementCreation",{content:a,params:s}),ut({content:a,transform:I(I({},O2),r),title:i,extra:{attributes:h,styles:C,classes:["".concat(R.cssPrefix,"-layers-text")].concat(n8(l))}})})}}},provides:function(c){c.generateLayersText=function(a,s){var t=s.title,r=s.transform,n=s.extra,i=null,o=null;if(zo){var l=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/l,o=f.height/l}return R.autoA11y&&!t&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,ut({content:a.innerHTML,width:i,height:o,transform:r,title:t,extra:n,watchable:!0})])}}},ZA=new RegExp('"',"ug"),Ht=[1105920,1112319];function YA(e){var c=e.replace(ZA,""),a=lA(c,0),s=a>=Ht[0]&&a<=Ht[1],t=c.length===2?c[0]===c[1]:!1;return{value:n9(t?c[0]:c),isSecondary:s||t}}function Mt(e,c){var a="".concat(Rk).concat(c.replace(":","-"));return new Promise(function(s,t){if(e.getAttribute(a)!==null)return s();var r=Z4(e.children),n=r.filter(function(W){return W.getAttribute(r9)===c})[0],i=x3.getComputedStyle(e,c),o=i.getPropertyValue("font-family").match($k),l=i.getPropertyValue("font-weight"),f=i.getPropertyValue("content");if(n&&!o)return e.removeChild(n),s();if(o&&f!=="none"&&f!==""){var h=i.getPropertyValue("content"),u=~["Sharp"].indexOf(o[2])?N1:M1,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?B6[u][o[2].toLowerCase()]:Uk[u][l],z=YA(h),L=z.value,k=z.isSecondary,d=o[0].startsWith("FontAwesome"),M=qc(C,L),y=M;if(d){var B=pA(L);B.iconName&&B.prefix&&(M=B.iconName,C=B.prefix)}if(M&&!k&&(!n||n.getAttribute(Ic)!==C||n.getAttribute(Dc)!==y)){e.setAttribute(a,y),n&&e.removeChild(n);var G=BA(),l1=G.extra;l1.attributes[r9]=c,h9(M,C).then(function(W){var e1=Uc(I(I({},G),{},{icons:{main:W,mask:$c()},prefix:C,iconName:y,extra:l1,watchable:!0})),g1=V1.createElement("svg");c==="::before"?e.insertBefore(g1,e.firstChild):e.appendChild(g1),g1.outerHTML=e1.map(function(O1){return o8(O1)}).join(`
`),e.removeAttribute(a),s()}).catch(t)}else s()}else s()})}function QA(e){return Promise.all([Mt(e,"::before"),Mt(e,"::after")])}function XA(e){return e.parentNode!==document.head&&!~Bk.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(r9)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Vt(e){if(!!n3)return new Promise(function(c,a){var s=Z4(e.querySelectorAll("*")).filter(XA).map(QA),t=Gc.begin("searchPseudoElements");Fo(),Promise.all(s).then(function(){t(),m9(),c()}).catch(function(){t(),m9(),a()})})}var JA={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Vt,a}}},provides:function(c){c.pseudoElements2svg=function(a){var s=a.node,t=s===void 0?V1:s;R.searchPseudoElements&&Vt(t)}}},gt=!1,cT={mixout:function(){return{dom:{unwatch:function(){Fo(),gt=!0}}}},hooks:function(){return{bootstrap:function(){pt(o9("mutationObserverCallbacks",{}))},noAuto:function(){IA()},watch:function(a){var s=a.observeMutationsRoot;gt?m9():pt(o9("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Lt=function(c){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(s,t){var r=t.toLowerCase().split("-"),n=r[0],i=r.slice(1).join("-");if(n&&i==="h")return s.flipX=!0,s;if(n&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(n){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},a)},eT={mixout:function(){return{parse:{transform:function(a){return Lt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-transform");return t&&(a.transform=Lt(t)),a}}},provides:function(c){c.generateAbstractTransformGrouping=function(a){var s=a.main,t=a.transform,r=a.containerWidth,n=a.iconWidth,i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),l="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(o," ").concat(l," ").concat(f)},u={transform:"translate(".concat(n/2*-1," -256)")},C={outer:i,inner:h,path:u};return{tag:"g",attributes:I({},C.outer),children:[{tag:"g",attributes:I({},C.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:I(I({},s.icon.attributes),C.path)}]}]}}}},f7={x:0,y:0,width:"100%",height:"100%"};function bt(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function aT(e){return e.tag==="g"?e.children:[e]}var sT={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-mask"),r=t?v0(t.split(" ").map(function(n){return n.trim()})):$c();return r.prefix||(r.prefix=y3()),a.mask=r,a.maskId=s.getAttribute("data-fa-mask-id"),a}}},provides:function(c){c.generateAbstractMask=function(a){var s=a.children,t=a.attributes,r=a.main,n=a.mask,i=a.maskId,o=a.transform,l=r.width,f=r.icon,h=n.width,u=n.icon,C=eA({transform:o,containerWidth:h,iconWidth:l}),z={tag:"rect",attributes:I(I({},f7),{},{fill:"white"})},L=f.children?{children:f.children.map(bt)}:{},k={tag:"g",attributes:I({},C.inner),children:[bt(I({tag:f.tag,attributes:I(I({},f.attributes),C.path)},L))]},d={tag:"g",attributes:I({},C.outer),children:[k]},M="mask-".concat(i||$6()),y="clip-".concat(i||$6()),B={tag:"mask",attributes:I(I({},f7),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,d]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:aT(u)},B]};return s.push(G,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(M,")")},f7)}),{children:s,attributes:t}}}},tT={provides:function(c){var a=!1;x3.matchMedia&&(a=x3.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var s=[],t={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:I(I({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=I(I({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:I(I({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||i.children.push({tag:"animate",attributes:I(I({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:I(I({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:I(I({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||s.push({tag:"path",attributes:I(I({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},rT={hooks:function(){return{parseNodeAttributes:function(a,s){var t=s.getAttribute("data-fa-symbol"),r=t===null?!1:t===""?!0:t;return a.symbol=r,a}}}},nT=[tA,GA,jA,WA,KA,JA,cT,eT,sT,tT,rT];HA(nT,{mixoutsTo:M2});M2.noAuto;var Oo=M2.config,Wc=M2.library;M2.dom;var V5=M2.parse;M2.findIconDefinition;M2.toHtml;var iT=M2.icon;M2.layer;var oT=M2.text;M2.counter;function xt(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);c&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function S2(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?xt(Object(a),!0).forEach(function(s){f2(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):xt(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function g5(e){return g5=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},g5(e)}function f2(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function lT(e,c){if(e==null)return{};var a={},s=Object.keys(e),t,r;for(r=0;r<s.length;r++)t=s[r],!(c.indexOf(t)>=0)&&(a[t]=e[t]);return a}function fT(e,c){if(e==null)return{};var a=lT(e,c),s,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],!(c.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,s)||(a[s]=e[s]))}return a}function v9(e){return hT(e)||uT(e)||mT(e)||vT()}function hT(e){if(Array.isArray(e))return C9(e)}function uT(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mT(e,c){if(!!e){if(typeof e=="string")return C9(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C9(e,c)}}function C9(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,s=new Array(c);a<c;a++)s[a]=e[a];return s}function vT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.