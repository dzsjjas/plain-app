import{_ as v}from"./TagFilter.vuevuetypescriptsetuptruelang-48aecefe.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-4e53d511.js";import{d as y,p as C,q as w,ap as B,x as M,o as b,c as I,f as s,y as o,j as e,e as a,g as m,w as $,z,B as A}from"./index-cf22a9d8.js";import{g as d,M as E}from"./splitpanes.es-dd05a209.js";import"./index-a6eeb602.js";import"./EditValueModal.vuevuetypescriptsetuptruelang-5fd4f7ed.js";import"./VModal.vuevuetypescriptsetuptruelang-83ac7574.js";import"./vee-validate.esm-dd3b5249.js";import"./DeleteConfirm.vuevuetypescriptsetuptruelang-1943d7a1.js";const N={class:"page-container container-fluid"},S={class:"sidebar"},q={class:"nav-title"},x={class:"nav"},G=["onClick"],R={class:"main"},V={name:"ImagesRoot",inheritAttrs:!1,customOptions:{}},U=y({...V,setup(j){var r,_;const n=C(),p=w(),i=B(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function u(){A(p,"/images")}return(t,D)=>{const f=k,g=v,h=M("router-view");return b(),I("div",N,[s(e(E),null,{default:o(()=>[s(e(d),{size:"20"},{default:o(()=>[a("div",S,[a("h2",q,m(t.$t("page_title.images")),1),a("ul",x,[a("li",{onClick:$(u,["prevent"]),class:z({active:e(n).path==="/images"&&!e(c)&&!e(l)})},m(t.$t("all")),11,G)]),s(f,{"bucket-type":"IMAGE",selected:e(l)},null,8,["selected"]),s(g,{"tag-type":"IMAGE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:o(()=>[a("div",R,[s(h)])]),_:1})]),_:1})])}}});export{U as default};
