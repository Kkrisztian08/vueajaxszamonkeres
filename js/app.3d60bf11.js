(function(t){function e(e){for(var r,u,s=e[0],i=e[1],c=e[2],l=0,d=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vueajaxszamonkeres/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Statues")],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Statues")]),n("table",[t._m(0),n("tbody",[t._l(t.statues,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.person))]),n("td",[t._v(t._s(e.height))]),n("td",[t._v(t._s(e.price))]),n("td",[n("button",{on:{click:function(n){return t.loadEditData(e.id)}}},[t._v("Szerkesztés")]),n("button",{on:{click:function(n){return t.deleteStatue(e.id)}}},[t._v("Törlés")])])])})),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.person,expression:"statue.person"}],attrs:{type:"text"},domProps:{value:t.statue.person},on:{input:function(e){e.target.composing||t.$set(t.statue,"person",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.height,expression:"statue.height"}],attrs:{type:"number"},domProps:{value:t.statue.height},on:{input:function(e){e.target.composing||t.$set(t.statue,"height",e.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.statue.price,expression:"statue.price"}],attrs:{type:"number"},domProps:{value:t.statue.price},on:{input:function(e){e.target.composing||t.$set(t.statue,"price",e.target.value)}}})]),n("td",[t.newData?n("button",{on:{click:t.newStatue}},[t._v("Mentés")]):t._e(),t.newData?t._e():n("button",{on:{click:t.saveEditedData}},[t._v("Mentés")]),n("button",{on:{click:t.clearForm}},[t._v("Mégse")])])])],2)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Személy")]),n("th",[t._v("Magasság")]),n("th",[t._v("Ár")]),n("th",[t._v("Műveletek")])])])}],i=n("5530"),c=n("1da1"),p=(n("96cf"),n("d3b7"),n("e9c4"),{name:"Statues",data:function(){return{newData:!0,statue:{id:null,person:"",height:"",price:""},statues:[]}},methods:{loadData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/statues");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.statues=r;case 7:case"end":return e.stop()}}),e)})))()},newStatue:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/statues",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.statue)});case 2:return e.next=4,t.loadData();case 4:t.clearForm();case 5:case"end":return e.stop()}}),e)})))()},deleteStatue:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t),{method:"DELETE"});case 2:return r=n.sent,console.log(r),n.next=6,e.loadData();case 6:case"end":return n.stop()}}),n)})))()},loadEditData:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t));case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,e.statue=Object(i["a"])({},a),e.newData=!1;case 8:case"end":return n.stop()}}),n)})))()},saveEditedData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t.statue.id),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t.statue)});case 2:t.loadData(),t.clearForm(),t.newData=!0;case 5:case"end":return e.stop()}}),e)})))()},clearForm:function(){this.statue={id:null,person:"",height:"",price:""}}},mounted:function(){this.loadData()}}),l=p,d=n("2877"),f=Object(d["a"])(l,u,s,!1,null,null,null),h=f.exports,v={name:"App",components:{Statues:h}},m=v,g=(n("034f"),Object(d["a"])(m,a,o,!1,null,null,null)),b=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.3d60bf11.js.map