import{ah as d,an as u,ao as f}from"./index.4d156218.js";import{u as m,r as g,j as e,n as l,F as h}from"./react-venders.8db805b0.js";const j=({children:o})=>{const{state:t,connectedState:a,dispatch:s}=d({module:"me",connect:{loading:["me/fetchMe"]}}),r=a.loading["me/fetchMe"],c=m(),n=t&&!!t.email,i=u({redirect:window.location.href});return g.exports.useEffect(()=>{s("fetchMe")},[]),!n||r?e(f,{}):!n&&c.pathname!=="/user/login"?e(l,{to:`/user/login?${i}`}):e(h,{children:o})};export{j as default};
