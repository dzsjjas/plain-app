import{_ as $}from"./TagFilter.vuevuetypescriptsetuptruelang-46c09f11.js";import{d as w,n as B,p as N,q as z,o as _,c as m,e as o,v as i,g as e,b as t,f as l,w as d,x as u,F as L,y as M,z as f}from"./index-9f7eccb0.js";import{g as v,M as S}from"./splitpanes.es-1643cf38.js";import{p as T}from"./search-cd9707cd.js";import"./index-c2eb4c85.js";import"./EditValueModal.vuevuetypescriptsetuptruelang-de109d01.js";import"./VModal.vuevuetypescriptsetuptruelang-e552d784.js";import"./vee-validate.esm-d2a0b94e.js";import"./DeleteConfirm.vuevuetypescriptsetuptruelang-7be37041.js";import"./baseIndexOf-70b929c6.js";const V={class:"page-container container-fluid"},b={class:"sidebar"},q={class:"nav-title"},F={class:"nav"},R=["onClick"],x=["onClick"],A={class:"main"},X=w({__name:"CallsRootView",setup(D){const n=B(),c=N(),r=n.params.type,p=r?"":T(n.query);function g(s){f(c,`/calls/${s}`)}const h=["incoming","outgoing","missed"];function y(){f(c,"/calls")}return(s,E)=>{const C=$,k=z("router-view");return _(),m("div",V,[o(e(S),null,{default:i(()=>[o(e(v),{size:"20"},{default:i(()=>[t("div",b,[t("h2",q,l(s.$t("page_title.calls")),1),t("ul",F,[t("li",{onClick:d(y,["prevent"]),class:u({active:e(n).path==="/calls"&&!e(p)})},l(s.$t("all")),11,R),(_(),m(L,null,M(h,a=>t("li",{key:a,onClick:d(P=>g(a),["prevent"]),class:u({active:a===e(r)})},l(s.$t(`call_type.${a}`)),11,x)),64))]),o(C,{"tag-type":"CALL",selected:e(p)},null,8,["selected"])])]),_:1}),o(e(v),null,{default:i(()=>[t("div",A,[o(k)])]),_:1})]),_:1})])}}});export{X as default};