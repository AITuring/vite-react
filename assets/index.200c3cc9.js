import{r as e,ag as t,N as n}from"./index.9061e100.js";import{a as r}from"./index.8ff20789.js";import{P as l}from"./index.66b52300.js";import"./lodash-es.4c8deeae.js";import"./index.9adf51ea.js";var c=Object.defineProperty,o=Object.getOwnPropertyDescriptor;let s=class extends e.Component{constructor(){super(...arguments),this.inc=()=>this.setState({num:this.state.num+1})}render(){const{num:t}=this.state;return e.createElement("div",null,e.createElement("h1",null,"class comp: ",t),e.createElement("button",{onClick:this.inc},"inc()"))}};function a(){const{state:t,setState:r}=n("counter");return e.createElement("div",null,e.createElement("h1",null,"fn comp: ",t.num),e.createElement("button",{onClick:()=>r({num:t.num+1})},"inc()"))}function i(){return e.createElement(l,null,e.createElement(r,null,e.createElement(s,null),e.createElement(a,null)))}s=((e,t,n,r)=>{for(var l,s=r>1?void 0:r?o(t,n):t,a=e.length-1;a>=0;a--)(l=e[a])&&(s=(r?l(t,n,s):l(s))||s);return r&&s&&c(t,n,s),s})([t("counter")],s);export default i;export{a as DemoFn};
