(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={container:"Section_container__yh-Sk",title:"Section_title__2bktB"}},14:function(e,t,n){e.exports={label:"ContactsFilter_label__6vSF4",input:"ContactsFilter_input__2JYjy"}},16:function(e,t,n){e.exports={container:"App_container__2P7Of"}},2:function(e,t,n){e.exports={form:"Form_form__4I45W",label:"Form_label__3jHOr",input:"Form_input__1D1Pl",button:"Form_button__1NMeZ"}},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(15),o=n.n(r),i=n(10),s=n(6),l=n(3),u=n(16),b=n.n(u),m=n(12),j=n.n(m),d=n(0);function f(e){var t=e.title,n=e.children;return Object(d.jsxs)("div",{className:j.a.container,children:[Object(d.jsx)("h2",{className:j.a.title,children:t}),n]})}var O=n(9),p=n(13),h=n(2),_=n.n(h),x=function(e){var t=e.onSubmit,n=Object(a.useState)({name:"",number:""}),c=Object(s.a)(n,2),r=c[0],o=c[1],i=function(e){o((function(t){return Object(p.a)(Object(p.a)({},t),{},Object(O.a)({},e.target.name,e.target.value))}))},l=function(){o({name:"",number:""})};return Object(d.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault(),t(r),l()},children:[Object(d.jsxs)("label",{className:_.a.label,children:["Name",Object(d.jsx)("input",{className:_.a.input,type:"text",name:"name",value:r.name,onChange:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:_.a.label,children:["Number",Object(d.jsx)("input",{className:_.a.input,type:"tel",name:"number",value:r.number,onChange:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{className:_.a.button,type:"submit",children:"Add contact"})]})};x.defaultProps={onSubmit:function(){}};var v=x,g=n(4),N=n.n(g),C=function(e){var t=e.contacts,n=e.onDelete;return Object(d.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(d.jsxs)("li",{className:N.a.item,children:[Object(d.jsxs)("p",{className:N.a.text,children:[a," :"]}),Object(d.jsx)("p",{className:N.a.text,children:c}),Object(d.jsx)("button",{className:N.a.button,onClick:function(){n(t)},children:"Delete"})]},t)}))})},S=n(14),y=n.n(S),k=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:y.a.input,type:"text",value:t,onChange:n})]})},A=function(){var e=Object(a.useState)([{id:Object(l.generate)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(l.generate)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(l.generate)(),name:"Eden Clements",number:"645-17-79"},{id:Object(l.generate)(),name:"Annie Copeland",number:"227-91-26"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],m=o[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&c(Object(i.a)(t))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)})).sort((function(e,t){return e.name.localeCompare(t.name)}))}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{title:"Phonebook",children:Object(d.jsx)(v,{onSubmit:function(e){var t=e.name,a=e.number,r={id:Object(l.generate)(),name:t,number:a};n.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts")):n.find((function(e){return e.number===a}))?alert("".concat(a," is already in contacts")):c((function(e){return[].concat(Object(i.a)(e),[r])}))}})}),Object(d.jsx)(f,{title:"Contacts",children:Object(d.jsxs)("div",{className:b.a.container,children:[Object(d.jsx)(k,{value:u,onChange:function(e){m(e.target.value)}}),Object(d.jsx)(C,{contacts:j,onDelete:function(e){c((function(t){return Object(i.a)(t).filter((function(t){return t.id!==e}))}))}})]})})]})};n(30);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={list:"Contacts_list__2AwE3",text:"Contacts_text__LlhZX",button:"Contacts_button__11m0S"}}},[[31,1,2]]]);
//# sourceMappingURL=main.c0656229.chunk.js.map