import{_ as bt,Q as Pt,U as $t,V as p,W as at,X as Tt,r as $,Y as Nt,Z as je,$ as It,a0 as Rt,a1 as tt,a2 as rt,a3 as ze,a4 as Mt,a5 as zt,a6 as we,j as n,a7 as de,a8 as ue,a9 as ct,aa as ut,ab as dt,ac as gt,ad as Ft,ae as At,af as Et,o as Vt,p as Ot,f as Ht,z as Bt,ag as Gt,ah as Te,ai as Yt,aj as qt,ak as Wt,P as ie,al as Q,am as _e,t as R,B as Ut}from"./index-D7EP-7CA.js";function Fe(e){return e&&e.ownerDocument||document}const Kt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Xt=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ce(e){var r;const{elementType:t,externalSlotProps:o,ownerState:i,skipResolvingSlotProps:c=!1}=e,L=bt(e,Xt),b=c?{}:Pt(o,i),{props:g,internalRef:V}=$t(p({},L,{externalSlotProps:b})),d=at(V,b==null?void 0:b.ref,(r=e.additionalProps)==null?void 0:r.ref);return Tt(t,p({},g,{ref:d}),i)}function Zt(e,r,t=(o,i)=>o===i){return e.length===r.length&&e.every((o,i)=>t(o,r[i]))}const Qt=2;function vt(e,r){return e-r}function pt(e,r){var t;const{index:o}=(t=e.reduce((i,c,L)=>{const b=Math.abs(r-c);return i===null||b<i.distance||b===i.distance?{distance:b,index:L}:i},null))!=null?t:{};return o}function Ne(e,r){if(r.current!==void 0&&e.changedTouches){const t=e;for(let o=0;o<t.changedTouches.length;o+=1){const i=t.changedTouches[o];if(i.identifier===r.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Ae(e,r,t){return(e-r)*100/(t-r)}function Dt(e,r,t){return(t-r)*e+r}function Jt(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),o=t[0].split(".")[1];return(o?o.length:0)+parseInt(t[1],10)}const r=e.toString().split(".")[1];return r?r.length:0}function er(e,r,t){const o=Math.round((e-t)/r)*r+t;return Number(o.toFixed(Jt(r)))}function mt({values:e,newValue:r,index:t}){const o=e.slice();return o[t]=r,o.sort(vt)}function Ie({sliderRef:e,activeIndex:r,setActive:t}){var o,i;const c=Fe(e.current);if(!((o=e.current)!=null&&o.contains(c.activeElement))||Number(c==null||(i=c.activeElement)==null?void 0:i.getAttribute("data-index"))!==r){var L;(L=e.current)==null||L.querySelector(`[type="range"][data-index="${r}"]`).focus()}t&&t(r)}function Re(e,r){return typeof e=="number"&&typeof r=="number"?e===r:typeof e=="object"&&typeof r=="object"?Zt(e,r):!1}const tr={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},rr=e=>e;let Me;function ft(){return Me===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Me=CSS.supports("touch-action","none"):Me=!0),Me}function ar(e){const{"aria-labelledby":r,defaultValue:t,disabled:o=!1,disableSwap:i=!1,isRtl:c=!1,marks:L=!1,max:b=100,min:g=0,name:V,onChange:d,onChangeCommitted:T,orientation:M="horizontal",rootRef:ne,scale:D=rr,step:w=1,shiftStep:O=10,tabIndex:W,value:J}=e,z=$.useRef(),[H,C]=$.useState(-1),[pe,ee]=$.useState(-1),[ge,me]=$.useState(!1),U=$.useRef(0),[N,te]=Nt({controlled:J,default:t??g,name:"Slider"}),F=d&&((a,l,s)=>{const m=a.nativeEvent||a,f=new m.constructor(m.type,m);Object.defineProperty(f,"target",{writable:!0,value:{value:l,name:V}}),d(f,l,s)}),K=Array.isArray(N);let k=K?N.slice().sort(vt):[N];k=k.map(a=>a==null?g:je(a,g,b));const oe=L===!0&&w!==null?[...Array(Math.floor((b-g)/w)+1)].map((a,l)=>({value:g+w*l})):L||[],x=oe.map(a=>a.value),{isFocusVisibleRef:I,onBlur:ve,onFocus:xe,ref:ye}=It(),[fe,X]=$.useState(-1),j=$.useRef(),he=at(ye,j),be=at(ne,he),B=a=>l=>{var s;const m=Number(l.currentTarget.getAttribute("data-index"));xe(l),I.current===!0&&X(m),ee(m),a==null||(s=a.onFocus)==null||s.call(a,l)},le=a=>l=>{var s;ve(l),I.current===!1&&X(-1),ee(-1),a==null||(s=a.onBlur)==null||s.call(a,l)},Le=(a,l)=>{const s=Number(a.currentTarget.getAttribute("data-index")),m=k[s],f=x.indexOf(m);let u=l;if(oe&&w==null){const q=x[x.length-1];u>q?u=q:u<x[0]?u=x[0]:u=u<m?x[f-1]:x[f+1]}if(u=je(u,g,b),K){i&&(u=je(u,k[s-1]||-1/0,k[s+1]||1/0));const q=u;u=mt({values:k,newValue:u,index:s});let Z=s;i||(Z=u.indexOf(q)),Ie({sliderRef:j,activeIndex:Z})}te(u),X(s),F&&!Re(u,N)&&F(a,u,s),T&&T(a,u)},Ee=a=>l=>{var s;if(w!==null){const m=Number(l.currentTarget.getAttribute("data-index")),f=k[m];let u=null;(l.key==="ArrowLeft"||l.key==="ArrowDown")&&l.shiftKey||l.key==="PageDown"?u=Math.max(f-O,g):((l.key==="ArrowRight"||l.key==="ArrowUp")&&l.shiftKey||l.key==="PageUp")&&(u=Math.min(f+O,b)),u!==null&&(Le(l,u),l.preventDefault())}a==null||(s=a.onKeyDown)==null||s.call(a,l)};Rt(()=>{if(o&&j.current.contains(document.activeElement)){var a;(a=document.activeElement)==null||a.blur()}},[o]),o&&H!==-1&&C(-1),o&&fe!==-1&&X(-1);const Ve=a=>l=>{var s;(s=a.onChange)==null||s.call(a,l),Le(l,l.target.valueAsNumber)},Pe=$.useRef();let re=M;c&&M==="horizontal"&&(re+="-reverse");const y=({finger:a,move:l=!1})=>{const{current:s}=j,{width:m,height:f,bottom:u,left:q}=s.getBoundingClientRect();let Z;re.indexOf("vertical")===0?Z=(u-a.y)/f:Z=(a.x-q)/m,re.indexOf("-reverse")!==-1&&(Z=1-Z);let h;if(h=Dt(Z,g,b),w)h=er(h,w,g);else{const Se=pt(x,h);h=x[Se]}h=je(h,g,b);let A=0;if(K){l?A=Pe.current:A=pt(k,h),i&&(h=je(h,k[A-1]||-1/0,k[A+1]||1/0));const Se=h;h=mt({values:k,newValue:h,index:A}),i&&l||(A=h.indexOf(Se),Pe.current=A)}return{newValue:h,activeIndex:A}},v=tt(a=>{const l=Ne(a,z);if(!l)return;if(U.current+=1,a.type==="mousemove"&&a.buttons===0){G(a);return}const{newValue:s,activeIndex:m}=y({finger:l,move:!0});Ie({sliderRef:j,activeIndex:m,setActive:C}),te(s),!ge&&U.current>Qt&&me(!0),F&&!Re(s,N)&&F(a,s,m)}),G=tt(a=>{const l=Ne(a,z);if(me(!1),!l)return;const{newValue:s}=y({finger:l,move:!0});C(-1),a.type==="touchend"&&ee(-1),T&&T(a,s),z.current=void 0,Y()}),se=tt(a=>{if(o)return;ft()||a.preventDefault();const l=a.changedTouches[0];l!=null&&(z.current=l.identifier);const s=Ne(a,z);if(s!==!1){const{newValue:f,activeIndex:u}=y({finger:s});Ie({sliderRef:j,activeIndex:u,setActive:C}),te(f),F&&!Re(f,N)&&F(a,f,u)}U.current=0;const m=Fe(j.current);m.addEventListener("touchmove",v,{passive:!0}),m.addEventListener("touchend",G,{passive:!0})}),Y=$.useCallback(()=>{const a=Fe(j.current);a.removeEventListener("mousemove",v),a.removeEventListener("mouseup",G),a.removeEventListener("touchmove",v),a.removeEventListener("touchend",G)},[G,v]);$.useEffect(()=>{const{current:a}=j;return a.addEventListener("touchstart",se,{passive:ft()}),()=>{a.removeEventListener("touchstart",se),Y()}},[Y,se]),$.useEffect(()=>{o&&Y()},[o,Y]);const Oe=a=>l=>{var s;if((s=a.onMouseDown)==null||s.call(a,l),o||l.defaultPrevented||l.button!==0)return;l.preventDefault();const m=Ne(l,z);if(m!==!1){const{newValue:u,activeIndex:q}=y({finger:m});Ie({sliderRef:j,activeIndex:q,setActive:C}),te(u),F&&!Re(u,N)&&F(l,u,q)}U.current=0;const f=Fe(j.current);f.addEventListener("mousemove",v,{passive:!0}),f.addEventListener("mouseup",G)},P=Ae(K?k[0]:g,g,b),ke=Ae(k[k.length-1],g,b)-P,He=(a={})=>{const l=rt(a),s={onMouseDown:Oe(l||{})},m=p({},l,s);return p({},a,{ref:be},m)},Be=a=>l=>{var s;(s=a.onMouseOver)==null||s.call(a,l);const m=Number(l.currentTarget.getAttribute("data-index"));ee(m)},Ge=a=>l=>{var s;(s=a.onMouseLeave)==null||s.call(a,l),ee(-1)};return{active:H,axis:re,axisProps:tr,dragging:ge,focusedThumbIndex:fe,getHiddenInputProps:(a={})=>{var l;const s=rt(a),m={onChange:Ve(s||{}),onFocus:B(s||{}),onBlur:le(s||{}),onKeyDown:Ee(s||{})},f=p({},s,m);return p({tabIndex:W,"aria-labelledby":r,"aria-orientation":M,"aria-valuemax":D(b),"aria-valuemin":D(g),name:V,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(l=e.step)!=null?l:void 0,disabled:o},a,f,{style:p({},Kt,{direction:c?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:He,getThumbProps:(a={})=>{const l=rt(a),s={onMouseOver:Be(l||{}),onMouseLeave:Ge(l||{})};return p({},a,l,s)},marks:oe,open:pe,range:K,rootRef:be,trackLeap:ke,trackOffset:P,values:k,getThumbStyle:a=>({pointerEvents:H!==-1&&H!==a?"none":void 0})}}const nr=e=>!e||!ze(e);function or(e){return zt("MuiSlider",e)}const E=Mt("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),lr=e=>{const{open:r}=e;return{offset:we(r&&E.valueLabelOpen),circle:E.valueLabelCircle,label:E.valueLabelLabel}};function sr(e){const{children:r,className:t,value:o}=e,i=lr(e);return r?$.cloneElement(r,{className:we(r.props.className)},n.jsxs($.Fragment,{children:[r.props.children,n.jsx("span",{className:we(i.offset,t),"aria-hidden":!0,children:n.jsx("span",{className:i.circle,children:n.jsx("span",{className:i.label,children:o})})})]})):null}const ir=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ht(e){return e}const cr=de("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${ue(t.color)}`],t.size!=="medium"&&r[`size${ue(t.size)}`],t.marked&&r.marked,t.orientation==="vertical"&&r.vertical,t.track==="inverted"&&r.trackInverted,t.track===!1&&r.trackFalse]}})(({theme:e})=>{var r;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${E.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${E.dragging}`]:{[`& .${E.thumb}, & .${E.track}`]:{transition:"none"}},variants:[...Object.keys(((r=e.vars)!=null?r:e).palette).filter(t=>{var o;return((o=e.vars)!=null?o:e).palette[t].main}).map(t=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),ur=de("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,r)=>r.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),dr=de("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,r)=>r.track})(({theme:e})=>{var r;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((r=e.vars)!=null?r:e).palette).filter(t=>{var o;return((o=e.vars)!=null?o:e).palette[t].main}).map(t=>({props:{color:t,track:"inverted"},style:p({},e.vars?{backgroundColor:e.vars.palette.Slider[`${t}Track`],borderColor:e.vars.palette.Slider[`${t}Track`]}:p({backgroundColor:ct(e.palette[t].main,.62),borderColor:ct(e.palette[t].main,.62)},e.applyStyles("dark",{backgroundColor:ut(e.palette[t].main,.5)}),e.applyStyles("dark",{borderColor:ut(e.palette[t].main,.5)})))}))]}}),pr=de("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.thumb,r[`thumbColor${ue(t.color)}`],t.size!=="medium"&&r[`thumbSize${ue(t.size)}`]]}})(({theme:e})=>{var r;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${E.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((r=e.vars)!=null?r:e).palette).filter(t=>{var o;return((o=e.vars)!=null?o:e).palette[t].main}).map(t=>({props:{color:t},style:{[`&:hover, &.${E.focusVisible}`]:p({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${dt(e.palette[t].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${E.active}`]:p({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${dt(e.palette[t].main,.16)}`})}}))]}}),mr=de(sr,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,r)=>r.valueLabel})(({theme:e})=>p({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${E.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${E.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),fr=de("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>gt(e)&&e!=="markActive",overridesResolver:(e,r)=>{const{markActive:t}=e;return[r.mark,t&&r.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),hr=de("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>gt(e)&&e!=="markLabelActive",overridesResolver:(e,r)=>r.markLabel})(({theme:e})=>p({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),br=e=>{const{disabled:r,dragging:t,marked:o,orientation:i,track:c,classes:L,color:b,size:g}=e,V={root:["root",r&&"disabled",t&&"dragging",o&&"marked",i==="vertical"&&"vertical",c==="inverted"&&"trackInverted",c===!1&&"trackFalse",b&&`color${ue(b)}`,g&&`size${ue(g)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",r&&"disabled",g&&`thumbSize${ue(g)}`,b&&`thumbColor${ue(b)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Et(V,or,L)},gr=({children:e})=>e,vr=$.forwardRef(function(r,t){var o,i,c,L,b,g,V,d,T,M,ne,D,w,O,W,J,z,H,C,pe,ee,ge,me,U;const N=Ft({props:r,name:"MuiSlider"}),te=At(),{"aria-label":F,"aria-valuetext":K,"aria-labelledby":k,component:oe="span",components:x={},componentsProps:I={},color:ve="primary",classes:xe,className:ye,disableSwap:fe=!1,disabled:X=!1,getAriaLabel:j,getAriaValueText:he,marks:be=!1,max:B=100,min:le=0,orientation:Le="horizontal",shiftStep:Ee=10,size:Ve="medium",step:Pe=1,scale:re=ht,slotProps:y,slots:v,track:G="normal",valueLabelDisplay:se="off",valueLabelFormat:Y=ht}=N,Oe=bt(N,ir),P=p({},N,{isRtl:te,max:B,min:le,classes:xe,disabled:X,disableSwap:fe,orientation:Le,marks:be,color:ve,size:Ve,step:Pe,shiftStep:Ee,scale:re,track:G,valueLabelDisplay:se,valueLabelFormat:Y}),{axisProps:ke,getRootProps:He,getHiddenInputProps:Be,getThumbProps:Ge,open:nt,active:Ye,axis:Ce,focusedThumbIndex:a,range:l,dragging:s,marks:m,values:f,trackOffset:u,trackLeap:q,getThumbStyle:Z}=ar(p({},P,{rootRef:t}));P.marked=m.length>0&&m.some(S=>S.label),P.dragging=s,P.focusedThumbIndex=a;const h=br(P),A=(o=(i=v==null?void 0:v.root)!=null?i:x.Root)!=null?o:cr,Se=(c=(L=v==null?void 0:v.rail)!=null?L:x.Rail)!=null?c:ur,ot=(b=(g=v==null?void 0:v.track)!=null?g:x.Track)!=null?b:dr,lt=(V=(d=v==null?void 0:v.thumb)!=null?d:x.Thumb)!=null?V:pr,st=(T=(M=v==null?void 0:v.valueLabel)!=null?M:x.ValueLabel)!=null?T:mr,qe=(ne=(D=v==null?void 0:v.mark)!=null?D:x.Mark)!=null?ne:fr,We=(w=(O=v==null?void 0:v.markLabel)!=null?O:x.MarkLabel)!=null?w:hr,it=(W=(J=v==null?void 0:v.input)!=null?J:x.Input)!=null?W:"input",Ue=(z=y==null?void 0:y.root)!=null?z:I.root,xt=(H=y==null?void 0:y.rail)!=null?H:I.rail,Ke=(C=y==null?void 0:y.track)!=null?C:I.track,Xe=(pe=y==null?void 0:y.thumb)!=null?pe:I.thumb,Ze=(ee=y==null?void 0:y.valueLabel)!=null?ee:I.valueLabel,yt=(ge=y==null?void 0:y.mark)!=null?ge:I.mark,kt=(me=y==null?void 0:y.markLabel)!=null?me:I.markLabel,St=(U=y==null?void 0:y.input)!=null?U:I.input,wt=ce({elementType:A,getSlotProps:He,externalSlotProps:Ue,externalForwardedProps:Oe,additionalProps:p({},nr(A)&&{as:oe}),ownerState:p({},P,Ue==null?void 0:Ue.ownerState),className:[h.root,ye]}),Ct=ce({elementType:Se,externalSlotProps:xt,ownerState:P,className:h.rail}),jt=ce({elementType:ot,externalSlotProps:Ke,additionalProps:{style:p({},ke[Ce].offset(u),ke[Ce].leap(q))},ownerState:p({},P,Ke==null?void 0:Ke.ownerState),className:h.track}),Qe=ce({elementType:lt,getSlotProps:Ge,externalSlotProps:Xe,ownerState:p({},P,Xe==null?void 0:Xe.ownerState),className:h.thumb}),_t=ce({elementType:st,externalSlotProps:Ze,ownerState:p({},P,Ze==null?void 0:Ze.ownerState),className:h.valueLabel}),De=ce({elementType:qe,externalSlotProps:yt,ownerState:P,className:h.mark}),Je=ce({elementType:We,externalSlotProps:kt,ownerState:P,className:h.markLabel}),Lt=ce({elementType:it,getSlotProps:Be,externalSlotProps:St,ownerState:P});return n.jsxs(A,p({},wt,{children:[n.jsx(Se,p({},Ct)),n.jsx(ot,p({},jt)),m.filter(S=>S.value>=le&&S.value<=B).map((S,_)=>{const et=Ae(S.value,le,B),$e=ke[Ce].offset(et);let ae;return G===!1?ae=f.indexOf(S.value)!==-1:ae=G==="normal"&&(l?S.value>=f[0]&&S.value<=f[f.length-1]:S.value<=f[0])||G==="inverted"&&(l?S.value<=f[0]||S.value>=f[f.length-1]:S.value>=f[0]),n.jsxs($.Fragment,{children:[n.jsx(qe,p({"data-index":_},De,!ze(qe)&&{markActive:ae},{style:p({},$e,De.style),className:we(De.className,ae&&h.markActive)})),S.label!=null?n.jsx(We,p({"aria-hidden":!0,"data-index":_},Je,!ze(We)&&{markLabelActive:ae},{style:p({},$e,Je.style),className:we(h.markLabel,Je.className,ae&&h.markLabelActive),children:S.label})):null]},_)}),f.map((S,_)=>{const et=Ae(S,le,B),$e=ke[Ce].offset(et),ae=se==="off"?gr:st;return n.jsx(ae,p({},!ze(ae)&&{valueLabelFormat:Y,valueLabelDisplay:se,value:typeof Y=="function"?Y(re(S),_):Y,index:_,open:nt===_||Ye===_||se==="on",disabled:X},_t,{children:n.jsx(lt,p({"data-index":_},Qe,{className:we(h.thumb,Qe.className,Ye===_&&h.active,a===_&&h.focusVisible),style:p({},$e,Z(_),Qe.style),children:n.jsx(it,p({"data-index":_,"aria-label":j?j(_):F,"aria-valuenow":re(S),"aria-labelledby":k,"aria-valuetext":he?he(re(S),_):K,value:f[_]},Lt))}))}),_)})]}))}),xr=e=>Vt({queryKey:["calcdatas",e],queryFn:async()=>await Ot.get(`/${e}/calculator/getCalculatorDatas`)}),yr=de(vr)({color:"var(--color-main)",height:2.5,position:"relative",padding:"0 !important",borderRadius:0,bottom:"0rem","& .MuiSlider-rail":{backgroundColor:"transparent"},"& .MuiSlider-track":{border:"none"},"& .MuiSlider-thumb":{height:18,width:18,backgroundColor:"#fff",border:"0.25rem solid currentColor","&:focus, &:hover, &.Mui-active, &.Mui-focusVisible":{boxShadow:"inherit"},"&::before":{display:"none"}},"& .MuiSlider-valueLabel":{lineHeight:1.2,fontSize:14,background:"unset",padding:0,width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"#52af77",transformOrigin:"bottom left",transform:"translate(50%, -100%) rotate(-45deg) scale(0)","&::before":{display:"none"},"&.MuiSlider-valueLabelOpen":{transform:"translate(50%, -100%) rotate(-45deg) scale(1)"},"& > *":{transform:"rotate(45deg)"}}}),Sr=({onResults:e})=>{const{lang:r}=Ht(),{data:t}=xr(r),{data:o,isLoading:i}=Bt("site"),c=d=>{const T=o.find(M=>M.keyword===d);return T?T.value[r]:d},L={field:"",educationType:"",language:"",computer:"",experience:0},b=Gt({field:Te().required(o&&c("profession_validation")),educationType:Te().required(o&&c("where_validation")),language:Te().required(o&&c("language_validation")),computer:Te().required(o&&c("computer_validation")),experience:Yt().required(o&&c("experience_validation"))}),g=d=>{var U,N,te,F,K,k,oe,x,I,ve,xe,ye,fe,X,j,he,be;if(!d.field||!d.educationType||!d.language||!d.computer||d.experience===void 0||d.experience===null){e(null);return}const T=t&&((N=(U=t==null?void 0:t.areas)==null?void 0:U.map(B=>({[B.area_name]:B.count})))==null?void 0:N.reduce((B,le)=>({...B,...le}),{})),M=t&&{"İnnab-da":(te=t==null?void 0:t.calculator)==null?void 0:te.where_innab,Özüm:(F=t==null?void 0:t.calculator)==null?void 0:F.where_own,"Digər kurslarda":(K=t==null?void 0:t.calculator)==null?void 0:K.where_other},ne=t&&{Zəif:(k=t==null?void 0:t.calculator)==null?void 0:k.english_elementry,Orta:(oe=t==null?void 0:t.calculator)==null?void 0:oe.english_medium,Güclü:(x=t==null?void 0:t.calculator)==null?void 0:x.english_hard},D=t&&{Zəif:(I=t==null?void 0:t.calculator)==null?void 0:I.comp_elementry,Orta:(ve=t==null?void 0:t.calculator)==null?void 0:ve.comp_medium,Güclü:(xe=t==null?void 0:t.calculator)==null?void 0:xe.comp_hard},w=t&&{0:(ye=t==null?void 0:t.calculator)==null?void 0:ye.experience_0,1:(fe=t==null?void 0:t.calculator)==null?void 0:fe.experience_0_1,2:(X=t==null?void 0:t.calculator)==null?void 0:X.experience_1_3,3:(j=t==null?void 0:t.calculator)==null?void 0:j.experience_3_5,4:(he=t==null?void 0:t.calculator)==null?void 0:he.experience_5_10,5:(be=t==null?void 0:t.calculator)==null?void 0:be.experience_10_plus},O={"İnnab-da":800,Özüm:600,"Digər kurslarda":2e3};let W=T[d.field]||0,J=M[d.educationType]||1,z=ne[d.language]||1,H=D[d.computer]||1,C=1;d.experience>=10?C=w[5]:d.experience>=5?C=w[4]:d.experience>=3?C=w[3]:d.experience>=1?C=w[2]:C=w[1],J=Number(J)||1,z=Number(z)||1,H=Number(H)||1,C=Number(C)||1;const pe=W*J*C*z*H,me=(O[d.educationType]*J/pe).toFixed(1);e({futureSalary:pe.toFixed(2),investmentPaybackPeriod:me})},V=d=>{g(d)};return n.jsx(qt,{initialValues:L,validationSchema:b,validateOnChange:!1,validateOnBlur:!1,onSubmit:V,children:({values:d,setFieldValue:T,isValid:M,handleSubmit:ne})=>{var w;$.useEffect(()=>{M?g(d):e(null)},[d,M]);const D=(O,W)=>{T("experience",W),ne()};return n.jsxs(Wt,{className:"flex flexDirectionColumn",children:[n.jsxs("div",{className:`${ie.formGroup}`,children:[n.jsxs(Q,{as:"select",name:"field",id:"field",children:[n.jsx("option",{value:"",hidden:!0,children:o&&c("select_field")}),t&&((w=t.areas)==null?void 0:w.map((O,W)=>n.jsx("option",{value:O.area_name,children:O.area_name},W)))]}),n.jsx(_e,{name:"field",component:"span",className:"error"})]}),n.jsxs("div",{className:`${ie.formGroup} flex flexDirectionColumn`,children:[n.jsxs("h4",{children:[i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("how_to_learn")]}),n.jsxs("div",{className:`${ie.formGroupWrapper} flex alignItemsCenter justifyContentBetween`,role:"group","aria-labelledby":"educationType",children:[n.jsxs("label",{htmlFor:"educationType",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"educationType",value:"İnnab-da"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("in_innab")]}),n.jsxs("label",{htmlFor:"educationType",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"educationType",value:"Özüm"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("myself")]}),n.jsxs("label",{htmlFor:"educationType",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"educationType",value:"Digər kurslarda"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("other_courses")]})]}),n.jsx(_e,{name:"educationType",component:"span",className:"error"})]}),n.jsxs("div",{className:`${ie.formGroup} flex flexDirectionColumn`,role:"group","aria-labelledby":"language",children:[n.jsxs("h4",{children:[i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("english_knowledge")]}),n.jsxs("div",{className:`${ie.formGroupWrapper} flex alignItemsCenter justifyContentBetween`,children:[n.jsxs("label",{htmlFor:"language",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"language",value:"Zəif"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("beginner")]}),n.jsxs("label",{htmlFor:"language",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"language",value:"Orta"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("intermediate")]}),n.jsxs("label",{htmlFor:"language",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"language",value:"Güclü"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("advanced")]})]}),n.jsx(_e,{name:"language",component:"span",className:"error"})]}),n.jsxs("div",{className:`${ie.formGroup} flex flexDirectionColumn`,role:"group","aria-labelledby":"computer",children:[n.jsxs("h4",{children:[i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("computer_knowledge")]}),n.jsxs("div",{className:`${ie.formGroupWrapper} flex alignItemsCenter justifyContentBetween`,children:[n.jsxs("label",{htmlFor:"computer",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"computer",value:"Zəif"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("beginner")]}),n.jsxs("label",{htmlFor:"computer",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"computer",value:"Orta"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("intermediate")]}),n.jsxs("label",{htmlFor:"computer",className:"flex alignItemsCenter",children:[n.jsx(Q,{type:"radio",name:"computer",value:"Güclü"}),i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("advanced")]})]}),n.jsx(_e,{name:"computer",component:"span",className:"error"})]}),n.jsxs("div",{className:`${ie.formGroup}`,children:[n.jsxs("div",{children:[n.jsxs("label",{children:[i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("experience")]}),n.jsxs("div",{className:"flex justifyContentBetween",children:[n.jsx("span",{children:d.experience}),n.jsxs("span",{children:[i&&n.jsx(R,{variant:"text",height:20,width:"100%"}),o&&c("year")]})]}),n.jsx(Ut,{children:n.jsx(yr,{value:d.experience,onChange:D,"aria-label":"Experience slider",min:0,max:47,step:1})})]}),n.jsx(_e,{name:"experience",component:"span",className:"error"})]})]})}})};export{Sr as default};
