(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{43:function(e,t,a){e.exports=a(66)},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),r=a.n(c),i=(a(48),a(32)),l=(a(49),a(82)),p=a(83),s=a(88);var u=function(e){return o.a.createElement(l.a,null,o.a.createElement(p.a,null,o.a.createElement(s.a,{primary:"Todo",secondary:e.text})))},d=a(84),m=a(87),f=a(86),E=a(85),h=(a(54),a(30)),b=a.n(h),v=b.a.initializeApp({apiKey:"AIzaSyCiW7ifulWqJgcXv1Tkg_lDOER39dxzpjA",authDomain:"todo-app-cp-46382.firebaseapp.com",databaseURL:"https://todo-app-cp-46382.firebaseio.com",projectId:"todo-app-cp-46382",storageBucket:"todo-app-cp-46382.appspot.com",messagingSenderId:"830247344658",appId:"1:830247344658:web:36860b03713c2582c2d6cb",measurementId:"G-8BJC6QVLNH"}).firestore();var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),p=l[0],s=l[1];return Object(n.useEffect)((function(){v.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return e.data().todo})))}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Hello Shazad!!!"),o.a.createElement("form",null,o.a.createElement(d.a,null,o.a.createElement(m.a,null,"Write a todo"),o.a.createElement(f.a,{value:p,onChange:function(e){return s(e.target.value)}})),o.a.createElement(E.a,{disabled:!p,type:"submit",onClick:function(e){e.preventDefault(),v.collection("todos").add({todo:p,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),s("")},variant:"contained",color:"primary"},"Add Todo")),o.a.createElement("ul",null,a.map((function(e){return o.a.createElement(u,{text:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.9d030445.chunk.js.map