(this["webpackJsonpalqayem-mern-app"]=this["webpackJsonpalqayem-mern-app"]||[]).push([[9],{256:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t(91),r=t(4),o=t(0),s=t(264),i=t(240),c=t(253),l=t(258),u=t(32),d=t(254),m=t(259),p=t(241),b=t(114),j=t.n(b),h=t(226),g=t(71),f=t(237),O=t(252),x=t(82),w=t.n(x),v=t(80),C=t(90);t(89);function y(){return Object(r.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(r.jsx)(u.b,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}C.a.configure();var S=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0px 0px 3px 3px green",padding:"30px"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function k(e){var a=S(),t=localStorage.getItem("token"),b=Object(o.useState)(""),g=Object(n.a)(b,2),x=g[0],k=g[1],P=Object(o.useState)(""),W=Object(n.a)(P,2),q=W[0],N=W[1],T=Object(o.useState)(""),D=Object(n.a)(T,2),F=D[0],I=D[1],A=Object(o.useState)(""),E=Object(n.a)(A,2),J=E[0],Y=E[1],z=Object(o.useState)(""),B=Object(n.a)(z,2),H=B[0],L=B[1],R=Object(o.useState)("none"),U=Object(n.a)(R,2),V=U[0],G=U[1],K=w.a.create({baseURL:v.a,headers:{Authorization:"bearer ".concat(t)}});return Object(r.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(r.jsx)(c.a,{}),Object(r.jsxs)(f.a,{elevation:3,className:a.paper,children:[Object(r.jsx)(p.a,{style:{position:"fixed",top:"70px",display:V}}),Object(r.jsx)(s.a,{className:a.avatar,children:Object(r.jsx)(j.a,{})}),Object(r.jsx)(h.a,{component:"h1",variant:"h5",children:"Change password"}),Object(r.jsxs)("form",{className:a.form,noValidate:!0,children:[Object(r.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:x,onChange:function(e){return k(e.target.value)},autoFocus:!0}),Object(r.jsx)(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:a.submit,onClick:function(e){G("block"),e.preventDefault();var a={email:x};K.post("forgotPassword",a).then((function(e){G("none");var a=e.data;1==a.status?(C.a.info(a.msg,{autoClose:1e3}),L(a.otp)):C.a.error("Something went wrong",{autoClose:1e3})})).catch((function(e){G("none"),console.log(e),C.a.error("Something went wrong",{autoClose:1e3})}))},children:"Send OTP"}),Object(r.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"otp",label:"Enter OTP",name:"otp",value:J,onChange:function(e){return Y(e.target.value)},autoFocus:!0}),Object(r.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:q,onChange:function(e){return N(e.target.value)},autoComplete:"current-password"}),Object(r.jsx)(l.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm password",type:"password",id:"password",value:F,onChange:function(e){return I(e.target.value)},autoComplete:"current-password"}),Object(r.jsx)(i.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",onClick:function(a){if(G("block"),a.preventDefault(),J==H)if(q.length<6)C.a.error("Password length must be at least 6",{autoClose:2e3});else if(F==q){var t={email:x,password:q};K.post("changePassword",t).then((function(a){G("none"),1==a.data.status?(C.a.success("Password was changed successfully",{autoClose:2e3}),e.history.push("/")):C.a.error("Something went wrong")})).catch((function(e){G("none"),console.log(e),C.a.error("Something went wrong")}))}else C.a.error("Password and Confirm password don't match",{autoClose:2e3});else C.a.error("Incorrect OTP",{autoClose:1e3})},className:a.submit,children:"Submit"}),Object(r.jsx)(d.a,{container:!0,children:Object(r.jsx)(d.a,{item:!0,xs:!0,children:Object(r.jsx)(u.b,{to:"/",variant:"body2",children:"Back to Home"})})})]})]}),Object(r.jsx)(m.a,{mt:8,children:Object(r.jsx)(y,{})})]})}},80:function(e,a,t){"use strict";a.a=""}}]);
//# sourceMappingURL=9.d50a8dcb.chunk.js.map