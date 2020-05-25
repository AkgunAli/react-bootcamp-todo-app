(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{78:function(e,t,n){e.exports=n(92)},83:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(44),r=n.n(i),l=(n(83),n(45)),c=n(46),u=n(56),d=n(54),m=function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,e.title))};m.defaultProps={title:"DEFAULT TITLE"};var p=m,s=n(14),f=function(e){return function(t){t({type:"SHOW_NOTIFICATION",payload:e}),setTimeout((function(){t(E())}),2e3)}},E=function(){return{type:"HIDE_NOTIFICATION"}},h=n(76),v=n(60),O=v.a().shape({title:v.b().required("Title girmeden todo ekleyemezsiniz").max(10,"10 karakterdan fazla giremezsiniz"),description:v.b().min(5,"5 karakterden az giremezsiniz")}),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(h.a,{initialValues:{title:"",description:"",completed:!1,priority:"high"},validationSchema:O,onSubmit:function(t,n){var o=n.resetForm,a=n.setSubmitting;a(!0),setTimeout((function(){e.props.addTodo(t),a(!1),o({})}),2e3)}},(function(e){var t=e.values,n=e.errors,o=e.handleChange,i=e.handleSubmit,r=e.setFieldValue,l=e.isSubmitting;return console.log("is submitting",l),a.a.createElement("form",{onSubmit:i},a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"text",name:"title",placeholder:"Todo Title Giriniz",value:t.title,onChange:o}),n.title&&a.a.createElement("div",null,a.a.createElement("h4",{style:{color:"red"}},n.title))),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"text",placeholder:"Todo Description Giriniz",name:"description",value:t.description,onChange:o}),n.description&&a.a.createElement("div",null,a.a.createElement("h4",{style:{color:"red"}},n.description))),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"radio",name:"completed",id:"completed-todo-field",value:t.completed,checked:t.completed,onChange:function(){r("completed",!0)}}),a.a.createElement("label",{htmlFor:"completed-todo-field"},"Completed")),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"radio",name:"completed",id:"uncompleted-todo-field",value:t.completed,checked:!t.completed,onChange:function(){r("completed",!1)}}),a.a.createElement("label",{htmlFor:"uncompleted-todo-field"},"Not Completed")),a.a.createElement("div",{className:"form-group"},a.a.createElement("select",{name:"priority",value:t.priority,onChange:o},a.a.createElement("option",{value:"high"},"High"),a.a.createElement("option",{value:"medium"},"Medium"),a.a.createElement("option",{value:"low"},"Low"))),a.a.createElement("div",{className:"form-group"},a.a.createElement("button",{type:"submit",style:{opacity:Object.keys(n).length>0||l?"0.2":"1"}},"Todo Ekle")))})))}}]),n}(o.Component),g={addTodo:function(e,t){return console.log(e),function(t){t({type:"ADD_TODO",payload:e}),t(f("".concat(e.title," eklendi")))}}},T=Object(s.b)(null,g)(b),y=function(e){return a.a.createElement("div",null,a.a.createElement(p,{title:"Todo App"}),a.a.createElement(T,null))},j=n(70);function N(){var e=Object(j.a)(["\n      background: ",";\n      color: ",";\n      padding: 10px;\n      text-decoration: ",";\n      \n      &:hover {\n        background: brown;\n      }\n"]);return N=function(){return e},e}var I=n(71).a.div(N(),"rebeccapurple",(function(e){return e.textColor}),(function(e){return e.completed?"line-through":"none"})),k={toggleTodo:function(e){return function(t){t({type:"TOGGLE_TODO",payload:e}),t(f("TOGGLE YAPILDI"))}},removeTodo:function(e){return function(t){t({type:"REMOVE_TODO",payload:e}),t(f("TODO SILINDI"))}}},w=Object(s.b)(null,k)((function(e){var t=e.title,n=e.id,o=e.completed,i=e.description,r=e.priority,l=e.toggleTodo,c=e.removeTodo;return a.a.createElement(I,{textColor:"yellow",completed:o,onClick:function(){return l(n)}},a.a.createElement("div",null,t),a.a.createElement("div",null,i),a.a.createElement("div",null,a.a.createElement("strong",null,"Priority"),": ",r),a.a.createElement("span",null,a.a.createElement("button",{onClick:function(e){e.stopPropagation(),c(n)}},"Sil")))})),C=Object(s.b)((function(e){return{todos:e.todoReducer}}))((function(e){var t=e.todos;return console.log(t),a.a.createElement("div",null,t.map((function(e){return a.a.createElement(w,e)})))})),D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(y,null),a.a.createElement(C,null),this.props.showNotification&&a.a.createElement("h3",null,this.props.notificationText))}}]),n}(a.a.Component),x=Object(s.b)((function(e){var t=e.notificationsReducer;return{showNotification:t.showNotification,notificationText:t.notificationText}}))(D);n(90);var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(25),A=n(77),_=n(40),F=(n(91),n(75)),G=Object(_.c)({todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return console.log(t),[].concat(Object(A.a)(e),[Object(z.a)({id:Math.random()},t.payload)]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.payload?Object(z.a)(Object(z.a)({},e),{},{completed:!e.completed}):e}));case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.payload}));default:return e}},notificationsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showNotification:!1,notificationText:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NOTIFICATION":return Object(z.a)(Object(z.a)({},e),{},{showNotification:!0,notificationText:t.payload});case"HIDE_NOTIFICATION":return Object(z.a)(Object(z.a)({},e),{},{showNotification:!1,notificationText:""});default:return e}}}),L=Object(_.d)(G,Object(_.a)(F.a));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.a,{store:L},a.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.16143d5b.chunk.js.map