(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function cu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},qs=[],jn=()=>{},ig=()=>!1,La=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),uu=n=>n.startsWith("onUpdate:"),Zt=Object.assign,hu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sg=Object.prototype.hasOwnProperty,mt=(n,e)=>sg.call(n,e),We=Array.isArray,Ys=n=>go(n)==="[object Map]",Da=n=>go(n)==="[object Set]",dh=n=>go(n)==="[object Date]",Je=n=>typeof n=="function",Ut=n=>typeof n=="string",Yn=n=>typeof n=="symbol",Et=n=>n!==null&&typeof n=="object",zd=n=>(Et(n)||Je(n))&&Je(n.then)&&Je(n.catch),Vd=Object.prototype.toString,go=n=>Vd.call(n),rg=n=>go(n).slice(8,-1),Gd=n=>go(n)==="[object Object]",fu=n=>Ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,zr=cu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},og=/-(\w)/g,wn=Ia(n=>n.replace(og,(e,t)=>t?t.toUpperCase():"")),ag=/\B([A-Z])/g,Ss=Ia(n=>n.replace(ag,"-$1").toLowerCase()),Na=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),sl=Ia(n=>n?`on${Na(n)}`:""),Xi=(n,e)=>!Object.is(n,e),ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nc=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ma=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ph;const Ua=()=>ph||(ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ut(i)?hg(i):Oa(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ut(n)||Et(n))return n}const lg=/;(?![^(]*\))/g,cg=/:([^]+)/,ug=/\/\*[^]*?\*\//g;function hg(n){const e={};return n.replace(ug,"").split(lg).forEach(t=>{if(t){const i=t.split(cg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ms(n){let e="";if(Ut(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Ms(n[t]);i&&(e+=i+" ")}else if(Et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dg=cu(fg);function Wd(n){return!!n||n===""}function pg(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Fa(n[i],e[i]);return t}function Fa(n,e){if(n===e)return!0;let t=dh(n),i=dh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Yn(n),i=Yn(e),t||i)return n===e;if(t=We(n),i=We(e),t||i)return t&&i?pg(n,e):!1;if(t=Et(n),i=Et(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fa(n[o],e[o]))return!1}}return String(n)===String(e)}function mg(n,e){return n.findIndex(t=>Fa(t,e))}const Xd=n=>!!(n&&n.__v_isRef===!0),Ue=n=>Ut(n)?n:n==null?"":We(n)||Et(n)&&(n.toString===Vd||!Je(n.toString))?Xd(n)?Ue(n.value):JSON.stringify(n,$d,2):String(n),$d=(n,e)=>Xd(e)?$d(n,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[rl(i,r)+" =>"]=s,t),{})}:Da(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>rl(t))}:Yn(e)?rl(e):Et(e)&&!We(e)&&!Gd(e)?String(e):e,rl=(n,e="")=>{var t;return Yn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class jd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){++this._on===1&&(this.prevScope=Yt,Yt=this)}off(){this._on>0&&--this._on===0&&(Yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qd(n){return new jd(n)}function Yd(){return Yt}function gg(n,e=!1){Yt&&Yt.cleanups.push(n)}let bt;const ol=new WeakSet;class Kd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ol.has(this)&&(ol.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mh(this),Qd(this);const e=bt,t=Bn;bt=this,Bn=!0;try{return this.fn()}finally{ep(this),bt=e,Bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mu(e);this.deps=this.depsTail=void 0,mh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ol.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ic(this)&&this.run()}get dirty(){return ic(this)}}let Zd=0,Vr,Gr;function Jd(n,e=!1){if(n.flags|=8,e){n.next=Gr,Gr=n;return}n.next=Vr,Vr=n}function du(){Zd++}function pu(){if(--Zd>0)return;if(Gr){let e=Gr;for(Gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vr;){let e=Vr;for(Vr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Qd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ep(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),mu(i),_g(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ic(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function tp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===to)||(n.globalVersion=to,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ic(n))))return;n.flags|=2;const e=n.dep,t=bt,i=Bn;bt=n,Bn=!0;try{Qd(n);const s=n.fn(n._value);(e.version===0||Xi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=t,Bn=i,ep(n),n.flags&=-3}}function mu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)mu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function _g(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Bn=!0;const np=[];function Si(){np.push(Bn),Bn=!1}function Mi(){const n=np.pop();Bn=n===void 0?!0:n}function mh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let to=0;class vg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Bn||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new vg(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,ip(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,to++,this.notify(e)}notify(e){du();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{pu()}}}function ip(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ip(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ga=new WeakMap,_s=Symbol(""),sc=Symbol(""),no=Symbol("");function Kt(n,e,t){if(Bn&&bt){let i=ga.get(n);i||ga.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new gu),s.map=i,s.key=t),s.track()}}function mi(n,e,t,i,s,r){const o=ga.get(n);if(!o){to++;return}const a=l=>{l&&l.trigger()};if(du(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&fu(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===no||!Yn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(no)),e){case"add":l?c&&a(o.get("length")):(a(o.get(_s)),Ys(n)&&a(o.get(sc)));break;case"delete":l||(a(o.get(_s)),Ys(n)&&a(o.get(sc)));break;case"set":Ys(n)&&a(o.get(_s));break}}pu()}function xg(n,e){const t=ga.get(n);return t&&t.get(e)}function As(n){const e=ct(n);return e===n?e:(Kt(e,"iterate",no),En(n)?e:e.map(Wt))}function Ba(n){return Kt(n=ct(n),"iterate",no),n}const yg={__proto__:null,[Symbol.iterator](){return al(this,Symbol.iterator,Wt)},concat(...n){return As(this).concat(...n.map(e=>We(e)?As(e):e))},entries(){return al(this,"entries",n=>(n[1]=Wt(n[1]),n))},every(n,e){return si(this,"every",n,e,void 0,arguments)},filter(n,e){return si(this,"filter",n,e,t=>t.map(Wt),arguments)},find(n,e){return si(this,"find",n,e,Wt,arguments)},findIndex(n,e){return si(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return si(this,"findLast",n,e,Wt,arguments)},findLastIndex(n,e){return si(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return si(this,"forEach",n,e,void 0,arguments)},includes(...n){return ll(this,"includes",n)},indexOf(...n){return ll(this,"indexOf",n)},join(n){return As(this).join(n)},lastIndexOf(...n){return ll(this,"lastIndexOf",n)},map(n,e){return si(this,"map",n,e,void 0,arguments)},pop(){return Er(this,"pop")},push(...n){return Er(this,"push",n)},reduce(n,...e){return gh(this,"reduce",n,e)},reduceRight(n,...e){return gh(this,"reduceRight",n,e)},shift(){return Er(this,"shift")},some(n,e){return si(this,"some",n,e,void 0,arguments)},splice(...n){return Er(this,"splice",n)},toReversed(){return As(this).toReversed()},toSorted(n){return As(this).toSorted(n)},toSpliced(...n){return As(this).toSpliced(...n)},unshift(...n){return Er(this,"unshift",n)},values(){return al(this,"values",Wt)}};function al(n,e,t){const i=Ba(n),s=i[e]();return i!==n&&!En(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Sg=Array.prototype;function si(n,e,t,i,s,r){const o=Ba(n),a=o!==n&&!En(n),l=o[e];if(l!==Sg[e]){const h=l.apply(n,r);return a?Wt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Wt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function gh(n,e,t,i){const s=Ba(n);let r=t;return s!==n&&(En(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Wt(a),l,n)}),s[e](r,...i)}function ll(n,e,t){const i=ct(n);Kt(i,"iterate",no);const s=i[e](...t);return(s===-1||s===!1)&&xu(t[0])?(t[0]=ct(t[0]),i[e](...t)):s}function Er(n,e,t=[]){Si(),du();const i=ct(n)[e].apply(n,t);return pu(),Mi(),i}const Mg=cu("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function bg(n){Yn(n)||(n=String(n));const e=ct(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class rp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Ig:cp:r?lp:ap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let l;if(o&&(l=yg[t]))return l;if(t==="hasOwnProperty")return bg}const a=Reflect.get(e,t,It(e)?e:i);return(Yn(t)?sp.has(t):Mg(t))||(s||Kt(e,"get",t),r)?a:It(a)?o&&fu(t)?a:a.value:Et(a)?s?hp(a):bs(a):a}}class op extends rp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Yi(r);if(!En(i)&&!Yi(i)&&(r=ct(r),i=ct(i)),!We(e)&&It(r)&&!It(i))return l?!1:(r.value=i,!0)}const o=We(e)&&fu(t)?Number(t)<e.length:mt(e,t),a=Reflect.set(e,t,i,It(e)?e:s);return e===ct(s)&&(o?Xi(i,r)&&mi(e,"set",t,i):mi(e,"add",t,i)),a}deleteProperty(e,t){const i=mt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&mi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Yn(t)||!sp.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",We(e)?"length":_s),Reflect.ownKeys(e)}}class Eg extends rp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Tg=new op,wg=new Eg,Ag=new op(!0);const rc=n=>n,Eo=n=>Reflect.getPrototypeOf(n);function Rg(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),o=Ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?rc:e?_a:Wt;return!e&&Kt(r,"iterate",l?sc:_s),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function To(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Cg(n,e){const t={get(s){const r=this.__v_raw,o=ct(r),a=ct(s);n||(Xi(s,a)&&Kt(o,"get",s),Kt(o,"get",a));const{has:l}=Eo(o),c=e?rc:n?_a:Wt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Kt(ct(s),"iterate",_s),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ct(r),a=ct(s);return n||(Xi(s,a)&&Kt(o,"has",s),Kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ct(a),c=e?rc:n?_a:Wt;return!n&&Kt(l,"iterate",_s),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Zt(t,n?{add:To("add"),set:To("set"),delete:To("delete"),clear:To("clear")}:{add(s){!e&&!En(s)&&!Yi(s)&&(s=ct(s));const r=ct(this);return Eo(r).has.call(r,s)||(r.add(s),mi(r,"add",s,s)),this},set(s,r){!e&&!En(r)&&!Yi(r)&&(r=ct(r));const o=ct(this),{has:a,get:l}=Eo(o);let c=a.call(o,s);c||(s=ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Xi(r,u)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=ct(this),{has:o,get:a}=Eo(r);let l=o.call(r,s);l||(s=ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=ct(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Rg(s,n,e)}),t}function _u(n,e){const t=Cg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(mt(t,s)&&s in i?t:i,s,r)}const Pg={get:_u(!1,!1)},Lg={get:_u(!1,!0)},Dg={get:_u(!0,!1)};const ap=new WeakMap,lp=new WeakMap,cp=new WeakMap,Ig=new WeakMap;function Ng(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ug(n){return n.__v_skip||!Object.isExtensible(n)?0:Ng(rg(n))}function bs(n){return Yi(n)?n:vu(n,!1,Tg,Pg,ap)}function up(n){return vu(n,!1,Ag,Lg,lp)}function hp(n){return vu(n,!0,wg,Dg,cp)}function vu(n,e,t,i,s){if(!Et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Ug(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function $i(n){return Yi(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function xu(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function yu(n){return!mt(n,"__v_skip")&&Object.isExtensible(n)&&nc(n,"__v_skip",!0),n}const Wt=n=>Et(n)?bs(n):n,_a=n=>Et(n)?hp(n):n;function It(n){return n?n.__v_isRef===!0:!1}function $e(n){return fp(n,!1)}function Og(n){return fp(n,!0)}function fp(n,e){return It(n)?n:new Fg(n,e)}class Fg{constructor(e,t){this.dep=new gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||En(e)||Yi(e);e=i?e:ct(e),Xi(e,t)&&(this._rawValue=e,this._value=i?e:Wt(e),this.dep.trigger())}}function Rt(n){return It(n)?n.value:n}const Bg={get:(n,e,t)=>e==="__v_raw"?n:Rt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return It(s)&&!It(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function dp(n){return $i(n)?n:new Proxy(n,Bg)}function kg(n){const e=We(n)?new Array(n.length):{};for(const t in n)e[t]=zg(n,t);return e}class Hg{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xg(ct(this._object),this._key)}}function zg(n,e,t){const i=n[e];return It(i)?i:new Hg(n,e,t)}class Vg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Jd(this,!0),!0}get value(){const e=this.dep.track();return tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gg(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new Vg(i,s,t)}const wo={},va=new WeakMap;let us;function Wg(n,e=!1,t=us){if(t){let i=va.get(t);i||va.set(t,i=[]),i.push(n)}}function Xg(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=x=>s?x:En(x)||s===!1||s===0?gi(x,1):gi(x);let u,h,f,d,g=!1,v=!1;if(It(n)?(h=()=>n.value,g=En(n)):$i(n)?(h=()=>c(n),g=!0):We(n)?(v=!0,g=n.some(x=>$i(x)||En(x)),h=()=>n.map(x=>{if(It(x))return x.value;if($i(x))return c(x);if(Je(x))return l?l(x,2):x()})):Je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Si();try{f()}finally{Mi()}}const x=us;us=u;try{return l?l(n,3,[d]):n(d)}finally{us=x}}:h=jn,e&&s){const x=h,I=s===!0?1/0:s;h=()=>gi(x(),I)}const m=Yd(),p=()=>{u.stop(),m&&m.active&&hu(m.effects,u)};if(r&&e){const x=e;e=(...I)=>{x(...I),p()}}let T=v?new Array(n.length).fill(wo):wo;const b=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const I=u.run();if(s||g||(v?I.some((P,L)=>Xi(P,T[L])):Xi(I,T))){f&&f();const P=us;us=u;try{const L=[I,T===wo?void 0:v&&T[0]===wo?[]:T,d];T=I,l?l(e,3,L):e(...L)}finally{us=P}}}else u.run()};return a&&a(b),u=new Kd(h),u.scheduler=o?()=>o(b,!1):b,d=x=>Wg(x,!1,u),f=u.onStop=()=>{const x=va.get(u);if(x){if(l)l(x,4);else for(const I of x)I();va.delete(u)}},e?i?b(!0):T=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function gi(n,e=1/0,t){if(e<=0||!Et(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,It(n))gi(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)gi(n[i],e,t);else if(Da(n)||Ys(n))n.forEach(i=>{gi(i,e,t)});else if(Gd(n)){for(const i in n)gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(n,e,t,i){try{return i?n(...i):n()}catch(s){ka(s,e,t)}}function Kn(n,e,t,i){if(Je(n)){const s=_o(n,e,t,i);return s&&zd(s)&&s.catch(r=>{ka(r,e,t)}),s}if(We(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Kn(n[r],e,t,i));return s}}function ka(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Si(),_o(r,null,10,[n,l,c]),Mi();return}}$g(n,t,s,i,o)}function $g(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const nn=[];let Gn=-1;const Ks=[];let Bi=null,Ws=0;const pp=Promise.resolve();let xa=null;function Ha(n){const e=xa||pp;return n?e.then(this?n.bind(this):n):e}function jg(n){let e=Gn+1,t=nn.length;for(;e<t;){const i=e+t>>>1,s=nn[i],r=io(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Su(n){if(!(n.flags&1)){const e=io(n),t=nn[nn.length-1];!t||!(n.flags&2)&&e>=io(t)?nn.push(n):nn.splice(jg(e),0,n),n.flags|=1,mp()}}function mp(){xa||(xa=pp.then(_p))}function qg(n){We(n)?Ks.push(...n):Bi&&n.id===-1?Bi.splice(Ws+1,0,n):n.flags&1||(Ks.push(n),n.flags|=1),mp()}function _h(n,e,t=Gn+1){for(;t<nn.length;t++){const i=nn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;nn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gp(n){if(Ks.length){const e=[...new Set(Ks)].sort((t,i)=>io(t)-io(i));if(Ks.length=0,Bi){Bi.push(...e);return}for(Bi=e,Ws=0;Ws<Bi.length;Ws++){const t=Bi[Ws];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Bi=null,Ws=0}}const io=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _p(n){try{for(Gn=0;Gn<nn.length;Gn++){const e=nn[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<nn.length;Gn++){const e=nn[Gn];e&&(e.flags&=-2)}Gn=-1,nn.length=0,gp(),xa=null,(nn.length||Ks.length)&&_p()}}let cn=null,vp=null;function ya(n){const e=cn;return cn=n,vp=n&&n.type.__scopeId||null,e}function ut(n,e=cn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ah(-1);const r=ya(e);let o;try{o=n(...s)}finally{ya(r),i._d&&Ah(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fr(n,e){if(cn===null)return n;const t=Xa(cn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Mt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ts(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Si(),Kn(l,t,8,[n.el,a,n,e]),Mi())}}const Yg=Symbol("_vte"),Kg=n=>n.__isTeleport;function Mu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Mu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xp(n,e){return Je(n)?Zt({name:n.name},e,{setup:n}):n}function yp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wr(n,e,t,i,s=!1){if(We(n)){n.forEach((g,v)=>Wr(g,e&&(We(e)?e[v]:e),t,i,s));return}if(Xr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Xa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Mt?a.refs={}:a.refs,h=a.setupState,f=ct(h),d=h===Mt?()=>!1:g=>mt(f,g);if(c!=null&&c!==l&&(Ut(c)?(u[c]=null,d(c)&&(h[c]=null)):It(c)&&(c.value=null)),Je(l))_o(l,a,12,[o,u]);else{const g=Ut(l),v=It(l);if(g||v){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?We(p)&&hu(p,r):We(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,pn(m,t)):m()}}}Ua().requestIdleCallback;Ua().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,Sp=n=>n.type.__isKeepAlive;function Zg(n,e){Mp(n,"a",e)}function Jg(n,e){Mp(n,"da",e)}function Mp(n,e,t=$t){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(za(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Sp(s.parent.vnode)&&Qg(i,e,t,s),s=s.parent}}function Qg(n,e,t,i){const s=za(e,n,i,!0);gr(()=>{hu(i[e],s)},t)}function za(n,e,t=$t,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Si();const a=vo(t),l=Kn(e,t,n,o);return a(),Mi(),l});return i?s.unshift(r):s.push(r),r}}const Ei=n=>(e,t=$t)=>{(!ro||n==="sp")&&za(n,(...i)=>e(...i),t)},e_=Ei("bm"),Es=Ei("m"),t_=Ei("bu"),n_=Ei("u"),bp=Ei("bum"),gr=Ei("um"),i_=Ei("sp"),s_=Ei("rtg"),r_=Ei("rtc");function o_(n,e=$t){za("ec",n,e)}const a_="components";function Rn(n,e){return c_(a_,n,!0,e)||n}const l_=Symbol.for("v-ndc");function c_(n,e,t=!0,i=!1){const s=cn||$t;if(s){const r=s.type;{const a=K_(r,!1);if(a&&(a===e||a===wn(e)||a===Na(wn(e))))return r}const o=vh(s[n]||r[n],e)||vh(s.appContext[n],e);return!o&&i?r:o}}function vh(n,e){return n&&(n[e]||n[wn(e)]||n[Na(wn(e))])}function An(n,e,t,i){let s;const r=t,o=We(n);if(o||Ut(n)){const a=o&&$i(n);let l=!1,c=!1;a&&(l=!En(n),c=Yi(n),n=Ba(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?_a(Wt(n[u])):Wt(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(Et(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const oc=n=>n?Gp(n)?Xa(n):oc(n.parent):null,$r=Zt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>oc(n.parent),$root:n=>oc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Tp(n),$forceUpdate:n=>n.f||(n.f=()=>{Su(n.update)}),$nextTick:n=>n.n||(n.n=Ha.bind(n.proxy)),$watch:n=>L_.bind(n)}),cl=(n,e)=>n!==Mt&&!n.__isScriptSetup&&mt(n,e),u_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(cl(i,e))return o[e]=1,i[e];if(s!==Mt&&mt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&mt(c,e))return o[e]=3,r[e];if(t!==Mt&&mt(t,e))return o[e]=4,t[e];ac&&(o[e]=0)}}const u=$r[e];let h,f;if(u)return e==="$attrs"&&Kt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Mt&&mt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,mt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return cl(s,e)?(s[e]=t,!0):i!==Mt&&mt(i,e)?(i[e]=t,!0):mt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==Mt&&mt(n,o)||cl(e,o)||(a=r[0])&&mt(a,o)||mt(i,o)||mt($r,o)||mt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xh(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ac=!0;function h_(n){const e=Tp(n),t=n.proxy,i=n.ctx;ac=!1,e.beforeCreate&&yh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:b,unmounted:x,render:I,renderTracked:P,renderTriggered:L,errorCaptured:D,serverPrefetch:C,expose:E,inheritAttrs:U,components:ne,directives:q,filters:le}=e;if(c&&f_(c,i,null),o)for(const K in o){const G=o[K];Je(G)&&(i[K]=G.bind(t))}if(s){const K=s.call(t,t);Et(K)&&(n.data=bs(K))}if(ac=!0,r)for(const K in r){const G=r[K],_e=Je(G)?G.bind(t,t):Je(G.get)?G.get.bind(t,t):jn,Se=!Je(G)&&Je(G.set)?G.set.bind(t):jn,we=zt({get:_e,set:Se});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>we.value,set:Be=>we.value=Be})}if(a)for(const K in a)Ep(a[K],i,t,K);if(l){const K=Je(l)?l.call(t):l;Reflect.ownKeys(K).forEach(G=>{sa(G,K[G])})}u&&yh(u,n,"c");function Q(K,G){We(G)?G.forEach(_e=>K(_e.bind(t))):G&&K(G.bind(t))}if(Q(e_,h),Q(Es,f),Q(t_,d),Q(n_,g),Q(Zg,v),Q(Jg,m),Q(o_,D),Q(r_,P),Q(s_,L),Q(bp,T),Q(gr,x),Q(i_,C),We(E))if(E.length){const K=n.exposed||(n.exposed={});E.forEach(G=>{Object.defineProperty(K,G,{get:()=>t[G],set:_e=>t[G]=_e})})}else n.exposed||(n.exposed={});I&&n.render===jn&&(n.render=I),U!=null&&(n.inheritAttrs=U),ne&&(n.components=ne),q&&(n.directives=q),C&&yp(n)}function f_(n,e,t=jn){We(n)&&(n=lc(n));for(const i in n){const s=n[i];let r;Et(s)?"default"in s?r=Tn(s.from||i,s.default,!0):r=Tn(s.from||i):r=Tn(s),It(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function yh(n,e,t){Kn(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ep(n,e,t,i){let s=i.includes(".")?Bp(t,i):()=>t[i];if(Ut(n)){const r=e[n];Je(r)&&jr(s,r)}else if(Je(n))jr(s,n.bind(t));else if(Et(n))if(We(n))n.forEach(r=>Ep(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&jr(s,r,n)}}function Tp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Sa(l,c,o,!0)),Sa(l,e,o)),Et(e)&&r.set(e,l),l}function Sa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Sa(n,r,t,!0),s&&s.forEach(o=>Sa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=d_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const d_={data:Sh,props:Mh,emits:Mh,methods:Br,computed:Br,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Br,directives:Br,watch:m_,provide:Sh,inject:p_};function Sh(n,e){return e?n?function(){return Zt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function p_(n,e){return Br(lc(n),lc(e))}function lc(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function en(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?Zt(Object.create(null),n,e):e}function Mh(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Zt(Object.create(null),xh(n),xh(e??{})):e}function m_(n,e){if(!n)return e;if(!e)return n;const t=Zt(Object.create(null),n);for(const i in e)t[i]=en(n[i],e[i]);return t}function wp(){return{app:null,config:{isNativeTag:ig,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g_=0;function __(n,e){return function(i,s=null){Je(i)||(i=Zt({},i)),s!=null&&!Et(s)&&(s=null);const r=wp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:g_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:J_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...h)):Je(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||pe(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Xa(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=vs;vs=c;try{return u()}finally{vs=h}}};return c}}let vs=null;function sa(n,e){if($t){let t=$t.provides;const i=$t.parent&&$t.parent.provides;i===t&&(t=$t.provides=Object.create(i)),t[n]=e}}function Tn(n,e,t=!1){const i=$t||cn;if(i||vs){let s=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}function v_(){return!!($t||cn||vs)}const Ap={},Rp=()=>Object.create(Ap),Cp=n=>Object.getPrototypeOf(n)===Ap;function x_(n,e,t,i=!1){const s={},r=Rp();n.propsDefaults=Object.create(null),Pp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:up(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function y_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ct(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Va(n.emitsOptions,f))continue;const d=e[f];if(l)if(mt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=wn(f);s[g]=cc(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Pp(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!mt(e,h)&&((u=Ss(h))===h||!mt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=cc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!mt(e,h))&&(delete r[h],c=!0)}c&&mi(n.attrs,"set","")}function Pp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(zr(l))continue;const c=e[l];let u;s&&mt(s,u=wn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Va(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ct(t),c=a||Mt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=cc(s,l,h,c[h],n,!mt(c,h))}}return o}function cc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=vo(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ss(t))&&(i=!0))}return i}const S_=new WeakMap;function Lp(n,e,t=!1){const i=t?S_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=h=>{l=!0;const[f,d]=Lp(h,e,!0);Zt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Et(n)&&i.set(n,qs),qs;if(We(r))for(let u=0;u<r.length;u++){const h=wn(r[u]);bh(h)&&(o[h]=Mt)}else if(r)for(const u in r){const h=wn(u);if(bh(h)){const f=r[u],d=o[h]=We(f)||Je(f)?{type:f}:Zt({},f),g=d.type;let v=!1,m=!0;if(We(g))for(let p=0;p<g.length;++p){const T=g[p],b=Je(T)&&T.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=Je(g)&&g.name==="Boolean";d[0]=v,d[1]=m,(v||mt(d,"default"))&&a.push(h)}}const c=[o,a];return Et(n)&&i.set(n,c),c}function bh(n){return n[0]!=="$"&&!zr(n)}const bu=n=>n[0]==="_"||n==="$stable",Eu=n=>We(n)?n.map(Wn):[Wn(n)],M_=(n,e,t)=>{if(e._n)return e;const i=ut((...s)=>Eu(e(...s)),t);return i._c=!1,i},Dp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(bu(s))continue;const r=n[s];if(Je(r))e[s]=M_(s,r,i);else if(r!=null){const o=Eu(r);e[s]=()=>o}}},Ip=(n,e)=>{const t=Eu(e);n.slots.default=()=>t},Np=(n,e,t)=>{for(const i in e)(t||!bu(i))&&(n[i]=e[i])},b_=(n,e,t)=>{const i=n.slots=Rp();if(n.vnode.shapeFlag&32){const s=e.__;s&&nc(i,"__",s,!0);const r=e._;r?(Np(i,e,t),t&&nc(i,"_",r,!0)):Dp(e,i)}else e&&Ip(n,e)},E_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Np(s,e,t):(r=!e.$stable,Dp(e,s)),o=e}else e&&(Ip(n,e),o={default:1});if(r)for(const a in s)!bu(a)&&o[a]==null&&delete s[a]},pn=B_;function T_(n){return w_(n)}function w_(n,e){const t=Ua();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=jn,insertStaticContent:g}=n,v=(M,w,_,k=null,V=null,te=null,re=void 0,ue=null,se=!!w.dynamicChildren)=>{if(M===w)return;M&&!Tr(M,w)&&(k=B(M),Be(M,V,te,!0),M=null),w.patchFlag===-2&&(se=!1,w.dynamicChildren=null);const{type:ie,ref:Ae,shapeFlag:R}=w;switch(ie){case Ga:m(M,w,_,k);break;case Ki:p(M,w,_,k);break;case ra:M==null&&T(w,_,k,re);break;case Lt:ne(M,w,_,k,V,te,re,ue,se);break;default:R&1?I(M,w,_,k,V,te,re,ue,se):R&6?q(M,w,_,k,V,te,re,ue,se):(R&64||R&128)&&ie.process(M,w,_,k,V,te,re,ue,se,X)}Ae!=null&&V?Wr(Ae,M&&M.ref,te,w||M,!w):Ae==null&&M&&M.ref!=null&&Wr(M.ref,null,te,M,!0)},m=(M,w,_,k)=>{if(M==null)i(w.el=a(w.children),_,k);else{const V=w.el=M.el;w.children!==M.children&&c(V,w.children)}},p=(M,w,_,k)=>{M==null?i(w.el=l(w.children||""),_,k):w.el=M.el},T=(M,w,_,k)=>{[M.el,M.anchor]=g(M.children,w,_,k,M.el,M.anchor)},b=({el:M,anchor:w},_,k)=>{let V;for(;M&&M!==w;)V=f(M),i(M,_,k),M=V;i(w,_,k)},x=({el:M,anchor:w})=>{let _;for(;M&&M!==w;)_=f(M),s(M),M=_;s(w)},I=(M,w,_,k,V,te,re,ue,se)=>{w.type==="svg"?re="svg":w.type==="math"&&(re="mathml"),M==null?P(w,_,k,V,te,re,ue,se):C(M,w,V,te,re,ue,se)},P=(M,w,_,k,V,te,re,ue)=>{let se,ie;const{props:Ae,shapeFlag:R,transition:y,dirs:O}=M;if(se=M.el=o(M.type,te,Ae&&Ae.is,Ae),R&8?u(se,M.children):R&16&&D(M.children,se,null,k,V,ul(M,te),re,ue),O&&ts(M,null,k,"created"),L(se,M,M.scopeId,re,k),Ae){for(const oe in Ae)oe!=="value"&&!zr(oe)&&r(se,oe,null,Ae[oe],te,k);"value"in Ae&&r(se,"value",null,Ae.value,te),(ie=Ae.onVnodeBeforeMount)&&Vn(ie,k,M)}O&&ts(M,null,k,"beforeMount");const Y=A_(V,y);Y&&y.beforeEnter(se),i(se,w,_),((ie=Ae&&Ae.onVnodeMounted)||Y||O)&&pn(()=>{ie&&Vn(ie,k,M),Y&&y.enter(se),O&&ts(M,null,k,"mounted")},V)},L=(M,w,_,k,V)=>{if(_&&d(M,_),k)for(let te=0;te<k.length;te++)d(M,k[te]);if(V){let te=V.subTree;if(w===te||Hp(te.type)&&(te.ssContent===w||te.ssFallback===w)){const re=V.vnode;L(M,re,re.scopeId,re.slotScopeIds,V.parent)}}},D=(M,w,_,k,V,te,re,ue,se=0)=>{for(let ie=se;ie<M.length;ie++){const Ae=M[ie]=ue?ki(M[ie]):Wn(M[ie]);v(null,Ae,w,_,k,V,te,re,ue)}},C=(M,w,_,k,V,te,re)=>{const ue=w.el=M.el;let{patchFlag:se,dynamicChildren:ie,dirs:Ae}=w;se|=M.patchFlag&16;const R=M.props||Mt,y=w.props||Mt;let O;if(_&&ns(_,!1),(O=y.onVnodeBeforeUpdate)&&Vn(O,_,w,M),Ae&&ts(w,M,_,"beforeUpdate"),_&&ns(_,!0),(R.innerHTML&&y.innerHTML==null||R.textContent&&y.textContent==null)&&u(ue,""),ie?E(M.dynamicChildren,ie,ue,_,k,ul(w,V),te):re||G(M,w,ue,null,_,k,ul(w,V),te,!1),se>0){if(se&16)U(ue,R,y,_,V);else if(se&2&&R.class!==y.class&&r(ue,"class",null,y.class,V),se&4&&r(ue,"style",R.style,y.style,V),se&8){const Y=w.dynamicProps;for(let oe=0;oe<Y.length;oe++){const j=Y[oe],Pe=R[j],ye=y[j];(ye!==Pe||j==="value")&&r(ue,j,Pe,ye,V,_)}}se&1&&M.children!==w.children&&u(ue,w.children)}else!re&&ie==null&&U(ue,R,y,_,V);((O=y.onVnodeUpdated)||Ae)&&pn(()=>{O&&Vn(O,_,w,M),Ae&&ts(w,M,_,"updated")},k)},E=(M,w,_,k,V,te,re)=>{for(let ue=0;ue<w.length;ue++){const se=M[ue],ie=w[ue],Ae=se.el&&(se.type===Lt||!Tr(se,ie)||se.shapeFlag&198)?h(se.el):_;v(se,ie,Ae,null,k,V,te,re,!0)}},U=(M,w,_,k,V)=>{if(w!==_){if(w!==Mt)for(const te in w)!zr(te)&&!(te in _)&&r(M,te,w[te],null,V,k);for(const te in _){if(zr(te))continue;const re=_[te],ue=w[te];re!==ue&&te!=="value"&&r(M,te,ue,re,V,k)}"value"in _&&r(M,"value",w.value,_.value,V)}},ne=(M,w,_,k,V,te,re,ue,se)=>{const ie=w.el=M?M.el:a(""),Ae=w.anchor=M?M.anchor:a("");let{patchFlag:R,dynamicChildren:y,slotScopeIds:O}=w;O&&(ue=ue?ue.concat(O):O),M==null?(i(ie,_,k),i(Ae,_,k),D(w.children||[],_,Ae,V,te,re,ue,se)):R>0&&R&64&&y&&M.dynamicChildren?(E(M.dynamicChildren,y,_,V,te,re,ue),(w.key!=null||V&&w===V.subTree)&&Up(M,w,!0)):G(M,w,_,Ae,V,te,re,ue,se)},q=(M,w,_,k,V,te,re,ue,se)=>{w.slotScopeIds=ue,M==null?w.shapeFlag&512?V.ctx.activate(w,_,k,re,se):le(w,_,k,V,te,re,se):ce(M,w,se)},le=(M,w,_,k,V,te,re)=>{const ue=M.component=X_(M,k,V);if(Sp(M)&&(ue.ctx.renderer=X),$_(ue,!1,re),ue.asyncDep){if(V&&V.registerDep(ue,Q,re),!M.el){const se=ue.subTree=pe(Ki);p(null,se,w,_)}}else Q(ue,M,w,_,V,te,re)},ce=(M,w,_)=>{const k=w.component=M.component;if(O_(M,w,_))if(k.asyncDep&&!k.asyncResolved){K(k,w,_);return}else k.next=w,k.update();else w.el=M.el,k.vnode=w},Q=(M,w,_,k,V,te,re)=>{const ue=()=>{if(M.isMounted){let{next:R,bu:y,u:O,parent:Y,vnode:oe}=M;{const Ie=Op(M);if(Ie){R&&(R.el=oe.el,K(M,R,re)),Ie.asyncDep.then(()=>{M.isUnmounted||ue()});return}}let j=R,Pe;ns(M,!1),R?(R.el=oe.el,K(M,R,re)):R=oe,y&&ia(y),(Pe=R.props&&R.props.onVnodeBeforeUpdate)&&Vn(Pe,Y,R,oe),ns(M,!0);const ye=Th(M),Le=M.subTree;M.subTree=ye,v(Le,ye,h(Le.el),B(Le),M,V,te),R.el=ye.el,j===null&&F_(M,ye.el),O&&pn(O,V),(Pe=R.props&&R.props.onVnodeUpdated)&&pn(()=>Vn(Pe,Y,R,oe),V)}else{let R;const{el:y,props:O}=w,{bm:Y,m:oe,parent:j,root:Pe,type:ye}=M,Le=Xr(w);ns(M,!1),Y&&ia(Y),!Le&&(R=O&&O.onVnodeBeforeMount)&&Vn(R,j,w),ns(M,!0);{Pe.ce&&Pe.ce._def.shadowRoot!==!1&&Pe.ce._injectChildStyle(ye);const Ie=M.subTree=Th(M);v(null,Ie,_,k,M,V,te),w.el=Ie.el}if(oe&&pn(oe,V),!Le&&(R=O&&O.onVnodeMounted)){const Ie=w;pn(()=>Vn(R,j,Ie),V)}(w.shapeFlag&256||j&&Xr(j.vnode)&&j.vnode.shapeFlag&256)&&M.a&&pn(M.a,V),M.isMounted=!0,w=_=k=null}};M.scope.on();const se=M.effect=new Kd(ue);M.scope.off();const ie=M.update=se.run.bind(se),Ae=M.job=se.runIfDirty.bind(se);Ae.i=M,Ae.id=M.uid,se.scheduler=()=>Su(Ae),ns(M,!0),ie()},K=(M,w,_)=>{w.component=M;const k=M.vnode.props;M.vnode=w,M.next=null,y_(M,w.props,k,_),E_(M,w.children,_),Si(),_h(M),Mi()},G=(M,w,_,k,V,te,re,ue,se=!1)=>{const ie=M&&M.children,Ae=M?M.shapeFlag:0,R=w.children,{patchFlag:y,shapeFlag:O}=w;if(y>0){if(y&128){Se(ie,R,_,k,V,te,re,ue,se);return}else if(y&256){_e(ie,R,_,k,V,te,re,ue,se);return}}O&8?(Ae&16&&Ee(ie,V,te),R!==ie&&u(_,R)):Ae&16?O&16?Se(ie,R,_,k,V,te,re,ue,se):Ee(ie,V,te,!0):(Ae&8&&u(_,""),O&16&&D(R,_,k,V,te,re,ue,se))},_e=(M,w,_,k,V,te,re,ue,se)=>{M=M||qs,w=w||qs;const ie=M.length,Ae=w.length,R=Math.min(ie,Ae);let y;for(y=0;y<R;y++){const O=w[y]=se?ki(w[y]):Wn(w[y]);v(M[y],O,_,null,V,te,re,ue,se)}ie>Ae?Ee(M,V,te,!0,!1,R):D(w,_,k,V,te,re,ue,se,R)},Se=(M,w,_,k,V,te,re,ue,se)=>{let ie=0;const Ae=w.length;let R=M.length-1,y=Ae-1;for(;ie<=R&&ie<=y;){const O=M[ie],Y=w[ie]=se?ki(w[ie]):Wn(w[ie]);if(Tr(O,Y))v(O,Y,_,null,V,te,re,ue,se);else break;ie++}for(;ie<=R&&ie<=y;){const O=M[R],Y=w[y]=se?ki(w[y]):Wn(w[y]);if(Tr(O,Y))v(O,Y,_,null,V,te,re,ue,se);else break;R--,y--}if(ie>R){if(ie<=y){const O=y+1,Y=O<Ae?w[O].el:k;for(;ie<=y;)v(null,w[ie]=se?ki(w[ie]):Wn(w[ie]),_,Y,V,te,re,ue,se),ie++}}else if(ie>y)for(;ie<=R;)Be(M[ie],V,te,!0),ie++;else{const O=ie,Y=ie,oe=new Map;for(ie=Y;ie<=y;ie++){const Fe=w[ie]=se?ki(w[ie]):Wn(w[ie]);Fe.key!=null&&oe.set(Fe.key,ie)}let j,Pe=0;const ye=y-Y+1;let Le=!1,Ie=0;const fe=new Array(ye);for(ie=0;ie<ye;ie++)fe[ie]=0;for(ie=O;ie<=R;ie++){const Fe=M[ie];if(Pe>=ye){Be(Fe,V,te,!0);continue}let ke;if(Fe.key!=null)ke=oe.get(Fe.key);else for(j=Y;j<=y;j++)if(fe[j-Y]===0&&Tr(Fe,w[j])){ke=j;break}ke===void 0?Be(Fe,V,te,!0):(fe[ke-Y]=ie+1,ke>=Ie?Ie=ke:Le=!0,v(Fe,w[ke],_,null,V,te,re,ue,se),Pe++)}const De=Le?R_(fe):qs;for(j=De.length-1,ie=ye-1;ie>=0;ie--){const Fe=Y+ie,ke=w[Fe],be=Fe+1<Ae?w[Fe+1].el:k;fe[ie]===0?v(null,ke,_,be,V,te,re,ue,se):Le&&(j<0||ie!==De[j]?we(ke,_,be,2):j--)}}},we=(M,w,_,k,V=null)=>{const{el:te,type:re,transition:ue,children:se,shapeFlag:ie}=M;if(ie&6){we(M.component.subTree,w,_,k);return}if(ie&128){M.suspense.move(w,_,k);return}if(ie&64){re.move(M,w,_,X);return}if(re===Lt){i(te,w,_);for(let R=0;R<se.length;R++)we(se[R],w,_,k);i(M.anchor,w,_);return}if(re===ra){b(M,w,_);return}if(k!==2&&ie&1&&ue)if(k===0)ue.beforeEnter(te),i(te,w,_),pn(()=>ue.enter(te),V);else{const{leave:R,delayLeave:y,afterLeave:O}=ue,Y=()=>{M.ctx.isUnmounted?s(te):i(te,w,_)},oe=()=>{R(te,()=>{Y(),O&&O()})};y?y(te,Y,oe):oe()}else i(te,w,_)},Be=(M,w,_,k=!1,V=!1)=>{const{type:te,props:re,ref:ue,children:se,dynamicChildren:ie,shapeFlag:Ae,patchFlag:R,dirs:y,cacheIndex:O}=M;if(R===-2&&(V=!1),ue!=null&&(Si(),Wr(ue,null,_,M,!0),Mi()),O!=null&&(w.renderCache[O]=void 0),Ae&256){w.ctx.deactivate(M);return}const Y=Ae&1&&y,oe=!Xr(M);let j;if(oe&&(j=re&&re.onVnodeBeforeUnmount)&&Vn(j,w,M),Ae&6)me(M.component,_,k);else{if(Ae&128){M.suspense.unmount(_,k);return}Y&&ts(M,null,w,"beforeUnmount"),Ae&64?M.type.remove(M,w,_,X,k):ie&&!ie.hasOnce&&(te!==Lt||R>0&&R&64)?Ee(ie,w,_,!1,!0):(te===Lt&&R&384||!V&&Ae&16)&&Ee(se,w,_),k&&Ke(M)}(oe&&(j=re&&re.onVnodeUnmounted)||Y)&&pn(()=>{j&&Vn(j,w,M),Y&&ts(M,null,w,"unmounted")},_)},Ke=M=>{const{type:w,el:_,anchor:k,transition:V}=M;if(w===Lt){ae(_,k);return}if(w===ra){x(M);return}const te=()=>{s(_),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(M.shapeFlag&1&&V&&!V.persisted){const{leave:re,delayLeave:ue}=V,se=()=>re(_,te);ue?ue(M.el,te,se):se()}else te()},ae=(M,w)=>{let _;for(;M!==w;)_=f(M),s(M),M=_;s(w)},me=(M,w,_)=>{const{bum:k,scope:V,job:te,subTree:re,um:ue,m:se,a:ie,parent:Ae,slots:{__:R}}=M;Eh(se),Eh(ie),k&&ia(k),Ae&&We(R)&&R.forEach(y=>{Ae.renderCache[y]=void 0}),V.stop(),te&&(te.flags|=8,Be(re,M,w,_)),ue&&pn(ue,w),pn(()=>{M.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ee=(M,w,_,k=!1,V=!1,te=0)=>{for(let re=te;re<M.length;re++)Be(M[re],w,_,k,V)},B=M=>{if(M.shapeFlag&6)return B(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const w=f(M.anchor||M.el),_=w&&w[Yg];return _?f(_):w};let W=!1;const Z=(M,w,_)=>{M==null?w._vnode&&Be(w._vnode,null,null,!0):v(w._vnode||null,M,w,null,null,null,_),w._vnode=M,W||(W=!0,_h(),gp(),W=!1)},X={p:v,um:Be,m:we,r:Ke,mt:le,mc:D,pc:G,pbc:E,n:B,o:n};return{render:Z,hydrate:void 0,createApp:__(Z)}}function ul({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ns({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function A_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Up(n,e,t=!1){const i=n.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ki(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Up(o,a)),a.type===Ga&&(a.el=o.el),a.type===Ki&&!a.el&&(a.el=o.el)}}function R_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Op(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}function Eh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const C_=Symbol.for("v-scx"),P_=()=>Tn(C_);function jr(n,e,t){return Fp(n,e,t)}function Fp(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Zt({},t),l=e&&i||!e&&r!=="post";let c;if(ro){if(r==="sync"){const d=P_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=jn,d.resume=jn,d.pause=jn,d}}const u=$t;a.call=(d,g,v)=>Kn(d,u,g,v);let h=!1;r==="post"?a.scheduler=d=>{pn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Su(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Xg(n,e,a);return ro&&(c?c.push(f):l&&f()),f}function L_(n,e,t){const i=this.proxy,s=Ut(n)?n.includes(".")?Bp(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const o=vo(this),a=Fp(s,r.bind(i),t);return o(),a}function Bp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const D_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${wn(e)}Modifiers`]||n[`${Ss(e)}Modifiers`];function I_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),o=r&&D_(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ut(u)?u.trim():u)),o.number&&(s=t.map(ma)));let a,l=i[a=sl(e)]||i[a=sl(wn(e))];!l&&r&&(l=i[a=sl(Ss(e))]),l&&Kn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Kn(c,n,6,s)}}function kp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=kp(c,e,!0);u&&(a=!0,Zt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Et(n)&&i.set(n,null),null):(We(r)?r.forEach(l=>o[l]=null):Zt(o,r),Et(n)&&i.set(n,o),o)}function Va(n,e){return!n||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(n,e[0].toLowerCase()+e.slice(1))||mt(n,Ss(e))||mt(n,e))}function Th(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=n,m=ya(n);let p,T;try{if(t.shapeFlag&4){const x=s||i,I=x;p=Wn(c.call(I,x,u,h,d,f,g)),T=a}else{const x=e;p=Wn(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),T=e.props?a:N_(a)}}catch(x){qr.length=0,ka(x,n,1),p=pe(Ki)}let b=p;if(T&&v!==!1){const x=Object.keys(T),{shapeFlag:I}=b;x.length&&I&7&&(r&&x.some(uu)&&(T=U_(T,r)),b=ir(b,T,!1,!0))}return t.dirs&&(b=ir(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Mu(b,t.transition),p=b,ya(m),p}const N_=n=>{let e;for(const t in n)(t==="class"||t==="style"||La(t))&&((e||(e={}))[t]=n[t]);return e},U_=(n,e)=>{const t={};for(const i in n)(!uu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function O_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Va(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wh(i,o,c):!0:!!o;return!1}function wh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Va(t,r))return!0}return!1}function F_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Hp=n=>n.__isSuspense;function B_(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):qg(n)}const Lt=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),qr=[];let mn=null;function xe(n=!1){qr.push(mn=n?null:[])}function k_(){qr.pop(),mn=qr[qr.length-1]||null}let so=1;function Ah(n,e=!1){so+=n,n<0&&mn&&e&&(mn.hasOnce=!0)}function zp(n){return n.dynamicChildren=so>0?mn||qs:null,k_(),so>0&&mn&&mn.push(n),n}function Me(n,e,t,i,s,r){return zp(S(n,e,t,i,s,r,!0))}function Qn(n,e,t,i,s){return zp(pe(n,e,t,i,s,!0))}function Ma(n){return n?n.__v_isVNode===!0:!1}function Tr(n,e){return n.type===e.type&&n.key===e.key}const Vp=({key:n})=>n??null,oa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ut(n)||It(n)||Je(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function S(n,e=null,t=null,i=0,s=null,r=n===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Vp(e),ref:e&&oa(e),scopeId:vp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:cn};return a?(Tu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ut(t)?8:16),so>0&&!o&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const pe=H_;function H_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===l_)&&(n=Ki),Ma(n)){const a=ir(n,e,!0);return t&&Tu(a,t),so>0&&!r&&mn&&(a.shapeFlag&6?mn[mn.indexOf(n)]=a:mn.push(a)),a.patchFlag=-2,a}if(Z_(n)&&(n=n.__vccOpts),e){e=z_(e);let{class:a,style:l}=e;a&&!Ut(a)&&(e.class=Ms(a)),Et(l)&&(xu(l)&&!We(l)&&(l=Zt({},l)),e.style=Oa(l))}const o=Ut(n)?1:Hp(n)?128:Kg(n)?64:Et(n)?4:Je(n)?2:0;return S(n,e,t,i,s,o,r,!0)}function z_(n){return n?xu(n)||Cp(n)?Zt({},n):n:null}function ir(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?V_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Vp(c),ref:e&&e.ref?t&&r?We(r)?r.concat(oa(e)):[r,oa(e)]:oa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Lt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ir(n.ssContent),ssFallback:n.ssFallback&&ir(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Mu(u,l.clone(u)),u}function ht(n=" ",e=0){return pe(Ga,null,n,e)}function Wa(n,e){const t=pe(ra,null,n);return t.staticCount=e,t}function Dt(n="",e=!1){return e?(xe(),Qn(Ki,null,n)):pe(Ki,null,n)}function Wn(n){return n==null||typeof n=="boolean"?pe(Ki):We(n)?pe(Lt,null,n.slice()):Ma(n)?ki(n):pe(Ga,null,String(n))}function ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ir(n)}function Tu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Tu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Cp(e)?e._ctx=cn:s===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[ht(e)]):t=8);n.children=e,n.shapeFlag|=t}function V_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ms([e.class,i.class]));else if(s==="style")e.style=Oa([e.style,i.style]);else if(La(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Vn(n,e,t,i=null){Kn(n,e,7,[t,i])}const G_=wp();let W_=0;function X_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||G_,r={uid:W_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(i,s),emitsOptions:kp(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=I_.bind(null,r),n.ce&&n.ce(r),r}let $t=null,ba,uc;{const n=Ua(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ba=e("__VUE_INSTANCE_SETTERS__",t=>$t=t),uc=e("__VUE_SSR_SETTERS__",t=>ro=t)}const vo=n=>{const e=$t;return ba(n),n.scope.on(),()=>{n.scope.off(),ba(e)}},Rh=()=>{$t&&$t.scope.off(),ba(null)};function Gp(n){return n.vnode.shapeFlag&4}let ro=!1;function $_(n,e=!1,t=!1){e&&uc(e);const{props:i,children:s}=n.vnode,r=Gp(n);x_(n,i,r,e),b_(n,s,t||e);const o=r?j_(n,e):void 0;return e&&uc(!1),o}function j_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,u_);const{setup:i}=t;if(i){Si();const s=n.setupContext=i.length>1?Y_(n):null,r=vo(n),o=_o(i,n,0,[n.props,s]),a=zd(o);if(Mi(),r(),(a||n.sp)&&!Xr(n)&&yp(n),a){if(o.then(Rh,Rh),e)return o.then(l=>{Ch(n,l)}).catch(l=>{ka(l,n,0)});n.asyncDep=o}else Ch(n,o)}else Wp(n)}function Ch(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Et(e)&&(n.setupState=dp(e)),Wp(n)}function Wp(n,e,t){const i=n.type;n.render||(n.render=i.render||jn);{const s=vo(n);Si();try{h_(n)}finally{Mi(),s()}}}const q_={get(n,e){return Kt(n,"get",""),n[e]}};function Y_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,q_),slots:n.slots,emit:n.emit,expose:e}}function Xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dp(yu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $r)return $r[t](n)},has(e,t){return t in e||t in $r}})):n.proxy}function K_(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function Z_(n){return Je(n)&&"__vccOpts"in n}const zt=(n,e)=>Gg(n,e,ro);function Xp(n,e,t){const i=arguments.length;return i===2?Et(e)&&!We(e)?Ma(e)?pe(n,null,[e]):pe(n,e):pe(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ma(t)&&(t=[t]),pe(n,e,t))}const J_="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hc;const Ph=typeof window<"u"&&window.trustedTypes;if(Ph)try{hc=Ph.createPolicy("vue",{createHTML:n=>n})}catch{}const $p=hc?n=>hc.createHTML(n):n=>n,Q_="http://www.w3.org/2000/svg",ev="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,Lh=di&&di.createElement("template"),tv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?di.createElementNS(Q_,n):e==="mathml"?di.createElementNS(ev,n):t?di.createElement(n,{is:t}):di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Lh.innerHTML=$p(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Lh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},nv=Symbol("_vtc");function iv(n,e,t){const i=n[nv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Dh=Symbol("_vod"),sv=Symbol("_vsh"),rv=Symbol(""),ov=/(^|;)\s*display\s*:/;function av(n,e,t){const i=n.style,s=Ut(t);let r=!1;if(t&&!s){if(e)if(Ut(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&aa(i,a,"")}else for(const o in e)t[o]==null&&aa(i,o,"");for(const o in t)o==="display"&&(r=!0),aa(i,o,t[o])}else if(s){if(e!==t){const o=i[rv];o&&(t+=";"+o),i.cssText=t,r=ov.test(t)}}else e&&n.removeAttribute("style");Dh in n&&(n[Dh]=r?i.display:"",n[sv]&&(i.display="none"))}const Ih=/\s*!important$/;function aa(n,e,t){if(We(t))t.forEach(i=>aa(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=lv(n,e);Ih.test(t)?n.setProperty(Ss(i),t.replace(Ih,""),"important"):n[i]=t}}const Nh=["Webkit","Moz","ms"],hl={};function lv(n,e){const t=hl[e];if(t)return t;let i=wn(e);if(i!=="filter"&&i in n)return hl[e]=i;i=Na(i);for(let s=0;s<Nh.length;s++){const r=Nh[s]+i;if(r in n)return hl[e]=r}return e}const Uh="http://www.w3.org/1999/xlink";function Oh(n,e,t,i,s,r=dg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uh,e.slice(6,e.length)):n.setAttributeNS(Uh,e,t):t==null||r&&!Wd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Yn(t)?String(t):t)}function Fh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?$p(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Wd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function fs(n,e,t,i){n.addEventListener(e,t,i)}function cv(n,e,t,i){n.removeEventListener(e,t,i)}const Bh=Symbol("_vei");function uv(n,e,t,i,s=null){const r=n[Bh]||(n[Bh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=hv(e);if(i){const c=r[e]=pv(i,s);fs(n,a,c,l)}else o&&(cv(n,a,o,l),r[e]=void 0)}}const kh=/(?:Once|Passive|Capture)$/;function hv(n){let e;if(kh.test(n)){e={};let i;for(;i=n.match(kh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ss(n.slice(2)),e]}let fl=0;const fv=Promise.resolve(),dv=()=>fl||(fv.then(()=>fl=0),fl=Date.now());function pv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Kn(mv(i,t.value),e,5,[i])};return t.value=n,t.attached=dv(),t}function mv(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Hh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?iv(n,i,o):e==="style"?av(n,t,i):La(e)?uu(e)||uv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_v(n,e,i,o))?(Fh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Oh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ut(i))?Fh(n,wn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Oh(n,e,i,o))};function _v(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Hh(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hh(e)&&Ut(t)?!1:e in n}const Ea=n=>{const e=n.props["onUpdate:modelValue"]||!1;return We(e)?t=>ia(e,t):e};function vv(n){n.target.composing=!0}function zh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zs=Symbol("_assign"),fc={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Zs]=Ea(s);const r=i||s.props&&s.props.type==="number";fs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=ma(a)),n[Zs](a)}),t&&fs(n,"change",()=>{n.value=n.value.trim()}),e||(fs(n,"compositionstart",vv),fs(n,"compositionend",zh),fs(n,"change",zh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Zs]=Ea(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ma(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Vh={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=Da(e);fs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?ma(Ta(o)):Ta(o));n[Zs](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Ha(()=>{n._assigning=!1})}),n[Zs]=Ea(i)},mounted(n,{value:e}){Gh(n,e)},beforeUpdate(n,e,t){n[Zs]=Ea(t)},updated(n,{value:e}){n._assigning||Gh(n,e)}};function Gh(n,e){const t=n.multiple,i=We(e);if(!(t&&!i&&!Da(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Ta(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=mg(e,a)>-1}else o.selected=e.has(a);else if(Fa(Ta(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ta(n){return"_value"in n?n._value:n.value}const xv=["ctrl","shift","alt","meta"],yv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>xv.some(t=>n[`${t}Key`]&&!e.includes(t))},jp=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=yv[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Sv=Zt({patchProp:gv},tv);let Wh;function Mv(){return Wh||(Wh=T_(Sv))}const bv=(...n)=>{const e=Mv().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Tv(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Ev(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ev(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tv(n){return Ut(n)?document.querySelector(n):n}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let qp;const $a=n=>qp=n,Yp=Symbol();function dc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Yr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Yr||(Yr={}));function wv(){const n=qd(!0),e=n.run(()=>$e({}));let t=[],i=[];const s=yu({install(r){$a(s),s._a=r,r.provide(Yp,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Kp=()=>{};function Xh(n,e,t,i=Kp){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Yd()&&gg(s),s}function Rs(n,...e){n.slice().forEach(t=>{t(...e)})}const Av=n=>n(),$h=Symbol(),dl=Symbol();function pc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,i)=>n.set(i,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];dc(s)&&dc(i)&&n.hasOwnProperty(t)&&!It(i)&&!$i(i)?n[t]=pc(s,i):n[t]=i}return n}const Rv=Symbol();function Cv(n){return!dc(n)||!Object.prototype.hasOwnProperty.call(n,Rv)}const{assign:Fi}=Object;function Pv(n){return!!(It(n)&&n.effect)}function Lv(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=kg(t.state.value[n]);return Fi(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=yu(zt(()=>{$a(t);const d=t._s.get(n);return o[f].call(d,d)})),h),{}))}return l=Zp(n,c,e,t,i,!0),l}function Zp(n,e,t={},i,s,r){let o;const a=Fi({actions:{}},t),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),$e({});let v;function m(D){let C;c=u=!1,typeof D=="function"?(D(i.state.value[n]),C={type:Yr.patchFunction,storeId:n,events:d}):(pc(i.state.value[n],D),C={type:Yr.patchObject,payload:D,storeId:n,events:d});const E=v=Symbol();Ha().then(()=>{v===E&&(c=!0)}),u=!0,Rs(h,C,i.state.value[n])}const p=r?function(){const{state:C}=t,E=C?C():{};this.$patch(U=>{Fi(U,E)})}:Kp;function T(){o.stop(),h=[],f=[],i._s.delete(n)}const b=(D,C="")=>{if($h in D)return D[dl]=C,D;const E=function(){$a(i);const U=Array.from(arguments),ne=[],q=[];function le(K){ne.push(K)}function ce(K){q.push(K)}Rs(f,{args:U,name:E[dl],store:I,after:le,onError:ce});let Q;try{Q=D.apply(this&&this.$id===n?this:I,U)}catch(K){throw Rs(q,K),K}return Q instanceof Promise?Q.then(K=>(Rs(ne,K),K)).catch(K=>(Rs(q,K),Promise.reject(K))):(Rs(ne,Q),Q)};return E[$h]=!0,E[dl]=C,E},x={_p:i,$id:n,$onAction:Xh.bind(null,f),$patch:m,$reset:p,$subscribe(D,C={}){const E=Xh(h,D,C.detached,()=>U()),U=o.run(()=>jr(()=>i.state.value[n],ne=>{(C.flush==="sync"?u:c)&&D({storeId:n,type:Yr.direct,events:d},ne)},Fi({},l,C)));return E},$dispose:T},I=bs(x);i._s.set(n,I);const L=(i._a&&i._a.runWithContext||Av)(()=>i._e.run(()=>(o=qd()).run(()=>e({action:b}))));for(const D in L){const C=L[D];if(It(C)&&!Pv(C)||$i(C))r||(g&&Cv(C)&&(It(C)?C.value=g[D]:pc(C,g[D])),i.state.value[n][D]=C);else if(typeof C=="function"){const E=b(C,D);L[D]=E,a.actions[D]=C}}return Fi(I,L),Fi(ct(I),L),Object.defineProperty(I,"$state",{get:()=>i.state.value[n],set:D=>{m(C=>{Fi(C,D)})}}),i._p.forEach(D=>{Fi(I,o.run(()=>D({store:I,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(I.$state,g),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function Dv(n,e,t){let i;const s=typeof e=="function";i=s?t:e;function r(o,a){const l=v_();return o=o||(l?Tn(Yp,null):null),o&&$a(o),o=qp,o._s.has(n)||(s?Zp(n,e,i,o):Lv(n,i,o)),o._s.get(n)}return r.$id=n,r}const rt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Iv={};function Nv(n,e){const t=Rn("router-view");return xe(),Qn(t)}const Uv=rt(Iv,[["render",Nv]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xs=typeof document<"u";function Jp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ov(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Jp(n.default)}const pt=Object.assign;function pl(n,e){const t={};for(const i in e){const s=e[i];t[i]=Hn(s)?s.map(n):n(s)}return t}const Kr=()=>{},Hn=Array.isArray,Qp=/#/g,Fv=/&/g,Bv=/\//g,kv=/=/g,Hv=/\?/g,em=/\+/g,zv=/%5B/g,Vv=/%5D/g,tm=/%5E/g,Gv=/%60/g,nm=/%7B/g,Wv=/%7C/g,im=/%7D/g,Xv=/%20/g;function wu(n){return encodeURI(""+n).replace(Wv,"|").replace(zv,"[").replace(Vv,"]")}function $v(n){return wu(n).replace(nm,"{").replace(im,"}").replace(tm,"^")}function mc(n){return wu(n).replace(em,"%2B").replace(Xv,"+").replace(Qp,"%23").replace(Fv,"%26").replace(Gv,"`").replace(nm,"{").replace(im,"}").replace(tm,"^")}function jv(n){return mc(n).replace(kv,"%3D")}function qv(n){return wu(n).replace(Qp,"%23").replace(Hv,"%3F")}function Yv(n){return n==null?"":qv(n).replace(Bv,"%2F")}function oo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Kv=/\/$/,Zv=n=>n.replace(Kv,"");function ml(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=t0(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:oo(o)}}function Jv(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function jh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Qv(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&sr(e.matched[i],t.matched[s])&&sm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function sr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!e0(n[t],e[t]))return!1;return!0}function e0(n,e){return Hn(n)?qh(n,e):Hn(e)?qh(e,n):n===e}function qh(n,e){return Hn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function t0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ao;(function(n){n.pop="pop",n.push="push"})(ao||(ao={}));var Zr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Zr||(Zr={}));function n0(n){if(!n)if(Xs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Zv(n)}const i0=/^[^#]+#/;function s0(n,e){return n.replace(i0,"#")+e}function r0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ja=()=>({left:window.scrollX,top:window.scrollY});function o0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=r0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yh(n,e){return(history.state?history.state.position-e:-1)+n}const gc=new Map;function a0(n,e){gc.set(n,e)}function l0(n){const e=gc.get(n);return gc.delete(n),e}let c0=()=>location.protocol+"//"+location.host;function rm(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),jh(l,"")}return jh(t,n)+i+s}function u0(n,e,t,i){let s=[],r=[],o=null;const a=({state:f})=>{const d=rm(n,location),g=t.value,v=e.value;let m=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}m=v?f.position-v.position:0}else i(d);s.forEach(p=>{p(t.value,g,{delta:m,type:ao.pop,direction:m?m>0?Zr.forward:Zr.back:Zr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(pt({},f.state,{scroll:ja()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Kh(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?ja():null}}function h0(n){const{history:e,location:t}=window,i={value:rm(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:c0()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=pt({},e.state,Kh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=pt({},s.value,e.state,{forward:l,scroll:ja()});r(u.current,u,!0);const h=pt({},Kh(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function f0(n){n=n0(n);const e=h0(n),t=u0(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=pt({location:"",base:n,go:i,createHref:s0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function d0(n){return typeof n=="string"||n&&typeof n=="object"}function om(n){return typeof n=="string"||typeof n=="symbol"}const am=Symbol("");var Zh;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zh||(Zh={}));function rr(n,e){return pt(new Error,{type:n,[am]:!0},e)}function ri(n,e){return n instanceof Error&&am in n&&(e==null||!!(n.type&e))}const Jh="[^/]+?",p0={sensitive:!1,strict:!1,start:!0,end:!0},m0=/[.+*?^${}()[\]/\\]/g;function g0(n,e){const t=pt({},p0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(m0,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=f;r.push({name:g,repeatable:v,optional:m});const T=p||Jh;if(T!==Jh){d+=10;try{new RegExp(`(${T})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+x.message)}}let b=v?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),s+=b,d+=20,m&&(d+=-8),v&&(d+=-20),T===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:m}=d,p=g in c?c[g]:"";if(Hn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Hn(p)?p.join("/"):p;if(!T)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function _0(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lm(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=_0(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Qh(i))return 1;if(Qh(s))return-1}return s.length-i.length}function Qh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const v0={type:0,value:""},x0=/[a-zA-Z0-9_]/;function y0(n){if(!n)return[[]];if(n==="/")return[[v0]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=i;break;case 1:l==="("?t=2:x0.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function S0(n,e,t){const i=g0(y0(n.path),t),s=pt(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function M0(n,e){const t=[],i=new Map;e=sf({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,f,d){const g=!d,v=tf(h);v.aliasOf=d&&d.record;const m=sf(e,h),p=[v];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of x)p.push(tf(pt({},v,{components:d?d.record.components:v.components,path:I,aliasOf:d?d.record:v})))}let T,b;for(const x of p){const{path:I}=x;if(f&&I[0]!=="/"){const P=f.record.path,L=P[P.length-1]==="/"?"":"/";x.path=f.record.path+(I&&L+I)}if(T=S0(x,f,m),d?d.alias.push(T):(b=b||T,b!==T&&b.alias.push(T),g&&h.name&&!nf(T)&&o(h.name)),cm(T)&&l(T),v.children){const P=v.children;for(let L=0;L<P.length;L++)r(P[L],T,d&&d.children[L])}d=d||T}return b?()=>{o(b)}:Kr}function o(h){if(om(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=T0(h,t);t.splice(f,0,h),h.record.name&&!nf(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},v,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw rr(1,{location:h});m=d.record.name,g=pt(ef(f.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),h.params&&ef(h.params,d.keys.map(b=>b.name))),v=d.stringify(g)}else if(h.path!=null)v=h.path,d=t.find(b=>b.re.test(v)),d&&(g=d.parse(v),m=d.record.name);else{if(d=f.name?i.get(f.name):t.find(b=>b.re.test(f.path)),!d)throw rr(1,{location:h,currentLocation:f});m=d.record.name,g=pt({},f.params,h.params),v=d.stringify(g)}const p=[];let T=d;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:v,params:g,matched:p,meta:E0(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ef(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function tf(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:b0(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function b0(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function nf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function E0(n){return n.reduce((e,t)=>pt(e,t.meta),{})}function sf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function T0(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;lm(n,e[r])<0?i=r:t=r+1}const s=w0(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function w0(n){let e=n;for(;e=e.parent;)if(cm(e)&&lm(n,e)===0)return e}function cm({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function A0(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(em," "),o=r.indexOf("="),a=oo(o<0?r:r.slice(0,o)),l=o<0?null:oo(r.slice(o+1));if(a in e){let c=e[a];Hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function rf(n){let e="";for(let t in n){const i=n[t];if(t=jv(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Hn(i)?i.map(r=>r&&mc(r)):[i&&mc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function R0(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Hn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const C0=Symbol(""),of=Symbol(""),qa=Symbol(""),Au=Symbol(""),_c=Symbol("");function wr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Hi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(rr(4,{from:t,to:e})):f instanceof Error?l(f):d0(f)?l(rr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function gl(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Jp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Hi(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Ov(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const d=(h.__vccOpts||h)[e];return d&&Hi(d,t,i,o,a,s)()}))}}return r}function af(n){const e=Tn(qa),t=Tn(Au),i=zt(()=>{const l=Rt(n.to);return e.resolve(l)}),s=zt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(sr.bind(null,u));if(f>-1)return f;const d=lf(l[c-2]);return c>1&&lf(u)===d&&h[h.length-1].path!==d?h.findIndex(sr.bind(null,l[c-2])):f}),r=zt(()=>s.value>-1&&N0(t.params,i.value.params)),o=zt(()=>s.value>-1&&s.value===t.matched.length-1&&sm(t.params,i.value.params));function a(l={}){if(I0(l)){const c=e[Rt(n.replace)?"replace":"push"](Rt(n.to)).catch(Kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:zt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function P0(n){return n.length===1?n[0]:n}const L0=xp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:af,setup(n,{slots:e}){const t=bs(af(n)),{options:i}=Tn(qa),s=zt(()=>({[cf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[cf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&P0(e.default(t));return n.custom?r:Xp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),D0=L0;function I0(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function N0(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!Hn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function lf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cf=(n,e,t)=>n??e??t,U0=xp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Tn(_c),s=zt(()=>n.route||i.value),r=Tn(of,0),o=zt(()=>{let c=Rt(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=zt(()=>s.value.matched[o.value]);sa(of,zt(()=>o.value+1)),sa(C0,a),sa(_c,s);const l=$e();return jr(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!sr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return uf(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Xp(f,pt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return uf(t.default,{Component:m,route:c})||m}}});function uf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const O0=U0;function F0(n){const e=M0(n.routes,n),t=n.parseQuery||A0,i=n.stringifyQuery||rf,s=n.history,r=wr(),o=wr(),a=wr(),l=Og(Ci);let c=Ci;Xs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pl.bind(null,B=>""+B),h=pl.bind(null,Yv),f=pl.bind(null,oo);function d(B,W){let Z,X;return om(B)?(Z=e.getRecordMatcher(B),X=W):X=B,e.addRoute(X,Z)}function g(B){const W=e.getRecordMatcher(B);W&&e.removeRoute(W)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,W){if(W=pt({},W||l.value),typeof B=="string"){const _=ml(t,B,W.path),k=e.resolve({path:_.path},W),V=s.createHref(_.fullPath);return pt(_,k,{params:f(k.params),hash:oo(_.hash),redirectedFrom:void 0,href:V})}let Z;if(B.path!=null)Z=pt({},B,{path:ml(t,B.path,W.path).path});else{const _=pt({},B.params);for(const k in _)_[k]==null&&delete _[k];Z=pt({},B,{params:h(_)}),W.params=h(W.params)}const X=e.resolve(Z,W),$=B.hash||"";X.params=u(f(X.params));const M=Jv(i,pt({},B,{hash:$v($),path:X.path})),w=s.createHref(M);return pt({fullPath:M,hash:$,query:i===rf?R0(B.query):B.query||{}},X,{redirectedFrom:void 0,href:w})}function T(B){return typeof B=="string"?ml(t,B,l.value.path):pt({},B)}function b(B,W){if(c!==B)return rr(8,{from:W,to:B})}function x(B){return L(B)}function I(B){return x(pt(T(B),{replace:!0}))}function P(B){const W=B.matched[B.matched.length-1];if(W&&W.redirect){const{redirect:Z}=W;let X=typeof Z=="function"?Z(B):Z;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=T(X):{path:X},X.params={}),pt({query:B.query,hash:B.hash,params:X.path!=null?{}:B.params},X)}}function L(B,W){const Z=c=p(B),X=l.value,$=B.state,M=B.force,w=B.replace===!0,_=P(Z);if(_)return L(pt(T(_),{state:typeof _=="object"?pt({},$,_.state):$,force:M,replace:w}),W||Z);const k=Z;k.redirectedFrom=W;let V;return!M&&Qv(i,X,Z)&&(V=rr(16,{to:k,from:X}),we(X,X,!0,!1)),(V?Promise.resolve(V):E(k,X)).catch(te=>ri(te)?ri(te,2)?te:Se(te):G(te,k,X)).then(te=>{if(te){if(ri(te,2))return L(pt({replace:w},T(te.to),{state:typeof te.to=="object"?pt({},$,te.to.state):$,force:M}),W||k)}else te=ne(k,X,!0,w,$);return U(k,X,te),te})}function D(B,W){const Z=b(B,W);return Z?Promise.reject(Z):Promise.resolve()}function C(B){const W=ae.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(B):B()}function E(B,W){let Z;const[X,$,M]=B0(B,W);Z=gl(X.reverse(),"beforeRouteLeave",B,W);for(const _ of X)_.leaveGuards.forEach(k=>{Z.push(Hi(k,B,W))});const w=D.bind(null,B,W);return Z.push(w),Ee(Z).then(()=>{Z=[];for(const _ of r.list())Z.push(Hi(_,B,W));return Z.push(w),Ee(Z)}).then(()=>{Z=gl($,"beforeRouteUpdate",B,W);for(const _ of $)_.updateGuards.forEach(k=>{Z.push(Hi(k,B,W))});return Z.push(w),Ee(Z)}).then(()=>{Z=[];for(const _ of M)if(_.beforeEnter)if(Hn(_.beforeEnter))for(const k of _.beforeEnter)Z.push(Hi(k,B,W));else Z.push(Hi(_.beforeEnter,B,W));return Z.push(w),Ee(Z)}).then(()=>(B.matched.forEach(_=>_.enterCallbacks={}),Z=gl(M,"beforeRouteEnter",B,W,C),Z.push(w),Ee(Z))).then(()=>{Z=[];for(const _ of o.list())Z.push(Hi(_,B,W));return Z.push(w),Ee(Z)}).catch(_=>ri(_,8)?_:Promise.reject(_))}function U(B,W,Z){a.list().forEach(X=>C(()=>X(B,W,Z)))}function ne(B,W,Z,X,$){const M=b(B,W);if(M)return M;const w=W===Ci,_=Xs?history.state:{};Z&&(X||w?s.replace(B.fullPath,pt({scroll:w&&_&&_.scroll},$)):s.push(B.fullPath,$)),l.value=B,we(B,W,Z,w),Se()}let q;function le(){q||(q=s.listen((B,W,Z)=>{if(!me.listening)return;const X=p(B),$=P(X);if($){L(pt($,{replace:!0,force:!0}),X).catch(Kr);return}c=X;const M=l.value;Xs&&a0(Yh(M.fullPath,Z.delta),ja()),E(X,M).catch(w=>ri(w,12)?w:ri(w,2)?(L(pt(T(w.to),{force:!0}),X).then(_=>{ri(_,20)&&!Z.delta&&Z.type===ao.pop&&s.go(-1,!1)}).catch(Kr),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),G(w,X,M))).then(w=>{w=w||ne(X,M,!1),w&&(Z.delta&&!ri(w,8)?s.go(-Z.delta,!1):Z.type===ao.pop&&ri(w,20)&&s.go(-1,!1)),U(X,M,w)}).catch(Kr)}))}let ce=wr(),Q=wr(),K;function G(B,W,Z){Se(B);const X=Q.list();return X.length?X.forEach($=>$(B,W,Z)):console.error(B),Promise.reject(B)}function _e(){return K&&l.value!==Ci?Promise.resolve():new Promise((B,W)=>{ce.add([B,W])})}function Se(B){return K||(K=!B,le(),ce.list().forEach(([W,Z])=>B?Z(B):W()),ce.reset()),B}function we(B,W,Z,X){const{scrollBehavior:$}=n;if(!Xs||!$)return Promise.resolve();const M=!Z&&l0(Yh(B.fullPath,0))||(X||!Z)&&history.state&&history.state.scroll||null;return Ha().then(()=>$(B,W,M)).then(w=>w&&o0(w)).catch(w=>G(w,B,W))}const Be=B=>s.go(B);let Ke;const ae=new Set,me={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:x,replace:I,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:_e,install(B){const W=this;B.component("RouterLink",D0),B.component("RouterView",O0),B.config.globalProperties.$router=W,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(l)}),Xs&&!Ke&&l.value===Ci&&(Ke=!0,x(s.location).catch($=>{}));const Z={};for(const $ in Ci)Object.defineProperty(Z,$,{get:()=>l.value[$],enumerable:!0});B.provide(qa,W),B.provide(Au,up(Z)),B.provide(_c,l);const X=B.unmount;ae.add(B),B.unmount=function(){ae.delete(B),ae.size<1&&(c=Ci,q&&q(),q=null,l.value=Ci,Ke=!1,K=!1),X()}}};function Ee(B){return B.reduce((W,Z)=>W.then(()=>C(Z)),Promise.resolve())}return me}function B0(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>sr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>sr(c,l))||s.push(l))}return[t,i,s]}function Ti(){return Tn(qa)}function Ru(n){return Tn(Au)}const k0="/test/image/icon/starlux-logo-classic.png",um="/test/image/icon/nav-icon-search.svg",Cu="/test/image/icon/nav-icon-new-page-white.svg",H0="/test/image/icon/nav-icon-language-skin.svg",z0="/test/image/icon/nav-icon-member-skin.svg",V0="/test/image/icon/nav-icon-new-page-brown.svg",G0="/test/image/icon/nav-icon-member-brown.svg",W0="/test/image/icon/nav-icon-language-brown.svg",X0={name:"Navbar",data(){return{menuIconSrc:"/image/icon/nav-icon-menu.svg",menuIconAlt:"漢堡條",desktopMenuItems:[{text:"預訂行程",path:"/booking"},{text:"班機動態",path:"/comming-soon"},{text:"機上設備",path:"/equipment"},{text:"準備起程",path:"/comming-soon"},{text:"體驗星宇",path:"/comming-soon"},{text:"COSMILE會員",path:"/comming-soon"},{text:"旅客服務",path:"/comming-soon"}],mobileMenuItems:[{text:"預訂行程",path:"/booking"},{text:"班機動態",path:"/comming-soon"},{text:"機上設備",path:"/equipment"},{text:"準備起程",path:"/comming-soon"},{text:"體驗星宇",path:"/comming-soon"},{text:"COSMILE會員",path:"/comming-soon"},{text:"旅客服務",path:"/comming-soon"}]}},mounted(){const n=this.$refs.collapseRef;n.addEventListener("show.bs.collapse",()=>{this.menuIconSrc="/image/icon/nav-icon-menu-close.svg",this.menuIconAlt="關閉選單"}),n.addEventListener("hide.bs.collapse",()=>{this.menuIconSrc="/image/icon/nav-icon-menu.svg",this.menuIconAlt="漢堡條"})}},$0={class:"navbar navbar-expand-lg navbar-starlux f5"},j0={class:"container navbar-container d-flex justify-content-between align-items-center pe-0"},q0={class:"d-flex align-items-center"},Y0={class:"d-flex align-items-center"},K0={class:"navbar-toggler d-lg-none ms-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#starluxNavbar","aria-controls":"starluxNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},Z0=["src","alt"],J0={class:"collapse navbar-collapse",id:"starluxNavbar",ref:"collapseRef"},Q0={class:"container navbar-container d-flex flex-column flex-lg-row justify-content-end align-items-start align-items-lg-center pt-lg-0 pt-1 px-0",style:{gap:"0.5rem"}},ex={class:"navbar-nav d-none d-lg-flex align-items-center flex-row"},tx={class:"nav-item"},nx={class:"nav-item"},ix={class:"nav-item ms-3"},sx={class:"navbar-nav d-lg-none flex-column w-100 px-2 nav-list f5 nav-phone"},rx={class:"f3"},ox={class:"nav-ite nav-right-item"},ax={class:"nav-item nav-right-item"},lx={class:"nav-item nav-right-item"},cx={id:"main-menu",class:"main-menu-wrapper d-none d-lg-block w-100"},ux={class:"container navbar-container"},hx={class:"navbar-nav main-menu d-flex flex-row text-center justify-content-around"};function fx(n,e,t,i,s,r){const o=Rn("router-link");return xe(),Me(Lt,null,[S("nav",$0,[S("div",j0,[S("div",q0,[pe(o,{to:"/"},{default:ut(()=>e[0]||(e[0]=[S("img",{src:k0,alt:"STARLUX Logo",class:"logo-img me-2"},null,-1)])),_:1,__:[0]})]),S("div",Y0,[pe(o,{to:"/comming-soon",class:"nav-link d-flex align-items-center me-1",id:"searchIcon"},{default:ut(()=>e[1]||(e[1]=[S("img",{src:um,alt:"搜尋"},null,-1)])),_:1,__:[1]}),S("button",K0,[S("img",{src:s.menuIconSrc,alt:s.menuIconAlt,id:"menuIcon"},null,8,Z0)])])]),S("div",J0,[S("div",Q0,[S("ul",ex,[e[5]||(e[5]=S("li",{class:"nav-item"},[S("div",{class:"divider"})],-1)),S("li",tx,[pe(o,{to:"/comming-soon",class:"nav-link d-flex align-items-center"},{default:ut(()=>e[2]||(e[2]=[S("span",{class:"me-1"},"béshopping",-1),S("img",{src:Cu,alt:"開新頁面-白"},null,-1)])),_:1,__:[2]})]),e[6]||(e[6]=S("li",{class:"nav-item"},[S("div",{class:"divider"})],-1)),S("li",nx,[pe(o,{to:"/comming-soon",class:"nav-link d-flex align-items-center"},{default:ut(()=>e[3]||(e[3]=[S("span",{class:"gold-text text-nowrap"},"臺灣 / Taiwan（繁體中文）",-1),S("img",{src:H0,alt:"地球",class:"ms-2"},null,-1)])),_:1,__:[3]})]),S("li",ix,[pe(o,{to:"/comming-soon",class:"nav-link d-flex align-items-center"},{default:ut(()=>e[4]||(e[4]=[S("span",{class:"gold-text text-nowrap me-1"},"登入",-1),S("img",{src:z0,alt:"會員"},null,-1)])),_:1,__:[4]})])]),S("ul",sx,[(xe(!0),Me(Lt,null,An(s.mobileMenuItems,(a,l)=>(xe(),Me("li",{class:"nav-item",key:"mobile-"+l},[pe(o,{to:a.path,class:"nav-link nav-main-list"},{default:ut(()=>[S("span",rx,Ue(a.text),1)]),_:2},1032,["to"])]))),128)),S("li",ox,[pe(o,{to:"/comming-soon",class:"nav-link d-flex align-items-center f5"},{default:ut(()=>e[7]||(e[7]=[S("span",{class:"me-1 brown-text"},"béshopping",-1),S("img",{src:V0,alt:"開新頁面-棕"},null,-1)])),_:1,__:[7]})]),S("li",ax,[pe(o,{to:"/comming-soon",class:"nav-link d-flex align-items-center f5"},{default:ut(()=>e[8]||(e[8]=[S("span",{class:"brown-text me-1"},"登入",-1),S("img",{src:G0,alt:"會員"},null,-1)])),_:1,__:[8]})]),S("li",lx,[pe(o,{to:"/comming-soon",class:"nav-link nav-main-list"},{default:ut(()=>e[9]||(e[9]=[S("span",{class:"navbar-text d-flex align-items-center f5"},[S("span",{class:"brown-text"},"臺灣 / Taiwan（繁體中文）"),S("img",{src:W0,alt:"地球",class:"ms-2"})],-1)])),_:1,__:[9]})])])])],512)]),S("div",cx,[S("div",ux,[S("ul",hx,[(xe(!0),Me(Lt,null,An(s.desktopMenuItems,(a,l)=>(xe(),Me("li",{class:"nav-item",key:"desktop-"+l},[pe(o,{to:a.path,class:"nav-link text-white btn btn-link f4"},{default:ut(()=>[ht(Ue(a.text),1)]),_:2},1032,["to"])]))),128))])])])],64)}const _r=rt(X0,[["render",fx],["__scopeId","data-v-4b2c6c3a"]]),dx={class:"col-md-3"},px={class:"f4 footer-list-title"},mx={key:0},gx={key:1},_x={key:0,src:Cu,alt:"開新頁面-白"},vx={__name:"FooterColumn",props:{title:String,items:Array},setup(n){return(e,t)=>(xe(),Me("div",dx,[S("span",px,Ue(n.title),1),S("ul",null,[(xe(!0),Me(Lt,null,An(n.items,(i,s)=>(xe(),Me("li",{class:"f5",key:s},[typeof i=="string"?(xe(),Me("span",mx,Ue(i),1)):(xe(),Me("span",gx,[ht(Ue(i.text)+" ",1),i.icon?(xe(),Me("img",_x)):Dt("",!0)]))]))),128))])]))}},Ao=rt(vx,[["__scopeId","data-v-dfad5f85"]]),xx={class:"accordion-item"},yx={class:"accordion-header"},Sx=["data-bs-target"],Mx=["id"],bx={class:"accordion-body"},Ex={key:0},Tx={key:1},wx={key:0,src:Cu,alt:"開新頁面-白"},Ax={__name:"FooterAccordion",props:{title:String,items:Array,collapseId:String},setup(n){return(e,t)=>(xe(),Me("div",xx,[S("h2",yx,[S("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+n.collapseId},[S("span",null,Ue(n.title),1),t[0]||(t[0]=S("span",{class:"custom-arrow"},null,-1))],8,Sx)]),S("div",{id:n.collapseId,class:"accordion-collapse collapse","data-bs-parent":"#footerAccordion"},[S("div",bx,[S("ul",null,[(xe(!0),Me(Lt,null,An(n.items,(i,s)=>(xe(),Me("li",{key:s},[typeof i=="string"?(xe(),Me("span",Ex,Ue(i),1)):(xe(),Me("span",Tx,[ht(Ue(i.text)+" ",1),i.icon?(xe(),Me("img",wx)):Dt("",!0)]))]))),128))])])],8,Mx)]))}},Ro=rt(Ax,[["__scopeId","data-v-e2d7626e"]]),Rx="/test/image/icon/foot-fb.svg",Cx="/test/image/icon/foot-youtube.svg",Px="/test/image/icon/foot-ig.svg",Lx="/test/image/icon/foot-line.svg",Dx="/test/image/icon/foot-app-store.png",Ix="/test/image/icon/foot-google-play.png",Nx={},Ux={class:"footer-links"};function Ox(n,e){return xe(),Me("div",Ux,e[0]||(e[0]=[Wa('<div class="footer-social-wrapper" data-v-984d478b><div class="footer-social" data-v-984d478b><span class="section-title f5" data-v-984d478b>追蹤</span><div class="icon-group" data-v-984d478b><div class="footer-icon" data-v-984d478b><img src="'+Rx+'" alt="Facebook" data-v-984d478b></div><div class="footer-icon" data-v-984d478b><img src="'+Cx+'" alt="YouTube" data-v-984d478b></div><div class="footer-icon" data-v-984d478b><img src="'+Px+'" alt="Instagram" data-v-984d478b></div><div class="footer-icon" data-v-984d478b><img src="'+Lx+'" alt="LINE" data-v-984d478b></div></div></div></div><div class="footer-app-wrapper" data-v-984d478b><div class="footer-app" data-v-984d478b><span class="section-title f5" data-v-984d478b>我們的手機服務</span><div class="icon-group" data-v-984d478b><img src="'+Dx+'" alt="App Store" data-v-984d478b><img src="'+Ix+'" alt="Google Play" data-v-984d478b></div></div></div>',2)]))}const Fx=rt(Nx,[["render",Ox],["__scopeId","data-v-984d478b"]]),Bx={class:"container-fluid d-flex justify-content-center"},kx={class:"footer-top"},Hx={class:"container desktop-footer"},zx={class:"row"},Vx={class:"accordion container",id:"footerAccordion"},Gx={__name:"FooterTop",setup(n){const e=["認識星宇","媒體中心","旅遊須知",{text:"加入團隊",icon:!0},"公司治理專區","投資人專區","利害關係人專區","網站導覽"],t=["運送條款","隱私政策","Cookie 使用政策","顧客服務承諾","機坪延誤應變計劃","智慧財產權、網站暨手機應用程式使用條款","智慧財產權管理計畫"],i=[{text:"STARLUX Cargo",icon:!0},{text:"免稅品購物",icon:!0},{text:"機上雜誌",icon:!0},{text:"星宇小舖",icon:!0},{text:"星宇航空企業會員",icon:!0},{text:"永續發展",icon:!0}],s=["各地聯絡資訊","機場資訊","意見回饋","可選服務及費用","星宇航空航班異動作業辦法",{text:"星宇航空利害關係人問卷",icon:!0}];return(r,o)=>(xe(),Me("footer",Bx,[S("div",kx,[S("div",Hx,[S("div",zx,[pe(Ao,{title:"關於星宇",items:e}),pe(Ao,{title:"條款宣告",items:t}),pe(Ao,{title:"相關網站",items:i}),pe(Ao,{title:"旅客支援",items:s})])]),S("div",Vx,[pe(Ro,{title:"關於星宇",items:e,"collapse-id":"collapseOne"}),pe(Ro,{title:"條款宣告",items:t,"collapse-id":"collapseTwo"}),pe(Ro,{title:"相關網站",items:i,"collapse-id":"collapseThree"}),pe(Ro,{title:"旅客支援",items:s,"collapse-id":"collapseFour"})]),pe(Fx)])]))}},wi=rt(Gx,[["__scopeId","data-v-9feb76fe"]]),Wx="/test/image/icon/starlux-logo-white.png",Xx="/test/image/icon/foot-5-Star.png",$x={},jx={class:"footer-bottom"};function qx(n,e){return xe(),Me("footer",jx,e[0]||(e[0]=[Wa('<div class="footer-logo" data-v-542bcc52><img id="logo-white" src="'+Wx+'" alt="星宇航空logo (純白款)" data-v-542bcc52></div><div class="footer-copyright" data-v-542bcc52><img id="five-stars" src="'+Xx+'" alt="5-star" data-v-542bcc52><div class="copyright-text" data-v-542bcc52><span class="f6" data-v-542bcc52>2025. 星宇航空3D選位網站</span><span class="f6" data-v-542bcc52>此專案作品網站參考星宇航空官網設計</span><span class="f6" data-v-542bcc52>建議瀏覽器為 Google Chrome、Safari</span></div></div>',2)]))}const Ai=rt($x,[["render",qx],["__scopeId","data-v-542bcc52"]]),Ji=Dv("order",()=>{const n=$e(null),e=$e(null),t=$e(null),i=$e(!1);function s(l){n.value=l}function r(l){e.value=l}function o(l){t.value=l}function a(l){i.value=l}return{bookingDetails:n,seatDetails:e,paymentDetails:t,fromHomepageSearch:i,setBookingDetails:s,setSeatDetails:r,setPaymentDetails:o,setFromHomepageSearch:a}}),Yx={class:"modal-content location-modal-content"},Kx={class:"modal-title f2"},Zx={class:"location-picker-body"},Jx={class:"sidebar"},Qx=["onClick"],ey={class:"content-view"},ty={class:"airport-list"},ny=["onClick"],iy={class:"airport-details"},sy={class:"airport-city f3"},ry={class:"airport-fullname f5"},oy={class:"airport-code f1"},ay={__name:"LocationModal",props:{title:String},emits:["close","select"],setup(n,{emit:e}){const t=e,i=$e("熱門城市"),s=["台灣","港澳","東北亞","東南亞","北美洲"],r={台灣:[{city:"臺北",country:"臺灣",fullName:"臺灣桃園國際機場",code:"TPE"},{city:"臺中",country:"臺灣",fullName:"臺中國際機場",code:"RMQ"}],港澳:[{city:"香港",country:"中國",fullName:"香港國際機場",code:"HKG"},{city:"澳門",country:"中國",fullName:"澳門國際機場",code:"MFM"}],東北亞:[{city:"札幌",country:"日本",fullName:"新千歲機場",code:"CTS"},{city:"大阪",country:"日本",fullName:"關西國際機場",code:"KIX"},{city:"東京",country:"日本",fullName:"成田國際機場",code:"NRT"}],東南亞:[{city:"曼谷",country:"泰國",fullName:"素萬那普機場",code:"BKK"},{city:"宿霧",country:"菲律賓",fullName:"麥克坦-宿霧國際機場",code:"CEB"},{city:"吉隆坡",country:"馬來西亞",fullName:"吉隆坡國際機場",code:"KUL"}],北美洲:[{city:"洛杉磯",country:"美國",fullName:"洛杉磯國際機場",code:"LAX"},{city:"西雅圖",country:"美國",fullName:"西雅圖-塔科馬國際機場",code:"SEA"},{city:"舊金山",country:"美國",fullName:"舊金山國際機場",code:"SFO"}]},o=zt(()=>r[i.value]||[]),a=l=>{t("select",l),t("close")};return(l,c)=>(xe(),Me("div",{class:"modal-overlay",onClick:c[1]||(c[1]=jp(u=>l.$emit("close"),["self"]))},[S("div",Yx,[S("button",{onClick:c[0]||(c[0]=u=>l.$emit("close")),class:"close-icon-button","aria-label":"關閉視窗"}," × "),S("h3",Kx,Ue(n.title),1),c[2]||(c[2]=S("div",{class:"search-bar"},[S("input",{type:"text",placeholder:"選擇機場",class:"search-input f4"}),S("img",{src:um,alt:"搜尋",class:"search-icon"})],-1)),S("div",Zx,[S("nav",Jx,[(xe(),Me(Lt,null,An(s,u=>S("button",{key:u,class:Ms({"nav-item":!0,active:i.value===u}),onClick:h=>i.value=u},Ue(u),11,Qx)),64))]),S("div",ey,[S("ul",ty,[(xe(!0),Me(Lt,null,An(o.value,u=>(xe(),Me("li",{key:u.code,class:"airport-item",onClick:h=>a(u)},[S("div",iy,[S("span",sy,Ue(u.city)+", "+Ue(u.country),1),S("span",ry,Ue(u.fullName),1)]),S("span",oy,Ue(u.code),1)],8,ny))),128))])])])])]))}},hm=rt(ay,[["__scopeId","data-v-0fd9bd5d"]]),ly={class:"text-white py-4 search-form"},cy={class:"container"},uy={class:"row g-2"},hy={class:"col-12 col-md-6"},fy={class:"location-selector-container"},dy={class:"location-title f5"},py={class:"location-title f5"},my={key:0,class:"error-message"},gy={class:"col-6 col-md-3"},_y={class:"form-group"},vy={class:"input-with-icon"},xy={key:0,class:"error-message"},yy={__name:"SearchForm",setup(n){const e=Ti(),t=Ji(),i=$e(""),s=$e(!1),r=$e(""),o=$e(!0),a=$e(null),l=$e(null),c=bs({origin:!1,destination:!1,departureDate:!1}),u=$e(null),h=m=>{r.value=m,o.value=m==="出發地",s.value=!0},f=m=>{o.value?(a.value=m,c.origin=!1):(l.value=m,c.destination=!1),s.value=!1},d=()=>{var m;(m=u.value)==null||m.showPicker()},g=()=>{const m=a.value;a.value=l.value,l.value=m},v=()=>{const m={origin:a.value,destination:l.value,tripType:"round-trip",departureDate:i.value,cabinClass:"economy",promoCode:""};t.setBookingDetails(m),t.setFromHomepageSearch(!0),e.push("/booking")};return(m,p)=>(xe(),Me("section",ly,[S("div",cy,[S("form",uy,[S("div",hy,[S("div",fy,[S("div",{class:"location-item",onClick:p[0]||(p[0]=T=>h("出發地"))},[S("span",dy,Ue(a.value?a.value.city:"出發地"),1)]),S("div",{class:"swap-icon-container",onClick:g},p[4]||(p[4]=[S("span",{class:"swap-icon"},"⇌",-1)])),S("div",{class:"location-item",onClick:p[1]||(p[1]=T=>h("目的地"))},[S("span",py,Ue(l.value?l.value.city:"目的地"),1)])]),c.origin||c.destination?(xe(),Me("p",my,"請選擇出發地和目的地。")):Dt("",!0)]),S("div",gy,[S("div",_y,[p[5]||(p[5]=S("label",{for:"departure-date",class:"d-none"},"出發日期",-1)),S("div",vy,[Fr(S("input",{type:"date",id:"departure-date",class:"form-control",placeholder:"請選擇日期",ref_key:"dateInputRef",ref:u,"onUpdate:modelValue":p[2]||(p[2]=T=>i.value=T)},null,512),[[fc,i.value]]),S("span",{class:"icon calendar-icon",onClick:d},"📅")]),c.departureDate?(xe(),Me("p",xy,"請選擇出發日期。")):Dt("",!0)])]),S("div",{class:"col-6 col-md-3"},[S("button",{type:"button",class:"btn w-100 text-white search-btn",onClick:v},"搜尋")])])]),s.value?(xe(),Qn(hm,{key:0,title:r.value,onClose:p[3]||(p[3]=T=>s.value=!1),onSelect:f},null,8,["title"])):Dt("",!0)]))}},Sy=rt(yy,[["__scopeId","data-v-2fb824bb"]]),vc="/test/image/icon/icon-arrow-right-gold.svg",My={class:"position-relative hero-slider"},by={class:"slider-container"},Ey={class:"photo-credit"},Ty=["href"],wy=["href"],Ay=["src","alt"],Ry={class:"caption"},Cy={class:"slider-controls"},Py=["src"],Ly={class:"f5 gold-text"},Dy={__name:"Swiper",setup(n){const e="/test/",t=`${e}image/icon/main-icon-play-gold.svg`,i=`${e}image/icon/main-icon-pause-gold.svg`,s=[{title:"探索世界，從此開始",subtitle:"體驗無與倫比的舒適飛行",image:"/test/image/swiper/eva-darron-airplane.jpg",author:"Eva Darron",authorLink:"https://unsplash.com/@evadarron?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",photoLink:"https://unsplash.com/photos/airplanes-window-view-of-sky-during-golden-hour-oCdVtGFeDC0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},{title:"直達夢想目的地",subtitle:"用心連結每一次遠行",image:"/test/image/swiper/ross-parmly-airplane.jpg",author:"Ross Parmly",authorLink:"https://unsplash.com/@rparmly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",photoLink:"https://unsplash.com/photos/aerial-photography-of-airliner-rf6ywHVkrlY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"},{title:"飛越天際，超越期待",subtitle:"專業服務，締造美好旅程",image:"/test/image/swiper/chuttersnap-airplane.jpg",author:"CHUTTERSNAP",authorLink:"https://unsplash.com/@chuttersnap?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",photoLink:"https://unsplash.com/photos/gray-commercial-airplane-TdbQBWNO2SE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"}],r=$e(0),o=$e(!0);let a;function l(){r.value=(r.value+1)%s.length}function c(){r.value=(r.value-1+s.length)%s.length}function u(){o.value=!o.value,o.value?a=setInterval(l,5e3):clearInterval(a)}return Es(()=>{a=setInterval(l,5e3)}),bp(()=>{clearInterval(a)}),(h,f)=>(xe(),Me("section",My,[S("div",by,[S("div",Ey,[f[0]||(f[0]=ht(" Photo by ")),S("a",{href:s[r.value].authorLink,target:"_blank",rel:"noopener"},Ue(s[r.value].author),9,Ty),f[1]||(f[1]=ht(" on ")),S("a",{href:s[r.value].photoLink,target:"_blank",rel:"noopener"}," Unsplash ",8,wy)]),(xe(),Me(Lt,null,An(s,(d,g)=>S("div",{key:g,class:Ms(["slide",{active:g===r.value}])},[S("img",{src:d.image,alt:d.title},null,8,Ay),S("div",Ry,[S("h2",null,Ue(d.title),1),S("p",null,Ue(d.subtitle),1)])],2)),64))]),S("button",{class:"slider-btn prev f2",onClick:c},f[2]||(f[2]=[S("img",{class:"slider-btn-img slider-btn-img-left",src:vc,alt:"previous"},null,-1)])),S("button",{class:"slider-btn next f2",onClick:l},f[3]||(f[3]=[S("img",{class:"slider-btn-img slider-btn-img-right",src:vc,alt:"next"},null,-1)])),S("div",Cy,[S("button",{class:"play-btn",onClick:u},[S("img",{src:o.value?i:t,alt:"play/pause icon"},null,8,Py)]),f[4]||(f[4]=S("span",{class:"f5 gold-text mx-2"},"|",-1)),S("span",Ly,Ue(r.value+1)+" / "+Ue(s.length),1)])]))}},Iy=rt(Dy,[["__scopeId","data-v-0eccb80d"]]),Ny="/test/image/icon/icon-arrow-left-gold.svg",Uy={class:"explore-carousel text-center text-white"},Oy={class:"carousel-container"},Fy={class:"btn-left"},By={class:"slides-wrapper"},ky={class:"slide-img plane-window"},Hy=["src","alt"],zy={class:"caption my-2"},Vy={class:"btn-right"},Ar=5,Gy={__name:"Explore",setup(n){const e=[{name:"台北",image:"/test/image/city/Taipei.jpg"},{name:"洛杉磯",image:"/test/image/city/LosAngeles.jpg"},{name:"東京",image:"/test/image/city/Tokyo.jpg"},{name:"台中",image:"/test/image/city/Taichung.jpg"},{name:"曼谷",image:"/test/image/city/Bangkok.jpg"},{name:"宮古島",image:"/test/image/city/Miyako-jima.jpg"},{name:"安大略",image:"/test/image/city/Ontario.jpg"},{name:"雅加達",image:"/test/image/city/Jakarta.jpg"},{name:"香港",image:"/test/image/city/HongKong.jpg"},{name:"西雅圖",image:"/test/image/city/Seattle.jpg"},{name:"富國島",image:"/test/image/city/PhuQuoc.jpg"},{name:"清邁",image:"/test/image/city/ChiangMai.jpg"},{name:"舊金山",image:"/test/image/city/SanFrancisco.jpg"},{name:"札幌",image:"/test/image/city/Sapporo.jpg"},{name:"新加坡",image:"/test/image/city/Singapore.jpg"},{name:"大阪",image:"/test/image/city/Osaka.jpg"}],t=$e(0),i=Math.max(e.length-Ar,0),s=zt(()=>e.length<=Ar?e:e.slice(t.value,t.value+Ar));function r(){t.value>0&&t.value--}function o(){t.value<i&&t.value++}return(a,l)=>(xe(),Me("section",Uy,[l[2]||(l[2]=S("h2",{class:"title my-5"},"世界都市",-1)),S("div",Oy,[S("div",Fy,[e.length>Ar&&t.value!==0?(xe(),Me("button",{key:0,class:"arrow left",onClick:r,"aria-label":"上一個"},l[0]||(l[0]=[S("img",{src:Ny,alt:"上一個",class:"arrow-icon"},null,-1)]))):Dt("",!0)]),S("div",By,[(xe(!0),Me(Lt,null,An(s.value,(c,u)=>(xe(),Me("div",{class:"slide",key:u},[S("div",ky,[S("img",{src:c.image,alt:c.name},null,8,Hy)]),S("p",zy,Ue(c.name),1)]))),128))]),S("div",Vy,[e.length>Ar&&t.value!==Rt(i)?(xe(),Me("button",{key:0,class:"arrow right",onClick:o,"aria-label":"下一個"},l[1]||(l[1]=[S("img",{src:vc,alt:"下一個",class:"arrow-icon"},null,-1)]))):Dt("",!0)])])]))}},Wy=rt(Gy,[["__scopeId","data-v-0fbdb57b"]]),Xy={class:"parallax-hero"},$y={class:"parallax-hero-content"},jy={__name:"Parallax",props:{title:{type:String,default:"立即探索精彩目的地"},buttonText:{type:String,default:"立即預訂"},background:{type:String,default:"/test/image/leonardo-yip-vacation.jpg"},speed:{type:Number,default:.3}},emits:["click"],setup(n,{emit:e}){const t=$e(0),i=()=>{t.value=window.scrollY};return Es(()=>{window.addEventListener("scroll",i)}),gr(()=>{window.removeEventListener("scroll",i)}),(s,r)=>{const o=Rn("RouterLink");return xe(),Me("div",Xy,[S("div",{class:"parallax-hero-bg",style:Oa({backgroundImage:`url('${n.background}')`,transform:`translateY(${t.value*n.speed}px)`})},null,4),S("div",$y,[S("h2",null,Ue(n.title),1),pe(o,{to:"/booking"},{default:ut(()=>[S("button",null,Ue(n.buttonText),1)]),_:1})]),r[0]||(r[0]=S("div",{class:"photo-credit"},[ht(" Photo by "),S("a",{href:"https://unsplash.com/@yipleonardo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",target:"_blank",rel:"noopener"}," Leonardo Yip "),ht(" on "),S("a",{href:"https://unsplash.com/photos/window-view-of-airplane-during-golden-hour-rn-NLirHQPY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",target:"_blank",rel:"noopener"}," Unsplash ")],-1))])}}},qy=rt(jy,[["__scopeId","data-v-cf66024a"]]),Yy={class:"container py-5 aircraft-info"},Ky={class:"row gy-4 px-5"},Zy={class:"card h-100 shadow border-0 hover-transform d-flex flex-column"},Jy=["src","alt"],Qy={class:"card-body d-flex flex-column"},eS={class:"card-title h5 mb-3"},tS={class:"card-text mb-3"},nS={class:"card-text small mt-auto"},iS=["href"],sS={class:"row justify-content-center gap-5 p-5"},rS={__name:"PlaneIntro",setup(n){const e=[{name:"A321neo",description:"窄體客機，neo代表新引擎選項，提升燃油效率20%，噪音降低。常用於中短程航線，衍生型A321XLR可執行跨洋航線，座位約180-244位。",image:"/test/image/airplane/A321neo.jpg",imageCredit:{author:"By BriYYZ from Toronto, Canada",url:"https://commons.wikimedia.org/w/index.php?curid=51240603",license:"CC BY-SA 2.0"}},{name:"A330neo",description:"雙走道廣體客機，換裝新型勞斯萊斯引擎，燃油效率提升14%。適用於中長程航線，如A330-900neo可載287-465名乘客，航程可達7,350海浬。",image:"/test/image/airplane/A330neo.jpg",imageCredit:{author:"By pjs2005 from Hampshire, UK",url:"https://commons.wikimedia.org/w/index.php?curid=70942421",license:"CC BY-SA 2.0"}},{name:"A350-900",description:"全新設計的廣體客機，大量採用複合材料，搭載高效能勞斯萊斯引擎。專為中長程至超長程航線打造，約300-350個座位，航程可達8,100海浬，客艙舒適度極佳。",image:"/test/image/airplane/A350-900.jpg",imageCredit:{author:"By Ken Fielding",url:"https://commons.wikimedia.org/w/index.php?curid=32256396",license:"CC BY-SA 3.0"}}];return(t,i)=>{const s=Rn("router-link");return xe(),Me("section",Yy,[i[2]||(i[2]=S("h2",{class:"text-white my-4 py-5 text-center"},"機隊介紹",-1)),S("div",Ky,[(xe(),Me(Lt,null,An(e,r=>S("div",{key:r.name,class:"col-12 col-md-6 col-lg-4"},[S("div",Zy,[S("img",{src:r.image,alt:r.name,class:"card-img-top object-fit-cover"},null,8,Jy),S("div",Qy,[S("h2",eS,Ue(r.name),1),S("p",tS,Ue(r.description),1),S("p",nS,[ht(" 圖片來源："+Ue(r.imageCredit.author)+"， ",1),S("a",{href:r.imageCredit.url,target:"_blank",class:"text-decoration-underline"},"CC 授權連結",8,iS),ht(" （"+Ue(r.imageCredit.license)+"） ",1)])])])])),64))]),S("div",sS,[pe(s,{to:"/equipment",class:"btn btn-outline-custom btn-lg col-5 col-md-4 col-lg-3 text-center py-3"},{default:ut(()=>i[0]||(i[0]=[ht(" 設備介紹 ")])),_:1,__:[0]}),pe(s,{to:"/booking",class:"btn btn-outline-custom btn-lg col-5 col-md-4 col-lg-3 text-center py-3"},{default:ut(()=>i[1]||(i[1]=[ht(" 搜尋航班 ")])),_:1,__:[1]})])])}}},oS=rt(rS,[["__scopeId","data-v-3ba22b68"]]),aS={class:"subscribe-section"},lS={class:"subscribe-content"},cS={class:"subscribe-checkbox"},uS={for:"agree"},hS={__name:"Subscription",setup(n){const e={backgroundImage:"linear-gradient(to right, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.85) 50%, rgba(0, 0, 0, 1) 70%), url('/test/image/sean-oulashin-sub.jpg')",backgroundSize:"cover",backgroundPosition:"center"};return(t,i)=>{const s=Rn("RouterLink");return xe(),Me("section",aS,[S("div",{class:"subscribe-container",style:e},[S("div",lS,[i[4]||(i[4]=S("h2",null,"永不錯過優惠",-1)),i[5]||(i[5]=S("p",null,"訂閱即可率先收到我們的獨家優惠。",-1)),i[6]||(i[6]=S("div",{class:"subscribe-inputs"},[S("input",{type:"email",placeholder:"電子郵件地址"}),S("input",{type:"text",placeholder:"首選出發城市"})],-1)),S("div",cS,[i[3]||(i[3]=S("input",{type:"checkbox",id:"agree"},null,-1)),S("label",uS,[i[1]||(i[1]=ht(" 我希望收到來自星宇航空的優惠和最新消息。我已閱讀並了解 ")),pe(s,{to:"/"},{default:ut(()=>i[0]||(i[0]=[ht("隱私聲明")])),_:1,__:[0]}),i[2]||(i[2]=ht("。 "))])]),i[7]||(i[7]=S("button",{class:"subscribe-button"},"訂閱",-1))]),i[8]||(i[8]=S("div",{class:"photo-credit"},[ht(" Photo by "),S("a",{href:"https://unsplash.com/@oulashin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",target:"_blank",rel:"noopener"}," Sean Oulashin "),ht(" on "),S("a",{href:"https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",target:"_blank",rel:"noopener"}," Unsplash ")],-1))])])}}},fS=rt(hS,[["__scopeId","data-v-ce1b9e23"]]),dS={class:"page-container"},pS={class:"container header-bg-color"},mS={class:"container-fluid"},gS={class:"container-fluid"},_S={__name:"HomeView",setup(n){return(e,t)=>(xe(),Me("div",dS,[S("header",pS,[pe(_r)]),t[0]||(t[0]=S("div",{class:"full-width-hr"},[S("hr")],-1)),S("main",mS,[pe(Sy),pe(Iy),pe(Wy),pe(qy),pe(oS),pe(fS)]),S("footer",gS,[pe(wi),pe(Ai)])]))}},vS=rt(_S,[["__scopeId","data-v-12d33dde"]]),xS={class:"form-page-container"},yS={class:"form-wrapper"},SS={class:"form-upper"},MS={class:"location-selector-container-out"},bS={class:"location-selector-container"},ES={class:"location-title f1"},TS={class:"location-prompt f5"},wS={class:"location-title f1"},AS={class:"location-prompt f5"},RS={key:0,class:"error-message"},CS={class:"form-group"},PS={class:"form-group"},LS={class:"input-with-icon"},DS={key:0,class:"error-message"},IS={class:"form-group"},NS={class:"form-group"},US={class:"form-group info-link-container"},OS={__name:"BookingForm",setup(n){const e=Ti(),t=Ji(),i=$e("round-trip"),s=$e(""),r=$e("economy"),o=$e(""),a=$e(!1),l=$e(""),c=$e(!0),u=$e(null),h=$e(null),f=bs({origin:!1,destination:!1,departureDate:!1}),d=$e(null),g=b=>{l.value=b,c.value=b==="出發地",a.value=!0},v=b=>{c.value?(u.value=b,f.origin=!1):(h.value=b,f.destination=!1),a.value=!1},m=()=>{var b;(b=d.value)==null||b.showPicker()},p=()=>{const b=u.value;u.value=h.value,h.value=b},T=()=>{f.origin=!1,f.destination=!1,f.departureDate=!1;let b=!1;if(u.value||(f.origin=!0,b=!0),h.value||(f.destination=!0,b=!0),s.value||(f.departureDate=!0,b=!0),b)return;const x={origin:u.value.code,destination:h.value.code,tripType:i.value,departureDate:s.value,cabinClass:r.value,promoCode:o.value};t.setBookingDetails(x),e.push("/search-result")};return Es(()=>{t.fromHomepageSearch&&t.bookingDetails&&(u.value=t.bookingDetails.origin,h.value=t.bookingDetails.destination,i.value=t.bookingDetails.tripType,s.value=t.bookingDetails.departureDate,r.value=t.bookingDetails.cabinClass,o.value=t.bookingDetails.promoCode,t.setFromHomepageSearch(!1))}),(b,x)=>{const I=Rn("router-link");return xe(),Me("div",xS,[S("div",yS,[S("div",SS,[S("div",MS,[S("div",bS,[S("div",{class:"location-item",onClick:x[0]||(x[0]=P=>g("出發地"))},[S("span",ES,Ue(u.value?u.value.city:"出發地"),1),S("span",TS,Ue(u.value?u.value.code:"請選擇出發地"),1)]),S("div",{class:"swap-icon-container",onClick:p},x[7]||(x[7]=[S("span",{class:"swap-icon"},"⇌",-1)])),S("div",{class:"location-item",onClick:x[1]||(x[1]=P=>g("目的地"))},[S("span",wS,Ue(h.value?h.value.city:"目的地"),1),S("span",AS,Ue(h.value?h.value.code:"請選擇目的地"),1)])]),f.origin||f.destination?(xe(),Me("p",RS,"請選擇出發地和目的地。")):Dt("",!0)]),S("div",CS,[x[9]||(x[9]=S("label",{for:"trip-type"},"行程類型",-1)),Fr(S("select",{id:"trip-type",class:"form-input","onUpdate:modelValue":x[2]||(x[2]=P=>i.value=P)},x[8]||(x[8]=[S("option",{value:"one-way"},"單程",-1),S("option",{value:"round-trip"},"來回",-1)]),512),[[Vh,i.value]])]),S("div",PS,[x[10]||(x[10]=S("label",{for:"departure-date"},"出發日期",-1)),S("div",LS,[Fr(S("input",{type:"date",id:"departure-date",class:"form-input",placeholder:"請選擇日期",ref_key:"dateInputRef",ref:d,"onUpdate:modelValue":x[3]||(x[3]=P=>s.value=P)},null,512),[[fc,s.value]]),S("span",{class:"icon calendar-icon",onClick:m},"📅")]),f.departureDate?(xe(),Me("p",DS,"請選擇出發日期。")):Dt("",!0)]),S("div",IS,[x[12]||(x[12]=S("label",{for:"cabin-class"},"選擇艙等",-1)),Fr(S("select",{id:"cabin-class",class:"form-input","onUpdate:modelValue":x[4]||(x[4]=P=>r.value=P)},x[11]||(x[11]=[S("option",{value:"economy"},"經濟艙",-1),S("option",{value:"business"},"商務艙",-1),S("option",{value:"first"},"頭等艙",-1)]),512),[[Vh,r.value]])]),S("div",NS,[x[13]||(x[13]=S("label",{for:"promo-code"},"優惠代碼",-1)),Fr(S("input",{type:"text",id:"promo-code",class:"form-input",placeholder:"輸入代碼 (非必填)","onUpdate:modelValue":x[5]||(x[5]=P=>o.value=P)},null,512),[[fc,o.value]])]),S("div",US,[pe(I,{to:"/notes-for-child",class:"info-link"},{default:ut(()=>x[14]||(x[14]=[S("span",{class:"icon info-icon"},"ⓘ",-1),S("span",null,"嬰兒及兒童注意事項",-1)])),_:1,__:[14]})])]),x[15]||(x[15]=S("hr",{class:"separator"},null,-1)),S("div",{class:"form-lower"},[S("button",{class:"search-button",onClick:T},"搜尋")])]),a.value?(xe(),Qn(hm,{key:0,title:l.value,onClose:x[6]||(x[6]=P=>a.value=!1),onSelect:v},null,8,["title"])):Dt("",!0)])}}},FS=rt(OS,[["__scopeId","data-v-aad5616d"]]),BS={class:"page-container"},kS={class:"container header-bg-color"},HS={class:"container"},zS={class:"main-bottom main-bottom-bg"},VS={class:"container-fluid"},GS={__name:"BookingView",setup(n){return(e,t)=>(xe(),Me("div",BS,[S("header",kS,[pe(_r)]),t[1]||(t[1]=S("div",{class:"full-width-hr"},[S("hr")],-1)),S("main",HS,[t[0]||(t[0]=S("div",{class:"main-top main-top-bg f2"}," 旅行，與星宇航空一起開始 ",-1)),S("div",zS,[pe(FS)])]),S("footer",VS,[pe(wi),pe(Ai)])]))}},WS=rt(GS,[["__scopeId","data-v-2a626c82"]]),XS={class:"ticket-container"},$S={class:"left-panel"},jS={class:"info-row flight-info"},qS={class:"flight-number"},YS={class:"flight-duration"},KS={class:"info-row time-info"},ZS={class:"time-block departure-time"},JS={class:"date"},QS={class:"time"},eM={class:"time-block arrival-time"},tM={class:"date"},nM={class:"time"},iM={class:"info-row timeline-info"},sM={class:"airport-code"},rM={class:"airport-code"},oM={class:"right-panel"},aM={class:"price-section"},lM={class:"price-content"},cM={class:"class-name"},uM={class:"price-display"},hM={class:"amount"},fM={class:"select-seat-section"},dM={__name:"BookingTicket",props:{flight:{type:Object,required:!0,default:()=>({id:"",flightNumber:"",aircraftType:"",duration:"",departureDate:"",departureTime:"",arrivalDate:"",arrivalTime:"",originCode:"",destinationCode:""})},cabinClass:{type:String,required:!0}},setup(n){const e=n,t={economy:8e3,business:24e3,first:66e3},i={economy:"經濟艙",business:"商務艙",first:"頭等艙"},s=zt(()=>t[e.cabinClass]||0),r=zt(()=>i[e.cabinClass]||"未知艙等"),o=zt(()=>`select-seat-${e.cabinClass}`);return(a,l)=>{const c=Rn("router-link");return xe(),Me("div",XS,[S("div",$S,[S("div",jS,[S("div",qS,"機號 "+Ue(n.flight.flightNumber)+"・機型 "+Ue(n.flight.aircraftType),1),S("div",YS,"飛行時間: "+Ue(n.flight.duration),1)]),S("div",KS,[S("div",ZS,[S("span",JS,Ue(n.flight.departureDate),1),S("span",QS,Ue(n.flight.departureTime),1)]),S("div",eM,[S("span",tM,Ue(n.flight.arrivalDate),1),S("span",nM,Ue(n.flight.arrivalTime),1)])]),S("div",iM,[S("span",sM,Ue(n.flight.originCode),1),l[0]||(l[0]=S("div",{class:"timeline-line"},null,-1)),S("span",rM,Ue(n.flight.destinationCode),1)])]),S("div",oM,[S("div",aM,[S("div",lM,[S("div",cM,Ue(r.value),1),S("div",uM,[l[1]||(l[1]=S("span",{class:"currency"},"TWD",-1)),S("span",hM,Ue(s.value.toLocaleString()),1),l[2]||(l[2]=S("span",{class:"suffix"},"起",-1))])])]),S("div",fM,[pe(c,{to:{name:o.value,query:{flightId:n.flight.id,cabinClass:n.cabinClass}}},{default:ut(()=>l[3]||(l[3]=[S("button",{class:"select-seat-button"},"選位",-1)])),_:1,__:[3]},8,["to"])])])])}}},pM=rt(dM,[["__scopeId","data-v-200e3b8e"]]),mM="/test/image/icon/starlux-logo-classic-no-text.svg",gM={},_M={class:"navbar navbar-expand-lg navbar-starlux f5"},vM={class:"container navbar-container d-flex justify-content-center align-items-center pe-0"},xM={class:"d-flex align-items-center"};function yM(n,e){const t=Rn("router-link");return xe(),Me("nav",_M,[S("div",vM,[S("div",xM,[pe(t,{to:"/"},{default:ut(()=>e[0]||(e[0]=[S("img",{src:mM,alt:"STARLUX Logo",class:"logo-img"},null,-1)])),_:1,__:[0]})])])])}const SM=rt(gM,[["render",yM],["__scopeId","data-v-00789116"]]),MM="/test/image/icon/icon-arrow-stem-right-gold.svg",bM={},EM={class:"flight-ticket-rules"},TM={class:"header"};function wM(n,e){const t=Rn("router-link");return xe(),Me("section",EM,[S("div",TM,[pe(t,{to:"/",class:"back-arrow"},{default:ut(()=>e[0]||(e[0]=[S("img",{src:MM,alt:"返回"},null,-1)])),_:1,__:[0]}),e[1]||(e[1]=S("h2",{class:"title f2"},"搜尋票價產品",-1))]),e[2]||(e[2]=S("div",{class:"rules-list"},[S("ol",{class:"f5"},[S("li",null,"下述所顯示時間皆為當地時間，票價適用於目前選取的日期與航班，且為所有旅客購買的票價產品總價，包含機票票價、各項附加費與各地機場稅金等。"),S("li",null,"星宇航空其他銷售管道，如官方App，或許能提供更優惠價格。"),S("li",null,"所選擇的艙等可能在部分航段上無提供該產品，請於下方搜尋結果確認艙等票價。"),S("li",null,"提醒您，若於起飛前24小時內購買票價等艙產品，由於餐食準備時間及客製，受此影響，故會有以商務艙餐食替代之可能性，造成您的不便，敬請見諒，感謝您的理解與支持。"),S("li",null,"Galactic Wi-Fi進網可能受到氣候、領空限制、衛星訊號、設備更新或技術問題影響，而無法提供服務。機上Wi-Fi若為免費贈品，無提供或服務中斷恕不退費或賠償責任。若另購買Galactic Wi-Fi方案但未能使用，本公司將依相關規定退費處理。"),S("li",null,"星宇航空僅於本公司營運的國際線航班提供服務（包括選座位和餐食、預購行李及機上免稅品等），非星宇航空營運的航班，請洽實際營運航空公司。班機時刻請於出票前再次與實際營運航空公司確認。"),S("li",null,"下列顯示之部分票價產品規定，僅適用於搭乘星宇航空實際營運之航班，詳細資訊依下列條卡說明。")])],-1))])}const AM=rt(bM,[["render",wM],["__scopeId","data-v-88d3ef7f"]]),RM="/test/image/icon/icon-link.svg",Ln="/test/image/icon/nav-icon-new-page-gold.svg",CM={},PM={class:"notice-section"},LM={class:"related-links"},DM={class:"links f5"};function IM(n,e){const t=Rn("router-link");return xe(),Me("section",PM,[e[12]||(e[12]=Wa('<h2 class="notice-title f3" data-v-82a9af8a>注意事項</h2><ol class="notice-list f5" data-v-82a9af8a><li data-v-82a9af8a>來回行程之票價產品價格是以各航段分開顯示，各航段之價格並非單程票價，該顯示價格僅為提供計算所購買的票價產品之參考。</li><li data-v-82a9af8a>各航段如選擇不同之票價產品組合時，相應收費標準將以較高者為主。例如：航段中包含全額與基本之票價產品組合時，相關手續費用需依照「基本」票價產品規範收取。</li><li data-v-82a9af8a>兒童旅客的票價產品/未發機手續費為成人旅客收費的75%；嬰兒旅客的改票/退票手續費為成人旅客收費的10%。</li><li data-v-82a9af8a>旅客各航段所購買之票價產品，可免費或付費預選座位，請詳見「票價產品說明」。INSIGHTER及EXPLORER會員本人依據搭機當日之卡級，可享有免收部分預選座位費用之禮遇，若卡級於搭機日前有更動，尊榮原預選座位不隨會員卡級變動，旅客須重新選擇座位，詳請見「卡級座艙禮遇」。 </li><li data-v-82a9af8a>依據臺灣消費者保護法第19條第2項但書所訂之「通訊交易解除權合理例外情事適用準則」規定，網路購買國際航線票不適用七天解除權。如消費者購買機票後欲退票，將依星宇航空退票規定辦理。於星宇航空官網或App購票機票後，欲辦理機票退費，將按照實際已搭乘行程之適用票價計算，相關退票申請條款與規定，詳見「線上退票」。當日購票、申請退票時間點為原訂航班起飛後4小時內或COSMILE哩程支付機票不適用此線上退票功能，請透過「退票申請」頁面辦理。 </li><li data-v-82a9af8a>星宇航空保留隨時修訂或終止各票價產品、優惠及相關規則之權利，詳見「運送條款」。</li><li data-v-82a9af8a>以上規定僅適用於搭乘星宇航空實際營運之航班，非本公司之其他營運人對旅客行程的運送相關責任，按各運送人之運送條款處理。</li><li data-v-82a9af8a>機票所扣僅適用於機票票價，不適用於各項附加費(包含不限於訂位服務費、機場服務費、旅客服務費等)、手續費(包含但不限於改票、退票、未登機等服務)與各地機場收取規費等。</li><li data-v-82a9af8a>Galactic Wi-Fi進網可能受到氣候、領空限制、衛星訊號、設備更新或技術問題影響，而無法提供服務。機上Wi-Fi若為免費贈品，無提供或服務中斷恕不退費或賠償責任。若另購買Galactic Wi-Fi方案但未能使用，本公司將依相關規定退費處理。</li><li data-v-82a9af8a>星宇航空可變的服務及票價，將視不同票價產品、航段、均有不同收費標準。詳情請參閱「可變服務及費用」。</li><li data-v-82a9af8a>透過星宇航空官網或App購票的機票，可利用「更改航班」及「線上退票」功能進行機票退/改事宜，適用條件詳請見「附加費與退改票須知」說明。</li></ol>',2)),S("div",LM,[e[11]||(e[11]=S("h3",{class:"related-title f5"},[S("img",{src:RM,alt:"連結"}),S("span",null,"相關連結")],-1)),S("div",DM,[pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[0]||(e[0]=[S("span",{class:"me-1"},"附加費與退改票須知",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[0]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[1]||(e[1]=[S("span",{class:"me-1"},"各艙等免費行李額度",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[1]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[2]||(e[2]=[S("span",{class:"me-1"},"卡級座艙禮遇",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[2]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[3]||(e[3]=[S("span",{class:"me-1"},"線上退票",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[3]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[4]||(e[4]=[S("span",{class:"me-1"},"退票申請",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[4]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[5]||(e[5]=[S("span",{class:"me-1"},"運送條款",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[5]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[6]||(e[6]=[S("span",{class:"me-1"},"私人航班運輸條款",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[6]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[7]||(e[7]=[S("span",{class:"me-1"},"卡級座艙禮遇",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[7]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[8]||(e[8]=[S("span",{class:"me-1"},"更改航班",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[8]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[9]||(e[9]=[S("span",{class:"me-1"},"可變服務及費用",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[9]}),pe(t,{to:"/",class:"link-item d-flex align-items-center"},{default:ut(()=>e[10]||(e[10]=[S("span",{class:"me-1"},"機場接送服務",-1),S("img",{src:Ln,alt:"開新頁面-金"},null,-1)])),_:1,__:[10]})])])])}const NM=rt(CM,[["render",IM],["__scopeId","data-v-82a9af8a"]]),UM="/test/image/icon/icon-search-again.svg",OM={};function FM(n,e){const t=Rn("router-link");return xe(),Qn(t,{to:"/booking",class:"return-section"},{default:ut(()=>e[0]||(e[0]=[S("button",{id:"search-again"},[S("span",{class:"f5"},"重新搜索 "),S("img",{src:UM,alt:""})],-1)])),_:1,__:[0]})}const BM=rt(OM,[["render",FM],["__scopeId","data-v-52594d6c"]]),kM={class:"container"},HM={class:"header-section"},zM={class:"booking-section"},VM={__name:"SearchResultView",setup(n){var i,s,r,o,a,l;const e=Ji(),t=$e([{id:"flight-001",flightNumber:"JX002",aircraftType:"A350-900",duration:"3小時45分",departureDate:"2025年6月25日",departureTime:"08:30",arrivalDate:"2025年6月25日",arrivalTime:"12:15",originCode:((i=e.bookingDetails)==null?void 0:i.origin)||"TPE",destinationCode:((s=e.bookingDetails)==null?void 0:s.destination)||"KIX"},{id:"flight-002",flightNumber:"JX120",aircraftType:"A330-900NEO",duration:"4小時00分",departureDate:"2025年6月25日",departureTime:"10:00",arrivalDate:"2025年6月25日",arrivalTime:"14:00",originCode:((r=e.bookingDetails)==null?void 0:r.origin)||"TPE",destinationCode:((o=e.bookingDetails)==null?void 0:o.destination)||"KIX"},{id:"flight-003",flightNumber:"JX200",aircraftType:"A321NEO",duration:"3小時30分",departureDate:"2025年6月25日",departureTime:"14:00",arrivalDate:"2025年6月25日",arrivalTime:"17:30",originCode:((a=e.bookingDetails)==null?void 0:a.origin)||"TPE",destinationCode:((l=e.bookingDetails)==null?void 0:l.destination)||"KIX"}]);return(c,u)=>(xe(),Me("div",kM,[S("header",HM,[pe(SM)]),u[0]||(u[0]=S("div",{class:"full-width-hr"},[S("hr")],-1)),pe(AM),S("section",zM,[(xe(!0),Me(Lt,null,An(t.value,h=>{var f;return xe(),Qn(pM,{key:h.id,flight:h,cabinClass:((f=Rt(e).bookingDetails)==null?void 0:f.cabinClass)||"economy"},null,8,["flight","cabinClass"])}),128))]),pe(BM),pe(NM)]))}},GM=rt(VM,[["__scopeId","data-v-3031420d"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pu="177",Js={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},WM=0,hf=1,XM=2,fm=1,Ya=2,fi=3,bi=0,un=1,$n=2,ji=0,Qs=1,ff=2,df=3,pf=4,$M=5,ds=100,jM=101,qM=102,YM=103,KM=104,ZM=200,JM=201,QM=202,eb=203,xc=204,yc=205,tb=206,nb=207,ib=208,sb=209,rb=210,ob=211,ab=212,lb=213,cb=214,Sc=0,Mc=1,bc=2,or=3,Ec=4,Tc=5,wc=6,Ac=7,dm=0,ub=1,hb=2,qi=0,fb=1,db=2,pb=3,Ka=4,mb=5,gb=6,_b=7,mf="attached",vb="detached",pm=300,ar=301,lr=302,cr=303,Rc=304,Za=306,ur=1e3,Gi=1001,wa=1002,sn=1003,mm=1004,kr=1005,gn=1006,la=1007,_i=1008,Zn=1009,gm=1010,_m=1011,lo=1012,Lu=1013,xs=1014,Fn=1015,xo=1016,Du=1017,Iu=1018,co=1020,vm=35902,xm=1021,ym=1022,bn=1023,uo=1026,ho=1027,Nu=1028,Uu=1029,Sm=1030,Ou=1031,Fu=1033,ca=33776,ua=33777,ha=33778,fa=33779,Cc=35840,Pc=35841,Lc=35842,Dc=35843,Ic=36196,Nc=37492,Uc=37496,Oc=37808,Fc=37809,Bc=37810,kc=37811,Hc=37812,zc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,$c=37818,jc=37819,qc=37820,Yc=37821,da=36492,Kc=36494,Zc=36495,Mm=36283,Jc=36284,Qc=36285,eu=36286,fo=2300,po=2301,_l=2302,gf=2400,_f=2401,vf=2402,xb=2500,yb=0,bm=1,tu=2,Sb=3200,Mb=3201,Em=0,bb=1,Vi="",Ht="srgb",on="srgb-linear",Aa="linear",yt="srgb",Cs=7680,xf=519,Eb=512,Tb=513,wb=514,Tm=515,Ab=516,Rb=517,Cb=518,Pb=519,nu=35044,yf="300 es",vi=2e3,Ra=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sf=1234567;const Jr=Math.PI/180,hr=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Bu(n,e){return(n%e+e)%e}function Lb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Db(n,e,t){return n!==e?(t-n)/(e-n):0}function Qr(n,e,t){return(1-t)*n+t*e}function Ib(n,e,t,i){return Qr(n,e,1-Math.exp(-t*i))}function Nb(n,e=1){return e-Math.abs(Bu(n,e*2)-e)}function Ub(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ob(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bb(n,e){return n+Math.random()*(e-n)}function kb(n){return n*(.5-Math.random())}function Hb(n){n!==void 0&&(Sf=n);let e=Sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zb(n){return n*Jr}function Vb(n){return n*hr}function Gb(n){return(n&n-1)===0&&n!==0}function Wb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $b(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wm={DEG2RAD:Jr,RAD2DEG:hr,generateUUID:kn,clamp:it,euclideanModulo:Bu,mapLinear:Lb,inverseLerp:Db,lerp:Qr,damp:Ib,pingpong:Nb,smoothstep:Ub,smootherstep:Ob,randInt:Fb,randFloat:Bb,randFloatSpread:kb,seededRandom:Hb,degToRad:zb,radToDeg:Vb,isPowerOfTwo:Gb,ceilPowerOfTwo:Wb,floorPowerOfTwo:Xb,setQuaternionFromProperEuler:$b,normalize:vt,denormalize:Un};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*v,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const I=Math.sqrt(b),P=Math.atan2(I,p*T);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const x=a*T;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+v*x,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new N,Mf=new vn;class tt{constructor(e,t,i,s,r,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],T=s[1],b=s[4],x=s[7],I=s[2],P=s[5],L=s[8];return r[0]=o*v+a*T+l*I,r[3]=o*m+a*b+l*P,r[6]=o*p+a*x+l*L,r[1]=c*v+u*T+h*I,r[4]=c*m+u*b+h*P,r[7]=c*p+u*x+h*L,r[2]=f*v+d*T+g*I,r[5]=f*m+d*b+g*P,r[8]=f*p+d*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new tt;function Am(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jb(){const n=mo("canvas");return n.style.display="block",n}const bf={};function er(n){n in bf||(bf[n]=!0,console.warn(n))}function qb(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Yb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kb(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ef=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zb(){const n={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Aa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[on]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const at=Zb();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class Jb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=mo("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qb=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yl(s[o].image)):r.push(yl(s[o]))}else r=yl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eE=0;const Sl=new N;class Vt extends Ts{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Gi,s=Gi,r=gn,o=_i,a=bn,l=Zn,c=Vt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=kn(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=pm;Vt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(d+1)/2,I=(p+1)/2,P=(u+f)/4,L=(h+v)/4,D=(g+m)/4;return b>x&&b>I?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=L/i):x>I?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=P/s,r=D/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=L/r,s=D/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tE extends Ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Vt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ku(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends tE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rm extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nE extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Co.copy(i.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Po.subVectors(this.max,Rr),Ls.subVectors(e.a,Rr),Ds.subVectors(e.b,Rr),Is.subVectors(e.c,Rr),Pi.subVectors(Ds,Ls),Li.subVectors(Is,Ds),is.subVectors(Ls,Is);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-is.z,is.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,is.z,0,-is.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-is.y,is.x,0];return!Ml(t,Ls,Ds,Is,Po)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Ls,Ds,Is,Po))?!1:(Lo.crossVectors(Pi,Li),t=[Lo.x,Lo.y,Lo.z],Ml(t,Ls,Ds,Is,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,Co=new Ri,Ls=new N,Ds=new N,Is=new N,Pi=new N,Li=new N,is=new N,Rr=new N,Po=new N,Lo=new N,ss=new N;function Ml(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);const a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const iE=new Ri,Cr=new N,bl=new N;class ei{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(bl)),this.expandByPoint(Cr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new N,El=new N,Do=new N,Di=new N,Tl=new N,Io=new N,wl=new N;class vr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){El.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(El);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Di.dot(this.direction),l=-Di.dot(Do),c=Di.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(El).addScaledVector(Do,f),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){Tl.subVectors(t,e),Io.subVectors(i,e),wl.crossVectors(Tl,Io);let o=this.direction.dot(wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(Di,Io));if(l<0)return null;const c=a*this.direction.dot(Tl.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(wl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,v,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sE,e,rE)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),No.crossVectors(fn,Ii),s[0]=Ii.x,s[4]=No.x,s[8]=fn.x,s[1]=Ii.y,s[5]=No.y,s[9]=fn.y,s[2]=Ii.z,s[6]=No.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],b=i[7],x=i[11],I=i[15],P=s[0],L=s[4],D=s[8],C=s[12],E=s[1],U=s[5],ne=s[9],q=s[13],le=s[2],ce=s[6],Q=s[10],K=s[14],G=s[3],_e=s[7],Se=s[11],we=s[15];return r[0]=o*P+a*E+l*le+c*G,r[4]=o*L+a*U+l*ce+c*_e,r[8]=o*D+a*ne+l*Q+c*Se,r[12]=o*C+a*q+l*K+c*we,r[1]=u*P+h*E+f*le+d*G,r[5]=u*L+h*U+f*ce+d*_e,r[9]=u*D+h*ne+f*Q+d*Se,r[13]=u*C+h*q+f*K+d*we,r[2]=g*P+v*E+m*le+p*G,r[6]=g*L+v*U+m*ce+p*_e,r[10]=g*D+v*ne+m*Q+p*Se,r[14]=g*C+v*q+m*K+p*we,r[3]=T*P+b*E+x*le+I*G,r[7]=T*L+b*U+x*ce+I*_e,r[11]=T*D+b*ne+x*Q+I*Se,r[15]=T*C+b*q+x*K+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=h*m*c-v*f*c+v*l*d-a*m*d-h*l*p+a*f*p,b=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*v*c-g*h*c+g*a*d-o*v*d-u*a*p+o*h*p,I=g*h*l-u*v*l-g*a*f+o*v*f+u*a*m-o*h*m,P=t*T+i*b+s*x+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=T*L,e[1]=(v*f*r-h*m*r-v*s*d+i*m*d+h*s*p-i*f*p)*L,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*L,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*L,e[4]=b*L,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=x*L,e[9]=(g*h*r-u*v*r-g*i*d+t*v*d+u*i*p-t*h*p)*L,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*L,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*L,e[12]=I*L,e[13]=(u*v*s-g*h*s+g*i*f-t*v*f-u*i*m+t*h*m)*L,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*L,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,v=o*u,m=o*h,p=a*h,T=l*c,b=l*u,x=l*h,I=i.x,P=i.y,L=i.z;return s[0]=(1-(v+p))*I,s[1]=(d+x)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(d-x)*P,s[5]=(1-(f+p))*P,s[6]=(m+T)*P,s[7]=0,s[8]=(g+b)*L,s[9]=(m-T)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ns.set(s[0],s[1],s[2]).length();const o=Ns.set(s[4],s[5],s[6]).length(),a=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const c=1/r,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=vi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===vi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ra)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,v;if(a===vi)g=(o+r)*h,v=-2*h;else if(a===Ra)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new N,In=new et,sE=new N(0,0,0),rE=new N(1,1,1),Ii=new N,No=new N,fn=new N,wf=new et,Af=new vn;class Jn{constructor(e=0,t=0,i=0,s=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Af.setFromEuler(this),this.setFromQuaternion(Af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oE=0;const Rf=new N,Us=new vn,li=new et,Uo=new N,Pr=new N,aE=new N,lE=new vn,Cf=new N(1,0,0),Pf=new N(0,1,0),Lf=new N(0,0,1),Df={type:"added"},cE={type:"removed"},Os={type:"childadded",child:null},Al={type:"childremoved",child:null};class Ct extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new N,t=new Jn,i=new vn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new tt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Pf,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,t){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Pf,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Pr,Uo,this.up):li.lookAt(Uo,Pr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(li),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Df),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cE),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Df),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,aE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,lE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new N(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new N,ci=new N,Rl=new N,ui=new N,Fs=new N,Bs=new N,If=new N,Cl=new N,Pl=new N,Ll=new N,Dl=new ft,Il=new ft,Nl=new ft;class On{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),ci.subVectors(i,t),Rl.subVectors(e,t);const o=Nn.dot(Nn),a=Nn.dot(ci),l=Nn.dot(Rl),c=ci.dot(ci),u=ci.dot(Rl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Dl.setScalar(0),Il.setScalar(0),Nl.setScalar(0),Dl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,i),Nl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Il,r.y),o.addScaledVector(Nl,r.z),o}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),ci.subVectors(e,t),Nn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Bs.subVectors(r,i),Cl.subVectors(e,i);const l=Fs.dot(Cl),c=Bs.dot(Cl);if(l<=0&&c<=0)return t.copy(i);Pl.subVectors(e,s);const u=Fs.dot(Pl),h=Bs.dot(Pl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);Ll.subVectors(e,r);const d=Fs.dot(Ll),g=Bs.dot(Ll);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Bs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return If.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(If,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Bu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ul(o,r,e+1/3),this.g=Ul(o,r,e),this.b=Ul(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=Cm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return at.workingToColorSpace(qt.copy(this),e),Math.round(it(qt.r*255,0,255))*65536+Math.round(it(qt.g*255,0,255))*256+Math.round(it(qt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ht){at.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Oo);const i=Qr(Ni.h,Oo.h,t),s=Qr(Ni.s,Oo.s,t),r=Qr(Ni.l,Oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Qe;Qe.NAMES=Cm;let uE=0;class qn extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Qs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xc&&(i.blendSrc=this.blendSrc),this.blendDst!==yc&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new N,Fo=new Xe;let hE=0;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class Pm extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lm extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yi extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fE=0;const Sn=new et,Ol=new Ct,ks=new N,dn=new Ri,Lr=new Ri,kt=new N;class ti extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?Lm:Pm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(dn.min,Lr.min),dn.expandByPoint(kt),kt.addVectors(dn.max,Lr.max),dn.expandByPoint(kt)):(dn.expandByPoint(Lr.min),dn.expandByPoint(Lr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),kt.add(ks)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new N,l[D]=new N;const c=new N,u=new N,h=new N,f=new Xe,d=new Xe,g=new Xe,v=new N,m=new N;function p(D,C,E){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(U),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),a[D].add(v),a[C].add(v),a[E].add(v),l[D].add(m),l[C].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,C=T.length;D<C;++D){const E=T[D],U=E.start,ne=E.count;for(let q=U,le=U+ne;q<le;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const b=new N,x=new N,I=new N,P=new N;function L(D){I.fromBufferAttribute(s,D),P.copy(I);const C=a[D];b.copy(C),b.sub(I.multiplyScalar(I.dot(C))).normalize(),x.crossVectors(P,C);const U=x.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,U)}for(let D=0,C=T.length;D<C;++D){const E=T[D],U=E.start,ne=E.count;for(let q=U,le=U+ne;q<le;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nf=new et,rs=new vr,Bo=new ei,Uf=new N,ko=new N,Ho=new N,zo=new N,Fl=new N,Vo=new N,Of=new N,Go=new N;class _n extends Ct{constructor(e=new ti,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Fl.fromBufferAttribute(h,e),o?Vo.addScaledVector(Fl,u):Vo.addScaledVector(Fl.sub(t),u))}t.add(Vo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Bo.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Bo,Uf)===null||rs.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(Nf.copy(r).invert(),rs.copy(e.ray).applyMatrix4(Nf),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,I=b;x<I;x+=3){const P=a.getX(x),L=a.getX(x+1),D=a.getX(x+2);s=Wo(this,p,e,i,c,u,h,P,L,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=Wo(this,o,e,i,c,u,h,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,I=b;x<I;x+=3){const P=x,L=x+1,D=x+2;s=Wo(this,p,e,i,c,u,h,P,L,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const T=m,b=m+1,x=m+2;s=Wo(this,o,e,i,c,u,h,T,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dE(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===bi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:n}}function Wo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ko),n.getVertexPosition(l,Ho),n.getVertexPosition(c,zo);const u=dE(n,e,t,i,ko,Ho,zo,Of);if(u){const h=new N;On.getBarycoord(Of,ko,Ho,zo,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new Xe)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,h,new Xe)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};On.getNormal(ko,Ho,zo,f.normal),u.face=f,u.barycoord=h}return u}class yo extends ti{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(h,2));function g(v,m,p,T,b,x,I,P,L,D,C){const E=x/L,U=I/D,ne=x/2,q=I/2,le=P/2,ce=L+1,Q=D+1;let K=0,G=0;const _e=new N;for(let Se=0;Se<Q;Se++){const we=Se*U-q;for(let Be=0;Be<ce;Be++){const Ke=Be*E-ne;_e[v]=Ke*T,_e[m]=we*b,_e[p]=le,c.push(_e.x,_e.y,_e.z),_e[v]=0,_e[m]=0,_e[p]=P>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(Be/L),h.push(1-Se/D),K+=1}}for(let Se=0;Se<D;Se++)for(let we=0;we<L;we++){const Be=f+we+ce*Se,Ke=f+we+ce*(Se+1),ae=f+(we+1)+ce*(Se+1),me=f+(we+1)+ce*Se;l.push(Be,Ke,me),l.push(Ke,ae,me),G+=6}a.addGroup(d,G,C),d+=G,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const s in i)e[s]=i[s]}return e}function pE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Dm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const mE={clone:fr,merge:tn};var gE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gE,this.fragmentShader=_E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=pE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Im extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new N,Ff=new Xe,Bf=new Xe;class Xt extends Im{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Bf),t.subVectors(Bf,Ff)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,zs=1;class vE extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Hs,zs,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Hs,zs,e,t);r.layers=this.layers,this.add(r);const o=new Xt(Hs,zs,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Hs,zs,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Hs,zs,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Hs,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nm extends Vt{constructor(e=[],t=ar,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xE extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yo(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ji});r.uniforms.tEquirect.value=t;const o=new _n(s,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=gn),new vE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class gs extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zu extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class SE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new N;class Vu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kf=new N,Hf=new ft,zf=new ft,ME=new N,Vf=new et,Xo=new N,kl=new ei,Gf=new et,Hl=new vr;class bE extends _n{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mf,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kl.copy(this.boundingSphere),kl.applyMatrix4(s),e.ray.intersectsSphere(kl)!==!1&&(Gf.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(Gf),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vb?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Hf.fromBufferAttribute(s.attributes.skinIndex,e),zf.fromBufferAttribute(s.attributes.skinWeight,e),kf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=zf.getComponent(r);if(o!==0){const a=Hf.getComponent(r);Vf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ME.copy(kf).applyMatrix4(Vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Um extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Om extends Vt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wf=new et,EE=new et;class Gu{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:EE;Wf.multiplyMatrices(a,t[r]),Wf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Gu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Om(t,e,e,bn,Fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Um),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class iu extends rn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vs=new et,Xf=new et,$o=[],$f=new Ri,TE=new et,Dr=new _n,Ir=new ei;class wE extends _n{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new iu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,TE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),$f.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union($f)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Vs),Ir.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(i),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Xf.multiplyMatrices(i,Vs),Dr.matrixWorld=Xf,Dr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){const l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new iu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Om(new Float32Array(s*this.count),s,this.count,Nu,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zl=new N,AE=new N,RE=new tt;class zi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=zl.subVectors(i,t).cross(AE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RE.getNormalMatrix(e),s=this.coplanarPoint(zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new ei,jo=new N;class Wu{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],b=s[14],x=s[15];if(i[0].setComponents(l-r,f-c,m-d,x-p).normalize(),i[1].setComponents(l+r,f+c,m+d,x+p).normalize(),i[2].setComponents(l+o,f+u,m+g,x+T).normalize(),i[3].setComponents(l-o,f-u,m-g,x-T).normalize(),i[4].setComponents(l-a,f-h,m-v,x-b).normalize(),t===vi)i[5].setComponents(l+a,f+h,m+v,x+b).normalize();else if(t===Ra)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fm extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new N,Pa=new N,jf=new et,Nr=new vr,qo=new ei,Vl=new N,qf=new N;class Xu extends Ct{constructor(e=new ti,t=new Fm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ca.fromBufferAttribute(t,s-1),Pa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new yi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;jf.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(jf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=u.getX(v),T=u.getX(v+1),b=Yo(this,e,Nr,l,p,T,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=Yo(this,e,Nr,l,v,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=c){const p=Yo(this,e,Nr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Yo(this,e,Nr,l,g-1,d,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ca.fromBufferAttribute(a,s),Pa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ca,Pa,Vl,qf)>i)return;Vl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Vl);if(!(c<e.near||c>e.far))return{distance:c,point:qf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Yf=new N,Kf=new N;class CE extends Xu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Yf.fromBufferAttribute(t,s),Kf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Yf.distanceTo(Kf);e.setAttribute("lineDistance",new yi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PE extends Xu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bm extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zf=new et,su=new vr,Ko=new ei,Zo=new N;class LE extends Ct{constructor(e=new ti,t=new Bm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Zf.copy(s).invert(),su.copy(e.ray).applyMatrix4(Zf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);Zo.fromBufferAttribute(h,m),Jf(Zo,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Zo.fromBufferAttribute(h,g),Jf(Zo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jf(n,e,t,i,s,r,o){const a=su.distanceSqToPoint(n);if(a<t){const l=new N;su.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class km extends Vt{constructor(e,t,i=xs,s,r,o,a=sn,l=sn,c,u=uo,h=1){if(u!==uo&&u!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ja extends ti{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let b=0;b<c;b++){const x=b*h-r;g.push(x,-T,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const b=T+c*p,x=T+c*(p+1),I=T+1+c*(p+1),P=T+1+c*p;d.push(b,x,P),d.push(x,I,P)}this.setIndex(d),this.setAttribute("position",new yi(g,3)),this.setAttribute("normal",new yi(v,3)),this.setAttribute("uv",new yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}class $u extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Em,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends $u{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DE extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function NE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function UE(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Qf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Hm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class So{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class OE extends So{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gf,endingEnd:gf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _f:r=e,a=2*t-i;break;case vf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _f:o=e,l=2*i-t;break;case vf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,T=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+T*o[c+I]+b*o[l+I]+x*o[h+I];return r}}class FE extends So{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class BE extends So{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new BE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new FE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new OE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&NE(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_l,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[f+g]||v!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=po;class xr extends zn{constructor(e,t,i){super(e,t,i)}}xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=fo;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class zm extends zn{constructor(e,t,i,s){super(e,t,i,s)}}zm.prototype.ValueTypeName="color";class dr extends zn{constructor(e,t,i,s){super(e,t,i,s)}}dr.prototype.ValueTypeName="number";class kE extends So{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)vn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class pr extends zn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new kE(this.times,this.values,this.getValueSize(),e)}}pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends zn{constructor(e,t,i){super(e,t,i)}}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=fo;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class mr extends zn{constructor(e,t,i,s){super(e,t,i,s)}}mr.prototype.ValueTypeName="vector";class HE{constructor(e="",t=-1,i=[],s=xb){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(VE(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(zn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=UE(l);l=Qf(l,1,u),c=Qf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new dr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,v){if(d.length!==0){const m=[],p=[];Hm(d,m,p,g),m.length!==0&&v.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let T=0;T!==f[g].morphTargets.length;++T){const b=f[g];m.push(b.time),p.push(b.morphTarget===v?1:0)}s.push(new dr(".morphTargetInfluence["+v+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(mr,d+".position",f,"pos",s),i(pr,d+".quaternion",f,"rot",s),i(mr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return dr;case"vector":case"vector2":case"vector3":case"vector4":return mr;case"color":return zm;case"quaternion":return pr;case"bool":case"boolean":return xr;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function VE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zE(n.type);if(n.times===void 0){const t=[],i=[];Hm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class GE{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const WE=new GE;class Sr{constructor(e){this.manager=e!==void 0?e:WE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class XE extends Error{constructor(e,t){super(e),this.response=t}}class Vm extends Sr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:b,value:x})=>{if(b)p.close();else{v+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let P=0,L=u.length;P<L;P++){const D=u[P];D.onProgress&&D.onProgress(I)}p.enqueue(x),T()}},b=>{p.error(b)})}}});return new Response(m)}else throw new XE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Wi.add(e,c);const u=hi[e];delete hi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $E extends Sr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=mo("img");function l(){u(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qa extends Sr{constructor(e){super(e)}load(e,t,i,s){const r=new Vt,o=new $E(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ju extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gl=new et,ed=new N,td=new N;class qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wu,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jE extends qu{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qE extends ju{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nd=new et,Ur=new N,Wl=new N;class YE extends qu{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ur),Wl.copy(i.position),Wl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wl),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd)}}class KE extends ju{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new YE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yu extends Im{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ZE extends qu{constructor(){super(new Yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class el extends ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new ZE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xl=new WeakMap;class JE extends Sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Xl.has(o)===!0)s&&s(Xl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Xl.set(l,c),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,l),r.manager.itemStart(e)}}class QE extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ku="\\[\\]\\.:\\/",eT=new RegExp("["+Ku+"]","g"),Zu="[^"+Ku+"]",tT="[^"+Ku.replace("\\.","")+"]",nT=/((?:WC+[\/:])*)/.source.replace("WC",Zu),iT=/(WCOD+)?/.source.replace("WCOD",tT),sT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),rT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),oT=new RegExp("^"+nT+iT+sT+rT+"$"),aT=["material","materials","bones","map"];class lT{constructor(e,t,i){const s=i||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class xt{constructor(e,t,i){this.path=t,this.parsedPath=i||xt.parseTrackName(t),this.node=xt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new xt.Composite(e,t,i):new xt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eT,"")}static parseTrackName(e){const t=oT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);aT.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=xt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xt.Composite=lT;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const id=new et;class Ju{constructor(e,t,i=0,s=1/0){this.ray=new vr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,i=[]){return ru(e,this,i,t),i.sort(sd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,i,t);return i.sort(sd),i}}function sd(n,e){return n.distance-e.distance}function ru(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ru(r[o],e,t,!0)}}class rd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cT extends Ts{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function od(n,e,t,i){const s=uT(i);switch(t){case xm:return n*e;case Nu:return n*e/s.components*s.byteLength;case Uu:return n*e/s.components*s.byteLength;case Sm:return n*e*2/s.components*s.byteLength;case Ou:return n*e*2/s.components*s.byteLength;case ym:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case Fu:return n*e*4/s.components*s.byteLength;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Cc:case Lc:return Math.max(n,8)*Math.max(e,8)/2;case Ic:case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case da:case Kc:case Zc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Mm:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qc:case eu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uT(n){switch(n){case Zn:case gm:return{byteLength:1,components:1};case lo:case _m:case xo:return{byteLength:2,components:1};case Du:case Iu:return{byteLength:2,components:4};case xs:case Lu:case Fn:return{byteLength:4,components:1};case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hT(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],v=h[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const v=h[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ST=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ET=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ow=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ww=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$w=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:fT,alphahash_pars_fragment:dT,alphamap_fragment:pT,alphamap_pars_fragment:mT,alphatest_fragment:gT,alphatest_pars_fragment:_T,aomap_fragment:vT,aomap_pars_fragment:xT,batching_pars_vertex:yT,batching_vertex:ST,begin_vertex:MT,beginnormal_vertex:bT,bsdfs:ET,iridescence_fragment:TT,bumpmap_pars_fragment:wT,clipping_planes_fragment:AT,clipping_planes_pars_fragment:RT,clipping_planes_pars_vertex:CT,clipping_planes_vertex:PT,color_fragment:LT,color_pars_fragment:DT,color_pars_vertex:IT,color_vertex:NT,common:UT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:FT,displacementmap_pars_vertex:BT,displacementmap_vertex:kT,emissivemap_fragment:HT,emissivemap_pars_fragment:zT,colorspace_fragment:VT,colorspace_pars_fragment:GT,envmap_fragment:WT,envmap_common_pars_fragment:XT,envmap_pars_fragment:$T,envmap_pars_vertex:jT,envmap_physical_pars_fragment:sw,envmap_vertex:qT,fog_vertex:YT,fog_pars_vertex:KT,fog_fragment:ZT,fog_pars_fragment:JT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:rw,lights_toon_pars_fragment:ow,lights_phong_fragment:aw,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:hw,lights_fragment_maps:fw,lights_fragment_end:dw,logdepthbuf_fragment:pw,logdepthbuf_pars_fragment:mw,logdepthbuf_pars_vertex:gw,logdepthbuf_vertex:_w,map_fragment:vw,map_pars_fragment:xw,map_particle_fragment:yw,map_particle_pars_fragment:Sw,metalnessmap_fragment:Mw,metalnessmap_pars_fragment:bw,morphinstance_vertex:Ew,morphcolor_vertex:Tw,morphnormal_vertex:ww,morphtarget_pars_vertex:Aw,morphtarget_vertex:Rw,normal_fragment_begin:Cw,normal_fragment_maps:Pw,normal_pars_fragment:Lw,normal_pars_vertex:Dw,normal_vertex:Iw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Uw,clearcoat_normal_fragment_maps:Ow,clearcoat_pars_fragment:Fw,iridescence_pars_fragment:Bw,opaque_fragment:kw,packing:Hw,premultiplied_alpha_fragment:zw,project_vertex:Vw,dithering_fragment:Gw,dithering_pars_fragment:Ww,roughnessmap_fragment:Xw,roughnessmap_pars_fragment:$w,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:qw,shadowmap_vertex:Yw,shadowmask_pars_fragment:Kw,skinbase_vertex:Zw,skinning_pars_vertex:Jw,skinning_vertex:Qw,skinnormal_vertex:eA,specularmap_fragment:tA,specularmap_pars_fragment:nA,tonemapping_fragment:iA,tonemapping_pars_fragment:sA,transmission_fragment:rA,transmission_pars_fragment:oA,uv_pars_fragment:aA,uv_pars_vertex:lA,uv_vertex:cA,worldpos_vertex:uA,background_vert:hA,background_frag:fA,backgroundCube_vert:dA,backgroundCube_frag:pA,cube_vert:mA,cube_frag:gA,depth_vert:_A,depth_frag:vA,distanceRGBA_vert:xA,distanceRGBA_frag:yA,equirect_vert:SA,equirect_frag:MA,linedashed_vert:bA,linedashed_frag:EA,meshbasic_vert:TA,meshbasic_frag:wA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:CA,meshmatcap_frag:PA,meshnormal_vert:LA,meshnormal_frag:DA,meshphong_vert:IA,meshphong_frag:NA,meshphysical_vert:UA,meshphysical_frag:OA,meshtoon_vert:FA,meshtoon_frag:BA,points_vert:kA,points_frag:HA,shadow_vert:zA,shadow_frag:VA,sprite_vert:GA,sprite_frag:WA},Te={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Xn={basic:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:tn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:tn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:tn([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:tn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:tn([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:tn([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:tn([Te.common,Te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:tn([Te.lights,Te.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Xn.physical={uniforms:tn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Qo={r:0,b:0,g:0},as=new Jn,XA=new et;function $A(n,e,t,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function v(b){let x=!1;const I=g(b);I===null?p(a,l):I&&I.isColor&&(p(I,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===Za)?(u===void 0&&(u=new _n(new yo(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:fr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),as.copy(x.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(as)),u.material.toneMapped=at.getTransfer(I.colorSpace)!==yt,(h!==I||f!==I.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new _n(new Ja(2,2),new Zi({name:"BackgroundMaterial",uniforms:fr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(I.colorSpace)!==yt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(Qo,Dm(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m,dispose:T}}function jA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,U,ne,q,le){let ce=!1;const Q=h(q,ne,U);r!==Q&&(r=Q,c(r.object)),ce=d(E,q,ne,le),ce&&g(E,q,ne,le),le!==null&&e.update(le,n.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,x(E,U,ne,q),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,U,ne){const q=ne.wireframe===!0;let le=i[E.id];le===void 0&&(le={},i[E.id]=le);let ce=le[U.id];ce===void 0&&(ce={},le[U.id]=ce);let Q=ce[q];return Q===void 0&&(Q=f(l()),ce[q]=Q),Q}function f(E){const U=[],ne=[],q=[];for(let le=0;le<t;le++)U[le]=0,ne[le]=0,q[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:ne,attributeDivisors:q,object:E,attributes:{},index:null}}function d(E,U,ne,q){const le=r.attributes,ce=U.attributes;let Q=0;const K=ne.getAttributes();for(const G in K)if(K[G].location>=0){const Se=le[G];let we=ce[G];if(we===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(we=E.instanceColor)),Se===void 0||Se.attribute!==we||we&&Se.data!==we.data)return!0;Q++}return r.attributesNum!==Q||r.index!==q}function g(E,U,ne,q){const le={},ce=U.attributes;let Q=0;const K=ne.getAttributes();for(const G in K)if(K[G].location>=0){let Se=ce[G];Se===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(Se=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(Se=E.instanceColor));const we={};we.attribute=Se,Se&&Se.data&&(we.data=Se.data),le[G]=we,Q++}r.attributes=le,r.attributesNum=Q,r.index=q}function v(){const E=r.newAttributes;for(let U=0,ne=E.length;U<ne;U++)E[U]=0}function m(E){p(E,0)}function p(E,U){const ne=r.newAttributes,q=r.enabledAttributes,le=r.attributeDivisors;ne[E]=1,q[E]===0&&(n.enableVertexAttribArray(E),q[E]=1),le[E]!==U&&(n.vertexAttribDivisor(E,U),le[E]=U)}function T(){const E=r.newAttributes,U=r.enabledAttributes;for(let ne=0,q=U.length;ne<q;ne++)U[ne]!==E[ne]&&(n.disableVertexAttribArray(ne),U[ne]=0)}function b(E,U,ne,q,le,ce,Q){Q===!0?n.vertexAttribIPointer(E,U,ne,le,ce):n.vertexAttribPointer(E,U,ne,q,le,ce)}function x(E,U,ne,q){v();const le=q.attributes,ce=ne.getAttributes(),Q=U.defaultAttributeValues;for(const K in ce){const G=ce[K];if(G.location>=0){let _e=le[K];if(_e===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(_e=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(_e=E.instanceColor)),_e!==void 0){const Se=_e.normalized,we=_e.itemSize,Be=e.get(_e);if(Be===void 0)continue;const Ke=Be.buffer,ae=Be.type,me=Be.bytesPerElement,Ee=ae===n.INT||ae===n.UNSIGNED_INT||_e.gpuType===Lu;if(_e.isInterleavedBufferAttribute){const B=_e.data,W=B.stride,Z=_e.offset;if(B.isInstancedInterleavedBuffer){for(let X=0;X<G.locationSize;X++)p(G.location+X,B.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let X=0;X<G.locationSize;X++)m(G.location+X);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let X=0;X<G.locationSize;X++)b(G.location+X,we/G.locationSize,ae,Se,W*me,(Z+we/G.locationSize*X)*me,Ee)}else{if(_e.isInstancedBufferAttribute){for(let B=0;B<G.locationSize;B++)p(G.location+B,_e.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let B=0;B<G.locationSize;B++)m(G.location+B);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let B=0;B<G.locationSize;B++)b(G.location+B,we/G.locationSize,ae,Se,we*me,we/G.locationSize*B*me,Ee)}}else if(Q!==void 0){const Se=Q[K];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(G.location,Se);break;case 3:n.vertexAttrib3fv(G.location,Se);break;case 4:n.vertexAttrib4fv(G.location,Se);break;default:n.vertexAttrib1fv(G.location,Se)}}}}T()}function I(){D();for(const E in i){const U=i[E];for(const ne in U){const q=U[ne];for(const le in q)u(q[le].object),delete q[le];delete U[ne]}delete i[E]}}function P(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const ne in U){const q=U[ne];for(const le in q)u(q[le].object),delete q[le];delete U[ne]}delete i[E.id]}function L(E){for(const U in i){const ne=i[U];if(ne[E.id]===void 0)continue;const q=ne[E.id];for(const le in q)u(q[le].object),delete q[le];delete ne[E.id]}}function D(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function qA(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YA(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==bn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Zn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Fn&&!D)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:I,maxSamples:P}}function KA(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new zi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,b=T*4;let x=p.clippingState||null;l.value=x,x=u(g,f,b,d);for(let I=0;I!==b;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=d;b!==v;++b,x+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ZA(n){let e=new WeakMap;function t(o,a){return a===cr?o.mapping=ar:a===Rc&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cr||a===Rc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xE(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const js=4,ad=[.125,.215,.35,.446,.526,.582],ps=20,$l=new Yu,ld=new Qe;let jl=null,ql=0,Yl=0,Kl=!1;const hs=(1+Math.sqrt(5))/2,Gs=1/hs,cd=[new N(-hs,Gs,0),new N(hs,Gs,0),new N(-Gs,0,hs),new N(Gs,0,hs),new N(0,hs,-Gs),new N(0,hs,Gs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],JA=new N;class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=JA}=r;jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,ql,Yl),this._renderer.xr.enabled=Kl,e.scissorTest=!1,ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:xo,format:bn,colorSpace:on,depthBuffer:!1},s=hd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QA(r)),this._blurMaterial=e1(r,e,t)}return s}_compileMaterial(e){const t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,i,s,r){const l=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ld),h.toneMapping=qi,h.autoClear=!1;const g=new ms({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new _n(new yo,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(ld),m=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const x=this._cubeSize;ea(s,b*x,T>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(v,l),h.render(e,l)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ar||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ea(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cd[(s-r-1)%cd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _n(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ps-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ps;m>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const p=[];let T=0;for(let L=0;L<ps;++L){const D=L/v,C=Math.exp(-D*D/2);p.push(C),L===0?T+=C:L<m&&(T+=2*C)}for(let L=0;L<p.length;L++)p[L]=p[L]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const x=this._sizeLods[s],I=3*x*(s>b-js?s-b+js:0),P=4*(this._cubeSize-x);ea(t,I,P,3*x,2*x),l.setRenderTarget(t),l.render(h,$l)}}function QA(n){const e=[],t=[],i=[];let s=n;const r=n-js+1+ad.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-js?l=ad[o-n+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*d),b=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let P=0;P<d;P++){const L=P%3*2/3-1,D=P>2?0:-1,C=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];T.set(C,v*g*P),b.set(f,m*g*P);const E=[P,P,P,P,P,P];x.set(E,p*g*P)}const I=new ti;I.setAttribute("position",new rn(T,v)),I.setAttribute("uv",new rn(b,m)),I.setAttribute("faceIndex",new rn(x,p)),e.push(I),s>js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hd(n,e,t){const i=new ys(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ea(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function e1(n,e,t){const i=new Float32Array(ps),s=new N(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function fd(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function dd(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cr||l===Rc,u=l===ar||l===lr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ud(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new ud(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function n1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function i1(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let b=0,x=T.length;b<x;b+=3){const I=T[b+0],P=T[b+1],L=T[b+2];f.push(I,P,P,L,L,I)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,x=T.length/3-1;b<x;b+=3){const I=b+0,P=b+1,L=b+2;f.push(I,P,P,L,L,I)}}else return;const m=new(Am(f)?Lm:Pm)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function s1(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*v[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function r1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function o1(n,e,t){const i=new WeakMap,s=new ft;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var d=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const L=new Float32Array(I*P*4*h),D=new Rm(L,I,P,h);D.type=Fn,D.needsUpdate=!0;const C=x*4;for(let U=0;U<h;U++){const ne=p[U],q=T[U],le=b[U],ce=I*P*4*U;for(let Q=0;Q<ne.count;Q++){const K=Q*C;g===!0&&(s.fromBufferAttribute(ne,Q),L[ce+K+0]=s.x,L[ce+K+1]=s.y,L[ce+K+2]=s.z,L[ce+K+3]=0),v===!0&&(s.fromBufferAttribute(q,Q),L[ce+K+4]=s.x,L[ce+K+5]=s.y,L[ce+K+6]=s.z,L[ce+K+7]=0),m===!0&&(s.fromBufferAttribute(le,Q),L[ce+K+8]=s.x,L[ce+K+9]=s.y,L[ce+K+10]=s.z,L[ce+K+11]=le.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new Xe(I,P)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function a1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Wm=new Vt,pd=new km(1,1),Xm=new Rm,$m=new nE,jm=new Nm,md=[],gd=[],_d=new Float32Array(16),vd=new Float32Array(9),xd=new Float32Array(4);function Mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tl(n,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function f1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;xd.set(i),n.uniformMatrix2fv(this.addr,!1,xd),Bt(t,i)}}function d1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;vd.set(i),n.uniformMatrix3fv(this.addr,!1,vd),Bt(t,i)}}function p1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;_d.set(i),n.uniformMatrix4fv(this.addr,!1,_d),Bt(t,i)}}function m1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function x1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function b1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(pd.compareFunction=Tm,r=pd):r=Wm,t.setTexture2D(e||r,s)}function E1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$m,s)}function T1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jm,s)}function w1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xm,s)}function A1(n){switch(n){case 5126:return l1;case 35664:return c1;case 35665:return u1;case 35666:return h1;case 35674:return f1;case 35675:return d1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return x1;case 36294:return y1;case 36295:return S1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}}function R1(n,e){n.uniform1fv(this.addr,e)}function C1(n,e){const t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function P1(n,e){const t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function L1(n,e){const t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function D1(n,e){const t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I1(n,e){const t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N1(n,e){const t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U1(n,e){n.uniform1iv(this.addr,e)}function O1(n,e){n.uniform2iv(this.addr,e)}function F1(n,e){n.uniform3iv(this.addr,e)}function B1(n,e){n.uniform4iv(this.addr,e)}function k1(n,e){n.uniform1uiv(this.addr,e)}function H1(n,e){n.uniform2uiv(this.addr,e)}function z1(n,e){n.uniform3uiv(this.addr,e)}function V1(n,e){n.uniform4uiv(this.addr,e)}function G1(n,e,t){const i=this.cache,s=e.length,r=tl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Wm,r[o])}function W1(n,e,t){const i=this.cache,s=e.length,r=tl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$m,r[o])}function X1(n,e,t){const i=this.cache,s=e.length,r=tl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||jm,r[o])}function $1(n,e,t){const i=this.cache,s=e.length,r=tl(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xm,r[o])}function j1(n){switch(n){case 5126:return R1;case 35664:return C1;case 35665:return P1;case 35666:return L1;case 35674:return D1;case 35675:return I1;case 35676:return N1;case 5124:case 35670:return U1;case 35667:case 35671:return O1;case 35668:case 35672:return F1;case 35669:case 35673:return B1;case 5125:return k1;case 36294:return H1;case 36295:return z1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return $1}}class q1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A1(t.type)}}class Y1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j1(t.type)}}class K1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function yd(n,e){n.seq.push(e),n.map[e.id]=e}function Z1(n,e,t){const i=n.name,s=i.length;for(Zl.lastIndex=0;;){const r=Zl.exec(i),o=Zl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(t,c===void 0?new q1(a,n,e):new Y1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new K1(a),yd(t,h)),t=h}}}class pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Z1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Sd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const J1=37297;let Q1=0;function eR(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Md=new tt;function tR(n){at._getMatrix(Md,at.workingColorSpace,n);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+eR(n.getShaderSource(e),o)}else return s}function nR(n,e){const t=tR(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iR(n,e){let t;switch(e){case fb:t="Linear";break;case db:t="Reinhard";break;case pb:t="Cineon";break;case Ka:t="ACESFilmic";break;case gb:t="AgX";break;case _b:t="Neutral";break;case mb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new N;function sR(){at.getLuminanceCoefficients(ta);const n=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function oR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hr(n){return n!==""}function Ed(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(n){return n.replace(lR,uR)}const cR=new Map;function uR(n,e){let t=nt[e];if(t===void 0){const i=cR.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const hR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(n){return n.replace(hR,fR)}function fR(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function pR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function gR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dm:e="ENVMAP_BLENDING_MULTIPLY";break;case ub:e="ENVMAP_BLENDING_MIX";break;case hb:e="ENVMAP_BLENDING_ADD";break}return e}function _R(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vR(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dR(t),c=pR(t),u=mR(t),h=gR(t),f=_R(t),d=rR(t),g=oR(r),v=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?nt.tonemapping_pars_fragment:"",t.toneMapping!==qi?iR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,nR("linearToOutputTexel",t.outputColorSpace),sR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),o=ou(o),o=Ed(o,t),o=Td(o,t),a=ou(a),a=Ed(a,t),a=Td(a,t),o=wd(o),a=wd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+o,x=T+p+a,I=Sd(s,s.VERTEX_SHADER,b),P=Sd(s,s.FRAGMENT_SHADER,x);s.attachShader(v,I),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(U){if(n.debug.checkShaderErrors){const ne=s.getProgramInfoLog(v).trim(),q=s.getShaderInfoLog(I).trim(),le=s.getShaderInfoLog(P).trim();let ce=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,P);else{const K=bd(s,I,"vertex"),G=bd(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ne+`
`+K+`
`+G)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(q===""||le==="")&&(Q=!1);Q&&(U.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:q,prefix:m},fragmentShader:{log:le,prefix:p}})}s.deleteShader(I),s.deleteShader(P),D=new pa(s,v),C=aR(s,v)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,J1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=P,this}let xR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new SR(e),t.set(e,i)),i}}class SR{constructor(e){this.id=xR++,this.code=e,this.usedTimes=0}}function MR(n,e,t,i,s,r,o){const a=new Hu,l=new yR,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,E,U,ne,q){const le=ne.fog,ce=q.geometry,Q=C.isMeshStandardMaterial?ne.environment:null,K=(C.isMeshStandardMaterial?t:e).get(C.envMap||Q),G=K&&K.mapping===Za?K.image.height:null,_e=g[C.type];C.precision!==null&&(d=s.getMaxPrecision(C.precision),d!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",d,"instead."));const Se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,we=Se!==void 0?Se.length:0;let Be=0;ce.morphAttributes.position!==void 0&&(Be=1),ce.morphAttributes.normal!==void 0&&(Be=2),ce.morphAttributes.color!==void 0&&(Be=3);let Ke,ae,me,Ee;if(_e){const gt=Xn[_e];Ke=gt.vertexShader,ae=gt.fragmentShader}else Ke=C.vertexShader,ae=C.fragmentShader,l.update(C),me=l.getVertexShaderID(C),Ee=l.getFragmentShaderID(C);const B=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),Z=q.isInstancedMesh===!0,X=q.isBatchedMesh===!0,$=!!C.map,M=!!C.matcap,w=!!K,_=!!C.aoMap,k=!!C.lightMap,V=!!C.bumpMap,te=!!C.normalMap,re=!!C.displacementMap,ue=!!C.emissiveMap,se=!!C.metalnessMap,ie=!!C.roughnessMap,Ae=C.anisotropy>0,R=C.clearcoat>0,y=C.dispersion>0,O=C.iridescence>0,Y=C.sheen>0,oe=C.transmission>0,j=Ae&&!!C.anisotropyMap,Pe=R&&!!C.clearcoatMap,ye=R&&!!C.clearcoatNormalMap,Le=R&&!!C.clearcoatRoughnessMap,Ie=O&&!!C.iridescenceMap,fe=O&&!!C.iridescenceThicknessMap,De=Y&&!!C.sheenColorMap,Fe=Y&&!!C.sheenRoughnessMap,ke=!!C.specularMap,be=!!C.specularColorMap,Ye=!!C.specularIntensityMap,F=oe&&!!C.transmissionMap,Re=oe&&!!C.thicknessMap,de=!!C.gradientMap,Oe=!!C.alphaMap,ge=C.alphaTest>0,he=!!C.alphaHash,He=!!C.extensions;let Ze=qi;C.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Tt={shaderID:_e,shaderType:C.type,shaderName:C.name,vertexShader:Ke,fragmentShader:ae,defines:C.defines,customVertexShaderID:me,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:d,batching:X,batchingColor:X&&q._colorsTexture!==null,instancing:Z,instancingColor:Z&&q.instanceColor!==null,instancingMorph:Z&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:on,alphaToCoverage:!!C.alphaToCoverage,map:$,matcap:M,envMap:w,envMapMode:w&&K.mapping,envMapCubeUVHeight:G,aoMap:_,lightMap:k,bumpMap:V,normalMap:te,displacementMap:f&&re,emissiveMap:ue,normalMapObjectSpace:te&&C.normalMapType===bb,normalMapTangentSpace:te&&C.normalMapType===Em,metalnessMap:se,roughnessMap:ie,anisotropy:Ae,anisotropyMap:j,clearcoat:R,clearcoatMap:Pe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Le,dispersion:y,iridescence:O,iridescenceMap:Ie,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:De,sheenRoughnessMap:Fe,specularMap:ke,specularColorMap:be,specularIntensityMap:Ye,transmission:oe,transmissionMap:F,thicknessMap:Re,gradientMap:de,opaque:C.transparent===!1&&C.blending===Qs&&C.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ge,alphaHash:he,combine:C.combine,mapUv:$&&v(C.map.channel),aoMapUv:_&&v(C.aoMap.channel),lightMapUv:k&&v(C.lightMap.channel),bumpMapUv:V&&v(C.bumpMap.channel),normalMapUv:te&&v(C.normalMap.channel),displacementMapUv:re&&v(C.displacementMap.channel),emissiveMapUv:ue&&v(C.emissiveMap.channel),metalnessMapUv:se&&v(C.metalnessMap.channel),roughnessMapUv:ie&&v(C.roughnessMap.channel),anisotropyMapUv:j&&v(C.anisotropyMap.channel),clearcoatMapUv:Pe&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:ye&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(C.sheenRoughnessMap.channel),specularMapUv:ke&&v(C.specularMap.channel),specularColorMapUv:be&&v(C.specularColorMap.channel),specularIntensityMapUv:Ye&&v(C.specularIntensityMap.channel),transmissionMapUv:F&&v(C.transmissionMap.channel),thicknessMapUv:Re&&v(C.thicknessMap.channel),alphaMapUv:Oe&&v(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(te||Ae),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ce.attributes.uv&&($||Oe),fog:!!le,useFog:C.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:W,skinning:q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:$&&C.map.isVideoTexture===!0&&at.getTransfer(C.map.colorSpace)===yt,decodeVideoTextureEmissive:ue&&C.emissiveMap.isVideoTexture===!0&&at.getTransfer(C.emissiveMap.colorSpace)===yt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===$n,flipSided:C.side===un,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||X)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(C){const E=[];if(C.shaderID?E.push(C.shaderID):(E.push(C.customVertexShaderID),E.push(C.customFragmentShaderID)),C.defines!==void 0)for(const U in C.defines)E.push(U),E.push(C.defines[U]);return C.isRawShaderMaterial===!1&&(T(E,C),b(E,C),E.push(n.outputColorSpace)),E.push(C.customProgramCacheKey),E.join()}function T(C,E){C.push(E.precision),C.push(E.outputColorSpace),C.push(E.envMapMode),C.push(E.envMapCubeUVHeight),C.push(E.mapUv),C.push(E.alphaMapUv),C.push(E.lightMapUv),C.push(E.aoMapUv),C.push(E.bumpMapUv),C.push(E.normalMapUv),C.push(E.displacementMapUv),C.push(E.emissiveMapUv),C.push(E.metalnessMapUv),C.push(E.roughnessMapUv),C.push(E.anisotropyMapUv),C.push(E.clearcoatMapUv),C.push(E.clearcoatNormalMapUv),C.push(E.clearcoatRoughnessMapUv),C.push(E.iridescenceMapUv),C.push(E.iridescenceThicknessMapUv),C.push(E.sheenColorMapUv),C.push(E.sheenRoughnessMapUv),C.push(E.specularMapUv),C.push(E.specularColorMapUv),C.push(E.specularIntensityMapUv),C.push(E.transmissionMapUv),C.push(E.thicknessMapUv),C.push(E.combine),C.push(E.fogExp2),C.push(E.sizeAttenuation),C.push(E.morphTargetsCount),C.push(E.morphAttributeCount),C.push(E.numDirLights),C.push(E.numPointLights),C.push(E.numSpotLights),C.push(E.numSpotLightMaps),C.push(E.numHemiLights),C.push(E.numRectAreaLights),C.push(E.numDirLightShadows),C.push(E.numPointLightShadows),C.push(E.numSpotLightShadows),C.push(E.numSpotLightShadowsWithMaps),C.push(E.numLightProbes),C.push(E.shadowMapType),C.push(E.toneMapping),C.push(E.numClippingPlanes),C.push(E.numClipIntersection),C.push(E.depthPacking)}function b(C,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),C.push(a.mask)}function x(C){const E=g[C.type];let U;if(E){const ne=Xn[E];U=mE.clone(ne.uniforms)}else U=C.uniforms;return U}function I(C,E){let U;for(let ne=0,q=u.length;ne<q;ne++){const le=u[ne];if(le.cacheKey===E){U=le,++U.usedTimes;break}}return U===void 0&&(U=new vR(n,E,C,r),u.push(U)),U}function P(C){if(--C.usedTimes===0){const E=u.indexOf(C);u[E]=u[u.length-1],u.pop(),C.destroy()}}function L(C){l.remove(C)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:D}}function bR(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ER(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||ER),i.length>1&&i.sort(f||Rd),s.length>1&&s.sort(f||Rd)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function TR(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Cd,n.set(i,[o])):s>=r.length?(o=new Cd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Qe};break;case"SpotLight":t={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function AR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RR=0;function CR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PR(n){const e=new wR,t=AR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new et,o=new et;function a(c){let u=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,T=0,b=0,x=0,I=0,P=0,L=0;c.sort(CR);for(let C=0,E=c.length;C<E;C++){const U=c[C],ne=U.color,q=U.intensity,le=U.distance,ce=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=ne.r*q,h+=ne.g*q,f+=ne.b*q;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(U.sh.coefficients[Q],q);L++}else if(U.isDirectionalLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const K=U.shadow,G=t.get(U);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=ce,i.directionalShadowMatrix[d]=U.shadow.matrix,T++}i.directional[d]=Q,d++}else if(U.isSpotLight){const Q=e.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(ne).multiplyScalar(q),Q.distance=le,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,i.spot[v]=Q;const K=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,K.updateMatrices(U),U.castShadow&&P++),i.spotLightMatrix[v]=K.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ce,x++}v++}else if(U.isRectAreaLight){const Q=e.get(U);Q.color.copy(ne).multiplyScalar(q),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=Q,m++}else if(U.isPointLight){const Q=e.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const K=U.shadow,G=t.get(U);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ce,i.pointShadowMatrix[g]=U.shadow.matrix,b++}i.point[g]=Q,g++}else if(U.isHemisphereLight){const Q=e.get(U);Q.skyColor.copy(U.color).multiplyScalar(q),Q.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[p]=Q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==I||D.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+I-P,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,D.directionalLength=d,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=I,D.numLightProbes=L,i.version=RR++)}function l(c,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const b=c[p];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Pd(n){const e=new PR(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function LR(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Pd(n),e.set(s,[a])):r>=o.length?(a=new Pd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NR(n,e,t){let i=new Wu;const s=new Xe,r=new Xe,o=new ft,a=new DE({depthPacking:Mb}),l=new IE,c={},u=t.maxTextureSize,h={[bi]:un,[un]:bi,[$n]:$n},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:DR,fragmentShader:IR}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ti;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fm;let p=this.type;this.render=function(P,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const C=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(ji),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const q=p!==fi&&this.type===fi,le=p===fi&&this.type!==fi;for(let ce=0,Q=P.length;ce<Q;ce++){const K=P[ce],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const _e=G.getFrameExtents();if(s.multiply(_e),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,G.mapSize.y=r.y)),G.map===null||q===!0||le===!0){const we=this.type!==fi?{minFilter:sn,magFilter:sn}:{};G.map!==null&&G.map.dispose(),G.map=new ys(s.x,s.y,we),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const Se=G.getViewportCount();for(let we=0;we<Se;we++){const Be=G.getViewport(we);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),ne.viewport(o),G.updateMatrices(K,we),i=G.getFrustum(),x(L,D,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===fi&&T(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,E,U)};function T(P,L){const D=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ys(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,D,f,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,D,d,v,null)}function b(P,L,D,C){let E=null;const U=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)E=U;else if(E=D.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const ne=E.uuid,q=L.uuid;let le=c[ne];le===void 0&&(le={},c[ne]=le);let ce=le[q];ce===void 0&&(ce=E.clone(),le[q]=ce,L.addEventListener("dispose",I)),E=ce}if(E.visible=L.visible,E.wireframe=L.wireframe,C===fi?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:h[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ne=n.properties.get(E);ne.light=D}return E}function x(P,L,D,C,E){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===fi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const q=e.update(P),le=P.material;if(Array.isArray(le)){const ce=q.groups;for(let Q=0,K=ce.length;Q<K;Q++){const G=ce[Q],_e=le[G.materialIndex];if(_e&&_e.visible){const Se=b(P,_e,C,E);P.onBeforeShadow(n,P,L,D,q,Se,G),n.renderBufferDirect(D,null,q,Se,P,G),P.onAfterShadow(n,P,L,D,q,Se,G)}}}else if(le.visible){const ce=b(P,le,C,E);P.onBeforeShadow(n,P,L,D,q,ce,null),n.renderBufferDirect(D,null,q,ce,P,null),P.onAfterShadow(n,P,L,D,q,ce,null)}}const ne=P.children;for(let q=0,le=ne.length;q<le;q++)x(ne[q],L,D,C,E)}function I(P){P.target.removeEventListener("dispose",I);for(const D in c){const C=c[D],E=P.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}const UR={[Sc]:Mc,[bc]:wc,[Ec]:Ac,[or]:Tc,[Mc]:Sc,[wc]:bc,[Ac]:Ec,[Tc]:or};function OR(n,e){function t(){let F=!1;const Re=new ft;let de=null;const Oe=new ft(0,0,0,0);return{setMask:function(ge){de!==ge&&!F&&(n.colorMask(ge,ge,ge,ge),de=ge)},setLocked:function(ge){F=ge},setClear:function(ge,he,He,Ze,Tt){Tt===!0&&(ge*=Ze,he*=Ze,He*=Ze),Re.set(ge,he,He,Ze),Oe.equals(Re)===!1&&(n.clearColor(ge,he,He,Ze),Oe.copy(Re))},reset:function(){F=!1,de=null,Oe.set(-1,0,0,0)}}}function i(){let F=!1,Re=!1,de=null,Oe=null,ge=null;return{setReversed:function(he){if(Re!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Re=he;const Ze=ge;ge=null,this.setClear(Ze)}},getReversed:function(){return Re},setTest:function(he){he?B(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(he){de!==he&&!F&&(n.depthMask(he),de=he)},setFunc:function(he){if(Re&&(he=UR[he]),Oe!==he){switch(he){case Sc:n.depthFunc(n.NEVER);break;case Mc:n.depthFunc(n.ALWAYS);break;case bc:n.depthFunc(n.LESS);break;case or:n.depthFunc(n.LEQUAL);break;case Ec:n.depthFunc(n.EQUAL);break;case Tc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=he}},setLocked:function(he){F=he},setClear:function(he){ge!==he&&(Re&&(he=1-he),n.clearDepth(he),ge=he)},reset:function(){F=!1,de=null,Oe=null,ge=null,Re=!1}}}function s(){let F=!1,Re=null,de=null,Oe=null,ge=null,he=null,He=null,Ze=null,Tt=null;return{setTest:function(gt){F||(gt?B(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(gt){Re!==gt&&!F&&(n.stencilMask(gt),Re=gt)},setFunc:function(gt,Cn,ii){(de!==gt||Oe!==Cn||ge!==ii)&&(n.stencilFunc(gt,Cn,ii),de=gt,Oe=Cn,ge=ii)},setOp:function(gt,Cn,ii){(he!==gt||He!==Cn||Ze!==ii)&&(n.stencilOp(gt,Cn,ii),he=gt,He=Cn,Ze=ii)},setLocked:function(gt){F=gt},setClear:function(gt){Tt!==gt&&(n.clearStencil(gt),Tt=gt)},reset:function(){F=!1,Re=null,de=null,Oe=null,ge=null,he=null,He=null,Ze=null,Tt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,T=null,b=null,x=null,I=null,P=null,L=new Qe(0,0,0),D=0,C=!1,E=null,U=null,ne=null,q=null,le=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,K=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),Q=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Q=K>=2);let _e=null,Se={};const we=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Ke=new ft().fromArray(we),ae=new ft().fromArray(Be);function me(F,Re,de,Oe){const ge=new Uint8Array(4),he=n.createTexture();n.bindTexture(F,he),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<de;He++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(Re+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return he}const Ee={};Ee[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(or),V(!1),te(hf),B(n.CULL_FACE),_(ji);function B(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function W(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Z(F,Re){return h[F]!==Re?(n.bindFramebuffer(F,Re),h[F]=Re,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Re),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function X(F,Re){let de=d,Oe=!1;if(F){de=f.get(Re),de===void 0&&(de=[],f.set(Re,de));const ge=F.textures;if(de.length!==ge.length||de[0]!==n.COLOR_ATTACHMENT0){for(let he=0,He=ge.length;he<He;he++)de[he]=n.COLOR_ATTACHMENT0+he;de.length=ge.length,Oe=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(de)}function $(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const M={[ds]:n.FUNC_ADD,[jM]:n.FUNC_SUBTRACT,[qM]:n.FUNC_REVERSE_SUBTRACT};M[YM]=n.MIN,M[KM]=n.MAX;const w={[ZM]:n.ZERO,[JM]:n.ONE,[QM]:n.SRC_COLOR,[xc]:n.SRC_ALPHA,[rb]:n.SRC_ALPHA_SATURATE,[ib]:n.DST_COLOR,[tb]:n.DST_ALPHA,[eb]:n.ONE_MINUS_SRC_COLOR,[yc]:n.ONE_MINUS_SRC_ALPHA,[sb]:n.ONE_MINUS_DST_COLOR,[nb]:n.ONE_MINUS_DST_ALPHA,[ob]:n.CONSTANT_COLOR,[ab]:n.ONE_MINUS_CONSTANT_COLOR,[lb]:n.CONSTANT_ALPHA,[cb]:n.ONE_MINUS_CONSTANT_ALPHA};function _(F,Re,de,Oe,ge,he,He,Ze,Tt,gt){if(F===ji){v===!0&&(W(n.BLEND),v=!1);return}if(v===!1&&(B(n.BLEND),v=!0),F!==$M){if(F!==m||gt!==C){if((p!==ds||x!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,x=ds),gt)switch(F){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ff:n.blendFunc(n.ONE,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ff:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,b=null,I=null,P=null,L.set(0,0,0),D=0,m=F,C=gt}return}ge=ge||Re,he=he||de,He=He||Oe,(Re!==p||ge!==x)&&(n.blendEquationSeparate(M[Re],M[ge]),p=Re,x=ge),(de!==T||Oe!==b||he!==I||He!==P)&&(n.blendFuncSeparate(w[de],w[Oe],w[he],w[He]),T=de,b=Oe,I=he,P=He),(Ze.equals(L)===!1||Tt!==D)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Tt),L.copy(Ze),D=Tt),m=F,C=!1}function k(F,Re){F.side===$n?W(n.CULL_FACE):B(n.CULL_FACE);let de=F.side===un;Re&&(de=!de),V(de),F.blending===Qs&&F.transparent===!1?_(ji):_(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Oe=F.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function te(F){F!==WM?(B(n.CULL_FACE),F!==U&&(F===hf?n.cullFace(n.BACK):F===XM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),U=F}function re(F){F!==ne&&(Q&&n.lineWidth(F),ne=F)}function ue(F,Re,de){F?(B(n.POLYGON_OFFSET_FILL),(q!==Re||le!==de)&&(n.polygonOffset(Re,de),q=Re,le=de)):W(n.POLYGON_OFFSET_FILL)}function se(F){F?B(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function ie(F){F===void 0&&(F=n.TEXTURE0+ce-1),_e!==F&&(n.activeTexture(F),_e=F)}function Ae(F,Re,de){de===void 0&&(_e===null?de=n.TEXTURE0+ce-1:de=_e);let Oe=Se[de];Oe===void 0&&(Oe={type:void 0,texture:void 0},Se[de]=Oe),(Oe.type!==F||Oe.texture!==Re)&&(_e!==de&&(n.activeTexture(de),_e=de),n.bindTexture(F,Re||Ee[F]),Oe.type=F,Oe.texture=Re)}function R(){const F=Se[_e];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(F){Ke.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function Fe(F){ae.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ae.copy(F))}function ke(F,Re){let de=c.get(Re);de===void 0&&(de=new WeakMap,c.set(Re,de));let Oe=de.get(F);Oe===void 0&&(Oe=n.getUniformBlockIndex(Re,F.name),de.set(F,Oe))}function be(F,Re){const Oe=c.get(Re).get(F);l.get(Re)!==Oe&&(n.uniformBlockBinding(Re,Oe,F.__bindingPointIndex),l.set(Re,Oe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_e=null,Se={},h={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,T=null,b=null,x=null,I=null,P=null,L=new Qe(0,0,0),D=0,C=!1,E=null,U=null,ne=null,q=null,le=null,Ke.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:W,bindFramebuffer:Z,drawBuffers:X,useProgram:$,setBlending:_,setMaterial:k,setFlipSided:V,setCullFace:te,setLineWidth:re,setPolygonOffset:ue,setScissorTest:se,activeTexture:ie,bindTexture:Ae,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Ie,texImage3D:fe,updateUBOMapping:ke,uniformBlockBinding:be,texStorage2D:ye,texStorage3D:Le,texSubImage2D:Y,texSubImage3D:oe,compressedTexSubImage2D:j,compressedTexSubImage3D:Pe,scissor:De,viewport:Fe,reset:Ye}}function FR(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return d?new OffscreenCanvas(R,y):mo("canvas")}function v(R,y,O){let Y=1;const oe=Ae(R);if((oe.width>O||oe.height>O)&&(Y=O/Math.max(oe.width,oe.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*oe.width),Pe=Math.floor(Y*oe.height);h===void 0&&(h=g(j,Pe));const ye=y?g(j,Pe):h;return ye.width=j,ye.height=Pe,ye.getContext("2d").drawImage(R,0,0,j,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+j+"x"+Pe+")."),ye}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,y,O,Y,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=y;if(y===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),y===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const Pe=oe?Aa:at.getTransfer(Y);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=Pe===yt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,y){let O;return R?y===null||y===xs||y===co?O=n.DEPTH24_STENCIL8:y===Fn?O=n.DEPTH32F_STENCIL8:y===lo&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xs||y===co?O=n.DEPTH_COMPONENT24:y===Fn?O=n.DEPTH_COMPONENT32F:y===lo&&(O=n.DEPTH_COMPONENT16),O}function I(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==gn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function P(R){const y=R.target;y.removeEventListener("dispose",P),D(y),y.isVideoTexture&&u.delete(y)}function L(R){const y=R.target;y.removeEventListener("dispose",L),E(y)}function D(R){const y=i.get(R);if(y.__webglInit===void 0)return;const O=R.source,Y=f.get(O);if(Y){const oe=Y[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(R),Object.keys(Y).length===0&&f.delete(O)}i.remove(R)}function C(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const O=R.source,Y=f.get(O);delete Y[y.__cacheKey],o.memory.textures--}function E(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let oe=0;oe<y.__webglFramebuffer[Y].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[Y][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=R.textures;for(let Y=0,oe=O.length;Y<oe;Y++){const j=i.get(O[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(R)}let U=0;function ne(){U=0}function q(){const R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function le(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function ce(R,y){const O=i.get(R);if(R.isVideoTexture&&se(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(O,R,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function Q(R,y){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Ee(O,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function K(R,y){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Ee(O,R,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function G(R,y){const O=i.get(R);if(R.version>0&&O.__version!==R.version){B(O,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const _e={[ur]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},Se={[sn]:n.NEAREST,[mm]:n.NEAREST_MIPMAP_NEAREST,[kr]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},we={[Eb]:n.NEVER,[Pb]:n.ALWAYS,[Tb]:n.LESS,[Tm]:n.LEQUAL,[wb]:n.EQUAL,[Cb]:n.GEQUAL,[Ab]:n.GREATER,[Rb]:n.NOTEQUAL};function Be(R,y){if(y.type===Fn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===gn||y.magFilter===la||y.magFilter===kr||y.magFilter===_i||y.minFilter===gn||y.minFilter===la||y.minFilter===kr||y.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,_e[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,_e[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,_e[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Se[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Se[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==kr&&y.minFilter!==_i||y.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ke(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P));const Y=y.source;let oe=f.get(Y);oe===void 0&&(oe={},f.set(Y,oe));const j=le(y);if(j!==R.__cacheKey){oe[j]===void 0&&(oe[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),oe[j].usedTimes++;const Pe=oe[R.__cacheKey];Pe!==void 0&&(oe[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(y)),R.__cacheKey=j,R.__webglTexture=oe[j].texture}return O}function ae(R,y,O){return Math.floor(Math.floor(R/O)/y)}function me(R,y,O,Y){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,Y,y.data);else{j.sort((fe,De)=>fe.start-De.start);let Pe=0;for(let fe=1;fe<j.length;fe++){const De=j[Pe],Fe=j[fe],ke=De.start+De.count,be=ae(Fe.start,y.width,4),Ye=ae(De.start,y.width,4);Fe.start<=ke+1&&be===Ye&&ae(Fe.start+Fe.count-1,y.width,4)===be?De.count=Math.max(De.count,Fe.start+Fe.count-De.start):(++Pe,j[Pe]=Fe)}j.length=Pe+1;const ye=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let fe=0,De=j.length;fe<De;fe++){const Fe=j[fe],ke=Math.floor(Fe.start/4),be=Math.ceil(Fe.count/4),Ye=ke%y.width,F=Math.floor(ke/y.width),Re=be,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ye,F,Re,de,O,Y,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ye),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function Ee(R,y,O){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const oe=Ke(R,y),j=y.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+O);const Pe=i.get(j);if(j.version!==Pe.__version||oe===!0){t.activeTexture(n.TEXTURE0+O);const ye=at.getPrimaries(at.workingColorSpace),Le=y.colorSpace===Vi?null:at.getPrimaries(y.colorSpace),Ie=y.colorSpace===Vi||ye===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let fe=v(y.image,!1,s.maxTextureSize);fe=ie(y,fe);const De=r.convert(y.format,y.colorSpace),Fe=r.convert(y.type);let ke=b(y.internalFormat,De,Fe,y.colorSpace,y.isVideoTexture);Be(Y,y);let be;const Ye=y.mipmaps,F=y.isVideoTexture!==!0,Re=Pe.__version===void 0||oe===!0,de=j.dataReady,Oe=I(y,fe);if(y.isDepthTexture)ke=x(y.format===ho,y.type),Re&&(F?t.texStorage2D(n.TEXTURE_2D,1,ke,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,De,Fe,null));else if(y.isDataTexture)if(Ye.length>0){F&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,ke,Ye[0].width,Ye[0].height);for(let ge=0,he=Ye.length;ge<he;ge++)be=Ye[ge],F?de&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,be.width,be.height,De,Fe,be.data):t.texImage2D(n.TEXTURE_2D,ge,ke,be.width,be.height,0,De,Fe,be.data);y.generateMipmaps=!1}else F?(Re&&t.texStorage2D(n.TEXTURE_2D,Oe,ke,fe.width,fe.height),de&&me(y,fe,De,Fe)):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,De,Fe,fe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,ke,Ye[0].width,Ye[0].height,fe.depth);for(let ge=0,he=Ye.length;ge<he;ge++)if(be=Ye[ge],y.format!==bn)if(De!==null)if(F){if(de)if(y.layerUpdates.size>0){const He=od(be.width,be.height,y.format,y.type);for(const Ze of y.layerUpdates){const Tt=be.data.subarray(Ze*He/be.data.BYTES_PER_ELEMENT,(Ze+1)*He/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Ze,be.width,be.height,1,De,Tt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,fe.depth,De,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,ke,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,be.width,be.height,fe.depth,De,Fe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,ke,be.width,be.height,fe.depth,0,De,Fe,be.data)}else{F&&Re&&t.texStorage2D(n.TEXTURE_2D,Oe,ke,Ye[0].width,Ye[0].height);for(let ge=0,he=Ye.length;ge<he;ge++)be=Ye[ge],y.format!==bn?De!==null?F?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?de&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,be.width,be.height,De,Fe,be.data):t.texImage2D(n.TEXTURE_2D,ge,ke,be.width,be.height,0,De,Fe,be.data)}else if(y.isDataArrayTexture)if(F){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,ke,fe.width,fe.height,fe.depth),de)if(y.layerUpdates.size>0){const ge=od(fe.width,fe.height,y.format,y.type);for(const he of y.layerUpdates){const He=fe.data.subarray(he*ge/fe.data.BYTES_PER_ELEMENT,(he+1)*ge/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,fe.width,fe.height,1,De,Fe,He)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,De,Fe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,De,Fe,fe.data);else if(y.isData3DTexture)F?(Re&&t.texStorage3D(n.TEXTURE_3D,Oe,ke,fe.width,fe.height,fe.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,De,Fe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,De,Fe,fe.data);else if(y.isFramebufferTexture){if(Re)if(F)t.texStorage2D(n.TEXTURE_2D,Oe,ke,fe.width,fe.height);else{let ge=fe.width,he=fe.height;for(let He=0;He<Oe;He++)t.texImage2D(n.TEXTURE_2D,He,ke,ge,he,0,De,Fe,null),ge>>=1,he>>=1}}else if(Ye.length>0){if(F&&Re){const ge=Ae(Ye[0]);t.texStorage2D(n.TEXTURE_2D,Oe,ke,ge.width,ge.height)}for(let ge=0,he=Ye.length;ge<he;ge++)be=Ye[ge],F?de&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,De,Fe,be):t.texImage2D(n.TEXTURE_2D,ge,ke,De,Fe,be);y.generateMipmaps=!1}else if(F){if(Re){const ge=Ae(fe);t.texStorage2D(n.TEXTURE_2D,Oe,ke,ge.width,ge.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Fe,fe)}else t.texImage2D(n.TEXTURE_2D,0,ke,De,Fe,fe);m(y)&&p(Y),Pe.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function B(R,y,O){if(y.image.length!==6)return;const Y=Ke(R,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const j=i.get(oe);if(oe.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+O);const Pe=at.getPrimaries(at.workingColorSpace),ye=y.colorSpace===Vi?null:at.getPrimaries(y.colorSpace),Le=y.colorSpace===Vi||Pe===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ie=y.isCompressedTexture||y.image[0].isCompressedTexture,fe=y.image[0]&&y.image[0].isDataTexture,De=[];for(let he=0;he<6;he++)!Ie&&!fe?De[he]=v(y.image[he],!0,s.maxCubemapSize):De[he]=fe?y.image[he].image:y.image[he],De[he]=ie(y,De[he]);const Fe=De[0],ke=r.convert(y.format,y.colorSpace),be=r.convert(y.type),Ye=b(y.internalFormat,ke,be,y.colorSpace),F=y.isVideoTexture!==!0,Re=j.__version===void 0||Y===!0,de=oe.dataReady;let Oe=I(y,Fe);Be(n.TEXTURE_CUBE_MAP,y);let ge;if(Ie){F&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,Ye,Fe.width,Fe.height);for(let he=0;he<6;he++){ge=De[he].mipmaps;for(let He=0;He<ge.length;He++){const Ze=ge[He];y.format!==bn?ke!==null?F?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Ze.width,Ze.height,ke,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,Ye,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Ze.width,Ze.height,ke,be,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,Ye,Ze.width,Ze.height,0,ke,be,Ze.data)}}}else{if(ge=y.mipmaps,F&&Re){ge.length>0&&Oe++;const he=Ae(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,Ye,he.width,he.height)}for(let he=0;he<6;he++)if(fe){F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,De[he].width,De[he].height,ke,be,De[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,De[he].width,De[he].height,0,ke,be,De[he].data);for(let He=0;He<ge.length;He++){const Tt=ge[He].image[he].image;F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Tt.width,Tt.height,ke,be,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,Ye,Tt.width,Tt.height,0,ke,be,Tt.data)}}else{F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke,be,De[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,ke,be,De[he]);for(let He=0;He<ge.length;He++){const Ze=ge[He];F?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,ke,be,Ze.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,Ye,ke,be,Ze.image[he])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function W(R,y,O,Y,oe,j){const Pe=r.convert(O.format,O.colorSpace),ye=r.convert(O.type),Le=b(O.internalFormat,Pe,ye,O.colorSpace),Ie=i.get(y),fe=i.get(O);if(fe.__renderTarget=y,!Ie.__hasExternalTextures){const De=Math.max(1,y.width>>j),Fe=Math.max(1,y.height>>j);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,j,Le,De,Fe,y.depth,0,Pe,ye,null):t.texImage2D(oe,j,Le,De,Fe,0,Pe,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ue(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,oe,fe.__webglTexture,0,re(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,oe,fe.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(R,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const Y=y.depthTexture,oe=Y&&Y.isDepthTexture?Y.type:null,j=x(y.stencilBuffer,oe),Pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=re(y);ue(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,j,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,R)}else{const Y=y.textures;for(let oe=0;oe<Y.length;oe++){const j=Y[oe],Pe=r.convert(j.format,j.colorSpace),ye=r.convert(j.type),Le=b(j.internalFormat,Pe,ye,j.colorSpace),Ie=re(y);O&&ue(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Le,y.width,y.height):ue(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ce(y.depthTexture,0);const oe=Y.__webglTexture,j=re(y);if(y.depthTexture.format===uo)ue(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(y.depthTexture.format===ho)ue(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function $(R){const y=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",oe)};Y.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=Y}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?X(y.__webglFramebuffer[0],R):X(y.__webglFramebuffer,R)}else if(O){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),Z(y.__webglDepthbuffer[Y],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,j)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Z(y.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(R,y,O){const Y=i.get(R);y!==void 0&&W(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&$(R)}function w(R){const y=R.texture,O=i.get(R),Y=i.get(y);R.addEventListener("dispose",L);const oe=R.textures,j=R.isWebGLCubeRenderTarget===!0,Pe=oe.length>1;if(Pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ye]=[];for(let Le=0;Le<y.mipmaps.length;Le++)O.__webglFramebuffer[ye][Le]=n.createFramebuffer()}else O.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ye=0;ye<y.mipmaps.length;ye++)O.__webglFramebuffer[ye]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ye=0,Le=oe.length;ye<Le;ye++){const Ie=i.get(oe[ye]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ue(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ye=0;ye<oe.length;ye++){const Le=oe[ye];O.__webglColorRenderbuffer[ye]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ye]);const Ie=r.convert(Le.format,Le.colorSpace),fe=r.convert(Le.type),De=b(Le.internalFormat,Ie,fe,Le.colorSpace,R.isXRRenderTarget===!0),Fe=re(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,De,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,O.__webglColorRenderbuffer[ye])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Be(n.TEXTURE_CUBE_MAP,y);for(let ye=0;ye<6;ye++)if(y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)W(O.__webglFramebuffer[ye][Le],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Le);else W(O.__webglFramebuffer[ye],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ye=0,Le=oe.length;ye<Le;ye++){const Ie=oe[ye],fe=i.get(Ie);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Be(n.TEXTURE_2D,Ie),W(O.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,0),m(Ie)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ye,Y.__webglTexture),Be(ye,y),y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)W(O.__webglFramebuffer[Le],R,y,n.COLOR_ATTACHMENT0,ye,Le);else W(O.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,ye,0);m(y)&&p(ye),t.unbindTexture()}R.depthBuffer&&$(R)}function _(R){const y=R.textures;for(let O=0,Y=y.length;O<Y;O++){const oe=y[O];if(m(oe)){const j=T(R),Pe=i.get(oe).__webglTexture;t.bindTexture(j,Pe),p(j),t.unbindTexture()}}}const k=[],V=[];function te(R){if(R.samples>0){if(ue(R)===!1){const y=R.textures,O=R.width,Y=R.height;let oe=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(R),ye=y.length>1;if(ye)for(let Ie=0;Ie<y.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<y.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ye){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const fe=i.get(y[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,oe,n.NEAREST),l===!0&&(k.length=0,V.length=0,k.push(n.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(k.push(j),V.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<y.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const fe=i.get(y[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function re(R){return Math.min(s.maxSamples,R.samples)}function ue(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function ie(R,y){const O=R.colorSpace,Y=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==on&&O!==Vi&&(at.getTransfer(O)===yt?(Y!==bn||oe!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=M,this.setupRenderTarget=w,this.updateRenderTargetMipmap=_,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ue}function BR(n,e){function t(i,s=Vi){let r;const o=at.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gm)return n.BYTE;if(i===_m)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===xo)return n.HALF_FLOAT;if(i===xm)return n.ALPHA;if(i===ym)return n.RGB;if(i===bn)return n.RGBA;if(i===uo)return n.DEPTH_COMPONENT;if(i===ho)return n.DEPTH_STENCIL;if(i===Nu)return n.RED;if(i===Uu)return n.RED_INTEGER;if(i===Sm)return n.RG;if(i===Ou)return n.RG_INTEGER;if(i===Fu)return n.RGBA_INTEGER;if(i===ca||i===ua||i===ha||i===fa)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Pc||i===Lc||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Nc||i===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ic||i===Nc)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oc||i===Fc||i===Bc||i===kc||i===Hc||i===zc||i===Vc||i===Gc||i===Wc||i===Xc||i===$c||i===jc||i===qc||i===Yc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===da||i===Kc||i===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===da)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mm||i===Jc||i===Qc||i===eu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zi({vertexShader:kR,fragmentShader:HR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends Ts{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const v=new zR,m=t.getContextAttributes();let p=null,T=null;const b=[],x=[],I=new Xe;let P=null;const L=new Xt;L.viewport=new ft;const D=new Xt;D.viewport=new ft;const C=[L,D],E=new QE;let U=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let me=b[ae];return me===void 0&&(me=new Bl,b[ae]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ae){let me=b[ae];return me===void 0&&(me=new Bl,b[ae]=me),me.getGripSpace()},this.getHand=function(ae){let me=b[ae];return me===void 0&&(me=new Bl,b[ae]=me),me.getHandSpace()};function q(ae){const me=x.indexOf(ae.inputSource);if(me===-1)return;const Ee=b[me];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,c||o),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function le(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",ce);for(let ae=0;ae<b.length;ae++){const me=x[ae];me!==null&&(x[ae]=null,b[ae].disconnect(me))}U=null,ne=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,T=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",le),s.addEventListener("inputsourceschange",ce),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,B=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=m.stencil?ho:uo,B=m.stencil?co:xs);const Z={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ys(f.textureWidth,f.textureHeight,{format:bn,type:Zn,depthTexture:new km(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ys(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ce(ae){for(let me=0;me<ae.removed.length;me++){const Ee=ae.removed[me],B=x.indexOf(Ee);B>=0&&(x[B]=null,b[B].disconnect(Ee))}for(let me=0;me<ae.added.length;me++){const Ee=ae.added[me];let B=x.indexOf(Ee);if(B===-1){for(let Z=0;Z<b.length;Z++)if(Z>=x.length){x.push(Ee),B=Z;break}else if(x[Z]===null){x[Z]=Ee,B=Z;break}if(B===-1)break}const W=b[B];W&&W.connect(Ee)}}const Q=new N,K=new N;function G(ae,me,Ee){Q.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const B=Q.distanceTo(K),W=me.projectionMatrix.elements,Z=Ee.projectionMatrix.elements,X=W[14]/(W[10]-1),$=W[14]/(W[10]+1),M=(W[9]+1)/W[5],w=(W[9]-1)/W[5],_=(W[8]-1)/W[0],k=(Z[8]+1)/Z[0],V=X*_,te=X*k,re=B/(-_+k),ue=re*-_;if(me.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ue),ae.translateZ(re),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),W[10]===-1)ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const se=X+re,ie=$+re,Ae=V-ue,R=te+(B-ue),y=M*$/ie*se,O=w*$/ie*se;ae.projectionMatrix.makePerspective(Ae,R,y,O,se,ie),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function _e(ae,me){me===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(me.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let me=ae.near,Ee=ae.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),E.near=D.near=L.near=me,E.far=D.far=L.far=Ee,(U!==E.near||ne!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,ne=E.far),L.layers.mask=ae.layers.mask|2,D.layers.mask=ae.layers.mask|4,E.layers.mask=L.layers.mask|D.layers.mask;const B=ae.parent,W=E.cameras;_e(E,B);for(let Z=0;Z<W.length;Z++)_e(W[Z],B);W.length===2?G(E,L,D):E.projectionMatrix.copy(L.projectionMatrix),Se(ae,E,B)};function Se(ae,me,Ee){Ee===null?ae.matrix.copy(me.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(me.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(me.projectionMatrix),ae.projectionMatrixInverse.copy(me.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=hr*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ae){l=ae,f!==null&&(f.fixedFoveation=ae),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let we=null;function Be(ae,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let B=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,B=!0);for(let X=0;X<Ee.length;X++){const $=Ee[X];let M=null;if(d!==null)M=d.getViewport($);else{const _=h.getViewSubImage(f,$);M=_.viewport,X===0&&(e.setRenderTargetTextures(T,_.colorTexture,_.depthStencilTexture),e.setRenderTarget(T))}let w=C[X];w===void 0&&(w=new Xt,w.layers.enable(X),w.viewport=new ft,C[X]=w),w.matrix.fromArray($.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray($.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(M.x,M.y,M.width,M.height),X===0&&(E.matrix.copy(w.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),B===!0&&E.cameras.push(w)}const W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const X=h.getDepthInformation(Ee[0]);X&&X.isValid&&X.texture&&v.init(e,X,s.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const B=x[Ee],W=b[Ee];B!==null&&W!==void 0&&W.update(B,me,c||o)}we&&we(ae,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const Ke=new Gm;Ke.setAnimationLoop(Be),this.setAnimationLoop=function(ae){we=ae},this.dispose=function(){}}}const ls=new Jn,GR=new et;function WR(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),b=T.envMap,x=T.envMapRotation;b&&(m.envMap.value=b,ls.copy(x),ls.x*=-1,ls.y*=-1,ls.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(ls)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function XR(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const x=b.program;i.uniformBlockBinding(T,x)}function c(T,b){let x=s[T.id];x===void 0&&(g(T),x=u(T),s[T.id]=x,T.addEventListener("dispose",m));const I=b.program;i.updateUBOMapping(T,I);const P=e.render.frame;r[T.id]!==P&&(f(T),r[T.id]=P)}function u(T){const b=h();T.__bindingPointIndex=b;const x=n.createBuffer(),I=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=s[T.id],x=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,L=x.length;P<L;P++){const D=Array.isArray(x[P])?x[P]:[x[P]];for(let C=0,E=D.length;C<E;C++){const U=D[C];if(d(U,P,C,I)===!0){const ne=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let le=0;for(let ce=0;ce<q.length;ce++){const Q=q[ce],K=v(Q);typeof Q=="number"||typeof Q=="boolean"?(U.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,ne+le,U.__data)):Q.isMatrix3?(U.__data[0]=Q.elements[0],U.__data[1]=Q.elements[1],U.__data[2]=Q.elements[2],U.__data[3]=0,U.__data[4]=Q.elements[3],U.__data[5]=Q.elements[4],U.__data[6]=Q.elements[5],U.__data[7]=0,U.__data[8]=Q.elements[6],U.__data[9]=Q.elements[7],U.__data[10]=Q.elements[8],U.__data[11]=0):(Q.toArray(U.__data,le),le+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ne,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,b,x,I){const P=T.value,L=b+"_"+x;if(I[L]===void 0)return typeof P=="number"||typeof P=="boolean"?I[L]=P:I[L]=P.clone(),!0;{const D=I[L];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return I[L]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(T){const b=T.uniforms;let x=0;const I=16;for(let L=0,D=b.length;L<D;L++){const C=Array.isArray(b[L])?b[L]:[b[L]];for(let E=0,U=C.length;E<U;E++){const ne=C[E],q=Array.isArray(ne.value)?ne.value:[ne.value];for(let le=0,ce=q.length;le<ce;le++){const Q=q[le],K=v(Q),G=x%I,_e=G%K.boundary,Se=G+_e;x+=_e,Se!==0&&I-Se<K.storage&&(x+=I-Se),ne.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=x,x+=K.storage}}}const P=x%I;return P>0&&(x+=I-P),T.__size=x,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class eh{constructor(e={}){const{canvas:t=jb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=Ht;let P=0,L=0,D=null,C=-1,E=null;const U=new ft,ne=new ft;let q=null;const le=new Qe(0);let ce=0,Q=t.width,K=t.height,G=1,_e=null,Se=null;const we=new ft(0,0,Q,K),Be=new ft(0,0,Q,K);let Ke=!1;const ae=new Wu;let me=!1,Ee=!1;const B=new et,W=new et,Z=new N,X=new ft,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let M=!1;function w(){return D===null?G:1}let _=i;function k(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pu}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",he,!1),_===null){const H="webgl2";if(_=k(H,A),_===null)throw k(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let V,te,re,ue,se,ie,Ae,R,y,O,Y,oe,j,Pe,ye,Le,Ie,fe,De,Fe,ke,be,Ye,F;function Re(){V=new n1(_),V.init(),be=new BR(_,V),te=new YA(_,V,e,be),re=new OR(_,V),te.reverseDepthBuffer&&f&&re.buffers.depth.setReversed(!0),ue=new r1(_),se=new bR,ie=new FR(_,V,re,se,te,be,ue),Ae=new ZA(x),R=new t1(x),y=new hT(_),Ye=new jA(_,y),O=new i1(_,y,ue,Ye),Y=new a1(_,O,y,ue),De=new o1(_,te,ie),Le=new KA(se),oe=new MR(x,Ae,R,V,te,Ye,Le),j=new WR(x,se),Pe=new TR,ye=new LR(V),fe=new $A(x,Ae,R,re,Y,d,l),Ie=new NR(x,Y,te),F=new XR(_,ue,te,re),Fe=new qA(_,V,ue),ke=new s1(_,V,ue),ue.programs=oe.programs,x.capabilities=te,x.extensions=V,x.properties=se,x.renderLists=Pe,x.shadowMap=Ie,x.state=re,x.info=ue}Re();const de=new VR(x,_);this.xr=de,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=V.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=V.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(Q,K,!1))},this.getSize=function(A){return A.set(Q,K)},this.setSize=function(A,H,J=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,K=H,t.width=Math.floor(A*G),t.height=Math.floor(H*G),J===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(Q*G,K*G).floor()},this.setDrawingBufferSize=function(A,H,J){Q=A,K=H,G=J,t.width=Math.floor(A*J),t.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,H,J,ee){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,H,J,ee),re.viewport(U.copy(we).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,H,J,ee){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,H,J,ee),re.scissor(ne.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){re.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,J=!0){let ee=0;if(A){let z=!1;if(D!==null){const ve=D.texture.format;z=ve===Fu||ve===Ou||ve===Uu}if(z){const ve=D.texture.type,Ce=ve===Zn||ve===xs||ve===lo||ve===co||ve===Du||ve===Iu,ze=fe.getClearColor(),Ne=fe.getClearAlpha(),je=ze.r,qe=ze.g,Ve=ze.b;Ce?(g[0]=je,g[1]=qe,g[2]=Ve,g[3]=Ne,_.clearBufferuiv(_.COLOR,0,g)):(v[0]=je,v[1]=qe,v[2]=Ve,v[3]=Ne,_.clearBufferiv(_.COLOR,0,v))}else ee|=_.COLOR_BUFFER_BIT}H&&(ee|=_.DEPTH_BUFFER_BIT),J&&(ee|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",he,!1),fe.dispose(),Pe.dispose(),ye.dispose(),se.dispose(),Ae.dispose(),R.dispose(),Y.dispose(),Ye.dispose(),F.dispose(),oe.dispose(),de.dispose(),de.removeEventListener("sessionstart",oh),de.removeEventListener("sessionend",ah),Qi.stop()};function Oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=ue.autoReset,H=Ie.enabled,J=Ie.autoUpdate,ee=Ie.needsUpdate,z=Ie.type;Re(),ue.autoReset=A,Ie.enabled=H,Ie.autoUpdate=J,Ie.needsUpdate=ee,Ie.type=z}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const H=A.target;H.removeEventListener("dispose",He),Ze(H)}function Ze(A){Tt(A),se.remove(A)}function Tt(A){const H=se.get(A).programs;H!==void 0&&(H.forEach(function(J){oe.releaseProgram(J)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,ee,z,ve){H===null&&(H=$);const Ce=z.isMesh&&z.matrixWorld.determinant()<0,ze=Zm(A,H,J,ee,z);re.setMaterial(ee,Ce);let Ne=J.index,je=1;if(ee.wireframe===!0){if(Ne=O.getWireframeAttribute(J),Ne===void 0)return;je=2}const qe=J.drawRange,Ve=J.attributes.position;let ot=qe.start*je,_t=(qe.start+qe.count)*je;ve!==null&&(ot=Math.max(ot,ve.start*je),_t=Math.min(_t,(ve.start+ve.count)*je)),Ne!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Ne.count)):Ve!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,Ve.count));const At=_t-ot;if(At<0||At===1/0)return;Ye.setup(z,ee,ze,J,Ne);let Pt,lt=Fe;if(Ne!==null&&(Pt=y.get(Ne),lt=ke,lt.setIndex(Pt)),z.isMesh)ee.wireframe===!0?(re.setLineWidth(ee.wireframeLinewidth*w()),lt.setMode(_.LINES)):lt.setMode(_.TRIANGLES);else if(z.isLine){let Ge=ee.linewidth;Ge===void 0&&(Ge=1),re.setLineWidth(Ge*w()),z.isLineSegments?lt.setMode(_.LINES):z.isLineLoop?lt.setMode(_.LINE_LOOP):lt.setMode(_.LINE_STRIP)}else z.isPoints?lt.setMode(_.POINTS):z.isSprite&&lt.setMode(_.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ge=z._multiDrawStarts,Gt=z._multiDrawCounts,dt=z._multiDrawCount,Pn=Ne?y.get(Ne).bytesPerElement:1,ws=se.get(ee).currentProgram.getUniforms();for(let hn=0;hn<dt;hn++)ws.setValue(_,"_gl_DrawID",hn),lt.render(Ge[hn]/Pn,Gt[hn])}else if(z.isInstancedMesh)lt.renderInstances(ot,At,z.count);else if(J.isInstancedBufferGeometry){const Ge=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Gt=Math.min(J.instanceCount,Ge);lt.renderInstances(ot,At,Gt)}else lt.render(ot,At)};function gt(A,H,J){A.transparent===!0&&A.side===$n&&A.forceSinglePass===!1?(A.side=un,A.needsUpdate=!0,bo(A,H,J),A.side=bi,A.needsUpdate=!0,bo(A,H,J),A.side=$n):bo(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),p=ye.get(J),p.init(H),b.push(p),J.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==J&&A.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const ee=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){const ze=ve[Ce];gt(ze,J,z),ee.add(ze)}else gt(ve,J,z),ee.add(ve)}),p=b.pop(),ee},this.compileAsync=function(A,H,J=null){const ee=this.compile(A,H,J);return new Promise(z=>{function ve(){if(ee.forEach(function(Ce){se.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){z(A);return}setTimeout(ve,10)}V.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Cn=null;function ii(A){Cn&&Cn(A)}function oh(){Qi.stop()}function ah(){Qi.start()}const Qi=new Gm;Qi.setAnimationLoop(ii),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){Cn=A,de.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},de.addEventListener("sessionstart",oh),de.addEventListener("sessionend",ah),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,H,D),p=ye.get(A,b.length),p.init(H),b.push(p),W.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ae.setFromProjectionMatrix(W),Ee=this.localClippingEnabled,me=Le.init(this.clippingPlanes,Ee),m=Pe.get(A,T.length),m.init(),T.push(m),de.enabled===!0&&de.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&nl(ve,H,-1/0,x.sortObjects)}nl(A,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(_e,Se),M=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,M&&fe.addToRenderList(m,A),this.info.render.frame++,me===!0&&Le.beginShadows();const J=p.state.shadowsArray;Ie.render(J,A,H),me===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,z=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ve=H.cameras;if(z.length>0)for(let Ce=0,ze=ve.length;Ce<ze;Ce++){const Ne=ve[Ce];ch(ee,z,A,Ne)}M&&fe.render(A);for(let Ce=0,ze=ve.length;Ce<ze;Ce++){const Ne=ve[Ce];lh(m,A,Ne,Ne.viewport)}}else z.length>0&&ch(ee,z,A,H),M&&fe.render(A),lh(m,A,H);D!==null&&L===0&&(ie.updateMultisampleRenderTarget(D),ie.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(x,A,H),Ye.resetDefaultState(),C=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],me===!0&&Le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function nl(A,H,J,ee){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ae.intersectsSprite(A)){ee&&X.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const Ce=Y.update(A),ze=A.material;ze.visible&&m.push(A,Ce,ze,J,X.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ae.intersectsObject(A))){const Ce=Y.update(A),ze=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),X.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),X.copy(Ce.boundingSphere.center)),X.applyMatrix4(A.matrixWorld).applyMatrix4(W)),Array.isArray(ze)){const Ne=Ce.groups;for(let je=0,qe=Ne.length;je<qe;je++){const Ve=Ne[je],ot=ze[Ve.materialIndex];ot&&ot.visible&&m.push(A,Ce,ot,J,X.z,Ve)}}else ze.visible&&m.push(A,Ce,ze,J,X.z,null)}}const ve=A.children;for(let Ce=0,ze=ve.length;Ce<ze;Ce++)nl(ve[Ce],H,J,ee)}function lh(A,H,J,ee){const z=A.opaque,ve=A.transmissive,Ce=A.transparent;p.setupLightsView(J),me===!0&&Le.setGlobalState(x.clippingPlanes,J),ee&&re.viewport(U.copy(ee)),z.length>0&&Mo(z,H,J),ve.length>0&&Mo(ve,H,J),Ce.length>0&&Mo(Ce,H,J),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function ch(A,H,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new ys(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?xo:Zn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ve=p.state.transmissionRenderTarget[ee.id],Ce=ee.viewport||U;ve.setSize(Ce.z*x.transmissionResolutionScale,Ce.w*x.transmissionResolutionScale);const ze=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(le),ce=x.getClearAlpha(),ce<1&&x.setClearColor(16777215,.5),x.clear(),M&&fe.render(J);const Ne=x.toneMapping;x.toneMapping=qi;const je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),me===!0&&Le.setGlobalState(x.clippingPlanes,ee),Mo(A,J,ee),ie.updateMultisampleRenderTarget(ve),ie.updateRenderTargetMipmap(ve),V.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ve=0,ot=H.length;Ve<ot;Ve++){const _t=H[Ve],At=_t.object,Pt=_t.geometry,lt=_t.material,Ge=_t.group;if(lt.side===$n&&At.layers.test(ee.layers)){const Gt=lt.side;lt.side=un,lt.needsUpdate=!0,uh(At,J,ee,Pt,lt,Ge),lt.side=Gt,lt.needsUpdate=!0,qe=!0}}qe===!0&&(ie.updateMultisampleRenderTarget(ve),ie.updateRenderTargetMipmap(ve))}x.setRenderTarget(ze),x.setClearColor(le,ce),je!==void 0&&(ee.viewport=je),x.toneMapping=Ne}function Mo(A,H,J){const ee=H.isScene===!0?H.overrideMaterial:null;for(let z=0,ve=A.length;z<ve;z++){const Ce=A[z],ze=Ce.object,Ne=Ce.geometry,je=Ce.group;let qe=Ce.material;qe.allowOverride===!0&&ee!==null&&(qe=ee),ze.layers.test(J.layers)&&uh(ze,H,J,Ne,qe,je)}}function uh(A,H,J,ee,z,ve){A.onBeforeRender(x,H,J,ee,z,ve),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,H,J,ee,A,ve),z.transparent===!0&&z.side===$n&&z.forceSinglePass===!1?(z.side=un,z.needsUpdate=!0,x.renderBufferDirect(J,H,ee,z,A,ve),z.side=bi,z.needsUpdate=!0,x.renderBufferDirect(J,H,ee,z,A,ve),z.side=$n):x.renderBufferDirect(J,H,ee,z,A,ve),A.onAfterRender(x,H,J,ee,z,ve)}function bo(A,H,J){H.isScene!==!0&&(H=$);const ee=se.get(A),z=p.state.lights,ve=p.state.shadowsArray,Ce=z.state.version,ze=oe.getParameters(A,z.state,ve,H,J),Ne=oe.getProgramCacheKey(ze);let je=ee.programs;ee.environment=A.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(A.isMeshStandardMaterial?R:Ae).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",He),je=new Map,ee.programs=je);let qe=je.get(Ne);if(qe!==void 0){if(ee.currentProgram===qe&&ee.lightsStateVersion===Ce)return fh(A,ze),qe}else ze.uniforms=oe.getUniforms(A),A.onBeforeCompile(ze,x),qe=oe.acquireProgram(ze,Ne),je.set(Ne,qe),ee.uniforms=ze.uniforms;const Ve=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Le.uniform),fh(A,ze),ee.needsLights=Qm(A),ee.lightsStateVersion=Ce,ee.needsLights&&(Ve.ambientLightColor.value=z.state.ambient,Ve.lightProbe.value=z.state.probe,Ve.directionalLights.value=z.state.directional,Ve.directionalLightShadows.value=z.state.directionalShadow,Ve.spotLights.value=z.state.spot,Ve.spotLightShadows.value=z.state.spotShadow,Ve.rectAreaLights.value=z.state.rectArea,Ve.ltc_1.value=z.state.rectAreaLTC1,Ve.ltc_2.value=z.state.rectAreaLTC2,Ve.pointLights.value=z.state.point,Ve.pointLightShadows.value=z.state.pointShadow,Ve.hemisphereLights.value=z.state.hemi,Ve.directionalShadowMap.value=z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ve.spotShadowMap.value=z.state.spotShadowMap,Ve.spotLightMatrix.value=z.state.spotLightMatrix,Ve.spotLightMap.value=z.state.spotLightMap,Ve.pointShadowMap.value=z.state.pointShadowMap,Ve.pointShadowMatrix.value=z.state.pointShadowMatrix),ee.currentProgram=qe,ee.uniformsList=null,qe}function hh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=pa.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function fh(A,H){const J=se.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Zm(A,H,J,ee,z){H.isScene!==!0&&(H=$),ie.resetTextureUnits();const ve=H.fog,Ce=ee.isMeshStandardMaterial?H.environment:null,ze=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:on,Ne=(ee.isMeshStandardMaterial?R:Ae).get(ee.envMap||Ce),je=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qe=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,_t=!!J.morphAttributes.color;let At=qi;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=x.toneMapping);const Pt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=Pt!==void 0?Pt.length:0,Ge=se.get(ee),Gt=p.state.lights;if(me===!0&&(Ee===!0||A!==E)){const Jt=A===E&&ee.id===C;Le.setState(ee,A,Jt)}let dt=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Gt.state.version||Ge.outputColorSpace!==ze||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isBatchedMesh&&Ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ge.instancingMorph===!1&&z.morphTexture!==null||Ge.envMap!==Ne||ee.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Le.numPlanes||Ge.numIntersection!==Le.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==qe||Ge.morphTargets!==Ve||Ge.morphNormals!==ot||Ge.morphColors!==_t||Ge.toneMapping!==At||Ge.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,Ge.__version=ee.version);let Pn=Ge.currentProgram;dt===!0&&(Pn=bo(ee,H,z));let ws=!1,hn=!1,br=!1;const wt=Pn.getUniforms(),xn=Ge.uniforms;if(re.useProgram(Pn.program)&&(ws=!0,hn=!0,br=!0),ee.id!==C&&(C=ee.id,hn=!0),ws||E!==A){re.buffers.depth.getReversed()?(B.copy(A.projectionMatrix),Yb(B),Kb(B),wt.setValue(_,"projectionMatrix",B)):wt.setValue(_,"projectionMatrix",A.projectionMatrix),wt.setValue(_,"viewMatrix",A.matrixWorldInverse);const an=wt.map.cameraPosition;an!==void 0&&an.setValue(_,Z.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&wt.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,hn=!0,br=!0)}if(z.isSkinnedMesh){wt.setOptional(_,z,"bindMatrix"),wt.setOptional(_,z,"bindMatrixInverse");const Jt=z.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),wt.setValue(_,"boneTexture",Jt.boneTexture,ie))}z.isBatchedMesh&&(wt.setOptional(_,z,"batchingTexture"),wt.setValue(_,"batchingTexture",z._matricesTexture,ie),wt.setOptional(_,z,"batchingIdTexture"),wt.setValue(_,"batchingIdTexture",z._indirectTexture,ie),wt.setOptional(_,z,"batchingColorTexture"),z._colorsTexture!==null&&wt.setValue(_,"batchingColorTexture",z._colorsTexture,ie));const yn=J.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&De.update(z,J,Pn),(hn||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,wt.setValue(_,"receiveShadow",z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(xn.envMap.value=Ne,xn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(xn.envMapIntensity.value=H.environmentIntensity),hn&&(wt.setValue(_,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Jm(xn,br),ve&&ee.fog===!0&&j.refreshFogUniforms(xn,ve),j.refreshMaterialUniforms(xn,ee,G,K,p.state.transmissionRenderTarget[A.id]),pa.upload(_,hh(Ge),xn,ie)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(pa.upload(_,hh(Ge),xn,ie),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(_,"center",z.center),wt.setValue(_,"modelViewMatrix",z.modelViewMatrix),wt.setValue(_,"normalMatrix",z.normalMatrix),wt.setValue(_,"modelMatrix",z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Jt=ee.uniformsGroups;for(let an=0,il=Jt.length;an<il;an++){const es=Jt[an];F.update(es,Pn),F.bind(es,Pn)}}return Pn}function Jm(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Qm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,H,J){const ee=se.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=H,se.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const J=se.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const eg=_.createFramebuffer();this.setRenderTarget=function(A,H=0,J=0){D=A,P=H,L=J;let ee=!0,z=null,ve=!1,Ce=!1;if(A){const Ne=se.get(A);if(Ne.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(_.FRAMEBUFFER,null),ee=!1;else if(Ne.__webglFramebuffer===void 0)ie.setupRenderTarget(A);else if(Ne.__hasExternalTextures)ie.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ve=A.depthTexture;if(Ne.__boundDepthTexture!==Ve){if(Ve!==null&&se.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const qe=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[H])?z=qe[H][J]:z=qe[H],ve=!0):A.samples>0&&ie.useMultisampledRTT(A)===!1?z=se.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[J]:z=qe,U.copy(A.viewport),ne.copy(A.scissor),q=A.scissorTest}else U.copy(we).multiplyScalar(G).floor(),ne.copy(Be).multiplyScalar(G).floor(),q=Ke;if(J!==0&&(z=eg),re.bindFramebuffer(_.FRAMEBUFFER,z)&&ee&&re.drawBuffers(A,z),re.viewport(U),re.scissor(ne),re.setScissorTest(q),ve){const Ne=se.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ne.__webglTexture,J)}else if(Ce){const Ne=se.get(A.texture),je=H;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ne.__webglTexture,J,je)}else if(A!==null&&J!==0){const Ne=se.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ne.__webglTexture,J)}C=-1},this.readRenderTargetPixels=function(A,H,J,ee,z,ve,Ce,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){re.bindFramebuffer(_.FRAMEBUFFER,Ne);try{const je=A.textures[ze],qe=je.format,Ve=je.type;if(!te.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-ee&&J>=0&&J<=A.height-z&&(A.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+ze),_.readPixels(H,J,ee,z,be.convert(qe),be.convert(Ve),ve))}finally{const je=D!==null?se.get(D).__webglFramebuffer:null;re.bindFramebuffer(_.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,ee,z,ve,Ce,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(H>=0&&H<=A.width-ee&&J>=0&&J<=A.height-z){re.bindFramebuffer(_.FRAMEBUFFER,Ne);const je=A.textures[ze],qe=je.format,Ve=je.type;if(!te.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,ot),_.bufferData(_.PIXEL_PACK_BUFFER,ve.byteLength,_.STREAM_READ),A.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+ze),_.readPixels(H,J,ee,z,be.convert(qe),be.convert(Ve),0);const _t=D!==null?se.get(D).__webglFramebuffer:null;re.bindFramebuffer(_.FRAMEBUFFER,_t);const At=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await qb(_,At,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,ot),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ve),_.deleteBuffer(ot),_.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,J=0){const ee=Math.pow(2,-J),z=Math.floor(A.image.width*ee),ve=Math.floor(A.image.height*ee),Ce=H!==null?H.x:0,ze=H!==null?H.y:0;ie.setTexture2D(A,0),_.copyTexSubImage2D(_.TEXTURE_2D,J,0,0,Ce,ze,z,ve),re.unbindTexture()};const tg=_.createFramebuffer(),ng=_.createFramebuffer();this.copyTextureToTexture=function(A,H,J=null,ee=null,z=0,ve=null){ve===null&&(z!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=z,z=0):ve=0);let Ce,ze,Ne,je,qe,Ve,ot,_t,At;const Pt=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(J!==null)Ce=J.max.x-J.min.x,ze=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,je=J.min.x,qe=J.min.y,Ve=J.isBox3?J.min.z:0;else{const yn=Math.pow(2,-z);Ce=Math.floor(Pt.width*yn),ze=Math.floor(Pt.height*yn),A.isDataArrayTexture?Ne=Pt.depth:A.isData3DTexture?Ne=Math.floor(Pt.depth*yn):Ne=1,je=0,qe=0,Ve=0}ee!==null?(ot=ee.x,_t=ee.y,At=ee.z):(ot=0,_t=0,At=0);const lt=be.convert(H.format),Ge=be.convert(H.type);let Gt;H.isData3DTexture?(ie.setTexture3D(H,0),Gt=_.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ie.setTexture2DArray(H,0),Gt=_.TEXTURE_2D_ARRAY):(ie.setTexture2D(H,0),Gt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,H.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,H.unpackAlignment);const dt=_.getParameter(_.UNPACK_ROW_LENGTH),Pn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),ws=_.getParameter(_.UNPACK_SKIP_PIXELS),hn=_.getParameter(_.UNPACK_SKIP_ROWS),br=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Pt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Pt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,je),_.pixelStorei(_.UNPACK_SKIP_ROWS,qe),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ve);const wt=A.isDataArrayTexture||A.isData3DTexture,xn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const yn=se.get(A),Jt=se.get(H),an=se.get(yn.__renderTarget),il=se.get(Jt.__renderTarget);re.bindFramebuffer(_.READ_FRAMEBUFFER,an.__webglFramebuffer),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,il.__webglFramebuffer);for(let es=0;es<Ne;es++)wt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,se.get(A).__webglTexture,z,Ve+es),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,se.get(H).__webglTexture,ve,At+es)),_.blitFramebuffer(je,qe,Ce,ze,ot,_t,Ce,ze,_.DEPTH_BUFFER_BIT,_.NEAREST);re.bindFramebuffer(_.READ_FRAMEBUFFER,null),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||se.has(A)){const yn=se.get(A),Jt=se.get(H);re.bindFramebuffer(_.READ_FRAMEBUFFER,tg),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,ng);for(let an=0;an<Ne;an++)wt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,yn.__webglTexture,z,Ve+an):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,yn.__webglTexture,z),xn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Jt.__webglTexture,ve,At+an):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Jt.__webglTexture,ve),z!==0?_.blitFramebuffer(je,qe,Ce,ze,ot,_t,Ce,ze,_.COLOR_BUFFER_BIT,_.NEAREST):xn?_.copyTexSubImage3D(Gt,ve,ot,_t,At+an,je,qe,Ce,ze):_.copyTexSubImage2D(Gt,ve,ot,_t,je,qe,Ce,ze);re.bindFramebuffer(_.READ_FRAMEBUFFER,null),re.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?_.texSubImage3D(Gt,ve,ot,_t,At,Ce,ze,Ne,lt,Ge,Pt.data):H.isCompressedArrayTexture?_.compressedTexSubImage3D(Gt,ve,ot,_t,At,Ce,ze,Ne,lt,Pt.data):_.texSubImage3D(Gt,ve,ot,_t,At,Ce,ze,Ne,lt,Ge,Pt):A.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ve,ot,_t,Ce,ze,lt,Ge,Pt.data):A.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ve,ot,_t,Pt.width,Pt.height,lt,Pt.data):_.texSubImage2D(_.TEXTURE_2D,ve,ot,_t,Ce,ze,lt,Ge,Pt);_.pixelStorei(_.UNPACK_ROW_LENGTH,dt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Pn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ws),_.pixelStorei(_.UNPACK_SKIP_ROWS,hn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,br),ve===0&&H.generateMipmaps&&_.generateMipmap(Gt),re.unbindTexture()},this.copyTextureToTexture3D=function(A,H,J=null,ee=null,z=0){return er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,J,ee,z)},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),re.unbindTexture()},this.resetState=function(){P=0,L=0,D=null,re.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Ld={type:"change"},th={type:"start"},qm={type:"end"},na=new vr,Dd=new zi,$R=Math.cos(70*wm.DEG2RAD),Ot=new N,ln=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6;class nh extends cT{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new vn,this._lastTargetPosition=new N,this._quat=new vn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rd,this._sphericalDelta=new rd,this._scale=1,this._panOffset=new N,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new N,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qR.bind(this),this._onPointerDown=jR.bind(this),this._onPointerUp=YR.bind(this),this._onContextMenu=nC.bind(this),this._onMouseWheel=JR.bind(this),this._onKeyDown=QR.bind(this),this._onTouchStart=eC.bind(this),this._onTouchMove=tC.bind(this),this._onMouseDown=KR.bind(this),this._onMouseMove=ZR.bind(this),this._interceptControlDown=iC.bind(this),this._interceptControlUp=sC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ld),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<$R?this.object.lookAt(this.target):(Dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(Dd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(Ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function jR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function YR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qm),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function KR(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=St.DOLLY;break;case Js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}break;case Js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(th)}function ZR(n){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function JR(n){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(n.preventDefault(),this.dispatchEvent(th),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qm))}function QR(n){this.enabled!==!1&&this._handleKeyDown(n)}function eC(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=St.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=St.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(th)}function tC(n){switch(this._trackPointer(n),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=St.NONE}}function nC(n){this.enabled!==!1&&n.preventDefault()}function iC(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sC(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Id(n,e){if(e===yb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===tu||e===bm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===tu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class ih extends Sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new xC(t)}),this.register(function(t){return new yC(t)}),this.register(function(t){return new SC(t)}),this.register(function(t){return new fC(t)}),this.register(function(t){return new dC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new mC(t)}),this.register(function(t){return new lC(t)}),this.register(function(t){return new gC(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new vC(t)}),this.register(function(t){return new _C(t)}),this.register(function(t){return new oC(t)}),this.register(function(t){return new MC(t)}),this.register(function(t){return new bC(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=eo.extractUrlBase(e);o=eo.resolveURL(c,this.path)}else o=eo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ym){try{o[st.KHR_BINARY_GLTF]=new EC(e)}catch(h){s&&s(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new FC(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new aC;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new TC(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new wC;break;case st.KHR_MESH_QUANTIZATION:o[h]=new AC;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function rC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oC{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new el(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new KE(u),c.distance=h;break;case"spot":c=new qE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class aC{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return ms}extendParams(e,t,i){const s=[];e.color=new Qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}}class lC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class cC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(r)}}class uC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class dC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class pC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(a[0],a[1],a[2],on),Promise.all(r)}}class mC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class gC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}}class _C{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class vC{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class xC{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yC{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class SC{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class MC{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class bC{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const v=new et,m=new N,p=new vn,T=new N(1,1,1),b=new wE(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&T.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,v.compose(m,p,T));for(const x in l)if(x==="_COLOR_0"){const I=l[x];b.instanceColor=new iu(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ct.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Ym="glTF",Or=12,Nd={JSON:1313821514,BIN:5130562};class EC{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Or),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Or,r=new DataView(e,Or);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Nd.JSON){const c=new Uint8Array(e,Or+o,a);this.content=i.decode(c)}else if(l===Nd.BIN){const c=Or+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=au[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=au[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=nr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(d)},a,c,on,f)})})}}class wC{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class AC{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class Km extends So{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,v=g-c,m=-2*d+3*f,p=d-f,T=1-m,b=p-f+h;for(let x=0;x!==a;x++){const I=o[v+x+a],P=o[v+x+l]*u,L=o[g+x+a],D=o[g+x]*u;r[x]=T*I+b*P+m*L+p*D}return r}}const RC=new vn;class CC extends Km{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return RC.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ud={9728:sn,9729:gn,9984:mm,9985:la,9986:kr,9987:_i},Od={33071:Gi,33648:wa,10497:ur},Ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},au={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PC={CUBICSPLINE:void 0,LINEAR:po,STEP:fo},ec={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new $u({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),n.DefaultMaterial}function cs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function DC(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function IC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NC(n){let e;const t=n.extensions&&n.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tc(t.attributes):e=n.indices+":"+tc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+tc(n.targets[i]);return e}function tc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function lu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function UC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const OC=new et;class FC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Qa(this.options.manager):this.textureLoader=new JE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return cs(r,a,s),pi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(eo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ql[s.type],a=nr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new rn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ql[s.type],c=nr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(T);b||(v=new c(a,p*d,s.count*d/u),b=new SE(v,d/u),t.cache.add(T,b)),m=new Vu(b,l,f%d/u,g)}else a===null?v=new c(s.count*l):v=new c(a,f,s.count*l),m=new rn(v,l,g);if(s.sparse!==void 0){const p=Ql.SCALAR,T=nr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new T(o[1],b,s.sparse.count*p),P=new c(o[2],x,s.sparse.count*l);a!==null&&(m=new rn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,D=I.length;L<D;L++){const C=I[L];if(m.setX(C,P[L*l]),l>=2&&m.setY(C,P[L*l+1]),l>=3&&m.setZ(C,P[L*l+2]),l>=4&&m.setW(C,P[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ud[f.magFilter]||gn,u.minFilter=Ud[f.minFilter]||_i,u.wrapS=Od[f.wrapS]||ur,u.wrapT=Od[f.wrapT]||ur,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==gn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Vt(v);m.needsUpdate=!0,f(m)}),t.load(eo.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),pi(h,o),h.userData.mimeType=o.mimeType||UC(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Bm,qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Fm,qn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return $u}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=s[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=$n);const u=r.alphaMode||ec.OPAQUE;if(u===ec.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ec.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ms&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ms){const h=r.emissiveFactor;a.emissive=new Qe().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&o!==ms&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&cs(s,h,r),h})}createUniqueName(e){const t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=NC(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Fd(new ti,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?LC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=o[d];let p;const T=c[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new bE(v,T):new _n(v,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Id(p.geometry,bm):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Id(p.geometry,tu));else if(m.mode===Mn.LINES)p=new CE(v,T);else if(m.mode===Mn.LINE_STRIP)p=new Xu(v,T);else if(m.mode===Mn.LINE_LOOP)p=new PE(v,T);else if(m.mode===Mn.POINTS)p=new LE(v,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&IC(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),pi(p,r),m.extensions&&cs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&cs(s,h[0],r),h[0];const f=new gs;r.extensions&&cs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xt(wm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Yu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new et;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Gu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],v=d.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let T=0,b=f.length;T<b;T++){const x=f[T],I=d[T],P=g[T],L=v[T],D=m[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const C=i._createAnimationTracks(x,I,P,L,D);if(C)for(let E=0;E<C.length;E++)p.push(C[E])}return new HE(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,OC)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Um:c.length>1?u=new gs:c.length===1?u=c[0]:u=new Ct,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),pi(u,r),r.extensions&&cs(i,u,r),r.matrix!==void 0){const h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new gs;i.name&&(r.name=s.createUniqueName(i.name)),pi(r,i),i.extensions&&cs(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof qn||f instanceof Vt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Oi[r.path]===Oi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Oi[r.path]){case Oi.weights:c=dr;break;case Oi.rotation:c=pr;break;case Oi.translation:case Oi.scale:c=mr;break;default:switch(i.itemSize){case 1:c=dr;break;case 2:case 3:default:c=mr;break}break}const u=s.interpolation!==void 0?PC[s.interpolation]:po,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Oi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=lu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof pr?CC:Km;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function BC(n,e,t){const i=e.attributes,s=new Ri;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=lu(nr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=lu(nr[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new ei;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Fd(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=au[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return at.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),pi(n,e),BC(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?DC(n,e.targets,t):n})}const kC={class:"seat-card"},HC={class:"seat-info"},zC={class:"seat-number"},VC={class:"seat-class"},GC={class:"seat-introduce"},WC={class:"seat-introduce-text"},XC={class:"price-display-container"},$C={class:"price-display"},jC={class:"amount"},qC={__name:"SeatCard",props:{seatNumber:{type:String,required:!0},seatClass:{type:String,required:!0},seatPrice:{type:String,required:!0},seatDescription:{type:String,default:""}},emits:["confirm","back"],setup(n,{emit:e}){const t=e,i=()=>{t("confirm")},s=()=>{t("back")};return(r,o)=>(xe(),Me("div",kC,[S("div",HC,[S("h2",zC,Ue(n.seatNumber),1),S("p",VC,Ue(n.seatClass),1)]),S("div",GC,[S("p",WC,Ue(n.seatDescription),1)]),S("div",XC,[S("div",$C,[o[0]||(o[0]=S("span",{class:"currency"},"NT$",-1)),S("span",jC,Ue(n.seatPrice.replace("NT$ ","")),1)])]),S("div",{class:"seat-actions"},[S("button",{class:"btn confirm",onClick:i},"確認選擇"),S("button",{class:"btn back",onClick:s},"返回")])]))}},sh=rt(qC,[["__scopeId","data-v-0b825450"]]),YC={class:"page-container"},KC={class:"container-fluid"},ZC={key:0,class:"loading-overlay"},JC={key:2,class:"drag-hint"},QC={key:3,class:"scroll-hint"},eP={class:"container-fluid"},tP=16777215,nP=.3,Bd=.005,iP={__name:"Select3DViewEconomy",setup(n){let e,t,i,s,r,o,a,l=!1;const c=new N,u=new N;let h=new N,f=new N,d=!1,g=0,v=0;const m=$e(!1);let p=null;const T=$e(!1);let b=null,x=new Map;const I=$e(null),P=$e(null),L=$e(!0),D=$e(null),C=Ru();C.query.flightId;const E=C.query.cabinClass,U="/test/models/A350-economy-class.glb",ne="/test/image/HDRI.jpg",q={economy:8e3,business:24e3,first:66e3},le={EC_35C:{position:new N(.6,1.4,-14.5),target:new N(.6,1.54,2.5),title:"35C",class:"經濟艙",text:"此座位位於走道旁，讓您進出更加方便，是享受舒適腿部空間的理想選擇。"},EC_37E:{position:new N(-.42,1.4,-15.3),target:new N(-.42,1.54,2.5),title:"37E",class:"經濟艙",text:"此座位位於中央區域，適合與家人或朋友同行的旅客，方便您在旅途中輕鬆交流。"},EC_38H:{position:new N(-1.4,1.4,-16),target:new N(-1.4,1.54,2.5),title:"38H",class:"經濟艙",text:"此座位位於走道旁，讓您進出更加方便，是享受舒適腿部空間的理想選擇。"}},ce=()=>{o=new Ju,a=new Xe,e=new zu;const $=new el(16777215,5);$.position.set(5,10,7.5),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,e.add($);const M=I.value;t=new Xt(50,M.clientWidth/M.clientHeight,.1,1e3),t.position.set(-.42,3.29,-10.85),i=new eh({canvas:P.value,antialias:!0}),i.setSize(M.clientWidth,M.clientHeight),i.setPixelRatio(window.devicePixelRatio),i.outputEncoding=void 0,i.toneMapping=Ka,i.toneMappingExposure=.5,i.shadowMap.enabled=!0,i.shadowMap.type=Ya,s=new nh(t,i.domElement),s.target.set(-.42,-28,-46),s.enabled=!1,s.enablePan=!1,s.enableRotate=!1,s.mouseButtons.LEFT=null,s.mouseButtons.RIGHT=null,h.copy(t.position),f.copy(s.target),Q(),we(),window.addEventListener("resize",Be),P.value.addEventListener("click",G),P.value.addEventListener("mousemove",Ke),P.value.addEventListener("mousedown",me),P.value.addEventListener("mousemove",Ee),P.value.addEventListener("mouseup",B),P.value.addEventListener("wheel",ae)},Q=()=>{new Qa().load(ne,M=>{M.mapping=cr,e.background=M,e.environment=M,K()},void 0,M=>{console.error("JPG 背景載入失敗:",M),L.value=!1})},K=()=>{new ih().load(U,M=>{const w=M.scene;w.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)}),e.add(w),L.value=!1},void 0,M=>{console.error("模型載入失敗:",M),L.value=!1})},G=$=>{if(l||D.value)return;x.forEach((_,k)=>{k.material&&(k.material.emissive.copy(_.emissive),k.material.emissiveIntensity=_.emissiveIntensity)}),x.clear();const M=i.domElement.getBoundingClientRect();a.x=($.clientX-M.left)/M.width*2-1,a.y=-(($.clientY-M.top)/M.height)*2+1,o.setFromCamera(a,t);const w=o.intersectObjects(e.children,!0);if(w.length>0){let _=w[0].object;for(;_;){if(console.log("Clicked object:",_),_.parent&&console.log("Parent of clicked object:",_.parent),_.children&&_.children.length>0&&console.log("Children of clicked object:",_.children),le[_.name]){const k=le[_.name];_e(k.position,k.target),D.value={...k,price:q[E]||0};break}_=_.parent}}},_e=($,M)=>{l=!0,c.copy($),u.copy(M),m.value=!1,clearTimeout(p)},Se=()=>{_e(h,f),D.value=null,m.value=!1,clearTimeout(p),b=setTimeout(()=>{T.value=!0},3e3)},we=()=>{r=requestAnimationFrame(we),l&&(t.position.lerp(c,.05),s.target.lerp(u,.05),t.position.distanceTo(c)<.01&&(l=!1,D.value?(s.enabled=!1,T.value=!1,clearTimeout(b),p=setTimeout(()=>{m.value=!0},3e3)):(s.enabled=!1,m.value=!1))),s.update(),i.render(e,t)},Be=()=>{const $=I.value;$&&(t.aspect=$.clientWidth/$.clientHeight,t.updateProjectionMatrix(),i.setSize($.clientWidth,$.clientHeight))},Ke=$=>{if(l||D.value)return;const M=i.domElement.getBoundingClientRect();a.x=($.clientX-M.left)/M.width*2-1,a.y=-(($.clientY-M.top)/M.height)*2+1,o.setFromCamera(a,t);const w=o.intersectObjects(e.children,!0),_=new Set;if(w.length>0){let k=w[0].object;for(;k;){if(le[k.name]){k.traverse(V=>{V.isMesh&&V.material&&(_.add(V),x.has(V)||(x.set(V,V.material),V.material=V.material.clone(),V.material.emissive.setHex(tP),V.material.emissiveIntensity=nP,V.material.needsUpdate=!0))});break}k=k.parent}}x.forEach((k,V)=>{_.has(V)||(V.material&&V.material.isMaterial&&V.material.dispose(),V.material=k,x.delete(V))})},ae=$=>{if($.preventDefault(),D.value)return;T.value=!1,clearTimeout(b);let w=t.position.z+$.deltaY*.01;w=Math.max(-24,Math.min(w,-10.85)),t.position.z=w},me=$=>{$.button===0&&D.value&&(d=!0,g=$.clientX,v=$.clientY,P.value.style.cursor="grabbing",m.value=!1,clearTimeout(p))},Ee=$=>{if(!d)return;const M=$.clientX-g,w=$.clientY-v;g=$.clientX,v=$.clientY;const _=s.target.clone().sub(t.position),k=new vn;k.setFromAxisAngle(new N(0,1,0),-M*Bd),_.applyQuaternion(k);const V=new N;t.getWorldDirection(V),V.cross(t.up),V.normalize(),k.setFromAxisAngle(V,-w*Bd),_.applyQuaternion(k),s.target.copy(t.position).add(_),t.lookAt(s.target)},B=()=>{d=!1,P.value.style.cursor="grab",p=setTimeout(()=>{!d&&D.value&&(m.value=!0)},2e3)};Es(()=>{ce(),b=setTimeout(()=>{T.value=!0},3e3)}),gr(()=>{var $,M,w,_,k,V;cancelAnimationFrame(r),window.removeEventListener("resize",Be),($=P.value)==null||$.removeEventListener("click",G),(M=P.value)==null||M.removeEventListener("mousemove",Ke),(w=P.value)==null||w.removeEventListener("mousedown",me),(_=P.value)==null||_.removeEventListener("mousemove",Ee),(k=P.value)==null||k.removeEventListener("mouseup",B),(V=P.value)==null||V.removeEventListener("wheel",ae),i&&i.dispose()});const W=Ti(),Z=Ji();function X(){D.value&&Z.setSeatDetails(D.value),W.push("/payment-method")}return($,M)=>(xe(),Me("div",YC,[S("main",KC,[S("div",{class:"viewer-container",ref_key:"viewerContainer",ref:I},[S("canvas",{ref_key:"threeCanvas",ref:P},null,512),L.value?(xe(),Me("div",ZC,"載入中...")):Dt("",!0),D.value?(xe(),Qn(sh,{key:1,seatNumber:D.value.title,seatClass:D.value.class,seatPrice:`NT$ ${D.value.price.toLocaleString()}`,seatDescription:D.value.text,onConfirm:X,onBack:Se},null,8,["seatNumber","seatClass","seatPrice","seatDescription"])):Dt("",!0),m.value&&D.value?(xe(),Me("div",JC,M[0]||(M[0]=[S("span",null,"拖曳滑鼠左鍵旋轉視角",-1)]))):Dt("",!0),T.value&&!D.value?(xe(),Me("div",QC,M[1]||(M[1]=[S("span",null,"滾動滑鼠滾輪移動視角",-1)]))):Dt("",!0)],512)]),S("footer",eP,[pe(wi),pe(Ai)])]))}},sP=rt(iP,[["__scopeId","data-v-e7ab7c70"]]),rP={class:"page-container"},oP={class:"container-fluid"},aP={key:0,class:"loading-overlay"},lP={key:2,class:"drag-hint"},cP={class:"container-fluid"},uP=16777215,hP=.3,kd=.005,fP={__name:"Select3DViewBusiness",setup(n){let e,t,i,s,r,o,a,l=!1;const c=new N,u=new N;let h=new N,f=new N,d=!1,g=0,v=0;const m=$e(!1);let p=null,T=new Map;const b=$e(null),x=$e(null),I=$e(!0),P=$e(null),L=Ru();L.query.flightId;const D=L.query.cabinClass,C="/test/models/A350-premium-economy-class.glb",E="/test/image/HDRI.jpg",U={economy:8e3,business:24e3,first:66e3},ne={ED_02E:{position:new N(-.26,1.22,-9.82),target:new N(-.21,1.54,-4.84),title:"02E",class:"商務艙",text:"相鄰的中央商務艙座位，適合與旅伴同行。升降式隔板設計，讓您在互動與隱私之間輕鬆切換。"},ED_04A:{position:new N(1.18,1.22,-11),target:new N(1.23,1.54,-4.84),title:"04A",class:"商務艙",text:"靠窗的商務艙座位，讓您獨享雲端景致，旅途不受打擾。配備可完全平躺的座椅，打造專屬的舒適休憩領域。"},ED_04D:{position:new N(.1,1.22,-11),target:new N(.52,1.54,-4.84),title:"04D",class:"商務艙",text:"配置於走道旁的商務艙座位，讓您進出更為從容。寬敞的座椅設計，提供舒適的辦公與休憩空間。"}},q=()=>{o=new Ju,a=new Xe,e=new zu;const W=new el(16777215,8);W.position.set(5,10,7.5),W.castShadow=!0,W.shadow.mapSize.width=2048,W.shadow.mapSize.height=2048,e.add(W);const Z=b.value;t=new Xt(50,Z.clientWidth/Z.clientHeight,.1,1e3),t.position.set(-.37,3.34,-8.13),i=new eh({canvas:x.value,antialias:!0}),i.setSize(Z.clientWidth,Z.clientHeight),i.setPixelRatio(window.devicePixelRatio),i.outputEncoding=void 0,i.toneMapping=Ka,i.toneMappingExposure=.4,i.shadowMap.enabled=!0,i.shadowMap.type=Ya,s=new nh(t,i.domElement),s.target.set(-.37,-4.86,-14.36),s.enabled=!1,s.enablePan=!1,s.enableRotate=!1,s.mouseButtons.LEFT=null,s.mouseButtons.RIGHT=null,h.copy(t.position),f.copy(s.target),le(),_e(),window.addEventListener("resize",Se),x.value.addEventListener("click",Q),x.value.addEventListener("mousemove",we),x.value.addEventListener("mousedown",Be),x.value.addEventListener("mousemove",Ke),x.value.addEventListener("mouseup",ae)},le=()=>{new Qa().load(E,Z=>{Z.mapping=cr,e.background=Z,e.environment=Z,ce()},void 0,Z=>{console.error("JPG 背景載入失敗:",Z),I.value=!1})},ce=()=>{new ih().load(C,Z=>{const X=Z.scene;X.traverse($=>{$.isMesh&&($.castShadow=!0,$.receiveShadow=!0)}),e.add(X),I.value=!1},void 0,Z=>{console.error("模型載入失敗:",Z),I.value=!1})},Q=W=>{if(l||P.value)return;T.forEach(($,M)=>{M.material&&(M.material.emissive.copy($.emissive),M.material.emissiveIntensity=$.emissiveIntensity)}),T.clear();const Z=i.domElement.getBoundingClientRect();a.x=(W.clientX-Z.left)/Z.width*2-1,a.y=-((W.clientY-Z.top)/Z.height)*2+1,o.setFromCamera(a,t);const X=o.intersectObjects(e.children,!0);if(X.length>0){let $=X[0].object;for(;$;){if(console.log("Clicked object:",$),$.parent&&console.log("Parent of clicked object:",$.parent),$.children&&$.children.length>0&&console.log("Children of clicked object:",$.children),ne[$.name]){const M=ne[$.name];K(M.position,M.target),P.value={...M,price:U[D]||0};break}$=$.parent}}},K=(W,Z)=>{l=!0,c.copy(W),u.copy(Z),m.value=!1,clearTimeout(p)},G=()=>{K(h,f),P.value=null,m.value=!1},_e=()=>{r=requestAnimationFrame(_e),l&&(t.position.lerp(c,.05),s.target.lerp(u,.05),t.position.distanceTo(c)<.01&&(l=!1,P.value?(s.enabled=!1,m.value=!0):(s.enabled=!1,m.value=!1))),s.update(),i.render(e,t)},Se=()=>{const W=b.value;W&&(t.aspect=W.clientWidth/W.clientHeight,t.updateProjectionMatrix(),i.setSize(W.clientWidth,W.clientHeight))},we=W=>{if(l||P.value)return;const Z=i.domElement.getBoundingClientRect();a.x=(W.clientX-Z.left)/Z.width*2-1,a.y=-((W.clientY-Z.top)/Z.height)*2+1,o.setFromCamera(a,t);const X=o.intersectObjects(e.children,!0),$=new Set;if(X.length>0){let M=X[0].object;for(;M;){if(ne[M.name]){M.traverse(w=>{w.isMesh&&w.material&&($.add(w),T.has(w)||(T.set(w,w.material),w.material=w.material.clone(),w.material.emissive.setHex(uP),w.material.emissiveIntensity=hP,w.material.needsUpdate=!0))});break}M=M.parent}}T.forEach((M,w)=>{$.has(w)||(w.material&&w.material.isMaterial&&w.material.dispose(),w.material=M,T.delete(w))})},Be=W=>{W.button===0&&P.value&&(d=!0,g=W.clientX,v=W.clientY,x.value.style.cursor="grabbing",m.value=!1,clearTimeout(p))},Ke=W=>{if(!d)return;const Z=W.clientX-g,X=W.clientY-v;g=W.clientX,v=W.clientY;const $=s.target.clone().sub(t.position),M=new vn;M.setFromAxisAngle(new N(0,1,0),-Z*kd),$.applyQuaternion(M);const w=new N;t.getWorldDirection(w),w.cross(t.up),w.normalize(),M.setFromAxisAngle(w,-X*kd),$.applyQuaternion(M),s.target.copy(t.position).add($),t.lookAt(s.target)},ae=()=>{d=!1,x.value.style.cursor="grab",p=setTimeout(()=>{!d&&P.value&&(m.value=!0)},2e3)};Es(()=>{q()}),gr(()=>{var W,Z,X,$,M;cancelAnimationFrame(r),window.removeEventListener("resize",Se),(W=x.value)==null||W.removeEventListener("click",Q),(Z=x.value)==null||Z.removeEventListener("mousemove",we),(X=x.value)==null||X.removeEventListener("mousedown",Be),($=x.value)==null||$.removeEventListener("mousemove",Ke),(M=x.value)==null||M.removeEventListener("mouseup",ae),i&&i.dispose()});const me=Ti(),Ee=Ji();function B(){P.value&&Ee.setSeatDetails(P.value),me.push("/payment-method")}return(W,Z)=>(xe(),Me("div",rP,[S("main",oP,[S("div",{class:"viewer-container",ref_key:"viewerContainer",ref:b},[S("canvas",{ref_key:"threeCanvas",ref:x},null,512),I.value?(xe(),Me("div",aP,"載入中...")):Dt("",!0),P.value?(xe(),Qn(sh,{key:1,seatNumber:P.value.title,seatClass:P.value.class,seatPrice:`NT$ ${P.value.price.toLocaleString()}`,seatDescription:P.value.text,onConfirm:B,onBack:G},null,8,["seatNumber","seatClass","seatPrice","seatDescription"])):Dt("",!0),m.value&&P.value?(xe(),Me("div",lP,Z[0]||(Z[0]=[S("span",null,"拖曳滑鼠左鍵旋轉視角",-1)]))):Dt("",!0)],512)]),S("footer",cP,[pe(wi),pe(Ai)])]))}},dP=rt(fP,[["__scopeId","data-v-7a198bbf"]]),pP={class:"page-container"},mP={class:"container-fluid"},gP={key:0,class:"loading-overlay"},_P={key:2,class:"drag-hint"},vP={class:"container-fluid"},xP=16777215,yP=.3,Hd=.005,SP={__name:"Select3DViewFirst",setup(n){let e,t,i,s,r,o,a,l=!1,c=null,u=null;const h=new N,f=new N;let d=new N,g=new N,v=!1,m=0,p=0;const T=$e(!1);let b=null,x=new Map;const I=$e(null),P=$e(null),L=$e(!0),D=$e(null),C=Ru();C.query.flightId;const E=C.query.cabinClass,U="/test/models/A350-first-class.glb",ne="/test/image/HDRI.jpg",q={economy:8e3,business:24e3,first:66e3},le={FC_01A:{position:new N(.88,1.45,-1.29),target:new N(.88,1.2,-.28),title:"01A",class:"頭等艙",text:"這是靠窗的頭等艙座位，提供絕佳的視野與隱私。配備全平躺座椅及個人娛樂系統。",link:"/seat-details/01A"},FC_01D:{position:new N(-.11,1.45,-1.29),target:new N(-.53,1.11,-.19),title:"01D",class:"頭等艙",text:"中間區域的頭等艙座位，方便與鄰座乘客溝通，同時保有足夠的個人空間。",link:"/seat-details/01D"},FC_01G:{position:new N(-.9,1.45,-1.29),target:new N(-.4,.98,.19),title:"01G",class:"頭等艙",text:"這是位於中間區域的另一個頭等艙座位，適合商務旅客或家庭出行。",link:"/seat-details/01G"},FC_01K:{position:new N(-1.73,1.45,-1.29),target:new N(-2.16,1.22,-.71),title:"01K",class:"頭等艙",text:"另一個舒適的靠窗頭等艙座位，讓您在旅途中享受靜謐的個人時光。",link:"/seat-details/01K"}},ce=()=>{o=new Ju,a=new Xe,e=new zu;const X=new el(16777215,5);X.position.set(5,10,7.5),X.castShadow=!0,X.shadow.mapSize.width=2048,X.shadow.mapSize.height=2048,e.add(X);const $=I.value;t=new Xt(50,$.clientWidth/$.clientHeight,.1,1e3),t.position.set(-.49,3.42,.43),i=new eh({canvas:P.value,antialias:!0}),i.setSize($.clientWidth,$.clientHeight),i.setPixelRatio(window.devicePixelRatio),i.outputEncoding=Ht,i.toneMapping=Ka,i.toneMappingExposure=.5,i.shadowMap.enabled=!0,i.shadowMap.type=Ya,s=new nh(t,i.domElement),s.target.set(-.47,1.64,-.95),s.enabled=!1,s.enablePan=!1,s.enableRotate=!1,s.mouseButtons.LEFT=null,s.mouseButtons.RIGHT=null,d.copy(t.position),g.copy(s.target),Q(),we(),window.addEventListener("resize",Be),P.value.addEventListener("click",G),P.value.addEventListener("mousemove",Ke),P.value.addEventListener("mousedown",ae),P.value.addEventListener("mousemove",me),P.value.addEventListener("mouseup",Ee)},Q=()=>{new Qa().load(ne,$=>{$.mapping=cr,e.background=$,e.environment=$,K()},void 0,$=>{console.error("JPG 背景載入失敗:",$),L.value=!1})},K=()=>{new ih().load(U,$=>{const M=$.scene;e.add(M);const w=e.getObjectByName("A350_roof");w&&(c=w.getObjectByName("A350_roof"),c&&c.isMesh&&(u=c.parent,u&&u.remove(c))),M.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)}),L.value=!1},void 0,$=>{console.error("模型載入失敗:",$),L.value=!1})},G=X=>{if(l||D.value)return;x.forEach((w,_)=>{_.material&&(_.material.emissive.copy(w.emissive),_.material.emissiveIntensity=w.emissiveIntensity)}),x.clear();const $=i.domElement.getBoundingClientRect();a.x=(X.clientX-$.left)/$.width*2-1,a.y=-((X.clientY-$.top)/$.height)*2+1,o.setFromCamera(a,t);const M=o.intersectObjects(e.children,!0);if(M.length>0){let w=M[0].object;for(;w;){if(le[w.name]){const _=le[w.name];console.log("Clicked object world position:",w.getWorldPosition(new N)),_e(_.position,_.target),D.value={..._,price:q[E]||0},c&&u&&u.add(c);break}w=w.parent}}},_e=(X,$)=>{l=!0,h.copy(X),f.copy($),T.value=!1,clearTimeout(b)},Se=()=>{_e(d,g),D.value=null,T.value=!1,c&&u&&u.remove(c)},we=()=>{r=requestAnimationFrame(we),l&&(t.position.lerp(h,.05),s.target.lerp(f,.05),t.position.distanceTo(h)<.01&&(l=!1,D.value?(s.enabled=!1,T.value=!0):(s.enabled=!1,T.value=!1))),s.update(),i.render(e,t)},Be=()=>{const X=I.value;X&&(t.aspect=X.clientWidth/X.clientHeight,t.updateProjectionMatrix(),i.setSize(X.clientWidth,X.clientHeight))},Ke=X=>{if(l||D.value)return;const $=i.domElement.getBoundingClientRect();a.x=(X.clientX-$.left)/$.width*2-1,a.y=-((X.clientY-$.top)/$.height)*2+1,o.setFromCamera(a,t);const M=o.intersectObjects(e.children,!0),w=new Set;if(M.length>0){let _=M[0].object;for(;_;){if(le[_.name]){_.traverse(k=>{k.isMesh&&k.material&&(w.add(k),x.has(k)||(x.set(k,k.material),k.material=k.material.clone(),k.material.emissive.setHex(xP),k.material.emissiveIntensity=yP,k.material.needsUpdate=!0))});break}_=_.parent}}x.forEach((_,k)=>{w.has(k)||(k.material&&k.material.isMaterial&&k.material.dispose(),k.material=_,x.delete(k))})},ae=X=>{X.button===0&&D.value&&(v=!0,m=X.clientX,p=X.clientY,P.value.style.cursor="grabbing",T.value=!1,clearTimeout(b))},me=X=>{if(!v)return;const $=X.clientX-m,M=X.clientY-p;m=X.clientX,p=X.clientY;const w=t.position.clone().sub(s.target),_=new vn;_.setFromAxisAngle(new N(0,1,0),-$*Hd),w.applyQuaternion(_);const k=new N;t.getWorldDirection(k),k.cross(t.up),k.normalize(),_.setFromAxisAngle(k,-M*Hd),w.applyQuaternion(_),t.position.copy(s.target).add(w),t.lookAt(s.target)},Ee=()=>{v=!1,P.value.style.cursor="grab",b=setTimeout(()=>{!v&&D.value&&(T.value=!0)},2e3)};Es(()=>{ce()}),gr(()=>{var X,$,M,w,_;cancelAnimationFrame(r),window.removeEventListener("resize",Be),(X=P.value)==null||X.removeEventListener("click",G),($=P.value)==null||$.removeEventListener("mousemove",Ke),(M=P.value)==null||M.removeEventListener("mousedown",ae),(w=P.value)==null||w.removeEventListener("mousemove",me),(_=P.value)==null||_.removeEventListener("mouseup",Ee),i&&i.dispose()});const B=Ti(),W=Ji();function Z(){D.value&&W.setSeatDetails(D.value),B.push("/payment-method")}return(X,$)=>(xe(),Me("div",pP,[S("main",mP,[S("div",{class:"viewer-container",ref_key:"viewerContainer",ref:I},[S("canvas",{ref_key:"threeCanvas",ref:P},null,512),L.value?(xe(),Me("div",gP,"載入中...")):Dt("",!0),D.value?(xe(),Qn(sh,{key:1,seatNumber:D.value.title,seatClass:D.value.class,seatPrice:`NT$ ${D.value.price.toLocaleString()}`,seatDescription:D.value.text,onConfirm:Z,onBack:Se},null,8,["seatNumber","seatClass","seatPrice","seatDescription"])):Dt("",!0),T.value&&D.value?(xe(),Me("div",_P,$[0]||($[0]=[S("span",null,"拖曳滑鼠左鍵旋轉視角",-1)]))):Dt("",!0)],512)]),S("footer",vP,[pe(wi),pe(Ai)])]))}},MP=rt(SP,[["__scopeId","data-v-593c9c85"]]),bP={class:"modal-overlay"},EP={__name:"NoteForChild",setup(n){const e=Ti(),t=()=>{e.back()};return(i,s)=>(xe(),Me("div",bP,[S("div",{class:"modal-content"},[S("button",{onClick:t,class:"close-icon-button","aria-label":"關閉視窗"}," × "),s[0]||(s[0]=S("h3",null,"嬰兒及兒童注意事項",-1)),s[1]||(s[1]=S("h4",null,"嬰兒",-1)),s[2]||(s[2]=S("p",null," 每位父母、法定監護人或18歲成人最多可帶1位嬰兒 （2歲以下且不佔位），如需加購佔位嬰兒票，請聯繫星宇航空客服中心。 ",-1)),s[3]||(s[3]=S("h4",null,"兒童",-1)),s[4]||(s[4]=S("p",null," 每位父母、法定監護人或18歲成人可與最多8位兒童同行，但其中2 - 4歲兒童不得超過3位。 ",-1)),s[5]||(s[5]=S("h4",null,"嬰兒及兒童",-1)),s[6]||(s[6]=S("p",null," 每位父母、法定監護人或18歲成人最多可與1位嬰兒(含佔位嬰兒)以及2位兒童同行。如欲單獨購買嬰兒或兒童票，請聯繫星宇航空客服中心。 ",-1))])]))}},TP=rt(EP,[["__scopeId","data-v-1bad3e83"]]),wP={class:"form-page-container"},AP={__name:"PaymentForm",setup(n){const e=Ti(),t=Ji(),i=()=>{e.back()},s=()=>{const r={cardNumber:"XXXX XXXX XXXX 1234",cardHolderName:"JOHN DOE",expiryDate:"12/25",cvv:"123",phoneNumber:"0912345678",email:"john.doe@example.com"};t.setPaymentDetails(r),e.push("/order-confirmation")};return(r,o)=>(xe(),Me("div",wP,[S("div",{class:"form-wrapper"},[o[0]||(o[0]=Wa('<div class="form-upper" data-v-a2c8c426><div class="form-group" data-v-a2c8c426><label for="card-number" data-v-a2c8c426>信用卡號</label><input type="text" id="card-number" class="form-input" placeholder="XXXX XXXX XXXX XXXX" data-v-a2c8c426></div><div class="form-group" data-v-a2c8c426><label for="card-holder-name" data-v-a2c8c426>持卡人姓名</label><input type="text" id="card-holder-name" class="form-input" placeholder="請輸入持卡人姓名" data-v-a2c8c426></div><div class="form-group" data-v-a2c8c426><label for="expiry-date" data-v-a2c8c426>有效日期</label><input type="text" id="expiry-date" class="form-input" placeholder="MM/YY" data-v-a2c8c426></div><div class="form-group" data-v-a2c8c426><label for="cvv" data-v-a2c8c426>CVV</label><input type="text" id="cvv" class="form-input" placeholder="XXX" data-v-a2c8c426></div><div class="form-group" data-v-a2c8c426><label for="phone-number" data-v-a2c8c426>聯絡電話</label><input type="text" id="phone-number" class="form-input" placeholder="請輸入聯絡電話" data-v-a2c8c426></div><div class="form-group" data-v-a2c8c426><label for="email" data-v-a2c8c426>電子郵件</label><input type="email" id="email" class="form-input" placeholder="請輸入電子郵件" data-v-a2c8c426></div></div><hr class="separator" data-v-a2c8c426>',2)),S("div",{class:"form-lower"},[S("button",{class:"back-button",onClick:i},"上一步"),S("button",{class:"confirm-button",onClick:s},"確認訂購")])])]))}},RP=rt(AP,[["__scopeId","data-v-a2c8c426"]]),CP={class:"page-container"},PP={class:"container header-bg-color"},LP={class:"container"},DP={class:"main-bottom main-bottom-bg"},IP={class:"container-fluid"},NP={__name:"PaymentMethodView",setup(n){return(e,t)=>(xe(),Me("div",CP,[S("header",PP,[pe(_r)]),S("main",LP,[t[0]||(t[0]=S("div",{class:"main-top main-top-bg f2"}," 付款方式 ",-1)),S("div",DP,[pe(RP)])]),S("footer",IP,[pe(wi),pe(Ai)])]))}},UP=rt(NP,[["__scopeId","data-v-51b73d27"]]),OP={__name:"OrderConfirmationModal",emits:["close"],setup(n,{emit:e}){const t=Ti(),i=e,s=()=>{i("close"),t.push("/")};return(r,o)=>(xe(),Me("div",{class:"modal-overlay",onClick:o[0]||(o[0]=jp(a=>r.$emit("close"),["self"]))},[S("div",{class:"modal-content"},[o[1]||(o[1]=S("div",{class:"animation-container"},[S("p",null,"訂購成功！"),S("p",null,"感謝您的訂購，祝您旅途愉快！")],-1)),S("button",{class:"home-button",onClick:s},"回首頁")])]))}},FP=rt(OP,[["__scopeId","data-v-259ce9f7"]]),BP={class:"order-summary-container"},kP={class:"summary-section"},HP={key:0},zP={key:1},VP={class:"summary-section"},GP={key:0},WP={key:1},XP={class:"summary-section"},$P={key:0},jP={key:1},qP={__name:"OrderSummary",setup(n){const e=Ti(),t=Ji(),i=$e(!1),s=()=>{t.setBookingDetails(null),t.setSeatDetails(null),t.setPaymentDetails(null),e.push("/")},r=()=>{i.value=!0},o=zt(()=>{if(!t.bookingDetails)return"";switch(t.bookingDetails.tripType){case"one-way":return"單程";case"round-trip":return"來回";default:return t.bookingDetails.tripType}});return(a,l)=>(xe(),Me("div",BP,[l[14]||(l[14]=S("h2",null,"您的訂單摘要",-1)),S("div",kP,[l[5]||(l[5]=S("h3",null,"預訂資訊",-1)),Rt(t).bookingDetails?(xe(),Me("p",HP,[ht(" 出發地: "+Ue(Rt(t).bookingDetails.origin),1),l[1]||(l[1]=S("br",null,null,-1)),ht(" 目的地: "+Ue(Rt(t).bookingDetails.destination),1),l[2]||(l[2]=S("br",null,null,-1)),ht(" 行程類型: "+Ue(o.value),1),l[3]||(l[3]=S("br",null,null,-1)),ht(" 出發日期: "+Ue(Rt(t).bookingDetails.departureDate),1),l[4]||(l[4]=S("br",null,null,-1)),ht(" 優惠代碼: "+Ue(Rt(t).bookingDetails.promoCode),1)])):(xe(),Me("p",zP,"無預訂資訊"))]),S("div",VP,[l[8]||(l[8]=S("h3",null,"選位資訊",-1)),Rt(t).seatDetails?(xe(),Me("p",GP,[ht(" 座位號: "+Ue(Rt(t).seatDetails.title),1),l[6]||(l[6]=S("br",null,null,-1)),ht(" 艙等: "+Ue(Rt(t).seatDetails.class),1),l[7]||(l[7]=S("br",null,null,-1)),ht(" 價格: NT$ "+Ue(Rt(t).seatDetails.price.toLocaleString()),1)])):(xe(),Me("p",WP,"無選位資訊"))]),S("div",XP,[l[13]||(l[13]=S("h3",null,"付款資訊",-1)),Rt(t).paymentDetails?(xe(),Me("p",$P,[ht(" 信用卡號: "+Ue(Rt(t).paymentDetails.cardNumber),1),l[9]||(l[9]=S("br",null,null,-1)),ht(" 持卡人姓名: "+Ue(Rt(t).paymentDetails.cardHolderName),1),l[10]||(l[10]=S("br",null,null,-1)),ht(" 有效日期: "+Ue(Rt(t).paymentDetails.expiryDate),1),l[11]||(l[11]=S("br",null,null,-1)),ht(" 聯絡電話: "+Ue(Rt(t).paymentDetails.phoneNumber),1),l[12]||(l[12]=S("br",null,null,-1)),ht(" 電子郵件: "+Ue(Rt(t).paymentDetails.email),1)])):(xe(),Me("p",jP,"無付款資訊"))]),S("div",{class:"order-actions"},[S("button",{class:"btn cancel-button",onClick:s},"取消訂單"),S("button",{class:"btn complete-button",onClick:r},"完成訂購")]),i.value?(xe(),Qn(FP,{key:0,onClose:l[0]||(l[0]=c=>i.value=!1)})):Dt("",!0)]))}},YP=rt(qP,[["__scopeId","data-v-4ac40edd"]]),KP={class:"page-container"},ZP={class:"container header-bg-color"},JP={class:"container"},QP={class:"main-bottom main-bottom-bg"},eL={class:"container-fluid"},tL={__name:"OrderConfirmationView",setup(n){return(e,t)=>(xe(),Me("div",KP,[S("header",ZP,[pe(_r)]),S("main",JP,[t[0]||(t[0]=S("div",{class:"main-top main-top-bg f2"}," 訂單確認 ",-1)),S("div",QP,[pe(YP)])]),S("footer",eL,[pe(wi),pe(Ai)])]))}},nL=rt(tL,[["__scopeId","data-v-e61d2c3c"]]),iL={class:"coming-soon-container"},sL={__name:"CommingSoonCard",setup(n){const e="/test/image/tomorin.gif";return(t,i)=>{const s=Rn("router-link");return xe(),Me("div",iL,[i[1]||(i[1]=S("h1",null,"此頁尚未開發",-1)),S("img",{class:"gif",src:e,alt:"開發中動畫"}),i[2]||(i[2]=S("p",null,"您所點選的功能或頁面目前尚未完成開發，敬請期待！",-1)),pe(s,{class:"btn-home",to:"/"},{default:ut(()=>i[0]||(i[0]=[ht("返回首頁")])),_:1,__:[0]})])}}},rL=rt(sL,[["__scopeId","data-v-76c5a04f"]]),oL={class:"page-container"},aL={class:"container header-bg-color"},lL={class:"container"},cL={class:"container-fluid"},uL={__name:"CommingSoonView",setup(n){return(e,t)=>(xe(),Me("div",oL,[S("header",aL,[pe(_r)]),t[0]||(t[0]=S("div",{class:"full-width-hr"},[S("hr")],-1)),S("main",lL,[pe(rL)]),S("footer",cL,[pe(wi),pe(Ai)])]))}},hL={class:"button-column d-flex flex-column align-items-center gap-3 my-4 my-lg-5 mb-lg-0"},fL=["onClick"],dL={__name:"CabinButtons",props:{selected:String},emits:["select"],setup(n,{emit:e}){const t=e,i=["頭等艙","商務艙","經濟艙"];function s(r){t("select",r)}return(r,o)=>(xe(),Me("div",hL,[o[0]||(o[0]=S("h3",{class:"text-white mb-2 vertical-text"},"艙等",-1)),(xe(),Me(Lt,null,An(i,a=>S("button",{key:a,class:Ms(["btn btn-lg px-4 custom-btn vertical-text",{active:n.selected===a}]),onClick:l=>s(a)},Ue(a),11,fL)),64))]))}},pL=rt(dL,[["__scopeId","data-v-c370b527"]]),mL={class:"button-column d-flex flex-column align-items-center gap-3 my-4 my-lg-5 mb-lg-0"},gL=["onClick"],_L={__name:"FeatureButtons",props:{selected:String},emits:["select"],setup(n,{emit:e}){const t=e,i=["電視","小冰箱","廁所","調光窗戶","座椅"];function s(r){t("select",r)}return(r,o)=>(xe(),Me("div",mL,[o[0]||(o[0]=S("h3",{class:"text-white mb-2 vertical-text"},"設備",-1)),(xe(),Me(Lt,null,An(i,a=>S("button",{key:a,class:Ms(["btn btn-lg px-4 custom-btn vertical-text",{active:n.selected===a}]),onClick:l=>s(a)},Ue(a),11,gL)),64))]))}},vL=rt(_L,[["__scopeId","data-v-0ba05bc7"]]),xL={class:"page-container"},yL={class:"container header-bg-color"},SL={class:"container-fluid d-flex flex-lg-row flex-column align-items-start justify-content-center"},ML={class:"threed-area my-4 my-lg-5 d-flex justify-content-center align-items-center"},bL={key:0,class:"fs-4 mt-4"},EL={class:"container-fluid"},TL={__name:"EquipmentView",setup(n){const e=$e(null);function t(i){e.value=i}return(i,s)=>(xe(),Me("div",xL,[S("header",yL,[pe(_r)]),s[0]||(s[0]=S("div",{class:"full-width-hr"},[S("hr")],-1)),S("main",SL,[pe(pL,{selected:e.value,onSelect:t},null,8,["selected"]),S("div",ML,[e.value?(xe(),Me("p",bL," 你選擇的是："+Ue(e.value),1)):Dt("",!0)]),pe(vL,{selected:e.value,onSelect:t},null,8,["selected"])]),S("footer",EL,[pe(wi),pe(Ai)])]))}},wL=rt(TL,[["__scopeId","data-v-2071cf7c"]]),AL=F0({history:f0("/test/"),routes:[{path:"/",name:"home",component:vS},{path:"/booking",name:"booking",component:WS},{path:"/search-result",name:"search-result",component:GM},{path:"/select-seat/economy",name:"select-seat-economy",component:sP},{path:"/select-seat/business",name:"select-seat-business",component:dP},{path:"/select-seat/first",name:"select-seat-first",component:MP},{path:"/notes-for-child",name:"NoteForChild",component:TP},{path:"/payment-method",name:"payment-method",component:UP},{path:"/order-confirmation",name:"order-confirmation",component:nL},{path:"/comming-soon",name:"comming-soon",component:uL},{path:"/equipment",name:"equipment",component:wL}],scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,behavior:"smooth"}:{top:0,behavior:"smooth"})}}),rh=bv(Uv);rh.use(wv());rh.use(AL);rh.mount("#app");
