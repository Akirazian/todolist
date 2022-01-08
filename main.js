(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(537),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,"body {\n  width: 100vw;\n  height: auto;\n  margin: 0px;\n}\n\nheader {\n  background-color: rgb(41, 41, 41);\n  color: whitesmoke;\n  display: flex;\n  font-size: 20px;\n  justify-content: flex-start;\n  padding: 15px;\n}\n\n#header-title {\n  margin-left: 20px;\n}\n\nmain {\n  display: flex;\n  height: calc(100vh - 130.59px);\n}\n\n.project-sidebar {\n  display: flex;\n  padding: 20px 40px;\n  flex-direction: column;\n  background-color: gray;\n}\n\n.project-list-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-list-container {\n  margin: 20px;\n  padding-left: 20px;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: rgb(41, 41, 41);\n  font-size: 20px;\n  color: whitesmoke;\n  padding: 15px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,iBAAiB;EACjB,aAAa;EACb,eAAe;EACf,2BAA2B;EAC3B,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,iCAAiC;EACjC,eAAe;EACf,iBAAiB;EACjB,aAAa;AACf",sourcesContent:["body {\n  width: 100vw;\n  height: auto;\n  margin: 0px;\n}\n\nheader {\n  background-color: rgb(41, 41, 41);\n  color: whitesmoke;\n  display: flex;\n  font-size: 20px;\n  justify-content: flex-start;\n  padding: 15px;\n}\n\n#header-title {\n  margin-left: 20px;\n}\n\nmain {\n  display: flex;\n  height: calc(100vh - 130.59px);\n}\n\n.project-sidebar {\n  display: flex;\n  padding: 20px 40px;\n  flex-direction: column;\n  background-color: gray;\n}\n\n.project-list-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-list-container {\n  margin: 20px;\n  padding-left: 20px;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: rgb(41, 41, 41);\n  font-size: 20px;\n  color: whitesmoke;\n  padding: 15px;\n}"],sourceRoot:""}]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */"),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(A);else{var f=r(A,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=o(t,r),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},e=(t,e,n,o)=>{const r=document.createElement(t);return e&&(r.id=e),n&&n.forEach((t=>r.classList.add(t))),o&&(r.innerText=o),r};function o(t){const n=document.getElementById("todo-list-container");n.innerText="";const r=e("h2",t.title,["project-title"],t.title),{todoList:i}=t,a=e("ul","todo-list",["todo-list"]),c=i.length;for(let n=0;n<c;n++){const r=e("li"),c=i[n].completed?"[X]":"[ ]";r.innerText=`${c} | ${i[n].title} | Due: ${i[n].dueDate}`;const s=e("button",null,["todo-toggle-button"],"Toggle");s.addEventListener("click",(()=>{i[n].toggle(),o(t)}));const d=e("button",null,["todo-delete-button"],"X");d.addEventListener("click",(()=>{t.deleteTodo(n)})),r.append(s,d),a.appendChild(r)}const s=e("button","new-todo-button",["new-todo-button"],"Add Todo");s.addEventListener("click",(()=>{const e=prompt("Todo?"),n=prompt("Description?"),o=prompt("Due date?"),r=prompt("Priority?");t.addTodo(e,n,o,r)})),n.append(r,a,s)}function r(t){const n=document.getElementById("project-list-container");n.innerText="";const r=t.length;for(let i=0;i<r;i++){const r=e("div",null,["project-container"]),a=e("button",null,["project-list-item"],t[i].title);a.addEventListener("click",(()=>{o(t[i])}));const c=e("button",null,["project-delete-button"],"X");c.addEventListener("click",(()=>{const e=document.querySelector(".project-title");null!==e&&e.id===t[i].title&&(document.getElementById("todo-list-container").innerText=""),t.deleteProject(i)})),r.append(a,c),n.appendChild(r)}}const i=[];i.addProject=e=>{i.push(new class{constructor(e){this.title=t(e),this.todoList=[]}editTitle(t){this.title=t}addTodo(e,n,r,i){this.todoList.push(new class{constructor(e,n,o,r){this.title=t(e),this.description=t(n),this.dueDate=o,this.priority=r,this.completed=!1}toggle(){!1===this.completed?this.completed=!0:this.completed=!1}edit(t,e){this[t]=e}}(e,n,r,i)),o(this)}deleteTodo(t){this.todoList.splice(t,1),o(this)}}(e)),r(i)},i.deleteProject=t=>{i.splice(t,1),r(i)};const a=i;var c=n(379),s=n.n(c),d=n(795),l=n.n(d),p=n(569),u=n.n(p),A=n(565),f=n.n(A),h=n(216),m=n.n(h),g=n(589),E=n.n(g),v=n(426),x={};x.styleTagTransform=E(),x.setAttributes=f(),x.insert=u().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=m(),s()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,document.getElementById("add-project-button").addEventListener("click",(()=>{let t=prompt("Project Name?");a.addProject(t)})),a.addProject("New Project"),a.addProject("Second Project"),a[0].addTodo("New Todo","Testing this Todo","2/05/2022","low"),a[0].addTodo("Second Todo","Testing a second todo","3/11/2022","medium"),a[0].addTodo("Third Todo","A whole third todo","1/22/2022","high")})()})();
//# sourceMappingURL=main.js.map