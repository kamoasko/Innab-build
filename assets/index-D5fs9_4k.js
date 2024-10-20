import{x as P,y as B,j as t,L as N,o as q,p as I,r as E,S as z,A,i as F,f as W,u as G,z as L,q as O,t as g,B as b}from"./index-Cw4JIZei.js";function H(a){let{swiper:e,extendParams:v,emit:h,once:n}=a;v({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function c(){if(e.params.cssMode)return;const m=e.getTranslate();e.setTranslate(m),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function r(){if(e.params.cssMode)return;const{touchEventsData:m,touches:p}=e;m.velocities.length===0&&m.velocities.push({position:p[e.isHorizontal()?"startX":"startY"],time:m.touchStartTime}),m.velocities.push({position:p[e.isHorizontal()?"currentX":"currentY"],time:P()})}function j(m){let{currentPos:p}=m;if(e.params.cssMode)return;const{params:s,wrapperEl:T,rtlTranslate:u,snapGrid:l,touchEventsData:d}=e,R=P()-d.touchStartTime;if(p<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(p>-e.maxTranslate()){e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);return}if(s.freeMode.momentum){if(d.velocities.length>1){const o=d.velocities.pop(),f=d.velocities.pop(),D=o.position-f.position,C=o.time-f.time;e.velocity=D/C,e.velocity/=2,Math.abs(e.velocity)<s.freeMode.minimumVelocity&&(e.velocity=0),(C>150||P()-o.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=s.freeMode.momentumVelocityRatio,d.velocities.length=0;let x=1e3*s.freeMode.momentumRatio;const k=e.velocity*x;let i=e.translate+k;u&&(i=-i);let S=!1,M;const y=Math.abs(e.velocity)*20*s.freeMode.momentumBounceRatio;let _;if(i<e.maxTranslate())s.freeMode.momentumBounce?(i+e.maxTranslate()<-y&&(i=e.maxTranslate()-y),M=e.maxTranslate(),S=!0,d.allowMomentumBounce=!0):i=e.maxTranslate(),s.loop&&s.centeredSlides&&(_=!0);else if(i>e.minTranslate())s.freeMode.momentumBounce?(i-e.minTranslate()>y&&(i=e.minTranslate()+y),M=e.minTranslate(),S=!0,d.allowMomentumBounce=!0):i=e.minTranslate(),s.loop&&s.centeredSlides&&(_=!0);else if(s.freeMode.sticky){let o;for(let f=0;f<l.length;f+=1)if(l[f]>-i){o=f;break}Math.abs(l[o]-i)<Math.abs(l[o-1]-i)||e.swipeDirection==="next"?i=l[o]:i=l[o-1],i=-i}if(_&&n("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(u?x=Math.abs((-i-e.translate)/e.velocity):x=Math.abs((i-e.translate)/e.velocity),s.freeMode.sticky){const o=Math.abs((u?-i:i)-e.translate),f=e.slidesSizesGrid[e.activeIndex];o<f?x=s.speed:o<2*f?x=s.speed*1.5:x=s.speed*2.5}}else if(s.freeMode.sticky){e.slideToClosest();return}s.freeMode.momentumBounce&&S?(e.updateProgress(M),e.setTransition(x),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,B(T,()=>{!e||e.destroyed||!d.allowMomentumBounce||(h("momentumBounce"),e.setTransition(s.speed),setTimeout(()=>{e.setTranslate(M),B(T,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(h("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(x),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,B(T,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(s.freeMode.sticky){e.slideToClosest();return}else s.freeMode&&h("_freeModeNoMomentumRelease");(!s.freeMode.momentum||R>=s.longSwipesMs)&&(h("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:c,onTouchMove:r,onTouchEnd:j}})}const X="_customers_6qm08_5",Y="_customerSliderWrapper_6qm08_15",K="_customersText_6qm08_25",Q="_customerCard_6qm08_41",$="_customersReview_6qm08_85",w={customers:X,customerSliderWrapper:Y,customersText:K,customerCard:Q,customersReview:$},V=({img:a,to:e})=>t.jsx("figure",{className:w.customerCard,children:t.jsx(N,{to:e,children:t.jsx("picture",{children:t.jsx("img",{loading:"lazy",src:a,alt:""})})})}),J=a=>q({queryKey:["customers",a],queryFn:async()=>{const e=await I.get(`/${a}/get_customers`);return e==null?void 0:e.data},staleTime:1e3*60*5,cacheTime:1e3*60*30}),U=({customers:a})=>{const e=E.useRef(),v=()=>{var n,c,r;(r=(c=(n=e==null?void 0:e.current)==null?void 0:n.swiper)==null?void 0:c.autoplay)==null||r.stop()},h=()=>{var n,c,r;(r=(c=(n=e==null?void 0:e.current)==null?void 0:n.swiper)==null?void 0:c.autoplay)==null||r.start()};return t.jsx(z,{onMouseOver:v,onMouseLeave:h,ref:e,spaceBetween:20,loop:!0,modules:[A,H],allowTouchMove:!1,autoplay:{delay:0,disableOnInteraction:!1},freeMode:!0,speed:1500,breakpoints:{280:{slidesPerView:2,spaceBetween:12,centeredSlides:!0},340:{slidesPerView:3,spaceBetween:12,centeredSlides:!0},425:{slidesPerView:4,spaceBetween:12},481:{slidesPerView:2},700:{slidesPerView:3},1024:{slidesPerView:4},1200:{slidesPerView:5},1440:{slidesPerView:6},1800:{slidesPerView:8}},children:a==null?void 0:a.map(n=>t.jsx(F,{children:t.jsx(V,{img:n.image,to:n.link})},n.id))})},te=E.memo(E.forwardRef(({homepage:a,about:e,corporative:v},h)=>{const{lang:n}=W(),{data:c,status:r,error:j}=J(n),{width:m}=G(),{data:p,isLoading:s}=L("site"),T=u=>{const l=p.find(d=>d.keyword===u);return l?l.value[n]:u};return t.jsxs("section",{className:w.customers,ref:h,id:"customers",children:[t.jsx(O,{about:e,title:s?t.jsx(g,{variant:"text",height:60,width:200,sx:{margin:"0 auto"}}):p&&T("home_customers_title"),corporative:v}),t.jsx("div",{className:w.customersText,children:t.jsx("p",{children:s?t.jsxs(t.Fragment,{children:[t.jsx(g,{variant:"text",width:800,height:20,sx:{margin:"0 auto"}}),t.jsx(g,{variant:"text",width:600,height:20,sx:{margin:"0 auto"}}),t.jsx(g,{variant:"text",width:300,height:20,sx:{margin:"0 auto"}})]}):p&&T("customers_text")})}),r==="pending"&&t.jsx(b,{sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:t.jsx(g,{variant:"rectangular",width:"100%",height:300,className:"customerCard"})}),r==="error"&&t.jsx(b,{children:j}),t.jsx("div",{className:w.customerSliderWrapper,children:r==="success"&&t.jsx(t.Fragment,{children:v&&m>768?t.jsx("div",{className:"container",children:t.jsx("div",{className:"customerCard",children:c.map(u=>t.jsx(V,{img:u.image,to:u.link},u.id))})}):t.jsx(U,{customers:c})})})]})}));export{te as default};
