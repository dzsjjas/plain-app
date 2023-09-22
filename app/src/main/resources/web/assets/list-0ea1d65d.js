import{d as C,aA as q,o as i,e as d,f as r,w as k,z as V,F as A,A as B,t as g,g as $,j as b,r as y,x as S,al as E,bE as I,au as x,av as w,_ as R,u as Z,k as F,W as z,bO as M}from"./index-5dfa21ef.js";const D={class:"pagination"},P=["onClick"],H={key:0,class:"page-link"},j=["onClick"],K=["onClick"],ie=C({__name:"VPagination",props:{total:{type:Number,default:0},limit:{type:Number,default:50},rangeSize:{type:Number,default:2},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e;function u(o){a("update:modelValue",o)}const t=q(()=>Math.ceil(l.total/l.limit)),s=q(()=>{const o=[],p=5+l.rangeSize*2;let n=t.value<=p?1:l.modelValue-l.rangeSize,m=t.value<=p?t.value:l.modelValue+l.rangeSize;if(m=m>t.value?t.value:m,n=n<1?1:n,t.value>p){const T=n-1<3,N=t.value-m<3;if(T){m=p-2;for(let c=1;c<n;c++)o.push(c)}else o.push(1),o.push(null);if(N){n=t.value-(p-3);for(let c=n;c<=t.value;c++)o.push(c)}else{for(let c=n;c<=m;c++)o.push(c);o.push(null),o.push(t.value)}}else for(let T=n;T<=m;T++)o.push(T);return o}),f=q(()=>l.modelValue>1),_=q(()=>l.modelValue<t.value);function h(){f.value&&a("update:modelValue",l.modelValue-1)}function v(){_.value&&a("update:modelValue",l.modelValue+1)}return(o,p)=>(i(),d("ul",D,[r("li",{class:V(["page-item",{disabled:!f.value}])},[r("a",{class:"page-link",href:"#",onClick:k(h,["prevent"])},"«",8,P)],2),(i(!0),d(A,null,B(s.value,n=>(i(),d("li",{class:V(["page-item",{disabled:n===null,active:n===e.modelValue}])},[n===null?(i(),d("span",H,"···")):(i(),d("a",{key:1,class:"page-link",href:"#",onClick:k(m=>u(n),["prevent"])},g(n),9,j))],2))),256)),r("li",{class:V(["page-item",{disabled:!_.value}])},[r("a",{class:"page-link",href:"#",onClick:k(v,["prevent"])},"»",8,K)],2)]))}}),L={key:0,class:"alert-info alert-all-checked"},O={key:1,class:"alert-info alert-all-checked"},de=C({__name:"AllCheckedAlert",props:{limit:{type:Number,required:!0},total:{type:Number,required:!0},allCheckedAlertVisible:{type:Boolean,required:!0},realAllChecked:{type:Boolean,required:!0},selectRealAll:{type:Function},clearSelection:{type:Function}},setup(e){return(a,l)=>(i(),d(A,null,[e.allCheckedAlertVisible?(i(),d("div",L,[$(g(a.$t("all_items_on_this_page_are_selected",{count:e.limit}))+" ",1),r("a",{href:"#",onClick:l[0]||(l[0]=k((...u)=>e.selectRealAll&&e.selectRealAll(...u),["prevent"]))},g(a.$t("select_all_items",{count:e.total})),1)])):b("",!0),e.realAllChecked?(i(),d("div",O,[$(g(a.$t("all_items_are_selected",{count:e.total}))+" ",1),r("a",{href:"#",onClick:l[1]||(l[1]=k((...u)=>e.clearSelection&&e.clearSelection(...u),["prevent"]))},g(a.$t("clear_selection")),1)])):b("",!0)],64))}}),Q={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},W=r("path",{fill:"currentColor",d:"M4 19q-.425 0-.713-.288T3 18q0-.425.288-.713T4 17h4q.425 0 .713.288T9 18q0 .425-.288.713T8 19H4ZM4 7q-.425 0-.713-.288T3 6q0-.425.288-.713T4 5h8q.425 0 .713.288T13 6q0 .425-.288.713T12 7H4Zm8 14q-.425 0-.713-.288T11 20v-4q0-.425.288-.713T12 15q.425 0 .713.288T13 16v1h7q.425 0 .713.288T21 18q0 .425-.288.713T20 19h-7v1q0 .425-.288.713T12 21Zm-4-6q-.425 0-.713-.288T7 14v-1H4q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h3v-1q0-.425.288-.713T8 9q.425 0 .713.288T9 10v4q0 .425-.288.713T8 15Zm4-2q-.425 0-.713-.288T11 12q0-.425.288-.713T12 11h8q.425 0 .713.288T21 12q0 .425-.288.713T20 13h-8Zm4-4q-.425 0-.713-.288T15 8V4q0-.425.288-.713T16 3q.425 0 .713.288T17 4v1h3q.425 0 .713.288T21 6q0 .425-.288.713T20 7h-3v1q0 .425-.288.713T16 9Z"},null,-1),G=[W];function J(e,a){return i(),d("svg",Q,G)}const U={name:"material-symbols-tune-rounded",render:J},X={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Y=r("path",{fill:"currentColor",d:"m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"},null,-1),ee=[Y];function le(e,a){return i(),d("svg",X,ee)}const te={name:"material-symbols-search-rounded",render:le},ae=e=>(x("data-v-9494c8d3"),e=e(),w(),e),ne={class:"search-input"},se=["value","placeholder"],oe=ae(()=>r("md-ripple",null,null,-1)),ue=["open"],re=C({__name:"SearchInput",props:{modelValue:{type:String,default:""},search:{type:Function,required:!0}},emits:["update:modelValue"],setup(e,{expose:a,emit:l}){const u=e,t=y(!1),s=y(!1),f=h=>{l("update:modelValue",h.target.value)};function _(){t.value=!0}return a({dismiss:()=>s.value=!1}),(h,v)=>{const o=te,p=U;return i(),d("div",ne,[r("md-outlined-text-field",{id:"input-ref",type:"search","data-search-input":"true",value:e.modelValue,onInput:f,onFocus:_,onBlur:v[1]||(v[1]=n=>t.value=!1),onKeyup:v[2]||(v[2]=E((...n)=>u.search&&u.search(...n),["enter"])),placeholder:h.$t("search_hint")},[S(o,{slot:"leadingicon"}),r("button",{class:"icon-button",ref:"moreButton",slot:"trailingicon",onClick:v[0]||(v[0]=k(()=>s.value=!0,["prevent"]))},[oe,S(p)],512)],40,se),r("md-menu",{anchor:"input-ref","menu-corner":"START_END","anchor-corner":"END_END","stay-open-on-focusout":"",quick:"",open:s.value,onClosed:v[3]||(v[3]=()=>s.value=!1)},[I(h.$slots,"filters",{},void 0,!0)],40,ue)])}}});const he=R(re,[["__scopeId","data-v-9494c8d3"]]),ve=e=>{const a=y(!1),l=y(!1),u=y(0);return{realAllChecked:l,allChecked:a,toggleAllChecked:t=>{t.target.checked?(a.value=!0,e.value.forEach(s=>{s.checked=!0})):(a.value=!1,l.value=!1,e.value.forEach(s=>{s.checked=!1}))},toggleItemChecked:t=>{t.target.checked?e.value.every(s=>s.checked)&&(a.value=!0):(a.value=!1,l.value=!1)},toggleRow:t=>{t.checked=!t.checked,t.checked?e.value.every(s=>s.checked)&&(a.value=!0):(a.value=!1,l.value=!1)},allCheckedAlertVisible:q(()=>a.value&&!l.value&&e.value.length<u.value),selectRealAll:()=>{l.value=!0},clearSelection:()=>{a.value=!1,l.value=!1,e.value.forEach(t=>{t.checked=!1})},total:u,checked:q(()=>e.value.some(t=>t.checked))}},pe=(e,a,l)=>{const{t:u}=Z();return{deleteItems:(t,s)=>{let f=s;if(!t){const _=l.value.filter(h=>h.checked);if(_.length===0){F(u("select_first"),"error");return}f=`ids:${_.map(h=>h.id).join(",")}`}z(M,{gql:e,variables:()=>({query:f}),done:a})}}};export{he as _,de as a,ie as b,pe as c,ve as u};
