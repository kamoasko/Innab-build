import{R as h,f as j,C as p,j as s,D as n,B as u,t as f,E as g}from"./index-cW6Q7kCn.js";const v=h.memo(({h2:i,title:o})=>{var r,c;const{lang:t}=j(),{data:e,status:a,error:x}=p(t),l=e&&((c=(r=e[0])==null?void 0:r.address[t])==null?void 0:c.split("/"));return s.jsxs("div",{className:`${n.contactWrapper} flex alignItemsCenter`,children:[a==="pending"&&s.jsx(u,{sx:{width:"100%"},children:s.jsx(f,{variant:"rectangular",width:"100%",height:"100vh"})}),a==="error"&&s.jsx("p",{children:x}),a==="success"&&s.jsx("div",{className:`${n.contactMap} flex flexDirectionColumn`,dangerouslySetInnerHTML:{__html:e[0].map}}),s.jsxs("div",{className:`${n.contactInfos} flex flexDirectionColumn`,children:[i&&s.jsx("h2",{children:o}),a==="success"&&s.jsxs("ul",{className:"flex flexDirectionColumn",children:[s.jsx("li",{children:l&&l.map((d,m)=>s.jsx("p",{children:d},m))}),s.jsxs("li",{children:[e[0].phone1," / ",e[0].phone2]}),s.jsxs("li",{children:[e[0].email1," / ",e[0].email2]})]}),s.jsx(g,{contact:!0,gap:"2.4rem"})]})]})});export{v as default};