(this["webpackJsonpsamurai-it"]=this["webpackJsonpsamurai-it"]||[]).push([[3],{293:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__19USN"}},294:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__3kSlb",posts:"MyPosts_posts__2DQNU"}},295:function(t,e,a){t.exports={item:"Post_item__2noyt"}},296:function(t,e,a){"use strict";a.r(e);var s=a(34),n=a(35),r=a(37),u=a(36),o=a(0),i=a.n(o),l=a(293),c=a.n(l),p=a(139),m=a.n(p),d=a(39),f=a(127),E=function(t){var e=Object(o.useState)(!1),a=Object(f.a)(e,2),s=a[0],n=a[1],r=Object(o.useState)(t.status),u=Object(f.a)(r,2),l=u[0],c=u[1];Object(o.useEffect)((function(){c(t.status)}),[t.status]);return i.a.createElement("div",null,!s&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status)),s&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(l)},value:l})))},b=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return e?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{src:m.a})),i.a.createElement("div",{className:c.a.descriptionBlock},i.a.createElement(E,{status:a,updateStatus:s}))):i.a.createElement(d.a,null)},h=a(94),v=a(294),g=a.n(v),P=a(295),j=a.n(P),k=function(t){return i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"}),t.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",t.likesCount))},O=a(88),S=a(126),_=a(85),y=a(32),w=i.a.memo((function(t){var e=t.posts.map((function(t){return i.a.createElement(k,{message:t.message,likesCount:t.likesCount})}));return i.a.createElement("div",{className:g.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),i.a.createElement("div",{className:g.a.posts},e))})),x=Object(_.a)(10);var B=Object(S.a)({form:"ProfileAddNewPostForm"})((function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement("div",null,i.a.createElement(O.a,{name:"newPostText",component:y.c,placeholder:"post message",validate:[_.b,x]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add Post")))})),N=w,C=a(15),U=Object(C.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(N),I=function(t){return i.a.createElement("div",null,i.a.createElement(b,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(U,null))},T=a(8),A=a(28),M=function(t){Object(r.a)(a,t);var e=Object(u.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return i.a.createElement(I,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component),D=Object(A.f)(M);e.default=Object(T.d)(Object(C.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}))(D)}}]);
//# sourceMappingURL=3.6307ba66.chunk.js.map