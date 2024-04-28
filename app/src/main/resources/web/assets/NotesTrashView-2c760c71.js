import{c as ue,u as _e,_ as pe,a as he,b as me}from"./list-432775c2.js";import{o as n,c as a,a as e,d as ve,e as fe,r as m,u as ke,K as ge,L as be,D as $e,M as ye,N as qe,w as Ce,i as Te,R as we,p as r,j as s,F as $,m as v,l as d,k as T,H as Ve,t as c,J as G,S as De,T as Ne,U as Se,a_ as Ae,x as H,aX as Ie,C as j,W as z,a$ as Me,v as Be,I as Qe,Z as E,$ as Re,a0 as Le,a1 as Ze,aZ as Ue,a2 as Fe,ab as Ge,ac as He,ad as je,a5 as ze}from"./index-ab4fbcdc.js";import{_ as Ee}from"./Breadcrumb-f5834659.js";import{u as Ke}from"./tags-f8a61de8.js";import"./vee-validate.esm-6a882408.js";const xe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Je=e("path",{fill:"currentColor",d:"M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM7 6v13h10V6H7Zm0 0v13V6Zm4 5.85V15q0 .425.288.713T12 16q.425 0 .713-.288T13 15v-3.15l.9.875q.3.275.713.263t.687-.288q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.275.275-.275.7t.275.7q.275.275.688.288t.712-.263l.9-.875Z"},null,-1),Oe=[Je];function Pe(K,y){return n(),a("svg",xe,Oe)}const We={name:"material-symbols-restore-from-trash-outline-rounded",render:Pe},Xe={class:"v-toolbar"},Ye=e("md-ripple",null,null,-1),et=["onClick"],tt=e("md-ripple",null,null,-1),ot={class:"filters"},st=["label"],lt={class:"form-label"},nt=["label","selected","onClick"],at={class:"buttons"},ct=["onClick"],it={class:"table-responsive"},rt={class:"table"},dt=["checked","indeterminate"],ut=e("th",null,"ID",-1),_t=e("th",null,null,-1),pt=["onClick"],ht=["checked"],mt=["onClick"],vt={class:"nowrap"},ft={class:"action-btns"},kt=["onClick"],gt=e("md-ripple",null,null,-1),bt=["onClick"],$t=e("md-ripple",null,null,-1),yt={class:"nowrap"},qt={class:"nowrap"},Ct={key:0},Tt={colspan:"6"},wt={class:"no-data-placeholder"},f=50,Mt=ve({__name:"NotesTrashView",setup(K){var L,Z;const y=fe(),u=m([]),w=m(),{t:V}=ke(),i=ge({text:"",tags:[]}),x=be.NOTE,D=$e().query,k=m(parseInt(((L=D.page)==null?void 0:L.toString())??"1")),_=m(ye(((Z=D.q)==null?void 0:Z.toString())??"")),q=m(""),{tags:J}=Ke(x,_,i,async t=>{t.push({name:"trash",op:"",value:"true"}),q.value=Ne(t),await Se(),ee()}),{deleteItems:O}=ue(Ae,()=>{g(),B()},u),{allChecked:N,realAllChecked:S,selectRealAll:P,allCheckedAlertVisible:W,clearSelection:g,toggleAllChecked:A,toggleItemChecked:I,toggleRow:X,total:p,checked:M}=_e(u),{loading:Y,load:ee,refetch:B}=qe({handle:(t,l)=>{l?H(V(l),"error"):t&&(u.value=t.notes.map(C=>({...C,checked:!1})),p.value=t.noteCount)},document:Ie,variables:()=>({offset:(k.value-1)*f,limit:f,query:q.value}),appApi:!0});Ce(k,t=>{j(y,`/notes/trash?page=${t}&q=${z(_.value)}`)});function te(t){i.tags.includes(t)?Le(i.tags,l=>l.id===t.id):i.tags.push(t)}function oe(){_.value=Ze(i),Q(),w.value.dismiss()}function Q(){j(y,`/notes/trash?q=${z(_.value)}`)}const{mutate:R,onDone:se}=Te({document:Me,appApi:!0});function le(){const t=u.value.filter(l=>l.checked);if(t.length===0){H(V("select_first"),"error");return}R({query:`ids:${t.map(l=>l.id).join(",")}`})}function ne(t){Ue.push(`/notes/${t.id}`)}se(()=>{g(),B()});function ae(t){Fe(He,{id:t.id,name:t.id,gql:Ge`
      mutation DeleteNote($query: String!) {
        deleteNotes(query: $query)
      }
    `,variables:()=>({query:`ids:${t.id}`}),done:()=>{g(),p.value--},appApi:!0,typeName:"Note"})}return(t,l)=>{const C=Ee,U=je,F=We,ce=pe,ie=he,re=ze,de=me,b=we("tooltip");return n(),a($,null,[e("div",Xe,[r(C,{current:()=>`${t.$t("page_title.trash")} (${s(p)})`},null,8,["current"]),s(M)?(n(),a($,{key:0},[v((n(),a("button",{class:"icon-button",onClick:l[0]||(l[0]=d(o=>s(O)(s(S),q.value),["stop"]))},[Ye,r(U)])),[[b,t.$t("delete")]]),v((n(),a("button",{class:"icon-button",onClick:d(le,["stop"])},[tt,r(F)],8,et)),[[b,t.$t("restore")]])],64)):T("",!0),r(ce,{ref_key:"searchInputRef",ref:w,modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=o=>_.value=o),search:Q},{filters:Ve(()=>[e("div",ot,[v(e("md-outlined-text-field",{label:t.$t("keywords"),"onUpdate:modelValue":l[1]||(l[1]=o=>i.text=o),"keyup.enter":"applyAndDoSearch"},null,8,st),[[Be,i.text]]),e("label",lt,c(t.$t("tags")),1),e("md-chip-set",null,[(n(!0),a($,null,G(s(J),o=>(n(),a("md-filter-chip",{key:o.id,label:o.name,selected:i.tags.includes(o),onClick:h=>te(o)},null,8,nt))),128))]),e("div",at,[e("md-filled-button",{onClick:d(oe,["stop"])},c(t.$t("search")),9,ct)])])]),_:1},8,["modelValue"])]),r(ie,{limit:f,total:s(p),"all-checked-alert-visible":s(W),"real-all-checked":s(S),"select-real-all":s(P),"clear-selection":s(g)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),e("div",it,[e("table",rt,[e("thead",null,[e("tr",null,[e("th",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:l[3]||(l[3]=(...o)=>s(A)&&s(A)(...o)),checked:s(N),indeterminate:!s(N)&&s(M)},null,40,dt)]),ut,e("th",null,c(t.$t("title")),1),_t,e("th",null,c(t.$t("updated_at")),1),e("th",null,c(t.$t("created_at")),1)])]),e("tbody",null,[(n(!0),a($,null,G(u.value,o=>(n(),a("tr",{key:o.id,class:Qe({selected:o.checked}),onClick:d(h=>s(X)(o),["stop"])},[e("td",null,[e("md-checkbox",{"touch-target":"wrapper",onChange:l[4]||(l[4]=(...h)=>s(I)&&s(I)(...h)),checked:o.checked},null,40,ht)]),e("td",null,[r(re,{id:o.id,raw:o},null,8,["id","raw"])]),e("td",null,[e("a",{href:"#",onClick:d(h=>ne(o),["stop","prevent"])},c(o.title||t.$t("no_content")),9,mt)]),e("td",vt,[e("div",ft,[v((n(),a("button",{class:"icon-button",onClick:d(h=>ae(o),["stop"])},[gt,r(U)],8,kt)),[[b,t.$t("delete")]]),v((n(),a("button",{class:"icon-button",onClick:d(h=>s(R)({query:`ids:${o.id}`}),["stop"])},[$t,r(F)],8,bt)),[[b,t.$t("restore")]])])]),e("td",yt,c(s(E)(o.updatedAt)),1),e("td",qt,c(s(E)(o.createdAt)),1)],10,pt))),128))]),u.value.length?T("",!0):(n(),a("tfoot",Ct,[e("tr",null,[e("td",Tt,[e("div",wt,c(t.$t(s(Re)(s(Y)))),1)])])]))])]),s(p)>f?(n(),De(de,{key:0,modelValue:k.value,"onUpdate:modelValue":l[5]||(l[5]=o=>k.value=o),total:s(p),limit:f},null,8,["modelValue","total"])):T("",!0)],64)}}});export{Mt as default};