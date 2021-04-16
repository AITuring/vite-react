import{r as e,g as t,d as a,l as r,k as n,a5 as c,o as l,v as s}from"./index.10e37caf.js";var i=function(r){var n=r.prefixCls,c=r.className,l=r.width,s=r.style;return e.createElement("h3",{className:t(n,c),style:a({width:l},s)})},o=function(a){var n=function(e){var t=a.width,r=a.rows,n=void 0===r?2:r;return Array.isArray(t)?t[e]:n-1===e?t:void 0},c=a.prefixCls,l=a.className,s=a.style,i=a.rows,o=r(Array(i)).map((function(t,a){return e.createElement("li",{key:a,style:{width:n(a)}})}));return e.createElement("ul",{className:t(c,l),style:s},o)},u=function(r){var c,l,s=r.prefixCls,i=r.className,o=r.style,u=r.size,m=r.shape,f=t((n(c={},"".concat(s,"-lg"),"large"===u),n(c,"".concat(s,"-sm"),"small"===u),c)),v=t((n(l={},"".concat(s,"-circle"),"circle"===m),n(l,"".concat(s,"-square"),"square"===m),n(l,"".concat(s,"-round"),"round"===m),l)),p="number"==typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{};return e.createElement("span",{className:t(s,f,v,i),style:a(a({},p),o)})},m=function(r){var s=function(c){var s=c.getPrefixCls,i=r.prefixCls,o=r.className,m=r.active,f=s("skeleton",i),v=l(r,["prefixCls"]),p=t(f,"".concat(f,"-element"),n({},"".concat(f,"-active"),m),o);return e.createElement("div",{className:p},e.createElement(u,a({prefixCls:"".concat(f,"-avatar")},v)))};return e.createElement(c,null,s)};m.defaultProps={size:"default",shape:"circle"};var f=function(r){var s=function(c){var s=c.getPrefixCls,i=r.prefixCls,o=r.className,m=r.active,f=s("skeleton",i),v=l(r,["prefixCls"]),p=t(f,"".concat(f,"-element"),n({},"".concat(f,"-active"),m),o);return e.createElement("div",{className:p},e.createElement(u,a({prefixCls:"".concat(f,"-button")},v)))};return e.createElement(c,null,s)};f.defaultProps={size:"default"};var v=function(r){var s=function(c){var s=c.getPrefixCls,i=r.prefixCls,o=r.className,m=r.active,f=s("skeleton",i),v=l(r,["prefixCls"]),p=t(f,"".concat(f,"-element"),n({},"".concat(f,"-active"),m),o);return e.createElement("div",{className:p},e.createElement(u,a({prefixCls:"".concat(f,"-input")},v)))};return e.createElement(c,null,s)};v.defaultProps={size:"default"};function p(e){return e&&"object"===s(e)?e:{}}var d=function(r){var l=function(c){var l=c.getPrefixCls,s=c.direction,m=r.prefixCls,f=r.loading,v=r.className,d=r.children,x=r.avatar,g=r.title,h=r.paragraph,E=r.active,C=r.round,N=l("skeleton",m);if(f||!("loading"in r)){var w,y,q,z=!!x,P=!!g,k=!!h;if(z){var A=a(a({prefixCls:"".concat(N,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(P,k)),p(x));y=e.createElement("div",{className:"".concat(N,"-header")},e.createElement(u,A))}if(P||k){var M,b;if(P){var j=a(a({prefixCls:"".concat(N,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(z,k)),p(g));M=e.createElement(i,j)}if(k){var B=a(a({prefixCls:"".concat(N,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(z,P)),p(h));b=e.createElement(o,B)}q=e.createElement("div",{className:"".concat(N,"-content")},M,b)}var I=t(N,(n(w={},"".concat(N,"-with-avatar"),z),n(w,"".concat(N,"-active"),E),n(w,"".concat(N,"-rtl"),"rtl"===s),n(w,"".concat(N,"-round"),C),w),v);return e.createElement("div",{className:I},y,q)}return d};return e.createElement(c,null,l)};d.defaultProps={avatar:!1,title:!0,paragraph:!0},d.Button=f,d.Avatar=m,d.Input=v,d.Image=function(a){var r=function(r){var n=r.getPrefixCls,c=a.prefixCls,l=a.className,s=a.style,i=n("skeleton",c),o=t(i,"".concat(i,"-element"),l);return e.createElement("div",{className:o},e.createElement("div",{className:t("".concat(i,"-image"),l),style:s},e.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(i,"-image-svg")},e.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(i,"-image-path")}))))};return e.createElement(c,null,r)};export{d as S};
