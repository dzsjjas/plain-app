import{o as r,e as l,f as c,d as D,u as w,a as G,r as L,i as Q,t as S,aN as A,aF as B,$ as o,aG as F,L as H,g as N,j as m,M as E,w as v,x as I,F as b,A as z,z as j,k as P,bE as T,V as p,a2 as q,bF as U,D as Z,n as J,bG as K,S as O,bf as R,bH as W,bI as X,a7 as Y}from"./index-2c8e7849.js";import{E as C}from"./EditValueModal-66c9db73.js";const ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=c("path",{fill:"currentColor",d:"M12 19q-.425 0-.713-.288T11 18v-5H6q-.425 0-.713-.288T5 12q0-.425.288-.713T6 11h5V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v5h5q.425 0 .713.288T19 12q0 .425-.288.713T18 13h-5v5q0 .425-.288.713T12 19Z"},null,-1),ae=[te];function ne(d,a){return r(),l("svg",ee,ae)}const se={name:"material-symbols-add-rounded",render:ne},oe={class:"nav-title mt-4"},ie=["onClick"],re=c("md-ripple",null,null,-1),le={class:"nav"},de=["onClick","onContextmenu"],me=D({__name:"TagFilter",props:{type:{type:String,required:!0},selected:{type:String,required:!0}},setup(d){const a=d,{t:n}=w(),k=G(),_=L([]),{refetch:i}=Q({handle:(e,t)=>{t?S(n(t),"error"):e&&(_.value=e.tags)},document:A,variables:{type:a.type},appApi:!0});function x(){p(C,{title:n("add_tag"),placeholder:n("name"),mutation:()=>q({document:U,options:{update:()=>{i()}},appApi:!0}),getVariables:e=>({type:a.type,name:e})})}function $(e){const t=Z([{name:"tag",op:"",value:T(e.name)}]);J(k,`/${K[a.type]}?q=${O(t)}`)}function M(e,t){e.preventDefault(),R({x:e.x,y:e.y,items:[{label:n("rename"),onClick:()=>{p(C,{title:n("rename"),placeholder:n("name"),value:t.name,mutation:()=>q({document:W,appApi:!0}),getVariables:u=>({id:t.id,name:u}),done:()=>{i()}})}},{label:n("delete"),onClick:()=>{p(Y,{id:t.id,name:t.name,gql:X,appApi:!0,typeName:"Tag"})}}]})}const f=e=>{e===a.type&&i()},h=e=>{e.type===a.type&&i()},g=e=>{e.item.tags.length&&e.type===a.type&&i()};return B(()=>{o.on("refetch_tags",f),o.on("media_items_deleted",h),o.on("media_item_deleted",g)}),F(()=>{o.off("refetch_tags",f),o.off("media_items_deleted",h),o.off("media_item_deleted",g)}),(e,t)=>{const u=se,V=H("tooltip");return r(),l(b,null,[c("h2",oe,[N(m(e.$t("tags"))+" ",1),E((r(),l("button",{class:"icon-button",onClick:v(x,["prevent"])},[re,I(u)],8,ie)),[[V,e.$t("add_tag")]])]),c("ul",le,[(r(!0),l(b,null,z(_.value,s=>(r(),l("li",{onClick:v(y=>$(s),["prevent"]),key:s.id,onContextmenu:y=>M(y,s),class:j({active:d.selected&&P(T)(s.name)===d.selected})},m(s.name)+" ("+m(s.count)+") ",43,de))),128))])],64)}}});export{me as _,se as a};
