(function(){"use strict";var t={2946:function(t,e,n){var o=n(9242),i=n(3396);function s(t,e,n,o,s,r){const l=(0,i.up)("Todo");return(0,i.wg)(),(0,i.j4)(l,{onToggle:e[0]||(e[0]=t=>r.toggleMode()),isLight:t.isLight,msg:"TODO"},null,8,["isLight"])}var r=n(7139);const l={id:"header"},a={class:"headerItems"},d={class:"cards"},c=(0,i._)("div",{class:"input-group-text"},[(0,i._)("div",{class:"round"},[(0,i._)("input",{type:"checkbox",checked:"",id:"checkbox"}),(0,i._)("label",{for:"checkbox"})])],-1),u=[c],p={class:"hide"},g=(0,i._)("br",null,null,-1),h=(0,i._)("small",null,"Drag and drop to reorder list",-1);function m(t,e,n,s,c,m){const v=(0,i.up)("TodoList");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[(0,i._)("div",a,[(0,i._)("div",null,[(0,i._)("h1",null,(0,r.zw)(n.msg),1)]),(0,i._)("div",{onClick:e[0]||(e[0]=e=>t.$emit("toggle")),class:(0,r.C_)(["icon",{moon:n.isLight,sun:!n.isLight}])},null,2)])]),(0,i._)("div",d,[(0,i._)("form",{class:(0,r.C_)({darkItems:!n.isLight}),onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>m.addTodo&&m.addTodo(...t)),["prevent"]))},[(0,i._)("div",{class:(0,r.C_)(["input-group input",{darkItems:!n.isLight}])},[(0,i._)("div",{class:(0,r.C_)(["input-group-prepend card",{darkItems:!n.isLight}])},u,2),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>t.input=e),class:(0,r.C_)(["form-control shadow-none",{darkItems:!n.isLight}]),placeholder:"Create a new todo..."},null,2),[[o.nr,t.input]])],2)],34),(0,i._)("div",{class:(0,r.C_)(["card text-center mt-2 section",{darkItems:!n.isLight}])},[(0,i._)("div",{onDragover:e[7]||(e[7]=(0,o.iM)((()=>{}),["prevent"])),onDragenter:e[8]||(e[8]=(0,o.iM)((()=>{}),["prevent"])),class:"card-body w-100"},[(0,i.Wm)(v,{onStartDrag:e[3]||(e[3]=e=>m.startDrag(e,t.index)),onOnDrop:e[4]||(e[4]=e=>m.onDrop(e,t.index)),onDel:e[5]||(e[5]=e=>m.deleteTodo(e,t.index)),onChecked:e[6]||(e[6]=e=>m.handleCheckBox(e,t.index)),data:t.todo,isLight:n.isLight},null,8,["data","isLight"])],32),(0,i._)("div",{class:(0,r.C_)(["card-footer text-muted",{darkItems:!n.isLight}])},[(0,i._)("div",null,[(0,i._)("span",null,(0,r.zw)(t.fullData.filter((t=>0==t.status)).length)+" items left",1)]),(0,i._)("div",p,[(0,i._)("button",{type:"button",onClick:e[9]||(e[9]=t=>m.getAll()),class:"btn btn-link"},"All"),(0,i._)("button",{type:"button",onClick:e[10]||(e[10]=t=>m.getActive()),class:"btn btn-link"},"Active"),(0,i._)("button",{type:"button",onClick:e[11]||(e[11]=t=>m.getCompleted()),class:"btn btn-link"},"Completed")]),(0,i._)("div",null,[(0,i._)("button",{type:"button",onClick:e[12]||(e[12]=t=>m.clearCompleted()),class:"btn btn-link"},"Clear completed")])],2)],2),(0,i._)("form",{class:(0,r.C_)({darkItems:!n.isLight}),onSubmit:e[16]||(e[16]=(0,o.iM)(((...t)=>m.addTodo&&m.addTodo(...t)),["prevent"]))},[(0,i._)("div",{class:(0,r.C_)(["input-group input footer mt-2",{darkItems:!n.isLight}])},[(0,i._)("div",null,[(0,i._)("button",{type:"button",onClick:e[13]||(e[13]=t=>m.getAll()),class:"btn btn-link"},"All"),(0,i._)("button",{type:"button",onClick:e[14]||(e[14]=t=>m.getActive()),class:"btn btn-link"},"Active"),(0,i._)("button",{type:"button",onClick:e[15]||(e[15]=t=>m.getCompleted()),class:"btn btn-link"},"Completed")])],2)],34),g,h])],64)}const v=(0,i._)("div",{class:"mt-5"}," No data Available",-1),_=[v],f=["onDrop","onDragstart"],b=["onClick","checked","id"],k=["for"],C=["onClick"];function L(t,e,n,s,l,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.wy)((0,i._)("h6",null,_,512),[[o.F8,0==n.data.length]]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data,((e,o)=>((0,i.wg)(),(0,i.iD)("div",{key:o,onDrop:e=>t.$emit("onDrop",o),onDragstart:e=>t.$emit("startDrag",o),draggable:"true",class:"input-group d-flex"},[(0,i._)("div",{class:(0,r.C_)(["input-group-prepend card",{darkItems:!n.isLight}])},[(0,i._)("div",{class:(0,r.C_)(["input-group-text",{darkItems:!n.isLight}])},[(0,i._)("div",{class:(0,r.C_)(["round",{darkItems:!n.isLight}])},[(0,i._)("input",{onClick:e=>t.$emit("checked",o),class:(0,r.C_)({darkItems:!n.isLight}),type:"checkbox",checked:e.status,id:o},null,10,b),(0,i._)("label",{for:o,class:(0,r.C_)({darkItems:!n.isLight})},null,10,k)],2)],2)],2),(0,i._)("div",{class:(0,r.C_)(["input-group-text form-control",{done:e.status,darkItems:!n.isLight}])},(0,r.zw)(e.name),3),(0,i._)("div",{class:(0,r.C_)(["times input-group-prepend card",{darkItems:!n.isLight}])},[(0,i._)("span",{onClick:e=>t.$emit("del",o)},"×",8,C)],2)],40,f)))),128))],64)}var D={name:"To-do-list",props:{data:Array,isLight:Boolean},emits:["checked","del","startDrag","onDrop"]},y=n(89);const x=(0,y.Z)(D,[["render",L]]);var A=x;n(7658);let w=[];const I={addToList:({name:t,status:e})=>(w.push({name:t,status:e}),w),removeFromList:({id:t})=>(w.splice(t,1),w),getAllList:()=>w,changeStatus:({id:t})=>(w[t].status=!w[t].status,w),getCompleted:()=>w.filter((t=>1==t.status)),getActive:()=>w.filter((t=>0==t.status)),clearCompleted:()=>(w=I.getActive(),w),changeArrayPosition:(t,e)=>{var n=w[t];return w.splice(t,1),w.splice(e,0,n),w}};var T={name:"To-do",props:{msg:String,isLight:Boolean},emits:["toggle"],components:{TodoList:A},data:()=>({input:"",startINdex:null,todo:I.getAllList(),fullData:I.getAllList()}),methods:{addTodo(){let t=[...I.addToList({name:this.input,status:!1})];this.todo=t,this.fullData=t,this.input=""},getCompleted(){this.todo=[...I.getCompleted()]},deleteTodo(t){let e=[...I.removeFromList({id:t})];this.todo=e,this.fullData=e},getActive(){this.todo=[...I.getActive()]},getAll(){this.todo=[...I.getAllList()]},clearCompleted(){this.todo=[...I.clearCompleted()]},handleCheckBox(t){this.todo=[...I.changeStatus({id:t})]},startDrag(t){this.startINdex=t},onDrop(t){this.todo=[...I.changeArrayPosition(this.startINdex,t)],this.startINdex=null}}};const O=(0,y.Z)(T,[["render",m]]);var j=O,M={name:"App",components:{Todo:j},data:()=>({isLight:!0}),methods:{toggleMode(){this.isLight=!this.isLight,document.getElementById("app").classList.toggle("dark")}}};const S=(0,y.Z)(M,[["render",s]]);var B=S;(0,o.ri)(B).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,s){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],s=t[c][2];for(var l=!0,a=0;a<o.length;a++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,s,r=o[0],l=o[1],a=o[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var c=a(n)}for(e&&e(o);d<r.length;d++)s=r[d],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},o=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2946)}));o=n.O(o)})();
//# sourceMappingURL=app.55c12182.js.map