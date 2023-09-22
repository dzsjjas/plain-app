import{d as I,a as y,r as D,u as F,i as M,k as B,a7 as o,by as g,a1 as q,e as l,f as e,x as $,t,F as A,A as E,o as r,h as f,w as m,n as N,W as S,a8 as V,$ as L}from"./index-5dfa21ef.js";import{_ as P}from"./Breadcrumb-99dc37b3.js";import{p as j}from"./parser-fdd85e1d.js";const Q={class:"page-container"},z={class:"main"},H={class:"table-responsive"},J={class:"table"},K=e("th",null,"ID",-1),O={class:"actions two"},R={class:"form-check"},T=["disabled","onChange","checked"],U={class:"actions two"},X=["onClick"],Y=["onClick"],ae=I({__name:"WireGuardView",setup(Z){const b=y(),d=D([]),{t:c}=F();function w(n){N(b,`/wireguard/${n}`)}M({handle:(n,s)=>{s?B(c(s),"error"):d.value=n.wireGuards.map(i=>({...i,...j(i.config)}))},document:o`
    query {
      wireGuards {
        ...WireGuardFragment
      }
    }
    ${g}
  `});const{mutate:v,loading:k}=q({document:o`
    mutation enableWireGuard($id: ID!, $enable: Boolean!) {
      enableWireGuard(id: $id, enable: $enable) {
        ...WireGuardFragment
      }
    }
    ${g}
  `});function G(n){v({id:n.id,enable:n.isEnabled})}function W(n){var s;S(V,{id:n.id,name:(s=n.wgInterface)==null?void 0:s.name,gql:o`
      mutation DeleteWireGuard($id: ID!) {
        deleteWireGuard(id: $id)
      }
    `,appApi:!1,typeName:"WireGuard"})}return(n,s)=>{const i=P,C=L;return r(),l("div",Q,[e("div",z,[$(i,{current:()=>n.$t("page_title.wireguard")},null,8,["current"]),e("div",H,[e("table",J,[e("thead",null,[e("tr",null,[K,e("th",null,t(n.$t("name")),1),e("th",null,t(n.$t("address")),1),e("th",null,t(n.$t("status")),1),e("th",null,t(n.$t("enabled")),1),e("th",O,t(n.$t("actions")),1)])]),e("tbody",null,[(r(!0),l(A,null,E(d.value,a=>{var u,_,p;return r(),l("tr",{key:a.id},[e("td",null,[$(C,{id:a.id,raw:a},null,8,["id","raw"])]),e("td",null,t((u=a.wgInterface)==null?void 0:u.name),1),e("td",null,t((p=(_=a.wgInterface)==null?void 0:_.address)==null?void 0:p.join(", ")),1),e("td",null,t(a.isActive?n.$t("running")+` (${f(c)("listening_port")}: ${a.listeningPort})`:n.$t("stopped")),1),e("td",null,[e("div",R,[e("md-checkbox",{"touch-target":"wrapper",disabled:f(k),onChange:h=>G(a),checked:a.isEnabled},null,40,T)])]),e("td",U,[e("a",{href:"#",class:"v-link",onClick:m(h=>w(a.id),["prevent"])},t(n.$t("edit")),9,X),e("a",{href:"#",class:"v-link",onClick:m(h=>W(a),["prevent"])},t(n.$t("delete")),9,Y)])])}),128))])])])])])}}});export{ae as default};
