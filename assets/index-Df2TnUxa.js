import{o as m,p as l,f as d,j as s,H as e,t as u}from"./index-Bkgwm9j_.js";const x=r=>m({queryKey:["rooms",r],queryFn:async()=>{const a=await l.get(`/${r}/get_rooms`);return a==null?void 0:a.data},staleTime:1e3*60*5,cacheTime:1e3*60*30}),j=({title:r})=>{const{lang:a}=d(),{data:c,status:t,error:i}=x(a);return s.jsx("section",{className:e.rooms,children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:e.roomsTitle,children:s.jsx("h2",{children:r})}),s.jsxs("div",{className:e.roomsGrid,children:[t==="pending"&&[...Array(6)].map((o,n)=>s.jsx(u,{variant:"rectangular",height:300,className:e.roomsCard},n)),t==="error"&&s.jsx("p",{children:i}),t==="success"&&c.map(o=>s.jsx("article",{className:e.roomsCard,children:s.jsx("picture",{children:s.jsx("img",{loading:"lazy",src:o.image,alt:""})})},o.id))]})]})})};export{j as default};
