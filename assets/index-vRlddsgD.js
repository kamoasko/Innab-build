import{R as d,r as $,j as s,ar as c,as as h,L as r}from"./index-Cytwkx32.js";const p="_trainingMenu_1el5a_1",M={trainingMenu:p},o=d.memo(({vidCat:e,lang:x,slug:a,subData:m})=>{const[i,t]=$.useState(null),j=n=>{t(l=>l===n?null:n)};return s.jsx("ul",{className:`${M.trainingMenu} trainingMenu flex flexDirectionColumn`,children:m?e==null?void 0:e.map(n=>{var l;return s.jsxs("li",{className:i===n.id?"opened":"",children:[s.jsxs("div",{onClick:()=>j(n.id),className:"flex alignItemsCenter",children:[n.title," ",i===n.id?s.jsx(c,{}):s.jsx(h,{})]}),i===n.id&&s.jsx("ul",{className:"flex flexDirectionColumn",children:(l=n==null?void 0:n.subData)==null?void 0:l.map(u=>s.jsx("li",{children:s.jsx(r,{to:`/${x}/${a}/${n.slug}/${u.slug}`,children:u.title})},u.id))})]},n.id)}):e==null?void 0:e.map(n=>{var l;return s.jsx("li",{children:s.jsx(r,{to:`/${x}/${a}/${n.slug}/${(l=n.subData[0])==null?void 0:l.slug}`,children:n.title})})})})});export{o as default};
