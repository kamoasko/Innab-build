import{g as F,m as G,c as D,a as W,b as U,d as X,n as Y,e as J,j as a,L as V,u as K,f as q,r as E,h as Q,S as I,i as O,s as M,k as ss,l as es}from"./index-BPsNrj2t.js";/* empty css                  */function ls(x){let{swiper:s,extendParams:u,on:d,emit:f}=x;const v=F();let C=!1,g=null,w=null,j,o,m,b;u({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),s.scrollbar={el:null,dragEl:null};function p(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:e,rtlTranslate:t}=s,{dragEl:l,el:r}=e,i=s.params.scrollbar,h=s.params.loop?s.progressLoop:s.progress;let S=o,c=(m-o)*h;t?(c=-c,c>0?(S=o-c,c=0):-c+o>m&&(S=m+c)):c<0?(S=o+c,c=0):c+o>m&&(S=m-c),s.isHorizontal()?(l.style.transform=`translate3d(${c}px, 0, 0)`,l.style.width=`${S}px`):(l.style.transform=`translate3d(0px, ${c}px, 0)`,l.style.height=`${S}px`),i.hide&&(clearTimeout(g),r.style.opacity=1,g=setTimeout(()=>{r.style.opacity=0,r.style.transitionDuration="400ms"},1e3))}function N(e){!s.params.scrollbar.el||!s.scrollbar.el||(s.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}function L(){if(!s.params.scrollbar.el||!s.scrollbar.el)return;const{scrollbar:e}=s,{dragEl:t,el:l}=e;t.style.width="",t.style.height="",m=s.isHorizontal()?l.offsetWidth:l.offsetHeight,b=s.size/(s.virtualSize+s.params.slidesOffsetBefore-(s.params.centeredSlides?s.snapGrid[0]:0)),s.params.scrollbar.dragSize==="auto"?o=m*b:o=parseInt(s.params.scrollbar.dragSize,10),s.isHorizontal()?t.style.width=`${o}px`:t.style.height=`${o}px`,b>=1?l.style.display="none":l.style.display="",s.params.scrollbar.hide&&(l.style.opacity=0),s.params.watchOverflow&&s.enabled&&e.el.classList[s.isLocked?"add":"remove"](s.params.scrollbar.lockClass)}function T(e){return s.isHorizontal()?e.clientX:e.clientY}function z(e){const{scrollbar:t,rtlTranslate:l}=s,{el:r}=t;let i;i=(T(e)-J(r)[s.isHorizontal()?"left":"top"]-(j!==null?j:o/2))/(m-o),i=Math.max(Math.min(i,1),0),l&&(i=1-i);const h=s.minTranslate()+(s.maxTranslate()-s.minTranslate())*i;s.updateProgress(h),s.setTranslate(h),s.updateActiveIndex(),s.updateSlidesClasses()}function n(e){const t=s.params.scrollbar,{scrollbar:l,wrapperEl:r}=s,{el:i,dragEl:h}=l;C=!0,j=e.target===h?T(e)-e.target.getBoundingClientRect()[s.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),r.style.transitionDuration="100ms",h.style.transitionDuration="100ms",z(e),clearTimeout(w),i.style.transitionDuration="0ms",t.hide&&(i.style.opacity=1),s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="none"),f("scrollbarDragStart",e)}function y(e){const{scrollbar:t,wrapperEl:l}=s,{el:r,dragEl:i}=t;C&&(e.preventDefault&&e.cancelable?e.preventDefault():e.returnValue=!1,z(e),l.style.transitionDuration="0ms",r.style.transitionDuration="0ms",i.style.transitionDuration="0ms",f("scrollbarDragMove",e))}function k(e){const t=s.params.scrollbar,{scrollbar:l,wrapperEl:r}=s,{el:i}=l;C&&(C=!1,s.params.cssMode&&(s.wrapperEl.style["scroll-snap-type"]="",r.style.transitionDuration=""),t.hide&&(clearTimeout(w),w=Y(()=>{i.style.opacity=0,i.style.transitionDuration="400ms"},1e3)),f("scrollbarDragEnd",e),t.snapOnRelease&&s.slideToClosest())}function B(e){const{scrollbar:t,params:l}=s,r=t.el;if(!r)return;const i=r,h=l.passiveListeners?{passive:!1,capture:!1}:!1,S=l.passiveListeners?{passive:!0,capture:!1}:!1;if(!i)return;const c=e==="on"?"addEventListener":"removeEventListener";i[c]("pointerdown",n,h),v[c]("pointermove",y,h),v[c]("pointerup",k,S)}function A(){!s.params.scrollbar.el||!s.scrollbar.el||B("on")}function Z(){!s.params.scrollbar.el||!s.scrollbar.el||B("off")}function P(){const{scrollbar:e,el:t}=s;s.params.scrollbar=W(s,s.originalParams.scrollbar,s.params.scrollbar,{el:"swiper-scrollbar"});const l=s.params.scrollbar;if(!l.el)return;let r;if(typeof l.el=="string"&&s.isElement&&(r=s.el.querySelector(l.el)),!r&&typeof l.el=="string"){if(r=v.querySelectorAll(l.el),!r.length)return}else r||(r=l.el);s.params.uniqueNavElements&&typeof l.el=="string"&&r.length>1&&t.querySelectorAll(l.el).length===1&&(r=t.querySelector(l.el)),r.length>0&&(r=r[0]),r.classList.add(s.isHorizontal()?l.horizontalClass:l.verticalClass);let i;r&&(i=r.querySelector(U(s.params.scrollbar.dragClass)),i||(i=X("div",s.params.scrollbar.dragClass),r.append(i))),Object.assign(e,{el:r,dragEl:i}),l.draggable&&A(),r&&r.classList[s.enabled?"remove":"add"](...D(s.params.scrollbar.lockClass))}function $(){const e=s.params.scrollbar,t=s.scrollbar.el;t&&t.classList.remove(...D(s.isHorizontal()?e.horizontalClass:e.verticalClass)),Z()}d("changeDirection",()=>{if(!s.scrollbar||!s.scrollbar.el)return;const e=s.params.scrollbar;let{el:t}=s.scrollbar;t=G(t),t.forEach(l=>{l.classList.remove(e.horizontalClass,e.verticalClass),l.classList.add(s.isHorizontal()?e.horizontalClass:e.verticalClass)})}),d("init",()=>{s.params.scrollbar.enabled===!1?H():(P(),L(),p())}),d("update resize observerUpdate lock unlock changeDirection",()=>{L()}),d("setTranslate",()=>{p()}),d("setTransition",(e,t)=>{N(t)}),d("enable disable",()=>{const{el:e}=s.scrollbar;e&&e.classList[s.enabled?"remove":"add"](...D(s.params.scrollbar.lockClass))}),d("destroy",()=>{$()});const _=()=>{s.el.classList.remove(...D(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.remove(...D(s.params.scrollbar.scrollbarDisabledClass)),P(),L(),p()},H=()=>{s.el.classList.add(...D(s.params.scrollbar.scrollbarDisabledClass)),s.scrollbar.el&&s.scrollbar.el.classList.add(...D(s.params.scrollbar.scrollbarDisabledClass)),$()};Object.assign(s.scrollbar,{enable:_,disable:H,updateSize:L,setTranslate:p,init:P,destroy:$})}const R=({title:x,desc:s,img:u,to:d})=>a.jsx("article",{className:"trainingsCard",children:a.jsxs(V,{className:"active",to:d,children:[a.jsx("div",{className:"trainingsImg",children:a.jsx("img",{src:u,alt:x,loading:"lazy"})}),a.jsxs("div",{className:"trainingsCardDet",children:[a.jsx("h4",{children:x}),a.jsxs("p",{children:[s," "]})]})]})}),as=({trainings:x,link:s})=>{const{width:u}=K(),{lang:d}=q(),[f,v]=E.useState(""),[C,g]=E.useState(!0),[w,j]=E.useState(!1),o=E.useRef(null),{data:m}=Q(d),b=m==null?void 0:m.filter(n=>n.parent_id===0),p=n=>{o.current=n,L(n),g(n.isBeginning),j(n.isEnd)},N=n=>{L(n),g(n.isBeginning),j(n.isEnd)},L=n=>{const y=n.realIndex+1,k=n.slides.length;v(`${y}/${k}`)},T=()=>{o.current&&o.current.slidePrev()},z=()=>{o.current&&o.current.slideNext()};return a.jsxs(a.Fragment,{children:[u>=1024?a.jsx(I,{className:"trainingSlider",scrollbar:{hide:!1,draggable:!0},modules:[ls],onInit:p,onSlideChange:N,children:a.jsx(O,{children:a.jsx("div",{className:M.trainingsGrid,children:b&&x.map(n=>{var y;return a.jsx(R,{img:n.icon,title:n.title,desc:n.short_description,to:`/${d}/${(y=b[1])==null?void 0:y.slug}/${s}/${n.slug}`},n.id)})})})}):a.jsx(I,{slidesPerView:3,spaceBetween:18,className:"trainingSlider",loop:!0,breakpoints:{280:{slidesPerView:1},320:{slidesPerView:2},480:{spaceBetween:18},767:{slidesPerView:3}},children:x.map(n=>{var y;return a.jsx(O,{children:a.jsx(R,{img:n.icon,title:n.title,desc:n.short_description,to:`/${d}/${(y=b[1])==null?void 0:y.slug}/${s}/${n.slug}`})},n.id)})}),a.jsxs("div",{className:"customPagination",children:[a.jsx("button",{className:"prevTraining",onClick:T,disabled:C,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"16",viewBox:"0 0 56 16",fill:"none",children:a.jsx("path",{d:"M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM56 7L1 7V9L56 9V7Z",fill:"#E4E4E4"})})}),a.jsx("div",{className:"customPagNumbers",children:f}),a.jsx("button",{className:"nextTraining",onClick:z,disabled:w,children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"16",viewBox:"0 0 56 16",fill:"none",children:a.jsx("path",{d:"M55.7071 8.70711C56.0976 8.31659 56.0976 7.68342 55.7071 7.2929L49.3431 0.928937C48.9526 0.538412 48.3195 0.538412 47.9289 0.928936C47.5384 1.31946 47.5384 1.95263 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM-8.74228e-08 9L55 9L55 7L8.74228e-08 7L-8.74228e-08 9Z",fill:"#3138E3"})})})]})]})},ns=()=>{var b;const{lang:x}=q(),{trainingsRef:s}=ss(),{data:u,error:d,status:f}=es(x),[v,C]=E.useState(null),[g,w]=E.useState(null);if(E.useEffect(()=>{f==="success"&&u.length>0&&(C(u[0]),w(u[0]))},[f,u]),f==="error")return a.jsx("div",{children:d});if(f==="pending")return a.jsx("div",{children:"Loading..."});const j=p=>{C(p),w(p)},o=g?g.subData:((b=u[0])==null?void 0:b.subData)||[],m=g?g.slug:"";return a.jsxs(a.Fragment,{children:[a.jsx("nav",{className:M.trainingsNavbar,ref:s,children:a.jsx("ul",{className:`${M.trainingsNavbarMenu} tnMenu flex alignItemsCenter justifyContentBetween`,children:u==null?void 0:u.map(p=>a.jsx("li",{children:a.jsxs(V,{className:`flexCenter flexDirectionColumn ${(v==null?void 0:v.id)===p.id?"active":""}`,onClick:()=>j(p),children:[a.jsx("h3",{children:p.title}),a.jsxs("span",{children:["{ ",p.subtitle," }"]})]})},p.id))})}),a.jsx(as,{trainings:o,link:m})]})};export{ns as default};
