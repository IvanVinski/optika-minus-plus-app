import{Q as ut}from"./QImg.b299cb09.js";import{Q as B,R as U}from"./QBtn.622a5ff6.js";import{Q as Qe}from"./QSpace.a486938a.js";import{c as R,h as ze,a as st,b as ct,d as Ee,e as Ie}from"./render.f2209def.js";import{c as f,h as z,r as T,i as $e,o as te,a as K,n as Te,b as se,g as A,l as Se,d as de,e as Q,w as C,f as ae,j as G,k as dt,m as le,p as ye,q as Ve,s as we,t as _e,u as Ce,v as ft,x as j,y as je,z as vt,A as ie,B as mt,C as ht,D as gt,E as M,F as W,G as $,H as y,I as bt,J as De,K as J,L as ue,M as He}from"./index.a87e1fb5.js";import{Q as pt,a as Z,b as ee}from"./QList.b624dd07.js";import{u as yt,a as wt,b as Ct,c as qt,d as kt,e as re,f as xt,g as St,h as _t,i as zt,j as qe}from"./format.56cce405.js";import{u as $t,a as Tt,Q as Lt}from"./QSeparator.834962e3.js";import{g as Me,s as Re}from"./touch.70a9dd44.js";import{c as Bt}from"./selection.ee6b1390.js";import"./QSpinner.a9d0fda7.js";var Fe=R({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:s}){const l=f(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>z("div",{class:l.value,role:"toolbar"},ze(s.default))}});function Ot(){const t=T(!$e.value);return t.value===!1&&te(()=>{t.value=!0}),t}const Ke=typeof ResizeObserver!="undefined",We=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ce=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:s}){let l=null,i,e={width:-1,height:-1};function a(c){c===!0||t.debounce===0||t.debounce==="0"?u():l===null&&(l=setTimeout(u,t.debounce))}function u(){if(clearTimeout(l),l=null,i){const{offsetWidth:c,offsetHeight:r}=i;(c!==e.width||r!==e.height)&&(e={width:c,height:r},s("resize",e))}}const{proxy:h}=A();if(Ke===!0){let c;const r=n=>{i=h.$el.parentNode,i?(c=new ResizeObserver(a),c.observe(i),u()):n!==!0&&se(()=>{r(!0)})};return te(()=>{r()}),K(()=>{clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),Te}else{let n=function(){clearTimeout(l),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,Se.passive),r=void 0)},q=function(){n(),i&&i.contentDocument&&(r=i.contentDocument.defaultView,r.addEventListener("resize",a,Se.passive),u())};const c=Ot();let r;return te(()=>{se(()=>{i=h.$el,i&&q()})}),K(n),h.trigger=a,()=>{if(c.value===!0)return z("object",{style:We.style,tabindex:-1,type:"text/html",data:We.url,"aria-hidden":"true",onLoad:q})}}}}),Pt=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:s,emit:l}){const{proxy:{$q:i}}=A(),e=de(ae,Q);if(e===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=T(parseInt(t.heightHint,10)),u=T(!0),h=f(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||i.platform.is.ios&&e.isContainer.value===!0),c=f(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return u.value===!0?a.value:0;const v=a.value-e.scroll.value.position;return v>0?v:0}),r=f(()=>t.modelValue!==!0||h.value===!0&&u.value!==!0),n=f(()=>t.modelValue===!0&&r.value===!0&&t.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),S=f(()=>{const v=e.rows.value.top,L={};return v[0]==="l"&&e.left.space===!0&&(L[i.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),v[2]==="r"&&e.right.space===!0&&(L[i.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),L});function m(v,L){e.update("header",v,L)}function g(v,L){v.value!==L&&(v.value=L)}function _({height:v}){g(a,v),m("size",v)}function x(v){n.value===!0&&g(u,!0),l("focusin",v)}C(()=>t.modelValue,v=>{m("space",v),g(u,!0),e.animate()}),C(c,v=>{m("offset",v)}),C(()=>t.reveal,v=>{v===!1&&g(u,t.modelValue)}),C(u,v=>{e.animate(),l("reveal",v)}),C(e.scroll,v=>{t.reveal===!0&&g(u,v.direction==="up"||v.position<=t.revealOffset||v.position-v.inflectionPoint<100)});const w={};return e.instances.header=w,t.modelValue===!0&&m("size",a.value),m("space",t.modelValue),m("offset",c.value),K(()=>{e.instances.header===w&&(e.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const v=st(s.default,[]);return t.elevated===!0&&v.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(z(ce,{debounce:0,onResize:_})),z("header",{class:q.value,style:S.value,onFocusin:x},v)}}});function ke(t,s,l){const i=_e(t);let e,a=i.left-s.event.x,u=i.top-s.event.y,h=Math.abs(a),c=Math.abs(u);const r=s.direction;r.horizontal===!0&&r.vertical!==!0?e=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?e=u<0?"up":"down":r.up===!0&&u<0?(e="up",h>c&&(r.left===!0&&a<0?e="left":r.right===!0&&a>0&&(e="right"))):r.down===!0&&u>0?(e="down",h>c&&(r.left===!0&&a<0?e="left":r.right===!0&&a>0&&(e="right"))):r.left===!0&&a<0?(e="left",h<c&&(r.up===!0&&u<0?e="up":r.down===!0&&u>0&&(e="down"))):r.right===!0&&a>0&&(e="right",h<c&&(r.up===!0&&u<0?e="up":r.down===!0&&u>0&&(e="down")));let n=!1;if(e===void 0&&l===!1){if(s.event.isFirst===!0||s.event.lastDir===void 0)return{};e=s.event.lastDir,n=!0,e==="left"||e==="right"?(i.left-=a,h=0,a=0):(i.top-=u,c=0,u=0)}return{synthetic:n,payload:{evt:t,touch:s.event.mouse!==!0,mouse:s.event.mouse===!0,position:i,direction:e,isFirst:s.event.isFirst,isFinal:l===!0,duration:Date.now()-s.event.time,distance:{x:h,y:c},offset:{x:a,y:u},delta:{x:i.left-s.event.lastX,y:i.top-s.event.lastY}}}}let Qt=0;var xe=ct({name:"touch-pan",beforeMount(t,{value:s,modifiers:l}){if(l.mouse!==!0&&G.has.touch!==!0)return;function i(a,u){l.mouse===!0&&u===!0?ft(a):(l.stop===!0&&we(a),l.prevent===!0&&Ve(a))}const e={uid:"qvtp_"+Qt++,handler:s,modifiers:l,direction:Me(l),noop:Te,mouseStart(a){Re(a,e)&&dt(a)&&(le(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Re(a,e)){const u=a.target;le(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,u){if(G.is.firefox===!0&&ye(t,!0),e.lastEvt=a,u===!0||l.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ve(r),a.cancelBubble===!0&&we(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:r}}we(a)}const{left:h,top:c}=_e(a);e.event={x:h,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:c}},move(a){if(e.event===void 0)return;const u=_e(a),h=u.left-e.event.x,c=u.top-e.event.y;if(h===0&&c===0)return;e.lastEvt=a;const r=e.event.mouse===!0,n=()=>{i(a,r);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),e.styleCleanup=g=>{if(e.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),r===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{_(),g()},50):_()}else g!==void 0&&g()}};if(e.event.detected===!0){e.event.isFirst!==!0&&i(a,e.event.mouse);const{payload:m,synthetic:g}=ke(a,e,!1);m!==void 0&&(e.handler(m)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&n(),e.event.lastX=m.position.left,e.event.lastY=m.position.top,e.event.lastDir=g===!0?void 0:m.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||r===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){n(),e.event.detected=!0,e.move(a);return}const q=Math.abs(h),S=Math.abs(c);q!==S&&(e.direction.horizontal===!0&&q>S||e.direction.vertical===!0&&q<S||e.direction.up===!0&&q<S&&c<0||e.direction.down===!0&&q<S&&c>0||e.direction.left===!0&&q>S&&h<0||e.direction.right===!0&&q>S&&h>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,u){if(e.event!==void 0){if(Ce(e,"temp"),G.is.firefox===!0&&ye(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(ke(a===void 0?e.lastEvt:a,e).payload);const{payload:h}=ke(a===void 0?e.lastEvt:a,e,!0),c=()=>{e.handler(h)};e.styleCleanup!==void 0?e.styleCleanup(c):c()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";le(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}G.has.touch===!0&&le(e,"main",[[t,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,s){const l=t.__qtouchpan;l!==void 0&&(s.oldValue!==s.value&&(typeof value!="function"&&l.end(),l.handler=s.value),l.direction=Me(s.modifiers))},beforeUnmount(t){const s=t.__qtouchpan;s!==void 0&&(s.event!==void 0&&s.end(),Ce(s,"main"),Ce(s,"temp"),G.is.firefox===!0&&ye(t,!1),s.styleCleanup!==void 0&&s.styleCleanup(),delete t.__qtouchpan)}});const Ae=150;var Et=R({name:"QDrawer",inheritAttrs:!1,props:{...yt,...$t,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...wt,"onLayout","miniState"],setup(t,{slots:s,emit:l,attrs:i}){const e=A(),{proxy:{$q:a}}=e,u=Tt(t,a),{preventBodyScroll:h}=xt(),{registerTimeout:c,removeTimeout:r}=Ct(),n=de(ae,Q);if(n===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let q,S,m;const g=T(t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint),_=f(()=>t.mini===!0&&g.value!==!0),x=f(()=>_.value===!0?t.miniWidth:t.width),w=T(t.showIfAbove===!0&&g.value===!1?!0:t.modelValue===!0),v=f(()=>t.persistent!==!0&&(g.value===!0||Xe.value===!0));function L(o,p){if(E(),o!==!1&&n.animate(),P(0),g.value===!0){const O=n.instances[oe.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),D(1),n.isContainer.value!==!0&&h(!0)}else D(0),o!==!1&&ge(!1);c(()=>{o!==!1&&ge(!0),p!==!0&&l("show",o)},Ae)}function b(o,p){X(),o!==!1&&n.animate(),D(0),P(N.value*x.value),be(),p!==!0?c(()=>{l("hide",o)},Ae):r()}const{show:d,hide:k}=qt({showing:w,hideOnRouteChange:v,handleShow:L,handleHide:b}),{addToHistory:E,removeFromHistory:X}=kt(w,k,v),F={belowBreakpoint:g,hide:k},V=f(()=>t.side==="right"),N=f(()=>(a.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),Le=T(0),I=T(!1),fe=T(!1),Be=T(x.value*N.value),oe=f(()=>V.value===!0?"left":"right"),ve=f(()=>w.value===!0&&g.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:x.value:0),me=f(()=>t.overlay===!0||t.miniToOverlay===!0||n.view.value.indexOf(V.value?"R":"L")>-1||a.platform.is.ios===!0&&n.isContainer.value===!0),Y=f(()=>t.overlay===!1&&w.value===!0&&g.value===!1),Xe=f(()=>t.overlay===!0&&w.value===!0&&g.value===!1),Ye=f(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&I.value===!1?" hidden":"")),Ue=f(()=>({backgroundColor:`rgba(0,0,0,${Le.value*.4})`})),Oe=f(()=>V.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Ge=f(()=>V.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Je=f(()=>{const o={};return n.header.space===!0&&Oe.value===!1&&(me.value===!0?o.top=`${n.header.offset}px`:n.header.space===!0&&(o.top=`${n.header.size}px`)),n.footer.space===!0&&Ge.value===!1&&(me.value===!0?o.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(o.bottom=`${n.footer.size}px`)),o}),Ze=f(()=>{const o={width:`${x.value}px`,transform:`translateX(${Be.value}px)`};return g.value===!0?o:Object.assign(o,Je.value)}),et=f(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),tt=f(()=>`q-drawer q-drawer--${t.side}`+(fe.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(I.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(me.value===!0||Y.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),at=f(()=>{const o=a.lang.rtl===!0?t.side:oe.value;return[[xe,it,void 0,{[o]:!0,mouse:!0}]]}),ot=f(()=>{const o=a.lang.rtl===!0?oe.value:t.side;return[[xe,Pe,void 0,{[o]:!0,mouse:!0}]]}),nt=f(()=>{const o=a.lang.rtl===!0?oe.value:t.side;return[[xe,Pe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function he(){rt(g,t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint)}C(g,o=>{o===!0?(q=w.value,w.value===!0&&k(!1)):t.overlay===!1&&t.behavior!=="mobile"&&q!==!1&&(w.value===!0?(P(0),D(0),be()):d(!1))}),C(()=>t.side,(o,p)=>{n.instances[p]===F&&(n.instances[p]=void 0,n[p].space=!1,n[p].offset=0),n.instances[o]=F,n[o].size=x.value,n[o].space=Y.value,n[o].offset=ve.value}),C(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&he()}),C(()=>t.behavior+t.breakpoint,he),C(n.isContainer,o=>{w.value===!0&&h(o!==!0),o===!0&&he()}),C(n.scrollbarWidth,()=>{P(w.value===!0?0:void 0)}),C(ve,o=>{H("offset",o)}),C(Y,o=>{l("onLayout",o),H("space",o)}),C(V,()=>{P()}),C(x,o=>{P(),pe(t.miniToOverlay,o)}),C(()=>t.miniToOverlay,o=>{pe(o,x.value)}),C(()=>a.lang.rtl,()=>{P()}),C(()=>t.mini,()=>{t.modelValue===!0&&(lt(),n.animate())}),C(_,o=>{l("miniState",o)});function P(o){o===void 0?se(()=>{o=w.value===!0?0:x.value,P(N.value*o)}):(n.isContainer.value===!0&&V.value===!0&&(g.value===!0||Math.abs(o)===x.value)&&(o+=N.value*n.scrollbarWidth.value),Be.value=o)}function D(o){Le.value=o}function ge(o){const p=o===!0?"remove":n.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function lt(){clearTimeout(S),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),fe.value=!0,S=setTimeout(()=>{fe.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function it(o){if(w.value!==!1)return;const p=x.value,O=re(o.distance.x,0,p);if(o.isFinal===!0){O>=Math.min(75,p)===!0?d():(n.animate(),D(0),P(N.value*p)),I.value=!1;return}P((a.lang.rtl===!0?V.value!==!0:V.value)?Math.max(p-O,0):Math.min(0,O-p)),D(re(O/p,0,1)),o.isFirst===!0&&(I.value=!0)}function Pe(o){if(w.value!==!0)return;const p=x.value,O=o.direction===t.side,ne=(a.lang.rtl===!0?O!==!0:O)?re(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(ne)<Math.min(75,p)===!0?(n.animate(),D(1),P(0)):k(),I.value=!1;return}P(N.value*ne),D(re(1-ne/p,0,1)),o.isFirst===!0&&(I.value=!0)}function be(){h(!1),ge(!0)}function H(o,p){n.update(t.side,o,p)}function rt(o,p){o.value!==p&&(o.value=p)}function pe(o,p){H("size",o===!0?t.miniWidth:p)}return n.instances[t.side]=F,pe(t.miniToOverlay,x.value),H("space",Y.value),H("offset",ve.value),t.showIfAbove===!0&&t.modelValue!==!0&&w.value===!0&&t["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),te(()=>{l("onLayout",Y.value),l("miniState",_.value),q=t.showIfAbove===!0;const o=()=>{(w.value===!0?L:b)(!1,!0)};if(n.totalWidth.value!==0){se(o);return}m=C(n.totalWidth,()=>{m(),m=void 0,w.value===!1&&t.showIfAbove===!0&&g.value===!1?d(!1):o()})}),K(()=>{m!==void 0&&m(),clearTimeout(S),w.value===!0&&be(),n.instances[t.side]===F&&(n.instances[t.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const o=[];g.value===!0&&(t.noSwipeOpen===!1&&o.push(j(z("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),at.value)),o.push(Ee("div",{ref:"backdrop",class:Ye.value,style:Ue.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",t.noSwipeBackdrop!==!0&&w.value===!0,()=>nt.value)));const p=_.value===!0&&s.mini!==void 0,O=[z("div",{...i,key:""+p,class:[et.value,i.class]},p===!0?s.mini():ze(s.default))];return t.elevated===!0&&w.value===!0&&O.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Ee("aside",{ref:"content",class:tt.value,style:Ze.value},O,"contentclose",t.noSwipeClose!==!0&&g.value===!0,()=>ot.value)),z("div",{class:"q-drawer-container"},o)}}}),Vt=R({name:"QPageContainer",setup(t,{slots:s}){const{proxy:{$q:l}}=A(),i=de(ae,Q);if(i===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;je(vt,!0);const e=f(()=>{const a={};return i.header.space===!0&&(a.paddingTop=`${i.header.size}px`),i.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(a.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),a});return()=>z("div",{class:"q-page-container",style:e.value},ze(s.default))}}),Dt=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:s,emit:l}){const{proxy:{$q:i}}=A(),e=de(ae,Q);if(e===Q)return console.error("QFooter needs to be child of QLayout"),Q;const a=T(parseInt(t.heightHint,10)),u=T(!0),h=T($e.value===!0||e.isContainer.value===!0?0:window.innerHeight),c=f(()=>t.reveal===!0||e.view.value.indexOf("F")>-1||i.platform.is.ios&&e.isContainer.value===!0),r=f(()=>e.isContainer.value===!0?e.containerHeight.value:h.value),n=f(()=>{if(t.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?a.value:0;const d=e.scroll.value.position+r.value+a.value-e.height.value;return d>0?d:0}),q=f(()=>t.modelValue!==!0||c.value===!0&&u.value!==!0),S=f(()=>t.modelValue===!0&&q.value===!0&&t.reveal===!0),m=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(q.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),g=f(()=>{const d=e.rows.value.bottom,k={};return d[0]==="l"&&e.left.space===!0&&(k[i.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),d[2]==="r"&&e.right.space===!0&&(k[i.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),k});function _(d,k){e.update("footer",d,k)}function x(d,k){d.value!==k&&(d.value=k)}function w({height:d}){x(a,d),_("size",d)}function v(){if(t.reveal!==!0)return;const{direction:d,position:k,inflectionPoint:E}=e.scroll.value;x(u,d==="up"||k-E<100||e.height.value-r.value-k-a.value<300)}function L(d){S.value===!0&&x(u,!0),l("focusin",d)}C(()=>t.modelValue,d=>{_("space",d),x(u,!0),e.animate()}),C(n,d=>{_("offset",d)}),C(()=>t.reveal,d=>{d===!1&&x(u,t.modelValue)}),C(u,d=>{e.animate(),l("reveal",d)}),C([a,e.scroll,e.height],v),C(()=>i.screen.height,d=>{e.isContainer.value!==!0&&x(h,d)});const b={};return e.instances.footer=b,t.modelValue===!0&&_("size",a.value),_("space",t.modelValue),_("offset",n.value),K(()=>{e.instances.footer===b&&(e.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const d=Ie(s.default,[z(ce,{debounce:0,onResize:w})]);return t.elevated===!0&&d.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),z("footer",{class:m.value,style:g.value,onFocusin:L},d)}}});const{passive:Ne}=Se,Ht=["both","horizontal","vertical"];var Mt=R({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Ht.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:s}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,e,a;C(()=>t.scrollTarget,()=>{c(),h()});function u(){i!==null&&i();const q=Math.max(0,_t(e)),S=zt(e),m={top:q-l.position.top,left:S-l.position.left};if(t.axis==="vertical"&&m.top===0||t.axis==="horizontal"&&m.left===0)return;const g=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:q,left:S},l.directionChanged=l.direction!==g,l.delta=m,l.directionChanged===!0&&(l.direction=g,l.inflectionPoint=l.position),s("scroll",{...l})}function h(){e=St(a,t.scrollTarget),e.addEventListener("scroll",r,Ne),r(!0)}function c(){e!==void 0&&(e.removeEventListener("scroll",r,Ne),e=void 0)}function r(q){if(q===!0||t.debounce===0||t.debounce==="0")u();else if(i===null){const[S,m]=t.debounce?[setTimeout(u,t.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];i=()=>{m(S),i=null}}}const{proxy:n}=A();return C(()=>n.$q.lang.rtl,u),te(()=>{a=n.$el.parentNode,h()}),K(()=>{i!==null&&i(),c()}),Object.assign(n,{trigger:r,getPosition:()=>l}),Te}}),Rt=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:s,emit:l}){const{proxy:{$q:i}}=A(),e=T(null),a=T(i.screen.height),u=T(t.container===!0?0:i.screen.width),h=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),r=T($e.value===!0?0:qe()),n=f(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),q=f(()=>t.container===!1?{minHeight:i.screen.height+"px"}:null),S=f(()=>r.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),m=f(()=>r.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function g(b){if(t.container===!0||document.qScrollPrevented!==!0){const d={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};h.value=d,t.onScroll!==void 0&&l("scroll",d)}}function _(b){const{height:d,width:k}=b;let E=!1;a.value!==d&&(E=!0,a.value=d,t.onScrollHeight!==void 0&&l("scrollHeight",d),w()),u.value!==k&&(E=!0,u.value=k),E===!0&&t.onResize!==void 0&&l("resize",b)}function x({height:b}){c.value!==b&&(c.value=b,w())}function w(){if(t.container===!0){const b=a.value>c.value?qe():0;r.value!==b&&(r.value=b)}}let v;const L={instances:{},view:f(()=>t.view),isContainer:f(()=>t.container),rootRef:e,height:a,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>u.value+r.value),rows:f(()=>{const b=t.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:h,animate(){v!==void 0?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),v=void 0},155)},update(b,d,k){L[b][d]=k}};if(je(ae,L),qe()>0){let k=function(){b=null,d.classList.remove("hide-scrollbar")},E=function(){if(b===null){if(d.scrollHeight>i.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(k,300)},X=function(F){b!==null&&F==="remove"&&(clearTimeout(b),k()),window[`${F}EventListener`]("resize",E)},b=null;const d=document.body;C(()=>t.container!==!0?"add":"remove",X),t.container!==!0&&X("add"),mt(()=>{X("remove")})}return()=>{const b=Ie(s.default,[z(Mt,{onScroll:g}),z(ce,{onResize:_})]),d=z("div",{class:n.value,style:q.value,ref:t.container===!0?void 0:e,tabindex:-1},b);return t.container===!0?z("div",{class:"q-layout-container overflow-hidden",ref:e},[z(ce,{onResize:x}),z("div",{class:"absolute-full",style:S.value},[z("div",{class:"scroll",style:m.value},[d])])]):d}}}),Ft="/optika-minus-plus-app/assets/optikaminusplus-logo-line.f5fb2b59.svg";const Wt={key:0},At={class:"col-auto order"},Nt=ue("div",{class:"row justify-center q-my-sm"}," Sva prava pridr\u017Eana \xA9 2022 Optika minus plus ",-1),oa=ht({__name:"MainLayout",setup(t){const s=T(!1);function l(){s.value=!s.value}return(i,e)=>{const a=gt("router-view");return M(),W(Rt,{view:"hHh lpR ffr"},{default:$(()=>[y(Pt,{reveal:"",class:"text-black",style:{"background-color":"rgba(255, 255, 255, 0.95)"}},{default:$(()=>[y(Fe,null,{default:$(()=>[y(B,{flat:"",dense:"",to:"/"},{default:$(()=>[y(ut,{height:"45px",width:"174px",fit:"contain",src:Ft})]),_:1}),y(Qe),i.$q.screen.gt.xs?(M(),bt("div",Wt,[y(B,{flat:"","no-caps":"",label:"Po\u010Detna",to:"/",class:"my-btn"}),y(B,{flat:"","no-caps":"",label:"O nama",to:"/o-nama"}),y(B,{flat:"","no-caps":"",label:"Novosti",to:"/novosti"}),y(B,{flat:"","no-caps":"",label:"Ponuda",to:"/ponuda"}),y(B,{flat:"","no-caps":"",label:"Kontakt",to:"/kontakt"})])):De("",!0),i.$q.screen.lt.sm?(M(),W(B,{key:1,dense:"",flat:"",round:"",icon:"menu",onClick:l})):De("",!0)]),_:1})]),_:1}),y(Et,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=u=>s.value=u),side:"right",overlay:"",elevated:"",width:200},{default:$(()=>[y(Fe,null,{default:$(()=>[y(Qe),y(B,{dense:"",flat:"",round:"",icon:"close",onClick:l})]),_:1}),y(pt,{padding:"",class:"text-center text-h6"},{default:$(()=>[j((M(),W(Z,{clickable:"",to:"/",exact:""},{default:$(()=>[y(ee,null,{default:$(()=>[J(" Po\u010Detna ")]),_:1})]),_:1})),[[U]]),j((M(),W(Z,{clickable:"",to:"/o-nama"},{default:$(()=>[y(ee,null,{default:$(()=>[J(" O nama ")]),_:1})]),_:1})),[[U]]),j((M(),W(Z,{clickable:"",to:"/novosti"},{default:$(()=>[y(ee,null,{default:$(()=>[J(" Novosti ")]),_:1})]),_:1})),[[U]]),j((M(),W(Z,{clickable:"",to:"/ponuda"},{default:$(()=>[y(ee,null,{default:$(()=>[J(" Ponuda ")]),_:1})]),_:1})),[[U]]),j((M(),W(Z,{clickable:"",to:"/kontakt"},{default:$(()=>[y(ee,null,{default:$(()=>[J(" Kontakt ")]),_:1})]),_:1})),[[U]])]),_:1})]),_:1},8,["modelValue"]),y(Vt,null,{default:$(()=>[y(a)]),_:1}),y(Dt,{class:"bg-secondary text-black"},{default:$(()=>[ue("div",{class:He(["row q-my-sm",i.$q.screen.lt.sm?"justify-center":"q-mx-lg justify-between"])},[ue("div",At,[y(B,{flat:"","no-caps":"",label:"Po\u010Detna",to:"/"}),y(B,{flat:"","no-caps":"",label:"O nama",to:"/o-nama"}),y(B,{flat:"","no-caps":"",label:"Novosti",to:"/novosti"}),y(B,{flat:"","no-caps":"",label:"Ponuda",to:"/ponuda"}),y(B,{flat:"","no-caps":"",label:"Kontakt",to:"/kontakt"})]),ue("div",{class:He(["col-auto",i.$q.screen.lt.sm?"order-first":""])},[y(B,{dense:"",flat:"",round:"",icon:"fa-brands fa-facebook",href:"https://www.facebook.com/dioptrijske.naocale",target:"_blank"}),y(B,{dense:"",flat:"",round:"",icon:"fa-brands fa-instagram",href:"https://www.instagram.com/minusplusoptika/",target:"_blank"})],2)],2),y(Lt,{inset:""}),Nt]),_:1})]),_:1})}}});export{oa as default};