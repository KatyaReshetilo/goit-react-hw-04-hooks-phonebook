(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={headFilter:"filter_headFilter__33DTo",inputFilter:"filter_inputFilter__3iB2p"}},2:function(e,t,n){e.exports={form:"form_form__3mlCr",labelForm:"form_labelForm__kN1-j",inputForm:"form_inputForm__2mbJ6",buttonForm:"form_buttonForm__TD1uu"}},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=n(12),i=n(3),u=n(22),l=n(7),m=n.n(l),b=n(0);function j(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:m.a.section,children:[Object(b.jsx)("h2",{className:m.a.head,children:t}),n]})}var d=n(2),f=n.n(d);function h(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}};return Object(b.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),o(""),m("")},children:[Object(b.jsxs)("label",{className:f.a.labelForm,children:["Name",Object(b.jsx)("input",{className:f.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:j})]}),Object(b.jsxs)("label",{className:f.a.labelForm,children:["Number",Object(b.jsx)("input",{className:f.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:j})]}),Object(b.jsx)("button",{className:f.a.buttonForm,type:"submit",children:"Add contact"})]})}var p=n(8),O=n.n(p),_=n(9),x=n.n(_);function v(e){var t=e.contacts,n=e.onDeleteContact;return Object(b.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(b.jsxs)("li",{id:t,className:x.a.contactItem,children:[a,": ",c,Object(b.jsx)("button",{className:x.a.delete,type:"button",onClick:function(){n(t)},children:"Delete"})]},t)}))})}v.propTypec={contacts:O.a.array,onDeleteContact:O.a.func};var F=n(10),g=n.n(F);function N(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{children:[Object(b.jsx)("h3",{className:g.a.headFilter,children:"Find contacts by name"}),Object(b.jsx)("input",{className:g.a.inputFilter,type:"text",value:t,onChange:n})]})}function C(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),l=o[0],m=o[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("contacts"),t=JSON.parse(e);t&&c((function(e){return t}))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{title:"Phonebook",children:Object(b.jsx)(h,{onSubmit:function(e){var t=e.name,a=function(e){var t=e.name,n=e.number;return{id:Object(u.a)(),name:t,number:n}}({name:t,number:e.number});n.map((function(e){return e.name})).includes(t)?alert("".concat(t," is already in contacts")):c((function(e){return[a].concat(Object(s.a)(e))}))}})}),Object(b.jsxs)(j,{title:"Contacts",children:[Object(b.jsx)(N,{value:l,onChange:function(e){m(e.currentTarget.value)}}),Object(b.jsx)(v,{contacts:function(){var e=l.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={head:"section_head__21w0M",section:"section_section__2XPQS"}},9:function(e,t,n){e.exports={contactItem:"contacts_contactItem__wTfg3",delete:"contacts_delete__1I5_E"}}},[[20,1,2]]]);
//# sourceMappingURL=main.644a2782.chunk.js.map