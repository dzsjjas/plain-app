import{_ as v}from"./TagFilter.vuevuetypescriptsetuptruelang-96447d4e.js";import{d as C,E as g,e as k,G as N,H as w,c as $,q as s,I as n,k as e,o as y,a as t,t as i,m as r,J as _,D as p}from"./index-2583f876.js";import{g as d,M as z}from"./splitpanes.es-96eec7b1.js";import"./EditValueModal-13c70216.js";import"./vee-validate.esm-b0601c3b.js";const B={class:"page-container"},E={class:"sidebar"},M={class:"nav-title"},S={class:"nav"},T=["onClick"],V=["onClick"],q={class:"main"},O=C({__name:"NotesRootView",setup(D){const o=g(),c=k(),l=N(o.query);function m(){p(c,"/notes/trash")}function u(){p(c,"/notes")}return(a,R)=>{const h=v,f=w("router-view");return y(),$("div",B,[s(e(z),null,{default:n(()=>[s(e(d),{size:"20","min-size":"10"},{default:n(()=>[t("div",E,[t("h2",M,i(a.$t("page_title.notes")),1),t("ul",S,[t("li",{onClick:r(u,["prevent"]),class:_({active:e(o).path==="/notes"&&!e(l)})},i(a.$t("all")),11,T),t("li",{onClick:r(m,["prevent"]),class:_({active:e(o).path==="/notes/trash"})},i(a.$t("trash")),11,V)]),s(h,{type:"NOTE",selected:e(l)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:n(()=>[t("div",q,[s(f)])]),_:1})]),_:1})])}}});export{O as default};
