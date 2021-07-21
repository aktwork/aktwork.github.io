(this.webpackJsonphome=this.webpackJsonphome||[]).push([[6],{100:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var o=a(294),i=a(101),r=Object(o.a)((function(t){return{homeRoot:{position:"relative",width:"100%",height:"100vh",backgroundImage:"url(".concat(i.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"top",color:"white",transition:"all 1s ease-in-out"},homeMain:{position:"relative",display:"flex",overflow:"hidden",height:"100vh",width:"100%",alignItems:"center",transition:"all 1s ease-in-out","& .blur":{backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)"},"& .brightness":{backdropFilter:"brightness(1.5)",WebkitBackdropFilter:"brightness(1.5)"},"& .contrast":{backdropFilter:"contrast(1.5)",WebkitBackdropFilter:"contrast(1.5)"},"& .grayscale":{backdropFilter:"grayscale(1)",WebkitBackdropFilter:"grayscale(1)"},"& .hue-rotate":{backdropFilter:"hue-rotate(240deg)",WebkitBackdropFilter:"hue-rotate(240deg)",background:"rgba(53 ,222 ,206 ,.6)"},"& .invert":{backdropFilter:"invert(0.7)",WebkitBackdropFilter:"invert(0.7)"},"& .opacity":{backdropFilter:"opacity(0.1)",WebkitBackdropFilter:"opacity(0.1)"},"& .saturate":{backdropFilter:"saturate(2)",WebkitBackdropFilter:"saturate(2)"},"& .sepia":{background:"rgba:(200,17,14)",backdropFilter:"sepia(90%)",WebkitBackdropFilter:"sepia(90%)"}},homePiece:{position:"relative",width:"calc(100% / 6)",height:"100vh",transition:"all 1s ease-in-out",cursor:"pointer",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 10px",overflow:"hidden",backgroundPosition:"center",backgroundSize:"cover",minWidth:"20vw","&:hover":{width:"200vw",alignItems:"flex-end"},"&:hover .title":{transition:"all 1s ease-in-out"},"&:hover .desc":{transition:"all 1s ease-in-out",opacity:"1",height:"120vh",marginBottom:"10px"},"& .title":{width:"100%",padding:"20px",textAlign:"center",display:"flex",flexFlow:"column"},"& .desc":{opacity:"0",justifyContent:"center",transition:"all 1s ease-in-out",padding:"10px",minWidth:"100px",width:"100%",display:"flex",height:"0px",color:"black","& text":{height:"calc(100% - 30px)"},"& code":{width:"100%"}},"& .text":{textTransform:"uppercase",fontSize:"30px",transition:"all 1s ease-in-out","&:nth-child(2)":{paddingTop:"10px"}}},homeCore:{width:"100%",minWidth:"270px",height:"100vh",position:"relative",padding:"10px",cursor:"default","& .profile":{minHeight:"250px"},"& .avatar":{transition:"all 1s ease-in-out",maxWidth:"25vw",position:"relative",top:"50px"},"&:hover .avatar":{top:"0px!important"}},homeAbout:{},homeProject:{},homeMember:{},fixedNav:{position:"fixed",zIndex:"1",right:"20px",top:"20px"},h0:{height:"0px!important"},scrollUpBtn:{position:"fixed",zIndex:1,background:"rgba(255,255,255,.3)",border:"1px solid white",bottom:t.spacing(2),right:t.spacing(2)},scrollDownBtn:{position:"fixed",bottom:t.spacing(10),background:"rgba(255,255,255,.3)",border:"1px solid white",zIndex:1,right:t.spacing(2)}}}));Object(o.a)((function(t){return{}}))},101:function(t,e,a){"use strict";e.a=a.p+"static/media/bg_3.5ec86907.jpg"},102:function(t,e,a){"use strict";var o=a(5);e.a=function(t){var e=t.bg;return Object(o.jsx)("div",{className:"p-3 w-full h-full",children:Object(o.jsxs)("div",{className:"relative sm:max-w-xl sm:mx-auto h-full",children:[Object(o.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform sm:skew-y-0 -rotate-3 rounded-3xl"}),Object(o.jsx)("div",{className:"relative bg-white shadow-lg sm:rounded-3xl sm:p-5 bg-cover bg-center h-full",style:{backgroundImage:"url(".concat(e,")")},children:t.children})]})})}},103:function(t,e,a){"use strict";var o=a(9),i=a(298),r=a(31),n=a(100),c=a(85),s=a(5);e.a=function(){var t=Object(n.a)(),e=Object(o.g)(),a=function(t){e.push(t)};return Object(s.jsx)("div",{className:t.fixedNav,children:Object(r.a)()?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{className:"text-black",variant:"outlined",color:"secondary",onClick:function(){return a("/user/dashboard")},children:"Dashboard"}),Object(s.jsx)(i.a,{className:"text-black",variant:"outlined",color:"secondary",onClick:function(){return c.a()},children:"Logout"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i.a,{className:"text-black",variant:"outlined",color:"secondary",onClick:function(){return a("/login")},children:"Login "}),Object(s.jsx)(i.a,{className:"text-black",variant:"outlined",color:"secondary",onClick:function(){return a("/register")},children:"Register "})]})})}},117:function(t,e,a){"use strict";e.a=a.p+"static/media/logo.66a296d2.png"},264:function(t,e,a){"use strict";var o=a(4),i=a(14),r=a(2),n=(a(17),a(77)),c=a(78),s=a(79),l=a(265),d=r.forwardRef((function(t,e){var a=t.classes,c=t.className,d=t.color,p=void 0===d?"primary":d,u=t.position,h=void 0===u?"fixed":u,b=Object(i.a)(t,["classes","className","color","position"]);return r.createElement(l.a,Object(o.a)({square:!0,component:"header",elevation:4,className:Object(n.a)(a.root,a["position".concat(Object(s.a)(h))],a["color".concat(Object(s.a)(p))],c,"fixed"===h&&"mui-fixed"),ref:e},b))}));e.a=Object(c.a)((function(t){var e="light"===t.palette.type?t.palette.grey[100]:t.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:t.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:e,color:t.palette.getContrastText(e)},colorPrimary:{backgroundColor:t.palette.primary.main,color:t.palette.primary.contrastText},colorSecondary:{backgroundColor:t.palette.secondary.main,color:t.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(d)},265:function(t,e,a){"use strict";var o=a(14),i=a(4),r=a(2),n=(a(17),a(77)),c=a(78),s=r.forwardRef((function(t,e){var a=t.classes,c=t.className,s=t.component,l=void 0===s?"div":s,d=t.square,p=void 0!==d&&d,u=t.elevation,h=void 0===u?1:u,b=t.variant,g=void 0===b?"elevation":b,m=Object(o.a)(t,["classes","className","component","square","elevation","variant"]);return r.createElement(l,Object(i.a)({className:Object(n.a)(a.root,c,"outlined"===g?a.outlined:a["elevation".concat(h)],!p&&a.rounded),ref:e},m))}));e.a=Object(c.a)((function(t){var e={};return t.shadows.forEach((function(t,a){e["elevation".concat(a)]={boxShadow:t}})),Object(i.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(s)},266:function(t,e,a){"use strict";var o=a(4),i=a(14),r=a(21),n=a(2),c=(a(17),a(77)),s=a(78),l=n.forwardRef((function(t,e){var a=t.classes,r=t.className,s=t.component,l=void 0===s?"div":s,d=t.disableGutters,p=void 0!==d&&d,u=t.variant,h=void 0===u?"regular":u,b=Object(i.a)(t,["classes","className","component","disableGutters","variant"]);return n.createElement(l,Object(o.a)({className:Object(c.a)(a.root,a[h],r,!p&&a.gutters),ref:e},b))}));e.a=Object(s.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),regular:t.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},267:function(t,e,a){"use strict";var o=a(4),i=a(14),r=a(2),n=(a(17),a(77)),c=a(78),s=a(79),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=r.forwardRef((function(t,e){var a=t.align,c=void 0===a?"inherit":a,d=t.classes,p=t.className,u=t.color,h=void 0===u?"initial":u,b=t.component,g=t.display,m=void 0===g?"initial":g,f=t.gutterBottom,x=void 0!==f&&f,v=t.noWrap,j=void 0!==v&&v,y=t.paragraph,O=void 0!==y&&y,k=t.variant,w=void 0===k?"body1":k,N=t.variantMapping,B=void 0===N?l:N,F=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),W=b||(O?"p":B[w]||l[w])||"span";return r.createElement(W,Object(o.a)({className:Object(n.a)(d.root,p,"inherit"!==w&&d[w],"initial"!==h&&d["color".concat(Object(s.a)(h))],j&&d.noWrap,x&&d.gutterBottom,O&&d.paragraph,"inherit"!==c&&d["align".concat(Object(s.a)(c))],"initial"!==m&&d["display".concat(Object(s.a)(m))]),ref:e},F))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},307:function(t,e,a){"use strict";a.r(e);var o=a(102),i=a(294),r=a(264),n=a(266),c=a(298),s=a(267),l=a(117),d=a(2),p=a(36),u=a(5),h=Object(i.a)((function(t){return{title:{width:"100%",color:"red"},nabButton:{padding:"0px 20px"}}})),b=function(t){var e=h(),a=t.image?t.image:l.a;return Object(d.useEffect)((function(){console.log(p.a.currentUser)})),Object(u.jsx)(r.a,{position:"static",color:"inherit",children:Object(u.jsxs)(n.a,{children:[Object(u.jsxs)("div",{style:{display:"contents"},children:[Object(u.jsx)("img",{src:a,className:"w-10",alt:""}),Object(u.jsx)(c.a,{className:e.nabButton,size:"large",children:"Dashboard"})]}),Object(u.jsx)(s.a,{variant:"h6",className:e.title,children:t.title}),Object(u.jsx)(c.a,{variant:"contained",color:"inherit",children:"Logout"})]})})};a(103),e.default=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{title:"dashboard"}),Object(u.jsxs)("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 px-40 pt-10",children:[Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{}),Object(u.jsx)(o.a,{})]})]})}},85:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return l}));var o=a(86),i=a.n(o),r=a(87),n=a(36),c=function(){var t=Object(r.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.a.signInWithEmailAndPassword(e.email,e.password).then((function(t){return console.log(t.user),t.user.emailVerified?(localStorage.setItem("token",t.user.refreshToken),{data:t.user,status:"success"}):(t.user.sendEmailVerification(),n.a.signOut(),{status:"unverified"})})).catch((function(t){return console.log(t),{error:t,status:"error"}}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(t){n.a.createUserWithEmailAndPassword(t.email,t.password).then((function(t){return console.log(t),t.user.sendEmailVerification(),n.a.signOut(),{status:"sent_email"}})).catch((function(t){return console.log(t),{status:"error"}}))},l=function(){n.a.signOut().then((function(){return localStorage.clear(),!0}))}}}]);
//# sourceMappingURL=6.b5c2787e.chunk.js.map