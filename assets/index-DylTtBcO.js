import{j as e,S as w,i as g,o as f,p as P,r as d,f as S,u as y,k as C,s as c,q as k,B as m,t as B}from"./index-B3ygD1XP.js";import x from"./index-BrciHHu_.js";const N=({partnerSlider:s,onclick:r,buttonTitle:i})=>e.jsx(w,{slidesPerView:3,spaceBetween:32,breakpoints:{280:{slidesPerView:1,spaceBetween:18},480:{slidesPerView:2},800:{slidesPerView:3}},children:s.map(t=>e.jsx(g,{children:e.jsx(x,{cardtTitle:t.name,text:t.short_description,img:t.image,onClick:r,buttonTitle:i})},t.id))}),v=s=>f({queryKey:["partners",s],queryFn:async()=>{const r=await P.get(`/${s}/get_partners`);return r==null?void 0:r.data},staleTime:1e3*60*5,cacheTime:1e3*60*30}),_=d.memo(({onClick:s,partnersTitle:r,buttonTitle:i})=>{const{lang:t}=S(),{data:n,status:o,error:u}=v(t),{width:p}=y(),{partnersRef:h}=C(),l=d.useCallback(()=>{s()},[s]);return e.jsxs("section",{className:`${c.partners} partners`,ref:h,id:"#partners",children:[e.jsx(k,{title:r}),e.jsxs("div",{className:"container",children:[o==="pending"&&e.jsx(m,{className:c.partnersGrid,children:[...Array(6)].map((a,j)=>e.jsx(B,{component:"div",variant:"rectangular",width:"100%",height:360,className:`${c.partnersCard} flex flexDirectionColumn justifyContentBetween`},j))}),o==="error"&&e.jsx(m,{children:u}),o==="success"&&e.jsx(e.Fragment,{children:p>=1024?e.jsx("div",{className:c.partnersGrid,children:n==null?void 0:n.map(a=>e.jsx(x,{cardtTitle:a.name,text:a.short_description,img:a.image,onClick:l,buttonTitle:i},a.id))}):e.jsx(N,{onclick:l,partnerSlider:n,buttonTitle:i})})]})]})});export{_ as default};
