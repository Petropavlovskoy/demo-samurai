(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__sGsh4",contact:"ProfileInfo_contact__1yj2t",mainPhoto:"ProfileInfo_mainPhoto__3HkBF",button:"ProfileInfo_button__1-ezY",file_upload_label_input:"ProfileInfo_file_upload_label_input__1HdhW"}},295:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__XUT5M",posts:"MyPosts_posts__3wh1s",button:"MyPosts_button__R8pLu"}},296:function(e,t,a){e.exports={item:"Post_item__3qPUe"}},297:function(e,t,a){"use strict";a.r(t);var n=a(35),l=a(36),o=a(38),r=a(37),s=a(39),c=a(0),i=a.n(c),u=a(96),m=a(293),p=a.n(m),f=a(65),b=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)(e.status),r=Object(u.a)(o,2),s=r[0],m=r[1];Object(c.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("b",null,"Status: ")," ",i.a.createElement("span",{onDoubleClick:function(){l(!0)}},e.status||"-------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),e.updateStatus(s)},value:s})))},d=a(107),E=a.n(d),h=a(129),v=a(48),P=a.n(v),g=a(25),k=Object(h.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.error,n=e.profile;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",null,i.a.createElement("button",{className:p.a.button,onClick:function(){}},"save")),a&&i.a.createElement("div",{className:P.a.formSammaryError},a),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",Object(g.c)("Full name","fullName",[],g.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",Object(g.c)("","lookingForAJob",[],g.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(g.c)("My professional skills","lookingForAJobDescription",[],g.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(g.c)("About me","aboutMe",[],g.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(n.contacts).map(function(e){return i.a.createElement("div",{key:e,className:p.a.contact},i.a.createElement("b",null,e,": ",Object(g.c)(e,"contacts."+e,[],g.a)))})))}),_=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",null,a&&i.a.createElement("div",null," ",i.a.createElement("button",{className:p.a.button,onClick:n},"edit")," "),i.a.createElement("div",null,i.a.createElement("b",null,"Full name"),": ",t.fullName),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return i.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},O=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),": ",a)},j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,l=e.isOwner,o=e.savePhoto,r=e.saveProfile,s=Object(c.useState)(!1),m=Object(u.a)(s,2),d=m[0],h=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||E.a,className:p.a.mainPhoto}),l&&i.a.createElement("input",{className:p.a.file_upload_label_input,type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),d?i.a.createElement(k,{initialValues:t,profile:t,onSubmit:function(e){r(e).then(function(){h(!1)})}}):i.a.createElement(_,{goToEditMode:function(){h(!0)},profile:t,isOwner:l}),i.a.createElement(b,{status:a,updateStatus:n})))},y=a(95),S=a(41),w=a(295),N=a.n(w),M=a(296),A=a.n(M),I=function(e){return i.a.createElement("div",{className:A.a.item},i.a.createElement("img",{src:"https://i.pinimg.com/originals/b5/bb/fb/b5bbfbe67191cc6baf4753c6eb955e70.jpg"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like"),e.likesCount))},C=a(89),F=a(66),T=Object(F.a)(10),x=Object(h.a)({form:"ProfileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(C.a,{name:"newPostText",component:g.b,placeholder:"Post message",validate:[F.b,T]})),i.a.createElement("div",null,i.a.createElement("button",{className:N.a.button},"Add post")))}),B=i.a.memo(function(e){var t=Object(S.a)(e.posts).reverse().map(function(e){return i.a.createElement(I,{key:e.id,message:e.message,likesCount:e.likesCount})});i.a.createRef();return i.a.createElement("div",{className:N.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(x,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:N.a.posts},t))}),J=a(18),U=Object(J.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(y.a)(t))}}})(B),D=function(e){return i.a.createElement("div",null,i.a.createElement(j,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),i.a.createElement(U,null))},z=a(11),L=a(8),V=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(i.a.Component);t.default=Object(L.d)(Object(J.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),z.g)(V)}}]);
//# sourceMappingURL=3.ea6317dc.chunk.js.map