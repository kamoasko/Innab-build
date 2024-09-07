import{j as a,L as V,y as G,m as F,z as L,k as W,D as U,E as X,G as Y,H as J,e as q,r as D,n as K,S as B,d as O,s as M,I as Q}from"./index-CHpVf3yn.js";import{u as ss}from"./index-OEWoc68X.js";const R=({title:g,desc:s,img:w,to:c})=>a.jsx("article",{className:"trainingsCard",children:a.jsxs(V,{className:"active",to:c,children:[a.jsx("div",{className:"trainingsImg",children:a.jsx("img",{src:w,alt:g,loading:"lazy"})}),a.jsxs("div",{className:"trainingsCardDet",children:[a.jsx("h4",{children:g}),a.jsxs("p",{children:[s," "]})]})]})});function es(g){let{swiper:s,extendParams:w,on:c,emit:b}=g;const x=G();let m=!1,v=null,j=null,y,o,u,p;w({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),s.scrollbar={el:null,dragEl:null};function E(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:e,rtlTranslate:t}=s,{dragEl:l,el:r}=e,i=s.params.scrollbar,f=s.params.loop?s.progressLoop:s.progress;let C=o,d=(u-o)*f;t?(d=-d,d>0?(C=o-d,d=0):-d+o>u&&(C=u+d)):d<0?(C=o+d,d=0):d+o>u&&(C=u-d),s.isHorizontal()?(l.style.transform=`translate3d(${d}px, 0, 0)`,l.style.width=`${C}px`):(l.style.transform=`translate3d(0px, ${d}px, 0)`,l.style.height=`${C}px`),i.hide&&(clearTimeout(v),r.style.opacity=1,v=setTimeout(()=>{r.style.opacity=0,r.style.transitionDuration="400ms"},1e3))}function N(e){!s.params.scrollbar.el||!s.scrollbar.el||(s.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}function S(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:e}=s,{dragEl:t,el:l}=e;t.style.width="",t.style.height="",u=s.isHorizontal()?l.offsetWidth:l.offsetHeight,p=s.size/(s.virtualSize+s.params.slidesOffsetBefore-(s.params.centeredSlides?s.snapGrid[0]:0)),s.params.scrollbar.dragSize==="auto"?o=u*p:o=parseInt(s.params.scrollbar.dragSize,10),s.isHorizontal()?t.style.width=`${o}px`:t.style.height=`${o}px`,p>=1?l.style.display="none":l.style.display="",s.params.scrollbar.hide&&(l.style.opacity=0),s.params.watchOverflow&&s.enabled&&e.el.classList[s.isLocked?"add":"remove"](s.params.scrollbar.lockClass)}function T(e){return s.isHorizontal()?e.clientX:e.clientY}function z(e){const{scrollbar:t,rtlTranslate:l}=s,{el:r}=t;let i;i=(T(e)-J(r)[s.isHorizontal()?"left":"top"]-(y!==null?y:o/2))/(u-o),i=Math.max(Math.min(i,1),0),l&&(i=1-i);const f=s.minTranslate()+(s.maxTranslate()-s.minTranslate())*i;s.updateProgress(f),s.setTranslate(f),s.updateActiveIndex(),s.updateSlidesClasses()}function n(e){const t=s.params.scrollbar,{scrollbar:l,wrapperEl:r}=s,{el:i,dragEl:f}=l;m=!0,y=e.target===f?T(e)-e.target.getBoundingClientRect()[s.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),r.style.transitionDuration="100ms",f.style.transitionDuration="100ms",z(e),clearTimeout(j),i.style.transitionDuration="0ms",t.hide&&(i.style.opacity=1),s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="none"),b("scrollbarDragStart",e)}function h(e){const{scrollbar:t,wrapperEl:l}=s,{el:r,dragEl:i}=t;m&&(e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1,z(e),l.style.transitionDuration="0ms",r.style.transitionDuration="0ms",i.style.transitionDuration="0ms",b("scrollbarDragMove",e))}function k(e){const t=s.params.scrollbar,{scrollbar:l,wrapperEl:r}=s,{el:i}=l;m&&(m=!1,s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="",r.style.transitionDuration=""),t.hide&&(clearTimeout(j),j=Y(()=>{i.style.opacity=0,i.style.transitionDuration="400ms"},1e3)),b("scrollbarDragEnd",e),t.snapOnRelease&&s.slideToClosest())}function H(e){const{scrollbar:t,params:l}=s,r=t.el;if(!r)return;const i=r,f=l.passiveListeners?{passive:!1,capture:!1}:!1,C=l.passiveListeners?{passive:!0,capture:!1}:!1;if(!i)return;const d=e==="on"?"addEventListener":"removeEventListener";i[d]("pointerdown",n,f),x[d]("pointermove",h,f),x[d]("pointerup",k,C)}function A(){!s.params.scrollbar.el||!s.scrollbar.el||H("on")}function Z(){!s.params.scrollbar.el||!s.scrollbar.el||H("off")}function P(){const{scrollbar:e,el:t}=s;s.params.scrollbar=W(s,s.originalParams.scrollbar,s.params.scrollbar,{el:"swiper-scrollbar"});const l=s.params.scrollbar;if(!l.el)return;let r;if(typeof l.el=="string"&&s.isElement&&(r=s.el.querySelector(l.el)),!r&&typeof l.el=="string"){if(r=x.querySelectorAll(l.el),!r.length)return}else r||(r=l.el);s.params.uniqueNavElements&&typeof l.el=="string"&&r.length>1&&t.querySelectorAll(l.el).length===1&&(r=t.querySelector(l.el)),r.length>0&&(r=r[0]),r.classList.add(s.isHorizontal()?l.horizontalClass:l.verticalClass);let i;r&&(i=r.querySelector(U(s.params.scrollbar.dragClass)),i||(i=X("div",s.params.scrollbar.dragClass),r.append(i))),Object.assign(e,{el:r,dragEl:i}),l.draggable&&A(),r&&r.classList[s.enabled?"remove":"add"](...L(s.params.scrollbar.lockClass))}function $(){const e=s.params.scrollbar,t=s.scrollbar.el;t&&t.classList.remove(...L(s.isHorizontal()?e.horizontalClass:e.verticalClass)),Z()}c("changeDirection",()=>{if(!s.scrollbar||!s.scrollbar.el)return;const e=s.params.scrollbar;let{el:t}=s.scrollbar;t=F(t),t.forEach(l=>{l.classList.remove(e.horizontalClass,e.verticalClass),l.classList.add(s.isHorizontal()?e.horizontalClass:e.verticalClass)})}),c("init",()=>{s.params.scrollbar.enabled===!1?I():(P(),S(),E())}),c("update resize observerUpdate lock unlock changeDirection",()=>{S()}),c("setTranslate",()=>{E()}),c("setTransition",(e,t)=>{N(t)}),c("enable disable",()=>{const{el:e}=s.scrollbar;e&&e.classList[s.enabled?"remove":"add"](...L(s.params.scrollbar.lockClass))}),c("destroy",()=>{$()});const _=()=>{s.el.classList.remove(...L(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.remove(...L(s.params.scrollbar.scrollbarDisabledClass)),P(),S(),E()},I=()=>{s.el.classList.add(...L(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.add(...L(s.params.scrollbar.scrollbarDisabledClass)),$()};Object.assign(s.scrollbar,{enable:_,disable:I,updateSize:S,setTranslate:E,init:P,destroy:$})}const ls=({trainings:g,link:s})=>{const{width:w}=ss(),{lang:c}=q(),[b,x]=D.useState(""),[m,v]=D.useState(!0),[j,y]=D.useState(!1),o=D.useRef(null),{data:u}=K(c),p=u==null?void 0:u.filter(n=>n.parent_id===0),E=n=>{o.current=n,S(n),v(n.isBeginning),y(n.isEnd)},N=n=>{S(n),v(n.isBeginning),y(n.isEnd)},S=n=>{const h=n.realIndex+1,k=n.slides.length;x(`${h}/${k}`)},T=()=>{o.current&&o.current.slidePrev()},z=()=>{o.current&&o.current.slideNext()};return a.jsxs(a.Fragment,{children:[w>=1024?a.jsx(B,{className:"trainingSlider",scrollbar:{hide:!1,draggable:!0},modules:[es],onInit:E,onSlideChange:N,children:a.jsx(O,{children:a.jsx("div",{className:M.trainingsGrid,children:p&&g.map(n=>{var h;return a.jsx(R,{img:n.icon,title:n.title,desc:n.short_description,to:`/${c}/${(h=p[1])==null?void 0:h.slug}/${s}/${n.slug}`},n.id)})})})}):a.jsx(B,{slidesPerView:3,spaceBetween:18,className:"trainingSlider",loop:!0,breakpoints:{280:{slidesPerView:1},320:{slidesPerView:2},480:{spaceBetween:18},767:{slidesPerView:3}},children:g.map(n=>{var h;return a.jsx(O,{children:a.jsx(R,{img:n.icon,title:n.title,desc:n.short_description,to:`/${c}/${(h=p[1])==null?void 0:h.slug}/${s}/${n.slug}`})},n.id)})}),a.jsxs("div",{className:"customPagination",children:[a.jsx("button",{className:"prevTraining",onClick:T,disabled:m,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"16",viewBox:"0 0 56 16",fill:"none",children:a.jsx("path",{d:"M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM56 7L1 7V9L56 9V7Z",fill:"#E4E4E4"})})}),a.jsx("div",{className:"customPagNumbers",children:b}),a.jsx("button",{className:"nextTraining",onClick:z,disabled:j,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"16",viewBox:"0 0 56 16",fill:"none",children:a.jsx("path",{d:"M55.7071 8.70711C56.0976 8.31659 56.0976 7.68342 55.7071 7.2929L49.3431 0.928937C48.9526 0.538412 48.3195 0.538412 47.9289 0.928936C47.5384 1.31946 47.5384 1.95263 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM-8.74228e-08 9L55 9L55 7L8.74228e-08 7L-8.74228e-08 9Z",fill:"#3138E3"})})})]})]})},ts=()=>{var u;const{lang:g}=q(),{data:s,error:w,status:c}=Q(g),[b,x]=D.useState(null),[m,v]=D.useState(null);if(D.useEffect(()=>{c==="success"&&s.length>0&&(x(s[0]),v(s[0]))},[c,s]),c==="error")return a.jsx("div",{children:w});if(c==="pending")return a.jsx("div",{children:"Loading..."});const j=p=>{x(p),v(p)},y=m?m.trainings:((u=s[0])==null?void 0:u.trainings)||[],o=m?m.slug:"";return a.jsxs(a.Fragment,{children:[a.jsx("nav",{className:M.trainingsNavbar,children:a.jsx("ul",{className:`${M.trainingsNavbarMenu} tnMenu flex alignItemsCenter justifyContentBetween`,children:s==null?void 0:s.map(p=>a.jsx("li",{children:a.jsxs(V,{className:`flexCenter flexDirectionColumn ${(b==null?void 0:b.id)===p.id?"active":""}`,onClick:()=>j(p),children:[a.jsx("h3",{children:p.title}),a.jsxs("span",{children:["{ ",p.subtitle," }"]})]})},p.id))})}),a.jsx(ls,{trainings:y,link:o})]})};export{ts as default};