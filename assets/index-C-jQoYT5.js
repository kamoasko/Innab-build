import{R as l,f as o,C as x,j as s,D as r,B as m,E as d,G as h}from"./index-BGLeiApv.js";const p=l.memo(({h2:t,title:n})=>{const{lang:c}=o(),{data:e,status:a,error:i}=x(c);return s.jsxs("div",{className:`${r.contactWrapper} flex alignItemsCenter`,children:[a==="pending"&&s.jsx(m,{sx:{width:"100%"},children:s.jsx(d,{sx:{width:"2rem !important",height:"2rem !important"}})}),a==="error"&&s.jsx("p",{children:i}),a==="success"&&s.jsx("div",{className:r.contactMap,dangerouslySetInnerHTML:{__html:e.map}}),s.jsxs("div",{className:`${r.contactInfos} flex flexDirectionColumn`,children:[t&&s.jsx("h2",{children:n}),a==="success"&&s.jsxs("ul",{className:"flex flexDirectionColumn",children:[s.jsx("li",{children:e.address}),s.jsxs("li",{children:[e.phone1," / ",e.phone2]}),s.jsxs("li",{children:[e.email1," / ",e.email2]})]}),s.jsx(h,{contact:!0,gap:"2.4rem"})]})]})});export{p as default};
