(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={nav:"Navbar_nav__2I1QF",item:"Navbar_item__227ro",activeLink:"Navbar_activeLink__1O0dQ",navimg:"Navbar_navimg__1ZtQy"}},107:function(e,t,n){e.exports=n.p+"static/media/userPhoto.8e5ac0ea.jpg"},12:function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s});var a=n(132),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0a43845d-8261-4610-989b-1d10430025c3"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},i={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},128:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(41),r=n(9),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t){e.exports="data:image/gif;base64,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"},163:function(e,t,n){e.exports=n(291)},168:function(e,t,n){},169:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return g}),n.d(t,"c",function(){return A});var a=n(55),r=n(0),o=n.n(r),c=n(49),i=n.n(c),s=n(89),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:i.a.formControl+" "+(c?i.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,n)))},g=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},A=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(s.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",c)}},291:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(65),c=n.n(o),i=(n(168),n(35)),s=n(36),u=n(38),l=n(37),g=n(39),A=(n(169),n(10)),p=n.n(A),E=n(13),m=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(E.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(E.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(E.b,{to:"/Users",activeClassName:p.a.activeLink},"Users")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(E.b,{to:"/Navbar",activeClassName:p.a.activeLink},"News")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(E.b,{to:"/Navbar",activeClassName:p.a.activeLink},"Music")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},r.a.createElement(E.b,{to:"/Navbar",activeClassName:p.a.activeLink},"Settings")),r.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active," ")},r.a.createElement(E.b,{to:"/Navbar",activeClassName:p.a.activeLink},"Post1")))},h=n(11),f=n(18),d=n(6),C=n.n(d),w=n(15),I=n(41),B=n(9),Q=n(12),b=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(B.a)({},e,a):e})},S={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},O=function(e){return{type:"FOLLOW",userid:e}},R=function(e){return{type:"UNFOLLOW",userid:e}},U=function(e){return{type:"SET_CURRENTPAGE",currentPage:e}},F=function(e){return{type:"TOOGGLE_IS_fETCHING",isFetching:e}},j=function(e,t){return{type:"TOOGGLE_IS_fOLLOWING_PROGRESS",isFetching:e,userid:t}},D=function(){var e=Object(w.a)(C.a.mark(function e(t,n,a,r){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(j(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(B.a)({},e,{users:b(e.users,t.userid,"id",{followed:!0})});case"UNFOLLOW":return Object(B.a)({},e,{users:b(e.users,t.userid,"id",{followed:!1})});case"SET_USERS":return Object(B.a)({},e,{users:t.users});case"SET_CURRENTPAGE":return Object(B.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(B.a)({},e,{totalUsersCount:t.count});case"TOOGGLE_IS_fETCHING":return Object(B.a)({},e,{isFetching:t.isFetching});case"TOOGGLE_IS_fOLLOWING_PROGRESS":return Object(B.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userid]):e.followingInProgress.filter(function(e){return e!==t.userid})});default:return e}},K=n(55),v=n(69),G=n(96),y=n(71),Y=n.n(y),J=n(133),M=n.n(J),x=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=void 0===i?10:i,u=Math.ceil(t/n),l=[],g=1;g<=u;g++)l.push(g);var A=Math.ceil(u/s),p=Object(a.useState)(1),E=Object(G.a)(p,2),m=E[0],h=E[1],f=(m-1)*s+1,d=m*s;return r.a.createElement("div",{className:Y.a.paginator},m>1&&r.a.createElement("button",{onClick:function(){h(m-1)}},"PREV"),l.filter(function(e){return e>=f&&e<=d}).map(function(e){return r.a.createElement("span",{className:M()(Object(v.a)({},Y.a.selectedPage,o===e),Y.a.pageNumber),key:e,onClick:function(t){c(e)}},e)}),A>m&&r.a.createElement("button",{onClick:function(){h(m+1)}},"NEXT"))},T=n(45),N=n.n(T),H=n(107),L=n.n(H),P=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(E.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:L.a,className:N.a.usersPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{className:N.a.button,disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{className:N.a.button,disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},Z=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,o=e.onPageChanged,c=e.users,i=Object(K.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(x,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:a}),r.a.createElement("div",{className:N.a.user},c.map(function(e){return r.a.createElement(P,{user:e,followingInProgress:i.followingInProgress,key:e.id,unfollow:i.unfollow,follow:i.follow})})))},V=n(66),q=n(8),W=n(135),z=Object(W.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),X=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.totalUsersCount},$=function(e){return e.usersPage.currentPage},ee=function(e){return e.usersPage.isFetching},te=function(e){return e.usersPage.followingInProgress},ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.getUsers(e,t)},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(V.a,null):null,r.a.createElement(Z,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),ae=Object(q.d)(Object(f.b)(function(e){return{users:z(e),pageSize:X(e),totalUsersCount:_(e),currentPage:$(e),isFetching:ee(e),followingInProgress:te(e)}},{follow:function(e){return function(){var t=Object(w.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,Q.d.follow.bind(Q.d),O);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(w.a)(C.a.mark(function t(n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(n,e,Q.d.unfollow.bind(Q.d),R);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:U,togglefollowInProgress:j,getUsers:function(e,t){return function(){var n=Object(w.a)(C.a.mark(function n(a){var r;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(F(!0)),a(U(e)),n.next=4,Q.d.getUsers(e,t);case 4:r=n.sent,a(F(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(ne),re=n(56),oe=n.n(re),ce=function(e){return r.a.createElement("header",{className:oe.a.header},r.a.createElement("img",{className:oe.a.logo,src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:oe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{className:oe.a.buttonLogin,onClick:e.logout},"Log out")," "):r.a.createElement(E.b,{to:"/login"},"Login")))},ie=n(30),se={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ue=function(e,t,n,a){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},le=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ge=function(){return function(){var e=Object(w.a)(C.a.mark(function e(t){var n,a,r,o,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.me();case 2:return 0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,c=a.email,t(ue(r,c,o,!0))),e.abrupt("return","ggg");case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Ae=function(){return function(){var e=Object(w.a)(C.a.mark(function e(t){var n,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(le(a));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(B.a)({},e,t.payload);default:return e}},Ee=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ce,this.props)}}]),t}(r.a.Component),me=Object(h.g)(Object(f.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(w.a)(C.a.mark(function e(t){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.a.logout();case 2:0===e.sent.data.resultCode&&t(ue(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ee)),he=n(129),fe=n(25),de=n(67),Ce=n(49),we=n.n(Ce),Ie=Object(he.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(fe.c)("Email","email",[de.b],fe.a),Object(fe.c)("Password","password",[de.b],fe.a,{type:"password"}),Object(fe.c)(null,"rememberMe",[],fe.a,{type:"checkbox"},"remember me"),a&&r.a.createElement("img",{src:a}),a&&Object(fe.c)("Symbols from image","captcha",[de.b],fe.a,{}),n&&r.a.createElement("div",{className:we.a.formSammaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),Be=Object(f.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,a){return function(){var r=Object(w.a)(C.a.mark(function r(o){var c,i;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Q.a.login(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(ge()):(10===c.data.resultCode&&o(Ae()),i=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(ie.a)("login",{_error:i})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(Ie,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),Qe=n(128),be=n(95),Se={},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;arguments.length>1&&arguments[1];return e},Re=n(137),Ue=n(130),Fe={initialized:!1,globalError:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(B.a)({},e,{initialized:!0});default:return e}},De=Object(q.c)({dialogsPage:Qe.a,profilePage:be.b,sidebar:Oe,usersPage:k,auth:pe,form:Ue.a,app:je}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,Ke=Object(q.e)(De,ke(Object(q.a)(Re.a)));window.__store__=Ke;var ve=Ke,Ge=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null," Loading...")},r.a.createElement(e,t))}},ye=r.a.lazy(function(){return n.e(4).then(n.bind(null,298))}),Ye=r.a.lazy(function(){return n.e(3).then(n.bind(null,297))}),Je=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(me,null),r.a.createElement(m,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/dialogs",render:Ge(ye)}),r.a.createElement(h.b,{path:"/profile/:userId?",render:Ge(Ye)}),r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(Be,null)}}),r.a.createElement(h.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND ")}})))):r.a.createElement(V.a,null)}}]),t}(a.Component),Me=Object(q.d)(h.g,Object(f.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Je),xe=function(e){return r.a.createElement(E.a,null,r.a.createElement(f.a,{store:ve},r.a.createElement(Me,null)))};c.a.render(r.a.createElement(xe,null),document.getElementById("root"))},45:function(e,t,n){e.exports={header:"Users_header__1kzTx",usersPhoto:"Users_usersPhoto__1gvmv",selectedPage:"Users_selectedPage__3RhU2",button:"Users_button__21Zbv",user:"Users_user__3nf6t"}},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1_4uB",error:"FormsControls_error__37OyB",formSammaryError:"FormsControls_formSammaryError__3WqKc"}},56:function(e,t,n){e.exports={header:"Header_header__3wSm1",loginBlock:"Header_loginBlock___H1Cz",logo:"Header_logo__1be3j",buttonLogin:"Header_buttonLogin__X_Bvo"}},66:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(134),c=n.n(o);t.a=function(e){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement("img",{src:c.a}))}},67:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max Length is 50 symbols"}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__11Eeg",pageNumber:"Paginator_pageNumber__2nBNo",selectedPage:"Paginator_selectedPage__1sLKr"}},95:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return E}),n.d(t,"g",function(){return m}),n.d(t,"e",function(){return h}),n.d(t,"f",function(){return f});var a=n(6),r=n.n(a),o=n(15),c=n(41),i=n(9),s=n(12),u=n(30),l={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},g=function(e){return{type:"ADD-POST",NewPostText:e}},A=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(A(a.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(A(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n,a){var o,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=a().auth.userid,t.next=3,s.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(p(o)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SAVE_PHOTO_SUCCESS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.daf10ae9.chunk.js.map