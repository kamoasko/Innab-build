import{m as d,a as L,j as i,L as P,s as b,f as B,v as S,h as D,r as k,k as O,B as y,t as R,S as q,A,i as I,F as V,w as _}from"./index-B_GoByLq.js";/* empty css                  */function $(g){let{swiper:e,extendParams:v,on:o,emit:p}=g;v({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function h(a){let n;return a&&typeof a=="string"&&e.isElement&&(n=e.el.querySelector(a),n)?n:(a&&(typeof a=="string"&&(n=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&n&&n.length>1&&e.el.querySelectorAll(a).length===1?n=e.el.querySelector(a):n&&n.length===1&&(n=n[0])),a&&!n?a:n)}function f(a,n){const s=e.params.navigation;a=d(a),a.forEach(t=>{t&&(t.classList[n?"add":"remove"](...s.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](s.lockClass))})}function c(){const{nextEl:a,prevEl:n}=e.navigation;if(e.params.loop){f(n,!1),f(a,!1);return}f(n,e.isBeginning&&!e.params.rewind),f(a,e.isEnd&&!e.params.rewind)}function E(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),p("navigationPrev"))}function r(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),p("navigationNext"))}function C(){const a=e.params.navigation;if(e.params.navigation=L(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let n=h(a.nextEl),s=h(a.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:s}),n=d(n),s=d(s);const t=(l,x)=>{l&&l.addEventListener("click",x==="next"?r:E),!e.enabled&&l&&l.classList.add(...a.lockClass.split(" "))};n.forEach(l=>t(l,"next")),s.forEach(l=>t(l,"prev"))}function j(){let{nextEl:a,prevEl:n}=e.navigation;a=d(a),n=d(n);const s=(t,l)=>{t.removeEventListener("click",l==="next"?r:E),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(t=>s(t,"next")),n.forEach(t=>s(t,"prev"))}o("init",()=>{e.params.navigation.enabled===!1?w():(C(),c())}),o("toEdge fromEdge lock unlock",()=>{c()}),o("destroy",()=>{j()}),o("enable disable",()=>{let{nextEl:a,prevEl:n}=e.navigation;if(a=d(a),n=d(n),e.enabled){c();return}[...a,...n].filter(s=>!!s).forEach(s=>s.classList.add(e.params.navigation.lockClass))}),o("click",(a,n)=>{let{nextEl:s,prevEl:t}=e.navigation;s=d(s),t=d(t);const l=n.target;let x=t.includes(l)||s.includes(l);if(e.isElement&&!x){const u=n.path||n.composedPath&&n.composedPath();u&&(x=u.find(m=>s.includes(m)||t.includes(m)))}if(e.params.navigation.hideOnClick&&!x){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===l||e.pagination.el.contains(l)))return;let u;s.length?u=s[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(u=t[0].classList.contains(e.params.navigation.hiddenClass)),p(u===!0?"navigationShow":"navigationHide"),[...s,...t].filter(m=>!!m).forEach(m=>m.classList.toggle(e.params.navigation.hiddenClass))}});const N=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),C(),c()},w=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),j()};Object.assign(e.navigation,{enable:N,disable:w,update:c,init:C,destroy:j})}const F=({title:g,text:e,icon:v,to:o})=>i.jsxs(P,{to:o,className:`${b.projectsCard} flex flexDirectionColumn alignItemsCenter justifyContentBetween`,children:[i.jsxs("div",{className:b.projectsCardDet,children:[i.jsx("h3",{children:g}),i.jsx("p",{children:e})]}),i.jsx("div",{className:`${b.projectsCardIcon} flexCenter projectsCardS`,children:i.jsx("div",{className:"flexCenter",children:i.jsx("div",{className:"flexCenter",children:i.jsx("img",{loading:"lazy",src:v,alt:g})})})})]}),T=()=>{const{lang:g}=B(),{data:e,status:v,error:o}=S(g),{data:p}=D(g),h=p==null?void 0:p.filter(r=>r.parent_id===0),f=k.useRef(null),c=k.useRef(null),{projectsRef:E}=O();return i.jsxs("div",{className:"projectSliderWrapper",ref:E,children:[v==="pending"&&i.jsx(y,{sx:{display:"flex",justifyContent:"center",width:"100%"},children:i.jsx(R,{variant:"rectangular",width:400,height:486,sx:{borderRadius:"1.6rem"}})}),v==="error"&&i.jsx(y,{children:o}),i.jsx(q,{slidesPerView:3,spaceBetween:32,className:"projectSlider",modules:[$,A],navigation:{prevEl:f.current,nextEl:c.current},onInit:r=>{r.params.navigation.prevEl=f.current,r.params.navigation.nextEl=c.current,r.navigation.update()},autoplay:{delay:3e3},breakpoints:{280:{slidesPerView:1},500:{slidesPerView:2},992:{slidesPerView:3}},children:v==="success"&&h&&e.map(r=>i.jsx(I,{children:i.jsx(F,{title:r.title,text:r.card_description,icon:r.image,to:`${r.is_corporative===1?"career-center":"projects"}/${r.slug}`})},r.id))}),i.jsx("button",{ref:f,className:"flexCenter customBtn prevBtn",children:i.jsx(V,{})}),i.jsx("button",{ref:c,className:"flexCenter customBtn nextBtn",children:i.jsx(_,{})})]})};export{T as default};