"use strict";(self.webpackChunkw5_tools=self.webpackChunkw5_tools||[]).push([[74],{6922:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(65957),r=n(52160),a=n(46004),l=n(5355),c=n(78894),i=n(38576),o=n(93883),h=n(85125),d=n(9950),u=n(8352);const m="RequestAddCourseModal_button__fKFK+";var g=n(44414);const x=()=>{const[e,t]=(0,d.useState)(!1),[n,x]=(0,d.useState)(!1),[p,j]=(0,d.useState)(!1),y=(0,h.Wx)({initialValues:{key:"",name:"",weight:1},onSubmit:async e=>{x(!0);try{const n=await u.A.post("courses/request-add-course",{...e});s.Ay.success(n.data.message),t(!1)}catch(n){s.Ay.error(n.response.data.message),j(!0)}x(!1)},validate:e=>{const t={};return e.key||(t.key="M\xe3 h\u1ecdc ph\u1ea7n l\xe0 b\u1eaft bu\u1ed9c"),t}}),v=()=>t(!e);return(0,d.useEffect)((()=>{j(!1)}),[y.values.key]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(r.Ay,{type:"link",block:!0,onClick:v,className:m,children:["Kh\xf4ng c\xf3 h\u1ecdc ph\u1ea7n b\u1ea1n \u0111ang t\xecm?",(0,g.jsx)("br",{})," B\u1ea5m v\xe0o \u0111\xe2y \u0111\u1ec3 th\xeam nh\xe9."]}),(0,g.jsx)(o.A,{confirmLoading:n,title:"Y\xeau c\u1ea7u b\u1ed5 sung th\xeam h\u1ecdc ph\u1ea7n",open:e,centered:!0,cancelText:"H\u1ee7y",okText:"Y\xeau c\u1ea7u",okType:p?"danger":"primary",onCancel:v,onOk:y.handleSubmit,afterClose:()=>{y.resetForm()},children:(0,g.jsx)("form",{onSubmit:y.handleSubmit,children:(0,g.jsxs)(a.A,{direction:"vertical",style:{width:"100%"},children:[(0,g.jsx)(l.A,{autoFocus:!0,placeholder:"M\xe3 h\u1ecdc ph\u1ea7n",value:y.values.key,name:"key",onChange:y.handleChange,onKeyDown:e=>"Enter"===e.code&&y.handleSubmit(),status:y.errors.key||p?"error":"",required:!0}),(0,g.jsx)(c.A,{style:{color:"red"},children:y.errors.key}),(0,g.jsx)(l.A,{placeholder:"T\xean h\u1ecdc ph\u1ea7n (T\xf9y ch\u1ecdn)",value:y.values.name,name:"name",onChange:y.handleChange}),(0,g.jsx)(i.A,{style:{width:"100%"},placeholder:"S\u1ed1 t\xedn ch\u1ec9 (T\xf9y ch\u1ecdn)",value:y.values.weight,onChange:y.handleChange,name:"weight",type:"number"})]})})})]})}},95400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var s=n(87094),r=n(41988),a=n(64571),l=n(52160),c=n(65455),i=n(78894),o=n(36021),h=n(29796),d=n(37891),u=n(72772),m=n(17334),g=n(96521),x=n(11007),p=n(9950);const j=n.p+"static/media/cry.87d06e6fbde37f6c6004.jpg",y=n.p+"static/media/icon-384x384.ea190347b575e40c990a.png";var v=n(65957),f=n(8352),A=n(44414);const b=(0,p.createContext)({yearList:[{year:"",value:"",semester:[]}],year:"",semester:"",setYear:Function,setSemester:Function,courses:[],addCourse:Function,deleteCourse:Function,activeGroups:Function,synced:!1,selectedPage:1,changePage:Function}),k=e=>{let{children:t}=e;const[n,s]=(0,p.useState)([]),[r,a]=(0,p.useState)(localStorage.getItem("year")),[l,c]=(0,p.useState)(localStorage.getItem("semester")),[i,o]=(0,p.useState)((()=>JSON.parse(localStorage.getItem("timetable-courses")||"[]")||[])),[h,d]=(0,p.useState)(!1),[u,m]=(0,p.useState)((()=>JSON.parse(localStorage.getItem("timetable-selected-page"))||1));(0,p.useEffect)((()=>{f.A.get("courses/yearlist").then((e=>{let{data:t}=e;t&&(s(t),a(localStorage.getItem("year")||t.find((e=>e.value.startsWith((new Date).getFullYear()||localStorage.getItem("year")))).value),c(localStorage.getItem("semester")||1))}))}),[]);return(0,p.useEffect)((()=>{localStorage.setItem("timetable-courses",JSON.stringify(i))}),[i]),(0,p.useEffect)((()=>{if(!r||!l)return;(async()=>{d(!1);try{for(const t of i){var e;const n=await f.A.get(`/courses/key/${t.detail.key}`,{params:{y:r,n:l}});null!==(e=n.data)&&void 0!==e&&e.length&&(t.groups=n.data)}o([...i])}catch(t){}finally{d(!0)}})()}),[r,l]),(0,A.jsx)(b.Provider,{value:{yearList:n,year:r,semester:l,setYear:e=>{a(e),localStorage.setItem("year",e)},setSemester:e=>{c(e),localStorage.setItem("semester",e)},courses:i,addCourse:async e=>{if(i.some((t=>t.detail.key===e.key)))return v.Ay.warning("H\u1ecdc ph\u1ea7n n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam t\u1eeb tr\u01b0\u1edbc");const t=v.Ay.loading("\u0110ang l\u1ea5y d\u1eef li\u1ec7u h\u1ecdc ph\u1ea7n",0);try{const t=(await f.A.get(`courses/key/${e.key}`,{params:{y:r,n:l}})).data;o((n=>[...n,{detail:e,groups:t,actives:[]}]))}finally{t()}},deleteCourse:e=>{o((t=>t.filter((t=>t.detail.key!==e))))},activeGroups:(e,t)=>{o((n=>n=n.map((n=>(n.detail.key===e&&(n.actives=t),n)))))},synced:h,selectedPage:u,changePage:e=>{m(e),localStorage.setItem("timetable-selected-page",JSON.stringify(e))}},children:t})};var S=n(77953),C=n(73149),T=n(75376),w=n(25524);const I=()=>{const{courses:e,deleteCourse:t,activeGroups:n,synced:s}=(0,p.useContext)(b),r=[{title:"M\xe3 h\u1ecdc ph\u1ea7n",dataIndex:"detail",key:"key",render:e=>e.key},{title:"T\xean h\u1ecdc ph\u1ea7n",dataIndex:"detail",key:"name",render:e=>e.name},{title:"Ch\u1ecdn nh\xf3m",dataIndex:"groups",key:"select",render:(e,t)=>(0,A.jsx)(S.A,{loading:!s,size:"small",mode:"multiple",style:{width:150},value:t.actives,placeholder:"Ch\u1ecdn nh\xf3m (t\u1ea5t c\u1ea3)",onChange:e=>{n(t.detail.key,e)},children:null===e||void 0===e?void 0:e.map((e=>(0,A.jsxs)(S.A.Option,{value:e.class,children:["Nh\xf3m ",e.id," ",(0,A.jsx)("br",{})," Th\u1ee9:"," ",e.time.map((e=>{let{day:t}=e;return t})).join(", ")]},e.class)))})},{title:"X\xf3a",dataIndex:"detail",key:"delete",render:e=>{let{key:n}=e;return(0,A.jsx)(C.A,{title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a h\u1ecdc ph\u1ea7n n\xe0y?",okText:"X\xf3a",okType:"danger",cancelText:"H\u1ee7y",onConfirm:()=>{t(n)},children:(0,A.jsx)(l.Ay,{size:"small",danger:!0,children:"X\xf3a"})})}}],a=e||[];return(0,A.jsxs)("div",{style:{overflow:"auto"},children:[(0,A.jsx)(i.A.Title,{level:4,children:"Danh s\xe1ch h\u1ecdc ph\u1ea7n"}),!s&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(T.A,{})," ",(0,A.jsx)(i.A.Text,{children:"\u0110ang \u0111\u1ed3ng b\u1ed9 d\u1eef li\u1ec7u"})]}),(0,A.jsx)(w.A,{columns:r,dataSource:a,pagination:{hideOnSinglePage:!0}})]})};var _=n(45784);function N(e,t){let n=!1;for(const s of t)for(const t of e.time)for(const e of s.time){const s=t.start,r=e.start,a=t.end,l=e.end;s>=r&&s<=l&&(n=!0),r>=s&&r<=a&&(n=!0)}return n}var F=n(92864),P=n(45418),E=n.n(P);var O=n(40841),H=n(55829),B=n(66466),G=n(12761);const J=e=>{let{groups:t}=e;const{year:n,semester:s}=(0,p.useContext)(b),[r,a]=(0,p.useState)(!1),i={year:`${null===n||void 0===n?void 0:n.slice(4)}${s}`,courses:t.map((e=>({...e,classId:e.id})))},o=()=>a(!r);let h;return window.prettier&&(h=window.prettier.format(JSON.stringify(i),{parser:"json",plugins:window.prettierPlugins,useTabs:!0,tabWidth:4,printWidth:40})),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(u.m,{children:[(0,A.jsx)("script",{src:"https://unpkg.com/prettier@2.7.1/standalone.js"}),(0,A.jsx)("script",{src:"https://unpkg.com/prettier@2.7.1/parser-babel.js"})]}),(0,A.jsx)(l.Ay,{onClick:o,icon:(0,A.jsx)(O.A,{}),children:"Xu\u1ea5t JSON"}),(0,A.jsxs)(c.A,{open:r,onCancel:o,onOk:o,width:1e3,children:[(0,A.jsx)("div",{style:{padding:20}}),(0,A.jsx)(B.Ay,{theme:G.f$,value:h,extensions:[(0,H.Pq)()],readOnly:!0})]})]})},M="GroupTable_table__j-tMU",q="GroupTable_leftCol__H1ryo",L="GroupTable_cell__1vTiU",Y="GroupTable_copy__pPCiV",z="GroupTable_title__J30Dg",D="GroupTable_divider__t6fhs",U="GroupTable_tableWrap__knblJ",X=e=>{var t;let{cell:n,rIndex:s}=e;const r=(0,p.useRef)();return n?n.time.start!==s+1?(0,A.jsx)(A.Fragment,{}):(0,A.jsx)("td",{rowSpan:n.time.count.length,className:L,ref:r,children:(0,A.jsx)("div",{style:{minHeight:null===(t=r.current)||void 0===t?void 0:t.offsetHeight},children:(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{children:(0,A.jsx)("strong",{children:n.name})}),(0,A.jsx)("p",{children:(0,A.jsx)("strong",{children:n.key})}),(0,A.jsxs)("p",{children:["Nh\xf3m: ",(0,A.jsx)("strong",{children:n.id})]}),(0,A.jsxs)("p",{children:["L\u1edbp h\u1ecdc ph\u1ea7n: ",(0,A.jsx)("strong",{children:n.class})]}),(0,A.jsxs)("p",{children:["Ph\xf2ng: ",(0,A.jsx)("strong",{children:n.time.room})]}),(0,A.jsxs)("p",{children:["S\u1ec9 s\u1ed1: ",(0,A.jsx)("strong",{children:n.member})]}),(0,A.jsxs)("p",{children:["C\xf2n l\u1ea1i: ",(0,A.jsx)("strong",{children:n.available})]})]})})}):(0,A.jsx)("td",{})},$=e=>{let{timeTable:t=[]}=e;const{courses:n}=(0,p.useContext)(b),s=(0,p.useCallback)((()=>(0,A.jsx)(l.Ay,{icon:(0,A.jsx)(F.A,{}),children:"In"})),[]);t=t.map(((e,t)=>-1===e?null:n[t].groups[e])).filter((e=>e));const r=(0,p.useRef)(),a=[{},{},{},{},{},{},{},{},{},{},{},{},{},{}];return t.forEach((e=>{e=function(e){return(e=JSON.parse(JSON.stringify(e))).time=e.time.map((e=>{e.start=parseInt(e.start),e.count=parseInt(e.count),e.day=parseInt(e.day);const t=[],n=[];for(let s=0;s<e.count;s++)t.push(s+e.start),n.push({x:s+e.start-1,y:e.day-1});return e.count=t,e.matrix=n,e})),e}(e),e.time.forEach((t=>{t.matrix.forEach((n=>{a[n.x][n.y]={...e,time:t}}))}))})),(0,A.jsxs)("div",{style:{overflowX:"auto"},id:"timetable-main",children:[(0,A.jsxs)("div",{style:{padding:"10px 0"},children:[(0,A.jsx)(E(),{trigger:s,content:()=>r.current,documentTitle:"Th\u1eddi kh\xf3a bi\u1ec3u - tools.w5team.com"}),(0,A.jsx)(J,{groups:t})]}),(0,A.jsxs)("div",{className:U,ref:r,children:[(0,A.jsxs)("div",{className:Y,children:["\xa9 ",(new Date).getFullYear()," ",(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"//tools.w5team.com",children:"tools.w5team.com"})," ","All rights reserved ",(0,A.jsx)("br",{}),"Dev by"," ",(0,A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"//thangved.w5team.com",children:"Minh Th\u1eafng"})]}),(0,A.jsx)("div",{className:z,children:(0,A.jsx)(i.A.Title,{level:1,style:{textAlign:"center"},children:"Th\u1eddi kh\xf3a bi\u1ec3u"})}),(0,A.jsxs)("table",{className:M,children:[(0,A.jsx)("thead",{children:(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{className:q,children:"Ti\u1ebft"}),(0,A.jsx)("th",{children:"Th\u1ee9 2"}),(0,A.jsx)("th",{children:"Th\u1ee9 3"}),(0,A.jsx)("th",{children:"Th\u1ee9 4"}),(0,A.jsx)("th",{children:"Th\u1ee9 5"}),(0,A.jsx)("th",{children:"Th\u1ee9 6"}),(0,A.jsx)("th",{children:"Th\u1ee9 7"})]})}),(0,A.jsx)("tbody",{children:a.map(((e,t)=>(0,A.jsxs)(p.Fragment,{children:[(0,A.jsxs)("tr",{children:[(0,A.jsx)("td",{className:q,children:t+1}),(0,A.jsx)(X,{cell:e[1],rIndex:t}),(0,A.jsx)(X,{cell:e[2],rIndex:t}),(0,A.jsx)(X,{cell:e[3],rIndex:t}),(0,A.jsx)(X,{cell:e[4],rIndex:t}),(0,A.jsx)(X,{cell:e[5],rIndex:t}),(0,A.jsx)(X,{cell:e[6],rIndex:t})]}),4===t&&(0,A.jsx)("tr",{className:D,children:(0,A.jsx)("td",{colSpan:7,children:"Chi\u1ec1u"})}),8===t&&(0,A.jsx)("tr",{className:D,children:(0,A.jsx)("td",{colSpan:7,children:"T\u1ed1i"})})]},t)))})]})]})]})},R=()=>{const{courses:e,changePage:t,selectedPage:n}=(0,p.useContext)(b),s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e.length)return[];let t=e[0].groups.map(((e,t)=>[e,t])).filter((t=>{let[n]=t;return e[0].actives.includes(n.class)||!e[0].actives.length})).map((e=>{let[t,n]=e;return[n]})),n=[];for(const s of e.slice(1)){n=[];for(const r of t){if(!s.groups.length){n.push([...r,-1]);continue}const t=r.map(((t,n)=>e[n].groups[t])).filter((e=>e));for(let e=0;e<s.groups.length;e++){const a=s.groups[e];s.actives.length&&!s.actives.includes(a.class)||N(a,t)||n.push([...r,e])}}t=n}return t}(e);return(0,A.jsxs)("div",{children:[(0,A.jsxs)(i.A.Title,{level:4,children:["B\u1ea1n c\xf3 ",s.length," th\u1eddi kh\xf3a bi\u1ec3u ph\xf9 h\u1ee3p"]}),(0,A.jsx)(_.A,{total:s.length,pageSize:1,current:n,onChange:e=>t(e)}),s[n-1]&&(0,A.jsx)($,{timeTable:s[n-1]})]})};var W=n(23561),K=n(5355),V=n(35398),Q=n(95035),Z=n(6922);const ee=e=>{const[t,n]=(0,p.useState)();return(0,p.useEffect)((()=>{const t=setTimeout((()=>{n(e)}),500);return()=>clearTimeout(t)}),[e]),t},te=[{title:"Ch\u1ecdn n\u0103m h\u1ecdc - h\u1ecdc k\u1ef3",description:"Nh\u1ea5n v\xe0o \u0111\xe2y v\xe0 ch\u1ecdn n\u0103m h\u1ecdc",target:()=>document.getElementById("select-year")},{title:"Ch\u1ecdn n\u0103m h\u1ecdc - h\u1ecdc k\u1ef3",description:"Nh\u1ea5n v\xe0o \u0111\xe2y v\xe0 ch\u1ecdn h\u1ecdc k\u1ef3",target:()=>document.getElementById("select-semester")},{title:"T\xecm ki\u1ebfm h\u1ecdc ph\u1ea7n",description:"Nh\u1eadp t\xean ho\u1eb7c m\xe3 h\u1ecdc ph\u1ea7n r\u1ed3i \u0111\u1ee3i ch\xfat l\xe0 c\xf3 k\u1ebft qu\u1ea3",target:()=>(document.getElementById("search-container").focus(),document.getElementById("search-container"))},{title:"Ho\xe0n th\xe0nh",description:"V\u1eady l\xe0 b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh vi\u1ec7c th\xeam m\u1ed9t nh\xf3m h\u1ecdc ph\u1ea7n v\xe0o th\u1eddi kh\xf3a bi\u1ec3u, ch\xfac b\u1ea1n kh\xf4ng h\u1ed1i h\u1eadn v\u1edbi l\u1ef1a ch\u1ecdn n\xe0y : ))",target:()=>document.getElementById("timetable-main")}],ne=()=>{var e;const{yearList:t,year:n,semester:s,setYear:r,setSemester:a,addCourse:c}=(0,p.useContext)(b),[i,o]=(0,p.useState)([]),[h,d]=(0,p.useState)(""),[u,m]=(0,p.useState)(!1),[g,x]=(0,p.useState)(!1),j=ee(h);(0,p.useEffect)((()=>{if(!j)return;(async()=>{const e=v.Ay.loading("\u0110ang t\xecm ki\u1ebfm h\u1ecdc ph\u1ea7n",0);try{const e=await f.A.get(`courses/search/${j}`);o(e.data)}catch(t){}finally{m(!0),e()}})()}),[j]);const y=(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(S.A,{placeholder:"N\u0103m h\u1ecdc",value:n,loading:!t.length,id:"select-year",onChange:r,children:t.map((e=>(0,A.jsx)(S.A.Option,{value:e.value,children:e.year},e.value)))}),(0,A.jsx)(S.A,{placeholder:"H\u1ecdc k\u1ef3",value:s,loading:!t.length,id:"select-semester",onChange:a,children:null===(e=t.filter((e=>e.value===n))[0])||void 0===e?void 0:e.semester.map((e=>(0,A.jsx)(S.A.Option,{value:e,children:e},e)))})]});return(0,A.jsxs)(W.A,{style:{width:"100%",padding:10},children:[(0,A.jsx)(l.Ay,{style:{marginBottom:5},size:"small",type:"primary",onClick:()=>x(!g),children:"H\u01b0\u1edbng d\u1eabn"}),(0,A.jsx)(W.A.Item,{style:{width:"100%"},children:(0,A.jsx)(K.A.Group,{children:(0,A.jsx)(K.A,{id:"search-container",autoFocus:!0,addonBefore:y,value:h,placeholder:"Nh\u1eadp t\xean ho\u1eb7c m\xe3 h\u1ecdc ph\u1ea7n",style:{width:"100%"},onChange:e=>d(e.target.value)})})}),(0,A.jsx)(W.A.Item,{children:(0,A.jsx)(V.A,{id:"course-list",pagination:{pageSize:9,hideOnSinglePage:!0},dataSource:i,renderItem:e=>(0,A.jsx)(V.A.Item,{actions:[(0,A.jsx)(l.Ay,{type:"link",onClick:()=>c(e),children:"Th\xeam"})],children:(0,A.jsx)(V.A.Item.Meta,{title:e.name,description:e.key})})})}),u&&(0,A.jsx)(Z.A,{}),(0,A.jsx)(Q.A,{open:g,steps:te,onClose:()=>x(!1)})]})},se=()=>{const[e,t]=(0,p.useState)(!1);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(k,{children:[(0,A.jsx)(u.m,{children:(0,A.jsx)("title",{children:"C\xf4ng c\u1ee5 s\u1eafp th\u1eddi kh\xf3a bi\u1ec3u | w5 tools"})}),(0,A.jsxs)(s.A,{style:{overflow:"hidden"},children:[(0,A.jsx)(r.A,{lg:24,md:24,xs:24,style:{padding:5},children:(0,A.jsx)(a.A,{type:"error",icon:(0,A.jsx)(m.A,{}),showIcon:!0,message:"Th\xf4ng b\xe1o quan tr\u1ecdng",onClick:()=>t(!1),action:(0,A.jsx)(l.Ay,{type:"primary",danger:!0,children:"Xem"})})}),(0,A.jsx)(r.A,{lg:8,md:8,xs:24,children:(0,A.jsx)(ne,{})}),(0,A.jsxs)(r.A,{lg:16,md:16,xs:24,style:{overflow:"hidden"},children:[(0,A.jsx)(I,{}),(0,A.jsx)(R,{})]})]})]}),(0,A.jsxs)(c.A,{title:"Th\xf4ng b\xe1o quan tr\u1ecdng",centered:!0,closable:!1,open:!e,footer:!1,onCancel:()=>t(!0),children:[(0,A.jsx)(i.A.Title,{level:3,type:"danger",children:"Hi\u1ec7n t\u1ea1i c\xf4ng c\u1ee5 n\xe0y kh\xf4ng kh\u1ea3 d\u1ee5ng!"}),(0,A.jsx)(i.A.Paragraph,{children:"V\xec m\u1ed9t s\u1ed1 l\xfd do n\xean hi\u1ec7n t\u1ea1i m\xecnh kh\xf4ng th\u1ec3 ti\u1ebfp t\u1ee5c duy tr\xec c\xf4ng c\u1ee5 n\xe0y. B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng chrome extension sau \u0111\xe2y \u0111\u1ec3 thay th\u1ebf:"}),(0,A.jsx)(i.A.Paragraph,{children:(0,A.jsx)(x.A,{href:"https://chrome.google.com/webstore/detail/ctu-extension/lggkifjaacghbpebpcbaneimpogjbnmf?hl=en-US",target:"_blank",children:(0,A.jsx)(o.A,{bordered:!0,hoverable:!0,children:(0,A.jsx)(o.A.Meta,{avatar:(0,A.jsx)(h.A,{src:y,size:100}),title:"CTU Extension",description:"S\u1eafp th\u1eddi kh\xf3a bi\u1ec3u d\xe0nh cho sinh vi\xean CTU v\xe0 nhi\u1ec1u h\u01a1n th\u1ebf n\u1eefa",children:"Hello"})})})}),(0,A.jsx)(i.A.Paragraph,{children:(0,A.jsx)(i.A.Link,{href:"https://www.facebook.com/100062234641172/videos/733988775191872/",target:"_blank",children:(0,A.jsx)(a.A,{message:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng",showIcon:!0,icon:(0,A.jsx)(g.A,{})})})}),(0,A.jsx)(i.A.Paragraph,{children:(0,A.jsx)(d.A,{src:j,preview:!1,style:{borderRadius:5}})})]})]})}},8352:(e,t,n)=>{n.d(t,{A:()=>s});const s=n(29246).A.create({baseURL:"https://api.tools.thangved.com/"})}}]);