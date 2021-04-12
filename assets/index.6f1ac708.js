import{a0 as e,a1 as n,a2 as t,a4 as a,r as o,j as s,h as r,g as c,k as l,H as i,d as u,q as m,am as p,J as f,an as d,L as v,K as y,ao as b,n as E,ap as g,aq as h}from"./index.80f0967c.js";var N=function(s){e(c,s);var r=n(c);function c(){var e;return t(this,c),(e=r.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return a(c,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,info:n})}},{key:"render",value:function(){var e=this.props,n=e.message,t=e.description,a=e.children,s=this.state,r=s.error,c=s.info,l=c&&c.componentStack?c.componentStack:null,i=void 0===n?(r||"").toString():n,u=void 0===t?l:t;return r?o.createElement(k,{type:"error",message:i,description:o.createElement("pre",null,u)}):a}}]),c}(o.Component),x={success:f,info:d,error:v,warning:y},C={success:b,info:E,error:g,warning:h},k=function(e){var n,t,a=e.description,f=e.prefixCls,d=e.message,v=e.banner,y=e.className,b=void 0===y?"":y,E=e.style,g=e.onMouseEnter,h=e.onMouseLeave,N=e.onClick,k=e.afterClose,w=e.showIcon,O=e.closable,S=e.closeText,j=e.action,L=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t}(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),M=o.useState(!1),I=s(M,2),P=I[0],H=I[1],q=o.useRef(),A=o.useContext(r),T=A.getPrefixCls,_=A.direction,B=T("alert",f),D=function(e){var n;H(!0),null===(n=L.onClose)||void 0===n||n.call(L,e)},J=!!S||O,K=void 0!==(t=L.type)?t:v?"warning":"info",R=!(!v||void 0!==w)||w,z=c(B,"".concat(B,"-").concat(K),(l(n={},"".concat(B,"-with-description"),!!a),l(n,"".concat(B,"-no-icon"),!R),l(n,"".concat(B,"-banner"),!!v),l(n,"".concat(B,"-rtl"),"rtl"===_),n),b),F=function(e){return Object.keys(e).reduce((function(n,t){return"data-"!==t.substr(0,5)&&"aria-"!==t.substr(0,5)&&"role"!==t||"data-__"===t.substr(0,7)||(n[t]=e[t]),n}),{})}(L);return o.createElement(i,{visible:!P,motionName:"".concat(B,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:k},(function(e){var n,t,s=e.className,r=e.style;return o.createElement("div",u({ref:q,"data-show":!P,className:c(z,s),style:u(u({},E),r),onMouseEnter:g,onMouseLeave:h,onClick:N,role:"alert"},F),R?(n=L.icon,t=(a?C:x)[K]||null,n?p(n,o.createElement("span",{className:"".concat(B,"-icon")},n),(function(){return{className:c("".concat(B,"-icon"),l({},n.props.className,n.props.className))}})):o.createElement(t,{className:"".concat(B,"-icon")})):null,o.createElement("div",{className:"".concat(B,"-content")},o.createElement("div",{className:"".concat(B,"-message")},d),o.createElement("div",{className:"".concat(B,"-description")},a)),j?o.createElement("div",{className:"".concat(B,"-action")},j):null,J?o.createElement("button",{type:"button",onClick:D,className:"".concat(B,"-close-icon"),tabIndex:0},S?o.createElement("span",{className:"".concat(B,"-close-text")},S):o.createElement(m,null)):null)}))};k.ErrorBoundary=N;export{k as A};