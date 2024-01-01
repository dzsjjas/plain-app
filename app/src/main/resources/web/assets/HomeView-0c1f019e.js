import{b as j,o as d,c,a as e,d as A,u as D,e as L,s as N,f as Q,r as k,g as Z,i as z,w as E,h as G,j as u,t as o,k as r,l as _,m as a,F as B,n as R,v as U,p as J,q as K,x as O,y as W,z as X,A as H,B as Y,C as x,D as ee,_ as te}from"./index-2583f876.js";import{u as se,a as oe}from"./vee-validate.esm-b0601c3b.js";function ne(i,v){for(var p,h=-1,g=i.length;++h<g;){var m=v(i[h]);m!==void 0&&(p=p===void 0?m:p+m)}return p}function M(i,v){return i&&i.length?ne(i,j(v)):0}const ae={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},le=e("path",{fill:"currentColor",d:"M12 5q.425 0 .713-.288T13 4q0-.425-.288-.713T12 3q-.425 0-.713.288T11 4q0 .425.288.713T12 5ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h4.175q.275-.875 1.075-1.438T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5h-2v1q0 .825-.588 1.413T15 8H9q-.825 0-1.413-.588T7 6V5H5v14Z"},null,-1),ie=[le];function re(i,v){return d(),c("svg",ae,ie)}const de={name:"material-symbols-content-paste-rounded",render:re},ce=i=>(Y("data-v-0185b35f"),i=i(),x(),i),ue={class:"page-container"},ve={class:"main"},pe={class:"grid"},me={class:"g-col-lg-6 g-col-md-12"},fe={class:"card"},_e={class:"card-body"},he={class:"card-title"},ge={key:0,class:"total-bytes"},$e={class:"stats-items"},be={class:"g-col-lg-6 g-col-md-12"},ke={class:"card"},Ce={class:"card-body"},ye={class:"card-title"},Te={class:"stats-items"},we={class:"g-col-lg-6 g-col-md-12"},Se={class:"card"},qe={class:"card-body"},Be={class:"card-title"},Ve={class:"stats-items"},Ne={class:"g-col-lg-6 g-col-md-12"},He={class:"card"},Me={class:"card-body"},Ie={class:"card-title"},Fe={class:"stats-items"},Pe={class:"g-col-lg-6 g-col-md-12"},je={class:"card"},Ae={class:"card-body"},De={class:"card-title"},Le={class:"form-row"},Qe=["label","error","error-text"],Ze=["onClick"],ze=ce(()=>e("md-ripple",null,null,-1)),Ee=["disabled"],Ge=A({__name:"HomeView",setup(i){const{t:v}=D(),{handleSubmit:p}=se(),h=L(),{callNumber:g}=N(h),{app:m}=N(Q()),y=k(-1),T=k(-1),w=k(-1),$=k(-1),C=k(-1),{value:f,errorMessage:S}=oe("callNumber",Z().required());f.value=g.value??"";function I(){navigator.clipboard.readText().then(t=>{f.value=t})}const{mutate:F,loading:P}=z({document:O,appApi:!0});E(()=>f.value,t=>{g.value=t});const V=p(()=>{F({number:g.value})});G({handle:(t,s)=>{if(s)W(v(s),"error");else if(t){y.value=t.messageCount,T.value=t.contactCount,w.value=t.callCount,$.value=t.storageStats.internal.totalBytes,C.value=t.storageStats.internal.freeBytes;const b=t.storageStats.sdcard;b&&($.value+=b.totalBytes,C.value+=b.freeBytes);const n=t.storageStats.usb;n.length&&($.value+=M(n,q=>q.totalBytes),C.value+=M(n,q=>q.freeBytes))}},document:X,variables:null,appApi:!0});function l(t){ee(h,t)}return(t,s)=>{const b=de;return d(),c("div",ue,[e("div",ve,[e("div",pe,[e("div",me,[e("section",fe,[e("div",_e,[e("h5",he,[u(o(t.$t("storage")),1),$.value>=0?(d(),c("span",ge,o(t.$t("storage_free_total",{free:r(H)(C.value),total:r(H)($.value)})),1)):_("",!0)]),e("p",$e,[e("a",{href:"#",onClick:s[0]||(s[0]=a(n=>l("/images"),["prevent"]))},o(t.$t("images")),1),e("a",{href:"#",onClick:s[1]||(s[1]=a(n=>l("/audios"),["prevent"]))},o(t.$t("audios")),1),e("a",{href:"#",onClick:s[2]||(s[2]=a(n=>l("/videos"),["prevent"]))},o(t.$t("videos")),1),e("a",{href:"#",onClick:s[3]||(s[3]=a(n=>l("/files"),["prevent"]))},o(t.$t("files")),1),e("a",{href:"#",onClick:s[4]||(s[4]=a(n=>l("/apps"),["prevent"]))},o(t.$t("apps")),1)])])])]),e("div",be,[e("section",ke,[e("div",Ce,[e("h5",ye,o(t.$t("work")),1),e("p",Te,[e("a",{href:"#",onClick:s[5]||(s[5]=a(n=>l("/notes"),["prevent"]))},o(t.$t("page_title.notes")),1),e("a",{style:{display:"none"},href:"#",onClick:s[6]||(s[6]=a(n=>l("/books"),["prevent"]))},o(t.$t("page_title.books")),1),e("a",{href:"#",onClick:s[7]||(s[7]=a(n=>l("/feeds"),["prevent"]))},o(t.$t("page_title.feeds")),1),e("a",{href:"#",onClick:s[8]||(s[8]=a(n=>l("/aichats"),["prevent"]))},o(t.$t("page_title.aichats")),1)])])])]),e("div",we,[e("section",Se,[e("div",qe,[e("h5",Be,o(t.$t("social")),1),e("p",Ve,[r(m).allowSensitivePermissions?(d(),c("a",{key:0,href:"#",onClick:s[9]||(s[9]=a(n=>l("/messages"),["prevent"]))},[u(o(t.$t("messages")),1),y.value>=0?(d(),c(B,{key:0},[u("("+o(y.value)+")",1)],64)):_("",!0)])):_("",!0),e("a",{href:"#",onClick:s[10]||(s[10]=a(n=>l("/contacts"),["prevent"]))},[u(o(t.$t("contacts")),1),T.value>=0?(d(),c(B,{key:0},[u("("+o(T.value)+")",1)],64)):_("",!0)]),r(m).allowSensitivePermissions?(d(),c("a",{key:1,href:"#",onClick:s[11]||(s[11]=a(n=>l("/calls"),["prevent"]))},[u(o(t.$t("calls")),1),w.value>=0?(d(),c(B,{key:0},[u("("+o(w.value)+")",1)],64)):_("",!0)])):_("",!0)])])])]),e("div",Ne,[e("section",He,[e("div",Me,[e("h5",Ie,o(t.$t("tools")),1),e("p",Fe,[e("a",{href:"#",onClick:s[12]||(s[12]=a(n=>l("/json-viewer"),["prevent"]))},o(t.$t("json_viewer")),1),e("a",{href:"#",onClick:s[13]||(s[13]=a(n=>l("/qrcode-generator"),["prevent"]))},o(t.$t("qrcode_generator")),1),e("a",{href:"#",onClick:s[14]||(s[14]=a(n=>l("/screen-mirror"),["prevent"]))},o(t.$t("screen_mirror")),1),e("a",{href:"#",onClick:s[15]||(s[15]=a(n=>l("/device-info"),["prevent"]))},o(t.$t("device_info")),1)])])])]),e("div",Pe,[e("section",je,[e("div",Ae,[e("h5",De,o(t.$t("call_phone")),1),e("p",Le,[R(e("md-outlined-text-field",{type:"tel",label:t.$t("phone_number"),class:"form-control flex-3","onUpdate:modelValue":s[16]||(s[16]=n=>J(f)?f.value=n:null),error:r(S),"error-text":r(S)?t.$t(r(S)):""},[e("button",{class:"icon-button",slot:"trailing-icon",onClick:a(I,["prevent"])},[ze,K(b)],8,Ze)],8,Qe),[[U,r(f)]]),e("md-filled-button",{class:"btn-lg",onClick:s[17]||(s[17]=a((...n)=>r(V)&&r(V)(...n),["prevent"])),disabled:r(P)},o(t.$t("call")),9,Ee)])])])])])])])}}});const Je=te(Ge,[["__scopeId","data-v-0185b35f"]]);export{Je as default};
