(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{173:function(e,t,a){},211:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(33),i=a.n(s),l=(a(211),a(36)),o=a(41),j=a(10),u=a.n(j),p=a(26),d=a(382),b=a(391),h=a(108),O=a(18),x=a(47),m=a.n(x),f=m.a.create({baseURL:"/",withCredentials:!0}),v=function(e){return f.post("/signup",e)},g=function(e){return f.post("/login",e)},y=function(){return f.get("/current-user")},w=function(){return f.get("/logout")},I=function(e){return f.put("/editProfile",e)},k=function(e){return f.post("/product/create",e)},S=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/product/get-user-products");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/product/get-product-details/".concat(t));case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return f.put("/product/edit-product/".concat(e),t)},T=Object(n.createContext)(),P=function(e){var t=Object(n.useState)(null),a=Object(O.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(!1),l=Object(O.a)(i,2),o=l[0],j=l[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,a=t.data,d(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),j(!1)}),[o]);var d=function(e){s(e)},b={user:r,login:d,logout:function(){s(null)},signup:function(e){s(e)},setUserUpdtade:j,addProfilePic:function(e){return s(Object(h.a)(Object(h.a)({},r),{},{img:e}))}};return Object(c.jsx)(T.Provider,Object(h.a)(Object(h.a)({},e),{},{value:b}))},_=function(){return Object(n.useContext)(T)},C=d.a.Header,D=d.a.Content,L=d.a.Footer,E=function(e){var t=e.children,a=_(),n=a.user,s=a.logout;function i(){return(i=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:s();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsxs)(d.a,{className:"layout",children:[Object(c.jsxs)(C,{children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsxs)(b.a,{theme:"dark",mode:"horizontal",children:[Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(l.b,{to:"/",children:"Home"})},"1"),n?Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(l.b,{to:"/profile",children:"Profile"})},"4"),Object(c.jsx)(b.a.Item,{onClick:function(){return i.apply(this,arguments)},children:"Logout"},"5"),Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(l.b,{to:"/viewProducts",children:"Wishes"})},"6")]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(l.b,{to:"/signup",children:"Signup"})},"2"),Object(c.jsx)(b.a.Item,{children:Object(c.jsx)(l.b,{to:"/login",children:"Login"})},"3")]})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)(D,{style:{padding:"0 50px",height:"calc(100vh - 153.6px)"},children:Object(c.jsx)("div",{className:"site-layout-content",children:t})}),Object(c.jsx)(L,{style:{textAlign:"center"}})]})},M=a(388),N=a(386),G=a(98),z=a(64),A=a(383),R=a(392),W=a(106),B=M.a.Title,H=function(e){var t=e.history,a=N.a.useForm(),r=Object(O.a)(a,1)[0],s=_().signup,i=Object(n.useState)(null),l=Object(O.a)(i,2),o=l[0],j=l[1];function d(){return(d=Object(p.a)(u.a.mark((function e(a){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(a);case 3:c=e.sent,n=c.data,s(n),t.push("/login"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),j(e.t0.response.data.message);case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,9,13,15]])})))).apply(this,arguments)}return Object(c.jsxs)(G.a,{children:[Object(c.jsxs)(z.a,{span:24,children:[Object(c.jsx)(B,{level:1,children:"Signup"}),o&&Object(c.jsx)("p",{children:o})]}),Object(c.jsx)(A.a,{}),Object(c.jsx)(z.a,{span:24,children:Object(c.jsxs)(N.a,{layout:"vertical",form:r,onFinish:function(e){return d.apply(this,arguments)},children:[Object(c.jsx)(N.a.Item,{name:"email",label:"Email:",children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(N.a.Item,{name:"password",label:"Password:",children:Object(c.jsx)(R.a.Password,{})}),Object(c.jsx)(W.a,{type:"primary",htmlType:"submit",children:"Signup"})]})})]})},q=M.a.Title,J=function(e){var t=e.history,a=N.a.useForm(),r=Object(O.a)(a,1)[0],s=_().login,i=Object(n.useState)(null),l=Object(O.a)(i,2),o=l[0],j=l[1];function d(){return(d=Object(p.a)(u.a.mark((function e(a){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(a);case 3:c=e.sent,n=c.data,s(n),t.push("/profile"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.dir(e.t0.response.data.message),j(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(c.jsxs)(G.a,{children:[Object(c.jsxs)(z.a,{span:24,children:[Object(c.jsx)(q,{level:1,children:"Login"}),o&&Object(c.jsx)("p",{children:o})]}),Object(c.jsx)(A.a,{}),Object(c.jsx)(z.a,{span:24,children:Object(c.jsxs)(N.a,{layout:"vertical",form:r,onFinish:function(e){return d.apply(this,arguments)},children:[Object(c.jsx)(N.a.Item,{name:"email",label:"Email:",children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(N.a.Item,{name:"password",label:"Password:",children:Object(c.jsx)(R.a.Password,{})}),Object(c.jsx)(W.a,{type:"primary",block:!0,htmlType:"submit",children:"Login"})]})})]})},K=a(390),Q=function(e){e.history;var t=_().user;return t?Object(c.jsxs)(G.a,{children:[Object(c.jsx)(z.a,{xs:24,sm:24,md:12,children:Object(c.jsxs)(M.a.Title,{level:3,children:[Object(c.jsx)(K.a,{src:t.picture}),Object(c.jsx)("br",{}),"Profile: ",t.email,Object(c.jsx)("br",{}),"ID: ",t._id,Object(c.jsx)("br",{})]})}),Object(c.jsx)(A.a,{}),Object(c.jsx)(l.b,{to:"/editUser",children:Object(c.jsx)(W.a,{type:"dashed",block:!0,children:"Edit User"})}),Object(c.jsx)(A.a,{}),Object(c.jsx)(l.b,{to:"/createProduct",children:Object(c.jsx)(W.a,{type:"dashed",block:!0,children:"Create a wish"})}),Object(c.jsx)(W.a,{type:"dashed",children:Object(c.jsx)(l.b,{to:"/itemForm",children:"createItem"})}),Object(c.jsx)(W.a,{type:"primary",children:Object(c.jsx)(l.b,{to:"/MyItems",children:"My Items"})})]}):Object(c.jsx)(o.a,{to:"/"})},V=a(385),X=(a(204),a(387)),Y=a(394),Z={background:"#800080",padding:"10px"},$=V.a.Meta,ee=function(e){e.history;var t=_().user,a=Object(n.useState)(null),r=Object(O.a)(a,2),s=r[0],i=r[1];function j(){return(j=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),t?Object(c.jsxs)("div",{children:[Object(c.jsx)(A.a,{orientation:"left",children:"Wishes"}),Object(c.jsx)(G.a,{gutter:16,children:null===s||void 0===s?void 0:s.map((function(e){return Object(c.jsx)(z.a,{className:"gutter-row",span:6,children:Object(c.jsx)("div",{style:Z,children:Object(c.jsx)(V.a,{cover:Object(c.jsx)(X.a,{src:e.picture}),actions:[Object(c.jsx)(l.b,{to:"/product/".concat(e._id),children:Object(c.jsx)(Y.a,{},"edit")})],children:Object(c.jsx)($,{title:e.name,description:e.description})},e.id)})},e._id)}))})]}):Object(c.jsx)(o.a,{to:"/"})},te=a(393),ae=a(384),ce=a(395),ne=a(396),re="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload";var se=function(e){var t=e.match.params.productId,a=N.a.useForm(),r=Object(O.a)(a,1)[0],s=Object(o.g)(),i=Object(n.useState)(null),l=Object(O.a)(i,2),j=l[0],d=l[1],b=Object(n.useState)(null),h=Object(O.a)(b,2),x=h[0],f=h[1],v=Object(n.useState)(null),g=Object(O.a)(v,2),y=g[0],w=g[1],I=Object(n.useState)(null),k=Object(O.a)(I,2),S=k[0],T=k[1];function P(){return(P=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.image=y,e.next=4,F(x._id,t);case 4:s.push("/viewProducts"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message),d(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(){return(_=Object(p.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),(a=new FormData).append("file",t),a.append("upload_preset","uploadfilestiendaDeGarage"),e.next=6,m.a.post(re,a);case 6:c=e.sent,n=c.data.secure_url,w(n),T(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:a=e.sent,f(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var C=Object(c.jsxs)("div",{children:[S?Object(c.jsx)(ce.a,{}):Object(c.jsx)(ne.a,{}),Object(c.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Update Product"}),j&&Object(c.jsx)(te.a,{message:j,type:"error"}),Object(c.jsxs)(N.a,{form:r,layout:"vertical",onFinish:function(e){return P.apply(this,arguments)},children:[Object(c.jsx)(N.a.Item,{name:"name",label:"Name:",children:Object(c.jsx)(R.a,{placeholder:x?x.name:"cargando"})}),Object(c.jsx)(N.a.Item,{name:"description",label:"Description:",children:Object(c.jsx)(R.a,{placeholder:x?x.description:"cargando"})}),Object(c.jsx)(N.a.Item,{name:"image",label:"Image:",children:Object(c.jsx)(ae.a,{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return _.apply(this,arguments)},className:"avatar-uploader",children:y?Object(c.jsx)("img",{src:y,style:{width:"100%"}}):C})}),Object(c.jsx)(W.a,{type:"primary",block:!0,size:"middle",htmlType:"submit",children:"Update"})]})]})};a(173);function ie(){return Object(c.jsx)(X.a,{width:400,src:"https://www.itl.cat/pngfile/big/327-3275501_second-hand-furniture-stores-guide-elegant-garage-sale.jpg"})}var le=function(){return _().user?Object(c.jsx)(o.a,{to:"/profile"}):Object(c.jsxs)("div",{className:"site-button-ghost-wrapper",children:[Object(c.jsx)("h1",{children:"Mr Garage"}),Object(c.jsx)(ie,{}),Object(c.jsx)(A.a,{}),Object(c.jsx)("p",{children:"La experciencia m\xe1s amena en compras e intercambios de sillas, mesas, trastos, aparatos electronicos, jarras vasos, plato, cucharas, tenedores reglas, l\xe1pizes, mochilas y dem\xe1s chunches que puedas encontrar en tu Gargage s\xf3lo aqu\xed con MR GARAGE"}),Object(c.jsx)(W.a,{type:"primary",ghost:!0,children:Object(c.jsx)(l.b,{to:"/Signup",children:"Sign up"})}),Object(c.jsx)(A.a,{}),Object(c.jsx)(W.a,{type:"primary",ghost:!0,children:Object(c.jsx)(l.b,{to:"/Login",children:"Login"})})]})},oe="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload",je=M.a.Title,ue=function(e){var t=e.history,a=N.a.useForm(),r=Object(O.a)(a,1)[0],s=_().setUserUpdtade,i=Object(n.useState)(null),l=Object(O.a)(i,2),o=l[0],j=l[1],d=_().user,b=Object(n.useState)(null),h=Object(O.a)(b,2),x=h[0],f=h[1],v=Object(n.useState)(null),g=Object(O.a)(v,2),y=g[0],w=g[1];function k(){return(k=Object(p.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.image=x,e.next=4,I(a);case 4:c=e.sent,c.data,s(!0),t.push("/profile"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),j(e.t0.response.data.message);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,10,14,16]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),(a=new FormData).append("file",t),a.append("upload_preset","uploadfilestiendaDeGarage"),e.next=6,m.a.post(oe,a);case 6:c=e.sent,n=c.data.secure_url,f(n),w(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=Object(c.jsxs)("div",{children:[y?Object(c.jsx)(ce.a,{}):Object(c.jsx)(ne.a,{}),Object(c.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return d?Object(c.jsxs)(G.a,{children:[Object(c.jsxs)(z.a,{span:24,children:[Object(c.jsx)(je,{level:1,children:"Edit User"}),o&&Object(c.jsx)(te.a,{message:o,type:"error"})]}),Object(c.jsx)(A.a,{}),Object(c.jsx)(z.a,{span:24,children:Object(c.jsxs)(N.a,{layout:"vertical",form:r,onFinish:function(e){return k.apply(this,arguments)},children:[Object(c.jsx)(N.a.Item,{name:"email",label:"Email:",children:Object(c.jsx)(R.a,{placeholder:d.email})}),Object(c.jsx)(N.a.Item,{name:"password",label:"Password:",children:Object(c.jsx)(R.a.Password,{})}),Object(c.jsx)(N.a.Item,{name:"image",label:"Image:",children:Object(c.jsx)(ae.a,{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return S.apply(this,arguments)},className:"avatar-uploader",children:x?Object(c.jsx)("img",{src:x,style:{width:"100%"}}):U})}),Object(c.jsx)(W.a,{type:"primary",htmlType:"submit",block:!0,children:"EditUser"})]})})]}):Object(c.jsx)("p",{children:"cargando..."})},pe="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload",de=M.a.Title,be=function(e){var t=e.history,a=N.a.useForm(),r=Object(O.a)(a,1)[0],s=_().setUserUpdtade,i=Object(n.useState)(null),l=Object(O.a)(i,2),o=l[0],j=l[1],d=_().user,b=Object(n.useState)(null),h=Object(O.a)(b,2),x=h[0],f=h[1],v=Object(n.useState)(null),g=Object(O.a)(v,2),y=g[0],w=g[1];function I(){return(I=Object(p.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.image=x,e.next=4,k(a);case 4:c=e.sent,c.data,s(!0),t.push("/viewProducts"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),j(e.t0.response.data.message);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,10,14,16]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),(a=new FormData).append("file",t),a.append("upload_preset","uploadfilestiendaDeGarage"),e.next=6,m.a.post(pe,a);case 6:c=e.sent,n=c.data.secure_url,f(n),w(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=Object(c.jsxs)("div",{children:[y?Object(c.jsx)(ce.a,{}):Object(c.jsx)(ne.a,{}),Object(c.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return d?Object(c.jsxs)(G.a,{children:[Object(c.jsxs)(z.a,{span:24,children:[Object(c.jsx)(de,{level:1,children:"Create Wish"}),Object(c.jsxs)("p",{children:["Hi user with the email ",d.email," fill the form to create a product you desire"]}),o&&Object(c.jsx)(te.a,{message:o,type:"error"})]}),Object(c.jsx)(A.a,{}),Object(c.jsx)(z.a,{span:24,children:Object(c.jsxs)(N.a,{layout:"vertical",form:r,onFinish:function(e){return I.apply(this,arguments)},children:[Object(c.jsx)(N.a.Item,{name:"name",label:"Name:",children:Object(c.jsx)(R.a,{placeholder:"add a name to you Wish"})}),Object(c.jsx)(N.a.Item,{name:"description",label:"Description:",children:Object(c.jsx)(R.a,{placeholder:"Add description"})}),Object(c.jsx)(N.a.Item,{name:"image",label:"Image:",children:Object(c.jsx)(ae.a,{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:function(e){return S.apply(this,arguments)},children:x?Object(c.jsx)("img",{src:x,style:{width:"100%"}}):U})}),Object(c.jsx)(W.a,{type:"primary",htmlType:"submit",block:!0,children:"Create Product"})]})})]}):Object(c.jsx)("p",{children:"cargando..."})},he=m.a.create({baseURL:"http://localhost:3000",withCredentials:!0}),Oe=function(){return he.get("/item/get-user-items")},xe=function(e){return he.get("/item/get-item-details/".concat(e))},me=function(e){return he.post("/item/create",e)},fe=function(e,t){return he.put("/item/edit-item/".concat(e),t)},ve=function(e){return he.delete("/item/delete-item/".concat(e))},ge=M.a.Title;M.a.Text;var ye=function(){var e=Object(n.useState)(null),t=Object(O.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe();case 2:t=e.sent,a=t.data,r(a.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsxs)("div",{style:{padding:"1rem 3rem"},children:[Object(c.jsx)(ge,{level:1,children:"Items"}),Object(c.jsx)(G.a,{gutter:[16,24],children:null===a||void 0===a?void 0:a.map((function(e){return Object(c.jsx)(z.a,{xs:24,sm:24,md:12,children:Object(c.jsxs)(V.a,{title:e.title,extra:Object(c.jsx)(l.b,{to:"/item/".concat(e._id),children:"Edit"}),children:[Object(c.jsx)("p",{children:e.status}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("p",{children:e.price}),Object(c.jsx)("p",{children:e.category}),Object(c.jsx)(X.a,{src:e.image})]})},e._id)}))})]})},we=a(389),Ie=a(203),ke="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload";we.a.Option;var Se=function(e){var t=e.history,a=Object(n.useState)(null),r=Object(O.a)(a,2),s=r[0],i=r[1],l=Object(n.useState)(null),o=Object(O.a)(l,2),j=o[0],d=o[1],b=Object(n.useState)(null),h=Object(O.a)(b,2),x=(h[0],h[1]);function f(){return(f=Object(p.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!0,Object.entries(a).map((function(e){void 0===e[1]&&(Ie.b.error("Add ".concat(e[0].toUpperCase()," field is empty")),c=!1)})),!c){e.next=9;break}return a.image=s,console.log(a),e.next=7,me(a);case 7:console.log(s),t.push("/MyItems");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),(a=new FormData).append("file",t),a.append("upload_preset","uploadfilestiendaDeGarage"),e.next=7,m.a.post(ke,a);case 7:c=e.sent,n=c.data.secure_url,i(n),d(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.dir(e.t0.response.data.message),x(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var g=Object(c.jsxs)("div",{children:[j?Object(c.jsx)(ce.a,{}):Object(c.jsx)(ne.a,{}),Object(c.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(N.a,{layout:"vertical",onFinish:function(e){return f.apply(this,arguments)},children:[Object(c.jsx)("h1",{children:"Create your item!"}),Object(c.jsx)(N.a.Item,{name:"title",label:"Title:",children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(N.a.Item,{name:"description",label:"Description:",children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(N.a.Item,{name:"price",label:"Price:",children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(N.a.Item,{name:"image",label:"Image:",children:Object(c.jsx)(ae.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(e){return v.apply(this,arguments)},children:s?Object(c.jsx)("img",{src:s,style:{width:"50%"}}):g})}),Object(c.jsx)(N.a.Item,{name:"status",label:"Status:",children:Object(c.jsxs)(we.a,{initialvalue:"available",style:{width:"20%"},children:[Object(c.jsx)(we.a.Option,{value:"available",children:"available"}),Object(c.jsx)(we.a.Option,{value:"sold",children:"Sold"})]})}),Object(c.jsx)(N.a.Item,{name:"category",label:"Category tags:",children:Object(c.jsx)(we.a,{mode:"tags",style:{width:"100%"}})}),Object(c.jsx)(W.a,{type:"primary",block:!0,size:"middle",htmlType:"submit",children:"Create"})]})})},Ue="https://api.cloudinary.com/v1_1/lab-file-upload2/image/upload";var Fe=function(e){var t=e.match.params.itemId,a=N.a.useForm(),r=Object(O.a)(a,1)[0],s=Object(o.g)(),i=Object(n.useState)(null),j=Object(O.a)(i,2),d=(j[0],j[1]),b=Object(n.useState)(null),h=Object(O.a)(b,2),x=h[0],f=h[1],v=Object(n.useState)(null),g=Object(O.a)(v,2),y=g[0],w=g[1],I=Object(n.useState)(null),k=Object(O.a)(I,2),S=k[0],U=k[1];function F(){return(F=Object(p.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=!0,Object.entries(a).map((function(e){void 0===e[1]&&(Ie.b.error("add ".concat(e[0].toUpperCase()," field is empty")),c=!1),console.log(c)})),!c){e.next=14;break}return e.prev=3,a.image=y,e.next=7,fe(t,a);case 7:s.push("/MyItems"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),d(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function T(){return(T=Object(p.a)(u.a.mark((function e(t){var a,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),(a=new FormData).append("file",t),a.append("upload_preset","uploadfilestiendaDeGarage"),e.next=7,m.a.post(Ue,a);case 7:c=e.sent,n=c.data.secure_url,w(n),U(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),d(e.t0.response.data.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(x),e.next=3,xe(t);case 3:a=e.sent,c=a.data,f(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=Object(c.jsxs)("div",{children:[S?Object(c.jsx)(ce.a,{}):Object(c.jsx)(ne.a,{}),Object(c.jsx)("div",{style:{marginTop:8},children:"Upload"})]});function _(){return(_=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve(t);case 2:s.push("/MyItems");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return x?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(N.a,{form:r,layout:"vertical",onFinish:function(e){return F.apply(this,arguments)},children:[Object(c.jsx)(N.a.Item,{name:"title",label:"Title:",children:Object(c.jsx)(R.a,{placeholder:x.title})}),Object(c.jsx)(N.a.Item,{name:"description",label:"Description:",children:Object(c.jsx)(R.a,{placeholder:x.description})}),Object(c.jsx)(N.a.Item,{name:"price",label:"Price:",children:Object(c.jsx)(R.a,{placeholder:x.price})}),Object(c.jsx)(N.a.Item,{name:"status",label:"Status:",children:Object(c.jsxs)(we.a,{initialvalue:"available",style:{width:"20%"},children:[Object(c.jsx)(we.a.Option,{value:"available",children:"available"}),Object(c.jsx)(we.a.Option,{value:"sold",children:"Sold"})]})}),Object(c.jsx)(N.a.Item,{name:"category",label:"Category tags:",children:Object(c.jsx)(we.a,{mode:"tags",style:{width:"100%"}})}),Object(c.jsx)(N.a.Item,{name:"image",label:"Image:",children:Object(c.jsx)(ae.a,{name:"image",showUploadList:!1,beforeUpload:function(e){return T.apply(this,arguments)},children:y?Object(c.jsx)("img",{src:y,style:{width:"50%"}}):P})}),Object(c.jsx)(W.a,{type:"primary",block:!0,size:"middle",htmlType:"submit",children:"Update"}),Object(c.jsxs)(l.b,{to:"/MyItems",children:[Object(c.jsx)(W.a,{type:"primary",size:"small",htmlType:"submit",children:"Back"}),Object(c.jsx)("br",{}),Object(c.jsx)(W.a,{type:"ghost",size:"small",htmlType:"submit",onClick:function(){return _.apply(this,arguments)},danger:!0,block:!0,children:"Delete"})]})]})}):Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"...Loading"})})},Te=function(){return Object(c.jsx)(l.a,{children:Object(c.jsx)(E,{children:Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/",component:le,exact:!0}),Object(c.jsx)(o.b,{path:"/edituser",component:ue,exact:!0}),Object(c.jsx)(o.b,{path:"/createProduct",component:be,exact:!0}),Object(c.jsx)(o.b,{path:"/login",component:J,exact:!0}),Object(c.jsx)(o.b,{path:"/signup",component:H,exact:!0}),Object(c.jsx)(o.b,{path:"/profile",component:Q,exact:!0}),Object(c.jsx)(o.b,{path:"/viewProducts",component:ee,exact:!0}),Object(c.jsx)(o.b,{path:"/product/:productId",component:se,exact:!0}),Object(c.jsx)(o.b,{path:"/itemForm",component:Se,exact:!0}),Object(c.jsx)(o.b,{path:"/MyItems",component:ye,exact:!0}),Object(c.jsx)(o.b,{path:"/item/:itemId",component:Fe,exact:!0})]})})})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,397)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(379);i.a.render(Object(c.jsx)(P,{children:Object(c.jsx)(Te,{})}),document.getElementById("root")),Pe()}},[[380,1,2]]]);
//# sourceMappingURL=main.156a850b.chunk.js.map