var Sn=Object.defineProperty;var Rn=(s,r,d)=>r in s?Sn(s,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[r]=d;var fe=(s,r,d)=>Rn(s,typeof r!="symbol"?r+"":r,d);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))E(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const T of g.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&E(T)}).observe(document,{childList:!0,subtree:!0});function d(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function E(h){if(h.ep)return;h.ep=!0;const g=d(h);fetch(h.href,g)}})();function Mn(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pt={exports:{}},Za;function An(){return Za||(Za=1,(function(s,r){var d=void 0,E=function(h){return d||(d=new Promise(function(g,T){var y=typeof h<"u"?h:{},$=y.onAbort;y.onAbort=function(e){T(new Error(e)),$&&$(e)},y.postRun=y.postRun||[],y.postRun.push(function(){g(y)}),s=void 0;var o;o||(o=typeof y<"u"?y:{});var b=!!globalThis.window,f=!!globalThis.WorkerGlobalScope;o.onRuntimeInitialized=function(){function e(l,m){switch(typeof m){case"boolean":Un(l,m?1:0);break;case"number":Tn(l,m);break;case"string":Nn(l,m,-1,-1);break;case"object":if(m===null)za(l);else if(m.length!=null){var N=ot(m.length);B.set(m,N),_n(l,N,m.length,-1),He(N)}else dt(l,"Wrong API use : tried to return a value of an unknown type ("+m+").",-1);break;default:za(l)}}function t(l,m){for(var N=[],_=0;_<l;_+=1){var I=ce(m+4*_,"i32"),C=Ln(I);if(C===1||C===2)I=$n(I);else if(C===3)I=gn(I);else if(C===4){C=I,I=yn(C),C=wn(C);for(var ne=new Uint8Array(I),ae=0;ae<I;ae+=1)ne[ae]=B[C+ae];I=ne}else I=null;N.push(I)}return N}function a(l,m){this.Qa=l,this.db=m,this.Oa=1,this.yb=[]}function n(l,m){if(this.db=m,this.ob=rt(l),this.ob===null)throw Error("Unable to allocate memory for the SQL string");this.ub=this.ob,this.gb=this.Fb=null}function i(l){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),l!=null){var m=this.filename,N="/",_=m;if(N&&(N=typeof N=="string"?N:kt(N),_=m?Nt(N+"/"+m):N),m=ga(!0,!0),_=Vs(_,m),l){if(typeof l=="string"){N=Array(l.length);for(var I=0,C=l.length;I<C;++I)N[I]=l.charCodeAt(I);l=N}tt(_,m|146),N=Oe(_,577),qa(N,l,0,l.length,0),It(N),tt(_,m)}}this.handleError(k(this.filename,c)),this.db=ce(c,"i32"),Ka(this.db),this.pb={},this.Sa={}}var c=ge(4),v=o.cwrap,k=v("sqlite3_open","number",["string","number"]),D=v("sqlite3_close_v2","number",["number"]),A=v("sqlite3_exec","number",["number","string","number","number","number"]),W=v("sqlite3_changes","number",["number"]),z=v("sqlite3_prepare_v2","number",["number","string","number","number","number"]),Xa=v("sqlite3_sql","string",["number"]),tn=v("sqlite3_normalized_sql","string",["number"]),ja=v("sqlite3_prepare_v2","number",["number","number","number","number","number"]),an=v("sqlite3_bind_text","number",["number","number","number","number","number"]),Ga=v("sqlite3_bind_blob","number",["number","number","number","number","number"]),sn=v("sqlite3_bind_double","number",["number","number","number"]),nn=v("sqlite3_bind_int","number",["number","number","number"]),rn=v("sqlite3_bind_parameter_index","number",["number","string"]),on=v("sqlite3_step","number",["number"]),ln=v("sqlite3_errmsg","string",["number"]),cn=v("sqlite3_column_count","number",["number"]),dn=v("sqlite3_data_count","number",["number"]),un=v("sqlite3_column_double","number",["number","number"]),Va=v("sqlite3_column_text","string",["number","number"]),pn=v("sqlite3_column_blob","number",["number","number"]),hn=v("sqlite3_column_bytes","number",["number","number"]),vn=v("sqlite3_column_type","number",["number","number"]),fn=v("sqlite3_column_name","string",["number","number"]),bn=v("sqlite3_reset","number",["number"]),mn=v("sqlite3_clear_bindings","number",["number"]),En=v("sqlite3_finalize","number",["number"]),Ya=v("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),Ln=v("sqlite3_value_type","number",["number"]),yn=v("sqlite3_value_bytes","number",["number"]),gn=v("sqlite3_value_text","string",["number"]),wn=v("sqlite3_value_blob","number",["number"]),$n=v("sqlite3_value_double","number",["number"]),Tn=v("sqlite3_result_double","",["number","number"]),za=v("sqlite3_result_null","",["number"]),Nn=v("sqlite3_result_text","",["number","string","number","number"]),_n=v("sqlite3_result_blob","",["number","number","number","number"]),Un=v("sqlite3_result_int","",["number","number"]),dt=v("sqlite3_result_error","",["number","string","number"]),Qa=v("sqlite3_aggregate_context","number",["number","number"]),Ka=v("RegisterExtensionFunctions","number",["number"]),Ja=v("sqlite3_update_hook","number",["number","number","number"]);a.prototype.bind=function(l){if(!this.Qa)throw"Statement closed";return this.reset(),Array.isArray(l)?this.Wb(l):l!=null&&typeof l=="object"?this.Xb(l):!0},a.prototype.step=function(){if(!this.Qa)throw"Statement closed";this.Oa=1;var l=on(this.Qa);switch(l){case 100:return!0;case 101:return!1;default:throw this.db.handleError(l)}},a.prototype.Pb=function(l){return l==null&&(l=this.Oa,this.Oa+=1),un(this.Qa,l)},a.prototype.hc=function(l){if(l==null&&(l=this.Oa,this.Oa+=1),l=Va(this.Qa,l),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(l)},a.prototype.mc=function(l){return l==null&&(l=this.Oa,this.Oa+=1),Va(this.Qa,l)},a.prototype.getBlob=function(l){l==null&&(l=this.Oa,this.Oa+=1);var m=hn(this.Qa,l);l=pn(this.Qa,l);for(var N=new Uint8Array(m),_=0;_<m;_+=1)N[_]=B[l+_];return N},a.prototype.get=function(l,m){m=m||{},l!=null&&this.bind(l)&&this.step(),l=[];for(var N=dn(this.Qa),_=0;_<N;_+=1)switch(vn(this.Qa,_)){case 1:var I=m.useBigInt?this.hc(_):this.Pb(_);l.push(I);break;case 2:l.push(this.Pb(_));break;case 3:l.push(this.mc(_));break;case 4:l.push(this.getBlob(_));break;default:l.push(null)}return l},a.prototype.Db=function(){for(var l=[],m=cn(this.Qa),N=0;N<m;N+=1)l.push(fn(this.Qa,N));return l},a.prototype.Ob=function(l,m){l=this.get(l,m),m=this.Db();for(var N={},_=0;_<m.length;_+=1)N[m[_]]=l[_];return N},a.prototype.lc=function(){return Xa(this.Qa)},a.prototype.ic=function(){return tn(this.Qa)},a.prototype.Jb=function(l){return l!=null&&this.bind(l),this.step(),this.reset()},a.prototype.Lb=function(l,m){m==null&&(m=this.Oa,this.Oa+=1),l=rt(l),this.yb.push(l),this.db.handleError(an(this.Qa,m,l,-1,0))},a.prototype.Vb=function(l,m){m==null&&(m=this.Oa,this.Oa+=1);var N=ot(l.length);B.set(l,N),this.yb.push(N),this.db.handleError(Ga(this.Qa,m,N,l.length,0))},a.prototype.Kb=function(l,m){m==null&&(m=this.Oa,this.Oa+=1),this.db.handleError((l===(l|0)?nn:sn)(this.Qa,m,l))},a.prototype.Yb=function(l){l==null&&(l=this.Oa,this.Oa+=1),Ga(this.Qa,l,0,0,0)},a.prototype.Mb=function(l,m){switch(m==null&&(m=this.Oa,this.Oa+=1),typeof l){case"string":this.Lb(l,m);return;case"number":this.Kb(l,m);return;case"bigint":this.Lb(l.toString(),m);return;case"boolean":this.Kb(l+0,m);return;case"object":if(l===null){this.Yb(m);return}if(l.length!=null){this.Vb(l,m);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+l+")."},a.prototype.Xb=function(l){var m=this;return Object.keys(l).forEach(function(N){var _=rn(m.Qa,N);_!==0&&m.Mb(l[N],_)}),!0},a.prototype.Wb=function(l){for(var m=0;m<l.length;m+=1)this.Mb(l[m],m+1);return!0},a.prototype.reset=function(){return this.Cb(),mn(this.Qa)===0&&bn(this.Qa)===0},a.prototype.Cb=function(){for(var l;(l=this.yb.pop())!==void 0;)He(l)},a.prototype.cb=function(){this.Cb();var l=En(this.Qa)===0;return delete this.db.pb[this.Qa],this.Qa=0,l},n.prototype.next=function(){if(this.ob===null)return{done:!0};if(this.gb!==null&&(this.gb.cb(),this.gb=null),!this.db.db)throw this.Ab(),Error("Database closed");var l=lt(),m=ge(4);Ce(c),Ce(m);try{this.db.handleError(ja(this.db.db,this.ub,-1,c,m)),this.ub=ce(m,"i32");var N=ce(c,"i32");return N===0?(this.Ab(),{done:!0}):(this.gb=new a(N,this.db),this.db.pb[N]=this.gb,{value:this.gb,done:!1})}catch(_){throw this.Fb=V(this.ub),this.Ab(),_}finally{it(l)}},n.prototype.Ab=function(){He(this.ob),this.ob=null},n.prototype.jc=function(){return this.Fb!==null?this.Fb:V(this.ub)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(n.prototype[Symbol.iterator]=function(){return this}),i.prototype.Jb=function(l,m){if(!this.db)throw"Database closed";if(m){l=this.Gb(l,m);try{l.step()}finally{l.cb()}}else this.handleError(A(this.db,l,0,0,c));return this},i.prototype.exec=function(l,m,N){if(!this.db)throw"Database closed";var _=null,I=null,C=null;try{C=I=rt(l);var ne=ge(4);for(l=[];ce(C,"i8")!==0;){Ce(c),Ce(ne),this.handleError(ja(this.db,C,-1,c,ne));var ae=ce(c,"i32");if(C=ce(ne,"i32"),ae!==0){var ee=null;for(_=new a(ae,this),m!=null&&_.bind(m);_.step();)ee===null&&(ee={columns:_.Db(),values:[]},l.push(ee)),ee.values.push(_.get(null,N));_.cb()}}return l}catch(re){throw _&&_.cb(),re}finally{I&&He(I)}},i.prototype.ec=function(l,m,N,_,I){typeof m=="function"&&(_=N,N=m,m=void 0),l=this.Gb(l,m);try{for(;l.step();)N(l.Ob(null,I))}finally{l.cb()}if(typeof _=="function")return _()},i.prototype.Gb=function(l,m){if(Ce(c),this.handleError(z(this.db,l,-1,c,0)),l=ce(c,"i32"),l===0)throw"Nothing to prepare";var N=new a(l,this);return m!=null&&N.bind(m),this.pb[l]=N},i.prototype.pc=function(l){return new n(l,this)},i.prototype.fc=function(){Object.values(this.pb).forEach(function(m){m.cb()}),Object.values(this.Sa).forEach(he),this.Sa={},this.handleError(D(this.db));var l=Ys(this.filename);return this.handleError(k(this.filename,c)),this.db=ce(c,"i32"),Ka(this.db),l},i.prototype.close=function(){this.db!==null&&(Object.values(this.pb).forEach(function(l){l.cb()}),Object.values(this.Sa).forEach(he),this.Sa={},this.fb&&(he(this.fb),this.fb=void 0),this.handleError(D(this.db)),Ma("/"+this.filename),this.db=null)},i.prototype.handleError=function(l){if(l===0)return null;throw l=ln(this.db),Error(l)},i.prototype.kc=function(){return W(this.db)},i.prototype.bc=function(l,m){Object.prototype.hasOwnProperty.call(this.Sa,l)&&(he(this.Sa[l]),delete this.Sa[l]);var N=We(function(_,I,C){I=t(I,C);try{var ne=m.apply(null,I)}catch(ae){dt(_,ae,-1);return}e(_,ne)},"viii");return this.Sa[l]=N,this.handleError(Ya(this.db,l,m.length,1,0,N,0,0,0)),this},i.prototype.ac=function(l,m){var N=m.init||function(){return null},_=m.finalize||function(ee){return ee},I=m.step;if(!I)throw"An aggregate function must have a step function in "+l;var C={};Object.hasOwnProperty.call(this.Sa,l)&&(he(this.Sa[l]),delete this.Sa[l]),m=l+"__finalize",Object.hasOwnProperty.call(this.Sa,m)&&(he(this.Sa[m]),delete this.Sa[m]);var ne=We(function(ee,re,Ht){var we=Qa(ee,1);Object.hasOwnProperty.call(C,we)||(C[we]=N()),re=t(re,Ht),re=[C[we]].concat(re);try{C[we]=I.apply(null,re)}catch(kn){delete C[we],dt(ee,kn,-1)}},"viii"),ae=We(function(ee){var re=Qa(ee,1);try{var Ht=_(C[re])}catch(we){delete C[re],dt(ee,we,-1);return}e(ee,Ht),delete C[re]},"vi");return this.Sa[l]=ne,this.Sa[m]=ae,this.handleError(Ya(this.db,l,I.length-1,1,0,0,ne,ae,0)),this},i.prototype.vc=function(l){return this.fb&&(Ja(this.db,0,0),he(this.fb),this.fb=void 0),l?(this.fb=We(function(m,N,_,I,C){switch(N){case 18:m="insert";break;case 23:m="update";break;case 9:m="delete";break;default:throw"unknown operationCode in updateHook callback: "+N}if(_=V(_),I=V(I),C>Number.MAX_SAFE_INTEGER)throw"rowId too big to fit inside a Number";l(m,_,I,Number(C))},"viiiij"),Ja(this.db,this.fb,0),this):this},a.prototype.bind=a.prototype.bind,a.prototype.step=a.prototype.step,a.prototype.get=a.prototype.get,a.prototype.getColumnNames=a.prototype.Db,a.prototype.getAsObject=a.prototype.Ob,a.prototype.getSQL=a.prototype.lc,a.prototype.getNormalizedSQL=a.prototype.ic,a.prototype.run=a.prototype.Jb,a.prototype.reset=a.prototype.reset,a.prototype.freemem=a.prototype.Cb,a.prototype.free=a.prototype.cb,n.prototype.next=n.prototype.next,n.prototype.getRemainingSQL=n.prototype.jc,i.prototype.run=i.prototype.Jb,i.prototype.exec=i.prototype.exec,i.prototype.each=i.prototype.ec,i.prototype.prepare=i.prototype.Gb,i.prototype.iterateStatements=i.prototype.pc,i.prototype.export=i.prototype.fc,i.prototype.close=i.prototype.close,i.prototype.handleError=i.prototype.handleError,i.prototype.getRowsModified=i.prototype.kc,i.prototype.create_function=i.prototype.bc,i.prototype.create_aggregate=i.prototype.ac,i.prototype.updateHook=i.prototype.vc,o.Database=i};var u="./this.program",U=globalThis.document?.currentScript?.src;f&&(U=self.location.href);var O="",Z,M;if(b||f){try{O=new URL(".",U).href}catch{}f&&(M=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),Z=async e=>{if(e=await fetch(e,{credentials:"same-origin"}),e.ok)return e.arrayBuffer();throw Error(e.status+" : "+e.url)}}var G=console.log.bind(console),Y=console.error.bind(console),be,ke=!1,Se,B,X,le,x,q,wt,$t,se;function ca(){var e=ct.buffer;B=new Int8Array(e),le=new Int16Array(e),X=new Uint8Array(e),x=new Int32Array(e),q=new Uint32Array(e),wt=new Float32Array(e),$t=new Float64Array(e),se=new BigInt64Array(e),new BigUint64Array(e)}function xe(e){throw o.onAbort?.(e),e="Aborted("+e+")",Y(e),ke=!0,new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info.")}var Tt;async function Os(e){if(!be)try{var t=await Z(e);return new Uint8Array(t)}catch{}if(e==Tt&&be)e=new Uint8Array(be);else if(M)e=M(e);else throw"both async and sync fetching of the wasm failed";return e}async function Is(e,t){try{var a=await Os(e);return await WebAssembly.instantiate(a,t)}catch(n){Y(`failed to asynchronously prepare wasm: ${n}`),xe(n)}}async function xs(e){var t=Tt;if(!be)try{var a=fetch(t,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(a,e)}catch(n){Y(`wasm streaming compile failed: ${n}`),Y("falling back to ArrayBuffer instantiation")}return Is(t,e)}class da{constructor(t){fe(this,"name","ExitStatus");this.message=`Program terminated with exit(${t})`,this.status=t}}var ua=e=>{for(;0<e.length;)e.shift()(o)},pa=[],ha=[],qs=()=>{var e=o.preRun.shift();ha.push(e)},me=0,qe=null;function ce(e,t="i8"){switch(t.endsWith("*")&&(t="*"),t){case"i1":return B[e];case"i8":return B[e];case"i16":return le[e>>1];case"i32":return x[e>>2];case"i64":return se[e>>3];case"float":return wt[e>>2];case"double":return $t[e>>3];case"*":return q[e>>2];default:xe(`invalid type for getValue: ${t}`)}}var ze=!0;function Ce(e){var t="i32";switch(t.endsWith("*")&&(t="*"),t){case"i1":B[e]=0;break;case"i8":B[e]=0;break;case"i16":le[e>>1]=0;break;case"i32":x[e>>2]=0;break;case"i64":se[e>>3]=BigInt(0);break;case"float":wt[e>>2]=0;break;case"double":$t[e>>3]=0;break;case"*":q[e>>2]=0;break;default:xe(`invalid type for setValue: ${t}`)}}var va=new TextDecoder,fa=(e,t,a,n)=>{if(a=t+a,n)return a;for(;e[t]&&!(t>=a);)++t;return t},V=(e,t,a)=>e?va.decode(X.subarray(e,fa(X,e,t,a))):"",ba=(e,t)=>{for(var a=0,n=e.length-1;0<=n;n--){var i=e[n];i==="."?e.splice(n,1):i===".."?(e.splice(n,1),a++):a&&(e.splice(n,1),a--)}if(t)for(;a;a--)e.unshift("..");return e},Nt=e=>{var t=e.charAt(0)==="/",a=e.slice(-1)==="/";return(e=ba(e.split("/").filter(n=>!!n),!t).join("/"))||t||(e="."),e&&a&&(e+="/"),(t?"/":"")+e},ma=e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],!e&&!t?".":(t&&(t=t.slice(0,-1)),e+t)},Qe=e=>e&&e.match(/([^\/]+|\/)\/*$/)[1],Cs=()=>e=>crypto.getRandomValues(e),Ea=e=>{(Ea=Cs())(e)},Ds=(...e)=>{for(var t="",a=!1,n=e.length-1;-1<=n&&!a;n--){if(a=0<=n?e[n]:"/",typeof a!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!a)return"";t=a+"/"+t,a=a.charAt(0)==="/"}return t=ba(t.split("/").filter(i=>!!i),!a).join("/"),(a?"/":"")+t||"."},Ke=e=>{var t=fa(e,0);return va.decode(e.buffer?e.subarray(0,t):new Uint8Array(e.slice(0,t)))},_t=[],Re=e=>{for(var t=0,a=0;a<e.length;++a){var n=e.charCodeAt(a);127>=n?t++:2047>=n?t+=2:55296<=n&&57343>=n?(t+=4,++a):t+=3}return t},oe=(e,t,a,n)=>{if(!(0<n))return 0;var i=a;n=a+n-1;for(var c=0;c<e.length;++c){var v=e.codePointAt(c);if(127>=v){if(a>=n)break;t[a++]=v}else if(2047>=v){if(a+1>=n)break;t[a++]=192|v>>6,t[a++]=128|v&63}else if(65535>=v){if(a+2>=n)break;t[a++]=224|v>>12,t[a++]=128|v>>6&63,t[a++]=128|v&63}else{if(a+3>=n)break;t[a++]=240|v>>18,t[a++]=128|v>>12&63,t[a++]=128|v>>6&63,t[a++]=128|v&63,c++}}return t[a]=0,a-i},La=[];function ya(e,t){La[e]={input:[],output:[],kb:t},At(e,Fs)}var Fs={open(e){var t=La[e.node.nb];if(!t)throw new w(43);e.Va=t,e.seekable=!1},close(e){e.Va.kb.lb(e.Va)},lb(e){e.Va.kb.lb(e.Va)},read(e,t,a,n){if(!e.Va||!e.Va.kb.Qb)throw new w(60);for(var i=0,c=0;c<n;c++){try{var v=e.Va.kb.Qb(e.Va)}catch{throw new w(29)}if(v===void 0&&i===0)throw new w(6);if(v==null)break;i++,t[a+c]=v}return i&&(e.node.$a=Date.now()),i},write(e,t,a,n){if(!e.Va||!e.Va.kb.Hb)throw new w(60);try{for(var i=0;i<n;i++)e.Va.kb.Hb(e.Va,t[a+i])}catch{throw new w(29)}return n&&(e.node.Ua=e.node.Ta=Date.now()),i}},Ws={Qb(){e:{if(!_t.length){var e=null;if(globalThis.window?.prompt&&(e=window.prompt("Input: "),e!==null&&(e+=`
`)),!e){var t=null;break e}t=Array(Re(e)+1),e=oe(e,t,0,t.length),t.length=e,_t=t}t=_t.shift()}return t},Hb(e,t){t===null||t===10?(G(Ke(e.output)),e.output=[]):t!=0&&e.output.push(t)},lb(e){0<e.output?.length&&(G(Ke(e.output)),e.output=[])},Dc(){return{yc:25856,Ac:5,xc:191,zc:35387,wc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ec(){return 0},Fc(){return[24,80]}},Hs={Hb(e,t){t===null||t===10?(Y(Ke(e.output)),e.output=[]):t!=0&&e.output.push(t)},lb(e){0<e.output?.length&&(Y(Ke(e.output)),e.output=[])}},R={Za:null,ab(){return R.createNode(null,"/",16895,0)},createNode(e,t,a,n){if((a&61440)===24576||(a&61440)===4096)throw new w(63);return R.Za||(R.Za={dir:{node:{Wa:R.La.Wa,Xa:R.La.Xa,mb:R.La.mb,rb:R.La.rb,Tb:R.La.Tb,xb:R.La.xb,vb:R.La.vb,Ib:R.La.Ib,wb:R.La.wb},stream:{Ya:R.Ma.Ya}},file:{node:{Wa:R.La.Wa,Xa:R.La.Xa},stream:{Ya:R.Ma.Ya,read:R.Ma.read,write:R.Ma.write,sb:R.Ma.sb,tb:R.Ma.tb}},link:{node:{Wa:R.La.Wa,Xa:R.La.Xa,eb:R.La.eb},stream:{}},Nb:{node:{Wa:R.La.Wa,Xa:R.La.Xa},stream:Gs}}),a=Na(e,t,a,n),J(a.mode)?(a.La=R.Za.dir.node,a.Ma=R.Za.dir.stream,a.Na={}):(a.mode&61440)===32768?(a.La=R.Za.file.node,a.Ma=R.Za.file.stream,a.Ra=0,a.Na=null):(a.mode&61440)===40960?(a.La=R.Za.link.node,a.Ma=R.Za.link.stream):(a.mode&61440)===8192&&(a.La=R.Za.Nb.node,a.Ma=R.Za.Nb.stream),a.$a=a.Ua=a.Ta=Date.now(),e&&(e.Na[t]=a,e.$a=e.Ua=e.Ta=a.$a),a},Cc(e){return e.Na?e.Na.subarray?e.Na.subarray(0,e.Ra):new Uint8Array(e.Na):new Uint8Array(0)},La:{Wa(e){var t={};return t.cc=(e.mode&61440)===8192?e.id:1,t.oc=e.id,t.mode=e.mode,t.rc=1,t.uid=0,t.nc=0,t.nb=e.nb,J(e.mode)?t.size=4096:(e.mode&61440)===32768?t.size=e.Ra:(e.mode&61440)===40960?t.size=e.link.length:t.size=0,t.$a=new Date(e.$a),t.Ua=new Date(e.Ua),t.Ta=new Date(e.Ta),t.Zb=4096,t.$b=Math.ceil(t.size/t.Zb),t},Xa(e,t){for(var a of["mode","atime","mtime","ctime"])t[a]!=null&&(e[a]=t[a]);t.size!==void 0&&(t=t.size,e.Ra!=t&&(t==0?(e.Na=null,e.Ra=0):(a=e.Na,e.Na=new Uint8Array(t),a&&e.Na.set(a.subarray(0,Math.min(t,e.Ra))),e.Ra=t)))},mb(){throw R.zb||(R.zb=new w(44),R.zb.stack="<generic error, no stack>"),R.zb},rb(e,t,a,n){return R.createNode(e,t,a,n)},Tb(e,t,a){try{var n=Ee(t,a)}catch{}if(n){if(J(e.mode))for(var i in n.Na)throw new w(55);Rt(n)}delete e.parent.Na[e.name],t.Na[a]=e,e.name=a,t.Ta=t.Ua=e.parent.Ta=e.parent.Ua=Date.now()},xb(e,t){delete e.Na[t],e.Ta=e.Ua=Date.now()},vb(e,t){var a=Ee(e,t),n;for(n in a.Na)throw new w(55);delete e.Na[t],e.Ta=e.Ua=Date.now()},Ib(e){return[".","..",...Object.keys(e.Na)]},wb(e,t,a){return e=R.createNode(e,t,41471,0),e.link=a,e},eb(e){if((e.mode&61440)!==40960)throw new w(28);return e.link}},Ma:{read(e,t,a,n,i){var c=e.node.Na;if(i>=e.node.Ra)return 0;if(e=Math.min(e.node.Ra-i,n),8<e&&c.subarray)t.set(c.subarray(i,i+e),a);else for(n=0;n<e;n++)t[a+n]=c[i+n];return e},write(e,t,a,n,i,c){if(t.buffer===B.buffer&&(c=!1),!n)return 0;if(e=e.node,e.Ua=e.Ta=Date.now(),t.subarray&&(!e.Na||e.Na.subarray)){if(c)return e.Na=t.subarray(a,a+n),e.Ra=n;if(e.Ra===0&&i===0)return e.Na=t.slice(a,a+n),e.Ra=n;if(i+n<=e.Ra)return e.Na.set(t.subarray(a,a+n),i),n}c=i+n;var v=e.Na?e.Na.length:0;if(v>=c||(c=Math.max(c,v*(1048576>v?2:1.125)>>>0),v!=0&&(c=Math.max(c,256)),v=e.Na,e.Na=new Uint8Array(c),0<e.Ra&&e.Na.set(v.subarray(0,e.Ra),0)),e.Na.subarray&&t.subarray)e.Na.set(t.subarray(a,a+n),i);else for(c=0;c<n;c++)e.Na[i+c]=t[a+c];return e.Ra=Math.max(e.Ra,i+n),n},Ya(e,t,a){if(a===1?t+=e.position:a===2&&(e.node.mode&61440)===32768&&(t+=e.node.Ra),0>t)throw new w(28);return t},sb(e,t,a,n,i){if((e.node.mode&61440)!==32768)throw new w(43);if(e=e.node.Na,i&2||!e||e.buffer!==B.buffer){i=!0,n=65536*Math.ceil(t/65536);var c=Pa(65536,n);if(c&&X.fill(0,c,c+n),n=c,!n)throw new w(48);e&&((0<a||a+t<e.length)&&(e.subarray?e=e.subarray(a,a+t):e=Array.prototype.slice.call(e,a,a+t)),B.set(e,n))}else i=!1,n=e.byteOffset;return{tc:n,Ub:i}},tb(e,t,a,n){return R.Ma.write(e,t,0,n,a,!1),0}}},ga=(e,t)=>{var a=0;return e&&(a|=365),t&&(a|=146),a},Ut=null,wa={},Me=[],Ps=1,ue=null,$a=!1,Ta=!0,w=class{constructor(e){fe(this,"name","ErrnoError");this.Pa=e}},Bs=class{constructor(){fe(this,"qb",{});fe(this,"node",null)}get flags(){return this.qb.flags}set flags(e){this.qb.flags=e}get position(){return this.qb.position}set position(e){this.qb.position=e}},Xs=class{constructor(e,t,a,n){fe(this,"La",{});fe(this,"Ma",{});fe(this,"ib",null);e||(e=this),this.parent=e,this.ab=e.ab,this.id=Ps++,this.name=t,this.mode=a,this.nb=n,this.$a=this.Ua=this.Ta=Date.now()}get read(){return(this.mode&365)===365}set read(e){e?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(e){e?this.mode|=146:this.mode&=-147}};function te(e,t={}){if(!e)throw new w(44);t.Bb??(t.Bb=!0),e.charAt(0)==="/"||(e="//"+e);var a=0;e:for(;40>a;a++){e=e.split("/").filter(k=>!!k);for(var n=Ut,i="/",c=0;c<e.length;c++){var v=c===e.length-1;if(v&&t.parent)break;if(e[c]!==".")if(e[c]==="..")if(i=ma(i),n===n.parent){e=i+"/"+e.slice(c+1).join("/"),a--;continue e}else n=n.parent;else{i=Nt(i+"/"+e[c]);try{n=Ee(n,e[c])}catch(k){if(k?.Pa===44&&v&&t.sc)return{path:i};throw k}if(!n.ib||v&&!t.Bb||(n=n.ib.root),(n.mode&61440)===40960&&(!v||t.hb)){if(!n.La.eb)throw new w(52);n=n.La.eb(n),n.charAt(0)==="/"||(n=ma(i)+"/"+n),e=n+"/"+e.slice(c+1).join("/");continue e}}}return{path:i,node:n}}throw new w(32)}function kt(e){for(var t;;){if(e===e.parent)return e=e.ab.Sb,t?e[e.length-1]!=="/"?`${e}/${t}`:e+t:e;t=t?`${e.name}/${t}`:e.name,e=e.parent}}function St(e,t){for(var a=0,n=0;n<t.length;n++)a=(a<<5)-a+t.charCodeAt(n)|0;return(e+a>>>0)%ue.length}function Rt(e){var t=St(e.parent.id,e.name);if(ue[t]===e)ue[t]=e.jb;else for(t=ue[t];t;){if(t.jb===e){t.jb=e.jb;break}t=t.jb}}function Ee(e,t){var a=J(e.mode)?(a=Ae(e,"x"))?a:e.La.mb?0:2:54;if(a)throw new w(a);for(a=ue[St(e.id,t)];a;a=a.jb){var n=a.name;if(a.parent.id===e.id&&n===t)return a}return e.La.mb(e,t)}function Na(e,t,a,n){return e=new Xs(e,t,a,n),t=St(e.parent.id,e.name),e.jb=ue[t],ue[t]=e}function J(e){return(e&61440)===16384}function Ae(e,t){return Ta?0:t.includes("r")&&!(e.mode&292)||t.includes("w")&&!(e.mode&146)||t.includes("x")&&!(e.mode&73)?2:0}function _a(e,t){if(!J(e.mode))return 54;try{return Ee(e,t),20}catch{}return Ae(e,"wx")}function Ua(e,t,a){try{var n=Ee(e,t)}catch(i){return i.Pa}if(e=Ae(e,"wx"))return e;if(a){if(!J(n.mode))return 54;if(n===n.parent||kt(n)==="/")return 10}else if(J(n.mode))return 31;return 0}function Je(e){if(!e)throw new w(63);return e}function Q(e){if(e=Me[e],!e)throw new w(8);return e}function ka(e,t=-1){if(e=Object.assign(new Bs,e),t==-1)e:{for(t=0;4096>=t;t++)if(!Me[t])break e;throw new w(33)}return e.bb=t,Me[t]=e}function js(e,t=-1){return e=ka(e,t),e.Ma?.Bc?.(e),e}function Mt(e,t,a){var n=e?.Ma.Xa;e=n?e:t,n??(n=t.La.Xa),Je(n),n(e,a)}var Gs={open(e){e.Ma=wa[e.node.nb].Ma,e.Ma.open?.(e)},Ya(){throw new w(70)}};function At(e,t){wa[e]={Ma:t}}function Sa(e,t){var a=t==="/";if(a&&Ut)throw new w(10);if(!a&&t){var n=te(t,{Bb:!1});if(t=n.path,n=n.node,n.ib)throw new w(10);if(!J(n.mode))throw new w(54)}t={type:e,Gc:{},Sb:t,qc:[]},e=e.ab(t),e.ab=t,t.root=e,a?Ut=e:n&&(n.ib=t,n.ab&&n.ab.qc.push(t))}function Ze(e,t,a){var n=te(e,{parent:!0}).node;if(e=Qe(e),!e)throw new w(28);if(e==="."||e==="..")throw new w(20);var i=_a(n,e);if(i)throw new w(i);if(!n.La.rb)throw new w(63);return n.La.rb(n,e,t,a)}function Vs(e,t=438){return Ze(e,t&4095|32768,0)}function ie(e,t=511){return Ze(e,t&1023|16384,0)}function et(e,t,a){typeof a>"u"&&(a=t,t=438),Ze(e,t|8192,a)}function Ot(e,t){if(!Ds(e))throw new w(44);var a=te(t,{parent:!0}).node;if(!a)throw new w(44);t=Qe(t);var n=_a(a,t);if(n)throw new w(n);if(!a.La.wb)throw new w(63);a.La.wb(a,t,e)}function Ra(e){var t=te(e,{parent:!0}).node;e=Qe(e);var a=Ee(t,e),n=Ua(t,e,!0);if(n)throw new w(n);if(!t.La.vb)throw new w(63);if(a.ib)throw new w(10);t.La.vb(t,e),Rt(a)}function Ma(e){var t=te(e,{parent:!0}).node;if(!t)throw new w(44);e=Qe(e);var a=Ee(t,e),n=Ua(t,e,!1);if(n)throw new w(n);if(!t.La.xb)throw new w(63);if(a.ib)throw new w(10);t.La.xb(t,e),Rt(a)}function De(e,t){return e=te(e,{hb:!t}).node,Je(e.La.Wa)(e)}function Aa(e,t,a,n){Mt(e,t,{mode:a&4095|t.mode&-4096,Ta:Date.now(),dc:n})}function tt(e,t){e=typeof e=="string"?te(e,{hb:!0}).node:e,Aa(null,e,t)}function Oa(e,t,a){if(J(t.mode))throw new w(31);if((t.mode&61440)!==32768)throw new w(28);var n=Ae(t,"w");if(n)throw new w(n);Mt(e,t,{size:a,timestamp:Date.now()})}function Oe(e,t,a=438){if(e==="")throw new w(44);if(typeof t=="string"){var n={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[t];if(typeof n>"u")throw Error(`Unknown file open mode: ${t}`);t=n}if(a=t&64?a&4095|32768:0,typeof e=="object")n=e;else{var i=e.endsWith("/"),c=te(e,{hb:!(t&131072),sc:!0});n=c.node,e=c.path}if(c=!1,t&64)if(n){if(t&128)throw new w(20)}else{if(i)throw new w(31);n=Ze(e,a|511,0),c=!0}if(!n)throw new w(44);if((n.mode&61440)===8192&&(t&=-513),t&65536&&!J(n.mode))throw new w(54);if(!c&&(n?(n.mode&61440)===40960?i=32:(i=["r","w","rw"][t&3],t&512&&(i+="w"),i=J(n.mode)&&(i!=="r"||t&576)?31:Ae(n,i)):i=44,i))throw new w(i);return t&512&&!c&&(i=n,i=typeof i=="string"?te(i,{hb:!0}).node:i,Oa(null,i,0)),t=ka({node:n,path:kt(n),flags:t&-131713,seekable:!0,position:0,Ma:n.Ma,uc:[],error:!1}),t.Ma.open&&t.Ma.open(t),c&&tt(n,a&511),t}function It(e){if(e.bb===null)throw new w(8);e.Eb&&(e.Eb=null);try{e.Ma.close&&e.Ma.close(e)}catch(t){throw t}finally{Me[e.bb]=null}e.bb=null}function Ia(e,t,a){if(e.bb===null)throw new w(8);if(!e.seekable||!e.Ma.Ya)throw new w(70);if(a!=0&&a!=1&&a!=2)throw new w(28);e.position=e.Ma.Ya(e,t,a),e.uc=[]}function xa(e,t,a,n,i){if(0>n||0>i)throw new w(28);if(e.bb===null)throw new w(8);if((e.flags&2097155)===1)throw new w(8);if(J(e.node.mode))throw new w(31);if(!e.Ma.read)throw new w(28);var c=typeof i<"u";if(!c)i=e.position;else if(!e.seekable)throw new w(70);return t=e.Ma.read(e,t,a,n,i),c||(e.position+=t),t}function qa(e,t,a,n,i){if(0>n||0>i)throw new w(28);if(e.bb===null)throw new w(8);if((e.flags&2097155)===0)throw new w(8);if(J(e.node.mode))throw new w(31);if(!e.Ma.write)throw new w(28);e.seekable&&e.flags&1024&&Ia(e,0,2);var c=typeof i<"u";if(!c)i=e.position;else if(!e.seekable)throw new w(70);return t=e.Ma.write(e,t,a,n,i,void 0),c||(e.position+=t),t}function Ys(e){var t=t||0;t=Oe(e,t),e=De(e).size;var a=new Uint8Array(e);return xa(t,a,0,e,0),It(t),a}function pe(e,t,a){e=Nt("/dev/"+e);var n=ga(!!t,!!a);pe.Rb??(pe.Rb=64);var i=pe.Rb++<<8|0;At(i,{open(c){c.seekable=!1},close(){a?.buffer?.length&&a(10)},read(c,v,k,D){for(var A=0,W=0;W<D;W++){try{var z=t()}catch{throw new w(29)}if(z===void 0&&A===0)throw new w(6);if(z==null)break;A++,v[k+W]=z}return A&&(c.node.$a=Date.now()),A},write(c,v,k,D){for(var A=0;A<D;A++)try{a(v[k+A])}catch{throw new w(29)}return D&&(c.node.Ua=c.node.Ta=Date.now()),A}}),et(e,n,i)}var F={};function Le(e,t,a){if(t.charAt(0)==="/")return t;if(e=e===-100?"/":Q(e).path,t.length==0){if(!a)throw new w(44);return e}return e+"/"+t}function at(e,t){q[e>>2]=t.cc,q[e+4>>2]=t.mode,q[e+8>>2]=t.rc,q[e+12>>2]=t.uid,q[e+16>>2]=t.nc,q[e+20>>2]=t.nb,se[e+24>>3]=BigInt(t.size),x[e+32>>2]=4096,x[e+36>>2]=t.$b;var a=t.$a.getTime(),n=t.Ua.getTime(),i=t.Ta.getTime();return se[e+40>>3]=BigInt(Math.floor(a/1e3)),q[e+48>>2]=a%1e3*1e6,se[e+56>>3]=BigInt(Math.floor(n/1e3)),q[e+64>>2]=n%1e3*1e6,se[e+72>>3]=BigInt(Math.floor(i/1e3)),q[e+80>>2]=i%1e3*1e6,se[e+88>>3]=BigInt(t.oc),0}var st=void 0,nt=()=>{var e=x[+st>>2];return st+=4,e},xt=0,zs=[0,31,60,91,121,152,182,213,244,274,305,335],Qs=[0,31,59,90,120,151,181,212,243,273,304,334],Fe={},Ca=e=>{if(!(e instanceof da||e=="unwind"))throw e},Da=e=>{throw Se=e,ze||0<xt||(o.onExit?.(e),ke=!0),new da(e)},Ks=e=>{if(!ke)try{e()}catch(t){Ca(t)}finally{if(!(ze||0<xt))try{Se=e=Se,Da(e)}catch(t){Ca(t)}}},qt={},Fa=()=>{if(!Ct){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:u||"./this.program"},t;for(t in qt)qt[t]===void 0?delete e[t]:e[t]=qt[t];var a=[];for(t in e)a.push(`${t}=${e[t]}`);Ct=a}return Ct},Ct,Js=(e,t,a,n)=>{var i={string:A=>{var W=0;if(A!=null&&A!==0){W=Re(A)+1;var z=ge(W);oe(A,X,z,W),W=z}return W},array:A=>{var W=ge(A.length);return B.set(A,W),W}};e=o["_"+e];var c=[],v=0;if(n)for(var k=0;k<n.length;k++){var D=i[a[k]];D?(v===0&&(v=lt()),c[k]=D(n[k])):c[k]=n[k]}return a=e(...c),a=(function(A){return v!==0&&it(v),t==="string"?V(A):t==="boolean"?!!A:A})(a)},rt=e=>{var t=Re(e)+1,a=ot(t);return a&&oe(e,X,a,t),a},ye,Dt=[],he=e=>{ye.delete(ve.get(e)),ve.set(e,null),Dt.push(e)},Wa=e=>{const t=e.length;return[t%128|128,t>>7,...e]},Zs={i:127,p:127,j:126,f:125,d:124,e:111},Ha=e=>Wa(Array.from(e,t=>Zs[t])),We=(e,t)=>{if(!ye){ye=new WeakMap;var a=ve.length;if(ye)for(var n=0;n<0+a;n++){var i=ve.get(n);i&&ye.set(i,n)}}if(a=ye.get(e)||0)return a;a=Dt.length?Dt.pop():ve.grow(1);try{ve.set(a,e)}catch(c){if(!(c instanceof TypeError))throw c;t=Uint8Array.of(0,97,115,109,1,0,0,0,1,...Wa([1,96,...Ha(t.slice(1)),...Ha(t[0]==="v"?"":t[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),t=new WebAssembly.Module(t),t=new WebAssembly.Instance(t,{e:{f:e}}).exports.f,ve.set(a,t)}return ye.set(e,a),a};if(ue=Array(4096),Sa(R,"/"),ie("/tmp"),ie("/home"),ie("/home/web_user"),(function(){ie("/dev"),At(259,{read:()=>0,write:(n,i,c,v)=>v,Ya:()=>0}),et("/dev/null",259),ya(1280,Ws),ya(1536,Hs),et("/dev/tty",1280),et("/dev/tty1",1536);var e=new Uint8Array(1024),t=0,a=()=>(t===0&&(Ea(e),t=e.byteLength),e[--t]);pe("random",a),pe("urandom",a),ie("/dev/shm"),ie("/dev/shm/tmp")})(),(function(){ie("/proc");var e=ie("/proc/self");ie("/proc/self/fd"),Sa({ab(){var t=Na(e,"fd",16895,73);return t.Ma={Ya:R.Ma.Ya},t.La={mb(a,n){a=+n;var i=Q(a);return a={parent:null,ab:{Sb:"fake"},La:{eb:()=>i.path},id:a+1},a.parent=a},Ib(){return Array.from(Me.entries()).filter(([,a])=>a).map(([a])=>a.toString())}},t}},"/proc/self/fd")})(),o.noExitRuntime&&(ze=o.noExitRuntime),o.print&&(G=o.print),o.printErr&&(Y=o.printErr),o.wasmBinary&&(be=o.wasmBinary),o.thisProgram&&(u=o.thisProgram),o.preInit)for(typeof o.preInit=="function"&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.shift()();o.stackSave=()=>lt(),o.stackRestore=e=>it(e),o.stackAlloc=e=>ge(e),o.cwrap=(e,t,a,n)=>{var i=!a||a.every(c=>c==="number"||c==="boolean");return t!=="string"&&i&&!n?o["_"+e]:(...c)=>Js(e,t,a,c)},o.addFunction=We,o.removeFunction=he,o.UTF8ToString=V,o.stringToNewUTF8=rt,o.writeArrayToMemory=(e,t)=>{B.set(e,t)};var ot,He,Pa,Ba,it,ge,lt,ct,ve,en={a:(e,t,a,n)=>xe(`Assertion failed: ${V(e)}, at: `+[t?V(t):"unknown filename",a,n?V(n):"unknown function"]),i:function(e,t){try{return e=V(e),tt(e,t),0}catch(a){if(typeof F>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},L:function(e,t,a){try{if(t=V(t),t=Le(e,t),a&-8)return-28;var n=te(t,{hb:!0}).node;return n?(e="",a&4&&(e+="r"),a&2&&(e+="w"),a&1&&(e+="x"),e&&Ae(n,e)?-2:0):-44}catch(i){if(typeof F>"u"||i.name!=="ErrnoError")throw i;return-i.Pa}},j:function(e,t){try{var a=Q(e);return Aa(a,a.node,t,!1),0}catch(n){if(typeof F>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},h:function(e){try{var t=Q(e);return Mt(t,t.node,{timestamp:Date.now(),dc:!1}),0}catch(a){if(typeof F>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},b:function(e,t,a){st=a;try{var n=Q(e);switch(t){case 0:var i=nt();if(0>i)break;for(;Me[i];)i++;return js(n,i).bb;case 1:case 2:return 0;case 3:return n.flags;case 4:return i=nt(),n.flags|=i,0;case 12:return i=nt(),le[i+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(c){if(typeof F>"u"||c.name!=="ErrnoError")throw c;return-c.Pa}},g:function(e,t){try{var a=Q(e),n=a.node,i=a.Ma.Wa;e=i?a:n,i??(i=n.La.Wa),Je(i);var c=i(e);return at(t,c)}catch(v){if(typeof F>"u"||v.name!=="ErrnoError")throw v;return-v.Pa}},H:function(e,t){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return-61;var a=Q(e);if(0>t||(a.flags&2097155)===0)throw new w(28);return Oa(a,a.node,t),0}catch(n){if(typeof F>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},G:function(e,t){try{if(t===0)return-28;var a=Re("/")+1;return t<a?-68:(oe("/",X,e,t),a)}catch(n){if(typeof F>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},K:function(e,t){try{return e=V(e),at(t,De(e,!0))}catch(a){if(typeof F>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},C:function(e,t,a){try{return t=V(t),t=Le(e,t),ie(t,a),0}catch(n){if(typeof F>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},J:function(e,t,a,n){try{t=V(t);var i=n&256;return t=Le(e,t,n&4096),at(a,i?De(t,!0):De(t))}catch(c){if(typeof F>"u"||c.name!=="ErrnoError")throw c;return-c.Pa}},x:function(e,t,a,n){st=n;try{t=V(t),t=Le(e,t);var i=n?nt():0;return Oe(t,a,i).bb}catch(c){if(typeof F>"u"||c.name!=="ErrnoError")throw c;return-c.Pa}},v:function(e,t,a,n){try{if(t=V(t),t=Le(e,t),0>=n)return-28;var i=te(t).node;if(!i)throw new w(44);if(!i.La.eb)throw new w(28);var c=i.La.eb(i),v=Math.min(n,Re(c)),k=B[a+v];return oe(c,X,a,n+1),B[a+v]=k,v}catch(D){if(typeof F>"u"||D.name!=="ErrnoError")throw D;return-D.Pa}},u:function(e){try{return e=V(e),Ra(e),0}catch(t){if(typeof F>"u"||t.name!=="ErrnoError")throw t;return-t.Pa}},f:function(e,t){try{return e=V(e),at(t,De(e))}catch(a){if(typeof F>"u"||a.name!=="ErrnoError")throw a;return-a.Pa}},r:function(e,t,a){try{if(t=V(t),t=Le(e,t),a)if(a===512)Ra(t);else return-28;else Ma(t);return 0}catch(n){if(typeof F>"u"||n.name!=="ErrnoError")throw n;return-n.Pa}},q:function(e,t,a){try{t=V(t),t=Le(e,t,!0);var n=Date.now(),i,c;if(a){var v=q[a>>2]+4294967296*x[a+4>>2],k=x[a+8>>2];k==1073741823?i=n:k==1073741822?i=null:i=1e3*v+k/1e6,a+=16,v=q[a>>2]+4294967296*x[a+4>>2],k=x[a+8>>2],k==1073741823?c=n:k==1073741822?c=null:c=1e3*v+k/1e6}else c=i=n;if((c??i)!==null){e=i;var D=te(t,{hb:!0}).node;Je(D.La.Xa)(D,{$a:e,Ua:c})}return 0}catch(A){if(typeof F>"u"||A.name!=="ErrnoError")throw A;return-A.Pa}},m:()=>xe(""),l:()=>{ze=!1,xt=0},A:function(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),x[t>>2]=e.getSeconds(),x[t+4>>2]=e.getMinutes(),x[t+8>>2]=e.getHours(),x[t+12>>2]=e.getDate(),x[t+16>>2]=e.getMonth(),x[t+20>>2]=e.getFullYear()-1900,x[t+24>>2]=e.getDay();var a=e.getFullYear();x[t+28>>2]=(a%4!==0||a%100===0&&a%400!==0?Qs:zs)[e.getMonth()]+e.getDate()-1|0,x[t+36>>2]=-(60*e.getTimezoneOffset()),a=new Date(e.getFullYear(),6,1).getTimezoneOffset();var n=new Date(e.getFullYear(),0,1).getTimezoneOffset();x[t+32>>2]=(a!=n&&e.getTimezoneOffset()==Math.min(n,a))|0},y:function(e,t,a,n,i,c,v){i=-9007199254740992>i||9007199254740992<i?NaN:Number(i);try{var k=Q(n);if((t&2)!==0&&(a&2)===0&&(k.flags&2097155)!==2)throw new w(2);if((k.flags&2097155)===1)throw new w(2);if(!k.Ma.sb)throw new w(43);if(!e)throw new w(28);var D=k.Ma.sb(k,e,i,t,a),A=D.tc;return x[c>>2]=D.Ub,q[v>>2]=A,0}catch(W){if(typeof F>"u"||W.name!=="ErrnoError")throw W;return-W.Pa}},z:function(e,t,a,n,i,c){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c);try{var v=Q(i);if(a&2){if((v.node.mode&61440)!==32768)throw new w(43);n&2||v.Ma.tb&&v.Ma.tb(v,X.slice(e,e+t),c,t,n)}}catch(k){if(typeof F>"u"||k.name!=="ErrnoError")throw k;return-k.Pa}},n:(e,t)=>{if(Fe[e]&&(clearTimeout(Fe[e].id),delete Fe[e]),!t)return 0;var a=setTimeout(()=>{delete Fe[e],Ks(()=>Ba(e,performance.now()))},t);return Fe[e]={id:a,Hc:t},0},B:(e,t,a,n)=>{var i=new Date().getFullYear(),c=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset(),q[e>>2]=60*Math.max(c,i),x[t>>2]=+(c!=i),t=v=>{var k=Math.abs(v);return`UTC${0<=v?"-":"+"}${String(Math.floor(k/60)).padStart(2,"0")}${String(k%60).padStart(2,"0")}`},e=t(c),t=t(i),i<c?(oe(e,X,a,17),oe(t,X,n,17)):(oe(e,X,n,17),oe(t,X,a,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:e=>{var t=X.length;if(e>>>=0,2147483648<e)return!1;for(var a=1;4>=a;a*=2){var n=t*(1+.2/a);n=Math.min(n,e+100663296);e:{n=(Math.min(2147483648,65536*Math.ceil(Math.max(e,n)/65536))-ct.buffer.byteLength+65535)/65536|0;try{ct.grow(n),ca();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1},E:(e,t)=>{var a=0,n=0,i;for(i of Fa()){var c=t+a;q[e+n>>2]=c,a+=oe(i,X,c,1/0)+1,n+=4}return 0},F:(e,t)=>{var a=Fa();q[e>>2]=a.length,e=0;for(var n of a)e+=Re(n)+1;return q[t>>2]=e,0},e:function(e){try{var t=Q(e);return It(t),0}catch(a){if(typeof F>"u"||a.name!=="ErrnoError")throw a;return a.Pa}},p:function(e,t){try{var a=Q(e);return B[t]=a.Va?2:J(a.mode)?3:(a.mode&61440)===40960?7:4,le[t+2>>1]=0,se[t+8>>3]=BigInt(0),se[t+16>>3]=BigInt(0),0}catch(n){if(typeof F>"u"||n.name!=="ErrnoError")throw n;return n.Pa}},w:function(e,t,a,n){try{e:{var i=Q(e);e=t;for(var c,v=t=0;v<a;v++){var k=q[e>>2],D=q[e+4>>2];e+=8;var A=xa(i,B,k,D,c);if(0>A){var W=-1;break e}if(t+=A,A<D)break;typeof c<"u"&&(c+=A)}W=t}return q[n>>2]=W,0}catch(z){if(typeof F>"u"||z.name!=="ErrnoError")throw z;return z.Pa}},D:function(e,t,a,n){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return 61;var i=Q(e);return Ia(i,t,a),se[n>>3]=BigInt(i.position),i.Eb&&t===0&&a===0&&(i.Eb=null),0}catch(c){if(typeof F>"u"||c.name!=="ErrnoError")throw c;return c.Pa}},I:function(e){try{var t=Q(e);return t.Ma?.lb?.(t)}catch(a){if(typeof F>"u"||a.name!=="ErrnoError")throw a;return a.Pa}},t:function(e,t,a,n){try{e:{var i=Q(e);e=t;for(var c,v=t=0;v<a;v++){var k=q[e>>2],D=q[e+4>>2];e+=8;var A=qa(i,B,k,D,c);if(0>A){var W=-1;break e}if(t+=A,A<D)break;typeof c<"u"&&(c+=A)}W=t}return q[n>>2]=W,0}catch(z){if(typeof F>"u"||z.name!=="ErrnoError")throw z;return z.Pa}},k:Da};function Ft(){function e(){if(o.calledRun=!0,!ke){if(!o.noFSInit&&!$a){var t,a;$a=!0,t??(t=o.stdin),a??(a=o.stdout),n??(n=o.stderr),t?pe("stdin",t):Ot("/dev/tty","/dev/stdin"),a?pe("stdout",null,a):Ot("/dev/tty","/dev/stdout"),n?pe("stderr",null,n):Ot("/dev/tty1","/dev/stderr"),Oe("/dev/stdin",0),Oe("/dev/stdout",1),Oe("/dev/stderr",1)}if(Wt.N(),Ta=!1,o.onRuntimeInitialized?.(),o.postRun)for(typeof o.postRun=="function"&&(o.postRun=[o.postRun]);o.postRun.length;){var n=o.postRun.shift();pa.push(n)}ua(pa)}}if(0<me)qe=Ft;else{if(o.preRun)for(typeof o.preRun=="function"&&(o.preRun=[o.preRun]);o.preRun.length;)qs();ua(ha),0<me?qe=Ft:o.setStatus?(o.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>o.setStatus(""),1),e()},1)):e()}}var Wt;return(async function(){function e(a){return a=Wt=a.exports,o._sqlite3_free=a.P,o._sqlite3_value_text=a.Q,o._sqlite3_prepare_v2=a.R,o._sqlite3_step=a.S,o._sqlite3_reset=a.T,o._sqlite3_exec=a.U,o._sqlite3_finalize=a.V,o._sqlite3_column_name=a.W,o._sqlite3_column_text=a.X,o._sqlite3_column_type=a.Y,o._sqlite3_errmsg=a.Z,o._sqlite3_clear_bindings=a._,o._sqlite3_value_blob=a.$,o._sqlite3_value_bytes=a.aa,o._sqlite3_value_double=a.ba,o._sqlite3_value_int=a.ca,o._sqlite3_value_type=a.da,o._sqlite3_result_blob=a.ea,o._sqlite3_result_double=a.fa,o._sqlite3_result_error=a.ga,o._sqlite3_result_int=a.ha,o._sqlite3_result_int64=a.ia,o._sqlite3_result_null=a.ja,o._sqlite3_result_text=a.ka,o._sqlite3_aggregate_context=a.la,o._sqlite3_column_count=a.ma,o._sqlite3_data_count=a.na,o._sqlite3_column_blob=a.oa,o._sqlite3_column_bytes=a.pa,o._sqlite3_column_double=a.qa,o._sqlite3_bind_blob=a.ra,o._sqlite3_bind_double=a.sa,o._sqlite3_bind_int=a.ta,o._sqlite3_bind_text=a.ua,o._sqlite3_bind_parameter_index=a.va,o._sqlite3_sql=a.wa,o._sqlite3_normalized_sql=a.xa,o._sqlite3_changes=a.ya,o._sqlite3_close_v2=a.za,o._sqlite3_create_function_v2=a.Aa,o._sqlite3_update_hook=a.Ba,o._sqlite3_open=a.Ca,ot=o._malloc=a.Da,He=o._free=a.Ea,o._RegisterExtensionFunctions=a.Fa,Pa=a.Ga,Ba=a.Ha,it=a.Ia,ge=a.Ja,lt=a.Ka,ct=a.M,ve=a.O,ca(),me--,o.monitorRunDependencies?.(me),me==0&&qe&&(a=qe,qe=null,a()),Wt}me++,o.monitorRunDependencies?.(me);var t={a:en};return o.instantiateWasm?new Promise(a=>{o.instantiateWasm(t,(n,i)=>{a(e(n))})}):(Tt??(Tt=o.locateFile?o.locateFile("sql-wasm-browser.wasm",O):O+"sql-wasm-browser.wasm"),e((await xs(t)).instance))})(),Ft(),y}),d)};s.exports=E,s.exports.default=E})(Pt)),Pt.exports}var On=An();const In=Mn(On),xn=""+new URL("sql-wasm-UFUCzYNW.wasm",import.meta.url).href,ps=`
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS app_settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS couple_info (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  groom_name TEXT, bride_name TEXT,
  wedding_date TEXT, venue TEXT, lunar_date TEXT,
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS cake_shops (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL, full_name TEXT, sub TEXT,
  area TEXT, category TEXT, intro TEXT,
  features TEXT, pros TEXT, cons TEXT,
  hours TEXT, packaging TEXT,
  promo_plan TEXT, promo_limited TEXT, booking TEXT, tasting TEXT,
  review TEXT, latest_plan TEXT,
  address TEXT, phone TEXT, map_url TEXT,
  price TEXT, price_detail TEXT,
  rating REAL, rating_text TEXT,
  status TEXT DEFAULT '觀望' CHECK (status IN ('首選','候選','觀望')),
  tried INTEGER DEFAULT 0,
  shortlist_rank INTEGER,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS cake_shop_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  shop_id INTEGER NOT NULL REFERENCES cake_shops(id) ON DELETE CASCADE,
  name TEXT NOT NULL, price TEXT, sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS cake_shop_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  shop_id INTEGER NOT NULL REFERENCES cake_shops(id) ON DELETE CASCADE,
  path TEXT NOT NULL, caption TEXT, sort_order INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS schedule_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  phase TEXT, phase_en TEXT, time TEXT, title TEXT NOT NULL,
  role TEXT, description TEXT,
  enabled INTEGER DEFAULT 1, done INTEGER DEFAULT 0,
  reminder_minutes INTEGER, sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS checklist_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  module TEXT NOT NULL CHECK (module IN ('ceremony','photo')),
  tab TEXT, group_name TEXT, title TEXT NOT NULL,
  note TEXT, tag TEXT, role TEXT,
  done INTEGER DEFAULT 0, due_date TEXT, reminder_days INTEGER,
  is_custom INTEGER DEFAULT 0, sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL, module TEXT, due_date TEXT,
  done INTEGER DEFAULT 0, sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now'))
);

-- 現場人員配置：迎娶／婚宴當天各角色的負責人
CREATE TABLE IF NOT EXISTS staff_roles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  stage TEXT DEFAULT '全程' CHECK (stage IN ('迎娶','婚宴','全程')),
  category TEXT, title TEXT NOT NULL,
  side TEXT DEFAULT '共同' CHECK (side IN ('男方','女方','共同')),
  headcount INTEGER DEFAULT 1,
  assignee TEXT, phone TEXT, duties TEXT, note TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_items_shop ON cake_shop_items(shop_id);
CREATE INDEX IF NOT EXISTS idx_images_shop ON cake_shop_images(shop_id);
CREATE INDEX IF NOT EXISTS idx_checklist_mod ON checklist_items(module, tab);
CREATE INDEX IF NOT EXISTS idx_schedule_phase ON schedule_events(phase, sort_order);
CREATE INDEX IF NOT EXISTS idx_shops_status ON cake_shops(status, shortlist_rank);
`,qn=`
INSERT INTO couple_info (id, groom_name, bride_name, wedding_date, venue, lunar_date)
VALUES (1, '陳俊翰', '林詩涵', '2026-09-20', '台中林皇宮', '農曆八月初十');

INSERT INTO app_settings (key, value) VALUES
  ('pref.theme_color', 'accent'),
  ('pref.language', 'zh-Hant'),
  ('pref.show_lunar', '1'),
  ('pref.dark_mode', 'auto'),
  ('notify.due_reminder', '1'),
  ('notify.daily_summary', '0'),
  ('notify.daily_time', '09:00'),
  ('ceremony.hide_completed', '0'),
  ('ceremony.show_notes', '1'),
  ('ceremony.group_by_category', '1'),
  ('photo.hide_completed', '0'),
  ('schedule.show_disabled', '1'),
  ('schedule.show_lunar_time', '1');

-- 喜餅店家：整理自原始靜態頁 wedding_cake_spa.html 的真實 11 家台中喜餅店（含 2025+ 網路口碑）
INSERT INTO cake_shops
  (name, full_name, sub, area, category, features, pros, cons, hours, packaging, promo_plan, promo_limited, booking, tasting, review, latest_plan, address, phone, map_url, price, price_detail, rating, rating_text, sort_order)
VALUES
  ('黑色棒棒糖－手工喜餅',
   '黑色棒棒糖菓子小舖（Black Lollipop）',
   '採預約制 ｜ 約 NT$380–1,070',
   '台中 · 中區', '台式',
   '「黑色＝巧克力、棒棒糖＝糖果」發想，手繪愛麗絲童話風；約 27 種手工餅乾（楓糖胡桃、辣味起司、英式伯爵等）＋手工糖果、蛋糕。招牌鹹口味「辣味起司」，不甜膩、刷嘴型。',
   '鐵盒可愛有質感、中西融合、份量足、口味多元、CP 值高、環保包裝',
   '款式口味眾多難抉擇；部分小鐵盒無鹹口味',
   '約 10:00–17:00（週日公休）；另有來源列 09:30–18:00 ⚠資料待確認',
   '手繪愛麗絲童話風，盒型多元（小鐵盒、紙盒、珍藏雙層、木盒）。花嫁系列為中式喜氣風（龍袍兔子、牡丹、紅燈籠＋大紅提袋），雙層可分放口味或預留放中式大餅',
   '依盒數分級距折扣（約 50／100／150／200 盒以上）；花嫁系列滿 50 盒加贈蝴蝶酥禮盒，最多送 3 盒。級距金額需洽門市 DM',
   '曾推花嫁雙層 A 款 NT$1,050→特價 NT$800（檔期標示「至 7/31」、未註明年份），屬過往檔期、非常態優惠（查詢日 2026/06/28，請以官方 LINE 最新公告為準）⚠檔期年份待確認',
   '線上預約 blacklollipop.booknow.com.tw ｜ 電話 04-2225-2357、0923-130-799 ｜ FB 私訊 ｜ LINE lin.ee/ntHeDoC（每組約 90 分鐘，每時段限 2 組）',
   '門市試吃免費、份量大方（約 30 種餅乾＋3 款糖果＋1 款蛋糕）；宅配試吃約 NT$200（含運）',
   'WeddingDay 4.7★（12 位新娘）正評為主。2025 新娘讚門市烘焙香氣濃、店員親切、免費試吃大方無推銷（Rainey 2025/11、芯羽 2025/05）；出貨快、口味多元有鹹味款。負評多為 2024 前：片數多易膩、部分偏甜。2025 仍入選台中喜餅 TOP 榜。',
   '門市試吃免費：約 30 款餅乾＋3 糖＋1 蛋糕，90 分鐘／組、每時段限 2 組；宅配試吃約 NT$470。盒數免運：單價 250 元以上禮盒滿 20／50／100 盒享 1／2／3 次免運；花嫁滿 50 盒贈蝴蝶酥、滿 100 盒贈 2 盒。官網現多為折扣價（花樣年華 520→380），新增「紅韵」款。建議婚期前約 45 天下訂。',
   '台中市中區綠川西街 97 號 1 樓', '04-2225-2357',
   'https://www.google.com/maps/place/?q=place_id:ChIJ0W5xjhM9aTQRK36RZb-eLdA',
   '約 NT$380–1,070',
   '多數 NT$380–850／盒，木盒款最高約 NT$1,070。入門款花樣年華 NT$380、經典愛麗絲鐵盒 NT$540–650、花嫁雙層 NT$910–960',
   4.7, 'WeddingDay 4.7★', 1),

  ('Candy Wedding',
   'Candy Wedding（法式手工喜餅 / 彌月 / 禮盒）',
   '法式手工喜餅 ｜ 約 NT$740–1,380',
   '台中 · 西屯區', '法式',
   '法式手工喜餅、優雅歐風禮盒；嚴選天然食材、低油少糖。招牌可客製翻糖餅乾（放新人英文縮寫）、抽屜式禮盒、可搭詩籤紅心卡；甜點約 11 款',
   '禮盒精緻優雅、客製化用心（緞帶／翻糖／卡片／音樂）、獨立試吃區、天然少添加',
   '無專屬停車位；客製＋精緻包裝使單價中高',
   '週二至週日 12:00–20:00，週一公休（試吃採預約制）',
   '抽屜式（免解繫帶即開）；四大主題「典藏愛戀／綺麗花園／雋永時刻／閃耀時光」（官網共六款），法式優雅少女系（含 Tiffany 藍）；訂製色緞帶不另收費',
   '最低 15 盒。滿 30 盒 9 折＋免運1次；滿 50 盒 88 折＋免運2次；滿 100 盒 88 折＋免運3次；滿 150 盒 86 折；滿 200 盒 85 折。線上「任選 2 件免運」',
   '官網「喜餅試吃限時免費」為輪替檔期、會變動（2025–2026 年間多次出現，如官網曾標 6/20 前免費；查詢日 2026/06/28，請確認當期截止日）⚠非長期優惠',
   '官網線上預約 ｜ LINE @candywedding ｜ 電話 04-3601-1799 ｜ IG @candy_wedding ｜ FB',
   '門市約 NT$180／人（上限 3 人，60–90 分鐘），檔期可能免費；宅配試吃運費約 NT$170 並享喜餅 8 折；彌月憑媽媽手冊／出生證明約 75 折',
   '正評為主，被評為「最有儀式感」門市（音樂選曲卡、私人試吃房、玫瑰金提袋）。口味少油減糖不甜膩（鹽之花巧克力、伯爵沙布列、日出布列塔尼受好評）；包裝法式優雅雙色燙金、可客製英文翻糖餅乾與香草詩籤。缺點：單盒最多 18 入、不利大量分送，屬偏高價。（Dcard 2025–2026、大花說 2025/01、水晶安蹄 2025/10）',
   '限時免費試吃檔期（官網曾標 6/20 前免費）；常態門市試吃 NT$180／人（上限 3 人）或宅配（運費約 NT$170 含折扣），固定 11 款＋自選 2 款。滿額折扣：1.3 萬 95 折、2 萬 92 折、3 萬 9 折、5 萬 87 折、7 萬 85 折；滿 50 盒贈客製婚卡，半年內可分批追加同享優惠。',
   '台中市西屯區市政南一路 108 號 1 樓（原大容西街已遷址）', '04-3601-1799',
   'https://www.google.com/maps/place/?q=place_id:ChIJwT_y6pM9aTQRezTdddRGa6Q',
   '約 NT$740–1,380',
   '約 NT$740–1,380／盒（M 約 12–13 入、L 約 17–18 入）',
   NULL, 'Dcard 正評為主', 2),

  ('OOH LA LOVE 頂級法式手工喜餅',
   'OOH LA LOVE 頂級法式手工喜餅（Future Hotel．未來飯店概念店）',
   '未來飯店 ｜ 約 NT$758–1,988',
   '台中 · 西屯區', '法式',
   '法式手工喜餅，宮廷風＋未來感精品路線，約 28 款餅乾糕點自由搭配。招牌：布列塔尼鹽之花酥餅、Chocolate Coco、抹茶鹽之花磅蛋糕、玫瑰馬卡龍',
   '喜餅盒華麗、現代＋宮廷奢華感、評價高（約 4.9）、五感體驗空間、折扣大方',
   '精品定價偏高；試吃付費；試吃僅選約 10 款（門市）／5 款（宅配）',
   '週二至週五 13:00–20:30；週六日 12:30–20:00；週一公休',
   '多系列風格（甜美浪漫／經典復古／宮廷奢華／時髦俏皮／未來式），宮廷系列紅金配色低調奢華；可選無綁帶或加購綁帶',
   '滿 20 盒 95 折、30 盒 88 折、60 盒 86 折、100 盒 84 折；另有滿額折抵（滿 5 萬折 1,200、滿 7 萬折 2,200…）；滿 50 盒贈客製婚卡＋免運1次 ⚠贈品細節待確認',
   '早鳥「一週內下訂逾 30 盒折 1,500 元」此數字源自 2021 年舊文、恐已異動；2025–2026 官網檔期多為節慶／企業大宗（2026 新年禮盒等），新人早鳥折扣需洽詢（查詢日 2026/06/28）⚠舊資料勿直接套用',
   '採預約制。電話 04-2251-0520 ｜ 官網線上表單 oohlalove.com.tw ｜ IG／FB 私訊',
   '非免費。門市 NT$280（約 10 款＋茶飲）；宅配 NT$300（含運，約 5 款）。能否折抵訂單 ⚠待確認',
   'WeddingDay 4.9★（約 304 則）正評壓倒性。服務最受讚（飯店 check-in 概念、刻姓氏鑰匙、不推銷）；口味甜度偏低不死甜（布列塔尼鹽之花、磅蛋糕、達克瓦茲）；包裝宮廷法式復古有高級感。少數負評：部分喜餅背面無成分標示、宅配試吃盒配色偏暗缺驚喜。（Dcard 2025–2026、大花說 2025/01）',
   '門市試吃 NT$280／組（2–4 人、10 款）。盒數折扣：20 盒 95 折、30 盒 88 折、60 盒 86 折、100 盒 84 折；免運滿 50／80／100 盒寄 1／2／3 地址。禮盒約 NT$758–1,988。2025–2026 檔期多為節慶／企業大宗（2026 新年禮盒等），新人早鳥折扣需洽詢；流傳的「折 1,500」為 2021 舊資訊勿直接套用。',
   '台中市西屯區市政北二路 55 號（七期、國家歌劇院一帶）', '04-2251-0520',
   'https://www.google.com/maps/place/?q=place_id:ChIJyVjSsD09aTQR8M9cQr1ymak',
   '約 NT$758–1,988',
   '約 NT$758–1,988／盒',
   4.9, 'WeddingDay 4.9★', 3),

  ('CUPETIT 卡柏蒂精品甜點',
   'CUPETIT 卡柏蒂精品甜點 — 台中南屯概念店（Vision Lounge）',
   '南屯概念店 ｜ 約 NT$588–1,288',
   '台中 · 南屯區', '法式',
   '法式輕奢精品，主打「香水概念」喜餅（前中後調），首創「柏金提袋」造型禮盒。招牌：布列塔尼酥餅、檸檬奶香脆棒、帕瑪森乾酪餅、磅蛋糕、馬卡龍，逾 27–38 款自由搭配',
   '餅乾不死甜、香氣足，長輩接受度高；磅蛋糕濕潤；包裝精緻體面；門市如精品店尊榮無壓',
   '偏「包裝取勝」、口味因人而異；少數服務落差；單價偏高靠折扣',
   '每日 12:30–20:00（公休以官網／社群為準）',
   '燙金華麗、提袋式盒型。主力「時光花園」致敬 Met Gala 2024，花卉燙金主題；另有高訂禮盒、主廚精選、C.P.T 藝術喜餅。門市純白＋金色法式風',
   '有依盒數遞增之量大優惠，惟官網未公開明確級距 ⚠資料待確認',
   '查詢時未見公開固定限時檔期（資料查詢日 2026/06/28，依官網／LINE 當期公告為準）⚠資料待確認',
   '線上預約 cupetit.com/products/tasting ｜ LINE @cupetit ｜ 電話 02-5578-7668 ｜ IG @cupetit ｜ Email service@cupetit.com',
   '門市 NT$250／至多 4 人（約 90 分鐘，自選 10 道）；婚期 6 個月內準新人可免費（須出示伴侶證明）；另有宅配試吃',
   '正評為主。口味減油減糖不甜膩（常溫馬卡龍改良、森半抹茶、草莓牛軋糖）；「鉑金提袋」包裝一致好評、送禮體面；服務 90 分沉浸式導覽親切無推銷。CP 值靠盒數折扣後約 600 元／盒、份量足。口味少數兩極（蛋白霜餅乾硬等負評多為 2021–2024 舊文）。（Listen to LU 2025/07、WeddingDay 2025/01、小米食 2025/06）',
   '門市試吃 NT$250／至多 4 人（27 道自選 10 道、90 分），半年內新人憑結婚證明可全額折抵；另有 6–7 月指定場免費檔期。宅配試吃每人限 2 盒。盒數折扣：30 盒 96 折、50 盒 93 折、80 盒 9 折、100 盒 87 折、150 盒 85 折，每單最多選 2 款，主廚精選須 2026/12/31 前出貨。禮盒例：珍藏時光 NT$928、花與呢喃 NT$1,008。',
   '408 台中市南屯區永春東路 728 號', '02-5578-7668',
   'https://www.google.com/maps/place/?q=place_id:ChIJqeN41v8_aTQR0vDgRkPNMUU',
   '約 NT$588–1,288',
   '約 NT$588–1,288／盒；例：時光花園「巴黎玫瑰」12 入約 NT$806',
   NULL, '正評為主', 4),

  ('BabyFace 手工烘焙',
   'Babyface 手工烘焙（Babyface Bakery）',
   '法式喜餅／彌月 ｜ 約 NT$398–1,288',
   '台中 · 西區', '法式',
   '法式手工喜餅／彌月，無防腐劑香精、減糖、純天然、每款獨立包裝，約 25–30 款自由搭配。招牌「經典永恆系列」（可選搭珍珠泡芙、紅玉茶包、掛耳咖啡）',
   '不甜膩有層次、包裝低調燙金、服務細緻、Google 約 4.9 星逾千則、無添加安心',
   '預約制需提前 1–2 週；試吃多付費；非開放式空間',
   '官網 11:00–19:00（每日）；部分部落格記週一公休、週二至日 12:30–19:00 ⚠資料待確認',
   '歐風復古典雅，外盒多色（粉／白／復古藍）嵌入式燙金；緞帶可選色；提袋象牙白、璀璨金',
   '滿 20／50／100／150／200 盒各有折扣與免運；滿 100 盒以上加贈專屬婚卡',
   '彌月／中秋等節慶檔期；2026/04 台中婚展曾推展場限定彌月禮盒優惠，未見常態限時折扣（查詢日 2026/06/28）⚠檔期性質、會變動',
   '電話 04-2372-7067、0975-217018 ｜ 官網表單 ｜ LINE @babyfacebakery ｜ IG @babyfacebakery ｜ FB',
   '付費宅配試吃：喜餅鑑賞盒 NT$250、彌月鑑賞盒 NT$200、磅蛋糕 NT$240、經典永恆禮盒 NT$400；門市 9 款試吃約 NT$200。另有付訂金折抵方案 ⚠細節待確認',
   '偏正評。口味減糖不甜膩有層次（推法式巧蘭奇燕麥、百香果覆盆子）；服務無壓不硬推、Google 約 4.9★逾千則。包裝兩極：正評低調燙金，有人嫌紙盒偏薄。中價位小資可入手。重大負評：Dcard 有「洩漏客戶個資」排雷文（2025/05 曾調解）。（eVa Blog 2025/02、moni moni 2025/10、Dcard 2025）',
   '官方 2025/12 公告：喜餅試吃鑑賞盒 NT$250 可折抵下訂訂金、每人限一次；門市付 NT$2,000 訂金可免費試吃 9 款（二次酌收 200 元），或官網 NT$200 全品項試吃組合贈折扣碼。盒數折扣滿 20／50／100／150／200 盒享免運與折扣、滿 100 盒贈婚卡。價格曾微調（經典永恆 L 658→758）。2026/03 門市搬遷新址、4 月婚展限定優惠。',
   '台中市西區精誠二十二街 38 號（官網現址；部分部落格仍記舊址自由路一段 40-15 號）⚠建議再確認', '04-2372-7067',
   'https://www.google.com/maps/place/?q=place_id:ChIJDcyiNZg9aTQR2Ygs3M0lP-A',
   '約 NT$398–1,288',
   '經典永恆 S NT$398（7 入）、L NT$658–758（13 入）、永恆紀念 NT$1,088、復刻情懷 NT$1,288，整體 NT$398–1,288／盒',
   4.9, 'Google 4.9★', 5),

  ('Bloom 花神精品法式喜餅',
   'Bloom 花神精品法式喜餅（Bloom wedding）',
   '線上＋預約門市 ｜ 約 NT$480–925',
   '台中 · 西區', '法式',
   '以「花香、水果香甜」為主調，結合茶飲、巧克力、堅果、醇酒的大人味法式甜點。招牌：梅酒鐵觀音磅蛋糕、達克瓦茲、蜂蜜杏仁布列塔尼。輕奢花草系',
   '不過甜長輩接受度高、風味創新有記憶點、盒裝提袋質感高、IG 爆紅、門市體驗如貴婦下午茶',
   '精品定位單價偏高；門市無現貨需提前預約；宅配試吃固定 18 入不可調整',
   '週一公休，週二至週日 11:00–18:00（官網）；部分部落格記 11:00–19:00 ⚠資料待確認',
   '多主題：經典老花、暗紅花綻放（長輩取向）、綻紅寶石、邱比特之羽；12 入長方、16/18 入正方可客製，搭奢華金色提袋',
   '部分為超值組合價；提供新人證明享試吃優惠價。「女孩分享專案」完成 3 平台分享文贈 30 份花圈馬林糖',
   '季節檔期禮盒（2025/08 文章提及 2026 中秋「月映橘利」），內容依檔期變動（查詢日 2026/06/28，建議洽 LINE 確認當月活動）⚠檔期性質、會變動',
   'LINE @bloomcookie（主要）｜ 官網 bloomweddingcookie.com ｜ IG @bloom_weddingcookies ｜ FB ｜ Email ｜ 門市電話 04-2376-4598 ⚠建議去電前確認',
   '宅配：PREMIUM 18 入約 NT$680（含運）、SAMPLE 5 入 NT$300（含運）；門市現場約 NT$300 可嚐約 12 款（須出示新人證明）',
   '偏正評，定位「喜餅界愛馬仕」高奢時尚，WeddingDay 4.9★。包裝近乎一致好評（大紅金箔繁花、邱比特之羽羽毛盒）；口味鮮明（桂花烏龍達克瓦茲常列 Top1、薰衣草、泰式奶茶、海鹽開心果）；服務如貴婦下午茶。負評：馬林糖偏普通、磅蛋糕不夠紮實、長輩覺偏甜；現金付款、門市無現貨需線上訂、內容物不可指定。（小米食 2025/08、weddings.tw 2025/07、白宮婚紗 2026/05）',
   '採預約制（LINE @bloomcookie），現場試吃約 12–13 款、60–90 分。費用：初次優惠價、二訪 NT$980（另有舊資料現場 NT$300／宅配 NT$680）；試吃後現場下訂贈 1 盒 18 入禮盒。禮盒：璀璨花蹤 NT$867–1,035、綻紅寶石 NT$758–1,035。折扣：20 盒起訂，滿 2 萬 9 折、4.5 萬 88 折、8 萬 85 折；距出貨逾 3 個月加碼 2% 早鳥；40 盒以上免運。',
   '原以線上服務為主，現有門市可預約：台中市西區五權西路一段 223 號 ⚠建議再確認', '04-2376-4598',
   'https://www.google.com/maps/place/?q=place_id:ChIJTQa_u949aTQRL8iFXiPIEHI',
   '約 NT$480–925',
   '喜餅單盒約 NT$758–925（浪漫之星 12 入 758 起、熱戀紅鑽 16 入 925）；入門／節慶款 NT$480–720；豪華組合可達數千至上萬',
   4.9, 'WeddingDay 4.9★', 6),

  ('chochoco 巧克力專賣店 法式手工喜餅',
   'chochoco 巧克力專賣店（美術店）／Chochoco Wedding 法式手工喜餅',
   '美術店 ｜ 約 NT$728–858',
   '台中 · 西區', '法式',
   '台中經營逾 10 年巧克力名店跨足法式喜餅，融合法式＋中式元素，禮盒可自由挑選。招牌：黑芝麻白巧克力馬卡龍、70% 比利時巧克力布朗尼、法式皇家禮餅、玫瑰柑橘蛋糕',
   '愛食記約 4.8、口味多元巧克力突出、空間雅緻寬敞、服務解說詳盡、近國美館停車方便',
   '部分人覺甜度偏高、奶油味重；盒型組合受規格限制；當日下訂優惠截止嚴格',
   '每日 11:00–20:00（部分平台顯示 10:00–21:00，門市試吃採預約制）⚠建議再確認',
   '時刻系列溫暖大地色系（清晨／日落橙／夜間柔粉），可加選雙色緞帶；另有誓言系列、秘境系列等主題',
   '最低 15 盒。滿 20 盒 95 折；30 盒 92 折；50 盒 92 折再每盒折 $10；100 盒 92 折再折 $20；150 盒折 $30；200 盒折 $40。滿 30/60/90 盒分別免運寄 1/2/3 地址；滿 50 盒享客製婚卡',
   '試吃當日下訂享加碼優惠（須當天午夜前確認），出自 2025 年婚展試吃資料；其他季節檔期需洽門市（查詢日 2026/06/28）⚠檔期性質、會變動',
   '官網線上預約試吃單 ｜ 美術店電話 04-2375-4848 ｜ 宅配訂購專線 04-2358-8897（09:30–18:00）｜ Email chocolate@chochoco.com ｜ IG @chochoco.tw',
   '門市 NT$180（10 款點心＋茶飲，預約制）；宅配 NT$220（5 款，含運）；整盒試吃為原價＋運費',
   '偏正評，口味是賣點（試吃多 8.5–9／10）。招牌布列塔尼鹽之花、70% 巧克力布朗尼、玫瑰柑橘蛋糕、黑芝麻白巧克力馬卡龍，巧克力本業強項穩定。負評主要在甜度——有人「喝茶沖不掉甜味」、部分靠奶油撐。包裝公認亮點（2025 新款霧面香檳金提袋）；服務一對一約 60 分受好評；CP 值中上輕奢系。（listentolu 2025/08、新娘物語 2025/05、Dcard 2025）',
   '線上預約、專員一對一約 60 分；試吃費 NT$220、下訂可全額折抵（美術店曾 180 元、現 220），約 10 款＋茶飲。最低 15 盒。盒數折扣：20 盒 95 折、30 盒 92 折、50 盒 92 折再折 $10／盒、100／150／200 盒再折 $20／$30／$40；滿 30／60 盒免運寄 1／2 地址、免費不限次分批取貨。2025 新盒型（秘境／時刻）14–16 入約 NT$750–880；門市當日下訂常有加碼。',
   '台中市西區五權西路一段 122 號（國美館旁）', '04-2375-4848',
   'https://www.google.com/maps/place/?q=place_id:ChIJx6d7r6Y9aTQRqD0GCQJX-54',
   '約 NT$728–858',
   '時刻系列：親吻時刻 NT$728、牽手時刻 798、擁抱時刻 858；彌月／伴手禮約 NT$458–788',
   NULL, '試吃 8.5–9/10', 7),

  ('moricaca 森果香',
   'moricaca 森果香（手工日式／日法洋菓子喜餅專賣）',
   '日法洋菓子 ｜ 約 NT$400–900',
   '台中 · 南屯區', '日系',
   '少油少糖純手工、甜而不膩，融合日式燒菓子與法式洋菓子，素食友善；近 40 款可一盒一盒自由客製。招牌：草莓泡泡、百香果棉花糖、焦糖卡貝茲、玄米玉露、抹茶栗子金磚',
   '環境優美、可單盒客製、品項多樣、價格相對親民、口味清爽、門市可享下午茶',
   '需自行挑組合較花時間、選擇多易猶豫；假日試吃需付費',
   '官網週一至週日 11:00–19:30（部分部落格記 11:30–20:00）⚠建議再確認',
   '約 10 款外盒，日系清新質感；可加購緞帶（約 $15/盒）、喜字貼紙（約 $10/盒）客製',
   '滿 $20,000 享 95 折（一個月內下訂 92 折）；滿 $40,000 享 9 折（→88 折）；滿 $80,000 享 88 折（→85 折）。每滿 $20,000 享一筆免運；滿 $50,000 加贈客製婚禮小卡',
   '官網 2026/06 現行檔期：6 月平日來店免費試吃、當天下訂享優惠——屬該月限定、非常態，7 月起可能變動（查詢日 2026/06/28，以官網當期公告為準）⚠最新檔期待確認',
   '官網 moricaca.com ｜ Google 表單線上預約 ｜ 電話 04-2255-5766 ｜ Email service@moricaca.com ｜ FB「moricaca 森果香 sweets house」',
   '門市平日多為免費（檔期）；一般 2 人 $200／3 人 $250／4 人 $300（約 12 款＋茶飲，不接受三天內預約）。宅配 9 入試吃盒 $200（含運約 $360）、椿花試吃盒 $499（含運約 $659）；DIY 自組 85 折',
   '正評明顯居多，「不會太甜、種類豐富」是共識。WeddingDay 4.9★（DAN 2025/11）、2026/04 獲列「台中伴手禮常勝軍」。Dcard 多篇「幾乎不踩雷」（覆盆子達克瓦茲、百香果棉花糖、焙茶金磚）；包裝日系優雅耐看、服務無推銷壓力。缺點主要是門市停車不便。（WeddingDay 2025–2026、Dcard、verywed 2025/04）',
   '官網現行檔期（2026/06）平日來店免費試吃 10 款、當天下訂享優惠；常態門市品鑑約 NT$250／2 位（約 15 款、60 分）。金額折扣：滿 2 萬 95 折（品鑑後一個月內 92 折）、4 萬 9 折（→88 折）、8 萬 88 折（→85 折），滿額贈婚卡＋免運。30 盒整批約 85 折（微笑森林 10 入 30 盒 $20,700→$17,595）。彌月宅配滿 $888 免運、春日新品 9 折。',
   '台中市南屯區大墩十一街 642 號（河南路四段、全家旁）', '04-2255-5766',
   'https://www.google.com/maps/place/?q=place_id:ChIJw3O01pk9aTQReAPbylRU9qk',
   '約 NT$400–900',
   '組合禮盒單盒約 NT$400–900；單品燒菓子約 NT$35–75（草莓泡泡 $35、焦糖卡貝茲 $75）',
   4.9, 'WeddingDay 4.9★', 8),

  ('山木島 Shānmù 昇平概念店',
   '山木島 Shānmù（手工喜餅／彌月餅乾品牌）— 台中昇平概念店',
   '台灣味法式喜餅 ｜ 約 NT$580–980',
   '台中 · 西區', '台式',
   '以「把台灣揉進麵粉裡」為理念，結合在地食材（艾草、仙草、紫蘇梅、珍奶、東方美人茶等）與西式烘焙。約 36 款西式喜餅＋14 款中式大餅。招牌：森林酥、台灣茶詩蛋糕、珍珠奶茶磅蛋糕、紫蘇梅／仙草餅乾',
   '口味創新有台灣特色、減糖少油；茶詩蛋糕與珍奶磅蛋糕受好評；包裝精緻有質感；試吃像下午茶、介紹詳細無壓力',
   '部分口味特殊、評價兩極（仙草、紅豆艾草粿、花見餅乾）；最低 20 盒起訂、起訂門檻偏高',
   '11:00–19:00；公休日標示不一（官網週一公休／WeddingDay 全週營業）⚠建議去電 04-2301-7961 確認',
   '溫潤高級美學。系列含「成家·台灣新人喜餅」紅色雙層（緞帶提把＋圓形「木」字烙印）、「戀戀台味」、「台味餅乾」彩色方盒。盒型：中西雙層、雙層、單層、長禮盒、玫瑰單層、精裝盒',
   '最低 20 盒。WeddingDay 2026 現行：滿 2 萬 88 折／4.5 萬 86 折／8 萬 83 折；免運滿 40／70／90 盒寄 1／2／3 地址；距首批出貨 3／6／9 個月以上享早鳥折扣',
   '折扣碼「WDCK2026」現折 100 元（WeddingDay 2026/06 現行檔期）；中秋早鳥 8/8 前 8 折、9/5 前 85 折（網路文章提及月日、未明示年份、每年滾動）（查詢日 2026/06/28，以店家公告為準）⚠檔期年份待確認',
   'FB 粉專私訊申請試吃 ｜ 電話 04-2301-7961 ｜ 官網 shanmudao.com.tw 預約試吃頁 ｜ IG ｜ LINE ｜ Email shanmudao@gmail.com',
   '門市試吃平日免費、假日 NT$300（約 21–22 款，可折抵訂購）；宅配試吃運費 NT$180；鑑賞盒約 320–500 元',
   'WeddingDay 4.9★（約 2,157 位新娘）正評為主。現場約 21–22 款以「茶」為基底受好評（珍奶磅蛋糕、鉑金水蜜桃蛋糕、洛神火龍果森林酥約 8.5–9 分）；紅色禮盒喜氣有質感、茶詩蛋糕獨立小包裝衛生；試吃像下午茶無壓力。負評：部分口味特殊、兩極（仙草、紅豆艾草粿、花見）；20 盒以上才可客製。（WeddingDay 2025/01、Dcard 2025）',
   '門市試吃平日免費／假日 NT$300、宅配運費 NT$180，試吃費可折抵（WeddingDay 2026 現行）；折扣碼 WDCK2026 折 100 元（2026/06）；盒數折扣滿 2 萬 88 折／4.5 萬 86 折／8 萬 83 折，免運滿 40／70／90 盒寄 1／2／3 地址；中秋早鳥 8/8 前 8 折、9/5 前 85 折（年份待確認）',
   '台中市西區昇平街 49 號（近審計新村、勤美誠品；台北另有大安旗艦店）', '04-2301-7961',
   'https://www.google.com/maps/search/?api=1&query=山木島昇平概念店',
   '約 NT$580–980',
   '約 NT$580–980／盒。經典單層 580–720、質感長型 680–980、雙層禮盒 780–980、中西雙層 860',
   4.9, 'WeddingDay 4.9★', 9),

  ('伊莎貝爾 ISABELLE 台中三民店',
   '伊莎貝爾 ISABELLE 台中三民店（台灣知名連鎖法式喜餅）',
   '連鎖法式喜餅 ｜ 價位待確認',
   '台中 · 中區', '法式',
   '主打法式喜餅，並有中式大餅、西式餅乾、彌月蛋糕可組中西式禮盒。招牌經典 2mm 薄餅（起士戀人、巧克戀人）；另有布雪系列、AIR 薄餅鐵盒；常推聯名（馬來貘來貘、法國 ELLE）',
   '餅乾口味多樣、甜度適中不膩；招牌薄餅香濃酥脆；外盒精緻大方喜氣；店員介紹詳細無強迫；門市寬敞有試吃座位；優惠檔期多',
   '部分人覺除招牌薄餅／貓舌夾心外其他餅乾較普通；口味偏傳統、少數有香精味、糕點稍偏油；假日不受理線上試吃預約',
   '11:00–21:00（2021 舊文記 10:30–21:00）⚠以門市公告為準',
   '系列：提盒、三層禮盒、AIR 薄餅鐵盒、ISABELLE×ELLE 聯名、來貘聯名。30 週年「珍珠禮盒」寧靜藍＋珍珠；小香風毛呢粉色禮盒；聯名款簡約時尚、鐵罐可收納',
   '「滿 10 送 1」盒數優惠；會員專屬優惠券、生日禮。完整金額／盒數折扣級距 ⚠資料待確認（官網未公開）',
   '官方商城常設新品優惠／波段促銷，價格依檔期變動（官方商城 2025–2026 現行頁面提及，未列明確數字）；來貘為限量聯名（2021/04 文章）（查詢日 2026/06/28）⚠檔期數字待確認',
   '官網線上預約品鑑（需 3 天前、不含假日，Email 確認後門市聯繫）｜ 門市電話 04-2221-4366 ｜ 客服 04-2567-1258（09:00–17:00）｜ 門市現場',
   '門市試吃免費（當日內用糕餅＋茶飲，約 10 分鐘品鑑）；外帶試吃盒須購「享品味·小點心盒」NT$198；宅配品鑑（市區週一至六配送，滿 $8,000 免運），宅配試吃盒費用與折抵 ⚠待確認',
   'WeddingDay 4.9★（37 位新娘，含 2025–2026）正評為主。餅乾口味多樣、甜度適中不膩；招牌薄餅香濃酥脆、層次豐富；外盒精緻有質感適合送禮；店員親切無強迫。2mm 薄餅 2025 獲台灣百大糕點金質獎與 iTQi 認證。中立／負評集中「非招牌品項較普通、口味偏傳統」。（WeddingDay 2026/05–06、評測文）',
   '門市試吃免費（內用）、外帶試吃盒 NT$198（現行）；盒數「滿 10 送 1」＋新品優惠（2025/05、2024/10、2026 評論仍提）；2026 中西式喜餅禮盒為官方商城主打；確切折抵／檔期數字官網未列 ⚠待確認',
   '台中市中區三民路二段 29-1 號（近台中火車站、一中街、中華路夜市）', '04-2221-4366',
   'https://www.google.com/maps/search/?api=1&query=伊莎貝爾台中三民店',
   '單盒約數百元（待確認）',
   '試吃外帶盒「享品味·小點心盒」NT$198；來貘聯名布雪 2 入 80／5 入 199、薄餅夾心禮盒 399；正式喜餅大禮盒單盒價 ⚠資料待確認（檔期變動大，建議門市洽詢）',
   4.9, 'WeddingDay 4.9★', 10),

  ('Hera 赫拉頂級喜餅',
   'Hera 赫拉頂級喜餅（Hera Wedding Cookies）',
   '法式手工餅乾 ｜ 約 NT$620–1,266',
   '台中 · 西屯區', '法式',
   '以希臘神話愛情為主題的頂級手工餅乾，主打「酸甜苦辣鹹」多層次，甜鹹辣齊全；用法國 AOP 奶油、日本麵粉、義大利杏仁粉。招牌「婚禮的祝福·馬鬱蘭法式夾心薄餅」（每盒必放、鹹甜帶起司）；人氣伯爵檸檬、巴薩米克草莓、辣蔥杏仁、提拉米蘇達克瓦茲',
   '口味有層次不死甜、鹹辣特殊款多、選擇豐富；禮盒提袋質感華麗有設計感（金色提袋受讚）；門市挑高獨棟落地窗、有 VIP 包廂、環境舒適；專員親切耐心；原料等級高、有減糖款',
   '部分人反映盒材偏薄軟、份量感弱；試吃餅乾整塊未切需手撥較不便；少數辣味款辣度較強非人人接受',
   '10:30–18:30，每月不定期店休（官網；部落格記 11:00–19:00）⚠以官方為主',
   '三大系列——故事書系列（典雅、磁吸開盒）、禮物盒系列（Ember 美洲獅／My Dear 鹿款，德國紅點設計師）、經典禮盒系列。官網現行：Ember、My Dear、Lumiere、松果幸運故事書、紅百合、愛情百味',
   '最低 20 盒。滿 30 盒 88 折（贈宅配 1 地址）、50 盒 86 折（1）、80 盒 84 折（2）、120 盒 82 折（2）',
   '官網未公開季節限時檔期；常態盒數折扣如上（來源 2024/11 大花說、2025 Dcard 確認沿用）（查詢日 2026/06/28）⚠資料待確認',
   '電話 04-2252-8777 ｜ LINE @lovehera ｜ IG @hera_weddingcookies ｜ 官網 hera.tw',
   '門市試吃原價 NT$850、優惠價 NT$280（出示結婚證書／合約／婚紗照），4 人內約 90 分鐘、約 10–11 款；部分優惠券可 $0；宅配試吃盒 NT$370＋運費 130（8 款餅乾＋2 款磅蛋糕）；可否折抵 ⚠待確認',
   'WeddingDay 44 則新娘評價、正評為主。口味讚、被金色喜氣提袋吸引、專員親切即時（王怡禎 2025/03）；全手工適合減糖、有甜鹹辣、可停車環境舒適（陳盈璇 2025/06）；每款驚艷、長輩朋友回饋佳（2025/06）。負評：盒材偏薄軟、份量感不足、試吃未切塊需手撥。（WeddingDay 2025/03–06、Dcard 2024–2025）',
   '盒數折扣（2025 Dcard 確認）30 盒 88 折、50 盒 86 折、80 盒 84 折、120 盒 82 折，運費贈送同上；門市試吃優惠 NT$280、宅配 NT$370（2024–2025 通用，部分優惠券 $0）',
   '台中市西屯區惠中路二段 46 號（近七期、惠來公園；門市附停車格）', '04-2252-8777',
   'https://www.google.com/maps/search/?api=1&query=Hera赫拉頂級喜餅台中',
   '約 NT$620–1,266',
   '禮盒約 NT$620–1,266／盒（10–20 入配置）',
   NULL, 'WeddingDay 44 則正評', 11);

-- 店家照片（每家 2 張，路徑對應 public/images/，款式說明同原始頁）
INSERT INTO cake_shop_images (shop_id, path, caption, sort_order) VALUES
  (1,'images/shop1_1.jpg','經典愛麗絲鐵盒',1),(1,'images/shop1_2.jpg','花嫁雙層禮盒',2),
  (2,'images/shop2_1.png','璀璨迷人系列',1),(2,'images/shop2_2.png','綺麗花園系列',2),
  (3,'images/shop3_1.jpg','甜美系列（浪漫唯美）',1),(3,'images/shop3_2.jpg','復古系列（經典復古綠）',2),
  (4,'images/shop4_1.jpg','時光花園·香檳山茶花',1),(4,'images/shop4_2.jpg','時光花園·杜樂麗茶花',2),
  (5,'images/shop5_1.jpg','經典永恆·復古紅',1),(5,'images/shop5_2.jpg','經典永恆·復古藍',2),
  (6,'images/shop6_1.jpg','邱比特之羽',1),(6,'images/shop6_2.jpg','綻紅寶石',2),
  (7,'images/shop7_1.png','時刻系列·牽手時刻',1),(7,'images/shop7_2.png','時刻系列·親吻時刻',2),
  (8,'images/shop8_1.jpg','絕美系列·赤櫻',1),(8,'images/shop8_2.png','經典系列·粉遊夢境',2),
  (9,'images/shop9_1.jpg','成家·台灣新人喜餅（紅色雙層）',1),(9,'images/shop9_2.jpg','台味餅乾彩色禮盒',2),
  (10,'images/shop10_1.jpg','門市禮盒款式陳列',1),(10,'images/shop10_2.jpg','來貘聯名薄餅夾心禮盒',2),
  (11,'images/shop11_1.jpg','故事書系列（磁吸開盒）',1),(11,'images/shop11_2.jpg','禮物盒系列（Ember／My Dear）',2);

INSERT INTO schedule_events (phase, phase_en, time, title, role, description, enabled, done, reminder_minutes, sort_order) VALUES
  ('清晨準備','Morning Prep','06:00','新娘造型','新娘','新娘秘書抵達，開始妝髮，並確認頭紗、捧花與飾品是否備妥。',1,0,NULL,1),
  ('清晨準備','Morning Prep','06:30','新郎準備','新郎／伴郎','新郎換裝、佩戴胸花，並與伴郎確認禮車車隊與人員集合狀況。',1,0,NULL,2),
  ('清晨準備','Morning Prep','07:00','男方祭祖','男方家人','出發前於男方家中祭拜祖先，稟告即將迎娶。',1,0,NULL,3),
  ('迎娶','Fetching the Bride','07:30','禮車出發','新郎／伴郎','車隊自男方家出發，前往女方家迎娶，車隊數量以雙數為佳。',1,0,NULL,4),
  ('迎娶','Fetching the Bride','08:00','抵達女方家、攔門','新郎／伴郎 · 女方姊妹','車隊抵達女方家，燃放迎娶炮竹，進行攔門任務與紅包關卡。',1,0,NULL,5),
  ('迎娶','Fetching the Bride','08:20','進場奉茶','新人 · 雙方家長','新人向女方父母奉茶、戴戒指，正式拜見岳父岳母。',1,0,NULL,6),
  ('迎娶','Fetching the Bride','08:40','拜別辭祖','新娘 · 女方家人','新娘拜別父母、進行辭祖儀式，感謝父母養育之恩。',1,0,NULL,7),
  ('迎娶','Fetching the Bride','09:00','上禮車、放扇、潑水禮','新娘 · 女方家人','新娘由兄弟或長輩牽扶上禮車，丟出白扇，家人於車後潑水送嫁。',1,0,NULL,8),
  ('迎娶','Fetching the Bride','09:30','車隊返回男方家','新人','禮車車隊載新人與嫁妝返回男方家。',1,0,NULL,9),
  ('男方儀式','At Groom''s Home','10:00','鳴炮進門','新人','車隊抵達男方家，燃放鞭炮迎接新娘進門。',1,0,NULL,10),
  ('男方儀式','At Groom''s Home','10:15','謝天地、拜祖先','新人 · 男方家人','於男方家中祭拜天地與祖先，感謝護佑並稟告完婚。',1,0,NULL,11),
  ('男方儀式','At Groom''s Home','10:45','更衣、拍照','新人','茶敘休息，更換宴客服裝，與雙方家人拍攝合照。',1,0,NULL,12),
  ('宴客','Banquet','11:30','賓客報到','招待人員','招待人員引導賓客簽名、收禮金並安排入席。',1,0,NULL,13),
  ('宴客','Banquet','12:00','新人進場','新人','播放進場音樂，新人正式進場亮相。',1,0,NULL,14),
  ('宴客','Banquet','12:15','證婚、致詞','雙方家長 · 證婚人','證婚人致詞、雙方家長致謝詞。',1,0,NULL,15),
  ('宴客','Banquet','12:30','開席用餐','賓客','宴席正式開始上菜。',1,0,NULL,16),
  ('宴客','Banquet','13:00','巡桌敬酒','新人 · 伴郎伴娘','新人偕同伴郎伴娘逐桌敬酒、拍照留念。',1,0,NULL,17),
  ('宴客','Banquet','14:00','送客','新人 · 雙方家長','新人與雙方家長於會場門口送客、道謝。',1,0,NULL,18),
  ('尾聲','Wrap-up','14:30','拆禮、結算','雙方家人','清點禮金與帳目，歸還場地佈置物品與租借道具。',1,0,NULL,19),
  ('尾聲','Wrap-up','15:00','賦歸休息','新人','新人休息，感謝所有工作人員、親友的協助與祝福。',1,0,NULL,20);

INSERT INTO checklist_items (module, tab, group_name, title, note, tag, role, done, due_date, reminder_days, sort_order) VALUES
  -- ===== 儀式：婚宴迎娶 =====
  ('ceremony','婚宴迎娶','男方準備','喜轎／禮車','迎娶當天接新娘的禮車，車隊數量講究雙數，象徵成雙成對。','儀式','男方',0,NULL,NULL,11),
  ('ceremony','婚宴迎娶','男方準備','迎娶禮炮／鞭炮','車隊出發及抵達女方家時燃放，象徵驅邪納喜、告知親友。','儀式','男方',0,NULL,NULL,12),
  ('ceremony','婚宴迎娶','男方準備','新娘捧花','迎娶時準備捧花給新娘，象徵永結同心。','儀式','男方',0,NULL,NULL,13),
  ('ceremony','婚宴迎娶','男方準備','謝天地、拜祖先供品','迎娶完成回男方家後祭拜天地與祖先，感謝護佑並稟告完婚。','儀式','男方',0,NULL,NULL,14),
  ('ceremony','婚宴迎娶','男方準備','紅包（開容禮、幫忙人員等）','迎娶時致贈女方幫忙人員（如捧茶、扶新娘、開容禮）的謝禮，需事先備妥多個紅包。','人情與宴客','男方',0,NULL,NULL,15),
  ('ceremony','婚宴迎娶','男方準備','喜宴場地與宴客','男方通常負責歸寧宴或部分喜宴費用，依雙方協議分攤。','人情與宴客','男方',0,NULL,NULL,16),
  ('ceremony','婚宴迎娶','女方準備','嫁妝','傳統含被鋪、皮箱、臉盆、鏡子等生活用品，象徵富足祝福，現代多簡化為現金或家電，於迎娶當天隨新娘帶至男方家。','嫁妝','女方',0,NULL,NULL,17),
  ('ceremony','婚宴迎娶','女方準備','子孫桶／尿桶','內裝紅蛋、桂圓、紅棗等，象徵早生貴子、多子多孫，現代可用象徵性小物代替。','嫁妝','女方',0,NULL,NULL,18),
  ('ceremony','婚宴迎娶','女方準備','緣粉、白扇','新娘上禮車時將扇子丟出車外（放扇），象徵丟掉壞脾氣，留下好姻緣。','禮俗','女方',0,NULL,NULL,19),
  ('ceremony','婚宴迎娶','女方準備','竹篩或黑傘','新娘出門時遮住頭頂，象徵避邪、不見天，孕婦新娘尤其重視此禮。','禮俗','女方',0,NULL,NULL,20),
  ('ceremony','婚宴迎娶','女方準備','甘蔗','部分地區會在禮車綁上帶葉甘蔗，象徵有頭有尾、感情甜蜜長久。','禮俗','女方',0,NULL,NULL,21),
  ('ceremony','婚宴迎娶','女方準備','潑水禮','新娘出嫁時家人於禮車後潑水，象徵「嫁出去的女兒，潑出去的水」，祝福順利成家。','禮俗','女方',0,NULL,NULL,22),
  ('ceremony','婚宴迎娶','女方準備','辭祖儀式','出嫁前祭拜祖先辭行，稟告即將出嫁一事，感謝祖先庇佑。','禮俗','女方',0,NULL,NULL,23),
  ('ceremony','婚宴迎娶','女方準備','迎娶與宴客服裝（白紗、秀禾服等）','迎娶、宴客當天依儀式與敬酒場合更換的服裝，常見白紗、龍鳳掛、秀禾服等多套搭配。','服裝與人情','女方',0,NULL,NULL,24),
  ('ceremony','婚宴迎娶','女方準備','紅包（迎娶人員）','迎娶當天答謝男方迎娶車隊、伴郎等人員的紅包。','服裝與人情','女方',0,NULL,NULL,25),
  ('ceremony','婚宴迎娶','女方準備','歸寧禮品','婚後回娘家（歸寧）時，需準備招待女婿及女兒的宴席與禮品。','宴客與核對','女方',0,NULL,NULL,26),
  ('ceremony','婚宴迎娶','女方準備','嫁妝清單／禮數對帳','迎娶前與男方核對聘禮與嫁妝內容，避免禮數不符造成雙方誤會。','宴客與核對','女方',0,NULL,NULL,27),
  -- ===== 儀式：婚宴迎娶（補充：迎娶當天男女方備品）=====
  ('ceremony','婚宴迎娶','男方準備','車頭彩、車把花','裝飾迎娶車隊的彩球、緞帶與車把花，象徵喜氣；禮車出發前完成綁設。','儀式','男方',0,NULL,NULL,64),
  ('ceremony','婚宴迎娶','男方準備','丈人帖','迎娶接到新娘後，由新郎將丈人帖交給女方父母，正式邀請岳父母參加喜宴。','儀式','男方',0,NULL,NULL,65),
  ('ceremony','婚宴迎娶','男方準備','橘子或蘋果 2 顆＋紅漆茶盤（迎新娘用）','以紅紙圈起放在茶盤上，新娘抵達男方家時由男方親友端給新娘觸摸，象徵大吉大利、平平安安。','禮俗','男方',0,NULL,NULL,66),
  ('ceremony','婚宴迎娶','男方準備','火爐、瓦片','新娘進男方家門時跨火爐、踩破瓦片，象徵淨身去穢、驅除邪煞。','禮俗','男方',0,NULL,NULL,67),
  ('ceremony','婚宴迎娶','男方準備','公婆椅＋新郎長褲（坐財庫）','新房內擺兩張有靠背的椅子並墊上新郎長褲，口袋放雙數銅板或紙鈔；新人並肩而坐，象徵夫妻同心、財庫不空。','禮俗','男方',0,NULL,NULL,68),
  ('ceremony','婚宴迎娶','男方準備','甜湯圓','新人進新房後互餵甜湯圓，象徵甜蜜圓滿。','禮俗','男方',0,NULL,NULL,69),
  ('ceremony','婚宴迎娶','女方準備','回應鞭炮','聽到男方車隊抵達的鞭炮聲後，女方也要鳴炮回應，表示歡迎。','禮俗','女方',0,NULL,NULL,70),
  ('ceremony','婚宴迎娶','女方準備','橘子或蘋果 2 顆＋紅漆茶盤（迎新郎用）','以紅紙圈起放在茶盤上，新郎抵達女方家時由女方親友端給新郎觸摸，象徵吉利平安。','禮俗','女方',0,NULL,NULL,71),
  ('ceremony','婚宴迎娶','女方準備','甜茶、茶杯、茶盤（奉茶用）','男方進門後由新娘或女方晚輩奉甜茶招待迎娶親友，喝完壓茶杯紅包。','儀式','女方',0,NULL,NULL,72),
  ('ceremony','婚宴迎娶','女方準備','雞蛋茶或湯圓（招待迎娶親友）','女方準備雞蛋茶、湯圓或點心招待男方迎娶人員。','人情','女方',0,NULL,NULL,73),
  ('ceremony','婚宴迎娶','女方準備','闖關遊戲道具','攔門闖關所需的道具與題目，由伴娘團事先準備；記得控制時間，避免誤了出門吉時。','儀式','女方',0,NULL,NULL,74),
  ('ceremony','婚宴迎娶','女方準備','姐妹桌','新娘出門前與家人、姐妹同桌吃飯，象徵辭別娘家、家人祝福；可與辭祖儀式前後安排。','禮俗','女方',0,NULL,NULL,75),
  ('ceremony','婚宴迎娶','女方準備','青竹掃＋豬肉（綁禮車）','帶葉青竹象徵開枝散葉、豬肉代表避邪，與甘蔗一起綁在新娘禮車上；現代多已省略，依長輩意見決定。','禮俗','女方',0,NULL,NULL,76),
  ('ceremony','婚宴迎娶','女方準備','帶路雞','一公一母，有「起家」之意，由伴娘拿著隨新娘禮車到男方家；現代多以雞造型小物代替。','禮俗','女方',0,NULL,NULL,77),

  -- ===== 婚紗拍攝：新郎 =====
  ('photo','新郎','儀容準備','拍攝前一週修剪頭髮（兩側、後側可修，但不可推太高、不露頭皮，上方留長度好造型）',NULL,'儀容準備','新郎',0,NULL,NULL,1),
  ('photo','新郎','儀容準備','有白髮者：染黑或深咖啡色',NULL,'儀容準備','新郎',0,NULL,NULL,2),
  ('photo','新郎','儀容準備','拍攝當天務必把鬍子刮乾淨',NULL,'儀容準備','新郎',0,NULL,NULL,3),
  ('photo','新郎','儀容準備','配戴隱形眼鏡（避免大太陽下藍光/綠光折射、反光，後製無法修）',NULL,'儀容準備','新郎',0,NULL,NULL,4),
  ('photo','新郎','儀容準備','不習慣隱形眼鏡：改備無鏡片鏡框當造型',NULL,'儀容準備','新郎',0,NULL,NULL,5),
  ('photo','新郎','鞋子','拍攝用：深咖啡色皮鞋（搭西裝）',NULL,'鞋子','新郎',0,NULL,NULL,6),
  ('photo','新郎','鞋子','休閒風備選：小白鞋、帆布鞋（無印良品、富發牌）或與新娘同款鞋',NULL,'鞋子','新郎',0,NULL,NULL,7),
  ('photo','新郎','鞋子','移動用：舒適運動鞋/布鞋（走斜坡如火焰山用，止滑佳）',NULL,'鞋子','新郎',0,NULL,NULL,8),
  -- ===== 婚紗拍攝：新娘 =====
  ('photo','新娘','儀容準備','頭髮染深咖啡色（避免太淺，長出「布丁頭」太明顯）',NULL,'儀容準備','新娘',0,NULL,NULL,9),
  ('photo','新娘','儀容準備','配戴隱形眼鏡（避免反光、折射，後製無法修）',NULL,'儀容準備','新娘',0,NULL,NULL,10),
  ('photo','新娘','儀容準備','選自然直徑變色片，避免過大放大片',NULL,'儀容準備','新娘',0,NULL,NULL,11),
  ('photo','新娘','儀容準備','不習慣隱形眼鏡：改備無鏡片鏡框當造型',NULL,'儀容準備','新娘',0,NULL,NULL,12),
  ('photo','新娘','鞋子','魚尾裙會露腳：備 3–5 公分尖頭跟鞋',NULL,'鞋子','新娘',0,NULL,NULL,13),
  ('photo','新娘','鞋子','想兼顧舒適與高度：厚底瑪麗珍鞋或老爹鞋',NULL,'鞋子','新娘',0,NULL,NULL,14),
  ('photo','新娘','鞋子','移動用：舒適運動鞋/布鞋（止滑佳，避免勾破禮服）',NULL,'鞋子','新娘',0,NULL,NULL,15),
  ('photo','新娘','造型加分','長頭紗（可請造型師準備，增加延展感）',NULL,'造型加分','新娘',0,NULL,NULL,16),
  -- ===== 婚紗拍攝：兩人共用 =====
  ('photo','兩人共用','出發前','吃飽早餐（早上 7 點化妝，路線不固定，午餐可能很晚或超商解決）',NULL,'出發前','共同',0,NULL,NULL,17),
  ('photo','兩人共用','出發前','自行開車：清空車內雜物，預留大空間放禮服與器材',NULL,'出發前','共同',0,NULL,NULL,18),
  ('photo','兩人共用','出發前','帶身分證（部分場館登記用）',NULL,'出發前','共同',0,NULL,NULL,19),
  ('photo','兩人共用','夏季防曬消暑','身體防曬：塗抹式打底 ＋ 噴霧式補噴（造型師只負責臉部隔離）',NULL,'夏季防曬消暑','共同',0,NULL,NULL,20),
  ('photo','兩人共用','夏季防曬消暑','小電風扇',NULL,'夏季防曬消暑','共同',0,NULL,NULL,21),
  ('photo','兩人共用','夏季防曬消暑','涼感噴霧、涼感濕紙巾',NULL,'夏季防曬消暑','共同',0,NULL,NULL,22),
  ('photo','兩人共用','夏季防曬消暑','充足的水',NULL,'夏季防曬消暑','共同',0,NULL,NULL,23),
  ('photo','兩人共用','夏季防曬消暑','雨傘（遮陽／擋雨）',NULL,'夏季防曬消暑','共同',0,NULL,NULL,24),
  ('photo','兩人共用','夏季防曬消暑','防蚊液',NULL,'夏季防曬消暑','共同',0,NULL,NULL,25),
  ('photo','兩人共用','汗水處理','準備小毛巾',NULL,'汗水處理','共同',0,NULL,NULL,26),
  ('photo','兩人共用','汗水處理','流汗用「壓吸」的方式，不可用擦的（以免弄壞妝容）',NULL,'汗水處理','共同',0,NULL,NULL,27),
  ('photo','兩人共用','拍攝道具','戒指（求婚戒）',NULL,'拍攝道具','共同',0,NULL,NULL,28),
  ('photo','兩人共用','拍攝道具','捧花（夏季建議用仿真花，鮮花易高溫枯萎）',NULL,'拍攝道具','共同',0,NULL,NULL,29),
  ('photo','兩人共用','拍攝道具','長款仙女棒（注意風向，避免燒破禮服，燒破需賠償）',NULL,'拍攝道具','共同',0,NULL,NULL,30),
  ('photo','兩人共用','拍攝道具','墨鏡',NULL,'拍攝道具','共同',0,NULL,NULL,31),
  ('photo','兩人共用','拍攝道具','泡泡',NULL,'拍攝道具','共同',0,NULL,NULL,32),
  ('photo','兩人共用','拍攝道具','氣球',NULL,'拍攝道具','共同',0,NULL,NULL,33),
  ('photo','兩人共用','拍攝道具','手拿字卡（We are married）',NULL,'拍攝道具','共同',0,NULL,NULL,34),
  ('photo','兩人共用','拍攝道具','畫板',NULL,'拍攝道具','共同',0,NULL,NULL,35),
  ('photo','兩人共用','拍攝道具','風箏（增加故事性）',NULL,'拍攝道具','共同',0,NULL,NULL,36),
  ('photo','兩人共用','拍攝道具','道具都先拍照傳討論群組給攝影師',NULL,'拍攝道具','共同',0,NULL,NULL,37),
  -- ===== 婚紗拍攝：拍攝地點與路線 =====
  ('photo','拍攝地點與路線','推薦景點','國家漫畫博物館（國漫館）','日式建築，週一公休人少，文青／活潑互動。攝影師建議 3–4 個景點，點對點車程控制在 1 小時內。','推薦景點','共同',0,NULL,NULL,38),
  ('photo','拍攝地點與路線','推薦景點','後里環保公園','大草原、綠色隧道，適合奔跑、氣球、泡泡。','推薦景點','共同',0,NULL,NULL,39),
  ('photo','拍攝地點與路線','推薦景點','火焰山','景觀壯闊，需走陡坡（穿止滑鞋），光線亮、不拍夕陽。','推薦景點','共同',0,NULL,NULL,40),
  ('photo','拍攝地點與路線','推薦景點','松港海邊','最後一站拍夕陽晚霞（約 18:30），西岸沙灘。避開：高美濕地（泥灘易髒、遊客多）、新社古堡（費用高、車程遠）。','推薦景點','共同',0,NULL,NULL,41),
  -- ===== 婚紗拍攝：風格與概念 =====
  ('photo','風格與概念','風格方向','自然互動為主，較多側臉捕捉氛圍，不拘泥傳統擺拍',NULL,'風格方向','共同',0,NULL,NULL,42),
  ('photo','風格與概念','風格方向','色調：明亮、乾淨、色彩飽和；避開灰暗、過黃復古感',NULL,'風格方向','共同',0,NULL,NULL,43),
  ('photo','風格與概念','風格方向','人像比例稍大（看得到五官），遠景氛圍照為輔',NULL,'風格方向','共同',0,NULL,NULL,44),
  ('photo','風格與概念','風格方向','光影：喜歡線條明顯的變化；海邊夕陽可接受暖橘色調',NULL,'風格方向','共同',0,NULL,NULL,45),
  -- ===== 婚紗拍攝：後續可能費用 =====
  ('photo','後續可能費用','費用參考','多一套禮服化妝費','$4,000','費用參考','共同',0,NULL,NULL,46),
  ('photo','後續可能費用','費用參考','兩套白紗價差','$3,000','費用參考','共同',0,NULL,NULL,47),
  ('photo','後續可能費用','費用參考','加購精修（僅修片）','一檔 $300','費用參考','共同',0,NULL,NULL,48),
  ('photo','後續可能費用','費用參考','精修入相本','一張 $600','費用參考','共同',0,NULL,NULL,49),
  -- ===== 婚紗拍攝：其他注意事項（依攝影師錄音補充）=====
  ('photo','其他注意事項','方案與時程','包套內含 20 張精修照片','超出部分：單純修片(數位檔) $300/張、入相本(含修片) $600/張（明細見「後續可能費用」分頁）','方案時程','共同',0,NULL,NULL,50),
  ('photo','其他注意事項','方案與時程','當天約 12 小時行程（07:00 化妝～19:00–20:00 回門市）','已屬超時拍攝，攝影師會為拍夕陽晚霞盡力完成；請預留整天體力','方案時程','共同',0,NULL,NULL,51),
  ('photo','其他注意事項','天氣不佳備案','陰天：色調可後製，但無法合成藍天或夕陽','陰天優點：臉部陰影較柔和；大太陽下光影美，但臉部明暗對比強烈','天氣備案','共同',0,NULL,NULL,52),
  ('photo','其他注意事項','天氣不佳備案','遇颱風或大雨等惡劣天氣，強烈建議延期拍攝',NULL,'天氣備案','共同',0,NULL,NULL,53),
  ('photo','其他注意事項','畏光與隱形眼鏡應對','畏光練習：這幾天下午 1–2 點到戶外互看，測試是否會一直皺眉',NULL,'畏光應對','新郎',0,NULL,NULL,54),
  ('photo','其他注意事項','畏光與隱形眼鏡應對','拍攝技巧：盡量安排順光(背對太陽)或平視角度','真的不適時移往陰影處拍攝，或先戴墨鏡緩衝','畏光應對','共同',0,NULL,NULL,55),
  ('photo','其他注意事項','畏光與隱形眼鏡應對','隱形眼鏡新手：本週先練習配戴','當天真的戴不進去，可請造型師協助配戴','畏光應對','新郎',0,NULL,NULL,56),
  ('photo','其他注意事項','交通安排','租包車(含司機)選項：約 $4,000 以上','擔心開一整天車體力不支可考慮；攝影師可提供常合作司機(機場接送型相型車)聯絡資訊','交通','共同',0,NULL,NULL,57),
  ('photo','其他注意事項','婚宴宴客建議','禮服套數：活動多(抽捧花/遊戲)建議 2 套，活動少才考慮 3 套','套數太多會沒時間與賓客互動或拍類婚紗','宴客建議','共同',0,NULL,NULL,58),
  ('photo','其他注意事項','婚宴宴客建議','宴客當天想拍類婚紗：須由小管家控管時間','於進場前或換裝空檔進行；行程太滿則無法拍攝','宴客建議','共同',0,NULL,NULL,59),
  ('photo','其他注意事項','禮服安全（仙女棒）','仙女棒火星點到禮服會造成黑點或破洞','破損須櫃檯賠償，且通常整件報廢','禮服安全','共同',0,NULL,NULL,60),
  ('photo','其他注意事項','禮服安全（仙女棒）','使用仙女棒務必看風向、絕不迎風','盡量由新郎拿著或拿遠一點','禮服安全','共同',0,NULL,NULL,61),
  ('photo','其他注意事項','體位與身分差異','雙方身高 166 / 150 公分，攝影師評估落差 OK','新娘想修飾比例可選 3–5cm 跟鞋、厚底瑪麗珍鞋或老爹鞋','體位差異','共同',0,NULL,NULL,62),
  ('photo','其他注意事項','體位與身分差異','偏好自然風格，側臉鏡頭會較多','專注彼此互動即可，攝影師負責捕捉最美瞬間','體位差異','共同',0,NULL,NULL,63);

INSERT INTO todos (title, module, due_date, done, sort_order) VALUES
  ('確認喜餅口味並下訂（先安排試吃）','喜餅選購','2026-07-13',0,1),
  ('寄送喜帖給女方親友','儀式準備清單','2026-07-08',0,2),
  ('與婚宴會館核對當天流程時間','婚宴行程表','2026-07-16',0,3),
  ('準備男方聘金與六禮清單','儀式準備清單','2026-07-18',0,4),
  ('婚紗拍攝服裝與配件確認','婚紗拍攝清單','2026-07-14',0,5);
`,hs=`
INSERT INTO staff_roles (stage, category, title, side, headcount, duties, sort_order) VALUES
  ('全程','總統籌','總召（男方代表）','男方',1,'統籌男方當天流程與人員調度；對接婚宴會館、婚顧與各廠商；掌控時間並處理突發狀況。建議找熟悉家族、有辦婚禮經驗且可信任的親友。',1),
  ('全程','總統籌','總召（女方代表）','女方',1,'統籌女方當天流程與人員調度；與男方總召保持聯繫，掌握車隊抵達時間與出門吉時；婚宴時協助確認開席桌數。',2),
  ('全程','伴郎伴娘','伴郎','男方',2,'陪同新郎迎娶、闖關；保管婚戒與紅包；協助新郎進場、敬酒與臨時需求。人數與伴娘相等，傳統上以未婚者為宜。',3),
  ('全程','伴郎伴娘','伴娘','女方',2,'規劃攔門闖關遊戲；陪伴新娘、協助換裝補妝與整理裙擺；迎娶時提帶路雞隨車。',4),
  ('迎娶','迎娶儀式','媒人／好命婆','共同',1,'引領新娘出房門，撐米篩或黑傘護送上下禮車；引導過火爐、踩瓦片並說吉祥話。好命婆宜請父母健在、夫妻和睦、兒女雙全的長輩。',5),
  ('迎娶','迎娶儀式','禮車司機','男方',6,'駕駛迎娶車隊（人、車皆取雙數，常見 2／6／12 部）；事先確認路線、停車位置與抵達時間。',6),
  ('迎娶','迎娶儀式','拜轎男童（女方）','女方',1,'車隊抵達女方家時，捧橘子或蘋果為新郎開車門，新郎回贈紅包。',7),
  ('迎娶','迎娶儀式','捧橘子晚輩（男方）','男方',1,'新娘抵達男方家時，捧橘子或蘋果請新娘觸摸並開車門，新娘回贈紅包。',8),
  ('迎娶','迎娶儀式','奉茶人員','女方',1,'男方進門後端甜茶、雞蛋茶招待迎娶親友，並收回茶杯與壓茶杯紅包。',9),
  ('婚宴','婚宴儀式','主婚人','共同',2,'多由雙方父母擔任；宴客開始時致詞，勉勵新人並感謝賓客。',10),
  ('婚宴','婚宴儀式','證婚人','共同',1,'請熟識新人的長輩擔任；證婚時宣讀祝福、見證婚姻。',11),
  ('婚宴','婚宴儀式','婚禮主持人','共同',1,'熟悉整場流程、掌控節奏；事先拿到流程表與進場音樂，並與總召確認各時間點。',12),
  ('婚宴','招待與收禮','招待／帶位','共同',4,'迎賓、帶位、確認賓客桌次；建議每 4 桌安排 1 位，並找熟悉該親友圈的人。',13),
  ('婚宴','招待與收禮','收禮金（男方）','男方',2,'收紅包、點鈔、登記禮金簿與整理現金；需細心可信任、對數字敏感、字跡清楚。男女方分開收，禮金桌標示清楚。',14),
  ('婚宴','招待與收禮','收禮金（女方）','女方',2,'收紅包、點鈔、登記禮金簿與整理現金；需細心可信任、對數字敏感、字跡清楚。男女方分開收，禮金桌標示清楚。',15),
  ('婚宴','招待與收禮','發喜餅','女方',2,'依名單核對並發放喜餅，記錄已領與剩餘盒數。',16),
  ('全程','專業團隊','婚禮攝影（婚攝）','共同',1,'記錄迎娶與婚宴全程的照片；事先提供流程表與必拍名單（如家族合照、重要親友）。',17),
  ('全程','專業團隊','婚禮錄影（婚錄）','共同',1,'錄製迎娶與婚宴的動態影像；事先提供流程表並確認重要橋段，若有快剪快播需預留時間與播放設備。',18),
  ('全程','專業團隊','新娘秘書','女方',1,'新娘妝髮造型與換裝；需與迎娶時間對齊，通常清晨即開始。',19);
`;new URL("api/database",document.baseURI).href;const Cn="Roger-Hung-Dev/wedding-prep-hub-data",vs="main",fs="wedding_prep.db",Dn=`https://api.github.com/repos/${Cn}`,aa="wph.gh_token";let ft="";class Ge extends Error{}function gt(){try{return localStorage.getItem(aa)||ft}catch{return ft}}function sa(s){ft=s;try{localStorage.setItem(aa,s)}catch{}}function na(){ft="";try{localStorage.removeItem(aa)}catch{}}async function Xe(s,r={}){const d=await fetch(`${Dn}${s}`,{cache:"no-cache",...r,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${gt()}`,"X-GitHub-Api-Version":"2022-11-28",...r.headers}});if(d.status===401)throw new Ge("鑰匙無效或已過期，請重新輸入");return d}function Fn(s){const r=atob(s.replace(/\s/g,"")),d=new Uint8Array(r.length);for(let E=0;E<r.length;E++)d[E]=r.charCodeAt(E);return d}function Wn(s){let r="";for(let d=0;d<s.length;d+=32768)r+=String.fromCharCode(...s.subarray(d,d+32768));return btoa(r)}const bs=()=>`/contents/${fs}?ref=${encodeURIComponent(vs)}`;async function Hn(){const s=await Xe(bs());if(s.status===404){if((await Xe("")).status===404)throw new Ge("這把鑰匙沒有資料庫的存取權限");return null}if(!s.ok)throw new Error("讀取資料庫失敗：HTTP "+s.status);const r=await s.json();let d=r.content;if(r.encoding!=="base64"||!d){const E=await Xe(`/git/blobs/${r.sha}`);if(!E.ok)throw new Error("讀取資料庫失敗：HTTP "+E.status);d=(await E.json()).content}return{bytes:Fn(d),version:r.sha}}async function Pn(){const s=await Xe(bs());if(!s.ok)throw new Error("讀取版本失敗");return(await s.json()).sha}async function Bn(s,r){const d={message:"網站自動儲存",content:Wn(s),branch:vs};r!=="0"&&(d.sha=r);const E=await Xe(`/contents/${fs}`,{method:"PUT",cache:"no-store",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});if(E.status===409||E.status===422&&!d.sha)return{conflict:!0};if(E.status===403||E.status===404)throw new Ge("這把鑰匙沒有寫入資料庫的權限");if(!E.ok)throw new Error("儲存失敗：HTTP "+E.status);return{version:(await E.json()).content.sha}}const Xn=Object.freeze(Object.defineProperty({__proto__:null,AuthError:Ge,clearToken:na,getToken:gt,load:Hn,save:Bn,setToken:sa,version:Pn},Symbol.toStringTag,{value:"Module"})),Ve=Xn,jn=15e3;let Te=null,j=null,ms=null,_e="0";const ra=new Set;let es=null,Be=null,bt=!1;function oa(s){s!==_e&&ra.add(_e),_e=s}function Es(){j.run(ps),j.run(qn),j.run(hs)}function ia(){return S("SELECT 1 AS ok FROM sqlite_master WHERE type='table' AND name='staff_roles'")?!1:(j.run(ps),j.run(hs),!0)}async function Gn(){if(j)return j;Te||(Te=await In({locateFile:()=>xn}));const s=await Ve.load();return s?(j=new Te.Database(s.bytes),_e=s.version,ia()&&await Ue()):(j=new Te.Database,Es(),await Ue()),Yn(),j}function Ue(){return j?(bt=!0,Be||(Be=Vn().finally(()=>{Be=null,bt=!1}).catch(s=>{throw ts(s.message),s}).then(async s=>{s&&(await Ls(),ts("資料已被其他人更新，已為你載入最新版本，請再操作一次"))})),Be):Promise.resolve()}async function Vn(){for(;bt;){bt=!1;const s=await Ve.save(j.export(),_e);if(s.conflict)return!0;oa(s.version),ms=new Date}return!1}async function Ls(){const s=await Ve.load();if(!(!s||s.version===_e||ra.has(s.version))){try{j.close()}catch{}j=new Te.Database(s.bytes),oa(s.version),ia()&&await Ue(),window.dispatchEvent(new Event("hashchange"))}}function Yn(){es||(es=setInterval(async()=>{try{if(Be||document.querySelector(".backdrop"))return;const s=await Ve.version();s!==_e&&!ra.has(s)&&await Ls()}catch{}},jn))}function K(s,r=[]){const d=j.prepare(s);d.bind(r);const E=[];for(;d.step();)E.push(d.getAsObject());return d.free(),E}function S(s,r=[]){return K(s,r)[0]||null}async function P(s,r=[]){j.run(s,r),await Ue()}async function Ye(s,r=[]){j.run(s,r);const d=S("SELECT last_insert_rowid() AS id").id;return await Ue(),d}function zn(){return j.export()}async function Qn(s){await ys(),j=new Te.Database(new Uint8Array(s)),ia(),await Ue()}async function Kn(){await ys(),j=new Te.Database,Es(),await Ue()}async function ys(){try{oa(await Ve.version())}catch{}}function gs(){const s=S("SELECT COUNT(*) AS n FROM app_settings").n,r=S("SELECT COUNT(*) AS n FROM checklist_items").n+S("SELECT COUNT(*) AS n FROM schedule_events").n+S("SELECT COUNT(*) AS n FROM cake_shops").n,d=j.export().length;return{settings:s,items:r,sizeKB:Math.round(d/1024),sizeMB:(d/1024/1024).toFixed(2),lastSaved:ms}}function ts(s){const r=document.createElement("div");r.textContent=s,r.style.cssText="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#2b1d16;color:#fff;padding:11px 20px;border-radius:10px;font-size:.85rem;z-index:9999;max-width:90vw;text-align:center;box-shadow:0 6px 20px rgba(0,0,0,.3);opacity:0;transition:opacity .3s",document.body.appendChild(r),requestAnimationFrame(()=>r.style.opacity="1"),setTimeout(()=>{r.style.opacity="0",setTimeout(()=>r.remove(),300)},3200)}const Jn={dashboard:'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',cake:'<path d="M4 21v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7"/><path d="M4 16s1.5-2 4-2 4 2 4 2 1.5-2 4-2 4 2 4 2"/><path d="M2 21h20"/><path d="M12 4v4M8 5v3M16 5v3"/>',"calendar-clock":'<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M12 14v2.5l1.8 1"/>',"clipboard-list":'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/><path d="M8.5 11H8M12 11h4M8.5 15H8M12 15h4"/>',camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 6.6 19l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H2a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 3.3 6.6l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 17.4 3.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9H22a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',plus:'<path d="M5 12h14M12 5v14"/>',"chevron-right":'<path d="m9 18 6-6-6-6"/>',"chevron-left":'<path d="m15 18-6-6 6-6"/>',"chevron-down":'<path d="m6 9 6 6 6-6"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',check:'<path d="M20 6 9 17l-5-5"/>',star:'<path d="M12 2.5 15 8.6l6.7 1-4.8 4.7 1.1 6.7L12 17.9 6 21l1.1-6.7L2.3 9.6 9 8.6z"/>',"map-pin":'<path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9z"/>',bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',download:'<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',upload:'<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',"search-x":'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M9 9l4 4M13 9l-4 4"/>',sliders:'<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h14M18 18h2"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="18" r="2"/>',"image-plus":'<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M3 16l4-4a2 2 0 0 1 3 0l5 5"/><path d="M16 5h6M19 2v6"/><circle cx="8.5" cy="8.5" r="1.5"/>',trash:'<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/>',grip:'<circle cx="9" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="18" r="1"/>',link:'<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',timer:'<path d="M10 2h4"/><circle cx="12" cy="14" r="8"/><path d="M12 14V10"/>',"circle-check":'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',key:'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',"cloud-off":'<path d="M2 2l20 20"/><path d="M5.8 5.8A6 6 0 0 0 6 18h11a4 4 0 0 0 1.6-.3"/><path d="M13 5a6 6 0 0 1 5.7 4.2A4 4 0 0 1 21 13"/>',store:'<path d="M4 9V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4"/><path d="M3 9h18l-1 3H4z"/><path d="M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"/>',gem:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M11 3 8 9l4 12 4-12-3-6"/>',calendar:'<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/>',heart:'<path d="M20.8 5a5.4 5.4 0 0 0-7.6 0L12 6.2 10.8 5a5.4 5.4 0 1 0-7.6 7.6l1.2 1.2L12 21l7.6-7.2 1.2-1.2a5.4 5.4 0 0 0 0-7.6z"/>',palette:'<circle cx="12" cy="12" r="9.5"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="10" r="1"/><path d="M12 21.5a3 3 0 0 0 0-6 2 2 0 0 1 0-4"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',"file-down":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 12v6M9 15l3 3 3-3"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',car:'<path d="M5 17H3v-5l2-4h11l3 4v5h-2"/><path d="M7 17h8"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/>',mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',"rotate-ccw":'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'};function L(s,r){const d=Jn[s]||'<circle cx="12" cy="12" r="9"/>';return`<span class="icon"${r?` style="width:${r}px;height:${r}px"`:""}><svg viewBox="0 0 24 24">${d}</svg></span>`}function p(s){return String(s??"").replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r])}function ws(s,r=new Date){if(!s)return null;const d=new Date(s+"T00:00:00"),E=new Date(r.getFullYear(),r.getMonth(),r.getDate());return Math.round((d-E)/864e5)}function $s(s){const r=ws(s);return r===null?null:r<0?{text:"已逾期",kind:"accent"}:r===0?{text:"今天",kind:"accent"}:r<=7?{text:`${r} 天後`,kind:r<=3?"gold":"muted"}:{text:`${Math.ceil(r/7)} 週後`,kind:"muted"}}function Zn(s){if(!s)return"";const r=new Date(s+"T00:00:00"),d=["日","一","二","三","四","五","六"][r.getDay()];return`${r.getFullYear()} / ${String(r.getMonth()+1).padStart(2,"0")} / ${String(r.getDate()).padStart(2,"0")} · 星期${d}`}function Bt(s){const r=document.createElement("template");return r.innerHTML=s.trim(),r.content.firstElementChild}function as(s,r){return r?Math.round(s/r*100):0}const ss=[{key:"dashboard",label:"總覽",short:"總覽",icon:"dashboard"},{key:"cake",label:"喜餅選購",short:"喜餅",icon:"cake"},{key:"schedule",label:"婚宴行程表",short:"行程",icon:"calendar-clock"},{key:"ceremony",label:"儀式準備清單",short:"清單",icon:"clipboard-list"},{key:"photo",label:"婚紗拍攝清單",short:"婚紗",icon:"camera"},{key:"staff",label:"現場人員",short:"人員",icon:"users"}];function er(){const s={};s.cake=S("SELECT COUNT(*) n FROM cake_shops").n;const r=S("SELECT SUM(done) d, COUNT(*) t FROM schedule_events WHERE enabled=1");s.schedule=`${r.d||0}/${r.t||0}`;const d=S("SELECT SUM(done) d, COUNT(*) t FROM checklist_items WHERE module='ceremony'");s.ceremony=`${d.d||0}/${d.t||0}`;const E=S("SELECT SUM(done) d, COUNT(*) t FROM checklist_items WHERE module='photo'");s.photo=`${E.d||0}/${E.t||0}`;const h=S("SELECT SUM(CASE WHEN TRIM(COALESCE(assignee,''))<>'' THEN 1 ELSE 0 END) d, COUNT(*) t FROM staff_roles");return s.staff=`${h.d||0}/${h.t||0}`,s}function tr(s){const r=S("SELECT * FROM couple_info WHERE id=1")||{},d=er(),E=`${p(r.groom_name||"")} ♥ ${p(r.bride_name||"")}`,h=ss.map(b=>`
    <a class="nav-item ${s===b.key?"active":""}" href="#/${b.key}">
      ${L(b.icon)}
      <span class="nav-name">${b.label}</span>
      ${d[b.key]?`<span class="nav-count">${d[b.key]}</span>`:""}
    </a>`).join(""),g=`
    <aside class="sidebar">
      <div class="brand">
        <h1>${E}</h1>
        <p>WEDDING PREP CENTER</p>
      </div>
      <nav class="nav-list">
        ${h}
        <div class="nav-divider"></div>
        <a class="nav-item ${s==="settings"?"active":""}" href="#/settings">
          ${L("settings")}<span class="nav-name">設定</span>
        </a>
      </nav>
      <div class="sidebar-spacer"></div>
      <div class="storage-status">
        <div class="row">
          ${L("database",16)}
          <span class="label">GitHub 雲端同步</span>
          <span class="dot success"></span>
        </div>
        <div class="sub">自動儲存 · 剛剛</div>
      </div>
    </aside>`,T=`
    <header class="appbar mobile-only">
      <div class="couple">${E}</div>
      <div class="appbar-actions">
        ${L("bell")}
        <a href="#/settings" style="color:inherit">${L("settings")}</a>
      </div>
    </header>`,y=`
    <nav class="topnav mobile-only">
      ${ss.map(b=>`<a class="tn-item ${s===b.key?"active":""}" href="#/${b.key}">
          ${L(b.icon)}<span>${b.short}</span></a>`).join("")}
    </nav>`,$=document.createElement("div");$.className="app",$.innerHTML=`${g}${T}${y}<main class="main" id="view"></main>`;const o=$.querySelector("#view");return{root:$,main:o}}function Ie(s,r={}){const d=document.getElementById("modal-root"),E=window.matchMedia("(max-width: 900px)").matches,h=Bt('<div class="backdrop"></div>'),g=Bt(E?'<div class="sheet"></div>':'<div class="modal"></div>');E&&g.appendChild(Bt('<div class="sheet-grab"></div>')),g.insertAdjacentHTML("beforeend",s),h.appendChild(g),d.appendChild(h),document.body.style.overflow="hidden";const T=()=>{h.remove(),document.body.style.overflow="",document.removeEventListener("keydown",y)},y=$=>{$.key==="Escape"&&T()};return h.addEventListener("mousedown",$=>{$.target===h&&T()}),document.addEventListener("keydown",y),g.querySelectorAll("[data-close]").forEach($=>$.addEventListener("click",T)),r.onMount&&r.onMount(g,T),T}const ar=["喜餅選購","婚宴行程表","儀式準備清單","婚紗拍攝清單","其他"];function mt(s,r){const d=s?S("SELECT * FROM todos WHERE id=?",[s]):{},E=`
    <div class="modal-head">
      <div class="mh-title">${L("clipboard-list",20)}<div><b>${s?"編輯待辦":"新增待辦"}</b><span>近期待辦事項</span></div></div>
      <button class="modal-close" data-close>${L("x",18)}</button>
    </div>
    <div class="modal-body form-body">
      <div class="field"><label>待辦標題</label><input class="input" id="t-title" value="${p(d.title||"")}" placeholder="輸入待辦事項…"></div>
      <div class="two-col">
        <div class="field"><label>所屬項目</label>
          <select class="select" id="t-module">
            <option value="">未分類</option>
            ${ar.map(h=>`<option ${d.module===h?"selected":""}>${p(h)}</option>`).join("")}
          </select></div>
        <div class="field"><label>到期日</label><input class="input" type="date" id="t-due" value="${p(d.due_date||"")}"></div>
      </div>
      <div class="done-row" id="t-done-row"><span class="checkbox ${d.done?"checked":""}" id="t-done">${L("check",14)}</span>標記為已完成</div>
    </div>
    <div class="modal-foot form-foot">
      ${s?`<button class="btn btn-ghost" id="t-del">${L("trash",16)} 刪除</button>`:""}
      <button class="btn btn-ghost" data-close>取消</button>
      <button class="btn btn-primary" id="t-save">${L("check",16)} 儲存</button>
    </div>`;Ie(E,{onMount(h,g){const T=h.querySelector("#t-done");h.querySelector("#t-done-row").addEventListener("click",()=>T.classList.toggle("checked"));const y=h.querySelector("#t-del");y&&y.addEventListener("click",async()=>{await P("DELETE FROM todos WHERE id=?",[s]),g(),r&&r()}),h.querySelector("#t-save").addEventListener("click",async()=>{const $=h.querySelector("#t-title").value.trim();if(!$){h.querySelector("#t-title").focus();return}const o=h.querySelector("#t-module").value||null,b=h.querySelector("#t-due").value||null,f=T.classList.contains("checked")?1:0;if(s)await P("UPDATE todos SET title=?, module=?, due_date=?, done=? WHERE id=?",[$,o,b,f,s]);else{const u=(S("SELECT MAX(sort_order) m FROM todos").m||0)+1;await Ye("INSERT INTO todos (title, module, due_date, done, sort_order) VALUES (?,?,?,?,?)",[$,o,b,f,u])}g(),r&&r()})}})}async function Ts(s){const r=S("SELECT done FROM todos WHERE id=?",[s]).done;await P("UPDATE todos SET done=? WHERE id=?",[r?0:1,s])}function ns(s){const r=$s(s.due_date);return`
    <div class="todo-row ${s.done?"done":""}" data-id="${s.id}">
      <span class="todo-circle ${s.done?"checked":""}" data-toggle="${s.id}">${s.done?L("check",13):""}</span>
      <div class="todo-body"><b>${p(s.title)}</b><span>${p(s.module||"未分類")}${s.due_date?" · "+p(Zn(s.due_date)):""}</span></div>
      ${r&&!s.done?`<span class="chip ${r.kind}">${r.text}</span>`:""}
      ${L("chevron-right",16)}
    </div>`}function Ns(s){const r=K("SELECT * FROM todos WHERE done=0 ORDER BY (due_date IS NULL), due_date, sort_order"),d=K("SELECT * FROM todos WHERE done=1 ORDER BY due_date, sort_order"),E=()=>Ns(s);s.innerHTML=`
    <div class="topbar">
      <div><h1>待辦事項</h1><div class="sub">未完成 ${r.length} · 已完成 ${d.length}</div></div>
      <div class="topbar-actions"><button class="btn btn-primary" id="todo-add">${L("plus",16)} 新增待辦</button></div>
    </div>
    <div class="card card-pad">
      <div class="card-head"><h3 class="section-title">未完成</h3></div>
      <div class="todo-list">${r.length?r.map(ns).join(""):'<div class="state"><p>目前沒有待辦事項 🎉</p></div>'}</div>
    </div>
    ${d.length?`
    <div class="card card-pad" style="margin-top:16px">
      <div class="card-head"><h3 class="section-title">已完成 (${d.length})</h3></div>
      <div class="todo-list">${d.map(ns).join("")}</div>
    </div>`:""}`,s.querySelector("#todo-add").addEventListener("click",()=>mt(null,E)),s.querySelectorAll("[data-toggle]").forEach(h=>h.addEventListener("click",async g=>{g.stopPropagation(),await Ts(Number(h.dataset.toggle)),E()})),s.querySelectorAll(".todo-row").forEach(h=>h.addEventListener("click",g=>{g.target.closest("[data-toggle]")||mt(Number(h.dataset.id),E)}))}function sr(){const s=S("SELECT COUNT(*) n FROM cake_shops").n,r=S("SELECT COUNT(*) n FROM cake_shops WHERE tried=1").n,d=S("SELECT SUM(done) d, COUNT(*) t FROM schedule_events WHERE enabled=1"),E=S("SELECT SUM(done) d, COUNT(*) t FROM checklist_items WHERE module='ceremony'"),h=S("SELECT SUM(done) d, COUNT(*) t FROM checklist_items WHERE module='photo'"),g=S("SELECT SUM(CASE WHEN TRIM(COALESCE(assignee,''))<>'' THEN 1 ELSE 0 END) d, COUNT(*) t FROM staff_roles");return[{key:"cake",title:"喜餅選購",icon:"cake",done:r,total:s,sub:`已比較 ${r} / ${s} 家`},{key:"schedule",title:"婚宴行程表",icon:"calendar-clock",done:d.d||0,total:d.t||0,sub:`流程確認 ${d.d||0} / ${d.t||0}`},{key:"ceremony",title:"儀式準備清單",icon:"clipboard-list",done:E.d||0,total:E.t||0,sub:`已完成 ${E.d||0} / ${E.t||0}`},{key:"photo",title:"婚紗拍攝清單",icon:"camera",done:h.d||0,total:h.t||0,sub:`已完成 ${h.d||0} / ${h.t||0}`},{key:"staff",title:"現場人員",icon:"users",done:g.d||0,total:g.t||0,sub:`已指派 ${g.d||0} / ${g.t||0}`}]}function nr(s){const d=2*Math.PI*52,E=d*(1-s/100);return`
  <div class="hero-ring">
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="12"/>
      <circle cx="60" cy="60" r="52" fill="none" stroke="var(--on-accent)" stroke-width="12"
        stroke-linecap="round" stroke-dasharray="${d}" stroke-dashoffset="${E}"
        transform="rotate(-90 60 60)"/>
    </svg>
    <div class="hero-ring-label"><b>${s}%</b><span>整體完成</span></div>
  </div>`}function _s(s){const r=S("SELECT * FROM couple_info WHERE id=1")||{},d=sr(),E=d.reduce((u,U)=>u+U.done,0),h=d.reduce((u,U)=>u+U.total,0),g=as(E,h),T=ws(r.wedding_date),y=K("SELECT * FROM todos WHERE done=0 ORDER BY due_date LIMIT 5"),$=gs(),o=d.map(u=>{const U=as(u.done,u.total),O=U>=100?["success","完成"]:U>0?["gold","進行中"]:["accent","待處理"];return`
      <a class="card card-pad module-card" href="#/${u.key}">
        <div class="mc-head">
          <div class="mc-icon">${L(u.icon,22)}</div>
          <div class="mc-title"><b>${u.title}</b><span>${p(u.sub)}</span></div>
          <div class="mc-pct">${U}%</div>
        </div>
        <div class="track"><div class="fill" style="width:${U}%"></div></div>
        <div class="mc-foot">
          <span class="chip ${O[0]}"><span class="dot" style="background:currentColor"></span>${O[1]}</span>
          <span class="mc-view">查看 ${L("chevron-right",15)}</span>
        </div>
      </a>`}).join(""),b=y.length?y.map(u=>{const U=$s(u.due_date);return`
        <div class="todo-row" data-id="${u.id}">
          <span class="todo-circle" data-toggle="${u.id}"></span>
          <div class="todo-body"><b>${p(u.title)}</b><span>${p(u.module||"")}</span></div>
          ${U?`<span class="chip ${U.kind}">${U.text}</span>`:""}
          ${L("chevron-right",16)}
        </div>`}).join(""):'<div class="state"><p>目前沒有待辦事項 🎉</p></div>';s.innerHTML=`
    <div class="topbar">
      <div>
        <h1>籌備進度總覽</h1>
        <div class="sub">${p(r.wedding_date||"")} · ${p(r.lunar_date||"")}</div>
      </div>
      <div class="topbar-actions desktop-only">
        <button class="btn btn-primary" id="quick-add-todo">${L("plus",16)} 快速新增待辦</button>
        <div class="avatar">${p((r.bride_name||"")[0]||"")}</div>
      </div>
    </div>

    <div class="hero">
      ${nr(g)}
      <div class="hero-mid">
        <h2>整體籌備完成度</h2>
        <p>${d.length} 大項目 · ${E} / ${h} 項已完成</p>
      </div>
      <div class="hero-vline"></div>
      <div class="hero-countdown">
        <span>距離婚禮還有</span>
        <b>${T??"—"} 天</b>
        <span>${(r.wedding_date||"").replaceAll("-"," / ")}</span>
      </div>
    </div>

    <div class="grid module-grid">${o}</div>

    <div class="grid bottom-grid">
      <div class="card card-pad">
        <div class="card-head"><h3 class="section-title">近期待辦事項</h3><a href="#/todos" class="link-accent">查看全部 →</a></div>
        <div class="todo-list">${b}</div>
      </div>
      <div class="card card-pad db-card">
        <div class="card-head">
          <h3 class="section-title">${L("database",18)} 資料儲存</h3>
          <span class="chip success"><span class="dot success"></span>已同步</span>
        </div>
        <p class="muted db-desc">所有清單勾選狀態與設定，皆自動儲存於本機 SQLite 資料庫，離線也能編輯。</p>
        <div class="stat-grid">
          <div class="stat-tile"><span>設定筆數</span><b>${$.settings}</b></div>
          <div class="stat-tile"><span>資料項目</span><b>${$.items}</b></div>
          <div class="stat-tile"><span>資料庫大小</span><b>${$.sizeMB} MB</b></div>
          <div class="stat-tile"><span>同步狀態</span><b>已完成</b></div>
        </div>
        <a href="#/settings" class="btn btn-primary btn-block">${L("download",16)} 前往資料管理</a>
      </div>
    </div>`;const f=()=>_s(s);s.querySelector("#quick-add-todo")?.addEventListener("click",()=>mt(null,f)),s.querySelectorAll("[data-toggle]").forEach(u=>u.addEventListener("click",async U=>{U.stopPropagation(),await Ts(Number(u.dataset.toggle)),f()})),s.querySelectorAll(".todo-row").forEach(u=>u.addEventListener("click",U=>{U.target.closest("[data-toggle]")||mt(Number(u.dataset.id),f)}))}const Yt={首選:"gold",候選:"accent",觀望:"muted"},rr=["法式","日系","台式"],Xt=s=>p(s||"").replace(/⚠([^，。；）]+)/g,'<span class="warn">⚠$1</span>');let ut="全部",zt=null;const Us=s=>K("SELECT * FROM cake_shop_images WHERE shop_id=? ORDER BY sort_order",[s]),Et=s=>K("SELECT * FROM cake_shop_items WHERE shop_id=? ORDER BY sort_order",[s]);function la(s){zt=s;const r=K("SELECT * FROM cake_shops ORDER BY (shortlist_rank IS NULL), shortlist_rank, sort_order"),d=ut==="全部"?r:r.filter(o=>(o.category||"")===ut),E=r.filter(o=>o.tried).length,h=r.filter(o=>o.shortlist_rank!=null),g=["全部","法式","日系","台式"].map(o=>`<button class="pill ${ut===o?"active":""}" data-filter="${o}">${o}</button>`).join(""),T=d.map(o=>`
    <div class="ct-row" data-shop="${o.id}">
      <div class="ct-cell ct-name"><b>${p(o.name)}</b><span>${p(o.area||"")}</span></div>
      <div class="ct-cell ct-flag">${p((Et(o.id)[0]||{}).name||"—")}</div>
      <div class="ct-cell ct-price">${p(o.price||"")}</div>
      <div class="ct-cell ct-rate">${L("star",15)} ${o.rating??"—"}</div>
      <div class="ct-cell"><span class="chip ${o.tried?"success":"muted"}">${o.tried?"已試吃":"未安排"}</span></div>
      <div class="ct-cell"><span class="chip ${Yt[o.status]}">${p(o.status)}</span></div>
      ${L("chevron-right",16)}
    </div>`).join(""),y=d.map(o=>`
    <div class="shop-card" data-shop="${o.id}">
      <div class="sc-top">
        <div class="sc-name"><b>${p(o.name)}</b><span>${p(o.area||"")}</span></div>
        <span class="chip ${Yt[o.status]}">${p(o.status)}</span>
      </div>
      <div class="sc-flag">${p((Et(o.id)[0]||{}).name||"")}</div>
      <div class="sc-bottom">
        <b class="sc-price">${p(o.price||"")}</b>
        <div class="sc-meta"><span class="sc-rate">${L("star",14)} ${o.rating??"—"}</span>
          <span class="chip ${o.tried?"success":"muted"}">${o.tried?"已試吃":"未安排"}</span></div>
      </div>
    </div>`).join(""),$=h.length?h.map((o,b)=>`
      <div class="pick-row" data-shop="${o.id}">
        <span class="pick-rank">${b+1}</span>
        <b class="pick-name">${p(o.name)}</b>
        <span class="pick-price">${p(o.price||"")}</span>
        <span class="sc-rate">${L("star",14)} ${o.rating??"—"}</span>
      </div>`).join(""):'<div class="state"><p>尚未加入任何店家，點店家詳情可加入。</p></div>';s.innerHTML=`
    <div class="topbar">
      <div><h1>喜餅選購</h1><div class="sub">已比較 ${E} / ${r.length} 家 · 依評分排序</div></div>
      <div class="topbar-actions">
        <button class="btn btn-primary" id="add-shop">${L("plus",16)} 新增店家</button>
      </div>
    </div>
    <div class="pill-row">${g}</div>

    <div class="card ct-wrap desktop-only">
      <div class="ct-row ct-head">
        <div class="ct-cell ct-name">店家</div><div class="ct-cell ct-flag">招牌品項</div>
        <div class="ct-cell ct-price">價位 / 盒</div><div class="ct-cell ct-rate">評分</div>
        <div class="ct-cell">試吃</div><div class="ct-cell">狀態</div><span style="width:16px"></span>
      </div>
      ${T||'<div class="state"><p>沒有符合條件的店家</p></div>'}
    </div>

    <div class="shop-cards mobile-only">${y||'<div class="state"><p>沒有符合條件的店家</p></div>'}</div>

    <div class="card card-pad">
      <div class="card-head"><h3 class="section-title">口袋名單</h3><span class="muted">已列入 ${h.length} 家</span></div>
      <div class="pick-list">${$}</div>
    </div>`,s.querySelectorAll("[data-filter]").forEach(o=>o.addEventListener("click",()=>{ut=o.dataset.filter,la(s)})),s.querySelectorAll("[data-shop]").forEach(o=>o.addEventListener("click",()=>or(Number(o.dataset.shop)))),s.querySelector("#add-shop").addEventListener("click",()=>ks(null))}function Qt(){zt&&la(zt)}function or(s){const r=S("SELECT * FROM cake_shops WHERE id=?",[s]);if(!r)return;const d=Us(s),E=Et(s),h=r.shortlist_rank!=null,g=d.length?`<div class="gallery">
        <div class="gallery-scroll">
          ${d.map(b=>`<div class="gphoto" style="background-image:url('${p(b.path)}')"><div class="gcap">${p(b.caption||"")}</div></div>`).join("")}
        </div>
        <div class="gcount">共 ${d.length} 張款式 · 左右滑動瀏覽</div>
      </div>`:"",T=E.map(b=>`<div class="sig-row"><span>${p(b.name)}</span><b>${p(b.price||"")}</b></div>`).join(""),y=(b,f,u="",U="")=>f?`<div class="sec${u}"><label>${b}</label><p class="${U}">${Xt(f)}</p></div>`:"",$=r.map_url||`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.address||r.name)}`,o=`
    <button class="modal-close gallery-close" data-close>${L("x",18)}</button>
    ${g}
    <div class="modal-body">
      <div class="detail-head">
        <div><span class="chip ${Yt[r.status]}">${p(r.status)}</span>
          <h2 class="serif" style="margin:8px 0 2px">${p(r.name)}</h2>
          ${r.full_name?`<div class="muted" style="font-size:.76rem">${p(r.full_name)}</div>`:""}
          <div class="muted" style="font-size:.82rem;margin-top:2px">${p(r.area||"")}${r.category?" · "+p(r.category):""}</div>
          ${r.rating_text?`<div class="rate-tag">${L("info",13)} ${p(r.rating_text)}</div>`:""}
        </div>
        ${r.rating!=null?`<div class="rate-box">${L("star",17)} <b>${r.rating}</b></div>`:""}
      </div>
      ${y("特色",r.features)}
      ${E.length?`<div class="sec"><label>招牌品項</label>${T}</div>`:""}
      ${y("優點",r.pros,"","pros")}
      ${y("缺點",r.cons,"","cons")}
      ${y("價位",r.price_detail||r.price)}
      ${y("包裝／盒面設計",r.packaging)}
      ${y("訂購優惠方案",r.promo_plan)}
      ${y("訂購限時優惠",r.promo_limited)}
      ${y("預約方式",r.booking)}
      ${y("試吃費用／優惠",r.tasting)}
      ${y("網路評論（2025+）",r.review," fresh")}
      ${y("最新方案（2025+）",r.latest_plan," fresh")}
      <div class="info-rows">
        ${r.address?`<div class="info-row">${L("map-pin",16)}<span>${Xt(r.address)}</span><a class="link-btn" target="_blank" href="${p($)}">開啟地圖</a></div>`:""}
        ${r.phone?`<div class="info-row">${L("phone",16)}<span>${p(r.phone)}</span><a class="link-btn" href="tel:${p(r.phone)}">撥打</a></div>`:""}
        ${r.hours?`<div class="info-row">${L("timer",16)}<span>${Xt(r.hours)}</span></div>`:""}
      </div>
      <div class="modal-foot">
        <button class="btn btn-ghost" id="edit-shop">${L("sliders",16)} 編輯</button>
        <button class="btn btn-primary btn-block" id="toggle-pick">${L("star",16)} ${h?"移出口袋名單":"加入口袋名單"}</button>
      </div>
    </div>`;Ie(o,{onMount(b,f){b.querySelector("#edit-shop").addEventListener("click",()=>{f(),ks(s)}),b.querySelector("#toggle-pick").addEventListener("click",async()=>{if(h)await P("UPDATE cake_shops SET shortlist_rank=NULL WHERE id=?",[s]);else{const u=S("SELECT MAX(shortlist_rank) m FROM cake_shops").m||0;await P("UPDATE cake_shops SET shortlist_rank=? WHERE id=?",[u+1,s])}f(),Qt()})}})}function ks(s){const r=s?S("SELECT * FROM cake_shops WHERE id=?",[s]):{},d=s?Et(s):[],E=s?Us(s):[],h=(b={})=>`
    <div class="photo-row">
      <div class="thumb" style="background-image:url('${p(b.path||"")}')"></div>
      <div class="photo-fields">
        <input class="input p-cap" placeholder="款式說明" value="${p(b.caption||"")}">
        <input class="input p-path" placeholder="images/shopX_1.jpg" value="${p(b.path||"")}">
      </div>
      <button class="icon-btn row-del" type="button">${L("trash",15)}</button>
    </div>`,g=(b={})=>`
    <div class="item-row">
      <input class="input i-name" placeholder="品項名稱" value="${p(b.name||"")}">
      <input class="input i-price" placeholder="NT$" value="${p(b.price||"")}" style="width:110px">
      <button class="icon-btn row-del" type="button">${L("trash",15)}</button>
    </div>`,T=["首選","候選","觀望"].map(b=>`<button type="button" class="seg-btn ${(r.status||"觀望")===b?"active":""}" data-st="${b}">${b}</button>`).join(""),y=[[1,"已試吃"],[0,"未安排"]].map(([b,f])=>`<button type="button" class="seg-btn ${(r.tried?1:0)===b?"active":""}" data-tried="${b}">${f}</button>`).join(""),$=["",...rr].map(b=>`<option value="${p(b)}" ${(r.category||"")===b?"selected":""}>${b||"（未分類）"}</option>`).join(""),o=`
    <div class="modal-head">
      <div class="mh-title">${L("store",20)}<div><b>${s?"編輯店家":"新增店家"}</b><span>新增與編輯共用此表單</span></div></div>
      <button class="modal-close" data-close>${L("x",18)}</button>
    </div>
    <div class="modal-body form-body">
      <label class="sec-label">基本資料</label>
      <div class="field"><label>店家名稱（側欄短名）</label><input class="input" id="f-name" value="${p(r.name||"")}" placeholder="輸入店家名稱"></div>
      <div class="field"><label>正式全名</label><input class="input" id="f-fullname" value="${p(r.full_name||"")}" placeholder="正式商號全名（選填）"></div>
      <div class="field"><label>副標</label><input class="input" id="f-sub" value="${p(r.sub||"")}" placeholder="例：法式手工喜餅 ｜ 約 NT$740–1,380"></div>
      <div class="two-col">
        <div class="field"><label>地區</label><input class="input" id="f-area" value="${p(r.area||"")}" placeholder="台中 · 西區"></div>
        <div class="field"><label>分類</label><select class="select" id="f-cat">${$}</select></div>
      </div>

      <label class="sec-label">店家照片（可多張 · 路徑）</label>
      <div class="photo-rows" id="photo-rows">${E.map(h).join("")}</div>
      <button type="button" class="btn btn-outline btn-block" id="add-photo">${L("image-plus",16)} 新增照片</button>
      <p class="hint">照片以路徑儲存（對應專案 images/ 目錄），每張可加款式說明。</p>

      <label class="sec-label">特色與詳細</label>
      <div class="field"><label>特色</label><textarea class="input" id="f-features" placeholder="店家特色、招牌口味…">${p(r.features||"")}</textarea></div>
      <div class="two-col">
        <div class="field"><label>優點</label><textarea class="input" id="f-pros" placeholder="優點">${p(r.pros||"")}</textarea></div>
        <div class="field"><label>缺點</label><textarea class="input" id="f-cons" placeholder="缺點">${p(r.cons||"")}</textarea></div>
      </div>
      <div class="field"><label>包裝／盒面設計</label><textarea class="input" id="f-packaging" placeholder="包裝設計…">${p(r.packaging||"")}</textarea></div>
      <div class="field"><label>訂購優惠方案</label><textarea class="input" id="f-promo" placeholder="盒數折扣、贈品…">${p(r.promo_plan||"")}</textarea></div>
      <div class="field"><label>訂購限時優惠</label><textarea class="input" id="f-promolimited" placeholder="檔期限時優惠…">${p(r.promo_limited||"")}</textarea></div>
      <div class="field"><label>預約方式</label><textarea class="input" id="f-booking" placeholder="電話、LINE、官網…">${p(r.booking||"")}</textarea></div>
      <div class="field"><label>試吃費用／優惠</label><textarea class="input" id="f-tasting" placeholder="試吃費用與折抵…">${p(r.tasting||"")}</textarea></div>
      <div class="field"><label>網路評論（2025+）</label><textarea class="input" id="f-review" placeholder="口碑整理…">${p(r.review||"")}</textarea></div>
      <div class="field"><label>最新方案（2025+）</label><textarea class="input" id="f-latest" placeholder="最新檔期方案…">${p(r.latest_plan||"")}</textarea></div>

      <label class="sec-label">招牌品項</label>
      <div class="item-rows" id="item-rows">${d.map(g).join("")}</div>
      <button type="button" class="btn btn-outline btn-block" id="add-item">${L("plus",15)} 新增品項</button>

      <label class="sec-label">聯絡與評價</label>
      <div class="field"><label>地址</label><input class="input" id="f-addr" value="${p(r.address||"")}"></div>
      <div class="two-col">
        <div class="field"><label>電話</label><input class="input" id="f-phone" value="${p(r.phone||"")}"></div>
        <div class="field"><label>營業時間</label><input class="input" id="f-hours" value="${p(r.hours||"")}"></div>
      </div>
      <div class="field"><label>Google 地圖連結</label><input class="input" id="f-map" value="${p(r.map_url||"")}" placeholder="留空自動以地址搜尋"></div>
      <div class="two-col">
        <div class="field"><label>價位（區間）</label><input class="input" id="f-price" value="${p(r.price||"")}" placeholder="約 NT$580–980"></div>
        <div class="field"><label>評分（數字）</label><input class="input" id="f-rating" value="${r.rating??""}" placeholder="4.9（選填）"></div>
      </div>
      <div class="field"><label>價位詳述</label><textarea class="input" id="f-pricedetail" placeholder="各款式定價說明…">${p(r.price_detail||"")}</textarea></div>
      <div class="field"><label>評分文字</label><input class="input" id="f-ratingtext" value="${p(r.rating_text||"")}" placeholder="WeddingDay 4.9★"></div>
      <div class="two-col">
        <div class="field"><label>狀態</label><div class="seg" id="f-seg">${T}</div></div>
        <div class="field"><label>試吃狀態</label><div class="seg" id="f-tried">${y}</div></div>
      </div>
    </div>
    <div class="modal-foot form-foot">
      ${s?`<button class="btn btn-ghost" id="del-shop">${L("trash",16)} 刪除</button>`:""}
      <button class="btn btn-ghost" data-close>取消</button>
      <button class="btn btn-primary" id="save-shop">${L("check",16)} 儲存店家</button>
    </div>`;Ie(o,{onMount(b,f){const u=b.querySelector("#photo-rows"),U=b.querySelector("#item-rows"),O=M=>M.querySelectorAll(".row-del").forEach(G=>{G._w||(G._w=1,G.addEventListener("click",()=>G.closest(".photo-row, .item-row").remove()))});O(u),O(U),b.querySelector("#add-photo").addEventListener("click",()=>{u.insertAdjacentHTML("beforeend",h()),O(u)}),b.querySelector("#add-item").addEventListener("click",()=>{U.insertAdjacentHTML("beforeend",g()),O(U)}),u.addEventListener("input",M=>{M.target.classList.contains("p-path")&&(M.target.closest(".photo-row").querySelector(".thumb").style.backgroundImage=`url('${M.target.value}')`)}),b.querySelector("#f-seg").addEventListener("click",M=>{const G=M.target.closest(".seg-btn");G&&(b.querySelectorAll("#f-seg .seg-btn").forEach(Y=>Y.classList.remove("active")),G.classList.add("active"))}),b.querySelector("#f-tried").addEventListener("click",M=>{const G=M.target.closest(".seg-btn");G&&(b.querySelectorAll("#f-tried .seg-btn").forEach(Y=>Y.classList.remove("active")),G.classList.add("active"))});const Z=b.querySelector("#del-shop");Z&&Z.addEventListener("click",async()=>{await P("DELETE FROM cake_shops WHERE id=?",[s]),f(),Qt()}),b.querySelector("#save-shop").addEventListener("click",async()=>{const M=x=>b.querySelector(x).value.trim(),G=M("#f-name");if(!G){b.querySelector("#f-name").focus();return}const Y=b.querySelector("#f-seg .seg-btn.active")?.dataset.st||"觀望",be=Number(b.querySelector("#f-tried .seg-btn.active")?.dataset.tried||0),ke=parseFloat(M("#f-rating"))||null,Se=[G,M("#f-fullname"),M("#f-sub"),M("#f-area"),M("#f-cat"),M("#f-features"),M("#f-pros"),M("#f-cons"),M("#f-hours"),M("#f-packaging"),M("#f-promo"),M("#f-promolimited"),M("#f-booking"),M("#f-tasting"),M("#f-review"),M("#f-latest"),M("#f-addr"),M("#f-phone"),M("#f-map"),M("#f-price"),M("#f-pricedetail"),ke,M("#f-ratingtext"),Y,be],B="name,full_name,sub,area,category,features,pros,cons,hours,packaging,promo_plan,promo_limited,booking,tasting,review,latest_plan,address,phone,map_url,price,price_detail,rating,rating_text,status,tried";let X=s;if(s){const x=B.split(",").map(q=>`${q}=?`).join(",");await P(`UPDATE cake_shops SET ${x},updated_at=datetime('now') WHERE id=?`,[...Se,s])}else{const x=B.split(",").map(()=>"?").join(",");X=await Ye(`INSERT INTO cake_shops (${B}) VALUES (${x})`,Se)}await P("DELETE FROM cake_shop_items WHERE shop_id=?",[X]);let le=0;for(const x of U.querySelectorAll(".item-row")){const q=x.querySelector(".i-name").value.trim();q&&await P("INSERT INTO cake_shop_items (shop_id,name,price,sort_order) VALUES (?,?,?,?)",[X,q,x.querySelector(".i-price").value.trim(),++le])}await P("DELETE FROM cake_shop_images WHERE shop_id=?",[X]),le=0;for(const x of u.querySelectorAll(".photo-row")){const q=x.querySelector(".p-path").value.trim();q&&await P("INSERT INTO cake_shop_images (shop_id,path,caption,sort_order) VALUES (?,?,?,?)",[X,q,x.querySelector(".p-cap").value.trim(),++le])}f(),Qt()})}})}let Kt=null;const ir=s=>({新娘:"bride","新郎／伴郎":"groom",男方家人:"family",新人:"couple"})[s]||"other",jt=(s,r)=>{const d=S("SELECT value FROM app_settings WHERE key=?",[s]);return d?d.value:r};function Ss(s){Kt=s;const r=S("SELECT * FROM couple_info WHERE id=1")||{},d=jt("schedule.show_disabled","1")==="1";let E=K("SELECT * FROM schedule_events ORDER BY time, sort_order, id");d||(E=E.filter(y=>y.enabled));const h=S("SELECT SUM(done) d, COUNT(*) t FROM schedule_events WHERE enabled=1"),g=[];for(const y of E){let $=g.find(o=>o.name===y.phase);$||($={name:y.phase,en:y.phase_en,items:[]},g.push($)),$.items.push(y)}const T=g.map(y=>`
    <div class="phase-head"><span class="pdot"></span><b>${p(y.name)}</b><span class="en">${p(y.en||"")}</span><span class="pline"></span></div>
    ${y.items.map($=>{const o=$.enabled?$.done?"done":"pending":"off";return`
      <div class="tl-item ${o==="off"?"off":""}">
        <div class="tl-time">${p($.time)}</div>
        <div class="tl-rail"><span class="rdot" style="background:${o==="done"?"var(--success)":o==="off"?"var(--muted)":"var(--gold)"}"></span><span class="rline"></span></div>
        <div class="tl-card ${o}" data-ev="${$.id}">
          <div class="tl-title"><span class="t">${p($.title)}</span><span class="rtag ${ir($.role)}">${p($.role||"")}</span></div>
          ${$.enabled?`<span class="checkbox ${$.done?"checked":""}" data-toggle="${$.id}">${L("check",14)}</span>`:'<span class="chip muted">已停用</span>'}
          ${L("chevron-right",16)}
        </div>
      </div>`}).join("")}`).join("");s.innerHTML=`
    <div class="topbar">
      <div><h1>婚宴當天流程</h1><div class="sub">${p(r.wedding_date||"")} · 流程確認 ${h.d||0} / ${h.t||0}</div></div>
      <div class="topbar-actions">
        <button class="btn btn-ghost desktop-only">${L("file-down",16)} 匯出 PDF</button>
        <button class="btn btn-primary" id="add-ev">${L("plus",16)} 新增流程</button>
      </div>
    </div>
    <div class="sched-cols">
      <div class="card card-pad"><div class="timeline">${T||'<div class="state"><p>目前沒有流程，點右上「新增流程」開始安排。</p></div>'}</div></div>
      <div class="card card-pad info-panel">
        <div class="card-head"><h3 class="section-title">${L("info",18)} 當日關鍵資訊</h3></div>
        <div class="info-list">
          ${pt("calendar","婚期",r.wedding_date||"")}
          ${pt("map-pin","宴客地點",r.venue||"")}
          ${pt("calendar-clock","啟用流程",`${h.t||0} 項`)}
          ${pt("circle-check","已完成",`${h.d||0} 項`)}
        </div>
        <div class="nav-divider"></div>
        <label class="sec-label">流程設定</label>
        <div class="set-row"><span>顯示已停用項目</span><span class="toggle ${d?"on":""}" data-set="schedule.show_disabled"><span class="knob"></span></span></div>
        <div class="set-row"><span>顯示農曆時辰</span><span class="toggle ${jt("schedule.show_lunar_time","1")==="1"?"on":""}" data-set="schedule.show_lunar_time"><span class="knob"></span></span></div>
      </div>
    </div>`,s.querySelector("#add-ev").addEventListener("click",()=>rs(null)),s.querySelectorAll(".tl-card").forEach(y=>y.addEventListener("click",$=>{$.target.closest("[data-toggle]")||rs(Number(y.dataset.ev))})),s.querySelectorAll("[data-toggle]").forEach(y=>y.addEventListener("click",async $=>{$.stopPropagation();const o=Number(y.dataset.toggle),b=S("SELECT done FROM schedule_events WHERE id=?",[o]).done;await P("UPDATE schedule_events SET done=? WHERE id=?",[b?0:1,o]),Lt()})),s.querySelectorAll("[data-set]").forEach(y=>y.addEventListener("click",async()=>{const $=y.dataset.set,o=jt($,"1")==="1";await P("INSERT INTO app_settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",[$,o?"0":"1"]),Lt()}))}function pt(s,r,d){return`<div class="ir"><div class="ir-ic">${L(s,16)}</div><div><span>${p(r)}</span><b>${p(d)}</b></div></div>`}function Lt(){Kt&&Ss(Kt)}function rs(s){const r=s?S("SELECT * FROM schedule_events WHERE id=?",[s]):{enabled:1,done:0};if(!r)return;const d=K("SELECT phase, MIN(time) t FROM schedule_events WHERE TRIM(COALESCE(phase,''))<>'' GROUP BY phase ORDER BY t").map(T=>T.phase),E=K("SELECT DISTINCT role FROM schedule_events WHERE TRIM(COALESCE(role,''))<>'' ORDER BY role").map(T=>T.role),h=[["","不提醒"],["10","10 分鐘前"],["15","15 分鐘前"],["30","30 分鐘前"],["60","60 分鐘前"]],g=`
    <div class="modal-head">
      <div class="mh-title">${L("calendar-clock",20)}<div><b>${s?"編輯流程":"新增流程"}</b><span>婚宴當天流程</span></div></div>
      <button class="modal-close" data-close>${L("x",18)}</button>
    </div>
    <div class="modal-body form-body">
      <div class="two-col">
        <div class="field"><label>時間</label><input class="input" id="e-time" type="time" value="${p(r.time||"")}"></div>
        <div class="field"><label>階段</label><input class="input" id="e-phase" list="e-phases" value="${p(r.phase||"")}" placeholder="迎娶 / 宴客…">
          <datalist id="e-phases">${d.map(T=>`<option value="${p(T)}">`).join("")}</datalist></div>
      </div>
      <div class="field"><label>流程名稱</label><input class="input" id="e-title" value="${p(r.title||"")}" placeholder="例如：新人進場"></div>
      <div class="field"><label>對象</label><input class="input" id="e-role" list="e-roles" value="${p(r.role||"")}" placeholder="例如：新人 · 雙方家長">
        <datalist id="e-roles">${E.map(T=>`<option value="${p(T)}">`).join("")}</datalist></div>
      <div class="field"><label>流程說明</label><textarea class="input" id="e-desc" placeholder="這個流程要做什麼、注意事項…">${p(r.description||"")}</textarea></div>
      <div class="nav-divider"></div>
      <div class="set-row big"><div><b>啟用此流程</b><small>關閉後此流程將從當天流程中隱藏。</small></div>
        <span class="toggle ${r.enabled?"on":""}" id="t-enabled"><span class="knob"></span></span></div>
      <div class="set-row"><span>提前提醒</span>
        <select class="select" id="t-remind" style="width:auto">
          ${h.map(([T,y])=>`<option value="${T}" ${String(r.reminder_minutes??"")===T?"selected":""}>${y}</option>`).join("")}
        </select></div>
      ${s?`<div class="done-row" id="t-done-row" style="margin-top:0"><span class="checkbox ${r.done?"checked":""}" id="t-done">${L("check",14)}</span>標記為已完成</div>`:""}
    </div>
    <div class="modal-foot form-foot">
      ${s?`<button class="btn btn-ghost" id="del-ev">${L("trash",16)} 刪除</button>`:""}
      <button class="btn btn-ghost" data-close>取消</button>
      <button class="btn btn-primary" id="save-ev">${L("check",16)} 儲存</button>
    </div>`;Ie(g,{onMount(T,y){const $=T.querySelector("#t-enabled");$.addEventListener("click",()=>$.classList.toggle("on"));const o=T.querySelector("#t-done");o&&T.querySelector("#t-done-row").addEventListener("click",()=>o.classList.toggle("checked"));const b=T.querySelector("#del-ev");b&&b.addEventListener("click",async()=>{await P("DELETE FROM schedule_events WHERE id=?",[s]),y(),Lt()}),T.querySelector("#save-ev").addEventListener("click",async()=>{const f=Y=>T.querySelector(Y).value.trim(),u=f("#e-time");if(!u){T.querySelector("#e-time").focus();return}const U=f("#e-title");if(!U){T.querySelector("#e-title").focus();return}const O=f("#e-phase")||"其他",Z=S("SELECT phase_en FROM schedule_events WHERE phase=? AND TRIM(COALESCE(phase_en,''))<>'' LIMIT 1",[O])?.phase_en??null,M=f("#t-remind"),G=[O,Z,u,U,f("#e-role")||null,f("#e-desc")||null,$.classList.contains("on")?1:0,M===""?null:Number(M)];if(s){const Y=o.classList.contains("checked")?1:0;await P("UPDATE schedule_events SET phase=?,phase_en=?,time=?,title=?,role=?,description=?,enabled=?,reminder_minutes=?,done=?,updated_at=datetime('now') WHERE id=?",[...G,Y,s])}else{const Y=(S("SELECT MAX(sort_order) m FROM schedule_events").m||0)+1;await Ye("INSERT INTO schedule_events (phase,phase_en,time,title,role,description,enabled,reminder_minutes,sort_order) VALUES (?,?,?,?,?,?,?,?,?)",[...G,Y])}y(),Lt()})}})}const Rs={ceremony:"儀式準備清單",photo:"婚紗拍攝清單"},lr=s=>({男方:"groom",女方:"bride",新郎:"groom",新娘:"bride",共同:"family"})[s]||"other",vt=s=>s==="photo"?["新郎","新娘","共同"]:["男方","女方","共同"],Gt=(s,r)=>{const d=S("SELECT value FROM app_settings WHERE key=?",[s]);return d?d.value:r},cr={ceremony:{tab:null,role:"全部"},photo:{tab:null,role:"全部"}},dr=s=>s!=="ceremony";let H="ceremony",Jt=null;function Ne(s,r){H=r,Jt=s;const d=cr[H],E=K("SELECT DISTINCT tab FROM checklist_items WHERE module=? ORDER BY sort_order",[H]).map(u=>u.tab),h=dr(H);(!d.tab||!E.includes(d.tab)&&!(h&&d.tab==="全部"))&&(d.tab=E[0]||"全部");const g=Gt(`${H}.hide_completed`,"0")==="1",T=Gt(`${H}.show_notes`,"1")==="1",y=S("SELECT SUM(done) d, COUNT(*) t FROM checklist_items WHERE module=?",[H]);let $=K("SELECT * FROM checklist_items WHERE module=? ORDER BY sort_order",[H]);d.tab!=="全部"&&($=$.filter(u=>u.tab===d.tab)),d.role!=="全部"&&($=$.filter(u=>u.role===d.role)),g&&($=$.filter(u=>!u.done));const o=[];for(const u of $){let U=o.find(O=>O.name===u.group_name);U||(U={name:u.group_name,items:[]},o.push(U)),U.items.push(u)}const b=(h?[...E,"全部"]:E).map(u=>`<button class="pill ${d.tab===u?"active":""}" data-tab="${p(u)}">${p(u)}</button>`).join(""),f=o.length?o.map(u=>{const U=u.items.filter(O=>O.done).length;return`
      <div class="grp">
        <div class="grp-head">${L("user",16)}<b>${p(u.name||"")}</b><span class="cnt">${U} / ${u.items.length} 完成</span></div>
        ${u.items.map(O=>`
          <div class="check-row ${O.done?"done":""}" data-item="${O.id}">
            <span class="checkbox ${O.done?"checked":""}" data-toggle="${O.id}">${L("check",14)}</span>
            <div class="body"><b>${p(O.title)}</b>${T&&O.note?`<span>${p(O.note)}</span>`:""}</div>
            ${O.tag?`<span class="rtag ${lr(O.role)}">${p(O.tag)}</span>`:""}
            ${L("chevron-right",16)}
          </div>`).join("")}
      </div>`}).join(""):ur();s.innerHTML=`
    <div class="topbar">
      <div><h1>${Rs[H]}</h1><div class="sub">已完成 ${y.d||0} / ${y.t||0} 項</div></div>
      <div class="topbar-actions"><button class="btn btn-primary" id="add-item">${L("plus",16)} 新增項目</button></div>
    </div>
    <div class="pill-row">${b}</div>
    <div class="sched-cols">
      <div class="check-list">${f}</div>
      <div class="card card-pad">
        <div class="card-head"><h3 class="section-title">${L("sliders",18)} 檢視與設定</h3></div>
        <div class="chip success" style="margin-bottom:12px"><span class="dot success"></span>變更即時寫入 SQLite</div>
        <label class="sec-label">顯示選項</label>
        <div class="set-row"><span>隱藏已完成項目</span><span class="toggle ${g?"on":""}" data-set="${H}.hide_completed"><span class="knob"></span></span></div>
        <div class="set-row"><span>顯示項目備註</span><span class="toggle ${T?"on":""}" data-set="${H}.show_notes"><span class="knob"></span></span></div>
        <div class="nav-divider"></div>
        <label class="sec-label">負責對象篩選</label>
        <div class="pill-row">${["全部",...vt(H)].map(u=>`<button class="pill sm ${d.role===u?"active":""}" data-role="${u}">${u}</button>`).join("")}</div>
      </div>
    </div>`,s.querySelectorAll("[data-tab]").forEach(u=>u.addEventListener("click",()=>{d.tab=u.dataset.tab,Ne(s,H)})),s.querySelectorAll("[data-role]").forEach(u=>u.addEventListener("click",()=>{d.role=u.dataset.role,Ne(s,H)})),s.querySelectorAll("[data-set]").forEach(u=>u.addEventListener("click",async()=>{const U=u.dataset.set,O=Gt(U,"0")==="1";await P("INSERT INTO app_settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",[U,O?"0":"1"]),Ne(s,H)})),s.querySelectorAll("[data-toggle]").forEach(u=>u.addEventListener("click",async U=>{U.stopPropagation();const O=Number(u.dataset.toggle),Z=S("SELECT done FROM checklist_items WHERE id=?",[O]).done;await P("UPDATE checklist_items SET done=? WHERE id=?",[Z?0:1,O]),Ne(s,H)})),s.querySelectorAll(".check-row").forEach(u=>u.addEventListener("click",U=>{U.target.closest("[data-toggle]")||is(Number(u.dataset.item))})),s.querySelector("#add-item").addEventListener("click",()=>is(null))}function ur(){return`<div class="card card-pad"><div class="state">
    <div class="state-icon" style="background:var(--accent-tint);color:var(--accent)">${L("clipboard-list",30)}</div>
    <h3>此分類尚無項目</h3><p>點右上「新增項目」開始建立你的準備清單。</p></div></div>`}function os(){Jt&&Ne(Jt,H)}function is(s){const r=s?S("SELECT * FROM checklist_items WHERE id=?",[s]):{},d=K("SELECT DISTINCT tab FROM checklist_items WHERE module=? ORDER BY sort_order",[H]).map(g=>g.tab),E=[["","不提醒"],["3","3 天前"],["7","7 天前"],["14","14 天前"]],h=`
    <div class="modal-head">
      <div class="mh-title">${L("clipboard-list",20)}<div><b>${s?"項目詳情":"新增項目"}</b><span>${Rs[H]}</span></div></div>
      <button class="modal-close" data-close>${L("x",18)}</button>
    </div>
    <div class="modal-body form-body">
      <div class="field"><label>項目名稱</label><input class="input" id="i-title" value="${p(r.title||"")}" placeholder="輸入項目名稱"></div>
      <div class="two-col">
        <div class="field"><label>分頁</label>
          <select class="select" id="i-tab">${d.map(g=>`<option ${r.tab===g?"selected":""}>${p(g)}</option>`).join("")}</select></div>
        <div class="field"><label>分組</label><input class="input" id="i-group" value="${p(r.group_name||(H==="ceremony"?"男方準備":"新娘造型"))}"></div>
      </div>
      <div class="two-col">
        <div class="field"><label>分類標籤</label><input class="input" id="i-tag" value="${p(r.tag||"")}" placeholder="聘禮 / 喜餅…"></div>
        <div class="field"><label>負責對象</label><div class="seg" id="i-role">
          ${vt(H).map(g=>`<button type="button" class="seg-btn ${(r.role||vt(H)[0])===g?"active":""}" data-r="${g}">${g}</button>`).join("")}
        </div></div>
      </div>
      <div class="field"><label>備註</label><textarea class="input" id="i-note" placeholder="輸入備註…">${p(r.note||"")}</textarea></div>
      <div class="two-col">
        <div class="field"><label>到期日</label><input class="input" type="date" id="i-due" value="${p(r.due_date||"")}"></div>
        <div class="field"><label>提前提醒</label><select class="select" id="i-remind">
          ${E.map(([g,T])=>`<option value="${g}" ${String(r.reminder_days??"")===g?"selected":""}>${T}</option>`).join("")}
        </select></div>
      </div>
      <div class="done-row" id="i-done-row"><span class="checkbox ${r.done?"checked":""}" id="i-done">${L("check",14)}</span>標記為已完成</div>
    </div>
    <div class="modal-foot form-foot">
      ${s?`<button class="btn btn-ghost" id="i-del">${L("trash",16)} 刪除</button>`:""}
      <button class="btn btn-ghost" data-close>取消</button>
      <button class="btn btn-primary" id="i-save">${L("check",16)} 儲存</button>
    </div>`;Ie(h,{onMount(g,T){g.querySelector("#i-role").addEventListener("click",o=>{const b=o.target.closest(".seg-btn");b&&(g.querySelectorAll("#i-role .seg-btn").forEach(f=>f.classList.remove("active")),b.classList.add("active"))});const y=g.querySelector("#i-done");g.querySelector("#i-done-row").addEventListener("click",()=>y.classList.toggle("checked"));const $=g.querySelector("#i-del");$&&$.addEventListener("click",async()=>{await P("DELETE FROM checklist_items WHERE id=?",[s]),T(),os()}),g.querySelector("#i-save").addEventListener("click",async()=>{const o=Z=>g.querySelector(Z).value.trim(),b=o("#i-title");if(!b){g.querySelector("#i-title").focus();return}const f=g.querySelector("#i-role .seg-btn.active")?.dataset.r||vt(H)[0],u=o("#i-remind"),U=o("#i-due")||null,O=y.classList.contains("checked")?1:0;if(s)await P("UPDATE checklist_items SET title=?,tab=?,group_name=?,tag=?,role=?,note=?,due_date=?,reminder_days=?,done=?,updated_at=datetime('now') WHERE id=?",[b,o("#i-tab"),o("#i-group"),o("#i-tag"),f,o("#i-note"),U,u===""?null:Number(u),O,s]);else{const Z=(S("SELECT MAX(sort_order) m FROM checklist_items WHERE module=?",[H]).m||0)+1;await Ye("INSERT INTO checklist_items (module,tab,group_name,title,note,tag,role,done,due_date,reminder_days,is_custom,sort_order) VALUES (?,?,?,?,?,?,?,?,?,?,1,?)",[H,o("#i-tab"),o("#i-group"),b,o("#i-note"),o("#i-tag"),f,O,U,u===""?null:Number(u),Z])}T(),os()})}})}const $e=(s,r)=>{const d=S("SELECT value FROM app_settings WHERE key=?",[s]);return d?d.value:r},ht=(s,r)=>P("INSERT INTO app_settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",[s,r]),pr=()=>window.dispatchEvent(new Event("hashchange")),hr=[["accent","#a62639"],["pink","#d6749a"],["gold","#b08d4f"],["green","#4c7a55"]];function Zt(s){const r=S("SELECT * FROM couple_info WHERE id=1")||{},d=gs(),E=$e("pref.theme_color","accent"),h=$e("pref.dark_mode","auto"),g=$e("pref.show_lunar","1")==="1",T=$e("notify.due_reminder","1")==="1",y=$e("notify.daily_summary","0")==="1",$=$e("notify.daily_time","09:00");s.innerHTML=`
    <div class="topbar"><div><h1>設定</h1><div class="sub">新人資訊、資料儲存與個人偏好</div></div></div>
    <div class="settings-grid">
      <div class="settings-col">
        <div class="card card-pad">
          <div class="card-head"><h3 class="section-title">${L("heart",18)} 新人資訊</h3></div>
          <div class="two-col">
            <div class="field"><label>新郎姓名</label><input class="input" id="c-groom" value="${p(r.groom_name||"")}"></div>
            <div class="field"><label>新娘姓名</label><input class="input" id="c-bride" value="${p(r.bride_name||"")}"></div>
          </div>
          <div class="two-col" style="margin-top:12px">
            <div class="field"><label>婚禮日期</label><input class="input" type="date" id="c-date" value="${p(r.wedding_date||"")}"></div>
            <div class="field"><label>宴客地點</label><input class="input" id="c-venue" value="${p(r.venue||"")}"></div>
          </div>
          <button class="btn btn-primary" id="save-couple" style="margin-top:14px">${L("check",16)} 儲存新人資訊</button>
        </div>

        <div class="card card-pad">
          <div class="card-head"><h3 class="section-title">${L("palette",18)} 顯示與偏好</h3></div>
          <div class="set-row"><span>主題色</span><div class="swatches">
            ${hr.map(([b,f])=>`<button class="swatch ${E===b?"active":""}" data-color="${b}" style="background:${f}"></button>`).join("")}
          </div></div>
          <div class="set-row"><span>深色模式</span>
            <select class="select" id="s-dark" style="width:auto">
              ${[["auto","自動"],["light","淺色"],["dark","深色"]].map(([b,f])=>`<option value="${b}" ${h===b?"selected":""}>${f}</option>`).join("")}
            </select></div>
          <div class="set-row"><span>顯示農曆日期</span><span class="toggle ${g?"on":""}" data-set="pref.show_lunar"><span class="knob"></span></span></div>
        </div>
      </div>

      <div class="settings-col">
        <div class="card card-pad">
          <div class="card-head"><h3 class="section-title">${L("database",18)} 資料儲存（SQLite）</h3><span class="chip success"><span class="dot success"></span>已同步</span></div>
          <p class="muted db-desc">所有清單勾選與設定自動儲存於私有 GitHub 儲存庫，多台裝置即時共用同一份資料，每次儲存都留有歷史版本。</p>
          <div class="db-file">${L("file-down",16)}<b>wedding_prep.db</b><span>${d.sizeMB} MB</span></div>
          <div class="stat-grid" style="margin:14px 0">
            <div class="stat-tile"><span>設定筆數</span><b>${d.settings}</b></div>
            <div class="stat-tile"><span>資料項目</span><b>${d.items}</b></div>
            <div class="stat-tile"><span>資料庫大小</span><b>${d.sizeKB} KB</b></div>
          </div>
          <div class="modal-foot" style="padding:0">
            <button class="btn btn-primary" id="export-db">${L("download",16)} 匯出備份</button>
            <button class="btn btn-ghost" id="import-db">${L("upload",16)} 匯入 / 還原</button>
          </div>
          <input type="file" id="import-file" accept=".db,.sqlite,application/octet-stream" hidden>
          <button class="btn btn-ghost" id="reset-db" style="margin-top:10px;color:var(--accent);border-color:var(--accent)">${L("rotate-ccw",16)} 重設為初始資料</button>
        </div>

        ${`
        <div class="card card-pad">
          <div class="card-head"><h3 class="section-title">${L("key",18)} 存取鑰匙</h3><span class="chip success"><span class="dot success"></span>已登入</span></div>
          <p class="muted db-desc">把專屬連結私訊給一起籌備的人，對方點開就能直接進入，不用輸入鑰匙。連結內含鑰匙，拿到的人都能檢視與修改資料，請勿公開張貼。</p>
          <div class="modal-foot" style="padding:0">
            <button class="btn btn-primary" id="copy-link">${L("link",16)} 複製專屬連結</button>
            <button class="btn btn-ghost" id="sign-out">${L("x",16)} 這台裝置登出</button>
          </div>
          <input class="input" id="share-link" readonly hidden style="margin-top:10px">
        </div>`}

        <div class="card card-pad">
          <div class="card-head"><h3 class="section-title">${L("bell",18)} 通知提醒</h3></div>
          <div class="set-row"><span>待辦到期提醒</span><span class="toggle ${T?"on":""}" data-set="notify.due_reminder"><span class="knob"></span></span></div>
          <div class="set-row"><span>每日籌備摘要</span><span class="toggle ${y?"on":""}" data-set="notify.daily_summary"><span class="knob"></span></span></div>
          <div class="set-row"><span>每日提醒時間</span><input class="select" type="time" id="s-time" value="${p($)}" style="width:auto"></div>
        </div>
      </div>
    </div>`,s.querySelector("#save-couple").addEventListener("click",async()=>{await P("UPDATE couple_info SET groom_name=?, bride_name=?, wedding_date=?, venue=?, updated_at=datetime('now') WHERE id=1",[s.querySelector("#c-groom").value.trim(),s.querySelector("#c-bride").value.trim(),s.querySelector("#c-date").value,s.querySelector("#c-venue").value.trim()]),pr()}),s.querySelectorAll(".swatch").forEach(b=>b.addEventListener("click",async()=>{await ht("pref.theme_color",b.dataset.color),yt(),Zt(s)})),s.querySelector("#s-dark").addEventListener("change",async b=>{await ht("pref.dark_mode",b.target.value),yt()}),s.querySelectorAll("[data-set]").forEach(b=>b.addEventListener("click",async()=>{const f=b.dataset.set,u=$e(f,"0")==="1";await ht(f,u?"0":"1"),Zt(s)})),s.querySelector("#s-time").addEventListener("change",b=>ht("notify.daily_time",b.target.value)),s.querySelector("#export-db").addEventListener("click",()=>{const b=new Blob([zn()],{type:"application/octet-stream"}),f=URL.createObjectURL(b),u=document.createElement("a");u.href=f,u.download="wedding_prep.db",u.click(),URL.revokeObjectURL(f)});const o=s.querySelector("#import-file");s.querySelector("#import-db").addEventListener("click",()=>o.click()),o.addEventListener("change",async b=>{const f=b.target.files[0];if(!f)return;const u=await f.arrayBuffer();await Qn(new Uint8Array(u)),location.reload()}),s.querySelector("#reset-db").addEventListener("click",async()=>{confirm("確定要重設為初始資料嗎？目前的變更將會遺失。")&&(await Kn(),location.reload())}),s.querySelector("#copy-link").addEventListener("click",async b=>{const f=b.currentTarget,u=`${location.origin}${location.pathname}#key=${encodeURIComponent(gt())}`;try{await navigator.clipboard.writeText(u),f.innerHTML=`${L("check",16)} 已複製`}catch{const U=s.querySelector("#share-link");U.value=u,U.hidden=!1,U.select()}}),s.querySelector("#sign-out").addEventListener("click",()=>{na(),location.reload()})}const vr=["迎娶","婚宴","全程"],Ms=["男方","女方","共同"],fr=s=>({男方:"groom",女方:"bride",共同:"family"})[s]||"other",Vt=(s,r)=>{const d=S("SELECT value FROM app_settings WHERE key=?",[s]);return d?d.value:r},Pe=s=>!!(s.assignee||"").trim(),br=["迎娶","婚宴","全部"],mr=(s,r)=>r==="全部"||s.stage===r||s.stage==="全程",de={tab:"全部",side:"全部"};let ea=null;function je(s){ea=s;const r=Vt("staff.only_unassigned","0")==="1",d=Vt("staff.show_duties","1")==="1",E=K("SELECT * FROM staff_roles ORDER BY sort_order, id"),h=E.filter(Pe).length,g=E.reduce((f,u)=>f+(u.headcount||0),0);let T=E.filter(f=>mr(f,de.tab));de.side!=="全部"&&(T=T.filter(f=>f.side===de.side)),r&&(T=T.filter(f=>!Pe(f)));const y=[];for(const f of T){let u=y.find(U=>U.name===f.category);u||(u={name:f.category,items:[]},y.push(u)),u.items.push(f)}const $=br.map(f=>`<button class="pill ${de.tab===f?"active":""}" data-tab="${f}">${f}</button>`).join(""),o=f=>{const u=Pe(f)?`<b>${p(f.assignee)}</b>${f.phone?`<a href="tel:${p(f.phone.replace(/[^\d+]/g,""))}" data-tel>${L("phone",12)} ${p(f.phone)}</a>`:""}`:'<span class="chip accent">未指派</span>';return`
      <div class="check-row staff-row ${Pe(f)?"filled":""}" data-id="${f.id}">
        <span class="staff-avatar">${L("user",16)}</span>
        <div class="body"><b>${p(f.title)}</b>${d&&f.duties?`<span>${p(f.duties)}</span>`:""}</div>
        <div class="staff-who">${u}</div>
        <div class="staff-tags">
          <span class="rtag ${fr(f.side)}">${p(f.side)}</span>
          <span class="staff-count">${f.headcount||0} 人</span>
        </div>
        ${L("chevron-right",16)}
      </div>`},b=y.length?y.map(f=>{const u=f.items.filter(Pe).length;return`
      <div class="grp">
        <div class="grp-head">${L("user",16)}<b>${p(f.name||"未分組")}</b><span class="cnt">已指派 ${u} / ${f.items.length}</span></div>
        ${f.items.map(o).join("")}
      </div>`}).join(""):`<div class="card card-pad"><div class="state">
        <div class="state-icon" style="background:var(--accent-tint);color:var(--accent)">${L("user",30)}</div>
        <h3>${r?"這裡的角色都已指派 🎉":"此分類尚無角色"}</h3>
        <p>點右上「新增角色」可加入其他現場人員。</p></div></div>`;s.innerHTML=`
    <div class="topbar">
      <div><h1>現場人員配置</h1><div class="sub">已指派 ${h} / ${E.length} 個角色 · 預計 ${g} 人</div></div>
      <div class="topbar-actions"><button class="btn btn-primary" id="add-role">${L("plus",16)} 新增角色</button></div>
    </div>
    <div class="pill-row">${$}</div>
    <div class="sched-cols">
      <div class="check-list">${b}</div>
      <div class="card card-pad">
        <div class="card-head"><h3 class="section-title">${L("sliders",18)} 檢視與設定</h3></div>
        <label class="sec-label">顯示選項</label>
        <div class="set-row"><span>只看未指派角色</span><span class="toggle ${r?"on":""}" data-set="staff.only_unassigned"><span class="knob"></span></span></div>
        <div class="set-row"><span>顯示職責說明</span><span class="toggle ${d?"on":""}" data-set="staff.show_duties"><span class="knob"></span></span></div>
        <div class="nav-divider"></div>
        <label class="sec-label">負責方篩選</label>
        <div class="pill-row">${["全部",...Ms].map(f=>`<button class="pill sm ${de.side===f?"active":""}" data-side="${f}">${f}</button>`).join("")}</div>
        <div class="nav-divider"></div>
        <p class="muted staff-hint">「迎娶」「婚宴」分頁都會列出全程在場的角色（總召、伴郎伴娘、專業團隊）。</p>
      </div>
    </div>`,s.querySelectorAll("[data-tab]").forEach(f=>f.addEventListener("click",()=>{de.tab=f.dataset.tab,je(s)})),s.querySelectorAll("[data-side]").forEach(f=>f.addEventListener("click",()=>{de.side=f.dataset.side,je(s)})),s.querySelectorAll("[data-set]").forEach(f=>f.addEventListener("click",async()=>{const u=f.dataset.set,U=Vt(u,u==="staff.show_duties"?"1":"0")==="1";await P("INSERT INTO app_settings (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",[u,U?"0":"1"]),je(s)})),s.querySelectorAll("[data-tel]").forEach(f=>f.addEventListener("click",u=>u.stopPropagation())),s.querySelectorAll(".staff-row").forEach(f=>f.addEventListener("click",()=>cs(Number(f.dataset.id)))),s.querySelector("#add-role").addEventListener("click",()=>cs(null))}function ls(){ea&&je(ea)}function cs(s){const r=s?S("SELECT * FROM staff_roles WHERE id=?",[s]):{stage:de.tab==="全部"?"全程":de.tab,side:"共同",headcount:1},d=K("SELECT DISTINCT category FROM staff_roles WHERE category IS NOT NULL ORDER BY sort_order").map(h=>h.category),E=`
    <div class="modal-head">
      <div class="mh-title">${L("user",20)}<div><b>${s?"角色詳情":"新增角色"}</b><span>現場人員配置</span></div></div>
      <button class="modal-close" data-close>${L("x",18)}</button>
    </div>
    <div class="modal-body form-body">
      <div class="field"><label>角色名稱</label><input class="input" id="r-title" value="${p(r.title||"")}" placeholder="例如：總召（男方代表）"></div>
      <div class="two-col">
        <div class="field"><label>負責人</label><input class="input" id="r-assignee" value="${p(r.assignee||"")}" placeholder="多人以「、」分隔"></div>
        <div class="field"><label>聯絡電話</label><input class="input" id="r-phone" type="tel" value="${p(r.phone||"")}" placeholder="09xx-xxx-xxx"></div>
      </div>
      <div class="field"><label>負責方</label><div class="seg" id="r-side">
        ${Ms.map(h=>`<button type="button" class="seg-btn ${(r.side||"共同")===h?"active":""}" data-s="${h}">${h}</button>`).join("")}
      </div></div>
      <div class="two-col">
        <div class="field"><label>階段</label>
          <select class="select" id="r-stage">${vr.map(h=>`<option ${r.stage===h?"selected":""}>${h}</option>`).join("")}</select></div>
        <div class="field"><label>建議人數</label><input class="input" id="r-count" type="number" min="0" value="${r.headcount??1}"></div>
      </div>
      <div class="field"><label>分組</label><input class="input" id="r-cat" list="r-cats" value="${p(r.category||"")}" placeholder="總統籌 / 迎娶儀式…">
        <datalist id="r-cats">${d.map(h=>`<option value="${p(h)}">`).join("")}</datalist></div>
      <div class="field"><label>職責說明</label><textarea class="input" id="r-duties" placeholder="這個角色當天要做什麼…">${p(r.duties||"")}</textarea></div>
      <div class="field"><label>備註</label><textarea class="input" id="r-note" placeholder="到場時間、交接事項…">${p(r.note||"")}</textarea></div>
    </div>
    <div class="modal-foot form-foot">
      ${s?`<button class="btn btn-ghost" id="r-del">${L("trash",16)} 刪除</button>`:""}
      <button class="btn btn-ghost" data-close>取消</button>
      <button class="btn btn-primary" id="r-save">${L("check",16)} 儲存</button>
    </div>`;Ie(E,{onMount(h,g){h.querySelector("#r-side").addEventListener("click",y=>{const $=y.target.closest(".seg-btn");$&&(h.querySelectorAll("#r-side .seg-btn").forEach(o=>o.classList.remove("active")),$.classList.add("active"))});const T=h.querySelector("#r-del");T&&T.addEventListener("click",async()=>{await P("DELETE FROM staff_roles WHERE id=?",[s]),g(),ls()}),h.querySelector("#r-save").addEventListener("click",async()=>{const y=u=>h.querySelector(u).value.trim(),$=y("#r-title");if(!$){h.querySelector("#r-title").focus();return}const o=h.querySelector("#r-side .seg-btn.active")?.dataset.s||"共同",b=Math.max(0,parseInt(y("#r-count"),10)||0),f=[y("#r-stage"),y("#r-cat")||null,$,o,b,y("#r-assignee")||null,y("#r-phone")||null,y("#r-duties")||null,y("#r-note")||null];if(s)await P("UPDATE staff_roles SET stage=?,category=?,title=?,side=?,headcount=?,assignee=?,phone=?,duties=?,note=?,updated_at=datetime('now') WHERE id=?",[...f,s]);else{const u=(S("SELECT MAX(sort_order) m FROM staff_roles").m||0)+1;await Ye("INSERT INTO staff_roles (stage,category,title,side,headcount,assignee,phone,duties,note,sort_order) VALUES (?,?,?,?,?,?,?,?,?,?)",[...f,u])}g(),ls()})}})}const As={dashboard:s=>_s(s),cake:s=>la(s),schedule:s=>Ss(s),ceremony:s=>Ne(s,"ceremony"),photo:s=>Ne(s,"photo"),staff:s=>je(s),todos:s=>Ns(s),settings:s=>Zt(s)};function Er(){const s=location.hash.replace(/^#\//,"");return As[s]?s:"dashboard"}function ds(){const s=Er(),{root:r,main:d}=tr(s),E=document.getElementById("app");E.innerHTML="",E.appendChild(r);try{As[s](d)}catch(h){console.error(h),d.innerHTML=`<div class="card card-pad"><div class="state"><h3>載入發生問題</h3><p>${h.message}</p></div></div>`}window.scrollTo(0,0)}function Lr(){window.addEventListener("hashchange",ds),ds()}const yr=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;function us(s,r,d){s.innerHTML=`
    <div class="state" style="min-height:100vh">
      <div class="state-icon" style="background:var(--accent-tint);color:var(--accent)">${L("key",30)}</div>
      <h3>婚禮籌備中心</h3>
      <p>${yr()?"主畫面 App 與瀏覽器分開保存登入，第一次開啟請再輸入一次鑰匙，或直接貼上專屬連結。":"資料存放在私有空間。請輸入存取鑰匙，或直接用專屬連結開啟。"}</p>
      <form id="gate" class="field" style="width:100%;max-width:340px;text-align:left">
        <label for="gate-key">存取鑰匙或專屬連結</label>
        <input class="input" id="gate-key" type="password" placeholder="github_pat_… 或 https://…#key=…" autocomplete="off" required>
        ${r?`<span style="color:var(--accent);font-size:.8rem">${p(r)}</span>`:""}
        <button class="btn btn-primary" type="submit" style="margin-top:8px;justify-content:center">進入</button>
      </form>
    </div>`,s.querySelector("#gate").addEventListener("submit",E=>{E.preventDefault();const h=s.querySelector("#gate-key").value.trim(),g=h.match(/#key=([^&\s]+)/);sa(g?decodeURIComponent(g[1]):h),d()})}const gr={accent:null,pink:["#d6749a","#b85683","#fbe7ef"],gold:["#b08d4f","#8a6b34","#f3e7cf"],green:["#4c7a55","#3a6042","#e1ede1"]};function yt(){try{const r=document.documentElement,d=S("SELECT value FROM app_settings WHERE key='pref.dark_mode'")?.value||"auto";d==="dark"?r.dataset.theme="dark":d==="light"?r.dataset.theme="light":delete r.dataset.theme;const E=S("SELECT value FROM app_settings WHERE key='pref.theme_color'")?.value||"accent",h=gr[E];h?(r.style.setProperty("--accent",h[0]),r.style.setProperty("--accent-deep",h[1]),r.style.setProperty("--accent-tint",h[2])):(r.style.removeProperty("--accent"),r.style.removeProperty("--accent-deep"),r.style.removeProperty("--accent-tint"))}catch{}const s=getComputedStyle(document.documentElement).getPropertyValue("--statusbar").trim();s&&document.querySelector('meta[name="theme-color"]')?.setAttribute("content",s)}window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",yt);"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));async function ta(){const s=document.getElementById("app");{const r=location.hash.match(/^#key=(.+)$/);if(r&&(sa(decodeURIComponent(r[1])),history.replaceState(null,"",location.pathname+location.search)),!gt())return us(s,"",ta)}s.innerHTML='<div class="state" style="min-height:100vh"><p class="muted">載入中…</p></div>';try{await Gn(),yt(),Lr()}catch(r){if(r instanceof Ge)return na(),us(s,r.message,ta);console.error(r),s.innerHTML=`<div class="state" style="min-height:100vh"><h3>初始化失敗</h3><p>${r.message}</p></div>`}}ta();
