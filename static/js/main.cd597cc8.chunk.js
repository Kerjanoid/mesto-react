(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(14),i=n.n(s),o=(n(12),n(18)),r=n(2),l=n(7),u=n(0);var p=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)(l.b,{className:"header__logo",to:"/mesto-react/"})})},d=n.p+"static/media/Edit_button.8667ac4a.svg",b=n.p+"static/media/plus.d86bb2ed.svg",j=c.a.createContext(),h=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,i=Object(a.useContext)(j)._id,o=t.owner._id===i,r=t.likes.some((function(e){return e._id===i})),l="element__trash-button ".concat(o?"":"element__trash-button_type_none"),p="element__like ".concat(r?"element__like_active":"");return Object(u.jsxs)("article",{className:"element",children:[Object(u.jsx)("img",{className:"element__img",onClick:function(){n(t)},src:t.link,alt:t.name}),Object(u.jsxs)("div",{className:"element__options",children:[Object(u.jsx)("h2",{className:"element__title",children:t.name}),Object(u.jsxs)("div",{className:"element__like-block",children:[Object(u.jsx)("button",{className:p,"aria-label":"\u043b\u0430\u0439\u043a",type:"button",onClick:function(){c(t)}}),Object(u.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]}),Object(u.jsx)("button",{type:"button",onClick:function(){s(t)},className:l,"aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]})},_=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,s=e.onCardClick,i=e.onCardLike,o=e.onCardDelete,r=e.cards,l=Object(a.useContext)(j),p=l.name,_=l.avatar,m=l.about;return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__data",children:[Object(u.jsx)("div",{className:"avatar",onClick:c,style:{backgroundImage:"url(".concat(_,")")},children:Object(u.jsx)("div",{className:"avatar__cover",children:Object(u.jsx)("img",{className:"avatar__edit-button-img",src:d,alt:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430"})})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__title",children:p}),Object(u.jsx)("button",{className:"profile__edit-button",onClick:t,"aria-label":"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",children:Object(u.jsx)("img",{className:"profile__edit-button-img",src:d,alt:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(u.jsx)("p",{className:"profile__subtitle",children:m})]})]}),Object(u.jsx)("button",{onClick:n,type:"button",className:"profile__add-button","aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",children:Object(u.jsx)("img",{className:"profile__add-button-img",src:b,alt:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430"})})]}),Object(u.jsx)("section",{className:"elements",children:r.map((function(e){return Object(u.jsx)(h,{card:e,onCardClick:s,onCardLike:i,onCardDelete:o},e._id)}))})]})};var m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("p",{className:"footer__text",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})},f=n.p+"static/media/Close_Icon.88e7d8db.svg";var O=function(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,s=e.children,i=e.closePopupByClickOutside,o=e.buttonText,r=e.handleSubmit;return Object(u.jsx)("div",{className:"popup popup_".concat(t," ").concat(a?"popup_opened":""),onMouseUp:i,children:Object(u.jsxs)("div",{className:"popup__content",children:[Object(u.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c,children:Object(u.jsx)("img",{className:"popup__close-button-img",src:f,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(u.jsxs)("form",{className:"popup__form popup__form_".concat(t),name:t,onSubmit:r,children:[Object(u.jsx)("h2",{className:"popup__title",children:n}),s,Object(u.jsx)("button",{className:"popup__submit-button",type:"submit","aria-label":o,children:o})]})]})})};var x=function(e){var t=e.isOpen,n=e.onClose,c=e.closePopupByClickOutside,s=e.onUpdateUser,i=e.waiting,o=Object(a.useState)(""),l=Object(r.a)(o,2),p=l[0],d=l[1],b=Object(a.useState)(""),h=Object(r.a)(b,2),_=h[0],m=h[1],f=Object(a.useContext)(j);return Object(a.useEffect)((function(){d(f.name),m(f.about)}),[f,t]),Object(u.jsxs)(O,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,closePopupByClickOutside:c,handleSubmit:function(e){e.preventDefault(),s({name:p,about:_})},buttonText:i||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(u.jsxs)("label",{className:"popup__form-field",children:[Object(u.jsx)("input",{className:"popup__input-field popup__input-field_type_title",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",name:"profile-title",minLength:"2",maxLength:"40",onChange:function(e){d(e.target.value)},value:p||""}),Object(u.jsx)("span",{className:"popup__error",id:"profile-title-error"})]}),Object(u.jsxs)("label",{className:"popup__form-field",children:[Object(u.jsx)("input",{className:"popup__input-field popup__input-field_type_subtitle",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",type:"text",name:"profile-subtitle",minLength:"2",maxLength:"200",onChange:function(e){m(e.target.value)},value:_||""}),Object(u.jsx)("span",{className:"popup__error",id:"profile-subtitle-error"})]})]})};var v=function(e){var t=e.isOpen,n=e.onClose,c=e.closePopupByClickOutside,s=e.onUpdateAvatar,i=e.waiting,o=Object(a.useRef)(null);return Object(u.jsx)(O,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,closePopupByClickOutside:c,handleSubmit:function(e){e.preventDefault(),s({avatar:o.current.value}),e.target.reset()},buttonText:i||"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(u.jsxs)("label",{className:"popup__form-field",children:[Object(u.jsx)("input",{className:"popup__input-field popup__input-field_type_title",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0440\u0431\u0430\u0436\u0435\u043d\u0438\u0435",type:"url",defaultValue:"",name:"avatar-url",minLength:"2",maxLength:"200",ref:o}),Object(u.jsx)("span",{className:"popup__error",id:"avatar-url-error"})]})})};var g=function(e){var t=e.isOpen,n=e.onClose,c=e.closePopupByClickOutside,s=e.onAddPlace,i=e.waiting,o=Object(a.useState)(""),l=Object(r.a)(o,2),p=l[0],d=l[1],b=Object(a.useState)(""),j=Object(r.a)(b,2),h=j[0],_=j[1];return Object(u.jsxs)(O,{name:"new-picture",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,closePopupByClickOutside:c,buttonText:i||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",handleSubmit:function(e){e.preventDefault(),s({name:p,link:h}),d(""),_("")},children:[Object(u.jsxs)("label",{className:"popup__form-field",children:[Object(u.jsx)("input",{className:"popup__input-field popup__input-field_type_pic-title",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",name:"picture-title",minLength:"2",maxLength:"40",onChange:function(e){d(e.target.value)},value:p}),Object(u.jsx)("span",{className:"popup__error",id:"picture-title-error"})]}),Object(u.jsxs)("label",{className:"popup__form-field",children:[Object(u.jsx)("input",{className:"popup__input-field popup__input-field_type_pic-link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0440\u0431\u0430\u0436\u0435\u043d\u0438\u0435",type:"url",name:"picture-url",minLength:"2",maxLength:"200",onChange:function(e){_(e.target.value)},value:h}),Object(u.jsx)("span",{className:"popup__error",id:"picture-url-error"})]})]})},C=function(e){var t=e.card,n=e.onClose,a=e.closePopupByClickOutside;return Object(u.jsx)("div",{className:"popup popup_view-picture ".concat(t.isOpened?"popup_opened":""),onMouseUp:a,children:Object(u.jsxs)("figure",{className:"popup__view-window",children:[Object(u.jsx)("button",{type:"button",className:"popup__close-button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n,children:Object(u.jsx)("img",{className:"popup__close-button-img",src:f,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(u.jsx)("img",{className:"popup__huge-picture",src:t.link,alt:t.name}),Object(u.jsx)("figcaption",{className:"popup__figcaption",children:t.name})]})})},k=n(16),N=n(17),y=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(k.a)(this,e),this._baseUrl=n,this._headers=a}return Object(N.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var n={headers:this._headers,method:"PUT"},a={headers:this._headers,method:"DELETE"};return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),t?a:n).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"9dfdfed6-d744-4da1-85f3-1945f42ba2db","Content-Type":"application/json"}});var P=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),d=i[0],b=i[1],h=Object(a.useState)(!1),f=Object(r.a)(h,2),O=f[0],k=f[1],N=Object(a.useState)({}),P=Object(r.a)(N,2),S=P[0],U=P[1],L=Object(a.useState)({isOpened:!1}),E=Object(r.a)(L,2),w=E[0],B=E[1],T=Object(a.useState)([]),A=Object(r.a)(T,2),D=A[0],R=A[1],I=Object(a.useState)(null),q=Object(r.a)(I,2),J=q[0],M=q[1];Object(a.useEffect)((function(){y.getUserInformation().then((function(e){U(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){y.getInitialCards().then((function(e){R(e)})).catch((function(e){return console.log(e)}))}),[]);var G=function(){b(!1),k(!1),c(!1),B({isOpened:!1})},H=function(e){e.target.classList.contains("popup_opened")&&G()};return Object(u.jsx)(j.Provider,{value:S,children:Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"root",children:[Object(u.jsx)(p,{}),Object(u.jsx)(_,{onEditProfile:function(){b(!d)},onAddPlace:function(){k(!O)},onEditAvatar:function(){c(!n)},onCardClick:function(e){var t=e.link,n=e.name,a=e.isOpened;B({link:t,name:n,isOpened:!a})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===S._id}));y.changeLikeCardStatus(e._id,t).then((function(t){R((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){y.removeCard(e._id).then((function(){R((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},cards:D}),Object(u.jsx)(m,{}),Object(u.jsx)(x,{isOpen:d,onClose:G,closePopupByClickOutside:H,onUpdateUser:function(e){M("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),y.editProfile(e).then((function(e){U(e),G()})).catch((function(e){return console.log(e)})).finally((function(){M(null)}))},waiting:J}),Object(u.jsx)(v,{isOpen:n,onClose:G,closePopupByClickOutside:H,onUpdateAvatar:function(e){M("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),y.editAvatar(e).then((function(e){U(e),G()})).catch((function(e){return console.log(e)})).finally((function(){M(null)}))},waiting:J}),Object(u.jsx)(g,{isOpen:O,onClose:G,closePopupByClickOutside:H,onAddPlace:function(e){M("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435..."),y.addCard(e).then((function(e){R([e].concat(Object(o.a)(D))),G()})).catch((function(e){return console.log(e)})).finally((function(){M(null)}))},waiting:J}),Object(u.jsx)(C,{onClose:G,card:w,closePopupByClickOutside:H})]})})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cd597cc8.chunk.js.map