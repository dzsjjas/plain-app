import{b as tt,u as et,_ as st,a as ot}from"./list-d04dc80e.js";import{_ as nt}from"./FieldId-4280c3b8.js";import{_ as at}from"./Multiselect-94708f99.js";import{_ as lt}from"./Breadcrumb-99ff7c19.js";import{d as ct,q as ut,r as p,u as rt,C as dt,H as it,p as pt,D as _t,I as ht,K as mt,L as ft,M as vt,Z as bt,o as l,c as u,e as t,f as b,j as a,F as k,w as _,g as n,l as V,y as kt,N as w,Q as B,R as gt,A as K,U as yt,aM as $t,B as L,V as G,aa as Vt,ab as wt,E as Ct,G as Nt,t as z,aK as St,aN as Tt,O as It,P as Dt,z as qt,T as E,W as At,n as Mt,_ as Qt}from"./index-cf22a9d8.js";import{n as Ut}from"./list-6498ebd9.js";import{u as Bt}from"./tags-8dfd5c3d.js";import"./VModal.vuevuetypescriptsetuptruelang-83ac7574.js";import"./vee-validate.esm-dd3b5249.js";const Kt=h=>(Vt("data-v-b4771bad"),h=h(),wt(),h),Lt={class:"v-toolbar"},Gt={class:"right-actions"},zt=["onClick"],Et={class:"row mb-3"},Ft={class:"col-md-3 col-form-label"},Ot={class:"col-md-9"},Rt=["onKeyup"],xt={class:"row mb-3"},Pt={class:"col-md-3 col-form-label"},jt={class:"col-md-9"},Ht={class:"actions"},Wt=["onClick"],Zt={class:"table"},Jt=Kt(()=>t("th",null,"ID",-1)),Xt=["onClick"],Yt=["onUpdate:modelValue"],te=["onClick"],ee={class:"badge"},se={class:"nowrap"},oe={class:"nowrap"},ne={key:0},ae={colspan:"6"},le={class:"no-data-placeholder"},ce={name:"NotesTrash",inheritAttrs:!1,customOptions:{}},ue=ct({...ce,setup(h){var Q,U;const C=ut(),c=p([]),{t:N}=rt(),r=dt({text:"",tags:[]}),F=it(()=>c.value.some(e=>e.checked)),S="NOTE",T=pt().query,m=p(parseInt(((Q=T.page)==null?void 0:Q.toString())??"1")),f=50,v=p(0),d=p(_t(((U=T.q)==null?void 0:U.toString())??"")),I=p(""),{tags:O}=Bt(S,d,r,async e=>{e.push({name:"trash",op:"",value:"true"}),I.value=Ct(e),await Nt(),x()}),{deleteItems:D}=tt($t,()=>{y()},c),{selectAll:g,toggleSelect:q}=et(c),{loading:R,load:x,refetch:y}=ht({handle:(e,o)=>{o?z(N(o),"error"):e&&(c.value=e.notes.map($=>({...$,checked:!1})),v.value=e.noteCount)},document:St,variables:()=>({offset:(m.value-1)*f,limit:f,query:I.value}),appApi:!0});mt(m,e=>{L(C,`/notes/trash?page=${e}&q=${G(d.value)}`)});function A(){d.value=At(r),M()}function M(){L(C,`/notes/trash?q=${G(d.value)}`)}ft(()=>{vt.on("refetch_by_tag_type",e=>{e===S&&y()})});const{mutate:P,onDone:j}=bt({document:Tt,appApi:!0});function H(){const e=c.value.filter(o=>o.checked);if(e.length===0){z(N("select_first"),"error");return}P({ids:e.map(o=>o.id)})}function W(e){Mt.push(`/notes/${e.id}`)}return j(()=>{y()}),(e,o)=>{const $=lt,Z=at,J=st,X=nt,Y=ot;return l(),u(k,null,[t("div",Lt,[b($,{current:()=>`${e.$t("page_title.trash")} (${v.value})`},null,8,["current"]),t("div",Gt,[a(F)?(l(),u(k,{key:0},[t("button",{class:"btn btn-restore",type:"button",onClick:_(H,["prevent"])},n(e.$t("restore")),9,zt),t("button",{class:"btn btn-delete",type:"button",onClick:o[0]||(o[0]=_((...s)=>a(D)&&a(D)(...s),["prevent"]))},n(e.$t("delete")),1)],64)):V("",!0),b(J,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=s=>d.value=s),search:M},{filters:kt(()=>[t("div",Et,[t("label",Ft,n(e.$t("keywords")),1),t("div",Ot,[w(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=s=>r.text=s),class:"form-control",onKeyup:Dt(A,["enter"])},null,40,Rt),[[It,r.text]])])]),t("div",xt,[t("label",Pt,n(e.$t("tags")),1),t("div",jt,[b(Z,{modelValue:r.tags,"onUpdate:modelValue":o[2]||(o[2]=s=>r.tags=s),label:"name","track-by":"id",options:a(O)},null,8,["modelValue","options"])])]),t("div",Ht,[t("button",{type:"button",class:"btn",onClick:_(A,["stop"])},n(e.$t("search")),9,Wt)])]),_:1},8,["modelValue"])])]),t("table",Zt,[t("thead",null,[t("tr",null,[t("th",null,[w(t("input",{class:"form-check-input",type:"checkbox",onChange:o[4]||(o[4]=(...s)=>a(q)&&a(q)(...s)),"onUpdate:modelValue":o[5]||(o[5]=s=>gt(g)?g.value=s:null)},null,544),[[B,a(g)]])]),Jt,t("th",null,n(e.$t("title")),1),t("th",null,n(e.$t("tags")),1),t("th",null,n(e.$t("updated_at")),1),t("th",null,n(e.$t("created_at")),1)])]),t("tbody",null,[(l(!0),u(k,null,K(c.value,s=>(l(),u("tr",{key:s.id,class:qt({checked:s.checked}),onClick:_(i=>s.checked=!s.checked,["stop"])},[t("td",null,[w(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i=>s.checked=i},null,8,Yt),[[B,s.checked]])]),t("td",null,[b(X,{id:s.id,raw:s},null,8,["id","raw"])]),t("td",null,[t("a",{href:"#",onClick:_(i=>W(s),["stop"])},n(s.title||e.$t("no_content")),9,te)]),t("td",null,[(l(!0),u(k,null,K(s.tags,i=>(l(),u("span",ee,n(i.name),1))),256))]),t("td",se,n(a(E)(s.updatedAt)),1),t("td",oe,n(a(E)(s.createdAt)),1)],10,Xt))),128))]),c.value.length?V("",!0):(l(),u("tfoot",ne,[t("tr",null,[t("td",ae,[t("div",le,n(e.$t(a(Ut)(a(R)))),1)])])]))]),v.value>f?(l(),yt(Y,{key:0,modelValue:m.value,"onUpdate:modelValue":o[6]||(o[6]=s=>m.value=s),total:v.value,limit:f},null,8,["modelValue","total"])):V("",!0)],64)}}});const ke=Qt(ue,[["__scopeId","data-v-b4771bad"]]);export{ke as default};
