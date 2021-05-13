var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&s(e,o,t[o]);if(r)for(var o of r(t))a.call(t,o)&&s(e,o,t[o]);return e};import{e as c,a as l,p as d,d as u,b as p,h as m,s as _,r as h,l as f,c as g,P as y,R as w,S as E,B as b,U as x,M as O,f as v,g as P,i as L,j}from"./vendor.2edc35c1.js";const R={200:"服务器成功返回请求的数据。",201:"新建或修改数据成功。",202:"一个请求已经进入后台排队（异步任务）。",204:"删除数据成功。",400:"发出的请求有错误，服务器没有进行新建或修改数据的操作。",401:"用户没有权限（令牌、用户名、密码错误）。",403:"用户得到授权，但是访问是被禁止的。",404:"发出的请求针对的是不存在的记录，服务器没有进行操作。",406:"请求的格式不可得。",410:"请求的资源被永久删除，且不会再得到的。",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误，请检查服务器。",502:"网关错误。",503:"服务不可用，服务器暂时过载或维护。",504:"网关超时。"},k=c({errorHandler:e=>{const{response:t}=e;if(t&&t.status){const e=R[t.status]||t.statusText,{status:o,url:r}=t;l.error({message:`请求错误 ${o}: ${r}`,description:e})}else t||l.error({description:"您的网络发生异常，无法连接服务器",message:"网络异常"});return t},credentials:"include"});async function I(e){return k(`/api/login/captcha?mobile=${e}`)}const T=()=>d(window.location.href.split("?")[1]),D=u({state:{status:"",type:""},reducer:{login:async(e,t,o)=>{const r=await async function(e){return k("/api/login/account",{method:"POST",data:e})}(e);if(o.dispatch(D.reducer.changeLoginStatus,r),"ok"===r.status){localStorage.setItem("status","ok");const e=new URL(window.location.href),t=T();p.success("🎉 🎉 🎉  登录成功！");let{redirect:o}=t;if(o){if(new URL(o).origin!==e.origin)return void(window.location.href="/");o=o.substr(e.origin.length),"/"!==window.routerBase&&(o=o.replace(window.routerBase,"/")),o.match(/^\/.*#/)&&(o=o.substr(o.indexOf("#")+1))}m.replace(o||"/")}},logout(){localStorage.removeItem("status");const{redirect:e}=T();"/user/login"===window.location.pathname||e||m.replace({pathname:"/user/login",search:_({redirect:window.location.href})})},changeLoginStatus:e=>({status:e.status,type:e.type})}});const B=u({state:{address:"",avatar:"",email:"",name:"",position:""},reducer:{fetchMe:async()=>(await async function(){return k("/api/me")}()).data}});let S;h({login:D,me:B,counter:{state:{num:1,max:100}}},{plugins:[f]});const A={},V=function(e,t){if(!t)return e();if(void 0===S){const e=document.createElement("link").relList;S=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in A)return;A[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":S,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};var $=[{url:"/api/login/account",method:"post",timeout:240,response:({body:e})=>{const{password:t,userName:o,type:r}=e;return"vite-react"===t&&"admin"===o?{status:"ok",type:r,authority:"admin"}:"vite-react"===t&&"user"===o?{status:"ok",type:r,authority:"user"}:"mobile"===r?{status:"ok",type:r,authority:"admin"}:{status:"error",type:r,authority:"guest"}}},{url:"/api/login/captcha",method:"get",timeout:240,response:()=>({code:0,data:"captcha-xxx"})},{url:"/api/me",method:"get",timeout:240,response:()=>({code:0,data:{address:"广东深圳",avatar:"https://avatars.githubusercontent.com/u/18096089?s=460&u=ac70c17caf8cb7e48d0a4f8b8ef28825688cbb8d&v=4",email:"yuns.xie@qq.com",name:"云深",position:"前端开发工程师"}})}];function M(e){return`${"/"===window.routerBase?"":window.routerBase}${e}`.replace(/\/\//g,"/")}function q(e=0){e&&O.setup({timeout:e})}function C(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function U(e){const t=i({},e);return(null==e?void 0:e.method)||(t.method="GET"),(null==e?void 0:e.body)&&(t.body=function(e){try{return JSON.parse(e)}catch(t){return console.log("loadBody error",t),e}}(e.body)),t}function N(e,r,n){let a=O.XHR._settings.timeout||"200-400";if("string"==typeof a){const e=a.split("-").map((e=>parseInt(e)));a=e[0]+Math.round(Math.random()*(e[1]-e[0]))}return new Promise((s=>{const c="function"==typeof n.template?n.template.call(this,{query:C(e),body:null==r?void 0:r.body,headers:null==r?void 0:r.headers}):O.mock(n.template);setTimeout((()=>{const e={status:200,text:()=>Promise.resolve(JSON.stringify(c)),json:()=>Promise.resolve(c),blob:()=>Promise.resolve(c),formData:()=>Promise.resolve(c),arrayBuffer:()=>Promise.resolve(c)};var r;s((r=i({},e),t(r,o({clone:()=>e}))))}),a)}))}!function(){if(!O||!O.mock)throw new Error("Mock.js is required.");window.__fetchBackup__||(window.__fetchBackup__=window.fetch,window.fetch=function(e,t){const o=M(e),r=U(t),n=r.method;console.log(`${n} ${o}`,"init: ",r);const a=O._mocked,s=Object.keys(a).find((e=>{const t=a[e],n="string"==typeof t.rurl&&t.rurl.indexOf(o)>=0||t.rurl instanceof RegExp&&t.rurl.test(o),s=!t.rtype||t.rtype.toLowerCase()===r.method.toLowerCase();return n&&s}));return s?N(o,r,a[s]):window.__fetchBackup__(e,t)})}(),function(e){for(const{url:t,method:o,response:r,timeout:n}of e)q(n),O.mock(new RegExp(M(t)),o||"get",r)}($),v.render(P.exports.createElement(P.exports.StrictMode,null,P.exports.createElement(L,{history:m},j({routes:[{path:"/",component:g({loader:()=>V((()=>import("./BlankLayout.bc227d46.js")),["/vite-react/assets/BlankLayout.bc227d46.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css"]),loading:y}),routes:[{path:"/user",component:g({loader:()=>V((()=>import("./UserLayout.e9f1d623.js")),["/vite-react/assets/UserLayout.e9f1d623.js","/vite-react/assets/UserLayout.d17bd6ac.css","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/index.ce2e5ad8.js"]),loading:y}),routes:[{name:"登录",path:"/user/login",component:g({loader:()=>V((()=>import("./index.9d5587ea.js")),["/vite-react/assets/index.9d5587ea.js","/vite-react/assets/index.4e8cfb00.css","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/TextArea.5b57afa7.js","/vite-react/assets/TextArea.8b5df817.css","/vite-react/assets/concent.7abe440c.js"]),loading:y}),exact:!0}]},{path:"/",component:g({loader:()=>V((()=>import("./SecurityLayout.a0aec812.js")),["/vite-react/assets/SecurityLayout.a0aec812.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css"]),loading:y}),routes:[{path:"/",component:g({loader:()=>V((()=>import("./BasicLayout.6c43fd85.js")),["/vite-react/assets/BasicLayout.6c43fd85.js","/vite-react/assets/BasicLayout.c65da4af.css","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/index.ce2e5ad8.js"]),loading:y}),routes:[{path:"/",redirect:"/welcome",exact:!0},{path:"/welcome",icon:w.createElement(E),name:"欢迎页",component:g({loader:()=>V((()=>import("./index.562c9bd5.js")),["/vite-react/assets/index.562c9bd5.js","/vite-react/assets/index.ec717cb5.css","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/index.adba6fbe.js","/vite-react/assets/index.77568c40.css","/vite-react/assets/TextArea.5b57afa7.js","/vite-react/assets/TextArea.8b5df817.css"]),loading:y}),exact:!0},{path:"/concent",icon:w.createElement(b),name:"Concent Demo",routes:[{path:"/concent/hello-world",name:"Hello World",component:g({loader:()=>V((()=>import("./index.cd672674.js")),["/vite-react/assets/index.cd672674.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/index.adba6fbe.js","/vite-react/assets/index.77568c40.css","/vite-react/assets/concent.7abe440c.js"]),loading:y}),exact:!0}]},{path:"/account",icon:w.createElement(x),name:"个人页",routes:[{path:"/account/center",name:"个人中心",component:g({loader:()=>V((()=>import("./index.94e0872e.js")),["/vite-react/assets/index.94e0872e.js","/vite-react/assets/index.d5947583.css","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/index.adba6fbe.js","/vite-react/assets/index.77568c40.css","/vite-react/assets/index.8e6a2c5c.js"]),loading:y}),exact:!0},{path:"/account/settings",name:"个人设置",component:g({loader:()=>V((()=>import("./index.be373280.js")),["/vite-react/assets/index.be373280.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css","/vite-react/assets/index.adba6fbe.js","/vite-react/assets/index.77568c40.css","/vite-react/assets/index.8e6a2c5c.js"]),loading:y}),exact:!0}]}]},{component:g({loader:()=>V((()=>import("./404.fd4b6319.js")),["/vite-react/assets/404.fd4b6319.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css"]),loading:y}),exact:!0}]},{component:g({loader:()=>V((()=>import("./404.fd4b6319.js")),["/vite-react/assets/404.fd4b6319.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css"]),loading:y}),exact:!0}]},{component:g({loader:()=>V((()=>import("./404.fd4b6319.js")),["/vite-react/assets/404.fd4b6319.js","/vite-react/assets/vendor.2edc35c1.js","/vite-react/assets/vendor.4d17b151.css"]),loading:y}),exact:!0}]}))),document.getElementById("root"));export{I as g};
