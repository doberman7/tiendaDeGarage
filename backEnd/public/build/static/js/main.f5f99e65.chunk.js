(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,t,c){},219:function(e,t,c){},400:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c(36),s=c.n(r),i=(c(219),c(82)),o=c(38),l=c(42),j=c(8),d=c.n(j),u=c(22),b=c(403),p=c(415),h=c(117),O=c(15),x=c(54),m=c.n(x),f=m.a.create({baseURL:"/",withCredentials:!0}),g=function(e){return f.post("/signup",e)},y=function(e){return f.post("/login",e)},v=function(){return f.get("/current-user")},w=function(){return f.get("/logout")},k=function(e){return f.put("/editProfile",e)},I=function(e){return f.post("/wish/create",e)},F=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/wish/get-user-wishes");case 2:return t=e.sent,c=t.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/wish/get-wish-details/".concat(t));case 2:return c=e.sent,a=c.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e,t){return f.put("/wish/edit-wish/".concat(e),t)},S=function(e){return f.delete("/wish/delete-wish/".concat(e))},U=Object(n.createContext)(),P=function(e){var t=Object(n.useState)(null),c=Object(O.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(O.a)(i,2),l=o[0],j=o[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c=t.data,b(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),j(!1)}),[l]);var b=function(e){s(e)},p={user:r,login:b,logout:function(){s(null)},signup:function(e){s(e)},setUserUpdtade:j,addProfilePic:function(e){return s(Object(h.a)(Object(h.a)({},r),{},{img:e}))}};return Object(a.jsx)(U.Provider,Object(h.a)(Object(h.a)({},e),{},{value:p}))},L=function(){return Object(n.useContext)(U)},E=c(423),W=c(115),D=c(414),_=c(422),N=c(419),M=c(420),A=c(421),z=function(){var e=Object(i.b)(),t=e.isEmpty,c=e.totalUniqueItems,n=e.items,r=e.updateItemQuantity,s=e.removeItem;return t?Object(a.jsx)("p",{children:"Your cart is empty"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h1",{children:["(",c,") diferent items"]}),Object(a.jsx)("ul",{children:n.map((function(e){return Object(a.jsxs)("li",{children:[e.quantity," x ",e.name,Object(a.jsx)("br",{}),Object(a.jsx)(W.a,{onClick:function(){return r(e.id,e.quantity-1)},children:Object(a.jsx)(N.a,{})}),Object(a.jsx)(W.a,{onClick:function(){return r(e.id,e.quantity+1)},children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(W.a,{onClick:function(){return s(e.id)},children:Object(a.jsx)(A.a,{})})]},e.id)}))})]})},H=c(407),G=function(){var e=Object(i.b)().totalItems,t=Object(n.useState)(!1),c=Object(O.a)(t,2),r=c[0],s=c[1],o=e;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(W.a,{type:"dashed",onClick:function(){s(!0)},style:{position:"fixed",zIndex:"100",right:"20px",top:"20px",color:"#eb2f96"},children:Object(a.jsx)(H.a.div,{animate:{scale:[1,2,2,1,1],rotate:[0,0,270,270,0],borderRadius:["20%","20%","50%","50%","20%"]},transition:{duration:2,ease:"easeInOut",times:[0,.2,.5,.8,1],repeatDelay:1},children:Object(a.jsxs)(H.a.div,{whileHover:{scale:1.8},children:[Object(a.jsx)(_.a,{}),Object(a.jsx)("totalItems",{}),Object(a.jsx)(a.Fragment,{children:o})]})})}),Object(a.jsx)(D.a,{title:"My Cart",placement:"right",closable:!1,onClose:function(){s(!1)},visible:r,children:Object(a.jsx)(z,{})})]})},Y=b.a.Header,B=b.a.Content,R=function(e){var t=e.children,c=Object(l.g)(),n=L(),r=n.user,s=n.logout;function i(){return(i=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:s(),c.push("/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(b.a,{className:"layout",children:[Object(a.jsxs)(Y,{children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsx)(p.a,{theme:"dark",mode:"horizontal",children:r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(G,{}),Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/profile",children:Object(a.jsx)(E.a,{style:{color:"#6abe39"}})})},"4"),Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/MyWishes",style:{color:"#e8d639"},children:"My Wishes"})},"5"),Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/MyProducts",style:{color:"#a9d134"},children:"My Products"})},"6"),Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/ProductsAll",style:{color:"#e8b339"},children:"All products"})},"7"),Object(a.jsx)(p.a.Item,{},"9"),Object(a.jsx)(p.a.Item,{onClick:function(){return i.apply(this,arguments)},style:{color:"gray"},children:"Logout"},"8")]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/",children:"Home"})},"1"),Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/signup",children:"Signup"})},"2"),Object(a.jsx)(p.a.Item,{children:Object(a.jsx)(o.b,{to:"/login",children:"Login"})},"3")]})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(B,{style:{padding:"0 50px",height:"calc(100vh - 153.6px)"},children:Object(a.jsx)("div",{className:"site-layout-content",children:t})})]})},q=c(210),J=c(412),$=c(410),Q=c(103),K=c(66),V=c(417),X=c(404),Z=c(416),ee=c(424),te=c(425),ce=function(){q.a.open({message:"G R E E T I N G S",description:"We welcome you to Tienda de Garage",icon:Object(a.jsx)(ee.a,{style:{color:"#008000"}})})},ae=J.a.Title,ne=function(e){var t=e.history,c=$.a.useForm(),r=Object(O.a)(c,1)[0],s=L().signup,i=Object(n.useState)(null),o=Object(O.a)(i,2),l=o[0],j=o[1];function b(){return(b=Object(u.a)(d.a.mark((function e(c){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(c);case 3:return e.next=5,y(c);case 5:a=e.sent,n=a.data,s(n),t.push("/welcome"),ce(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),j(e.t0.response.data.message);case 16:return e.prev=16,e.finish(16);case 18:case"end":return e.stop()}}),e,null,[[0,12,16,18]])})))).apply(this,arguments)}return Object(a.jsxs)(Q.a,{children:[Object(a.jsxs)(K.a,{span:24,children:[Object(a.jsx)(ae,{level:1,children:"Signup"}),l&&Object(a.jsx)(V.a,{message:l,type:"error",showIcon:!0})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)(K.a,{span:24,children:Object(a.jsxs)($.a,{layout:"vertical",form:r,onFinish:function(e){return b.apply(this,arguments)},children:[Object(a.jsx)($.a.Item,{name:"name",label:"Name:",children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)($.a.Item,{name:"email",label:"Email:",children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)($.a.Item,{name:"password",label:"Password:",children:Object(a.jsx)(Z.a.Password,{})}),Object(a.jsx)(W.a,{type:"primary",htmlType:"submit",block:!0,children:"Signup"}),Object(a.jsx)(X.a,{}),Object(a.jsxs)("div",{style:{"text-align":"center"},children:["or",Object(a.jsx)(X.a,{}),Object(a.jsxs)("a",{href:"/google",children:[Object(a.jsx)(te.a,{}),"oogle"]})]})]})})]})},re=c(211),se=J.a.Title,ie=function(e){var t=e.history,c=$.a.useForm(),r=Object(O.a)(c,1)[0],s=L().login,i=Object(n.useState)(null),o=Object(O.a)(i,2),l=o[0],j=o[1];function b(){return(b=Object(u.a)(d.a.mark((function e(c){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(c),e.next=4,y(c);case 4:a=e.sent,n=a.data,s(n),t.push("/profile"),re.b.success("Welcome"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.dir(e.t0.response.data.message),j(e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(a.jsxs)(Q.a,{children:[Object(a.jsxs)(K.a,{span:24,children:[Object(a.jsx)(se,{level:1,children:"Login"}),l&&Object(a.jsx)(V.a,{message:l,type:"error",showIcon:!0})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)(K.a,{span:24,children:Object(a.jsxs)($.a,{layout:"vertical",form:r,onFinish:function(e){return b.apply(this,arguments)},children:[Object(a.jsx)($.a.Item,{name:"email",label:"Email:",children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)($.a.Item,{name:"password",label:"Password:",children:Object(a.jsx)(Z.a.Password,{})}),Object(a.jsx)(W.a,{type:"primary",block:!0,htmlType:"submit",children:"Login"}),Object(a.jsx)(X.a,{}),Object(a.jsxs)("div",{style:{"text-align":"center"},children:["or",Object(a.jsx)(X.a,{}),Object(a.jsxs)("a",{href:"/google",children:[Object(a.jsx)(te.a,{}),"oogle"]})]})]})})]})},oe=c(411),le=function(e){e.history;var t=L().user;return t?Object(a.jsxs)(Q.a,{children:[Object(a.jsxs)(K.a,{xs:24,sm:24,md:12,children:[Object(a.jsx)("p",{children:"This is your info"}),Object(a.jsxs)(J.a.Title,{level:3,children:[Object(a.jsx)(oe.a,{width:100,src:t.picture}),Object(a.jsx)("br",{}),"Name: ",t.name,Object(a.jsx)("br",{}),"Email: ",t.email,Object(a.jsx)("br",{})]})]}),Object(a.jsx)(X.a,{}),Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("p",{children:"You can edit your info and add pic to yor profile "}),Object(a.jsx)(o.b,{to:"/editUser",children:Object(a.jsx)(W.a,{type:"primary",block:!0,ghost:!0,children:"Edit User"})})]})]}):Object(a.jsx)(l.a,{to:"/"})},je=(c(152),c(405));function de(){return Object(a.jsx)(oe.a,{width:200,src:"open.jpg"})}var ue=function(){var e=L().user;return e?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:" welcome",children:[Object(a.jsx)("h1",{children:"W E L C O M E "}),Object(a.jsx)(X.a,{}),Object(a.jsx)(de,{}),Object(a.jsx)(X.a,{}),Object(a.jsxs)("p",{children:["Greetings ",Object(a.jsx)("b",{children:e.name})]}),Object(a.jsx)("p",{children:"In this app you can create Wishes and Product"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Wishes:"})," things you wanna buy"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Product:"})," the stuff you have and want to sell"]}),Object(a.jsx)(W.a,{type:"primary",ghost:!0,children:Object(a.jsx)(o.b,{to:"/profile",children:"Got it"})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(je.a,{tip:"Loading...",children:Object(a.jsx)(V.a,{message:"This is taking to much time",description:"You may not be signed in, go Home and sing in please",type:"info"})})})},be=c(409),pe=c(418),he=c(426),Oe={background:"#8742AF",padding:"1px"},xe=be.a.Meta,me=J.a.Title,fe=function(e){e.history;var t=L().user,c=Object(n.useState)(null),r=Object(O.a)(c,2),s=r[0],i=r[1];function l(){return(l=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),t?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{style:{padding:"1rem 3rem"},children:[Object(a.jsx)(me,{level:1,children:"Wishes"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"You can create a wish you wish to buy"}),Object(a.jsx)(o.b,{to:"/createWish",children:Object(a.jsx)(W.a,{type:"primary",ghost:!0,children:"Create Wish"})}),Object(a.jsx)(X.a,{})]}),Object(a.jsx)(Q.a,{gutter:[16,24],children:s?s.map((function(e){return Object(a.jsx)(K.a,{className:"gutter-row",span:6,xs:24,sm:24,md:8,children:Object(a.jsx)("div",{style:Oe,children:Object(a.jsxs)(be.a,{title:e.name,actions:[Object(a.jsx)(o.b,{to:"/wish/".concat(e._id),children:Object(a.jsx)(he.a,{},"edit")})],children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Description:"})," ",e.description]}),Object(a.jsx)(oe.a,{src:e.picture}),Object(a.jsx)("div",{children:Object(a.jsx)("br",{})}),Object(a.jsx)(xe,{description:Object(a.jsx)(pe.a,{color:"geekblue",children:e.category})})]},e.id)})},e._id)})):Object(a.jsx)(je.a,{size:"large"})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(je.a,{tip:"Loading...",children:Object(a.jsx)(V.a,{message:"This is taking to much time",description:"You may not be signed in, go Home and sing in please",type:"info"})})})},ge=c(408),ye=c(427),ve=c(428),we="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload";var ke=function(e){var t=e.match.params.wishId,c=$.a.useForm(),r=Object(O.a)(c,1)[0],s=Object(l.g)(),i=Object(n.useState)(null),o=Object(O.a)(i,2),j=o[0],b=o[1],p=Object(n.useState)(null),h=Object(O.a)(p,2),x=h[0],f=h[1],g=Object(n.useState)(null),y=Object(O.a)(g,2),v=y[0],w=y[1],k=Object(n.useState)(null),I=Object(O.a)(k,2),F=I[0],U=I[1];function P(){return(P=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.image=v,e.next=4,T(x._id,t);case 4:s.push("/MyWishes"),re.b.success("Wish edited"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.message),b(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(){return(L=Object(u.a)(d.a.mark((function e(t){var c,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),(c=new FormData).append("file",t),c.append("upload_preset","uploadfilestiendaDeGarage"),e.next=6,m.a.post(we,c);case 6:a=e.sent,n=a.data.secure_url,w(n),U(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:c=e.sent,f(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=Object(a.jsxs)("div",{children:[F?Object(a.jsx)(ye.a,{}):Object(a.jsx)(ve.a,{}),Object(a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});function D(){return(D=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,S(t);case 3:s.push("/MyWishes"),re.b.success("Wish deleted");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Update Wish"}),j&&Object(a.jsx)(V.a,{message:j,type:"error"}),Object(a.jsxs)($.a,{form:r,layout:"vertical",onFinish:function(e){return P.apply(this,arguments)},children:[Object(a.jsx)($.a.Item,{name:"name",label:"Name:",children:Object(a.jsx)(Z.a,{placeholder:x?x.name:"cargando"})}),Object(a.jsx)($.a.Item,{name:"description",label:"Description:",children:Object(a.jsx)(Z.a,{placeholder:x?x.description:"cargando"})}),Object(a.jsx)($.a.Item,{name:"image",label:"Image:",children:Object(a.jsx)(ge.a,{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return L.apply(this,arguments)},className:"avatar-uploader",children:v?Object(a.jsx)("img",{src:v,style:{width:"100%"},alt:"no pic"}):E})}),Object(a.jsx)(W.a,{type:"primary",block:!0,size:"middle",htmlType:"submit",children:"Update"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(W.a,{type:"ghost",size:"small",htmlType:"submit",onClick:function(){return D.apply(this,arguments)},danger:!0,block:!0,children:"Delete"})]})},Ie=c(406),Fe=function(){var e=L().login;function t(){return(t=Object(u.a)(d.a.mark((function t(){var c,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y({name:"test",email:"test@mail.com",password:"test"});case 3:c=t.sent,a=c.data,e(a),l.g.push("/profile"),re.b.success("Welcome"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(W.a,{type:"primary",ghost:!0,onClick:function(){return t.apply(this,arguments)},children:"User for tests"})})},Ce={uno:{height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",backgroundImage:"url(".concat("tasas.jpeg",")"),backgroundSize:"cover"},dos:{height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",backgroundImage:"url(".concat("cosas.jpeg",")"),backgroundSize:"cover"},tres:{height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",backgroundImage:"url(".concat("cosas1.jpeg",")"),backgroundSize:"cover"},cuatro:{height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",backgroundImage:"url(".concat("tools.jpg",")"),backgroundSize:"cover"}},Te=function(){return L().user?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{to:"/profile"})}):Object(a.jsxs)("div",{className:"buttonsHome",children:[Object(a.jsx)("h1",{children:"Tienda de Garage"}),Object(a.jsxs)(Ie.a,{autoplay:!0,children:[Object(a.jsx)("div",{children:Object(a.jsx)("h3",{style:Ce.uno,children:"B U Y"})}),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{style:Ce.dos,children:"S E L L"})}),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{style:Ce.tres,children:"B U Y"})}),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{style:Ce.cuatro,children:"S E L L"})})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)("p",{children:"The most enjoyable experience in purchases and exchanges of chairs, tables, dishes, electronic devices, jugs, glasses, plate, spoons, forks, rulers, pencils, backpacks and other junk you can find in your garage only here with your Tienda de Garage"}),Object(a.jsx)(W.a,{type:"primary",ghost:!0,children:Object(a.jsx)(o.b,{to:"/Signup",children:"Sign up"})}),Object(a.jsx)(X.a,{}),Object(a.jsx)(W.a,{type:"primary",ghost:!0,children:Object(a.jsx)(o.b,{to:"/Login",children:"Login"})}),Object(a.jsx)(X.a,{}),Object(a.jsx)(Fe,{})]})},Se="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload",Ue=J.a.Title,Pe=function(e){var t=e.history,c=$.a.useForm(),r=Object(O.a)(c,1)[0],s=L().setUserUpdtade,i=Object(n.useState)(null),o=Object(O.a)(i,2),l=o[0],j=o[1],b=L().user,p=Object(n.useState)(null),h=Object(O.a)(p,2),x=h[0],f=h[1],g=Object(n.useState)(null),y=Object(O.a)(g,2),v=y[0],w=y[1];function I(){return(I=Object(u.a)(d.a.mark((function e(c){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.image=x,e.next=4,k(c);case 4:a=e.sent,a.data,s(!0),t.push("/profile"),re.b.success("User edited"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),j(e.t0.response.data.message);case 15:return e.prev=15,e.finish(15);case 17:case"end":return e.stop()}}),e,null,[[0,11,15,17]])})))).apply(this,arguments)}function F(){return(F=Object(u.a)(d.a.mark((function e(t){var c,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),(c=new FormData).append("file",t),c.append("upload_preset","uploadfilestiendaDeGarage"),e.next=6,m.a.post(Se,c);case 6:a=e.sent,n=a.data.secure_url,f(n),w(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=Object(a.jsxs)("div",{children:[v?Object(a.jsx)(ye.a,{}):Object(a.jsx)(ve.a,{}),Object(a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return b?Object(a.jsxs)(Q.a,{children:[Object(a.jsxs)(K.a,{span:24,children:[Object(a.jsx)(Ue,{level:1,children:"Edit User"}),l&&Object(a.jsx)(V.a,{message:l,type:"error"})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)(K.a,{span:24,children:Object(a.jsxs)($.a,{layout:"vertical",form:r,onFinish:function(e){return I.apply(this,arguments)},children:[Object(a.jsx)($.a.Item,{name:"email",label:"Email:",children:Object(a.jsx)(Z.a,{placeholder:b.email})}),Object(a.jsx)($.a.Item,{name:"name",label:"Name:",children:Object(a.jsx)(Z.a,{placeholder:b.name})}),"test"===b.name?null:Object(a.jsx)($.a.Item,{name:"password",label:"Password:",children:Object(a.jsx)(Z.a.Password,{})}),Object(a.jsx)($.a.Item,{name:"image",label:"Image:",children:Object(a.jsx)(ge.a,{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return F.apply(this,arguments)},className:"avatar-uploader",children:x?Object(a.jsx)("img",{alt:"not found",src:x,style:{width:"100%"}}):C})}),Object(a.jsx)(W.a,{type:"primary",htmlType:"submit",block:!0,children:"EditUser"})]})})]}):Object(a.jsx)("p",{children:"cargando..."})},Le=c(413),Ee="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload",We=J.a.Title,De=function(e){var t=e.history,c=$.a.useForm(),r=Object(O.a)(c,1)[0],s=L().setUserUpdtade,i=Object(n.useState)(null),o=Object(O.a)(i,2),l=o[0],j=o[1],b=L().user,p=Object(n.useState)(null),h=Object(O.a)(p,2),x=h[0],f=h[1],g=Object(n.useState)(null),y=Object(O.a)(g,2),v=y[0],w=y[1],k=function(e,t){q.a.info({message:"Coincidences found ".concat(t),description:"We have found ".concat(t," products that may be coincidences of your wish"),placement:e})};function F(){return(F=Object(u.a)(d.a.mark((function e(c){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c.image=x,e.next=4,I(c);case 4:a=e.sent,n=a.data,s(!0),n.productCoincidences.length>0&&k("bottomRight",n.productCoincidences.length),t.push("/MyWishes"),re.b.success("".concat(n.name," created")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),j(e.t0.response.data.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function C(){return(C=Object(u.a)(d.a.mark((function e(t){var c,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),(c=new FormData).append("file",t),c.append("upload_preset","uploadfilestiendaDeGarage"),e.next=6,m.a.post(Ee,c);case 6:a=e.sent,n=a.data.secure_url,f(n),w(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=Object(a.jsxs)("div",{children:[v?Object(a.jsx)(ye.a,{}):Object(a.jsx)(ve.a,{}),Object(a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return b?Object(a.jsxs)(Q.a,{children:[Object(a.jsxs)(K.a,{span:24,children:[Object(a.jsx)(We,{level:1,children:"Create Wish"}),Object(a.jsx)("p",{children:"Fill the form to create a wish you desire"}),l&&Object(a.jsx)(V.a,{message:l,type:"error"})]}),Object(a.jsx)(X.a,{}),Object(a.jsx)(K.a,{span:24,children:Object(a.jsxs)($.a,{layout:"vertical",form:r,onFinish:function(e){return F.apply(this,arguments)},children:[Object(a.jsx)($.a.Item,{name:"name",label:"Name:",children:Object(a.jsx)(Z.a,{placeholder:"add a name to you Wish"})}),Object(a.jsx)($.a.Item,{name:"description",label:"Description:",children:Object(a.jsx)(Z.a,{placeholder:"Add description"})}),Object(a.jsx)($.a.Item,{name:"image",label:"Image:",children:Object(a.jsx)(ge.a,{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return C.apply(this,arguments)},children:x?Object(a.jsx)("img",{src:x,style:{width:"100%"}}):T})}),Object(a.jsx)($.a.Item,{name:"category",label:"category:",children:Object(a.jsxs)(Le.a,{initialvalue:"",style:{width:"20%"},children:[Object(a.jsx)(Le.a.Option,{value:"books",children:"Books"}),Object(a.jsx)(Le.a.Option,{value:"electronics",children:"Electronics"}),Object(a.jsx)(Le.a.Option,{value:"clothes",children:"Clothes"}),Object(a.jsx)(Le.a.Option,{value:"other",children:"Other"})]})}),Object(a.jsx)(W.a,{type:"primary",htmlType:"submit",block:!0,children:"Create Wish"})]})})]}):Object(a.jsx)("p",{children:"cargando..."})},_e=m.a.create({baseURL:"/",withCredentials:!0}),Ne=function(){return _e.get("/product/get-user-products")},Me=function(e){return _e.get("/product/get-product-details/".concat(e))},Ae=function(e){return _e.post("/product/create",e)},ze=function(e,t){return _e.put("/product/edit-product/".concat(e),t)},He=function(e){return _e.delete("/product/delete-product/".concat(e))},Ge=function(){return _e.get("product/all")},Ye=J.a.Title,Be=be.a.Meta,Re={background:"#1C84B9",padding:"1px"};var qe=function(){var e=L().user,t=Object(n.useState)(null),c=Object(O.a)(t,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne();case 2:t=e.sent,c=t.data,s(c.products);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),e?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{style:{padding:"1rem 3rem"},children:[Object(a.jsx)(Ye,{level:1,children:"Products"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"From here you can create and see all the products you want to sell"}),Object(a.jsx)(W.a,{type:"primary ",ghost:!0,children:Object(a.jsx)(o.b,{to:"/createProduct",children:"Create Product"})}),Object(a.jsx)(X.a,{})]}),Object(a.jsx)(Q.a,{gutter:[16,24],children:r?r.map((function(e){return Object(a.jsx)(K.a,{className:"gutter-row",span:6,xs:24,sm:24,md:8,children:Object(a.jsx)("div",{style:Re,children:Object(a.jsxs)(be.a,{title:e.name,extra:Object(a.jsx)(o.b,{to:"/product/".concat(e._id),children:"Edit"}),children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Description:"})," ",e.description]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"$"})," ",e.price]}),Object(a.jsx)(oe.a,{src:e.image}),Object(a.jsx)("div",{children:Object(a.jsx)("br",{})}),Object(a.jsx)(Be,{description:Object(a.jsx)(pe.a,{color:"cyan",children:e.category})})]})})},e._id)})):Object(a.jsx)(je.a,{size:"large"})})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(je.a,{tip:"Loading...",children:Object(a.jsx)(V.a,{message:"This is taking to much time",description:"You may not be signed in, go Home and sing in please",type:"info"})})})},Je="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload";var $e=function(e){var t=e.history,c=Object(n.useState)(null),r=Object(O.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(null),l=Object(O.a)(o,2),j=l[0],b=l[1],p=Object(n.useState)(null),h=Object(O.a)(p,2),x=h[0],f=h[1],g=function(e,t){q.a.info({message:"Coincidences found ".concat(t),description:"We have found ".concat(t," wishes that may be coincidences of your product"),placement:e})};function y(){return(y=Object(u.a)(d.a.mark((function e(c){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!0,Object.entries(c).map((function(e){(void 0===e[1]&&(re.b.error("Add ".concat(e[0].toUpperCase()," field is empty")),a=!1),"price"==e[0])&&(f("All the fields must be filled and the price must have numbers,not letters!"),"number"!==typeof Number(e[1])&&(a=!1))})),!a){e.next=11;break}return c.image=s,e.next=6,Ae(c);case 6:n=e.sent,(r=n.data).wishCoincidences.length>0&&g("bottomRight",r.wishCoincidences.length),t.push("/MyProducts"),re.b.success("".concat(r.name," created"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(u.a)(d.a.mark((function e(t){var c,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),(c=new FormData).append("file",t),c.append("upload_preset","uploadfilestiendaDeGarage"),e.next=7,m.a.post(Je,c);case 7:a=e.sent,n=a.data.secure_url,i(n),b(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.dir(e.t0.response.data.message),f(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var w=Object(a.jsxs)("div",{children:[j?Object(a.jsx)(ye.a,{}):Object(a.jsx)(ve.a,{}),Object(a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)($.a,{layout:"vertical",onFinish:function(e){return y.apply(this,arguments)},children:[Object(a.jsx)("h1",{children:"Create your product!"}),x&&Object(a.jsx)(V.a,{message:x,type:"error"}),Object(a.jsx)($.a.Item,{name:"name",label:"Title:",children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)($.a.Item,{name:"description",label:"Description:",children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)($.a.Item,{name:"price",label:"Price:",children:Object(a.jsx)(Z.a,{})}),Object(a.jsx)($.a.Item,{name:"image",label:"Image:",children:Object(a.jsx)(ge.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(e){return v.apply(this,arguments)},children:s?Object(a.jsx)("img",{src:s,alt:"pic",style:{width:"50%"}}):w})}),Object(a.jsx)($.a.Item,{name:"category",label:"category:",children:Object(a.jsxs)(Le.a,{initialvalue:"",style:{width:"20%"},children:[Object(a.jsx)(Le.a.Option,{value:"books",children:"Books"}),Object(a.jsx)(Le.a.Option,{value:"electronics",children:"Electronics"}),Object(a.jsx)(Le.a.Option,{value:"clothes",children:"Clothes"}),Object(a.jsx)(Le.a.Option,{value:"other",children:"Other"})]})}),Object(a.jsx)(W.a,{type:"primary",block:!0,size:"middle",htmlType:"submit",children:"Create"})]})})},Qe="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload";var Ke=function(e){var t=e.match.params.productId,c=$.a.useForm(),r=Object(O.a)(c,1)[0],s=Object(l.g)(),i=Object(n.useState)(null),o=Object(O.a)(i,2),j=o[0],b=o[1],p=Object(n.useState)(null),h=Object(O.a)(p,2),x=h[0],f=h[1],g=Object(n.useState)(null),y=Object(O.a)(g,2),v=y[0],w=y[1],k=Object(n.useState)(null),I=Object(O.a)(k,2),F=I[0],C=I[1];function T(){return(T=Object(u.a)(d.a.mark((function e(c){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!0,Object.entries(c).map((function(e){(void 0===e[1]&&(re.b.error("add ".concat(e[0].toUpperCase()," field is empty")),a=!1),"price"==e[0])&&(b("All the fields must be filled and the price must have numbers,not letters!"),"number"!==typeof Number(e[1])&&(a=!1))})),!a){e.next=15;break}return e.prev=3,c.image=v,e.next=7,ze(t,c);case 7:s.push("/MyProducts"),re.b.success("Product edited"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),b(e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}function S(){return(S=Object(u.a)(d.a.mark((function e(t){var c,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,C(!0),(c=new FormData).append("file",t),c.append("upload_preset","uploadfilestiendaDeGarage"),e.next=7,m.a.post(Qe,c);case 7:a=e.sent,n=a.data.secure_url,w(n),C(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),b(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(x),e.next=3,Me(t);case 3:c=e.sent,a=c.data,f(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=Object(a.jsxs)("div",{children:[F?Object(a.jsx)(ye.a,{}):Object(a.jsx)(ve.a,{}),Object(a.jsx)("div",{style:{marginTop:8},children:"Upload"})]});function P(){return(P=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,He(t);case 2:s.push("/MyProducts"),re.b.success("Product deleted");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return x?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)($.a,{form:r,layout:"vertical",onFinish:function(e){return T.apply(this,arguments)},children:[Object(a.jsx)("h1",{children:"Edit your product"}),j&&Object(a.jsx)(V.a,{message:j,type:"error"}),Object(a.jsx)($.a.Item,{name:"name",label:"Title:",children:Object(a.jsx)(Z.a,{placeholder:x.name})}),Object(a.jsx)($.a.Item,{name:"description",label:"Description:",children:Object(a.jsx)(Z.a,{placeholder:x.description})}),Object(a.jsx)($.a.Item,{name:"price",label:"Price:",children:Object(a.jsx)(Z.a,{placeholder:x.price})}),Object(a.jsx)($.a.Item,{name:"category",label:"category:",children:Object(a.jsxs)(Le.a,{initialvalue:"available",style:{width:"20%"},children:[Object(a.jsx)(Le.a.Option,{value:"books",children:"Books"}),Object(a.jsx)(Le.a.Option,{value:"electronics",children:"Electronics"}),Object(a.jsx)(Le.a.Option,{value:"clothes",children:"Clothes"}),Object(a.jsx)(Le.a.Option,{value:"other",children:"Other"})]})}),Object(a.jsx)($.a.Item,{name:"taggs",label:"taggs tags:",children:Object(a.jsx)(Le.a,{mode:"tags",style:{width:"100%"}})}),Object(a.jsx)($.a.Item,{name:"image",label:"Image:",children:Object(a.jsx)(ge.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(e){return S.apply(this,arguments)},children:v?Object(a.jsx)("img",{src:v,style:{width:"50%"}}):U})}),Object(a.jsx)(W.a,{type:"primary",block:!0,size:"middle",htmlType:"submit",children:"Update"}),Object(a.jsx)("p",{})]}),Object(a.jsx)("br",{}),Object(a.jsx)(W.a,{type:"ghost",size:"small",htmlType:"submit",onClick:function(){return P.apply(this,arguments)},danger:!0,block:!0,children:"Delete"})]}):Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"...Loading"})})},Ve=function(e){var t=e.product,c=Object(i.b)().addItem;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(W.a,{type:"dashed",ghost:!0,style:{color:"#9e1068"},onClick:function(){return c(t)},children:"Add to cart"})})},Xe=be.a.Meta,Ze={background:"#1D99A9",padding:"1px"};var et=function(e){var t=e.products,c=void 0===t?[]:t;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{style:{padding:"1rem 2rem"},children:Object(a.jsx)(Q.a,{gutter:[16,24],children:c?c.map((function(e){return Object(a.jsx)(K.a,{className:"gutter-row",span:6,xs:24,sm:24,md:8,children:Object(a.jsxs)("div",{style:Ze,children:[Object(a.jsx)("div",{style:{display:"none"},children:e.id=e._id}),Object(a.jsxs)(be.a,{title:e.name,children:[Object(a.jsx)(oe.a,{src:e.image}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Description:"})," ",e.description]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"$"})," ",e.price]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(H.a.div,{whileHover:{scale:1.2,rotate:1},whileTap:{scale:.95},children:Object(a.jsx)(Ve,{product:e})}),Object(a.jsx)("br",{})]}),Object(a.jsx)(Xe,{description:Object(a.jsx)(pe.a,{color:"gold",children:e.category})})]})]})},e._id)})):Object(a.jsx)(je.a,{size:"large"})})})})},tt=function(e){var t=e.input,c=e.onChange;return Object(a.jsx)("input",{style:{width:"20rem",background:"#303030",border:"none",padding:"0.5rem",color:"#1D99A9"},value:t,placeholder:"search product",onChange:function(e){return c(e.target.value)}},"random1")},ct=J.a.Title;var at=function(e){var t=L().user,c=Object(n.useState)(""),r=Object(O.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(null),l=Object(O.a)(o,2),j=l[0],b=l[1],p=Object(n.useState)(null),h=Object(O.a)(p,2),x=h[0],m=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ge();case 2:t=e.sent,c=t.data,b(c),m(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var f=function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=x.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),i(t),b(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(ct,{level:1,children:"Products"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"From here you can all the products for you to buy"}),Object(a.jsx)(tt,{input:s,onChange:f}),Object(a.jsx)(X.a,{})]}),Object(a.jsx)(et,{products:j})]})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(je.a,{tip:"Loading...",children:Object(a.jsx)(V.a,{message:"This is taking to much time",description:"You may not be signed in, go Home and sing in please",type:"info"})})})},nt=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)(R,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/",component:Te,exact:!0}),Object(a.jsx)(l.b,{path:"/edituser",component:Pe,exact:!0}),Object(a.jsx)(l.b,{path:"/createWish",component:De,exact:!0}),Object(a.jsx)(l.b,{path:"/login",component:ie,exact:!0}),Object(a.jsx)(l.b,{path:"/signup",component:ne,exact:!0}),Object(a.jsx)(l.b,{path:"/profile",component:le,exact:!0}),Object(a.jsx)(l.b,{path:"/welcome",component:ue,exact:!0}),Object(a.jsx)(l.b,{path:"/MyWishes",component:fe,exact:!0}),Object(a.jsx)(l.b,{path:"/wish/:wishId",component:ke,exact:!0}),Object(a.jsx)(l.b,{path:"/createProduct",component:$e,exact:!0}),Object(a.jsx)(l.b,{path:"/MyProducts",component:qe,exact:!0}),Object(a.jsx)(l.b,{path:"/product/:productId",component:Ke,exact:!0}),Object(a.jsx)(l.b,{path:"/ProductsAll",component:at,exact:!0})]})})})},rt=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,429)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(399);s.a.render(Object(a.jsx)(P,{children:Object(a.jsx)(i.a,{children:Object(a.jsx)(nt,{})})}),document.getElementById("root")),rt()}},[[400,1,2]]]);
//# sourceMappingURL=main.f5f99e65.chunk.js.map