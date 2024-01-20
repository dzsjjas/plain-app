import{d as G,r as h,u as Z,an as Q,co as X,cp as Y,cq as ee,cr as se,cs as ne,ct as te,cu as oe,aZ as re,cv as N,c as A,a as b,p as M,t as g,m as E,aW as x,l as ie,j as c,n as ae,ap as le,v as ue,k as P,h as ce,F as de,cw as me,o as T,cx as fe,cy as we,_ as ve}from"./index-bb6ca50b.js";import{u as be,a as pe}from"./vee-validate.esm-def72c5f.js";function W(n){let t=n;if(typeof t>"u"){if(typeof navigator>"u"||!navigator)return"";t=navigator.userAgent||""}return t.toLowerCase()}function L(n,t){try{return new RegExp(n,"g").exec(t)}catch{return null}}function D(){if(typeof navigator>"u"||!navigator||!navigator.userAgentData)return!1;const t=navigator.userAgentData.brands;return!!(t&&t.length)}function ge(n,t){const o=L(`(${n})((?:\\/|\\s|:)([0-9|\\.|_]+))`,t);return o?o[3]:""}function $(n){return n.replace(/_/g,".")}function V(n,t){let o=null,e="-1";return n.some(r=>{const a=L(`(${r.test})((?:\\/|\\s|:)([0-9|\\.|_]+))?`,t);return!a||r.brand?!1:(o=r,e=a[3]||"-1",r.versionAlias?e=r.versionAlias:r.versionTest&&(e=ge(r.versionTest.toLowerCase(),t)||e),e=$(e),!0)}),{preset:o,version:e}}function _(n,t){const o={brand:"",version:"-1"};return n.some(e=>{const r=F(t,e);return r?(o.brand=e.id,o.version=e.versionAlias||r.version,o.version!=="-1"):!1}),o}function F(n,t){return n.find(o=>L(`${t.test}`,o.brand.toLowerCase()))}const I=[{test:"phantomjs",id:"phantomjs"},{test:"whale",id:"whale"},{test:"edgios|edge|edg",id:"edge"},{test:"msie|trident|windows phone",id:"ie",versionTest:"iemobile|msie|rv"},{test:"miuibrowser",id:"miui browser"},{test:"samsungbrowser",id:"samsung internet"},{test:"samsung",id:"samsung internet",versionTest:"version"},{test:"chrome|crios",id:"chrome"},{test:"firefox|fxios",id:"firefox"},{test:"android",id:"android browser",versionTest:"version"},{test:"safari|iphone|ipad|ipod",id:"safari",versionTest:"version"}],O=[{test:"(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",id:"chrome",versionTest:"chrome"},{test:"chromium",id:"chrome"},{test:"whale",id:"chrome",versionAlias:"-1",brand:!0}],R=[{test:"applewebkit",id:"webkit",versionTest:"applewebkit|safari"}],U=[{test:"(?=(iphone|ipad))(?!(.*version))",id:"webview"},{test:"(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",id:"webview"},{test:"webview",id:"webview"}],H=[{test:"windows phone",id:"windows phone"},{test:"windows 2000",id:"window",versionAlias:"5.0"},{test:"windows nt",id:"window"},{test:"win32|windows",id:"window"},{test:"iphone|ipad|ipod",id:"ios",versionTest:"iphone os|cpu os"},{test:"macos|macintel|mac os x",id:"mac"},{test:"android|linux armv81",id:"android"},{test:"tizen",id:"tizen"},{test:"webos|web0s",id:"webos"}];function K(n){return!!V(U,n).preset}function he(n){const t=W(n),o=!!/mobi/g.exec(t),e={name:"unknown",version:"-1",majorVersion:-1,webview:K(t),chromium:!1,chromiumVersion:"-1",webkit:!1,webkitVersion:"-1"},r={name:"unknown",version:"-1",majorVersion:-1},{preset:a,version:w}=V(I,t),{preset:s,version:l}=V(H,t),p=V(O,t);if(e.chromium=!!p.preset,e.chromiumVersion=p.version,!e.chromium){const m=V(R,t);e.webkit=!!m.preset,e.webkitVersion=m.version}return s&&(r.name=s.id,r.version=l,r.majorVersion=parseInt(l,10)),a&&(e.name=a.id,e.version=w,e.webview&&r.name==="ios"&&e.name!=="safari"&&(e.webview=!1)),e.majorVersion=parseInt(e.version,10),{browser:e,os:r,isMobile:o,isHints:!1}}function q(n){const t=navigator.userAgentData,o=[...t.brands],e=n&&n.fullVersionList,r=t.mobile||!1,a=o[0],w=(n&&n.platform||t.platform||navigator.platform).toLowerCase(),s={name:a.brand,version:a.version,majorVersion:-1,webkit:!1,webkitVersion:"-1",chromium:!1,chromiumVersion:"-1",webview:!!_(U,o).brand||K(W())},l={name:"unknown",version:"-1",majorVersion:-1};s.webkit=!s.chromium&&R.some(i=>F(o,i));const p=_(O,o);if(s.chromium=!!p.brand,s.chromiumVersion=p.version,!s.chromium){const i=_(R,o);s.webkit=!!i.brand,s.webkitVersion=i.version}const m=H.find(i=>new RegExp(`${i.test}`,"g").exec(w));if(l.name=m?m.id:"",n&&(l.version=n.platformVersion),e&&e.length){const i=_(I,e);s.name=i.brand||s.name,s.version=i.version||s.version}else{const i=_(I,o);s.name=i.brand||s.name,s.version=i.brand&&n?n.uaFullVersion:i.version}return s.webkit&&(l.name=r?"ios":"mac"),l.name==="ios"&&s.webview&&(s.version="-1"),l.version=$(l.version),s.version=$(s.version),l.majorVersion=parseInt(l.version,10),s.majorVersion=parseInt(s.version,10),{browser:s,os:l,isMobile:r,isHints:!0}}async function _e(){if(D()){const n=await navigator.userAgentData.getHighEntropyValues(["architecture","model","platform","platformVersion","uaFullVersion","fullVersionList"]);return q(n)}return Ve()}function Ve(n){return typeof n>"u"&&D()?q():he(n)}const ye={class:"header"},ke={class:"login-block"},Se=["label","error","error-text"],Ae=["disabled"],Ee={class:"tap-phone"},Te={key:0,class:"tips"},Be=G({__name:"LoginView",setup(n){const{handleSubmit:t,isSubmitting:o}=be(),e=h(!1),r=h(!0),a=h(!1),w=h("");let s;const l=window.location.protocol==="http:"?!1:!window.navigator.userAgentData,{t:p}=Z(),{value:m,errorMessage:i}=pe("password",Q().required()),B=h(!1);async function z(){const d=await fetch(`${N()}/init`,{method:"POST",headers:me()});if(d.status===403){e.value=!0,r.value=!0,w.value="web_access_disabled";return}r.value=!1;const f=await d.text();f?(m.value=f,B.value=!1):B.value=!0}z();const y=t(async()=>{const d=localStorage.getItem("client_id");s=new WebSocket(`${X()}?cid=${d}&auth=1`);const f=m.value??"",k=Y(f),v=ee(k);w.value="",e.value=!1,s.onopen=async()=>{o.value=!0;const u=await _e(),S=se(v,JSON.stringify({password:k,browserName:u.browser.name,browserVersion:u.browser.version,osName:u.os.name,osVersion:u.os.version,isMobile:u.isMobile}));s.send(ne(S))},s.onmessage=async u=>{var C;const S=te(v,oe(await u.data.arrayBuffer())),j=JSON.parse(S);j.status==="PENDING"?a.value=!0:(localStorage.setItem("auth_token",j.token),s.close(),window.location.href=((C=re.currentRoute.value.query.redirect)==null?void 0:C.toString())??"/")},s.onclose=async u=>{if(!(u.reason==="abort"||u.reason==="OK")){if(o.value=!1,e.value=!0,a.value=!1,!u.reason&&(await fetch(`${N()}/health_check`)).status===200){w.value="failed_connect_ws";return}w.value=`login.${u.reason?u.reason:"failed"}`}},window.setTimeout(function(){s.readyState!==1&&s.close(3001,"timeout")},2e3)});function J(){a.value=!1,e.value=!1,o.value=!1,s.close(3001,"abort")}return(d,f)=>{const k=we;return T(),A(de,null,[b("header",ye,[M(k,{"logged-in":!1})]),b("h1",null,g(d.$t("app_name")),1),b("div",ke,[E(b("form",{onSubmit:f[2]||(f[2]=ie((...v)=>c(y)&&c(y)(...v),["prevent"]))},[E(b("div",{class:"alert alert-danger",role:"alert"},g(w.value?d.$t(w.value):""),513),[[x,e.value]]),B.value?E((T(),A("md-outlined-text-field",{key:0,label:c(p)("password"),"onUpdate:modelValue":f[0]||(f[0]=v=>ae(m)?m.value=v:null),onKeydown:f[1]||(f[1]=le((...v)=>c(y)&&c(y)(...v),["enter"])),type:"password",class:"form-control",error:c(i),"error-text":c(i)?d.$t(c(i)):""},null,40,Se)),[[ue,c(m)]]):P("",!0),r.value?P("",!0):(T(),A("md-filled-button",{key:1,disabled:c(o)},g(d.$t(c(o)?"logging_in":"log_in")),9,Ae))],544),[[x,!a.value]]),E(b("div",null,[b("div",Ee,[M(c(fe))]),ce(" "+g(d.$t("login.to_continue"))+" ",1),b("md-outlined-button",{onClick:J},g(d.$t("cancel")),1)],512),[[x,a.value]])]),c(l)?(T(),A("div",Te,g(d.$t("browser_warning")),1)):P("",!0)],64)}}});const $e=ve(Be,[["__scopeId","data-v-0e9a2443"]]);export{$e as default};
