(()=>{"use strict";var t,e,n={},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+".app.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="tooling:",r.l=(n,o,i,s)=>{if(t[n])t[n].push(o);else{var c,a;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+i){c=p;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",e+i),c.src=n),t[n]=[o];var u=(e,o)=>{c.onerror=c.onload=null,clearTimeout(h);var r=t[n];if(delete t[n],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((t=>t(o))),e)return e(o)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),a&&document.head.appendChild(c)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={179:0};r.f.j=(e,n)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,r)=>o=t[e]=[n,r]));n.push(o[2]=i);var s=r.p+r.u(e),c=new Error;r.l(s,(n=>{if(r.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,o[1](c)}}),"chunk-"+e,e)}};var e=(e,n)=>{var o,i,[s,c,a]=n,l=0;if(s.some((e=>0!==t[e]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);a&&a(r)}for(e&&e(n);l<s.length;l++)i=s[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0},n=self.webpackChunktooling=self.webpackChunktooling||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),console.log("DOM Helper executing!");class i{static clearEventListeners(t){const e=t.cloneNode(!0);return t.replaceWith(e),e}static moveElement(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}}console.log("Project Item created!");class s{hasActiveTooltip=!1;constructor(t,e,n){this.id=t,this.updateProjectListsHandler=e,this.connectMoreInfoButton(),this.connectSwitchButton(n),this.connectDrag()}showMoreInfoHandler(){if(this.hasActiveTooltip)return;const t=document.getElementById(this.id).dataset.extraInfo;r.e(331).then(r.bind(r,331)).then((e=>{new e.Tooltip((()=>{this.hasActiveTooltip=!1}),t,this.id).attach(),this.hasActiveTooltip=!0}))}connectDrag(){const t=document.getElementById(this.id);t.addEventListener("dragstart",(t=>{t.dataTransfer.setData("text/plain",this.id),t.dataTransfer.effectAllowed="move"})),t.addEventListener("dragend",(t=>{console.log(t)}))}connectMoreInfoButton(){document.getElementById(this.id).querySelector("button:first-of-type").addEventListener("click",this.showMoreInfoHandler.bind(this))}connectSwitchButton(t){let e=document.getElementById(this.id).querySelector("button:last-of-type");e=i.clearEventListeners(e),e.textContent="active"===t?"Finish":"Activate",e.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id))}update(t,e){this.updateProjectListsHandler=t,this.connectSwitchButton(e)}}class c{projects=[];constructor(t){this.type=t;const e=document.querySelectorAll(`#${t}-projects li`);for(const t of e)this.projects.push(new s(t.id,this.switchProject.bind(this),this.type));console.log(this.projects),this.connectDroppable()}connectDroppable(){console.log(globalThis);const t=document.querySelector(`#${this.type}-projects ul`);t.addEventListener("dragenter",(e=>{"text/plain"===e.dataTransfer.types[0]&&(t.parentElement.classList.add("droppable"),e.preventDefault())})),t.addEventListener("dragover",(t=>{"text/plain"===t.dataTransfer.types[0]&&t.preventDefault()})),t.addEventListener("dragleave",(e=>{e.relatedTarget.closest(`#${this.type}-projects ul`)!==t&&t.parentElement.classList.remove("droppable")})),t.addEventListener("drop",(e=>{const n=e.dataTransfer.getData("text/plain");this.projects.find((t=>t.id===n))||(document.getElementById(n).querySelector("button:last-of-type").click(),t.parentElement.classList.remove("droppable"))}))}setSwitchHandlerFunction(t){this.switchHandler=t}addProject(t){this.projects.push(t),function(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}(t.id,`#${this.type}-projects ul`),t.update(this.switchProject.bind(this),this.type)}switchProject(t){this.switchHandler(this.projects.find((e=>e.id===t))),this.projects=this.projects.filter((e=>e.id!==t))}}globalThis.DEFAULT_VALUE="MAX",class{static init(){const t=new c("active"),e=new c("finished");t.setSwitchHandlerFunction(e.addProject.bind(e)),e.setSwitchHandlerFunction(t.addProject.bind(t))}static startAnalytics(){const t=document.createElement("script");t.src="assets/scripts/Utility/Analytics.js",t.defer=!0,document.head.append(t)}}.init()})();
//# sourceMappingURL=app.js.map