import{o as m,c as f,E as b,r as c,a as o,w as s,b as x,C as V,d as w,u as y,e as F,R as k,f as C,g as L}from"./vendor.be6029a6.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(e){if(e.ep)return;e.ep=!0;const l=u(e);fetch(e.href,l)}};N();var v=(n,t)=>{for(const[u,d]of t)n[u]=d;return n};const D={},O={class:"video-frame"};function R(n,t){return m(),f("div",O)}var U=v(D,[["render",R]]);const E={data(){return{quest:{name:"",position:"",department:"",email:"",question:""},btnDisabled:!1,rules:{name:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041E",trigger:"blur"}],position:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",trigger:"blur"}],department:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435",trigger:"blur"}],email:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441",trigger:"blur"},{type:"email",message:"\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0430\u0434\u0440\u0435\u0441\u0430",trigger:"blur"}],question:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",trigger:"blur"}]}}},methods:{submitForm(n){this.btnDisabled=!0,this.$refs[n].validate(t=>{if(t)this.postForm();else return this.btnDisabled=!1,!1})},async postForm(){console.log(this.quest),await(await fetch("/api/guest/post",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({message:this.quest})})).ok&&(b({message:"\u0412\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",type:"success",duration:5e3}),this.quest.question="",this.btnDisabled=!1)}}},S={class:"guest-form"},T=x("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");function A(n,t,u,d,e,l){const i=c("el-input"),p=c("el-form-item"),a=c("el-col"),_=c("el-row"),q=c("el-button"),h=c("el-form");return m(),f("div",S,[o(h,{model:e.quest,ref:"questForm",rules:e.rules},{default:s(()=>[o(_,null,{default:s(()=>[o(a,{span:24},{default:s(()=>[o(p,{prop:"name"},{default:s(()=>[o(i,{modelValue:e.quest.name,"onUpdate:modelValue":t[0]||(t[0]=r=>e.quest.name=r),placeholder:"\u0424\u0418\u041E","prefix-icon":"el-icon-edit",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(_,{gutter:30},{default:s(()=>[o(a,{span:12},{default:s(()=>[o(p,{prop:"position"},{default:s(()=>[o(i,{modelValue:e.quest.position,"onUpdate:modelValue":t[1]||(t[1]=r=>e.quest.position=r),placeholder:"\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C","prefix-icon":"el-icon-edit",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(a,{span:12},{default:s(()=>[o(p,{prop:"department"},{default:s(()=>[o(i,{modelValue:e.quest.department,"onUpdate:modelValue":t[2]||(t[2]=r=>e.quest.department=r),placeholder:"\u041F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435","prefix-icon":"el-icon-edit",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(_,null,{default:s(()=>[o(a,{span:24},{default:s(()=>[o(p,{prop:"email"},{default:s(()=>[o(i,{modelValue:e.quest.email,"onUpdate:modelValue":t[3]||(t[3]=r=>e.quest.email=r),placeholder:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441","prefix-icon":"el-icon-edit",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(_,null,{default:s(()=>[o(a,{span:24},{default:s(()=>[o(p,{prop:"question"},{default:s(()=>[o(i,{modelValue:e.quest.question,"onUpdate:modelValue":t[4]||(t[4]=r=>e.quest.question=r),type:"textarea",autosize:{minRows:5,maxRows:8},rows:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(_,null,{default:s(()=>[o(a,{span:24},{default:s(()=>[o(q,{class:"submit-button",disabled:e.btnDisabled,icon:"el-icon-check",onClick:t[5]||(t[5]=r=>l.submitForm("questForm"))},{default:s(()=>[T]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["model","rules"])])}var P=v(E,[["render",A]]);const j={class:"content-container"},B={setup(n){return(t,u)=>(m(),f("div",j,[o(U),o(P)]))}};const G={},z={class:"top-line"};function I(n,t){return m(),f("div",z)}var J=v(G,[["render",I]]);const g=new V("wss://polyus-stream.ru/wss/connection/websocket");g.on("disconnect",function(n){console.log("Disconnected",n)});g.on("connect",function(n){console.log("Connected",n),b({title:"Server",message:"Succesfully connected",type:"success",duration:1e4})});const K={setup(n){return g.connect(),g.subscribe("guest",function(t){b({title:t.data.title,message:t.data.question,type:"success",duration:1e4})}),(t,u)=>(m(),w(y(F),{locale:y(k)},{default:s(()=>[o(J),o(B)]),_:1},8,["locale"]))}};C(K).use(L).mount("#app");
