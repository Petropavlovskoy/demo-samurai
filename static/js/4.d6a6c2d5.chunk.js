(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__9Ci9i",dialogsItems:"Dialogs_dialogsItems__2C4m6",active:"Dialogs_active__2NkeJ",messages:"Dialogs_messages__2sqng",message:"Dialogs_message__OsFOT",dialo:"Dialogs_dialo__3Z_xq"}},294:function(e,a,t){},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(128),o=t(292),r=t.n(o),c=t(12),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement("img",{src:"https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg"}),s.a.createElement(c.b,{to:a},e.name))},m=function(e){var a=e.message;return s.a.createElement("div",{className:r.a.dialog},a)},u=t(11),d=t(89),g=t(129),b=t(25),p=t(66),f=t(294),E=t.n(f),_=Object(p.a)(50),v=Object(g.a)({form:"dialog-add-message-form"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:b.b,validate:[p.b,_],placeholder:"Enter your message",name:"newMessageBody"})),s.a.createElement("div",null,s.a.createElement("button",{className:E.a.button},"Send")))}),h=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})}),n=a.messages.map(function(e){return s.a.createElement(m,{message:e.message,key:e.id})});a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,n)),s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(u.a,{to:"/login"})},O=t(18),j=t(35),w=t(36),y=t(38),N=t(37),k=t(39),D=function(e){return{isAuth:e.auth.isAuth}},M=t(8);a.default=Object(M.d)(Object(O.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){function t(){return Object(j.a)(this,t),Object(y.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(k.a)(t,a),Object(w.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),t}(s.a.Component);return Object(O.b)(D)(a)})(h)}}]);
//# sourceMappingURL=4.d6a6c2d5.chunk.js.map