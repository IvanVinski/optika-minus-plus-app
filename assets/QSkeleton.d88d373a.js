import{u as r,a as d}from"./QSeparator.c3509354.js";import{c as u,h as c}from"./render.2fa0c32b.js";import{c as n,h as m,g}from"./index.0e3853a3.js";const k=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],h=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var v=u({name:"QSkeleton",props:{...r,tag:{type:String,default:"div"},type:{type:String,validator:e=>k.includes(e),default:"rect"},animation:{type:String,validator:e=>h.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:a}){const i=g(),o=d(e,i.proxy.$q),s=n(()=>{const t=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:t[0],height:t[1]}}),l=n(()=>`q-skeleton q-skeleton--${o.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>m(e.tag,{class:l.value,style:s.value},c(a.default))}});export{v as Q};