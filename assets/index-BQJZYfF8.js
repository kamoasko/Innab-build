import{j as e,S as w,A as y,i as g,o as f,p as P,r as l,f as S,u as C,k,s as n,q as B,B as d,t as N}from"./index-cW6Q7kCn.js";import m from"./index-g35k7yp4.js";const T=({partnerSlider:s,onclick:t})=>e.jsx(w,{slidesPerView:3,spaceBetween:32,modules:[y],autoplay:{delay:3e3},breakpoints:{280:{slidesPerView:1,spaceBetween:18},480:{slidesPerView:2},800:{slidesPerView:3}},children:s.map(a=>e.jsx(g,{children:e.jsx(m,{cardtTitle:a.name,text:a.short_description,img:a.image,onClick:t})},a.id))}),v=s=>f({queryKey:["partners",s],queryFn:async()=>{const t=await P.get(`/${s}/get_partners`);return t==null?void 0:t.data},staleTime:1e3*60*5,cacheTime:1e3*60*30}),q=l.memo(({onClick:s,partnersTitle:t,buttonTitle:a})=>{const{lang:u}=S(),{data:i,status:c,error:x}=v(u),{width:p}=C(),{partnersRef:h}=k(),o=l.useCallback(()=>{s()},[s]);return e.jsxs("section",{className:`${n.partners} partners`,ref:h,id:"#partners",children:[e.jsx(B,{title:t}),e.jsxs("div",{className:"container",children:[c==="pending"&&e.jsx(d,{className:n.partnersGrid,children:[...Array(6)].map((r,j)=>e.jsx(N,{component:"div",variant:"rectangular",width:"100%",height:360,className:`${n.partnersCard} flex flexDirectionColumn justifyContentBetween`},j))}),c==="error"&&e.jsx(d,{children:x}),c==="success"&&e.jsx(e.Fragment,{children:p>=1024?e.jsx("div",{className:n.partnersGrid,children:i==null?void 0:i.map(r=>e.jsx(m,{cardtTitle:r.name,text:r.short_description,img:r.image,onClick:o,buttonTitle:a},r.id))}):e.jsx(T,{onclick:o,partnerSlider:i})})]})]})});export{q as default};
