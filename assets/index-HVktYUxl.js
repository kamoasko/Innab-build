import{_ as vt,V as d,aa as rt,r as _,ac as Tt,ah as we,ai as Nt,aj as Rt,ak as Je,Q as It,P as Mt,W as Se,j as o,T as le,ae as oe,al as it,am as ct,ab as ut,an as xt,U as zt,ao as At,X as Ft,v as Et,w as Vt,e as Ot,ag as ce,i as dt}from"./index-Cytwkx32.js";import{c as Ht,a as et,g as pt,F as qt,e as Bt,f as ue,E as Pe}from"./index.esm-WLpv2I2j.js";import{r as Gt,m as Wt,a as Yt,e as tt,i as Ie}from"./resolveComponentProps-Ceujw_mt.js";function Me(e){return e&&e.ownerDocument||document}const Ut={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Kt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ne(e){var r;const{elementType:t,externalSlotProps:s,ownerState:c,skipResolvingSlotProps:w=!1}=e,i=vt(e,Kt),f=w?{}:Gt(s,c),{props:b,internalRef:C}=Wt(d({},i,{externalSlotProps:f})),$=rt(C,f==null?void 0:f.ref,(r=e.additionalProps)==null?void 0:r.ref);return Yt(t,d({},b,{ref:$}),c)}function Xt(e,r,t=(s,c)=>s===c){return e.length===r.length&&e.every((s,c)=>t(s,r[c]))}const Dt=2;function yt(e,r){return e-r}function mt(e,r){var t;const{index:s}=(t=e.reduce((c,w,i)=>{const f=Math.abs(r-w);return c===null||f<c.distance||f===c.distance?{distance:f,index:i}:c},null))!=null?t:{};return s}function je(e,r){if(r.current!==void 0&&e.changedTouches){const t=e;for(let s=0;s<t.changedTouches.length;s+=1){const c=t.changedTouches[s];if(c.identifier===r.current)return{x:c.clientX,y:c.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function ze(e,r,t){return(e-r)*100/(t-r)}function Zt(e,r,t){return(t-r)*e+r}function Qt(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),s=t[0].split(".")[1];return(s?s.length:0)+parseInt(t[1],10)}const r=e.toString().split(".")[1];return r?r.length:0}function Jt(e,r,t){const s=Math.round((e-t)/r)*r+t;return Number(s.toFixed(Qt(r)))}function ft({values:e,newValue:r,index:t}){const s=e.slice();return s[t]=r,s.sort(yt)}function Te({sliderRef:e,activeIndex:r,setActive:t}){var s,c;const w=Me(e.current);if(!((s=e.current)!=null&&s.contains(w.activeElement))||Number(w==null||(c=w.activeElement)==null?void 0:c.getAttribute("data-index"))!==r){var i;(i=e.current)==null||i.querySelector(`[type="range"][data-index="${r}"]`).focus()}t&&t(r)}function Ne(e,r){return typeof e=="number"&&typeof r=="number"?e===r:typeof e=="object"&&typeof r=="object"?Xt(e,r):!1}const er={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},tr=e=>e;let Re;function bt(){return Re===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Re=CSS.supports("touch-action","none"):Re=!0),Re}function rr(e){const{"aria-labelledby":r,defaultValue:t,disabled:s=!1,disableSwap:c=!1,isRtl:w=!1,marks:i=!1,max:f=100,min:b=0,name:C,onChange:$,onChangeCommitted:j,orientation:Z="horizontal",rootRef:de,scale:Q=tr,step:I=1,shiftStep:se=10,tabIndex:pe,value:J}=e,A=_.useRef(),[U,H]=_.useState(-1),[me,q]=_.useState(-1),[ee,te]=_.useState(!1),B=_.useRef(0),[T,K]=Tt({controlled:J,default:t??b,name:"Slider"}),R=$&&((a,n,l)=>{const p=a.nativeEvent||a,m=new p.constructor(p.type,p);Object.defineProperty(m,"target",{writable:!0,value:{value:n,name:C}}),$(m,n,l)}),G=Array.isArray(T);let k=G?T.slice().sort(yt):[T];k=k.map(a=>a==null?b:we(a,b,f));const re=i===!0&&I!==null?[...Array(Math.floor((f-b)/I)+1)].map((a,n)=>({value:b+I*n})):i||[],x=re.map(a=>a.value),{isFocusVisibleRef:N,onBlur:fe,onFocus:be,ref:he}=Nt(),[ie,W]=_.useState(-1),g=_.useRef(),F=rt(he,g),ge=rt(de,F),ve=a=>n=>{var l;const p=Number(n.currentTarget.getAttribute("data-index"));be(n),N.current===!0&&W(p),q(p),a==null||(l=a.onFocus)==null||l.call(a,n)},xe=a=>n=>{var l;fe(n),N.current===!1&&W(-1),q(-1),a==null||(l=a.onBlur)==null||l.call(a,n)},Le=(a,n)=>{const l=Number(a.currentTarget.getAttribute("data-index")),p=k[l],m=x.indexOf(p);let u=n;if(re&&I==null){const O=x[x.length-1];u>O?u=O:u<x[0]?u=x[0]:u=u<p?x[m-1]:x[m+1]}if(u=we(u,b,f),G){c&&(u=we(u,k[l-1]||-1/0,k[l+1]||1/0));const O=u;u=ft({values:k,newValue:u,index:l});let Y=l;c||(Y=u.indexOf(O)),Te({sliderRef:g,activeIndex:Y})}K(u),W(l),R&&!Ne(u,T)&&R(a,u,l),j&&j(a,u)},Ae=a=>n=>{var l;if(I!==null){const p=Number(n.currentTarget.getAttribute("data-index")),m=k[p];let u=null;(n.key==="ArrowLeft"||n.key==="ArrowDown")&&n.shiftKey||n.key==="PageDown"?u=Math.max(m-se,b):((n.key==="ArrowRight"||n.key==="ArrowUp")&&n.shiftKey||n.key==="PageUp")&&(u=Math.min(m+se,f)),u!==null&&(Le(n,u),n.preventDefault())}a==null||(l=a.onKeyDown)==null||l.call(a,n)};Rt(()=>{if(s&&g.current.contains(document.activeElement)){var a;(a=document.activeElement)==null||a.blur()}},[s]),s&&U!==-1&&H(-1),s&&ie!==-1&&W(-1);const Fe=a=>n=>{var l;(l=a.onChange)==null||l.call(a,n),Le(n,n.target.valueAsNumber)},_e=_.useRef();let X=Z;w&&Z==="horizontal"&&(X+="-reverse");const y=({finger:a,move:n=!1})=>{const{current:l}=g,{width:p,height:m,bottom:u,left:O}=l.getBoundingClientRect();let Y;X.indexOf("vertical")===0?Y=(u-a.y)/m:Y=(a.x-O)/p,X.indexOf("-reverse")!==-1&&(Y=1-Y);let h;if(h=Zt(Y,b,f),I)h=Jt(h,I,b);else{const ke=mt(x,h);h=x[ke]}h=we(h,b,f);let M=0;if(G){n?M=_e.current:M=mt(k,h),c&&(h=we(h,k[M-1]||-1/0,k[M+1]||1/0));const ke=h;h=ft({values:k,newValue:h,index:M}),c&&n||(M=h.indexOf(ke),_e.current=M)}return{newValue:h,activeIndex:M}},v=Je(a=>{const n=je(a,A);if(!n)return;if(B.current+=1,a.type==="mousemove"&&a.buttons===0){E(a);return}const{newValue:l,activeIndex:p}=y({finger:n,move:!0});Te({sliderRef:g,activeIndex:p,setActive:H}),K(l),!ee&&B.current>Dt&&te(!0),R&&!Ne(l,T)&&R(a,l,p)}),E=Je(a=>{const n=je(a,A);if(te(!1),!n)return;const{newValue:l}=y({finger:n,move:!0});H(-1),a.type==="touchend"&&q(-1),j&&j(a,l),A.current=void 0,V()}),ae=Je(a=>{if(s)return;bt()||a.preventDefault();const n=a.changedTouches[0];n!=null&&(A.current=n.identifier);const l=je(a,A);if(l!==!1){const{newValue:m,activeIndex:u}=y({finger:l});Te({sliderRef:g,activeIndex:u,setActive:H}),K(m),R&&!Ne(m,T)&&R(a,m,u)}B.current=0;const p=Me(g.current);p.addEventListener("touchmove",v,{passive:!0}),p.addEventListener("touchend",E,{passive:!0})}),V=_.useCallback(()=>{const a=Me(g.current);a.removeEventListener("mousemove",v),a.removeEventListener("mouseup",E),a.removeEventListener("touchmove",v),a.removeEventListener("touchend",E)},[E,v]);_.useEffect(()=>{const{current:a}=g;return a.addEventListener("touchstart",ae,{passive:bt()}),()=>{a.removeEventListener("touchstart",ae),V()}},[V,ae]),_.useEffect(()=>{s&&V()},[s,V]);const Ee=a=>n=>{var l;if((l=a.onMouseDown)==null||l.call(a,n),s||n.defaultPrevented||n.button!==0)return;n.preventDefault();const p=je(n,A);if(p!==!1){const{newValue:u,activeIndex:O}=y({finger:p});Te({sliderRef:g,activeIndex:O,setActive:H}),K(u),R&&!Ne(u,T)&&R(n,u,O)}B.current=0;const m=Me(g.current);m.addEventListener("mousemove",v,{passive:!0}),m.addEventListener("mouseup",E)},L=ze(G?k[0]:b,b,f),ye=ze(k[k.length-1],b,f)-L,Ve=(a={})=>{const n=tt(a),l={onMouseDown:Ee(n||{})},p=d({},n,l);return d({},a,{ref:ge},p)},Oe=a=>n=>{var l;(l=a.onMouseOver)==null||l.call(a,n);const p=Number(n.currentTarget.getAttribute("data-index"));q(p)},He=a=>n=>{var l;(l=a.onMouseLeave)==null||l.call(a,n),q(-1)};return{active:U,axis:X,axisProps:er,dragging:ee,focusedThumbIndex:ie,getHiddenInputProps:(a={})=>{var n;const l=tt(a),p={onChange:Fe(l||{}),onFocus:ve(l||{}),onBlur:xe(l||{}),onKeyDown:Ae(l||{})},m=d({},l,p);return d({tabIndex:pe,"aria-labelledby":r,"aria-orientation":Z,"aria-valuemax":Q(f),"aria-valuemin":Q(b),name:C,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(n=e.step)!=null?n:void 0,disabled:s},a,m,{style:d({},Ut,{direction:w?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Ve,getThumbProps:(a={})=>{const n=tt(a),l={onMouseOver:Oe(n||{}),onMouseLeave:He(n||{})};return d({},a,n,l)},marks:re,open:me,range:G,rootRef:ge,trackLeap:ye,trackOffset:L,values:k,getThumbStyle:a=>({pointerEvents:U!==-1&&U!==a?"none":void 0})}}const ar=e=>!e||!Ie(e);function nr(e){return Mt("MuiSlider",e)}const z=It("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),or=e=>{const{open:r}=e;return{offset:Se(r&&z.valueLabelOpen),circle:z.valueLabelCircle,label:z.valueLabelLabel}};function lr(e){const{children:r,className:t,value:s}=e,c=or(e);return r?_.cloneElement(r,{className:Se(r.props.className)},o.jsxs(_.Fragment,{children:[r.props.children,o.jsx("span",{className:Se(c.offset,t),"aria-hidden":!0,children:o.jsx("span",{className:c.circle,children:o.jsx("span",{className:c.label,children:s})})})]})):null}const sr=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ht(e){return e}const ir=le("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${oe(t.color)}`],t.size!=="medium"&&r[`size${oe(t.size)}`],t.marked&&r.marked,t.orientation==="vertical"&&r.vertical,t.track==="inverted"&&r.trackInverted,t.track===!1&&r.trackFalse]}})(({theme:e})=>{var r;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${z.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${z.dragging}`]:{[`& .${z.thumb}, & .${z.track}`]:{transition:"none"}},variants:[...Object.keys(((r=e.vars)!=null?r:e).palette).filter(t=>{var s;return((s=e.vars)!=null?s:e).palette[t].main}).map(t=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),cr=le("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,r)=>r.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),ur=le("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,r)=>r.track})(({theme:e})=>{var r;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((r=e.vars)!=null?r:e).palette).filter(t=>{var s;return((s=e.vars)!=null?s:e).palette[t].main}).map(t=>({props:{color:t,track:"inverted"},style:d({},e.vars?{backgroundColor:e.vars.palette.Slider[`${t}Track`],borderColor:e.vars.palette.Slider[`${t}Track`]}:d({backgroundColor:it(e.palette[t].main,.62),borderColor:it(e.palette[t].main,.62)},e.applyStyles("dark",{backgroundColor:ct(e.palette[t].main,.5)}),e.applyStyles("dark",{borderColor:ct(e.palette[t].main,.5)})))}))]}}),dr=le("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.thumb,r[`thumbColor${oe(t.color)}`],t.size!=="medium"&&r[`thumbSize${oe(t.size)}`]]}})(({theme:e})=>{var r;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${z.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((r=e.vars)!=null?r:e).palette).filter(t=>{var s;return((s=e.vars)!=null?s:e).palette[t].main}).map(t=>({props:{color:t},style:{[`&:hover, &.${z.focusVisible}`]:d({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${ut(e.palette[t].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${z.active}`]:d({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${ut(e.palette[t].main,.16)}`})}}))]}}),pr=le(lr,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,r)=>r.valueLabel})(({theme:e})=>d({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${z.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${z.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),mr=le("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>xt(e)&&e!=="markActive",overridesResolver:(e,r)=>{const{markActive:t}=e;return[r.mark,t&&r.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),fr=le("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>xt(e)&&e!=="markLabelActive",overridesResolver:(e,r)=>r.markLabel})(({theme:e})=>d({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),br=e=>{const{disabled:r,dragging:t,marked:s,orientation:c,track:w,classes:i,color:f,size:b}=e,C={root:["root",r&&"disabled",t&&"dragging",s&&"marked",c==="vertical"&&"vertical",w==="inverted"&&"trackInverted",w===!1&&"trackFalse",f&&`color${oe(f)}`,b&&`size${oe(b)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",r&&"disabled",b&&`thumbSize${oe(b)}`,f&&`thumbColor${oe(f)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Ft(C,nr,i)},hr=({children:e})=>e,gr=_.forwardRef(function(r,t){var s,c,w,i,f,b,C,$,j,Z,de,Q,I,se,pe,J,A,U,H,me,q,ee,te,B;const T=zt({props:r,name:"MuiSlider"}),K=At(),{"aria-label":R,"aria-valuetext":G,"aria-labelledby":k,component:re="span",components:x={},componentsProps:N={},color:fe="primary",classes:be,className:he,disableSwap:ie=!1,disabled:W=!1,getAriaLabel:g,getAriaValueText:F,marks:ge=!1,max:ve=100,min:xe=0,orientation:Le="horizontal",shiftStep:Ae=10,size:Fe="medium",step:_e=1,scale:X=ht,slotProps:y,slots:v,track:E="normal",valueLabelDisplay:ae="off",valueLabelFormat:V=ht}=T,Ee=vt(T,sr),L=d({},T,{isRtl:K,max:ve,min:xe,classes:be,disabled:W,disableSwap:ie,orientation:Le,marks:ge,color:fe,size:Fe,step:_e,shiftStep:Ae,scale:X,track:E,valueLabelDisplay:ae,valueLabelFormat:V}),{axisProps:ye,getRootProps:Ve,getHiddenInputProps:Oe,getThumbProps:He,open:at,active:qe,axis:Ce,focusedThumbIndex:a,range:n,dragging:l,marks:p,values:m,trackOffset:u,trackLeap:O,getThumbStyle:Y}=rr(d({},L,{rootRef:t}));L.marked=p.length>0&&p.some(S=>S.label),L.dragging=l,L.focusedThumbIndex=a;const h=br(L),M=(s=(c=v==null?void 0:v.root)!=null?c:x.Root)!=null?s:ir,ke=(w=(i=v==null?void 0:v.rail)!=null?i:x.Rail)!=null?w:cr,nt=(f=(b=v==null?void 0:v.track)!=null?b:x.Track)!=null?f:ur,ot=(C=($=v==null?void 0:v.thumb)!=null?$:x.Thumb)!=null?C:dr,lt=(j=(Z=v==null?void 0:v.valueLabel)!=null?Z:x.ValueLabel)!=null?j:pr,Be=(de=(Q=v==null?void 0:v.mark)!=null?Q:x.Mark)!=null?de:mr,Ge=(I=(se=v==null?void 0:v.markLabel)!=null?se:x.MarkLabel)!=null?I:fr,st=(pe=(J=v==null?void 0:v.input)!=null?J:x.Input)!=null?pe:"input",We=(A=y==null?void 0:y.root)!=null?A:N.root,kt=(U=y==null?void 0:y.rail)!=null?U:N.rail,Ye=(H=y==null?void 0:y.track)!=null?H:N.track,Ue=(me=y==null?void 0:y.thumb)!=null?me:N.thumb,Ke=(q=y==null?void 0:y.valueLabel)!=null?q:N.valueLabel,St=(ee=y==null?void 0:y.mark)!=null?ee:N.mark,Ct=(te=y==null?void 0:y.markLabel)!=null?te:N.markLabel,wt=(B=y==null?void 0:y.input)!=null?B:N.input,Pt=ne({elementType:M,getSlotProps:Ve,externalSlotProps:We,externalForwardedProps:Ee,additionalProps:d({},ar(M)&&{as:re}),ownerState:d({},L,We==null?void 0:We.ownerState),className:[h.root,he]}),Lt=ne({elementType:ke,externalSlotProps:kt,ownerState:L,className:h.rail}),_t=ne({elementType:nt,externalSlotProps:Ye,additionalProps:{style:d({},ye[Ce].offset(u),ye[Ce].leap(O))},ownerState:d({},L,Ye==null?void 0:Ye.ownerState),className:h.track}),Xe=ne({elementType:ot,getSlotProps:He,externalSlotProps:Ue,ownerState:d({},L,Ue==null?void 0:Ue.ownerState),className:h.thumb}),$t=ne({elementType:lt,externalSlotProps:Ke,ownerState:d({},L,Ke==null?void 0:Ke.ownerState),className:h.valueLabel}),De=ne({elementType:Be,externalSlotProps:St,ownerState:L,className:h.mark}),Ze=ne({elementType:Ge,externalSlotProps:Ct,ownerState:L,className:h.markLabel}),jt=ne({elementType:st,getSlotProps:Oe,externalSlotProps:wt,ownerState:L});return o.jsxs(M,d({},Pt,{children:[o.jsx(ke,d({},Lt)),o.jsx(nt,d({},_t)),p.filter(S=>S.value>=xe&&S.value<=ve).map((S,P)=>{const Qe=ze(S.value,xe,ve),$e=ye[Ce].offset(Qe);let D;return E===!1?D=m.indexOf(S.value)!==-1:D=E==="normal"&&(n?S.value>=m[0]&&S.value<=m[m.length-1]:S.value<=m[0])||E==="inverted"&&(n?S.value<=m[0]||S.value>=m[m.length-1]:S.value>=m[0]),o.jsxs(_.Fragment,{children:[o.jsx(Be,d({"data-index":P},De,!Ie(Be)&&{markActive:D},{style:d({},$e,De.style),className:Se(De.className,D&&h.markActive)})),S.label!=null?o.jsx(Ge,d({"aria-hidden":!0,"data-index":P},Ze,!Ie(Ge)&&{markLabelActive:D},{style:d({},$e,Ze.style),className:Se(h.markLabel,Ze.className,D&&h.markLabelActive),children:S.label})):null]},P)}),m.map((S,P)=>{const Qe=ze(S,xe,ve),$e=ye[Ce].offset(Qe),D=ae==="off"?hr:lt;return o.jsx(D,d({},!Ie(D)&&{valueLabelFormat:V,valueLabelDisplay:ae,value:typeof V=="function"?V(X(S),P):V,index:P,open:at===P||qe===P||ae==="on",disabled:W},$t,{children:o.jsx(ot,d({"data-index":P},Xe,{className:Se(h.thumb,Xe.className,qe===P&&h.active,a===P&&h.focusVisible),style:d({},$e,Y(P),Xe.style),children:o.jsx(st,d({"data-index":P,"aria-label":g?g(P):R,"aria-valuenow":X(S),"aria-labelledby":k,"aria-valuetext":F?F(X(S),P):G,value:m[P]},jt))}))}),P)})]}))}),vr=e=>Et({queryKey:["calcdatas",e],queryFn:async()=>await Vt.get(`/${e}/calculator/getCalculatorDatas`)}),gt=le(gr)({color:"var(--color-main)",height:2.5,position:"relative",padding:"0 !important",borderRadius:0,bottom:"0rem","& .MuiSlider-rail":{backgroundColor:"transparent"},"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:18,width:18,backgroundColor:"#fff",border:"0.25rem solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&::before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:14,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#52af77",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&::before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),Sr=({onResults:e})=>{const{lang:r}=Ot(),{data:t}=vr(r),s={field:"",educationType:"",duration:2,language:"",experience:0},c=Ht({field:et().required("Required"),educationType:et().required("Required"),duration:pt().required("Required"),language:et().required("Required"),experience:pt().required("Required")}),w=i=>{var ee,te,B,T,K,R,G,k,re,x,N,fe,be,he,ie,W;const f=t&&((te=(ee=t==null?void 0:t.areas)==null?void 0:ee.map(g=>({[g.area_name]:g.count})))==null?void 0:te.reduce((g,F)=>({...g,...F}),{})),b=t&&{"İnnab-da":(B=t==null?void 0:t.calculator)==null?void 0:B.where_innab,Özüm:(T=t==null?void 0:t.calculator)==null?void 0:T.where_own,"Digər kurslarda":(K=t==null?void 0:t.calculator)==null?void 0:K.where_other},C={0:.5,1:.7,2:1,3:1.25,4:2,5:3},$=t&&{Zəif:(R=t==null?void 0:t.calculator)==null?void 0:R.english_elementry,Orta:(G=t==null?void 0:t.calculator)==null?void 0:G.english_medium,Güclü:(k=t==null?void 0:t.calculator)==null?void 0:k.english_hard},j=t&&{0:(re=t==null?void 0:t.calculator)==null?void 0:re.experience_0,1:(x=t==null?void 0:t.calculator)==null?void 0:x.experience_0_1,2:(N=t==null?void 0:t.calculator)==null?void 0:N.experience_1_3,3:(fe=t==null?void 0:t.calculator)==null?void 0:fe.experience_3_5,4:(be=t==null?void 0:t.calculator)==null?void 0:be.experience_5_10,5:(he=t==null?void 0:t.calculator)==null?void 0:he.experience_10_plus},Z={"İnnab-da":2e3,Özüm:1e3,"Digər kurslarda":1500},de=f[i.field],Q=b[i.educationType],I=i.experience>=10?j[5]:i.experience>=5?j[4]:i.experience>=3?j[3]:i.experience>=1?j[2]:j[1],se=$[i.language],pe=i.duration>=6?C[5]:i.duration>=3?C[4]:i.duration>=1?C[3]:C[1],J=de*Q*I*se*pe,A=t&&((W=(ie=t==null?void 0:t.areas)==null?void 0:ie.map(g=>{var F;return{[g.area_name]:(F=g.children)==null?void 0:F.map(ge=>ge.area_name)}}))==null?void 0:W.reduce((g,F)=>({...g,...F}),{})),U=J>1e3?45:25,H=Z[i.educationType]*Q,me=J/12,q=(H/me).toFixed(2);e({futureSalary:J.toFixed(2),futurePositions:A[i.field],foreignWorkPercentage:U,investmentPaybackPeriod:q})};return o.jsx(qt,{initialValues:s,validationSchema:c,children:({values:i,setFieldValue:f})=>{var b;return _.useEffect(()=>{i.experience!==s.experience&&w(i)},[i.experience]),o.jsxs(Bt,{className:"flex flexDirectionColumn",children:[o.jsxs("div",{className:`${ce.formGroup}`,children:[o.jsx(ue,{as:"select",name:"field",id:"field",children:t&&((b=t.areas)==null?void 0:b.map((C,$)=>o.jsx("option",{value:C.area_name,children:C.area_name},$)))}),o.jsx(Pe,{name:"field",component:"span",className:"error"})]}),o.jsxs("div",{className:`${ce.formGroup} flex flexDirectionColumn`,children:[o.jsx("h4",{children:"Necə öyrənəcəksən?"}),o.jsxs("div",{className:`${ce.formGroupWrapper} flex alignItemsCenter justifyContentBetween`,role:"group","aria-labelledby":"educationType",children:[o.jsxs("label",{htmlFor:"educationType",className:"flex alignItemsCenter",children:[o.jsx(ue,{type:"radio",name:"educationType",value:"İnnab-da"}),"İnnab-da"]}),o.jsxs("label",{htmlFor:"educationType",className:"flex alignItemsCenter",children:[o.jsx(ue,{type:"radio",name:"educationType",value:"Özüm"}),"Özüm"]}),o.jsxs("label",{htmlFor:"educationType",className:"flex alignItemsCenter",children:[o.jsx(ue,{type:"radio",name:"educationType",value:"Digər kurslarda"}),"Digər kurslarda"]})]}),o.jsx(Pe,{name:"educationType",component:"span",className:"error"})]}),o.jsxs("div",{className:`${ce.formGroup}`,children:[o.jsxs("div",{children:[o.jsx("label",{children:"Gündə neçə saat məşğul olacaqsan?"}),o.jsxs("div",{className:"flex justifyContentBetween",children:[o.jsx("span",{children:i.duration}),o.jsx("span",{children:"saat"})]}),o.jsx(dt,{children:o.jsx(gt,{value:i.duration,onChange:(C,$)=>f("duration",$),"aria-label":"pretto slider",min:0,max:24,step:1})})]}),o.jsx(Pe,{name:"duration",component:"span",className:"error"})]}),o.jsxs("div",{className:`${ce.formGroup} flex flexDirectionColumn`,role:"group","aria-labelledby":"language",children:[o.jsx("h4",{children:"İngilis dili biliyin"}),o.jsxs("div",{className:`${ce.formGroupWrapper} flex alignItemsCenter justifyContentBetween`,children:[o.jsxs("label",{htmlFor:"language",className:"flex alignItemsCenter",children:[o.jsx(ue,{type:"radio",name:"language",value:"Zəif"}),"Zəif"]}),o.jsxs("label",{htmlFor:"language",className:"flex alignItemsCenter",children:[o.jsx(ue,{type:"radio",name:"language",value:"Orta"}),"Orta"]}),o.jsxs("label",{htmlFor:"language",className:"flex alignItemsCenter",children:[o.jsx(ue,{type:"radio",name:"language",value:"Güclü"}),"Güclü"]})]}),o.jsx(Pe,{name:"language",component:"span",className:"error"})]}),o.jsxs("div",{className:`${ce.formGroup}`,children:[o.jsxs("div",{children:[o.jsx("label",{children:"Neçə il təcrübən var?"}),o.jsxs("div",{className:"flex justifyContentBetween",children:[o.jsx("span",{children:i.experience}),o.jsx("span",{children:"il"})]}),o.jsx(dt,{children:o.jsx(gt,{value:i.experience,onChange:(C,$)=>f("experience",$),"aria-label":"pretto slider",min:0,max:10,step:1})})]}),o.jsx(Pe,{name:"experience",component:"span",className:"error"})]})]})}})};export{Sr as default};