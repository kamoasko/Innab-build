import{j as e,S as j,A as w,i as y,o as g,p as f,r as l,f as P,u as S,k as C,s as n,q as k,B as d,t as B}from"./index-BPsNrj2t.js";import m from"./index-B9ZG7zKK.js";const N=({partnerSlider:s,onclick:t})=>e.jsx(j,{slidesPerView:3,spaceBetween:32,modules:[w],autoplay:{delay:3e3},breakpoints:{280:{slidesPerView:1,spaceBetween:18},480:{slidesPerView:2},800:{slidesPerView:3}},children:s.map(a=>e.jsx(y,{children:e.jsx(m,{cardtTitle:a.name,text:a.short_description,img:a.image,onClick:t})},a.id))}),T=s=>g({queryKey:["partners",s],queryFn:async()=>{const t=await f.get(`/${s}/get_partners`);return t==null?void 0:t.data},staleTime:1e3*60*5,cacheTime:1e3*60*30}),_=l.memo(({onClick:s,partnersTitle:t})=>{const{lang:a}=P(),{data:i,status:c,error:u}=T(a),{width:x}=S(),{partnersRef:p}=C(),o=l.useCallback(()=>{s()},[s]);return e.jsxs("section",{className:`${n.partners} partners`,ref:p,id:"#partners",children:[e.jsx(k,{title:t}),e.jsxs("div",{className:"container",children:[c==="pending"&&e.jsx(d,{className:n.partnersGrid,children:[...Array(6)].map((r,h)=>e.jsx(B,{component:"div",variant:"rectangular",width:"100%",height:360,className:`${n.partnersCard} flex flexDirectionColumn justifyContentBetween`},h))}),c==="error"&&e.jsx(d,{children:u}),c==="success"&&e.jsx(e.Fragment,{children:x>=1024?e.jsx("div",{className:n.partnersGrid,children:i==null?void 0:i.map(r=>e.jsx(m,{cardtTitle:r.name,text:r.short_description,img:r.image,onClick:o},r.id))}):e.jsx(N,{onclick:o,partnerSlider:i})})]})]})});export{_ as default};
