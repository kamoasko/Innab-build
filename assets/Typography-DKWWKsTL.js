import{a2 as jt,a3 as Lt,a4 as Ft,a5 as Bt,a6 as nt,_ as P,R as ot,a7 as $t,P as V,Q as q,T as w,V as c,r as x,U as H,a8 as Gt,a9 as Vt,aa as Pt,j as y,W as z,X,ab as Et,ac as qt,ad as Ht,ae as wt,af as Xt}from"./index-Cytwkx32.js";import{r as Jt,m as Qt,a as Kt}from"./resolveComponentProps-Ceujw_mt.js";function Yt(){const t=jt(Ft);return t[Lt]||t}const Ct=t=>{let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,(e/100).toFixed(2)};var p={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xt=Symbol.for("react.element"),yt=Symbol.for("react.portal"),st=Symbol.for("react.fragment"),it=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),lt=Symbol.for("react.provider"),ct=Symbol.for("react.context"),Zt=Symbol.for("react.server_context"),pt=Symbol.for("react.forward_ref"),dt=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),Nt;Nt=Symbol.for("react.module.reference");function R(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case xt:switch(t=t.type,t){case st:case at:case it:case dt:case ut:return t;default:switch(t=t&&t.$$typeof,t){case Zt:case ct:case pt:case mt:case ft:case lt:return t;default:return e}}case yt:return e}}}p.ContextConsumer=ct;p.ContextProvider=lt;p.Element=xt;p.ForwardRef=pt;p.Fragment=st;p.Lazy=mt;p.Memo=ft;p.Portal=yt;p.Profiler=at;p.StrictMode=it;p.Suspense=dt;p.SuspenseList=ut;p.isAsyncMode=function(){return!1};p.isConcurrentMode=function(){return!1};p.isContextConsumer=function(t){return R(t)===ct};p.isContextProvider=function(t){return R(t)===lt};p.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===xt};p.isForwardRef=function(t){return R(t)===pt};p.isFragment=function(t){return R(t)===st};p.isLazy=function(t){return R(t)===mt};p.isMemo=function(t){return R(t)===ft};p.isPortal=function(t){return R(t)===yt};p.isProfiler=function(t){return R(t)===at};p.isStrictMode=function(t){return R(t)===it};p.isSuspense=function(t){return R(t)===dt};p.isSuspenseList=function(t){return R(t)===ut};p.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===st||t===at||t===it||t===dt||t===ut||t===te||typeof t=="object"&&t!==null&&(t.$$typeof===mt||t.$$typeof===ft||t.$$typeof===lt||t.$$typeof===ct||t.$$typeof===pt||t.$$typeof===Nt||t.getModuleId!==void 0)};p.typeOf=R;const St={disabled:!1};var ee=function(e){return e.scrollTop},Z="unmounted",O="exited",W="entering",B="entered",gt="exiting",D=function(t){Bt(e,t);function e(s,r){var n;n=t.call(this,s,r)||this;var i=r,a=i&&!i.isMounting?s.enter:s.appear,d;return n.appearStatus=null,s.in?a?(d=O,n.appearStatus=W):d=B:s.unmountOnExit||s.mountOnEnter?d=Z:d=O,n.state={status:d},n.nextCallback=null,n}e.getDerivedStateFromProps=function(r,n){var i=r.in;return i&&n.status===Z?{status:O}:null};var o=e.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(r){var n=null;if(r!==this.props){var i=this.state.status;this.props.in?i!==W&&i!==B&&(n=W):(i===W||i===B)&&(n=gt)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var r=this.props.timeout,n,i,a;return n=i=a=r,r!=null&&typeof r!="number"&&(n=r.exit,i=r.enter,a=r.appear!==void 0?r.appear:i),{exit:n,enter:i,appear:a}},o.updateStatus=function(r,n){if(r===void 0&&(r=!1),n!==null)if(this.cancelNextCallback(),n===W){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:nt.findDOMNode(this);i&&ee(i)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===O&&this.setState({status:Z})},o.performEnter=function(r){var n=this,i=this.props.enter,a=this.context?this.context.isMounting:r,d=this.props.nodeRef?[a]:[nt.findDOMNode(this),a],f=d[0],u=d[1],h=this.getTimeouts(),v=a?h.appear:h.enter;if(!r&&!i||St.disabled){this.safeSetState({status:B},function(){n.props.onEntered(f)});return}this.props.onEnter(f,u),this.safeSetState({status:W},function(){n.props.onEntering(f,u),n.onTransitionEnd(v,function(){n.safeSetState({status:B},function(){n.props.onEntered(f,u)})})})},o.performExit=function(){var r=this,n=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:nt.findDOMNode(this);if(!n||St.disabled){this.safeSetState({status:O},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:gt},function(){r.props.onExiting(a),r.onTransitionEnd(i.exit,function(){r.safeSetState({status:O},function(){r.props.onExited(a)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(r,n){n=this.setNextCallback(n),this.setState(r,n)},o.setNextCallback=function(r){var n=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,n.nextCallback=null,r(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},o.onTransitionEnd=function(r,n){this.setNextCallback(n);var i=this.props.nodeRef?this.props.nodeRef.current:nt.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],f=d[0],u=d[1];this.props.addEndListener(f,u)}r!=null&&setTimeout(this.nextCallback,r)},o.render=function(){var r=this.state.status;if(r===Z)return null;var n=this.props,i=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=P(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ot.createElement($t.Provider,{value:null},typeof i=="function"?i(r,a):ot.cloneElement(ot.Children.only(i),a))},e}(ot.Component);D.contextType=$t;D.propTypes={};function F(){}D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:F,onEntering:F,onEntered:F,onExit:F,onExiting:F,onExited:F};D.UNMOUNTED=Z;D.EXITED=O;D.ENTERING=W;D.ENTERED=B;D.EXITING=gt;function Rt(t,e){var o,s;const{timeout:r,easing:n,style:i={}}=t;return{duration:(o=i.transitionDuration)!=null?o:typeof r=="number"?r:r[e.mode]||0,easing:(s=i.transitionTimingFunction)!=null?s:typeof n=="object"?n[e.mode]:n,delay:i.transitionDelay}}function ne(t){return V("MuiCollapse",t)}q("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const oe=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],re=t=>{const{orientation:e,classes:o}=t,s={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return X(s,ne,o)},se=w("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.state==="entered"&&e.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&e.hidden]}})(({theme:t,ownerState:e})=>c({height:0,overflow:"hidden",transition:t.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},e.state==="entered"&&c({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ie=w("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})(({ownerState:t})=>c({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),ae=w("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})(({ownerState:t})=>c({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),Mt=x.forwardRef(function(e,o){const s=H({props:e,name:"MuiCollapse"}),{addEndListener:r,children:n,className:i,collapsedSize:a="0px",component:d,easing:f,in:u,onEnter:h,onEntered:v,onEntering:g,onExit:T,onExited:b,onExiting:E,orientation:m="vertical",style:k,timeout:C=Gt.standard,TransitionComponent:_=D}=s,U=P(s,oe),N=c({},s,{orientation:m,collapsedSize:a}),$=re(N),J=Yt(),ht=Vt(),M=x.useRef(null),Q=x.useRef(),j=typeof a=="number"?`${a}px`:a,I=m==="horizontal",K=I?"width":"height",tt=x.useRef(null),Dt=Pt(o,tt),L=l=>S=>{if(l){const A=tt.current;S===void 0?l(A):l(A,S)}},vt=()=>M.current?M.current[I?"clientWidth":"clientHeight"]:0,kt=L((l,S)=>{M.current&&I&&(M.current.style.position="absolute"),l.style[K]=j,h&&h(l,S)}),_t=L((l,S)=>{const A=vt();M.current&&I&&(M.current.style.position="");const{duration:Y,easing:et}=Rt({style:k,timeout:C,easing:f},{mode:"enter"});if(C==="auto"){const bt=J.transitions.getAutoHeightDuration(A);l.style.transitionDuration=`${bt}ms`,Q.current=bt}else l.style.transitionDuration=typeof Y=="string"?Y:`${Y}ms`;l.style[K]=`${A}px`,l.style.transitionTimingFunction=et,g&&g(l,S)}),It=L((l,S)=>{l.style[K]="auto",v&&v(l,S)}),Ot=L(l=>{l.style[K]=`${vt()}px`,T&&T(l)}),Wt=L(b),zt=L(l=>{const S=vt(),{duration:A,easing:Y}=Rt({style:k,timeout:C,easing:f},{mode:"exit"});if(C==="auto"){const et=J.transitions.getAutoHeightDuration(S);l.style.transitionDuration=`${et}ms`,Q.current=et}else l.style.transitionDuration=typeof A=="string"?A:`${A}ms`;l.style[K]=j,l.style.transitionTimingFunction=Y,E&&E(l)}),Ut=l=>{C==="auto"&&ht.start(Q.current||0,l),r&&r(tt.current,l)};return y.jsx(_,c({in:u,onEnter:kt,onEntered:It,onEntering:_t,onExit:Ot,onExited:Wt,onExiting:zt,addEndListener:Ut,nodeRef:tt,timeout:C==="auto"?null:C},U,{children:(l,S)=>y.jsx(se,c({as:d,className:z($.root,i,{entered:$.entered,exited:!u&&j==="0px"&&$.hidden}[l]),style:c({[I?"minWidth":"minHeight"]:j},k),ref:Dt},S,{ownerState:c({},N,{state:l}),children:y.jsx(ie,{ownerState:c({},N,{state:l}),className:$.wrapper,ref:M,children:y.jsx(ae,{ownerState:c({},N,{state:l}),className:$.wrapperInner,children:n})})}))}))});Mt.muiSupportAuto=!0;function le(t){return V("MuiPaper",t)}q("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const ce=["className","component","elevation","square","variant"],pe=t=>{const{square:e,elevation:o,variant:s,classes:r}=t,n={root:["root",s,!e&&"rounded",s==="elevation"&&`elevation${o}`]};return X(n,le,r)},de=w("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],!o.square&&e.rounded,o.variant==="elevation"&&e[`elevation${o.elevation}`]]}})(({theme:t,ownerState:e})=>{var o;return c({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!e.square&&{borderRadius:t.shape.borderRadius},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},e.variant==="elevation"&&c({boxShadow:(t.vars||t).shadows[e.elevation]},!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Et("#fff",Ct(e.elevation))}, ${Et("#fff",Ct(e.elevation))})`},t.vars&&{backgroundImage:(o=t.vars.overlays)==null?void 0:o[e.elevation]}))}),ue=x.forwardRef(function(e,o){const s=H({props:e,name:"MuiPaper"}),{className:r,component:n="div",elevation:i=1,square:a=!1,variant:d="elevation"}=s,f=P(s,ce),u=c({},s,{component:n,elevation:i,square:a,variant:d}),h=pe(u);return y.jsx(de,c({as:n,ownerState:u,className:z(h.root,r),ref:o},f))}),At=x.createContext({}),fe=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],me=["component","slots","slotProps"],he=["component"];function ve(t,e){const{className:o,elementType:s,ownerState:r,externalForwardedProps:n,getSlotOwnerState:i,internalForwardedProps:a}=e,d=P(e,fe),{component:f,slots:u={[t]:void 0},slotProps:h={[t]:void 0}}=n;P(n,me);const v=u[t]||s,g=Jt(h[t],r),T=Qt(c({className:o},d,{externalForwardedProps:void 0,externalSlotProps:g})),{props:{component:b},internalRef:E}=T,m=P(T.props,he),k=Pt(E,g==null?void 0:g.ref,e.ref),C=i?i(m):{},_=c({},r,C),U=b,N=Kt(v,c({},t==="root",!u[t]&&a,m,U&&{as:U},{ref:k}),_);return Object.keys(C).forEach($=>{delete N[$]}),[v,N]}function ge(t){return V("MuiAccordion",t)}const rt=q("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),xe=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],ye=t=>{const{classes:e,square:o,expanded:s,disabled:r,disableGutters:n}=t;return X({root:["root",!o&&"rounded",s&&"expanded",r&&"disabled",!n&&"gutters"],region:["region"]},ge,e)},be=w(ue,{name:"MuiAccordion",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${rt.region}`]:e.region},e.root,!o.square&&e.rounded,!o.disableGutters&&e.gutters]}})(({theme:t})=>{const e={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],e),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],e)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${rt.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${rt.disabled}`]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}},({theme:t})=>({variants:[{props:e=>!e.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:e=>!e.disableGutters,style:{[`&.${rt.expanded}`]:{margin:"16px 0"}}}]})),Ue=x.forwardRef(function(e,o){const s=H({props:e,name:"MuiAccordion"}),{children:r,className:n,defaultExpanded:i=!1,disabled:a=!1,disableGutters:d=!1,expanded:f,onChange:u,square:h=!1,slots:v={},slotProps:g={},TransitionComponent:T,TransitionProps:b}=s,E=P(s,xe),[m,k]=qt({controlled:f,default:i,name:"Accordion",state:"expanded"}),C=x.useCallback(I=>{k(!m),u&&u(I,!m)},[m,u,k]),[_,...U]=x.Children.toArray(r),N=x.useMemo(()=>({expanded:m,disabled:a,disableGutters:d,toggle:C}),[m,a,d,C]),$=c({},s,{square:h,disabled:a,disableGutters:d,expanded:m}),J=ye($),ht=c({transition:T},v),M=c({transition:b},g),[Q,j]=ve("transition",{elementType:Mt,externalForwardedProps:{slots:ht,slotProps:M},ownerState:$});return y.jsxs(be,c({className:z(J.root,n),ref:o,ownerState:$,square:h},E,{children:[y.jsx(At.Provider,{value:N,children:_}),y.jsx(Q,c({in:m,timeout:"auto"},j,{children:y.jsx("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region",className:J.region,children:U})}))]}))});function Ee(t){return V("MuiAccordionDetails",t)}q("MuiAccordionDetails",["root"]);const Ce=["className"],Se=t=>{const{classes:e}=t;return X({root:["root"]},Ee,e)},Re=w("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t})=>({padding:t.spacing(1,2,2)})),je=x.forwardRef(function(e,o){const s=H({props:e,name:"MuiAccordionDetails"}),{className:r}=s,n=P(s,Ce),i=s,a=Se(i);return y.jsx(Re,c({className:z(a.root,r),ref:o,ownerState:i},n))});function Te(t){return V("MuiAccordionSummary",t)}const G=q("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),$e=["children","className","expandIcon","focusVisibleClassName","onClick"],Pe=t=>{const{classes:e,expanded:o,disabled:s,disableGutters:r}=t;return X({root:["root",o&&"expanded",s&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",o&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",o&&"expanded"]},Te,e)},we=w(Ht,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t})=>{const e={duration:t.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],e),[`&.${G.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${G.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`&:hover:not(.${G.disabled})`]:{cursor:"pointer"},variants:[{props:o=>!o.disableGutters,style:{[`&.${G.expanded}`]:{minHeight:64}}}]}}),Ne=w("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(t,e)=>e.content})(({theme:t})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:e=>!e.disableGutters,style:{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),[`&.${G.expanded}`]:{margin:"20px 0"}}}]})),Me=w("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(t,e)=>e.expandIconWrapper})(({theme:t})=>({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),[`&.${G.expanded}`]:{transform:"rotate(180deg)"}})),Le=x.forwardRef(function(e,o){const s=H({props:e,name:"MuiAccordionSummary"}),{children:r,className:n,expandIcon:i,focusVisibleClassName:a,onClick:d}=s,f=P(s,$e),{disabled:u=!1,disableGutters:h,expanded:v,toggle:g}=x.useContext(At),T=m=>{g&&g(m),d&&d(m)},b=c({},s,{expanded:v,disabled:u,disableGutters:h}),E=Pe(b);return y.jsxs(we,c({focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":v,className:z(E.root,n),focusVisibleClassName:z(E.focusVisible,a),onClick:T,ref:o,ownerState:b},f,{children:[y.jsx(Ne,{className:E.content,ownerState:b,children:r}),i&&y.jsx(Me,{className:E.expandIconWrapper,ownerState:b,children:i})]}))});function Ae(t){return V("MuiTypography",t)}q("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const De=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ke=t=>{const{align:e,gutterBottom:o,noWrap:s,paragraph:r,variant:n,classes:i}=t,a={root:["root",n,t.align!=="inherit"&&`align${wt(e)}`,o&&"gutterBottom",s&&"noWrap",r&&"paragraph"]};return X(a,Ae,i)},_e=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.variant&&e[o.variant],o.align!=="inherit"&&e[`align${wt(o.align)}`],o.noWrap&&e.noWrap,o.gutterBottom&&e.gutterBottom,o.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>c({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),Tt={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Ie={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Oe=t=>Ie[t]||t,Fe=x.forwardRef(function(e,o){const s=H({props:e,name:"MuiTypography"}),r=Oe(s.color),n=Xt(c({},s,{color:r})),{align:i="inherit",className:a,component:d,gutterBottom:f=!1,noWrap:u=!1,paragraph:h=!1,variant:v="body1",variantMapping:g=Tt}=n,T=P(n,De),b=c({},n,{align:i,color:r,className:a,component:d,gutterBottom:f,noWrap:u,paragraph:h,variant:v,variantMapping:g}),E=d||(h?"p":g[v]||Tt[v])||"span",m=ke(b);return y.jsx(_e,c({as:E,ref:o,ownerState:b,className:z(m.root,a)},T))});export{Ue as A,Fe as T,Le as a,je as b};