import{r as p,o as s,c as S,w as i,a as e,b as o,d as l,m as T,e as u,F as g,f as w,t as c,g as U,h as E,i as R,W as A}from"./vendor.62d9edab.js";const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))$(t);new MutationObserver(t=>{for(const _ of t)if(_.type==="childList")for(const h of _.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&$(h)}).observe(document,{childList:!0,subtree:!0});function y(t){const _={};return t.integrity&&(_.integrity=t.integrity),t.referrerpolicy&&(_.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?_.credentials="include":t.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function $(t){if(t.ep)return;t.ep=!0;const _=y(t);fetch(t.href,_)}};N();var C=(n,r)=>{const y=n.__vccOpts||n;for(const[$,t]of r)y[$]=t;return y};const V={data(){return{username:""}}},I={class:"info-dark3--bg white w-flex row justify-space-between"},L={class:"align-self-center ml3"},B=e("p",{style:{"font-family":"Pacifico","font-size":"larger"},class:"white"}," Content Aggregation Network ",-1),D={class:"pr5 ma4"},j=e("p",{class:"white"},"About",-1);function F(n,r,y,$,t,_){const h=p("router-link"),m=p("router-view"),d=p("w-app");return s(),S(d,null,{default:i(()=>[e("header",null,[e("div",I,[e("div",L,[o(h,{to:{name:"User"}},{default:i(()=>[B]),_:1})]),e("div",D,[o(h,{to:{name:"About"}},{default:i(()=>[j]),_:1})])])]),(s(),l("main",{key:n.$route.path},[o(m)]))]),_:1})}var q=C(V,[["render",F]]);const W={data(){return{usernameInput:"",passwordInput:"",loading:!1,formValid:null,isPassword:!0,validators:[n=>!!n||"This field is required",n=>n.length<=20||"Cannot be more than 20 characters"]}},methods:{async onSubmit(){if(this.formValid){this.loading=!0;const n=T(this.passwordInput);fetch("http://mostlyaman.pythonanywhere.com/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({username:this.usernameInput,password:n})}).then(r=>r.json()).then(r=>{try{console.log("Received:",r),r.status==="OK"?(window.user=r.session_id,window.username=r.username,this.$router.push({name:"User"})):r.status==="ERROR"&&(r.ERROR==="USER NOT FOUND"?this.$waveui.notify({message:"USER NOT FOUND",color:"error"}):r.ERROR==="Wrong Password"?this.$waveui.notify({message:"Wrong Password",color:"error"}):this.$waveui.notify({message:"Server Error",color:"error"}))}catch(y){console.error(y),this.$waveui.notify({message:"Server Error",color:error})}}),this.loading=!1}}}},J=e("p",{class:"title3"},"Login",-1),M=u("Username"),H=u("Submit");function K(n,r,y,$,t,_){const h=p("w-input"),m=p("w-button"),d=p("w-form");return s(),S(d,{onSubmit:_.onSubmit,modelValue:t.formValid,"onUpdate:modelValue":r[3]||(r[3]=a=>t.formValid=a),class:"mxa my12",style:{width:"30%"},autocomplete:"off"},{default:i(()=>[J,o(h,{class:"my5",label:"username",default:"","model-value":t.usernameInput,"onUpdate:model-value":r[0]||(r[0]=a=>t.usernameInput=a),validators:t.validators},{default:i(()=>[M]),_:1},8,["model-value","validators"]),o(h,{class:"my5",modelValue:t.passwordInput,"onUpdate:modelValue":r[1]||(r[1]=a=>t.passwordInput=a),default:"",label:"Password",validators:t.validators,type:t.isPassword?"password":"text","inner-icon-right":t.isPassword?"mdi mdi-eye-off":"mdi mdi-eye","onClick:innerIconRight":r[2]||(r[2]=a=>t.isPassword=!t.isPassword)},null,8,["modelValue","validators","type","inner-icon-right"]),o(m,{loading:t.loading,class:"my10 pa4",type:"submit"},{default:i(()=>[H]),_:1},8,["loading"])]),_:1},8,["onSubmit","modelValue"])}var z=C(W,[["render",K]]);const Y={};function G(n,r){return" About "}var Q=C(Y,[["render",G]]);const X={name:"User",data(){return{loadingContent:!0,navContent:{},mainContent:{}}},async mounted(){this.loadingContent=!0,fetch("http://mostlyaman.pythonanywhere.com/api/v1/getHome").then(n=>n.json()).then(n=>{console.log("Received:",n),this.navContent=n.nav,this.mainContent=n.popular,this.loadingContent=!1})}},Z={key:0,id:"loading"},ee={key:1},te={class:"grow"},ne=e("h1",{class:"title2 text-left mb5"},"RECENT POSTS",-1),oe=e("div",{class:"by mx2"},"by",-1),se=u(),le={class:"author mr2"},re=u(),ie=e("div",{class:"on mr2"},"on",-1),ae=u(),ce={class:"date mr2"};function ue(n,r,y,$,t,_){const h=p("w-spinner"),m=p("router-link"),d=p("w-flex");return t.loadingContent?(s(),l("div",Z,[o(h,{class:"mt12"})])):(s(),l("div",ee,[o(d,{grow:""},{default:i(()=>[e("aside",null,[o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.navContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(m,{class:"link",to:a.path},{default:i(()=>[u(c(f),1)]),_:2},1032,["to"])]),e("ul",null,[(s(!0),l(g,null,w(a.children,(b,k,x)=>(s(),l("div",{class:"ml4",key:x},[e("li",null,[o(m,{class:"link",to:b},{default:i(()=>[u(c(k),1)]),_:2},1032,["to"])])]))),128))])]))),128))])]),_:1})]),e("main",te,[ne,o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.mainContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(d,null,{default:i(()=>[o(m,{class:"link",to:f},{default:i(()=>[u(c(a.head),1)]),_:2},1032,["to"]),oe,se,e("div",le,c(a.author),1),re,ie,ae,e("div",ce,c(a.created),1)]),_:2},1024)])]))),128))])]),_:1})])]),_:1})]))}var de=C(X,[["render",ue]]);const _e={name:"User",data(){return{loadingContent:!0,navContent:{},mainContent:{}}},async mounted(){this.loadingContent=!0,fetch("http://mostlyaman.pythonanywhere.com/api/v1/getPost",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({db:this.$route.params.space,child:this.$route.params.child,post:this.$route.params.post})}).then(n=>n.json()).then(n=>{console.log("Received:",n),this.navContent=n.nav,this.mainContent=n.result,this.loadingContent=!1})}},me={key:0,id:"loading"},pe={key:1},he={class:"grow"},fe={class:"title2 text-left text-bold"},ve={class:"title4 text-left mb"},ye={class:"text-left mb5 text-bold"},ge={class:"text-left"};function we(n,r,y,$,t,_){const h=p("w-spinner"),m=p("router-link"),d=p("w-flex");return t.loadingContent?(s(),l("div",me,[o(h,{class:"mt12"})])):(s(),l("div",pe,[o(d,{grow:""},{default:i(()=>[e("aside",null,[o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.navContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(m,{class:"link",to:a.path},{default:i(()=>[u(c(f),1)]),_:2},1032,["to"])]),e("ul",null,[(s(!0),l(g,null,w(a.children,(b,k,x)=>(s(),l("div",{class:"ml4",key:x},[e("li",null,[o(m,{class:"link",to:b},{default:i(()=>[u(c(k),1)]),_:2},1032,["to"])])]))),128))])]))),128))])]),_:1})]),e("main",he,[e("h1",fe,c(t.mainContent.head),1),e("h1",ve,c(n.$route.params.space)+" => "+c(n.$route.params.child)+" => "+c(n.$route.params.post),1),e("p",ye,"by "+c(t.mainContent.author)+" on "+c(t.mainContent.created),1),e("p",ge,c(t.mainContent.content),1)])]),_:1})]))}var $e=C(_e,[["render",we]]);const Ce={name:"User",data(){return{loadingContent:!0,navContent:{},mainContent:{}}},async mounted(){this.loadingContent=!0,fetch("http://mostlyaman.pythonanywhere.com/api/v1/getChild",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({db:this.$route.params.space,child:this.$route.params.child})}).then(n=>n.json()).then(n=>{console.log("Received:",n),this.navContent=n.nav,this.mainContent=n.result,this.loadingContent=!1})}},be={key:0,id:"loading"},ke={key:1},xe={class:"grow"},Se=e("h1",{class:"title2 text-left mb5"},"RECENT POSTS",-1),Oe=e("div",{class:"by mx2"},"by",-1),Pe=u(),Te={class:"author mr2"},Ue=u(),Ee=e("div",{class:"on mr2"},"on",-1),Re=u(),Ae={class:"date mr2"};function Ne(n,r,y,$,t,_){const h=p("w-spinner"),m=p("router-link"),d=p("w-flex");return t.loadingContent?(s(),l("div",be,[o(h,{class:"mt12"})])):(s(),l("div",ke,[o(d,{grow:""},{default:i(()=>[e("aside",null,[o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.navContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(m,{class:"link",to:a.path},{default:i(()=>[u(c(f),1)]),_:2},1032,["to"])]),e("ul",null,[(s(!0),l(g,null,w(a.children,(b,k,x)=>(s(),l("div",{class:"ml4",key:x},[e("li",null,[o(m,{class:"link",to:b},{default:i(()=>[u(c(k),1)]),_:2},1032,["to"])])]))),128))])]))),128))])]),_:1})]),e("main",xe,[Se,o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.mainContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(d,null,{default:i(()=>[o(m,{class:"link",to:f},{default:i(()=>[u(c(a.head),1)]),_:2},1032,["to"]),Oe,Pe,e("div",Te,c(a.author),1),Ue,Ee,Re,e("div",Ae,c(a.created),1)]),_:2},1024)])]))),128))])]),_:1})])]),_:1})]))}var Ve=C(Ce,[["render",Ne]]);const Ie={};function Le(n,r){return s(),l("h1",null,"NOT IMPLEMENTED YET")}var Be=C(Ie,[["render",Le]]);const De={name:"User",data(){return{loadingContent:!0,navContent:{},mainContent:{}}},async mounted(){this.loadingContent=!0,fetch("http://mostlyaman.pythonanywhere.com/api/v1/getDB",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({db:this.$route.params.space})}).then(n=>n.json()).then(n=>{console.log("Received:",n),this.navContent=n.nav,this.mainContent=n.result,this.loadingContent=!1})}},je={key:0,id:"loading"},Fe={key:1},qe={class:"grow"},We=e("h1",{class:"title2 text-left mb5"},"RECENT POSTS",-1),Je=e("div",{class:"by mx2"},"by",-1),Me=u(),He={class:"author mr2"},Ke=u(),ze=e("div",{class:"on mr2"},"on",-1),Ye=u(),Ge={class:"date mr2"};function Qe(n,r,y,$,t,_){const h=p("w-spinner"),m=p("router-link"),d=p("w-flex");return t.loadingContent?(s(),l("div",je,[o(h,{class:"mt12"})])):(s(),l("div",Fe,[o(d,{grow:""},{default:i(()=>[e("aside",null,[o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.navContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(m,{class:"link",to:a.path},{default:i(()=>[u(c(f),1)]),_:2},1032,["to"])]),e("ul",null,[(s(!0),l(g,null,w(a.children,(b,k,x)=>(s(),l("div",{class:"ml4",key:x},[e("li",null,[o(m,{class:"link",to:b},{default:i(()=>[u(c(k),1)]),_:2},1032,["to"])])]))),128))])]))),128))])]),_:1})]),e("main",qe,[We,o(d,{class:"wrapper"},{default:i(()=>[e("ul",null,[(s(!0),l(g,null,w(t.mainContent,(a,f,v)=>(s(),l("div",{class:"text-left ml5 pb3",key:v},[e("li",null,[o(d,null,{default:i(()=>[o(m,{class:"link",to:f},{default:i(()=>[u(c(a.head),1)]),_:2},1032,["to"]),Je,Me,e("div",He,c(a.author),1),Ke,ze,Ye,e("div",Ge,c(a.created),1)]),_:2},1024)])]))),128))])]),_:1})])]),_:1})]))}var Xe=C(De,[["render",Qe]]);const Ze=[{path:"/",redirect:{name:"userlogin"},meta:{title:""}},{path:"/login",component:z,name:"userlogin",meta:{title:"Login",requiresAuth:!1}},{path:"/about",component:Q,name:"About",meta:{title:"About",requiresAuth:!1}},{path:"/user",component:de,name:"User",meta:{title:"Home",requiresAuth:!1}},{path:"/:space/:child/:post",component:$e,name:"Post",meta:{title:"Post",requiresAuth:!1},params:!0},{path:"/:space/:child",component:Ve,name:"Child",meta:{title:"Topic",requiresAuth:!1},params:!0},{path:"/:space",component:Xe,name:"DB",meta:{titile:"Space",requiresAuth:!1},params:!0},{path:"/:path(.*)",component:Be}],O=U(q),P=E({history:R("/content-aggregation-network/"),routes:Ze});P.beforeEach(n=>{if(n.meta.requiresAuth&&!window.user)return{path:"/login"};n.meta.title&&(document.title="CAN - "+n.meta.title)});new A(O,{});O.use(P).mount("#app");
