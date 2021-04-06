(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-navbar-brand",{attrs:{href:"#"}},[n("router-link",{attrs:{to:"/"}},[e._v("Adobt a Pet")])],1),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{attrs:{right:""}},[n("router-link",{attrs:{to:"/cats"}},[e._v("Cats")])],1),n("b-nav-item",{attrs:{right:""}},[n("router-link",{attrs:{to:"/dogs"}},[e._v("Dogs")])],1)],1)],1)],1)],1),n("b-container",[n("router-view")],1)],1)},o=[],s=(n("5c0b"),n("2877")),i={},c=Object(s["a"])(i,r,o,!1,null,null,null),u=c.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Adopt a Pet")]),n("button",{staticClass:"btn btn-primary",on:{click:e.togglePetForm}},[e._v("Add New Pet")]),e.showPetForm?n("b-form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-group",{attrs:{id:"input-group-2",label:"Pet's Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"text",placeholder:"Enter name",required:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Species:","label-for":"input-3"}},[n("b-form-select",{attrs:{id:"input-3",options:["cats","dogs"],required:""},model:{value:e.formData.species,callback:function(t){e.$set(e.formData,"species",t)},expression:"formData.species"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Pet's Age:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"number",placeholder:"Enter age",required:""},model:{value:e.formData.age,callback:function(t){e.$set(e.formData,"age",t)},expression:"formData.age"}})],1),n("b-button",{attrs:{id:"btn",type:"submit",variant:"primary"}},[e._v("Submit")]),n("b-button",{attrs:{id:"btn",type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)},d=[],f=n("1da1"),b=n("5530"),m=(n("96cf"),n("d4ec")),g=n("bee2"),h=(n("d3b7"),n("d81d"),n("bc3a")),v=n.n(h),y="api/cats",w={headers:{"Content-Type":"application/json"}},_=function(){function e(){Object(m["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getCats",value:function(){return new Promise((function(e,t){v.a.get(y).then((function(t){var n=t.data;e(n.map((function(e){return Object(b["a"])({},e)})))})).catch((function(e){t(e)}))}))}},{key:"addCat",value:function(e){return v.a.post(y,e,w)}}]),e}(),j=_,O="api/dogs",x={headers:{"Content-Type":"application/json"}},P=function(){function e(){Object(m["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getDogs",value:function(){return new Promise((function(e,t){v.a.get(O).then((function(t){var n=t.data;e(n.map((function(e){return Object(b["a"])({},e)})))})).catch((function(e){t(e)}))}))}},{key:"addDog",value:function(e){return v.a.post(O,e,x)}}]),e}(),k=P,D=n("2f62"),C={name:"Home",data:function(){return{showPetForm:!1,formData:{name:"",age:0,species:null}}},computed:Object(b["a"])({},Object(D["c"])(["animalsCount","getAllCats"])),methods:Object(b["a"])(Object(b["a"])({},Object(D["b"])(["addPet"])),{},{togglePetForm:function(){this.showPetForm=!this.showPetForm},handleSubmit:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.formData.species,console.log(e.formData),"cats"!==n){t.next=7;break}return t.next=5,j.addCat(e.formData);case 5:t.next=9;break;case 7:return t.next=9,k.addDog(e.formData);case 9:e.formData={name:"",age:0,species:null};case 10:case"end":return t.stop()}}),t)})))()}})},S=C,$=(n("21bb"),Object(s["a"])(S,p,d,!1,null,null,null)),T=$.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Cats for Adoption")]),n("PetTable",{attrs:{species:"cats",pets:e.cats}})],1)},E=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-table",{attrs:{items:e.pets,outlined:""}})],1)},F=[],H={props:{species:String,pets:Array}},M=H,q=Object(s["a"])(M,R,F,!1,null,null,null),J=q.exports,N={components:{PetTable:J},data:function(){return{cats:[]}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.getCats();case 3:e.cats=t.sent,console.log(e.cats),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},B=N,Z=Object(s["a"])(B,A,E,!1,null,null,null),z=Z.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Dogs for Adoption")]),n("PetTable",{attrs:{species:"dogs",pets:e.dogs}})],1)},I=[],K={components:{PetTable:J},data:function(){return{dogs:[]}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.getDogs();case 3:e.dogs=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](0);case 8:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},L=K,Q=Object(s["a"])(L,G,I,!1,null,null,null),U=Q.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.animal.name)+" ("+e._s(e.$route.params.species)+")")]),n("p",[e._v("Age: "+e._s(e.animal.age)+" years old")]),n("p",[e._v(" Breed: "+e._s(e.animal.breed))])])},W=[],X={data:function(){return{animal:{}}},mounted:function(){var e=this[this.$route.params.species][this.$route.params.id];this.animal=e}},Y=X,ee=Object(s["a"])(Y,V,W,!1,null,null,null),te=ee.exports;a["default"].use(l["a"]);var ne=[{path:"/",name:"Home",component:T},{path:"/cats",name:"cats",component:z},{path:"/dogs",name:"dogs",component:U},{path:"/pets/:species/:id",name:"pet",component:te}],ae=new l["a"]({mode:"history",base:"/",routes:ne}),re=ae,oe=n("2909"),se=(n("99af"),[{name:"Fish",breed:"tuxedo",species:"cat",gender:"male",age:20,color:"black/white",weight:13,location:"fourside",notes:"sweet kitty"},{name:"Hanry",breed:"tabby",species:"cat",gender:"male",age:20,color:"orange/white",weight:17,location:"threed",notes:"Super friendly"},{name:"Ronger",breed:"tabby",species:"cat",gender:"male",age:20,color:"gray",weight:15,location:"threed",notes:"pure breed, Trained for competitions"}]),ie=[{name:"Sheeba",breed:"collie",species:"dog",gender:"female",age:7,color:"black/white",weight:34,location:"fourside",notes:"pure breed, Trained for competitions"},{name:"Hillary",breed:"mut",species:"dog",gender:"female",age:17,color:"orange/white",weight:37,location:"threed",notes:"Super friendly"},{name:"Zeus",breed:"afghan hound",species:"dog",gender:"male",age:9,color:"gray",weight:68,location:"threed",notes:"pure breed, Trained for competitions"}],ce={cats:se,dogs:ie,pets:[].concat(Object(oe["a"])(se),Object(oe["a"])(ie))},ue={appendPet:function(e,t){var n=t.species,a=t.pet;e[n].push(a)}},le={addPet:function(e,t){var n=e.commit;n("appendPet",t)}},pe=(n("4de4"),{animalsCount:function(e){return e.cats.length+e.dogs.length},getAllCats:function(e){return e.pets.filter((function(e){return"cats"===e.species}))}});a["default"].use(D["a"]);var de=new D["a"].Store({state:ce,mutations:ue,actions:le,getters:pe}),fe=n("5f5b");n("f9e3"),n("2dd8");a["default"].use(fe["a"]),a["default"].config.productionTip=!1,new a["default"]({router:re,store:de,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.cc91aeb1.js.map