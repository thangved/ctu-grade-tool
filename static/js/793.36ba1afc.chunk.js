"use strict";(self.webpackChunkw5_tools=self.webpackChunkw5_tools||[]).push([[793],{6922:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(89379),r=n(65957),a=n(34057),i=n(46004),c=n(4592),o=n(78894),l=n(38576),h=n(93883),d=n(85125),u=n(9950),m=n(8352);const g="RequestAddCourseModal_button__fKFK+";var y=n(44414);const p=()=>{const[e,t]=(0,u.useState)(!1),[n,p]=(0,u.useState)(!1),[x,A]=(0,u.useState)(!1),j=(0,d.Wx)({initialValues:{key:"",name:"",weight:1},onSubmit:async e=>{p(!0);try{const n=await m.A.post("courses/request-add-course",(0,s.A)({},e));r.Ay.success(n.data.message),t(!1)}catch(n){r.Ay.error(n.response.data.message),A(!0)}p(!1)},validate:e=>{const t={};return e.key||(t.key="M\xe3 h\u1ecdc ph\u1ea7n l\xe0 b\u1eaft bu\u1ed9c"),t}}),k=()=>t(!e);return(0,u.useEffect)((()=>{A(!1)}),[j.values.key]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(a.Ay,{type:"link",block:!0,onClick:k,className:g,children:["Kh\xf4ng c\xf3 h\u1ecdc ph\u1ea7n b\u1ea1n \u0111ang t\xecm?",(0,y.jsx)("br",{})," B\u1ea5m v\xe0o \u0111\xe2y \u0111\u1ec3 th\xeam nh\xe9."]}),(0,y.jsx)(h.A,{confirmLoading:n,title:"Y\xeau c\u1ea7u b\u1ed5 sung th\xeam h\u1ecdc ph\u1ea7n",open:e,centered:!0,cancelText:"H\u1ee7y",okText:"Y\xeau c\u1ea7u",okType:x?"danger":"primary",onCancel:k,onOk:j.handleSubmit,afterClose:()=>{j.resetForm()},children:(0,y.jsx)("form",{onSubmit:j.handleSubmit,children:(0,y.jsxs)(i.A,{direction:"vertical",style:{width:"100%"},children:[(0,y.jsx)(c.A,{autoFocus:!0,placeholder:"M\xe3 h\u1ecdc ph\u1ea7n",value:j.values.key,name:"key",onChange:j.handleChange,onKeyDown:e=>"Enter"===e.code&&j.handleSubmit(),status:j.errors.key||x?"error":"",required:!0}),(0,y.jsx)(o.A,{style:{color:"red"},children:j.errors.key}),(0,y.jsx)(c.A,{placeholder:"T\xean h\u1ecdc ph\u1ea7n (T\xf9y ch\u1ecdn)",value:j.values.name,name:"name",onChange:j.handleChange}),(0,y.jsx)(l.A,{style:{width:"100%"},placeholder:"S\u1ed1 t\xedn ch\u1ec9 (T\xf9y ch\u1ecdn)",value:j.values.weight,onChange:j.handleChange,name:"weight",type:"number"})]})})})]})}},67793:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var s=n(87094),r=n(41988),a=n(72772),i=n(9950),c=n(44414);const o=(0,i.createContext)({courses:[{key:"",name:"",digit:0,txt:"",four:0}],avg:0,addCourses:Function,removeCourses:Function}),l=e=>{let{children:t}=e;const[n,s]=(0,i.useState)(JSON.parse(localStorage.getItem("courses")||"[]")),[r,a]=(0,i.useState)(0);return(0,i.useEffect)((()=>{var e;localStorage.setItem("courses",JSON.stringify(n));let t=0,s=0;if(n.forEach((e=>{t+=Number(e.weight),s+=e.four*Number(e.weight)})),0===t)return a(0);let r="".concat(s/t);r=r.split("."),r[1]=(null===(e=r[1])||void 0===e?void 0:e.slice(0,2))||0,r=r.join("."),0!==t&&a(r)}),[n]),(0,c.jsx)(o.Provider,{value:{courses:n,avg:r,addCourses:e=>s((t=>[...t.filter((t=>t.key!==e.key)),e])),removeCourses:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((e=>{s((t=>t.filter((t=>t.key!==e))))}))}},children:t})};var h=n(9591),d=n(46004),u=n(73149),m=n(34057),g=n(94793),y=n(9762),p=n(48864);const x=[{title:"M\xe3 h\u1ecdc ph\u1ea7n",dataIndex:"key",key:"key",width:150,fixed:"left"},{title:"T\xean h\u1ecdc ph\u1ea7n",dataIndex:"name",key:"name",width:150},{title:"S\u1ed1 t\xedn ch\u1ec9",dataIndex:"weight",key:"weight",width:150},{title:"\u0110i\u1ec3m thang 10",dataIndex:"digit",key:"digit",width:150},{title:"\u0110i\u1ec3m thang 4",dataIndex:"four",key:"four",width:150},{title:"\u0110i\u1ec3m ch\u1eef",dataIndex:"txt",key:"txt",with:150}],A=()=>{const{courses:e,avg:t,removeCourses:n}=(0,i.useContext)(o),[s,r]=(0,i.useState)([]);return(0,c.jsxs)(d.A,{direction:"vertical",style:{maxWidth:"calc(100vw - 100px)",overflow:"auto"},children:[(0,c.jsx)(u.A,{title:"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ".concat(s.length," h\u1ecdc ph\u1ea7n?"),disabled:0===s.length||0===e.length,placement:"bottom",okText:"X\xf3a",okType:"danger",cancelText:"H\u1ee7y",onConfirm:()=>n(s),children:(0,c.jsx)(m.Ay,{danger:!0,icon:(0,c.jsx)(h.SUY,{}),disabled:0===s.length||0===e.length,children:"X\xf3a"})}),(0,c.jsx)(g.A,{bordered:!0,rowSelection:{selectedRowKeys:s,onChange:e=>r(e)},pagination:{pageSize:9},dataSource:e,columns:x,scroll:{x:900,y:"100vh"},id:"course-table"}),(0,c.jsxs)(y.A,{layout:"vertical",bordered:!0,children:[(0,c.jsx)(y.A.Item,{span:4,label:"\u0110i\u1ec3m trung b\xecnh",children:(0,c.jsx)(p.A,{strokeColor:{"0%":"#108ee9","100%":"#87d068"},type:"circle",percent:100*t/4,format:e=>"".concat(4*e/100,"/4")})},"avg"),e.map((e=>(0,c.jsx)(y.A.Item,{span:1,label:e.name,children:(0,c.jsx)(p.A,{type:"circle",percent:100*e.four/4,format:e=>"".concat(4*e/100,"/4")})},e.key)))]})]})};var j=n(89379),k=n(65957),f=n(23561),v=n(4592),b=n(75376),C=n(35398),w=n(95035),S=n(6922),I=n(8352),T=n(38576),E=n(93883);const B=e=>{let t=4,n="A";return e<9&&(t=3.5,n="B+"),e<8&&(t=3,n="B"),e<7&&(t=2.5,n="C+"),e<6.5&&(t=2,n="C"),e<5.5&&(t=1.5,n="D+"),e<5&&(t=1,n="D"),e<4&&(t=0,n="F"),{four:t,txt:n}},N=e=>{let{open:t,course:n,onClose:s=()=>{}}=e;const{addCourses:r}=(0,i.useContext)(o),[a,l]=(0,i.useState)(0),[h,d]=(0,i.useState)(0),[u,m]=(0,i.useState)("");return(0,i.useEffect)((()=>{const{four:e,txt:t}=B(a);d(e),m(t)}),[a]),(0,c.jsxs)(E.A,{open:t,onCancel:s,onOk:()=>{r((0,j.A)((0,j.A)({},n),{},{digit:a,four:h,txt:u})),s(),k.Ay.success("\u0110\xe3 th\xeam h\u1ecdc ph\u1ea7n."),l(10)},okButtonProps:{id:"ok-button"},children:[(0,c.jsx)("h2",{children:n.name}),(0,c.jsx)("h3",{children:n.key}),(0,c.jsxs)(y.A,{layout:"vertical",bordered:!0,children:[(0,c.jsx)(y.A.Item,{span:4,label:"\u0110i\u1ec3m thang 10",children:(0,c.jsx)(T.A,{max:10,min:0,style:{width:"100%"},onChange:e=>l(e),onKeyPress:e=>{"Enter"===e.key&&(r((0,j.A)((0,j.A)({},n),{},{digit:a,four:h,txt:u})),s(),k.Ay.success("\u0110\xe3 th\xeam h\u1ecdc ph\u1ea7n."),l(10))},id:"grade-input"})}),(0,c.jsx)(y.A.Item,{span:4,label:"\u0110i\u1ec3m thang 4",children:h}),(0,c.jsx)(y.A.Item,{span:4,label:"\u0110i\u1ec3m ch\u1eef",children:u})]})]})},F=[{title:"T\xecm ki\u1ebfm h\u1ecdc ph\u1ea7n",description:"Nh\u1eadp t\u1eeb kh\xf3a v\xe0o \xf4 t\xecm ki\u1ebfm",target:()=>(document.getElementById("search-container").focus(),document.getElementById("search-container"))},{title:"T\xecm ki\u1ebfm h\u1ecdc ph\u1ea7n",description:"Nh\u1ea5n v\xe0o n\xfat t\xecm ki\u1ebfm ho\u1eb7c nh\u1ea5n enter",target:()=>document.getElementById("search-button")},{title:"Ch\u1ecdn h\u1ecdc ph\u1ea7n mong mu\u1ed1n",description:"Ch\u1ecdn h\u1ecdc ph\u1ea7n mu\u1ed1n th\xeam v\xe0 nh\u1ea5n v\xe0o n\xfat th\xeam \u1edf b\xean c\u1ea1nh",target:()=>document.getElementById("course-list")},{title:"Nh\u1eadp \u0111i\u1ec3m",description:"Nh\u1eadp \u0111i\u1ec3m h\u1ecdc ph\u1ea7n (thang 10)",target:()=>document.getElementById("grade-input")},{title:"Th\xeam h\u1ecdc ph\u1ea7n",description:"Nh\u1ea5n v\xe0o n\xfat OK \u0111\u1ec3 th\xeam h\u1ecdc ph\u1ea7n",target:()=>document.getElementById("ok-button")},{title:"Ho\xe0n th\xe0nh",description:"V\u1eady l\xe0 b\u1ea1n \u0111\xe3 ho\xe0n t\u1ea5t vi\u1ec7c nh\u1eadp \u0111i\u1ec3m m\u1ed9t h\u1ecdc ph\u1ea7n g\xf2i \u0111\xf3, hehe!",target:()=>document.getElementById("course-table")}],K=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(!1),[r,a]=(0,i.useState)(""),[o,l]=(0,i.useState)(!1),[d,u]=(0,i.useState)({visible:!1,course:{}}),[g,y]=(0,i.useState)(!1),p=async()=>{if(r.length<3)return k.Ay.warning("Vui l\xf2ng nh\u1eadp \xedt nh\u1ea5t 3 k\xfd t\u1ef1");if(n)return;const e=k.Ay.loading("\u0110ang t\xecm ki\u1ebfm h\u1ecdc ph\u1ea7n",0);try{s(!0);const e=await I.A.get("courses/search/".concat(r));if(!e.data)return;t(e.data)}catch(a){}finally{l(!0),s(!1),e()}};return(0,c.jsxs)(f.A,{style:{width:"100%"},children:[(0,c.jsx)(m.Ay,{style:{marginBottom:5},size:"small",type:"primary",onClick:()=>y(!g),children:"H\u01b0\u1edbng d\u1eabn"}),(0,c.jsx)(f.A.Item,{style:{width:"100%"},children:(0,c.jsxs)(v.A.Group,{style:{width:"100%"},compact:!0,children:[(0,c.jsx)(v.A,{id:"search-container",autoFocus:!0,style:{width:"calc(100% - 120px)"},placeholder:"T\xecm ki\u1ebfm h\u1ecdc ph\u1ea7n",onChange:e=>a(e.target.value),onKeyPress:e=>{"Enter"===e.key&&p()}}),(0,c.jsx)(m.Ay,{id:"search-button",icon:(0,c.jsx)(h.VrN,{}),type:"primary",loading:n,onClick:p,children:"T\xecm ki\u1ebfm"})]})}),(0,c.jsxs)(f.A.Item,{children:[n&&(0,c.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",background:"#ffffff90",zIndex:100},children:(0,c.jsx)(b.A,{})}),(0,c.jsx)(C.A,{id:"course-list",pagination:{pageSize:9,hideOnSinglePage:!0},dataSource:e,renderItem:e=>(0,c.jsx)(C.A.Item,{actions:[(0,c.jsx)(m.Ay,{type:"link",onClick:()=>{u({course:e,visible:!0})},children:"Th\xeam"})],children:(0,c.jsx)(C.A.Item.Meta,{title:e.name,description:e.key})})})]}),o&&(0,c.jsx)(S.A,{}),(0,c.jsx)(N,{open:d.visible,course:d.course,onClose:()=>u((e=>(0,j.A)((0,j.A)({},e),{},{visible:!1})))}),(0,c.jsx)(w.A,{open:g,onClose:()=>y(!1),steps:F})]})},O=()=>(0,c.jsxs)(l,{children:[(0,c.jsx)(a.m,{children:(0,c.jsx)("title",{children:"C\xf4ng c\u1ee5 t\xednh \u0111i\u1ec3m trung b\xecnh | w5 tools"})}),(0,c.jsxs)(s.A,{style:{padding:10},children:[(0,c.jsx)(r.A,{lg:8,md:8,xs:24,children:(0,c.jsx)(K,{})}),(0,c.jsx)(r.A,{lg:16,md:16,xs:24,children:(0,c.jsx)(A,{})})]})]})},8352:(e,t,n)=>{n.d(t,{A:()=>s});const s=n(26910).A.create({baseURL:"https://api.tools.thangved.com/"})}}]);