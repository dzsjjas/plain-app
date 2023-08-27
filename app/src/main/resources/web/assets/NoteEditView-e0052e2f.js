import{_ as D}from"./MonacoEditor.vuevuetypescriptsetuptruelang-396b6648.js";import{_ as W}from"./Breadcrumb-99ff7c19.js";import{g as b,M as $}from"./splitpanes.es-dd05a209.js";import{aE as H,aF as A,aG as B,d as F,q as G,u as Q,p as j,r as M,s as O,a as U,H as q,i as J,t as K,aH as P,Z as X,aI as Z,aJ as z,o as Y,c as ee,e as V,f as E,y as w,k as te,g as R,j as h,K as ne,T as ae,_ as ie}from"./index-cf22a9d8.js";import{u as oe}from"./markdown-3183e21b.js";import{t as se}from"./truncate-fe00352a.js";import"./stringToArray-2bab501e.js";var re=function(){return H.Date.now()};const L=re;var ue="Expected a function",ce=Math.max,le=Math.min;function de(C,u,o){var l,s,i,a,t,c,v=0,T=!1,d=!1,_=!0;if(typeof C!="function")throw new TypeError(ue);u=A(u)||0,B(o)&&(T=!!o.leading,d="maxWait"in o,i=d?ce(A(o.maxWait)||0,u):i,_="trailing"in o?!!o.trailing:_);function x(e){var f=l,k=s;return l=s=void 0,v=e,a=C.apply(k,f),a}function N(e){return v=e,t=setTimeout(p,u),T?x(e):a}function I(e){var f=e-c,k=e-v,S=u-f;return d?le(S,i-k):S}function y(e){var f=e-c,k=e-v;return c===void 0||f>=u||f<0||d&&k>=i}function p(){var e=L();if(y(e))return n(e);t=setTimeout(p,I(e))}function n(e){return t=void 0,_&&l?x(e):(l=s=void 0,a)}function r(){t!==void 0&&clearTimeout(t),v=0,l=c=s=t=void 0}function g(){return t===void 0?a:n(L())}function m(){var e=L(),f=y(e);if(l=arguments,s=this,c=e,f){if(t===void 0)return N(c);if(d)return clearTimeout(t),t=setTimeout(p,u),x(c)}return t===void 0&&(t=setTimeout(p,u)),a}return m.cancel=r,m.flush=g,m}const me={class:"page-container container-fluid"},fe={class:"main"},ve={class:"time"},_e=["innerHTML"],pe=F({__name:"NoteEditView",setup(C){const u=G(),{t:o}=Q(),l=j(),s=M(l.params.id),i=M(),a=M(""),t=M(""),{app:c}=O(U()),v=q(()=>{var n;return(n=i.value)!=null&&n.deletedAt?["/notes","/notes/trash"]:["/notes"]}),{render:T}=oe(c);let d=!1;function _(){return s.value==="create"}const x=de(()=>{I({id:_()?"":s.value,input:{content:a.value,title:se(a.value,{length:100,omission:""})}})},500),N=()=>{ne(a,async n=>{t.value=await T(n),x()})};_()?N():J({handle:async(n,r)=>{if(r)K(o(r),"error");else{if(d)return;i.value=n.note,a.value=n.note.content,t.value=await T(a.value),d=!0,N()}},document:P,variables:()=>({id:s.value}),appApi:!0});const{mutate:I,onDone:y}=X({document:Z,appApi:!0});y(n=>{var g,m;i.value=n.data.saveNote,_()&&(s.value=(g=i.value)==null?void 0:g.id,z(u,`/notes/${(m=i.value)==null?void 0:m.id}`))});function p(){var r;const n=(r=i==null?void 0:i.value)==null?void 0:r.updatedAt;return n?`(${o("updated_at")}: ${ae(n)})`:""}return(n,r)=>{const g=W,m=D;return Y(),ee("div",me,[V("div",fe,[E(g,{paths:h(v)},{current:w(()=>[te(R(s.value==="create"?h(o)("create"):h(o)("edit")),1),V("span",ve,R(p()),1)]),_:1},8,["paths"]),E(h($),{class:"panel-container"},{default:w(()=>[E(h(b),null,{default:w(()=>[E(m,{language:"html",modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e)},null,8,["modelValue"])]),_:1}),E(h(b),{class:"markdown-panel"},{default:w(()=>[V("div",{class:"md-container",innerHTML:t.value},null,8,_e)]),_:1})]),_:1})])])}}});const ye=ie(pe,[["__scopeId","data-v-8eaa310c"]]);export{ye as default};
