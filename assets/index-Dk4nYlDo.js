import{j as e,S as h,A as j,d as f,r as o,u as g,e as v,f as y,h as S,i as p,C}from"./index-CHpVf3yn.js";import _ from"./index-Ujh46hQz.js";import{u as R}from"./index-OEWoc68X.js";const P="_customers_12y2i_5",T="_customerSliderWrapper_12y2i_15",N="_customersText_12y2i_25",V="_customerCard_12y2i_41",k="_customersReview_12y2i_85",t={customers:P,customerSliderWrapper:T,customersText:N,customerCard:V,customersReview:k},x=({img:r})=>e.jsx("figure",{className:t.customerCard,children:e.jsx("picture",{children:e.jsx("img",{loading:"lazy",src:r,alt:""})})}),E=({customers:r})=>e.jsx(h,{spaceBetween:20,loop:!0,modules:[j],autoplay:{delay:3e3},breakpoints:{280:{slidesPerView:2,spaceBetween:12,centeredSlides:!0},340:{slidesPerView:3,spaceBetween:12,centeredSlides:!0},425:{slidesPerView:4,spaceBetween:12},481:{slidesPerView:2},700:{slidesPerView:3},1024:{slidesPerView:4},1200:{slidesPerView:5},1440:{slidesPerView:6},1800:{slidesPerView:8}},children:r==null?void 0:r.map(i=>e.jsx(f,{children:e.jsx(x,{img:i.image})},i.id))}),B=({placeId:r})=>{const[i,l]=o.useState({}),[u,n]=o.useState(null);return o.useEffect(()=>{(async()=>{try{const s=await fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJRbvf7pt9MEARgjHAlEh5G5A&key=AIzaSyCfV-yh-nvSbmfOLJ23TsxTBynxxC82mM0",{mode:"no-cors"});if(!s.ok)throw new Error(`HTTP error! Status: ${s.status}`);const c=await(s==null?void 0:s.json());l((c==null?void 0:c.result)||{})}catch(a){n(a.message)}})()},[]),e.jsxs("div",{className:t.customersReview,children:[e.jsx("div",{className:t.googleMapReviews}),e.jsx("div",{className:t.googleMapRatings})]})},M=o.forwardRef(({homepage:r,about:i,corporative:l},u)=>{const n=g(),{lang:m}=v(),{customers:a,status:s,error:c}=y(d=>d.customers),{width:w}=R();return o.useEffect(()=>{n(S(m))},[m,n]),e.jsxs("section",{className:t.customers,ref:u,children:[e.jsx(_,{about:i,title:"Müştərilərimiz",corporative:l}),e.jsx("div",{className:t.customersText,children:e.jsx("p",{children:"Bank, Sığorta, FMCG, Neft, İT, Təhsil və digər sektorlardan 200-dən çox şirkət əməkdaşlarının peşəkar inkişafında etibarlı tərəfdaş olaraq İnnabı seçmiş və bizim təlim proqramlarımız və xidmətlərimizdən faydalanmışdır."})}),s==="loading"&&e.jsx(p,{sx:{display:"flex",justifyContent:"center",width:"100%"},children:e.jsx(C,{})}),s==="failed"&&e.jsx(p,{children:c}),e.jsx("div",{className:t.customerSliderWrapper,children:s==="succeeded"&&e.jsx(e.Fragment,{children:l&&w>768?e.jsx("div",{className:"container",children:e.jsx("div",{className:"customerCard",children:a.map(d=>e.jsx(x,{img:d.image},d.id))})}):e.jsx(E,{customers:a})})}),r&&e.jsx(B,{})]})});export{M as default};
