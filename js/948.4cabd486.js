"use strict";(self["webpackChunktest_project"]=self["webpackChunktest_project"]||[]).push([[948],{5948:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var r=o(6252),u=o(3577);function n(t,e,o,n,s,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{class:"btn btn-outline-dark",type:"button",onClick:e[0]||(e[0]=(...t)=>a.logout&&a.logout(...t))}," logout "),(0,r._)("h3",null,"Welcome "+(0,u.zw)(a.getUsername()),1)],64)}o(7658);var s=o(2721),a={name:"WelcomeVIew",data(){return{}},methods:{getUsername(){return this.$store.getters[`auth/${s.fU}`]},logout(){this.$store.commit(`auth/${s.vA}`,!1),this.$store.commit(`auth/${s.Wt}`,""),this.$router.push("/")}}},l=o(3744);const c=(0,l.Z)(a,[["render",n]]);var h=c}}]);
//# sourceMappingURL=948.4cabd486.js.map