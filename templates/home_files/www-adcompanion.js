(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ia=da,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
la("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
la("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ma(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function na(){na=function(){};
ka.Symbol||(ka.Symbol=oa)}
function pa(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
pa.prototype.toString=function(){return this.f};
var oa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new pa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function qa(){na();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
qa=function(){}}
function ra(a){qa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||ta});
la("Promise",function(a){function b(h){this.g=0;this.h=void 0;this.f=[];var g=this.j();try{h(g.resolve,g.reject)}catch(k){g.reject(k)}}
function c(){this.f=null}
function d(h){return h instanceof b?h:new b(function(g){g(h)})}
if(a)return a;c.prototype.g=function(h){if(null==this.f){this.f=[];var g=this;this.h(function(){g.l()})}this.f.push(h)};
var e=ka.setTimeout;c.prototype.h=function(h){e(h,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var h=this.f;this.f=[];for(var g=0;g<h.length;++g){var k=h[g];h[g]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(h){this.h(function(){throw h;})};
b.prototype.j=function(){function h(l){return function(p){k||(k=!0,l.call(g,p))}}
var g=this,k=!1;return{resolve:h(this.P),reject:h(this.l)}};
b.prototype.P=function(h){if(h===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(h instanceof b)this.X(h);else{a:switch(typeof h){case "object":var g=null!=h;break a;case "function":g=!0;break a;default:g=!1}g?this.D(h):this.m(h)}};
b.prototype.D=function(h){var g=void 0;try{g=h.then}catch(k){this.l(k);return}"function"==typeof g?this.Y(g,h):this.m(h)};
b.prototype.l=function(h){this.o(2,h)};
b.prototype.m=function(h){this.o(1,h)};
b.prototype.o=function(h,g){if(0!=this.g)throw Error("Cannot settle("+h+", "+g+"): Promise already settled in state"+this.g);this.g=h;this.h=g;this.A()};
b.prototype.A=function(){if(null!=this.f){for(var h=0;h<this.f.length;++h)f.g(this.f[h]);this.f=null}};
var f=new c;b.prototype.X=function(h){var g=this.j();h.S(g.resolve,g.reject)};
b.prototype.Y=function(h,g){var k=this.j();try{h.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(h,g){function k(r,q){return"function"==typeof r?function(u){try{l(r(u))}catch(X){p(X)}}:q}
var l,p,t=new b(function(r,q){l=r;p=q});
this.S(k(h,l),k(g,p));return t};
b.prototype["catch"]=function(h){return this.then(void 0,h)};
b.prototype.S=function(h,g){function k(){switch(l.g){case 1:h(l.h);break;case 2:g(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(h){return new b(function(g,k){k(h)})};
b.race=function(h){return new b(function(g,k){for(var l=ba(h),p=l.next();!p.done;p=l.next())d(p.value).S(g,k)})};
b.all=function(h){var g=ba(h),k=g.next();return k.done?d([]):new b(function(l,p){function t(u){return function(X){r[u]=X;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).S(t(r.length-1),p),k=g.next();while(!k.done)})};
return b});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
la("Reflect.construct",function(){return ua});
la("WeakMap",function(a){function b(g){this.f=(h+=Math.random()+1).toString();if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(g){if(!sa(g,f)){var k=new c;ja(g,f,{value:k})}}
function e(g){var k=Object[g];k&&(Object[g]=function(l){if(l instanceof c)return l;d(l);return k(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),l=new a([[g,2],[k,3]]);if(2!=l.get(g)||3!=l.get(k))return!1;l["delete"](g);l.set(k,4);return!l.has(g)&&4==l.get(k)}catch(p){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var h=0;b.prototype.set=function(g,k){d(g);if(!sa(g,f))throw Error("WeakMap key fail: "+g);g[f][this.f]=k;return this};
b.prototype.get=function(g){return sa(g,f)?g[f][this.f]:void 0};
b.prototype.has=function(g){return sa(g,f)&&sa(g[f],this.f)};
b.prototype["delete"]=function(g){return sa(g,f)&&sa(g[f],this.f)?delete g[f][this.f]:!1};
return b});
la("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return ra(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var p=g.g[l];if(p&&sa(g.g,l))for(var t=0;t<p.length;t++){var r=p[t];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:p,index:t,w:r}}return{id:l,list:p,index:-1,w:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(ba([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=g||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(t){return!1}}())return a;
qa();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.w?l.w.value=k:(l.w={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.w),this.f.previous.next=l.w,this.f.previous=l.w,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.w&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.w.previous.next=g.w.next,g.w.next.previous=g.w.previous,g.w.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).w};
e.prototype.get=function(g){return(g=d(this,g).w)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,g.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
la("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
qa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
la("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ma(this,b,"includes").indexOf(b,c||0)}});
var n=this||self;function v(a){return void 0!==a}
function w(a){return"string"==typeof a}
function x(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){a.ca=void 0;a.u=function(){return a.ca?a.ca:a.ca=new a}}
function xa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ya(a){return"array"==xa(a)}
function za(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Aa(a){return"function"==xa(a)}
function Ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ca(a){return a[Da]||(a[Da]=++Ea)}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Fa:y=Ga;return y.apply(null,arguments)}
function Ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ia=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&v(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function A(a,b){function c(){}
c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ob=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}}
;var B=window;function Ja(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ja);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Ja,Error);Ja.prototype.name="CustomError";var Ka;var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(w(a))return w(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=w(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=w(a)?a.split(""):a,g=0;g<d;g++)if(g in h){var k=h[g];
b.call(c,k,g,a)&&(e[f++]=k)}return e},Na=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=w(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Oa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
C(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Pa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=w(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Qa(a,b){a:{var c=a.length;for(var d=w(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:w(a)?a.charAt(c):a[c]}
function Ra(a,b){return 0<=La(a,b)}
function Sa(a){return Array.prototype.concat.apply([],arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(ya(d))for(var e=0;e<d.length;e+=8192)for(var f=Xa.apply(null,Wa(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;function Ya(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Za(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function $a(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function ab(a){var b=bb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function cb(a){for(var b in a)return!1;return!0}
function db(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function eb(a){var b=xa(a);if("object"==b||"array"==b){if(Aa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=eb(a[c]);return b}return a}
var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function hb(a,b){this.f=a===ib&&b||"";this.g=jb}
hb.prototype.J=!0;hb.prototype.I=function(){return this.f};
hb.prototype.toString=function(){return"Const{"+this.f+"}"};
var jb={},ib={},kb=new hb(ib,"");function lb(){this.f="";this.g=mb}
lb.prototype.J=!0;lb.prototype.I=function(){return this.f.toString()};
lb.prototype.ba=!0;lb.prototype.aa=function(){return 1};
var mb={};var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ob(a,b){if(b)a=a.replace(pb,"&amp;").replace(qb,"&lt;").replace(rb,"&gt;").replace(sb,"&quot;").replace(tb,"&#39;").replace(ub,"&#0;");else{if(!vb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ub,"&#0;"))}return a}
var pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;
function wb(a,b){for(var c=0,d=nb(String(a)).split("."),e=nb(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var g=d[h]||"",k=e[h]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;c=xb(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||xb(0==g[2].length,0==k[2].length)||xb(g[2],k[2]);g=g[3];k=k[3]}while(0==c)}return c}
function xb(a,b){return a<b?-1:a>b?1:0}
;function yb(){this.f="";this.g=zb}
yb.prototype.J=!0;yb.prototype.I=function(){return this.f.toString()};
yb.prototype.ba=!0;yb.prototype.aa=function(){return 1};
function Ab(a){return a instanceof yb&&a.constructor===yb&&a.g===zb?a.f:"type_error:SafeUrl"}
var Bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Cb(a){if(a instanceof yb)return a;a="object"==typeof a&&a.J?a.I():String(a);Bb.test(a)||(a="about:invalid#zClosurez");return Db(a)}
var zb={};function Db(a){var b=new yb;b.f=a;return b}
Db("about:blank");var Eb;a:{var Fb=n.navigator;if(Fb){var Hb=Fb.userAgent;if(Hb){Eb=Hb;break a}}Eb=""}function D(a){return-1!=Eb.indexOf(a)}
;function Ib(){return D("Firefox")||D("FxiOS")}
function Jb(){return D("Safari")&&!(Kb()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||Ib()||D("Silk")||D("Android"))}
function Kb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")}
function Lb(){return D("Android")&&!(Kb()||Ib()||D("Opera")||D("Silk"))}
;function Mb(){this.f="";this.h=Nb;this.g=null}
Mb.prototype.ba=!0;Mb.prototype.aa=function(){return this.g};
Mb.prototype.J=!0;Mb.prototype.I=function(){return this.f.toString()};
function Ob(a){return a instanceof Mb&&a.constructor===Mb&&a.h===Nb?a.f:"type_error:SafeHtml"}
var Nb={};function Pb(a,b){var c=new Mb;c.f=a;c.g=b;return c}
Pb("<!DOCTYPE html>",0);var Qb=Pb("",0);Pb("<br>",0);var Rb=Ya(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Ob(Qb);return!b.parentElement});
function Sb(a,b){if(Rb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Ob(b)}
function Tb(a){var b=new lb;b.f=kb instanceof hb&&kb.constructor===hb&&kb.g===jb?kb.f:"type_error:Const";a.src=(b instanceof lb&&b.constructor===lb&&b.g===mb?b.f:"type_error:TrustedResourceUrl").toString()}
;function Ub(a){return a=ob(a,void 0)}
function Vb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Wb(a){var b=w(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(c,d,e){return d+e.toUpperCase()})}
;function Xb(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Yb(){return Xb()||D("iPad")||D("iPod")}
;function Zb(a){Zb[" "](a);return a}
Zb[" "]=va;function $b(a,b){var c=ac;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var bc=D("Opera"),E=D("Trident")||D("MSIE"),cc=D("Edge"),dc=cc||E,ec=D("Gecko")&&!(-1!=Eb.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),fc=-1!=Eb.toLowerCase().indexOf("webkit")&&!D("Edge"),gc=D("Macintosh"),hc=D("Windows"),ic=D("Android"),jc=Xb(),kc=D("iPad"),lc=D("iPod"),mc=Yb();function nc(){var a=n.document;return a?a.documentMode:void 0}
var oc;a:{var pc="",qc=function(){var a=Eb;if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(cc)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qc&&(pc=qc?qc[1]:"");if(E){var rc=nc();if(null!=rc&&rc>parseFloat(pc)){oc=String(rc);break a}}oc=pc}var sc=oc,ac={};function tc(a){return $b(a,function(){return 0<=wb(sc,a)})}
var uc;uc=n.document&&E?nc():void 0;var vc=Ib(),wc=Xb()||D("iPod"),xc=D("iPad"),yc=Lb(),zc=Kb(),Ac=Jb()&&!Yb();var Bc=null,Cc=null;function Dc(a){this.f=a||{cookie:""}}
m=Dc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');v(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ia()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=v(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Dc("undefined"==typeof document?null:document);var Fc=!E||9<=Number(uc),Gc=!ec&&!E||E&&9<=Number(uc)||ec&&tc("1.9.1"),Hc=E&&!tc("9");function F(a,b){this.x=v(a)?a:0;this.y=v(b)?b:0}
m=F.prototype;m.clone=function(){return new F(this.x,this.y)};
m.equals=function(a){return a instanceof F&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ic(a,b){return new F(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Lc(a,b){this.width=a;this.height=b}
m=Lc.prototype;m.clone=function(){return new Lc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Mc(a){return a?new Nc(Oc(a)):Ka||(Ka=new Nc)}
function G(a){return w(a)?document.getElementById(a):a}
function Pc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Qc(document,"*",a,b)}
function H(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Qc(c,"*",a,b)[0]||null}return c||null}
function Qc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&Ra(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Rc(a,b){Za(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Sc.hasOwnProperty(d)?a.setAttribute(Sc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Sc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Tc(a){a=a.document;a=Uc(a)?a.documentElement:a.body;return new Lc(a.clientWidth,a.clientHeight)}
function Vc(a){var b=Wc(a);a=Xc(a);return E&&tc("10")&&a.pageYOffset!=b.scrollTop?new F(b.scrollLeft,b.scrollTop):new F(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Wc(a){return a.scrollingElement?a.scrollingElement:!fc&&Uc(a)?a.documentElement:a.body||a.documentElement}
function Xc(a){return a.parentWindow||a.defaultView}
function Yc(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!Fc&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Ub(h.name),'"');if(h.type){f.push(' type="',Ub(h.type),'"');var g={};gb(g,h);delete g.type;h=g}f.push(">");f=f.join("")}f=e.createElement(f);h&&(w(h)?f.className=h:ya(h)?f.className=h.join(" "):Rc(f,h));2<d.length&&Zc(e,f,d);return f}
function Zc(a,b,c){function d(g){g&&b.appendChild(w(g)?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];if(!za(f)||Ba(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ba(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if(Aa(f)){h="function"==typeof f.item;break a}}h=!1}C(h?Ta(f):f,d)}}}
function Uc(a){return"CSS1Compat"==a.compatMode}
function $c(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function ad(a){return Gc&&void 0!=a.children?a.children:Ma(a.childNodes,function(b){return 1==b.nodeType})}
function bd(a){return Ba(a)&&1==a.nodeType}
function cd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Oc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function dd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Oc(a).createTextNode(String(b)))}}
function ed(a,b){var c=[];return fd(a,b,c,!0)?c[0]:void 0}
function fd(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||fd(a,b,c,d))return!0;a=a.nextSibling}return!1}
var gd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},hd={IMG:" ",BR:"\n"};function id(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!jd(a)||kd(a)):jd(a)&&kd(a))&&E){var c;!Aa(a.getBoundingClientRect)||E&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function jd(a){return E&&!tc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function kd(a){a=a.tabIndex;return"number"==typeof a&&0<=a&&32768>a}
function ld(a){if(Hc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];md(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Hc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function md(a,b,c){if(!(a.nodeName in gd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in hd)b.push(hd[a.nodeName]);else for(a=a.firstChild;a;)md(a,b,c),a=a.nextSibling}
function nd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return od(a,function(f){return(!e||f.nodeName==e)&&(!c||w(f.className)&&Ra(f.className.split(/\s+/),c))},!0,d)}
function I(a,b){return nd(a,null,b,void 0)}
function od(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Nc(a){this.f=a||n.document||document}
Nc.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Nc.prototype.createElement=function(a){return this.f.createElement(String(a))};
Nc.prototype.appendChild=function(a,b){a.appendChild(b)};
Nc.prototype.isElement=bd;var pd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qd(a){return a?decodeURI(a):a}
function rd(a,b){return b.match(pd)[a]||null}
function sd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function td(a,b,c){if(ya(b))for(var d=0;d<b.length;d++)td(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ud(a,b){for(var c=[],d=b||0;d<a.length;d+=2)td(a[d],a[d+1],c);return c.join("&")}
function vd(a){var b=[],c;for(c in a)td(c,a[c],b);return b.join("&")}
function wd(a,b){var c=2==arguments.length?ud(arguments[1],0):ud(arguments,1);return sd(a,c)}
function xd(a,b){var c=vd(b);return sd(a,c)}
var yd=/#|$/;function zd(a,b){var c=a.search(yd);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Ad(a){var b=Bd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Cd(){var a=[];Ad(function(b){a.push(b)});
return a}
var Bd={xb:"allow-forms",yb:"allow-modals",zb:"allow-orientation-lock",Ab:"allow-pointer-lock",Bb:"allow-popups",Cb:"allow-popups-to-escape-sandbox",Db:"allow-presentation",Eb:"allow-same-origin",Fb:"allow-scripts",Gb:"allow-top-navigation",Hb:"allow-top-navigation-by-user-activation"},Dd=Ya(function(){return Cd()});
function Ed(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};C(Dd(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function Fd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=Fd.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new Fd(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Gd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Gd.prototype.clone=function(){return new Gd(this.left,this.top,this.width,this.height)};
Gd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Gd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Gd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hd(a,b,c){if(w(b))(b=Id(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Id(c,d);f&&(c.style[f]=e)}}
var Jd={};function Id(a,b){var c=Jd[b];if(!c){var d=Vb(b);c=d;void 0===a.style[d]&&(d=(fc?"Webkit":ec?"Moz":E?"ms":bc?"O":null)+Wb(d),void 0!==a.style[d]&&(c=d));Jd[b]=c}return c}
function Kd(a,b){var c=Oc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ld(a,b){return Kd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Md(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}E&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Nd(a){if(E&&!(8<=Number(uc)))return a.offsetParent;var b=Oc(a),c=Ld(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ld(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Od(a){for(var b=new Fd(0,Infinity,Infinity,0),c=Mc(a),d=c.f.body,e=c.f.documentElement,f=Wc(c.f);a=Nd(a);)if(!(E&&0==a.clientWidth||fc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Ld(a,"overflow")){var h=Pd(a),g=new F(a.clientLeft,a.clientTop);h.x+=g.x;h.y+=g.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Tc(Xc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Pd(a){var b=Oc(a),c=new F(0,0);var d=b?Oc(b):document;d=!E||9<=Number(uc)||Uc(Mc(d).f)?d.documentElement:d.body;if(a==d)return c;a=Md(a);b=Vc(Mc(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Qd(a){a=Md(a);return new F(a.left,a.top)}
function Rd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Sd(a){var b=Td;if("none"!=Ld(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Td(a){var b=a.offsetWidth,c=a.offsetHeight,d=fc&&!b&&!c;return v(b)&&!d||!a.getBoundingClientRect?new Lc(b,c):(a=Md(a),new Lc(a.right-a.left,a.bottom-a.top))}
function Ud(a){var b=Pd(a);a=Sd(a);return new Gd(b.x,b.y,a.width,a.height)}
function Vd(a){return"rtl"==Ld(a,"direction")}
function Wd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Xd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Wd(a,c):0}
var Yd={thin:2,medium:4,thick:6};function Zd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Yd?Yd[c]:Wd(a,c)}
;var $d=(new Date).getTime();function ae(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(t){for(var r=h,q=0;64>q;q+=4)r[q/4]=t[q]<<24|t[q+1]<<16|t[q+2]<<8|t[q+3];for(q=16;80>q;q++)t=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(t<<1|t>>>31)&4294967295;t=e[0];var u=e[1],X=e[2],U=e[3],Jc=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Gb=U^u&(X^U);var Kc=1518500249}else Gb=u^X^U,Kc=1859775393;else 60>q?(Gb=u&X|U&(u|X),Kc=2400959708):(Gb=u^X^U,Kc=3395469782);Gb=((t<<5|t>>>27)&4294967295)+Gb+Jc+Kc+r[q]&4294967295;Jc=U;U=X;X=(u<<30|u>>>2)&4294967295;u=t;t=Gb}e[0]=e[0]+t&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+X&4294967295;e[3]=e[3]+U&4294967295;e[4]=e[4]+Jc&4294967295}
function c(t,r){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var q=[],u=0,X=t.length;u<X;++u)q.push(t.charCodeAt(u));t=q}r||(r=t.length);q=0;if(0==l)for(;q+64<r;)b(t.slice(q,q+64)),q+=64,p+=64;for(;q<r;)if(f[l++]=t[q++],p++,64==l)for(l=0,b(f);q+64<r;)b(t.slice(q,q+64)),q+=64,p+=64}
function d(){var t=[],r=8*p;56>l?c(g,56-l):c(g,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var u=24;0<=u;u-=8)t[r++]=e[q]>>u&255;return t}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Oa:function(){for(var t=d(),r="",q=0;q<t.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(t[q]/16))+"0123456789ABCDEF".charAt(t[q]%16);return r}}}
;function ce(a,b,c){var d=[],e=[];if(1==(ya(c)?2:1))return e=[b,a],C(d,function(g){e.push(g)}),de(e.join(" "));
var f=[],h=[];C(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(g){e.push(g)});
a=de(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function de(a){var b=be();b.update(a);return b.Oa().toLowerCase()}
;function ee(a){var b=ae(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Dc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Dc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&b&&c?[c,ce(ae(d),b,a||null)].join(" "):null}return null}
;function fe(a,b){this.h=a;this.j=b;this.g=0;this.f=null}
fe.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function ge(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function he(a){n.setTimeout(function(){throw a;},0)}
var ie;
function je(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Tb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Ob(Qb));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==g||k.origin==g)&&k.data==
h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(v(c.next)){c=c.next;var e=c.ha;c.ha=null;e()}};
return function(e){d.next={ha:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}
;function ke(){this.g=this.f=null}
var me=new fe(function(){return new le},function(a){a.reset()});
ke.prototype.add=function(a,b){var c=me.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
ke.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function le(){this.next=this.scope=this.f=null}
le.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
le.prototype.reset=function(){this.next=this.scope=this.f=null};function ne(a,b){oe||pe();qe||(oe(),qe=!0);re.add(a,b)}
var oe;function pe(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);oe=function(){a.then(se)}}else oe=function(){var b=se;
!Aa(n.setImmediate)||n.Window&&n.Window.prototype&&!D("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(ie||(ie=je()),ie(b)):n.setImmediate(b)}}
var qe=!1,re=new ke;function se(){for(var a;a=re.remove();){try{a.f.call(a.scope)}catch(b){he(b)}ge(me,a)}qe=!1}
;function te(){this.g=-1}
;function ue(){this.g=-1;this.g=64;this.f=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.h=0;this.reset()}
A(ue,te);ue.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.h=0};
function ve(a,b,c){c||(c=0);var d=a.o;if(w(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):(f=c^h^g,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
ue.prototype.update=function(a,b){if(null!=a){v(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)ve(this,a,d),d+=this.g;if(w(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){ve(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){ve(this,e);f=0;break}}this.h=f;this.l+=b}};
ue.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.j,56-this.h):this.update(this.j,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.m[c]=b&255,b/=256;ve(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function we(){this.h=this.h;this.j=this.j}
we.prototype.h=!1;we.prototype.U=function(){return this.h};
we.prototype.dispose=function(){this.h||(this.h=!0,this.Z())};
we.prototype.Z=function(){if(this.j)for(;this.j.length;)this.j.shift()()};
function xe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ye(a){if(a.classList)return a.classList;a=a.className;return w(a)&&a.match(/\S+/g)||[]}
function J(a,b){return a.classList?a.classList.contains(b):Ra(ye(a),b)}
function K(a,b){a.classList?a.classList.add(b):J(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ze(a,b){if(a.classList)C(b,function(e){K(a,e)});
else{var c={};C(ye(a),function(e){c[e]=!0});
C(b,function(e){c[e]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function L(a,b){a.classList?a.classList.remove(b):J(a,b)&&(a.className=Ma(ye(a),function(c){return c!=b}).join(" "))}
function Ae(a,b){a.classList?C(b,function(c){L(a,c)}):a.className=Ma(ye(a),function(c){return!Ra(b,c)}).join(" ")}
function Be(a,b,c){c?K(a,b):L(a,b)}
function Ce(a,b,c){J(a,b)&&(L(a,b),K(a,c))}
function De(a,b){var c=!J(a,b);Be(a,b,c)}
;var Ee=!E&&!Jb();function Fe(a,b){if(/-[a-z]/.test(b))return null;if(Ee&&a.dataset){if(Lb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Ge="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function He(){}
He.prototype.next=function(){throw Ge;};
He.prototype.G=function(){return this};
function Ie(a){if(a instanceof He)return a;if("function"==typeof a.G)return a.G(!1);if(za(a)){var b=0,c=new He;c.next=function(){for(;;){if(b>=a.length)throw Ge;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Je(a,b){if(za(a))try{C(a,b,void 0)}catch(c){if(c!==Ge)throw c;}else{a=Ie(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ge)throw c;}}}
function Ke(a){if(za(a))return Ta(a);a=Ie(a);var b=[];Je(a,function(c){b.push(c)});
return b}
;function Le(a,b){this.h={};this.f=[];this.H=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Le)for(c=Me(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Me(a){Ne(a);return a.f.concat()}
m=Le.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Oe;Ne(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Oe(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.H=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.H++,this.f.length>2*this.g&&Ne(this),!0):!1};
function Ne(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.H++);this.h[a]=b};
m.forEach=function(a,b){for(var c=Me(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Le(this)};
m.G=function(a){Ne(this);var b=0,c=this.H,d=this,e=new He;e.next=function(){if(c!=d.H)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Ge;var f=d.f[b++];return a?f:d.h[f]};
return e};function Pe(a){var b=[];Qe(new Re,a,b);return b.join("")}
function Re(){}
function Qe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Se(d,c),c.push(":"),Qe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Se(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Te={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ue=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Se(a,b){b.push('"',a.replace(Ue,function(c){var d=Te[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Te[c]=d);return d}),'"')}
;var Ve=function(){if(hc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Eb))?a[1]:"0"}return gc?(a=/10[_.][0-9_.]+/,(a=a.exec(Eb))?a[0].replace(/_/g,"."):"10"):ic?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Eb))?a[1]:""):jc||kc||lc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Eb))?a[1].replace(/_/g,"."):""):""}();function We(a){return(a=a.exec(Eb))?a[1]:""}
var Xe=function(){if(vc)return We(/Firefox\/([0-9.]+)/);if(E||cc||bc)return sc;if(zc)return Yb()?We(/CriOS\/([0-9.]+)/):We(/Chrome\/([0-9.]+)/);if(Ac&&!Yb())return We(/Version\/([0-9.]+)/);if(wc||xc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Eb);if(a)return a[1]+"."+a[2]}else if(yc)return(a=We(/Android\s+([0-9.]+)/))?a:We(/Version\/([0-9.]+)/);return""}();function Ye(a,b,c,d,e,f,h){var g;if(g=c.offsetParent){var k="HTML"==g.tagName||"BODY"==g.tagName;if(!k||"static"!=Ld(g,"position")){var l=Pd(g);if(!k){k=Vd(g);var p;if(p=k){if(p=Ac)p=0<=wb(Xe,10);var t;if(t=mc)t=0<=wb(Ve,10);p=ec||p||t}k=p?-g.scrollLeft:!k||dc&&tc("8")||"visible"==Ld(g,"overflowX")?g.scrollLeft:g.scrollWidth-g.clientWidth-g.scrollLeft;l=Ic(l,new F(k,g.scrollTop))}}}g=l||new F;l=Ud(a);if(k=Od(a)){var r=new Gd(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,r.left);p=
Math.min(l.left+l.width,r.left+r.width);k<=p&&(t=Math.max(l.top,r.top),r=Math.min(l.top+l.height,r.top+r.height),t<=r&&(l.left=k,l.top=t,l.width=p-k,l.height=r-t))}k=Mc(a);t=Mc(c);if(k.f!=t.f){p=k.f.body;t=Xc(t.f);r=new F(0,0);var q=(q=Oc(p))?Xc(q):window;b:{try{Zb(q.parent);var u=!0;break b}catch(Jc){}u=!1}if(u){u=p;do{var X=q==t?Pd(u):Qd(u);r.x+=X.x;r.y+=X.y}while(q&&q!=t&&q!=q.parent&&(u=q.frameElement)&&(q=q.parent))}u=Ic(r,Pd(p));!E||9<=Number(uc)||Uc(k.f)||(u=Ic(u,Vc(k.f)));l.left+=u.x;l.top+=
u.y}a=Ze(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new F(b,l.top+(a&1?l.height:0));b=Ic(b,g);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var U;h&&(U=Od(c))&&(U.top-=g.y,U.right-=g.x,U.bottom-=g.y,U.left-=g.x);return $e(b,c,d,f,U,h,void 0)}
function $e(a,b,c,d,e,f,h){a=a.clone();var g=Ze(b,c);c=Sd(b);h=h?h.clone():c.clone();a=a.clone();h=h.clone();var k=0;if(d||0!=g)g&4?a.x-=h.width+(d?d.right:0):g&2?a.x-=h.width/2:d&&(a.x+=d.left),g&1?a.y-=h.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;g=h;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+g.width>e.right&&(g.width=Math.min(e.right-d.x,
l+g.width-e.left),g.width=Math.max(g.width,0),k|=4)}d.x+g.width>e.right&&f&1&&(d.x=Math.max(e.right-g.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+g.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+g.height>e.bottom&&(g.height=Math.min(e.bottom-d.y,l+g.height-e.top),g.height=Math.max(g.height,0),k|=8));d.y+g.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-g.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+g.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new Gd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=h.width;f.height=h.height;e=k;if(e&496)return e;a=new F(f.left,f.top);a instanceof F?(h=a.x,a=a.y):(h=a,a=void 0);b.style.left=Rd(h,!1);b.style.top=Rd(a,!1);h=new Lc(f.width,f.height);c==h||c&&h&&c.width==h.width&&c.height==h.height||(c=h,a=Uc(Mc(Oc(b)).f),!E||tc("10")||a&&tc("8")?(b=b.style,ec?b.MozBoxSizing="border-box":fc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(h=b.style,a?(E?(a=Xd(b,"paddingLeft"),f=Xd(b,"paddingRight"),d=Xd(b,"paddingTop"),g=Xd(b,"paddingBottom"),a=new Fd(d,f,g,a)):(a=Kd(b,"paddingLeft"),f=Kd(b,"paddingRight"),d=Kd(b,"paddingTop"),g=Kd(b,"paddingBottom"),a=new Fd(parseFloat(d),parseFloat(f),parseFloat(g),parseFloat(a))),!E||9<=Number(uc)?(f=Kd(b,"borderLeftWidth"),d=Kd(b,"borderRightWidth"),g=Kd(b,"borderTopWidth"),b=Kd(b,"borderBottomWidth"),b=new Fd(parseFloat(g),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Zd(b,"borderLeft"),
d=Zd(b,"borderRight"),g=Zd(b,"borderTop"),b=Zd(b,"borderBottom"),b=new Fd(g,d,b,f)),h.pixelWidth=c.width-b.left-a.left-a.right-b.right,h.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(h.pixelWidth=c.width,h.pixelHeight=c.height)));return e}
function Ze(a,b){return(b&8&&Vd(a)?b^4:b)&-9}
;function af(a){this.f=0;this.o=void 0;this.j=this.g=this.h=null;this.l=this.m=!1;if(a!=va)try{var b=this;a.call(void 0,function(c){bf(b,2,c)},function(c){bf(b,3,c)})}catch(c){bf(this,3,c)}}
function cf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
cf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var df=new fe(function(){return new cf},function(a){a.reset()});
function ef(a,b,c){var d=df.get();d.g=a;d.onRejected=b;d.context=c;return d}
af.prototype.then=function(a,b,c){return ff(this,Aa(a)?a:null,Aa(b)?b:null,c)};
af.prototype.$goog_Thenable=!0;af.prototype.cancel=function(a){0==this.f&&ne(function(){var b=new gf(a);hf(this,b)},this)};
function hf(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.h||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?hf(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):jf(c),kf(c,e,3,b)))}a.h=null}else bf(a,3,b)}
function lf(a,b){a.g||2!=a.f&&3!=a.f||mf(a);a.j?a.j.next=b:a.g=b;a.j=b}
function ff(a,b,c,d){var e=ef(null,null,null);e.f=new af(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);!v(k)&&g instanceof gf?h(g):f(k)}catch(l){h(l)}}:h});
e.f.h=a;lf(a,e);return e.f}
af.prototype.D=function(a){this.f=0;bf(this,2,a)};
af.prototype.P=function(a){this.f=0;bf(this,3,a)};
function bf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.D,f=a.P;if(d instanceof af){lf(d,ef(e||va,f||null,a));var h=!0}else{if(d)try{var g=!!d.$goog_Thenable}catch(l){g=!1}else g=!1;if(g)d.then(e,f,a),h=!0;else{if(Ba(d))try{var k=d.then;if(Aa(k)){nf(d,k,e,f,a);h=!0;break a}}catch(l){f.call(a,l);h=!0;break a}h=!1}}}h||(a.o=c,a.f=b,a.h=null,mf(a),3!=b||c instanceof gf||of(a,c))}}
function nf(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function mf(a){a.m||(a.m=!0,ne(a.A,a))}
function jf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
af.prototype.A=function(){for(var a;a=jf(this);)kf(this,a,this.f,this.o);this.m=!1};
function kf(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.l;a=a.h)a.l=!1;if(b.f)b.f.h=null,pf(b,c,d);else try{b.h?b.g.call(b.context):pf(b,c,d)}catch(e){qf.call(null,e)}ge(df,b)}
function pf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function of(a,b){a.l=!0;ne(function(){a.l&&qf.call(null,b)})}
var qf=he;function gf(a){Ja.call(this,a)}
A(gf,Ja);gf.prototype.name="cancel";function M(a){we.call(this);this.o=1;this.l=[];this.m=0;this.f=[];this.g={};this.A=!!a}
A(M,we);m=M.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.o;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.o=e+3;d.push(e);return e};
function rf(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.O(d),b.apply(void 0,arguments))},a)}
function sf(a,b,c){if(b=a.g[b]){var d=a.f;(b=Qa(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.O(b)}}
m.O=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.m)this.l.push(a),this.f[a+1]=va;else{if(c){var d=La(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.F=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var h=c[e];tf(this.f[h+1],this.f[h+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.O(c)}}return 0!=e}return!1};
function tf(a,b,c){ne(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.O,this),delete this.g[a])}else this.f.length=0,this.g={}};
function uf(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=uf(a,d);return c}
m.Z=function(){M.v.Z.call(this);this.clear();this.l.length=0};function vf(a){this.f=a}
vf.prototype.set=function(a,b){v(b)?this.f.set(a,Pe(b)):this.f.remove(a)};
vf.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
vf.prototype.remove=function(a){this.f.remove(a)};function wf(a){this.f=a}
A(wf,vf);function xf(a){this.data=a}
function yf(a){return!v(a)||a instanceof xf?a:new xf(a)}
wf.prototype.set=function(a,b){wf.v.set.call(this,a,yf(b))};
wf.prototype.g=function(a){a=wf.v.get.call(this,a);if(!v(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
wf.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!v(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function zf(a){this.f=a}
A(zf,wf);zf.prototype.set=function(a,b,c){if(b=yf(b)){if(c){if(c<Ia()){zf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ia()}zf.v.set.call(this,a,b)};
zf.prototype.g=function(a){var b=zf.v.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ia()||c&&c>Ia())zf.prototype.remove.call(this,a);else return b}};function Af(){}
;function Bf(){}
A(Bf,Af);Bf.prototype.clear=function(){var a=Ke(this.G(!0)),b=this;C(a,function(c){b.remove(c)})};function Cf(a){this.f=a}
A(Cf,Bf);m=Cf.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.G=function(a){var b=0,c=this.f,d=new He;d.next=function(){if(b>=c.length)throw Ge;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!w(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Df(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(Df,Cf);function Ef(a,b){this.g=a;this.f=null;if(E&&!(9<=Number(uc))){Ff||(Ff=new Le);this.f=Ff.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ff.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(Ef,Bf);var Gf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ff=null;function Hf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Gf[b]})}
m=Ef.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Hf(a),b);If(this)};
m.get=function(a){a=this.f.getAttribute(Hf(a));if(!w(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Hf(a));If(this)};
m.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new He;d.next=function(){if(b>=c.length)throw Ge;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!w(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);If(this)};
function If(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Jf(a,b){this.g=a;this.f=b+"::"}
A(Jf,Bf);Jf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Jf.prototype.get=function(a){return this.g.get(this.f+a)};
Jf.prototype.remove=function(a){this.g.remove(this.f+a)};
Jf.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new He;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Kf(){this.g=[];this.f=-1}
Kf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Kf.prototype.get=function(a){return!!this.g[a]};
function Lf(a){-1==a.f&&(a.f=Oa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var Mf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Nf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Nf);function Of(a){var b=arguments;if(1<b.length)Nf[b[0]]=b[1];else{b=b[0];for(var c in b)Nf[c]=b[c]}}
function N(a,b){return a in Nf?Nf[a]:b}
function Pf(a){return N(a,void 0)}
;function Qf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Rf(b)}}:a}
function Rf(a,b,c,d,e){var f=x("yt.logging.errors.log");f?f(a,b,c,d,e):(f=N("ERRORS",[]),f.push([a,b,c,d,e]),Of("ERRORS",f))}
;function O(a,b){Aa(a)&&(a=Qf(a));return window.setTimeout(a,b)}
function Sf(a){window.clearTimeout(a)}
;var Tf=0;function Uf(a){var b=a.__yt_uid_key;b||(b=Vf(),a.__yt_uid_key=b);return b}
function Wf(a,b){a=G(a);b=G(b);return!!od(a,function(c){return c===b},!0,void 0)}
function Xf(a,b){var c=Qc(document,a,null,b);return c.length?c[0]:null}
function Yf(){var a=document,b;Pa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Zf(){Be(document.body,"hide-players",!1);C(Pc("preserve-players"),function(a){L(a,"preserve-players")})}
var Vf=x("ytDomDomGetNextId")||function(){return++Tf};
z("ytDomDomGetNextId",Vf);var $f=x("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.O;M.prototype.publish=M.prototype.F;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",$f);var ag=x("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",ag);var bg=x("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",bg);var cg=x("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",cg);
function dg(a,b,c){var d=eg();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){ag[e]&&b.apply(c||window,f)};
try{cg[a]?h():O(h,0)}catch(g){Rf(g)}},c);
ag[e]=!0;bg[a]||(bg[a]=[]);bg[a].push(e);return e}return 0}
function fg(a){var b=eg();b&&("number"==typeof a?a=[a]:w(a)&&(a=[parseInt(a,10)]),C(a,function(c){b.unsubscribeByKey(c);delete ag[c]}))}
function P(a,b){var c=eg();return c?c.publish.apply(c,arguments):!1}
function gg(a,b){cg[a]=!0;var c=eg();c&&c.publish.apply(c,arguments);cg[a]=!1}
function eg(){return x("ytPubsubPubsubInstance")}
;function hg(a,b){(a=G(a))&&a.style&&(a.style.display=b?"":"none",Be(a,"hid",!b))}
function ig(a){return(a=G(a))?"none"!=a.style.display&&!J(a,"hid"):!1}
function jg(a){C(arguments,function(b){!za(b)||b instanceof Element?hg(b,!0):C(b,function(c){jg(c)})})}
function kg(a){C(arguments,function(b){!za(b)||b instanceof Element?hg(b,!1):C(b,function(c){kg(c)})})}
;function lg(a,b,c){a&&(a.dataset?a.dataset[mg(b)]=String(c):a.setAttribute("data-"+b,c))}
function ng(a,b){return a?a.dataset?a.dataset[mg(b)]:a.getAttribute("data-"+b):null}
function og(a,b){a&&(a.dataset?delete a.dataset[mg(b)]:a.removeAttribute("data-"+b))}
var pg={};function mg(a){return pg[a]||(pg[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function Q(a,b){this.version=a;this.args=b}
;function R(a,b){this.topic=a;this.f=b}
R.prototype.toString=function(){return this.topic};function qg(){}
function rg(){}
qg.prototype=ca(rg.prototype);qg.prototype.constructor=qg;if(ia)ia(qg,rg);else for(var sg in rg)if("prototype"!=sg)if(Object.defineProperties){var tg=Object.getOwnPropertyDescriptor(rg,sg);tg&&Object.defineProperty(qg,sg,tg)}else qg[sg]=rg[sg];qg.v=rg.prototype;function ug(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():O(a,c||0)}
qg.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
wa(qg);qg.u();var vg=x("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.O;M.prototype.publish=M.prototype.F;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",vg);var wg=x("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",wg);var xg=x("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",xg);var yg=x("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",yg);
z("ytPubsub2Pubsub2SkipSubKey",null);function S(a,b){var c=zg();c&&c.publish.call(c,a.toString(),a,b)}
function Ag(a,b,c){var d=zg();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var g=x("ytPubsub2Pubsub2SkipSubKey");g&&g==e||(g=function(){if(wg[e])try{if(h&&a instanceof R&&a!=f)try{var k=a.f,l=h;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.H){var p=new k;k.H=p.version}var t=k.H}catch(r){}if(!t||l.version!=t)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(k,Ta(l.args))}catch(r){throw r.message=
"yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+r.message,r;}b.call(c||window,h)}catch(r){Rf(r)}},yg[a.toString()]?x("yt.scheduler.instance")?ug(g,1,void 0):O(g,0):g())});
wg[e]=!0;xg[a.toString()]||(xg[a.toString()]=[]);xg[a.toString()].push(e);return e}
function Bg(a){var b=zg();b&&("number"==typeof a&&(a=[a]),C(a,function(c){b.unsubscribeByKey(c);delete wg[c]}))}
function zg(){return x("ytPubsub2Pubsub2Instance")}
;var Cg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Dg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Cg||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
Dg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Dg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Dg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var bb=x("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",bb);var Eg=x("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",Eg);
function Fg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ab(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,h=Ba(e[4])&&Ba(d)&&db(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
function T(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Fg(a,b,c,d);if(e)return e;e=++Eg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new Dg(g);if(!od(g.relatedTarget,function(k){return k==a},!0))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Dg(g);
g.currentTarget=a;return c.call(a,g)};
h=Qf(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Gg()||"boolean"==typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);bb[e]=[a,b,c,h,d];return e}
function Hg(a,b,c,d){var e=a||document;return T(e,b,function(f){var h=od(f.target,function(g){return g===e||d(g)},!0);
h&&h!==e&&!h.disabled&&(f.currentTarget=h,c.call(h,f))})}
function Ig(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Gg=Ya(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Jg(a,b,c,d){return Hg(a,b,c,function(e){return J(e,d)})}
function Kg(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function V(a){a&&("string"==typeof a&&(a=[a]),C(a,function(b){if(b in bb){var c=bb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Gg()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete bb[b]}}))}
;var Lg={},Mg="ontouchstart"in document;function Ng(a,b,c){b in Lg||(Lg[b]=new M);Lg[b].subscribe(a,c)}
function Og(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return od(c,function(e){return J(e,b)},!0,d)}
function Pg(a){var b="mouseover"==a.type&&"mouseenter"in Lg||"mouseout"==a.type&&"mouseleave"in Lg,c=a.type in Lg||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Lg[b];for(var d in c.g){var e=Og(b,d,a.target);e&&!od(a.relatedTarget,function(f){return f==e},!0)&&c.F(d,e,b,a)}}if(b=Lg[a.type])for(d in b.g)(e=Og(a.type,d,a.target))&&b.F(d,e,a.type,a)}}
T(document,"blur",Pg,!0);T(document,"change",Pg,!0);T(document,"click",Pg);T(document,"focus",Pg,!0);T(document,"mouseover",Pg);T(document,"mouseout",Pg);T(document,"mousedown",Pg);T(document,"keydown",Pg);T(document,"keyup",Pg);T(document,"keypress",Pg);T(document,"cut",Pg);T(document,"paste",Pg);Mg&&(T(document,"touchstart",Pg),T(document,"touchend",Pg),T(document,"touchcancel",Pg));function Qg(a){this.l=a;this.o={};this.D=[];this.A=[]}
m=Qg.prototype;m.B=function(a){return I(a,W(this))};
function W(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
m.unregister=function(){fg(this.D);this.D.length=0;Bg(this.A);this.A.length=0};
m.init=va;m.dispose=va;function Rg(a,b,c){a.D.push(dg(b,c,a))}
function Sg(a,b,c){a.A.push(Ag(b,c,a))}
function Y(a,b,c,d){d=W(a,d);var e=y(c,a);Ng(d,b,e);a.o[c]=e}
function Z(a,b,c,d){if(b in Lg){var e=Lg[b];sf(e,W(a,d),a.o[c]);0>=uf(e)&&(e.dispose(),delete Lg[b])}delete a.o[c]}
m.N=function(a,b,c){var d=this.i(a,b);if(d&&(d=x(d))){var e=Wa(arguments,2);Va(e,0,0,a);d.apply(null,e)}};
m.i=function(a,b){return ng(a,b)};
function Tg(a,b){lg(a,"tooltip-text",b)}
;function Ug(a){Qg.call(this,a);this.h=null}
A(Ug,Qg);m=Ug.prototype;m.B=function(a){var b=Qg.prototype.B.call(this,a);return b?b:a};
m.register=function(){Rg(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){Vg(this);Ug.v.dispose.call(this)};
m.i=function(a,b){var c=Ug.v.i.call(this,a,b);return c?c:(c=Ug.v.i.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.B(a);if(b){K(b,W(this,"active"));var c=Wg(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Xg(this,a,c);var d=W(this,"card-visible"),e=this.i(a,"card-delegate-show")&&this.i(b,"card-action");this.N(b,"card-action",a);this.h=a;kg(c);O(y(function(){e||(jg(c),P("yt-uix-card-show",b,a,c));Yg(c);K(c,d);P("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Wg(a,b,c){var d=c||b,e=W(a,"card");c=Zg(a,d);var f=G(W(a,"card")+Uf(d));if(f)return a=H(W(a,"card-body"),f),cd(a,c)||($c(c),a.appendChild(c)),f;f=document.createElement("div");f.id=W(a,"card")+Uf(d);f.className=e;(d=a.i(d,"card-class"))&&ze(f,d.split(/\s+/));d=document.createElement("div");d.className=W(a,"card-border");b=a.i(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");
h.className=W(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;$c(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Xg(a,b,c){var d=a.i(b,"orientation")||"horizontal",e=H(W(a,"anchor"),b)||b,f=a.i(b,"position"),h=!!a.i(b,"force-position"),g=a.i(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var p=13;var t=8}else l&&!k?(p=12,t=9):!l&&k?(p=9,t=12):(p=8,t=13);var r=Vd(document.body);f=Vd(b);r!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var q=new F(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,q=new F(b.offsetWidth+6,-12);var u=Sd(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?q.y+=12-b.offsetHeight/2:q.x+=12-b.offsetWidth/2);u=null;h||(u=10);b=W(a,"card-flip");a=W(a,"card-reverse");Be(c,b,l);Be(c,a,k);u=Ye(e,p,c,t,q,null,u);!h&&u&&(u&48&&(l=!l,p^=4,t^=4),u&192&&(k=!k,p^=1,t^=1),Be(c,b,l),Be(c,a,k),Ye(e,p,c,t,q));g&&(e=parseInt(c.style.top,10),h=Vc(document).y,Hd(c,"position","fixed"),Hd(c,"top",e-h+"px"));r&&(c.style.right="",e=Ud(c),e.left=e.left||parseInt(c.style.left,10),h=Tc(window),c.style.left="",c.style.right=h.width-
e.left-e.width+"px");e=H("yt-uix-card-body-arrow",c);h=H("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!r&&l||r&&!l?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";k=H("yt-uix-card-arrow",c);l=H("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Sd(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.B(a)){var b=G(W(this,"card")+Uf(a));b&&(L(a,W(this,"active")),L(b,W(this,"card-visible")),kg(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&($c(b.cardMask),b.cardMask=null))}};
function Vg(a){a.h&&a.hide(a.h)}
m.ub=function(a,b){var c=this.B(a);if(c){if(b){var d=Zg(this,c);if(!d)return;b instanceof Mb?Sb(d,b):dd(d,b)}J(c,W(this,"active"))&&(c=Wg(this,a,c),Xg(this,a,c),jg(c),Yg(c))}};
m.isActive=function(a){return(a=this.B(a))?J(a,W(this,"active")):!1};
function Zg(a,b){var c=b.cardContentNode;if(!c){var d=W(a,"content"),e=W(a,"card-content");(c=(c=a.i(b,"card-id"))?G(c):H(d,b))||(c=document.createElement("div"));var f=c;L(f,d);K(f,e);b.cardContentNode=c}return c}
function Yg(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',ze(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function $g(){Ug.call(this,"hovercard")}
A($g,Ug);wa($g);m=$g.prototype;m.register=function(){Y(this,"mouseenter",this.ra,"target");Y(this,"mouseleave",this.ta,"target");Y(this,"mouseenter",this.sa,"card");Y(this,"mouseleave",this.ua,"card")};
m.unregister=function(){Z(this,"mouseenter",this.ra,"target");Z(this,"mouseleave",this.ta,"target");Z(this,"mouseenter",this.sa,"card");Z(this,"mouseleave",this.ua,"card")};
m.ra=function(a){if(ah!=a){ah&&(this.hide(ah),ah=null);var b=y(this.show,this,a),c=parseInt(this.i(a,"delay-show"),10);b=O(b,-1<c?c:200);lg(a,"card-timer",b.toString());ah=a;a.alt&&(lg(a,"card-alt",a.alt),a.alt="");a.title&&(lg(a,"card-title",a.title),a.title="")}};
m.ta=function(a){var b=parseInt(this.i(a,"card-timer"),10);Sf(b);this.B(a).isCardHidable=!0;b=parseInt(this.i(a,"delay-hide"),10);b=-1<b?b:200;O(y(this.Wa,this,a),b);if(b=this.i(a,"card-alt"))a.alt=b;if(b=this.i(a,"card-title"))a.title=b};
m.Wa=function(a){this.B(a).isCardHidable&&(this.hide(a),ah=null)};
m.sa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.ua=function(a){a&&this.hide(a.cardTargetNode)};
var ah=null;var bh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};z("yt.uix.widgets_",bh);function ch(a){a=a.u();var b=W(a);b in bh||(a.register(),Rg(a,"yt-uix-init-"+b,a.init),Rg(a,"yt-uix-dispose-"+b,a.dispose),bh[b]=a)}
;function dh(a){var b=[];Za(a,function(c,d){var e=encodeURIComponent(String(d)),f;ya(c)?f=c:f=[c];C(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function eh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ya(b[f])?Ua(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){var g=Error("Error decoding URL component");g.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?Rf(g,"WARNING",void 0,void 0,void 0):Rf(g)}}return b}
function fh(a,b){return gh(a,b||{},!0)}
function gh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=eh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return xd(a,e)+d}
;function hh(a){var b=ih;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(jh(b),kh(b));b.ca_type="image";a&&(b.bid=a);return b}
function jh(a){var b={};b.dt=$d;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function kh(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var h=b.innerWidth;var g=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=Tc(c||window).round()}catch(l){k=new Lc(-12245933,-12245933)}c=k;k={};d=new Kf;n.SVGElement&&n.document.createElementNS&&d.set(0);e=Ed();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=Lf(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!B.WebGLRenderingContext,k}
var ih=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return dh(hh(a))});Ia();function lh(a,b){var c=mh(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function mh(a){return N("EXPERIMENT_FLAGS",{})[a]}
;var nh=v(XMLHttpRequest)?function(){return new XMLHttpRequest}:v(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function oh(){if(!nh)return null;var a=nh();return"open"in a?a:null}
;var ph={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},qh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
rh=!1;
function sh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=rd(1,a),e=qd(rd(3,a));d&&e?(d=c,c=a.match(pd),d=d.match(pd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?qd(rd(3,c))==e&&(Number(rd(4,c))||null)==(Number(rd(4,a))||null):!0;d=!!mh("web_ajax_ignore_global_headers_if_set");for(var f in ph)e=N(ph[f]),!e||!c&&!th(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||th(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(mh("pass_biscotti_id_in_header_ajax")||mh("pass_biscotti_id_in_header_ajax_tv"))&&
(c||th(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=dh(hh(void 0)));return b}
function uh(a){var b=window.location.search,c=qd(rd(3,a)),d=qd(rd(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=eh(b),f={};C(qh,function(h){e[h]&&(f[h]=e[h])});
return gh(a,f||{},!1)}
function th(a,b){var c=N("CORS_HEADER_WHITELIST")||{},d=qd(rd(3,a));return d?(c=c[d])?Ra(c,b):!1:!0}
function vh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=wh(a,b);var d=xh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&Sf(f);var g=h.ok,k=function(l){l=l||{};var p=b.context||n;g?b.onSuccess&&b.onSuccess.call(p,l,h):b.onError&&b.onError.call(p,l,h);b.L&&b.L.call(p,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.qb&&0<b.timeout&&(f=O(function(){e||(e=!0,Sf(f))},b.timeout))}else yh(a,b)}
function yh(a,b){var c=b.format||"JSON";a=wh(a,b);var d=xh(a,b),e=!1,f,h=zh(a,function(g){if(!e){e=!0;f&&Sf(f);a:switch(g&&"status"in g?g.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,p=400<=g.status&&500>g.status,t=500<=g.status&&600>g.status;if(k||p||t)l=Ah(c,g,b.Pb);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=b.context||n;
k?b.onSuccess&&b.onSuccess.call(p,g,l):b.onError&&b.onError.call(p,g,l);b.L&&b.L.call(p,g,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Aa&&0<b.timeout&&(f=O(function(){e||(e=!0,h.abort(),Sf(f))},b.timeout))}
function wh(a,b){b.Tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Pf("XSRF_FIELD_NAME"),d=b.ea;d&&(d[c]&&delete d[c],a=fh(a,d));return a}
function xh(a,b){var c=Pf("XSRF_FIELD_NAME"),d=Pf("XSRF_TOKEN"),e=b.postBody||"",f=b.C,h=Pf("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.Sb||qd(rd(3,a))&&!b.withCredentials&&qd(rd(3,a))!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.C&&b.C[h]||(f||(f={}),f[c]=d);f&&w(e)&&(e=eh(e),gb(e,f),e=b.Ba&&"JSON"==b.Ba?JSON.stringify(e):vd(e));f=e||f&&!cb(f);!rh&&f&&"POST"!=b.method&&(rh=!0,Rf(Error("AJAX request with postData should use POST")));
return e}
function Ah(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Bh(b):null)d={},C(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ch(e)})}c&&Dh(d);
return d}
function Dh(a){if(Ba(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Pb(a[b],null);a[c]=d}else Dh(a[b])}}
function Bh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ch(a){var b="";C(a.childNodes,function(c){b+=c.nodeValue});
return b}
function zh(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=oh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;mh("debug_forward_web_query_parameters")&&(a=uh(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=sh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Eh={},Fh=0;
function Gh(a,b,c){var d=void 0===d?"":d;if(a)if(c&&(c=Eb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c){if(a){a instanceof yb||(a="object"==typeof a&&a.J?a.I():String(a),Bb.test(a)||(a="about:invalid#zClosurez"),a=Db(a));b=Ab(a).toString();if("about:invalid#zClosurez"===b)a="";else{if(b instanceof Mb)a=b;else{var e="object"==typeof b;a=null;e&&b.ba&&(a=b.aa());b=ob(e&&b.J?b.I():String(b));a=Pb(b,a)}a=encodeURIComponent(String(Pe(Ob(a).toString())))}/^[\s\xa0]*$/.test(a)||(a=Yc("IFRAME",{src:'javascript:"<body><img src=\\""+'+
a+'+"\\"></body>"',style:"display:none"}),Oc(a).body.appendChild(a))}}else if(d)zh(a,b,"POST",d,void 0);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))zh(a,b,"GET","",void 0);else{if((d=Nf.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=qd(rd(5,a)).indexOf("/aclk")&&"1"===zd(a,"ae")&&"1"===zd(a,"act")){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){e=!0;break b}}catch(f){}e=!1}e?(b&&b(),e=!0):e=!1}else e=!1;e||Hh(a,b)}}
function Hh(a,b){var c=new Image,d=""+Fh++;Eh[d]=c;c.onload=c.onerror=function(){b&&Eh[d]&&b();delete Eh[d]};
c.src=a}
;function Ih(a){Q.call(this,1,arguments);this.f=a}
A(Ih,Q);function Jh(a){Q.call(this,1,arguments);this.f=a}
A(Jh,Q);function Kh(a,b,c){Q.call(this,3,arguments);this.h=a;this.g=b;this.f=null!=c?!!c:null}
A(Kh,Q);function Lh(a,b,c,d,e){Q.call(this,2,arguments);this.g=a;this.f=b;this.j=c||null;this.h=d||null;this.source=e||null}
A(Lh,Q);function Mh(a,b,c){Q.call(this,1,arguments);this.f=a;this.g=b}
A(Mh,Q);function Nh(a,b,c,d,e,f,h){Q.call(this,1,arguments);this.g=a;this.l=b;this.f=c;this.m=d||null;this.j=e||null;this.h=f||null;this.source=h||null}
A(Nh,Q);
var Oh=new R("subscription-batch-subscribe",Ih),Ph=new R("subscription-batch-unsubscribe",Ih),Qh=new R("subscription-subscribe",Lh),Rh=new R("subscription-subscribe-loading",Jh),Sh=new R("subscription-subscribe-loaded",Jh),Th=new R("subscription-subscribe-success",Mh),Uh=new R("subscription-subscribe-external",Lh),Vh=new R("subscription-unsubscribe",Nh),Wh=new R("subscription-unsubscirbe-loading",Jh),Xh=new R("subscription-unsubscribe-loaded",Jh),Yh=new R("subscription-unsubscribe-success",Jh),Zh=
new R("subscription-external-unsubscribe",Nh),$h=new R("subscription-enable-ypc",Jh),ai=new R("subscription-disable-ypc",Jh),bi=new R("subscription-prefs",Kh),ci=new R("subscription-prefs-success",Kh),di=new R("subscription-prefs-failure",Kh);var ei=null,fi="";
function gi(){function a(b){var c=b.data;if(/^\s*$/.test(c)?0:/^[\],:{}\s\u2028\u2029]*$/.test(c.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))){a:{c=new Map;try{var d=JSON.parse(b.data)}catch(h){Rf(h);ei=null;break a}d.clickthroughEndpoint&&d.clickthroughEndpoint.urlEndpoint&&d.clickthroughEndpoint.urlEndpoint.url&&c.set("video_click_to_advertiser_site",
[d.clickthroughEndpoint.urlEndpoint.url]);d.visitAdvertiserLinkClickCommands&&c.set("vw_cta_v2_bottom_bar_click",hi(d.visitAdvertiserLinkClickCommands[0]));d.channelInfoBarClickCommands&&c.set("vw_cta_v2_top_bar_click",hi(d.channelInfoBarClickCommands[0]));d.subscribeButtonClickCommands&&c.set("vw_subscribe_button_click",hi(d.subscribeButtonClickCommands[0]));if(d.thumbnailClickCommands)for(var e=b=1,f=0;f<d.thumbnailClickCommands.length;f++)c.set("vw_thumb_v2_"+b+"_of_"+e,hi(d.thumbnailClickCommands[f])),
b==e?(b=1,e++):b++;ei=c}(d=ei.get("video_click_to_advertiser_site"))&&d.length&&(1<d.length&&Rf(Error("Multiple click through urls are found."),"WARNING"),ii(d[0]))}else d=decodeURIComponent(b.data.replace(/,.*/,"")),c=decodeURIComponent(b.data.replace(/.*,/,"")),ii(d),d=c,d.match(/&label=[^&]*/)?d=d.replace(/&label=[^&]*/,""):d.match(/[?]label=[^&]*&/)&&(d=d.replace(/[?]label=[^&]*&/,"?")),fi=d}
try{window.addEventListener("message",a,!1),window.parent.postMessage("companion-setup-complete","*")}catch(b){}}
function ji(a){if(ei){if(a=ei.get(a))for(var b=0;b<a.length;b++)Gh(a[b],void 0,void 0)}else b=fi,/^[\s\xa0]*$/.test(null==b?"":String(b))||(a=fh(fi,{label:a}),Gh(a))}
function hi(a){return a&&a.loggingUrls?a.loggingUrls.map(function(b){return b.baseUrl}):[]}
function ii(a){if(a){var b=document.getElementById("bottom-bar-link");b&&!b.href&&(a=a instanceof yb?a:Cb(a),b.href=Ab(a))}}
function ki(a,b){a&&ji(b)}
;var li=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",li);function mi(a){var b=void 0===b?{}:b;a=(a=a in li?li[a]:void 0)||"";var c={},d;for(d in b)c.R=d,a=a.replace(new RegExp("\\$"+c.R,"gi"),function(e){return function(){return b[e.R]}}(c)),c={R:c.R};
return a}
;function ni(){var a=Yf();return a?a:null}
;function oi(){Qg.call(this,"tooltip");this.f=0;this.g={}}
A(oi,Qg);wa(oi);m=oi.prototype;m.register=function(){Y(this,"mouseover",this.V);Y(this,"mouseout",this.K);Y(this,"focus",this.la);Y(this,"blur",this.ga);Y(this,"click",this.K);Y(this,"touchstart",this.Fa);Y(this,"touchend",this.W);Y(this,"touchcancel",this.W)};
m.unregister=function(){Z(this,"mouseover",this.V);Z(this,"mouseout",this.K);Z(this,"focus",this.la);Z(this,"blur",this.ga);Z(this,"click",this.K);Z(this,"touchstart",this.Fa);Z(this,"touchend",this.W);Z(this,"touchcancel",this.W);this.dispose();oi.v.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.K(this.g[a]);this.g={}};
m.V=function(a){if(!(this.f&&1E3>Ia()-this.f)){var b=parseInt(this.i(a,"tooltip-hide-timer"),10);b&&(og(a,"tooltip-hide-timer"),Sf(b));b=y(function(){pi(this,a);og(a,"tooltip-show-timer")},this);
var c=parseInt(this.i(a,"tooltip-show-delay"),10)||0;b=O(b,c);lg(a,"tooltip-show-timer",b.toString());a.title&&(Tg(a,qi(this,a)),a.title="");b=Ca(a).toString();this.g[b]=a}};
m.K=function(a){var b=parseInt(this.i(a,"tooltip-show-timer"),10);b&&(Sf(b),og(a,"tooltip-show-timer"));b=y(function(){if(a){var c=G(ri(this,a));c&&(si(c),$c(c),og(a,"content-id"));c=G(ri(this,a,"arialabel"));$c(c)}og(a,"tooltip-hide-timer")},this);
b=O(b,50);lg(a,"tooltip-hide-timer",b.toString());if(b=this.i(a,"tooltip-text"))a.title=b;b=Ca(a).toString();delete this.g[b]};
m.la=function(a,b){this.f=0;this.V(a,b)};
m.ga=function(a){this.f=0;this.K(a)};
m.Fa=function(a,b,c){c.changedTouches&&(this.f=0,(a=Og(b,W(this),c.changedTouches[0].target))&&this.V(a,b))};
m.W=function(a,b,c){c.changedTouches&&(this.f=Ia(),(a=Og(b,W(this),c.changedTouches[0].target))&&this.K(a))};
function ti(a,b,c){Tg(b,c);a=a.i(b,"content-id");(a=G(a))&&dd(a,c)}
function qi(a,b){return a.i(b,"tooltip-text")||b.title}
function pi(a,b){if(b){var c=qi(a,b);if(c){var d=G(ri(a,b));if(!d){d=document.createElement("div");d.id=ri(a,b);d.className=W(a,"tip");var e=document.createElement("div");e.className=W(a,"tip-body");var f=document.createElement("div");f.className=W(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=W(a,"tip-content");var g=ui(a,b),k=ri(a,b,"content");h.id=k;lg(b,"content-id",k);e.appendChild(h);g&&d.appendChild(g);d.appendChild(e);d.appendChild(f);
var l=ld(b);k=ri(a,b,"arialabel");f=document.createElement("div");K(f,W(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;dd(f,l);b.setAttribute("aria-labelledby",k);k=ni()||document.body;k.appendChild(f);k.appendChild(d);ti(a,b,c);(c=parseInt(a.i(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",K(h,W(a,"normal-wrap")));h=J(b,W(a,"reverse"));vi(a,b,d,e,g,h)||vi(a,b,d,e,g,!h);var p=W(a,"tip-visible");
O(function(){K(d,p)},0)}}}}
function vi(a,b,c,d,e,f){Be(c,W(a,"tip-reverse"),f);var h=0;f&&(h=1);var g=Sd(b);f=new F((g.width-10)/2,f?g.height:0);var k=Pd(b);$e(new F(k.x+f.x,k.y+f.y),c,h);f=Tc(window);if(1==c.nodeType)var l=Qd(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new F(c.clientX,c.clientY);c=Sd(d);var p=Math.floor(c.width/2);h=!!(f.height<l.y+g.height);g=!!(l.y<g.height);k=!!(l.x<p);f=!!(f.width<l.x+p);l=(c.width+3)/-2- -5;a=a.i(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||g)}
function ri(a,b,c){a=W(a)+Uf(b);c&&(a+="-"+c);return a}
function ui(a,b){var c=null;hc&&J(b,W(a,"masked"))&&((c=G("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),jg(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=W(a,"tip-mask")));return c}
function si(a){var b=G("yt-uix-tooltip-shared-mask"),c=b&&od(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),kg(b),document.body.appendChild(b))}
;function wi(a){xi("delete_from_watch_later_list",a)}
function xi(a,b){yh("/playlist_video_ajax?action_"+a+"=1",{method:"POST",ea:{feature:b.feature||null,authuser:b.Mb||null,pageid:b.pageId||null},C:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.Vb||null,add_to_playlists:b.Lb||null,plid:N("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(c,d){b.onSuccess.call(this,c,d)},
L:b.L,withCredentials:!1})}
;var yi=[],zi="";function Ai(a){zi=ng(a,"video-ids");var b=H("sign-in-link",G("shared-addto-watch-later-login"));b&&(K(a,"addto-wl-focused"),O(function(){b.focus()},0))}
function Bi(){var a=H("addto-wl-focused");a&&(L(a,"addto-wl-focused"),O(function(){a.focus()},0))}
function Ci(a){var b=fh("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:zi,next_url:document.location}),c=document.createElement("form");c.action=b;c.method="POST";b=document.createElement("input");b.type="hidden";b.name=Pf("XSRF_FIELD_NAME");b.value=Pf("XSRF_TOKEN");c.appendChild(b);document.body.appendChild(c);c.submit();a.preventDefault()}
function Di(a){Ce(a,"addto-watch-later-button","addto-watch-later-button-loading");Rc(a,{"aria-pressed":"true"});var b=ng(a,"video-ids");xi("add_to_watch_later_list",{videoIds:b,onSuccess:function(c,d){var e=d.list_id;Ei(e,b,a);P("playlist-addto",b,e)},
onError:function(c,d){6==d.return_code?Ei(d.list_id,b,a):Fi(a,d)}})}
function Gi(a){Ce(a,"addto-watch-later-button-success","addto-watch-later-button-loading");var b=ng(a,"video-ids");wi({videoIds:b,onSuccess:function(){Ce(a,"addto-watch-later-button-loading","addto-watch-later-button");var c=mi("ADDTO_WATCH_LATER");ti(oi.u(),a,c);P("WATCH_LATER_VIDEO_REMOVED")},
onError:function(c,d){Fi(a,d)}})}
function Hi(a){var b=ng(a,"video-ids");wi({videoIds:b,onSuccess:function(c,d){P("WATCH_LATER_VIDEO_REMOVED",a,d.result.video_count)},
onError:function(c,d){Fi(a,d)}})}
function Ei(a,b,c){Ce(c,"addto-watch-later-button-loading","addto-watch-later-button-success");var d=mi("ADDTO_WATCH_LATER_ADDED");ti(oi.u(),c,d);P("WATCH_LATER_VIDEO_ADDED",a,b.split(","))}
function Fi(a,b){Ce(a,"addto-watch-later-button-loading","addto-watch-later-button-error");var c=b.error_message||mi("ADDTO_WATCH_LATER_ERROR");ti(oi.u(),a,c)}
;function Ii(a){Q.call(this,1,arguments)}
A(Ii,Q);function Ji(a,b){Q.call(this,2,arguments);this.g=a;this.f=b}
A(Ji,Q);function Ki(a,b,c,d){Q.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
A(Ki,Q);function Li(a,b){Q.call(this,1,arguments);this.g=a;this.f=b||null}
A(Li,Q);function Mi(a){Q.call(this,1,arguments)}
A(Mi,Q);var Ni=new R("ypc-core-load",Ii),Oi=new R("ypc-guide-sync-success",Ji),Pi=new R("ypc-purchase-success",Ki),Qi=new R("ypc-subscription-cancel",Mi),Ri=new R("ypc-subscription-cancel-success",Li),Si=new R("ypc-init-subscription",Mi);var Ti=!1,Ui=[];function Vi(a){a.f?Ti?S(Uh,a):S(Ni,new Ii(function(){S(Si,new Mi(a.f))})):Wi(a.g,a.j,a.h,a.source)}
function Xi(a){a.f?Ti?S(Zh,a):S(Ni,new Ii(function(){S(Qi,new Mi(a.f))})):Yi(a.g,a.l,a.j,a.h,a.source)}
function Zi(a){$i(Ta(a.f))}
function aj(a){bj(Ta(a.f))}
function cj(a){dj(a.h,a.g,a.f)}
function ej(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&S(Th,new Mh(b,c,a.f.channelInfo))}
function fj(a){var b=a.f;Za(a.g,function(c,d){S(Th,new Mh(d,c,b[d]))})}
function gj(a){S(Yh,new Jh(a.g.itemId));a.f&&a.f.length&&(hj(a.f,Yh),hj(a.f,$h))}
function Wi(a,b,c,d){var e=new Jh(a);S(Rh,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=N("PLAYBACK_ID"))&&(c.plid=d);(d=N("EVENT_ID"))&&(c.ei=d);b&&ij(b,c);yh("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ea:f,C:c,onSuccess:function(h,g){var k=g.response;S(Th,new Mh(a,k.id,k.channel_info));k.show_feed_privacy_dialog&&P("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
L:function(){S(Sh,e)}})}
function Yi(a,b,c,d,e){var f=new Jh(a);S(Wh,f);var h={};h.c=a;d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=N("PLAYBACK_ID"))&&(d.plid=a);(a=N("EVENT_ID"))&&(d.ei=a);c&&ij(c,d);yh("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ea:h,C:d,onSuccess:function(){S(Yh,f)},
L:function(){S(Xh,f)}})}
function dj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Kh(a,b,c);yh("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",C:d,onError:function(){S(di,e)},
onSuccess:function(){S(ci,e)}})}}
function $i(a){if(a.length){var b=Va(a,0,40);S("subscription-batch-subscribe-loading");hj(b,Rh);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");hj(b,Sh)};
yh("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",C:c,onSuccess:function(e,f){d();var h=f.response,g=h.id;if(ya(g)&&g.length==b.length){var k=h.channel_info_map;C(g,function(l,p){var t=b[p];S(Th,new Mh(t,l,k[t]))});
a.length?$i(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function bj(a){if(a.length){var b=Va(a,0,40);S("subscription-batch-unsubscribe-loading");hj(b,Wh);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");hj(b,Xh)};
yh("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",C:c,onSuccess:function(){d();hj(b,Yh);a.length&&bj(a)},
onError:function(){d()}})}}
function hj(a,b){C(a,function(c){S(b,new Jh(c))})}
function ij(a,b){var c=eh(a),d;for(d in c)b[d]=c[d]}
;function jj(a){var b=kj();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=dg("LOGGED_IN",function(d){fg(N("LOGGED_IN_PUBSUB_KEY",void 0));Of("LOGGED_IN",!0);a(d)});
Of("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function kj(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=wd(a,"mode","subscribe");a=wd("/signin?context=popup","next",a);return a=wd(a,"feature","sub_button")}
z("yt.pubsub.publish",P);var lj=Math.pow(2,16)-1,mj=null,nj=0,oj={log_event:"events",log_interaction:"interactions"},pj=Object.create(null);pj.log_event="GENERIC_EVENT_LOGGING";pj.log_interaction="INTERACTION_LOGGING";var qj=new Set(["log_event"]),rj={},sj=0,tj=0,uj=x("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",uj);var vj=x("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",vj);var wj=x("ytLoggingTransportDispatchedStats_")||{};
z("ytLoggingTransportDispatchedStats_",wj);z("ytytLoggingTransportCapturedTime_",x("ytLoggingTransportCapturedTime_")||{});function xj(){Sf(sj);Sf(tj);tj=0;if(!cb(uj)){for(var a in uj){var b=rj[a];b&&(yj(a,b),delete uj[a])}cb(uj)||zj()}}
function zj(){mh("web_gel_timeout_cap")&&!tj&&(tj=O(xj,3E4));Sf(sj);sj=O(xj,N("LOGGING_BATCH_TIMEOUT",lh("web_gel_debounce_ms",1E4)))}
function Aj(a,b){b=void 0===b?"":b;uj[a]=uj[a]||{};uj[a][b]=uj[a][b]||[];return uj[a][b]}
function yj(a,b){var c=oj[a],d=wj[a]||{};wj[a]=d;var e=Math.round(Mf());for(l in uj[a]){var f=eb,h=b.f;h={client:{hl:h.eb,gl:h.cb,clientName:h.ab,clientVersion:h.bb,configInfo:h.Za}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));N("DELEGATED_SESSION_ID")&&!mh("pageid_as_header_web")&&(h.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=Aj(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=vj[l])a:{var k=
l;if(h.videoId)g="VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:g}]}delete vj[l];f.requestTimeMs=e;if(h=Pf("EVENT_ID"))g=(N("BATCH_CLIENT_COUNTER",void 0)||0)+1,g>lj&&(g=1),Of("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,mj&&nj&&mh("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:mj,
roundtripMs:nj}),mj=h,nj=0;Bj(b,a,f,{retry:qj.has(a),onSuccess:y(Cj,this,Mf())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function Cj(a){nj=Math.round(Mf()-a)}
;var Dj=x("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",Dj);function Ej(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Nb||N("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Kb:b=ee([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),mh("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
function Fj(a){a=Object.assign({},a);delete a.Authorization;var b=ee();if(b){var c=new ue;c.update(Pf("INNERTUBE_API_KEY"));c.update(b);b=c.digest();if(!Bc)for(Bc={},Cc={},c=0;65>c;c++)Bc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Cc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Cc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],h=e+1<b.length,g=h?b[e+1]:0,k=e+2<b.length,l=k?b[e+2]:0,p=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<2|l>>6;l&=
63;k||(l=64,h||(g=64));d.push(c[p],c[f],c[g],c[l])}a.hash=d.join("")}return a}
;function Gj(){var a=new Df;(a=a.isAvailable()?new Jf(a,"yt.innertube"):null)||(a=new Ef("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new zf(a):null;this.g=document.domain||window.location.hostname}
Gj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ia()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Pe(b))}catch(f){return}else e=escape(b);b=this.g;Ec.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
Gj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Gj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var Hj=new Gj;function Ij(a,b,c,d){if(d)return null;d=Hj.get("nextId",!0)||1;var e=Hj.get("requests",!0)||{};e[d]={method:a,request:b,authState:Fj(c),requestTime:Math.round(Mf())};Hj.set("nextId",d+1,86400,!0);Hj.set("requests",e,86400,!0);return d}
function Jj(a){var b=Hj.get("requests",!0)||{};delete b[a];Hj.set("requests",b,86400,!0)}
function Kj(a){var b=Hj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Mf())-d.requestTime)){var e=d.authState,f=Fj(Ej(!1));db(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Mf())),Bj(a,d.method,e,{}));delete b[c]}}Hj.set("requests",b,86400,!0)}}
;function Lj(a){var b=this;this.f=a||{Xa:Pf("INNERTUBE_API_KEY"),Ya:Pf("INNERTUBE_API_VERSION"),Za:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ab:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),bb:Pf("INNERTUBE_CONTEXT_CLIENT_VERSION"),eb:Pf("INNERTUBE_CONTEXT_HL"),cb:Pf("INNERTUBE_CONTEXT_GL"),fb:Pf("INNERTUBE_HOST_OVERRIDE")||"",gb:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};ug(function(){Kj(b)},0,5E3)}
function Bj(a,b,c,d){!N("VISITOR_DATA")&&.01>Math.random()&&Rf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,Ba:"JSON",Aa:function(){},
qb:d.Aa,onSuccess:function(r,q){if(d.onSuccess)d.onSuccess(q)},
xa:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,q){if(d.onError)d.onError(q)},
Ub:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.fb;h&&(f=h);h=a.f.gb||!1;var g=Ej(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=fh(""+f+("/youtubei/"+a.f.Ya+"/"+b),{alt:"json",key:a.f.Xa}),l;if(d.retry&&mh("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Ij(b,c,g,h))){var p=e.onSuccess,t=e.xa;e.onSuccess=function(r,q){Jj(l);p(r,q)};
c.xa=function(r,q){Jj(l);t(r,q)}}try{mh("use_fetch_for_op_xhr")?vh(k,e):(e.method="POST",e.C||(e.C={}),yh(k,e))}catch(r){if("InvalidAccessError"==r)l&&(Jj(l),l=0),Rf(Error("An extension is blocking network request."),"WARNING");
else throw r;}l&&ug(function(){Kj(a)},0,5E3)}
;var Mj=Ia().toString();var Nj;
if(!(Nj=x("ytLoggingTimeDocumentNonce_"))){var Oj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var Pj=Array(16),Qj=new Uint8Array(16);window.crypto.getRandomValues(Qj);for(var Rj=0;Rj<Pj.length;Rj++)Pj[Rj]=Qj[Rj];Oj=Pj;break a}catch(a){}for(var Sj=Array(16),Tj=0;16>Tj;Tj++){for(var Uj=Ia(),Vj=0;Vj<Uj%23;Vj++)Sj[Tj]=Math.random();Sj[Tj]=Math.floor(256*Math.random())}if(Mj)for(var Wj=1,Xj=0;Xj<Mj.length;Xj++)Sj[Wj%16]=Sj[Wj%16]^Sj[(Wj-1)%16]/4^Mj.charCodeAt(Xj),Wj++;Oj=Sj}for(var Yj=Oj,Zj=
[],ak=0;ak<Yj.length;ak++)Zj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Yj[ak]&63));Nj=Zj.join("")}var bk=Nj;z("ytLoggingTimeDocumentNonce_",bk);function ck(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function dk(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return N(dk(void 0===a?0:a),void 0)});
z("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=N(ck(a));b||0!=a||(mh("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=N("EVENT_ID"));return b?b:null});
z("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==N(ck(c))||b!==N(dk(c)))Of(ck(c),a),Of(dk(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var d={clientDocumentNonce:bk,clientScreenNonce:a};var e=void 0===e?{}:e;var f={};f.eventTimeMs=Math.round(e.timestamp||Mf());f.foregroundHeartbeatScreenAssociated=d;d=String;if(e.timestamp)var h=-1;else h=x("_lact",window),h=null==h?-1:Math.max(Ia()-h,0);f.context={lastActivityMs:d(h)};mh("log_sequence_info_on_gel_web")&&e.Ca&&
(d=f.context,h=e.Ca,Dj[h]=h in Dj?Dj[h]+1:0,d.sequence={index:Dj[h],groupKey:h},e.Rb&&delete Dj[e.Ca]);d="log_event";if(e=e.Qb){h=e;var g={};h.videoId?g.videoId=h.videoId:h.playlistId&&(g.playlistId=h.playlistId);vj[e.token]=g;e=Aj(d,e.token)}else e=Aj(d);e.push(f);Lj&&(rj[d]=new Lj);e.length>=(lh("web_logging_max_batch")||100)?xj():zj()}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function ek(){Qg.call(this,"button");this.f=null;this.h=[];this.g={}}
A(ek,Qg);wa(ek);m=ek.prototype;m.register=function(){Y(this,"click",this.Ga);Y(this,"keydown",this.pa);Y(this,"keypress",this.qa);Rg(this,"page-scroll",this.Ua)};
m.unregister=function(){Z(this,"click",this.Ga);Z(this,"keydown",this.pa);Z(this,"keypress",this.qa);fk(this);this.g={};ek.v.unregister.call(this)};
m.Ga=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.pa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=gk(this,a))){var d=function(h){var g="";h.tagName&&(g=h.tagName.toLowerCase());return"ul"==g||"table"==g},e;
d(b)?e=b:e=ed(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.lb;else"table"==e&&(f=this.kb);f&&hk(this,a,b,c,y(f,this))}}};
m.Ua=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=I(b.activeButtonNode||b.parentNode,W(this));if(void 0==d||void 0==b)break;ik(this,d,b,!0)}};
function hk(a,b,c,d,e){var f=ig(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=jk(a,c)){if(v(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var g=void 0===g?{}:g;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;g=xd(b.href,g)+k;g=g instanceof yb?g:Cb(g);l.href=Ab(g)}else Kg(b)}else h&&kk(a,b);else f?27==d.keyCode?(jk(a,c),kk(a,b)):e(b,c,d):(g=J(b,W(a,"reverse"))?38:40,d.keyCode==g&&(Kg(b),
d.preventDefault()))}
m.qa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=gk(this,a),ig(a)&&c.preventDefault())};
function jk(a,b){var c=W(a,"menu-item-highlight"),d=H(c,b);d&&L(d,c);return d}
function lk(a,b,c){K(c,W(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=W(a,"item-id-"+Ca(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.kb=function(a,b,c){var d=jk(this,b),e=Xf("table",b);b=Qc(document,"td",null,e);d=mk(d,b,Qc(document,"td",null,Xf("tr",e)).length,c);-1!=d&&(lk(this,a,b[d]),c.preventDefault())};
m.lb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=jk(this,b);b=Ma(Qc(document,"li",null,b),ig);lk(this,a,b[mk(d,b,1,c)]);c.preventDefault()}};
function mk(a,b,c,d){var e=b.length;a=La(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function nk(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=W(a,"menu-mask"),kg(c),b.iframeMask=c);return c}
function ik(a,b,c,d){var e=I(b,W(a,"group")),f=!!a.i(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,g=Ud(b);if(J(b,W(a,"reverse"))){f=8;h=9;g=g.top+"px";try{c.style.maxHeight=g}catch(p){}}J(b,"flip")&&(J(b,W(a,"reverse"))?(f=12,h=13):(f=13,h=12));var k;a.i(b,"button-has-sibling-menu")?k=Nd(e):a.i(b,"button-menu-root-container")&&(k=ok(a,b));E&&!tc("8")&&(k=null);if(k){var l=Ud(k);l=new Fd(-l.top,l.left,l.top,-l.left)}k=new F(0,1);J(b,W(a,"center-menu"))&&(k.x-=Math.round((Sd(c).width-Sd(b).width)/
2));d&&(k.y+=Vc(document).y);if(a=nk(a,b))b=Sd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ye(e,f,a,h,k,l,197),d&&Hd(a,"position","fixed");Ye(e,f,c,h,k,l,197)}
function ok(a,b){if(a.i(b,"button-menu-root-container")){var c=a.i(b,"button-menu-root-container");return I(b,c)}return document.body}
m.Ia=function(a){if(a){var b=gk(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.i(a,"button-has-sibling-menu")?c=a.parentNode:c=ok(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=nk(this,a);d&&c.appendChild(d);(c=!!this.i(a,"button-menu-fixed"))&&(this.g[Uf(a).toString()]=b);ik(this,a,b,c);gg("yt-uix-button-menu-before-show",a,b);jg(b);d&&jg(d);
this.N(a,"button-menu-action",!0);K(a,W(this,"active"));b=y(this.Ha,this,a,!1);d=y(this.Ha,this,a,!0);c=y(this.vb,this,a,void 0);this.f&&gk(this,this.f)==gk(this,a)||fk(this);P("yt-uix-button-menu-show",a);V(this.h);this.h=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.f=a}}};
function kk(a,b){if(b){var c=gk(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");kg(c);a.N(b,"button-menu-action",!1);var d=nk(a,b),e=Uf(c).toString();delete a.g[e];O(function(){d&&d.parentNode&&(kg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=I(b,W(a,"group"));
var f=[W(a,"active")];e&&f.push(W(a,"group-active"));Ae(b,f);P("yt-uix-button-menu-hide",b);V(a.h);a.h.length=0}}
m.vb=function(a,b){var c=gk(this,a);if(c){b&&(b instanceof Mb?Sb(c,b):dd(c,b));var d=!!this.i(a,"button-menu-fixed");ik(this,a,c,d)}};
m.Ha=function(a,b,c){c=Ig(c);var d=I(c,W(this));if(d){d=gk(this,d);var e=gk(this,a);if(d==e)return}d=I(c,W(this,"menu"));e=d==gk(this,a);var f=J(c,W(this,"menu-item")),h=J(c,W(this,"menu-close"));if(!d||e&&(f||h))kk(this,a),d&&b&&this.i(a,"button-menu-indicate-selected")&&((a=H(W(this,"content"),a))&&dd(a,ld(c)),pk(this,d,c))};
function pk(a,b,c){var d=W(a,"menu-item-selected");C(Pc(d,b),function(e){L(e,d)});
K(c.parentNode,d)}
function gk(a,b){if(!b.widgetMenu){var c=a.i(b,"button-menu-id");c=c&&G(c);var d=W(a,"menu");c?ze(c,[d,W(a,"menu-external")]):c=H(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return J(a,W(this,"toggled"))};
m.toggle=function(a){if(this.i(a,"button-toggle")){var b=I(a,W(this,"group")),c=W(this,"toggled"),d=J(a,c);if(b&&this.i(b,"button-toggle-group")){var e=this.i(b,"button-toggle-group");C(Pc(W(this),b),function(f){f!=a||"optional"==e&&d?(L(f,c),f.removeAttribute("aria-pressed")):(K(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),De(a,c)}};
m.click=function(a){if(gk(this,a)){var b=gk(this,a);if(b){var c=I(b.activeButtonNode||b.parentNode,W(this));c&&c!=a?(kk(this,c),O(y(this.Ia,this,a),1)):ig(b)?kk(this,a):this.Ia(a)}a.focus()}this.N(a,"button-action")};
function fk(a){a.f&&kk(a,a.f)}
;function qk(){Qg.call(this,"kbd-nav")}
var rk;A(qk,Qg);wa(qk);m=qk.prototype;m.register=function(){Y(this,"keydown",this.na);Rg(this,"yt-uix-kbd-nav-move-in",this.va);Rg(this,"yt-uix-kbd-nav-move-in-to",this.mb);Rg(this,"yt-uix-kbd-move-next",this.wa);Rg(this,"yt-uix-kbd-nav-move-to",this.T)};
m.unregister=function(){Z(this,"keydown",this.na);V(rk)};
m.na=function(a,b,c){var d=c.keyCode;if(a=I(a,W(this)))switch(d){case 13:case 32:this.va(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Fe(a,"kbdNavMoveOut");!c;){c=I(a.parentElement,W(this));if(!c)break a;c=Fe(c,"kbdNavMoveOut")}c=G(c);this.T(c);P("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&J(a,W(this,"list")))switch(d){case 40:this.wa(b,a);break;case 38:d=document.activeElement==a,a=sk(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),tk(this,a[b]))}c.preventDefault()}};
m.va=function(a){var b=Fe(a,"kbdNavMoveIn");b=G(b);uk(this,a,b);this.T(b)};
m.mb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}uk(this,d,a);this.T(a)};
m.T=function(a){if(a)if(id(a))a.focus();else{var b=ed(a,function(c){return bd(c)?id(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function uk(a,b,c){if(b&&c)if(K(c,W(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Ee&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.wa=function(a,b){var c=document.activeElement==b,d=sk(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),tk(this,d[c]))};
function tk(a,b){if(b){var c=nd(b,"LI");c&&(K(c,W(a,"highlight")),rk=T(b,"blur",y(function(d){L(d,W(this,"highlight"));V(rk)},a,c)))}}
function sk(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ma(ad(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Ma(Na(a,function(b){return ig(b)?ed(b,function(c){return bd(c)?id(c):!1}):!1}),function(b){return!!b})}
;function vk(){Qg.call(this,"menu");this.g=this.f=null;this.h={};this.m={};this.j=null}
A(vk,Qg);wa(vk);function wk(a){var b=vk.u();if(J(a,W(b)))return a;var c=b.B(a);return c?c:I(a,W(b,"content"))==b.f?b.g:null}
m=vk.prototype;m.register=function(){Y(this,"click",this.ma);Y(this,"mouseenter",this.Sa);Rg(this,"page-scroll",this.Va);Rg(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.B(a);xk(this,a)});
this.j=new M};
m.unregister=function(){Z(this,"click",this.ma);this.g=this.f=null;V(Xa($a(this.h)));this.h={};Za(this.m,function(a){$c(a)},this);
this.m={};xe(this.j);this.j=null;vk.v.unregister.call(this)};
m.ma=function(a,b,c){a&&(b=yk(this,a),!b.disabled&&Wf(c.target,b)&&zk(this,a))};
m.Sa=function(a,b,c){a&&J(a,W(this,"hover"))&&Wf(c.target,yk(this,a))&&zk(this,a,!0)};
m.Va=function(){this.f&&this.g&&Ak(this,this.g,this.f)};
function Ak(a,b,c){var d=Bk(a,b);if(d){var e=Sd(c);if(e instanceof Lc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Rd(e,!0);d.style.height=Rd(f,!0)}c==a.f&&(e=9,f=8,J(b,W(a,"reversed"))&&(e^=1,f^=1),J(b,W(a,"flipped"))&&(e^=4,f^=4),a=new F(0,1),d&&Ye(b,e,d,f,a,null,197),Ye(b,e,c,f,a,null,197))}
function zk(a,b,c){Ck(a,b)&&!c?xk(a,b):(Dk(a,b),!a.f||Wf(b,a.f)?a.Ja(b):rf(a.j,y(a.Ja,a,b)))}
m.Ja=function(a){if(a){var b=Ek(this,a);if(b){gg("yt-uix-menu-before-show",a,b);this.f?Wf(a,this.f)||xk(this,this.g):(this.g=a,this.f=b,J(a,W(this,"sibling-content"))||($c(b),document.body.appendChild(b)),b.style.minWidth=yk(this,a).offsetWidth-2+"px");var c=Bk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);L(b,W(this,"content-hidden"));Ak(this,a,b);ze(yk(this,a),[W(this,"trigger-selected"),"yt-uix-button-toggled"]);P("yt-uix-menu-show",a);Fk(b);Gk(this,a);P("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.wb,this,a),e=y(this.ib,this,a);c=Ca(a).toString();this.h[c]=[T(b,"click",e),T(document,"click",d)];J(a,W(this,"indicate-selected"))&&(d=y(this.jb,this,a),this.h[c].push(T(b,"click",d)));J(a,W(this,"hover"))&&(a=y(this.Ta,this,a),this.h[c].push(T(document,"mousemove",a)))}}};
m.Ta=function(a,b){var c=Ig(b);c&&(Wf(c,yk(this,a))||Hk(this,c)||Ik(this,a))};
m.wb=function(a,b){var c=Ig(b);if(c){if(Hk(this,c)){var d=I(c,W(this,"content")),e=nd(c,"LI");e&&d&&cd(d,e)&&gg("yt-uix-menu-item-clicked",c);c=I(c,W(this,"close-on-select"));if(!c)return;d=wk(c)}xk(this,d||a)}};
function Dk(a,b){if(b){var c=I(b,W(a,"content"));c&&C(Pc(W(a),c),function(d){!Wf(d,b)&&Ck(this,d)&&Ik(this,d)},a)}}
function xk(a,b){if(b){var c=[];c.push(b);var d=Ek(a,b);d&&(d=Pc(W(a),d),d=Ta(d),c=c.concat(d),C(c,function(e){Ck(this,e)&&Ik(this,e)},a))}}
function Ik(a,b){if(b){var c=Ek(a,b);Ae(yk(a,b),[W(a,"trigger-selected"),"yt-uix-button-toggled"]);K(c,W(a,"content-hidden"));var d=Ek(a,b);d&&Rc(d,{"aria-expanded":"false"});(d=Bk(a,b))&&d.parentNode&&$c(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.j&&a.j.F("ROOT_MENU_REMOVED"));P("yt-uix-menu-hide",b);c=Ca(b).toString();V(a.h[c]);delete a.h[c]}}
m.ib=function(a,b){var c=Ig(b);c&&Jk(this,a,c)};
m.jb=function(a,b){var c=Ig(b);if(c){var d=yk(this,a);if(d&&(c=nd(c,"LI")))if(c=ld(c).trim(),d.hasChildNodes()){var e=ek.u();(d=H(W(e,"content"),d))&&dd(d,c)}else dd(d,c)}};
function Gk(a,b){var c=Ek(a,b);if(c){C(c.children,function(e){"LI"==e.tagName&&Rc(e,{role:"menuitem"})});
Rc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ca(c),c.id=d);(c=yk(a,b))&&Rc(c,{"aria-controls":d})}}
function Jk(a,b,c){var d=Ek(a,b);d&&J(b,W(a,"checked"))&&(a=nd(c,"LI"))&&(a=H("yt-ui-menu-item-checked-hid",a))&&(C(Pc("yt-ui-menu-item-checked",d),function(e){Ce(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Ce(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Ck(a,b){var c=Ek(a,b);return c?!J(c,W(a,"content-hidden")):!1}
function Fk(a){C(Qc(document,"UL",null,a),function(b){b.tabIndex=0;var c=qk.u();ze(b,[W(c),W(c,"list")])})}
function Ek(a,b){var c=ng(b,"menu-content-id");return c&&(c=G(c))?(ze(c,[W(a,"content"),W(a,"content-external")]),c):b==a.g?a.f:H(W(a,"content"),b)}
function Bk(a,b){var c=Ca(b).toString(),d=a.m[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[W(a,"mask")];C(ye(b),function(f){e.push(f+"-mask")});
ze(d,e);a.m[c]=d}return d||null}
function yk(a,b){return H(W(a,"trigger"),b)}
function Hk(a,b){return Wf(b,a.f)||Wf(b,a.g)}
;function Kk(){Ug.call(this,"clickcard");this.f={};this.g={}}
A(Kk,Ug);wa(Kk);m=Kk.prototype;m.register=function(){Kk.v.register.call(this);Y(this,"click",this.ja,"target");Y(this,"click",this.ia,"close")};
m.unregister=function(){Kk.v.unregister.call(this);Z(this,"click",this.ja,"target");Z(this,"click",this.ia,"close");for(var a in this.f)V(this.f[a]);this.f={};for(a in this.g)V(this.g[a]);this.g={}};
m.ja=function(a,b,c){c.preventDefault();b=nd(c.target,"button");if(!b||!b.disabled){if(b=this.i(a,"card-target"))a=document,a=w(b)?a.getElementById(b):b;b=this.B(a);this.i(b,"disabled")||(J(b,W(this,"active"))?(this.hide(a),L(b,W(this,"active"))):(this.show(a),K(b,W(this,"active"))))}};
m.show=function(a){Kk.v.show.call(this,a);var b=this.B(a),c=Ca(a).toString();if(!ng(b,"click-outside-persists")){if(this.f[c])return;b=T(document,"click",y(this.ka,this,a));var d=T(window,"blur",y(this.ka,this,a));this.f[c]=[b,d]}a=T(window,"resize",y(this.ub,this,a,void 0));this.g[c]=a};
m.hide=function(a){Kk.v.hide.call(this,a);a=Ca(a).toString();var b=this.f[a];b&&(V(b),this.f[a]=null);if(b=this.g[a])V(b),delete this.g[a]};
m.ka=function(a,b){var c="yt-uix"+(this.l?"-"+this.l:"")+"-card",d=null;b.target&&(d=I(b.target,c)||I(wk(b.target),c));(d=d||I(document.activeElement,c)||I(wk(document.activeElement),c))||this.hide(a)};
m.ia=function(a){(a=I(a,W(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Lk(a,b,c,d,e,f){this.f=a;this.o=null;this.h=H("yt-dialog-fg",this.f)||this.f;if(a=H("yt-dialog-title",this.h)){var h="yt-dialog-title-"+Ca(this.h);a.setAttribute("id",h);this.h.setAttribute("aria-labelledby",h)}this.h.setAttribute("tabindex","-1");this.P=H("yt-dialog-focus-trap",this.f);this.X=!1;this.j=new M;this.A=[];this.A.push(Jg(this.f,"click",y(this.nb,this),"yt-dialog-dismiss"));this.A.push(T(this.P,"focus",y(this.Ra,this),!0));Mk(this);this.Y=b;this.La=c;this.Ka=d;this.D=e;this.Ma=
f;this.m=this.l=null}
var Nk={LOADING:"loading",Ib:"content",Jb:"working"};function Ok(a,b){a.U()||a.j.subscribe("post-all",b)}
function Mk(a){a=H("yt-dialog-fg-content",a.f);var b=[];Za(Nk,function(c){b.push("yt-dialog-show-"+c)});
Ae(a,b);K(a,"yt-dialog-show-content")}
m=Lk.prototype;
m.show=function(){if(!this.U()){this.o=document.activeElement;if(!this.Ka){this.g||(this.g=G("yt-dialog-bg"),this.g||(this.g=document.createElement("div"),this.g.id="yt-dialog-bg",this.g.className="yt-dialog-bg",document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Tc(a).height,Uc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";jg(this.g)}this.oa();c=Pk(this);Qk(c);this.l=T(document,"keydown",y(this.hb,this));c=this.f;d=dg("player-added",this.oa,this);lg(c,"player-ready-pubsub-key",d);this.La&&(this.m=T(document,"click",y(this.tb,this)));jg(this.f);this.h.setAttribute("tabindex","0");Rk(this);this.D||K(document.body,"yt-dialog-active");fk(ek.u());Vg(Kk.u());Vg($g.u());P("yt-ui-dialog-show-complete",this)}};
function Sk(){return Pa(Pc("yt-dialog"),function(a){return ig(a)})}
m.oa=function(){if(!this.Ma){var a=this.f;Be(document.body,"hide-players",!0);a&&Be(a,"preserve-players",!0)}};
function Pk(a){var b=Qc(document,"iframe",null,a.f);C(b,function(c){var d=ng(c,"onload");d&&(d=x(d))&&T(c,"load",d);if(d=ng(c,"src"))c.src=d},a);
return Ta(b)}
function Qk(a){C(document.getElementsByTagName("iframe"),function(b){-1==La(a,b)&&K(b,"iframe-hid")})}
function Tk(){C(Pc("iframe-hid"),function(a){L(a,"iframe-hid")})}
m.nb=function(a){a=a.currentTarget;a.disabled||(a=ng(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.U()){this.j.F("pre-all");this.j.F("pre-"+a);kg(this.f);Vg(Kk.u());Vg($g.u());this.h.setAttribute("tabindex","-1");Sk()||(kg(this.g),this.D||L(document.body,"yt-dialog-active"),Zf(),Tk());this.l&&(V(this.l),this.l=null);this.m&&(V(this.m),this.m=null);var b=this.f;if(b){var c=ng(b,"player-ready-pubsub-key");c&&(fg(c),og(b,"player-ready-pubsub-key"))}this.j.F("post-all");P("yt-ui-dialog-hide-complete",this);"cancel"==a&&P("yt-ui-dialog-cancelled",this);this.j&&this.j.F("post-"+
a);this.o&&this.o.focus()}};
m.setTitle=function(a){dd(H("yt-dialog-title",this.f),a)};
m.hb=function(a){O(y(function(){this.Y||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&J(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.tb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.U=function(){return this.X};
m.dispose=function(){ig(this.f)&&this.dismiss("dispose");V(this.A);this.A.length=0;O(y(function(){this.o=null},this),0);
this.P=this.h=null;this.j.dispose();this.j=null;this.X=!0};
m.Ra=function(a){a.stopPropagation();Rk(this)};
function Rk(a){O(y(function(){this.h&&this.h.focus()},a),0)}
z("yt.ui.Dialog",Lk);function Uk(){Qg.call(this,"overlay");this.j=this.g=this.h=this.f=null}
A(Uk,Qg);wa(Uk);m=Uk.prototype;m.register=function(){Y(this,"click",this.da,"target");Y(this,"click",this.hide,"close");Vk(this)};
m.unregister=function(){Uk.v.unregister.call(this);Z(this,"click",this.da,"target");Z(this,"click",this.hide,"close");this.j&&(fg(this.j),this.j=null);this.g&&(V(this.g),this.g=null)};
m.da=function(a){if(!this.f||!ig(this.f.f)){var b=this.B(a);a=Wk(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.i(b,"disable-shortcuts")||!1,d=!!this.i(b,"disable-outside-click-dismiss")||!1;this.f=new Lk(a,c);this.h=b;var e=H("yt-dialog-fg",a);if(e){var f=this.i(b,"overlay-class")||"",h=this.i(b,"overlay-style")||"default",g=this.i(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(W(this,h));f.push(W(this,g));ze(e,f)}this.f.show();P("yt-uix-kbd-nav-move-to",e||a);Vk(this);c||
d||(c=y(function(k){J(k.target,"yt-dialog-base")&&Xk(this)},this),this.g=T(H("yt-dialog-base",a),"click",c));
this.N(b,"overlay-shown");P("yt-uix-overlay-shown",b)}}};
function Vk(a){a.j||(a.j=dg("yt-uix-overlay-hide",Yk));a.f&&Ok(a.f,function(){var b=Uk.u();b.h=null;b.f.dispose();b.f=null})}
function Xk(a){if(a.f){var b=a.h;a.f.dismiss("overlayhide");b&&a.N(b,"overlay-hidden");a.h=null;a.g&&(V(a.g),a.g=null);a.f=null}}
function Wk(a,b){var c;if(a)if(c=H("yt-dialog",a)){var d=G("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=I(b,"yt-dialog"));return c}
function Zk(){var a=Uk.u();if(a.h)a=H("yt-dialog-fg-content",a.h.overlayContentNode);else a:{if(a=Pc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=I(a[b],"yt-dialog");if(ig(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||P("yt-uix-overlay-hide")};
function Yk(){Xk(Uk.u())}
m.show=function(a){this.da(a)};var $k={},al=[];function bl(a){a=I(a,"yt-uix-button-subscription-container");return H("yt-dialog",H("unsubscribe-confirmation-overlay-container",a))}
function cl(a,b){V(al);al.length=0;$k[b]||($k[b]=bl(a));Uk.u().show($k[b]);var c=Zk();return new af(function(d){al.push(Jg(c,"click",function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function dl(){var a=N("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!N("SESSION_INDEX")&&!N("LOGGED_IN"))}
;function el(){Qg.call(this,"subscription-button")}
A(el,Qg);wa(el);m=el.prototype;m.register=function(){Y(this,"click",this.fa);Sg(this,Rh,this.za);Sg(this,Sh,this.ya);Sg(this,Th,this.rb);Sg(this,Wh,this.za);Sg(this,Xh,this.ya);Sg(this,Yh,this.sb);Sg(this,$h,this.pb);Sg(this,ai,this.ob)};
m.unregister=function(){Z(this,"click",this.fa);el.v.unregister.call(this)};
m.isSubscribed=function(a){return!!this.i(a,"is-subscribed")};
m.fa=function(a){var b=this.i(a,"href"),c=this.i(a,"insecure");if(b)a=this.i(a,"target")||"_self",window.open(b,a);else if(!c)if(dl()){b=this.i(a,"channel-external-id");c=this.i(a,"clicktracking");var d=fl(this,a),e=this.i(a,"parent-url");if(this.i(a,"is-subscribed")){var f=this.i(a,"subscription-id"),h=new Nh(b,f,d,a,c,e);this.i(a,"show-unsub-confirm-dialog")?cl(a,b).then(function(){S(Vh,h)}):S(Vh,h)}else S(Qh,new Lh(b,d,c,e))}else gl(this,a)};
m.za=function(a){this.M(a.f,this.Da,!0)};
m.ya=function(a){this.M(a.f,this.Da,!1)};
m.rb=function(a){this.M(a.f,this.Ea,!0,a.g)};
m.sb=function(a){this.M(a.f,this.Ea,!1)};
m.pb=function(a){this.M(a.f,this.Qa)};
m.ob=function(a){this.M(a.f,this.Pa)};
m.Ea=function(a,b,c){b?(lg(a,"is-subscribed","true"),c&&lg(a,"subscription-id",c)):(og(a,"is-subscribed"),og(a,"subscription-id"));hl(this,a)};
function fl(a,b){if(!a.i(b,"ypc-enabled"))return null;var c=a.i(b,"ypc-item-type"),d=a.i(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.Da=function(a,b){var c=I(a,"yt-uix-button-subscription-container");Be(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function hl(a,b){var c=a.i(b,"style-type"),d=!!a.i(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;Be(b,"yt-uix-button-subscribe"+c,!d);Be(b,e,d);a.i(b,"subscriber-count-tooltip")&&!a.i(b,"subscriber-count-show-when-subscribed")&&(c=W(oi.u()),Be(b,c,!d),b.title=d?"":a.i(b,"subscriber-count-title"));d?O(function(){K(b,"hover-enabled")},1E3):L(b,"hover-enabled")}
m.Qa=function(a){var b=!!this.i(a,"ypc-item-type"),c=!!this.i(a,"ypc-item-id");!this.i(a,"ypc-enabled")&&b&&c&&(K(a,"ypc-enabled"),lg(a,"ypc-enabled","true"))};
m.Pa=function(a){this.i(a,"ypc-enabled")&&(L(a,"ypc-enabled"),og(a,"ypc-enabled"))};
function il(a,b){return Ma(Pc(W(a)),function(c){return b==this.i(c,"channel-external-id")},a)}
m.Na=function(a,b,c){var d=Wa(arguments,2);C(a,function(e){b.apply(this,Sa(e,d))},this)};
m.M=function(a,b,c){var d=il(this,a);this.Na.apply(this,Sa([d],Wa(arguments,1)))};
function gl(a,b){var c=y(function(d){d.discoverable_subscriptions&&Of("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.fa(b)},a);
jj(c)}
;z("yt.setConfig",Of);z("yt.config.set",Of);z("yt.www.ads.companion.pauseAndTrackClickWithLabel",function(a){try{window.parent.postMessage("pause-video","*")}catch(b){}ji(a)});
z("ytbin.www.adcompanion.init",function(a,b){Ng("addto-watch-later-button","click",Di);Ng("addto-watch-later-button-success","click",Gi);Ng("addto-watch-later-button-remove","click",Hi);Ng("addto-watch-later-button-sign-in","click",Ai);var c=G("shared-addto-watch-later-login");yi.push(Jg(c,"click",Ci,"sign-in-link"));yi.push(Jg(c,"focusout",Bi,"sign-in-link"));Ti=!0;Ui.push(Ag(Qh,Vi),Ag(Vh,Xi));Ti||Ui.push(Ag(Uh,Vi),Ag(Zh,Xi),Ag(Oh,Zi),Ag(Ph,aj),Ag(bi,cj),Ag(Pi,ej),Ag(Ri,gj),Ag(Oi,fj));ch($g);ch(el);
gi();ji(a);b&&(Ag(Th,Ha(ki,!0,b)),Ag(Yh,Ha(ki,!1,b)))});}).call(this);
