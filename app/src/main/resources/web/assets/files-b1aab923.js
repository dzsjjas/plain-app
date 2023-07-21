import{a_ as L,o as Q,c as S,b as C,r as i,V as T,a$ as M,ar as I,ak as _,b0 as G,i as D,b1 as R,u as F,t as k,aQ as x,aP as P,b2 as U,b3 as A,b4 as B,ay as z,S as E,b5 as H,b6 as O,s as j,a as Z,aO as J,b7 as q,b8 as g,aR as W,b9 as K,aS as X}from"./index-ab4e24e3.js";import{b as Y}from"./search-7ac721b8.js";import{b as N}from"./baseIndexOf-70b929c6.js";import{a as ee}from"./toInteger-5d5bf0cb.js";var te=Math.max;function ae(o,n,e){var t=o==null?0:o.length;if(!t)return-1;var a=e==null?0:ee(e);return a<0&&(a=te(t+a,0)),N(o,L(n),a)}const se={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ne=C("path",{fill:"currentColor",d:"M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.275-.275-.275-.7t.275-.7q.275-.275.713-.287t.712.262L11 12.15V5q0-.425.288-.713T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.275-.275.713-.263t.712.288q.275.275.275.7t-.275.7l-3.6 3.6q-.15.15-.325.213t-.375.062ZM6 20q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"},null,-1),oe=[ne];function le(o,n){return Q(),S("svg",se,oe)}const de={name:"material-symbols-download-rounded",render:le},pe=(o,n)=>{const e=i("");return{createPath:e,createVariables(t){return{path:e.value+"/"+t}},createMutation(){return T({document:M,options:{update:async(t,a)=>{const{fileIdToken:s}=o.value;for(const l of n.value)if(l.dir===e.value){const u=a.data.createDir;l.items.push({...u,name:I(u.path),fileId:await _(s,u.path)})}}},appApi:!0})}}},he=o=>{const n=i(""),e=i("");return{renameValue:n,renamePath:e,renameDone(t){const a=e.value,s=n.value;for(const l of o.value)l.rename(a,s,t)},renameMutation(){return T({document:G,appApi:!0})},renameVariables(t){return{path:e.value,name:t}}}},fe=(o,n,e)=>({onDeleted(t){for(const a of o.value)t.forEach(s=>{a.deleteItem(s.path)});t.forEach(a=>{if(n.value.startsWith(a.path)){const s=a.path.lastIndexOf("/");n.value=a.path.substring(0,s)}}),e()}}),me=()=>{const o=i(null),n=i(null),{refetch:e}=D({handle:(t,a)=>{a||(o.value=t.storageStats.internal,n.value=t.storageStats.sdcard)},document:R,appApi:!0});return{internal:o,sdcard:n,refetch:e}},ve=(o,n,e)=>{const t=i(""),a=i(n),s=i([]),{t:l}=F();let u=0,r=!1;const{loading:f}=D({handle:async(m,v)=>{if(v)k(l(v),"error");else{const{dir:b,items:y}=m.files,{fileIdToken:w}=o.value,p=[];for(const d of y){const h={...d,name:I(d.path)};(x(h.name)||P(h.name))&&(h.fileId=await _(w,d.path)),p.push(h)}const c=b.replace(n,"").split("/").length;for(;s.value.length>=c;)s.value.pop();if(s.value.push(new U(b,p)),e&&!r){const d=e.replace(n+"/","").split("/");p.length===0?r=!0:u<d.length?(a.value=n+"/"+d.slice(0,u+1).join("/"),u++):r=!0}}},document:A,variables:{dir:a,showHidden:!0},options:{fetchPolicy:"no-cache"},appApi:!0}),{refetch:$}=D({handle:async(m,v)=>{if(v)k(l(v),"error");else{const{dir:b,items:y}=m.files,{fileIdToken:w}=o.value,p=[];for(const c of y)p.push({...c,name:I(c.path),fileId:await _(w,c.path)});s.value.forEach(c=>{c.dir===b&&(c.items=p)})}t.value=""},document:A,variables:{dir:t,showHidden:!0},options:()=>({fetchPolicy:"no-cache",enabled:!!t.value}),appApi:!0});return{loading:f,panels:s,refetch(m){t.value=m,$()},currentDir:a}},ge=o=>{const{t:n}=F(),e=i([]),{loading:t}=D({handle:async(a,s)=>{if(s)k(n(s),"error");else{const l=a.recentFiles,{fileIdToken:u}=o.value;for(const r of l){const f={...r,name:I(r.path)};(x(f.name)||P(f.name))&&(f.fileId=await _(u,r.path)),e.value.push(f)}}},document:B,options:{fetchPolicy:"no-cache"},appApi:!0});return{files:e,loading:t}},Ie=o=>({async downloadFile(n,e){const{fileIdToken:t}=o.value,a=await K(t,n);e?g(a+`&dl=1&name=${e}`,e):g(a+"&dl=1",I(n))},async downloadDir(n,e){const{fileIdToken:t}=o.value,a=await _(t,n),s=`${q()}/zip/dir?id=${encodeURIComponent(a)}`;e?g(s+`&name=${e}`,e):g(s,I(n))},downloadFiles(n,e){const t=`${q()}/zip/files?id=${encodeURIComponent(n)}`;e?g(t+`&name=${e}`,e):g(t,"")}}),be=(o,n)=>({view(e,t){o.value=e.filter(s=>P(s.name)||x(s.name)||X(s.name)).map(s=>({path:s.path,src:"",name:I(s.path)}));const a=ae(o.value,s=>s.path===t.path);n(a)}}),we=(o,n,e,t)=>{const a=i(null);return{selectedItem:a,select(s,l){l.isDir?o.value=l.path:s.items.some(r=>r.path===o.value)&&s.items.some(r=>r.path===l.path)&&(o.value=s.dir);const u=[];u.push({name:"path",op:"",value:l.path}),u.push({name:"isDir",op:"",value:o.value===l.path?"1":"0"}),e.value=Y(u),a.value=l,z(t,n==="sdcard"?`/files/sdcard?q=${E(e.value)}`:`/files?q=${E(e.value)}`)}}},ye=(o,n)=>{const e=i(null),t=i(null),a=i(!1),s=i(),{mutate:l,loading:u,onDone:r,onError:f}=T({document:H,appApi:!0}),{mutate:$,loading:m,onDone:v,onError:b}=T({document:O,appApi:!0}),{t:y}=F(),w=c=>{k(y(c.message))};f(w),b(w);const p=()=>{var c;if(a.value){const d=t.value.items.findIndex(h=>h.path===e.value.path);(c=t.value)==null||c.items.splice(d,1)}e.value=null,setTimeout(()=>{o(s.value),n()},500)};return r(p),v(p),{loading:u||m,canPaste(){return!!e.value},copy(c){e.value=c,a.value=!1},cut(c,d){e.value=d,t.value=c,a.value=!0},paste(c){var h,V;s.value=c;const d={src:(h=e.value)==null?void 0:h.path,dst:c+"/"+((V=e.value)==null?void 0:V.name),overwrite:!1};a.value?$(d):l(d)}}},Te=()=>{const{uploads:o}=j(Z()),n=i(""),e=i();return{input:e,upload(t){n.value=t,e.value.value="",e.value.click()},uploadChanged(t){const a=t.target.files;if(!a)return;const s=[];for(let l=0;l<a.length;l++){const u=a[l];s.push({dir:n.value,file:u,status:"created",uploadedSize:0,error:""})}o.value=[...o.value,...s]}}},_e=(o,n)=>{const{t:e}=F(),{mutate:t,onDone:a}=T({document:J,appApi:!0});return a(s=>{const l=`${q()}/zip/files?id=${encodeURIComponent(s.data.setTempValue.key)}&name=${n}`;g(l,n),o.value.forEach(u=>{u.checked=!1})}),{downloadItems:()=>{const s=o.value.filter(u=>u.checked);if(s.length===0){k(e("select_first"),"error");return}const l=[];s.forEach(u=>{n==="apps.zip"?l.push({path:u.path,name:`${u.name.replace(" ","")}-${u.id}.apk`}):l.push({path:u.path})}),t({key:W(),value:JSON.stringify(l)})}}};export{de as _,_e as a,Ie as b,ve as c,pe as d,he as e,me as f,we as g,ye as h,fe as i,be as j,ge as k,Te as u};