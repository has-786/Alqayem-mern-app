(this["webpackJsonpalqayem-mern-app"]=this["webpackJsonpalqayem-mern-app"]||[]).push([[7],{114:function(e,t,a){"use strict";var c=a(91),s=(a(100),a(99)),i=a(4),n=a(0),r=a.n(n),o=a(33),l=a(12),j=a(137),d=a.n(j),b=a(142),x=a.n(b),h=a(238),p=a(242),O=a(262),m=a(226),u=a(71),g=a(83),f=a(231),v=a(232),y=a(233),w=a(235),S=a(234),k=a(236),q=a(239),C=a(240),I=a(138),T=a.n(I),N=a(264),E=a(241),W=a(139),D=a.n(W),H=a(140),A=a.n(H),B=a(141),L=a.n(B),P=(a(44),a(229),a(82)),z=a.n(P),R=a(80);function _(e){localStorage.getItem("email");var t=localStorage.getItem("token");return z.a.create({baseURL:R.a,headers:{Authorization:"bearer ".concat(t)}})}var M=a(87);a(86);function F(e,t){return function(a){return _().get("loadCart").then((function(e){var t=e.data;a({type:"load_cart",payload:{cart:t.cart}})})).catch((function(a){return"Header"!=t?e("/signin"):null}))}}M.a.configure();var G=a(230);M.a.configure();var U=240,V=Object(u.a)((function(e){var t,a;return{root:{display:"flex"},searchBar:{position:"relative"},drawer:Object(s.a)({},e.breakpoints.up("sm"),{width:U,flexShrink:0}),appBar:(t={},Object(s.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(U,"px)"),marginLeft:U}),Object(s.a)(t,"width","100%"),t),menuButton:{marginTop:"10px",float:"right",color:"#20b2aa"},title:{flexGrow:1,color:"#20b2aa",paddingLeft:"10px",fontWeight:"bold"},menulist:(a={color:"#20b2aa",fontSize:"17px",padding:"0 20px 0 20px",fontFamily:"serif"},Object(s.a)(a,"color","#000064"),Object(s.a)(a,"float","right"),a),logo:{width:"50px",height:"50px",padding:0},menulistContainer:{float:"right",display:"block"},toolbar:e.mixins.toolbar,drawerPaper:{width:U},content:{flexGrow:1,padding:e.spacing(3)}}}));t.a=Object(o.b)((function(e){return{cart:e.cartReducer}}),(function(e){return{action:Object(l.b)({loadCart:F},e)}}))((function(e){var t=Object(G.a)("(min-width:600px)"),a=document.body,s=V(),l=(Object(g.a)(),r.a.useState(!1)),j=Object(c.a)(l,2),b=j[0],u=j[1],I=Object(o.c)(),W=function(){u(!b)},H=Object(n.useState)([]),B=Object(c.a)(H,2),P=(B[0],B[1],r.a.useState(!1)),z=Object(c.a)(P,2),R=(z[0],z[1],r.a.useState(!1)),_=Object(c.a)(R,2),M=(_[0],_[1],r.a.useState("")),F=Object(c.a)(M,2),U=(F[0],F[1],r.a.useState([])),K=Object(c.a)(U,2),J=(K[0],K[1],localStorage.getItem("token"),localStorage.getItem("email")),Y=localStorage.getItem("name"),Q=Object(n.useState)(!1),Z=Object(c.a)(Q,2),X=Z[0],$=Z[1];Object(n.useEffect)((function(){if(!X){localStorage.getItem("token");e.action.loadCart(e.history.push,"Header"),$(!0)}}),[]);var ee=[["Home","/",d.a],["Blog","#","ziyarat.jpg"],["Events","#","event.png"],["Activities","#","activities.png"],["Gallery","#","gallery.png"],["About","#","about.jpg"],["Contact","#","contact.jpg"]];J?ee.push(["Sign out","/signin",T.a]):ee.push(["Sign in","/signin",T.a]);var te=[["Add Paintings","/addpainting",D.a],["Add Videos","/addvideo",A.a],["Delete Paintings","/deletepainting",L.a],["Delete Videos","/deleteVideo",L.a]],ae=Object(i.jsxs)("div",{children:[Object(i.jsx)("center",{children:Object(i.jsx)(N.a,{style:{borderColor:"#00008B",color:"lightgrey",marginTop:"10px",width:"70px",height:"70px"}})}),Object(i.jsx)("center",{children:Object(i.jsx)("p",{children:Y})}),Object(i.jsx)("div",{className:s.toolbar,style:{marginTop:"-60px"}}),Object(i.jsx)(f.a,{}),Object(i.jsx)(v.a,{children:ee.map((function(t,a){return Object(i.jsxs)(y.a,{button:!0,onClick:function(){"Sign out"===t[0]?function(e,t){localStorage.removeItem("token"),localStorage.removeItem("email"),localStorage.removeItem("name"),t({type:"clear_cart"}),t({type:"clear_order"}),e("/signin")}(e.history.push,I):e.history.push(t[1])},children:["Home"===t[0]?Object(i.jsx)(S.a,{children:Object(i.jsx)(N.a,{style:{backgroundColor:"aqua"},children:Object(i.jsx)(d.a,{style:{color:"purple"}})})}):Object(i.jsx)(S.a,{style:{color:"purple"},children:Object(i.jsx)(N.a,{src:t[2]})}),Object(i.jsx)(w.a,{primary:t[0]})]},t[0])}))}),Object(i.jsx)(f.a,{}),"syedhasnain9163@gmail.com"===J?Object(i.jsx)(v.a,{children:te.map((function(t,a){return Object(i.jsxs)(y.a,{button:!0,onClick:function(){return e.history.replace(t[1])},children:[Object(i.jsx)(S.a,{style:{color:"green"},children:Object(n.createElement)(t[2],{})}),Object(i.jsx)(w.a,{primary:t[0]})]},t[0])}))}):null]});return Object(i.jsxs)("div",{children:[Object(i.jsx)(k.a,{position:"static",children:Object(i.jsxs)(h.a,{class:"appbar",children:[Object(i.jsxs)(q.a,{children:[Object(i.jsx)(N.a,{src:"alqayem.png",className:s.logo}),Object(i.jsx)(m.a,{variant:"h6",className:s.title,style:{marginRight:t?"400px":"0px"},children:"Alqayem Kolkata"}),t?Object(i.jsxs)(i.Fragment,{children:[ee.map((function(e){return Object(i.jsxs)(m.a,{variant:"h6",className:s.menulist,children:["    ",e[0]," "]})})),Object(i.jsx)(C.a,{class:"visit-us",children:"Visit us"})]}):null]}),t?null:Object(i.jsx)(q.a,{className:s.menuButton,color:"inherit","aria-label":"menu",children:Object(i.jsx)(x.a,{style:{width:"30px",height:"30px"},onClick:W})})]})}),Object(i.jsxs)("nav",{className:s.drawer,"aria-label":"mailbox folders",children:[Object(i.jsx)("center",{children:Object(i.jsx)(E.a,{id:"loader",style:{marginTop:"100px",display:"none"}})}),t?null:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O.a,{smUp:!0,implementation:"css",children:Object(i.jsx)(p.a,{container:a,variant:"temporary",anchor:"right",open:b,onClose:W,classes:{paper:s.drawerPaper},ModalProps:{keepMounted:!0},children:ae})}),Object(i.jsx)(O.a,{xsDown:!0,implementation:"css",children:Object(i.jsx)(p.a,{classes:{paper:s.drawerPaper},variant:"permanent",open:!0,children:ae})})]})]})]})}))},263:function(e,t,a){"use strict";a.r(t),a.d(t,"Home",(function(){return w}));var c=a(99),s=a(100),i=a(91),n=a(4),r=a(0),o=a(71),l=a(248),j=a(249),d=a(250),b=a(237),x=a(226),h=a(228);function p(){return Object(n.jsxs)(x.a,{variant:"h6",style:{color:"white",marginTop:"10px"},align:"center",children:["Copyright \xa9 ",Object(n.jsx)(h.a,{color:"inherit",href:"https://material-ui.com/",children:"Alqayem Organisation Kolkata"})," ",2021,"."]})}var O=a(114),m=(a(44),a(240)),u=a(245),g=a(246),f=a(247),v=a(231),y=a(241);function w(e){var t=Object(o.a)((function(e){return{root:{maxWidth:"300px",marginTop:"15px",boxShadow:"0px 0px 3px 3px green"},rootDialog:{maxWidth:"500px",marginTop:"15px",boxShadow:"0px 0px 3px 3px green"},root1:{width:"300px",boxShadow:"0px 0px 3px 3px green"},root2:{width:"100px",height:"100px",boxShadow:"0px 0px 3px 3px green",marginTop:"10px"},rootIcons:{backgroundColor:"white",margin:"5px",boxShadow:"0px 0px 3px 3px green"},footercard:{backgroundColor:"aqua",boxShadow:"0px 0px 3px 3px green"},media:{height:200,width:300},mediaDialog:{height:300,width:300},media2:{height:100,width:100},iconContainer:{margin:"100px 0 100px 0px"},loaders:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})),a=Object(r.useState)(""),x=Object(i.a)(a,2),h=x[0],w=(x[1],Object(r.useState)("")),S=Object(i.a)(w,2),k=S[0],q=(S[1],Object(r.useState)("")),C=Object(i.a)(q,2),I=C[0],T=C[1],N=t();return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{style:{backgroundColour:"white",position:"fixed",width:"100%",zIndex:10},children:Object(n.jsx)(O.a,Object(s.a)({},e))}),Object(n.jsxs)(u.a,{open:I,onClose:function(){T(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(g.a,{id:"alert-dialog-title",children:h}),Object(n.jsx)(f.a,{children:Object(n.jsx)(l.a,{className:N.rootDialog,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(d.a,{className:N.mediaDialog,image:k,title:h})})})})]}),Object(n.jsxs)("div",{class:"body",style:{paddingTop:"75px"},children:[Object(n.jsxs)("div",{class:"mainImage",style:{width:"100%"},children:[Object(n.jsxs)("p",{id:"mainImage-text",children:["Where is the one demanding with the blood of the one slain in Karbala?",Object(n.jsx)("br",{}),Object(n.jsx)("span",{style:{fontSize:"20px"},children:"- Dua-e-Nudbah"})]}),Object(n.jsx)(m.a,{variant:"contained",class:"visit-us",id:"mainImage-button",children:"Read More"})]}),Object(n.jsx)("div",{class:"showicons",children:[["Salah","#","fas fa-pray"],["Fasting","#","fas fa-star-and-crescent"],["Zakah","#","fas fa-hand-holding-heart"],["Hajj","#","fas fa-kaaba"]].map((function(e){return Object(n.jsx)("div",{class:"icons-parent",children:Object(n.jsxs)("center",{children:[Object(n.jsx)(b.a,{class:"icons",children:Object(n.jsx)("center",{children:Object(n.jsx)("i",{class:"icon ".concat(e[2])})})}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{style:{color:"#000064",fontWeight:"bold"},children:e[0]})]})})}))}),Object(n.jsx)("div",{id:"about-our-center",children:Object(n.jsxs)("div",{id:"about-our-center-details",children:[Object(n.jsx)("h4",{id:"heading1",children:" About "}),Object(n.jsx)("p",{id:"heading2",children:"Our Center"}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{id:"content",children:"Established in 2017 to serve people who are in need of funds or education."}),Object(n.jsx)(m.a,{variant:"contained",id:"learn-more",children:"Learn More"})]})}),Object(n.jsx)("div",{id:"about-our-services",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("center",{children:Object(n.jsxs)("div",{id:"about-our-services-details",children:[Object(n.jsx)("h4",{id:"heading1",children:" Serving Humanity "}),Object(n.jsx)("p",{id:"heading2",children:"Our Services"}),Object(n.jsx)("hr",{})]})}),Object(n.jsxs)("div",{class:"showicons",children:[Object(n.jsx)("div",{class:"col-lg-4",children:Object(n.jsxs)("p",{id:"content",children:[Object(n.jsxs)("span",{id:"uppercase",children:["WE'RE ON A ",Object(n.jsx)("span",{id:"mission",children:"MISSION"})," TO "]}),"solve the problems and gain resources for a new generation."]})}),Object(n.jsx)("div",{class:"col-lg-4",children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"col-lg-12 icons-services",children:[Object(n.jsx)("i",{class:"fas fa-quran icon"}),"\xa0\xa0",Object(n.jsx)("span",{class:"icon-text",children:"Quran Learning"})]}),Object(n.jsxs)("div",{class:"col-lg-12 icons-services",children:[Object(n.jsx)("i",{class:"fas fa-mosque icon"}),"\xa0\xa0",Object(n.jsx)("span",{class:"icon-text",children:"Mosque Development"})]})]})}),Object(n.jsx)("div",{class:"col-lg-4",children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"col-lg-12 icons-services",children:[Object(n.jsx)("i",{class:"fas fa-hand-holding-heart icon"}),"\xa0\xa0",Object(n.jsx)("span",{class:"icon-text",children:"Charity Service"})]}),Object(n.jsxs)("div",{class:"col-lg-12 icons-services",children:[Object(n.jsx)("i",{class:"fas fa-hands-helping icon"}),"\xa0\xa0",Object(n.jsx)("span",{class:"icon-text",children:"Help Poor"})]})]})})]})]})}),Object(n.jsxs)("div",{id:"about-our-work",children:[Object(n.jsx)("center",{children:Object(n.jsxs)("div",{id:"about-our-work-details",children:[Object(n.jsx)("h4",{id:"heading1",children:" Support us, "}),Object(n.jsx)("p",{id:"heading2",children:"We need your help"}),Object(n.jsx)("hr",{})]})}),Object(n.jsx)("div",{class:"showicons",children:[{name:"Helped families with food",value:60},{name:"Helped in Education",value:80},{name:"Events done",value:20}].map((function(e){var t;return Object(n.jsxs)("div",{style:{padding:"20px 20px 20px 0"},children:[Object(n.jsxs)("center",{children:[Object(n.jsx)(y.a,{variant:"determinate",value:"100",style:{position:"absolute",color:"white",marginLeft:"0px",width:"120px",height:"120px"}}),Object(n.jsx)(y.a,(t={variant:"determinate",value:"100"},Object(c.a)(t,"value",e.value),Object(c.a)(t,"style",{color:"#20b2aa",width:"120px",height:"120px"}),t)),Object(n.jsxs)("p",{style:{fontSize:"35px",marginTop:"-90px",marginLeft:"15px",color:"white"},children:[e.value,Object(n.jsx)("sup",{class:"small",style:{fontSize:"25px"},children:"%"})]}),Object(n.jsx)("p",{style:{color:"white",marginTop:"35px"},children:e.name})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]})}))}),Object(n.jsx)("br",{}),Object(n.jsx)("center",{children:Object(n.jsx)(m.a,{variant:"contained",color:"#20b2aa",id:"learn-more",children:"Donate Now"})}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{id:"about-subscribe",children:Object(n.jsxs)("center",{children:[Object(n.jsxs)("div",{id:"about-subsrcibe-details",children:[Object(n.jsx)("h4",{id:"heading1",children:" Newsletter "}),Object(n.jsx)("p",{id:"heading2",children:"Subscribe to our mailing list"})]}),Object(n.jsxs)("form",{style:{paddingTop:"40px"},children:[Object(n.jsx)("input",{type:"text",class:"rounded-text-box",placeholder:"Enter your email"}),Object(n.jsx)(m.a,{id:"newsletter-submit",children:"SIGN UP"})]})]})}),Object(n.jsxs)("section",{style:{background:"black",padding:"10px"},children:[Object(n.jsx)(v.a,{}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-md-4 animated","data-animate":"fadeInLeft",style:{marginTop:"30px"},children:Object(n.jsx)("center",{children:Object(n.jsx)("form",{action:"#",children:Object(n.jsxs)("div",{class:"row",style:{width:"300px"},children:[Object(n.jsx)("div",{class:"col-md-12",children:Object(n.jsx)("h4",{style:{color:"aqua",fontWeight:"bold"},children:"Write to us"})}),Object(n.jsx)("div",{class:"col-md-6",children:Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Your Name",style:{marginBottom:"5px"}})}),Object(n.jsx)("div",{class:"col-md-6",children:Object(n.jsx)("input",{type:"email",class:"form-control",placeholder:"Your Email",style:{marginBottom:"5px"}})}),Object(n.jsx)("div",{class:"col-md-12",children:Object(n.jsx)("textarea",{class:"form-control",rows:"3",placeholder:"Tell Us Everything",style:{marginBottom:"5px"}})}),Object(n.jsx)("div",{class:"col-md-12",children:Object(n.jsx)("button",{class:"btn btn-sm btn-primary submit",children:"Send"})})]})})})}),Object(n.jsx)("div",{class:"col-md-4 animated",style:{marginTop:"30px"},children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h4",{style:{color:"aqua",fontWeight:"bold"},children:"Contact us"}),Object(n.jsxs)("address",{children:[Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-map-marker fa-lg"}),"\xa0 84 State Road 123 City, State 24813"]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-phone fa-lg"}),"\xa0 (123) xxx - xxx"]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-envelope-o fa-lg"}),"\xa0 ",Object(n.jsx)("a",{href:"mailto:contact@example.com",children:"contact@example.com"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-globe fa-lg"}),"\xa0 ",Object(n.jsx)("a",{href:"http://support.example.com",children:"support.example.com"})]})]})]})}),Object(n.jsx)("div",{class:"col-md-4 animated",style:{marginTop:"30px"},"data-animate":"fadeInRight",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h4",{style:{color:"aqua",fontWeight:"bold"},children:"Follow us at"}),Object(n.jsxs)("address",{children:[Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-facebook fa-lg"}),"\xa0 ",Object(n.jsx)("a",{href:"http://www.facebook.com/alqayemorg",target:"_blank",children:"facebook.com/alqayemorg"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-instagram fa-lg"}),"\xa0 ",Object(n.jsx)("a",{href:"http://www.instagram.com/alqayemorg",target:"_blank",children:"instagram.com/alqayemorg"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-youtube fa-lg"}),"\xa0 ",Object(n.jsx)("a",{href:"http://www.youtube.com/alqayemorg",target:"_blank",children:"youtube.com/alqayemorg"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{class:"footericons",children:[Object(n.jsx)("i",{class:"footericons fa fa-twitter fa-lg"}),"\xa0 ",Object(n.jsx)("a",{href:"http://www.twitter.com/alqayemorg",target:"_blank",children:"twiitter.com/alqayemorg"})]})]})]})})]}),Object(n.jsx)(p,{})]})]})]})]})}t.default=w},80:function(e,t,a){"use strict";t.a=""}}]);
//# sourceMappingURL=7.94d7e04a.chunk.js.map