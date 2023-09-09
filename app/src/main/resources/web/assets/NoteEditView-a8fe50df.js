import{_ as R}from"./MonacoEditor.vuevuetypescriptsetuptruelang-87b64371.js";import{_ as W}from"./Breadcrumb-d5bdebe4.js";import{g as b,M as $}from"./splitpanes.es-5e471b0b.js";import{aC as H,aD as A,aE as B,d as F,q as G,u as Q,p as j,r as C,s as O,a as U,H as q,i as K,t as P,aF as X,Z,aG as z,aH as J,o as Y,c as ee,e as I,f as E,y as M,k as te,g as D,j as h,K as ne,T as ae,_ as ie}from"./index-5f5c60b6.js";import{u as oe}from"./markdown-83343831.js";import{t as se}from"./truncate-95b28e60.js";import"./stringToArray-06dd1adb.js";var re=function(){return H.Date.now()};const L=re;var ue="Expected a function",ce=Math.max,le=Math.min;function de(w,u,o){var l,s,i,a,t,c,v=0,T=!1,d=!1,_=!0;if(typeof w!="function")throw new TypeError(ue);u=A(u)||0,B(o)&&(T=!!o.leading,d="maxWait"in o,i=d?ce(A(o.maxWait)||0,u):i,_="trailing"in o?!!o.trailing:_);function x(e){var f=l,k=s;return l=s=void 0,v=e,a=w.apply(k,f),a}function N(e){return v=e,t=setTimeout(p,u),T?x(e):a}function V(e){var f=e-c,k=e-v,S=u-f;return d?le(S,i-k):S}function y(e){var f=e-c,k=e-v;return c===void 0||f>=u||f<0||d&&k>=i}function p(){var e=L();if(y(e))return n(e);t=setTimeout(p,V(e))}function n(e){return t=void 0,_&&l?x(e):(l=s=void 0,a)}function r(){t!==void 0&&clearTimeout(t),v=0,l=c=s=t=void 0}function g(){return t===void 0?a:n(L())}function m(){var e=L(),f=y(e);if(l=arguments,s=this,c=e,f){if(t===void 0)return N(c);if(d)return clearTimeout(t),t=setTimeout(p,u),x(c)}return t===void 0&&(t=setTimeout(p,u)),a}return m.cancel=r,m.flush=g,m}const me={class:"page-container container-fluid"},fe={class:"main"},ve={class:"time"},_e=["innerHTML"],pe=F({__name:"NoteEditView",setup(w){const u=G(),{t:o}=Q(),l=j(),s=C(l.params.id),i=C(),a=C(""),t=C(""),{app:c}=O(U()),v=q(()=>{var n;return(n=i.value)!=null&&n.deletedAt?["/notes","/notes/trash"]:["/notes"]}),{render:T}=oe(c);let d=!1;function _(){return s.value==="create"}const x=de(()=>{V({id:_()?"":s.value,input:{content:a.value,title:se(a.value,{length:100,omission:""})}})},500),N=()=>{ne(a,async n=>{t.value=await T(n),x()})};_()?N():K({handle:async(n,r)=>{if(r)P(o(r),"error");else{if(d)return;i.value=n.note,a.value=n.note.content,t.value=await T(a.value),d=!0,N()}},document:X,variables:()=>({id:s.value}),appApi:!0});const{mutate:V,onDone:y}=Z({document:z,appApi:!0});y(n=>{var g,m;i.value=n.data.saveNote,_()&&(s.value=(g=i.value)==null?void 0:g.id,J(u,`/notes/${(m=i.value)==null?void 0:m.id}`))});function p(){var r;const n=(r=i==null?void 0:i.value)==null?void 0:r.updatedAt;return n?`(${o("updated_at")}: ${ae(n)})`:""}return(n,r)=>{const g=W,m=R;return Y(),ee("div",me,[I("div",fe,[E(g,{paths:h(v)},{current:M(()=>[te(D(s.value==="create"?h(o)("create"):h(o)("edit")),1),I("span",ve,D(p()),1)]),_:1},8,["paths"]),E(h($),{class:"panel-container"},{default:M(()=>[E(h(b),null,{default:M(()=>[E(m,{language:"html",modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e)},null,8,["modelValue"])]),_:1}),E(h(b),{class:"markdown-panel"},{default:M(()=>[I("div",{class:"md-container",innerHTML:t.value},null,8,_e)]),_:1})]),_:1})])])}}});const ye=ie(pe,[["__scopeId","data-v-8eaa310c"]]);export{ye as default};