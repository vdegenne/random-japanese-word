/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$9=Symbol(),n$8=new Map;class s$5{constructor(t,n){if(this._$cssResult$=!0,n!==e$9)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$8.get(this.cssText);return t$4&&void 0===e&&(n$8.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$8=t=>new s$5("string"==typeof t?t:t+"",e$9),i$6=(e,n)=>{t$4?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$2=t$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$8(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$4;const e$8=window.trustedTypes,r$5=e$8?e$8.emptyScript:"",h$3=window.reactiveElementPolyfillSupport,o$7={toAttribute(t,i){switch(i){case Boolean:t=t?r$5:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$7=(t,i)=>i!==t&&(i==i||t==t),l$5={attribute:!0,type:String,converter:o$7,reflect:!1,hasChanged:n$7};class a$2 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$5){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$5}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$2(i));}else void 0!==i&&s.push(S$2(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$6(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$5){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$7.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$7.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$7)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$2.finalized=!0,a$2.elementProperties=new Map,a$2.elementStyles=[],a$2.shadowRootOptions={mode:"open"},null==h$3||h$3({ReactiveElement:a$2}),(null!==(s$4=globalThis.reactiveElementVersions)&&void 0!==s$4?s$4:globalThis.reactiveElementVersions=[]).push("1.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$3;const i$5=globalThis.trustedTypes,s$3=i$5?i$5.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$7=`lit$${(Math.random()+"").slice(9)}$`,o$6="?"+e$7,n$6=`<${o$6}>`,l$4=document,h$2=(t="")=>l$4.createComment(t),r$4=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a$1=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$2(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$4.createTreeWalker(l$4,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a$1:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a$1?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$6:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$7+y):s+e$7+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$3?s$3.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$7)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$7),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S$1});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$7),s=t.length-1;if(s>0){l.textContent=i$5?i$5.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$2()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$2());}}}else if(8===l.nodeType)if(l.data===o$6)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$7,t+1));)c.push({type:7,index:r}),t+=e$7.length-1;}r++;}}static createElement(t,i){const s=l$4.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$4(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$4).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r$4(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==w&&r$4(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$4.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$2()),this.A(h$2()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S$1{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r$4(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$4(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S$1{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$5?i$5.emptyScript:"";class H extends S$1{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$3=globalThis.litHtmlVersions)&&void 0!==t$3?t$3:globalThis.litHtmlVersions=[]).push("2.2.1");

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$6=Symbol(),n$5=new Map;class s$2{constructor(t,n){if(this._$cssResult$=!0,n!==e$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$2&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$5=t=>new s$2("string"==typeof t?t:t+"",e$6),r$3=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$2(o,e$6)},i$4=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$5(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$1;const e$5=window.trustedTypes,r$2=e$5?e$5.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$4={toAttribute(t,i){switch(i){case Boolean:t=t?r$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$4};class a extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S(i));}else void 0!==i&&s.push(S(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$4(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$3){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$4.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$4.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a}),(null!==(s$1=globalThis.reactiveElementVersions)&&void 0!==s$1?s$1:globalThis.reactiveElementVersions=[]).push("1.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$3;class s extends a{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s});const n$3=globalThis.litElementPolyfillSupport;null==n$3||n$3({LitElement:s});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$2=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$3(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t$1(t){return e$4({...t,state:!0})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$3(e){return o$2({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i$2(i,n){return o$2({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$2(e){return o$2({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$1;null!=(null===(n$1=window.HTMLSlotElement)||void 0===n$1?void 0:n$1.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function addHasRemoveClass(element) {
    return {
        addClass: (className) => {
            element.classList.add(className);
        },
        removeClass: (className) => {
            element.classList.remove(className);
        },
        hasClass: (className) => element.classList.contains(className),
    };
}
const fn = () => { };
const optionsBlock = {
    get passive() {
        return false;
    }
};
document.addEventListener('x', fn, optionsBlock);
document.removeEventListener('x', fn);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class BaseElement extends s {
    click() {
        if (this.mdcRoot) {
            this.mdcRoot.focus();
            this.mdcRoot.click();
            return;
        }
        super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        if (this.mdcFoundationClass) {
            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
        }
    }
    firstUpdated() {
        this.createFoundation();
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Specifies an observer callback that is run when the decorated property
 * changes. The observer receives the current and old value as arguments.
 */
const observer = (observer) => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(proto, propName) => {
    // if we haven't wrapped `updated` in this class, do so
    if (!proto.constructor
        ._observers) {
        proto.constructor._observers = new Map();
        const userUpdated = proto.updated;
        proto.updated = function (changedProperties) {
            userUpdated.call(this, changedProperties);
            changedProperties.forEach((v, k) => {
                const observers = this.constructor
                    ._observers;
                const observer = observers.get(k);
                if (observer !== undefined) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    observer.call(this, this[k], v);
                }
            });
        };
        // clone any existing observers (superclasses)
        // eslint-disable-next-line no-prototype-builtins
    }
    else if (!proto.constructor.hasOwnProperty('_observers')) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = new Map();
        observers.forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v, k) => proto.constructor._observers.set(k, v));
    }
    // set this method
    proto.constructor._observers.set(propName, observer);
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
    CLOSING: 'mdc-snackbar--closing',
    OPEN: 'mdc-snackbar--open',
    OPENING: 'mdc-snackbar--opening',
};
var strings$1 = {
    ACTION_SELECTOR: '.mdc-snackbar__action',
    ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
    CLOSED_EVENT: 'MDCSnackbar:closed',
    CLOSING_EVENT: 'MDCSnackbar:closing',
    DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
    LABEL_SELECTOR: '.mdc-snackbar__label',
    OPENED_EVENT: 'MDCSnackbar:opened',
    OPENING_EVENT: 'MDCSnackbar:opening',
    REASON_ACTION: 'action',
    REASON_DISMISS: 'dismiss',
    SURFACE_SELECTOR: '.mdc-snackbar__surface',
};
var numbers$1 = {
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
    INDETERMINATE: -1,
    MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
    MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
    // These variables need to be kept in sync with the values in _variables.scss.
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
    SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: 1000,
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var OPENING = cssClasses$1.OPENING, OPEN = cssClasses$1.OPEN, CLOSING = cssClasses$1.CLOSING;
var REASON_ACTION = strings$1.REASON_ACTION, REASON_DISMISS = strings$1.REASON_DISMISS;
var MDCSnackbarFoundation = /** @class */ (function (_super) {
    __extends(MDCSnackbarFoundation, _super);
    function MDCSnackbarFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSnackbarFoundation.defaultAdapter), adapter)) || this;
        _this.opened = false;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        _this.autoDismissTimer = 0;
        _this.autoDismissTimeoutMs = numbers$1.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
        _this.closeOnEscape = true;
        return _this;
    }
    Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                announce: function () { return undefined; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                removeClass: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCSnackbarFoundation.prototype.destroy = function () {
        this.clearAutoDismissTimer();
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = 0;
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(OPEN);
        this.adapter.removeClass(CLOSING);
    };
    MDCSnackbarFoundation.prototype.open = function () {
        var _this = this;
        this.clearAutoDismissTimer();
        this.opened = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        this.adapter.announce();
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(OPEN);
            _this.animationTimer = setTimeout(function () {
                var timeoutMs = _this.getTimeoutMs();
                _this.handleAnimationTimerEnd();
                _this.adapter.notifyOpened();
                if (timeoutMs !== numbers$1.INDETERMINATE) {
                    _this.autoDismissTimer = setTimeout(function () {
                        _this.close(REASON_DISMISS);
                    }, timeoutMs);
                }
            }, numbers$1.SNACKBAR_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    MDCSnackbarFoundation.prototype.close = function (reason) {
        var _this = this;
        if (reason === void 0) { reason = ''; }
        if (!this.opened) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        this.clearAutoDismissTimer();
        this.opened = false;
        this.adapter.notifyClosing(reason);
        this.adapter.addClass(cssClasses$1.CLOSING);
        this.adapter.removeClass(cssClasses$1.OPEN);
        this.adapter.removeClass(cssClasses$1.OPENING);
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(reason);
        }, numbers$1.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    };
    MDCSnackbarFoundation.prototype.isOpen = function () {
        return this.opened;
    };
    MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
        return this.autoDismissTimeoutMs;
    };
    MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
        // Use shorter variable names to make the code more readable
        var minValue = numbers$1.MIN_AUTO_DISMISS_TIMEOUT_MS;
        var maxValue = numbers$1.MAX_AUTO_DISMISS_TIMEOUT_MS;
        var indeterminateValue = numbers$1.INDETERMINATE;
        if (timeoutMs === numbers$1.INDETERMINATE || (timeoutMs <= maxValue && timeoutMs >= minValue)) {
            this.autoDismissTimeoutMs = timeoutMs;
        }
        else {
            throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
        }
    };
    MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
        return this.closeOnEscape;
    };
    MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
        this.closeOnEscape = closeOnEscape;
    };
    MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
        var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscapeKey && this.getCloseOnEscape()) {
            this.close(REASON_DISMISS);
        }
    };
    MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
        this.close(REASON_ACTION);
    };
    MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
        this.close(REASON_DISMISS);
    };
    MDCSnackbarFoundation.prototype.clearAutoDismissTimer = function () {
        clearTimeout(this.autoDismissTimer);
        this.autoDismissTimer = 0;
    };
    MDCSnackbarFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(cssClasses$1.OPENING);
        this.adapter.removeClass(cssClasses$1.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCSnackbarFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    return MDCSnackbarFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCSnackbarFoundation$1 = MDCSnackbarFoundation;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=e$1(class extends i$1{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.et){this.et=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(s)}const e=i.element.classList;this.et.forEach((t=>{t in s||(e.remove(t),this.et.delete(t));}));for(const t in s){const i=!!s[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.et.add(t)):(e.remove(t),this.et.delete(t)));}return b}});

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r$1=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return !1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),e(i,t);return !0},o=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t;}while(0===(null==s?void 0:s.size))},n=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(i))break;s.add(i),l$1(t);}};function r(i){void 0!==this._$AN?(o(this),this._$AM=i,n(this)):this._$AM=i;}function h(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)e(n[i],!1),o(n[i]);else null!=n&&(e(n,!1),o(n));else e(this,i);}const l$1=i=>{var t$1,e,o,n;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=r));};class d extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,s){super._$AT(i,t,s),n(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(e(this,i),o(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { ARIA_LIVE_DELAY_MS } = MDCSnackbarFoundation$1.numbers;
/**
 * A lit directive implementation of @material/mdc-snackbar/util.ts#announce,
 * which does some tricks to ensure that snackbar labels will be handled
 * correctly by screen readers.
 *
 * The existing MDC announce util function is difficult to use directly here,
 * because Lit can crash when DOM that it is managing changes outside of its
 * purvue. In this case, we would render our labelText as the text content of
 * the label div, but the MDC announce function then clears that text content,
 * and resets it after a timeout (see below for why). We do the same thing here,
 * but in a way that fits into Lit's lifecycle.
 *
 * TODO(aomarks) Investigate whether this can be simplified; but to do that we
 * first need testing infrastructure to verify that it remains compatible with
 * screen readers. For example, can we just create an entirely new label node
 * every time we open or labelText changes? If not, and the async text/::before
 * swap is strictly required, can we at elast make this directive more generic
 * (e.g. so that we don't hard-code the name of the label class).
 */
class AccessibleSnackbarLabel extends d {
    constructor(partInfo) {
        super(partInfo);
        this.labelEl = null;
        this.timerId = null;
        this.previousPart = null;
        if (partInfo.type !== t.CHILD) {
            throw new Error('AccessibleSnackbarLabel only supports child parts.');
        }
    }
    update(part, [labelText, isOpen]) {
        var _a;
        if (!isOpen) {
            // We never need to do anything if we're closed, even if the label also
            // changed in this batch of changes. We'll fully reset the label text
            // whenever we next open.
            return;
        }
        if (this.labelEl === null) {
            // Create the label element once, the first time we open.
            const wrapperEl = document.createElement('div');
            const labelTemplate = $ `<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;
            x(labelTemplate, wrapperEl);
            const labelEl = wrapperEl.firstElementChild;
            labelEl.textContent = labelText;
            // endNode can't be a Document, so it must have a parent.
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            (_a = part.endNode) === null || _a === void 0 ? void 0 : _a.parentNode.insertBefore(labelEl, part.endNode);
            this.labelEl = labelEl;
            // No need to do anything more for ARIA the first time we open. We just
            // created the element with the current label, so screen readers will
            // detect it fine.
            return labelEl;
        }
        const labelEl = this.labelEl;
        // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing
        // the message twice.
        labelEl.setAttribute('aria-live', 'off');
        // Temporarily clear `textContent` to force a DOM mutation event that will
        // be detected by screen readers. `aria-live` elements are only announced
        // when the element's `textContent` *changes*, so snackbars sent to the
        // browser in the initial HTML response won't be read unless we clear the
        // element's `textContent` first. Similarly, displaying the same snackbar
        // message twice in a row doesn't trigger a DOM mutation event, so screen
        // readers won't announce the second message unless we first clear
        // `textContent`.
        //
        // We have to clear the label text two different ways to make it work in
        // all browsers and screen readers:
        //
        //   1. `textContent = ''` is required for IE11 + JAWS
        //   2. the lit render of `'&nbsp;'` is required for Chrome + JAWS and
        //       NVDA
        //
        // All other browser/screen reader combinations support both methods.
        //
        // The wrapper `<span>` visually hides the space character so that it
        // doesn't cause jank when added/removed. N.B.: Setting `position:
        // absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting
        // the DOM change.
        //
        // This technique has been tested in:
        //
        //   * JAWS 2019:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * NVDA 2018:
        //       - Chrome 70
        //       - Firefox 60 (ESR)
        //       - IE 11
        //   * ChromeVox 53
        labelEl.textContent = '';
        // Updating an element using both Lit's `render` as well as setting its
        // `textContent` can cause later renders to throw because setting
        // `textContent` will remove Lit's part marker comments. This directive
        // needs to set `labelEl`'s `textContent` to trigger the expected screen
        // reader behavior, so it needs to avoid `render` for `labelEl` altogether.
        const spaceSpan = document.createElement('span');
        spaceSpan.style.display = 'inline-block';
        spaceSpan.style.width = '0';
        spaceSpan.style.height = '1px';
        spaceSpan.textContent = '\u00A0'; // U+00A0 is &nbsp;
        labelEl.appendChild(spaceSpan);
        // Prevent visual jank by temporarily displaying the label text in the
        // ::before pseudo-element. CSS generated content is normally announced by
        // screen readers (except in IE 11; see
        // https://tink.uk/accessibility-support-for-css-generated-content/);
        // however, `aria-live` is turned off, so this DOM update will be ignored
        // by screen readers.
        labelEl.setAttribute('data-mdc-snackbar-label-text', labelText);
        if (this.timerId !== null) {
            // We hadn't yet swapped the textContent back in since the last time we
            // opened or changed the label. Cancel that task so we don't clobber the
            // new label.
            clearTimeout(this.timerId);
        }
        this.timerId = window.setTimeout(() => {
            this.timerId = null;
            // Allow screen readers to announce changes to the DOM again.
            labelEl.setAttribute('aria-live', 'polite');
            // Remove the message from the ::before pseudo-element.
            labelEl.removeAttribute('data-mdc-snackbar-label-text');
            // Restore the original label text, which will be announced by
            // screen readers.
            labelEl.textContent = labelText;
            this.setValue(this.labelEl);
        }, ARIA_LIVE_DELAY_MS);
        return labelEl;
    }
    render(labelText, isOpen) {
        if (!isOpen) {
            return $ ``;
        }
        return $ `
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${labelText}</div>`;
    }
}
const accessibleSnackbarLabel = e$1(AccessibleSnackbarLabel);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { OPENING_EVENT, OPENED_EVENT, CLOSING_EVENT, CLOSED_EVENT, } = MDCSnackbarFoundation$1.strings;
class SnackbarBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSnackbarFoundation$1;
        this.open = false;
        this.timeoutMs = 5000;
        this.closeOnEscape = false;
        this.labelText = '';
        this.stacked = false;
        this.leading = false;
        this.reason = '';
    }
    render() {
        const classes = {
            'mdc-snackbar--stacked': this.stacked,
            'mdc-snackbar--leading': this.leading,
        };
        return $ `
      <div class="mdc-snackbar ${o$1(classes)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${accessibleSnackbarLabel(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { announce: () => {
                /* We handle announce ourselves with the accessible directive. */
            }, notifyClosed: (reason) => {
                this.dispatchEvent(new CustomEvent(CLOSED_EVENT, { bubbles: true, cancelable: true, detail: { reason: reason } }));
            }, notifyClosing: (reason) => {
                this.open = false;
                this.dispatchEvent(new CustomEvent(CLOSING_EVENT, { bubbles: true, cancelable: true, detail: { reason: reason } }));
            }, notifyOpened: () => {
                this.dispatchEvent(new CustomEvent(OPENED_EVENT, { bubbles: true, cancelable: true }));
            }, notifyOpening: () => {
                this.open = true;
                this.dispatchEvent(new CustomEvent(OPENING_EVENT, { bubbles: true, cancelable: true }));
            } });
    }
    /** @export */
    show() {
        this.open = true;
    }
    /** @export */
    close(reason = '') {
        this.reason = reason;
        this.open = false;
    }
    firstUpdated() {
        super.firstUpdated();
        if (this.open) {
            this.mdcFoundation.open();
        }
    }
    _handleKeydown(e) {
        this.mdcFoundation.handleKeyDown(e);
    }
    _handleActionClick(e) {
        this.mdcFoundation.handleActionButtonClick(e);
    }
    _handleDismissClick(e) {
        this.mdcFoundation.handleActionIconClick(e);
    }
}
__decorate([
    i$2('.mdc-snackbar')
], SnackbarBase.prototype, "mdcRoot", void 0);
__decorate([
    i$2('.mdc-snackbar__label')
], SnackbarBase.prototype, "labelElement", void 0);
__decorate([
    e$4({ type: Boolean, reflect: true }),
    observer(function (value) {
        if (this.mdcFoundation) {
            if (value) {
                this.mdcFoundation.open();
            }
            else {
                this.mdcFoundation.close(this.reason);
                this.reason = '';
            }
        }
    })
], SnackbarBase.prototype, "open", void 0);
__decorate([
    observer(function (value) {
        this.mdcFoundation.setTimeoutMs(value);
    }),
    e$4({ type: Number })
], SnackbarBase.prototype, "timeoutMs", void 0);
__decorate([
    observer(function (value) {
        this.mdcFoundation.setCloseOnEscape(value);
    }),
    e$4({ type: Boolean })
], SnackbarBase.prototype, "closeOnEscape", void 0);
__decorate([
    e$4({ type: String })
], SnackbarBase.prototype, "labelText", void 0);
__decorate([
    e$4({ type: Boolean })
], SnackbarBase.prototype, "stacked", void 0);
__decorate([
    e$4({ type: Boolean })
], SnackbarBase.prototype, "leading", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$4 = r$3 `.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Snackbar = class Snackbar extends SnackbarBase {
};
Snackbar.styles = [styles$4];
Snackbar = __decorate([
    n$2('mwc-snackbar')
], Snackbar);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = r$3 `:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Icon = class Icon extends s {
    /** @soyTemplate */
    render() {
        return $ `<span><slot></slot></span>`;
    }
};
Icon.styles = [styles$3];
Icon = __decorate([
    n$2('mwc-icon')
], Icon);

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function matches(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = '0';
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function () {
            _this.activationAnimationHasEnded = true;
            _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function (e) {
            _this.activateImpl(e);
        };
        _this.deactivateHandler = function () {
            _this.deactivateImpl();
        };
        _this.focusHandler = function () {
            _this.handleFocus();
        };
        _this.blurHandler = function () {
            _this.handleBlur();
        };
        _this.resizeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple()) {
            if (this.activationTimer) {
                clearTimeout(this.activationTimer);
                this.activationTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer) {
                clearTimeout(this.fgDeactivationRemovalTimer);
                this.fgDeactivationRemovalTimer = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars();
            });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activateImpl(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivateImpl();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame) {
            cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function () {
            _this.layoutInternal();
            _this.layoutFrame = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers = function (supportsPressRipple) {
        var e_1, _a;
        if (supportsPressRipple) {
            try {
                for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerInteractionHandler(evtType, this.activateHandler);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler);
        this.adapter.registerInteractionHandler('blur', this.blurHandler);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers = function (evt) {
        var e_2, _a;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler);
        }
        else {
            try {
                for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
                    var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
                    this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers = function () {
        var e_3, _a;
        try {
            for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers = function () {
        var e_4, _a;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler);
        try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
                var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
                this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    MDCRippleFoundation.prototype.removeCssVars = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activateImpl = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState = _this.defaultActivationState();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function () {
            _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates = function () {
        var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame.width / 2,
                y: this.frame.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize / 2),
            y: startPoint.y - (this.initialSize / 2),
        };
        var endPoint = {
            x: (this.frame.width / 2) - (this.initialSize / 2),
            y: (this.frame.height / 2) - (this.initialSize / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
            this.rmBoundedActivationClasses();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState = function () {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivateImpl = function () {
        var _this = this;
        var activationState = this.activationState;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
                _this.animateDeactivation(state);
            });
            this.resetActivationState();
        }
        else {
            this.deregisterDeactivationHandlers();
            requestAnimationFrame(function () {
                _this.activationState.hasDeactivationUXRun = true;
                _this.animateDeactivation(state);
                _this.resetActivationState();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal = function () {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize = initialSize - 1;
        }
        else {
            this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords = {
                left: Math.round((this.frame.width / 2) - (this.initialSize / 2)),
                top: Math.round((this.frame.height / 2) - (this.initialSize / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var MDCRippleFoundation$1 = MDCRippleFoundation;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=e$1(class extends i$1{constructor(t$1){var e;if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||(null===(e=t$1.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ct){this.ct=new Set;for(const t in r)this.ct.add(t);return this.render(r)}this.ct.forEach((t=>{null==r[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="");}));for(const t in r){const e=r[t];null!=e&&(this.ct.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e);}return b}});

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class RippleBase extends BaseElement {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.activated = false;
        this.selected = false;
        this.internalUseStateLayerCustomProperties = false;
        this.hovering = false;
        this.bgFocused = false;
        this.fgActivation = false;
        this.fgDeactivation = false;
        this.fgScale = '';
        this.fgSize = '';
        this.translateStart = '';
        this.translateEnd = '';
        this.leftPos = '';
        this.topPos = '';
        this.mdcFoundationClass = MDCRippleFoundation$1;
    }
    get isActive() {
        return matches(this.parentElement || this, ':active');
    }
    createAdapter() {
        return {
            browserSupportsCssVars: () => true,
            isUnbounded: () => this.unbounded,
            isSurfaceActive: () => this.isActive,
            isSurfaceDisabled: () => this.disabled,
            addClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = true;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = true;
                        break;
                }
            },
            removeClass: (className) => {
                switch (className) {
                    case 'mdc-ripple-upgraded--background-focused':
                        this.bgFocused = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-activation':
                        this.fgActivation = false;
                        break;
                    case 'mdc-ripple-upgraded--foreground-deactivation':
                        this.fgDeactivation = false;
                        break;
                }
            },
            containsEventTarget: () => true,
            registerInteractionHandler: () => undefined,
            deregisterInteractionHandler: () => undefined,
            registerDocumentInteractionHandler: () => undefined,
            deregisterDocumentInteractionHandler: () => undefined,
            registerResizeHandler: () => undefined,
            deregisterResizeHandler: () => undefined,
            updateCssVariable: (varName, value) => {
                switch (varName) {
                    case '--mdc-ripple-fg-scale':
                        this.fgScale = value;
                        break;
                    case '--mdc-ripple-fg-size':
                        this.fgSize = value;
                        break;
                    case '--mdc-ripple-fg-translate-end':
                        this.translateEnd = value;
                        break;
                    case '--mdc-ripple-fg-translate-start':
                        this.translateStart = value;
                        break;
                    case '--mdc-ripple-left':
                        this.leftPos = value;
                        break;
                    case '--mdc-ripple-top':
                        this.topPos = value;
                        break;
                }
            },
            computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
            getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        };
    }
    startPress(ev) {
        this.waitForFoundation(() => {
            this.mdcFoundation.activate(ev);
        });
    }
    endPress() {
        this.waitForFoundation(() => {
            this.mdcFoundation.deactivate();
        });
    }
    startFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleFocus();
        });
    }
    endFocus() {
        this.waitForFoundation(() => {
            this.mdcFoundation.handleBlur();
        });
    }
    startHover() {
        this.hovering = true;
    }
    endHover() {
        this.hovering = false;
    }
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    waitForFoundation(fn) {
        if (this.mdcFoundation) {
            fn();
        }
        else {
            this.updateComplete.then(fn);
        }
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            // stop hovering when ripple is disabled to prevent a stuck "hover" state
            // When re-enabled, the outer component will get a `mouseenter` event on
            // the first movement, which will call `startHover()`
            if (this.disabled) {
                this.endHover();
            }
        }
        super.update(changedProperties);
    }
    /** @soyTemplate */
    render() {
        const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
        const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
        /** @classMap */
        const classes = {
            'mdc-ripple-surface--accent': this.accent,
            'mdc-ripple-surface--primary--activated': shouldActivateInPrimary,
            'mdc-ripple-surface--accent--activated': this.accent && this.activated,
            'mdc-ripple-surface--primary--selected': shouldSelectInPrimary,
            'mdc-ripple-surface--accent--selected': this.accent && this.selected,
            'mdc-ripple-surface--disabled': this.disabled,
            'mdc-ripple-surface--hover': this.hovering,
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--selected': this.selected,
            'mdc-ripple-upgraded--background-focused': this.bgFocused,
            'mdc-ripple-upgraded--foreground-activation': this.fgActivation,
            'mdc-ripple-upgraded--foreground-deactivation': this.fgDeactivation,
            'mdc-ripple-upgraded--unbounded': this.unbounded,
            'mdc-ripple-surface--internal-use-state-layer-custom-properties': this.internalUseStateLayerCustomProperties,
        };
        return $ `
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$1(classes)}"
          style="${i({
            '--mdc-ripple-fg-scale': this.fgScale,
            '--mdc-ripple-fg-size': this.fgSize,
            '--mdc-ripple-fg-translate-end': this.translateEnd,
            '--mdc-ripple-fg-translate-start': this.translateStart,
            '--mdc-ripple-left': this.leftPos,
            '--mdc-ripple-top': this.topPos,
        })}"></div>`;
    }
}
__decorate([
    i$2('.mdc-ripple-surface')
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
    e$4({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "hovering", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
    t$1()
], RippleBase.prototype, "topPos", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$2 = r$3 `.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Ripple = class Ripple extends RippleBase {
};
Ripple.styles = [styles$2];
Ripple = __decorate([
    n$2('mwc-ripple')
], Ripple);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TypeScript version of the decorator
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html#property-decorators
 */
function tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor) {
        /**
         * lit uses internal properties with two leading underscores to
         * provide storage for accessors
         */
        const litInternalPropertyKey = `__${name}`;
        descriptor =
            constructor.getPropertyDescriptor(name, litInternalPropertyKey);
        if (!descriptor) {
            throw new Error('@ariaProperty must be used after a @property decorator');
        }
    }
    // descriptor must exist at this point, reassign so typescript understands
    const propDescriptor = descriptor;
    let attribute = '';
    if (!propDescriptor.set) {
        throw new Error(`@ariaProperty requires a setter for ${name}`);
    }
    // TODO(b/202853219): Remove this check when internal tooling is
    // compatible
    // tslint:disable-next-line:no-any bail if applied to internal generated class
    if (prototype.dispatchWizEvent) {
        return descriptor;
    }
    const wrappedDescriptor = {
        configurable: true,
        enumerable: true,
        set(value) {
            if (attribute === '') {
                const options = constructor.getPropertyOptions(name);
                // if attribute is not a string, use `name` instead
                attribute =
                    typeof options.attribute === 'string' ? options.attribute : name;
            }
            if (this.hasAttribute(attribute)) {
                this.removeAttribute(attribute);
            }
            propDescriptor.set.call(this, value);
        }
    };
    if (propDescriptor.get) {
        wrappedDescriptor.get = function () {
            return propDescriptor.get.call(this);
        };
    }
    return wrappedDescriptor;
}
/**
 * A property decorator proxies an aria attribute to an internal node
 *
 * This decorator is only intended for use with ARIA attributes, such as `role`
 * and `aria-label` due to screenreader needs.
 *
 * Upon first render, `@ariaProperty` will remove the attribute from the host
 * element to prevent screenreaders from reading the host instead of the
 * internal node.
 *
 * This decorator should only be used for non-Symbol public fields decorated
 * with `@property`, or on a setter with an optional getter.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @ariaProperty
 *   @property({ type: String, attribute: 'aria-label' })
 *   ariaLabel!: string;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function ariaProperty(protoOrDescriptor, name, 
// tslint:disable-next-line:no-any any is required as a return type from decorators
descriptor) {
    if (name !== undefined) {
        return tsDecorator(protoOrDescriptor, name, descriptor);
    }
    else {
        throw new Error('@ariaProperty only supports TypeScript Decorators');
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
class RippleHandlers {
    constructor(
    /** Function that returns a `mwc-ripple` */
    rippleFn) {
        this.startPress = (ev) => {
            rippleFn().then((r) => {
                r && r.startPress(ev);
            });
        };
        this.endPress = () => {
            rippleFn().then((r) => {
                r && r.endPress();
            });
        };
        this.startFocus = () => {
            rippleFn().then((r) => {
                r && r.startFocus();
            });
        };
        this.endFocus = () => {
            rippleFn().then((r) => {
                r && r.endFocus();
            });
        };
        this.startHover = () => {
            rippleFn().then((r) => {
                r && r.startHover();
            });
        };
        this.endHover = () => {
            rippleFn().then((r) => {
                r && r.endHover();
            });
        };
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:w;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class ButtonBase extends s {
    constructor() {
        super(...arguments);
        this.raised = false;
        this.unelevated = false;
        this.outlined = false;
        this.dense = false;
        this.disabled = false;
        this.trailingIcon = false;
        this.fullwidth = false;
        this.icon = '';
        this.label = '';
        this.expandContent = false;
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderOverlay() {
        return $ ``;
    }
    /** @soyTemplate */
    renderRipple() {
        const filled = this.raised || this.unelevated;
        return this.shouldRenderRipple ?
            $ `<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    getRenderClasses() {
        return {
            'mdc-button--raised': this.raised,
            'mdc-button--unelevated': this.unelevated,
            'mdc-button--outlined': this.outlined,
            'mdc-button--dense': this.dense,
        };
    }
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */
    render() {
        return $ `
      <button
          id="button"
          class="mdc-button ${o$1(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o$1({
            flex: this.expandContent
        })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
          </slot>
        </span>
      </button>`;
    }
    /** @soyTemplate */
    renderIcon() {
        return $ `
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
    }
    handleRippleActivate(evt) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(evt);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
ButtonBase.shadowRootOptions = { mode: 'open', delegatesFocus: true };
__decorate([
    ariaProperty,
    e$4({ type: String, attribute: 'aria-haspopup' })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
    e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
    e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
    e$4({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
    e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
    e$4({ type: Boolean, attribute: 'trailingicon' })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
    e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
    e$4({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
    e$4({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
    e$4({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
    i$2('#button')
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$2('mwc-ripple')
], ButtonBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$3({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = r$3 `.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let Button = class Button extends ButtonBase {
};
Button.styles = [styles$1];
Button = __decorate([
    n$2('mwc-button')
], Button);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
class IconButtonBase extends s {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.icon = '';
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? $ `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` :
            '';
    }
    focus() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.startFocus();
            buttonElement.focus();
        }
    }
    blur() {
        const buttonElement = this.buttonElement;
        if (buttonElement) {
            this.rippleHandlers.endFocus();
            buttonElement.blur();
        }
    }
    /** @soyTemplate */
    render() {
        return $ `<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`;
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
__decorate([
    e$4({ type: Boolean, reflect: true })
], IconButtonBase.prototype, "disabled", void 0);
__decorate([
    e$4({ type: String })
], IconButtonBase.prototype, "icon", void 0);
__decorate([
    ariaProperty,
    e$4({ type: String, attribute: 'aria-label' })
], IconButtonBase.prototype, "ariaLabel", void 0);
__decorate([
    ariaProperty,
    e$4({ type: String, attribute: 'aria-haspopup' })
], IconButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
    i$2('button')
], IconButtonBase.prototype, "buttonElement", void 0);
__decorate([
    e$2('mwc-ripple')
], IconButtonBase.prototype, "ripple", void 0);
__decorate([
    t$1()
], IconButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    e$3({ passive: true })
], IconButtonBase.prototype, "handleRippleMouseDown", null);
__decorate([
    e$3({ passive: true })
], IconButtonBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = r$3 `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let IconButton = class IconButton extends IconButtonBase {
};
IconButton.styles = [styles];
IconButton = __decorate([
    n$2('mwc-icon-button')
], IconButton);

var data = [
	{
		rank: 1,
		frequency: 41309.5,
		lemma: "の"
	},
	{
		rank: 2,
		frequency: 23509.54,
		lemma: "に"
	},
	{
		rank: 3,
		frequency: 22216.8,
		lemma: "は"
	},
	{
		rank: 4,
		frequency: 20431.93,
		lemma: "て"
	},
	{
		rank: 5,
		frequency: 20326.59,
		lemma: "を"
	},
	{
		rank: 6,
		frequency: 20110.69,
		lemma: "が"
	},
	{
		rank: 7,
		frequency: 19235.55,
		lemma: "だ"
	},
	{
		rank: 8,
		frequency: 17292.36,
		lemma: "た"
	},
	{
		rank: 9,
		frequency: 16841.17,
		lemma: "する"
	},
	{
		rank: 10,
		frequency: 15095.29,
		lemma: "と"
	},
	{
		rank: 11,
		frequency: 9604.49,
		lemma: "ます"
	},
	{
		rank: 12,
		frequency: 9537.75,
		lemma: "で"
	},
	{
		rank: 13,
		frequency: 8189,
		lemma: "ない"
	},
	{
		rank: 14,
		frequency: 8140.22,
		lemma: "いる"
	},
	{
		rank: 15,
		frequency: 7900.34,
		lemma: "も"
	},
	{
		rank: 16,
		frequency: 6766.19,
		lemma: "ある"
	},
	{
		rank: 17,
		frequency: 6001.95,
		lemma: "・"
	},
	{
		rank: 18,
		frequency: 5780.62,
		lemma: "です"
	},
	{
		rank: 19,
		frequency: 5690.07,
		lemma: "「"
	},
	{
		rank: 20,
		frequency: 5672.68,
		lemma: "」"
	},
	{
		rank: 21,
		frequency: 5451.05,
		lemma: "こと"
	},
	{
		rank: 22,
		frequency: 5444.29,
		lemma: "e"
	},
	{
		rank: 23,
		frequency: 4744.78,
		lemma: "か"
	},
	{
		rank: 24,
		frequency: 4590.55,
		lemma: "o"
	},
	{
		rank: 25,
		frequency: 4553.18,
		lemma: "a"
	},
	{
		rank: 26,
		frequency: 4248.5,
		lemma: "t"
	},
	{
		rank: 27,
		frequency: 4193.98,
		lemma: "なる"
	},
	{
		rank: 28,
		frequency: 4188.45,
		lemma: "れる"
	},
	{
		rank: 29,
		frequency: 4055.86,
		lemma: "から"
	},
	{
		rank: 30,
		frequency: 3689.19,
		lemma: "）"
	},
	{
		rank: 31,
		frequency: 3652.9,
		lemma: "（"
	},
	{
		rank: 32,
		frequency: 3430.63,
		lemma: "i"
	},
	{
		rank: 33,
		frequency: 3375.51,
		lemma: "n"
	},
	{
		rank: 34,
		frequency: 2968.67,
		lemma: "r"
	},
	{
		rank: 35,
		frequency: 2834.08,
		lemma: "s"
	},
	{
		rank: 36,
		frequency: 2702.29,
		lemma: "ん"
	},
	{
		rank: 37,
		frequency: 2691.51,
		lemma: "よう"
	},
	{
		rank: 38,
		frequency: 2496.04,
		lemma: "いう"
	},
	{
		rank: 39,
		frequency: 2463.71,
		lemma: "う"
	},
	{
		rank: 40,
		frequency: 2415.25,
		lemma: "人"
	},
	{
		rank: 41,
		frequency: 2275.62,
		lemma: "m"
	},
	{
		rank: 42,
		frequency: 2255.67,
		lemma: "この"
	},
	{
		rank: 43,
		frequency: 2190.45,
		lemma: "という"
	},
	{
		rank: 44,
		frequency: 2131.88,
		lemma: "思う"
	},
	{
		rank: 45,
		frequency: 2127.42,
		lemma: "その"
	},
	{
		rank: 46,
		frequency: 2108.52,
		lemma: "l"
	},
	{
		rank: 47,
		frequency: 2057.33,
		lemma: "的"
	},
	{
		rank: 48,
		frequency: 1984.31,
		lemma: "c"
	},
	{
		rank: 49,
		frequency: 1950.65,
		lemma: "年"
	},
	{
		rank: 50,
		frequency: 1942.04,
		lemma: "日"
	},
	{
		rank: 51,
		frequency: 1923.23,
		lemma: "！"
	},
	{
		rank: 52,
		frequency: 1806.37,
		lemma: "h"
	},
	{
		rank: 53,
		frequency: 1769.37,
		lemma: "私"
	},
	{
		rank: 54,
		frequency: 1757.94,
		lemma: "もの"
	},
	{
		rank: 55,
		frequency: 1734.3,
		lemma: "や"
	},
	{
		rank: 56,
		frequency: 1732.41,
		lemma: "ば"
	},
	{
		rank: 57,
		frequency: 1641.84,
		lemma: "d"
	},
	{
		rank: 58,
		frequency: 1516.78,
		lemma: "？"
	},
	{
		rank: 59,
		frequency: 1515.66,
		lemma: "p"
	},
	{
		rank: 60,
		frequency: 1479.29,
		lemma: "それ"
	},
	{
		rank: 61,
		frequency: 1459.64,
		lemma: "u"
	},
	{
		rank: 62,
		frequency: 1451.45,
		lemma: "者"
	},
	{
		rank: 63,
		frequency: 1437.45,
		lemma: "できる"
	},
	{
		rank: 64,
		frequency: 1428.85,
		lemma: "これ"
	},
	{
		rank: 65,
		frequency: 1399.05,
		lemma: "#"
	},
	{
		rank: 66,
		frequency: 1362.46,
		lemma: "|"
	},
	{
		rank: 67,
		frequency: 1263.36,
		lemma: "言う"
	},
	{
		rank: 68,
		frequency: 1248.2,
		lemma: "b"
	},
	{
		rank: 69,
		frequency: 1245.81,
		lemma: "S"
	},
	{
		rank: 70,
		frequency: 1245.62,
		lemma: "y"
	},
	{
		rank: 71,
		frequency: 1238.3,
		lemma: "くる"
	},
	{
		rank: 72,
		frequency: 1193.14,
		lemma: "月"
	},
	{
		rank: 73,
		frequency: 1187.18,
		lemma: "C"
	},
	{
		rank: 74,
		frequency: 1186.32,
		lemma: "として"
	},
	{
		rank: 75,
		frequency: 1174.8,
		lemma: "さん"
	},
	{
		rank: 76,
		frequency: 1164.49,
		lemma: "T"
	},
	{
		rank: 77,
		frequency: 1159.85,
		lemma: "A"
	},
	{
		rank: 78,
		frequency: 1149.99,
		lemma: "："
	},
	{
		rank: 79,
		frequency: 1136.97,
		lemma: "まで"
	},
	{
		rank: 80,
		frequency: 1126.11,
		lemma: "たい"
	},
	{
		rank: 81,
		frequency: 1112.01,
		lemma: "g"
	},
	{
		rank: 82,
		frequency: 1110.21,
		lemma: "w"
	},
	{
		rank: 83,
		frequency: 1100.39,
		lemma: "など"
	},
	{
		rank: 84,
		frequency: 1092.65,
		lemma: "k"
	},
	{
		rank: 85,
		frequency: 1089.02,
		lemma: "中"
	},
	{
		rank: 86,
		frequency: 1087.64,
		lemma: "P"
	},
	{
		rank: 87,
		frequency: 1077.28,
		lemma: "られる"
	},
	{
		rank: 88,
		frequency: 1070.51,
		lemma: "お"
	},
	{
		rank: 89,
		frequency: 1022.92,
		lemma: "ね"
	},
	{
		rank: 90,
		frequency: 1022.88,
		lemma: "，"
	},
	{
		rank: 91,
		frequency: 1015.61,
		lemma: "…"
	},
	{
		rank: 92,
		frequency: 1000.99,
		lemma: "へ"
	},
	{
		rank: 93,
		frequency: 982.69,
		lemma: "見る"
	},
	{
		rank: 94,
		frequency: 980.59,
		lemma: "ため"
	},
	{
		rank: 95,
		frequency: 963.62,
		lemma: "てる"
	},
	{
		rank: 96,
		frequency: 948.8,
		lemma: "M"
	},
	{
		rank: 97,
		frequency: 940.51,
		lemma: "そう"
	},
	{
		rank: 98,
		frequency: 925.92,
		lemma: "日本"
	},
	{
		rank: 99,
		frequency: 924.53,
		lemma: "おる"
	},
	{
		rank: 100,
		frequency: 915.56,
		lemma: "一"
	},
	{
		rank: 101,
		frequency: 898.33,
		lemma: "ので"
	},
	{
		rank: 102,
		frequency: 895.11,
		lemma: "いく"
	},
	{
		rank: 103,
		frequency: 885.3,
		lemma: "だけ"
	},
	{
		rank: 104,
		frequency: 877.59,
		lemma: "何"
	},
	{
		rank: 105,
		frequency: 875.29,
		lemma: "よ"
	},
	{
		rank: 106,
		frequency: 873.44,
		lemma: "I"
	},
	{
		rank: 107,
		frequency: 840.65,
		lemma: "自分"
	},
	{
		rank: 108,
		frequency: 839.58,
		lemma: "しまう"
	},
	{
		rank: 109,
		frequency: 838.17,
		lemma: "について"
	},
	{
		rank: 110,
		frequency: 834.18,
		lemma: "R"
	},
	{
		rank: 111,
		frequency: 829.72,
		lemma: "方"
	},
	{
		rank: 112,
		frequency: 825.32,
		lemma: "E"
	},
	{
		rank: 113,
		frequency: 819.66,
		lemma: "時"
	},
	{
		rank: 114,
		frequency: 799.41,
		lemma: "D"
	},
	{
		rank: 115,
		frequency: 791.48,
		lemma: "ぬ"
	},
	{
		rank: 116,
		frequency: 782.05,
		lemma: "問題"
	},
	{
		rank: 117,
		frequency: 772.03,
		lemma: "考える"
	},
	{
		rank: 118,
		frequency: 766.23,
		lemma: "O"
	},
	{
		rank: 119,
		frequency: 748.27,
		lemma: "せる"
	},
	{
		rank: 120,
		frequency: 737.44,
		lemma: "また"
	},
	{
		rank: 121,
		frequency: 734.08,
		lemma: "N"
	},
	{
		rank: 122,
		frequency: 725.64,
		lemma: "B"
	},
	{
		rank: 123,
		frequency: 716.75,
		lemma: "f"
	},
	{
		rank: 124,
		frequency: 705.48,
		lemma: "『"
	},
	{
		rank: 125,
		frequency: 703.35,
		lemma: "今"
	},
	{
		rank: 126,
		frequency: 702.19,
		lemma: "』"
	},
	{
		rank: 127,
		frequency: 699.98,
		lemma: "みる"
	},
	{
		rank: 128,
		frequency: 698.53,
		lemma: "L"
	},
	{
		rank: 129,
		frequency: 695.44,
		lemma: "でも"
	},
	{
		rank: 130,
		frequency: 675.63,
		lemma: "やる"
	},
	{
		rank: 131,
		frequency: 661.99,
		lemma: "わけ"
	},
	{
		rank: 132,
		frequency: 650.23,
		lemma: "ござる"
	},
	{
		rank: 133,
		frequency: 642.6,
		lemma: "たち"
	},
	{
		rank: 134,
		frequency: 638.75,
		lemma: "ところ"
	},
	{
		rank: 135,
		frequency: 633.91,
		lemma: "．"
	},
	{
		rank: 136,
		frequency: 627.78,
		lemma: "さ"
	},
	{
		rank: 137,
		frequency: 615.98,
		lemma: "いい"
	},
	{
		rank: 138,
		frequency: 596.98,
		lemma: "って"
	},
	{
		rank: 139,
		frequency: 590.87,
		lemma: "前"
	},
	{
		rank: 140,
		frequency: 585.7,
		lemma: "第"
	},
	{
		rank: 141,
		frequency: 580.14,
		lemma: "たり"
	},
	{
		rank: 142,
		frequency: 577.58,
		lemma: "性"
	},
	{
		rank: 143,
		frequency: 568.04,
		lemma: "行く"
	},
	{
		rank: 144,
		frequency: 563.69,
		lemma: "より"
	},
	{
		rank: 145,
		frequency: 561.3,
		lemma: "そして"
	},
	{
		rank: 146,
		frequency: 560.8,
		lemma: "けど"
	},
	{
		rank: 147,
		frequency: 559.79,
		lemma: "どう"
	},
	{
		rank: 148,
		frequency: 551.97,
		lemma: "出る"
	},
	{
		rank: 149,
		frequency: 550.77,
		lemma: "時間"
	},
	{
		rank: 150,
		frequency: 549.7,
		lemma: "会"
	},
	{
		rank: 151,
		frequency: 537.33,
		lemma: "書く"
	},
	{
		rank: 152,
		frequency: 534.03,
		lemma: "円"
	},
	{
		rank: 153,
		frequency: 533.8,
		lemma: "二"
	},
	{
		rank: 154,
		frequency: 533.04,
		lemma: "し"
	},
	{
		rank: 155,
		frequency: 527.77,
		lemma: "場合"
	},
	{
		rank: 156,
		frequency: 526.2,
		lemma: "持つ"
	},
	{
		rank: 157,
		frequency: 515.52,
		lemma: "必要"
	},
	{
		rank: 158,
		frequency: 508.95,
		lemma: "情報"
	},
	{
		rank: 159,
		frequency: 501.01,
		lemma: "○"
	},
	{
		rank: 160,
		frequency: 495.56,
		lemma: "しかし"
	},
	{
		rank: 161,
		frequency: 492.98,
		lemma: "F"
	},
	{
		rank: 162,
		frequency: 484.8,
		lemma: "v"
	},
	{
		rank: 163,
		frequency: 481.44,
		lemma: "とき"
	},
	{
		rank: 164,
		frequency: 480.73,
		lemma: "コメント"
	},
	{
		rank: 165,
		frequency: 478.1,
		lemma: "化"
	},
	{
		rank: 166,
		frequency: 471.03,
		lemma: "上"
	},
	{
		rank: 167,
		frequency: 465.43,
		lemma: "事"
	},
	{
		rank: 168,
		frequency: 464.3,
		lemma: "W"
	},
	{
		rank: 169,
		frequency: 464.22,
		lemma: "使う"
	},
	{
		rank: 170,
		frequency: 462.43,
		lemma: "行う"
	},
	{
		rank: 171,
		frequency: 459.92,
		lemma: "な"
	},
	{
		rank: 172,
		frequency: 455.18,
		lemma: "ご"
	},
	{
		rank: 173,
		frequency: 453.58,
		lemma: "話"
	},
	{
		rank: 174,
		frequency: 453.14,
		lemma: "くれる"
	},
	{
		rank: 175,
		frequency: 451.09,
		lemma: "U"
	},
	{
		rank: 176,
		frequency: 446.16,
		lemma: "ながら"
	},
	{
		rank: 177,
		frequency: 442.95,
		lemma: "よい"
	},
	{
		rank: 178,
		frequency: 442.7,
		lemma: "H"
	},
	{
		rank: 179,
		frequency: 441.97,
		lemma: "本"
	},
	{
		rank: 180,
		frequency: 432.09,
		lemma: "じゃ"
	},
	{
		rank: 181,
		frequency: 430.8,
		lemma: "ここ"
	},
	{
		rank: 182,
		frequency: 429.1,
		lemma: "分"
	},
	{
		rank: 183,
		frequency: 426.14,
		lemma: "十"
	},
	{
		rank: 184,
		frequency: 425.43,
		lemma: "目"
	},
	{
		rank: 185,
		frequency: 424.65,
		lemma: "多い"
	},
	{
		rank: 186,
		frequency: 421.45,
		lemma: "知る"
	},
	{
		rank: 187,
		frequency: 420.74,
		lemma: "■"
	},
	{
		rank: 188,
		frequency: 418.19,
		lemma: "G"
	},
	{
		rank: 189,
		frequency: 412.67,
		lemma: "今日"
	},
	{
		rank: 190,
		frequency: 411.1,
		lemma: "良い"
	},
	{
		rank: 191,
		frequency: 408.98,
		lemma: "関係"
	},
	{
		rank: 192,
		frequency: 404.21,
		lemma: "委員"
	},
	{
		rank: 193,
		frequency: 403.3,
		lemma: "後"
	},
	{
		rank: 194,
		frequency: 401.69,
		lemma: "かも"
	},
	{
		rank: 195,
		frequency: 398.34,
		lemma: "家"
	},
	{
		rank: 196,
		frequency: 394.48,
		lemma: "そういう"
	},
	{
		rank: 197,
		frequency: 392.28,
		lemma: "聞く"
	},
	{
		rank: 198,
		frequency: 389.5,
		lemma: "世界"
	},
	{
		rank: 199,
		frequency: 389.34,
		lemma: "気"
	},
	{
		rank: 200,
		frequency: 383.39,
		lemma: "点"
	},
	{
		rank: 201,
		frequency: 382.65,
		lemma: "万"
	},
	{
		rank: 202,
		frequency: 381.6,
		lemma: "べし"
	},
	{
		rank: 203,
		frequency: 381.48,
		lemma: "】"
	},
	{
		rank: 204,
		frequency: 380.55,
		lemma: "【"
	},
	{
		rank: 205,
		frequency: 379.18,
		lemma: "もう"
	},
	{
		rank: 206,
		frequency: 379.03,
		lemma: "わかる"
	},
	{
		rank: 207,
		frequency: 377.46,
		lemma: "バック"
	},
	{
		rank: 208,
		frequency: 375.34,
		lemma: "社会"
	},
	{
		rank: 209,
		frequency: 375.02,
		lemma: "読む"
	},
	{
		rank: 210,
		frequency: 372.01,
		lemma: "入る"
	},
	{
		rank: 211,
		frequency: 371.13,
		lemma: "〜"
	},
	{
		rank: 212,
		frequency: 369.72,
		lemma: "来る"
	},
	{
		rank: 213,
		frequency: 364.89,
		lemma: "トラック"
	},
	{
		rank: 214,
		frequency: 360.33,
		lemma: "によって"
	},
	{
		rank: 215,
		frequency: 360.12,
		lemma: "仕事"
	},
	{
		rank: 216,
		frequency: 358.01,
		lemma: "同じ"
	},
	{
		rank: 217,
		frequency: 355.9,
		lemma: "数"
	},
	{
		rank: 218,
		frequency: 354.41,
		lemma: "記事"
	},
	{
		rank: 219,
		frequency: 346.64,
		lemma: "いただく"
	},
	{
		rank: 220,
		frequency: 344.83,
		lemma: "彼"
	},
	{
		rank: 221,
		frequency: 344.38,
		lemma: "大"
	},
	{
		rank: 222,
		frequency: 343.9,
		lemma: "国"
	},
	{
		rank: 223,
		frequency: 336.74,
		lemma: "等"
	},
	{
		rank: 224,
		frequency: 330.72,
		lemma: "くださる"
	},
	{
		rank: 225,
		frequency: 330.49,
		lemma: "_"
	},
	{
		rank: 226,
		frequency: 329.46,
		lemma: "回"
	},
	{
		rank: 227,
		frequency: 328.05,
		lemma: "三"
	},
	{
		rank: 228,
		frequency: 326.9,
		lemma: "とか"
	},
	{
		rank: 229,
		frequency: 324.74,
		lemma: "君"
	},
	{
		rank: 230,
		frequency: 324.66,
		lemma: "法"
	},
	{
		rank: 231,
		frequency: 323.97,
		lemma: "K"
	},
	{
		rank: 232,
		frequency: 321.75,
		lemma: "意味"
	},
	{
		rank: 233,
		frequency: 319.16,
		lemma: "力"
	},
	{
		rank: 234,
		frequency: 319,
		lemma: "以上"
	},
	{
		rank: 235,
		frequency: 318.59,
		lemma: "J"
	},
	{
		rank: 236,
		frequency: 313.99,
		lemma: "会社"
	},
	{
		rank: 237,
		frequency: 310.14,
		lemma: "j"
	},
	{
		rank: 238,
		frequency: 310.05,
		lemma: "よる"
	},
	{
		rank: 239,
		frequency: 306.4,
		lemma: "ほど"
	},
	{
		rank: 240,
		frequency: 305.97,
		lemma: "そんな"
	},
	{
		rank: 241,
		frequency: 305.03,
		lemma: "人間"
	},
	{
		rank: 242,
		frequency: 304.93,
		lemma: "★"
	},
	{
		rank: 243,
		frequency: 303.63,
		lemma: "V"
	},
	{
		rank: 244,
		frequency: 298.63,
		lemma: "現在"
	},
	{
		rank: 245,
		frequency: 296.6,
		lemma: "作る"
	},
	{
		rank: 246,
		frequency: 292.74,
		lemma: "企業"
	},
	{
		rank: 247,
		frequency: 292.72,
		lemma: "氏"
	},
	{
		rank: 248,
		frequency: 288.24,
		lemma: "ちょっと"
	},
	{
		rank: 249,
		frequency: 287.31,
		lemma: "間"
	},
	{
		rank: 250,
		frequency: 286.66,
		lemma: "可能"
	},
	{
		rank: 251,
		frequency: 285.81,
		lemma: "感じる"
	},
	{
		rank: 252,
		frequency: 285.39,
		lemma: "出す"
	},
	{
		rank: 253,
		frequency: 285.14,
		lemma: "研究"
	},
	{
		rank: 254,
		frequency: 282.27,
		lemma: "投稿"
	},
	{
		rank: 255,
		frequency: 281.68,
		lemma: "他"
	},
	{
		rank: 256,
		frequency: 280.77,
		lemma: "アメリカ"
	},
	{
		rank: 257,
		frequency: 280.21,
		lemma: "しれる"
	},
	{
		rank: 258,
		frequency: 278.23,
		lemma: "けれども"
	},
	{
		rank: 259,
		frequency: 276.63,
		lemma: "リンク"
	},
	{
		rank: 260,
		frequency: 276.54,
		lemma: "今回"
	},
	{
		rank: 261,
		frequency: 274,
		lemma: "いたす"
	},
	{
		rank: 262,
		frequency: 273.68,
		lemma: "高い"
	},
	{
		rank: 263,
		frequency: 273.29,
		lemma: "す"
	},
	{
		rank: 264,
		frequency: 271.58,
		lemma: "次"
	},
	{
		rank: 265,
		frequency: 269.14,
		lemma: "ら"
	},
	{
		rank: 266,
		frequency: 267.39,
		lemma: "言葉"
	},
	{
		rank: 267,
		frequency: 265.75,
		lemma: "こういう"
	},
	{
		rank: 268,
		frequency: 263.75,
		lemma: "おく"
	},
	{
		rank: 269,
		frequency: 263.45,
		lemma: "僕"
	},
	{
		rank: 270,
		frequency: 262.13,
		lemma: "出来る"
	},
	{
		rank: 271,
		frequency: 261.99,
		lemma: "受ける"
	},
	{
		rank: 272,
		frequency: 261.92,
		lemma: "●"
	},
	{
		rank: 273,
		frequency: 260.39,
		lemma: "x"
	},
	{
		rank: 274,
		frequency: 259.69,
		lemma: "経済"
	},
	{
		rank: 275,
		frequency: 256.89,
		lemma: "あなた"
	},
	{
		rank: 276,
		frequency: 256.71,
		lemma: "手"
	},
	{
		rank: 277,
		frequency: 256.65,
		lemma: "もらう"
	},
	{
		rank: 278,
		frequency: 256.52,
		lemma: "そこ"
	},
	{
		rank: 279,
		frequency: 255.07,
		lemma: "による"
	},
	{
		rank: 280,
		frequency: 255,
		lemma: "最近"
	},
	{
		rank: 281,
		frequency: 254.97,
		lemma: "結果"
	},
	{
		rank: 282,
		frequency: 254.9,
		lemma: "買う"
	},
	{
		rank: 283,
		frequency: 253.91,
		lemma: "度"
	},
	{
		rank: 284,
		frequency: 253.66,
		lemma: "％"
	},
	{
		rank: 285,
		frequency: 252.95,
		lemma: "しか"
	},
	{
		rank: 286,
		frequency: 250.53,
		lemma: "違う"
	},
	{
		rank: 287,
		frequency: 250.2,
		lemma: "映画"
	},
	{
		rank: 288,
		frequency: 249.95,
		lemma: "／"
	},
	{
		rank: 289,
		frequency: 249.49,
		lemma: "先生"
	},
	{
		rank: 290,
		frequency: 248.26,
		lemma: "生活"
	},
	{
		rank: 291,
		frequency: 248.1,
		lemma: "にる"
	},
	{
		rank: 292,
		frequency: 247.4,
		lemma: "金"
	},
	{
		rank: 293,
		frequency: 244.07,
		lemma: "＝"
	},
	{
		rank: 294,
		frequency: 243.86,
		lemma: "時代"
	},
	{
		rank: 295,
		frequency: 243.73,
		lemma: "政府"
	},
	{
		rank: 296,
		frequency: 243.43,
		lemma: "非常"
	},
	{
		rank: 297,
		frequency: 242.38,
		lemma: "得る"
	},
	{
		rank: 298,
		frequency: 241.47,
		lemma: "御"
	},
	{
		rank: 299,
		frequency: 241.29,
		lemma: "＞"
	},
	{
		rank: 300,
		frequency: 240.17,
		lemma: "店"
	},
	{
		rank: 301,
		frequency: 238.49,
		lemma: "くらい"
	},
	{
		rank: 302,
		frequency: 238.11,
		lemma: "まだ"
	},
	{
		rank: 303,
		frequency: 237.28,
		lemma: "において"
	},
	{
		rank: 304,
		frequency: 236.88,
		lemma: "内容"
	},
	{
		rank: 305,
		frequency: 236.87,
		lemma: "^"
	},
	{
		rank: 306,
		frequency: 235.68,
		lemma: "一つ"
	},
	{
		rank: 307,
		frequency: 234.72,
		lemma: "心"
	},
	{
		rank: 308,
		frequency: 234.25,
		lemma: "――"
	},
	{
		rank: 309,
		frequency: 232.04,
		lemma: "説明"
	},
	{
		rank: 310,
		frequency: 229.48,
		lemma: "写真"
	},
	{
		rank: 311,
		frequency: 228.05,
		lemma: "ただ"
	},
	{
		rank: 312,
		frequency: 226.71,
		lemma: "サイト"
	},
	{
		rank: 313,
		frequency: 226.58,
		lemma: "教育"
	},
	{
		rank: 314,
		frequency: 226.45,
		lemma: "女性"
	},
	{
		rank: 315,
		frequency: 226.31,
		lemma: "子供"
	},
	{
		rank: 316,
		frequency: 225.14,
		lemma: "方法"
	},
	{
		rank: 317,
		frequency: 224.28,
		lemma: "に対して"
	},
	{
		rank: 318,
		frequency: 222.91,
		lemma: "＊"
	},
	{
		rank: 319,
		frequency: 222.41,
		lemma: "大きい"
	},
	{
		rank: 320,
		frequency: 222.4,
		lemma: "あるいは"
	},
	{
		rank: 321,
		frequency: 221.21,
		lemma: "名"
	},
	{
		rank: 322,
		frequency: 220.74,
		lemma: "利用"
	},
	{
		rank: 323,
		frequency: 219.77,
		lemma: "さらに"
	},
	{
		rank: 324,
		frequency: 217.76,
		lemma: "少し"
	},
	{
		rank: 325,
		frequency: 216.88,
		lemma: "紹介"
	},
	{
		rank: 326,
		frequency: 215.72,
		lemma: "技術"
	},
	{
		rank: 327,
		frequency: 214.35,
		lemma: "いろいろ"
	},
	{
		rank: 328,
		frequency: 214.08,
		lemma: "なんて"
	},
	{
		rank: 329,
		frequency: 212.05,
		lemma: "名前"
	},
	{
		rank: 330,
		frequency: 211.93,
		lemma: "参加"
	},
	{
		rank: 331,
		frequency: 210.77,
		lemma: "らしい"
	},
	{
		rank: 332,
		frequency: 210.53,
		lemma: "分かる"
	},
	{
		rank: 333,
		frequency: 210.02,
		lemma: "大きな"
	},
	{
		rank: 334,
		frequency: 209.23,
		lemma: "食べる"
	},
	{
		rank: 335,
		frequency: 209.06,
		lemma: "感じ"
	},
	{
		rank: 336,
		frequency: 207.54,
		lemma: "やはり"
	},
	{
		rank: 337,
		frequency: 207.51,
		lemma: "☆"
	},
	{
		rank: 338,
		frequency: 206.32,
		lemma: "く"
	},
	{
		rank: 339,
		frequency: 206.09,
		lemma: "うち"
	},
	{
		rank: 340,
		frequency: 205.4,
		lemma: "入れる"
	},
	{
		rank: 341,
		frequency: 204.39,
		lemma: "見える"
	},
	{
		rank: 342,
		frequency: 204.21,
		lemma: "どの"
	},
	{
		rank: 343,
		frequency: 203.3,
		lemma: "にとって"
	},
	{
		rank: 344,
		frequency: 202.03,
		lemma: "活動"
	},
	{
		rank: 345,
		frequency: 201.93,
		lemma: "東京"
	},
	{
		rank: 346,
		frequency: 201.75,
		lemma: "好き"
	},
	{
		rank: 347,
		frequency: 200.53,
		lemma: "どこ"
	},
	{
		rank: 348,
		frequency: 199.85,
		lemma: "かなり"
	},
	{
		rank: 349,
		frequency: 199.82,
		lemma: "こんな"
	},
	{
		rank: 350,
		frequency: 199.37,
		lemma: "状況"
	},
	{
		rank: 351,
		frequency: 198.03,
		lemma: "五"
	},
	{
		rank: 352,
		frequency: 197.61,
		lemma: "新しい"
	},
	{
		rank: 353,
		frequency: 197.04,
		lemma: "に対する"
	},
	{
		rank: 354,
		frequency: 196.81,
		lemma: "無い"
	},
	{
		rank: 355,
		frequency: 195.51,
		lemma: "強い"
	},
	{
		rank: 356,
		frequency: 195.49,
		lemma: "管理"
	},
	{
		rank: 357,
		frequency: 195.39,
		lemma: "特に"
	},
	{
		rank: 358,
		frequency: 195.09,
		lemma: "環境"
	},
	{
		rank: 359,
		frequency: 194.74,
		lemma: "ページ"
	},
	{
		rank: 360,
		frequency: 194.55,
		lemma: "Y"
	},
	{
		rank: 361,
		frequency: 193.88,
		lemma: "のに"
	},
	{
		rank: 362,
		frequency: 193.1,
		lemma: "地域"
	},
	{
		rank: 363,
		frequency: 192.97,
		lemma: "始める"
	},
	{
		rank: 364,
		frequency: 192.95,
		lemma: "本当に"
	},
	{
		rank: 365,
		frequency: 192.82,
		lemma: "悪い"
	},
	{
		rank: 366,
		frequency: 192.48,
		lemma: "実際"
	},
	{
		rank: 367,
		frequency: 192.21,
		lemma: "中国"
	},
	{
		rank: 368,
		frequency: 191.93,
		lemma: "市"
	},
	{
		rank: 369,
		frequency: 191.78,
		lemma: "先"
	},
	{
		rank: 370,
		frequency: 190.95,
		lemma: "誰"
	},
	{
		rank: 371,
		frequency: 190.82,
		lemma: "個人"
	},
	{
		rank: 372,
		frequency: 190.46,
		lemma: "意見"
	},
	{
		rank: 373,
		frequency: 189.75,
		lemma: "状態"
	},
	{
		rank: 374,
		frequency: 189.63,
		lemma: "歳"
	},
	{
		rank: 375,
		frequency: 189.42,
		lemma: "大学"
	},
	{
		rank: 376,
		frequency: 188.97,
		lemma: "多く"
	},
	{
		rank: 377,
		frequency: 188.77,
		lemma: "物"
	},
	{
		rank: 378,
		frequency: 188.45,
		lemma: "存在"
	},
	{
		rank: 379,
		frequency: 188.12,
		lemma: "最後"
	},
	{
		rank: 380,
		frequency: 187.65,
		lemma: "終わる"
	},
	{
		rank: 381,
		frequency: 187.33,
		lemma: "笑"
	},
	{
		rank: 382,
		frequency: 187.29,
		lemma: "つく"
	},
	{
		rank: 383,
		frequency: 187.2,
		lemma: "システム"
	},
	{
		rank: 384,
		frequency: 187.14,
		lemma: "すべて"
	},
	{
		rank: 385,
		frequency: 187.08,
		lemma: "彼女"
	},
	{
		rank: 386,
		frequency: 187.03,
		lemma: "理解"
	},
	{
		rank: 387,
		frequency: 186.94,
		lemma: "学校"
	},
	{
		rank: 388,
		frequency: 186.57,
		lemma: "部分"
	},
	{
		rank: 389,
		frequency: 186.11,
		lemma: "とても"
	},
	{
		rank: 390,
		frequency: 185.07,
		lemma: "電話"
	},
	{
		rank: 391,
		frequency: 184.27,
		lemma: "用"
	},
	{
		rank: 392,
		frequency: 183.79,
		lemma: "部"
	},
	{
		rank: 393,
		frequency: 183.79,
		lemma: "z"
	},
	{
		rank: 394,
		frequency: 183.71,
		lemma: "県"
	},
	{
		rank: 395,
		frequency: 183.44,
		lemma: "日記"
	},
	{
		rank: 396,
		frequency: 182.73,
		lemma: "メール"
	},
	{
		rank: 397,
		frequency: 182.62,
		lemma: "いける"
	},
	{
		rank: 398,
		frequency: 182.61,
		lemma: "制度"
	},
	{
		rank: 399,
		frequency: 182.53,
		lemma: "続ける"
	},
	{
		rank: 400,
		frequency: 182.02,
		lemma: "使用"
	},
	{
		rank: 401,
		frequency: 181.44,
		lemma: "スる"
	},
	{
		rank: 402,
		frequency: 180.72,
		lemma: "事業"
	},
	{
		rank: 403,
		frequency: 180.23,
		lemma: "四"
	},
	{
		rank: 404,
		frequency: 179.81,
		lemma: "固定"
	},
	{
		rank: 405,
		frequency: 179.64,
		lemma: "調査"
	},
	{
		rank: 406,
		frequency: 179.63,
		lemma: "変わる"
	},
	{
		rank: 407,
		frequency: 179.62,
		lemma: "続く"
	},
	{
		rank: 408,
		frequency: 179.34,
		lemma: "基本"
	},
	{
		rank: 409,
		frequency: 179.33,
		lemma: "もちろん"
	},
	{
		rank: 410,
		frequency: 178.76,
		lemma: "関連"
	},
	{
		rank: 411,
		frequency: 178.74,
		lemma: "一般"
	},
	{
		rank: 412,
		frequency: 178.1,
		lemma: "あと"
	},
	{
		rank: 413,
		frequency: 176.87,
		lemma: "開発"
	},
	{
		rank: 414,
		frequency: 176.36,
		lemma: "あの"
	},
	{
		rank: 415,
		frequency: 175.97,
		lemma: "音楽"
	},
	{
		rank: 416,
		frequency: 175.91,
		lemma: "一番"
	},
	{
		rank: 417,
		frequency: 175.29,
		lemma: "内"
	},
	{
		rank: 418,
		frequency: 175.26,
		lemma: "作品"
	},
	{
		rank: 419,
		frequency: 175.01,
		lemma: "側"
	},
	{
		rank: 420,
		frequency: 175.01,
		lemma: "重要"
	},
	{
		rank: 421,
		frequency: 174.61,
		lemma: "X"
	},
	{
		rank: 422,
		frequency: 172.48,
		lemma: "とる"
	},
	{
		rank: 423,
		frequency: 172.16,
		lemma: "最初"
	},
	{
		rank: 424,
		frequency: 171.57,
		lemma: "様"
	},
	{
		rank: 425,
		frequency: 171.54,
		lemma: "達"
	},
	{
		rank: 426,
		frequency: 171.28,
		lemma: "国民"
	},
	{
		rank: 427,
		frequency: 171.16,
		lemma: "サービス"
	},
	{
		rank: 428,
		frequency: 171.15,
		lemma: "もっと"
	},
	{
		rank: 429,
		frequency: 169.37,
		lemma: "に関する"
	},
	{
		rank: 430,
		frequency: 169.02,
		lemma: "こちら"
	},
	{
		rank: 431,
		frequency: 168.92,
		lemma: "かける"
	},
	{
		rank: 432,
		frequency: 168.9,
		lemma: "水"
	},
	{
		rank: 433,
		frequency: 167.35,
		lemma: "新"
	},
	{
		rank: 434,
		frequency: 167.05,
		lemma: "つける"
	},
	{
		rank: 435,
		frequency: 166.62,
		lemma: "事件"
	},
	{
		rank: 436,
		frequency: 166.43,
		lemma: "英語"
	},
	{
		rank: 437,
		frequency: 166.1,
		lemma: "所"
	},
	{
		rank: 438,
		frequency: 166.04,
		lemma: "質問"
	},
	{
		rank: 439,
		frequency: 165.95,
		lemma: "形"
	},
	{
		rank: 440,
		frequency: 165.92,
		lemma: "ほとんど"
	},
	{
		rank: 441,
		frequency: 164.94,
		lemma: "ふう"
	},
	{
		rank: 442,
		frequency: 164.71,
		lemma: "男"
	},
	{
		rank: 443,
		frequency: 164.59,
		lemma: "はず"
	},
	{
		rank: 444,
		frequency: 164.46,
		lemma: "まず"
	},
	{
		rank: 445,
		frequency: 162.65,
		lemma: "約"
	},
	{
		rank: 446,
		frequency: 162.27,
		lemma: "こう"
	},
	{
		rank: 447,
		frequency: 161.62,
		lemma: "主義"
	},
	{
		rank: 448,
		frequency: 161.22,
		lemma: "下"
	},
	{
		rank: 449,
		frequency: 161.05,
		lemma: "場"
	},
	{
		rank: 450,
		frequency: 160.92,
		lemma: "ちゃん"
	},
	{
		rank: 451,
		frequency: 160.42,
		lemma: "理由"
	},
	{
		rank: 452,
		frequency: 160.28,
		lemma: "書"
	},
	{
		rank: 453,
		frequency: 158.75,
		lemma: "社"
	},
	{
		rank: 454,
		frequency: 158.66,
		lemma: "──"
	},
	{
		rank: 455,
		frequency: 158.39,
		lemma: "ン"
	},
	{
		rank: 456,
		frequency: 158.24,
		lemma: "場所"
	},
	{
		rank: 457,
		frequency: 158.21,
		lemma: "機能"
	},
	{
		rank: 458,
		frequency: 157.92,
		lemma: "米"
	},
	{
		rank: 459,
		frequency: 157.28,
		lemma: "お願い"
	},
	{
		rank: 460,
		frequency: 157.16,
		lemma: "労働"
	},
	{
		rank: 461,
		frequency: 157.08,
		lemma: "いつも"
	},
	{
		rank: 462,
		frequency: 157.03,
		lemma: "→"
	},
	{
		rank: 463,
		frequency: 156.94,
		lemma: "車"
	},
	{
		rank: 464,
		frequency: 156.65,
		lemma: "相手"
	},
	{
		rank: 465,
		frequency: 155.93,
		lemma: "国際"
	},
	{
		rank: 466,
		frequency: 155.92,
		lemma: "自身"
	},
	{
		rank: 467,
		frequency: 155.19,
		lemma: "声"
	},
	{
		rank: 468,
		frequency: 154.93,
		lemma: "取る"
	},
	{
		rank: 469,
		frequency: 154.72,
		lemma: "計画"
	},
	{
		rank: 470,
		frequency: 154.49,
		lemma: "かかる"
	},
	{
		rank: 471,
		frequency: 154.39,
		lemma: "ほう"
	},
	{
		rank: 472,
		frequency: 154.32,
		lemma: "政治"
	},
	{
		rank: 473,
		frequency: 153.9,
		lemma: "別"
	},
	{
		rank: 474,
		frequency: 153.26,
		lemma: "ばかり"
	},
	{
		rank: 475,
		frequency: 153.09,
		lemma: "系"
	},
	{
		rank: 476,
		frequency: 153.02,
		lemma: "感"
	},
	{
		rank: 477,
		frequency: 152.03,
		lemma: "億"
	},
	{
		rank: 478,
		frequency: 151.62,
		lemma: "頃"
	},
	{
		rank: 479,
		frequency: 151.62,
		lemma: "号"
	},
	{
		rank: 480,
		frequency: 151.54,
		lemma: "における"
	},
	{
		rank: 481,
		frequency: 151.46,
		lemma: "長"
	},
	{
		rank: 482,
		frequency: 150.29,
		lemma: "日本人"
	},
	{
		rank: 483,
		frequency: 150.17,
		lemma: "今後"
	},
	{
		rank: 484,
		frequency: 149.83,
		lemma: "つまり"
	},
	{
		rank: 485,
		frequency: 149.08,
		lemma: "呼ぶ"
	},
	{
		rank: 486,
		frequency: 148.88,
		lemma: "まま"
	},
	{
		rank: 487,
		frequency: 148.87,
		lemma: "下さる"
	},
	{
		rank: 488,
		frequency: 148.58,
		lemma: "文化"
	},
	{
		rank: 489,
		frequency: 147.55,
		lemma: "体"
	},
	{
		rank: 490,
		frequency: 146.78,
		lemma: "与える"
	},
	{
		rank: 491,
		frequency: 146.77,
		lemma: "こ"
	},
	{
		rank: 492,
		frequency: 146.45,
		lemma: "ちゃう"
	},
	{
		rank: 493,
		frequency: 146.23,
		lemma: "大変"
	},
	{
		rank: 494,
		frequency: 145.2,
		lemma: "彼ら"
	},
	{
		rank: 495,
		frequency: 145.09,
		lemma: "評価"
	},
	{
		rank: 496,
		frequency: 145.05,
		lemma: "百"
	},
	{
		rank: 497,
		frequency: 144.97,
		lemma: "やすい"
	},
	{
		rank: 498,
		frequency: 144.41,
		lemma: "対応"
	},
	{
		rank: 499,
		frequency: 144.24,
		lemma: "求める"
	},
	{
		rank: 500,
		frequency: 144.03,
		lemma: "権"
	},
	{
		rank: 501,
		frequency: 143.8,
		lemma: "頭"
	},
	{
		rank: 502,
		frequency: 143.68,
		lemma: "あまり"
	},
	{
		rank: 503,
		frequency: 143.56,
		lemma: "子"
	},
	{
		rank: 504,
		frequency: 143,
		lemma: "自由"
	},
	{
		rank: 505,
		frequency: 142.95,
		lemma: "｜"
	},
	{
		rank: 506,
		frequency: 142.52,
		lemma: "すぎる"
	},
	{
		rank: 507,
		frequency: 141,
		lemma: "昨日"
	},
	{
		rank: 508,
		frequency: 140.29,
		lemma: "みたい"
	},
	{
		rank: 509,
		frequency: 140.19,
		lemma: "すぐ"
	},
	{
		rank: 510,
		frequency: 140.17,
		lemma: "これから"
	},
	{
		rank: 511,
		frequency: 140.15,
		lemma: "戻る"
	},
	{
		rank: 512,
		frequency: 140.06,
		lemma: "歴史"
	},
	{
		rank: 513,
		frequency: 140.04,
		lemma: "全体"
	},
	{
		rank: 514,
		frequency: 140,
		lemma: "長い"
	},
	{
		rank: 515,
		frequency: 139.89,
		lemma: "少ない"
	},
	{
		rank: 516,
		frequency: 139.81,
		lemma: "気持ち"
	},
	{
		rank: 517,
		frequency: 139.6,
		lemma: "報告"
	},
	{
		rank: 518,
		frequency: 139.27,
		lemma: "程度"
	},
	{
		rank: 519,
		frequency: 138.83,
		lemma: "◆"
	},
	{
		rank: 520,
		frequency: 138.74,
		lemma: "元"
	},
	{
		rank: 521,
		frequency: 138.57,
		lemma: "人々"
	},
	{
		rank: 522,
		frequency: 138.48,
		lemma: "＜"
	},
	{
		rank: 523,
		frequency: 138.24,
		lemma: "予定"
	},
	{
		rank: 524,
		frequency: 137.97,
		lemma: "代表"
	},
	{
		rank: 525,
		frequency: 137.68,
		lemma: "その後"
	},
	{
		rank: 526,
		frequency: 137.65,
		lemma: "経験"
	},
	{
		rank: 527,
		frequency: 137.59,
		lemma: "型"
	},
	{
		rank: 528,
		frequency: 136.95,
		lemma: "員"
	},
	{
		rank: 529,
		frequency: 136.92,
		lemma: "ネット"
	},
	{
		rank: 530,
		frequency: 136.82,
		lemma: "以外"
	},
	{
		rank: 531,
		frequency: 136.79,
		lemma: "なぁ"
	},
	{
		rank: 532,
		frequency: 136.58,
		lemma: "今年"
	},
	{
		rank: 533,
		frequency: 136.52,
		lemma: "価格"
	},
	{
		rank: 534,
		frequency: 136.15,
		lemma: "投資"
	},
	{
		rank: 535,
		frequency: 135.9,
		lemma: "経営"
	},
	{
		rank: 536,
		frequency: 135.84,
		lemma: "早い"
	},
	{
		rank: 537,
		frequency: 135.61,
		lemma: "ニュース"
	},
	{
		rank: 538,
		frequency: 135.16,
		lemma: "帰る"
	},
	{
		rank: 539,
		frequency: 134.39,
		lemma: "それぞれ"
	},
	{
		rank: 540,
		frequency: 134.32,
		lemma: "自然"
	},
	{
		rank: 541,
		frequency: 134.2,
		lemma: "商品"
	},
	{
		rank: 542,
		frequency: 133.86,
		lemma: "なかなか"
	},
	{
		rank: 543,
		frequency: 133.81,
		lemma: "発表"
	},
	{
		rank: 544,
		frequency: 133.43,
		lemma: "教える"
	},
	{
		rank: 545,
		frequency: 133.41,
		lemma: "目的"
	},
	{
		rank: 546,
		frequency: 132.97,
		lemma: "影響"
	},
	{
		rank: 547,
		frequency: 132.9,
		lemma: "地方"
	},
	{
		rank: 548,
		frequency: 132.89,
		lemma: "生きる"
	},
	{
		rank: 549,
		frequency: 132.84,
		lemma: "だから"
	},
	{
		rank: 550,
		frequency: 132.84,
		lemma: "テレビ"
	},
	{
		rank: 551,
		frequency: 132.07,
		lemma: "一緒"
	},
	{
		rank: 552,
		frequency: 132,
		lemma: "面"
	},
	{
		rank: 553,
		frequency: 131.48,
		lemma: "顔"
	},
	{
		rank: 554,
		frequency: 131.42,
		lemma: "選手"
	},
	{
		rank: 555,
		frequency: 131.4,
		lemma: "楽しい"
	},
	{
		rank: 556,
		frequency: 130.5,
		lemma: "道"
	},
	{
		rank: 557,
		frequency: 130.39,
		lemma: "けれど"
	},
	{
		rank: 558,
		frequency: 130.26,
		lemma: "みんな"
	},
	{
		rank: 559,
		frequency: 130.06,
		lemma: "子ども"
	},
	{
		rank: 560,
		frequency: 129.91,
		lemma: "実は"
	},
	{
		rank: 561,
		frequency: 129.79,
		lemma: "確か"
	},
	{
		rank: 562,
		frequency: 129.69,
		lemma: "でる"
	},
	{
		rank: 563,
		frequency: 129.53,
		lemma: "千"
	},
	{
		rank: 564,
		frequency: 129.28,
		lemma: "確認"
	},
	{
		rank: 565,
		frequency: 129.08,
		lemma: "ありがとう"
	},
	{
		rank: 566,
		frequency: 128.74,
		lemma: "夜"
	},
	{
		rank: 567,
		frequency: 128.69,
		lemma: "例えば"
	},
	{
		rank: 568,
		frequency: 128.56,
		lemma: "中心"
	},
	{
		rank: 569,
		frequency: 128.42,
		lemma: "市場"
	},
	{
		rank: 570,
		frequency: 128.21,
		lemma: "音"
	},
	{
		rank: 571,
		frequency: 128.18,
		lemma: "提供"
	},
	{
		rank: 572,
		frequency: 127.82,
		lemma: "事実"
	},
	{
		rank: 573,
		frequency: 127.61,
		lemma: "地"
	},
	{
		rank: 574,
		frequency: 127.43,
		lemma: "簡単"
	},
	{
		rank: 575,
		frequency: 127.26,
		lemma: "面白い"
	},
	{
		rank: 576,
		frequency: 127.26,
		lemma: "朝"
	},
	{
		rank: 577,
		frequency: 127.13,
		lemma: "版"
	},
	{
		rank: 578,
		frequency: 127.03,
		lemma: "学"
	},
	{
		rank: 579,
		frequency: 127.02,
		lemma: "なぜ"
	},
	{
		rank: 580,
		frequency: 127,
		lemma: "当然"
	},
	{
		rank: 581,
		frequency: 126.97,
		lemma: "以下"
	},
	{
		rank: 582,
		frequency: 126.89,
		lemma: "責任"
	},
	{
		rank: 583,
		frequency: 126.67,
		lemma: "六"
	},
	{
		rank: 584,
		frequency: 126.29,
		lemma: "ゲーム"
	},
	{
		rank: 585,
		frequency: 126.23,
		lemma: "議論"
	},
	{
		rank: 586,
		frequency: 126.04,
		lemma: "これら"
	},
	{
		rank: 587,
		frequency: 125.89,
		lemma: "以前"
	},
	{
		rank: 588,
		frequency: 125.78,
		lemma: "位"
	},
	{
		rank: 589,
		frequency: 125.74,
		lemma: "データ"
	},
	{
		rank: 590,
		frequency: 125.06,
		lemma: "示す"
	},
	{
		rank: 591,
		frequency: 124.69,
		lemma: "判断"
	},
	{
		rank: 592,
		frequency: 124.62,
		lemma: "例"
	},
	{
		rank: 593,
		frequency: 124.4,
		lemma: "専門"
	},
	{
		rank: 594,
		frequency: 124.3,
		lemma: "家族"
	},
	{
		rank: 595,
		frequency: 123.87,
		lemma: "しかも"
	},
	{
		rank: 596,
		frequency: 123.71,
		lemma: "初めて"
	},
	{
		rank: 597,
		frequency: 123.55,
		lemma: "勉強"
	},
	{
		rank: 598,
		frequency: 123.19,
		lemma: "申し上げる"
	},
	{
		rank: 599,
		frequency: 123.18,
		lemma: "話す"
	},
	{
		rank: 600,
		frequency: 123.02,
		lemma: "もつ"
	},
	{
		rank: 601,
		frequency: 122.97,
		lemma: "期待"
	},
	{
		rank: 602,
		frequency: 122.69,
		lemma: "難しい"
	},
	{
		rank: 603,
		frequency: 122.57,
		lemma: "そこで"
	},
	{
		rank: 604,
		frequency: 122.48,
		lemma: "いま"
	},
	{
		rank: 605,
		frequency: 122.4,
		lemma: "全く"
	},
	{
		rank: 606,
		frequency: 122.05,
		lemma: "韓国"
	},
	{
		rank: 607,
		frequency: 122,
		lemma: "外"
	},
	{
		rank: 608,
		frequency: 122,
		lemma: "たくさん"
	},
	{
		rank: 609,
		frequency: 121.97,
		lemma: "効果"
	},
	{
		rank: 610,
		frequency: 121.79,
		lemma: "検討"
	},
	{
		rank: 611,
		frequency: 121.62,
		lemma: "各"
	},
	{
		rank: 612,
		frequency: 121.33,
		lemma: "普通"
	},
	{
		rank: 613,
		frequency: 121.21,
		lemma: "組織"
	},
	{
		rank: 614,
		frequency: 121.06,
		lemma: "政策"
	},
	{
		rank: 615,
		frequency: 120.81,
		lemma: "町"
	},
	{
		rank: 616,
		frequency: 120.6,
		lemma: "行動"
	},
	{
		rank: 617,
		frequency: 119.66,
		lemma: "年間"
	},
	{
		rank: 618,
		frequency: 119.45,
		lemma: "こそ"
	},
	{
		rank: 619,
		frequency: 119.45,
		lemma: "置く"
	},
	{
		rank: 620,
		frequency: 119.39,
		lemma: "率"
	},
	{
		rank: 621,
		frequency: 119.23,
		lemma: "当時"
	},
	{
		rank: 622,
		frequency: 119,
		lemma: "学生"
	},
	{
		rank: 623,
		frequency: 118.9,
		lemma: "飲む"
	},
	{
		rank: 624,
		frequency: 118.29,
		lemma: "海"
	},
	{
		rank: 625,
		frequency: 117.84,
		lemma: "よく"
	},
	{
		rank: 626,
		frequency: 117.61,
		lemma: "販売"
	},
	{
		rank: 627,
		frequency: 117.58,
		lemma: "どんな"
	},
	{
		rank: 628,
		frequency: 117.22,
		lemma: "つつ"
	},
	{
		rank: 629,
		frequency: 116.96,
		lemma: "購入"
	},
	{
		rank: 630,
		frequency: 116.84,
		lemma: "科学"
	},
	{
		rank: 631,
		frequency: 116.41,
		lemma: "監督"
	},
	{
		rank: 632,
		frequency: 116.37,
		lemma: "意識"
	},
	{
		rank: 633,
		frequency: 115.67,
		lemma: "認める"
	},
	{
		rank: 634,
		frequency: 115.65,
		lemma: "欲しい"
	},
	{
		rank: 635,
		frequency: 115.08,
		lemma: "九"
	},
	{
		rank: 636,
		frequency: 115.05,
		lemma: "わ"
	},
	{
		rank: 637,
		frequency: 114.99,
		lemma: "通り"
	},
	{
		rank: 638,
		frequency: 114.83,
		lemma: "とも"
	},
	{
		rank: 639,
		frequency: 114.49,
		lemma: "立つ"
	},
	{
		rank: 640,
		frequency: 114.26,
		lemma: "生産"
	},
	{
		rank: 641,
		frequency: 113.89,
		lemma: "表現"
	},
	{
		rank: 642,
		frequency: 113.8,
		lemma: "戦争"
	},
	{
		rank: 643,
		frequency: 113.73,
		lemma: "ねる"
	},
	{
		rank: 644,
		frequency: 113.68,
		lemma: "参考"
	},
	{
		rank: 645,
		frequency: 113.58,
		lemma: "始まる"
	},
	{
		rank: 646,
		frequency: 113.4,
		lemma: "ひとつ"
	},
	{
		rank: 647,
		frequency: 113.14,
		lemma: "その他"
	},
	{
		rank: 648,
		frequency: 112.98,
		lemma: "決定"
	},
	{
		rank: 649,
		frequency: 112.76,
		lemma: "まあ"
	},
	{
		rank: 650,
		frequency: 112.73,
		lemma: "ぐらい"
	},
	{
		rank: 651,
		frequency: 112.62,
		lemma: "＆"
	},
	{
		rank: 652,
		frequency: 112.56,
		lemma: "曲"
	},
	{
		rank: 653,
		frequency: 112.49,
		lemma: "同"
	},
	{
		rank: 654,
		frequency: 112.39,
		lemma: "ク"
	},
	{
		rank: 655,
		frequency: 112.26,
		lemma: "やっぱり"
	},
	{
		rank: 656,
		frequency: 112.23,
		lemma: "法律"
	},
	{
		rank: 657,
		frequency: 111.96,
		lemma: "機関"
	},
	{
		rank: 658,
		frequency: 110.75,
		lemma: "開く"
	},
	{
		rank: 659,
		frequency: 110.53,
		lemma: "ビジネス"
	},
	{
		rank: 660,
		frequency: 110.19,
		lemma: "さて"
	},
	{
		rank: 661,
		frequency: 110.03,
		lemma: "対象"
	},
	{
		rank: 662,
		frequency: 109.98,
		lemma: "チーム"
	},
	{
		rank: 663,
		frequency: 109.68,
		lemma: "現実"
	},
	{
		rank: 664,
		frequency: 109.52,
		lemma: "進む"
	},
	{
		rank: 665,
		frequency: 109.51,
		lemma: "対策"
	},
	{
		rank: 666,
		frequency: 109.11,
		lemma: "作業"
	},
	{
		rank: 667,
		frequency: 108.78,
		lemma: "すごい"
	},
	{
		rank: 668,
		frequency: 108.72,
		lemma: "価値"
	},
	{
		rank: 669,
		frequency: 108.57,
		lemma: "テーマ"
	},
	{
		rank: 670,
		frequency: 108.55,
		lemma: "十分"
	},
	{
		rank: 671,
		frequency: 108.48,
		lemma: "含む"
	},
	{
		rank: 672,
		frequency: 108.47,
		lemma: "一部"
	},
	{
		rank: 673,
		frequency: 108.25,
		lemma: "語"
	},
	{
		rank: 674,
		frequency: 108.22,
		lemma: "決める"
	},
	{
		rank: 675,
		frequency: 108.12,
		lemma: "姿"
	},
	{
		rank: 676,
		frequency: 108.08,
		lemma: "新聞"
	},
	{
		rank: 677,
		frequency: 108.04,
		lemma: "一方"
	},
	{
		rank: 678,
		frequency: 107.87,
		lemma: "風"
	},
	{
		rank: 679,
		frequency: 107.79,
		lemma: "八"
	},
	{
		rank: 680,
		frequency: 107.52,
		lemma: "際"
	},
	{
		rank: 681,
		frequency: 107.31,
		lemma: "考え"
	},
	{
		rank: 682,
		frequency: 107.11,
		lemma: "ラ"
	},
	{
		rank: 683,
		frequency: 107.1,
		lemma: "残る"
	},
	{
		rank: 684,
		frequency: 107.07,
		lemma: "論"
	},
	{
		rank: 685,
		frequency: 106.84,
		lemma: "のみ"
	},
	{
		rank: 686,
		frequency: 106.71,
		lemma: "全て"
	},
	{
		rank: 687,
		frequency: 106.52,
		lemma: "及び"
	},
	{
		rank: 688,
		frequency: 106.51,
		lemma: "大臣"
	},
	{
		rank: 689,
		frequency: 106.48,
		lemma: "神"
	},
	{
		rank: 690,
		frequency: 106.22,
		lemma: "国家"
	},
	{
		rank: 691,
		frequency: 105.95,
		lemma: "件"
	},
	{
		rank: 692,
		frequency: 105.94,
		lemma: "語る"
	},
	{
		rank: 693,
		frequency: 105.86,
		lemma: "毎日"
	},
	{
		rank: 694,
		frequency: 105.82,
		lemma: "俺"
	},
	{
		rank: 695,
		frequency: 105.8,
		lemma: "試合"
	},
	{
		rank: 696,
		frequency: 105.68,
		lemma: "もし"
	},
	{
		rank: 697,
		frequency: 105.26,
		lemma: "七"
	},
	{
		rank: 698,
		frequency: 105.25,
		lemma: "ま"
	},
	{
		rank: 699,
		frequency: 105.21,
		lemma: "会議"
	},
	{
		rank: 700,
		frequency: 105.07,
		lemma: "いつ"
	},
	{
		rank: 701,
		frequency: 105.02,
		lemma: "指摘"
	},
	{
		rank: 702,
		frequency: 104.86,
		lemma: "言える"
	},
	{
		rank: 703,
		frequency: 104.83,
		lemma: "＾"
	},
	{
		rank: 704,
		frequency: 104.76,
		lemma: "歩く"
	},
	{
		rank: 705,
		frequency: 104.72,
		lemma: "製品"
	},
	{
		rank: 706,
		frequency: 104.69,
		lemma: "変化"
	},
	{
		rank: 707,
		frequency: 104.49,
		lemma: "結局"
	},
	{
		rank: 708,
		frequency: 104.46,
		lemma: "消費"
	},
	{
		rank: 709,
		frequency: 104.3,
		lemma: "保険"
	},
	{
		rank: 710,
		frequency: 103.99,
		lemma: "り"
	},
	{
		rank: 711,
		frequency: 103.88,
		lemma: "具体"
	},
	{
		rank: 712,
		frequency: 103.75,
		lemma: "あげる"
	},
	{
		rank: 713,
		frequency: 103.74,
		lemma: "人生"
	},
	{
		rank: 714,
		frequency: 103.7,
		lemma: "量"
	},
	{
		rank: 715,
		frequency: 103.41,
		lemma: "米国"
	},
	{
		rank: 716,
		frequency: 103.2,
		lemma: "表示"
	},
	{
		rank: 717,
		frequency: 102.9,
		lemma: "変える"
	},
	{
		rank: 718,
		frequency: 102.84,
		lemma: "精神"
	},
	{
		rank: 719,
		frequency: 102.78,
		lemma: "街"
	},
	{
		rank: 720,
		frequency: 102.65,
		lemma: "過去"
	},
	{
		rank: 721,
		frequency: 102.53,
		lemma: "レベル"
	},
	{
		rank: 722,
		frequency: 102.52,
		lemma: "我々"
	},
	{
		rank: 723,
		frequency: 102.04,
		lemma: "インターネット"
	},
	{
		rank: 724,
		frequency: 101.83,
		lemma: "能力"
	},
	{
		rank: 725,
		frequency: 101.8,
		lemma: "選ぶ"
	},
	{
		rank: 726,
		frequency: 101.67,
		lemma: "指導"
	},
	{
		rank: 727,
		frequency: 101.22,
		lemma: "更新"
	},
	{
		rank: 728,
		frequency: 100.92,
		lemma: "公開"
	},
	{
		rank: 729,
		frequency: 100.65,
		lemma: "日本語"
	},
	{
		rank: 730,
		frequency: 100.63,
		lemma: "皆さん"
	},
	{
		rank: 731,
		frequency: 100.02,
		lemma: "働く"
	},
	{
		rank: 732,
		frequency: 100.02,
		lemma: "―"
	},
	{
		rank: 733,
		frequency: 100,
		lemma: "屋"
	},
	{
		rank: 734,
		frequency: 99.95,
		lemma: "ほか"
	},
	{
		rank: 735,
		frequency: 99.66,
		lemma: "女"
	},
	{
		rank: 736,
		frequency: 99.49,
		lemma: "昔"
	},
	{
		rank: 737,
		frequency: 99.37,
		lemma: "担当"
	},
	{
		rank: 738,
		frequency: 99.3,
		lemma: "費"
	},
	{
		rank: 739,
		frequency: 99.25,
		lemma: "わたし"
	},
	{
		rank: 740,
		frequency: 99.17,
		lemma: "送る"
	},
	{
		rank: 741,
		frequency: 99.11,
		lemma: "明日"
	},
	{
		rank: 742,
		frequency: 99.09,
		lemma: "旅行"
	},
	{
		rank: 743,
		frequency: 99.05,
		lemma: "夢"
	},
	{
		rank: 744,
		frequency: 98.94,
		lemma: "それから"
	},
	{
		rank: 745,
		frequency: 98.8,
		lemma: "明らか"
	},
	{
		rank: 746,
		frequency: 98.74,
		lemma: "乗る"
	},
	{
		rank: 747,
		frequency: 98.43,
		lemma: "つくる"
	},
	{
		rank: 748,
		frequency: 97.94,
		lemma: "＿"
	},
	{
		rank: 749,
		frequency: 97.71,
		lemma: "木"
	},
	{
		rank: 750,
		frequency: 97.6,
		lemma: "機"
	},
	{
		rank: 751,
		frequency: 97.58,
		lemma: "大切"
	},
	{
		rank: 752,
		frequency: 97.55,
		lemma: "忘れる"
	},
	{
		rank: 753,
		frequency: 97.53,
		lemma: "局"
	},
	{
		rank: 754,
		frequency: 97.42,
		lemma: "行政"
	},
	{
		rank: 755,
		frequency: 97.4,
		lemma: "安全"
	},
	{
		rank: 756,
		frequency: 97.31,
		lemma: "外国"
	},
	{
		rank: 757,
		frequency: 97.27,
		lemma: "増える"
	},
	{
		rank: 758,
		frequency: 96.97,
		lemma: "お金"
	},
	{
		rank: 759,
		frequency: 96.71,
		lemma: "資料"
	},
	{
		rank: 760,
		frequency: 96.57,
		lemma: "部屋"
	},
	{
		rank: 761,
		frequency: 96.4,
		lemma: "行為"
	},
	{
		rank: 762,
		frequency: 96.35,
		lemma: "あ"
	},
	{
		rank: 763,
		frequency: 96.31,
		lemma: "平成"
	},
	{
		rank: 764,
		frequency: 96.1,
		lemma: "いや"
	},
	{
		rank: 765,
		frequency: 96.04,
		lemma: "なん"
	},
	{
		rank: 766,
		frequency: 96.02,
		lemma: "楽しむ"
	},
	{
		rank: 767,
		frequency: 95.97,
		lemma: "色"
	},
	{
		rank: 768,
		frequency: 95.82,
		lemma: "待つ"
	},
	{
		rank: 769,
		frequency: 95.74,
		lemma: "登録"
	},
	{
		rank: 770,
		frequency: 95.66,
		lemma: "ドイツ"
	},
	{
		rank: 771,
		frequency: 95.61,
		lemma: "うまい"
	},
	{
		rank: 772,
		frequency: 95.5,
		lemma: "設定"
	},
	{
		rank: 773,
		frequency: 95.28,
		lemma: "どういう"
	},
	{
		rank: 774,
		frequency: 95.27,
		lemma: "述べる"
	},
	{
		rank: 775,
		frequency: 95.19,
		lemma: "成功"
	},
	{
		rank: 776,
		frequency: 95.03,
		lemma: "努力"
	},
	{
		rank: 777,
		frequency: 94.95,
		lemma: "戦"
	},
	{
		rank: 778,
		frequency: 94.7,
		lemma: "団体"
	},
	{
		rank: 779,
		frequency: 94.63,
		lemma: "につきまして"
	},
	{
		rank: 780,
		frequency: 94.58,
		lemma: "支援"
	},
	{
		rank: 781,
		frequency: 94.53,
		lemma: "最も"
	},
	{
		rank: 782,
		frequency: 94.49,
		lemma: "自己"
	},
	{
		rank: 783,
		frequency: 94.46,
		lemma: "全"
	},
	{
		rank: 784,
		frequency: 94.45,
		lemma: "年度"
	},
	{
		rank: 785,
		frequency: 94.44,
		lemma: "運動"
	},
	{
		rank: 786,
		frequency: 94.27,
		lemma: "構造"
	},
	{
		rank: 787,
		frequency: 94.26,
		lemma: "特別"
	},
	{
		rank: 788,
		frequency: 94.21,
		lemma: "ド"
	},
	{
		rank: 789,
		frequency: 94,
		lemma: "解決"
	},
	{
		rank: 790,
		frequency: 93.78,
		lemma: "完全"
	},
	{
		rank: 791,
		frequency: 93.59,
		lemma: "品"
	},
	{
		rank: 792,
		frequency: 93.53,
		lemma: "訳"
	},
	{
		rank: 793,
		frequency: 93.33,
		lemma: "向かう"
	},
	{
		rank: 794,
		frequency: 93.13,
		lemma: "男性"
	},
	{
		rank: 795,
		frequency: 93.1,
		lemma: "結構"
	},
	{
		rank: 796,
		frequency: 93.06,
		lemma: "産業"
	},
	{
		rank: 797,
		frequency: 92.87,
		lemma: "軍"
	},
	{
		rank: 798,
		frequency: 92.77,
		lemma: "主"
	},
	{
		rank: 799,
		frequency: 92.33,
		lemma: "に関して"
	},
	{
		rank: 800,
		frequency: 92.25,
		lemma: "人気"
	},
	{
		rank: 801,
		frequency: 92.23,
		lemma: "お話"
	},
	{
		rank: 802,
		frequency: 92.05,
		lemma: "駅"
	},
	{
		rank: 803,
		frequency: 92.04,
		lemma: "描く"
	},
	{
		rank: 804,
		frequency: 92.02,
		lemma: "近く"
	},
	{
		rank: 805,
		frequency: 91.96,
		lemma: "最終"
	},
	{
		rank: 806,
		frequency: 91.37,
		lemma: "ドル"
	},
	{
		rank: 807,
		frequency: 91.35,
		lemma: "過ぎる"
	},
	{
		rank: 808,
		frequency: 91.33,
		lemma: "保護"
	},
	{
		rank: 809,
		frequency: 91.28,
		lemma: "上げる"
	},
	{
		rank: 810,
		frequency: 91.26,
		lemma: "再"
	},
	{
		rank: 811,
		frequency: 91.15,
		lemma: "グループ"
	},
	{
		rank: 812,
		frequency: 91.11,
		lemma: "生"
	},
	{
		rank: 813,
		frequency: 91.09,
		lemma: "ポイント"
	},
	{
		rank: 814,
		frequency: 90.88,
		lemma: "ども"
	},
	{
		rank: 815,
		frequency: 90.86,
		lemma: "センター"
	},
	{
		rank: 816,
		frequency: 90.86,
		lemma: "開催"
	},
	{
		rank: 817,
		frequency: 90.84,
		lemma: "方向"
	},
	{
		rank: 818,
		frequency: 90.83,
		lemma: "改革"
	},
	{
		rank: 819,
		frequency: 90.8,
		lemma: "検索"
	},
	{
		rank: 820,
		frequency: 90.77,
		lemma: "走る"
	},
	{
		rank: 821,
		frequency: 90.75,
		lemma: "生まれる"
	},
	{
		rank: 822,
		frequency: 90.72,
		lemma: "□"
	},
	{
		rank: 823,
		frequency: 90.59,
		lemma: "起こる"
	},
	{
		rank: 824,
		frequency: 90.12,
		lemma: "Q"
	},
	{
		rank: 825,
		frequency: 89.95,
		lemma: "健康"
	},
	{
		rank: 826,
		frequency: 89.89,
		lemma: "障害"
	},
	{
		rank: 827,
		frequency: 89.86,
		lemma: "ヶ月"
	},
	{
		rank: 828,
		frequency: 89.84,
		lemma: "起きる"
	},
	{
		rank: 829,
		frequency: 89.43,
		lemma: "協力"
	},
	{
		rank: 830,
		frequency: 89.37,
		lemma: "時期"
	},
	{
		rank: 831,
		frequency: 89.33,
		lemma: "料理"
	},
	{
		rank: 832,
		frequency: 89.08,
		lemma: "考え方"
	},
	{
		rank: 833,
		frequency: 89.05,
		lemma: "医療"
	},
	{
		rank: 834,
		frequency: 89.04,
		lemma: "頂く"
	},
	{
		rank: 835,
		frequency: 88.94,
		lemma: "金融"
	},
	{
		rank: 836,
		frequency: 88.89,
		lemma: "売る"
	},
	{
		rank: 837,
		frequency: 88.88,
		lemma: "試験"
	},
	{
		rank: 838,
		frequency: 88.86,
		lemma: "により"
	},
	{
		rank: 839,
		frequency: 88.83,
		lemma: "進める"
	},
	{
		rank: 840,
		frequency: 88.79,
		lemma: "死ぬ"
	},
	{
		rank: 841,
		frequency: 88.69,
		lemma: "フランス"
	},
	{
		rank: 842,
		frequency: 88.61,
		lemma: "近い"
	},
	{
		rank: 843,
		frequency: 88.5,
		lemma: "立場"
	},
	{
		rank: 844,
		frequency: 88.48,
		lemma: "契約"
	},
	{
		rank: 845,
		frequency: 88.16,
		lemma: "すでに"
	},
	{
		rank: 846,
		frequency: 87.88,
		lemma: "条件"
	},
	{
		rank: 847,
		frequency: 87.84,
		lemma: "放送"
	},
	{
		rank: 848,
		frequency: 87.83,
		lemma: "※"
	},
	{
		rank: 849,
		frequency: 87.64,
		lemma: "全国"
	},
	{
		rank: 850,
		frequency: 87.58,
		lemma: "違い"
	},
	{
		rank: 851,
		frequency: 87.35,
		lemma: "室"
	},
	{
		rank: 852,
		frequency: 87.24,
		lemma: "なあ"
	},
	{
		rank: 853,
		frequency: 87.22,
		lemma: "枚"
	},
	{
		rank: 854,
		frequency: 87.12,
		lemma: "ずっと"
	},
	{
		rank: 855,
		frequency: 87.1,
		lemma: "作成"
	},
	{
		rank: 856,
		frequency: 87.07,
		lemma: "足"
	},
	{
		rank: 857,
		frequency: 87,
		lemma: "学ぶ"
	},
	{
		rank: 858,
		frequency: 86.87,
		lemma: "成長"
	},
	{
		rank: 859,
		frequency: 86.85,
		lemma: "施設"
	},
	{
		rank: 860,
		frequency: 86.81,
		lemma: "リ"
	},
	{
		rank: 861,
		frequency: 86.54,
		lemma: "登場"
	},
	{
		rank: 862,
		frequency: 86.51,
		lemma: "知識"
	},
	{
		rank: 863,
		frequency: 86.49,
		lemma: "携帯"
	},
	{
		rank: 864,
		frequency: 86.39,
		lemma: "実現"
	},
	{
		rank: 865,
		frequency: 86.35,
		lemma: "友人"
	},
	{
		rank: 866,
		frequency: 85.98,
		lemma: "海外"
	},
	{
		rank: 867,
		frequency: 85.86,
		lemma: "原因"
	},
	{
		rank: 868,
		frequency: 85.82,
		lemma: "実施"
	},
	{
		rank: 869,
		frequency: 85.76,
		lemma: "昨年"
	},
	{
		rank: 870,
		frequency: 85.64,
		lemma: "〇"
	},
	{
		rank: 871,
		frequency: 85.44,
		lemma: "探す"
	},
	{
		rank: 872,
		frequency: 85.26,
		lemma: "病院"
	},
	{
		rank: 873,
		frequency: 85.22,
		lemma: "代"
	},
	{
		rank: 874,
		frequency: 85.09,
		lemma: "認識"
	},
	{
		rank: 875,
		frequency: 85.06,
		lemma: "夏"
	},
	{
		rank: 876,
		frequency: 84.99,
		lemma: "および"
	},
	{
		rank: 877,
		frequency: 84.73,
		lemma: "イメージ"
	},
	{
		rank: 878,
		frequency: 84.72,
		lemma: "段階"
	},
	{
		rank: 879,
		frequency: 84.7,
		lemma: "発生"
	},
	{
		rank: 880,
		frequency: 84.58,
		lemma: "反対"
	},
	{
		rank: 881,
		frequency: 84.49,
		lemma: "会う"
	},
	{
		rank: 882,
		frequency: 84.45,
		lemma: "期間"
	},
	{
		rank: 883,
		frequency: 84.37,
		lemma: "区"
	},
	{
		rank: 884,
		frequency: 84.3,
		lemma: "トップ"
	},
	{
		rank: 885,
		frequency: 84.15,
		lemma: "条"
	},
	{
		rank: 886,
		frequency: 83.95,
		lemma: "若い"
	},
	{
		rank: 887,
		frequency: 83.94,
		lemma: "見せる"
	},
	{
		rank: 888,
		frequency: 83.88,
		lemma: "午後"
	},
	{
		rank: 889,
		frequency: 83.59,
		lemma: "税"
	},
	{
		rank: 890,
		frequency: 83.5,
		lemma: "主張"
	},
	{
		rank: 891,
		frequency: 83.31,
		lemma: "変更"
	},
	{
		rank: 892,
		frequency: 83.26,
		lemma: "サッカー"
	},
	{
		rank: 893,
		frequency: 83.22,
		lemma: "パソコン"
	},
	{
		rank: 894,
		frequency: 83.2,
		lemma: "限り"
	},
	{
		rank: 895,
		frequency: 83.13,
		lemma: "＋"
	},
	{
		rank: 896,
		frequency: 83.13,
		lemma: "高"
	},
	{
		rank: 897,
		frequency: 83.06,
		lemma: "番組"
	},
	{
		rank: 898,
		frequency: 83.01,
		lemma: "今度"
	},
	{
		rank: 899,
		frequency: 83,
		lemma: "ホームページ"
	},
	{
		rank: 900,
		frequency: 82.4,
		lemma: "準備"
	},
	{
		rank: 901,
		frequency: 82.35,
		lemma: "処理"
	},
	{
		rank: 902,
		frequency: 82.23,
		lemma: "口"
	},
	{
		rank: 903,
		frequency: 82.13,
		lemma: "式"
	},
	{
		rank: 904,
		frequency: 82.1,
		lemma: "または"
	},
	{
		rank: 905,
		frequency: 82.05,
		lemma: "だって"
	},
	{
		rank: 906,
		frequency: 81.99,
		lemma: "絶対"
	},
	{
		rank: 907,
		frequency: 81.85,
		lemma: "伝える"
	},
	{
		rank: 908,
		frequency: 81.79,
		lemma: "結婚"
	},
	{
		rank: 909,
		frequency: 81.76,
		lemma: "社長"
	},
	{
		rank: 910,
		frequency: 81.72,
		lemma: "守る"
	},
	{
		rank: 911,
		frequency: 81.71,
		lemma: "体験"
	},
	{
		rank: 912,
		frequency: 81.68,
		lemma: "基準"
	},
	{
		rank: 913,
		frequency: 81.62,
		lemma: "発言"
	},
	{
		rank: 914,
		frequency: 81.56,
		lemma: "深い"
	},
	{
		rank: 915,
		frequency: 81.44,
		lemma: "住む"
	},
	{
		rank: 916,
		frequency: 81.43,
		lemma: "都市"
	},
	{
		rank: 917,
		frequency: 81.36,
		lemma: "ぞ"
	},
	{
		rank: 918,
		frequency: 81.29,
		lemma: "親"
	},
	{
		rank: 919,
		frequency: 81.22,
		lemma: "機会"
	},
	{
		rank: 920,
		frequency: 81.19,
		lemma: "展開"
	},
	{
		rank: 921,
		frequency: 81.18,
		lemma: "ほしい"
	},
	{
		rank: 922,
		frequency: 81.07,
		lemma: "授業"
	},
	{
		rank: 923,
		frequency: 81.01,
		lemma: "デザイン"
	},
	{
		rank: 924,
		frequency: 80.85,
		lemma: "火"
	},
	{
		rank: 925,
		frequency: 80.66,
		lemma: "自体"
	},
	{
		rank: 926,
		frequency: 80.51,
		lemma: "興味"
	},
	{
		rank: 927,
		frequency: 80.47,
		lemma: "掲載"
	},
	{
		rank: 928,
		frequency: 80.31,
		lemma: "含める"
	},
	{
		rank: 929,
		frequency: 80,
		lemma: "編集"
	},
	{
		rank: 930,
		frequency: 79.53,
		lemma: "選択"
	},
	{
		rank: 931,
		frequency: 79.36,
		lemma: "いわゆる"
	},
	{
		rank: 932,
		frequency: 79.34,
		lemma: "信じる"
	},
	{
		rank: 933,
		frequency: 79.25,
		lemma: "もん"
	},
	{
		rank: 934,
		frequency: 79.23,
		lemma: "週間"
	},
	{
		rank: 935,
		frequency: 79.16,
		lemma: "負担"
	},
	{
		rank: 936,
		frequency: 79.16,
		lemma: "文字"
	},
	{
		rank: 937,
		frequency: 78.95,
		lemma: "最大"
	},
	{
		rank: 938,
		frequency: 78.94,
		lemma: "無料"
	},
	{
		rank: 939,
		frequency: 78.77,
		lemma: "相談"
	},
	{
		rank: 940,
		frequency: 78.77,
		lemma: "注意"
	},
	{
		rank: 941,
		frequency: 78.71,
		lemma: "ホテル"
	},
	{
		rank: 942,
		frequency: 78.46,
		lemma: "まったく"
	},
	{
		rank: 943,
		frequency: 78.36,
		lemma: "株"
	},
	{
		rank: 944,
		frequency: 78.33,
		lemma: "思える"
	},
	{
		rank: 945,
		frequency: 78.07,
		lemma: "全部"
	},
	{
		rank: 946,
		frequency: 78.06,
		lemma: "しっかり"
	},
	{
		rank: 947,
		frequency: 77.8,
		lemma: "開始"
	},
	{
		rank: 948,
		frequency: 77.78,
		lemma: "上がる"
	},
	{
		rank: 949,
		frequency: 77.56,
		lemma: "身"
	},
	{
		rank: 950,
		frequency: 77.5,
		lemma: "イベント"
	},
	{
		rank: 951,
		frequency: 77.46,
		lemma: "分析"
	},
	{
		rank: 952,
		frequency: 77.43,
		lemma: "アクセス"
	},
	{
		rank: 953,
		frequency: 77.37,
		lemma: "同時に"
	},
	{
		rank: 954,
		frequency: 77.35,
		lemma: "詳細"
	},
	{
		rank: 955,
		frequency: 77.31,
		lemma: "合う"
	},
	{
		rank: 956,
		frequency: 77.29,
		lemma: "動く"
	},
	{
		rank: 957,
		frequency: 77.23,
		lemma: "える"
	},
	{
		rank: 958,
		frequency: 77.22,
		lemma: "先ほど"
	},
	{
		rank: 959,
		frequency: 77.19,
		lemma: "派"
	},
	{
		rank: 960,
		frequency: 77.04,
		lemma: "アップ"
	},
	{
		rank: 961,
		frequency: 76.78,
		lemma: "将来"
	},
	{
		rank: 962,
		frequency: 76.78,
		lemma: "予算"
	},
	{
		rank: 963,
		frequency: 76.77,
		lemma: "愛"
	},
	{
		rank: 964,
		frequency: 76.76,
		lemma: "目標"
	},
	{
		rank: 965,
		frequency: 76.75,
		lemma: "台"
	},
	{
		rank: 966,
		frequency: 76.75,
		lemma: "通信"
	},
	{
		rank: 967,
		frequency: 76.72,
		lemma: "△"
	},
	{
		rank: 968,
		frequency: 76.63,
		lemma: "比べる"
	},
	{
		rank: 969,
		frequency: 76.63,
		lemma: "プログラム"
	},
	{
		rank: 970,
		frequency: 76.61,
		lemma: "させる"
	},
	{
		rank: 971,
		frequency: 76.56,
		lemma: "分野"
	},
	{
		rank: 972,
		frequency: 76.49,
		lemma: "ちなみに"
	},
	{
		rank: 973,
		frequency: 76.49,
		lemma: "Z"
	},
	{
		rank: 974,
		frequency: 76.48,
		lemma: "花"
	},
	{
		rank: 975,
		frequency: 76.37,
		lemma: "向ける"
	},
	{
		rank: 976,
		frequency: 76.29,
		lemma: "国内"
	},
	{
		rank: 977,
		frequency: 76.17,
		lemma: "土"
	},
	{
		rank: 978,
		frequency: 76.12,
		lemma: "時刻"
	},
	{
		rank: 979,
		frequency: 76.05,
		lemma: "つ"
	},
	{
		rank: 980,
		frequency: 75.91,
		lemma: "そのまま"
	},
	{
		rank: 981,
		frequency: 75.9,
		lemma: "逆"
	},
	{
		rank: 982,
		frequency: 75.72,
		lemma: "発見"
	},
	{
		rank: 983,
		frequency: 75.63,
		lemma: "とにかく"
	},
	{
		rank: 984,
		frequency: 75.57,
		lemma: "きる"
	},
	{
		rank: 985,
		frequency: 75.38,
		lemma: "最高"
	},
	{
		rank: 986,
		frequency: 75.38,
		lemma: "頑張る"
	},
	{
		rank: 987,
		frequency: 75.22,
		lemma: "為"
	},
	{
		rank: 988,
		frequency: 75.16,
		lemma: "覚える"
	},
	{
		rank: 989,
		frequency: 75.05,
		lemma: "利益"
	},
	{
		rank: 990,
		frequency: 75.05,
		lemma: "どちら"
	},
	{
		rank: 991,
		frequency: 75.01,
		lemma: "小"
	},
	{
		rank: 992,
		frequency: 74.99,
		lemma: "銀行"
	},
	{
		rank: 993,
		frequency: 74.98,
		lemma: "終了"
	},
	{
		rank: 994,
		frequency: 74.93,
		lemma: "事務"
	},
	{
		rank: 995,
		frequency: 74.82,
		lemma: "出版"
	},
	{
		rank: 996,
		frequency: 74.82,
		lemma: "連絡"
	},
	{
		rank: 997,
		frequency: 74.73,
		lemma: "正しい"
	},
	{
		rank: 998,
		frequency: 74.72,
		lemma: "プロ"
	},
	{
		rank: 999,
		frequency: 74.61,
		lemma: "大会"
	},
	{
		rank: 1000,
		frequency: 74.57,
		lemma: "練習"
	},
	{
		rank: 1001,
		frequency: 74.49,
		lemma: "様々"
	},
	{
		rank: 1002,
		frequency: 74.48,
		lemma: "娘"
	},
	{
		rank: 1003,
		frequency: 74.47,
		lemma: "州"
	},
	{
		rank: 1004,
		frequency: 74.37,
		lemma: "こうした"
	},
	{
		rank: 1005,
		frequency: 74.3,
		lemma: "ファン"
	},
	{
		rank: 1006,
		frequency: 74.29,
		lemma: "同様"
	},
	{
		rank: 1007,
		frequency: 74.28,
		lemma: "小さな"
	},
	{
		rank: 1008,
		frequency: 74.24,
		lemma: "大阪"
	},
	{
		rank: 1009,
		frequency: 74.23,
		lemma: "共通"
	},
	{
		rank: 1010,
		frequency: 74.2,
		lemma: "つもり"
	},
	{
		rank: 1011,
		frequency: 74.18,
		lemma: "現代"
	},
	{
		rank: 1012,
		frequency: 74.11,
		lemma: "被害"
	},
	{
		rank: 1013,
		frequency: 74.08,
		lemma: "住宅"
	},
	{
		rank: 1014,
		frequency: 74.01,
		lemma: "選挙"
	},
	{
		rank: 1015,
		frequency: 74.01,
		lemma: "とともに"
	},
	{
		rank: 1016,
		frequency: 73.93,
		lemma: "新た"
	},
	{
		rank: 1017,
		frequency: 73.84,
		lemma: "大事"
	},
	{
		rank: 1018,
		frequency: 73.83,
		lemma: "あたり"
	},
	{
		rank: 1019,
		frequency: 73.81,
		lemma: "ろ"
	},
	{
		rank: 1020,
		frequency: 73.78,
		lemma: "安い"
	},
	{
		rank: 1021,
		frequency: 73.7,
		lemma: "山"
	},
	{
		rank: 1022,
		frequency: 73.54,
		lemma: "批判"
	},
	{
		rank: 1023,
		frequency: 73.52,
		lemma: "報道"
	},
	{
		rank: 1024,
		frequency: 73.2,
		lemma: "動き"
	},
	{
		rank: 1025,
		frequency: 73.13,
		lemma: "▼"
	},
	{
		rank: 1026,
		frequency: 73.04,
		lemma: "心配"
	},
	{
		rank: 1027,
		frequency: 72.95,
		lemma: "見つける"
	},
	{
		rank: 1028,
		frequency: 72.94,
		lemma: "本日"
	},
	{
		rank: 1029,
		frequency: 72.92,
		lemma: "残念"
	},
	{
		rank: 1030,
		frequency: 72.89,
		lemma: "なお"
	},
	{
		rank: 1031,
		frequency: 72.89,
		lemma: "クリック"
	},
	{
		rank: 1032,
		frequency: 72.87,
		lemma: "小さい"
	},
	{
		rank: 1033,
		frequency: 72.61,
		lemma: "業界"
	},
	{
		rank: 1034,
		frequency: 72.58,
		lemma: "相当"
	},
	{
		rank: 1035,
		frequency: 72.55,
		lemma: "どれ"
	},
	{
		rank: 1036,
		frequency: 72.54,
		lemma: "議員"
	},
	{
		rank: 1037,
		frequency: 72.43,
		lemma: "業務"
	},
	{
		rank: 1038,
		frequency: 72.43,
		lemma: "なか"
	},
	{
		rank: 1039,
		frequency: 72.41,
		lemma: "章"
	},
	{
		rank: 1040,
		frequency: 72.39,
		lemma: "調べる"
	},
	{
		rank: 1041,
		frequency: 72.37,
		lemma: "攻撃"
	},
	{
		rank: 1042,
		frequency: 72.33,
		lemma: "思い"
	},
	{
		rank: 1043,
		frequency: 72.24,
		lemma: "スポーツ"
	},
	{
		rank: 1044,
		frequency: 72.13,
		lemma: "メンバー"
	},
	{
		rank: 1045,
		frequency: 72.07,
		lemma: "世紀"
	},
	{
		rank: 1046,
		frequency: 72.05,
		lemma: "演奏"
	},
	{
		rank: 1047,
		frequency: 71.94,
		lemma: "家庭"
	},
	{
		rank: 1048,
		frequency: 71.89,
		lemma: "直接"
	},
	{
		rank: 1049,
		frequency: 71.89,
		lemma: "ところが"
	},
	{
		rank: 1050,
		frequency: 71.65,
		lemma: "聴く"
	},
	{
		rank: 1051,
		frequency: 71.59,
		lemma: "構成"
	},
	{
		rank: 1052,
		frequency: 71.58,
		lemma: "文章"
	},
	{
		rank: 1053,
		frequency: 71.53,
		lemma: "案"
	},
	{
		rank: 1054,
		frequency: 71.49,
		lemma: "異なる"
	},
	{
		rank: 1055,
		frequency: 71.44,
		lemma: "驚く"
	},
	{
		rank: 1056,
		frequency: 71.39,
		lemma: "希望"
	},
	{
		rank: 1057,
		frequency: 71.35,
		lemma: "もと"
	},
	{
		rank: 1058,
		frequency: 71.29,
		lemma: "記憶"
	},
	{
		rank: 1059,
		frequency: 71.28,
		lemma: "方々"
	},
	{
		rank: 1060,
		frequency: 71.11,
		lemma: "取引"
	},
	{
		rank: 1061,
		frequency: 71.09,
		lemma: "［"
	},
	{
		rank: 1062,
		frequency: 71.01,
		lemma: "美しい"
	},
	{
		rank: 1063,
		frequency: 70.98,
		lemma: "加える"
	},
	{
		rank: 1064,
		frequency: 70.96,
		lemma: "市民"
	},
	{
		rank: 1065,
		frequency: 70.93,
		lemma: "超"
	},
	{
		rank: 1066,
		frequency: 70.87,
		lemma: "とおり"
	},
	{
		rank: 1067,
		frequency: 70.74,
		lemma: "資金"
	},
	{
		rank: 1068,
		frequency: 70.7,
		lemma: "メディア"
	},
	{
		rank: 1069,
		frequency: 70.69,
		lemma: "友達"
	},
	{
		rank: 1070,
		frequency: 70.68,
		lemma: "危険"
	},
	{
		rank: 1071,
		frequency: 70.62,
		lemma: "運営"
	},
	{
		rank: 1072,
		frequency: 70.6,
		lemma: "導入"
	},
	{
		rank: 1073,
		frequency: 70.45,
		lemma: "予想"
	},
	{
		rank: 1074,
		frequency: 70.4,
		lemma: "ファイル"
	},
	{
		rank: 1075,
		frequency: 70.23,
		lemma: "いずれ"
	},
	{
		rank: 1076,
		frequency: 70.22,
		lemma: "モデル"
	},
	{
		rank: 1077,
		frequency: 70.08,
		lemma: "必ず"
	},
	{
		rank: 1078,
		frequency: 70,
		lemma: "たとえば"
	},
	{
		rank: 1079,
		frequency: 69.98,
		lemma: "答える"
	},
	{
		rank: 1080,
		frequency: 69.77,
		lemma: "レ"
	},
	{
		rank: 1081,
		frequency: 69.76,
		lemma: "発売"
	},
	{
		rank: 1082,
		frequency: 69.7,
		lemma: "はっきり"
	},
	{
		rank: 1083,
		frequency: 69.66,
		lemma: "寝る"
	},
	{
		rank: 1084,
		frequency: 69.64,
		lemma: "目指す"
	},
	{
		rank: 1085,
		frequency: 69.64,
		lemma: "話題"
	},
	{
		rank: 1086,
		frequency: 69.59,
		lemma: "建築"
	},
	{
		rank: 1087,
		frequency: 69.57,
		lemma: "印象"
	},
	{
		rank: 1088,
		frequency: 69.45,
		lemma: "詳しい"
	},
	{
		rank: 1089,
		frequency: 69.39,
		lemma: "課題"
	},
	{
		rank: 1090,
		frequency: 69.35,
		lemma: "￣"
	},
	{
		rank: 1091,
		frequency: 69.34,
		lemma: "事故"
	},
	{
		rank: 1092,
		frequency: 69.23,
		lemma: "ライブ"
	},
	{
		rank: 1093,
		frequency: 69.15,
		lemma: "低い"
	},
	{
		rank: 1094,
		frequency: 69.11,
		lemma: "ソフト"
	},
	{
		rank: 1095,
		frequency: 68.94,
		lemma: "額"
	},
	{
		rank: 1096,
		frequency: 68.91,
		lemma: "る"
	},
	{
		rank: 1097,
		frequency: 68.66,
		lemma: "バス"
	},
	{
		rank: 1098,
		frequency: 68.57,
		lemma: "困る"
	},
	{
		rank: 1099,
		frequency: 68.56,
		lemma: "母"
	},
	{
		rank: 1100,
		frequency: 68.54,
		lemma: "チェック"
	},
	{
		rank: 1101,
		frequency: 68.48,
		lemma: "ちゃんと"
	},
	{
		rank: 1102,
		frequency: 68.46,
		lemma: "われわれ"
	},
	{
		rank: 1103,
		frequency: 68.3,
		lemma: "］"
	},
	{
		rank: 1104,
		frequency: 68.02,
		lemma: "学習"
	},
	{
		rank: 1105,
		frequency: 67.95,
		lemma: "靴"
	},
	{
		rank: 1106,
		frequency: 67.94,
		lemma: "むしろ"
	},
	{
		rank: 1107,
		frequency: 67.83,
		lemma: "まさに"
	},
	{
		rank: 1108,
		frequency: 67.82,
		lemma: "権利"
	},
	{
		rank: 1109,
		frequency: 67.78,
		lemma: "発展"
	},
	{
		rank: 1110,
		frequency: 67.76,
		lemma: "記録"
	},
	{
		rank: 1111,
		frequency: 67.69,
		lemma: "割"
	},
	{
		rank: 1112,
		frequency: 67.68,
		lemma: "光"
	},
	{
		rank: 1113,
		frequency: 67.61,
		lemma: "個"
	},
	{
		rank: 1114,
		frequency: 67.59,
		lemma: "計算"
	},
	{
		rank: 1115,
		frequency: 67.54,
		lemma: "雨"
	},
	{
		rank: 1116,
		frequency: 67.54,
		lemma: "設計"
	},
	{
		rank: 1117,
		frequency: 67.54,
		lemma: "種類"
	},
	{
		rank: 1118,
		frequency: 67.5,
		lemma: "非"
	},
	{
		rank: 1119,
		frequency: 67.41,
		lemma: "現場"
	},
	{
		rank: 1120,
		frequency: 67.39,
		lemma: "途中"
	},
	{
		rank: 1121,
		frequency: 67.31,
		lemma: "気分"
	},
	{
		rank: 1122,
		frequency: 67.27,
		lemma: "昭和"
	},
	{
		rank: 1123,
		frequency: 67.15,
		lemma: "地球"
	},
	{
		rank: 1124,
		frequency: 67.15,
		lemma: "嬉しい"
	},
	{
		rank: 1125,
		frequency: 67.12,
		lemma: "移動"
	},
	{
		rank: 1126,
		frequency: 67.05,
		lemma: "絵"
	},
	{
		rank: 1127,
		frequency: 66.92,
		lemma: "ごと"
	},
	{
		rank: 1128,
		frequency: 66.91,
		lemma: "限る"
	},
	{
		rank: 1129,
		frequency: 66.9,
		lemma: "料"
	},
	{
		rank: 1130,
		frequency: 66.85,
		lemma: "発行"
	},
	{
		rank: 1131,
		frequency: 66.8,
		lemma: "宗教"
	},
	{
		rank: 1132,
		frequency: 66.8,
		lemma: "企画"
	},
	{
		rank: 1133,
		frequency: 66.77,
		lemma: "改正"
	},
	{
		rank: 1134,
		frequency: 66.7,
		lemma: "数字"
	},
	{
		rank: 1135,
		frequency: 66.57,
		lemma: "倍"
	},
	{
		rank: 1136,
		frequency: 66.56,
		lemma: "線"
	},
	{
		rank: 1137,
		frequency: 66.45,
		lemma: "そのもの"
	},
	{
		rank: 1138,
		frequency: 66.44,
		lemma: "不安"
	},
	{
		rank: 1139,
		frequency: 66.34,
		lemma: "自ら"
	},
	{
		rank: 1140,
		frequency: 66.27,
		lemma: "決まる"
	},
	{
		rank: 1141,
		frequency: 66.17,
		lemma: "広い"
	},
	{
		rank: 1142,
		frequency: 66.12,
		lemma: "広告"
	},
	{
		rank: 1143,
		frequency: 65.99,
		lemma: "土地"
	},
	{
		rank: 1144,
		frequency: 65.94,
		lemma: "それら"
	},
	{
		rank: 1145,
		frequency: 65.93,
		lemma: "有名"
	},
	{
		rank: 1146,
		frequency: 65.92,
		lemma: "基づく"
	},
	{
		rank: 1147,
		frequency: 65.92,
		lemma: "言語"
	},
	{
		rank: 1148,
		frequency: 65.91,
		lemma: "共同"
	},
	{
		rank: 1149,
		frequency: 65.84,
		lemma: "年代"
	},
	{
		rank: 1150,
		frequency: 65.84,
		lemma: "タイプ"
	},
	{
		rank: 1151,
		frequency: 65.79,
		lemma: "観る"
	},
	{
		rank: 1152,
		frequency: 65.78,
		lemma: "プロジェクト"
	},
	{
		rank: 1153,
		frequency: 65.75,
		lemma: "要求"
	},
	{
		rank: 1154,
		frequency: 65.7,
		lemma: "差"
	},
	{
		rank: 1155,
		frequency: 65.64,
		lemma: "残す"
	},
	{
		rank: 1156,
		frequency: 65.61,
		lemma: "教授"
	},
	{
		rank: 1157,
		frequency: 65.52,
		lemma: "さえ"
	},
	{
		rank: 1158,
		frequency: 65.44,
		lemma: "戦略"
	},
	{
		rank: 1159,
		frequency: 65.42,
		lemma: "営業"
	},
	{
		rank: 1160,
		frequency: 65.26,
		lemma: "制"
	},
	{
		rank: 1161,
		frequency: 65.16,
		lemma: "無理"
	},
	{
		rank: 1162,
		frequency: 65.01,
		lemma: "役割"
	},
	{
		rank: 1163,
		frequency: 65.01,
		lemma: "▲"
	},
	{
		rank: 1164,
		frequency: 64.95,
		lemma: "改善"
	},
	{
		rank: 1165,
		frequency: 64.91,
		lemma: "北朝鮮"
	},
	{
		rank: 1166,
		frequency: 64.89,
		lemma: "きっと"
	},
	{
		rank: 1167,
		frequency: 64.82,
		lemma: "期"
	},
	{
		rank: 1168,
		frequency: 64.78,
		lemma: "イギリス"
	},
	{
		rank: 1169,
		frequency: 64.7,
		lemma: "ユーザー"
	},
	{
		rank: 1170,
		frequency: 64.69,
		lemma: "撮影"
	},
	{
		rank: 1171,
		frequency: 64.62,
		lemma: "エネルギー"
	},
	{
		rank: 1172,
		frequency: 64.56,
		lemma: "知れる"
	},
	{
		rank: 1173,
		frequency: 64.54,
		lemma: "拡大"
	},
	{
		rank: 1174,
		frequency: 64.52,
		lemma: "色々"
	},
	{
		rank: 1175,
		frequency: 64.4,
		lemma: "いただける"
	},
	{
		rank: 1176,
		frequency: 64.35,
		lemma: "道路"
	},
	{
		rank: 1177,
		frequency: 64.32,
		lemma: "種"
	},
	{
		rank: 1178,
		frequency: 64.25,
		lemma: "切る"
	},
	{
		rank: 1179,
		frequency: 64.09,
		lemma: "憲法"
	},
	{
		rank: 1180,
		frequency: 64.06,
		lemma: "感謝"
	},
	{
		rank: 1181,
		frequency: 64.02,
		lemma: "い"
	},
	{
		rank: 1182,
		frequency: 63.93,
		lemma: "感覚"
	},
	{
		rank: 1183,
		frequency: 63.88,
		lemma: "旅"
	},
	{
		rank: 1184,
		frequency: 63.63,
		lemma: "紙"
	},
	{
		rank: 1185,
		frequency: 63.58,
		lemma: "高校"
	},
	{
		rank: 1186,
		frequency: 63.48,
		lemma: "なり"
	},
	{
		rank: 1187,
		frequency: 63.45,
		lemma: "付ける"
	},
	{
		rank: 1188,
		frequency: 63.44,
		lemma: "厳しい"
	},
	{
		rank: 1189,
		frequency: 63.31,
		lemma: "Ａ"
	},
	{
		rank: 1190,
		frequency: 63.21,
		lemma: "×"
	},
	{
		rank: 1191,
		frequency: 63.07,
		lemma: "仕方"
	},
	{
		rank: 1192,
		frequency: 62.88,
		lemma: "合わせる"
	},
	{
		rank: 1193,
		frequency: 62.86,
		lemma: "実行"
	},
	{
		rank: 1194,
		frequency: 62.7,
		lemma: "とりあえず"
	},
	{
		rank: 1195,
		frequency: 62.6,
		lemma: "記者"
	},
	{
		rank: 1196,
		frequency: 62.56,
		lemma: "通常"
	},
	{
		rank: 1197,
		frequency: 62.52,
		lemma: "既に"
	},
	{
		rank: 1198,
		frequency: 62.52,
		lemma: "現状"
	},
	{
		rank: 1199,
		frequency: 62.5,
		lemma: "建設"
	},
	{
		rank: 1200,
		frequency: 62.45,
		lemma: "味"
	},
	{
		rank: 1201,
		frequency: 62.45,
		lemma: "だが"
	},
	{
		rank: 1202,
		frequency: 62.31,
		lemma: "−"
	},
	{
		rank: 1203,
		frequency: 62.28,
		lemma: "スタッフ"
	},
	{
		rank: 1204,
		frequency: 62.28,
		lemma: "先日"
	},
	{
		rank: 1205,
		frequency: 62.28,
		lemma: "最新"
	},
	{
		rank: 1206,
		frequency: 62.27,
		lemma: "中央"
	},
	{
		rank: 1207,
		frequency: 62.22,
		lemma: "幸せ"
	},
	{
		rank: 1208,
		frequency: 62.21,
		lemma: "似る"
	},
	{
		rank: 1209,
		frequency: 62.13,
		lemma: "犬"
	},
	{
		rank: 1210,
		frequency: 62.1,
		lemma: "平均"
	},
	{
		rank: 1211,
		frequency: 62.05,
		lemma: "カード"
	},
	{
		rank: 1212,
		frequency: 62.03,
		lemma: "あれ"
	},
	{
		rank: 1213,
		frequency: 62.01,
		lemma: "物語"
	},
	{
		rank: 1214,
		frequency: 61.75,
		lemma: "末"
	},
	{
		rank: 1215,
		frequency: 61.74,
		lemma: "財政"
	},
	{
		rank: 1216,
		frequency: 61.71,
		lemma: "◇"
	},
	{
		rank: 1217,
		frequency: 61.5,
		lemma: "追加"
	},
	{
		rank: 1218,
		frequency: 61.47,
		lemma: "不思議"
	},
	{
		rank: 1219,
		frequency: 61.44,
		lemma: "ネットワーク"
	},
	{
		rank: 1220,
		frequency: 61.41,
		lemma: "警察"
	},
	{
		rank: 1221,
		frequency: 61.39,
		lemma: "初"
	},
	{
		rank: 1222,
		frequency: 61.38,
		lemma: "雑誌"
	},
	{
		rank: 1223,
		frequency: 61.36,
		lemma: "提案"
	},
	{
		rank: 1224,
		frequency: 61.36,
		lemma: "編"
	},
	{
		rank: 1225,
		frequency: 61.3,
		lemma: "思い出す"
	},
	{
		rank: 1226,
		frequency: 61.27,
		lemma: "大人"
	},
	{
		rank: 1227,
		frequency: 61.16,
		lemma: "日々"
	},
	{
		rank: 1228,
		frequency: 61.03,
		lemma: "様子"
	},
	{
		rank: 1229,
		frequency: 60.96,
		lemma: "なさる"
	},
	{
		rank: 1230,
		frequency: 60.94,
		lemma: "いろんな"
	},
	{
		rank: 1231,
		frequency: 60.93,
		lemma: "生徒"
	},
	{
		rank: 1232,
		frequency: 60.92,
		lemma: "にくい"
	},
	{
		rank: 1233,
		frequency: 60.81,
		lemma: "マン"
	},
	{
		rank: 1234,
		frequency: 60.76,
		lemma: "総合"
	},
	{
		rank: 1235,
		frequency: 60.65,
		lemma: "↓"
	},
	{
		rank: 1236,
		frequency: 60.63,
		lemma: "使える"
	},
	{
		rank: 1237,
		frequency: 60.63,
		lemma: "値"
	},
	{
		rank: 1238,
		frequency: 60.58,
		lemma: "活用"
	},
	{
		rank: 1239,
		frequency: 60.56,
		lemma: "決して"
	},
	{
		rank: 1240,
		frequency: 60.54,
		lemma: "交換"
	},
	{
		rank: 1241,
		frequency: 60.51,
		lemma: "身体"
	},
	{
		rank: 1242,
		frequency: 60.46,
		lemma: "整備"
	},
	{
		rank: 1243,
		frequency: 60.35,
		lemma: "リスク"
	},
	{
		rank: 1244,
		frequency: 60.34,
		lemma: "規定"
	},
	{
		rank: 1245,
		frequency: 60.29,
		lemma: "想像"
	},
	{
		rank: 1246,
		frequency: 60.28,
		lemma: "ああ"
	},
	{
		rank: 1247,
		frequency: 60.26,
		lemma: "ケース"
	},
	{
		rank: 1248,
		frequency: 60.17,
		lemma: "アジア"
	},
	{
		rank: 1249,
		frequency: 60.03,
		lemma: "左"
	},
	{
		rank: 1250,
		frequency: 59.96,
		lemma: "満足"
	},
	{
		rank: 1251,
		frequency: 59.96,
		lemma: "規模"
	},
	{
		rank: 1252,
		frequency: 59.84,
		lemma: "集"
	},
	{
		rank: 1253,
		frequency: 59.8,
		lemma: "本当"
	},
	{
		rank: 1254,
		frequency: 59.77,
		lemma: "以降"
	},
	{
		rank: 1255,
		frequency: 59.75,
		lemma: "比較"
	},
	{
		rank: 1256,
		frequency: 59.72,
		lemma: "素晴らしい"
	},
	{
		rank: 1257,
		frequency: 59.68,
		lemma: "法人"
	},
	{
		rank: 1258,
		frequency: 59.6,
		lemma: "クラス"
	},
	{
		rank: 1259,
		frequency: 59.59,
		lemma: "犯罪"
	},
	{
		rank: 1260,
		frequency: 59.57,
		lemma: "おっしゃる"
	},
	{
		rank: 1261,
		frequency: 59.56,
		lemma: "午前"
	},
	{
		rank: 1262,
		frequency: 59.52,
		lemma: "ちる"
	},
	{
		rank: 1263,
		frequency: 59.48,
		lemma: "会長"
	},
	{
		rank: 1264,
		frequency: 59.45,
		lemma: "せい"
	},
	{
		rank: 1265,
		frequency: 59.44,
		lemma: "通る"
	},
	{
		rank: 1266,
		frequency: 59.37,
		lemma: "なんと"
	},
	{
		rank: 1267,
		frequency: 59.35,
		lemma: "超える"
	},
	{
		rank: 1268,
		frequency: 59.24,
		lemma: "平和"
	},
	{
		rank: 1269,
		frequency: 59.24,
		lemma: "基礎"
	},
	{
		rank: 1270,
		frequency: 59.16,
		lemma: "特定"
	},
	{
		rank: 1271,
		frequency: 59.13,
		lemma: "ヨーロッパ"
	},
	{
		rank: 1272,
		frequency: 59.11,
		lemma: "ネタ"
	},
	{
		rank: 1273,
		frequency: 59,
		lemma: "流れ"
	},
	{
		rank: 1274,
		frequency: 59,
		lemma: "どうも"
	},
	{
		rank: 1275,
		frequency: 58.94,
		lemma: "ドア"
	},
	{
		rank: 1276,
		frequency: 58.93,
		lemma: "村"
	},
	{
		rank: 1277,
		frequency: 58.93,
		lemma: "画像"
	},
	{
		rank: 1278,
		frequency: 58.92,
		lemma: "少年"
	},
	{
		rank: 1279,
		frequency: 58.9,
		lemma: "いえる"
	},
	{
		rank: 1280,
		frequency: 58.86,
		lemma: "安定"
	},
	{
		rank: 1281,
		frequency: 58.75,
		lemma: "実験"
	},
	{
		rank: 1282,
		frequency: 58.75,
		lemma: "ちゃ"
	},
	{
		rank: 1283,
		frequency: 58.68,
		lemma: "つる"
	},
	{
		rank: 1284,
		frequency: 58.64,
		lemma: "メーカー"
	},
	{
		rank: 1285,
		frequency: 58.62,
		lemma: "間違い"
	},
	{
		rank: 1286,
		frequency: 58.61,
		lemma: "本人"
	},
	{
		rank: 1287,
		frequency: 58.61,
		lemma: "雰囲気"
	},
	{
		rank: 1288,
		frequency: 58.6,
		lemma: "国会"
	},
	{
		rank: 1289,
		frequency: 58.59,
		lemma: "気づく"
	},
	{
		rank: 1290,
		frequency: 58.58,
		lemma: "まぁ"
	},
	{
		rank: 1291,
		frequency: 58.57,
		lemma: "患者"
	},
	{
		rank: 1292,
		frequency: 58.54,
		lemma: "歌"
	},
	{
		rank: 1293,
		frequency: 58.45,
		lemma: "会場"
	},
	{
		rank: 1294,
		frequency: 58.44,
		lemma: "治療"
	},
	{
		rank: 1295,
		frequency: 58.41,
		lemma: "；"
	},
	{
		rank: 1296,
		frequency: 58.39,
		lemma: "ぜひ"
	},
	{
		rank: 1297,
		frequency: 58.32,
		lemma: "それでも"
	},
	{
		rank: 1298,
		frequency: 58.31,
		lemma: "電子"
	},
	{
		rank: 1299,
		frequency: 58.23,
		lemma: "小説"
	},
	{
		rank: 1300,
		frequency: 58.16,
		lemma: "箸"
	},
	{
		rank: 1301,
		frequency: 58.07,
		lemma: "死"
	},
	{
		rank: 1302,
		frequency: 58.02,
		lemma: "注目"
	},
	{
		rank: 1303,
		frequency: 58.02,
		lemma: "食事"
	},
	{
		rank: 1304,
		frequency: 57.85,
		lemma: "維持"
	},
	{
		rank: 1305,
		frequency: 57.85,
		lemma: "ほぼ"
	},
	{
		rank: 1306,
		frequency: 57.83,
		lemma: "文"
	},
	{
		rank: 1307,
		frequency: 57.77,
		lemma: "範囲"
	},
	{
		rank: 1308,
		frequency: 57.77,
		lemma: "コラム"
	},
	{
		rank: 1309,
		frequency: 57.75,
		lemma: "まとめる"
	},
	{
		rank: 1310,
		frequency: 57.71,
		lemma: "常に"
	},
	{
		rank: 1311,
		frequency: 57.67,
		lemma: "著作"
	},
	{
		rank: 1312,
		frequency: 57.62,
		lemma: "表"
	},
	{
		rank: 1313,
		frequency: 57.57,
		lemma: "ものの"
	},
	{
		rank: 1314,
		frequency: 57.51,
		lemma: "いっぱい"
	},
	{
		rank: 1315,
		frequency: 57.44,
		lemma: "失う"
	},
	{
		rank: 1316,
		frequency: 57.38,
		lemma: "夫"
	},
	{
		rank: 1317,
		frequency: 57.36,
		lemma: "理論"
	},
	{
		rank: 1318,
		frequency: 57.34,
		lemma: "秒"
	},
	{
		rank: 1319,
		frequency: 57.34,
		lemma: "日常"
	},
	{
		rank: 1320,
		frequency: 57.33,
		lemma: "イラク"
	},
	{
		rank: 1321,
		frequency: 57.29,
		lemma: "業者"
	},
	{
		rank: 1322,
		frequency: 57.28,
		lemma: "回答"
	},
	{
		rank: 1323,
		frequency: 57.19,
		lemma: "体制"
	},
	{
		rank: 1324,
		frequency: 56.95,
		lemma: "調整"
	},
	{
		rank: 1325,
		frequency: 56.94,
		lemma: "訴訟"
	},
	{
		rank: 1326,
		frequency: 56.92,
		lemma: "階"
	},
	{
		rank: 1327,
		frequency: 56.89,
		lemma: "酒"
	},
	{
		rank: 1328,
		frequency: 56.83,
		lemma: "やめる"
	},
	{
		rank: 1329,
		frequency: 56.83,
		lemma: "住民"
	},
	{
		rank: 1330,
		frequency: 56.74,
		lemma: "はじめ"
	},
	{
		rank: 1331,
		frequency: 56.72,
		lemma: "疑問"
	},
	{
		rank: 1332,
		frequency: 56.64,
		lemma: "ど"
	},
	{
		rank: 1333,
		frequency: 56.63,
		lemma: "当たる"
	},
	{
		rank: 1334,
		frequency: 56.51,
		lemma: "失敗"
	},
	{
		rank: 1335,
		frequency: 56.49,
		lemma: "落ちる"
	},
	{
		rank: 1336,
		frequency: 56.43,
		lemma: "繰り返す"
	},
	{
		rank: 1337,
		frequency: 56.33,
		lemma: "島"
	},
	{
		rank: 1338,
		frequency: 56.19,
		lemma: "息子"
	},
	{
		rank: 1339,
		frequency: 56.16,
		lemma: "資本"
	},
	{
		rank: 1340,
		frequency: 56.1,
		lemma: "事情"
	},
	{
		rank: 1341,
		frequency: 56.01,
		lemma: "応援"
	},
	{
		rank: 1342,
		frequency: 56.01,
		lemma: "コース"
	},
	{
		rank: 1343,
		frequency: 55.95,
		lemma: "》"
	},
	{
		rank: 1344,
		frequency: 55.94,
		lemma: "感想"
	},
	{
		rank: 1345,
		frequency: 55.92,
		lemma: "届く"
	},
	{
		rank: 1346,
		frequency: 55.91,
		lemma: "解説"
	},
	{
		rank: 1347,
		frequency: 55.89,
		lemma: "行なう"
	},
	{
		rank: 1348,
		frequency: 55.86,
		lemma: "妻"
	},
	{
		rank: 1349,
		frequency: 55.82,
		lemma: "シリーズ"
	},
	{
		rank: 1350,
		frequency: 55.67,
		lemma: "客"
	},
	{
		rank: 1351,
		frequency: 55.64,
		lemma: "公共"
	},
	{
		rank: 1352,
		frequency: 55.63,
		lemma: "民間"
	},
	{
		rank: 1353,
		frequency: 55.62,
		lemma: "イタリア"
	},
	{
		rank: 1354,
		frequency: 55.48,
		lemma: "弁護士"
	},
	{
		rank: 1355,
		frequency: 55.44,
		lemma: "なす"
	},
	{
		rank: 1356,
		frequency: 55.34,
		lemma: "裁判"
	},
	{
		rank: 1357,
		frequency: 55.28,
		lemma: "古い"
	},
	{
		rank: 1358,
		frequency: 55.27,
		lemma: "建物"
	},
	{
		rank: 1359,
		frequency: 55.2,
		lemma: "集まる"
	},
	{
		rank: 1360,
		frequency: 55.19,
		lemma: "対"
	},
	{
		rank: 1361,
		frequency: 55.17,
		lemma: "省"
	},
	{
		rank: 1362,
		frequency: 55.17,
		lemma: "措置"
	},
	{
		rank: 1363,
		frequency: 55.06,
		lemma: "組合"
	},
	{
		rank: 1364,
		frequency: 55.05,
		lemma: "に対し"
	},
	{
		rank: 1365,
		frequency: 55.03,
		lemma: "父"
	},
	{
		rank: 1366,
		frequency: 55,
		lemma: "払う"
	},
	{
		rank: 1367,
		frequency: 54.85,
		lemma: "本来"
	},
	{
		rank: 1368,
		frequency: 54.84,
		lemma: "元気"
	},
	{
		rank: 1369,
		frequency: 54.75,
		lemma: "一体"
	},
	{
		rank: 1370,
		frequency: 54.74,
		lemma: "宇宙"
	},
	{
		rank: 1371,
		frequency: 54.74,
		lemma: "《"
	},
	{
		rank: 1372,
		frequency: 54.64,
		lemma: "申す"
	},
	{
		rank: 1373,
		frequency: 54.62,
		lemma: "図"
	},
	{
		rank: 1374,
		frequency: 54.57,
		lemma: "シ"
	},
	{
		rank: 1375,
		frequency: 54.56,
		lemma: "引く"
	},
	{
		rank: 1376,
		frequency: 54.55,
		lemma: "クラブ"
	},
	{
		rank: 1377,
		frequency: 54.54,
		lemma: "タイトル"
	},
	{
		rank: 1378,
		frequency: 54.5,
		lemma: "作"
	},
	{
		rank: 1379,
		frequency: 54.39,
		lemma: "用いる"
	},
	{
		rank: 1380,
		frequency: 54.33,
		lemma: "番"
	},
	{
		rank: 1381,
		frequency: 54.32,
		lemma: "お客様"
	},
	{
		rank: 1382,
		frequency: 54.25,
		lemma: "採用"
	},
	{
		rank: 1383,
		frequency: 54.21,
		lemma: "しばらく"
	},
	{
		rank: 1384,
		frequency: 54.1,
		lemma: "二つ"
	},
	{
		rank: 1385,
		frequency: 54.06,
		lemma: "観光"
	},
	{
		rank: 1386,
		frequency: 54.06,
		lemma: "提出"
	},
	{
		rank: 1387,
		frequency: 54.02,
		lemma: "以来"
	},
	{
		rank: 1388,
		frequency: 53.99,
		lemma: "推進"
	},
	{
		rank: 1389,
		frequency: 53.99,
		lemma: "首相"
	},
	{
		rank: 1390,
		frequency: 53.84,
		lemma: "業"
	},
	{
		rank: 1391,
		frequency: 53.83,
		lemma: "向け"
	},
	{
		rank: 1392,
		frequency: 53.83,
		lemma: "確保"
	},
	{
		rank: 1393,
		frequency: 53.83,
		lemma: "動物"
	},
	{
		rank: 1394,
		frequency: 53.83,
		lemma: "集める"
	},
	{
		rank: 1395,
		frequency: 53.82,
		lemma: "離れる"
	},
	{
		rank: 1396,
		frequency: 53.78,
		lemma: "ただし"
	},
	{
		rank: 1397,
		frequency: 53.74,
		lemma: "検査"
	},
	{
		rank: 1398,
		frequency: 53.74,
		lemma: "映像"
	},
	{
		rank: 1399,
		frequency: 53.66,
		lemma: "信頼"
	},
	{
		rank: 1400,
		frequency: 53.66,
		lemma: "q"
	},
	{
		rank: 1401,
		frequency: 53.64,
		lemma: "要素"
	},
	{
		rank: 1402,
		frequency: 53.62,
		lemma: "触れる"
	},
	{
		rank: 1403,
		frequency: 53.61,
		lemma: "笑う"
	},
	{
		rank: 1404,
		frequency: 53.54,
		lemma: "どんどん"
	},
	{
		rank: 1405,
		frequency: 53.53,
		lemma: "世"
	},
	{
		rank: 1406,
		frequency: 53.5,
		lemma: "コスト"
	},
	{
		rank: 1407,
		frequency: 53.31,
		lemma: "人物"
	},
	{
		rank: 1408,
		frequency: 53.14,
		lemma: "規制"
	},
	{
		rank: 1409,
		frequency: 53.09,
		lemma: "空間"
	},
	{
		rank: 1410,
		frequency: 52.98,
		lemma: "記念"
	},
	{
		rank: 1411,
		frequency: 52.91,
		lemma: "方針"
	},
	{
		rank: 1412,
		frequency: 52.9,
		lemma: "もらえる"
	},
	{
		rank: 1413,
		frequency: 52.86,
		lemma: "よろしい"
	},
	{
		rank: 1414,
		frequency: 52.85,
		lemma: "もっとも"
	},
	{
		rank: 1415,
		frequency: 52.85,
		lemma: "役"
	},
	{
		rank: 1416,
		frequency: 52.83,
		lemma: "右"
	},
	{
		rank: 1417,
		frequency: 52.76,
		lemma: "楽しみ"
	},
	{
		rank: 1418,
		frequency: 52.75,
		lemma: "審議"
	},
	{
		rank: 1419,
		frequency: 52.74,
		lemma: "競争"
	},
	{
		rank: 1420,
		frequency: 52.68,
		lemma: "設置"
	},
	{
		rank: 1421,
		frequency: 52.67,
		lemma: "位置"
	},
	{
		rank: 1422,
		frequency: 52.61,
		lemma: "テスト"
	},
	{
		rank: 1423,
		frequency: 52.58,
		lemma: "全然"
	},
	{
		rank: 1424,
		frequency: 52.5,
		lemma: "費用"
	},
	{
		rank: 1425,
		frequency: 52.46,
		lemma: "株式会社"
	},
	{
		rank: 1426,
		frequency: 52.45,
		lemma: "席"
	},
	{
		rank: 1427,
		frequency: 52.45,
		lemma: "観"
	},
	{
		rank: 1428,
		frequency: 52.42,
		lemma: "ロ"
	},
	{
		rank: 1429,
		frequency: 52.42,
		lemma: "大統領"
	},
	{
		rank: 1430,
		frequency: 52.35,
		lemma: "指定"
	},
	{
		rank: 1431,
		frequency: 52.18,
		lemma: "事務所"
	},
	{
		rank: 1432,
		frequency: 51.99,
		lemma: "感情"
	},
	{
		rank: 1433,
		frequency: 51.99,
		lemma: "付く"
	},
	{
		rank: 1434,
		frequency: 51.89,
		lemma: "さまざま"
	},
	{
		rank: 1435,
		frequency: 51.85,
		lemma: "京都"
	},
	{
		rank: 1436,
		frequency: 51.81,
		lemma: "ランキング"
	},
	{
		rank: 1437,
		frequency: 51.73,
		lemma: "といった"
	},
	{
		rank: 1438,
		frequency: 51.71,
		lemma: "かかわる"
	},
	{
		rank: 1439,
		frequency: 51.61,
		lemma: "↑"
	},
	{
		rank: 1440,
		frequency: 51.53,
		lemma: "さすが"
	},
	{
		rank: 1441,
		frequency: 51.53,
		lemma: "許す"
	},
	{
		rank: 1442,
		frequency: 51.52,
		lemma: "空"
	},
	{
		rank: 1443,
		frequency: 51.4,
		lemma: "関わる"
	},
	{
		rank: 1444,
		frequency: 51.4,
		lemma: "起こす"
	},
	{
		rank: 1445,
		frequency: 51.39,
		lemma: "仲間"
	},
	{
		rank: 1446,
		frequency: 51.38,
		lemma: "メッセージ"
	},
	{
		rank: 1447,
		frequency: 51.32,
		lemma: "迎える"
	},
	{
		rank: 1448,
		frequency: 51.25,
		lemma: "整理"
	},
	{
		rank: 1449,
		frequency: 51.23,
		lemma: "協会"
	},
	{
		rank: 1450,
		frequency: 51.19,
		lemma: "モノ"
	},
	{
		rank: 1451,
		frequency: 51.16,
		lemma: "官"
	},
	{
		rank: 1452,
		frequency: 51.15,
		lemma: "至る"
	},
	{
		rank: 1453,
		frequency: 51.07,
		lemma: "ロシア"
	},
	{
		rank: 1454,
		frequency: 51.07,
		lemma: "多数"
	},
	{
		rank: 1455,
		frequency: 50.99,
		lemma: "デジタル"
	},
	{
		rank: 1456,
		frequency: 50.95,
		lemma: "耳"
	},
	{
		rank: 1457,
		frequency: 50.94,
		lemma: "積極"
	},
	{
		rank: 1458,
		frequency: 50.89,
		lemma: "かつ"
	},
	{
		rank: 1459,
		frequency: 50.89,
		lemma: "願う"
	},
	{
		rank: 1460,
		frequency: 50.83,
		lemma: "安心"
	},
	{
		rank: 1461,
		frequency: 50.76,
		lemma: "ダメ"
	},
	{
		rank: 1462,
		frequency: 50.75,
		lemma: "独立"
	},
	{
		rank: 1463,
		frequency: 50.75,
		lemma: "イン"
	},
	{
		rank: 1464,
		frequency: 50.72,
		lemma: "読者"
	},
	{
		rank: 1465,
		frequency: 50.7,
		lemma: "勝つ"
	},
	{
		rank: 1466,
		frequency: 50.67,
		lemma: "ぶり"
	},
	{
		rank: 1467,
		frequency: 50.65,
		lemma: "雇用"
	},
	{
		rank: 1468,
		frequency: 50.56,
		lemma: "なに"
	},
	{
		rank: 1469,
		frequency: 50.47,
		lemma: "傾向"
	},
	{
		rank: 1470,
		frequency: 50.34,
		lemma: "そもそも"
	},
	{
		rank: 1471,
		frequency: 50.29,
		lemma: "打つ"
	},
	{
		rank: 1472,
		frequency: 50.26,
		lemma: "賞"
	},
	{
		rank: 1473,
		frequency: 50.23,
		lemma: "誕生"
	},
	{
		rank: 1474,
		frequency: 50.21,
		lemma: "ぼく"
	},
	{
		rank: 1475,
		frequency: 50.19,
		lemma: "遅い"
	},
	{
		rank: 1476,
		frequency: 50.18,
		lemma: "流れる"
	},
	{
		rank: 1477,
		frequency: 50.16,
		lemma: "撮る"
	},
	{
		rank: 1478,
		frequency: 50.08,
		lemma: "いらっしゃる"
	},
	{
		rank: 1479,
		frequency: 50.02,
		lemma: "まいる"
	},
	{
		rank: 1480,
		frequency: 50.02,
		lemma: "バー"
	},
	{
		rank: 1481,
		frequency: 50,
		lemma: "都"
	},
	{
		rank: 1482,
		frequency: 50,
		lemma: "全員"
	},
	{
		rank: 1483,
		frequency: 49.97,
		lemma: "コンピュータ"
	},
	{
		rank: 1484,
		frequency: 49.94,
		lemma: "皆"
	},
	{
		rank: 1485,
		frequency: 49.82,
		lemma: "参照"
	},
	{
		rank: 1486,
		frequency: 49.71,
		lemma: "少なくとも"
	},
	{
		rank: 1487,
		frequency: 49.68,
		lemma: "地元"
	},
	{
		rank: 1488,
		frequency: 49.67,
		lemma: "壁"
	},
	{
		rank: 1489,
		frequency: 49.65,
		lemma: "是非"
	},
	{
		rank: 1490,
		frequency: 49.6,
		lemma: "明確"
	},
	{
		rank: 1491,
		frequency: 49.59,
		lemma: "つながる"
	},
	{
		rank: 1492,
		frequency: 49.57,
		lemma: "つて"
	},
	{
		rank: 1493,
		frequency: 49.54,
		lemma: "士"
	},
	{
		rank: 1494,
		frequency: 49.52,
		lemma: "特徴"
	},
	{
		rank: 1495,
		frequency: 49.51,
		lemma: "セット"
	},
	{
		rank: 1496,
		frequency: 49.42,
		lemma: "たつ"
	},
	{
		rank: 1497,
		frequency: 49.42,
		lemma: "皆様"
	},
	{
		rank: 1498,
		frequency: 49.42,
		lemma: "カメラ"
	},
	{
		rank: 1499,
		frequency: 49.36,
		lemma: "どうしても"
	},
	{
		rank: 1500,
		frequency: 49.32,
		lemma: "別に"
	},
	{
		rank: 1501,
		frequency: 49.25,
		lemma: "魅力"
	},
	{
		rank: 1502,
		frequency: 49.23,
		lemma: "人口"
	},
	{
		rank: 1503,
		frequency: 49.2,
		lemma: "反応"
	},
	{
		rank: 1504,
		frequency: 49.2,
		lemma: "きちんと"
	},
	{
		rank: 1505,
		frequency: 49.16,
		lemma: "まだまだ"
	},
	{
		rank: 1506,
		frequency: 49.08,
		lemma: "そういった"
	},
	{
		rank: 1507,
		frequency: 49.08,
		lemma: "手段"
	},
	{
		rank: 1508,
		frequency: 49.07,
		lemma: "有効"
	},
	{
		rank: 1509,
		frequency: 49.02,
		lemma: "タイ"
	},
	{
		rank: 1510,
		frequency: 49,
		lemma: "工場"
	},
	{
		rank: 1511,
		frequency: 49,
		lemma: "入力"
	},
	{
		rank: 1512,
		frequency: 48.98,
		lemma: "ビデオ"
	},
	{
		rank: 1513,
		frequency: 48.98,
		lemma: "注文"
	},
	{
		rank: 1514,
		frequency: 48.97,
		lemma: "集中"
	},
	{
		rank: 1515,
		frequency: 48.93,
		lemma: "あまりに"
	},
	{
		rank: 1516,
		frequency: 48.9,
		lemma: "さま"
	},
	{
		rank: 1517,
		frequency: 48.85,
		lemma: "一度"
	},
	{
		rank: 1518,
		frequency: 48.75,
		lemma: "脳"
	},
	{
		rank: 1519,
		frequency: 48.73,
		lemma: "北"
	},
	{
		rank: 1520,
		frequency: 48.67,
		lemma: "現象"
	},
	{
		rank: 1521,
		frequency: 48.65,
		lemma: "ビル"
	},
	{
		rank: 1522,
		frequency: 48.6,
		lemma: "団"
	},
	{
		rank: 1523,
		frequency: 48.59,
		lemma: "感動"
	},
	{
		rank: 1524,
		frequency: 48.48,
		lemma: "ソ"
	},
	{
		rank: 1525,
		frequency: 48.46,
		lemma: "Δ"
	},
	{
		rank: 1526,
		frequency: 48.39,
		lemma: "おいしい"
	},
	{
		rank: 1527,
		frequency: 48.37,
		lemma: "禁止"
	},
	{
		rank: 1528,
		frequency: 48.37,
		lemma: "サポート"
	},
	{
		rank: 1529,
		frequency: 48.36,
		lemma: "ずつ"
	},
	{
		rank: 1530,
		frequency: 48.2,
		lemma: "実践"
	},
	{
		rank: 1531,
		frequency: 48.06,
		lemma: "おそらく"
	},
	{
		rank: 1532,
		frequency: 48.05,
		lemma: "小泉"
	},
	{
		rank: 1533,
		frequency: 48.02,
		lemma: "職員"
	},
	{
		rank: 1534,
		frequency: 48.01,
		lemma: "理事"
	},
	{
		rank: 1535,
		frequency: 47.99,
		lemma: "会員"
	},
	{
		rank: 1536,
		frequency: 47.94,
		lemma: "案内"
	},
	{
		rank: 1537,
		frequency: 47.93,
		lemma: "過ごす"
	},
	{
		rank: 1538,
		frequency: 47.92,
		lemma: "薬"
	},
	{
		rank: 1539,
		frequency: 47.92,
		lemma: "シーン"
	},
	{
		rank: 1540,
		frequency: 47.89,
		lemma: "従来"
	},
	{
		rank: 1541,
		frequency: 47.79,
		lemma: "農業"
	},
	{
		rank: 1542,
		frequency: 47.75,
		lemma: "用意"
	},
	{
		rank: 1543,
		frequency: 47.73,
		lemma: "運用"
	},
	{
		rank: 1544,
		frequency: 47.71,
		lemma: "世代"
	},
	{
		rank: 1545,
		frequency: 47.69,
		lemma: "そうした"
	},
	{
		rank: 1546,
		frequency: 47.68,
		lemma: "歌う"
	},
	{
		rank: 1547,
		frequency: 47.68,
		lemma: "強化"
	},
	{
		rank: 1548,
		frequency: 47.68,
		lemma: "納得"
	},
	{
		rank: 1549,
		frequency: 47.66,
		lemma: "周り"
	},
	{
		rank: 1550,
		frequency: 47.64,
		lemma: "収入"
	},
	{
		rank: 1551,
		frequency: 47.62,
		lemma: "増加"
	},
	{
		rank: 1552,
		frequency: 47.61,
		lemma: "レポート"
	},
	{
		rank: 1553,
		frequency: 47.61,
		lemma: "年齢"
	},
	{
		rank: 1554,
		frequency: 47.58,
		lemma: "裏"
	},
	{
		rank: 1555,
		frequency: 47.57,
		lemma: "未来"
	},
	{
		rank: 1556,
		frequency: 47.54,
		lemma: "社員"
	},
	{
		rank: 1557,
		frequency: 47.51,
		lemma: "食"
	},
	{
		rank: 1558,
		frequency: 47.45,
		lemma: "教会"
	},
	{
		rank: 1559,
		frequency: 47.45,
		lemma: "舞台"
	},
	{
		rank: 1560,
		frequency: 47.42,
		lemma: "前回"
	},
	{
		rank: 1561,
		frequency: 47.39,
		lemma: "年金"
	},
	{
		rank: 1562,
		frequency: 47.37,
		lemma: "もう少し"
	},
	{
		rank: 1563,
		frequency: 47.36,
		lemma: "＠"
	},
	{
		rank: 1564,
		frequency: 47.3,
		lemma: "交通"
	},
	{
		rank: 1565,
		frequency: 47.3,
		lemma: "総"
	},
	{
		rank: 1566,
		frequency: 47.3,
		lemma: "料金"
	},
	{
		rank: 1567,
		frequency: 47.3,
		lemma: "教師"
	},
	{
		rank: 1568,
		frequency: 47.28,
		lemma: "重い"
	},
	{
		rank: 1569,
		frequency: 47.12,
		lemma: "どうして"
	},
	{
		rank: 1570,
		frequency: 47.09,
		lemma: "著"
	},
	{
		rank: 1571,
		frequency: 47.06,
		lemma: "森"
	},
	{
		rank: 1572,
		frequency: 46.99,
		lemma: "他人"
	},
	{
		rank: 1573,
		frequency: 46.9,
		lemma: "組"
	},
	{
		rank: 1574,
		frequency: 46.86,
		lemma: "株式"
	},
	{
		rank: 1575,
		frequency: 46.83,
		lemma: "上昇"
	},
	{
		rank: 1576,
		frequency: 46.73,
		lemma: "否定"
	},
	{
		rank: 1577,
		frequency: 46.63,
		lemma: "機械"
	},
	{
		rank: 1578,
		frequency: 46.6,
		lemma: "完成"
	},
	{
		rank: 1579,
		frequency: 46.57,
		lemma: "大好き"
	},
	{
		rank: 1580,
		frequency: 46.53,
		lemma: "ねぇ"
	},
	{
		rank: 1581,
		frequency: 46.53,
		lemma: "扱う"
	},
	{
		rank: 1582,
		frequency: 46.51,
		lemma: "修正"
	},
	{
		rank: 1583,
		frequency: 46.48,
		lemma: "くん"
	},
	{
		rank: 1584,
		frequency: 46.45,
		lemma: "電車"
	},
	{
		rank: 1585,
		frequency: 46.4,
		lemma: "一応"
	},
	{
		rank: 1586,
		frequency: 46.39,
		lemma: "向上"
	},
	{
		rank: 1587,
		frequency: 46.35,
		lemma: "負ける"
	},
	{
		rank: 1588,
		frequency: 46.32,
		lemma: "生じる"
	},
	{
		rank: 1589,
		frequency: 46.28,
		lemma: "週"
	},
	{
		rank: 1590,
		frequency: 46.28,
		lemma: "野球"
	},
	{
		rank: 1591,
		frequency: 46.24,
		lemma: "姿勢"
	},
	{
		rank: 1592,
		frequency: 46.21,
		lemma: "スペイン"
	},
	{
		rank: 1593,
		frequency: 46.09,
		lemma: "遊ぶ"
	},
	{
		rank: 1594,
		frequency: 46.09,
		lemma: "訪問"
	},
	{
		rank: 1595,
		frequency: 46.07,
		lemma: "引用"
	},
	{
		rank: 1596,
		frequency: 46,
		lemma: "インド"
	},
	{
		rank: 1597,
		frequency: 45.97,
		lemma: "並ぶ"
	},
	{
		rank: 1598,
		frequency: 45.96,
		lemma: "視点"
	},
	{
		rank: 1599,
		frequency: 45.94,
		lemma: "小学校"
	},
	{
		rank: 1600,
		frequency: 45.87,
		lemma: "電気"
	},
	{
		rank: 1601,
		frequency: 45.86,
		lemma: "ノ"
	},
	{
		rank: 1602,
		frequency: 45.86,
		lemma: "パ"
	},
	{
		rank: 1603,
		frequency: 45.83,
		lemma: "効率"
	},
	{
		rank: 1604,
		frequency: 45.8,
		lemma: "間違う"
	},
	{
		rank: 1605,
		frequency: 45.79,
		lemma: "芸術"
	},
	{
		rank: 1606,
		frequency: 45.66,
		lemma: "挙げる"
	},
	{
		rank: 1607,
		frequency: 45.64,
		lemma: "会話"
	},
	{
		rank: 1608,
		frequency: 45.61,
		lemma: "ドラマ"
	},
	{
		rank: 1609,
		frequency: 45.59,
		lemma: "再び"
	},
	{
		rank: 1610,
		frequency: 45.57,
		lemma: "春"
	},
	{
		rank: 1611,
		frequency: 45.46,
		lemma: "解釈"
	},
	{
		rank: 1612,
		frequency: 45.4,
		lemma: "ゆく"
	},
	{
		rank: 1613,
		frequency: 45.39,
		lemma: "猫"
	},
	{
		rank: 1614,
		frequency: 45.38,
		lemma: "４月"
	},
	{
		rank: 1615,
		frequency: 45.37,
		lemma: "資産"
	},
	{
		rank: 1616,
		frequency: 45.34,
		lemma: "行"
	},
	{
		rank: 1617,
		frequency: 45.29,
		lemma: "結論"
	},
	{
		rank: 1618,
		frequency: 45.24,
		lemma: "大丈夫"
	},
	{
		rank: 1619,
		frequency: 45.24,
		lemma: "止める"
	},
	{
		rank: 1620,
		frequency: 45.19,
		lemma: "取り組む"
	},
	{
		rank: 1621,
		frequency: 45.17,
		lemma: "かつて"
	},
	{
		rank: 1622,
		frequency: 45.15,
		lemma: "怖い"
	},
	{
		rank: 1623,
		frequency: 45.1,
		lemma: "半"
	},
	{
		rank: 1624,
		frequency: 45.1,
		lemma: "界"
	},
	{
		rank: 1625,
		frequency: 45.08,
		lemma: "製造"
	},
	{
		rank: 1626,
		frequency: 45.03,
		lemma: "困難"
	},
	{
		rank: 1627,
		frequency: 44.98,
		lemma: "回復"
	},
	{
		rank: 1628,
		frequency: 44.96,
		lemma: "◎"
	},
	{
		rank: 1629,
		frequency: 44.95,
		lemma: "美味しい"
	},
	{
		rank: 1630,
		frequency: 44.93,
		lemma: "適用"
	},
	{
		rank: 1631,
		frequency: 44.92,
		lemma: "母親"
	},
	{
		rank: 1632,
		frequency: 44.9,
		lemma: "取材"
	},
	{
		rank: 1633,
		frequency: 44.87,
		lemma: "やっと"
	},
	{
		rank: 1634,
		frequency: 44.83,
		lemma: "保障"
	},
	{
		rank: 1635,
		frequency: 44.83,
		lemma: "集団"
	},
	{
		rank: 1636,
		frequency: 44.81,
		lemma: "ルール"
	},
	{
		rank: 1637,
		frequency: 44.81,
		lemma: "卒業"
	},
	{
		rank: 1638,
		frequency: 44.77,
		lemma: "事態"
	},
	{
		rank: 1639,
		frequency: 44.7,
		lemma: "立てる"
	},
	{
		rank: 1640,
		frequency: 44.68,
		lemma: "雪"
	},
	{
		rank: 1641,
		frequency: 44.68,
		lemma: "画面"
	},
	{
		rank: 1642,
		frequency: 44.63,
		lemma: "おかしい"
	},
	{
		rank: 1643,
		frequency: 44.58,
		lemma: "資格"
	},
	{
		rank: 1644,
		frequency: 44.55,
		lemma: "時点"
	},
	{
		rank: 1645,
		frequency: 44.54,
		lemma: "病気"
	},
	{
		rank: 1646,
		frequency: 44.53,
		lemma: "なれる"
	},
	{
		rank: 1647,
		frequency: 44.53,
		lemma: "スタート"
	},
	{
		rank: 1648,
		frequency: 44.5,
		lemma: "更に"
	},
	{
		rank: 1649,
		frequency: 44.49,
		lemma: "活躍"
	},
	{
		rank: 1650,
		frequency: 44.41,
		lemma: "ですから"
	},
	{
		rank: 1651,
		frequency: 44.38,
		lemma: "馬"
	},
	{
		rank: 1652,
		frequency: 44.32,
		lemma: "冊"
	},
	{
		rank: 1653,
		frequency: 44.28,
		lemma: "問う"
	},
	{
		rank: 1654,
		frequency: 44.25,
		lemma: "ちょうど"
	},
	{
		rank: 1655,
		frequency: 44.25,
		lemma: "命"
	},
	{
		rank: 1656,
		frequency: 44.23,
		lemma: "殺す"
	},
	{
		rank: 1657,
		frequency: 44.21,
		lemma: "サイズ"
	},
	{
		rank: 1658,
		frequency: 44.2,
		lemma: "ころ"
	},
	{
		rank: 1659,
		frequency: 44.19,
		lemma: "限定"
	},
	{
		rank: 1660,
		frequency: 44.12,
		lemma: "ひとり"
	},
	{
		rank: 1661,
		frequency: 44.12,
		lemma: "医師"
	},
	{
		rank: 1662,
		frequency: 43.98,
		lemma: "工事"
	},
	{
		rank: 1663,
		frequency: 43.94,
		lemma: "居る"
	},
	{
		rank: 1664,
		frequency: 43.92,
		lemma: "無"
	},
	{
		rank: 1665,
		frequency: 43.92,
		lemma: "６月"
	},
	{
		rank: 1666,
		frequency: 43.87,
		lemma: "現れる"
	},
	{
		rank: 1667,
		frequency: 43.85,
		lemma: "正直"
	},
	{
		rank: 1668,
		frequency: 43.84,
		lemma: "原則"
	},
	{
		rank: 1669,
		frequency: 43.83,
		lemma: "自動車"
	},
	{
		rank: 1670,
		frequency: 43.78,
		lemma: "づくり"
	},
	{
		rank: 1671,
		frequency: 43.77,
		lemma: "では"
	},
	{
		rank: 1672,
		frequency: 43.77,
		lemma: "部門"
	},
	{
		rank: 1673,
		frequency: 43.75,
		lemma: "女の子"
	},
	{
		rank: 1674,
		frequency: 43.75,
		lemma: "出演"
	},
	{
		rank: 1675,
		frequency: 43.73,
		lemma: "民族"
	},
	{
		rank: 1676,
		frequency: 43.73,
		lemma: "充実"
	},
	{
		rank: 1677,
		frequency: 43.67,
		lemma: "伴う"
	},
	{
		rank: 1678,
		frequency: 43.65,
		lemma: "講演"
	},
	{
		rank: 1679,
		frequency: 43.64,
		lemma: "したがって"
	},
	{
		rank: 1680,
		frequency: 43.61,
		lemma: "瞬間"
	},
	{
		rank: 1681,
		frequency: 43.6,
		lemma: "がる"
	},
	{
		rank: 1682,
		frequency: 43.6,
		lemma: "交流"
	},
	{
		rank: 1683,
		frequency: 43.56,
		lemma: "大量"
	},
	{
		rank: 1684,
		frequency: 43.54,
		lemma: "回る"
	},
	{
		rank: 1685,
		frequency: 43.53,
		lemma: "久しぶり"
	},
	{
		rank: 1686,
		frequency: 43.51,
		lemma: "革命"
	},
	{
		rank: 1687,
		frequency: 43.5,
		lemma: "成果"
	},
	{
		rank: 1688,
		frequency: 43.47,
		lemma: "じ"
	},
	{
		rank: 1689,
		frequency: 43.44,
		lemma: "コミュニケーション"
	},
	{
		rank: 1690,
		frequency: 43.41,
		lemma: "任"
	},
	{
		rank: 1691,
		frequency: 43.41,
		lemma: "標準"
	},
	{
		rank: 1692,
		frequency: 43.39,
		lemma: "ひる"
	},
	{
		rank: 1693,
		frequency: 43.36,
		lemma: "まるで"
	},
	{
		rank: 1694,
		frequency: 43.32,
		lemma: "輸入"
	},
	{
		rank: 1695,
		frequency: 43.31,
		lemma: "やつ"
	},
	{
		rank: 1696,
		frequency: 43.22,
		lemma: "背景"
	},
	{
		rank: 1697,
		frequency: 43.22,
		lemma: "政権"
	},
	{
		rank: 1698,
		frequency: 43.19,
		lemma: "スタイル"
	},
	{
		rank: 1699,
		frequency: 43.19,
		lemma: "喜ぶ"
	},
	{
		rank: 1700,
		frequency: 43.18,
		lemma: "星"
	},
	{
		rank: 1701,
		frequency: 43.17,
		lemma: "協議"
	},
	{
		rank: 1702,
		frequency: 43.16,
		lemma: "っていう"
	},
	{
		rank: 1703,
		frequency: 43.16,
		lemma: "関心"
	},
	{
		rank: 1704,
		frequency: 43.16,
		lemma: "勝手"
	},
	{
		rank: 1705,
		frequency: 43.09,
		lemma: "一覧"
	},
	{
		rank: 1706,
		frequency: 43.09,
		lemma: "副"
	},
	{
		rank: 1707,
		frequency: 43.02,
		lemma: "取り上げる"
	},
	{
		rank: 1708,
		frequency: 43.01,
		lemma: "７月"
	},
	{
		rank: 1709,
		frequency: 43,
		lemma: "伝統"
	},
	{
		rank: 1710,
		frequency: 42.99,
		lemma: "横"
	},
	{
		rank: 1711,
		frequency: 42.92,
		lemma: "聞こえる"
	},
	{
		rank: 1712,
		frequency: 42.84,
		lemma: "民主"
	},
	{
		rank: 1713,
		frequency: 42.81,
		lemma: "制限"
	},
	{
		rank: 1714,
		frequency: 42.79,
		lemma: "投票"
	},
	{
		rank: 1715,
		frequency: 42.79,
		lemma: "どうぞ"
	},
	{
		rank: 1716,
		frequency: 42.77,
		lemma: "値段"
	},
	{
		rank: 1717,
		frequency: 42.61,
		lemma: "沖縄"
	},
	{
		rank: 1718,
		frequency: 42.6,
		lemma: "図る"
	},
	{
		rank: 1719,
		frequency: 42.59,
		lemma: "川"
	},
	{
		rank: 1720,
		frequency: 42.59,
		lemma: "軽い"
	},
	{
		rank: 1721,
		frequency: 42.52,
		lemma: "若者"
	},
	{
		rank: 1722,
		frequency: 42.51,
		lemma: "心理"
	},
	{
		rank: 1723,
		frequency: 42.49,
		lemma: "大体"
	},
	{
		rank: 1724,
		frequency: 42.46,
		lemma: "里"
	},
	{
		rank: 1725,
		frequency: 42.45,
		lemma: "掲示板"
	},
	{
		rank: 1726,
		frequency: 42.41,
		lemma: "番号"
	},
	{
		rank: 1727,
		frequency: 42.4,
		lemma: "トン"
	},
	{
		rank: 1728,
		frequency: 42.4,
		lemma: "前提"
	},
	{
		rank: 1729,
		frequency: 42.36,
		lemma: "館"
	},
	{
		rank: 1730,
		frequency: 42.32,
		lemma: "船"
	},
	{
		rank: 1731,
		frequency: 42.28,
		lemma: "ある程度"
	},
	{
		rank: 1732,
		frequency: 42.28,
		lemma: "突然"
	},
	{
		rank: 1733,
		frequency: 42.24,
		lemma: "なんだか"
	},
	{
		rank: 1734,
		frequency: 42.23,
		lemma: "半分"
	},
	{
		rank: 1735,
		frequency: 42.22,
		lemma: "思想"
	},
	{
		rank: 1736,
		frequency: 42.15,
		lemma: "オープン"
	},
	{
		rank: 1737,
		frequency: 42.09,
		lemma: "請求"
	},
	{
		rank: 1738,
		frequency: 42.03,
		lemma: "正確"
	},
	{
		rank: 1739,
		frequency: 42.03,
		lemma: "教室"
	},
	{
		rank: 1740,
		frequency: 42.01,
		lemma: "周辺"
	},
	{
		rank: 1741,
		frequency: 42.01,
		lemma: "セミナー"
	},
	{
		rank: 1742,
		frequency: 41.98,
		lemma: "リスト"
	},
	{
		rank: 1743,
		frequency: 41.97,
		lemma: "３月"
	},
	{
		rank: 1744,
		frequency: 41.9,
		lemma: "応じる"
	},
	{
		rank: 1745,
		frequency: 41.89,
		lemma: "不足"
	},
	{
		rank: 1746,
		frequency: 41.87,
		lemma: "実"
	},
	{
		rank: 1747,
		frequency: 41.86,
		lemma: "寒い"
	},
	{
		rank: 1748,
		frequency: 41.86,
		lemma: "デ"
	},
	{
		rank: 1749,
		frequency: 41.85,
		lemma: "法案"
	},
	{
		rank: 1750,
		frequency: 41.83,
		lemma: "東"
	},
	{
		rank: 1751,
		frequency: 41.77,
		lemma: "ボール"
	},
	{
		rank: 1752,
		frequency: 41.76,
		lemma: "すなわち"
	},
	{
		rank: 1753,
		frequency: 41.75,
		lemma: "コード"
	},
	{
		rank: 1754,
		frequency: 41.73,
		lemma: "王"
	},
	{
		rank: 1755,
		frequency: 41.73,
		lemma: "捨てる"
	},
	{
		rank: 1756,
		frequency: 41.65,
		lemma: "世の中"
	},
	{
		rank: 1757,
		frequency: 41.64,
		lemma: "みなさん"
	},
	{
		rank: 1758,
		frequency: 41.61,
		lemma: "取得"
	},
	{
		rank: 1759,
		frequency: 41.6,
		lemma: "項目"
	},
	{
		rank: 1760,
		frequency: 41.58,
		lemma: "そんなに"
	},
	{
		rank: 1761,
		frequency: 41.58,
		lemma: "旧"
	},
	{
		rank: 1762,
		frequency: 41.58,
		lemma: "性格"
	},
	{
		rank: 1763,
		frequency: 41.56,
		lemma: "次第"
	},
	{
		rank: 1764,
		frequency: 41.54,
		lemma: "顧客"
	},
	{
		rank: 1765,
		frequency: 41.49,
		lemma: "着る"
	},
	{
		rank: 1766,
		frequency: 41.49,
		lemma: "いかに"
	},
	{
		rank: 1767,
		frequency: 41.45,
		lemma: "減る"
	},
	{
		rank: 1768,
		frequency: 41.43,
		lemma: "避ける"
	},
	{
		rank: 1769,
		frequency: 41.43,
		lemma: "多分"
	},
	{
		rank: 1770,
		frequency: 41.42,
		lemma: "地区"
	},
	{
		rank: 1771,
		frequency: 41.41,
		lemma: "を通じて"
	},
	{
		rank: 1772,
		frequency: 41.38,
		lemma: "長期"
	},
	{
		rank: 1773,
		frequency: 41.37,
		lemma: "遠い"
	},
	{
		rank: 1774,
		frequency: 41.31,
		lemma: "がんばる"
	},
	{
		rank: 1775,
		frequency: 41.3,
		lemma: "ミ"
	},
	{
		rank: 1776,
		frequency: 41.29,
		lemma: "達成"
	},
	{
		rank: 1777,
		frequency: 41.26,
		lemma: "著者"
	},
	{
		rank: 1778,
		frequency: 41.25,
		lemma: "弱い"
	},
	{
		rank: 1779,
		frequency: 41.23,
		lemma: "ソフトウェア"
	},
	{
		rank: 1780,
		frequency: 41.18,
		lemma: "におきまして"
	},
	{
		rank: 1781,
		frequency: 41.16,
		lemma: "展示"
	},
	{
		rank: 1782,
		frequency: 41.15,
		lemma: "誌"
	},
	{
		rank: 1783,
		frequency: 41.14,
		lemma: "答え"
	},
	{
		rank: 1784,
		frequency: 41.11,
		lemma: "訪れる"
	},
	{
		rank: 1785,
		frequency: 41.05,
		lemma: "忙しい"
	},
	{
		rank: 1786,
		frequency: 40.96,
		lemma: "後半"
	},
	{
		rank: 1787,
		frequency: 40.92,
		lemma: "福祉"
	},
	{
		rank: 1788,
		frequency: 40.87,
		lemma: "到着"
	},
	{
		rank: 1789,
		frequency: 40.87,
		lemma: "ナ"
	},
	{
		rank: 1790,
		frequency: 40.85,
		lemma: "罪"
	},
	{
		rank: 1791,
		frequency: 40.83,
		lemma: "楽"
	},
	{
		rank: 1792,
		frequency: 40.81,
		lemma: "操作"
	},
	{
		rank: 1793,
		frequency: 40.76,
		lemma: "便利"
	},
	{
		rank: 1794,
		frequency: 40.73,
		lemma: "支配"
	},
	{
		rank: 1795,
		frequency: 40.73,
		lemma: "南"
	},
	{
		rank: 1796,
		frequency: 40.72,
		lemma: "何とか"
	},
	{
		rank: 1797,
		frequency: 40.69,
		lemma: "講座"
	},
	{
		rank: 1798,
		frequency: 40.69,
		lemma: "現地"
	},
	{
		rank: 1799,
		frequency: 40.65,
		lemma: "態度"
	},
	{
		rank: 1800,
		frequency: 40.6,
		lemma: "審査"
	},
	{
		rank: 1801,
		frequency: 40.57,
		lemma: "公園"
	},
	{
		rank: 1802,
		frequency: 40.55,
		lemma: "過程"
	},
	{
		rank: 1803,
		frequency: 40.53,
		lemma: "研修"
	},
	{
		rank: 1804,
		frequency: 40.51,
		lemma: "長官"
	},
	{
		rank: 1805,
		frequency: 40.5,
		lemma: "バランス"
	},
	{
		rank: 1806,
		frequency: 40.5,
		lemma: "変"
	},
	{
		rank: 1807,
		frequency: 40.49,
		lemma: "なー"
	},
	{
		rank: 1808,
		frequency: 40.44,
		lemma: "連続"
	},
	{
		rank: 1809,
		frequency: 40.44,
		lemma: "望む"
	},
	{
		rank: 1810,
		frequency: 40.41,
		lemma: "空気"
	},
	{
		rank: 1811,
		frequency: 40.4,
		lemma: "翻訳"
	},
	{
		rank: 1812,
		frequency: 40.37,
		lemma: "冬"
	},
	{
		rank: 1813,
		frequency: 40.35,
		lemma: "広がる"
	},
	{
		rank: 1814,
		frequency: 40.32,
		lemma: "単純"
	},
	{
		rank: 1815,
		frequency: 40.28,
		lemma: "短い"
	},
	{
		rank: 1816,
		frequency: 40.25,
		lemma: "５月"
	},
	{
		rank: 1817,
		frequency: 40.23,
		lemma: "飛ぶ"
	},
	{
		rank: 1818,
		frequency: 40.23,
		lemma: "予約"
	},
	{
		rank: 1819,
		frequency: 40.18,
		lemma: "構築"
	},
	{
		rank: 1820,
		frequency: 40.17,
		lemma: "党"
	},
	{
		rank: 1821,
		frequency: 40.16,
		lemma: "座る"
	},
	{
		rank: 1822,
		frequency: 40.16,
		lemma: "論文"
	},
	{
		rank: 1823,
		frequency: 40.15,
		lemma: "地震"
	},
	{
		rank: 1824,
		frequency: 40.15,
		lemma: "不"
	},
	{
		rank: 1825,
		frequency: 40.09,
		lemma: "パン"
	},
	{
		rank: 1826,
		frequency: 40.07,
		lemma: "記"
	},
	{
		rank: 1827,
		frequency: 40.03,
		lemma: "継続"
	},
	{
		rank: 1828,
		frequency: 40.03,
		lemma: "一言"
	},
	{
		rank: 1829,
		frequency: 39.99,
		lemma: "出会う"
	},
	{
		rank: 1830,
		frequency: 39.97,
		lemma: "内部"
	},
	{
		rank: 1831,
		frequency: 39.96,
		lemma: "豊か"
	},
	{
		rank: 1832,
		frequency: 39.95,
		lemma: "生命"
	},
	{
		rank: 1833,
		frequency: 39.93,
		lemma: "所得"
	},
	{
		rank: 1834,
		frequency: 39.9,
		lemma: "制作"
	},
	{
		rank: 1835,
		frequency: 39.85,
		lemma: "敵"
	},
	{
		rank: 1836,
		frequency: 39.83,
		lemma: "単位"
	},
	{
		rank: 1837,
		frequency: 39.83,
		lemma: "自信"
	},
	{
		rank: 1838,
		frequency: 39.8,
		lemma: "涙"
	},
	{
		rank: 1839,
		frequency: 39.74,
		lemma: "まずは"
	},
	{
		rank: 1840,
		frequency: 39.72,
		lemma: "科"
	},
	{
		rank: 1841,
		frequency: 39.7,
		lemma: "ゆっくり"
	},
	{
		rank: 1842,
		frequency: 39.7,
		lemma: "あらゆる"
	},
	{
		rank: 1843,
		frequency: 39.67,
		lemma: "ベース"
	},
	{
		rank: 1844,
		frequency: 39.66,
		lemma: "層"
	},
	{
		rank: 1845,
		frequency: 39.57,
		lemma: "毎年"
	},
	{
		rank: 1846,
		frequency: 39.55,
		lemma: "距離"
	},
	{
		rank: 1847,
		frequency: 39.55,
		lemma: "複数"
	},
	{
		rank: 1848,
		frequency: 39.52,
		lemma: "恋愛"
	},
	{
		rank: 1849,
		frequency: 39.5,
		lemma: "め"
	},
	{
		rank: 1850,
		frequency: 39.49,
		lemma: "英"
	},
	{
		rank: 1851,
		frequency: 39.48,
		lemma: "運転"
	},
	{
		rank: 1852,
		frequency: 39.47,
		lemma: "消える"
	},
	{
		rank: 1853,
		frequency: 39.45,
		lemma: "確実"
	},
	{
		rank: 1854,
		frequency: 39.45,
		lemma: "支持"
	},
	{
		rank: 1855,
		frequency: 39.45,
		lemma: "インタビュー"
	},
	{
		rank: 1856,
		frequency: 39.44,
		lemma: "ふる"
	},
	{
		rank: 1857,
		frequency: 39.42,
		lemma: "日間"
	},
	{
		rank: 1858,
		frequency: 39.41,
		lemma: "一定"
	},
	{
		rank: 1859,
		frequency: 39.4,
		lemma: "←"
	},
	{
		rank: 1860,
		frequency: 39.36,
		lemma: "交渉"
	},
	{
		rank: 1861,
		frequency: 39.35,
		lemma: "司法"
	},
	{
		rank: 1862,
		frequency: 39.31,
		lemma: "巻"
	},
	{
		rank: 1863,
		frequency: 39.27,
		lemma: "なんとか"
	},
	{
		rank: 1864,
		frequency: 39.22,
		lemma: "借りる"
	},
	{
		rank: 1865,
		frequency: 39.17,
		lemma: "押す"
	},
	{
		rank: 1866,
		frequency: 39.16,
		lemma: "方式"
	},
	{
		rank: 1867,
		frequency: 39.16,
		lemma: "普段"
	},
	{
		rank: 1868,
		frequency: 39.14,
		lemma: "出席"
	},
	{
		rank: 1869,
		frequency: 39.09,
		lemma: "金利"
	},
	{
		rank: 1870,
		frequency: 39.08,
		lemma: "アニメ"
	},
	{
		rank: 1871,
		frequency: 39.08,
		lemma: "ところで"
	},
	{
		rank: 1872,
		frequency: 39.07,
		lemma: "窓"
	},
	{
		rank: 1873,
		frequency: 39.05,
		lemma: "諸"
	},
	{
		rank: 1874,
		frequency: 39.01,
		lemma: "なくなる"
	},
	{
		rank: 1875,
		frequency: 39,
		lemma: "１つ"
	},
	{
		rank: 1876,
		frequency: 38.98,
		lemma: "危機"
	},
	{
		rank: 1877,
		frequency: 38.98,
		lemma: "やってくる"
	},
	{
		rank: 1878,
		frequency: 38.97,
		lemma: "痛い"
	},
	{
		rank: 1879,
		frequency: 38.97,
		lemma: "低"
	},
	{
		rank: 1880,
		frequency: 38.9,
		lemma: "次に"
	},
	{
		rank: 1881,
		frequency: 38.89,
		lemma: "募集"
	},
	{
		rank: 1882,
		frequency: 38.86,
		lemma: "定める"
	},
	{
		rank: 1883,
		frequency: 38.85,
		lemma: "史"
	},
	{
		rank: 1884,
		frequency: 38.72,
		lemma: "自宅"
	},
	{
		rank: 1885,
		frequency: 38.72,
		lemma: "上記"
	},
	{
		rank: 1886,
		frequency: 38.71,
		lemma: "人権"
	},
	{
		rank: 1887,
		frequency: 38.7,
		lemma: "複雑"
	},
	{
		rank: 1888,
		frequency: 38.59,
		lemma: "おかげ"
	},
	{
		rank: 1889,
		frequency: 38.58,
		lemma: "スーパー"
	},
	{
		rank: 1890,
		frequency: 38.58,
		lemma: "逮捕"
	},
	{
		rank: 1891,
		frequency: 38.56,
		lemma: "器"
	},
	{
		rank: 1892,
		frequency: 38.44,
		lemma: "級"
	},
	{
		rank: 1893,
		frequency: 38.37,
		lemma: "証明"
	},
	{
		rank: 1894,
		frequency: 38.36,
		lemma: "概念"
	},
	{
		rank: 1895,
		frequency: 38.35,
		lemma: "ツール"
	},
	{
		rank: 1896,
		frequency: 38.35,
		lemma: "果たす"
	},
	{
		rank: 1897,
		frequency: 38.34,
		lemma: "コンテンツ"
	},
	{
		rank: 1898,
		frequency: 38.31,
		lemma: "泣く"
	},
	{
		rank: 1899,
		frequency: 38.31,
		lemma: "秋"
	},
	{
		rank: 1900,
		frequency: 38.28,
		lemma: "単に"
	},
	{
		rank: 1901,
		frequency: 38.24,
		lemma: "今週"
	},
	{
		rank: 1902,
		frequency: 38.23,
		lemma: "空港"
	},
	{
		rank: 1903,
		frequency: 38.21,
		lemma: "適切"
	},
	{
		rank: 1904,
		frequency: 38.2,
		lemma: "財産"
	},
	{
		rank: 1905,
		frequency: 38.15,
		lemma: "判決"
	},
	{
		rank: 1906,
		frequency: 38.13,
		lemma: "作家"
	},
	{
		rank: 1907,
		frequency: 38.1,
		lemma: "もたらす"
	},
	{
		rank: 1908,
		frequency: 38.08,
		lemma: "マスコミ"
	},
	{
		rank: 1909,
		frequency: 38.06,
		lemma: "思考"
	},
	{
		rank: 1910,
		frequency: 38.01,
		lemma: "接続"
	},
	{
		rank: 1911,
		frequency: 37.98,
		lemma: "ようやく"
	},
	{
		rank: 1912,
		frequency: 37.97,
		lemma: "悩む"
	},
	{
		rank: 1913,
		frequency: 37.96,
		lemma: "形式"
	},
	{
		rank: 1914,
		frequency: 37.91,
		lemma: "違反"
	},
	{
		rank: 1915,
		frequency: 37.81,
		lemma: "義務"
	},
	{
		rank: 1916,
		frequency: 37.73,
		lemma: "再生"
	},
	{
		rank: 1917,
		frequency: 37.72,
		lemma: "破壊"
	},
	{
		rank: 1918,
		frequency: 37.7,
		lemma: "疲れる"
	},
	{
		rank: 1919,
		frequency: 37.65,
		lemma: "仕組み"
	},
	{
		rank: 1920,
		frequency: 37.64,
		lemma: "研究所"
	},
	{
		rank: 1921,
		frequency: 37.63,
		lemma: "国務大臣"
	},
	{
		rank: 1922,
		frequency: 37.61,
		lemma: "両"
	},
	{
		rank: 1923,
		frequency: 37.59,
		lemma: "受け入れる"
	},
	{
		rank: 1924,
		frequency: 37.58,
		lemma: "だす"
	},
	{
		rank: 1925,
		frequency: 37.54,
		lemma: "いくら"
	},
	{
		rank: 1926,
		frequency: 37.52,
		lemma: "フリー"
	},
	{
		rank: 1927,
		frequency: 37.51,
		lemma: "公式"
	},
	{
		rank: 1928,
		frequency: 37.47,
		lemma: "場面"
	},
	{
		rank: 1929,
		frequency: 37.44,
		lemma: "英国"
	},
	{
		rank: 1930,
		frequency: 37.44,
		lemma: "年生"
	},
	{
		rank: 1931,
		frequency: 37.4,
		lemma: "石"
	},
	{
		rank: 1932,
		frequency: 37.37,
		lemma: "激しい"
	},
	{
		rank: 1933,
		frequency: 37.36,
		lemma: "お客"
	},
	{
		rank: 1934,
		frequency: 37.36,
		lemma: "それにしても"
	},
	{
		rank: 1935,
		frequency: 37.36,
		lemma: "就職"
	},
	{
		rank: 1936,
		frequency: 37.33,
		lemma: "文書"
	},
	{
		rank: 1937,
		frequency: 37.31,
		lemma: "派遣"
	},
	{
		rank: 1938,
		frequency: 37.3,
		lemma: "Ｂ"
	},
	{
		rank: 1939,
		frequency: 37.3,
		lemma: "ｗ"
	},
	{
		rank: 1940,
		frequency: 37.3,
		lemma: "類"
	},
	{
		rank: 1941,
		frequency: 37.25,
		lemma: "テロ"
	},
	{
		rank: 1942,
		frequency: 37.22,
		lemma: "流す"
	},
	{
		rank: 1943,
		frequency: 37.22,
		lemma: "名無し"
	},
	{
		rank: 1944,
		frequency: 37.21,
		lemma: "真"
	},
	{
		rank: 1945,
		frequency: 37.17,
		lemma: "定義"
	},
	{
		rank: 1946,
		frequency: 37.17,
		lemma: "甘い"
	},
	{
		rank: 1947,
		frequency: 37.16,
		lemma: "素敵"
	},
	{
		rank: 1948,
		frequency: 37.03,
		lemma: "プロセス"
	},
	{
		rank: 1949,
		frequency: 37.02,
		lemma: "当たり前"
	},
	{
		rank: 1950,
		frequency: 37.01,
		lemma: "約束"
	},
	{
		rank: 1951,
		frequency: 36.93,
		lemma: "こんなに"
	},
	{
		rank: 1952,
		frequency: 36.92,
		lemma: "コピー"
	},
	{
		rank: 1953,
		frequency: 36.91,
		lemma: "出身"
	},
	{
		rank: 1954,
		frequency: 36.91,
		lemma: "っぽい"
	},
	{
		rank: 1955,
		frequency: 36.89,
		lemma: "局長"
	},
	{
		rank: 1956,
		frequency: 36.81,
		lemma: "事項"
	},
	{
		rank: 1957,
		frequency: 36.8,
		lemma: "観点"
	},
	{
		rank: 1958,
		frequency: 36.77,
		lemma: "質"
	},
	{
		rank: 1959,
		frequency: 36.71,
		lemma: "白"
	},
	{
		rank: 1960,
		frequency: 36.68,
		lemma: "趣味"
	},
	{
		rank: 1961,
		frequency: 36.66,
		lemma: "箱"
	},
	{
		rank: 1962,
		frequency: 36.64,
		lemma: "連れる"
	},
	{
		rank: 1963,
		frequency: 36.59,
		lemma: "‥"
	},
	{
		rank: 1964,
		frequency: 36.59,
		lemma: "ご覧"
	},
	{
		rank: 1965,
		frequency: 36.56,
		lemma: "出発"
	},
	{
		rank: 1966,
		frequency: 36.52,
		lemma: "終える"
	},
	{
		rank: 1967,
		frequency: 36.52,
		lemma: "魚"
	},
	{
		rank: 1968,
		frequency: 36.5,
		lemma: "会計"
	},
	{
		rank: 1969,
		frequency: 36.48,
		lemma: "いくつか"
	},
	{
		rank: 1970,
		frequency: 36.47,
		lemma: "開ける"
	},
	{
		rank: 1971,
		frequency: 36.47,
		lemma: "形成"
	},
	{
		rank: 1972,
		frequency: 36.47,
		lemma: "記述"
	},
	{
		rank: 1973,
		frequency: 36.46,
		lemma: "資源"
	},
	{
		rank: 1974,
		frequency: 36.44,
		lemma: "たぶん"
	},
	{
		rank: 1975,
		frequency: 36.44,
		lemma: "明るい"
	},
	{
		rank: 1976,
		frequency: 36.41,
		lemma: "事例"
	},
	{
		rank: 1977,
		frequency: 36.38,
		lemma: "着く"
	},
	{
		rank: 1978,
		frequency: 36.38,
		lemma: "金額"
	},
	{
		rank: 1979,
		frequency: 36.36,
		lemma: "きれい"
	},
	{
		rank: 1980,
		frequency: 36.35,
		lemma: "と共に"
	},
	{
		rank: 1981,
		frequency: 36.31,
		lemma: "証券"
	},
	{
		rank: 1982,
		frequency: 36.31,
		lemma: "ガ"
	},
	{
		rank: 1983,
		frequency: 36.31,
		lemma: "支える"
	},
	{
		rank: 1984,
		frequency: 36.29,
		lemma: "成立"
	},
	{
		rank: 1985,
		frequency: 36.26,
		lemma: "ひと"
	},
	{
		rank: 1986,
		frequency: 36.14,
		lemma: "軍事"
	},
	{
		rank: 1987,
		frequency: 36.13,
		lemma: "うれしい"
	},
	{
		rank: 1988,
		frequency: 36.13,
		lemma: "訓練"
	},
	{
		rank: 1989,
		frequency: 36.11,
		lemma: "来年"
	},
	{
		rank: 1990,
		frequency: 36.04,
		lemma: "食品"
	},
	{
		rank: 1991,
		frequency: 36.01,
		lemma: "育てる"
	},
	{
		rank: 1992,
		frequency: 36.01,
		lemma: "証拠"
	},
	{
		rank: 1993,
		frequency: 35.97,
		lemma: "ラジオ"
	},
	{
		rank: 1994,
		frequency: 35.92,
		lemma: "暑い"
	},
	{
		rank: 1995,
		frequency: 35.88,
		lemma: "プレゼント"
	},
	{
		rank: 1996,
		frequency: 35.86,
		lemma: "不明"
	},
	{
		rank: 1997,
		frequency: 35.85,
		lemma: "アルバム"
	},
	{
		rank: 1998,
		frequency: 35.84,
		lemma: "内閣"
	},
	{
		rank: 1999,
		frequency: 35.78,
		lemma: "北海道"
	},
	{
		rank: 2000,
		frequency: 35.73,
		lemma: "隣"
	},
	{
		rank: 2001,
		frequency: 35.72,
		lemma: "当"
	},
	{
		rank: 2002,
		frequency: 35.69,
		lemma: "裁判所"
	},
	{
		rank: 2003,
		frequency: 35.69,
		lemma: "挑戦"
	},
	{
		rank: 2004,
		frequency: 35.68,
		lemma: "やり方"
	},
	{
		rank: 2005,
		frequency: 35.65,
		lemma: "バンド"
	},
	{
		rank: 2006,
		frequency: 35.59,
		lemma: "鳥"
	},
	{
		rank: 2007,
		frequency: 35.58,
		lemma: "ブラジル"
	},
	{
		rank: 2008,
		frequency: 35.57,
		lemma: "物質"
	},
	{
		rank: 2009,
		frequency: 35.57,
		lemma: "胸"
	},
	{
		rank: 2010,
		frequency: 35.56,
		lemma: "実に"
	},
	{
		rank: 2011,
		frequency: 35.55,
		lemma: "いかが"
	},
	{
		rank: 2012,
		frequency: 35.52,
		lemma: "手法"
	},
	{
		rank: 2013,
		frequency: 35.48,
		lemma: "保存"
	},
	{
		rank: 2014,
		frequency: 35.48,
		lemma: "師"
	},
	{
		rank: 2015,
		frequency: 35.48,
		lemma: "相互"
	},
	{
		rank: 2016,
		frequency: 35.42,
		lemma: "依頼"
	},
	{
		rank: 2017,
		frequency: 35.39,
		lemma: "黒"
	},
	{
		rank: 2018,
		frequency: 35.39,
		lemma: "差別"
	},
	{
		rank: 2019,
		frequency: 35.37,
		lemma: "特集"
	},
	{
		rank: 2020,
		frequency: 35.32,
		lemma: "〔"
	},
	{
		rank: 2021,
		frequency: 35.31,
		lemma: "おもしろい"
	},
	{
		rank: 2022,
		frequency: 35.3,
		lemma: "設備"
	},
	{
		rank: 2023,
		frequency: 35.28,
		lemma: "発"
	},
	{
		rank: 2024,
		frequency: 35.22,
		lemma: "ひどい"
	},
	{
		rank: 2025,
		frequency: 35.18,
		lemma: "なんか"
	},
	{
		rank: 2026,
		frequency: 35.17,
		lemma: "お答え"
	},
	{
		rank: 2027,
		frequency: 35.15,
		lemma: "抱える"
	},
	{
		rank: 2028,
		frequency: 35.14,
		lemma: "未"
	},
	{
		rank: 2029,
		frequency: 35.13,
		lemma: "国連"
	},
	{
		rank: 2030,
		frequency: 35.09,
		lemma: "季節"
	},
	{
		rank: 2031,
		frequency: 35.08,
		lemma: "答弁"
	},
	{
		rank: 2032,
		frequency: 35.07,
		lemma: "下がる"
	},
	{
		rank: 2033,
		frequency: 35.07,
		lemma: "わずか"
	},
	{
		rank: 2034,
		frequency: 35,
		lemma: "意思"
	},
	{
		rank: 2035,
		frequency: 34.99,
		lemma: "初め"
	},
	{
		rank: 2036,
		frequency: 34.99,
		lemma: "伺う"
	},
	{
		rank: 2037,
		frequency: 34.97,
		lemma: "保証"
	},
	{
		rank: 2038,
		frequency: 34.95,
		lemma: "実態"
	},
	{
		rank: 2039,
		frequency: 34.95,
		lemma: "売れる"
	},
	{
		rank: 2040,
		frequency: 34.95,
		lemma: "当初"
	},
	{
		rank: 2041,
		frequency: 34.91,
		lemma: "もともと"
	},
	{
		rank: 2042,
		frequency: 34.9,
		lemma: "分ける"
	},
	{
		rank: 2043,
		frequency: 34.9,
		lemma: "装置"
	},
	{
		rank: 2044,
		frequency: 34.9,
		lemma: "〕"
	},
	{
		rank: 2045,
		frequency: 34.89,
		lemma: "怒る"
	},
	{
		rank: 2046,
		frequency: 34.88,
		lemma: "キロ"
	},
	{
		rank: 2047,
		frequency: 34.87,
		lemma: "被告"
	},
	{
		rank: 2048,
		frequency: 34.87,
		lemma: "図書館"
	},
	{
		rank: 2049,
		frequency: 34.86,
		lemma: "降る"
	},
	{
		rank: 2050,
		frequency: 34.83,
		lemma: "所有"
	},
	{
		rank: 2051,
		frequency: 34.82,
		lemma: "書き込み"
	},
	{
		rank: 2052,
		frequency: 34.82,
		lemma: "日時"
	},
	{
		rank: 2053,
		frequency: 34.82,
		lemma: "防止"
	},
	{
		rank: 2054,
		frequency: 34.78,
		lemma: "マンション"
	},
	{
		rank: 2055,
		frequency: 34.76,
		lemma: "リー"
	},
	{
		rank: 2056,
		frequency: 34.69,
		lemma: "肉"
	},
	{
		rank: 2057,
		frequency: 34.64,
		lemma: "越える"
	},
	{
		rank: 2058,
		frequency: 34.63,
		lemma: "アプリケーション"
	},
	{
		rank: 2059,
		frequency: 34.61,
		lemma: "需要"
	},
	{
		rank: 2060,
		frequency: 34.61,
		lemma: "凄い"
	},
	{
		rank: 2061,
		frequency: 34.58,
		lemma: "無視"
	},
	{
		rank: 2062,
		frequency: 34.57,
		lemma: "設立"
	},
	{
		rank: 2063,
		frequency: 34.56,
		lemma: "愛す"
	},
	{
		rank: 2064,
		frequency: 34.55,
		lemma: "総理"
	},
	{
		rank: 2065,
		frequency: 34.53,
		lemma: "できるだけ"
	},
	{
		rank: 2066,
		frequency: 34.52,
		lemma: "ショップ"
	},
	{
		rank: 2067,
		frequency: 34.51,
		lemma: "自転車"
	},
	{
		rank: 2068,
		frequency: 34.47,
		lemma: "生物"
	},
	{
		rank: 2069,
		frequency: 34.44,
		lemma: "メニュー"
	},
	{
		rank: 2070,
		frequency: 34.44,
		lemma: "改めて"
	},
	{
		rank: 2071,
		frequency: 34.43,
		lemma: "優勝"
	},
	{
		rank: 2072,
		frequency: 34.43,
		lemma: "多様"
	},
	{
		rank: 2073,
		frequency: 34.4,
		lemma: "特許"
	},
	{
		rank: 2074,
		frequency: 34.37,
		lemma: "補助"
	},
	{
		rank: 2075,
		frequency: 34.37,
		lemma: "有る"
	},
	{
		rank: 2076,
		frequency: 34.36,
		lemma: "を通して"
	},
	{
		rank: 2077,
		frequency: 34.29,
		lemma: "はじめる"
	},
	{
		rank: 2078,
		frequency: 34.29,
		lemma: "優しい"
	},
	{
		rank: 2079,
		frequency: 34.27,
		lemma: "不動産"
	},
	{
		rank: 2080,
		frequency: 34.27,
		lemma: "見つかる"
	},
	{
		rank: 2081,
		frequency: 34.23,
		lemma: "野菜"
	},
	{
		rank: 2082,
		frequency: 34.21,
		lemma: "バカ"
	},
	{
		rank: 2083,
		frequency: 34.19,
		lemma: "白い"
	},
	{
		rank: 2084,
		frequency: 34.11,
		lemma: "兆"
	},
	{
		rank: 2085,
		frequency: 34.1,
		lemma: "ライン"
	},
	{
		rank: 2086,
		frequency: 34.09,
		lemma: "承知"
	},
	{
		rank: 2087,
		frequency: 34.06,
		lemma: "父親"
	},
	{
		rank: 2088,
		frequency: 34.04,
		lemma: "供給"
	},
	{
		rank: 2089,
		frequency: 34.03,
		lemma: "秘密"
	},
	{
		rank: 2090,
		frequency: 33.98,
		lemma: "誰か"
	},
	{
		rank: 2091,
		frequency: 33.97,
		lemma: "独自"
	},
	{
		rank: 2092,
		frequency: 33.97,
		lemma: "許可"
	},
	{
		rank: 2093,
		frequency: 33.97,
		lemma: "獲得"
	},
	{
		rank: 2094,
		frequency: 33.92,
		lemma: "休み"
	},
	{
		rank: 2095,
		frequency: 33.91,
		lemma: "急"
	},
	{
		rank: 2096,
		frequency: 33.89,
		lemma: "嫌"
	},
	{
		rank: 2097,
		frequency: 33.88,
		lemma: "外交"
	},
	{
		rank: 2098,
		frequency: 33.88,
		lemma: "ねー"
	},
	{
		rank: 2099,
		frequency: 33.87,
		lemma: "セキュリティ"
	},
	{
		rank: 2100,
		frequency: 33.86,
		lemma: "論理"
	},
	{
		rank: 2101,
		frequency: 33.84,
		lemma: "赤"
	},
	{
		rank: 2102,
		frequency: 33.81,
		lemma: "西"
	},
	{
		rank: 2103,
		frequency: 33.8,
		lemma: "メイン"
	},
	{
		rank: 2104,
		frequency: 33.78,
		lemma: "かく"
	},
	{
		rank: 2105,
		frequency: 33.75,
		lemma: "とっても"
	},
	{
		rank: 2106,
		frequency: 33.71,
		lemma: "極めて"
	},
	{
		rank: 2107,
		frequency: 33.71,
		lemma: "本質"
	},
	{
		rank: 2108,
		frequency: 33.65,
		lemma: "多少"
	},
	{
		rank: 2109,
		frequency: 33.63,
		lemma: "出来事"
	},
	{
		rank: 2110,
		frequency: 33.62,
		lemma: "手紙"
	},
	{
		rank: 2111,
		frequency: 33.61,
		lemma: "策"
	},
	{
		rank: 2112,
		frequency: 33.58,
		lemma: "スト"
	},
	{
		rank: 2113,
		frequency: 33.57,
		lemma: "去年"
	},
	{
		rank: 2114,
		frequency: 33.54,
		lemma: "及ぶ"
	},
	{
		rank: 2115,
		frequency: 33.52,
		lemma: "項"
	},
	{
		rank: 2116,
		frequency: 33.52,
		lemma: "お互い"
	},
	{
		rank: 2117,
		frequency: 33.51,
		lemma: "９月"
	},
	{
		rank: 2118,
		frequency: 33.42,
		lemma: "汗"
	},
	{
		rank: 2119,
		frequency: 33.39,
		lemma: "強制"
	},
	{
		rank: 2120,
		frequency: 33.37,
		lemma: "宣言"
	},
	{
		rank: 2121,
		frequency: 33.36,
		lemma: "出かける"
	},
	{
		rank: 2122,
		frequency: 33.35,
		lemma: "病"
	},
	{
		rank: 2123,
		frequency: 33.33,
		lemma: "エンジン"
	},
	{
		rank: 2124,
		frequency: 33.31,
		lemma: "チャンス"
	},
	{
		rank: 2125,
		frequency: 33.3,
		lemma: "優先"
	},
	{
		rank: 2126,
		frequency: 33.29,
		lemma: "オンライン"
	},
	{
		rank: 2127,
		frequency: 33.24,
		lemma: "ソース"
	},
	{
		rank: 2128,
		frequency: 33.22,
		lemma: "人材"
	},
	{
		rank: 2129,
		frequency: 33.17,
		lemma: "頼む"
	},
	{
		rank: 2130,
		frequency: 33.15,
		lemma: "職業"
	},
	{
		rank: 2131,
		frequency: 33.14,
		lemma: "ついに"
	},
	{
		rank: 2132,
		frequency: 33.14,
		lemma: "援助"
	},
	{
		rank: 2133,
		frequency: 33.12,
		lemma: "申請"
	},
	{
		rank: 2134,
		frequency: 33.12,
		lemma: "それで"
	},
	{
		rank: 2135,
		frequency: 33.12,
		lemma: "取れる"
	},
	{
		rank: 2136,
		frequency: 33.09,
		lemma: "歩"
	},
	{
		rank: 2137,
		frequency: 33.09,
		lemma: "除く"
	},
	{
		rank: 2138,
		frequency: 33.09,
		lemma: "コーナー"
	},
	{
		rank: 2139,
		frequency: 33.08,
		lemma: "問"
	},
	{
		rank: 2140,
		frequency: 32.99,
		lemma: "ブランド"
	},
	{
		rank: 2141,
		frequency: 32.95,
		lemma: "高速"
	},
	{
		rank: 2142,
		frequency: 32.94,
		lemma: "マーク"
	},
	{
		rank: 2143,
		frequency: 32.94,
		lemma: "ろう"
	},
	{
		rank: 2144,
		frequency: 32.9,
		lemma: "特殊"
	},
	{
		rank: 2145,
		frequency: 32.88,
		lemma: "こっち"
	},
	{
		rank: 2146,
		frequency: 32.87,
		lemma: "ける"
	},
	{
		rank: 2147,
		frequency: 32.86,
		lemma: "次回"
	},
	{
		rank: 2148,
		frequency: 32.85,
		lemma: "文学"
	},
	{
		rank: 2149,
		frequency: 32.82,
		lemma: "お知らせ"
	},
	{
		rank: 2150,
		frequency: 32.81,
		lemma: "議会"
	},
	{
		rank: 2151,
		frequency: 32.77,
		lemma: "介護"
	},
	{
		rank: 2152,
		frequency: 32.73,
		lemma: "２つ"
	},
	{
		rank: 2153,
		frequency: 32.71,
		lemma: "唯一"
	},
	{
		rank: 2154,
		frequency: 32.71,
		lemma: "削除"
	},
	{
		rank: 2155,
		frequency: 32.71,
		lemma: "田中"
	},
	{
		rank: 2156,
		frequency: 32.68,
		lemma: "両方"
	},
	{
		rank: 2157,
		frequency: 32.66,
		lemma: "垢"
	},
	{
		rank: 2158,
		frequency: 32.65,
		lemma: "高める"
	},
	{
		rank: 2159,
		frequency: 32.64,
		lemma: "本部"
	},
	{
		rank: 2160,
		frequency: 32.63,
		lemma: "横浜"
	},
	{
		rank: 2161,
		frequency: 32.58,
		lemma: "処分"
	},
	{
		rank: 2162,
		frequency: 32.56,
		lemma: "きっかけ"
	},
	{
		rank: 2163,
		frequency: 32.56,
		lemma: "共有"
	},
	{
		rank: 2164,
		frequency: 32.56,
		lemma: "ママ"
	},
	{
		rank: 2165,
		frequency: 32.54,
		lemma: "学者"
	},
	{
		rank: 2166,
		frequency: 32.5,
		lemma: "夫婦"
	},
	{
		rank: 2167,
		frequency: 32.45,
		lemma: "\\"
	},
	{
		rank: 2168,
		frequency: 32.41,
		lemma: "買い物"
	},
	{
		rank: 2169,
		frequency: 32.39,
		lemma: "風景"
	},
	{
		rank: 2170,
		frequency: 32.38,
		lemma: "それほど"
	},
	{
		rank: 2171,
		frequency: 32.38,
		lemma: "中小"
	},
	{
		rank: 2172,
		frequency: 32.37,
		lemma: "追う"
	},
	{
		rank: 2173,
		frequency: 32.37,
		lemma: "レストラン"
	},
	{
		rank: 2174,
		frequency: 32.31,
		lemma: "高齢"
	},
	{
		rank: 2175,
		frequency: 32.31,
		lemma: "付"
	},
	{
		rank: 2176,
		frequency: 32.31,
		lemma: "製"
	},
	{
		rank: 2177,
		frequency: 32.3,
		lemma: "剤"
	},
	{
		rank: 2178,
		frequency: 32.29,
		lemma: "１月"
	},
	{
		rank: 2179,
		frequency: 32.27,
		lemma: "夕方"
	},
	{
		rank: 2180,
		frequency: 32.27,
		lemma: "少女"
	},
	{
		rank: 2181,
		frequency: 32.26,
		lemma: "勝利"
	},
	{
		rank: 2182,
		frequency: 32.2,
		lemma: "スピード"
	},
	{
		rank: 2183,
		frequency: 32.2,
		lemma: "職場"
	},
	{
		rank: 2184,
		frequency: 32.19,
		lemma: "スター"
	},
	{
		rank: 2185,
		frequency: 32.13,
		lemma: "材料"
	},
	{
		rank: 2186,
		frequency: 32.08,
		lemma: "考慮"
	},
	{
		rank: 2187,
		frequency: 32.06,
		lemma: "付き"
	},
	{
		rank: 2188,
		frequency: 32.06,
		lemma: "伝わる"
	},
	{
		rank: 2189,
		frequency: 32.05,
		lemma: "主人公"
	},
	{
		rank: 2190,
		frequency: 32.02,
		lemma: "実感"
	},
	{
		rank: 2191,
		frequency: 32.01,
		lemma: "近代"
	},
	{
		rank: 2192,
		frequency: 32,
		lemma: "航空"
	},
	{
		rank: 2193,
		frequency: 31.97,
		lemma: "一時"
	},
	{
		rank: 2194,
		frequency: 31.96,
		lemma: "字"
	},
	{
		rank: 2195,
		frequency: 31.94,
		lemma: "戦後"
	},
	{
		rank: 2196,
		frequency: 31.94,
		lemma: "分類"
	},
	{
		rank: 2197,
		frequency: 31.91,
		lemma: "コーヒー"
	},
	{
		rank: 2198,
		frequency: 31.91,
		lemma: "減少"
	},
	{
		rank: 2199,
		frequency: 31.83,
		lemma: "哲学"
	},
	{
		rank: 2200,
		frequency: 31.82,
		lemma: "運ぶ"
	},
	{
		rank: 2201,
		frequency: 31.82,
		lemma: "足りる"
	},
	{
		rank: 2202,
		frequency: 31.81,
		lemma: "コントロール"
	},
	{
		rank: 2203,
		frequency: 31.81,
		lemma: "ガン"
	},
	{
		rank: 2204,
		frequency: 31.77,
		lemma: "落とす"
	},
	{
		rank: 2205,
		frequency: 31.76,
		lemma: "核"
	},
	{
		rank: 2206,
		frequency: 31.75,
		lemma: "遊び"
	},
	{
		rank: 2207,
		frequency: 31.73,
		lemma: "ポ"
	},
	{
		rank: 2208,
		frequency: 31.65,
		lemma: "巨大"
	},
	{
		rank: 2209,
		frequency: 31.64,
		lemma: "台湾"
	},
	{
		rank: 2210,
		frequency: 31.63,
		lemma: "訴える"
	},
	{
		rank: 2211,
		frequency: 31.6,
		lemma: "同士"
	},
	{
		rank: 2212,
		frequency: 31.59,
		lemma: "表す"
	},
	{
		rank: 2213,
		frequency: 31.58,
		lemma: "慣れる"
	},
	{
		rank: 2214,
		frequency: 31.58,
		lemma: "佐藤"
	},
	{
		rank: 2215,
		frequency: 31.57,
		lemma: "修"
	},
	{
		rank: 2216,
		frequency: 31.56,
		lemma: "条約"
	},
	{
		rank: 2217,
		frequency: 31.55,
		lemma: "人類"
	},
	{
		rank: 2218,
		frequency: 31.53,
		lemma: "ワイン"
	},
	{
		rank: 2219,
		frequency: 31.53,
		lemma: "コン"
	},
	{
		rank: 2220,
		frequency: 31.49,
		lemma: "燭"
	},
	{
		rank: 2221,
		frequency: 31.49,
		lemma: "展"
	},
	{
		rank: 2222,
		frequency: 31.49,
		lemma: "個別"
	},
	{
		rank: 2223,
		frequency: 31.47,
		lemma: "パターン"
	},
	{
		rank: 2224,
		frequency: 31.47,
		lemma: "~"
	},
	{
		rank: 2225,
		frequency: 31.46,
		lemma: "だれ"
	},
	{
		rank: 2226,
		frequency: 31.33,
		lemma: "ビール"
	},
	{
		rank: 2227,
		frequency: 31.32,
		lemma: "首"
	},
	{
		rank: 2228,
		frequency: 31.31,
		lemma: "動かす"
	},
	{
		rank: 2229,
		frequency: 31.3,
		lemma: "波"
	},
	{
		rank: 2230,
		frequency: 31.29,
		lemma: "低下"
	},
	{
		rank: 2231,
		frequency: 31.27,
		lemma: "血"
	},
	{
		rank: 2232,
		frequency: 31.27,
		lemma: "機器"
	},
	{
		rank: 2233,
		frequency: 31.25,
		lemma: "死亡"
	},
	{
		rank: 2234,
		frequency: 31.25,
		lemma: "設ける"
	},
	{
		rank: 2235,
		frequency: 31.25,
		lemma: "捜査"
	},
	{
		rank: 2236,
		frequency: 31.25,
		lemma: "分の"
	},
	{
		rank: 2237,
		frequency: 31.24,
		lemma: "祭"
	},
	{
		rank: 2238,
		frequency: 31.22,
		lemma: "載る"
	},
	{
		rank: 2239,
		frequency: 31.21,
		lemma: "受け取る"
	},
	{
		rank: 2240,
		frequency: 31.19,
		lemma: "ボランティア"
	},
	{
		rank: 2241,
		frequency: 31.19,
		lemma: "説"
	},
	{
		rank: 2242,
		frequency: 31.18,
		lemma: "ホーム"
	},
	{
		rank: 2243,
		frequency: 31.15,
		lemma: "某"
	},
	{
		rank: 2244,
		frequency: 31.15,
		lemma: "抱く"
	},
	{
		rank: 2245,
		frequency: 31.13,
		lemma: "ネ"
	},
	{
		rank: 2246,
		frequency: 31.13,
		lemma: "ぜ"
	},
	{
		rank: 2247,
		frequency: 31.12,
		lemma: "理想"
	},
	{
		rank: 2248,
		frequency: 31.09,
		lemma: "天気"
	},
	{
		rank: 2249,
		frequency: 31.08,
		lemma: "止まる"
	},
	{
		rank: 2250,
		frequency: 31.07,
		lemma: "当局"
	},
	{
		rank: 2251,
		frequency: 31.07,
		lemma: "書籍"
	},
	{
		rank: 2252,
		frequency: 31.07,
		lemma: "挨拶"
	},
	{
		rank: 2253,
		frequency: 31.06,
		lemma: "バイト"
	},
	{
		rank: 2254,
		frequency: 31.05,
		lemma: "ガス"
	},
	{
		rank: 2255,
		frequency: 31.05,
		lemma: "受験"
	},
	{
		rank: 2256,
		frequency: 31.03,
		lemma: "オレ"
	},
	{
		rank: 2257,
		frequency: 31.02,
		lemma: "観察"
	},
	{
		rank: 2258,
		frequency: 30.97,
		lemma: "もう一度"
	},
	{
		rank: 2259,
		frequency: 30.96,
		lemma: "要因"
	},
	{
		rank: 2260,
		frequency: 30.96,
		lemma: "促進"
	},
	{
		rank: 2261,
		frequency: 30.93,
		lemma: "それでは"
	},
	{
		rank: 2262,
		frequency: 30.86,
		lemma: "税金"
	},
	{
		rank: 2263,
		frequency: 30.84,
		lemma: "異常"
	},
	{
		rank: 2264,
		frequency: 30.81,
		lemma: "無事"
	},
	{
		rank: 2265,
		frequency: 30.8,
		lemma: "合意"
	},
	{
		rank: 2266,
		frequency: 30.78,
		lemma: "戦う"
	},
	{
		rank: 2267,
		frequency: 30.76,
		lemma: "統計"
	},
	{
		rank: 2268,
		frequency: 30.75,
		lemma: "渡る"
	},
	{
		rank: 2269,
		frequency: 30.67,
		lemma: "キー"
	},
	{
		rank: 2270,
		frequency: 30.66,
		lemma: "たる"
	},
	{
		rank: 2271,
		frequency: 30.66,
		lemma: "服"
	},
	{
		rank: 2272,
		frequency: 30.65,
		lemma: "領域"
	},
	{
		rank: 2273,
		frequency: 30.65,
		lemma: "不可能"
	},
	{
		rank: 2274,
		frequency: 30.64,
		lemma: "普及"
	},
	{
		rank: 2275,
		frequency: 30.62,
		lemma: "周囲"
	},
	{
		rank: 2276,
		frequency: 30.62,
		lemma: "お前"
	},
	{
		rank: 2277,
		frequency: 30.6,
		lemma: "見事"
	},
	{
		rank: 2278,
		frequency: 30.6,
		lemma: "一切"
	},
	{
		rank: 2279,
		frequency: 30.59,
		lemma: "素材"
	},
	{
		rank: 2280,
		frequency: 30.54,
		lemma: "新規"
	},
	{
		rank: 2281,
		frequency: 30.53,
		lemma: "児童"
	},
	{
		rank: 2282,
		frequency: 30.51,
		lemma: "後ろ"
	},
	{
		rank: 2283,
		frequency: 30.51,
		lemma: "自民党"
	},
	{
		rank: 2284,
		frequency: 30.5,
		lemma: "把握"
	},
	{
		rank: 2285,
		frequency: 30.5,
		lemma: "前後"
	},
	{
		rank: 2286,
		frequency: 30.49,
		lemma: "又は"
	},
	{
		rank: 2287,
		frequency: 30.45,
		lemma: "リリース"
	},
	{
		rank: 2288,
		frequency: 30.42,
		lemma: "経つ"
	},
	{
		rank: 2289,
		frequency: 30.42,
		lemma: "権力"
	},
	{
		rank: 2290,
		frequency: 30.41,
		lemma: "細かい"
	},
	{
		rank: 2291,
		frequency: 30.41,
		lemma: "趣旨"
	},
	{
		rank: 2292,
		frequency: 30.38,
		lemma: "やや"
	},
	{
		rank: 2293,
		frequency: 30.3,
		lemma: "女子"
	},
	{
		rank: 2294,
		frequency: 30.28,
		lemma: "’"
	},
	{
		rank: 2295,
		frequency: 30.27,
		lemma: "予測"
	},
	{
		rank: 2296,
		frequency: 30.27,
		lemma: "自衛隊"
	},
	{
		rank: 2297,
		frequency: 30.26,
		lemma: "´"
	},
	{
		rank: 2298,
		frequency: 30.25,
		lemma: "オリジナル"
	},
	{
		rank: 2299,
		frequency: 30.24,
		lemma: "びっくり"
	},
	{
		rank: 2300,
		frequency: 30.24,
		lemma: "常識"
	},
	{
		rank: 2301,
		frequency: 30.23,
		lemma: "辰"
	},
	{
		rank: 2302,
		frequency: 30.22,
		lemma: "すっかり"
	},
	{
		rank: 2303,
		frequency: 30.22,
		lemma: "いよいよ"
	},
	{
		rank: 2304,
		frequency: 30.2,
		lemma: "出会い"
	},
	{
		rank: 2305,
		frequency: 30.2,
		lemma: "緊張"
	},
	{
		rank: 2306,
		frequency: 30.19,
		lemma: "〉"
	},
	{
		rank: 2307,
		frequency: 30.17,
		lemma: "ねえ"
	},
	{
		rank: 2308,
		frequency: 30.16,
		lemma: "沢山"
	},
	{
		rank: 2309,
		frequency: 30.15,
		lemma: "職"
	},
	{
		rank: 2310,
		frequency: 30.14,
		lemma: "博士"
	},
	{
		rank: 2311,
		frequency: 30.14,
		lemma: "〈"
	},
	{
		rank: 2312,
		frequency: 30.11,
		lemma: "返す"
	},
	{
		rank: 2313,
		frequency: 30.11,
		lemma: "教科書"
	},
	{
		rank: 2314,
		frequency: 30.08,
		lemma: "先週"
	},
	{
		rank: 2315,
		frequency: 30.07,
		lemma: "近づく"
	},
	{
		rank: 2316,
		frequency: 30.06,
		lemma: "がち"
	},
	{
		rank: 2317,
		frequency: 30.06,
		lemma: "問い合わせ"
	},
	{
		rank: 2318,
		frequency: 30.05,
		lemma: "２月"
	},
	{
		rank: 2319,
		frequency: 30.03,
		lemma: "朝鮮"
	},
	{
		rank: 2320,
		frequency: 30.03,
		lemma: "余裕"
	},
	{
		rank: 2321,
		frequency: 30.03,
		lemma: "代わり"
	},
	{
		rank: 2322,
		frequency: 30.03,
		lemma: "品質"
	},
	{
		rank: 2323,
		frequency: 30.02,
		lemma: "太陽"
	},
	{
		rank: 2324,
		frequency: 29.99,
		lemma: "とく"
	},
	{
		rank: 2325,
		frequency: 29.99,
		lemma: "勤務"
	},
	{
		rank: 2326,
		frequency: 29.98,
		lemma: "テキスト"
	},
	{
		rank: 2327,
		frequency: 29.98,
		lemma: "水準"
	},
	{
		rank: 2328,
		frequency: 29.96,
		lemma: "作り"
	},
	{
		rank: 2329,
		frequency: 29.96,
		lemma: "意図"
	},
	{
		rank: 2330,
		frequency: 29.96,
		lemma: "公務員"
	},
	{
		rank: 2331,
		frequency: 29.95,
		lemma: "復活"
	},
	{
		rank: 2332,
		frequency: 29.95,
		lemma: "用語"
	},
	{
		rank: 2333,
		frequency: 29.94,
		lemma: "進行"
	},
	{
		rank: 2334,
		frequency: 29.92,
		lemma: "近所"
	},
	{
		rank: 2335,
		frequency: 29.91,
		lemma: "育つ"
	},
	{
		rank: 2336,
		frequency: 29.89,
		lemma: "程"
	},
	{
		rank: 2337,
		frequency: 29.88,
		lemma: "無駄"
	},
	{
		rank: 2338,
		frequency: 29.87,
		lemma: "入り"
	},
	{
		rank: 2339,
		frequency: 29.85,
		lemma: "講師"
	},
	{
		rank: 2340,
		frequency: 29.85,
		lemma: "桜"
	},
	{
		rank: 2341,
		frequency: 29.81,
		lemma: "占める"
	},
	{
		rank: 2342,
		frequency: 29.81,
		lemma: "郵便"
	},
	{
		rank: 2343,
		frequency: 29.79,
		lemma: "パワー"
	},
	{
		rank: 2344,
		frequency: 29.79,
		lemma: "候補"
	},
	{
		rank: 2345,
		frequency: 29.77,
		lemma: "気付く"
	},
	{
		rank: 2346,
		frequency: 29.77,
		lemma: "指示"
	},
	{
		rank: 2347,
		frequency: 29.75,
		lemma: "留学"
	},
	{
		rank: 2348,
		frequency: 29.72,
		lemma: "いくつ"
	},
	{
		rank: 2349,
		frequency: 29.71,
		lemma: "ミス"
	},
	{
		rank: 2350,
		frequency: 29.71,
		lemma: "返事"
	},
	{
		rank: 2351,
		frequency: 29.68,
		lemma: "物価"
	},
	{
		rank: 2352,
		frequency: 29.68,
		lemma: "創造"
	},
	{
		rank: 2353,
		frequency: 29.67,
		lemma: "直す"
	},
	{
		rank: 2354,
		frequency: 29.66,
		lemma: "覆る"
	},
	{
		rank: 2355,
		frequency: 29.64,
		lemma: "統一"
	},
	{
		rank: 2356,
		frequency: 29.62,
		lemma: "たび"
	},
	{
		rank: 2357,
		frequency: 29.6,
		lemma: "々"
	},
	{
		rank: 2358,
		frequency: 29.58,
		lemma: "辺"
	},
	{
		rank: 2359,
		frequency: 29.58,
		lemma: "暮らす"
	},
	{
		rank: 2360,
		frequency: 29.58,
		lemma: "致す"
	},
	{
		rank: 2361,
		frequency: 29.58,
		lemma: "テーブル"
	},
	{
		rank: 2362,
		frequency: 29.56,
		lemma: "苦労"
	},
	{
		rank: 2363,
		frequency: 29.54,
		lemma: "漫画"
	},
	{
		rank: 2364,
		frequency: 29.5,
		lemma: "進化"
	},
	{
		rank: 2365,
		frequency: 29.5,
		lemma: "飛行機"
	},
	{
		rank: 2366,
		frequency: 29.49,
		lemma: "マガジン"
	},
	{
		rank: 2367,
		frequency: 29.49,
		lemma: "手術"
	},
	{
		rank: 2368,
		frequency: 29.45,
		lemma: "み"
	},
	{
		rank: 2369,
		frequency: 29.45,
		lemma: "リーグ"
	},
	{
		rank: 2370,
		frequency: 29.42,
		lemma: "それとも"
	},
	{
		rank: 2371,
		frequency: 29.41,
		lemma: "ツアー"
	},
	{
		rank: 2372,
		frequency: 29.41,
		lemma: "見解"
	},
	{
		rank: 2373,
		frequency: 29.39,
		lemma: "連合"
	},
	{
		rank: 2374,
		frequency: 29.36,
		lemma: "ホント"
	},
	{
		rank: 2375,
		frequency: 29.36,
		lemma: "貿易"
	},
	{
		rank: 2376,
		frequency: 29.34,
		lemma: "発想"
	},
	{
		rank: 2377,
		frequency: 29.33,
		lemma: "静か"
	},
	{
		rank: 2378,
		frequency: 29.31,
		lemma: "経過"
	},
	{
		rank: 2379,
		frequency: 29.31,
		lemma: "いきなり"
	},
	{
		rank: 2380,
		frequency: 29.3,
		lemma: "専用"
	},
	{
		rank: 2381,
		frequency: 29.29,
		lemma: "停止"
	},
	{
		rank: 2382,
		frequency: 29.28,
		lemma: "食う"
	},
	{
		rank: 2383,
		frequency: 29.28,
		lemma: "隠す"
	},
	{
		rank: 2384,
		frequency: 29.26,
		lemma: "クリスマス"
	},
	{
		rank: 2385,
		frequency: 29.26,
		lemma: "化学"
	},
	{
		rank: 2386,
		frequency: 29.23,
		lemma: "院"
	},
	{
		rank: 2387,
		frequency: 29.22,
		lemma: "番目"
	},
	{
		rank: 2388,
		frequency: 29.22,
		lemma: "事前"
	},
	{
		rank: 2389,
		frequency: 29.22,
		lemma: "ラン"
	},
	{
		rank: 2390,
		frequency: 29.19,
		lemma: "匹"
	},
	{
		rank: 2391,
		frequency: 29.19,
		lemma: "災害"
	},
	{
		rank: 2392,
		frequency: 29.17,
		lemma: "ピアノ"
	},
	{
		rank: 2393,
		frequency: 29.16,
		lemma: "連携"
	},
	{
		rank: 2394,
		frequency: 29.16,
		lemma: "信用"
	},
	{
		rank: 2395,
		frequency: 29.15,
		lemma: "増やす"
	},
	{
		rank: 2396,
		frequency: 29.14,
		lemma: "優れる"
	},
	{
		rank: 2397,
		frequency: 29.12,
		lemma: "狭い"
	},
	{
		rank: 2398,
		frequency: 29.11,
		lemma: "両親"
	},
	{
		rank: 2399,
		frequency: 29.06,
		lemma: "悲しい"
	},
	{
		rank: 2400,
		frequency: 28.98,
		lemma: "高度"
	},
	{
		rank: 2401,
		frequency: 28.97,
		lemma: "熱い"
	},
	{
		rank: 2402,
		frequency: 28.95,
		lemma: "宣伝"
	},
	{
		rank: 2403,
		frequency: 28.95,
		lemma: "症"
	},
	{
		rank: 2404,
		frequency: 28.92,
		lemma: "支払う"
	},
	{
		rank: 2405,
		frequency: 28.9,
		lemma: "迷惑"
	},
	{
		rank: 2406,
		frequency: 28.89,
		lemma: "切れる"
	},
	{
		rank: 2407,
		frequency: 28.86,
		lemma: "砲"
	},
	{
		rank: 2408,
		frequency: 28.85,
		lemma: "主要"
	},
	{
		rank: 2409,
		frequency: 28.85,
		lemma: "オーストラリア"
	},
	{
		rank: 2410,
		frequency: 28.85,
		lemma: "辛い"
	},
	{
		rank: 2411,
		frequency: 28.84,
		lemma: "配信"
	},
	{
		rank: 2412,
		frequency: 28.84,
		lemma: "ゴール"
	},
	{
		rank: 2413,
		frequency: 28.83,
		lemma: "確立"
	},
	{
		rank: 2414,
		frequency: 28.79,
		lemma: "統合"
	},
	{
		rank: 2415,
		frequency: 28.78,
		lemma: "コンサート"
	},
	{
		rank: 2416,
		frequency: 28.78,
		lemma: "謎"
	},
	{
		rank: 2417,
		frequency: 28.77,
		lemma: "時半"
	},
	{
		rank: 2418,
		frequency: 28.77,
		lemma: "何故"
	},
	{
		rank: 2419,
		frequency: 28.77,
		lemma: "げ"
	},
	{
		rank: 2420,
		frequency: 28.76,
		lemma: "ノート"
	},
	{
		rank: 2421,
		frequency: 28.75,
		lemma: "それなり"
	},
	{
		rank: 2422,
		frequency: 28.74,
		lemma: "ニューヨーク"
	},
	{
		rank: 2423,
		frequency: 28.72,
		lemma: "物理"
	},
	{
		rank: 2424,
		frequency: 28.72,
		lemma: "８月"
	},
	{
		rank: 2425,
		frequency: 28.66,
		lemma: "恋"
	},
	{
		rank: 2426,
		frequency: 28.65,
		lemma: "ストーリー"
	},
	{
		rank: 2427,
		frequency: 28.64,
		lemma: "ゼロ"
	},
	{
		rank: 2428,
		frequency: 28.64,
		lemma: "笑顔"
	},
	{
		rank: 2429,
		frequency: 28.64,
		lemma: "熱"
	},
	{
		rank: 2430,
		frequency: 28.63,
		lemma: "自動"
	},
	{
		rank: 2431,
		frequency: 28.62,
		lemma: "圏"
	},
	{
		rank: 2432,
		frequency: 28.6,
		lemma: "メモ"
	},
	{
		rank: 2433,
		frequency: 28.6,
		lemma: "アドバイス"
	},
	{
		rank: 2434,
		frequency: 28.58,
		lemma: "知的"
	},
	{
		rank: 2435,
		frequency: 28.56,
		lemma: "男女"
	},
	{
		rank: 2436,
		frequency: 28.55,
		lemma: "よろしく"
	},
	{
		rank: 2437,
		frequency: 28.52,
		lemma: "緊急"
	},
	{
		rank: 2438,
		frequency: 28.51,
		lemma: "気に入る"
	},
	{
		rank: 2439,
		frequency: 28.49,
		lemma: "動作"
	},
	{
		rank: 2440,
		frequency: 28.47,
		lemma: "輸出"
	},
	{
		rank: 2441,
		frequency: 28.45,
		lemma: "落ち着く"
	},
	{
		rank: 2442,
		frequency: 28.42,
		lemma: "かわいい"
	},
	{
		rank: 2443,
		frequency: 28.42,
		lemma: "先輩"
	},
	{
		rank: 2444,
		frequency: 28.41,
		lemma: "通じる"
	},
	{
		rank: 2445,
		frequency: 28.39,
		lemma: "本格"
	},
	{
		rank: 2446,
		frequency: 28.36,
		lemma: "合併"
	},
	{
		rank: 2447,
		frequency: 28.36,
		lemma: "すら"
	},
	{
		rank: 2448,
		frequency: 28.36,
		lemma: "反省"
	},
	{
		rank: 2449,
		frequency: 28.3,
		lemma: "像"
	},
	{
		rank: 2450,
		frequency: 28.3,
		lemma: "中身"
	},
	{
		rank: 2451,
		frequency: 28.29,
		lemma: "すばらしい"
	},
	{
		rank: 2452,
		frequency: 28.29,
		lemma: "製作"
	},
	{
		rank: 2453,
		frequency: 28.28,
		lemma: "サン"
	},
	{
		rank: 2454,
		frequency: 28.28,
		lemma: "牛"
	},
	{
		rank: 2455,
		frequency: 28.27,
		lemma: "診断"
	},
	{
		rank: 2456,
		frequency: 28.25,
		lemma: "要望"
	},
	{
		rank: 2457,
		frequency: 28.23,
		lemma: "ストレス"
	},
	{
		rank: 2458,
		frequency: 28.23,
		lemma: "工業"
	},
	{
		rank: 2459,
		frequency: 28.21,
		lemma: "ボタン"
	},
	{
		rank: 2460,
		frequency: 28.2,
		lemma: "アン"
	},
	{
		rank: 2461,
		frequency: 28.18,
		lemma: "試す"
	},
	{
		rank: 2462,
		frequency: 28.13,
		lemma: "うる"
	},
	{
		rank: 2463,
		frequency: 28.13,
		lemma: "ますます"
	},
	{
		rank: 2464,
		frequency: 28.12,
		lemma: "崩壊"
	},
	{
		rank: 2465,
		frequency: 28.12,
		lemma: "真実"
	},
	{
		rank: 2466,
		frequency: 28.12,
		lemma: "去る"
	},
	{
		rank: 2467,
		frequency: 28.11,
		lemma: "プレー"
	},
	{
		rank: 2468,
		frequency: 28.11,
		lemma: "適当"
	},
	{
		rank: 2469,
		frequency: 28.08,
		lemma: "国立"
	},
	{
		rank: 2470,
		frequency: 28.06,
		lemma: "貼る"
	},
	{
		rank: 2471,
		frequency: 28.05,
		lemma: "珍しい"
	},
	{
		rank: 2472,
		frequency: 28.03,
		lemma: "計"
	},
	{
		rank: 2473,
		frequency: 28.01,
		lemma: "喜び"
	},
	{
		rank: 2474,
		frequency: 28,
		lemma: "石油"
	},
	{
		rank: 2475,
		frequency: 27.98,
		lemma: "大幅"
	},
	{
		rank: 2476,
		frequency: 27.98,
		lemma: "自治体"
	},
	{
		rank: 2477,
		frequency: 27.96,
		lemma: "をもって"
	},
	{
		rank: 2478,
		frequency: 27.96,
		lemma: "せっかく"
	},
	{
		rank: 2479,
		frequency: 27.95,
		lemma: "天"
	},
	{
		rank: 2480,
		frequency: 27.94,
		lemma: "ブッシュ"
	},
	{
		rank: 2481,
		frequency: 27.94,
		lemma: "だめ"
	},
	{
		rank: 2482,
		frequency: 27.93,
		lemma: "貢献"
	},
	{
		rank: 2483,
		frequency: 27.92,
		lemma: "眺める"
	},
	{
		rank: 2484,
		frequency: 27.92,
		lemma: "配慮"
	},
	{
		rank: 2485,
		frequency: 27.92,
		lemma: "ごろ"
	},
	{
		rank: 2486,
		frequency: 27.91,
		lemma: "サイド"
	},
	{
		rank: 2487,
		frequency: 27.89,
		lemma: "若干"
	},
	{
		rank: 2488,
		frequency: 27.88,
		lemma: "スペース"
	},
	{
		rank: 2489,
		frequency: 27.87,
		lemma: "つい"
	},
	{
		rank: 2490,
		frequency: 27.87,
		lemma: "主催"
	},
	{
		rank: 2491,
		frequency: 27.87,
		lemma: "書類"
	},
	{
		rank: 2492,
		frequency: 27.87,
		lemma: "きょう"
	},
	{
		rank: 2493,
		frequency: 27.87,
		lemma: "韓"
	},
	{
		rank: 2494,
		frequency: 27.85,
		lemma: "調子"
	},
	{
		rank: 2495,
		frequency: 27.85,
		lemma: "ミサイル"
	},
	{
		rank: 2496,
		frequency: 27.84,
		lemma: "き"
	},
	{
		rank: 2497,
		frequency: 27.83,
		lemma: "単語"
	},
	{
		rank: 2498,
		frequency: 27.81,
		lemma: "パリ"
	},
	{
		rank: 2499,
		frequency: 27.79,
		lemma: "渡す"
	},
	{
		rank: 2500,
		frequency: 27.77,
		lemma: "表情"
	},
	{
		rank: 2501,
		frequency: 27.76,
		lemma: "基地"
	},
	{
		rank: 2502,
		frequency: 27.76,
		lemma: "速い"
	},
	{
		rank: 2503,
		frequency: 27.75,
		lemma: "気がつく"
	},
	{
		rank: 2504,
		frequency: 27.75,
		lemma: "ホール"
	},
	{
		rank: 2505,
		frequency: 27.74,
		lemma: "駐車"
	},
	{
		rank: 2506,
		frequency: 27.73,
		lemma: "比較的"
	},
	{
		rank: 2507,
		frequency: 27.73,
		lemma: "ガラス"
	},
	{
		rank: 2508,
		frequency: 27.72,
		lemma: "景気"
	},
	{
		rank: 2509,
		frequency: 27.71,
		lemma: "世間"
	},
	{
		rank: 2510,
		frequency: 27.69,
		lemma: "え"
	},
	{
		rank: 2511,
		frequency: 27.68,
		lemma: "植物"
	},
	{
		rank: 2512,
		frequency: 27.68,
		lemma: "カー"
	},
	{
		rank: 2513,
		frequency: 27.68,
		lemma: "あり方"
	},
	{
		rank: 2514,
		frequency: 27.68,
		lemma: "単なる"
	},
	{
		rank: 2515,
		frequency: 27.63,
		lemma: "セ"
	},
	{
		rank: 2516,
		frequency: 27.63,
		lemma: "楽しめる"
	},
	{
		rank: 2517,
		frequency: 27.62,
		lemma: "戦い"
	},
	{
		rank: 2518,
		frequency: 27.62,
		lemma: "自治"
	},
	{
		rank: 2519,
		frequency: 27.6,
		lemma: "限界"
	},
	{
		rank: 2520,
		frequency: 27.6,
		lemma: "ベスト"
	},
	{
		rank: 2521,
		frequency: 27.59,
		lemma: "トイレ"
	},
	{
		rank: 2522,
		frequency: 27.59,
		lemma: "ただいま"
	},
	{
		rank: 2523,
		frequency: 27.57,
		lemma: "抜く"
	},
	{
		rank: 2524,
		frequency: 27.57,
		lemma: "反映"
	},
	{
		rank: 2525,
		frequency: 27.57,
		lemma: "転換"
	},
	{
		rank: 2526,
		frequency: 27.56,
		lemma: "美"
	},
	{
		rank: 2527,
		frequency: 27.56,
		lemma: "タイム"
	},
	{
		rank: 2528,
		frequency: 27.56,
		lemma: "形態"
	},
	{
		rank: 2529,
		frequency: 27.54,
		lemma: "振る"
	},
	{
		rank: 2530,
		frequency: 27.54,
		lemma: "状"
	},
	{
		rank: 2531,
		frequency: 27.53,
		lemma: "嫌い"
	},
	{
		rank: 2532,
		frequency: 27.52,
		lemma: "奴"
	},
	{
		rank: 2533,
		frequency: 27.51,
		lemma: "感染"
	},
	{
		rank: 2534,
		frequency: 27.49,
		lemma: "逃げる"
	},
	{
		rank: 2535,
		frequency: 27.46,
		lemma: "根拠"
	},
	{
		rank: 2536,
		frequency: 27.46,
		lemma: "こうして"
	},
	{
		rank: 2537,
		frequency: 27.45,
		lemma: "原稿"
	},
	{
		rank: 2538,
		frequency: 27.43,
		lemma: "イエス"
	},
	{
		rank: 2539,
		frequency: 27.42,
		lemma: "そろそろ"
	},
	{
		rank: 2540,
		frequency: 27.41,
		lemma: "相場"
	},
	{
		rank: 2541,
		frequency: 27.4,
		lemma: "抜ける"
	},
	{
		rank: 2542,
		frequency: 27.39,
		lemma: "合格"
	},
	{
		rank: 2543,
		frequency: 27.39,
		lemma: "記載"
	},
	{
		rank: 2544,
		frequency: 27.38,
		lemma: "お母さん"
	},
	{
		rank: 2545,
		frequency: 27.36,
		lemma: "狙う"
	},
	{
		rank: 2546,
		frequency: 27.33,
		lemma: "地図"
	},
	{
		rank: 2547,
		frequency: 27.33,
		lemma: "人達"
	},
	{
		rank: 2548,
		frequency: 27.32,
		lemma: "ダウンロード"
	},
	{
		rank: 2549,
		frequency: 27.32,
		lemma: "大学院"
	},
	{
		rank: 2550,
		frequency: 27.32,
		lemma: "$"
	},
	{
		rank: 2551,
		frequency: 27.3,
		lemma: "拒否"
	},
	{
		rank: 2552,
		frequency: 27.28,
		lemma: "腕"
	},
	{
		rank: 2553,
		frequency: 27.27,
		lemma: "はい"
	},
	{
		rank: 2554,
		frequency: 27.26,
		lemma: "あう"
	},
	{
		rank: 2555,
		frequency: 27.26,
		lemma: "遅れる"
	},
	{
		rank: 2556,
		frequency: 27.25,
		lemma: "鈴木"
	},
	{
		rank: 2557,
		frequency: 27.23,
		lemma: "最低"
	},
	{
		rank: 2558,
		frequency: 27.2,
		lemma: "微妙"
	},
	{
		rank: 2559,
		frequency: 27.2,
		lemma: "見方"
	},
	{
		rank: 2560,
		frequency: 27.19,
		lemma: "結ぶ"
	},
	{
		rank: 2561,
		frequency: 27.17,
		lemma: "最"
	},
	{
		rank: 2562,
		frequency: 27.17,
		lemma: "下げる"
	},
	{
		rank: 2563,
		frequency: 27.12,
		lemma: "削減"
	},
	{
		rank: 2564,
		frequency: 27.12,
		lemma: "Ｍ"
	},
	{
		rank: 2565,
		frequency: 27.11,
		lemma: "青年"
	},
	{
		rank: 2566,
		frequency: 27.11,
		lemma: "我が国"
	},
	{
		rank: 2567,
		frequency: 27.1,
		lemma: "助ける"
	},
	{
		rank: 2568,
		frequency: 27.1,
		lemma: "役立つ"
	},
	{
		rank: 2569,
		frequency: 27.1,
		lemma: "しかしながら"
	},
	{
		rank: 2570,
		frequency: 27.08,
		lemma: "つぶやき"
	},
	{
		rank: 2571,
		frequency: 27.06,
		lemma: "劇場"
	},
	{
		rank: 2572,
		frequency: 27.06,
		lemma: "向く"
	},
	{
		rank: 2573,
		frequency: 27.05,
		lemma: "強調"
	},
	{
		rank: 2574,
		frequency: 27.03,
		lemma: "要するに"
	},
	{
		rank: 2575,
		frequency: 27,
		lemma: "防衛"
	},
	{
		rank: 2576,
		frequency: 26.98,
		lemma: "ロンドン"
	},
	{
		rank: 2577,
		frequency: 26.96,
		lemma: "世界中"
	},
	{
		rank: 2578,
		frequency: 26.96,
		lemma: "初期"
	},
	{
		rank: 2579,
		frequency: 26.96,
		lemma: "ホ"
	},
	{
		rank: 2580,
		frequency: 26.94,
		lemma: "機構"
	},
	{
		rank: 2581,
		frequency: 26.93,
		lemma: "どうやら"
	},
	{
		rank: 2582,
		frequency: 26.9,
		lemma: "床"
	},
	{
		rank: 2583,
		frequency: 26.89,
		lemma: "真剣"
	},
	{
		rank: 2584,
		frequency: 26.86,
		lemma: "おすすめ"
	},
	{
		rank: 2585,
		frequency: 26.86,
		lemma: "講義"
	},
	{
		rank: 2586,
		frequency: 26.85,
		lemma: "術"
	},
	{
		rank: 2587,
		frequency: 26.83,
		lemma: "対処"
	},
	{
		rank: 2588,
		frequency: 26.83,
		lemma: "隊"
	},
	{
		rank: 2589,
		frequency: 26.83,
		lemma: "読める"
	},
	{
		rank: 2590,
		frequency: 26.82,
		lemma: "実質"
	},
	{
		rank: 2591,
		frequency: 26.79,
		lemma: "貴重"
	},
	{
		rank: 2592,
		frequency: 26.79,
		lemma: "メートル"
	},
	{
		rank: 2593,
		frequency: 26.78,
		lemma: "もしくは"
	},
	{
		rank: 2594,
		frequency: 26.77,
		lemma: "収集"
	},
	{
		rank: 2595,
		frequency: 26.76,
		lemma: "▽"
	},
	{
		rank: 2596,
		frequency: 26.74,
		lemma: "工夫"
	},
	{
		rank: 2597,
		frequency: 26.74,
		lemma: "大手"
	},
	{
		rank: 2598,
		frequency: 26.73,
		lemma: "じゃあ"
	},
	{
		rank: 2599,
		frequency: 26.72,
		lemma: "諸国"
	},
	{
		rank: 2600,
		frequency: 26.7,
		lemma: "幅"
	},
	{
		rank: 2601,
		frequency: 26.7,
		lemma: "蠅"
	},
	{
		rank: 2602,
		frequency: 26.7,
		lemma: "そば"
	},
	{
		rank: 2603,
		frequency: 26.68,
		lemma: "迫る"
	},
	{
		rank: 2604,
		frequency: 26.68,
		lemma: "監視"
	},
	{
		rank: 2605,
		frequency: 26.67,
		lemma: "リーダー"
	},
	{
		rank: 2606,
		frequency: 26.66,
		lemma: "認定"
	},
	{
		rank: 2607,
		frequency: 26.66,
		lemma: "必ずしも"
	},
	{
		rank: 2608,
		frequency: 26.66,
		lemma: "文庫"
	},
	{
		rank: 2609,
		frequency: 26.65,
		lemma: "サーバー"
	},
	{
		rank: 2610,
		frequency: 26.61,
		lemma: "各種"
	},
	{
		rank: 2611,
		frequency: 26.61,
		lemma: "節"
	},
	{
		rank: 2612,
		frequency: 26.59,
		lemma: "福岡"
	},
	{
		rank: 2613,
		frequency: 26.57,
		lemma: "肩"
	},
	{
		rank: 2614,
		frequency: 26.57,
		lemma: "反"
	},
	{
		rank: 2615,
		frequency: 26.56,
		lemma: "すると"
	},
	{
		rank: 2616,
		frequency: 26.56,
		lemma: "券"
	},
	{
		rank: 2617,
		frequency: 26.53,
		lemma: "意外"
	},
	{
		rank: 2618,
		frequency: 26.47,
		lemma: "帰り"
	},
	{
		rank: 2619,
		frequency: 26.47,
		lemma: "容疑"
	},
	{
		rank: 2620,
		frequency: 26.47,
		lemma: "命令"
	},
	{
		rank: 2621,
		frequency: 26.47,
		lemma: "明治"
	},
	{
		rank: 2622,
		frequency: 26.46,
		lemma: "向こう"
	},
	{
		rank: 2623,
		frequency: 26.46,
		lemma: "根本"
	},
	{
		rank: 2624,
		frequency: 26.45,
		lemma: "重視"
	},
	{
		rank: 2625,
		frequency: 26.44,
		lemma: "ワン"
	},
	{
		rank: 2626,
		frequency: 26.41,
		lemma: "時々"
	},
	{
		rank: 2627,
		frequency: 26.41,
		lemma: "指"
	},
	{
		rank: 2628,
		frequency: 26.38,
		lemma: "依存"
	},
	{
		rank: 2629,
		frequency: 26.37,
		lemma: "医学"
	},
	{
		rank: 2630,
		frequency: 26.36,
		lemma: "手続"
	},
	{
		rank: 2631,
		frequency: 26.36,
		lemma: "けっこう"
	},
	{
		rank: 2632,
		frequency: 26.33,
		lemma: "株主"
	},
	{
		rank: 2633,
		frequency: 26.33,
		lemma: "プラス"
	},
	{
		rank: 2634,
		frequency: 26.32,
		lemma: "行ける"
	},
	{
		rank: 2635,
		frequency: 26.3,
		lemma: "刺激"
	},
	{
		rank: 2636,
		frequency: 26.28,
		lemma: "合理"
	},
	{
		rank: 2637,
		frequency: 26.27,
		lemma: "中間"
	},
	{
		rank: 2638,
		frequency: 26.26,
		lemma: "鉄道"
	},
	{
		rank: 2639,
		frequency: 26.25,
		lemma: "ゆ"
	},
	{
		rank: 2640,
		frequency: 26.23,
		lemma: "従う"
	},
	{
		rank: 2641,
		frequency: 26.23,
		lemma: "暗い"
	},
	{
		rank: 2642,
		frequency: 26.19,
		lemma: "入手"
	},
	{
		rank: 2643,
		frequency: 26.19,
		lemma: "才"
	},
	{
		rank: 2644,
		frequency: 26.19,
		lemma: "名古屋"
	},
	{
		rank: 2645,
		frequency: 26.18,
		lemma: "叫ぶ"
	},
	{
		rank: 2646,
		frequency: 26.18,
		lemma: "めぐる"
	},
	{
		rank: 2647,
		frequency: 26.16,
		lemma: "現"
	},
	{
		rank: 2648,
		frequency: 26.16,
		lemma: "こんにちは"
	},
	{
		rank: 2649,
		frequency: 26.16,
		lemma: "注"
	},
	{
		rank: 2650,
		frequency: 26.1,
		lemma: "組む"
	},
	{
		rank: 2651,
		frequency: 26.08,
		lemma: "相"
	},
	{
		rank: 2652,
		frequency: 26.05,
		lemma: "ロー"
	},
	{
		rank: 2653,
		frequency: 26.04,
		lemma: "印刷"
	},
	{
		rank: 2654,
		frequency: 26.02,
		lemma: "帰国"
	},
	{
		rank: 2655,
		frequency: 26.01,
		lemma: "発揮"
	},
	{
		rank: 2656,
		frequency: 25.99,
		lemma: "市町村"
	},
	{
		rank: 2657,
		frequency: 25.98,
		lemma: "何らかの"
	},
	{
		rank: 2658,
		frequency: 25.96,
		lemma: "規則"
	},
	{
		rank: 2659,
		frequency: 25.93,
		lemma: "賃金"
	},
	{
		rank: 2660,
		frequency: 25.93,
		lemma: "一致"
	},
	{
		rank: 2661,
		frequency: 25.91,
		lemma: "バージョン"
	},
	{
		rank: 2662,
		frequency: 25.91,
		lemma: "奥"
	},
	{
		rank: 2663,
		frequency: 25.89,
		lemma: "マーケティング"
	},
	{
		rank: 2664,
		frequency: 25.87,
		lemma: "主体"
	},
	{
		rank: 2665,
		frequency: 25.87,
		lemma: "トラブル"
	},
	{
		rank: 2666,
		frequency: 25.86,
		lemma: "原告"
	},
	{
		rank: 2667,
		frequency: 25.86,
		lemma: "経る"
	},
	{
		rank: 2668,
		frequency: 25.84,
		lemma: "部長"
	},
	{
		rank: 2669,
		frequency: 25.83,
		lemma: "習慣"
	},
	{
		rank: 2670,
		frequency: 25.83,
		lemma: "筆者"
	},
	{
		rank: 2671,
		frequency: 25.81,
		lemma: "以内"
	},
	{
		rank: 2672,
		frequency: 25.81,
		lemma: "だり"
	},
	{
		rank: 2673,
		frequency: 25.79,
		lemma: "カナダ"
	},
	{
		rank: 2674,
		frequency: 25.78,
		lemma: "校"
	},
	{
		rank: 2675,
		frequency: 25.74,
		lemma: "ロック"
	},
	{
		rank: 2676,
		frequency: 25.74,
		lemma: "模様"
	},
	{
		rank: 2677,
		frequency: 25.72,
		lemma: "日曜日"
	},
	{
		rank: 2678,
		frequency: 25.72,
		lemma: "目立つ"
	},
	{
		rank: 2679,
		frequency: 25.7,
		lemma: "速度"
	},
	{
		rank: 2680,
		frequency: 25.69,
		lemma: "焼く"
	},
	{
		rank: 2681,
		frequency: 25.69,
		lemma: "外部"
	},
	{
		rank: 2682,
		frequency: 25.68,
		lemma: "抵抗"
	},
	{
		rank: 2683,
		frequency: 25.68,
		lemma: "各国"
	},
	{
		rank: 2684,
		frequency: 25.68,
		lemma: "重ねる"
	},
	{
		rank: 2685,
		frequency: 25.64,
		lemma: "かねる"
	},
	{
		rank: 2686,
		frequency: 25.62,
		lemma: "ワールドカップ"
	},
	{
		rank: 2687,
		frequency: 25.62,
		lemma: "会見"
	},
	{
		rank: 2688,
		frequency: 25.61,
		lemma: "定期"
	},
	{
		rank: 2689,
		frequency: 25.57,
		lemma: "市内"
	},
	{
		rank: 2690,
		frequency: 25.57,
		lemma: "混乱"
	},
	{
		rank: 2691,
		frequency: 25.51,
		lemma: "医者"
	},
	{
		rank: 2692,
		frequency: 25.51,
		lemma: "自殺"
	},
	{
		rank: 2693,
		frequency: 25.47,
		lemma: "都合"
	},
	{
		rank: 2694,
		frequency: 25.46,
		lemma: "幸い"
	},
	{
		rank: 2695,
		frequency: 25.45,
		lemma: "検証"
	},
	{
		rank: 2696,
		frequency: 25.44,
		lemma: "概要"
	},
	{
		rank: 2697,
		frequency: 25.44,
		lemma: "温泉"
	},
	{
		rank: 2698,
		frequency: 25.43,
		lemma: "ジョン"
	},
	{
		rank: 2699,
		frequency: 25.43,
		lemma: "参る"
	},
	{
		rank: 2700,
		frequency: 25.42,
		lemma: "神様"
	},
	{
		rank: 2701,
		frequency: 25.4,
		lemma: "漢字"
	},
	{
		rank: 2702,
		frequency: 25.38,
		lemma: "ごく"
	},
	{
		rank: 2703,
		frequency: 25.38,
		lemma: "踏まえる"
	},
	{
		rank: 2704,
		frequency: 25.38,
		lemma: "役に立つ"
	},
	{
		rank: 2705,
		frequency: 25.38,
		lemma: "杯"
	},
	{
		rank: 2706,
		frequency: 25.37,
		lemma: "レース"
	},
	{
		rank: 2707,
		frequency: 25.37,
		lemma: "ご飯"
	},
	{
		rank: 2708,
		frequency: 25.36,
		lemma: "さっき"
	},
	{
		rank: 2709,
		frequency: 25.36,
		lemma: "賛成"
	},
	{
		rank: 2710,
		frequency: 25.32,
		lemma: "緑"
	},
	{
		rank: 2711,
		frequency: 25.3,
		lemma: "迷う"
	},
	{
		rank: 2712,
		frequency: 25.29,
		lemma: "民主党"
	},
	{
		rank: 2713,
		frequency: 25.28,
		lemma: "欧州"
	},
	{
		rank: 2714,
		frequency: 25.27,
		lemma: "帰宅"
	},
	{
		rank: 2715,
		frequency: 25.25,
		lemma: "城"
	},
	{
		rank: 2716,
		frequency: 25.25,
		lemma: "シーズン"
	},
	{
		rank: 2717,
		frequency: 25.25,
		lemma: "筋"
	},
	{
		rank: 2718,
		frequency: 25.23,
		lemma: "たとえ"
	},
	{
		rank: 2719,
		frequency: 25.23,
		lemma: "天皇"
	},
	{
		rank: 2720,
		frequency: 25.21,
		lemma: "前半"
	},
	{
		rank: 2721,
		frequency: 25.18,
		lemma: "ともかく"
	},
	{
		rank: 2722,
		frequency: 25.18,
		lemma: "重大"
	},
	{
		rank: 2723,
		frequency: 25.17,
		lemma: "流"
	},
	{
		rank: 2724,
		frequency: 25.12,
		lemma: "ゴルフ"
	},
	{
		rank: 2725,
		frequency: 25.1,
		lemma: "ユーザ"
	},
	{
		rank: 2726,
		frequency: 25.1,
		lemma: "題"
	},
	{
		rank: 2727,
		frequency: 25.09,
		lemma: "録音"
	},
	{
		rank: 2728,
		frequency: 25.09,
		lemma: "運"
	},
	{
		rank: 2729,
		frequency: 25.04,
		lemma: "必須"
	},
	{
		rank: 2730,
		frequency: 25.03,
		lemma: "林"
	},
	{
		rank: 2731,
		frequency: 25.02,
		lemma: "不満"
	},
	{
		rank: 2732,
		frequency: 25.02,
		lemma: "可愛い"
	},
	{
		rank: 2733,
		frequency: 25.02,
		lemma: "流通"
	},
	{
		rank: 2734,
		frequency: 25,
		lemma: "我が家"
	},
	{
		rank: 2735,
		frequency: 24.99,
		lemma: "扱い"
	},
	{
		rank: 2736,
		frequency: 24.97,
		lemma: "重"
	},
	{
		rank: 2737,
		frequency: 24.96,
		lemma: "原理"
	},
	{
		rank: 2738,
		frequency: 24.95,
		lemma: "比"
	},
	{
		rank: 2739,
		frequency: 24.94,
		lemma: "嘘"
	},
	{
		rank: 2740,
		frequency: 24.94,
		lemma: "多"
	},
	{
		rank: 2741,
		frequency: 24.94,
		lemma: "株価"
	},
	{
		rank: 2742,
		frequency: 24.91,
		lemma: "想定"
	},
	{
		rank: 2743,
		frequency: 24.88,
		lemma: "手続き"
	},
	{
		rank: 2744,
		frequency: 24.84,
		lemma: "要請"
	},
	{
		rank: 2745,
		frequency: 24.83,
		lemma: "楽器"
	},
	{
		rank: 2746,
		frequency: 24.82,
		lemma: "詩"
	},
	{
		rank: 2747,
		frequency: 24.81,
		lemma: "村上"
	},
	{
		rank: 2748,
		frequency: 24.8,
		lemma: "容易"
	},
	{
		rank: 2749,
		frequency: 24.79,
		lemma: "廃止"
	},
	{
		rank: 2750,
		frequency: 24.76,
		lemma: "魂"
	},
	{
		rank: 2751,
		frequency: 24.76,
		lemma: "綺麗"
	},
	{
		rank: 2752,
		frequency: 24.75,
		lemma: "イスラエル"
	},
	{
		rank: 2753,
		frequency: 24.74,
		lemma: "今月"
	},
	{
		rank: 2754,
		frequency: 24.72,
		lemma: "亡くなる"
	},
	{
		rank: 2755,
		frequency: 24.72,
		lemma: "興味深い"
	},
	{
		rank: 2756,
		frequency: 24.71,
		lemma: "滞在"
	},
	{
		rank: 2757,
		frequency: 24.7,
		lemma: "いったい"
	},
	{
		rank: 2758,
		frequency: 24.7,
		lemma: "上手い"
	},
	{
		rank: 2759,
		frequency: 24.7,
		lemma: "各地"
	},
	{
		rank: 2760,
		frequency: 24.69,
		lemma: "従業"
	},
	{
		rank: 2761,
		frequency: 24.68,
		lemma: "伸びる"
	},
	{
		rank: 2762,
		frequency: 24.65,
		lemma: "読書"
	},
	{
		rank: 2763,
		frequency: 24.65,
		lemma: "確定"
	},
	{
		rank: 2764,
		frequency: 24.62,
		lemma: "合計"
	},
	{
		rank: 2765,
		frequency: 24.61,
		lemma: "浮かぶ"
	},
	{
		rank: 2766,
		frequency: 24.59,
		lemma: "ヒット"
	},
	{
		rank: 2767,
		frequency: 24.59,
		lemma: "ＨＰ"
	},
	{
		rank: 2768,
		frequency: 24.59,
		lemma: "モード"
	},
	{
		rank: 2769,
		frequency: 24.59,
		lemma: "しょう"
	},
	{
		rank: 2770,
		frequency: 24.58,
		lemma: "タクシー"
	},
	{
		rank: 2771,
		frequency: 24.55,
		lemma: "発信"
	},
	{
		rank: 2772,
		frequency: 24.52,
		lemma: "済む"
	},
	{
		rank: 2773,
		frequency: 24.51,
		lemma: "振り返る"
	},
	{
		rank: 2774,
		frequency: 24.48,
		lemma: "執行"
	},
	{
		rank: 2775,
		frequency: 24.48,
		lemma: "連載"
	},
	{
		rank: 2776,
		frequency: 24.47,
		lemma: "香り"
	},
	{
		rank: 2777,
		frequency: 24.45,
		lemma: "フル"
	},
	{
		rank: 2778,
		frequency: 24.43,
		lemma: "恐怖"
	},
	{
		rank: 2779,
		frequency: 24.43,
		lemma: "思い出"
	},
	{
		rank: 2780,
		frequency: 24.43,
		lemma: "日経"
	},
	{
		rank: 2781,
		frequency: 24.43,
		lemma: "主人"
	},
	{
		rank: 2782,
		frequency: 24.41,
		lemma: "一瞬"
	},
	{
		rank: 2783,
		frequency: 24.41,
		lemma: "老人"
	},
	{
		rank: 2784,
		frequency: 24.4,
		lemma: "頁"
	},
	{
		rank: 2785,
		frequency: 24.4,
		lemma: "薄い"
	},
	{
		rank: 2786,
		frequency: 24.39,
		lemma: "当日"
	},
	{
		rank: 2787,
		frequency: 24.38,
		lemma: "早速"
	},
	{
		rank: 2788,
		frequency: 24.38,
		lemma: "備える"
	},
	{
		rank: 2789,
		frequency: 24.36,
		lemma: "関西"
	},
	{
		rank: 2790,
		frequency: 24.33,
		lemma: "赤い"
	},
	{
		rank: 2791,
		frequency: 24.33,
		lemma: "神戸"
	},
	{
		rank: 2792,
		frequency: 24.31,
		lemma: "時計"
	},
	{
		rank: 2793,
		frequency: 24.26,
		lemma: "割合"
	},
	{
		rank: 2794,
		frequency: 24.25,
		lemma: "正式"
	},
	{
		rank: 2795,
		frequency: 24.24,
		lemma: "はいる"
	},
	{
		rank: 2796,
		frequency: 24.23,
		lemma: "カラー"
	},
	{
		rank: 2797,
		frequency: 24.23,
		lemma: "出場"
	},
	{
		rank: 2798,
		frequency: 24.22,
		lemma: "残り"
	},
	{
		rank: 2799,
		frequency: 24.19,
		lemma: "まくる"
	},
	{
		rank: 2800,
		frequency: 24.18,
		lemma: "徹底"
	},
	{
		rank: 2801,
		frequency: 24.17,
		lemma: "穴"
	},
	{
		rank: 2802,
		frequency: 24.17,
		lemma: "収録"
	},
	{
		rank: 2803,
		frequency: 24.16,
		lemma: "板"
	},
	{
		rank: 2804,
		frequency: 24.15,
		lemma: "退職"
	},
	{
		rank: 2805,
		frequency: 24.13,
		lemma: "寄せる"
	},
	{
		rank: 2806,
		frequency: 24.13,
		lemma: "張る"
	},
	{
		rank: 2807,
		frequency: 24.12,
		lemma: "入学"
	},
	{
		rank: 2808,
		frequency: 24.12,
		lemma: "週末"
	},
	{
		rank: 2809,
		frequency: 24.12,
		lemma: "殺人"
	},
	{
		rank: 2810,
		frequency: 24.12,
		lemma: "代理"
	},
	{
		rank: 2811,
		frequency: 24.1,
		lemma: "演出"
	},
	{
		rank: 2812,
		frequency: 24.1,
		lemma: "かる"
	},
	{
		rank: 2813,
		frequency: 24.09,
		lemma: "掃除"
	},
	{
		rank: 2814,
		frequency: 24.08,
		lemma: "葉"
	},
	{
		rank: 2815,
		frequency: 24.08,
		lemma: "ショー"
	},
	{
		rank: 2816,
		frequency: 24.06,
		lemma: "公表"
	},
	{
		rank: 2817,
		frequency: 24.05,
		lemma: "インストール"
	},
	{
		rank: 2818,
		frequency: 24.02,
		lemma: "育成"
	},
	{
		rank: 2819,
		frequency: 24.02,
		lemma: "Ｋ"
	},
	{
		rank: 2820,
		frequency: 24.02,
		lemma: "実績"
	},
	{
		rank: 2821,
		frequency: 24.02,
		lemma: "だけど"
	},
	{
		rank: 2822,
		frequency: 24.01,
		lemma: "伺い"
	},
	{
		rank: 2823,
		frequency: 24,
		lemma: "昼"
	},
	{
		rank: 2824,
		frequency: 23.99,
		lemma: "使い方"
	},
	{
		rank: 2825,
		frequency: 23.96,
		lemma: "頼る"
	},
	{
		rank: 2826,
		frequency: 23.95,
		lemma: "パー"
	},
	{
		rank: 2827,
		frequency: 23.95,
		lemma: "もはや"
	},
	{
		rank: 2828,
		frequency: 23.93,
		lemma: "掛ける"
	},
	{
		rank: 2829,
		frequency: 23.92,
		lemma: "源"
	},
	{
		rank: 2830,
		frequency: 23.91,
		lemma: "店舗"
	},
	{
		rank: 2831,
		frequency: 23.91,
		lemma: "大型"
	},
	{
		rank: 2832,
		frequency: 23.91,
		lemma: "キリスト教"
	},
	{
		rank: 2833,
		frequency: 23.9,
		lemma: "ハイ"
	},
	{
		rank: 2834,
		frequency: 23.89,
		lemma: "載せる"
	},
	{
		rank: 2835,
		frequency: 23.89,
		lemma: "風呂"
	},
	{
		rank: 2836,
		frequency: 23.89,
		lemma: "生み出す"
	},
	{
		rank: 2837,
		frequency: 23.88,
		lemma: "どっち"
	},
	{
		rank: 2838,
		frequency: 23.88,
		lemma: "申し訳"
	},
	{
		rank: 2839,
		frequency: 23.87,
		lemma: "安"
	},
	{
		rank: 2840,
		frequency: 23.86,
		lemma: "ふと"
	},
	{
		rank: 2841,
		frequency: 23.84,
		lemma: "回転"
	},
	{
		rank: 2842,
		frequency: 23.83,
		lemma: "マイナス"
	},
	{
		rank: 2843,
		frequency: 23.82,
		lemma: "チケット"
	},
	{
		rank: 2844,
		frequency: 23.81,
		lemma: "犠牲"
	},
	{
		rank: 2845,
		frequency: 23.81,
		lemma: "暴力"
	},
	{
		rank: 2846,
		frequency: 23.8,
		lemma: "青"
	},
	{
		rank: 2847,
		frequency: 23.8,
		lemma: "細胞"
	},
	{
		rank: 2848,
		frequency: 23.8,
		lemma: "ことば"
	},
	{
		rank: 2849,
		frequency: 23.78,
		lemma: "ステージ"
	},
	{
		rank: 2850,
		frequency: 23.78,
		lemma: "はる"
	},
	{
		rank: 2851,
		frequency: 23.77,
		lemma: "そる"
	},
	{
		rank: 2852,
		frequency: 23.77,
		lemma: "ガイド"
	},
	{
		rank: 2853,
		frequency: 23.72,
		lemma: "稼ぐ"
	},
	{
		rank: 2854,
		frequency: 23.7,
		lemma: "広げる"
	},
	{
		rank: 2855,
		frequency: 23.69,
		lemma: "バイク"
	},
	{
		rank: 2856,
		frequency: 23.69,
		lemma: "知事"
	},
	{
		rank: 2857,
		frequency: 23.68,
		lemma: "勧め"
	},
	{
		rank: 2858,
		frequency: 23.67,
		lemma: "起業"
	},
	{
		rank: 2859,
		frequency: 23.67,
		lemma: "ロボット"
	},
	{
		rank: 2860,
		frequency: 23.65,
		lemma: "戦闘"
	},
	{
		rank: 2861,
		frequency: 23.64,
		lemma: "とこ"
	},
	{
		rank: 2862,
		frequency: 23.64,
		lemma: "たった"
	},
	{
		rank: 2863,
		frequency: 23.63,
		lemma: "１０月"
	},
	{
		rank: 2864,
		frequency: 23.59,
		lemma: "聖書"
	},
	{
		rank: 2865,
		frequency: 23.59,
		lemma: "しいる"
	},
	{
		rank: 2866,
		frequency: 23.58,
		lemma: "一気に"
	},
	{
		rank: 2867,
		frequency: 23.57,
		lemma: "移行"
	},
	{
		rank: 2868,
		frequency: 23.55,
		lemma: "はじめて"
	},
	{
		rank: 2869,
		frequency: 23.55,
		lemma: "正"
	},
	{
		rank: 2870,
		frequency: 23.55,
		lemma: "生かす"
	},
	{
		rank: 2871,
		frequency: 23.54,
		lemma: "成績"
	},
	{
		rank: 2872,
		frequency: 23.53,
		lemma: "通す"
	},
	{
		rank: 2873,
		frequency: 23.51,
		lemma: "お茶"
	},
	{
		rank: 2874,
		frequency: 23.51,
		lemma: "保つ"
	},
	{
		rank: 2875,
		frequency: 23.49,
		lemma: "同じく"
	},
	{
		rank: 2876,
		frequency: 23.49,
		lemma: "勝負"
	},
	{
		rank: 2877,
		frequency: 23.48,
		lemma: "翌日"
	},
	{
		rank: 2878,
		frequency: 23.47,
		lemma: "票"
	},
	{
		rank: 2879,
		frequency: 23.46,
		lemma: "直後"
	},
	{
		rank: 2880,
		frequency: 23.45,
		lemma: "左右"
	},
	{
		rank: 2881,
		frequency: 23.44,
		lemma: "やがて"
	},
	{
		rank: 2882,
		frequency: 23.42,
		lemma: "決勝"
	},
	{
		rank: 2883,
		frequency: 23.42,
		lemma: "所属"
	},
	{
		rank: 2884,
		frequency: 23.41,
		lemma: "演じる"
	},
	{
		rank: 2885,
		frequency: 23.4,
		lemma: "恥ずかしい"
	},
	{
		rank: 2886,
		frequency: 23.4,
		lemma: "キャラ"
	},
	{
		rank: 2887,
		frequency: 23.4,
		lemma: "面倒"
	},
	{
		rank: 2888,
		frequency: 23.4,
		lemma: "奪う"
	},
	{
		rank: 2889,
		frequency: 23.38,
		lemma: "測定"
	},
	{
		rank: 2890,
		frequency: 23.37,
		lemma: "千葉"
	},
	{
		rank: 2891,
		frequency: 23.34,
		lemma: "ブック"
	},
	{
		rank: 2892,
		frequency: 23.34,
		lemma: "ダイエット"
	},
	{
		rank: 2893,
		frequency: 23.33,
		lemma: "提示"
	},
	{
		rank: 2894,
		frequency: 23.33,
		lemma: "救う"
	},
	{
		rank: 2895,
		frequency: 23.32,
		lemma: "弾"
	},
	{
		rank: 2896,
		frequency: 23.31,
		lemma: "リング"
	},
	{
		rank: 2897,
		frequency: 23.3,
		lemma: "材"
	},
	{
		rank: 2898,
		frequency: 23.27,
		lemma: "府"
	},
	{
		rank: 2899,
		frequency: 23.25,
		lemma: "あんまり"
	},
	{
		rank: 2900,
		frequency: 23.25,
		lemma: "帯"
	},
	{
		rank: 2901,
		frequency: 23.23,
		lemma: "たまたま"
	},
	{
		rank: 2902,
		frequency: 23.22,
		lemma: "ベッド"
	},
	{
		rank: 2903,
		frequency: 23.2,
		lemma: "基盤"
	},
	{
		rank: 2904,
		frequency: 23.16,
		lemma: "ものすごい"
	},
	{
		rank: 2905,
		frequency: 23.16,
		lemma: "見学"
	},
	{
		rank: 2906,
		frequency: 23.16,
		lemma: "応募"
	},
	{
		rank: 2907,
		frequency: 23.15,
		lemma: "ファ"
	},
	{
		rank: 2908,
		frequency: 23.14,
		lemma: "枠"
	},
	{
		rank: 2909,
		frequency: 23.12,
		lemma: "厚生"
	},
	{
		rank: 2910,
		frequency: 23.11,
		lemma: "Ｃ"
	},
	{
		rank: 2911,
		frequency: 23.11,
		lemma: "配置"
	},
	{
		rank: 2912,
		frequency: 23.11,
		lemma: "道具"
	},
	{
		rank: 2913,
		frequency: 23.1,
		lemma: "ＣＤ"
	},
	{
		rank: 2914,
		frequency: 23.1,
		lemma: "刑事"
	},
	{
		rank: 2915,
		frequency: 23.09,
		lemma: "勢い"
	},
	{
		rank: 2916,
		frequency: 23.09,
		lemma: "Ｓ"
	},
	{
		rank: 2917,
		frequency: 23.08,
		lemma: "戻す"
	},
	{
		rank: 2918,
		frequency: 23.08,
		lemma: "対立"
	},
	{
		rank: 2919,
		frequency: 23.08,
		lemma: "散歩"
	},
	{
		rank: 2920,
		frequency: 23.08,
		lemma: "とれる"
	},
	{
		rank: 2921,
		frequency: 23.06,
		lemma: "症状"
	},
	{
		rank: 2922,
		frequency: 23.06,
		lemma: "入院"
	},
	{
		rank: 2923,
		frequency: 23.05,
		lemma: "教員"
	},
	{
		rank: 2924,
		frequency: 23.04,
		lemma: "キーワード"
	},
	{
		rank: 2925,
		frequency: 23.01,
		lemma: "中学"
	},
	{
		rank: 2926,
		frequency: 22.97,
		lemma: "表面"
	},
	{
		rank: 2927,
		frequency: 22.97,
		lemma: "情勢"
	},
	{
		rank: 2928,
		frequency: 22.97,
		lemma: "広島"
	},
	{
		rank: 2929,
		frequency: 22.96,
		lemma: "列"
	},
	{
		rank: 2930,
		frequency: 22.95,
		lemma: "腹"
	},
	{
		rank: 2931,
		frequency: 22.93,
		lemma: "玉"
	},
	{
		rank: 2932,
		frequency: 22.89,
		lemma: "レビュー"
	},
	{
		rank: 2933,
		frequency: 22.88,
		lemma: "学会"
	},
	{
		rank: 2934,
		frequency: 22.87,
		lemma: "ニーズ"
	},
	{
		rank: 2935,
		frequency: 22.87,
		lemma: "シンプル"
	},
	{
		rank: 2936,
		frequency: 22.87,
		lemma: "総会"
	},
	{
		rank: 2937,
		frequency: 22.86,
		lemma: "それに"
	},
	{
		rank: 2938,
		frequency: 22.86,
		lemma: "うえ"
	},
	{
		rank: 2939,
		frequency: 22.86,
		lemma: "通"
	},
	{
		rank: 2940,
		frequency: 22.86,
		lemma: "銘柄"
	},
	{
		rank: 2941,
		frequency: 22.85,
		lemma: "数学"
	},
	{
		rank: 2942,
		frequency: 22.84,
		lemma: "土曜日"
	},
	{
		rank: 2943,
		frequency: 22.82,
		lemma: "民"
	},
	{
		rank: 2944,
		frequency: 22.82,
		lemma: "やら"
	},
	{
		rank: 2945,
		frequency: 22.82,
		lemma: "承認"
	},
	{
		rank: 2946,
		frequency: 22.81,
		lemma: "なんとなく"
	},
	{
		rank: 2947,
		frequency: 22.8,
		lemma: "下記"
	},
	{
		rank: 2948,
		frequency: 22.8,
		lemma: "侵害"
	},
	{
		rank: 2949,
		frequency: 22.8,
		lemma: "増"
	},
	{
		rank: 2950,
		frequency: 22.8,
		lemma: "受賞"
	},
	{
		rank: 2951,
		frequency: 22.8,
		lemma: "痛み"
	},
	{
		rank: 2952,
		frequency: 22.79,
		lemma: "赤字"
	},
	{
		rank: 2953,
		frequency: 22.79,
		lemma: "公"
	},
	{
		rank: 2954,
		frequency: 22.78,
		lemma: "見かける"
	},
	{
		rank: 2955,
		frequency: 22.77,
		lemma: "腰"
	},
	{
		rank: 2956,
		frequency: 22.76,
		lemma: "お世話"
	},
	{
		rank: 2957,
		frequency: 22.76,
		lemma: "にかけて"
	},
	{
		rank: 2958,
		frequency: 22.74,
		lemma: "次々"
	},
	{
		rank: 2959,
		frequency: 22.72,
		lemma: "加工"
	},
	{
		rank: 2960,
		frequency: 22.72,
		lemma: "中村"
	},
	{
		rank: 2961,
		frequency: 22.71,
		lemma: "書店"
	},
	{
		rank: 2962,
		frequency: 22.7,
		lemma: "こる"
	},
	{
		rank: 2963,
		frequency: 22.69,
		lemma: "緩和"
	},
	{
		rank: 2964,
		frequency: 22.68,
		lemma: "マイ"
	},
	{
		rank: 2965,
		frequency: 22.67,
		lemma: "眠る"
	},
	{
		rank: 2966,
		frequency: 22.66,
		lemma: "ジャンル"
	},
	{
		rank: 2967,
		frequency: 22.65,
		lemma: "プラン"
	},
	{
		rank: 2968,
		frequency: 22.65,
		lemma: "お気に入り"
	},
	{
		rank: 2969,
		frequency: 22.64,
		lemma: "本当は"
	},
	{
		rank: 2970,
		frequency: 22.63,
		lemma: "個性"
	},
	{
		rank: 2971,
		frequency: 22.62,
		lemma: "作戦"
	},
	{
		rank: 2972,
		frequency: 22.6,
		lemma: "指揮"
	},
	{
		rank: 2973,
		frequency: 22.6,
		lemma: "技"
	},
	{
		rank: 2974,
		frequency: 22.6,
		lemma: "たまに"
	},
	{
		rank: 2975,
		frequency: 22.58,
		lemma: "たま"
	},
	{
		rank: 2976,
		frequency: 22.57,
		lemma: "誤解"
	},
	{
		rank: 2977,
		frequency: 22.57,
		lemma: "偶然"
	},
	{
		rank: 2978,
		frequency: 22.57,
		lemma: "群"
	},
	{
		rank: 2979,
		frequency: 22.54,
		lemma: "少々"
	},
	{
		rank: 2980,
		frequency: 22.53,
		lemma: "しく"
	},
	{
		rank: 2981,
		frequency: 22.52,
		lemma: "高まる"
	},
	{
		rank: 2982,
		frequency: 22.52,
		lemma: "ショック"
	},
	{
		rank: 2983,
		frequency: 22.48,
		lemma: "かう"
	},
	{
		rank: 2984,
		frequency: 22.45,
		lemma: "確信"
	},
	{
		rank: 2985,
		frequency: 22.44,
		lemma: "祈る"
	},
	{
		rank: 2986,
		frequency: 22.43,
		lemma: "意志"
	},
	{
		rank: 2987,
		frequency: 22.42,
		lemma: "ほる"
	},
	{
		rank: 2988,
		frequency: 22.42,
		lemma: "捉える"
	},
	{
		rank: 2989,
		frequency: 22.4,
		lemma: "知"
	},
	{
		rank: 2990,
		frequency: 22.4,
		lemma: "シート"
	},
	{
		rank: 2991,
		frequency: 22.39,
		lemma: "休む"
	},
	{
		rank: 2992,
		frequency: 22.37,
		lemma: "高校生"
	},
	{
		rank: 2993,
		frequency: 22.35,
		lemma: "きれる"
	},
	{
		rank: 2994,
		frequency: 22.34,
		lemma: "１２月"
	},
	{
		rank: 2995,
		frequency: 22.34,
		lemma: "パス"
	},
	{
		rank: 2996,
		frequency: 22.33,
		lemma: "ログ"
	},
	{
		rank: 2997,
		frequency: 22.29,
		lemma: "カフェ"
	},
	{
		rank: 2998,
		frequency: 22.27,
		lemma: "暮らし"
	},
	{
		rank: 2999,
		frequency: 22.27,
		lemma: "勇気"
	},
	{
		rank: 3000,
		frequency: 22.27,
		lemma: "｀"
	},
	{
		rank: 3001,
		frequency: 22.25,
		lemma: "カテゴリー"
	},
	{
		rank: 3002,
		frequency: 22.25,
		lemma: "売買"
	},
	{
		rank: 3003,
		frequency: 22.24,
		lemma: "公演"
	},
	{
		rank: 3004,
		frequency: 22.24,
		lemma: "画"
	},
	{
		rank: 3005,
		frequency: 22.19,
		lemma: "制御"
	},
	{
		rank: 3006,
		frequency: 22.18,
		lemma: "食べ物"
	},
	{
		rank: 3007,
		frequency: 22.18,
		lemma: "尋ねる"
	},
	{
		rank: 3008,
		frequency: 22.17,
		lemma: "にて"
	},
	{
		rank: 3009,
		frequency: 22.15,
		lemma: "キリスト"
	},
	{
		rank: 3010,
		frequency: 22.14,
		lemma: "レッスン"
	},
	{
		rank: 3011,
		frequency: 22.13,
		lemma: "法則"
	},
	{
		rank: 3012,
		frequency: 22.12,
		lemma: "作者"
	},
	{
		rank: 3013,
		frequency: 22.12,
		lemma: "メリット"
	},
	{
		rank: 3014,
		frequency: 22.09,
		lemma: "文句"
	},
	{
		rank: 3015,
		frequency: 22.08,
		lemma: "馬鹿"
	},
	{
		rank: 3016,
		frequency: 22.08,
		lemma: "生まれ"
	},
	{
		rank: 3017,
		frequency: 22.08,
		lemma: "失礼"
	},
	{
		rank: 3018,
		frequency: 22.05,
		lemma: "博物館"
	},
	{
		rank: 3019,
		frequency: 22.03,
		lemma: "神社"
	},
	{
		rank: 3020,
		frequency: 22.03,
		lemma: "予防"
	},
	{
		rank: 3021,
		frequency: 22.03,
		lemma: "正当"
	},
	{
		rank: 3022,
		frequency: 22.02,
		lemma: "データベース"
	},
	{
		rank: 3023,
		frequency: 22.02,
		lemma: "レス"
	},
	{
		rank: 3024,
		frequency: 22.01,
		lemma: "うん"
	},
	{
		rank: 3025,
		frequency: 22.01,
		lemma: "実家"
	},
	{
		rank: 3026,
		frequency: 21.99,
		lemma: "活性"
	},
	{
		rank: 3027,
		frequency: 21.99,
		lemma: "受信"
	},
	{
		rank: 3028,
		frequency: 21.98,
		lemma: "山本"
	},
	{
		rank: 3029,
		frequency: 21.97,
		lemma: "自主"
	},
	{
		rank: 3030,
		frequency: 21.96,
		lemma: "アンケート"
	},
	{
		rank: 3031,
		frequency: 21.96,
		lemma: "確率"
	},
	{
		rank: 3032,
		frequency: 21.95,
		lemma: "表明"
	},
	{
		rank: 3033,
		frequency: 21.94,
		lemma: "美術館"
	},
	{
		rank: 3034,
		frequency: 21.93,
		lemma: "解消"
	},
	{
		rank: 3035,
		frequency: 21.92,
		lemma: "オフィス"
	},
	{
		rank: 3036,
		frequency: 21.92,
		lemma: "座"
	},
	{
		rank: 3037,
		frequency: 21.91,
		lemma: "苦手"
	},
	{
		rank: 3038,
		frequency: 21.91,
		lemma: "爆発"
	},
	{
		rank: 3039,
		frequency: 21.9,
		lemma: "欧米"
	},
	{
		rank: 3040,
		frequency: 21.9,
		lemma: "肌"
	},
	{
		rank: 3041,
		frequency: 21.89,
		lemma: "信仰"
	},
	{
		rank: 3042,
		frequency: 21.88,
		lemma: "タイミング"
	},
	{
		rank: 3043,
		frequency: 21.88,
		lemma: "現行"
	},
	{
		rank: 3044,
		frequency: 21.87,
		lemma: "降りる"
	},
	{
		rank: 3045,
		frequency: 21.86,
		lemma: "解放"
	},
	{
		rank: 3046,
		frequency: 21.86,
		lemma: "カバー"
	},
	{
		rank: 3047,
		frequency: 21.75,
		lemma: "ペ"
	},
	{
		rank: 3048,
		frequency: 21.75,
		lemma: "発電"
	},
	{
		rank: 3049,
		frequency: 21.73,
		lemma: "カット"
	},
	{
		rank: 3050,
		frequency: 21.71,
		lemma: "デモ"
	},
	{
		rank: 3051,
		frequency: 21.7,
		lemma: "損害"
	},
	{
		rank: 3052,
		frequency: 21.68,
		lemma: "小学生"
	},
	{
		rank: 3053,
		frequency: 21.68,
		lemma: "判る"
	},
	{
		rank: 3054,
		frequency: 21.67,
		lemma: "取り組み"
	},
	{
		rank: 3055,
		frequency: 21.67,
		lemma: "満たす"
	},
	{
		rank: 3056,
		frequency: 21.66,
		lemma: "トレーニング"
	},
	{
		rank: 3057,
		frequency: 21.66,
		lemma: "アフリカ"
	},
	{
		rank: 3058,
		frequency: 21.65,
		lemma: "踊る"
	},
	{
		rank: 3059,
		frequency: 21.64,
		lemma: "悪"
	},
	{
		rank: 3060,
		frequency: 21.63,
		lemma: "妹"
	},
	{
		rank: 3061,
		frequency: 21.63,
		lemma: "競馬"
	},
	{
		rank: 3062,
		frequency: 21.63,
		lemma: "運命"
	},
	{
		rank: 3063,
		frequency: 21.6,
		lemma: "個々"
	},
	{
		rank: 3064,
		frequency: 21.6,
		lemma: "噂"
	},
	{
		rank: 3065,
		frequency: 21.59,
		lemma: "コンピューター"
	},
	{
		rank: 3066,
		frequency: 21.59,
		lemma: "３つ"
	},
	{
		rank: 3067,
		frequency: 21.59,
		lemma: "経費"
	},
	{
		rank: 3068,
		frequency: 21.59,
		lemma: "アル"
	},
	{
		rank: 3069,
		frequency: 21.58,
		lemma: "招く"
	},
	{
		rank: 3070,
		frequency: 21.58,
		lemma: "ええ"
	},
	{
		rank: 3071,
		frequency: 21.57,
		lemma: "本書"
	},
	{
		rank: 3072,
		frequency: 21.57,
		lemma: "週刊"
	},
	{
		rank: 3073,
		frequency: 21.57,
		lemma: "建てる"
	},
	{
		rank: 3074,
		frequency: 21.55,
		lemma: "原"
	},
	{
		rank: 3075,
		frequency: 21.55,
		lemma: "仕様"
	},
	{
		rank: 3076,
		frequency: 21.55,
		lemma: "マンガ"
	},
	{
		rank: 3077,
		frequency: 21.54,
		lemma: "園"
	},
	{
		rank: 3078,
		frequency: 21.54,
		lemma: "電力"
	},
	{
		rank: 3079,
		frequency: 21.52,
		lemma: "オフ"
	},
	{
		rank: 3080,
		frequency: 21.51,
		lemma: "発達"
	},
	{
		rank: 3081,
		frequency: 21.51,
		lemma: "来"
	},
	{
		rank: 3082,
		frequency: 21.49,
		lemma: "矛盾"
	},
	{
		rank: 3083,
		frequency: 21.48,
		lemma: "ハウス"
	},
	{
		rank: 3084,
		frequency: 21.48,
		lemma: "性能"
	},
	{
		rank: 3085,
		frequency: 21.48,
		lemma: "立派"
	},
	{
		rank: 3086,
		frequency: 21.45,
		lemma: "役員"
	},
	{
		rank: 3087,
		frequency: 21.45,
		lemma: "大いに"
	},
	{
		rank: 3088,
		frequency: 21.44,
		lemma: "影"
	},
	{
		rank: 3089,
		frequency: 21.44,
		lemma: "象徴"
	},
	{
		rank: 3090,
		frequency: 21.44,
		lemma: "性質"
	},
	{
		rank: 3091,
		frequency: 21.43,
		lemma: "送信"
	},
	{
		rank: 3092,
		frequency: 21.43,
		lemma: "勝"
	},
	{
		rank: 3093,
		frequency: 21.42,
		lemma: "わが国"
	},
	{
		rank: 3094,
		frequency: 21.4,
		lemma: "あえて"
	},
	{
		rank: 3095,
		frequency: 21.39,
		lemma: "あー"
	},
	{
		rank: 3096,
		frequency: 21.39,
		lemma: "上手"
	},
	{
		rank: 3097,
		frequency: 21.38,
		lemma: "圧力"
	},
	{
		rank: 3098,
		frequency: 21.37,
		lemma: "風邪"
	},
	{
		rank: 3099,
		frequency: 21.36,
		lemma: "アウト"
	},
	{
		rank: 3100,
		frequency: 21.35,
		lemma: "スキル"
	},
	{
		rank: 3101,
		frequency: 21.33,
		lemma: "得意"
	},
	{
		rank: 3102,
		frequency: 21.31,
		lemma: "温度"
	},
	{
		rank: 3103,
		frequency: 21.3,
		lemma: "初心者"
	},
	{
		rank: 3104,
		frequency: 21.3,
		lemma: "一生懸命"
	},
	{
		rank: 3105,
		frequency: 21.29,
		lemma: "香港"
	},
	{
		rank: 3106,
		frequency: 21.28,
		lemma: "急ぐ"
	},
	{
		rank: 3107,
		frequency: 21.28,
		lemma: "必死"
	},
	{
		rank: 3108,
		frequency: 21.27,
		lemma: "ラーメン"
	},
	{
		rank: 3109,
		frequency: 21.27,
		lemma: "わざわざ"
	},
	{
		rank: 3110,
		frequency: 21.25,
		lemma: "そうすると"
	},
	{
		rank: 3111,
		frequency: 21.24,
		lemma: "ゴミ"
	},
	{
		rank: 3112,
		frequency: 21.24,
		lemma: "ギター"
	},
	{
		rank: 3113,
		frequency: 21.24,
		lemma: "だける"
	},
	{
		rank: 3114,
		frequency: 21.24,
		lemma: "具合"
	},
	{
		rank: 3115,
		frequency: 21.23,
		lemma: "橋"
	},
	{
		rank: 3116,
		frequency: 21.2,
		lemma: "神経"
	},
	{
		rank: 3117,
		frequency: 21.2,
		lemma: "作用"
	},
	{
		rank: 3118,
		frequency: 21.19,
		lemma: "いわば"
	},
	{
		rank: 3119,
		frequency: 21.18,
		lemma: "庭"
	},
	{
		rank: 3120,
		frequency: 21.18,
		lemma: "本物"
	},
	{
		rank: 3121,
		frequency: 21.17,
		lemma: "過ぎ"
	},
	{
		rank: 3122,
		frequency: 21.16,
		lemma: "意義"
	},
	{
		rank: 3123,
		frequency: 21.14,
		lemma: "抑える"
	},
	{
		rank: 3124,
		frequency: 21.14,
		lemma: "新宿"
	},
	{
		rank: 3125,
		frequency: 21.12,
		lemma: "ライフ"
	},
	{
		rank: 3126,
		frequency: 21.12,
		lemma: "延長"
	},
	{
		rank: 3127,
		frequency: 21.11,
		lemma: "観客"
	},
	{
		rank: 3128,
		frequency: 21.08,
		lemma: "ＮＨＫ"
	},
	{
		rank: 3129,
		frequency: 21.05,
		lemma: "深刻"
	},
	{
		rank: 3130,
		frequency: 21.05,
		lemma: "ｍ"
	},
	{
		rank: 3131,
		frequency: 21.05,
		lemma: "ファンド"
	},
	{
		rank: 3132,
		frequency: 21.04,
		lemma: "恐ろしい"
	},
	{
		rank: 3133,
		frequency: 21.03,
		lemma: "路線"
	},
	{
		rank: 3134,
		frequency: 21.03,
		lemma: "又"
	},
	{
		rank: 3135,
		frequency: 21.02,
		lemma: "マシン"
	},
	{
		rank: 3136,
		frequency: 21.02,
		lemma: "武器"
	},
	{
		rank: 3137,
		frequency: 21,
		lemma: "取締役"
	},
	{
		rank: 3138,
		frequency: 21,
		lemma: "ほんの"
	},
	{
		rank: 3139,
		frequency: 20.99,
		lemma: "方面"
	},
	{
		rank: 3140,
		frequency: 20.98,
		lemma: "盛り上がる"
	},
	{
		rank: 3141,
		frequency: 20.97,
		lemma: "自立"
	},
	{
		rank: 3142,
		frequency: 20.97,
		lemma: "荷物"
	},
	{
		rank: 3143,
		frequency: 20.97,
		lemma: "録"
	},
	{
		rank: 3144,
		frequency: 20.97,
		lemma: "ローン"
	},
	{
		rank: 3145,
		frequency: 20.95,
		lemma: "直前"
	},
	{
		rank: 3146,
		frequency: 20.94,
		lemma: "見直し"
	},
	{
		rank: 3147,
		frequency: 20.92,
		lemma: "既存"
	},
	{
		rank: 3148,
		frequency: 20.92,
		lemma: "部品"
	},
	{
		rank: 3149,
		frequency: 20.9,
		lemma: "アイデア"
	},
	{
		rank: 3150,
		frequency: 20.9,
		lemma: "モン"
	},
	{
		rank: 3151,
		frequency: 20.89,
		lemma: "かな"
	},
	{
		rank: 3152,
		frequency: 20.89,
		lemma: "負う"
	},
	{
		rank: 3153,
		frequency: 20.88,
		lemma: "ゆう"
	},
	{
		rank: 3154,
		frequency: 20.88,
		lemma: "幹部"
	},
	{
		rank: 3155,
		frequency: 20.88,
		lemma: "相変わらず"
	},
	{
		rank: 3156,
		frequency: 20.87,
		lemma: "殆ど"
	},
	{
		rank: 3157,
		frequency: 20.87,
		lemma: "本気"
	},
	{
		rank: 3158,
		frequency: 20.86,
		lemma: "最適"
	},
	{
		rank: 3159,
		frequency: 20.84,
		lemma: "きく"
	},
	{
		rank: 3160,
		frequency: 20.84,
		lemma: "１１月"
	},
	{
		rank: 3161,
		frequency: 20.84,
		lemma: "地下"
	},
	{
		rank: 3162,
		frequency: 20.84,
		lemma: "慎重"
	},
	{
		rank: 3163,
		frequency: 20.83,
		lemma: "アート"
	},
	{
		rank: 3164,
		frequency: 20.82,
		lemma: "悩み"
	},
	{
		rank: 3165,
		frequency: 20.8,
		lemma: "ずいぶん"
	},
	{
		rank: 3166,
		frequency: 20.8,
		lemma: "もしか"
	},
	{
		rank: 3167,
		frequency: 20.79,
		lemma: "学問"
	},
	{
		rank: 3168,
		frequency: 20.78,
		lemma: "髪"
	},
	{
		rank: 3169,
		frequency: 20.78,
		lemma: "見通し"
	},
	{
		rank: 3170,
		frequency: 20.78,
		lemma: "導く"
	},
	{
		rank: 3171,
		frequency: 20.77,
		lemma: "伸ばす"
	},
	{
		rank: 3172,
		frequency: 20.76,
		lemma: "マニュアル"
	},
	{
		rank: 3173,
		frequency: 20.76,
		lemma: "進出"
	},
	{
		rank: 3174,
		frequency: 20.76,
		lemma: "劇"
	},
	{
		rank: 3175,
		frequency: 20.76,
		lemma: "為替"
	},
	{
		rank: 3176,
		frequency: 20.75,
		lemma: "久々"
	},
	{
		rank: 3177,
		frequency: 20.75,
		lemma: "エリア"
	},
	{
		rank: 3178,
		frequency: 20.74,
		lemma: "丁寧"
	},
	{
		rank: 3179,
		frequency: 20.74,
		lemma: "総裁"
	},
	{
		rank: 3180,
		frequency: 20.73,
		lemma: "視聴"
	},
	{
		rank: 3181,
		frequency: 20.73,
		lemma: "あがる"
	},
	{
		rank: 3182,
		frequency: 20.73,
		lemma: "我が"
	},
	{
		rank: 3183,
		frequency: 20.71,
		lemma: "かた"
	},
	{
		rank: 3184,
		frequency: 20.7,
		lemma: "産"
	},
	{
		rank: 3185,
		frequency: 20.7,
		lemma: "かしら"
	},
	{
		rank: 3186,
		frequency: 20.69,
		lemma: "袋"
	},
	{
		rank: 3187,
		frequency: 20.69,
		lemma: "歯"
	},
	{
		rank: 3188,
		frequency: 20.69,
		lemma: "格差"
	},
	{
		rank: 3189,
		frequency: 20.67,
		lemma: "区別"
	},
	{
		rank: 3190,
		frequency: 20.65,
		lemma: "カレー"
	},
	{
		rank: 3191,
		frequency: 20.65,
		lemma: "支払い"
	},
	{
		rank: 3192,
		frequency: 20.65,
		lemma: "塩"
	},
	{
		rank: 3193,
		frequency: 20.64,
		lemma: "休日"
	},
	{
		rank: 3194,
		frequency: 20.64,
		lemma: "当社"
	},
	{
		rank: 3195,
		frequency: 20.63,
		lemma: "解析"
	},
	{
		rank: 3196,
		frequency: 20.62,
		lemma: "課"
	},
	{
		rank: 3197,
		frequency: 20.61,
		lemma: "投げる"
	},
	{
		rank: 3198,
		frequency: 20.61,
		lemma: "上司"
	},
	{
		rank: 3199,
		frequency: 20.59,
		lemma: "耐える"
	},
	{
		rank: 3200,
		frequency: 20.59,
		lemma: "民営"
	},
	{
		rank: 3201,
		frequency: 20.59,
		lemma: "法的"
	},
	{
		rank: 3202,
		frequency: 20.58,
		lemma: "呂"
	},
	{
		rank: 3203,
		frequency: 20.58,
		lemma: "周年"
	},
	{
		rank: 3204,
		frequency: 20.57,
		lemma: "よー"
	},
	{
		rank: 3205,
		frequency: 20.55,
		lemma: "従って"
	},
	{
		rank: 3206,
		frequency: 20.53,
		lemma: "医"
	},
	{
		rank: 3207,
		frequency: 20.52,
		lemma: "吹く"
	},
	{
		rank: 3208,
		frequency: 20.52,
		lemma: "しばしば"
	},
	{
		rank: 3209,
		frequency: 20.52,
		lemma: "兄弟"
	},
	{
		rank: 3210,
		frequency: 20.51,
		lemma: "だいたい"
	},
	{
		rank: 3211,
		frequency: 20.51,
		lemma: "競技"
	},
	{
		rank: 3212,
		frequency: 20.51,
		lemma: "辺り"
	},
	{
		rank: 3213,
		frequency: 20.48,
		lemma: "弾く"
	},
	{
		rank: 3214,
		frequency: 20.48,
		lemma: "当事者"
	},
	{
		rank: 3215,
		frequency: 20.48,
		lemma: "素直"
	},
	{
		rank: 3216,
		frequency: 20.44,
		lemma: "決算"
	},
	{
		rank: 3217,
		frequency: 20.44,
		lemma: "スクール"
	},
	{
		rank: 3218,
		frequency: 20.44,
		lemma: "あたる"
	},
	{
		rank: 3219,
		frequency: 20.43,
		lemma: "はるか"
	},
	{
		rank: 3220,
		frequency: 20.41,
		lemma: "すむ"
	},
	{
		rank: 3221,
		frequency: 20.4,
		lemma: "アーティスト"
	},
	{
		rank: 3222,
		frequency: 20.4,
		lemma: "大衆"
	},
	{
		rank: 3223,
		frequency: 20.4,
		lemma: "回す"
	},
	{
		rank: 3224,
		frequency: 20.39,
		lemma: "人事"
	},
	{
		rank: 3225,
		frequency: 20.39,
		lemma: "勢力"
	},
	{
		rank: 3226,
		frequency: 20.39,
		lemma: "キャンペーン"
	},
	{
		rank: 3227,
		frequency: 20.39,
		lemma: "不正"
	},
	{
		rank: 3228,
		frequency: 20.37,
		lemma: "議長"
	},
	{
		rank: 3229,
		frequency: 20.37,
		lemma: "報酬"
	},
	{
		rank: 3230,
		frequency: 20.37,
		lemma: "マーケット"
	},
	{
		rank: 3231,
		frequency: 20.35,
		lemma: "便"
	},
	{
		rank: 3232,
		frequency: 20.32,
		lemma: "応用"
	},
	{
		rank: 3233,
		frequency: 20.32,
		lemma: "振興"
	},
	{
		rank: 3234,
		frequency: 20.31,
		lemma: "ソ連"
	},
	{
		rank: 3235,
		frequency: 20.31,
		lemma: "だんだん"
	},
	{
		rank: 3236,
		frequency: 20.3,
		lemma: "変換"
	},
	{
		rank: 3237,
		frequency: 20.29,
		lemma: "減らす"
	},
	{
		rank: 3238,
		frequency: 20.29,
		lemma: "連邦"
	},
	{
		rank: 3239,
		frequency: 20.29,
		lemma: "衝撃"
	},
	{
		rank: 3240,
		frequency: 20.29,
		lemma: "レコード"
	},
	{
		rank: 3241,
		frequency: 20.29,
		lemma: "今朝"
	},
	{
		rank: 3242,
		frequency: 20.26,
		lemma: "権限"
	},
	{
		rank: 3243,
		frequency: 20.26,
		lemma: "充分"
	},
	{
		rank: 3244,
		frequency: 20.24,
		lemma: "きわめて"
	},
	{
		rank: 3245,
		frequency: 20.23,
		lemma: "動向"
	},
	{
		rank: 3246,
		frequency: 20.22,
		lemma: "丸"
	},
	{
		rank: 3247,
		frequency: 20.2,
		lemma: "ノウハウ"
	},
	{
		rank: 3248,
		frequency: 20.2,
		lemma: "まい"
	},
	{
		rank: 3249,
		frequency: 20.19,
		lemma: "あくまで"
	},
	{
		rank: 3250,
		frequency: 20.17,
		lemma: "怒り"
	},
	{
		rank: 3251,
		frequency: 20.17,
		lemma: "掲げる"
	},
	{
		rank: 3252,
		frequency: 20.17,
		lemma: "さる"
	},
	{
		rank: 3253,
		frequency: 20.16,
		lemma: "療法"
	},
	{
		rank: 3254,
		frequency: 20.15,
		lemma: "搭載"
	},
	{
		rank: 3255,
		frequency: 20.15,
		lemma: "収益"
	},
	{
		rank: 3256,
		frequency: 20.15,
		lemma: "それだけ"
	},
	{
		rank: 3257,
		frequency: 20.15,
		lemma: "どんなに"
	},
	{
		rank: 3258,
		frequency: 20.14,
		lemma: "人数"
	},
	{
		rank: 3259,
		frequency: 20.14,
		lemma: "縁"
	},
	{
		rank: 3260,
		frequency: 20.14,
		lemma: "ほんとう"
	},
	{
		rank: 3261,
		frequency: 20.13,
		lemma: "政党"
	},
	{
		rank: 3262,
		frequency: 20.13,
		lemma: "違法"
	},
	{
		rank: 3263,
		frequency: 20.12,
		lemma: "スケジュール"
	},
	{
		rank: 3264,
		frequency: 20.12,
		lemma: "とくに"
	},
	{
		rank: 3265,
		frequency: 20.09,
		lemma: "寂しい"
	},
	{
		rank: 3266,
		frequency: 20.09,
		lemma: "来週"
	},
	{
		rank: 3267,
		frequency: 20.09,
		lemma: "オランダ"
	},
	{
		rank: 3268,
		frequency: 20.07,
		lemma: "本体"
	},
	{
		rank: 3269,
		frequency: 20.05,
		lemma: "塾"
	},
	{
		rank: 3270,
		frequency: 20.05,
		lemma: "骨"
	},
	{
		rank: 3271,
		frequency: 20.05,
		lemma: "我慢"
	},
	{
		rank: 3272,
		frequency: 20.04,
		lemma: "一生"
	},
	{
		rank: 3273,
		frequency: 20.03,
		lemma: "原作"
	},
	{
		rank: 3274,
		frequency: 20.01,
		lemma: "ベトナム"
	},
	{
		rank: 3275,
		frequency: 20.01,
		lemma: "底"
	},
	{
		rank: 3276,
		frequency: 19.99,
		lemma: "仮に"
	},
	{
		rank: 3277,
		frequency: 19.99,
		lemma: "書き込む"
	},
	{
		rank: 3278,
		frequency: 19.99,
		lemma: "ワーク"
	},
	{
		rank: 3279,
		frequency: 19.99,
		lemma: "たいへん"
	},
	{
		rank: 3280,
		frequency: 19.99,
		lemma: "強力"
	},
	{
		rank: 3281,
		frequency: 19.98,
		lemma: "お尋ね"
	},
	{
		rank: 3282,
		frequency: 19.94,
		lemma: "コミュニティ"
	},
	{
		rank: 3283,
		frequency: 19.94,
		lemma: "箇所"
	},
	{
		rank: 3284,
		frequency: 19.94,
		lemma: "達す"
	},
	{
		rank: 3285,
		frequency: 19.94,
		lemma: "族"
	},
	{
		rank: 3286,
		frequency: 19.94,
		lemma: "陥る"
	},
	{
		rank: 3287,
		frequency: 19.93,
		lemma: "貰う"
	},
	{
		rank: 3288,
		frequency: 19.92,
		lemma: "圧倒的"
	},
	{
		rank: 3289,
		frequency: 19.92,
		lemma: "高橋"
	},
	{
		rank: 3290,
		frequency: 19.9,
		lemma: "免許"
	},
	{
		rank: 3291,
		frequency: 19.9,
		lemma: "ユーロ"
	},
	{
		rank: 3292,
		frequency: 19.88,
		lemma: "付け"
	},
	{
		rank: 3293,
		frequency: 19.88,
		lemma: "港"
	},
	{
		rank: 3294,
		frequency: 19.87,
		lemma: "聖"
	},
	{
		rank: 3295,
		frequency: 19.84,
		lemma: "アドレス"
	},
	{
		rank: 3296,
		frequency: 19.82,
		lemma: "移る"
	},
	{
		rank: 3297,
		frequency: 19.81,
		lemma: "実力"
	},
	{
		rank: 3298,
		frequency: 19.81,
		lemma: "裁判官"
	},
	{
		rank: 3299,
		frequency: 19.8,
		lemma: "云う"
	},
	{
		rank: 3300,
		frequency: 19.8,
		lemma: "なぜなら"
	},
	{
		rank: 3301,
		frequency: 19.8,
		lemma: "恋人"
	},
	{
		rank: 3302,
		frequency: 19.8,
		lemma: "首都"
	},
	{
		rank: 3303,
		frequency: 19.77,
		lemma: "質疑"
	},
	{
		rank: 3304,
		frequency: 19.76,
		lemma: "なるほど"
	},
	{
		rank: 3305,
		frequency: 19.75,
		lemma: "住所"
	},
	{
		rank: 3306,
		frequency: 19.75,
		lemma: "防ぐ"
	},
	{
		rank: 3307,
		frequency: 19.75,
		lemma: "へん"
	},
	{
		rank: 3308,
		frequency: 19.74,
		lemma: "書ける"
	},
	{
		rank: 3309,
		frequency: 19.74,
		lemma: "歓迎"
	},
	{
		rank: 3310,
		frequency: 19.74,
		lemma: "なにか"
	},
	{
		rank: 3311,
		frequency: 19.73,
		lemma: "あたし"
	},
	{
		rank: 3312,
		frequency: 19.72,
		lemma: "子育て"
	},
	{
		rank: 3313,
		frequency: 19.71,
		lemma: "黒い"
	},
	{
		rank: 3314,
		frequency: 19.7,
		lemma: "懐かしい"
	},
	{
		rank: 3315,
		frequency: 19.7,
		lemma: "順"
	},
	{
		rank: 3316,
		frequency: 19.67,
		lemma: "韻"
	},
	{
		rank: 3317,
		frequency: 19.67,
		lemma: "作曲"
	},
	{
		rank: 3318,
		frequency: 19.66,
		lemma: "失業"
	},
	{
		rank: 3319,
		frequency: 19.66,
		lemma: "太郎"
	},
	{
		rank: 3320,
		frequency: 19.65,
		lemma: "ぼる"
	},
	{
		rank: 3321,
		frequency: 19.64,
		lemma: "客観"
	},
	{
		rank: 3322,
		frequency: 19.62,
		lemma: "田舎"
	},
	{
		rank: 3323,
		frequency: 19.62,
		lemma: "任せる"
	},
	{
		rank: 3324,
		frequency: 19.61,
		lemma: "鍵"
	},
	{
		rank: 3325,
		frequency: 19.6,
		lemma: "勿論"
	},
	{
		rank: 3326,
		frequency: 19.6,
		lemma: "指す"
	},
	{
		rank: 3327,
		frequency: 19.58,
		lemma: "リン"
	},
	{
		rank: 3328,
		frequency: 19.57,
		lemma: "￥"
	},
	{
		rank: 3329,
		frequency: 19.55,
		lemma: "同社"
	},
	{
		rank: 3330,
		frequency: 19.54,
		lemma: "売上"
	},
	{
		rank: 3331,
		frequency: 19.54,
		lemma: "リアル"
	},
	{
		rank: 3332,
		frequency: 19.53,
		lemma: "倫理"
	},
	{
		rank: 3333,
		frequency: 19.52,
		lemma: "中古"
	},
	{
		rank: 3334,
		frequency: 19.5,
		lemma: "卵"
	},
	{
		rank: 3335,
		frequency: 19.5,
		lemma: "見つめる"
	},
	{
		rank: 3336,
		frequency: 19.5,
		lemma: "朝日"
	},
	{
		rank: 3337,
		frequency: 19.5,
		lemma: "高級"
	},
	{
		rank: 3338,
		frequency: 19.5,
		lemma: "消す"
	},
	{
		rank: 3339,
		frequency: 19.5,
		lemma: "辞書"
	},
	{
		rank: 3340,
		frequency: 19.49,
		lemma: "市長"
	},
	{
		rank: 3341,
		frequency: 19.49,
		lemma: "一種"
	},
	{
		rank: 3342,
		frequency: 19.48,
		lemma: "入門"
	},
	{
		rank: 3343,
		frequency: 19.48,
		lemma: "そういえば"
	},
	{
		rank: 3344,
		frequency: 19.48,
		lemma: "キャラクター"
	},
	{
		rank: 3345,
		frequency: 19.48,
		lemma: "出張"
	},
	{
		rank: 3346,
		frequency: 19.48,
		lemma: "苦しい"
	},
	{
		rank: 3347,
		frequency: 19.47,
		lemma: "夕食"
	},
	{
		rank: 3348,
		frequency: 19.45,
		lemma: "叩く"
	},
	{
		rank: 3349,
		frequency: 19.44,
		lemma: "存じる"
	},
	{
		rank: 3350,
		frequency: 19.43,
		lemma: "ダウン"
	},
	{
		rank: 3351,
		frequency: 19.43,
		lemma: "深夜"
	},
	{
		rank: 3352,
		frequency: 19.43,
		lemma: "協定"
	},
	{
		rank: 3353,
		frequency: 19.43,
		lemma: "癒す"
	},
	{
		rank: 3354,
		frequency: 19.4,
		lemma: "買える"
	},
	{
		rank: 3355,
		frequency: 19.4,
		lemma: "半年"
	},
	{
		rank: 3356,
		frequency: 19.39,
		lemma: "息"
	},
	{
		rank: 3357,
		frequency: 19.39,
		lemma: "豊富"
	},
	{
		rank: 3358,
		frequency: 19.37,
		lemma: "身近"
	},
	{
		rank: 3359,
		frequency: 19.37,
		lemma: "たく"
	},
	{
		rank: 3360,
		frequency: 19.37,
		lemma: "うつ"
	},
	{
		rank: 3361,
		frequency: 19.33,
		lemma: "物件"
	},
	{
		rank: 3362,
		frequency: 19.32,
		lemma: "ハード"
	},
	{
		rank: 3363,
		frequency: 19.31,
		lemma: "余り"
	},
	{
		rank: 3364,
		frequency: 19.29,
		lemma: "着"
	},
	{
		rank: 3365,
		frequency: 19.28,
		lemma: "優秀"
	},
	{
		rank: 3366,
		frequency: 19.26,
		lemma: "加わる"
	},
	{
		rank: 3367,
		frequency: 19.25,
		lemma: "弟"
	},
	{
		rank: 3368,
		frequency: 19.25,
		lemma: "角"
	},
	{
		rank: 3369,
		frequency: 19.25,
		lemma: "面接"
	},
	{
		rank: 3370,
		frequency: 19.24,
		lemma: "部隊"
	},
	{
		rank: 3371,
		frequency: 19.23,
		lemma: "マレーシア"
	},
	{
		rank: 3372,
		frequency: 19.23,
		lemma: "すぎ"
	},
	{
		rank: 3373,
		frequency: 19.22,
		lemma: "ハワイ"
	},
	{
		rank: 3374,
		frequency: 19.22,
		lemma: "給与"
	},
	{
		rank: 3375,
		frequency: 19.2,
		lemma: "明"
	},
	{
		rank: 3376,
		frequency: 19.19,
		lemma: "尽くす"
	},
	{
		rank: 3377,
		frequency: 19.18,
		lemma: "咲く"
	},
	{
		rank: 3378,
		frequency: 19.18,
		lemma: "発音"
	},
	{
		rank: 3379,
		frequency: 19.17,
		lemma: "配布"
	},
	{
		rank: 3380,
		frequency: 19.16,
		lemma: "同意"
	},
	{
		rank: 3381,
		frequency: 19.16,
		lemma: "オススメ"
	},
	{
		rank: 3382,
		frequency: 19.15,
		lemma: "交付"
	},
	{
		rank: 3383,
		frequency: 19.15,
		lemma: "ありがたい"
	},
	{
		rank: 3384,
		frequency: 19.14,
		lemma: "ワ"
	},
	{
		rank: 3385,
		frequency: 19.14,
		lemma: "並べる"
	},
	{
		rank: 3386,
		frequency: 19.14,
		lemma: "保有"
	},
	{
		rank: 3387,
		frequency: 19.13,
		lemma: "課長"
	},
	{
		rank: 3388,
		frequency: 19.11,
		lemma: "こだわる"
	},
	{
		rank: 3389,
		frequency: 19.11,
		lemma: "体系"
	},
	{
		rank: 3390,
		frequency: 19.09,
		lemma: "ユダヤ"
	},
	{
		rank: 3391,
		frequency: 19.08,
		lemma: "同一"
	},
	{
		rank: 3392,
		frequency: 19.07,
		lemma: "加藤"
	},
	{
		rank: 3393,
		frequency: 19.07,
		lemma: "官僚"
	},
	{
		rank: 3394,
		frequency: 19.06,
		lemma: "列車"
	},
	{
		rank: 3395,
		frequency: 19.05,
		lemma: "茶"
	},
	{
		rank: 3396,
		frequency: 19.04,
		lemma: "朝日新聞"
	},
	{
		rank: 3397,
		frequency: 19.04,
		lemma: "構想"
	},
	{
		rank: 3398,
		frequency: 19.03,
		lemma: "陣"
	},
	{
		rank: 3399,
		frequency: 19.03,
		lemma: "口座"
	},
	{
		rank: 3400,
		frequency: 19.03,
		lemma: "説得"
	},
	{
		rank: 3401,
		frequency: 19.01,
		lemma: "決議"
	},
	{
		rank: 3402,
		frequency: 19.01,
		lemma: "地位"
	},
	{
		rank: 3403,
		frequency: 18.99,
		lemma: "完了"
	},
	{
		rank: 3404,
		frequency: 18.99,
		lemma: "進歩"
	},
	{
		rank: 3405,
		frequency: 18.98,
		lemma: "追求"
	},
	{
		rank: 3406,
		frequency: 18.98,
		lemma: "続き"
	},
	{
		rank: 3407,
		frequency: 18.97,
		lemma: "欄"
	},
	{
		rank: 3408,
		frequency: 18.97,
		lemma: "和"
	},
	{
		rank: 3409,
		frequency: 18.97,
		lemma: "カ月"
	},
	{
		rank: 3410,
		frequency: 18.97,
		lemma: "乗せる"
	},
	{
		rank: 3411,
		frequency: 18.94,
		lemma: "燃料"
	},
	{
		rank: 3412,
		frequency: 18.94,
		lemma: "あわせる"
	},
	{
		rank: 3413,
		frequency: 18.94,
		lemma: "ご存知"
	},
	{
		rank: 3414,
		frequency: 18.93,
		lemma: "壊れる"
	},
	{
		rank: 3415,
		frequency: 18.93,
		lemma: "排除"
	},
	{
		rank: 3416,
		frequency: 18.93,
		lemma: "ポスト"
	},
	{
		rank: 3417,
		frequency: 18.93,
		lemma: "解除"
	},
	{
		rank: 3418,
		frequency: 18.92,
		lemma: "Ｑ"
	},
	{
		rank: 3419,
		frequency: 18.92,
		lemma: "好み"
	},
	{
		rank: 3420,
		frequency: 18.92,
		lemma: "加入"
	},
	{
		rank: 3421,
		frequency: 18.92,
		lemma: "側面"
	},
	{
		rank: 3422,
		frequency: 18.92,
		lemma: "開設"
	},
	{
		rank: 3423,
		frequency: 18.91,
		lemma: "辞める"
	},
	{
		rank: 3424,
		frequency: 18.9,
		lemma: "在庫"
	},
	{
		rank: 3425,
		frequency: 18.88,
		lemma: "とらえる"
	},
	{
		rank: 3426,
		frequency: 18.88,
		lemma: "離婚"
	},
	{
		rank: 3427,
		frequency: 18.87,
		lemma: "回収"
	},
	{
		rank: 3428,
		frequency: 18.87,
		lemma: "っけ"
	},
	{
		rank: 3429,
		frequency: 18.87,
		lemma: "生む"
	},
	{
		rank: 3430,
		frequency: 18.86,
		lemma: "ドライブ"
	},
	{
		rank: 3431,
		frequency: 18.86,
		lemma: "あちこち"
	},
	{
		rank: 3432,
		frequency: 18.85,
		lemma: "鏡"
	},
	{
		rank: 3433,
		frequency: 18.84,
		lemma: "当該"
	},
	{
		rank: 3434,
		frequency: 18.84,
		lemma: "移転"
	},
	{
		rank: 3435,
		frequency: 18.83,
		lemma: "全般"
	},
	{
		rank: 3436,
		frequency: 18.83,
		lemma: "ウイルス"
	},
	{
		rank: 3437,
		frequency: 18.82,
		lemma: "全面"
	},
	{
		rank: 3438,
		frequency: 18.81,
		lemma: "非難"
	},
	{
		rank: 3439,
		frequency: 18.81,
		lemma: "修理"
	},
	{
		rank: 3440,
		frequency: 18.79,
		lemma: "集合"
	},
	{
		rank: 3441,
		frequency: 18.78,
		lemma: "誘う"
	},
	{
		rank: 3442,
		frequency: 18.75,
		lemma: "音声"
	},
	{
		rank: 3443,
		frequency: 18.75,
		lemma: "視"
	},
	{
		rank: 3444,
		frequency: 18.75,
		lemma: "施行"
	},
	{
		rank: 3445,
		frequency: 18.75,
		lemma: "増す"
	},
	{
		rank: 3446,
		frequency: 18.73,
		lemma: "共に"
	},
	{
		rank: 3447,
		frequency: 18.72,
		lemma: "効く"
	},
	{
		rank: 3448,
		frequency: 18.72,
		lemma: "カウンター"
	},
	{
		rank: 3449,
		frequency: 18.71,
		lemma: "文明"
	},
	{
		rank: 3450,
		frequency: 18.7,
		lemma: "流行"
	},
	{
		rank: 3451,
		frequency: 18.69,
		lemma: "ジャパン"
	},
	{
		rank: 3452,
		frequency: 18.68,
		lemma: "不良"
	},
	{
		rank: 3453,
		frequency: 18.68,
		lemma: "美術"
	},
	{
		rank: 3454,
		frequency: 18.68,
		lemma: "三つ"
	},
	{
		rank: 3455,
		frequency: 18.67,
		lemma: "名誉"
	},
	{
		rank: 3456,
		frequency: 18.67,
		lemma: "田"
	},
	{
		rank: 3457,
		frequency: 18.67,
		lemma: "変動"
	},
	{
		rank: 3458,
		frequency: 18.67,
		lemma: "都道府県"
	},
	{
		rank: 3459,
		frequency: 18.67,
		lemma: "ちょっとした"
	},
	{
		rank: 3460,
		frequency: 18.67,
		lemma: "逆に"
	},
	{
		rank: 3461,
		frequency: 18.66,
		lemma: "ケーキ"
	},
	{
		rank: 3462,
		frequency: 18.65,
		lemma: "受講"
	},
	{
		rank: 3463,
		frequency: 18.65,
		lemma: "商店"
	},
	{
		rank: 3464,
		frequency: 18.63,
		lemma: "伝説"
	},
	{
		rank: 3465,
		frequency: 18.61,
		lemma: "言"
	},
	{
		rank: 3466,
		frequency: 18.6,
		lemma: "堂"
	},
	{
		rank: 3467,
		frequency: 18.59,
		lemma: "輝く"
	},
	{
		rank: 3468,
		frequency: 18.58,
		lemma: "マイクロソフト"
	},
	{
		rank: 3469,
		frequency: 18.56,
		lemma: "再開"
	},
	{
		rank: 3470,
		frequency: 18.56,
		lemma: "休憩"
	},
	{
		rank: 3471,
		frequency: 18.56,
		lemma: "握る"
	},
	{
		rank: 3472,
		frequency: 18.56,
		lemma: "松本"
	},
	{
		rank: 3473,
		frequency: 18.55,
		lemma: "階級"
	},
	{
		rank: 3474,
		frequency: 18.55,
		lemma: "公的"
	},
	{
		rank: 3475,
		frequency: 18.54,
		lemma: "江戸"
	},
	{
		rank: 3476,
		frequency: 18.54,
		lemma: "キャリア"
	},
	{
		rank: 3477,
		frequency: 18.54,
		lemma: "転職"
	},
	{
		rank: 3478,
		frequency: 18.52,
		lemma: "ライト"
	},
	{
		rank: 3479,
		frequency: 18.52,
		lemma: "先進"
	},
	{
		rank: 3480,
		frequency: 18.51,
		lemma: "遺伝子"
	},
	{
		rank: 3481,
		frequency: 18.51,
		lemma: "農家"
	},
	{
		rank: 3482,
		frequency: 18.5,
		lemma: "総務"
	},
	{
		rank: 3483,
		frequency: 18.49,
		lemma: "雲"
	},
	{
		rank: 3484,
		frequency: 18.48,
		lemma: "税込"
	},
	{
		rank: 3485,
		frequency: 18.48,
		lemma: "油"
	},
	{
		rank: 3486,
		frequency: 18.48,
		lemma: "アプローチ"
	},
	{
		rank: 3487,
		frequency: 18.48,
		lemma: "濃い"
	},
	{
		rank: 3488,
		frequency: 18.48,
		lemma: "ないし"
	},
	{
		rank: 3489,
		frequency: 18.48,
		lemma: "あくまでも"
	},
	{
		rank: 3490,
		frequency: 18.47,
		lemma: "当てる"
	},
	{
		rank: 3491,
		frequency: 18.47,
		lemma: "ワールド"
	},
	{
		rank: 3492,
		frequency: 18.47,
		lemma: "お父さん"
	},
	{
		rank: 3493,
		frequency: 18.45,
		lemma: "小林"
	},
	{
		rank: 3494,
		frequency: 18.43,
		lemma: "デビュー"
	},
	{
		rank: 3495,
		frequency: 18.43,
		lemma: "紛争"
	},
	{
		rank: 3496,
		frequency: 18.43,
		lemma: "ステップ"
	},
	{
		rank: 3497,
		frequency: 18.42,
		lemma: "決意"
	},
	{
		rank: 3498,
		frequency: 18.41,
		lemma: "オン"
	},
	{
		rank: 3499,
		frequency: 18.41,
		lemma: "一杯"
	},
	{
		rank: 3500,
		frequency: 18.4,
		lemma: "移民"
	},
	{
		rank: 3501,
		frequency: 18.4,
		lemma: "ロード"
	},
	{
		rank: 3502,
		frequency: 18.4,
		lemma: "プロフィール"
	},
	{
		rank: 3503,
		frequency: 18.4,
		lemma: "ローマ"
	},
	{
		rank: 3504,
		frequency: 18.39,
		lemma: "毎週"
	},
	{
		rank: 3505,
		frequency: 18.39,
		lemma: "ダンス"
	},
	{
		rank: 3506,
		frequency: 18.36,
		lemma: "伊藤"
	},
	{
		rank: 3507,
		frequency: 18.35,
		lemma: "階段"
	},
	{
		rank: 3508,
		frequency: 18.35,
		lemma: "損"
	},
	{
		rank: 3509,
		frequency: 18.35,
		lemma: "施策"
	},
	{
		rank: 3510,
		frequency: 18.34,
		lemma: "被"
	},
	{
		rank: 3511,
		frequency: 18.34,
		lemma: "男子"
	},
	{
		rank: 3512,
		frequency: 18.34,
		lemma: "渋谷"
	},
	{
		rank: 3513,
		frequency: 18.34,
		lemma: "育児"
	},
	{
		rank: 3514,
		frequency: 18.33,
		lemma: "学部"
	},
	{
		rank: 3515,
		frequency: 18.33,
		lemma: "ボク"
	},
	{
		rank: 3516,
		frequency: 18.33,
		lemma: "懸念"
	},
	{
		rank: 3517,
		frequency: 18.32,
		lemma: "買収"
	},
	{
		rank: 3518,
		frequency: 18.31,
		lemma: "不幸"
	},
	{
		rank: 3519,
		frequency: 18.3,
		lemma: "知恵"
	},
	{
		rank: 3520,
		frequency: 18.3,
		lemma: "沿う"
	},
	{
		rank: 3521,
		frequency: 18.3,
		lemma: "冷たい"
	},
	{
		rank: 3522,
		frequency: 18.29,
		lemma: "快適"
	},
	{
		rank: 3523,
		frequency: 18.28,
		lemma: "柱"
	},
	{
		rank: 3524,
		frequency: 18.28,
		lemma: "ファッション"
	},
	{
		rank: 3525,
		frequency: 18.28,
		lemma: "パパ"
	},
	{
		rank: 3526,
		frequency: 18.27,
		lemma: "苦しむ"
	},
	{
		rank: 3527,
		frequency: 18.26,
		lemma: "軸"
	},
	{
		rank: 3528,
		frequency: 18.26,
		lemma: "畑"
	},
	{
		rank: 3529,
		frequency: 18.25,
		lemma: "行事"
	},
	{
		rank: 3530,
		frequency: 18.24,
		lemma: "金曜日"
	},
	{
		rank: 3531,
		frequency: 18.24,
		lemma: "うーん"
	},
	{
		rank: 3532,
		frequency: 18.23,
		lemma: "サイン"
	},
	{
		rank: 3533,
		frequency: 18.23,
		lemma: "考察"
	},
	{
		rank: 3534,
		frequency: 18.21,
		lemma: "リズム"
	},
	{
		rank: 3535,
		frequency: 18.2,
		lemma: "成り立つ"
	},
	{
		rank: 3536,
		frequency: 18.19,
		lemma: "ドメイン"
	},
	{
		rank: 3537,
		frequency: 18.18,
		lemma: "体調"
	},
	{
		rank: 3538,
		frequency: 18.17,
		lemma: "手数料"
	},
	{
		rank: 3539,
		frequency: 18.16,
		lemma: "例外"
	},
	{
		rank: 3540,
		frequency: 18.16,
		lemma: "兵器"
	},
	{
		rank: 3541,
		frequency: 18.15,
		lemma: "眼"
	},
	{
		rank: 3542,
		frequency: 18.15,
		lemma: "解る"
	},
	{
		rank: 3543,
		frequency: 18.14,
		lemma: "中止"
	},
	{
		rank: 3544,
		frequency: 18.14,
		lemma: "債権"
	},
	{
		rank: 3545,
		frequency: 18.13,
		lemma: "主婦"
	},
	{
		rank: 3546,
		frequency: 18.13,
		lemma: "証"
	},
	{
		rank: 3547,
		frequency: 18.12,
		lemma: "賠償"
	},
	{
		rank: 3548,
		frequency: 18.11,
		lemma: "融資"
	},
	{
		rank: 3549,
		frequency: 18.11,
		lemma: "カップ"
	},
	{
		rank: 3550,
		frequency: 18.1,
		lemma: "奥さん"
	},
	{
		rank: 3551,
		frequency: 18.09,
		lemma: "暖かい"
	},
	{
		rank: 3552,
		frequency: 18.09,
		lemma: "しょ"
	},
	{
		rank: 3553,
		frequency: 18.08,
		lemma: "理念"
	},
	{
		rank: 3554,
		frequency: 18.08,
		lemma: "発射"
	},
	{
		rank: 3555,
		frequency: 18.08,
		lemma: "‐"
	},
	{
		rank: 3556,
		frequency: 18.07,
		lemma: "公正"
	},
	{
		rank: 3557,
		frequency: 18.07,
		lemma: "マネジメント"
	},
	{
		rank: 3558,
		frequency: 18.07,
		lemma: "取り入れる"
	},
	{
		rank: 3559,
		frequency: 18.07,
		lemma: "給料"
	},
	{
		rank: 3560,
		frequency: 18.05,
		lemma: "マイル"
	},
	{
		rank: 3561,
		frequency: 18.05,
		lemma: "言い方"
	},
	{
		rank: 3562,
		frequency: 18.05,
		lemma: "繋がる"
	},
	{
		rank: 3563,
		frequency: 18.05,
		lemma: "ほんと"
	},
	{
		rank: 3564,
		frequency: 18.03,
		lemma: "前日"
	},
	{
		rank: 3565,
		frequency: 18.03,
		lemma: "洗濯"
	},
	{
		rank: 3566,
		frequency: 18.02,
		lemma: "暇"
	},
	{
		rank: 3567,
		frequency: 18,
		lemma: "すねる"
	},
	{
		rank: 3568,
		frequency: 17.99,
		lemma: "アイテム"
	},
	{
		rank: 3569,
		frequency: 17.99,
		lemma: "疑う"
	},
	{
		rank: 3570,
		frequency: 17.98,
		lemma: "商売"
	},
	{
		rank: 3571,
		frequency: 17.98,
		lemma: "グローバル"
	},
	{
		rank: 3572,
		frequency: 17.96,
		lemma: "恐らく"
	},
	{
		rank: 3573,
		frequency: 17.96,
		lemma: "科目"
	},
	{
		rank: 3574,
		frequency: 17.96,
		lemma: "連"
	},
	{
		rank: 3575,
		frequency: 17.96,
		lemma: "短期"
	},
	{
		rank: 3576,
		frequency: 17.95,
		lemma: "特性"
	},
	{
		rank: 3577,
		frequency: 17.95,
		lemma: "復帰"
	},
	{
		rank: 3578,
		frequency: 17.94,
		lemma: "付近"
	},
	{
		rank: 3579,
		frequency: 17.93,
		lemma: "廃棄"
	},
	{
		rank: 3580,
		frequency: 17.92,
		lemma: "門"
	},
	{
		rank: 3581,
		frequency: 17.92,
		lemma: "素人"
	},
	{
		rank: 3582,
		frequency: 17.91,
		lemma: "犯人"
	},
	{
		rank: 3583,
		frequency: 17.9,
		lemma: "盤"
	},
	{
		rank: 3584,
		frequency: 17.9,
		lemma: "北京"
	},
	{
		rank: 3585,
		frequency: 17.9,
		lemma: "永遠"
	},
	{
		rank: 3586,
		frequency: 17.89,
		lemma: "まち"
	},
	{
		rank: 3587,
		frequency: 17.88,
		lemma: "ブーム"
	},
	{
		rank: 3588,
		frequency: 17.88,
		lemma: "念"
	},
	{
		rank: 3589,
		frequency: 17.88,
		lemma: "尊重"
	},
	{
		rank: 3590,
		frequency: 17.87,
		lemma: "古代"
	},
	{
		rank: 3591,
		frequency: 17.87,
		lemma: "ブルー"
	},
	{
		rank: 3592,
		frequency: 17.87,
		lemma: "帝国"
	},
	{
		rank: 3593,
		frequency: 17.86,
		lemma: "冒頭"
	},
	{
		rank: 3594,
		frequency: 17.83,
		lemma: "マスター"
	},
	{
		rank: 3595,
		frequency: 17.82,
		lemma: "郵政"
	},
	{
		rank: 3596,
		frequency: 17.82,
		lemma: "体重"
	},
	{
		rank: 3597,
		frequency: 17.8,
		lemma: "随分"
	},
	{
		rank: 3598,
		frequency: 17.79,
		lemma: "本件"
	},
	{
		rank: 3599,
		frequency: 17.78,
		lemma: "有"
	},
	{
		rank: 3600,
		frequency: 17.78,
		lemma: "通貨"
	},
	{
		rank: 3601,
		frequency: 17.77,
		lemma: "木村"
	},
	{
		rank: 3602,
		frequency: 17.75,
		lemma: "動画"
	},
	{
		rank: 3603,
		frequency: 17.74,
		lemma: "バブル"
	},
	{
		rank: 3604,
		frequency: 17.73,
		lemma: "龍"
	},
	{
		rank: 3605,
		frequency: 17.72,
		lemma: "ルート"
	},
	{
		rank: 3606,
		frequency: 17.71,
		lemma: "上海"
	},
	{
		rank: 3607,
		frequency: 17.68,
		lemma: "財"
	},
	{
		rank: 3608,
		frequency: 17.68,
		lemma: "人工"
	},
	{
		rank: 3609,
		frequency: 17.67,
		lemma: "気温"
	},
	{
		rank: 3610,
		frequency: 17.67,
		lemma: "適正"
	},
	{
		rank: 3611,
		frequency: 17.66,
		lemma: "記す"
	},
	{
		rank: 3612,
		frequency: 17.66,
		lemma: "─"
	},
	{
		rank: 3613,
		frequency: 17.65,
		lemma: "新潟"
	},
	{
		rank: 3614,
		frequency: 17.64,
		lemma: "エン"
	},
	{
		rank: 3615,
		frequency: 17.63,
		lemma: "ばる"
	},
	{
		rank: 3616,
		frequency: 17.62,
		lemma: "抗議"
	},
	{
		rank: 3617,
		frequency: 17.62,
		lemma: "パフォーマンス"
	},
	{
		rank: 3618,
		frequency: 17.61,
		lemma: "広場"
	},
	{
		rank: 3619,
		frequency: 17.61,
		lemma: "台風"
	},
	{
		rank: 3620,
		frequency: 17.59,
		lemma: "徐々に"
	},
	{
		rank: 3621,
		frequency: 17.58,
		lemma: "受付"
	},
	{
		rank: 3622,
		frequency: 17.58,
		lemma: "祭り"
	},
	{
		rank: 3623,
		frequency: 17.57,
		lemma: "苦笑"
	},
	{
		rank: 3624,
		frequency: 17.55,
		lemma: "ショッピング"
	},
	{
		rank: 3625,
		frequency: 17.54,
		lemma: "ダム"
	},
	{
		rank: 3626,
		frequency: 17.54,
		lemma: "生涯"
	},
	{
		rank: 3627,
		frequency: 17.53,
		lemma: "しま"
	},
	{
		rank: 3628,
		frequency: 17.53,
		lemma: "妙"
	},
	{
		rank: 3629,
		frequency: 17.53,
		lemma: "自覚"
	},
	{
		rank: 3630,
		frequency: 17.53,
		lemma: "寄る"
	},
	{
		rank: 3631,
		frequency: 17.51,
		lemma: "比率"
	},
	{
		rank: 3632,
		frequency: 17.5,
		lemma: "拉致"
	},
	{
		rank: 3633,
		frequency: 17.49,
		lemma: "上映"
	},
	{
		rank: 3634,
		frequency: 17.49,
		lemma: "しゃべる"
	},
	{
		rank: 3635,
		frequency: 17.47,
		lemma: "ジャズ"
	},
	{
		rank: 3636,
		frequency: 17.47,
		lemma: "仏"
	},
	{
		rank: 3637,
		frequency: 17.46,
		lemma: "飾る"
	},
	{
		rank: 3638,
		frequency: 17.45,
		lemma: "再度"
	},
	{
		rank: 3639,
		frequency: 17.42,
		lemma: "観測"
	},
	{
		rank: 3640,
		frequency: 17.42,
		lemma: "誤る"
	},
	{
		rank: 3641,
		frequency: 17.41,
		lemma: "ミニ"
	},
	{
		rank: 3642,
		frequency: 17.41,
		lemma: "兄"
	},
	{
		rank: 3643,
		frequency: 17.41,
		lemma: "純粋"
	},
	{
		rank: 3644,
		frequency: 17.4,
		lemma: "拍手"
	},
	{
		rank: 3645,
		frequency: 17.39,
		lemma: "要件"
	},
	{
		rank: 3646,
		frequency: 17.39,
		lemma: "赤ちゃん"
	},
	{
		rank: 3647,
		frequency: 17.39,
		lemma: "札幌"
	},
	{
		rank: 3648,
		frequency: 17.39,
		lemma: "どころ"
	},
	{
		rank: 3649,
		frequency: 17.36,
		lemma: "数値"
	},
	{
		rank: 3650,
		frequency: 17.36,
		lemma: "基"
	},
	{
		rank: 3651,
		frequency: 17.35,
		lemma: "鼻"
	},
	{
		rank: 3652,
		frequency: 17.35,
		lemma: "保守"
	},
	{
		rank: 3653,
		frequency: 17.35,
		lemma: "どおり"
	},
	{
		rank: 3654,
		frequency: 17.35,
		lemma: "欠く"
	},
	{
		rank: 3655,
		frequency: 17.34,
		lemma: "ヨ"
	},
	{
		rank: 3656,
		frequency: 17.34,
		lemma: "おもう"
	},
	{
		rank: 3657,
		frequency: 17.33,
		lemma: "覚悟"
	},
	{
		rank: 3658,
		frequency: 17.32,
		lemma: "にわたって"
	},
	{
		rank: 3659,
		frequency: 17.3,
		lemma: "生き方"
	},
	{
		rank: 3660,
		frequency: 17.29,
		lemma: "務める"
	},
	{
		rank: 3661,
		frequency: 17.29,
		lemma: "お腹"
	},
	{
		rank: 3662,
		frequency: 17.29,
		lemma: "財源"
	},
	{
		rank: 3663,
		frequency: 17.28,
		lemma: "吉田"
	},
	{
		rank: 3664,
		frequency: 17.28,
		lemma: "たまる"
	},
	{
		rank: 3665,
		frequency: 17.28,
		lemma: "オーナー"
	},
	{
		rank: 3666,
		frequency: 17.25,
		lemma: "駄目"
	},
	{
		rank: 3667,
		frequency: 17.25,
		lemma: "そ"
	},
	{
		rank: 3668,
		frequency: 17.23,
		lemma: "経緯"
	},
	{
		rank: 3669,
		frequency: 17.23,
		lemma: "支出"
	},
	{
		rank: 3670,
		frequency: 17.23,
		lemma: "后"
	},
	{
		rank: 3671,
		frequency: 17.22,
		lemma: "やさしい"
	},
	{
		rank: 3672,
		frequency: 17.22,
		lemma: "倒れる"
	},
	{
		rank: 3673,
		frequency: 17.22,
		lemma: "疲れ"
	},
	{
		rank: 3674,
		frequency: 17.21,
		lemma: "まさか"
	},
	{
		rank: 3675,
		frequency: 17.2,
		lemma: "鬼"
	},
	{
		rank: 3676,
		frequency: 17.2,
		lemma: "べ"
	},
	{
		rank: 3677,
		frequency: 17.19,
		lemma: "Ｄ"
	},
	{
		rank: 3678,
		frequency: 17.19,
		lemma: "さえる"
	},
	{
		rank: 3679,
		frequency: 17.19,
		lemma: "対話"
	},
	{
		rank: 3680,
		frequency: 17.19,
		lemma: "ジャ"
	},
	{
		rank: 3681,
		frequency: 17.18,
		lemma: "入り口"
	},
	{
		rank: 3682,
		frequency: 17.17,
		lemma: "吸う"
	},
	{
		rank: 3683,
		frequency: 17.17,
		lemma: "Ｔ"
	},
	{
		rank: 3684,
		frequency: 17.16,
		lemma: "長年"
	},
	{
		rank: 3685,
		frequency: 17.15,
		lemma: "毎回"
	},
	{
		rank: 3686,
		frequency: 17.15,
		lemma: "返信"
	},
	{
		rank: 3687,
		frequency: 17.15,
		lemma: "会談"
	},
	{
		rank: 3688,
		frequency: 17.15,
		lemma: "ソニー"
	},
	{
		rank: 3689,
		frequency: 17.15,
		lemma: "信号"
	},
	{
		rank: 3690,
		frequency: 17.14,
		lemma: "借金"
	},
	{
		rank: 3691,
		frequency: 17.14,
		lemma: "監査"
	},
	{
		rank: 3692,
		frequency: 17.12,
		lemma: "タバコ"
	},
	{
		rank: 3693,
		frequency: 17.12,
		lemma: "溢れる"
	},
	{
		rank: 3694,
		frequency: 17.11,
		lemma: "選択肢"
	},
	{
		rank: 3695,
		frequency: 17.11,
		lemma: "囲む"
	},
	{
		rank: 3696,
		frequency: 17.11,
		lemma: "広報"
	},
	{
		rank: 3697,
		frequency: 17.1,
		lemma: "ティー"
	},
	{
		rank: 3698,
		frequency: 17.1,
		lemma: "エントリー"
	},
	{
		rank: 3699,
		frequency: 17.1,
		lemma: "付き合う"
	},
	{
		rank: 3700,
		frequency: 17.09,
		lemma: "−−"
	},
	{
		rank: 3701,
		frequency: 17.09,
		lemma: "過剰"
	},
	{
		rank: 3702,
		frequency: 17.09,
		lemma: "おめでとう"
	},
	{
		rank: 3703,
		frequency: 17.08,
		lemma: "谷"
	},
	{
		rank: 3704,
		frequency: 17.08,
		lemma: "極端"
	},
	{
		rank: 3705,
		frequency: 17.08,
		lemma: "商業"
	},
	{
		rank: 3706,
		frequency: 17.07,
		lemma: "イラン"
	},
	{
		rank: 3707,
		frequency: 17.07,
		lemma: "気味"
	},
	{
		rank: 3708,
		frequency: 17.07,
		lemma: "たっぷり"
	},
	{
		rank: 3709,
		frequency: 17.07,
		lemma: "大半"
	},
	{
		rank: 3710,
		frequency: 17.06,
		lemma: "社内"
	},
	{
		rank: 3711,
		frequency: 17.05,
		lemma: "旦那"
	},
	{
		rank: 3712,
		frequency: 17.04,
		lemma: "調達"
	},
	{
		rank: 3713,
		frequency: 17.04,
		lemma: "辞典"
	},
	{
		rank: 3714,
		frequency: 17.02,
		lemma: "担う"
	},
	{
		rank: 3715,
		frequency: 17.01,
		lemma: "正義"
	},
	{
		rank: 3716,
		frequency: 17,
		lemma: "ペット"
	},
	{
		rank: 3717,
		frequency: 16.99,
		lemma: "完璧"
	},
	{
		rank: 3718,
		frequency: 16.99,
		lemma: "世帯"
	},
	{
		rank: 3719,
		frequency: 16.98,
		lemma: "襲う"
	},
	{
		rank: 3720,
		frequency: 16.98,
		lemma: "そうそう"
	},
	{
		rank: 3721,
		frequency: 16.98,
		lemma: "審判"
	},
	{
		rank: 3722,
		frequency: 16.97,
		lemma: "くらう"
	},
	{
		rank: 3723,
		frequency: 16.97,
		lemma: "大戦"
	},
	{
		rank: 3724,
		frequency: 16.97,
		lemma: "間違える"
	},
	{
		rank: 3725,
		frequency: 16.96,
		lemma: "教材"
	},
	{
		rank: 3726,
		frequency: 16.95,
		lemma: "阪神"
	},
	{
		rank: 3727,
		frequency: 16.95,
		lemma: "後に"
	},
	{
		rank: 3728,
		frequency: 16.94,
		lemma: "上る"
	},
	{
		rank: 3729,
		frequency: 16.94,
		lemma: "外務省"
	},
	{
		rank: 3730,
		frequency: 16.94,
		lemma: "スキー"
	},
	{
		rank: 3731,
		frequency: 16.92,
		lemma: "ヒト"
	},
	{
		rank: 3732,
		frequency: 16.91,
		lemma: "たん"
	},
	{
		rank: 3733,
		frequency: 16.9,
		lemma: "制定"
	},
	{
		rank: 3734,
		frequency: 16.9,
		lemma: "才能"
	},
	{
		rank: 3735,
		frequency: 16.88,
		lemma: "発明"
	},
	{
		rank: 3736,
		frequency: 16.87,
		lemma: "そのうち"
	},
	{
		rank: 3737,
		frequency: 16.87,
		lemma: "あふれる"
	},
	{
		rank: 3738,
		frequency: 16.86,
		lemma: "ノー"
	},
	{
		rank: 3739,
		frequency: 16.86,
		lemma: "幸福"
	},
	{
		rank: 3740,
		frequency: 16.86,
		lemma: "通知"
	},
	{
		rank: 3741,
		frequency: 16.85,
		lemma: "汚染"
	},
	{
		rank: 3742,
		frequency: 16.84,
		lemma: "クリア"
	},
	{
		rank: 3743,
		frequency: 16.84,
		lemma: "体力"
	},
	{
		rank: 3744,
		frequency: 16.83,
		lemma: "見直す"
	},
	{
		rank: 3745,
		frequency: 16.82,
		lemma: "邪魔"
	},
	{
		rank: 3746,
		frequency: 16.81,
		lemma: "冷静"
	},
	{
		rank: 3747,
		frequency: 16.81,
		lemma: "込む"
	},
	{
		rank: 3748,
		frequency: 16.81,
		lemma: "血液"
	},
	{
		rank: 3749,
		frequency: 16.8,
		lemma: "サラリーマン"
	},
	{
		rank: 3750,
		frequency: 16.79,
		lemma: "地上"
	},
	{
		rank: 3751,
		frequency: 16.78,
		lemma: "まわり"
	},
	{
		rank: 3752,
		frequency: 16.78,
		lemma: "Ｆ"
	},
	{
		rank: 3753,
		frequency: 16.76,
		lemma: "通勤"
	},
	{
		rank: 3754,
		frequency: 16.76,
		lemma: "反論"
	},
	{
		rank: 3755,
		frequency: 16.75,
		lemma: "キャンプ"
	},
	{
		rank: 3756,
		frequency: 16.75,
		lemma: "あり"
	},
	{
		rank: 3757,
		frequency: 16.73,
		lemma: "青い"
	},
	{
		rank: 3758,
		frequency: 16.73,
		lemma: "味わう"
	},
	{
		rank: 3759,
		frequency: 16.71,
		lemma: "コンビニ"
	},
	{
		rank: 3760,
		frequency: 16.71,
		lemma: "幅広い"
	},
	{
		rank: 3761,
		frequency: 16.71,
		lemma: "オリンピック"
	},
	{
		rank: 3762,
		frequency: 16.7,
		lemma: "正常"
	},
	{
		rank: 3763,
		frequency: 16.7,
		lemma: "人格"
	},
	{
		rank: 3764,
		frequency: 16.69,
		lemma: "独特"
	},
	{
		rank: 3765,
		frequency: 16.69,
		lemma: "意欲"
	},
	{
		rank: 3766,
		frequency: 16.68,
		lemma: "パーティ"
	},
	{
		rank: 3767,
		frequency: 16.67,
		lemma: "開放"
	},
	{
		rank: 3768,
		frequency: 16.67,
		lemma: "ＴＶ"
	},
	{
		rank: 3769,
		frequency: 16.67,
		lemma: "中国人"
	},
	{
		rank: 3770,
		frequency: 16.66,
		lemma: "面積"
	},
	{
		rank: 3771,
		frequency: 16.66,
		lemma: "熱心"
	},
	{
		rank: 3772,
		frequency: 16.66,
		lemma: "さす"
	},
	{
		rank: 3773,
		frequency: 16.64,
		lemma: "だらけ"
	},
	{
		rank: 3774,
		frequency: 16.63,
		lemma: "オプション"
	},
	{
		rank: 3775,
		frequency: 16.62,
		lemma: "サーバ"
	},
	{
		rank: 3776,
		frequency: 16.62,
		lemma: "原子力"
	},
	{
		rank: 3777,
		frequency: 16.62,
		lemma: "分離"
	},
	{
		rank: 3778,
		frequency: 16.62,
		lemma: "段"
	},
	{
		rank: 3779,
		frequency: 16.62,
		lemma: "呼吸"
	},
	{
		rank: 3780,
		frequency: 16.61,
		lemma: "日程"
	},
	{
		rank: 3781,
		frequency: 16.61,
		lemma: "移す"
	},
	{
		rank: 3782,
		frequency: 16.61,
		lemma: "最悪"
	},
	{
		rank: 3783,
		frequency: 16.6,
		lemma: "友"
	},
	{
		rank: 3784,
		frequency: 16.6,
		lemma: "さあ"
	},
	{
		rank: 3785,
		frequency: 16.58,
		lemma: "演技"
	},
	{
		rank: 3786,
		frequency: 16.58,
		lemma: "ポール"
	},
	{
		rank: 3787,
		frequency: 16.57,
		lemma: "好む"
	},
	{
		rank: 3788,
		frequency: 16.56,
		lemma: "積む"
	},
	{
		rank: 3789,
		frequency: 16.55,
		lemma: "放置"
	},
	{
		rank: 3790,
		frequency: 16.55,
		lemma: "我"
	},
	{
		rank: 3791,
		frequency: 16.54,
		lemma: "やっぱ"
	},
	{
		rank: 3792,
		frequency: 16.54,
		lemma: "イヤ"
	},
	{
		rank: 3793,
		frequency: 16.53,
		lemma: "すね"
	},
	{
		rank: 3794,
		frequency: 16.53,
		lemma: "保健"
	},
	{
		rank: 3795,
		frequency: 16.52,
		lemma: "そりゃ"
	},
	{
		rank: 3796,
		frequency: 16.52,
		lemma: "改良"
	},
	{
		rank: 3797,
		frequency: 16.52,
		lemma: "執筆"
	},
	{
		rank: 3798,
		frequency: 16.52,
		lemma: "っす"
	},
	{
		rank: 3799,
		frequency: 16.51,
		lemma: "集会"
	},
	{
		rank: 3800,
		frequency: 16.5,
		lemma: "なんとも"
	},
	{
		rank: 3801,
		frequency: 16.5,
		lemma: "店員"
	},
	{
		rank: 3802,
		frequency: 16.49,
		lemma: "気軽"
	},
	{
		rank: 3803,
		frequency: 16.49,
		lemma: "つらい"
	},
	{
		rank: 3804,
		frequency: 16.49,
		lemma: "毎月"
	},
	{
		rank: 3805,
		frequency: 16.49,
		lemma: "男の子"
	},
	{
		rank: 3806,
		frequency: 16.49,
		lemma: "分かれる"
	},
	{
		rank: 3807,
		frequency: 16.48,
		lemma: "開示"
	},
	{
		rank: 3808,
		frequency: 16.48,
		lemma: "頂ける"
	},
	{
		rank: 3809,
		frequency: 16.48,
		lemma: "アクション"
	},
	{
		rank: 3810,
		frequency: 16.47,
		lemma: "診療"
	},
	{
		rank: 3811,
		frequency: 16.47,
		lemma: "たしかに"
	},
	{
		rank: 3812,
		frequency: 16.46,
		lemma: "有する"
	},
	{
		rank: 3813,
		frequency: 16.46,
		lemma: "悪化"
	},
	{
		rank: 3814,
		frequency: 16.45,
		lemma: "両者"
	},
	{
		rank: 3815,
		frequency: 16.45,
		lemma: "フィルム"
	},
	{
		rank: 3816,
		frequency: 16.45,
		lemma: "見れる"
	},
	{
		rank: 3817,
		frequency: 16.45,
		lemma: "拡張"
	},
	{
		rank: 3818,
		frequency: 16.45,
		lemma: "ピン"
	},
	{
		rank: 3819,
		frequency: 16.45,
		lemma: "みな"
	},
	{
		rank: 3820,
		frequency: 16.45,
		lemma: "在住"
	},
	{
		rank: 3821,
		frequency: 16.44,
		lemma: "幼稚園"
	},
	{
		rank: 3822,
		frequency: 16.44,
		lemma: "選"
	},
	{
		rank: 3823,
		frequency: 16.44,
		lemma: "目次"
	},
	{
		rank: 3824,
		frequency: 16.43,
		lemma: "済み"
	},
	{
		rank: 3825,
		frequency: 16.43,
		lemma: "出せる"
	},
	{
		rank: 3826,
		frequency: 16.43,
		lemma: "看板"
	},
	{
		rank: 3827,
		frequency: 16.41,
		lemma: "仏教"
	},
	{
		rank: 3828,
		frequency: 16.41,
		lemma: "引退"
	},
	{
		rank: 3829,
		frequency: 16.41,
		lemma: "セックス"
	},
	{
		rank: 3830,
		frequency: 16.41,
		lemma: "名称"
	},
	{
		rank: 3831,
		frequency: 16.4,
		lemma: "上位"
	},
	{
		rank: 3832,
		frequency: 16.4,
		lemma: "姉"
	},
	{
		rank: 3833,
		frequency: 16.39,
		lemma: "路"
	},
	{
		rank: 3834,
		frequency: 16.39,
		lemma: "無線"
	},
	{
		rank: 3835,
		frequency: 16.39,
		lemma: "近年"
	},
	{
		rank: 3836,
		frequency: 16.36,
		lemma: "山田"
	},
	{
		rank: 3837,
		frequency: 16.35,
		lemma: "幾つ"
	},
	{
		rank: 3838,
		frequency: 16.34,
		lemma: "文献"
	},
	{
		rank: 3839,
		frequency: 16.33,
		lemma: "空く"
	},
	{
		rank: 3840,
		frequency: 16.32,
		lemma: "引き続き"
	},
	{
		rank: 3841,
		frequency: 16.31,
		lemma: "不要"
	},
	{
		rank: 3842,
		frequency: 16.3,
		lemma: "果たして"
	},
	{
		rank: 3843,
		frequency: 16.28,
		lemma: "就任"
	},
	{
		rank: 3844,
		frequency: 16.28,
		lemma: "こむ"
	},
	{
		rank: 3845,
		frequency: 16.28,
		lemma: "椅子"
	},
	{
		rank: 3846,
		frequency: 16.28,
		lemma: "かえる"
	},
	{
		rank: 3847,
		frequency: 16.27,
		lemma: "いつか"
	},
	{
		rank: 3848,
		frequency: 16.27,
		lemma: "ゆえ"
	},
	{
		rank: 3849,
		frequency: 16.27,
		lemma: "上回る"
	},
	{
		rank: 3850,
		frequency: 16.26,
		lemma: "Ｈ"
	},
	{
		rank: 3851,
		frequency: 16.26,
		lemma: "有利"
	},
	{
		rank: 3852,
		frequency: 16.25,
		lemma: "出現"
	},
	{
		rank: 3853,
		frequency: 16.25,
		lemma: "おじさん"
	},
	{
		rank: 3854,
		frequency: 16.25,
		lemma: "感心"
	},
	{
		rank: 3855,
		frequency: 16.24,
		lemma: "連中"
	},
	{
		rank: 3856,
		frequency: 16.23,
		lemma: "庁"
	},
	{
		rank: 3857,
		frequency: 16.22,
		lemma: "心から"
	},
	{
		rank: 3858,
		frequency: 16.22,
		lemma: "いたる"
	},
	{
		rank: 3859,
		frequency: 16.22,
		lemma: "魔法"
	},
	{
		rank: 3860,
		frequency: 16.2,
		lemma: "網"
	},
	{
		rank: 3861,
		frequency: 16.2,
		lemma: "出産"
	},
	{
		rank: 3862,
		frequency: 16.19,
		lemma: "家具"
	},
	{
		rank: 3863,
		frequency: 16.19,
		lemma: "課税"
	},
	{
		rank: 3864,
		frequency: 16.18,
		lemma: "関東"
	},
	{
		rank: 3865,
		frequency: 16.18,
		lemma: "こなす"
	},
	{
		rank: 3866,
		frequency: 16.17,
		lemma: "しよう"
	},
	{
		rank: 3867,
		frequency: 16.16,
		lemma: "中田"
	},
	{
		rank: 3868,
		frequency: 16.15,
		lemma: "Ｗ杯"
	},
	{
		rank: 3869,
		frequency: 16.15,
		lemma: "イスラム"
	},
	{
		rank: 3870,
		frequency: 16.14,
		lemma: "業績"
	},
	{
		rank: 3871,
		frequency: 16.14,
		lemma: "スイス"
	},
	{
		rank: 3872,
		frequency: 16.14,
		lemma: "車両"
	},
	{
		rank: 3873,
		frequency: 16.1,
		lemma: "不可欠"
	},
	{
		rank: 3874,
		frequency: 16.1,
		lemma: "関与"
	},
	{
		rank: 3875,
		frequency: 16.09,
		lemma: "月曜日"
	},
	{
		rank: 3876,
		frequency: 16.09,
		lemma: "神奈川"
	},
	{
		rank: 3877,
		frequency: 16.08,
		lemma: "得"
	},
	{
		rank: 3878,
		frequency: 16.07,
		lemma: "プレイヤー"
	},
	{
		rank: 3879,
		frequency: 16.07,
		lemma: "中学生"
	},
	{
		rank: 3880,
		frequency: 16.06,
		lemma: "筋肉"
	},
	{
		rank: 3881,
		frequency: 16.06,
		lemma: "アパート"
	},
	{
		rank: 3882,
		frequency: 16.05,
		lemma: "サイ"
	},
	{
		rank: 3883,
		frequency: 16.05,
		lemma: "踏む"
	},
	{
		rank: 3884,
		frequency: 16.05,
		lemma: "西洋"
	},
	{
		rank: 3885,
		frequency: 16.03,
		lemma: "傷"
	},
	{
		rank: 3886,
		frequency: 16.03,
		lemma: "外す"
	},
	{
		rank: 3887,
		frequency: 16.02,
		lemma: "まして"
	},
	{
		rank: 3888,
		frequency: 16.02,
		lemma: "九州"
	},
	{
		rank: 3889,
		frequency: 16.02,
		lemma: "霊"
	},
	{
		rank: 3890,
		frequency: 16.02,
		lemma: "同時"
	},
	{
		rank: 3891,
		frequency: 16.02,
		lemma: "及ぼす"
	},
	{
		rank: 3892,
		frequency: 16,
		lemma: "スタジオ"
	},
	{
		rank: 3893,
		frequency: 16,
		lemma: "思わず"
	},
	{
		rank: 3894,
		frequency: 16,
		lemma: "真面目"
	},
	{
		rank: 3895,
		frequency: 16,
		lemma: "諦める"
	},
	{
		rank: 3896,
		frequency: 16,
		lemma: "じゃん"
	},
	{
		rank: 3897,
		frequency: 16,
		lemma: "ブロック"
	},
	{
		rank: 3898,
		frequency: 16,
		lemma: "学科"
	},
	{
		rank: 3899,
		frequency: 15.97,
		lemma: "衛生"
	},
	{
		rank: 3900,
		frequency: 15.96,
		lemma: "渡辺"
	},
	{
		rank: 3901,
		frequency: 15.95,
		lemma: "中学校"
	},
	{
		rank: 3902,
		frequency: 15.94,
		lemma: "大勢"
	},
	{
		rank: 3903,
		frequency: 15.93,
		lemma: "ゲスト"
	},
	{
		rank: 3904,
		frequency: 15.92,
		lemma: "まとも"
	},
	{
		rank: 3905,
		frequency: 15.92,
		lemma: "債務"
	},
	{
		rank: 3906,
		frequency: 15.91,
		lemma: "断る"
	},
	{
		rank: 3907,
		frequency: 15.91,
		lemma: "同僚"
	},
	{
		rank: 3908,
		frequency: 15.9,
		lemma: "持てる"
	},
	{
		rank: 3909,
		frequency: 15.89,
		lemma: "コム"
	},
	{
		rank: 3910,
		frequency: 15.88,
		lemma: "包む"
	},
	{
		rank: 3911,
		frequency: 15.86,
		lemma: "バラ"
	},
	{
		rank: 3912,
		frequency: 15.86,
		lemma: "愛情"
	},
	{
		rank: 3913,
		frequency: 15.84,
		lemma: "洗う"
	},
	{
		rank: 3914,
		frequency: 15.84,
		lemma: "余計"
	},
	{
		rank: 3915,
		frequency: 15.83,
		lemma: "エピソード"
	},
	{
		rank: 3916,
		frequency: 15.83,
		lemma: "起動"
	},
	{
		rank: 3917,
		frequency: 15.82,
		lemma: "一見"
	},
	{
		rank: 3918,
		frequency: 15.82,
		lemma: "ワタ"
	},
	{
		rank: 3919,
		frequency: 15.81,
		lemma: "配る"
	},
	{
		rank: 3920,
		frequency: 15.81,
		lemma: "つかむ"
	},
	{
		rank: 3921,
		frequency: 15.8,
		lemma: "電源"
	},
	{
		rank: 3922,
		frequency: 15.8,
		lemma: "ひたすら"
	},
	{
		rank: 3923,
		frequency: 15.8,
		lemma: "覗く"
	},
	{
		rank: 3924,
		frequency: 15.8,
		lemma: "日銀"
	},
	{
		rank: 3925,
		frequency: 15.79,
		lemma: "疑い"
	},
	{
		rank: 3926,
		frequency: 15.78,
		lemma: "少数"
	},
	{
		rank: 3927,
		frequency: 15.78,
		lemma: "プレ"
	},
	{
		rank: 3928,
		frequency: 15.78,
		lemma: "署名"
	},
	{
		rank: 3929,
		frequency: 15.77,
		lemma: "アリ"
	},
	{
		rank: 3930,
		frequency: 15.77,
		lemma: "回避"
	},
	{
		rank: 3931,
		frequency: 15.76,
		lemma: "知り合い"
	},
	{
		rank: 3932,
		frequency: 15.76,
		lemma: "金持ち"
	},
	{
		rank: 3933,
		frequency: 15.75,
		lemma: "弁当"
	},
	{
		rank: 3934,
		frequency: 15.74,
		lemma: "センス"
	},
	{
		rank: 3935,
		frequency: 15.74,
		lemma: "ペース"
	},
	{
		rank: 3936,
		frequency: 15.74,
		lemma: "格好"
	},
	{
		rank: 3937,
		frequency: 15.74,
		lemma: "興奮"
	},
	{
		rank: 3938,
		frequency: 15.73,
		lemma: "平等"
	},
	{
		rank: 3939,
		frequency: 15.71,
		lemma: "欠ける"
	},
	{
		rank: 3940,
		frequency: 15.71,
		lemma: "パスワード"
	},
	{
		rank: 3941,
		frequency: 15.71,
		lemma: "ベンチャー"
	},
	{
		rank: 3942,
		frequency: 15.7,
		lemma: "ほんとに"
	},
	{
		rank: 3943,
		frequency: 15.7,
		lemma: "決断"
	},
	{
		rank: 3944,
		frequency: 15.7,
		lemma: "対抗"
	},
	{
		rank: 3945,
		frequency: 15.69,
		lemma: "球"
	},
	{
		rank: 3946,
		frequency: 15.69,
		lemma: "行使"
	},
	{
		rank: 3947,
		frequency: 15.68,
		lemma: "抑制"
	},
	{
		rank: 3948,
		frequency: 15.68,
		lemma: "インドネシア"
	},
	{
		rank: 3949,
		frequency: 15.67,
		lemma: "該当"
	},
	{
		rank: 3950,
		frequency: 15.67,
		lemma: "一連"
	},
	{
		rank: 3951,
		frequency: 15.67,
		lemma: "認知"
	},
	{
		rank: 3952,
		frequency: 15.65,
		lemma: "衛星"
	},
	{
		rank: 3953,
		frequency: 15.64,
		lemma: "要"
	},
	{
		rank: 3954,
		frequency: 15.64,
		lemma: "登る"
	},
	{
		rank: 3955,
		frequency: 15.63,
		lemma: "努める"
	},
	{
		rank: 3956,
		frequency: 15.63,
		lemma: "証人"
	},
	{
		rank: 3957,
		frequency: 15.61,
		lemma: "今や"
	},
	{
		rank: 3958,
		frequency: 15.61,
		lemma: "虫"
	},
	{
		rank: 3959,
		frequency: 15.6,
		lemma: "チャレンジ"
	},
	{
		rank: 3960,
		frequency: 15.6,
		lemma: "テープ"
	},
	{
		rank: 3961,
		frequency: 15.6,
		lemma: "夏休み"
	},
	{
		rank: 3962,
		frequency: 15.6,
		lemma: "通過"
	},
	{
		rank: 3963,
		frequency: 15.59,
		lemma: "他者"
	},
	{
		rank: 3964,
		frequency: 15.59,
		lemma: "平"
	},
	{
		rank: 3965,
		frequency: 15.59,
		lemma: "現金"
	},
	{
		rank: 3966,
		frequency: 15.58,
		lemma: "通う"
	},
	{
		rank: 3967,
		frequency: 15.58,
		lemma: "エッセイ"
	},
	{
		rank: 3968,
		frequency: 15.58,
		lemma: "経由"
	},
	{
		rank: 3969,
		frequency: 15.58,
		lemma: "パーティー"
	},
	{
		rank: 3970,
		frequency: 15.58,
		lemma: "レイ"
	},
	{
		rank: 3971,
		frequency: 15.57,
		lemma: "勝ち"
	},
	{
		rank: 3972,
		frequency: 15.57,
		lemma: "透明"
	},
	{
		rank: 3973,
		frequency: 15.56,
		lemma: "映る"
	},
	{
		rank: 3974,
		frequency: 15.56,
		lemma: "支部"
	},
	{
		rank: 3975,
		frequency: 15.54,
		lemma: "脅威"
	},
	{
		rank: 3976,
		frequency: 15.54,
		lemma: "つた"
	},
	{
		rank: 3977,
		frequency: 15.52,
		lemma: "にゃ"
	},
	{
		rank: 3978,
		frequency: 15.52,
		lemma: "デスク"
	},
	{
		rank: 3979,
		frequency: 15.52,
		lemma: "自社"
	},
	{
		rank: 3980,
		frequency: 15.52,
		lemma: "一層"
	},
	{
		rank: 3981,
		frequency: 15.52,
		lemma: "児"
	},
	{
		rank: 3982,
		frequency: 15.51,
		lemma: "親子"
	},
	{
		rank: 3983,
		frequency: 15.5,
		lemma: "期限"
	},
	{
		rank: 3984,
		frequency: 15.5,
		lemma: "新鮮"
	},
	{
		rank: 3985,
		frequency: 15.5,
		lemma: "農民"
	},
	{
		rank: 3986,
		frequency: 15.49,
		lemma: "違和感"
	},
	{
		rank: 3987,
		frequency: 15.48,
		lemma: "引っ張る"
	},
	{
		rank: 3988,
		frequency: 15.48,
		lemma: "輪"
	},
	{
		rank: 3989,
		frequency: 15.47,
		lemma: "やる気"
	},
	{
		rank: 3990,
		frequency: 15.47,
		lemma: "警告"
	},
	{
		rank: 3991,
		frequency: 15.47,
		lemma: "鉄"
	},
	{
		rank: 3992,
		frequency: 15.46,
		lemma: "宿"
	},
	{
		rank: 3993,
		frequency: 15.45,
		lemma: "ぶる"
	},
	{
		rank: 3994,
		frequency: 15.45,
		lemma: "応える"
	},
	{
		rank: 3995,
		frequency: 15.45,
		lemma: "地下鉄"
	},
	{
		rank: 3996,
		frequency: 15.44,
		lemma: "世論"
	},
	{
		rank: 3997,
		frequency: 15.44,
		lemma: "通訳"
	},
	{
		rank: 3998,
		frequency: 15.42,
		lemma: "意"
	},
	{
		rank: 3999,
		frequency: 15.4,
		lemma: "放つ"
	},
	{
		rank: 4000,
		frequency: 15.38,
		lemma: "パッケージ"
	},
	{
		rank: 4001,
		frequency: 15.38,
		lemma: "指数"
	},
	{
		rank: 4002,
		frequency: 15.38,
		lemma: "野"
	},
	{
		rank: 4003,
		frequency: 15.35,
		lemma: "ひく"
	},
	{
		rank: 4004,
		frequency: 15.35,
		lemma: "机"
	},
	{
		rank: 4005,
		frequency: 15.34,
		lemma: "了承"
	},
	{
		rank: 4006,
		frequency: 15.34,
		lemma: "お待ち"
	},
	{
		rank: 4007,
		frequency: 15.34,
		lemma: "吸収"
	},
	{
		rank: 4008,
		frequency: 15.34,
		lemma: "以後"
	},
	{
		rank: 4009,
		frequency: 15.33,
		lemma: "はかる"
	},
	{
		rank: 4010,
		frequency: 15.33,
		lemma: "柄"
	},
	{
		rank: 4011,
		frequency: 15.33,
		lemma: "数々"
	},
	{
		rank: 4012,
		frequency: 15.31,
		lemma: "巡る"
	},
	{
		rank: 4013,
		frequency: 15.31,
		lemma: "収穫"
	},
	{
		rank: 4014,
		frequency: 15.3,
		lemma: "プール"
	},
	{
		rank: 4015,
		frequency: 15.3,
		lemma: "嫌う"
	},
	{
		rank: 4016,
		frequency: 15.29,
		lemma: "自"
	},
	{
		rank: 4017,
		frequency: 15.28,
		lemma: "込める"
	},
	{
		rank: 4018,
		frequency: 15.28,
		lemma: "ですが"
	},
	{
		rank: 4019,
		frequency: 15.28,
		lemma: "肉体"
	},
	{
		rank: 4020,
		frequency: 15.28,
		lemma: "上場"
	},
	{
		rank: 4021,
		frequency: 15.27,
		lemma: "機種"
	},
	{
		rank: 4022,
		frequency: 15.26,
		lemma: "奇跡"
	},
	{
		rank: 4023,
		frequency: 15.26,
		lemma: "つなぐ"
	},
	{
		rank: 4024,
		frequency: 15.26,
		lemma: "投入"
	},
	{
		rank: 4025,
		frequency: 15.25,
		lemma: "一貫"
	},
	{
		rank: 4026,
		frequency: 15.24,
		lemma: "俳優"
	},
	{
		rank: 4027,
		frequency: 15.24,
		lemma: "先頭"
	},
	{
		rank: 4028,
		frequency: 15.23,
		lemma: "のんびり"
	},
	{
		rank: 4029,
		frequency: 15.22,
		lemma: "パート"
	},
	{
		rank: 4030,
		frequency: 15.22,
		lemma: "パートナー"
	},
	{
		rank: 4031,
		frequency: 15.22,
		lemma: "協"
	},
	{
		rank: 4032,
		frequency: 15.21,
		lemma: "背中"
	},
	{
		rank: 4033,
		frequency: 15.21,
		lemma: "埋める"
	},
	{
		rank: 4034,
		frequency: 15.21,
		lemma: "次元"
	},
	{
		rank: 4035,
		frequency: 15.2,
		lemma: "貸す"
	},
	{
		rank: 4036,
		frequency: 15.2,
		lemma: "化粧"
	},
	{
		rank: 4037,
		frequency: 15.2,
		lemma: "皮"
	},
	{
		rank: 4038,
		frequency: 15.2,
		lemma: "ルーム"
	},
	{
		rank: 4039,
		frequency: 15.19,
		lemma: "あっ"
	},
	{
		rank: 4040,
		frequency: 15.19,
		lemma: "ついでに"
	},
	{
		rank: 4041,
		frequency: 15.19,
		lemma: "商"
	},
	{
		rank: 4042,
		frequency: 15.18,
		lemma: "いかなる"
	},
	{
		rank: 4043,
		frequency: 15.16,
		lemma: "山口"
	},
	{
		rank: 4044,
		frequency: 15.16,
		lemma: "装備"
	},
	{
		rank: 4045,
		frequency: 15.16,
		lemma: "物事"
	},
	{
		rank: 4046,
		frequency: 15.16,
		lemma: "楽天"
	},
	{
		rank: 4047,
		frequency: 15.16,
		lemma: "異"
	},
	{
		rank: 4048,
		frequency: 15.15,
		lemma: "トーク"
	},
	{
		rank: 4049,
		frequency: 15.15,
		lemma: "毛"
	},
	{
		rank: 4050,
		frequency: 15.15,
		lemma: "だいぶ"
	},
	{
		rank: 4051,
		frequency: 15.13,
		lemma: "故"
	},
	{
		rank: 4052,
		frequency: 15.12,
		lemma: "ぽい"
	},
	{
		rank: 4053,
		frequency: 15.12,
		lemma: "がら"
	},
	{
		rank: 4054,
		frequency: 15.12,
		lemma: "テクノロジー"
	},
	{
		rank: 4055,
		frequency: 15.12,
		lemma: "同盟"
	},
	{
		rank: 4056,
		frequency: 15.11,
		lemma: "玄関"
	},
	{
		rank: 4057,
		frequency: 15.11,
		lemma: "扉"
	},
	{
		rank: 4058,
		frequency: 15.11,
		lemma: "兵士"
	},
	{
		rank: 4059,
		frequency: 15.1,
		lemma: "ドン"
	},
	{
		rank: 4060,
		frequency: 15.1,
		lemma: "揃う"
	},
	{
		rank: 4061,
		frequency: 15.09,
		lemma: "委託"
	},
	{
		rank: 4062,
		frequency: 15.07,
		lemma: "閲覧"
	},
	{
		rank: 4063,
		frequency: 15.07,
		lemma: "僕ら"
	},
	{
		rank: 4064,
		frequency: 15.06,
		lemma: "等々"
	},
	{
		rank: 4065,
		frequency: 15.04,
		lemma: "昼食"
	},
	{
		rank: 4066,
		frequency: 15.03,
		lemma: "光景"
	},
	{
		rank: 4067,
		frequency: 15.03,
		lemma: "カン"
	},
	{
		rank: 4068,
		frequency: 15.02,
		lemma: "入場"
	},
	{
		rank: 4069,
		frequency: 15.02,
		lemma: "救済"
	},
	{
		rank: 4070,
		frequency: 15.02,
		lemma: "カテゴリ"
	},
	{
		rank: 4071,
		frequency: 15.01,
		lemma: "記入"
	},
	{
		rank: 4072,
		frequency: 15.01,
		lemma: "作れる"
	},
	{
		rank: 4073,
		frequency: 15.01,
		lemma: "タン"
	},
	{
		rank: 4074,
		frequency: 15,
		lemma: "参拝"
	},
	{
		rank: 4075,
		frequency: 15,
		lemma: "話し合い"
	},
	{
		rank: 4076,
		frequency: 14.99,
		lemma: "入"
	},
	{
		rank: 4077,
		frequency: 14.99,
		lemma: "補償"
	},
	{
		rank: 4078,
		frequency: 14.98,
		lemma: "響く"
	},
	{
		rank: 4079,
		frequency: 14.96,
		lemma: "国籍"
	},
	{
		rank: 4080,
		frequency: 14.96,
		lemma: "重なる"
	},
	{
		rank: 4081,
		frequency: 14.96,
		lemma: "掛かる"
	},
	{
		rank: 4082,
		frequency: 14.95,
		lemma: "閉じる"
	},
	{
		rank: 4083,
		frequency: 14.95,
		lemma: "絵本"
	},
	{
		rank: 4084,
		frequency: 14.95,
		lemma: "共感"
	},
	{
		rank: 4085,
		frequency: 14.94,
		lemma: "日曜"
	},
	{
		rank: 4086,
		frequency: 14.94,
		lemma: "この世"
	},
	{
		rank: 4087,
		frequency: 14.94,
		lemma: "何人"
	},
	{
		rank: 4088,
		frequency: 14.93,
		lemma: "アルバイト"
	},
	{
		rank: 4089,
		frequency: 14.92,
		lemma: "国境"
	},
	{
		rank: 4090,
		frequency: 14.92,
		lemma: "思いつく"
	},
	{
		rank: 4091,
		frequency: 14.92,
		lemma: "申し込み"
	},
	{
		rank: 4092,
		frequency: 14.92,
		lemma: "あきらめる"
	},
	{
		rank: 4093,
		frequency: 14.91,
		lemma: "工学"
	},
	{
		rank: 4094,
		frequency: 14.91,
		lemma: "探る"
	},
	{
		rank: 4095,
		frequency: 14.91,
		lemma: "手元"
	},
	{
		rank: 4096,
		frequency: 14.9,
		lemma: "がたい"
	},
	{
		rank: 4097,
		frequency: 14.9,
		lemma: "ケア"
	},
	{
		rank: 4098,
		frequency: 14.89,
		lemma: "芸能"
	},
	{
		rank: 4099,
		frequency: 14.89,
		lemma: "そちら"
	},
	{
		rank: 4100,
		frequency: 14.89,
		lemma: "およそ"
	},
	{
		rank: 4101,
		frequency: 14.88,
		lemma: "笑い"
	},
	{
		rank: 4102,
		frequency: 14.88,
		lemma: "典型"
	},
	{
		rank: 4103,
		frequency: 14.88,
		lemma: "かわる"
	},
	{
		rank: 4104,
		frequency: 14.87,
		lemma: "双方"
	},
	{
		rank: 4105,
		frequency: 14.87,
		lemma: "マジ"
	},
	{
		rank: 4106,
		frequency: 14.87,
		lemma: "恵まれる"
	},
	{
		rank: 4107,
		frequency: 14.87,
		lemma: "ともに"
	},
	{
		rank: 4108,
		frequency: 14.86,
		lemma: "後者"
	},
	{
		rank: 4109,
		frequency: 14.86,
		lemma: "観戦"
	},
	{
		rank: 4110,
		frequency: 14.86,
		lemma: "在日"
	},
	{
		rank: 4111,
		frequency: 14.85,
		lemma: "静岡"
	},
	{
		rank: 4112,
		frequency: 14.85,
		lemma: "養成"
	},
	{
		rank: 4113,
		frequency: 14.85,
		lemma: "現役"
	},
	{
		rank: 4114,
		frequency: 14.84,
		lemma: "沖"
	},
	{
		rank: 4115,
		frequency: 14.84,
		lemma: "再現"
	},
	{
		rank: 4116,
		frequency: 14.84,
		lemma: "心臓"
	},
	{
		rank: 4117,
		frequency: 14.82,
		lemma: "尊敬"
	},
	{
		rank: 4118,
		frequency: 14.82,
		lemma: "恐れる"
	},
	{
		rank: 4119,
		frequency: 14.82,
		lemma: "女優"
	},
	{
		rank: 4120,
		frequency: 14.81,
		lemma: "ホワイト"
	},
	{
		rank: 4121,
		frequency: 14.81,
		lemma: "お話し"
	},
	{
		rank: 4122,
		frequency: 14.81,
		lemma: "武"
	},
	{
		rank: 4123,
		frequency: 14.81,
		lemma: "宮崎"
	},
	{
		rank: 4124,
		frequency: 14.8,
		lemma: "権威"
	},
	{
		rank: 4125,
		frequency: 14.8,
		lemma: "メールアドレス"
	},
	{
		rank: 4126,
		frequency: 14.8,
		lemma: "浴びる"
	},
	{
		rank: 4127,
		frequency: 14.8,
		lemma: "テクニック"
	},
	{
		rank: 4128,
		frequency: 14.79,
		lemma: "返る"
	},
	{
		rank: 4129,
		frequency: 14.79,
		lemma: "保育"
	},
	{
		rank: 4130,
		frequency: 14.79,
		lemma: "別れる"
	},
	{
		rank: 4131,
		frequency: 14.77,
		lemma: "拾う"
	},
	{
		rank: 4132,
		frequency: 14.77,
		lemma: "センチ"
	},
	{
		rank: 4133,
		frequency: 14.76,
		lemma: "税制"
	},
	{
		rank: 4134,
		frequency: 14.75,
		lemma: "おれ"
	},
	{
		rank: 4135,
		frequency: 14.75,
		lemma: "本社"
	},
	{
		rank: 4136,
		frequency: 14.74,
		lemma: "ラスト"
	},
	{
		rank: 4137,
		frequency: 14.73,
		lemma: "実用"
	},
	{
		rank: 4138,
		frequency: 14.72,
		lemma: "強"
	},
	{
		rank: 4139,
		frequency: 14.72,
		lemma: "制約"
	},
	{
		rank: 4140,
		frequency: 14.71,
		lemma: "オブ"
	},
	{
		rank: 4141,
		frequency: 14.71,
		lemma: "演劇"
	},
	{
		rank: 4142,
		frequency: 14.7,
		lemma: "人種"
	},
	{
		rank: 4143,
		frequency: 14.7,
		lemma: "条例"
	},
	{
		rank: 4144,
		frequency: 14.7,
		lemma: "有料"
	},
	{
		rank: 4145,
		frequency: 14.7,
		lemma: "審"
	},
	{
		rank: 4146,
		frequency: 14.7,
		lemma: "判定"
	},
	{
		rank: 4147,
		frequency: 14.7,
		lemma: "住まい"
	},
	{
		rank: 4148,
		frequency: 14.69,
		lemma: "占い"
	},
	{
		rank: 4149,
		frequency: 14.69,
		lemma: "瓦"
	},
	{
		rank: 4150,
		frequency: 14.69,
		lemma: "順位"
	},
	{
		rank: 4151,
		frequency: 14.69,
		lemma: "急速"
	},
	{
		rank: 4152,
		frequency: 14.68,
		lemma: "インフレ"
	},
	{
		rank: 4153,
		frequency: 14.68,
		lemma: "フォーラム"
	},
	{
		rank: 4154,
		frequency: 14.67,
		lemma: "詐欺"
	},
	{
		rank: 4155,
		frequency: 14.67,
		lemma: "可"
	},
	{
		rank: 4156,
		frequency: 14.67,
		lemma: "ヘッド"
	},
	{
		rank: 4157,
		frequency: 14.67,
		lemma: "築く"
	},
	{
		rank: 4158,
		frequency: 14.66,
		lemma: "朝食"
	},
	{
		rank: 4159,
		frequency: 14.66,
		lemma: "独占"
	},
	{
		rank: 4160,
		frequency: 14.66,
		lemma: "シナリオ"
	},
	{
		rank: 4161,
		frequency: 14.66,
		lemma: "輸送"
	},
	{
		rank: 4162,
		frequency: 14.65,
		lemma: "高等"
	},
	{
		rank: 4163,
		frequency: 14.64,
		lemma: "推測"
	},
	{
		rank: 4164,
		frequency: 14.63,
		lemma: "天然"
	},
	{
		rank: 4165,
		frequency: 14.61,
		lemma: "下手"
	},
	{
		rank: 4166,
		frequency: 14.61,
		lemma: "知人"
	},
	{
		rank: 4167,
		frequency: 14.61,
		lemma: "頻繁"
	},
	{
		rank: 4168,
		frequency: 14.6,
		lemma: "まとまる"
	},
	{
		rank: 4169,
		frequency: 14.57,
		lemma: "姫"
	},
	{
		rank: 4170,
		frequency: 14.57,
		lemma: "闇"
	},
	{
		rank: 4171,
		frequency: 14.57,
		lemma: "向き"
	},
	{
		rank: 4172,
		frequency: 14.57,
		lemma: "勝てる"
	},
	{
		rank: 4173,
		frequency: 14.55,
		lemma: "言及"
	},
	{
		rank: 4174,
		frequency: 14.54,
		lemma: "睡眠"
	},
	{
		rank: 4175,
		frequency: 14.54,
		lemma: "大学生"
	},
	{
		rank: 4176,
		frequency: 14.54,
		lemma: "解く"
	},
	{
		rank: 4177,
		frequency: 14.54,
		lemma: "提言"
	},
	{
		rank: 4178,
		frequency: 14.53,
		lemma: "自慢"
	},
	{
		rank: 4179,
		frequency: 14.53,
		lemma: "人形"
	},
	{
		rank: 4180,
		frequency: 14.53,
		lemma: "つづける"
	},
	{
		rank: 4181,
		frequency: 14.52,
		lemma: "鍋"
	},
	{
		rank: 4182,
		frequency: 14.52,
		lemma: "銀"
	},
	{
		rank: 4183,
		frequency: 14.52,
		lemma: "望ましい"
	},
	{
		rank: 4184,
		frequency: 14.51,
		lemma: "不当"
	},
	{
		rank: 4185,
		frequency: 14.51,
		lemma: "訪ねる"
	},
	{
		rank: 4186,
		frequency: 14.51,
		lemma: "毎"
	},
	{
		rank: 4187,
		frequency: 14.51,
		lemma: "持ち込む"
	},
	{
		rank: 4188,
		frequency: 14.5,
		lemma: "間に合う"
	},
	{
		rank: 4189,
		frequency: 14.49,
		lemma: "グッズ"
	},
	{
		rank: 4190,
		frequency: 14.49,
		lemma: "展望"
	},
	{
		rank: 4191,
		frequency: 14.47,
		lemma: "郡"
	},
	{
		rank: 4192,
		frequency: 14.47,
		lemma: "どうせ"
	},
	{
		rank: 4193,
		frequency: 14.46,
		lemma: "国語"
	},
	{
		rank: 4194,
		frequency: 14.46,
		lemma: "職人"
	},
	{
		rank: 4195,
		frequency: 14.45,
		lemma: "試みる"
	},
	{
		rank: 4196,
		frequency: 14.44,
		lemma: "焦点"
	},
	{
		rank: 4197,
		frequency: 14.43,
		lemma: "おまえ"
	},
	{
		rank: 4198,
		frequency: 14.42,
		lemma: "総額"
	},
	{
		rank: 4199,
		frequency: 14.42,
		lemma: "食料"
	},
	{
		rank: 4200,
		frequency: 14.42,
		lemma: "銃"
	},
	{
		rank: 4201,
		frequency: 14.42,
		lemma: "井上"
	},
	{
		rank: 4202,
		frequency: 14.41,
		lemma: "フォーム"
	},
	{
		rank: 4203,
		frequency: 14.41,
		lemma: "あんた"
	},
	{
		rank: 4204,
		frequency: 14.41,
		lemma: "略"
	},
	{
		rank: 4205,
		frequency: 14.41,
		lemma: "古典"
	},
	{
		rank: 4206,
		frequency: 14.4,
		lemma: "この辺"
	},
	{
		rank: 4207,
		frequency: 14.4,
		lemma: "黙る"
	},
	{
		rank: 4208,
		frequency: 14.39,
		lemma: "テニス"
	},
	{
		rank: 4209,
		frequency: 14.39,
		lemma: "貧しい"
	},
	{
		rank: 4210,
		frequency: 14.39,
		lemma: "じっくり"
	},
	{
		rank: 4211,
		frequency: 14.39,
		lemma: "増大"
	},
	{
		rank: 4212,
		frequency: 14.38,
		lemma: "闘争"
	},
	{
		rank: 4213,
		frequency: 14.38,
		lemma: "タグ"
	},
	{
		rank: 4214,
		frequency: 14.38,
		lemma: "池田"
	},
	{
		rank: 4215,
		frequency: 14.37,
		lemma: "相対"
	},
	{
		rank: 4216,
		frequency: 14.36,
		lemma: "追記"
	},
	{
		rank: 4217,
		frequency: 14.35,
		lemma: "当選"
	},
	{
		rank: 4218,
		frequency: 14.35,
		lemma: "ランチ"
	},
	{
		rank: 4219,
		frequency: 14.35,
		lemma: "日中"
	},
	{
		rank: 4220,
		frequency: 14.35,
		lemma: "預金"
	},
	{
		rank: 4221,
		frequency: 14.35,
		lemma: "特"
	},
	{
		rank: 4222,
		frequency: 14.34,
		lemma: "オタク"
	},
	{
		rank: 4223,
		frequency: 14.34,
		lemma: "キーボード"
	},
	{
		rank: 4224,
		frequency: 14.34,
		lemma: "アピール"
	},
	{
		rank: 4225,
		frequency: 14.34,
		lemma: "組み合わせ"
	},
	{
		rank: 4226,
		frequency: 14.34,
		lemma: "金属"
	},
	{
		rank: 4227,
		frequency: 14.33,
		lemma: "産む"
	},
	{
		rank: 4228,
		frequency: 14.33,
		lemma: "はまる"
	},
	{
		rank: 4229,
		frequency: 14.33,
		lemma: "評判"
	},
	{
		rank: 4230,
		frequency: 14.31,
		lemma: "ぶつ"
	},
	{
		rank: 4231,
		frequency: 14.31,
		lemma: "レッド"
	},
	{
		rank: 4232,
		frequency: 14.3,
		lemma: "共産党"
	},
	{
		rank: 4233,
		frequency: 14.3,
		lemma: "絞る"
	},
	{
		rank: 4234,
		frequency: 14.3,
		lemma: "前年"
	},
	{
		rank: 4235,
		frequency: 14.3,
		lemma: "給付"
	},
	{
		rank: 4236,
		frequency: 14.3,
		lemma: "主演"
	},
	{
		rank: 4237,
		frequency: 14.29,
		lemma: "いかにも"
	},
	{
		rank: 4238,
		frequency: 14.29,
		lemma: "編成"
	},
	{
		rank: 4239,
		frequency: 14.29,
		lemma: "まつ"
	},
	{
		rank: 4240,
		frequency: 14.29,
		lemma: "証言"
	},
	{
		rank: 4241,
		frequency: 14.28,
		lemma: "カップル"
	},
	{
		rank: 4242,
		frequency: 14.28,
		lemma: "提起"
	},
	{
		rank: 4243,
		frequency: 14.28,
		lemma: "実務"
	},
	{
		rank: 4244,
		frequency: 14.28,
		lemma: "誇る"
	},
	{
		rank: 4245,
		frequency: 14.26,
		lemma: "提携"
	},
	{
		rank: 4246,
		frequency: 14.26,
		lemma: "損失"
	},
	{
		rank: 4247,
		frequency: 14.25,
		lemma: "太"
	},
	{
		rank: 4248,
		frequency: 14.24,
		lemma: "早期"
	},
	{
		rank: 4249,
		frequency: 14.24,
		lemma: "ポジション"
	},
	{
		rank: 4250,
		frequency: 14.24,
		lemma: "手当"
	},
	{
		rank: 4251,
		frequency: 14.22,
		lemma: "埼玉"
	},
	{
		rank: 4252,
		frequency: 14.22,
		lemma: "コーチ"
	},
	{
		rank: 4253,
		frequency: 14.22,
		lemma: "スコア"
	},
	{
		rank: 4254,
		frequency: 14.22,
		lemma: "厚い"
	},
	{
		rank: 4255,
		frequency: 14.21,
		lemma: "栄養"
	},
	{
		rank: 4256,
		frequency: 14.21,
		lemma: "結びつく"
	},
	{
		rank: 4257,
		frequency: 14.2,
		lemma: "分割"
	},
	{
		rank: 4258,
		frequency: 14.19,
		lemma: "判明"
	},
	{
		rank: 4259,
		frequency: 14.19,
		lemma: "健全"
	},
	{
		rank: 4260,
		frequency: 14.19,
		lemma: "半ば"
	},
	{
		rank: 4261,
		frequency: 14.18,
		lemma: "イラスト"
	},
	{
		rank: 4262,
		frequency: 14.18,
		lemma: "持続"
	},
	{
		rank: 4263,
		frequency: 14.17,
		lemma: "結婚式"
	},
	{
		rank: 4264,
		frequency: 14.16,
		lemma: "のる"
	},
	{
		rank: 4265,
		frequency: 14.15,
		lemma: "弁護"
	},
	{
		rank: 4266,
		frequency: 14.15,
		lemma: "妥当"
	},
	{
		rank: 4267,
		frequency: 14.15,
		lemma: "ション"
	},
	{
		rank: 4268,
		frequency: 14.15,
		lemma: "之"
	},
	{
		rank: 4269,
		frequency: 14.14,
		lemma: "豆"
	},
	{
		rank: 4270,
		frequency: 14.14,
		lemma: "臭い"
	},
	{
		rank: 4271,
		frequency: 14.13,
		lemma: "好"
	},
	{
		rank: 4272,
		frequency: 14.13,
		lemma: "ふさわしい"
	},
	{
		rank: 4273,
		frequency: 14.13,
		lemma: "控える"
	},
	{
		rank: 4274,
		frequency: 14.13,
		lemma: "宮"
	},
	{
		rank: 4275,
		frequency: 14.13,
		lemma: "仲"
	},
	{
		rank: 4276,
		frequency: 14.12,
		lemma: "えっ"
	},
	{
		rank: 4277,
		frequency: 14.12,
		lemma: "鑑賞"
	},
	{
		rank: 4278,
		frequency: 14.12,
		lemma: "オペラ"
	},
	{
		rank: 4279,
		frequency: 14.11,
		lemma: "メキシコ"
	},
	{
		rank: 4280,
		frequency: 14.11,
		lemma: "教"
	},
	{
		rank: 4281,
		frequency: 14.11,
		lemma: "評論"
	},
	{
		rank: 4282,
		frequency: 14.1,
		lemma: "わが"
	},
	{
		rank: 4283,
		frequency: 14.1,
		lemma: "後で"
	},
	{
		rank: 4284,
		frequency: 14.1,
		lemma: "覆う"
	},
	{
		rank: 4285,
		frequency: 14.09,
		lemma: "剣"
	},
	{
		rank: 4286,
		frequency: 14.09,
		lemma: "臨時"
	},
	{
		rank: 4287,
		frequency: 14.09,
		lemma: "あく"
	},
	{
		rank: 4288,
		frequency: 14.08,
		lemma: "拠点"
	},
	{
		rank: 4289,
		frequency: 14.08,
		lemma: "宿泊"
	},
	{
		rank: 4290,
		frequency: 14.07,
		lemma: "ディスク"
	},
	{
		rank: 4291,
		frequency: 14.07,
		lemma: "繊維"
	},
	{
		rank: 4292,
		frequency: 14.06,
		lemma: "ふたり"
	},
	{
		rank: 4293,
		frequency: 14.06,
		lemma: "ボード"
	},
	{
		rank: 4294,
		frequency: 14.06,
		lemma: "会合"
	},
	{
		rank: 4295,
		frequency: 14.06,
		lemma: "ジャーナリスト"
	},
	{
		rank: 4296,
		frequency: 14.05,
		lemma: "閉鎖"
	},
	{
		rank: 4297,
		frequency: 14.05,
		lemma: "話し合う"
	},
	{
		rank: 4298,
		frequency: 14.05,
		lemma: "論議"
	},
	{
		rank: 4299,
		frequency: 14.05,
		lemma: "壊す"
	},
	{
		rank: 4300,
		frequency: 14.04,
		lemma: "お昼"
	},
	{
		rank: 4301,
		frequency: 14.04,
		lemma: "座長"
	},
	{
		rank: 4302,
		frequency: 14.03,
		lemma: "天才"
	},
	{
		rank: 4303,
		frequency: 14.02,
		lemma: "サンプル"
	},
	{
		rank: 4304,
		frequency: 14.01,
		lemma: "深める"
	},
	{
		rank: 4305,
		frequency: 14,
		lemma: "いざ"
	},
	{
		rank: 4306,
		frequency: 14,
		lemma: "オー"
	},
	{
		rank: 4307,
		frequency: 14,
		lemma: "犯す"
	},
	{
		rank: 4308,
		frequency: 13.99,
		lemma: "動機"
	},
	{
		rank: 4309,
		frequency: 13.98,
		lemma: "妄想"
	},
	{
		rank: 4310,
		frequency: 13.98,
		lemma: "せめて"
	},
	{
		rank: 4311,
		frequency: 13.97,
		lemma: "長野"
	},
	{
		rank: 4312,
		frequency: 13.96,
		lemma: "がん"
	},
	{
		rank: 4313,
		frequency: 13.96,
		lemma: "働き"
	},
	{
		rank: 4314,
		frequency: 13.96,
		lemma: "堀江"
	},
	{
		rank: 4315,
		frequency: 13.96,
		lemma: "届け"
	},
	{
		rank: 4316,
		frequency: 13.95,
		lemma: "試み"
	},
	{
		rank: 4317,
		frequency: 13.95,
		lemma: "論じる"
	},
	{
		rank: 4318,
		frequency: 13.94,
		lemma: "加盟"
	},
	{
		rank: 4319,
		frequency: 13.94,
		lemma: "とどまる"
	},
	{
		rank: 4320,
		frequency: 13.94,
		lemma: "スープ"
	},
	{
		rank: 4321,
		frequency: 13.93,
		lemma: "マップ"
	},
	{
		rank: 4322,
		frequency: 13.92,
		lemma: "呼びかける"
	},
	{
		rank: 4323,
		frequency: 13.92,
		lemma: "帳"
	},
	{
		rank: 4324,
		frequency: 13.92,
		lemma: "美容"
	},
	{
		rank: 4325,
		frequency: 13.92,
		lemma: "晩"
	},
	{
		rank: 4326,
		frequency: 13.91,
		lemma: "草"
	},
	{
		rank: 4327,
		frequency: 13.91,
		lemma: "キング"
	},
	{
		rank: 4328,
		frequency: 13.91,
		lemma: "保全"
	},
	{
		rank: 4329,
		frequency: 13.91,
		lemma: "何処"
	},
	{
		rank: 4330,
		frequency: 13.9,
		lemma: "パネル"
	},
	{
		rank: 4331,
		frequency: 13.9,
		lemma: "演説"
	},
	{
		rank: 4332,
		frequency: 13.89,
		lemma: "衆議院"
	},
	{
		rank: 4333,
		frequency: 13.88,
		lemma: "中国語"
	},
	{
		rank: 4334,
		frequency: 13.87,
		lemma: "促す"
	},
	{
		rank: 4335,
		frequency: 13.87,
		lemma: "買い"
	},
	{
		rank: 4336,
		frequency: 13.86,
		lemma: "プレス"
	},
	{
		rank: 4337,
		frequency: 13.86,
		lemma: "実情"
	},
	{
		rank: 4338,
		frequency: 13.85,
		lemma: "チャンネル"
	},
	{
		rank: 4339,
		frequency: 13.84,
		lemma: "文字数"
	},
	{
		rank: 4340,
		frequency: 13.84,
		lemma: "つき"
	},
	{
		rank: 4341,
		frequency: 13.83,
		lemma: "兵"
	},
	{
		rank: 4342,
		frequency: 13.83,
		lemma: "取り出す"
	},
	{
		rank: 4343,
		frequency: 13.81,
		lemma: "東大"
	},
	{
		rank: 4344,
		frequency: 13.8,
		lemma: "雑感"
	},
	{
		rank: 4345,
		frequency: 13.8,
		lemma: "元々"
	},
	{
		rank: 4346,
		frequency: 13.78,
		lemma: "あぁ"
	},
	{
		rank: 4347,
		frequency: 13.77,
		lemma: "運転手"
	},
	{
		rank: 4348,
		frequency: 13.76,
		lemma: "フィールド"
	},
	{
		rank: 4349,
		frequency: 13.75,
		lemma: "タル"
	},
	{
		rank: 4350,
		frequency: 13.74,
		lemma: "徹底的"
	},
	{
		rank: 4351,
		frequency: 13.74,
		lemma: "造る"
	},
	{
		rank: 4352,
		frequency: 13.73,
		lemma: "あれこれ"
	},
	{
		rank: 4353,
		frequency: 13.73,
		lemma: "窓口"
	},
	{
		rank: 4354,
		frequency: 13.73,
		lemma: "打ち合わせ"
	},
	{
		rank: 4355,
		frequency: 13.73,
		lemma: "勧める"
	},
	{
		rank: 4356,
		frequency: 13.72,
		lemma: "かぶる"
	},
	{
		rank: 4357,
		frequency: 13.71,
		lemma: "愛する"
	},
	{
		rank: 4358,
		frequency: 13.71,
		lemma: "飽きる"
	},
	{
		rank: 4359,
		frequency: 13.71,
		lemma: "背"
	},
	{
		rank: 4360,
		frequency: 13.71,
		lemma: "にあたって"
	},
	{
		rank: 4361,
		frequency: 13.7,
		lemma: "お菓子"
	},
	{
		rank: 4362,
		frequency: 13.7,
		lemma: "購読"
	},
	{
		rank: 4363,
		frequency: 13.7,
		lemma: "得点"
	},
	{
		rank: 4364,
		frequency: 13.7,
		lemma: "ペン"
	},
	{
		rank: 4365,
		frequency: 13.7,
		lemma: "立法"
	},
	{
		rank: 4366,
		frequency: 13.7,
		lemma: "真ん中"
	},
	{
		rank: 4367,
		frequency: 13.69,
		lemma: "否"
	},
	{
		rank: 4368,
		frequency: 13.68,
		lemma: "遠く"
	},
	{
		rank: 4369,
		frequency: 13.68,
		lemma: "成分"
	},
	{
		rank: 4370,
		frequency: 13.68,
		lemma: "飛ばす"
	},
	{
		rank: 4371,
		frequency: 13.66,
		lemma: "国債"
	},
	{
		rank: 4372,
		frequency: 13.66,
		lemma: "とりわけ"
	},
	{
		rank: 4373,
		frequency: 13.65,
		lemma: "つづく"
	},
	{
		rank: 4374,
		frequency: 13.65,
		lemma: "コート"
	},
	{
		rank: 4375,
		frequency: 13.64,
		lemma: "推薦"
	},
	{
		rank: 4376,
		frequency: 13.64,
		lemma: "手順"
	},
	{
		rank: 4377,
		frequency: 13.64,
		lemma: "本文"
	},
	{
		rank: 4378,
		frequency: 13.64,
		lemma: "求人"
	},
	{
		rank: 4379,
		frequency: 13.64,
		lemma: "お礼"
	},
	{
		rank: 4380,
		frequency: 13.64,
		lemma: "ケーブル"
	},
	{
		rank: 4381,
		frequency: 13.64,
		lemma: "清"
	},
	{
		rank: 4382,
		frequency: 13.64,
		lemma: "屋根"
	},
	{
		rank: 4383,
		frequency: 13.64,
		lemma: "財務"
	},
	{
		rank: 4384,
		frequency: 13.63,
		lemma: "根"
	},
	{
		rank: 4385,
		frequency: 13.63,
		lemma: "サー"
	},
	{
		rank: 4386,
		frequency: 13.62,
		lemma: "突っ込む"
	},
	{
		rank: 4387,
		frequency: 13.62,
		lemma: "寺"
	},
	{
		rank: 4388,
		frequency: 13.62,
		lemma: "反発"
	},
	{
		rank: 4389,
		frequency: 13.62,
		lemma: "ヒント"
	},
	{
		rank: 4390,
		frequency: 13.62,
		lemma: "管"
	},
	{
		rank: 4391,
		frequency: 13.62,
		lemma: "巻く"
	},
	{
		rank: 4392,
		frequency: 13.61,
		lemma: "端"
	},
	{
		rank: 4393,
		frequency: 13.6,
		lemma: "福井"
	},
	{
		rank: 4394,
		frequency: 13.6,
		lemma: "゜"
	},
	{
		rank: 4395,
		frequency: 13.59,
		lemma: "放映"
	},
	{
		rank: 4396,
		frequency: 13.59,
		lemma: "豚"
	},
	{
		rank: 4397,
		frequency: 13.58,
		lemma: "支給"
	},
	{
		rank: 4398,
		frequency: 13.58,
		lemma: "ブル"
	},
	{
		rank: 4399,
		frequency: 13.58,
		lemma: "あらかじめ"
	},
	{
		rank: 4400,
		frequency: 13.58,
		lemma: "プレーヤー"
	},
	{
		rank: 4401,
		frequency: 13.58,
		lemma: "遺産"
	},
	{
		rank: 4402,
		frequency: 13.57,
		lemma: "に従って"
	},
	{
		rank: 4403,
		frequency: 13.57,
		lemma: "招待"
	},
	{
		rank: 4404,
		frequency: 13.57,
		lemma: "第三者"
	},
	{
		rank: 4405,
		frequency: 13.57,
		lemma: "無くなる"
	},
	{
		rank: 4406,
		frequency: 13.57,
		lemma: "神話"
	},
	{
		rank: 4407,
		frequency: 13.57,
		lemma: "視線"
	},
	{
		rank: 4408,
		frequency: 13.56,
		lemma: "四月"
	},
	{
		rank: 4409,
		frequency: 13.54,
		lemma: "予選"
	},
	{
		rank: 4410,
		frequency: 13.54,
		lemma: "解明"
	},
	{
		rank: 4411,
		frequency: 13.53,
		lemma: "収支"
	},
	{
		rank: 4412,
		frequency: 13.52,
		lemma: "スライド"
	},
	{
		rank: 4413,
		frequency: 13.51,
		lemma: "匂い"
	},
	{
		rank: 4414,
		frequency: 13.51,
		lemma: "前向き"
	},
	{
		rank: 4415,
		frequency: 13.51,
		lemma: "グルメ"
	},
	{
		rank: 4416,
		frequency: 13.51,
		lemma: "Ｅ"
	},
	{
		rank: 4417,
		frequency: 13.5,
		lemma: "今夜"
	},
	{
		rank: 4418,
		frequency: 13.49,
		lemma: "乾燥"
	},
	{
		rank: 4419,
		frequency: 13.49,
		lemma: "だからこそ"
	},
	{
		rank: 4420,
		frequency: 13.49,
		lemma: "適宜"
	},
	{
		rank: 4421,
		frequency: 13.49,
		lemma: "活発"
	},
	{
		rank: 4422,
		frequency: 13.48,
		lemma: "立ち上がる"
	},
	{
		rank: 4423,
		frequency: 13.48,
		lemma: "釣り"
	},
	{
		rank: 4424,
		frequency: 13.48,
		lemma: "容量"
	},
	{
		rank: 4425,
		frequency: 13.47,
		lemma: "告げる"
	},
	{
		rank: 4426,
		frequency: 13.47,
		lemma: "基金"
	},
	{
		rank: 4427,
		frequency: 13.47,
		lemma: "はじまる"
	},
	{
		rank: 4428,
		frequency: 13.46,
		lemma: "湖"
	},
	{
		rank: 4429,
		frequency: 13.46,
		lemma: "要る"
	},
	{
		rank: 4430,
		frequency: 13.45,
		lemma: "修行"
	},
	{
		rank: 4431,
		frequency: 13.45,
		lemma: "売却"
	},
	{
		rank: 4432,
		frequency: 13.45,
		lemma: "早め"
	},
	{
		rank: 4433,
		frequency: 13.45,
		lemma: "いっしょ"
	},
	{
		rank: 4434,
		frequency: 13.45,
		lemma: "飛行"
	},
	{
		rank: 4435,
		frequency: 13.44,
		lemma: "成る"
	},
	{
		rank: 4436,
		frequency: 13.44,
		lemma: "サークル"
	},
	{
		rank: 4437,
		frequency: 13.44,
		lemma: "警備"
	},
	{
		rank: 4438,
		frequency: 13.44,
		lemma: "それる"
	},
	{
		rank: 4439,
		frequency: 13.44,
		lemma: "余地"
	},
	{
		rank: 4440,
		frequency: 13.43,
		lemma: "膨大"
	},
	{
		rank: 4441,
		frequency: 13.43,
		lemma: "発送"
	},
	{
		rank: 4442,
		frequency: 13.43,
		lemma: "旨"
	},
	{
		rank: 4443,
		frequency: 13.43,
		lemma: "憧れる"
	},
	{
		rank: 4444,
		frequency: 13.43,
		lemma: "不安定"
	},
	{
		rank: 4445,
		frequency: 13.43,
		lemma: "送料"
	},
	{
		rank: 4446,
		frequency: 13.42,
		lemma: "鳴る"
	},
	{
		rank: 4447,
		frequency: 13.42,
		lemma: "リード"
	},
	{
		rank: 4448,
		frequency: 13.41,
		lemma: "民事"
	},
	{
		rank: 4449,
		frequency: 13.41,
		lemma: "トップページ"
	},
	{
		rank: 4450,
		frequency: 13.4,
		lemma: "規格"
	},
	{
		rank: 4451,
		frequency: 13.4,
		lemma: "潜在"
	},
	{
		rank: 4452,
		frequency: 13.39,
		lemma: "景色"
	},
	{
		rank: 4453,
		frequency: 13.38,
		lemma: "弊社"
	},
	{
		rank: 4454,
		frequency: 13.38,
		lemma: "脇"
	},
	{
		rank: 4455,
		frequency: 13.38,
		lemma: "さっそく"
	},
	{
		rank: 4456,
		frequency: 13.38,
		lemma: "配分"
	},
	{
		rank: 4457,
		frequency: 13.37,
		lemma: "店長"
	},
	{
		rank: 4458,
		frequency: 13.37,
		lemma: "長崎"
	},
	{
		rank: 4459,
		frequency: 13.36,
		lemma: "見守る"
	},
	{
		rank: 4460,
		frequency: 13.36,
		lemma: "国土"
	},
	{
		rank: 4461,
		frequency: 13.35,
		lemma: "ごめんなさい"
	},
	{
		rank: 4462,
		frequency: 13.34,
		lemma: "パック"
	},
	{
		rank: 4463,
		frequency: 13.34,
		lemma: "おこなう"
	},
	{
		rank: 4464,
		frequency: 13.33,
		lemma: "古"
	},
	{
		rank: 4465,
		frequency: 13.33,
		lemma: "コンサルタント"
	},
	{
		rank: 4466,
		frequency: 13.32,
		lemma: "擁護"
	},
	{
		rank: 4467,
		frequency: 13.31,
		lemma: "突破"
	},
	{
		rank: 4468,
		frequency: 13.3,
		lemma: "いれる"
	},
	{
		rank: 4469,
		frequency: 13.3,
		lemma: "ルー"
	},
	{
		rank: 4470,
		frequency: 13.3,
		lemma: "自動的"
	},
	{
		rank: 4471,
		frequency: 13.29,
		lemma: "都会"
	},
	{
		rank: 4472,
		frequency: 13.29,
		lemma: "ニュー"
	},
	{
		rank: 4473,
		frequency: 13.28,
		lemma: "偉い"
	},
	{
		rank: 4474,
		frequency: 13.28,
		lemma: "承る"
	},
	{
		rank: 4475,
		frequency: 13.28,
		lemma: "なので"
	},
	{
		rank: 4476,
		frequency: 13.27,
		lemma: "オブジェクト"
	},
	{
		rank: 4477,
		frequency: 13.27,
		lemma: "仙台"
	},
	{
		rank: 4478,
		frequency: 13.27,
		lemma: "まわる"
	},
	{
		rank: 4479,
		frequency: 13.25,
		lemma: "豪華"
	},
	{
		rank: 4480,
		frequency: 13.25,
		lemma: "やたら"
	},
	{
		rank: 4481,
		frequency: 13.25,
		lemma: "交代"
	},
	{
		rank: 4482,
		frequency: 13.24,
		lemma: "花火"
	},
	{
		rank: 4483,
		frequency: 13.24,
		lemma: "下落"
	},
	{
		rank: 4484,
		frequency: 13.24,
		lemma: "まずい"
	},
	{
		rank: 4485,
		frequency: 13.23,
		lemma: "受け止める"
	},
	{
		rank: 4486,
		frequency: 13.23,
		lemma: "引き起こす"
	},
	{
		rank: 4487,
		frequency: 13.23,
		lemma: "訂正"
	},
	{
		rank: 4488,
		frequency: 13.23,
		lemma: "回数"
	},
	{
		rank: 4489,
		frequency: 13.22,
		lemma: "ビックリ"
	},
	{
		rank: 4490,
		frequency: 13.22,
		lemma: "つながり"
	},
	{
		rank: 4491,
		frequency: 13.21,
		lemma: "ブラック"
	},
	{
		rank: 4492,
		frequency: 13.21,
		lemma: "作り出す"
	},
	{
		rank: 4493,
		frequency: 13.21,
		lemma: "度目"
	},
	{
		rank: 4494,
		frequency: 13.2,
		lemma: "確かめる"
	},
	{
		rank: 4495,
		frequency: 13.2,
		lemma: "ミーティング"
	},
	{
		rank: 4496,
		frequency: 13.19,
		lemma: "講習"
	},
	{
		rank: 4497,
		frequency: 13.19,
		lemma: "墓"
	},
	{
		rank: 4498,
		frequency: 13.19,
		lemma: "Ｇ"
	},
	{
		rank: 4499,
		frequency: 13.18,
		lemma: "ずる"
	},
	{
		rank: 4500,
		frequency: 13.18,
		lemma: "みなす"
	},
	{
		rank: 4501,
		frequency: 13.17,
		lemma: "寄付"
	},
	{
		rank: 4502,
		frequency: 13.17,
		lemma: "マネージャー"
	},
	{
		rank: 4503,
		frequency: 13.17,
		lemma: "巻き込む"
	},
	{
		rank: 4504,
		frequency: 13.17,
		lemma: "先行"
	},
	{
		rank: 4505,
		frequency: 13.17,
		lemma: "表紙"
	},
	{
		rank: 4506,
		frequency: 13.16,
		lemma: "泉"
	},
	{
		rank: 4507,
		frequency: 13.15,
		lemma: "冒険"
	},
	{
		rank: 4508,
		frequency: 13.15,
		lemma: "中継"
	},
	{
		rank: 4509,
		frequency: 13.14,
		lemma: "保持"
	},
	{
		rank: 4510,
		frequency: 13.14,
		lemma: "コンセプト"
	},
	{
		rank: 4511,
		frequency: 13.14,
		lemma: "視覚"
	},
	{
		rank: 4512,
		frequency: 13.14,
		lemma: "工作"
	},
	{
		rank: 4513,
		frequency: 13.13,
		lemma: "地獄"
	},
	{
		rank: 4514,
		frequency: 13.13,
		lemma: "大陸"
	},
	{
		rank: 4515,
		frequency: 13.13,
		lemma: "フレーム"
	},
	{
		rank: 4516,
		frequency: 13.12,
		lemma: "看護"
	},
	{
		rank: 4517,
		frequency: 13.12,
		lemma: "売り上げ"
	},
	{
		rank: 4518,
		frequency: 13.11,
		lemma: "無し"
	},
	{
		rank: 4519,
		frequency: 13.11,
		lemma: "もうすぐ"
	},
	{
		rank: 4520,
		frequency: 13.11,
		lemma: "ピーター"
	},
	{
		rank: 4521,
		frequency: 13.11,
		lemma: "角度"
	},
	{
		rank: 4522,
		frequency: 13.11,
		lemma: "控訴"
	},
	{
		rank: 4523,
		frequency: 13.1,
		lemma: "勘違い"
	},
	{
		rank: 4524,
		frequency: 13.1,
		lemma: "端末"
	},
	{
		rank: 4525,
		frequency: 13.08,
		lemma: "余る"
	},
	{
		rank: 4526,
		frequency: 13.08,
		lemma: "栽培"
	},
	{
		rank: 4527,
		frequency: 13.08,
		lemma: "定着"
	},
	{
		rank: 4528,
		frequency: 13.08,
		lemma: "必然"
	},
	{
		rank: 4529,
		frequency: 13.08,
		lemma: "触る"
	},
	{
		rank: 4530,
		frequency: 13.07,
		lemma: "かん"
	},
	{
		rank: 4531,
		frequency: 13.06,
		lemma: "ライセンス"
	},
	{
		rank: 4532,
		frequency: 13.05,
		lemma: "破る"
	},
	{
		rank: 4533,
		frequency: 13.04,
		lemma: "後悔"
	},
	{
		rank: 4534,
		frequency: 13.04,
		lemma: "出力"
	},
	{
		rank: 4535,
		frequency: 13.04,
		lemma: "想い"
	},
	{
		rank: 4536,
		frequency: 13.04,
		lemma: "指標"
	},
	{
		rank: 4537,
		frequency: 13.04,
		lemma: "オークション"
	},
	{
		rank: 4538,
		frequency: 13.04,
		lemma: "見た目"
	},
	{
		rank: 4539,
		frequency: 13.04,
		lemma: "脚本"
	},
	{
		rank: 4540,
		frequency: 13.03,
		lemma: "ランド"
	},
	{
		rank: 4541,
		frequency: 13.02,
		lemma: "順番"
	},
	{
		rank: 4542,
		frequency: 13.02,
		lemma: "疑惑"
	},
	{
		rank: 4543,
		frequency: 13.02,
		lemma: "恐れ"
	},
	{
		rank: 4544,
		frequency: 13.02,
		lemma: "応答"
	},
	{
		rank: 4545,
		frequency: 13.01,
		lemma: "語学"
	},
	{
		rank: 4546,
		frequency: 13,
		lemma: "拘束"
	},
	{
		rank: 4547,
		frequency: 13,
		lemma: "妊娠"
	},
	{
		rank: 4548,
		frequency: 13,
		lemma: "録画"
	},
	{
		rank: 4549,
		frequency: 13,
		lemma: "クラシック"
	},
	{
		rank: 4550,
		frequency: 12.99,
		lemma: "やれる"
	},
	{
		rank: 4551,
		frequency: 12.98,
		lemma: "改行"
	},
	{
		rank: 4552,
		frequency: 12.98,
		lemma: "愛知"
	},
	{
		rank: 4553,
		frequency: 12.98,
		lemma: "ベル"
	},
	{
		rank: 4554,
		frequency: 12.98,
		lemma: "ポー"
	},
	{
		rank: 4555,
		frequency: 12.97,
		lemma: "タウン"
	},
	{
		rank: 4556,
		frequency: 12.97,
		lemma: "削る"
	},
	{
		rank: 4557,
		frequency: 12.96,
		lemma: "記号"
	},
	{
		rank: 4558,
		frequency: 12.95,
		lemma: "再建"
	},
	{
		rank: 4559,
		frequency: 12.95,
		lemma: "池"
	},
	{
		rank: 4560,
		frequency: 12.94,
		lemma: "奈良"
	},
	{
		rank: 4561,
		frequency: 12.94,
		lemma: "代替"
	},
	{
		rank: 4562,
		frequency: 12.94,
		lemma: "細い"
	},
	{
		rank: 4563,
		frequency: 12.93,
		lemma: "幼児"
	},
	{
		rank: 4564,
		frequency: 12.92,
		lemma: "電波"
	},
	{
		rank: 4565,
		frequency: 12.92,
		lemma: "転載"
	},
	{
		rank: 4566,
		frequency: 12.92,
		lemma: "たいてい"
	},
	{
		rank: 4567,
		frequency: 12.91,
		lemma: "フィリピン"
	},
	{
		rank: 4568,
		frequency: 12.91,
		lemma: "生成"
	},
	{
		rank: 4569,
		frequency: 12.91,
		lemma: "意外と"
	},
	{
		rank: 4570,
		frequency: 12.91,
		lemma: "接触"
	},
	{
		rank: 4571,
		frequency: 12.91,
		lemma: "時には"
	},
	{
		rank: 4572,
		frequency: 12.91,
		lemma: "トルコ"
	},
	{
		rank: 4573,
		frequency: 12.91,
		lemma: "大分"
	},
	{
		rank: 4574,
		frequency: 12.9,
		lemma: "表記"
	},
	{
		rank: 4575,
		frequency: 12.9,
		lemma: "新人"
	},
	{
		rank: 4576,
		frequency: 12.9,
		lemma: "情熱"
	},
	{
		rank: 4577,
		frequency: 12.89,
		lemma: "昨夜"
	},
	{
		rank: 4578,
		frequency: 12.89,
		lemma: "申込"
	},
	{
		rank: 4579,
		frequency: 12.89,
		lemma: "私的"
	},
	{
		rank: 4580,
		frequency: 12.89,
		lemma: "正解"
	},
	{
		rank: 4581,
		frequency: 12.89,
		lemma: "次第に"
	},
	{
		rank: 4582,
		frequency: 12.88,
		lemma: "殺害"
	},
	{
		rank: 4583,
		frequency: 12.88,
		lemma: "何だか"
	},
	{
		rank: 4584,
		frequency: 12.88,
		lemma: "カ国"
	},
	{
		rank: 4585,
		frequency: 12.88,
		lemma: "親切"
	},
	{
		rank: 4586,
		frequency: 12.87,
		lemma: "冗談"
	},
	{
		rank: 4587,
		frequency: 12.87,
		lemma: "昼間"
	},
	{
		rank: 4588,
		frequency: 12.86,
		lemma: "バン"
	},
	{
		rank: 4589,
		frequency: 12.86,
		lemma: "絵画"
	},
	{
		rank: 4590,
		frequency: 12.84,
		lemma: "稽古"
	},
	{
		rank: 4591,
		frequency: 12.84,
		lemma: "対戦"
	},
	{
		rank: 4592,
		frequency: 12.84,
		lemma: "来日"
	},
	{
		rank: 4593,
		frequency: 12.83,
		lemma: "循環"
	},
	{
		rank: 4594,
		frequency: 12.83,
		lemma: "萌える"
	},
	{
		rank: 4595,
		frequency: 12.83,
		lemma: "蓄積"
	},
	{
		rank: 4596,
		frequency: 12.83,
		lemma: "小型"
	},
	{
		rank: 4597,
		frequency: 12.83,
		lemma: "クロ"
	},
	{
		rank: 4598,
		frequency: 12.82,
		lemma: "悪魔"
	},
	{
		rank: 4599,
		frequency: 12.82,
		lemma: "オーディオ"
	},
	{
		rank: 4600,
		frequency: 12.81,
		lemma: "モー"
	},
	{
		rank: 4601,
		frequency: 12.81,
		lemma: "海岸"
	},
	{
		rank: 4602,
		frequency: 12.81,
		lemma: "取り戻す"
	},
	{
		rank: 4603,
		frequency: 12.8,
		lemma: "きつい"
	},
	{
		rank: 4604,
		frequency: 12.8,
		lemma: "視野"
	},
	{
		rank: 4605,
		frequency: 12.8,
		lemma: "天井"
	},
	{
		rank: 4606,
		frequency: 12.79,
		lemma: "戸"
	},
	{
		rank: 4607,
		frequency: 12.79,
		lemma: "与党"
	},
	{
		rank: 4608,
		frequency: 12.79,
		lemma: "縦"
	},
	{
		rank: 4609,
		frequency: 12.79,
		lemma: "通販"
	},
	{
		rank: 4610,
		frequency: 12.78,
		lemma: "中華"
	},
	{
		rank: 4611,
		frequency: 12.78,
		lemma: "トレード"
	},
	{
		rank: 4612,
		frequency: 12.78,
		lemma: "ウチ"
	},
	{
		rank: 4613,
		frequency: 12.78,
		lemma: "ワシントン"
	},
	{
		rank: 4614,
		frequency: 12.77,
		lemma: "治安"
	},
	{
		rank: 4615,
		frequency: 12.77,
		lemma: "認証"
	},
	{
		rank: 4616,
		frequency: 12.76,
		lemma: "論点"
	},
	{
		rank: 4617,
		frequency: 12.76,
		lemma: "申告"
	},
	{
		rank: 4618,
		frequency: 12.74,
		lemma: "泊"
	},
	{
		rank: 4619,
		frequency: 12.74,
		lemma: "三月"
	},
	{
		rank: 4620,
		frequency: 12.73,
		lemma: "労働省"
	},
	{
		rank: 4621,
		frequency: 12.73,
		lemma: "出荷"
	},
	{
		rank: 4622,
		frequency: 12.72,
		lemma: "ジョージ"
	},
	{
		rank: 4623,
		frequency: 12.72,
		lemma: "順調"
	},
	{
		rank: 4624,
		frequency: 12.72,
		lemma: "エジプト"
	},
	{
		rank: 4625,
		frequency: 12.71,
		lemma: "官房"
	},
	{
		rank: 4626,
		frequency: 12.71,
		lemma: "満ちる"
	},
	{
		rank: 4627,
		frequency: 12.71,
		lemma: "かい"
	},
	{
		rank: 4628,
		frequency: 12.71,
		lemma: "レンタル"
	},
	{
		rank: 4629,
		frequency: 12.7,
		lemma: "ジーコ"
	},
	{
		rank: 4630,
		frequency: 12.69,
		lemma: "デザイナー"
	},
	{
		rank: 4631,
		frequency: 12.69,
		lemma: "貴方"
	},
	{
		rank: 4632,
		frequency: 12.68,
		lemma: "かえって"
	},
	{
		rank: 4633,
		frequency: 12.67,
		lemma: "飼う"
	},
	{
		rank: 4634,
		frequency: 12.67,
		lemma: "付き合い"
	},
	{
		rank: 4635,
		frequency: 12.66,
		lemma: "シン"
	},
	{
		rank: 4636,
		frequency: 12.66,
		lemma: "補足"
	},
	{
		rank: 4637,
		frequency: 12.66,
		lemma: "小売"
	},
	{
		rank: 4638,
		frequency: 12.66,
		lemma: "撤退"
	},
	{
		rank: 4639,
		frequency: 12.65,
		lemma: "並びに"
	},
	{
		rank: 4640,
		frequency: 12.64,
		lemma: "グリーン"
	},
	{
		rank: 4641,
		frequency: 12.64,
		lemma: "関数"
	},
	{
		rank: 4642,
		frequency: 12.64,
		lemma: "代わる"
	},
	{
		rank: 4643,
		frequency: 12.64,
		lemma: "当面"
	},
	{
		rank: 4644,
		frequency: 12.63,
		lemma: "創設"
	},
	{
		rank: 4645,
		frequency: 12.62,
		lemma: "やりとり"
	},
	{
		rank: 4646,
		frequency: 12.62,
		lemma: "塗る"
	},
	{
		rank: 4647,
		frequency: 12.62,
		lemma: "笋"
	},
	{
		rank: 4648,
		frequency: 12.62,
		lemma: "貧困"
	},
	{
		rank: 4649,
		frequency: 12.62,
		lemma: "なく"
	},
	{
		rank: 4650,
		frequency: 12.62,
		lemma: "著しい"
	},
	{
		rank: 4651,
		frequency: 12.62,
		lemma: "到達"
	},
	{
		rank: 4652,
		frequency: 12.62,
		lemma: "軍隊"
	},
	{
		rank: 4653,
		frequency: 12.62,
		lemma: "勧告"
	},
	{
		rank: 4654,
		frequency: 12.61,
		lemma: "もしも"
	},
	{
		rank: 4655,
		frequency: 12.61,
		lemma: "死者"
	},
	{
		rank: 4656,
		frequency: 12.61,
		lemma: "アイドル"
	},
	{
		rank: 4657,
		frequency: 12.61,
		lemma: "健"
	},
	{
		rank: 4658,
		frequency: 12.6,
		lemma: "満載"
	},
	{
		rank: 4659,
		frequency: 12.59,
		lemma: "スポット"
	},
	{
		rank: 4660,
		frequency: 12.59,
		lemma: "コト"
	},
	{
		rank: 4661,
		frequency: 12.59,
		lemma: "鬚"
	},
	{
		rank: 4662,
		frequency: 12.58,
		lemma: "寿司"
	},
	{
		rank: 4663,
		frequency: 12.57,
		lemma: "討論"
	},
	{
		rank: 4664,
		frequency: 12.57,
		lemma: "英会話"
	},
	{
		rank: 4665,
		frequency: 12.57,
		lemma: "弱"
	},
	{
		rank: 4666,
		frequency: 12.57,
		lemma: "活かす"
	},
	{
		rank: 4667,
		frequency: 12.57,
		lemma: "グレード"
	},
	{
		rank: 4668,
		frequency: 12.56,
		lemma: "ごめん"
	},
	{
		rank: 4669,
		frequency: 12.56,
		lemma: "放棄"
	},
	{
		rank: 4670,
		frequency: 12.56,
		lemma: "歌詞"
	},
	{
		rank: 4671,
		frequency: 12.55,
		lemma: "プリント"
	},
	{
		rank: 4672,
		frequency: 12.54,
		lemma: "いちばん"
	},
	{
		rank: 4673,
		frequency: 12.54,
		lemma: "手間"
	},
	{
		rank: 4674,
		frequency: 12.53,
		lemma: "究極"
	},
	{
		rank: 4675,
		frequency: 12.53,
		lemma: "人民"
	},
	{
		rank: 4676,
		frequency: 12.53,
		lemma: "スーツ"
	},
	{
		rank: 4677,
		frequency: 12.52,
		lemma: "強烈"
	},
	{
		rank: 4678,
		frequency: 12.52,
		lemma: "シングル"
	},
	{
		rank: 4679,
		frequency: 12.51,
		lemma: "仮"
	},
	{
		rank: 4680,
		frequency: 12.5,
		lemma: "本番"
	},
	{
		rank: 4681,
		frequency: 12.5,
		lemma: "数える"
	},
	{
		rank: 4682,
		frequency: 12.49,
		lemma: "迅速"
	},
	{
		rank: 4683,
		frequency: 12.49,
		lemma: "体質"
	},
	{
		rank: 4684,
		frequency: 12.48,
		lemma: "正面"
	},
	{
		rank: 4685,
		frequency: 12.48,
		lemma: "地帯"
	},
	{
		rank: 4686,
		frequency: 12.48,
		lemma: "つまらない"
	},
	{
		rank: 4687,
		frequency: 12.47,
		lemma: "塔"
	},
	{
		rank: 4688,
		frequency: 12.47,
		lemma: "新幹線"
	},
	{
		rank: 4689,
		frequency: 12.45,
		lemma: "南部"
	},
	{
		rank: 4690,
		frequency: 12.44,
		lemma: "収める"
	},
	{
		rank: 4691,
		frequency: 12.44,
		lemma: "天使"
	},
	{
		rank: 4692,
		frequency: 12.43,
		lemma: "メモリ"
	},
	{
		rank: 4693,
		frequency: 12.43,
		lemma: "チョコレート"
	},
	{
		rank: 4694,
		frequency: 12.43,
		lemma: "ポルトガル"
	},
	{
		rank: 4695,
		frequency: 12.43,
		lemma: "創る"
	},
	{
		rank: 4696,
		frequency: 12.42,
		lemma: "役所"
	},
	{
		rank: 4697,
		frequency: 12.42,
		lemma: "定価"
	},
	{
		rank: 4698,
		frequency: 12.42,
		lemma: "本屋"
	},
	{
		rank: 4699,
		frequency: 12.41,
		lemma: "描写"
	},
	{
		rank: 4700,
		frequency: 12.4,
		lemma: "橋本"
	},
	{
		rank: 4701,
		frequency: 12.4,
		lemma: "ポンド"
	},
	{
		rank: 4702,
		frequency: 12.4,
		lemma: "休暇"
	},
	{
		rank: 4703,
		frequency: 12.4,
		lemma: "割る"
	},
	{
		rank: 4704,
		frequency: 12.39,
		lemma: "行方"
	},
	{
		rank: 4705,
		frequency: 12.39,
		lemma: "習う"
	},
	{
		rank: 4706,
		frequency: 12.38,
		lemma: "気が付く"
	},
	{
		rank: 4707,
		frequency: 12.38,
		lemma: "ヽ"
	},
	{
		rank: 4708,
		frequency: 12.38,
		lemma: "土産"
	},
	{
		rank: 4709,
		frequency: 12.38,
		lemma: "あら"
	},
	{
		rank: 4710,
		frequency: 12.38,
		lemma: "奇妙"
	},
	{
		rank: 4711,
		frequency: 12.38,
		lemma: "こいつ"
	},
	{
		rank: 4712,
		frequency: 12.36,
		lemma: "のむ"
	},
	{
		rank: 4713,
		frequency: 12.36,
		lemma: "批評"
	},
	{
		rank: 4714,
		frequency: 12.36,
		lemma: "注ぐ"
	},
	{
		rank: 4715,
		frequency: 12.35,
		lemma: "減"
	},
	{
		rank: 4716,
		frequency: 12.34,
		lemma: "絡む"
	},
	{
		rank: 4717,
		frequency: 12.34,
		lemma: "羽"
	},
	{
		rank: 4718,
		frequency: 12.34,
		lemma: "論争"
	},
	{
		rank: 4719,
		frequency: 12.34,
		lemma: "徒歩"
	},
	{
		rank: 4720,
		frequency: 12.34,
		lemma: "図書"
	},
	{
		rank: 4721,
		frequency: 12.34,
		lemma: "あいだ"
	},
	{
		rank: 4722,
		frequency: 12.33,
		lemma: "披露"
	},
	{
		rank: 4723,
		frequency: 12.33,
		lemma: "コレクション"
	},
	{
		rank: 4724,
		frequency: 12.32,
		lemma: "関"
	},
	{
		rank: 4725,
		frequency: 12.32,
		lemma: "シェア"
	},
	{
		rank: 4726,
		frequency: 12.32,
		lemma: "ターゲット"
	},
	{
		rank: 4727,
		frequency: 12.3,
		lemma: "何故か"
	},
	{
		rank: 4728,
		frequency: 12.3,
		lemma: "別れ"
	},
	{
		rank: 4729,
		frequency: 12.3,
		lemma: "植民"
	},
	{
		rank: 4730,
		frequency: 12.3,
		lemma: "何となく"
	},
	{
		rank: 4731,
		frequency: 12.29,
		lemma: "Ｐ"
	},
	{
		rank: 4732,
		frequency: 12.29,
		lemma: "オレンジ"
	},
	{
		rank: 4733,
		frequency: 12.29,
		lemma: "にもかかわらず"
	},
	{
		rank: 4734,
		frequency: 12.29,
		lemma: "未満"
	},
	{
		rank: 4735,
		frequency: 12.29,
		lemma: "松"
	},
	{
		rank: 4736,
		frequency: 12.29,
		lemma: "長男"
	},
	{
		rank: 4737,
		frequency: 12.28,
		lemma: "好評"
	},
	{
		rank: 4738,
		frequency: 12.27,
		lemma: "怪しい"
	},
	{
		rank: 4739,
		frequency: 12.27,
		lemma: "ライ"
	},
	{
		rank: 4740,
		frequency: 12.27,
		lemma: "ボーナス"
	},
	{
		rank: 4741,
		frequency: 12.27,
		lemma: "参入"
	},
	{
		rank: 4742,
		frequency: 12.27,
		lemma: "した"
	},
	{
		rank: 4743,
		frequency: 12.27,
		lemma: "幻想"
	},
	{
		rank: 4744,
		frequency: 12.26,
		lemma: "例える"
	},
	{
		rank: 4745,
		frequency: 12.26,
		lemma: "学年"
	},
	{
		rank: 4746,
		frequency: 12.25,
		lemma: "セッション"
	},
	{
		rank: 4747,
		frequency: 12.25,
		lemma: "侵略"
	},
	{
		rank: 4748,
		frequency: 12.25,
		lemma: "危ない"
	},
	{
		rank: 4749,
		frequency: 12.25,
		lemma: "用品"
	},
	{
		rank: 4750,
		frequency: 12.25,
		lemma: "缶"
	},
	{
		rank: 4751,
		frequency: 12.25,
		lemma: "砂"
	},
	{
		rank: 4752,
		frequency: 12.25,
		lemma: "プライバシー"
	},
	{
		rank: 4753,
		frequency: 12.25,
		lemma: "したがう"
	},
	{
		rank: 4754,
		frequency: 12.24,
		lemma: "李"
	},
	{
		rank: 4755,
		frequency: 12.24,
		lemma: "ポスター"
	},
	{
		rank: 4756,
		frequency: 12.23,
		lemma: "革新"
	},
	{
		rank: 4757,
		frequency: 12.23,
		lemma: "衝突"
	},
	{
		rank: 4758,
		frequency: 12.23,
		lemma: "匿名"
	},
	{
		rank: 4759,
		frequency: 12.23,
		lemma: "全角"
	},
	{
		rank: 4760,
		frequency: 12.23,
		lemma: "トー"
	},
	{
		rank: 4761,
		frequency: 12.23,
		lemma: "ヤツ"
	},
	{
		rank: 4762,
		frequency: 12.22,
		lemma: "フランス語"
	},
	{
		rank: 4763,
		frequency: 12.22,
		lemma: "偉大"
	},
	{
		rank: 4764,
		frequency: 12.21,
		lemma: "何より"
	},
	{
		rank: 4765,
		frequency: 12.21,
		lemma: "出資"
	},
	{
		rank: 4766,
		frequency: 12.21,
		lemma: "驚き"
	},
	{
		rank: 4767,
		frequency: 12.21,
		lemma: "チップ"
	},
	{
		rank: 4768,
		frequency: 12.21,
		lemma: "シュート"
	},
	{
		rank: 4769,
		frequency: 12.2,
		lemma: "居住"
	},
	{
		rank: 4770,
		frequency: 12.2,
		lemma: "拝見"
	},
	{
		rank: 4771,
		frequency: 12.2,
		lemma: "著書"
	},
	{
		rank: 4772,
		frequency: 12.2,
		lemma: "抽象"
	},
	{
		rank: 4773,
		frequency: 12.19,
		lemma: "孫"
	},
	{
		rank: 4774,
		frequency: 12.19,
		lemma: "治る"
	},
	{
		rank: 4775,
		frequency: 12.18,
		lemma: "理"
	},
	{
		rank: 4776,
		frequency: 12.18,
		lemma: "スクリーン"
	},
	{
		rank: 4777,
		frequency: 12.17,
		lemma: "マッチ"
	},
	{
		rank: 4778,
		frequency: 12.17,
		lemma: "勤める"
	},
	{
		rank: 4779,
		frequency: 12.17,
		lemma: "逆転"
	},
	{
		rank: 4780,
		frequency: 12.15,
		lemma: "きめる"
	},
	{
		rank: 4781,
		frequency: 12.14,
		lemma: "諸君"
	},
	{
		rank: 4782,
		frequency: 12.14,
		lemma: "了解"
	},
	{
		rank: 4783,
		frequency: 12.14,
		lemma: "スイッチ"
	},
	{
		rank: 4784,
		frequency: 12.13,
		lemma: "ボックス"
	},
	{
		rank: 4785,
		frequency: 12.13,
		lemma: "クルマ"
	},
	{
		rank: 4786,
		frequency: 12.13,
		lemma: "隠れる"
	},
	{
		rank: 4787,
		frequency: 12.13,
		lemma: "共和"
	},
	{
		rank: 4788,
		frequency: 12.13,
		lemma: "復興"
	},
	{
		rank: 4789,
		frequency: 12.13,
		lemma: "喫煙"
	},
	{
		rank: 4790,
		frequency: 12.12,
		lemma: "乗り越える"
	},
	{
		rank: 4791,
		frequency: 12.12,
		lemma: "統制"
	},
	{
		rank: 4792,
		frequency: 12.12,
		lemma: "幹事"
	},
	{
		rank: 4793,
		frequency: 12.12,
		lemma: "解散"
	},
	{
		rank: 4794,
		frequency: 12.1,
		lemma: "ランク"
	},
	{
		rank: 4795,
		frequency: 12.1,
		lemma: "蔵"
	},
	{
		rank: 4796,
		frequency: 12.1,
		lemma: "誘導"
	},
	{
		rank: 4797,
		frequency: 12.1,
		lemma: "願い"
	},
	{
		rank: 4798,
		frequency: 12.1,
		lemma: "麺"
	},
	{
		rank: 4799,
		frequency: 12.09,
		lemma: "文法"
	},
	{
		rank: 4800,
		frequency: 12.09,
		lemma: "秩序"
	},
	{
		rank: 4801,
		frequency: 12.08,
		lemma: "争い"
	},
	{
		rank: 4802,
		frequency: 12.08,
		lemma: "チベット"
	},
	{
		rank: 4803,
		frequency: 12.08,
		lemma: "書評"
	},
	{
		rank: 4804,
		frequency: 12.08,
		lemma: "重点"
	},
	{
		rank: 4805,
		frequency: 12.08,
		lemma: "軒"
	},
	{
		rank: 4806,
		frequency: 12.07,
		lemma: "悲劇"
	},
	{
		rank: 4807,
		frequency: 12.06,
		lemma: "怪我"
	},
	{
		rank: 4808,
		frequency: 12.06,
		lemma: "マウス"
	},
	{
		rank: 4809,
		frequency: 12.06,
		lemma: "単独"
	},
	{
		rank: 4810,
		frequency: 12.06,
		lemma: "報じる"
	},
	{
		rank: 4811,
		frequency: 12.05,
		lemma: "年末"
	},
	{
		rank: 4812,
		frequency: 12.05,
		lemma: "即"
	},
	{
		rank: 4813,
		frequency: 12.05,
		lemma: "炎"
	},
	{
		rank: 4814,
		frequency: 12.04,
		lemma: "ごとし"
	},
	{
		rank: 4815,
		frequency: 12.04,
		lemma: "ジャンプ"
	},
	{
		rank: 4816,
		frequency: 12.04,
		lemma: "脂肪"
	},
	{
		rank: 4817,
		frequency: 12.04,
		lemma: "署"
	},
	{
		rank: 4818,
		frequency: 12.04,
		lemma: "会える"
	},
	{
		rank: 4819,
		frequency: 12.03,
		lemma: "縮小"
	},
	{
		rank: 4820,
		frequency: 12.03,
		lemma: "フェ"
	},
	{
		rank: 4821,
		frequency: 12.03,
		lemma: "占領"
	},
	{
		rank: 4822,
		frequency: 12.02,
		lemma: "研"
	},
	{
		rank: 4823,
		frequency: 12.02,
		lemma: "枠組み"
	},
	{
		rank: 4824,
		frequency: 12.02,
		lemma: "規約"
	},
	{
		rank: 4825,
		frequency: 12.01,
		lemma: "共"
	},
	{
		rank: 4826,
		frequency: 12.01,
		lemma: "テイ"
	},
	{
		rank: 4827,
		frequency: 12.01,
		lemma: "携わる"
	},
	{
		rank: 4828,
		frequency: 12.01,
		lemma: "陽"
	},
	{
		rank: 4829,
		frequency: 12,
		lemma: "不法"
	},
	{
		rank: 4830,
		frequency: 12,
		lemma: "ダン"
	},
	{
		rank: 4831,
		frequency: 12,
		lemma: "樹"
	},
	{
		rank: 4832,
		frequency: 12,
		lemma: "トロ"
	},
	{
		rank: 4833,
		frequency: 12,
		lemma: "探偵"
	},
	{
		rank: 4834,
		frequency: 11.99,
		lemma: "しる"
	},
	{
		rank: 4835,
		frequency: 11.99,
		lemma: "農村"
	},
	{
		rank: 4836,
		frequency: 11.98,
		lemma: "進展"
	},
	{
		rank: 4837,
		frequency: 11.98,
		lemma: "倒す"
	},
	{
		rank: 4838,
		frequency: 11.98,
		lemma: "日付"
	},
	{
		rank: 4839,
		frequency: 11.98,
		lemma: "創作"
	},
	{
		rank: 4840,
		frequency: 11.98,
		lemma: "眠い"
	},
	{
		rank: 4841,
		frequency: 11.97,
		lemma: "武装"
	},
	{
		rank: 4842,
		frequency: 11.97,
		lemma: "によりまして"
	},
	{
		rank: 4843,
		frequency: 11.97,
		lemma: "婦人"
	},
	{
		rank: 4844,
		frequency: 11.95,
		lemma: "天国"
	},
	{
		rank: 4845,
		frequency: 11.95,
		lemma: "声明"
	},
	{
		rank: 4846,
		frequency: 11.95,
		lemma: "エル"
	},
	{
		rank: 4847,
		frequency: 11.95,
		lemma: "ケン"
	},
	{
		rank: 4848,
		frequency: 11.95,
		lemma: "構う"
	},
	{
		rank: 4849,
		frequency: 11.94,
		lemma: "ライター"
	},
	{
		rank: 4850,
		frequency: 11.93,
		lemma: "とうとう"
	},
	{
		rank: 4851,
		frequency: 11.93,
		lemma: "美人"
	},
	{
		rank: 4852,
		frequency: 11.93,
		lemma: "贈る"
	},
	{
		rank: 4853,
		frequency: 11.92,
		lemma: "ロス"
	},
	{
		rank: 4854,
		frequency: 11.92,
		lemma: "竹"
	},
	{
		rank: 4855,
		frequency: 11.92,
		lemma: "難い"
	},
	{
		rank: 4856,
		frequency: 11.91,
		lemma: "皮膚"
	},
	{
		rank: 4857,
		frequency: 11.91,
		lemma: "初日"
	},
	{
		rank: 4858,
		frequency: 11.91,
		lemma: "こども"
	},
	{
		rank: 4859,
		frequency: 11.91,
		lemma: "うい"
	},
	{
		rank: 4860,
		frequency: 11.9,
		lemma: "マイケル"
	},
	{
		rank: 4861,
		frequency: 11.9,
		lemma: "どー"
	},
	{
		rank: 4862,
		frequency: 11.89,
		lemma: "とう"
	},
	{
		rank: 4863,
		frequency: 11.89,
		lemma: "下す"
	},
	{
		rank: 4864,
		frequency: 11.89,
		lemma: "Ｒ"
	},
	{
		rank: 4865,
		frequency: 11.89,
		lemma: "みせる"
	},
	{
		rank: 4866,
		frequency: 11.89,
		lemma: "ちょ"
	},
	{
		rank: 4867,
		frequency: 11.88,
		lemma: "平日"
	},
	{
		rank: 4868,
		frequency: 11.88,
		lemma: "お伝え"
	},
	{
		rank: 4869,
		frequency: 11.88,
		lemma: "氷"
	},
	{
		rank: 4870,
		frequency: 11.88,
		lemma: "魔"
	},
	{
		rank: 4871,
		frequency: 11.88,
		lemma: "整える"
	},
	{
		rank: 4872,
		frequency: 11.87,
		lemma: "まことに"
	},
	{
		rank: 4873,
		frequency: 11.87,
		lemma: "公社"
	},
	{
		rank: 4874,
		frequency: 11.87,
		lemma: "推定"
	},
	{
		rank: 4875,
		frequency: 11.87,
		lemma: "振動"
	},
	{
		rank: 4876,
		frequency: 11.86,
		lemma: "リエ"
	},
	{
		rank: 4877,
		frequency: 11.86,
		lemma: "志"
	},
	{
		rank: 4878,
		frequency: 11.85,
		lemma: "回路"
	},
	{
		rank: 4879,
		frequency: 11.85,
		lemma: "外れる"
	},
	{
		rank: 4880,
		frequency: 11.85,
		lemma: "金銭"
	},
	{
		rank: 4881,
		frequency: 11.85,
		lemma: "由来"
	},
	{
		rank: 4882,
		frequency: 11.85,
		lemma: "蓮"
	},
	{
		rank: 4883,
		frequency: 11.84,
		lemma: "東北"
	},
	{
		rank: 4884,
		frequency: 11.84,
		lemma: "孤独"
	},
	{
		rank: 4885,
		frequency: 11.83,
		lemma: "レンズ"
	},
	{
		rank: 4886,
		frequency: 11.83,
		lemma: "ステ"
	},
	{
		rank: 4887,
		frequency: 11.83,
		lemma: "ピンク"
	},
	{
		rank: 4888,
		frequency: 11.82,
		lemma: "トラ"
	},
	{
		rank: 4889,
		frequency: 11.82,
		lemma: "割引"
	},
	{
		rank: 4890,
		frequency: 11.81,
		lemma: "インフルエンザ"
	},
	{
		rank: 4891,
		frequency: 11.81,
		lemma: "崩れる"
	},
	{
		rank: 4892,
		frequency: 11.8,
		lemma: "騒ぐ"
	},
	{
		rank: 4893,
		frequency: 11.8,
		lemma: "暗号"
	},
	{
		rank: 4894,
		frequency: 11.8,
		lemma: "チーズ"
	},
	{
		rank: 4895,
		frequency: 11.8,
		lemma: "共産"
	},
	{
		rank: 4896,
		frequency: 11.8,
		lemma: "ソウル"
	},
	{
		rank: 4897,
		frequency: 11.79,
		lemma: "策定"
	},
	{
		rank: 4898,
		frequency: 11.78,
		lemma: "最中"
	},
	{
		rank: 4899,
		frequency: 11.78,
		lemma: "だし"
	},
	{
		rank: 4900,
		frequency: 11.78,
		lemma: "チャン"
	},
	{
		rank: 4901,
		frequency: 11.78,
		lemma: "公平"
	},
	{
		rank: 4902,
		frequency: 11.78,
		lemma: "負け"
	},
	{
		rank: 4903,
		frequency: 11.77,
		lemma: "アルコール"
	},
	{
		rank: 4904,
		frequency: 11.77,
		lemma: "尚"
	},
	{
		rank: 4905,
		frequency: 11.77,
		lemma: "燃える"
	},
	{
		rank: 4906,
		frequency: 11.76,
		lemma: "謝罪"
	},
	{
		rank: 4907,
		frequency: 11.76,
		lemma: "分間"
	},
	{
		rank: 4908,
		frequency: 11.76,
		lemma: "現時点"
	},
	{
		rank: 4909,
		frequency: 11.76,
		lemma: "助成"
	},
	{
		rank: 4910,
		frequency: 11.76,
		lemma: "衣装"
	},
	{
		rank: 4911,
		frequency: 11.76,
		lemma: "磨く"
	},
	{
		rank: 4912,
		frequency: 11.75,
		lemma: "うどん"
	},
	{
		rank: 4913,
		frequency: 11.75,
		lemma: "エラー"
	},
	{
		rank: 4914,
		frequency: 11.75,
		lemma: "単"
	},
	{
		rank: 4915,
		frequency: 11.74,
		lemma: "改造"
	},
	{
		rank: 4916,
		frequency: 11.74,
		lemma: "照らす"
	},
	{
		rank: 4917,
		frequency: 11.74,
		lemma: "インフラ"
	},
	{
		rank: 4918,
		frequency: 11.74,
		lemma: "國"
	},
	{
		rank: 4919,
		frequency: 11.73,
		lemma: "加速"
	},
	{
		rank: 4920,
		frequency: 11.73,
		lemma: "パーセント"
	},
	{
		rank: 4921,
		frequency: 11.73,
		lemma: "あそこ"
	},
	{
		rank: 4922,
		frequency: 11.73,
		lemma: "メジャー"
	},
	{
		rank: 4923,
		frequency: 11.73,
		lemma: "ポリシー"
	},
	{
		rank: 4924,
		frequency: 11.72,
		lemma: "介入"
	},
	{
		rank: 4925,
		frequency: 11.72,
		lemma: "要する"
	},
	{
		rank: 4926,
		frequency: 11.72,
		lemma: "クール"
	},
	{
		rank: 4927,
		frequency: 11.71,
		lemma: "皿"
	},
	{
		rank: 4928,
		frequency: 11.71,
		lemma: "新作"
	},
	{
		rank: 4929,
		frequency: 11.7,
		lemma: "途上"
	},
	{
		rank: 4930,
		frequency: 11.7,
		lemma: "ふえる"
	},
	{
		rank: 4931,
		frequency: 11.7,
		lemma: "むずかしい"
	},
	{
		rank: 4932,
		frequency: 11.69,
		lemma: "液晶"
	},
	{
		rank: 4933,
		frequency: 11.69,
		lemma: "直"
	},
	{
		rank: 4934,
		frequency: 11.69,
		lemma: "欲望"
	},
	{
		rank: 4935,
		frequency: 11.69,
		lemma: "済ませる"
	},
	{
		rank: 4936,
		frequency: 11.68,
		lemma: "というのも"
	},
	{
		rank: 4937,
		frequency: 11.68,
		lemma: "区域"
	},
	{
		rank: 4938,
		frequency: 11.68,
		lemma: "破綻"
	},
	{
		rank: 4939,
		frequency: 11.66,
		lemma: "スウェーデン"
	},
	{
		rank: 4940,
		frequency: 11.65,
		lemma: "だい"
	},
	{
		rank: 4941,
		frequency: 11.65,
		lemma: "鑑定"
	},
	{
		rank: 4942,
		frequency: 11.64,
		lemma: "マイク"
	},
	{
		rank: 4943,
		frequency: 11.64,
		lemma: "盗む"
	},
	{
		rank: 4944,
		frequency: 11.63,
		lemma: "保管"
	},
	{
		rank: 4945,
		frequency: 11.63,
		lemma: "Ｎ"
	},
	{
		rank: 4946,
		frequency: 11.62,
		lemma: "若手"
	},
	{
		rank: 4947,
		frequency: 11.61,
		lemma: "リサイクル"
	},
	{
		rank: 4948,
		frequency: 11.61,
		lemma: "鋭い"
	},
	{
		rank: 4949,
		frequency: 11.61,
		lemma: "何と"
	},
	{
		rank: 4950,
		frequency: 11.6,
		lemma: "手伝う"
	},
	{
		rank: 4951,
		frequency: 11.59,
		lemma: "パレスチナ"
	},
	{
		rank: 4952,
		frequency: 11.59,
		lemma: "無意識"
	},
	{
		rank: 4953,
		frequency: 11.59,
		lemma: "ペーパー"
	},
	{
		rank: 4954,
		frequency: 11.59,
		lemma: "いまだに"
	},
	{
		rank: 4955,
		frequency: 11.59,
		lemma: "まとめ"
	},
	{
		rank: 4956,
		frequency: 11.58,
		lemma: "公害"
	},
	{
		rank: 4957,
		frequency: 11.58,
		lemma: "会館"
	},
	{
		rank: 4958,
		frequency: 11.58,
		lemma: "つぶやく"
	},
	{
		rank: 4959,
		frequency: 11.58,
		lemma: "不十分"
	},
	{
		rank: 4960,
		frequency: 11.57,
		lemma: "映画館"
	},
	{
		rank: 4961,
		frequency: 11.57,
		lemma: "スコットランド"
	},
	{
		rank: 4962,
		frequency: 11.57,
		lemma: "事柄"
	},
	{
		rank: 4963,
		frequency: 11.57,
		lemma: "ローカル"
	},
	{
		rank: 4964,
		frequency: 11.57,
		lemma: "異議"
	},
	{
		rank: 4965,
		frequency: 11.57,
		lemma: "法廷"
	},
	{
		rank: 4966,
		frequency: 11.56,
		lemma: "平気"
	},
	{
		rank: 4967,
		frequency: 11.55,
		lemma: "‘"
	},
	{
		rank: 4968,
		frequency: 11.55,
		lemma: "移住"
	},
	{
		rank: 4969,
		frequency: 11.55,
		lemma: "処置"
	},
	{
		rank: 4970,
		frequency: 11.55,
		lemma: "悔しい"
	},
	{
		rank: 4971,
		frequency: 11.55,
		lemma: "留学生"
	},
	{
		rank: 4972,
		frequency: 11.55,
		lemma: "従事"
	},
	{
		rank: 4973,
		frequency: 11.54,
		lemma: "もったいない"
	},
	{
		rank: 4974,
		frequency: 11.54,
		lemma: "デバイス"
	},
	{
		rank: 4975,
		frequency: 11.54,
		lemma: "敷地"
	},
	{
		rank: 4976,
		frequency: 11.54,
		lemma: "分散"
	},
	{
		rank: 4977,
		frequency: 11.53,
		lemma: "ドライバー"
	},
	{
		rank: 4978,
		frequency: 11.53,
		lemma: "とかいう"
	},
	{
		rank: 4979,
		frequency: 11.53,
		lemma: "分科"
	},
	{
		rank: 4980,
		frequency: 11.53,
		lemma: "モバイル"
	},
	{
		rank: 4981,
		frequency: 11.53,
		lemma: "発足"
	},
	{
		rank: 4982,
		frequency: 11.53,
		lemma: "しょうが"
	},
	{
		rank: 4983,
		frequency: 11.52,
		lemma: "しかる"
	},
	{
		rank: 4984,
		frequency: 11.52,
		lemma: "棚"
	},
	{
		rank: 4985,
		frequency: 11.51,
		lemma: "突入"
	},
	{
		rank: 4986,
		frequency: 11.51,
		lemma: "すみません"
	},
	{
		rank: 4987,
		frequency: 11.51,
		lemma: "室内"
	},
	{
		rank: 4988,
		frequency: 11.5,
		lemma: "走行"
	},
	{
		rank: 4989,
		frequency: 11.5,
		lemma: "姉妹"
	},
	{
		rank: 4990,
		frequency: 11.49,
		lemma: "議事"
	},
	{
		rank: 4991,
		frequency: 11.49,
		lemma: "文部"
	},
	{
		rank: 4992,
		frequency: 11.48,
		lemma: "づらい"
	},
	{
		rank: 4993,
		frequency: 11.48,
		lemma: "かよう"
	},
	{
		rank: 4994,
		frequency: 11.48,
		lemma: "観念"
	},
	{
		rank: 4995,
		frequency: 11.48,
		lemma: "未だに"
	},
	{
		rank: 4996,
		frequency: 11.48,
		lemma: "調べ"
	},
	{
		rank: 4997,
		frequency: 11.48,
		lemma: "歌手"
	},
	{
		rank: 4998,
		frequency: 11.48,
		lemma: "臨床"
	},
	{
		rank: 4999,
		frequency: 11.47,
		lemma: "上下"
	},
	{
		rank: 5000,
		frequency: 11.47,
		lemma: "くせ"
	},
	{
		rank: 5001,
		frequency: 11.47,
		lemma: "学術"
	},
	{
		rank: 5002,
		frequency: 11.47,
		lemma: "電池"
	},
	{
		rank: 5003,
		frequency: 11.46,
		lemma: "履歴"
	},
	{
		rank: 5004,
		frequency: 11.45,
		lemma: "解雇"
	},
	{
		rank: 5005,
		frequency: 11.45,
		lemma: "先月"
	},
	{
		rank: 5006,
		frequency: 11.44,
		lemma: "コール"
	},
	{
		rank: 5007,
		frequency: 11.44,
		lemma: "{"
	},
	{
		rank: 5008,
		frequency: 11.44,
		lemma: "川崎"
	},
	{
		rank: 5009,
		frequency: 11.42,
		lemma: "インテリア"
	},
	{
		rank: 5010,
		frequency: 11.42,
		lemma: "家電"
	},
	{
		rank: 5011,
		frequency: 11.42,
		lemma: "爆弾"
	},
	{
		rank: 5012,
		frequency: 11.42,
		lemma: "マル"
	},
	{
		rank: 5013,
		frequency: 11.42,
		lemma: "店内"
	},
	{
		rank: 5014,
		frequency: 11.42,
		lemma: "漂う"
	},
	{
		rank: 5015,
		frequency: 11.41,
		lemma: "周"
	},
	{
		rank: 5016,
		frequency: 11.4,
		lemma: "おお"
	},
	{
		rank: 5017,
		frequency: 11.4,
		lemma: "言い訳"
	},
	{
		rank: 5018,
		frequency: 11.4,
		lemma: "同期"
	},
	{
		rank: 5019,
		frequency: 11.39,
		lemma: "移植"
	},
	{
		rank: 5020,
		frequency: 11.39,
		lemma: "ジャック"
	},
	{
		rank: 5021,
		frequency: 11.38,
		lemma: "施工"
	},
	{
		rank: 5022,
		frequency: 11.38,
		lemma: "自国"
	},
	{
		rank: 5023,
		frequency: 11.38,
		lemma: "セール"
	},
	{
		rank: 5024,
		frequency: 11.38,
		lemma: "理屈"
	},
	{
		rank: 5025,
		frequency: 11.38,
		lemma: "収容"
	},
	{
		rank: 5026,
		frequency: 11.38,
		lemma: "全身"
	},
	{
		rank: 5027,
		frequency: 11.38,
		lemma: "示唆"
	},
	{
		rank: 5028,
		frequency: 11.37,
		lemma: "惹く"
	},
	{
		rank: 5029,
		frequency: 11.37,
		lemma: "率直"
	},
	{
		rank: 5030,
		frequency: 11.37,
		lemma: "耐震"
	},
	{
		rank: 5031,
		frequency: 11.37,
		lemma: "駅前"
	},
	{
		rank: 5032,
		frequency: 11.37,
		lemma: "Ｊ"
	},
	{
		rank: 5033,
		frequency: 11.36,
		lemma: "いったん"
	},
	{
		rank: 5034,
		frequency: 11.36,
		lemma: "報"
	},
	{
		rank: 5035,
		frequency: 11.36,
		lemma: "儲かる"
	},
	{
		rank: 5036,
		frequency: 11.35,
		lemma: "伝"
	},
	{
		rank: 5037,
		frequency: 11.35,
		lemma: "職務"
	},
	{
		rank: 5038,
		frequency: 11.35,
		lemma: "商標"
	},
	{
		rank: 5039,
		frequency: 11.35,
		lemma: "あつい"
	},
	{
		rank: 5040,
		frequency: 11.35,
		lemma: "絶望"
	},
	{
		rank: 5041,
		frequency: 11.34,
		lemma: "食堂"
	},
	{
		rank: 5042,
		frequency: 11.34,
		lemma: "連休"
	},
	{
		rank: 5043,
		frequency: 11.33,
		lemma: "何とも"
	},
	{
		rank: 5044,
		frequency: 11.32,
		lemma: "マス"
	},
	{
		rank: 5045,
		frequency: 11.32,
		lemma: "イイ"
	},
	{
		rank: 5046,
		frequency: 11.31,
		lemma: "予備"
	},
	{
		rank: 5047,
		frequency: 11.31,
		lemma: "入社"
	},
	{
		rank: 5048,
		frequency: 11.31,
		lemma: "イングランド"
	},
	{
		rank: 5049,
		frequency: 11.31,
		lemma: "晴れる"
	},
	{
		rank: 5050,
		frequency: 11.3,
		lemma: "部会"
	},
	{
		rank: 5051,
		frequency: 11.3,
		lemma: "グランド"
	},
	{
		rank: 5052,
		frequency: 11.3,
		lemma: "出勤"
	},
	{
		rank: 5053,
		frequency: 11.29,
		lemma: "警戒"
	},
	{
		rank: 5054,
		frequency: 11.29,
		lemma: "オーバー"
	},
	{
		rank: 5055,
		frequency: 11.28,
		lemma: "トヨタ"
	},
	{
		rank: 5056,
		frequency: 11.28,
		lemma: "だく"
	},
	{
		rank: 5057,
		frequency: 11.28,
		lemma: "イス"
	},
	{
		rank: 5058,
		frequency: 11.27,
		lemma: "引き出す"
	},
	{
		rank: 5059,
		frequency: 11.27,
		lemma: "融合"
	},
	{
		rank: 5060,
		frequency: 11.27,
		lemma: "棒"
	},
	{
		rank: 5061,
		frequency: 11.27,
		lemma: "お送り"
	},
	{
		rank: 5062,
		frequency: 11.27,
		lemma: "返済"
	},
	{
		rank: 5063,
		frequency: 11.26,
		lemma: "外務"
	},
	{
		rank: 5064,
		frequency: 11.25,
		lemma: "どうか"
	},
	{
		rank: 5065,
		frequency: 11.25,
		lemma: "省庁"
	},
	{
		rank: 5066,
		frequency: 11.25,
		lemma: "付属"
	},
	{
		rank: 5067,
		frequency: 11.25,
		lemma: "犯"
	},
	{
		rank: 5068,
		frequency: 11.25,
		lemma: "助かる"
	},
	{
		rank: 5069,
		frequency: 11.25,
		lemma: "露"
	},
	{
		rank: 5070,
		frequency: 11.24,
		lemma: "組み合わせる"
	},
	{
		rank: 5071,
		frequency: 11.24,
		lemma: "かれる"
	},
	{
		rank: 5072,
		frequency: 11.24,
		lemma: "泊まる"
	},
	{
		rank: 5073,
		frequency: 11.23,
		lemma: "芝居"
	},
	{
		rank: 5074,
		frequency: 11.23,
		lemma: "節約"
	},
	{
		rank: 5075,
		frequency: 11.22,
		lemma: "メイド"
	},
	{
		rank: 5076,
		frequency: 11.22,
		lemma: "値上げ"
	},
	{
		rank: 5077,
		frequency: 11.22,
		lemma: "またまた"
	},
	{
		rank: 5078,
		frequency: 11.21,
		lemma: "火曜日"
	},
	{
		rank: 5079,
		frequency: 11.21,
		lemma: "清水"
	},
	{
		rank: 5080,
		frequency: 11.21,
		lemma: "ウソ"
	},
	{
		rank: 5081,
		frequency: 11.21,
		lemma: "手前"
	},
	{
		rank: 5082,
		frequency: 11.21,
		lemma: "あい"
	},
	{
		rank: 5083,
		frequency: 11.21,
		lemma: "司会"
	},
	{
		rank: 5084,
		frequency: 11.2,
		lemma: "防衛庁"
	},
	{
		rank: 5085,
		frequency: 11.2,
		lemma: "湯"
	},
	{
		rank: 5086,
		frequency: 11.2,
		lemma: "ゼミ"
	},
	{
		rank: 5087,
		frequency: 11.19,
		lemma: "手作り"
	},
	{
		rank: 5088,
		frequency: 11.19,
		lemma: "いい加減"
	},
	{
		rank: 5089,
		frequency: 11.18,
		lemma: "惑星"
	},
	{
		rank: 5090,
		frequency: 11.18,
		lemma: "岡田"
	},
	{
		rank: 5091,
		frequency: 11.18,
		lemma: "合同"
	},
	{
		rank: 5092,
		frequency: 11.17,
		lemma: "主導"
	},
	{
		rank: 5093,
		frequency: 11.17,
		lemma: "ＯＫ"
	},
	{
		rank: 5094,
		frequency: 11.17,
		lemma: "わく"
	},
	{
		rank: 5095,
		frequency: 11.17,
		lemma: "治"
	},
	{
		rank: 5096,
		frequency: 11.17,
		lemma: "善"
	},
	{
		rank: 5097,
		frequency: 11.17,
		lemma: "ソロ"
	},
	{
		rank: 5098,
		frequency: 11.17,
		lemma: "部下"
	},
	{
		rank: 5099,
		frequency: 11.17,
		lemma: "公団"
	},
	{
		rank: 5100,
		frequency: 11.16,
		lemma: "かまう"
	},
	{
		rank: 5101,
		frequency: 11.15,
		lemma: "吐く"
	},
	{
		rank: 5102,
		frequency: 11.14,
		lemma: "クロス"
	},
	{
		rank: 5103,
		frequency: 11.14,
		lemma: "習得"
	},
	{
		rank: 5104,
		frequency: 11.14,
		lemma: "直面"
	},
	{
		rank: 5105,
		frequency: 11.14,
		lemma: "高知"
	},
	{
		rank: 5106,
		frequency: 11.14,
		lemma: "さくら"
	},
	{
		rank: 5107,
		frequency: 11.14,
		lemma: "アルゼンチン"
	},
	{
		rank: 5108,
		frequency: 11.14,
		lemma: "コミック"
	},
	{
		rank: 5109,
		frequency: 11.14,
		lemma: "談"
	},
	{
		rank: 5110,
		frequency: 11.13,
		lemma: "転送"
	},
	{
		rank: 5111,
		frequency: 11.13,
		lemma: "ギリシャ"
	},
	{
		rank: 5112,
		frequency: 11.13,
		lemma: "セリフ"
	},
	{
		rank: 5113,
		frequency: 11.13,
		lemma: "校長"
	},
	{
		rank: 5114,
		frequency: 11.12,
		lemma: "ボー"
	},
	{
		rank: 5115,
		frequency: 11.12,
		lemma: "華"
	},
	{
		rank: 5116,
		frequency: 11.12,
		lemma: "域"
	},
	{
		rank: 5117,
		frequency: 11.12,
		lemma: "検察"
	},
	{
		rank: 5118,
		frequency: 11.12,
		lemma: "踊り"
	},
	{
		rank: 5119,
		frequency: 11.12,
		lemma: "無限"
	},
	{
		rank: 5120,
		frequency: 11.11,
		lemma: "両国"
	},
	{
		rank: 5121,
		frequency: 11.1,
		lemma: "助け"
	},
	{
		rank: 5122,
		frequency: 11.1,
		lemma: "農林"
	},
	{
		rank: 5123,
		frequency: 11.1,
		lemma: "スペシャル"
	},
	{
		rank: 5124,
		frequency: 11.1,
		lemma: "統治"
	},
	{
		rank: 5125,
		frequency: 11.09,
		lemma: "純"
	},
	{
		rank: 5126,
		frequency: 11.09,
		lemma: "早朝"
	},
	{
		rank: 5127,
		frequency: 11.09,
		lemma: "福島"
	},
	{
		rank: 5128,
		frequency: 11.09,
		lemma: "県内"
	},
	{
		rank: 5129,
		frequency: 11.09,
		lemma: "良"
	},
	{
		rank: 5130,
		frequency: 11.08,
		lemma: "史上"
	},
	{
		rank: 5131,
		frequency: 11.07,
		lemma: "背後"
	},
	{
		rank: 5132,
		frequency: 11.07,
		lemma: "間接"
	},
	{
		rank: 5133,
		frequency: 11.05,
		lemma: "トマト"
	},
	{
		rank: 5134,
		frequency: 11.05,
		lemma: "粉"
	},
	{
		rank: 5135,
		frequency: 11.05,
		lemma: "後日"
	},
	{
		rank: 5136,
		frequency: 11.05,
		lemma: "感性"
	},
	{
		rank: 5137,
		frequency: 11.05,
		lemma: "モニター"
	},
	{
		rank: 5138,
		frequency: 11.04,
		lemma: "めざす"
	},
	{
		rank: 5139,
		frequency: 11.04,
		lemma: "省略"
	},
	{
		rank: 5140,
		frequency: 11.03,
		lemma: "無効"
	},
	{
		rank: 5141,
		frequency: 11.02,
		lemma: "剛"
	},
	{
		rank: 5142,
		frequency: 11.02,
		lemma: "騙す"
	},
	{
		rank: 5143,
		frequency: 11.02,
		lemma: "オイル"
	},
	{
		rank: 5144,
		frequency: 11.02,
		lemma: "王国"
	},
	{
		rank: 5145,
		frequency: 11.01,
		lemma: "}"
	},
	{
		rank: 5146,
		frequency: 11.01,
		lemma: "速報"
	},
	{
		rank: 5147,
		frequency: 11.01,
		lemma: "バイ"
	},
	{
		rank: 5148,
		frequency: 11.01,
		lemma: "郊外"
	},
	{
		rank: 5149,
		frequency: 11.01,
		lemma: "代金"
	},
	{
		rank: 5150,
		frequency: 11,
		lemma: "ネコ"
	},
	{
		rank: 5151,
		frequency: 10.99,
		lemma: "歩む"
	},
	{
		rank: 5152,
		frequency: 10.97,
		lemma: "そこそこ"
	},
	{
		rank: 5153,
		frequency: 10.97,
		lemma: "能"
	},
	{
		rank: 5154,
		frequency: 10.97,
		lemma: "似合う"
	},
	{
		rank: 5155,
		frequency: 10.97,
		lemma: "やって来る"
	},
	{
		rank: 5156,
		frequency: 10.97,
		lemma: "彼等"
	},
	{
		rank: 5157,
		frequency: 10.96,
		lemma: "植える"
	},
	{
		rank: 5158,
		frequency: 10.96,
		lemma: "使命"
	},
	{
		rank: 5159,
		frequency: 10.96,
		lemma: "財団"
	},
	{
		rank: 5160,
		frequency: 10.96,
		lemma: "五月"
	},
	{
		rank: 5161,
		frequency: 10.96,
		lemma: "戦前"
	},
	{
		rank: 5162,
		frequency: 10.96,
		lemma: "故障"
	},
	{
		rank: 5163,
		frequency: 10.95,
		lemma: "ポケット"
	},
	{
		rank: 5164,
		frequency: 10.95,
		lemma: "他方"
	},
	{
		rank: 5165,
		frequency: 10.95,
		lemma: "メカニズム"
	},
	{
		rank: 5166,
		frequency: 10.95,
		lemma: "カッコ"
	},
	{
		rank: 5167,
		frequency: 10.95,
		lemma: "答申"
	},
	{
		rank: 5168,
		frequency: 10.94,
		lemma: "直ちに"
	},
	{
		rank: 5169,
		frequency: 10.94,
		lemma: "境界"
	},
	{
		rank: 5170,
		frequency: 10.92,
		lemma: "毒"
	},
	{
		rank: 5171,
		frequency: 10.91,
		lemma: "どこか"
	},
	{
		rank: 5172,
		frequency: 10.91,
		lemma: "ぶつかる"
	},
	{
		rank: 5173,
		frequency: 10.91,
		lemma: "用途"
	},
	{
		rank: 5174,
		frequency: 10.91,
		lemma: "真理"
	},
	{
		rank: 5175,
		frequency: 10.91,
		lemma: "誇り"
	},
	{
		rank: 5176,
		frequency: 10.9,
		lemma: "要約"
	},
	{
		rank: 5177,
		frequency: 10.9,
		lemma: "盛り込む"
	},
	{
		rank: 5178,
		frequency: 10.9,
		lemma: "石川"
	},
	{
		rank: 5179,
		frequency: 10.89,
		lemma: "ブラ"
	},
	{
		rank: 5180,
		frequency: 10.89,
		lemma: "王子"
	},
	{
		rank: 5181,
		frequency: 10.89,
		lemma: "仮説"
	},
	{
		rank: 5182,
		frequency: 10.89,
		lemma: "引き上げる"
	},
	{
		rank: 5183,
		frequency: 10.89,
		lemma: "アップル"
	},
	{
		rank: 5184,
		frequency: 10.89,
		lemma: "伸び"
	},
	{
		rank: 5185,
		frequency: 10.89,
		lemma: "宅"
	},
	{
		rank: 5186,
		frequency: 10.88,
		lemma: "キャンパス"
	},
	{
		rank: 5187,
		frequency: 10.88,
		lemma: "さっぱり"
	},
	{
		rank: 5188,
		frequency: 10.88,
		lemma: "用紙"
	},
	{
		rank: 5189,
		frequency: 10.87,
		lemma: "出来"
	},
	{
		rank: 5190,
		frequency: 10.87,
		lemma: "講じる"
	},
	{
		rank: 5191,
		frequency: 10.87,
		lemma: "易い"
	},
	{
		rank: 5192,
		frequency: 10.86,
		lemma: "味方"
	},
	{
		rank: 5193,
		frequency: 10.86,
		lemma: "癖"
	},
	{
		rank: 5194,
		frequency: 10.86,
		lemma: "押さえる"
	},
	{
		rank: 5195,
		frequency: 10.86,
		lemma: "主役"
	},
	{
		rank: 5196,
		frequency: 10.85,
		lemma: "布"
	},
	{
		rank: 5197,
		frequency: 10.85,
		lemma: "国産"
	},
	{
		rank: 5198,
		frequency: 10.85,
		lemma: "一環"
	},
	{
		rank: 5199,
		frequency: 10.85,
		lemma: "ついで"
	},
	{
		rank: 5200,
		frequency: 10.84,
		lemma: "喋る"
	},
	{
		rank: 5201,
		frequency: 10.84,
		lemma: "へる"
	},
	{
		rank: 5202,
		frequency: 10.83,
		lemma: "英文"
	},
	{
		rank: 5203,
		frequency: 10.83,
		lemma: "類似"
	},
	{
		rank: 5204,
		frequency: 10.83,
		lemma: "届ける"
	},
	{
		rank: 5205,
		frequency: 10.83,
		lemma: "詰まる"
	},
	{
		rank: 5206,
		frequency: 10.83,
		lemma: "揃える"
	},
	{
		rank: 5207,
		frequency: 10.82,
		lemma: "軽減"
	},
	{
		rank: 5208,
		frequency: 10.82,
		lemma: "蹴る"
	},
	{
		rank: 5209,
		frequency: 10.81,
		lemma: "あっという間に"
	},
	{
		rank: 5210,
		frequency: 10.81,
		lemma: "様式"
	},
	{
		rank: 5211,
		frequency: 10.81,
		lemma: "任務"
	},
	{
		rank: 5212,
		frequency: 10.81,
		lemma: "跡"
	},
	{
		rank: 5213,
		frequency: 10.81,
		lemma: "ベン"
	},
	{
		rank: 5214,
		frequency: 10.8,
		lemma: "守備"
	},
	{
		rank: 5215,
		frequency: 10.8,
		lemma: "制裁"
	},
	{
		rank: 5216,
		frequency: 10.8,
		lemma: "幕"
	},
	{
		rank: 5217,
		frequency: 10.8,
		lemma: "在"
	},
	{
		rank: 5218,
		frequency: 10.8,
		lemma: "兵庫"
	},
	{
		rank: 5219,
		frequency: 10.79,
		lemma: "サウンド"
	},
	{
		rank: 5220,
		frequency: 10.79,
		lemma: "教養"
	},
	{
		rank: 5221,
		frequency: 10.79,
		lemma: "沿い"
	},
	{
		rank: 5222,
		frequency: 10.78,
		lemma: "トム"
	},
	{
		rank: 5223,
		frequency: 10.78,
		lemma: "侵入"
	},
	{
		rank: 5224,
		frequency: 10.78,
		lemma: "Ｙ"
	},
	{
		rank: 5225,
		frequency: 10.78,
		lemma: "にわたる"
	},
	{
		rank: 5226,
		frequency: 10.77,
		lemma: "ちがう"
	},
	{
		rank: 5227,
		frequency: 10.76,
		lemma: "光る"
	},
	{
		rank: 5228,
		frequency: 10.76,
		lemma: "予感"
	},
	{
		rank: 5229,
		frequency: 10.75,
		lemma: "リア"
	},
	{
		rank: 5230,
		frequency: 10.75,
		lemma: "的確"
	},
	{
		rank: 5231,
		frequency: 10.75,
		lemma: "雑貨"
	},
	{
		rank: 5232,
		frequency: 10.75,
		lemma: "ユニット"
	},
	{
		rank: 5233,
		frequency: 10.75,
		lemma: "互いに"
	},
	{
		rank: 5234,
		frequency: 10.75,
		lemma: "肝心"
	},
	{
		rank: 5235,
		frequency: 10.75,
		lemma: "狙い"
	},
	{
		rank: 5236,
		frequency: 10.74,
		lemma: "訳す"
	},
	{
		rank: 5237,
		frequency: 10.74,
		lemma: "前進"
	},
	{
		rank: 5238,
		frequency: 10.74,
		lemma: "在り方"
	},
	{
		rank: 5239,
		frequency: 10.73,
		lemma: "温暖"
	},
	{
		rank: 5240,
		frequency: 10.73,
		lemma: "予報"
	},
	{
		rank: 5241,
		frequency: 10.73,
		lemma: "フェア"
	},
	{
		rank: 5242,
		frequency: 10.73,
		lemma: "遅れ"
	},
	{
		rank: 5243,
		frequency: 10.73,
		lemma: "こころ"
	},
	{
		rank: 5244,
		frequency: 10.73,
		lemma: "浸透"
	},
	{
		rank: 5245,
		frequency: 10.72,
		lemma: "ミュージック"
	},
	{
		rank: 5246,
		frequency: 10.71,
		lemma: "最高裁"
	},
	{
		rank: 5247,
		frequency: 10.71,
		lemma: "係"
	},
	{
		rank: 5248,
		frequency: 10.71,
		lemma: "警察官"
	},
	{
		rank: 5249,
		frequency: 10.7,
		lemma: "利"
	},
	{
		rank: 5250,
		frequency: 10.7,
		lemma: "法制"
	},
	{
		rank: 5251,
		frequency: 10.7,
		lemma: "照明"
	},
	{
		rank: 5252,
		frequency: 10.68,
		lemma: "バックアップ"
	},
	{
		rank: 5253,
		frequency: 10.68,
		lemma: "調"
	},
	{
		rank: 5254,
		frequency: 10.68,
		lemma: "キッチン"
	},
	{
		rank: 5255,
		frequency: 10.68,
		lemma: "通用"
	},
	{
		rank: 5256,
		frequency: 10.68,
		lemma: "クス"
	},
	{
		rank: 5257,
		frequency: 10.68,
		lemma: "クリ"
	},
	{
		rank: 5258,
		frequency: 10.67,
		lemma: "キャッシュ"
	},
	{
		rank: 5259,
		frequency: 10.67,
		lemma: "あらためて"
	},
	{
		rank: 5260,
		frequency: 10.67,
		lemma: "付加"
	},
	{
		rank: 5261,
		frequency: 10.67,
		lemma: "木曜日"
	},
	{
		rank: 5262,
		frequency: 10.67,
		lemma: "施す"
	},
	{
		rank: 5263,
		frequency: 10.67,
		lemma: "答"
	},
	{
		rank: 5264,
		frequency: 10.66,
		lemma: "推移"
	},
	{
		rank: 5265,
		frequency: 10.66,
		lemma: "繰り返し"
	},
	{
		rank: 5266,
		frequency: 10.66,
		lemma: "こだわり"
	},
	{
		rank: 5267,
		frequency: 10.66,
		lemma: "京"
	},
	{
		rank: 5268,
		frequency: 10.65,
		lemma: "本音"
	},
	{
		rank: 5269,
		frequency: 10.65,
		lemma: "回線"
	},
	{
		rank: 5270,
		frequency: 10.65,
		lemma: "スムーズ"
	},
	{
		rank: 5271,
		frequency: 10.64,
		lemma: "ばあちゃん"
	},
	{
		rank: 5272,
		frequency: 10.64,
		lemma: "色んな"
	},
	{
		rank: 5273,
		frequency: 10.64,
		lemma: "飛び出す"
	},
	{
		rank: 5274,
		frequency: 10.64,
		lemma: "まし"
	},
	{
		rank: 5275,
		frequency: 10.64,
		lemma: "最大限"
	},
	{
		rank: 5276,
		frequency: 10.64,
		lemma: "温かい"
	},
	{
		rank: 5277,
		frequency: 10.63,
		lemma: "おい"
	},
	{
		rank: 5278,
		frequency: 10.63,
		lemma: "何事"
	},
	{
		rank: 5279,
		frequency: 10.63,
		lemma: "タッチ"
	},
	{
		rank: 5280,
		frequency: 10.63,
		lemma: "合"
	},
	{
		rank: 5281,
		frequency: 10.63,
		lemma: "解"
	},
	{
		rank: 5282,
		frequency: 10.63,
		lemma: "調和"
	},
	{
		rank: 5283,
		frequency: 10.63,
		lemma: "煙"
	},
	{
		rank: 5284,
		frequency: 10.63,
		lemma: "信託"
	},
	{
		rank: 5285,
		frequency: 10.62,
		lemma: "ぴったり"
	},
	{
		rank: 5286,
		frequency: 10.62,
		lemma: "一月"
	},
	{
		rank: 5287,
		frequency: 10.62,
		lemma: "担保"
	},
	{
		rank: 5288,
		frequency: 10.62,
		lemma: "課程"
	},
	{
		rank: 5289,
		frequency: 10.62,
		lemma: "案件"
	},
	{
		rank: 5290,
		frequency: 10.61,
		lemma: "バトン"
	},
	{
		rank: 5291,
		frequency: 10.61,
		lemma: "信"
	},
	{
		rank: 5292,
		frequency: 10.61,
		lemma: "地裁"
	},
	{
		rank: 5293,
		frequency: 10.61,
		lemma: "欠陥"
	},
	{
		rank: 5294,
		frequency: 10.61,
		lemma: "肯定"
	},
	{
		rank: 5295,
		frequency: 10.61,
		lemma: "に当たって"
	},
	{
		rank: 5296,
		frequency: 10.61,
		lemma: "キス"
	},
	{
		rank: 5297,
		frequency: 10.61,
		lemma: "有限"
	},
	{
		rank: 5298,
		frequency: 10.61,
		lemma: "発注"
	},
	{
		rank: 5299,
		frequency: 10.6,
		lemma: "業種"
	},
	{
		rank: 5300,
		frequency: 10.6,
		lemma: "森林"
	},
	{
		rank: 5301,
		frequency: 10.6,
		lemma: "牛乳"
	},
	{
		rank: 5302,
		frequency: 10.6,
		lemma: "決定的"
	},
	{
		rank: 5303,
		frequency: 10.6,
		lemma: "見込み"
	},
	{
		rank: 5304,
		frequency: 10.6,
		lemma: "みえる"
	},
	{
		rank: 5305,
		frequency: 10.59,
		lemma: "法令"
	},
	{
		rank: 5306,
		frequency: 10.59,
		lemma: "バイオ"
	},
	{
		rank: 5307,
		frequency: 10.59,
		lemma: "シンガポール"
	},
	{
		rank: 5308,
		frequency: 10.59,
		lemma: "試し"
	},
	{
		rank: 5309,
		frequency: 10.59,
		lemma: "その間"
	},
	{
		rank: 5310,
		frequency: 10.59,
		lemma: "ジュース"
	},
	{
		rank: 5311,
		frequency: 10.58,
		lemma: "ロング"
	},
	{
		rank: 5312,
		frequency: 10.58,
		lemma: "地点"
	},
	{
		rank: 5313,
		frequency: 10.58,
		lemma: "糸"
	},
	{
		rank: 5314,
		frequency: 10.58,
		lemma: "レシピ"
	},
	{
		rank: 5315,
		frequency: 10.58,
		lemma: "背負う"
	},
	{
		rank: 5316,
		frequency: 10.58,
		lemma: "欲"
	},
	{
		rank: 5317,
		frequency: 10.57,
		lemma: "独"
	},
	{
		rank: 5318,
		frequency: 10.57,
		lemma: "インパクト"
	},
	{
		rank: 5319,
		frequency: 10.57,
		lemma: "少子化"
	},
	{
		rank: 5320,
		frequency: 10.57,
		lemma: "くい"
	},
	{
		rank: 5321,
		frequency: 10.57,
		lemma: "サブ"
	},
	{
		rank: 5322,
		frequency: 10.57,
		lemma: "柔らかい"
	},
	{
		rank: 5323,
		frequency: 10.56,
		lemma: "ドット"
	},
	{
		rank: 5324,
		frequency: 10.55,
		lemma: "辿る"
	},
	{
		rank: 5325,
		frequency: 10.55,
		lemma: "かなう"
	},
	{
		rank: 5326,
		frequency: 10.55,
		lemma: "かたち"
	},
	{
		rank: 5327,
		frequency: 10.55,
		lemma: "気配"
	},
	{
		rank: 5328,
		frequency: 10.54,
		lemma: "うるさい"
	},
	{
		rank: 5329,
		frequency: 10.54,
		lemma: "枝"
	},
	{
		rank: 5330,
		frequency: 10.54,
		lemma: "参議院"
	},
	{
		rank: 5331,
		frequency: 10.53,
		lemma: "外資"
	},
	{
		rank: 5332,
		frequency: 10.53,
		lemma: "寮"
	},
	{
		rank: 5333,
		frequency: 10.53,
		lemma: "慌てる"
	},
	{
		rank: 5334,
		frequency: 10.51,
		lemma: "チョコ"
	},
	{
		rank: 5335,
		frequency: 10.51,
		lemma: "アイルランド"
	},
	{
		rank: 5336,
		frequency: 10.51,
		lemma: "インター"
	},
	{
		rank: 5337,
		frequency: 10.51,
		lemma: "聞ける"
	},
	{
		rank: 5338,
		frequency: 10.51,
		lemma: "きり"
	},
	{
		rank: 5339,
		frequency: 10.51,
		lemma: "ヘ"
	},
	{
		rank: 5340,
		frequency: 10.51,
		lemma: "幼い"
	},
	{
		rank: 5341,
		frequency: 10.51,
		lemma: "適応"
	},
	{
		rank: 5342,
		frequency: 10.5,
		lemma: "云々"
	},
	{
		rank: 5343,
		frequency: 10.5,
		lemma: "掘る"
	},
	{
		rank: 5344,
		frequency: 10.5,
		lemma: "分解"
	},
	{
		rank: 5345,
		frequency: 10.5,
		lemma: "右手"
	},
	{
		rank: 5346,
		frequency: 10.5,
		lemma: "避難"
	},
	{
		rank: 5347,
		frequency: 10.49,
		lemma: "国鉄"
	},
	{
		rank: 5348,
		frequency: 10.49,
		lemma: "件数"
	},
	{
		rank: 5349,
		frequency: 10.48,
		lemma: "かぁ"
	},
	{
		rank: 5350,
		frequency: 10.48,
		lemma: "兼"
	},
	{
		rank: 5351,
		frequency: 10.48,
		lemma: "素"
	},
	{
		rank: 5352,
		frequency: 10.47,
		lemma: "岩"
	},
	{
		rank: 5353,
		frequency: 10.47,
		lemma: "臨む"
	},
	{
		rank: 5354,
		frequency: 10.46,
		lemma: "演習"
	},
	{
		rank: 5355,
		frequency: 10.45,
		lemma: "すっきり"
	},
	{
		rank: 5356,
		frequency: 10.45,
		lemma: "水曜日"
	},
	{
		rank: 5357,
		frequency: 10.45,
		lemma: "儲ける"
	},
	{
		rank: 5358,
		frequency: 10.45,
		lemma: "プログラミング"
	},
	{
		rank: 5359,
		frequency: 10.44,
		lemma: "うける"
	},
	{
		rank: 5360,
		frequency: 10.44,
		lemma: "ごはん"
	},
	{
		rank: 5361,
		frequency: 10.43,
		lemma: "アホ"
	},
	{
		rank: 5362,
		frequency: 10.42,
		lemma: "中東"
	},
	{
		rank: 5363,
		frequency: 10.42,
		lemma: "支店"
	},
	{
		rank: 5364,
		frequency: 10.42,
		lemma: "身分"
	},
	{
		rank: 5365,
		frequency: 10.42,
		lemma: "農地"
	},
	{
		rank: 5366,
		frequency: 10.41,
		lemma: "コツ"
	},
	{
		rank: 5367,
		frequency: 10.41,
		lemma: "信者"
	},
	{
		rank: 5368,
		frequency: 10.41,
		lemma: "メンテナンス"
	},
	{
		rank: 5369,
		frequency: 10.4,
		lemma: "負荷"
	},
	{
		rank: 5370,
		frequency: 10.4,
		lemma: "グラフ"
	},
	{
		rank: 5371,
		frequency: 10.4,
		lemma: "克服"
	},
	{
		rank: 5372,
		frequency: 10.39,
		lemma: "話せる"
	},
	{
		rank: 5373,
		frequency: 10.39,
		lemma: "ジム"
	},
	{
		rank: 5374,
		frequency: 10.39,
		lemma: "出来上がる"
	},
	{
		rank: 5375,
		frequency: 10.39,
		lemma: "なるべく"
	},
	{
		rank: 5376,
		frequency: 10.38,
		lemma: "冷蔵庫"
	},
	{
		rank: 5377,
		frequency: 10.38,
		lemma: "銀座"
	},
	{
		rank: 5378,
		frequency: 10.38,
		lemma: "私立"
	},
	{
		rank: 5379,
		frequency: 10.37,
		lemma: "継承"
	},
	{
		rank: 5380,
		frequency: 10.37,
		lemma: "気候"
	},
	{
		rank: 5381,
		frequency: 10.36,
		lemma: "志向"
	},
	{
		rank: 5382,
		frequency: 10.36,
		lemma: "佐々木"
	},
	{
		rank: 5383,
		frequency: 10.36,
		lemma: "結成"
	},
	{
		rank: 5384,
		frequency: 10.36,
		lemma: "意向"
	},
	{
		rank: 5385,
		frequency: 10.36,
		lemma: "夫人"
	},
	{
		rank: 5386,
		frequency: 10.36,
		lemma: "ビジョン"
	},
	{
		rank: 5387,
		frequency: 10.35,
		lemma: "不況"
	},
	{
		rank: 5388,
		frequency: 10.35,
		lemma: "格"
	},
	{
		rank: 5389,
		frequency: 10.34,
		lemma: "青春"
	},
	{
		rank: 5390,
		frequency: 10.34,
		lemma: "階層"
	},
	{
		rank: 5391,
		frequency: 10.34,
		lemma: "バッグ"
	},
	{
		rank: 5392,
		frequency: 10.34,
		lemma: "数多い"
	},
	{
		rank: 5393,
		frequency: 10.34,
		lemma: "か月"
	},
	{
		rank: 5394,
		frequency: 10.33,
		lemma: "弁"
	},
	{
		rank: 5395,
		frequency: 10.33,
		lemma: "都内"
	},
	{
		rank: 5396,
		frequency: 10.33,
		lemma: "日頃"
	},
	{
		rank: 5397,
		frequency: 10.33,
		lemma: "スタジアム"
	},
	{
		rank: 5398,
		frequency: 10.33,
		lemma: "抜き"
	},
	{
		rank: 5399,
		frequency: 10.32,
		lemma: "講談社"
	},
	{
		rank: 5400,
		frequency: 10.32,
		lemma: "食材"
	},
	{
		rank: 5401,
		frequency: 10.31,
		lemma: "唱える"
	},
	{
		rank: 5402,
		frequency: 10.31,
		lemma: "問い"
	},
	{
		rank: 5403,
		frequency: 10.31,
		lemma: "豆腐"
	},
	{
		rank: 5404,
		frequency: 10.31,
		lemma: "仁"
	},
	{
		rank: 5405,
		frequency: 10.3,
		lemma: "靖国"
	},
	{
		rank: 5406,
		frequency: 10.3,
		lemma: "遭遇"
	},
	{
		rank: 5407,
		frequency: 10.3,
		lemma: "あける"
	},
	{
		rank: 5408,
		frequency: 10.3,
		lemma: "利く"
	},
	{
		rank: 5409,
		frequency: 10.3,
		lemma: "流出"
	},
	{
		rank: 5410,
		frequency: 10.29,
		lemma: "に対しまして"
	},
	{
		rank: 5411,
		frequency: 10.29,
		lemma: "公立"
	},
	{
		rank: 5412,
		frequency: 10.29,
		lemma: "サラダ"
	},
	{
		rank: 5413,
		frequency: 10.29,
		lemma: "強度"
	},
	{
		rank: 5414,
		frequency: 10.28,
		lemma: "しかた"
	},
	{
		rank: 5415,
		frequency: 10.28,
		lemma: "最強"
	},
	{
		rank: 5416,
		frequency: 10.27,
		lemma: "改定"
	},
	{
		rank: 5417,
		frequency: 10.27,
		lemma: "なぜか"
	},
	{
		rank: 5418,
		frequency: 10.27,
		lemma: "どれほど"
	},
	{
		rank: 5419,
		frequency: 10.27,
		lemma: "泳ぐ"
	},
	{
		rank: 5420,
		frequency: 10.27,
		lemma: "ハン"
	},
	{
		rank: 5421,
		frequency: 10.27,
		lemma: "連盟"
	},
	{
		rank: 5422,
		frequency: 10.27,
		lemma: "詰める"
	},
	{
		rank: 5423,
		frequency: 10.27,
		lemma: "往復"
	},
	{
		rank: 5424,
		frequency: 10.26,
		lemma: "思い切る"
	},
	{
		rank: 5425,
		frequency: 10.26,
		lemma: "有力"
	},
	{
		rank: 5426,
		frequency: 10.25,
		lemma: "昨今"
	},
	{
		rank: 5427,
		frequency: 10.25,
		lemma: "あっさり"
	},
	{
		rank: 5428,
		frequency: 10.25,
		lemma: "仮定"
	},
	{
		rank: 5429,
		frequency: 10.25,
		lemma: "膝"
	},
	{
		rank: 5430,
		frequency: 10.25,
		lemma: "話しかける"
	},
	{
		rank: 5431,
		frequency: 10.25,
		lemma: "シフト"
	},
	{
		rank: 5432,
		frequency: 10.24,
		lemma: "オーダー"
	},
	{
		rank: 5433,
		frequency: 10.24,
		lemma: "ファミリー"
	},
	{
		rank: 5434,
		frequency: 10.23,
		lemma: "太い"
	},
	{
		rank: 5435,
		frequency: 10.23,
		lemma: "告白"
	},
	{
		rank: 5436,
		frequency: 10.23,
		lemma: "チェーン"
	},
	{
		rank: 5437,
		frequency: 10.22,
		lemma: "ベルリン"
	},
	{
		rank: 5438,
		frequency: 10.22,
		lemma: "指名"
	},
	{
		rank: 5439,
		frequency: 10.22,
		lemma: "励ます"
	},
	{
		rank: 5440,
		frequency: 10.22,
		lemma: "或いは"
	},
	{
		rank: 5441,
		frequency: 10.21,
		lemma: "づける"
	},
	{
		rank: 5442,
		frequency: 10.21,
		lemma: "闘う"
	},
	{
		rank: 5443,
		frequency: 10.21,
		lemma: "辞任"
	},
	{
		rank: 5444,
		frequency: 10.21,
		lemma: "嵐"
	},
	{
		rank: 5445,
		frequency: 10.2,
		lemma: "マッサージ"
	},
	{
		rank: 5446,
		frequency: 10.2,
		lemma: "寿命"
	},
	{
		rank: 5447,
		frequency: 10.2,
		lemma: "安倍"
	},
	{
		rank: 5448,
		frequency: 10.2,
		lemma: "引き受ける"
	},
	{
		rank: 5449,
		frequency: 10.2,
		lemma: "撃つ"
	},
	{
		rank: 5450,
		frequency: 10.2,
		lemma: "現に"
	},
	{
		rank: 5451,
		frequency: 10.2,
		lemma: "パーク"
	},
	{
		rank: 5452,
		frequency: 10.19,
		lemma: "一旦"
	},
	{
		rank: 5453,
		frequency: 10.19,
		lemma: "大国"
	},
	{
		rank: 5454,
		frequency: 10.19,
		lemma: "誤り"
	},
	{
		rank: 5455,
		frequency: 10.19,
		lemma: "やく"
	},
	{
		rank: 5456,
		frequency: 10.18,
		lemma: "奴隷"
	},
	{
		rank: 5457,
		frequency: 10.18,
		lemma: "経"
	},
	{
		rank: 5458,
		frequency: 10.18,
		lemma: "癌"
	},
	{
		rank: 5459,
		frequency: 10.17,
		lemma: "変革"
	},
	{
		rank: 5460,
		frequency: 10.17,
		lemma: "故郷"
	},
	{
		rank: 5461,
		frequency: 10.16,
		lemma: "おしゃべり"
	},
	{
		rank: 5462,
		frequency: 10.16,
		lemma: "係る"
	},
	{
		rank: 5463,
		frequency: 10.16,
		lemma: "急激"
	},
	{
		rank: 5464,
		frequency: 10.15,
		lemma: "ラッキー"
	},
	{
		rank: 5465,
		frequency: 10.15,
		lemma: "地面"
	},
	{
		rank: 5466,
		frequency: 10.14,
		lemma: "とんでもない"
	},
	{
		rank: 5467,
		frequency: 10.14,
		lemma: "残業"
	},
	{
		rank: 5468,
		frequency: 10.14,
		lemma: "告知"
	},
	{
		rank: 5469,
		frequency: 10.13,
		lemma: "大使"
	},
	{
		rank: 5470,
		frequency: 10.13,
		lemma: "ω"
	},
	{
		rank: 5471,
		frequency: 10.13,
		lemma: "媒体"
	},
	{
		rank: 5472,
		frequency: 10.12,
		lemma: "進学"
	},
	{
		rank: 5473,
		frequency: 10.12,
		lemma: "やむ"
	},
	{
		rank: 5474,
		frequency: 10.12,
		lemma: "労"
	},
	{
		rank: 5475,
		frequency: 10.12,
		lemma: "刊行"
	},
	{
		rank: 5476,
		frequency: 10.12,
		lemma: "じっと"
	},
	{
		rank: 5477,
		frequency: 10.12,
		lemma: "感激"
	},
	{
		rank: 5478,
		frequency: 10.12,
		lemma: "但し"
	},
	{
		rank: 5479,
		frequency: 10.11,
		lemma: "見出し"
	},
	{
		rank: 5480,
		frequency: 10.11,
		lemma: "プライベート"
	},
	{
		rank: 5481,
		frequency: 10.11,
		lemma: "雇う"
	},
	{
		rank: 5482,
		frequency: 10.11,
		lemma: "砂糖"
	},
	{
		rank: 5483,
		frequency: 10.11,
		lemma: "嬢"
	},
	{
		rank: 5484,
		frequency: 10.11,
		lemma: "食糧"
	},
	{
		rank: 5485,
		frequency: 10.1,
		lemma: "崩す"
	},
	{
		rank: 5486,
		frequency: 10.1,
		lemma: "っぱなし"
	},
	{
		rank: 5487,
		frequency: 10.1,
		lemma: "エロ"
	},
	{
		rank: 5488,
		frequency: 10.1,
		lemma: "役者"
	},
	{
		rank: 5489,
		frequency: 10.1,
		lemma: "原油"
	},
	{
		rank: 5490,
		frequency: 10.1,
		lemma: "祈り"
	},
	{
		rank: 5491,
		frequency: 10.1,
		lemma: "弟子"
	},
	{
		rank: 5492,
		frequency: 10.1,
		lemma: "どうにも"
	},
	{
		rank: 5493,
		frequency: 10.08,
		lemma: "ブリ"
	},
	{
		rank: 5494,
		frequency: 10.08,
		lemma: "全力"
	},
	{
		rank: 5495,
		frequency: 10.08,
		lemma: "流行る"
	},
	{
		rank: 5496,
		frequency: 10.07,
		lemma: "外側"
	},
	{
		rank: 5497,
		frequency: 10.07,
		lemma: "正規"
	},
	{
		rank: 5498,
		frequency: 10.07,
		lemma: "申"
	},
	{
		rank: 5499,
		frequency: 10.07,
		lemma: "ラブ"
	},
	{
		rank: 5500,
		frequency: 10.07,
		lemma: "ゲイ"
	},
	{
		rank: 5501,
		frequency: 10.07,
		lemma: "バックナンバー"
	},
	{
		rank: 5502,
		frequency: 10.06,
		lemma: "世話"
	},
	{
		rank: 5503,
		frequency: 10.06,
		lemma: "タイヤ"
	},
	{
		rank: 5504,
		frequency: 10.06,
		lemma: "エンジニア"
	},
	{
		rank: 5505,
		frequency: 10.05,
		lemma: "創業"
	},
	{
		rank: 5506,
		frequency: 10.05,
		lemma: "準"
	},
	{
		rank: 5507,
		frequency: 10.05,
		lemma: "贅沢"
	},
	{
		rank: 5508,
		frequency: 10.04,
		lemma: "警官"
	},
	{
		rank: 5509,
		frequency: 10.04,
		lemma: "チャート"
	},
	{
		rank: 5510,
		frequency: 10.04,
		lemma: "たしか"
	},
	{
		rank: 5511,
		frequency: 10.04,
		lemma: "脚"
	},
	{
		rank: 5512,
		frequency: 10.04,
		lemma: "わり"
	},
	{
		rank: 5513,
		frequency: 10.03,
		lemma: "入国"
	},
	{
		rank: 5514,
		frequency: 10.03,
		lemma: "アナ"
	},
	{
		rank: 5515,
		frequency: 10.03,
		lemma: "新年"
	},
	{
		rank: 5516,
		frequency: 10.03,
		lemma: "相続"
	},
	{
		rank: 5517,
		frequency: 10.03,
		lemma: "坂"
	},
	{
		rank: 5518,
		frequency: 10.03,
		lemma: "アイディア"
	},
	{
		rank: 5519,
		frequency: 10.02,
		lemma: "おもちゃ"
	},
	{
		rank: 5520,
		frequency: 10.02,
		lemma: "フード"
	},
	{
		rank: 5521,
		frequency: 10.02,
		lemma: "作り上げる"
	},
	{
		rank: 5522,
		frequency: 10.02,
		lemma: "工程"
	},
	{
		rank: 5523,
		frequency: 10.01,
		lemma: "りん"
	},
	{
		rank: 5524,
		frequency: 10,
		lemma: "さい"
	},
	{
		rank: 5525,
		frequency: 10,
		lemma: "虐待"
	},
	{
		rank: 5526,
		frequency: 10,
		lemma: "丁目"
	},
	{
		rank: 5527,
		frequency: 9.99,
		lemma: "定員"
	},
	{
		rank: 5528,
		frequency: 9.99,
		lemma: "消化"
	},
	{
		rank: 5529,
		frequency: 9.99,
		lemma: "懇談"
	},
	{
		rank: 5530,
		frequency: 9.98,
		lemma: "ロン"
	},
	{
		rank: 5531,
		frequency: 9.97,
		lemma: "極"
	},
	{
		rank: 5532,
		frequency: 9.97,
		lemma: "激"
	},
	{
		rank: 5533,
		frequency: 9.97,
		lemma: "国々"
	},
	{
		rank: 5534,
		frequency: 9.96,
		lemma: "カタログ"
	},
	{
		rank: 5535,
		frequency: 9.96,
		lemma: "秘書"
	},
	{
		rank: 5536,
		frequency: 9.95,
		lemma: "鶏"
	},
	{
		rank: 5537,
		frequency: 9.95,
		lemma: "合唱"
	},
	{
		rank: 5538,
		frequency: 9.95,
		lemma: "マクロ"
	},
	{
		rank: 5539,
		frequency: 9.95,
		lemma: "鹿児島"
	},
	{
		rank: 5540,
		frequency: 9.95,
		lemma: "のち"
	},
	{
		rank: 5541,
		frequency: 9.94,
		lemma: "有機"
	},
	{
		rank: 5542,
		frequency: 9.94,
		lemma: "それと"
	},
	{
		rank: 5543,
		frequency: 9.94,
		lemma: "顧問"
	},
	{
		rank: 5544,
		frequency: 9.94,
		lemma: "開幕"
	},
	{
		rank: 5545,
		frequency: 9.94,
		lemma: "合成"
	},
	{
		rank: 5546,
		frequency: 9.94,
		lemma: "厚生省"
	},
	{
		rank: 5547,
		frequency: 9.94,
		lemma: "大使館"
	},
	{
		rank: 5548,
		frequency: 9.94,
		lemma: "筈"
	},
	{
		rank: 5549,
		frequency: 9.94,
		lemma: "サイエンス"
	},
	{
		rank: 5550,
		frequency: 9.93,
		lemma: "組み込む"
	},
	{
		rank: 5551,
		frequency: 9.93,
		lemma: "隆"
	},
	{
		rank: 5552,
		frequency: 9.93,
		lemma: "投手"
	},
	{
		rank: 5553,
		frequency: 9.92,
		lemma: "貯金"
	},
	{
		rank: 5554,
		frequency: 9.92,
		lemma: "取り扱う"
	},
	{
		rank: 5555,
		frequency: 9.92,
		lemma: "書き方"
	},
	{
		rank: 5556,
		frequency: 9.92,
		lemma: "内側"
	},
	{
		rank: 5557,
		frequency: 9.91,
		lemma: "倉庫"
	},
	{
		rank: 5558,
		frequency: 9.91,
		lemma: "すく"
	},
	{
		rank: 5559,
		frequency: 9.91,
		lemma: "始まり"
	},
	{
		rank: 5560,
		frequency: 9.91,
		lemma: "雑記"
	},
	{
		rank: 5561,
		frequency: 9.91,
		lemma: "ホスト"
	},
	{
		rank: 5562,
		frequency: 9.91,
		lemma: "穏やか"
	},
	{
		rank: 5563,
		frequency: 9.91,
		lemma: "悲しみ"
	},
	{
		rank: 5564,
		frequency: 9.91,
		lemma: "放題"
	},
	{
		rank: 5565,
		frequency: 9.9,
		lemma: "死刑"
	},
	{
		rank: 5566,
		frequency: 9.9,
		lemma: "さぁ"
	},
	{
		rank: 5567,
		frequency: 9.9,
		lemma: "前者"
	},
	{
		rank: 5568,
		frequency: 9.9,
		lemma: "遺跡"
	},
	{
		rank: 5569,
		frequency: 9.9,
		lemma: "サル"
	},
	{
		rank: 5570,
		frequency: 9.9,
		lemma: "シンポジウム"
	},
	{
		rank: 5571,
		frequency: 9.89,
		lemma: "阿る"
	},
	{
		rank: 5572,
		frequency: 9.89,
		lemma: "帽子"
	},
	{
		rank: 5573,
		frequency: 9.89,
		lemma: "セクション"
	},
	{
		rank: 5574,
		frequency: 9.89,
		lemma: "堂々"
	},
	{
		rank: 5575,
		frequency: 9.89,
		lemma: "毎日新聞"
	},
	{
		rank: 5576,
		frequency: 9.88,
		lemma: "認可"
	},
	{
		rank: 5577,
		frequency: 9.88,
		lemma: "富"
	},
	{
		rank: 5578,
		frequency: 9.88,
		lemma: "手帳"
	},
	{
		rank: 5579,
		frequency: 9.88,
		lemma: "定"
	},
	{
		rank: 5580,
		frequency: 9.88,
		lemma: "大蔵省"
	},
	{
		rank: 5581,
		frequency: 9.87,
		lemma: "調理"
	},
	{
		rank: 5582,
		frequency: 9.87,
		lemma: "こもる"
	},
	{
		rank: 5583,
		frequency: 9.87,
		lemma: "欲求"
	},
	{
		rank: 5584,
		frequency: 9.87,
		lemma: "ギャラリー"
	},
	{
		rank: 5585,
		frequency: 9.87,
		lemma: "カリフォルニア"
	},
	{
		rank: 5586,
		frequency: 9.87,
		lemma: "丘"
	},
	{
		rank: 5587,
		frequency: 9.87,
		lemma: "正月"
	},
	{
		rank: 5588,
		frequency: 9.86,
		lemma: "大地"
	},
	{
		rank: 5589,
		frequency: 9.86,
		lemma: "カレンダー"
	},
	{
		rank: 5590,
		frequency: 9.86,
		lemma: "こんばんは"
	},
	{
		rank: 5591,
		frequency: 9.85,
		lemma: "につく"
	},
	{
		rank: 5592,
		frequency: 9.85,
		lemma: "かっこいい"
	},
	{
		rank: 5593,
		frequency: 9.85,
		lemma: "選手権"
	},
	{
		rank: 5594,
		frequency: 9.85,
		lemma: "軌道"
	},
	{
		rank: 5595,
		frequency: 9.85,
		lemma: "落ち込む"
	},
	{
		rank: 5596,
		frequency: 9.84,
		lemma: "シャツ"
	},
	{
		rank: 5597,
		frequency: 9.84,
		lemma: "戦術"
	},
	{
		rank: 5598,
		frequency: 9.84,
		lemma: "防災"
	},
	{
		rank: 5599,
		frequency: 9.84,
		lemma: "梅雨"
	},
	{
		rank: 5600,
		frequency: 9.84,
		lemma: "セン"
	},
	{
		rank: 5601,
		frequency: 9.84,
		lemma: "飲食"
	},
	{
		rank: 5602,
		frequency: 9.83,
		lemma: "接近"
	},
	{
		rank: 5603,
		frequency: 9.83,
		lemma: "飯"
	},
	{
		rank: 5604,
		frequency: 9.83,
		lemma: "疾患"
	},
	{
		rank: 5605,
		frequency: 9.83,
		lemma: "コア"
	},
	{
		rank: 5606,
		frequency: 9.83,
		lemma: "文部省"
	},
	{
		rank: 5607,
		frequency: 9.82,
		lemma: "小川"
	},
	{
		rank: 5608,
		frequency: 9.82,
		lemma: "見出す"
	},
	{
		rank: 5609,
		frequency: 9.82,
		lemma: "ピーク"
	},
	{
		rank: 5610,
		frequency: 9.82,
		lemma: "独身"
	},
	{
		rank: 5611,
		frequency: 9.82,
		lemma: "吉"
	},
	{
		rank: 5612,
		frequency: 9.82,
		lemma: "巨人"
	},
	{
		rank: 5613,
		frequency: 9.82,
		lemma: "はねる"
	},
	{
		rank: 5614,
		frequency: 9.82,
		lemma: "消滅"
	},
	{
		rank: 5615,
		frequency: 9.81,
		lemma: "解体"
	},
	{
		rank: 5616,
		frequency: 9.81,
		lemma: "眠れる"
	},
	{
		rank: 5617,
		frequency: 9.81,
		lemma: "曲がる"
	},
	{
		rank: 5618,
		frequency: 9.81,
		lemma: "先端"
	},
	{
		rank: 5619,
		frequency: 9.81,
		lemma: "配当"
	},
	{
		rank: 5620,
		frequency: 9.8,
		lemma: "曖昧"
	},
	{
		rank: 5621,
		frequency: 9.8,
		lemma: "両手"
	},
	{
		rank: 5622,
		frequency: 9.8,
		lemma: "藤田"
	},
	{
		rank: 5623,
		frequency: 9.79,
		lemma: "固い"
	},
	{
		rank: 5624,
		frequency: 9.79,
		lemma: "褒める"
	},
	{
		rank: 5625,
		frequency: 9.79,
		lemma: "争う"
	},
	{
		rank: 5626,
		frequency: 9.79,
		lemma: "在宅"
	},
	{
		rank: 5627,
		frequency: 9.79,
		lemma: "クロアチア"
	},
	{
		rank: 5628,
		frequency: 9.79,
		lemma: "一流"
	},
	{
		rank: 5629,
		frequency: 9.79,
		lemma: "スパイ"
	},
	{
		rank: 5630,
		frequency: 9.78,
		lemma: "覚める"
	},
	{
		rank: 5631,
		frequency: 9.78,
		lemma: "余"
	},
	{
		rank: 5632,
		frequency: 9.78,
		lemma: "羊"
	},
	{
		rank: 5633,
		frequency: 9.78,
		lemma: "ドキドキ"
	},
	{
		rank: 5634,
		frequency: 9.78,
		lemma: "殴る"
	},
	{
		rank: 5635,
		frequency: 9.77,
		lemma: "結合"
	},
	{
		rank: 5636,
		frequency: 9.77,
		lemma: "控除"
	},
	{
		rank: 5637,
		frequency: 9.77,
		lemma: "生き物"
	},
	{
		rank: 5638,
		frequency: 9.77,
		lemma: "庶民"
	},
	{
		rank: 5639,
		frequency: 9.77,
		lemma: "傑作"
	},
	{
		rank: 5640,
		frequency: 9.76,
		lemma: "実習"
	},
	{
		rank: 5641,
		frequency: 9.76,
		lemma: "譲る"
	},
	{
		rank: 5642,
		frequency: 9.75,
		lemma: "ボス"
	},
	{
		rank: 5643,
		frequency: 9.75,
		lemma: "後輩"
	},
	{
		rank: 5644,
		frequency: 9.74,
		lemma: "複製"
	},
	{
		rank: 5645,
		frequency: 9.74,
		lemma: "コマンド"
	},
	{
		rank: 5646,
		frequency: 9.74,
		lemma: "反日"
	},
	{
		rank: 5647,
		frequency: 9.74,
		lemma: "えー"
	},
	{
		rank: 5648,
		frequency: 9.74,
		lemma: "分担"
	},
	{
		rank: 5649,
		frequency: 9.73,
		lemma: "漁業"
	},
	{
		rank: 5650,
		frequency: 9.72,
		lemma: "分権"
	},
	{
		rank: 5651,
		frequency: 9.72,
		lemma: "再会"
	},
	{
		rank: 5652,
		frequency: 9.72,
		lemma: "画家"
	},
	{
		rank: 5653,
		frequency: 9.72,
		lemma: "読売新聞"
	},
	{
		rank: 5654,
		frequency: 9.72,
		lemma: "香"
	},
	{
		rank: 5655,
		frequency: 9.72,
		lemma: "学期"
	},
	{
		rank: 5656,
		frequency: 9.72,
		lemma: "ラップ"
	},
	{
		rank: 5657,
		frequency: 9.71,
		lemma: "ショウ"
	},
	{
		rank: 5658,
		frequency: 9.71,
		lemma: "仲良く"
	},
	{
		rank: 5659,
		frequency: 9.7,
		lemma: "チラシ"
	},
	{
		rank: 5660,
		frequency: 9.7,
		lemma: "クラ"
	},
	{
		rank: 5661,
		frequency: 9.7,
		lemma: "財布"
	},
	{
		rank: 5662,
		frequency: 9.7,
		lemma: "最低限"
	},
	{
		rank: 5663,
		frequency: 9.7,
		lemma: "教え"
	},
	{
		rank: 5664,
		frequency: 9.7,
		lemma: "被災"
	},
	{
		rank: 5665,
		frequency: 9.69,
		lemma: "固める"
	},
	{
		rank: 5666,
		frequency: 9.69,
		lemma: "裏切る"
	},
	{
		rank: 5667,
		frequency: 9.68,
		lemma: "待ち"
	},
	{
		rank: 5668,
		frequency: 9.68,
		lemma: "目撃"
	},
	{
		rank: 5669,
		frequency: 9.68,
		lemma: "幸運"
	},
	{
		rank: 5670,
		frequency: 9.68,
		lemma: "Ｏ"
	},
	{
		rank: 5671,
		frequency: 9.68,
		lemma: "申し込む"
	},
	{
		rank: 5672,
		frequency: 9.68,
		lemma: "テン"
	},
	{
		rank: 5673,
		frequency: 9.68,
		lemma: "任意"
	},
	{
		rank: 5674,
		frequency: 9.67,
		lemma: "イカ"
	},
	{
		rank: 5675,
		frequency: 9.67,
		lemma: "グラス"
	},
	{
		rank: 5676,
		frequency: 9.67,
		lemma: "六月"
	},
	{
		rank: 5677,
		frequency: 9.67,
		lemma: "なおす"
	},
	{
		rank: 5678,
		frequency: 9.67,
		lemma: "獣"
	},
	{
		rank: 5679,
		frequency: 9.66,
		lemma: "誠"
	},
	{
		rank: 5680,
		frequency: 9.66,
		lemma: "始め"
	},
	{
		rank: 5681,
		frequency: 9.66,
		lemma: "師匠"
	},
	{
		rank: 5682,
		frequency: 9.66,
		lemma: "中川"
	},
	{
		rank: 5683,
		frequency: 9.66,
		lemma: "早々"
	},
	{
		rank: 5684,
		frequency: 9.65,
		lemma: "デート"
	},
	{
		rank: 5685,
		frequency: 9.65,
		lemma: "生存"
	},
	{
		rank: 5686,
		frequency: 9.65,
		lemma: "周波数"
	},
	{
		rank: 5687,
		frequency: 9.65,
		lemma: "履く"
	},
	{
		rank: 5688,
		frequency: 9.64,
		lemma: "斎藤"
	},
	{
		rank: 5689,
		frequency: 9.64,
		lemma: "人員"
	},
	{
		rank: 5690,
		frequency: 9.64,
		lemma: "黒人"
	},
	{
		rank: 5691,
		frequency: 9.63,
		lemma: "地理"
	},
	{
		rank: 5692,
		frequency: 9.63,
		lemma: "取り"
	},
	{
		rank: 5693,
		frequency: 9.63,
		lemma: "計量"
	},
	{
		rank: 5694,
		frequency: 9.62,
		lemma: "行き"
	},
	{
		rank: 5695,
		frequency: 9.62,
		lemma: "ミュージシャン"
	},
	{
		rank: 5696,
		frequency: 9.62,
		lemma: "就業"
	},
	{
		rank: 5697,
		frequency: 9.61,
		lemma: "朝刊"
	},
	{
		rank: 5698,
		frequency: 9.61,
		lemma: "つかう"
	},
	{
		rank: 5699,
		frequency: 9.61,
		lemma: "スポンサー"
	},
	{
		rank: 5700,
		frequency: 9.6,
		lemma: "ＳＦ"
	},
	{
		rank: 5701,
		frequency: 9.6,
		lemma: "遺族"
	},
	{
		rank: 5702,
		frequency: 9.59,
		lemma: "開業"
	},
	{
		rank: 5703,
		frequency: 9.59,
		lemma: "海洋"
	},
	{
		rank: 5704,
		frequency: 9.59,
		lemma: "飛び込む"
	},
	{
		rank: 5705,
		frequency: 9.59,
		lemma: "普遍"
	},
	{
		rank: 5706,
		frequency: 9.59,
		lemma: "ならでは"
	},
	{
		rank: 5707,
		frequency: 9.59,
		lemma: "禁じる"
	},
	{
		rank: 5708,
		frequency: 9.58,
		lemma: "家事"
	},
	{
		rank: 5709,
		frequency: 9.58,
		lemma: "各社"
	},
	{
		rank: 5710,
		frequency: 9.58,
		lemma: "定年"
	},
	{
		rank: 5711,
		frequency: 9.57,
		lemma: "姉さん"
	},
	{
		rank: 5712,
		frequency: 9.57,
		lemma: "オヤジ"
	},
	{
		rank: 5713,
		frequency: 9.57,
		lemma: "東京大学"
	},
	{
		rank: 5714,
		frequency: 9.57,
		lemma: "適す"
	},
	{
		rank: 5715,
		frequency: 9.56,
		lemma: "書き"
	},
	{
		rank: 5716,
		frequency: 9.56,
		lemma: "フロー"
	},
	{
		rank: 5717,
		frequency: 9.56,
		lemma: "いつの間にか"
	},
	{
		rank: 5718,
		frequency: 9.55,
		lemma: "不快"
	},
	{
		rank: 5719,
		frequency: 9.55,
		lemma: "海軍"
	},
	{
		rank: 5720,
		frequency: 9.54,
		lemma: "賃貸"
	},
	{
		rank: 5721,
		frequency: 9.54,
		lemma: "解答"
	},
	{
		rank: 5722,
		frequency: 9.54,
		lemma: "伝達"
	},
	{
		rank: 5723,
		frequency: 9.54,
		lemma: "点検"
	},
	{
		rank: 5724,
		frequency: 9.54,
		lemma: "シティ"
	},
	{
		rank: 5725,
		frequency: 9.53,
		lemma: "信念"
	},
	{
		rank: 5726,
		frequency: 9.53,
		lemma: "ポート"
	},
	{
		rank: 5727,
		frequency: 9.53,
		lemma: "知り合う"
	},
	{
		rank: 5728,
		frequency: 9.53,
		lemma: "どなた"
	},
	{
		rank: 5729,
		frequency: 9.52,
		lemma: "未だ"
	},
	{
		rank: 5730,
		frequency: 9.51,
		lemma: "死体"
	},
	{
		rank: 5731,
		frequency: 9.51,
		lemma: "採る"
	},
	{
		rank: 5732,
		frequency: 9.51,
		lemma: "一郎"
	},
	{
		rank: 5733,
		frequency: 9.51,
		lemma: "宗"
	},
	{
		rank: 5734,
		frequency: 9.51,
		lemma: "レート"
	},
	{
		rank: 5735,
		frequency: 9.5,
		lemma: "お手伝い"
	},
	{
		rank: 5736,
		frequency: 9.5,
		lemma: "ファースト"
	},
	{
		rank: 5737,
		frequency: 9.5,
		lemma: "おば"
	},
	{
		rank: 5738,
		frequency: 9.5,
		lemma: "外出"
	},
	{
		rank: 5739,
		frequency: 9.5,
		lemma: "インチ"
	},
	{
		rank: 5740,
		frequency: 9.5,
		lemma: "太る"
	},
	{
		rank: 5741,
		frequency: 9.49,
		lemma: "傘"
	},
	{
		rank: 5742,
		frequency: 9.49,
		lemma: "親父"
	},
	{
		rank: 5743,
		frequency: 9.49,
		lemma: "排出"
	},
	{
		rank: 5744,
		frequency: 9.49,
		lemma: "高額"
	},
	{
		rank: 5745,
		frequency: 9.49,
		lemma: "遂行"
	},
	{
		rank: 5746,
		frequency: 9.48,
		lemma: "ナイフ"
	},
	{
		rank: 5747,
		frequency: 9.48,
		lemma: "スピーカー"
	},
	{
		rank: 5748,
		frequency: 9.48,
		lemma: "傷つける"
	},
	{
		rank: 5749,
		frequency: 9.47,
		lemma: "成人"
	},
	{
		rank: 5750,
		frequency: 9.47,
		lemma: "牛肉"
	},
	{
		rank: 5751,
		frequency: 9.47,
		lemma: "印"
	},
	{
		rank: 5752,
		frequency: 9.47,
		lemma: "マナー"
	},
	{
		rank: 5753,
		frequency: 9.47,
		lemma: "学園"
	},
	{
		rank: 5754,
		frequency: 9.47,
		lemma: "新書"
	},
	{
		rank: 5755,
		frequency: 9.47,
		lemma: "入札"
	},
	{
		rank: 5756,
		frequency: 9.46,
		lemma: "実装"
	},
	{
		rank: 5757,
		frequency: 9.46,
		lemma: "乗り込む"
	},
	{
		rank: 5758,
		frequency: 9.45,
		lemma: "決済"
	},
	{
		rank: 5759,
		frequency: 9.45,
		lemma: "まう"
	},
	{
		rank: 5760,
		frequency: 9.45,
		lemma: "マネー"
	},
	{
		rank: 5761,
		frequency: 9.45,
		lemma: "サポーター"
	},
	{
		rank: 5762,
		frequency: 9.45,
		lemma: "班"
	},
	{
		rank: 5763,
		frequency: 9.45,
		lemma: "特典"
	},
	{
		rank: 5764,
		frequency: 9.44,
		lemma: "儀式"
	},
	{
		rank: 5765,
		frequency: 9.44,
		lemma: "建"
	},
	{
		rank: 5766,
		frequency: 9.44,
		lemma: "カラオケ"
	},
	{
		rank: 5767,
		frequency: 9.44,
		lemma: "実証"
	},
	{
		rank: 5768,
		frequency: 9.44,
		lemma: "ハート"
	},
	{
		rank: 5769,
		frequency: 9.44,
		lemma: "デル"
	},
	{
		rank: 5770,
		frequency: 9.44,
		lemma: "針"
	},
	{
		rank: 5771,
		frequency: 9.44,
		lemma: "辻"
	},
	{
		rank: 5772,
		frequency: 9.44,
		lemma: "エントリ"
	},
	{
		rank: 5773,
		frequency: 9.44,
		lemma: "二度と"
	},
	{
		rank: 5774,
		frequency: 9.44,
		lemma: "曲目"
	},
	{
		rank: 5775,
		frequency: 9.44,
		lemma: "キレイ"
	},
	{
		rank: 5776,
		frequency: 9.43,
		lemma: "自衛"
	},
	{
		rank: 5777,
		frequency: 9.43,
		lemma: "笑える"
	},
	{
		rank: 5778,
		frequency: 9.43,
		lemma: "沈む"
	},
	{
		rank: 5779,
		frequency: 9.42,
		lemma: "挟む"
	},
	{
		rank: 5780,
		frequency: 9.42,
		lemma: "ガソリン"
	},
	{
		rank: 5781,
		frequency: 9.42,
		lemma: "焦る"
	},
	{
		rank: 5782,
		frequency: 9.42,
		lemma: "掴む"
	},
	{
		rank: 5783,
		frequency: 9.41,
		lemma: "こりゃ"
	},
	{
		rank: 5784,
		frequency: 9.41,
		lemma: "接す"
	},
	{
		rank: 5785,
		frequency: 9.41,
		lemma: "新刊"
	},
	{
		rank: 5786,
		frequency: 9.4,
		lemma: "世界一"
	},
	{
		rank: 5787,
		frequency: 9.4,
		lemma: "固有"
	},
	{
		rank: 5788,
		frequency: 9.4,
		lemma: "熊本"
	},
	{
		rank: 5789,
		frequency: 9.4,
		lemma: "リソース"
	},
	{
		rank: 5790,
		frequency: 9.39,
		lemma: "フレーズ"
	},
	{
		rank: 5791,
		frequency: 9.38,
		lemma: "董"
	},
	{
		rank: 5792,
		frequency: 9.38,
		lemma: "アカデミー"
	},
	{
		rank: 5793,
		frequency: 9.38,
		lemma: "有無"
	},
	{
		rank: 5794,
		frequency: 9.38,
		lemma: "中野"
	},
	{
		rank: 5795,
		frequency: 9.38,
		lemma: "沈黙"
	},
	{
		rank: 5796,
		frequency: 9.38,
		lemma: "大気"
	},
	{
		rank: 5797,
		frequency: 9.38,
		lemma: "おばさん"
	},
	{
		rank: 5798,
		frequency: 9.37,
		lemma: "中略"
	},
	{
		rank: 5799,
		frequency: 9.37,
		lemma: "予告"
	},
	{
		rank: 5800,
		frequency: 9.37,
		lemma: "ビザ"
	},
	{
		rank: 5801,
		frequency: 9.37,
		lemma: "工房"
	},
	{
		rank: 5802,
		frequency: 9.36,
		lemma: "石原"
	},
	{
		rank: 5803,
		frequency: 9.36,
		lemma: "難民"
	},
	{
		rank: 5804,
		frequency: 9.36,
		lemma: "チン"
	},
	{
		rank: 5805,
		frequency: 9.35,
		lemma: "交わす"
	},
	{
		rank: 5806,
		frequency: 9.35,
		lemma: "属性"
	},
	{
		rank: 5807,
		frequency: 9.35,
		lemma: "幾ら"
	},
	{
		rank: 5808,
		frequency: 9.35,
		lemma: "倒産"
	},
	{
		rank: 5809,
		frequency: 9.35,
		lemma: "渋滞"
	},
	{
		rank: 5810,
		frequency: 9.35,
		lemma: "地味"
	},
	{
		rank: 5811,
		frequency: 9.33,
		lemma: "取り扱い"
	},
	{
		rank: 5812,
		frequency: 9.32,
		lemma: "ダブル"
	},
	{
		rank: 5813,
		frequency: 9.32,
		lemma: "揺れる"
	},
	{
		rank: 5814,
		frequency: 9.32,
		lemma: "先物"
	},
	{
		rank: 5815,
		frequency: 9.32,
		lemma: "引越し"
	},
	{
		rank: 5816,
		frequency: 9.32,
		lemma: "図面"
	},
	{
		rank: 5817,
		frequency: 9.31,
		lemma: "抜粋"
	},
	{
		rank: 5818,
		frequency: 9.31,
		lemma: "消防"
	},
	{
		rank: 5819,
		frequency: 9.31,
		lemma: "起訴"
	},
	{
		rank: 5820,
		frequency: 9.31,
		lemma: "切り替える"
	},
	{
		rank: 5821,
		frequency: 9.3,
		lemma: "検出"
	},
	{
		rank: 5822,
		frequency: 9.3,
		lemma: "多々"
	},
	{
		rank: 5823,
		frequency: 9.3,
		lemma: "４つ"
	},
	{
		rank: 5824,
		frequency: 9.3,
		lemma: "ユニーク"
	},
	{
		rank: 5825,
		frequency: 9.3,
		lemma: "限度"
	},
	{
		rank: 5826,
		frequency: 9.3,
		lemma: "整う"
	},
	{
		rank: 5827,
		frequency: 9.3,
		lemma: "まえる"
	},
	{
		rank: 5828,
		frequency: 9.29,
		lemma: "ダメージ"
	},
	{
		rank: 5829,
		frequency: 9.29,
		lemma: "左手"
	},
	{
		rank: 5830,
		frequency: 9.29,
		lemma: "欠点"
	},
	{
		rank: 5831,
		frequency: 9.29,
		lemma: "水道"
	},
	{
		rank: 5832,
		frequency: 9.28,
		lemma: "陰"
	},
	{
		rank: 5833,
		frequency: 9.28,
		lemma: "北部"
	},
	{
		rank: 5834,
		frequency: 9.28,
		lemma: "取り込む"
	},
	{
		rank: 5835,
		frequency: 9.28,
		lemma: "要は"
	},
	{
		rank: 5836,
		frequency: 9.28,
		lemma: "検定"
	},
	{
		rank: 5837,
		frequency: 9.28,
		lemma: "台詞"
	},
	{
		rank: 5838,
		frequency: 9.28,
		lemma: "柔軟"
	},
	{
		rank: 5839,
		frequency: 9.28,
		lemma: "としまして"
	},
	{
		rank: 5840,
		frequency: 9.27,
		lemma: "アーカイブ"
	},
	{
		rank: 5841,
		frequency: 9.27,
		lemma: "何ら"
	},
	{
		rank: 5842,
		frequency: 9.27,
		lemma: "ショット"
	},
	{
		rank: 5843,
		frequency: 9.27,
		lemma: "ねこ"
	},
	{
		rank: 5844,
		frequency: 9.27,
		lemma: "明記"
	},
	{
		rank: 5845,
		frequency: 9.27,
		lemma: "学力"
	},
	{
		rank: 5846,
		frequency: 9.25,
		lemma: "分子"
	},
	{
		rank: 5847,
		frequency: 9.25,
		lemma: "計測"
	},
	{
		rank: 5848,
		frequency: 9.25,
		lemma: "東洋"
	},
	{
		rank: 5849,
		frequency: 9.25,
		lemma: "まさしく"
	},
	{
		rank: 5850,
		frequency: 9.25,
		lemma: "ヵ月"
	},
	{
		rank: 5851,
		frequency: 9.24,
		lemma: "マニア"
	},
	{
		rank: 5852,
		frequency: 9.24,
		lemma: "親戚"
	},
	{
		rank: 5853,
		frequency: 9.24,
		lemma: "告発"
	},
	{
		rank: 5854,
		frequency: 9.24,
		lemma: "宿題"
	},
	{
		rank: 5855,
		frequency: 9.23,
		lemma: "追及"
	},
	{
		rank: 5856,
		frequency: 9.23,
		lemma: "郎"
	},
	{
		rank: 5857,
		frequency: 9.23,
		lemma: "青木"
	},
	{
		rank: 5858,
		frequency: 9.23,
		lemma: "牧師"
	},
	{
		rank: 5859,
		frequency: 9.23,
		lemma: "もしかして"
	},
	{
		rank: 5860,
		frequency: 9.22,
		lemma: "対照"
	},
	{
		rank: 5861,
		frequency: 9.22,
		lemma: "振り"
	},
	{
		rank: 5862,
		frequency: 9.22,
		lemma: "一家"
	},
	{
		rank: 5863,
		frequency: 9.22,
		lemma: "あん"
	},
	{
		rank: 5864,
		frequency: 9.22,
		lemma: "ＣＭ"
	},
	{
		rank: 5865,
		frequency: 9.22,
		lemma: "体育"
	},
	{
		rank: 5866,
		frequency: 9.21,
		lemma: "ゐる"
	},
	{
		rank: 5867,
		frequency: 9.21,
		lemma: "さらす"
	},
	{
		rank: 5868,
		frequency: 9.21,
		lemma: "シャワー"
	},
	{
		rank: 5869,
		frequency: 9.21,
		lemma: "貴族"
	},
	{
		rank: 5870,
		frequency: 9.21,
		lemma: "疲労"
	},
	{
		rank: 5871,
		frequency: 9.21,
		lemma: "賢い"
	},
	{
		rank: 5872,
		frequency: 9.21,
		lemma: "フロント"
	},
	{
		rank: 5873,
		frequency: 9.21,
		lemma: "前述"
	},
	{
		rank: 5874,
		frequency: 9.21,
		lemma: "特例"
	},
	{
		rank: 5875,
		frequency: 9.21,
		lemma: "精度"
	},
	{
		rank: 5876,
		frequency: 9.21,
		lemma: "傾ける"
	},
	{
		rank: 5877,
		frequency: 9.2,
		lemma: "夫妻"
	},
	{
		rank: 5878,
		frequency: 9.19,
		lemma: "よほど"
	},
	{
		rank: 5879,
		frequency: 9.19,
		lemma: "中途半端"
	},
	{
		rank: 5880,
		frequency: 9.18,
		lemma: "追いかける"
	},
	{
		rank: 5881,
		frequency: 9.18,
		lemma: "ロール"
	},
	{
		rank: 5882,
		frequency: 9.18,
		lemma: "岐阜"
	},
	{
		rank: 5883,
		frequency: 9.18,
		lemma: "ライバル"
	},
	{
		rank: 5884,
		frequency: 9.17,
		lemma: "あいつ"
	},
	{
		rank: 5885,
		frequency: 9.17,
		lemma: "バックトラック"
	},
	{
		rank: 5886,
		frequency: 9.16,
		lemma: "ジャー"
	},
	{
		rank: 5887,
		frequency: 9.16,
		lemma: "福"
	},
	{
		rank: 5888,
		frequency: 9.16,
		lemma: "反射"
	},
	{
		rank: 5889,
		frequency: 9.16,
		lemma: "福田"
	},
	{
		rank: 5890,
		frequency: 9.16,
		lemma: "使い"
	},
	{
		rank: 5891,
		frequency: 9.16,
		lemma: "原料"
	},
	{
		rank: 5892,
		frequency: 9.16,
		lemma: "中立"
	},
	{
		rank: 5893,
		frequency: 9.16,
		lemma: "心地よい"
	},
	{
		rank: 5894,
		frequency: 9.15,
		lemma: "曰く"
	},
	{
		rank: 5895,
		frequency: 9.15,
		lemma: "相違"
	},
	{
		rank: 5896,
		frequency: 9.15,
		lemma: "ぶん"
	},
	{
		rank: 5897,
		frequency: 9.14,
		lemma: "大抵"
	},
	{
		rank: 5898,
		frequency: 9.14,
		lemma: "特有"
	},
	{
		rank: 5899,
		frequency: 9.14,
		lemma: "山形"
	},
	{
		rank: 5900,
		frequency: 9.14,
		lemma: "ドキュメント"
	},
	{
		rank: 5901,
		frequency: 9.14,
		lemma: "電"
	},
	{
		rank: 5902,
		frequency: 9.14,
		lemma: "苦痛"
	},
	{
		rank: 5903,
		frequency: 9.13,
		lemma: "改訂"
	},
	{
		rank: 5904,
		frequency: 9.13,
		lemma: "アナログ"
	},
	{
		rank: 5905,
		frequency: 9.13,
		lemma: "ついつい"
	},
	{
		rank: 5906,
		frequency: 9.13,
		lemma: "脱出"
	},
	{
		rank: 5907,
		frequency: 9.13,
		lemma: "づく"
	},
	{
		rank: 5908,
		frequency: 9.13,
		lemma: "防犯"
	},
	{
		rank: 5909,
		frequency: 9.13,
		lemma: "汚い"
	},
	{
		rank: 5910,
		frequency: 9.13,
		lemma: "フジテレビ"
	},
	{
		rank: 5911,
		frequency: 9.13,
		lemma: "指針"
	},
	{
		rank: 5912,
		frequency: 9.12,
		lemma: "ビン"
	},
	{
		rank: 5913,
		frequency: 9.12,
		lemma: "主流"
	},
	{
		rank: 5914,
		frequency: 9.12,
		lemma: "友だち"
	},
	{
		rank: 5915,
		frequency: 9.11,
		lemma: "たどる"
	},
	{
		rank: 5916,
		frequency: 9.11,
		lemma: "浮く"
	},
	{
		rank: 5917,
		frequency: 9.1,
		lemma: "浅い"
	},
	{
		rank: 5918,
		frequency: 9.1,
		lemma: "テンポ"
	},
	{
		rank: 5919,
		frequency: 9.1,
		lemma: "この間"
	},
	{
		rank: 5920,
		frequency: 9.1,
		lemma: "上級"
	},
	{
		rank: 5921,
		frequency: 9.1,
		lemma: "徳"
	},
	{
		rank: 5922,
		frequency: 9.1,
		lemma: "全米"
	},
	{
		rank: 5923,
		frequency: 9.09,
		lemma: "お薦め"
	},
	{
		rank: 5924,
		frequency: 9.09,
		lemma: "なし"
	},
	{
		rank: 5925,
		frequency: 9.09,
		lemma: "刑務所"
	},
	{
		rank: 5926,
		frequency: 9.09,
		lemma: "クレジットカード"
	},
	{
		rank: 5927,
		frequency: 9.09,
		lemma: "まじめ"
	},
	{
		rank: 5928,
		frequency: 9.09,
		lemma: "技能"
	},
	{
		rank: 5929,
		frequency: 9.08,
		lemma: "出口"
	},
	{
		rank: 5930,
		frequency: 9.08,
		lemma: "次世代"
	},
	{
		rank: 5931,
		frequency: 9.08,
		lemma: "専攻"
	},
	{
		rank: 5932,
		frequency: 9.08,
		lemma: "湧く"
	},
	{
		rank: 5933,
		frequency: 9.08,
		lemma: "カネ"
	},
	{
		rank: 5934,
		frequency: 9.08,
		lemma: "しめる"
	},
	{
		rank: 5935,
		frequency: 9.07,
		lemma: "誓う"
	},
	{
		rank: 5936,
		frequency: 9.06,
		lemma: "尻"
	},
	{
		rank: 5937,
		frequency: 9.06,
		lemma: "覆い"
	},
	{
		rank: 5938,
		frequency: 9.06,
		lemma: "オーケストラ"
	},
	{
		rank: 5939,
		frequency: 9.06,
		lemma: "強める"
	},
	{
		rank: 5940,
		frequency: 9.06,
		lemma: "あんなに"
	},
	{
		rank: 5941,
		frequency: 9.06,
		lemma: "リラックス"
	},
	{
		rank: 5942,
		frequency: 9.05,
		lemma: "デフレ"
	},
	{
		rank: 5943,
		frequency: 9.05,
		lemma: "貧乏"
	},
	{
		rank: 5944,
		frequency: 9.05,
		lemma: "ギャップ"
	},
	{
		rank: 5945,
		frequency: 9.05,
		lemma: "すこし"
	},
	{
		rank: 5946,
		frequency: 9.05,
		lemma: "太平洋"
	},
	{
		rank: 5947,
		frequency: 9.04,
		lemma: "山崎"
	},
	{
		rank: 5948,
		frequency: 9.04,
		lemma: "刊"
	},
	{
		rank: 5949,
		frequency: 9.04,
		lemma: "婦"
	},
	{
		rank: 5950,
		frequency: 9.04,
		lemma: "進"
	},
	{
		rank: 5951,
		frequency: 9.03,
		lemma: "つまる"
	},
	{
		rank: 5952,
		frequency: 9.03,
		lemma: "ドイツ語"
	},
	{
		rank: 5953,
		frequency: 9.03,
		lemma: "舌"
	},
	{
		rank: 5954,
		frequency: 9.03,
		lemma: "硬い"
	},
	{
		rank: 5955,
		frequency: 9.03,
		lemma: "リフォーム"
	},
	{
		rank: 5956,
		frequency: 9.02,
		lemma: "苦しみ"
	},
	{
		rank: 5957,
		frequency: 9.02,
		lemma: "ファー"
	},
	{
		rank: 5958,
		frequency: 9.02,
		lemma: "賢治"
	},
	{
		rank: 5959,
		frequency: 9.01,
		lemma: "ハリウッド"
	},
	{
		rank: 5960,
		frequency: 9.01,
		lemma: "一斉"
	},
	{
		rank: 5961,
		frequency: 9.01,
		lemma: "厳密"
	},
	{
		rank: 5962,
		frequency: 9.01,
		lemma: "ボディ"
	},
	{
		rank: 5963,
		frequency: 9.01,
		lemma: "クマ"
	},
	{
		rank: 5964,
		frequency: 9.01,
		lemma: "県民"
	},
	{
		rank: 5965,
		frequency: 9,
		lemma: "ときどき"
	},
	{
		rank: 5966,
		frequency: 9,
		lemma: "費やす"
	},
	{
		rank: 5967,
		frequency: 8.99,
		lemma: "パーツ"
	},
	{
		rank: 5968,
		frequency: 8.99,
		lemma: "きっちり"
	},
	{
		rank: 5969,
		frequency: 8.99,
		lemma: "ファンタジー"
	},
	{
		rank: 5970,
		frequency: 8.99,
		lemma: "挑む"
	},
	{
		rank: 5971,
		frequency: 8.99,
		lemma: "区分"
	},
	{
		rank: 5972,
		frequency: 8.99,
		lemma: "おっ"
	},
	{
		rank: 5973,
		frequency: 8.98,
		lemma: "トレンド"
	},
	{
		rank: 5974,
		frequency: 8.98,
		lemma: "司令"
	},
	{
		rank: 5975,
		frequency: 8.98,
		lemma: "セル"
	},
	{
		rank: 5976,
		frequency: 8.98,
		lemma: "分裂"
	},
	{
		rank: 5977,
		frequency: 8.98,
		lemma: "日本国"
	},
	{
		rank: 5978,
		frequency: 8.97,
		lemma: "旗"
	},
	{
		rank: 5979,
		frequency: 8.97,
		lemma: "鎌倉"
	},
	{
		rank: 5980,
		frequency: 8.97,
		lemma: "気楽"
	},
	{
		rank: 5981,
		frequency: 8.97,
		lemma: "Ｌ"
	},
	{
		rank: 5982,
		frequency: 8.96,
		lemma: "白人"
	},
	{
		rank: 5983,
		frequency: 8.95,
		lemma: "かむ"
	},
	{
		rank: 5984,
		frequency: 8.95,
		lemma: "アンテナ"
	},
	{
		rank: 5985,
		frequency: 8.95,
		lemma: "コンサルティング"
	},
	{
		rank: 5986,
		frequency: 8.95,
		lemma: "経理"
	},
	{
		rank: 5987,
		frequency: 8.95,
		lemma: "徴収"
	},
	{
		rank: 5988,
		frequency: 8.94,
		lemma: "岡山"
	},
	{
		rank: 5989,
		frequency: 8.94,
		lemma: "具"
	},
	{
		rank: 5990,
		frequency: 8.93,
		lemma: "利害"
	},
	{
		rank: 5991,
		frequency: 8.93,
		lemma: "東南アジア"
	},
	{
		rank: 5992,
		frequency: 8.93,
		lemma: "共謀"
	},
	{
		rank: 5993,
		frequency: 8.93,
		lemma: "尽きる"
	},
	{
		rank: 5994,
		frequency: 8.93,
		lemma: "所長"
	},
	{
		rank: 5995,
		frequency: 8.92,
		lemma: "あいさつ"
	},
	{
		rank: 5996,
		frequency: 8.92,
		lemma: "レン"
	},
	{
		rank: 5997,
		frequency: 8.91,
		lemma: "スタンド"
	},
	{
		rank: 5998,
		frequency: 8.91,
		lemma: "重量"
	},
	{
		rank: 5999,
		frequency: 8.91,
		lemma: "汁"
	},
	{
		rank: 6000,
		frequency: 8.91,
		lemma: "一つ一つ"
	},
	{
		rank: 6001,
		frequency: 8.91,
		lemma: "道徳"
	},
	{
		rank: 6002,
		frequency: 8.9,
		lemma: "マリア"
	},
	{
		rank: 6003,
		frequency: 8.9,
		lemma: "混ぜる"
	},
	{
		rank: 6004,
		frequency: 8.9,
		lemma: "説く"
	},
	{
		rank: 6005,
		frequency: 8.9,
		lemma: "再編"
	},
	{
		rank: 6006,
		frequency: 8.89,
		lemma: "コマ"
	},
	{
		rank: 6007,
		frequency: 8.89,
		lemma: "ロケット"
	},
	{
		rank: 6008,
		frequency: 8.89,
		lemma: "喧嘩"
	},
	{
		rank: 6009,
		frequency: 8.89,
		lemma: "生地"
	},
	{
		rank: 6010,
		frequency: 8.89,
		lemma: "カ所"
	},
	{
		rank: 6011,
		frequency: 8.89,
		lemma: "中年"
	},
	{
		rank: 6012,
		frequency: 8.89,
		lemma: "擦る"
	},
	{
		rank: 6013,
		frequency: 8.89,
		lemma: "リアルタイム"
	},
	{
		rank: 6014,
		frequency: 8.88,
		lemma: "派手"
	},
	{
		rank: 6015,
		frequency: 8.88,
		lemma: "対決"
	},
	{
		rank: 6016,
		frequency: 8.87,
		lemma: "店頭"
	},
	{
		rank: 6017,
		frequency: 8.87,
		lemma: "情けない"
	},
	{
		rank: 6018,
		frequency: 8.87,
		lemma: "フォト"
	},
	{
		rank: 6019,
		frequency: 8.87,
		lemma: "大都市"
	},
	{
		rank: 6020,
		frequency: 8.87,
		lemma: "相次ぐ"
	},
	{
		rank: 6021,
		frequency: 8.87,
		lemma: "下る"
	},
	{
		rank: 6022,
		frequency: 8.87,
		lemma: "還元"
	},
	{
		rank: 6023,
		frequency: 8.86,
		lemma: "っ子"
	},
	{
		rank: 6024,
		frequency: 8.86,
		lemma: "入試"
	},
	{
		rank: 6025,
		frequency: 8.85,
		lemma: "首脳"
	},
	{
		rank: 6026,
		frequency: 8.85,
		lemma: "ワークショップ"
	},
	{
		rank: 6027,
		frequency: 8.85,
		lemma: "洋"
	},
	{
		rank: 6028,
		frequency: 8.85,
		lemma: "鍛える"
	},
	{
		rank: 6029,
		frequency: 8.85,
		lemma: "この頃"
	},
	{
		rank: 6030,
		frequency: 8.84,
		lemma: "博"
	},
	{
		rank: 6031,
		frequency: 8.84,
		lemma: "学級"
	},
	{
		rank: 6032,
		frequency: 8.84,
		lemma: "丸い"
	},
	{
		rank: 6033,
		frequency: 8.84,
		lemma: "案外"
	},
	{
		rank: 6034,
		frequency: 8.84,
		lemma: "苦情"
	},
	{
		rank: 6035,
		frequency: 8.84,
		lemma: "海上"
	},
	{
		rank: 6036,
		frequency: 8.83,
		lemma: "アマゾン"
	},
	{
		rank: 6037,
		frequency: 8.83,
		lemma: "バグ"
	},
	{
		rank: 6038,
		frequency: 8.83,
		lemma: "エイズ"
	},
	{
		rank: 6039,
		frequency: 8.83,
		lemma: "あてる"
	},
	{
		rank: 6040,
		frequency: 8.83,
		lemma: "同志"
	},
	{
		rank: 6041,
		frequency: 8.82,
		lemma: "ハー"
	},
	{
		rank: 6042,
		frequency: 8.82,
		lemma: "デー"
	},
	{
		rank: 6043,
		frequency: 8.81,
		lemma: "〓"
	},
	{
		rank: 6044,
		frequency: 8.81,
		lemma: "成熟"
	},
	{
		rank: 6045,
		frequency: 8.81,
		lemma: "エンド"
	},
	{
		rank: 6046,
		frequency: 8.81,
		lemma: "工"
	},
	{
		rank: 6047,
		frequency: 8.81,
		lemma: "フジ"
	},
	{
		rank: 6048,
		frequency: 8.8,
		lemma: "目覚める"
	},
	{
		rank: 6049,
		frequency: 8.8,
		lemma: "長時間"
	},
	{
		rank: 6050,
		frequency: 8.8,
		lemma: "女王"
	},
	{
		rank: 6051,
		frequency: 8.8,
		lemma: "系統"
	},
	{
		rank: 6052,
		frequency: 8.8,
		lemma: "独裁"
	},
	{
		rank: 6053,
		frequency: 8.8,
		lemma: "嫁"
	},
	{
		rank: 6054,
		frequency: 8.79,
		lemma: "立"
	},
	{
		rank: 6055,
		frequency: 8.79,
		lemma: "分布"
	},
	{
		rank: 6056,
		frequency: 8.79,
		lemma: "プロデューサー"
	},
	{
		rank: 6057,
		frequency: 8.79,
		lemma: "フェイス"
	},
	{
		rank: 6058,
		frequency: 8.79,
		lemma: "動"
	},
	{
		rank: 6059,
		frequency: 8.78,
		lemma: "騒動"
	},
	{
		rank: 6060,
		frequency: 8.78,
		lemma: "妨害"
	},
	{
		rank: 6061,
		frequency: 8.78,
		lemma: "禁煙"
	},
	{
		rank: 6062,
		frequency: 8.78,
		lemma: "はじめまして"
	},
	{
		rank: 6063,
		frequency: 8.78,
		lemma: "そこら"
	},
	{
		rank: 6064,
		frequency: 8.78,
		lemma: "安易"
	},
	{
		rank: 6065,
		frequency: 8.77,
		lemma: "ブレーキ"
	},
	{
		rank: 6066,
		frequency: 8.77,
		lemma: "実体"
	},
	{
		rank: 6067,
		frequency: 8.77,
		lemma: "返還"
	},
	{
		rank: 6068,
		frequency: 8.77,
		lemma: "日系"
	},
	{
		rank: 6069,
		frequency: 8.77,
		lemma: "小屋"
	},
	{
		rank: 6070,
		frequency: 8.77,
		lemma: "営利"
	},
	{
		rank: 6071,
		frequency: 8.76,
		lemma: "介"
	},
	{
		rank: 6072,
		frequency: 8.76,
		lemma: "タレント"
	},
	{
		rank: 6073,
		frequency: 8.76,
		lemma: "おまけ"
	},
	{
		rank: 6074,
		frequency: 8.76,
		lemma: "マルチ"
	},
	{
		rank: 6075,
		frequency: 8.76,
		lemma: "藤原"
	},
	{
		rank: 6076,
		frequency: 8.76,
		lemma: "モンゴル"
	},
	{
		rank: 6077,
		frequency: 8.75,
		lemma: "アラブ"
	},
	{
		rank: 6078,
		frequency: 8.75,
		lemma: "野党"
	},
	{
		rank: 6079,
		frequency: 8.74,
		lemma: "言うまでもない"
	},
	{
		rank: 6080,
		frequency: 8.74,
		lemma: "力強い"
	},
	{
		rank: 6081,
		frequency: 8.74,
		lemma: "倶楽部"
	},
	{
		rank: 6082,
		frequency: 8.74,
		lemma: "譲渡"
	},
	{
		rank: 6083,
		frequency: 8.74,
		lemma: "役人"
	},
	{
		rank: 6084,
		frequency: 8.74,
		lemma: "回り"
	},
	{
		rank: 6085,
		frequency: 8.74,
		lemma: "（株）"
	},
	{
		rank: 6086,
		frequency: 8.74,
		lemma: "他社"
	},
	{
		rank: 6087,
		frequency: 8.74,
		lemma: "ＪＲ"
	},
	{
		rank: 6088,
		frequency: 8.73,
		lemma: "黄色"
	},
	{
		rank: 6089,
		frequency: 8.72,
		lemma: "属する"
	},
	{
		rank: 6090,
		frequency: 8.72,
		lemma: "高価"
	},
	{
		rank: 6091,
		frequency: 8.72,
		lemma: "亜"
	},
	{
		rank: 6092,
		frequency: 8.72,
		lemma: "改める"
	},
	{
		rank: 6093,
		frequency: 8.72,
		lemma: "売り場"
	},
	{
		rank: 6094,
		frequency: 8.71,
		lemma: "親しい"
	},
	{
		rank: 6095,
		frequency: 8.71,
		lemma: "公益"
	},
	{
		rank: 6096,
		frequency: 8.71,
		lemma: "スクリプト"
	},
	{
		rank: 6097,
		frequency: 8.71,
		lemma: "どうにか"
	},
	{
		rank: 6098,
		frequency: 8.71,
		lemma: "そうして"
	},
	{
		rank: 6099,
		frequency: 8.7,
		lemma: "全文"
	},
	{
		rank: 6100,
		frequency: 8.7,
		lemma: "たてる"
	},
	{
		rank: 6101,
		frequency: 8.7,
		lemma: "七月"
	},
	{
		rank: 6102,
		frequency: 8.7,
		lemma: "ウィンドウ"
	},
	{
		rank: 6103,
		frequency: 8.69,
		lemma: "達する"
	},
	{
		rank: 6104,
		frequency: 8.69,
		lemma: "ウェア"
	},
	{
		rank: 6105,
		frequency: 8.69,
		lemma: "心がける"
	},
	{
		rank: 6106,
		frequency: 8.69,
		lemma: "焼酎"
	},
	{
		rank: 6107,
		frequency: 8.69,
		lemma: "住"
	},
	{
		rank: 6108,
		frequency: 8.68,
		lemma: "パンツ"
	},
	{
		rank: 6109,
		frequency: 8.68,
		lemma: "土曜"
	},
	{
		rank: 6110,
		frequency: 8.68,
		lemma: "反面"
	},
	{
		rank: 6111,
		frequency: 8.68,
		lemma: "イオン"
	},
	{
		rank: 6112,
		frequency: 8.67,
		lemma: "迫力"
	},
	{
		rank: 6113,
		frequency: 8.67,
		lemma: "僕たち"
	},
	{
		rank: 6114,
		frequency: 8.67,
		lemma: "脱"
	},
	{
		rank: 6115,
		frequency: 8.67,
		lemma: "支払"
	},
	{
		rank: 6116,
		frequency: 8.67,
		lemma: "札"
	},
	{
		rank: 6117,
		frequency: 8.67,
		lemma: "フォント"
	},
	{
		rank: 6118,
		frequency: 8.67,
		lemma: "理性"
	},
	{
		rank: 6119,
		frequency: 8.67,
		lemma: "卒"
	},
	{
		rank: 6120,
		frequency: 8.66,
		lemma: "方策"
	},
	{
		rank: 6121,
		frequency: 8.66,
		lemma: "有害"
	},
	{
		rank: 6122,
		frequency: 8.66,
		lemma: "上げ"
	},
	{
		rank: 6123,
		frequency: 8.66,
		lemma: "菌"
	},
	{
		rank: 6124,
		frequency: 8.66,
		lemma: "クリスチャン"
	},
	{
		rank: 6125,
		frequency: 8.66,
		lemma: "成"
	},
	{
		rank: 6126,
		frequency: 8.65,
		lemma: "狂う"
	},
	{
		rank: 6127,
		frequency: 8.65,
		lemma: "Ｘ"
	},
	{
		rank: 6128,
		frequency: 8.65,
		lemma: "乗客"
	},
	{
		rank: 6129,
		frequency: 8.65,
		lemma: "幸"
	},
	{
		rank: 6130,
		frequency: 8.65,
		lemma: "布団"
	},
	{
		rank: 6131,
		frequency: 8.65,
		lemma: "片手"
	},
	{
		rank: 6132,
		frequency: 8.65,
		lemma: "かぎり"
	},
	{
		rank: 6133,
		frequency: 8.65,
		lemma: "終る"
	},
	{
		rank: 6134,
		frequency: 8.65,
		lemma: "イヤー"
	},
	{
		rank: 6135,
		frequency: 8.64,
		lemma: "スタンス"
	},
	{
		rank: 6136,
		frequency: 8.64,
		lemma: "座席"
	},
	{
		rank: 6137,
		frequency: 8.63,
		lemma: "盛ん"
	},
	{
		rank: 6138,
		frequency: 8.63,
		lemma: "松井"
	},
	{
		rank: 6139,
		frequency: 8.63,
		lemma: "形状"
	},
	{
		rank: 6140,
		frequency: 8.63,
		lemma: "ほら"
	},
	{
		rank: 6141,
		frequency: 8.63,
		lemma: "ログイン"
	},
	{
		rank: 6142,
		frequency: 8.63,
		lemma: "ナンバー"
	},
	{
		rank: 6143,
		frequency: 8.63,
		lemma: "推奨"
	},
	{
		rank: 6144,
		frequency: 8.63,
		lemma: "建て"
	},
	{
		rank: 6145,
		frequency: 8.63,
		lemma: "サイクル"
	},
	{
		rank: 6146,
		frequency: 8.63,
		lemma: "立ち寄る"
	},
	{
		rank: 6147,
		frequency: 8.62,
		lemma: "常"
	},
	{
		rank: 6148,
		frequency: 8.62,
		lemma: "ゲート"
	},
	{
		rank: 6149,
		frequency: 8.62,
		lemma: "主権"
	},
	{
		rank: 6150,
		frequency: 8.62,
		lemma: "もどる"
	},
	{
		rank: 6151,
		frequency: 8.62,
		lemma: "瞳"
	},
	{
		rank: 6152,
		frequency: 8.61,
		lemma: "遭う"
	},
	{
		rank: 6153,
		frequency: 8.61,
		lemma: "開拓"
	},
	{
		rank: 6154,
		frequency: 8.61,
		lemma: "右側"
	},
	{
		rank: 6155,
		frequency: 8.61,
		lemma: "メイク"
	},
	{
		rank: 6156,
		frequency: 8.6,
		lemma: "原点"
	},
	{
		rank: 6157,
		frequency: 8.6,
		lemma: "胃"
	},
	{
		rank: 6158,
		frequency: 8.6,
		lemma: "粒"
	},
	{
		rank: 6159,
		frequency: 8.59,
		lemma: "夜間"
	},
	{
		rank: 6160,
		frequency: 8.59,
		lemma: "並み"
	},
	{
		rank: 6161,
		frequency: 8.59,
		lemma: "ストップ"
	},
	{
		rank: 6162,
		frequency: 8.58,
		lemma: "速"
	},
	{
		rank: 6163,
		frequency: 8.58,
		lemma: "年収"
	},
	{
		rank: 6164,
		frequency: 8.58,
		lemma: "等しい"
	},
	{
		rank: 6165,
		frequency: 8.58,
		lemma: "偽造"
	},
	{
		rank: 6166,
		frequency: 8.58,
		lemma: "出品"
	},
	{
		rank: 6167,
		frequency: 8.57,
		lemma: "写る"
	},
	{
		rank: 6168,
		frequency: 8.57,
		lemma: "今年度"
	},
	{
		rank: 6169,
		frequency: 8.57,
		lemma: "散る"
	},
	{
		rank: 6170,
		frequency: 8.56,
		lemma: "服装"
	},
	{
		rank: 6171,
		frequency: 8.56,
		lemma: "いち"
	},
	{
		rank: 6172,
		frequency: 8.55,
		lemma: "利点"
	},
	{
		rank: 6173,
		frequency: 8.55,
		lemma: "アップデート"
	},
	{
		rank: 6174,
		frequency: 8.55,
		lemma: "繰り広げる"
	},
	{
		rank: 6175,
		frequency: 8.54,
		lemma: "短縮"
	},
	{
		rank: 6176,
		frequency: 8.54,
		lemma: "貨幣"
	},
	{
		rank: 6177,
		frequency: 8.54,
		lemma: "難"
	},
	{
		rank: 6178,
		frequency: 8.54,
		lemma: "中旬"
	},
	{
		rank: 6179,
		frequency: 8.54,
		lemma: "納める"
	},
	{
		rank: 6180,
		frequency: 8.54,
		lemma: "大した"
	},
	{
		rank: 6181,
		frequency: 8.54,
		lemma: "青山"
	},
	{
		rank: 6182,
		frequency: 8.53,
		lemma: "膨らむ"
	},
	{
		rank: 6183,
		frequency: 8.53,
		lemma: "産地"
	},
	{
		rank: 6184,
		frequency: 8.53,
		lemma: "生える"
	},
	{
		rank: 6185,
		frequency: 8.53,
		lemma: "民衆"
	},
	{
		rank: 6186,
		frequency: 8.53,
		lemma: "九月"
	},
	{
		rank: 6187,
		frequency: 8.52,
		lemma: "年寄り"
	},
	{
		rank: 6188,
		frequency: 8.52,
		lemma: "仕上げる"
	},
	{
		rank: 6189,
		frequency: 8.52,
		lemma: "まっ"
	},
	{
		rank: 6190,
		frequency: 8.52,
		lemma: "矢"
	},
	{
		rank: 6191,
		frequency: 8.52,
		lemma: "ビット"
	},
	{
		rank: 6192,
		frequency: 8.52,
		lemma: "厚"
	},
	{
		rank: 6193,
		frequency: 8.51,
		lemma: "偏見"
	},
	{
		rank: 6194,
		frequency: 8.51,
		lemma: "ヘン"
	},
	{
		rank: 6195,
		frequency: 8.5,
		lemma: "教訓"
	},
	{
		rank: 6196,
		frequency: 8.5,
		lemma: "坂本"
	},
	{
		rank: 6197,
		frequency: 8.5,
		lemma: "視察"
	},
	{
		rank: 6198,
		frequency: 8.5,
		lemma: "八月"
	},
	{
		rank: 6199,
		frequency: 8.5,
		lemma: "主任"
	},
	{
		rank: 6200,
		frequency: 8.48,
		lemma: "リゾート"
	},
	{
		rank: 6201,
		frequency: 8.48,
		lemma: "響き"
	},
	{
		rank: 6202,
		frequency: 8.48,
		lemma: "悲惨"
	},
	{
		rank: 6203,
		frequency: 8.48,
		lemma: "強いる"
	},
	{
		rank: 6204,
		frequency: 8.48,
		lemma: "ワクワク"
	},
	{
		rank: 6205,
		frequency: 8.48,
		lemma: "言論"
	},
	{
		rank: 6206,
		frequency: 8.48,
		lemma: "翼"
	},
	{
		rank: 6207,
		frequency: 8.48,
		lemma: "来月"
	},
	{
		rank: 6208,
		frequency: 8.47,
		lemma: "主題"
	},
	{
		rank: 6209,
		frequency: 8.47,
		lemma: "早急"
	},
	{
		rank: 6210,
		frequency: 8.47,
		lemma: "対談"
	},
	{
		rank: 6211,
		frequency: 8.47,
		lemma: "ベルト"
	},
	{
		rank: 6212,
		frequency: 8.47,
		lemma: "選定"
	},
	{
		rank: 6213,
		frequency: 8.47,
		lemma: "中断"
	},
	{
		rank: 6214,
		frequency: 8.46,
		lemma: "ムービー"
	},
	{
		rank: 6215,
		frequency: 8.46,
		lemma: "条項"
	},
	{
		rank: 6216,
		frequency: 8.46,
		lemma: "添える"
	},
	{
		rank: 6217,
		frequency: 8.46,
		lemma: "のぞく"
	},
	{
		rank: 6218,
		frequency: 8.46,
		lemma: "保育園"
	},
	{
		rank: 6219,
		frequency: 8.46,
		lemma: "痩せる"
	},
	{
		rank: 6220,
		frequency: 8.46,
		lemma: "福音"
	},
	{
		rank: 6221,
		frequency: 8.46,
		lemma: "診察"
	},
	{
		rank: 6222,
		frequency: 8.46,
		lemma: "縛る"
	},
	{
		rank: 6223,
		frequency: 8.45,
		lemma: "東アジア"
	},
	{
		rank: 6224,
		frequency: 8.45,
		lemma: "マジック"
	},
	{
		rank: 6225,
		frequency: 8.44,
		lemma: "正体"
	},
	{
		rank: 6226,
		frequency: 8.44,
		lemma: "原発"
	},
	{
		rank: 6227,
		frequency: 8.44,
		lemma: "自作"
	},
	{
		rank: 6228,
		frequency: 8.44,
		lemma: "キン"
	},
	{
		rank: 6229,
		frequency: 8.43,
		lemma: "〃"
	},
	{
		rank: 6230,
		frequency: 8.43,
		lemma: "生き残る"
	},
	{
		rank: 6231,
		frequency: 8.43,
		lemma: "テンション"
	},
	{
		rank: 6232,
		frequency: 8.42,
		lemma: "土日"
	},
	{
		rank: 6233,
		frequency: 8.42,
		lemma: "デパート"
	},
	{
		rank: 6234,
		frequency: 8.42,
		lemma: "偽装"
	},
	{
		rank: 6235,
		frequency: 8.42,
		lemma: "ジャケット"
	},
	{
		rank: 6236,
		frequency: 8.42,
		lemma: "富山"
	},
	{
		rank: 6237,
		frequency: 8.42,
		lemma: "作り方"
	},
	{
		rank: 6238,
		frequency: 8.42,
		lemma: "入会"
	},
	{
		rank: 6239,
		frequency: 8.42,
		lemma: "不能"
	},
	{
		rank: 6240,
		frequency: 8.41,
		lemma: "レジ"
	},
	{
		rank: 6241,
		frequency: 8.41,
		lemma: "保"
	},
	{
		rank: 6242,
		frequency: 8.41,
		lemma: "そろう"
	},
	{
		rank: 6243,
		frequency: 8.41,
		lemma: "刻む"
	},
	{
		rank: 6244,
		frequency: 8.41,
		lemma: "捧げる"
	},
	{
		rank: 6245,
		frequency: 8.4,
		lemma: "葬儀"
	},
	{
		rank: 6246,
		frequency: 8.4,
		lemma: "起源"
	},
	{
		rank: 6247,
		frequency: 8.4,
		lemma: "攻める"
	},
	{
		rank: 6248,
		frequency: 8.4,
		lemma: "国防"
	},
	{
		rank: 6249,
		frequency: 8.4,
		lemma: "アカウント"
	},
	{
		rank: 6250,
		frequency: 8.4,
		lemma: "黄"
	},
	{
		rank: 6251,
		frequency: 8.4,
		lemma: "系列"
	},
	{
		rank: 6252,
		frequency: 8.4,
		lemma: "礼拝"
	},
	{
		rank: 6253,
		frequency: 8.4,
		lemma: "夢中"
	},
	{
		rank: 6254,
		frequency: 8.39,
		lemma: "持ち出す"
	},
	{
		rank: 6255,
		frequency: 8.39,
		lemma: "エコ"
	},
	{
		rank: 6256,
		frequency: 8.39,
		lemma: "クレーム"
	},
	{
		rank: 6257,
		frequency: 8.39,
		lemma: "ミッション"
	},
	{
		rank: 6258,
		frequency: 8.38,
		lemma: "煮る"
	},
	{
		rank: 6259,
		frequency: 8.38,
		lemma: "本年"
	},
	{
		rank: 6260,
		frequency: 8.38,
		lemma: "複合"
	},
	{
		rank: 6261,
		frequency: 8.38,
		lemma: "アイコ"
	},
	{
		rank: 6262,
		frequency: 8.38,
		lemma: "リサーチ"
	},
	{
		rank: 6263,
		frequency: 8.38,
		lemma: "気象"
	},
	{
		rank: 6264,
		frequency: 8.37,
		lemma: "摂取"
	},
	{
		rank: 6265,
		frequency: 8.37,
		lemma: "火災"
	},
	{
		rank: 6266,
		frequency: 8.37,
		lemma: "近藤"
	},
	{
		rank: 6267,
		frequency: 8.37,
		lemma: "やり取り"
	},
	{
		rank: 6268,
		frequency: 8.37,
		lemma: "オール"
	},
	{
		rank: 6269,
		frequency: 8.37,
		lemma: "被る"
	},
	{
		rank: 6270,
		frequency: 8.37,
		lemma: "混む"
	},
	{
		rank: 6271,
		frequency: 8.37,
		lemma: "裸"
	},
	{
		rank: 6272,
		frequency: 8.37,
		lemma: "ごみ"
	},
	{
		rank: 6273,
		frequency: 8.37,
		lemma: "和解"
	},
	{
		rank: 6274,
		frequency: 8.37,
		lemma: "トンネル"
	},
	{
		rank: 6275,
		frequency: 8.36,
		lemma: "そっち"
	},
	{
		rank: 6276,
		frequency: 8.36,
		lemma: "二月"
	},
	{
		rank: 6277,
		frequency: 8.36,
		lemma: "打"
	},
	{
		rank: 6278,
		frequency: 8.36,
		lemma: "バッテリー"
	},
	{
		rank: 6279,
		frequency: 8.35,
		lemma: "ノン"
	},
	{
		rank: 6280,
		frequency: 8.35,
		lemma: "名乗る"
	},
	{
		rank: 6281,
		frequency: 8.35,
		lemma: "恐縮"
	},
	{
		rank: 6282,
		frequency: 8.35,
		lemma: "そしたら"
	},
	{
		rank: 6283,
		frequency: 8.35,
		lemma: "タダ"
	},
	{
		rank: 6284,
		frequency: 8.35,
		lemma: "球団"
	},
	{
		rank: 6285,
		frequency: 8.35,
		lemma: "おまけに"
	},
	{
		rank: 6286,
		frequency: 8.35,
		lemma: "合宿"
	},
	{
		rank: 6287,
		frequency: 8.35,
		lemma: "飛躍"
	},
	{
		rank: 6288,
		frequency: 8.34,
		lemma: "真相"
	},
	{
		rank: 6289,
		frequency: 8.34,
		lemma: "黄金"
	},
	{
		rank: 6290,
		frequency: 8.34,
		lemma: "補正"
	},
	{
		rank: 6291,
		frequency: 8.34,
		lemma: "ゾーン"
	},
	{
		rank: 6292,
		frequency: 8.33,
		lemma: "家賃"
	},
	{
		rank: 6293,
		frequency: 8.33,
		lemma: "居酒屋"
	},
	{
		rank: 6294,
		frequency: 8.33,
		lemma: "簡易"
	},
	{
		rank: 6295,
		frequency: 8.33,
		lemma: "同日"
	},
	{
		rank: 6296,
		frequency: 8.33,
		lemma: "ずれる"
	},
	{
		rank: 6297,
		frequency: 8.33,
		lemma: "キャスト"
	},
	{
		rank: 6298,
		frequency: 8.33,
		lemma: "三郎"
	},
	{
		rank: 6299,
		frequency: 8.33,
		lemma: "規範"
	},
	{
		rank: 6300,
		frequency: 8.33,
		lemma: "公衆"
	},
	{
		rank: 6301,
		frequency: 8.33,
		lemma: "脆弱"
	},
	{
		rank: 6302,
		frequency: 8.32,
		lemma: "ことし"
	},
	{
		rank: 6303,
		frequency: 8.32,
		lemma: "打ち出す"
	},
	{
		rank: 6304,
		frequency: 8.31,
		lemma: "ビーチ"
	},
	{
		rank: 6305,
		frequency: 8.31,
		lemma: "主として"
	},
	{
		rank: 6306,
		frequency: 8.31,
		lemma: "逃れる"
	},
	{
		rank: 6307,
		frequency: 8.31,
		lemma: "刺す"
	},
	{
		rank: 6308,
		frequency: 8.31,
		lemma: "阻止"
	},
	{
		rank: 6309,
		frequency: 8.31,
		lemma: "ほっと"
	},
	{
		rank: 6310,
		frequency: 8.31,
		lemma: "持ち主"
	},
	{
		rank: 6311,
		frequency: 8.31,
		lemma: "町村"
	},
	{
		rank: 6312,
		frequency: 8.31,
		lemma: "預ける"
	},
	{
		rank: 6313,
		frequency: 8.31,
		lemma: "令"
	},
	{
		rank: 6314,
		frequency: 8.3,
		lemma: "真似"
	},
	{
		rank: 6315,
		frequency: 8.3,
		lemma: "ゆとり"
	},
	{
		rank: 6316,
		frequency: 8.3,
		lemma: "アメリカン"
	},
	{
		rank: 6317,
		frequency: 8.3,
		lemma: "添付"
	},
	{
		rank: 6318,
		frequency: 8.3,
		lemma: "花粉"
	},
	{
		rank: 6319,
		frequency: 8.29,
		lemma: "塗装"
	},
	{
		rank: 6320,
		frequency: 8.29,
		lemma: "堪能"
	},
	{
		rank: 6321,
		frequency: 8.29,
		lemma: "晴れ"
	},
	{
		rank: 6322,
		frequency: 8.29,
		lemma: "子会社"
	},
	{
		rank: 6323,
		frequency: 8.29,
		lemma: "存続"
	},
	{
		rank: 6324,
		frequency: 8.29,
		lemma: "気持ちよい"
	},
	{
		rank: 6325,
		frequency: 8.28,
		lemma: "国庫"
	},
	{
		rank: 6326,
		frequency: 8.28,
		lemma: "ボケ"
	},
	{
		rank: 6327,
		frequency: 8.28,
		lemma: "石井"
	},
	{
		rank: 6328,
		frequency: 8.27,
		lemma: "シミュレーション"
	},
	{
		rank: 6329,
		frequency: 8.27,
		lemma: "中島"
	},
	{
		rank: 6330,
		frequency: 8.27,
		lemma: "採択"
	},
	{
		rank: 6331,
		frequency: 8.27,
		lemma: "識別"
	},
	{
		rank: 6332,
		frequency: 8.27,
		lemma: "無断"
	},
	{
		rank: 6333,
		frequency: 8.26,
		lemma: "有す"
	},
	{
		rank: 6334,
		frequency: 8.26,
		lemma: "ボート"
	},
	{
		rank: 6335,
		frequency: 8.26,
		lemma: "スケール"
	},
	{
		rank: 6336,
		frequency: 8.25,
		lemma: "引き"
	},
	{
		rank: 6337,
		frequency: 8.25,
		lemma: "恥"
	},
	{
		rank: 6338,
		frequency: 8.25,
		lemma: "不便"
	},
	{
		rank: 6339,
		frequency: 8.25,
		lemma: "焼き"
	},
	{
		rank: 6340,
		frequency: 8.25,
		lemma: "英雄"
	},
	{
		rank: 6341,
		frequency: 8.25,
		lemma: "拡充"
	},
	{
		rank: 6342,
		frequency: 8.25,
		lemma: "造"
	},
	{
		rank: 6343,
		frequency: 8.24,
		lemma: "涼しい"
	},
	{
		rank: 6344,
		frequency: 8.24,
		lemma: "ビッグ"
	},
	{
		rank: 6345,
		frequency: 8.24,
		lemma: "中山"
	},
	{
		rank: 6346,
		frequency: 8.24,
		lemma: "ぢ"
	},
	{
		rank: 6347,
		frequency: 8.24,
		lemma: "歩行"
	},
	{
		rank: 6348,
		frequency: 8.24,
		lemma: "今まで"
	},
	{
		rank: 6349,
		frequency: 8.24,
		lemma: "ガイドライン"
	},
	{
		rank: 6350,
		frequency: 8.23,
		lemma: "そっくり"
	},
	{
		rank: 6351,
		frequency: 8.23,
		lemma: "青少年"
	},
	{
		rank: 6352,
		frequency: 8.23,
		lemma: "広域"
	},
	{
		rank: 6353,
		frequency: 8.23,
		lemma: "名簿"
	},
	{
		rank: 6354,
		frequency: 8.23,
		lemma: "優位"
	},
	{
		rank: 6355,
		frequency: 8.22,
		lemma: "雄"
	},
	{
		rank: 6356,
		frequency: 8.22,
		lemma: "命じる"
	},
	{
		rank: 6357,
		frequency: 8.22,
		lemma: "スタンダード"
	},
	{
		rank: 6358,
		frequency: 8.22,
		lemma: "小生"
	},
	{
		rank: 6359,
		frequency: 8.22,
		lemma: "行列"
	},
	{
		rank: 6360,
		frequency: 8.22,
		lemma: "ドレス"
	},
	{
		rank: 6361,
		frequency: 8.21,
		lemma: "麻薬"
	},
	{
		rank: 6362,
		frequency: 8.21,
		lemma: "依然として"
	},
	{
		rank: 6363,
		frequency: 8.21,
		lemma: "青森"
	},
	{
		rank: 6364,
		frequency: 8.21,
		lemma: "名刺"
	},
	{
		rank: 6365,
		frequency: 8.21,
		lemma: "五輪"
	},
	{
		rank: 6366,
		frequency: 8.21,
		lemma: "配達"
	},
	{
		rank: 6367,
		frequency: 8.21,
		lemma: "ＮＰＯ"
	},
	{
		rank: 6368,
		frequency: 8.21,
		lemma: "がた"
	},
	{
		rank: 6369,
		frequency: 8.2,
		lemma: "ディスプレイ"
	},
	{
		rank: 6370,
		frequency: 8.2,
		lemma: "バル"
	},
	{
		rank: 6371,
		frequency: 8.2,
		lemma: "よね"
	},
	{
		rank: 6372,
		frequency: 8.2,
		lemma: "独り言"
	},
	{
		rank: 6373,
		frequency: 8.19,
		lemma: "誠実"
	},
	{
		rank: 6374,
		frequency: 8.19,
		lemma: "せいぜい"
	},
	{
		rank: 6375,
		frequency: 8.19,
		lemma: "和田"
	},
	{
		rank: 6376,
		frequency: 8.19,
		lemma: "良心"
	},
	{
		rank: 6377,
		frequency: 8.19,
		lemma: "頻度"
	},
	{
		rank: 6378,
		frequency: 8.19,
		lemma: "単行本"
	},
	{
		rank: 6379,
		frequency: 8.18,
		lemma: "ごらん"
	},
	{
		rank: 6380,
		frequency: 8.18,
		lemma: "他国"
	},
	{
		rank: 6381,
		frequency: 8.18,
		lemma: "皮肉"
	},
	{
		rank: 6382,
		frequency: 8.18,
		lemma: "連動"
	},
	{
		rank: 6383,
		frequency: 8.17,
		lemma: "奉仕"
	},
	{
		rank: 6384,
		frequency: 8.17,
		lemma: "公認"
	},
	{
		rank: 6385,
		frequency: 8.17,
		lemma: "砂漠"
	},
	{
		rank: 6386,
		frequency: 8.17,
		lemma: "猿"
	},
	{
		rank: 6387,
		frequency: 8.17,
		lemma: "局面"
	},
	{
		rank: 6388,
		frequency: 8.16,
		lemma: "安保"
	},
	{
		rank: 6389,
		frequency: 8.16,
		lemma: "住居"
	},
	{
		rank: 6390,
		frequency: 8.16,
		lemma: "スロー"
	},
	{
		rank: 6391,
		frequency: 8.16,
		lemma: "発す"
	},
	{
		rank: 6392,
		frequency: 8.16,
		lemma: "追い込む"
	},
	{
		rank: 6393,
		frequency: 8.16,
		lemma: "月刊"
	},
	{
		rank: 6394,
		frequency: 8.16,
		lemma: "是正"
	},
	{
		rank: 6395,
		frequency: 8.15,
		lemma: "後期"
	},
	{
		rank: 6396,
		frequency: 8.15,
		lemma: "わし"
	},
	{
		rank: 6397,
		frequency: 8.15,
		lemma: "梅"
	},
	{
		rank: 6398,
		frequency: 8.15,
		lemma: "竜"
	},
	{
		rank: 6399,
		frequency: 8.14,
		lemma: "イライラ"
	},
	{
		rank: 6400,
		frequency: 8.14,
		lemma: "土壌"
	},
	{
		rank: 6401,
		frequency: 8.14,
		lemma: "詩人"
	},
	{
		rank: 6402,
		frequency: 8.14,
		lemma: "分配"
	},
	{
		rank: 6403,
		frequency: 8.14,
		lemma: "バリ"
	},
	{
		rank: 6404,
		frequency: 8.13,
		lemma: "締結"
	},
	{
		rank: 6405,
		frequency: 8.13,
		lemma: "持参"
	},
	{
		rank: 6406,
		frequency: 8.13,
		lemma: "エリート"
	},
	{
		rank: 6407,
		frequency: 8.13,
		lemma: "抗"
	},
	{
		rank: 6408,
		frequency: 8.13,
		lemma: "左翼"
	},
	{
		rank: 6409,
		frequency: 8.12,
		lemma: "藤"
	},
	{
		rank: 6410,
		frequency: 8.12,
		lemma: "霧"
	},
	{
		rank: 6411,
		frequency: 8.12,
		lemma: "ブルース"
	},
	{
		rank: 6412,
		frequency: 8.12,
		lemma: "まく"
	},
	{
		rank: 6413,
		frequency: 8.12,
		lemma: "腐る"
	},
	{
		rank: 6414,
		frequency: 8.12,
		lemma: "定番"
	},
	{
		rank: 6415,
		frequency: 8.12,
		lemma: "いくらでも"
	},
	{
		rank: 6416,
		frequency: 8.11,
		lemma: "割り"
	},
	{
		rank: 6417,
		frequency: 8.11,
		lemma: "ライヴ"
	},
	{
		rank: 6418,
		frequency: 8.11,
		lemma: "修復"
	},
	{
		rank: 6419,
		frequency: 8.11,
		lemma: "敬意"
	},
	{
		rank: 6420,
		frequency: 8.11,
		lemma: "貫く"
	},
	{
		rank: 6421,
		frequency: 8.11,
		lemma: "王様"
	},
	{
		rank: 6422,
		frequency: 8.11,
		lemma: "小野"
	},
	{
		rank: 6423,
		frequency: 8.11,
		lemma: "左側"
	},
	{
		rank: 6424,
		frequency: 8.1,
		lemma: "プレッシャー"
	},
	{
		rank: 6425,
		frequency: 8.1,
		lemma: "ショート"
	},
	{
		rank: 6426,
		frequency: 8.1,
		lemma: "ふつう"
	},
	{
		rank: 6427,
		frequency: 8.1,
		lemma: "明白"
	},
	{
		rank: 6428,
		frequency: 8.1,
		lemma: "己"
	},
	{
		rank: 6429,
		frequency: 8.09,
		lemma: "支障"
	},
	{
		rank: 6430,
		frequency: 8.09,
		lemma: "大胆"
	},
	{
		rank: 6431,
		frequency: 8.09,
		lemma: "除去"
	},
	{
		rank: 6432,
		frequency: 8.09,
		lemma: "罰"
	},
	{
		rank: 6433,
		frequency: 8.09,
		lemma: "エアコン"
	},
	{
		rank: 6434,
		frequency: 8.08,
		lemma: "展覧"
	},
	{
		rank: 6435,
		frequency: 8.08,
		lemma: "納税"
	},
	{
		rank: 6436,
		frequency: 8.08,
		lemma: "シカゴ"
	},
	{
		rank: 6437,
		frequency: 8.08,
		lemma: "ハンドル"
	},
	{
		rank: 6438,
		frequency: 8.08,
		lemma: "小遣い"
	},
	{
		rank: 6439,
		frequency: 8.07,
		lemma: "丁度"
	},
	{
		rank: 6440,
		frequency: 8.07,
		lemma: "きちっと"
	},
	{
		rank: 6441,
		frequency: 8.06,
		lemma: "からだ"
	},
	{
		rank: 6442,
		frequency: 8.06,
		lemma: "遠慮"
	},
	{
		rank: 6443,
		frequency: 8.06,
		lemma: "退屈"
	},
	{
		rank: 6444,
		frequency: 8.06,
		lemma: "大正"
	},
	{
		rank: 6445,
		frequency: 8.06,
		lemma: "出会える"
	},
	{
		rank: 6446,
		frequency: 8.06,
		lemma: "助言"
	},
	{
		rank: 6447,
		frequency: 8.06,
		lemma: "圧縮"
	},
	{
		rank: 6448,
		frequency: 8.06,
		lemma: "小規模"
	},
	{
		rank: 6449,
		frequency: 8.06,
		lemma: "義"
	},
	{
		rank: 6450,
		frequency: 8.05,
		lemma: "曇る"
	},
	{
		rank: 6451,
		frequency: 8.05,
		lemma: "小沢"
	},
	{
		rank: 6452,
		frequency: 8.05,
		lemma: "ハム"
	},
	{
		rank: 6453,
		frequency: 8.05,
		lemma: "関わり"
	},
	{
		rank: 6454,
		frequency: 8.05,
		lemma: "ゆったり"
	},
	{
		rank: 6455,
		frequency: 8.05,
		lemma: "明示"
	},
	{
		rank: 6456,
		frequency: 8.05,
		lemma: "わたる"
	},
	{
		rank: 6457,
		frequency: 8.04,
		lemma: "いちいち"
	},
	{
		rank: 6458,
		frequency: 8.04,
		lemma: "復旧"
	},
	{
		rank: 6459,
		frequency: 8.04,
		lemma: "下旬"
	},
	{
		rank: 6460,
		frequency: 8.04,
		lemma: "はずす"
	},
	{
		rank: 6461,
		frequency: 8.03,
		lemma: "レット"
	},
	{
		rank: 6462,
		frequency: 8.03,
		lemma: "数量"
	},
	{
		rank: 6463,
		frequency: 8.03,
		lemma: "司"
	},
	{
		rank: 6464,
		frequency: 8.03,
		lemma: "ペルー"
	},
	{
		rank: 6465,
		frequency: 8.03,
		lemma: "野生"
	},
	{
		rank: 6466,
		frequency: 8.03,
		lemma: "友好"
	},
	{
		rank: 6467,
		frequency: 8.03,
		lemma: "およぶ"
	},
	{
		rank: 6468,
		frequency: 8.03,
		lemma: "諮問"
	},
	{
		rank: 6469,
		frequency: 8.02,
		lemma: "最小限"
	},
	{
		rank: 6470,
		frequency: 8.02,
		lemma: "残高"
	},
	{
		rank: 6471,
		frequency: 8.02,
		lemma: "祖母"
	},
	{
		rank: 6472,
		frequency: 8.02,
		lemma: "ハードウェア"
	},
	{
		rank: 6473,
		frequency: 8.01,
		lemma: "寄与"
	},
	{
		rank: 6474,
		frequency: 8.01,
		lemma: "素朴"
	},
	{
		rank: 6475,
		frequency: 8.01,
		lemma: "クリーム"
	},
	{
		rank: 6476,
		frequency: 8,
		lemma: "上限"
	},
	{
		rank: 6477,
		frequency: 8,
		lemma: "武力"
	},
	{
		rank: 6478,
		frequency: 8,
		lemma: "ドキュメンタリー"
	},
	{
		rank: 6479,
		frequency: 8,
		lemma: "近隣"
	},
	{
		rank: 6480,
		frequency: 8,
		lemma: "ジャン"
	},
	{
		rank: 6481,
		frequency: 7.99,
		lemma: "不信"
	},
	{
		rank: 6482,
		frequency: 7.99,
		lemma: "ストレート"
	},
	{
		rank: 6483,
		frequency: 7.99,
		lemma: "運賃"
	},
	{
		rank: 6484,
		frequency: 7.99,
		lemma: "ポーランド"
	},
	{
		rank: 6485,
		frequency: 7.98,
		lemma: "ノリ"
	},
	{
		rank: 6486,
		frequency: 7.98,
		lemma: "トーナメント"
	},
	{
		rank: 6487,
		frequency: 7.98,
		lemma: "要領"
	},
	{
		rank: 6488,
		frequency: 7.97,
		lemma: "発掘"
	},
	{
		rank: 6489,
		frequency: 7.97,
		lemma: "劣る"
	},
	{
		rank: 6490,
		frequency: 7.97,
		lemma: "ソフトバンク"
	},
	{
		rank: 6491,
		frequency: 7.97,
		lemma: "茨城"
	},
	{
		rank: 6492,
		frequency: 7.97,
		lemma: "新築"
	},
	{
		rank: 6493,
		frequency: 7.97,
		lemma: "取り付ける"
	},
	{
		rank: 6494,
		frequency: 7.97,
		lemma: "仮想"
	},
	{
		rank: 6495,
		frequency: 7.96,
		lemma: "叱る"
	},
	{
		rank: 6496,
		frequency: 7.96,
		lemma: "コンテスト"
	},
	{
		rank: 6497,
		frequency: 7.95,
		lemma: "どころか"
	},
	{
		rank: 6498,
		frequency: 7.95,
		lemma: "円滑"
	},
	{
		rank: 6499,
		frequency: 7.95,
		lemma: "直感"
	},
	{
		rank: 6500,
		frequency: 7.95,
		lemma: "はく"
	},
	{
		rank: 6501,
		frequency: 7.95,
		lemma: "カルチャー"
	},
	{
		rank: 6502,
		frequency: 7.94,
		lemma: "紫"
	},
	{
		rank: 6503,
		frequency: 7.94,
		lemma: "佑"
	},
	{
		rank: 6504,
		frequency: 7.94,
		lemma: "ホット"
	},
	{
		rank: 6505,
		frequency: 7.94,
		lemma: "過激"
	},
	{
		rank: 6506,
		frequency: 7.94,
		lemma: "秋田"
	},
	{
		rank: 6507,
		frequency: 7.93,
		lemma: "引き継ぐ"
	},
	{
		rank: 6508,
		frequency: 7.93,
		lemma: "斬る"
	},
	{
		rank: 6509,
		frequency: 7.93,
		lemma: "ばか"
	},
	{
		rank: 6510,
		frequency: 7.93,
		lemma: "忠実"
	},
	{
		rank: 6511,
		frequency: 7.92,
		lemma: "ナイト"
	},
	{
		rank: 6512,
		frequency: 7.92,
		lemma: "付け加える"
	},
	{
		rank: 6513,
		frequency: 7.92,
		lemma: "読売"
	},
	{
		rank: 6514,
		frequency: 7.92,
		lemma: "彼氏"
	},
	{
		rank: 6515,
		frequency: 7.92,
		lemma: "えらい"
	},
	{
		rank: 6516,
		frequency: 7.92,
		lemma: "娯楽"
	},
	{
		rank: 6517,
		frequency: 7.92,
		lemma: "相性"
	},
	{
		rank: 6518,
		frequency: 7.92,
		lemma: "パチンコ"
	},
	{
		rank: 6519,
		frequency: 7.91,
		lemma: "変身"
	},
	{
		rank: 6520,
		frequency: 7.91,
		lemma: "たまらない"
	},
	{
		rank: 6521,
		frequency: 7.91,
		lemma: "うむ"
	},
	{
		rank: 6522,
		frequency: 7.91,
		lemma: "収まる"
	},
	{
		rank: 6523,
		frequency: 7.91,
		lemma: "灯"
	},
	{
		rank: 6524,
		frequency: 7.91,
		lemma: "弘"
	},
	{
		rank: 6525,
		frequency: 7.91,
		lemma: "ベテラン"
	},
	{
		rank: 6526,
		frequency: 7.9,
		lemma: "見上げる"
	},
	{
		rank: 6527,
		frequency: 7.9,
		lemma: "債"
	},
	{
		rank: 6528,
		frequency: 7.9,
		lemma: "大蔵"
	},
	{
		rank: 6529,
		frequency: 7.9,
		lemma: "生態"
	},
	{
		rank: 6530,
		frequency: 7.9,
		lemma: "盛る"
	},
	{
		rank: 6531,
		frequency: 7.9,
		lemma: "挿入"
	},
	{
		rank: 6532,
		frequency: 7.9,
		lemma: "脱ぐ"
	},
	{
		rank: 6533,
		frequency: 7.89,
		lemma: "コンクリート"
	},
	{
		rank: 6534,
		frequency: 7.89,
		lemma: "受注"
	},
	{
		rank: 6535,
		frequency: 7.89,
		lemma: "阿部"
	},
	{
		rank: 6536,
		frequency: 7.88,
		lemma: "トータル"
	},
	{
		rank: 6537,
		frequency: 7.88,
		lemma: "不利"
	},
	{
		rank: 6538,
		frequency: 7.88,
		lemma: "協調"
	},
	{
		rank: 6539,
		frequency: 7.88,
		lemma: "模索"
	},
	{
		rank: 6540,
		frequency: 7.88,
		lemma: "サーチ"
	},
	{
		rank: 6541,
		frequency: 7.87,
		lemma: "遺伝"
	},
	{
		rank: 6542,
		frequency: 7.87,
		lemma: "仕掛ける"
	},
	{
		rank: 6543,
		frequency: 7.87,
		lemma: "発する"
	},
	{
		rank: 6544,
		frequency: 7.86,
		lemma: "仕掛け"
	},
	{
		rank: 6545,
		frequency: 7.86,
		lemma: "句"
	},
	{
		rank: 6546,
		frequency: 7.86,
		lemma: "称す"
	},
	{
		rank: 6547,
		frequency: 7.86,
		lemma: "廊下"
	},
	{
		rank: 6548,
		frequency: 7.86,
		lemma: "酸"
	},
	{
		rank: 6549,
		frequency: 7.86,
		lemma: "地方自治体"
	},
	{
		rank: 6550,
		frequency: 7.86,
		lemma: "内田"
	},
	{
		rank: 6551,
		frequency: 7.86,
		lemma: "手配"
	},
	{
		rank: 6552,
		frequency: 7.86,
		lemma: "国王"
	},
	{
		rank: 6553,
		frequency: 7.85,
		lemma: "議決"
	},
	{
		rank: 6554,
		frequency: 7.85,
		lemma: "をめぐって"
	},
	{
		rank: 6555,
		frequency: 7.85,
		lemma: "強引"
	},
	{
		rank: 6556,
		frequency: 7.85,
		lemma: "短編"
	},
	{
		rank: 6557,
		frequency: 7.85,
		lemma: "痛感"
	},
	{
		rank: 6558,
		frequency: 7.84,
		lemma: "片付ける"
	},
	{
		rank: 6559,
		frequency: 7.84,
		lemma: "かけ"
	},
	{
		rank: 6560,
		frequency: 7.84,
		lemma: "出生"
	},
	{
		rank: 6561,
		frequency: 7.84,
		lemma: "スピーチ"
	},
	{
		rank: 6562,
		frequency: 7.84,
		lemma: "一括"
	},
	{
		rank: 6563,
		frequency: 7.83,
		lemma: "刀"
	},
	{
		rank: 6564,
		frequency: 7.83,
		lemma: "爆笑"
	},
	{
		rank: 6565,
		frequency: 7.83,
		lemma: "石炭"
	},
	{
		rank: 6566,
		frequency: 7.83,
		lemma: "お祈り"
	},
	{
		rank: 6567,
		frequency: 7.83,
		lemma: "刑"
	},
	{
		rank: 6568,
		frequency: 7.82,
		lemma: "分る"
	},
	{
		rank: 6569,
		frequency: 7.82,
		lemma: "綴る"
	},
	{
		rank: 6570,
		frequency: 7.82,
		lemma: "リクエスト"
	},
	{
		rank: 6571,
		frequency: 7.82,
		lemma: "天候"
	},
	{
		rank: 6572,
		frequency: 7.82,
		lemma: "手軽"
	},
	{
		rank: 6573,
		frequency: 7.82,
		lemma: "選出"
	},
	{
		rank: 6574,
		frequency: 7.82,
		lemma: "かわり"
	},
	{
		rank: 6575,
		frequency: 7.82,
		lemma: "反する"
	},
	{
		rank: 6576,
		frequency: 7.82,
		lemma: "浮気"
	},
	{
		rank: 6577,
		frequency: 7.82,
		lemma: "ニュージーランド"
	},
	{
		rank: 6578,
		frequency: 7.82,
		lemma: "看護婦"
	},
	{
		rank: 6579,
		frequency: 7.81,
		lemma: "殿"
	},
	{
		rank: 6580,
		frequency: 7.81,
		lemma: "駆使"
	},
	{
		rank: 6581,
		frequency: 7.81,
		lemma: "登山"
	},
	{
		rank: 6582,
		frequency: 7.81,
		lemma: "ヒーロー"
	},
	{
		rank: 6583,
		frequency: 7.8,
		lemma: "計上"
	},
	{
		rank: 6584,
		frequency: 7.8,
		lemma: "パンフレット"
	},
	{
		rank: 6585,
		frequency: 7.8,
		lemma: "協同"
	},
	{
		rank: 6586,
		frequency: 7.79,
		lemma: "選任"
	},
	{
		rank: 6587,
		frequency: 7.79,
		lemma: "Ｉ"
	},
	{
		rank: 6588,
		frequency: 7.79,
		lemma: "無償"
	},
	{
		rank: 6589,
		frequency: 7.79,
		lemma: "合法"
	},
	{
		rank: 6590,
		frequency: 7.78,
		lemma: "ステーション"
	},
	{
		rank: 6591,
		frequency: 7.78,
		lemma: "パッ"
	},
	{
		rank: 6592,
		frequency: 7.78,
		lemma: "向き合う"
	},
	{
		rank: 6593,
		frequency: 7.78,
		lemma: "歴"
	},
	{
		rank: 6594,
		frequency: 7.78,
		lemma: "送付"
	},
	{
		rank: 6595,
		frequency: 7.77,
		lemma: "中世"
	},
	{
		rank: 6596,
		frequency: 7.77,
		lemma: "騒音"
	},
	{
		rank: 6597,
		frequency: 7.76,
		lemma: "隊員"
	},
	{
		rank: 6598,
		frequency: 7.76,
		lemma: "モーツァルト"
	},
	{
		rank: 6599,
		frequency: 7.76,
		lemma: "外来"
	},
	{
		rank: 6600,
		frequency: 7.76,
		lemma: "シャープ"
	},
	{
		rank: 6601,
		frequency: 7.76,
		lemma: "仲裁"
	},
	{
		rank: 6602,
		frequency: 7.76,
		lemma: "奥様"
	},
	{
		rank: 6603,
		frequency: 7.76,
		lemma: "参画"
	},
	{
		rank: 6604,
		frequency: 7.76,
		lemma: "キム"
	},
	{
		rank: 6605,
		frequency: 7.76,
		lemma: "紅茶"
	},
	{
		rank: 6606,
		frequency: 7.75,
		lemma: "棟"
	},
	{
		rank: 6607,
		frequency: 7.75,
		lemma: "領土"
	},
	{
		rank: 6608,
		frequency: 7.75,
		lemma: "井"
	},
	{
		rank: 6609,
		frequency: 7.75,
		lemma: "チャット"
	},
	{
		rank: 6610,
		frequency: 7.75,
		lemma: "集約"
	},
	{
		rank: 6611,
		frequency: 7.75,
		lemma: "神秘"
	},
	{
		rank: 6612,
		frequency: 7.75,
		lemma: "家計"
	},
	{
		rank: 6613,
		frequency: 7.75,
		lemma: "四国"
	},
	{
		rank: 6614,
		frequency: 7.75,
		lemma: "でかい"
	},
	{
		rank: 6615,
		frequency: 7.74,
		lemma: "連想"
	},
	{
		rank: 6616,
		frequency: 7.74,
		lemma: "同行"
	},
	{
		rank: 6617,
		frequency: 7.74,
		lemma: "減税"
	},
	{
		rank: 6618,
		frequency: 7.74,
		lemma: "いささか"
	},
	{
		rank: 6619,
		frequency: 7.74,
		lemma: "岸"
	},
	{
		rank: 6620,
		frequency: 7.73,
		lemma: "アレンジ"
	},
	{
		rank: 6621,
		frequency: 7.73,
		lemma: "妥協"
	},
	{
		rank: 6622,
		frequency: 7.73,
		lemma: "ベンチ"
	},
	{
		rank: 6623,
		frequency: 7.73,
		lemma: "検察官"
	},
	{
		rank: 6624,
		frequency: 7.73,
		lemma: "酸素"
	},
	{
		rank: 6625,
		frequency: 7.73,
		lemma: "パニック"
	},
	{
		rank: 6626,
		frequency: 7.73,
		lemma: "ビタミン"
	},
	{
		rank: 6627,
		frequency: 7.73,
		lemma: "鳴らす"
	},
	{
		rank: 6628,
		frequency: 7.73,
		lemma: "兄さん"
	},
	{
		rank: 6629,
		frequency: 7.72,
		lemma: "祝"
	},
	{
		rank: 6630,
		frequency: 7.72,
		lemma: "テクニカル"
	},
	{
		rank: 6631,
		frequency: 7.72,
		lemma: "奨励"
	},
	{
		rank: 6632,
		frequency: 7.72,
		lemma: "歯科"
	},
	{
		rank: 6633,
		frequency: 7.72,
		lemma: "セント"
	},
	{
		rank: 6634,
		frequency: 7.72,
		lemma: "たどり着く"
	},
	{
		rank: 6635,
		frequency: 7.71,
		lemma: "ホルモン"
	},
	{
		rank: 6636,
		frequency: 7.71,
		lemma: "陸上"
	},
	{
		rank: 6637,
		frequency: 7.71,
		lemma: "液"
	},
	{
		rank: 6638,
		frequency: 7.71,
		lemma: "肥料"
	},
	{
		rank: 6639,
		frequency: 7.71,
		lemma: "同級生"
	},
	{
		rank: 6640,
		frequency: 7.7,
		lemma: "取り除く"
	},
	{
		rank: 6641,
		frequency: 7.7,
		lemma: "溜まる"
	},
	{
		rank: 6642,
		frequency: 7.7,
		lemma: "抽選"
	},
	{
		rank: 6643,
		frequency: 7.69,
		lemma: "エレベーター"
	},
	{
		rank: 6644,
		frequency: 7.69,
		lemma: "氏名"
	},
	{
		rank: 6645,
		frequency: 7.69,
		lemma: "軽"
	},
	{
		rank: 6646,
		frequency: 7.68,
		lemma: "親友"
	},
	{
		rank: 6647,
		frequency: 7.68,
		lemma: "におい"
	},
	{
		rank: 6648,
		frequency: 7.68,
		lemma: "直接的"
	},
	{
		rank: 6649,
		frequency: 7.68,
		lemma: "西部"
	},
	{
		rank: 6650,
		frequency: 7.67,
		lemma: "黒字"
	},
	{
		rank: 6651,
		frequency: 7.67,
		lemma: "移籍"
	},
	{
		rank: 6652,
		frequency: 7.67,
		lemma: "そうですね"
	},
	{
		rank: 6653,
		frequency: 7.67,
		lemma: "顕著"
	},
	{
		rank: 6654,
		frequency: 7.67,
		lemma: "預かる"
	},
	{
		rank: 6655,
		frequency: 7.67,
		lemma: "ホッ"
	},
	{
		rank: 6656,
		frequency: 7.67,
		lemma: "丼"
	},
	{
		rank: 6657,
		frequency: 7.67,
		lemma: "切れ"
	},
	{
		rank: 6658,
		frequency: 7.67,
		lemma: "絶対に"
	},
	{
		rank: 6659,
		frequency: 7.67,
		lemma: "ｃｍ"
	},
	{
		rank: 6660,
		frequency: 7.67,
		lemma: "フォーマット"
	},
	{
		rank: 6661,
		frequency: 7.67,
		lemma: "潰す"
	},
	{
		rank: 6662,
		frequency: 7.67,
		lemma: "見込む"
	},
	{
		rank: 6663,
		frequency: 7.67,
		lemma: "航空機"
	},
	{
		rank: 6664,
		frequency: 7.66,
		lemma: "らん"
	},
	{
		rank: 6665,
		frequency: 7.66,
		lemma: "畳"
	},
	{
		rank: 6666,
		frequency: 7.66,
		lemma: "農薬"
	},
	{
		rank: 6667,
		frequency: 7.65,
		lemma: "コチ"
	},
	{
		rank: 6668,
		frequency: 7.65,
		lemma: "少"
	},
	{
		rank: 6669,
		frequency: 7.65,
		lemma: "セールス"
	},
	{
		rank: 6670,
		frequency: 7.65,
		lemma: "靖国神社"
	},
	{
		rank: 6671,
		frequency: 7.65,
		lemma: "総括"
	},
	{
		rank: 6672,
		frequency: 7.64,
		lemma: "当てはまる"
	},
	{
		rank: 6673,
		frequency: 7.64,
		lemma: "軍人"
	},
	{
		rank: 6674,
		frequency: 7.64,
		lemma: "もてる"
	},
	{
		rank: 6675,
		frequency: 7.63,
		lemma: "折る"
	},
	{
		rank: 6676,
		frequency: 7.63,
		lemma: "僅か"
	},
	{
		rank: 6677,
		frequency: 7.63,
		lemma: "そうなると"
	},
	{
		rank: 6678,
		frequency: 7.63,
		lemma: "雑談"
	},
	{
		rank: 6679,
		frequency: 7.63,
		lemma: "見逃す"
	},
	{
		rank: 6680,
		frequency: 7.63,
		lemma: "酷い"
	},
	{
		rank: 6681,
		frequency: 7.63,
		lemma: "計る"
	},
	{
		rank: 6682,
		frequency: 7.63,
		lemma: "国道"
	},
	{
		rank: 6683,
		frequency: 7.63,
		lemma: "無名"
	},
	{
		rank: 6684,
		frequency: 7.63,
		lemma: "固まる"
	},
	{
		rank: 6685,
		frequency: 7.62,
		lemma: "性別"
	},
	{
		rank: 6686,
		frequency: 7.62,
		lemma: "弔"
	},
	{
		rank: 6687,
		frequency: 7.62,
		lemma: "好奇"
	},
	{
		rank: 6688,
		frequency: 7.62,
		lemma: "まっすぐ"
	},
	{
		rank: 6689,
		frequency: 7.62,
		lemma: "幻"
	},
	{
		rank: 6690,
		frequency: 7.62,
		lemma: "気持"
	},
	{
		rank: 6691,
		frequency: 7.62,
		lemma: "ストック"
	},
	{
		rank: 6692,
		frequency: 7.62,
		lemma: "みなさま"
	},
	{
		rank: 6693,
		frequency: 7.62,
		lemma: "みずから"
	},
	{
		rank: 6694,
		frequency: 7.62,
		lemma: "ロバート"
	},
	{
		rank: 6695,
		frequency: 7.61,
		lemma: "にあたる"
	},
	{
		rank: 6696,
		frequency: 7.61,
		lemma: "通報"
	},
	{
		rank: 6697,
		frequency: 7.61,
		lemma: "替える"
	},
	{
		rank: 6698,
		frequency: 7.61,
		lemma: "攻略"
	},
	{
		rank: 6699,
		frequency: 7.61,
		lemma: "虐殺"
	},
	{
		rank: 6700,
		frequency: 7.6,
		lemma: "構える"
	},
	{
		rank: 6701,
		frequency: 7.6,
		lemma: "受け付ける"
	},
	{
		rank: 6702,
		frequency: 7.59,
		lemma: "適合"
	},
	{
		rank: 6703,
		frequency: 7.59,
		lemma: "思いっきり"
	},
	{
		rank: 6704,
		frequency: 7.59,
		lemma: "滑る"
	},
	{
		rank: 6705,
		frequency: 7.59,
		lemma: "逃す"
	},
	{
		rank: 6706,
		frequency: 7.59,
		lemma: "一員"
	},
	{
		rank: 6707,
		frequency: 7.59,
		lemma: "まる"
	},
	{
		rank: 6708,
		frequency: 7.59,
		lemma: "水分"
	},
	{
		rank: 6709,
		frequency: 7.59,
		lemma: "足す"
	},
	{
		rank: 6710,
		frequency: 7.59,
		lemma: "核兵器"
	},
	{
		rank: 6711,
		frequency: 7.58,
		lemma: "お祭り"
	},
	{
		rank: 6712,
		frequency: 7.58,
		lemma: "周知"
	},
	{
		rank: 6713,
		frequency: 7.58,
		lemma: "洋服"
	},
	{
		rank: 6714,
		frequency: 7.58,
		lemma: "ほん"
	},
	{
		rank: 6715,
		frequency: 7.58,
		lemma: "性的"
	},
	{
		rank: 6716,
		frequency: 7.57,
		lemma: "置き換える"
	},
	{
		rank: 6717,
		frequency: 7.57,
		lemma: "皇帝"
	},
	{
		rank: 6718,
		frequency: 7.57,
		lemma: "ＥＵ"
	},
	{
		rank: 6719,
		frequency: 7.57,
		lemma: "発覚"
	},
	{
		rank: 6720,
		frequency: 7.57,
		lemma: "当たり"
	},
	{
		rank: 6721,
		frequency: 7.57,
		lemma: "足元"
	},
	{
		rank: 6722,
		frequency: 7.57,
		lemma: "乏しい"
	},
	{
		rank: 6723,
		frequency: 7.56,
		lemma: "日誌"
	},
	{
		rank: 6724,
		frequency: 7.56,
		lemma: "太田"
	},
	{
		rank: 6725,
		frequency: 7.56,
		lemma: "闘い"
	},
	{
		rank: 6726,
		frequency: 7.56,
		lemma: "ウェイ"
	},
	{
		rank: 6727,
		frequency: 7.56,
		lemma: "余談"
	},
	{
		rank: 6728,
		frequency: 7.56,
		lemma: "数多く"
	},
	{
		rank: 6729,
		frequency: 7.56,
		lemma: "外見"
	},
	{
		rank: 6730,
		frequency: 7.56,
		lemma: "読み"
	},
	{
		rank: 6731,
		frequency: 7.56,
		lemma: "目安"
	},
	{
		rank: 6732,
		frequency: 7.55,
		lemma: "滝"
	},
	{
		rank: 6733,
		frequency: 7.54,
		lemma: "デザート"
	},
	{
		rank: 6734,
		frequency: 7.54,
		lemma: "知性"
	},
	{
		rank: 6735,
		frequency: 7.54,
		lemma: "満つ"
	},
	{
		rank: 6736,
		frequency: 7.53,
		lemma: "薬物"
	},
	{
		rank: 6737,
		frequency: 7.53,
		lemma: "敏感"
	},
	{
		rank: 6738,
		frequency: 7.53,
		lemma: "ミリ"
	},
	{
		rank: 6739,
		frequency: 7.53,
		lemma: "来年度"
	},
	{
		rank: 6740,
		frequency: 7.53,
		lemma: "乳"
	},
	{
		rank: 6741,
		frequency: 7.53,
		lemma: "醤油"
	},
	{
		rank: 6742,
		frequency: 7.52,
		lemma: "ぜんぜん"
	},
	{
		rank: 6743,
		frequency: 7.52,
		lemma: "ついてる"
	},
	{
		rank: 6744,
		frequency: 7.52,
		lemma: "品目"
	},
	{
		rank: 6745,
		frequency: 7.51,
		lemma: "トライ"
	},
	{
		rank: 6746,
		frequency: 7.51,
		lemma: "総長"
	},
	{
		rank: 6747,
		frequency: 7.51,
		lemma: "衝動"
	},
	{
		rank: 6748,
		frequency: 7.51,
		lemma: "点数"
	},
	{
		rank: 6749,
		frequency: 7.51,
		lemma: "フィンランド"
	},
	{
		rank: 6750,
		frequency: 7.51,
		lemma: "主観"
	},
	{
		rank: 6751,
		frequency: 7.51,
		lemma: "スカ"
	},
	{
		rank: 6752,
		frequency: 7.51,
		lemma: "収納"
	},
	{
		rank: 6753,
		frequency: 7.51,
		lemma: "岩手"
	},
	{
		rank: 6754,
		frequency: 7.51,
		lemma: "税率"
	},
	{
		rank: 6755,
		frequency: 7.5,
		lemma: "西村"
	},
	{
		rank: 6756,
		frequency: 7.5,
		lemma: "今更"
	},
	{
		rank: 6757,
		frequency: 7.5,
		lemma: "ボン"
	},
	{
		rank: 6758,
		frequency: 7.5,
		lemma: "ナン"
	},
	{
		rank: 6759,
		frequency: 7.5,
		lemma: "題名"
	},
	{
		rank: 6760,
		frequency: 7.5,
		lemma: "部員"
	},
	{
		rank: 6761,
		frequency: 7.49,
		lemma: "豊"
	},
	{
		rank: 6762,
		frequency: 7.49,
		lemma: "横断"
	},
	{
		rank: 6763,
		frequency: 7.49,
		lemma: "担任"
	},
	{
		rank: 6764,
		frequency: 7.49,
		lemma: "翌年"
	},
	{
		rank: 6765,
		frequency: 7.48,
		lemma: "文脈"
	},
	{
		rank: 6766,
		frequency: 7.48,
		lemma: "容器"
	},
	{
		rank: 6767,
		frequency: 7.48,
		lemma: "基調"
	},
	{
		rank: 6768,
		frequency: 7.48,
		lemma: "酔う"
	},
	{
		rank: 6769,
		frequency: 7.48,
		lemma: "無関係"
	},
	{
		rank: 6770,
		frequency: 7.47,
		lemma: "お陰"
	},
	{
		rank: 6771,
		frequency: 7.47,
		lemma: "閣僚"
	},
	{
		rank: 6772,
		frequency: 7.47,
		lemma: "兼ねる"
	},
	{
		rank: 6773,
		frequency: 7.47,
		lemma: "内面"
	},
	{
		rank: 6774,
		frequency: 7.47,
		lemma: "活"
	},
	{
		rank: 6775,
		frequency: 7.47,
		lemma: "アイス"
	},
	{
		rank: 6776,
		frequency: 7.46,
		lemma: "許容"
	},
	{
		rank: 6777,
		frequency: 7.46,
		lemma: "選考"
	},
	{
		rank: 6778,
		frequency: 7.46,
		lemma: "さほど"
	},
	{
		rank: 6779,
		frequency: 7.46,
		lemma: "宝"
	},
	{
		rank: 6780,
		frequency: 7.46,
		lemma: "本能"
	},
	{
		rank: 6781,
		frequency: 7.45,
		lemma: "思い込む"
	},
	{
		rank: 6782,
		frequency: 7.44,
		lemma: "レンジ"
	},
	{
		rank: 6783,
		frequency: 7.44,
		lemma: "につれて"
	},
	{
		rank: 6784,
		frequency: 7.44,
		lemma: "ねらう"
	},
	{
		rank: 6785,
		frequency: 7.44,
		lemma: "将棋"
	},
	{
		rank: 6786,
		frequency: 7.44,
		lemma: "混じる"
	},
	{
		rank: 6787,
		frequency: 7.44,
		lemma: "キャンセル"
	},
	{
		rank: 6788,
		frequency: 7.44,
		lemma: "うた"
	},
	{
		rank: 6789,
		frequency: 7.44,
		lemma: "医薬品"
	},
	{
		rank: 6790,
		frequency: 7.44,
		lemma: "かわいそう"
	},
	{
		rank: 6791,
		frequency: 7.44,
		lemma: "条文"
	},
	{
		rank: 6792,
		frequency: 7.43,
		lemma: "いじる"
	},
	{
		rank: 6793,
		frequency: 7.43,
		lemma: "開店"
	},
	{
		rank: 6794,
		frequency: 7.43,
		lemma: "合流"
	},
	{
		rank: 6795,
		frequency: 7.42,
		lemma: "亭"
	},
	{
		rank: 6796,
		frequency: 7.42,
		lemma: "しつこい"
	},
	{
		rank: 6797,
		frequency: 7.42,
		lemma: "心地"
	},
	{
		rank: 6798,
		frequency: 7.42,
		lemma: "遂げる"
	},
	{
		rank: 6799,
		frequency: 7.42,
		lemma: "競合"
	},
	{
		rank: 6800,
		frequency: 7.42,
		lemma: "たいした"
	},
	{
		rank: 6801,
		frequency: 7.42,
		lemma: "浩"
	},
	{
		rank: 6802,
		frequency: 7.42,
		lemma: "干渉"
	},
	{
		rank: 6803,
		frequency: 7.41,
		lemma: "車内"
	},
	{
		rank: 6804,
		frequency: 7.41,
		lemma: "将軍"
	},
	{
		rank: 6805,
		frequency: 7.41,
		lemma: "卒業生"
	},
	{
		rank: 6806,
		frequency: 7.41,
		lemma: "謝る"
	},
	{
		rank: 6807,
		frequency: 7.41,
		lemma: "負傷"
	},
	{
		rank: 6808,
		frequency: 7.4,
		lemma: "騒ぎ"
	},
	{
		rank: 6809,
		frequency: 7.4,
		lemma: "ブース"
	},
	{
		rank: 6810,
		frequency: 7.4,
		lemma: "部署"
	},
	{
		rank: 6811,
		frequency: 7.4,
		lemma: "新着"
	},
	{
		rank: 6812,
		frequency: 7.39,
		lemma: "テロリスト"
	},
	{
		rank: 6813,
		frequency: 7.39,
		lemma: "飲み物"
	},
	{
		rank: 6814,
		frequency: 7.39,
		lemma: "熊"
	},
	{
		rank: 6815,
		frequency: 7.39,
		lemma: "原価"
	},
	{
		rank: 6816,
		frequency: 7.39,
		lemma: "商工"
	},
	{
		rank: 6817,
		frequency: 7.38,
		lemma: "先ず"
	},
	{
		rank: 6818,
		frequency: 7.38,
		lemma: "喉"
	},
	{
		rank: 6819,
		frequency: 7.38,
		lemma: "お祝い"
	},
	{
		rank: 6820,
		frequency: 7.38,
		lemma: "入り込む"
	},
	{
		rank: 6821,
		frequency: 7.38,
		lemma: "任命"
	},
	{
		rank: 6822,
		frequency: 7.38,
		lemma: "路上"
	},
	{
		rank: 6823,
		frequency: 7.37,
		lemma: "差す"
	},
	{
		rank: 6824,
		frequency: 7.37,
		lemma: "通産省"
	},
	{
		rank: 6825,
		frequency: 7.37,
		lemma: "上野"
	},
	{
		rank: 6826,
		frequency: 7.37,
		lemma: "震災"
	},
	{
		rank: 6827,
		frequency: 7.37,
		lemma: "ライフスタイル"
	},
	{
		rank: 6828,
		frequency: 7.37,
		lemma: "はぁ"
	},
	{
		rank: 6829,
		frequency: 7.37,
		lemma: "長女"
	},
	{
		rank: 6830,
		frequency: 7.37,
		lemma: "彫刻"
	},
	{
		rank: 6831,
		frequency: 7.37,
		lemma: "リニューアル"
	},
	{
		rank: 6832,
		frequency: 7.37,
		lemma: "就く"
	},
	{
		rank: 6833,
		frequency: 7.37,
		lemma: "大和"
	},
	{
		rank: 6834,
		frequency: 7.37,
		lemma: "労使"
	},
	{
		rank: 6835,
		frequency: 7.37,
		lemma: "傷つく"
	},
	{
		rank: 6836,
		frequency: 7.36,
		lemma: "どっか"
	},
	{
		rank: 6837,
		frequency: 7.36,
		lemma: "品物"
	},
	{
		rank: 6838,
		frequency: 7.36,
		lemma: "職種"
	},
	{
		rank: 6839,
		frequency: 7.36,
		lemma: "商法"
	},
	{
		rank: 6840,
		frequency: 7.36,
		lemma: "ガル"
	},
	{
		rank: 6841,
		frequency: 7.35,
		lemma: "航海"
	},
	{
		rank: 6842,
		frequency: 7.35,
		lemma: "クイズ"
	},
	{
		rank: 6843,
		frequency: 7.35,
		lemma: "近"
	},
	{
		rank: 6844,
		frequency: 7.35,
		lemma: "飲める"
	},
	{
		rank: 6845,
		frequency: 7.35,
		lemma: "山下"
	},
	{
		rank: 6846,
		frequency: 7.35,
		lemma: "弾圧"
	},
	{
		rank: 6847,
		frequency: 7.34,
		lemma: "カンボジア"
	},
	{
		rank: 6848,
		frequency: 7.34,
		lemma: "芸"
	},
	{
		rank: 6849,
		frequency: 7.34,
		lemma: "賛同"
	},
	{
		rank: 6850,
		frequency: 7.34,
		lemma: "南北"
	},
	{
		rank: 6851,
		frequency: 7.34,
		lemma: "短期間"
	},
	{
		rank: 6852,
		frequency: 7.34,
		lemma: "カウンセリング"
	},
	{
		rank: 6853,
		frequency: 7.34,
		lemma: "津波"
	},
	{
		rank: 6854,
		frequency: 7.34,
		lemma: "景観"
	},
	{
		rank: 6855,
		frequency: 7.34,
		lemma: "予言"
	},
	{
		rank: 6856,
		frequency: 7.34,
		lemma: "原子"
	},
	{
		rank: 6857,
		frequency: 7.33,
		lemma: "判"
	},
	{
		rank: 6858,
		frequency: 7.33,
		lemma: "大声"
	},
	{
		rank: 6859,
		frequency: 7.33,
		lemma: "審理"
	},
	{
		rank: 6860,
		frequency: 7.33,
		lemma: "実在"
	},
	{
		rank: 6861,
		frequency: 7.33,
		lemma: "ウィーン"
	},
	{
		rank: 6862,
		frequency: 7.33,
		lemma: "ミルク"
	},
	{
		rank: 6863,
		frequency: 7.32,
		lemma: "本田"
	},
	{
		rank: 6864,
		frequency: 7.32,
		lemma: "リストラ"
	},
	{
		rank: 6865,
		frequency: 7.32,
		lemma: "議題"
	},
	{
		rank: 6866,
		frequency: 7.32,
		lemma: "プラットフォーム"
	},
	{
		rank: 6867,
		frequency: 7.31,
		lemma: "戦場"
	},
	{
		rank: 6868,
		frequency: 7.31,
		lemma: "六本木"
	},
	{
		rank: 6869,
		frequency: 7.31,
		lemma: "下ろす"
	},
	{
		rank: 6870,
		frequency: 7.31,
		lemma: "破産"
	},
	{
		rank: 6871,
		frequency: 7.31,
		lemma: "景"
	},
	{
		rank: 6872,
		frequency: 7.31,
		lemma: "果物"
	},
	{
		rank: 6873,
		frequency: 7.31,
		lemma: "給食"
	},
	{
		rank: 6874,
		frequency: 7.31,
		lemma: "アンド"
	},
	{
		rank: 6875,
		frequency: 7.3,
		lemma: "α"
	},
	{
		rank: 6876,
		frequency: 7.3,
		lemma: "フェスティバル"
	},
	{
		rank: 6877,
		frequency: 7.29,
		lemma: "喫茶店"
	},
	{
		rank: 6878,
		frequency: 7.29,
		lemma: "セイ"
	},
	{
		rank: 6879,
		frequency: 7.29,
		lemma: "筆"
	},
	{
		rank: 6880,
		frequency: 7.29,
		lemma: "開会"
	},
	{
		rank: 6881,
		frequency: 7.29,
		lemma: "ミュージカル"
	},
	{
		rank: 6882,
		frequency: 7.29,
		lemma: "亀"
	},
	{
		rank: 6883,
		frequency: 7.29,
		lemma: "出願"
	},
	{
		rank: 6884,
		frequency: 7.29,
		lemma: "単価"
	},
	{
		rank: 6885,
		frequency: 7.29,
		lemma: "キャッチ"
	},
	{
		rank: 6886,
		frequency: 7.29,
		lemma: "防御"
	},
	{
		rank: 6887,
		frequency: 7.29,
		lemma: "構図"
	},
	{
		rank: 6888,
		frequency: 7.28,
		lemma: "ゴム"
	},
	{
		rank: 6889,
		frequency: 7.28,
		lemma: "おしゃれ"
	},
	{
		rank: 6890,
		frequency: 7.28,
		lemma: "たけ"
	},
	{
		rank: 6891,
		frequency: 7.27,
		lemma: "連日"
	},
	{
		rank: 6892,
		frequency: 7.27,
		lemma: "外相"
	},
	{
		rank: 6893,
		frequency: 7.27,
		lemma: "餌"
	},
	{
		rank: 6894,
		frequency: 7.27,
		lemma: "微笑む"
	},
	{
		rank: 6895,
		frequency: 7.27,
		lemma: "身長"
	},
	{
		rank: 6896,
		frequency: 7.27,
		lemma: "合間"
	},
	{
		rank: 6897,
		frequency: 7.27,
		lemma: "名作"
	},
	{
		rank: 6898,
		frequency: 7.27,
		lemma: "恒例"
	},
	{
		rank: 6899,
		frequency: 7.26,
		lemma: "トピック"
	},
	{
		rank: 6900,
		frequency: 7.26,
		lemma: "台所"
	},
	{
		rank: 6901,
		frequency: 7.26,
		lemma: "すか"
	},
	{
		rank: 6902,
		frequency: 7.26,
		lemma: "メガネ"
	},
	{
		rank: 6903,
		frequency: 7.26,
		lemma: "かの"
	},
	{
		rank: 6904,
		frequency: 7.25,
		lemma: "抽出"
	},
	{
		rank: 6905,
		frequency: 7.25,
		lemma: "刃"
	},
	{
		rank: 6906,
		frequency: 7.25,
		lemma: "敗戦"
	},
	{
		rank: 6907,
		frequency: 7.25,
		lemma: "密接"
	},
	{
		rank: 6908,
		frequency: 7.25,
		lemma: "涼"
	},
	{
		rank: 6909,
		frequency: 7.25,
		lemma: "永田"
	},
	{
		rank: 6910,
		frequency: 7.25,
		lemma: "初回"
	},
	{
		rank: 6911,
		frequency: 7.25,
		lemma: "水平"
	},
	{
		rank: 6912,
		frequency: 7.25,
		lemma: "ロゴ"
	},
	{
		rank: 6913,
		frequency: 7.25,
		lemma: "流動"
	},
	{
		rank: 6914,
		frequency: 7.24,
		lemma: "訴え"
	},
	{
		rank: 6915,
		frequency: 7.24,
		lemma: "ちまう"
	},
	{
		rank: 6916,
		frequency: 7.24,
		lemma: "コンパクト"
	},
	{
		rank: 6917,
		frequency: 7.24,
		lemma: "好ましい"
	},
	{
		rank: 6918,
		frequency: 7.24,
		lemma: "リチャード"
	},
	{
		rank: 6919,
		frequency: 7.24,
		lemma: "噛む"
	},
	{
		rank: 6920,
		frequency: 7.24,
		lemma: "満"
	},
	{
		rank: 6921,
		frequency: 7.23,
		lemma: "法曹"
	},
	{
		rank: 6922,
		frequency: 7.23,
		lemma: "励む"
	},
	{
		rank: 6923,
		frequency: 7.23,
		lemma: "敷く"
	},
	{
		rank: 6924,
		frequency: 7.23,
		lemma: "祝日"
	},
	{
		rank: 6925,
		frequency: 7.23,
		lemma: "留まる"
	},
	{
		rank: 6926,
		frequency: 7.23,
		lemma: "現われる"
	},
	{
		rank: 6927,
		frequency: 7.23,
		lemma: "よって"
	},
	{
		rank: 6928,
		frequency: 7.22,
		lemma: "測る"
	},
	{
		rank: 6929,
		frequency: 7.22,
		lemma: "東西"
	},
	{
		rank: 6930,
		frequency: 7.22,
		lemma: "無意味"
	},
	{
		rank: 6931,
		frequency: 7.22,
		lemma: "に際して"
	},
	{
		rank: 6932,
		frequency: 7.22,
		lemma: "新設"
	},
	{
		rank: 6933,
		frequency: 7.22,
		lemma: "ジン"
	},
	{
		rank: 6934,
		frequency: 7.21,
		lemma: "土台"
	},
	{
		rank: 6935,
		frequency: 7.21,
		lemma: "よし"
	},
	{
		rank: 6936,
		frequency: 7.21,
		lemma: "着物"
	},
	{
		rank: 6937,
		frequency: 7.2,
		lemma: "名目"
	},
	{
		rank: 6938,
		frequency: 7.2,
		lemma: "不在"
	},
	{
		rank: 6939,
		frequency: 7.2,
		lemma: "引き続く"
	},
	{
		rank: 6940,
		frequency: 7.2,
		lemma: "制服"
	},
	{
		rank: 6941,
		frequency: 7.2,
		lemma: "何で"
	},
	{
		rank: 6942,
		frequency: 7.2,
		lemma: "前田"
	},
	{
		rank: 6943,
		frequency: 7.2,
		lemma: "カイ"
	},
	{
		rank: 6944,
		frequency: 7.2,
		lemma: "体内"
	},
	{
		rank: 6945,
		frequency: 7.2,
		lemma: "ケイ"
	},
	{
		rank: 6946,
		frequency: 7.2,
		lemma: "いやいや"
	},
	{
		rank: 6947,
		frequency: 7.2,
		lemma: "お湯"
	},
	{
		rank: 6948,
		frequency: 7.2,
		lemma: "ぶつける"
	},
	{
		rank: 6949,
		frequency: 7.19,
		lemma: "パスタ"
	},
	{
		rank: 6950,
		frequency: 7.19,
		lemma: "国旗"
	},
	{
		rank: 6951,
		frequency: 7.19,
		lemma: "モール"
	},
	{
		rank: 6952,
		frequency: 7.18,
		lemma: "補給"
	},
	{
		rank: 6953,
		frequency: 7.18,
		lemma: "〒"
	},
	{
		rank: 6954,
		frequency: 7.18,
		lemma: "始末"
	},
	{
		rank: 6955,
		frequency: 7.18,
		lemma: "題材"
	},
	{
		rank: 6956,
		frequency: 7.17,
		lemma: "デンマーク"
	},
	{
		rank: 6957,
		frequency: 7.17,
		lemma: "たばこ"
	},
	{
		rank: 6958,
		frequency: 7.17,
		lemma: "おはよう"
	},
	{
		rank: 6959,
		frequency: 7.17,
		lemma: "祖父"
	},
	{
		rank: 6960,
		frequency: 7.17,
		lemma: "受け継ぐ"
	},
	{
		rank: 6961,
		frequency: 7.16,
		lemma: "比例"
	},
	{
		rank: 6962,
		frequency: 7.16,
		lemma: "機動"
	},
	{
		rank: 6963,
		frequency: 7.16,
		lemma: "調節"
	},
	{
		rank: 6964,
		frequency: 7.16,
		lemma: "日本銀行"
	},
	{
		rank: 6965,
		frequency: 7.16,
		lemma: "造り"
	},
	{
		rank: 6966,
		frequency: 7.16,
		lemma: "歳出"
	},
	{
		rank: 6967,
		frequency: 7.15,
		lemma: "ナウ"
	},
	{
		rank: 6968,
		frequency: 7.15,
		lemma: "すっごい"
	},
	{
		rank: 6969,
		frequency: 7.15,
		lemma: "有難う"
	},
	{
		rank: 6970,
		frequency: 7.15,
		lemma: "艦"
	},
	{
		rank: 6971,
		frequency: 7.15,
		lemma: "入荷"
	},
	{
		rank: 6972,
		frequency: 7.14,
		lemma: "願望"
	},
	{
		rank: 6973,
		frequency: 7.14,
		lemma: "一行"
	},
	{
		rank: 6974,
		frequency: 7.14,
		lemma: "ホームズ"
	},
	{
		rank: 6975,
		frequency: 7.14,
		lemma: "モジュール"
	},
	{
		rank: 6976,
		frequency: 7.14,
		lemma: "理科"
	},
	{
		rank: 6977,
		frequency: 7.14,
		lemma: "サミット"
	},
	{
		rank: 6978,
		frequency: 7.13,
		lemma: "すいません"
	},
	{
		rank: 6979,
		frequency: 7.13,
		lemma: "ソング"
	},
	{
		rank: 6980,
		frequency: 7.13,
		lemma: "別途"
	},
	{
		rank: 6981,
		frequency: 7.13,
		lemma: "官庁"
	},
	{
		rank: 6982,
		frequency: 7.13,
		lemma: "サム"
	},
	{
		rank: 6983,
		frequency: 7.13,
		lemma: "武士"
	},
	{
		rank: 6984,
		frequency: 7.13,
		lemma: "蕎麦"
	},
	{
		rank: 6985,
		frequency: 7.13,
		lemma: "やばい"
	},
	{
		rank: 6986,
		frequency: 7.12,
		lemma: "フォロー"
	},
	{
		rank: 6987,
		frequency: 7.12,
		lemma: "同等"
	},
	{
		rank: 6988,
		frequency: 7.12,
		lemma: "ストリート"
	},
	{
		rank: 6989,
		frequency: 7.12,
		lemma: "芝"
	},
	{
		rank: 6990,
		frequency: 7.12,
		lemma: "カトリック"
	},
	{
		rank: 6991,
		frequency: 7.12,
		lemma: "無責任"
	},
	{
		rank: 6992,
		frequency: 7.12,
		lemma: "メソッド"
	},
	{
		rank: 6993,
		frequency: 7.12,
		lemma: "処"
	},
	{
		rank: 6994,
		frequency: 7.12,
		lemma: "提唱"
	},
	{
		rank: 6995,
		frequency: 7.12,
		lemma: "募金"
	},
	{
		rank: 6996,
		frequency: 7.12,
		lemma: "すすめる"
	},
	{
		rank: 6997,
		frequency: 7.11,
		lemma: "市販"
	},
	{
		rank: 6998,
		frequency: 7.11,
		lemma: "日刊"
	},
	{
		rank: 6999,
		frequency: 7.11,
		lemma: "銭"
	},
	{
		rank: 7000,
		frequency: 7.11,
		lemma: "他の"
	},
	{
		rank: 7001,
		frequency: 7.11,
		lemma: "入居"
	},
	{
		rank: 7002,
		frequency: 7.11,
		lemma: "助手"
	},
	{
		rank: 7003,
		frequency: 7.11,
		lemma: "成田"
	},
	{
		rank: 7004,
		frequency: 7.11,
		lemma: "アド"
	},
	{
		rank: 7005,
		frequency: 7.1,
		lemma: "パスポート"
	},
	{
		rank: 7006,
		frequency: 7.1,
		lemma: "ギリギリ"
	},
	{
		rank: 7007,
		frequency: 7.1,
		lemma: "モスクワ"
	},
	{
		rank: 7008,
		frequency: 7.1,
		lemma: "アレルギー"
	},
	{
		rank: 7009,
		frequency: 7.1,
		lemma: "特権"
	},
	{
		rank: 7010,
		frequency: 7.1,
		lemma: "聞かす"
	},
	{
		rank: 7011,
		frequency: 7.1,
		lemma: "管轄"
	},
	{
		rank: 7012,
		frequency: 7.1,
		lemma: "位置づける"
	},
	{
		rank: 7013,
		frequency: 7.1,
		lemma: "ラウンド"
	},
	{
		rank: 7014,
		frequency: 7.09,
		lemma: "はて"
	},
	{
		rank: 7015,
		frequency: 7.09,
		lemma: "汚れ"
	},
	{
		rank: 7016,
		frequency: 7.09,
		lemma: "フォン"
	},
	{
		rank: 7017,
		frequency: 7.08,
		lemma: "政"
	},
	{
		rank: 7018,
		frequency: 7.08,
		lemma: "尾"
	},
	{
		rank: 7019,
		frequency: 7.08,
		lemma: "建つ"
	},
	{
		rank: 7020,
		frequency: 7.08,
		lemma: "真に"
	},
	{
		rank: 7021,
		frequency: 7.08,
		lemma: "マラソン"
	},
	{
		rank: 7022,
		frequency: 7.08,
		lemma: "引っ越す"
	},
	{
		rank: 7023,
		frequency: 7.08,
		lemma: "にわたり"
	},
	{
		rank: 7024,
		frequency: 7.08,
		lemma: "連帯"
	},
	{
		rank: 7025,
		frequency: 7.08,
		lemma: "らい"
	},
	{
		rank: 7026,
		frequency: 7.07,
		lemma: "着実"
	},
	{
		rank: 7027,
		frequency: 7.07,
		lemma: "人件"
	},
	{
		rank: 7028,
		frequency: 7.07,
		lemma: "Ｗ"
	},
	{
		rank: 7029,
		frequency: 7.07,
		lemma: "技法"
	},
	{
		rank: 7030,
		frequency: 7.07,
		lemma: "あまりの"
	},
	{
		rank: 7031,
		frequency: 7.07,
		lemma: "不具合"
	},
	{
		rank: 7032,
		frequency: 7.07,
		lemma: "オフィシャル"
	},
	{
		rank: 7033,
		frequency: 7.07,
		lemma: "検"
	},
	{
		rank: 7034,
		frequency: 7.07,
		lemma: "時事"
	},
	{
		rank: 7035,
		frequency: 7.07,
		lemma: "プレゼン"
	},
	{
		rank: 7036,
		frequency: 7.07,
		lemma: "フライ"
	},
	{
		rank: 7037,
		frequency: 7.07,
		lemma: "副作用"
	},
	{
		rank: 7038,
		frequency: 7.07,
		lemma: "関節"
	},
	{
		rank: 7039,
		frequency: 7.07,
		lemma: "濃度"
	},
	{
		rank: 7040,
		frequency: 7.07,
		lemma: "戦士"
	},
	{
		rank: 7041,
		frequency: 7.07,
		lemma: "十月"
	},
	{
		rank: 7042,
		frequency: 7.07,
		lemma: "中毒"
	},
	{
		rank: 7043,
		frequency: 7.06,
		lemma: "社会党"
	},
	{
		rank: 7044,
		frequency: 7.06,
		lemma: "あたかも"
	},
	{
		rank: 7045,
		frequency: 7.06,
		lemma: "登校"
	},
	{
		rank: 7046,
		frequency: 7.05,
		lemma: "プレゼンテーション"
	},
	{
		rank: 7047,
		frequency: 7.05,
		lemma: "バナナ"
	},
	{
		rank: 7048,
		frequency: 7.05,
		lemma: "味噌"
	},
	{
		rank: 7049,
		frequency: 7.05,
		lemma: "プライド"
	},
	{
		rank: 7050,
		frequency: 7.05,
		lemma: "不定期"
	},
	{
		rank: 7051,
		frequency: 7.05,
		lemma: "イチ"
	},
	{
		rank: 7052,
		frequency: 7.05,
		lemma: "追跡"
	},
	{
		rank: 7053,
		frequency: 7.05,
		lemma: "とぶ"
	},
	{
		rank: 7054,
		frequency: 7.04,
		lemma: "旬"
	},
	{
		rank: 7055,
		frequency: 7.04,
		lemma: "延期"
	},
	{
		rank: 7056,
		frequency: 7.04,
		lemma: "松田"
	},
	{
		rank: 7057,
		frequency: 7.04,
		lemma: "各自"
	},
	{
		rank: 7058,
		frequency: 7.04,
		lemma: "馴染み"
	},
	{
		rank: 7059,
		frequency: 7.03,
		lemma: "お互いに"
	},
	{
		rank: 7060,
		frequency: 7.03,
		lemma: "ともあれ"
	},
	{
		rank: 7061,
		frequency: 7.03,
		lemma: "値する"
	},
	{
		rank: 7062,
		frequency: 7.03,
		lemma: "繁栄"
	},
	{
		rank: 7063,
		frequency: 7.03,
		lemma: "暴走"
	},
	{
		rank: 7064,
		frequency: 7.03,
		lemma: "ヤフー"
	},
	{
		rank: 7065,
		frequency: 7.03,
		lemma: "免疫"
	},
	{
		rank: 7066,
		frequency: 7.02,
		lemma: "ターン"
	},
	{
		rank: 7067,
		frequency: 7.02,
		lemma: "老"
	},
	{
		rank: 7068,
		frequency: 7.02,
		lemma: "いじめ"
	},
	{
		rank: 7069,
		frequency: 7.02,
		lemma: "着手"
	},
	{
		rank: 7070,
		frequency: 7.02,
		lemma: "新型"
	},
	{
		rank: 7071,
		frequency: 7.02,
		lemma: "のせる"
	},
	{
		rank: 7072,
		frequency: 7.01,
		lemma: "教わる"
	},
	{
		rank: 7073,
		frequency: 7.01,
		lemma: "中盤"
	},
	{
		rank: 7074,
		frequency: 7.01,
		lemma: "江"
	},
	{
		rank: 7075,
		frequency: 7,
		lemma: "河"
	},
	{
		rank: 7076,
		frequency: 7,
		lemma: "のぼる"
	},
	{
		rank: 7077,
		frequency: 7,
		lemma: "優"
	},
	{
		rank: 7078,
		frequency: 7,
		lemma: "チリ"
	},
	{
		rank: 7079,
		frequency: 7,
		lemma: "桁"
	},
	{
		rank: 7080,
		frequency: 7,
		lemma: "おかしな"
	},
	{
		rank: 7081,
		frequency: 6.99,
		lemma: "均衡"
	},
	{
		rank: 7082,
		frequency: 6.99,
		lemma: "プラスチック"
	},
	{
		rank: 7083,
		frequency: 6.99,
		lemma: "ロビー"
	},
	{
		rank: 7084,
		frequency: 6.99,
		lemma: "到来"
	},
	{
		rank: 7085,
		frequency: 6.99,
		lemma: "弦"
	},
	{
		rank: 7086,
		frequency: 6.99,
		lemma: "建造"
	},
	{
		rank: 7087,
		frequency: 6.99,
		lemma: "精一杯"
	},
	{
		rank: 7088,
		frequency: 6.99,
		lemma: "用事"
	},
	{
		rank: 7089,
		frequency: 6.99,
		lemma: "下りる"
	},
	{
		rank: 7090,
		frequency: 6.98,
		lemma: "さっさと"
	},
	{
		rank: 7091,
		frequency: 6.98,
		lemma: "商人"
	},
	{
		rank: 7092,
		frequency: 6.98,
		lemma: "タワー"
	},
	{
		rank: 7093,
		frequency: 6.98,
		lemma: "上田"
	},
	{
		rank: 7094,
		frequency: 6.97,
		lemma: "馬場"
	},
	{
		rank: 7095,
		frequency: 6.97,
		lemma: "つなげる"
	},
	{
		rank: 7096,
		frequency: 6.97,
		lemma: "お疲れ様"
	},
	{
		rank: 7097,
		frequency: 6.97,
		lemma: "指向"
	},
	{
		rank: 7098,
		frequency: 6.97,
		lemma: "中核"
	},
	{
		rank: 7099,
		frequency: 6.97,
		lemma: "勘定"
	},
	{
		rank: 7100,
		frequency: 6.97,
		lemma: "運行"
	},
	{
		rank: 7101,
		frequency: 6.97,
		lemma: "兄ちゃん"
	},
	{
		rank: 7102,
		frequency: 6.97,
		lemma: "早"
	},
	{
		rank: 7103,
		frequency: 6.96,
		lemma: "時に"
	},
	{
		rank: 7104,
		frequency: 6.96,
		lemma: "十二月"
	},
	{
		rank: 7105,
		frequency: 6.96,
		lemma: "ムード"
	},
	{
		rank: 7106,
		frequency: 6.96,
		lemma: "同情"
	},
	{
		rank: 7107,
		frequency: 6.96,
		lemma: "学歴"
	},
	{
		rank: 7108,
		frequency: 6.96,
		lemma: "入口"
	},
	{
		rank: 7109,
		frequency: 6.96,
		lemma: "止む"
	},
	{
		rank: 7110,
		frequency: 6.95,
		lemma: "接する"
	},
	{
		rank: 7111,
		frequency: 6.95,
		lemma: "有用"
	},
	{
		rank: 7112,
		frequency: 6.95,
		lemma: "農"
	},
	{
		rank: 7113,
		frequency: 6.94,
		lemma: "更"
	},
	{
		rank: 7114,
		frequency: 6.94,
		lemma: "恩恵"
	},
	{
		rank: 7115,
		frequency: 6.94,
		lemma: "強まる"
	},
	{
		rank: 7116,
		frequency: 6.94,
		lemma: "いやー"
	},
	{
		rank: 7117,
		frequency: 6.94,
		lemma: "法務省"
	},
	{
		rank: 7118,
		frequency: 6.93,
		lemma: "炉"
	},
	{
		rank: 7119,
		frequency: 6.93,
		lemma: "領"
	},
	{
		rank: 7120,
		frequency: 6.93,
		lemma: "うかがう"
	},
	{
		rank: 7121,
		frequency: 6.93,
		lemma: "開"
	},
	{
		rank: 7122,
		frequency: 6.93,
		lemma: "もる"
	},
	{
		rank: 7123,
		frequency: 6.93,
		lemma: "ニック"
	},
	{
		rank: 7124,
		frequency: 6.92,
		lemma: "好調"
	},
	{
		rank: 7125,
		frequency: 6.92,
		lemma: "言動"
	},
	{
		rank: 7126,
		frequency: 6.92,
		lemma: "お笑い"
	},
	{
		rank: 7127,
		frequency: 6.92,
		lemma: "養う"
	},
	{
		rank: 7128,
		frequency: 6.92,
		lemma: "弱者"
	},
	{
		rank: 7129,
		frequency: 6.92,
		lemma: "代行"
	},
	{
		rank: 7130,
		frequency: 6.92,
		lemma: "経歴"
	},
	{
		rank: 7131,
		frequency: 6.92,
		lemma: "片方"
	},
	{
		rank: 7132,
		frequency: 6.92,
		lemma: "気の毒"
	},
	{
		rank: 7133,
		frequency: 6.92,
		lemma: "害"
	},
	{
		rank: 7134,
		frequency: 6.92,
		lemma: "食欲"
	},
	{
		rank: 7135,
		frequency: 6.92,
		lemma: "返答"
	},
	{
		rank: 7136,
		frequency: 6.91,
		lemma: "不自由"
	},
	{
		rank: 7137,
		frequency: 6.91,
		lemma: "容認"
	},
	{
		rank: 7138,
		frequency: 6.91,
		lemma: "自律"
	},
	{
		rank: 7139,
		frequency: 6.91,
		lemma: "茂"
	},
	{
		rank: 7140,
		frequency: 6.91,
		lemma: "如何"
	},
	{
		rank: 7141,
		frequency: 6.9,
		lemma: "フラッシュ"
	},
	{
		rank: 7142,
		frequency: 6.9,
		lemma: "うそ"
	},
	{
		rank: 7143,
		frequency: 6.9,
		lemma: "隣接"
	},
	{
		rank: 7144,
		frequency: 6.9,
		lemma: "順序"
	},
	{
		rank: 7145,
		frequency: 6.9,
		lemma: "前期"
	},
	{
		rank: 7146,
		frequency: 6.9,
		lemma: "そっと"
	},
	{
		rank: 7147,
		frequency: 6.9,
		lemma: "リビング"
	},
	{
		rank: 7148,
		frequency: 6.9,
		lemma: "メモリー"
	},
	{
		rank: 7149,
		frequency: 6.89,
		lemma: "然"
	},
	{
		rank: 7150,
		frequency: 6.89,
		lemma: "無知"
	},
	{
		rank: 7151,
		frequency: 6.89,
		lemma: "秋葉原"
	},
	{
		rank: 7152,
		frequency: 6.89,
		lemma: "宮城"
	},
	{
		rank: 7153,
		frequency: 6.89,
		lemma: "リス"
	},
	{
		rank: 7154,
		frequency: 6.89,
		lemma: "中部"
	},
	{
		rank: 7155,
		frequency: 6.89,
		lemma: "坊"
	},
	{
		rank: 7156,
		frequency: 6.88,
		lemma: "同居"
	},
	{
		rank: 7157,
		frequency: 6.88,
		lemma: "責める"
	},
	{
		rank: 7158,
		frequency: 6.88,
		lemma: "遺体"
	},
	{
		rank: 7159,
		frequency: 6.88,
		lemma: "追いつく"
	},
	{
		rank: 7160,
		frequency: 6.88,
		lemma: "創"
	},
	{
		rank: 7161,
		frequency: 6.88,
		lemma: "寺院"
	},
	{
		rank: 7162,
		frequency: 6.88,
		lemma: "きのう"
	},
	{
		rank: 7163,
		frequency: 6.88,
		lemma: "金沢"
	},
	{
		rank: 7164,
		frequency: 6.88,
		lemma: "とどめる"
	},
	{
		rank: 7165,
		frequency: 6.88,
		lemma: "役目"
	},
	{
		rank: 7166,
		frequency: 6.88,
		lemma: "ふたつ"
	},
	{
		rank: 7167,
		frequency: 6.88,
		lemma: "乗り"
	},
	{
		rank: 7168,
		frequency: 6.88,
		lemma: "澤"
	},
	{
		rank: 7169,
		frequency: 6.87,
		lemma: "ご存じ"
	},
	{
		rank: 7170,
		frequency: 6.86,
		lemma: "即ち"
	},
	{
		rank: 7171,
		frequency: 6.86,
		lemma: "途端"
	},
	{
		rank: 7172,
		frequency: 6.86,
		lemma: "住人"
	},
	{
		rank: 7173,
		frequency: 6.86,
		lemma: "事典"
	},
	{
		rank: 7174,
		frequency: 6.86,
		lemma: "上陸"
	},
	{
		rank: 7175,
		frequency: 6.86,
		lemma: "Tシャツ"
	},
	{
		rank: 7176,
		frequency: 6.85,
		lemma: "打撃"
	},
	{
		rank: 7177,
		frequency: 6.85,
		lemma: "あちら"
	},
	{
		rank: 7178,
		frequency: 6.84,
		lemma: "セブン"
	},
	{
		rank: 7179,
		frequency: 6.84,
		lemma: "こっそり"
	},
	{
		rank: 7180,
		frequency: 6.84,
		lemma: "ハッピー"
	},
	{
		rank: 7181,
		frequency: 6.84,
		lemma: "最小"
	},
	{
		rank: 7182,
		frequency: 6.84,
		lemma: "テレビ局"
	},
	{
		rank: 7183,
		frequency: 6.84,
		lemma: "保安"
	},
	{
		rank: 7184,
		frequency: 6.84,
		lemma: "ボリューム"
	},
	{
		rank: 7185,
		frequency: 6.84,
		lemma: "模型"
	},
	{
		rank: 7186,
		frequency: 6.84,
		lemma: "ミラー"
	},
	{
		rank: 7187,
		frequency: 6.84,
		lemma: "気力"
	},
	{
		rank: 7188,
		frequency: 6.83,
		lemma: "じゃう"
	},
	{
		rank: 7189,
		frequency: 6.83,
		lemma: "西欧"
	},
	{
		rank: 7190,
		frequency: 6.83,
		lemma: "鮮やか"
	},
	{
		rank: 7191,
		frequency: 6.83,
		lemma: "国有"
	},
	{
		rank: 7192,
		frequency: 6.83,
		lemma: "メタ"
	},
	{
		rank: 7193,
		frequency: 6.83,
		lemma: "診る"
	},
	{
		rank: 7194,
		frequency: 6.83,
		lemma: "ドラム"
	},
	{
		rank: 7195,
		frequency: 6.82,
		lemma: "向う"
	},
	{
		rank: 7196,
		frequency: 6.82,
		lemma: "聴取"
	},
	{
		rank: 7197,
		frequency: 6.82,
		lemma: "物資"
	},
	{
		rank: 7198,
		frequency: 6.82,
		lemma: "晋"
	},
	{
		rank: 7199,
		frequency: 6.82,
		lemma: "知能"
	},
	{
		rank: 7200,
		frequency: 6.82,
		lemma: "サロン"
	},
	{
		rank: 7201,
		frequency: 6.82,
		lemma: "アフガニスタン"
	},
	{
		rank: 7202,
		frequency: 6.82,
		lemma: "決着"
	},
	{
		rank: 7203,
		frequency: 6.82,
		lemma: "テル"
	},
	{
		rank: 7204,
		frequency: 6.82,
		lemma: "教徒"
	},
	{
		rank: 7205,
		frequency: 6.81,
		lemma: "査定"
	},
	{
		rank: 7206,
		frequency: 6.81,
		lemma: "心身"
	},
	{
		rank: 7207,
		frequency: 6.81,
		lemma: "唐"
	},
	{
		rank: 7208,
		frequency: 6.81,
		lemma: "折"
	},
	{
		rank: 7209,
		frequency: 6.81,
		lemma: "マック"
	},
	{
		rank: 7210,
		frequency: 6.81,
		lemma: "交える"
	},
	{
		rank: 7211,
		frequency: 6.81,
		lemma: "抑圧"
	},
	{
		rank: 7212,
		frequency: 6.8,
		lemma: "月曜"
	},
	{
		rank: 7213,
		frequency: 6.8,
		lemma: "念頭"
	},
	{
		rank: 7214,
		frequency: 6.8,
		lemma: "ローズ"
	},
	{
		rank: 7215,
		frequency: 6.8,
		lemma: "出"
	},
	{
		rank: 7216,
		frequency: 6.8,
		lemma: "環"
	},
	{
		rank: 7217,
		frequency: 6.8,
		lemma: "見送る"
	},
	{
		rank: 7218,
		frequency: 6.8,
		lemma: "一昨日"
	},
	{
		rank: 7219,
		frequency: 6.8,
		lemma: "アニメーション"
	},
	{
		rank: 7220,
		frequency: 6.8,
		lemma: "連結"
	},
	{
		rank: 7221,
		frequency: 6.8,
		lemma: "増税"
	},
	{
		rank: 7222,
		frequency: 6.8,
		lemma: "債券"
	},
	{
		rank: 7223,
		frequency: 6.8,
		lemma: "好意"
	},
	{
		rank: 7224,
		frequency: 6.8,
		lemma: "楽曲"
	},
	{
		rank: 7225,
		frequency: 6.79,
		lemma: "登"
	},
	{
		rank: 7226,
		frequency: 6.79,
		lemma: "ラグビー"
	},
	{
		rank: 7227,
		frequency: 6.79,
		lemma: "めん"
	},
	{
		rank: 7228,
		frequency: 6.79,
		lemma: "いし"
	},
	{
		rank: 7229,
		frequency: 6.78,
		lemma: "魔女"
	},
	{
		rank: 7230,
		frequency: 6.78,
		lemma: "喪失"
	},
	{
		rank: 7231,
		frequency: 6.78,
		lemma: "前方"
	},
	{
		rank: 7232,
		frequency: 6.78,
		lemma: "ハンド"
	},
	{
		rank: 7233,
		frequency: 6.78,
		lemma: "竹中"
	},
	{
		rank: 7234,
		frequency: 6.78,
		lemma: "助教授"
	},
	{
		rank: 7235,
		frequency: 6.78,
		lemma: "日本酒"
	},
	{
		rank: 7236,
		frequency: 6.77,
		lemma: "立体"
	},
	{
		rank: 7237,
		frequency: 6.77,
		lemma: "断念"
	},
	{
		rank: 7238,
		frequency: 6.77,
		lemma: "恐い"
	},
	{
		rank: 7239,
		frequency: 6.77,
		lemma: "法務"
	},
	{
		rank: 7240,
		frequency: 6.77,
		lemma: "押し"
	},
	{
		rank: 7241,
		frequency: 6.77,
		lemma: "ブロード"
	},
	{
		rank: 7242,
		frequency: 6.76,
		lemma: "除外"
	},
	{
		rank: 7243,
		frequency: 6.76,
		lemma: "バトル"
	},
	{
		rank: 7244,
		frequency: 6.76,
		lemma: "春の"
	},
	{
		rank: 7245,
		frequency: 6.76,
		lemma: "汚れる"
	},
	{
		rank: 7246,
		frequency: 6.76,
		lemma: "ランプ"
	},
	{
		rank: 7247,
		frequency: 6.76,
		lemma: "音響"
	},
	{
		rank: 7248,
		frequency: 6.76,
		lemma: "断熱"
	},
	{
		rank: 7249,
		frequency: 6.76,
		lemma: "テント"
	},
	{
		rank: 7250,
		frequency: 6.76,
		lemma: "急増"
	},
	{
		rank: 7251,
		frequency: 6.76,
		lemma: "結びつける"
	},
	{
		rank: 7252,
		frequency: 6.76,
		lemma: "呼び出す"
	},
	{
		rank: 7253,
		frequency: 6.75,
		lemma: "混雑"
	},
	{
		rank: 7254,
		frequency: 6.75,
		lemma: "犯行"
	},
	{
		rank: 7255,
		frequency: 6.75,
		lemma: "エビ"
	},
	{
		rank: 7256,
		frequency: 6.75,
		lemma: "当方"
	},
	{
		rank: 7257,
		frequency: 6.75,
		lemma: "欧"
	},
	{
		rank: 7258,
		frequency: 6.75,
		lemma: "生理"
	},
	{
		rank: 7259,
		frequency: 6.75,
		lemma: "たたく"
	},
	{
		rank: 7260,
		frequency: 6.75,
		lemma: "算定"
	},
	{
		rank: 7261,
		frequency: 6.75,
		lemma: "帝"
	},
	{
		rank: 7262,
		frequency: 6.75,
		lemma: "暫定"
	},
	{
		rank: 7263,
		frequency: 6.75,
		lemma: "まわす"
	},
	{
		rank: 7264,
		frequency: 6.75,
		lemma: "安価"
	},
	{
		rank: 7265,
		frequency: 6.75,
		lemma: "内蔵"
	},
	{
		rank: 7266,
		frequency: 6.74,
		lemma: "ハードディスク"
	},
	{
		rank: 7267,
		frequency: 6.73,
		lemma: "はたして"
	},
	{
		rank: 7268,
		frequency: 6.73,
		lemma: "さらなる"
	},
	{
		rank: 7269,
		frequency: 6.73,
		lemma: "越す"
	},
	{
		rank: 7270,
		frequency: 6.73,
		lemma: "足る"
	},
	{
		rank: 7271,
		frequency: 6.73,
		lemma: "隙間"
	},
	{
		rank: 7272,
		frequency: 6.73,
		lemma: "オーストリア"
	},
	{
		rank: 7273,
		frequency: 6.73,
		lemma: "中期"
	},
	{
		rank: 7274,
		frequency: 6.73,
		lemma: "許せる"
	},
	{
		rank: 7275,
		frequency: 6.73,
		lemma: "交差点"
	},
	{
		rank: 7276,
		frequency: 6.72,
		lemma: "のり"
	},
	{
		rank: 7277,
		frequency: 6.72,
		lemma: "上達"
	},
	{
		rank: 7278,
		frequency: 6.72,
		lemma: "補う"
	},
	{
		rank: 7279,
		frequency: 6.72,
		lemma: "ラリー"
	},
	{
		rank: 7280,
		frequency: 6.71,
		lemma: "祝う"
	},
	{
		rank: 7281,
		frequency: 6.71,
		lemma: "ゞ"
	},
	{
		rank: 7282,
		frequency: 6.71,
		lemma: "トリノ"
	},
	{
		rank: 7283,
		frequency: 6.71,
		lemma: "タンク"
	},
	{
		rank: 7284,
		frequency: 6.71,
		lemma: "黄色い"
	},
	{
		rank: 7285,
		frequency: 6.71,
		lemma: "評議"
	},
	{
		rank: 7286,
		frequency: 6.71,
		lemma: "友情"
	},
	{
		rank: 7287,
		frequency: 6.71,
		lemma: "ましてや"
	},
	{
		rank: 7288,
		frequency: 6.71,
		lemma: "助"
	},
	{
		rank: 7289,
		frequency: 6.71,
		lemma: "切ない"
	},
	{
		rank: 7290,
		frequency: 6.71,
		lemma: "フィギュア"
	},
	{
		rank: 7291,
		frequency: 6.71,
		lemma: "通行"
	},
	{
		rank: 7292,
		frequency: 6.71,
		lemma: "宏"
	},
	{
		rank: 7293,
		frequency: 6.7,
		lemma: "書物"
	},
	{
		rank: 7294,
		frequency: 6.7,
		lemma: "大豆"
	},
	{
		rank: 7295,
		frequency: 6.7,
		lemma: "アマチュア"
	},
	{
		rank: 7296,
		frequency: 6.7,
		lemma: "漏れる"
	},
	{
		rank: 7297,
		frequency: 6.7,
		lemma: "付与"
	},
	{
		rank: 7298,
		frequency: 6.7,
		lemma: "想う"
	},
	{
		rank: 7299,
		frequency: 6.7,
		lemma: "うっかり"
	},
	{
		rank: 7300,
		frequency: 6.7,
		lemma: "おなか"
	},
	{
		rank: 7301,
		frequency: 6.7,
		lemma: "虎"
	},
	{
		rank: 7302,
		frequency: 6.69,
		lemma: "もとより"
	},
	{
		rank: 7303,
		frequency: 6.69,
		lemma: "東海"
	},
	{
		rank: 7304,
		frequency: 6.69,
		lemma: "あっち"
	},
	{
		rank: 7305,
		frequency: 6.69,
		lemma: "万博"
	},
	{
		rank: 7306,
		frequency: 6.69,
		lemma: "のど"
	},
	{
		rank: 7307,
		frequency: 6.69,
		lemma: "都心"
	},
	{
		rank: 7308,
		frequency: 6.69,
		lemma: "タオル"
	},
	{
		rank: 7309,
		frequency: 6.69,
		lemma: "ドコモ"
	},
	{
		rank: 7310,
		frequency: 6.69,
		lemma: "エージェント"
	},
	{
		rank: 7311,
		frequency: 6.68,
		lemma: "暴露"
	},
	{
		rank: 7312,
		frequency: 6.68,
		lemma: "コミュニティー"
	},
	{
		rank: 7313,
		frequency: 6.68,
		lemma: "青空"
	},
	{
		rank: 7314,
		frequency: 6.68,
		lemma: "永久"
	},
	{
		rank: 7315,
		frequency: 6.67,
		lemma: "ボストン"
	},
	{
		rank: 7316,
		frequency: 6.67,
		lemma: "内外"
	},
	{
		rank: 7317,
		frequency: 6.67,
		lemma: "終始"
	},
	{
		rank: 7318,
		frequency: 6.67,
		lemma: "交際"
	},
	{
		rank: 7319,
		frequency: 6.67,
		lemma: "続"
	},
	{
		rank: 7320,
		frequency: 6.67,
		lemma: "ジョーク"
	},
	{
		rank: 7321,
		frequency: 6.67,
		lemma: "了"
	},
	{
		rank: 7322,
		frequency: 6.67,
		lemma: "書記"
	},
	{
		rank: 7323,
		frequency: 6.66,
		lemma: "動員"
	},
	{
		rank: 7324,
		frequency: 6.66,
		lemma: "未知"
	},
	{
		rank: 7325,
		frequency: 6.65,
		lemma: "言い換える"
	},
	{
		rank: 7326,
		frequency: 6.65,
		lemma: "抜本"
	},
	{
		rank: 7327,
		frequency: 6.65,
		lemma: "ステキ"
	},
	{
		rank: 7328,
		frequency: 6.65,
		lemma: "発動"
	},
	{
		rank: 7329,
		frequency: 6.65,
		lemma: "ギフト"
	},
	{
		rank: 7330,
		frequency: 6.65,
		lemma: "パイ"
	},
	{
		rank: 7331,
		frequency: 6.65,
		lemma: "大島"
	},
	{
		rank: 7332,
		frequency: 6.65,
		lemma: "陸軍"
	},
	{
		rank: 7333,
		frequency: 6.64,
		lemma: "県立"
	},
	{
		rank: 7334,
		frequency: 6.64,
		lemma: "パイプ"
	},
	{
		rank: 7335,
		frequency: 6.64,
		lemma: "ベイ"
	},
	{
		rank: 7336,
		frequency: 6.64,
		lemma: "孤立"
	},
	{
		rank: 7337,
		frequency: 6.63,
		lemma: "シンボル"
	},
	{
		rank: 7338,
		frequency: 6.63,
		lemma: "お子さん"
	},
	{
		rank: 7339,
		frequency: 6.63,
		lemma: "矯正"
	},
	{
		rank: 7340,
		frequency: 6.63,
		lemma: "仮面"
	},
	{
		rank: 7341,
		frequency: 6.63,
		lemma: "煙草"
	},
	{
		rank: 7342,
		frequency: 6.63,
		lemma: "イチロー"
	},
	{
		rank: 7343,
		frequency: 6.63,
		lemma: "ドクター"
	},
	{
		rank: 7344,
		frequency: 6.63,
		lemma: "レイアウト"
	},
	{
		rank: 7345,
		frequency: 6.62,
		lemma: "集まり"
	},
	{
		rank: 7346,
		frequency: 6.62,
		lemma: "次期"
	},
	{
		rank: 7347,
		frequency: 6.62,
		lemma: "広大"
	},
	{
		rank: 7348,
		frequency: 6.62,
		lemma: "よそ"
	},
	{
		rank: 7349,
		frequency: 6.62,
		lemma: "教科"
	},
	{
		rank: 7350,
		frequency: 6.61,
		lemma: "多発"
	},
	{
		rank: 7351,
		frequency: 6.61,
		lemma: "アメ"
	},
	{
		rank: 7352,
		frequency: 6.61,
		lemma: "ヘルプ"
	},
	{
		rank: 7353,
		frequency: 6.61,
		lemma: "あいまい"
	},
	{
		rank: 7354,
		frequency: 6.61,
		lemma: "岡本"
	},
	{
		rank: 7355,
		frequency: 6.61,
		lemma: "訊く"
	},
	{
		rank: 7356,
		frequency: 6.61,
		lemma: "ゴールド"
	},
	{
		rank: 7357,
		frequency: 6.61,
		lemma: "救急"
	},
	{
		rank: 7358,
		frequency: 6.61,
		lemma: "原爆"
	},
	{
		rank: 7359,
		frequency: 6.6,
		lemma: "罰金"
	},
	{
		rank: 7360,
		frequency: 6.6,
		lemma: "ぎりぎり"
	},
	{
		rank: 7361,
		frequency: 6.6,
		lemma: "単一"
	},
	{
		rank: 7362,
		frequency: 6.6,
		lemma: "ピッチ"
	},
	{
		rank: 7363,
		frequency: 6.6,
		lemma: "注射"
	},
	{
		rank: 7364,
		frequency: 6.6,
		lemma: "受験生"
	},
	{
		rank: 7365,
		frequency: 6.59,
		lemma: "リーダーシップ"
	},
	{
		rank: 7366,
		frequency: 6.59,
		lemma: "ジェイ"
	},
	{
		rank: 7367,
		frequency: 6.59,
		lemma: "しばし"
	},
	{
		rank: 7368,
		frequency: 6.59,
		lemma: "歩道"
	},
	{
		rank: 7369,
		frequency: 6.59,
		lemma: "モラル"
	},
	{
		rank: 7370,
		frequency: 6.59,
		lemma: "守"
	},
	{
		rank: 7371,
		frequency: 6.59,
		lemma: "特色"
	},
	{
		rank: 7372,
		frequency: 6.59,
		lemma: "探検"
	},
	{
		rank: 7373,
		frequency: 6.59,
		lemma: "閣議"
	},
	{
		rank: 7374,
		frequency: 6.59,
		lemma: "あわてる"
	},
	{
		rank: 7375,
		frequency: 6.59,
		lemma: "竹内"
	},
	{
		rank: 7376,
		frequency: 6.58,
		lemma: "出入り"
	},
	{
		rank: 7377,
		frequency: 6.58,
		lemma: "サンタ"
	},
	{
		rank: 7378,
		frequency: 6.58,
		lemma: "シャー"
	},
	{
		rank: 7379,
		frequency: 6.58,
		lemma: "ミステリー"
	},
	{
		rank: 7380,
		frequency: 6.58,
		lemma: "ペア"
	},
	{
		rank: 7381,
		frequency: 6.58,
		lemma: "資質"
	},
	{
		rank: 7382,
		frequency: 6.58,
		lemma: "加"
	},
	{
		rank: 7383,
		frequency: 6.58,
		lemma: "アク"
	},
	{
		rank: 7384,
		frequency: 6.58,
		lemma: "反す"
	},
	{
		rank: 7385,
		frequency: 6.58,
		lemma: "シール"
	},
	{
		rank: 7386,
		frequency: 6.58,
		lemma: "シルバー"
	},
	{
		rank: 7387,
		frequency: 6.58,
		lemma: "変る"
	},
	{
		rank: 7388,
		frequency: 6.57,
		lemma: "大騒ぎ"
	},
	{
		rank: 7389,
		frequency: 6.57,
		lemma: "並"
	},
	{
		rank: 7390,
		frequency: 6.57,
		lemma: "劇的"
	},
	{
		rank: 7391,
		frequency: 6.57,
		lemma: "はや"
	},
	{
		rank: 7392,
		frequency: 6.57,
		lemma: "即座"
	},
	{
		rank: 7393,
		frequency: 6.57,
		lemma: "とめる"
	},
	{
		rank: 7394,
		frequency: 6.56,
		lemma: "戦力"
	},
	{
		rank: 7395,
		frequency: 6.56,
		lemma: "損なう"
	},
	{
		rank: 7396,
		frequency: 6.56,
		lemma: "選び"
	},
	{
		rank: 7397,
		frequency: 6.56,
		lemma: "堀"
	},
	{
		rank: 7398,
		frequency: 6.56,
		lemma: "後退"
	},
	{
		rank: 7399,
		frequency: 6.56,
		lemma: "やん"
	},
	{
		rank: 7400,
		frequency: 6.56,
		lemma: "公明党"
	},
	{
		rank: 7401,
		frequency: 6.56,
		lemma: "原文"
	},
	{
		rank: 7402,
		frequency: 6.56,
		lemma: "散策"
	},
	{
		rank: 7403,
		frequency: 6.56,
		lemma: "画期的"
	},
	{
		rank: 7404,
		frequency: 6.55,
		lemma: "打ち込む"
	},
	{
		rank: 7405,
		frequency: 6.55,
		lemma: "火星"
	},
	{
		rank: 7406,
		frequency: 6.54,
		lemma: "たか"
	},
	{
		rank: 7407,
		frequency: 6.54,
		lemma: "閉める"
	},
	{
		rank: 7408,
		frequency: 6.54,
		lemma: "追悼"
	},
	{
		rank: 7409,
		frequency: 6.54,
		lemma: "マイクロ"
	},
	{
		rank: 7410,
		frequency: 6.54,
		lemma: "余りに"
	},
	{
		rank: 7411,
		frequency: 6.53,
		lemma: "引き上げ"
	},
	{
		rank: 7412,
		frequency: 6.53,
		lemma: "文字通り"
	},
	{
		rank: 7413,
		frequency: 6.53,
		lemma: "起床"
	},
	{
		rank: 7414,
		frequency: 6.53,
		lemma: "駒"
	},
	{
		rank: 7415,
		frequency: 6.53,
		lemma: "眼鏡"
	},
	{
		rank: 7416,
		frequency: 6.53,
		lemma: "練る"
	},
	{
		rank: 7417,
		frequency: 6.53,
		lemma: "集計"
	},
	{
		rank: 7418,
		frequency: 6.53,
		lemma: "浜"
	},
	{
		rank: 7419,
		frequency: 6.53,
		lemma: "新興"
	},
	{
		rank: 7420,
		frequency: 6.53,
		lemma: "マスク"
	},
	{
		rank: 7421,
		frequency: 6.52,
		lemma: "後継"
	},
	{
		rank: 7422,
		frequency: 6.52,
		lemma: "宮本"
	},
	{
		rank: 7423,
		frequency: 6.52,
		lemma: "本土"
	},
	{
		rank: 7424,
		frequency: 6.52,
		lemma: "断言"
	},
	{
		rank: 7425,
		frequency: 6.52,
		lemma: "露出"
	},
	{
		rank: 7426,
		frequency: 6.52,
		lemma: "免除"
	},
	{
		rank: 7427,
		frequency: 6.51,
		lemma: "惜しむ"
	},
	{
		rank: 7428,
		frequency: 6.51,
		lemma: "器具"
	},
	{
		rank: 7429,
		frequency: 6.51,
		lemma: "行える"
	},
	{
		rank: 7430,
		frequency: 6.51,
		lemma: "ちなむ"
	},
	{
		rank: 7431,
		frequency: 6.51,
		lemma: "優遇"
	},
	{
		rank: 7432,
		frequency: 6.51,
		lemma: "帰還"
	},
	{
		rank: 7433,
		frequency: 6.51,
		lemma: "中でも"
	},
	{
		rank: 7434,
		frequency: 6.51,
		lemma: "何時"
	},
	{
		rank: 7435,
		frequency: 6.51,
		lemma: "課す"
	},
	{
		rank: 7436,
		frequency: 6.5,
		lemma: "率いる"
	},
	{
		rank: 7437,
		frequency: 6.5,
		lemma: "富む"
	},
	{
		rank: 7438,
		frequency: 6.5,
		lemma: "痛む"
	},
	{
		rank: 7439,
		frequency: 6.5,
		lemma: "頭痛"
	},
	{
		rank: 7440,
		frequency: 6.5,
		lemma: "律"
	},
	{
		rank: 7441,
		frequency: 6.49,
		lemma: "四半期"
	},
	{
		rank: 7442,
		frequency: 6.49,
		lemma: "宴会"
	},
	{
		rank: 7443,
		frequency: 6.49,
		lemma: "鹿"
	},
	{
		rank: 7444,
		frequency: 6.49,
		lemma: "うらやましい"
	},
	{
		rank: 7445,
		frequency: 6.49,
		lemma: "補完"
	},
	{
		rank: 7446,
		frequency: 6.49,
		lemma: "受け入れ"
	},
	{
		rank: 7447,
		frequency: 6.49,
		lemma: "はやる"
	},
	{
		rank: 7448,
		frequency: 6.48,
		lemma: "うたう"
	},
	{
		rank: 7449,
		frequency: 6.48,
		lemma: "くじ"
	},
	{
		rank: 7450,
		frequency: 6.48,
		lemma: "スカート"
	},
	{
		rank: 7451,
		frequency: 6.48,
		lemma: "不自然"
	},
	{
		rank: 7452,
		frequency: 6.48,
		lemma: "個体"
	},
	{
		rank: 7453,
		frequency: 6.48,
		lemma: "ネーム"
	},
	{
		rank: 7454,
		frequency: 6.48,
		lemma: "とまる"
	},
	{
		rank: 7455,
		frequency: 6.48,
		lemma: "引っかかる"
	},
	{
		rank: 7456,
		frequency: 6.47,
		lemma: "落札"
	},
	{
		rank: 7457,
		frequency: 6.47,
		lemma: "割れる"
	},
	{
		rank: 7458,
		frequency: 6.47,
		lemma: "需給"
	},
	{
		rank: 7459,
		frequency: 6.47,
		lemma: "三浦"
	},
	{
		rank: 7460,
		frequency: 6.47,
		lemma: "著名"
	},
	{
		rank: 7461,
		frequency: 6.46,
		lemma: "唇"
	},
	{
		rank: 7462,
		frequency: 6.46,
		lemma: "完結"
	},
	{
		rank: 7463,
		frequency: 6.46,
		lemma: "嘆く"
	},
	{
		rank: 7464,
		frequency: 6.46,
		lemma: "広まる"
	},
	{
		rank: 7465,
		frequency: 6.46,
		lemma: "外貨"
	},
	{
		rank: 7466,
		frequency: 6.46,
		lemma: "作文"
	},
	{
		rank: 7467,
		frequency: 6.46,
		lemma: "通路"
	},
	{
		rank: 7468,
		frequency: 6.46,
		lemma: "気合"
	},
	{
		rank: 7469,
		frequency: 6.46,
		lemma: "Ｖ"
	},
	{
		rank: 7470,
		frequency: 6.46,
		lemma: "立案"
	},
	{
		rank: 7471,
		frequency: 6.46,
		lemma: "全額"
	},
	{
		rank: 7472,
		frequency: 6.46,
		lemma: "通話"
	},
	{
		rank: 7473,
		frequency: 6.45,
		lemma: "リターン"
	},
	{
		rank: 7474,
		frequency: 6.45,
		lemma: "愛国心"
	},
	{
		rank: 7475,
		frequency: 6.45,
		lemma: "充電"
	},
	{
		rank: 7476,
		frequency: 6.45,
		lemma: "意味合い"
	},
	{
		rank: 7477,
		frequency: 6.45,
		lemma: "色彩"
	},
	{
		rank: 7478,
		frequency: 6.44,
		lemma: "食物"
	},
	{
		rank: 7479,
		frequency: 6.44,
		lemma: "在る"
	},
	{
		rank: 7480,
		frequency: 6.44,
		lemma: "参戦"
	},
	{
		rank: 7481,
		frequency: 6.44,
		lemma: "共存"
	},
	{
		rank: 7482,
		frequency: 6.44,
		lemma: "蓋"
	},
	{
		rank: 7483,
		frequency: 6.44,
		lemma: "症候群"
	},
	{
		rank: 7484,
		frequency: 6.44,
		lemma: "ってな"
	},
	{
		rank: 7485,
		frequency: 6.44,
		lemma: "繋ぐ"
	},
	{
		rank: 7486,
		frequency: 6.44,
		lemma: "手がける"
	},
	{
		rank: 7487,
		frequency: 6.44,
		lemma: "木材"
	},
	{
		rank: 7488,
		frequency: 6.44,
		lemma: "敗北"
	},
	{
		rank: 7489,
		frequency: 6.43,
		lemma: "化す"
	},
	{
		rank: 7490,
		frequency: 6.43,
		lemma: "こす"
	},
	{
		rank: 7491,
		frequency: 6.43,
		lemma: "浸る"
	},
	{
		rank: 7492,
		frequency: 6.43,
		lemma: "昨晩"
	},
	{
		rank: 7493,
		frequency: 6.43,
		lemma: "荒川"
	},
	{
		rank: 7494,
		frequency: 6.43,
		lemma: "高騰"
	},
	{
		rank: 7495,
		frequency: 6.43,
		lemma: "退院"
	},
	{
		rank: 7496,
		frequency: 6.42,
		lemma: "所管"
	},
	{
		rank: 7497,
		frequency: 6.42,
		lemma: "ヒロイン"
	},
	{
		rank: 7498,
		frequency: 6.42,
		lemma: "妨げる"
	},
	{
		rank: 7499,
		frequency: 6.42,
		lemma: "品種"
	},
	{
		rank: 7500,
		frequency: 6.42,
		lemma: "遺憾"
	},
	{
		rank: 7501,
		frequency: 6.42,
		lemma: "見極める"
	},
	{
		rank: 7502,
		frequency: 6.42,
		lemma: "ひょっと"
	},
	{
		rank: 7503,
		frequency: 6.42,
		lemma: "つぶす"
	},
	{
		rank: 7504,
		frequency: 6.42,
		lemma: "包括"
	},
	{
		rank: 7505,
		frequency: 6.42,
		lemma: "臓器"
	},
	{
		rank: 7506,
		frequency: 6.42,
		lemma: "爪"
	},
	{
		rank: 7507,
		frequency: 6.42,
		lemma: "ドラゴン"
	},
	{
		rank: 7508,
		frequency: 6.41,
		lemma: "指令"
	},
	{
		rank: 7509,
		frequency: 6.41,
		lemma: "書房"
	},
	{
		rank: 7510,
		frequency: 6.41,
		lemma: "見受ける"
	},
	{
		rank: 7511,
		frequency: 6.41,
		lemma: "退場"
	},
	{
		rank: 7512,
		frequency: 6.41,
		lemma: "突く"
	},
	{
		rank: 7513,
		frequency: 6.41,
		lemma: "ベストセラー"
	},
	{
		rank: 7514,
		frequency: 6.41,
		lemma: "親しむ"
	},
	{
		rank: 7515,
		frequency: 6.41,
		lemma: "選べる"
	},
	{
		rank: 7516,
		frequency: 6.41,
		lemma: "宜しい"
	},
	{
		rank: 7517,
		frequency: 6.41,
		lemma: "コンタクト"
	},
	{
		rank: 7518,
		frequency: 6.4,
		lemma: "マット"
	},
	{
		rank: 7519,
		frequency: 6.4,
		lemma: "市役所"
	},
	{
		rank: 7520,
		frequency: 6.4,
		lemma: "竹島"
	},
	{
		rank: 7521,
		frequency: 6.4,
		lemma: "なくす"
	},
	{
		rank: 7522,
		frequency: 6.4,
		lemma: "リカ"
	},
	{
		rank: 7523,
		frequency: 6.4,
		lemma: "書面"
	},
	{
		rank: 7524,
		frequency: 6.4,
		lemma: "盛り上げる"
	},
	{
		rank: 7525,
		frequency: 6.39,
		lemma: "事象"
	},
	{
		rank: 7526,
		frequency: 6.39,
		lemma: "留意"
	},
	{
		rank: 7527,
		frequency: 6.39,
		lemma: "体操"
	},
	{
		rank: 7528,
		frequency: 6.39,
		lemma: "不審"
	},
	{
		rank: 7529,
		frequency: 6.39,
		lemma: "治す"
	},
	{
		rank: 7530,
		frequency: 6.38,
		lemma: "社説"
	},
	{
		rank: 7531,
		frequency: 6.38,
		lemma: "芽"
	},
	{
		rank: 7532,
		frequency: 6.38,
		lemma: "乗れる"
	},
	{
		rank: 7533,
		frequency: 6.38,
		lemma: "痛"
	},
	{
		rank: 7534,
		frequency: 6.38,
		lemma: "颪"
	},
	{
		rank: 7535,
		frequency: 6.38,
		lemma: "芸術家"
	},
	{
		rank: 7536,
		frequency: 6.38,
		lemma: "異動"
	},
	{
		rank: 7537,
		frequency: 6.38,
		lemma: "完"
	},
	{
		rank: 7538,
		frequency: 6.37,
		lemma: "インターナショナル"
	},
	{
		rank: 7539,
		frequency: 6.37,
		lemma: "陸"
	},
	{
		rank: 7540,
		frequency: 6.37,
		lemma: "多大"
	},
	{
		rank: 7541,
		frequency: 6.37,
		lemma: "抜群"
	},
	{
		rank: 7542,
		frequency: 6.37,
		lemma: "火山"
	},
	{
		rank: 7543,
		frequency: 6.37,
		lemma: "労務"
	},
	{
		rank: 7544,
		frequency: 6.37,
		lemma: "野田"
	},
	{
		rank: 7545,
		frequency: 6.37,
		lemma: "テンプレート"
	},
	{
		rank: 7546,
		frequency: 6.36,
		lemma: "冷凍"
	},
	{
		rank: 7547,
		frequency: 6.36,
		lemma: "ベルギー"
	},
	{
		rank: 7548,
		frequency: 6.36,
		lemma: "いまいち"
	},
	{
		rank: 7549,
		frequency: 6.36,
		lemma: "年賀状"
	},
	{
		rank: 7550,
		frequency: 6.36,
		lemma: "七夕"
	},
	{
		rank: 7551,
		frequency: 6.35,
		lemma: "苦"
	},
	{
		rank: 7552,
		frequency: 6.35,
		lemma: "ハッキリ"
	},
	{
		rank: 7553,
		frequency: 6.35,
		lemma: "うし"
	},
	{
		rank: 7554,
		frequency: 6.35,
		lemma: "パイロット"
	},
	{
		rank: 7555,
		frequency: 6.35,
		lemma: "出し"
	},
	{
		rank: 7556,
		frequency: 6.35,
		lemma: "日本一"
	},
	{
		rank: 7557,
		frequency: 6.35,
		lemma: "徹"
	},
	{
		rank: 7558,
		frequency: 6.35,
		lemma: "パーマ"
	},
	{
		rank: 7559,
		frequency: 6.35,
		lemma: "説教"
	},
	{
		rank: 7560,
		frequency: 6.35,
		lemma: "一昨年"
	},
	{
		rank: 7561,
		frequency: 6.35,
		lemma: "こたえる"
	},
	{
		rank: 7562,
		frequency: 6.34,
		lemma: "どん"
	},
	{
		rank: 7563,
		frequency: 6.34,
		lemma: "クレジット"
	},
	{
		rank: 7564,
		frequency: 6.34,
		lemma: "登記"
	},
	{
		rank: 7565,
		frequency: 6.34,
		lemma: "仲介"
	},
	{
		rank: 7566,
		frequency: 6.34,
		lemma: "エイ"
	},
	{
		rank: 7567,
		frequency: 6.34,
		lemma: "半導体"
	},
	{
		rank: 7568,
		frequency: 6.33,
		lemma: "何かと"
	},
	{
		rank: 7569,
		frequency: 6.33,
		lemma: "ナイ"
	},
	{
		rank: 7570,
		frequency: 6.33,
		lemma: "炒める"
	},
	{
		rank: 7571,
		frequency: 6.33,
		lemma: "放射"
	},
	{
		rank: 7572,
		frequency: 6.33,
		lemma: "ホンダ"
	},
	{
		rank: 7573,
		frequency: 6.33,
		lemma: "劇団"
	},
	{
		rank: 7574,
		frequency: 6.32,
		lemma: "自発"
	},
	{
		rank: 7575,
		frequency: 6.32,
		lemma: "明ける"
	},
	{
		rank: 7576,
		frequency: 6.32,
		lemma: "ロマン"
	},
	{
		rank: 7577,
		frequency: 6.32,
		lemma: "髪の毛"
	},
	{
		rank: 7578,
		frequency: 6.31,
		lemma: "如し"
	},
	{
		rank: 7579,
		frequency: 6.31,
		lemma: "アリス"
	},
	{
		rank: 7580,
		frequency: 6.31,
		lemma: "物体"
	},
	{
		rank: 7581,
		frequency: 6.31,
		lemma: "救助"
	},
	{
		rank: 7582,
		frequency: 6.31,
		lemma: "見合う"
	},
	{
		rank: 7583,
		frequency: 6.31,
		lemma: "同年"
	},
	{
		rank: 7584,
		frequency: 6.31,
		lemma: "一同"
	},
	{
		rank: 7585,
		frequency: 6.31,
		lemma: "奮闘"
	},
	{
		rank: 7586,
		frequency: 6.31,
		lemma: "野村"
	},
	{
		rank: 7587,
		frequency: 6.31,
		lemma: "騎士"
	},
	{
		rank: 7588,
		frequency: 6.31,
		lemma: "順次"
	},
	{
		rank: 7589,
		frequency: 6.3,
		lemma: "ドーム"
	},
	{
		rank: 7590,
		frequency: 6.3,
		lemma: "装着"
	},
	{
		rank: 7591,
		frequency: 6.3,
		lemma: "圧倒"
	},
	{
		rank: 7592,
		frequency: 6.3,
		lemma: "なう"
	},
	{
		rank: 7593,
		frequency: 6.3,
		lemma: "間近"
	},
	{
		rank: 7594,
		frequency: 6.3,
		lemma: "決心"
	},
	{
		rank: 7595,
		frequency: 6.29,
		lemma: "フルーツ"
	},
	{
		rank: 7596,
		frequency: 6.29,
		lemma: "容赦"
	},
	{
		rank: 7597,
		frequency: 6.29,
		lemma: "均等"
	},
	{
		rank: 7598,
		frequency: 6.29,
		lemma: "偏る"
	},
	{
		rank: 7599,
		frequency: 6.29,
		lemma: "切符"
	},
	{
		rank: 7600,
		frequency: 6.29,
		lemma: "キット"
	},
	{
		rank: 7601,
		frequency: 6.29,
		lemma: "乾く"
	},
	{
		rank: 7602,
		frequency: 6.29,
		lemma: "池袋"
	},
	{
		rank: 7603,
		frequency: 6.29,
		lemma: "に関しまして"
	},
	{
		rank: 7604,
		frequency: 6.29,
		lemma: "カスタマイズ"
	},
	{
		rank: 7605,
		frequency: 6.29,
		lemma: "ディスカッション"
	},
	{
		rank: 7606,
		frequency: 6.29,
		lemma: "給"
	},
	{
		rank: 7607,
		frequency: 6.28,
		lemma: "兵隊"
	},
	{
		rank: 7608,
		frequency: 6.28,
		lemma: "よくなる"
	},
	{
		rank: 7609,
		frequency: 6.28,
		lemma: "空中"
	},
	{
		rank: 7610,
		frequency: 6.28,
		lemma: "別々"
	},
	{
		rank: 7611,
		frequency: 6.28,
		lemma: "隼"
	},
	{
		rank: 7612,
		frequency: 6.28,
		lemma: "朝鮮半島"
	},
	{
		rank: 7613,
		frequency: 6.28,
		lemma: "荒れる"
	},
	{
		rank: 7614,
		frequency: 6.27,
		lemma: "押し付ける"
	},
	{
		rank: 7615,
		frequency: 6.27,
		lemma: "差異"
	},
	{
		rank: 7616,
		frequency: 6.27,
		lemma: "タスク"
	},
	{
		rank: 7617,
		frequency: 6.27,
		lemma: "良好"
	},
	{
		rank: 7618,
		frequency: 6.27,
		lemma: "実効"
	},
	{
		rank: 7619,
		frequency: 6.27,
		lemma: "敗"
	},
	{
		rank: 7620,
		frequency: 6.27,
		lemma: "隅"
	},
	{
		rank: 7621,
		frequency: 6.27,
		lemma: "組み立てる"
	},
	{
		rank: 7622,
		frequency: 6.27,
		lemma: "なにしろ"
	},
	{
		rank: 7623,
		frequency: 6.27,
		lemma: "波動"
	},
	{
		rank: 7624,
		frequency: 6.27,
		lemma: "ネイティブ"
	},
	{
		rank: 7625,
		frequency: 6.27,
		lemma: "狩り"
	},
	{
		rank: 7626,
		frequency: 6.26,
		lemma: "創立"
	},
	{
		rank: 7627,
		frequency: 6.26,
		lemma: "連発"
	},
	{
		rank: 7628,
		frequency: 6.26,
		lemma: "年々"
	},
	{
		rank: 7629,
		frequency: 6.26,
		lemma: "装飾"
	},
	{
		rank: 7630,
		frequency: 6.26,
		lemma: "瞑想"
	},
	{
		rank: 7631,
		frequency: 6.26,
		lemma: "関税"
	},
	{
		rank: 7632,
		frequency: 6.26,
		lemma: "夕刊"
	},
	{
		rank: 7633,
		frequency: 6.26,
		lemma: "変数"
	},
	{
		rank: 7634,
		frequency: 6.26,
		lemma: "いまだ"
	},
	{
		rank: 7635,
		frequency: 6.26,
		lemma: "ハル"
	},
	{
		rank: 7636,
		frequency: 6.26,
		lemma: "利子"
	},
	{
		rank: 7637,
		frequency: 6.26,
		lemma: "無数"
	},
	{
		rank: 7638,
		frequency: 6.26,
		lemma: "後方"
	},
	{
		rank: 7639,
		frequency: 6.26,
		lemma: "ちょっぴり"
	},
	{
		rank: 7640,
		frequency: 6.26,
		lemma: "衣"
	},
	{
		rank: 7641,
		frequency: 6.26,
		lemma: "外観"
	},
	{
		rank: 7642,
		frequency: 6.26,
		lemma: "わざと"
	},
	{
		rank: 7643,
		frequency: 6.26,
		lemma: "簿"
	},
	{
		rank: 7644,
		frequency: 6.26,
		lemma: "ジョー"
	},
	{
		rank: 7645,
		frequency: 6.26,
		lemma: "契機"
	},
	{
		rank: 7646,
		frequency: 6.25,
		lemma: "金子"
	},
	{
		rank: 7647,
		frequency: 6.25,
		lemma: "就労"
	},
	{
		rank: 7648,
		frequency: 6.25,
		lemma: "紅"
	},
	{
		rank: 7649,
		frequency: 6.25,
		lemma: "体感"
	},
	{
		rank: 7650,
		frequency: 6.24,
		lemma: "切り"
	},
	{
		rank: 7651,
		frequency: 6.24,
		lemma: "購買"
	},
	{
		rank: 7652,
		frequency: 6.24,
		lemma: "誠に"
	},
	{
		rank: 7653,
		frequency: 6.24,
		lemma: "ポップ"
	},
	{
		rank: 7654,
		frequency: 6.24,
		lemma: "織る"
	},
	{
		rank: 7655,
		frequency: 6.24,
		lemma: "てん"
	},
	{
		rank: 7656,
		frequency: 6.24,
		lemma: "間隔"
	},
	{
		rank: 7657,
		frequency: 6.24,
		lemma: "運輸"
	},
	{
		rank: 7658,
		frequency: 6.24,
		lemma: "感触"
	},
	{
		rank: 7659,
		frequency: 6.23,
		lemma: "フラット"
	},
	{
		rank: 7660,
		frequency: 6.23,
		lemma: "一般人"
	},
	{
		rank: 7661,
		frequency: 6.23,
		lemma: "バンク"
	},
	{
		rank: 7662,
		frequency: 6.23,
		lemma: "有益"
	},
	{
		rank: 7663,
		frequency: 6.23,
		lemma: "お天気"
	},
	{
		rank: 7664,
		frequency: 6.23,
		lemma: "放射線"
	},
	{
		rank: 7665,
		frequency: 6.23,
		lemma: "トリ"
	},
	{
		rank: 7666,
		frequency: 6.22,
		lemma: "てい"
	},
	{
		rank: 7667,
		frequency: 6.22,
		lemma: "巡回"
	},
	{
		rank: 7668,
		frequency: 6.22,
		lemma: "坪"
	},
	{
		rank: 7669,
		frequency: 6.22,
		lemma: "呑む"
	},
	{
		rank: 7670,
		frequency: 6.22,
		lemma: "旨い"
	},
	{
		rank: 7671,
		frequency: 6.22,
		lemma: "トランス"
	},
	{
		rank: 7672,
		frequency: 6.22,
		lemma: "要旨"
	},
	{
		rank: 7673,
		frequency: 6.22,
		lemma: "狼"
	},
	{
		rank: 7674,
		frequency: 6.22,
		lemma: "泥棒"
	},
	{
		rank: 7675,
		frequency: 6.22,
		lemma: "東証"
	},
	{
		rank: 7676,
		frequency: 6.21,
		lemma: "ギャグ"
	},
	{
		rank: 7677,
		frequency: 6.21,
		lemma: "餅"
	},
	{
		rank: 7678,
		frequency: 6.21,
		lemma: "上演"
	},
	{
		rank: 7679,
		frequency: 6.21,
		lemma: "密度"
	},
	{
		rank: 7680,
		frequency: 6.21,
		lemma: "菜"
	},
	{
		rank: 7681,
		frequency: 6.21,
		lemma: "相撲"
	},
	{
		rank: 7682,
		frequency: 6.2,
		lemma: "ませる"
	},
	{
		rank: 7683,
		frequency: 6.2,
		lemma: "ジェット"
	},
	{
		rank: 7684,
		frequency: 6.2,
		lemma: "出掛ける"
	},
	{
		rank: 7685,
		frequency: 6.2,
		lemma: "警視庁"
	},
	{
		rank: 7686,
		frequency: 6.2,
		lemma: "プラグ"
	},
	{
		rank: 7687,
		frequency: 6.2,
		lemma: "ライオン"
	},
	{
		rank: 7688,
		frequency: 6.2,
		lemma: "稼げる"
	},
	{
		rank: 7689,
		frequency: 6.2,
		lemma: "解ける"
	},
	{
		rank: 7690,
		frequency: 6.2,
		lemma: "晴"
	},
	{
		rank: 7691,
		frequency: 6.2,
		lemma: "エア"
	},
	{
		rank: 7692,
		frequency: 6.2,
		lemma: "カーテン"
	},
	{
		rank: 7693,
		frequency: 6.2,
		lemma: "市街地"
	},
	{
		rank: 7694,
		frequency: 6.19,
		lemma: "対外"
	},
	{
		rank: 7695,
		frequency: 6.19,
		lemma: "センサー"
	},
	{
		rank: 7696,
		frequency: 6.19,
		lemma: "がっかり"
	},
	{
		rank: 7697,
		frequency: 6.19,
		lemma: "重複"
	},
	{
		rank: 7698,
		frequency: 6.19,
		lemma: "ｇ"
	},
	{
		rank: 7699,
		frequency: 6.18,
		lemma: "簡潔"
	},
	{
		rank: 7700,
		frequency: 6.18,
		lemma: "甲"
	},
	{
		rank: 7701,
		frequency: 6.18,
		lemma: "梁"
	},
	{
		rank: 7702,
		frequency: 6.18,
		lemma: "憂鬱"
	},
	{
		rank: 7703,
		frequency: 6.18,
		lemma: "プロデュース"
	},
	{
		rank: 7704,
		frequency: 6.18,
		lemma: "お詫び"
	},
	{
		rank: 7705,
		frequency: 6.18,
		lemma: "三重"
	},
	{
		rank: 7706,
		frequency: 6.18,
		lemma: "勢"
	},
	{
		rank: 7707,
		frequency: 6.17,
		lemma: "ウィルス"
	},
	{
		rank: 7708,
		frequency: 6.17,
		lemma: "桃"
	},
	{
		rank: 7709,
		frequency: 6.17,
		lemma: "斜め"
	},
	{
		rank: 7710,
		frequency: 6.17,
		lemma: "ばっかり"
	},
	{
		rank: 7711,
		frequency: 6.17,
		lemma: "裏側"
	},
	{
		rank: 7712,
		frequency: 6.17,
		lemma: "創出"
	},
	{
		rank: 7713,
		frequency: 6.17,
		lemma: "バルセロナ"
	},
	{
		rank: 7714,
		frequency: 6.17,
		lemma: "外人"
	},
	{
		rank: 7715,
		frequency: 6.17,
		lemma: "フロア"
	},
	{
		rank: 7716,
		frequency: 6.17,
		lemma: "大根"
	},
	{
		rank: 7717,
		frequency: 6.16,
		lemma: "贈り物"
	},
	{
		rank: 7718,
		frequency: 6.16,
		lemma: "アスベスト"
	},
	{
		rank: 7719,
		frequency: 6.16,
		lemma: "切手"
	},
	{
		rank: 7720,
		frequency: 6.16,
		lemma: "根底"
	},
	{
		rank: 7721,
		frequency: 6.16,
		lemma: "営む"
	},
	{
		rank: 7722,
		frequency: 6.16,
		lemma: "こい"
	},
	{
		rank: 7723,
		frequency: 6.16,
		lemma: "半数"
	},
	{
		rank: 7724,
		frequency: 6.16,
		lemma: "因果"
	},
	{
		rank: 7725,
		frequency: 6.15,
		lemma: "繊細"
	},
	{
		rank: 7726,
		frequency: 6.15,
		lemma: "おける"
	},
	{
		rank: 7727,
		frequency: 6.15,
		lemma: "バレる"
	},
	{
		rank: 7728,
		frequency: 6.15,
		lemma: "国交"
	},
	{
		rank: 7729,
		frequency: 6.15,
		lemma: "ＮＴＴ"
	},
	{
		rank: 7730,
		frequency: 6.15,
		lemma: "傾く"
	},
	{
		rank: 7731,
		frequency: 6.14,
		lemma: "転じる"
	},
	{
		rank: 7732,
		frequency: 6.14,
		lemma: "フォード"
	},
	{
		rank: 7733,
		frequency: 6.14,
		lemma: "裁量"
	},
	{
		rank: 7734,
		frequency: 6.14,
		lemma: "最先端"
	},
	{
		rank: 7735,
		frequency: 6.14,
		lemma: "モダン"
	},
	{
		rank: 7736,
		frequency: 6.13,
		lemma: "暗殺"
	},
	{
		rank: 7737,
		frequency: 6.13,
		lemma: "出店"
	},
	{
		rank: 7738,
		frequency: 6.13,
		lemma: "タマ"
	},
	{
		rank: 7739,
		frequency: 6.13,
		lemma: "カメラマン"
	},
	{
		rank: 7740,
		frequency: 6.13,
		lemma: "互換"
	},
	{
		rank: 7741,
		frequency: 6.13,
		lemma: "秀"
	},
	{
		rank: 7742,
		frequency: 6.13,
		lemma: "再発"
	},
	{
		rank: 7743,
		frequency: 6.12,
		lemma: "共済"
	},
	{
		rank: 7744,
		frequency: 6.12,
		lemma: "道場"
	},
	{
		rank: 7745,
		frequency: 6.12,
		lemma: "果て"
	},
	{
		rank: 7746,
		frequency: 6.12,
		lemma: "効用"
	},
	{
		rank: 7747,
		frequency: 6.12,
		lemma: "名詞"
	},
	{
		rank: 7748,
		frequency: 6.12,
		lemma: "結末"
	},
	{
		rank: 7749,
		frequency: 6.12,
		lemma: "済"
	},
	{
		rank: 7750,
		frequency: 6.12,
		lemma: "離す"
	},
	{
		rank: 7751,
		frequency: 6.12,
		lemma: "凝る"
	},
	{
		rank: 7752,
		frequency: 6.12,
		lemma: "いのち"
	},
	{
		rank: 7753,
		frequency: 6.11,
		lemma: "モンスター"
	},
	{
		rank: 7754,
		frequency: 6.11,
		lemma: "だます"
	},
	{
		rank: 7755,
		frequency: 6.11,
		lemma: "水木"
	},
	{
		rank: 7756,
		frequency: 6.11,
		lemma: "ツボ"
	},
	{
		rank: 7757,
		frequency: 6.11,
		lemma: "休業"
	},
	{
		rank: 7758,
		frequency: 6.11,
		lemma: "今頃"
	},
	{
		rank: 7759,
		frequency: 6.11,
		lemma: "おとなしい"
	},
	{
		rank: 7760,
		frequency: 6.1,
		lemma: "両立"
	},
	{
		rank: 7761,
		frequency: 6.1,
		lemma: "高原"
	},
	{
		rank: 7762,
		frequency: 6.1,
		lemma: "怠る"
	},
	{
		rank: 7763,
		frequency: 6.1,
		lemma: "テレ"
	},
	{
		rank: 7764,
		frequency: 6.1,
		lemma: "キック"
	},
	{
		rank: 7765,
		frequency: 6.1,
		lemma: "拒絶"
	},
	{
		rank: 7766,
		frequency: 6.1,
		lemma: "隊長"
	},
	{
		rank: 7767,
		frequency: 6.1,
		lemma: "タカ"
	},
	{
		rank: 7768,
		frequency: 6.09,
		lemma: "貯蓄"
	},
	{
		rank: 7769,
		frequency: 6.09,
		lemma: "修了"
	},
	{
		rank: 7770,
		frequency: 6.09,
		lemma: "南米"
	},
	{
		rank: 7771,
		frequency: 6.09,
		lemma: "つまむ"
	},
	{
		rank: 7772,
		frequency: 6.09,
		lemma: "題す"
	},
	{
		rank: 7773,
		frequency: 6.08,
		lemma: "グラム"
	},
	{
		rank: 7774,
		frequency: 6.08,
		lemma: "問合せ"
	},
	{
		rank: 7775,
		frequency: 6.08,
		lemma: "立ち止まる"
	},
	{
		rank: 7776,
		frequency: 6.08,
		lemma: "クッキング"
	},
	{
		rank: 7777,
		frequency: 6.08,
		lemma: "強盗"
	},
	{
		rank: 7778,
		frequency: 6.08,
		lemma: "芸能人"
	},
	{
		rank: 7779,
		frequency: 6.08,
		lemma: "篇"
	},
	{
		rank: 7780,
		frequency: 6.07,
		lemma: "上部"
	},
	{
		rank: 7781,
		frequency: 6.07,
		lemma: "由"
	},
	{
		rank: 7782,
		frequency: 6.07,
		lemma: "オープニング"
	},
	{
		rank: 7783,
		frequency: 6.07,
		lemma: "格安"
	},
	{
		rank: 7784,
		frequency: 6.07,
		lemma: "共生"
	},
	{
		rank: 7785,
		frequency: 6.07,
		lemma: "放出"
	},
	{
		rank: 7786,
		frequency: 6.07,
		lemma: "ゴー"
	},
	{
		rank: 7787,
		frequency: 6.07,
		lemma: "属す"
	},
	{
		rank: 7788,
		frequency: 6.06,
		lemma: "次ぐ"
	},
	{
		rank: 7789,
		frequency: 6.06,
		lemma: "学長"
	},
	{
		rank: 7790,
		frequency: 6.06,
		lemma: "駆ける"
	},
	{
		rank: 7791,
		frequency: 6.06,
		lemma: "挫折"
	},
	{
		rank: 7792,
		frequency: 6.06,
		lemma: "誘拐"
	},
	{
		rank: 7793,
		frequency: 6.05,
		lemma: "ハマる"
	},
	{
		rank: 7794,
		frequency: 6.05,
		lemma: "愚か"
	},
	{
		rank: 7795,
		frequency: 6.05,
		lemma: "河野"
	},
	{
		rank: 7796,
		frequency: 6.05,
		lemma: "富士"
	},
	{
		rank: 7797,
		frequency: 6.05,
		lemma: "ハイテク"
	},
	{
		rank: 7798,
		frequency: 6.05,
		lemma: "通称"
	},
	{
		rank: 7799,
		frequency: 6.05,
		lemma: "母子"
	},
	{
		rank: 7800,
		frequency: 6.05,
		lemma: "みつ"
	},
	{
		rank: 7801,
		frequency: 6.05,
		lemma: "震える"
	},
	{
		rank: 7802,
		frequency: 6.05,
		lemma: "不可"
	},
	{
		rank: 7803,
		frequency: 6.05,
		lemma: "ミックス"
	},
	{
		rank: 7804,
		frequency: 6.05,
		lemma: "バレ"
	},
	{
		rank: 7805,
		frequency: 6.04,
		lemma: "厳格"
	},
	{
		rank: 7806,
		frequency: 6.04,
		lemma: "美味い"
	},
	{
		rank: 7807,
		frequency: 6.04,
		lemma: "出題"
	},
	{
		rank: 7808,
		frequency: 6.04,
		lemma: "むく"
	},
	{
		rank: 7809,
		frequency: 6.04,
		lemma: "まんま"
	},
	{
		rank: 7810,
		frequency: 6.04,
		lemma: "貴"
	},
	{
		rank: 7811,
		frequency: 6.04,
		lemma: "しんどい"
	},
	{
		rank: 7812,
		frequency: 6.04,
		lemma: "トニー"
	},
	{
		rank: 7813,
		frequency: 6.04,
		lemma: "近郊"
	},
	{
		rank: 7814,
		frequency: 6.04,
		lemma: "レギュラー"
	},
	{
		rank: 7815,
		frequency: 6.04,
		lemma: "ホラー"
	},
	{
		rank: 7816,
		frequency: 6.04,
		lemma: "ラム"
	},
	{
		rank: 7817,
		frequency: 6.03,
		lemma: "半島"
	},
	{
		rank: 7818,
		frequency: 6.03,
		lemma: "周期"
	},
	{
		rank: 7819,
		frequency: 6.03,
		lemma: "くだ"
	},
	{
		rank: 7820,
		frequency: 6.03,
		lemma: "つくづく"
	},
	{
		rank: 7821,
		frequency: 6.03,
		lemma: "到底"
	},
	{
		rank: 7822,
		frequency: 6.03,
		lemma: "読み返す"
	},
	{
		rank: 7823,
		frequency: 6.03,
		lemma: "しん"
	},
	{
		rank: 7824,
		frequency: 6.02,
		lemma: "待機"
	},
	{
		rank: 7825,
		frequency: 6.02,
		lemma: "アブ"
	},
	{
		rank: 7826,
		frequency: 6.02,
		lemma: "こめる"
	},
	{
		rank: 7827,
		frequency: 6.02,
		lemma: "群馬"
	},
	{
		rank: 7828,
		frequency: 6.02,
		lemma: "専業"
	},
	{
		rank: 7829,
		frequency: 6.02,
		lemma: "判例"
	},
	{
		rank: 7830,
		frequency: 6.02,
		lemma: "素早い"
	},
	{
		rank: 7831,
		frequency: 6.02,
		lemma: "ふれる"
	},
	{
		rank: 7832,
		frequency: 6.02,
		lemma: "極力"
	},
	{
		rank: 7833,
		frequency: 6.02,
		lemma: "高値"
	},
	{
		rank: 7834,
		frequency: 6.02,
		lemma: "阻害"
	},
	{
		rank: 7835,
		frequency: 6.02,
		lemma: "地名"
	},
	{
		rank: 7836,
		frequency: 6.01,
		lemma: "常時"
	},
	{
		rank: 7837,
		frequency: 6.01,
		lemma: "ワード"
	},
	{
		rank: 7838,
		frequency: 6.01,
		lemma: "屋台"
	},
	{
		rank: 7839,
		frequency: 6.01,
		lemma: "立地"
	},
	{
		rank: 7840,
		frequency: 6.01,
		lemma: "よっぽど"
	},
	{
		rank: 7841,
		frequency: 6.01,
		lemma: "急遽"
	},
	{
		rank: 7842,
		frequency: 6.01,
		lemma: "食生活"
	},
	{
		rank: 7843,
		frequency: 6,
		lemma: "ディレクター"
	},
	{
		rank: 7844,
		frequency: 6,
		lemma: "例年"
	},
	{
		rank: 7845,
		frequency: 6,
		lemma: "濡れる"
	},
	{
		rank: 7846,
		frequency: 6,
		lemma: "おいで"
	},
	{
		rank: 7847,
		frequency: 5.99,
		lemma: "藩"
	},
	{
		rank: 7848,
		frequency: 5.99,
		lemma: "リハビリ"
	},
	{
		rank: 7849,
		frequency: 5.99,
		lemma: "功"
	},
	{
		rank: 7850,
		frequency: 5.99,
		lemma: "持ち帰る"
	},
	{
		rank: 7851,
		frequency: 5.99,
		lemma: "曲げる"
	},
	{
		rank: 7852,
		frequency: 5.99,
		lemma: "いまや"
	},
	{
		rank: 7853,
		frequency: 5.99,
		lemma: "税理士"
	},
	{
		rank: 7854,
		frequency: 5.99,
		lemma: "次男"
	},
	{
		rank: 7855,
		frequency: 5.99,
		lemma: "医学部"
	},
	{
		rank: 7856,
		frequency: 5.99,
		lemma: "舛"
	},
	{
		rank: 7857,
		frequency: 5.98,
		lemma: "算数"
	},
	{
		rank: 7858,
		frequency: 5.98,
		lemma: "是"
	},
	{
		rank: 7859,
		frequency: 5.98,
		lemma: "仕上げ"
	},
	{
		rank: 7860,
		frequency: 5.98,
		lemma: "皇室"
	},
	{
		rank: 7861,
		frequency: 5.98,
		lemma: "おろす"
	},
	{
		rank: 7862,
		frequency: 5.97,
		lemma: "木造"
	},
	{
		rank: 7863,
		frequency: 5.97,
		lemma: "経路"
	},
	{
		rank: 7864,
		frequency: 5.97,
		lemma: "有り難い"
	},
	{
		rank: 7865,
		frequency: 5.97,
		lemma: "踏み込む"
	},
	{
		rank: 7866,
		frequency: 5.97,
		lemma: "風味"
	},
	{
		rank: 7867,
		frequency: 5.97,
		lemma: "液体"
	},
	{
		rank: 7868,
		frequency: 5.97,
		lemma: "短時間"
	},
	{
		rank: 7869,
		frequency: 5.97,
		lemma: "四つ"
	},
	{
		rank: 7870,
		frequency: 5.97,
		lemma: "締め切り"
	},
	{
		rank: 7871,
		frequency: 5.97,
		lemma: "野郎"
	},
	{
		rank: 7872,
		frequency: 5.96,
		lemma: "進路"
	},
	{
		rank: 7873,
		frequency: 5.96,
		lemma: "悪意"
	},
	{
		rank: 7874,
		frequency: 5.96,
		lemma: "動詞"
	},
	{
		rank: 7875,
		frequency: 5.96,
		lemma: "ロケ"
	},
	{
		rank: 7876,
		frequency: 5.96,
		lemma: "交響曲"
	},
	{
		rank: 7877,
		frequency: 5.96,
		lemma: "雷"
	},
	{
		rank: 7878,
		frequency: 5.96,
		lemma: "めくる"
	},
	{
		rank: 7879,
		frequency: 5.96,
		lemma: "安田"
	},
	{
		rank: 7880,
		frequency: 5.96,
		lemma: "はさむ"
	},
	{
		rank: 7881,
		frequency: 5.95,
		lemma: "先祖"
	},
	{
		rank: 7882,
		frequency: 5.95,
		lemma: "昼寝"
	},
	{
		rank: 7883,
		frequency: 5.95,
		lemma: "洗練"
	},
	{
		rank: 7884,
		frequency: 5.95,
		lemma: "ノーベル"
	},
	{
		rank: 7885,
		frequency: 5.95,
		lemma: "あらわれる"
	},
	{
		rank: 7886,
		frequency: 5.95,
		lemma: "折れる"
	},
	{
		rank: 7887,
		frequency: 5.95,
		lemma: "結晶"
	},
	{
		rank: 7888,
		frequency: 5.95,
		lemma: "サンフランシスコ"
	},
	{
		rank: 7889,
		frequency: 5.95,
		lemma: "麻"
	},
	{
		rank: 7890,
		frequency: 5.95,
		lemma: "格闘"
	},
	{
		rank: 7891,
		frequency: 5.95,
		lemma: "加害"
	},
	{
		rank: 7892,
		frequency: 5.95,
		lemma: "頬"
	},
	{
		rank: 7893,
		frequency: 5.95,
		lemma: "法科"
	},
	{
		rank: 7894,
		frequency: 5.95,
		lemma: "配偶"
	},
	{
		rank: 7895,
		frequency: 5.95,
		lemma: "ふり"
	},
	{
		rank: 7896,
		frequency: 5.95,
		lemma: "メス"
	},
	{
		rank: 7897,
		frequency: 5.95,
		lemma: "腓"
	},
	{
		rank: 7898,
		frequency: 5.95,
		lemma: "乙"
	},
	{
		rank: 7899,
		frequency: 5.95,
		lemma: "欠如"
	},
	{
		rank: 7900,
		frequency: 5.94,
		lemma: "フランク"
	},
	{
		rank: 7901,
		frequency: 5.94,
		lemma: "捜索"
	},
	{
		rank: 7902,
		frequency: 5.94,
		lemma: "見なす"
	},
	{
		rank: 7903,
		frequency: 5.94,
		lemma: "間もなく"
	},
	{
		rank: 7904,
		frequency: 5.94,
		lemma: "とらわれる"
	},
	{
		rank: 7905,
		frequency: 5.94,
		lemma: "満員"
	},
	{
		rank: 7906,
		frequency: 5.94,
		lemma: "嫌悪"
	},
	{
		rank: 7907,
		frequency: 5.94,
		lemma: "代理人"
	},
	{
		rank: 7908,
		frequency: 5.94,
		lemma: "ハーブ"
	},
	{
		rank: 7909,
		frequency: 5.93,
		lemma: "肝"
	},
	{
		rank: 7910,
		frequency: 5.93,
		lemma: "有名人"
	},
	{
		rank: 7911,
		frequency: 5.93,
		lemma: "判事"
	},
	{
		rank: 7912,
		frequency: 5.93,
		lemma: "クン"
	},
	{
		rank: 7913,
		frequency: 5.93,
		lemma: "ネギ"
	},
	{
		rank: 7914,
		frequency: 5.93,
		lemma: "文化財"
	},
	{
		rank: 7915,
		frequency: 5.92,
		lemma: "ラベル"
	},
	{
		rank: 7916,
		frequency: 5.92,
		lemma: "東芝"
	},
	{
		rank: 7917,
		frequency: 5.92,
		lemma: "先般"
	},
	{
		rank: 7918,
		frequency: 5.92,
		lemma: "四季"
	},
	{
		rank: 7919,
		frequency: 5.92,
		lemma: "広める"
	},
	{
		rank: 7920,
		frequency: 5.92,
		lemma: "所要"
	},
	{
		rank: 7921,
		frequency: 5.92,
		lemma: "転がる"
	},
	{
		rank: 7922,
		frequency: 5.92,
		lemma: "マザー"
	},
	{
		rank: 7923,
		frequency: 5.92,
		lemma: "猛"
	},
	{
		rank: 7924,
		frequency: 5.91,
		lemma: "目当て"
	},
	{
		rank: 7925,
		frequency: 5.91,
		lemma: "リンゴ"
	},
	{
		rank: 7926,
		frequency: 5.91,
		lemma: "川口"
	},
	{
		rank: 7927,
		frequency: 5.91,
		lemma: "子孫"
	},
	{
		rank: 7928,
		frequency: 5.91,
		lemma: "加減"
	},
	{
		rank: 7929,
		frequency: 5.91,
		lemma: "ストーン"
	},
	{
		rank: 7930,
		frequency: 5.91,
		lemma: "お越し"
	},
	{
		rank: 7931,
		frequency: 5.91,
		lemma: "おなじみ"
	},
	{
		rank: 7932,
		frequency: 5.91,
		lemma: "オーラ"
	},
	{
		rank: 7933,
		frequency: 5.9,
		lemma: "下回る"
	},
	{
		rank: 7934,
		frequency: 5.9,
		lemma: "異様"
	},
	{
		rank: 7935,
		frequency: 5.9,
		lemma: "めちゃくちゃ"
	},
	{
		rank: 7936,
		frequency: 5.9,
		lemma: "さておく"
	},
	{
		rank: 7937,
		frequency: 5.9,
		lemma: "弊害"
	},
	{
		rank: 7938,
		frequency: 5.9,
		lemma: "ぼんやり"
	},
	{
		rank: 7939,
		frequency: 5.9,
		lemma: "酢"
	},
	{
		rank: 7940,
		frequency: 5.9,
		lemma: "はた"
	},
	{
		rank: 7941,
		frequency: 5.9,
		lemma: "所詮"
	},
	{
		rank: 7942,
		frequency: 5.9,
		lemma: "瓶"
	},
	{
		rank: 7943,
		frequency: 5.9,
		lemma: "陰謀"
	},
	{
		rank: 7944,
		frequency: 5.9,
		lemma: "ピックアップ"
	},
	{
		rank: 7945,
		frequency: 5.89,
		lemma: "ニュアンス"
	},
	{
		rank: 7946,
		frequency: 5.89,
		lemma: "増殖"
	},
	{
		rank: 7947,
		frequency: 5.89,
		lemma: "十一月"
	},
	{
		rank: 7948,
		frequency: 5.89,
		lemma: "整合"
	},
	{
		rank: 7949,
		frequency: 5.89,
		lemma: "介す"
	},
	{
		rank: 7950,
		frequency: 5.89,
		lemma: "通学"
	},
	{
		rank: 7951,
		frequency: 5.89,
		lemma: "残酷"
	},
	{
		rank: 7952,
		frequency: 5.89,
		lemma: "啓発"
	},
	{
		rank: 7953,
		frequency: 5.88,
		lemma: "偽"
	},
	{
		rank: 7954,
		frequency: 5.88,
		lemma: "カッ"
	},
	{
		rank: 7955,
		frequency: 5.88,
		lemma: "まり"
	},
	{
		rank: 7956,
		frequency: 5.88,
		lemma: "あたりまえ"
	},
	{
		rank: 7957,
		frequency: 5.88,
		lemma: "カロリー"
	},
	{
		rank: 7958,
		frequency: 5.88,
		lemma: "絶滅"
	},
	{
		rank: 7959,
		frequency: 5.88,
		lemma: "寸前"
	},
	{
		rank: 7960,
		frequency: 5.88,
		lemma: "曲線"
	},
	{
		rank: 7961,
		frequency: 5.88,
		lemma: "郵送"
	},
	{
		rank: 7962,
		frequency: 5.88,
		lemma: "ポーズ"
	},
	{
		rank: 7963,
		frequency: 5.88,
		lemma: "満点"
	},
	{
		rank: 7964,
		frequency: 5.88,
		lemma: "指輪"
	},
	{
		rank: 7965,
		frequency: 5.87,
		lemma: "親族"
	},
	{
		rank: 7966,
		frequency: 5.87,
		lemma: "口頭"
	},
	{
		rank: 7967,
		frequency: 5.87,
		lemma: "マイナー"
	},
	{
		rank: 7968,
		frequency: 5.87,
		lemma: "初代"
	},
	{
		rank: 7969,
		frequency: 5.87,
		lemma: "秘める"
	},
	{
		rank: 7970,
		frequency: 5.87,
		lemma: "だんな"
	},
	{
		rank: 7971,
		frequency: 5.87,
		lemma: "チキン"
	},
	{
		rank: 7972,
		frequency: 5.87,
		lemma: "かし"
	},
	{
		rank: 7973,
		frequency: 5.86,
		lemma: "公判"
	},
	{
		rank: 7974,
		frequency: 5.86,
		lemma: "右翼"
	},
	{
		rank: 7975,
		frequency: 5.86,
		lemma: "対比"
	},
	{
		rank: 7976,
		frequency: 5.86,
		lemma: "ラボ"
	},
	{
		rank: 7977,
		frequency: 5.86,
		lemma: "農産物"
	},
	{
		rank: 7978,
		frequency: 5.86,
		lemma: "できあがる"
	},
	{
		rank: 7979,
		frequency: 5.86,
		lemma: "愛用"
	},
	{
		rank: 7980,
		frequency: 5.86,
		lemma: "水面"
	},
	{
		rank: 7981,
		frequency: 5.86,
		lemma: "宛"
	},
	{
		rank: 7982,
		frequency: 5.86,
		lemma: "ホー"
	},
	{
		rank: 7983,
		frequency: 5.86,
		lemma: "賭ける"
	},
	{
		rank: 7984,
		frequency: 5.85,
		lemma: "ルイス"
	},
	{
		rank: 7985,
		frequency: 5.85,
		lemma: "圧迫"
	},
	{
		rank: 7986,
		frequency: 5.85,
		lemma: "虹"
	},
	{
		rank: 7987,
		frequency: 5.85,
		lemma: "つぐ"
	},
	{
		rank: 7988,
		frequency: 5.85,
		lemma: "ふく"
	},
	{
		rank: 7989,
		frequency: 5.85,
		lemma: "フィルター"
	},
	{
		rank: 7990,
		frequency: 5.85,
		lemma: "稼ぎ"
	},
	{
		rank: 7991,
		frequency: 5.84,
		lemma: "療養"
	},
	{
		rank: 7992,
		frequency: 5.84,
		lemma: "眞"
	},
	{
		rank: 7993,
		frequency: 5.84,
		lemma: "発症"
	},
	{
		rank: 7994,
		frequency: 5.84,
		lemma: "バンコク"
	},
	{
		rank: 7995,
		frequency: 5.84,
		lemma: "風俗"
	},
	{
		rank: 7996,
		frequency: 5.84,
		lemma: "アクセサリー"
	},
	{
		rank: 7997,
		frequency: 5.84,
		lemma: "有意義"
	},
	{
		rank: 7998,
		frequency: 5.84,
		lemma: "稼働"
	},
	{
		rank: 7999,
		frequency: 5.84,
		lemma: "飼育"
	},
	{
		rank: 8000,
		frequency: 5.83,
		lemma: "Ｔシャツ"
	},
	{
		rank: 8001,
		frequency: 5.83,
		lemma: "卸売"
	},
	{
		rank: 8002,
		frequency: 5.83,
		lemma: "一律"
	},
	{
		rank: 8003,
		frequency: 5.83,
		lemma: "カズ"
	},
	{
		rank: 8004,
		frequency: 5.83,
		lemma: "葛藤"
	},
	{
		rank: 8005,
		frequency: 5.82,
		lemma: "引きずる"
	},
	{
		rank: 8006,
		frequency: 5.82,
		lemma: "石田"
	},
	{
		rank: 8007,
		frequency: 5.82,
		lemma: "集落"
	},
	{
		rank: 8008,
		frequency: 5.82,
		lemma: "ニッポン放送"
	},
	{
		rank: 8009,
		frequency: 5.81,
		lemma: "探索"
	},
	{
		rank: 8010,
		frequency: 5.81,
		lemma: "極東"
	},
	{
		rank: 8011,
		frequency: 5.81,
		lemma: "活力"
	},
	{
		rank: 8012,
		frequency: 5.81,
		lemma: "舞"
	},
	{
		rank: 8013,
		frequency: 5.81,
		lemma: "実例"
	},
	{
		rank: 8014,
		frequency: 5.81,
		lemma: "じつは"
	},
	{
		rank: 8015,
		frequency: 5.8,
		lemma: "羨ましい"
	},
	{
		rank: 8016,
		frequency: 5.8,
		lemma: "わたくし"
	},
	{
		rank: 8017,
		frequency: 5.8,
		lemma: "戦車"
	},
	{
		rank: 8018,
		frequency: 5.8,
		lemma: "捕まえる"
	},
	{
		rank: 8019,
		frequency: 5.8,
		lemma: "くま"
	},
	{
		rank: 8020,
		frequency: 5.8,
		lemma: "長谷川"
	},
	{
		rank: 8021,
		frequency: 5.8,
		lemma: "自称"
	},
	{
		rank: 8022,
		frequency: 5.8,
		lemma: "口調"
	},
	{
		rank: 8023,
		frequency: 5.8,
		lemma: "フリ"
	},
	{
		rank: 8024,
		frequency: 5.8,
		lemma: "端的"
	},
	{
		rank: 8025,
		frequency: 5.8,
		lemma: "膜"
	},
	{
		rank: 8026,
		frequency: 5.8,
		lemma: "カリキュラム"
	},
	{
		rank: 8027,
		frequency: 5.8,
		lemma: "もとづく"
	},
	{
		rank: 8028,
		frequency: 5.8,
		lemma: "修士"
	},
	{
		rank: 8029,
		frequency: 5.8,
		lemma: "宝石"
	},
	{
		rank: 8030,
		frequency: 5.8,
		lemma: "警察庁"
	},
	{
		rank: 8031,
		frequency: 5.79,
		lemma: "スミス"
	},
	{
		rank: 8032,
		frequency: 5.79,
		lemma: "根源"
	},
	{
		rank: 8033,
		frequency: 5.79,
		lemma: "不倫"
	},
	{
		rank: 8034,
		frequency: 5.79,
		lemma: "低迷"
	},
	{
		rank: 8035,
		frequency: 5.79,
		lemma: "停滞"
	},
	{
		rank: 8036,
		frequency: 5.79,
		lemma: "アイデンティティ"
	},
	{
		rank: 8037,
		frequency: 5.79,
		lemma: "正に"
	},
	{
		rank: 8038,
		frequency: 5.79,
		lemma: "落語"
	},
	{
		rank: 8039,
		frequency: 5.79,
		lemma: "苦悩"
	},
	{
		rank: 8040,
		frequency: 5.78,
		lemma: "益"
	},
	{
		rank: 8041,
		frequency: 5.78,
		lemma: "稀"
	},
	{
		rank: 8042,
		frequency: 5.78,
		lemma: "フライト"
	},
	{
		rank: 8043,
		frequency: 5.78,
		lemma: "メン"
	},
	{
		rank: 8044,
		frequency: 5.78,
		lemma: "コイン"
	},
	{
		rank: 8045,
		frequency: 5.78,
		lemma: "ホン"
	},
	{
		rank: 8046,
		frequency: 5.78,
		lemma: "ノイズ"
	},
	{
		rank: 8047,
		frequency: 5.78,
		lemma: "プロモーション"
	},
	{
		rank: 8048,
		frequency: 5.78,
		lemma: "教団"
	},
	{
		rank: 8049,
		frequency: 5.78,
		lemma: "正社員"
	},
	{
		rank: 8050,
		frequency: 5.78,
		lemma: "鮮明"
	},
	{
		rank: 8051,
		frequency: 5.78,
		lemma: "すぐれる"
	},
	{
		rank: 8052,
		frequency: 5.78,
		lemma: "御存じ"
	},
	{
		rank: 8053,
		frequency: 5.78,
		lemma: "悪質"
	},
	{
		rank: 8054,
		frequency: 5.78,
		lemma: "ジャーナリズム"
	},
	{
		rank: 8055,
		frequency: 5.77,
		lemma: "イマイチ"
	},
	{
		rank: 8056,
		frequency: 5.77,
		lemma: "圓"
	},
	{
		rank: 8057,
		frequency: 5.77,
		lemma: "ジーンズ"
	},
	{
		rank: 8058,
		frequency: 5.77,
		lemma: "プロレス"
	},
	{
		rank: 8059,
		frequency: 5.77,
		lemma: "アナウンス"
	},
	{
		rank: 8060,
		frequency: 5.77,
		lemma: "市川"
	},
	{
		rank: 8061,
		frequency: 5.77,
		lemma: "ほめる"
	},
	{
		rank: 8062,
		frequency: 5.77,
		lemma: "ストア"
	},
	{
		rank: 8063,
		frequency: 5.77,
		lemma: "ゲル"
	},
	{
		rank: 8064,
		frequency: 5.77,
		lemma: "５つ"
	},
	{
		rank: 8065,
		frequency: 5.77,
		lemma: "はなれる"
	},
	{
		rank: 8066,
		frequency: 5.76,
		lemma: "ノルウェー"
	},
	{
		rank: 8067,
		frequency: 5.76,
		lemma: "ヤン"
	},
	{
		rank: 8068,
		frequency: 5.76,
		lemma: "同感"
	},
	{
		rank: 8069,
		frequency: 5.76,
		lemma: "エリ"
	},
	{
		rank: 8070,
		frequency: 5.76,
		lemma: "勧誘"
	},
	{
		rank: 8071,
		frequency: 5.76,
		lemma: "なのに"
	},
	{
		rank: 8072,
		frequency: 5.76,
		lemma: "終戦"
	},
	{
		rank: 8073,
		frequency: 5.76,
		lemma: "コンビ"
	},
	{
		rank: 8074,
		frequency: 5.76,
		lemma: "っぷり"
	},
	{
		rank: 8075,
		frequency: 5.75,
		lemma: "対す"
	},
	{
		rank: 8076,
		frequency: 5.75,
		lemma: "ネオ"
	},
	{
		rank: 8077,
		frequency: 5.75,
		lemma: "おやじ"
	},
	{
		rank: 8078,
		frequency: 5.75,
		lemma: "劣化"
	},
	{
		rank: 8079,
		frequency: 5.74,
		lemma: "滋賀"
	},
	{
		rank: 8080,
		frequency: 5.74,
		lemma: "源泉"
	},
	{
		rank: 8081,
		frequency: 5.74,
		lemma: "負"
	},
	{
		rank: 8082,
		frequency: 5.74,
		lemma: "真っ赤"
	},
	{
		rank: 8083,
		frequency: 5.74,
		lemma: "たて"
	},
	{
		rank: 8084,
		frequency: 5.74,
		lemma: "勤労"
	},
	{
		rank: 8085,
		frequency: 5.74,
		lemma: "義務教育"
	},
	{
		rank: 8086,
		frequency: 5.73,
		lemma: "にまつわる"
	},
	{
		rank: 8087,
		frequency: 5.73,
		lemma: "炭"
	},
	{
		rank: 8088,
		frequency: 5.73,
		lemma: "名義"
	},
	{
		rank: 8089,
		frequency: 5.73,
		lemma: "敢えて"
	},
	{
		rank: 8090,
		frequency: 5.73,
		lemma: "取り巻く"
	},
	{
		rank: 8091,
		frequency: 5.72,
		lemma: "人質"
	},
	{
		rank: 8092,
		frequency: 5.72,
		lemma: "はっ"
	},
	{
		rank: 8093,
		frequency: 5.72,
		lemma: "まもなく"
	},
	{
		rank: 8094,
		frequency: 5.72,
		lemma: "巣"
	},
	{
		rank: 8095,
		frequency: 5.72,
		lemma: "度合い"
	},
	{
		rank: 8096,
		frequency: 5.72,
		lemma: "増強"
	},
	{
		rank: 8097,
		frequency: 5.72,
		lemma: "若"
	},
	{
		rank: 8098,
		frequency: 5.72,
		lemma: "祝福"
	},
	{
		rank: 8099,
		frequency: 5.71,
		lemma: "アマ"
	},
	{
		rank: 8100,
		frequency: 5.71,
		lemma: "斉藤"
	},
	{
		rank: 8101,
		frequency: 5.71,
		lemma: "莫大"
	},
	{
		rank: 8102,
		frequency: 5.71,
		lemma: "梅田"
	},
	{
		rank: 8103,
		frequency: 5.71,
		lemma: "音色"
	},
	{
		rank: 8104,
		frequency: 5.71,
		lemma: "戦時"
	},
	{
		rank: 8105,
		frequency: 5.71,
		lemma: "ちっとも"
	},
	{
		rank: 8106,
		frequency: 5.71,
		lemma: "創刊"
	},
	{
		rank: 8107,
		frequency: 5.71,
		lemma: "ちん"
	},
	{
		rank: 8108,
		frequency: 5.71,
		lemma: "杉"
	},
	{
		rank: 8109,
		frequency: 5.71,
		lemma: "チェコ"
	},
	{
		rank: 8110,
		frequency: 5.71,
		lemma: "明かす"
	},
	{
		rank: 8111,
		frequency: 5.71,
		lemma: "危うい"
	},
	{
		rank: 8112,
		frequency: 5.71,
		lemma: "後藤"
	},
	{
		rank: 8113,
		frequency: 5.71,
		lemma: "ドリンク"
	},
	{
		rank: 8114,
		frequency: 5.71,
		lemma: "売春"
	},
	{
		rank: 8115,
		frequency: 5.71,
		lemma: "書士"
	},
	{
		rank: 8116,
		frequency: 5.71,
		lemma: "ディズニー"
	},
	{
		rank: 8117,
		frequency: 5.71,
		lemma: "通り過ぎる"
	},
	{
		rank: 8118,
		frequency: 5.71,
		lemma: "太鼓"
	},
	{
		rank: 8119,
		frequency: 5.7,
		lemma: "ヴァイオリン"
	},
	{
		rank: 8120,
		frequency: 5.7,
		lemma: "旅館"
	},
	{
		rank: 8121,
		frequency: 5.7,
		lemma: "岡"
	},
	{
		rank: 8122,
		frequency: 5.7,
		lemma: "併せる"
	},
	{
		rank: 8123,
		frequency: 5.69,
		lemma: "パブリック"
	},
	{
		rank: 8124,
		frequency: 5.69,
		lemma: "革"
	},
	{
		rank: 8125,
		frequency: 5.69,
		lemma: "ブリッジ"
	},
	{
		rank: 8126,
		frequency: 5.69,
		lemma: "境"
	},
	{
		rank: 8127,
		frequency: 5.69,
		lemma: "討議"
	},
	{
		rank: 8128,
		frequency: 5.69,
		lemma: "湿度"
	},
	{
		rank: 8129,
		frequency: 5.69,
		lemma: "ゆき"
	},
	{
		rank: 8130,
		frequency: 5.69,
		lemma: "情緒"
	},
	{
		rank: 8131,
		frequency: 5.69,
		lemma: "カリスマ"
	},
	{
		rank: 8132,
		frequency: 5.69,
		lemma: "貯める"
	},
	{
		rank: 8133,
		frequency: 5.69,
		lemma: "熱意"
	},
	{
		rank: 8134,
		frequency: 5.69,
		lemma: "必見"
	},
	{
		rank: 8135,
		frequency: 5.69,
		lemma: "飲料"
	},
	{
		rank: 8136,
		frequency: 5.69,
		lemma: "屋敷"
	},
	{
		rank: 8137,
		frequency: 5.68,
		lemma: "飼い主"
	},
	{
		rank: 8138,
		frequency: 5.68,
		lemma: "ダンナ"
	},
	{
		rank: 8139,
		frequency: 5.68,
		lemma: "込み"
	},
	{
		rank: 8140,
		frequency: 5.68,
		lemma: "明け"
	},
	{
		rank: 8141,
		frequency: 5.68,
		lemma: "振り回す"
	},
	{
		rank: 8142,
		frequency: 5.68,
		lemma: "弱点"
	},
	{
		rank: 8143,
		frequency: 5.68,
		lemma: "問い合わせる"
	},
	{
		rank: 8144,
		frequency: 5.68,
		lemma: "ドラッグ"
	},
	{
		rank: 8145,
		frequency: 5.68,
		lemma: "さき"
	},
	{
		rank: 8146,
		frequency: 5.68,
		lemma: "敗れる"
	},
	{
		rank: 8147,
		frequency: 5.68,
		lemma: "共演"
	},
	{
		rank: 8148,
		frequency: 5.67,
		lemma: "正日"
	},
	{
		rank: 8149,
		frequency: 5.67,
		lemma: "一族"
	},
	{
		rank: 8150,
		frequency: 5.67,
		lemma: "替え"
	},
	{
		rank: 8151,
		frequency: 5.67,
		lemma: "漢"
	},
	{
		rank: 8152,
		frequency: 5.67,
		lemma: "手入れ"
	},
	{
		rank: 8153,
		frequency: 5.67,
		lemma: "異性"
	},
	{
		rank: 8154,
		frequency: 5.67,
		lemma: "嫉妬"
	},
	{
		rank: 8155,
		frequency: 5.67,
		lemma: "機材"
	},
	{
		rank: 8156,
		frequency: 5.67,
		lemma: "なら"
	},
	{
		rank: 8157,
		frequency: 5.67,
		lemma: "西側"
	},
	{
		rank: 8158,
		frequency: 5.67,
		lemma: "平行"
	},
	{
		rank: 8159,
		frequency: 5.67,
		lemma: "だからといって"
	},
	{
		rank: 8160,
		frequency: 5.67,
		lemma: "街道"
	},
	{
		rank: 8161,
		frequency: 5.67,
		lemma: "摂る"
	},
	{
		rank: 8162,
		frequency: 5.67,
		lemma: "大震災"
	},
	{
		rank: 8163,
		frequency: 5.67,
		lemma: "幹"
	},
	{
		rank: 8164,
		frequency: 5.67,
		lemma: "万全"
	},
	{
		rank: 8165,
		frequency: 5.67,
		lemma: "チャンピオン"
	},
	{
		rank: 8166,
		frequency: 5.67,
		lemma: "毎朝"
	},
	{
		rank: 8167,
		frequency: 5.66,
		lemma: "かす"
	},
	{
		rank: 8168,
		frequency: 5.66,
		lemma: "頭脳"
	},
	{
		rank: 8169,
		frequency: 5.66,
		lemma: "対等"
	},
	{
		rank: 8170,
		frequency: 5.66,
		lemma: "根性"
	},
	{
		rank: 8171,
		frequency: 5.66,
		lemma: "ハリー"
	},
	{
		rank: 8172,
		frequency: 5.66,
		lemma: "エース"
	},
	{
		rank: 8173,
		frequency: 5.66,
		lemma: "おこる"
	},
	{
		rank: 8174,
		frequency: 5.66,
		lemma: "一目"
	},
	{
		rank: 8175,
		frequency: 5.65,
		lemma: "動ける"
	},
	{
		rank: 8176,
		frequency: 5.65,
		lemma: "推理"
	},
	{
		rank: 8177,
		frequency: 5.65,
		lemma: "配給"
	},
	{
		rank: 8178,
		frequency: 5.65,
		lemma: "ユーモア"
	},
	{
		rank: 8179,
		frequency: 5.65,
		lemma: "調停"
	},
	{
		rank: 8180,
		frequency: 5.65,
		lemma: "イデオロギー"
	},
	{
		rank: 8181,
		frequency: 5.65,
		lemma: "早起き"
	},
	{
		rank: 8182,
		frequency: 5.65,
		lemma: "親指"
	},
	{
		rank: 8183,
		frequency: 5.65,
		lemma: "活字"
	},
	{
		rank: 8184,
		frequency: 5.65,
		lemma: "時折"
	},
	{
		rank: 8185,
		frequency: 5.65,
		lemma: "なおかつ"
	},
	{
		rank: 8186,
		frequency: 5.65,
		lemma: "今井"
	},
	{
		rank: 8187,
		frequency: 5.65,
		lemma: "割り当てる"
	},
	{
		rank: 8188,
		frequency: 5.64,
		lemma: "県警"
	},
	{
		rank: 8189,
		frequency: 5.64,
		lemma: "専念"
	},
	{
		rank: 8190,
		frequency: 5.64,
		lemma: "きみ"
	},
	{
		rank: 8191,
		frequency: 5.64,
		lemma: "空き"
	},
	{
		rank: 8192,
		frequency: 5.64,
		lemma: "河川"
	},
	{
		rank: 8193,
		frequency: 5.64,
		lemma: "パンチ"
	},
	{
		rank: 8194,
		frequency: 5.64,
		lemma: "慰安"
	},
	{
		rank: 8195,
		frequency: 5.64,
		lemma: "通達"
	},
	{
		rank: 8196,
		frequency: 5.63,
		lemma: "売り"
	},
	{
		rank: 8197,
		frequency: 5.63,
		lemma: "捕まる"
	},
	{
		rank: 8198,
		frequency: 5.63,
		lemma: "所持"
	},
	{
		rank: 8199,
		frequency: 5.63,
		lemma: "敗訴"
	},
	{
		rank: 8200,
		frequency: 5.63,
		lemma: "ヒル"
	},
	{
		rank: 8201,
		frequency: 5.63,
		lemma: "すげる"
	},
	{
		rank: 8202,
		frequency: 5.63,
		lemma: "試写"
	},
	{
		rank: 8203,
		frequency: 5.63,
		lemma: "並行"
	},
	{
		rank: 8204,
		frequency: 5.63,
		lemma: "とたん"
	},
	{
		rank: 8205,
		frequency: 5.63,
		lemma: "先制"
	},
	{
		rank: 8206,
		frequency: 5.63,
		lemma: "可決"
	},
	{
		rank: 8207,
		frequency: 5.63,
		lemma: "差し出す"
	},
	{
		rank: 8208,
		frequency: 5.63,
		lemma: "北米"
	},
	{
		rank: 8209,
		frequency: 5.63,
		lemma: "ユニ"
	},
	{
		rank: 8210,
		frequency: 5.62,
		lemma: "一口"
	},
	{
		rank: 8211,
		frequency: 5.62,
		lemma: "エンディング"
	},
	{
		rank: 8212,
		frequency: 5.62,
		lemma: "長所"
	},
	{
		rank: 8213,
		frequency: 5.62,
		lemma: "取扱い"
	},
	{
		rank: 8214,
		frequency: 5.62,
		lemma: "全集"
	},
	{
		rank: 8215,
		frequency: 5.62,
		lemma: "母さん"
	},
	{
		rank: 8216,
		frequency: 5.62,
		lemma: "出番"
	},
	{
		rank: 8217,
		frequency: 5.62,
		lemma: "負債"
	},
	{
		rank: 8218,
		frequency: 5.62,
		lemma: "楽譜"
	},
	{
		rank: 8219,
		frequency: 5.62,
		lemma: "クリップ"
	},
	{
		rank: 8220,
		frequency: 5.61,
		lemma: "貨物"
	},
	{
		rank: 8221,
		frequency: 5.61,
		lemma: "紳士"
	},
	{
		rank: 8222,
		frequency: 5.61,
		lemma: "いやぁ"
	},
	{
		rank: 8223,
		frequency: 5.61,
		lemma: "それなのに"
	},
	{
		rank: 8224,
		frequency: 5.61,
		lemma: "久"
	},
	{
		rank: 8225,
		frequency: 5.61,
		lemma: "もっぱら"
	},
	{
		rank: 8226,
		frequency: 5.61,
		lemma: "風土"
	},
	{
		rank: 8227,
		frequency: 5.61,
		lemma: "庭園"
	},
	{
		rank: 8228,
		frequency: 5.61,
		lemma: "バラバラ"
	},
	{
		rank: 8229,
		frequency: 5.6,
		lemma: "フィードバック"
	},
	{
		rank: 8230,
		frequency: 5.6,
		lemma: "すい"
	},
	{
		rank: 8231,
		frequency: 5.6,
		lemma: "安藤"
	},
	{
		rank: 8232,
		frequency: 5.6,
		lemma: "民法"
	},
	{
		rank: 8233,
		frequency: 5.6,
		lemma: "弓"
	},
	{
		rank: 8234,
		frequency: 5.6,
		lemma: "遂に"
	},
	{
		rank: 8235,
		frequency: 5.6,
		lemma: "いかん"
	},
	{
		rank: 8236,
		frequency: 5.6,
		lemma: "フー"
	},
	{
		rank: 8237,
		frequency: 5.6,
		lemma: "風潮"
	},
	{
		rank: 8238,
		frequency: 5.59,
		lemma: "ブラウン"
	},
	{
		rank: 8239,
		frequency: 5.59,
		lemma: "変形"
	},
	{
		rank: 8240,
		frequency: 5.59,
		lemma: "しょっちゅう"
	},
	{
		rank: 8241,
		frequency: 5.59,
		lemma: "富士山"
	},
	{
		rank: 8242,
		frequency: 5.59,
		lemma: "小学"
	},
	{
		rank: 8243,
		frequency: 5.59,
		lemma: "思惑"
	},
	{
		rank: 8244,
		frequency: 5.59,
		lemma: "日本海"
	},
	{
		rank: 8245,
		frequency: 5.59,
		lemma: "産経新聞"
	},
	{
		rank: 8246,
		frequency: 5.58,
		lemma: "参"
	},
	{
		rank: 8247,
		frequency: 5.58,
		lemma: "花見"
	},
	{
		rank: 8248,
		frequency: 5.58,
		lemma: "大賞"
	},
	{
		rank: 8249,
		frequency: 5.58,
		lemma: "麻痺"
	},
	{
		rank: 8250,
		frequency: 5.58,
		lemma: "教官"
	},
	{
		rank: 8251,
		frequency: 5.58,
		lemma: "舞う"
	},
	{
		rank: 8252,
		frequency: 5.58,
		lemma: "暦"
	},
	{
		rank: 8253,
		frequency: 5.58,
		lemma: "溶ける"
	},
	{
		rank: 8254,
		frequency: 5.58,
		lemma: "まつり"
	},
	{
		rank: 8255,
		frequency: 5.58,
		lemma: "いっそう"
	},
	{
		rank: 8256,
		frequency: 5.58,
		lemma: "効力"
	},
	{
		rank: 8257,
		frequency: 5.57,
		lemma: "学院"
	},
	{
		rank: 8258,
		frequency: 5.57,
		lemma: "スリー"
	},
	{
		rank: 8259,
		frequency: 5.57,
		lemma: "グラフィック"
	},
	{
		rank: 8260,
		frequency: 5.57,
		lemma: "藤井"
	},
	{
		rank: 8261,
		frequency: 5.57,
		lemma: "錯覚"
	},
	{
		rank: 8262,
		frequency: 5.57,
		lemma: "当分"
	},
	{
		rank: 8263,
		frequency: 5.56,
		lemma: "潜水艦"
	},
	{
		rank: 8264,
		frequency: 5.56,
		lemma: "おおむね"
	},
	{
		rank: 8265,
		frequency: 5.56,
		lemma: "愚痴"
	},
	{
		rank: 8266,
		frequency: 5.56,
		lemma: "煽る"
	},
	{
		rank: 8267,
		frequency: 5.56,
		lemma: "清掃"
	},
	{
		rank: 8268,
		frequency: 5.56,
		lemma: "字幕"
	},
	{
		rank: 8269,
		frequency: 5.56,
		lemma: "乗車"
	},
	{
		rank: 8270,
		frequency: 5.56,
		lemma: "次郎"
	},
	{
		rank: 8271,
		frequency: 5.56,
		lemma: "募る"
	},
	{
		rank: 8272,
		frequency: 5.56,
		lemma: "如何に"
	},
	{
		rank: 8273,
		frequency: 5.55,
		lemma: "混合"
	},
	{
		rank: 8274,
		frequency: 5.55,
		lemma: "愛媛"
	},
	{
		rank: 8275,
		frequency: 5.55,
		lemma: "何者"
	},
	{
		rank: 8276,
		frequency: 5.55,
		lemma: "機内"
	},
	{
		rank: 8277,
		frequency: 5.55,
		lemma: "試行錯誤"
	},
	{
		rank: 8278,
		frequency: 5.55,
		lemma: "刑法"
	},
	{
		rank: 8279,
		frequency: 5.55,
		lemma: "小物"
	},
	{
		rank: 8280,
		frequency: 5.55,
		lemma: "ばん"
	},
	{
		rank: 8281,
		frequency: 5.54,
		lemma: "楽観"
	},
	{
		rank: 8282,
		frequency: 5.54,
		lemma: "ヒルズ"
	},
	{
		rank: 8283,
		frequency: 5.54,
		lemma: "死後"
	},
	{
		rank: 8284,
		frequency: 5.54,
		lemma: "人体"
	},
	{
		rank: 8285,
		frequency: 5.54,
		lemma: "試算"
	},
	{
		rank: 8286,
		frequency: 5.54,
		lemma: "衆院"
	},
	{
		rank: 8287,
		frequency: 5.54,
		lemma: "満喫"
	},
	{
		rank: 8288,
		frequency: 5.54,
		lemma: "ガキ"
	},
	{
		rank: 8289,
		frequency: 5.54,
		lemma: "秘訣"
	},
	{
		rank: 8290,
		frequency: 5.54,
		lemma: "パキスタン"
	},
	{
		rank: 8291,
		frequency: 5.54,
		lemma: "酸化"
	},
	{
		rank: 8292,
		frequency: 5.53,
		lemma: "お寺"
	},
	{
		rank: 8293,
		frequency: 5.53,
		lemma: "庵"
	},
	{
		rank: 8294,
		frequency: 5.53,
		lemma: "救い"
	},
	{
		rank: 8295,
		frequency: 5.53,
		lemma: "苗"
	},
	{
		rank: 8296,
		frequency: 5.53,
		lemma: "合わせ"
	},
	{
		rank: 8297,
		frequency: 5.53,
		lemma: "前年度"
	},
	{
		rank: 8298,
		frequency: 5.53,
		lemma: "溝"
	},
	{
		rank: 8299,
		frequency: 5.53,
		lemma: "ギャンブル"
	},
	{
		rank: 8300,
		frequency: 5.53,
		lemma: "金曜"
	},
	{
		rank: 8301,
		frequency: 5.52,
		lemma: "小倉"
	},
	{
		rank: 8302,
		frequency: 5.52,
		lemma: "高裁"
	},
	{
		rank: 8303,
		frequency: 5.52,
		lemma: "屋上"
	},
	{
		rank: 8304,
		frequency: 5.52,
		lemma: "お断り"
	},
	{
		rank: 8305,
		frequency: 5.52,
		lemma: "実物"
	},
	{
		rank: 8306,
		frequency: 5.52,
		lemma: "集積"
	},
	{
		rank: 8307,
		frequency: 5.52,
		lemma: "態勢"
	},
	{
		rank: 8308,
		frequency: 5.52,
		lemma: "超過"
	},
	{
		rank: 8309,
		frequency: 5.52,
		lemma: "タブ"
	},
	{
		rank: 8310,
		frequency: 5.52,
		lemma: "おくれる"
	},
	{
		rank: 8311,
		frequency: 5.52,
		lemma: "久保"
	},
	{
		rank: 8312,
		frequency: 5.52,
		lemma: "頂点"
	},
	{
		rank: 8313,
		frequency: 5.52,
		lemma: "白書"
	},
	{
		rank: 8314,
		frequency: 5.52,
		lemma: "前面"
	},
	{
		rank: 8315,
		frequency: 5.52,
		lemma: "驚異"
	},
	{
		rank: 8316,
		frequency: 5.51,
		lemma: "問いかける"
	},
	{
		rank: 8317,
		frequency: 5.51,
		lemma: "絶えず"
	},
	{
		rank: 8318,
		frequency: 5.51,
		lemma: "政令"
	},
	{
		rank: 8319,
		frequency: 5.51,
		lemma: "シェフ"
	},
	{
		rank: 8320,
		frequency: 5.51,
		lemma: "外科"
	},
	{
		rank: 8321,
		frequency: 5.51,
		lemma: "未熟"
	},
	{
		rank: 8322,
		frequency: 5.51,
		lemma: "文芸"
	},
	{
		rank: 8323,
		frequency: 5.5,
		lemma: "本店"
	},
	{
		rank: 8324,
		frequency: 5.5,
		lemma: "新品"
	},
	{
		rank: 8325,
		frequency: 5.5,
		lemma: "読み方"
	},
	{
		rank: 8326,
		frequency: 5.5,
		lemma: "ランダム"
	},
	{
		rank: 8327,
		frequency: 5.5,
		lemma: "陽気"
	},
	{
		rank: 8328,
		frequency: 5.5,
		lemma: "ヨガ"
	},
	{
		rank: 8329,
		frequency: 5.5,
		lemma: "皆さま"
	},
	{
		rank: 8330,
		frequency: 5.5,
		lemma: "浮上"
	},
	{
		rank: 8331,
		frequency: 5.5,
		lemma: "互い"
	},
	{
		rank: 8332,
		frequency: 5.5,
		lemma: "利便"
	},
	{
		rank: 8333,
		frequency: 5.5,
		lemma: "換算"
	},
	{
		rank: 8334,
		frequency: 5.5,
		lemma: "平安"
	},
	{
		rank: 8335,
		frequency: 5.5,
		lemma: "おじいちゃん"
	},
	{
		rank: 8336,
		frequency: 5.5,
		lemma: "常任"
	},
	{
		rank: 8337,
		frequency: 5.49,
		lemma: "遡る"
	},
	{
		rank: 8338,
		frequency: 5.49,
		lemma: "につれ"
	},
	{
		rank: 8339,
		frequency: 5.49,
		lemma: "死ねる"
	},
	{
		rank: 8340,
		frequency: 5.49,
		lemma: "魔術"
	},
	{
		rank: 8341,
		frequency: 5.49,
		lemma: "補佐"
	},
	{
		rank: 8342,
		frequency: 5.49,
		lemma: "カウンセラー"
	},
	{
		rank: 8343,
		frequency: 5.49,
		lemma: "動き出す"
	},
	{
		rank: 8344,
		frequency: 5.49,
		lemma: "ズボン"
	},
	{
		rank: 8345,
		frequency: 5.49,
		lemma: "排水"
	},
	{
		rank: 8346,
		frequency: 5.49,
		lemma: "サクラ"
	},
	{
		rank: 8347,
		frequency: 5.48,
		lemma: "多額"
	},
	{
		rank: 8348,
		frequency: 5.48,
		lemma: "湾"
	},
	{
		rank: 8349,
		frequency: 5.48,
		lemma: "続々"
	},
	{
		rank: 8350,
		frequency: 5.48,
		lemma: "復元"
	},
	{
		rank: 8351,
		frequency: 5.48,
		lemma: "悪影響"
	},
	{
		rank: 8352,
		frequency: 5.48,
		lemma: "ユース"
	},
	{
		rank: 8353,
		frequency: 5.48,
		lemma: "機体"
	},
	{
		rank: 8354,
		frequency: 5.48,
		lemma: "市立"
	},
	{
		rank: 8355,
		frequency: 5.48,
		lemma: "キレ"
	},
	{
		rank: 8356,
		frequency: 5.47,
		lemma: "直径"
	},
	{
		rank: 8357,
		frequency: 5.47,
		lemma: "マスメディア"
	},
	{
		rank: 8358,
		frequency: 5.47,
		lemma: "待遇"
	},
	{
		rank: 8359,
		frequency: 5.47,
		lemma: "ラス"
	},
	{
		rank: 8360,
		frequency: 5.47,
		lemma: "喫茶"
	},
	{
		rank: 8361,
		frequency: 5.47,
		lemma: "直線"
	},
	{
		rank: 8362,
		frequency: 5.47,
		lemma: "於く"
	},
	{
		rank: 8363,
		frequency: 5.47,
		lemma: "栄光"
	},
	{
		rank: 8364,
		frequency: 5.47,
		lemma: "公募"
	},
	{
		rank: 8365,
		frequency: 5.46,
		lemma: "何でも"
	},
	{
		rank: 8366,
		frequency: 5.46,
		lemma: "音楽家"
	},
	{
		rank: 8367,
		frequency: 5.46,
		lemma: "何気ない"
	},
	{
		rank: 8368,
		frequency: 5.46,
		lemma: "泥"
	},
	{
		rank: 8369,
		frequency: 5.46,
		lemma: "さよう"
	},
	{
		rank: 8370,
		frequency: 5.46,
		lemma: "シャッター"
	},
	{
		rank: 8371,
		frequency: 5.46,
		lemma: "ヨルダン"
	},
	{
		rank: 8372,
		frequency: 5.46,
		lemma: "内装"
	},
	{
		rank: 8373,
		frequency: 5.46,
		lemma: "パブ"
	},
	{
		rank: 8374,
		frequency: 5.46,
		lemma: "第一歩"
	},
	{
		rank: 8375,
		frequency: 5.46,
		lemma: "団塊"
	},
	{
		rank: 8376,
		frequency: 5.46,
		lemma: "付す"
	},
	{
		rank: 8377,
		frequency: 5.46,
		lemma: "補強"
	},
	{
		rank: 8378,
		frequency: 5.46,
		lemma: "おいおい"
	},
	{
		rank: 8379,
		frequency: 5.46,
		lemma: "常連"
	},
	{
		rank: 8380,
		frequency: 5.46,
		lemma: "名物"
	},
	{
		rank: 8381,
		frequency: 5.46,
		lemma: "平野"
	},
	{
		rank: 8382,
		frequency: 5.46,
		lemma: "多彩"
	},
	{
		rank: 8383,
		frequency: 5.45,
		lemma: "売"
	},
	{
		rank: 8384,
		frequency: 5.45,
		lemma: "家畜"
	},
	{
		rank: 8385,
		frequency: 5.45,
		lemma: "人びと"
	},
	{
		rank: 8386,
		frequency: 5.45,
		lemma: "罠"
	},
	{
		rank: 8387,
		frequency: 5.45,
		lemma: "お部屋"
	},
	{
		rank: 8388,
		frequency: 5.45,
		lemma: "同氏"
	},
	{
		rank: 8389,
		frequency: 5.45,
		lemma: "残"
	},
	{
		rank: 8390,
		frequency: 5.45,
		lemma: "高木"
	},
	{
		rank: 8391,
		frequency: 5.45,
		lemma: "沿岸"
	},
	{
		rank: 8392,
		frequency: 5.45,
		lemma: "いじめる"
	},
	{
		rank: 8393,
		frequency: 5.45,
		lemma: "＄"
	},
	{
		rank: 8394,
		frequency: 5.45,
		lemma: "壮大"
	},
	{
		rank: 8395,
		frequency: 5.45,
		lemma: "ふた"
	},
	{
		rank: 8396,
		frequency: 5.45,
		lemma: "フリーター"
	},
	{
		rank: 8397,
		frequency: 5.45,
		lemma: "ポジティブ"
	},
	{
		rank: 8398,
		frequency: 5.45,
		lemma: "過度"
	},
	{
		rank: 8399,
		frequency: 5.44,
		lemma: "コラボレーション"
	},
	{
		rank: 8400,
		frequency: 5.44,
		lemma: "続編"
	},
	{
		rank: 8401,
		frequency: 5.44,
		lemma: "ちと"
	},
	{
		rank: 8402,
		frequency: 5.44,
		lemma: "代目"
	},
	{
		rank: 8403,
		frequency: 5.44,
		lemma: "団結"
	},
	{
		rank: 8404,
		frequency: 5.44,
		lemma: "人柄"
	},
	{
		rank: 8405,
		frequency: 5.44,
		lemma: "情報処理"
	},
	{
		rank: 8406,
		frequency: 5.44,
		lemma: "西日本"
	},
	{
		rank: 8407,
		frequency: 5.43,
		lemma: "熱狂"
	},
	{
		rank: 8408,
		frequency: 5.43,
		lemma: "立て"
	},
	{
		rank: 8409,
		frequency: 5.43,
		lemma: "舎"
	},
	{
		rank: 8410,
		frequency: 5.43,
		lemma: "ウクライナ"
	},
	{
		rank: 8411,
		frequency: 5.43,
		lemma: "当る"
	},
	{
		rank: 8412,
		frequency: 5.43,
		lemma: "祖国"
	},
	{
		rank: 8413,
		frequency: 5.43,
		lemma: "委ねる"
	},
	{
		rank: 8414,
		frequency: 5.43,
		lemma: "キリ"
	},
	{
		rank: 8415,
		frequency: 5.43,
		lemma: "志望"
	},
	{
		rank: 8416,
		frequency: 5.43,
		lemma: "カール"
	},
	{
		rank: 8417,
		frequency: 5.43,
		lemma: "清潔"
	},
	{
		rank: 8418,
		frequency: 5.43,
		lemma: "期日"
	},
	{
		rank: 8419,
		frequency: 5.42,
		lemma: "良質"
	},
	{
		rank: 8420,
		frequency: 5.42,
		lemma: "貝"
	},
	{
		rank: 8421,
		frequency: 5.42,
		lemma: "当店"
	},
	{
		rank: 8422,
		frequency: 5.42,
		lemma: "本棚"
	},
	{
		rank: 8423,
		frequency: 5.42,
		lemma: "機密"
	},
	{
		rank: 8424,
		frequency: 5.42,
		lemma: "宮殿"
	},
	{
		rank: 8425,
		frequency: 5.42,
		lemma: "カウント"
	},
	{
		rank: 8426,
		frequency: 5.41,
		lemma: "復讐"
	},
	{
		rank: 8427,
		frequency: 5.41,
		lemma: "心境"
	},
	{
		rank: 8428,
		frequency: 5.41,
		lemma: "密か"
	},
	{
		rank: 8429,
		frequency: 5.41,
		lemma: "ひとこと"
	},
	{
		rank: 8430,
		frequency: 5.41,
		lemma: "着用"
	},
	{
		rank: 8431,
		frequency: 5.41,
		lemma: "カーブ"
	},
	{
		rank: 8432,
		frequency: 5.4,
		lemma: "おいら"
	},
	{
		rank: 8433,
		frequency: 5.4,
		lemma: "号線"
	},
	{
		rank: 8434,
		frequency: 5.4,
		lemma: "聞き取る"
	},
	{
		rank: 8435,
		frequency: 5.4,
		lemma: "下着"
	},
	{
		rank: 8436,
		frequency: 5.4,
		lemma: "建前"
	},
	{
		rank: 8437,
		frequency: 5.4,
		lemma: "マルクス"
	},
	{
		rank: 8438,
		frequency: 5.4,
		lemma: "好感"
	},
	{
		rank: 8439,
		frequency: 5.39,
		lemma: "ため息"
	},
	{
		rank: 8440,
		frequency: 5.39,
		lemma: "稿"
	},
	{
		rank: 8441,
		frequency: 5.39,
		lemma: "精密"
	},
	{
		rank: 8442,
		frequency: 5.39,
		lemma: "配列"
	},
	{
		rank: 8443,
		frequency: 5.39,
		lemma: "食卓"
	},
	{
		rank: 8444,
		frequency: 5.39,
		lemma: "わくわく"
	},
	{
		rank: 8445,
		frequency: 5.39,
		lemma: "今晩"
	},
	{
		rank: 8446,
		frequency: 5.39,
		lemma: "三菱"
	},
	{
		rank: 8447,
		frequency: 5.39,
		lemma: "着目"
	},
	{
		rank: 8448,
		frequency: 5.39,
		lemma: "夢見る"
	},
	{
		rank: 8449,
		frequency: 5.39,
		lemma: "語彙"
	},
	{
		rank: 8450,
		frequency: 5.39,
		lemma: "共同通信"
	},
	{
		rank: 8451,
		frequency: 5.39,
		lemma: "スー"
	},
	{
		rank: 8452,
		frequency: 5.38,
		lemma: "クリニック"
	},
	{
		rank: 8453,
		frequency: 5.38,
		lemma: "豪"
	},
	{
		rank: 8454,
		frequency: 5.38,
		lemma: "まれ"
	},
	{
		rank: 8455,
		frequency: 5.38,
		lemma: "餃子"
	},
	{
		rank: 8456,
		frequency: 5.38,
		lemma: "ガーデン"
	},
	{
		rank: 8457,
		frequency: 5.37,
		lemma: "ガイドブック"
	},
	{
		rank: 8458,
		frequency: 5.37,
		lemma: "康"
	},
	{
		rank: 8459,
		frequency: 5.37,
		lemma: "方言"
	},
	{
		rank: 8460,
		frequency: 5.37,
		lemma: "随時"
	},
	{
		rank: 8461,
		frequency: 5.37,
		lemma: "ニッポン"
	},
	{
		rank: 8462,
		frequency: 5.37,
		lemma: "ステレオ"
	},
	{
		rank: 8463,
		frequency: 5.37,
		lemma: "重力"
	},
	{
		rank: 8464,
		frequency: 5.37,
		lemma: "漠然と"
	},
	{
		rank: 8465,
		frequency: 5.37,
		lemma: "皆無"
	},
	{
		rank: 8466,
		frequency: 5.37,
		lemma: "プロフェッショナル"
	},
	{
		rank: 8467,
		frequency: 5.37,
		lemma: "承諾"
	},
	{
		rank: 8468,
		frequency: 5.37,
		lemma: "店主"
	},
	{
		rank: 8469,
		frequency: 5.36,
		lemma: "最善"
	},
	{
		rank: 8470,
		frequency: 5.36,
		lemma: "真摯"
	},
	{
		rank: 8471,
		frequency: 5.36,
		lemma: "戸田"
	},
	{
		rank: 8472,
		frequency: 5.36,
		lemma: "グレー"
	},
	{
		rank: 8473,
		frequency: 5.36,
		lemma: "フィット"
	},
	{
		rank: 8474,
		frequency: 5.36,
		lemma: "脅迫"
	},
	{
		rank: 8475,
		frequency: 5.36,
		lemma: "双子"
	},
	{
		rank: 8476,
		frequency: 5.35,
		lemma: "脱線"
	},
	{
		rank: 8477,
		frequency: 5.35,
		lemma: "量的"
	},
	{
		rank: 8478,
		frequency: 5.35,
		lemma: "緑色"
	},
	{
		rank: 8479,
		frequency: 5.35,
		lemma: "過言"
	},
	{
		rank: 8480,
		frequency: 5.35,
		lemma: "彰"
	},
	{
		rank: 8481,
		frequency: 5.35,
		lemma: "会費"
	},
	{
		rank: 8482,
		frequency: 5.35,
		lemma: "物語る"
	},
	{
		rank: 8483,
		frequency: 5.35,
		lemma: "見渡す"
	},
	{
		rank: 8484,
		frequency: 5.34,
		lemma: "前作"
	},
	{
		rank: 8485,
		frequency: 5.34,
		lemma: "提訴"
	},
	{
		rank: 8486,
		frequency: 5.34,
		lemma: "麻生"
	},
	{
		rank: 8487,
		frequency: 5.34,
		lemma: "方程式"
	},
	{
		rank: 8488,
		frequency: 5.34,
		lemma: "フォーク"
	},
	{
		rank: 8489,
		frequency: 5.34,
		lemma: "ことに"
	},
	{
		rank: 8490,
		frequency: 5.34,
		lemma: "反響"
	},
	{
		rank: 8491,
		frequency: 5.34,
		lemma: "近辺"
	},
	{
		rank: 8492,
		frequency: 5.34,
		lemma: "ァ"
	},
	{
		rank: 8493,
		frequency: 5.34,
		lemma: "ビニール"
	},
	{
		rank: 8494,
		frequency: 5.34,
		lemma: "両面"
	},
	{
		rank: 8495,
		frequency: 5.34,
		lemma: "亮"
	},
	{
		rank: 8496,
		frequency: 5.34,
		lemma: "過ごせる"
	},
	{
		rank: 8497,
		frequency: 5.34,
		lemma: "密着"
	},
	{
		rank: 8498,
		frequency: 5.33,
		lemma: "摩擦"
	},
	{
		rank: 8499,
		frequency: 5.33,
		lemma: "糖尿"
	},
	{
		rank: 8500,
		frequency: 5.33,
		lemma: "ｋｍ"
	},
	{
		rank: 8501,
		frequency: 5.33,
		lemma: "蛇"
	},
	{
		rank: 8502,
		frequency: 5.33,
		lemma: "バッハ"
	},
	{
		rank: 8503,
		frequency: 5.33,
		lemma: "死去"
	},
	{
		rank: 8504,
		frequency: 5.33,
		lemma: "遠藤"
	},
	{
		rank: 8505,
		frequency: 5.33,
		lemma: "甲斐"
	},
	{
		rank: 8506,
		frequency: 5.33,
		lemma: "達人"
	},
	{
		rank: 8507,
		frequency: 5.33,
		lemma: "レーザー"
	},
	{
		rank: 8508,
		frequency: 5.33,
		lemma: "表れる"
	},
	{
		rank: 8509,
		frequency: 5.33,
		lemma: "誘惑"
	},
	{
		rank: 8510,
		frequency: 5.33,
		lemma: "進捗"
	},
	{
		rank: 8511,
		frequency: 5.33,
		lemma: "脅かす"
	},
	{
		rank: 8512,
		frequency: 5.33,
		lemma: "つぎ"
	},
	{
		rank: 8513,
		frequency: 5.33,
		lemma: "終"
	},
	{
		rank: 8514,
		frequency: 5.32,
		lemma: "玄"
	},
	{
		rank: 8515,
		frequency: 5.32,
		lemma: "懸賞"
	},
	{
		rank: 8516,
		frequency: 5.32,
		lemma: "ナショナル"
	},
	{
		rank: 8517,
		frequency: 5.32,
		lemma: "田村"
	},
	{
		rank: 8518,
		frequency: 5.32,
		lemma: "オート"
	},
	{
		rank: 8519,
		frequency: 5.32,
		lemma: "切り離す"
	},
	{
		rank: 8520,
		frequency: 5.32,
		lemma: "ハナ"
	},
	{
		rank: 8521,
		frequency: 5.32,
		lemma: "凍結"
	},
	{
		rank: 8522,
		frequency: 5.32,
		lemma: "模倣"
	},
	{
		rank: 8523,
		frequency: 5.32,
		lemma: "おっさん"
	},
	{
		rank: 8524,
		frequency: 5.32,
		lemma: "各々"
	},
	{
		rank: 8525,
		frequency: 5.32,
		lemma: "鳴く"
	},
	{
		rank: 8526,
		frequency: 5.32,
		lemma: "学べる"
	},
	{
		rank: 8527,
		frequency: 5.31,
		lemma: "たす"
	},
	{
		rank: 8528,
		frequency: 5.31,
		lemma: "延々と"
	},
	{
		rank: 8529,
		frequency: 5.31,
		lemma: "消極"
	},
	{
		rank: 8530,
		frequency: 5.31,
		lemma: "駆けつける"
	},
	{
		rank: 8531,
		frequency: 5.31,
		lemma: "国外"
	},
	{
		rank: 8532,
		frequency: 5.31,
		lemma: "談合"
	},
	{
		rank: 8533,
		frequency: 5.31,
		lemma: "客席"
	},
	{
		rank: 8534,
		frequency: 5.31,
		lemma: "女神"
	},
	{
		rank: 8535,
		frequency: 5.31,
		lemma: "に関し"
	},
	{
		rank: 8536,
		frequency: 5.31,
		lemma: "冷戦"
	},
	{
		rank: 8537,
		frequency: 5.31,
		lemma: "キャプテン"
	},
	{
		rank: 8538,
		frequency: 5.31,
		lemma: "引き取る"
	},
	{
		rank: 8539,
		frequency: 5.31,
		lemma: "電流"
	},
	{
		rank: 8540,
		frequency: 5.3,
		lemma: "ぜひとも"
	},
	{
		rank: 8541,
		frequency: 5.3,
		lemma: "見地"
	},
	{
		rank: 8542,
		frequency: 5.3,
		lemma: "衰退"
	},
	{
		rank: 8543,
		frequency: 5.3,
		lemma: "心情"
	},
	{
		rank: 8544,
		frequency: 5.3,
		lemma: "新潮"
	},
	{
		rank: 8545,
		frequency: 5.3,
		lemma: "重み"
	},
	{
		rank: 8546,
		frequency: 5.3,
		lemma: "かって"
	},
	{
		rank: 8547,
		frequency: 5.3,
		lemma: "つねに"
	},
	{
		rank: 8548,
		frequency: 5.3,
		lemma: "セカンド"
	},
	{
		rank: 8549,
		frequency: 5.29,
		lemma: "深まる"
	},
	{
		rank: 8550,
		frequency: 5.29,
		lemma: "労力"
	},
	{
		rank: 8551,
		frequency: 5.29,
		lemma: "浮かべる"
	},
	{
		rank: 8552,
		frequency: 5.29,
		lemma: "見当たる"
	},
	{
		rank: 8553,
		frequency: 5.29,
		lemma: "松下"
	},
	{
		rank: 8554,
		frequency: 5.29,
		lemma: "国歌"
	},
	{
		rank: 8555,
		frequency: 5.29,
		lemma: "格段"
	},
	{
		rank: 8556,
		frequency: 5.29,
		lemma: "栗"
	},
	{
		rank: 8557,
		frequency: 5.29,
		lemma: "定例"
	},
	{
		rank: 8558,
		frequency: 5.29,
		lemma: "伊"
	},
	{
		rank: 8559,
		frequency: 5.29,
		lemma: "コンポーネント"
	},
	{
		rank: 8560,
		frequency: 5.29,
		lemma: "競う"
	},
	{
		rank: 8561,
		frequency: 5.29,
		lemma: "ウラ"
	},
	{
		rank: 8562,
		frequency: 5.29,
		lemma: "陪審"
	},
	{
		rank: 8563,
		frequency: 5.29,
		lemma: "懲役"
	},
	{
		rank: 8564,
		frequency: 5.28,
		lemma: "ダイレクト"
	},
	{
		rank: 8565,
		frequency: 5.28,
		lemma: "最良"
	},
	{
		rank: 8566,
		frequency: 5.28,
		lemma: "味わい"
	},
	{
		rank: 8567,
		frequency: 5.28,
		lemma: "買"
	},
	{
		rank: 8568,
		frequency: 5.28,
		lemma: "ラッシュ"
	},
	{
		rank: 8569,
		frequency: 5.28,
		lemma: "ちがい"
	},
	{
		rank: 8570,
		frequency: 5.28,
		lemma: "ボトル"
	},
	{
		rank: 8571,
		frequency: 5.28,
		lemma: "マリ"
	},
	{
		rank: 8572,
		frequency: 5.28,
		lemma: "群れ"
	},
	{
		rank: 8573,
		frequency: 5.28,
		lemma: "育"
	},
	{
		rank: 8574,
		frequency: 5.28,
		lemma: "日数"
	},
	{
		rank: 8575,
		frequency: 5.28,
		lemma: "来店"
	},
	{
		rank: 8576,
		frequency: 5.28,
		lemma: "現物"
	},
	{
		rank: 8577,
		frequency: 5.28,
		lemma: "慶"
	},
	{
		rank: 8578,
		frequency: 5.27,
		lemma: "堅い"
	},
	{
		rank: 8579,
		frequency: 5.27,
		lemma: "末期"
	},
	{
		rank: 8580,
		frequency: 5.27,
		lemma: "うつ病"
	},
	{
		rank: 8581,
		frequency: 5.27,
		lemma: "大げさ"
	},
	{
		rank: 8582,
		frequency: 5.27,
		lemma: "水産"
	},
	{
		rank: 8583,
		frequency: 5.27,
		lemma: "手助け"
	},
	{
		rank: 8584,
		frequency: 5.27,
		lemma: "乱"
	},
	{
		rank: 8585,
		frequency: 5.26,
		lemma: "遅刻"
	},
	{
		rank: 8586,
		frequency: 5.26,
		lemma: "家屋"
	},
	{
		rank: 8587,
		frequency: 5.26,
		lemma: "カート"
	},
	{
		rank: 8588,
		frequency: 5.26,
		lemma: "直る"
	},
	{
		rank: 8589,
		frequency: 5.26,
		lemma: "次長"
	},
	{
		rank: 8590,
		frequency: 5.26,
		lemma: "非公開"
	},
	{
		rank: 8591,
		frequency: 5.26,
		lemma: "表彰"
	},
	{
		rank: 8592,
		frequency: 5.26,
		lemma: "公安"
	},
	{
		rank: 8593,
		frequency: 5.26,
		lemma: "やむを得ない"
	},
	{
		rank: 8594,
		frequency: 5.26,
		lemma: "式典"
	},
	{
		rank: 8595,
		frequency: 5.26,
		lemma: "くさい"
	},
	{
		rank: 8596,
		frequency: 5.26,
		lemma: "一角"
	},
	{
		rank: 8597,
		frequency: 5.26,
		lemma: "歯医者"
	},
	{
		rank: 8598,
		frequency: 5.26,
		lemma: "解約"
	},
	{
		rank: 8599,
		frequency: 5.26,
		lemma: "簑"
	},
	{
		rank: 8600,
		frequency: 5.26,
		lemma: "長距離"
	},
	{
		rank: 8601,
		frequency: 5.26,
		lemma: "反復"
	},
	{
		rank: 8602,
		frequency: 5.26,
		lemma: "本年度"
	},
	{
		rank: 8603,
		frequency: 5.26,
		lemma: "取扱"
	},
	{
		rank: 8604,
		frequency: 5.26,
		lemma: "ダーク"
	},
	{
		rank: 8605,
		frequency: 5.25,
		lemma: "絶賛"
	},
	{
		rank: 8606,
		frequency: 5.25,
		lemma: "無罪"
	},
	{
		rank: 8607,
		frequency: 5.25,
		lemma: "持ち上げる"
	},
	{
		rank: 8608,
		frequency: 5.25,
		lemma: "ディレクトリ"
	},
	{
		rank: 8609,
		frequency: 5.25,
		lemma: "有罪"
	},
	{
		rank: 8610,
		frequency: 5.25,
		lemma: "国益"
	},
	{
		rank: 8611,
		frequency: 5.25,
		lemma: "悩ます"
	},
	{
		rank: 8612,
		frequency: 5.25,
		lemma: "目前"
	},
	{
		rank: 8613,
		frequency: 5.25,
		lemma: "くだらない"
	},
	{
		rank: 8614,
		frequency: 5.25,
		lemma: "投与"
	},
	{
		rank: 8615,
		frequency: 5.25,
		lemma: "甲子園"
	},
	{
		rank: 8616,
		frequency: 5.25,
		lemma: "塊"
	},
	{
		rank: 8617,
		frequency: 5.24,
		lemma: "伝承"
	},
	{
		rank: 8618,
		frequency: 5.24,
		lemma: "所在"
	},
	{
		rank: 8619,
		frequency: 5.24,
		lemma: "乗り換える"
	},
	{
		rank: 8620,
		frequency: 5.24,
		lemma: "栃木"
	},
	{
		rank: 8621,
		frequency: 5.24,
		lemma: "懇親"
	},
	{
		rank: 8622,
		frequency: 5.24,
		lemma: "淳"
	},
	{
		rank: 8623,
		frequency: 5.24,
		lemma: "われ"
	},
	{
		rank: 8624,
		frequency: 5.24,
		lemma: "架空"
	},
	{
		rank: 8625,
		frequency: 5.24,
		lemma: "津"
	},
	{
		rank: 8626,
		frequency: 5.24,
		lemma: "乗り出す"
	},
	{
		rank: 8627,
		frequency: 5.24,
		lemma: "コーン"
	},
	{
		rank: 8628,
		frequency: 5.24,
		lemma: "きん"
	},
	{
		rank: 8629,
		frequency: 5.24,
		lemma: "上空"
	},
	{
		rank: 8630,
		frequency: 5.24,
		lemma: "美女"
	},
	{
		rank: 8631,
		frequency: 5.24,
		lemma: "絶妙"
	},
	{
		rank: 8632,
		frequency: 5.24,
		lemma: "楽章"
	},
	{
		rank: 8633,
		frequency: 5.24,
		lemma: "陳述"
	},
	{
		rank: 8634,
		frequency: 5.24,
		lemma: "ポピュラー"
	},
	{
		rank: 8635,
		frequency: 5.23,
		lemma: "スマート"
	},
	{
		rank: 8636,
		frequency: 5.23,
		lemma: "暖房"
	},
	{
		rank: 8637,
		frequency: 5.23,
		lemma: "叶う"
	},
	{
		rank: 8638,
		frequency: 5.23,
		lemma: "細部"
	},
	{
		rank: 8639,
		frequency: 5.23,
		lemma: "菓子"
	},
	{
		rank: 8640,
		frequency: 5.23,
		lemma: "生息"
	},
	{
		rank: 8641,
		frequency: 5.23,
		lemma: "ともなう"
	},
	{
		rank: 8642,
		frequency: 5.22,
		lemma: "虚偽"
	},
	{
		rank: 8643,
		frequency: 5.22,
		lemma: "ふやす"
	},
	{
		rank: 8644,
		frequency: 5.22,
		lemma: "継ぐ"
	},
	{
		rank: 8645,
		frequency: 5.22,
		lemma: "教職員"
	},
	{
		rank: 8646,
		frequency: 5.22,
		lemma: "ややこしい"
	},
	{
		rank: 8647,
		frequency: 5.22,
		lemma: "情"
	},
	{
		rank: 8648,
		frequency: 5.22,
		lemma: "一歩"
	},
	{
		rank: 8649,
		frequency: 5.22,
		lemma: "フィル"
	},
	{
		rank: 8650,
		frequency: 5.22,
		lemma: "反動"
	},
	{
		rank: 8651,
		frequency: 5.22,
		lemma: "地道"
	},
	{
		rank: 8652,
		frequency: 5.22,
		lemma: "巧み"
	},
	{
		rank: 8653,
		frequency: 5.22,
		lemma: "笛"
	},
	{
		rank: 8654,
		frequency: 5.22,
		lemma: "神田"
	},
	{
		rank: 8655,
		frequency: 5.22,
		lemma: "孝"
	},
	{
		rank: 8656,
		frequency: 5.22,
		lemma: "不調"
	},
	{
		rank: 8657,
		frequency: 5.22,
		lemma: "算出"
	},
	{
		rank: 8658,
		frequency: 5.21,
		lemma: "撤去"
	},
	{
		rank: 8659,
		frequency: 5.21,
		lemma: "スローガン"
	},
	{
		rank: 8660,
		frequency: 5.21,
		lemma: "法定"
	},
	{
		rank: 8661,
		frequency: 5.21,
		lemma: "何やら"
	},
	{
		rank: 8662,
		frequency: 5.21,
		lemma: "ガード"
	},
	{
		rank: 8663,
		frequency: 5.2,
		lemma: "になう"
	},
	{
		rank: 8664,
		frequency: 5.2,
		lemma: "オオカミ"
	},
	{
		rank: 8665,
		frequency: 5.2,
		lemma: "埋まる"
	},
	{
		rank: 8666,
		frequency: 5.2,
		lemma: "ジュニア"
	},
	{
		rank: 8667,
		frequency: 5.2,
		lemma: "一時期"
	},
	{
		rank: 8668,
		frequency: 5.2,
		lemma: "栄"
	},
	{
		rank: 8669,
		frequency: 5.2,
		lemma: "出向く"
	},
	{
		rank: 8670,
		frequency: 5.2,
		lemma: "事案"
	},
	{
		rank: 8671,
		frequency: 5.2,
		lemma: "租税"
	},
	{
		rank: 8672,
		frequency: 5.2,
		lemma: "タイル"
	},
	{
		rank: 8673,
		frequency: 5.19,
		lemma: "且つ"
	},
	{
		rank: 8674,
		frequency: 5.19,
		lemma: "極める"
	},
	{
		rank: 8675,
		frequency: 5.19,
		lemma: "いつのまにか"
	},
	{
		rank: 8676,
		frequency: 5.19,
		lemma: "命名"
	},
	{
		rank: 8677,
		frequency: 5.19,
		lemma: "高層"
	},
	{
		rank: 8678,
		frequency: 5.18,
		lemma: "稼動"
	},
	{
		rank: 8679,
		frequency: 5.18,
		lemma: "無縁"
	},
	{
		rank: 8680,
		frequency: 5.18,
		lemma: "躊躇"
	},
	{
		rank: 8681,
		frequency: 5.18,
		lemma: "数少ない"
	},
	{
		rank: 8682,
		frequency: 5.18,
		lemma: "浄化"
	},
	{
		rank: 8683,
		frequency: 5.18,
		lemma: "はやい"
	},
	{
		rank: 8684,
		frequency: 5.18,
		lemma: "呟く"
	},
	{
		rank: 8685,
		frequency: 5.18,
		lemma: "アルミ"
	},
	{
		rank: 8686,
		frequency: 5.18,
		lemma: "いか"
	},
	{
		rank: 8687,
		frequency: 5.18,
		lemma: "十字架"
	},
	{
		rank: 8688,
		frequency: 5.18,
		lemma: "速やか"
	},
	{
		rank: 8689,
		frequency: 5.18,
		lemma: "則"
	},
	{
		rank: 8690,
		frequency: 5.18,
		lemma: "傍聴"
	},
	{
		rank: 8691,
		frequency: 5.18,
		lemma: "房"
	},
	{
		rank: 8692,
		frequency: 5.17,
		lemma: "連鎖"
	},
	{
		rank: 8693,
		frequency: 5.17,
		lemma: "ピース"
	},
	{
		rank: 8694,
		frequency: 5.17,
		lemma: "バター"
	},
	{
		rank: 8695,
		frequency: 5.17,
		lemma: "屋外"
	},
	{
		rank: 8696,
		frequency: 5.17,
		lemma: "コンクール"
	},
	{
		rank: 8697,
		frequency: 5.17,
		lemma: "鉱山"
	},
	{
		rank: 8698,
		frequency: 5.17,
		lemma: "野口"
	},
	{
		rank: 8699,
		frequency: 5.17,
		lemma: "過酷"
	},
	{
		rank: 8700,
		frequency: 5.17,
		lemma: "適度"
	},
	{
		rank: 8701,
		frequency: 5.16,
		lemma: "本名"
	},
	{
		rank: 8702,
		frequency: 5.16,
		lemma: "任期"
	},
	{
		rank: 8703,
		frequency: 5.16,
		lemma: "請願"
	},
	{
		rank: 8704,
		frequency: 5.16,
		lemma: "象"
	},
	{
		rank: 8705,
		frequency: 5.16,
		lemma: "デフォルト"
	},
	{
		rank: 8706,
		frequency: 5.16,
		lemma: "インターフェース"
	},
	{
		rank: 8707,
		frequency: 5.16,
		lemma: "はてな"
	},
	{
		rank: 8708,
		frequency: 5.16,
		lemma: "ファイナル"
	},
	{
		rank: 8709,
		frequency: 5.16,
		lemma: "うわ"
	},
	{
		rank: 8710,
		frequency: 5.16,
		lemma: "冷える"
	},
	{
		rank: 8711,
		frequency: 5.16,
		lemma: "なおさら"
	},
	{
		rank: 8712,
		frequency: 5.16,
		lemma: "添加"
	},
	{
		rank: 8713,
		frequency: 5.15,
		lemma: "燃焼"
	},
	{
		rank: 8714,
		frequency: 5.15,
		lemma: "幽霊"
	},
	{
		rank: 8715,
		frequency: 5.15,
		lemma: "自力"
	},
	{
		rank: 8716,
		frequency: 5.15,
		lemma: "分け"
	},
	{
		rank: 8717,
		frequency: 5.15,
		lemma: "立証"
	},
	{
		rank: 8718,
		frequency: 5.15,
		lemma: "ひとつひとつ"
	},
	{
		rank: 8719,
		frequency: 5.15,
		lemma: "神聖"
	},
	{
		rank: 8720,
		frequency: 5.15,
		lemma: "フィクション"
	},
	{
		rank: 8721,
		frequency: 5.15,
		lemma: "マルチメディア"
	},
	{
		rank: 8722,
		frequency: 5.15,
		lemma: "寿"
	},
	{
		rank: 8723,
		frequency: 5.15,
		lemma: "採点"
	},
	{
		rank: 8724,
		frequency: 5.14,
		lemma: "操る"
	},
	{
		rank: 8725,
		frequency: 5.14,
		lemma: "徒然"
	},
	{
		rank: 8726,
		frequency: 5.14,
		lemma: "峰"
	},
	{
		rank: 8727,
		frequency: 5.14,
		lemma: "暫く"
	},
	{
		rank: 8728,
		frequency: 5.14,
		lemma: "案の定"
	},
	{
		rank: 8729,
		frequency: 5.14,
		lemma: "視界"
	},
	{
		rank: 8730,
		frequency: 5.14,
		lemma: "芯"
	},
	{
		rank: 8731,
		frequency: 5.14,
		lemma: "打ち上げ"
	},
	{
		rank: 8732,
		frequency: 5.13,
		lemma: "あて"
	},
	{
		rank: 8733,
		frequency: 5.13,
		lemma: "礼儀"
	},
	{
		rank: 8734,
		frequency: 5.13,
		lemma: "コメ"
	},
	{
		rank: 8735,
		frequency: 5.13,
		lemma: "味わえる"
	},
	{
		rank: 8736,
		frequency: 5.13,
		lemma: "使い勝手"
	},
	{
		rank: 8737,
		frequency: 5.13,
		lemma: "監修"
	},
	{
		rank: 8738,
		frequency: 5.13,
		lemma: "水泳"
	},
	{
		rank: 8739,
		frequency: 5.13,
		lemma: "握手"
	},
	{
		rank: 8740,
		frequency: 5.12,
		lemma: "アカ"
	},
	{
		rank: 8741,
		frequency: 5.12,
		lemma: "くっつく"
	},
	{
		rank: 8742,
		frequency: 5.12,
		lemma: "身内"
	},
	{
		rank: 8743,
		frequency: 5.12,
		lemma: "沸く"
	},
	{
		rank: 8744,
		frequency: 5.12,
		lemma: "暴行"
	},
	{
		rank: 8745,
		frequency: 5.12,
		lemma: "大塚"
	},
	{
		rank: 8746,
		frequency: 5.12,
		lemma: "紀"
	},
	{
		rank: 8747,
		frequency: 5.12,
		lemma: "インク"
	},
	{
		rank: 8748,
		frequency: 5.12,
		lemma: "オス"
	},
	{
		rank: 8749,
		frequency: 5.12,
		lemma: "ナチス"
	},
	{
		rank: 8750,
		frequency: 5.12,
		lemma: "牧場"
	},
	{
		rank: 8751,
		frequency: 5.12,
		lemma: "戸惑う"
	},
	{
		rank: 8752,
		frequency: 5.12,
		lemma: "移譲"
	},
	{
		rank: 8753,
		frequency: 5.11,
		lemma: "惜しい"
	},
	{
		rank: 8754,
		frequency: 5.11,
		lemma: "バーチャル"
	},
	{
		rank: 8755,
		frequency: 5.11,
		lemma: "値上がり"
	},
	{
		rank: 8756,
		frequency: 5.11,
		lemma: "主力"
	},
	{
		rank: 8757,
		frequency: 5.11,
		lemma: "パレード"
	},
	{
		rank: 8758,
		frequency: 5.11,
		lemma: "きまる"
	},
	{
		rank: 8759,
		frequency: 5.11,
		lemma: "相関"
	},
	{
		rank: 8760,
		frequency: 5.11,
		lemma: "スケート"
	},
	{
		rank: 8761,
		frequency: 5.11,
		lemma: "補欠"
	},
	{
		rank: 8762,
		frequency: 5.11,
		lemma: "プレミアム"
	},
	{
		rank: 8763,
		frequency: 5.11,
		lemma: "広"
	},
	{
		rank: 8764,
		frequency: 5.11,
		lemma: "すすむ"
	},
	{
		rank: 8765,
		frequency: 5.11,
		lemma: "スイング"
	},
	{
		rank: 8766,
		frequency: 5.11,
		lemma: "大物"
	},
	{
		rank: 8767,
		frequency: 5.11,
		lemma: "方位"
	},
	{
		rank: 8768,
		frequency: 5.1,
		lemma: "土木"
	},
	{
		rank: 8769,
		frequency: 5.1,
		lemma: "呆れる"
	},
	{
		rank: 8770,
		frequency: 5.1,
		lemma: "ブー"
	},
	{
		rank: 8771,
		frequency: 5.1,
		lemma: "イスラム教"
	},
	{
		rank: 8772,
		frequency: 5.1,
		lemma: "めでたい"
	},
	{
		rank: 8773,
		frequency: 5.1,
		lemma: "アナウンサー"
	},
	{
		rank: 8774,
		frequency: 5.09,
		lemma: "パーソナル"
	},
	{
		rank: 8775,
		frequency: 5.09,
		lemma: "俳句"
	},
	{
		rank: 8776,
		frequency: 5.09,
		lemma: "恵み"
	},
	{
		rank: 8777,
		frequency: 5.09,
		lemma: "腸"
	},
	{
		rank: 8778,
		frequency: 5.09,
		lemma: "北欧"
	},
	{
		rank: 8779,
		frequency: 5.09,
		lemma: "様相"
	},
	{
		rank: 8780,
		frequency: 5.09,
		lemma: "ありま"
	},
	{
		rank: 8781,
		frequency: 5.09,
		lemma: "農場"
	},
	{
		rank: 8782,
		frequency: 5.09,
		lemma: "ルイ"
	},
	{
		rank: 8783,
		frequency: 5.09,
		lemma: "対面"
	},
	{
		rank: 8784,
		frequency: 5.09,
		lemma: "工芸"
	},
	{
		rank: 8785,
		frequency: 5.09,
		lemma: "自我"
	},
	{
		rank: 8786,
		frequency: 5.09,
		lemma: "鐘"
	},
	{
		rank: 8787,
		frequency: 5.09,
		lemma: "おしまい"
	},
	{
		rank: 8788,
		frequency: 5.08,
		lemma: "追い出す"
	},
	{
		rank: 8789,
		frequency: 5.08,
		lemma: "流石"
	},
	{
		rank: 8790,
		frequency: 5.08,
		lemma: "出展"
	},
	{
		rank: 8791,
		frequency: 5.08,
		lemma: "ずーっと"
	},
	{
		rank: 8792,
		frequency: 5.08,
		lemma: "論者"
	},
	{
		rank: 8793,
		frequency: 5.08,
		lemma: "貰える"
	},
	{
		rank: 8794,
		frequency: 5.08,
		lemma: "肺"
	},
	{
		rank: 8795,
		frequency: 5.07,
		lemma: "正統"
	},
	{
		rank: 8796,
		frequency: 5.07,
		lemma: "捜す"
	},
	{
		rank: 8797,
		frequency: 5.07,
		lemma: "着ける"
	},
	{
		rank: 8798,
		frequency: 5.07,
		lemma: "断片"
	},
	{
		rank: 8799,
		frequency: 5.07,
		lemma: "腐敗"
	},
	{
		rank: 8800,
		frequency: 5.07,
		lemma: "帯びる"
	},
	{
		rank: 8801,
		frequency: 5.07,
		lemma: "ミル"
	},
	{
		rank: 8802,
		frequency: 5.07,
		lemma: "責務"
	},
	{
		rank: 8803,
		frequency: 5.07,
		lemma: "リスニング"
	},
	{
		rank: 8804,
		frequency: 5.07,
		lemma: "クシ"
	},
	{
		rank: 8805,
		frequency: 5.07,
		lemma: "戦線"
	},
	{
		rank: 8806,
		frequency: 5.07,
		lemma: "年月"
	},
	{
		rank: 8807,
		frequency: 5.07,
		lemma: "車線"
	},
	{
		rank: 8808,
		frequency: 5.07,
		lemma: "駐在"
	},
	{
		rank: 8809,
		frequency: 5.07,
		lemma: "聴衆"
	},
	{
		rank: 8810,
		frequency: 5.07,
		lemma: "襲撃"
	},
	{
		rank: 8811,
		frequency: 5.07,
		lemma: "ささやか"
	},
	{
		rank: 8812,
		frequency: 5.07,
		lemma: "中傷"
	},
	{
		rank: 8813,
		frequency: 5.06,
		lemma: "託す"
	},
	{
		rank: 8814,
		frequency: 5.06,
		lemma: "落下"
	},
	{
		rank: 8815,
		frequency: 5.06,
		lemma: "ライダー"
	},
	{
		rank: 8816,
		frequency: 5.06,
		lemma: "党首"
	},
	{
		rank: 8817,
		frequency: 5.06,
		lemma: "麦"
	},
	{
		rank: 8818,
		frequency: 5.06,
		lemma: "主宰"
	},
	{
		rank: 8819,
		frequency: 5.05,
		lemma: "ウォーター"
	},
	{
		rank: 8820,
		frequency: 5.05,
		lemma: "終盤"
	},
	{
		rank: 8821,
		frequency: 5.05,
		lemma: "日月"
	},
	{
		rank: 8822,
		frequency: 5.05,
		lemma: "悪口"
	},
	{
		rank: 8823,
		frequency: 5.05,
		lemma: "Ｕ"
	},
	{
		rank: 8824,
		frequency: 5.05,
		lemma: "謙虚"
	},
	{
		rank: 8825,
		frequency: 5.05,
		lemma: "締める"
	},
	{
		rank: 8826,
		frequency: 5.05,
		lemma: "神戸大"
	},
	{
		rank: 8827,
		frequency: 5.04,
		lemma: "じん"
	},
	{
		rank: 8828,
		frequency: 5.04,
		lemma: "血管"
	},
	{
		rank: 8829,
		frequency: 5.04,
		lemma: "幕府"
	},
	{
		rank: 8830,
		frequency: 5.04,
		lemma: "たりる"
	},
	{
		rank: 8831,
		frequency: 5.04,
		lemma: "遵守"
	},
	{
		rank: 8832,
		frequency: 5.04,
		lemma: "火事"
	},
	{
		rank: 8833,
		frequency: 5.04,
		lemma: "からむ"
	},
	{
		rank: 8834,
		frequency: 5.04,
		lemma: "メロディ"
	},
	{
		rank: 8835,
		frequency: 5.03,
		lemma: "ネス"
	},
	{
		rank: 8836,
		frequency: 5.03,
		lemma: "今さら"
	},
	{
		rank: 8837,
		frequency: 5.03,
		lemma: "原田"
	},
	{
		rank: 8838,
		frequency: 5.03,
		lemma: "復習"
	},
	{
		rank: 8839,
		frequency: 5.03,
		lemma: "うさぎ"
	},
	{
		rank: 8840,
		frequency: 5.03,
		lemma: "快感"
	},
	{
		rank: 8841,
		frequency: 5.03,
		lemma: "すき"
	},
	{
		rank: 8842,
		frequency: 5.03,
		lemma: "欠席"
	},
	{
		rank: 8843,
		frequency: 5.03,
		lemma: "沢"
	},
	{
		rank: 8844,
		frequency: 5.03,
		lemma: "位置づけ"
	},
	{
		rank: 8845,
		frequency: 5.03,
		lemma: "人組"
	},
	{
		rank: 8846,
		frequency: 5.03,
		lemma: "早く"
	},
	{
		rank: 8847,
		frequency: 5.03,
		lemma: "ワクチン"
	},
	{
		rank: 8848,
		frequency: 5.03,
		lemma: "釣る"
	},
	{
		rank: 8849,
		frequency: 5.02,
		lemma: "そろえる"
	},
	{
		rank: 8850,
		frequency: 5.02,
		lemma: "種々"
	},
	{
		rank: 8851,
		frequency: 5.02,
		lemma: "ベランダ"
	},
	{
		rank: 8852,
		frequency: 5.02,
		lemma: "アドバイザー"
	},
	{
		rank: 8853,
		frequency: 5.02,
		lemma: "糖"
	},
	{
		rank: 8854,
		frequency: 5.02,
		lemma: "漬け"
	},
	{
		rank: 8855,
		frequency: 5.02,
		lemma: "猶予"
	},
	{
		rank: 8856,
		frequency: 5.02,
		lemma: "詞"
	},
	{
		rank: 8857,
		frequency: 5.02,
		lemma: "開花"
	},
	{
		rank: 8858,
		frequency: 5.02,
		lemma: "洪水"
	},
	{
		rank: 8859,
		frequency: 5.02,
		lemma: "起用"
	},
	{
		rank: 8860,
		frequency: 5.02,
		lemma: "一通り"
	},
	{
		rank: 8861,
		frequency: 5.01,
		lemma: "球場"
	},
	{
		rank: 8862,
		frequency: 5.01,
		lemma: "内科"
	},
	{
		rank: 8863,
		frequency: 5.01,
		lemma: "シニア"
	},
	{
		rank: 8864,
		frequency: 5.01,
		lemma: "瀬"
	},
	{
		rank: 8865,
		frequency: 5.01,
		lemma: "潜む"
	},
	{
		rank: 8866,
		frequency: 5.01,
		lemma: "体育館"
	},
	{
		rank: 8867,
		frequency: 5.01,
		lemma: "あれだけ"
	},
	{
		rank: 8868,
		frequency: 5.01,
		lemma: "物足りない"
	},
	{
		rank: 8869,
		frequency: 5.01,
		lemma: "おきる"
	},
	{
		rank: 8870,
		frequency: 5.01,
		lemma: "仕入れる"
	},
	{
		rank: 8871,
		frequency: 5.01,
		lemma: "下げ"
	},
	{
		rank: 8872,
		frequency: 5.01,
		lemma: "先立つ"
	},
	{
		rank: 8873,
		frequency: 5.01,
		lemma: "交通省"
	},
	{
		rank: 8874,
		frequency: 5.01,
		lemma: "合致"
	},
	{
		rank: 8875,
		frequency: 5.01,
		lemma: "マインド"
	},
	{
		rank: 8876,
		frequency: 5,
		lemma: "つきあう"
	},
	{
		rank: 8877,
		frequency: 5,
		lemma: "なにやら"
	},
	{
		rank: 8878,
		frequency: 5,
		lemma: "大人気"
	},
	{
		rank: 8879,
		frequency: 5,
		lemma: "智"
	},
	{
		rank: 8880,
		frequency: 5,
		lemma: "しみじみ"
	},
	{
		rank: 8881,
		frequency: 5,
		lemma: "燃やす"
	},
	{
		rank: 8882,
		frequency: 5,
		lemma: "止め"
	},
	{
		rank: 8883,
		frequency: 5,
		lemma: "岩波"
	},
	{
		rank: 8884,
		frequency: 5,
		lemma: "切"
	},
	{
		rank: 8885,
		frequency: 5,
		lemma: "三角"
	},
	{
		rank: 8886,
		frequency: 4.99,
		lemma: "ウォン"
	},
	{
		rank: 8887,
		frequency: 4.99,
		lemma: "あらわす"
	},
	{
		rank: 8888,
		frequency: 4.99,
		lemma: "リック"
	},
	{
		rank: 8889,
		frequency: 4.99,
		lemma: "快楽"
	},
	{
		rank: 8890,
		frequency: 4.99,
		lemma: "力学"
	},
	{
		rank: 8891,
		frequency: 4.99,
		lemma: "ナシ"
	},
	{
		rank: 8892,
		frequency: 4.99,
		lemma: "朗読"
	},
	{
		rank: 8893,
		frequency: 4.99,
		lemma: "部落"
	},
	{
		rank: 8894,
		frequency: 4.99,
		lemma: "ボブ"
	},
	{
		rank: 8895,
		frequency: 4.99,
		lemma: "ヘリ"
	},
	{
		rank: 8896,
		frequency: 4.99,
		lemma: "ヲ"
	},
	{
		rank: 8897,
		frequency: 4.98,
		lemma: "油断"
	},
	{
		rank: 8898,
		frequency: 4.98,
		lemma: "神学"
	},
	{
		rank: 8899,
		frequency: 4.98,
		lemma: "乱暴"
	},
	{
		rank: 8900,
		frequency: 4.98,
		lemma: "すける"
	},
	{
		rank: 8901,
		frequency: 4.98,
		lemma: "ダイヤモンド"
	},
	{
		rank: 8902,
		frequency: 4.97,
		lemma: "音質"
	},
	{
		rank: 8903,
		frequency: 4.97,
		lemma: "ウッド"
	},
	{
		rank: 8904,
		frequency: 4.97,
		lemma: "慣習"
	},
	{
		rank: 8905,
		frequency: 4.97,
		lemma: "ラマ"
	},
	{
		rank: 8906,
		frequency: 4.97,
		lemma: "連れ"
	},
	{
		rank: 8907,
		frequency: 4.97,
		lemma: "神殿"
	},
	{
		rank: 8908,
		frequency: 4.97,
		lemma: "道のり"
	},
	{
		rank: 8909,
		frequency: 4.97,
		lemma: "法規"
	},
	{
		rank: 8910,
		frequency: 4.97,
		lemma: "目線"
	},
	{
		rank: 8911,
		frequency: 4.97,
		lemma: "紅葉"
	},
	{
		rank: 8912,
		frequency: 4.97,
		lemma: "思い浮かべる"
	},
	{
		rank: 8913,
		frequency: 4.97,
		lemma: "争点"
	},
	{
		rank: 8914,
		frequency: 4.97,
		lemma: "ハッ"
	},
	{
		rank: 8915,
		frequency: 4.97,
		lemma: "物流"
	},
	{
		rank: 8916,
		frequency: 4.96,
		lemma: "入浴"
	},
	{
		rank: 8917,
		frequency: 4.96,
		lemma: "厳選"
	},
	{
		rank: 8918,
		frequency: 4.96,
		lemma: "ワイヤレス"
	},
	{
		rank: 8919,
		frequency: 4.96,
		lemma: "合衆国"
	},
	{
		rank: 8920,
		frequency: 4.96,
		lemma: "送り出す"
	},
	{
		rank: 8921,
		frequency: 4.96,
		lemma: "医院"
	},
	{
		rank: 8922,
		frequency: 4.96,
		lemma: "輝き"
	},
	{
		rank: 8923,
		frequency: 4.96,
		lemma: "打ち上げる"
	},
	{
		rank: 8924,
		frequency: 4.96,
		lemma: "漏れ"
	},
	{
		rank: 8925,
		frequency: 4.96,
		lemma: "立ち向かう"
	},
	{
		rank: 8926,
		frequency: 4.96,
		lemma: "撤回"
	},
	{
		rank: 8927,
		frequency: 4.96,
		lemma: "君たち"
	},
	{
		rank: 8928,
		frequency: 4.96,
		lemma: "何もかも"
	},
	{
		rank: 8929,
		frequency: 4.95,
		lemma: "積み重ねる"
	},
	{
		rank: 8930,
		frequency: 4.95,
		lemma: "税収"
	},
	{
		rank: 8931,
		frequency: 4.95,
		lemma: "レーニン"
	},
	{
		rank: 8932,
		frequency: 4.95,
		lemma: "まかせる"
	},
	{
		rank: 8933,
		frequency: 4.95,
		lemma: "小島"
	},
	{
		rank: 8934,
		frequency: 4.94,
		lemma: "いむ"
	},
	{
		rank: 8935,
		frequency: 4.94,
		lemma: "処罰"
	},
	{
		rank: 8936,
		frequency: 4.94,
		lemma: "グラウンド"
	},
	{
		rank: 8937,
		frequency: 4.94,
		lemma: "採取"
	},
	{
		rank: 8938,
		frequency: 4.94,
		lemma: "と同時に"
	},
	{
		rank: 8939,
		frequency: 4.94,
		lemma: "義務づける"
	},
	{
		rank: 8940,
		frequency: 4.94,
		lemma: "手書き"
	},
	{
		rank: 8941,
		frequency: 4.94,
		lemma: "フラ"
	},
	{
		rank: 8942,
		frequency: 4.94,
		lemma: "無理やり"
	},
	{
		rank: 8943,
		frequency: 4.94,
		lemma: "ミネラル"
	},
	{
		rank: 8944,
		frequency: 4.94,
		lemma: "ピザ"
	},
	{
		rank: 8945,
		frequency: 4.94,
		lemma: "甘える"
	},
	{
		rank: 8946,
		frequency: 4.94,
		lemma: "準決勝"
	},
	{
		rank: 8947,
		frequency: 4.94,
		lemma: "在籍"
	},
	{
		rank: 8948,
		frequency: 4.94,
		lemma: "帰属"
	},
	{
		rank: 8949,
		frequency: 4.94,
		lemma: "踏み出す"
	},
	{
		rank: 8950,
		frequency: 4.94,
		lemma: "どる"
	},
	{
		rank: 8951,
		frequency: 4.94,
		lemma: "集う"
	},
	{
		rank: 8952,
		frequency: 4.94,
		lemma: "経常"
	},
	{
		rank: 8953,
		frequency: 4.93,
		lemma: "初頭"
	},
	{
		rank: 8954,
		frequency: 4.93,
		lemma: "頼り"
	},
	{
		rank: 8955,
		frequency: 4.93,
		lemma: "申込む"
	},
	{
		rank: 8956,
		frequency: 4.93,
		lemma: "レール"
	},
	{
		rank: 8957,
		frequency: 4.93,
		lemma: "ざっと"
	},
	{
		rank: 8958,
		frequency: 4.93,
		lemma: "覚え"
	},
	{
		rank: 8959,
		frequency: 4.93,
		lemma: "ゆえに"
	},
	{
		rank: 8960,
		frequency: 4.93,
		lemma: "冷める"
	},
	{
		rank: 8961,
		frequency: 4.93,
		lemma: "法学部"
	},
	{
		rank: 8962,
		frequency: 4.93,
		lemma: "東部"
	},
	{
		rank: 8963,
		frequency: 4.93,
		lemma: "巨額"
	},
	{
		rank: 8964,
		frequency: 4.92,
		lemma: "切断"
	},
	{
		rank: 8965,
		frequency: 4.92,
		lemma: "罰則"
	},
	{
		rank: 8966,
		frequency: 4.92,
		lemma: "インデックス"
	},
	{
		rank: 8967,
		frequency: 4.92,
		lemma: "嫌がる"
	},
	{
		rank: 8968,
		frequency: 4.92,
		lemma: "内心"
	},
	{
		rank: 8969,
		frequency: 4.92,
		lemma: "成す"
	},
	{
		rank: 8970,
		frequency: 4.92,
		lemma: "尊厳"
	},
	{
		rank: 8971,
		frequency: 4.92,
		lemma: "校舎"
	},
	{
		rank: 8972,
		frequency: 4.92,
		lemma: "ばれる"
	},
	{
		rank: 8973,
		frequency: 4.92,
		lemma: "猪瀬"
	},
	{
		rank: 8974,
		frequency: 4.92,
		lemma: "ドライ"
	},
	{
		rank: 8975,
		frequency: 4.92,
		lemma: "敗退"
	},
	{
		rank: 8976,
		frequency: 4.92,
		lemma: "さわやか"
	},
	{
		rank: 8977,
		frequency: 4.92,
		lemma: "地形"
	},
	{
		rank: 8978,
		frequency: 4.92,
		lemma: "静"
	},
	{
		rank: 8979,
		frequency: 4.91,
		lemma: "和歌山"
	},
	{
		rank: 8980,
		frequency: 4.91,
		lemma: "大野"
	},
	{
		rank: 8981,
		frequency: 4.91,
		lemma: "不祥事"
	},
	{
		rank: 8982,
		frequency: 4.91,
		lemma: "張"
	},
	{
		rank: 8983,
		frequency: 4.91,
		lemma: "目玉"
	},
	{
		rank: 8984,
		frequency: 4.91,
		lemma: "起因"
	},
	{
		rank: 8985,
		frequency: 4.91,
		lemma: "ネガティブ"
	},
	{
		rank: 8986,
		frequency: 4.9,
		lemma: "絆"
	},
	{
		rank: 8987,
		frequency: 4.9,
		lemma: "プレート"
	},
	{
		rank: 8988,
		frequency: 4.9,
		lemma: "南京"
	},
	{
		rank: 8989,
		frequency: 4.9,
		lemma: "カエル"
	},
	{
		rank: 8990,
		frequency: 4.9,
		lemma: "暗示"
	},
	{
		rank: 8991,
		frequency: 4.9,
		lemma: "女子高"
	},
	{
		rank: 8992,
		frequency: 4.9,
		lemma: "レモン"
	},
	{
		rank: 8993,
		frequency: 4.9,
		lemma: "規律"
	},
	{
		rank: 8994,
		frequency: 4.9,
		lemma: "見当"
	},
	{
		rank: 8995,
		frequency: 4.9,
		lemma: "女房"
	},
	{
		rank: 8996,
		frequency: 4.9,
		lemma: "優雅"
	},
	{
		rank: 8997,
		frequency: 4.9,
		lemma: "留める"
	},
	{
		rank: 8998,
		frequency: 4.9,
		lemma: "敵対"
	},
	{
		rank: 8999,
		frequency: 4.9,
		lemma: "シドニー"
	},
	{
		rank: 9000,
		frequency: 4.9,
		lemma: "聴ける"
	},
	{
		rank: 9001,
		frequency: 4.9,
		lemma: "ヒアリング"
	},
	{
		rank: 9002,
		frequency: 4.9,
		lemma: "気持ちいい"
	},
	{
		rank: 9003,
		frequency: 4.9,
		lemma: "おわる"
	},
	{
		rank: 9004,
		frequency: 4.9,
		lemma: "償還"
	},
	{
		rank: 9005,
		frequency: 4.89,
		lemma: "ＰＲ"
	},
	{
		rank: 9006,
		frequency: 4.89,
		lemma: "スリ"
	},
	{
		rank: 9007,
		frequency: 4.89,
		lemma: "驚かす"
	},
	{
		rank: 9008,
		frequency: 4.89,
		lemma: "ぽん"
	},
	{
		rank: 9009,
		frequency: 4.89,
		lemma: "全日本"
	},
	{
		rank: 9010,
		frequency: 4.89,
		lemma: "帰り道"
	},
	{
		rank: 9011,
		frequency: 4.89,
		lemma: "つとめる"
	},
	{
		rank: 9012,
		frequency: 4.89,
		lemma: "バレエ"
	},
	{
		rank: 9013,
		frequency: 4.88,
		lemma: "町内"
	},
	{
		rank: 9014,
		frequency: 4.88,
		lemma: "ほほ"
	},
	{
		rank: 9015,
		frequency: 4.88,
		lemma: "写す"
	},
	{
		rank: 9016,
		frequency: 4.88,
		lemma: "昇る"
	},
	{
		rank: 9017,
		frequency: 4.88,
		lemma: "税務"
	},
	{
		rank: 9018,
		frequency: 4.88,
		lemma: "工法"
	},
	{
		rank: 9019,
		frequency: 4.88,
		lemma: "デメリット"
	},
	{
		rank: 9020,
		frequency: 4.88,
		lemma: "肖像"
	},
	{
		rank: 9021,
		frequency: 4.88,
		lemma: "もも"
	},
	{
		rank: 9022,
		frequency: 4.88,
		lemma: "知らす"
	},
	{
		rank: 9023,
		frequency: 4.88,
		lemma: "外食"
	},
	{
		rank: 9024,
		frequency: 4.88,
		lemma: "モーター"
	},
	{
		rank: 9025,
		frequency: 4.88,
		lemma: "クリス"
	},
	{
		rank: 9026,
		frequency: 4.88,
		lemma: "キープ"
	},
	{
		rank: 9027,
		frequency: 4.88,
		lemma: "奏者"
	},
	{
		rank: 9028,
		frequency: 4.88,
		lemma: "所見"
	},
	{
		rank: 9029,
		frequency: 4.88,
		lemma: "区間"
	},
	{
		rank: 9030,
		frequency: 4.88,
		lemma: "ハンガリー"
	},
	{
		rank: 9031,
		frequency: 4.88,
		lemma: "浮かび上がる"
	},
	{
		rank: 9032,
		frequency: 4.87,
		lemma: "うま"
	},
	{
		rank: 9033,
		frequency: 4.87,
		lemma: "解剖"
	},
	{
		rank: 9034,
		frequency: 4.87,
		lemma: "威力"
	},
	{
		rank: 9035,
		frequency: 4.87,
		lemma: "永"
	},
	{
		rank: 9036,
		frequency: 4.87,
		lemma: "異論"
	},
	{
		rank: 9037,
		frequency: 4.87,
		lemma: "ビジネスマン"
	},
	{
		rank: 9038,
		frequency: 4.87,
		lemma: "ビートルズ"
	},
	{
		rank: 9039,
		frequency: 4.87,
		lemma: "翌"
	},
	{
		rank: 9040,
		frequency: 4.87,
		lemma: "儲け"
	},
	{
		rank: 9041,
		frequency: 4.86,
		lemma: "市街"
	},
	{
		rank: 9042,
		frequency: 4.86,
		lemma: "持ち歩く"
	},
	{
		rank: 9043,
		frequency: 4.86,
		lemma: "飾り"
	},
	{
		rank: 9044,
		frequency: 4.86,
		lemma: "肥満"
	},
	{
		rank: 9045,
		frequency: 4.86,
		lemma: "恵"
	},
	{
		rank: 9046,
		frequency: 4.86,
		lemma: "人事院"
	},
	{
		rank: 9047,
		frequency: 4.86,
		lemma: "拳"
	},
	{
		rank: 9048,
		frequency: 4.86,
		lemma: "キャベツ"
	},
	{
		rank: 9049,
		frequency: 4.86,
		lemma: "エキサイト"
	},
	{
		rank: 9050,
		frequency: 4.86,
		lemma: "深"
	},
	{
		rank: 9051,
		frequency: 4.85,
		lemma: "らっしゃる"
	},
	{
		rank: 9052,
		frequency: 4.85,
		lemma: "余分"
	},
	{
		rank: 9053,
		frequency: 4.85,
		lemma: "無難"
	},
	{
		rank: 9054,
		frequency: 4.85,
		lemma: "転"
	},
	{
		rank: 9055,
		frequency: 4.85,
		lemma: "成し遂げる"
	},
	{
		rank: 9056,
		frequency: 4.85,
		lemma: "一晩"
	},
	{
		rank: 9057,
		frequency: 4.85,
		lemma: "断定"
	},
	{
		rank: 9058,
		frequency: 4.85,
		lemma: "誉める"
	},
	{
		rank: 9059,
		frequency: 4.85,
		lemma: "ヶ所"
	},
	{
		rank: 9060,
		frequency: 4.85,
		lemma: "たがる"
	},
	{
		rank: 9061,
		frequency: 4.85,
		lemma: "ドラえもん"
	},
	{
		rank: 9062,
		frequency: 4.85,
		lemma: "帰れる"
	},
	{
		rank: 9063,
		frequency: 4.85,
		lemma: "銀河"
	},
	{
		rank: 9064,
		frequency: 4.84,
		lemma: "昭"
	},
	{
		rank: 9065,
		frequency: 4.84,
		lemma: "現す"
	},
	{
		rank: 9066,
		frequency: 4.84,
		lemma: "満開"
	},
	{
		rank: 9067,
		frequency: 4.84,
		lemma: "野外"
	},
	{
		rank: 9068,
		frequency: 4.84,
		lemma: "こん"
	},
	{
		rank: 9069,
		frequency: 4.84,
		lemma: "妖精"
	},
	{
		rank: 9070,
		frequency: 4.84,
		lemma: "薦める"
	},
	{
		rank: 9071,
		frequency: 4.84,
		lemma: "片"
	},
	{
		rank: 9072,
		frequency: 4.84,
		lemma: "爽やか"
	},
	{
		rank: 9073,
		frequency: 4.84,
		lemma: "薄"
	},
	{
		rank: 9074,
		frequency: 4.84,
		lemma: "追放"
	},
	{
		rank: 9075,
		frequency: 4.84,
		lemma: "高田"
	},
	{
		rank: 9076,
		frequency: 4.84,
		lemma: "探求"
	},
	{
		rank: 9077,
		frequency: 4.84,
		lemma: "加算"
	},
	{
		rank: 9078,
		frequency: 4.83,
		lemma: "運動会"
	},
	{
		rank: 9079,
		frequency: 4.83,
		lemma: "便り"
	},
	{
		rank: 9080,
		frequency: 4.83,
		lemma: "真っ白"
	},
	{
		rank: 9081,
		frequency: 4.83,
		lemma: "湘南"
	},
	{
		rank: 9082,
		frequency: 4.83,
		lemma: "農林省"
	},
	{
		rank: 9083,
		frequency: 4.83,
		lemma: "家内"
	},
	{
		rank: 9084,
		frequency: 4.83,
		lemma: "博多"
	},
	{
		rank: 9085,
		frequency: 4.83,
		lemma: "ぬる"
	},
	{
		rank: 9086,
		frequency: 4.83,
		lemma: "プログラマ"
	},
	{
		rank: 9087,
		frequency: 4.83,
		lemma: "扶助"
	},
	{
		rank: 9088,
		frequency: 4.83,
		lemma: "取組"
	},
	{
		rank: 9089,
		frequency: 4.83,
		lemma: "格闘技"
	},
	{
		rank: 9090,
		frequency: 4.83,
		lemma: "声優"
	},
	{
		rank: 9091,
		frequency: 4.83,
		lemma: "出回る"
	},
	{
		rank: 9092,
		frequency: 4.82,
		lemma: "冷やす"
	},
	{
		rank: 9093,
		frequency: 4.82,
		lemma: "華やか"
	},
	{
		rank: 9094,
		frequency: 4.82,
		lemma: "リーディング"
	},
	{
		rank: 9095,
		frequency: 4.82,
		lemma: "ナショナリズム"
	},
	{
		rank: 9096,
		frequency: 4.82,
		lemma: "プラザ"
	},
	{
		rank: 9097,
		frequency: 4.82,
		lemma: "墓地"
	},
	{
		rank: 9098,
		frequency: 4.82,
		lemma: "強行"
	},
	{
		rank: 9099,
		frequency: 4.82,
		lemma: "絶える"
	},
	{
		rank: 9100,
		frequency: 4.82,
		lemma: "近づける"
	},
	{
		rank: 9101,
		frequency: 4.82,
		lemma: "忍耐"
	},
	{
		rank: 9102,
		frequency: 4.82,
		lemma: "風水"
	},
	{
		rank: 9103,
		frequency: 4.82,
		lemma: "けっして"
	},
	{
		rank: 9104,
		frequency: 4.82,
		lemma: "月額"
	},
	{
		rank: 9105,
		frequency: 4.82,
		lemma: "無関心"
	},
	{
		rank: 9106,
		frequency: 4.82,
		lemma: "御礼"
	},
	{
		rank: 9107,
		frequency: 4.82,
		lemma: "シアター"
	},
	{
		rank: 9108,
		frequency: 4.82,
		lemma: "回戦"
	},
	{
		rank: 9109,
		frequency: 4.82,
		lemma: "ドリーム"
	},
	{
		rank: 9110,
		frequency: 4.82,
		lemma: "スキャン"
	},
	{
		rank: 9111,
		frequency: 4.81,
		lemma: "作物"
	},
	{
		rank: 9112,
		frequency: 4.81,
		lemma: "団地"
	},
	{
		rank: 9113,
		frequency: 4.81,
		lemma: "褒美"
	},
	{
		rank: 9114,
		frequency: 4.81,
		lemma: "枯れる"
	},
	{
		rank: 9115,
		frequency: 4.81,
		lemma: "濃厚"
	},
	{
		rank: 9116,
		frequency: 4.81,
		lemma: "有権者"
	},
	{
		rank: 9117,
		frequency: 4.81,
		lemma: "積み上げる"
	},
	{
		rank: 9118,
		frequency: 4.81,
		lemma: "受容"
	},
	{
		rank: 9119,
		frequency: 4.8,
		lemma: "採決"
	},
	{
		rank: 9120,
		frequency: 4.8,
		lemma: "無用"
	},
	{
		rank: 9121,
		frequency: 4.8,
		lemma: "駆る"
	},
	{
		rank: 9122,
		frequency: 4.8,
		lemma: "上流"
	},
	{
		rank: 9123,
		frequency: 4.8,
		lemma: "拭く"
	},
	{
		rank: 9124,
		frequency: 4.8,
		lemma: "カタカナ"
	},
	{
		rank: 9125,
		frequency: 4.8,
		lemma: "鳥取"
	},
	{
		rank: 9126,
		frequency: 4.8,
		lemma: "電圧"
	},
	{
		rank: 9127,
		frequency: 4.8,
		lemma: "逃げ出す"
	},
	{
		rank: 9128,
		frequency: 4.79,
		lemma: "パラメータ"
	},
	{
		rank: 9129,
		frequency: 4.79,
		lemma: "自民"
	},
	{
		rank: 9130,
		frequency: 4.79,
		lemma: "でかける"
	},
	{
		rank: 9131,
		frequency: 4.79,
		lemma: "シネマ"
	},
	{
		rank: 9132,
		frequency: 4.79,
		lemma: "線路"
	},
	{
		rank: 9133,
		frequency: 4.79,
		lemma: "催す"
	},
	{
		rank: 9134,
		frequency: 4.79,
		lemma: "サーフィン"
	},
	{
		rank: 9135,
		frequency: 4.79,
		lemma: "納豆"
	},
	{
		rank: 9136,
		frequency: 4.79,
		lemma: "マネ"
	},
	{
		rank: 9137,
		frequency: 4.79,
		lemma: "配送"
	},
	{
		rank: 9138,
		frequency: 4.79,
		lemma: "食器"
	},
	{
		rank: 9139,
		frequency: 4.79,
		lemma: "最高裁判所"
	},
	{
		rank: 9140,
		frequency: 4.79,
		lemma: "遠征"
	},
	{
		rank: 9141,
		frequency: 4.79,
		lemma: "積もる"
	},
	{
		rank: 9142,
		frequency: 4.79,
		lemma: "トピックス"
	},
	{
		rank: 9143,
		frequency: 4.79,
		lemma: "つぶれる"
	},
	{
		rank: 9144,
		frequency: 4.79,
		lemma: "ライス"
	},
	{
		rank: 9145,
		frequency: 4.78,
		lemma: "ビラ"
	},
	{
		rank: 9146,
		frequency: 4.78,
		lemma: "手足"
	},
	{
		rank: 9147,
		frequency: 4.78,
		lemma: "ウィリアム"
	},
	{
		rank: 9148,
		frequency: 4.78,
		lemma: "回想"
	},
	{
		rank: 9149,
		frequency: 4.78,
		lemma: "めったに"
	},
	{
		rank: 9150,
		frequency: 4.78,
		lemma: "ただただ"
	},
	{
		rank: 9151,
		frequency: 4.78,
		lemma: "芸人"
	},
	{
		rank: 9152,
		frequency: 4.78,
		lemma: "愉快"
	},
	{
		rank: 9153,
		frequency: 4.78,
		lemma: "やす"
	},
	{
		rank: 9154,
		frequency: 4.78,
		lemma: "シャンプー"
	},
	{
		rank: 9155,
		frequency: 4.78,
		lemma: "越し"
	},
	{
		rank: 9156,
		frequency: 4.78,
		lemma: "盾"
	},
	{
		rank: 9157,
		frequency: 4.78,
		lemma: "名曲"
	},
	{
		rank: 9158,
		frequency: 4.77,
		lemma: "カレッジ"
	},
	{
		rank: 9159,
		frequency: 4.77,
		lemma: "図式"
	},
	{
		rank: 9160,
		frequency: 4.77,
		lemma: "詰め"
	},
	{
		rank: 9161,
		frequency: 4.77,
		lemma: "接客"
	},
	{
		rank: 9162,
		frequency: 4.77,
		lemma: "唄"
	},
	{
		rank: 9163,
		frequency: 4.77,
		lemma: "徳島"
	},
	{
		rank: 9164,
		frequency: 4.77,
		lemma: "懸命"
	},
	{
		rank: 9165,
		frequency: 4.77,
		lemma: "薫"
	},
	{
		rank: 9166,
		frequency: 4.77,
		lemma: "なんらかの"
	},
	{
		rank: 9167,
		frequency: 4.77,
		lemma: "喰う"
	},
	{
		rank: 9168,
		frequency: 4.77,
		lemma: "併用"
	},
	{
		rank: 9169,
		frequency: 4.77,
		lemma: "平凡"
	},
	{
		rank: 9170,
		frequency: 4.77,
		lemma: "働きかける"
	},
	{
		rank: 9171,
		frequency: 4.77,
		lemma: "わる"
	},
	{
		rank: 9172,
		frequency: 4.76,
		lemma: "時価"
	},
	{
		rank: 9173,
		frequency: 4.76,
		lemma: "少い"
	},
	{
		rank: 9174,
		frequency: 4.76,
		lemma: "刺身"
	},
	{
		rank: 9175,
		frequency: 4.76,
		lemma: "下降"
	},
	{
		rank: 9176,
		frequency: 4.76,
		lemma: "ピラミッド"
	},
	{
		rank: 9177,
		frequency: 4.76,
		lemma: "仮名"
	},
	{
		rank: 9178,
		frequency: 4.76,
		lemma: "インテル"
	},
	{
		rank: 9179,
		frequency: 4.76,
		lemma: "タコ"
	},
	{
		rank: 9180,
		frequency: 4.76,
		lemma: "ロイヤル"
	},
	{
		rank: 9181,
		frequency: 4.76,
		lemma: "面す"
	},
	{
		rank: 9182,
		frequency: 4.75,
		lemma: "ぞう"
	},
	{
		rank: 9183,
		frequency: 4.75,
		lemma: "レーベル"
	},
	{
		rank: 9184,
		frequency: 4.75,
		lemma: "政治家"
	},
	{
		rank: 9185,
		frequency: 4.75,
		lemma: "戦犯"
	},
	{
		rank: 9186,
		frequency: 4.75,
		lemma: "評"
	},
	{
		rank: 9187,
		frequency: 4.75,
		lemma: "デッキ"
	},
	{
		rank: 9188,
		frequency: 4.75,
		lemma: "リース"
	},
	{
		rank: 9189,
		frequency: 4.75,
		lemma: "彩"
	},
	{
		rank: 9190,
		frequency: 4.75,
		lemma: "翌朝"
	},
	{
		rank: 9191,
		frequency: 4.75,
		lemma: "迄"
	},
	{
		rank: 9192,
		frequency: 4.75,
		lemma: "詰"
	},
	{
		rank: 9193,
		frequency: 4.75,
		lemma: "改修"
	},
	{
		rank: 9194,
		frequency: 4.75,
		lemma: "遠隔"
	},
	{
		rank: 9195,
		frequency: 4.74,
		lemma: "拠出"
	},
	{
		rank: 9196,
		frequency: 4.74,
		lemma: "考古学"
	},
	{
		rank: 9197,
		frequency: 4.74,
		lemma: "危惧"
	},
	{
		rank: 9198,
		frequency: 4.74,
		lemma: "純正"
	},
	{
		rank: 9199,
		frequency: 4.74,
		lemma: "コス"
	},
	{
		rank: 9200,
		frequency: 4.74,
		lemma: "蛙"
	},
	{
		rank: 9201,
		frequency: 4.74,
		lemma: "上旬"
	},
	{
		rank: 9202,
		frequency: 4.73,
		lemma: "大家"
	},
	{
		rank: 9203,
		frequency: 4.73,
		lemma: "入金"
	},
	{
		rank: 9204,
		frequency: 4.73,
		lemma: "粒子"
	},
	{
		rank: 9205,
		frequency: 4.73,
		lemma: "わがまま"
	},
	{
		rank: 9206,
		frequency: 4.73,
		lemma: "転ぶ"
	},
	{
		rank: 9207,
		frequency: 4.73,
		lemma: "閉店"
	},
	{
		rank: 9208,
		frequency: 4.73,
		lemma: "百貨店"
	},
	{
		rank: 9209,
		frequency: 4.73,
		lemma: "官邸"
	},
	{
		rank: 9210,
		frequency: 4.73,
		lemma: "悟る"
	},
	{
		rank: 9211,
		frequency: 4.73,
		lemma: "たびたび"
	},
	{
		rank: 9212,
		frequency: 4.73,
		lemma: "不完全"
	},
	{
		rank: 9213,
		frequency: 4.73,
		lemma: "そいつ"
	},
	{
		rank: 9214,
		frequency: 4.73,
		lemma: "配備"
	},
	{
		rank: 9215,
		frequency: 4.73,
		lemma: "パチ"
	},
	{
		rank: 9216,
		frequency: 4.73,
		lemma: "やけど"
	},
	{
		rank: 9217,
		frequency: 4.72,
		lemma: "閉まる"
	},
	{
		rank: 9218,
		frequency: 4.72,
		lemma: "クッキー"
	},
	{
		rank: 9219,
		frequency: 4.72,
		lemma: "善意"
	},
	{
		rank: 9220,
		frequency: 4.72,
		lemma: "函"
	},
	{
		rank: 9221,
		frequency: 4.72,
		lemma: "予め"
	},
	{
		rank: 9222,
		frequency: 4.72,
		lemma: "聡"
	},
	{
		rank: 9223,
		frequency: 4.72,
		lemma: "日の丸"
	},
	{
		rank: 9224,
		frequency: 4.71,
		lemma: "ミラノ"
	},
	{
		rank: 9225,
		frequency: 4.71,
		lemma: "馬券"
	},
	{
		rank: 9226,
		frequency: 4.71,
		lemma: "礼"
	},
	{
		rank: 9227,
		frequency: 4.71,
		lemma: "綿"
	},
	{
		rank: 9228,
		frequency: 4.71,
		lemma: "万が一"
	},
	{
		rank: 9229,
		frequency: 4.71,
		lemma: "若年"
	},
	{
		rank: 9230,
		frequency: 4.71,
		lemma: "命題"
	},
	{
		rank: 9231,
		frequency: 4.71,
		lemma: "湿る"
	},
	{
		rank: 9232,
		frequency: 4.71,
		lemma: "ハッカー"
	},
	{
		rank: 9233,
		frequency: 4.71,
		lemma: "先程"
	},
	{
		rank: 9234,
		frequency: 4.7,
		lemma: "広範"
	},
	{
		rank: 9235,
		frequency: 4.7,
		lemma: "価"
	},
	{
		rank: 9236,
		frequency: 4.7,
		lemma: "民家"
	},
	{
		rank: 9237,
		frequency: 4.7,
		lemma: "松山"
	},
	{
		rank: 9238,
		frequency: 4.7,
		lemma: "っきり"
	},
	{
		rank: 9239,
		frequency: 4.7,
		lemma: "プロセッサ"
	},
	{
		rank: 9240,
		frequency: 4.7,
		lemma: "精"
	},
	{
		rank: 9241,
		frequency: 4.7,
		lemma: "焼肉"
	},
	{
		rank: 9242,
		frequency: 4.69,
		lemma: "法学"
	},
	{
		rank: 9243,
		frequency: 4.69,
		lemma: "狂気"
	},
	{
		rank: 9244,
		frequency: 4.69,
		lemma: "洞"
	},
	{
		rank: 9245,
		frequency: 4.69,
		lemma: "ゴールデン"
	},
	{
		rank: 9246,
		frequency: 4.69,
		lemma: "暗闇"
	},
	{
		rank: 9247,
		frequency: 4.69,
		lemma: "筆頭"
	},
	{
		rank: 9248,
		frequency: 4.69,
		lemma: "創価学会"
	},
	{
		rank: 9249,
		frequency: 4.69,
		lemma: "レコーダー"
	},
	{
		rank: 9250,
		frequency: 4.69,
		lemma: "撮れる"
	},
	{
		rank: 9251,
		frequency: 4.68,
		lemma: "水槽"
	},
	{
		rank: 9252,
		frequency: 4.68,
		lemma: "返品"
	},
	{
		rank: 9253,
		frequency: 4.68,
		lemma: "採算"
	},
	{
		rank: 9254,
		frequency: 4.68,
		lemma: "籠"
	},
	{
		rank: 9255,
		frequency: 4.68,
		lemma: "押しつける"
	},
	{
		rank: 9256,
		frequency: 4.68,
		lemma: "フラン"
	},
	{
		rank: 9257,
		frequency: 4.68,
		lemma: "上院"
	},
	{
		rank: 9258,
		frequency: 4.68,
		lemma: "焼"
	},
	{
		rank: 9259,
		frequency: 4.68,
		lemma: "暗記"
	},
	{
		rank: 9260,
		frequency: 4.68,
		lemma: "いくらか"
	},
	{
		rank: 9261,
		frequency: 4.68,
		lemma: "爆破"
	},
	{
		rank: 9262,
		frequency: 4.68,
		lemma: "出動"
	},
	{
		rank: 9263,
		frequency: 4.68,
		lemma: "ソフトウエア"
	},
	{
		rank: 9264,
		frequency: 4.68,
		lemma: "動揺"
	},
	{
		rank: 9265,
		frequency: 4.68,
		lemma: "結城"
	},
	{
		rank: 9266,
		frequency: 4.68,
		lemma: "音源"
	},
	{
		rank: 9267,
		frequency: 4.68,
		lemma: "銅"
	},
	{
		rank: 9268,
		frequency: 4.67,
		lemma: "ピアニスト"
	},
	{
		rank: 9269,
		frequency: 4.67,
		lemma: "着陸"
	},
	{
		rank: 9270,
		frequency: 4.67,
		lemma: "捏造"
	},
	{
		rank: 9271,
		frequency: 4.67,
		lemma: "星野"
	},
	{
		rank: 9272,
		frequency: 4.67,
		lemma: "耐久"
	},
	{
		rank: 9273,
		frequency: 4.67,
		lemma: "資材"
	},
	{
		rank: 9274,
		frequency: 4.67,
		lemma: "講"
	},
	{
		rank: 9275,
		frequency: 4.67,
		lemma: "無力"
	},
	{
		rank: 9276,
		frequency: 4.67,
		lemma: "教諭"
	},
	{
		rank: 9277,
		frequency: 4.67,
		lemma: "みかん"
	},
	{
		rank: 9278,
		frequency: 4.67,
		lemma: "小道具"
	},
	{
		rank: 9279,
		frequency: 4.67,
		lemma: "ネクタイ"
	},
	{
		rank: 9280,
		frequency: 4.67,
		lemma: "お宅"
	},
	{
		rank: 9281,
		frequency: 4.67,
		lemma: "もち"
	},
	{
		rank: 9282,
		frequency: 4.67,
		lemma: "強要"
	},
	{
		rank: 9283,
		frequency: 4.67,
		lemma: "名人"
	},
	{
		rank: 9284,
		frequency: 4.67,
		lemma: "言説"
	},
	{
		rank: 9285,
		frequency: 4.66,
		lemma: "大工"
	},
	{
		rank: 9286,
		frequency: 4.66,
		lemma: "差し上げる"
	},
	{
		rank: 9287,
		frequency: 4.66,
		lemma: "いっそ"
	},
	{
		rank: 9288,
		frequency: 4.66,
		lemma: "ナノ"
	},
	{
		rank: 9289,
		frequency: 4.66,
		lemma: "はん"
	},
	{
		rank: 9290,
		frequency: 4.66,
		lemma: "内訳"
	},
	{
		rank: 9291,
		frequency: 4.66,
		lemma: "室長"
	},
	{
		rank: 9292,
		frequency: 4.66,
		lemma: "わん"
	},
	{
		rank: 9293,
		frequency: 4.66,
		lemma: "アトピー"
	},
	{
		rank: 9294,
		frequency: 4.65,
		lemma: "浜松"
	},
	{
		rank: 9295,
		frequency: 4.65,
		lemma: "投じる"
	},
	{
		rank: 9296,
		frequency: 4.65,
		lemma: "吉川"
	},
	{
		rank: 9297,
		frequency: 4.65,
		lemma: "救出"
	},
	{
		rank: 9298,
		frequency: 4.65,
		lemma: "財務省"
	},
	{
		rank: 9299,
		frequency: 4.65,
		lemma: "着替える"
	},
	{
		rank: 9300,
		frequency: 4.65,
		lemma: "お正月"
	},
	{
		rank: 9301,
		frequency: 4.65,
		lemma: "超越"
	},
	{
		rank: 9302,
		frequency: 4.65,
		lemma: "亡命"
	},
	{
		rank: 9303,
		frequency: 4.65,
		lemma: "足跡"
	},
	{
		rank: 9304,
		frequency: 4.65,
		lemma: "優良"
	},
	{
		rank: 9305,
		frequency: 4.65,
		lemma: "ウォール"
	},
	{
		rank: 9306,
		frequency: 4.65,
		lemma: "預言"
	},
	{
		rank: 9307,
		frequency: 4.65,
		lemma: "マレー"
	},
	{
		rank: 9308,
		frequency: 4.65,
		lemma: "言い分"
	},
	{
		rank: 9309,
		frequency: 4.65,
		lemma: "薔薇"
	},
	{
		rank: 9310,
		frequency: 4.65,
		lemma: "名付ける"
	},
	{
		rank: 9311,
		frequency: 4.64,
		lemma: "昆虫"
	},
	{
		rank: 9312,
		frequency: 4.64,
		lemma: "作動"
	},
	{
		rank: 9313,
		frequency: 4.64,
		lemma: "映し出す"
	},
	{
		rank: 9314,
		frequency: 4.64,
		lemma: "水素"
	},
	{
		rank: 9315,
		frequency: 4.64,
		lemma: "わぁ"
	},
	{
		rank: 9316,
		frequency: 4.64,
		lemma: "婚約"
	},
	{
		rank: 9317,
		frequency: 4.64,
		lemma: "まじ"
	},
	{
		rank: 9318,
		frequency: 4.64,
		lemma: "コップ"
	},
	{
		rank: 9319,
		frequency: 4.64,
		lemma: "岡崎"
	},
	{
		rank: 9320,
		frequency: 4.64,
		lemma: "撒く"
	},
	{
		rank: 9321,
		frequency: 4.64,
		lemma: "フセイン"
	},
	{
		rank: 9322,
		frequency: 4.64,
		lemma: "活気"
	},
	{
		rank: 9323,
		frequency: 4.64,
		lemma: "製薬"
	},
	{
		rank: 9324,
		frequency: 4.64,
		lemma: "思い出せる"
	},
	{
		rank: 9325,
		frequency: 4.63,
		lemma: "ループ"
	},
	{
		rank: 9326,
		frequency: 4.63,
		lemma: "接種"
	},
	{
		rank: 9327,
		frequency: 4.63,
		lemma: "仕上がる"
	},
	{
		rank: 9328,
		frequency: 4.63,
		lemma: "エール"
	},
	{
		rank: 9329,
		frequency: 4.63,
		lemma: "オウム"
	},
	{
		rank: 9330,
		frequency: 4.63,
		lemma: "カルト"
	},
	{
		rank: 9331,
		frequency: 4.62,
		lemma: "込"
	},
	{
		rank: 9332,
		frequency: 4.62,
		lemma: "伝道"
	},
	{
		rank: 9333,
		frequency: 4.62,
		lemma: "延ばす"
	},
	{
		rank: 9334,
		frequency: 4.62,
		lemma: "悲鳴"
	},
	{
		rank: 9335,
		frequency: 4.62,
		lemma: "乾杯"
	},
	{
		rank: 9336,
		frequency: 4.62,
		lemma: "不適切"
	},
	{
		rank: 9337,
		frequency: 4.62,
		lemma: "総研"
	},
	{
		rank: 9338,
		frequency: 4.62,
		lemma: "味付け"
	},
	{
		rank: 9339,
		frequency: 4.62,
		lemma: "口コミ"
	},
	{
		rank: 9340,
		frequency: 4.62,
		lemma: "ぐっと"
	},
	{
		rank: 9341,
		frequency: 4.62,
		lemma: "フレンチ"
	},
	{
		rank: 9342,
		frequency: 4.62,
		lemma: "宜しく"
	},
	{
		rank: 9343,
		frequency: 4.62,
		lemma: "アラビア"
	},
	{
		rank: 9344,
		frequency: 4.62,
		lemma: "さく"
	},
	{
		rank: 9345,
		frequency: 4.62,
		lemma: "商社"
	},
	{
		rank: 9346,
		frequency: 4.62,
		lemma: "本題"
	},
	{
		rank: 9347,
		frequency: 4.61,
		lemma: "暴動"
	},
	{
		rank: 9348,
		frequency: 4.61,
		lemma: "わっ"
	},
	{
		rank: 9349,
		frequency: 4.61,
		lemma: "艇"
	},
	{
		rank: 9350,
		frequency: 4.61,
		lemma: "短"
	},
	{
		rank: 9351,
		frequency: 4.61,
		lemma: "赴任"
	},
	{
		rank: 9352,
		frequency: 4.61,
		lemma: "ティッシュ"
	},
	{
		rank: 9353,
		frequency: 4.61,
		lemma: "地価"
	},
	{
		rank: 9354,
		frequency: 4.61,
		lemma: "ダイナミック"
	},
	{
		rank: 9355,
		frequency: 4.61,
		lemma: "損傷"
	},
	{
		rank: 9356,
		frequency: 4.61,
		lemma: "ゲイツ"
	},
	{
		rank: 9357,
		frequency: 4.61,
		lemma: "カラス"
	},
	{
		rank: 9358,
		frequency: 4.61,
		lemma: "おばあさん"
	},
	{
		rank: 9359,
		frequency: 4.6,
		lemma: "つと"
	},
	{
		rank: 9360,
		frequency: 4.6,
		lemma: "選抜"
	},
	{
		rank: 9361,
		frequency: 4.6,
		lemma: "大橋"
	},
	{
		rank: 9362,
		frequency: 4.6,
		lemma: "空白"
	},
	{
		rank: 9363,
		frequency: 4.6,
		lemma: "片山"
	},
	{
		rank: 9364,
		frequency: 4.6,
		lemma: "ピッタリ"
	},
	{
		rank: 9365,
		frequency: 4.6,
		lemma: "キムチ"
	},
	{
		rank: 9366,
		frequency: 4.6,
		lemma: "脱却"
	},
	{
		rank: 9367,
		frequency: 4.6,
		lemma: "余儀ない"
	},
	{
		rank: 9368,
		frequency: 4.6,
		lemma: "カギ"
	},
	{
		rank: 9369,
		frequency: 4.6,
		lemma: "オリーブ"
	},
	{
		rank: 9370,
		frequency: 4.6,
		lemma: "部数"
	},
	{
		rank: 9371,
		frequency: 4.6,
		lemma: "多摩"
	},
	{
		rank: 9372,
		frequency: 4.6,
		lemma: "ムダ"
	},
	{
		rank: 9373,
		frequency: 4.6,
		lemma: "薬局"
	},
	{
		rank: 9374,
		frequency: 4.59,
		lemma: "早稲田"
	},
	{
		rank: 9375,
		frequency: 4.59,
		lemma: "救急車"
	},
	{
		rank: 9376,
		frequency: 4.59,
		lemma: "ちょい"
	},
	{
		rank: 9377,
		frequency: 4.59,
		lemma: "理系"
	},
	{
		rank: 9378,
		frequency: 4.59,
		lemma: "離れ"
	},
	{
		rank: 9379,
		frequency: 4.59,
		lemma: "枕"
	},
	{
		rank: 9380,
		frequency: 4.59,
		lemma: "攻め"
	},
	{
		rank: 9381,
		frequency: 4.59,
		lemma: "マクドナルド"
	},
	{
		rank: 9382,
		frequency: 4.59,
		lemma: "リッチ"
	},
	{
		rank: 9383,
		frequency: 4.59,
		lemma: "無言"
	},
	{
		rank: 9384,
		frequency: 4.58,
		lemma: "蝶"
	},
	{
		rank: 9385,
		frequency: 4.58,
		lemma: "いまさら"
	},
	{
		rank: 9386,
		frequency: 4.58,
		lemma: "試練"
	},
	{
		rank: 9387,
		frequency: 4.58,
		lemma: "歌声"
	},
	{
		rank: 9388,
		frequency: 4.58,
		lemma: "ためらう"
	},
	{
		rank: 9389,
		frequency: 4.58,
		lemma: "初級"
	},
	{
		rank: 9390,
		frequency: 4.58,
		lemma: "免れる"
	},
	{
		rank: 9391,
		frequency: 4.58,
		lemma: "ざる"
	},
	{
		rank: 9392,
		frequency: 4.58,
		lemma: "失望"
	},
	{
		rank: 9393,
		frequency: 4.58,
		lemma: "生き生き"
	},
	{
		rank: 9394,
		frequency: 4.58,
		lemma: "院長"
	},
	{
		rank: 9395,
		frequency: 4.58,
		lemma: "直行"
	},
	{
		rank: 9396,
		frequency: 4.58,
		lemma: "寛"
	},
	{
		rank: 9397,
		frequency: 4.58,
		lemma: "見舞い"
	},
	{
		rank: 9398,
		frequency: 4.58,
		lemma: "多用"
	},
	{
		rank: 9399,
		frequency: 4.58,
		lemma: "却下"
	},
	{
		rank: 9400,
		frequency: 4.58,
		lemma: "洞窟"
	},
	{
		rank: 9401,
		frequency: 4.58,
		lemma: "それどころか"
	},
	{
		rank: 9402,
		frequency: 4.58,
		lemma: "アナリスト"
	},
	{
		rank: 9403,
		frequency: 4.58,
		lemma: "細か"
	},
	{
		rank: 9404,
		frequency: 4.58,
		lemma: "ネーミング"
	},
	{
		rank: 9405,
		frequency: 4.57,
		lemma: "零細"
	},
	{
		rank: 9406,
		frequency: 4.57,
		lemma: "好く"
	},
	{
		rank: 9407,
		frequency: 4.57,
		lemma: "ハーフ"
	},
	{
		rank: 9408,
		frequency: 4.57,
		lemma: "みつける"
	},
	{
		rank: 9409,
		frequency: 4.57,
		lemma: "走り回る"
	},
	{
		rank: 9410,
		frequency: 4.57,
		lemma: "張り"
	},
	{
		rank: 9411,
		frequency: 4.57,
		lemma: "類型"
	},
	{
		rank: 9412,
		frequency: 4.57,
		lemma: "抜け出す"
	},
	{
		rank: 9413,
		frequency: 4.56,
		lemma: "昼休み"
	},
	{
		rank: 9414,
		frequency: 4.56,
		lemma: "消耗"
	},
	{
		rank: 9415,
		frequency: 4.56,
		lemma: "撤廃"
	},
	{
		rank: 9416,
		frequency: 4.56,
		lemma: "即す"
	},
	{
		rank: 9417,
		frequency: 4.56,
		lemma: "仰る"
	},
	{
		rank: 9418,
		frequency: 4.56,
		lemma: "たら"
	},
	{
		rank: 9419,
		frequency: 4.56,
		lemma: "畜産"
	},
	{
		rank: 9420,
		frequency: 4.56,
		lemma: "利権"
	},
	{
		rank: 9421,
		frequency: 4.56,
		lemma: "スルー"
	},
	{
		rank: 9422,
		frequency: 4.56,
		lemma: "啓蒙"
	},
	{
		rank: 9423,
		frequency: 4.56,
		lemma: "曜日"
	},
	{
		rank: 9424,
		frequency: 4.56,
		lemma: "弾力"
	},
	{
		rank: 9425,
		frequency: 4.56,
		lemma: "全開"
	},
	{
		rank: 9426,
		frequency: 4.56,
		lemma: "厄介"
	},
	{
		rank: 9427,
		frequency: 4.56,
		lemma: "ゝ"
	},
	{
		rank: 9428,
		frequency: 4.56,
		lemma: "熊谷"
	},
	{
		rank: 9429,
		frequency: 4.56,
		lemma: "エンターテイメント"
	},
	{
		rank: 9430,
		frequency: 4.56,
		lemma: "カ年"
	},
	{
		rank: 9431,
		frequency: 4.55,
		lemma: "またもや"
	},
	{
		rank: 9432,
		frequency: 4.55,
		lemma: "ロープ"
	},
	{
		rank: 9433,
		frequency: 4.55,
		lemma: "近畿"
	},
	{
		rank: 9434,
		frequency: 4.55,
		lemma: "先方"
	},
	{
		rank: 9435,
		frequency: 4.55,
		lemma: "ストライキ"
	},
	{
		rank: 9436,
		frequency: 4.55,
		lemma: "染める"
	},
	{
		rank: 9437,
		frequency: 4.55,
		lemma: "響"
	},
	{
		rank: 9438,
		frequency: 4.55,
		lemma: "フィルタ"
	},
	{
		rank: 9439,
		frequency: 4.55,
		lemma: "ミン"
	},
	{
		rank: 9440,
		frequency: 4.55,
		lemma: "山梨"
	},
	{
		rank: 9441,
		frequency: 4.55,
		lemma: "柴田"
	},
	{
		rank: 9442,
		frequency: 4.55,
		lemma: "イブ"
	},
	{
		rank: 9443,
		frequency: 4.55,
		lemma: "ディナー"
	},
	{
		rank: 9444,
		frequency: 4.55,
		lemma: "こないだ"
	},
	{
		rank: 9445,
		frequency: 4.55,
		lemma: "勘弁"
	},
	{
		rank: 9446,
		frequency: 4.54,
		lemma: "頂上"
	},
	{
		rank: 9447,
		frequency: 4.54,
		lemma: "お子様"
	},
	{
		rank: 9448,
		frequency: 4.54,
		lemma: "思いやり"
	},
	{
		rank: 9449,
		frequency: 4.54,
		lemma: "海水"
	},
	{
		rank: 9450,
		frequency: 4.54,
		lemma: "ウラン"
	},
	{
		rank: 9451,
		frequency: 4.54,
		lemma: "いままで"
	},
	{
		rank: 9452,
		frequency: 4.54,
		lemma: "地盤"
	},
	{
		rank: 9453,
		frequency: 4.54,
		lemma: "世田谷"
	},
	{
		rank: 9454,
		frequency: 4.54,
		lemma: "りんご"
	},
	{
		rank: 9455,
		frequency: 4.54,
		lemma: "路地"
	},
	{
		rank: 9456,
		frequency: 4.54,
		lemma: "ディーラー"
	},
	{
		rank: 9457,
		frequency: 4.54,
		lemma: "ならびに"
	},
	{
		rank: 9458,
		frequency: 4.54,
		lemma: "なめる"
	},
	{
		rank: 9459,
		frequency: 4.54,
		lemma: "事後"
	},
	{
		rank: 9460,
		frequency: 4.54,
		lemma: "バイオリン"
	},
	{
		rank: 9461,
		frequency: 4.53,
		lemma: "未定"
	},
	{
		rank: 9462,
		frequency: 4.53,
		lemma: "くくる"
	},
	{
		rank: 9463,
		frequency: 4.53,
		lemma: "盛り上がり"
	},
	{
		rank: 9464,
		frequency: 4.53,
		lemma: "リアリティ"
	},
	{
		rank: 9465,
		frequency: 4.53,
		lemma: "パッチ"
	},
	{
		rank: 9466,
		frequency: 4.53,
		lemma: "キューバ"
	},
	{
		rank: 9467,
		frequency: 4.53,
		lemma: "紀行"
	},
	{
		rank: 9468,
		frequency: 4.53,
		lemma: "揚げ"
	},
	{
		rank: 9469,
		frequency: 4.52,
		lemma: "受けとめる"
	},
	{
		rank: 9470,
		frequency: 4.52,
		lemma: "リマ"
	},
	{
		rank: 9471,
		frequency: 4.52,
		lemma: "享受"
	},
	{
		rank: 9472,
		frequency: 4.52,
		lemma: "喚起"
	},
	{
		rank: 9473,
		frequency: 4.52,
		lemma: "ベット"
	},
	{
		rank: 9474,
		frequency: 4.52,
		lemma: "お花"
	},
	{
		rank: 9475,
		frequency: 4.52,
		lemma: "姉歯"
	},
	{
		rank: 9476,
		frequency: 4.52,
		lemma: "スッキリ"
	},
	{
		rank: 9477,
		frequency: 4.52,
		lemma: "損益"
	},
	{
		rank: 9478,
		frequency: 4.52,
		lemma: "殻"
	},
	{
		rank: 9479,
		frequency: 4.52,
		lemma: "年上"
	},
	{
		rank: 9480,
		frequency: 4.52,
		lemma: "森田"
	},
	{
		rank: 9481,
		frequency: 4.52,
		lemma: "限"
	},
	{
		rank: 9482,
		frequency: 4.52,
		lemma: "町長"
	},
	{
		rank: 9483,
		frequency: 4.51,
		lemma: "潮"
	},
	{
		rank: 9484,
		frequency: 4.51,
		lemma: "集客"
	},
	{
		rank: 9485,
		frequency: 4.51,
		lemma: "カッコイイ"
	},
	{
		rank: 9486,
		frequency: 4.51,
		lemma: "搭乗"
	},
	{
		rank: 9487,
		frequency: 4.51,
		lemma: "居心地"
	},
	{
		rank: 9488,
		frequency: 4.51,
		lemma: "流入"
	},
	{
		rank: 9489,
		frequency: 4.51,
		lemma: "失点"
	},
	{
		rank: 9490,
		frequency: 4.51,
		lemma: "洗礼"
	},
	{
		rank: 9491,
		frequency: 4.51,
		lemma: "東ティモール"
	},
	{
		rank: 9492,
		frequency: 4.51,
		lemma: "離脱"
	},
	{
		rank: 9493,
		frequency: 4.51,
		lemma: "晃"
	},
	{
		rank: 9494,
		frequency: 4.51,
		lemma: "網羅"
	},
	{
		rank: 9495,
		frequency: 4.5,
		lemma: "おそれる"
	},
	{
		rank: 9496,
		frequency: 4.5,
		lemma: "文言"
	},
	{
		rank: 9497,
		frequency: 4.5,
		lemma: "したう"
	},
	{
		rank: 9498,
		frequency: 4.5,
		lemma: "裕"
	},
	{
		rank: 9499,
		frequency: 4.5,
		lemma: "クルー"
	},
	{
		rank: 9500,
		frequency: 4.5,
		lemma: "ネパール"
	},
	{
		rank: 9501,
		frequency: 4.5,
		lemma: "着せる"
	},
	{
		rank: 9502,
		frequency: 4.5,
		lemma: "宮沢"
	},
	{
		rank: 9503,
		frequency: 4.5,
		lemma: "鶴"
	},
	{
		rank: 9504,
		frequency: 4.5,
		lemma: "紙面"
	},
	{
		rank: 9505,
		frequency: 4.5,
		lemma: "山中"
	},
	{
		rank: 9506,
		frequency: 4.5,
		lemma: "出世"
	},
	{
		rank: 9507,
		frequency: 4.5,
		lemma: "プリン"
	},
	{
		rank: 9508,
		frequency: 4.49,
		lemma: "倍増"
	},
	{
		rank: 9509,
		frequency: 4.49,
		lemma: "飲酒"
	},
	{
		rank: 9510,
		frequency: 4.49,
		lemma: "リハーサル"
	},
	{
		rank: 9511,
		frequency: 4.49,
		lemma: "アタック"
	},
	{
		rank: 9512,
		frequency: 4.49,
		lemma: "上品"
	},
	{
		rank: 9513,
		frequency: 4.49,
		lemma: "カス"
	},
	{
		rank: 9514,
		frequency: 4.49,
		lemma: "尋問"
	},
	{
		rank: 9515,
		frequency: 4.49,
		lemma: "繁殖"
	},
	{
		rank: 9516,
		frequency: 4.49,
		lemma: "盗難"
	},
	{
		rank: 9517,
		frequency: 4.49,
		lemma: "望"
	},
	{
		rank: 9518,
		frequency: 4.48,
		lemma: "考"
	},
	{
		rank: 9519,
		frequency: 4.48,
		lemma: "先住民"
	},
	{
		rank: 9520,
		frequency: 4.48,
		lemma: "手持ち"
	},
	{
		rank: 9521,
		frequency: 4.48,
		lemma: "前編"
	},
	{
		rank: 9522,
		frequency: 4.48,
		lemma: "パンク"
	},
	{
		rank: 9523,
		frequency: 4.48,
		lemma: "乗り切る"
	},
	{
		rank: 9524,
		frequency: 4.48,
		lemma: "はずれる"
	},
	{
		rank: 9525,
		frequency: 4.48,
		lemma: "愛国"
	},
	{
		rank: 9526,
		frequency: 4.48,
		lemma: "致命"
	},
	{
		rank: 9527,
		frequency: 4.48,
		lemma: "蘭"
	},
	{
		rank: 9528,
		frequency: 4.48,
		lemma: "カジノ"
	},
	{
		rank: 9529,
		frequency: 4.48,
		lemma: "まき"
	},
	{
		rank: 9530,
		frequency: 4.48,
		lemma: "ようこそ"
	},
	{
		rank: 9531,
		frequency: 4.48,
		lemma: "レーザ"
	},
	{
		rank: 9532,
		frequency: 4.48,
		lemma: "突如"
	},
	{
		rank: 9533,
		frequency: 4.48,
		lemma: "ユニフォーム"
	},
	{
		rank: 9534,
		frequency: 4.48,
		lemma: "広がり"
	},
	{
		rank: 9535,
		frequency: 4.48,
		lemma: "ツリー"
	},
	{
		rank: 9536,
		frequency: 4.48,
		lemma: "チー"
	},
	{
		rank: 9537,
		frequency: 4.48,
		lemma: "暗黙"
	},
	{
		rank: 9538,
		frequency: 4.48,
		lemma: "奨学"
	},
	{
		rank: 9539,
		frequency: 4.48,
		lemma: "分かつ"
	},
	{
		rank: 9540,
		frequency: 4.48,
		lemma: "プロトコル"
	},
	{
		rank: 9541,
		frequency: 4.47,
		lemma: "トーン"
	},
	{
		rank: 9542,
		frequency: 4.47,
		lemma: "部位"
	},
	{
		rank: 9543,
		frequency: 4.47,
		lemma: "部活"
	},
	{
		rank: 9544,
		frequency: 4.47,
		lemma: "反戦"
	},
	{
		rank: 9545,
		frequency: 4.47,
		lemma: "オイラ"
	},
	{
		rank: 9546,
		frequency: 4.47,
		lemma: "むろん"
	},
	{
		rank: 9547,
		frequency: 4.47,
		lemma: "据える"
	},
	{
		rank: 9548,
		frequency: 4.47,
		lemma: "実名"
	},
	{
		rank: 9549,
		frequency: 4.47,
		lemma: "懐"
	},
	{
		rank: 9550,
		frequency: 4.47,
		lemma: "徹夜"
	},
	{
		rank: 9551,
		frequency: 4.47,
		lemma: "検事"
	},
	{
		rank: 9552,
		frequency: 4.47,
		lemma: "渡"
	},
	{
		rank: 9553,
		frequency: 4.47,
		lemma: "かご"
	},
	{
		rank: 9554,
		frequency: 4.47,
		lemma: "都度"
	},
	{
		rank: 9555,
		frequency: 4.47,
		lemma: "小山"
	},
	{
		rank: 9556,
		frequency: 4.47,
		lemma: "夕"
	},
	{
		rank: 9557,
		frequency: 4.47,
		lemma: "先発"
	},
	{
		rank: 9558,
		frequency: 4.46,
		lemma: "ウン"
	},
	{
		rank: 9559,
		frequency: 4.46,
		lemma: "受給"
	},
	{
		rank: 9560,
		frequency: 4.46,
		lemma: "本業"
	},
	{
		rank: 9561,
		frequency: 4.46,
		lemma: "メーター"
	},
	{
		rank: 9562,
		frequency: 4.46,
		lemma: "殺し"
	},
	{
		rank: 9563,
		frequency: 4.46,
		lemma: "スティック"
	},
	{
		rank: 9564,
		frequency: 4.46,
		lemma: "変容"
	},
	{
		rank: 9565,
		frequency: 4.46,
		lemma: "其の"
	},
	{
		rank: 9566,
		frequency: 4.46,
		lemma: "カツ"
	},
	{
		rank: 9567,
		frequency: 4.45,
		lemma: "チェロ"
	},
	{
		rank: 9568,
		frequency: 4.45,
		lemma: "飛"
	},
	{
		rank: 9569,
		frequency: 4.45,
		lemma: "ヒマ"
	},
	{
		rank: 9570,
		frequency: 4.45,
		lemma: "泰"
	},
	{
		rank: 9571,
		frequency: 4.45,
		lemma: "クルーズ"
	},
	{
		rank: 9572,
		frequency: 4.45,
		lemma: "あ〜"
	},
	{
		rank: 9573,
		frequency: 4.45,
		lemma: "是非とも"
	},
	{
		rank: 9574,
		frequency: 4.45,
		lemma: "トラウマ"
	},
	{
		rank: 9575,
		frequency: 4.45,
		lemma: "ライブラリ"
	},
	{
		rank: 9576,
		frequency: 4.45,
		lemma: "副業"
	},
	{
		rank: 9577,
		frequency: 4.45,
		lemma: "キャピタル"
	},
	{
		rank: 9578,
		frequency: 4.45,
		lemma: "舟"
	},
	{
		rank: 9579,
		frequency: 4.45,
		lemma: "聖堂"
	},
	{
		rank: 9580,
		frequency: 4.45,
		lemma: "送金"
	},
	{
		rank: 9581,
		frequency: 4.45,
		lemma: "リットル"
	},
	{
		rank: 9582,
		frequency: 4.45,
		lemma: "原案"
	},
	{
		rank: 9583,
		frequency: 4.45,
		lemma: "拡散"
	},
	{
		rank: 9584,
		frequency: 4.45,
		lemma: "準拠"
	},
	{
		rank: 9585,
		frequency: 4.45,
		lemma: "不愉快"
	},
	{
		rank: 9586,
		frequency: 4.45,
		lemma: "申し出る"
	},
	{
		rank: 9587,
		frequency: 4.45,
		lemma: "車椅子"
	},
	{
		rank: 9588,
		frequency: 4.45,
		lemma: "アシスタント"
	},
	{
		rank: 9589,
		frequency: 4.45,
		lemma: "校正"
	},
	{
		rank: 9590,
		frequency: 4.45,
		lemma: "アルゴリズム"
	},
	{
		rank: 9591,
		frequency: 4.44,
		lemma: "包装"
	},
	{
		rank: 9592,
		frequency: 4.44,
		lemma: "ヘタ"
	},
	{
		rank: 9593,
		frequency: 4.44,
		lemma: "後援"
	},
	{
		rank: 9594,
		frequency: 4.44,
		lemma: "泣ける"
	},
	{
		rank: 9595,
		frequency: 4.44,
		lemma: "育む"
	},
	{
		rank: 9596,
		frequency: 4.44,
		lemma: "ちら"
	},
	{
		rank: 9597,
		frequency: 4.44,
		lemma: "ベビー"
	},
	{
		rank: 9598,
		frequency: 4.43,
		lemma: "処方"
	},
	{
		rank: 9599,
		frequency: 4.43,
		lemma: "醜い"
	},
	{
		rank: 9600,
		frequency: 4.43,
		lemma: "はぐ"
	},
	{
		rank: 9601,
		frequency: 4.43,
		lemma: "はなし"
	},
	{
		rank: 9602,
		frequency: 4.43,
		lemma: "毎度"
	},
	{
		rank: 9603,
		frequency: 4.43,
		lemma: "ダイオキシン"
	},
	{
		rank: 9604,
		frequency: 4.43,
		lemma: "シリコンバレー"
	},
	{
		rank: 9605,
		frequency: 4.43,
		lemma: "読み込む"
	},
	{
		rank: 9606,
		frequency: 4.43,
		lemma: "隔離"
	},
	{
		rank: 9607,
		frequency: 4.43,
		lemma: "陣営"
	},
	{
		rank: 9608,
		frequency: 4.43,
		lemma: "骨折"
	},
	{
		rank: 9609,
		frequency: 4.43,
		lemma: "直結"
	},
	{
		rank: 9610,
		frequency: 4.43,
		lemma: "湾岸"
	},
	{
		rank: 9611,
		frequency: 4.43,
		lemma: "丸山"
	},
	{
		rank: 9612,
		frequency: 4.43,
		lemma: "不公平"
	},
	{
		rank: 9613,
		frequency: 4.42,
		lemma: "掲示"
	},
	{
		rank: 9614,
		frequency: 4.42,
		lemma: "封筒"
	},
	{
		rank: 9615,
		frequency: 4.42,
		lemma: "総数"
	},
	{
		rank: 9616,
		frequency: 4.42,
		lemma: "逝く"
	},
	{
		rank: 9617,
		frequency: 4.42,
		lemma: "談話"
	},
	{
		rank: 9618,
		frequency: 4.42,
		lemma: "只今"
	},
	{
		rank: 9619,
		frequency: 4.42,
		lemma: "或"
	},
	{
		rank: 9620,
		frequency: 4.42,
		lemma: "転落"
	},
	{
		rank: 9621,
		frequency: 4.42,
		lemma: "ヒトラー"
	},
	{
		rank: 9622,
		frequency: 4.42,
		lemma: "一人ひとり"
	},
	{
		rank: 9623,
		frequency: 4.42,
		lemma: "委任"
	},
	{
		rank: 9624,
		frequency: 4.42,
		lemma: "薬品"
	},
	{
		rank: 9625,
		frequency: 4.41,
		lemma: "ふだん"
	},
	{
		rank: 9626,
		frequency: 4.41,
		lemma: "頂戴"
	},
	{
		rank: 9627,
		frequency: 4.41,
		lemma: "一端"
	},
	{
		rank: 9628,
		frequency: 4.41,
		lemma: "冷却"
	},
	{
		rank: 9629,
		frequency: 4.41,
		lemma: "大雨"
	},
	{
		rank: 9630,
		frequency: 4.41,
		lemma: "ボロボロ"
	},
	{
		rank: 9631,
		frequency: 4.41,
		lemma: "台数"
	},
	{
		rank: 9632,
		frequency: 4.41,
		lemma: "崇拝"
	},
	{
		rank: 9633,
		frequency: 4.41,
		lemma: "念願"
	},
	{
		rank: 9634,
		frequency: 4.41,
		lemma: "ボーイ"
	},
	{
		rank: 9635,
		frequency: 4.41,
		lemma: "水中"
	},
	{
		rank: 9636,
		frequency: 4.41,
		lemma: "潰れる"
	},
	{
		rank: 9637,
		frequency: 4.41,
		lemma: "搾取"
	},
	{
		rank: 9638,
		frequency: 4.41,
		lemma: "試作"
	},
	{
		rank: 9639,
		frequency: 4.41,
		lemma: "意地"
	},
	{
		rank: 9640,
		frequency: 4.41,
		lemma: "定額"
	},
	{
		rank: 9641,
		frequency: 4.4,
		lemma: "暴力団"
	},
	{
		rank: 9642,
		frequency: 4.4,
		lemma: "なじむ"
	},
	{
		rank: 9643,
		frequency: 4.4,
		lemma: "賞賛"
	},
	{
		rank: 9644,
		frequency: 4.4,
		lemma: "あせる"
	},
	{
		rank: 9645,
		frequency: 4.4,
		lemma: "コネ"
	},
	{
		rank: 9646,
		frequency: 4.4,
		lemma: "ソナタ"
	},
	{
		rank: 9647,
		frequency: 4.4,
		lemma: "慢性"
	},
	{
		rank: 9648,
		frequency: 4.4,
		lemma: "プリンタ"
	},
	{
		rank: 9649,
		frequency: 4.39,
		lemma: "老後"
	},
	{
		rank: 9650,
		frequency: 4.39,
		lemma: "ネズミ"
	},
	{
		rank: 9651,
		frequency: 4.39,
		lemma: "ドロップ"
	},
	{
		rank: 9652,
		frequency: 4.39,
		lemma: "見本"
	},
	{
		rank: 9653,
		frequency: 4.39,
		lemma: "とい"
	},
	{
		rank: 9654,
		frequency: 4.39,
		lemma: "県知事"
	},
	{
		rank: 9655,
		frequency: 4.39,
		lemma: "侵攻"
	},
	{
		rank: 9656,
		frequency: 4.39,
		lemma: "品川"
	},
	{
		rank: 9657,
		frequency: 4.39,
		lemma: "引き下げる"
	},
	{
		rank: 9658,
		frequency: 4.39,
		lemma: "北側"
	},
	{
		rank: 9659,
		frequency: 4.39,
		lemma: "読み取る"
	},
	{
		rank: 9660,
		frequency: 4.39,
		lemma: "愛好"
	},
	{
		rank: 9661,
		frequency: 4.39,
		lemma: "葬式"
	},
	{
		rank: 9662,
		frequency: 4.39,
		lemma: "産婆"
	},
	{
		rank: 9663,
		frequency: 4.39,
		lemma: "イノベーション"
	},
	{
		rank: 9664,
		frequency: 4.39,
		lemma: "引き込む"
	},
	{
		rank: 9665,
		frequency: 4.39,
		lemma: "泡"
	},
	{
		rank: 9666,
		frequency: 4.39,
		lemma: "麻酔"
	},
	{
		rank: 9667,
		frequency: 4.39,
		lemma: "修習"
	},
	{
		rank: 9668,
		frequency: 4.38,
		lemma: "ターミナル"
	},
	{
		rank: 9669,
		frequency: 4.38,
		lemma: "三木"
	},
	{
		rank: 9670,
		frequency: 4.38,
		lemma: "小笠原"
	},
	{
		rank: 9671,
		frequency: 4.38,
		lemma: "化石"
	},
	{
		rank: 9672,
		frequency: 4.38,
		lemma: "過ち"
	},
	{
		rank: 9673,
		frequency: 4.38,
		lemma: "コメディ"
	},
	{
		rank: 9674,
		frequency: 4.37,
		lemma: "手渡す"
	},
	{
		rank: 9675,
		frequency: 4.37,
		lemma: "荘"
	},
	{
		rank: 9676,
		frequency: 4.37,
		lemma: "転勤"
	},
	{
		rank: 9677,
		frequency: 4.37,
		lemma: "ふるさと"
	},
	{
		rank: 9678,
		frequency: 4.37,
		lemma: "理不尽"
	},
	{
		rank: 9679,
		frequency: 4.37,
		lemma: "申し出"
	},
	{
		rank: 9680,
		frequency: 4.37,
		lemma: "三井"
	},
	{
		rank: 9681,
		frequency: 4.37,
		lemma: "明快"
	},
	{
		rank: 9682,
		frequency: 4.37,
		lemma: "むら"
	},
	{
		rank: 9683,
		frequency: 4.37,
		lemma: "列島"
	},
	{
		rank: 9684,
		frequency: 4.37,
		lemma: "ヒデ"
	},
	{
		rank: 9685,
		frequency: 4.37,
		lemma: "傍"
	},
	{
		rank: 9686,
		frequency: 4.37,
		lemma: "オト"
	},
	{
		rank: 9687,
		frequency: 4.37,
		lemma: "行進"
	},
	{
		rank: 9688,
		frequency: 4.37,
		lemma: "詰め込む"
	},
	{
		rank: 9689,
		frequency: 4.37,
		lemma: "ちの"
	},
	{
		rank: 9690,
		frequency: 4.37,
		lemma: "省く"
	},
	{
		rank: 9691,
		frequency: 4.37,
		lemma: "公庫"
	},
	{
		rank: 9692,
		frequency: 4.36,
		lemma: "おなじ"
	},
	{
		rank: 9693,
		frequency: 4.36,
		lemma: "公述"
	},
	{
		rank: 9694,
		frequency: 4.36,
		lemma: "知覚"
	},
	{
		rank: 9695,
		frequency: 4.36,
		lemma: "歴代"
	},
	{
		rank: 9696,
		frequency: 4.36,
		lemma: "北村"
	},
	{
		rank: 9697,
		frequency: 4.36,
		lemma: "簡素"
	},
	{
		rank: 9698,
		frequency: 4.36,
		lemma: "寛容"
	},
	{
		rank: 9699,
		frequency: 4.36,
		lemma: "解読"
	},
	{
		rank: 9700,
		frequency: 4.36,
		lemma: "淡い"
	},
	{
		rank: 9701,
		frequency: 4.36,
		lemma: "汎用"
	},
	{
		rank: 9702,
		frequency: 4.36,
		lemma: "垂直"
	},
	{
		rank: 9703,
		frequency: 4.36,
		lemma: "キミ"
	},
	{
		rank: 9704,
		frequency: 4.36,
		lemma: "セクシー"
	},
	{
		rank: 9705,
		frequency: 4.36,
		lemma: "コーディネーター"
	},
	{
		rank: 9706,
		frequency: 4.36,
		lemma: "歩ける"
	},
	{
		rank: 9707,
		frequency: 4.36,
		lemma: "グッド"
	},
	{
		rank: 9708,
		frequency: 4.35,
		lemma: "近況"
	},
	{
		rank: 9709,
		frequency: 4.35,
		lemma: "鳩"
	},
	{
		rank: 9710,
		frequency: 4.35,
		lemma: "悪夢"
	},
	{
		rank: 9711,
		frequency: 4.35,
		lemma: "中級"
	},
	{
		rank: 9712,
		frequency: 4.35,
		lemma: "ＯＢ"
	},
	{
		rank: 9713,
		frequency: 4.35,
		lemma: "軍団"
	},
	{
		rank: 9714,
		frequency: 4.35,
		lemma: "セキュリティー"
	},
	{
		rank: 9715,
		frequency: 4.35,
		lemma: "ノード"
	},
	{
		rank: 9716,
		frequency: 4.35,
		lemma: "夕飯"
	},
	{
		rank: 9717,
		frequency: 4.35,
		lemma: "こんど"
	},
	{
		rank: 9718,
		frequency: 4.35,
		lemma: "予期"
	},
	{
		rank: 9719,
		frequency: 4.35,
		lemma: "不気味"
	},
	{
		rank: 9720,
		frequency: 4.35,
		lemma: "過失"
	},
	{
		rank: 9721,
		frequency: 4.35,
		lemma: "特異"
	},
	{
		rank: 9722,
		frequency: 4.35,
		lemma: "木々"
	},
	{
		rank: 9723,
		frequency: 4.35,
		lemma: "バスク"
	},
	{
		rank: 9724,
		frequency: 4.35,
		lemma: "接点"
	},
	{
		rank: 9725,
		frequency: 4.35,
		lemma: "変遷"
	},
	{
		rank: 9726,
		frequency: 4.35,
		lemma: "嗜好"
	},
	{
		rank: 9727,
		frequency: 4.35,
		lemma: "すう"
	},
	{
		rank: 9728,
		frequency: 4.35,
		lemma: "不利益"
	},
	{
		rank: 9729,
		frequency: 4.34,
		lemma: "いいえ"
	},
	{
		rank: 9730,
		frequency: 4.34,
		lemma: "ヨハネ"
	},
	{
		rank: 9731,
		frequency: 4.34,
		lemma: "トリック"
	},
	{
		rank: 9732,
		frequency: 4.34,
		lemma: "定食"
	},
	{
		rank: 9733,
		frequency: 4.34,
		lemma: "赤ん坊"
	},
	{
		rank: 9734,
		frequency: 4.34,
		lemma: "大作"
	},
	{
		rank: 9735,
		frequency: 4.34,
		lemma: "サンド"
	},
	{
		rank: 9736,
		frequency: 4.34,
		lemma: "柳"
	},
	{
		rank: 9737,
		frequency: 4.34,
		lemma: "軽視"
	},
	{
		rank: 9738,
		frequency: 4.34,
		lemma: "任す"
	},
	{
		rank: 9739,
		frequency: 4.34,
		lemma: "マグロ"
	},
	{
		rank: 9740,
		frequency: 4.34,
		lemma: "要注意"
	},
	{
		rank: 9741,
		frequency: 4.33,
		lemma: "見舞う"
	},
	{
		rank: 9742,
		frequency: 4.33,
		lemma: "暴れる"
	},
	{
		rank: 9743,
		frequency: 4.33,
		lemma: "バリバリ"
	},
	{
		rank: 9744,
		frequency: 4.33,
		lemma: "田んぼ"
	},
	{
		rank: 9745,
		frequency: 4.33,
		lemma: "不備"
	},
	{
		rank: 9746,
		frequency: 4.33,
		lemma: "ボクシング"
	},
	{
		rank: 9747,
		frequency: 4.33,
		lemma: "雑"
	},
	{
		rank: 9748,
		frequency: 4.33,
		lemma: "目録"
	},
	{
		rank: 9749,
		frequency: 4.33,
		lemma: "手塚"
	},
	{
		rank: 9750,
		frequency: 4.33,
		lemma: "勘案"
	},
	{
		rank: 9751,
		frequency: 4.33,
		lemma: "工藤"
	},
	{
		rank: 9752,
		frequency: 4.33,
		lemma: "お出かけ"
	},
	{
		rank: 9753,
		frequency: 4.33,
		lemma: "巻き"
	},
	{
		rank: 9754,
		frequency: 4.33,
		lemma: "宅配"
	},
	{
		rank: 9755,
		frequency: 4.33,
		lemma: "ラテン"
	},
	{
		rank: 9756,
		frequency: 4.33,
		lemma: "峠"
	},
	{
		rank: 9757,
		frequency: 4.33,
		lemma: "とある"
	},
	{
		rank: 9758,
		frequency: 4.32,
		lemma: "宝くじ"
	},
	{
		rank: 9759,
		frequency: 4.32,
		lemma: "テキサス"
	},
	{
		rank: 9760,
		frequency: 4.32,
		lemma: "いと"
	},
	{
		rank: 9761,
		frequency: 4.32,
		lemma: "解禁"
	},
	{
		rank: 9762,
		frequency: 4.32,
		lemma: "尿"
	},
	{
		rank: 9763,
		frequency: 4.32,
		lemma: "隠蔽"
	},
	{
		rank: 9764,
		frequency: 4.32,
		lemma: "典"
	},
	{
		rank: 9765,
		frequency: 4.32,
		lemma: "トス"
	},
	{
		rank: 9766,
		frequency: 4.31,
		lemma: "啓"
	},
	{
		rank: 9767,
		frequency: 4.31,
		lemma: "レター"
	},
	{
		rank: 9768,
		frequency: 4.31,
		lemma: "クリーン"
	},
	{
		rank: 9769,
		frequency: 4.31,
		lemma: "ヤクザ"
	},
	{
		rank: 9770,
		frequency: 4.31,
		lemma: "ゴメン"
	},
	{
		rank: 9771,
		frequency: 4.31,
		lemma: "猛烈"
	},
	{
		rank: 9772,
		frequency: 4.31,
		lemma: "サラ"
	},
	{
		rank: 9773,
		frequency: 4.31,
		lemma: "Ｚ"
	},
	{
		rank: 9774,
		frequency: 4.31,
		lemma: "中枢"
	},
	{
		rank: 9775,
		frequency: 4.31,
		lemma: "女児"
	},
	{
		rank: 9776,
		frequency: 4.31,
		lemma: "学位"
	},
	{
		rank: 9777,
		frequency: 4.31,
		lemma: "一挙"
	},
	{
		rank: 9778,
		frequency: 4.31,
		lemma: "内定"
	},
	{
		rank: 9779,
		frequency: 4.31,
		lemma: "カルロス"
	},
	{
		rank: 9780,
		frequency: 4.31,
		lemma: "生体"
	},
	{
		rank: 9781,
		frequency: 4.31,
		lemma: "血圧"
	},
	{
		rank: 9782,
		frequency: 4.31,
		lemma: "養護"
	},
	{
		rank: 9783,
		frequency: 4.31,
		lemma: "アイスランド"
	},
	{
		rank: 9784,
		frequency: 4.31,
		lemma: "ヨット"
	},
	{
		rank: 9785,
		frequency: 4.31,
		lemma: "ハズ"
	},
	{
		rank: 9786,
		frequency: 4.31,
		lemma: "ここら"
	},
	{
		rank: 9787,
		frequency: 4.31,
		lemma: "出費"
	},
	{
		rank: 9788,
		frequency: 4.31,
		lemma: "酵素"
	},
	{
		rank: 9789,
		frequency: 4.31,
		lemma: "厳重"
	},
	{
		rank: 9790,
		frequency: 4.31,
		lemma: "税関"
	},
	{
		rank: 9791,
		frequency: 4.31,
		lemma: "混同"
	},
	{
		rank: 9792,
		frequency: 4.31,
		lemma: "うんざり"
	},
	{
		rank: 9793,
		frequency: 4.31,
		lemma: "日差し"
	},
	{
		rank: 9794,
		frequency: 4.3,
		lemma: "ヒューマン"
	},
	{
		rank: 9795,
		frequency: 4.3,
		lemma: "果実"
	},
	{
		rank: 9796,
		frequency: 4.3,
		lemma: "執着"
	},
	{
		rank: 9797,
		frequency: 4.3,
		lemma: "反乱"
	},
	{
		rank: 9798,
		frequency: 4.3,
		lemma: "介助"
	},
	{
		rank: 9799,
		frequency: 4.3,
		lemma: "対価"
	},
	{
		rank: 9800,
		frequency: 4.3,
		lemma: "標本"
	},
	{
		rank: 9801,
		frequency: 4.3,
		lemma: "モチーフ"
	},
	{
		rank: 9802,
		frequency: 4.3,
		lemma: "金儲け"
	},
	{
		rank: 9803,
		frequency: 4.3,
		lemma: "神さま"
	},
	{
		rank: 9804,
		frequency: 4.3,
		lemma: "入れ"
	},
	{
		rank: 9805,
		frequency: 4.3,
		lemma: "焼却"
	},
	{
		rank: 9806,
		frequency: 4.3,
		lemma: "弾ける"
	},
	{
		rank: 9807,
		frequency: 4.3,
		lemma: "母国"
	},
	{
		rank: 9808,
		frequency: 4.3,
		lemma: "カンファレンス"
	},
	{
		rank: 9809,
		frequency: 4.3,
		lemma: "とことん"
	},
	{
		rank: 9810,
		frequency: 4.3,
		lemma: "柔軟性"
	},
	{
		rank: 9811,
		frequency: 4.3,
		lemma: "税法"
	},
	{
		rank: 9812,
		frequency: 4.3,
		lemma: "投げかける"
	},
	{
		rank: 9813,
		frequency: 4.3,
		lemma: "下り"
	},
	{
		rank: 9814,
		frequency: 4.3,
		lemma: "被疑"
	},
	{
		rank: 9815,
		frequency: 4.29,
		lemma: "目下"
	},
	{
		rank: 9816,
		frequency: 4.29,
		lemma: "なみ"
	},
	{
		rank: 9817,
		frequency: 4.29,
		lemma: "ギア"
	},
	{
		rank: 9818,
		frequency: 4.29,
		lemma: "芝生"
	},
	{
		rank: 9819,
		frequency: 4.29,
		lemma: "操縦"
	},
	{
		rank: 9820,
		frequency: 4.29,
		lemma: "ケガ"
	},
	{
		rank: 9821,
		frequency: 4.29,
		lemma: "散々"
	},
	{
		rank: 9822,
		frequency: 4.29,
		lemma: "テラス"
	},
	{
		rank: 9823,
		frequency: 4.29,
		lemma: "怒鳴る"
	},
	{
		rank: 9824,
		frequency: 4.29,
		lemma: "年数"
	},
	{
		rank: 9825,
		frequency: 4.29,
		lemma: "つめ"
	},
	{
		rank: 9826,
		frequency: 4.29,
		lemma: "ひまわり"
	},
	{
		rank: 9827,
		frequency: 4.29,
		lemma: "それだけに"
	},
	{
		rank: 9828,
		frequency: 4.29,
		lemma: "功績"
	},
	{
		rank: 9829,
		frequency: 4.28,
		lemma: "特急"
	},
	{
		rank: 9830,
		frequency: 4.28,
		lemma: "昇格"
	},
	{
		rank: 9831,
		frequency: 4.28,
		lemma: "拒む"
	},
	{
		rank: 9832,
		frequency: 4.28,
		lemma: "遅延"
	},
	{
		rank: 9833,
		frequency: 4.28,
		lemma: "狩猟"
	},
	{
		rank: 9834,
		frequency: 4.28,
		lemma: "捕らえる"
	},
	{
		rank: 9835,
		frequency: 4.28,
		lemma: "務"
	},
	{
		rank: 9836,
		frequency: 4.28,
		lemma: "若しくは"
	},
	{
		rank: 9837,
		frequency: 4.28,
		lemma: "香川"
	},
	{
		rank: 9838,
		frequency: 4.28,
		lemma: "手放す"
	},
	{
		rank: 9839,
		frequency: 4.28,
		lemma: "コマーシャル"
	},
	{
		rank: 9840,
		frequency: 4.28,
		lemma: "長期間"
	},
	{
		rank: 9841,
		frequency: 4.28,
		lemma: "下車"
	},
	{
		rank: 9842,
		frequency: 4.28,
		lemma: "さりげ"
	},
	{
		rank: 9843,
		frequency: 4.28,
		lemma: "一方で"
	},
	{
		rank: 9844,
		frequency: 4.27,
		lemma: "帰省"
	},
	{
		rank: 9845,
		frequency: 4.27,
		lemma: "待たす"
	},
	{
		rank: 9846,
		frequency: 4.27,
		lemma: "ペットボトル"
	},
	{
		rank: 9847,
		frequency: 4.27,
		lemma: "プロバイダー"
	},
	{
		rank: 9848,
		frequency: 4.27,
		lemma: "届"
	},
	{
		rank: 9849,
		frequency: 4.27,
		lemma: "ヨーグルト"
	},
	{
		rank: 9850,
		frequency: 4.27,
		lemma: "ちょこっと"
	},
	{
		rank: 9851,
		frequency: 4.27,
		lemma: "合戦"
	},
	{
		rank: 9852,
		frequency: 4.27,
		lemma: "郵政省"
	},
	{
		rank: 9853,
		frequency: 4.27,
		lemma: "杖"
	},
	{
		rank: 9854,
		frequency: 4.27,
		lemma: "惚れる"
	},
	{
		rank: 9855,
		frequency: 4.27,
		lemma: "園芸"
	},
	{
		rank: 9856,
		frequency: 4.26,
		lemma: "おじいさん"
	},
	{
		rank: 9857,
		frequency: 4.26,
		lemma: "ＮＹ"
	},
	{
		rank: 9858,
		frequency: 4.26,
		lemma: "配線"
	},
	{
		rank: 9859,
		frequency: 4.26,
		lemma: "呉"
	},
	{
		rank: 9860,
		frequency: 4.26,
		lemma: "カビ"
	},
	{
		rank: 9861,
		frequency: 4.26,
		lemma: "云"
	},
	{
		rank: 9862,
		frequency: 4.26,
		lemma: "振込"
	},
	{
		rank: 9863,
		frequency: 4.26,
		lemma: "羽田"
	},
	{
		rank: 9864,
		frequency: 4.26,
		lemma: "こわい"
	},
	{
		rank: 9865,
		frequency: 4.26,
		lemma: "定時"
	},
	{
		rank: 9866,
		frequency: 4.26,
		lemma: "米ドル"
	},
	{
		rank: 9867,
		frequency: 4.26,
		lemma: "一品"
	},
	{
		rank: 9868,
		frequency: 4.26,
		lemma: "根幹"
	},
	{
		rank: 9869,
		frequency: 4.26,
		lemma: "シアトル"
	},
	{
		rank: 9870,
		frequency: 4.26,
		lemma: "アッ"
	},
	{
		rank: 9871,
		frequency: 4.26,
		lemma: "松岡"
	},
	{
		rank: 9872,
		frequency: 4.26,
		lemma: "隙"
	},
	{
		rank: 9873,
		frequency: 4.25,
		lemma: "まあまあ"
	},
	{
		rank: 9874,
		frequency: 4.25,
		lemma: "一周"
	},
	{
		rank: 9875,
		frequency: 4.25,
		lemma: "タブー"
	},
	{
		rank: 9876,
		frequency: 4.25,
		lemma: "無条件"
	},
	{
		rank: 9877,
		frequency: 4.25,
		lemma: "来場"
	},
	{
		rank: 9878,
		frequency: 4.25,
		lemma: "艦隊"
	},
	{
		rank: 9879,
		frequency: 4.25,
		lemma: "安値"
	},
	{
		rank: 9880,
		frequency: 4.25,
		lemma: "チェンジ"
	},
	{
		rank: 9881,
		frequency: 4.25,
		lemma: "前線"
	},
	{
		rank: 9882,
		frequency: 4.25,
		lemma: "手がかり"
	},
	{
		rank: 9883,
		frequency: 4.25,
		lemma: "ひっかかる"
	},
	{
		rank: 9884,
		frequency: 4.25,
		lemma: "一向に"
	},
	{
		rank: 9885,
		frequency: 4.25,
		lemma: "奄美"
	},
	{
		rank: 9886,
		frequency: 4.25,
		lemma: "殺到"
	},
	{
		rank: 9887,
		frequency: 4.24,
		lemma: "利息"
	},
	{
		rank: 9888,
		frequency: 4.24,
		lemma: "チャールズ"
	},
	{
		rank: 9889,
		frequency: 4.24,
		lemma: "シャン"
	},
	{
		rank: 9890,
		frequency: 4.24,
		lemma: "低減"
	},
	{
		rank: 9891,
		frequency: 4.24,
		lemma: "通産"
	},
	{
		rank: 9892,
		frequency: 4.24,
		lemma: "傲慢"
	},
	{
		rank: 9893,
		frequency: 4.24,
		lemma: "ジェームス"
	},
	{
		rank: 9894,
		frequency: 4.24,
		lemma: "桂"
	},
	{
		rank: 9895,
		frequency: 4.24,
		lemma: "プラント"
	},
	{
		rank: 9896,
		frequency: 4.24,
		lemma: "ふざける"
	},
	{
		rank: 9897,
		frequency: 4.24,
		lemma: "かんじる"
	},
	{
		rank: 9898,
		frequency: 4.24,
		lemma: "扶養"
	},
	{
		rank: 9899,
		frequency: 4.24,
		lemma: "お家"
	},
	{
		rank: 9900,
		frequency: 4.24,
		lemma: "残留"
	},
	{
		rank: 9901,
		frequency: 4.24,
		lemma: "ハゲ"
	},
	{
		rank: 9902,
		frequency: 4.24,
		lemma: "ガンガン"
	},
	{
		rank: 9903,
		frequency: 4.24,
		lemma: "ラック"
	},
	{
		rank: 9904,
		frequency: 4.24,
		lemma: "陽子"
	},
	{
		rank: 9905,
		frequency: 4.24,
		lemma: "早くから"
	},
	{
		rank: 9906,
		frequency: 4.23,
		lemma: "アラン"
	},
	{
		rank: 9907,
		frequency: 4.23,
		lemma: "なぞ"
	},
	{
		rank: 9908,
		frequency: 4.23,
		lemma: "増田"
	},
	{
		rank: 9909,
		frequency: 4.23,
		lemma: "アンプ"
	},
	{
		rank: 9910,
		frequency: 4.23,
		lemma: "染まる"
	},
	{
		rank: 9911,
		frequency: 4.23,
		lemma: "就寝"
	},
	{
		rank: 9912,
		frequency: 4.23,
		lemma: "ディフェンス"
	},
	{
		rank: 9913,
		frequency: 4.23,
		lemma: "ピンチ"
	},
	{
		rank: 9914,
		frequency: 4.23,
		lemma: "琴"
	},
	{
		rank: 9915,
		frequency: 4.23,
		lemma: "快い"
	},
	{
		rank: 9916,
		frequency: 4.23,
		lemma: "たずねる"
	},
	{
		rank: 9917,
		frequency: 4.23,
		lemma: "終結"
	},
	{
		rank: 9918,
		frequency: 4.23,
		lemma: "冠"
	},
	{
		rank: 9919,
		frequency: 4.22,
		lemma: "かかえる"
	},
	{
		rank: 9920,
		frequency: 4.22,
		lemma: "本家"
	},
	{
		rank: 9921,
		frequency: 4.22,
		lemma: "スターリン"
	},
	{
		rank: 9922,
		frequency: 4.22,
		lemma: "面白"
	},
	{
		rank: 9923,
		frequency: 4.22,
		lemma: "留守"
	},
	{
		rank: 9924,
		frequency: 4.22,
		lemma: "音量"
	},
	{
		rank: 9925,
		frequency: 4.22,
		lemma: "月間"
	},
	{
		rank: 9926,
		frequency: 4.22,
		lemma: "無論"
	},
	{
		rank: 9927,
		frequency: 4.22,
		lemma: "ハラ"
	},
	{
		rank: 9928,
		frequency: 4.22,
		lemma: "笑み"
	},
	{
		rank: 9929,
		frequency: 4.22,
		lemma: "ゆかり"
	},
	{
		rank: 9930,
		frequency: 4.22,
		lemma: "みどり"
	},
	{
		rank: 9931,
		frequency: 4.22,
		lemma: "天体"
	},
	{
		rank: 9932,
		frequency: 4.22,
		lemma: "柏崎"
	},
	{
		rank: 9933,
		frequency: 4.22,
		lemma: "ジュン"
	},
	{
		rank: 9934,
		frequency: 4.22,
		lemma: "何しろ"
	},
	{
		rank: 9935,
		frequency: 4.22,
		lemma: "カラ"
	},
	{
		rank: 9936,
		frequency: 4.22,
		lemma: "しづ"
	},
	{
		rank: 9937,
		frequency: 4.22,
		lemma: "フットボール"
	},
	{
		rank: 9938,
		frequency: 4.22,
		lemma: "帰"
	},
	{
		rank: 9939,
		frequency: 4.21,
		lemma: "絶つ"
	},
	{
		rank: 9940,
		frequency: 4.21,
		lemma: "薄れる"
	},
	{
		rank: 9941,
		frequency: 4.21,
		lemma: "停電"
	},
	{
		rank: 9942,
		frequency: 4.21,
		lemma: "アクティブ"
	},
	{
		rank: 9943,
		frequency: 4.21,
		lemma: "ナイス"
	},
	{
		rank: 9944,
		frequency: 4.21,
		lemma: "イルカ"
	},
	{
		rank: 9945,
		frequency: 4.21,
		lemma: "逸脱"
	},
	{
		rank: 9946,
		frequency: 4.21,
		lemma: "スキ"
	},
	{
		rank: 9947,
		frequency: 4.21,
		lemma: "糞"
	},
	{
		rank: 9948,
		frequency: 4.21,
		lemma: "ホームレス"
	},
	{
		rank: 9949,
		frequency: 4.21,
		lemma: "申立"
	},
	{
		rank: 9950,
		frequency: 4.21,
		lemma: "ひとまず"
	},
	{
		rank: 9951,
		frequency: 4.21,
		lemma: "ステーキ"
	},
	{
		rank: 9952,
		frequency: 4.21,
		lemma: "立候補"
	},
	{
		rank: 9953,
		frequency: 4.21,
		lemma: "老舗"
	},
	{
		rank: 9954,
		frequency: 4.21,
		lemma: "発酵"
	},
	{
		rank: 9955,
		frequency: 4.2,
		lemma: "こんなふうに"
	},
	{
		rank: 9956,
		frequency: 4.2,
		lemma: "補"
	},
	{
		rank: 9957,
		frequency: 4.2,
		lemma: "誘致"
	},
	{
		rank: 9958,
		frequency: 4.2,
		lemma: "釈放"
	},
	{
		rank: 9959,
		frequency: 4.2,
		lemma: "温"
	},
	{
		rank: 9960,
		frequency: 4.2,
		lemma: "インディアン"
	},
	{
		rank: 9961,
		frequency: 4.2,
		lemma: "灰"
	},
	{
		rank: 9962,
		frequency: 4.2,
		lemma: "ボロい"
	},
	{
		rank: 9963,
		frequency: 4.2,
		lemma: "処遇"
	},
	{
		rank: 9964,
		frequency: 4.2,
		lemma: "セルフ"
	},
	{
		rank: 9965,
		frequency: 4.2,
		lemma: "半額"
	},
	{
		rank: 9966,
		frequency: 4.2,
		lemma: "見積もり"
	},
	{
		rank: 9967,
		frequency: 4.2,
		lemma: "通告"
	},
	{
		rank: 9968,
		frequency: 4.2,
		lemma: "王朝"
	},
	{
		rank: 9969,
		frequency: 4.2,
		lemma: "西川"
	},
	{
		rank: 9970,
		frequency: 4.2,
		lemma: "ロサンゼルス"
	},
	{
		rank: 9971,
		frequency: 4.2,
		lemma: "破棄"
	},
	{
		rank: 9972,
		frequency: 4.2,
		lemma: "探査"
	},
	{
		rank: 9973,
		frequency: 4.2,
		lemma: "救援"
	},
	{
		rank: 9974,
		frequency: 4.19,
		lemma: "晒す"
	},
	{
		rank: 9975,
		frequency: 4.19,
		lemma: "農園"
	},
	{
		rank: 9976,
		frequency: 4.19,
		lemma: "連ねる"
	},
	{
		rank: 9977,
		frequency: 4.19,
		lemma: "ユニバーサル"
	},
	{
		rank: 9978,
		frequency: 4.19,
		lemma: "横田"
	},
	{
		rank: 9979,
		frequency: 4.19,
		lemma: "投下"
	},
	{
		rank: 9980,
		frequency: 4.19,
		lemma: "鋼"
	},
	{
		rank: 9981,
		frequency: 4.19,
		lemma: "抑止"
	},
	{
		rank: 9982,
		frequency: 4.19,
		lemma: "待ち合わせ"
	},
	{
		rank: 9983,
		frequency: 4.19,
		lemma: "プロレタリアート"
	},
	{
		rank: 9984,
		frequency: 4.19,
		lemma: "ウサギ"
	},
	{
		rank: 9985,
		frequency: 4.19,
		lemma: "自爆"
	},
	{
		rank: 9986,
		frequency: 4.18,
		lemma: "北九州"
	},
	{
		rank: 9987,
		frequency: 4.18,
		lemma: "おにぎり"
	},
	{
		rank: 9988,
		frequency: 4.18,
		lemma: "とりあげる"
	},
	{
		rank: 9989,
		frequency: 4.18,
		lemma: "見物"
	},
	{
		rank: 9990,
		frequency: 4.18,
		lemma: "打てる"
	},
	{
		rank: 9991,
		frequency: 4.18,
		lemma: "当地"
	},
	{
		rank: 9992,
		frequency: 4.18,
		lemma: "ガール"
	},
	{
		rank: 9993,
		frequency: 4.18,
		lemma: "一度に"
	},
	{
		rank: 9994,
		frequency: 4.18,
		lemma: "うなずく"
	},
	{
		rank: 9995,
		frequency: 4.18,
		lemma: "過半数"
	},
	{
		rank: 9996,
		frequency: 4.18,
		lemma: "メンタル"
	},
	{
		rank: 9997,
		frequency: 4.18,
		lemma: "上がり"
	},
	{
		rank: 9998,
		frequency: 4.18,
		lemma: "サマ"
	},
	{
		rank: 9999,
		frequency: 4.18,
		lemma: "紐"
	},
	{
		rank: 10000,
		frequency: 4.17,
		lemma: "標的"
	},
	{
		rank: 10001,
		frequency: 4.17,
		lemma: "君が代"
	},
	{
		rank: 10002,
		frequency: 4.17,
		lemma: "改札"
	},
	{
		rank: 10003,
		frequency: 4.17,
		lemma: "悲しむ"
	},
	{
		rank: 10004,
		frequency: 4.17,
		lemma: "打ち"
	},
	{
		rank: 10005,
		frequency: 4.17,
		lemma: "インサイダー"
	},
	{
		rank: 10006,
		frequency: 4.17,
		lemma: "しくむ"
	},
	{
		rank: 10007,
		frequency: 4.17,
		lemma: "トレーダー"
	},
	{
		rank: 10008,
		frequency: 4.17,
		lemma: "麻雀"
	},
	{
		rank: 10009,
		frequency: 4.17,
		lemma: "年配"
	},
	{
		rank: 10010,
		frequency: 4.17,
		lemma: "くら"
	},
	{
		rank: 10011,
		frequency: 4.16,
		lemma: "浅草"
	},
	{
		rank: 10012,
		frequency: 4.16,
		lemma: "切り口"
	},
	{
		rank: 10013,
		frequency: 4.16,
		lemma: "地蔵"
	},
	{
		rank: 10014,
		frequency: 4.16,
		lemma: "引っ越し"
	},
	{
		rank: 10015,
		frequency: 4.16,
		lemma: "美味"
	},
	{
		rank: 10016,
		frequency: 4.16,
		lemma: "無理矢理"
	},
	{
		rank: 10017,
		frequency: 4.16,
		lemma: "手伝い"
	},
	{
		rank: 10018,
		frequency: 4.16,
		lemma: "童話"
	},
	{
		rank: 10019,
		frequency: 4.16,
		lemma: "秘"
	},
	{
		rank: 10020,
		frequency: 4.16,
		lemma: "うに"
	},
	{
		rank: 10021,
		frequency: 4.16,
		lemma: "ヘル"
	},
	{
		rank: 10022,
		frequency: 4.16,
		lemma: "洗浄"
	},
	{
		rank: 10023,
		frequency: 4.16,
		lemma: "失"
	},
	{
		rank: 10024,
		frequency: 4.16,
		lemma: "洗脳"
	},
	{
		rank: 10025,
		frequency: 4.16,
		lemma: "接"
	},
	{
		rank: 10026,
		frequency: 4.16,
		lemma: "一人暮らし"
	},
	{
		rank: 10027,
		frequency: 4.16,
		lemma: "加熱"
	},
	{
		rank: 10028,
		frequency: 4.16,
		lemma: "切り替え"
	},
	{
		rank: 10029,
		frequency: 4.16,
		lemma: "レコーディング"
	},
	{
		rank: 10030,
		frequency: 4.16,
		lemma: "ビジュアル"
	},
	{
		rank: 10031,
		frequency: 4.16,
		lemma: "モニタ"
	},
	{
		rank: 10032,
		frequency: 4.16,
		lemma: "貸付"
	},
	{
		rank: 10033,
		frequency: 4.16,
		lemma: "清算"
	},
	{
		rank: 10034,
		frequency: 4.15,
		lemma: "名所"
	},
	{
		rank: 10035,
		frequency: 4.15,
		lemma: "輩"
	},
	{
		rank: 10036,
		frequency: 4.15,
		lemma: "かわす"
	},
	{
		rank: 10037,
		frequency: 4.15,
		lemma: "げん"
	},
	{
		rank: 10038,
		frequency: 4.15,
		lemma: "培う"
	},
	{
		rank: 10039,
		frequency: 4.15,
		lemma: "純一郎"
	},
	{
		rank: 10040,
		frequency: 4.15,
		lemma: "所在地"
	},
	{
		rank: 10041,
		frequency: 4.15,
		lemma: "人道"
	},
	{
		rank: 10042,
		frequency: 4.15,
		lemma: "気圧"
	},
	{
		rank: 10043,
		frequency: 4.15,
		lemma: "見失う"
	},
	{
		rank: 10044,
		frequency: 4.15,
		lemma: "ディン"
	},
	{
		rank: 10045,
		frequency: 4.15,
		lemma: "下部"
	},
	{
		rank: 10046,
		frequency: 4.15,
		lemma: "ｋｇ"
	},
	{
		rank: 10047,
		frequency: 4.15,
		lemma: "見習う"
	},
	{
		rank: 10048,
		frequency: 4.15,
		lemma: "踏み切る"
	},
	{
		rank: 10049,
		frequency: 4.15,
		lemma: "歪む"
	},
	{
		rank: 10050,
		frequency: 4.15,
		lemma: "独創"
	},
	{
		rank: 10051,
		frequency: 4.15,
		lemma: "ナンパ"
	},
	{
		rank: 10052,
		frequency: 4.15,
		lemma: "同窓会"
	},
	{
		rank: 10053,
		frequency: 4.15,
		lemma: "凍る"
	},
	{
		rank: 10054,
		frequency: 4.14,
		lemma: "戴く"
	},
	{
		rank: 10055,
		frequency: 4.14,
		lemma: "歌舞伎"
	},
	{
		rank: 10056,
		frequency: 4.14,
		lemma: "父母"
	},
	{
		rank: 10057,
		frequency: 4.14,
		lemma: "干す"
	},
	{
		rank: 10058,
		frequency: 4.14,
		lemma: "要す"
	},
	{
		rank: 10059,
		frequency: 4.14,
		lemma: "おかけ"
	},
	{
		rank: 10060,
		frequency: 4.14,
		lemma: "写"
	},
	{
		rank: 10061,
		frequency: 4.14,
		lemma: "洗剤"
	},
	{
		rank: 10062,
		frequency: 4.13,
		lemma: "運送"
	},
	{
		rank: 10063,
		frequency: 4.13,
		lemma: "高山"
	},
	{
		rank: 10064,
		frequency: 4.13,
		lemma: "役立てる"
	},
	{
		rank: 10065,
		frequency: 4.13,
		lemma: "考え直す"
	},
	{
		rank: 10066,
		frequency: 4.13,
		lemma: "用地"
	},
	{
		rank: 10067,
		frequency: 4.13,
		lemma: "喜"
	},
	{
		rank: 10068,
		frequency: 4.13,
		lemma: "通商"
	},
	{
		rank: 10069,
		frequency: 4.13,
		lemma: "近々"
	},
	{
		rank: 10070,
		frequency: 4.13,
		lemma: "知見"
	},
	{
		rank: 10071,
		frequency: 4.13,
		lemma: "多忙"
	},
	{
		rank: 10072,
		frequency: 4.13,
		lemma: "運輸省"
	},
	{
		rank: 10073,
		frequency: 4.13,
		lemma: "引き下げ"
	},
	{
		rank: 10074,
		frequency: 4.13,
		lemma: "単身"
	},
	{
		rank: 10075,
		frequency: 4.13,
		lemma: "疾病"
	},
	{
		rank: 10076,
		frequency: 4.13,
		lemma: "しむ"
	},
	{
		rank: 10077,
		frequency: 4.13,
		lemma: "軽量"
	},
	{
		rank: 10078,
		frequency: 4.13,
		lemma: "些細"
	},
	{
		rank: 10079,
		frequency: 4.13,
		lemma: "利回り"
	},
	{
		rank: 10080,
		frequency: 4.13,
		lemma: "日光"
	},
	{
		rank: 10081,
		frequency: 4.13,
		lemma: "ケンカ"
	},
	{
		rank: 10082,
		frequency: 4.13,
		lemma: "空想"
	},
	{
		rank: 10083,
		frequency: 4.13,
		lemma: "エンタープライズ"
	},
	{
		rank: 10084,
		frequency: 4.13,
		lemma: "鉛筆"
	},
	{
		rank: 10085,
		frequency: 4.13,
		lemma: "クーラー"
	},
	{
		rank: 10086,
		frequency: 4.13,
		lemma: "勘"
	},
	{
		rank: 10087,
		frequency: 4.13,
		lemma: "水着"
	},
	{
		rank: 10088,
		frequency: 4.13,
		lemma: "除"
	},
	{
		rank: 10089,
		frequency: 4.12,
		lemma: "思い込み"
	},
	{
		rank: 10090,
		frequency: 4.12,
		lemma: "投機"
	},
	{
		rank: 10091,
		frequency: 4.12,
		lemma: "瞬時"
	},
	{
		rank: 10092,
		frequency: 4.12,
		lemma: "船舶"
	},
	{
		rank: 10093,
		frequency: 4.12,
		lemma: "時差"
	},
	{
		rank: 10094,
		frequency: 4.12,
		lemma: "精力"
	},
	{
		rank: 10095,
		frequency: 4.12,
		lemma: "やわらかい"
	},
	{
		rank: 10096,
		frequency: 4.12,
		lemma: "ヘア"
	},
	{
		rank: 10097,
		frequency: 4.12,
		lemma: "いいかげん"
	},
	{
		rank: 10098,
		frequency: 4.11,
		lemma: "玩具"
	},
	{
		rank: 10099,
		frequency: 4.11,
		lemma: "炊く"
	},
	{
		rank: 10100,
		frequency: 4.11,
		lemma: "日報"
	},
	{
		rank: 10101,
		frequency: 4.11,
		lemma: "多岐"
	},
	{
		rank: 10102,
		frequency: 4.11,
		lemma: "武田"
	},
	{
		rank: 10103,
		frequency: 4.11,
		lemma: "伊東"
	},
	{
		rank: 10104,
		frequency: 4.11,
		lemma: "物凄い"
	},
	{
		rank: 10105,
		frequency: 4.11,
		lemma: "登勢"
	},
	{
		rank: 10106,
		frequency: 4.11,
		lemma: "グランプリ"
	},
	{
		rank: 10107,
		frequency: 4.11,
		lemma: "歳入"
	},
	{
		rank: 10108,
		frequency: 4.11,
		lemma: "年内"
	},
	{
		rank: 10109,
		frequency: 4.11,
		lemma: "愛子"
	},
	{
		rank: 10110,
		frequency: 4.11,
		lemma: "本編"
	},
	{
		rank: 10111,
		frequency: 4.11,
		lemma: "けい"
	},
	{
		rank: 10112,
		frequency: 4.11,
		lemma: "排気"
	},
	{
		rank: 10113,
		frequency: 4.11,
		lemma: "錠"
	},
	{
		rank: 10114,
		frequency: 4.11,
		lemma: "献金"
	},
	{
		rank: 10115,
		frequency: 4.11,
		lemma: "樹木"
	},
	{
		rank: 10116,
		frequency: 4.11,
		lemma: "ジャム"
	},
	{
		rank: 10117,
		frequency: 4.11,
		lemma: "集め"
	},
	{
		rank: 10118,
		frequency: 4.1,
		lemma: "拘る"
	},
	{
		rank: 10119,
		frequency: 4.1,
		lemma: "寄り"
	},
	{
		rank: 10120,
		frequency: 4.1,
		lemma: "バリエーション"
	},
	{
		rank: 10121,
		frequency: 4.1,
		lemma: "お許し"
	},
	{
		rank: 10122,
		frequency: 4.1,
		lemma: "炭鉱"
	},
	{
		rank: 10123,
		frequency: 4.1,
		lemma: "市議会"
	},
	{
		rank: 10124,
		frequency: 4.1,
		lemma: "後記"
	},
	{
		rank: 10125,
		frequency: 4.1,
		lemma: "病棟"
	},
	{
		rank: 10126,
		frequency: 4.1,
		lemma: "仰ぐ"
	},
	{
		rank: 10127,
		frequency: 4.1,
		lemma: "償却"
	},
	{
		rank: 10128,
		frequency: 4.1,
		lemma: "婚"
	},
	{
		rank: 10129,
		frequency: 4.1,
		lemma: "さらう"
	},
	{
		rank: 10130,
		frequency: 4.1,
		lemma: "ゆえる"
	},
	{
		rank: 10131,
		frequency: 4.09,
		lemma: "満州"
	},
	{
		rank: 10132,
		frequency: 4.09,
		lemma: "映す"
	},
	{
		rank: 10133,
		frequency: 4.09,
		lemma: "天下"
	},
	{
		rank: 10134,
		frequency: 4.09,
		lemma: "供"
	},
	{
		rank: 10135,
		frequency: 4.09,
		lemma: "語源"
	},
	{
		rank: 10136,
		frequency: 4.09,
		lemma: "リオ"
	},
	{
		rank: 10137,
		frequency: 4.09,
		lemma: "日本共産党"
	},
	{
		rank: 10138,
		frequency: 4.09,
		lemma: "視力"
	},
	{
		rank: 10139,
		frequency: 4.09,
		lemma: "南アフリカ"
	},
	{
		rank: 10140,
		frequency: 4.09,
		lemma: "補充"
	},
	{
		rank: 10141,
		frequency: 4.09,
		lemma: "知名度"
	},
	{
		rank: 10142,
		frequency: 4.09,
		lemma: "埋め込む"
	},
	{
		rank: 10143,
		frequency: 4.09,
		lemma: "正反対"
	},
	{
		rank: 10144,
		frequency: 4.09,
		lemma: "さら"
	},
	{
		rank: 10145,
		frequency: 4.09,
		lemma: "もむ"
	},
	{
		rank: 10146,
		frequency: 4.09,
		lemma: "部族"
	},
	{
		rank: 10147,
		frequency: 4.09,
		lemma: "三昧"
	},
	{
		rank: 10148,
		frequency: 4.09,
		lemma: "藤沢"
	},
	{
		rank: 10149,
		frequency: 4.09,
		lemma: "怪獣"
	},
	{
		rank: 10150,
		frequency: 4.09,
		lemma: "過疎"
	},
	{
		rank: 10151,
		frequency: 4.09,
		lemma: "悪用"
	},
	{
		rank: 10152,
		frequency: 4.09,
		lemma: "この先"
	},
	{
		rank: 10153,
		frequency: 4.09,
		lemma: "とてつもない"
	},
	{
		rank: 10154,
		frequency: 4.09,
		lemma: "実況"
	},
	{
		rank: 10155,
		frequency: 4.09,
		lemma: "伴奏"
	},
	{
		rank: 10156,
		frequency: 4.08,
		lemma: "永井"
	},
	{
		rank: 10157,
		frequency: 4.08,
		lemma: "ジャーナル"
	},
	{
		rank: 10158,
		frequency: 4.08,
		lemma: "タイムズ"
	},
	{
		rank: 10159,
		frequency: 4.08,
		lemma: "国営"
	},
	{
		rank: 10160,
		frequency: 4.08,
		lemma: "めっちゃ"
	},
	{
		rank: 10161,
		frequency: 4.08,
		lemma: "対人"
	},
	{
		rank: 10162,
		frequency: 4.08,
		lemma: "アフガン"
	},
	{
		rank: 10163,
		frequency: 4.08,
		lemma: "父さん"
	},
	{
		rank: 10164,
		frequency: 4.08,
		lemma: "割く"
	},
	{
		rank: 10165,
		frequency: 4.07,
		lemma: "ＧＤＰ"
	},
	{
		rank: 10166,
		frequency: 4.07,
		lemma: "リセット"
	},
	{
		rank: 10167,
		frequency: 4.07,
		lemma: "広範囲"
	},
	{
		rank: 10168,
		frequency: 4.07,
		lemma: "脅す"
	},
	{
		rank: 10169,
		frequency: 4.07,
		lemma: "とっくに"
	},
	{
		rank: 10170,
		frequency: 4.07,
		lemma: "路面"
	},
	{
		rank: 10171,
		frequency: 4.07,
		lemma: "ヾ"
	},
	{
		rank: 10172,
		frequency: 4.07,
		lemma: "取り寄せる"
	},
	{
		rank: 10173,
		frequency: 4.07,
		lemma: "三位一体"
	},
	{
		rank: 10174,
		frequency: 4.07,
		lemma: "皇太子"
	},
	{
		rank: 10175,
		frequency: 4.07,
		lemma: "誠意"
	},
	{
		rank: 10176,
		frequency: 4.07,
		lemma: "夜中"
	},
	{
		rank: 10177,
		frequency: 4.07,
		lemma: "隻"
	},
	{
		rank: 10178,
		frequency: 4.07,
		lemma: "委"
	},
	{
		rank: 10179,
		frequency: 4.07,
		lemma: "毀損"
	},
	{
		rank: 10180,
		frequency: 4.07,
		lemma: "ボーカル"
	},
	{
		rank: 10181,
		frequency: 4.07,
		lemma: "眠り"
	},
	{
		rank: 10182,
		frequency: 4.07,
		lemma: "ポリ"
	},
	{
		rank: 10183,
		frequency: 4.07,
		lemma: "名づける"
	},
	{
		rank: 10184,
		frequency: 4.07,
		lemma: "古本屋"
	},
	{
		rank: 10185,
		frequency: 4.07,
		lemma: "宿命"
	},
	{
		rank: 10186,
		frequency: 4.07,
		lemma: "小児"
	},
	{
		rank: 10187,
		frequency: 4.07,
		lemma: "拷問"
	},
	{
		rank: 10188,
		frequency: 4.07,
		lemma: "見抜く"
	},
	{
		rank: 10189,
		frequency: 4.07,
		lemma: "昨年度"
	},
	{
		rank: 10190,
		frequency: 4.07,
		lemma: "改変"
	},
	{
		rank: 10191,
		frequency: 4.06,
		lemma: "直ぐに"
	},
	{
		rank: 10192,
		frequency: 4.06,
		lemma: "グレる"
	},
	{
		rank: 10193,
		frequency: 4.06,
		lemma: "熱帯"
	},
	{
		rank: 10194,
		frequency: 4.06,
		lemma: "せん"
	},
	{
		rank: 10195,
		frequency: 4.06,
		lemma: "郷"
	},
	{
		rank: 10196,
		frequency: 4.06,
		lemma: "芋"
	},
	{
		rank: 10197,
		frequency: 4.06,
		lemma: "ばら"
	},
	{
		rank: 10198,
		frequency: 4.06,
		lemma: "ダンサー"
	},
	{
		rank: 10199,
		frequency: 4.06,
		lemma: "推計"
	},
	{
		rank: 10200,
		frequency: 4.06,
		lemma: "梨"
	},
	{
		rank: 10201,
		frequency: 4.06,
		lemma: "クセ"
	},
	{
		rank: 10202,
		frequency: 4.06,
		lemma: "緩やか"
	},
	{
		rank: 10203,
		frequency: 4.06,
		lemma: "哲"
	},
	{
		rank: 10204,
		frequency: 4.06,
		lemma: "公営"
	},
	{
		rank: 10205,
		frequency: 4.06,
		lemma: "カイロ"
	},
	{
		rank: 10206,
		frequency: 4.06,
		lemma: "年中"
	},
	{
		rank: 10207,
		frequency: 4.06,
		lemma: "前記"
	},
	{
		rank: 10208,
		frequency: 4.05,
		lemma: "内臓"
	},
	{
		rank: 10209,
		frequency: 4.05,
		lemma: "党員"
	},
	{
		rank: 10210,
		frequency: 4.05,
		lemma: "このごろ"
	},
	{
		rank: 10211,
		frequency: 4.05,
		lemma: "折角"
	},
	{
		rank: 10212,
		frequency: 4.05,
		lemma: "鈴"
	},
	{
		rank: 10213,
		frequency: 4.05,
		lemma: "なんだかんだ"
	},
	{
		rank: 10214,
		frequency: 4.05,
		lemma: "覚ます"
	},
	{
		rank: 10215,
		frequency: 4.05,
		lemma: "アイスクリーム"
	},
	{
		rank: 10216,
		frequency: 4.05,
		lemma: "思い入れ"
	},
	{
		rank: 10217,
		frequency: 4.05,
		lemma: "匹敵"
	},
	{
		rank: 10218,
		frequency: 4.05,
		lemma: "ペイ"
	},
	{
		rank: 10219,
		frequency: 4.05,
		lemma: "中共"
	},
	{
		rank: 10220,
		frequency: 4.05,
		lemma: "タンパク質"
	},
	{
		rank: 10221,
		frequency: 4.05,
		lemma: "爾"
	},
	{
		rank: 10222,
		frequency: 4.05,
		lemma: "カニ"
	},
	{
		rank: 10223,
		frequency: 4.05,
		lemma: "税込み"
	},
	{
		rank: 10224,
		frequency: 4.05,
		lemma: "バーツ"
	},
	{
		rank: 10225,
		frequency: 4.05,
		lemma: "反撃"
	},
	{
		rank: 10226,
		frequency: 4.04,
		lemma: "興行"
	},
	{
		rank: 10227,
		frequency: 4.04,
		lemma: "海底"
	},
	{
		rank: 10228,
		frequency: 4.04,
		lemma: "楼"
	},
	{
		rank: 10229,
		frequency: 4.04,
		lemma: "人脈"
	},
	{
		rank: 10230,
		frequency: 4.04,
		lemma: "適格"
	},
	{
		rank: 10231,
		frequency: 4.04,
		lemma: "爆撃"
	},
	{
		rank: 10232,
		frequency: 4.04,
		lemma: "安保理"
	},
	{
		rank: 10233,
		frequency: 4.04,
		lemma: "分別"
	},
	{
		rank: 10234,
		frequency: 4.04,
		lemma: "聖なる"
	},
	{
		rank: 10235,
		frequency: 4.04,
		lemma: "神父"
	},
	{
		rank: 10236,
		frequency: 4.04,
		lemma: "ごまかす"
	},
	{
		rank: 10237,
		frequency: 4.04,
		lemma: "日焼け"
	},
	{
		rank: 10238,
		frequency: 4.04,
		lemma: "よくよく"
	},
	{
		rank: 10239,
		frequency: 4.04,
		lemma: "専務"
	},
	{
		rank: 10240,
		frequency: 4.04,
		lemma: "さかのぼる"
	},
	{
		rank: 10241,
		frequency: 4.03,
		lemma: "投"
	},
	{
		rank: 10242,
		frequency: 4.03,
		lemma: "最期"
	},
	{
		rank: 10243,
		frequency: 4.03,
		lemma: "うーむ"
	},
	{
		rank: 10244,
		frequency: 4.03,
		lemma: "スキン"
	},
	{
		rank: 10245,
		frequency: 4.03,
		lemma: "駐留"
	},
	{
		rank: 10246,
		frequency: 4.03,
		lemma: "合図"
	},
	{
		rank: 10247,
		frequency: 4.03,
		lemma: "議席"
	},
	{
		rank: 10248,
		frequency: 4.03,
		lemma: "標識"
	},
	{
		rank: 10249,
		frequency: 4.03,
		lemma: "燃費"
	},
	{
		rank: 10250,
		frequency: 4.03,
		lemma: "戦国"
	},
	{
		rank: 10251,
		frequency: 4.03,
		lemma: "デカ"
	},
	{
		rank: 10252,
		frequency: 4.03,
		lemma: "供述"
	},
	{
		rank: 10253,
		frequency: 4.03,
		lemma: "夜明け"
	},
	{
		rank: 10254,
		frequency: 4.03,
		lemma: "持ち合わせる"
	},
	{
		rank: 10255,
		frequency: 4.03,
		lemma: "八木"
	},
	{
		rank: 10256,
		frequency: 4.03,
		lemma: "髪型"
	},
	{
		rank: 10257,
		frequency: 4.02,
		lemma: "主席"
	},
	{
		rank: 10258,
		frequency: 4.02,
		lemma: "生まれ変わる"
	},
	{
		rank: 10259,
		frequency: 4.02,
		lemma: "国政"
	},
	{
		rank: 10260,
		frequency: 4.02,
		lemma: "廃"
	},
	{
		rank: 10261,
		frequency: 4.02,
		lemma: "突き"
	},
	{
		rank: 10262,
		frequency: 4.02,
		lemma: "天下り"
	},
	{
		rank: 10263,
		frequency: 4.02,
		lemma: "祐"
	},
	{
		rank: 10264,
		frequency: 4.02,
		lemma: "セクター"
	},
	{
		rank: 10265,
		frequency: 4.02,
		lemma: "報復"
	},
	{
		rank: 10266,
		frequency: 4.02,
		lemma: "邸"
	},
	{
		rank: 10267,
		frequency: 4.02,
		lemma: "お誘い"
	},
	{
		rank: 10268,
		frequency: 4.02,
		lemma: "空ける"
	},
	{
		rank: 10269,
		frequency: 4.02,
		lemma: "検診"
	},
	{
		rank: 10270,
		frequency: 4.01,
		lemma: "持"
	},
	{
		rank: 10271,
		frequency: 4.01,
		lemma: "農協"
	},
	{
		rank: 10272,
		frequency: 4.01,
		lemma: "廻る"
	},
	{
		rank: 10273,
		frequency: 4.01,
		lemma: "ならば"
	},
	{
		rank: 10274,
		frequency: 4.01,
		lemma: "僧"
	},
	{
		rank: 10275,
		frequency: 4.01,
		lemma: "お盆"
	},
	{
		rank: 10276,
		frequency: 4.01,
		lemma: "まさ"
	},
	{
		rank: 10277,
		frequency: 4.01,
		lemma: "いただき"
	},
	{
		rank: 10278,
		frequency: 4.01,
		lemma: "有能"
	},
	{
		rank: 10279,
		frequency: 4.01,
		lemma: "酔っ払う"
	},
	{
		rank: 10280,
		frequency: 4.01,
		lemma: "俊"
	},
	{
		rank: 10281,
		frequency: 4.01,
		lemma: "開通"
	},
	{
		rank: 10282,
		frequency: 4.01,
		lemma: "吾"
	},
	{
		rank: 10283,
		frequency: 4.01,
		lemma: "居場所"
	},
	{
		rank: 10284,
		frequency: 4.01,
		lemma: "ダイヤ"
	},
	{
		rank: 10285,
		frequency: 4.01,
		lemma: "面倒くさい"
	},
	{
		rank: 10286,
		frequency: 4.01,
		lemma: "進め方"
	},
	{
		rank: 10287,
		frequency: 4.01,
		lemma: "まくり"
	},
	{
		rank: 10288,
		frequency: 4.01,
		lemma: "糧"
	},
	{
		rank: 10289,
		frequency: 4.01,
		lemma: "すれ違う"
	},
	{
		rank: 10290,
		frequency: 4,
		lemma: "的中"
	},
	{
		rank: 10291,
		frequency: 4,
		lemma: "手のひら"
	},
	{
		rank: 10292,
		frequency: 4,
		lemma: "アルファベット"
	},
	{
		rank: 10293,
		frequency: 4,
		lemma: "配"
	},
	{
		rank: 10294,
		frequency: 4,
		lemma: "質量"
	},
	{
		rank: 10295,
		frequency: 4,
		lemma: "つくす"
	},
	{
		rank: 10296,
		frequency: 4,
		lemma: "そっ"
	},
	{
		rank: 10297,
		frequency: 4,
		lemma: "異例"
	},
	{
		rank: 10298,
		frequency: 4,
		lemma: "神道"
	},
	{
		rank: 10299,
		frequency: 4,
		lemma: "だらだら"
	},
	{
		rank: 10300,
		frequency: 4,
		lemma: "主治医"
	},
	{
		rank: 10301,
		frequency: 4,
		lemma: "紫外線"
	},
	{
		rank: 10302,
		frequency: 4,
		lemma: "サックス"
	},
	{
		rank: 10303,
		frequency: 4,
		lemma: "勇"
	},
	{
		rank: 10304,
		frequency: 3.99,
		lemma: "佐野"
	},
	{
		rank: 10305,
		frequency: 3.99,
		lemma: "思い起こす"
	},
	{
		rank: 10306,
		frequency: 3.99,
		lemma: "メガ"
	},
	{
		rank: 10307,
		frequency: 3.99,
		lemma: "臭"
	},
	{
		rank: 10308,
		frequency: 3.99,
		lemma: "β"
	},
	{
		rank: 10309,
		frequency: 3.99,
		lemma: "取組む"
	},
	{
		rank: 10310,
		frequency: 3.99,
		lemma: "ひょっとしたら"
	},
	{
		rank: 10311,
		frequency: 3.99,
		lemma: "ペンギン"
	},
	{
		rank: 10312,
		frequency: 3.99,
		lemma: "アクセント"
	},
	{
		rank: 10313,
		frequency: 3.99,
		lemma: "量子"
	},
	{
		rank: 10314,
		frequency: 3.99,
		lemma: "錦"
	},
	{
		rank: 10315,
		frequency: 3.99,
		lemma: "薬剤"
	},
	{
		rank: 10316,
		frequency: 3.99,
		lemma: "ガム"
	},
	{
		rank: 10317,
		frequency: 3.99,
		lemma: "続出"
	},
	{
		rank: 10318,
		frequency: 3.99,
		lemma: "垣間見る"
	},
	{
		rank: 10319,
		frequency: 3.99,
		lemma: "腕時計"
	},
	{
		rank: 10320,
		frequency: 3.99,
		lemma: "ワイド"
	},
	{
		rank: 10321,
		frequency: 3.99,
		lemma: "モーニング"
	},
	{
		rank: 10322,
		frequency: 3.99,
		lemma: "ダイビング"
	},
	{
		rank: 10323,
		frequency: 3.99,
		lemma: "竹下"
	},
	{
		rank: 10324,
		frequency: 3.99,
		lemma: "盗聴"
	},
	{
		rank: 10325,
		frequency: 3.99,
		lemma: "望み"
	},
	{
		rank: 10326,
		frequency: 3.99,
		lemma: "賞金"
	},
	{
		rank: 10327,
		frequency: 3.99,
		lemma: "原始"
	},
	{
		rank: 10328,
		frequency: 3.99,
		lemma: "ミサ"
	},
	{
		rank: 10329,
		frequency: 3.99,
		lemma: "メロディー"
	},
	{
		rank: 10330,
		frequency: 3.99,
		lemma: "郷土"
	},
	{
		rank: 10331,
		frequency: 3.98,
		lemma: "ぐるぐる"
	},
	{
		rank: 10332,
		frequency: 3.98,
		lemma: "ギリシア"
	},
	{
		rank: 10333,
		frequency: 3.98,
		lemma: "反抗"
	},
	{
		rank: 10334,
		frequency: 3.98,
		lemma: "草子"
	},
	{
		rank: 10335,
		frequency: 3.98,
		lemma: "長編"
	},
	{
		rank: 10336,
		frequency: 3.98,
		lemma: "パル"
	},
	{
		rank: 10337,
		frequency: 3.98,
		lemma: "ロジック"
	},
	{
		rank: 10338,
		frequency: 3.98,
		lemma: "ワークス"
	},
	{
		rank: 10339,
		frequency: 3.98,
		lemma: "古田"
	},
	{
		rank: 10340,
		frequency: 3.98,
		lemma: "手袋"
	},
	{
		rank: 10341,
		frequency: 3.98,
		lemma: "ありがと"
	},
	{
		rank: 10342,
		frequency: 3.98,
		lemma: "尾崎"
	},
	{
		rank: 10343,
		frequency: 3.98,
		lemma: "定数"
	},
	{
		rank: 10344,
		frequency: 3.98,
		lemma: "モデム"
	},
	{
		rank: 10345,
		frequency: 3.98,
		lemma: "菊"
	},
	{
		rank: 10346,
		frequency: 3.98,
		lemma: "休止"
	},
	{
		rank: 10347,
		frequency: 3.98,
		lemma: "故意"
	},
	{
		rank: 10348,
		frequency: 3.98,
		lemma: "ＴＢＳ"
	},
	{
		rank: 10349,
		frequency: 3.98,
		lemma: "隣人"
	},
	{
		rank: 10350,
		frequency: 3.98,
		lemma: "物品"
	},
	{
		rank: 10351,
		frequency: 3.98,
		lemma: "吟味"
	},
	{
		rank: 10352,
		frequency: 3.98,
		lemma: "受かる"
	},
	{
		rank: 10353,
		frequency: 3.97,
		lemma: "バタバタ"
	},
	{
		rank: 10354,
		frequency: 3.97,
		lemma: "あな"
	},
	{
		rank: 10355,
		frequency: 3.97,
		lemma: "つくり"
	},
	{
		rank: 10356,
		frequency: 3.97,
		lemma: "分岐"
	},
	{
		rank: 10357,
		frequency: 3.97,
		lemma: "ツーリング"
	},
	{
		rank: 10358,
		frequency: 3.97,
		lemma: "地主"
	},
	{
		rank: 10359,
		frequency: 3.97,
		lemma: "むかし"
	},
	{
		rank: 10360,
		frequency: 3.97,
		lemma: "平面"
	},
	{
		rank: 10361,
		frequency: 3.97,
		lemma: "防"
	},
	{
		rank: 10362,
		frequency: 3.97,
		lemma: "見え"
	},
	{
		rank: 10363,
		frequency: 3.97,
		lemma: "高性能"
	},
	{
		rank: 10364,
		frequency: 3.97,
		lemma: "ココロ"
	},
	{
		rank: 10365,
		frequency: 3.97,
		lemma: "獲る"
	},
	{
		rank: 10366,
		frequency: 3.96,
		lemma: "労組"
	},
	{
		rank: 10367,
		frequency: 3.96,
		lemma: "巧"
	},
	{
		rank: 10368,
		frequency: 3.96,
		lemma: "出所"
	},
	{
		rank: 10369,
		frequency: 3.96,
		lemma: "女史"
	},
	{
		rank: 10370,
		frequency: 3.96,
		lemma: "揺れ"
	},
	{
		rank: 10371,
		frequency: 3.96,
		lemma: "増進"
	},
	{
		rank: 10372,
		frequency: 3.96,
		lemma: "横山"
	},
	{
		rank: 10373,
		frequency: 3.96,
		lemma: "片隅"
	},
	{
		rank: 10374,
		frequency: 3.96,
		lemma: "手首"
	},
	{
		rank: 10375,
		frequency: 3.96,
		lemma: "義理"
	},
	{
		rank: 10376,
		frequency: 3.96,
		lemma: "ロッテ"
	},
	{
		rank: 10377,
		frequency: 3.96,
		lemma: "同性愛"
	},
	{
		rank: 10378,
		frequency: 3.96,
		lemma: "誤差"
	},
	{
		rank: 10379,
		frequency: 3.96,
		lemma: "いわく"
	},
	{
		rank: 10380,
		frequency: 3.96,
		lemma: "一息"
	},
	{
		rank: 10381,
		frequency: 3.96,
		lemma: "ダル"
	},
	{
		rank: 10382,
		frequency: 3.96,
		lemma: "壁紙"
	},
	{
		rank: 10383,
		frequency: 3.96,
		lemma: "積み重ね"
	},
	{
		rank: 10384,
		frequency: 3.96,
		lemma: "横たわる"
	},
	{
		rank: 10385,
		frequency: 3.95,
		lemma: "手口"
	},
	{
		rank: 10386,
		frequency: 3.95,
		lemma: "納期"
	},
	{
		rank: 10387,
		frequency: 3.95,
		lemma: "年末年始"
	},
	{
		rank: 10388,
		frequency: 3.95,
		lemma: "済ます"
	},
	{
		rank: 10389,
		frequency: 3.95,
		lemma: "非常勤"
	},
	{
		rank: 10390,
		frequency: 3.95,
		lemma: "ツン"
	},
	{
		rank: 10391,
		frequency: 3.95,
		lemma: "注意深い"
	},
	{
		rank: 10392,
		frequency: 3.95,
		lemma: "スロット"
	},
	{
		rank: 10393,
		frequency: 3.95,
		lemma: "揚げる"
	},
	{
		rank: 10394,
		frequency: 3.95,
		lemma: "吸い込む"
	},
	{
		rank: 10395,
		frequency: 3.95,
		lemma: "スプーン"
	},
	{
		rank: 10396,
		frequency: 3.95,
		lemma: "エッチ"
	},
	{
		rank: 10397,
		frequency: 3.95,
		lemma: "マネジャー"
	},
	{
		rank: 10398,
		frequency: 3.94,
		lemma: "強み"
	},
	{
		rank: 10399,
		frequency: 3.94,
		lemma: "とり"
	},
	{
		rank: 10400,
		frequency: 3.94,
		lemma: "スリム"
	},
	{
		rank: 10401,
		frequency: 3.94,
		lemma: "傷害"
	},
	{
		rank: 10402,
		frequency: 3.94,
		lemma: "はな"
	},
	{
		rank: 10403,
		frequency: 3.94,
		lemma: "川上"
	},
	{
		rank: 10404,
		frequency: 3.94,
		lemma: "和食"
	},
	{
		rank: 10405,
		frequency: 3.94,
		lemma: "アキ"
	},
	{
		rank: 10406,
		frequency: 3.94,
		lemma: "どく"
	},
	{
		rank: 10407,
		frequency: 3.94,
		lemma: "パケット"
	},
	{
		rank: 10408,
		frequency: 3.94,
		lemma: "ちく"
	},
	{
		rank: 10409,
		frequency: 3.94,
		lemma: "商用"
	},
	{
		rank: 10410,
		frequency: 3.94,
		lemma: "寝室"
	},
	{
		rank: 10411,
		frequency: 3.94,
		lemma: "エホバ"
	},
	{
		rank: 10412,
		frequency: 3.94,
		lemma: "社交"
	},
	{
		rank: 10413,
		frequency: 3.94,
		lemma: "工務"
	},
	{
		rank: 10414,
		frequency: 3.94,
		lemma: "衆"
	},
	{
		rank: 10415,
		frequency: 3.94,
		lemma: "遊べる"
	},
	{
		rank: 10416,
		frequency: 3.94,
		lemma: "究明"
	},
	{
		rank: 10417,
		frequency: 3.94,
		lemma: "附属"
	},
	{
		rank: 10418,
		frequency: 3.94,
		lemma: "束"
	},
	{
		rank: 10419,
		frequency: 3.94,
		lemma: "愛着"
	},
	{
		rank: 10420,
		frequency: 3.94,
		lemma: "奥深い"
	},
	{
		rank: 10421,
		frequency: 3.94,
		lemma: "願"
	},
	{
		rank: 10422,
		frequency: 3.94,
		lemma: "たかが"
	},
	{
		rank: 10423,
		frequency: 3.94,
		lemma: "自閉症"
	},
	{
		rank: 10424,
		frequency: 3.94,
		lemma: "出血"
	},
	{
		rank: 10425,
		frequency: 3.94,
		lemma: "港湾"
	},
	{
		rank: 10426,
		frequency: 3.93,
		lemma: "貸出"
	},
	{
		rank: 10427,
		frequency: 3.93,
		lemma: "スカイ"
	},
	{
		rank: 10428,
		frequency: 3.93,
		lemma: "難易"
	},
	{
		rank: 10429,
		frequency: 3.93,
		lemma: "丈夫"
	},
	{
		rank: 10430,
		frequency: 3.93,
		lemma: "絶好"
	},
	{
		rank: 10431,
		frequency: 3.93,
		lemma: "早稲田大学"
	},
	{
		rank: 10432,
		frequency: 3.93,
		lemma: "禅"
	},
	{
		rank: 10433,
		frequency: 3.93,
		lemma: "議"
	},
	{
		rank: 10434,
		frequency: 3.93,
		lemma: "遮断"
	},
	{
		rank: 10435,
		frequency: 3.93,
		lemma: "射撃"
	},
	{
		rank: 10436,
		frequency: 3.93,
		lemma: "めく"
	},
	{
		rank: 10437,
		frequency: 3.92,
		lemma: "最前線"
	},
	{
		rank: 10438,
		frequency: 3.92,
		lemma: "自給"
	},
	{
		rank: 10439,
		frequency: 3.92,
		lemma: "増額"
	},
	{
		rank: 10440,
		frequency: 3.92,
		lemma: "ｐ"
	},
	{
		rank: 10441,
		frequency: 3.92,
		lemma: "日本橋"
	},
	{
		rank: 10442,
		frequency: 3.92,
		lemma: "独り"
	},
	{
		rank: 10443,
		frequency: 3.92,
		lemma: "読み上げる"
	},
	{
		rank: 10444,
		frequency: 3.92,
		lemma: "国務"
	},
	{
		rank: 10445,
		frequency: 3.92,
		lemma: "知識人"
	},
	{
		rank: 10446,
		frequency: 3.92,
		lemma: "イチゴ"
	},
	{
		rank: 10447,
		frequency: 3.92,
		lemma: "ふん"
	},
	{
		rank: 10448,
		frequency: 3.92,
		lemma: "ポチ"
	},
	{
		rank: 10449,
		frequency: 3.92,
		lemma: "放火"
	},
	{
		rank: 10450,
		frequency: 3.92,
		lemma: "ウル"
	},
	{
		rank: 10451,
		frequency: 3.92,
		lemma: "小銭"
	},
	{
		rank: 10452,
		frequency: 3.92,
		lemma: "お気"
	},
	{
		rank: 10453,
		frequency: 3.92,
		lemma: "会計士"
	},
	{
		rank: 10454,
		frequency: 3.92,
		lemma: "標"
	},
	{
		rank: 10455,
		frequency: 3.92,
		lemma: "賛否"
	},
	{
		rank: 10456,
		frequency: 3.92,
		lemma: "炭素"
	},
	{
		rank: 10457,
		frequency: 3.92,
		lemma: "着席"
	},
	{
		rank: 10458,
		frequency: 3.92,
		lemma: "民俗"
	},
	{
		rank: 10459,
		frequency: 3.91,
		lemma: "夕日"
	},
	{
		rank: 10460,
		frequency: 3.91,
		lemma: "受診"
	},
	{
		rank: 10461,
		frequency: 3.91,
		lemma: "楽園"
	},
	{
		rank: 10462,
		frequency: 3.91,
		lemma: "島根"
	},
	{
		rank: 10463,
		frequency: 3.91,
		lemma: "相応しい"
	},
	{
		rank: 10464,
		frequency: 3.91,
		lemma: "蘇る"
	},
	{
		rank: 10465,
		frequency: 3.91,
		lemma: "水田"
	},
	{
		rank: 10466,
		frequency: 3.91,
		lemma: "最優秀"
	},
	{
		rank: 10467,
		frequency: 3.91,
		lemma: "否める"
	},
	{
		rank: 10468,
		frequency: 3.91,
		lemma: "尺度"
	},
	{
		rank: 10469,
		frequency: 3.91,
		lemma: "朗"
	},
	{
		rank: 10470,
		frequency: 3.91,
		lemma: "唐突"
	},
	{
		rank: 10471,
		frequency: 3.91,
		lemma: "春樹"
	},
	{
		rank: 10472,
		frequency: 3.91,
		lemma: "寸法"
	},
	{
		rank: 10473,
		frequency: 3.91,
		lemma: "ファックス"
	},
	{
		rank: 10474,
		frequency: 3.91,
		lemma: "恐竜"
	},
	{
		rank: 10475,
		frequency: 3.91,
		lemma: "ミシン"
	},
	{
		rank: 10476,
		frequency: 3.9,
		lemma: "只"
	},
	{
		rank: 10477,
		frequency: 3.9,
		lemma: "おかず"
	},
	{
		rank: 10478,
		frequency: 3.9,
		lemma: "トーマス"
	},
	{
		rank: 10479,
		frequency: 3.9,
		lemma: "明細"
	},
	{
		rank: 10480,
		frequency: 3.9,
		lemma: "凄まじい"
	},
	{
		rank: 10481,
		frequency: 3.9,
		lemma: "つかめる"
	},
	{
		rank: 10482,
		frequency: 3.9,
		lemma: "隠し"
	},
	{
		rank: 10483,
		frequency: 3.9,
		lemma: "奴ら"
	},
	{
		rank: 10484,
		frequency: 3.9,
		lemma: "めぐみ"
	},
	{
		rank: 10485,
		frequency: 3.9,
		lemma: "一刻"
	},
	{
		rank: 10486,
		frequency: 3.9,
		lemma: "日経新聞"
	},
	{
		rank: 10487,
		frequency: 3.89,
		lemma: "古書"
	},
	{
		rank: 10488,
		frequency: 3.89,
		lemma: "本場"
	},
	{
		rank: 10489,
		frequency: 3.89,
		lemma: "呼べる"
	},
	{
		rank: 10490,
		frequency: 3.89,
		lemma: "真っ暗"
	},
	{
		rank: 10491,
		frequency: 3.89,
		lemma: "東欧"
	},
	{
		rank: 10492,
		frequency: 3.89,
		lemma: "百科"
	},
	{
		rank: 10493,
		frequency: 3.89,
		lemma: "アテネ"
	},
	{
		rank: 10494,
		frequency: 3.89,
		lemma: "ケリー"
	},
	{
		rank: 10495,
		frequency: 3.89,
		lemma: "東方"
	},
	{
		rank: 10496,
		frequency: 3.89,
		lemma: "焼ける"
	},
	{
		rank: 10497,
		frequency: 3.89,
		lemma: "暮れる"
	},
	{
		rank: 10498,
		frequency: 3.89,
		lemma: "照"
	},
	{
		rank: 10499,
		frequency: 3.89,
		lemma: "賢明"
	},
	{
		rank: 10500,
		frequency: 3.88,
		lemma: "哀しい"
	},
	{
		rank: 10501,
		frequency: 3.88,
		lemma: "接待"
	},
	{
		rank: 10502,
		frequency: 3.88,
		lemma: "痛める"
	},
	{
		rank: 10503,
		frequency: 3.88,
		lemma: "高松"
	},
	{
		rank: 10504,
		frequency: 3.88,
		lemma: "遥か"
	},
	{
		rank: 10505,
		frequency: 3.88,
		lemma: "走れる"
	},
	{
		rank: 10506,
		frequency: 3.88,
		lemma: "リレー"
	},
	{
		rank: 10507,
		frequency: 3.88,
		lemma: "斎"
	},
	{
		rank: 10508,
		frequency: 3.88,
		lemma: "滅多に"
	},
	{
		rank: 10509,
		frequency: 3.88,
		lemma: "セミ"
	},
	{
		rank: 10510,
		frequency: 3.88,
		lemma: "じゅう"
	},
	{
		rank: 10511,
		frequency: 3.88,
		lemma: "斬新"
	},
	{
		rank: 10512,
		frequency: 3.88,
		lemma: "糾弾"
	},
	{
		rank: 10513,
		frequency: 3.88,
		lemma: "岩波書店"
	},
	{
		rank: 10514,
		frequency: 3.88,
		lemma: "零"
	},
	{
		rank: 10515,
		frequency: 3.88,
		lemma: "宿舎"
	},
	{
		rank: 10516,
		frequency: 3.87,
		lemma: "原題"
	},
	{
		rank: 10517,
		frequency: 3.87,
		lemma: "うわさ"
	},
	{
		rank: 10518,
		frequency: 3.87,
		lemma: "協奏曲"
	},
	{
		rank: 10519,
		frequency: 3.87,
		lemma: "処刑"
	},
	{
		rank: 10520,
		frequency: 3.87,
		lemma: "染色"
	},
	{
		rank: 10521,
		frequency: 3.87,
		lemma: "明瞭"
	},
	{
		rank: 10522,
		frequency: 3.87,
		lemma: "日産"
	},
	{
		rank: 10523,
		frequency: 3.87,
		lemma: "おくる"
	},
	{
		rank: 10524,
		frequency: 3.87,
		lemma: "ランナー"
	},
	{
		rank: 10525,
		frequency: 3.87,
		lemma: "いたずら"
	},
	{
		rank: 10526,
		frequency: 3.87,
		lemma: "日帰り"
	},
	{
		rank: 10527,
		frequency: 3.87,
		lemma: "アーキテクチャ"
	},
	{
		rank: 10528,
		frequency: 3.87,
		lemma: "ｂ"
	},
	{
		rank: 10529,
		frequency: 3.87,
		lemma: "侍"
	},
	{
		rank: 10530,
		frequency: 3.87,
		lemma: "浦和"
	},
	{
		rank: 10531,
		frequency: 3.87,
		lemma: "建設省"
	},
	{
		rank: 10532,
		frequency: 3.87,
		lemma: "オルガン"
	},
	{
		rank: 10533,
		frequency: 3.86,
		lemma: "サマー"
	},
	{
		rank: 10534,
		frequency: 3.86,
		lemma: "バージョンアップ"
	},
	{
		rank: 10535,
		frequency: 3.86,
		lemma: "イエロー"
	},
	{
		rank: 10536,
		frequency: 3.86,
		lemma: "巷"
	},
	{
		rank: 10537,
		frequency: 3.86,
		lemma: "くらべる"
	},
	{
		rank: 10538,
		frequency: 3.86,
		lemma: "そん"
	},
	{
		rank: 10539,
		frequency: 3.86,
		lemma: "マニアック"
	},
	{
		rank: 10540,
		frequency: 3.86,
		lemma: "人前"
	},
	{
		rank: 10541,
		frequency: 3.86,
		lemma: "佐賀"
	},
	{
		rank: 10542,
		frequency: 3.86,
		lemma: "毎晩"
	},
	{
		rank: 10543,
		frequency: 3.86,
		lemma: "核心"
	},
	{
		rank: 10544,
		frequency: 3.86,
		lemma: "ベリー"
	},
	{
		rank: 10545,
		frequency: 3.86,
		lemma: "考案"
	},
	{
		rank: 10546,
		frequency: 3.86,
		lemma: "違憲"
	},
	{
		rank: 10547,
		frequency: 3.86,
		lemma: "盛"
	},
	{
		rank: 10548,
		frequency: 3.86,
		lemma: "貸し"
	},
	{
		rank: 10549,
		frequency: 3.86,
		lemma: "大将"
	},
	{
		rank: 10550,
		frequency: 3.86,
		lemma: "荒い"
	},
	{
		rank: 10551,
		frequency: 3.86,
		lemma: "お迎え"
	},
	{
		rank: 10552,
		frequency: 3.86,
		lemma: "道徳的"
	},
	{
		rank: 10553,
		frequency: 3.86,
		lemma: "描ける"
	},
	{
		rank: 10554,
		frequency: 3.86,
		lemma: "徳川"
	},
	{
		rank: 10555,
		frequency: 3.86,
		lemma: "飲み込む"
	},
	{
		rank: 10556,
		frequency: 3.86,
		lemma: "真夏"
	},
	{
		rank: 10557,
		frequency: 3.85,
		lemma: "望遠鏡"
	},
	{
		rank: 10558,
		frequency: 3.85,
		lemma: "何かしら"
	},
	{
		rank: 10559,
		frequency: 3.85,
		lemma: "タラ"
	},
	{
		rank: 10560,
		frequency: 3.85,
		lemma: "さっと"
	},
	{
		rank: 10561,
		frequency: 3.85,
		lemma: "補修"
	},
	{
		rank: 10562,
		frequency: 3.85,
		lemma: "縫う"
	},
	{
		rank: 10563,
		frequency: 3.85,
		lemma: "送れる"
	},
	{
		rank: 10564,
		frequency: 3.85,
		lemma: "アメリカ合衆国"
	},
	{
		rank: 10565,
		frequency: 3.85,
		lemma: "政界"
	},
	{
		rank: 10566,
		frequency: 3.85,
		lemma: "御座る"
	},
	{
		rank: 10567,
		frequency: 3.85,
		lemma: "カスタム"
	},
	{
		rank: 10568,
		frequency: 3.85,
		lemma: "多種"
	},
	{
		rank: 10569,
		frequency: 3.84,
		lemma: "バット"
	},
	{
		rank: 10570,
		frequency: 3.84,
		lemma: "チェックイン"
	},
	{
		rank: 10571,
		frequency: 3.84,
		lemma: "叫び"
	},
	{
		rank: 10572,
		frequency: 3.84,
		lemma: "汚す"
	},
	{
		rank: 10573,
		frequency: 3.84,
		lemma: "装う"
	},
	{
		rank: 10574,
		frequency: 3.84,
		lemma: "ＦＷ"
	},
	{
		rank: 10575,
		frequency: 3.84,
		lemma: "中日"
	},
	{
		rank: 10576,
		frequency: 3.84,
		lemma: "ウエスト"
	},
	{
		rank: 10577,
		frequency: 3.84,
		lemma: "ファイナンス"
	},
	{
		rank: 10578,
		frequency: 3.84,
		lemma: "すし"
	},
	{
		rank: 10579,
		frequency: 3.84,
		lemma: "半日"
	},
	{
		rank: 10580,
		frequency: 3.84,
		lemma: "年版"
	},
	{
		rank: 10581,
		frequency: 3.84,
		lemma: "水野"
	},
	{
		rank: 10582,
		frequency: 3.84,
		lemma: "ヨウ"
	},
	{
		rank: 10583,
		frequency: 3.84,
		lemma: "ねん"
	},
	{
		rank: 10584,
		frequency: 3.84,
		lemma: "振る舞い"
	},
	{
		rank: 10585,
		frequency: 3.84,
		lemma: "カム"
	},
	{
		rank: 10586,
		frequency: 3.84,
		lemma: "ヘクタール"
	},
	{
		rank: 10587,
		frequency: 3.84,
		lemma: "ワイ"
	},
	{
		rank: 10588,
		frequency: 3.84,
		lemma: "コンプレックス"
	},
	{
		rank: 10589,
		frequency: 3.84,
		lemma: "聞き取れる"
	},
	{
		rank: 10590,
		frequency: 3.84,
		lemma: "激励"
	},
	{
		rank: 10591,
		frequency: 3.83,
		lemma: "チャイナ"
	},
	{
		rank: 10592,
		frequency: 3.83,
		lemma: "静止"
	},
	{
		rank: 10593,
		frequency: 3.83,
		lemma: "やせる"
	},
	{
		rank: 10594,
		frequency: 3.83,
		lemma: "もうける"
	},
	{
		rank: 10595,
		frequency: 3.83,
		lemma: "議定"
	},
	{
		rank: 10596,
		frequency: 3.83,
		lemma: "クビ"
	},
	{
		rank: 10597,
		frequency: 3.83,
		lemma: "電脳"
	},
	{
		rank: 10598,
		frequency: 3.83,
		lemma: "忘年会"
	},
	{
		rank: 10599,
		frequency: 3.83,
		lemma: "挑発"
	},
	{
		rank: 10600,
		frequency: 3.83,
		lemma: "エステ"
	},
	{
		rank: 10601,
		frequency: 3.83,
		lemma: "連勝"
	},
	{
		rank: 10602,
		frequency: 3.83,
		lemma: "発作"
	},
	{
		rank: 10603,
		frequency: 3.83,
		lemma: "フェリー"
	},
	{
		rank: 10604,
		frequency: 3.83,
		lemma: "兎"
	},
	{
		rank: 10605,
		frequency: 3.83,
		lemma: "失格"
	},
	{
		rank: 10606,
		frequency: 3.83,
		lemma: "語りかける"
	},
	{
		rank: 10607,
		frequency: 3.82,
		lemma: "延びる"
	},
	{
		rank: 10608,
		frequency: 3.82,
		lemma: "庫"
	},
	{
		rank: 10609,
		frequency: 3.82,
		lemma: "一大"
	},
	{
		rank: 10610,
		frequency: 3.82,
		lemma: "バス停"
	},
	{
		rank: 10611,
		frequency: 3.82,
		lemma: "むける"
	},
	{
		rank: 10612,
		frequency: 3.82,
		lemma: "初戦"
	},
	{
		rank: 10613,
		frequency: 3.82,
		lemma: "フロリダ"
	},
	{
		rank: 10614,
		frequency: 3.82,
		lemma: "華麗"
	},
	{
		rank: 10615,
		frequency: 3.82,
		lemma: "茹でる"
	},
	{
		rank: 10616,
		frequency: 3.82,
		lemma: "けが"
	},
	{
		rank: 10617,
		frequency: 3.82,
		lemma: "公約"
	},
	{
		rank: 10618,
		frequency: 3.82,
		lemma: "弥生"
	},
	{
		rank: 10619,
		frequency: 3.81,
		lemma: "ためる"
	},
	{
		rank: 10620,
		frequency: 3.81,
		lemma: "ゲリラ"
	},
	{
		rank: 10621,
		frequency: 3.81,
		lemma: "値下げ"
	},
	{
		rank: 10622,
		frequency: 3.81,
		lemma: "茶色"
	},
	{
		rank: 10623,
		frequency: 3.81,
		lemma: "散らす"
	},
	{
		rank: 10624,
		frequency: 3.81,
		lemma: "冊子"
	},
	{
		rank: 10625,
		frequency: 3.81,
		lemma: "ことごとく"
	},
	{
		rank: 10626,
		frequency: 3.81,
		lemma: "陛下"
	},
	{
		rank: 10627,
		frequency: 3.81,
		lemma: "日立"
	},
	{
		rank: 10628,
		frequency: 3.81,
		lemma: "所定"
	},
	{
		rank: 10629,
		frequency: 3.81,
		lemma: "機嫌"
	},
	{
		rank: 10630,
		frequency: 3.81,
		lemma: "゛"
	},
	{
		rank: 10631,
		frequency: 3.81,
		lemma: "閉ざす"
	},
	{
		rank: 10632,
		frequency: 3.81,
		lemma: "味噌汁"
	},
	{
		rank: 10633,
		frequency: 3.81,
		lemma: "初版"
	},
	{
		rank: 10634,
		frequency: 3.81,
		lemma: "騎手"
	},
	{
		rank: 10635,
		frequency: 3.8,
		lemma: "オリ"
	},
	{
		rank: 10636,
		frequency: 3.8,
		lemma: "ランニング"
	},
	{
		rank: 10637,
		frequency: 3.8,
		lemma: "明かり"
	},
	{
		rank: 10638,
		frequency: 3.8,
		lemma: "アイヌ"
	},
	{
		rank: 10639,
		frequency: 3.8,
		lemma: "京都大学"
	},
	{
		rank: 10640,
		frequency: 3.8,
		lemma: "育ち"
	},
	{
		rank: 10641,
		frequency: 3.8,
		lemma: "おさまる"
	},
	{
		rank: 10642,
		frequency: 3.8,
		lemma: "羅"
	},
	{
		rank: 10643,
		frequency: 3.8,
		lemma: "警報"
	},
	{
		rank: 10644,
		frequency: 3.8,
		lemma: "造形"
	},
	{
		rank: 10645,
		frequency: 3.8,
		lemma: "中曽根"
	},
	{
		rank: 10646,
		frequency: 3.8,
		lemma: "昇"
	},
	{
		rank: 10647,
		frequency: 3.79,
		lemma: "フラワー"
	},
	{
		rank: 10648,
		frequency: 3.79,
		lemma: "近頃"
	},
	{
		rank: 10649,
		frequency: 3.79,
		lemma: "塗り"
	},
	{
		rank: 10650,
		frequency: 3.79,
		lemma: "不透明"
	},
	{
		rank: 10651,
		frequency: 3.79,
		lemma: "珍"
	},
	{
		rank: 10652,
		frequency: 3.79,
		lemma: "摘発"
	},
	{
		rank: 10653,
		frequency: 3.79,
		lemma: "ベータ"
	},
	{
		rank: 10654,
		frequency: 3.79,
		lemma: "相手方"
	},
	{
		rank: 10655,
		frequency: 3.79,
		lemma: "同月"
	},
	{
		rank: 10656,
		frequency: 3.79,
		lemma: "産物"
	},
	{
		rank: 10657,
		frequency: 3.79,
		lemma: "交易"
	},
	{
		rank: 10658,
		frequency: 3.79,
		lemma: "飛行場"
	},
	{
		rank: 10659,
		frequency: 3.79,
		lemma: "袖"
	},
	{
		rank: 10660,
		frequency: 3.79,
		lemma: "船長"
	},
	{
		rank: 10661,
		frequency: 3.79,
		lemma: "端子"
	},
	{
		rank: 10662,
		frequency: 3.79,
		lemma: "司祭"
	},
	{
		rank: 10663,
		frequency: 3.79,
		lemma: "言いよう"
	},
	{
		rank: 10664,
		frequency: 3.79,
		lemma: "後ほど"
	},
	{
		rank: 10665,
		frequency: 3.79,
		lemma: "本国"
	},
	{
		rank: 10666,
		frequency: 3.79,
		lemma: "胡"
	},
	{
		rank: 10667,
		frequency: 3.79,
		lemma: "佐"
	},
	{
		rank: 10668,
		frequency: 3.79,
		lemma: "心構え"
	},
	{
		rank: 10669,
		frequency: 3.79,
		lemma: "繋がり"
	},
	{
		rank: 10670,
		frequency: 3.79,
		lemma: "白黒"
	},
	{
		rank: 10671,
		frequency: 3.79,
		lemma: "当の"
	},
	{
		rank: 10672,
		frequency: 3.79,
		lemma: "殿下"
	},
	{
		rank: 10673,
		frequency: 3.79,
		lemma: "事業主"
	},
	{
		rank: 10674,
		frequency: 3.79,
		lemma: "さよなら"
	},
	{
		rank: 10675,
		frequency: 3.78,
		lemma: "赤外線"
	},
	{
		rank: 10676,
		frequency: 3.78,
		lemma: "藤本"
	},
	{
		rank: 10677,
		frequency: 3.78,
		lemma: "薬剤師"
	},
	{
		rank: 10678,
		frequency: 3.78,
		lemma: "興"
	},
	{
		rank: 10679,
		frequency: 3.78,
		lemma: "前々"
	},
	{
		rank: 10680,
		frequency: 3.78,
		lemma: "カブ"
	},
	{
		rank: 10681,
		frequency: 3.78,
		lemma: "敬"
	},
	{
		rank: 10682,
		frequency: 3.78,
		lemma: "憶える"
	},
	{
		rank: 10683,
		frequency: 3.78,
		lemma: "先行き"
	},
	{
		rank: 10684,
		frequency: 3.78,
		lemma: "二郎"
	},
	{
		rank: 10685,
		frequency: 3.78,
		lemma: "右脳"
	},
	{
		rank: 10686,
		frequency: 3.78,
		lemma: "体温"
	},
	{
		rank: 10687,
		frequency: 3.78,
		lemma: "控えめ"
	},
	{
		rank: 10688,
		frequency: 3.78,
		lemma: "乗り物"
	},
	{
		rank: 10689,
		frequency: 3.78,
		lemma: "全域"
	},
	{
		rank: 10690,
		frequency: 3.78,
		lemma: "ボルト"
	},
	{
		rank: 10691,
		frequency: 3.77,
		lemma: "丈"
	},
	{
		rank: 10692,
		frequency: 3.77,
		lemma: "区画"
	},
	{
		rank: 10693,
		frequency: 3.77,
		lemma: "アダルト"
	},
	{
		rank: 10694,
		frequency: 3.77,
		lemma: "枚数"
	},
	{
		rank: 10695,
		frequency: 3.77,
		lemma: "教義"
	},
	{
		rank: 10696,
		frequency: 3.77,
		lemma: "悲観"
	},
	{
		rank: 10697,
		frequency: 3.77,
		lemma: "外傷"
	},
	{
		rank: 10698,
		frequency: 3.77,
		lemma: "つたの"
	},
	{
		rank: 10699,
		frequency: 3.77,
		lemma: "でん"
	},
	{
		rank: 10700,
		frequency: 3.77,
		lemma: "更生"
	},
	{
		rank: 10701,
		frequency: 3.77,
		lemma: "両側"
	},
	{
		rank: 10702,
		frequency: 3.77,
		lemma: "柏"
	},
	{
		rank: 10703,
		frequency: 3.77,
		lemma: "リモコン"
	},
	{
		rank: 10704,
		frequency: 3.77,
		lemma: "左利き"
	},
	{
		rank: 10705,
		frequency: 3.77,
		lemma: "国内外"
	},
	{
		rank: 10706,
		frequency: 3.77,
		lemma: "キャップ"
	},
	{
		rank: 10707,
		frequency: 3.77,
		lemma: "支え"
	},
	{
		rank: 10708,
		frequency: 3.77,
		lemma: "逃亡"
	},
	{
		rank: 10709,
		frequency: 3.77,
		lemma: "暗黒"
	},
	{
		rank: 10710,
		frequency: 3.77,
		lemma: "各省"
	},
	{
		rank: 10711,
		frequency: 3.77,
		lemma: "コーラス"
	},
	{
		rank: 10712,
		frequency: 3.77,
		lemma: "ナチュラル"
	},
	{
		rank: 10713,
		frequency: 3.77,
		lemma: "ポンプ"
	},
	{
		rank: 10714,
		frequency: 3.77,
		lemma: "宇宙船"
	},
	{
		rank: 10715,
		frequency: 3.77,
		lemma: "遺言"
	},
	{
		rank: 10716,
		frequency: 3.77,
		lemma: "電化"
	},
	{
		rank: 10717,
		frequency: 3.77,
		lemma: "ご無沙汰"
	},
	{
		rank: 10718,
		frequency: 3.77,
		lemma: "三島"
	},
	{
		rank: 10719,
		frequency: 3.76,
		lemma: "割り切る"
	},
	{
		rank: 10720,
		frequency: 3.76,
		lemma: "面会"
	},
	{
		rank: 10721,
		frequency: 3.76,
		lemma: "エルサレム"
	},
	{
		rank: 10722,
		frequency: 3.76,
		lemma: "一面"
	},
	{
		rank: 10723,
		frequency: 3.76,
		lemma: "納入"
	},
	{
		rank: 10724,
		frequency: 3.76,
		lemma: "正す"
	},
	{
		rank: 10725,
		frequency: 3.76,
		lemma: "角川"
	},
	{
		rank: 10726,
		frequency: 3.76,
		lemma: "県庁"
	},
	{
		rank: 10727,
		frequency: 3.76,
		lemma: "すべ"
	},
	{
		rank: 10728,
		frequency: 3.76,
		lemma: "こえる"
	},
	{
		rank: 10729,
		frequency: 3.76,
		lemma: "細菌"
	},
	{
		rank: 10730,
		frequency: 3.76,
		lemma: "ちょう"
	},
	{
		rank: 10731,
		frequency: 3.75,
		lemma: "要員"
	},
	{
		rank: 10732,
		frequency: 3.75,
		lemma: "概ね"
	},
	{
		rank: 10733,
		frequency: 3.75,
		lemma: "教皇"
	},
	{
		rank: 10734,
		frequency: 3.75,
		lemma: "賜る"
	},
	{
		rank: 10735,
		frequency: 3.75,
		lemma: "買取"
	},
	{
		rank: 10736,
		frequency: 3.75,
		lemma: "累積"
	},
	{
		rank: 10737,
		frequency: 3.75,
		lemma: "文科"
	},
	{
		rank: 10738,
		frequency: 3.75,
		lemma: "新田"
	},
	{
		rank: 10739,
		frequency: 3.75,
		lemma: "歩み"
	},
	{
		rank: 10740,
		frequency: 3.75,
		lemma: "覆す"
	},
	{
		rank: 10741,
		frequency: 3.75,
		lemma: "なかでも"
	},
	{
		rank: 10742,
		frequency: 3.75,
		lemma: "チューブ"
	},
	{
		rank: 10743,
		frequency: 3.75,
		lemma: "台頭"
	},
	{
		rank: 10744,
		frequency: 3.75,
		lemma: "村長"
	},
	{
		rank: 10745,
		frequency: 3.75,
		lemma: "生き延びる"
	},
	{
		rank: 10746,
		frequency: 3.75,
		lemma: "過大"
	},
	{
		rank: 10747,
		frequency: 3.75,
		lemma: "無職"
	},
	{
		rank: 10748,
		frequency: 3.75,
		lemma: "消去"
	},
	{
		rank: 10749,
		frequency: 3.75,
		lemma: "破滅"
	},
	{
		rank: 10750,
		frequency: 3.75,
		lemma: "見いだす"
	},
	{
		rank: 10751,
		frequency: 3.75,
		lemma: "選別"
	},
	{
		rank: 10752,
		frequency: 3.75,
		lemma: "西武"
	},
	{
		rank: 10753,
		frequency: 3.75,
		lemma: "格納"
	},
	{
		rank: 10754,
		frequency: 3.75,
		lemma: "肝臓"
	},
	{
		rank: 10755,
		frequency: 3.75,
		lemma: "途方"
	},
	{
		rank: 10756,
		frequency: 3.75,
		lemma: "断食"
	},
	{
		rank: 10757,
		frequency: 3.74,
		lemma: "投影"
	},
	{
		rank: 10758,
		frequency: 3.74,
		lemma: "苦い"
	},
	{
		rank: 10759,
		frequency: 3.74,
		lemma: "熱中"
	},
	{
		rank: 10760,
		frequency: 3.74,
		lemma: "届出"
	},
	{
		rank: 10761,
		frequency: 3.74,
		lemma: "僧侶"
	},
	{
		rank: 10762,
		frequency: 3.74,
		lemma: "分業"
	},
	{
		rank: 10763,
		frequency: 3.74,
		lemma: "モロッコ"
	},
	{
		rank: 10764,
		frequency: 3.74,
		lemma: "長文"
	},
	{
		rank: 10765,
		frequency: 3.74,
		lemma: "買い取る"
	},
	{
		rank: 10766,
		frequency: 3.74,
		lemma: "ジョニー"
	},
	{
		rank: 10767,
		frequency: 3.74,
		lemma: "面談"
	},
	{
		rank: 10768,
		frequency: 3.74,
		lemma: "ふたたび"
	},
	{
		rank: 10769,
		frequency: 3.74,
		lemma: "年次"
	},
	{
		rank: 10770,
		frequency: 3.74,
		lemma: "クリントン"
	},
	{
		rank: 10771,
		frequency: 3.74,
		lemma: "付録"
	},
	{
		rank: 10772,
		frequency: 3.73,
		lemma: "柔道"
	},
	{
		rank: 10773,
		frequency: 3.73,
		lemma: "連行"
	},
	{
		rank: 10774,
		frequency: 3.73,
		lemma: "悪徳"
	},
	{
		rank: 10775,
		frequency: 3.73,
		lemma: "包丁"
	},
	{
		rank: 10776,
		frequency: 3.73,
		lemma: "CAD"
	},
	{
		rank: 10777,
		frequency: 3.73,
		lemma: "同調"
	},
	{
		rank: 10778,
		frequency: 3.73,
		lemma: "ダッシュ"
	},
	{
		rank: 10779,
		frequency: 3.73,
		lemma: "妙に"
	},
	{
		rank: 10780,
		frequency: 3.73,
		lemma: "一国"
	},
	{
		rank: 10781,
		frequency: 3.73,
		lemma: "暴落"
	},
	{
		rank: 10782,
		frequency: 3.73,
		lemma: "はう"
	},
	{
		rank: 10783,
		frequency: 3.73,
		lemma: "担い手"
	},
	{
		rank: 10784,
		frequency: 3.73,
		lemma: "公司"
	},
	{
		rank: 10785,
		frequency: 3.73,
		lemma: "諸島"
	},
	{
		rank: 10786,
		frequency: 3.73,
		lemma: "よみがえる"
	},
	{
		rank: 10787,
		frequency: 3.73,
		lemma: "有識者"
	},
	{
		rank: 10788,
		frequency: 3.73,
		lemma: "改装"
	},
	{
		rank: 10789,
		frequency: 3.73,
		lemma: "思いつき"
	},
	{
		rank: 10790,
		frequency: 3.73,
		lemma: "がい"
	},
	{
		rank: 10791,
		frequency: 3.73,
		lemma: "ミュンヘン"
	},
	{
		rank: 10792,
		frequency: 3.73,
		lemma: "抱きしめる"
	},
	{
		rank: 10793,
		frequency: 3.73,
		lemma: "気合い"
	},
	{
		rank: 10794,
		frequency: 3.72,
		lemma: "一夜"
	},
	{
		rank: 10795,
		frequency: 3.72,
		lemma: "統括"
	},
	{
		rank: 10796,
		frequency: 3.72,
		lemma: "供与"
	},
	{
		rank: 10797,
		frequency: 3.72,
		lemma: "に当たる"
	},
	{
		rank: 10798,
		frequency: 3.72,
		lemma: "脂"
	},
	{
		rank: 10799,
		frequency: 3.72,
		lemma: "矢野"
	},
	{
		rank: 10800,
		frequency: 3.72,
		lemma: "冷房"
	},
	{
		rank: 10801,
		frequency: 3.72,
		lemma: "ナポレオン"
	},
	{
		rank: 10802,
		frequency: 3.72,
		lemma: "レオ"
	},
	{
		rank: 10803,
		frequency: 3.72,
		lemma: "憎む"
	},
	{
		rank: 10804,
		frequency: 3.72,
		lemma: "手当て"
	},
	{
		rank: 10805,
		frequency: 3.72,
		lemma: "月別"
	},
	{
		rank: 10806,
		frequency: 3.72,
		lemma: "サボる"
	},
	{
		rank: 10807,
		frequency: 3.72,
		lemma: "ストレッチ"
	},
	{
		rank: 10808,
		frequency: 3.71,
		lemma: "主査"
	},
	{
		rank: 10809,
		frequency: 3.71,
		lemma: "蔓延"
	},
	{
		rank: 10810,
		frequency: 3.71,
		lemma: "ビート"
	},
	{
		rank: 10811,
		frequency: 3.71,
		lemma: "プライア"
	},
	{
		rank: 10812,
		frequency: 3.71,
		lemma: "開演"
	},
	{
		rank: 10813,
		frequency: 3.71,
		lemma: "陳情"
	},
	{
		rank: 10814,
		frequency: 3.71,
		lemma: "ドール"
	},
	{
		rank: 10815,
		frequency: 3.71,
		lemma: "批准"
	},
	{
		rank: 10816,
		frequency: 3.71,
		lemma: "眺め"
	},
	{
		rank: 10817,
		frequency: 3.71,
		lemma: "玄米"
	},
	{
		rank: 10818,
		frequency: 3.71,
		lemma: "ひさし"
	},
	{
		rank: 10819,
		frequency: 3.71,
		lemma: "インスタント"
	},
	{
		rank: 10820,
		frequency: 3.71,
		lemma: "漏らす"
	},
	{
		rank: 10821,
		frequency: 3.71,
		lemma: "運搬"
	},
	{
		rank: 10822,
		frequency: 3.71,
		lemma: "予備校"
	},
	{
		rank: 10823,
		frequency: 3.71,
		lemma: "イタリアン"
	},
	{
		rank: 10824,
		frequency: 3.71,
		lemma: "ぶっ"
	},
	{
		rank: 10825,
		frequency: 3.71,
		lemma: "遼"
	},
	{
		rank: 10826,
		frequency: 3.71,
		lemma: "引ける"
	},
	{
		rank: 10827,
		frequency: 3.71,
		lemma: "母体"
	},
	{
		rank: 10828,
		frequency: 3.71,
		lemma: "宅地"
	},
	{
		rank: 10829,
		frequency: 3.71,
		lemma: "ご馳走"
	},
	{
		rank: 10830,
		frequency: 3.71,
		lemma: "幸子"
	},
	{
		rank: 10831,
		frequency: 3.71,
		lemma: "断然"
	},
	{
		rank: 10832,
		frequency: 3.71,
		lemma: "日ごろ"
	},
	{
		rank: 10833,
		frequency: 3.71,
		lemma: "富士通"
	},
	{
		rank: 10834,
		frequency: 3.71,
		lemma: "リモート"
	},
	{
		rank: 10835,
		frequency: 3.7,
		lemma: "お洒落"
	},
	{
		rank: 10836,
		frequency: 3.7,
		lemma: "本稿"
	},
	{
		rank: 10837,
		frequency: 3.7,
		lemma: "恐る"
	},
	{
		rank: 10838,
		frequency: 3.7,
		lemma: "索引"
	},
	{
		rank: 10839,
		frequency: 3.7,
		lemma: "われる"
	},
	{
		rank: 10840,
		frequency: 3.7,
		lemma: "大嫌い"
	},
	{
		rank: 10841,
		frequency: 3.7,
		lemma: "見据える"
	},
	{
		rank: 10842,
		frequency: 3.7,
		lemma: "破損"
	},
	{
		rank: 10843,
		frequency: 3.7,
		lemma: "ハードル"
	},
	{
		rank: 10844,
		frequency: 3.7,
		lemma: "見知らぬ"
	},
	{
		rank: 10845,
		frequency: 3.7,
		lemma: "さんざん"
	},
	{
		rank: 10846,
		frequency: 3.7,
		lemma: "まったり"
	},
	{
		rank: 10847,
		frequency: 3.7,
		lemma: "こく"
	},
	{
		rank: 10848,
		frequency: 3.7,
		lemma: "灰色"
	},
	{
		rank: 10849,
		frequency: 3.7,
		lemma: "取り消す"
	},
	{
		rank: 10850,
		frequency: 3.7,
		lemma: "裁く"
	},
	{
		rank: 10851,
		frequency: 3.7,
		lemma: "過"
	},
	{
		rank: 10852,
		frequency: 3.7,
		lemma: "構内"
	},
	{
		rank: 10853,
		frequency: 3.7,
		lemma: "ベタ"
	},
	{
		rank: 10854,
		frequency: 3.7,
		lemma: "思い立つ"
	},
	{
		rank: 10855,
		frequency: 3.7,
		lemma: "貯蔵"
	},
	{
		rank: 10856,
		frequency: 3.7,
		lemma: "工学部"
	},
	{
		rank: 10857,
		frequency: 3.69,
		lemma: "王者"
	},
	{
		rank: 10858,
		frequency: 3.69,
		lemma: "混ざる"
	},
	{
		rank: 10859,
		frequency: 3.69,
		lemma: "魅了"
	},
	{
		rank: 10860,
		frequency: 3.69,
		lemma: "すんなり"
	},
	{
		rank: 10861,
		frequency: 3.69,
		lemma: "希薄"
	},
	{
		rank: 10862,
		frequency: 3.69,
		lemma: "気まま"
	},
	{
		rank: 10863,
		frequency: 3.69,
		lemma: "古川"
	},
	{
		rank: 10864,
		frequency: 3.69,
		lemma: "後編"
	},
	{
		rank: 10865,
		frequency: 3.69,
		lemma: "暁"
	},
	{
		rank: 10866,
		frequency: 3.69,
		lemma: "税源"
	},
	{
		rank: 10867,
		frequency: 3.69,
		lemma: "にあたり"
	},
	{
		rank: 10868,
		frequency: 3.69,
		lemma: "青色"
	},
	{
		rank: 10869,
		frequency: 3.69,
		lemma: "マリー"
	},
	{
		rank: 10870,
		frequency: 3.69,
		lemma: "将"
	},
	{
		rank: 10871,
		frequency: 3.69,
		lemma: "漱石"
	},
	{
		rank: 10872,
		frequency: 3.69,
		lemma: "足らず"
	},
	{
		rank: 10873,
		frequency: 3.69,
		lemma: "相方"
	},
	{
		rank: 10874,
		frequency: 3.69,
		lemma: "スクロール"
	},
	{
		rank: 10875,
		frequency: 3.68,
		lemma: "ジョーンズ"
	},
	{
		rank: 10876,
		frequency: 3.68,
		lemma: "ネジ"
	},
	{
		rank: 10877,
		frequency: 3.68,
		lemma: "だんだんと"
	},
	{
		rank: 10878,
		frequency: 3.68,
		lemma: "斜面"
	},
	{
		rank: 10879,
		frequency: 3.68,
		lemma: "空軍"
	},
	{
		rank: 10880,
		frequency: 3.68,
		lemma: "発端"
	},
	{
		rank: 10881,
		frequency: 3.68,
		lemma: "仕事場"
	},
	{
		rank: 10882,
		frequency: 3.68,
		lemma: "次官"
	},
	{
		rank: 10883,
		frequency: 3.68,
		lemma: "くむ"
	},
	{
		rank: 10884,
		frequency: 3.68,
		lemma: "あたたかい"
	},
	{
		rank: 10885,
		frequency: 3.68,
		lemma: "豚肉"
	},
	{
		rank: 10886,
		frequency: 3.67,
		lemma: "あるく"
	},
	{
		rank: 10887,
		frequency: 3.67,
		lemma: "微生物"
	},
	{
		rank: 10888,
		frequency: 3.67,
		lemma: "不服"
	},
	{
		rank: 10889,
		frequency: 3.67,
		lemma: "たいす"
	},
	{
		rank: 10890,
		frequency: 3.67,
		lemma: "一段と"
	},
	{
		rank: 10891,
		frequency: 3.67,
		lemma: "函館"
	},
	{
		rank: 10892,
		frequency: 3.67,
		lemma: "オシャレ"
	},
	{
		rank: 10893,
		frequency: 3.67,
		lemma: "ムリ"
	},
	{
		rank: 10894,
		frequency: 3.67,
		lemma: "至上"
	},
	{
		rank: 10895,
		frequency: 3.67,
		lemma: "サード"
	},
	{
		rank: 10896,
		frequency: 3.67,
		lemma: "藍"
	},
	{
		rank: 10897,
		frequency: 3.67,
		lemma: "優待"
	},
	{
		rank: 10898,
		frequency: 3.67,
		lemma: "労災"
	},
	{
		rank: 10899,
		frequency: 3.67,
		lemma: "取り締まり"
	},
	{
		rank: 10900,
		frequency: 3.67,
		lemma: "信長"
	},
	{
		rank: 10901,
		frequency: 3.67,
		lemma: "幼少"
	},
	{
		rank: 10902,
		frequency: 3.67,
		lemma: "こんなにも"
	},
	{
		rank: 10903,
		frequency: 3.67,
		lemma: "北東"
	},
	{
		rank: 10904,
		frequency: 3.67,
		lemma: "一文"
	},
	{
		rank: 10905,
		frequency: 3.67,
		lemma: "アンチ"
	},
	{
		rank: 10906,
		frequency: 3.66,
		lemma: "乙女"
	},
	{
		rank: 10907,
		frequency: 3.66,
		lemma: "れん"
	},
	{
		rank: 10908,
		frequency: 3.66,
		lemma: "速記"
	},
	{
		rank: 10909,
		frequency: 3.66,
		lemma: "競売"
	},
	{
		rank: 10910,
		frequency: 3.66,
		lemma: "かっこよい"
	},
	{
		rank: 10911,
		frequency: 3.66,
		lemma: "共和党"
	},
	{
		rank: 10912,
		frequency: 3.66,
		lemma: "おこす"
	},
	{
		rank: 10913,
		frequency: 3.66,
		lemma: "属"
	},
	{
		rank: 10914,
		frequency: 3.66,
		lemma: "ＦＡＸ"
	},
	{
		rank: 10915,
		frequency: 3.66,
		lemma: "接着"
	},
	{
		rank: 10916,
		frequency: 3.66,
		lemma: "ジェフ"
	},
	{
		rank: 10917,
		frequency: 3.66,
		lemma: "個室"
	},
	{
		rank: 10918,
		frequency: 3.66,
		lemma: "ありとあらゆる"
	},
	{
		rank: 10919,
		frequency: 3.66,
		lemma: "埋もれる"
	},
	{
		rank: 10920,
		frequency: 3.66,
		lemma: "黒田"
	},
	{
		rank: 10921,
		frequency: 3.66,
		lemma: "制覇"
	},
	{
		rank: 10922,
		frequency: 3.66,
		lemma: "役職"
	},
	{
		rank: 10923,
		frequency: 3.66,
		lemma: "際立つ"
	},
	{
		rank: 10924,
		frequency: 3.66,
		lemma: "ニコニコ"
	},
	{
		rank: 10925,
		frequency: 3.66,
		lemma: "目先"
	},
	{
		rank: 10926,
		frequency: 3.66,
		lemma: "攻勢"
	},
	{
		rank: 10927,
		frequency: 3.66,
		lemma: "かりに"
	},
	{
		rank: 10928,
		frequency: 3.66,
		lemma: "許諾"
	},
	{
		rank: 10929,
		frequency: 3.65,
		lemma: "突撃"
	},
	{
		rank: 10930,
		frequency: 3.65,
		lemma: "ディック"
	},
	{
		rank: 10931,
		frequency: 3.65,
		lemma: "頑固"
	},
	{
		rank: 10932,
		frequency: 3.65,
		lemma: "切実"
	},
	{
		rank: 10933,
		frequency: 3.65,
		lemma: "下半身"
	},
	{
		rank: 10934,
		frequency: 3.65,
		lemma: "レジャー"
	},
	{
		rank: 10935,
		frequency: 3.65,
		lemma: "へぇ"
	},
	{
		rank: 10936,
		frequency: 3.65,
		lemma: "偏差"
	},
	{
		rank: 10937,
		frequency: 3.65,
		lemma: "一体化"
	},
	{
		rank: 10938,
		frequency: 3.65,
		lemma: "転倒"
	},
	{
		rank: 10939,
		frequency: 3.65,
		lemma: "衣服"
	},
	{
		rank: 10940,
		frequency: 3.65,
		lemma: "折衝"
	},
	{
		rank: 10941,
		frequency: 3.65,
		lemma: "英寿"
	},
	{
		rank: 10942,
		frequency: 3.65,
		lemma: "切り取る"
	},
	{
		rank: 10943,
		frequency: 3.65,
		lemma: "追"
	},
	{
		rank: 10944,
		frequency: 3.65,
		lemma: "駆動"
	},
	{
		rank: 10945,
		frequency: 3.65,
		lemma: "入れ替える"
	},
	{
		rank: 10946,
		frequency: 3.65,
		lemma: "解像度"
	},
	{
		rank: 10947,
		frequency: 3.65,
		lemma: "スティング"
	},
	{
		rank: 10948,
		frequency: 3.64,
		lemma: "滑走"
	},
	{
		rank: 10949,
		frequency: 3.64,
		lemma: "注入"
	},
	{
		rank: 10950,
		frequency: 3.64,
		lemma: "むかう"
	},
	{
		rank: 10951,
		frequency: 3.64,
		lemma: "あきれる"
	},
	{
		rank: 10952,
		frequency: 3.64,
		lemma: "殺る"
	},
	{
		rank: 10953,
		frequency: 3.64,
		lemma: "語り合う"
	},
	{
		rank: 10954,
		frequency: 3.64,
		lemma: "淡路"
	},
	{
		rank: 10955,
		frequency: 3.64,
		lemma: "ムシる"
	},
	{
		rank: 10956,
		frequency: 3.64,
		lemma: "期す"
	},
	{
		rank: 10957,
		frequency: 3.64,
		lemma: "末端"
	},
	{
		rank: 10958,
		frequency: 3.64,
		lemma: "マンハッタン"
	},
	{
		rank: 10959,
		frequency: 3.64,
		lemma: "たとえる"
	},
	{
		rank: 10960,
		frequency: 3.64,
		lemma: "っと"
	},
	{
		rank: 10961,
		frequency: 3.64,
		lemma: "マダム"
	},
	{
		rank: 10962,
		frequency: 3.64,
		lemma: "気質"
	},
	{
		rank: 10963,
		frequency: 3.64,
		lemma: "課金"
	},
	{
		rank: 10964,
		frequency: 3.64,
		lemma: "ヘリコプター"
	},
	{
		rank: 10965,
		frequency: 3.64,
		lemma: "弁論"
	},
	{
		rank: 10966,
		frequency: 3.64,
		lemma: "凶悪"
	},
	{
		rank: 10967,
		frequency: 3.64,
		lemma: "松永"
	},
	{
		rank: 10968,
		frequency: 3.64,
		lemma: "くう"
	},
	{
		rank: 10969,
		frequency: 3.64,
		lemma: "たちまち"
	},
	{
		rank: 10970,
		frequency: 3.64,
		lemma: "モト"
	},
	{
		rank: 10971,
		frequency: 3.64,
		lemma: "ルカ"
	},
	{
		rank: 10972,
		frequency: 3.64,
		lemma: "キューブ"
	},
	{
		rank: 10973,
		frequency: 3.64,
		lemma: "健太郎"
	},
	{
		rank: 10974,
		frequency: 3.64,
		lemma: "担ぐ"
	},
	{
		rank: 10975,
		frequency: 3.63,
		lemma: "子宮"
	},
	{
		rank: 10976,
		frequency: 3.63,
		lemma: "憤る"
	},
	{
		rank: 10977,
		frequency: 3.63,
		lemma: "重宝"
	},
	{
		rank: 10978,
		frequency: 3.63,
		lemma: "難解"
	},
	{
		rank: 10979,
		frequency: 3.63,
		lemma: "捕獲"
	},
	{
		rank: 10980,
		frequency: 3.63,
		lemma: "雅"
	},
	{
		rank: 10981,
		frequency: 3.63,
		lemma: "ご苦労"
	},
	{
		rank: 10982,
		frequency: 3.63,
		lemma: "彼方"
	},
	{
		rank: 10983,
		frequency: 3.63,
		lemma: "因みに"
	},
	{
		rank: 10984,
		frequency: 3.63,
		lemma: "スタディ"
	},
	{
		rank: 10985,
		frequency: 3.63,
		lemma: "みずほ"
	},
	{
		rank: 10986,
		frequency: 3.63,
		lemma: "宝物"
	},
	{
		rank: 10987,
		frequency: 3.63,
		lemma: "ベクトル"
	},
	{
		rank: 10988,
		frequency: 3.63,
		lemma: "すわる"
	},
	{
		rank: 10989,
		frequency: 3.63,
		lemma: "回し"
	},
	{
		rank: 10990,
		frequency: 3.63,
		lemma: "太陽光"
	},
	{
		rank: 10991,
		frequency: 3.63,
		lemma: "赴く"
	},
	{
		rank: 10992,
		frequency: 3.62,
		lemma: "漏洩"
	},
	{
		rank: 10993,
		frequency: 3.62,
		lemma: "征服"
	},
	{
		rank: 10994,
		frequency: 3.62,
		lemma: "飛び交う"
	},
	{
		rank: 10995,
		frequency: 3.62,
		lemma: "ヘンリー"
	},
	{
		rank: 10996,
		frequency: 3.62,
		lemma: "山頂"
	},
	{
		rank: 10997,
		frequency: 3.62,
		lemma: "趣"
	},
	{
		rank: 10998,
		frequency: 3.62,
		lemma: "貯まる"
	},
	{
		rank: 10999,
		frequency: 3.62,
		lemma: "地方裁判所"
	},
	{
		rank: 11000,
		frequency: 3.62,
		lemma: "旋律"
	},
	{
		rank: 11001,
		frequency: 3.62,
		lemma: "ワーキング"
	},
	{
		rank: 11002,
		frequency: 3.62,
		lemma: "万一"
	},
	{
		rank: 11003,
		frequency: 3.62,
		lemma: "因子"
	},
	{
		rank: 11004,
		frequency: 3.62,
		lemma: "名言"
	},
	{
		rank: 11005,
		frequency: 3.62,
		lemma: "裕福"
	},
	{
		rank: 11006,
		frequency: 3.62,
		lemma: "変貌"
	},
	{
		rank: 11007,
		frequency: 3.62,
		lemma: "送り込む"
	},
	{
		rank: 11008,
		frequency: 3.62,
		lemma: "政務次官"
	},
	{
		rank: 11009,
		frequency: 3.62,
		lemma: "街頭"
	},
	{
		rank: 11010,
		frequency: 3.62,
		lemma: "フィード"
	},
	{
		rank: 11011,
		frequency: 3.62,
		lemma: "賛美"
	},
	{
		rank: 11012,
		frequency: 3.62,
		lemma: "ウォーク"
	},
	{
		rank: 11013,
		frequency: 3.62,
		lemma: "サンドイッチ"
	},
	{
		rank: 11014,
		frequency: 3.62,
		lemma: "押し寄せる"
	},
	{
		rank: 11015,
		frequency: 3.61,
		lemma: "悠"
	},
	{
		rank: 11016,
		frequency: 3.61,
		lemma: "すてき"
	},
	{
		rank: 11017,
		frequency: 3.61,
		lemma: "大小"
	},
	{
		rank: 11018,
		frequency: 3.61,
		lemma: "にたいして"
	},
	{
		rank: 11019,
		frequency: 3.61,
		lemma: "断固"
	},
	{
		rank: 11020,
		frequency: 3.61,
		lemma: "光学"
	},
	{
		rank: 11021,
		frequency: 3.61,
		lemma: "武道"
	},
	{
		rank: 11022,
		frequency: 3.61,
		lemma: "ちょいと"
	},
	{
		rank: 11023,
		frequency: 3.61,
		lemma: "講ずる"
	},
	{
		rank: 11024,
		frequency: 3.61,
		lemma: "辞職"
	},
	{
		rank: 11025,
		frequency: 3.61,
		lemma: "ａ"
	},
	{
		rank: 11026,
		frequency: 3.61,
		lemma: "言い聞かせる"
	},
	{
		rank: 11027,
		frequency: 3.61,
		lemma: "ついていける"
	},
	{
		rank: 11028,
		frequency: 3.61,
		lemma: "履修"
	},
	{
		rank: 11029,
		frequency: 3.61,
		lemma: "代償"
	},
	{
		rank: 11030,
		frequency: 3.61,
		lemma: "ハンター"
	},
	{
		rank: 11031,
		frequency: 3.61,
		lemma: "ひな"
	},
	{
		rank: 11032,
		frequency: 3.61,
		lemma: "かね"
	},
	{
		rank: 11033,
		frequency: 3.61,
		lemma: "再検討"
	},
	{
		rank: 11034,
		frequency: 3.6,
		lemma: "なぐ"
	},
	{
		rank: 11035,
		frequency: 3.6,
		lemma: "古来"
	},
	{
		rank: 11036,
		frequency: 3.6,
		lemma: "高温"
	},
	{
		rank: 11037,
		frequency: 3.6,
		lemma: "ヒロ"
	},
	{
		rank: 11038,
		frequency: 3.6,
		lemma: "驚愕"
	},
	{
		rank: 11039,
		frequency: 3.6,
		lemma: "乱れる"
	},
	{
		rank: 11040,
		frequency: 3.6,
		lemma: "靴下"
	},
	{
		rank: 11041,
		frequency: 3.6,
		lemma: "トウ"
	},
	{
		rank: 11042,
		frequency: 3.6,
		lemma: "マネージメント"
	},
	{
		rank: 11043,
		frequency: 3.6,
		lemma: "ストレージ"
	},
	{
		rank: 11044,
		frequency: 3.6,
		lemma: "ばらばら"
	},
	{
		rank: 11045,
		frequency: 3.6,
		lemma: "崖"
	},
	{
		rank: 11046,
		frequency: 3.6,
		lemma: "千代田"
	},
	{
		rank: 11047,
		frequency: 3.6,
		lemma: "帖"
	},
	{
		rank: 11048,
		frequency: 3.6,
		lemma: "妖怪"
	},
	{
		rank: 11049,
		frequency: 3.6,
		lemma: "文化庁"
	},
	{
		rank: 11050,
		frequency: 3.6,
		lemma: "盛況"
	},
	{
		rank: 11051,
		frequency: 3.6,
		lemma: "明言"
	},
	{
		rank: 11052,
		frequency: 3.6,
		lemma: "宝塚"
	},
	{
		rank: 11053,
		frequency: 3.6,
		lemma: "叶える"
	},
	{
		rank: 11054,
		frequency: 3.6,
		lemma: "御覧"
	},
	{
		rank: 11055,
		frequency: 3.6,
		lemma: "洞察"
	},
	{
		rank: 11056,
		frequency: 3.6,
		lemma: "温める"
	},
	{
		rank: 11057,
		frequency: 3.6,
		lemma: "行き着く"
	},
	{
		rank: 11058,
		frequency: 3.6,
		lemma: "カリ"
	},
	{
		rank: 11059,
		frequency: 3.59,
		lemma: "おう"
	},
	{
		rank: 11060,
		frequency: 3.59,
		lemma: "充てる"
	},
	{
		rank: 11061,
		frequency: 3.59,
		lemma: "文体"
	},
	{
		rank: 11062,
		frequency: 3.59,
		lemma: "手抜き"
	},
	{
		rank: 11063,
		frequency: 3.59,
		lemma: "美学"
	},
	{
		rank: 11064,
		frequency: 3.59,
		lemma: "現職"
	},
	{
		rank: 11065,
		frequency: 3.59,
		lemma: "つきあい"
	},
	{
		rank: 11066,
		frequency: 3.59,
		lemma: "参事官"
	},
	{
		rank: 11067,
		frequency: 3.59,
		lemma: "催眠"
	},
	{
		rank: 11068,
		frequency: 3.59,
		lemma: "ふれあう"
	},
	{
		rank: 11069,
		frequency: 3.59,
		lemma: "見合い"
	},
	{
		rank: 11070,
		frequency: 3.59,
		lemma: "それでいて"
	},
	{
		rank: 11071,
		frequency: 3.58,
		lemma: "京大"
	},
	{
		rank: 11072,
		frequency: 3.58,
		lemma: "ネック"
	},
	{
		rank: 11073,
		frequency: 3.58,
		lemma: "占有"
	},
	{
		rank: 11074,
		frequency: 3.58,
		lemma: "パール"
	},
	{
		rank: 11075,
		frequency: 3.58,
		lemma: "要点"
	},
	{
		rank: 11076,
		frequency: 3.58,
		lemma: "便宜"
	},
	{
		rank: 11077,
		frequency: 3.58,
		lemma: "だに"
	},
	{
		rank: 11078,
		frequency: 3.58,
		lemma: "チック"
	},
	{
		rank: 11079,
		frequency: 3.58,
		lemma: "回帰"
	},
	{
		rank: 11080,
		frequency: 3.58,
		lemma: "納品"
	},
	{
		rank: 11081,
		frequency: 3.58,
		lemma: "有事"
	},
	{
		rank: 11082,
		frequency: 3.58,
		lemma: "真っ先"
	},
	{
		rank: 11083,
		frequency: 3.58,
		lemma: "ひっそり"
	},
	{
		rank: 11084,
		frequency: 3.58,
		lemma: "傾斜"
	},
	{
		rank: 11085,
		frequency: 3.58,
		lemma: "ヤング"
	},
	{
		rank: 11086,
		frequency: 3.58,
		lemma: "卸"
	},
	{
		rank: 11087,
		frequency: 3.58,
		lemma: "逢う"
	},
	{
		rank: 11088,
		frequency: 3.58,
		lemma: "海賊"
	},
	{
		rank: 11089,
		frequency: 3.58,
		lemma: "腫瘍"
	},
	{
		rank: 11090,
		frequency: 3.58,
		lemma: "列挙"
	},
	{
		rank: 11091,
		frequency: 3.58,
		lemma: "異質"
	},
	{
		rank: 11092,
		frequency: 3.58,
		lemma: "ムラ"
	},
	{
		rank: 11093,
		frequency: 3.58,
		lemma: "月末"
	},
	{
		rank: 11094,
		frequency: 3.57,
		lemma: "初対面"
	},
	{
		rank: 11095,
		frequency: 3.57,
		lemma: "くり"
	},
	{
		rank: 11096,
		frequency: 3.57,
		lemma: "使いこなす"
	},
	{
		rank: 11097,
		frequency: 3.57,
		lemma: "図鑑"
	},
	{
		rank: 11098,
		frequency: 3.57,
		lemma: "おおよそ"
	},
	{
		rank: 11099,
		frequency: 3.57,
		lemma: "根強い"
	},
	{
		rank: 11100,
		frequency: 3.57,
		lemma: "忍"
	},
	{
		rank: 11101,
		frequency: 3.57,
		lemma: "ウインドウ"
	},
	{
		rank: 11102,
		frequency: 3.57,
		lemma: "しあわせ"
	},
	{
		rank: 11103,
		frequency: 3.57,
		lemma: "訳者"
	},
	{
		rank: 11104,
		frequency: 3.57,
		lemma: "白石"
	},
	{
		rank: 11105,
		frequency: 3.57,
		lemma: "粋"
	},
	{
		rank: 11106,
		frequency: 3.57,
		lemma: "作詞"
	},
	{
		rank: 11107,
		frequency: 3.57,
		lemma: "馴染む"
	},
	{
		rank: 11108,
		frequency: 3.57,
		lemma: "代物"
	},
	{
		rank: 11109,
		frequency: 3.57,
		lemma: "パズル"
	},
	{
		rank: 11110,
		frequency: 3.56,
		lemma: "蚊"
	},
	{
		rank: 11111,
		frequency: 3.56,
		lemma: "バッファ"
	},
	{
		rank: 11112,
		frequency: 3.56,
		lemma: "聴覚"
	},
	{
		rank: 11113,
		frequency: 3.56,
		lemma: "即時"
	},
	{
		rank: 11114,
		frequency: 3.56,
		lemma: "謂"
	},
	{
		rank: 11115,
		frequency: 3.56,
		lemma: "飯田"
	},
	{
		rank: 11116,
		frequency: 3.56,
		lemma: "塗料"
	},
	{
		rank: 11117,
		frequency: 3.56,
		lemma: "新車"
	},
	{
		rank: 11118,
		frequency: 3.56,
		lemma: "井戸"
	},
	{
		rank: 11119,
		frequency: 3.56,
		lemma: "赤坂"
	},
	{
		rank: 11120,
		frequency: 3.56,
		lemma: "リポート"
	},
	{
		rank: 11121,
		frequency: 3.56,
		lemma: "鈍い"
	},
	{
		rank: 11122,
		frequency: 3.56,
		lemma: "納付"
	},
	{
		rank: 11123,
		frequency: 3.56,
		lemma: "少人数"
	},
	{
		rank: 11124,
		frequency: 3.56,
		lemma: "俗"
	},
	{
		rank: 11125,
		frequency: 3.56,
		lemma: "無謀"
	},
	{
		rank: 11126,
		frequency: 3.56,
		lemma: "花嫁"
	},
	{
		rank: 11127,
		frequency: 3.56,
		lemma: "選び方"
	},
	{
		rank: 11128,
		frequency: 3.56,
		lemma: "服用"
	},
	{
		rank: 11129,
		frequency: 3.56,
		lemma: "あとがき"
	},
	{
		rank: 11130,
		frequency: 3.56,
		lemma: "パッド"
	},
	{
		rank: 11131,
		frequency: 3.56,
		lemma: "授与"
	},
	{
		rank: 11132,
		frequency: 3.56,
		lemma: "標高"
	},
	{
		rank: 11133,
		frequency: 3.56,
		lemma: "代える"
	},
	{
		rank: 11134,
		frequency: 3.56,
		lemma: "図形"
	},
	{
		rank: 11135,
		frequency: 3.56,
		lemma: "穀物"
	},
	{
		rank: 11136,
		frequency: 3.56,
		lemma: "困惑"
	},
	{
		rank: 11137,
		frequency: 3.56,
		lemma: "分厚い"
	},
	{
		rank: 11138,
		frequency: 3.56,
		lemma: "文学部"
	},
	{
		rank: 11139,
		frequency: 3.56,
		lemma: "上京"
	},
	{
		rank: 11140,
		frequency: 3.56,
		lemma: "リフレッシュ"
	},
	{
		rank: 11141,
		frequency: 3.55,
		lemma: "ミュージアム"
	},
	{
		rank: 11142,
		frequency: 3.55,
		lemma: "っちゅう"
	},
	{
		rank: 11143,
		frequency: 3.55,
		lemma: "つくば"
	},
	{
		rank: 11144,
		frequency: 3.55,
		lemma: "蒸気"
	},
	{
		rank: 11145,
		frequency: 3.55,
		lemma: "電磁波"
	},
	{
		rank: 11146,
		frequency: 3.55,
		lemma: "強固"
	},
	{
		rank: 11147,
		frequency: 3.55,
		lemma: "姉ちゃん"
	},
	{
		rank: 11148,
		frequency: 3.55,
		lemma: "万能"
	},
	{
		rank: 11149,
		frequency: 3.55,
		lemma: "吉野"
	},
	{
		rank: 11150,
		frequency: 3.55,
		lemma: "結集"
	},
	{
		rank: 11151,
		frequency: 3.55,
		lemma: "メタル"
	},
	{
		rank: 11152,
		frequency: 3.55,
		lemma: "役場"
	},
	{
		rank: 11153,
		frequency: 3.55,
		lemma: "忍者"
	},
	{
		rank: 11154,
		frequency: 3.55,
		lemma: "桜井"
	},
	{
		rank: 11155,
		frequency: 3.55,
		lemma: "必至"
	},
	{
		rank: 11156,
		frequency: 3.55,
		lemma: "仕入れ"
	},
	{
		rank: 11157,
		frequency: 3.55,
		lemma: "侮辱"
	},
	{
		rank: 11158,
		frequency: 3.55,
		lemma: "寄稿"
	},
	{
		rank: 11159,
		frequency: 3.55,
		lemma: "となり"
	},
	{
		rank: 11160,
		frequency: 3.55,
		lemma: "慮る"
	},
	{
		rank: 11161,
		frequency: 3.55,
		lemma: "カラダ"
	},
	{
		rank: 11162,
		frequency: 3.54,
		lemma: "吉岡"
	},
	{
		rank: 11163,
		frequency: 3.54,
		lemma: "作法"
	},
	{
		rank: 11164,
		frequency: 3.54,
		lemma: "良識"
	},
	{
		rank: 11165,
		frequency: 3.54,
		lemma: "バレンタイン"
	},
	{
		rank: 11166,
		frequency: 3.54,
		lemma: "味覚"
	},
	{
		rank: 11167,
		frequency: 3.54,
		lemma: "新潮社"
	},
	{
		rank: 11168,
		frequency: 3.54,
		lemma: "番外"
	},
	{
		rank: 11169,
		frequency: 3.54,
		lemma: "向かい"
	},
	{
		rank: 11170,
		frequency: 3.54,
		lemma: "受託"
	},
	{
		rank: 11171,
		frequency: 3.54,
		lemma: "大学院生"
	},
	{
		rank: 11172,
		frequency: 3.54,
		lemma: "クリーニング"
	},
	{
		rank: 11173,
		frequency: 3.54,
		lemma: "歩き回る"
	},
	{
		rank: 11174,
		frequency: 3.54,
		lemma: "平田"
	},
	{
		rank: 11175,
		frequency: 3.54,
		lemma: "メダル"
	},
	{
		rank: 11176,
		frequency: 3.54,
		lemma: "時給"
	},
	{
		rank: 11177,
		frequency: 3.54,
		lemma: "ニセ"
	},
	{
		rank: 11178,
		frequency: 3.54,
		lemma: "片づける"
	},
	{
		rank: 11179,
		frequency: 3.54,
		lemma: "小松"
	},
	{
		rank: 11180,
		frequency: 3.54,
		lemma: "派閥"
	},
	{
		rank: 11181,
		frequency: 3.54,
		lemma: "傍ら"
	},
	{
		rank: 11182,
		frequency: 3.54,
		lemma: "米価"
	},
	{
		rank: 11183,
		frequency: 3.54,
		lemma: "苦しめる"
	},
	{
		rank: 11184,
		frequency: 3.54,
		lemma: "テクノ"
	},
	{
		rank: 11185,
		frequency: 3.54,
		lemma: "着信"
	},
	{
		rank: 11186,
		frequency: 3.54,
		lemma: "相応"
	},
	{
		rank: 11187,
		frequency: 3.54,
		lemma: "終焉"
	},
	{
		rank: 11188,
		frequency: 3.54,
		lemma: "テール"
	},
	{
		rank: 11189,
		frequency: 3.54,
		lemma: "樹立"
	},
	{
		rank: 11190,
		frequency: 3.54,
		lemma: "係数"
	},
	{
		rank: 11191,
		frequency: 3.53,
		lemma: "堤"
	},
	{
		rank: 11192,
		frequency: 3.53,
		lemma: "大して"
	},
	{
		rank: 11193,
		frequency: 3.53,
		lemma: "遣う"
	},
	{
		rank: 11194,
		frequency: 3.53,
		lemma: "公然"
	},
	{
		rank: 11195,
		frequency: 3.53,
		lemma: "空手"
	},
	{
		rank: 11196,
		frequency: 3.53,
		lemma: "歌舞伎町"
	},
	{
		rank: 11197,
		frequency: 3.53,
		lemma: "鹿島"
	},
	{
		rank: 11198,
		frequency: 3.53,
		lemma: "西尾"
	},
	{
		rank: 11199,
		frequency: 3.53,
		lemma: "ブラインド"
	},
	{
		rank: 11200,
		frequency: 3.53,
		lemma: "木下"
	},
	{
		rank: 11201,
		frequency: 3.53,
		lemma: "ただちに"
	},
	{
		rank: 11202,
		frequency: 3.53,
		lemma: "模擬"
	},
	{
		rank: 11203,
		frequency: 3.53,
		lemma: "崎"
	},
	{
		rank: 11204,
		frequency: 3.53,
		lemma: "始動"
	},
	{
		rank: 11205,
		frequency: 3.53,
		lemma: "力量"
	},
	{
		rank: 11206,
		frequency: 3.53,
		lemma: "舐める"
	},
	{
		rank: 11207,
		frequency: 3.53,
		lemma: "ハブ"
	},
	{
		rank: 11208,
		frequency: 3.53,
		lemma: "散会"
	},
	{
		rank: 11209,
		frequency: 3.53,
		lemma: "歓声"
	},
	{
		rank: 11210,
		frequency: 3.53,
		lemma: "逃避"
	},
	{
		rank: 11211,
		frequency: 3.53,
		lemma: "ワシ"
	},
	{
		rank: 11212,
		frequency: 3.53,
		lemma: "道路公団"
	},
	{
		rank: 11213,
		frequency: 3.52,
		lemma: "ぼう"
	},
	{
		rank: 11214,
		frequency: 3.52,
		lemma: "併合"
	},
	{
		rank: 11215,
		frequency: 3.52,
		lemma: "留保"
	},
	{
		rank: 11216,
		frequency: 3.52,
		lemma: "秋山"
	},
	{
		rank: 11217,
		frequency: 3.52,
		lemma: "有志"
	},
	{
		rank: 11218,
		frequency: 3.52,
		lemma: "カプセル"
	},
	{
		rank: 11219,
		frequency: 3.52,
		lemma: "処女"
	},
	{
		rank: 11220,
		frequency: 3.52,
		lemma: "参院"
	},
	{
		rank: 11221,
		frequency: 3.52,
		lemma: "カナ"
	},
	{
		rank: 11222,
		frequency: 3.52,
		lemma: "バリュー"
	},
	{
		rank: 11223,
		frequency: 3.52,
		lemma: "わざ"
	},
	{
		rank: 11224,
		frequency: 3.52,
		lemma: "お忙しい"
	},
	{
		rank: 11225,
		frequency: 3.52,
		lemma: "ホームステイ"
	},
	{
		rank: 11226,
		frequency: 3.52,
		lemma: "感銘"
	},
	{
		rank: 11227,
		frequency: 3.52,
		lemma: "おん"
	},
	{
		rank: 11228,
		frequency: 3.52,
		lemma: "増設"
	},
	{
		rank: 11229,
		frequency: 3.52,
		lemma: "旅立つ"
	},
	{
		rank: 11230,
		frequency: 3.52,
		lemma: "浪費"
	},
	{
		rank: 11231,
		frequency: 3.52,
		lemma: "籍"
	},
	{
		rank: 11232,
		frequency: 3.52,
		lemma: "おぼえる"
	},
	{
		rank: 11233,
		frequency: 3.52,
		lemma: "直樹"
	},
	{
		rank: 11234,
		frequency: 3.52,
		lemma: "ノック"
	},
	{
		rank: 11235,
		frequency: 3.52,
		lemma: "派生"
	},
	{
		rank: 11236,
		frequency: 3.52,
		lemma: "指紋"
	},
	{
		rank: 11237,
		frequency: 3.52,
		lemma: "小児科"
	},
	{
		rank: 11238,
		frequency: 3.52,
		lemma: "舞踊"
	},
	{
		rank: 11239,
		frequency: 3.52,
		lemma: "振り向く"
	},
	{
		rank: 11240,
		frequency: 3.52,
		lemma: "使い分ける"
	},
	{
		rank: 11241,
		frequency: 3.52,
		lemma: "益々"
	},
	{
		rank: 11242,
		frequency: 3.52,
		lemma: "アンコール"
	},
	{
		rank: 11243,
		frequency: 3.52,
		lemma: "墜落"
	},
	{
		rank: 11244,
		frequency: 3.51,
		lemma: "鯨"
	},
	{
		rank: 11245,
		frequency: 3.51,
		lemma: "アンサンブル"
	},
	{
		rank: 11246,
		frequency: 3.51,
		lemma: "鉢"
	},
	{
		rank: 11247,
		frequency: 3.51,
		lemma: "少量"
	},
	{
		rank: 11248,
		frequency: 3.51,
		lemma: "おき"
	},
	{
		rank: 11249,
		frequency: 3.51,
		lemma: "利潤"
	},
	{
		rank: 11250,
		frequency: 3.51,
		lemma: "信条"
	},
	{
		rank: 11251,
		frequency: 3.51,
		lemma: "哲也"
	},
	{
		rank: 11252,
		frequency: 3.51,
		lemma: "しき"
	},
	{
		rank: 11253,
		frequency: 3.51,
		lemma: "反転"
	},
	{
		rank: 11254,
		frequency: 3.51,
		lemma: "社外"
	},
	{
		rank: 11255,
		frequency: 3.51,
		lemma: "〆"
	},
	{
		rank: 11256,
		frequency: 3.51,
		lemma: "応対"
	},
	{
		rank: 11257,
		frequency: 3.51,
		lemma: "量産"
	},
	{
		rank: 11258,
		frequency: 3.51,
		lemma: "アンダー"
	},
	{
		rank: 11259,
		frequency: 3.51,
		lemma: "ジェームズ"
	},
	{
		rank: 11260,
		frequency: 3.51,
		lemma: "延"
	},
	{
		rank: 11261,
		frequency: 3.51,
		lemma: "いやあ"
	},
	{
		rank: 11262,
		frequency: 3.51,
		lemma: "後世"
	},
	{
		rank: 11263,
		frequency: 3.5,
		lemma: "見慣れる"
	},
	{
		rank: 11264,
		frequency: 3.5,
		lemma: "移入"
	},
	{
		rank: 11265,
		frequency: 3.5,
		lemma: "保健所"
	},
	{
		rank: 11266,
		frequency: 3.5,
		lemma: "情景"
	},
	{
		rank: 11267,
		frequency: 3.5,
		lemma: "亀井"
	},
	{
		rank: 11268,
		frequency: 3.5,
		lemma: "チコ"
	},
	{
		rank: 11269,
		frequency: 3.5,
		lemma: "ミクロ"
	},
	{
		rank: 11270,
		frequency: 3.5,
		lemma: "呼称"
	},
	{
		rank: 11271,
		frequency: 3.5,
		lemma: "旅人"
	},
	{
		rank: 11272,
		frequency: 3.5,
		lemma: "迫害"
	},
	{
		rank: 11273,
		frequency: 3.5,
		lemma: "肩書き"
	},
	{
		rank: 11274,
		frequency: 3.5,
		lemma: "インフォメーション"
	},
	{
		rank: 11275,
		frequency: 3.5,
		lemma: "ナス"
	},
	{
		rank: 11276,
		frequency: 3.5,
		lemma: "水曜"
	},
	{
		rank: 11277,
		frequency: 3.5,
		lemma: "丸ごと"
	},
	{
		rank: 11278,
		frequency: 3.5,
		lemma: "はずれ"
	},
	{
		rank: 11279,
		frequency: 3.5,
		lemma: "ソファー"
	},
	{
		rank: 11280,
		frequency: 3.5,
		lemma: "オーディション"
	},
	{
		rank: 11281,
		frequency: 3.5,
		lemma: "オピニオン"
	},
	{
		rank: 11282,
		frequency: 3.5,
		lemma: "ジレンマ"
	},
	{
		rank: 11283,
		frequency: 3.5,
		lemma: "差し込む"
	},
	{
		rank: 11284,
		frequency: 3.5,
		lemma: "ハリス"
	},
	{
		rank: 11285,
		frequency: 3.49,
		lemma: "明後日"
	},
	{
		rank: 11286,
		frequency: 3.49,
		lemma: "吹奏楽"
	},
	{
		rank: 11287,
		frequency: 3.49,
		lemma: "下院"
	},
	{
		rank: 11288,
		frequency: 3.49,
		lemma: "わら"
	},
	{
		rank: 11289,
		frequency: 3.49,
		lemma: "石綿"
	},
	{
		rank: 11290,
		frequency: 3.49,
		lemma: "サンデー"
	},
	{
		rank: 11291,
		frequency: 3.49,
		lemma: "ハリケーン"
	},
	{
		rank: 11292,
		frequency: 3.49,
		lemma: "消"
	},
	{
		rank: 11293,
		frequency: 3.49,
		lemma: "共鳴"
	},
	{
		rank: 11294,
		frequency: 3.49,
		lemma: "主たる"
	},
	{
		rank: 11295,
		frequency: 3.49,
		lemma: "身の回り"
	},
	{
		rank: 11296,
		frequency: 3.49,
		lemma: "激減"
	},
	{
		rank: 11297,
		frequency: 3.49,
		lemma: "こぼす"
	},
	{
		rank: 11298,
		frequency: 3.49,
		lemma: "そら"
	},
	{
		rank: 11299,
		frequency: 3.49,
		lemma: "壊滅"
	},
	{
		rank: 11300,
		frequency: 3.49,
		lemma: "換気"
	},
	{
		rank: 11301,
		frequency: 3.49,
		lemma: "レバー"
	},
	{
		rank: 11302,
		frequency: 3.49,
		lemma: "空腹"
	},
	{
		rank: 11303,
		frequency: 3.49,
		lemma: "来訪"
	},
	{
		rank: 11304,
		frequency: 3.49,
		lemma: "ポートフォリオ"
	},
	{
		rank: 11305,
		frequency: 3.49,
		lemma: "電動"
	},
	{
		rank: 11306,
		frequency: 3.49,
		lemma: "ふむ"
	},
	{
		rank: 11307,
		frequency: 3.49,
		lemma: "セクハラ"
	},
	{
		rank: 11308,
		frequency: 3.49,
		lemma: "共著"
	},
	{
		rank: 11309,
		frequency: 3.49,
		lemma: "ブルジョア"
	},
	{
		rank: 11310,
		frequency: 3.49,
		lemma: "オンリー"
	},
	{
		rank: 11311,
		frequency: 3.49,
		lemma: "期末"
	},
	{
		rank: 11312,
		frequency: 3.48,
		lemma: "ほかなる"
	},
	{
		rank: 11313,
		frequency: 3.48,
		lemma: "縄文"
	},
	{
		rank: 11314,
		frequency: 3.48,
		lemma: "ゴールデンウィーク"
	},
	{
		rank: 11315,
		frequency: 3.48,
		lemma: "必修"
	},
	{
		rank: 11316,
		frequency: 3.48,
		lemma: "人文"
	},
	{
		rank: 11317,
		frequency: 3.48,
		lemma: "のく"
	},
	{
		rank: 11318,
		frequency: 3.48,
		lemma: "シューズ"
	},
	{
		rank: 11319,
		frequency: 3.48,
		lemma: "オファー"
	},
	{
		rank: 11320,
		frequency: 3.48,
		lemma: "フン"
	},
	{
		rank: 11321,
		frequency: 3.48,
		lemma: "替わる"
	},
	{
		rank: 11322,
		frequency: 3.48,
		lemma: "るる"
	},
	{
		rank: 11323,
		frequency: 3.48,
		lemma: "定か"
	},
	{
		rank: 11324,
		frequency: 3.48,
		lemma: "ヤマ"
	},
	{
		rank: 11325,
		frequency: 3.48,
		lemma: "読了"
	},
	{
		rank: 11326,
		frequency: 3.48,
		lemma: "山岳"
	},
	{
		rank: 11327,
		frequency: 3.47,
		lemma: "ヤード"
	},
	{
		rank: 11328,
		frequency: 3.47,
		lemma: "発祥"
	},
	{
		rank: 11329,
		frequency: 3.47,
		lemma: "浴衣"
	},
	{
		rank: 11330,
		frequency: 3.47,
		lemma: "亡くす"
	},
	{
		rank: 11331,
		frequency: 3.47,
		lemma: "交互"
	},
	{
		rank: 11332,
		frequency: 3.47,
		lemma: "淡々"
	},
	{
		rank: 11333,
		frequency: 3.47,
		lemma: "ワープロ"
	},
	{
		rank: 11334,
		frequency: 3.47,
		lemma: "すごす"
	},
	{
		rank: 11335,
		frequency: 3.47,
		lemma: "半減"
	},
	{
		rank: 11336,
		frequency: 3.47,
		lemma: "セーブ"
	},
	{
		rank: 11337,
		frequency: 3.47,
		lemma: "不必要"
	},
	{
		rank: 11338,
		frequency: 3.47,
		lemma: "メトロ"
	},
	{
		rank: 11339,
		frequency: 3.47,
		lemma: "不振"
	},
	{
		rank: 11340,
		frequency: 3.47,
		lemma: "ホルダー"
	},
	{
		rank: 11341,
		frequency: 3.47,
		lemma: "頭部"
	},
	{
		rank: 11342,
		frequency: 3.47,
		lemma: "盛り"
	},
	{
		rank: 11343,
		frequency: 3.47,
		lemma: "新入"
	},
	{
		rank: 11344,
		frequency: 3.47,
		lemma: "降ろす"
	},
	{
		rank: 11345,
		frequency: 3.47,
		lemma: "点滴"
	},
	{
		rank: 11346,
		frequency: 3.47,
		lemma: "行き先"
	},
	{
		rank: 11347,
		frequency: 3.47,
		lemma: "島田"
	},
	{
		rank: 11348,
		frequency: 3.46,
		lemma: "中原"
	},
	{
		rank: 11349,
		frequency: 3.46,
		lemma: "感度"
	},
	{
		rank: 11350,
		frequency: 3.46,
		lemma: "エコノミスト"
	},
	{
		rank: 11351,
		frequency: 3.46,
		lemma: "儀礼"
	},
	{
		rank: 11352,
		frequency: 3.46,
		lemma: "弾道"
	},
	{
		rank: 11353,
		frequency: 3.46,
		lemma: "背筋"
	},
	{
		rank: 11354,
		frequency: 3.46,
		lemma: "圭"
	},
	{
		rank: 11355,
		frequency: 3.46,
		lemma: "時速"
	},
	{
		rank: 11356,
		frequency: 3.46,
		lemma: "運び"
	},
	{
		rank: 11357,
		frequency: 3.46,
		lemma: "我ら"
	},
	{
		rank: 11358,
		frequency: 3.46,
		lemma: "日弁連"
	},
	{
		rank: 11359,
		frequency: 3.46,
		lemma: "実業"
	},
	{
		rank: 11360,
		frequency: 3.46,
		lemma: "マックス"
	},
	{
		rank: 11361,
		frequency: 3.46,
		lemma: "換える"
	},
	{
		rank: 11362,
		frequency: 3.46,
		lemma: "昇進"
	},
	{
		rank: 11363,
		frequency: 3.46,
		lemma: "慣行"
	},
	{
		rank: 11364,
		frequency: 3.46,
		lemma: "ダース"
	},
	{
		rank: 11365,
		frequency: 3.46,
		lemma: "親善"
	},
	{
		rank: 11366,
		frequency: 3.46,
		lemma: "やけに"
	},
	{
		rank: 11367,
		frequency: 3.45,
		lemma: "膨張"
	},
	{
		rank: 11368,
		frequency: 3.45,
		lemma: "ダイヤル"
	},
	{
		rank: 11369,
		frequency: 3.45,
		lemma: "かかわり"
	},
	{
		rank: 11370,
		frequency: 3.45,
		lemma: "売上げ"
	},
	{
		rank: 11371,
		frequency: 3.45,
		lemma: "合気道"
	},
	{
		rank: 11372,
		frequency: 3.45,
		lemma: "だるい"
	},
	{
		rank: 11373,
		frequency: 3.45,
		lemma: "向"
	},
	{
		rank: 11374,
		frequency: 3.45,
		lemma: "消毒"
	},
	{
		rank: 11375,
		frequency: 3.45,
		lemma: "代謝"
	},
	{
		rank: 11376,
		frequency: 3.45,
		lemma: "すじ"
	},
	{
		rank: 11377,
		frequency: 3.45,
		lemma: "レポ"
	},
	{
		rank: 11378,
		frequency: 3.45,
		lemma: "内緒"
	},
	{
		rank: 11379,
		frequency: 3.45,
		lemma: "晩年"
	},
	{
		rank: 11380,
		frequency: 3.45,
		lemma: "保留"
	},
	{
		rank: 11381,
		frequency: 3.45,
		lemma: "サバ"
	},
	{
		rank: 11382,
		frequency: 3.45,
		lemma: "幾何"
	},
	{
		rank: 11383,
		frequency: 3.45,
		lemma: "書簡"
	},
	{
		rank: 11384,
		frequency: 3.45,
		lemma: "過ぎ去る"
	},
	{
		rank: 11385,
		frequency: 3.45,
		lemma: "強姦"
	},
	{
		rank: 11386,
		frequency: 3.45,
		lemma: "わが家"
	},
	{
		rank: 11387,
		frequency: 3.45,
		lemma: "長老"
	},
	{
		rank: 11388,
		frequency: 3.45,
		lemma: "今季"
	},
	{
		rank: 11389,
		frequency: 3.45,
		lemma: "宣告"
	},
	{
		rank: 11390,
		frequency: 3.45,
		lemma: "滞る"
	},
	{
		rank: 11391,
		frequency: 3.45,
		lemma: "樹脂"
	},
	{
		rank: 11392,
		frequency: 3.45,
		lemma: "ひととき"
	},
	{
		rank: 11393,
		frequency: 3.45,
		lemma: "首長"
	},
	{
		rank: 11394,
		frequency: 3.45,
		lemma: "食い"
	},
	{
		rank: 11395,
		frequency: 3.45,
		lemma: "セレクト"
	},
	{
		rank: 11396,
		frequency: 3.44,
		lemma: "未成年"
	},
	{
		rank: 11397,
		frequency: 3.44,
		lemma: "コーラ"
	},
	{
		rank: 11398,
		frequency: 3.44,
		lemma: "受益"
	},
	{
		rank: 11399,
		frequency: 3.44,
		lemma: "カントリー"
	},
	{
		rank: 11400,
		frequency: 3.44,
		lemma: "アラスカ"
	},
	{
		rank: 11401,
		frequency: 3.44,
		lemma: "見捨てる"
	},
	{
		rank: 11402,
		frequency: 3.44,
		lemma: "アインシュタイン"
	},
	{
		rank: 11403,
		frequency: 3.44,
		lemma: "待望"
	},
	{
		rank: 11404,
		frequency: 3.44,
		lemma: "思ふ"
	},
	{
		rank: 11405,
		frequency: 3.44,
		lemma: "歪み"
	},
	{
		rank: 11406,
		frequency: 3.44,
		lemma: "特区"
	},
	{
		rank: 11407,
		frequency: 3.44,
		lemma: "スキャンダル"
	},
	{
		rank: 11408,
		frequency: 3.44,
		lemma: "苦戦"
	},
	{
		rank: 11409,
		frequency: 3.44,
		lemma: "君主"
	},
	{
		rank: 11410,
		frequency: 3.44,
		lemma: "公債"
	},
	{
		rank: 11411,
		frequency: 3.44,
		lemma: "キラキラ"
	},
	{
		rank: 11412,
		frequency: 3.43,
		lemma: "鷹"
	},
	{
		rank: 11413,
		frequency: 3.43,
		lemma: "いち早い"
	},
	{
		rank: 11414,
		frequency: 3.43,
		lemma: "感じ取る"
	},
	{
		rank: 11415,
		frequency: 3.43,
		lemma: "につき"
	},
	{
		rank: 11416,
		frequency: 3.43,
		lemma: "能率"
	},
	{
		rank: 11417,
		frequency: 3.43,
		lemma: "にせる"
	},
	{
		rank: 11418,
		frequency: 3.43,
		lemma: "バレー"
	},
	{
		rank: 11419,
		frequency: 3.43,
		lemma: "咳"
	},
	{
		rank: 11420,
		frequency: 3.43,
		lemma: "渡航"
	},
	{
		rank: 11421,
		frequency: 3.43,
		lemma: "くわえる"
	},
	{
		rank: 11422,
		frequency: 3.43,
		lemma: "星座"
	},
	{
		rank: 11423,
		frequency: 3.43,
		lemma: "セットアップ"
	},
	{
		rank: 11424,
		frequency: 3.43,
		lemma: "勝者"
	},
	{
		rank: 11425,
		frequency: 3.43,
		lemma: "内藤"
	},
	{
		rank: 11426,
		frequency: 3.43,
		lemma: "アポ"
	},
	{
		rank: 11427,
		frequency: 3.43,
		lemma: "真空"
	},
	{
		rank: 11428,
		frequency: 3.43,
		lemma: "健在"
	},
	{
		rank: 11429,
		frequency: 3.43,
		lemma: "一帯"
	},
	{
		rank: 11430,
		frequency: 3.43,
		lemma: "決戦"
	},
	{
		rank: 11431,
		frequency: 3.43,
		lemma: "放射能"
	},
	{
		rank: 11432,
		frequency: 3.43,
		lemma: "原型"
	},
	{
		rank: 11433,
		frequency: 3.43,
		lemma: "淵"
	},
	{
		rank: 11434,
		frequency: 3.43,
		lemma: "高揚"
	},
	{
		rank: 11435,
		frequency: 3.43,
		lemma: "無人"
	},
	{
		rank: 11436,
		frequency: 3.43,
		lemma: "水戸"
	},
	{
		rank: 11437,
		frequency: 3.43,
		lemma: "眉"
	},
	{
		rank: 11438,
		frequency: 3.42,
		lemma: "調味"
	},
	{
		rank: 11439,
		frequency: 3.42,
		lemma: "湿気"
	},
	{
		rank: 11440,
		frequency: 3.42,
		lemma: "連立"
	},
	{
		rank: 11441,
		frequency: 3.42,
		lemma: "とら"
	},
	{
		rank: 11442,
		frequency: 3.42,
		lemma: "長々"
	},
	{
		rank: 11443,
		frequency: 3.42,
		lemma: "ひも"
	},
	{
		rank: 11444,
		frequency: 3.42,
		lemma: "町田"
	},
	{
		rank: 11445,
		frequency: 3.42,
		lemma: "カバン"
	},
	{
		rank: 11446,
		frequency: 3.42,
		lemma: "火力"
	},
	{
		rank: 11447,
		frequency: 3.42,
		lemma: "靖"
	},
	{
		rank: 11448,
		frequency: 3.42,
		lemma: "トライアル"
	},
	{
		rank: 11449,
		frequency: 3.42,
		lemma: "修学旅行"
	},
	{
		rank: 11450,
		frequency: 3.42,
		lemma: "草原"
	},
	{
		rank: 11451,
		frequency: 3.42,
		lemma: "ていう"
	},
	{
		rank: 11452,
		frequency: 3.42,
		lemma: "メンテ"
	},
	{
		rank: 11453,
		frequency: 3.42,
		lemma: "すばやい"
	},
	{
		rank: 11454,
		frequency: 3.42,
		lemma: "田口"
	},
	{
		rank: 11455,
		frequency: 3.41,
		lemma: "目の当たり"
	},
	{
		rank: 11456,
		frequency: 3.41,
		lemma: "ピット"
	},
	{
		rank: 11457,
		frequency: 3.41,
		lemma: "呈す"
	},
	{
		rank: 11458,
		frequency: 3.41,
		lemma: "甥"
	},
	{
		rank: 11459,
		frequency: 3.41,
		lemma: "積"
	},
	{
		rank: 11460,
		frequency: 3.41,
		lemma: "耕"
	},
	{
		rank: 11461,
		frequency: 3.41,
		lemma: "コク"
	},
	{
		rank: 11462,
		frequency: 3.41,
		lemma: "省エネ"
	},
	{
		rank: 11463,
		frequency: 3.41,
		lemma: "レック"
	},
	{
		rank: 11464,
		frequency: 3.41,
		lemma: "出国"
	},
	{
		rank: 11465,
		frequency: 3.41,
		lemma: "リボン"
	},
	{
		rank: 11466,
		frequency: 3.41,
		lemma: "ロク"
	},
	{
		rank: 11467,
		frequency: 3.41,
		lemma: "葉っぱ"
	},
	{
		rank: 11468,
		frequency: 3.41,
		lemma: "年来"
	},
	{
		rank: 11469,
		frequency: 3.41,
		lemma: "あいにく"
	},
	{
		rank: 11470,
		frequency: 3.41,
		lemma: "被爆"
	},
	{
		rank: 11471,
		frequency: 3.41,
		lemma: "パウロ"
	},
	{
		rank: 11472,
		frequency: 3.41,
		lemma: "内戦"
	},
	{
		rank: 11473,
		frequency: 3.41,
		lemma: "小麦"
	},
	{
		rank: 11474,
		frequency: 3.41,
		lemma: "はしゃぐ"
	},
	{
		rank: 11475,
		frequency: 3.41,
		lemma: "ちび"
	},
	{
		rank: 11476,
		frequency: 3.41,
		lemma: "電話機"
	},
	{
		rank: 11477,
		frequency: 3.41,
		lemma: "じゃぁ"
	},
	{
		rank: 11478,
		frequency: 3.41,
		lemma: "大久保"
	},
	{
		rank: 11479,
		frequency: 3.4,
		lemma: "村人"
	},
	{
		rank: 11480,
		frequency: 3.4,
		lemma: "各人"
	},
	{
		rank: 11481,
		frequency: 3.4,
		lemma: "故に"
	},
	{
		rank: 11482,
		frequency: 3.4,
		lemma: "退席"
	},
	{
		rank: 11483,
		frequency: 3.4,
		lemma: "含有"
	},
	{
		rank: 11484,
		frequency: 3.4,
		lemma: "可愛らしい"
	},
	{
		rank: 11485,
		frequency: 3.4,
		lemma: "依る"
	},
	{
		rank: 11486,
		frequency: 3.4,
		lemma: "大まか"
	},
	{
		rank: 11487,
		frequency: 3.4,
		lemma: "親方"
	},
	{
		rank: 11488,
		frequency: 3.4,
		lemma: "らく"
	},
	{
		rank: 11489,
		frequency: 3.39,
		lemma: "通院"
	},
	{
		rank: 11490,
		frequency: 3.39,
		lemma: "衰える"
	},
	{
		rank: 11491,
		frequency: 3.39,
		lemma: "細"
	},
	{
		rank: 11492,
		frequency: 3.39,
		lemma: "値引き"
	},
	{
		rank: 11493,
		frequency: 3.39,
		lemma: "ツイン"
	},
	{
		rank: 11494,
		frequency: 3.39,
		lemma: "ハリ"
	},
	{
		rank: 11495,
		frequency: 3.39,
		lemma: "風習"
	},
	{
		rank: 11496,
		frequency: 3.39,
		lemma: "まね"
	},
	{
		rank: 11497,
		frequency: 3.39,
		lemma: "乖離"
	},
	{
		rank: 11498,
		frequency: 3.39,
		lemma: "食らう"
	},
	{
		rank: 11499,
		frequency: 3.39,
		lemma: "リバー"
	},
	{
		rank: 11500,
		frequency: 3.39,
		lemma: "波及"
	},
	{
		rank: 11501,
		frequency: 3.39,
		lemma: "ウー"
	},
	{
		rank: 11502,
		frequency: 3.39,
		lemma: "凶"
	},
	{
		rank: 11503,
		frequency: 3.39,
		lemma: "ＣＧ"
	},
	{
		rank: 11504,
		frequency: 3.39,
		lemma: "使徒"
	},
	{
		rank: 11505,
		frequency: 3.39,
		lemma: "見積"
	},
	{
		rank: 11506,
		frequency: 3.39,
		lemma: "ニフティ"
	},
	{
		rank: 11507,
		frequency: 3.39,
		lemma: "キャスター"
	},
	{
		rank: 11508,
		frequency: 3.39,
		lemma: "公務"
	},
	{
		rank: 11509,
		frequency: 3.39,
		lemma: "同然"
	},
	{
		rank: 11510,
		frequency: 3.39,
		lemma: "元来"
	},
	{
		rank: 11511,
		frequency: 3.39,
		lemma: "披露宴"
	},
	{
		rank: 11512,
		frequency: 3.38,
		lemma: "閉じ込める"
	},
	{
		rank: 11513,
		frequency: 3.38,
		lemma: "為す"
	},
	{
		rank: 11514,
		frequency: 3.38,
		lemma: "一読"
	},
	{
		rank: 11515,
		frequency: 3.38,
		lemma: "孤児"
	},
	{
		rank: 11516,
		frequency: 3.38,
		lemma: "恣意"
	},
	{
		rank: 11517,
		frequency: 3.38,
		lemma: "実演"
	},
	{
		rank: 11518,
		frequency: 3.38,
		lemma: "媒介"
	},
	{
		rank: 11519,
		frequency: 3.38,
		lemma: "ブーツ"
	},
	{
		rank: 11520,
		frequency: 3.38,
		lemma: "勝ち取る"
	},
	{
		rank: 11521,
		frequency: 3.38,
		lemma: "グリップ"
	},
	{
		rank: 11522,
		frequency: 3.38,
		lemma: "爽快"
	},
	{
		rank: 11523,
		frequency: 3.38,
		lemma: "照会"
	},
	{
		rank: 11524,
		frequency: 3.38,
		lemma: "磁気"
	},
	{
		rank: 11525,
		frequency: 3.38,
		lemma: "他人事"
	},
	{
		rank: 11526,
		frequency: 3.38,
		lemma: "かすか"
	},
	{
		rank: 11527,
		frequency: 3.38,
		lemma: "一線"
	},
	{
		rank: 11528,
		frequency: 3.38,
		lemma: "クラーク"
	},
	{
		rank: 11529,
		frequency: 3.38,
		lemma: "生ずる"
	},
	{
		rank: 11530,
		frequency: 3.38,
		lemma: "石鹸"
	},
	{
		rank: 11531,
		frequency: 3.37,
		lemma: "別名"
	},
	{
		rank: 11532,
		frequency: 3.37,
		lemma: "堕落"
	},
	{
		rank: 11533,
		frequency: 3.37,
		lemma: "カクテル"
	},
	{
		rank: 11534,
		frequency: 3.37,
		lemma: "淋しい"
	},
	{
		rank: 11535,
		frequency: 3.37,
		lemma: "節目"
	},
	{
		rank: 11536,
		frequency: 3.37,
		lemma: "レイプ"
	},
	{
		rank: 11537,
		frequency: 3.37,
		lemma: "愛読"
	},
	{
		rank: 11538,
		frequency: 3.37,
		lemma: "精霊"
	},
	{
		rank: 11539,
		frequency: 3.37,
		lemma: "資する"
	},
	{
		rank: 11540,
		frequency: 3.37,
		lemma: "丁"
	},
	{
		rank: 11541,
		frequency: 3.37,
		lemma: "ひいては"
	},
	{
		rank: 11542,
		frequency: 3.37,
		lemma: "五つ"
	},
	{
		rank: 11543,
		frequency: 3.37,
		lemma: "セントラル"
	},
	{
		rank: 11544,
		frequency: 3.37,
		lemma: "高官"
	},
	{
		rank: 11545,
		frequency: 3.37,
		lemma: "廣"
	},
	{
		rank: 11546,
		frequency: 3.37,
		lemma: "プレミア"
	},
	{
		rank: 11547,
		frequency: 3.37,
		lemma: "荷"
	},
	{
		rank: 11548,
		frequency: 3.37,
		lemma: "まとう"
	},
	{
		rank: 11549,
		frequency: 3.37,
		lemma: "今期"
	},
	{
		rank: 11550,
		frequency: 3.37,
		lemma: "繁盛"
	},
	{
		rank: 11551,
		frequency: 3.37,
		lemma: "はめる"
	},
	{
		rank: 11552,
		frequency: 3.37,
		lemma: "下位"
	},
	{
		rank: 11553,
		frequency: 3.37,
		lemma: "婚姻"
	},
	{
		rank: 11554,
		frequency: 3.37,
		lemma: "五郎"
	},
	{
		rank: 11555,
		frequency: 3.37,
		lemma: "ぬいぐるみ"
	},
	{
		rank: 11556,
		frequency: 3.37,
		lemma: "休める"
	},
	{
		rank: 11557,
		frequency: 3.37,
		lemma: "兆し"
	},
	{
		rank: 11558,
		frequency: 3.37,
		lemma: "奏でる"
	},
	{
		rank: 11559,
		frequency: 3.37,
		lemma: "組み立て"
	},
	{
		rank: 11560,
		frequency: 3.36,
		lemma: "基く"
	},
	{
		rank: 11561,
		frequency: 3.36,
		lemma: "半端"
	},
	{
		rank: 11562,
		frequency: 3.36,
		lemma: "スカウト"
	},
	{
		rank: 11563,
		frequency: 3.36,
		lemma: "西田"
	},
	{
		rank: 11564,
		frequency: 3.36,
		lemma: "スケッチ"
	},
	{
		rank: 11565,
		frequency: 3.36,
		lemma: "嘉"
	},
	{
		rank: 11566,
		frequency: 3.36,
		lemma: "ドリル"
	},
	{
		rank: 11567,
		frequency: 3.36,
		lemma: "切り開く"
	},
	{
		rank: 11568,
		frequency: 3.36,
		lemma: "アウトドア"
	},
	{
		rank: 11569,
		frequency: 3.36,
		lemma: "気まぐれ"
	},
	{
		rank: 11570,
		frequency: 3.36,
		lemma: "やり直す"
	},
	{
		rank: 11571,
		frequency: 3.36,
		lemma: "スクエア"
	},
	{
		rank: 11572,
		frequency: 3.36,
		lemma: "間際"
	},
	{
		rank: 11573,
		frequency: 3.36,
		lemma: "歩き"
	},
	{
		rank: 11574,
		frequency: 3.36,
		lemma: "当てはめる"
	},
	{
		rank: 11575,
		frequency: 3.36,
		lemma: "リトル"
	},
	{
		rank: 11576,
		frequency: 3.35,
		lemma: "色合い"
	},
	{
		rank: 11577,
		frequency: 3.35,
		lemma: "頷く"
	},
	{
		rank: 11578,
		frequency: 3.35,
		lemma: "基幹"
	},
	{
		rank: 11579,
		frequency: 3.35,
		lemma: "異国"
	},
	{
		rank: 11580,
		frequency: 3.35,
		lemma: "停車"
	},
	{
		rank: 11581,
		frequency: 3.35,
		lemma: "ほんま"
	},
	{
		rank: 11582,
		frequency: 3.35,
		lemma: "ポテト"
	},
	{
		rank: 11583,
		frequency: 3.35,
		lemma: "備わる"
	},
	{
		rank: 11584,
		frequency: 3.35,
		lemma: "谷口"
	},
	{
		rank: 11585,
		frequency: 3.35,
		lemma: "でっかい"
	},
	{
		rank: 11586,
		frequency: 3.35,
		lemma: "繰り出す"
	},
	{
		rank: 11587,
		frequency: 3.35,
		lemma: "斗"
	},
	{
		rank: 11588,
		frequency: 3.35,
		lemma: "シック"
	},
	{
		rank: 11589,
		frequency: 3.35,
		lemma: "風情"
	},
	{
		rank: 11590,
		frequency: 3.35,
		lemma: "原材料"
	},
	{
		rank: 11591,
		frequency: 3.35,
		lemma: "シリア"
	},
	{
		rank: 11592,
		frequency: 3.35,
		lemma: "メシ"
	},
	{
		rank: 11593,
		frequency: 3.35,
		lemma: "構え"
	},
	{
		rank: 11594,
		frequency: 3.35,
		lemma: "大いなる"
	},
	{
		rank: 11595,
		frequency: 3.35,
		lemma: "愛人"
	},
	{
		rank: 11596,
		frequency: 3.35,
		lemma: "コンディション"
	},
	{
		rank: 11597,
		frequency: 3.35,
		lemma: "シンガー"
	},
	{
		rank: 11598,
		frequency: 3.35,
		lemma: "炭酸"
	},
	{
		rank: 11599,
		frequency: 3.35,
		lemma: "ギャル"
	},
	{
		rank: 11600,
		frequency: 3.35,
		lemma: "格別"
	},
	{
		rank: 11601,
		frequency: 3.35,
		lemma: "掛け"
	},
	{
		rank: 11602,
		frequency: 3.35,
		lemma: "ベラ"
	},
	{
		rank: 11603,
		frequency: 3.35,
		lemma: "渋い"
	},
	{
		rank: 11604,
		frequency: 3.34,
		lemma: "予知"
	},
	{
		rank: 11605,
		frequency: 3.34,
		lemma: "迷い"
	},
	{
		rank: 11606,
		frequency: 3.34,
		lemma: "祝い"
	},
	{
		rank: 11607,
		frequency: 3.34,
		lemma: "潮流"
	},
	{
		rank: 11608,
		frequency: 3.34,
		lemma: "真意"
	},
	{
		rank: 11609,
		frequency: 3.34,
		lemma: "大晦日"
	},
	{
		rank: 11610,
		frequency: 3.34,
		lemma: "荒らす"
	},
	{
		rank: 11611,
		frequency: 3.34,
		lemma: "ぬく"
	},
	{
		rank: 11612,
		frequency: 3.34,
		lemma: "満席"
	},
	{
		rank: 11613,
		frequency: 3.34,
		lemma: "ぐるみ"
	},
	{
		rank: 11614,
		frequency: 3.34,
		lemma: "ジャガイモ"
	},
	{
		rank: 11615,
		frequency: 3.34,
		lemma: "分譲"
	},
	{
		rank: 11616,
		frequency: 3.34,
		lemma: "プロダクション"
	},
	{
		rank: 11617,
		frequency: 3.34,
		lemma: "割れ"
	},
	{
		rank: 11618,
		frequency: 3.34,
		lemma: "特価"
	},
	{
		rank: 11619,
		frequency: 3.34,
		lemma: "羽目"
	},
	{
		rank: 11620,
		frequency: 3.34,
		lemma: "占う"
	},
	{
		rank: 11621,
		frequency: 3.34,
		lemma: "くつろぐ"
	},
	{
		rank: 11622,
		frequency: 3.34,
		lemma: "大差"
	},
	{
		rank: 11623,
		frequency: 3.34,
		lemma: "外壁"
	},
	{
		rank: 11624,
		frequency: 3.34,
		lemma: "阪急"
	},
	{
		rank: 11625,
		frequency: 3.34,
		lemma: "キュー"
	},
	{
		rank: 11626,
		frequency: 3.34,
		lemma: "交差"
	},
	{
		rank: 11627,
		frequency: 3.34,
		lemma: "年下"
	},
	{
		rank: 11628,
		frequency: 3.34,
		lemma: "追い詰める"
	},
	{
		rank: 11629,
		frequency: 3.34,
		lemma: "シチュエーション"
	},
	{
		rank: 11630,
		frequency: 3.34,
		lemma: "かけ離れる"
	},
	{
		rank: 11631,
		frequency: 3.34,
		lemma: "ハガキ"
	},
	{
		rank: 11632,
		frequency: 3.34,
		lemma: "高め"
	},
	{
		rank: 11633,
		frequency: 3.33,
		lemma: "土佐"
	},
	{
		rank: 11634,
		frequency: 3.33,
		lemma: "相反"
	},
	{
		rank: 11635,
		frequency: 3.33,
		lemma: "私見"
	},
	{
		rank: 11636,
		frequency: 3.33,
		lemma: "ゲノム"
	},
	{
		rank: 11637,
		frequency: 3.33,
		lemma: "前夜"
	},
	{
		rank: 11638,
		frequency: 3.33,
		lemma: "不可解"
	},
	{
		rank: 11639,
		frequency: 3.33,
		lemma: "非常識"
	},
	{
		rank: 11640,
		frequency: 3.33,
		lemma: "クラッシュ"
	},
	{
		rank: 11641,
		frequency: 3.33,
		lemma: "がらみ"
	},
	{
		rank: 11642,
		frequency: 3.33,
		lemma: "箱根"
	},
	{
		rank: 11643,
		frequency: 3.33,
		lemma: "段落"
	},
	{
		rank: 11644,
		frequency: 3.33,
		lemma: "賢"
	},
	{
		rank: 11645,
		frequency: 3.33,
		lemma: "返却"
	},
	{
		rank: 11646,
		frequency: 3.33,
		lemma: "筆記"
	},
	{
		rank: 11647,
		frequency: 3.33,
		lemma: "クリエイティブ"
	},
	{
		rank: 11648,
		frequency: 3.33,
		lemma: "学内"
	},
	{
		rank: 11649,
		frequency: 3.33,
		lemma: "巧妙"
	},
	{
		rank: 11650,
		frequency: 3.33,
		lemma: "可視"
	},
	{
		rank: 11651,
		frequency: 3.33,
		lemma: "わたす"
	},
	{
		rank: 11652,
		frequency: 3.33,
		lemma: "快晴"
	},
	{
		rank: 11653,
		frequency: 3.33,
		lemma: "速攻"
	},
	{
		rank: 11654,
		frequency: 3.33,
		lemma: "メーカ"
	},
	{
		rank: 11655,
		frequency: 3.33,
		lemma: "しみる"
	},
	{
		rank: 11656,
		frequency: 3.32,
		lemma: "かっこ"
	},
	{
		rank: 11657,
		frequency: 3.32,
		lemma: "続行"
	},
	{
		rank: 11658,
		frequency: 3.32,
		lemma: "めんどくさい"
	},
	{
		rank: 11659,
		frequency: 3.32,
		lemma: "一概に"
	},
	{
		rank: 11660,
		frequency: 3.32,
		lemma: "グロ"
	},
	{
		rank: 11661,
		frequency: 3.32,
		lemma: "つっこむ"
	},
	{
		rank: 11662,
		frequency: 3.32,
		lemma: "就学"
	},
	{
		rank: 11663,
		frequency: 3.32,
		lemma: "表題"
	},
	{
		rank: 11664,
		frequency: 3.32,
		lemma: "お目にかかる"
	},
	{
		rank: 11665,
		frequency: 3.32,
		lemma: "通算"
	},
	{
		rank: 11666,
		frequency: 3.32,
		lemma: "噴火"
	},
	{
		rank: 11667,
		frequency: 3.32,
		lemma: "義務付ける"
	},
	{
		rank: 11668,
		frequency: 3.32,
		lemma: "元年"
	},
	{
		rank: 11669,
		frequency: 3.32,
		lemma: "守れる"
	},
	{
		rank: 11670,
		frequency: 3.32,
		lemma: "見落とす"
	},
	{
		rank: 11671,
		frequency: 3.32,
		lemma: "産経"
	},
	{
		rank: 11672,
		frequency: 3.32,
		lemma: "クリスタル"
	},
	{
		rank: 11673,
		frequency: 3.32,
		lemma: "ウルトラ"
	},
	{
		rank: 11674,
		frequency: 3.32,
		lemma: "悟"
	},
	{
		rank: 11675,
		frequency: 3.32,
		lemma: "無くす"
	},
	{
		rank: 11676,
		frequency: 3.32,
		lemma: "ルーツ"
	},
	{
		rank: 11677,
		frequency: 3.32,
		lemma: "掘り下げる"
	},
	{
		rank: 11678,
		frequency: 3.32,
		lemma: "あきらか"
	},
	{
		rank: 11679,
		frequency: 3.32,
		lemma: "つれづれ"
	},
	{
		rank: 11680,
		frequency: 3.32,
		lemma: "打ち切る"
	},
	{
		rank: 11681,
		frequency: 3.32,
		lemma: "団長"
	},
	{
		rank: 11682,
		frequency: 3.32,
		lemma: "歳児"
	},
	{
		rank: 11683,
		frequency: 3.32,
		lemma: "個々人"
	},
	{
		rank: 11684,
		frequency: 3.32,
		lemma: "地雷"
	},
	{
		rank: 11685,
		frequency: 3.32,
		lemma: "修道"
	},
	{
		rank: 11686,
		frequency: 3.32,
		lemma: "おす"
	},
	{
		rank: 11687,
		frequency: 3.32,
		lemma: "トレーナー"
	},
	{
		rank: 11688,
		frequency: 3.32,
		lemma: "既成"
	},
	{
		rank: 11689,
		frequency: 3.32,
		lemma: "強気"
	},
	{
		rank: 11690,
		frequency: 3.32,
		lemma: "結束"
	},
	{
		rank: 11691,
		frequency: 3.32,
		lemma: "練"
	},
	{
		rank: 11692,
		frequency: 3.32,
		lemma: "党内"
	},
	{
		rank: 11693,
		frequency: 3.32,
		lemma: "精進"
	},
	{
		rank: 11694,
		frequency: 3.32,
		lemma: "ビス"
	},
	{
		rank: 11695,
		frequency: 3.32,
		lemma: "自負"
	},
	{
		rank: 11696,
		frequency: 3.32,
		lemma: "プリンター"
	},
	{
		rank: 11697,
		frequency: 3.32,
		lemma: "止"
	},
	{
		rank: 11698,
		frequency: 3.31,
		lemma: "指先"
	},
	{
		rank: 11699,
		frequency: 3.31,
		lemma: "信徒"
	},
	{
		rank: 11700,
		frequency: 3.31,
		lemma: "遠ざかる"
	},
	{
		rank: 11701,
		frequency: 3.31,
		lemma: "可哀想"
	},
	{
		rank: 11702,
		frequency: 3.31,
		lemma: "定休"
	},
	{
		rank: 11703,
		frequency: 3.31,
		lemma: "離"
	},
	{
		rank: 11704,
		frequency: 3.31,
		lemma: "整体"
	},
	{
		rank: 11705,
		frequency: 3.31,
		lemma: "体型"
	},
	{
		rank: 11706,
		frequency: 3.31,
		lemma: "お返し"
	},
	{
		rank: 11707,
		frequency: 3.31,
		lemma: "段取り"
	},
	{
		rank: 11708,
		frequency: 3.31,
		lemma: "排他"
	},
	{
		rank: 11709,
		frequency: 3.31,
		lemma: "賞味"
	},
	{
		rank: 11710,
		frequency: 3.31,
		lemma: "コツコツ"
	},
	{
		rank: 11711,
		frequency: 3.31,
		lemma: "差額"
	},
	{
		rank: 11712,
		frequency: 3.31,
		lemma: "強硬"
	},
	{
		rank: 11713,
		frequency: 3.31,
		lemma: "とんでも"
	},
	{
		rank: 11714,
		frequency: 3.31,
		lemma: "残虐"
	},
	{
		rank: 11715,
		frequency: 3.31,
		lemma: "草案"
	},
	{
		rank: 11716,
		frequency: 3.31,
		lemma: "密"
	},
	{
		rank: 11717,
		frequency: 3.31,
		lemma: "後押し"
	},
	{
		rank: 11718,
		frequency: 3.31,
		lemma: "きびしい"
	},
	{
		rank: 11719,
		frequency: 3.31,
		lemma: "めずらしい"
	},
	{
		rank: 11720,
		frequency: 3.3,
		lemma: "修道院"
	},
	{
		rank: 11721,
		frequency: 3.3,
		lemma: "アルファ"
	},
	{
		rank: 11722,
		frequency: 3.3,
		lemma: "新卒"
	},
	{
		rank: 11723,
		frequency: 3.3,
		lemma: "ダイエー"
	},
	{
		rank: 11724,
		frequency: 3.3,
		lemma: "齢"
	},
	{
		rank: 11725,
		frequency: 3.3,
		lemma: "妊婦"
	},
	{
		rank: 11726,
		frequency: 3.3,
		lemma: "始"
	},
	{
		rank: 11727,
		frequency: 3.3,
		lemma: "エクアドル"
	},
	{
		rank: 11728,
		frequency: 3.3,
		lemma: "中長期"
	},
	{
		rank: 11729,
		frequency: 3.3,
		lemma: "ＤＦ"
	},
	{
		rank: 11730,
		frequency: 3.3,
		lemma: "働ける"
	},
	{
		rank: 11731,
		frequency: 3.3,
		lemma: "お隣"
	},
	{
		rank: 11732,
		frequency: 3.3,
		lemma: "間取り"
	},
	{
		rank: 11733,
		frequency: 3.3,
		lemma: "均一"
	},
	{
		rank: 11734,
		frequency: 3.3,
		lemma: "陳"
	},
	{
		rank: 11735,
		frequency: 3.3,
		lemma: "はし"
	},
	{
		rank: 11736,
		frequency: 3.3,
		lemma: "ゴミ箱"
	},
	{
		rank: 11737,
		frequency: 3.3,
		lemma: "インタフェース"
	},
	{
		rank: 11738,
		frequency: 3.3,
		lemma: "同国"
	},
	{
		rank: 11739,
		frequency: 3.3,
		lemma: "小学館"
	},
	{
		rank: 11740,
		frequency: 3.3,
		lemma: "卓"
	},
	{
		rank: 11741,
		frequency: 3.3,
		lemma: "幕末"
	},
	{
		rank: 11742,
		frequency: 3.3,
		lemma: "ですけれど"
	},
	{
		rank: 11743,
		frequency: 3.3,
		lemma: "ミャンマー"
	},
	{
		rank: 11744,
		frequency: 3.3,
		lemma: "なにせ"
	},
	{
		rank: 11745,
		frequency: 3.3,
		lemma: "禁"
	},
	{
		rank: 11746,
		frequency: 3.3,
		lemma: "ヒゲ"
	},
	{
		rank: 11747,
		frequency: 3.3,
		lemma: "見下ろす"
	},
	{
		rank: 11748,
		frequency: 3.3,
		lemma: "鎖"
	},
	{
		rank: 11749,
		frequency: 3.3,
		lemma: "極限"
	},
	{
		rank: 11750,
		frequency: 3.29,
		lemma: "仕える"
	},
	{
		rank: 11751,
		frequency: 3.29,
		lemma: "宙"
	},
	{
		rank: 11752,
		frequency: 3.29,
		lemma: "コロンビア"
	},
	{
		rank: 11753,
		frequency: 3.29,
		lemma: "ラインナップ"
	},
	{
		rank: 11754,
		frequency: 3.29,
		lemma: "風車"
	},
	{
		rank: 11755,
		frequency: 3.29,
		lemma: "尊い"
	},
	{
		rank: 11756,
		frequency: 3.29,
		lemma: "カンパニー"
	},
	{
		rank: 11757,
		frequency: 3.29,
		lemma: "ひざ"
	},
	{
		rank: 11758,
		frequency: 3.29,
		lemma: "ラフ"
	},
	{
		rank: 11759,
		frequency: 3.29,
		lemma: "鉄鋼"
	},
	{
		rank: 11760,
		frequency: 3.29,
		lemma: "激化"
	},
	{
		rank: 11761,
		frequency: 3.29,
		lemma: "菅"
	},
	{
		rank: 11762,
		frequency: 3.29,
		lemma: "ゆる"
	},
	{
		rank: 11763,
		frequency: 3.29,
		lemma: "金メダル"
	},
	{
		rank: 11764,
		frequency: 3.29,
		lemma: "上方"
	},
	{
		rank: 11765,
		frequency: 3.29,
		lemma: "マネージャ"
	},
	{
		rank: 11766,
		frequency: 3.29,
		lemma: "洋楽"
	},
	{
		rank: 11767,
		frequency: 3.29,
		lemma: "請負"
	},
	{
		rank: 11768,
		frequency: 3.29,
		lemma: "だけれども"
	},
	{
		rank: 11769,
		frequency: 3.29,
		lemma: "車体"
	},
	{
		rank: 11770,
		frequency: 3.29,
		lemma: "サムライ"
	},
	{
		rank: 11771,
		frequency: 3.29,
		lemma: "コル"
	},
	{
		rank: 11772,
		frequency: 3.28,
		lemma: "ミドル"
	},
	{
		rank: 11773,
		frequency: 3.28,
		lemma: "水上"
	},
	{
		rank: 11774,
		frequency: 3.28,
		lemma: "封印"
	},
	{
		rank: 11775,
		frequency: 3.28,
		lemma: "祖先"
	},
	{
		rank: 11776,
		frequency: 3.28,
		lemma: "入賞"
	},
	{
		rank: 11777,
		frequency: 3.28,
		lemma: "生前"
	},
	{
		rank: 11778,
		frequency: 3.28,
		lemma: "ポット"
	},
	{
		rank: 11779,
		frequency: 3.28,
		lemma: "這う"
	},
	{
		rank: 11780,
		frequency: 3.28,
		lemma: "吐き出す"
	},
	{
		rank: 11781,
		frequency: 3.28,
		lemma: "ε"
	},
	{
		rank: 11782,
		frequency: 3.28,
		lemma: "ストーブ"
	},
	{
		rank: 11783,
		frequency: 3.28,
		lemma: "うり"
	},
	{
		rank: 11784,
		frequency: 3.28,
		lemma: "Σ"
	},
	{
		rank: 11785,
		frequency: 3.28,
		lemma: "柳沢"
	},
	{
		rank: 11786,
		frequency: 3.28,
		lemma: "途切れる"
	},
	{
		rank: 11787,
		frequency: 3.28,
		lemma: "肇"
	},
	{
		rank: 11788,
		frequency: 3.28,
		lemma: "聖地"
	},
	{
		rank: 11789,
		frequency: 3.28,
		lemma: "冷"
	},
	{
		rank: 11790,
		frequency: 3.28,
		lemma: "潜る"
	},
	{
		rank: 11791,
		frequency: 3.28,
		lemma: "裏付ける"
	},
	{
		rank: 11792,
		frequency: 3.28,
		lemma: "定まる"
	},
	{
		rank: 11793,
		frequency: 3.28,
		lemma: "仲良し"
	},
	{
		rank: 11794,
		frequency: 3.28,
		lemma: "資料館"
	},
	{
		rank: 11795,
		frequency: 3.28,
		lemma: "特長"
	},
	{
		rank: 11796,
		frequency: 3.28,
		lemma: "ダニエル"
	},
	{
		rank: 11797,
		frequency: 3.28,
		lemma: "芳"
	},
	{
		rank: 11798,
		frequency: 3.28,
		lemma: "ディーゼル"
	},
	{
		rank: 11799,
		frequency: 3.28,
		lemma: "サスペンス"
	},
	{
		rank: 11800,
		frequency: 3.28,
		lemma: "発散"
	},
	{
		rank: 11801,
		frequency: 3.28,
		lemma: "紅白"
	},
	{
		rank: 11802,
		frequency: 3.28,
		lemma: "片道"
	},
	{
		rank: 11803,
		frequency: 3.28,
		lemma: "どっと"
	},
	{
		rank: 11804,
		frequency: 3.28,
		lemma: "塀"
	},
	{
		rank: 11805,
		frequency: 3.28,
		lemma: "断"
	},
	{
		rank: 11806,
		frequency: 3.28,
		lemma: "囚人"
	},
	{
		rank: 11807,
		frequency: 3.27,
		lemma: "独断"
	},
	{
		rank: 11808,
		frequency: 3.27,
		lemma: "呪い"
	},
	{
		rank: 11809,
		frequency: 3.27,
		lemma: "暮れ"
	},
	{
		rank: 11810,
		frequency: 3.27,
		lemma: "翔"
	},
	{
		rank: 11811,
		frequency: 3.27,
		lemma: "館長"
	},
	{
		rank: 11812,
		frequency: 3.27,
		lemma: "ロビン"
	},
	{
		rank: 11813,
		frequency: 3.27,
		lemma: "時空"
	},
	{
		rank: 11814,
		frequency: 3.27,
		lemma: "キーパー"
	},
	{
		rank: 11815,
		frequency: 3.27,
		lemma: "真夜中"
	},
	{
		rank: 11816,
		frequency: 3.27,
		lemma: "そうだ"
	},
	{
		rank: 11817,
		frequency: 3.27,
		lemma: "論調"
	},
	{
		rank: 11818,
		frequency: 3.27,
		lemma: "奥田"
	},
	{
		rank: 11819,
		frequency: 3.27,
		lemma: "未遂"
	},
	{
		rank: 11820,
		frequency: 3.27,
		lemma: "ダイアリー"
	},
	{
		rank: 11821,
		frequency: 3.27,
		lemma: "シグナル"
	},
	{
		rank: 11822,
		frequency: 3.27,
		lemma: "くぐる"
	},
	{
		rank: 11823,
		frequency: 3.27,
		lemma: "吠える"
	},
	{
		rank: 11824,
		frequency: 3.27,
		lemma: "減量"
	},
	{
		rank: 11825,
		frequency: 3.27,
		lemma: "ありのまま"
	},
	{
		rank: 11826,
		frequency: 3.27,
		lemma: "終身"
	},
	{
		rank: 11827,
		frequency: 3.27,
		lemma: "生後"
	},
	{
		rank: 11828,
		frequency: 3.26,
		lemma: "かに"
	},
	{
		rank: 11829,
		frequency: 3.26,
		lemma: "ビーズ"
	},
	{
		rank: 11830,
		frequency: 3.26,
		lemma: "オペレーション"
	},
	{
		rank: 11831,
		frequency: 3.26,
		lemma: "こする"
	},
	{
		rank: 11832,
		frequency: 3.26,
		lemma: "表参道"
	},
	{
		rank: 11833,
		frequency: 3.26,
		lemma: "一部分"
	},
	{
		rank: 11834,
		frequency: 3.26,
		lemma: "伝授"
	},
	{
		rank: 11835,
		frequency: 3.26,
		lemma: "主語"
	},
	{
		rank: 11836,
		frequency: 3.26,
		lemma: "種目"
	},
	{
		rank: 11837,
		frequency: 3.26,
		lemma: "既"
	},
	{
		rank: 11838,
		frequency: 3.26,
		lemma: "貴女"
	},
	{
		rank: 11839,
		frequency: 3.26,
		lemma: "切り捨てる"
	},
	{
		rank: 11840,
		frequency: 3.26,
		lemma: "界隈"
	},
	{
		rank: 11841,
		frequency: 3.26,
		lemma: "特質"
	},
	{
		rank: 11842,
		frequency: 3.26,
		lemma: "あげく"
	},
	{
		rank: 11843,
		frequency: 3.26,
		lemma: "戸籍"
	},
	{
		rank: 11844,
		frequency: 3.26,
		lemma: "事由"
	},
	{
		rank: 11845,
		frequency: 3.26,
		lemma: "細川"
	},
	{
		rank: 11846,
		frequency: 3.26,
		lemma: "引き出し"
	},
	{
		rank: 11847,
		frequency: 3.26,
		lemma: "ディズニーランド"
	},
	{
		rank: 11848,
		frequency: 3.26,
		lemma: "大金"
	},
	{
		rank: 11849,
		frequency: 3.25,
		lemma: "養子"
	},
	{
		rank: 11850,
		frequency: 3.25,
		lemma: "｝"
	},
	{
		rank: 11851,
		frequency: 3.25,
		lemma: "スイカ"
	},
	{
		rank: 11852,
		frequency: 3.25,
		lemma: "居間"
	},
	{
		rank: 11853,
		frequency: 3.25,
		lemma: "乗用車"
	},
	{
		rank: 11854,
		frequency: 3.25,
		lemma: "新生"
	},
	{
		rank: 11855,
		frequency: 3.25,
		lemma: "さがす"
	},
	{
		rank: 11856,
		frequency: 3.25,
		lemma: "長生き"
	},
	{
		rank: 11857,
		frequency: 3.25,
		lemma: "格言"
	},
	{
		rank: 11858,
		frequency: 3.25,
		lemma: "近寄る"
	},
	{
		rank: 11859,
		frequency: 3.25,
		lemma: "紙幣"
	},
	{
		rank: 11860,
		frequency: 3.25,
		lemma: "秀吉"
	},
	{
		rank: 11861,
		frequency: 3.25,
		lemma: "中堅"
	},
	{
		rank: 11862,
		frequency: 3.25,
		lemma: "どうし"
	},
	{
		rank: 11863,
		frequency: 3.25,
		lemma: "尽力"
	},
	{
		rank: 11864,
		frequency: 3.25,
		lemma: "屈辱"
	},
	{
		rank: 11865,
		frequency: 3.25,
		lemma: "国税"
	},
	{
		rank: 11866,
		frequency: 3.25,
		lemma: "Ω"
	},
	{
		rank: 11867,
		frequency: 3.25,
		lemma: "コンテナ"
	},
	{
		rank: 11868,
		frequency: 3.25,
		lemma: "戦死"
	},
	{
		rank: 11869,
		frequency: 3.25,
		lemma: "一段落"
	},
	{
		rank: 11870,
		frequency: 3.25,
		lemma: "簿記"
	},
	{
		rank: 11871,
		frequency: 3.25,
		lemma: "レーダー"
	},
	{
		rank: 11872,
		frequency: 3.25,
		lemma: "従軍"
	},
	{
		rank: 11873,
		frequency: 3.25,
		lemma: "原動力"
	},
	{
		rank: 11874,
		frequency: 3.25,
		lemma: "先送り"
	},
	{
		rank: 11875,
		frequency: 3.25,
		lemma: "風船"
	},
	{
		rank: 11876,
		frequency: 3.25,
		lemma: "志願"
	},
	{
		rank: 11877,
		frequency: 3.25,
		lemma: "渦"
	},
	{
		rank: 11878,
		frequency: 3.25,
		lemma: "財界"
	},
	{
		rank: 11879,
		frequency: 3.24,
		lemma: "魅せる"
	},
	{
		rank: 11880,
		frequency: 3.24,
		lemma: "老化"
	},
	{
		rank: 11881,
		frequency: 3.24,
		lemma: "打開"
	},
	{
		rank: 11882,
		frequency: 3.24,
		lemma: "引き分け"
	},
	{
		rank: 11883,
		frequency: 3.24,
		lemma: "大雪"
	},
	{
		rank: 11884,
		frequency: 3.24,
		lemma: "花束"
	},
	{
		rank: 11885,
		frequency: 3.24,
		lemma: "判別"
	},
	{
		rank: 11886,
		frequency: 3.24,
		lemma: "那覇"
	},
	{
		rank: 11887,
		frequency: 3.24,
		lemma: "趣向"
	},
	{
		rank: 11888,
		frequency: 3.24,
		lemma: "新井"
	},
	{
		rank: 11889,
		frequency: 3.24,
		lemma: "低音"
	},
	{
		rank: 11890,
		frequency: 3.24,
		lemma: "伊勢"
	},
	{
		rank: 11891,
		frequency: 3.24,
		lemma: "しぼる"
	},
	{
		rank: 11892,
		frequency: 3.24,
		lemma: "破れる"
	},
	{
		rank: 11893,
		frequency: 3.24,
		lemma: "なでる"
	},
	{
		rank: 11894,
		frequency: 3.24,
		lemma: "組み"
	},
	{
		rank: 11895,
		frequency: 3.24,
		lemma: "没頭"
	},
	{
		rank: 11896,
		frequency: 3.24,
		lemma: "ワゴン"
	},
	{
		rank: 11897,
		frequency: 3.24,
		lemma: "依然"
	},
	{
		rank: 11898,
		frequency: 3.24,
		lemma: "胎児"
	},
	{
		rank: 11899,
		frequency: 3.24,
		lemma: "女子大"
	},
	{
		rank: 11900,
		frequency: 3.24,
		lemma: "ひっくり返す"
	},
	{
		rank: 11901,
		frequency: 3.24,
		lemma: "愛犬"
	},
	{
		rank: 11902,
		frequency: 3.24,
		lemma: "タレ"
	},
	{
		rank: 11903,
		frequency: 3.24,
		lemma: "ヨシ"
	},
	{
		rank: 11904,
		frequency: 3.24,
		lemma: "クライマックス"
	},
	{
		rank: 11905,
		frequency: 3.24,
		lemma: "戻れる"
	},
	{
		rank: 11906,
		frequency: 3.24,
		lemma: "ムーア"
	},
	{
		rank: 11907,
		frequency: 3.23,
		lemma: "唯"
	},
	{
		rank: 11908,
		frequency: 3.23,
		lemma: "エキス"
	},
	{
		rank: 11909,
		frequency: 3.23,
		lemma: "仕上がり"
	},
	{
		rank: 11910,
		frequency: 3.23,
		lemma: "ケチ"
	},
	{
		rank: 11911,
		frequency: 3.23,
		lemma: "もろもろ"
	},
	{
		rank: 11912,
		frequency: 3.23,
		lemma: "見分ける"
	},
	{
		rank: 11913,
		frequency: 3.23,
		lemma: "辛"
	},
	{
		rank: 11914,
		frequency: 3.23,
		lemma: "真っ黒"
	},
	{
		rank: 11915,
		frequency: 3.23,
		lemma: "骨格"
	},
	{
		rank: 11916,
		frequency: 3.23,
		lemma: "荒木"
	},
	{
		rank: 11917,
		frequency: 3.23,
		lemma: "軌跡"
	},
	{
		rank: 11918,
		frequency: 3.23,
		lemma: "うろうろ"
	},
	{
		rank: 11919,
		frequency: 3.23,
		lemma: "裁定"
	},
	{
		rank: 11920,
		frequency: 3.23,
		lemma: "懐疑"
	},
	{
		rank: 11921,
		frequency: 3.23,
		lemma: "車検"
	},
	{
		rank: 11922,
		frequency: 3.22,
		lemma: "乗"
	},
	{
		rank: 11923,
		frequency: 3.22,
		lemma: "二酸化炭素"
	},
	{
		rank: 11924,
		frequency: 3.22,
		lemma: "表わす"
	},
	{
		rank: 11925,
		frequency: 3.22,
		lemma: "大笑い"
	},
	{
		rank: 11926,
		frequency: 3.22,
		lemma: "蛍光"
	},
	{
		rank: 11927,
		frequency: 3.22,
		lemma: "上着"
	},
	{
		rank: 11928,
		frequency: 3.22,
		lemma: "使"
	},
	{
		rank: 11929,
		frequency: 3.22,
		lemma: "目黒"
	},
	{
		rank: 11930,
		frequency: 3.22,
		lemma: "幾"
	},
	{
		rank: 11931,
		frequency: 3.22,
		lemma: "鮨"
	},
	{
		rank: 11932,
		frequency: 3.22,
		lemma: "ＰＫ"
	},
	{
		rank: 11933,
		frequency: 3.22,
		lemma: "振替"
	},
	{
		rank: 11934,
		frequency: 3.22,
		lemma: "占拠"
	},
	{
		rank: 11935,
		frequency: 3.22,
		lemma: "ゴジラ"
	},
	{
		rank: 11936,
		frequency: 3.22,
		lemma: "欠かす"
	},
	{
		rank: 11937,
		frequency: 3.22,
		lemma: "エサ"
	},
	{
		rank: 11938,
		frequency: 3.22,
		lemma: "野中"
	},
	{
		rank: 11939,
		frequency: 3.22,
		lemma: "道筋"
	},
	{
		rank: 11940,
		frequency: 3.22,
		lemma: "出社"
	},
	{
		rank: 11941,
		frequency: 3.22,
		lemma: "ミシェル"
	},
	{
		rank: 11942,
		frequency: 3.22,
		lemma: "勲章"
	},
	{
		rank: 11943,
		frequency: 3.22,
		lemma: "唄う"
	},
	{
		rank: 11944,
		frequency: 3.22,
		lemma: "ぱっと"
	},
	{
		rank: 11945,
		frequency: 3.22,
		lemma: "しら"
	},
	{
		rank: 11946,
		frequency: 3.22,
		lemma: "帯広"
	},
	{
		rank: 11947,
		frequency: 3.22,
		lemma: "パース"
	},
	{
		rank: 11948,
		frequency: 3.22,
		lemma: "重たい"
	},
	{
		rank: 11949,
		frequency: 3.21,
		lemma: "盧"
	},
	{
		rank: 11950,
		frequency: 3.21,
		lemma: "和平"
	},
	{
		rank: 11951,
		frequency: 3.21,
		lemma: "番手"
	},
	{
		rank: 11952,
		frequency: 3.21,
		lemma: "思春期"
	},
	{
		rank: 11953,
		frequency: 3.21,
		lemma: "はあ"
	},
	{
		rank: 11954,
		frequency: 3.21,
		lemma: "ヨー"
	},
	{
		rank: 11955,
		frequency: 3.21,
		lemma: "久しい"
	},
	{
		rank: 11956,
		frequency: 3.21,
		lemma: "セッティング"
	},
	{
		rank: 11957,
		frequency: 3.21,
		lemma: "しっくり"
	},
	{
		rank: 11958,
		frequency: 3.21,
		lemma: "仕切る"
	},
	{
		rank: 11959,
		frequency: 3.21,
		lemma: "冥福"
	},
	{
		rank: 11960,
		frequency: 3.21,
		lemma: "渡部"
	},
	{
		rank: 11961,
		frequency: 3.21,
		lemma: "弱る"
	},
	{
		rank: 11962,
		frequency: 3.21,
		lemma: "ぺん"
	},
	{
		rank: 11963,
		frequency: 3.21,
		lemma: "美少女"
	},
	{
		rank: 11964,
		frequency: 3.21,
		lemma: "霊的"
	},
	{
		rank: 11965,
		frequency: 3.21,
		lemma: "伊豆"
	},
	{
		rank: 11966,
		frequency: 3.21,
		lemma: "呪文"
	},
	{
		rank: 11967,
		frequency: 3.2,
		lemma: "バンクーバー"
	},
	{
		rank: 11968,
		frequency: 3.2,
		lemma: "逆らう"
	},
	{
		rank: 11969,
		frequency: 3.2,
		lemma: "帽"
	},
	{
		rank: 11970,
		frequency: 3.2,
		lemma: "メロン"
	},
	{
		rank: 11971,
		frequency: 3.2,
		lemma: "試聴"
	},
	{
		rank: 11972,
		frequency: 3.2,
		lemma: "開場"
	},
	{
		rank: 11973,
		frequency: 3.2,
		lemma: "総称"
	},
	{
		rank: 11974,
		frequency: 3.2,
		lemma: "旺盛"
	},
	{
		rank: 11975,
		frequency: 3.2,
		lemma: "無茶"
	},
	{
		rank: 11976,
		frequency: 3.2,
		lemma: "浅野"
	},
	{
		rank: 11977,
		frequency: 3.2,
		lemma: "どうこう"
	},
	{
		rank: 11978,
		frequency: 3.2,
		lemma: "任天堂"
	},
	{
		rank: 11979,
		frequency: 3.2,
		lemma: "盛りだくさん"
	},
	{
		rank: 11980,
		frequency: 3.2,
		lemma: "余剰"
	},
	{
		rank: 11981,
		frequency: 3.2,
		lemma: "パラダイス"
	},
	{
		rank: 11982,
		frequency: 3.2,
		lemma: "履行"
	},
	{
		rank: 11983,
		frequency: 3.2,
		lemma: "操業"
	},
	{
		rank: 11984,
		frequency: 3.2,
		lemma: "無能"
	},
	{
		rank: 11985,
		frequency: 3.2,
		lemma: "ご機嫌"
	},
	{
		rank: 11986,
		frequency: 3.2,
		lemma: "書斎"
	},
	{
		rank: 11987,
		frequency: 3.2,
		lemma: "面々"
	},
	{
		rank: 11988,
		frequency: 3.2,
		lemma: "インターン"
	},
	{
		rank: 11989,
		frequency: 3.2,
		lemma: "まめ"
	},
	{
		rank: 11990,
		frequency: 3.19,
		lemma: "平穏"
	},
	{
		rank: 11991,
		frequency: 3.19,
		lemma: "エッセンス"
	},
	{
		rank: 11992,
		frequency: 3.19,
		lemma: "野望"
	},
	{
		rank: 11993,
		frequency: 3.19,
		lemma: "衣類"
	},
	{
		rank: 11994,
		frequency: 3.19,
		lemma: "献身"
	},
	{
		rank: 11995,
		frequency: 3.19,
		lemma: "おり"
	},
	{
		rank: 11996,
		frequency: 3.19,
		lemma: "明日香"
	},
	{
		rank: 11997,
		frequency: 3.19,
		lemma: "祥"
	},
	{
		rank: 11998,
		frequency: 3.19,
		lemma: "スパイス"
	},
	{
		rank: 11999,
		frequency: 3.19,
		lemma: "南西"
	},
	{
		rank: 12000,
		frequency: 3.19,
		lemma: "バックス"
	},
	{
		rank: 12001,
		frequency: 3.19,
		lemma: "ファーム"
	},
	{
		rank: 12002,
		frequency: 3.19,
		lemma: "食後"
	},
	{
		rank: 12003,
		frequency: 3.19,
		lemma: "起つ"
	},
	{
		rank: 12004,
		frequency: 3.19,
		lemma: "こま"
	},
	{
		rank: 12005,
		frequency: 3.19,
		lemma: "導"
	},
	{
		rank: 12006,
		frequency: 3.19,
		lemma: "王道"
	},
	{
		rank: 12007,
		frequency: 3.19,
		lemma: "検挙"
	},
	{
		rank: 12008,
		frequency: 3.18,
		lemma: "名門"
	},
	{
		rank: 12009,
		frequency: 3.18,
		lemma: "強豪"
	},
	{
		rank: 12010,
		frequency: 3.18,
		lemma: "ウリ"
	},
	{
		rank: 12011,
		frequency: 3.18,
		lemma: "諒"
	},
	{
		rank: 12012,
		frequency: 3.18,
		lemma: "現存"
	},
	{
		rank: 12013,
		frequency: 3.18,
		lemma: "立ち去る"
	},
	{
		rank: 12014,
		frequency: 3.18,
		lemma: "有馬"
	},
	{
		rank: 12015,
		frequency: 3.18,
		lemma: "教委"
	},
	{
		rank: 12016,
		frequency: 3.18,
		lemma: "民放"
	},
	{
		rank: 12017,
		frequency: 3.18,
		lemma: "熱気"
	},
	{
		rank: 12018,
		frequency: 3.18,
		lemma: "ボイス"
	},
	{
		rank: 12019,
		frequency: 3.18,
		lemma: "すさまじい"
	},
	{
		rank: 12020,
		frequency: 3.18,
		lemma: "窃盗"
	},
	{
		rank: 12021,
		frequency: 3.18,
		lemma: "謳う"
	},
	{
		rank: 12022,
		frequency: 3.18,
		lemma: "インチキ"
	},
	{
		rank: 12023,
		frequency: 3.18,
		lemma: "改悪"
	},
	{
		rank: 12024,
		frequency: 3.18,
		lemma: "本位"
	},
	{
		rank: 12025,
		frequency: 3.18,
		lemma: "うなる"
	},
	{
		rank: 12026,
		frequency: 3.18,
		lemma: "朝日新聞社"
	},
	{
		rank: 12027,
		frequency: 3.18,
		lemma: "ポリス"
	},
	{
		rank: 12028,
		frequency: 3.18,
		lemma: "会期"
	},
	{
		rank: 12029,
		frequency: 3.18,
		lemma: "伸"
	},
	{
		rank: 12030,
		frequency: 3.18,
		lemma: "稲"
	},
	{
		rank: 12031,
		frequency: 3.18,
		lemma: "生き"
	},
	{
		rank: 12032,
		frequency: 3.18,
		lemma: "土屋"
	},
	{
		rank: 12033,
		frequency: 3.18,
		lemma: "憎しみ"
	},
	{
		rank: 12034,
		frequency: 3.18,
		lemma: "タメ"
	},
	{
		rank: 12035,
		frequency: 3.18,
		lemma: "当人"
	},
	{
		rank: 12036,
		frequency: 3.18,
		lemma: "拍子"
	},
	{
		rank: 12037,
		frequency: 3.18,
		lemma: "滅びる"
	},
	{
		rank: 12038,
		frequency: 3.18,
		lemma: "白紙"
	},
	{
		rank: 12039,
		frequency: 3.18,
		lemma: "求む"
	},
	{
		rank: 12040,
		frequency: 3.18,
		lemma: "釜"
	},
	{
		rank: 12041,
		frequency: 3.18,
		lemma: "走り"
	},
	{
		rank: 12042,
		frequency: 3.18,
		lemma: "木製"
	},
	{
		rank: 12043,
		frequency: 3.18,
		lemma: "かろうじて"
	},
	{
		rank: 12044,
		frequency: 3.18,
		lemma: "果てる"
	},
	{
		rank: 12045,
		frequency: 3.18,
		lemma: "浪"
	},
	{
		rank: 12046,
		frequency: 3.18,
		lemma: "いちご"
	},
	{
		rank: 12047,
		frequency: 3.17,
		lemma: "スラム"
	},
	{
		rank: 12048,
		frequency: 3.17,
		lemma: "こぐ"
	},
	{
		rank: 12049,
		frequency: 3.17,
		lemma: "読解"
	},
	{
		rank: 12050,
		frequency: 3.17,
		lemma: "全土"
	},
	{
		rank: 12051,
		frequency: 3.17,
		lemma: "先入観"
	},
	{
		rank: 12052,
		frequency: 3.17,
		lemma: "挙句"
	},
	{
		rank: 12053,
		frequency: 3.17,
		lemma: "杉山"
	},
	{
		rank: 12054,
		frequency: 3.17,
		lemma: "巡り"
	},
	{
		rank: 12055,
		frequency: 3.17,
		lemma: "増幅"
	},
	{
		rank: 12056,
		frequency: 3.17,
		lemma: "ＮＯ"
	},
	{
		rank: 12057,
		frequency: 3.17,
		lemma: "比重"
	},
	{
		rank: 12058,
		frequency: 3.17,
		lemma: "水質"
	},
	{
		rank: 12059,
		frequency: 3.17,
		lemma: "ゆだねる"
	},
	{
		rank: 12060,
		frequency: 3.17,
		lemma: "手動"
	},
	{
		rank: 12061,
		frequency: 3.17,
		lemma: "プログラマー"
	},
	{
		rank: 12062,
		frequency: 3.17,
		lemma: "ウォーキング"
	},
	{
		rank: 12063,
		frequency: 3.17,
		lemma: "スワップ"
	},
	{
		rank: 12064,
		frequency: 3.17,
		lemma: "金庫"
	},
	{
		rank: 12065,
		frequency: 3.17,
		lemma: "終値"
	},
	{
		rank: 12066,
		frequency: 3.17,
		lemma: "トリオ"
	},
	{
		rank: 12067,
		frequency: 3.17,
		lemma: "いっさい"
	},
	{
		rank: 12068,
		frequency: 3.17,
		lemma: "例会"
	},
	{
		rank: 12069,
		frequency: 3.17,
		lemma: "慰める"
	},
	{
		rank: 12070,
		frequency: 3.17,
		lemma: "わるい"
	},
	{
		rank: 12071,
		frequency: 3.17,
		lemma: "範疇"
	},
	{
		rank: 12072,
		frequency: 3.17,
		lemma: "植"
	},
	{
		rank: 12073,
		frequency: 3.16,
		lemma: "恵比寿"
	},
	{
		rank: 12074,
		frequency: 3.16,
		lemma: "熟成"
	},
	{
		rank: 12075,
		frequency: 3.16,
		lemma: "例文"
	},
	{
		rank: 12076,
		frequency: 3.16,
		lemma: "推論"
	},
	{
		rank: 12077,
		frequency: 3.16,
		lemma: "ソファ"
	},
	{
		rank: 12078,
		frequency: 3.16,
		lemma: "ユーティリティ"
	},
	{
		rank: 12079,
		frequency: 3.16,
		lemma: "座談"
	},
	{
		rank: 12080,
		frequency: 3.16,
		lemma: "よけい"
	},
	{
		rank: 12081,
		frequency: 3.16,
		lemma: "波長"
	},
	{
		rank: 12082,
		frequency: 3.16,
		lemma: "思いこむ"
	},
	{
		rank: 12083,
		frequency: 3.16,
		lemma: "実戦"
	},
	{
		rank: 12084,
		frequency: 3.16,
		lemma: "分泌"
	},
	{
		rank: 12085,
		frequency: 3.16,
		lemma: "ズバリ"
	},
	{
		rank: 12086,
		frequency: 3.16,
		lemma: "飼料"
	},
	{
		rank: 12087,
		frequency: 3.15,
		lemma: "てか"
	},
	{
		rank: 12088,
		frequency: 3.15,
		lemma: "帯域"
	},
	{
		rank: 12089,
		frequency: 3.15,
		lemma: "坊主"
	},
	{
		rank: 12090,
		frequency: 3.15,
		lemma: "服部"
	},
	{
		rank: 12091,
		frequency: 3.15,
		lemma: "治癒"
	},
	{
		rank: 12092,
		frequency: 3.15,
		lemma: "オッサン"
	},
	{
		rank: 12093,
		frequency: 3.15,
		lemma: "人様"
	},
	{
		rank: 12094,
		frequency: 3.15,
		lemma: "課する"
	},
	{
		rank: 12095,
		frequency: 3.15,
		lemma: "語れる"
	},
	{
		rank: 12096,
		frequency: 3.15,
		lemma: "民生"
	},
	{
		rank: 12097,
		frequency: 3.15,
		lemma: "剣道"
	},
	{
		rank: 12098,
		frequency: 3.15,
		lemma: "肘"
	},
	{
		rank: 12099,
		frequency: 3.15,
		lemma: "振るう"
	},
	{
		rank: 12100,
		frequency: 3.15,
		lemma: "墨"
	},
	{
		rank: 12101,
		frequency: 3.15,
		lemma: "いつしか"
	},
	{
		rank: 12102,
		frequency: 3.15,
		lemma: "缶詰"
	},
	{
		rank: 12103,
		frequency: 3.15,
		lemma: "サーキット"
	},
	{
		rank: 12104,
		frequency: 3.15,
		lemma: "スティーブ"
	},
	{
		rank: 12105,
		frequency: 3.15,
		lemma: "顔面"
	},
	{
		rank: 12106,
		frequency: 3.15,
		lemma: "バーベキュー"
	},
	{
		rank: 12107,
		frequency: 3.15,
		lemma: "生きがい"
	},
	{
		rank: 12108,
		frequency: 3.15,
		lemma: "愛車"
	},
	{
		rank: 12109,
		frequency: 3.15,
		lemma: "土井"
	},
	{
		rank: 12110,
		frequency: 3.15,
		lemma: "コンセンサス"
	},
	{
		rank: 12111,
		frequency: 3.15,
		lemma: "三宅"
	},
	{
		rank: 12112,
		frequency: 3.15,
		lemma: "本命"
	},
	{
		rank: 12113,
		frequency: 3.15,
		lemma: "これぞ"
	},
	{
		rank: 12114,
		frequency: 3.15,
		lemma: "難点"
	},
	{
		rank: 12115,
		frequency: 3.15,
		lemma: "固執"
	},
	{
		rank: 12116,
		frequency: 3.15,
		lemma: "宗派"
	},
	{
		rank: 12117,
		frequency: 3.15,
		lemma: "ボウ"
	},
	{
		rank: 12118,
		frequency: 3.15,
		lemma: "見返り"
	},
	{
		rank: 12119,
		frequency: 3.15,
		lemma: "貸し出し"
	},
	{
		rank: 12120,
		frequency: 3.15,
		lemma: "熟練"
	},
	{
		rank: 12121,
		frequency: 3.14,
		lemma: "伝記"
	},
	{
		rank: 12122,
		frequency: 3.14,
		lemma: "大森"
	},
	{
		rank: 12123,
		frequency: 3.14,
		lemma: "人的"
	},
	{
		rank: 12124,
		frequency: 3.14,
		lemma: "理学"
	},
	{
		rank: 12125,
		frequency: 3.14,
		lemma: "なつかしい"
	},
	{
		rank: 12126,
		frequency: 3.14,
		lemma: "聖霊"
	},
	{
		rank: 12127,
		frequency: 3.14,
		lemma: "オリックス"
	},
	{
		rank: 12128,
		frequency: 3.14,
		lemma: "電灯"
	},
	{
		rank: 12129,
		frequency: 3.14,
		lemma: "立ち読み"
	},
	{
		rank: 12130,
		frequency: 3.14,
		lemma: "あれる"
	},
	{
		rank: 12131,
		frequency: 3.14,
		lemma: "一転"
	},
	{
		rank: 12132,
		frequency: 3.14,
		lemma: "追伸"
	},
	{
		rank: 12133,
		frequency: 3.14,
		lemma: "彼女ら"
	},
	{
		rank: 12134,
		frequency: 3.14,
		lemma: "釘"
	},
	{
		rank: 12135,
		frequency: 3.14,
		lemma: "松尾"
	},
	{
		rank: 12136,
		frequency: 3.14,
		lemma: "画質"
	},
	{
		rank: 12137,
		frequency: 3.14,
		lemma: "カモ"
	},
	{
		rank: 12138,
		frequency: 3.14,
		lemma: "長寿"
	},
	{
		rank: 12139,
		frequency: 3.14,
		lemma: "澄"
	},
	{
		rank: 12140,
		frequency: 3.14,
		lemma: "クラフト"
	},
	{
		rank: 12141,
		frequency: 3.14,
		lemma: "綾"
	},
	{
		rank: 12142,
		frequency: 3.14,
		lemma: "短大"
	},
	{
		rank: 12143,
		frequency: 3.13,
		lemma: "インストラクター"
	},
	{
		rank: 12144,
		frequency: 3.13,
		lemma: "柵"
	},
	{
		rank: 12145,
		frequency: 3.13,
		lemma: "シスコ"
	},
	{
		rank: 12146,
		frequency: 3.13,
		lemma: "単体"
	},
	{
		rank: 12147,
		frequency: 3.13,
		lemma: "埋葬"
	},
	{
		rank: 12148,
		frequency: 3.13,
		lemma: "マトリックス"
	},
	{
		rank: 12149,
		frequency: 3.13,
		lemma: "八王子"
	},
	{
		rank: 12150,
		frequency: 3.13,
		lemma: "定量"
	},
	{
		rank: 12151,
		frequency: 3.13,
		lemma: "出典"
	},
	{
		rank: 12152,
		frequency: 3.13,
		lemma: "酒井"
	},
	{
		rank: 12153,
		frequency: 3.13,
		lemma: "見かけ"
	},
	{
		rank: 12154,
		frequency: 3.13,
		lemma: "グッ"
	},
	{
		rank: 12155,
		frequency: 3.13,
		lemma: "マルコ"
	},
	{
		rank: 12156,
		frequency: 3.13,
		lemma: "売店"
	},
	{
		rank: 12157,
		frequency: 3.13,
		lemma: "下痢"
	},
	{
		rank: 12158,
		frequency: 3.13,
		lemma: "休"
	},
	{
		rank: 12159,
		frequency: 3.13,
		lemma: "変態"
	},
	{
		rank: 12160,
		frequency: 3.13,
		lemma: "別荘"
	},
	{
		rank: 12161,
		frequency: 3.13,
		lemma: "ふるう"
	},
	{
		rank: 12162,
		frequency: 3.13,
		lemma: "序盤"
	},
	{
		rank: 12163,
		frequency: 3.13,
		lemma: "障壁"
	},
	{
		rank: 12164,
		frequency: 3.13,
		lemma: "ステンレス"
	},
	{
		rank: 12165,
		frequency: 3.13,
		lemma: "国崎"
	},
	{
		rank: 12166,
		frequency: 3.13,
		lemma: "つう"
	},
	{
		rank: 12167,
		frequency: 3.13,
		lemma: "クエスト"
	},
	{
		rank: 12168,
		frequency: 3.13,
		lemma: "ワイルド"
	},
	{
		rank: 12169,
		frequency: 3.13,
		lemma: "ワル"
	},
	{
		rank: 12170,
		frequency: 3.13,
		lemma: "毛布"
	},
	{
		rank: 12171,
		frequency: 3.13,
		lemma: "コンセント"
	},
	{
		rank: 12172,
		frequency: 3.13,
		lemma: "朱"
	},
	{
		rank: 12173,
		frequency: 3.13,
		lemma: "大田"
	},
	{
		rank: 12174,
		frequency: 3.13,
		lemma: "真っ"
	},
	{
		rank: 12175,
		frequency: 3.13,
		lemma: "硬直"
	},
	{
		rank: 12176,
		frequency: 3.13,
		lemma: "上層"
	},
	{
		rank: 12177,
		frequency: 3.12,
		lemma: "フィリップ"
	},
	{
		rank: 12178,
		frequency: 3.12,
		lemma: "建国"
	},
	{
		rank: 12179,
		frequency: 3.12,
		lemma: "松浦"
	},
	{
		rank: 12180,
		frequency: 3.12,
		lemma: "コリア"
	},
	{
		rank: 12181,
		frequency: 3.12,
		lemma: "離職"
	},
	{
		rank: 12182,
		frequency: 3.12,
		lemma: "厚み"
	},
	{
		rank: 12183,
		frequency: 3.12,
		lemma: "新曲"
	},
	{
		rank: 12184,
		frequency: 3.12,
		lemma: "その道"
	},
	{
		rank: 12185,
		frequency: 3.12,
		lemma: "香水"
	},
	{
		rank: 12186,
		frequency: 3.12,
		lemma: "伝播"
	},
	{
		rank: 12187,
		frequency: 3.12,
		lemma: "称する"
	},
	{
		rank: 12188,
		frequency: 3.12,
		lemma: "正論"
	},
	{
		rank: 12189,
		frequency: 3.12,
		lemma: "大石"
	},
	{
		rank: 12190,
		frequency: 3.12,
		lemma: "バリアフリー"
	},
	{
		rank: 12191,
		frequency: 3.12,
		lemma: "ささやく"
	},
	{
		rank: 12192,
		frequency: 3.12,
		lemma: "不都合"
	},
	{
		rank: 12193,
		frequency: 3.12,
		lemma: "フォーカス"
	},
	{
		rank: 12194,
		frequency: 3.12,
		lemma: "本学"
	},
	{
		rank: 12195,
		frequency: 3.12,
		lemma: "忠"
	},
	{
		rank: 12196,
		frequency: 3.12,
		lemma: "祀る"
	},
	{
		rank: 12197,
		frequency: 3.12,
		lemma: "測量"
	},
	{
		rank: 12198,
		frequency: 3.12,
		lemma: "のばす"
	},
	{
		rank: 12199,
		frequency: 3.12,
		lemma: "パンダ"
	},
	{
		rank: 12200,
		frequency: 3.12,
		lemma: "度々"
	},
	{
		rank: 12201,
		frequency: 3.11,
		lemma: "行き来"
	},
	{
		rank: 12202,
		frequency: 3.11,
		lemma: "またがる"
	},
	{
		rank: 12203,
		frequency: 3.11,
		lemma: "エゴ"
	},
	{
		rank: 12204,
		frequency: 3.11,
		lemma: "弔い"
	},
	{
		rank: 12205,
		frequency: 3.11,
		lemma: "地上波"
	},
	{
		rank: 12206,
		frequency: 3.11,
		lemma: "覚醒"
	},
	{
		rank: 12207,
		frequency: 3.11,
		lemma: "淘汰"
	},
	{
		rank: 12208,
		frequency: 3.11,
		lemma: "あした"
	},
	{
		rank: 12209,
		frequency: 3.11,
		lemma: "南側"
	},
	{
		rank: 12210,
		frequency: 3.11,
		lemma: "退社"
	},
	{
		rank: 12211,
		frequency: 3.11,
		lemma: "アール"
	},
	{
		rank: 12212,
		frequency: 3.11,
		lemma: "史料"
	},
	{
		rank: 12213,
		frequency: 3.11,
		lemma: "呼び出し"
	},
	{
		rank: 12214,
		frequency: 3.11,
		lemma: "会報"
	},
	{
		rank: 12215,
		frequency: 3.11,
		lemma: "ムーン"
	},
	{
		rank: 12216,
		frequency: 3.11,
		lemma: "ヒュー"
	},
	{
		rank: 12217,
		frequency: 3.11,
		lemma: "Ｆ１"
	},
	{
		rank: 12218,
		frequency: 3.11,
		lemma: "差し引く"
	},
	{
		rank: 12219,
		frequency: 3.11,
		lemma: "かぐ"
	},
	{
		rank: 12220,
		frequency: 3.11,
		lemma: "幾度"
	},
	{
		rank: 12221,
		frequency: 3.11,
		lemma: "ファクター"
	},
	{
		rank: 12222,
		frequency: 3.11,
		lemma: "スプリング"
	},
	{
		rank: 12223,
		frequency: 3.11,
		lemma: "ヶ国"
	},
	{
		rank: 12224,
		frequency: 3.11,
		lemma: "ホワイトハウス"
	},
	{
		rank: 12225,
		frequency: 3.11,
		lemma: "深み"
	},
	{
		rank: 12226,
		frequency: 3.11,
		lemma: "樋口"
	},
	{
		rank: 12227,
		frequency: 3.11,
		lemma: "ウェールズ"
	},
	{
		rank: 12228,
		frequency: 3.11,
		lemma: "北陸"
	},
	{
		rank: 12229,
		frequency: 3.11,
		lemma: "三者"
	},
	{
		rank: 12230,
		frequency: 3.11,
		lemma: "暮らせる"
	},
	{
		rank: 12231,
		frequency: 3.1,
		lemma: "ベートーヴェン"
	},
	{
		rank: 12232,
		frequency: 3.1,
		lemma: "ビーム"
	},
	{
		rank: 12233,
		frequency: 3.1,
		lemma: "縁起"
	},
	{
		rank: 12234,
		frequency: 3.1,
		lemma: "混在"
	},
	{
		rank: 12235,
		frequency: 3.1,
		lemma: "フランクフルト"
	},
	{
		rank: 12236,
		frequency: 3.1,
		lemma: "如く"
	},
	{
		rank: 12237,
		frequency: 3.1,
		lemma: "琉球"
	},
	{
		rank: 12238,
		frequency: 3.1,
		lemma: "マイホーム"
	},
	{
		rank: 12239,
		frequency: 3.1,
		lemma: "スピン"
	},
	{
		rank: 12240,
		frequency: 3.1,
		lemma: "粉飾"
	},
	{
		rank: 12241,
		frequency: 3.1,
		lemma: "位置付ける"
	},
	{
		rank: 12242,
		frequency: 3.1,
		lemma: "一節"
	},
	{
		rank: 12243,
		frequency: 3.1,
		lemma: "武部"
	},
	{
		rank: 12244,
		frequency: 3.1,
		lemma: "音波"
	},
	{
		rank: 12245,
		frequency: 3.1,
		lemma: "ちょうだい"
	},
	{
		rank: 12246,
		frequency: 3.09,
		lemma: "ｃ"
	},
	{
		rank: 12247,
		frequency: 3.09,
		lemma: "駐"
	},
	{
		rank: 12248,
		frequency: 3.09,
		lemma: "儀"
	},
	{
		rank: 12249,
		frequency: 3.09,
		lemma: "封鎖"
	},
	{
		rank: 12250,
		frequency: 3.09,
		lemma: "駆除"
	},
	{
		rank: 12251,
		frequency: 3.09,
		lemma: "プロテスタント"
	},
	{
		rank: 12252,
		frequency: 3.09,
		lemma: "はなはだ"
	},
	{
		rank: 12253,
		frequency: 3.09,
		lemma: "知らせ"
	},
	{
		rank: 12254,
		frequency: 3.09,
		lemma: "嫌がらせ"
	},
	{
		rank: 12255,
		frequency: 3.09,
		lemma: "抱っこ"
	},
	{
		rank: 12256,
		frequency: 3.09,
		lemma: "社名"
	},
	{
		rank: 12257,
		frequency: 3.09,
		lemma: "環境省"
	},
	{
		rank: 12258,
		frequency: 3.09,
		lemma: "書き換える"
	},
	{
		rank: 12259,
		frequency: 3.09,
		lemma: "夜景"
	},
	{
		rank: 12260,
		frequency: 3.09,
		lemma: "生計"
	},
	{
		rank: 12261,
		frequency: 3.09,
		lemma: "｛"
	},
	{
		rank: 12262,
		frequency: 3.09,
		lemma: "発熱"
	},
	{
		rank: 12263,
		frequency: 3.09,
		lemma: "村山"
	},
	{
		rank: 12264,
		frequency: 3.09,
		lemma: "区切る"
	},
	{
		rank: 12265,
		frequency: 3.09,
		lemma: "朴"
	},
	{
		rank: 12266,
		frequency: 3.09,
		lemma: "さも"
	},
	{
		rank: 12267,
		frequency: 3.09,
		lemma: "量販"
	},
	{
		rank: 12268,
		frequency: 3.09,
		lemma: "そそる"
	},
	{
		rank: 12269,
		frequency: 3.09,
		lemma: "ファシズム"
	},
	{
		rank: 12270,
		frequency: 3.09,
		lemma: "封建"
	},
	{
		rank: 12271,
		frequency: 3.09,
		lemma: "聖人"
	},
	{
		rank: 12272,
		frequency: 3.09,
		lemma: "永住"
	},
	{
		rank: 12273,
		frequency: 3.09,
		lemma: "自明"
	},
	{
		rank: 12274,
		frequency: 3.09,
		lemma: "境内"
	},
	{
		rank: 12275,
		frequency: 3.09,
		lemma: "鯖"
	},
	{
		rank: 12276,
		frequency: 3.09,
		lemma: "帰す"
	},
	{
		rank: 12277,
		frequency: 3.08,
		lemma: "落ち"
	},
	{
		rank: 12278,
		frequency: 3.08,
		lemma: "伝送"
	},
	{
		rank: 12279,
		frequency: 3.08,
		lemma: "即興"
	},
	{
		rank: 12280,
		frequency: 3.08,
		lemma: "症例"
	},
	{
		rank: 12281,
		frequency: 3.08,
		lemma: "海域"
	},
	{
		rank: 12282,
		frequency: 3.08,
		lemma: "うなぎ"
	},
	{
		rank: 12283,
		frequency: 3.08,
		lemma: "放る"
	},
	{
		rank: 12284,
		frequency: 3.08,
		lemma: "ステータス"
	},
	{
		rank: 12285,
		frequency: 3.08,
		lemma: "空洞"
	},
	{
		rank: 12286,
		frequency: 3.08,
		lemma: "集英社"
	},
	{
		rank: 12287,
		frequency: 3.08,
		lemma: "大谷"
	},
	{
		rank: 12288,
		frequency: 3.08,
		lemma: "馬車"
	},
	{
		rank: 12289,
		frequency: 3.08,
		lemma: "ジャングル"
	},
	{
		rank: 12290,
		frequency: 3.08,
		lemma: "キノコ"
	},
	{
		rank: 12291,
		frequency: 3.08,
		lemma: "植木"
	},
	{
		rank: 12292,
		frequency: 3.08,
		lemma: "充"
	},
	{
		rank: 12293,
		frequency: 3.08,
		lemma: "陳列"
	},
	{
		rank: 12294,
		frequency: 3.08,
		lemma: "今ひとつ"
	},
	{
		rank: 12295,
		frequency: 3.08,
		lemma: "クーポン"
	},
	{
		rank: 12296,
		frequency: 3.08,
		lemma: "鞄"
	},
	{
		rank: 12297,
		frequency: 3.07,
		lemma: "恒久"
	},
	{
		rank: 12298,
		frequency: 3.07,
		lemma: "大きめ"
	},
	{
		rank: 12299,
		frequency: 3.07,
		lemma: "仕立てる"
	},
	{
		rank: 12300,
		frequency: 3.07,
		lemma: "改"
	},
	{
		rank: 12301,
		frequency: 3.07,
		lemma: "当て"
	},
	{
		rank: 12302,
		frequency: 3.07,
		lemma: "すぐさま"
	},
	{
		rank: 12303,
		frequency: 3.07,
		lemma: "主旨"
	},
	{
		rank: 12304,
		frequency: 3.07,
		lemma: "不平等"
	},
	{
		rank: 12305,
		frequency: 3.07,
		lemma: "がけ"
	},
	{
		rank: 12306,
		frequency: 3.07,
		lemma: "落書き"
	},
	{
		rank: 12307,
		frequency: 3.07,
		lemma: "公聴"
	},
	{
		rank: 12308,
		frequency: 3.07,
		lemma: "快"
	},
	{
		rank: 12309,
		frequency: 3.07,
		lemma: "盛岡"
	},
	{
		rank: 12310,
		frequency: 3.07,
		lemma: "助長"
	},
	{
		rank: 12311,
		frequency: 3.07,
		lemma: "ハンバーガー"
	},
	{
		rank: 12312,
		frequency: 3.07,
		lemma: "懲戒"
	},
	{
		rank: 12313,
		frequency: 3.07,
		lemma: "ズレ"
	},
	{
		rank: 12314,
		frequency: 3.07,
		lemma: "ぶどう"
	},
	{
		rank: 12315,
		frequency: 3.07,
		lemma: "艶"
	},
	{
		rank: 12316,
		frequency: 3.07,
		lemma: "下流"
	},
	{
		rank: 12317,
		frequency: 3.07,
		lemma: "入所"
	},
	{
		rank: 12318,
		frequency: 3.07,
		lemma: "かじる"
	},
	{
		rank: 12319,
		frequency: 3.07,
		lemma: "ラウンジ"
	},
	{
		rank: 12320,
		frequency: 3.07,
		lemma: "寄"
	},
	{
		rank: 12321,
		frequency: 3.06,
		lemma: "テレビ朝日"
	},
	{
		rank: 12322,
		frequency: 3.06,
		lemma: "ときには"
	},
	{
		rank: 12323,
		frequency: 3.06,
		lemma: "専任"
	},
	{
		rank: 12324,
		frequency: 3.06,
		lemma: "わける"
	},
	{
		rank: 12325,
		frequency: 3.06,
		lemma: "配付"
	},
	{
		rank: 12326,
		frequency: 3.06,
		lemma: "捕る"
	},
	{
		rank: 12327,
		frequency: 3.06,
		lemma: "四郎"
	},
	{
		rank: 12328,
		frequency: 3.06,
		lemma: "日和"
	},
	{
		rank: 12329,
		frequency: 3.06,
		lemma: "甘味"
	},
	{
		rank: 12330,
		frequency: 3.06,
		lemma: "必需"
	},
	{
		rank: 12331,
		frequency: 3.06,
		lemma: "ｋ"
	},
	{
		rank: 12332,
		frequency: 3.06,
		lemma: "エレベータ"
	},
	{
		rank: 12333,
		frequency: 3.06,
		lemma: "何一つ"
	},
	{
		rank: 12334,
		frequency: 3.06,
		lemma: "減額"
	},
	{
		rank: 12335,
		frequency: 3.06,
		lemma: "自前"
	},
	{
		rank: 12336,
		frequency: 3.06,
		lemma: "旭"
	},
	{
		rank: 12337,
		frequency: 3.06,
		lemma: "森山"
	},
	{
		rank: 12338,
		frequency: 3.05,
		lemma: "顎"
	},
	{
		rank: 12339,
		frequency: 3.05,
		lemma: "東日本"
	},
	{
		rank: 12340,
		frequency: 3.05,
		lemma: "放浪"
	},
	{
		rank: 12341,
		frequency: 3.05,
		lemma: "ババ"
	},
	{
		rank: 12342,
		frequency: 3.05,
		lemma: "御飯"
	},
	{
		rank: 12343,
		frequency: 3.05,
		lemma: "月日"
	},
	{
		rank: 12344,
		frequency: 3.05,
		lemma: "そうこう"
	},
	{
		rank: 12345,
		frequency: 3.05,
		lemma: "ちよ"
	},
	{
		rank: 12346,
		frequency: 3.05,
		lemma: "雑音"
	},
	{
		rank: 12347,
		frequency: 3.05,
		lemma: "スプレー"
	},
	{
		rank: 12348,
		frequency: 3.05,
		lemma: "分断"
	},
	{
		rank: 12349,
		frequency: 3.05,
		lemma: "恨み"
	},
	{
		rank: 12350,
		frequency: 3.05,
		lemma: "罪悪"
	},
	{
		rank: 12351,
		frequency: 3.05,
		lemma: "長引く"
	},
	{
		rank: 12352,
		frequency: 3.05,
		lemma: "腰痛"
	},
	{
		rank: 12353,
		frequency: 3.05,
		lemma: "凹む"
	},
	{
		rank: 12354,
		frequency: 3.05,
		lemma: "改憲"
	},
	{
		rank: 12355,
		frequency: 3.05,
		lemma: "ひらく"
	},
	{
		rank: 12356,
		frequency: 3.05,
		lemma: "申し立て"
	},
	{
		rank: 12357,
		frequency: 3.05,
		lemma: "学費"
	},
	{
		rank: 12358,
		frequency: 3.04,
		lemma: "開講"
	},
	{
		rank: 12359,
		frequency: 3.04,
		lemma: "仕込む"
	},
	{
		rank: 12360,
		frequency: 3.04,
		lemma: "打合せ"
	},
	{
		rank: 12361,
		frequency: 3.04,
		lemma: "つま"
	},
	{
		rank: 12362,
		frequency: 3.04,
		lemma: "パワフル"
	},
	{
		rank: 12363,
		frequency: 3.04,
		lemma: "アミ"
	},
	{
		rank: 12364,
		frequency: 3.04,
		lemma: "知らせる"
	},
	{
		rank: 12365,
		frequency: 3.04,
		lemma: "構文"
	},
	{
		rank: 12366,
		frequency: 3.04,
		lemma: "候"
	},
	{
		rank: 12367,
		frequency: 3.04,
		lemma: "下北沢"
	},
	{
		rank: 12368,
		frequency: 3.04,
		lemma: "読み書き"
	},
	{
		rank: 12369,
		frequency: 3.04,
		lemma: "じゅん"
	},
	{
		rank: 12370,
		frequency: 3.04,
		lemma: "文系"
	},
	{
		rank: 12371,
		frequency: 3.04,
		lemma: "震度"
	},
	{
		rank: 12372,
		frequency: 3.04,
		lemma: "せっせと"
	},
	{
		rank: 12373,
		frequency: 3.04,
		lemma: "環境庁"
	},
	{
		rank: 12374,
		frequency: 3.04,
		lemma: "グローブ"
	},
	{
		rank: 12375,
		frequency: 3.04,
		lemma: "導き出す"
	},
	{
		rank: 12376,
		frequency: 3.04,
		lemma: "ソーセージ"
	},
	{
		rank: 12377,
		frequency: 3.04,
		lemma: "女系"
	},
	{
		rank: 12378,
		frequency: 3.04,
		lemma: "起る"
	},
	{
		rank: 12379,
		frequency: 3.04,
		lemma: "直撃"
	},
	{
		rank: 12380,
		frequency: 3.03,
		lemma: "潤"
	},
	{
		rank: 12381,
		frequency: 3.03,
		lemma: "見積もる"
	},
	{
		rank: 12382,
		frequency: 3.03,
		lemma: "報う"
	},
	{
		rank: 12383,
		frequency: 3.03,
		lemma: "憲章"
	},
	{
		rank: 12384,
		frequency: 3.03,
		lemma: "そんなふうに"
	},
	{
		rank: 12385,
		frequency: 3.03,
		lemma: "少子"
	},
	{
		rank: 12386,
		frequency: 3.03,
		lemma: "おみやげ"
	},
	{
		rank: 12387,
		frequency: 3.03,
		lemma: "灸"
	},
	{
		rank: 12388,
		frequency: 3.03,
		lemma: "ガバ"
	},
	{
		rank: 12389,
		frequency: 3.03,
		lemma: "前原"
	},
	{
		rank: 12390,
		frequency: 3.03,
		lemma: "高野"
	},
	{
		rank: 12391,
		frequency: 3.03,
		lemma: "漁師"
	},
	{
		rank: 12392,
		frequency: 3.03,
		lemma: "窒素"
	},
	{
		rank: 12393,
		frequency: 3.03,
		lemma: "おっちゃん"
	},
	{
		rank: 12394,
		frequency: 3.03,
		lemma: "大々的"
	},
	{
		rank: 12395,
		frequency: 3.03,
		lemma: "東亜"
	},
	{
		rank: 12396,
		frequency: 3.03,
		lemma: "哀れ"
	},
	{
		rank: 12397,
		frequency: 3.03,
		lemma: "歯止め"
	},
	{
		rank: 12398,
		frequency: 3.03,
		lemma: "中高年"
	},
	{
		rank: 12399,
		frequency: 3.03,
		lemma: "セラピー"
	},
	{
		rank: 12400,
		frequency: 3.03,
		lemma: "ブタ"
	},
	{
		rank: 12401,
		frequency: 3.03,
		lemma: "戦記"
	},
	{
		rank: 12402,
		frequency: 3.03,
		lemma: "疑わしい"
	},
	{
		rank: 12403,
		frequency: 3.03,
		lemma: "スキーム"
	},
	{
		rank: 12404,
		frequency: 3.03,
		lemma: "やう"
	},
	{
		rank: 12405,
		frequency: 3.03,
		lemma: "堺"
	},
	{
		rank: 12406,
		frequency: 3.03,
		lemma: "歌劇"
	},
	{
		rank: 12407,
		frequency: 3.03,
		lemma: "充足"
	},
	{
		rank: 12408,
		frequency: 3.03,
		lemma: "中途"
	},
	{
		rank: 12409,
		frequency: 3.03,
		lemma: "しっとり"
	},
	{
		rank: 12410,
		frequency: 3.03,
		lemma: "歳月"
	},
	{
		rank: 12411,
		frequency: 3.03,
		lemma: "買い手"
	},
	{
		rank: 12412,
		frequency: 3.02,
		lemma: "ロッカー"
	},
	{
		rank: 12413,
		frequency: 3.02,
		lemma: "横須賀"
	},
	{
		rank: 12414,
		frequency: 3.02,
		lemma: "ＧＷ"
	},
	{
		rank: 12415,
		frequency: 3.02,
		lemma: "言い渡す"
	},
	{
		rank: 12416,
		frequency: 3.02,
		lemma: "ジョンソン"
	},
	{
		rank: 12417,
		frequency: 3.02,
		lemma: "話し方"
	},
	{
		rank: 12418,
		frequency: 3.02,
		lemma: "造成"
	},
	{
		rank: 12419,
		frequency: 3.02,
		lemma: "とおす"
	},
	{
		rank: 12420,
		frequency: 3.02,
		lemma: "顕"
	},
	{
		rank: 12421,
		frequency: 3.02,
		lemma: "横切る"
	},
	{
		rank: 12422,
		frequency: 3.02,
		lemma: "レンタカー"
	},
	{
		rank: 12423,
		frequency: 3.02,
		lemma: "細工"
	},
	{
		rank: 12424,
		frequency: 3.02,
		lemma: "姓"
	},
	{
		rank: 12425,
		frequency: 3.02,
		lemma: "取り替える"
	},
	{
		rank: 12426,
		frequency: 3.02,
		lemma: "緻密"
	},
	{
		rank: 12427,
		frequency: 3.02,
		lemma: "結"
	},
	{
		rank: 12428,
		frequency: 3.02,
		lemma: "本誌"
	},
	{
		rank: 12429,
		frequency: 3.02,
		lemma: "ブレア"
	},
	{
		rank: 12430,
		frequency: 3.01,
		lemma: "ダラダラ"
	},
	{
		rank: 12431,
		frequency: 3.01,
		lemma: "アクセル"
	},
	{
		rank: 12432,
		frequency: 3.01,
		lemma: "取消"
	},
	{
		rank: 12433,
		frequency: 3.01,
		lemma: "買物"
	},
	{
		rank: 12434,
		frequency: 3.01,
		lemma: "メカ"
	},
	{
		rank: 12435,
		frequency: 3.01,
		lemma: "大方"
	},
	{
		rank: 12436,
		frequency: 3.01,
		lemma: "技師"
	},
	{
		rank: 12437,
		frequency: 3.01,
		lemma: "昌"
	},
	{
		rank: 12438,
		frequency: 3.01,
		lemma: "常務"
	},
	{
		rank: 12439,
		frequency: 3.01,
		lemma: "声援"
	},
	{
		rank: 12440,
		frequency: 3.01,
		lemma: "圧勝"
	},
	{
		rank: 12441,
		frequency: 3.01,
		lemma: "一色"
	},
	{
		rank: 12442,
		frequency: 3.01,
		lemma: "噺"
	},
	{
		rank: 12443,
		frequency: 3.01,
		lemma: "鉱物"
	},
	{
		rank: 12444,
		frequency: 3.01,
		lemma: "噴出"
	},
	{
		rank: 12445,
		frequency: 3.01,
		lemma: "心中"
	},
	{
		rank: 12446,
		frequency: 3.01,
		lemma: "さわる"
	},
	{
		rank: 12447,
		frequency: 3.01,
		lemma: "刑罰"
	},
	{
		rank: 12448,
		frequency: 3.01,
		lemma: "実写"
	},
	{
		rank: 12449,
		frequency: 3.01,
		lemma: "卓球"
	},
	{
		rank: 12450,
		frequency: 3.01,
		lemma: "あき"
	},
	{
		rank: 12451,
		frequency: 3.01,
		lemma: "この上ない"
	},
	{
		rank: 12452,
		frequency: 3.01,
		lemma: "ジェン"
	},
	{
		rank: 12453,
		frequency: 3.01,
		lemma: "棄却"
	},
	{
		rank: 12454,
		frequency: 3.01,
		lemma: "しぬ"
	},
	{
		rank: 12455,
		frequency: 3,
		lemma: "キャロル"
	},
	{
		rank: 12456,
		frequency: 3,
		lemma: "産学"
	},
	{
		rank: 12457,
		frequency: 3,
		lemma: "ケネディ"
	},
	{
		rank: 12458,
		frequency: 3,
		lemma: "疑念"
	},
	{
		rank: 12459,
		frequency: 3,
		lemma: "プロダクト"
	},
	{
		rank: 12460,
		frequency: 3,
		lemma: "拳銃"
	},
	{
		rank: 12461,
		frequency: 3,
		lemma: "忠告"
	},
	{
		rank: 12462,
		frequency: 3,
		lemma: "兆候"
	},
	{
		rank: 12463,
		frequency: 3,
		lemma: "咲かせる"
	},
	{
		rank: 12464,
		frequency: 3,
		lemma: "流用"
	},
	{
		rank: 12465,
		frequency: 3,
		lemma: "運河"
	},
	{
		rank: 12466,
		frequency: 3,
		lemma: "敦"
	},
	{
		rank: 12467,
		frequency: 3,
		lemma: "鉛"
	},
	{
		rank: 12468,
		frequency: 3,
		lemma: "夕暮れ"
	},
	{
		rank: 12469,
		frequency: 3,
		lemma: "築地"
	},
	{
		rank: 12470,
		frequency: 3,
		lemma: "レントゲン"
	},
	{
		rank: 12471,
		frequency: 3,
		lemma: "夜空"
	},
	{
		rank: 12472,
		frequency: 3,
		lemma: "釣れる"
	},
	{
		rank: 12473,
		frequency: 3,
		lemma: "親会社"
	},
	{
		rank: 12474,
		frequency: 3,
		lemma: "小池"
	},
	{
		rank: 12475,
		frequency: 3,
		lemma: "北方"
	},
	{
		rank: 12476,
		frequency: 3,
		lemma: "繁華"
	},
	{
		rank: 12477,
		frequency: 3,
		lemma: "大宮"
	},
	{
		rank: 12478,
		frequency: 3,
		lemma: "各位"
	},
	{
		rank: 12479,
		frequency: 3,
		lemma: "転用"
	},
	{
		rank: 12480,
		frequency: 3,
		lemma: "返金"
	},
	{
		rank: 12481,
		frequency: 3,
		lemma: "書き手"
	},
	{
		rank: 12482,
		frequency: 3,
		lemma: "やりがい"
	},
	{
		rank: 12483,
		frequency: 3,
		lemma: "ピート"
	},
	{
		rank: 12484,
		frequency: 3,
		lemma: "失踪"
	},
	{
		rank: 12485,
		frequency: 3,
		lemma: "カーン"
	},
	{
		rank: 12486,
		frequency: 3,
		lemma: "模範"
	},
	{
		rank: 12487,
		frequency: 2.99,
		lemma: "口実"
	},
	{
		rank: 12488,
		frequency: 2.99,
		lemma: "怪物"
	},
	{
		rank: 12489,
		frequency: 2.99,
		lemma: "安打"
	},
	{
		rank: 12490,
		frequency: 2.99,
		lemma: "符号"
	},
	{
		rank: 12491,
		frequency: 2.99,
		lemma: "狂"
	},
	{
		rank: 12492,
		frequency: 2.99,
		lemma: "装"
	},
	{
		rank: 12493,
		frequency: 2.99,
		lemma: "買い換える"
	},
	{
		rank: 12494,
		frequency: 2.99,
		lemma: "カジュアル"
	},
	{
		rank: 12495,
		frequency: 2.99,
		lemma: "ＤＮＡ"
	},
	{
		rank: 12496,
		frequency: 2.99,
		lemma: "必読"
	},
	{
		rank: 12497,
		frequency: 2.99,
		lemma: "動的"
	},
	{
		rank: 12498,
		frequency: 2.99,
		lemma: "ケンブリッジ"
	},
	{
		rank: 12499,
		frequency: 2.99,
		lemma: "踏み入れる"
	},
	{
		rank: 12500,
		frequency: 2.99,
		lemma: "ゆでる"
	},
	{
		rank: 12501,
		frequency: 2.99,
		lemma: "橘"
	},
	{
		rank: 12502,
		frequency: 2.99,
		lemma: "ホイール"
	},
	{
		rank: 12503,
		frequency: 2.99,
		lemma: "海老"
	},
	{
		rank: 12504,
		frequency: 2.99,
		lemma: "虜"
	},
	{
		rank: 12505,
		frequency: 2.99,
		lemma: "浮き彫り"
	},
	{
		rank: 12506,
		frequency: 2.99,
		lemma: "国民党"
	},
	{
		rank: 12507,
		frequency: 2.99,
		lemma: "町民"
	},
	{
		rank: 12508,
		frequency: 2.99,
		lemma: "隣国"
	},
	{
		rank: 12509,
		frequency: 2.99,
		lemma: "織り込む"
	},
	{
		rank: 12510,
		frequency: 2.99,
		lemma: "絶大"
	},
	{
		rank: 12511,
		frequency: 2.98,
		lemma: "はつ"
	},
	{
		rank: 12512,
		frequency: 2.98,
		lemma: "しようが"
	},
	{
		rank: 12513,
		frequency: 2.98,
		lemma: "なんせ"
	},
	{
		rank: 12514,
		frequency: 2.98,
		lemma: "締切"
	},
	{
		rank: 12515,
		frequency: 2.98,
		lemma: "街並み"
	},
	{
		rank: 12516,
		frequency: 2.98,
		lemma: "ＧＫ"
	},
	{
		rank: 12517,
		frequency: 2.98,
		lemma: "ホセ"
	},
	{
		rank: 12518,
		frequency: 2.98,
		lemma: "極度"
	},
	{
		rank: 12519,
		frequency: 2.98,
		lemma: "濃縮"
	},
	{
		rank: 12520,
		frequency: 2.98,
		lemma: "生殖"
	},
	{
		rank: 12521,
		frequency: 2.98,
		lemma: "英和"
	},
	{
		rank: 12522,
		frequency: 2.98,
		lemma: "のべる"
	},
	{
		rank: 12523,
		frequency: 2.98,
		lemma: "ボウル"
	},
	{
		rank: 12524,
		frequency: 2.98,
		lemma: "嫁さん"
	},
	{
		rank: 12525,
		frequency: 2.98,
		lemma: "ってか"
	},
	{
		rank: 12526,
		frequency: 2.98,
		lemma: "くれぐれも"
	},
	{
		rank: 12527,
		frequency: 2.98,
		lemma: "ナンセンス"
	},
	{
		rank: 12528,
		frequency: 2.98,
		lemma: "並列"
	},
	{
		rank: 12529,
		frequency: 2.98,
		lemma: "荒廃"
	},
	{
		rank: 12530,
		frequency: 2.98,
		lemma: "予習"
	},
	{
		rank: 12531,
		frequency: 2.98,
		lemma: "マキ"
	},
	{
		rank: 12532,
		frequency: 2.98,
		lemma: "入植"
	},
	{
		rank: 12533,
		frequency: 2.98,
		lemma: "取り囲む"
	},
	{
		rank: 12534,
		frequency: 2.98,
		lemma: "地検"
	},
	{
		rank: 12535,
		frequency: 2.98,
		lemma: "重症"
	},
	{
		rank: 12536,
		frequency: 2.98,
		lemma: "添削"
	},
	{
		rank: 12537,
		frequency: 2.98,
		lemma: "従属"
	},
	{
		rank: 12538,
		frequency: 2.98,
		lemma: "りっぱ"
	},
	{
		rank: 12539,
		frequency: 2.97,
		lemma: "吉祥寺"
	},
	{
		rank: 12540,
		frequency: 2.97,
		lemma: "英単語"
	},
	{
		rank: 12541,
		frequency: 2.97,
		lemma: "天ぷら"
	},
	{
		rank: 12542,
		frequency: 2.97,
		lemma: "ブライアン"
	},
	{
		rank: 12543,
		frequency: 2.97,
		lemma: "地中海"
	},
	{
		rank: 12544,
		frequency: 2.97,
		lemma: "仕る"
	},
	{
		rank: 12545,
		frequency: 2.97,
		lemma: "器用"
	},
	{
		rank: 12546,
		frequency: 2.97,
		lemma: "倍率"
	},
	{
		rank: 12547,
		frequency: 2.97,
		lemma: "寝不足"
	},
	{
		rank: 12548,
		frequency: 2.97,
		lemma: "出くわす"
	},
	{
		rank: 12549,
		frequency: 2.97,
		lemma: "賞品"
	},
	{
		rank: 12550,
		frequency: 2.97,
		lemma: "商取引"
	},
	{
		rank: 12551,
		frequency: 2.97,
		lemma: "先駆"
	},
	{
		rank: 12552,
		frequency: 2.97,
		lemma: "入れ替わる"
	},
	{
		rank: 12553,
		frequency: 2.97,
		lemma: "台本"
	},
	{
		rank: 12554,
		frequency: 2.97,
		lemma: "ひとりひとり"
	},
	{
		rank: 12555,
		frequency: 2.97,
		lemma: "はがき"
	},
	{
		rank: 12556,
		frequency: 2.97,
		lemma: "対峙"
	},
	{
		rank: 12557,
		frequency: 2.97,
		lemma: "ノベル"
	},
	{
		rank: 12558,
		frequency: 2.97,
		lemma: "増資"
	},
	{
		rank: 12559,
		frequency: 2.97,
		lemma: "チョット"
	},
	{
		rank: 12560,
		frequency: 2.97,
		lemma: "果"
	},
	{
		rank: 12561,
		frequency: 2.96,
		lemma: "ゴロ"
	},
	{
		rank: 12562,
		frequency: 2.96,
		lemma: "信州"
	},
	{
		rank: 12563,
		frequency: 2.96,
		lemma: "比喩"
	},
	{
		rank: 12564,
		frequency: 2.96,
		lemma: "みち"
	},
	{
		rank: 12565,
		frequency: 2.96,
		lemma: "風力"
	},
	{
		rank: 12566,
		frequency: 2.96,
		lemma: "ホームラン"
	},
	{
		rank: 12567,
		frequency: 2.96,
		lemma: "仮称"
	},
	{
		rank: 12568,
		frequency: 2.96,
		lemma: "舞踏"
	},
	{
		rank: 12569,
		frequency: 2.96,
		lemma: "ゲン"
	},
	{
		rank: 12570,
		frequency: 2.96,
		lemma: "開戦"
	},
	{
		rank: 12571,
		frequency: 2.96,
		lemma: "元旦"
	},
	{
		rank: 12572,
		frequency: 2.96,
		lemma: "傘下"
	},
	{
		rank: 12573,
		frequency: 2.96,
		lemma: "木曜"
	},
	{
		rank: 12574,
		frequency: 2.96,
		lemma: "太平洋戦争"
	},
	{
		rank: 12575,
		frequency: 2.96,
		lemma: "山間"
	},
	{
		rank: 12576,
		frequency: 2.96,
		lemma: "砂浜"
	},
	{
		rank: 12577,
		frequency: 2.96,
		lemma: "古本"
	},
	{
		rank: 12578,
		frequency: 2.96,
		lemma: "サングラス"
	},
	{
		rank: 12579,
		frequency: 2.96,
		lemma: "都立"
	},
	{
		rank: 12580,
		frequency: 2.96,
		lemma: "からかう"
	},
	{
		rank: 12581,
		frequency: 2.96,
		lemma: "コック"
	},
	{
		rank: 12582,
		frequency: 2.96,
		lemma: "スズキ"
	},
	{
		rank: 12583,
		frequency: 2.96,
		lemma: "眠気"
	},
	{
		rank: 12584,
		frequency: 2.96,
		lemma: "心強い"
	},
	{
		rank: 12585,
		frequency: 2.96,
		lemma: "おや"
	},
	{
		rank: 12586,
		frequency: 2.96,
		lemma: "払拭"
	},
	{
		rank: 12587,
		frequency: 2.96,
		lemma: "ｖ"
	},
	{
		rank: 12588,
		frequency: 2.96,
		lemma: "希"
	},
	{
		rank: 12589,
		frequency: 2.95,
		lemma: "多重"
	},
	{
		rank: 12590,
		frequency: 2.95,
		lemma: "コーディネート"
	},
	{
		rank: 12591,
		frequency: 2.95,
		lemma: "用具"
	},
	{
		rank: 12592,
		frequency: 2.95,
		lemma: "ＩＣ"
	},
	{
		rank: 12593,
		frequency: 2.95,
		lemma: "痴呆"
	},
	{
		rank: 12594,
		frequency: 2.95,
		lemma: "農政"
	},
	{
		rank: 12595,
		frequency: 2.95,
		lemma: "病人"
	},
	{
		rank: 12596,
		frequency: 2.95,
		lemma: "舗装"
	},
	{
		rank: 12597,
		frequency: 2.95,
		lemma: "山村"
	},
	{
		rank: 12598,
		frequency: 2.95,
		lemma: "執拗"
	},
	{
		rank: 12599,
		frequency: 2.95,
		lemma: "全長"
	},
	{
		rank: 12600,
		frequency: 2.95,
		lemma: "誹謗"
	},
	{
		rank: 12601,
		frequency: 2.95,
		lemma: "総じて"
	},
	{
		rank: 12602,
		frequency: 2.95,
		lemma: "沼"
	},
	{
		rank: 12603,
		frequency: 2.95,
		lemma: "自在"
	},
	{
		rank: 12604,
		frequency: 2.95,
		lemma: "チャネル"
	},
	{
		rank: 12605,
		frequency: 2.95,
		lemma: "文面"
	},
	{
		rank: 12606,
		frequency: 2.95,
		lemma: "久保田"
	},
	{
		rank: 12607,
		frequency: 2.95,
		lemma: "アダム"
	},
	{
		rank: 12608,
		frequency: 2.95,
		lemma: "フィート"
	},
	{
		rank: 12609,
		frequency: 2.95,
		lemma: "あわせて"
	},
	{
		rank: 12610,
		frequency: 2.95,
		lemma: "感受性"
	},
	{
		rank: 12611,
		frequency: 2.95,
		lemma: "フェーズ"
	},
	{
		rank: 12612,
		frequency: 2.95,
		lemma: "人情"
	},
	{
		rank: 12613,
		frequency: 2.94,
		lemma: "第一人者"
	},
	{
		rank: 12614,
		frequency: 2.94,
		lemma: "宿る"
	},
	{
		rank: 12615,
		frequency: 2.94,
		lemma: "婆"
	},
	{
		rank: 12616,
		frequency: 2.94,
		lemma: "初夏"
	},
	{
		rank: 12617,
		frequency: 2.94,
		lemma: "分量"
	},
	{
		rank: 12618,
		frequency: 2.94,
		lemma: "根付く"
	},
	{
		rank: 12619,
		frequency: 2.94,
		lemma: "塩素"
	},
	{
		rank: 12620,
		frequency: 2.94,
		lemma: "南極"
	},
	{
		rank: 12621,
		frequency: 2.94,
		lemma: "兄貴"
	},
	{
		rank: 12622,
		frequency: 2.94,
		lemma: "天文"
	},
	{
		rank: 12623,
		frequency: 2.94,
		lemma: "ドリブル"
	},
	{
		rank: 12624,
		frequency: 2.94,
		lemma: "ゆり"
	},
	{
		rank: 12625,
		frequency: 2.94,
		lemma: "気持ち良い"
	},
	{
		rank: 12626,
		frequency: 2.94,
		lemma: "最多"
	},
	{
		rank: 12627,
		frequency: 2.94,
		lemma: "愉しい"
	},
	{
		rank: 12628,
		frequency: 2.94,
		lemma: "既婚"
	},
	{
		rank: 12629,
		frequency: 2.94,
		lemma: "ポルノ"
	},
	{
		rank: 12630,
		frequency: 2.94,
		lemma: "税務署"
	},
	{
		rank: 12631,
		frequency: 2.94,
		lemma: "ひそか"
	},
	{
		rank: 12632,
		frequency: 2.94,
		lemma: "振り込む"
	},
	{
		rank: 12633,
		frequency: 2.94,
		lemma: "運航"
	},
	{
		rank: 12634,
		frequency: 2.94,
		lemma: "澄む"
	},
	{
		rank: 12635,
		frequency: 2.94,
		lemma: "実る"
	},
	{
		rank: 12636,
		frequency: 2.94,
		lemma: "想い出"
	},
	{
		rank: 12637,
		frequency: 2.94,
		lemma: "インプット"
	},
	{
		rank: 12638,
		frequency: 2.94,
		lemma: "広東"
	},
	{
		rank: 12639,
		frequency: 2.94,
		lemma: "上述"
	},
	{
		rank: 12640,
		frequency: 2.94,
		lemma: "小僧"
	},
	{
		rank: 12641,
		frequency: 2.94,
		lemma: "通りすがり"
	},
	{
		rank: 12642,
		frequency: 2.94,
		lemma: "造船"
	},
	{
		rank: 12643,
		frequency: 2.94,
		lemma: "なんら"
	},
	{
		rank: 12644,
		frequency: 2.94,
		lemma: "回生"
	},
	{
		rank: 12645,
		frequency: 2.94,
		lemma: "伝導"
	},
	{
		rank: 12646,
		frequency: 2.94,
		lemma: "憎悪"
	},
	{
		rank: 12647,
		frequency: 2.94,
		lemma: "遊園"
	},
	{
		rank: 12648,
		frequency: 2.94,
		lemma: "取り残す"
	},
	{
		rank: 12649,
		frequency: 2.94,
		lemma: "いす"
	},
	{
		rank: 12650,
		frequency: 2.93,
		lemma: "賑やか"
	},
	{
		rank: 12651,
		frequency: 2.93,
		lemma: "休養"
	},
	{
		rank: 12652,
		frequency: 2.93,
		lemma: "しのぐ"
	},
	{
		rank: 12653,
		frequency: 2.93,
		lemma: "魅"
	},
	{
		rank: 12654,
		frequency: 2.93,
		lemma: "無垢"
	},
	{
		rank: 12655,
		frequency: 2.93,
		lemma: "消失"
	},
	{
		rank: 12656,
		frequency: 2.93,
		lemma: "捕虜"
	},
	{
		rank: 12657,
		frequency: 2.93,
		lemma: "言い回し"
	},
	{
		rank: 12658,
		frequency: 2.93,
		lemma: "滅ぼす"
	},
	{
		rank: 12659,
		frequency: 2.93,
		lemma: "故人"
	},
	{
		rank: 12660,
		frequency: 2.93,
		lemma: "すませる"
	},
	{
		rank: 12661,
		frequency: 2.93,
		lemma: "マルクス主義"
	},
	{
		rank: 12662,
		frequency: 2.93,
		lemma: "小鳥"
	},
	{
		rank: 12663,
		frequency: 2.93,
		lemma: "出頭"
	},
	{
		rank: 12664,
		frequency: 2.93,
		lemma: "チャイルド"
	},
	{
		rank: 12665,
		frequency: 2.93,
		lemma: "ラスベガス"
	},
	{
		rank: 12666,
		frequency: 2.93,
		lemma: "くに"
	},
	{
		rank: 12667,
		frequency: 2.93,
		lemma: "開き直る"
	},
	{
		rank: 12668,
		frequency: 2.93,
		lemma: "バーガー"
	},
	{
		rank: 12669,
		frequency: 2.93,
		lemma: "備蓄"
	},
	{
		rank: 12670,
		frequency: 2.93,
		lemma: "正午"
	},
	{
		rank: 12671,
		frequency: 2.93,
		lemma: "紛失"
	},
	{
		rank: 12672,
		frequency: 2.93,
		lemma: "無題"
	},
	{
		rank: 12673,
		frequency: 2.93,
		lemma: "免責"
	},
	{
		rank: 12674,
		frequency: 2.93,
		lemma: "満月"
	},
	{
		rank: 12675,
		frequency: 2.93,
		lemma: "シベリア"
	},
	{
		rank: 12676,
		frequency: 2.92,
		lemma: "種族"
	},
	{
		rank: 12677,
		frequency: 2.92,
		lemma: "フック"
	},
	{
		rank: 12678,
		frequency: 2.92,
		lemma: "利上げ"
	},
	{
		rank: 12679,
		frequency: 2.92,
		lemma: "伐採"
	},
	{
		rank: 12680,
		frequency: 2.92,
		lemma: "閉会"
	},
	{
		rank: 12681,
		frequency: 2.92,
		lemma: "割り当て"
	},
	{
		rank: 12682,
		frequency: 2.92,
		lemma: "宮内"
	},
	{
		rank: 12683,
		frequency: 2.92,
		lemma: "伴"
	},
	{
		rank: 12684,
		frequency: 2.92,
		lemma: "海峡"
	},
	{
		rank: 12685,
		frequency: 2.92,
		lemma: "洋子"
	},
	{
		rank: 12686,
		frequency: 2.92,
		lemma: "急性"
	},
	{
		rank: 12687,
		frequency: 2.92,
		lemma: "つけ"
	},
	{
		rank: 12688,
		frequency: 2.92,
		lemma: "検閲"
	},
	{
		rank: 12689,
		frequency: 2.92,
		lemma: "前置き"
	},
	{
		rank: 12690,
		frequency: 2.92,
		lemma: "ひろ"
	},
	{
		rank: 12691,
		frequency: 2.92,
		lemma: "重点的"
	},
	{
		rank: 12692,
		frequency: 2.92,
		lemma: "小冊子"
	},
	{
		rank: 12693,
		frequency: 2.92,
		lemma: "雑草"
	},
	{
		rank: 12694,
		frequency: 2.92,
		lemma: "東側"
	},
	{
		rank: 12695,
		frequency: 2.92,
		lemma: "新婚"
	},
	{
		rank: 12696,
		frequency: 2.91,
		lemma: "調書"
	},
	{
		rank: 12697,
		frequency: 2.91,
		lemma: "麓"
	},
	{
		rank: 12698,
		frequency: 2.91,
		lemma: "区切り"
	},
	{
		rank: 12699,
		frequency: 2.91,
		lemma: "鉄骨"
	},
	{
		rank: 12700,
		frequency: 2.91,
		lemma: "凝縮"
	},
	{
		rank: 12701,
		frequency: 2.91,
		lemma: "ヘルス"
	},
	{
		rank: 12702,
		frequency: 2.91,
		lemma: "尊"
	},
	{
		rank: 12703,
		frequency: 2.91,
		lemma: "主題歌"
	},
	{
		rank: 12704,
		frequency: 2.91,
		lemma: "坂口"
	},
	{
		rank: 12705,
		frequency: 2.91,
		lemma: "おさめる"
	},
	{
		rank: 12706,
		frequency: 2.91,
		lemma: "質的"
	},
	{
		rank: 12707,
		frequency: 2.91,
		lemma: "アトリエ"
	},
	{
		rank: 12708,
		frequency: 2.91,
		lemma: "至福"
	},
	{
		rank: 12709,
		frequency: 2.91,
		lemma: "商談"
	},
	{
		rank: 12710,
		frequency: 2.91,
		lemma: "毅"
	},
	{
		rank: 12711,
		frequency: 2.91,
		lemma: "マフラー"
	},
	{
		rank: 12712,
		frequency: 2.91,
		lemma: "岩田"
	},
	{
		rank: 12713,
		frequency: 2.91,
		lemma: "たくましい"
	},
	{
		rank: 12714,
		frequency: 2.9,
		lemma: "たこ"
	},
	{
		rank: 12715,
		frequency: 2.9,
		lemma: "顔色"
	},
	{
		rank: 12716,
		frequency: 2.9,
		lemma: "電球"
	},
	{
		rank: 12717,
		frequency: 2.9,
		lemma: "近鉄"
	},
	{
		rank: 12718,
		frequency: 2.9,
		lemma: "銭湯"
	},
	{
		rank: 12719,
		frequency: 2.9,
		lemma: "激怒"
	},
	{
		rank: 12720,
		frequency: 2.9,
		lemma: "知らず"
	},
	{
		rank: 12721,
		frequency: 2.9,
		lemma: "タフ"
	},
	{
		rank: 12722,
		frequency: 2.9,
		lemma: "足立"
	},
	{
		rank: 12723,
		frequency: 2.9,
		lemma: "経済学部"
	},
	{
		rank: 12724,
		frequency: 2.9,
		lemma: "おおい"
	},
	{
		rank: 12725,
		frequency: 2.9,
		lemma: "不条理"
	},
	{
		rank: 12726,
		frequency: 2.9,
		lemma: "ジャンク"
	},
	{
		rank: 12727,
		frequency: 2.9,
		lemma: "珈琲"
	},
	{
		rank: 12728,
		frequency: 2.9,
		lemma: "渓"
	},
	{
		rank: 12729,
		frequency: 2.9,
		lemma: "猟"
	},
	{
		rank: 12730,
		frequency: 2.9,
		lemma: "上半身"
	},
	{
		rank: 12731,
		frequency: 2.9,
		lemma: "健闘"
	},
	{
		rank: 12732,
		frequency: 2.9,
		lemma: "趙"
	},
	{
		rank: 12733,
		frequency: 2.9,
		lemma: "病室"
	},
	{
		rank: 12734,
		frequency: 2.9,
		lemma: "経済企画庁"
	},
	{
		rank: 12735,
		frequency: 2.9,
		lemma: "平壌"
	},
	{
		rank: 12736,
		frequency: 2.9,
		lemma: "発砲"
	},
	{
		rank: 12737,
		frequency: 2.9,
		lemma: "昔ながら"
	},
	{
		rank: 12738,
		frequency: 2.9,
		lemma: "おとな"
	},
	{
		rank: 12739,
		frequency: 2.9,
		lemma: "カウントダウン"
	},
	{
		rank: 12740,
		frequency: 2.89,
		lemma: "在学"
	},
	{
		rank: 12741,
		frequency: 2.89,
		lemma: "今時"
	},
	{
		rank: 12742,
		frequency: 2.89,
		lemma: "キリスト教徒"
	},
	{
		rank: 12743,
		frequency: 2.89,
		lemma: "昼飯"
	},
	{
		rank: 12744,
		frequency: 2.89,
		lemma: "醸造"
	},
	{
		rank: 12745,
		frequency: 2.89,
		lemma: "コントローラ"
	},
	{
		rank: 12746,
		frequency: 2.89,
		lemma: "クッション"
	},
	{
		rank: 12747,
		frequency: 2.89,
		lemma: "新株"
	},
	{
		rank: 12748,
		frequency: 2.89,
		lemma: "チャーター"
	},
	{
		rank: 12749,
		frequency: 2.89,
		lemma: "氾濫"
	},
	{
		rank: 12750,
		frequency: 2.89,
		lemma: "好き嫌い"
	},
	{
		rank: 12751,
		frequency: 2.89,
		lemma: "バグダッド"
	},
	{
		rank: 12752,
		frequency: 2.89,
		lemma: "洲"
	},
	{
		rank: 12753,
		frequency: 2.89,
		lemma: "戦艦"
	},
	{
		rank: 12754,
		frequency: 2.89,
		lemma: "醍醐味"
	},
	{
		rank: 12755,
		frequency: 2.89,
		lemma: "蟹"
	},
	{
		rank: 12756,
		frequency: 2.89,
		lemma: "本紙"
	},
	{
		rank: 12757,
		frequency: 2.89,
		lemma: "奇"
	},
	{
		rank: 12758,
		frequency: 2.89,
		lemma: "宣"
	},
	{
		rank: 12759,
		frequency: 2.89,
		lemma: "制す"
	},
	{
		rank: 12760,
		frequency: 2.89,
		lemma: "エリック"
	},
	{
		rank: 12761,
		frequency: 2.89,
		lemma: "リクルート"
	},
	{
		rank: 12762,
		frequency: 2.89,
		lemma: "椿"
	},
	{
		rank: 12763,
		frequency: 2.89,
		lemma: "整形"
	},
	{
		rank: 12764,
		frequency: 2.89,
		lemma: "まかなう"
	},
	{
		rank: 12765,
		frequency: 2.88,
		lemma: "にたいする"
	},
	{
		rank: 12766,
		frequency: 2.88,
		lemma: "詩集"
	},
	{
		rank: 12767,
		frequency: 2.88,
		lemma: "着工"
	},
	{
		rank: 12768,
		frequency: 2.88,
		lemma: "乱用"
	},
	{
		rank: 12769,
		frequency: 2.88,
		lemma: "供養"
	},
	{
		rank: 12770,
		frequency: 2.88,
		lemma: "ＯＬ"
	},
	{
		rank: 12771,
		frequency: 2.88,
		lemma: "セーター"
	},
	{
		rank: 12772,
		frequency: 2.88,
		lemma: "雛"
	},
	{
		rank: 12773,
		frequency: 2.88,
		lemma: "大山"
	},
	{
		rank: 12774,
		frequency: 2.88,
		lemma: "赤十字"
	},
	{
		rank: 12775,
		frequency: 2.88,
		lemma: "減速"
	},
	{
		rank: 12776,
		frequency: 2.88,
		lemma: "心底"
	},
	{
		rank: 12777,
		frequency: 2.88,
		lemma: "のびる"
	},
	{
		rank: 12778,
		frequency: 2.88,
		lemma: "ダンボール"
	},
	{
		rank: 12779,
		frequency: 2.88,
		lemma: "動力"
	},
	{
		rank: 12780,
		frequency: 2.88,
		lemma: "申しわけ"
	},
	{
		rank: 12781,
		frequency: 2.88,
		lemma: "恩"
	},
	{
		rank: 12782,
		frequency: 2.87,
		lemma: "武蔵"
	},
	{
		rank: 12783,
		frequency: 2.87,
		lemma: "がかり"
	},
	{
		rank: 12784,
		frequency: 2.87,
		lemma: "見張る"
	},
	{
		rank: 12785,
		frequency: 2.87,
		lemma: "真っ直ぐ"
	},
	{
		rank: 12786,
		frequency: 2.87,
		lemma: "グアム"
	},
	{
		rank: 12787,
		frequency: 2.87,
		lemma: "漕ぐ"
	},
	{
		rank: 12788,
		frequency: 2.87,
		lemma: "エアー"
	},
	{
		rank: 12789,
		frequency: 2.87,
		lemma: "ほのぼの"
	},
	{
		rank: 12790,
		frequency: 2.87,
		lemma: "スーパーマーケット"
	},
	{
		rank: 12791,
		frequency: 2.87,
		lemma: "喜劇"
	},
	{
		rank: 12792,
		frequency: 2.87,
		lemma: "辞退"
	},
	{
		rank: 12793,
		frequency: 2.87,
		lemma: "お参り"
	},
	{
		rank: 12794,
		frequency: 2.87,
		lemma: "マメ"
	},
	{
		rank: 12795,
		frequency: 2.87,
		lemma: "テック"
	},
	{
		rank: 12796,
		frequency: 2.87,
		lemma: "蒸し暑い"
	},
	{
		rank: 12797,
		frequency: 2.87,
		lemma: "身元"
	},
	{
		rank: 12798,
		frequency: 2.87,
		lemma: "本数"
	},
	{
		rank: 12799,
		frequency: 2.87,
		lemma: "皇族"
	},
	{
		rank: 12800,
		frequency: 2.87,
		lemma: "強風"
	},
	{
		rank: 12801,
		frequency: 2.87,
		lemma: "設問"
	},
	{
		rank: 12802,
		frequency: 2.87,
		lemma: "未明"
	},
	{
		rank: 12803,
		frequency: 2.87,
		lemma: "書き上げる"
	},
	{
		rank: 12804,
		frequency: 2.87,
		lemma: "白鳥"
	},
	{
		rank: 12805,
		frequency: 2.87,
		lemma: "上り"
	},
	{
		rank: 12806,
		frequency: 2.87,
		lemma: "素子"
	},
	{
		rank: 12807,
		frequency: 2.87,
		lemma: "断絶"
	},
	{
		rank: 12808,
		frequency: 2.87,
		lemma: "常々"
	},
	{
		rank: 12809,
		frequency: 2.87,
		lemma: "シルク"
	},
	{
		rank: 12810,
		frequency: 2.87,
		lemma: "存分"
	},
	{
		rank: 12811,
		frequency: 2.87,
		lemma: "硬化"
	},
	{
		rank: 12812,
		frequency: 2.87,
		lemma: "吊る"
	},
	{
		rank: 12813,
		frequency: 2.87,
		lemma: "レディ"
	},
	{
		rank: 12814,
		frequency: 2.87,
		lemma: "増員"
	},
	{
		rank: 12815,
		frequency: 2.86,
		lemma: "帳簿"
	},
	{
		rank: 12816,
		frequency: 2.86,
		lemma: "堅持"
	},
	{
		rank: 12817,
		frequency: 2.86,
		lemma: "防げる"
	},
	{
		rank: 12818,
		frequency: 2.86,
		lemma: "金色"
	},
	{
		rank: 12819,
		frequency: 2.86,
		lemma: "叔母"
	},
	{
		rank: 12820,
		frequency: 2.86,
		lemma: "自治省"
	},
	{
		rank: 12821,
		frequency: 2.86,
		lemma: "法務大臣"
	},
	{
		rank: 12822,
		frequency: 2.86,
		lemma: "よぶ"
	},
	{
		rank: 12823,
		frequency: 2.86,
		lemma: "温室"
	},
	{
		rank: 12824,
		frequency: 2.86,
		lemma: "逐次"
	},
	{
		rank: 12825,
		frequency: 2.86,
		lemma: "モチ"
	},
	{
		rank: 12826,
		frequency: 2.86,
		lemma: "倉"
	},
	{
		rank: 12827,
		frequency: 2.86,
		lemma: "酒造"
	},
	{
		rank: 12828,
		frequency: 2.86,
		lemma: "紀元前"
	},
	{
		rank: 12829,
		frequency: 2.86,
		lemma: "誘い"
	},
	{
		rank: 12830,
		frequency: 2.86,
		lemma: "イレブン"
	},
	{
		rank: 12831,
		frequency: 2.86,
		lemma: "ｓ"
	},
	{
		rank: 12832,
		frequency: 2.86,
		lemma: "あや"
	},
	{
		rank: 12833,
		frequency: 2.86,
		lemma: "緊密"
	},
	{
		rank: 12834,
		frequency: 2.86,
		lemma: "見回す"
	},
	{
		rank: 12835,
		frequency: 2.86,
		lemma: "クロック"
	},
	{
		rank: 12836,
		frequency: 2.86,
		lemma: "カセット"
	},
	{
		rank: 12837,
		frequency: 2.86,
		lemma: "起す"
	},
	{
		rank: 12838,
		frequency: 2.86,
		lemma: "アルク"
	},
	{
		rank: 12839,
		frequency: 2.86,
		lemma: "よぎる"
	},
	{
		rank: 12840,
		frequency: 2.86,
		lemma: "盛大"
	},
	{
		rank: 12841,
		frequency: 2.86,
		lemma: "締め"
	},
	{
		rank: 12842,
		frequency: 2.86,
		lemma: "鶏肉"
	},
	{
		rank: 12843,
		frequency: 2.86,
		lemma: "サンパウロ"
	},
	{
		rank: 12844,
		frequency: 2.86,
		lemma: "ビリー"
	},
	{
		rank: 12845,
		frequency: 2.86,
		lemma: "思いやる"
	},
	{
		rank: 12846,
		frequency: 2.86,
		lemma: "平山"
	},
	{
		rank: 12847,
		frequency: 2.86,
		lemma: "手掛ける"
	},
	{
		rank: 12848,
		frequency: 2.86,
		lemma: "推し進める"
	},
	{
		rank: 12849,
		frequency: 2.86,
		lemma: "見つけ出す"
	},
	{
		rank: 12850,
		frequency: 2.86,
		lemma: "ひねる"
	},
	{
		rank: 12851,
		frequency: 2.86,
		lemma: "はおる"
	},
	{
		rank: 12852,
		frequency: 2.86,
		lemma: "会計検査院"
	},
	{
		rank: 12853,
		frequency: 2.86,
		lemma: "同点"
	},
	{
		rank: 12854,
		frequency: 2.85,
		lemma: "懲りる"
	},
	{
		rank: 12855,
		frequency: 2.85,
		lemma: "ヘッジファンド"
	},
	{
		rank: 12856,
		frequency: 2.85,
		lemma: "王家"
	},
	{
		rank: 12857,
		frequency: 2.85,
		lemma: "カメ"
	},
	{
		rank: 12858,
		frequency: 2.85,
		lemma: "賑わう"
	},
	{
		rank: 12859,
		frequency: 2.85,
		lemma: "イザ"
	},
	{
		rank: 12860,
		frequency: 2.85,
		lemma: "推察"
	},
	{
		rank: 12861,
		frequency: 2.85,
		lemma: "好物"
	},
	{
		rank: 12862,
		frequency: 2.85,
		lemma: "まんが"
	},
	{
		rank: 12863,
		frequency: 2.85,
		lemma: "一級"
	},
	{
		rank: 12864,
		frequency: 2.85,
		lemma: "試食"
	},
	{
		rank: 12865,
		frequency: 2.85,
		lemma: "古今"
	},
	{
		rank: 12866,
		frequency: 2.85,
		lemma: "山内"
	},
	{
		rank: 12867,
		frequency: 2.85,
		lemma: "アンナ"
	},
	{
		rank: 12868,
		frequency: 2.85,
		lemma: "学芸"
	},
	{
		rank: 12869,
		frequency: 2.85,
		lemma: "ずらす"
	},
	{
		rank: 12870,
		frequency: 2.85,
		lemma: "とかす"
	},
	{
		rank: 12871,
		frequency: 2.85,
		lemma: "痕跡"
	},
	{
		rank: 12872,
		frequency: 2.85,
		lemma: "新入生"
	},
	{
		rank: 12873,
		frequency: 2.85,
		lemma: "めど"
	},
	{
		rank: 12874,
		frequency: 2.85,
		lemma: "ヘルパー"
	},
	{
		rank: 12875,
		frequency: 2.85,
		lemma: "粗"
	},
	{
		rank: 12876,
		frequency: 2.85,
		lemma: "ダイニング"
	},
	{
		rank: 12877,
		frequency: 2.85,
		lemma: "おそらくは"
	},
	{
		rank: 12878,
		frequency: 2.85,
		lemma: "椎名"
	},
	{
		rank: 12879,
		frequency: 2.85,
		lemma: "譜"
	},
	{
		rank: 12880,
		frequency: 2.85,
		lemma: "巨匠"
	},
	{
		rank: 12881,
		frequency: 2.85,
		lemma: "一変"
	},
	{
		rank: 12882,
		frequency: 2.85,
		lemma: "派兵"
	},
	{
		rank: 12883,
		frequency: 2.85,
		lemma: "特撮"
	},
	{
		rank: 12884,
		frequency: 2.85,
		lemma: "有数"
	},
	{
		rank: 12885,
		frequency: 2.85,
		lemma: "社団"
	},
	{
		rank: 12886,
		frequency: 2.85,
		lemma: "ライブラリー"
	},
	{
		rank: 12887,
		frequency: 2.85,
		lemma: "金魚"
	},
	{
		rank: 12888,
		frequency: 2.85,
		lemma: "付随"
	},
	{
		rank: 12889,
		frequency: 2.85,
		lemma: "ぜん"
	},
	{
		rank: 12890,
		frequency: 2.85,
		lemma: "生育"
	},
	{
		rank: 12891,
		frequency: 2.84,
		lemma: "余韻"
	},
	{
		rank: 12892,
		frequency: 2.84,
		lemma: "腎臓"
	},
	{
		rank: 12893,
		frequency: 2.84,
		lemma: "村田"
	},
	{
		rank: 12894,
		frequency: 2.84,
		lemma: "放り込む"
	},
	{
		rank: 12895,
		frequency: 2.84,
		lemma: "７つ"
	},
	{
		rank: 12896,
		frequency: 2.84,
		lemma: "守護"
	},
	{
		rank: 12897,
		frequency: 2.84,
		lemma: "再三"
	},
	{
		rank: 12898,
		frequency: 2.84,
		lemma: "チャージ"
	},
	{
		rank: 12899,
		frequency: 2.84,
		lemma: "急行"
	},
	{
		rank: 12900,
		frequency: 2.84,
		lemma: "軽蔑"
	},
	{
		rank: 12901,
		frequency: 2.84,
		lemma: "リベラル"
	},
	{
		rank: 12902,
		frequency: 2.84,
		lemma: "将校"
	},
	{
		rank: 12903,
		frequency: 2.84,
		lemma: "読み解く"
	},
	{
		rank: 12904,
		frequency: 2.84,
		lemma: "富裕"
	},
	{
		rank: 12905,
		frequency: 2.84,
		lemma: "跡地"
	},
	{
		rank: 12906,
		frequency: 2.84,
		lemma: "Ｗｅｂ"
	},
	{
		rank: 12907,
		frequency: 2.84,
		lemma: "先着"
	},
	{
		rank: 12908,
		frequency: 2.84,
		lemma: "れい"
	},
	{
		rank: 12909,
		frequency: 2.84,
		lemma: "親密"
	},
	{
		rank: 12910,
		frequency: 2.84,
		lemma: "初歩"
	},
	{
		rank: 12911,
		frequency: 2.84,
		lemma: "エレクトロニクス"
	},
	{
		rank: 12912,
		frequency: 2.84,
		lemma: "忠誠"
	},
	{
		rank: 12913,
		frequency: 2.84,
		lemma: "たれ"
	},
	{
		rank: 12914,
		frequency: 2.84,
		lemma: "貴い"
	},
	{
		rank: 12915,
		frequency: 2.83,
		lemma: "粘土"
	},
	{
		rank: 12916,
		frequency: 2.83,
		lemma: "ゴロゴロ"
	},
	{
		rank: 12917,
		frequency: 2.83,
		lemma: "予告編"
	},
	{
		rank: 12918,
		frequency: 2.83,
		lemma: "織田"
	},
	{
		rank: 12919,
		frequency: 2.83,
		lemma: "略称"
	},
	{
		rank: 12920,
		frequency: 2.83,
		lemma: "酔い"
	},
	{
		rank: 12921,
		frequency: 2.83,
		lemma: "エンターテインメント"
	},
	{
		rank: 12922,
		frequency: 2.83,
		lemma: "有給"
	},
	{
		rank: 12923,
		frequency: 2.83,
		lemma: "取締"
	},
	{
		rank: 12924,
		frequency: 2.83,
		lemma: "同市"
	},
	{
		rank: 12925,
		frequency: 2.83,
		lemma: "重度"
	},
	{
		rank: 12926,
		frequency: 2.83,
		lemma: "先々"
	},
	{
		rank: 12927,
		frequency: 2.83,
		lemma: "物色"
	},
	{
		rank: 12928,
		frequency: 2.83,
		lemma: "ソロモン"
	},
	{
		rank: 12929,
		frequency: 2.83,
		lemma: "街角"
	},
	{
		rank: 12930,
		frequency: 2.83,
		lemma: "Ｊリーグ"
	},
	{
		rank: 12931,
		frequency: 2.83,
		lemma: "ガレージ"
	},
	{
		rank: 12932,
		frequency: 2.83,
		lemma: "久し振り"
	},
	{
		rank: 12933,
		frequency: 2.83,
		lemma: "おかあさん"
	},
	{
		rank: 12934,
		frequency: 2.83,
		lemma: "退く"
	},
	{
		rank: 12935,
		frequency: 2.83,
		lemma: "こんばんわ"
	},
	{
		rank: 12936,
		frequency: 2.83,
		lemma: "前もって"
	},
	{
		rank: 12937,
		frequency: 2.83,
		lemma: "売り出す"
	},
	{
		rank: 12938,
		frequency: 2.83,
		lemma: "樽"
	},
	{
		rank: 12939,
		frequency: 2.83,
		lemma: "エリザベス"
	},
	{
		rank: 12940,
		frequency: 2.83,
		lemma: "果たせる"
	},
	{
		rank: 12941,
		frequency: 2.83,
		lemma: "ｘ"
	},
	{
		rank: 12942,
		frequency: 2.83,
		lemma: "男優"
	},
	{
		rank: 12943,
		frequency: 2.83,
		lemma: "暴く"
	},
	{
		rank: 12944,
		frequency: 2.83,
		lemma: "不特定"
	},
	{
		rank: 12945,
		frequency: 2.83,
		lemma: "数式"
	},
	{
		rank: 12946,
		frequency: 2.83,
		lemma: "待ち時間"
	},
	{
		rank: 12947,
		frequency: 2.83,
		lemma: "露呈"
	},
	{
		rank: 12948,
		frequency: 2.83,
		lemma: "ハイビジョン"
	},
	{
		rank: 12949,
		frequency: 2.83,
		lemma: "シリアル"
	},
	{
		rank: 12950,
		frequency: 2.83,
		lemma: "インテリ"
	},
	{
		rank: 12951,
		frequency: 2.83,
		lemma: "蜂"
	},
	{
		rank: 12952,
		frequency: 2.83,
		lemma: "ブレンド"
	},
	{
		rank: 12953,
		frequency: 2.82,
		lemma: "町並み"
	},
	{
		rank: 12954,
		frequency: 2.82,
		lemma: "一途"
	},
	{
		rank: 12955,
		frequency: 2.82,
		lemma: "雑学"
	},
	{
		rank: 12956,
		frequency: 2.82,
		lemma: "にらむ"
	},
	{
		rank: 12957,
		frequency: 2.82,
		lemma: "血糖"
	},
	{
		rank: 12958,
		frequency: 2.82,
		lemma: "突きつける"
	},
	{
		rank: 12959,
		frequency: 2.82,
		lemma: "クジラ"
	},
	{
		rank: 12960,
		frequency: 2.82,
		lemma: "隣る"
	},
	{
		rank: 12961,
		frequency: 2.82,
		lemma: "阻む"
	},
	{
		rank: 12962,
		frequency: 2.82,
		lemma: "総体"
	},
	{
		rank: 12963,
		frequency: 2.82,
		lemma: "叔父"
	},
	{
		rank: 12964,
		frequency: 2.82,
		lemma: "支社"
	},
	{
		rank: 12965,
		frequency: 2.82,
		lemma: "押し込む"
	},
	{
		rank: 12966,
		frequency: 2.82,
		lemma: "伏せる"
	},
	{
		rank: 12967,
		frequency: 2.82,
		lemma: "ミスター"
	},
	{
		rank: 12968,
		frequency: 2.82,
		lemma: "近日"
	},
	{
		rank: 12969,
		frequency: 2.82,
		lemma: "キッ"
	},
	{
		rank: 12970,
		frequency: 2.82,
		lemma: "多め"
	},
	{
		rank: 12971,
		frequency: 2.82,
		lemma: "編著"
	},
	{
		rank: 12972,
		frequency: 2.82,
		lemma: "安部"
	},
	{
		rank: 12973,
		frequency: 2.82,
		lemma: "苦難"
	},
	{
		rank: 12974,
		frequency: 2.82,
		lemma: "オールド"
	},
	{
		rank: 12975,
		frequency: 2.82,
		lemma: "体格"
	},
	{
		rank: 12976,
		frequency: 2.82,
		lemma: "不全"
	},
	{
		rank: 12977,
		frequency: 2.82,
		lemma: "侵す"
	},
	{
		rank: 12978,
		frequency: 2.82,
		lemma: "護衛"
	},
	{
		rank: 12979,
		frequency: 2.82,
		lemma: "モノクロ"
	},
	{
		rank: 12980,
		frequency: 2.82,
		lemma: "略す"
	},
	{
		rank: 12981,
		frequency: 2.81,
		lemma: "野心"
	},
	{
		rank: 12982,
		frequency: 2.81,
		lemma: "お好み焼き"
	},
	{
		rank: 12983,
		frequency: 2.81,
		lemma: "サク"
	},
	{
		rank: 12984,
		frequency: 2.81,
		lemma: "否決"
	},
	{
		rank: 12985,
		frequency: 2.81,
		lemma: "愛想"
	},
	{
		rank: 12986,
		frequency: 2.81,
		lemma: "意気込み"
	},
	{
		rank: 12987,
		frequency: 2.81,
		lemma: "損ねる"
	},
	{
		rank: 12988,
		frequency: 2.81,
		lemma: "おっぱい"
	},
	{
		rank: 12989,
		frequency: 2.81,
		lemma: "オペレーティングシステム"
	},
	{
		rank: 12990,
		frequency: 2.81,
		lemma: "栄える"
	},
	{
		rank: 12991,
		frequency: 2.81,
		lemma: "贈与"
	},
	{
		rank: 12992,
		frequency: 2.81,
		lemma: "諸々"
	},
	{
		rank: 12993,
		frequency: 2.81,
		lemma: "出馬"
	},
	{
		rank: 12994,
		frequency: 2.81,
		lemma: "借入金"
	},
	{
		rank: 12995,
		frequency: 2.81,
		lemma: "プラズマ"
	},
	{
		rank: 12996,
		frequency: 2.81,
		lemma: "光栄"
	},
	{
		rank: 12997,
		frequency: 2.81,
		lemma: "兵衛"
	},
	{
		rank: 12998,
		frequency: 2.81,
		lemma: "ソビエト"
	},
	{
		rank: 12999,
		frequency: 2.81,
		lemma: "シャトル"
	},
	{
		rank: 13000,
		frequency: 2.81,
		lemma: "こぼれる"
	},
	{
		rank: 13001,
		frequency: 2.81,
		lemma: "矢印"
	},
	{
		rank: 13002,
		frequency: 2.81,
		lemma: "つれる"
	},
	{
		rank: 13003,
		frequency: 2.81,
		lemma: "生々しい"
	},
	{
		rank: 13004,
		frequency: 2.81,
		lemma: "停る"
	},
	{
		rank: 13005,
		frequency: 2.81,
		lemma: "取り締まる"
	},
	{
		rank: 13006,
		frequency: 2.81,
		lemma: "孔"
	},
	{
		rank: 13007,
		frequency: 2.81,
		lemma: "探し出す"
	},
	{
		rank: 13008,
		frequency: 2.81,
		lemma: "売り物"
	},
	{
		rank: 13009,
		frequency: 2.81,
		lemma: "エコノミー"
	},
	{
		rank: 13010,
		frequency: 2.81,
		lemma: "シーク"
	},
	{
		rank: 13011,
		frequency: 2.81,
		lemma: "貸与"
	},
	{
		rank: 13012,
		frequency: 2.81,
		lemma: "転移"
	},
	{
		rank: 13013,
		frequency: 2.81,
		lemma: "悪循環"
	},
	{
		rank: 13014,
		frequency: 2.81,
		lemma: "打者"
	},
	{
		rank: 13015,
		frequency: 2.81,
		lemma: "少額"
	},
	{
		rank: 13016,
		frequency: 2.81,
		lemma: "大西"
	},
	{
		rank: 13017,
		frequency: 2.81,
		lemma: "スリップ"
	},
	{
		rank: 13018,
		frequency: 2.81,
		lemma: "モットー"
	},
	{
		rank: 13019,
		frequency: 2.81,
		lemma: "食える"
	},
	{
		rank: 13020,
		frequency: 2.81,
		lemma: "ウエア"
	},
	{
		rank: 13021,
		frequency: 2.81,
		lemma: "前例"
	},
	{
		rank: 13022,
		frequency: 2.81,
		lemma: "エンジニアリング"
	},
	{
		rank: 13023,
		frequency: 2.81,
		lemma: "小平"
	},
	{
		rank: 13024,
		frequency: 2.81,
		lemma: "モモ"
	},
	{
		rank: 13025,
		frequency: 2.8,
		lemma: "ケニア"
	},
	{
		rank: 13026,
		frequency: 2.8,
		lemma: "最長"
	},
	{
		rank: 13027,
		frequency: 2.8,
		lemma: "司馬"
	},
	{
		rank: 13028,
		frequency: 2.8,
		lemma: "受理"
	},
	{
		rank: 13029,
		frequency: 2.8,
		lemma: "混沌"
	},
	{
		rank: 13030,
		frequency: 2.8,
		lemma: "きたる"
	},
	{
		rank: 13031,
		frequency: 2.8,
		lemma: "ぶらぶら"
	},
	{
		rank: 13032,
		frequency: 2.8,
		lemma: "お方"
	},
	{
		rank: 13033,
		frequency: 2.8,
		lemma: "もって"
	},
	{
		rank: 13034,
		frequency: 2.8,
		lemma: "結核"
	},
	{
		rank: 13035,
		frequency: 2.8,
		lemma: "短歌"
	},
	{
		rank: 13036,
		frequency: 2.8,
		lemma: "発光"
	},
	{
		rank: 13037,
		frequency: 2.8,
		lemma: "彩る"
	},
	{
		rank: 13038,
		frequency: 2.8,
		lemma: "綱"
	},
	{
		rank: 13039,
		frequency: 2.8,
		lemma: "微"
	},
	{
		rank: 13040,
		frequency: 2.8,
		lemma: "くし"
	},
	{
		rank: 13041,
		frequency: 2.8,
		lemma: "スパイク"
	},
	{
		rank: 13042,
		frequency: 2.8,
		lemma: "音程"
	},
	{
		rank: 13043,
		frequency: 2.79,
		lemma: "助け合う"
	},
	{
		rank: 13044,
		frequency: 2.79,
		lemma: "ずれ"
	},
	{
		rank: 13045,
		frequency: 2.79,
		lemma: "陶器"
	},
	{
		rank: 13046,
		frequency: 2.79,
		lemma: "AU"
	},
	{
		rank: 13047,
		frequency: 2.79,
		lemma: "賄う"
	},
	{
		rank: 13048,
		frequency: 2.79,
		lemma: "多量"
	},
	{
		rank: 13049,
		frequency: 2.79,
		lemma: "ＰＰ"
	},
	{
		rank: 13050,
		frequency: 2.79,
		lemma: "ニックネーム"
	},
	{
		rank: 13051,
		frequency: 2.79,
		lemma: "抗生"
	},
	{
		rank: 13052,
		frequency: 2.79,
		lemma: "露骨"
	},
	{
		rank: 13053,
		frequency: 2.79,
		lemma: "欠落"
	},
	{
		rank: 13054,
		frequency: 2.79,
		lemma: "濫用"
	},
	{
		rank: 13055,
		frequency: 2.79,
		lemma: "配属"
	},
	{
		rank: 13056,
		frequency: 2.79,
		lemma: "精子"
	},
	{
		rank: 13057,
		frequency: 2.79,
		lemma: "柿"
	},
	{
		rank: 13058,
		frequency: 2.79,
		lemma: "イコール"
	},
	{
		rank: 13059,
		frequency: 2.79,
		lemma: "しつける"
	},
	{
		rank: 13060,
		frequency: 2.79,
		lemma: "緊迫"
	},
	{
		rank: 13061,
		frequency: 2.79,
		lemma: "元祖"
	},
	{
		rank: 13062,
		frequency: 2.79,
		lemma: "ブルジョアジー"
	},
	{
		rank: 13063,
		frequency: 2.79,
		lemma: "形容詞"
	},
	{
		rank: 13064,
		frequency: 2.79,
		lemma: "天文学"
	},
	{
		rank: 13065,
		frequency: 2.79,
		lemma: "誘発"
	},
	{
		rank: 13066,
		frequency: 2.79,
		lemma: "一元化"
	},
	{
		rank: 13067,
		frequency: 2.79,
		lemma: "フラメンコ"
	},
	{
		rank: 13068,
		frequency: 2.79,
		lemma: "バケツ"
	},
	{
		rank: 13069,
		frequency: 2.79,
		lemma: "在留"
	},
	{
		rank: 13070,
		frequency: 2.78,
		lemma: "置き場"
	},
	{
		rank: 13071,
		frequency: 2.78,
		lemma: "号機"
	},
	{
		rank: 13072,
		frequency: 2.78,
		lemma: "同席"
	},
	{
		rank: 13073,
		frequency: 2.78,
		lemma: "王妃"
	},
	{
		rank: 13074,
		frequency: 2.78,
		lemma: "秦"
	},
	{
		rank: 13075,
		frequency: 2.78,
		lemma: "すます"
	},
	{
		rank: 13076,
		frequency: 2.78,
		lemma: "ツキ"
	},
	{
		rank: 13077,
		frequency: 2.78,
		lemma: "容姿"
	},
	{
		rank: 13078,
		frequency: 2.78,
		lemma: "音符"
	},
	{
		rank: 13079,
		frequency: 2.78,
		lemma: "問屋"
	},
	{
		rank: 13080,
		frequency: 2.78,
		lemma: "アミノ酸"
	},
	{
		rank: 13081,
		frequency: 2.78,
		lemma: "下町"
	},
	{
		rank: 13082,
		frequency: 2.78,
		lemma: "あおる"
	},
	{
		rank: 13083,
		frequency: 2.78,
		lemma: "累計"
	},
	{
		rank: 13084,
		frequency: 2.78,
		lemma: "タケ"
	},
	{
		rank: 13085,
		frequency: 2.78,
		lemma: "輝"
	},
	{
		rank: 13086,
		frequency: 2.78,
		lemma: "すかさず"
	},
	{
		rank: 13087,
		frequency: 2.78,
		lemma: "碑"
	},
	{
		rank: 13088,
		frequency: 2.78,
		lemma: "望める"
	},
	{
		rank: 13089,
		frequency: 2.78,
		lemma: "かわいらしい"
	},
	{
		rank: 13090,
		frequency: 2.78,
		lemma: "ディスカウント"
	},
	{
		rank: 13091,
		frequency: 2.77,
		lemma: "中庭"
	},
	{
		rank: 13092,
		frequency: 2.77,
		lemma: "おぉ"
	},
	{
		rank: 13093,
		frequency: 2.77,
		lemma: "ｍｍ"
	},
	{
		rank: 13094,
		frequency: 2.77,
		lemma: "バッチリ"
	},
	{
		rank: 13095,
		frequency: 2.77,
		lemma: "フレッシュ"
	},
	{
		rank: 13096,
		frequency: 2.77,
		lemma: "ノンフィクション"
	},
	{
		rank: 13097,
		frequency: 2.77,
		lemma: "思い知らす"
	},
	{
		rank: 13098,
		frequency: 2.77,
		lemma: "領収"
	},
	{
		rank: 13099,
		frequency: 2.77,
		lemma: "昼過ぎ"
	},
	{
		rank: 13100,
		frequency: 2.77,
		lemma: "昆布"
	},
	{
		rank: 13101,
		frequency: 2.77,
		lemma: "ラケット"
	},
	{
		rank: 13102,
		frequency: 2.77,
		lemma: "立川"
	},
	{
		rank: 13103,
		frequency: 2.77,
		lemma: "希少"
	},
	{
		rank: 13104,
		frequency: 2.77,
		lemma: "ヒップ"
	},
	{
		rank: 13105,
		frequency: 2.77,
		lemma: "フジモリ"
	},
	{
		rank: 13106,
		frequency: 2.77,
		lemma: "大前提"
	},
	{
		rank: 13107,
		frequency: 2.77,
		lemma: "レクチャー"
	},
	{
		rank: 13108,
		frequency: 2.77,
		lemma: "小売り"
	},
	{
		rank: 13109,
		frequency: 2.77,
		lemma: "勝る"
	},
	{
		rank: 13110,
		frequency: 2.77,
		lemma: "飴"
	},
	{
		rank: 13111,
		frequency: 2.77,
		lemma: "かさ"
	},
	{
		rank: 13112,
		frequency: 2.77,
		lemma: "放課後"
	},
	{
		rank: 13113,
		frequency: 2.77,
		lemma: "修繕"
	},
	{
		rank: 13114,
		frequency: 2.77,
		lemma: "合える"
	},
	{
		rank: 13115,
		frequency: 2.77,
		lemma: "庁舎"
	},
	{
		rank: 13116,
		frequency: 2.77,
		lemma: "受け"
	},
	{
		rank: 13117,
		frequency: 2.77,
		lemma: "お過ごし"
	},
	{
		rank: 13118,
		frequency: 2.77,
		lemma: "おじ"
	},
	{
		rank: 13119,
		frequency: 2.77,
		lemma: "びん"
	},
	{
		rank: 13120,
		frequency: 2.77,
		lemma: "シル"
	},
	{
		rank: 13121,
		frequency: 2.77,
		lemma: "杉浦"
	},
	{
		rank: 13122,
		frequency: 2.77,
		lemma: "たべる"
	},
	{
		rank: 13123,
		frequency: 2.77,
		lemma: "卿"
	},
	{
		rank: 13124,
		frequency: 2.77,
		lemma: "盆"
	},
	{
		rank: 13125,
		frequency: 2.77,
		lemma: "似顔絵"
	},
	{
		rank: 13126,
		frequency: 2.77,
		lemma: "証書"
	},
	{
		rank: 13127,
		frequency: 2.77,
		lemma: "シミ"
	},
	{
		rank: 13128,
		frequency: 2.77,
		lemma: "おでん"
	},
	{
		rank: 13129,
		frequency: 2.76,
		lemma: "穂"
	},
	{
		rank: 13130,
		frequency: 2.76,
		lemma: "再婚"
	},
	{
		rank: 13131,
		frequency: 2.76,
		lemma: "ハングル"
	},
	{
		rank: 13132,
		frequency: 2.76,
		lemma: "はり"
	},
	{
		rank: 13133,
		frequency: 2.76,
		lemma: "病む"
	},
	{
		rank: 13134,
		frequency: 2.76,
		lemma: "不意"
	},
	{
		rank: 13135,
		frequency: 2.76,
		lemma: "谷川"
	},
	{
		rank: 13136,
		frequency: 2.76,
		lemma: "花びら"
	},
	{
		rank: 13137,
		frequency: 2.76,
		lemma: "乗っ取る"
	},
	{
		rank: 13138,
		frequency: 2.76,
		lemma: "左足"
	},
	{
		rank: 13139,
		frequency: 2.76,
		lemma: "首位"
	},
	{
		rank: 13140,
		frequency: 2.76,
		lemma: "東急"
	},
	{
		rank: 13141,
		frequency: 2.76,
		lemma: "割安"
	},
	{
		rank: 13142,
		frequency: 2.76,
		lemma: "落とし穴"
	},
	{
		rank: 13143,
		frequency: 2.76,
		lemma: "憶測"
	},
	{
		rank: 13144,
		frequency: 2.76,
		lemma: "小坂"
	},
	{
		rank: 13145,
		frequency: 2.76,
		lemma: "ノーマン"
	},
	{
		rank: 13146,
		frequency: 2.76,
		lemma: "敬遠"
	},
	{
		rank: 13147,
		frequency: 2.76,
		lemma: "うかがえる"
	},
	{
		rank: 13148,
		frequency: 2.76,
		lemma: "あてはまる"
	},
	{
		rank: 13149,
		frequency: 2.75,
		lemma: "管弦楽"
	},
	{
		rank: 13150,
		frequency: 2.75,
		lemma: "グレン"
	},
	{
		rank: 13151,
		frequency: 2.75,
		lemma: "空調"
	},
	{
		rank: 13152,
		frequency: 2.75,
		lemma: "追いやる"
	},
	{
		rank: 13153,
		frequency: 2.75,
		lemma: "晴天"
	},
	{
		rank: 13154,
		frequency: 2.75,
		lemma: "受動"
	},
	{
		rank: 13155,
		frequency: 2.75,
		lemma: "障る"
	},
	{
		rank: 13156,
		frequency: 2.75,
		lemma: "画素"
	},
	{
		rank: 13157,
		frequency: 2.75,
		lemma: "あからさま"
	},
	{
		rank: 13158,
		frequency: 2.75,
		lemma: "怠慢"
	},
	{
		rank: 13159,
		frequency: 2.75,
		lemma: "Ｑ＆Ａ"
	},
	{
		rank: 13160,
		frequency: 2.75,
		lemma: "積立"
	},
	{
		rank: 13161,
		frequency: 2.75,
		lemma: "通れる"
	},
	{
		rank: 13162,
		frequency: 2.75,
		lemma: "サンダル"
	},
	{
		rank: 13163,
		frequency: 2.75,
		lemma: "否認"
	},
	{
		rank: 13164,
		frequency: 2.75,
		lemma: "召す"
	},
	{
		rank: 13165,
		frequency: 2.75,
		lemma: "ヘルメット"
	},
	{
		rank: 13166,
		frequency: 2.75,
		lemma: "平方メートル"
	},
	{
		rank: 13167,
		frequency: 2.75,
		lemma: "衣料"
	},
	{
		rank: 13168,
		frequency: 2.75,
		lemma: "バスケット"
	},
	{
		rank: 13169,
		frequency: 2.75,
		lemma: "飲み屋"
	},
	{
		rank: 13170,
		frequency: 2.75,
		lemma: "言明"
	},
	{
		rank: 13171,
		frequency: 2.75,
		lemma: "共用"
	},
	{
		rank: 13172,
		frequency: 2.75,
		lemma: "自伝"
	},
	{
		rank: 13173,
		frequency: 2.75,
		lemma: "勝訴"
	},
	{
		rank: 13174,
		frequency: 2.75,
		lemma: "翻弄"
	},
	{
		rank: 13175,
		frequency: 2.75,
		lemma: "荒"
	},
	{
		rank: 13176,
		frequency: 2.75,
		lemma: "ギタリスト"
	},
	{
		rank: 13177,
		frequency: 2.75,
		lemma: "取り付け"
	},
	{
		rank: 13178,
		frequency: 2.75,
		lemma: "デッド"
	},
	{
		rank: 13179,
		frequency: 2.75,
		lemma: "神宮"
	},
	{
		rank: 13180,
		frequency: 2.75,
		lemma: "尻尾"
	},
	{
		rank: 13181,
		frequency: 2.75,
		lemma: "タイガー"
	},
	{
		rank: 13182,
		frequency: 2.75,
		lemma: "にし"
	},
	{
		rank: 13183,
		frequency: 2.74,
		lemma: "流域"
	},
	{
		rank: 13184,
		frequency: 2.74,
		lemma: "ホース"
	},
	{
		rank: 13185,
		frequency: 2.74,
		lemma: "大綱"
	},
	{
		rank: 13186,
		frequency: 2.74,
		lemma: "部類"
	},
	{
		rank: 13187,
		frequency: 2.74,
		lemma: "解任"
	},
	{
		rank: 13188,
		frequency: 2.74,
		lemma: "カルシウム"
	},
	{
		rank: 13189,
		frequency: 2.74,
		lemma: "虚構"
	},
	{
		rank: 13190,
		frequency: 2.74,
		lemma: "権益"
	},
	{
		rank: 13191,
		frequency: 2.74,
		lemma: "反則"
	},
	{
		rank: 13192,
		frequency: 2.74,
		lemma: "フタ"
	},
	{
		rank: 13193,
		frequency: 2.74,
		lemma: "お宝"
	},
	{
		rank: 13194,
		frequency: 2.74,
		lemma: "おりる"
	},
	{
		rank: 13195,
		frequency: 2.74,
		lemma: "黙々と"
	},
	{
		rank: 13196,
		frequency: 2.74,
		lemma: "同胞"
	},
	{
		rank: 13197,
		frequency: 2.74,
		lemma: "行き届く"
	},
	{
		rank: 13198,
		frequency: 2.74,
		lemma: "寒"
	},
	{
		rank: 13199,
		frequency: 2.74,
		lemma: "短所"
	},
	{
		rank: 13200,
		frequency: 2.74,
		lemma: "リアクション"
	},
	{
		rank: 13201,
		frequency: 2.74,
		lemma: "卒論"
	},
	{
		rank: 13202,
		frequency: 2.74,
		lemma: "養殖"
	},
	{
		rank: 13203,
		frequency: 2.74,
		lemma: "戯言"
	},
	{
		rank: 13204,
		frequency: 2.74,
		lemma: "医薬"
	},
	{
		rank: 13205,
		frequency: 2.74,
		lemma: "石垣"
	},
	{
		rank: 13206,
		frequency: 2.74,
		lemma: "言わば"
	},
	{
		rank: 13207,
		frequency: 2.74,
		lemma: "ポップス"
	},
	{
		rank: 13208,
		frequency: 2.73,
		lemma: "占"
	},
	{
		rank: 13209,
		frequency: 2.73,
		lemma: "府県"
	},
	{
		rank: 13210,
		frequency: 2.73,
		lemma: "でく"
	},
	{
		rank: 13211,
		frequency: 2.73,
		lemma: "個展"
	},
	{
		rank: 13212,
		frequency: 2.73,
		lemma: "神経質"
	},
	{
		rank: 13213,
		frequency: 2.73,
		lemma: "レジュメ"
	},
	{
		rank: 13214,
		frequency: 2.73,
		lemma: "筒"
	},
	{
		rank: 13215,
		frequency: 2.73,
		lemma: "照射"
	},
	{
		rank: 13216,
		frequency: 2.73,
		lemma: "給油"
	},
	{
		rank: 13217,
		frequency: 2.73,
		lemma: "まだしも"
	},
	{
		rank: 13218,
		frequency: 2.73,
		lemma: "コウ"
	},
	{
		rank: 13219,
		frequency: 2.73,
		lemma: "買い上げ"
	},
	{
		rank: 13220,
		frequency: 2.73,
		lemma: "変質"
	},
	{
		rank: 13221,
		frequency: 2.73,
		lemma: "すみやか"
	},
	{
		rank: 13222,
		frequency: 2.73,
		lemma: "同和"
	},
	{
		rank: 13223,
		frequency: 2.73,
		lemma: "配合"
	},
	{
		rank: 13224,
		frequency: 2.73,
		lemma: "時として"
	},
	{
		rank: 13225,
		frequency: 2.73,
		lemma: "社民党"
	},
	{
		rank: 13226,
		frequency: 2.73,
		lemma: "厨房"
	},
	{
		rank: 13227,
		frequency: 2.73,
		lemma: "適性"
	},
	{
		rank: 13228,
		frequency: 2.73,
		lemma: "注釈"
	},
	{
		rank: 13229,
		frequency: 2.73,
		lemma: "山々"
	},
	{
		rank: 13230,
		frequency: 2.73,
		lemma: "吐き気"
	},
	{
		rank: 13231,
		frequency: 2.73,
		lemma: "明治維新"
	},
	{
		rank: 13232,
		frequency: 2.73,
		lemma: "右足"
	},
	{
		rank: 13233,
		frequency: 2.73,
		lemma: "ピエール"
	},
	{
		rank: 13234,
		frequency: 2.73,
		lemma: "大木"
	},
	{
		rank: 13235,
		frequency: 2.73,
		lemma: "省令"
	},
	{
		rank: 13236,
		frequency: 2.73,
		lemma: "動脈"
	},
	{
		rank: 13237,
		frequency: 2.73,
		lemma: "にぎやか"
	},
	{
		rank: 13238,
		frequency: 2.73,
		lemma: "トレーディング"
	},
	{
		rank: 13239,
		frequency: 2.73,
		lemma: "垂れる"
	},
	{
		rank: 13240,
		frequency: 2.73,
		lemma: "とうてい"
	},
	{
		rank: 13241,
		frequency: 2.73,
		lemma: "輪郭"
	},
	{
		rank: 13242,
		frequency: 2.73,
		lemma: "ハワード"
	},
	{
		rank: 13243,
		frequency: 2.73,
		lemma: "両替"
	},
	{
		rank: 13244,
		frequency: 2.73,
		lemma: "しかるべき"
	},
	{
		rank: 13245,
		frequency: 2.73,
		lemma: "蓄える"
	},
	{
		rank: 13246,
		frequency: 2.72,
		lemma: "陵"
	},
	{
		rank: 13247,
		frequency: 2.72,
		lemma: "撲滅"
	},
	{
		rank: 13248,
		frequency: 2.72,
		lemma: "マオリ"
	},
	{
		rank: 13249,
		frequency: 2.72,
		lemma: "なつ"
	},
	{
		rank: 13250,
		frequency: 2.72,
		lemma: "偵察"
	},
	{
		rank: 13251,
		frequency: 2.72,
		lemma: "完売"
	},
	{
		rank: 13252,
		frequency: 2.72,
		lemma: "伯"
	},
	{
		rank: 13253,
		frequency: 2.72,
		lemma: "ブロー"
	},
	{
		rank: 13254,
		frequency: 2.72,
		lemma: "のら"
	},
	{
		rank: 13255,
		frequency: 2.72,
		lemma: "譲歩"
	},
	{
		rank: 13256,
		frequency: 2.72,
		lemma: "有り得る"
	},
	{
		rank: 13257,
		frequency: 2.72,
		lemma: "健二"
	},
	{
		rank: 13258,
		frequency: 2.72,
		lemma: "アントニオ"
	},
	{
		rank: 13259,
		frequency: 2.72,
		lemma: "かけがえ"
	},
	{
		rank: 13260,
		frequency: 2.72,
		lemma: "稔"
	},
	{
		rank: 13261,
		frequency: 2.72,
		lemma: "こんにちわ"
	},
	{
		rank: 13262,
		frequency: 2.72,
		lemma: "崇高"
	},
	{
		rank: 13263,
		frequency: 2.72,
		lemma: "手形"
	},
	{
		rank: 13264,
		frequency: 2.72,
		lemma: "大王"
	},
	{
		rank: 13265,
		frequency: 2.72,
		lemma: "思い通り"
	},
	{
		rank: 13266,
		frequency: 2.72,
		lemma: "地質"
	},
	{
		rank: 13267,
		frequency: 2.72,
		lemma: "日本食"
	},
	{
		rank: 13268,
		frequency: 2.72,
		lemma: "ぐる"
	},
	{
		rank: 13269,
		frequency: 2.72,
		lemma: "ボディー"
	},
	{
		rank: 13270,
		frequency: 2.72,
		lemma: "ルビー"
	},
	{
		rank: 13271,
		frequency: 2.72,
		lemma: "アタマ"
	},
	{
		rank: 13272,
		frequency: 2.72,
		lemma: "深層"
	},
	{
		rank: 13273,
		frequency: 2.71,
		lemma: "定理"
	},
	{
		rank: 13274,
		frequency: 2.71,
		lemma: "ファクト"
	},
	{
		rank: 13275,
		frequency: 2.71,
		lemma: "押収"
	},
	{
		rank: 13276,
		frequency: 2.71,
		lemma: "境地"
	},
	{
		rank: 13277,
		frequency: 2.71,
		lemma: "仏壇"
	},
	{
		rank: 13278,
		frequency: 2.71,
		lemma: "材質"
	},
	{
		rank: 13279,
		frequency: 2.71,
		lemma: "あっという間"
	},
	{
		rank: 13280,
		frequency: 2.71,
		lemma: "越"
	},
	{
		rank: 13281,
		frequency: 2.71,
		lemma: "先人"
	},
	{
		rank: 13282,
		frequency: 2.71,
		lemma: "不合理"
	},
	{
		rank: 13283,
		frequency: 2.71,
		lemma: "凝らす"
	},
	{
		rank: 13284,
		frequency: 2.71,
		lemma: "紗子"
	},
	{
		rank: 13285,
		frequency: 2.71,
		lemma: "定款"
	},
	{
		rank: 13286,
		frequency: 2.71,
		lemma: "一発"
	},
	{
		rank: 13287,
		frequency: 2.71,
		lemma: "射程"
	},
	{
		rank: 13288,
		frequency: 2.71,
		lemma: "ピル"
	},
	{
		rank: 13289,
		frequency: 2.71,
		lemma: "再販"
	},
	{
		rank: 13290,
		frequency: 2.71,
		lemma: "緒"
	},
	{
		rank: 13291,
		frequency: 2.71,
		lemma: "ショパン"
	},
	{
		rank: 13292,
		frequency: 2.71,
		lemma: "所沢"
	},
	{
		rank: 13293,
		frequency: 2.71,
		lemma: "不問"
	},
	{
		rank: 13294,
		frequency: 2.71,
		lemma: "クローズアップ"
	},
	{
		rank: 13295,
		frequency: 2.71,
		lemma: "特許庁"
	},
	{
		rank: 13296,
		frequency: 2.71,
		lemma: "ワザ"
	},
	{
		rank: 13297,
		frequency: 2.71,
		lemma: "溶かす"
	},
	{
		rank: 13298,
		frequency: 2.71,
		lemma: "多角"
	},
	{
		rank: 13299,
		frequency: 2.71,
		lemma: "事物"
	},
	{
		rank: 13300,
		frequency: 2.71,
		lemma: "軍国"
	},
	{
		rank: 13301,
		frequency: 2.71,
		lemma: "シェル"
	},
	{
		rank: 13302,
		frequency: 2.71,
		lemma: "スタンプ"
	},
	{
		rank: 13303,
		frequency: 2.71,
		lemma: "異変"
	},
	{
		rank: 13304,
		frequency: 2.71,
		lemma: "安堵"
	},
	{
		rank: 13305,
		frequency: 2.71,
		lemma: "バリー"
	},
	{
		rank: 13306,
		frequency: 2.71,
		lemma: "静寂"
	},
	{
		rank: 13307,
		frequency: 2.71,
		lemma: "閉塞"
	},
	{
		rank: 13308,
		frequency: 2.71,
		lemma: "随所"
	},
	{
		rank: 13309,
		frequency: 2.7,
		lemma: "オーロラ"
	},
	{
		rank: 13310,
		frequency: 2.7,
		lemma: "集い"
	},
	{
		rank: 13311,
		frequency: 2.7,
		lemma: "ヘッドホン"
	},
	{
		rank: 13312,
		frequency: 2.7,
		lemma: "かま"
	},
	{
		rank: 13313,
		frequency: 2.7,
		lemma: "かならず"
	},
	{
		rank: 13314,
		frequency: 2.7,
		lemma: "払える"
	},
	{
		rank: 13315,
		frequency: 2.7,
		lemma: "無駄遣い"
	},
	{
		rank: 13316,
		frequency: 2.7,
		lemma: "ばり"
	},
	{
		rank: 13317,
		frequency: 2.7,
		lemma: "巡礼"
	},
	{
		rank: 13318,
		frequency: 2.7,
		lemma: "真偽"
	},
	{
		rank: 13319,
		frequency: 2.7,
		lemma: "いちおう"
	},
	{
		rank: 13320,
		frequency: 2.7,
		lemma: "下方"
	},
	{
		rank: 13321,
		frequency: 2.7,
		lemma: "救世主"
	},
	{
		rank: 13322,
		frequency: 2.7,
		lemma: "サラ金"
	},
	{
		rank: 13323,
		frequency: 2.7,
		lemma: "実話"
	},
	{
		rank: 13324,
		frequency: 2.7,
		lemma: "取り消し"
	},
	{
		rank: 13325,
		frequency: 2.7,
		lemma: "みごと"
	},
	{
		rank: 13326,
		frequency: 2.7,
		lemma: "デリー"
	},
	{
		rank: 13327,
		frequency: 2.7,
		lemma: "特産"
	},
	{
		rank: 13328,
		frequency: 2.7,
		lemma: "おろか"
	},
	{
		rank: 13329,
		frequency: 2.7,
		lemma: "無邪気"
	},
	{
		rank: 13330,
		frequency: 2.7,
		lemma: "学説"
	},
	{
		rank: 13331,
		frequency: 2.7,
		lemma: "細分"
	},
	{
		rank: 13332,
		frequency: 2.7,
		lemma: "脳裏"
	},
	{
		rank: 13333,
		frequency: 2.7,
		lemma: "非行"
	},
	{
		rank: 13334,
		frequency: 2.7,
		lemma: "感知"
	},
	{
		rank: 13335,
		frequency: 2.7,
		lemma: "頑張れる"
	},
	{
		rank: 13336,
		frequency: 2.7,
		lemma: "人当たり"
	},
	{
		rank: 13337,
		frequency: 2.7,
		lemma: "増収"
	},
	{
		rank: 13338,
		frequency: 2.7,
		lemma: "和風"
	},
	{
		rank: 13339,
		frequency: 2.7,
		lemma: "休息"
	},
	{
		rank: 13340,
		frequency: 2.69,
		lemma: "学び"
	},
	{
		rank: 13341,
		frequency: 2.69,
		lemma: "やれやれ"
	},
	{
		rank: 13342,
		frequency: 2.69,
		lemma: "海苔"
	},
	{
		rank: 13343,
		frequency: 2.69,
		lemma: "別個"
	},
	{
		rank: 13344,
		frequency: 2.69,
		lemma: "メアリー"
	},
	{
		rank: 13345,
		frequency: 2.69,
		lemma: "聴こえる"
	},
	{
		rank: 13346,
		frequency: 2.69,
		lemma: "射殺"
	},
	{
		rank: 13347,
		frequency: 2.69,
		lemma: "後部"
	},
	{
		rank: 13348,
		frequency: 2.69,
		lemma: "文春"
	},
	{
		rank: 13349,
		frequency: 2.69,
		lemma: "点灯"
	},
	{
		rank: 13350,
		frequency: 2.69,
		lemma: "貧弱"
	},
	{
		rank: 13351,
		frequency: 2.69,
		lemma: "ヘビー"
	},
	{
		rank: 13352,
		frequency: 2.69,
		lemma: "脱力"
	},
	{
		rank: 13353,
		frequency: 2.69,
		lemma: "いも"
	},
	{
		rank: 13354,
		frequency: 2.69,
		lemma: "中南米"
	},
	{
		rank: 13355,
		frequency: 2.69,
		lemma: "さようなら"
	},
	{
		rank: 13356,
		frequency: 2.69,
		lemma: "浜田"
	},
	{
		rank: 13357,
		frequency: 2.69,
		lemma: "獣医"
	},
	{
		rank: 13358,
		frequency: 2.69,
		lemma: "オーブン"
	},
	{
		rank: 13359,
		frequency: 2.69,
		lemma: "ムッ"
	},
	{
		rank: 13360,
		frequency: 2.69,
		lemma: "年明け"
	},
	{
		rank: 13361,
		frequency: 2.69,
		lemma: "マーチ"
	},
	{
		rank: 13362,
		frequency: 2.69,
		lemma: "生態学"
	},
	{
		rank: 13363,
		frequency: 2.69,
		lemma: "岡野"
	},
	{
		rank: 13364,
		frequency: 2.69,
		lemma: "恐慌"
	},
	{
		rank: 13365,
		frequency: 2.69,
		lemma: "昔話"
	},
	{
		rank: 13366,
		frequency: 2.69,
		lemma: "ドック"
	},
	{
		rank: 13367,
		frequency: 2.69,
		lemma: "南方"
	},
	{
		rank: 13368,
		frequency: 2.69,
		lemma: "切り出す"
	},
	{
		rank: 13369,
		frequency: 2.69,
		lemma: "辛口"
	},
	{
		rank: 13370,
		frequency: 2.69,
		lemma: "ロット"
	},
	{
		rank: 13371,
		frequency: 2.69,
		lemma: "魔法使い"
	},
	{
		rank: 13372,
		frequency: 2.69,
		lemma: "勤勉"
	},
	{
		rank: 13373,
		frequency: 2.69,
		lemma: "σ"
	},
	{
		rank: 13374,
		frequency: 2.68,
		lemma: "きた"
	},
	{
		rank: 13375,
		frequency: 2.68,
		lemma: "獅子"
	},
	{
		rank: 13376,
		frequency: 2.68,
		lemma: "最短"
	},
	{
		rank: 13377,
		frequency: 2.68,
		lemma: "圧巻"
	},
	{
		rank: 13378,
		frequency: 2.68,
		lemma: "一様"
	},
	{
		rank: 13379,
		frequency: 2.68,
		lemma: "アース"
	},
	{
		rank: 13380,
		frequency: 2.68,
		lemma: "睡る"
	},
	{
		rank: 13381,
		frequency: 2.68,
		lemma: "宮廷"
	},
	{
		rank: 13382,
		frequency: 2.68,
		lemma: "括る"
	},
	{
		rank: 13383,
		frequency: 2.68,
		lemma: "波紋"
	},
	{
		rank: 13384,
		frequency: 2.68,
		lemma: "浸かる"
	},
	{
		rank: 13385,
		frequency: 2.68,
		lemma: "化合"
	},
	{
		rank: 13386,
		frequency: 2.68,
		lemma: "刃物"
	},
	{
		rank: 13387,
		frequency: 2.68,
		lemma: "あたえる"
	},
	{
		rank: 13388,
		frequency: 2.68,
		lemma: "慰謝"
	},
	{
		rank: 13389,
		frequency: 2.68,
		lemma: "人妻"
	},
	{
		rank: 13390,
		frequency: 2.68,
		lemma: "観劇"
	},
	{
		rank: 13391,
		frequency: 2.68,
		lemma: "戯曲"
	},
	{
		rank: 13392,
		frequency: 2.68,
		lemma: "攻防"
	},
	{
		rank: 13393,
		frequency: 2.68,
		lemma: "放す"
	},
	{
		rank: 13394,
		frequency: 2.68,
		lemma: "公民館"
	},
	{
		rank: 13395,
		frequency: 2.68,
		lemma: "パロディ"
	},
	{
		rank: 13396,
		frequency: 2.68,
		lemma: "改築"
	},
	{
		rank: 13397,
		frequency: 2.68,
		lemma: "んじゃ"
	},
	{
		rank: 13398,
		frequency: 2.68,
		lemma: "編曲"
	},
	{
		rank: 13399,
		frequency: 2.68,
		lemma: "矢先"
	},
	{
		rank: 13400,
		frequency: 2.68,
		lemma: "重んじる"
	},
	{
		rank: 13401,
		frequency: 2.68,
		lemma: "勃発"
	},
	{
		rank: 13402,
		frequency: 2.68,
		lemma: "創り出す"
	},
	{
		rank: 13403,
		frequency: 2.68,
		lemma: "拓"
	},
	{
		rank: 13404,
		frequency: 2.68,
		lemma: "緩い"
	},
	{
		rank: 13405,
		frequency: 2.68,
		lemma: "至"
	},
	{
		rank: 13406,
		frequency: 2.67,
		lemma: "連敗"
	},
	{
		rank: 13407,
		frequency: 2.67,
		lemma: "急落"
	},
	{
		rank: 13408,
		frequency: 2.67,
		lemma: "催し"
	},
	{
		rank: 13409,
		frequency: 2.67,
		lemma: "予見"
	},
	{
		rank: 13410,
		frequency: 2.67,
		lemma: "偏"
	},
	{
		rank: 13411,
		frequency: 2.67,
		lemma: "葬る"
	},
	{
		rank: 13412,
		frequency: 2.67,
		lemma: "プライス"
	},
	{
		rank: 13413,
		frequency: 2.67,
		lemma: "浴"
	},
	{
		rank: 13414,
		frequency: 2.67,
		lemma: "ナース"
	},
	{
		rank: 13415,
		frequency: 2.67,
		lemma: "栓"
	},
	{
		rank: 13416,
		frequency: 2.67,
		lemma: "柔らか"
	},
	{
		rank: 13417,
		frequency: 2.67,
		lemma: "晶"
	},
	{
		rank: 13418,
		frequency: 2.67,
		lemma: "道中"
	},
	{
		rank: 13419,
		frequency: 2.67,
		lemma: "支度"
	},
	{
		rank: 13420,
		frequency: 2.67,
		lemma: "乳幼児"
	},
	{
		rank: 13421,
		frequency: 2.67,
		lemma: "茎"
	},
	{
		rank: 13422,
		frequency: 2.67,
		lemma: "冬季"
	},
	{
		rank: 13423,
		frequency: 2.67,
		lemma: "世俗"
	},
	{
		rank: 13424,
		frequency: 2.67,
		lemma: "完備"
	},
	{
		rank: 13425,
		frequency: 2.67,
		lemma: "帰路"
	},
	{
		rank: 13426,
		frequency: 2.67,
		lemma: "営み"
	},
	{
		rank: 13427,
		frequency: 2.67,
		lemma: "村井"
	},
	{
		rank: 13428,
		frequency: 2.67,
		lemma: "仮設"
	},
	{
		rank: 13429,
		frequency: 2.67,
		lemma: "往々"
	},
	{
		rank: 13430,
		frequency: 2.67,
		lemma: "母校"
	},
	{
		rank: 13431,
		frequency: 2.67,
		lemma: "工具"
	},
	{
		rank: 13432,
		frequency: 2.67,
		lemma: "ろくに"
	},
	{
		rank: 13433,
		frequency: 2.67,
		lemma: "俊輔"
	},
	{
		rank: 13434,
		frequency: 2.66,
		lemma: "ニンニク"
	},
	{
		rank: 13435,
		frequency: 2.66,
		lemma: "悔やむ"
	},
	{
		rank: 13436,
		frequency: 2.66,
		lemma: "ならぶ"
	},
	{
		rank: 13437,
		frequency: 2.66,
		lemma: "カルテ"
	},
	{
		rank: 13438,
		frequency: 2.66,
		lemma: "マリン"
	},
	{
		rank: 13439,
		frequency: 2.66,
		lemma: "生誕"
	},
	{
		rank: 13440,
		frequency: 2.66,
		lemma: "働きかけ"
	},
	{
		rank: 13441,
		frequency: 2.66,
		lemma: "ブラシ"
	},
	{
		rank: 13442,
		frequency: 2.66,
		lemma: "苛立つ"
	},
	{
		rank: 13443,
		frequency: 2.66,
		lemma: "帆"
	},
	{
		rank: 13444,
		frequency: 2.66,
		lemma: "アリア"
	},
	{
		rank: 13445,
		frequency: 2.66,
		lemma: "告訴"
	},
	{
		rank: 13446,
		frequency: 2.66,
		lemma: "遥かに"
	},
	{
		rank: 13447,
		frequency: 2.66,
		lemma: "使い道"
	},
	{
		rank: 13448,
		frequency: 2.66,
		lemma: "護"
	},
	{
		rank: 13449,
		frequency: 2.66,
		lemma: "サウジアラビア"
	},
	{
		rank: 13450,
		frequency: 2.66,
		lemma: "早川"
	},
	{
		rank: 13451,
		frequency: 2.66,
		lemma: "振る舞う"
	},
	{
		rank: 13452,
		frequency: 2.66,
		lemma: "わい"
	},
	{
		rank: 13453,
		frequency: 2.66,
		lemma: "シロ"
	},
	{
		rank: 13454,
		frequency: 2.66,
		lemma: "フェミニズム"
	},
	{
		rank: 13455,
		frequency: 2.66,
		lemma: "守り"
	},
	{
		rank: 13456,
		frequency: 2.66,
		lemma: "緩む"
	},
	{
		rank: 13457,
		frequency: 2.66,
		lemma: "激動"
	},
	{
		rank: 13458,
		frequency: 2.66,
		lemma: "レッズ"
	},
	{
		rank: 13459,
		frequency: 2.66,
		lemma: "やらす"
	},
	{
		rank: 13460,
		frequency: 2.66,
		lemma: "沙"
	},
	{
		rank: 13461,
		frequency: 2.66,
		lemma: "フレンドリー"
	},
	{
		rank: 13462,
		frequency: 2.66,
		lemma: "病状"
	},
	{
		rank: 13463,
		frequency: 2.66,
		lemma: "アルプス"
	},
	{
		rank: 13464,
		frequency: 2.66,
		lemma: "粘る"
	},
	{
		rank: 13465,
		frequency: 2.66,
		lemma: "なじみ"
	},
	{
		rank: 13466,
		frequency: 2.66,
		lemma: "宇都宮"
	},
	{
		rank: 13467,
		frequency: 2.66,
		lemma: "プーケット"
	},
	{
		rank: 13468,
		frequency: 2.66,
		lemma: "諭"
	},
	{
		rank: 13469,
		frequency: 2.66,
		lemma: "ありえる"
	},
	{
		rank: 13470,
		frequency: 2.66,
		lemma: "バタ"
	},
	{
		rank: 13471,
		frequency: 2.66,
		lemma: "ところどころ"
	},
	{
		rank: 13472,
		frequency: 2.66,
		lemma: "やっかい"
	},
	{
		rank: 13473,
		frequency: 2.66,
		lemma: "道理"
	},
	{
		rank: 13474,
		frequency: 2.66,
		lemma: "喜ばしい"
	},
	{
		rank: 13475,
		frequency: 2.66,
		lemma: "出逢う"
	},
	{
		rank: 13476,
		frequency: 2.66,
		lemma: "土俵"
	},
	{
		rank: 13477,
		frequency: 2.66,
		lemma: "謙"
	},
	{
		rank: 13478,
		frequency: 2.66,
		lemma: "杜"
	},
	{
		rank: 13479,
		frequency: 2.66,
		lemma: "滑稽"
	},
	{
		rank: 13480,
		frequency: 2.66,
		lemma: "ニュートン"
	},
	{
		rank: 13481,
		frequency: 2.66,
		lemma: "敬語"
	},
	{
		rank: 13482,
		frequency: 2.65,
		lemma: "沈没"
	},
	{
		rank: 13483,
		frequency: 2.65,
		lemma: "絞り込む"
	},
	{
		rank: 13484,
		frequency: 2.65,
		lemma: "演算"
	},
	{
		rank: 13485,
		frequency: 2.65,
		lemma: "見所"
	},
	{
		rank: 13486,
		frequency: 2.65,
		lemma: "秀逸"
	},
	{
		rank: 13487,
		frequency: 2.65,
		lemma: "シンクロ"
	},
	{
		rank: 13488,
		frequency: 2.65,
		lemma: "ユナイテッド"
	},
	{
		rank: 13489,
		frequency: 2.65,
		lemma: "旧約"
	},
	{
		rank: 13490,
		frequency: 2.65,
		lemma: "シカ"
	},
	{
		rank: 13491,
		frequency: 2.65,
		lemma: "石毛"
	},
	{
		rank: 13492,
		frequency: 2.65,
		lemma: "薄暗い"
	},
	{
		rank: 13493,
		frequency: 2.65,
		lemma: "概観"
	},
	{
		rank: 13494,
		frequency: 2.65,
		lemma: "蒸留"
	},
	{
		rank: 13495,
		frequency: 2.65,
		lemma: "ラッセル"
	},
	{
		rank: 13496,
		frequency: 2.65,
		lemma: "ブルガリア"
	},
	{
		rank: 13497,
		frequency: 2.65,
		lemma: "起立"
	},
	{
		rank: 13498,
		frequency: 2.65,
		lemma: "買い求める"
	},
	{
		rank: 13499,
		frequency: 2.65,
		lemma: "伺える"
	},
	{
		rank: 13500,
		frequency: 2.65,
		lemma: "無念"
	},
	{
		rank: 13501,
		frequency: 2.65,
		lemma: "汽車"
	},
	{
		rank: 13502,
		frequency: 2.65,
		lemma: "末尾"
	},
	{
		rank: 13503,
		frequency: 2.65,
		lemma: "牙"
	},
	{
		rank: 13504,
		frequency: 2.65,
		lemma: "平井"
	},
	{
		rank: 13505,
		frequency: 2.65,
		lemma: "子犬"
	},
	{
		rank: 13506,
		frequency: 2.65,
		lemma: "家康"
	},
	{
		rank: 13507,
		frequency: 2.64,
		lemma: "多田"
	},
	{
		rank: 13508,
		frequency: 2.64,
		lemma: "見識"
	},
	{
		rank: 13509,
		frequency: 2.64,
		lemma: "おもし"
	},
	{
		rank: 13510,
		frequency: 2.64,
		lemma: "馳せる"
	},
	{
		rank: 13511,
		frequency: 2.64,
		lemma: "新郎"
	},
	{
		rank: 13512,
		frequency: 2.64,
		lemma: "目印"
	},
	{
		rank: 13513,
		frequency: 2.64,
		lemma: "キッド"
	},
	{
		rank: 13514,
		frequency: 2.64,
		lemma: "絶版"
	},
	{
		rank: 13515,
		frequency: 2.64,
		lemma: "くちる"
	},
	{
		rank: 13516,
		frequency: 2.64,
		lemma: "一段"
	},
	{
		rank: 13517,
		frequency: 2.64,
		lemma: "旧来"
	},
	{
		rank: 13518,
		frequency: 2.64,
		lemma: "海辺"
	},
	{
		rank: 13519,
		frequency: 2.64,
		lemma: "えん"
	},
	{
		rank: 13520,
		frequency: 2.64,
		lemma: "着替え"
	},
	{
		rank: 13521,
		frequency: 2.64,
		lemma: "有望"
	},
	{
		rank: 13522,
		frequency: 2.64,
		lemma: "評す"
	},
	{
		rank: 13523,
		frequency: 2.64,
		lemma: "部局"
	},
	{
		rank: 13524,
		frequency: 2.64,
		lemma: "アダプタ"
	},
	{
		rank: 13525,
		frequency: 2.64,
		lemma: "まずまず"
	},
	{
		rank: 13526,
		frequency: 2.64,
		lemma: "槍"
	},
	{
		rank: 13527,
		frequency: 2.64,
		lemma: "偽る"
	},
	{
		rank: 13528,
		frequency: 2.64,
		lemma: "追随"
	},
	{
		rank: 13529,
		frequency: 2.64,
		lemma: "下請け"
	},
	{
		rank: 13530,
		frequency: 2.64,
		lemma: "なんで"
	},
	{
		rank: 13531,
		frequency: 2.64,
		lemma: "運勢"
	},
	{
		rank: 13532,
		frequency: 2.64,
		lemma: "郵貯"
	},
	{
		rank: 13533,
		frequency: 2.64,
		lemma: "私鉄"
	},
	{
		rank: 13534,
		frequency: 2.64,
		lemma: "相棒"
	},
	{
		rank: 13535,
		frequency: 2.64,
		lemma: "囲碁"
	},
	{
		rank: 13536,
		frequency: 2.64,
		lemma: "番地"
	},
	{
		rank: 13537,
		frequency: 2.64,
		lemma: "在来"
	},
	{
		rank: 13538,
		frequency: 2.64,
		lemma: "男児"
	},
	{
		rank: 13539,
		frequency: 2.64,
		lemma: "歌える"
	},
	{
		rank: 13540,
		frequency: 2.64,
		lemma: "妃"
	},
	{
		rank: 13541,
		frequency: 2.64,
		lemma: "飢える"
	},
	{
		rank: 13542,
		frequency: 2.64,
		lemma: "平然と"
	},
	{
		rank: 13543,
		frequency: 2.63,
		lemma: "ゴマ"
	},
	{
		rank: 13544,
		frequency: 2.63,
		lemma: "祭典"
	},
	{
		rank: 13545,
		frequency: 2.63,
		lemma: "さきほど"
	},
	{
		rank: 13546,
		frequency: 2.63,
		lemma: "離島"
	},
	{
		rank: 13547,
		frequency: 2.63,
		lemma: "概略"
	},
	{
		rank: 13548,
		frequency: 2.63,
		lemma: "デブ"
	},
	{
		rank: 13549,
		frequency: 2.63,
		lemma: "かんがみる"
	},
	{
		rank: 13550,
		frequency: 2.63,
		lemma: "発病"
	},
	{
		rank: 13551,
		frequency: 2.63,
		lemma: "竣工"
	},
	{
		rank: 13552,
		frequency: 2.63,
		lemma: "両論"
	},
	{
		rank: 13553,
		frequency: 2.63,
		lemma: "司教"
	},
	{
		rank: 13554,
		frequency: 2.62,
		lemma: "アレン"
	},
	{
		rank: 13555,
		frequency: 2.62,
		lemma: "坂道"
	},
	{
		rank: 13556,
		frequency: 2.62,
		lemma: "勝敗"
	},
	{
		rank: 13557,
		frequency: 2.62,
		lemma: "縮める"
	},
	{
		rank: 13558,
		frequency: 2.62,
		lemma: "ｅ"
	},
	{
		rank: 13559,
		frequency: 2.62,
		lemma: "野原"
	},
	{
		rank: 13560,
		frequency: 2.62,
		lemma: "感慨"
	},
	{
		rank: 13561,
		frequency: 2.62,
		lemma: "無制限"
	},
	{
		rank: 13562,
		frequency: 2.62,
		lemma: "此処"
	},
	{
		rank: 13563,
		frequency: 2.62,
		lemma: "田植え"
	},
	{
		rank: 13564,
		frequency: 2.62,
		lemma: "係員"
	},
	{
		rank: 13565,
		frequency: 2.62,
		lemma: "再考"
	},
	{
		rank: 13566,
		frequency: 2.62,
		lemma: "スコット"
	},
	{
		rank: 13567,
		frequency: 2.62,
		lemma: "拍車"
	},
	{
		rank: 13568,
		frequency: 2.62,
		lemma: "いきさつ"
	},
	{
		rank: 13569,
		frequency: 2.62,
		lemma: "インサイド"
	},
	{
		rank: 13570,
		frequency: 2.62,
		lemma: "償う"
	},
	{
		rank: 13571,
		frequency: 2.62,
		lemma: "パートナーシップ"
	},
	{
		rank: 13572,
		frequency: 2.62,
		lemma: "留"
	},
	{
		rank: 13573,
		frequency: 2.62,
		lemma: "概算"
	},
	{
		rank: 13574,
		frequency: 2.62,
		lemma: "かお"
	},
	{
		rank: 13575,
		frequency: 2.62,
		lemma: "奥行き"
	},
	{
		rank: 13576,
		frequency: 2.62,
		lemma: "キュート"
	},
	{
		rank: 13577,
		frequency: 2.62,
		lemma: "大輔"
	},
	{
		rank: 13578,
		frequency: 2.62,
		lemma: "ダライ"
	},
	{
		rank: 13579,
		frequency: 2.62,
		lemma: "中西"
	},
	{
		rank: 13580,
		frequency: 2.62,
		lemma: "四方"
	},
	{
		rank: 13581,
		frequency: 2.62,
		lemma: "人命"
	},
	{
		rank: 13582,
		frequency: 2.62,
		lemma: "振舞う"
	},
	{
		rank: 13583,
		frequency: 2.62,
		lemma: "集結"
	},
	{
		rank: 13584,
		frequency: 2.62,
		lemma: "人身"
	},
	{
		rank: 13585,
		frequency: 2.62,
		lemma: "ロイター"
	},
	{
		rank: 13586,
		frequency: 2.62,
		lemma: "別物"
	},
	{
		rank: 13587,
		frequency: 2.62,
		lemma: "遠距離"
	},
	{
		rank: 13588,
		frequency: 2.62,
		lemma: "のっとる"
	},
	{
		rank: 13589,
		frequency: 2.62,
		lemma: "腹筋"
	},
	{
		rank: 13590,
		frequency: 2.62,
		lemma: "林業"
	},
	{
		rank: 13591,
		frequency: 2.62,
		lemma: "耕作"
	},
	{
		rank: 13592,
		frequency: 2.62,
		lemma: "北上"
	},
	{
		rank: 13593,
		frequency: 2.62,
		lemma: "起"
	},
	{
		rank: 13594,
		frequency: 2.62,
		lemma: "テラ"
	},
	{
		rank: 13595,
		frequency: 2.62,
		lemma: "位置付け"
	},
	{
		rank: 13596,
		frequency: 2.62,
		lemma: "現像"
	},
	{
		rank: 13597,
		frequency: 2.62,
		lemma: "シイ"
	},
	{
		rank: 13598,
		frequency: 2.62,
		lemma: "用法"
	},
	{
		rank: 13599,
		frequency: 2.62,
		lemma: "論評"
	},
	{
		rank: 13600,
		frequency: 2.61,
		lemma: "クアラルンプール"
	},
	{
		rank: 13601,
		frequency: 2.61,
		lemma: "銃撃"
	},
	{
		rank: 13602,
		frequency: 2.61,
		lemma: "切に"
	},
	{
		rank: 13603,
		frequency: 2.61,
		lemma: "引き返す"
	},
	{
		rank: 13604,
		frequency: 2.61,
		lemma: "汚職"
	},
	{
		rank: 13605,
		frequency: 2.61,
		lemma: "台無し"
	},
	{
		rank: 13606,
		frequency: 2.61,
		lemma: "異端"
	},
	{
		rank: 13607,
		frequency: 2.61,
		lemma: "クイーン"
	},
	{
		rank: 13608,
		frequency: 2.61,
		lemma: "脳死"
	},
	{
		rank: 13609,
		frequency: 2.61,
		lemma: "うんちく"
	},
	{
		rank: 13610,
		frequency: 2.61,
		lemma: "自白"
	},
	{
		rank: 13611,
		frequency: 2.61,
		lemma: "くわしい"
	},
	{
		rank: 13612,
		frequency: 2.61,
		lemma: "退治"
	},
	{
		rank: 13613,
		frequency: 2.61,
		lemma: "引き寄せる"
	},
	{
		rank: 13614,
		frequency: 2.61,
		lemma: "ラジ"
	},
	{
		rank: 13615,
		frequency: 2.61,
		lemma: "大口"
	},
	{
		rank: 13616,
		frequency: 2.61,
		lemma: "名声"
	},
	{
		rank: 13617,
		frequency: 2.61,
		lemma: "コトバ"
	},
	{
		rank: 13618,
		frequency: 2.61,
		lemma: "仮面ライダー"
	},
	{
		rank: 13619,
		frequency: 2.61,
		lemma: "宴"
	},
	{
		rank: 13620,
		frequency: 2.61,
		lemma: "求職"
	},
	{
		rank: 13621,
		frequency: 2.61,
		lemma: "一安心"
	},
	{
		rank: 13622,
		frequency: 2.61,
		lemma: "親近"
	},
	{
		rank: 13623,
		frequency: 2.61,
		lemma: "右上"
	},
	{
		rank: 13624,
		frequency: 2.61,
		lemma: "都知事"
	},
	{
		rank: 13625,
		frequency: 2.61,
		lemma: "永続"
	},
	{
		rank: 13626,
		frequency: 2.61,
		lemma: "ミック"
	},
	{
		rank: 13627,
		frequency: 2.61,
		lemma: "弾む"
	},
	{
		rank: 13628,
		frequency: 2.61,
		lemma: "軽快"
	},
	{
		rank: 13629,
		frequency: 2.61,
		lemma: "くだり"
	},
	{
		rank: 13630,
		frequency: 2.61,
		lemma: "開館"
	},
	{
		rank: 13631,
		frequency: 2.61,
		lemma: "和子"
	},
	{
		rank: 13632,
		frequency: 2.6,
		lemma: "えび"
	},
	{
		rank: 13633,
		frequency: 2.6,
		lemma: "新薬"
	},
	{
		rank: 13634,
		frequency: 2.6,
		lemma: "内政"
	},
	{
		rank: 13635,
		frequency: 2.6,
		lemma: "代名詞"
	},
	{
		rank: 13636,
		frequency: 2.6,
		lemma: "復刻"
	},
	{
		rank: 13637,
		frequency: 2.6,
		lemma: "若林"
	},
	{
		rank: 13638,
		frequency: 2.6,
		lemma: "といふ"
	},
	{
		rank: 13639,
		frequency: 2.6,
		lemma: "小切手"
	},
	{
		rank: 13640,
		frequency: 2.6,
		lemma: "後進"
	},
	{
		rank: 13641,
		frequency: 2.6,
		lemma: "神戸大学"
	},
	{
		rank: 13642,
		frequency: 2.6,
		lemma: "上原"
	},
	{
		rank: 13643,
		frequency: 2.6,
		lemma: "分化"
	},
	{
		rank: 13644,
		frequency: 2.6,
		lemma: "ほっとく"
	},
	{
		rank: 13645,
		frequency: 2.6,
		lemma: "特派"
	},
	{
		rank: 13646,
		frequency: 2.6,
		lemma: "テッド"
	},
	{
		rank: 13647,
		frequency: 2.6,
		lemma: "ストリーム"
	},
	{
		rank: 13648,
		frequency: 2.6,
		lemma: "薪"
	},
	{
		rank: 13649,
		frequency: 2.6,
		lemma: "ぼん"
	},
	{
		rank: 13650,
		frequency: 2.6,
		lemma: "ぶす"
	},
	{
		rank: 13651,
		frequency: 2.6,
		lemma: "疎通"
	},
	{
		rank: 13652,
		frequency: 2.6,
		lemma: "挙がる"
	},
	{
		rank: 13653,
		frequency: 2.6,
		lemma: "防水"
	},
	{
		rank: 13654,
		frequency: 2.6,
		lemma: "成就"
	},
	{
		rank: 13655,
		frequency: 2.6,
		lemma: "売り手"
	},
	{
		rank: 13656,
		frequency: 2.6,
		lemma: "浦"
	},
	{
		rank: 13657,
		frequency: 2.6,
		lemma: "アスキー"
	},
	{
		rank: 13658,
		frequency: 2.6,
		lemma: "一元"
	},
	{
		rank: 13659,
		frequency: 2.6,
		lemma: "融通"
	},
	{
		rank: 13660,
		frequency: 2.6,
		lemma: "ジェリー"
	},
	{
		rank: 13661,
		frequency: 2.6,
		lemma: "怯える"
	},
	{
		rank: 13662,
		frequency: 2.6,
		lemma: "愛称"
	},
	{
		rank: 13663,
		frequency: 2.6,
		lemma: "定め"
	},
	{
		rank: 13664,
		frequency: 2.6,
		lemma: "インターンシップ"
	},
	{
		rank: 13665,
		frequency: 2.6,
		lemma: "議案"
	},
	{
		rank: 13666,
		frequency: 2.6,
		lemma: "察知"
	},
	{
		rank: 13667,
		frequency: 2.6,
		lemma: "音読"
	},
	{
		rank: 13668,
		frequency: 2.6,
		lemma: "山道"
	},
	{
		rank: 13669,
		frequency: 2.6,
		lemma: "卑怯"
	},
	{
		rank: 13670,
		frequency: 2.6,
		lemma: "本案"
	},
	{
		rank: 13671,
		frequency: 2.6,
		lemma: "内陸"
	},
	{
		rank: 13672,
		frequency: 2.59,
		lemma: "金髪"
	},
	{
		rank: 13673,
		frequency: 2.59,
		lemma: "お嬢さん"
	},
	{
		rank: 13674,
		frequency: 2.59,
		lemma: "夏場"
	},
	{
		rank: 13675,
		frequency: 2.59,
		lemma: "諜報"
	},
	{
		rank: 13676,
		frequency: 2.59,
		lemma: "束縛"
	},
	{
		rank: 13677,
		frequency: 2.59,
		lemma: "後々"
	},
	{
		rank: 13678,
		frequency: 2.59,
		lemma: "漁船"
	},
	{
		rank: 13679,
		frequency: 2.59,
		lemma: "付着"
	},
	{
		rank: 13680,
		frequency: 2.59,
		lemma: "田原"
	},
	{
		rank: 13681,
		frequency: 2.59,
		lemma: "皇"
	},
	{
		rank: 13682,
		frequency: 2.59,
		lemma: "人為"
	},
	{
		rank: 13683,
		frequency: 2.59,
		lemma: "賭け"
	},
	{
		rank: 13684,
		frequency: 2.59,
		lemma: "デイリー"
	},
	{
		rank: 13685,
		frequency: 2.59,
		lemma: "図表"
	},
	{
		rank: 13686,
		frequency: 2.59,
		lemma: "原宿"
	},
	{
		rank: 13687,
		frequency: 2.59,
		lemma: "田園"
	},
	{
		rank: 13688,
		frequency: 2.59,
		lemma: "便乗"
	},
	{
		rank: 13689,
		frequency: 2.59,
		lemma: "双方向"
	},
	{
		rank: 13690,
		frequency: 2.59,
		lemma: "先取り"
	},
	{
		rank: 13691,
		frequency: 2.59,
		lemma: "逃げ"
	},
	{
		rank: 13692,
		frequency: 2.59,
		lemma: "不運"
	},
	{
		rank: 13693,
		frequency: 2.59,
		lemma: "下請"
	},
	{
		rank: 13694,
		frequency: 2.59,
		lemma: "レフ"
	},
	{
		rank: 13695,
		frequency: 2.59,
		lemma: "対岸"
	},
	{
		rank: 13696,
		frequency: 2.59,
		lemma: "本心"
	},
	{
		rank: 13697,
		frequency: 2.58,
		lemma: "件名"
	},
	{
		rank: 13698,
		frequency: 2.58,
		lemma: "口語"
	},
	{
		rank: 13699,
		frequency: 2.58,
		lemma: "伊丹"
	},
	{
		rank: 13700,
		frequency: 2.58,
		lemma: "吹き込む"
	},
	{
		rank: 13701,
		frequency: 2.58,
		lemma: "借家"
	},
	{
		rank: 13702,
		frequency: 2.58,
		lemma: "えい"
	},
	{
		rank: 13703,
		frequency: 2.58,
		lemma: "絶品"
	},
	{
		rank: 13704,
		frequency: 2.58,
		lemma: "タイムリー"
	},
	{
		rank: 13705,
		frequency: 2.58,
		lemma: "胴"
	},
	{
		rank: 13706,
		frequency: 2.58,
		lemma: "わな"
	},
	{
		rank: 13707,
		frequency: 2.58,
		lemma: "プロレタリア"
	},
	{
		rank: 13708,
		frequency: 2.58,
		lemma: "楽屋"
	},
	{
		rank: 13709,
		frequency: 2.58,
		lemma: "能動"
	},
	{
		rank: 13710,
		frequency: 2.58,
		lemma: "つかまる"
	},
	{
		rank: 13711,
		frequency: 2.58,
		lemma: "佳"
	},
	{
		rank: 13712,
		frequency: 2.58,
		lemma: "包囲"
	},
	{
		rank: 13713,
		frequency: 2.58,
		lemma: "可笑しい"
	},
	{
		rank: 13714,
		frequency: 2.58,
		lemma: "センタ"
	},
	{
		rank: 13715,
		frequency: 2.58,
		lemma: "一人前"
	},
	{
		rank: 13716,
		frequency: 2.58,
		lemma: "コントラスト"
	},
	{
		rank: 13717,
		frequency: 2.58,
		lemma: "怪しげ"
	},
	{
		rank: 13718,
		frequency: 2.58,
		lemma: "挙式"
	},
	{
		rank: 13719,
		frequency: 2.58,
		lemma: "援護"
	},
	{
		rank: 13720,
		frequency: 2.58,
		lemma: "落選"
	},
	{
		rank: 13721,
		frequency: 2.58,
		lemma: "華人"
	},
	{
		rank: 13722,
		frequency: 2.58,
		lemma: "空襲"
	},
	{
		rank: 13723,
		frequency: 2.58,
		lemma: "公言"
	},
	{
		rank: 13724,
		frequency: 2.58,
		lemma: "いとう"
	},
	{
		rank: 13725,
		frequency: 2.58,
		lemma: "次いで"
	},
	{
		rank: 13726,
		frequency: 2.58,
		lemma: "前衛"
	},
	{
		rank: 13727,
		frequency: 2.58,
		lemma: "惑わす"
	},
	{
		rank: 13728,
		frequency: 2.58,
		lemma: "扱える"
	},
	{
		rank: 13729,
		frequency: 2.58,
		lemma: "一因"
	},
	{
		rank: 13730,
		frequency: 2.57,
		lemma: "用心"
	},
	{
		rank: 13731,
		frequency: 2.57,
		lemma: "生き抜く"
	},
	{
		rank: 13732,
		frequency: 2.57,
		lemma: "利率"
	},
	{
		rank: 13733,
		frequency: 2.57,
		lemma: "これだけ"
	},
	{
		rank: 13734,
		frequency: 2.57,
		lemma: "赤色"
	},
	{
		rank: 13735,
		frequency: 2.57,
		lemma: "器官"
	},
	{
		rank: 13736,
		frequency: 2.57,
		lemma: "お粗末"
	},
	{
		rank: 13737,
		frequency: 2.57,
		lemma: "ＶＳ"
	},
	{
		rank: 13738,
		frequency: 2.57,
		lemma: "長岡"
	},
	{
		rank: 13739,
		frequency: 2.57,
		lemma: "兵力"
	},
	{
		rank: 13740,
		frequency: 2.57,
		lemma: "天地"
	},
	{
		rank: 13741,
		frequency: 2.57,
		lemma: "有価"
	},
	{
		rank: 13742,
		frequency: 2.57,
		lemma: "マフィア"
	},
	{
		rank: 13743,
		frequency: 2.57,
		lemma: "応急"
	},
	{
		rank: 13744,
		frequency: 2.57,
		lemma: "武藤"
	},
	{
		rank: 13745,
		frequency: 2.57,
		lemma: "性欲"
	},
	{
		rank: 13746,
		frequency: 2.57,
		lemma: "姪"
	},
	{
		rank: 13747,
		frequency: 2.57,
		lemma: "たのしい"
	},
	{
		rank: 13748,
		frequency: 2.57,
		lemma: "元素"
	},
	{
		rank: 13749,
		frequency: 2.57,
		lemma: "表象"
	},
	{
		rank: 13750,
		frequency: 2.57,
		lemma: "延べ"
	},
	{
		rank: 13751,
		frequency: 2.57,
		lemma: "ねずみ"
	},
	{
		rank: 13752,
		frequency: 2.56,
		lemma: "非公式"
	},
	{
		rank: 13753,
		frequency: 2.56,
		lemma: "ドンドン"
	},
	{
		rank: 13754,
		frequency: 2.56,
		lemma: "動き回る"
	},
	{
		rank: 13755,
		frequency: 2.56,
		lemma: "寅"
	},
	{
		rank: 13756,
		frequency: 2.56,
		lemma: "武蔵野"
	},
	{
		rank: 13757,
		frequency: 2.56,
		lemma: "イヌ"
	},
	{
		rank: 13758,
		frequency: 2.56,
		lemma: "愛しい"
	},
	{
		rank: 13759,
		frequency: 2.56,
		lemma: "召集"
	},
	{
		rank: 13760,
		frequency: 2.56,
		lemma: "最古"
	},
	{
		rank: 13761,
		frequency: 2.56,
		lemma: "管内"
	},
	{
		rank: 13762,
		frequency: 2.56,
		lemma: "王室"
	},
	{
		rank: 13763,
		frequency: 2.56,
		lemma: "トウモロコシ"
	},
	{
		rank: 13764,
		frequency: 2.56,
		lemma: "販促"
	},
	{
		rank: 13765,
		frequency: 2.56,
		lemma: "お便り"
	},
	{
		rank: 13766,
		frequency: 2.56,
		lemma: "直ぐ"
	},
	{
		rank: 13767,
		frequency: 2.56,
		lemma: "賀"
	},
	{
		rank: 13768,
		frequency: 2.56,
		lemma: "片付け"
	},
	{
		rank: 13769,
		frequency: 2.56,
		lemma: "揃い"
	},
	{
		rank: 13770,
		frequency: 2.56,
		lemma: "取り合う"
	},
	{
		rank: 13771,
		frequency: 2.56,
		lemma: "アフター"
	},
	{
		rank: 13772,
		frequency: 2.56,
		lemma: "バード"
	},
	{
		rank: 13773,
		frequency: 2.56,
		lemma: "画一"
	},
	{
		rank: 13774,
		frequency: 2.56,
		lemma: "挙動"
	},
	{
		rank: 13775,
		frequency: 2.56,
		lemma: "艦長"
	},
	{
		rank: 13776,
		frequency: 2.56,
		lemma: "直し"
	},
	{
		rank: 13777,
		frequency: 2.56,
		lemma: "ハイブリッド"
	},
	{
		rank: 13778,
		frequency: 2.56,
		lemma: "渡し"
	},
	{
		rank: 13779,
		frequency: 2.56,
		lemma: "大通り"
	},
	{
		rank: 13780,
		frequency: 2.56,
		lemma: "豪州"
	},
	{
		rank: 13781,
		frequency: 2.56,
		lemma: "没収"
	},
	{
		rank: 13782,
		frequency: 2.56,
		lemma: "日本テレビ"
	},
	{
		rank: 13783,
		frequency: 2.56,
		lemma: "双"
	},
	{
		rank: 13784,
		frequency: 2.56,
		lemma: "マーティン"
	},
	{
		rank: 13785,
		frequency: 2.56,
		lemma: "ハチ"
	},
	{
		rank: 13786,
		frequency: 2.56,
		lemma: "加味"
	},
	{
		rank: 13787,
		frequency: 2.56,
		lemma: "横行"
	},
	{
		rank: 13788,
		frequency: 2.56,
		lemma: "誇張"
	},
	{
		rank: 13789,
		frequency: 2.56,
		lemma: "頒布"
	},
	{
		rank: 13790,
		frequency: 2.56,
		lemma: "初演"
	},
	{
		rank: 13791,
		frequency: 2.56,
		lemma: "系譜"
	},
	{
		rank: 13792,
		frequency: 2.56,
		lemma: "問答"
	},
	{
		rank: 13793,
		frequency: 2.56,
		lemma: "マイペース"
	},
	{
		rank: 13794,
		frequency: 2.56,
		lemma: "円形"
	},
	{
		rank: 13795,
		frequency: 2.56,
		lemma: "書き直す"
	},
	{
		rank: 13796,
		frequency: 2.56,
		lemma: "ことわざ"
	},
	{
		rank: 13797,
		frequency: 2.56,
		lemma: "しがみつく"
	},
	{
		rank: 13798,
		frequency: 2.55,
		lemma: "優勢"
	},
	{
		rank: 13799,
		frequency: 2.55,
		lemma: "古く"
	},
	{
		rank: 13800,
		frequency: 2.55,
		lemma: "レーン"
	},
	{
		rank: 13801,
		frequency: 2.55,
		lemma: "竹田"
	},
	{
		rank: 13802,
		frequency: 2.55,
		lemma: "ユネスコ"
	},
	{
		rank: 13803,
		frequency: 2.55,
		lemma: "あそぶ"
	},
	{
		rank: 13804,
		frequency: 2.55,
		lemma: "ハンセン病"
	},
	{
		rank: 13805,
		frequency: 2.55,
		lemma: "菊池"
	},
	{
		rank: 13806,
		frequency: 2.55,
		lemma: "ふらふら"
	},
	{
		rank: 13807,
		frequency: 2.55,
		lemma: "伯爵"
	},
	{
		rank: 13808,
		frequency: 2.55,
		lemma: "内職"
	},
	{
		rank: 13809,
		frequency: 2.55,
		lemma: "要塞"
	},
	{
		rank: 13810,
		frequency: 2.55,
		lemma: "所蔵"
	},
	{
		rank: 13811,
		frequency: 2.55,
		lemma: "立ち会う"
	},
	{
		rank: 13812,
		frequency: 2.55,
		lemma: "年頃"
	},
	{
		rank: 13813,
		frequency: 2.55,
		lemma: "足首"
	},
	{
		rank: 13814,
		frequency: 2.55,
		lemma: "上告"
	},
	{
		rank: 13815,
		frequency: 2.55,
		lemma: "農林水産省"
	},
	{
		rank: 13816,
		frequency: 2.55,
		lemma: "ハンカチ"
	},
	{
		rank: 13817,
		frequency: 2.55,
		lemma: "亀田"
	},
	{
		rank: 13818,
		frequency: 2.55,
		lemma: "通り抜ける"
	},
	{
		rank: 13819,
		frequency: 2.55,
		lemma: "を以て"
	},
	{
		rank: 13820,
		frequency: 2.55,
		lemma: "講和"
	},
	{
		rank: 13821,
		frequency: 2.55,
		lemma: "反米"
	},
	{
		rank: 13822,
		frequency: 2.55,
		lemma: "屋内"
	},
	{
		rank: 13823,
		frequency: 2.54,
		lemma: "生理学"
	},
	{
		rank: 13824,
		frequency: 2.54,
		lemma: "英訳"
	},
	{
		rank: 13825,
		frequency: 2.54,
		lemma: "文庫本"
	},
	{
		rank: 13826,
		frequency: 2.54,
		lemma: "イラ"
	},
	{
		rank: 13827,
		frequency: 2.54,
		lemma: "くるむ"
	},
	{
		rank: 13828,
		frequency: 2.54,
		lemma: "バラード"
	},
	{
		rank: 13829,
		frequency: 2.54,
		lemma: "探究"
	},
	{
		rank: 13830,
		frequency: 2.54,
		lemma: "か国"
	},
	{
		rank: 13831,
		frequency: 2.54,
		lemma: "滑らか"
	},
	{
		rank: 13832,
		frequency: 2.54,
		lemma: "察"
	},
	{
		rank: 13833,
		frequency: 2.54,
		lemma: "五十嵐"
	},
	{
		rank: 13834,
		frequency: 2.54,
		lemma: "監禁"
	},
	{
		rank: 13835,
		frequency: 2.54,
		lemma: "下品"
	},
	{
		rank: 13836,
		frequency: 2.54,
		lemma: "ＭＦ"
	},
	{
		rank: 13837,
		frequency: 2.54,
		lemma: "釧路"
	},
	{
		rank: 13838,
		frequency: 2.54,
		lemma: "使い捨て"
	},
	{
		rank: 13839,
		frequency: 2.54,
		lemma: "ワンピース"
	},
	{
		rank: 13840,
		frequency: 2.54,
		lemma: "次女"
	},
	{
		rank: 13841,
		frequency: 2.54,
		lemma: "ディス"
	},
	{
		rank: 13842,
		frequency: 2.54,
		lemma: "布告"
	},
	{
		rank: 13843,
		frequency: 2.54,
		lemma: "持ち"
	},
	{
		rank: 13844,
		frequency: 2.54,
		lemma: "車種"
	},
	{
		rank: 13845,
		frequency: 2.54,
		lemma: "カトリック教"
	},
	{
		rank: 13846,
		frequency: 2.54,
		lemma: "エド"
	},
	{
		rank: 13847,
		frequency: 2.54,
		lemma: "吉本"
	},
	{
		rank: 13848,
		frequency: 2.54,
		lemma: "換金"
	},
	{
		rank: 13849,
		frequency: 2.54,
		lemma: "マリオ"
	},
	{
		rank: 13850,
		frequency: 2.54,
		lemma: "あやしい"
	},
	{
		rank: 13851,
		frequency: 2.54,
		lemma: "点字"
	},
	{
		rank: 13852,
		frequency: 2.54,
		lemma: "かぼちゃ"
	},
	{
		rank: 13853,
		frequency: 2.54,
		lemma: "日テレ"
	},
	{
		rank: 13854,
		frequency: 2.54,
		lemma: "トホホ"
	},
	{
		rank: 13855,
		frequency: 2.54,
		lemma: "ふるまう"
	},
	{
		rank: 13856,
		frequency: 2.54,
		lemma: "大自然"
	},
	{
		rank: 13857,
		frequency: 2.54,
		lemma: "創始"
	},
	{
		rank: 13858,
		frequency: 2.54,
		lemma: "近付く"
	},
	{
		rank: 13859,
		frequency: 2.54,
		lemma: "誤認"
	},
	{
		rank: 13860,
		frequency: 2.54,
		lemma: "不合格"
	},
	{
		rank: 13861,
		frequency: 2.54,
		lemma: "ジャクソン"
	},
	{
		rank: 13862,
		frequency: 2.54,
		lemma: "参列"
	},
	{
		rank: 13863,
		frequency: 2.53,
		lemma: "生年月日"
	},
	{
		rank: 13864,
		frequency: 2.53,
		lemma: "呼び名"
	},
	{
		rank: 13865,
		frequency: 2.53,
		lemma: "このほど"
	},
	{
		rank: 13866,
		frequency: 2.53,
		lemma: "アサ"
	},
	{
		rank: 13867,
		frequency: 2.53,
		lemma: "直子"
	},
	{
		rank: 13868,
		frequency: 2.53,
		lemma: "とかく"
	},
	{
		rank: 13869,
		frequency: 2.53,
		lemma: "恥じる"
	},
	{
		rank: 13870,
		frequency: 2.53,
		lemma: "浅田"
	},
	{
		rank: 13871,
		frequency: 2.53,
		lemma: "マドリード"
	},
	{
		rank: 13872,
		frequency: 2.53,
		lemma: "既得"
	},
	{
		rank: 13873,
		frequency: 2.53,
		lemma: "乗務"
	},
	{
		rank: 13874,
		frequency: 2.53,
		lemma: "ざま"
	},
	{
		rank: 13875,
		frequency: 2.53,
		lemma: "沸騰"
	},
	{
		rank: 13876,
		frequency: 2.53,
		lemma: "ウイスキー"
	},
	{
		rank: 13877,
		frequency: 2.53,
		lemma: "タバ"
	},
	{
		rank: 13878,
		frequency: 2.53,
		lemma: "エキスパート"
	},
	{
		rank: 13879,
		frequency: 2.53,
		lemma: "富豪"
	},
	{
		rank: 13880,
		frequency: 2.53,
		lemma: "パット"
	},
	{
		rank: 13881,
		frequency: 2.53,
		lemma: "新婦"
	},
	{
		rank: 13882,
		frequency: 2.53,
		lemma: "根気"
	},
	{
		rank: 13883,
		frequency: 2.53,
		lemma: "サウナ"
	},
	{
		rank: 13884,
		frequency: 2.53,
		lemma: "日本経済新聞"
	},
	{
		rank: 13885,
		frequency: 2.53,
		lemma: "仮処分"
	},
	{
		rank: 13886,
		frequency: 2.53,
		lemma: "ソル"
	},
	{
		rank: 13887,
		frequency: 2.53,
		lemma: "虫歯"
	},
	{
		rank: 13888,
		frequency: 2.53,
		lemma: "大連"
	},
	{
		rank: 13889,
		frequency: 2.53,
		lemma: "煮込む"
	},
	{
		rank: 13890,
		frequency: 2.53,
		lemma: "力士"
	},
	{
		rank: 13891,
		frequency: 2.53,
		lemma: "代弁"
	},
	{
		rank: 13892,
		frequency: 2.53,
		lemma: "欠"
	},
	{
		rank: 13893,
		frequency: 2.53,
		lemma: "弥"
	},
	{
		rank: 13894,
		frequency: 2.52,
		lemma: "代用"
	},
	{
		rank: 13895,
		frequency: 2.52,
		lemma: "ふんだんに"
	},
	{
		rank: 13896,
		frequency: 2.52,
		lemma: "真似る"
	},
	{
		rank: 13897,
		frequency: 2.52,
		lemma: "大雑把"
	},
	{
		rank: 13898,
		frequency: 2.52,
		lemma: "キリン"
	},
	{
		rank: 13899,
		frequency: 2.52,
		lemma: "かなえる"
	},
	{
		rank: 13900,
		frequency: 2.52,
		lemma: "留守番"
	},
	{
		rank: 13901,
		frequency: 2.52,
		lemma: "不動"
	},
	{
		rank: 13902,
		frequency: 2.52,
		lemma: "川端"
	},
	{
		rank: 13903,
		frequency: 2.52,
		lemma: "想"
	},
	{
		rank: 13904,
		frequency: 2.52,
		lemma: "秀雄"
	},
	{
		rank: 13905,
		frequency: 2.52,
		lemma: "境遇"
	},
	{
		rank: 13906,
		frequency: 2.52,
		lemma: "北海"
	},
	{
		rank: 13907,
		frequency: 2.52,
		lemma: "さぼる"
	},
	{
		rank: 13908,
		frequency: 2.52,
		lemma: "混入"
	},
	{
		rank: 13909,
		frequency: 2.52,
		lemma: "独学"
	},
	{
		rank: 13910,
		frequency: 2.52,
		lemma: "狐"
	},
	{
		rank: 13911,
		frequency: 2.52,
		lemma: "意匠"
	},
	{
		rank: 13912,
		frequency: 2.52,
		lemma: "ウルトラマン"
	},
	{
		rank: 13913,
		frequency: 2.52,
		lemma: "歪曲"
	},
	{
		rank: 13914,
		frequency: 2.52,
		lemma: "水害"
	},
	{
		rank: 13915,
		frequency: 2.52,
		lemma: "撫でる"
	},
	{
		rank: 13916,
		frequency: 2.52,
		lemma: "逃走"
	},
	{
		rank: 13917,
		frequency: 2.52,
		lemma: "採集"
	},
	{
		rank: 13918,
		frequency: 2.52,
		lemma: "まっとう"
	},
	{
		rank: 13919,
		frequency: 2.52,
		lemma: "せしめる"
	},
	{
		rank: 13920,
		frequency: 2.52,
		lemma: "阪"
	},
	{
		rank: 13921,
		frequency: 2.52,
		lemma: "かれこれ"
	},
	{
		rank: 13922,
		frequency: 2.52,
		lemma: "カラフル"
	},
	{
		rank: 13923,
		frequency: 2.52,
		lemma: "繁"
	},
	{
		rank: 13924,
		frequency: 2.52,
		lemma: "流布"
	},
	{
		rank: 13925,
		frequency: 2.51,
		lemma: "ワイヤー"
	},
	{
		rank: 13926,
		frequency: 2.51,
		lemma: "磁石"
	},
	{
		rank: 13927,
		frequency: 2.51,
		lemma: "緩める"
	},
	{
		rank: 13928,
		frequency: 2.51,
		lemma: "祈願"
	},
	{
		rank: 13929,
		frequency: 2.51,
		lemma: "不器用"
	},
	{
		rank: 13930,
		frequency: 2.51,
		lemma: "ラオス"
	},
	{
		rank: 13931,
		frequency: 2.51,
		lemma: "ハローワーク"
	},
	{
		rank: 13932,
		frequency: 2.51,
		lemma: "溜める"
	},
	{
		rank: 13933,
		frequency: 2.51,
		lemma: "ファイア"
	},
	{
		rank: 13934,
		frequency: 2.51,
		lemma: "調教"
	},
	{
		rank: 13935,
		frequency: 2.51,
		lemma: "大津"
	},
	{
		rank: 13936,
		frequency: 2.51,
		lemma: "着々と"
	},
	{
		rank: 13937,
		frequency: 2.51,
		lemma: "ひきこもる"
	},
	{
		rank: 13938,
		frequency: 2.51,
		lemma: "ナレーション"
	},
	{
		rank: 13939,
		frequency: 2.51,
		lemma: "塚本"
	},
	{
		rank: 13940,
		frequency: 2.51,
		lemma: "スチール"
	},
	{
		rank: 13941,
		frequency: 2.51,
		lemma: "邪悪"
	},
	{
		rank: 13942,
		frequency: 2.51,
		lemma: "陰陽"
	},
	{
		rank: 13943,
		frequency: 2.51,
		lemma: "台場"
	},
	{
		rank: 13944,
		frequency: 2.51,
		lemma: "ビビる"
	},
	{
		rank: 13945,
		frequency: 2.51,
		lemma: "健常"
	},
	{
		rank: 13946,
		frequency: 2.51,
		lemma: "未経験"
	},
	{
		rank: 13947,
		frequency: 2.51,
		lemma: "ジュネーブ"
	},
	{
		rank: 13948,
		frequency: 2.51,
		lemma: "皇位"
	},
	{
		rank: 13949,
		frequency: 2.51,
		lemma: "いふ"
	},
	{
		rank: 13950,
		frequency: 2.51,
		lemma: "綱領"
	},
	{
		rank: 13951,
		frequency: 2.51,
		lemma: "豆乳"
	},
	{
		rank: 13952,
		frequency: 2.51,
		lemma: "仲良い"
	},
	{
		rank: 13953,
		frequency: 2.51,
		lemma: "リフト"
	},
	{
		rank: 13954,
		frequency: 2.51,
		lemma: "汲む"
	},
	{
		rank: 13955,
		frequency: 2.51,
		lemma: "河合"
	},
	{
		rank: 13956,
		frequency: 2.51,
		lemma: "劉"
	},
	{
		rank: 13957,
		frequency: 2.51,
		lemma: "押える"
	},
	{
		rank: 13958,
		frequency: 2.51,
		lemma: "場内"
	},
	{
		rank: 13959,
		frequency: 2.51,
		lemma: "愕然"
	},
	{
		rank: 13960,
		frequency: 2.51,
		lemma: "星空"
	},
	{
		rank: 13961,
		frequency: 2.51,
		lemma: "達也"
	},
	{
		rank: 13962,
		frequency: 2.51,
		lemma: "篤"
	},
	{
		rank: 13963,
		frequency: 2.51,
		lemma: "押し出す"
	},
	{
		rank: 13964,
		frequency: 2.51,
		lemma: "乗り換え"
	},
	{
		rank: 13965,
		frequency: 2.51,
		lemma: "招集"
	},
	{
		rank: 13966,
		frequency: 2.51,
		lemma: "投げ出す"
	},
	{
		rank: 13967,
		frequency: 2.51,
		lemma: "壁画"
	},
	{
		rank: 13968,
		frequency: 2.51,
		lemma: "ハロ"
	},
	{
		rank: 13969,
		frequency: 2.51,
		lemma: "思いがけない"
	},
	{
		rank: 13970,
		frequency: 2.51,
		lemma: "思い返す"
	},
	{
		rank: 13971,
		frequency: 2.51,
		lemma: "新橋"
	},
	{
		rank: 13972,
		frequency: 2.51,
		lemma: "めちゃめちゃ"
	},
	{
		rank: 13973,
		frequency: 2.5,
		lemma: "下地"
	},
	{
		rank: 13974,
		frequency: 2.5,
		lemma: "免"
	},
	{
		rank: 13975,
		frequency: 2.5,
		lemma: "新装"
	},
	{
		rank: 13976,
		frequency: 2.5,
		lemma: "規程"
	},
	{
		rank: 13977,
		frequency: 2.5,
		lemma: "返し"
	},
	{
		rank: 13978,
		frequency: 2.5,
		lemma: "割高"
	},
	{
		rank: 13979,
		frequency: 2.5,
		lemma: "リーズナブル"
	},
	{
		rank: 13980,
		frequency: 2.5,
		lemma: "書式"
	},
	{
		rank: 13981,
		frequency: 2.5,
		lemma: "監理"
	},
	{
		rank: 13982,
		frequency: 2.5,
		lemma: "中絶"
	},
	{
		rank: 13983,
		frequency: 2.5,
		lemma: "軍備"
	},
	{
		rank: 13984,
		frequency: 2.5,
		lemma: "備考"
	},
	{
		rank: 13985,
		frequency: 2.5,
		lemma: "吉村"
	},
	{
		rank: 13986,
		frequency: 2.5,
		lemma: "パーフェクト"
	},
	{
		rank: 13987,
		frequency: 2.5,
		lemma: "癒着"
	},
	{
		rank: 13988,
		frequency: 2.5,
		lemma: "石橋"
	},
	{
		rank: 13989,
		frequency: 2.5,
		lemma: "落胆"
	},
	{
		rank: 13990,
		frequency: 2.5,
		lemma: "払い"
	},
	{
		rank: 13991,
		frequency: 2.5,
		lemma: "関す"
	},
	{
		rank: 13992,
		frequency: 2.5,
		lemma: "牽引"
	},
	{
		rank: 13993,
		frequency: 2.5,
		lemma: "決め手"
	},
	{
		rank: 13994,
		frequency: 2.5,
		lemma: "水族館"
	},
	{
		rank: 13995,
		frequency: 2.49,
		lemma: "一日中"
	},
	{
		rank: 13996,
		frequency: 2.49,
		lemma: "水晶"
	},
	{
		rank: 13997,
		frequency: 2.49,
		lemma: "シャイ"
	},
	{
		rank: 13998,
		frequency: 2.49,
		lemma: "エッジ"
	},
	{
		rank: 13999,
		frequency: 2.49,
		lemma: "沿線"
	},
	{
		rank: 14000,
		frequency: 2.49,
		lemma: "すがる"
	},
	{
		rank: 14001,
		frequency: 2.49,
		lemma: "監獄"
	},
	{
		rank: 14002,
		frequency: 2.49,
		lemma: "レスポンス"
	},
	{
		rank: 14003,
		frequency: 2.49,
		lemma: "三角形"
	},
	{
		rank: 14004,
		frequency: 2.49,
		lemma: "ヤマト"
	},
	{
		rank: 14005,
		frequency: 2.49,
		lemma: "取りまとめる"
	},
	{
		rank: 14006,
		frequency: 2.49,
		lemma: "張り切る"
	},
	{
		rank: 14007,
		frequency: 2.49,
		lemma: "版元"
	},
	{
		rank: 14008,
		frequency: 2.49,
		lemma: "大人しい"
	},
	{
		rank: 14009,
		frequency: 2.49,
		lemma: "溶け込む"
	},
	{
		rank: 14010,
		frequency: 2.49,
		lemma: "切り上げる"
	},
	{
		rank: 14011,
		frequency: 2.49,
		lemma: "幾分"
	},
	{
		rank: 14012,
		frequency: 2.49,
		lemma: "離せる"
	},
	{
		rank: 14013,
		frequency: 2.49,
		lemma: "ベーシック"
	},
	{
		rank: 14014,
		frequency: 2.49,
		lemma: "協業"
	},
	{
		rank: 14015,
		frequency: 2.49,
		lemma: "八田"
	},
	{
		rank: 14016,
		frequency: 2.49,
		lemma: "アレックス"
	},
	{
		rank: 14017,
		frequency: 2.49,
		lemma: "日本円"
	},
	{
		rank: 14018,
		frequency: 2.49,
		lemma: "行程"
	},
	{
		rank: 14019,
		frequency: 2.49,
		lemma: "シュー"
	},
	{
		rank: 14020,
		frequency: 2.49,
		lemma: "松子"
	},
	{
		rank: 14021,
		frequency: 2.49,
		lemma: "数時間"
	},
	{
		rank: 14022,
		frequency: 2.49,
		lemma: "質感"
	},
	{
		rank: 14023,
		frequency: 2.49,
		lemma: "邦人"
	},
	{
		rank: 14024,
		frequency: 2.49,
		lemma: "ショートカット"
	},
	{
		rank: 14025,
		frequency: 2.49,
		lemma: "院生"
	},
	{
		rank: 14026,
		frequency: 2.49,
		lemma: "断層"
	},
	{
		rank: 14027,
		frequency: 2.49,
		lemma: "ヒール"
	},
	{
		rank: 14028,
		frequency: 2.49,
		lemma: "そういや"
	},
	{
		rank: 14029,
		frequency: 2.49,
		lemma: "丸の内"
	},
	{
		rank: 14030,
		frequency: 2.49,
		lemma: "ルネサンス"
	},
	{
		rank: 14031,
		frequency: 2.49,
		lemma: "ジル"
	},
	{
		rank: 14032,
		frequency: 2.49,
		lemma: "別館"
	},
	{
		rank: 14033,
		frequency: 2.49,
		lemma: "お疲れさま"
	},
	{
		rank: 14034,
		frequency: 2.49,
		lemma: "モス"
	},
	{
		rank: 14035,
		frequency: 2.49,
		lemma: "採掘"
	},
	{
		rank: 14036,
		frequency: 2.49,
		lemma: "一遍"
	},
	{
		rank: 14037,
		frequency: 2.48,
		lemma: "トラベル"
	},
	{
		rank: 14038,
		frequency: 2.48,
		lemma: "ぼちぼち"
	},
	{
		rank: 14039,
		frequency: 2.48,
		lemma: "振込む"
	},
	{
		rank: 14040,
		frequency: 2.48,
		lemma: "母語"
	},
	{
		rank: 14041,
		frequency: 2.48,
		lemma: "射る"
	},
	{
		rank: 14042,
		frequency: 2.48,
		lemma: "よむ"
	},
	{
		rank: 14043,
		frequency: 2.48,
		lemma: "軍部"
	},
	{
		rank: 14044,
		frequency: 2.48,
		lemma: "かいな"
	},
	{
		rank: 14045,
		frequency: 2.48,
		lemma: "お守り"
	},
	{
		rank: 14046,
		frequency: 2.48,
		lemma: "投棄"
	},
	{
		rank: 14047,
		frequency: 2.48,
		lemma: "黒板"
	},
	{
		rank: 14048,
		frequency: 2.48,
		lemma: "からい"
	},
	{
		rank: 14049,
		frequency: 2.48,
		lemma: "時効"
	},
	{
		rank: 14050,
		frequency: 2.48,
		lemma: "尼崎"
	},
	{
		rank: 14051,
		frequency: 2.48,
		lemma: "旭川"
	},
	{
		rank: 14052,
		frequency: 2.48,
		lemma: "一掃"
	},
	{
		rank: 14053,
		frequency: 2.48,
		lemma: "ハザード"
	},
	{
		rank: 14054,
		frequency: 2.48,
		lemma: "フェラーリ"
	},
	{
		rank: 14055,
		frequency: 2.48,
		lemma: "史観"
	},
	{
		rank: 14056,
		frequency: 2.48,
		lemma: "称号"
	},
	{
		rank: 14057,
		frequency: 2.48,
		lemma: "手頃"
	},
	{
		rank: 14058,
		frequency: 2.48,
		lemma: "ワット"
	},
	{
		rank: 14059,
		frequency: 2.48,
		lemma: "進入"
	},
	{
		rank: 14060,
		frequency: 2.48,
		lemma: "和菓子"
	},
	{
		rank: 14061,
		frequency: 2.48,
		lemma: "必勝"
	},
	{
		rank: 14062,
		frequency: 2.48,
		lemma: "反感"
	},
	{
		rank: 14063,
		frequency: 2.48,
		lemma: "あす"
	},
	{
		rank: 14064,
		frequency: 2.48,
		lemma: "日野"
	},
	{
		rank: 14065,
		frequency: 2.48,
		lemma: "チカ"
	},
	{
		rank: 14066,
		frequency: 2.48,
		lemma: "極秘"
	},
	{
		rank: 14067,
		frequency: 2.48,
		lemma: "養老"
	},
	{
		rank: 14068,
		frequency: 2.48,
		lemma: "豊田"
	},
	{
		rank: 14069,
		frequency: 2.47,
		lemma: "古墳"
	},
	{
		rank: 14070,
		frequency: 2.47,
		lemma: "アトラクション"
	},
	{
		rank: 14071,
		frequency: 2.47,
		lemma: "ヤマハ"
	},
	{
		rank: 14072,
		frequency: 2.47,
		lemma: "ヴァイ"
	},
	{
		rank: 14073,
		frequency: 2.47,
		lemma: "合体"
	},
	{
		rank: 14074,
		frequency: 2.47,
		lemma: "不機嫌"
	},
	{
		rank: 14075,
		frequency: 2.47,
		lemma: "品切れ"
	},
	{
		rank: 14076,
		frequency: 2.47,
		lemma: "潜入"
	},
	{
		rank: 14077,
		frequency: 2.47,
		lemma: "一眼"
	},
	{
		rank: 14078,
		frequency: 2.47,
		lemma: "西ドイツ"
	},
	{
		rank: 14079,
		frequency: 2.47,
		lemma: "後任"
	},
	{
		rank: 14080,
		frequency: 2.47,
		lemma: "姑"
	},
	{
		rank: 14081,
		frequency: 2.47,
		lemma: "考え出す"
	},
	{
		rank: 14082,
		frequency: 2.47,
		lemma: "出没"
	},
	{
		rank: 14083,
		frequency: 2.47,
		lemma: "足場"
	},
	{
		rank: 14084,
		frequency: 2.47,
		lemma: "見せつける"
	},
	{
		rank: 14085,
		frequency: 2.47,
		lemma: "下宿"
	},
	{
		rank: 14086,
		frequency: 2.47,
		lemma: "その頃"
	},
	{
		rank: 14087,
		frequency: 2.47,
		lemma: "骨董"
	},
	{
		rank: 14088,
		frequency: 2.47,
		lemma: "ドーナツ"
	},
	{
		rank: 14089,
		frequency: 2.47,
		lemma: "不景気"
	},
	{
		rank: 14090,
		frequency: 2.47,
		lemma: "塁"
	},
	{
		rank: 14091,
		frequency: 2.47,
		lemma: "緑地"
	},
	{
		rank: 14092,
		frequency: 2.47,
		lemma: "かりる"
	},
	{
		rank: 14093,
		frequency: 2.47,
		lemma: "こまかい"
	},
	{
		rank: 14094,
		frequency: 2.47,
		lemma: "祖"
	},
	{
		rank: 14095,
		frequency: 2.47,
		lemma: "實"
	},
	{
		rank: 14096,
		frequency: 2.47,
		lemma: "バイアス"
	},
	{
		rank: 14097,
		frequency: 2.47,
		lemma: "大平"
	},
	{
		rank: 14098,
		frequency: 2.47,
		lemma: "月給"
	},
	{
		rank: 14099,
		frequency: 2.47,
		lemma: "併設"
	},
	{
		rank: 14100,
		frequency: 2.47,
		lemma: "ハワイアン"
	},
	{
		rank: 14101,
		frequency: 2.47,
		lemma: "はれる"
	},
	{
		rank: 14102,
		frequency: 2.47,
		lemma: "レジスト"
	},
	{
		rank: 14103,
		frequency: 2.47,
		lemma: "転生"
	},
	{
		rank: 14104,
		frequency: 2.47,
		lemma: "テクスト"
	},
	{
		rank: 14105,
		frequency: 2.47,
		lemma: "ナベ"
	},
	{
		rank: 14106,
		frequency: 2.47,
		lemma: "レベルアップ"
	},
	{
		rank: 14107,
		frequency: 2.47,
		lemma: "伝言"
	},
	{
		rank: 14108,
		frequency: 2.47,
		lemma: "しきりに"
	},
	{
		rank: 14109,
		frequency: 2.47,
		lemma: "所存"
	},
	{
		rank: 14110,
		frequency: 2.47,
		lemma: "配管"
	},
	{
		rank: 14111,
		frequency: 2.47,
		lemma: "雀"
	},
	{
		rank: 14112,
		frequency: 2.47,
		lemma: "赤松"
	},
	{
		rank: 14113,
		frequency: 2.47,
		lemma: "聖職"
	},
	{
		rank: 14114,
		frequency: 2.46,
		lemma: "和む"
	},
	{
		rank: 14115,
		frequency: 2.46,
		lemma: "危惧す"
	},
	{
		rank: 14116,
		frequency: 2.46,
		lemma: "円盤"
	},
	{
		rank: 14117,
		frequency: 2.46,
		lemma: "わらしべ"
	},
	{
		rank: 14118,
		frequency: 2.46,
		lemma: "毒性"
	},
	{
		rank: 14119,
		frequency: 2.46,
		lemma: "絶好調"
	},
	{
		rank: 14120,
		frequency: 2.46,
		lemma: "立花"
	},
	{
		rank: 14121,
		frequency: 2.46,
		lemma: "道端"
	},
	{
		rank: 14122,
		frequency: 2.46,
		lemma: "堪える"
	},
	{
		rank: 14123,
		frequency: 2.46,
		lemma: "スペル"
	},
	{
		rank: 14124,
		frequency: 2.46,
		lemma: "春日"
	},
	{
		rank: 14125,
		frequency: 2.46,
		lemma: "浴びせる"
	},
	{
		rank: 14126,
		frequency: 2.46,
		lemma: "隔てる"
	},
	{
		rank: 14127,
		frequency: 2.46,
		lemma: "敏"
	},
	{
		rank: 14128,
		frequency: 2.46,
		lemma: "専門医"
	},
	{
		rank: 14129,
		frequency: 2.46,
		lemma: "窮屈"
	},
	{
		rank: 14130,
		frequency: 2.46,
		lemma: "種子"
	},
	{
		rank: 14131,
		frequency: 2.46,
		lemma: "頻発"
	},
	{
		rank: 14132,
		frequency: 2.46,
		lemma: "金星"
	},
	{
		rank: 14133,
		frequency: 2.46,
		lemma: "生死"
	},
	{
		rank: 14134,
		frequency: 2.46,
		lemma: "略奪"
	},
	{
		rank: 14135,
		frequency: 2.46,
		lemma: "鴨"
	},
	{
		rank: 14136,
		frequency: 2.46,
		lemma: "中心地"
	},
	{
		rank: 14137,
		frequency: 2.46,
		lemma: "同種"
	},
	{
		rank: 14138,
		frequency: 2.46,
		lemma: "刺繍"
	},
	{
		rank: 14139,
		frequency: 2.46,
		lemma: "別人"
	},
	{
		rank: 14140,
		frequency: 2.45,
		lemma: "綿密"
	},
	{
		rank: 14141,
		frequency: 2.45,
		lemma: "クーデター"
	},
	{
		rank: 14142,
		frequency: 2.45,
		lemma: "行儀"
	},
	{
		rank: 14143,
		frequency: 2.45,
		lemma: "月収"
	},
	{
		rank: 14144,
		frequency: 2.45,
		lemma: "機関車"
	},
	{
		rank: 14145,
		frequency: 2.45,
		lemma: "悟り"
	},
	{
		rank: 14146,
		frequency: 2.45,
		lemma: "コンペ"
	},
	{
		rank: 14147,
		frequency: 2.45,
		lemma: "みそ"
	},
	{
		rank: 14148,
		frequency: 2.45,
		lemma: "鉄人"
	},
	{
		rank: 14149,
		frequency: 2.45,
		lemma: "ヌード"
	},
	{
		rank: 14150,
		frequency: 2.45,
		lemma: "憂慮"
	},
	{
		rank: 14151,
		frequency: 2.45,
		lemma: "抹茶"
	},
	{
		rank: 14152,
		frequency: 2.45,
		lemma: "強迫"
	},
	{
		rank: 14153,
		frequency: 2.45,
		lemma: "重厚"
	},
	{
		rank: 14154,
		frequency: 2.45,
		lemma: "増減"
	},
	{
		rank: 14155,
		frequency: 2.45,
		lemma: "たいして"
	},
	{
		rank: 14156,
		frequency: 2.45,
		lemma: "彫る"
	},
	{
		rank: 14157,
		frequency: 2.45,
		lemma: "不起訴"
	},
	{
		rank: 14158,
		frequency: 2.45,
		lemma: "印鑑"
	},
	{
		rank: 14159,
		frequency: 2.45,
		lemma: "ウマ"
	},
	{
		rank: 14160,
		frequency: 2.45,
		lemma: "スナック"
	},
	{
		rank: 14161,
		frequency: 2.45,
		lemma: "ボールペン"
	},
	{
		rank: 14162,
		frequency: 2.45,
		lemma: "突き進む"
	},
	{
		rank: 14163,
		frequency: 2.45,
		lemma: "受け取れる"
	},
	{
		rank: 14164,
		frequency: 2.45,
		lemma: "伊達"
	},
	{
		rank: 14165,
		frequency: 2.45,
		lemma: "悪役"
	},
	{
		rank: 14166,
		frequency: 2.45,
		lemma: "雅子"
	},
	{
		rank: 14167,
		frequency: 2.45,
		lemma: "セルビア"
	},
	{
		rank: 14168,
		frequency: 2.45,
		lemma: "うんと"
	},
	{
		rank: 14169,
		frequency: 2.45,
		lemma: "ノーマル"
	},
	{
		rank: 14170,
		frequency: 2.45,
		lemma: "単調"
	},
	{
		rank: 14171,
		frequency: 2.45,
		lemma: "トロイ"
	},
	{
		rank: 14172,
		frequency: 2.45,
		lemma: "トリー"
	},
	{
		rank: 14173,
		frequency: 2.45,
		lemma: "鳥居"
	},
	{
		rank: 14174,
		frequency: 2.45,
		lemma: "へー"
	},
	{
		rank: 14175,
		frequency: 2.45,
		lemma: "図解"
	},
	{
		rank: 14176,
		frequency: 2.45,
		lemma: "こまめ"
	},
	{
		rank: 14177,
		frequency: 2.45,
		lemma: "源氏"
	},
	{
		rank: 14178,
		frequency: 2.45,
		lemma: "未然"
	},
	{
		rank: 14179,
		frequency: 2.45,
		lemma: "養育"
	},
	{
		rank: 14180,
		frequency: 2.45,
		lemma: "善い"
	},
	{
		rank: 14181,
		frequency: 2.45,
		lemma: "率先"
	},
	{
		rank: 14182,
		frequency: 2.45,
		lemma: "つぎ込む"
	},
	{
		rank: 14183,
		frequency: 2.45,
		lemma: "要綱"
	},
	{
		rank: 14184,
		frequency: 2.45,
		lemma: "疾走"
	},
	{
		rank: 14185,
		frequency: 2.45,
		lemma: "自粛"
	},
	{
		rank: 14186,
		frequency: 2.45,
		lemma: "全滅"
	},
	{
		rank: 14187,
		frequency: 2.45,
		lemma: "電機"
	},
	{
		rank: 14188,
		frequency: 2.45,
		lemma: "見聞"
	},
	{
		rank: 14189,
		frequency: 2.45,
		lemma: "有難い"
	},
	{
		rank: 14190,
		frequency: 2.45,
		lemma: "豪雨"
	},
	{
		rank: 14191,
		frequency: 2.45,
		lemma: "カミさん"
	},
	{
		rank: 14192,
		frequency: 2.45,
		lemma: "縄"
	},
	{
		rank: 14193,
		frequency: 2.45,
		lemma: "心得"
	},
	{
		rank: 14194,
		frequency: 2.44,
		lemma: "待ち受ける"
	},
	{
		rank: 14195,
		frequency: 2.44,
		lemma: "緑茶"
	},
	{
		rank: 14196,
		frequency: 2.44,
		lemma: "松原"
	},
	{
		rank: 14197,
		frequency: 2.44,
		lemma: "トランプ"
	},
	{
		rank: 14198,
		frequency: 2.44,
		lemma: "μ"
	},
	{
		rank: 14199,
		frequency: 2.44,
		lemma: "そのうえ"
	},
	{
		rank: 14200,
		frequency: 2.44,
		lemma: "大佐"
	},
	{
		rank: 14201,
		frequency: 2.44,
		lemma: "梱包"
	},
	{
		rank: 14202,
		frequency: 2.44,
		lemma: "幹線"
	},
	{
		rank: 14203,
		frequency: 2.44,
		lemma: "恵子"
	},
	{
		rank: 14204,
		frequency: 2.44,
		lemma: "蜜"
	},
	{
		rank: 14205,
		frequency: 2.44,
		lemma: "ラテン語"
	},
	{
		rank: 14206,
		frequency: 2.44,
		lemma: "県議会"
	},
	{
		rank: 14207,
		frequency: 2.44,
		lemma: "フルート"
	},
	{
		rank: 14208,
		frequency: 2.44,
		lemma: "笑わせる"
	},
	{
		rank: 14209,
		frequency: 2.44,
		lemma: "読み物"
	},
	{
		rank: 14210,
		frequency: 2.44,
		lemma: "木星"
	},
	{
		rank: 14211,
		frequency: 2.44,
		lemma: "宋"
	},
	{
		rank: 14212,
		frequency: 2.44,
		lemma: "衛"
	},
	{
		rank: 14213,
		frequency: 2.44,
		lemma: "かくして"
	},
	{
		rank: 14214,
		frequency: 2.44,
		lemma: "顔つき"
	},
	{
		rank: 14215,
		frequency: 2.44,
		lemma: "プッシュ"
	},
	{
		rank: 14216,
		frequency: 2.44,
		lemma: "頭上"
	},
	{
		rank: 14217,
		frequency: 2.44,
		lemma: "成り行き"
	},
	{
		rank: 14218,
		frequency: 2.44,
		lemma: "手記"
	},
	{
		rank: 14219,
		frequency: 2.44,
		lemma: "エフェクト"
	},
	{
		rank: 14220,
		frequency: 2.44,
		lemma: "連覇"
	},
	{
		rank: 14221,
		frequency: 2.44,
		lemma: "私学"
	},
	{
		rank: 14222,
		frequency: 2.44,
		lemma: "三田"
	},
	{
		rank: 14223,
		frequency: 2.44,
		lemma: "埃"
	},
	{
		rank: 14224,
		frequency: 2.44,
		lemma: "グレイ"
	},
	{
		rank: 14225,
		frequency: 2.44,
		lemma: "エドワード"
	},
	{
		rank: 14226,
		frequency: 2.44,
		lemma: "対称"
	},
	{
		rank: 14227,
		frequency: 2.43,
		lemma: "資"
	},
	{
		rank: 14228,
		frequency: 2.43,
		lemma: "疎い"
	},
	{
		rank: 14229,
		frequency: 2.43,
		lemma: "痒い"
	},
	{
		rank: 14230,
		frequency: 2.43,
		lemma: "ヤンキー"
	},
	{
		rank: 14231,
		frequency: 2.43,
		lemma: "スマ"
	},
	{
		rank: 14232,
		frequency: 2.43,
		lemma: "パイオニア"
	},
	{
		rank: 14233,
		frequency: 2.43,
		lemma: "きち"
	},
	{
		rank: 14234,
		frequency: 2.43,
		lemma: "ピュア"
	},
	{
		rank: 14235,
		frequency: 2.43,
		lemma: "オートバイ"
	},
	{
		rank: 14236,
		frequency: 2.43,
		lemma: "編む"
	},
	{
		rank: 14237,
		frequency: 2.43,
		lemma: "パワーアップ"
	},
	{
		rank: 14238,
		frequency: 2.43,
		lemma: "当座"
	},
	{
		rank: 14239,
		frequency: 2.43,
		lemma: "凌"
	},
	{
		rank: 14240,
		frequency: 2.43,
		lemma: "鳴き声"
	},
	{
		rank: 14241,
		frequency: 2.43,
		lemma: "訳注"
	},
	{
		rank: 14242,
		frequency: 2.43,
		lemma: "軽井沢"
	},
	{
		rank: 14243,
		frequency: 2.43,
		lemma: "出来高"
	},
	{
		rank: 14244,
		frequency: 2.43,
		lemma: "風刺"
	},
	{
		rank: 14245,
		frequency: 2.43,
		lemma: "しだい"
	},
	{
		rank: 14246,
		frequency: 2.43,
		lemma: "回顧"
	},
	{
		rank: 14247,
		frequency: 2.43,
		lemma: "炎症"
	},
	{
		rank: 14248,
		frequency: 2.43,
		lemma: "等級"
	},
	{
		rank: 14249,
		frequency: 2.43,
		lemma: "おと"
	},
	{
		rank: 14250,
		frequency: 2.43,
		lemma: "りょう"
	},
	{
		rank: 14251,
		frequency: 2.43,
		lemma: "小樽"
	},
	{
		rank: 14252,
		frequency: 2.43,
		lemma: "カウンタ"
	},
	{
		rank: 14253,
		frequency: 2.43,
		lemma: "築"
	},
	{
		rank: 14254,
		frequency: 2.43,
		lemma: "マンゴー"
	},
	{
		rank: 14255,
		frequency: 2.43,
		lemma: "岩崎"
	},
	{
		rank: 14256,
		frequency: 2.43,
		lemma: "精通"
	},
	{
		rank: 14257,
		frequency: 2.43,
		lemma: "幼稚"
	},
	{
		rank: 14258,
		frequency: 2.43,
		lemma: "善悪"
	},
	{
		rank: 14259,
		frequency: 2.43,
		lemma: "盗作"
	},
	{
		rank: 14260,
		frequency: 2.43,
		lemma: "係わる"
	},
	{
		rank: 14261,
		frequency: 2.43,
		lemma: "かぶせる"
	},
	{
		rank: 14262,
		frequency: 2.43,
		lemma: "同上"
	},
	{
		rank: 14263,
		frequency: 2.43,
		lemma: "解す"
	},
	{
		rank: 14264,
		frequency: 2.43,
		lemma: "流れ込む"
	},
	{
		rank: 14265,
		frequency: 2.43,
		lemma: "遅らせる"
	},
	{
		rank: 14266,
		frequency: 2.43,
		lemma: "絹"
	},
	{
		rank: 14267,
		frequency: 2.43,
		lemma: "カーソル"
	},
	{
		rank: 14268,
		frequency: 2.43,
		lemma: "恨む"
	},
	{
		rank: 14269,
		frequency: 2.43,
		lemma: "根元"
	},
	{
		rank: 14270,
		frequency: 2.43,
		lemma: "一泊"
	},
	{
		rank: 14271,
		frequency: 2.43,
		lemma: "ＩＤ"
	},
	{
		rank: 14272,
		frequency: 2.43,
		lemma: "芽生える"
	},
	{
		rank: 14273,
		frequency: 2.43,
		lemma: "しゅう"
	},
	{
		rank: 14274,
		frequency: 2.43,
		lemma: "頼もしい"
	},
	{
		rank: 14275,
		frequency: 2.43,
		lemma: "敷居"
	},
	{
		rank: 14276,
		frequency: 2.43,
		lemma: "おさえる"
	},
	{
		rank: 14277,
		frequency: 2.42,
		lemma: "バネ"
	},
	{
		rank: 14278,
		frequency: 2.42,
		lemma: "専属"
	},
	{
		rank: 14279,
		frequency: 2.42,
		lemma: "書名"
	},
	{
		rank: 14280,
		frequency: 2.42,
		lemma: "新約"
	},
	{
		rank: 14281,
		frequency: 2.42,
		lemma: "終り"
	},
	{
		rank: 14282,
		frequency: 2.42,
		lemma: "タック"
	},
	{
		rank: 14283,
		frequency: 2.42,
		lemma: "散乱"
	},
	{
		rank: 14284,
		frequency: 2.42,
		lemma: "野蛮"
	},
	{
		rank: 14285,
		frequency: 2.42,
		lemma: "断面"
	},
	{
		rank: 14286,
		frequency: 2.42,
		lemma: "しない"
	},
	{
		rank: 14287,
		frequency: 2.42,
		lemma: "あっせん"
	},
	{
		rank: 14288,
		frequency: 2.42,
		lemma: "ベール"
	},
	{
		rank: 14289,
		frequency: 2.42,
		lemma: "館内"
	},
	{
		rank: 14290,
		frequency: 2.42,
		lemma: "つくり出す"
	},
	{
		rank: 14291,
		frequency: 2.42,
		lemma: "ＢＧＭ"
	},
	{
		rank: 14292,
		frequency: 2.42,
		lemma: "つかまえる"
	},
	{
		rank: 14293,
		frequency: 2.42,
		lemma: "請け負う"
	},
	{
		rank: 14294,
		frequency: 2.42,
		lemma: "潔い"
	},
	{
		rank: 14295,
		frequency: 2.42,
		lemma: "ダブる"
	},
	{
		rank: 14296,
		frequency: 2.42,
		lemma: "プロパガンダ"
	},
	{
		rank: 14297,
		frequency: 2.42,
		lemma: "おねがい"
	},
	{
		rank: 14298,
		frequency: 2.42,
		lemma: "修得"
	},
	{
		rank: 14299,
		frequency: 2.42,
		lemma: "この方"
	},
	{
		rank: 14300,
		frequency: 2.42,
		lemma: "萬"
	},
	{
		rank: 14301,
		frequency: 2.42,
		lemma: "貞"
	},
	{
		rank: 14302,
		frequency: 2.42,
		lemma: "壮絶"
	},
	{
		rank: 14303,
		frequency: 2.42,
		lemma: "リスナー"
	},
	{
		rank: 14304,
		frequency: 2.42,
		lemma: "体裁"
	},
	{
		rank: 14305,
		frequency: 2.42,
		lemma: "痴漢"
	},
	{
		rank: 14306,
		frequency: 2.42,
		lemma: "レンガ"
	},
	{
		rank: 14307,
		frequency: 2.42,
		lemma: "陶芸"
	},
	{
		rank: 14308,
		frequency: 2.42,
		lemma: "因縁"
	},
	{
		rank: 14309,
		frequency: 2.42,
		lemma: "急上昇"
	},
	{
		rank: 14310,
		frequency: 2.41,
		lemma: "病理"
	},
	{
		rank: 14311,
		frequency: 2.41,
		lemma: "スティーブン"
	},
	{
		rank: 14312,
		frequency: 2.41,
		lemma: "安楽"
	},
	{
		rank: 14313,
		frequency: 2.41,
		lemma: "満腹"
	},
	{
		rank: 14314,
		frequency: 2.41,
		lemma: "号泣"
	},
	{
		rank: 14315,
		frequency: 2.41,
		lemma: "別紙"
	},
	{
		rank: 14316,
		frequency: 2.41,
		lemma: "和声"
	},
	{
		rank: 14317,
		frequency: 2.41,
		lemma: "唖然"
	},
	{
		rank: 14318,
		frequency: 2.41,
		lemma: "ちぎる"
	},
	{
		rank: 14319,
		frequency: 2.41,
		lemma: "ダウ"
	},
	{
		rank: 14320,
		frequency: 2.41,
		lemma: "りえ"
	},
	{
		rank: 14321,
		frequency: 2.41,
		lemma: "悪人"
	},
	{
		rank: 14322,
		frequency: 2.41,
		lemma: "花屋"
	},
	{
		rank: 14323,
		frequency: 2.41,
		lemma: "読み取れる"
	},
	{
		rank: 14324,
		frequency: 2.41,
		lemma: "シリアス"
	},
	{
		rank: 14325,
		frequency: 2.41,
		lemma: "河原"
	},
	{
		rank: 14326,
		frequency: 2.41,
		lemma: "壁面"
	},
	{
		rank: 14327,
		frequency: 2.41,
		lemma: "コリン"
	},
	{
		rank: 14328,
		frequency: 2.41,
		lemma: "唸る"
	},
	{
		rank: 14329,
		frequency: 2.41,
		lemma: "仙"
	},
	{
		rank: 14330,
		frequency: 2.41,
		lemma: "弁理"
	},
	{
		rank: 14331,
		frequency: 2.41,
		lemma: "辞"
	},
	{
		rank: 14332,
		frequency: 2.41,
		lemma: "当番"
	},
	{
		rank: 14333,
		frequency: 2.41,
		lemma: "停める"
	},
	{
		rank: 14334,
		frequency: 2.41,
		lemma: "岬"
	},
	{
		rank: 14335,
		frequency: 2.41,
		lemma: "偽善"
	},
	{
		rank: 14336,
		frequency: 2.41,
		lemma: "交響楽"
	},
	{
		rank: 14337,
		frequency: 2.41,
		lemma: "ミナ"
	},
	{
		rank: 14338,
		frequency: 2.41,
		lemma: "エンジェル"
	},
	{
		rank: 14339,
		frequency: 2.41,
		lemma: "特約"
	},
	{
		rank: 14340,
		frequency: 2.41,
		lemma: "竿"
	},
	{
		rank: 14341,
		frequency: 2.41,
		lemma: "ティム"
	},
	{
		rank: 14342,
		frequency: 2.41,
		lemma: "ブドウ"
	},
	{
		rank: 14343,
		frequency: 2.41,
		lemma: "慰霊"
	},
	{
		rank: 14344,
		frequency: 2.41,
		lemma: "櫻井"
	},
	{
		rank: 14345,
		frequency: 2.41,
		lemma: "モニタリング"
	},
	{
		rank: 14346,
		frequency: 2.41,
		lemma: "爺"
	},
	{
		rank: 14347,
		frequency: 2.41,
		lemma: "優越"
	},
	{
		rank: 14348,
		frequency: 2.41,
		lemma: "ベーコン"
	},
	{
		rank: 14349,
		frequency: 2.41,
		lemma: "ファイト"
	},
	{
		rank: 14350,
		frequency: 2.41,
		lemma: "数理"
	},
	{
		rank: 14351,
		frequency: 2.41,
		lemma: "ヤミ"
	},
	{
		rank: 14352,
		frequency: 2.41,
		lemma: "慈善"
	},
	{
		rank: 14353,
		frequency: 2.41,
		lemma: "羽根"
	},
	{
		rank: 14354,
		frequency: 2.41,
		lemma: "会派"
	},
	{
		rank: 14355,
		frequency: 2.4,
		lemma: "絡み合う"
	},
	{
		rank: 14356,
		frequency: 2.4,
		lemma: "山岡"
	},
	{
		rank: 14357,
		frequency: 2.4,
		lemma: "博覧"
	},
	{
		rank: 14358,
		frequency: 2.4,
		lemma: "モル"
	},
	{
		rank: 14359,
		frequency: 2.4,
		lemma: "落合"
	},
	{
		rank: 14360,
		frequency: 2.4,
		lemma: "共催"
	},
	{
		rank: 14361,
		frequency: 2.4,
		lemma: "でき"
	},
	{
		rank: 14362,
		frequency: 2.4,
		lemma: "ゆるい"
	},
	{
		rank: 14363,
		frequency: 2.4,
		lemma: "憲"
	},
	{
		rank: 14364,
		frequency: 2.4,
		lemma: "ダイジェスト"
	},
	{
		rank: 14365,
		frequency: 2.4,
		lemma: "思い当たる"
	},
	{
		rank: 14366,
		frequency: 2.4,
		lemma: "炸裂"
	},
	{
		rank: 14367,
		frequency: 2.4,
		lemma: "ながめる"
	},
	{
		rank: 14368,
		frequency: 2.4,
		lemma: "そらす"
	},
	{
		rank: 14369,
		frequency: 2.4,
		lemma: "範"
	},
	{
		rank: 14370,
		frequency: 2.4,
		lemma: "内需"
	},
	{
		rank: 14371,
		frequency: 2.4,
		lemma: "蒸す"
	},
	{
		rank: 14372,
		frequency: 2.4,
		lemma: "水路"
	},
	{
		rank: 14373,
		frequency: 2.4,
		lemma: "鎧"
	},
	{
		rank: 14374,
		frequency: 2.4,
		lemma: "焼き鳥"
	},
	{
		rank: 14375,
		frequency: 2.4,
		lemma: "トレイ"
	},
	{
		rank: 14376,
		frequency: 2.4,
		lemma: "生き残り"
	},
	{
		rank: 14377,
		frequency: 2.4,
		lemma: "遊戯"
	},
	{
		rank: 14378,
		frequency: 2.4,
		lemma: "既定"
	},
	{
		rank: 14379,
		frequency: 2.4,
		lemma: "申し述べる"
	},
	{
		rank: 14380,
		frequency: 2.4,
		lemma: "台北"
	},
	{
		rank: 14381,
		frequency: 2.4,
		lemma: "由紀夫"
	},
	{
		rank: 14382,
		frequency: 2.4,
		lemma: "ルーマニア"
	},
	{
		rank: 14383,
		frequency: 2.4,
		lemma: "フランチャイズ"
	},
	{
		rank: 14384,
		frequency: 2.4,
		lemma: "協賛"
	},
	{
		rank: 14385,
		frequency: 2.39,
		lemma: "自分勝手"
	},
	{
		rank: 14386,
		frequency: 2.39,
		lemma: "うさ"
	},
	{
		rank: 14387,
		frequency: 2.39,
		lemma: "与る"
	},
	{
		rank: 14388,
		frequency: 2.39,
		lemma: "ジーニョ"
	},
	{
		rank: 14389,
		frequency: 2.39,
		lemma: "思案"
	},
	{
		rank: 14390,
		frequency: 2.39,
		lemma: "南東"
	},
	{
		rank: 14391,
		frequency: 2.39,
		lemma: "ユニオン"
	},
	{
		rank: 14392,
		frequency: 2.39,
		lemma: "もめる"
	},
	{
		rank: 14393,
		frequency: 2.39,
		lemma: "廃墟"
	},
	{
		rank: 14394,
		frequency: 2.39,
		lemma: "チーフ"
	},
	{
		rank: 14395,
		frequency: 2.39,
		lemma: "不毛"
	},
	{
		rank: 14396,
		frequency: 2.39,
		lemma: "米兵"
	},
	{
		rank: 14397,
		frequency: 2.39,
		lemma: "先導"
	},
	{
		rank: 14398,
		frequency: 2.39,
		lemma: "砦"
	},
	{
		rank: 14399,
		frequency: 2.39,
		lemma: "ひで"
	},
	{
		rank: 14400,
		frequency: 2.39,
		lemma: "順に"
	},
	{
		rank: 14401,
		frequency: 2.39,
		lemma: "処方箋"
	},
	{
		rank: 14402,
		frequency: 2.39,
		lemma: "査察"
	},
	{
		rank: 14403,
		frequency: 2.39,
		lemma: "自決"
	},
	{
		rank: 14404,
		frequency: 2.39,
		lemma: "年月日"
	},
	{
		rank: 14405,
		frequency: 2.39,
		lemma: "飢餓"
	},
	{
		rank: 14406,
		frequency: 2.39,
		lemma: "睨む"
	},
	{
		rank: 14407,
		frequency: 2.39,
		lemma: "どきどき"
	},
	{
		rank: 14408,
		frequency: 2.39,
		lemma: "出雲"
	},
	{
		rank: 14409,
		frequency: 2.39,
		lemma: "経団連"
	},
	{
		rank: 14410,
		frequency: 2.39,
		lemma: "きのこ"
	},
	{
		rank: 14411,
		frequency: 2.39,
		lemma: "錬金術"
	},
	{
		rank: 14412,
		frequency: 2.39,
		lemma: "さまよう"
	},
	{
		rank: 14413,
		frequency: 2.39,
		lemma: "いとこ"
	},
	{
		rank: 14414,
		frequency: 2.39,
		lemma: "復刊"
	},
	{
		rank: 14415,
		frequency: 2.39,
		lemma: "威嚇"
	},
	{
		rank: 14416,
		frequency: 2.39,
		lemma: "握り"
	},
	{
		rank: 14417,
		frequency: 2.39,
		lemma: "滅亡"
	},
	{
		rank: 14418,
		frequency: 2.39,
		lemma: "外野"
	},
	{
		rank: 14419,
		frequency: 2.39,
		lemma: "６つ"
	},
	{
		rank: 14420,
		frequency: 2.39,
		lemma: "歓喜"
	},
	{
		rank: 14421,
		frequency: 2.39,
		lemma: "手話"
	},
	{
		rank: 14422,
		frequency: 2.39,
		lemma: "全編"
	},
	{
		rank: 14423,
		frequency: 2.39,
		lemma: "控え"
	},
	{
		rank: 14424,
		frequency: 2.39,
		lemma: "サントラ"
	},
	{
		rank: 14425,
		frequency: 2.39,
		lemma: "海面"
	},
	{
		rank: 14426,
		frequency: 2.39,
		lemma: "不変"
	},
	{
		rank: 14427,
		frequency: 2.39,
		lemma: "ペイント"
	},
	{
		rank: 14428,
		frequency: 2.39,
		lemma: "製図"
	},
	{
		rank: 14429,
		frequency: 2.39,
		lemma: "ノミネート"
	},
	{
		rank: 14430,
		frequency: 2.38,
		lemma: "ペダル"
	},
	{
		rank: 14431,
		frequency: 2.38,
		lemma: "上質"
	},
	{
		rank: 14432,
		frequency: 2.38,
		lemma: "連なる"
	},
	{
		rank: 14433,
		frequency: 2.38,
		lemma: "本館"
	},
	{
		rank: 14434,
		frequency: 2.38,
		lemma: "雌"
	},
	{
		rank: 14435,
		frequency: 2.38,
		lemma: "バク"
	},
	{
		rank: 14436,
		frequency: 2.38,
		lemma: "東京タワー"
	},
	{
		rank: 14437,
		frequency: 2.38,
		lemma: "人参"
	},
	{
		rank: 14438,
		frequency: 2.38,
		lemma: "小中学校"
	},
	{
		rank: 14439,
		frequency: 2.38,
		lemma: "ニコラ"
	},
	{
		rank: 14440,
		frequency: 2.38,
		lemma: "けんか"
	},
	{
		rank: 14441,
		frequency: 2.38,
		lemma: "ハーモニー"
	},
	{
		rank: 14442,
		frequency: 2.38,
		lemma: "育毛"
	},
	{
		rank: 14443,
		frequency: 2.38,
		lemma: "論説"
	},
	{
		rank: 14444,
		frequency: 2.38,
		lemma: "色気"
	},
	{
		rank: 14445,
		frequency: 2.38,
		lemma: "笑い声"
	},
	{
		rank: 14446,
		frequency: 2.38,
		lemma: "意地悪"
	},
	{
		rank: 14447,
		frequency: 2.38,
		lemma: "素顔"
	},
	{
		rank: 14448,
		frequency: 2.38,
		lemma: "目覚まし"
	},
	{
		rank: 14449,
		frequency: 2.38,
		lemma: "明石"
	},
	{
		rank: 14450,
		frequency: 2.38,
		lemma: "想起"
	},
	{
		rank: 14451,
		frequency: 2.38,
		lemma: "菅野"
	},
	{
		rank: 14452,
		frequency: 2.38,
		lemma: "前項"
	},
	{
		rank: 14453,
		frequency: 2.38,
		lemma: "南国"
	},
	{
		rank: 14454,
		frequency: 2.38,
		lemma: "火葬"
	},
	{
		rank: 14455,
		frequency: 2.38,
		lemma: "ポルシェ"
	},
	{
		rank: 14456,
		frequency: 2.38,
		lemma: "加筆"
	},
	{
		rank: 14457,
		frequency: 2.38,
		lemma: "鉱業"
	},
	{
		rank: 14458,
		frequency: 2.38,
		lemma: "後遺症"
	},
	{
		rank: 14459,
		frequency: 2.37,
		lemma: "フロイト"
	},
	{
		rank: 14460,
		frequency: 2.37,
		lemma: "投球"
	},
	{
		rank: 14461,
		frequency: 2.37,
		lemma: "寄贈"
	},
	{
		rank: 14462,
		frequency: 2.37,
		lemma: "西暦"
	},
	{
		rank: 14463,
		frequency: 2.37,
		lemma: "砕く"
	},
	{
		rank: 14464,
		frequency: 2.37,
		lemma: "たたかう"
	},
	{
		rank: 14465,
		frequency: 2.37,
		lemma: "グローバリゼーション"
	},
	{
		rank: 14466,
		frequency: 2.37,
		lemma: "錬る"
	},
	{
		rank: 14467,
		frequency: 2.37,
		lemma: "私生活"
	},
	{
		rank: 14468,
		frequency: 2.37,
		lemma: "レタス"
	},
	{
		rank: 14469,
		frequency: 2.37,
		lemma: "車輪"
	},
	{
		rank: 14470,
		frequency: 2.37,
		lemma: "岩国"
	},
	{
		rank: 14471,
		frequency: 2.37,
		lemma: "立ち直る"
	},
	{
		rank: 14472,
		frequency: 2.37,
		lemma: "まちがい"
	},
	{
		rank: 14473,
		frequency: 2.37,
		lemma: "静香"
	},
	{
		rank: 14474,
		frequency: 2.37,
		lemma: "フェンス"
	},
	{
		rank: 14475,
		frequency: 2.37,
		lemma: "ノブ"
	},
	{
		rank: 14476,
		frequency: 2.37,
		lemma: "匠"
	},
	{
		rank: 14477,
		frequency: 2.37,
		lemma: "積雪"
	},
	{
		rank: 14478,
		frequency: 2.37,
		lemma: "電電"
	},
	{
		rank: 14479,
		frequency: 2.37,
		lemma: "特製"
	},
	{
		rank: 14480,
		frequency: 2.37,
		lemma: "たどりつく"
	},
	{
		rank: 14481,
		frequency: 2.37,
		lemma: "一撃"
	},
	{
		rank: 14482,
		frequency: 2.37,
		lemma: "体現"
	},
	{
		rank: 14483,
		frequency: 2.37,
		lemma: "獲物"
	},
	{
		rank: 14484,
		frequency: 2.37,
		lemma: "慶應義塾"
	},
	{
		rank: 14485,
		frequency: 2.37,
		lemma: "定住"
	},
	{
		rank: 14486,
		frequency: 2.37,
		lemma: "リーチ"
	},
	{
		rank: 14487,
		frequency: 2.37,
		lemma: "ミソ"
	},
	{
		rank: 14488,
		frequency: 2.37,
		lemma: "ＢＢＣ"
	},
	{
		rank: 14489,
		frequency: 2.37,
		lemma: "手直し"
	},
	{
		rank: 14490,
		frequency: 2.37,
		lemma: "平常"
	},
	{
		rank: 14491,
		frequency: 2.37,
		lemma: "学童"
	},
	{
		rank: 14492,
		frequency: 2.37,
		lemma: "養"
	},
	{
		rank: 14493,
		frequency: 2.37,
		lemma: "化け"
	},
	{
		rank: 14494,
		frequency: 2.37,
		lemma: "ジャッジ"
	},
	{
		rank: 14495,
		frequency: 2.37,
		lemma: "モスク"
	},
	{
		rank: 14496,
		frequency: 2.37,
		lemma: "寝かせる"
	},
	{
		rank: 14497,
		frequency: 2.37,
		lemma: "カオス"
	},
	{
		rank: 14498,
		frequency: 2.37,
		lemma: "ピアス"
	},
	{
		rank: 14499,
		frequency: 2.37,
		lemma: "リュック"
	},
	{
		rank: 14500,
		frequency: 2.37,
		lemma: "中国共産党"
	},
	{
		rank: 14501,
		frequency: 2.37,
		lemma: "塚"
	},
	{
		rank: 14502,
		frequency: 2.37,
		lemma: "アジ"
	},
	{
		rank: 14503,
		frequency: 2.36,
		lemma: "杉本"
	},
	{
		rank: 14504,
		frequency: 2.36,
		lemma: "恐るべき"
	},
	{
		rank: 14505,
		frequency: 2.36,
		lemma: "デュアル"
	},
	{
		rank: 14506,
		frequency: 2.36,
		lemma: "精神病"
	},
	{
		rank: 14507,
		frequency: 2.36,
		lemma: "嗅ぐ"
	},
	{
		rank: 14508,
		frequency: 2.36,
		lemma: "初恋"
	},
	{
		rank: 14509,
		frequency: 2.36,
		lemma: "試料"
	},
	{
		rank: 14510,
		frequency: 2.36,
		lemma: "一昔"
	},
	{
		rank: 14511,
		frequency: 2.36,
		lemma: "繋げる"
	},
	{
		rank: 14512,
		frequency: 2.36,
		lemma: "おまかせ"
	},
	{
		rank: 14513,
		frequency: 2.36,
		lemma: "長調"
	},
	{
		rank: 14514,
		frequency: 2.36,
		lemma: "飛び降りる"
	},
	{
		rank: 14515,
		frequency: 2.36,
		lemma: "主審"
	},
	{
		rank: 14516,
		frequency: 2.36,
		lemma: "西海岸"
	},
	{
		rank: 14517,
		frequency: 2.36,
		lemma: "ニュースレター"
	},
	{
		rank: 14518,
		frequency: 2.36,
		lemma: "稲葉"
	},
	{
		rank: 14519,
		frequency: 2.36,
		lemma: "さめる"
	},
	{
		rank: 14520,
		frequency: 2.36,
		lemma: "あいかわらず"
	},
	{
		rank: 14521,
		frequency: 2.36,
		lemma: "二日酔い"
	},
	{
		rank: 14522,
		frequency: 2.36,
		lemma: "ドロ"
	},
	{
		rank: 14523,
		frequency: 2.36,
		lemma: "乱す"
	},
	{
		rank: 14524,
		frequency: 2.36,
		lemma: "÷"
	},
	{
		rank: 14525,
		frequency: 2.36,
		lemma: "タイガース"
	},
	{
		rank: 14526,
		frequency: 2.36,
		lemma: "サーカス"
	},
	{
		rank: 14527,
		frequency: 2.36,
		lemma: "公示"
	},
	{
		rank: 14528,
		frequency: 2.36,
		lemma: "客室"
	},
	{
		rank: 14529,
		frequency: 2.36,
		lemma: "決めつける"
	},
	{
		rank: 14530,
		frequency: 2.36,
		lemma: "救命"
	},
	{
		rank: 14531,
		frequency: 2.36,
		lemma: "結び付ける"
	},
	{
		rank: 14532,
		frequency: 2.36,
		lemma: "退去"
	},
	{
		rank: 14533,
		frequency: 2.36,
		lemma: "人名"
	},
	{
		rank: 14534,
		frequency: 2.36,
		lemma: "思索"
	},
	{
		rank: 14535,
		frequency: 2.36,
		lemma: "税別"
	},
	{
		rank: 14536,
		frequency: 2.36,
		lemma: "中央アジア"
	},
	{
		rank: 14537,
		frequency: 2.36,
		lemma: "漁"
	},
	{
		rank: 14538,
		frequency: 2.36,
		lemma: "則る"
	},
	{
		rank: 14539,
		frequency: 2.36,
		lemma: "逆行"
	},
	{
		rank: 14540,
		frequency: 2.36,
		lemma: "貸"
	},
	{
		rank: 14541,
		frequency: 2.36,
		lemma: "低温"
	},
	{
		rank: 14542,
		frequency: 2.36,
		lemma: "やり直し"
	},
	{
		rank: 14543,
		frequency: 2.36,
		lemma: "溶接"
	},
	{
		rank: 14544,
		frequency: 2.36,
		lemma: "特段"
	},
	{
		rank: 14545,
		frequency: 2.36,
		lemma: "ふじ"
	},
	{
		rank: 14546,
		frequency: 2.36,
		lemma: "浴室"
	},
	{
		rank: 14547,
		frequency: 2.36,
		lemma: "山積み"
	},
	{
		rank: 14548,
		frequency: 2.36,
		lemma: "上乗せ"
	},
	{
		rank: 14549,
		frequency: 2.35,
		lemma: "ＳＳ"
	},
	{
		rank: 14550,
		frequency: 2.35,
		lemma: "サイレン"
	},
	{
		rank: 14551,
		frequency: 2.35,
		lemma: "品格"
	},
	{
		rank: 14552,
		frequency: 2.35,
		lemma: "頼み"
	},
	{
		rank: 14553,
		frequency: 2.35,
		lemma: "小麦粉"
	},
	{
		rank: 14554,
		frequency: 2.35,
		lemma: "不可避"
	},
	{
		rank: 14555,
		frequency: 2.35,
		lemma: "打破"
	},
	{
		rank: 14556,
		frequency: 2.35,
		lemma: "メッセンジャー"
	},
	{
		rank: 14557,
		frequency: 2.35,
		lemma: "待てる"
	},
	{
		rank: 14558,
		frequency: 2.35,
		lemma: "斡旋"
	},
	{
		rank: 14559,
		frequency: 2.35,
		lemma: "行財政"
	},
	{
		rank: 14560,
		frequency: 2.35,
		lemma: "直視"
	},
	{
		rank: 14561,
		frequency: 2.35,
		lemma: "終点"
	},
	{
		rank: 14562,
		frequency: 2.35,
		lemma: "尋常"
	},
	{
		rank: 14563,
		frequency: 2.35,
		lemma: "賞与"
	},
	{
		rank: 14564,
		frequency: 2.35,
		lemma: "校内"
	},
	{
		rank: 14565,
		frequency: 2.35,
		lemma: "信憑"
	},
	{
		rank: 14566,
		frequency: 2.35,
		lemma: "鳩山"
	},
	{
		rank: 14567,
		frequency: 2.35,
		lemma: "祖父母"
	},
	{
		rank: 14568,
		frequency: 2.35,
		lemma: "免税"
	},
	{
		rank: 14569,
		frequency: 2.35,
		lemma: "エディタ"
	},
	{
		rank: 14570,
		frequency: 2.35,
		lemma: "レオン"
	},
	{
		rank: 14571,
		frequency: 2.35,
		lemma: "おちる"
	},
	{
		rank: 14572,
		frequency: 2.35,
		lemma: "仕草"
	},
	{
		rank: 14573,
		frequency: 2.35,
		lemma: "抵触"
	},
	{
		rank: 14574,
		frequency: 2.35,
		lemma: "出稼ぎ"
	},
	{
		rank: 14575,
		frequency: 2.35,
		lemma: "キモ"
	},
	{
		rank: 14576,
		frequency: 2.35,
		lemma: "力不足"
	},
	{
		rank: 14577,
		frequency: 2.35,
		lemma: "効能"
	},
	{
		rank: 14578,
		frequency: 2.35,
		lemma: "あの世"
	},
	{
		rank: 14579,
		frequency: 2.34,
		lemma: "脳みそ"
	},
	{
		rank: 14580,
		frequency: 2.34,
		lemma: "白色"
	},
	{
		rank: 14581,
		frequency: 2.34,
		lemma: "外界"
	},
	{
		rank: 14582,
		frequency: 2.34,
		lemma: "毛沢東"
	},
	{
		rank: 14583,
		frequency: 2.34,
		lemma: "蔵書"
	},
	{
		rank: 14584,
		frequency: 2.34,
		lemma: "服従"
	},
	{
		rank: 14585,
		frequency: 2.34,
		lemma: "極意"
	},
	{
		rank: 14586,
		frequency: 2.34,
		lemma: "打ち明ける"
	},
	{
		rank: 14587,
		frequency: 2.34,
		lemma: "エッセー"
	},
	{
		rank: 14588,
		frequency: 2.34,
		lemma: "発進"
	},
	{
		rank: 14589,
		frequency: 2.34,
		lemma: "カンヌ"
	},
	{
		rank: 14590,
		frequency: 2.34,
		lemma: "スポンジ"
	},
	{
		rank: 14591,
		frequency: 2.34,
		lemma: "近江"
	},
	{
		rank: 14592,
		frequency: 2.34,
		lemma: "身柄"
	},
	{
		rank: 14593,
		frequency: 2.34,
		lemma: "徹す"
	},
	{
		rank: 14594,
		frequency: 2.34,
		lemma: "皇后"
	},
	{
		rank: 14595,
		frequency: 2.34,
		lemma: "もどき"
	},
	{
		rank: 14596,
		frequency: 2.34,
		lemma: "揶揄"
	},
	{
		rank: 14597,
		frequency: 2.34,
		lemma: "徴兵"
	},
	{
		rank: 14598,
		frequency: 2.34,
		lemma: "会食"
	},
	{
		rank: 14599,
		frequency: 2.34,
		lemma: "耐性"
	},
	{
		rank: 14600,
		frequency: 2.34,
		lemma: "川柳"
	},
	{
		rank: 14601,
		frequency: 2.34,
		lemma: "パンドラ"
	},
	{
		rank: 14602,
		frequency: 2.34,
		lemma: "初旬"
	},
	{
		rank: 14603,
		frequency: 2.34,
		lemma: "売り込む"
	},
	{
		rank: 14604,
		frequency: 2.34,
		lemma: "こらえる"
	},
	{
		rank: 14605,
		frequency: 2.34,
		lemma: "ポータブル"
	},
	{
		rank: 14606,
		frequency: 2.34,
		lemma: "じゃー"
	},
	{
		rank: 14607,
		frequency: 2.34,
		lemma: "飛びつく"
	},
	{
		rank: 14608,
		frequency: 2.34,
		lemma: "真珠"
	},
	{
		rank: 14609,
		frequency: 2.34,
		lemma: "ピカ"
	},
	{
		rank: 14610,
		frequency: 2.34,
		lemma: "半角"
	},
	{
		rank: 14611,
		frequency: 2.34,
		lemma: "たたえる"
	},
	{
		rank: 14612,
		frequency: 2.34,
		lemma: "トロント"
	},
	{
		rank: 14613,
		frequency: 2.33,
		lemma: "スライス"
	},
	{
		rank: 14614,
		frequency: 2.33,
		lemma: "きもの"
	},
	{
		rank: 14615,
		frequency: 2.33,
		lemma: "イースター"
	},
	{
		rank: 14616,
		frequency: 2.33,
		lemma: "ホークス"
	},
	{
		rank: 14617,
		frequency: 2.33,
		lemma: "武術"
	},
	{
		rank: 14618,
		frequency: 2.33,
		lemma: "くどい"
	},
	{
		rank: 14619,
		frequency: 2.33,
		lemma: "呪う"
	},
	{
		rank: 14620,
		frequency: 2.33,
		lemma: "後述"
	},
	{
		rank: 14621,
		frequency: 2.33,
		lemma: "揺らぐ"
	},
	{
		rank: 14622,
		frequency: 2.33,
		lemma: "電線"
	},
	{
		rank: 14623,
		frequency: 2.33,
		lemma: "ノア"
	},
	{
		rank: 14624,
		frequency: 2.33,
		lemma: "ガザ"
	},
	{
		rank: 14625,
		frequency: 2.33,
		lemma: "脱退"
	},
	{
		rank: 14626,
		frequency: 2.33,
		lemma: "右下"
	},
	{
		rank: 14627,
		frequency: 2.33,
		lemma: "義父"
	},
	{
		rank: 14628,
		frequency: 2.33,
		lemma: "鍵盤"
	},
	{
		rank: 14629,
		frequency: 2.33,
		lemma: "自営業"
	},
	{
		rank: 14630,
		frequency: 2.33,
		lemma: "光線"
	},
	{
		rank: 14631,
		frequency: 2.33,
		lemma: "成田空港"
	},
	{
		rank: 14632,
		frequency: 2.33,
		lemma: "腑"
	},
	{
		rank: 14633,
		frequency: 2.33,
		lemma: "続報"
	},
	{
		rank: 14634,
		frequency: 2.33,
		lemma: "宣教師"
	},
	{
		rank: 14635,
		frequency: 2.33,
		lemma: "必殺"
	},
	{
		rank: 14636,
		frequency: 2.33,
		lemma: "内的"
	},
	{
		rank: 14637,
		frequency: 2.33,
		lemma: "ゼリー"
	},
	{
		rank: 14638,
		frequency: 2.33,
		lemma: "横目"
	},
	{
		rank: 14639,
		frequency: 2.33,
		lemma: "ツケ"
	},
	{
		rank: 14640,
		frequency: 2.33,
		lemma: "同性"
	},
	{
		rank: 14641,
		frequency: 2.33,
		lemma: "一目瞭然"
	},
	{
		rank: 14642,
		frequency: 2.33,
		lemma: "人手"
	},
	{
		rank: 14643,
		frequency: 2.33,
		lemma: "文藝春秋"
	},
	{
		rank: 14644,
		frequency: 2.32,
		lemma: "キツ"
	},
	{
		rank: 14645,
		frequency: 2.32,
		lemma: "絡める"
	},
	{
		rank: 14646,
		frequency: 2.32,
		lemma: "明け方"
	},
	{
		rank: 14647,
		frequency: 2.32,
		lemma: "聞き手"
	},
	{
		rank: 14648,
		frequency: 2.32,
		lemma: "拙い"
	},
	{
		rank: 14649,
		frequency: 2.32,
		lemma: "酸味"
	},
	{
		rank: 14650,
		frequency: 2.32,
		lemma: "レッテル"
	},
	{
		rank: 14651,
		frequency: 2.32,
		lemma: "漢方"
	},
	{
		rank: 14652,
		frequency: 2.32,
		lemma: "祭壇"
	},
	{
		rank: 14653,
		frequency: 2.32,
		lemma: "十字"
	},
	{
		rank: 14654,
		frequency: 2.32,
		lemma: "製剤"
	},
	{
		rank: 14655,
		frequency: 2.32,
		lemma: "主食"
	},
	{
		rank: 14656,
		frequency: 2.32,
		lemma: "剃る"
	},
	{
		rank: 14657,
		frequency: 2.32,
		lemma: "男系"
	},
	{
		rank: 14658,
		frequency: 2.32,
		lemma: "火曜"
	},
	{
		rank: 14659,
		frequency: 2.32,
		lemma: "イスラーム"
	},
	{
		rank: 14660,
		frequency: 2.32,
		lemma: "災い"
	},
	{
		rank: 14661,
		frequency: 2.32,
		lemma: "くっきり"
	},
	{
		rank: 14662,
		frequency: 2.32,
		lemma: "民謡"
	},
	{
		rank: 14663,
		frequency: 2.32,
		lemma: "日の出"
	},
	{
		rank: 14664,
		frequency: 2.32,
		lemma: "杉並"
	},
	{
		rank: 14665,
		frequency: 2.32,
		lemma: "直人"
	},
	{
		rank: 14666,
		frequency: 2.32,
		lemma: "特筆"
	},
	{
		rank: 14667,
		frequency: 2.32,
		lemma: "駆け引き"
	},
	{
		rank: 14668,
		frequency: 2.32,
		lemma: "バスケットボール"
	},
	{
		rank: 14669,
		frequency: 2.32,
		lemma: "かぎる"
	},
	{
		rank: 14670,
		frequency: 2.32,
		lemma: "西宮"
	},
	{
		rank: 14671,
		frequency: 2.32,
		lemma: "くらし"
	},
	{
		rank: 14672,
		frequency: 2.32,
		lemma: "ペニス"
	},
	{
		rank: 14673,
		frequency: 2.32,
		lemma: "発刊"
	},
	{
		rank: 14674,
		frequency: 2.32,
		lemma: "主将"
	},
	{
		rank: 14675,
		frequency: 2.32,
		lemma: "ギャラ"
	},
	{
		rank: 14676,
		frequency: 2.32,
		lemma: "さながら"
	},
	{
		rank: 14677,
		frequency: 2.32,
		lemma: "個所"
	},
	{
		rank: 14678,
		frequency: 2.32,
		lemma: "つかえる"
	},
	{
		rank: 14679,
		frequency: 2.32,
		lemma: "申し入れ"
	},
	{
		rank: 14680,
		frequency: 2.32,
		lemma: "住友"
	},
	{
		rank: 14681,
		frequency: 2.32,
		lemma: "いぬ"
	},
	{
		rank: 14682,
		frequency: 2.32,
		lemma: "投信"
	},
	{
		rank: 14683,
		frequency: 2.32,
		lemma: "鯛"
	},
	{
		rank: 14684,
		frequency: 2.32,
		lemma: "バーゲン"
	},
	{
		rank: 14685,
		frequency: 2.32,
		lemma: "メンバ"
	},
	{
		rank: 14686,
		frequency: 2.32,
		lemma: "エディション"
	},
	{
		rank: 14687,
		frequency: 2.32,
		lemma: "人間らしい"
	},
	{
		rank: 14688,
		frequency: 2.32,
		lemma: "レバノン"
	},
	{
		rank: 14689,
		frequency: 2.31,
		lemma: "厳正"
	},
	{
		rank: 14690,
		frequency: 2.31,
		lemma: "つぶる"
	},
	{
		rank: 14691,
		frequency: 2.31,
		lemma: "しっぽ"
	},
	{
		rank: 14692,
		frequency: 2.31,
		lemma: "もの凄い"
	},
	{
		rank: 14693,
		frequency: 2.31,
		lemma: "起点"
	},
	{
		rank: 14694,
		frequency: 2.31,
		lemma: "灯油"
	},
	{
		rank: 14695,
		frequency: 2.31,
		lemma: "観覧"
	},
	{
		rank: 14696,
		frequency: 2.31,
		lemma: "ぼやく"
	},
	{
		rank: 14697,
		frequency: 2.31,
		lemma: "バッシング"
	},
	{
		rank: 14698,
		frequency: 2.31,
		lemma: "棚田"
	},
	{
		rank: 14699,
		frequency: 2.31,
		lemma: "あんま"
	},
	{
		rank: 14700,
		frequency: 2.31,
		lemma: "柴"
	},
	{
		rank: 14701,
		frequency: 2.31,
		lemma: "プレーオフ"
	},
	{
		rank: 14702,
		frequency: 2.31,
		lemma: "空母"
	},
	{
		rank: 14703,
		frequency: 2.31,
		lemma: "マウント"
	},
	{
		rank: 14704,
		frequency: 2.31,
		lemma: "カゴ"
	},
	{
		rank: 14705,
		frequency: 2.31,
		lemma: "まこと"
	},
	{
		rank: 14706,
		frequency: 2.31,
		lemma: "生意気"
	},
	{
		rank: 14707,
		frequency: 2.31,
		lemma: "けす"
	},
	{
		rank: 14708,
		frequency: 2.31,
		lemma: "有線"
	},
	{
		rank: 14709,
		frequency: 2.31,
		lemma: "ハンバーグ"
	},
	{
		rank: 14710,
		frequency: 2.31,
		lemma: "右肩"
	},
	{
		rank: 14711,
		frequency: 2.31,
		lemma: "カキ"
	},
	{
		rank: 14712,
		frequency: 2.31,
		lemma: "出先"
	},
	{
		rank: 14713,
		frequency: 2.31,
		lemma: "巻末"
	},
	{
		rank: 14714,
		frequency: 2.31,
		lemma: "走り出す"
	},
	{
		rank: 14715,
		frequency: 2.31,
		lemma: "揺さぶる"
	},
	{
		rank: 14716,
		frequency: 2.31,
		lemma: "義母"
	},
	{
		rank: 14717,
		frequency: 2.31,
		lemma: "學"
	},
	{
		rank: 14718,
		frequency: 2.31,
		lemma: "団子"
	},
	{
		rank: 14719,
		frequency: 2.31,
		lemma: "よろこぶ"
	},
	{
		rank: 14720,
		frequency: 2.31,
		lemma: "段々"
	},
	{
		rank: 14721,
		frequency: 2.31,
		lemma: "何せ"
	},
	{
		rank: 14722,
		frequency: 2.31,
		lemma: "スマイル"
	},
	{
		rank: 14723,
		frequency: 2.31,
		lemma: "差し支える"
	},
	{
		rank: 14724,
		frequency: 2.31,
		lemma: "収縮"
	},
	{
		rank: 14725,
		frequency: 2.31,
		lemma: "締めくくる"
	},
	{
		rank: 14726,
		frequency: 2.31,
		lemma: "キチン"
	},
	{
		rank: 14727,
		frequency: 2.31,
		lemma: "検知"
	},
	{
		rank: 14728,
		frequency: 2.31,
		lemma: "ゾウ"
	},
	{
		rank: 14729,
		frequency: 2.3,
		lemma: "裏腹"
	},
	{
		rank: 14730,
		frequency: 2.3,
		lemma: "小柄"
	},
	{
		rank: 14731,
		frequency: 2.3,
		lemma: "密輸"
	},
	{
		rank: 14732,
		frequency: 2.3,
		lemma: "ＰＭ"
	},
	{
		rank: 14733,
		frequency: 2.3,
		lemma: "ロフト"
	},
	{
		rank: 14734,
		frequency: 2.3,
		lemma: "倒壊"
	},
	{
		rank: 14735,
		frequency: 2.3,
		lemma: "中越"
	},
	{
		rank: 14736,
		frequency: 2.3,
		lemma: "在外"
	},
	{
		rank: 14737,
		frequency: 2.3,
		lemma: "すくう"
	},
	{
		rank: 14738,
		frequency: 2.3,
		lemma: "団員"
	},
	{
		rank: 14739,
		frequency: 2.3,
		lemma: "セメント"
	},
	{
		rank: 14740,
		frequency: 2.3,
		lemma: "負け犬"
	},
	{
		rank: 14741,
		frequency: 2.3,
		lemma: "便秘"
	},
	{
		rank: 14742,
		frequency: 2.3,
		lemma: "思い描く"
	},
	{
		rank: 14743,
		frequency: 2.3,
		lemma: "電報"
	},
	{
		rank: 14744,
		frequency: 2.3,
		lemma: "ＦＩＦＡ"
	},
	{
		rank: 14745,
		frequency: 2.3,
		lemma: "適"
	},
	{
		rank: 14746,
		frequency: 2.3,
		lemma: "奪"
	},
	{
		rank: 14747,
		frequency: 2.3,
		lemma: "顕微鏡"
	},
	{
		rank: 14748,
		frequency: 2.3,
		lemma: "ドラフト"
	},
	{
		rank: 14749,
		frequency: 2.3,
		lemma: "アーサー"
	},
	{
		rank: 14750,
		frequency: 2.3,
		lemma: "プレビュー"
	},
	{
		rank: 14751,
		frequency: 2.3,
		lemma: "官民"
	},
	{
		rank: 14752,
		frequency: 2.3,
		lemma: "最下位"
	},
	{
		rank: 14753,
		frequency: 2.3,
		lemma: "セーフ"
	},
	{
		rank: 14754,
		frequency: 2.3,
		lemma: "入れ替え"
	},
	{
		rank: 14755,
		frequency: 2.3,
		lemma: "醸成"
	},
	{
		rank: 14756,
		frequency: 2.3,
		lemma: "丞"
	},
	{
		rank: 14757,
		frequency: 2.3,
		lemma: "関心事"
	},
	{
		rank: 14758,
		frequency: 2.3,
		lemma: "顕在"
	},
	{
		rank: 14759,
		frequency: 2.3,
		lemma: "直近"
	},
	{
		rank: 14760,
		frequency: 2.3,
		lemma: "豪快"
	},
	{
		rank: 14761,
		frequency: 2.3,
		lemma: "シーツ"
	},
	{
		rank: 14762,
		frequency: 2.3,
		lemma: "討つ"
	},
	{
		rank: 14763,
		frequency: 2.3,
		lemma: "きたす"
	},
	{
		rank: 14764,
		frequency: 2.3,
		lemma: "健一"
	},
	{
		rank: 14765,
		frequency: 2.3,
		lemma: "嘆き"
	},
	{
		rank: 14766,
		frequency: 2.3,
		lemma: "冤罪"
	},
	{
		rank: 14767,
		frequency: 2.3,
		lemma: "重心"
	},
	{
		rank: 14768,
		frequency: 2.3,
		lemma: "一味"
	},
	{
		rank: 14769,
		frequency: 2.3,
		lemma: "無差別"
	},
	{
		rank: 14770,
		frequency: 2.3,
		lemma: "仏像"
	},
	{
		rank: 14771,
		frequency: 2.3,
		lemma: "売れ行き"
	},
	{
		rank: 14772,
		frequency: 2.3,
		lemma: "ミレニアム"
	},
	{
		rank: 14773,
		frequency: 2.3,
		lemma: "乱れ"
	},
	{
		rank: 14774,
		frequency: 2.3,
		lemma: "マーカー"
	},
	{
		rank: 14775,
		frequency: 2.3,
		lemma: "蛋白"
	},
	{
		rank: 14776,
		frequency: 2.3,
		lemma: "乞う"
	},
	{
		rank: 14777,
		frequency: 2.3,
		lemma: "和夫"
	},
	{
		rank: 14778,
		frequency: 2.3,
		lemma: "現況"
	},
	{
		rank: 14779,
		frequency: 2.3,
		lemma: "ガーナ"
	},
	{
		rank: 14780,
		frequency: 2.3,
		lemma: "アングル"
	},
	{
		rank: 14781,
		frequency: 2.3,
		lemma: "切り替わる"
	},
	{
		rank: 14782,
		frequency: 2.3,
		lemma: "検察庁"
	},
	{
		rank: 14783,
		frequency: 2.29,
		lemma: "実地"
	},
	{
		rank: 14784,
		frequency: 2.29,
		lemma: "こら"
	},
	{
		rank: 14785,
		frequency: 2.29,
		lemma: "さびしい"
	},
	{
		rank: 14786,
		frequency: 2.29,
		lemma: "心得る"
	},
	{
		rank: 14787,
		frequency: 2.29,
		lemma: "晩餐"
	},
	{
		rank: 14788,
		frequency: 2.29,
		lemma: "とっさ"
	},
	{
		rank: 14789,
		frequency: 2.29,
		lemma: "利己"
	},
	{
		rank: 14790,
		frequency: 2.29,
		lemma: "顧みる"
	},
	{
		rank: 14791,
		frequency: 2.29,
		lemma: "ふまえる"
	},
	{
		rank: 14792,
		frequency: 2.29,
		lemma: "慕う"
	},
	{
		rank: 14793,
		frequency: 2.29,
		lemma: "講堂"
	},
	{
		rank: 14794,
		frequency: 2.29,
		lemma: "プランニング"
	},
	{
		rank: 14795,
		frequency: 2.29,
		lemma: "ズーム"
	},
	{
		rank: 14796,
		frequency: 2.29,
		lemma: "彗星"
	},
	{
		rank: 14797,
		frequency: 2.29,
		lemma: "サンプリング"
	},
	{
		rank: 14798,
		frequency: 2.29,
		lemma: "西口"
	},
	{
		rank: 14799,
		frequency: 2.29,
		lemma: "山脈"
	},
	{
		rank: 14800,
		frequency: 2.29,
		lemma: "年長"
	},
	{
		rank: 14801,
		frequency: 2.29,
		lemma: "果てしない"
	},
	{
		rank: 14802,
		frequency: 2.29,
		lemma: "男らしい"
	},
	{
		rank: 14803,
		frequency: 2.29,
		lemma: "称える"
	},
	{
		rank: 14804,
		frequency: 2.29,
		lemma: "投融資"
	},
	{
		rank: 14805,
		frequency: 2.29,
		lemma: "後回し"
	},
	{
		rank: 14806,
		frequency: 2.29,
		lemma: "旅費"
	},
	{
		rank: 14807,
		frequency: 2.29,
		lemma: "航路"
	},
	{
		rank: 14808,
		frequency: 2.29,
		lemma: "結社"
	},
	{
		rank: 14809,
		frequency: 2.29,
		lemma: "ナマ"
	},
	{
		rank: 14810,
		frequency: 2.29,
		lemma: "バスケ"
	},
	{
		rank: 14811,
		frequency: 2.29,
		lemma: "川島"
	},
	{
		rank: 14812,
		frequency: 2.29,
		lemma: "てっきり"
	},
	{
		rank: 14813,
		frequency: 2.29,
		lemma: "食用"
	},
	{
		rank: 14814,
		frequency: 2.28,
		lemma: "間抜け"
	},
	{
		rank: 14815,
		frequency: 2.28,
		lemma: "ブレーク"
	},
	{
		rank: 14816,
		frequency: 2.28,
		lemma: "ほどほど"
	},
	{
		rank: 14817,
		frequency: 2.28,
		lemma: "ジーン"
	},
	{
		rank: 14818,
		frequency: 2.28,
		lemma: "気象庁"
	},
	{
		rank: 14819,
		frequency: 2.28,
		lemma: "鵬"
	},
	{
		rank: 14820,
		frequency: 2.28,
		lemma: "醸し出す"
	},
	{
		rank: 14821,
		frequency: 2.28,
		lemma: "勉"
	},
	{
		rank: 14822,
		frequency: 2.28,
		lemma: "粉砕"
	},
	{
		rank: 14823,
		frequency: 2.28,
		lemma: "読み手"
	},
	{
		rank: 14824,
		frequency: 2.28,
		lemma: "一々"
	},
	{
		rank: 14825,
		frequency: 2.28,
		lemma: "葵"
	},
	{
		rank: 14826,
		frequency: 2.28,
		lemma: "引数"
	},
	{
		rank: 14827,
		frequency: 2.28,
		lemma: "リタイア"
	},
	{
		rank: 14828,
		frequency: 2.28,
		lemma: "近道"
	},
	{
		rank: 14829,
		frequency: 2.28,
		lemma: "本拠地"
	},
	{
		rank: 14830,
		frequency: 2.28,
		lemma: "人魚"
	},
	{
		rank: 14831,
		frequency: 2.28,
		lemma: "床屋"
	},
	{
		rank: 14832,
		frequency: 2.28,
		lemma: "志す"
	},
	{
		rank: 14833,
		frequency: 2.28,
		lemma: "隠れ"
	},
	{
		rank: 14834,
		frequency: 2.28,
		lemma: "転売"
	},
	{
		rank: 14835,
		frequency: 2.28,
		lemma: "断ち切る"
	},
	{
		rank: 14836,
		frequency: 2.28,
		lemma: "前身"
	},
	{
		rank: 14837,
		frequency: 2.28,
		lemma: "八幡"
	},
	{
		rank: 14838,
		frequency: 2.28,
		lemma: "つなぎ"
	},
	{
		rank: 14839,
		frequency: 2.28,
		lemma: "ブラッド"
	},
	{
		rank: 14840,
		frequency: 2.28,
		lemma: "齋藤"
	},
	{
		rank: 14841,
		frequency: 2.28,
		lemma: "探知"
	},
	{
		rank: 14842,
		frequency: 2.28,
		lemma: "フッ"
	},
	{
		rank: 14843,
		frequency: 2.28,
		lemma: "ティーン"
	},
	{
		rank: 14844,
		frequency: 2.28,
		lemma: "断じて"
	},
	{
		rank: 14845,
		frequency: 2.28,
		lemma: "試乗"
	},
	{
		rank: 14846,
		frequency: 2.28,
		lemma: "築き上げる"
	},
	{
		rank: 14847,
		frequency: 2.28,
		lemma: "五感"
	},
	{
		rank: 14848,
		frequency: 2.28,
		lemma: "語句"
	},
	{
		rank: 14849,
		frequency: 2.28,
		lemma: "環状"
	},
	{
		rank: 14850,
		frequency: 2.28,
		lemma: "ぶろ"
	},
	{
		rank: 14851,
		frequency: 2.28,
		lemma: "フライパン"
	},
	{
		rank: 14852,
		frequency: 2.28,
		lemma: "あご"
	},
	{
		rank: 14853,
		frequency: 2.28,
		lemma: "コーディング"
	},
	{
		rank: 14854,
		frequency: 2.28,
		lemma: "血統"
	},
	{
		rank: 14855,
		frequency: 2.28,
		lemma: "模"
	},
	{
		rank: 14856,
		frequency: 2.28,
		lemma: "気取る"
	},
	{
		rank: 14857,
		frequency: 2.28,
		lemma: "大袈裟"
	},
	{
		rank: 14858,
		frequency: 2.28,
		lemma: "建材"
	},
	{
		rank: 14859,
		frequency: 2.28,
		lemma: "シャフト"
	},
	{
		rank: 14860,
		frequency: 2.28,
		lemma: "ステッカー"
	},
	{
		rank: 14861,
		frequency: 2.28,
		lemma: "直に"
	},
	{
		rank: 14862,
		frequency: 2.28,
		lemma: "代議士"
	},
	{
		rank: 14863,
		frequency: 2.28,
		lemma: "駅伝"
	},
	{
		rank: 14864,
		frequency: 2.28,
		lemma: "スリランカ"
	},
	{
		rank: 14865,
		frequency: 2.28,
		lemma: "総て"
	},
	{
		rank: 14866,
		frequency: 2.28,
		lemma: "附帯"
	},
	{
		rank: 14867,
		frequency: 2.28,
		lemma: "絵柄"
	},
	{
		rank: 14868,
		frequency: 2.28,
		lemma: "忘れ"
	},
	{
		rank: 14869,
		frequency: 2.28,
		lemma: "濱"
	},
	{
		rank: 14870,
		frequency: 2.27,
		lemma: "ルネッサンス"
	},
	{
		rank: 14871,
		frequency: 2.27,
		lemma: "平ら"
	},
	{
		rank: 14872,
		frequency: 2.27,
		lemma: "シーア"
	},
	{
		rank: 14873,
		frequency: 2.27,
		lemma: "農作物"
	},
	{
		rank: 14874,
		frequency: 2.27,
		lemma: "総勢"
	},
	{
		rank: 14875,
		frequency: 2.27,
		lemma: "出向"
	},
	{
		rank: 14876,
		frequency: 2.27,
		lemma: "佐伯"
	},
	{
		rank: 14877,
		frequency: 2.27,
		lemma: "飛び立つ"
	},
	{
		rank: 14878,
		frequency: 2.27,
		lemma: "普"
	},
	{
		rank: 14879,
		frequency: 2.27,
		lemma: "自虐"
	},
	{
		rank: 14880,
		frequency: 2.27,
		lemma: "つつく"
	},
	{
		rank: 14881,
		frequency: 2.27,
		lemma: "被験者"
	},
	{
		rank: 14882,
		frequency: 2.27,
		lemma: "陳腐"
	},
	{
		rank: 14883,
		frequency: 2.27,
		lemma: "重傷"
	},
	{
		rank: 14884,
		frequency: 2.27,
		lemma: "小雨"
	},
	{
		rank: 14885,
		frequency: 2.27,
		lemma: "偽物"
	},
	{
		rank: 14886,
		frequency: 2.27,
		lemma: "精製"
	},
	{
		rank: 14887,
		frequency: 2.27,
		lemma: "引き合い"
	},
	{
		rank: 14888,
		frequency: 2.27,
		lemma: "割愛"
	},
	{
		rank: 14889,
		frequency: 2.27,
		lemma: "長らく"
	},
	{
		rank: 14890,
		frequency: 2.27,
		lemma: "水銀"
	},
	{
		rank: 14891,
		frequency: 2.27,
		lemma: "まなざし"
	},
	{
		rank: 14892,
		frequency: 2.27,
		lemma: "言い出す"
	},
	{
		rank: 14893,
		frequency: 2.27,
		lemma: "覇権"
	},
	{
		rank: 14894,
		frequency: 2.27,
		lemma: "ナナ"
	},
	{
		rank: 14895,
		frequency: 2.27,
		lemma: "森下"
	},
	{
		rank: 14896,
		frequency: 2.27,
		lemma: "公用"
	},
	{
		rank: 14897,
		frequency: 2.27,
		lemma: "観音"
	},
	{
		rank: 14898,
		frequency: 2.27,
		lemma: "手腕"
	},
	{
		rank: 14899,
		frequency: 2.27,
		lemma: "ライム"
	},
	{
		rank: 14900,
		frequency: 2.27,
		lemma: "ひらめく"
	},
	{
		rank: 14901,
		frequency: 2.27,
		lemma: "定型"
	},
	{
		rank: 14902,
		frequency: 2.27,
		lemma: "懸案"
	},
	{
		rank: 14903,
		frequency: 2.27,
		lemma: "中谷"
	},
	{
		rank: 14904,
		frequency: 2.27,
		lemma: "駆け込む"
	},
	{
		rank: 14905,
		frequency: 2.27,
		lemma: "和音"
	},
	{
		rank: 14906,
		frequency: 2.27,
		lemma: "来客"
	},
	{
		rank: 14907,
		frequency: 2.27,
		lemma: "教え子"
	},
	{
		rank: 14908,
		frequency: 2.27,
		lemma: "模試"
	},
	{
		rank: 14909,
		frequency: 2.27,
		lemma: "等価"
	},
	{
		rank: 14910,
		frequency: 2.26,
		lemma: "近世"
	},
	{
		rank: 14911,
		frequency: 2.26,
		lemma: "宣教"
	},
	{
		rank: 14912,
		frequency: 2.26,
		lemma: "ロケーション"
	},
	{
		rank: 14913,
		frequency: 2.26,
		lemma: "アパレル"
	},
	{
		rank: 14914,
		frequency: 2.26,
		lemma: "ふしぎ"
	},
	{
		rank: 14915,
		frequency: 2.26,
		lemma: "調印"
	},
	{
		rank: 14916,
		frequency: 2.26,
		lemma: "あえる"
	},
	{
		rank: 14917,
		frequency: 2.26,
		lemma: "専売"
	},
	{
		rank: 14918,
		frequency: 2.26,
		lemma: "敬称"
	},
	{
		rank: 14919,
		frequency: 2.26,
		lemma: "送迎"
	},
	{
		rank: 14920,
		frequency: 2.26,
		lemma: "どっぷり"
	},
	{
		rank: 14921,
		frequency: 2.26,
		lemma: "ケット"
	},
	{
		rank: 14922,
		frequency: 2.26,
		lemma: "インテリジェンス"
	},
	{
		rank: 14923,
		frequency: 2.26,
		lemma: "編入"
	},
	{
		rank: 14924,
		frequency: 2.26,
		lemma: "逸品"
	},
	{
		rank: 14925,
		frequency: 2.26,
		lemma: "ブス"
	},
	{
		rank: 14926,
		frequency: 2.26,
		lemma: "きゅう"
	},
	{
		rank: 14927,
		frequency: 2.26,
		lemma: "長続き"
	},
	{
		rank: 14928,
		frequency: 2.26,
		lemma: "答案"
	},
	{
		rank: 14929,
		frequency: 2.26,
		lemma: "じい"
	},
	{
		rank: 14930,
		frequency: 2.26,
		lemma: "電磁"
	},
	{
		rank: 14931,
		frequency: 2.26,
		lemma: "みゆき"
	},
	{
		rank: 14932,
		frequency: 2.26,
		lemma: "ハト"
	},
	{
		rank: 14933,
		frequency: 2.26,
		lemma: "練馬"
	},
	{
		rank: 14934,
		frequency: 2.26,
		lemma: "牧"
	},
	{
		rank: 14935,
		frequency: 2.26,
		lemma: "ガリ"
	},
	{
		rank: 14936,
		frequency: 2.26,
		lemma: "微分"
	},
	{
		rank: 14937,
		frequency: 2.26,
		lemma: "パラパラ"
	},
	{
		rank: 14938,
		frequency: 2.26,
		lemma: "中等"
	},
	{
		rank: 14939,
		frequency: 2.26,
		lemma: "格付け"
	},
	{
		rank: 14940,
		frequency: 2.26,
		lemma: "洋画"
	},
	{
		rank: 14941,
		frequency: 2.26,
		lemma: "絶叫"
	},
	{
		rank: 14942,
		frequency: 2.26,
		lemma: "終末"
	},
	{
		rank: 14943,
		frequency: 2.26,
		lemma: "帰結"
	},
	{
		rank: 14944,
		frequency: 2.26,
		lemma: "有様"
	},
	{
		rank: 14945,
		frequency: 2.26,
		lemma: "タール"
	},
	{
		rank: 14946,
		frequency: 2.26,
		lemma: "ハイライト"
	},
	{
		rank: 14947,
		frequency: 2.26,
		lemma: "威"
	},
	{
		rank: 14948,
		frequency: 2.26,
		lemma: "筋力"
	},
	{
		rank: 14949,
		frequency: 2.26,
		lemma: "業態"
	},
	{
		rank: 14950,
		frequency: 2.26,
		lemma: "じわじわ"
	},
	{
		rank: 14951,
		frequency: 2.26,
		lemma: "占星術"
	},
	{
		rank: 14952,
		frequency: 2.26,
		lemma: "あったかい"
	},
	{
		rank: 14953,
		frequency: 2.25,
		lemma: "躍進"
	},
	{
		rank: 14954,
		frequency: 2.25,
		lemma: "葉書"
	},
	{
		rank: 14955,
		frequency: 2.25,
		lemma: "アンティーク"
	},
	{
		rank: 14956,
		frequency: 2.25,
		lemma: "トースト"
	},
	{
		rank: 14957,
		frequency: 2.25,
		lemma: "キズ"
	},
	{
		rank: 14958,
		frequency: 2.25,
		lemma: "ただす"
	},
	{
		rank: 14959,
		frequency: 2.25,
		lemma: "旅客"
	},
	{
		rank: 14960,
		frequency: 2.25,
		lemma: "左上"
	},
	{
		rank: 14961,
		frequency: 2.25,
		lemma: "折り紙"
	},
	{
		rank: 14962,
		frequency: 2.25,
		lemma: "ギルド"
	},
	{
		rank: 14963,
		frequency: 2.25,
		lemma: "訓"
	},
	{
		rank: 14964,
		frequency: 2.25,
		lemma: "本性"
	},
	{
		rank: 14965,
		frequency: 2.25,
		lemma: "果樹"
	},
	{
		rank: 14966,
		frequency: 2.25,
		lemma: "鮎"
	},
	{
		rank: 14967,
		frequency: 2.25,
		lemma: "さいたま"
	},
	{
		rank: 14968,
		frequency: 2.25,
		lemma: "河口"
	},
	{
		rank: 14969,
		frequency: 2.25,
		lemma: "学識"
	},
	{
		rank: 14970,
		frequency: 2.25,
		lemma: "魔力"
	},
	{
		rank: 14971,
		frequency: 2.25,
		lemma: "ベンツ"
	},
	{
		rank: 14972,
		frequency: 2.25,
		lemma: "争議"
	},
	{
		rank: 14973,
		frequency: 2.25,
		lemma: "萎縮"
	},
	{
		rank: 14974,
		frequency: 2.25,
		lemma: "溺れる"
	},
	{
		rank: 14975,
		frequency: 2.25,
		lemma: "水谷"
	},
	{
		rank: 14976,
		frequency: 2.25,
		lemma: "格子"
	},
	{
		rank: 14977,
		frequency: 2.25,
		lemma: "堤防"
	},
	{
		rank: 14978,
		frequency: 2.25,
		lemma: "トンボ"
	},
	{
		rank: 14979,
		frequency: 2.25,
		lemma: "片岡"
	},
	{
		rank: 14980,
		frequency: 2.24,
		lemma: "劣等"
	},
	{
		rank: 14981,
		frequency: 2.24,
		lemma: "邦訳"
	},
	{
		rank: 14982,
		frequency: 2.24,
		lemma: "易"
	},
	{
		rank: 14983,
		frequency: 2.24,
		lemma: "なぁー"
	},
	{
		rank: 14984,
		frequency: 2.24,
		lemma: "足音"
	},
	{
		rank: 14985,
		frequency: 2.24,
		lemma: "カンタン"
	},
	{
		rank: 14986,
		frequency: 2.24,
		lemma: "静脈"
	},
	{
		rank: 14987,
		frequency: 2.24,
		lemma: "サーブ"
	},
	{
		rank: 14988,
		frequency: 2.24,
		lemma: "欺瞞"
	},
	{
		rank: 14989,
		frequency: 2.24,
		lemma: "廉価"
	},
	{
		rank: 14990,
		frequency: 2.24,
		lemma: "実技"
	},
	{
		rank: 14991,
		frequency: 2.24,
		lemma: "呆然と"
	},
	{
		rank: 14992,
		frequency: 2.24,
		lemma: "確固たる"
	},
	{
		rank: 14993,
		frequency: 2.24,
		lemma: "丹羽"
	},
	{
		rank: 14994,
		frequency: 2.24,
		lemma: "弁明"
	},
	{
		rank: 14995,
		frequency: 2.24,
		lemma: "摘む"
	},
	{
		rank: 14996,
		frequency: 2.24,
		lemma: "夕べ"
	},
	{
		rank: 14997,
		frequency: 2.24,
		lemma: "売場"
	},
	{
		rank: 14998,
		frequency: 2.24,
		lemma: "たたき台"
	},
	{
		rank: 14999,
		frequency: 2.24,
		lemma: "かしこ"
	},
	{
		rank: 15000,
		frequency: 2.24,
		lemma: "バックグラウンド"
	}
];

function jishoSearch(word) {
    window.open(`https://jisho.org/search/${encodeURIComponent(word)}`, '_blank');
}

let AppContainer = class AppContainer extends s {
    constructor() {
        super();
        this._data = [];
        this._excludes = [];
        this.prepareData();
        this.pickNewWord();
        this._excludes = localStorage.getItem('random-japanese-word:excludes') ? JSON.parse(localStorage.getItem('random-japanese-word:excludes').toString()) : [];
        window.addEventListener('keypress', (e) => {
            console.log(e);
            if (e.key === 's') {
                this.jishoButton.click();
            }
            if (e.key === ' ') {
                this.randomButton.click();
            }
        });
    }
    render() {
        return $ `
    <div id=word>${this.word.lemma}</div>

    <div controls>
      <!-- <div> -->
        <mwc-icon-button icon=menu_book style="color:#4caf50"
          @click=${() => { jishoSearch(this.word.lemma); }}></mwc-icon-button>
        <mwc-icon-button icon=delete style="color:#e53935"
          @click=${_ => { this.addToExcludes(this.word.lemma); }}></mwc-icon-button>
      <!-- </div> -->
      <mwc-icon-button icon=casino
        @click=${_ => this.pickNewWord()}></mwc-icon-button>
    </div>
    `;
    }
    prepareData() {
        this._data = data.filter(word => word.lemma.length > 2);
    }
    pickNewWord() {
        this.word = this.getNewWord();
        (new Audio(`https://assiets.vdegenne.com/data/japanese/audio/${this.word.lemma}`)).play();
    }
    getNewWord() {
        return this._data[~~(Math.random() * this._data.length)];
    }
    addToExcludes(word) {
        this._excludes = [...new Set([...this._excludes, word])];
        localStorage.setItem('random-japanese-word:excludes', JSON.stringify(this._excludes));
        this.pickNewWord();
    }
};
AppContainer.styles = r$3 `
  :host {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: 'Zen Old Mincho', serif;
  }
  #word {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    flex:1;
  }
  [controls] {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding:12px;
    box-sizing: border-box;
  }
  `;
__decorate([
    t$1()
], AppContainer.prototype, "word", void 0);
__decorate([
    i$2('mwc-icon-button[icon=menu_book]')
], AppContainer.prototype, "jishoButton", void 0);
__decorate([
    i$2('mwc-icon-button[icon=casino]')
], AppContainer.prototype, "randomButton", void 0);
AppContainer = __decorate([
    n$2('app-container')
], AppContainer);

export { AppContainer };
