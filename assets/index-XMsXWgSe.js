import{R as r,r as c,ao as f,j as i,ap as j,aq as p,L as h}from"./index-Bkgwm9j_.js";const M="_trainingMenu_1jcaf_1",d={trainingMenu:M},$=r.memo(({vidCat:s,lang:m,slug:x,subData:g})=>{const[t,u]=c.useState({}),a=f();a.pathname.split("/")[4];const o=n=>{u(e=>({...e,[n]:!e[n]}))};return c.useEffect(()=>{const n=a.pathname.split("/")[4],e=s==null?void 0:s.find(l=>l.slug===n);e&&u({[e.id]:!0})},[a.pathname,s]),i.jsx("ul",{className:`${d.trainingMenu} trainingMenu flex flexDirectionColumn`,children:s&&(s==null?void 0:s.map(n=>{var e;return i.jsxs("li",{className:t[n.id]?"opened":"",children:[i.jsxs("div",{onClick:()=>o(n.id),className:"flex alignItemsCenter justifyContentBetween",children:[n.title," ",t[n.id]?i.jsx(j,{}):i.jsx(p,{})]}),t[n.id]&&i.jsx("ul",{className:"flex flexDirectionColumn",children:(e=n==null?void 0:n.subData)==null?void 0:e.map(l=>i.jsx("li",{className:a.pathname.split("/")[5]===l.slug?"active":"",children:i.jsx(h,{to:`/${m}/${x}/${n.slug}/${l.slug}`,children:l.title})},l.id))})]},n.id)}))})});export{$ as default};
