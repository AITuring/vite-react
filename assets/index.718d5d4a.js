import{I as we,H as Oe,F as _e,C as Ae,S as Ee,_ as Se,a as Te,b as Re,c as Pe}from"./objectSpread2.bbf7bf98.js";import{A as J,_ as H,C as $e,c as Ce}from"./index.4d156218.js";import{r as D,m as Q,j as T,F as Me}from"./react-venders.8db805b0.js";import"./index.7e967097.js";var I=we;I.Header=Oe;I.Footer=_e;I.Content=Ae;I.Sider=Ee;var Ne=I,De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright",theme:"outlined"},Ie=De,X=function(t,r){return D.exports.createElement(J,H(H({},t),{},{ref:r,icon:Ie}))};X.displayName="CopyrightOutlined";var je=D.exports.forwardRef(X),Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},He=Fe,Y=function(t,r){return D.exports.createElement(J,H(H({},t),{},{ref:r,icon:He}))};Y.displayName="GithubOutlined";var Z=D.exports.forwardRef(Y);function Le(e){if(Array.isArray(e))return Se(e)}function ze(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ge(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(e){return Le(e)||ze(e)||Te(e)||Ge()}var ee=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var n,a,i;if(Array.isArray(t)){if(n=t.length,n!=r.length)return!1;for(a=n;a--!=0;)if(!e(t[a],r[a]))return!1;return!0}if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(a of t.entries())if(!r.has(a[0]))return!1;for(a of t.entries())if(!e(a[1],r.get(a[0])))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(a of t.entries())if(!r.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if(n=t.length,n!=r.length)return!1;for(a=n;a--!=0;)if(t[a]!==r[a])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(r).length)return!1;for(a=n;a--!=0;)if(!Object.prototype.hasOwnProperty.call(r,i[a]))return!1;for(a=n;a--!=0;){var u=i[a];if(!e(t[u],r[u]))return!1}return!0}return t!==t&&r!==r},re=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function We(e,t){return!!(e===t||re(e)&&re(t))}function Be(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!We(e[r],t[r]))return!1;return!0}function te(e,t){t===void 0&&(t=Be);var r,n=[],a,i=!1;function u(){for(var o=[],f=0;f<arguments.length;f++)o[f]=arguments[f];return i&&r===this&&t(o,n)||(a=e.apply(this,o),i=!0,r=this,n=o),a}return u}function Ue(e){for(var t=[],r=0;r<e.length;){var n=e[r];if(n==="*"||n==="+"||n==="?"){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(n==="\\"){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(n==="{"){t.push({type:"OPEN",index:r,value:e[r++]});continue}if(n==="}"){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(n===":"){for(var a="",i=r+1;i<e.length;){var u=e.charCodeAt(i);if(u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||u===95){a+=e[i++];continue}break}if(!a)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:a}),r=i;continue}if(n==="("){var o=1,f="",i=r+1;if(e[i]==="?")throw new TypeError('Pattern cannot start with "?" at '+i);for(;i<e.length;){if(e[i]==="\\"){f+=e[i++]+e[i++];continue}if(e[i]===")"){if(o--,o===0){i++;break}}else if(e[i]==="("&&(o++,e[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+i);f+=e[i++]}if(o)throw new TypeError("Unbalanced pattern at "+r);if(!f)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:f}),r=i;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}function Ke(e,t){t===void 0&&(t={});for(var r=Ue(e),n=t.prefixes,a=n===void 0?"./":n,i="[^"+$(t.delimiter||"/#?")+"]+?",u=[],o=0,f=0,l="",s=function(A){if(f<r.length&&r[f].type===A)return r[f++].value},v=function(A){var R=s(A);if(R!==void 0)return R;var N=r[f],be=N.type,xe=N.index;throw new TypeError("Unexpected "+be+" at "+xe+", expected "+A)},c=function(){for(var A="",R;R=s("CHAR")||s("ESCAPED_CHAR");)A+=R;return A};f<r.length;){var p=s("CHAR"),g=s("NAME"),w=s("PATTERN");if(g||w){var d=p||"";a.indexOf(d)===-1&&(l+=d,d=""),l&&(u.push(l),l=""),u.push({name:g||o++,prefix:d,suffix:"",pattern:w||i,modifier:s("MODIFIER")||""});continue}var O=p||s("ESCAPED_CHAR");if(O){l+=O;continue}l&&(u.push(l),l="");var y=s("OPEN");if(y){var d=c(),_=s("NAME")||"",E=s("PATTERN")||"",M=c();v("CLOSE"),u.push({name:_||(E?o++:""),pattern:_&&!E?i:E,prefix:d,suffix:M,modifier:s("MODIFIER")||""});continue}v("END")}return u}function $(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ne(e){return e&&e.sensitive?"":"i"}function Ve(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}function qe(e,t,r){var n=e.map(function(a){return ae(a,t,r).source});return new RegExp("(?:"+n.join("|")+")",ne(r))}function Je(e,t,r){return Qe(Ke(e,r),t,r)}function Qe(e,t,r){r===void 0&&(r={});for(var n=r.strict,a=n===void 0?!1:n,i=r.start,u=i===void 0?!0:i,o=r.end,f=o===void 0?!0:o,l=r.encode,s=l===void 0?function(A){return A}:l,v="["+$(r.endsWith||"")+"]|$",c="["+$(r.delimiter||"/#?")+"]",p=u?"^":"",g=0,w=e;g<w.length;g++){var d=w[g];if(typeof d=="string")p+=$(s(d));else{var O=$(s(d.prefix)),y=$(s(d.suffix));if(d.pattern)if(t&&t.push(d),O||y)if(d.modifier==="+"||d.modifier==="*"){var _=d.modifier==="*"?"?":"";p+="(?:"+O+"((?:"+d.pattern+")(?:"+y+O+"(?:"+d.pattern+"))*)"+y+")"+_}else p+="(?:"+O+"("+d.pattern+")"+y+")"+d.modifier;else p+="("+d.pattern+")"+d.modifier;else p+="(?:"+O+y+")"+d.modifier}}if(f)a||(p+=c+"?"),p+=r.endsWith?"(?="+v+")":"$";else{var E=e[e.length-1],M=typeof E=="string"?c.indexOf(E[E.length-1])>-1:E===void 0;a||(p+="(?:"+c+"(?="+v+"))?"),M||(p+="(?="+c+"|"+v+")")}return new RegExp(p,ne(r))}function ae(e,t,r){return e instanceof RegExp?Ve(e,t):Array.isArray(e)?qe(e,t,r):Je(e,t,r)}function S(e,t){return t>>>e|t<<32-e}function Xe(e,t,r){return e&t^~e&r}function Ye(e,t,r){return e&t^e&r^t&r}function Ze(e){return S(2,e)^S(13,e)^S(22,e)}function ke(e){return S(6,e)^S(11,e)^S(25,e)}function er(e){return S(7,e)^S(18,e)^e>>>3}function rr(e){return S(17,e)^S(19,e)^e>>>10}function tr(e,t){return e[t&15]+=rr(e[t+14&15])+e[t+9&15]+er(e[t+1&15])}var nr=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],h,x,m,ar="0123456789abcdef";function ie(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function ir(){h=new Array(8),x=new Array(2),m=new Array(64),x[0]=x[1]=0,h[0]=1779033703,h[1]=3144134277,h[2]=1013904242,h[3]=2773480762,h[4]=1359893119,h[5]=2600822924,h[6]=528734635,h[7]=1541459225}function G(){var e,t,r,n,a,i,u,o,f,l,s=new Array(16);e=h[0],t=h[1],r=h[2],n=h[3],a=h[4],i=h[5],u=h[6],o=h[7];for(var v=0;v<16;v++)s[v]=m[(v<<2)+3]|m[(v<<2)+2]<<8|m[(v<<2)+1]<<16|m[v<<2]<<24;for(var c=0;c<64;c++)f=o+ke(a)+Xe(a,i,u)+nr[c],c<16?f+=s[c]:f+=tr(s,c),l=Ze(e)+Ye(e,t,r),o=u,u=i,i=a,a=ie(n,f),n=r,r=t,t=e,e=ie(f,l);h[0]+=e,h[1]+=t,h[2]+=r,h[3]+=n,h[4]+=a,h[5]+=i,h[6]+=u,h[7]+=o}function ur(e,t){var r,n,a=0;n=x[0]>>3&63;var i=t&63;for((x[0]+=t<<3)<t<<3&&x[1]++,x[1]+=t>>29,r=0;r+63<t;r+=64){for(var u=n;u<64;u++)m[u]=e.charCodeAt(a++);G(),n=0}for(var o=0;o<i;o++)m[o]=e.charCodeAt(a++)}function fr(){var e=x[0]>>3&63;if(m[e++]=128,e<=56)for(var t=e;t<56;t++)m[t]=0;else{for(var r=e;r<64;r++)m[r]=0;G();for(var n=0;n<56;n++)m[n]=0}m[56]=x[1]>>>24&255,m[57]=x[1]>>>16&255,m[58]=x[1]>>>8&255,m[59]=x[1]&255,m[60]=x[0]>>>24&255,m[61]=x[0]>>>16&255,m[62]=x[0]>>>8&255,m[63]=x[0]&255,G()}function or(){for(var e=new String,t=0;t<8;t++)for(var r=28;r>=0;r-=4)e+=ar.charAt(h[t]>>>r&15);return e}function lr(e){return ir(),ur(e,e.length),fr(),or()}function L(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(r){return typeof r}:L=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},L(e)}function cr(e,t){return pr(e)||vr(e,t)||B(e,t)||sr()}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,a=!1,i=void 0;try{for(var u=e[Symbol.iterator](),o;!(n=(o=u.next()).done)&&(r.push(o.value),!(t&&r.length===t));n=!0);}catch(f){a=!0,i=f}finally{try{!n&&u.return!=null&&u.return()}finally{if(a)throw i}}return r}}function pr(e){if(Array.isArray(e))return e}function dr(e,t){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=B(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,u=!1,o;return{s:function(){r=e[Symbol.iterator]()},n:function(){var l=r.next();return i=l.done,l},e:function(l){u=!0,o=l},f:function(){try{!i&&r.return!=null&&r.return()}finally{if(u)throw o}}}}function hr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function gr(e,t,r){return t&&ue(e.prototype,t),r&&ue(e,r),e}function yr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function mr(e){var t=fe();return function(){var n=F(e),a;if(t){var i=F(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return br(this,a)}}function br(e,t){return t&&(L(t)==="object"||typeof t=="function")?t:xr(e)}function xr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){var t=typeof Map=="function"?new Map:void 0;return W=function(n){if(n===null||!wr(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return z(n,arguments,F(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),j(a,n)},W(e)}function z(e,t,r){return fe()?z=Reflect.construct:z=function(a,i,u){var o=[null];o.push.apply(o,i);var f=Function.bind.apply(a,o),l=new f;return u&&j(l,u.prototype),l},z.apply(null,arguments)}function fe(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function wr(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function j(e,t){return j=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},j(e,t)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},F(e)}function oe(e){return Ar(e)||_r(e)||B(e)||Or()}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,t){if(!!e){if(typeof e=="string")return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}}function _r(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function Ar(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Er(e,t){if(e==null)return{};var r=Sr(e,t),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Sr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?le(Object(r),!0).forEach(function(n){Tr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Tr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e){return e.split("?")[0].split("#")[0]}var ce=function(t){if(!t.startsWith("http"))return!1;try{var r=new URL(t);return!!r}catch{return!1}},Rr=function(t){var r=t.path;if(!r||r==="/")try{return"/".concat(lr(JSON.stringify(t)))}catch{}return r&&K(r)},Pr=function(t,r){var n=t.name,a=t.locale;return"locale"in t&&a===!1||!n?!1:t.locale||"".concat(r,".").concat(n)},se=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return(t||r).startsWith("/")||ce(t)?t:"/".concat(r,"/").concat(t).replace(/\/\//g,"/").replace(/\/\//g,"/")},$r=function(t,r){var n=t.menu,a=n===void 0?{}:n,i=t.indexRoute,u=t.path,o=u===void 0?"":u,f=t.routes,l=a.name,s=l===void 0?t.name:l,v=a.icon,c=v===void 0?t.icon:v,p=a.hideChildren,g=p===void 0?t.hideChildren:p,w=a.flatMenu,d=w===void 0?t.flatMenu:w,O=i&&Object.keys(i).join(",")!=="redirect"?[b({path:o,menu:a},i)].concat(f||[]):f,y=b({},t);if(s&&(y.name=s),c&&(y.icon=c),O&&O.length){if(g)return delete y.routes,y;var _=V(b(b({},r),{},{data:O}),t);if(d)return _;y.routes=_}return y};function V(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},r=e.data,n=e.formatMessage,a=e.parentName,i=e.locale;return!r||!Array.isArray(r)?[]:r.filter(function(u){return u?u.routes||u.children||u.path||u.layout?!0:(u.redirect||u.unaccessible,!1):!1}).filter(function(u){var o,f;return u.unaccessible&&delete u.name,(u==null||(o=u.menu)===null||o===void 0?void 0:o.name)||(u==null?void 0:u.flatMenu)||(u==null||(f=u.menu)===null||f===void 0?void 0:f.flatMenu)?!0:u.menu!==!1}).map(function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"};u.children&&!u.routes&&(u.routes=u.children,delete u.children);var o=se(u.path,t?t.path:"/"),f=u.name,l=Pr(u,a||"menu"),s=l!==!1&&i!==!1&&n&&l?n({id:l,defaultMessage:f}):f,v=t.pro_layout_parentKeys,c=v===void 0?[]:v;t.routes,t.children,t.icon,t.flatMenu,t.indexRoute;var p=Er(t,["pro_layout_parentKeys","routes","children","icon","flatMenu","indexRoute"]),g=b(b(b({},p),{},{menu:void 0},u),{},{path:o,locale:l,key:u.key||Rr(b(b({},u),{},{path:o})),pro_layout_parentKeys:Array.from(new Set([].concat(oe(u.parentKeys||[]),oe(c),["/".concat(t.key||"").replace(/\/\//g,"/").replace(/\/\//g,"/")]))).filter(function(d){return d&&d!=="/"})});if(s?g.name=s:delete g.name,g.menu===void 0&&delete g.menu,u.routes){var w=V(b(b({},e),{},{data:u.routes,parentName:l||""}),g);g.routes=w&&w.length>0?w:void 0,g.routes||delete g.routes}return $r(g,e)}).flat(1)}var Cr=te(V,ee),Mr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.filter(function(r){return r&&(r.name||r.routes)&&!r.hideInMenu&&!r.redirect}).map(function(r){var n=b({},r);if(n.children&&!n.routes&&(n.routes=r.children),n.routes&&Array.isArray(n.routes)&&!n.hideChildrenInMenu&&n.routes.some(function(i){return i&&!!i.name})){var a=e(n.routes);if(a.length)return b(b({},n),{},{routes:a})}return b(b({},r),{},{routes:void 0})}).filter(function(r){return r})},Nr=function(e){yr(r,e);var t=mr(r);function r(){return hr(this,r),t.apply(this,arguments)}return gr(r,[{key:"get",value:function(a){var i;try{var u=dr(this.entries()),o;try{for(u.s();!(o=u.n()).done;){var f=cr(o.value,2),l=f[0],s=f[1],v=K(l);if(!ce(l)&&ae(v,[]).test(a)){i=s;break}}}catch(c){u.e(c)}finally{u.f()}}catch{i=void 0}return i}}]),r}(W(Map)),Dr=function(t){var r=new Nr,n=function a(i,u){i.forEach(function(o){o&&o.routes&&a(o.routes,o);var f=se(o.path,u?u.path:"/");r.set(K(f),o)})};return n(t),r},Ir=te(Dr,ee),jr=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return t.map(function(r){if(r.routes&&Array.isArray(r.routes)&&r.routes.length>0){var n=e(r.routes);if(n.length)return b(b({},r),{},{routes:n})}var a=b({},r);return delete a.routes,a}).filter(function(r){return r})},Fr=function(t,r,n,a){var i=Cr({data:t,formatMessage:n,locale:r}),u=a?jr(i):Mr(i),o=Ir(i);return{breadcrumb:o,menuData:u}},C={exports:{}};C.exports=ye;C.exports.parse=q;C.exports.compile=Lr;C.exports.tokensToFunction=de;C.exports.tokensToRegExp=ge;var ve="/",pe="./",Hr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function q(e,t){for(var r=[],n=0,a=0,i="",u=t&&t.delimiter||ve,o=t&&t.delimiters||pe,f=!1,l;(l=Hr.exec(e))!==null;){var s=l[0],v=l[1],c=l.index;if(i+=e.slice(a,c),a=c+s.length,v){i+=v[1],f=!0;continue}var p="",g=e[a],w=l[2],d=l[3],O=l[4],y=l[5];if(!f&&i.length){var _=i.length-1;o.indexOf(i[_])>-1&&(p=i[_],i=i.slice(0,_))}i&&(r.push(i),i="",f=!1);var E=p!==""&&g!==void 0&&g!==p,M=y==="+"||y==="*",A=y==="?"||y==="*",R=p||u,N=d||O;r.push({name:w||n++,prefix:p,delimiter:R,optional:A,repeat:M,partial:E,pattern:N?zr(N):"[^"+P(R)+"]+?"})}return(i||a<e.length)&&r.push(i+e.substr(a)),r}function Lr(e,t){return de(q(e,t))}function de(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(n,a){for(var i="",u=a&&a.encode||encodeURIComponent,o=0;o<e.length;o++){var f=e[o];if(typeof f=="string"){i+=f;continue}var l=n?n[f.name]:void 0,s;if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but got array');if(l.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var v=0;v<l.length;v++){if(s=u(l[v],f),!t[o].test(s))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'"');i+=(v===0?f.prefix:f.delimiter)+s}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(s=u(String(l),f),!t[o].test(s))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but got "'+s+'"');i+=f.prefix+s;continue}if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be '+(f.repeat?"an array":"a string"))}return i}}function P(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function zr(e){return e.replace(/([=!:$/()])/g,"\\$1")}function he(e){return e&&e.sensitive?"":"i"}function Gr(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Wr(e,t,r){for(var n=[],a=0;a<e.length;a++)n.push(ye(e[a],t,r).source);return new RegExp("(?:"+n.join("|")+")",he(r))}function Br(e,t,r){return ge(q(e,r),t,r)}function ge(e,t,r){r=r||{};for(var n=r.strict,a=r.start!==!1,i=r.end!==!1,u=P(r.delimiter||ve),o=r.delimiters||pe,f=[].concat(r.endsWith||[]).map(P).concat("$").join("|"),l=a?"^":"",s=e.length===0,v=0;v<e.length;v++){var c=e[v];if(typeof c=="string")l+=P(c),s=v===e.length-1&&o.indexOf(c[c.length-1])>-1;else{var p=c.repeat?"(?:"+c.pattern+")(?:"+P(c.delimiter)+"(?:"+c.pattern+"))*":c.pattern;t&&t.push(c),c.optional?c.partial?l+=P(c.prefix)+"("+p+")?":l+="(?:"+P(c.prefix)+"("+p+"))?":l+=P(c.prefix)+"("+p+")"}}return i?(n||(l+="(?:"+u+")?"),l+=f==="$"?"$":"(?="+f+")"):(n||(l+="(?:"+u+"(?="+f+"))?"),s||(l+="(?="+u+"|"+f+")")),new RegExp(l,he(r))}function ye(e,t,r){return e instanceof RegExp?Gr(e,t):Array.isArray(e)?Wr(e,t,r):Br(e,t,r)}var me=C.exports,Ur=function(t,r,n){if(n){var a=k(n.keys()).find(function(u){return me(u).test(t)});if(a)return n.get(a)}if(r){var i=Object.keys(r).find(function(u){return me(u).test(t)});if(i)return r[i]}return{path:""}},Kr=function(t,r){var n=t.pathname,a=n===void 0?"/":n,i=t.breadcrumb,u=t.breadcrumbMap,o=t.formatMessage,f=t.title,l=t.menu,s=l===void 0?{locale:!1}:l,v=r?"":f||"",c=Ur(a,i,u);if(!c)return{title:v,id:"",pageName:v};var p=c.name;return s.locale!==!1&&c.locale&&o&&(p=o({id:c.locale||"",defaultMessage:c.name})),p?r||!f?{title:p,id:c.locale||"",pageName:p}:{title:"".concat(p," - ").concat(f),id:c.locale||"",pageName:p}:{title:v,id:c.locale||"",pageName:v}},Vr=function(t,r){return Kr(t,r).title},it=Vr;var qr=function(e){var t=e.className,r=e.prefixCls,n=e.links,a=e.copyright,i=e.style,u=D.exports.useContext($e.ConfigContext),o=u.getPrefixCls(r||"pro-global-footer");if((n==null||n===!1||Array.isArray(n)&&n.length===0)&&(a==null||a===!1))return null;var f=Ce(o,t);return Q("div",{className:f,style:i,children:[n&&T("div",{className:"".concat(o,"-links"),children:n.map(function(l){return T("a",{title:l.key,target:l.blankTarget?"_blank":"_self",href:l.href,children:l.title},l.key)})}),a&&T("div",{className:"".concat(o,"-copyright"),children:a})]})},Jr=Ne.Footer,Qr=[{key:"Ant Design Pro",title:"Ant Design Pro",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:T(Z,{}),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design",href:"https://ant.design",blankTarget:!0}],Xr="2019 \u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\u51FA\u54C1",Yr=function(t){var r=t.links,n=t.copyright,a=t.style,i=t.className,u=t.prefixCls;return T(Jr,{className:i,style:Re({padding:0},a),children:T(qr,{links:r!==void 0?r:Qr,prefixCls:u,copyright:n===!1?null:Q(Me,{children:[T(je,{})," ",n||Xr]})})})},Zr=Yr;function kr(e){return k(e).reduce(function(t,r){var n=Pe(r,2),a=n[0],i=n[1];return t[a]=i,t},{})}var et=function e(t,r,n,a){var i=Fr(t,(r==null?void 0:r.locale)||!1,n,!0),u=i.menuData,o=i.breadcrumb;return a?e(a(u),r,n,void 0):{breadcrumb:kr(o),breadcrumbMap:o,menuData:u}},ut=et;function ft(){return T(Zr,{copyright:`${new Date().getFullYear()} theprimone \u51FA\u54C1`,links:[{key:"github",title:T(Z,{}),href:"https://github.com/theprimone/vite-react",blankTarget:!0}]})}export{Zr as D,ft as G,k as _,it as a,Ne as b,me as c,Kr as d,ut as g,ce as i,ae as p,K as s};
