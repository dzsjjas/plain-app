import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-96447d4e.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-1630ac12.js";import{d as C,E as w,e as y,az as I,H as M,c as z,q as s,I as o,k as e,o as B,a,t as m,m as E,J as $,D as b}from"./index-2583f876.js";import{g as d,M as N}from"./splitpanes.es-96eec7b1.js";import"./EditValueModal-13c70216.js";import"./vee-validate.esm-b0601c3b.js";const S={class:"page-container"},V={class:"sidebar"},q={class:"nav-title"},A={class:"nav"},D=["onClick"],G={class:"main"},j=C({__name:"ImagesRootView",setup(R){var r,_;const n=w(),u=y(),i=I(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){b(u,"/images")}return(t,x)=>{const f=k,h=g,v=M("router-view");return B(),z("div",S,[s(e(N),null,{default:o(()=>[s(e(d),{size:"20","min-size":"10"},{default:o(()=>[a("div",V,[a("h2",q,m(t.$t("page_title.images")),1),a("ul",A,[a("li",{onClick:E(p,["prevent"]),class:$({active:e(n).path==="/images"&&!e(c)&&!e(l)})},m(t.$t("all")),11,D),s(f,{type:"IMAGE",selected:e(l)},null,8,["selected"])]),s(h,{type:"IMAGE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:o(()=>[a("div",G,[s(v)])]),_:1})]),_:1})])}}});export{j as default};
