import{d as W,u as X,r as b,f as j,s as q,bq as H,i as P,aC as Q,R as Z,c as a,a as l,p as V,m as Y,l as F,k as i,h as m,t as d,j as o,F as w,J as ee,al as te,bg as se,o as n,I as oe,bh as ae,bi as ne,ax as le,Z as ce,z as ie,$ as de,A as re,B as ue,bk as pe,bm as R,ah as S,bn as g,aH as _e,am as he,bp as me,_ as ke}from"./index-f62f2ff2.js";import{_ as ve}from"./Breadcrumb-ebe74d39.js";const be=p=>(re("data-v-e2791d49"),p=p(),ue(),p),we={class:"v-toolbar"},ge={class:"right-actions"},ye=["onClick"],fe=be(()=>l("md-ripple",null,null,-1)),Ce={class:"form-check-label"},Ie=["checked"],De={class:"panel-container"},Te={key:0,class:"file-items"},Ve=["onClick","onDblclick","onContextmenu"],Fe=["checked"],Re=["src"],Se={class:"title"},Ee={style:{"font-size":"0.75rem"}},xe={key:1,class:"no-data-placeholder"},$e={key:0,class:"file-item-info"},Ae=W({__name:"FilesRecentView",setup(p){const{t:k}=X(),E=b([]),u=b(!1),y=j(),{app:f,urlTokenKey:_}=q(y),{loading:x,files:r}=H(_),{downloadFile:C,downloadDir:$,downloadFiles:A}=te(_),{view:I}=me(E,(e,t)=>{y.lightbox={sources:e,index:t,visible:!0}}),h=b(null),{mutate:N,onDone:B}=P({document:se,appApi:!0});B(e=>{A(e.data.setTempValue.key),r.value.forEach(t=>{t.checked=!1})});const D=()=>{const e=[];return r.value.forEach(t=>{t.checked&&e.push({path:t.path})}),e};function z(e){u.value=e.target.checked}const M=()=>{N({key:pe(),value:JSON.stringify(D())})},L=Q(()=>D().length>0);function O(e){if(u.value){e.checked=!e.checked;return}h.value=e}function U(e){R(e.name)?window.open(S(_.value,e.path),"_blank"):g(e.name)?I(r.value,e):C(e.path)}function G(e,t){e.preventDefault();let c;t.isDir?c=[{label:k("download"),onClick:()=>{$(t.path)}}]:(c=[],(R(t.name)||g(t.name))&&c.push({label:k("open"),onClick:()=>{g(t.name)?I(r.value,t):window.open(S(_.value,t.path),"_blank")}}),c.push({label:k("download"),onClick:()=>{C(t.path)}})),_e({x:e.x,y:e.y,items:c})}return(e,t)=>{const c=ve,J=he,K=Z("tooltip");return n(),a(w,null,[l("div",we,[V(c,{current:e.$t("recent_files")},null,8,["current"]),l("div",ge,[u.value&&L.value?Y((n(),a("button",{key:0,class:"icon-button",onClick:F(M,["stop"])},[fe,V(J)],8,ye)),[[K,e.$t("download")]]):i("",!0),l("label",Ce,[l("md-checkbox",{"touch-target":"wrapper",onChange:z,checked:u.value},null,40,Ie),m(d(e.$t("select_mode")),1)])])]),l("div",De,[o(f).permissions.includes("WRITE_EXTERNAL_STORAGE")?(n(),a("div",Te,[(n(!0),a(w,null,ee(o(r),s=>{var T;return n(),a("div",{key:s.path,class:oe(["file-item",{active:((T=h.value)==null?void 0:T.path)===s.path}]),onClick:v=>O(s),onDblclick:F(v=>U(s),["prevent"]),onContextmenu:v=>G(v,s)},[u.value?(n(),a("md-checkbox",{key:0,"touch-target":"wrapper",checked:s.checked},null,8,Fe)):i("",!0),o(ae)(s.name)||o(ne)(s.name)?(n(),a("img",{key:1,src:o(le)(s.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Re)):i("",!0),l("div",Se,[m(d(s.name)+" ",1),l("div",Ee,[m(d(o(ce)(s.updatedAt)),1),s.isDir?i("",!0):(n(),a(w,{key:0},[m(", "+d(o(ie)(s.size)),1)],64))])])],42,Ve)}),128))])):i("",!0),o(r).length===0?(n(),a("div",xe,d(e.$t(o(de)(o(x),o(f).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):i("",!0)]),h.value?(n(),a("div",$e,d(e.$t("path"))+": "+d(h.value.path),1)):i("",!0)],64)}}});const ze=ke(Ae,[["__scopeId","data-v-e2791d49"]]);export{ze as default};